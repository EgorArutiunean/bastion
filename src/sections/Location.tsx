import { Box, Container, Typography, Button, Stack } from '@mui/material'
import Grid from '@mui/material/GridLegacy'
import SectionTitle from '../components/SectionTitle'
import MapPlaceholder from '../components/MapPlaceholder'

const Location = () => (
  <Box component="section" id="location" py={{ xs: 8, md: 12 }}>
    <Container maxWidth="lg">
      <SectionTitle
        title="Адрес"
        subtitle="г. Москва, Берсеневская набережная, 14с3. 3 минуты пешком от м. Кропоткинская."
      />
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={5}>
          <Stack spacing={2}>
            <Typography>
              Мы находимся в пространстве «Бастион». Вход со стороны набережной, ресепшен на 2 этаже.
              Есть парковка после 21:00 и велопарковка.
            </Typography>
            <Typography color="text.secondary">
              Звонок по охране — 045. Сообщите, что идёте в зал BJJ.
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              component="a"
              href="https://maps.example.com"
              target="_blank"
              rel="noreferrer"
              sx={{ alignSelf: { xs: 'stretch', md: 'flex-start' } }}
            >
              Открыть в картах
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
