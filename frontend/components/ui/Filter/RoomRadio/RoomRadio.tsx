import { FC } from "react";
import styles from "./RoomRadio.module.css";
import { IRoom } from "@/types/interfaces";

const RoomRadio: FC<{ rooms: IRoom[] }> = ({ rooms }) => {
  return (
    <fieldset className={styles.roomList}>
      <legend className={styles.legend}>Укажите количество комнат</legend>
      {rooms
        .sort((a: IRoom, b: IRoom) => a.number - b.number)
        .map((item: IRoom) => (
          <p key={"rooms_" + item.number}>
            <input
              className={styles.radio}
              type="radio"
              name="roomType"
              value={item.number}
              id={String("rooms_" + item.number)}
              defaultChecked={item.is_active}
            />
            <label
              htmlFor={String("rooms_" + item.number)}
              className={styles.room}>
              {item.number === 0 ? "Ст" : item.number + "к"}
            </label>
          </p>
        ))}
    </fieldset>
  );
};

export default RoomRadio;
