import React from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

import colors from '../../utils/colors'

interface IButtonProps {
  text: string
  id?: string
  width?: number
  type?: 'submit' | 'button' | 'reset'
  onClick?: () => void
  height?: number
  fontColor?: string
  buttonColor?: string
  borderColor?: string
  marginBottom?: number
  marginTop?: number
  marginLeft?: number
  marginRight?: number
  disabled?: boolean
  loading?: boolean
  isFull?: boolean
}

const Button: React.FC<IButtonProps> = ({
  id,
  onClick,
  fontColor = colors.gray.white,
  buttonColor = colors.primary.orange,
  disabled,
  height = 44,
  loading,
  borderColor = colors.primary.orange,
  marginBottom = 0,
  marginLeft = 0,
  marginRight = 0,
  marginTop = 0,
  type = 'button',
  width = 380,
  text,
  isFull,
  ...rest
}) => (
  <button
    id={id}
    type={type}
    style={{
      width: isFull ?? false ? '100%' : width,
      height,
      color: fontColor,
      borderColor,
      backgroundColor: buttonColor,
      marginBottom,
      marginLeft,
      marginRight,
      marginTop,
    }}
    onClick={loading ?? false ? () => {} : onClick}
    disabled={(disabled ?? false) || !!(loading ?? false)}
    className="cursor-pointer  rounded-lg border-b text-sm font-bold transition-all hover:scale-105 hover:bg-darkenOrange hover:shadow-lg disabled:cursor-not-allowed disabled:border-b-zinc-300 disabled:bg-zinc-300 disabled:hover:scale-100 disabled:hover:shadow-none"
    {...rest}
  >
    {loading ?? false ? (
      <>
        <div className="flex w-full items-center justify-center">
          <div className="absolute z-10 flex animate-spin items-center justify-center">
            <AiOutlineLoading3Quarters
              size={22}
              color={fontColor ?? colors.gray.black}
            />
          </div>
        </div>
      </>
    ) : (
      <>{text.toUpperCase()}</>
    )}
  </button>
)

export default Button
