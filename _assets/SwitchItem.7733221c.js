let e=document.createElement("style");e.innerHTML=".vben-setting-switch-item[data-v-2b7b2ae4]{display:flex;justify-content:space-between;margin:16px 0}",document.head.appendChild(e);import{a as t,aW as i,u as a,I as s,i as n,o as d,j as r,k as o,n as p,J as l,bp as c}from"./index.a6ab9244.js";import"./xlsx.9d951958.js";import"./Trigger.c98260cb.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.409025a3.js";import"./index.c6a9e5cf.js";import"./index.c4bc0140.js";import{S as m}from"./index.eb3c5efe.js";import"./index.3ab703ad.js";import"./index.c41153d6.js";import"./index.12362e0d.js";import"./RightOutlined.a8a05276.js";import"./SettingOutlined.33e8a940.js";import"./useTimeout.a76b8678.js";import"./tsxHelper.6b46956f.js";import"./index.bd1dad24.js";import"./animation.fde8d791.js";import"./useScrollTo.537a0974.js";import"./useAttrs.fddcc395.js";import"./useHeaderSetting.d7fea6a2.js";import{b}from"./index.f3b5fd6e.js";var u=t({name:"SwitchItem",components:{Switch:m},props:{event:{type:Number,default:()=>{}},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(e){const{prefixCls:t}=i("setting-switch-item"),{t:n}=a();return{prefixCls:t,t:n,handleChange:function(t){e.event&&b(e.event,t)},getBindValue:s((()=>e.def?{checked:e.def}:{}))}}});const f=c("data-v-2b7b2ae4")(((e,t,i,a,s,c)=>{const m=n("Switch");return d(),r("div",{class:e.prefixCls},[o("span",null,p(e.title),1),o(m,l(e.getBindValue,{onChange:e.handleChange,disabled:e.disabled,checkedChildren:e.t("layout.setting.on"),unCheckedChildren:e.t("layout.setting.off")}),null,16,["onChange","disabled","checkedChildren","unCheckedChildren"])],2)}));u.render=f,u.__scopeId="data-v-2b7b2ae4";export default u;