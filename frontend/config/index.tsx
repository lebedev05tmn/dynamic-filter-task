// Конфиг для работы с API

export const API_URL = process.env.API_URL;
export const FILTERS_API_CONFIG = process.env.FILTERS_API_CONFIG;
export const FLATS_API_CONFIG = process.env.FLATS_API_CONFIG;

// Конфиг адаптива для списка квартир

export const FLATS_COUNT: number = 9;

// Конфиг SEO для страницы

export const metaText = {
  title: 'Тестовое задание Dynamic-Filter: список квартир с фильтрами',
  description:
    'Список квартир с фильтрами по планировкам, цене и типу квартиры',
};

export const PARAMS: { [key: string]: string } = {
  PROJECTS: 'f[projects][]',
  SQUARE_MIN: 'f[square][min]',
  SQUARE_MAX: 'f[square][max]',
  ROOMS: 'f[rooms][]',
  PRICE_MIN: 'f[price][min]',
  PRICE_MAX: 'f[price][max]',
  PAGE: 'page',
};
