import { useState } from 'react'
import { Box, Stack, TextField, Button, Snackbar, Alert } from '@mui/material'

interface FormValues {
  name: string
  phone: string
  message: string
}

type FormErrors = Partial<Record<keyof FormValues, string>>

const initialValues: FormValues = {
  name: '',
  phone: '',
  message: '',
}

const ContactForm = () => {
  const [values, setValues] = useState<FormValues>(initialValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [sent, setSent] = useState(false)

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {}
    if (!values.name.trim()) {
      nextErrors.name = 'Введите имя'
    }
    if (!values.phone.trim()) {
      nextErrors.phone = 'Укажите телефон'
    } else if (values.phone.replace(/\D/g, '').length < 10) {
      nextErrors.phone = 'Номер выглядит некорректно'
    }
    if (!values.message.trim()) {
      nextErrors.message = 'Напишите пару слов о цели'
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
            label="Телефон"
            value={values.phone}
            onChange={handleChange('phone')}
            required
            error={Boolean(errors.phone)}
            helperText={errors.phone}
            fullWidth
          />
          <TextField
            label="Сообщение"
            multiline
            minRows={3}
            value={values.message}
            onChange={handleChange('message')}
            required
            error={Boolean(errors.message)}
            helperText={errors.message}
            fullWidth
          />
          <Button type="submit" size="large" variant="contained">
            Отправить заявку
          </Button>
        </Stack>
      </Box>
      <Snackbar
        open={sent}
        autoHideDuration={4000}
        onClose={() => setSent(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" variant="filled" onClose={() => setSent(false)}>
          Заявка отправлена
        </Alert>
      </Snackbar>
    </>
  )
}

export default ContactForm
