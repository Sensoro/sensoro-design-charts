import type { WordCloudProps } from '@sensoro-design/chart';
import { WordCloud } from '@sensoro-design/chart';
import React from 'react';

const list = [
  {
    name: '一箭十八星',
    value: 178821,

  },
  {
    name: '八号',
    value: 134284,

  },
  {
    name: '商业航天发射场',
    value: 134011,

  },
  {
    name: '运载火箭',
    value: 107732,

  },
  {
    name: '长征',
    value: 100568,

  },
  {
    name: '工位',
    value: 96773,

  },
  {
    name: '发射',
    value: 82966,

  },
  {
    name: '组网',
    value: 82044,

  },
  {
    name: '星座',
    value: 68990,

  },
  {
    name: '发射场',
    value: 63830,

  },
  {
    name: '一箭',
    value: 60224,

  },
  {
    name: '海南商业航天发射场',
    value: 60043,

  },
  {
    name: '送入',
    value: 58624,

  },
  {
    name: '长征八号',
    value: 46260,

  },
  {
    name: '预定',
    value: 44803,

  },
  {
    name: '千帆星座',
    value: 41492,

  },
  {
    name: '海南',
    value: 33636,

  },
  {
    name: '火箭',
    value: 33597,

  },
  {
    name: '文昌',
    value: '29619',

  },
  {
    name: '航天',
    value: '29130',

  },
  {
    name: '祝贺',
    value: '24952',

  },
  {
    name: '嘉树',
    value: '23718',

  },
  {
    name: '威武',
    value: '20815',

  },
  {
    name: '最强大脑',
    value: '19362',

  },
  {
    name: '首发',
    value: '19228',

  },
  {
    name: '捆绑式',
    value: '18153',

  },
  {
    name: '航天器',
    value: '18007',

  },
  {
    name: '卫星',
    value: '17761',

  },
  {
    name: '导流',
    value: '17692',

  },
  {
    name: '成功',
    value: '16955',

  },
  {
    name: '喷水',
    value: '16484',

  },
  {
    name: '一号发射工位',
    value: '16376',

  },
  {
    name: '航天发射场',
    value: '15644',

  },
  {
    name: '商业航天',
    value: '14997',

  },
  {
    name: '我国',
    value: '14242',

  },
  {
    name: '微博',
    value: '13881',

  },
  {
    name: '答题',
    value: '13650',

  },
  {
    name: '转发',
    value: '13451',

  },
  {
    name: '首飞',
    value: '13180',

  },
  {
    name: '宋征',
    value: '13025',

  },
  {
    name: '观礼',
    value: '12645',

  },
  {
    name: '一箭18星',
    value: '12001',

  },
  {
    name: '具身智能',
    value: '11304',

  },
  {
    name: '央视',
    value: '11093',

  },
  {
    name: 'a6bgcjpb',
    value: '10682',

  },
  {
    name: '火箭发射',
    value: '10570',

  },
  {
    name: '改进型',
    value: '9987',

  },
  {
    name: '一号',
    value: '9915',

  },
  {
    name: '长八火箭',
    value: '9816',

  },
  {
    name: '测发',
    value: '9508',

  },
  {
    name: '商业',
    value: '9378',

  },
  {
    name: '轨道',
    value: '9000',

  },
  {
    name: '升空',
    value: '8977',

  },
  {
    name: '一号工位',
    value: '8714',

  },
  {
    name: '具备双工位发射能力',
    value: '8662',

  },
  {
    name: '星链',
    value: '8594',

  },
  {
    name: '专属工位',
    value: 7872,

  },
  {
    name: '太空',
    value: 7825,

  },
  {
    name: '三垂',
    value: 7801,

  },
  {
    name: '发射工位',
    value: 7734,

  },
  {
    name: '凌晨',
    value: 7701,

  },
  {
    name: '一箭多星',
    value: 7264,

  },
  {
    name: '性价比高',
    value: 7210,

  },
  {
    name: '十八',
    value: 7207,

  },
  {
    name: '发射任务',
    value: 7024,

  },
  {
    name: '双工位',
    value: 6985,

  },
  {
    name: '航天局',
    value: 6786,

  },
  {
    name: '降噪',
    value: 6497,

  },
  {
    name: '组合体',
    value: 6463,

  },
  {
    name: '运载',
    value: 6433,

  },
  {
    name: '人形机器人',
    value: 6412,

  },
  {
    name: 'a6bgcktf',
    value: 6307,

  },
  {
    name: '一臂之力',
    value: 6286,

  },
  {
    name: '时政',
    value: 6226,

  },
  {
    name: '新闻和报纸摘要',
    value: 6167,

  },
  {
    name: 'a6bgp8sk',
    value: 6033,

  },
  {
    name: '回血',
    value: 5994,

  },
  {
    name: '点火',
    value: 5897,

  },
  {
    name: '新质生产力',
    value: 5888,

  },
  {
    name: '垣信卫星',
    value: 5873,

  },
  {
    name: '近地',
    value: 5821,

  },
  {
    name: '频段',
    value: 5821,

  },
  {
    name: '学霸',
    value: 5717,

  },
  {
    name: '脑力',
    value: 5621,

  },
  {
    name: '发展新质生产力',
    value: 5569,

  },
  {
    name: '发射能力',
    value: 5525,

  },
  {
    name: '重生',
    value: 5340,

  },
  {
    name: '液氧',
    value: 5328,

  },
  {
    name: '中国航天科技集团',
    value: 5324,

  },
  {
    name: '长征八号运载火箭',
    value: 5324,

  },
  {
    name: '起飞',
    value: 5267,

  },
  {
    name: '智慧发射场系统',
    value: 5060,
  },
];

function Example() {
  const chartRef = React.useRef(null);

  const spec: WordCloudProps = {
    height: 225,
    width: 464,
    padding: 0,
    nameField: 'name',
    valueField: 'value',
    seriesField: 'name',
    fontSizeRange: [10, 20],
    data: {
      values: list,
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
