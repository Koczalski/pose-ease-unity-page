import React from 'react';
import clsx from 'clsx';
import styles from './components.module.css';

/** 機能の状態の札。kind は available（使えます）か planned（予定）。 */
export function Status({kind = 'available', children}) {
  return (
    <span className={clsx(styles.status, kind === 'planned' ? styles.statusPlanned : styles.statusAvailable)}>
      {children}
    </span>
  );
}
