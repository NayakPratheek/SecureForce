import React, { useState, useEffect } from 'react';
import ViewTab from './ViewTab';

function Soldiers() {
  const [soldiers, setSoldiers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/soldiers');
        if (response.ok) {
          const data = await response.json();
          setSoldiers(data);
        } else {
          console.error('Error fetching soldiers data. Server responded with:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    fetchData();
  }, []); 

  return (
    <body className="bg-gray-100 text-gray-800">
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
                  Soldier Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Soldier Rank
                </th>
                <th scope="col" className="px-6 py-3">
                  DOB
                </th>
                <th scope="col" className="px-6 py-3">
                  Gender
                </th>
                <th scope="col" className="px-6 py-3">
                  Unit ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Date of Enlistment
                </th>
                <th scope="col" className="px-6 py-3">
                  Date of Discharge
                </th>
                <th scope="col" className="px-6 py-3">
                  Regiment Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone
                </th>
                <th scope="col" className="px-6 py-3">
                  Blood Type
                </th>
                <th scope="col" className="px-6 py-3">
                  Physical Fitness Scores
                </th>
              </tr>
            </thead>
            <tbody>
              {soldiers.map(soldier => (
                <tr key={soldier.soldier_id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {soldier.soldier_id}
                  </td>
                  <td className="px-6 py-4">{soldier.soldier_name}</td>
                  <td className="px-6 py-4">{soldier.soldier_rank}</td>
                  <td className="px-6 py-4">{soldier.dob}</td>
                  <td className="px-6 py-4">{soldier.gender}</td>
                  <td className="px-6 py-4">{soldier.unit_id}</td>
                  <td className="px-6 py-4">{soldier.date_of_enlistment}</td>
                  <td className="px-6 py-4">{soldier.date_of_discharge}</td>
                  <td className="px-6 py-4">{soldier.regiment_name}</td>
                  <td className="px-6 py-4">{soldier.phone}</td>
                  <td className="px-6 py-4">{soldier.blood_type}</td>
                  <td className="px-6 py-4">{soldier.physical_fitness_scores}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </body>
  );
}

export default Soldiers;
