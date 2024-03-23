import React, { useState, useEffect } from 'react';
import ViewTab from './ViewTab';

function Units() {
  const [units, setUnits] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/units'); 
        if (response.ok) {
          const data = await response.json();
          setUnits(data);
        } else {
          console.error('Error fetching units data. Server responded with:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    fetchData();
  }, []); 

  return (
    <body class="bg-gray-100 text-gray-800">
       
      <div class="container mx-auto px-4 py-8">  <ViewTab/>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-100">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-100">
          <tr>
            <th scope="col" className="px-6 py-3">
              Unit ID
            </th>
            <th scope="col" className="px-6 py-3">
              Unit Name
            </th>
            <th scope="col" className="px-6 py-3">
              Unit Type
            </th>
            <th scope="col" className="px-6 py-3">
              Unit Head Name
            </th>
            <th scope="col" className="px-6 py-3">
              Unit Head Rank
            </th>
            <th scope="col" className="px-6 py-3">
              Unit Head Phone
            </th>
            <th scope="col" className="px-6 py-3">
              Unit Location
            </th>
            <th scope="col" className="px-6 py-3">
              Date of Establishment
            </th>
          </tr>
        </thead>
        <tbody>
          {units.map(unit => (
            <tr key={unit.unit_id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {unit.unit_id}
              </td>
              <td className="px-6 py-4">{unit.unit_name}</td>
              <td className="px-6 py-4">{unit.unit_type}</td>
              <td className="px-6 py-4">{unit.unit_head_name}</td>
              <td className="px-6 py-4">{unit.unit_head_rank}</td>
              <td className="px-6 py-4">{unit.unit_head_phone}</td>
              <td className="px-6 py-4">{unit.unit_location}</td>
              <td className="px-6 py-4">{unit.date_of_establishment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    </div>
    </body>
    );
}

export default Units;
