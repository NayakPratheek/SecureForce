import React, { useState } from 'react';
import WriteTab from './WriteTab';

function Commander() {
  const [formData, setFormData] = useState({
    Commander_ID: '',
    Commander_Name: '',
    Commander_Rank: '',
    Unit_ID: '',
    Phone: '',
    Date_of_Commission: '',
    Awards: '',
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
      const response = await fetch('http://localhost:5000/commander', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Data submitted successfully!');
        setFormData({
          Commander_ID: '',
          Commander_Name: '',
          Commander_Rank: '',
          Unit_ID: '',
          Phone: '',
          Date_of_Commission: '',
          Awards: '',
        });
      } else {
        console.error('Error submitting data. Server responded with:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <body class="bg-gray-100 text-gray-800">
    <div className="bg-gray-100 text-gray-800">    <WriteTab/>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-2xl mb-4">Insert Commander Data</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
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
    </body>
  );
}

export default Commander;
