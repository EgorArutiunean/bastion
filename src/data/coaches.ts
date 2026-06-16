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
    bio: 'В старых материалах главный акцент был на доступности: заниматься можно детям, подросткам и взрослым с разным уровнем подготовки.',
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
    name: 'Семейный спорт',
    belt: 'Специальные условия',
    experience: 'Скидка для семьи',
    bio: 'Клуб отдельно подчеркивал семейный формат: взрослые прививают детям здоровый образ жизни через совместные занятия.',
    avatar: assetUrl('old-site/about/3.jpg'),
  },
]
