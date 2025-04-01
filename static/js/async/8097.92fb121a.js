"use strict";(self.webpackChunksensoro_design_charts=self.webpackChunksensoro_design_charts||[]).push([["8097"],{77714:function(e,n,t){t.r(n),t.d(n,{default:()=>d});var a=t(52676),l=t(40453),i=t(75181),r=t(68668);function s(e){let n=Object.assign({h1:"h1",a:"a",h2:"h2",pre:"pre",code:"code"},(0,l.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"折线图",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#折线图",children:"#"}),"折线图"]}),"\n",(0,a.jsxs)(n.h2,{id:"markarea",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#markarea",children:"#"}),"MarkArea"]}),"\n",(0,a.jsxs)(r.Z,{isMobile:"false",demoId:"_demos_config_Line_1",children:[(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import type { LineProps } from '@sensoro-design/chart';\nimport { Line } from '@sensoro-design/chart';\n\nfunction Example() {\n  const spec: LineProps = {\n    height: 300,\n    xField: 'type',\n    yField: 'value',\n    title: {\n      text: '阶梯折线图',\n    },\n    data: {\n      values: [\n        { type: '8-12', value: 0 },\n        { type: '8-13', value: 1 },\n        { type: '8-14', value: 0 },\n        { type: '8-15', value: 0 },\n        { type: '8-16', value: 1 },\n        { type: '8-17', value: 1 },\n      ],\n    },\n    axes: [\n      {\n        orient: 'left',\n        tick: {\n          tickStep: 1,\n        },\n        max: 1.000001,\n        label: {\n          visible: true,\n          formatMethod: (data) => {\n            return data ? '有' : '无';\n          },\n        },\n      },\n    ],\n    tooltip: {\n      dimension: {\n        shapeType: 'square',\n        content: {\n          key: '活动迹象',\n          value: (datum) => {\n            return datum?.value ? '有' : '无';\n          },\n        },\n        updateContent: (prev) => {\n          return prev?.map((item) => {\n            if (['8-15'].includes(item.datum.type)) {\n              return {\n                ...item,\n                valueStyle: {\n                  ...item.valueStyle,\n                  fill: 'red',\n                },\n              };\n            }\n            return {\n              ...item,\n              valueStyle: {\n                ...item.valueStyle,\n                fill: '#fff',\n              },\n            };\n          });\n        },\n      },\n    },\n    crosshair: {\n      xField: {\n        visible: true,\n        line: {\n          type: 'line',\n        },\n      },\n    },\n    markArea: [\n      {\n        visible: true,\n        x: '8-14',\n        x1: '8-16',\n        area: {\n          style: {\n            fill: 'rgba(238,97,89,0.15)',\n          },\n        },\n      },\n    ],\n    line: {\n      style: {\n        curveType: 'stepAfter',\n      },\n    },\n  };\n\n  return (\n    <Line {...spec} />\n  );\n};\n\nexport default Example;\n"})})}),(0,a.jsx)(i.default,{})]})]})}function u(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(s,e)})):s(e)}let d=u;u.__RSPRESS_PAGE_META={},u.__RSPRESS_PAGE_META["demos%2Fconfig%2FLine.mdx"]={toc:[{id:"markarea",text:"MarkArea",depth:2}],title:"折线图",headingTitle:"折线图",frontmatter:{}}},75181:function(e,n,t){t.r(n),t.d(n,{default:()=>i});var a=t(52676),l=t(34371);let i=function(){return(0,a.jsx)(l.x1,{height:300,xField:"type",yField:"value",title:{text:"阶梯折线图"},data:{values:[{type:"8-12",value:0},{type:"8-13",value:1},{type:"8-14",value:0},{type:"8-15",value:0},{type:"8-16",value:1},{type:"8-17",value:1}]},axes:[{orient:"left",tick:{tickStep:1},max:1.000001,label:{visible:!0,formatMethod:e=>e?"有":"无"}}],tooltip:{dimension:{shapeType:"square",content:{key:"活动迹象",value:e=>(null==e?void 0:e.value)?"有":"无"},updateContent:e=>null==e?void 0:e.map(e=>["8-15"].includes(e.datum.type)?{...e,valueStyle:{...e.valueStyle,fill:"red"}}:{...e,valueStyle:{...e.valueStyle,fill:"#fff"}})}},crosshair:{xField:{visible:!0,line:{type:"line"}}},markArea:[{visible:!0,x:"8-14",x1:"8-16",area:{style:{fill:"rgba(238,97,89,0.15)"}}}],line:{style:{curveType:"stepAfter"}}})}}}]);