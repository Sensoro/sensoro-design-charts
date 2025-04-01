import type { WordCloudProps } from '@sensoro-design/chart';
import { WordCloud } from '@sensoro-design/chart';
import data from './data-wordcloud.json';

function Example() {
  const spec: WordCloudProps = {
    height: 400,
    nameField: 'challenge_name',
    valueField: 'sum_count',
    seriesField: 'challenge_name',
    data: {
      name: 'baseData',
      values: data,
    },
  };

  return (
    <WordCloud {...spec} />
  );
}

export default Example;
