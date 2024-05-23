import { NextPage } from 'next';
import { fetchData, fetchFiltersData } from '@/services/api';
import FlatListWithData from '@/components/core/FlatListWithData/FlatListWithData';
import { IFilter, IFlatData, ISearchParams } from '@/types/interfaces';
import Filter from '@/components/core/Filter/Filter';
import styles from './page.module.css';

const HomePage: NextPage<{ searchParams: ISearchParams }> = async ({
  searchParams,
}) => {
  const filters: { data: IFilter } = await fetchFiltersData();
  return (
    <main className={styles.main}>
      <FlatListWithData searchParams={searchParams} filters={filters} />
    </main>
  );
};

export default HomePage;
