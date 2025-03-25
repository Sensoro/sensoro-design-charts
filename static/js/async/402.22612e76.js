(self.webpackChunksensoro_design_charts=self.webpackChunksensoro_design_charts||[]).push([["402"],{6483:function(e){var t;t=function(){"use strict";var e="millisecond",t="second",n="minute",r="hour",a="week",i="month",u="quarter",s="year",c="date",o="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},m="en",h={};h[m]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||"th")+"]"}};var v="$isDayjsObject",$=function(e){return e instanceof b||!(!e||!e[v])},x=function e(t,n,r){var a;if(!t)return m;if("string"==typeof t){var i=t.toLowerCase();h[i]&&(a=i),n&&(h[i]=n,a=i);var u=t.split("-");if(!a&&u.length>1)return e(u[0])}else{var s=t.name;h[s]=t,a=s}return!r&&a&&(m=a),a||!r&&m},y=function(e,t){if($(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new b(n)},p={s:f,z:function(e){var t=-e.utcOffset(),n=Math.abs(t);return(t<=0?"+":"-")+f(Math.floor(n/60),2,"0")+":"+f(n%60,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),a=t.clone().add(r,i),u=n-a<0,s=t.clone().add(r+(u?-1:1),i);return+(-(r+(n-a)/(u?a-s:s-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(o){return({M:i,y:s,w:a,d:"day",D:c,h:r,m:n,s:t,ms:e,Q:u})[o]||String(o||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}};p.l=x,p.i=$,p.w=function(e,t){return y(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var b=function(){function f(e){this.$L=x(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[v]=!0}var m=f.prototype;return m.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(p.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(l);if(r){var a=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.init()},m.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},m.$utils=function(){return p},m.isValid=function(){return this.$d.toString()!==o},m.isSame=function(e,t){var n=y(e);return this.startOf(t)<=n&&n<=this.endOf(t)},m.isAfter=function(e,t){return y(e)<this.startOf(t)},m.isBefore=function(e,t){return this.endOf(t)<y(e)},m.$g=function(e,t,n){return p.u(e)?this[t]:this.set(n,e)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(e,u){var o=this,l=!!p.u(u)||u,d=p.p(e),f=function(e,t){var n=p.w(o.$u?Date.UTC(o.$y,t,e):new Date(o.$y,t,e),o);return l?n:n.endOf("day")},m=function(e,t){return p.w(o.toDate()[e].apply(o.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(t)),o)},h=this.$W,v=this.$M,$=this.$D,x="set"+(this.$u?"UTC":"");switch(d){case s:return l?f(1,0):f(31,11);case i:return l?f(1,v):f(0,v+1);case a:var y=this.$locale().weekStart||0,b=(h<y?h+7:h)-y;return f(l?$-b:$+(6-b),v);case"day":case c:return m(x+"Hours",0);case r:return m(x+"Minutes",1);case n:return m(x+"Seconds",2);case t:return m(x+"Milliseconds",3);default:return this.clone()}},m.endOf=function(e){return this.startOf(e,!1)},m.$set=function(a,u){var o,l=p.p(a),d="set"+(this.$u?"UTC":""),f=((o={}).day=d+"Date",o[c]=d+"Date",o[i]=d+"Month",o[s]=d+"FullYear",o[r]=d+"Hours",o[n]=d+"Minutes",o[t]=d+"Seconds",o[e]=d+"Milliseconds",o)[l],m="day"===l?this.$D+(u-this.$W):u;if(l===i||l===s){var h=this.clone().set(c,1);h.$d[f](m),h.init(),this.$d=h.set(c,Math.min(this.$D,h.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},m.set=function(e,t){return this.clone().$set(e,t)},m.get=function(e){return this[p.p(e)]()},m.add=function(e,u){var c,o=this;e=Number(e);var l=p.p(u),d=function(t){var n=y(o);return p.w(n.date(n.date()+Math.round(t*e)),o)};if(l===i)return this.set(i,this.$M+e);if(l===s)return this.set(s,this.$y+e);if("day"===l)return d(1);if(l===a)return d(7);var f=((c={})[n]=6e4,c[r]=36e5,c[t]=1e3,c)[l]||1,m=this.$d.getTime()+e*f;return p.w(m,this)},m.subtract=function(e,t){return this.add(-1*e,t)},m.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||o;var r=e||"YYYY-MM-DDTHH:mm:ssZ",a=p.z(this),i=this.$H,u=this.$m,s=this.$M,c=n.weekdays,l=n.months,f=n.meridiem,m=function(e,n,a,i){return e&&(e[n]||e(t,r))||a[n].slice(0,i)},h=function(e){return p.s(i%12||12,e,"0")},v=f||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(d,function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return p.s(t.$y,4,"0");case"M":return s+1;case"MM":return p.s(s+1,2,"0");case"MMM":return m(n.monthsShort,s,l,3);case"MMMM":return m(l,s);case"D":return t.$D;case"DD":return p.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return m(n.weekdaysMin,t.$W,c,2);case"ddd":return m(n.weekdaysShort,t.$W,c,3);case"dddd":return c[t.$W];case"H":return String(i);case"HH":return p.s(i,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return v(i,u,!0);case"A":return v(i,u,!1);case"m":return String(u);case"mm":return p.s(u,2,"0");case"s":return String(t.$s);case"ss":return p.s(t.$s,2,"0");case"SSS":return p.s(t.$ms,3,"0");case"Z":return a}return null}(e)||a.replace(":","")})},m.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},m.diff=function(e,c,o){var l,d=this,f=p.p(c),m=y(e),h=(m.utcOffset()-this.utcOffset())*6e4,v=this-m,$=function(){return p.m(d,m)};switch(f){case s:l=$()/12;break;case i:l=$();break;case u:l=$()/3;break;case a:l=(v-h)/6048e5;break;case"day":l=(v-h)/864e5;break;case r:l=v/36e5;break;case n:l=v/6e4;break;case t:l=v/1e3;break;default:l=v}return o?l:p.a(l)},m.daysInMonth=function(){return this.endOf(i).$D},m.$locale=function(){return h[this.$L]},m.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=x(e,t,!0);return r&&(n.$L=r),n},m.clone=function(){return p.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},f}(),g=b.prototype;return y.prototype=g,[["$ms",e],["$s",t],["$m",n],["$H",r],["$W","day"],["$M",i],["$y",s],["$D",c]].forEach(function(e){g[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),y.extend=function(e,t){return e.$i||(e(t,b,y),e.$i=!0),y},y.locale=x,y.isDayjs=$,y.unix=function(e){return y(1e3*e)},y.en=h[m],y.Ls=h,y.p={},y},e.exports=t()},2888:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>o});var r=n(2676),a=n(453),i=n(7898),u=n(370);function s(e){let t=Object.assign({h1:"h1",a:"a",pre:"pre",code:"code"},(0,a.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.h1,{id:"twostatearea",children:[(0,r.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#twostatearea",children:"#"}),"TwoStateArea"]}),"\n",(0,r.jsxs)(u.Z,{isMobile:"false",demoId:"_custom_TwoStateArea_1",children:[(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import type { TwoStateAreaProps } from '@sensoro-design/chart';\nimport { TwoStateArea } from '@sensoro-design/chart';\nimport dayjs from 'dayjs';\n\nfunction Example() {\n  const spec: TwoStateAreaProps = {\n    title: {\n      text: '基本示例',\n    },\n    height: 200,\n    data: [\n      { time: 1742491883387, value: 0 },\n      { time: 1742513903817, value: 0 },\n      { time: 1742535924334, value: 0 },\n      { time: 1742535927304, value: 0 },\n      { time: 1742556248721, value: 1 },\n      { time: 1742556267688, value: 1 },\n      { time: 1742556270759, value: 0 },\n      { time: 1742556273938, value: 0 },\n      { time: 1742578287174, value: 0 },\n      { time: 1742600307982, value: 0 },\n      { time: 1742622328202, value: 0 },\n      { time: 1742642652621, value: 0 },\n      { time: 1742642657613, value: 1 },\n      { time: 1742642675656, value: 0 },\n      { time: 1742664696142, value: 0 },\n      { time: 1742686716735, value: 0 },\n      { time: 1742686719717, value: 1 },\n      { time: 1742708737107, value: 0 },\n      { time: 1742708740147, value: 0 },\n      { time: 1742708743456, value: 0 },\n      { time: 1742729061449, value: 0 },\n      { time: 1742729065530, value: 0 },\n      { time: 1742729129970, value: 0 },\n      { time: 1742730757810, value: 1 },\n      { time: 1742730761206, value: 1 },\n      { time: 1742730764124, value: 0 },\n      { time: 1742752778304, value: 0 },\n      { time: 1742774798723, value: 0 },\n      { time: 1742796819162, value: 1 },\n      { time: 1742796822630, value: 0 },\n      { time: 1742815542852, value: 0 },\n      { time: 1742815561042, value: 0 },\n      { time: 1742837581209, value: 0 },\n      { time: 1742859601528, value: 0 },\n    ],\n    tooltip: {\n      dimension: {\n        title: {\n          value: (datum) => {\n            return dayjs(datum?.time).format('MM-DD HH:mm');\n          },\n        },\n        content: [\n          {\n            key: (datum) => {\n              return `屋内${datum?.value ? '有人' : '无人'} `;\n            },\n            value: '',\n          },\n        ],\n      },\n    },\n    xAxes: {\n      label: {\n        visible: true,\n        formatMethod: (data) => {\n          return dayjs(data as string).format('HH:mm');\n        },\n      },\n    },\n    crosshair: {\n      xField: {\n        visible: true,\n        line: {\n          type: 'line',\n        },\n      },\n    },\n  };\n\n  return (\n    <TwoStateArea {...spec} />\n  );\n};\n\nexport default Example;\n"})})}),(0,r.jsx)(i.default,{})]})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(s,e)})):s(e)}let o=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["custom%2FTwoStateArea.mdx"]={toc:[],title:"TwoStateArea",headingTitle:"TwoStateArea",frontmatter:{}}},7898:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(2676),a=n(9516),i=n(6483),u=n.n(i);let s=function(){return(0,r.jsx)(a.N3,{title:{text:"基本示例"},height:200,data:[{time:0x195b49c177b,value:0},{time:0x195b5ec18c9,value:0},{time:0x195b73c1a6e,value:0},{time:0x195b73c2608,value:0},{time:0x195b8723a91,value:1},{time:0x195b87284a8,value:1},{time:0x195b87290a7,value:0},{time:0x195b8729d12,value:0},{time:0x195b9c28246,value:0},{time:0x195bb12850e,value:0},{time:0x195bc62858a,value:0},{time:0x195bd98a5cd,value:0},{time:0x195bd98b94d,value:1},{time:0x195bd98ffc8,value:0},{time:0x195bee9014e,value:0},{time:0x195c039033f,value:0},{time:0x195c0390ee5,value:1},{time:0x195c1890453,value:0},{time:0x195c1891033,value:0},{time:0x195c1891d20,value:0},{time:0x195c2bf2449,value:0},{time:0x195c2bf343a,value:0},{time:0x195c2c02ff2,value:0},{time:0x195c2d906b2,value:1},{time:0x195c2d913f6,value:1},{time:0x195c2d91f5c,value:0},{time:0x195c4290840,value:0},{time:0x195c5790983,value:0},{time:0x195c6c90ada,value:1},{time:0x195c6c91866,value:0},{time:0x195c7e6be44,value:0},{time:0x195c7e70552,value:0},{time:0x195c9370599,value:0},{time:0x195ca870678,value:0}],tooltip:{dimension:{title:{value:e=>u()(null==e?void 0:e.time).format("MM-DD HH:mm")},content:[{key:e=>`屋内${(null==e?void 0:e.value)?"有人":"无人"} `,value:""}]}},xAxes:{label:{visible:!0,formatMethod:e=>u()(e).format("HH:mm")}},crosshair:{xField:{visible:!0,line:{type:"line"}}}})}}}]);