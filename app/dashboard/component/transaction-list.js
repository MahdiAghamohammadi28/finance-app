"use client";

import Button from "@/components/button";
import Separator from "@/components/separator";
import TransactionItem from "@/components/transaction-item";
import TransactionSummaryItem from "@/components/transaction-summary-item";
import { fetchTransactions } from "@/lib/actions";
import { groupAndSumTransactionByDate } from "@/lib/utils";
import { Spinner } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";

export default function TransactionList({ range, initialTransaction }) {
  const [transactions, setTransactions] = useState(initialTransaction);
  const [buttonHidden, setButtonHidden] = useState(
    initialTransaction.length === 0
  );
  const [loading, setLoading] = useState(false);

  const grouped = groupAndSumTransactionByDate(transactions);

  async function handleClick() {
    setLoading(true);
    let nextTransactions = null;
    try {
      nextTransactions = await fetchTransactions(
        range,
        transactions.length,
        10
      );
      setButtonHidden(nextTransactions.length === 0);
      setTransactions((prevTransaction) => [
        ...prevTransaction,
        ...nextTransactions,
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleRemoved(id) {
    setTransactions((prev) => [...prev].filter((t) => t.id !== id));
  }

  return (
    <div className="space-y-8">
      {Object.entries(grouped).map(([date, { transactions, amount }]) => (
        <div Key={date}>
          <TransactionSummaryItem date={date} amount={amount} />
          <Separator />
          <section className="space-y-4">
            {transactions.map((transaction) => (
              <div key={transaction.id}>
                <TransactionItem
                  {...transaction}
                  onRemoved={() => handleRemoved(transaction.id)}
                />
              </div>
            ))}
          </section>
        </div>
      ))}
      {transactions.length === 0 && (
        <div className="text-center text-gray-400 dark:text-gray-500">
          No transactions found
        </div>
      )}
      {!buttonHidden && (
        <div className="flex justify-center">
          <Button variant="ghost" onClick={handleClick} disabled={loading}>
            <div className="flex items-center space-x-1">
              {loading && <Spinner className="animate-spin" />}
              Load More
            </div>
          </Button>
        </div>
      )}
    </div>
  );
}
