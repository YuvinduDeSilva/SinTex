import { Box, Chip, Container, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import Button from '../../components/Button'

const CtaSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(10, 0),
  textAlign: 'center',
  background:
    'linear-gradient(180deg, rgba(241,239,231,0.54) 0%, rgba(223,244,234,0.72) 100%)',
  overflow: 'hidden',
}))

interface CtaProps {
  onGetStarted?: () => void
  onContactUs?: () => void
}

function Cta({ onGetStarted, onContactUs }: CtaProps) {
  return (
    <CtaSection>
      <Container maxWidth="md">
        <Box
          className="section-shell anim-fade-up"
          sx={{
            p: { xs: 2.5, md: 5 },
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              width: 260,
              height: 260,
              top: -120,
              left: -90,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(15,143,98,0.28) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              width: 280,
              height: 280,
              bottom: -140,
              right: -80,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(15,63,86,0.2) 0%, transparent 72%)',
              pointerEvents: 'none',
            }}
          />

          <Typography variant="h2" className="anim-fade-up" sx={{ mb: 1.8, position: 'relative' }}>
            Ready to modernize cheque operations?
          </Typography>
          <Typography
            color="text.secondary"
            className="anim-fade-up anim-delay-1"
            sx={{ mb: 4, maxWidth: 720, mx: 'auto', position: 'relative' }}
          >
            Launch production-grade validation with bilingual OCR, configurable policy controls, and full
            traceability from ingestion to export.
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent="center"
            className="anim-fade-up anim-delay-2"
            sx={{ position: 'relative' }}
          >
            <Button variant="contained" color="primary" size="large" onClick={onGetStarted}>
              Book Demo Session
            </Button>
            <Button variant="outlined" color="secondary" size="large" onClick={onContactUs}>
              Speak To Team
            </Button>
          </Stack>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1.2}
            justifyContent="center"
            sx={{ mt: 3, position: 'relative' }}
            className="anim-fade-up anim-delay-3"
          >
            <Chip label="Bank-ready onboarding in 14 days" />
            <Chip label="Audit logs by default" />
            <Chip label="Sinhala + English OCR" />
          </Stack>
        </Box>
      </Container>
    </CtaSection>
  )
}

export default Cta
