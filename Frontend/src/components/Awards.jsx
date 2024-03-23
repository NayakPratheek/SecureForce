import React, { useState, useEffect } from 'react';
import ViewTab from './ViewTab';

function Awards() {
  const [awards, setAwards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/awards');
        if (response.ok) {
          const data = await response.json();
          setAwards(data.filter(award => award.soldier_id !== null));
        } else {
          console.error('Error fetching awards data. Server responded with:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    fetchData();
  }, []); 

  return (
    <div className="bg-gray-100 text-gray-800">
      <ViewTab />
      <div className="container mx-auto px-4 py-8">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-100">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-100">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Soldier ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Award Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Award Issued Date
                </th>
              </tr>
            </thead>
            <tbody>
              {awards.map(award => (
                <tr key={award.soldier_id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {award.soldier_id}
                  </td>
                  <td className="px-6 py-4">{award.award_name || 'N/A'}</td>
                  <td className="px-6 py-4">{award.award_issued_date || 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Awards;
