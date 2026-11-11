import React from 'react';
import styles from './components.module.css';

/** 番号つきの手順。中に Markdown の番号つきリストを書く。 */
export function Steps({children}) {
  return <div className={styles.steps}>{children}</div>;
}
