import React, { useState, useEffect } from 'react';
import UpdateTab from './UpdateTab';

function Eqipmentsup() {
  const [equipment, setEquipment] = useState([]);
  const [formData, setFormData] = useState({
    Equipment_ID: '',
    Equipment_Name: '',
    Equipment_Type: '',
    Unit_ID: '',
    Quantity: '',
    Condition: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/equipments');
        if (response.ok) {
          const data = await response.json();
          setEquipment(data);
        } else {
          console.error('Error fetching equipments data. Server responded with:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    fetchData();
  }, []);

  const handleEdit = (equipment) => {
    const editedEquipment = {
      Equipment_ID: equipment.equipment_id,
      Equipment_Name: equipment.equipment_name ,
      Equipment_Type: equipment.equipment_type ,
      Unit_ID: equipment.unit_id ,
      Quantity: equipment.quantity ,
      Condition: equipment.condition ,
    };
    setFormData(editedEquipment);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:5000/equipments/${formData.Equipment_ID}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Data updated successfully!');
        const updatedResponse = await fetch('http://localhost:5000/equipments');
        if (updatedResponse.ok) {
          const updatedData = await updatedResponse.json();
          setEquipment(updatedData);
        }
      } else {
        console.error('Error updating data. Server responded with:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <UpdateTab />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-2xl mb-4">Equipment Data</h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
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
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
              <tbody>
                {equipment.map((equip) => (
                  <tr key={equip.equipment_id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-white">
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {equip.equipment_id}
                    </td>
                    <td className="px-6 py-4">{equip.equipment_name}</td>
                    <td className="px-6 py-4">{equip.equipment_type}</td>
                    <td className="px-6 py-4">{equip.unit_id}</td>
                    <td className="px-6 py-4">{equip.quantity}</td>
                    <td className="px-6 py-4">{equip.condition}</td>
                    <td className="px-6 py-4">
                      <button onClick={() => handleEdit(equip)} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-2 py-1 rounded-md cursor-pointer mr-2">Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>            
              </table>
          </div>
        </div>
        <div>
          <h2 className="text-2xl mb-4">Update Equipment Data</h2>
          <form onSubmit={handleUpdate} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="Equipment_ID" className="block">Equipment ID:</label>
                <input
                  type="text"
                  id="Equipment_ID"
                  name="Equipment_ID"
                  value={formData.Equipment_ID}
                  onChange={handleChange}
                  className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                />
              </div>
              <div>
                <label htmlFor="Equipment_Name" className="block">Equipment Name:</label>
                <input
                  type="text"
                  id="Equipment_Name"
                  name="Equipment_Name"
                  value={formData.Equipment_Name}
                  onChange={handleChange}
                  className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                />
              </div>
              <div>
                <label htmlFor="Equipment_Type" className="block">Equipment Type:</label>
                <input
                  type="text"
                  id="Equipment_Type"
                  name="Equipment_Type"
                  value={formData.Equipment_Type}
                  onChange={handleChange}
                  className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                />
              </div>
              <div>
                <label htmlFor="Unit_ID" className="block">Unit ID:</label>
                <input
                  type="text"
                  id="Unit_ID"
                  name="Unit_ID"
                  value={formData.Unit_ID}
                  onChange={handleChange}
                  className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                />
              </div>
              <div>
                <label htmlFor="Quantity" className="block">Quantity:</label>
                <input
                  type="text"
                  id="Quantity"
                  name="Quantity"
                  value={formData.Quantity}
                  onChange={handleChange}
                  className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                />
              </div>
              <div>
                <label htmlFor="Condition" className="block">Condition:</label>
                <input
                  type="text"
                  id="Condition"
                  name="Condition"
                  value={formData.Condition}
                  onChange={handleChange}
                  className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                />
              </div>
            </div>
            <input
              type="submit"
              value="Submit"
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-4 py-2 rounded-md cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Eqipmentsup;
