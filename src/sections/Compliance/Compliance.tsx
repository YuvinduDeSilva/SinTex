import { Box, Chip, Container, Stack } from '@mui/material'
import { styled } from '@mui/material/styles'
import VerifiedUserRoundedIcon from '@mui/icons-material/VerifiedUserRounded'
import PolicyRoundedIcon from '@mui/icons-material/PolicyRounded'
import SectionHeading from '../../components/SectionHeading'

const ComplianceSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(8, 0),
  background:
    'radial-gradient(740px 250px at 10% 6%, rgba(16, 137, 95, 0.14), transparent 68%), linear-gradient(180deg, rgba(244, 241, 234, 0.66) 0%, rgba(238, 247, 244, 0.62) 100%)',
  overflow: 'hidden',
}))

const CompliancePanel = styled(Box)(({ theme }) => ({
  background:
    'linear-gradient(180deg, rgba(252, 251, 246, 0.92) 0%, rgba(251, 255, 253, 0.76) 100%)',
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: 24,
  padding: theme.spacing(4),
  boxShadow: '0 16px 30px rgba(17, 24, 39, 0.09)',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    width: 240,
    height: 240,
    top: -120,
    right: -80,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(15, 143, 98, 0.2) 0%, transparent 72%)',
    pointerEvents: 'none',
  },
}))

function Compliance() {
  return (
    <ComplianceSection id="compliance">
      <Container maxWidth="lg">
        <CompliancePanel className="anim-fade-up">
          <SectionHeading
            eyebrow="SECURITY FIRST"
            title="Governance designed for banking audits"
            description="Operational controls and validation workflows aligned with enterprise banking requirements."
          />
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} className="anim-fade-up anim-delay-2" sx={{ position: 'relative' }}>
            <Chip
              icon={<VerifiedUserRoundedIcon />}
              label="CRIB-compliant processing"
              sx={{ px: 1, py: 2.2, fontWeight: 700 }}
            />
            <Chip
              icon={<PolicyRoundedIcon />}
              label="Data privacy and auditability"
              sx={{ px: 1, py: 2.2, fontWeight: 700 }}
            />
            <Chip label="Immutable review trails" sx={{ px: 1, py: 2.2, fontWeight: 700 }} />
          </Stack>
        </CompliancePanel>
      </Container>
      <Box className="ambient-glow" sx={{ right: '-110px', bottom: '-80px' }} />
    </ComplianceSection>
  )
}

export default Compliance
