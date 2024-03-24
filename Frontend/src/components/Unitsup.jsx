import React, { useState, useEffect } from 'react';
import UpdateTab from './UpdateTab';

function Unitsup() {
  const [units, setUnits] = useState([]);
  const [formData, setFormData] = useState({
    Unit_ID: '',
    Unit_Name: '',
    Unit_Type: '',
    Unit_Head_Name: '',
    Unit_Head_Rank: '',
    Unit_Head_Phone: '',
    Unit_Location: '',
    Date_of_Establishment: '',
  });

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

  const handleEdit = (unit) => {
    const editedUnit = {
      Unit_ID: unit.unit_id,
      Unit_Name: unit.unit_name ? unit.unit_name.trim() : '',
      Unit_Type: unit.unit_type ? unit.unit_type.trim() : '',
      Unit_Head_Name: unit.unit_head_name ? unit.unit_head_name.trim() : '',
      Unit_Head_Rank: unit.unit_head_rank ? unit.unit_head_rank.trim() : '',
      Unit_Head_Phone: unit.unit_head_phone ? unit.unit_head_phone.trim() : '',
      Unit_Location: unit.unit_location ? unit.unit_location.trim() : '',
      Date_of_Establishment: unit.date_of_establishment ? unit.date_of_establishment : '',
    };
    setFormData(editedUnit);
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
      const response = await fetch(`http://localhost:5000/units/${formData.Unit_ID}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Data updated successfully!');
        const updatedResponse = await fetch('http://localhost:5000/units');
        if (updatedResponse.ok) {
          const updatedData = await updatedResponse.json();
          setUnits(updatedData);
        }
      } else {
        console.error('Error updating data. Server responded with:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };


  const handleDelete = async (Unit_ID) => {
    try {
      const response = await fetch(`http://localhost:5000/units/${Unit_ID}`, {
        method: 'DELETE',
        
      });
      if (response.ok) {
        alert('Award deleted successfully!');
        const updatedResponse = await fetch('http://localhost:5000/units');
        if (updatedResponse.ok) {
          const updatedData = await updatedResponse.json();
          setUnits(updatedData);
        }
      } else {
        console.error('Error deleting soldier. Server responded with:', response.status, response.statusText);
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
          <h2 className="text-2xl mb-4">Unit Data</h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-white">
                  <th className="px-6 py-3">Unit ID</th>
                  <th className="px-6 py-3">Unit Name</th>
                  <th className="px-6 py-3">Unit Type</th>
                  <th className="px-6 py-3">Unit Head Name</th>
                  <th className="px-6 py-3">Unit Head Rank</th>
                  <th className="px-6 py-3">Unit Head Phone</th>
                  <th className="px-6 py-3">Unit Location</th>
                  <th className="px-6 py-3">Date of Establishment</th>
                  <th className="px-6 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {units.map((unit) => (
                  <tr key={unit.unit_id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-white">

                    <td className="px-6 py-4">{unit.unit_id}</td>
                    <td className="px-6 py-4">{unit.unit_name}</td>
                    <td className="px-6 py-4">{unit.unit_type}</td>
                    <td className="px-6 py-4">{unit.unit_head_name}</td>
                    <td className="px-6 py-4">{unit.unit_head_rank}</td>
                    <td className="px-6 py-4">{unit.unit_head_phone}</td>
                    <td className="px-6 py-4">{unit.unit_location}</td>
                    <td className="px-6 py-4">{unit.date_of_establishment}</td>
                    <td className="px-6 py-4">
                      <button onClick={() => handleEdit(unit)} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-2 py-1 rounded-md cursor-pointer mr-2">Edit</button>
                      <button onClick={() => handleDelete(unit.unit_id)} className="bg-red-500 hover:bg-red-600 text-white font-semibold px-2 py-1 rounded-md cursor-pointer">Delete</button>

                    </td>
                  </tr>
                ))}
              </tbody>            
              </table>
          </div>
        </div>
        <div>
          <h2 className="text-2xl mb-4">Update Unit Data</h2>
          <form onSubmit={handleUpdate} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                <label htmlFor="Unit_Name" className="block">Unit Name:</label>
                <input
                  type="text"
                  id="Unit_Name"
                  name="Unit_Name"
                  value={formData.Unit_Name}
                  onChange={handleChange}
                  className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                />
              </div>
              <div>
                <label htmlFor="Unit_Type" className="block">Unit Type:</label>
                <input
                  type="text"
                  id="Unit_Type"
                  name="Unit_Type"
                  value={formData.Unit_Type}
                  onChange={handleChange}
                  className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                />
              </div>
              <div>
                <label htmlFor="Unit_Head_Name" className="block">Unit Head Name:</label>
                <input
                  type="text"
                  id="Unit_Head_Name"
                  name="Unit_Head_Name"
                  value={formData.Unit_Head_Name}
                  onChange={handleChange}
                  className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                />
              </div>
              <div>
                <label htmlFor="Unit_Head_Rank" className="block">Unit Head Rank:</label>
                <input
                  type="text"
                  id="Unit_Head_Rank"
                  name="Unit_Head_Rank"
                  value={formData.Unit_Head_Rank}
                  onChange={handleChange}
                  className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                />
              </div>
              <div>
                <label htmlFor="Unit_Head_Phone" className="block">Unit Head Phone:</label>
                <input
                  type="text"
                  id="Unit_Head_Phone"
                  name="Unit_Head_Phone"
                  value={formData.Unit_Head_Phone}
                  onChange={handleChange}
                  className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                />
              </div>
              <div>
                <label htmlFor="Unit_Location" className="block">Unit Location:</label>
                <input
                  type="text"
                  id="Unit_Location"
                  name="Unit_Location"
                  value={formData.Unit_Location}
                  onChange={handleChange}
                  className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                />
              </div>
              <div>
                <label htmlFor="Date_of_Establishment" className="block">Date of Establishment:</label>
                <input
                  type="date"
                  id="Date_of_Establishment"
                  name="Date_of_Establishment"
                  value={formData.Date_of_Establishment}
                  onChange={handleChange}
                  className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                />
              </div>
            </div>
            <input
              type="submit"
              value="Update"
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-4 py-2 rounded-md cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Unitsup;
