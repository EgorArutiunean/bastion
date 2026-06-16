import { Box, Button, Card, CardContent, Container, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/GridLegacy'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import SectionTitle from '../components/SectionTitle'
import MapPlaceholder from '../components/MapPlaceholder'
import { clubLocations, formatLocation, siteContact } from '../data/site'

const Location = () => (
  <Box component="section" id="location" py={{ xs: 8, md: 12 }}>
    <Container maxWidth="lg">
      <SectionTitle
        title="Адреса"
        subtitle="Две рабочие площадки из старой версии сайта: спортивный комплекс «Орбита» в Бендерах и ТЦ «Тирасполь»."
      />
      <Grid container spacing={4} alignItems="stretch">
        <Grid item xs={12} md={5}>
          <Stack spacing={2}>
            {clubLocations.map(location => (
              <Card variant="outlined" key={location.city}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {location.city}
                  </Typography>
                  <Typography color="text.secondary">{formatLocation(location)}</Typography>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.25} mt={2}>
                    <Button
                      size="small"
                      variant="outlined"
                      startIcon={<LocationOnIcon />}
                      href={location.maps.google}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Google Maps
                    </Button>
                    <Button
                      size="small"
                      variant="outlined"
                      href={location.maps.yandex}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Yandex Maps
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            ))}
            <Button
              variant="contained"
              color="secondary"
              component="a"
              href={siteContact.phoneHref}
              sx={{ alignSelf: { xs: 'stretch', md: 'flex-start' } }}
            >
              Позвонить и уточнить зал
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={12} md={7}>
          <MapPlaceholder />
        </Grid>
      </Grid>
    </Container>
  </Box>
)

export default Location
