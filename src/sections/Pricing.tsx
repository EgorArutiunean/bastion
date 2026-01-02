import { Box, Container, Card, CardContent, Typography, List, ListItem } from '@mui/material'
import Grid from '@mui/material/GridLegacy'
import SectionTitle from '../components/SectionTitle'
import { pricingPlans } from '../data/pricing'

const Pricing = () => (
  <Box component="section" id="pricing" py={{ xs: 8, md: 12 }}>
    <Container maxWidth="lg">
      <SectionTitle
        title="Стоимость"
        subtitle="Оплачивайте разово или выбирайте абонемент. Заморозка и переносы — внутри личного кабинета."
      />
      <Grid container spacing={3}>
        {pricingPlans.map(plan => (
          <Grid item xs={12} md={4} key={plan.title}>
            <Card
              variant="outlined"
              sx={{
                height: '100%',
                borderColor: plan.highlight ? 'primary.main' : undefined,
                boxShadow: plan.highlight ? '0 0 30px rgba(255,193,7,0.25)' : 'none',
              }}
            >
              <CardContent>
                <Typography variant="overline" color="text.secondary">
                  {plan.highlight ? 'Популярно' : 'Предложение'}
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
                      • {perk}
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
)

export default Pricing
