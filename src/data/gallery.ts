import { assetUrl } from '../utils/assets'

export interface GalleryItem {
  src: string
  title: string
  description: string
}

export const galleryItems: GalleryItem[] = [
  {
    src: assetUrl('old-site/about/1.jpg'),
    title: 'Команда',
    description: 'Bastion BJJ - это команда, где поддерживают новичков и помогают расти через регулярные тренировки.',
  },
  {
    src: assetUrl('old-site/about/3.jpg'),
    title: 'Детские группы',
    description: 'Детские занятия помогают развивать дисциплину, координацию, внимание и уважение к партнеру.',
  },
  {
    src: assetUrl('old-site/about/4.jpg'),
    title: 'Соревнования',
    description: 'Соревновательная практика помогает проверять технику, справляться с волнением и ставить новые цели.',
  },
  {
    src: assetUrl('old-site/about/5.jpg'),
    title: 'БЖЖ в кимоно',
    description: 'В кимоно ученики изучают базовые позиции, контроль, проходы, удержания и безопасные приемы.',
  },
  {
    src: assetUrl('old-site/about/6.jpg'),
    title: 'Грэпплинг',
    description: 'Грэпплинг без кимоно развивает реакцию, контроль корпуса, силу хвата и спокойствие под давлением.',
  },
]
