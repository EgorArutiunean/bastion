import { Box, Container, Stack, Typography, Button, Chip } from '@mui/material'
import { assetUrl } from '../utils/assets'

const heroImage = assetUrl('old-site/header-bg.jpg')

const Hero = () => (
  <Box
    component="section"
    id="hero"
    sx={{
      position: 'relative',
      minHeight: { xs: 'auto', md: 760 },
      display: 'flex',
      alignItems: 'center',
      py: { xs: 10, md: 14 },
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        inset: 0,
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: { xs: '58% center', md: 'center' },
        opacity: 0.74,
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        inset: 0,
        background:
          'linear-gradient(90deg, rgba(5,5,5,0.98) 0%, rgba(5,5,5,0.82) 42%, rgba(5,5,5,0.32) 100%), linear-gradient(0deg, rgba(5,5,5,0.98) 0%, rgba(5,5,5,0.08) 54%)',
      },
    }}
  >
    <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
      <Stack spacing={3}>
        <Chip
          label="Бендеры · Тирасполь · от 5 до 99 лет"
          color="primary"
          sx={{ alignSelf: 'flex-start', fontWeight: 800 }}
        />
        <Typography variant="h1" component="h1" sx={{ maxWidth: 760 }}>
          Bastion BJJ: бразильское джиу-джитсу для детей и взрослых
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 620, fontSize: { md: 20 } }}>
          Детские группы в Бендерах и Тирасполе, взрослая группа в Тирасполе,
          первая тренировка бесплатно. Техника, дисциплина, здоровье и команда,
          в которую можно прийти с нуля.
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Button size="large" variant="contained" href="#contacts">
            Записаться на пробную
          </Button>
          <Button size="large" variant="outlined" color="secondary" component="a" href="#schedule">
            Группы и расписание
          </Button>
        </Stack>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} pt={2}>
          <Box>
            <Typography variant="h4" component="p" color="primary.main" fontWeight={800}>
              3
            </Typography>
            <Typography variant="body2" color="text.secondary">
              группы по возрасту
            </Typography>
          </Box>
          <Box>
            <Typography variant="h4" component="p" color="primary.main" fontWeight={800}>
              0 р
            </Typography>
            <Typography variant="body2" color="text.secondary">
              первая тренировка
            </Typography>
          </Box>
          <Box>
            <Typography variant="h4" component="p" color="primary.main" fontWeight={800}>
              +373
            </Typography>
            <Typography variant="body2" color="text.secondary">
              запись по телефону
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Container>
  </Box>
)

export default Hero
