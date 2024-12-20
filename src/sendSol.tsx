// import { useWallet, useConnection } from "@solana/wallet-adapter-react";
// import { Transaction, SystemProgram, PublicKey } from "@solana/web3.js";
// import { useEffect, useState } from "react";

// type TransactionRecord = {
//   id: string;
//   type: "Deposit" | "Withdrawal";
//   amount: number;
//   date: string;
// };

// const WalletActions = () => {
//   const { connection } = useConnection();
//   const { publicKey, sendTransaction } = useWallet();

//   const [balance, setBalance] = useState<number | null>(null);
//   const [transactions, setTransactions] = useState<TransactionRecord[]>([]);

//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     // Load transactions from localStorage
//     const storedTransactions = localStorage.getItem("transactions");
//     if (storedTransactions) {
//       setTransactions(JSON.parse(storedTransactions));
//     }
//     checkBalance();
//   }, [publicKey]);

//   const checkBalance = async () => {
//     if (!publicKey) return;
//     try {
//       const lamports = await connection.getBalance(publicKey);
//       setBalance(lamports / 1e9); // Convert to SOL
//     } catch (err: any) {
//       setError(`Failed to fetch balance: ${err.message}`);
//     }
//   };

//   const recordTransaction = (
//     type: "Deposit" | "Withdrawal",
//     amount: number
//   ) => {
//     const newTransaction: TransactionRecord = {
//       id: crypto.randomUUID(),
//       type,
//       amount,
//       date: new Date().toLocaleString(),
//     };
//     const updatedTransactions = [...transactions, newTransaction];
//     setTransactions(updatedTransactions);
//     localStorage.setItem("transactions", JSON.stringify(updatedTransactions));
//   };

//   const sendSolTransaction = async (recipient: string, amount: number) => {
//     if (!publicKey) {
//       alert("Connect a wallet first!");
//       return;
//     }

//     try {
//       const transaction = new Transaction().add(
//         SystemProgram.transfer({
//           fromPubkey: publicKey,
//           toPubkey: new PublicKey(recipient),
//           lamports: amount * 1e9, // Convert SOL to lamports
//         })
//       );

//       const signature = await sendTransaction(transaction, connection);
//       console.log(`Transaction Signature: ${signature}`);
//       recordTransaction("Withdrawal", amount);
//       checkBalance();
//     } catch (err: any) {
//       setError(`Transaction failed: ${err.message}`);
//     }
//   };

//   const depositSol = (amount: number) => {
//     // For simulation, we'll simply add the deposit to the transactions table.
//     recordTransaction("Deposit", amount);
//   };

//   return (
//     <div className="mt-8">
//       <h2 className="text-xl font-bold mb-4">Wallet Actions</h2>
//       {publicKey ? (
//         <>
//           <p>Wallet: {publicKey.toBase58()}</p>
//           <p>Balance: {balance ? `${balance} SOL` : "Loading..."}</p>

//           <div className="mt-4 flex gap-4">
//             <button
//               onClick={() => depositSol(0.01)}
//               className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
//             >
//               Simulate Deposit 0.01 SOL
//             </button>
//             <button
//               onClick={() =>
//                 sendSolTransaction(
//                   "6Q66xtF8A45QmqtCHNEZwgWdLeFFwf3UeeKamyucNYBF",
//                   0.01
//                 )
//               }
//               className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
//             >
//               Withdraw 0.01 SOL
//             </button>
//           </div>

//           {/* Transaction Table */}
//           <div className="mt-8">
//             <h3 className="text-lg font-semibold mb-2">Transaction History</h3>
//             <table className="w-full border-collapse border border-gray-700 text-left">
//               <thead>
//                 <tr className="bg-gray-800 text-white">
//                   <th className="border border-gray-700 px-4 py-2">Type</th>
//                   <th className="border border-gray-700 px-4 py-2">Amount</th>
//                   <th className="border border-gray-700 px-4 py-2">Date</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {transactions.map((tx) => (
//                   <tr key={tx.id} className="bg-gray-700 text-gray-300">
//                     <td className="border border-gray-700 px-4 py-2">
//                       {tx.type}
//                     </td>
//                     <td className="border border-gray-700 px-4 py-2">
//                       {tx.amount} SOL
//                     </td>
//                     <td className="border border-gray-700 px-4 py-2">
//                       {tx.date}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </>
//       ) : (
//         <p>Connect your wallet to see actions and transactions.</p>
//       )}
//       {error && <p className="text-red-500 mt-4">{error}</p>}
//     </div>
//   );
// };

// export default WalletActions;
