import { Box, Card, CardContent, CardMedia, Container, Typography } from '@mui/material'
import Grid from '@mui/material/GridLegacy'
import SectionTitle from '../components/SectionTitle'
import { galleryItems } from '../data/gallery'

const Gallery = () => (
  <Box component="section" id="gallery" py={{ xs: 8, md: 12 }}>
    <Container maxWidth="lg">
      <SectionTitle
        title="Фото клуба"
        subtitle="Реальные фотографии из старой версии сайта: команда, детские группы, соревнования и тренировки."
      />
      <Grid container spacing={3}>
        {galleryItems.map(item => (
          <Grid item xs={12} sm={6} md={4} key={item.src}>
            <Card variant="outlined" sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                image={item.src}
                alt={item.title}
                sx={{ aspectRatio: '1 / 1', objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
)

export default Gallery
