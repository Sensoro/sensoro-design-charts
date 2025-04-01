"use strict";(self.webpackChunksensoro_design_charts=self.webpackChunksensoro_design_charts||[]).push([["6781"],{30273:function(e,n,t){t.r(n),t.d(n,{default:()=>o});var a=t(52676),l=t(40453),i=t(61185),s=t(38073),u=t(68668);function r(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},(0,l.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"饼图",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#饼图",children:"#"}),"饼图"]}),"\n",(0,a.jsx)(n.p,{children:"饼图，或称饼状图，是一个划分为几个扇形的圆形统计图表，用于描述量、频率或百分比之间的相对关系。在饼图中，每个扇区的弧长（以及圆心角和面积）大小为其所表示的数量的比例。这些扇区合在一起刚好是一个完全的圆形。"}),"\n",(0,a.jsxs)(n.h2,{id:"示例",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"}),"示例"]}),"\n",(0,a.jsxs)(n.h3,{id:"基础饼图",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#基础饼图",children:"#"}),"基础饼图"]}),"\n",(0,a.jsxs)(u.Z,{isMobile:"false",demoId:"_charts_Pie_1",children:[(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import type { PieProps } from '@sensoro-design/chart';\nimport { Pie } from '@sensoro-design/chart';\n\nfunction Example() {\n  const spec: PieProps = {\n    height: 300,\n    data: [\n      {\n        values: [\n          { type: 'oxygen', value: '46.60' },\n          { type: 'silicon', value: '27.72' },\n          { type: 'aluminum', value: '8.13' },\n          { type: 'iron', value: '5' },\n          { type: 'calcium', value: '3.63' },\n          { type: 'sodium', value: '2.83' },\n          { type: 'potassium', value: '2.59' },\n          { type: 'others', value: '3.5' },\n        ],\n      },\n    ],\n    outerRadius: 0.8,\n    valueField: 'value',\n    categoryField: 'type',\n    title: {\n      visible: true,\n      text: '基础饼图',\n    },\n    legends: {\n      visible: true,\n      orient: 'left',\n    },\n    label: {\n      visible: true,\n    },\n    tooltip: {\n      mark: {\n        content: [\n          {\n            key: datum => datum?.type,\n            value: datum => `${datum?.value}%`,\n          },\n        ],\n      },\n    },\n  };\n\n  return (\n    <Pie {...spec} />\n  );\n};\n\nexport default Example;\n"})})}),(0,a.jsx)(i.default,{})]}),"\n",(0,a.jsxs)(n.h3,{id:"环图",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#环图",children:"#"}),"环图"]}),"\n",(0,a.jsxs)(u.Z,{isMobile:"false",demoId:"_charts_Pie_2",children:[(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import type { PieProps } from '@sensoro-design/chart';\nimport { Pie } from '@sensoro-design/chart';\n\nfunction Example() {\n  const spec: PieProps = {\n    height: 300,\n    data: [\n      {\n        values: [\n          { type: 'oxygen', value: '46.60' },\n          { type: 'silicon', value: '27.72' },\n          { type: 'aluminum', value: '8.13' },\n          { type: 'iron', value: '5' },\n          { type: 'calcium', value: '3.63' },\n          { type: 'sodium', value: '2.83' },\n          { type: 'potassium', value: '2.59' },\n          { type: 'others', value: '3.5' },\n        ],\n      },\n    ],\n    outerRadius: 0.8,\n    innerRadius: 0.5,\n    padAngle: 0.6,\n    valueField: 'value',\n    categoryField: 'type',\n    title: {\n      visible: true,\n      text: '环图',\n    },\n    legends: {\n      visible: true,\n      orient: 'left',\n    },\n    label: {\n      visible: true,\n    },\n    tooltip: {\n      mark: {\n        content: [\n          {\n            key: datum => datum?.type,\n            value: datum => `${datum?.value}%`,\n          },\n        ],\n      },\n    },\n  };\n\n  return (\n    <Pie {...spec} />\n  );\n};\n\nexport default Example;\n"})})}),(0,a.jsx)(s.default,{})]})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(r,e)})):r(e)}let o=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["charts%2FPie.mdx"]={toc:[{id:"示例",text:"示例",depth:2},{id:"基础饼图",text:"基础饼图",depth:3},{id:"环图",text:"环图",depth:3}],title:"饼图",headingTitle:"饼图",frontmatter:{}}},61185:function(e,n,t){t.r(n),t.d(n,{default:()=>i});var a=t(52676),l=t(34371);let i=function(){return(0,a.jsx)(l.by,{height:300,data:[{values:[{type:"oxygen",value:"46.60"},{type:"silicon",value:"27.72"},{type:"aluminum",value:"8.13"},{type:"iron",value:"5"},{type:"calcium",value:"3.63"},{type:"sodium",value:"2.83"},{type:"potassium",value:"2.59"},{type:"others",value:"3.5"}]}],outerRadius:.8,valueField:"value",categoryField:"type",title:{visible:!0,text:"基础饼图"},legends:{visible:!0,orient:"left"},label:{visible:!0},tooltip:{mark:{content:[{key:e=>null==e?void 0:e.type,value:e=>`${null==e?void 0:e.value}%`}]}}})}},38073:function(e,n,t){t.r(n),t.d(n,{default:()=>i});var a=t(52676),l=t(34371);let i=function(){return(0,a.jsx)(l.by,{height:300,data:[{values:[{type:"oxygen",value:"46.60"},{type:"silicon",value:"27.72"},{type:"aluminum",value:"8.13"},{type:"iron",value:"5"},{type:"calcium",value:"3.63"},{type:"sodium",value:"2.83"},{type:"potassium",value:"2.59"},{type:"others",value:"3.5"}]}],outerRadius:.8,innerRadius:.5,padAngle:.6,valueField:"value",categoryField:"type",title:{visible:!0,text:"环图"},legends:{visible:!0,orient:"left"},label:{visible:!0},tooltip:{mark:{content:[{key:e=>null==e?void 0:e.type,value:e=>`${null==e?void 0:e.value}%`}]}}})}}}]);