import { FC } from "react";
import image from "@/public/reset.svg";
import styles from "./Info.module.css";

const Info: FC<{ handleReset: () => void; rooms: number }> = ({
  handleReset,
  rooms,
}) => {
  return (
    <fieldset className={styles.info}>
      <p>Найдено квартир: {rooms}</p>
      <button type="reset" onClick={handleReset} className={styles.reset}>
        <img src={image.src} />
        Очистить всё
      </button>
    </fieldset>
  );
};

export default Info;
