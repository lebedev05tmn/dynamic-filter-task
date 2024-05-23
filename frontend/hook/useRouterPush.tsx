import { useRouter } from 'next/navigation';
import { ISearchParams } from '@/types/interfaces';
import { getSearch } from '@/utils';

export const useRouterPush = (searchParams: ISearchParams) => {
  const { push } = useRouter();

  const pushEqual = (path: string, value: string) => {
    if (value === '') {
      const newSearch = JSON.parse(JSON.stringify(searchParams));
      delete newSearch[path];
      push('?' + getSearch(newSearch));
    } else if (!(path in searchParams)) {
      !searchParams
        ? push('?' + path + '=' + value)
        : push('?' + getSearch({ ...searchParams, [path]: value }));
    } else {
      push('?' + getSearch({ ...searchParams, [path]: value }));
    }
  };

  return pushEqual;
};
