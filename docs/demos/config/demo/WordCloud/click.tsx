import type { WordCloudProps } from '@sensoro-design/chart';
import { WordCloud } from '@sensoro-design/chart';
import list from './wordcloud.json';

function Example() {
  const spec: WordCloudProps = {
    height: 225,
    width: 464,
    padding: 0,
    color: ['#AEC0DE', '#5C8BE6', '#3EB390', '#D96762'],
    nameField: 'name',
    valueField: 'value',
    seriesField: 'name',
    fontSizeRange: [10, 20],
    data: {
      values: list,
    },
    tooltip: {
      visible: false,
    },
    word: {
      style: {
        cursor: 'pointer',
      },
      state: {
        hover: {
          fill: '#AEC0DE',
          fontWeight: 600,
        },
      },
    },
  };

  const handleClick: WordCloudProps['onClick'] = (e) => {
    // eslint-disable-next-line no-console
    console.log(e);
  };

  return (
    <WordCloud {...spec} onClick={handleClick} />
  );
}

export default Example;
