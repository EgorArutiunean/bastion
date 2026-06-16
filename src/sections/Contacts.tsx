import { Box, Button, Container, Paper, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/GridLegacy'
import InstagramIcon from '@mui/icons-material/Instagram'
import ContactForm from '../components/ContactForm'
import SectionTitle from '../components/SectionTitle'
import { siteContact } from '../data/site'

const Contacts = () => (
  <Box component="section" id="contacts" py={{ xs: 8, md: 12 }}>
    <Container maxWidth="lg">
      <SectionTitle
        title="Контакты"
        subtitle="Запишитесь на пробную тренировку или уточните подходящую группу по телефону и в соцсетях."
      />
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: { xs: 3, md: 4 } }} elevation={0}>
            <ContactForm />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack spacing={3}>
            <Box>
              <Typography variant="h6" gutterBottom>
                Телефон
              </Typography>
              <Typography
                variant="h4"
                component="a"
                href={siteContact.phoneHref}
                color="primary.main"
                sx={{ textDecoration: 'none', fontWeight: 800 }}
              >
                {siteContact.phoneDisplay}
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" gutterBottom>
                Соцсети
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<InstagramIcon />}
                  href={siteContact.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  href={siteContact.vk}
                  target="_blank"
                  rel="noreferrer"
                >
                  VK
                </Button>
              </Stack>
            </Box>
            <Box>
              <Typography variant="h6" gutterBottom>
                Первая тренировка
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Возьмите удобную спортивную одежду, воду и сменную обувь. Первое занятие
                бесплатно.
              </Typography>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  </Box>
)

export default Contacts
