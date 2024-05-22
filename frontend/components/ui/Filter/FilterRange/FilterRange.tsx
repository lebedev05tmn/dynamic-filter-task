import { Dispatch, FC } from "react";
import Slider from "rc-slider";
import styles from "./FilterRange.module.css";

const FilterRange: FC<{
  legend: string;
  value: number[];
  setValue: Dispatch<number[]>;
  prefix?: string;
  key: number;
  min: number;
  max: number;
  step: number;
}> = ({ legend, value, setValue, prefix, key, min, max, step }) => {
  return (
    <fieldset>
      <legend className={styles.legend}>{legend}</legend>
      <div className={styles.input}>
        <p className={styles.field}>
          от{" "}
          {`${value[0].toLocaleString()}${prefix !== undefined ? prefix : ""}`}
        </p>
        <div className={styles.br} />
        <p className={styles.field}>
          до{" "}
          {`${value[1].toLocaleString()}${prefix !== undefined ? prefix : ""}`}
        </p>
        <Slider
          key={key}
          range
          step={step}
          min={min}
          max={max}
          defaultValue={value}
          onChange={(e: number[] | number) => {
            Array.isArray(e) && e.length === 2 && setValue(e);
          }}
          style={{
            width: "90%",
            position: "absolute",
            bottom: -9,
            left: 17,
          }}
          pushable={true}
          trackStyle={{ backgroundColor: "#2495FE", height: 1 }}
          handleStyle={{
            backgroundColor: "#2495FE",
            height: 9,
            width: 9,
            marginTop: -4,
          }}
          railStyle={{
            backgroundColor: "transparent",
            height: 1,
          }}
        />
      </div>
    </fieldset>
  );
};

export default FilterRange;
