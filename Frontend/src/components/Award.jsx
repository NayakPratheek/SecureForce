import React, { useState } from 'react';
import WriteTab from './WriteTab';

function Award() {
  const [formData, setFormData] = useState({
    Soldier_ID: '',
    Award_Name: '',
    Award_issued_date: '',
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
      const response = await fetch('http://localhost:5000/award', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Data submitted successfully!');
      } else {
        console.error('Error submitting data. Server responded with:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <body className="bg-gray-100 text-gray-800">
      <WriteTab/>
        <div class="container mx-auto px-4 py-8"><div className="mb-8">
        <h2 className="text-2xl mb-4">Insert Award Data</h2>
        <form action="/award" method="post" onSubmit={handleSubmit} className="space-y-4">
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
      </div></div>
      
    </body>
  );
}

export default Award;
