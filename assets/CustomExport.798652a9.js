import{_ as e}from"./index.007296ab.js";import{E as i}from"./index.b94e0ef9.js";import{c as t,d as o,j as s}from"./data.48c5d6d3.js";import{b as r}from"./index.35af8c02.js";import{_ as d}from"./index.ccb911a1.js";import{d as a,h as n,o as p,i as m,w as j,j as c,m as l}from"./index.72961157.js";import"./index.af36237f.js";import"./SearchOutlined.b22e7653.js";import"./CheckOutlined.8d068b58.js";import"./DownOutlined.884ac450.js";import"./index.48e86f43.js";import"./index.3d443af7.js";import"./index.730c12b4.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.d43a29e4.js";import"./isEqual.2bab8c16.js";import"./get.4975c5e2.js";import"./_baseProperty.74f89655.js";import"./toInteger.f9979050.js";import"./index.6b4825f2.js";import"./index.0630f2f2.js";import"./EyeOutlined.401aa8b7.js";import"./index.3d7a4aea.js";import"./index.921e8863.js";import"./UpOutlined.96ecf785.js";import"./index.af96b2ae.js";import"./RightOutlined.ba1a4c59.js";import"./RedoOutlined.27f739c9.js";import"./index.8b1e1205.js";import"./EllipsisOutlined.355a4652.js";import"./types.fa1dbe2e.js";import"./Tree.acd42032.js";import"./util.1c24ad6f.js";/* empty css              */import"./uuid.2e082eac.js";import"./index.f496c18c.js";import"./DeleteOutlined.6dc16ac6.js";import"./index.46ecc65f.js";import"./index.36e82902.js";import"./index.7981f544.js";import"./index.f458f5b1.js";import"./index.054c67b3.js";import"./domUtils.0adaad38.js";import"./_stringToArray.cf2e328f.js";import"./useTimeout.3a4cc0a3.js";import"./useScrollTo.2abae1df.js";import"./animation.a805db4d.js";import"./index.d1603dcb.js";import"./LeftOutlined.282a7177.js";import"./download.06161254.js";import"./index.f48dd062.js";import"./DoubleLeftOutlined.630b0f11.js";import"./DoubleRightOutlined.8fd7917b.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.df2cae6a.js";import"./CaretDownFilled.91550b18.js";import"./clickOutside.6847b077.js";import"./useSortable.68c47127.js";import"./useWindowSizeFn.048864be.js";import"./SettingOutlined.127ce663.js";import"./useExpose.86a2b87b.js";import"./useForm.411a60fd.js";import"./FullscreenOutlined.0333d80b.js";import"./index.eb04067c.js";import"./index.7c158f23.js";import"./usePageContext.dd16cf21.js";import"./ArrowLeftOutlined.4b998873.js";var f=a({components:{BasicTable:e,ExpExcelModel:i,PageWrapper:d},setup(){const[e,{openModal:i}]=r();return{defaultHeader:function({filename:e,bookType:i}){s({data:o,filename:e,write2excelOpts:{bookType:i}})},columns:t,data:o,register:e,openModal:i}}});const u=l(" 导出 ");f.render=function(e,i,t,o,s,r){const d=n("a-button"),a=n("BasicTable"),l=n("ExpExcelModel"),f=n("PageWrapper");return p(),m(f,{title:"导出示例",content:"可以选择导出格式"},{default:j((()=>[c(a,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:j((()=>[c(d,{onClick:e.openModal},{default:j((()=>[u])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"]),c(l,{onRegister:e.register,onSuccess:e.defaultHeader},null,8,["onRegister","onSuccess"])])),_:1})};export default f;