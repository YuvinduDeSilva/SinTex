import { Box, Chip, Container, Grid, Stack, Typography } from '@mui/material'
import Technology from '../sections/Technology'
import Card from '../components/Card'
import SectionHeading from '../components/SectionHeading'
import SEO from '../components/SEO'

function TechnologyPage() {
  return (
    <>
      <SEO
        title="Cheque OCR Technology and Validation Architecture"
        description="Learn how SinTex combines bilingual OCR, deterministic rules, and queue-based processing for reliable cheque validation at scale."
        path="/technology"
        keywords={[
          'bilingual OCR for cheques',
          'cheque OCR architecture',
          'banking validation engine',
          'Sinhala English OCR banking',
          'signature verification cheques',
        ]}
      />
      <Technology />

      <Box
        sx={{
          py: { xs: 6, md: 8 },
          background:
            'radial-gradient(760px 280px at 12% 0%, rgba(24, 170, 115, 0.14), transparent 68%), transparent',
        }}
      >
        <Container maxWidth="lg">
          <Box className="section-shell" sx={{ p: { xs: 2.2, md: 4 } }}>
            <SectionHeading
              eyebrow="UNDER THE HOOD"
              title="Architecture tuned for accuracy and uptime"
              description="SinTex combines OCR models, deterministic validation rules, and queue-based processing so teams can scale without sacrificing control."
              align="center"
            />

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={1.2}
              justifyContent="center"
              sx={{ mb: 3 }}
              className="anim-fade-up anim-delay-1"
            >
              <Chip label="Resilient queueing" />
              <Chip label="Script-aware models" />
              <Chip label="Configurable controls" />
            </Stack>

            <Grid container spacing={3}>
              {[
                {
                  title: 'Model Layer',
                  body: 'Script-aware OCR and signature models optimized for cheque layouts commonly used in Sri Lankan banks.',
                },
                {
                  title: 'Validation Layer',
                  body: 'Configurable policy engine for amount checks, date windows, duplicate detection, and MICR consistency.',
                },
                {
                  title: 'Ops Layer',
                  body: 'Live dashboards, confidence thresholds, and human-in-the-loop queues for controlled exception handling.',
                },
              ].map((item, index) => (
                <Grid size={{ xs: 12, md: 4 }} key={item.title}>
                  <Card sx={{ height: '100%' }} className={`anim-fade-up anim-delay-${Math.min(index + 1, 3)}`}>
                    <Typography variant="caption" sx={{ color: 'secondary.main', fontWeight: 800, letterSpacing: 1.2 }}>
                      LAYER 0{index + 1}
                    </Typography>
                    <Typography variant="h5" sx={{ mb: 1.5 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.body}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default TechnologyPage
