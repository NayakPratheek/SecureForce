import React, { useState, useEffect } from 'react';
import ViewTab from './ViewTab';

function Equipments() {
  const [equipment, setEquipment] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/equipments');
        if (response.ok) {
          const data = await response.json();
          console.log('Data:', data); 
          setEquipment(data);
        } else {
          console.error('Error fetching equipment data. Server responded with:', response.status, response.statusText);
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
                  Equipment ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Equipment Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Equipment Type
                </th>
                <th scope="col" className="px-6 py-3">
                  Unit ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  Condition
                </th>
              </tr>
            </thead>
            <tbody>
              {equipment.map((equip) => (
                <tr key={equip.equipment_id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {equip.equipment_id}
                  </td>
                  <td className="px-6 py-4">{equip.equipment_name}</td>
                  <td className="px-6 py-4">{equip.equipment_type}</td>
                  <td className="px-6 py-4">{equip.unit_id}</td>
                  <td className="px-6 py-4">{equip.quantity}</td>
                  <td className="px-6 py-4">{equip.condition}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </body>
  );
}

export default Equipments;
