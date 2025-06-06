import { TrendArea } from '@sensoro-design/chart';

function Example() {
  return (
    <TrendArea
      height={400}
      selectTime={[3, 19]}
      showReference
      data={[
        { date: 0, value: 5855 },
        { date: 1, value: 4114 },
        { date: 2, value: 3687 },
        { date: 3, value: 3170 },
        { date: 4, value: 2188 },
        { date: 5, value: 2376 },
        { date: 6, value: 9151 },
        { date: 7, value: 44498 },
        { date: 8, value: 54363 },
        { date: 9, value: 56162 },
        { date: 10, value: 79124 },
        { date: 11, value: 77276 },
        { date: 12, value: 96278 },
        { date: 13, value: 99344 },
        { date: 14, value: 80707 },
        { date: 15, value: 82922 },
        { date: 16, value: 83838 },
        { date: 17, value: 70549 },
        { date: 18, value: 65520 },
        { date: 19, value: 65382 },
        { date: 20, value: 44962 },
        { date: 21, value: 29611 },
        { date: 22, value: 12338 },
        { date: 23, value: 6522 },
      ]}
      tooltip={{
        dimension: {
          content: {
            key: '出行次数',
            value: (datum) => {
              return datum?.value;
            },
          },
        },
      }}
    />
  );
};

export default Example;
