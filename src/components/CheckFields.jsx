'use client';

import { PDFDocument } from 'pdf-lib';
import { useState } from 'react';

export default function FieldNamesButton() {
  const [fieldNames, setFieldNames] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCheckFields = async () => {
    try {
      setErrorMessage('');
      setFieldNames([]);

      // Step 1: Fetch the fillable PDF from a public URL or local asset
      const pdfUrl = '/organizedReport.pdf'; // Replace with the actual path to your PDF
      const response = await fetch(pdfUrl);
      if (!response.ok) throw new Error('Failed to fetch the PDF file.');
      const pdfBytes = await response.arrayBuffer();

      // Step 2: Load the PDF into pdf-lib
      const pdfDoc = await PDFDocument.load(pdfBytes);

      // Step 3: Get the form in the PDF
      const form = pdfDoc.getForm();

      // Step 4: Extract and store all field names
      const fields = form.getFields();
      const names = fields.map((field) => field.getName());
      setFieldNames(names);
    } catch (error) {
      console.error('Error extracting field names:', error);
      setErrorMessage('An error occurred while extracting field names. Please try again later.');
    }
  };

  return (
    <div className="p-4">
      <button
        onClick={handleCheckFields}
        className="mb-4 px-4 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700"
      >
        Check Fillable Fields
      </button>

      {errorMessage && (
        <p className="text-red-600 font-bold">
          {errorMessage}
        </p>
      )}

      {fieldNames.length > 0 ? (
        <div>
          <h2 className="text-lg font-bold">List of Fillable Fields:</h2>
          <ul className="list-disc ml-6">
            {fieldNames.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-gray-600">No fields extracted yet. Click the button above to check fields.</p>
      )}
    </div>
  );
}