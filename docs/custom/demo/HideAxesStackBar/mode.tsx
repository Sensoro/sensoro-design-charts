import type { HideAxesStackBarProps } from '@sensoro-design/chart';
import { HideAxesStackBar } from '@sensoro-design/chart';
import { data1 } from './_data';

function Example() {
  const spec: HideAxesStackBarProps = {
    background: '#161D2A',
    mode: 'day',
    data: data1,
    tooltip: {
      dimension: {
        content: {
          keyTimeFormat: '%Y-%m-%d',
          value: (datum) => {
            return `${datum?.value} 次`;
          },
        },
      },
    },
    height: 150,
    width: 400,
  };

  return (
    <HideAxesStackBar {...spec} />
  );
};

export default Example;
