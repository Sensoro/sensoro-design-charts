"use strict";(self.webpackChunksensoro_design_charts=self.webpackChunksensoro_design_charts||[]).push([["2366"],{57390:function(e,a,t){t.r(a),t.d(a,{default:()=>i});var l=t(52676),n=t(40453),u=t(36426),d=t(12819),v=t(68478),r=t(54668);function o(e){let a=Object.assign({h1:"h1",a:"a",pre:"pre",code:"code"},(0,n.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(a.h1,{id:"doubleoverlaparea",children:[(0,l.jsx)(a.a,{className:"header-anchor","aria-hidden":"true",href:"#doubleoverlaparea",children:"#"}),"DoubleOverlapArea"]}),"\n",(0,l.jsxs)(r.Z,{isMobile:"false",demoId:"_custom_DoubleOverlapArea_1",children:[(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-tsx",children:"import type { DoubleOverlapAreaProps } from '@sensoro-design/chart';\nimport { DoubleOverlapArea } from '@sensoro-design/chart';\n\nfunction Example() {\n  const spec: DoubleOverlapAreaProps = {\n    title: {\n      text: '基本示例',\n    },\n    height: 400,\n    data: [\n      { values: [{ date: 0, value: 11635 }, { date: 1, value: 8730 }, { date: 2, value: 6931 }] },\n      { values: [{ date: 2, value: 6931 }, { date: 3, value: 6850 }, { date: 4, value: 5366 }, { date: 5, value: 4874 }, { date: 6, value: 5347 }, { date: 7, value: 41115 }, { date: 8, value: 81250 }, { date: 9, value: 81437 }, { date: 10, value: 103941 }, { date: 11, value: 105994 }, { date: 12, value: 116688 }, { date: 13, value: 118847 }, { date: 14, value: 101091 }, { date: 15, value: 107977 }, { date: 16, value: 129702 }, { date: 17, value: 109491 }, { date: 18, value: 106720 }, { date: 19, value: 52051 }, { date: 20, value: 37894 }, { date: 21, value: 29828 }, { date: 22, value: 21099 }] },\n      { values: [{ date: 22, value: 21099 }, { date: 23, value: 14170 }] },\n    ],\n    tooltip: {\n      dimension: {\n        title: {\n          value: (datum) => {\n            return `${datum?.date}:00 ~ ${datum?.date + 1}:00`;\n          },\n        },\n        content: {\n          key: '出行次数',\n          value: (datum) => {\n            return datum?.value;\n          },\n        },\n      },\n    },\n  };\n\n  return (\n    <DoubleOverlapArea {...spec} />\n  );\n};\n\nexport default Example;\n"})})}),(0,l.jsx)(u.default,{})]}),"\n",(0,l.jsxs)(r.Z,{isMobile:"false",demoId:"_custom_DoubleOverlapArea_2",children:[(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-tsx",children:"import type { DoubleOverlapAreaProps } from '@sensoro-design/chart';\nimport { DoubleOverlapArea } from '@sensoro-design/chart';\n\nfunction Example() {\n  const spec: DoubleOverlapAreaProps = {\n    title: {\n      text: '数值较小',\n    },\n    height: 400,\n    data: [\n      {\n        values: [\n          { date: 'Jan', value: 0 },\n          { date: 'Feb', value: 0 },\n          { date: 'Mar', value: 0 },\n          { date: 'Apr', value: 0 },\n          { date: 'May', value: 1 },\n        ],\n      },\n      {\n        values: [\n          { date: 'May', value: 1 },\n          { date: 'Jun', value: 1 },\n        ],\n      },\n      {\n        values: [\n          { date: 'Jun', value: 1 },\n          { date: 'Jul', value: 0 },\n          { date: 'Aug', value: 0 },\n          { date: 'Sept', value: 0 },\n        ],\n      },\n    ],\n    xAxes: {\n      tick: {\n        tickCount: () => {\n          return 5;\n        },\n      },\n      label: {\n        formatMethod: (text) => {\n          return `${text}1`;\n        },\n      },\n    },\n    yAxes: {\n      tick: {\n        tickStep: 1,\n      },\n      max: 5,\n    },\n  };\n\n  return (\n    <DoubleOverlapArea {...spec} />\n  );\n};\n\nexport default Example;\n"})})}),(0,l.jsx)(d.default,{})]}),"\n",(0,l.jsxs)(r.Z,{isMobile:"false",demoId:"_custom_DoubleOverlapArea_3",children:[(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-tsx",children:"import type { DoubleOverlapAreaProps } from '@sensoro-design/chart';\nimport { DoubleOverlapArea } from '@sensoro-design/chart';\n\nfunction Example() {\n  const spec: DoubleOverlapAreaProps = {\n    title: {\n      text: '事件',\n    },\n    height: 400,\n    data: [\n      { values: [{ date: 0, value: 11635 }, { date: 1, value: 8730 }, { date: 2, value: 6931 }] },\n      { values: [{ date: 2, value: 6931 }, { date: 3, value: 6850 }, { date: 4, value: 5366 }, { date: 5, value: 4874 }, { date: 6, value: 5347 }, { date: 7, value: 41115 }, { date: 8, value: 81250 }, { date: 9, value: 81437 }, { date: 10, value: 103941 }, { date: 11, value: 105994 }, { date: 12, value: 116688 }, { date: 13, value: 118847 }, { date: 14, value: 101091 }, { date: 15, value: 107977 }, { date: 16, value: 129702 }, { date: 17, value: 109491 }, { date: 18, value: 106720 }, { date: 19, value: 52051 }, { date: 20, value: 37894 }, { date: 21, value: 29828 }, { date: 22, value: 21099 }] },\n      { values: [{ date: 22, value: 21099 }, { date: 23, value: 14170 }] },\n    ],\n    tooltip: {\n      dimension: {\n        title: {\n          value: (datum) => {\n            return `${datum?.date}:00 ~ ${datum?.date + 1}:00`;\n          },\n        },\n        content: {\n          key: '出行次数',\n          value: (datum) => {\n            return datum?.value;\n          },\n        },\n      },\n    },\n  };\n\n  const handleDimensionClick: DoubleOverlapAreaProps['onDimensionClick'] = (e) => {\n    // eslint-disable-next-line no-console\n    console.log(e);\n  };\n\n  return (\n    <DoubleOverlapArea {...spec} onDimensionClick={handleDimensionClick} />\n  );\n};\n\nexport default Example;\n"})})}),(0,l.jsx)(v.default,{})]})]})}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:a}=Object.assign({},(0,n.ah)(),e.components);return a?(0,l.jsx)(a,Object.assign({},e,{children:(0,l.jsx)(o,e)})):o(e)}let i=s;s.__RSPRESS_PAGE_META={},s.__RSPRESS_PAGE_META["custom%2FDoubleOverlapArea.mdx"]={toc:[],title:"DoubleOverlapArea",headingTitle:"DoubleOverlapArea",frontmatter:{}}},36426:function(e,a,t){t.r(a),t.d(a,{default:()=>u});var l=t(52676),n=t(89107);let u=function(){return(0,l.jsx)(n.k4,{title:{text:"基本示例"},height:400,data:[{values:[{date:0,value:11635},{date:1,value:8730},{date:2,value:6931}]},{values:[{date:2,value:6931},{date:3,value:6850},{date:4,value:5366},{date:5,value:4874},{date:6,value:5347},{date:7,value:41115},{date:8,value:81250},{date:9,value:81437},{date:10,value:103941},{date:11,value:105994},{date:12,value:116688},{date:13,value:118847},{date:14,value:101091},{date:15,value:107977},{date:16,value:129702},{date:17,value:109491},{date:18,value:106720},{date:19,value:52051},{date:20,value:37894},{date:21,value:29828},{date:22,value:21099}]},{values:[{date:22,value:21099},{date:23,value:14170}]}],tooltip:{dimension:{title:{value:e=>`${null==e?void 0:e.date}:00 ~ ${(null==e?void 0:e.date)+1}:00`},content:{key:"出行次数",value:e=>null==e?void 0:e.value}}}})}},12819:function(e,a,t){t.r(a),t.d(a,{default:()=>u});var l=t(52676),n=t(89107);let u=function(){return(0,l.jsx)(n.k4,{title:{text:"数值较小"},height:400,data:[{values:[{date:"Jan",value:0},{date:"Feb",value:0},{date:"Mar",value:0},{date:"Apr",value:0},{date:"May",value:1}]},{values:[{date:"May",value:1},{date:"Jun",value:1}]},{values:[{date:"Jun",value:1},{date:"Jul",value:0},{date:"Aug",value:0},{date:"Sept",value:0}]}],xAxes:{tick:{tickCount:()=>5},label:{formatMethod:e=>`${e}1`}},yAxes:{tick:{tickStep:1},max:5}})}},68478:function(e,a,t){t.r(a),t.d(a,{default:()=>u});var l=t(52676),n=t(89107);let u=function(){return(0,l.jsx)(n.k4,{title:{text:"事件"},height:400,data:[{values:[{date:0,value:11635},{date:1,value:8730},{date:2,value:6931}]},{values:[{date:2,value:6931},{date:3,value:6850},{date:4,value:5366},{date:5,value:4874},{date:6,value:5347},{date:7,value:41115},{date:8,value:81250},{date:9,value:81437},{date:10,value:103941},{date:11,value:105994},{date:12,value:116688},{date:13,value:118847},{date:14,value:101091},{date:15,value:107977},{date:16,value:129702},{date:17,value:109491},{date:18,value:106720},{date:19,value:52051},{date:20,value:37894},{date:21,value:29828},{date:22,value:21099}]},{values:[{date:22,value:21099},{date:23,value:14170}]}],tooltip:{dimension:{title:{value:e=>`${null==e?void 0:e.date}:00 ~ ${(null==e?void 0:e.date)+1}:00`},content:{key:"出行次数",value:e=>null==e?void 0:e.value}}},onDimensionClick:e=>{console.log(e)}})}}}]);