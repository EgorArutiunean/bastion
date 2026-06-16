import { Box, Container, Card, CardContent, Typography, Stack, Chip, Avatar } from '@mui/material'
import Grid from '@mui/material/GridLegacy'
import SectionTitle from '../components/SectionTitle'
import { trainingGroups } from '../data/schedule'

const Schedule = () => (
  <Box component="section" id="schedule" py={{ xs: 8, md: 12 }}>
    <Container maxWidth="lg">
      <SectionTitle
        title="Группы и расписание"
        subtitle="Выберите подходящую группу по городу, возрасту и времени занятий. Для новичков первая тренировка проходит в спокойном вводном формате."
      />
      <Grid container spacing={3}>
        {trainingGroups.map(group => (
          <Grid item xs={12} md={4} key={group.title}>
            <Card variant="outlined" sx={{ height: '100%' }}>
              <CardContent>
                <Stack spacing={2} height="100%">
                  <Avatar
                    src={group.image}
                    alt=""
                    sx={{ width: 88, height: 88, bgcolor: 'background.default' }}
                  />
                  <Box>
                    <Chip label={group.city} size="small" color="primary" sx={{ mb: 1.5 }} />
                    <Typography variant="h5" gutterBottom>
                      {group.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {group.address}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" color="primary.main" gutterBottom>
                      Возраст
                    </Typography>
                    <Typography variant="body2">{group.ages}</Typography>
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" color="primary.main" gutterBottom>
                      Время
                    </Typography>
                    <Stack component="ul" spacing={1} sx={{ pl: 2, m: 0 }}>
                      {group.schedule.map(line => (
                        <Typography component="li" variant="body2" key={line}>
                          {line}
                        </Typography>
                      ))}
                    </Stack>
                  </Box>
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
