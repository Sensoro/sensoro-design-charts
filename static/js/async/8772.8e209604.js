"use strict";(self.webpackChunksensoro_design_charts=self.webpackChunksensoro_design_charts||[]).push([["8772"],{68478:function(e,l,t){t.r(l),t.d(l,{default:()=>s});var a=t(52676),u=t(61827),i=t(90565),d=t(745),o=t(47356),n=t(75271);let v={gradient:"linear",x0:.5,y0:0,x1:.5,y1:1,stops:[{offset:0,color:"rgba(43,109,229,0.35)"},{offset:1,color:"rgba(43,109,229,0)"}]},s=function(){let e=n.useRef(),[,l,t]=(0,u.$k)(!0),[,s,r]=(0,u.$k)(null),[c,f]=n.useState([]);n.useEffect(()=>{e.current&&clearTimeout(e.current)},[]);let p=()=>{let a=r(),u=t(),i=[];!(0,o.F)(a)&&i.push({endSymbol:{visible:!1},line:{style:{stroke:v,zIndex:1,lineDash:[0],lineWidth:24}},x:a,label:u?{text:"再次点击可取消选中",style:{fill:d.A2},labelBackground:{visible:!0,padding:{top:8,left:12,right:12,bottom:8},style:{fill:d.JA}},dy:-8}:void 0}),e.current&&clearTimeout(e.current),u&&(e.current=setTimeout(()=>{l(!1),p()},3e3)),f(i)};return(0,a.jsx)(i.k4,{title:{text:"事件"},height:400,data:[{values:[{date:0,value:11635},{date:1,value:8730},{date:2,value:6931}]},{values:[{date:2,value:6931},{date:3,value:6850},{date:4,value:5366},{date:5,value:4874},{date:6,value:5347},{date:7,value:41115},{date:8,value:81250},{date:9,value:81437},{date:10,value:103941},{date:11,value:105994},{date:12,value:116688},{date:13,value:118847},{date:14,value:101091},{date:15,value:107977},{date:16,value:129702},{date:17,value:109491},{date:18,value:106720},{date:19,value:52051},{date:20,value:37894},{date:21,value:29828},{date:22,value:21099}]},{values:[{date:22,value:21099},{date:23,value:14170}]}],tooltip:{dimension:{title:{value:e=>`${null==e?void 0:e.date}:00 ~ ${(null==e?void 0:e.date)+1}:00`},content:{key:"出行次数",value:e=>null==e?void 0:e.value}}},cursor:"pointer",markLine:c,onDimensionClick:e=>{var l;if((null==e?void 0:null===(l=e.model)||void 0===l?void 0:l.userId)==="area2"||"line"===e.node.type){let l=e.dimensionInfo[0].value;r()===l?s(null):s(l),p()}},crosshair:[{xField:{visible:!0,line:{type:"line"}},followTooltip:!0},{xField:{visible:!0,line:{type:"rect",width:24,style:{fill:v}}},followTooltip:!0}]})}}}]);