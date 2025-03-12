import type { DoubleOverlapAreaProps } from '@sensoro-design/chart';
import { DoubleOverlapArea } from '@sensoro-design/chart';

function Example() {
  const spec: DoubleOverlapAreaProps = {
    title: {
      text: '数值较小',
    },
    height: 400,
    data: [
      {
        values: [
          { date: 'Jan', value: 0 },
          { date: 'Feb', value: 0 },
          { date: 'Mar', value: 0 },
          { date: 'Apr', value: 0 },
          { date: 'May', value: 1 },
        ],
      },
      {
        values: [
          { date: 'May', value: 1 },
          { date: 'Jun', value: 1 },
        ],
      },
      {
        values: [
          { date: 'Jun', value: 1 },
          { date: 'Jul', value: 0 },
          { date: 'Aug', value: 0 },
          { date: 'Sept', value: 0 },
        ],
      },
    ],
    xAxes: {
      tick: {
        tickCount: () => {
          return 5;
        },
      },
      label: {
        formatMethod: (text) => {
          return `${text}1`;
        },
      },
    },
    yAxes: {
      tick: {
        tickStep: 1,
      },
      max: 5,
    },
  };

  return (
    <DoubleOverlapArea {...spec} />
  );
};

export default Example;
