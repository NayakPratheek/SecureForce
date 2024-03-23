import React, { useState } from 'react';
import WriteTab from './WriteTab';

function Equipment() {
  const [formData, setFormData] = useState({
    Equipment_ID: '',
    Equipment_Name: '',
    Equipment_Type: '',
    Unit_ID: '',
    Quantity: '',
    Condition: '',
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
      const response = await fetch('http://localhost:5000/equipment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Data submitted successfully!');
        setFormData({
          Equipment_ID: '',
          Equipment_Name: '',
          Equipment_Type: '',
          Unit_ID: '',
          Quantity: '',
          Condition: '',
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
    <WriteTab/>
    <div class="container mx-auto px-4 py-8">
    
     <div className="mb-8">
        <h2 className="text-2xl mb-4">Insert Equipment Data</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
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
    </body>
  );
}

export default Equipment;
