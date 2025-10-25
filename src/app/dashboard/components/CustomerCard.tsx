type Customer = {
  name: string;
  totalSpend: string;
  totalReviews: number;
  message: string;
};

export default function CustomerCard({ customer }: { customer: Customer }) {
  return (
    <div className="bg-[#10193A] rounded-lg p-6 shadow-md flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">{customer.name}</h2>
          <p className="text-sm text-gray-400">Total Spend: {customer.totalSpend}</p>
          <p className="text-sm text-gray-400">Total Reviews: {customer.totalReviews}</p>
        </div>
        <div className="h-10 w-10 rounded-full bg-gray-600"></div>
      </div>

      <p className="text-gray-300 text-sm leading-relaxed">{customer.message}</p>

      <div className="flex gap-3">
        <button className="bg-transparent border border-blue-500 text-blue-400 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition">
          Public Comment
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
          Direct Message
        </button>
      </div>
    </div>
  );
}