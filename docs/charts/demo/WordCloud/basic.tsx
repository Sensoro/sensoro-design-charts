import type { WordCloudProps } from '@sensoro-design/chart';
import { WordCloud } from '@sensoro-design/chart';
import React from 'react';
import data from './data-wordcloud.json';

function Example() {
  const chartRef = React.useRef(null);

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

  const handleClick: WordCloudProps['onClick'] = (e) => {
    // eslint-disable-next-line no-console
    console.log(e);
  };

  return (
    <WordCloud {...spec} ref={chartRef} onClick={handleClick} />
  );
}

export default Example;
