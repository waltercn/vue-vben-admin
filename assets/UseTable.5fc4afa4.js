import{d as e,g as t,h as o,o as i,i as s,j as n,w as a,m as l}from"./index.21e8ff59.js";import"./index.f09ce96b.js";import"./_stringToArray.0ef76801.js";import"./domUtils.99413d3b.js";import"./index.6b8b099a.js";import"./index.25bbb200.js";import"./index.2f48e981.js";import"./CheckOutlined.ae5c5764.js";import"./index.ccac31ab.js";import{_ as c}from"./index.74204621.js";import"./FullscreenOutlined.1f4f5c68.js";import"./RightOutlined.404e21a2.js";import"./SettingOutlined.b2d29256.js";import"./useTimeout.6dfc64b8.js";import"./index.24e08a3a.js";import"./animation.164e71fc.js";import"./useScrollTo.22d7cad4.js";import"./useAttrs.5f761777.js";import"./useWindowSizeFn.25716901.js";import"./index.fc7362a8.js";import"./uuid.a6cec785.js";import"./download.471463f3.js";import"./useForm.738bf575.js";import"./useSortable.02b4f4da.js";import"./useExpose.951536e1.js";import{u as r}from"./useTable.ab0a068a.js";import{getBasicColumns as m,getBasicShortColumns as u}from"./tableData.7aa0192c.js";import{d}from"./table.d04a902d.js";var f=e({components:{BasicTable:c},setup(){const{createMessage:e}=t(),[o,{setLoading:i,setColumns:s,getColumns:n,getDataSource:a,reload:l,getPaginationRef:c,setPagination:f,getSelectRows:g,getSelectRowKeys:p,setSelectedRowKeys:b,clearSelectedRowKeys:C}]=r({canResize:!0,title:"useTable示例",titleHelpMessage:"使用useTable调用表格内方法",api:d,columns:m(),rowKey:"id",showTableSetting:!0,rowSelection:{type:"checkbox"}});return{registerTable:o,changeLoading:function(){i(!0),setTimeout((()=>{i(!1)}),1e3)},changeColumns:function(){s(u())},reloadTable:function(){s(m()),l({page:1})},getColumn:function(){e.info("请在控制台查看！")},getTableData:function(){e.info("请在控制台查看！")},getPagination:function(){e.info("请在控制台查看！")},setPaginationInfo:function(){f({current:2}),l()},getSelectRowList:function(){e.info("请在控制台查看！")},getSelectRowKeyList:function(){e.info("请在控制台查看！")},setSelectedRowKeyList:function(){b(["0","1","2"])},clearSelect:function(){C()}}}});const g={class:"p-4"},p={class:"mb-4"},b=l("还原"),C=l("开启loading"),j=l("更改Columns"),k=l("获取Columns"),S=l("获取表格数据"),w=l("跳转到第2页"),T={class:"mb-4"},R=l("获取选中行"),_=l("获取选中行Key"),x=l("设置选中行"),y=l("清空选中行"),h=l("获取分页信息");f.render=function(e,t,l,c,r,m){const u=o("a-button"),d=o("BasicTable");return i(),s("div",g,[n("div",p,[n(u,{class:"mr-2",onClick:e.reloadTable},{default:a((()=>[b])),_:1},8,["onClick"]),n(u,{class:"mr-2",onClick:e.changeLoading},{default:a((()=>[C])),_:1},8,["onClick"]),n(u,{class:"mr-2",onClick:e.changeColumns},{default:a((()=>[j])),_:1},8,["onClick"]),n(u,{class:"mr-2",onClick:e.getColumn},{default:a((()=>[k])),_:1},8,["onClick"]),n(u,{class:"mr-2",onClick:e.getTableData},{default:a((()=>[S])),_:1},8,["onClick"]),n(u,{class:"mr-2",onClick:e.setPaginationInfo},{default:a((()=>[w])),_:1},8,["onClick"])]),n("div",T,[n(u,{class:"mr-2",onClick:e.getSelectRowList},{default:a((()=>[R])),_:1},8,["onClick"]),n(u,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:a((()=>[_])),_:1},8,["onClick"]),n(u,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:a((()=>[x])),_:1},8,["onClick"]),n(u,{class:"mr-2",onClick:e.clearSelect},{default:a((()=>[y])),_:1},8,["onClick"]),n(u,{class:"mr-2",onClick:e.getPagination},{default:a((()=>[h])),_:1},8,["onClick"])]),n(d,{onRegister:e.registerTable},null,8,["onRegister"])])};export default f;