export interface SessionSlot {
  time: string
  focus: string
  level: 'Новички' | 'Опытные' | 'Смешанная группа'
}

export interface DaySchedule {
  day: string
  sessions: SessionSlot[]
}

export const weeklySchedule: DaySchedule[] = [
  {
    day: 'Понедельник',
    sessions: [
      { time: '07:30 — 09:00', focus: 'Партер + растяжка', level: 'Смешанная группа' },
      { time: '19:00 — 20:30', focus: 'Основы гарда', level: 'Новички' },
      { time: '20:30 — 22:00', focus: 'Спарринги + разбор', level: 'Опытные' },
    ],
  },
  {
    day: 'Вторник',
    sessions: [
      { time: '18:30 — 20:00', focus: 'Борьба в стойке', level: 'Смешанная группа' },
      { time: '20:00 — 21:30', focus: 'Но-ги контроль', level: 'Опытные' },
    ],
  },
  {
    day: 'Среда',
    sessions: [
      { time: '07:30 — 09:00', focus: 'Но-ги баланс + переходы', level: 'Смешанная группа' },
      { time: '19:00 — 20:30', focus: 'Техника из сайд-контроля', level: 'Новички' },
      { time: '20:30 — 22:00', focus: 'Позиционные спарринги', level: 'Опытные' },
    ],
  },
  {
    day: 'Четверг',
    sessions: [
      { time: '18:30 — 20:00', focus: 'Физподготовка и борьба', level: 'Смешанная группа' },
      { time: '20:00 — 21:30', focus: 'Дриблинг + гвард-пассинг', level: 'Опытные' },
    ],
  },
  {
    day: 'Пятница',
    sessions: [
      { time: '19:00 — 20:30', focus: 'Комбо для новичков', level: 'Новички' },
      { time: '20:30 — 22:00', focus: 'Свободные спарринги', level: 'Смешанная группа' },
    ],
  },
  {
    day: 'Суббота',
    sessions: [
      { time: '11:00 — 12:30', focus: 'Техника + спарринги', level: 'Смешанная группа' },
      { time: '12:30 — 13:15', focus: 'Kids/Teens BJJ', level: 'Новички' },
    ],
  },
]
