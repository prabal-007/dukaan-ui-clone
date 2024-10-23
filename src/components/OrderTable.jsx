
const OrderTable = () => {
    const orders = [
        { id: "#281209", status: "Successful", transactionId: "131634495747", refundDate: "Today, 08:45 PM", amount: "₹1,125.00" },
        { id: "#281208", status: "Processing", transactionId: "131634495747", refundDate: "Yesterday, 8:45 PM", amount: "₹1,125.00" },
        { id: "#281207", status: "Failed", transactionId: "131634495747", refundDate: "12 Jul 2023, 3:00 PM", amount: "₹1,125.00" },
        { id: "#281206", status: "Successful", transactionId: "131634495747", refundDate: "12 Jul 2023, 3:00 PM", amount: "₹1,125.00" },
        { id: "#281205", status: "Processing", transactionId: "131634495747", refundDate: "12 Jul 2023, 3:00 PM", amount: "₹1,125.00" },
        { id: "#281204", status: "Failed", transactionId: "131634495747", refundDate: "12 Jul 2023, 1:00 PM", amount: "₹1,125.00" },
        { id: "#281203", status: "Successful", transactionId: "131634495747", refundDate: "11 Jul 2023, 3:00 PM", amount: "₹1,125.00" },
        { id: "#281202", status: "Successful", transactionId: "131634495747", refundDate: "11 Jul 2023, 3:00 PM", amount: "₹1,125.00" },
        { id: "#281201", status: "Failed", transactionId: "131634495747", refundDate: "11 Jul 2023, 3:00 PM", amount: "₹1,125.00" },
        { id: "#281200", status: "Successful", transactionId: "131634495747", refundDate: "10 Jul 2023, 3:00 PM", amount: "₹1,125.00" },
        { id: "#281199", status: "Successful", transactionId: "131634495747", refundDate: "10 Jul 2023, 3:00 PM", amount: "₹1,125.00" },
        { id: "#281198", status: "Failed", transactionId: "131634495747", refundDate: "10 Jul 2023, 3:00 PM", amount: "₹1,125.00" },
        { id: "#281197", status: "Successful", transactionId: "131634495747", refundDate: "9 Jul 2023, 3:00 PM", amount: "₹1,125.00" },
        { id: "#281196", status: "Successful", transactionId: "131634495747", refundDate: "9 Jul 2023, 3:00 PM", amount: "₹1,125.00" },
        { id: "#281195", status: "Failed", transactionId: "131634495747", refundDate: "9 Jul 2023, 3:00 PM", amount: "₹1,125.00" },
        { id: "#281194", status: "Successful", transactionId: "131634495747", refundDate: "8 Jul 2023, 3:00 PM", amount: "₹1,125.00" },
        { id: "#281193", status: "Successful", transactionId: "131634495747", refundDate: "8 Jul 2023, 3:00 PM", amount: "₹1,125.00" },
        { id: "#281192", status: "Failed", transactionId: "131634495747", refundDate: "8 Jul 2023, 3:00 PM", amount: "₹1,125.00" },
        { id: "#281191", status: "Successful", transactionId: "131634495747", refundDate: "7 Jul 2023, 3:00 PM", amount: "₹1,125.00" },
        { id: "#281190", status: "Successful", transactionId: "131634495747", refundDate: "7 Jul 2023, 3:00 PM", amount: "₹1,125.00" },
        { id: "#281189", status: "Failed", transactionId: "131634495747", refundDate: "7 Jul 2023, 3:00 PM", amount: "₹1,125.00" },
        { id: "#281188", status: "Successful", transactionId: "131634495747", refundDate: "6 Jul 2023, 3:00 PM", amount: "₹1,125.00" },
        { id: "#281187", status: "Successful", transactionId: "131634495747", refundDate: "6 Jul 2023, 3:00 PM", amount: "₹1,125.00" },
        { id: "#281186", status: "Successful", transactionId: "131634495747", refundDate: "6 Jul 2023, 3:00 PM", amount: "₹1,125.00" }
    ];

    const statusIcon = (status) => {
        switch (status) {   
            case 'Successful':
                return <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>;
            case 'Processing':
                return <span className="inline-block w-3 h-3 bg-gray-500 rounded-full mr-2"></span>;
            case 'Failed':
                return <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-2"></span>;
            default:
                return null;
        }
    };

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-600">
                <thead className="text-xm w-full font-medium rounded uppercase text-gray-800">
                    <tr>
                        <th className="px-6 py-3 font-medium">Order ID</th>
                        <th className="px-6 py-3 font-medium">Status</th>
                        <th className="px-6 py-3 font-medium">Transaction ID</th>
                        <th className="px-6 py-3 font-medium">Refund Date</th>
                        <th className="px-6 py-3 font-medium text-right">Order Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <tr key={index} className="bg-white border-b">
                            <td className="px-6 py-4 font-medium text-blue-600 whitespace-nowrap">
                                <a href="#">{order.id}</a>
                            </td>
                            <td className="px-6 py-4 font-medium whitespace-nowrap">
                                {statusIcon(order.status)}
                                {order.status}
                            </td>
                            <td className="px-6 py-4 font-medium whitespace-nowrap">{order.transactionId}</td>
                            <td className="px-6 py-4 font-medium whitespace-nowrap">{order.refundDate}</td>
                            <td className="px-6 py-4 font-medium whitespace-nowrap text-right">{order.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};


export default OrderTable
