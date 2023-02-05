import Checkbox from "./form/checkbox";

export default function Checkboxes({
  title = "",
  name = "",
  placeholder = false,
  onchange = () => {},
  checkboxes = [],
}) {
  return (
    <fieldset id={name}>
      <legend className="text-lg font-medium text-gray-900">{title}</legend>
      <div className="mt-4 divide-y divide-gray-200 border-t border-b border-gray-200">
        {checkboxes.map((checkbox) => (
          <>
            <Checkbox
              name={checkbox.name}
              title={checkbox.title}
              value={checkbox.value}
              onchange={onchange}
              placeholder={placeholder}
            />
          </>
        ))}
      </div>
    </fieldset>
  );
}
