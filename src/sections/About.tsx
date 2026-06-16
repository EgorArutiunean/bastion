import { Box, Container } from '@mui/material'
import Grid from '@mui/material/GridLegacy'
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech'
import AutoGraphIcon from '@mui/icons-material/AutoGraph'
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety'
import SectionTitle from '../components/SectionTitle'
import InfoCard from '../components/InfoCard'

const aboutItems = [
  {
    title: 'Дети и взрослые',
    description:
      'В старых материалах клуб позиционировался как место для занятий от 5 до 99 лет: детские, подростковые и взрослые группы.',
    icon: <AutoGraphIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />,
  },
  {
    title: 'База Brazilian Jiu-Jitsu',
    description:
      'Техника, контроль, болевые и удушающие приемы помогают работать не только силой, а через позицию и понимание борьбы.',
    icon: <MilitaryTechIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />,
  },
  {
    title: 'Первая тренировка бесплатно',
    description:
      'Можно прийти на пробное занятие, познакомиться с тренером и группой, затем выбрать подходящее расписание.',
    icon: <HealthAndSafetyIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />,
  },
]

const About = () => (
  <Box component="section" id="about" py={{ xs: 8, md: 12 }}>
    <Container maxWidth="lg">
      <SectionTitle
        title="О секции"
        subtitle="Bastion BJJ - секция бразильского джиу-джитсу в Бендерах и Тирасполе. Мы перенесли в новую версию реальные адреса, расписание, цены, контакты и фотографии из старого сайта."
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
