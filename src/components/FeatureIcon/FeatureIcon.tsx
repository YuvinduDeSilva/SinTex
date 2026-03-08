import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import type { ReactNode } from 'react'

const IconWrapper = styled(Box)(({ theme }) => ({
  width: 52,
  height: 52,
  borderRadius: '50%',
  background: 'linear-gradient(135deg, rgba(12,155,101,0.2) 0%, rgba(18,60,78,0.18) 100%)',
  border: `1px solid ${theme.palette.divider}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
}))

interface FeatureIconProps {
  icon: ReactNode
  color?: string
}

function FeatureIcon({ icon, color }: FeatureIconProps) {
  return <IconWrapper sx={{ backgroundColor: color || 'primary.main' }}>{icon}</IconWrapper>
}

export default FeatureIcon
