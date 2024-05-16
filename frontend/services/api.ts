import { Flat } from "@/types/interfaces";

export const fetchData = async (page: number): Promise<{ data: Flat[] }> => {
  const res = await fetch("http://localhost:8083/api/v1/flats?per_page=9", {});
  const data = await res.json();
  return data;
};
