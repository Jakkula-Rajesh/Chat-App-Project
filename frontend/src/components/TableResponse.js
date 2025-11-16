import React from "react";

const TableResponse = ({ structured }) => {
  if (!structured || !structured.columns) return null;

  return (
    <div className="overflow-x-auto mt-3">
      <table className="min-w-full border border-gray-400 dark:border-gray-600">
        <thead className="bg-gray-300 dark:bg-gray-700">
          <tr>
            {structured.columns.map((col, idx) => (
              <th key={idx} className="px-4 py-2 border">
                {col}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {structured.rows.map((row, i) => (
            <tr key={i} className="text-center bg-white dark:bg-gray-800">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-2 border">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableResponse;
