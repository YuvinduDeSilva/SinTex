import { Box, Chip, Container, Grid, Stack, Typography } from '@mui/material'
import Hero from '../sections/Hero'
import Cta from '../sections/Cta'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Card'
import SectionHeading from '../components/SectionHeading'
import SEO from '../components/SEO'

function HomePage() {
  const navigate = useNavigate()

  const handleGetStarted = () => {
    navigate('/demo')
  }

  const handleContactUs = () => {
    navigate('/contact-us')
  }

  return (
    <>
      <SEO
        title="SinTex AI Cheque Verification Platform"
        description="Automated cheque verification for banks in Sri Lanka with bilingual OCR, fast validation, and audit-ready workflows."
        path="/"
        keywords={[
          'cheque verification software',
          'automated cheque processing',
          'banking OCR Sri Lanka',
          'bilingual OCR',
          'cheque validation platform',
        ]}
      />
      <Hero onGetStarted={handleGetStarted} />

      <Box sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Box className="section-shell soft-grid" sx={{ p: { xs: 2.2, md: 4 } }}>
            <SectionHeading
              eyebrow="WHY BANKS CHOOSE SINTEX"
              title="Designed for real clearing pressure"
              description="From image capture to approval decision, every step is tuned for day-to-day clearing workloads and compliance constraints."
              align="center"
            />
            <Grid container spacing={3}>
              {[
                {
                  title: '4.2M+',
                  text: 'cheque images processed in pilots and production rollouts.',
                },
                {
                  title: '< 2 sec',
                  text: 'average extraction and rule validation response per cheque.',
                },
                {
                  title: '99.3%',
                  text: 'field-level recognition confidence on bilingual datasets.',
                },
              ].map((stat, index) => (
                <Grid size={{ xs: 12, md: 4 }} key={stat.title}>
                  <Card className={`anim-fade-up anim-delay-${Math.min(index + 1, 3)}`}>
                    <Typography variant="h3" sx={{ color: 'primary.main', mb: 0.7 }}>
                      {stat.title}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'secondary.main', letterSpacing: 1.2 }}>
                      PERFORMANCE
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {stat.text}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Card sx={{ mt: 4, p: 4 }} className="anim-fade-up anim-delay-2">
              <Typography variant="h4" sx={{ mb: 2 }}>
                Typical day one workflow
              </Typography>
              <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ flexWrap: 'wrap' }}>
                {['Image Ingestion', 'OCR + Signature Checks', 'Rule Validation', 'Core Banking Export'].map(
                  (step) => (
                    <Chip key={step} label={step} sx={{ px: 1.2, py: 2.2, fontWeight: 700 }} />
                  )
                )}
              </Stack>

              <Grid container spacing={2} sx={{ mt: 0.5 }}>
                {[
                  {
                    title: 'Ops Console',
                    text: 'Unified queue view with confidence scores, exception reasons, and reviewer routing.',
                  },
                  {
                    title: 'Policy Engine',
                    text: 'Configure amount limits, account checks, and image quality controls without code.',
                  },
                  {
                    title: 'Integration Ready',
                    text: 'Export structured outcomes and audit trails to your core and reporting systems.',
                  },
                ].map((item, index) => (
                  <Grid size={{ xs: 12, md: 4 }} key={item.title}>
                    <Box
                      className={`anim-fade-up anim-delay-${Math.min(index + 1, 3)}`}
                      sx={{
                        p: 2.2,
                        borderRadius: 3,
                        border: '1px solid rgba(147, 171, 178, 0.34)',
                        backgroundColor: 'rgba(255,255,255,0.58)',
                      }}
                    >
                      <Typography variant="h6" sx={{ mb: 0.8 }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.text}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Card>
          </Box>
        </Container>
      </Box>

      <Cta onGetStarted={handleGetStarted} onContactUs={handleContactUs} />
    </>
  )
}

export default HomePage
