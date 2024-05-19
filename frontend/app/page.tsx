import { NextPage } from "next";
import { fetchData } from "@/services/api";
import FlatCard from "@/components/ui/FlatCard/FlatCard";
import FlatList from "@/components/ui/FlatList/FlatList";
import { Flat } from "@/types/interfaces";
import styles from "./page.module.css";
import Filter from "@/components/core/Filter/Filter";

const HomePage: NextPage = async () => {
  const fetch: { data: Flat[] } = await fetchData(1);
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Планироки</h1>
      <Filter />
      <FlatList>
        {fetch.data.length &&
          fetch.data.map((item: Flat) => (
            <li key={item.id}>
              <FlatCard data={item} />
            </li>
          ))}
      </FlatList>
    </main>
  );
};

export default HomePage;
