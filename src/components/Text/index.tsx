import React from 'react'

import colors from 'utils/colors'

interface ITextProps {
  text: string
  id?: string
  color?: string
  size?: number
  width?: number | string
  align?: 'center' | 'left' | 'right'
  marginBottom?: number | string
  marginTop?: number | string
  marginLeft?: number | string
  marginRight?: number | string
  textDecoration?: 'line-through' | 'underline' | 'none'
  weight?: '400' | '500' | '600' | '700'
  fontFamily?: 'Inter'
  letterSpacing?: number
  letterHeight?: number
  zIndex?: number
}

const Text: React.FC<ITextProps> = ({
  id,
  text,
  color = colors.secondary.darkBlue,
  size = 16,
  align = 'center',
  marginBottom = 0,
  marginTop = 0,
  marginLeft = 0,
  marginRight = 0,
  weight = '400',
  width,
  textDecoration,
  zIndex = 1,
  ...rest
}) => (
  <p
    id={id}
    style={{
      color,
      fontSize: size,
      textAlign: align,
      marginBottom,
      marginTop,
      marginLeft,
      marginRight,
      fontWeight: weight,
      textDecoration,
      zIndex,
    }}
    {...rest}
  >
    {text}
  </p>
)

export default Text
