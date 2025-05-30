// components/Button.jsx
export default function Button({ children, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-blue-900 text-white px-6 py-2 rounded-xl shadow-lg hover:bg-blue-800 transition-all duration-200"
    >
      {children}
    </button>
  );
}
