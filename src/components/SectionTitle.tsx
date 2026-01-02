import { Box, Typography } from '@mui/material'
import type { ReactNode } from 'react'

interface SectionTitleProps {
  title: string
  subtitle?: ReactNode
  align?: 'left' | 'center'
}

const SectionTitle = ({ title, subtitle, align = 'left' }: SectionTitleProps) => (
  <Box mb={5} textAlign={align}>
    <Typography variant="h2" component="h2" gutterBottom>
      {title}
    </Typography>
    {subtitle && (
      <Typography variant="body1" color="text.secondary">
        {subtitle}
      </Typography>
    )}
  </Box>
)

export default SectionTitle
