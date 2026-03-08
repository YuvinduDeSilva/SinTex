import { Box, Container,  Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import type { FormEvent } from 'react'
import Card from '../../components/Card'
import Button from '../../components/Button'

const DemoSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  background:
    'radial-gradient(900px 260px at 95% -8%, rgba(12,155,101,0.12), transparent 66%), rgba(251, 249, 243, 0.7)',
}))

const DemoCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  maxWidth: 600,
  margin: '0 auto',
  backdropFilter: 'blur(8px)',
}))

interface RequestDemoProps {
  onRequestAccess?: (email: string) => void
}

const GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfojR5-8VxE86oiHUnWxq9Sg_hEVOrWRRixM8nb-GLztB0s2w/viewform?usp=publish-editor'

function RequestDemo({ onRequestAccess }: RequestDemoProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string
    if (onRequestAccess) {
      onRequestAccess(email)
    }

    window.open(GOOGLE_FORM_URL, '_blank', 'noopener,noreferrer')
  }

  return (
    <DemoSection id="demo">
      <Container maxWidth="lg">
        <DemoCard className="anim-fade-up">
          <Typography variant="h3" className="anim-fade-up" sx={{ mb: 2 }}>
            Request a Private Demo
          </Typography>
          <Typography variant="body1" color="text.secondary" className="anim-fade-up anim-delay-1" sx={{ mb: 4 }}>
            Fast, accurate, and secure automated cheque processing optimized for Sinhala and
            English banking documents.
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: 'flex',
              gap: 2,
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              justifyContent: 'center',
            }}
            className="anim-fade-up anim-delay-2"
          >
       
            <Button type="submit" variant="contained" color="primary" size="large">
              Request Access
            </Button>
          </Box>
        </DemoCard>
      </Container>
    </DemoSection>
  )
}

export default RequestDemo
