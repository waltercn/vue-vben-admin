import{H as e,a as t,r as s,I as l,f as a,ay as n,dj as i,d2 as o,Z as r}from"./index.29c86768.js";import{a as d}from"./index.d8838e74.js";import{D as c}from"./index.7ccb3c45.js";import{g as p}from"./tsxHelper.7e7d25f8.js";var u={useCollapse:e.bool.def(!0),title:e.string.def(""),size:e.oneOf(["small","default","middle",void 0]).def("small"),bordered:e.bool.def(!0),column:{type:[Number,Object],default:()=>({xxl:4,xl:3,lg:3,md:3,sm:2,xs:1})},collapseOptions:{type:Object,default:null},schema:{type:Array,default:()=>[]},data:e.object};var m=t({name:"Description",props:u,emits:["register"],setup(e,{attrs:t,slots:u,emit:m}){const f=s(null),x=l((()=>({...e,...a(f)}))),b=l((()=>({...a(x),title:void 0}))),h=l((()=>!!a(x).title)),v=l((()=>({canExpand:!1,...a(b).collapseOptions}))),y=l((()=>({...t,...a(b)})));function j({label:e,labelMinWidth:t,labelStyle:s}){if(!s&&!t)return e;const l={...s,minWidth:`${t}px `};return n("div",{style:l},e)}const g=()=>n(c,{class:"description",...a(y)},(()=>function(){const{schema:e}=a(b);return a(e).map((e=>{const{render:t,field:s,span:l,show:i,contentMinWidth:o}=e,{data:d}=a(b);if(i&&r(i)&&!i(d))return null;const p=()=>r(t)?t(null==d?void 0:d[s],d):a(d)&&a(d)[s],u=o;return n(c.Item,{label:j(e),key:s,span:l},(()=>o?n("div",{style:{minWidth:`${u}px`}},p()):p()))}))}()));return m("register",{setDescProps:function(e){const t=i(a(f)||{},e);f.value=o(t)}}),()=>a(h)?(()=>{const t=e.useCollapse?g():n("div",null,g());if(!e.useCollapse)return t;const{canExpand:s,helpMessage:l}=a(v),{title:i}=a(x);return n(d,{title:i,canExpan:s,helpMessage:l},{default:()=>t,action:()=>p(u,"action")})})():g()}});export{m as D};