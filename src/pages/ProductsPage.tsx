import { Box, Button, Chip, Container, Grid, Stack, Typography } from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Card'
import SectionHeading from '../components/SectionHeading'
import SEO from '../components/SEO'

function ProductsPage() {
  const navigate = useNavigate()

  const products = [
    {
      id: 'bank-product',
      title: 'Bank Verify & Validate Suite',
      audience: 'For banks and financial institutions',
      description:
        'Enterprise-grade cheque verification and validation for branch counters and centralized clearing teams.',
      highlights: [
        'Validate payee details, cheque number, date, and amount consistency',
        'Run signature and alteration checks before final acceptance',
        'Flag high-risk cheques to reduce fraud and operational losses',
      ],
      ctaLabel: 'Request Bank Demo',
      ctaTarget: '/demo',
    },
    {
      id: 'user-product',
      title: 'Cheque Pre-Check for Customers',
      audience: 'For business and retail users',
      description:
        'A customer-facing pre-verification flow that estimates whether a cheque is likely to be accepted or rejected before bank submission.',
      highlights: [
        'Verify image quality and required cheque fields in seconds',
        'Warn users about likely rejection reasons before they visit the bank',
        'Help users correct issues early to improve first-time acceptance rates',
      ],
      ctaLabel: 'Talk to Sales',
      ctaTarget: '/contact-us',
    },
  ]

  return (
    <>
      <SEO
        title="Cheque Verification Products for Banks and Customers"
        description="Explore SinTex bank-side verification and customer pre-check products to reduce cheque rejections and improve clearing accuracy."
        path="/products"
        keywords={[
          'bank cheque validation system',
          'cheque pre-check',
          'cheque verification products',
          'fraud detection cheques',
          'bank demo cheque software',
        ]}
      />
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          background:
            'radial-gradient(760px 280px at 15% 0%, rgba(24, 161, 110, 0.14), transparent 68%), radial-gradient(620px 240px at 92% 12%, rgba(18, 60, 78, 0.12), transparent 70%)',
        }}
      >
        <Container maxWidth="lg">
          <Box className="section-shell soft-grid" sx={{ p: { xs: 2.2, md: 4 } }}>
          <SectionHeading
            eyebrow="PRODUCTS"
            title="Two focused products, one trusted intelligence engine"
            description="Choose the right product for your workflow: bank-side validation for operations teams, or customer-side pre-checks before bank submission."
            align="center"
          />

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1.2}
            justifyContent="center"
            sx={{ mb: 3.2 }}
            className="anim-fade-up anim-delay-1"
          >
            <Chip label="Bilingual OCR" />
            <Chip label="Risk-aware validation" />
            <Chip label="Audit-ready outcomes" />
          </Stack>

          <Grid container spacing={3}>
            {products.map((product, index) => (
              <Grid size={{ xs: 12, md: 6 }} key={product.title}>
                <Card
                  id={product.id}
                  sx={{ height: '100%', scrollMarginTop: { xs: 90, md: 104 } }}
                  className={`anim-fade-up anim-delay-${Math.min(index + 1, 3)}`}
                >
                  <Typography
                    variant="overline"
                    sx={{
                      color: 'secondary.main',
                      fontWeight: 800,
                      letterSpacing: 1.5,
                      px: 1.5,
                      py: 0.4,
                      borderRadius: 999,
                      display: 'inline-block',
                      backgroundColor: 'rgba(15, 63, 86, 0.09)',
                      border: '1px solid rgba(15, 63, 86, 0.18)',
                    }}
                  >
                    {product.audience}
                  </Typography>
                  <Typography variant="h4" sx={{ mt: 1, mb: 1.5 }}>
                    {product.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 2.5 }}>
                    {product.description}
                  </Typography>
                  <Stack spacing={1.2} sx={{ mb: 3 }}>
                    {product.highlights.map((point) => (
                      <Box key={point} sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
                        <CheckCircleOutlineIcon sx={{ fontSize: 18, color: 'primary.main', mt: '2px' }} />
                        <Typography variant="body2" color="text.secondary">
                          {point}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                  <Button variant="contained" endIcon={<ArrowForwardIcon />} onClick={() => navigate(product.ctaTarget)}>
                    {product.ctaLabel}
                  </Button>
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

export default ProductsPage
