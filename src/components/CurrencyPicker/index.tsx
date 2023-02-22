import React from 'react'
import SelectInput from '../SelectInput'
import { currencies } from './services'

interface ICurrencyPickerProps {
  label: string
  name: string
  value: string
  placeholder?: string
}

const CurrencyPicker: React.FC<ICurrencyPickerProps> = ({
  label,
  name,
  value,
  placeholder,
}) => {
  return (
    <SelectInput
      label={label}
      name={name}
      value={value}
      options={currencies.map((curr) => ({
        label: (
          <>
            <b className="font-bold">{curr.abbreviation}</b> -{' '}
            <i className="text-gray-500">{curr.name}</i>
          </>
        ),
        value: curr.abbreviation,
      }))}
      placeholder={placeholder}
    />
  )
}

export default CurrencyPicker
