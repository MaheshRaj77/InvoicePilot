export default function OrderDetailPage({ params }: { params: { id: string } }) {
  return <div className="space-y-6"><h2 className="text-2xl font-bold text-gray-900">Order Detail - {params.id}</h2></div>;
}
