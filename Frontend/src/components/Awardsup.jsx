import React, { useState, useEffect } from 'react';
import UpdateTab from './UpdateTab'
function Awardsup() {
  const [awards, setawards] = useState([]);
  const [formData, setFormData] = useState({
    Soldier_ID: '',
    Award_Name: '',
    Award_issued_date: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/awards');
        if (response.ok) {
          const data = await response.json();
          setawards(data);
        } else {
          console.error('Error fetching awards data. Server responded with:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    fetchData();
  }, []);

  const handleEdit = (award) => {
    const editedaward = {
        Soldier_ID: award.soldier_id,
        Award_Name: award.award_name ,
      Award_issued_date: award.award_issued_date ,
    };
    setFormData(editedaward);
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
      const response = await fetch(`http://localhost:5000/awards/${formData.Soldier_ID}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Data updated successfully!');
        const updatedResponse = await fetch('http://localhost:5000/awards');
        if (updatedResponse.ok) {
          const updatedData = await updatedResponse.json();
          setawards(updatedData);
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
      const response = await fetch(`http://localhost:5000/awards/${Soldier_ID}`, {
        method: 'DELETE',
        
      });
      if (response.ok) {
        alert('Award deleted successfully!');
        const updatedData = awards.filter((sol) => sol.soldier_id !== Soldier_ID);
        setawards(updatedData);
      } else {
        console.error('Error deleting soldier. Server responded with:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
<UpdateTab/>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-2xl mb-4">Award Data</h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto" >
              <thead>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-white">
                  <th className="px-6 py-3">Soldier ID</th>
                  <th className="px-6 py-3">Award Name</th>
                  <th className="px-6 py-3">Award Issued Date</th>
                  <th className="px-6 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {awards.map((award) => (
                  <tr key={award.award_id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-white">
                    <td className="px-6 py-4">{award.soldier_id}</td>
                    <td className="px-6 py-4">{award.award_name}</td>
                    <td className="px-6 py-4">{award.award_issued_date}</td>
                    <td className="px-6 py-4">
                      <button onClick={() => handleEdit(award)} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-2 py-1 rounded-md cursor-pointer mr-2">Edit</button>
                      <button onClick={() => handleDelete(award.soldier_id)} className="bg-red-500 hover:bg-red-600 text-white font-semibold px-2 py-1 rounded-md cursor-pointer">Delete</button>

                    </td>
                  </tr>
                ))}
              </tbody>            
              </table>
          </div>
        </div>
        <div>
          <h2 className="text-2xl mb-4">Update Award Data</h2>
          <form onSubmit={handleUpdate} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="Soldier_ID" className="block">
                Soldier ID:
              </label>
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
              <label htmlFor="Award_Name" className="block">
                Award Name:
              </label>
              <input
                type="text"
                id="Award_Name"
                name="Award_Name"
                value={formData.Award_Name}
                onChange={handleChange}
                className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
              />
            </div>
            <div>
              <label htmlFor="Award_issued_date" className="block">
                Award Issued Date:
              </label>
              <input
                type="date"
                id="Award_issued_date"
                name="Award_issued_date"
                value={formData.Award_issued_date}
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

export default Awardsup;
