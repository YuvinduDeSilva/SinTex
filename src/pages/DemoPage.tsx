import { Box, Container, Grid, Typography } from '@mui/material'
import RequestDemo from '../sections/RequestDemo'
import Card from '../components/Card'
import SectionHeading from '../components/SectionHeading'
import SEO from '../components/SEO'

function DemoPage() {
  return (
    <>
      <SEO
        title="Request a Demo | SinTex Cheque Verification"
        description="Book a private SinTex demo to evaluate automated cheque verification, OCR accuracy, and rollout planning for your bank."
        path="/demo"
        keywords={[
          'cheque software demo',
          'bank cheque verification demo',
          'OCR banking demo Sri Lanka',
          'automated cheque processing trial',
        ]}
      />
      <RequestDemo />

      <Box sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Box className="section-shell" sx={{ p: { xs: 2.2, md: 4 } }}>
            <SectionHeading
              eyebrow="WHAT HAPPENS NEXT"
              title="From request to pilot quickly"
              description="After you submit your details, our team aligns on your cheque formats, sample volumes, and deployment scope."
              align="center"
            />

            <Grid container spacing={3}>
              {[
                {
                  title: 'Step 1: Discovery',
                  body: '30-minute call to align bank flows, exception paths, and required integrations.',
                },
                {
                  title: 'Step 2: Pilot Setup',
                  body: 'Secure workspace, sample upload, and accuracy baseline report in the first week.',
                },
                {
                  title: 'Step 3: Operations Readiness',
                  body: 'Reviewer training, threshold tuning, and go-live checklist for controlled rollout.',
                },
              ].map((item, index) => (
                <Grid size={{ xs: 12, md: 4 }} key={item.title}>
                  <Card sx={{ height: '100%' }} className={`anim-fade-up anim-delay-${Math.min(index + 1, 3)}`}>
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

export default DemoPage
