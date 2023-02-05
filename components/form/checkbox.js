export default function Checkbox({
  title = "",
  name = "",
  placeholder = "",
  value = "",
  onchange = () => {},
}) {
  return (
    <div key={name} className="relative flex items-start py-4">
      <div className="min-w-0 flex-1 text-sm">
        <label htmlFor={name} className="select-none font-medium text-bblue">
          {title}
        </label>
      </div>
      <div className="ml-3 flex h-5 items-center">
        <input
          id={name}
          name={name}
          type="checkbox"
          className="h-4 w-4 rounded border-blblue text-bblue focus:ring-bblue"
          placeholder={placeholder}
          value={value}
          onchange={onchange}
        />
      </div>
    </div>
  );
}
