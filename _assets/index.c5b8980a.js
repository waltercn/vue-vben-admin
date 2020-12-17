import{d6 as e,a as r,r as i,u as o,O as t,F as s,cM as a,dg as n,i as d,o as m,j as l,ad as p,aH as c,aI as f,aJ as j,k as u,w as b,p as x,n as g}from"./index.54b7cc7b.js";import"./xlsx.a48e520c.js";import"./index.a52d88f6.js";import"./index.a439205d.js";import"./Trigger.9f179c61.js";import"./omit.a368f9ae.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.6cff96b8.js";import"./CheckOutlined.29be3015.js";import"./index.a5bb273d.js";import"./colors.5745025a.js";import"./index.10e116a5.js";import"./RightOutlined.0becd0a0.js";import"./index.39160d78.js";import"./types.c19bf052.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.eedde627.js";import"./_baseFor.f4e5f03f.js";import"./index.56208f19.js";import"./index.a172b251.js";import"./index.3d154f97.js";import"./index.48bb8c88.js";import"./UpOutlined.78f2a1da.js";import"./LeftOutlined.ec9c5e19.js";import"./index.2a5e56d5.js";import"./index.551ba04e.js";import"./index.b96a1214.js";import"./index.dfac5dac.js";import"./index.9dad5c27.js";import"./zh_CN.0242bd16.js";import{T as E}from"./TableAction.5cb35fa3.js";import"./index.5869ffa6.js";import"./CaretDownFilled.9914b908.js";import"./CheckOutlined.849e8bad.js";import"./CloseOutlined.2f4d26e5.js";import{s as y}from"./EditTableHeaderIcon.77d2e466.js";import"./DownOutlined.56cf5734.js";import"./FullscreenOutlined.402f7a3b.js";import"./LeftOutlined.f377cd8d.js";import"./functional.f8b4d09e.js";import"./RedoOutlined.7a1d2243.js";import"./RightOutlined.81bd46b9.js";import"./SettingOutlined.76369938.js";import"./useTimeout.8036edbf.js";import"./useDebounce.eb7ff478.js";import"./useEventListener.89e18c2c.js";import"./useBreakpoint.7a6f6445.js";import"./useDescription.ff5147c5.js";import"./index.f02aa61d.js";import"./index.dcd2bc4f.js";import"./tsxHelper.948ab144.js";import"./index.32b7dc7d.js";import"./index.90135c93.js";import"./useForm.ba76dbfd.js";import{u as R}from"./index.611d4577.js";import"./useModalContext.fd3dbdef.js";import"./domUtils.745b64ab.js";import"./useFullScreen.ca67aa0c.js";import"./uuid.40269c00.js";import"./useWindowSizeFn.86d8ff28.js";import"./useExpose.5bc091f5.js";import"./index.6f8ac870.js";import{u as T}from"./useTable.49a5ca8e.js";import{getColumns as C}from"./data.fb9355d0.js";import O from"./DetailModal.fd64f265.js";var D;(D||(D={})).Error="/error";var h=r({name:"ErrorHandler",components:{DetailModal:O,BasicTable:y,TableAction:E},setup(){const r=i(),d=i([]),{t:m}=o(),[l,{setTableData:p}]=T({title:m("sys.errorLog.tableTitle"),columns:C(),actionColumn:{width:80,title:"Action",dataIndex:"action",slots:{customRender:"action"}}}),[c,{openModal:f}]=R();return t((()=>n.getErrorInfoState),(e=>{s((()=>{p(a(e))}))}),{immediate:!0}),{register:l,registerModal:c,handleDetail:function(e){r.value=e,f(!0)},fireVueError:function(){throw new Error("fire vue error!")},fireResourceError:function(){d.value.push(`${(new Date).getTime()}.png`)},fireAjaxError:async function(){await e.request({url:D.Error,method:"GET"})},imgListRef:d,rowInfoRef:r,t:m}}});const k={class:"p-4"};h.render=function(e,r,i,o,t,s){const a=d("DetailModal"),n=d("a-button"),E=d("TableAction"),y=d("BasicTable");return m(),l("div",k,[(m(!0),l(p,null,c(e.imgListRef,(e=>f((m(),l("img",{key:e,src:e},null,8,["src"])),[[j,!1]]))),128)),u(a,{info:e.rowInfoRef,onRegister:e.registerModal},null,8,["info","onRegister"]),u(y,{onRegister:e.register,class:"error-handle-table"},{toolbar:b((()=>[u(n,{onClick:e.fireVueError,type:"primary"},{default:b((()=>[x(g(e.t("sys.errorLog.fireVueError")),1)])),_:1},8,["onClick"]),u(n,{onClick:e.fireResourceError,type:"primary"},{default:b((()=>[x(g(e.t("sys.errorLog.fireResourceError")),1)])),_:1},8,["onClick"]),u(n,{onClick:e.fireAjaxError,type:"primary"},{default:b((()=>[x(g(e.t("sys.errorLog.fireAjaxError")),1)])),_:1},8,["onClick"])])),action:b((({record:r})=>[u(E,{actions:[{label:e.t("sys.errorLog.tableActionDesc"),onClick:e.handleDetail.bind(null,r)}]},null,8,["actions"])])),_:1},8,["onRegister"])])};export default h;