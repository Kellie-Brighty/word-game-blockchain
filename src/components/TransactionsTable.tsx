const TransactionsTable = () => {
  const transactions = [
    { type: "Deposit", amount: "2 SOL", date: "2024-12-19" },
    { type: "Withdraw", amount: "1 SOL", date: "2024-12-18" },
  ];

  return (
    <div className="bg-gray-900 rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Transaction History</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="p-2">Type</th>
            <th className="p-2">Amount</th>
            <th className="p-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx, index) => (
            <tr key={index} className="hover:bg-gray-800">
              <td className="p-2">{tx.type}</td>
              <td className="p-2">{tx.amount}</td>
              <td className="p-2">{tx.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
