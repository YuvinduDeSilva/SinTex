import { Box, Chip, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import Features from '../sections/Features'
import Card from '../components/Card'
import SectionHeading from '../components/SectionHeading'
import SEO from '../components/SEO'

function FeaturesPage() {
  return (
    <>
      <SEO
        title="Cheque Processing Features and Capabilities"
        description="See SinTex features including OCR extraction, confidence scoring, workflow controls, and production rollout support for banking teams."
        path="/features"
        keywords={[
          'cheque processing features',
          'OCR validation pipeline',
          'banking operations automation',
          'confidence scoring cheques',
          'cheque workflow software',
        ]}
      />
      <Features />

      <Box
        sx={{
          py: { xs: 6, md: 8 },
          background:
            'radial-gradient(680px 260px at 94% 5%, rgba(19, 73, 95, 0.12), transparent 70%), transparent',
        }}
      >
        <Container maxWidth="lg">
          <Box className="section-shell soft-grid" sx={{ p: { xs: 2.2, md: 4 } }}>
            <SectionHeading
              eyebrow="DELIVERY BLUEPRINT"
              title="Feature rollout in 3 phases"
              description="Implementation starts with image quality baselining, then policy tuning, and finally production hardening with your operations team."
            />

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.2} sx={{ mb: 3 }} className="anim-fade-up anim-delay-1">
              <Chip label="Pilot-first setup" />
              <Chip label="Measured confidence gates" />
              <Chip label="Branch-ready scaling" />
            </Stack>

            <Grid container spacing={3}>
              {[
                {
                  title: 'Phase 1: Baseline',
                  points: ['Dataset profiling', 'Capture device checks', 'Field confidence scoring'],
                },
                {
                  title: 'Phase 2: Optimize',
                  points: ['Rule and threshold tuning', 'Signature anomaly rules', 'Exception queue design'],
                },
                {
                  title: 'Phase 3: Scale',
                  points: ['Branch-level rollout', 'Agent training', 'SLA + alert automation'],
                },
              ].map((phase, index) => (
                <Grid size={{ xs: 12, md: 4 }} key={phase.title}>
                  <Card sx={{ height: '100%' }} className={`anim-fade-up anim-delay-${Math.min(index + 1, 3)}`}>
                    <Typography variant="caption" sx={{ color: 'secondary.main', fontWeight: 800, letterSpacing: 1.2 }}>
                      STEP 0{index + 1}
                    </Typography>
                    <Typography variant="h5" sx={{ mb: 1.5 }}>
                      {phase.title}
                    </Typography>
                    <List disablePadding>
                      {phase.points.map((point) => (
                        <ListItem key={point} sx={{ px: 0 }}>
                          <ListItemIcon sx={{ minWidth: 30, mt: '3px' }}>
                            <CheckCircleRoundedIcon color="primary" fontSize="small" />
                          </ListItemIcon>
                          <ListItemText primaryTypographyProps={{ variant: 'body2', color: 'text.secondary' }} primary={point} />
                        </ListItem>
                      ))}
                    </List>
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

export default FeaturesPage
