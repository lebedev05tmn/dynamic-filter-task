export interface IFlat {
  id: number;
  project_title: string;
  rooms: number;
  studio: boolean;
  price: string;
  old_price: string;
  square: string;
  release_dates: string;
  floor: string;
  image: string;
  isLiked: boolean;
}

export interface ILinks {
  first: string;
  last: string;
  prev: string | null;
  next: string | null;
}

export interface IMetaLinks {
  url: null | string;
  label: string;
  active: boolean;
}

export interface IMeta {
  current_page: number;
  from: number;
  last_page: number;
  links: IMetaLinks[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export interface IFlatData {
  data: IFlat[];
  links: ILinks;
  meta: IMeta;
}

export interface IProject {
  id: number;
  title: string;
  is_active: boolean;
  disabled: boolean;
}

export interface IRoom {
  number: number;
  is_active: boolean;
  disabled: boolean;
}

export interface IRange {
  min_range: number;
  max_range: number;
  min: number;
  max: number;
}

export interface IFilter {
  projects: IProject[];
  rooms: IRoom[];
  price: IRange;
  square: IRange;
}
