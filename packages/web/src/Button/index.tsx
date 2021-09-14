import React from 'react'

import { ButtonStyled } from './styles'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Function that will be call on click */
  onClick?: () => void;
  /** Button content */
  children: React.ReactNode;
}

const Button = ({ onClick, children, ...props }: Props): JSX.Element => (
  <ButtonStyled type="button" onClick={ onClick } { ...props }>
    {children}
  </ButtonStyled>
)

Button.defaultProps = {
  onClick: undefined
}

export default Button
