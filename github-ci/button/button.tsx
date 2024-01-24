import type { ReactNode } from 'react';
import styles from './button.module.css';

export type ButtonProps = {
  children?: ReactNode;
};

export function Button({ children }: ButtonProps) {
  return (
    <button type="button" className={styles.button}>
      {children}
    </button>
  );
}
