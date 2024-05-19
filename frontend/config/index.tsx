// Конфиг для работы с API

export const API_URL = process.env.API_URL;
export const FILTERS_API_CONFIG = process.env.FILTERS_API_CONFIG;
export const FLATS_API_CONFIG = process.env.FLATS_API_CONFIG;

// Конфиг адаптива для списка квартир

export const DESKTOP_FLATS_COUNT = 9;
export const MOBILE_FLATS_COUNT = 4;

// Конфиг SEO для страницы

export const metaText = {
  title: "Тестовое задание Dynamic-Filter: список квартир с фильтрами",
  description:
    "Список квартир с фильтрами по планировкам, цене и типу квартиры",
};

export const FilterRoomTypes = {
  STUDIO: "Ст",
  ONE_ROOM: "1к",
  TWO_ROOM: "2к",
  THREE_ROOM: "3к",
  FOUR_ROOM: "4к",
};
