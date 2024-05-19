import { FilterRoomTypes } from "@/config";
import styles from "./Filter.module.css";

const Filter = () => {
  return (
    <form className={styles.form}>
      <fieldset className="">
        <label className={styles.label}>Проект</label>
        <select className={styles.select}>
          <option>Все</option>
        </select>
      </fieldset>
      <fieldset>
        {Object.values(FilterRoomTypes).map((roomType: string) => (
          <p key={roomType}>
            <label className={styles.label}>{roomType}</label>
            <input type="radio" name="roomType" value={roomType} />
          </p>
        ))}
      </fieldset>
    </form>
  );
};

export default Filter;
