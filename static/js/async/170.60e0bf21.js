"use strict";(self.webpackChunksensoro_design_charts=self.webpackChunksensoro_design_charts||[]).push([["170"],{2894:function(e,t,l){l.r(t),l.d(t,{default:()=>s});var a=l(2676),i=l(4244);let s=function(){return(0,a.jsx)(i.k4,{title:{text:"基本示例"},height:400,data:[{values:[{date:0,value:11635},{date:1,value:8730},{date:2,value:6931}]},{values:[{date:2,value:6931},{date:3,value:6850},{date:4,value:5366},{date:5,value:4874},{date:6,value:5347},{date:7,value:41115},{date:8,value:81250},{date:9,value:81437},{date:10,value:103941},{date:11,value:105994},{date:12,value:116688},{date:13,value:118847},{date:14,value:101091},{date:15,value:107977},{date:16,value:129702},{date:17,value:109491},{date:18,value:106720},{date:19,value:52051},{date:20,value:37894},{date:21,value:29828},{date:22,value:21099}]},{values:[{date:22,value:21099},{date:23,value:14170}]}],tooltip:{dimension:{title:{value:e=>`${null==e?void 0:e.date}:00 ~ ${(null==e?void 0:e.date)+1}:00`},content:{key:"出行次数",value:e=>null==e?void 0:e.value}}}})}},4244:function(e,t,l){l.d(t,{uN:()=>a,k4:()=>c,Y4:()=>k,OI:()=>h,fW:()=>i,x1:()=>m});let a=l(3854).T,i="M5,2.5 C5.86848172,2.5 6.63353016,2.9428505 7.08164846,3.61505463 L7.16500985,3.74907618 L8.75,3.75 C9.44035594,3.75 10,4.30964406 10,5 C10,5.69035594 9.44035594,6.25 8.75,6.25 L7.16530319,6.25041709 L7.17274503,6.23746892 C6.74229507,6.99162571 5.93051612,7.5 5,7.5 C4.13151828,7.5 3.36646984,7.0571495 2.91835154,6.38494537 L2.83469681,6.25041709 L1.25,6.25 C0.559644063,6.25 0,5.69035594 0,5 C0,4.30964406 0.559644063,3.75 1.25,3.75 L2.83499015,3.74907618 L2.82725497,3.76253108 C3.25770493,3.00837429 4.06948388,2.5 5,2.5 Z M5,3.5 C4.17157288,3.5 3.5,4.17157288 3.5,5 C3.5,5.82842712 4.17157288,6.5 5,6.5 C5.82842712,6.5 6.5,5.82842712 6.5,5 C6.5,4.17157288 5.82842712,3.5 5,3.5 Z";var s=l(2676),o=l(7136),n=l(325),d=l(5271),r=l(7896);let u={style:{size:0,stroke:"#fff",lineWidth:2},state:{dimension_hover:{size:10}}},v={style:{fill:{gradient:"linear",x0:.5,y0:0,x1:.5,y1:1,stops:[{offset:0,opacity:.15},{offset:1,color:"#fff"}]}}},f={dimension:{shapeType:i,shapeFill:r.m7}};function c(e){let{xAxes:t,yAxes:l,xField:a="date",yField:i="value",tooltip:c,...y}=e,p=(0,n.Z)(f,c),h=d.useMemo(()=>(function(e){let{xAxes:t={},yAxes:l={},xField:a,yField:i}=e,s=(0,n.Z)({orient:"bottom",label:{visible:!0},type:"band"},t),o=(0,n.Z)({orient:"left",seriesIndex:[0,1,2]},l);return{color:["#C5D7F9",r.m7,"#C5D7F9"],series:[{type:"area",zIndex:0,id:"area1",dataIndex:0,xField:a,yField:i,tooltip:{visible:!1},hover:!1,select:!1,point:{visible:!1},area:{...v,style:{...v.style,cursor:"not-allowed"}}},{type:"area",id:"area2",zIndex:1,dataIndex:1,xField:a,yField:i,stack:!1,area:{...v,style:{...v.style}},point:{...u,style:{...u.style}}},{type:"area",id:"area3",dataIndex:2,xField:a,yField:i,zIndex:0,tooltip:{visible:!1},hover:!1,select:!1,point:{visible:!1},area:{...v,style:{...v.style,cursor:"not-allowed"}}}],axes:[o,s],crosshair:{xField:{visible:!0,line:{type:"line"}},followTooltip:!0}}})({yAxes:l,xAxes:t,xField:a,yField:i}),[l,t,a,i]);return(0,s.jsx)(o.h,{...h,...y,tooltip:p})}let y={mark:{visible:!1},dimension:{title:{visible:!1}}},p={color:[r.m7,r.m7],axes:[{visible:!1,orient:"bottom",type:"band"},{visible:!1,orient:"left",seriesIndex:[0,1]}],crosshair:{xField:{visible:!0,line:{type:"rect",width:10,style:{fill:"#314059"}}},followTooltip:!0}};function h(e){let{barWidth:t=6,data:l,xField:a="time",yField:i="value",tooltip:u,crosshair:v,...f}=e,c=d.useMemo(()=>{let e=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{xField:l="time",yField:a="value"}=t;return e.reduce((e,t)=>!1===t.select?[[...e[0],{[`${l}`]:t[`${l}`],[`${a}`]:0,select:!1}],e[1]]:[[...e[0],{[`${l}`]:t[`${l}`],[`${a}`]:0,select:!0}],[...e[1],{[`${l}`]:t[`${l}`],[`${a}`]:t[`${a}`]||0}]],[[],[]])}(l,{xField:a,yField:i});return[{values:e[0]},{values:e[1]}]},[l,a,i]),h=d.useMemo(()=>{let e=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{barWidth:t=6}=e;return{xField:{visible:!0,line:{type:"rect",width:t,style:{fill:"#314059"}}},followTooltip:!0}}({barWidth:t});return(0,n.Z)(e,v)},[v,t]),b=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{xField:t,yField:l,barWidth:a=6}=e;return[{type:"bar",dataIndex:0,stack:!0,xField:t,yField:l,tooltip:{visible:!1},bar:{style:{fill:e=>e.select?r.m7:"#314059",height:4,dy:-4}},barWidth:a},{type:"bar",dataIndex:1,stack:!0,xField:t,yField:l,barWidth:a}]}({xField:a,yField:i,barWidth:t}),x=(0,n.Z)(y,u);return(0,s.jsx)(o.h,{...p,data:c,tooltip:x,series:b,crosshair:h,...f})}var b=l(8940);let x={style:{size:0,stroke:"#fff",lineWidth:2},state:{dimension_hover:{size:10}}},m=(0,d.forwardRef)((e,t)=>{let{defaultMarkLine:l,markLine:a,point:i}=e,o=a,d=(0,n.Z)(x,i);if(!o&&l&&l.y){var r;o=[(0,n.Z)({y:r=l.y,endSymbol:{visible:!1},line:{style:{stroke:"#F72231",lineWidth:1}},label:{text:`均值: ${r}`,position:"insideEndTop",labelBackground:{visible:!1},style:{fontSize:10,fill:"#F72231"}},zIndex:0},l)]}return(0,s.jsx)(b.w,{...e,markLine:o,point:d,ref:t})}),k=l(8306).Q}}]);