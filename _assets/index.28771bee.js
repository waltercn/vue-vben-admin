import{H as e,a as t,r as s,I as a,f as i,ay as l,Z as o,de as r,cY as n}from"./index.5a06cc5a.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.3c41385f.js";import{a as p}from"./index.813fa6f2.js";import"./RightOutlined.18857b33.js";import{D as d}from"./index.e1d4c812.js";import"./useTimeout.f9167c02.js";import{g as c}from"./tsxHelper.7d018852.js";import"./index.1b9ab3b5.js";import"./domUtils.a8aece5c.js";import"./index.2d373899.js";import"./animation.91509674.js";import"./useScrollTo.06e85a9e.js";var m={useCollapse:e.bool.def(!0),title:e.string.def(""),size:e.oneOf(["small","default","middle",void 0]).def("small"),bordered:e.bool.def(!0),column:{type:[Number,Object],default:()=>({xxl:4,xl:3,lg:3,md:3,sm:2,xs:1})},collapseOptions:{type:Object,default:null},schema:{type:Array,default:()=>[]},data:e.object};var u=t({name:"Description",props:m,emits:["register"],setup(e,{attrs:t,slots:m,emit:u}){const f=s(null),j=a((()=>({...e,...i(f)}))),x=a((()=>({...i(j),title:void 0}))),b=a((()=>!!i(j).title)),h=a((()=>({canExpand:!1,...i(x).collapseOptions}))),y=a((()=>({...t,...i(x)})));function g({label:e,labelMinWidth:t,labelStyle:s}){if(!s&&!t)return e;const a={...s,minWidth:`${t}px `};return l("div",{style:a},e)}const v=()=>l(d,{class:"description",...i(y)},(()=>function(){const{schema:e}=i(x);return i(e).map((e=>{const{render:t,field:s,span:a,show:r,contentMinWidth:n}=e,{data:p}=i(x);if(r&&o(r)&&!r(p))return null;const c=()=>o(t)?t(null==p?void 0:p[s],p):i(p)&&i(p)[s],m=n;return l(d.Item,{label:g(e),key:s,span:a},(()=>n?l("div",{style:{minWidth:`${m}px`}},c()):c()))}))}()));return u("register",{setDescProps:function(e){const t=r(i(f)||{},e);f.value=n(t)}}),()=>i(b)?(()=>{const t=e.useCollapse?v():l("div",null,v());if(!e.useCollapse)return t;const{canExpand:s,helpMessage:a}=i(h),{title:o}=i(j);return l(p,{title:o,canExpan:s,helpMessage:a},{default:()=>t,action:()=>c(m,"action")})})():v()}});export default u;