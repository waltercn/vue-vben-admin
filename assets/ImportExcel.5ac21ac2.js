import{I as e}from"./index.b94e0ef9.js";import{_ as t}from"./index.007296ab.js";import{_ as i}from"./index.ccb911a1.js";import{d as s,r as o,h as r,o as a,i as d,w as m,j as p,aL as n,aM as c,m as j}from"./index.72961157.js";import"./vendor.3b1829c7.js";import"./index.af36237f.js";import"./SearchOutlined.b22e7653.js";import"./CheckOutlined.8d068b58.js";import"./DownOutlined.884ac450.js";import"./index.48e86f43.js";import"./index.3d443af7.js";import"./index.730c12b4.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.d43a29e4.js";import"./isEqual.2bab8c16.js";import"./get.4975c5e2.js";import"./_baseProperty.74f89655.js";import"./toInteger.f9979050.js";import"./index.6b4825f2.js";import"./index.0630f2f2.js";import"./EyeOutlined.401aa8b7.js";import"./index.3d7a4aea.js";import"./index.921e8863.js";import"./UpOutlined.96ecf785.js";import"./index.af96b2ae.js";import"./RightOutlined.ba1a4c59.js";import"./RedoOutlined.27f739c9.js";import"./index.8b1e1205.js";import"./EllipsisOutlined.355a4652.js";import"./types.fa1dbe2e.js";import"./Tree.acd42032.js";import"./util.1c24ad6f.js";/* empty css              */import"./uuid.2e082eac.js";import"./index.f496c18c.js";import"./DeleteOutlined.6dc16ac6.js";import"./index.46ecc65f.js";import"./index.35af8c02.js";import"./useTimeout.3a4cc0a3.js";import"./useWindowSizeFn.048864be.js";import"./index.f458f5b1.js";import"./index.054c67b3.js";import"./domUtils.0adaad38.js";import"./_stringToArray.cf2e328f.js";import"./useScrollTo.2abae1df.js";import"./animation.a805db4d.js";import"./FullscreenOutlined.0333d80b.js";import"./index.36e82902.js";import"./index.7981f544.js";import"./index.d1603dcb.js";import"./LeftOutlined.282a7177.js";import"./download.06161254.js";import"./index.f48dd062.js";import"./DoubleLeftOutlined.630b0f11.js";import"./DoubleRightOutlined.8fd7917b.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.df2cae6a.js";import"./CaretDownFilled.91550b18.js";import"./clickOutside.6847b077.js";import"./useSortable.68c47127.js";import"./SettingOutlined.127ce663.js";import"./useExpose.86a2b87b.js";import"./useForm.411a60fd.js";import"./index.eb04067c.js";import"./index.7c158f23.js";import"./usePageContext.dd16cf21.js";import"./ArrowLeftOutlined.4b998873.js";var l=s({components:{BasicTable:t,ImpExcel:e,PageWrapper:i},setup(){const e=o([]);return{loadDataSuccess:function(t){e.value=[];for(const i of t){const{header:t,results:s,meta:{sheetName:o}}=i,r=[];for(const e of t)r.push({title:e,dataIndex:e});e.value.push({title:o,dataSource:s,columns:r})}},tableListRef:e}}});const u=j(" 导入Excel ");l.render=function(e,t,i,s,o,j){const l=r("a-button"),f=r("ImpExcel"),b=r("BasicTable"),x=r("PageWrapper");return a(),d(x,{title:"excel数据导入示例"},{default:m((()=>[p(f,{onSuccess:e.loadDataSuccess},{default:m((()=>[p(l,{class:"m-3"},{default:m((()=>[u])),_:1})])),_:1},8,["onSuccess"]),(a(!0),d(n,null,c(e.tableListRef,((e,t)=>(a(),d(b,{key:t,title:e.title,columns:e.columns,dataSource:e.dataSource},null,8,["title","columns","dataSource"])))),128))])),_:1})};export default l;