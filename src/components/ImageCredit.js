import React from 'react';
import Admonition from '@theme/Admonition';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const TEXT = {
  ja: {
    title: '画像について',
    body: (
      <>
        画像のアバターは「ナユ 3D モデル」（有坂みと、<a href="https://www.arisakamito.com/">https://www.arisakamito.com/</a>）です。
      </>
    ),
  },
  en: {
    title: 'About the images',
    body: (
      <>
        The avatar in the screenshots is the "Nayu" 3D model by Mito Arisaka (<a href="https://www.arisakamito.com/">https://www.arisakamito.com/</a>).
      </>
    ),
  },
};

/** スクリーンショットのアバターの注記。表示中の言語で出す。 */
export function ImageCredit() {
  const {i18n} = useDocusaurusContext();
  const t = TEXT[i18n.currentLocale] ?? TEXT.ja;
  return (
    <Admonition type="note" title={t.title}>
      <p>{t.body}</p>
    </Admonition>
  );
}
