import React, { useState } from 'react';
import WriteTab from './WriteTab';

function Unit() {
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
      const response = await fetch('http://localhost:5000/unit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Data submitted successfully!');
      } else {
        console.error('Error submitting data. Server responded with:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <body class="bg-gray-100 text-gray-800">
  <WriteTab/>
    <div class="container mx-auto px-4 py-8">
  
     <div className="mb-8">
      <h2 className="text-2xl mb-4">Insert Unit Data</h2>
      <form action="/unit" method="post" onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="Unit_ID" className="block">
              Unit ID:
            </label>
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
            <label htmlFor="Unit_Name" className="block">
              Unit Name:
            </label>
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
            <label htmlFor="Unit_Type" className="block">
              Unit Type:
            </label>
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
            <label htmlFor="Unit_Head_Name" className="block">
              Unit Head Name:
            </label>
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
            <label htmlFor="Unit_Head_Rank" className="block">
              Unit Head Rank:
            </label>
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
            <label htmlFor="Unit_Head_Phone" className="block">
              Unit Head Phone:
            </label>
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
            <label htmlFor="Unit_Location" className="block">
              Unit Location:
            </label>
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
            <label htmlFor="Date_of_Establishment" className="block">
              Date of Establishment:
            </label>
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
          value="Submit"
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-4 py-2 rounded-md cursor-pointer"
        />
      </form>
    </div>
    </div>
 </body>

   
  );
}

export default Unit;
