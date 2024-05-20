"use client";

import { useFormatCurrency } from "@/hooks/useFormatCurrency";
import {
  Bank,
  HandCoins,
  Pencil,
  PiggyBank,
  Wallet,
} from "@phosphor-icons/react/dist/ssr";
import TransactionItemDeleteBtn from "./transaction-item-delete-btn";
import Link from "next/link";
import { sizes, variants } from "@/lib/variants";

export default function TransactionItem({
  id,
  type,
  category,
  description,
  amount,
  onRemoved,
}) {
  const typesMap = {
    Income: {
      icon: HandCoins,
      color: "text-green-500 dark:text-green-400",
    },
    Expense: {
      icon: Wallet,
      color: "text-red-500 dark:text-red-400",
    },
    Investment: {
      icon: Bank,
      color: "text-yellow-500 dark:text-yellow-400",
    },
    Saving: {
      icon: PiggyBank,
      color: "text-indigo-500 dark:text-indigo-400",
    },
  };

  const IconComponent = typesMap[type].icon;
  const iconColor = typesMap[type].color;

  const formattedAmount = useFormatCurrency(amount);

  return (
    <div className="w-full flex items-center">
      <div className="flex items-center mr-4 grow">
        <IconComponent
          className={`${iconColor} mr-2 w-4 h-4 hidden sm:block`}
        />
        <span>{description}</span>
      </div>
      <div className="min-w-[150px] items-center hidden md:flex">
        {category && (
          <div className="rounded-md text-xs bg-gray-700 dark:bg-gray-100 text-gray-100 dark:text-black px-2 py-0.5">
            {category}
          </div>
        )}
      </div>
      <div className="min-w-[70px] text-right ">{formattedAmount}</div>
      <div className="min-w-[100px] flex justify-end">
        <Link
          href={`/dashboard/transaction/${id}/edit`}
          className={`${variants["ghost"]} ${sizes["xs"]}`}
        >
          <Pencil className="w-4 h-4" />
        </Link>
        <TransactionItemDeleteBtn id={id} onRemoved={onRemoved} />
      </div>
    </div>
  );
}
