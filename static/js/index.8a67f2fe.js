(()=>{"use strict";var e={5567:function(e,t,o){o.r(t),o.d(t,{default:()=>y});var r=o(6059),i=o(9126);let l={xField:{line:{type:"line",width:1,style:{stroke:i.No,strokeOpacity:1,lineDash:[3,2]}}}},n={height:24,padding:{top:0,bottom:24},textStyle:{fontSize:16,fontWeight:500,fill:{type:"palette",key:"primaryFontColor"},lineHeight:50},subtextStyle:{fontSize:12,fill:i.RF}},a={tooltip:{offset:{x:10,y:10},panel:{padding:{top:12,left:12,right:12,bottom:12},backgroundColor:{type:"palette",key:"popupBackgroundColor"},border:{color:{type:"palette",key:"popupBackgroundColor"},width:0,radius:0},shadow:{x:0,y:4,blur:12,spread:0,color:{type:"palette",key:"shadowColor"}}},spaceRow:6,titleLabel:{fontSize:12,lineHeight:20,fontColor:i.Si,fontWeight:"bold",textBaseline:"middle",spacing:0},shape:{size:8,spacing:6},keyLabel:{fontSize:12,lineHeight:20,fontColor:"#fff",textBaseline:"middle",spacing:26},valueLabel:{fontSize:12,lineHeight:20,fontColor:"#fff",fontWeight:"bold",textBaseline:"middle",spacing:0}},title:n,axis:{domainLine:{visible:!0,style:{lineWidth:1,stroke:{type:"palette",key:"axisDomainColor"},strokeOpacity:1}},grid:{visible:!1,style:{lineWidth:1,stroke:{type:"palette",key:"axisGridColor"},strokeOpacity:1,lineDash:[3,2],opacity:1}},subGrid:{visible:!1,style:{lineWidth:1,stroke:{type:"palette",key:"axisGridColor"},strokeOpacity:1,lineDash:[4,4]}},tick:{visible:!0,inside:!1,tickSize:4,alignWithLabel:!0,style:{lineWidth:1,stroke:{type:"palette",key:"axisDomainColor"},opacity:1}},subTick:{visible:!1,tickSize:2,style:{lineWidth:1,stroke:{type:"palette",key:"axisDomainColor"},strokeOpacity:1}},label:{visible:!0,inside:!1,space:10,style:{fontSize:12,fill:{type:"palette",key:"axisLabelFontColor"},fontWeight:"normal",fillOpacity:1}},title:{space:10,padding:0,style:{fontSize:{type:"token",key:"l5FontSize"},lineHeight:{type:"token",key:"l5LineHeight"},fill:{type:"palette",key:"secondaryFontColor"},fontWeight:"normal",fillOpacity:1}}},crosshair:l,scrollBar:{horizontal:{height:10,slider:{style:{fill:{type:"palette",key:"scrollBarSliderColor"}}}},vertical:{width:10,slider:{style:{fill:{type:"palette",key:"scrollBarSliderColor"}}}}},discreteLegend:{orient:"bottom",position:"middle",padding:[16,24],title:{visible:!1,padding:0,textStyle:{fontSize:{type:"token",key:"l5FontSize"},lineHeight:{type:"token",key:"l5LineHeight"},fill:{type:"palette",key:"primaryFontColor"},fontWeight:"normal"},space:12},pager:{textStyle:{fill:{type:"palette",key:"discreteLegendPagerTextColor"}},handler:{style:{fill:{type:"palette",key:"discreteLegendPagerHandlerColor"}},state:{disable:{fill:{type:"palette",key:"discreteLegendPagerHandlerDisableColor"}}}}},item:{visible:!0,spaceCol:10,spaceRow:6,padding:2,background:{state:{selectedHover:{fill:{type:"palette",key:"hoverBackgroundColor"}},unSelectedHover:{fill:{type:"palette",key:"hoverBackgroundColor"}}}},shape:{space:6,style:{lineWidth:0,fillOpacity:1,opacity:1},state:{unSelected:{fillOpacity:.2,opacity:1}}},label:{space:6,style:{fill:{type:"palette",key:"secondaryFontColor",default:"#89909d"},fontSize:{type:"token",key:"l5FontSize"},lineHeight:{type:"token",key:"l5LineHeight"},opacity:1},state:{unSelected:{fill:{type:"palette",key:"disableFontColor"},opacity:1}}}},allowAllCanceled:!1}},s={fontFamily:"PingFang SC,Helvetica Neue,Microsoft Yahei,system-ui,-apple-system,segoe ui,Roboto,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol",fontSize:14,l1FontSize:32,l1LineHeight:"150%",l2FontSize:20,l2LineHeight:"140%",l3FontSize:16,l3LineHeight:"150%",l4FontSize:14,l4LineHeight:"150%",l5FontSize:12,l5LineHeight:"130%",l6FontSize:10,l6LineHeight:"120%"},d=[{maxDomainLength:8,scheme:i.K2},{maxDomainLength:16,scheme:i.BS},{scheme:i.Rt}],c={default:{dataScheme:d,palette:{backgroundColor:i.A2,borderColor:"rgba(229,230,235,1)",shadowColor:"rgba(0,0,0,0.1)",hoverBackgroundColor:"rgba(229,230,235,1)",sliderRailColor:"rgba(229,230,235,1)",sliderHandleColor:"rgba(255,255,255,1)",sliderTrackColor:"rgba(22,93,255,1)",popupBackgroundColor:i.JA,primaryFontColor:i.Uj,secondaryFontColor:"rgba(78,89,105,1)",tertiaryFontColor:"rgba(134,144,156,1)",axisLabelFontColor:i.Si,disableFontColor:"rgba(201,205,212,1)",axisMarkerFontColor:"rgba(255,255,255,1)",axisGridColor:i.j7,axisDomainColor:i.mS,dataZoomHandleStrokeColor:"rgba(169,174,184,1)",dataZoomChartColor:"rgba(201,205,212,1)",playerControllerColor:"rgba(22,93,255,1)",axisMarkerBackgroundColor:"rgba(29,33,41,1)",markLabelBackgroundColor:"rgba(229,230,235,1)",markLineStrokeColor:"rgba(78,89,105,1)",dangerColor:"rgba(245,63,63,1)",warningColor:"rgba(255,125,0,1)",successColor:"rgba(0,180,42,1)",infoColor:"rgba(22,93,255,1)"}}};var f=o(5271),p=o(1859);let{ThemeManager:u}=r.bM;u.registerTheme("sensoroDesignLight",{name:"sensoroDesignLight",description:"Sensoro Design - light",type:"light",background:{type:"palette",key:"backgroundColor"},colorScheme:c,token:s,padding:24,series:{area:{area:{style:{fill:{gradient:"linear",x0:.5,y0:0,x1:.5,y1:1,stops:[{offset:0,opacity:.15},{offset:1,color:"#fff"}]}}}}},component:a}),u.registerTheme("sensoroDesignDark",{name:"sensoroDesignDark",description:"Sensoro Design - dark",type:"dark",background:{type:"palette",key:"backgroundColor"},colorScheme:{default:{dataScheme:d,palette:{backgroundColor:"#161D2A",borderColor:"rgba(229,230,235,1)",shadowColor:"rgba(0,0,0,0.1)",hoverBackgroundColor:"rgba(229,230,235,1)",sliderRailColor:"rgba(229,230,235,1)",sliderHandleColor:"rgba(255,255,255,1)",sliderTrackColor:"rgba(22,93,255,1)",popupBackgroundColor:"#314059",primaryFontColor:"#8194B5",secondaryFontColor:"rgba(78,89,105,1)",tertiaryFontColor:"rgba(134,144,156,1)",axisLabelFontColor:"#546789",disableFontColor:"rgba(201,205,212,1)",axisMarkerFontColor:"rgba(255,255,255,1)",axisGridColor:"#293449",axisDomainColor:"#293449",dataZoomHandleStrokeColor:"rgba(169,174,184,1)",dataZoomChartColor:"rgba(201,205,212,1)",playerControllerColor:"rgba(22,93,255,1)",axisMarkerBackgroundColor:"rgba(29,33,41,1)",markLabelBackgroundColor:"rgba(229,230,235,1)",markLineStrokeColor:"rgba(78,89,105,1)",dangerColor:"rgba(245,63,63,1)",warningColor:"rgba(255,125,0,1)",successColor:"rgba(0,180,42,1)",infoColor:"rgba(22,93,255,1)"}}},token:s,padding:24,series:{area:{area:{style:{fill:{gradient:"linear",x0:.5,y0:0,x1:.5,y1:1,stops:[{offset:0,color:"#4E85DD",opacity:.8},{offset:1,color:"#4E85DD",opacity:0}]}}}}},component:a});let y=function(){let e=(0,p.e7)();return f.useEffect(()=>{u.setCurrentTheme(e?"sensoroDesignDark":"sensoroDesignLight")},[e]),null}},6059:function(e,t,o){o.d(t,{uN:()=>r,k4:()=>u,OI:()=>b,by:()=>m,bM:()=>F.H,x1:()=>k,Y4:()=>v,fW:()=>i});let r=o(633).T,i="M5,2.5 C5.86848172,2.5 6.63353016,2.9428505 7.08164846,3.61505463 L7.16500985,3.74907618 L8.75,3.75 C9.44035594,3.75 10,4.30964406 10,5 C10,5.69035594 9.44035594,6.25 8.75,6.25 L7.16530319,6.25041709 L7.17274503,6.23746892 C6.74229507,6.99162571 5.93051612,7.5 5,7.5 C4.13151828,7.5 3.36646984,7.0571495 2.91835154,6.38494537 L2.83469681,6.25041709 L1.25,6.25 C0.559644063,6.25 0,5.69035594 0,5 C0,4.30964406 0.559644063,3.75 1.25,3.75 L2.83499015,3.74907618 L2.82725497,3.76253108 C3.25770493,3.00837429 4.06948388,2.5 5,2.5 Z M5,3.5 C4.17157288,3.5 3.5,4.17157288 3.5,5 C3.5,5.82842712 4.17157288,6.5 5,6.5 C5.82842712,6.5 6.5,5.82842712 6.5,5 C6.5,4.17157288 5.82842712,3.5 5,3.5 Z";var l=o(2676),n=o(1696),a=o(325),s=o(5271),d=o(9126);let c={style:{size:0,stroke:"#fff",lineWidth:2},state:{dimension_hover:{size:10}}},f={style:{fill:{gradient:"linear",x0:.5,y0:0,x1:.5,y1:1,stops:[{offset:0,opacity:.15},{offset:1,color:"#fff"}]}}},p={dimension:{shapeType:i,shapeFill:d.m7}};function u(e){let{xAxes:t,yAxes:o,xField:r="date",yField:i="value",tooltip:u,...y}=e,g=(0,a.Z)(p,u),b=s.useMemo(()=>(function(e){let{xAxes:t={},yAxes:o={},xField:r,yField:i}=e,l=(0,a.Z)({orient:"bottom",label:{visible:!0},type:"band"},t),n=(0,a.Z)({orient:"left",seriesIndex:[0,1,2]},o);return{color:["#C5D7F9",d.m7,"#C5D7F9"],series:[{type:"area",zIndex:0,id:"area1",dataIndex:0,xField:r,yField:i,tooltip:{visible:!1},hover:!1,select:!1,point:{visible:!1},area:{...f,style:{...f.style,cursor:"not-allowed"}}},{type:"area",id:"area2",zIndex:1,dataIndex:1,xField:r,yField:i,stack:!1,area:{...f,style:{...f.style}},point:{...c,style:{...c.style}}},{type:"area",id:"area3",dataIndex:2,xField:r,yField:i,zIndex:0,tooltip:{visible:!1},hover:!1,select:!1,point:{visible:!1},area:{...f,style:{...f.style,cursor:"not-allowed"}}}],axes:[n,l],crosshair:{xField:{visible:!0,line:{type:"line"}},followTooltip:!0}}})({yAxes:o,xAxes:t,xField:r,yField:i}),[o,t,r,i]);return(0,l.jsx)(n.h,{...b,...y,tooltip:g})}let y={mark:{visible:!1},dimension:{title:{visible:!1}}},g={color:[d.m7,d.m7],axes:[{visible:!1,orient:"bottom",type:"band"},{visible:!1,orient:"left",seriesIndex:[0,1]}],crosshair:{xField:{visible:!0,line:{type:"rect",width:10,style:{fill:"#314059"}}},followTooltip:!0}};function b(e){let{barWidth:t=6,data:o,xField:r="time",yField:i="value",tooltip:c,crosshair:f,...p}=e,u=s.useMemo(()=>{let e=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{xField:o="time",yField:r="value"}=t;return e.reduce((e,t)=>!1===t.select?[[...e[0],{[`${o}`]:t[`${o}`],[`${r}`]:0,select:!1}],e[1]]:[[...e[0],{[`${o}`]:t[`${o}`],[`${r}`]:0,select:!0}],[...e[1],{[`${o}`]:t[`${o}`],[`${r}`]:t[`${r}`]||0}]],[[],[]])}(o,{xField:r,yField:i});return[{values:e[0]},{values:e[1]}]},[o,r,i]),b=s.useMemo(()=>{let e=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{barWidth:t=6}=e;return{xField:{visible:!0,line:{type:"rect",width:t,style:{fill:"#314059"}}},followTooltip:!0}}({barWidth:t});return(0,a.Z)(e,f)},[f,t]),h=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{xField:t,yField:o,barWidth:r=6}=e;return[{type:"bar",dataIndex:0,stack:!0,xField:t,yField:o,tooltip:{visible:!1},bar:{style:{fill:e=>e.select?d.m7:"#314059",height:4,dy:-4}},barWidth:r},{type:"bar",dataIndex:1,stack:!0,xField:t,yField:o,barWidth:r}]}({xField:r,yField:i,barWidth:t}),C=(0,a.Z)(y,c);return(0,l.jsx)(n.h,{...g,data:u,tooltip:C,series:h,crosshair:b,...p})}var h=o(4852);let C={style:{size:0,stroke:"#fff",lineWidth:2},state:{dimension_hover:{size:10}}};function k(e){let{defaultMarkLine:t,markLine:o,point:r}=e,i=o,n=(0,a.Z)(C,r);if(!i&&t&&t.y){var s;i=[(0,a.Z)({y:s=t.y,endSymbol:{visible:!1},line:{style:{stroke:"#F72231",lineWidth:1}},label:{text:`均值: ${s}`,position:"insideEndTop",labelBackground:{visible:!1},style:{fontSize:10,fill:"#F72231"}},zIndex:0},t)]}return(0,l.jsx)(h.w,{...e,markLine:i,point:n})}let m=o(4929).u,v=o(7782).Q;var F=o(4312)},9126:function(e,t,o){o.d(t,{A2:()=>r,BS:()=>O,JA:()=>d,K2:()=>z,No:()=>c,RF:()=>a,Rt:()=>w,Si:()=>n,Uj:()=>s,j7:()=>i,m7:()=>p,mS:()=>l});let r="#fff",i="#F1F2F4",l="#ECEEF0",n="#C2C7CE",a="#6D7789",s="#0A1B39",d="rgba(10,27,57,0.8)",c="#82B6FF",f="#94C1FF",p="#588BEE",u="#46DFAA",y="#17C28F",g="#FFD45F",b="#FDB844",h="#FF988B",C="#EE6159",k="#5DE3FF",m="#37C7E6",v="#FF8AC9",F="#DE5193",x="#9DF26A",S="#81D54F",L="#E495FF",D="#AA60E2",z=[p,y,b,C,m,F,S,D],O=[p,f,y,u,b,g,C,h,m,k,F,v,S,x,D,L],w=[p,f,"#005AB6",y,u,"#008C5D",b,g,"#C08300",C,h,"#B0272B",m,k,"#0091AF",F,v,"#A30861",S,x,"#489E10",D,L,"#732CAA"]},3638:function(){}},t={};function o(r){var i=t[r];if(void 0!==i)return i.exports;var l=t[r]={exports:{}};return e[r].call(l.exports,l,l.exports,o),l.exports}o.m=e,o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};o.t=function(r,i){if(1&i&&(r=this(r)),8&i||"object"==typeof r&&r&&(4&i&&r.__esModule||16&i&&"function"==typeof r.then))return r;var l=Object.create(null);o.r(l);var n={};e=e||[null,t({}),t([]),t(t)];for(var a=2&i&&r;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach(function(e){n[e]=function(){return r[e]}});return n.default=function(){return r},o.d(l,n),l}})(),o.d=function(e,t){for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce(function(t,r){return o.f[r](e,t),t},[]))},o.u=function(e){return"static/js/async/"+e+"."+({11:"2b0f2272",143:"fc9839a5",218:"26b1de36",219:"45b71498",240:"943f94a0",414:"8662b122",418:"b391fb63",531:"266b2728",532:"cba7aae4",587:"e4fff730",59:"79d0c37d",590:"36eb8cb2",639:"59852728",664:"72ab1e33",77:"b44cfeae",799:"bc062b1d",81:"d66fbbd2",841:"13831b56",849:"b59fd759",859:"13b6af22",886:"11dad5f9",887:"e8a28f9d",890:"49fd0df1",933:"ff4389fe",94:"de20aecc"})[e]+".js"},o.miniCssF=function(e){return""+e+".css"},o.h=function(){return"dc306f52153691b3"},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},(()=>{var e={},t="sensoro-design-charts:";o.l=function(r,i,l,n){if(e[r]){e[r].push(i);return}if(void 0!==l)for(var a,s,d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var f=d[c];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+l){a=f;break}}a||(s=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.setAttribute("data-webpack",t+l),a.src=r),e[r]=[i];var p=function(t,o){a.onerror=a.onload=null,clearTimeout(u);var i=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),i&&i.forEach(function(e){return e(o)}),t)return t(o)},u=setTimeout(p.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=p.bind(null,a.onerror),a.onload=p.bind(null,a.onload),s&&document.head.appendChild(a)}})(),o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e=[];o.O=function(t,r,i,l){if(r){l=l||0;for(var n=e.length;n>0&&e[n-1][2]>l;n--)e[n]=e[n-1];e[n]=[r,i,l];return}for(var a=1/0,n=0;n<e.length;n++){for(var r=e[n][0],i=e[n][1],l=e[n][2],s=!0,d=0;d<r.length;d++)(!1&l||a>=l)&&Object.keys(o.O).every(function(e){return o.O[e](r[d])})?r.splice(d--,1):(s=!1,l<a&&(a=l));if(s){e.splice(n--,1);var c=i();void 0!==c&&(t=c)}}return t}})(),o.p="/sensoro-design-charts/",o.rv=function(){return"1.2.2"},(()=>{var e={980:0};o.f.j=function(t,r){var i=o.o(e,t)?e[t]:void 0;if(0!==i){if(i)r.push(i[2]);else{var l=new Promise(function(o,r){i=e[t]=[o,r]});r.push(i[2]=l);var n=o.p+o.u(t),a=Error();o.l(n,function(r){if(o.o(e,t)&&(0!==(i=e[t])&&(e[t]=void 0),i)){var l=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+l+": "+n+")",a.name="ChunkLoadError",a.type=l,a.request=n,i[1](a)}},"chunk-"+t,t)}}},o.O.j=function(t){return 0===e[t]};var t=function(t,r){var i,l,n=r[0],a=r[1],s=r[2],d=0;if(n.some(function(t){return 0!==e[t]})){for(i in a)o.o(a,i)&&(o.m[i]=a[i]);if(s)var c=s(o)}for(t&&t(r);d<n.length;d++)l=n[d],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(c)},r=self.webpackChunksensoro_design_charts=self.webpackChunksensoro_design_charts||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),o.ruid="bundler=rspack@1.2.2";var r=o.O(void 0,["212","361","118","503"],function(){return o(905)});r=o.O(r)})();