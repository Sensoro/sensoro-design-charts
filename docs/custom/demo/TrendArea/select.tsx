import { TrendArea } from '@sensoro-design/chart';

function Example() {
  return (
    <TrendArea
      height={400}
      title={{
        text: '选择模式',
      }}
      mode="select"
      selectTime={[3, 19]}
      hideReference={false}
      referenceSerie={{
        data: {
          values: [
            { date: 0, value: 9855 },
            { date: 1, value: 7114 },
            { date: 2, value: 5687 },
            { date: 3, value: 5170 },
            { date: 4, value: 4188 },
            { date: 5, value: 4376 },
            { date: 6, value: 17151 },
            { date: 7, value: 84498 },
            { date: 8, value: 104363 },
            { date: 9, value: 106162 },
            { date: 10, value: 139124 },
            { date: 11, value: 147276 },
            { date: 12, value: 176278 },
            { date: 13, value: 179344 },
            { date: 14, value: 150707 },
            { date: 15, value: 152922 },
            { date: 16, value: 163838 },
            { date: 17, value: 140549 },
            { date: 18, value: 115520 },
            { date: 19, value: 125382 },
            { date: 20, value: 84962 },
            { date: 21, value: 49611 },
            { date: 22, value: 22338 },
            { date: 23, value: 12522 },
          ],
        },
      }}
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
            valueFormatter: '{value:,.0f}',
          },
        },
      }}
    />
  );
};

export default Example;
