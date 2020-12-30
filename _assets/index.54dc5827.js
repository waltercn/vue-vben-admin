let e=document.createElement("style");e.innerHTML=".form-wrap[data-v-46649975]{padding:24px;background:#fff}",document.head.appendChild(e);import{a as o,h as t,d0 as s,d1 as r,i,o as a,j as n,k as l,bi as p,p as d}from"./index.5a06cc5a.js";import"./xlsx.a48e520c.js";import"./index.285e765e.js";import"./Trigger.99f55fa6.js";import"./omit.dc68979e.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.43ac9423.js";import"./CheckOutlined.a9c880f1.js";import{s as m}from"./index.27a16a8f.js";import"./colors.fef6a1d3.js";import"./RightOutlined.177f594b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.3c41385f.js";import"./index.2d99723f.js";import"./index.a172b251.js";import"./index.39112e54.js";import"./index.d758c27b.js";import"./UpOutlined.93565ff1.js";import"./index.4befb70e.js";import"./index.78155a1f.js";import"./index.5d3cdfa6.js";import"./index.f07c31d6.js";import"./index.6da2e83a.js";import"./LoadingOutlined.91523ad2.js";import"./RightOutlined.18857b33.js";import"./tsxHelper.7d018852.js";import"./index.2d373899.js";import"./useAttrs.00256126.js";import"./index.f0b16be7.js";import{u as c}from"./useForm.5208afd5.js";const u=[{field:"title",component:"Input",label:"标题",componentProps:{placeholder:"给目标起个名字"},required:!0},{field:"time",component:"RangePicker",label:"起止日期",required:!0},{field:"target",component:"InputTextArea",label:"目标描述",componentProps:{placeholder:"请输入你的阶段性工作目标",rows:4},required:!0},{field:"metrics",component:"InputTextArea",label:"衡量标准",componentProps:{placeholder:"请输入衡量标准",rows:4},required:!0},{field:"client",component:"Input",label:"客户",helpMessage:"目标的服务对象",subLabel:"( 选填 )",componentProps:{placeholder:"请描述你服务的客户，内部客户直接 @姓名／工号"}},{field:"inviteer",component:"Input",label:"邀评人",subLabel:"( 选填 )",componentProps:{placeholder:"请直接 @姓名／工号，最多可邀请 5 人"}},{field:"weights",component:"InputNumber",label:"权重",subLabel:"( 选填 )",componentProps:{formatter:e=>e?`${e}%`:"",parser:e=>e.replace("%",""),placeholder:"请输入"}},{field:"disclosure",component:"RadioGroup",label:"目标公开",itemProps:{extra:"客户、邀评人默认被分享"},componentProps:{options:[{label:"公开",value:"1"},{label:"部分公开",value:"2"},{label:"不公开",value:"3"}]}},{field:"disclosurer",component:"Select",label:" ",show:({model:e})=>"2"===e.disclosure,componentProps:{placeholder:"公开给",mode:"multiple",options:[{label:"同事1",value:"1"},{label:"同事2",value:"2"},{label:"同事3",value:"3"}]}}];var f=o({components:{BasicForm:m},setup(){const{createMessage:e}=t(),[o,{validate:s,setProps:r}]=c({labelCol:{span:7},wrapperCol:{span:10},schemas:u,actionColOptions:{offset:8},submitButtonOptions:{text:"提交"},submitFunc:async function(){try{await s(),r({submitButtonOptions:{loading:!0}}),setTimeout((()=>{r({submitButtonOptions:{loading:!1}}),e.success("提交成功！")}),2e3)}catch(e){}}});return{register:o}}});const b=p("data-v-46649975");s("data-v-46649975");const j=d(" 表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。 "),x={class:"m-5 form-wrap"};r();const g=b(((e,o,t,s,r,p)=>{const d=i("a-page-header"),m=i("BasicForm");return a(),n("div",null,[l(d,{title:"基础表单",ghost:!1},{default:b((()=>[j])),_:1}),l("div",x,[l(m,{onRegister:e.register},null,8,["onRegister"])])])}));f.render=g,f.__scopeId="data-v-46649975";export default f;