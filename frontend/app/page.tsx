import { NextPage } from "next";
import { fetchData } from "@/services/api";
import FlatCard from "@/components/ui/FlatCard/FlatCard";
import { Flat } from "@/types/interfaces";

const HomePage: NextPage = async () => {
  const fetch: { data: Flat[] } = await fetchData(1);
  return (
    <main className="container overflow-hidden px-5 py-9">
      <ul className=" grid grid-cols-3 gap-20 list-none">
        {fetch.data.length &&
          fetch.data.map((item: Flat) => (
            <FlatCard data={item} key={item.id} />
          ))}
      </ul>
    </main>
  );
};

export default HomePage;
