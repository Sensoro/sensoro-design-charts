(self.webpackChunksensoro_design_charts=self.webpackChunksensoro_design_charts||[]).push([["560"],{6483:function(t){var e;e=function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="week",a="month",s="quarter",u="year",c="date",o="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,l=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},d="en",$={};$[d]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||"th")+"]"}};var m="$isDayjsObject",v=function(t){return t instanceof M||!(!t||!t[m])},y=function t(e,n,r){var i;if(!e)return d;if("string"==typeof e){var a=e.toLowerCase();$[a]&&(i=a),n&&($[a]=n,i=a);var s=e.split("-");if(!i&&s.length>1)return t(s[0])}else{var u=e.name;$[u]=e,i=u}return!r&&i&&(d=i),i||!r&&d},x=function(t,e){if(v(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new M(n)},b={s:h,z:function(t){var e=-t.utcOffset(),n=Math.abs(e);return(e<=0?"+":"-")+h(Math.floor(n/60),2,"0")+":"+h(n%60,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,a),s=n-i<0,u=e.clone().add(r+(s?-1:1),a);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(o){return({M:a,y:u,w:i,d:"day",D:c,h:r,m:n,s:e,ms:t,Q:s})[o]||String(o||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}};b.l=y,b.i=v,b.w=function(t,e){return x(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var M=function(){function h(t){this.$L=y(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[m]=!0}var d=h.prototype;return d.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(f);if(r){var i=r[2]-1||0,a=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(e)}(t),this.init()},d.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},d.$utils=function(){return b},d.isValid=function(){return this.$d.toString()!==o},d.isSame=function(t,e){var n=x(t);return this.startOf(e)<=n&&n<=this.endOf(e)},d.isAfter=function(t,e){return x(t)<this.startOf(e)},d.isBefore=function(t,e){return this.endOf(e)<x(t)},d.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(t,s){var o=this,f=!!b.u(s)||s,l=b.p(t),h=function(t,e){var n=b.w(o.$u?Date.UTC(o.$y,e,t):new Date(o.$y,e,t),o);return f?n:n.endOf("day")},d=function(t,e){return b.w(o.toDate()[t].apply(o.toDate("s"),(f?[0,0,0,0]:[23,59,59,999]).slice(e)),o)},$=this.$W,m=this.$M,v=this.$D,y="set"+(this.$u?"UTC":"");switch(l){case u:return f?h(1,0):h(31,11);case a:return f?h(1,m):h(0,m+1);case i:var x=this.$locale().weekStart||0,M=($<x?$+7:$)-x;return h(f?v-M:v+(6-M),m);case"day":case c:return d(y+"Hours",0);case r:return d(y+"Minutes",1);case n:return d(y+"Seconds",2);case e:return d(y+"Milliseconds",3);default:return this.clone()}},d.endOf=function(t){return this.startOf(t,!1)},d.$set=function(i,s){var o,f=b.p(i),l="set"+(this.$u?"UTC":""),h=((o={}).day=l+"Date",o[c]=l+"Date",o[a]=l+"Month",o[u]=l+"FullYear",o[r]=l+"Hours",o[n]=l+"Minutes",o[e]=l+"Seconds",o[t]=l+"Milliseconds",o)[f],d="day"===f?this.$D+(s-this.$W):s;if(f===a||f===u){var $=this.clone().set(c,1);$.$d[h](d),$.init(),this.$d=$.set(c,Math.min(this.$D,$.daysInMonth())).$d}else h&&this.$d[h](d);return this.init(),this},d.set=function(t,e){return this.clone().$set(t,e)},d.get=function(t){return this[b.p(t)]()},d.add=function(t,s){var c,o=this;t=Number(t);var f=b.p(s),l=function(e){var n=x(o);return b.w(n.date(n.date()+Math.round(e*t)),o)};if(f===a)return this.set(a,this.$M+t);if(f===u)return this.set(u,this.$y+t);if("day"===f)return l(1);if(f===i)return l(7);var h=((c={})[n]=6e4,c[r]=36e5,c[e]=1e3,c)[f]||1,d=this.$d.getTime()+t*h;return b.w(d,this)},d.subtract=function(t,e){return this.add(-1*t,e)},d.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||o;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=b.z(this),a=this.$H,s=this.$m,u=this.$M,c=n.weekdays,f=n.months,h=n.meridiem,d=function(t,n,i,a){return t&&(t[n]||t(e,r))||i[n].slice(0,a)},$=function(t){return b.s(a%12||12,t,"0")},m=h||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(l,function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return b.s(e.$y,4,"0");case"M":return u+1;case"MM":return b.s(u+1,2,"0");case"MMM":return d(n.monthsShort,u,f,3);case"MMMM":return d(f,u);case"D":return e.$D;case"DD":return b.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return d(n.weekdaysMin,e.$W,c,2);case"ddd":return d(n.weekdaysShort,e.$W,c,3);case"dddd":return c[e.$W];case"H":return String(a);case"HH":return b.s(a,2,"0");case"h":return $(1);case"hh":return $(2);case"a":return m(a,s,!0);case"A":return m(a,s,!1);case"m":return String(s);case"mm":return b.s(s,2,"0");case"s":return String(e.$s);case"ss":return b.s(e.$s,2,"0");case"SSS":return b.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")})},d.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},d.diff=function(t,c,o){var f,l=this,h=b.p(c),d=x(t),$=(d.utcOffset()-this.utcOffset())*6e4,m=this-d,v=function(){return b.m(l,d)};switch(h){case u:f=v()/12;break;case a:f=v();break;case s:f=v()/3;break;case i:f=(m-$)/6048e5;break;case"day":f=(m-$)/864e5;break;case r:f=m/36e5;break;case n:f=m/6e4;break;case e:f=m/1e3;break;default:f=m}return o?f:b.a(f)},d.daysInMonth=function(){return this.endOf(a).$D},d.$locale=function(){return $[this.$L]},d.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=y(t,e,!0);return r&&(n.$L=r),n},d.clone=function(){return b.w(this.$d,this)},d.toDate=function(){return new Date(this.valueOf())},d.toJSON=function(){return this.isValid()?this.toISOString():null},d.toISOString=function(){return this.$d.toISOString()},d.toString=function(){return this.$d.toUTCString()},h}(),D=M.prototype;return x.prototype=D,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W","day"],["$M",a],["$y",u],["$D",c]].forEach(function(t){D[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),x.extend=function(t,e){return t.$i||(t(e,M,x),t.$i=!0),x},x.locale=y,x.isDayjs=v,x.unix=function(t){return x(1e3*t)},x.en=$[d],x.Ls=$,x.p={},x},t.exports=e()},7898:function(t,e,n){"use strict";n.r(e),n.d(e,{default:()=>u});var r=n(2676),i=n(9516),a=n(6483),s=n.n(a);let u=function(){return(0,r.jsx)(i.N3,{title:{text:"基本示例"},height:200,data:[{time:0x195b49c177b,value:0},{time:0x195b5ec18c9,value:0},{time:0x195b73c1a6e,value:0},{time:0x195b73c2608,value:0},{time:0x195b8723a91,value:1},{time:0x195b87284a8,value:1},{time:0x195b87290a7,value:0},{time:0x195b8729d12,value:0},{time:0x195b9c28246,value:0},{time:0x195bb12850e,value:0},{time:0x195bc62858a,value:0},{time:0x195bd98a5cd,value:0},{time:0x195bd98b94d,value:1},{time:0x195bd98ffc8,value:0},{time:0x195bee9014e,value:0},{time:0x195c039033f,value:0},{time:0x195c0390ee5,value:1},{time:0x195c1890453,value:0},{time:0x195c1891033,value:0},{time:0x195c1891d20,value:0},{time:0x195c2bf2449,value:0},{time:0x195c2bf343a,value:0},{time:0x195c2c02ff2,value:0},{time:0x195c2d906b2,value:1},{time:0x195c2d913f6,value:1},{time:0x195c2d91f5c,value:0},{time:0x195c4290840,value:0},{time:0x195c5790983,value:0},{time:0x195c6c90ada,value:1},{time:0x195c6c91866,value:0},{time:0x195c7e6be44,value:0},{time:0x195c7e70552,value:0},{time:0x195c9370599,value:0},{time:0x195ca870678,value:0}],tooltip:{dimension:{title:{value:t=>s()(null==t?void 0:t.time).format("MM-DD HH:mm")},content:[{key:t=>`屋内${(null==t?void 0:t.value)?"有人":"无人"} `,value:""}]}},xAxes:{label:{visible:!0,formatMethod:t=>s()(t).format("HH:mm")}},crosshair:{xField:{visible:!0,line:{type:"line"}}}})}}}]);