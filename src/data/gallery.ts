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
    description: 'Реальные фото старой версии сайта показывают живую группу, а не абстрактный шаблон.',
  },
  {
    src: assetUrl('old-site/about/3.jpg'),
    title: 'Детские группы',
    description: 'Формат подходит детям и подросткам, занятия выстроены по возрасту.',
  },
  {
    src: assetUrl('old-site/about/4.jpg'),
    title: 'Соревнования',
    description: 'У детей есть соревновательная практика и понятная спортивная среда.',
  },
  {
    src: assetUrl('old-site/about/5.jpg'),
    title: 'БЖЖ в кимоно',
    description: 'Контроль, позиции, работа из гарда и безопасная техника в партере.',
  },
  {
    src: assetUrl('old-site/about/6.jpg'),
    title: 'Грэпплинг',
    description: 'Борьба без кимоно развивает контроль корпуса, силу и спокойствие под давлением.',
  },
]
