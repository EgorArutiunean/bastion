import { Box, Container, Stack, Typography, IconButton } from '@mui/material'
import TelegramIcon from '@mui/icons-material/Telegram'
import InstagramIcon from '@mui/icons-material/Instagram'

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
          © {new Date().getFullYear()} BASTION BJJ. Все права защищены.
        </Typography>
        <Stack direction="row" spacing={1}>
          <IconButton
            color="primary"
            component="a"
            href="https://t.me/bjjclub"
            target="_blank"
            rel="noreferrer"
            aria-label="Telegram"
          >
            <TelegramIcon />
          </IconButton>
          <IconButton
            color="primary"
            component="a"
            href="https://instagram.com"
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
