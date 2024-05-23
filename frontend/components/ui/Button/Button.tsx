import { FC, PropsWithChildren } from 'react';
import styles from './Button.module.css';

const Button: FC<PropsWithChildren<{ onClick: () => void }>> = ({
  children,
  onClick,
}) => (
  <button className={styles.Button} onClick={onClick}>
    {children}
  </button>
);

export default Button;
