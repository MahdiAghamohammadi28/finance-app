import TransactionFrom from "../../component/transaction-form";

export const metedate = {
  title: "Add Transaction",
};

export default function Page() {
  return (
    <>
      <h1 className="text-4xl font-semibold mb-8">Add Transaction</h1>
      <TransactionFrom />
    </>
  );
}
