export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">InvoicePilot</h1>
          <p className="mt-2 text-gray-600">Professional Invoice Management</p>
        </div>

        <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          {children}
        </div>

        <p className="text-center text-sm text-gray-600">
          © {new Date().getFullYear()} InvoicePilot. All rights reserved.
        </p>
      </div>
    </div>
  );
}
