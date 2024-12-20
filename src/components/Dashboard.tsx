import TransactionsTable from "./TransactionsTable";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="p-6 bg-gradient-to-r from-purple-700 via-black to-green-700">
        <h1 className="text-3xl font-bold text-center sm:text-4xl">
          Your Dashboard
        </h1>
      </header>
      <main className="p-6">
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="p-6 bg-gray-900 rounded-lg shadow-lg text-center w-full sm:w-auto">
            <h2 className="text-2xl font-bold mb-2">SOL Balance</h2>
            <p className="text-green-400 text-xl">10.5 SOL</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 mt-6 sm:mt-0">
            <Link
              to="/deposit"
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-black font-semibold rounded-lg shadow-lg hover:shadow-green-400/50 hover:bg-green-500 transition duration-200"
            >
              Deposit SOL
            </Link>
            <Link
              to="/withdraw"
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-red-400 to-orange-500 text-black font-semibold rounded-lg shadow-lg hover:shadow-red-400/50 hover:bg-red-500 transition duration-200"
            >
              Withdraw SOL
            </Link>
          </div>
        </div>
        <TransactionsTable />
      </main>
    </div>
  );
};

export default Dashboard;
