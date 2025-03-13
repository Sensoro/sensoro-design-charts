"use strict";(self.webpackChunksensoro_design_charts=self.webpackChunksensoro_design_charts||[]).push([["886"],{9309:function(n,e,t){t.r(e),t.d(e,{default:()=>d});var a=t(2676),s=t(453),r=t(5846),l=t(370);function i(n){let e=Object.assign({h1:"h1",a:"a",pre:"pre",code:"code"},(0,s.ah)(),n.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(e.h1,{id:"区间柱图",children:[(0,a.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#区间柱图",children:"#"}),"区间柱图"]}),"\n",(0,a.jsxs)(l.Z,{isMobile:"false",demoId:"_charts_RangeColumn_1",children:[(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-tsx",children:"import type { RangeColumnProps } from '@sensoro-design/chart';\nimport { RangeColumn } from '@sensoro-design/chart';\nimport dayjs from 'dayjs';\n\nconst list = [\n  { y: '在床', x: [1740995591000, 1740995830000] },\n  { y: '在床', x: [1740995934000, 1740996089000] },\n  { y: '在床', x: [1740996274000, 1740996438000] },\n  { y: '在床', x: [1740996631000, 1740997169000] },\n  { y: '在床', x: [1740997577000, 1740997691000] },\n  { y: '在床', x: [1740997811000, 1740998902000] },\n];\n\nconst data = list.map((item) => {\n  const { x } = item;\n  return {\n    name: '1',\n    start: x[0],\n    end: x[1],\n    type: x[0] === 1740996274000 ? 'error' : 'normal',\n  };\n});\n\nlet startLabel = '';\n\nfunction Example() {\n  const spec: RangeColumnProps = {\n    height: 160,\n    data: {\n      values: data,\n    },\n    direction: 'horizontal',\n    yField: 'name',\n    xField: ['start', 'end'],\n    tooltip: {\n      visible: false,\n    },\n    bar: {\n      style: {\n        height: 12,\n        fill: (datum) => {\n          return datum.type === 'error' ? 'rgba(238,97,89,0.25)' : '#588BEE';\n        },\n      },\n    },\n    axes: [\n      {\n        orient: 'left',\n        label: {\n          visible: false,\n        },\n        domainLine: {\n          visible: false,\n        },\n      },\n      {\n        orient: 'bottom',\n        type: 'time',\n        domainLine: {\n          visible: true,\n        },\n        label: {\n          lastVisible: true,\n          firstVisible: true,\n          formatMethod: (_, datum) => {\n            const label = datum?.label;\n            if (!startLabel || startLabel === label) {\n              startLabel = label;\n              return dayjs(label).format('DD-MM HH:mm');\n            }\n            return dayjs(label).format('HH:mm');\n          },\n        },\n        innerOffset: {\n          left: 20,\n          right: 20,\n        },\n      },\n    ],\n    crosshair: [\n      {\n        yField: {\n          visible: false,\n        },\n      },\n    ],\n  };\n\n  return (\n    <RangeColumn {...spec} />\n  );\n}\n\nexport default Example;\n"})})}),(0,a.jsx)(r.default,{})]})]})}function o(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,s.ah)(),n.components);return e?(0,a.jsx)(e,Object.assign({},n,{children:(0,a.jsx)(i,n)})):i(n)}let d=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["charts%2FRangeColumn.mdx"]={toc:[],title:"区间柱图",headingTitle:"区间柱图",frontmatter:{}}}}]);