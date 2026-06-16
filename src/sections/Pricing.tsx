import { Box, Container, Card, CardContent, Typography, List, ListItem, Paper } from '@mui/material'
import Grid from '@mui/material/GridLegacy'
import SectionTitle from '../components/SectionTitle'
import { familyDiscount, pricingPlans } from '../data/pricing'
import { assetUrl } from '../utils/assets'

const beltsBackground = assetUrl('old-site/belts-bg.png')

const Pricing = () => (
  <Box component="section" id="pricing" py={{ xs: 8, md: 12 }}>
    <Container maxWidth="lg">
      <SectionTitle
        title="Стоимость"
        subtitle="Актуальные цены из старой версии сайта: пробная тренировка бесплатно, детские и взрослые абонементы в рублях ПМР."
      />
      <Grid container spacing={3}>
        {pricingPlans.map(plan => (
          <Grid item xs={12} md={4} key={plan.title}>
            <Card
              variant="outlined"
              sx={{
                height: '100%',
                borderColor: plan.highlight ? 'primary.main' : undefined,
                boxShadow: plan.highlight ? '0 0 30px rgba(255,193,7,0.2)' : 'none',
              }}
            >
              <CardContent>
                <Typography variant="overline" color="text.secondary">
                  {plan.highlight ? 'Детские группы' : 'Вариант'}
                </Typography>
                <Typography variant="h5" gutterBottom>
                  {plan.title}
                </Typography>
                <Typography variant="h4" color="primary.main" gutterBottom>
                  {plan.price}
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={2}>
                  {plan.description}
                </Typography>
                <List dense>
                  {plan.perks.map(perk => (
                    <ListItem key={perk} sx={{ pl: 0 }}>
                      - {perk}
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Paper
        elevation={0}
        sx={{
          mt: 3,
          p: { xs: 3, md: 4 },
          backgroundImage: `url(${beltsBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background: 'rgba(5,5,5,0.72)',
          },
        }}
      >
        <Box sx={{ position: 'relative', zIndex: 1, maxWidth: 760 }}>
          <Typography variant="h5" gutterBottom>
            {familyDiscount.title}
          </Typography>
          <Typography color="text.secondary">{familyDiscount.text}</Typography>
        </Box>
      </Paper>
    </Container>
  </Box>
)

export default Pricing
