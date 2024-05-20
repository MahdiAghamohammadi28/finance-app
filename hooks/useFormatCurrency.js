import { useMemo } from "react";

export function useFormatCurrency(amount) {
  const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "EUR",
    }).format(amount);

  return useMemo(() => formatCurrency(amount), [amount]);
}
