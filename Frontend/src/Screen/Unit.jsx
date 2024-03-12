import React from 'react'

function Unit() {
  return (
    <body class="bg-gray-100 text-gray-800">
   <div className="container mx-auto px-4 py-8">
  <div className="mb-8">
    <h2 className="text-2xl mb-4">Insert Unit Data</h2>
    <form action="/unit" method="post" className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          <label htmlFor="Unit_Name" className="block">
            Unit Name:
          </label>
          <input
            type="text"
            id="Unit_Name"
            name="Unit_Name"
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
</div>
       
</body>
 
  )
}

export default Unit