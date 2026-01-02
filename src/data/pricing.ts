export interface PricingPlan {
  title: string
  price: string
  description: string
  perks: string[]
  highlight?: boolean
}

export const pricingPlans: PricingPlan[] = [
  {
    title: 'Разовое',
    price: '1 000 ₽',
    description: 'Для гостей города или тех, кто хочет попробовать.',
    perks: ['Любая тренировка в расписании', 'Инструктаж перед занятием', 'Прокат кимоно (+300 ₽)'],
  },
  {
    title: 'Абонемент 8',
    price: '5 500 ₽',
    description: 'Занимайтесь 2 раза в неделю и прогрессируйте стабильно.',
    perks: ['8 посещений в месяц', 'Доступ к вечерним группам', 'Заморозка 1 неделя'],
    highlight: true,
  },
  {
    title: 'Безлимит',
    price: '7 900 ₽',
    description: 'Для тех, кто готов погрузиться в BJJ полностью.',
    perks: ['Неограниченные тренировки', 'Участие в воркшопах', 'Персональный план развития'],
  },
]
