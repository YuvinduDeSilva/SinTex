import { Box, Button, Container, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Link as RouterLink, useLocation } from 'react-router-dom'

const StyledHeader = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(252, 250, 244, 0.82)',
  padding: theme.spacing(1.1, 0),
  borderBottom: `1px solid ${theme.palette.divider}`,
  position: 'sticky',
  top: 0,
  zIndex: 1000,
  backdropFilter: 'blur(18px)',
}))

const LogoLink = styled(RouterLink)(() => ({
  textDecoration: 'none',
  display: 'inline-block',
}))

const Logo = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  fontSize: '1.35rem',
  letterSpacing: '-0.03em',
  color: theme.palette.text.primary,
}))

const NavLink = styled(RouterLink)(({ theme }) => ({
  margin: theme.spacing(0, 0.6),
  padding: theme.spacing(0.72, 1.2),
  borderRadius: 999,
  cursor: 'pointer',
  fontSize: '0.8rem',
  fontWeight: 800,
  letterSpacing: '0.05em',
  color: theme.palette.text.primary,
  textDecoration: 'none',
  transition: 'all 220ms ease',
  '&:hover': {
    color: theme.palette.primary.main,
    backgroundColor: 'rgba(12, 155, 101, 0.1)',
  },
  '&.is-active': {
    color: theme.palette.secondary.main,
    backgroundColor: 'rgba(16, 63, 86, 0.12)',
  },
}))

interface HeaderProps {
  onGetStarted?: () => void
}

function Header({ onGetStarted }: HeaderProps) {
  const location = useLocation()

  const navItems = [
    { label: 'HOME', to: '/' },
    { label: 'PRODUCTS', to: '/products' },
    { label: 'FEATURES', to: '/features' },
    { label: 'TECHNOLOGY', to: '/technology' },
    { label: 'COMPLIANCE', to: '/compliance' },
    { label: 'CONTACT US', to: '/contact-us' },
  ]

  return (
    <StyledHeader>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box
              sx={{
                width: 42,
                height: 42,
                background: 'linear-gradient(120deg, #0f8f62 0%, #22ba80 100%)',
                color: '#f5fff8',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                letterSpacing: '0.03em',
                boxShadow: '0 10px 24px rgba(15, 143, 98, 0.28)',
              }}
            >
              SIN
            </Box>
            <LogoLink to="/">
              <Logo>SinTex AI</Logo>
            </LogoLink>
          </Box>

          <Box
            className="glass-panel"
            sx={{
              display: 'flex',
              alignItems: 'center',
              borderRadius: 999,
              px: 0.5,
              py: 0.35,
              overflowX: 'auto',
              maxWidth: { xs: '58%', md: 'none' },
              '&::-webkit-scrollbar': {
                display: 'none',
              },
            }}
          >
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={location.pathname === item.to ? 'is-active' : undefined}
              >
                {item.label}
              </NavLink>
            ))}
          </Box>

          <Button
            variant="contained"
            color="primary"
            onClick={onGetStarted}
            sx={{ px: { xs: 1.6, sm: 2.5 }, minWidth: { xs: 0, sm: 120 }, fontSize: { xs: '0.78rem', sm: '0.88rem' } }}
          >
            Try Demo
          </Button>
        </Box>
      </Container>
    </StyledHeader>
  )
}

export default Header
