import React, { useState } from 'react';
import WriteTab from './WriteTab';

function Mission() {
  const [formData, setFormData] = useState({
    Mission_ID: '',
    Mission_Name: '',
    Mission_Location: '',
    Mission_Start_Date: '',
    Mission_End_Date: '',
    Commander_ID: '',
    Mission_Status: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/mission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Data submitted successfully!');
        setFormData({
          Mission_ID: '',
          Mission_Name: '',
          Mission_Location: '',
          Mission_Start_Date: '',
          Mission_End_Date: '',
          Commander_ID: '',
          Mission_Status: '',
        });
      } else {
        console.error('Error submitting data. Server responded with:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div className="bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4 py-8">
        <WriteTab/>
        <div className="mb-8">
          <h2 className="text-2xl mb-4">Insert Mission Data</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="Mission_ID" className="block">Mission ID:</label>
              <input
                type="text"
                id="Mission_ID"
                name="Mission_ID"
                value={formData.Mission_ID}
                onChange={handleChange}
                className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
              />
            </div>
            <div>
              <label htmlFor="Mission_Name" className="block">Mission Name:</label>
              <input
                type="text"
                id="Mission_Name"
                name="Mission_Name"
                value={formData.Mission_Name}
                onChange={handleChange}
                className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
              />
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

export default Mission;
