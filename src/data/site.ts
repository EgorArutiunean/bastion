export const siteContact = {
  phoneDisplay: '+373 77 898 942',
  phoneHref: 'tel:+37377898942',
  instagram: 'https://www.instagram.com/bastion_bjj/',
  vk: 'https://vk.com/bastion_bjj',
}

export const cities = ['Бендеры', 'Тирасполь'] as const

export type City = (typeof cities)[number]

export interface ClubLocation {
  city: City
  venue: string
  address: string
  maps: {
    google: string
    yandex: string
  }
}

export const clubLocations: ClubLocation[] = [
  {
    city: 'Бендеры',
    venue: 'Спортивный комплекс «Орбита»',
    address: 'ул. Победы, 7/1',
    maps: {
      google: 'https://www.google.com/maps/search/?api=1&query=%D0%91%D0%B5%D0%BD%D0%B4%D0%B5%D1%80%D1%8B%2C%20%D1%83%D0%BB.%20%D0%9F%D0%BE%D0%B1%D0%B5%D0%B4%D1%8B%2C%207%2F1',
      yandex: 'https://yandex.com/maps/?text=%D0%91%D0%B5%D0%BD%D0%B4%D0%B5%D1%80%D1%8B%2C%20%D1%83%D0%BB.%20%D0%9F%D0%BE%D0%B1%D0%B5%D0%B4%D1%8B%2C%207%2F1',
    },
  },
  {
    city: 'Тирасполь',
    venue: 'ТЦ «Тирасполь», 3 этаж',
    address: 'ул. 25 Октября, 110',
    maps: {
      google: 'https://www.google.com/maps/search/?api=1&query=%D0%A2%D0%B8%D1%80%D0%B0%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%2C%20%D1%83%D0%BB.%2025%20%D0%9E%D0%BA%D1%82%D1%8F%D0%B1%D1%80%D1%8F%2C%20110',
      yandex: 'https://yandex.com/maps/?text=%D0%A2%D0%B8%D1%80%D0%B0%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%2C%20%D1%83%D0%BB.%2025%20%D0%9E%D0%BA%D1%82%D1%8F%D0%B1%D1%80%D1%8F%2C%20110',
    },
  },
]

export const formatLocation = (location: ClubLocation) =>
  `${location.venue}, ${location.address}`
