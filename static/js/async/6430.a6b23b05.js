"use strict";(self.webpackChunksensoro_design_charts=self.webpackChunksensoro_design_charts||[]).push([["6430"],{46514:function(e,t,l){l.r(t),l.d(t,{default:()=>d});var a=l(52676),n=l(89107),o=l(75271);let i=[{nodes:[{name:"今日巡航次数",value:160,total:1087875,children:[{name:"公共安全",value:40,total:287875,children:[{name:"高风险",value:10,total:18764},{name:"中风险",value:10,total:22329},{name:"低风险",value:10,total:43093},{name:"无风险",value:10,total:763875}]},{name:"交通安全",value:40,total:200653,children:[{name:"高风险",value:10,total:18764},{name:"中风险",value:10,total:22329},{name:"低风险",value:10,total:43093},{name:"无风险",value:10,total:763875}]},{name:"市容市政",value:40,total:406765,children:[{name:"高风险",value:10,total:18764},{name:"中风险",value:10,total:22329},{name:"低风险",value:10,total:43093},{name:"无风险",value:10,total:763875}]},{name:"城市秩序",value:40,total:82854,children:[{name:"高风险",value:10,total:18764},{name:"中风险",value:10,total:22329},{name:"低风险",value:10,total:43093},{name:"无风险",value:10,total:763875}]}]}]}],r=["#423CD1","#E7474D","#E7AF2C","#51C2E1","#3AC583"],u={今日巡航次数:r[0],公共安全:r[0],交通安全:r[0],市容市政:r[0],城市秩序:r[0],高风险:r[1],中风险:r[2],低风险:r[3],无风险:r[4]};function s(e){let{style:t}=e;return(0,a.jsx)("div",{style:{position:"absolute",width:"100px",visibility:"hidden",backdropFilter:"blur(20px)",background:"rgba(49,64,89,0.35)",padding:16,top:0,left:0,...t},children:"我是 Tooltip"})}let d=function(){let e=o.useRef(null),[t,l]=o.useState({});return o.useEffect(()=>{let t=setTimeout(()=>{console.log(e.current);let t=e.current;t&&t.setTooltipHandler({showTooltip:(e,t,a)=>{if(console.log(e,t,a),l(e=>({...e,left:a.event.x+30,top:a.event.y+30})),!a.changePositionOnly)return l(e=>({...e,visibility:"visible"})),0},hideTooltip:()=>(l(e=>({...e,visibility:"hidden"})),0),release:()=>{}})},500);return()=>{t&&clearTimeout(t)}},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.bQ,{height:600,data:[{values:i}],color:{type:"ordinal",range:r,domain:[],specified:u},categoryField:"name",valueField:"value",nodeAlign:"left",nodeWidth:4,nodeKey:e=>e.name,nodeHeight:e=>0===e.depth?160:40,label:{visible:!0,offset:8,formatMethod(e,t){var l;return`${null==t?void 0:t.name} ${null==t?void 0:null===(l=t.total)||void 0===l?void 0:l.toLocaleString()}`},style:{fill:"#F6F9FE",fontSize:12}},link:{style:{fill:e=>({gradient:"linear",x0:0,y0:0,x1:1,y1:1,stops:[{offset:0,color:u[null==e?void 0:e.source]},{offset:1,color:u[null==e?void 0:e.target]}]})}},emphasis:{enable:!0,trigger:"hover",effect:"related"},skipFunctionDiff:!0,ref:e}),(0,a.jsx)(s,{style:t})]})}}}]);