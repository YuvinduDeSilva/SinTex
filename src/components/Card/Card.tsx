import { Card as MuiCard } from '@mui/material'
import type { CardProps as MuiCardProps } from '@mui/material'
import { styled } from '@mui/material/styles'
import type { ReactNode } from 'react'

export interface CardProps extends MuiCardProps {
  children: ReactNode
}

const StyledCard = styled(MuiCard)(({ theme }) => ({
  borderRadius: 22,
  padding: theme.spacing(3),
  border: `1px solid ${theme.palette.divider}`,
  background:
    'linear-gradient(180deg, rgba(255, 255, 255, 0.92) 0%, rgba(255, 255, 255, 0.84) 100%)',
  boxShadow: '0 16px 30px rgba(16, 49, 54, 0.08)',
  transition: 'transform 260ms ease, box-shadow 260ms ease, border-color 260ms ease',
  '&:hover': {
    borderColor: '#aac2b7',
    boxShadow: '0 22px 38px rgba(16, 49, 54, 0.14)',
    transform: 'translateY(-4px)',
  },
}))

function Card({ children, ...props }: CardProps) {
  const incomingClassName = props.className ?? ''
  const className = `${incomingClassName} anim-hover-lift`.trim()
  return (
    <StyledCard {...props} className={className}>
      {children}
    </StyledCard>
  )
}

export default Card
