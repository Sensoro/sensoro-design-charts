"use strict";(self.webpackChunksensoro_design_charts=self.webpackChunksensoro_design_charts||[]).push([["355"],{2741:function(e,t,n){n.r(t),n.d(t,{default:()=>d});var i=n(2676),l=n(453),s=n(7629),a=n(370);function o(e){let t=Object.assign({h1:"h1",a:"a",pre:"pre",code:"code"},(0,l.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.h1,{id:"pie",children:[(0,i.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#pie",children:"#"}),"Pie"]}),"\n",(0,i.jsxs)(a.Z,{isMobile:"false",demoId:"_demos_Pie_1",children:[(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"import type { PieProps } from '@sensoro-design/chart';\nimport { Pie } from '@sensoro-design/chart';\n\nfunction Example() {\n  const spec: PieProps = {\n    height: 36,\n    width: 36,\n    padding: 0,\n    data: [\n      {\n        values: [\n          { type: 'oxygen', value: 46 },\n          { type: 'silicon', value: 27 },\n        ],\n      },\n    ],\n    outerRadius: 1,\n    innerRadius: 0.6,\n    padAngle: 2,\n    valueField: 'value',\n    categoryField: 'type',\n    legends: {\n      visible: false,\n    },\n    tooltip: {\n      mark: {\n        shapeType: 'square',\n        title: {\n          visible: false,\n        },\n        content: [\n          {\n            key: (datum) => {\n              return `${datum?.type}`;\n            },\n            value: (datum) => {\n              return `${datum?.value} 次`;\n            },\n          },\n        ],\n      },\n    },\n  };\n\n  return (\n    <Pie {...spec} />\n  );\n};\n\nexport default Example;\n"})})}),(0,i.jsx)(s.default,{})]})]})}function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?(0,i.jsx)(t,Object.assign({},e,{children:(0,i.jsx)(o,e)})):o(e)}let d=r;r.__RSPRESS_PAGE_META={},r.__RSPRESS_PAGE_META["demos%2FPie.mdx"]={toc:[],title:"Pie",headingTitle:"Pie",frontmatter:{}}},7629:function(e,t,n){n.r(t),n.d(t,{default:()=>s});var i=n(2676),l=n(6059);let s=function(){return(0,i.jsx)(l.by,{height:36,width:36,padding:0,data:[{values:[{type:"oxygen",value:46},{type:"silicon",value:27}]}],outerRadius:1,innerRadius:.6,padAngle:2,valueField:"value",categoryField:"type",legends:{visible:!1},tooltip:{mark:{shapeType:"square",title:{visible:!1},content:[{key:e=>`${null==e?void 0:e.type}`,value:e=>`${null==e?void 0:e.value} 次`}]}}})}},6059:function(e,t,n){n.d(t,{uN:()=>i,fW:()=>l,k4:()=>h,Y4:()=>k,OI:()=>f,by:()=>g,x1:()=>b});let i=n(633).T,l="M5,2.5 C5.86848172,2.5 6.63353016,2.9428505 7.08164846,3.61505463 L7.16500985,3.74907618 L8.75,3.75 C9.44035594,3.75 10,4.30964406 10,5 C10,5.69035594 9.44035594,6.25 8.75,6.25 L7.16530319,6.25041709 L7.17274503,6.23746892 C6.74229507,6.99162571 5.93051612,7.5 5,7.5 C4.13151828,7.5 3.36646984,7.0571495 2.91835154,6.38494537 L2.83469681,6.25041709 L1.25,6.25 C0.559644063,6.25 0,5.69035594 0,5 C0,4.30964406 0.559644063,3.75 1.25,3.75 L2.83499015,3.74907618 L2.82725497,3.76253108 C3.25770493,3.00837429 4.06948388,2.5 5,2.5 Z M5,3.5 C4.17157288,3.5 3.5,4.17157288 3.5,5 C3.5,5.82842712 4.17157288,6.5 5,6.5 C5.82842712,6.5 6.5,5.82842712 6.5,5 C6.5,4.17157288 5.82842712,3.5 5,3.5 Z";var s=n(2676),a=n(1696),o=n(325),r=n(5271),d=n(114);let u={style:{size:0,stroke:"#fff",lineWidth:2},state:{dimension_hover:{size:10}}},c={style:{fill:{gradient:"linear",x0:.5,y0:0,x1:.5,y1:1,stops:[{offset:0,opacity:.15},{offset:1,color:"#fff"}]}}},p={dimension:{shapeType:l,shapeFill:d.m7}};function h(e){let{xAxes:t,yAxes:n,xField:i="date",yField:l="value",tooltip:h,...v}=e,y=(0,o.Z)(p,h),f=r.useMemo(()=>(function(e){let{xAxes:t={},yAxes:n={},xField:i,yField:l}=e,s=(0,o.Z)({orient:"bottom",label:{visible:!0},type:"band"},t),a=(0,o.Z)({orient:"left",seriesIndex:[0,1,2]},n);return{color:["#C5D7F9",d.m7,"#C5D7F9"],series:[{type:"area",zIndex:0,id:"area1",dataIndex:0,xField:i,yField:l,tooltip:{visible:!1},hover:!1,select:!1,point:{visible:!1},area:{...c,style:{...c.style,cursor:"not-allowed"}}},{type:"area",id:"area2",zIndex:1,dataIndex:1,xField:i,yField:l,stack:!1,area:{...c,style:{...c.style}},point:{...u,style:{...u.style}}},{type:"area",id:"area3",dataIndex:2,xField:i,yField:l,zIndex:0,tooltip:{visible:!1},hover:!1,select:!1,point:{visible:!1},area:{...c,style:{...c.style,cursor:"not-allowed"}}}],axes:[a,s],crosshair:{xField:{visible:!0,line:{type:"line"}},followTooltip:!0}}})({yAxes:n,xAxes:t,xField:i,yField:l}),[n,t,i,l]);return(0,s.jsx)(a.h,{...f,...v,tooltip:y})}let v={mark:{visible:!1},dimension:{title:{visible:!1}}},y={color:[d.m7,d.m7],axes:[{visible:!1,orient:"bottom",type:"band"},{visible:!1,orient:"left",seriesIndex:[0,1]}],crosshair:{xField:{visible:!0,line:{type:"rect",width:10,style:{fill:"#314059"}}},followTooltip:!0}};function f(e){let{barWidth:t=6,data:n,xField:i="time",yField:l="value",tooltip:u,crosshair:c,...p}=e,h=r.useMemo(()=>{let e=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{xField:n="time",yField:i="value"}=t;return e.reduce((e,t)=>!1===t.select?[[...e[0],{[`${n}`]:t[`${n}`],[`${i}`]:0,select:!1}],e[1]]:[[...e[0],{[`${n}`]:t[`${n}`],[`${i}`]:0,select:!0}],[...e[1],{[`${n}`]:t[`${n}`],[`${i}`]:t[`${i}`]||0}]],[[],[]])}(n,{xField:i,yField:l});return[{values:e[0]},{values:e[1]}]},[n,i,l]),f=r.useMemo(()=>{let e=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{barWidth:t=6}=e;return{xField:{visible:!0,line:{type:"rect",width:t,style:{fill:"#314059"}}},followTooltip:!0}}({barWidth:t});return(0,o.Z)(e,c)},[c,t]),m=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{xField:t,yField:n,barWidth:i=6}=e;return[{type:"bar",dataIndex:0,stack:!0,xField:t,yField:n,tooltip:{visible:!1},bar:{style:{fill:e=>e.select?d.m7:"#314059",height:4,dy:-4}},barWidth:i},{type:"bar",dataIndex:1,stack:!0,xField:t,yField:n,barWidth:i}]}({xField:i,yField:l,barWidth:t}),x=(0,o.Z)(v,u);return(0,s.jsx)(a.h,{...y,data:h,tooltip:x,series:m,crosshair:f,...p})}var m=n(4852);let x={style:{size:0,stroke:"#fff",lineWidth:2},state:{dimension_hover:{size:10}}};function b(e){let{defaultMarkLine:t,markLine:n,point:i}=e,l=n,a=(0,o.Z)(x,i);if(!l&&t&&t.y){var r;l=[(0,o.Z)({y:r=t.y,endSymbol:{visible:!1},line:{style:{stroke:"#F72231",lineWidth:1}},label:{text:`均值: ${r}`,position:"insideEndTop",labelBackground:{visible:!1},style:{fontSize:10,fill:"#F72231"}},zIndex:0},t)]}return(0,s.jsx)(m.w,{...e,markLine:l,point:a})}let g=n(4929).u,k=n(7782).Q}}]);