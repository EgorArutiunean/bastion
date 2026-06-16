import { Box, Stack, Typography } from '@mui/material'
import { assetUrl } from '../utils/assets'
import { clubLocations, formatLocation } from '../data/site'

const beltsBackground = assetUrl('old-site/belts-bg.png')

const MapPlaceholder = () => (
  <Box
    sx={{
      borderRadius: 2,
      border: '1px solid rgba(255,255,255,0.16)',
      minHeight: { xs: 260, sm: 380 },
      backgroundImage:
        `linear-gradient(rgba(5,5,5,0.5), rgba(5,5,5,0.8)), url(${beltsBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      p: 3,
      textAlign: 'center',
    }}
  >
    <Stack spacing={1} maxWidth={460}>
      <Typography variant="h5">Бендеры и Тирасполь</Typography>
      {clubLocations.map(location => (
        <Typography color="text.secondary" key={location.city}>
          {location.city}: {formatLocation(location)}
        </Typography>
      ))}
    </Stack>
  </Box>
)

export default MapPlaceholder
