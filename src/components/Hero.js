import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './components.module.css';

/**
 * トップの見出し。actions は [{label, to, primary}]。
 * image は右側に置くスクリーンショット。
 */
export function Hero({title, children, image, imageAlt, actions = []}) {
  const img = useBaseUrl(image);
  return (
    <section className={styles.hero}>
      <div className={styles.heroText}>
        <h1 className={styles.heroTitle}>{title}</h1>
        <div className={styles.heroLead}>{children}</div>
        <div className={styles.heroActions}>
          {actions.map((a) => (
            <Link key={a.to} to={a.to} className={a.primary ? 'button button--primary button--lg' : 'button button--secondary button--lg'}>
              {a.label}
            </Link>
          ))}
        </div>
      </div>
      {image && (
        <div className={styles.heroImage}>
          <img src={img} alt={imageAlt ?? ''} />
        </div>
      )}
    </section>
  );
}

/** 機能の入口のカード。items は [{title, to, image, body, status}]。 */
export function FeatureCards({items}) {
  return (
    <div className={styles.cards}>
      {items.map((it) => (
        <FeatureCard key={it.to} {...it} />
      ))}
    </div>
  );
}

function FeatureCard({title, to, image, body, scale}) {
  const img = useBaseUrl(image);
  return (
    <Link to={to} className={styles.card}>
      {image && <img src={img} alt="" loading="lazy" className={styles.cardImage} />}
      {!image && scale && (
        // 負荷率の色の帯（本体の印と同じ 白→マゼンタ、0〜50%）
        <span className={styles.cardScale} aria-hidden="true">
          <span className={styles.cardScaleBar} />
          <span className={styles.cardScaleLabels}>
            <span>0%</span>
            <span>{scale}</span>
            <span>50%</span>
          </span>
        </span>
      )}
      <span className={styles.cardBody}>
        <span className={styles.cardTitle}>{title}</span>
        <span className={styles.cardText}>{body}</span>
      </span>
    </Link>
  );
}
