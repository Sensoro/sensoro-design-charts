import { TrendArea } from '@sensoro-design/chart';
import { data } from './_data';

function Example() {
  return (
    <TrendArea
      height={400}
      selectTime={[3, 19]}
      showReference
      data={data}
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
