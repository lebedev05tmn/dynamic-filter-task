'use client';
import { FC, useEffect, useState } from 'react';
import FlatList from '@/components/ui/FlatList/FlatList';
import { FLATS_COUNT } from '@/config';
import {
  IFilter,
  IFlat,
  IFlatData,
  IMeta,
  ISearchParams,
} from '@/types/interfaces';
import { fetchData } from '@/services/api';
import FlatCard from '@/components/ui/FlatCard/FlatCard';
import styles from './FlatWithData.module.css';
import Filter from '../Filter/Filter';
import { getSearch } from '@/utils';

const FlatListWithData: FC<{
  searchParams: ISearchParams;
  filters: { data: IFilter };
}> = ({ searchParams, filters }) => {
  const [data, setData] = useState<IFlat[]>([]);
  const [meta, setMeta] = useState<IMeta>();
  const [page, setPage] = useState<number>(1);

  const fetchFunc = async (page: number, filter?: boolean): Promise<void> => {
    const fetch: IFlatData = await fetchData(page, getSearch(searchParams));
    if (filter) {
      setData(fetch.data);
      setPage(1);
    } else {
      setData([...data, ...fetch.data]);
    }
    setMeta(fetch.meta);
  };

  useEffect(() => {
    fetchFunc(page);
  }, [page]);

  useEffect(() => {
    fetchFunc(1, true);
  }, [searchParams]);

  if (!data.length || !meta) {
    return 'Loading...';
  }
  return (
    <>
      <Filter
        total={meta.total}
        filters={filters}
        searchParams={searchParams}
      />
      <FlatList>
        {data.length &&
          data.map((item: IFlat) => (
            <li key={item.id}>
              <FlatCard data={item} />
            </li>
          ))}
      </FlatList>
      {page !== meta.to && (
        <button className={styles.Button} onClick={() => setPage(page + 1)}>
          Показать еще {FLATS_COUNT} из {meta.total - FLATS_COUNT * page}
        </button>
      )}
    </>
  );
};

export default FlatListWithData;
