import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledBadge = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(125deg, #d7f4e4 0%, #bfead8 100%)',
  color: '#0f4735',
  padding: theme.spacing(1.1, 2.2),
  borderRadius: 999,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 700,
  fontSize: '1.25rem',
  border: '1px solid rgba(12, 155, 101, 0.3)',
  boxShadow: '0 10px 20px rgba(12, 155, 101, 0.24)',
}))

interface StatBadgeProps {
  value: string
  label?: string
}

function StatBadge({ value, label }: StatBadgeProps) {
  return (
    <Box>
      <StyledBadge>
        <Typography variant="h4" component="span" sx={{ fontWeight: 700 }}>
          {value}
        </Typography>
      </StyledBadge>
      {label && (
        <Typography variant="body2" sx={{ mt: 1, fontWeight: 600 }}>
          {label}
        </Typography>
      )}
    </Box>
  )
}

export default StatBadge
