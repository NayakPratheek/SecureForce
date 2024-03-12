import React, { useState, useEffect } from 'react';
import ViewTab from './ViewTab';

function Commanders() {
  const [commanders, setCommanders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/commanders');
        if (response.ok) {
          const data = await response.json();
          setCommanders(data);
        } else {
          console.error('Error fetching commanders data. Server responded with:', response.status, response.statusText);
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
                  Commander ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Commander Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Commander Rank
                </th>
                <th scope="col" className="px-6 py-3">
                  Unit ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone
                </th>
                <th scope="col" className="px-6 py-3">
                  Date of Commission
                </th>
                <th scope="col" className="px-6 py-3">
                  Awards
                </th>
              </tr>
            </thead>
            <tbody>
              {commanders.map(commander => (
                <tr key={commander.commander_id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {commander.commander_id}
                  </td>
                  <td className="px-6 py-4">{commander.commander_name}</td>
                  <td className="px-6 py-4">{commander.commander_rank}</td>
                  <td className="px-6 py-4">{commander.unit_id}</td>
                  <td className="px-6 py-4">{commander.phone}</td>
                  <td className="px-6 py-4">{commander.date_of_commission}</td>
                  <td className="px-6 py-4">{commander.awards}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Commanders;
