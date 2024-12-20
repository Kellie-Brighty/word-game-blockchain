import { useState } from "react";
// import { useHistory } from "react-router-dom";

const Deposit = () => {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  //   const history = useHistory();

  const handleDeposit = () => {
    setLoading(true);
    setError(null);
    // Simulate a deposit action
    setTimeout(() => {
      setLoading(false);
      alert("Deposit Successful!");
      //   history.push("/dashboard");
    }, 2000); // Simulating network delay
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-700 via-black to-green-700 text-white flex flex-col justify-center items-center px-[20px] lg:px-0">
      <div className="w-full max-w-lg p-8 bg-gray-900 rounded-lg shadow-xl text-center animate__animated animate__fadeIn animate__delay-1s">
        <h1 className="text-3xl font-bold mb-6 text-center sm:text-4xl">
          Deposit SOL
        </h1>
        <p className="mb-4 text-lg text-gray-300">
          Please enter the amount of SOL you'd like to deposit into your
          account.
        </p>
        <div className="mb-6">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-4 text-xl rounded-lg bg-gray-800 border-2 border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Amount in SOL"
          />
        </div>
        <div className="mb-6">
          <button
            onClick={handleDeposit}
            className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-black font-semibold rounded-lg shadow-lg hover:shadow-green-400/50 hover:bg-green-500 transition duration-200"
            disabled={loading || !amount}
          >
            {loading ? "Processing..." : "Deposit SOL"}
          </button>
        </div>
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default Deposit;
