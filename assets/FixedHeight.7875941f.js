import{d as s,h as e,o as i,i as t,j as o,w as r,m as a}from"./index.c9b191ae.js";import"./index.62221c24.js";import"./_stringToArray.f9d23805.js";import"./domUtils.43bacb00.js";import"./index.e9cfd29c.js";import"./index.b4918bad.js";import{B as m}from"./index.34b4eaee.js";import"./CheckOutlined.6db140fd.js";import"./index.27cba524.js";import{_ as d,F as c}from"./index.b9d582f5.js";import"./FullscreenOutlined.499766bf.js";import"./RightOutlined.ce1a9cb6.js";import"./SettingOutlined.3ccdf103.js";import"./useTimeout.306ef350.js";import"./index.ad8055f7.js";import"./animation.f174d9e2.js";import"./useScrollTo.ed4075e5.js";import"./useAttrs.dd653939.js";import"./useWindowSizeFn.68f6ef4b.js";import"./index.e80c819c.js";import"./uuid.a6cec785.js";import"./download.e374d1b4.js";import"./useForm.d744eed5.js";import"./clickOutside.5c695aaa.js";import"./useSortable.7fd64a7b.js";import"./useExpose.1aedd396.js";import{u as n}from"./useTable.4f530c5e.js";import{getCustomHeaderColumns as p}from"./tableData.7aa0192c.js";import{d as l}from"./table.4954d269.js";var j=s({components:{BasicTable:d,FormOutlined:c,BasicHelp:m},setup(){const[s]=n({title:"定高/头部自定义",api:l,columns:p(),canResize:!1,scroll:{y:100}});return{registerTable:s}}});const u={class:"p-4"},b=a(" 姓名 "),f=a(" 地址 ");j.render=function(s,a,m,d,c,n){const p=e("BasicHelp"),l=e("FormOutlined"),j=e("BasicTable");return i(),t("div",u,[o(j,{onRegister:s.registerTable},{customTitle:r((()=>[o("span",null,[b,o(p,{class:"ml-2",text:"姓名"})])])),customAddress:r((()=>[f,o(l,{class:"ml-2"})])),_:1},8,["onRegister"])])};export default j;