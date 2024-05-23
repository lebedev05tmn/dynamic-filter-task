import { ISearchParams } from '@/types/interfaces';

export const convertToRoman = (number: string) => {
  let str: string = '';
  let num: number = parseInt(number);

  if (num < 4) {
    const roman: { [key: string]: number } = {
      I: 1,
    };

    for (let i of Object.keys(roman)) {
      let q: number = Math.floor(num / roman[i]);
      num -= q * roman[i];
      str += i.repeat(q);
    }
  }
  return str;
};

export const getSearch = (searchParams: ISearchParams) =>
  Object.entries(searchParams)
    .reduce((acc: string, [key, value]) => (acc += `${key}=${value}&`), '')
    .slice(0, -1);
