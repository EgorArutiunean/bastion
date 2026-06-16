import { Box, Container, Card, CardContent, Avatar, Typography, Chip } from '@mui/material'
import Grid from '@mui/material/GridLegacy'
import SectionTitle from '../components/SectionTitle'
import { coaches } from '../data/coaches'

const Coaches = () => (
  <Box component="section" id="coaches" py={{ xs: 8, md: 12 }}>
    <Container maxWidth="lg">
      <SectionTitle
        title="Подход"
        subtitle="Тренировки строятся вокруг понятной базы, дисциплины и безопасного прогресса для новичков, детей и взрослых."
      />
      <Grid container spacing={3}>
        {coaches.map(coach => (
          <Grid item xs={12} md={4} key={coach.name}>
            <Card variant="outlined" sx={{ height: '100%' }}>
              <CardContent>
                <Avatar
                  src={coach.avatar}
                  alt={coach.name}
                  sx={{ width: 80, height: 80, mb: 2, bgcolor: 'primary.main', color: 'black' }}
                />
                <Typography variant="h6">{coach.name}</Typography>
                <Chip label={coach.belt} color="primary" size="small" sx={{ mt: 1, mb: 2 }} />
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {coach.experience}
                </Typography>
                <Typography variant="body2">{coach.bio}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
)

export default Coaches
