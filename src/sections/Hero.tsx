import { Box, Container, Stack, Typography, Button, Chip } from '@mui/material'

const Hero = () => (
  <Box
    component="section"
    id="hero"
    sx={{
      position: 'relative',
      py: { xs: 10, md: 16 },
      background:
        'radial-gradient(circle at top, rgba(255,193,7,0.15), transparent 55%)',
    }}
  >
    <Container maxWidth="lg">
      <Stack spacing={3}>
        <Chip
          label="Brazilian Jiu-Jitsu в центре города"
          color="primary"
          sx={{ alignSelf: 'flex-start' }}
        />
        <Typography variant="h1" component="h1">
          Секция BJJ «Бастион»
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 540 }}>
          Поддерживаем тех, кто только выходит на татами, и тех, кто готовится к соревнованиям.
          Умное программирование нагрузок, безопасные спарринги и команда, в которую хочется
          возвращаться.
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Button size="large" variant="contained" href="#contacts">
            Записаться
          </Button>
          <Button
            size="large"
            variant="outlined"
            color="secondary"
            component="a"
            href="https://t.me/bjjclub"
            target="_blank"
            rel="noreferrer"
          >
            Написать в Telegram
          </Button>
        </Stack>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} pt={2}>
          <Box>
            <Typography variant="h4" component="p" color="primary.main" fontWeight={700}>
              120+
            </Typography>
            <Typography variant="body2" color="text.secondary">
              активных учеников
            </Typography>
          </Box>
          <Box>
            <Typography variant="h4" component="p" color="primary.main" fontWeight={700}>
              15
            </Typography>
            <Typography variant="body2" color="text.secondary">
              победителей IBJJF
            </Typography>
          </Box>
          <Box>
            <Typography variant="h4" component="p" color="primary.main" fontWeight={700}>
              365
            </Typography>
            <Typography variant="body2" color="text.secondary">
              дней доступа к татами
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Container>
  </Box>
)

export default Hero
