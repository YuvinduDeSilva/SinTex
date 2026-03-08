import { Box, Chip, Container, Grid, Stack, Typography } from '@mui/material'
import Compliance from '../sections/Compliance'
import Card from '../components/Card'
import SectionHeading from '../components/SectionHeading'
import SEO from '../components/SEO'

function CompliancePage() {
  return (
    <>
      <SEO
        title="Banking Compliance and Audit Controls for Cheque Processing"
        description="SinTex provides audit trails, role-based controls, and policy-driven workflows to support cheque processing compliance requirements."
        path="/compliance"
        keywords={[
          'cheque processing compliance',
          'banking audit trail software',
          'role based controls banking',
          'policy based cheque validation',
          'enterprise banking governance',
        ]}
      />
      <Compliance />

      <Box
        sx={{
          py: { xs: 6, md: 8 },
          background:
            'radial-gradient(680px 240px at 90% 2%, rgba(14, 88, 106, 0.14), transparent 70%), transparent',
        }}
      >
        <Container maxWidth="lg">
          <Box className="section-shell" sx={{ p: { xs: 2.2, md: 4 } }}>
            <SectionHeading
              eyebrow="RISK AND GOVERNANCE"
              title="Controls mapped to real audit requirements"
              description="Every processed cheque carries traceable metadata, confidence signals, and operator actions for easy review and reporting."
            />

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.2} sx={{ mb: 3 }} className="anim-fade-up anim-delay-1">
              <Chip label="Role-based approvals" />
              <Chip label="Encrypted records" />
              <Chip label="Immutable event chain" />
            </Stack>

            <Grid container spacing={3}>
              {[
                {
                  title: 'Access Controls',
                  body: 'Role-based access with branch and operation-level restrictions for reviewers, supervisors, and admins.',
                },
                {
                  title: 'Data Protection',
                  body: 'Encryption in transit and at rest, retention policy controls, and export restrictions by role.',
                },
                {
                  title: 'Auditability',
                  body: 'Immutable event trail for OCR outputs, overrides, approvals, and integration events.',
                },
              ].map((item, index) => (
                <Grid size={{ xs: 12, md: 4 }} key={item.title}>
                  <Card sx={{ height: '100%' }} className={`anim-fade-up anim-delay-${Math.min(index + 1, 3)}`}>
                    <Typography variant="caption" sx={{ color: 'secondary.main', fontWeight: 800, letterSpacing: 1.2 }}>
                      CONTROL 0{index + 1}
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

export default CompliancePage
