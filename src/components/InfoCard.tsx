import { Card, CardContent, Typography } from '@mui/material'
import type { ReactNode } from 'react'

interface InfoCardProps {
  title: string
  description: string
  icon?: ReactNode
}

const InfoCard = ({ title, description, icon }: InfoCardProps) => (
  <Card
    variant="outlined"
    sx={{
      height: '100%',
      background:
        'linear-gradient(135deg, rgba(255,193,7,0.08) 0%, rgba(0,0,0,0.6) 100%)',
    }}
  >
    <CardContent>
      {icon}
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
  </Card>
)

export default InfoCard
