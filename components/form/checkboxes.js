import Checkbox from "./checkbox";

export default function Checkboxes({
  title = "",
  name = "",
  placeholder = false,
  onchange = () => {},
  checkboxes = [],
}) {
  return (
    <fieldset id={name}>
      <legend className="text-lg font-medium text-bblue">{title}</legend>
      <div className="mt-4 divide-y divide-blblue border-t border-b border-blblue">
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
