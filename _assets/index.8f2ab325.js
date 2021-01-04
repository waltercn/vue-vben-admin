import{a as e,P as o,v as n,x as c,S as l,k as t,r as i,aN as a,V as r,aM as s,c1 as u,bI as d}from"./index.29c86768.js";import{P as v,a as f}from"./colors.673869cf.js";function p(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}var b=e({name:"ACheckableTag",props:{prefixCls:o.string,checked:o.looseBool,onChange:{type:Function},onClick:{type:Function}},emits:["update:checked","change","click"],setup:function(e,o){var i=o.slots,a=o.emit,r=n("configProvider",c).getPrefixCls,s=function(o){var n=e.checked;a("update:checked",!n),a("change",!n),a("click",o)};return function(){var o,n,c=e.checked,a=e.prefixCls,u=r("tag",a),d=l(u,(p(o={},"".concat(u,"-checkable"),!0),p(o,"".concat(u,"-checkable-checked"),c),o));return t("span",{class:d,onClick:s},[null===(n=i.default)||void 0===n?void 0:n.call(i)])}}});function g(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function k(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!r(e)}var C=new RegExp("^(".concat(v.join("|"),")(-inverse)?$")),h=new RegExp("^(".concat(f.join("|"),")$")),m={prefixCls:o.string,color:{type:String},closable:o.looseBool.def(!1),closeIcon:o.VNodeChild,visible:o.looseBool,onClose:{type:Function},icon:o.VNodeChild},x=e({name:"ATag",emits:["update:visible","close"],setup:function(e,o){var r=o.slots,v=o.emit,f=o.attrs,p=n("configProvider",c).getPrefixCls,b=i(!0);a((function(){void 0!==e.visible&&(b.value=e.visible)}));var m=function(o){o.stopPropagation(),v("update:visible",!1),v("close",o),o.defaultPrevented||void 0===e.visible&&(b.value=!1)},x=function(){var o=e.color;return!!o&&(C.test(o)||h.test(o))};return function(){var o,n,c,i,a=e.prefixCls,v=e.icon,C=void 0===v?null===(n=r.icon)||void 0===n?void 0:n.call(r):v,h=e.color,P=e.closeIcon,j=void 0===P?null===(c=r.closeIcon)||void 0===c?void 0:c.call(r):P,y=e.closable,w=void 0!==y&&y,I=x(),O=p("tag",a),T={backgroundColor:h&&!x()?h:void 0},B=l(O,(g(o={},"".concat(O,"-").concat(h),I),g(o,"".concat(O,"-has-color"),h&&!I),g(o,"".concat(O,"-hidden"),!b.value),o)),F=C||null,N=null===(i=r.default)||void 0===i?void 0:i.call(r),S=F?t(s,null,[F,t("span",null,k(N)?N:{default:function(){return[N]}})]):N,V="onClick"in f,A=t("span",{class:B,style:T},[S,w?j?t("div",{class:"".concat(O,"-close-icon"),onClick:m},k(j)?j:{default:function(){return[j]}}):t(d,{class:"".concat(O,"-close-icon"),onClick:m},null):null]);return V?t(u,null,k(A)?A:{default:function(){return[A]}}):A}}});x.props=m,x.CheckableTag=b,x.install=function(e){return e.component(x.name,x),e.component(b.name,b),e};export{x as T};