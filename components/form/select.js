import { useState } from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/solid";
import { Combobox } from "@headlessui/react";

export default function Select({
  options = [],
  value = "",
  title = "",
  name = "",
  onchange,
}) {
  const [selectDisplay, setSelectDisplay] = useState(
    options.filter((o) => o.value == value).length > 0
      ? options.filter((o) => o.value == value)[0].title
      : ""
  );
  let changeSelectDisplay = (value) => {
    setSelectDisplay(
      options.filter((o) => o.value == value)
        ? options.filter((o) => o.value == value)[0].title
        : ""
    );
  };
  if (!onchange) {
    onchange = (e) => {
      value = e;
    };
  }
  return (
    <Combobox as="div" value={selectDisplay}>
      <Combobox.Label className="block text-sm font-medium text-bblue font-brand">
        {title}
      </Combobox.Label>
      <div className="relative mt-1">
        <Combobox.Input
          className="w-full rounded-md border text-bblue border-blblue bg-white py-2 pl-3 pr-10 shadow-sm focus:border-bblue focus:outline-none focus:ring-1 focus:ring-none sm:text-sm"
          id={name}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon
            className="h-5 w-5 text-blblue"
            aria-hidden="true"
          />
        </Combobox.Button>

        {options.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {options.map((option) => (
              <Combobox.Option
                key={option.name}
                value={option.value}
                className={
                  "relative cursor-default select-none py-2 pl-8 pr-4 text-bblue hover:bg-bblue hover:text-gray-50 hover:font-semibold " +
                  (option.value == value && "font-semibold ")
                }
                onClick={() => {
                  onchange(option.value);
                  changeSelectDisplay(option.value);
                }}
              >
                <div className="flex justify-between">
                  <span className={"block truncate"}>{option.title}</span>
                  {option.value == value && (
                    <span
                      className={
                        "absolute inset-y-0 right-10 flex items-center pl-1.5 "
                      }
                    >
                      <CheckIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  )}
                </div>
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
}
