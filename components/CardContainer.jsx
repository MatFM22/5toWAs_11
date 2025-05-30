export default function CardContainer({ children }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {children}
    </div>
  );
}