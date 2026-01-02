import { Box, Container, Typography, Paper } from '@mui/material'
import Grid from '@mui/material/GridLegacy'
import SectionTitle from '../components/SectionTitle'
import ContactForm from '../components/ContactForm'

const Contacts = () => (
  <Box component="section" id="contacts" py={{ xs: 8, md: 12 }}>
    <Container maxWidth="lg">
      <SectionTitle
        title="Контакты"
        subtitle="Заполните форму — перезвоним в течение дня и подскажем лучшее время для визита."
      />
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: { xs: 3, md: 4 } }} elevation={0}>
            <ContactForm />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Телеграм и телефон
          </Typography>
          <Typography variant="body1" color="text.secondary">
            @bastion_bjj / +7 (999) 555-44-33
          </Typography>
          <Typography variant="h6" gutterBottom mt={4}>
            Email
          </Typography>
          <Typography variant="body1" color="text.secondary">
            hello@bastionbjj.ru
          </Typography>
          <Typography variant="h6" gutterBottom mt={4}>
            Часы работы
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Пн–Пт 07:00–22:30, Сб 10:00–15:00
          </Typography>
        </Grid>
      </Grid>
    </Container>
  </Box>
)

export default Contacts
