import React from 'react'

function Commander() {
  return     <body class="bg-gray-100 text-gray-800">
    <div className="mb-8">
  <h2 className="text-2xl mb-4">Insert Commander Data</h2>
  <form action="/commander" method="post" className="space-y-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label htmlFor="Commander_ID" className="block">
          Commander ID:
        </label>
        <input
          type="text"
          id="Commander_ID"
          name="Commander_ID"
          className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
        />
      </div>
      <div>
        <label htmlFor="Commander_Name" className="block">
          Commander Name:
        </label>
        <input
          type="text"
          id="Commander_Name"
          name="Commander_Name"
          className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
        />
      </div>
      <div>
        <label htmlFor="Commander_Rank" className="block">
          Commander Rank:
        </label>
        <input
          type="text"
          id="Commander_Rank"
          name="Commander_Rank"
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
        <label htmlFor="Date_of_Commission" className="block">
          Date of Commission:
        </label>
        <input
          type="date"
          id="Date_of_Commission"
          name="Date_of_Commission"
          className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
        />
      </div>
      <div>
        <label htmlFor="Awards" className="block">
          Awards:
        </label>
        <input
          type="text"
          id="Awards"
          name="Awards"
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

  
}

export default Commander