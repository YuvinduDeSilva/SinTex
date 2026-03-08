import { Box, Typography } from '@mui/material'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <Box sx={{ textAlign: align, mb: 5.8 }}>
      {eyebrow ? (
        <Typography
          variant="overline"
          sx={{
            color: 'secondary.main',
            fontWeight: 800,
            letterSpacing: 2.1,
            display: 'block',
            mb: 1.25,
            opacity: 0.92,
          }}
        >
          {eyebrow}
        </Typography>
      ) : null}
      <Typography variant="h2" sx={{ mb: 1.9, maxWidth: align === 'center' ? 860 : 760, mx: align === 'center' ? 'auto' : 0 }}>
        {title}
      </Typography>
      {description ? (
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: align === 'center' ? 720 : 640, mx: align === 'center' ? 'auto' : 0 }}
        >
          {description}
        </Typography>
      ) : null}
    </Box>
  )
}

export default SectionHeading