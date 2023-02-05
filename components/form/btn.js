export default function Btn({ onclick, icon, text }) {
  return (
    <button
      onClick={onclick}
      type="button"
      className="min-w-[60] inline-flex items-center rounded-md border border-transparent bg-bblue px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-bblue focus:outline-none focus:ring-2 focus:ring-bblue"
    >
      {icon}
      {text}
    </button>
  );
}
