export default function Input({
  name = "",
  title = "",
  value = "",
  placeholder = "",
  onchange = "",
  type = "text",
}) {
  return (
    <div className="relative rounded-md border border-placeholder-blblue px-3 py-2 shadow-sm focus-within:border-bblue w-56">
      <label
        htmlFor={name}
        className="absolute -top-2 left-2 -mt-px inline-block bg-bcream px-1 text-xs font-medium text-bblue"
      >
        {title}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className="block w-full border-0 p-0 text-bblue placeholder-blblue focus:ring-0 sm:text-sm"
        placeholder={placeholder}
        value={value}
        onChange={onchange}
      />
    </div>
  );
}
