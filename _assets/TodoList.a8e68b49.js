let t=document.createElement("style");t.innerHTML=".todo-list[data-v-352db18b]{position:relative}.todo-list__total[data-v-352db18b]{display:inline-block;width:20px;height:20px;font-size:12px;line-height:20px;color:#fff;text-align:center;background:rgba(255,0,0,.7);border-radius:50%}.todo-list__all[data-v-352db18b]{position:absolute;top:0;right:10px;height:56px;font-size:24px;line-height:56px;text-align:center;cursor:pointer}.todo-list__item[data-v-352db18b]{padding:8px}.todo-list__item-title[data-v-352db18b]{font-size:14px;font-weight:400;line-height:22px;color:#1c1d21}.todo-list__item-memo[data-v-352db18b]{font-size:12px;font-weight:400;line-height:22px;color:#7c8087}.todo-list__item-desc[data-v-352db18b]{font-size:12px;line-height:22px;color:#7c8087}",document.head.appendChild(t);import{k as e,J as i,cO as o,a as s,d6 as a,d7 as l,i as n,o as r,j as d,aM as p,aW as m,n as c,p as f,bp as u}from"./index.29c86768.js";import"./xlsx.a48e520c.js";import"./index.2e2f5f7d.js";import"./Trigger.6c22f7c7.js";import"./omit.d533ea5b.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.b890e848.js";import"./CheckOutlined.f30665d7.js";import"./colors.673869cf.js";import"./RightOutlined.fb87c3f1.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.7c0d94fd.js";import{T as b}from"./index.5c941694.js";import"./LeftOutlined.551d5451.js";import{T as _}from"./index.8f2ab325.js";import"./index.f240ef55.js";import"./zh_CN.0242bd16.js";import{L as j}from"./index.df7549de.js";import{a as g}from"./index.d8838e74.js";import"./RightOutlined.76f7bf3c.js";import"./useTimeout.35f8dc13.js";import"./tsxHelper.7e7d25f8.js";import"./index.52262a17.js";import"./animation.a2928106.js";import"./useScrollTo.4e4d37c3.js";import{t as h}from"./data.edc06832.js";var x={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"};function v(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var O=function(t,s){var a=function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?Object(arguments[e]):{},o=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(i).filter((function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable})))),o.forEach((function(e){v(t,e,i[e])}))}return t}({},t,s.attrs);return e(o,i(a,{icon:x}),null)};O.displayName="EllipsisOutlined",O.inheritAttrs=!1;var y=s({name:"TodoList",components:{CollapseContainer:g,List:j,ListItem:j.Item,ListItemMeta:j.Item.Meta,Tag:_,Tooltip:b,EllipsisOutlined:O},setup:()=>({todoList:h})});const T=u("data-v-352db18b");a("data-v-352db18b");const L=e("span",null,[f(" 待办事项 "),e("span",{class:"todo-list__total"},"30")],-1),w={class:"todo-list__item-title"},z={class:"todo-list__item-memo"},k={class:"todo-list__item-desc"},C=e("br",null,null,-1),I=f("待审批"),E={class:"todo-list__all"},M=f("查看更多");l();const P=T(((t,i,o,s,a,l)=>{const u=n("ListItemMeta"),b=n("Tag"),_=n("a-button"),j=n("ListItem"),g=n("List"),h=n("EllipsisOutlined"),x=n("Tooltip"),v=n("CollapseContainer");return r(),d(v,{class:"todo-list",title:"待办事项",canExpan:!1},{title:T((()=>[L])),default:T((()=>[e(g,null,{default:T((()=>[(r(!0),d(p,null,m(t.todoList,(t=>(r(),d(j,{key:t.id,class:"todo-list__item"},{default:T((()=>[e(u,null,{title:T((()=>[e("div",null,[e("span",w,c(t.title),1),e("span",z,c(t.memo),1)])])),description:T((()=>[e("div",k,[f(" 提交人："+c(t.sbmter)+" ",1),C,f(" 提交时间："+c(t.sbmtTime),1)])])),_:2},1024),e(_,{type:"link"},{default:T((()=>[e(b,{color:"blue"},{default:T((()=>[I])),_:1})])),_:1})])),_:2},1024)))),128))])),_:1}),e("div",E,[e(x,{placement:"topRight"},{title:T((()=>[M])),default:T((()=>[e(h)])),_:1})])])),_:1})}));y.render=P,y.__scopeId="data-v-352db18b";export default y;