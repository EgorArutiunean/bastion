import { Box, Container } from '@mui/material'
import Grid from '@mui/material/GridLegacy'
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech'
import AutoGraphIcon from '@mui/icons-material/AutoGraph'
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety'
import SectionTitle from '../components/SectionTitle'
import InfoCard from '../components/InfoCard'

const aboutItems = [
  {
    title: 'Для новичков',
    description: 'Пошаговые модули, малые группы и поддержка тренера, чтобы комфортно войти в BJJ.',
    icon: <AutoGraphIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />,
  },
  {
    title: 'Для опытных',
    description:
      'Соревновательный лагерь, позиционные задания и аналитика спаррингов для роста рейтинга.',
    icon: <MilitaryTechIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />,
  },
  {
    title: 'Безопасные тренировки',
    description: 'Чёткие правила спаррингов, страховки и обязательная разминка под контролем тренера.',
    icon: <HealthAndSafetyIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />,
  },
]

const About = () => (
  <Box component="section" id="about" py={{ xs: 8, md: 12 }}>
    <Container maxWidth="lg">
      <SectionTitle
        title="О секции"
        subtitle="Зал площадью 220 м², профессиональные татами и душевые. Мы строим комьюнити, где каждому комфортно расти."
      />
      <Grid container spacing={3}>
        {aboutItems.map(item => (
          <Grid item xs={12} md={4} key={item.title}>
            <InfoCard title={item.title} description={item.description} icon={item.icon} />
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
)

export default About
