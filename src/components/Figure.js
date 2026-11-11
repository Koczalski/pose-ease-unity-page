import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './components.module.css';

/**
 * 画像と説明を 1 回だけ書くための部品。
 * alt を省くと caption を代替テキストにも使う。画像を押すと原寸で開く。
 */
export function Figure({src, alt, caption, width}) {
  const url = useBaseUrl(src);
  return (
    <figure className={styles.figure}>
      <a href={url} target="_blank" rel="noopener" className={styles.figureLink}>
        <img src={url} alt={alt ?? caption ?? ''} loading="lazy" style={width ? {maxWidth: width} : undefined} />
      </a>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

/** 画像を幅に合わせて 1〜2 列に並べる。 */
export function Gallery({children}) {
  return <div className={styles.gallery}>{children}</div>;
}
