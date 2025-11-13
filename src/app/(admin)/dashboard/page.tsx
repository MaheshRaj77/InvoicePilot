export default function AdminDashboard() {
  const stats = [
    { id: 'invoices', label: 'Total Invoices', value: '24', change: '+12%' },
    { id: 'unpaid', label: 'Unpaid Invoices', value: '8', change: '-5%' },
    { id: 'revenue', label: 'Total Revenue', value: '₹2,45,000', change: '+23%' },
    { id: 'customers', label: 'Active Customers', value: '15', change: '+8%' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Stats Cards */}
        {stats.map((stat) => (
          <div key={stat.id} className="bg-white rounded-lg shadow p-6">
            <p className="text-sm font-medium text-gray-600">{stat.label}</p>
            <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
            <p className="text-xs text-green-600 mt-2">{stat.change}</p>
          </div>
        ))}
      </div>

      {/* Recent Invoices */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Recent Invoices</h3>
        </div>
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Invoice #</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {[1, 2, 3].map((invoiceNum) => (
              <tr key={`inv-${invoiceNum}`}>
                <td className="px-6 py-4 text-sm text-gray-900">INV-2024-{String(invoiceNum).padStart(3, '0')}</td>
                <td className="px-6 py-4 text-sm text-gray-900">Customer {invoiceNum}</td>
                <td className="px-6 py-4 text-sm text-gray-900">₹{(5000 * invoiceNum).toLocaleString()}</td>
                <td className="px-6 py-4 text-sm">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    invoiceNum % 2 === 0 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {invoiceNum % 2 === 0 ? 'Paid' : 'Pending'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
