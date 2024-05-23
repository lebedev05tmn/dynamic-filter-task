import { FC, PropsWithChildren } from 'react';
import styles from './Button.module.css';

const Button: FC<PropsWithChildren<{ onClick: () => void }>> = ({
  children,
  onClick,
  ...args
}) => (
  <button className={styles.Button} onClick={onClick} {...args}>
    {children}
  </button>
);

export default Button;
