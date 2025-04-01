"use strict";(self.webpackChunksensoro_design_charts=self.webpackChunksensoro_design_charts||[]).push([["8593"],{85710:function(n,e,a){a.r(e),a.d(e,{default:()=>r});var l=a(52676),u=a(40453),m=a(46411),v=a(68668);function s(n){let e=Object.assign({h1:"h1",a:"a",h2:"h2",pre:"pre",code:"code"},(0,u.ah)(),n.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.h1,{id:"词云图",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#词云图",children:"#"}),"词云图"]}),"\n",(0,l.jsxs)(e.h2,{id:"点击事件",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#点击事件",children:"#"}),"点击事件"]}),"\n",(0,l.jsxs)(v.Z,{isMobile:"false",demoId:"_demos_config_WordCloud_1",children:[(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-tsx",children:"import type { WordCloudProps } from '@sensoro-design/chart';\nimport { WordCloud } from '@sensoro-design/chart';\nimport React from 'react';\n\nconst list = [\n  {\n    name: '一箭十八星',\n    value: 178821,\n\n  },\n  {\n    name: '八号',\n    value: 134284,\n\n  },\n  {\n    name: '商业航天发射场',\n    value: 134011,\n\n  },\n  {\n    name: '运载火箭',\n    value: 107732,\n\n  },\n  {\n    name: '长征',\n    value: 100568,\n\n  },\n  {\n    name: '工位',\n    value: 96773,\n\n  },\n  {\n    name: '发射',\n    value: 82966,\n\n  },\n  {\n    name: '组网',\n    value: 82044,\n\n  },\n  {\n    name: '星座',\n    value: 68990,\n\n  },\n  {\n    name: '发射场',\n    value: 63830,\n\n  },\n  {\n    name: '一箭',\n    value: 60224,\n\n  },\n  {\n    name: '海南商业航天发射场',\n    value: 60043,\n\n  },\n  {\n    name: '送入',\n    value: 58624,\n\n  },\n  {\n    name: '长征八号',\n    value: 46260,\n\n  },\n  {\n    name: '预定',\n    value: 44803,\n\n  },\n  {\n    name: '千帆星座',\n    value: 41492,\n\n  },\n  {\n    name: '海南',\n    value: 33636,\n\n  },\n  {\n    name: '火箭',\n    value: 33597,\n\n  },\n  {\n    name: '文昌',\n    value: '29619',\n\n  },\n  {\n    name: '航天',\n    value: '29130',\n\n  },\n  {\n    name: '祝贺',\n    value: '24952',\n\n  },\n  {\n    name: '嘉树',\n    value: '23718',\n\n  },\n  {\n    name: '威武',\n    value: '20815',\n\n  },\n  {\n    name: '最强大脑',\n    value: '19362',\n\n  },\n  {\n    name: '首发',\n    value: '19228',\n\n  },\n  {\n    name: '捆绑式',\n    value: '18153',\n\n  },\n  {\n    name: '航天器',\n    value: '18007',\n\n  },\n  {\n    name: '卫星',\n    value: '17761',\n\n  },\n  {\n    name: '导流',\n    value: '17692',\n\n  },\n  {\n    name: '成功',\n    value: '16955',\n\n  },\n  {\n    name: '喷水',\n    value: '16484',\n\n  },\n  {\n    name: '一号发射工位',\n    value: '16376',\n\n  },\n  {\n    name: '航天发射场',\n    value: '15644',\n\n  },\n  {\n    name: '商业航天',\n    value: '14997',\n\n  },\n  {\n    name: '我国',\n    value: '14242',\n\n  },\n  {\n    name: '微博',\n    value: '13881',\n\n  },\n  {\n    name: '答题',\n    value: '13650',\n\n  },\n  {\n    name: '转发',\n    value: '13451',\n\n  },\n  {\n    name: '首飞',\n    value: '13180',\n\n  },\n  {\n    name: '宋征',\n    value: '13025',\n\n  },\n  {\n    name: '观礼',\n    value: '12645',\n\n  },\n  {\n    name: '一箭18星',\n    value: '12001',\n\n  },\n  {\n    name: '具身智能',\n    value: '11304',\n\n  },\n  {\n    name: '央视',\n    value: '11093',\n\n  },\n  {\n    name: 'a6bgcjpb',\n    value: '10682',\n\n  },\n  {\n    name: '火箭发射',\n    value: '10570',\n\n  },\n  {\n    name: '改进型',\n    value: '9987',\n\n  },\n  {\n    name: '一号',\n    value: '9915',\n\n  },\n  {\n    name: '长八火箭',\n    value: '9816',\n\n  },\n  {\n    name: '测发',\n    value: '9508',\n\n  },\n  {\n    name: '商业',\n    value: '9378',\n\n  },\n  {\n    name: '轨道',\n    value: '9000',\n\n  },\n  {\n    name: '升空',\n    value: '8977',\n\n  },\n  {\n    name: '一号工位',\n    value: '8714',\n\n  },\n  {\n    name: '具备双工位发射能力',\n    value: '8662',\n\n  },\n  {\n    name: '星链',\n    value: '8594',\n\n  },\n  {\n    name: '专属工位',\n    value: 7872,\n\n  },\n  {\n    name: '太空',\n    value: 7825,\n\n  },\n  {\n    name: '三垂',\n    value: 7801,\n\n  },\n  {\n    name: '发射工位',\n    value: 7734,\n\n  },\n  {\n    name: '凌晨',\n    value: 7701,\n\n  },\n  {\n    name: '一箭多星',\n    value: 7264,\n\n  },\n  {\n    name: '性价比高',\n    value: 7210,\n\n  },\n  {\n    name: '十八',\n    value: 7207,\n\n  },\n  {\n    name: '发射任务',\n    value: 7024,\n\n  },\n  {\n    name: '双工位',\n    value: 6985,\n\n  },\n  {\n    name: '航天局',\n    value: 6786,\n\n  },\n  {\n    name: '降噪',\n    value: 6497,\n\n  },\n  {\n    name: '组合体',\n    value: 6463,\n\n  },\n  {\n    name: '运载',\n    value: 6433,\n\n  },\n  {\n    name: '人形机器人',\n    value: 6412,\n\n  },\n  {\n    name: 'a6bgcktf',\n    value: 6307,\n\n  },\n  {\n    name: '一臂之力',\n    value: 6286,\n\n  },\n  {\n    name: '时政',\n    value: 6226,\n\n  },\n  {\n    name: '新闻和报纸摘要',\n    value: 6167,\n\n  },\n  {\n    name: 'a6bgp8sk',\n    value: 6033,\n\n  },\n  {\n    name: '回血',\n    value: 5994,\n\n  },\n  {\n    name: '点火',\n    value: 5897,\n\n  },\n  {\n    name: '新质生产力',\n    value: 5888,\n\n  },\n  {\n    name: '垣信卫星',\n    value: 5873,\n\n  },\n  {\n    name: '近地',\n    value: 5821,\n\n  },\n  {\n    name: '频段',\n    value: 5821,\n\n  },\n  {\n    name: '学霸',\n    value: 5717,\n\n  },\n  {\n    name: '脑力',\n    value: 5621,\n\n  },\n  {\n    name: '发展新质生产力',\n    value: 5569,\n\n  },\n  {\n    name: '发射能力',\n    value: 5525,\n\n  },\n  {\n    name: '重生',\n    value: 5340,\n\n  },\n  {\n    name: '液氧',\n    value: 5328,\n\n  },\n  {\n    name: '中国航天科技集团',\n    value: 5324,\n\n  },\n  {\n    name: '长征八号运载火箭',\n    value: 5324,\n\n  },\n  {\n    name: '起飞',\n    value: 5267,\n\n  },\n  {\n    name: '智慧发射场系统',\n    value: 5060,\n  },\n];\n\nfunction Example() {\n  const chartRef = React.useRef(null);\n\n  const spec: WordCloudProps = {\n    height: 225,\n    width: 464,\n    padding: 0,\n    nameField: 'name',\n    valueField: 'value',\n    seriesField: 'name',\n    fontSizeRange: [10, 20],\n    data: {\n      values: list,\n    },\n  };\n\n  const handleClick: WordCloudProps['onClick'] = (e) => {\n    // eslint-disable-next-line no-console\n    console.log(e);\n  };\n\n  return (\n    <WordCloud {...spec} ref={chartRef} onClick={handleClick} />\n  );\n}\n\nexport default Example;\n"})})}),(0,l.jsx)(m.default,{})]})]})}function o(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,u.ah)(),n.components);return e?(0,l.jsx)(e,Object.assign({},n,{children:(0,l.jsx)(s,n)})):s(n)}let r=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["demos%2Fconfig%2FWordCloud.mdx"]={toc:[{id:"点击事件",text:"点击事件",depth:2}],title:"词云图",headingTitle:"词云图",frontmatter:{}}},46411:function(n,e,a){a.r(e),a.d(e,{default:()=>s});var l=a(52676),u=a(34371),m=a(75271);let v=[{name:"一箭十八星",value:178821},{name:"八号",value:134284},{name:"商业航天发射场",value:134011},{name:"运载火箭",value:107732},{name:"长征",value:100568},{name:"工位",value:96773},{name:"发射",value:82966},{name:"组网",value:82044},{name:"星座",value:68990},{name:"发射场",value:63830},{name:"一箭",value:60224},{name:"海南商业航天发射场",value:60043},{name:"送入",value:58624},{name:"长征八号",value:46260},{name:"预定",value:44803},{name:"千帆星座",value:41492},{name:"海南",value:33636},{name:"火箭",value:33597},{name:"文昌",value:"29619"},{name:"航天",value:"29130"},{name:"祝贺",value:"24952"},{name:"嘉树",value:"23718"},{name:"威武",value:"20815"},{name:"最强大脑",value:"19362"},{name:"首发",value:"19228"},{name:"捆绑式",value:"18153"},{name:"航天器",value:"18007"},{name:"卫星",value:"17761"},{name:"导流",value:"17692"},{name:"成功",value:"16955"},{name:"喷水",value:"16484"},{name:"一号发射工位",value:"16376"},{name:"航天发射场",value:"15644"},{name:"商业航天",value:"14997"},{name:"我国",value:"14242"},{name:"微博",value:"13881"},{name:"答题",value:"13650"},{name:"转发",value:"13451"},{name:"首飞",value:"13180"},{name:"宋征",value:"13025"},{name:"观礼",value:"12645"},{name:"一箭18星",value:"12001"},{name:"具身智能",value:"11304"},{name:"央视",value:"11093"},{name:"a6bgcjpb",value:"10682"},{name:"火箭发射",value:"10570"},{name:"改进型",value:"9987"},{name:"一号",value:"9915"},{name:"长八火箭",value:"9816"},{name:"测发",value:"9508"},{name:"商业",value:"9378"},{name:"轨道",value:"9000"},{name:"升空",value:"8977"},{name:"一号工位",value:"8714"},{name:"具备双工位发射能力",value:"8662"},{name:"星链",value:"8594"},{name:"专属工位",value:7872},{name:"太空",value:7825},{name:"三垂",value:7801},{name:"发射工位",value:7734},{name:"凌晨",value:7701},{name:"一箭多星",value:7264},{name:"性价比高",value:7210},{name:"十八",value:7207},{name:"发射任务",value:7024},{name:"双工位",value:6985},{name:"航天局",value:6786},{name:"降噪",value:6497},{name:"组合体",value:6463},{name:"运载",value:6433},{name:"人形机器人",value:6412},{name:"a6bgcktf",value:6307},{name:"一臂之力",value:6286},{name:"时政",value:6226},{name:"新闻和报纸摘要",value:6167},{name:"a6bgp8sk",value:6033},{name:"回血",value:5994},{name:"点火",value:5897},{name:"新质生产力",value:5888},{name:"垣信卫星",value:5873},{name:"近地",value:5821},{name:"频段",value:5821},{name:"学霸",value:5717},{name:"脑力",value:5621},{name:"发展新质生产力",value:5569},{name:"发射能力",value:5525},{name:"重生",value:5340},{name:"液氧",value:5328},{name:"中国航天科技集团",value:5324},{name:"长征八号运载火箭",value:5324},{name:"起飞",value:5267},{name:"智慧发射场系统",value:5060}],s=function(){let n=m.useRef(null);return(0,l.jsx)(u.kB,{height:225,width:464,padding:0,nameField:"name",valueField:"value",seriesField:"name",fontSizeRange:[10,20],data:{values:v},ref:n,onClick:n=>{console.log(n)}})}}}]);