import type { ReactNode } from 'react';
import styles from './card.module.css';

export type CardProps = {
  children?: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  footerButton?: ReactNode;
};

export function Card({ children, footerButton, size = 'md' }: CardProps) {
  const cardClasses = [styles.card, styles[size]];
  return (
    <div className={cardClasses.join(' ')}>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        <div className={styles.footerSlot}></div>
        <div className={styles.buttonSlot}>{footerButton}</div>
      </footer>
    </div>
  );
}
