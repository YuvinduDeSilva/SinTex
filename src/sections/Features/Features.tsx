import { Box, Chip, Container, Grid, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import SpeedIcon from '@mui/icons-material/Speed'
import TranslateIcon from '@mui/icons-material/Translate'
import SecurityIcon from '@mui/icons-material/Security'
import AutoGraphIcon from '@mui/icons-material/AutoGraph'
import type { ReactNode } from 'react'
import Card from '../../components/Card'
import FeatureIcon from '../../components/FeatureIcon'
import SectionHeading from '../../components/SectionHeading'

const FeaturesSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(8, 0),
  background:
    'radial-gradient(760px 260px at 8% -6%, rgba(24, 170, 115, 0.16), transparent 66%), radial-gradient(660px 220px at 88% 16%, rgba(19, 78, 102, 0.14), transparent 68%)',
  overflow: 'hidden',
}))

const FeatureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  padding: theme.spacing(4),
  textAlign: 'left',
  position: 'relative',
  overflow: 'hidden',
  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    borderRadius: 'inherit',
    pointerEvents: 'none',
    background: 'linear-gradient(160deg, rgba(255,255,255,0.38) 0%, rgba(255,255,255,0) 55%)',
  },
}))

interface Feature {
  icon: ReactNode
  iconColor: string
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: <SpeedIcon sx={{ color: '#000', fontSize: 28 }} />,
    iconColor: '#8ed39b',
    title: 'Unmatched Accuracy',
    description:
      'Engineered AI validation pipeline that reduces manual scrutiny and catches OCR edge cases early.',
  },
  {
    icon: <TranslateIcon sx={{ color: '#000', fontSize: 28 }} />,
    iconColor: '#8ed39b',
    title: 'Instant Processing',
    description:
      'Real-time extraction and rule checks for bilingual cheque documents with reliable throughput.',
  },
  {
    icon: <SecurityIcon sx={{ color: '#000', fontSize: 28 }} />,
    iconColor: '#8ed39b',
    title: 'Fraud Detection',
    description:
      'Signature and tamper anomaly detection layered with deterministic validation policies.',
  },
]

function Features() {
  return (
    <FeaturesSection id="features">
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="CORE CAPABILITIES"
          title="AI capabilities built for cheque operations"
          description="Fast, accurate and secure cheque processing optimized for Sinhala and English banking documents."
          align="center"
        />

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={1.2}
          justifyContent="center"
          className="anim-fade-up anim-delay-1"
          sx={{ mb: 3.2 }}
        >
          <Chip icon={<AutoGraphIcon />} label="Live confidence scoring" />
          <Chip label="Human-in-the-loop review" />
          <Chip label="Bilingual capture resilience" />
        </Stack>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <FeatureCard className={`anim-fade-up anim-delay-${Math.min(index + 1, 3)}`}>
                <FeatureIcon icon={feature.icon} color={feature.iconColor} />
                <Typography variant="caption" sx={{ color: 'secondary.main', fontWeight: 800, letterSpacing: 1.2 }}>
                  FEATURE 0{index + 1}
                </Typography>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </FeatureCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box className="ambient-glow" sx={{ right: '-140px', top: '32%' }} />
    </FeaturesSection>
  )
}

export default Features
