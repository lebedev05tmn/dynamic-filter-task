"use client";
import { FC, useState, useCallback } from "react";
import { IProject, IRoom } from "@/types/interfaces";
import ProjectOption from "@/components/ui/Filter/ProjectOption/ProjectOption";
import RoomRadio from "@/components/ui/Filter/RoomRadio/RoomRadio";
import FilterRange from "@/components/ui/Filter/FilterRange/FilterRange";
import Info from "@/components/ui/Filter/Info/Info";
import styles from "./Filter.module.css";
import "rc-slider/assets/index.css";

const Filter: FC<{
  options: IProject[];
  total: number;
  price: number[];
  square: number[];
  rooms: IRoom[];
}> = ({ options, total, price, square, rooms }) => {
  const [value, setValue] = useState<number[]>(price);
  const [roomValue, setRoomValue] = useState<number[]>(square);
  const [sliderFstKey, setSliderFstKey] = useState<number>(0);
  const [sliderScdKey, setSliderScdKey] = useState<number>(10);

  const handleReset = useCallback(() => {
    setValue(price);
    setRoomValue(square);
    setSliderFstKey((prev: number): number => prev + 1);
    setSliderScdKey((prev: number): number => prev + 1);
  }, [price, square]);

  return (
    <form className={styles.form}>
      <ProjectOption options={options} />
      <RoomRadio rooms={rooms} />
      <FilterRange
        legend="Cтоимость"
        value={value}
        setValue={setValue}
        min={price[0]}
        max={price[1]}
        step={100000}
        prefix=" ₽"
        key={sliderFstKey}
      />
      <FilterRange
        legend="Задайте площадь, м²"
        value={roomValue}
        setValue={setRoomValue}
        min={square[0]}
        max={square[1]}
        step={0.1}
        key={sliderScdKey}
      />
      <Info handleReset={handleReset} rooms={total} />
    </form>
  );
};

export default Filter;
