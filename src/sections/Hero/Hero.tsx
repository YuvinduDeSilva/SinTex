import { Box, Chip, Container, Grid, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import FlashOnIcon from '@mui/icons-material/FlashOn'
import Button from '../../components/Button'
import heroImage from '../../assets/heroimage.png'

const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(10, 0, 8),
  background:
    'radial-gradient(760px 340px at 14% 5%, rgba(12,155,101,0.2), transparent 68%), radial-gradient(680px 280px at 88% 20%, rgba(18,60,78,0.15), transparent 68%), transparent',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 0, 4),
  },
}))

const HeroImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '430px',
  backgroundColor: 'transparent',
  borderRadius: 24,
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: '0 30px 52px rgba(17, 52, 49, 0.16)',
  [theme.breakpoints.down('md')]: {
    height: '320px',
  },
}))

const CheckIconContainer = styled(Box)(() => ({
  width: 48,
  height: 48,
  borderRadius: '50%',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backdropFilter: 'blur(10px)',
}))

const FloatingCard = styled(Box)(({ theme }) => ({
  position: 'absolute',
  zIndex: 3,
  borderRadius: 16,
  padding: theme.spacing(1.2, 1.6),
  border: '1px solid rgba(255,255,255,0.35)',
  background: 'rgba(9, 25, 35, 0.55)',
  color: '#eaf7f6',
  backdropFilter: 'blur(12px)',
  boxShadow: '0 16px 30px rgba(8, 24, 30, 0.26)',
}))

interface HeroProps {
  onGetStarted?: () => void
}

const dots = [
  [18, 16],
  [28, 30],
  [24, 68],
  [37, 58],
  [42, 22],
  [50, 42],
  [55, 72],
  [66, 18],
  [74, 36],
  [80, 62],
] as const

function Hero({ onGetStarted }: HeroProps) {
  return (
    <HeroSection id="hero">
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="overline"
              className="anim-fade-up"
              sx={{
                color: 'secondary.main',
                fontWeight: 800,
                letterSpacing: 1.8,
                mb: 2,
                display: 'block',
                px: 2,
                py: 0.6,
                width: 'fit-content',
                borderRadius: 999,
                bgcolor: 'rgba(248, 255, 250, 0.68)',
                border: '1px solid rgba(15, 143, 98, 0.34)',
                backdropFilter: 'blur(8px)',
              }}
            >
              AI CHEQUE INTELLIGENCE PLATFORM
            </Typography>

            <Typography variant="h1" className="anim-fade-up anim-delay-1" sx={{ mb: 3, maxWidth: 680 }}>
              Modern cheque validation for{' '}
              <Box
                component="span"
                sx={{
                  color: 'secondary.main',
                  background: 'linear-gradient(120deg, #0c9b65 0%, #123c4e 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Sri Lanka
              </Box>
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              className="anim-fade-up anim-delay-2"
              sx={{ mb: 4, maxWidth: 560 }}
            >
              SinTex turns cheque verification into a fast, low-friction flow for operations teams,
              with bilingual OCR, confidence scoring, and policy-grade validation in one interface.
            </Typography>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              sx={{ mb: 3.5, maxWidth: 520 }}
              className="anim-fade-up anim-delay-3"
            >
              <Button variant="contained" color="primary" size="large" onClick={onGetStarted} endIcon={<ArrowForwardIcon />}>
                Request Live Demo
              </Button>
              <Button variant="outlined" color="secondary" size="large" onClick={onGetStarted}>
                View Product Walkthrough
              </Button>
            </Stack>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={1.2}
              className="anim-fade-up anim-delay-3"
              sx={{ mb: 3.2 }}
            >
              <Chip icon={<VerifiedUserIcon />} label="Bank-grade control layer" />
              <Chip icon={<FlashOnIcon />} label="Sub-2 second validations" />
            </Stack>

            <Typography variant="body2" color="text.secondary" className="anim-fade-up anim-delay-3">
              Trusted by pilot teams in retail and enterprise banking operations.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <HeroImageContainer className="anim-fade-up anim-delay-2">
              <Box
                component="img"
                src={heroImage}
                alt="SinTex cheque validation preview"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  zIndex: 1,
                }}
              />

              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(180deg, rgba(8, 26, 36, 0.08) 0%, rgba(8, 26, 36, 0.52) 100%)',
                  zIndex: 1,
                }}
              />

              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'radial-gradient(520px 220px at 70% 22%, rgba(36, 189, 137, 0.26), transparent 65%)',
                  zIndex: 2,
                }}
              />

              <Box sx={{ position: 'absolute', top: '8%', right: '6%', zIndex: 2 }}>
                <CheckIconContainer>
                  <CheckCircleIcon sx={{ color: 'primary.main', fontSize: 28 }} />
                </CheckIconContainer>
              </Box>

              <FloatingCard sx={{ left: '5%', bottom: '8%' }}>
                <Typography variant="caption" sx={{ opacity: 0.86, letterSpacing: 0.8 }}>
                  AVERAGE REVIEW TIME
                </Typography>
                <Typography variant="h6" sx={{ lineHeight: 1.1, mt: 0.6 }}>
                  1.7s / cheque
                </Typography>
              </FloatingCard>

              <FloatingCard sx={{ right: '6%', bottom: '20%' }}>
                <Typography variant="caption" sx={{ opacity: 0.86, letterSpacing: 0.8 }}>
                  VALIDATION CONFIDENCE
                </Typography>
                <Typography variant="h6" sx={{ lineHeight: 1.1, mt: 0.6 }}>
                  99.3%
                </Typography>
              </FloatingCard>

              {dots.map(([top, left], i) => (
                <Box
                  key={i}
                  sx={{
                    position: 'absolute',
                    width: 3,
                    height: 3,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(80, 184, 255, 0.72)',
                    boxShadow: '0 0 8px rgba(80, 184, 255, 0.7)',
                    top: `${top}%`,
                    left: `${left}%`,
                    animation: 'twinkle 2.4s ease-in-out infinite',
                    animationDelay: `${i * 140}ms`,
                    zIndex: 2,
                  }}
                />
              ))}
            </HeroImageContainer>
          </Grid>
        </Grid>
      </Container>

      <Box className="ambient-glow" sx={{ right: '-120px', top: '20%', animationDelay: '120ms' }} />
      <Box className="ambient-glow ambient-glow-alt" sx={{ left: '-90px', bottom: '-60px' }} />
    </HeroSection>
  )
}

export default Hero
