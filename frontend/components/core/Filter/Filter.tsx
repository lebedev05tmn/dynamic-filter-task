'use client';
import { FC, useState, useCallback, useEffect } from 'react';
import { IFilter, IProject, IRoom, ISearchParams } from '@/types/interfaces';
import Image from 'next/image';
import image from '@/public/filter.svg';
import ProjectOption from '@/components/ui/Filter/ProjectOption/ProjectOption';
import RoomRadio from '@/components/ui/Filter/RoomRadio/RoomRadio';
import FilterRange from '@/components/ui/Filter/FilterRange/FilterRange';
import Info from '@/components/ui/Filter/Info/Info';
import Button from '@/components/ui/Button/Button';
import { fetchFiltersData } from '@/services/api';
import styles from './Filter.module.css';
import 'rc-slider/assets/index.css';
import { PARAMS } from '@/config';

const Filter: FC<{
  total: number;
  filters: { data: IFilter };
  searchParams: ISearchParams;
}> = ({ total, filters, searchParams }) => {
  if (!filters) return 'Not Found Filter';

  const options: IProject[] = filters.data.projects;
  const price: number[] = [filters.data.price.min, filters.data.price.max];
  const square: number[] = [filters.data.square.min, filters.data.square.max];
  const rooms: IRoom[] = filters.data.rooms;

  const [value, setValue] = useState<number[]>(
    searchParams['f[price][max]'] && searchParams['f[price][min]']
      ? [searchParams['f[price][max]'], searchParams['f[price][min]']]
      : price
  );
  const [roomValue, setRoomValue] = useState<number[]>(
    searchParams['f[square][max]'] && searchParams['f[square][min]']
      ? [searchParams['f[square][max]'], searchParams['f[square][min]']]
      : square
  );
  const [sliderFstKey, setSliderFstKey] = useState<number>(0);
  const [sliderScdKey, setSliderScdKey] = useState<number>(10);
  const [isHiddenFilter, setIsHiddenFilter] = useState<boolean>(false);

  const handleReset = useCallback(() => {
    setValue(price);
    setRoomValue(square);
    setSliderFstKey((prev: number): number => prev + 1);
    setSliderScdKey((prev: number): number => prev + 1);
  }, [price, square]);

  return (
    <div className="w-full">
      <h1 className={styles.title}>Планироки</h1>
      <Button onClick={() => setIsHiddenFilter(!isHiddenFilter)}>
        <p className={styles.Button}>
          Фильтр
          <Image src={image} width={10.67} height={12} alt="filter" />
        </p>
      </Button>
      <form
        className={`${styles.form} ${isHiddenFilter ? styles.formHidden : ''}`}
      >
        <ProjectOption options={options} searchParams={searchParams} />
        <RoomRadio rooms={rooms} searchParams={searchParams} />
        <FilterRange
          legend="Cтоимость"
          value={value}
          setValue={setValue}
          min={price[0]}
          max={price[1]}
          step={100000}
          prefix=" ₽"
          key={sliderFstKey}
          searchParams={searchParams}
          params={[PARAMS.PRICE_MIN, PARAMS.PRICE_MAX]}
        />
        <FilterRange
          legend="Задайте площадь, м²"
          value={roomValue}
          setValue={setRoomValue}
          min={square[0]}
          max={square[1]}
          step={0.1}
          key={sliderScdKey}
          searchParams={searchParams}
          params={[PARAMS.SQUARE_MIN, PARAMS.SQUARE_MAX]}
        />
        <Info handleReset={handleReset} rooms={total} />
      </form>
      {!isHiddenFilter && (
        <Button onClick={() => setIsHiddenFilter(!isHiddenFilter)}>
          Смотреть квартиры
        </Button>
      )}
    </div>
  );
};

export default Filter;
