import{d as s,a6 as e,bI as a,h as i,o as t,i as o,aL as l,j as r,ab as c,ac as n,l as d,k as m,m as p}from"./index.263e87c1.js";import{_ as f}from"./index.a1dae3eb.js";import"./_stringToArray.cad96220.js";import"./domUtils.842bf6df.js";import"./index.a73e59fe.js";import"./index.7af9597f.js";import"./index.9380c6e4.js";import"./index.6fa633b9.js";import"./FullscreenOutlined.f8a8dae1.js";import"./RightOutlined.d0259003.js";import"./useTimeout.4920e0e1.js";import"./index.dba68c94.js";import"./animation.3878be1e.js";import"./useScrollTo.e15f955c.js";import"./useAttrs.a43ee0a8.js";import"./useWindowSizeFn.c5c953e5.js";import"./index.a2a48fd0.js";import"./uuid.a6cec785.js";import"./download.2bed4871.js";import{_ as u}from"./index.f7c7adf0.js";import"./usePageContext.929623d6.js";import{searchList as _,actions as j,schemas as x}from"./data.cec9f45c.js";var C=s({components:{Icon:e,Tag:a,BasicForm:f,PageWrapper:u},setup:()=>({prefixCls:"list-search",list:_,actions:j,schemas:x})});const h=l("data-v-39a749d8"),b=h(((s,e,a,l,f,u)=>{const _=i("BasicForm"),j=i("Icon"),x=i("Tag"),C=i("a-list-item-meta"),b=i("a-list-item"),v=i("a-list"),$=i("PageWrapper");return t(),o($,{class:s.prefixCls,title:"搜索列表"},{headerContent:h((()=>[r(_,{class:`${s.prefixCls}__header-form`,labelWidth:100,schemas:s.schemas,showActionButtonGroup:!1},null,8,["class","schemas"])])),default:h((()=>[r("div",{class:`${s.prefixCls}__container`},[r(v,null,{default:h((()=>[(t(!0),o(c,null,n(s.list,(e=>(t(),o(b,{key:e.id},{default:h((()=>[r(C,null,{description:h((()=>[r("div",{class:`${s.prefixCls}__content`},d(e.content),3),r("div",{class:`${s.prefixCls}__action`},[(t(!0),o(c,null,n(s.actions,((e,a)=>(t(),o("div",{key:a,class:`${s.prefixCls}__action-item`},[e.icon?(t(),o(j,{key:0,class:`${s.prefixCls}__action-icon`,icon:e.icon,color:e.color},null,8,["class","icon","color"])):m("",!0),p(" "+d(e.text),1)],2)))),128)),r("span",{class:`${s.prefixCls}__time`},d(e.time),3)],2)])),title:h((()=>[r("p",{class:`${s.prefixCls}__title`},d(e.title),3),r("div",null,[(t(!0),o(c,null,n(e.description,((s,e)=>(t(),o(x,{key:e,class:"mb-2"},{default:h((()=>[p(d(s),1)])),_:2},1024)))),128))])])),_:2},1024)])),_:2},1024)))),128))])),_:1})],2)])),_:1},8,["class"])}));C.render=b,C.__scopeId="data-v-39a749d8";export default C;