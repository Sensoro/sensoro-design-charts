"use strict";(self.webpackChunksensoro_design_charts=self.webpackChunksensoro_design_charts||[]).push([["587"],{8793:function(e,t,s){s.r(t),s.d(t,{default:()=>r});var n=s(2676),i=s(453),a=s(4273),l=s(370);function c(e){let t=Object.assign({h1:"h1",a:"a",pre:"pre",code:"code"},(0,i.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.h1,{id:"hideaxesstackbar",children:[(0,n.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#hideaxesstackbar",children:"#"}),"HideAxesStackBar"]}),"\n",(0,n.jsxs)(l.Z,{isMobile:"false",demoId:"_custom_HideAxesStackBar_1",children:[(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import type { HideAxesStackBarProps } from '@sensoro-design/chart';\nimport { HideAxesStackBar } from '@sensoro-design/chart';\n\nfunction Example() {\n  const spec: HideAxesStackBarProps = {\n    data: [\n      { time: 0, select: false },\n      { time: 1, select: false },\n      { time: 2, select: false },\n      { time: 3, select: false },\n      { time: 4, select: false },\n      { time: 5, select: false },\n      { time: 6, select: false },\n      { time: 7, select: false },\n      { time: 8, select: false },\n      { time: 9, value: 10 },\n      { time: 10, value: 80 },\n      { time: 11, value: 20 },\n      { time: 12, value: 10 },\n      { time: 13, value: 50 },\n      { time: 14, value: 20 },\n      { time: 15, value: 0 },\n      { time: 16, select: false },\n      { time: 17, select: false },\n      { time: 18, select: false },\n      { time: 19, select: false },\n      { time: 20, select: false },\n      { time: 21, select: false },\n      { time: 22, select: false },\n      { time: 23, select: false },\n    ],\n    tooltip: {\n      dimension: {\n        content: {\n          key: (datum) => {\n            return `${datum?.time}:00 ~ ${datum?.time + 1}:00`;\n          },\n          value: (datum) => {\n            return `${datum?.value} 次`;\n          },\n        },\n      },\n    },\n    height: 150,\n    width: 400,\n  };\n\n  return (\n    <HideAxesStackBar {...spec} />\n  );\n};\n\nexport default Example;\n"})})}),(0,n.jsx)(a.default,{})]})]})}function m(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(c,e)})):c(e)}let r=m;m.__RSPRESS_PAGE_META={},m.__RSPRESS_PAGE_META["custom%2FHideAxesStackBar.mdx"]={toc:[],title:"HideAxesStackBar",headingTitle:"HideAxesStackBar",frontmatter:{}}},4273:function(e,t,s){s.r(t),s.d(t,{default:()=>a});var n=s(2676),i=s(6059);let a=function(){return(0,n.jsx)(i.OI,{data:[{time:0,select:!1},{time:1,select:!1},{time:2,select:!1},{time:3,select:!1},{time:4,select:!1},{time:5,select:!1},{time:6,select:!1},{time:7,select:!1},{time:8,select:!1},{time:9,value:10},{time:10,value:80},{time:11,value:20},{time:12,value:10},{time:13,value:50},{time:14,value:20},{time:15,value:0},{time:16,select:!1},{time:17,select:!1},{time:18,select:!1},{time:19,select:!1},{time:20,select:!1},{time:21,select:!1},{time:22,select:!1},{time:23,select:!1}],tooltip:{dimension:{content:{key:e=>`${null==e?void 0:e.time}:00 ~ ${(null==e?void 0:e.time)+1}:00`,value:e=>`${null==e?void 0:e.value} 次`}}},height:150,width:400})}}}]);