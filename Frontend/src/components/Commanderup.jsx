import React, { useState, useEffect } from 'react';
import UpdateTab from './UpdateTab';

function Commanderup() {
  const [commander, setCommander] = useState([]);
  const [formData, setFormData] = useState({
    Commander_ID: '',
    Commander_Name: '',
    Commander_Rank: '',
    Unit_ID: '',
    Phone: '',
    Date_of_Commission: '',
    Awards: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/commanders');
        if (response.ok) {
          const data = await response.json();
          setCommander(data);
        } else {
          console.error('Error fetching commanders data. Server responded with:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    fetchData();
  }, []);

  const handleEdit = (commander) => {
    const editedCommander = {
      Commander_ID: commander.commander_id,
      Commander_Name: commander.commander_name,
      Commander_Rank: commander.commander_rank,
      Unit_ID: commander.unit_id,
      Phone: commander.phone,
      Date_of_Commission: commander.date_of_commission,
      Awards: commander.awards,
    };
    setFormData(editedCommander);
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
      const response = await fetch(`http://localhost:5000/commanders/${formData.Commander_ID}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Data updated successfully!');
        const updatedResponse = await fetch('http://localhost:5000/commanders');
        if (updatedResponse.ok) {
          const updatedData = await updatedResponse.json();
          setCommander(updatedData);
        }
      } else {
        console.error('Error updating data. Server responded with:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  const handleDelete = async (Commander_ID) => {
    try {
      const response = await fetch(`http://localhost:5000/commanders/${Commander_ID}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert('Commander deleted successfully!');
        const updatedData = commander.filter((cmd) => cmd.commander_id !== Commander_ID);
        setCommander(updatedData);
      } else {
        console.error('Error deleting commander. Server responded with:', response.status, response.statusText);
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
          <h2 className="text-2xl mb-4">Commander Data</h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
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
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {commander.map((commander) => (
                  <tr key={commander.commander_id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-white">
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {commander.commander_id}
                    </td>
                    <td className="px-6 py-4">{commander.commander_name}</td>
                    <td className="px-6 py-4">{commander.commander_rank}</td>
                    <td className="px-6 py-4">{commander.unit_id}</td>
                    <td className="px-6 py-4">{commander.phone}</td>
                    <td className="px-6 py-4">{commander.date_of_commission}</td>
                    <td className="px-6 py-4">{commander.awards}</td>
                    <td className="px-6 py-4">
                      <button onClick={() => handleEdit(commander)} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-2 py-1 rounded-md cursor-pointer mr-2">Edit</button>
                      <button onClick={() => handleDelete(commander.commander_id)} className="bg-red-500 hover:bg-red-600 text-white font-semibold px-2 py-1 rounded-md cursor-pointer">Delete</button>

                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h2 className="text-2xl mb-4">Update Commander Data</h2>
          <form onSubmit={handleUpdate} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="Commander_ID" className="block">Commander ID:</label>
                <input
                  type="text"
                  id="Commander_ID"
                  name="Commander_ID"
                  value={formData.Commander_ID}
                  onChange={handleChange}
                  className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                />
              </div>
              <div>
                <label htmlFor="Commander_Name" className="block">Commander Name:</label>
                <input
                  type="text"
                  id="Commander_Name"
                  name="Commander_Name"
                  value={formData.Commander_Name}
                  onChange={handleChange}
                  className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                />
              </div>
              <div>
                <label htmlFor="Commander_Rank" className="block">Commander Rank:</label>
                <input
                  type="text"
                  id="Commander_Rank"
                  name="Commander_Rank"
                  value={formData.Commander_Rank}
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
                <label htmlFor="Date_of_Commission" className="block">Date of Commission:</label>
                <input
                  type="date"
                  id="Date_of_Commission"
                  name="Date_of_Commission"
                  value={formData.Date_of_Commission}
                  onChange={handleChange}
                  className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                />
              </div>
              <div>
                <label htmlFor="Awards" className="block">Awards:</label>
                <input
                  type="text"
                  id="Awards"
                  name="Awards"
                  value={formData.Awards}
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

export default Commanderup;
