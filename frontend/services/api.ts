import { IFilter, IFlatData } from "@/types/interfaces";
import {
  API_URL,
  FLATS_API_CONFIG,
  FLATS_COUNT,
  FILTERS_API_CONFIG,
} from "@/config";

export const fetchData = async (page: number): Promise<IFlatData> => {
  const url: string = `${API_URL}${FLATS_API_CONFIG}?per_page=${FLATS_COUNT}&page=${page}`;
  const res = await fetch(url, {
    cache: "force-cache",
    next: { revalidate: 600 },
  });
  const data = await res.json();
  return data;
};

export const fetchFiltersData = async (): Promise<{ data: IFilter }> => {
  const url: string = `${API_URL}${FILTERS_API_CONFIG}`;
  const res = await fetch(url, {
    cache: "force-cache",
    next: { revalidate: 600 },
  });
  const data = await res.json();
  return data;
};
