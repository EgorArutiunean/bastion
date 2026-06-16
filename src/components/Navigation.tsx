import { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Container,
  Box,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { assetUrl } from '../utils/assets'

const logoSrc = assetUrl('old-site/navbar-logo.svg')

export interface NavLink {
  label: string
  href: string
}

interface NavigationProps {
  links: NavLink[]
}

const Navigation = ({ links }: NavigationProps) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <AppBar
        position="sticky"
        color="transparent"
        elevation={0}
        sx={{
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          backgroundColor: 'rgba(5,5,5,0.85)',
          backdropFilter: 'blur(12px)',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: 72 }}>
            <Box
              component="a"
              href="#hero"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1.25,
                mr: 2,
                textDecoration: 'none',
                color: 'primary.main',
              }}
            >
              <Box
                component="img"
                src={logoSrc}
                alt=""
                sx={{
                  display: { xs: 'none', sm: 'block' },
                  width: 142,
                  height: 'auto',
                  maxHeight: 34,
                  objectFit: 'contain',
                }}
              />
              <Typography
                variant="h6"
                component="span"
                sx={{
                  fontWeight: 800,
                  letterSpacing: 1,
                  whiteSpace: 'nowrap',
                }}
              >
                BASTION BJJ
              </Typography>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Stack direction="row" spacing={0.5} sx={{ display: { xs: 'none', md: 'flex' } }}>
              {links.map(link => (
                <Button
                  key={link.href}
                  component="a"
                  href={link.href}
                  color="inherit"
                  size="large"
                >
                  {link.label}
                </Button>
              ))}
            </Stack>
            <IconButton
              color="inherit"
              sx={{ display: { xs: 'inline-flex', md: 'none' } }}
              onClick={() => setOpen(true)}
              aria-label="Открыть меню"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 260 }} role="presentation" onClick={() => setOpen(false)}>
          <List>
            {links.map(link => (
              <ListItem key={link.href} disablePadding>
                <ListItemButton component="a" href={link.href}>
                  <ListItemText primary={link.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  )
}

export default Navigation
