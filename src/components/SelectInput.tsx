import React, { useId } from 'react'

interface SelectInputProps {
  name: string
  label: string
  placeholder?: string
  options: Array<{ label: string; value: string }>
}

const SelectInput = ({
  name,
  label,
  placeholder,
  options,
}: SelectInputProps): JSX.Element => {
  const id = `${name}-${useId()}`
  return (
    <fieldset className="w-full">
      <label
        htmlFor={id}
        className="form-label mb-2 inline-block font-bold text-black"
      >
        {label}
      </label>
      <select
        name={name}
        id={id}
        placeholder={placeholder}
        className="form-select m-0 block w-full appearance-none rounded border border-solid border-gray-300 px-3 py-1.5 text-base font-normal transition ease-in-out focus:border-blue-400 focus:bg-white focus:text-gray-700 focus:outline-none"
      >
        {options.map(({ label, value }) => (
          <option value={value} key={value}>
            {label}
          </option>
        ))}
      </select>
    </fieldset>
  )
}

export default SelectInput
