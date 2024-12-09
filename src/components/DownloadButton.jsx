'use client';

import { PDFDocument, PDFTextField, PDFDropdown, PDFCheckBox, PDFRadioGroup } from 'pdf-lib';
import { useState } from 'react';

export default function GeneratePdfsFromGoogleSheet() {
  const [sheetData, setSheetData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isGenerating, setIsGenerating] = useState({});

  // Fetch Google Sheet data
  const fetchGoogleSheetData = async () => {
    setLoading(true);
    setError(null);

    const sheetId = '1912KB6nC6AVEB7fJIHo24Cjcap7XzVWFM6-tNjTAtEE';
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY;
    const range = encodeURIComponent('Students_data Sample!A:D'); // Adjust the range as needed
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch data from Google Sheets.');

      const data = await response.json();
      if (!data || !data.values || data.values.length === 0) {
        setError('No data found in the specified range.');
        return;
      }

      setSheetData(data.values); // Store the fetched data
    } catch (err) {
      setError(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Generate a PDF for a specific student
  const generatePdf = async (rowData, index) => {
    setIsGenerating((prev) => ({ ...prev, [index]: true }));

    try {
      const pdfUrl = '/organizedReport.pdf'; // Ensure this path is correct
      const response = await fetch(pdfUrl);
      if (!response.ok) throw new Error('Failed to fetch the PDF file.');
      const pdfBytes = await response.arrayBuffer();

      const pdfDoc = await PDFDocument.load(pdfBytes);
      const form = pdfDoc.getForm();

      // Optional: Log field names for debugging
      /*
      const fields = form.getFields();
      fields.forEach((field) => {
        console.log(`Field name: ${field.getName()}`);
      });
      */

      // Map fields with fetched and dummy data
      const dummyData = {
        // Student data from rowData
        Name: rowData[0] || 'Unknown',
        USN: rowData[1] || 'N/A',
        Branch: rowData[2] || 'N/A',
        Semester: rowData[3] || 'N/A',

        // Ensure these field names match your PDF form fields exactly
        primaryDISC: 'D',
        secDISC: 'I',
        personalityDESC:
          'Dynamic and highly adaptable.\nExcels in teamwork.\nValues creativity and empathy.\nA strong leader.',
        LAlevel: 'L2',
        VAlevel: 'L3',
        QAlevel: 'L4',
        // Add more fields and data as needed
      };

      // Populate the form fields
      for (const [fieldName, value] of Object.entries(dummyData)) {
        try {
          const field = form.getField(fieldName);
          if (field) {
            if (value != null && value !== '') {
              if (field instanceof PDFTextField) {
                field.setText(value.toString());
              } else if (field instanceof PDFDropdown) {
                field.select(value.toString());
              } else if (field instanceof PDFCheckBox) {
                if (value === true || value === 'true') {
                  field.check();
                } else {
                  field.uncheck();
                }
              } else if (field instanceof PDFRadioGroup) {
                field.select(value.toString());
              }
              // Handle other field types if necessary
            } else {
              // Skip setting the field if there's no data
              console.warn(`No data for field "${fieldName}". Skipping.`);
            }
          } else {
            console.warn(`Field "${fieldName}" not found in the PDF.`);
          }
        } catch (err) {
          console.warn(`Error processing field "${fieldName}":`, err);
        }
      }

      // Flatten the form to make it non-editable
      try {
        form.flatten();
      } catch (err) {
        console.warn('Error flattening form:', err);
      }

      const filledPdfBytes = await pdfDoc.save();

      // Trigger download of the filled PDF
      const blob = new Blob([filledPdfBytes], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `${dummyData.Name}_Report_Card.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error(`Error generating PDF for row ${index}:`, err);
    } finally {
      setIsGenerating((prev) => ({ ...prev, [index]: false }));
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Student Report Card Generator</h1>
      <button
        onClick={fetchGoogleSheetData}
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
      >
        {loading ? 'Loading...' : 'Fetch Data'}
      </button>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4">
          <strong className="font-bold">Error: </strong>
          <span>{error}</span>
        </div>
      )}

      {sheetData.length > 1 && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-4">Student List</h2>
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">USN</th>
                <th className="border px-4 py-2">Branch</th>
                <th className="border px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {sheetData.slice(1).map((row, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{row[0]}</td>
                  <td className="border px-4 py-2">{row[1]}</td>
                  <td className="border px-4 py-2">{row[2]}</td>
                  <td className="border px-4 py-2 text-center">
                    <button
                      onClick={() => generatePdf(row, index)}
                      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled:opacity-50"
                      disabled={isGenerating[index]}
                    >
                      {isGenerating[index] ? 'Generating...' : 'Download'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}