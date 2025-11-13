export default function CustomersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Customers</h2>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
          Add Customer
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Email</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Phone</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Status</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-3 text-sm text-gray-900">John Smith</td>
              <td className="px-6 py-3 text-sm text-gray-600">john@example.com</td>
              <td className="px-6 py-3 text-sm text-gray-600">+91-9876543210</td>
              <td className="px-6 py-3 text-sm"><span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">Active</span></td>
              <td className="px-6 py-3 text-sm"><button className="text-indigo-600 hover:text-indigo-700">View</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
