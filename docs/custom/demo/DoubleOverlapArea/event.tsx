import type { DoubleOverlapAreaProps, IGradient, IMarkLineSpec } from '@sensoro-design/chart';
import { useGetState } from '@rcuse/core';
import { DoubleOverlapArea } from '@sensoro-design/chart';
import { colorBlue06, colorGreyPro09, colorWhite } from '@sensoro-design/chart-theme';
import { isNull } from 'es-toolkit/predicate';
import React from 'react';

const linearColor: IGradient = {
  gradient: 'linear',
  x0: 0.5,
  y0: 0,
  x1: 0.5,
  y1: 1,
  stops: [
    {
      offset: 0,
      color: 'rgba(43,109,229,0.35)',
    },
    {
      offset: 1,
      color: 'rgba(43,109,229,0)',
    },
  ],
};

function getMarkLineItem(opts: IMarkLineSpec): IMarkLineSpec {
  return {
    endSymbol: {
      visible: false,
    },
    line: {
      style: {
        stroke: linearColor,
        lineDash: [0],
        lineWidth: 26,
      },
    },
    ...opts,
  };
}

function getMarkLineLabel() {
  const label: IMarkLineSpec['label'] = {
    text: '再次点击可取消选中',
    style: {
      fill: colorWhite,
    },
    labelBackground: {
      visible: true,
      padding: {
        top: 8,
        left: 12,
        right: 12,
        bottom: 8,
      },
      style: {
        fill: colorGreyPro09,
      },
    },
    dy: -8,
  };

  return label;
}

function Example() {
  const timeoutRef = React.useRef<NodeJS.Timeout>();
  const [, setFirstSelect, getFirstSelect] = useGetState(true);
  const [, setSelectVal, getSelectVal] = useGetState<number | null>(null);
  const [markLine, setMarkLine] = React.useState<DoubleOverlapAreaProps['markLine']>([]);

  const spec: DoubleOverlapAreaProps = {
    title: {
      text: '事件',
    },
    height: 400,
    data: [
      { values: [{ date: 0, value: 11635 }, { date: 1, value: 8730 }, { date: 2, value: 6931 }] },
      { values: [{ date: 2, value: 6931 }, { date: 3, value: 6850 }, { date: 4, value: 5366 }, { date: 5, value: 4874 }, { date: 6, value: 5347 }, { date: 7, value: 41115 }, { date: 8, value: 81250 }, { date: 9, value: 81437 }, { date: 10, value: 103941 }, { date: 11, value: 105994 }, { date: 12, value: 116688 }, { date: 13, value: 118847 }, { date: 14, value: 101091 }, { date: 15, value: 107977 }, { date: 16, value: 129702 }, { date: 17, value: 109491 }, { date: 18, value: 106720 }, { date: 19, value: 52051 }, { date: 20, value: 37894 }, { date: 21, value: 29828 }, { date: 22, value: 21099 }] },
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

  React.useEffect(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
  }, []);

  const handleChangeMarkLine = () => {
    const selectVal = getSelectVal();
    const firstSelect = getFirstSelect();

    const markLine: IMarkLineSpec[] = [];

    if (!isNull(selectVal)) {
      markLine.push(
        getMarkLineItem({
          x: selectVal,
          label: firstSelect ? getMarkLineLabel() : undefined,
        }),
        getMarkLineItem({
          x: selectVal,
          line: {
            style: {
              stroke: colorBlue06,
              lineWidth: 1,
              lineDash: [3, 2],
            },
          },
        }),
      );
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (firstSelect) {
      setFirstSelect(false);
      timeoutRef.current = setTimeout(() => {
        handleChangeMarkLine();
      }, 3 * 1000);
    }

    setMarkLine(markLine);
  };

  const handleDimensionClick: DoubleOverlapAreaProps['onDimensionClick'] = (e) => {
    if (e?.model?.userId === 'area2' || e.node.type === 'line') {
      const val = e.dimensionInfo[0].value;
      if (getSelectVal() === val) {
        setSelectVal(null);
      }
      else {
        setSelectVal(val);
      }

      handleChangeMarkLine();
    }
  };

  return (
    <DoubleOverlapArea
      {...spec}
      cursor="pointer"
      markLine={markLine}
      onDimensionClick={handleDimensionClick}
      crosshair={[
        {
          xField: {
            visible: true,
            line: {
              type: 'line',
              width: 1,
              style: {
                stroke: colorBlue06,
              },
            },
          },
          followTooltip: true,
        },
      ]}
    />
  );
};

export default Example;
