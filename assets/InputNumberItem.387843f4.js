import{d as e,aK as t,h as s,o as i,i as n,j as r,l as a,a7 as o,bw as p}from"./index.d77f02a9.js";import{I as d}from"./index.5bbc4673.js";import{b as m}from"./index.8d4b6bf8.js";import"./vendor.3b1829c7.js";import"./UpOutlined.d63ff681.js";import"./DownOutlined.4bb15dc2.js";import"./index.52f18b9b.js";import"./index.c2f8a287.js";import"./index.73f0a3e8.js";import"./index.074ee3be.js";import"./index.36fa56ba.js";import"./domUtils.5a6e1164.js";import"./_stringToArray.7600767c.js";import"./RightOutlined.91dd89cb.js";/* empty css              */import"./useTimeout.2d9628a9.js";import"./useScrollTo.3b6a2f4d.js";import"./animation.c2cd2812.js";import"./ArrowLeftOutlined.3f5c2cff.js";import"./isEqual.66f620a0.js";import"./useHeaderSetting.f552c217.js";import"./SettingOutlined.fb91ae0d.js";var l=e({name:"InputNumberItem",components:{InputNumber:d},props:{event:{type:Number,default:()=>{}},title:{type:String}},setup(e){const{prefixCls:s}=t("setting-input-number-item");return{prefixCls:s,handleChange:function(t){e.event&&m(e.event,t)}}}});const u=p("data-v-c7d8b828")(((e,t,p,d,m,l)=>{const u=s("InputNumber");return i(),n("div",{class:e.prefixCls},[r("span",null,a(e.title),1),r(u,o(e.$attrs,{size:"small",class:`${e.prefixCls}-input-number`,onChange:e.handleChange}),null,16,["class","onChange"])],2)}));l.render=u,l.__scopeId="data-v-c7d8b828";export default l;