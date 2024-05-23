import { FC, PropsWithChildren } from 'react';
import styles from './FlatList.module.css';

const FlatList: FC<PropsWithChildren> = ({ children }) => (
  <ul className={styles.list}>{children}</ul>
);

export default FlatList;
