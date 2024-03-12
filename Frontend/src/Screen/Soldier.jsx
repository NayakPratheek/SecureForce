import React from 'react'

function Soldier() {
  return (    <body class="bg-gray-100 text-gray-800">
    <div className="mb-8">
  <h2 className="text-2xl mb-4">Insert Soldier Data</h2>
  <form action="/soldier" method="post" className="space-y-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label htmlFor="Soldier_ID" className="block">
          Soldier ID:
        </label>
        <input
          type="text"
          id="Soldier_ID"
          name="Soldier_ID"
          className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
        />
      </div>
      <div>
        <label htmlFor="Soldier_Name" className="block">
          Soldier Name:
        </label>
        <input
          type="text"
          id="Soldier_Name"
          name="Soldier_Name"
          className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
        />
      </div>
      <div>
        <label htmlFor="Soldier_Rank" className="block">
          Soldier Rank:
        </label>
        <input
          type="text"
          id="Soldier_Rank"
          name="Soldier_Rank"
          className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
        />
      </div>
      <div>
        <label htmlFor="DOB" className="block">
          Date of Birth:
        </label>
        <input
          type="date"
          id="DOB"
          name="DOB"
          className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
        />
      </div>
      <div>
        <label htmlFor="Gender" className="block">
          Gender:
        </label>
        <input
          type="text"
          id="Gender"
          name="Gender"
          className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
        />
      </div>
      <div>
        <label htmlFor="Unit_ID" className="block">
          Unit ID:
        </label>
        <input
          type="text"
          id="Unit_ID"
          name="Unit_ID"
          className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
        />
      </div>
      <div>
        <label htmlFor="Date_of_Enlistment" className="block">
          Date of Enlistment:
        </label>
        <input
          type="date"
          id="Date_of_Enlistment"
          name="Date_of_Enlistment"
          className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
        />
      </div>
      <div>
        <label htmlFor="Date_of_Discharge" className="block">
          Date of Discharge:
        </label>
        <input
          type="date"
          id="Date_of_Discharge"
          name="Date_of_Discharge"
          className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
        />
      </div>
      <div>
        <label htmlFor="Regiment_Name" className="block">
          Regiment Name:
        </label>
        <input
          type="text"
          id="Regiment_Name"
          name="Regiment_Name"
          className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
        />
      </div>
      <div>
        <label htmlFor="Phone" className="block">
          Phone:
        </label>
        <input
          type="text"
          id="Phone"
          name="Phone"
          className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
        />
      </div>
      <div>
        <label htmlFor="Blood_Type" className="block">
          Blood Type:
        </label>
        <input
          type="text"
          id="Blood_Type"
          name="Blood_Type"
          className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
        />
      </div>
      <div>
        <label htmlFor="Physical_Fitness_Scores" className="block">
          Physical Fitness Scores:
        </label>
        <input
          type="text"
          id="Physical_Fitness_Scores"
          name="Physical_Fitness_Scores"
          className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
        />
      </div>
    </div>
    <input
      type="submit"
      defaultValue="Submit"
      className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-4 py-2 rounded-md cursor-pointer"
    />
  </form>
</div>
  </body>


  )
}

export default Soldier