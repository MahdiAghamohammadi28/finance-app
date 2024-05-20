"use client";

import { deleteTransaction } from "@/lib/actions";
import Button from "./button";
import { Spinner, X } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";

export default function TransactionItemDeleteBtn({ id, onRemoved }) {
  const [loading, setLoading] = useState();
  const [confirmed, setConfirmed] = useState();

  async function handleClick() {
    if (!confirmed) {
      setConfirmed(true);
      return;
    }
    try {
      setLoading(true);
      await deleteTransaction(id);
      onRemoved();
    } finally {
      setLoading(false);
    }
  }

  return (
    <Button
      onClick={handleClick}
      size="xs"
      variant={!confirmed ? "ghost" : "danger"}
      aria-disabled={loading}
    >
      {!loading && <X />}
      {loading && <Spinner className="w-4 h-4 animate-spin" />}
    </Button>
  );
}
