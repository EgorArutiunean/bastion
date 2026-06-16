import type { City } from './site'
import { clubLocations, formatLocation } from './site'
import { assetUrl } from '../utils/assets'

export interface TrainingGroup {
  title: string
  city: City
  address: string
  ages: string
  schedule: string[]
  image: string
}

const benderyLocation = clubLocations.find(location => location.city === 'Бендеры')
const tiraspolLocation = clubLocations.find(location => location.city === 'Тирасполь')

if (!benderyLocation || !tiraspolLocation) {
  throw new Error('Training locations are not configured')
}

export const trainingGroups: TrainingGroup[] = [
  {
    title: 'Детская группа Бендеры',
    city: 'Бендеры',
    address: formatLocation(benderyLocation),
    ages: '5-8 и 8-16 лет',
    schedule: [
      '5-8 лет: понедельник, среда, пятница 16:00-17:30',
      '8-16 лет: понедельник, среда, пятница 17:30-19:00',
    ],
    image: assetUrl('old-site/litben.png'),
  },
  {
    title: 'Детская группа Тирасполь',
    city: 'Тирасполь',
    address: formatLocation(tiraspolLocation),
    ages: '5-8 и 8-14 лет',
    schedule: [
      '5-8 лет: вторник, четверг 16:30-17:30; суббота 15:30-17:00',
      '8-14 лет: вторник, четверг 17:30-19:00; суббота 15:30-17:00',
    ],
    image: assetUrl('old-site/littir.png'),
  },
  {
    title: 'Взрослая группа Тирасполь',
    city: 'Тирасполь',
    address: formatLocation(tiraspolLocation),
    ages: '16-99 лет',
    schedule: [
      'Вторник, четверг 19:20-21:00',
      'Суббота 17:20-19:00',
    ],
    image: assetUrl('old-site/adtir.png'),
  },
]
