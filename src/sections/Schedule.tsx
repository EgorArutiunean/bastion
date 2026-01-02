import { Box, Container, Card, CardContent, Typography, Divider, Stack, Chip } from '@mui/material'
import Grid from '@mui/material/GridLegacy'
import SectionTitle from '../components/SectionTitle'
import { weeklySchedule } from '../data/schedule'

const Schedule = () => (
  <Box component="section" id="schedule" py={{ xs: 8, md: 12 }}>
    <Container maxWidth="lg">
      <SectionTitle
        title="Расписание"
        subtitle="Выбирайте удобное время — утренние, вечерние и субботние занятия."
      />
      <Grid container spacing={3}>
        {weeklySchedule.map(day => (
          <Grid item xs={12} md={6} key={day.day}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {day.day}
                </Typography>
                <Stack spacing={2}>
                  {day.sessions.map((session, index) => (
                    <Box key={`${day.day}-${session.time}`}>
                      <Typography variant="subtitle2">{session.time}</Typography>
                      <Typography variant="body2">{session.focus}</Typography>
                      <Chip
                        label={session.level}
                        size="small"
                        color="secondary"
                        sx={{ mt: 0.5 }}
                      />
                      {index !== day.sessions.length - 1 && <Divider sx={{ mt: 1.5 }} />}
                    </Box>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
)

export default Schedule
