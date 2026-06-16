import {
  Box,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import SectionTitle from '../components/SectionTitle'
import { faqItems } from '../data/faq'

const FAQ = () => (
  <Box component="section" id="faq" py={{ xs: 8, md: 12 }}>
    <Container maxWidth="lg">
      <SectionTitle title="FAQ" subtitle="Ответы на частые вопросы перед первой тренировкой." />
      {faqItems.map(item => (
        <Accordion key={item.question}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1">{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" color="text.secondary">
              {item.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  </Box>
)

export default FAQ
