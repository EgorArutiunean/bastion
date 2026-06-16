import { useMemo, useState } from 'react'
import { Alert, Box, Button, MenuItem, Snackbar, Stack, TextField } from '@mui/material'
import { cities } from '../data/site'

interface FormValues {
  name: string
  phone: string
  city: string
  message: string
}

type FormErrors = Partial<Record<keyof FormValues, string>>

const initialValues: FormValues = {
  name: '',
  phone: '',
  city: '',
  message: '',
}

const ContactForm = () => {
  const [values, setValues] = useState<FormValues>(initialValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [sent, setSent] = useState(false)

  const applicationText = useMemo(
    () =>
      [
        'Заявка на пробную тренировку Bastion BJJ',
        `Имя: ${values.name}`,
        `Контакт: ${values.phone}`,
        `Город: ${values.city}`,
        `Комментарий: ${values.message}`,
      ].join('\n'),
    [values],
  )

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {}
    if (!values.name.trim()) {
      nextErrors.name = 'Введите имя'
    }
    if (!values.phone.trim()) {
      nextErrors.phone = 'Укажите телефон или Telegram'
    }
    if (!values.city.trim()) {
      nextErrors.city = 'Выберите город'
    }
    if (!values.message.trim()) {
      nextErrors.message = 'Напишите возраст, опыт или удобные дни'
    }
    return nextErrors
  }

  const handleChange =
    (field: keyof FormValues) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues(current => ({ ...current, [field]: event.target.value }))
    }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) {
      navigator.clipboard?.writeText(applicationText)
      setValues(initialValues)
      setSent(true)
    }
  }

  return (
    <>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <Stack spacing={2.5}>
          <TextField
            label="Имя"
            value={values.name}
            onChange={handleChange('name')}
            required
            error={Boolean(errors.name)}
            helperText={errors.name}
            fullWidth
          />
          <TextField
            label="Телефон или Telegram"
            value={values.phone}
            onChange={handleChange('phone')}
            required
            error={Boolean(errors.phone)}
            helperText={errors.phone}
            fullWidth
          />
          <TextField
            select
            label="Город"
            value={values.city}
            onChange={handleChange('city')}
            required
            error={Boolean(errors.city)}
            helperText={errors.city}
            fullWidth
          >
            {cities.map(city => (
              <MenuItem value={city} key={city}>
                {city}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="Комментарий"
            multiline
            minRows={3}
            value={values.message}
            onChange={handleChange('message')}
            required
            error={Boolean(errors.message)}
            helperText={errors.message}
            placeholder="Возраст, опыт, удобные дни"
            fullWidth
          />
          <Button type="submit" size="large" variant="contained">
            Скопировать заявку
          </Button>
        </Stack>
      </Box>
      <Snackbar
        open={sent}
        autoHideDuration={4500}
        onClose={() => setSent(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" variant="filled" onClose={() => setSent(false)}>
          Заявка скопирована. Отправьте ее по телефону, в Instagram или VK.
        </Alert>
      </Snackbar>
    </>
  )
}

export default ContactForm
