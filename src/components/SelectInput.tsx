import React, { useId, useState } from 'react'

interface SelectInputProps {
  name: string
  label: string
  placeholder?: string
  options: Array<{ label: string | JSX.Element; value: string }>
  value: string
  onChange?: (e: EventTarget) => string
}

const SelectInput = ({
  name,
  label,
  value,
  placeholder,
  options,
}: SelectInputProps): JSX.Element => {
  const id = `${name}-${useId()}`
  const [isSelectInputOpened, setIsSelectInputOpened] = useState(false)

  return (
    <div className="relative w-full">
      <fieldset className=" w-full">
        <label
          htmlFor={id}
          className="form-label mb-2 inline-block font-bold text-black"
        >
          {label}
        </label>

        <input
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          className="form-select m-0 block w-full cursor-pointer appearance-none rounded border border-solid border-gray-300 px-3 py-1.5 text-base font-normal transition ease-in-out focus:border-blue-400 focus:bg-white focus:text-gray-700  focus:outline-none"
          onClick={() => {
            setIsSelectInputOpened(!isSelectInputOpened)
          }}
          // onFocus={() => {
          //   setIsSelectInputOpened(!isSelectInputOpened)
          // }}
          onBlur={() => {
            setTimeout(() => {
              setIsSelectInputOpened(false)
            }, 150)
          }}
          onChange={() => {}}
        />

        <span className="absolute right-0 bottom-1 m-1 focus:text-blue-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </fieldset>

      {isSelectInputOpened && (
        <div className="absolute z-[1000] mt-1 w-full min-w-max flex-col overflow-hidden rounded border border-gray-200 bg-white shadow peer-checked:flex">
          {options.map(({ label, value }) => (
            <div key={value} className="cursor-pointer  p-2 hover:bg-gray-200">
              {label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SelectInput
