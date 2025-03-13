(self.webpackChunksensoro_design_charts=self.webpackChunksensoro_design_charts||[]).push([["418"],{6483:function(e){var t;t=function(){"use strict";var e="millisecond",t="second",n="minute",r="hour",i="week",s="month",a="quarter",u="year",o="date",c="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},f="en",m={};m[f]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||"th")+"]"}};var $="$isDayjsObject",y=function(e){return e instanceof v||!(!e||!e[$])},g=function e(t,n,r){var i;if(!t)return f;if("string"==typeof t){var s=t.toLowerCase();m[s]&&(i=s),n&&(m[s]=n,i=s);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var u=t.name;m[u]=t,i=u}return!r&&i&&(f=i),i||!r&&f},p=function(e,t){if(y(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new v(n)},b={s:h,z:function(e){var t=-e.utcOffset(),n=Math.abs(t);return(t<=0?"+":"-")+h(Math.floor(n/60),2,"0")+":"+h(n%60,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,s),a=n-i<0,u=t.clone().add(r+(a?-1:1),s);return+(-(r+(n-i)/(a?i-u:u-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(c){return({M:s,y:u,w:i,d:"day",D:o,h:r,m:n,s:t,ms:e,Q:a})[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}};b.l=g,b.i=y,b.w=function(e,t){return p(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var v=function(){function h(e){this.$L=g(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[$]=!0}var f=h.prototype;return f.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(b.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(t)}(e),this.init()},f.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},f.$utils=function(){return b},f.isValid=function(){return this.$d.toString()!==c},f.isSame=function(e,t){var n=p(e);return this.startOf(t)<=n&&n<=this.endOf(t)},f.isAfter=function(e,t){return p(e)<this.startOf(t)},f.isBefore=function(e,t){return this.endOf(t)<p(e)},f.$g=function(e,t,n){return b.u(e)?this[t]:this.set(n,e)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(e,a){var c=this,l=!!b.u(a)||a,d=b.p(e),h=function(e,t){var n=b.w(c.$u?Date.UTC(c.$y,t,e):new Date(c.$y,t,e),c);return l?n:n.endOf("day")},f=function(e,t){return b.w(c.toDate()[e].apply(c.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(t)),c)},m=this.$W,$=this.$M,y=this.$D,g="set"+(this.$u?"UTC":"");switch(d){case u:return l?h(1,0):h(31,11);case s:return l?h(1,$):h(0,$+1);case i:var p=this.$locale().weekStart||0,v=(m<p?m+7:m)-p;return h(l?y-v:y+(6-v),$);case"day":case o:return f(g+"Hours",0);case r:return f(g+"Minutes",1);case n:return f(g+"Seconds",2);case t:return f(g+"Milliseconds",3);default:return this.clone()}},f.endOf=function(e){return this.startOf(e,!1)},f.$set=function(i,a){var c,l=b.p(i),d="set"+(this.$u?"UTC":""),h=((c={}).day=d+"Date",c[o]=d+"Date",c[s]=d+"Month",c[u]=d+"FullYear",c[r]=d+"Hours",c[n]=d+"Minutes",c[t]=d+"Seconds",c[e]=d+"Milliseconds",c)[l],f="day"===l?this.$D+(a-this.$W):a;if(l===s||l===u){var m=this.clone().set(o,1);m.$d[h](f),m.init(),this.$d=m.set(o,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](f);return this.init(),this},f.set=function(e,t){return this.clone().$set(e,t)},f.get=function(e){return this[b.p(e)]()},f.add=function(e,a){var o,c=this;e=Number(e);var l=b.p(a),d=function(t){var n=p(c);return b.w(n.date(n.date()+Math.round(t*e)),c)};if(l===s)return this.set(s,this.$M+e);if(l===u)return this.set(u,this.$y+e);if("day"===l)return d(1);if(l===i)return d(7);var h=((o={})[n]=6e4,o[r]=36e5,o[t]=1e3,o)[l]||1,f=this.$d.getTime()+e*h;return b.w(f,this)},f.subtract=function(e,t){return this.add(-1*e,t)},f.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||c;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=b.z(this),s=this.$H,a=this.$m,u=this.$M,o=n.weekdays,l=n.months,h=n.meridiem,f=function(e,n,i,s){return e&&(e[n]||e(t,r))||i[n].slice(0,s)},m=function(e){return b.s(s%12||12,e,"0")},$=h||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(d,function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return b.s(t.$y,4,"0");case"M":return u+1;case"MM":return b.s(u+1,2,"0");case"MMM":return f(n.monthsShort,u,l,3);case"MMMM":return f(l,u);case"D":return t.$D;case"DD":return b.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return f(n.weekdaysMin,t.$W,o,2);case"ddd":return f(n.weekdaysShort,t.$W,o,3);case"dddd":return o[t.$W];case"H":return String(s);case"HH":return b.s(s,2,"0");case"h":return m(1);case"hh":return m(2);case"a":return $(s,a,!0);case"A":return $(s,a,!1);case"m":return String(a);case"mm":return b.s(a,2,"0");case"s":return String(t.$s);case"ss":return b.s(t.$s,2,"0");case"SSS":return b.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")})},f.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},f.diff=function(e,o,c){var l,d=this,h=b.p(o),f=p(e),m=(f.utcOffset()-this.utcOffset())*6e4,$=this-f,y=function(){return b.m(d,f)};switch(h){case u:l=y()/12;break;case s:l=y();break;case a:l=y()/3;break;case i:l=($-m)/6048e5;break;case"day":l=($-m)/864e5;break;case r:l=$/36e5;break;case n:l=$/6e4;break;case t:l=$/1e3;break;default:l=$}return c?l:b.a(l)},f.daysInMonth=function(){return this.endOf(s).$D},f.$locale=function(){return m[this.$L]},f.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=g(e,t,!0);return r&&(n.$L=r),n},f.clone=function(){return b.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},h}(),M=v.prototype;return p.prototype=M,[["$ms",e],["$s",t],["$m",n],["$H",r],["$W","day"],["$M",s],["$y",u],["$D",o]].forEach(function(e){M[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),p.extend=function(e,t){return e.$i||(e(t,v,p),e.$i=!0),p},p.locale=g,p.isDayjs=y,p.unix=function(e){return p(1e3*e)},p.en=m[f],p.Ls=m,p.p={},p},e.exports=t()},9634:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>c});var r=n(2676),i=n(453),s=n(3136),a=n(370);function u(e){let t=Object.assign({h1:"h1",a:"a",h2:"h2",pre:"pre",code:"code"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.h1,{id:"区间柱图",children:[(0,r.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#区间柱图",children:"#"}),"区间柱图"]}),"\n",(0,r.jsxs)(t.h2,{id:"同一维度分布图",children:[(0,r.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#同一维度分布图",children:"#"}),"同一维度分布图"]}),"\n",(0,r.jsxs)(a.Z,{isMobile:"false",demoId:"_demos_config_RangeColumn_1",children:[(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import type { RangeColumnProps } from '@sensoro-design/chart';\nimport { RangeColumn } from '@sensoro-design/chart';\nimport dayjs from 'dayjs';\n\nconst list = [\n  { y: '在床', x: [1740995591000, 1740995830000] },\n  { y: '在床', x: [1740995934000, 1740996089000] },\n  { y: '在床', x: [1740996274000, 1740996438000] },\n  { y: '在床', x: [1740996631000, 1740997169000] },\n  { y: '在床', x: [1740997577000, 1740997691000] },\n  { y: '在床', x: [1740997811000, 1740998902000] },\n];\n\nconst data = list.map((item) => {\n  const { x } = item;\n  return {\n    name: '1',\n    start: x[0],\n    end: x[1],\n    type: x[0] === 1740996274000 ? 'error' : 'normal',\n  };\n});\n\nlet startLabel = '';\n\nfunction Example() {\n  const spec: RangeColumnProps = {\n    height: 160,\n    data: {\n      values: data,\n    },\n    direction: 'horizontal',\n    yField: 'name',\n    xField: ['start', 'end'],\n    tooltip: {\n      visible: false,\n    },\n    bar: {\n      style: {\n        height: 12,\n        fill: (datum) => {\n          return datum.type === 'error' ? 'rgba(238,97,89,0.25)' : '#588BEE';\n        },\n      },\n    },\n    axes: [\n      {\n        orient: 'left',\n        label: {\n          visible: false,\n        },\n        domainLine: {\n          visible: false,\n        },\n      },\n      {\n        orient: 'bottom',\n        type: 'time',\n        domainLine: {\n          visible: true,\n        },\n        label: {\n          lastVisible: true,\n          firstVisible: true,\n          formatMethod: (_, datum) => {\n            const label = datum?.label;\n            if (!startLabel || startLabel === label) {\n              startLabel = label;\n              return dayjs(label).format('DD-MM HH:mm');\n            }\n            return dayjs(label).format('HH:mm');\n          },\n        },\n        innerOffset: {\n          left: 20,\n          right: 20,\n        },\n      },\n    ],\n    crosshair: [\n      {\n        yField: {\n          visible: false,\n        },\n      },\n    ],\n  };\n\n  return (\n    <RangeColumn {...spec} />\n  );\n}\n\nexport default Example;\n"})})}),(0,r.jsx)(s.default,{})]})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(u,e)})):u(e)}let c=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["demos%2Fconfig%2FRangeColumn.mdx"]={toc:[{id:"同一维度分布图",text:"同一维度分布图",depth:2}],title:"区间柱图",headingTitle:"区间柱图",frontmatter:{}}},3136:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>c});var r=n(2676),i=n(6059),s=n(6483),a=n.n(s);let u=[{y:"在床",x:[1740995591e3,174099583e4]},{y:"在床",x:[1740995934e3,1740996089e3]},{y:"在床",x:[1740996274e3,1740996438e3]},{y:"在床",x:[1740996631e3,1740997169e3]},{y:"在床",x:[1740997577e3,1740997691e3]},{y:"在床",x:[1740997811e3,1740998902e3]}].map(e=>{let{x:t}=e;return{name:"1",start:t[0],end:t[1],type:1740996274e3===t[0]?"error":"normal"}}),o="",c=function(){return(0,r.jsx)(i.Y4,{height:160,data:{values:u},direction:"horizontal",yField:"name",xField:["start","end"],tooltip:{visible:!1},bar:{style:{height:12,fill:e=>"error"===e.type?"rgba(238,97,89,0.25)":"#588BEE"}},axes:[{orient:"left",label:{visible:!1},domainLine:{visible:!1}},{orient:"bottom",type:"time",domainLine:{visible:!0},label:{lastVisible:!0,firstVisible:!0,formatMethod:(e,t)=>{let n=null==t?void 0:t.label;return o&&o!==n?a()(n).format("HH:mm"):(o=n,a()(n).format("DD-MM HH:mm"))}},innerOffset:{left:20,right:20}}],crosshair:[{yField:{visible:!1}}]})}}}]);