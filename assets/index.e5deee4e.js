import r from"./DetailModal.c057a9ac.js";import{_ as e}from"./index.007296ab.js";import{b as i}from"./index.35af8c02.js";import{cW as o,d as t,r as s,u as a,aT as n,x as d,N as m,dw as l,h as p,o as c,i as f,aL as j,aM as u,a3 as b,b8 as x,j as g,w as E,m as y,l as O}from"./index.72961157.js";import{getColumns as R}from"./data.5b5491dc.js";import{g as T}from"./index.48e86f43.js";import{u as D}from"./useTable.f639279d.js";import"./index.0d2391e6.js";import"./index.939a3a90.js";import"./responsiveObserve.c545f1cc.js";import"./index.f458f5b1.js";import"./index.054c67b3.js";import"./domUtils.0adaad38.js";import"./_stringToArray.cf2e328f.js";import"./RightOutlined.ba1a4c59.js";/* empty css              */import"./useTimeout.3a4cc0a3.js";import"./useScrollTo.2abae1df.js";import"./animation.a805db4d.js";import"./get.4975c5e2.js";import"./useDescription.9ed72a68.js";import"./index.af36237f.js";import"./SearchOutlined.b22e7653.js";import"./CheckOutlined.8d068b58.js";import"./DownOutlined.884ac450.js";import"./index.3d443af7.js";import"./index.730c12b4.js";import"./vendor.3b1829c7.js";import"./findIndex.d43a29e4.js";import"./isEqual.2bab8c16.js";import"./_baseProperty.74f89655.js";import"./toInteger.f9979050.js";import"./index.8b1e1205.js";import"./EllipsisOutlined.355a4652.js";import"./types.fa1dbe2e.js";import"./index.f48dd062.js";import"./LeftOutlined.282a7177.js";import"./DoubleLeftOutlined.630b0f11.js";import"./DoubleRightOutlined.8fd7917b.js";import"./zh_CN.8094f4d6.js";import"./uuid.2e082eac.js";import"./index.f496c18c.js";import"./util.1c24ad6f.js";import"./DeleteOutlined.6dc16ac6.js";import"./EyeOutlined.401aa8b7.js";import"./index.7981f544.js";import"./scrollTo.c1e0f75f.js";import"./transButton.df2cae6a.js";import"./CaretDownFilled.91550b18.js";import"./clickOutside.6847b077.js";import"./index.0630f2f2.js";import"./index.921e8863.js";import"./UpOutlined.96ecf785.js";import"./index.af96b2ae.js";import"./useSortable.68c47127.js";import"./useWindowSizeFn.048864be.js";import"./index.36e82902.js";import"./SettingOutlined.127ce663.js";import"./useExpose.86a2b87b.js";import"./useForm.411a60fd.js";import"./FullscreenOutlined.0333d80b.js";import"./index.3d7a4aea.js";import"./index.6b4825f2.js";import"./RedoOutlined.27f739c9.js";import"./Tree.acd42032.js";import"./index.46ecc65f.js";import"./index.d1603dcb.js";import"./download.06161254.js";var h;(h||(h={})).Error="/error";var w=t({name:"ErrorHandler",components:{DetailModal:r,BasicTable:e,TableAction:T},setup(){const r=s(),e=s([]),{t:t}=a(),[p,{setTableData:c}]=D({title:t("sys.errorLog.tableTitle"),columns:R(),actionColumn:{width:80,title:"Action",dataIndex:"action",slots:{customRender:"action"}}}),[f,{openModal:j}]=i();return n((()=>l.getErrorInfoState),(r=>{d((()=>{c(m(r))}))}),{immediate:!0}),{register:p,registerModal:f,handleDetail:function(e){r.value=e,j(!0)},fireVueError:function(){throw new Error("fire vue error!")},fireResourceError:function(){e.value.push(`${(new Date).getTime()}.png`)},fireAjaxError:async function(){await o.request({url:h.Error,method:"GET"})},imgListRef:e,rowInfoRef:r,t:t}}});const C={class:"p-4"};w.render=function(r,e,i,o,t,s){const a=p("DetailModal"),n=p("a-button"),d=p("TableAction"),m=p("BasicTable");return c(),f("div",C,[(c(!0),f(j,null,u(r.imgListRef,(r=>b((c(),f("img",{key:r,src:r},null,8,["src"])),[[x,!1]]))),128)),g(a,{info:r.rowInfoRef,onRegister:r.registerModal},null,8,["info","onRegister"]),g(m,{onRegister:r.register,class:"error-handle-table"},{toolbar:E((()=>[g(n,{onClick:r.fireVueError,type:"primary"},{default:E((()=>[y(O(r.t("sys.errorLog.fireVueError")),1)])),_:1},8,["onClick"]),g(n,{onClick:r.fireResourceError,type:"primary"},{default:E((()=>[y(O(r.t("sys.errorLog.fireResourceError")),1)])),_:1},8,["onClick"]),g(n,{onClick:r.fireAjaxError,type:"primary"},{default:E((()=>[y(O(r.t("sys.errorLog.fireAjaxError")),1)])),_:1},8,["onClick"])])),action:E((({record:e})=>[g(d,{actions:[{label:r.t("sys.errorLog.tableActionDesc"),onClick:r.handleDetail.bind(null,e)}]},null,8,["actions"])])),_:1},8,["onRegister"])])};export default w;