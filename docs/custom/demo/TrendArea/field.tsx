import { TrendArea } from '@sensoro-design/chart';

function Example() {
  return (
    <TrendArea
      height={400}
      title={{
        text: '自定义 Field',
      }}
      showReference={false}
      mode="select"
      selectTime={[3, 19]}
      xField="hour"
      yField="val"
      data={[
        { hour: 0, val: 5855 },
        { hour: 1, val: 4114 },
        { hour: 2, val: 3687 },
        { hour: 3, val: 3170 },
        { hour: 4, val: 2188 },
        { hour: 5, val: 2376 },
        { hour: 6, val: 9151 },
        { hour: 7, val: 44498 },
        { hour: 8, val: 54363 },
        { hour: 9, val: 56162 },
        { hour: 10, val: 79124 },
        { hour: 11, val: 77276 },
        { hour: 12, val: 96278 },
        { hour: 13, val: 99344 },
        { hour: 14, val: 80707 },
        { hour: 15, val: 82922 },
        { hour: 16, val: 83838 },
        { hour: 17, val: 70549 },
        { hour: 18, val: 65520 },
        { hour: 19, val: 65382 },
        { hour: 20, val: 44962 },
        { hour: 21, val: 29611 },
        { hour: 22, val: 12338 },
        { hour: 23, val: 6522 },
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
