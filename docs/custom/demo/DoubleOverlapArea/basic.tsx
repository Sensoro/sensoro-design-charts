import type { DoubleOverlapAreaProps } from '@sensoro-design/chart';
import { DoubleOverlapArea } from '@sensoro-design/chart';

function Example() {
  const spec: DoubleOverlapAreaProps = {
    title: {
      text: '基本示例',
    },
    height: 400,
    data: [
      { values: [{ date: 0, value: 11635 }, { date: 1, value: 8730 }, { date: 2, value: 6931 }, { date: 3, value: 6850 }, { date: 4, value: 5366 }, { date: 5, value: 4874 }, { date: 6, value: 5347 }, { date: 7, value: 41115 }, { date: 8, value: 81250 }, { date: 9, value: 81437 }] },
      { values: [{ date: 9, value: 81437 }, { date: 10, value: 103941 }, { date: 11, value: 105994 }, { date: 12, value: 116688 }, { date: 13, value: 118847 }, { date: 14, value: 101091 }, { date: 15, value: 107977 }, { date: 16, value: 129702 }, { date: 17, value: 109491 }, { date: 18, value: 106720 }, { date: 19, value: 52051 }, { date: 20, value: 37894 }, { date: 21, value: 29828 }, { date: 22, value: 21099 }] },
      { values: [{ date: 22, value: 21099 }, { date: 23, value: 14170 }] },
    ],
    tooltip: {
      dimension: {
        title: {
          value: (datum) => {
            return `${datum?.date}:00 ~ ${datum?.date + 1}:00`;
          },
        },
        content: {
          key: '出行次数',
          value: (datum) => {
            return datum?.value;
          },
        },
      },
    },
  };

  return (
    <DoubleOverlapArea {...spec} />
  );
};

export default Example;
