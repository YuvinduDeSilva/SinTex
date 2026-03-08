import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { styled } from '@mui/material/styles'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import SectionHeading from '../../components/SectionHeading'
import architectureImage from '../../assets/archi.png'

const TechnologySection = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(8, 0),
  background:
    'linear-gradient(180deg, rgba(248, 246, 238, 0.6) 0%, rgba(238, 248, 244, 0.64) 100%), radial-gradient(720px 280px at 90% 2%, rgba(31, 127, 154, 0.15), transparent 68%)',
  overflow: 'hidden',
}))

const VisualPanel = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(1.4),
  borderRadius: 26,
  border: `1px solid ${theme.palette.divider}`,
  background: 'linear-gradient(180deg, rgba(255,255,255,0.86) 0%, rgba(255,255,255,0.72) 100%)',
  boxShadow: '0 18px 34px rgba(16, 49, 54, 0.1)',
}))

function Technology() {
  return (
    <TechnologySection id="technology">
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <VisualPanel className="anim-fade-up">
              <Box
                component="img"
                src={architectureImage}
                alt="SinTex bilingual OCR architecture"
                sx={{
                  width: '100%',
                  maxWidth: 640,
                  height: 'auto',
                  display: 'block',
                  objectFit: 'contain',
                }}
              />
            </VisualPanel>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <SectionHeading
              eyebrow="THE ENGINE"
              title="Architecture that balances speed and control"
              description="Fast, accurate, and secure automated cheque processing optimized for Sinhala and English documents."
            />
            <List disablePadding className="anim-fade-up anim-delay-1">
              {[
                'Neural character recognition weighted for high precision extraction.',
                'Standardized field validation for international banking compliance.',
                'Automatic script-switching and handwriting tolerance detection.',
              ].map((item) => (
                <ListItem key={item} sx={{ px: 0, alignItems: 'flex-start' }}>
                  <ListItemIcon sx={{ minWidth: 34, mt: '3px' }}>
                    <CheckCircleRoundedIcon color="primary" fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{ variant: 'body2', color: 'text.secondary' }}
                    primary={item}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>
      <Box className="ambient-glow ambient-glow-alt" sx={{ left: '-120px', bottom: '-90px' }} />
    </TechnologySection>
  )
}

export default Technology
