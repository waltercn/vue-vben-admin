import{d as e,b1 as i,u as t,h as s,o as n,i as r,w as o,j as l,l as d}from"./index.72961157.js";/* empty css              */import{u as p}from"./index.48e86f43.js";import{u as a}from"./useFullScreen.b5dd7d22.js";import{F as m,a as c}from"./FullscreenOutlined.0333d80b.js";import"./vendor.3b1829c7.js";import"./index.3d443af7.js";import"./index.730c12b4.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.d43a29e4.js";import"./isEqual.2bab8c16.js";import"./get.4975c5e2.js";import"./_baseProperty.74f89655.js";import"./toInteger.f9979050.js";import"./index.6b4825f2.js";import"./index.0630f2f2.js";import"./SearchOutlined.b22e7653.js";import"./EyeOutlined.401aa8b7.js";import"./index.af36237f.js";import"./CheckOutlined.8d068b58.js";import"./DownOutlined.884ac450.js";import"./index.3d7a4aea.js";import"./index.921e8863.js";import"./UpOutlined.96ecf785.js";import"./index.af96b2ae.js";import"./RightOutlined.ba1a4c59.js";import"./RedoOutlined.27f739c9.js";import"./index.8b1e1205.js";import"./EllipsisOutlined.355a4652.js";import"./types.fa1dbe2e.js";import"./Tree.acd42032.js";import"./util.1c24ad6f.js";import"./uuid.2e082eac.js";import"./index.f496c18c.js";import"./DeleteOutlined.6dc16ac6.js";import"./index.46ecc65f.js";import"./index.35af8c02.js";import"./useTimeout.3a4cc0a3.js";import"./useWindowSizeFn.048864be.js";import"./index.f458f5b1.js";import"./index.054c67b3.js";import"./domUtils.0adaad38.js";import"./_stringToArray.cf2e328f.js";import"./useScrollTo.2abae1df.js";import"./animation.a805db4d.js";import"./index.36e82902.js";import"./index.7981f544.js";import"./index.d1603dcb.js";import"./LeftOutlined.282a7177.js";import"./download.06161254.js";var u=e({name:"FullScreenSetting",components:{FullscreenExitOutlined:m,FullscreenOutlined:c,Tooltip:i},setup(){const e=p(),{t:i}=t(),{toggleFullscreen:s,isFullscreenRef:n}=a(e.wrapRef);return{handleFullScreen:function(){s()},isFullscreenRef:n,t:i}}});u.render=function(e,i,t,p,a,m){const c=s("FullscreenOutlined"),u=s("FullscreenExitOutlined"),j=s("Tooltip");return n(),r(j,{placement:"top"},{title:o((()=>[l("span",null,d(e.t("component.table.settingFullScreen")),1)])),default:o((()=>[e.isFullscreenRef?(n(),r(u,{key:1,onClick:e.handleFullScreen},null,8,["onClick"])):(n(),r(c,{key:0,onClick:e.handleFullScreen},null,8,["onClick"]))])),_:1})};export default u;