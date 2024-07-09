"use client";
import { useState } from "react";
import { NextPage } from "next";
import Head from "next/head";
import { toast } from "sonner";

const Wallet: NextPage = () => {
  const [earnings, setEarnings] = useState(1000);

  const handleWithdraw = () => {
    toast.success("Withdrawal request sent successfully");
  };

  return (
    <div className="min-h-screen h-screen flex items-center justify-center  py-8 px-4">
      <Head>
        <title>Wallet</title>
      </Head>
      <div className="max-w-md mx-auto bg-gray-800 p-6 rounded-3xl">
        <h1 className="text-2xl font-bold mb-4">WALLET</h1>
        <div className="mb-4">
          <span className="block text-white">EARNINGS:</span>
          <span className="block text-gray-100 text-xl font-semibold">
            {earnings.toFixed(2)} USD
          </span>
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          onClick={handleWithdraw}
        >
          WITHDRAW
        </button>
        <p className="mt-4 text-gray-100">1000 views = 1 USD</p>
        <p className="mt-2 text-gray-100">
          Upload 10 short films on Zynoflix OTT and get an opportunity for the
          big screen.
        </p>
      </div>
    </div>
  );
};

export default Wallet;
