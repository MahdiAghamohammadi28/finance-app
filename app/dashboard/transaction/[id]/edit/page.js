import TransactionFrom from "@/app/dashboard/component/transaction-form";
import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Edit Transaction",
};

export default async function EditTransaction({ params: { id } }) {
  const supabase = createClient();
  const { data: transaction, error } = await supabase
    .from("transactions")
    .select("*")
    .eq("id", id)
    .single();

  if (error) notFound();

  return (
    <>
      <h1 className="text-4xl font-semibold mb-8">Edit Transaction</h1>
      <TransactionFrom initialData={transaction} />
    </>
  );
}