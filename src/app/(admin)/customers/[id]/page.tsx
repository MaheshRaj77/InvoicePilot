export default function CustomerDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Customer Details - {params.id}</h2>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-500">Customer detail page for ID: {params.id}</p>
      </div>
    </div>
  );
}
