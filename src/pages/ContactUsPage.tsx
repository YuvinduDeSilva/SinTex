import { Box, Chip, Container, Grid, Stack, TextField, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded'
import PhoneInTalkRoundedIcon from '@mui/icons-material/PhoneInTalkRounded'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded'
import type { FormEvent } from 'react'
import Card from '../components/Card'
import Button from '../components/Button'
import SEO from '../components/SEO'

const ContactSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(8, 0),
  background:
    'radial-gradient(920px 300px at 4% -8%, rgba(18,60,78,0.14), transparent 66%), radial-gradient(640px 220px at 92% 12%, rgba(20, 151, 105, 0.16), transparent 68%), linear-gradient(180deg, rgba(241,239,231,0.8) 0%, rgba(251,249,243,0.9) 100%)',
  overflow: 'hidden',
}))

const ContactCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(4),
  backdropFilter: 'blur(8px)',
}))

const ContactLine = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.2),
  marginBottom: theme.spacing(1.1),
  color: theme.palette.text.secondary,
}))

function ContactUsPage() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <>
      <SEO
        title="Contact SinTex | Banking Cheque Automation Team"
        description="Contact SinTex for enterprise onboarding, implementation support, and pricing for cheque verification and OCR workflows."
        path="/contact-us"
        keywords={[
          'contact cheque software provider',
          'banking OCR implementation support',
          'SinTex contact Sri Lanka',
          'enterprise cheque automation onboarding',
        ]}
      />
      <ContactSection>
        <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              variant="overline"
              className="anim-fade-up"
              sx={{ color: 'secondary.main', letterSpacing: 1.5, fontWeight: 800 }}
            >
              GET IN TOUCH
            </Typography>
            <Typography variant="h2" className="anim-fade-up anim-delay-1" sx={{ mb: 2 }}>
              Talk with the SinTex team
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              className="anim-fade-up anim-delay-2"
              sx={{ mb: 3 }}
            >
              Talk to our team about deployment, onboarding, and enterprise pricing for SinTex.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} sx={{ mb: 2.2 }} className="anim-fade-up anim-delay-2">
              <Chip label="Enterprise onboarding" />
              <Chip label="Fast implementation support" />
            </Stack>

            <ContactLine>
              <MailOutlineRoundedIcon sx={{ color: 'primary.main', fontSize: 20 }} />
              <Typography variant="body2">hello@sintex.lk</Typography>
            </ContactLine>
            <ContactLine>
              <PhoneInTalkRoundedIcon sx={{ color: 'primary.main', fontSize: 20 }} />
              <Typography variant="body2">+94 11 234 5678</Typography>
            </ContactLine>
            <ContactLine>
              <LocationOnOutlinedIcon sx={{ color: 'primary.main', fontSize: 20 }} />
              <Typography variant="body2">Colombo 03, Sri Lanka</Typography>
            </ContactLine>

            <Box className="glass-panel" sx={{ borderRadius: 3, p: 2.2, maxWidth: 340 }}>
              <Typography variant="body2" color="text.secondary">
                Enterprise onboarding support includes data mapping, policy design, and operator training for branch teams.
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <ContactCard className="anim-fade-up anim-delay-2">
              <Typography variant="h4" sx={{ mb: 3 }}>
                Send us a message
              </Typography>
              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField fullWidth required name="name" label="Full Name" />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField fullWidth required name="company" label="Company" />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField fullWidth required type="email" name="email" label="Work Email" />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      required
                      name="message"
                      label="How can we help?"
                      multiline
                      minRows={4}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <Button type="submit" variant="contained" color="primary" size="large">
                      Submit Inquiry
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </ContactCard>
          </Grid>
        </Grid>

        <Box className="section-shell soft-grid" sx={{ mt: 3.2, p: { xs: 2.2, md: 3 } }}>
          <Grid container spacing={3}>
            {[
              {
                title: 'Support Window',
                body: 'Mon-Fri, 8:30 AM to 6:00 PM (SLST) with priority escalation for production teams.',
              },
              {
                title: 'Implementation Help',
                body: 'Dedicated onboarding specialists to guide data mapping, branch enablement, and QA sign-off.',
              },
              {
                title: 'Response SLA',
                body: 'Initial response within 4 business hours for enterprise accounts and 1 hour for critical incidents.',
              },
            ].map((item, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={item.title}>
                <ContactCard className={`anim-fade-up anim-delay-${Math.min(index + 1, 3)}`}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.1 }}>
                    <CheckCircleOutlineRoundedIcon sx={{ color: 'primary.main', fontSize: 19 }} />
                    <Typography variant="caption" sx={{ color: 'secondary.main', fontWeight: 800, letterSpacing: 1.2 }}>
                      SERVICE
                    </Typography>
                  </Box>
                  <Typography variant="h5" sx={{ mb: 1.2 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.body}
                  </Typography>
                </ContactCard>
              </Grid>
            ))}
          </Grid>
        </Box>
        </Container>

        <Box className="ambient-glow ambient-glow-alt" sx={{ right: '-120px', bottom: '-70px' }} />
      </ContactSection>
    </>
  )
}

export default ContactUsPage
