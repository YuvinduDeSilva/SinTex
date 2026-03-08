import { Box, Grid, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import XIcon from '@mui/icons-material/X'
import { Link as RouterLink } from 'react-router-dom'

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/sintex-technologies',
    icon: <LinkedInIcon fontSize="small" />,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/sintextechnologies',
    icon: <FacebookIcon fontSize="small" />,
  },
  {
    label: 'X',
    href: 'https://x.com/sintextechnologies',
    icon: <XIcon fontSize="small" />,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/sintextechnologies',
    icon: <InstagramIcon fontSize="small" />,
  },
]

const PRODUCT_LINKS = [
  { label: 'Features', to: '/features' },
  { label: 'Technology', to: '/technology' },
  { label: 'Request Demo', to: '/demo' },
]

const COMPANY_LINKS = [
  { label: 'Compliance', to: '/compliance' },
  { label: 'Home', to: '/' },
  { label: 'Contact Us', to: '/contact-us' },
]

const TRUST_ITEMS = ['Audit logs by default', 'Enterprise onboarding', 'Secure integration support']

const StyledFooter = styled(Box)(({ theme }) => ({
  background:
    'linear-gradient(180deg, rgba(250, 248, 241, 0.82) 0%, rgba(238, 245, 241, 0.9) 100%)',
  padding: theme.spacing(7, 0, 3),
  borderTop: `1px solid rgba(141, 170, 165, 0.46)`,
  backdropFilter: 'blur(10px)',
}))

const FooterSurface = styled(Box)(({ theme }) => ({
  background:
    'radial-gradient(circle at 8% -20%, rgba(34, 186, 128, 0.2) 0%, rgba(34, 186, 128, 0) 42%), radial-gradient(circle at 95% -15%, rgba(15, 63, 86, 0.16) 0%, rgba(15, 63, 86, 0) 44%), rgba(255, 255, 255, 0.72)',
  border: `1px solid rgba(149, 176, 170, 0.44)`,
  borderRadius: theme.spacing(2.5),
  padding: theme.spacing(4, 3.25),
  boxShadow: '0 18px 36px rgba(16, 56, 59, 0.09)',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3.2, 2.2),
  },
}))

const SectionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1.8),
  fontSize: '0.82rem',
  fontWeight: 800,
  letterSpacing: '0.09em',
  color: theme.palette.text.secondary,
}))

const FooterLink = styled(RouterLink)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: 'none',
  cursor: 'pointer',
  fontSize: '0.92rem',
  fontWeight: 600,
  transition: 'all 220ms ease',
  '&:hover': {
    color: theme.palette.primary.main,
    transform: 'translateX(2px)',
  },
}))





const FooterExternalLink = styled('a')(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  border: '1px solid rgba(129, 154, 161, 0.34)',
  backgroundColor: 'rgba(255, 255, 255, 0.74)',
  width: 36,
  height: 36,
  cursor: 'pointer',
  transition: 'all 220ms ease',
  '&:hover': {
    color: theme.palette.primary.main,
    borderColor: 'rgba(27, 143, 100, 0.48)',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    transform: 'translateY(-1px)',
  },
}))

const TrustItem = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1),
}))



const BackToTopButton = styled('button')(({ theme }) => ({
  border: '1px solid rgba(129, 154, 161, 0.4)',
  backgroundColor: 'rgba(255, 255, 255, 0.72)',
  color: theme.palette.text.primary,
  borderRadius: 999,
  padding: theme.spacing(0.5, 1.1),
  fontSize: '0.8rem',
  fontWeight: 700,
  cursor: 'pointer',
  transition: 'all 220ms ease',
  '&:hover': {
    borderColor: 'rgba(15, 63, 86, 0.5)',
    backgroundColor: 'rgba(255, 255, 255, 0.96)',
  },
}))

function Footer() {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <StyledFooter>
      <Box sx={{ width: '100%', px: { xs: 1.5, sm: 2.5, md: 3.5 } }}>
        <FooterSurface>
          <Grid container spacing={{ xs: 3, md: 2.2 }}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.1, mb: 1.5 }}>
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
                    boxShadow: '0 8px 20px rgba(15, 143, 98, 0.24)',
                  }}
                >
                  SIN
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 800, letterSpacing: '-0.02em' }}>
                  SinTex AI Platform
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2.2, maxWidth: 360 }}>
                Built for modern banking teams handling Sinhala and English cheque workflows with dependable,
                enterprise-grade validation.
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 700, color: 'text.primary' }}>
                Trusted by teams modernizing cheque operations in Sri Lanka.
              </Typography>
        
            </Grid>

            <Grid size={{ xs: 6, md: 2 }}>
              <SectionTitle>PRODUCTS</SectionTitle>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {PRODUCT_LINKS.map((link) => (
                  <FooterLink key={link.to} to={link.to}>
                    {link.label}
                  </FooterLink>
                ))}
              </Box>
            </Grid>

            <Grid size={{ xs: 6, md: 2 }}>
              <SectionTitle>COMPANY</SectionTitle>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {COMPANY_LINKS.map((link) => (
                  <FooterLink key={link.to} to={link.to}>
                    {link.label}
                  </FooterLink>
                ))}
              </Box>
            </Grid>

            <Grid size={{ xs: 6, md: 2 }}>
              <SectionTitle>TRUST</SectionTitle>
              <Box>
                {TRUST_ITEMS.map((trustItem) => (
                  <TrustItem key={trustItem} variant="body2">
                    {trustItem}
                  </TrustItem>
                ))}
              </Box>
            </Grid>

            <Grid size={{ xs: 6, md: 2 }}>
              <SectionTitle>SOCIAL</SectionTitle>
              <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 1 }}>
                {SOCIAL_LINKS.map((socialLink) => (
                  <FooterExternalLink
                    key={socialLink.label}
                    href={socialLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit SinTex on ${socialLink.label}`}
                  >
                    {socialLink.icon}
                  </FooterExternalLink>
                ))}
              </Box>
            </Grid>
          </Grid>

          <Box
            sx={{
              mt: 3,
              pt: 2,
              borderTop: '1px solid rgba(141, 170, 165, 0.44)',
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { xs: 'flex-start', sm: 'center' },
              justifyContent: 'space-between',
              gap: 1,
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 700 }}>
              © 2026 SinTex Technologies
            </Typography>
            <Typography variant="body2" color="text.secondary">
              hello@sintex.ai
            </Typography>
            <BackToTopButton type="button" onClick={handleBackToTop} aria-label="Back to top">
              Back to top
            </BackToTopButton>
          </Box>
        </FooterSurface>
      </Box>
    </StyledFooter>
  )
}

export default Footer
