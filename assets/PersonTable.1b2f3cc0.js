import{_ as e}from"./index.04121ac8.js";import{d as t,h as i,o,i as n,j as d,w as s,m as r}from"./index.d77f02a9.js";import{g as a}from"./index.b1a0a170.js";import{u as l}from"./useTable.9d174450.js";import"./index.17838d22.js";import"./SearchOutlined.000a1584.js";import"./CheckOutlined.7b7e8a9f.js";import"./DownOutlined.4bb15dc2.js";import"./index.a769eace.js";import"./index.d1623c3b.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.04df4c69.js";import"./isEqual.66f620a0.js";import"./get.e772b8a0.js";import"./_baseProperty.74f89655.js";import"./toInteger.007e1a46.js";import"./index.7e51aec0.js";import"./RightOutlined.91dd89cb.js";import"./EllipsisOutlined.d6473483.js";import"./types.7d2364ed.js";import"./index.2e77a795.js";import"./LeftOutlined.681613b8.js";import"./DoubleLeftOutlined.e3421569.js";import"./DoubleRightOutlined.664b79a8.js";import"./zh_CN.8094f4d6.js";import"./uuid.4588aa6c.js";import"./index.315d770f.js";import"./util.d366d351.js";import"./DeleteOutlined.841e45e2.js";import"./EyeOutlined.476b44c8.js";import"./index.61d5349a.js";/* empty css              */import"./scrollTo.c1e0f75f.js";import"./transButton.29cc983c.js";import"./CaretDownFilled.bd9e9cf3.js";import"./clickOutside.725d20cd.js";import"./domUtils.5a6e1164.js";import"./_stringToArray.7600767c.js";import"./index.c7d76346.js";import"./index.5bbc4673.js";import"./UpOutlined.d63ff681.js";import"./index.2eba2f77.js";import"./useSortable.fc1dee7e.js";import"./useTimeout.2d9628a9.js";import"./useWindowSizeFn.1e8107c9.js";import"./index.76712c7b.js";import"./index.074ee3be.js";import"./index.36fa56ba.js";import"./useScrollTo.3b6a2f4d.js";import"./animation.c2cd2812.js";import"./FullscreenOutlined.560f680a.js";import"./index.52f18b9b.js";import"./SettingOutlined.fb91ae0d.js";import"./useExpose.3c526196.js";import"./useForm.357a7f51.js";import"./index.eb1e31a4.js";import"./index.af54f8a9.js";import"./RedoOutlined.3ae45394.js";import"./Tree.ec906c96.js";import"./index.d61bd1bf.js";import"./index.2418de79.js";import"./download.a32a8ead.js";const m=[{title:"成员姓名",dataIndex:"name",editRow:!0},{title:"工号",dataIndex:"no",editRow:!0},{title:"所属部门",dataIndex:"dept",editRow:!0}],p=[{name:"John Brown",no:"00001",dept:"New York No. 1 Lake Park"},{name:"John Brown2",no:"00002",dept:"New York No. 2 Lake Park"},{name:"John Brown3",no:"00003",dept:"New York No. 3Lake Park"}];var c=t({components:{BasicTable:e,TableAction:a},setup(){const[e,{getDataSource:t}]=l({columns:m,showIndexColumn:!1,dataSource:p,actionColumn:{width:160,title:"操作",dataIndex:"action",slots:{customRender:"action"}},pagination:!1});function i(e){var t;null==(t=e.onEdit)||t.call(e,!0)}function o(e){var i;if(null==(i=e.onEdit)||i.call(e,!1),e.isNew){const i=t(),o=i.findIndex((t=>t.key===e.key));i.splice(o,1)}}function n(e){var t;null==(t=e.onEdit)||t.call(e,!1,!0)}return{registerTable:e,handleEdit:i,createActions:function(e,t){return e.editable?[{label:"保存",onClick:n.bind(null,e,t)},{label:"取消",popConfirm:{title:"是否取消编辑",confirm:o.bind(null,e,t)}}]:[{label:"编辑",onClick:i.bind(null,e)},{label:"删除"}]},handleAdd:function(){t().push({name:"",no:"",dept:"",editable:!0,isNew:!0})},getDataSource:t}}});const j=r(" 新增成员 ");c.render=function(e,t,r,a,l,m){const p=i("TableAction"),c=i("BasicTable"),u=i("a-button");return o(),n("div",null,[d(c,{onRegister:e.registerTable},{action:s((({record:t,column:i})=>[d(p,{actions:e.createActions(t,i)},null,8,["actions"])])),_:1},8,["onRegister"]),d(u,{block:"",class:"mt-5",type:"dashed",onClick:e.handleAdd},{default:s((()=>[j])),_:1},8,["onClick"])])};export default c;