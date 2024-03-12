import React, { useState } from 'react';
import WriteTab from './WriteTab';

function Soldier() {
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
      const response = await fetch('http://localhost:5000/soldier', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Data submitted successfully!');
        setFormData({
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
        <div class="mb-8">
          <h2 class="text-2xl mb-4">Insert Soldier Data</h2>
          <form action="/soldier" method="post" class="space-y-4" onSubmit={handleSubmit}>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label for="Soldier_ID" class="block">
                  Soldier ID:
                </label>
                <input
                  type="text"
                  id="Soldier_ID"
                  name="Soldier_ID"
                  value={formData.Soldier_ID}
                  onChange={handleChange}
                  class="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                />
              </div>
              <div>
                <label for="Soldier_Name" class="block">
                  Soldier Name:
                </label>
                <input
                  type="text"
                  id="Soldier_Name"
                  name="Soldier_Name"
                  value={formData.Soldier_Name}
                  onChange={handleChange}
                  class="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                />
              </div>
              <div>
                <label for="Soldier_Rank" class="block">
                  Soldier Rank:
                </label>
                <input
                  type="text"
                  id="Soldier_Rank"
                  name="Soldier_Rank"
                  value={formData.Soldier_Rank}
                  onChange={handleChange}
                  class="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                />
              </div>
              <div>
                <label for="DOB" class="block">
                  Date of Birth:
                </label>
                <input
                  type="date"
                  id="DOB"
                  name="DOB"
                  value={formData.DOB}
                  onChange={handleChange}
                  class="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                />
              </div>
              <div>
                <label for="Gender" class="block">
                  Gender:
                </label>
                <input
                  type="text"
                  id="Gender"
                  name="Gender"
                  value={formData.Gender}
                  onChange={handleChange}
                  class="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                />
              </div>
              <div>
                <label for="Unit_ID" class="block">
                  Unit ID:
                </label>
                <input
                  type="text"
                  id="Unit_ID"
                  name="Unit_ID"
                  value={formData.Unit_ID}
                  onChange={handleChange}
                  class="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                />
              </div>
              <div>
                <label for="Date_of_Enlistment" class="block">
                  Date of Enlistment:
                </label>
                <input
                  type="date"
                  id="Date_of_Enlistment"
                  name="Date_of_Enlistment"
                  value={formData.Date_of_Enlistment}
                  onChange={handleChange}
                  class="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                />
              </div>
              <div>
                <label for="Date_of_Discharge" class="block">
                  Date of Discharge:
                </label>
                <input
                  type="date"
                  id="Date_of_Discharge"
                  name="Date_of_Discharge"
                  value={formData.Date_of_Discharge}
                  onChange={handleChange}
                  class="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                />
              </div>
              <div>
                <label for="Regiment_Name" class="block">
                  Regiment Name:
                </label>
                <input
                  type="text"
                  id="Regiment_Name"
                  name="Regiment_Name"
                  value={formData.Regiment_Name}
                  onChange={handleChange}
                  class="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                />
              </div>
              <div>
                <label for="Phone" class="block">
                  Phone:
                </label>
                <input
                  type="text"
                  id="Phone"
                  name="Phone"
                  value={formData.Phone}
                  onChange={handleChange}
                  class="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                />
              </div>
              <div>
                <label for="Blood_Type" class="block">
                  Blood Type:
                </label>
                <input
                  type="text"
                  id="Blood_Type"
                  name="Blood_Type"
                  value={formData.Blood_Type}
                  onChange={handleChange}
                  class="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                />
              </div>
              <div>
                <label for="Physical_Fitness_Scores" class="block">
                  Physical Fitness Scores:
                </label>
                <input
                  type="text"
                  id="Physical_Fitness_Scores"
                  name="Physical_Fitness_Scores"
                  value={formData.Physical_Fitness_Scores}
                  onChange={handleChange}
                  class="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                />
              </div>
            </div>
            <input
              type="submit"
              value="Submit"
              class="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-4 py-2 rounded-md cursor-pointer"
            />
          </form>
        </div>
      </div>
    </body>
  );
}

export default Soldier;
