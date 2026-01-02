export interface Coach {
  name: string
  belt: string
  experience: string
  bio: string
  avatar: string
}

export const coaches: Coach[] = [
  {
    name: 'Алексей Воронов',
    belt: 'Чёрный пояс IBJJF',
    experience: '15 лет в BJJ, 40+ подиумов IBJJF',
    bio: 'Ведет соревновательную и базовую группы, делает акцент на деталях и безопасности.',
    avatar: 'https://via.placeholder.com/160?text=AV',
  },
  {
    name: 'Марина Соколова',
    belt: 'Коричневый пояс',
    experience: '8 лет практики, призёрка AJP Tour',
    bio: 'Специалист по технике для новичков и женским группам, помогает адаптироваться с нуля.',
    avatar: 'https://via.placeholder.com/160?text=MS',
  },
  {
    name: 'Илья Нестеров',
    belt: 'Фиолетовый пояс',
    experience: '6 лет тренерского опыта',
    bio: 'Отвечает за физподготовку и работу над борьбой в стойке, ведёт подростковую группу.',
    avatar: 'https://via.placeholder.com/160?text=IN',
  },
]
