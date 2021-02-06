import{_ as e}from"./index.48e86f43.js";import{a as o}from"./index.f458f5b1.js";import{d as i,r as n,g as a,h as l,o as t,i as s,w as p,j as r}from"./index.72961157.js";import{_ as d}from"./index.ccb911a1.js";import{o as c}from"./select.0847ae4a.js";import"./index.3d443af7.js";import"./index.730c12b4.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.d43a29e4.js";import"./isEqual.2bab8c16.js";import"./get.4975c5e2.js";import"./_baseProperty.74f89655.js";import"./toInteger.f9979050.js";import"./index.6b4825f2.js";import"./index.0630f2f2.js";import"./SearchOutlined.b22e7653.js";import"./EyeOutlined.401aa8b7.js";import"./index.af36237f.js";import"./CheckOutlined.8d068b58.js";import"./DownOutlined.884ac450.js";import"./index.3d7a4aea.js";import"./index.921e8863.js";import"./UpOutlined.96ecf785.js";import"./index.af96b2ae.js";import"./RightOutlined.ba1a4c59.js";import"./RedoOutlined.27f739c9.js";import"./index.8b1e1205.js";import"./EllipsisOutlined.355a4652.js";import"./types.fa1dbe2e.js";import"./Tree.acd42032.js";import"./util.1c24ad6f.js";/* empty css              */import"./uuid.2e082eac.js";import"./index.f496c18c.js";import"./DeleteOutlined.6dc16ac6.js";import"./index.46ecc65f.js";import"./index.35af8c02.js";import"./useTimeout.3a4cc0a3.js";import"./useWindowSizeFn.048864be.js";import"./FullscreenOutlined.0333d80b.js";import"./index.36e82902.js";import"./index.7981f544.js";import"./index.d1603dcb.js";import"./LeftOutlined.282a7177.js";import"./download.06161254.js";import"./domUtils.0adaad38.js";import"./_stringToArray.cf2e328f.js";import"./index.054c67b3.js";import"./useScrollTo.2abae1df.js";import"./animation.a805db4d.js";import"./index.eb04067c.js";import"./index.7c158f23.js";import"./usePageContext.dd16cf21.js";import"./transButton.df2cae6a.js";import"./ArrowLeftOutlined.4b998873.js";const m=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:({schema:e,formModel:o})=>({placeholder:"自定义placeholder",onChange:e=>{}}),renderComponentContent:()=>({prefix:()=>"pSlot",suffix:()=>"sSlot"})},{field:"field2",component:"Input",label:"带后缀",defaultValue:"111",colProps:{span:8},componentProps:{onChange:e=>{}},suffix:"天"},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field8",component:"Checkbox",label:"字段8",colProps:{span:8},renderComponentContent:"Check"},{field:"field9",component:"Switch",label:"字段9",colProps:{span:8}},{field:"field10",component:"RadioButtonGroup",label:"字段10",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field11",component:"Cascader",label:"字段11",colProps:{span:8},componentProps:{options:[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}]}},{field:"field30",component:"ApiSelect",label:"远程下拉",required:!0,componentProps:{api:c},colProps:{span:8},defaultValue:"0"},{field:"field20",component:"InputNumber",label:"字段20",required:!0,colProps:{span:8}}];var u=i({components:{BasicForm:e,CollapseContainer:o,PageWrapper:d},setup(){const e=n(null),{createMessage:o}=a();return{schemas:m,handleSubmit:e=>{o.success("click search,values:"+JSON.stringify(e))},check:e}}});u.render=function(e,o,i,n,a,d){const c=l("BasicForm"),m=l("CollapseContainer"),u=l("PageWrapper");return t(),s(u,{title:"表单基础示例"},{default:p((()=>[r(m,{title:"基础示例"},{default:p((()=>[r(c,{autoFocusFirstItem:"",labelWidth:100,schemas:e.schemas,actionColOptions:{span:24},onSubmit:e.handleSubmit},null,8,["schemas","onSubmit"])])),_:1})])),_:1})};export default u;