import { FC } from 'react';
import { useRouter } from 'next/navigation';
import { PARAMS } from '@/config';
import { useRouterPush } from '@/hook/useRouterPush';
import styles from './RoomRadio.module.css';
import { IRoom, ISearchParams } from '@/types/interfaces';

const RoomRadio: FC<{ rooms: IRoom[]; searchParams: ISearchParams }> = ({
  rooms,
  searchParams,
}) => {
  const router = useRouter();
  const pushRouter = useRouterPush(searchParams);
  return (
    <fieldset className={styles.roomList}>
      <legend className={styles.legend}>Укажите количество комнат</legend>
      {rooms
        .sort((a: IRoom, b: IRoom) => a.number - b.number)
        .map((item: IRoom, index: number) => (
          <p key={'rooms_' + item.number}>
            <input
              className={styles.radio}
              type="radio"
              name="roomType"
              value={item.number}
              id={String('rooms_' + item.number)}
              defaultChecked={
                searchParams['f[projects][]'] == index
                  ? searchParams['f[projects][]'] == index
                  : item.is_active
              }
              onChange={(e) => {
                e.target.value !== ''
                  ? pushRouter(PARAMS.ROOMS, e.target.value)
                  : router.push('/');
              }}
            />
            <label
              htmlFor={String('rooms_' + item.number)}
              className={styles.room}
            >
              {item.number === 0 ? 'Ст' : item.number + 'к'}
            </label>
          </p>
        ))}
    </fieldset>
  );
};

export default RoomRadio;
