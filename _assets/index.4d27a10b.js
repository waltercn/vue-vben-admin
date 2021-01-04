import{a as e,r as o,h as l,i as n,o as i,j as a,k as s,w as t}from"./index.29c86768.js";import"./xlsx.a48e520c.js";import"./index.2e2f5f7d.js";import"./Trigger.6c22f7c7.js";import"./omit.d533ea5b.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.b890e848.js";import"./CheckOutlined.f30665d7.js";import{s as p}from"./index.27831eb4.js";import"./colors.673869cf.js";import"./RightOutlined.fb87c3f1.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.7c0d94fd.js";import"./index.acb2ea2e.js";import"./index.a172b251.js";import"./index.5c941694.js";import"./index.b1950fab.js";import"./UpOutlined.b2cfd225.js";import"./index.4db9ca1f.js";import"./index.8f2ab325.js";import"./index.251803e9.js";import"./index.f54a7c5a.js";import"./index.63b5feca.js";import{a as r}from"./index.d8838e74.js";import"./CloseOutlined.4823f3c8.js";import"./FullscreenOutlined.4461ae5c.js";import"./LoadingOutlined.ec80bfa3.js";import"./RightOutlined.76f7bf3c.js";import"./useTimeout.35f8dc13.js";import"./tsxHelper.7e7d25f8.js";import"./index.52262a17.js";import"./animation.a2928106.js";import"./useScrollTo.4e4d37c3.js";import"./useAttrs.13d68406.js";import"./index.b453a0ba.js";import"./index.7aebb02d.js";import"./useWindowSizeFn.05a9f1df.js";import{o as c}from"./select.5be0acfa.js";const d=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:({schema:e,formModel:o})=>({placeholder:"自定义placeholder",onChange:e=>{}}),renderComponentContent:()=>({prefix:()=>"pSlot",suffix:()=>"sSlot"})},{field:"field2",component:"Input",label:"带后缀",defaultValue:"111",colProps:{span:8},componentProps:{onChange:e=>{}},suffix:"天"},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field8",component:"Checkbox",label:"字段8",colProps:{span:8},renderComponentContent:"Check"},{field:"field9",component:"Switch",label:"字段9",colProps:{span:8}},{field:"field10",component:"RadioButtonGroup",label:"字段10",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field11",component:"Cascader",label:"字段11",colProps:{span:8},componentProps:{options:[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}]}},{field:"field30",component:"ApiSelect",label:"远程下拉",required:!0,componentProps:{api:c},colProps:{span:8},defaultValue:"0"},{field:"field20",component:"InputNumber",label:"字段20",required:!0,colProps:{span:8}}];var m=e({components:{BasicForm:p,CollapseContainer:r},setup(){const e=o(null),{createMessage:n}=l();return{schemas:d,handleSubmit:e=>{n.success("click search,values:"+JSON.stringify(e))},check:e}}});const u={class:"m-4"};m.render=function(e,o,l,p,r,c){const d=n("BasicForm"),m=n("CollapseContainer");return i(),a("div",u,[s(m,{title:"基础示例"},{default:t((()=>[s(d,{autoFocusFirstItem:"",labelWidth:100,schemas:e.schemas,actionColOptions:{span:24},onSubmit:e.handleSubmit},null,8,["schemas","onSubmit"])])),_:1})])};export default m;