let t=document.createElement("style");t.innerHTML=".lazy-base-demo-wrap{display:flex;width:50%;height:2000px;margin:20px auto;text-align:center;background:#fff;justify-content:center;flex-direction:column;align-items:center}.lazy-base-demo-box{width:300px;height:300px}.lazy-base-demo h1{height:1300px;margin:20px 0}.custom-enter{opacity:0;transform:scale(.4) translate(100%)}.custom-enter-to{opacity:1}.custom-enter-active{position:absolute;top:0;width:100%;transition:.5s}.custom-leave{opacity:1}.custom-leave-to{opacity:0;transform:scale(.4) translate(-100%)}.custom-leave-active{transition:.5s}",document.head.appendChild(t);import{a as e,i as a,o,j as i,k as s,w as n}from"./index.5a06cc5a.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.43ac9423.js";import{A as r}from"./index.0f62caa7.js";import"./RightOutlined.177f594b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.3c41385f.js";import"./index.6c2187a3.js";import"./UpOutlined.93565ff1.js";import"./LeftOutlined.87d99e02.js";import"./index.3d271759.js";import{b as m,S as p}from"./index.813fa6f2.js";import"./RightOutlined.18857b33.js";import"./useTimeout.f9167c02.js";import"./tsxHelper.7d018852.js";import"./index.1b9ab3b5.js";import"./domUtils.a8aece5c.js";import"./index.2d373899.js";import"./animation.91509674.js";import"./useScrollTo.06e85a9e.js";import c from"./TargetContent.26c63b04.js";var l=e({components:{LazyContainer:m,TargetContent:c,Skeleton:p,Alert:r},setup:()=>({})});const d={class:"p-4 lazy-base-demo"},u={class:"lazy-base-demo-wrap"},f=s("h1",null,"向下滚动",-1),j={class:"lazy-base-demo-box"};l.render=function(t,e,r,m,p,c){const l=a("Alert"),x=a("TargetContent"),b=a("LazyContainer");return o(),i("div",d,[s(l,{message:"自定义动画",description:"懒加载组件显示动画",type:"info","show-icon":""}),s("div",u,[f,s("div",j,[s(b,{transitionName:"custom"},{default:n((()=>[s(x)])),_:1})])])])};export default l;