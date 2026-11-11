import MDXComponents from '@theme-original/MDXComponents';
import DocCardList from '@theme/DocCardList';
import {Figure, Gallery} from '@site/src/components/Figure';
import {Status} from '@site/src/components/Status';
import {ImageCredit} from '@site/src/components/ImageCredit';
import {Steps} from '@site/src/components/Steps';
import {Hero, FeatureCards} from '@site/src/components/Hero';

// 全ページの MDX で import なしに使える部品
export default {
  ...MDXComponents,
  DocCardList,
  Figure,
  Gallery,
  Status,
  ImageCredit,
  Steps,
  Hero,
  FeatureCards,
};
