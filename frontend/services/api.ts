import { Flat } from "@/types/interfaces";

export const fetchData = async (page: number): Promise<{ data: Flat[] }> => {
  const res = await fetch(
    "https://dynamic-filter.aerokod.ru/api/v1/flats?per_page=9",
    {}
  );
  const data = await res.json();
  return data;
};
