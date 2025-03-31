import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function ConnectWalletPopup() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Button onClick={() => setIsOpen(true)} className="px-6 py-3 text-lg font-semibold bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
        Connect Wallet
      </Button>
      
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="fixed inset-0 flex justify-center items-center bg-black/50 backdrop-blur-sm z-50"
        >
          <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl max-w-sm w-full text-center">
            <button onClick={() => setIsOpen(false)} className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
              <X size={20} />
            </button>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Connect Wallet</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2">Choose a wallet to connect</p>
            <div className="mt-5 space-y-3">
              <Button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">MetaMask</Button>
              <Button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition">WalletConnect</Button>
              <Button className="w-full bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-800 transition">Coinbase Wallet</Button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
