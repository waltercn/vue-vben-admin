let e=document.createElement("style");e.innerHTML=".vben-setting-select-item[data-v-6110ac28]{display:flex;justify-content:space-between;margin:16px 0}.vben-setting-select-item-select[data-v-6110ac28]{width:126px}",document.head.appendChild(e);import{a as t,aV as i,I as s,i as a,o as n,j as o,k as r,n as d,J as l,bp as p}from"./index.29c86768.js";import"./xlsx.a48e520c.js";import{S as m}from"./index.2e2f5f7d.js";import"./Trigger.6c22f7c7.js";import"./omit.d533ea5b.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.b890e848.js";import"./CheckOutlined.f30665d7.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.7c0d94fd.js";import"./index.5c941694.js";import"./index.776da8fc.js";import"./index.7829636a.js";import"./index.d8838e74.js";import"./index.c521e578.js";import"./RightOutlined.76f7bf3c.js";import"./SettingOutlined.7b0158eb.js";import"./useTimeout.35f8dc13.js";import"./tsxHelper.7e7d25f8.js";import"./index.52262a17.js";import"./animation.a2928106.js";import"./useScrollTo.4e4d37c3.js";import"./useAttrs.13d68406.js";import"./useHeaderSetting.f0b133f7.js";import{b as c}from"./index.4aa3a73b.js";var f=t({name:"SelectItem",components:{Select:m},props:{event:{type:Number,default:()=>{}},disabled:{type:Boolean},title:{type:String},def:{type:[String,Number]},initValue:{type:[String,Number]},options:{type:Array,default:[]}},setup(e){const{prefixCls:t}=i("setting-select-item");return{prefixCls:t,handleChange:function(t){e.event&&c(e.event,t)},getBindValue:s((()=>e.def?{value:e.def,defaultValue:e.initValue||e.def}:{}))}}});const u=p("data-v-6110ac28")(((e,t,i,s,p,m)=>{const c=a("Select");return n(),o("div",{class:e.prefixCls},[r("span",null,d(e.title),1),r(c,l(e.getBindValue,{class:`${e.prefixCls}-select`,onChange:e.handleChange,disabled:e.disabled,size:"small",options:e.options}),null,16,["class","onChange","disabled","options"])],2)}));f.render=u,f.__scopeId="data-v-6110ac28";export default f;