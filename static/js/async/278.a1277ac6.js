"use strict";(self.webpackChunksensoro_design_charts=self.webpackChunksensoro_design_charts||[]).push([["278"],{8750:function(e,t,l){l.r(t),l.d(t,{default:()=>u});var n=l(2676),i=l(453),s=l(1185),a=l(370);function o(e){let t=Object.assign({h1:"h1",a:"a",p:"p",pre:"pre",code:"code"},(0,i.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.h1,{id:"饼图",children:[(0,n.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#饼图",children:"#"}),"饼图"]}),"\n",(0,n.jsx)(t.p,{children:"饼图，或称饼状图，是一个划分为几个扇形的圆形统计图表，用于描述量、频率或百分比之间的相对关系。在饼图中，每个扇区的弧长（以及圆心角和面积）大小为其所表示的数量的比例。这些扇区合在一起刚好是一个完全的圆形。"}),"\n",(0,n.jsxs)(a.Z,{isMobile:"false",demoId:"_charts_Pie_1",children:[(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import type { PieProps } from '@sensoro-design/chart';\nimport { Pie } from '@sensoro-design/chart';\n\nfunction Example() {\n  const spec: PieProps = {\n    height: 300,\n    data: [\n      {\n        values: [\n          { type: 'oxygen', value: '46.60' },\n          { type: 'silicon', value: '27.72' },\n          { type: 'aluminum', value: '8.13' },\n          { type: 'iron', value: '5' },\n          { type: 'calcium', value: '3.63' },\n          { type: 'sodium', value: '2.83' },\n          { type: 'potassium', value: '2.59' },\n          { type: 'others', value: '3.5' },\n        ],\n      },\n    ],\n    outerRadius: 0.8,\n    valueField: 'value',\n    categoryField: 'type',\n    title: {\n      visible: true,\n      text: '基础饼图',\n    },\n    legends: {\n      visible: true,\n      orient: 'left',\n    },\n    label: {\n      visible: true,\n    },\n    tooltip: {\n      mark: {\n        content: [\n          {\n            key: datum => datum?.type,\n            value: datum => `${datum?.value}%`,\n          },\n        ],\n      },\n    },\n  };\n\n  return (\n    <Pie {...spec} />\n  );\n};\n\nexport default Example;\n"})})}),(0,n.jsx)(s.default,{})]})]})}function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(o,e)})):o(e)}let u=r;r.__RSPRESS_PAGE_META={},r.__RSPRESS_PAGE_META["charts%2FPie.mdx"]={toc:[],title:"饼图",headingTitle:"饼图",frontmatter:{}}},1185:function(e,t,l){l.r(t),l.d(t,{default:()=>s});var n=l(2676),i=l(6059);let s=function(){return(0,n.jsx)(i.by,{height:300,data:[{values:[{type:"oxygen",value:"46.60"},{type:"silicon",value:"27.72"},{type:"aluminum",value:"8.13"},{type:"iron",value:"5"},{type:"calcium",value:"3.63"},{type:"sodium",value:"2.83"},{type:"potassium",value:"2.59"},{type:"others",value:"3.5"}]}],outerRadius:.8,valueField:"value",categoryField:"type",title:{visible:!0,text:"基础饼图"},legends:{visible:!0,orient:"left"},label:{visible:!0},tooltip:{mark:{content:[{key:e=>null==e?void 0:e.type,value:e=>`${null==e?void 0:e.value}%`}]}}})}},6059:function(e,t,l){l.d(t,{uN:()=>n,fW:()=>i,k4:()=>v,Y4:()=>j,OI:()=>f,by:()=>g,x1:()=>b});let n=l(633).T,i="M5,2.5 C5.86848172,2.5 6.63353016,2.9428505 7.08164846,3.61505463 L7.16500985,3.74907618 L8.75,3.75 C9.44035594,3.75 10,4.30964406 10,5 C10,5.69035594 9.44035594,6.25 8.75,6.25 L7.16530319,6.25041709 L7.17274503,6.23746892 C6.74229507,6.99162571 5.93051612,7.5 5,7.5 C4.13151828,7.5 3.36646984,7.0571495 2.91835154,6.38494537 L2.83469681,6.25041709 L1.25,6.25 C0.559644063,6.25 0,5.69035594 0,5 C0,4.30964406 0.559644063,3.75 1.25,3.75 L2.83499015,3.74907618 L2.82725497,3.76253108 C3.25770493,3.00837429 4.06948388,2.5 5,2.5 Z M5,3.5 C4.17157288,3.5 3.5,4.17157288 3.5,5 C3.5,5.82842712 4.17157288,6.5 5,6.5 C5.82842712,6.5 6.5,5.82842712 6.5,5 C6.5,4.17157288 5.82842712,3.5 5,3.5 Z";var s=l(2676),a=l(1696),o=l(325),r=l(5271),u=l(114);let d={style:{size:0,stroke:"#fff",lineWidth:2},state:{dimension_hover:{size:10}}},c={style:{fill:{gradient:"linear",x0:.5,y0:0,x1:.5,y1:1,stops:[{offset:0,opacity:.15},{offset:1,color:"#fff"}]}}},p={dimension:{shapeType:i,shapeFill:u.m7}};function v(e){let{xAxes:t,yAxes:l,xField:n="date",yField:i="value",tooltip:v,...y}=e,h=(0,o.Z)(p,v),f=r.useMemo(()=>(function(e){let{xAxes:t={},yAxes:l={},xField:n,yField:i}=e,s=(0,o.Z)({orient:"bottom",label:{visible:!0},type:"band"},t),a=(0,o.Z)({orient:"left",seriesIndex:[0,1,2]},l);return{color:["#C5D7F9",u.m7,"#C5D7F9"],series:[{type:"area",zIndex:0,id:"area1",dataIndex:0,xField:n,yField:i,tooltip:{visible:!1},hover:!1,select:!1,point:{visible:!1},area:{...c,style:{...c.style,cursor:"not-allowed"}}},{type:"area",id:"area2",zIndex:1,dataIndex:1,xField:n,yField:i,stack:!1,area:{...c,style:{...c.style}},point:{...d,style:{...d.style}}},{type:"area",id:"area3",dataIndex:2,xField:n,yField:i,zIndex:0,tooltip:{visible:!1},hover:!1,select:!1,point:{visible:!1},area:{...c,style:{...c.style,cursor:"not-allowed"}}}],axes:[a,s],crosshair:{xField:{visible:!0,line:{type:"line"}},followTooltip:!0}}})({yAxes:l,xAxes:t,xField:n,yField:i}),[l,t,n,i]);return(0,s.jsx)(a.h,{...f,...y,tooltip:h})}let y={mark:{visible:!1},dimension:{title:{visible:!1}}},h={color:[u.m7,u.m7],axes:[{visible:!1,orient:"bottom",type:"band"},{visible:!1,orient:"left",seriesIndex:[0,1]}],crosshair:{xField:{visible:!0,line:{type:"rect",width:10,style:{fill:"#314059"}}},followTooltip:!0}};function f(e){let{barWidth:t=6,data:l,xField:n="time",yField:i="value",tooltip:d,crosshair:c,...p}=e,v=r.useMemo(()=>{let e=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{xField:l="time",yField:n="value"}=t;return e.reduce((e,t)=>!1===t.select?[[...e[0],{[`${l}`]:t[`${l}`],[`${n}`]:0,select:!1}],e[1]]:[[...e[0],{[`${l}`]:t[`${l}`],[`${n}`]:0,select:!0}],[...e[1],{[`${l}`]:t[`${l}`],[`${n}`]:t[`${n}`]||0}]],[[],[]])}(l,{xField:n,yField:i});return[{values:e[0]},{values:e[1]}]},[l,n,i]),f=r.useMemo(()=>{let e=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{barWidth:t=6}=e;return{xField:{visible:!0,line:{type:"rect",width:t,style:{fill:"#314059"}}},followTooltip:!0}}({barWidth:t});return(0,o.Z)(e,c)},[c,t]),m=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{xField:t,yField:l,barWidth:n=6}=e;return[{type:"bar",dataIndex:0,stack:!0,xField:t,yField:l,tooltip:{visible:!1},bar:{style:{fill:e=>e.select?u.m7:"#314059",height:4,dy:-4}},barWidth:n},{type:"bar",dataIndex:1,stack:!0,xField:t,yField:l,barWidth:n}]}({xField:n,yField:i,barWidth:t}),x=(0,o.Z)(y,d);return(0,s.jsx)(a.h,{...h,data:v,tooltip:x,series:m,crosshair:f,...p})}var m=l(4852);let x={style:{size:0,stroke:"#fff",lineWidth:2},state:{dimension_hover:{size:10}}};function b(e){let{defaultMarkLine:t,markLine:l,point:n}=e,i=l,a=(0,o.Z)(x,n);if(!i&&t&&t.y){var r;i=[(0,o.Z)({y:r=t.y,endSymbol:{visible:!1},line:{style:{stroke:"#F72231",lineWidth:1}},label:{text:`均值: ${r}`,position:"insideEndTop",labelBackground:{visible:!1},style:{fontSize:10,fill:"#F72231"}},zIndex:0},t)]}return(0,s.jsx)(m.w,{...e,markLine:i,point:a})}let g=l(4929).u,j=l(7782).Q}}]);