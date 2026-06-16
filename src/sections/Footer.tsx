import { Box, Container, IconButton, Stack, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram'
import PhoneIcon from '@mui/icons-material/Phone'
import { siteContact } from '../data/site'

const Footer = () => (
  <Box component="footer" py={5} borderTop="1px solid rgba(255,255,255,0.08)">
    <Container maxWidth="lg">
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
      >
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Bastion BJJ. Бразильское джиу-джитсу в Бендерах и
          Тирасполе.
        </Typography>
        <Stack direction="row" spacing={1}>
          <IconButton
            color="primary"
            component="a"
            href={siteContact.phoneHref}
            aria-label="Позвонить"
          >
            <PhoneIcon />
          </IconButton>
          <IconButton
            color="primary"
            component="a"
            href={siteContact.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Container>
  </Box>
)

export default Footer
