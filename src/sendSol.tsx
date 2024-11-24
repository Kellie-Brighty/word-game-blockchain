// src/components/WalletActions.tsx
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { Transaction, SystemProgram, PublicKey } from "@solana/web3.js";
import { FC, useEffect, useState } from "react";

const SendSols: FC = () => {
  const { connection } = useConnection();
  const { publicKey, wallet, sendTransaction, connecting, connected } =
    useWallet();
  const [balance, setBalance] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [transactionStatus, setTransactionStatus] = useState<string | null>(
    null
  );

  useEffect(() => {
    // checkBalance();
  }, []);

  //   const checkBalance = async () => {
  //     if (!publicKey) {
  //       setError("Wallet not connected.");
  //       return;
  //     }

  //     try {
  //       // Get balance in lamports
  //       const lamports = await connection.getBalance(publicKey);
  //       const solBalance = lamports / 1e9; // Convert lamports to SOL
  //       setBalance(solBalance);

  //       if (solBalance < 0.01) {
  //         alert("Your balance is too low to play the game. Please add more SOL.");
  //       } else {
  //         alert("Your balance is sufficient to play the game!");
  //         // Proceed to game logic
  //       }
  //     } catch (err: any) {
  //       setError(`Failed to fetch balance: ${err.message}`);
  //     }
  //   };

  const sendSolTransaction = async () => {
    if (!publicKey) {
      alert("Connect a wallet first!");
      return;
    }

    try {
      const recipient = "CmiHqB5hMRKxMKzqyCDvNRfcC5Z3PzHXbtJuk5Pm4jaj"; // Replace with a real wallet address
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: new PublicKey(recipient),
          lamports: 10000000, // 0.0100 SOL
        })
      );

      try {
        // Get balance in lamports
        const lamports = await connection.getBalance(publicKey);
        const solBalance = lamports / 1e9;
        setBalance(solBalance);
        console.log("balance:::", solBalance);

        if (solBalance < 0.01) {
          setError(
            "Your balance is too low to play the game. Please add more SOL."
          );
        } else {
          const signature = await sendTransaction(transaction, connection);
          setTransactionStatus(`Transaction sent! Signature: ${signature}`);
          console.log(`Transaction Signature: ${signature}`);
        }
      } catch (err: any) {
        setError(`Failed to fetch balance: ${err.message}`);
      }
    } catch (error: any) {
      console.error("Transaction failed:", error);
      setTransactionStatus(`Transaction failed: ${error.message}`);
    }
  };

  return (
    <div>
      {wallet ? (
        connected ? (
          <div>
            <p>Wallet connected: {publicKey?.toBase58()}</p>
            <button onClick={sendSolTransaction} disabled={connecting}>
              Send 0.019 SOL
            </button>
          </div>
        ) : (
          <p>Wallet not connected</p>
        )
      ) : (
        <p>No wallet found</p>
      )}
      {transactionStatus && <p>{transactionStatus}</p>}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default SendSols;
