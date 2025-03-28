"use strict";(self.webpackChunksensoro_design_charts=self.webpackChunksensoro_design_charts||[]).push([["832"],{1583:function(e,n,t){t.r(n),t.d(n,{default:()=>o});var a=t(2676),i=t(453),s=t(3043),r=t(8668);function l(e){let n=Object.assign({h1:"h1",a:"a",h2:"h2",pre:"pre",code:"code"},(0,i.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"饼图",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#饼图",children:"#"}),"饼图"]}),"\n",(0,a.jsxs)(n.h2,{id:"小型环图",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#小型环图",children:"#"}),"小型环图"]}),"\n",(0,a.jsxs)(r.Z,{isMobile:"false",demoId:"_demos_config_Pie_1",children:[(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import type { PieProps } from '@sensoro-design/chart';\nimport { Pie } from '@sensoro-design/chart';\n\nfunction Example() {\n  const spec: PieProps = {\n    height: 36,\n    width: 36,\n    padding: 0,\n    data: [\n      {\n        values: [\n          { type: 'oxygen', value: 46 },\n          { type: 'silicon', value: 27 },\n        ],\n      },\n    ],\n    outerRadius: 1,\n    innerRadius: 0.6,\n    padAngle: 2,\n    valueField: 'value',\n    categoryField: 'type',\n    legends: {\n      visible: false,\n    },\n    tooltip: {\n      mark: {\n        shapeType: 'square',\n        title: {\n          visible: false,\n        },\n        content: [\n          {\n            key: (datum) => {\n              return `${datum?.type}`;\n            },\n            value: (datum) => {\n              return `${datum?.value} 次`;\n            },\n          },\n        ],\n      },\n    },\n  };\n\n  return (\n    <Pie {...spec} />\n  );\n};\n\nexport default Example;\n"})})}),(0,a.jsx)(s.default,{})]})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(l,e)})):l(e)}let o=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["demos%2Fconfig%2FPie.mdx"]={toc:[{id:"小型环图",text:"小型环图",depth:2}],title:"饼图",headingTitle:"饼图",frontmatter:{}}},3043:function(e,n,t){t.r(n),t.d(n,{default:()=>s});var a=t(2676),i=t(8741);let s=function(){return(0,a.jsx)(i.by,{height:36,width:36,padding:0,data:[{values:[{type:"oxygen",value:46},{type:"silicon",value:27}]}],outerRadius:1,innerRadius:.6,padAngle:2,valueField:"value",categoryField:"type",legends:{visible:!1},tooltip:{mark:{shapeType:"square",title:{visible:!1},content:[{key:e=>`${null==e?void 0:e.type}`,value:e=>`${null==e?void 0:e.value} 次`}]}}})}}}]);