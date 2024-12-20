// import {
//   ConnectionProvider,
//   WalletProvider,
// } from "@solana/wallet-adapter-react";
// import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
// import {
//   UnsafeBurnerWalletAdapter,
//   PhantomWalletAdapter,
//   SolflareWalletAdapter,
// } from "@solana/wallet-adapter-wallets";
// import {
//   WalletModalProvider,
//   WalletDisconnectButton,
//   WalletMultiButton,
// } from "@solana/wallet-adapter-react-ui";
// import { clusterApiUrl } from "@solana/web3.js";

// // Default styles
// import "@solana/wallet-adapter-react-ui/styles.css";
// import { useMemo } from "react";
// import WalletActions from "./sendSol";

// export default function App() {
//   const network = WalletAdapterNetwork.Devnet;
//   const endpoint = useMemo(() => clusterApiUrl(network), [network]);

//   const wallets = useMemo(
//     () => [
//       new UnsafeBurnerWalletAdapter(),
//       new PhantomWalletAdapter(),
//       new SolflareWalletAdapter(),
//     ],
//     [network]
//   );

//   return (
//     <ConnectionProvider endpoint={endpoint}>
//       <WalletProvider wallets={wallets}>
//         <WalletModalProvider>
//           <div className="min-h-screen bg-gradient-to-b from-[#0c0f17] to-[#121826] text-white p-8">
//             <header className="flex justify-between items-center mb-8">
//               <h1 className="text-2xl font-bold">SolX</h1>
//               <div className="flex gap-4">
//                 <WalletMultiButton />
//                 <WalletDisconnectButton />
//               </div>
//             </header>
//             <main>
//               {/* Placeholder for Twitter Login */}
//               <button
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                 onClick={() => alert("Twitter login coming soon!")}
//               >
//                 Sign in with X
//               </button>
//               <WalletActions />
//             </main>
//           </div>
//         </WalletModalProvider>
//       </WalletProvider>
//     </ConnectionProvider>
//   );
// }

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/withdraw" element={<Withdraw />} />
      </Routes>
    </Router>
  );
}

export default App;
