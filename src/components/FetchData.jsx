'use client';

import { useState, useEffect } from 'react';

export default function FetchSpecificColumns() {
  const [sheetData, setSheetData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchGoogleSheetData = async () => {
    setLoading(true);
    setError(null);

    // Updated Sheet ID from your link
    const sheetId = '1912KB6nC6AVEB7fJIHo24Cjcap7XzVWFM6-tNjTAtEE';
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY;

    if (!apiKey) {
      setError('Google Sheets API key is missing.');
      setLoading(false);
      return;
    }

    // Note the change to the sheet name - exactly as it appears
    const range = encodeURIComponent('Students_data Sample!A:AZ');
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;

    console.log('Debugging Information:', {
      sheetId: sheetId,
      range: range,
      fullUrl: url,
      apiKeyPresent: !!apiKey
    });

    try {
      const response = await fetch(url);

      console.log('Response Status:', response.status);
      
      const responseText = await response.text();
      console.log('Raw Response:', responseText);

      let data;
      try {
        data = responseText ? JSON.parse(responseText) : null;
      } catch (parseError) {
        console.error('JSON Parsing Error:', parseError);
        setError(`Failed to parse response: ${parseError.message}`);
        setLoading(false);
        return;
      }

      if (!response.ok) {
        console.error('Error Response:', data);
        setError(`API Error: ${data?.error?.message || 'Unknown error'}`);
        setLoading(false);
        return;
      }

      if (!data || !data.values || data.values.length === 0) {
        setError('No data found in the specified range.');
        setLoading(false);
        return;
      }

      // Filter specific columns
      const requiredIndices = [0, 1, 2, 4, 48, 49, 50, 51];
      const filteredData = data.values.map((row) =>
        requiredIndices.map((index) => row[index] || '')
      );

      setSheetData(filteredData);
    } catch (error) {
      console.error('Comprehensive Fetch Error:', {
        message: error.message,
        name: error.name,
        stack: error.stack
      });
      setError(`Network error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Google Sheets Data Retriever</h1>
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
          <span className="block sm:inline">{error}</span>
          <details className="text-xs mt-2">
            <summary>Troubleshooting Tips</summary>
            <ul>
              <li>Verify API key is correct</li>
              <li>Check Google Cloud Console permissions</li>
              <li>Confirm sheet is publicly accessible</li>
              <li>Ensure sheet name is exactly "Students_data Sample"</li>
            </ul>
          </details>
        </div>
      )}
      
      {sheetData && (
        <div className="overflow-x-auto mt-4">
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                {sheetData[0].map((header, index) => (
                  <th key={index} className="border p-2">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sheetData.slice(1).map((row, rowIndex) => (
                <tr key={rowIndex} className="hover:bg-gray-50">
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="border p-2">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}