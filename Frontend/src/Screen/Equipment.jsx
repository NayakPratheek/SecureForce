import React from 'react'

function Equipment() {
  return (    <body class="bg-gray-100 text-gray-800">
      <div className="mb-8">
  <h2 className="text-2xl mb-4">Insert Equipment Data</h2>
  <form action="/equipment" method="post" className="space-y-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label htmlFor="Equipment_ID" className="block">
          Equipment ID:
        </label>
        <input
          type="text"
          id="Equipment_ID"
          name="Equipment_ID"
          className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
        />
      </div>
      <div>
        <label htmlFor="Equipment_Name" className="block">
          Equipment Name:
        </label>
        <input
          type="text"
          id="Equipment_Name"
          name="Equipment_Name"
          className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
        />
      </div>
      <div>
        <label htmlFor="Equipment_Type" className="block">
          Equipment Type:
        </label>
        <input
          type="text"
          id="Equipment_Type"
          name="Equipment_Type"
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
        <label htmlFor="Quantity" className="block">
          Quantity:
        </label>
        <input
          type="text"
          id="Quantity"
          name="Quantity"
          className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
        />
      </div>
      <div>
        <label htmlFor="Condition" className="block">
          Condition:
        </label>
        <input
          type="text"
          id="Condition"
          name="Condition"
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

export default Equipment