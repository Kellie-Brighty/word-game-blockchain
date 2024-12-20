import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="h-screen bg-gradient-to-br from-purple-700 via-black to-green-800 text-white flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold mb-8 text-center">
        Trade Solana with AI, Powered by Twitter
      </h1>
      <p className="text-xl mb-12 text-center">
        Deposit SOL, let AI trade for you, and withdraw profits directly.
      </p>
      <button className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-black font-semibold rounded-lg shadow-lg hover:shadow-green-400/50">
        Sign in with Twitter (Coming Soon)
      </button>
      <Link
        to="/dashboard"
        className="mt-8 underline text-green-300 hover:text-green-400"
      >
        Explore Dashboard
      </Link>
    </div>
  );
};

export default LandingPage;
