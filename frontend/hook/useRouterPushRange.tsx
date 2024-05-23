import { useRouter } from 'next/navigation';
import { ISearchParams } from '@/types/interfaces';
import { getSearch } from '@/utils';

export const useRouterPushRange = (searchParams: ISearchParams) => {
  const { push } = useRouter();

  const pushEqual = (path: string[], value: number[]) => {
    if (!(path[0] in searchParams && path[1] in searchParams)) {
      searchParams
        ? push(
            '?' +
              getSearch({
                ...searchParams,
                [path[0]]: value[0],
                [path[1]]: value[1],
              })
          )
        : push('?' + path[0] + '=' + value[0] + '&' + path[1] + '=' + value[1]);
    } else {
      push(
        '?' +
          getSearch({
            ...searchParams,
            [path[0]]: value[0],
            [path[1]]: value[1],
          })
      );
    }
  };

  return pushEqual;
};
