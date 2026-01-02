import { CssBaseline, ThemeProvider, Box } from '@mui/material'
import theme from './theme'
import Navigation from './components/Navigation'
import type { NavLink } from './components/Navigation'
import Hero from './sections/Hero'
import About from './sections/About'
import Coaches from './sections/Coaches'
import Schedule from './sections/Schedule'
import Pricing from './sections/Pricing'
import Location from './sections/Location'
import FAQ from './sections/FAQ'
import Contacts from './sections/Contacts'
import Footer from './sections/Footer'

const navLinks: NavLink[] = [
  { label: 'О нас', href: '#about' },
  { label: 'Тренеры', href: '#coaches' },
  { label: 'Расписание', href: '#schedule' },
  { label: 'Стоимость', href: '#pricing' },
  { label: 'Адрес', href: '#location' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Контакты', href: '#contacts' },
]

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Navigation links={navLinks} />
    <Box component="main">
      <Hero />
      <About />
      <Coaches />
      <Schedule />
      <Pricing />
      <Location />
      <FAQ />
      <Contacts />
    </Box>
    <Footer />
  </ThemeProvider>
)

export default App
