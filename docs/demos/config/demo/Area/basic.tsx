import type { AreaProps } from '@sensoro-design/chart';
import { Area, hyphenPointPath } from '@sensoro-design/chart';
import { colorBlue2 } from '@sensoro-design/chart-theme';
import dayjs from 'dayjs';

const list = [
  { time: 1742898300000, count: 22.1 },
  { time: 1742898000000, count: 21.8 },
  { time: 1742897700000, count: 21.9 },
  { time: 1742897400000, count: 22 },
  { time: 1742897100000, count: 22.2 },
  { time: 1742896800000, count: 22.4 },
  { time: 1742896500000, count: 22.6 },
  { time: 1742896200000, count: 22.8 },
  { time: 1742895900000, count: 22.7 },
  { time: 1742895600000, count: 22.8 },
  { time: 1742895300000, count: 23 },
  { time: 1742895000000, count: 23 },
  { time: 1742894700000, count: 23.2 },
  { time: 1742894400000, count: 23.3 },
  { time: 1742894100000, count: 23.1 },
  { time: 1742893800000, count: 22.9 },
  { time: 1742893500000, count: 22.9 },
  { time: 1742893200000, count: 23.2 },
  { time: 1742892900000, count: 23.1 },
  { time: 1742892600000, count: 23.3 },
  { time: 1742892300000, count: 23.1 },
  { time: 1742892000000, count: 22.8 },
  { time: 1742891700000, count: 23.5 },
  { time: 1742891400000, count: 24.3 },
  { time: 1742891100000, count: 24.2 },
  { time: 1742890800000, count: 23.6 },
  { time: 1742890500000, count: 23.2 },
  { time: 1742890200000, count: 23.3 },
  { time: 1742889900000, count: 23.4 },
  { time: 1742889600000, count: 23.6 },
  { time: 1742889300000, count: 23.7 },
  { time: 1742889000000, count: 23.7 },
  { time: 1742888700000, count: 24.2 },
  { time: 1742888400000, count: 23.9 },
  { time: 1742888100000, count: 23.3 },
  { time: 1742887800000, count: 23.3 },
  { time: 1742887500000, count: 23.5 },
  { time: 1742887200000, count: 23.7 },
  { time: 1742886900000, count: 23.4 },
  { time: 1742886600000, count: 23.2 },
  { time: 1742886300000, count: 23.1 },
  {
    time: 1742886000000,
    count: 23.3,
  },
  {
    time: 1742885700000,
    count: 24.4,
  },
  {
    time: 1742885400000,
    count: 23.9,
  },
  {
    time: 1742885100000,
    count: 24.2,
  },
  {
    time: 1742884800000,
    count: 23.6,
  },
  {
    time: 1742884500000,
    count: 22.8,
  },
  {
    time: 1742884200000,
    count: 23.2,
  },
  {
    time: 1742883900000,
    count: 23.3,
  },
  {
    time: 1742883600000,
    count: 22.9,
  },
  {
    time: 1742883300000,
    count: 23,
  },
  {
    time: 1742883000000,
    count: 22.4,
  },
  {
    time: 1742882700000,
    count: 22.7,
  },
  {
    time: 1742882400000,
    count: 21.7,
  },
  {
    time: 1742882100000,
    count: 22.4,
  },
  {
    time: 1742881800000,
    count: 22.8,
  },
  {
    time: 1742881500000,
    count: 22.4,
  },
  {
    time: 1742881200000,
    count: 23,
  },
  {
    time: 1742880900000,
    count: 22.7,
  },
  {
    time: 1742880600000,
    count: 22,
  },
  {
    time: 1742880300000,
    count: 21.2,
  },
  {
    time: 1742880000000,
    count: 20.6,
  },
  {
    time: 1742879700000,
    count: 21.3,
  },
  {
    time: 1742879400000,
    count: 21.1,
  },
  {
    time: 1742879100000,
    count: 20.2,
  },
  {
    time: 1742878800000,
    count: 20.2,
  },
  {
    time: 1742878500000,
    count: 19.2,
  },
  {
    time: 1742878200000,
    count: 19.8,
  },
  {
    time: 1742877900000,
    count: 19.7,
  },
  {
    time: 1742877600000,
    count: 19.9,
  },
  {
    time: 1742877300000,
    count: 19.4,
  },
  {
    time: 1742877000000,
    count: 18.8,
  },
  {
    time: 1742876700000,
    count: 19.1,
  },
  {
    time: 1742876400000,
    count: 19.1,
  },
  {
    time: 1742876100000,
    count: 18.7,
  },
  {
    time: 1742875800000,
    count: 18.6,
  },
  {
    time: 1742875500000,
    count: 18.5,
  },
  {
    time: 1742875200000,
    count: 18.2,
  },
  {
    time: 1742874900000,
    count: 17.4,
  },
  {
    time: 1742874600000,
    count: 17,
  },
  {
    time: 1742874300000,
    count: 17,
  },
  {
    time: 1742874000000,
    count: 16.6,
  },
  {
    time: 1742873700000,
    count: 16.5,
  },
  {
    time: 1742873400000,
    count: 15.9,
  },
  {
    time: 1742873100000,
    count: 15.8,
  },
  {
    time: 1742872800000,
    count: 15.1,
  },
  {
    time: 1742872500000,
    count: 14.4,
  },
  {
    time: 1742872200000,
    count: 13.8,
  },
  {
    time: 1742871900000,
    count: 13.5,
  },
  {
    time: 1742871600000,
    count: 13.1,
  },
  {
    time: 1742871300000,
    count: 12.7,
  },
  {
    time: 1742871000000,
    count: 12.3,
  },
  {
    time: 1742870700000,
    count: 12.1,
  },
  {
    time: 1742870400000,
    count: 11.2,
  },
  {
    time: 1742870100000,
    count: 10.7,
  },
  {
    time: 1742869800000,
    count: 10.4,
  },
  {
    time: 1742869500000,
    count: 10,
  },
  {
    time: 1742869200000,
    count: 9.4,
  },
  {
    time: 1742868900000,
    count: 8.8,
  },
  {
    time: 1742868600000,
    count: 8.2,
  },
  {
    time: 1742868300000,
    count: 8.1,
  },
  {
    time: 1742868000000,
    count: 7.9,
  },
  {
    time: 1742867700000,
    count: 7.1,
  },
  {
    time: 1742867400000,
    count: 6.5,
  },
  {
    time: 1742867100000,
    count: 6,
  },
  {
    time: 1742866800000,
    count: 5.7,
  },
  {
    time: 1742866500000,
    count: 5.2,
  },
  {
    time: 1742866200000,
    count: 4.8,
  },
  {
    time: 1742865900000,
    count: 4.3,
  },
  {
    time: 1742865600000,
    count: 4.1,
  },
  {
    time: 1742865300000,
    count: 3.6,
  },
  {
    time: 1742865000000,
    count: 3.4,
  },
  {
    time: 1742864700000,
    count: 2.9,
  },
  {
    time: 1742864400000,
    count: 2.4,
  },
  {
    time: 1742864100000,
    count: 2.2,
  },
  {
    time: 1742863800000,
    count: 1.9,
  },
  {
    time: 1742863500000,
    count: 1.3,
  },
  {
    time: 1742863200000,
    count: 0.6,
  },
  {
    time: 1742862900000,
    count: -0.1,
  },
  {
    time: 1742862600000,
    count: -0.6,
  },
  {
    time: 1742862300000,
    count: -0.9,
  },
  {
    time: 1742862000000,
    count: -1.2,
  },
  {
    time: 1742861700000,
    count: -1.3,
  },
  {
    time: 1742861400000,
    count: -1.4,
  },
  {
    time: 1742861100000,
    count: -1.6,
  },
  {
    time: 1742860800000,
    count: -1.7,
  },
  {
    time: 1742860500000,
    count: -1.8,
  },
  {
    time: 1742860200000,
    count: -1.8,
  },
  {
    time: 1742859900000,
    count: -1.9,
  },
  {
    time: 1742859600000,
    count: -2,
  },
  {
    time: 1742859300000,
    count: -2.2,
  },
  {
    time: 1742859000000,
    count: -2.4,
  },
  {
    time: 1742858700000,
    count: -2.5,
  },
  {
    time: 1742858400000,
    count: -2.4,
  },
  {
    time: 1742858100000,
    count: -2.2,
  },
  {
    time: 1742857800000,
    count: -2.2,
  },
  {
    time: 1742857500000,
    count: -2.1,
  },
  {
    time: 1742857200000,
    count: -2,
  },
  {
    time: 1742856900000,
    count: -2.1,
  },
  {
    time: 1742856600000,
    count: -2.1,
  },
  {
    time: 1742856300000,
    count: -2,
  },
  {
    time: 1742856000000,
    count: -2.2,
  },
  {
    time: 1742855700000,
    count: -2.3,
  },
  {
    time: 1742855400000,
    count: -2.2,
  },
  {
    time: 1742855100000,
    count: -2.2,
  },
  {
    time: 1742854800000,
    count: -2.1,
  },
  {
    time: 1742854500000,
    count: -2,
  },
  {
    time: 1742854200000,
    count: -1.9,
  },
  {
    time: 1742853900000,
    count: -1.7,
  },
  {
    time: 1742853600000,
    count: -1.6,
  },
  {
    time: 1742853300000,
    count: -1.6,
  },
  {
    time: 1742853000000,
    count: -1.8,
  },
  {
    time: 1742852700000,
    count: -1.8,
  },
  {
    time: 1742852400000,
    count: -1.8,
  },
  {
    time: 1742852100000,
    count: -1.8,
  },
  {
    time: 1742851800000,
    count: -1.5,
  },
  {
    time: 1742851500000,
    count: -1.3,
  },
  {
    time: 1742851200000,
    count: -1.2,
  },
  {
    time: 1742850900000,
    count: -1.2,
  },
  {
    time: 1742850600000,
    count: -1.3,
  },
  {
    time: 1742850300000,
    count: -1.2,
  },
  {
    time: 1742850000000,
    count: -1.2,
  },
  {
    time: 1742849700000,
    count: -1,
  },
  {
    time: 1742849400000,
    count: -0.9,
  },
  {
    time: 1742849100000,
    count: -0.9,
  },
  {
    time: 1742848800000,
    count: -0.7,
  },
  {
    time: 1742848500000,
    count: -0.5,
  },
  {
    time: 1742848200000,
    count: -0.5,
  },
  {
    time: 1742847900000,
    count: -0.5,
  },
  {
    time: 1742847600000,
    count: -0.3,
  },
  {
    time: 1742847300000,
    count: 0,
  },
  {
    time: 1742847000000,
    count: -0.1,
  },
  {
    time: 1742846700000,
    count: 0.2,
  },
  {
    time: 1742846400000,
    count: 0.3,
  },
  {
    time: 1742846100000,
    count: 0.2,
  },
  {
    time: 1742845800000,
    count: 0.1,
  },
  {
    time: 1742845500000,
    count: 0,
  },
  {
    time: 1742845200000,
    count: 0.2,
  },
  {
    time: 1742844900000,
    count: 0.6,
  },
  {
    time: 1742844600000,
    count: 0.8,
  },
  {
    time: 1742844300000,
    count: 0.8,
  },
  {
    time: 1742844000000,
    count: 0.6,
  },
  {
    time: 1742843700000,
    count: 0.7,
  },
  {
    time: 1742843400000,
    count: 0.8,
  },
  {
    time: 1742843100000,
    count: 0.7,
  },
  {
    time: 1742842800000,
    count: 0.6,
  },
  {
    time: 1742842500000,
    count: 0.8,
  },
  {
    time: 1742842200000,
    count: 0.8,
  },
  {
    time: 1742841900000,
    count: 0.9,
  },
  {
    time: 1742841600000,
    count: 1,
  },
  {
    time: 1742841300000,
    count: 1.3,
  },
  {
    time: 1742841000000,
    count: 1.5,
  },
  {
    time: 1742840700000,
    count: 1.7,
  },
  {
    time: 1742840400000,
    count: 2.1,
  },
  {
    time: 1742840100000,
    count: 2.3,
  },
  {
    time: 1742839800000,
    count: 2.1,
  },
  {
    time: 1742839500000,
    count: 1.9,
  },
  {
    time: 1742839200000,
    count: 2,
  },
  {
    time: 1742838900000,
    count: 2.2,
  },
  {
    time: 1742838600000,
    count: 2.6,
  },
  {
    time: 1742838300000,
    count: 3,
  },
  {
    time: 1742838000000,
    count: 3.2,
  },
  {
    time: 1742837700000,
    count: 3.2,
  },
  {
    time: 1742837400000,
    count: 3.6,
  },
  {
    time: 1742837100000,
    count: 3.4,
  },
  {
    time: 1742836800000,
    count: 3.4,
  },
  {
    time: 1742836500000,
    count: 3.6,
  },
  {
    time: 1742836200000,
    count: 3.7,
  },
].reverse();

function Example() {
  const spec: AreaProps = {
    height: 400,
    title: {
      text: '基础折线图',
    },
    xField: 'time',
    yField: 'count',
    legends: [
      {
        visible: true,
        position: 'end',
        orient: 'top',
        item: {
          shape: {
            style: {
              size: 10,
              symbolType: hyphenPointPath,
              dy: -4,
              fill: colorBlue2,
            },
          },
          label: {
            formatMethod: () => {
              return '测试图例';
            },
          },
        },
        layoutType: 'absolute',
        left: 0,
        right: -26,
        top: 0,
      },
    ],
    data: {
      values: list,
    },
    axes: [
      {
        orient: 'left',
        grid: {
          visible: true,
        },
      },
      {
        orient: 'bottom',
        grid: {
          visible: true,
        },
        label: {
          visible: true,
          formatMethod: (data) => {
            return dayjs(data as string).format('HH:mm');
          },
        },
      },
    ],
    tooltip: {
      dimension: {
        shapeType: hyphenPointPath,
        shapeFill: colorBlue2,
        title: {
          value: (datum) => {
            return dayjs(datum?.time).format('MM-DD HH:mm');
          },
        },
        content: {
          key: '温度',
          value: (datum) => {
            return datum?.count;
          },
        },
      },
    },
    crosshair: {
      xField: {
        visible: true,
        line: {
          type: 'line',
        },
      },
    },
  };

  return (
    <Area {...spec} />
  );
};

export default Example;
