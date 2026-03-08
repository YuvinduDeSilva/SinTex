import { Button as MuiButton } from '@mui/material'
import type { ButtonProps as MuiButtonProps } from '@mui/material'
import { styled } from '@mui/material/styles'
import type { ElementType } from 'react'

export interface ButtonProps extends MuiButtonProps {
  component?: ElementType
  to?: string
}

const StyledButton = styled(MuiButton)(() => ({
  borderRadius: 999,
  padding: '12px 30px',
  fontSize: '0.98rem',
  fontWeight: 800,
  letterSpacing: '-0.01em',
  transition: 'transform 220ms ease, box-shadow 220ms ease, background-color 220ms ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 14px 26px rgba(16, 55, 69, 0.2)',
  },
}))

function Button({ children, ...props }: ButtonProps) {
  return <StyledButton {...props}>{children}</StyledButton>
}

export default Button
