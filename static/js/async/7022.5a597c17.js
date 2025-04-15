(self.webpackChunksensoro_design_charts=self.webpackChunksensoro_design_charts||[]).push([["7022"],{16483:function(t){var e;e=function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="week",a="month",s="quarter",u="year",c="date",o="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},h="en",m={};m[h]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||"th")+"]"}};var v="$isDayjsObject",$=function(t){return t instanceof M||!(!t||!t[v])},y=function t(e,n,r){var i;if(!e)return h;if("string"==typeof e){var a=e.toLowerCase();m[a]&&(i=a),n&&(m[a]=n,i=a);var s=e.split("-");if(!i&&s.length>1)return t(s[0])}else{var u=e.name;m[u]=e,i=u}return!r&&i&&(h=i),i||!r&&h},b=function(t,e){if($(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new M(n)},x={s:d,z:function(t){var e=-t.utcOffset(),n=Math.abs(e);return(e<=0?"+":"-")+d(Math.floor(n/60),2,"0")+":"+d(n%60,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,a),s=n-i<0,u=e.clone().add(r+(s?-1:1),a);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(o){return({M:a,y:u,w:i,d:"day",D:c,h:r,m:n,s:e,ms:t,Q:s})[o]||String(o||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}};x.l=y,x.i=$,x.w=function(t,e){return b(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var M=function(){function d(t){this.$L=y(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[v]=!0}var h=d.prototype;return h.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(x.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,a=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(e)}(t),this.init()},h.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},h.$utils=function(){return x},h.isValid=function(){return this.$d.toString()!==o},h.isSame=function(t,e){var n=b(t);return this.startOf(e)<=n&&n<=this.endOf(e)},h.isAfter=function(t,e){return b(t)<this.startOf(e)},h.isBefore=function(t,e){return this.endOf(e)<b(t)},h.$g=function(t,e,n){return x.u(t)?this[e]:this.set(n,t)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(t,s){var o=this,l=!!x.u(s)||s,f=x.p(t),d=function(t,e){var n=x.w(o.$u?Date.UTC(o.$y,e,t):new Date(o.$y,e,t),o);return l?n:n.endOf("day")},h=function(t,e){return x.w(o.toDate()[t].apply(o.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(e)),o)},m=this.$W,v=this.$M,$=this.$D,y="set"+(this.$u?"UTC":"");switch(f){case u:return l?d(1,0):d(31,11);case a:return l?d(1,v):d(0,v+1);case i:var b=this.$locale().weekStart||0,M=(m<b?m+7:m)-b;return d(l?$-M:$+(6-M),v);case"day":case c:return h(y+"Hours",0);case r:return h(y+"Minutes",1);case n:return h(y+"Seconds",2);case e:return h(y+"Milliseconds",3);default:return this.clone()}},h.endOf=function(t){return this.startOf(t,!1)},h.$set=function(i,s){var o,l=x.p(i),f="set"+(this.$u?"UTC":""),d=((o={}).day=f+"Date",o[c]=f+"Date",o[a]=f+"Month",o[u]=f+"FullYear",o[r]=f+"Hours",o[n]=f+"Minutes",o[e]=f+"Seconds",o[t]=f+"Milliseconds",o)[l],h="day"===l?this.$D+(s-this.$W):s;if(l===a||l===u){var m=this.clone().set(c,1);m.$d[d](h),m.init(),this.$d=m.set(c,Math.min(this.$D,m.daysInMonth())).$d}else d&&this.$d[d](h);return this.init(),this},h.set=function(t,e){return this.clone().$set(t,e)},h.get=function(t){return this[x.p(t)]()},h.add=function(t,s){var c,o=this;t=Number(t);var l=x.p(s),f=function(e){var n=b(o);return x.w(n.date(n.date()+Math.round(e*t)),o)};if(l===a)return this.set(a,this.$M+t);if(l===u)return this.set(u,this.$y+t);if("day"===l)return f(1);if(l===i)return f(7);var d=((c={})[n]=6e4,c[r]=36e5,c[e]=1e3,c)[l]||1,h=this.$d.getTime()+t*d;return x.w(h,this)},h.subtract=function(t,e){return this.add(-1*t,e)},h.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||o;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=x.z(this),a=this.$H,s=this.$m,u=this.$M,c=n.weekdays,l=n.months,d=n.meridiem,h=function(t,n,i,a){return t&&(t[n]||t(e,r))||i[n].slice(0,a)},m=function(t){return x.s(a%12||12,t,"0")},v=d||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(f,function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return x.s(e.$y,4,"0");case"M":return u+1;case"MM":return x.s(u+1,2,"0");case"MMM":return h(n.monthsShort,u,l,3);case"MMMM":return h(l,u);case"D":return e.$D;case"DD":return x.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(n.weekdaysMin,e.$W,c,2);case"ddd":return h(n.weekdaysShort,e.$W,c,3);case"dddd":return c[e.$W];case"H":return String(a);case"HH":return x.s(a,2,"0");case"h":return m(1);case"hh":return m(2);case"a":return v(a,s,!0);case"A":return v(a,s,!1);case"m":return String(s);case"mm":return x.s(s,2,"0");case"s":return String(e.$s);case"ss":return x.s(e.$s,2,"0");case"SSS":return x.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")})},h.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},h.diff=function(t,c,o){var l,f=this,d=x.p(c),h=b(t),m=(h.utcOffset()-this.utcOffset())*6e4,v=this-h,$=function(){return x.m(f,h)};switch(d){case u:l=$()/12;break;case a:l=$();break;case s:l=$()/3;break;case i:l=(v-m)/6048e5;break;case"day":l=(v-m)/864e5;break;case r:l=v/36e5;break;case n:l=v/6e4;break;case e:l=v/1e3;break;default:l=v}return o?l:x.a(l)},h.daysInMonth=function(){return this.endOf(a).$D},h.$locale=function(){return m[this.$L]},h.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=y(t,e,!0);return r&&(n.$L=r),n},h.clone=function(){return x.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},d}(),g=M.prototype;return b.prototype=g,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W","day"],["$M",a],["$y",u],["$D",c]].forEach(function(t){g[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),b.extend=function(t,e){return t.$i||(t(e,M,b),t.$i=!0),b},b.locale=y,b.isDayjs=$,b.unix=function(t){return b(1e3*t)},b.en=m[h],b.Ls=m,b.p={},b},t.exports=e()},42090:function(t,e,n){"use strict";n.r(e),n.d(e,{data:()=>r,default:()=>i});let r=[{time:0x195b49c177b,value:0},{time:0x195b5ec18c9,value:0},{time:0x195b73c1a6e,value:0},{time:0x195b73c2608,value:0},{time:0x195b8723a91,value:1},{time:0x195b87284a8,value:1},{time:0x195b87290a7,value:0},{time:0x195b8729d12,value:0},{time:0x195b9c28246,value:0},{time:0x195bb12850e,value:0},{time:0x195bc62858a,value:0},{time:0x195bd98a5cd,value:0},{time:0x195bd98b94d,value:1},{time:0x195bd98ffc8,value:0},{time:0x195bee9014e,value:0},{time:0x195c039033f,value:0},{time:0x195c0390ee5,value:1},{time:0x195c1890453,value:0},{time:0x195c1891033,value:0},{time:0x195c1891d20,value:0},{time:0x195c2bf2449,value:0},{time:0x195c2bf343a,value:0},{time:0x195c2c02ff2,value:0},{time:0x195c2d906b2,value:1},{time:0x195c2d913f6,value:1},{time:0x195c2d91f5c,value:0},{time:0x195c4290840,value:0},{time:0x195c5790983,value:0},{time:0x195c6c90ada,value:1},{time:0x195c6c91866,value:0},{time:0x195c7e6be44,value:0},{time:0x195c7e70552,value:0},{time:0x195c9370599,value:0},{time:0x195ca870678,value:0}],i={}},67922:function(t,e,n){"use strict";n.r(e),n.d(e,{default:()=>o});var r=n(52676),i=n(90565),a=n(16483),s=n.n(a),u=n(38751),c=n(42090);let o=function(){let t={options:{ReactDOM:u},height:200,padding:[60,16,16,16],data:c.data,title:{visible:!0,layoutType:"absolute",top:-44,left:0,padding:0,textStyle:{fontSize:12,lineHeight:20,react:{height:20,width:100,element:(0,r.jsx)("span",{children:"基本示例"})}}},tooltip:{dimension:{title:{value:t=>s()(null==t?void 0:t.time).format("MM-DD HH:mm")},content:[{key:t=>`屋内${(null==t?void 0:t.value)?"有人":"无人"}`,value:""}]}},xAxes:{label:{visible:!0,formatMethod:t=>s()(t).format("HH:mm")}},crosshair:{xField:{visible:!0,line:{type:"line",width:1}}},legend:{visible:!0,position:"end",orient:"top",layoutType:"absolute",top:-44,left:0,right:-24,item:{label:{style:{fontSize:12},formatMethod:t=>1===t?"有烟":"无烟"}}}};return(0,r.jsx)(i.N3,{...t})}}}]);