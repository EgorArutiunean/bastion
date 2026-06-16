import { assetUrl } from '../utils/assets'

export interface Coach {
  name: string
  belt: string
  experience: string
  bio: string
  avatar: string
}

export const coaches: Coach[] = [
  {
    name: 'Техника для всех',
    belt: 'BJJ для детей и взрослых',
    experience: 'От 5 до 99 лет',
    bio: 'Тренировки подходят новичкам и продолжающим: нагрузка и задания подбираются по возрасту, уровню подготовки и цели ученика.',
    avatar: assetUrl('old-site/about/4.jpg'),
  },
  {
    name: 'База и дисциплина',
    belt: 'Постепенный прогресс',
    experience: 'Безопасный вход с нуля',
    bio: 'Новичкам важны намерение, регулярность и понятная база: движения, позиции, контроль и работа с партнером.',
    avatar: assetUrl('old-site/about/5.jpg'),
  },
  {
    name: 'Спорт для девушек',
    belt: 'Первый месяц бесплатно',
    experience: 'Старт без стереотипов',
    bio: 'BJJ развивает уверенность, координацию и умение защищать себя. Девушки могут начать с нуля и спокойно войти в тренировочный процесс.',
    avatar: assetUrl('old-site/about/3.jpg'),
  },
]
