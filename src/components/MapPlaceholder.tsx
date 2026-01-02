import { Box } from '@mui/material'

const MapPlaceholder = () => (
  <Box
    sx={{
      borderRadius: 3,
      border: '1px dashed rgba(255,255,255,0.3)',
      minHeight: { xs: 220, sm: 300 },
      background:
        'radial-gradient(circle at 20% 20%, rgba(255,193,7,0.25), rgba(0,0,0,0.8))',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'text.secondary',
      fontWeight: 600,
      letterSpacing: 2,
      textTransform: 'uppercase',
    }}
  >
    Карта
  </Box>
)

export default MapPlaceholder
