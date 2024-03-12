import React from 'react'
import ViewTab from '../components/ViewTab'

function Award() {
  return (
    <body class="bg-gray-100 text-gray-800">
      <ViewTab/>
      <div className="mb-8">
  <h2 className="text-2xl mb-4">Insert Award Data</h2>
  <form action="/award" method="post" className="space-y-4">
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
        <label htmlFor="Award_Name" className="block">
          Award Name:
        </label>
        <input
          type="text"
          id="Award_Name"
          name="Award_Name"
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

export default Award