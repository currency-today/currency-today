import React, { useCallback, useState } from 'react'
import SelectInput from '../SelectInput'
import { currencies } from './currenciesArray'

export interface ISelectedOptionProps {
  name: string
  flag: string
  abbreviation: string
}

interface ICurrencyPickerProps {
  label: string
  name: string
  value: string
  placeholder?: string
  onSelectOption: (selectedOption: ISelectedOptionProps) => void
}

const CurrencyPicker: React.FC<ICurrencyPickerProps> = ({
  label,
  name,
  value,
  placeholder,
  onSelectOption,
}) => {
  const [currentSelectInputValue, setCurrentSelectInputValue] = useState(value)

  const handleSelectAOption = useCallback(
    (selectedOption: ISelectedOptionProps) => {
      setCurrentSelectInputValue(selectedOption.abbreviation)

      onSelectOption(selectedOption)
    },
    [onSelectOption]
  )

  return (
    <SelectInput
      label={label}
      name={name}
      value={currentSelectInputValue}
      options={currencies.map((curr) => ({
        label: (
          <div
            onClick={() => {
              handleSelectAOption(curr)
            }}
          >
            <b className="font-bold">{curr.abbreviation}</b> -{' '}
            <i className="text-gray-500">{curr.name}</i>
          </div>
        ),
        value: curr.abbreviation,
      }))}
      placeholder={placeholder}
    />
  )
}

export default CurrencyPicker
