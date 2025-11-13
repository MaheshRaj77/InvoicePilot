export default function InvoiceDetailPage({ params }: { params: { id: string } }) {
  return <div className="space-y-6"><h2 className="text-2xl font-bold text-gray-900">Invoice Detail - {params.id}</h2></div>;
}
