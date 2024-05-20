export default function NotFound() {
  return (
    <>
      <h1 className="text-4xl text-center font-semibold mb-4">
        Transaction not found
      </h1>
      <div className="text-center text-gray-400 dark:text-gray-500">
        The transactions could not be found or could not be fetched.
      </div>
    </>
  );
}
