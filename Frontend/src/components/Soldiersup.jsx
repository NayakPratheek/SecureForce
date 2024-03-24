import React, { useState, useEffect } from 'react';
import UpdateTab from './UpdateTab';

function Soldierup() {
  const [soldiers, setSoldiers] = useState([]);
  const [formData, setFormData] = useState({
    Soldier_ID: '',
    Soldier_Name: '',
    Soldier_Rank: '',
    DOB: '',
    Gender: '',
    Unit_ID: '',
    Date_of_Enlistment: '',
    Date_of_Discharge: '',
    Regiment_Name: '',
    Phone: '',
    Blood_Type: '',
    Physical_Fitness_Scores: '',
  });

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

  const handleEdit = (soldier) => {
    const editedSoldier = {
      Soldier_ID: soldier.soldier_id,
      Soldier_Name: soldier.soldier_name ? soldier.soldier_name.trim() : '',
      Soldier_Rank: soldier.soldier_rank,
      DOB: soldier.dob,
      Gender: soldier.gender,
      Unit_ID: soldier.unit_id,
      Date_of_Enlistment: soldier.date_of_enlistment,
      Date_of_Discharge: soldier.date_of_discharge,
      Regiment_Name: soldier.regiment_name,
      Phone: soldier.phone,
      Blood_Type: soldier.blood_type,
      Physical_Fitness_Scores: soldier.physical_fitness_scores,
    };
    setFormData(editedSoldier);
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
      const response = await fetch(`http://localhost:5000/soldiers/${formData.Soldier_ID}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Data updated successfully!');
        const updatedResponse = await fetch('http://localhost:5000/soldiers');
        if (updatedResponse.ok) {
          const updatedData = await updatedResponse.json();
          setSoldiers(updatedData);
        }
      } else {
        console.error('Error updating data. Server responded with:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const handleDelete = async (Soldier_ID) => {
    try {
      const response = await fetch(`http://localhost:5000/soldiers/${Soldier_ID}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert('Soldier deleted successfully!');
        const updatedData = soldiers.filter((sol) => sol.soldier_id !== Soldier_ID);
        setSoldiers(updatedData);
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
          <h2 className="text-2xl mb-4">Soldier Data</h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-100">
                <tr>
                  <th scope="col" className="px-6 py-3">Soldier ID</th>
                  <th scope="col" className="px-6 py-3">Soldier Name</th>
                  <th scope="col" className="px-6 py-3">Soldier Rank</th>
                  <th scope="col" className="px-6 py-3">DOB</th>
                  <th scope="col" className="px-6 py-3">Gender</th>
                  <th scope="col" className="px-6 py-3">Unit ID</th>
                  <th scope="col" className="px-6 py-3">Date of Enlistment</th>
                  <th scope="col" className="px-6 py-3">Date of Discharge</th>
                  <th scope="col" className="px-6 py-3">Regiment Name</th>
                  <th scope="col" className="px-6 py-3">Phone</th>
                  <th scope="col" className="px-6 py-3">Blood Type</th>
                  <th scope="col" className="px-6 py-3">Physical Fitness Scores</th>
                  <th scope="col" className="px-6 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {soldiers.map((soldier) => (
                  <tr key={soldier.Soldier_ID} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-white">
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
                    <td className="px-6 py-4">
                      <button onClick={() => handleEdit(soldier)} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-2 py-1 rounded-md cursor-pointer mr-2">
                        Edit</button>
                      <button onClick={() => handleDelete(soldier.soldier_id)} className="bg-red-500 hover:bg-red-600 text-white font-semibold px-2 py-1 rounded-md cursor-pointer">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h2 className="text-2xl mb-4">Update Soldier Data</h2>
          <form onSubmit={handleUpdate} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="Soldier_ID" className="block">Soldier ID:</label>
                <input
                  type="text"
                  id="Soldier_ID"
                  name="Soldier_ID"
                  value={formData.Soldier_ID}
                  onChange={handleChange}
                  className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                />
              </div>
              <div>
                <label htmlFor="Soldier_Name" className="block">Soldier Name:</label>
                <input
                  type="text"
                  id="Soldier_Name"
                  name="Soldier_Name"
                  value={formData.Soldier_Name}
                  onChange={handleChange}
                  className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                />
              </div>
              <div>
                <label htmlFor="Soldier_Rank" className="block">Soldier Rank:</label>
                <input
                  type="text"
                  id="Soldier_Rank"
                  name="Soldier_Rank"
                  value={formData.Soldier_Rank}
                  onChange={handleChange}
                  className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                />
              </div>
              <div>
                <label htmlFor="DOB" className="block">Date of Birth:</label>
                <input
                  type="date"
                  id="DOB"
                  name="DOB"
                  value={formData.DOB}
                  onChange={handleChange}
                  className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                />
              </div>
              <div>
                <label htmlFor="Gender" className="block">Gender:</label>
                <input
                  type="text"
                  id="Gender"
                  name="Gender"
                  value={formData.Gender}
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
                <label htmlFor="Date_of_Enlistment" className="block">Date of Enlistment:</label>
                <input
                  type="date"
                  id="Date_of_Enlistment"
                  name="Date_of_Enlistment"
                  value={formData.Date_of_Enlistment}
                  onChange={handleChange}
                  className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                />
              </div>
              <div>
                <label htmlFor="Date_of_Discharge" className="block">Date of Discharge:</label>
                <input
                  type="date"
                  id="Date_of_Discharge"
                  name="Date_of_Discharge"
                  value={formData.Date_of_Discharge}
                  onChange={handleChange}
                  className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                />
              </div>
              <div>
                <label htmlFor="Regiment_Name" className="block">Regiment Name:</label>
                <input
                  type="text"
                  id="Regiment_Name"
                  name="Regiment_Name"
                  value={formData.Regiment_Name}
                  onChange={handleChange}
                  className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                />
              </div>
              <div>
                <label htmlFor="Phone" className="block">Phone:</label>
                <input
                  type="text"
                  id="Phone"
                  name="Phone"
                  value={formData.Phone}
                  onChange={handleChange}
                  className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                />
              </div>
              <div>
                <label htmlFor="Blood_Type" className="block">Blood Type:</label>
                <input
                  type="text"
                  id="Blood_Type"
                  name="Blood_Type"
                  value={formData.Blood_Type}
                  onChange={handleChange}
                  className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                />
              </div>
              <div>
                <label htmlFor="Physical_Fitness_Scores" className="block">Physical Fitness Scores:</label>
                <input
                  type="text"
                  id="Physical_Fitness_Scores"
                  name="Physical_Fitness_Scores"
                  value={formData.Physical_Fitness_Scores}
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

export default Soldierup;