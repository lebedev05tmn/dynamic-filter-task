import { NextPage } from "next";
import { fetchData, fetchFiltersData } from "@/services/api";
import FlatCard from "@/components/ui/FlatCard/FlatCard";
import FlatList from "@/components/ui/FlatList/FlatList";
import { IFlat, IFilter, IFlatData } from "@/types/interfaces";
import styles from "./page.module.css";
import Filter from "@/components/core/Filter/Filter";

const HomePage: NextPage = async () => {
  const fetch: IFlatData = await fetchData(1);
  const filters: { data: IFilter } = await fetchFiltersData();
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Планироки</h1>
      <Filter
        options={filters.data.projects}
        total={fetch.meta.total}
        price={[filters.data.price.min, filters.data.price.max]}
        square={[filters.data.square.min, filters.data.square.max]}
        rooms={filters.data.rooms}
      />
      <FlatList>
        {fetch.data.length > 0 &&
          fetch.data.map((item: IFlat) => (
            <li key={item.id}>
              <FlatCard data={item} />
            </li>
          ))}
      </FlatList>
    </main>
  );
};

export default HomePage;
