import{a as i,r as e,i as o,o as s,j as t,w as r,k as d,J as a}from"./index.a6ab9244.js";import"./xlsx.9d951958.js";import"./index.54ab32c1.js";import"./Trigger.c98260cb.js";import"./omit.bdc49d67.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.abe3aef5.js";import"./CheckOutlined.8b8f8ab7.js";import{s as m}from"./index.5edef697.js";import"./index.278c333c.js";import"./colors.eda34fc4.js";import"./index.6a677bcd.js";import"./RightOutlined.095e9d4c.js";import"./types.d260ef98.js";import"./index.fa2eab41.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.409025a3.js";import"./index.c6a9e5cf.js";import"./index.6512df14.js";import"./UpOutlined.d1c97ab1.js";import"./index.a1f247c9.js";import"./index.0408e61a.js";import"./index.c4bc0140.js";import"./index.b11d4af1.js";import"./index.e0f7086f.js";import"./index.c0281d12.js";import"./index.bc87bef6.js";import"./index.eb3c5efe.js";import"./index.c41153d6.js";import"./CloseOutlined.512f8bf6.js";import"./FullscreenOutlined.00c2852f.js";import"./index.9d0f3fe7.js";import"./RightOutlined.a8a05276.js";import"./useTimeout.a76b8678.js";import"./tsxHelper.6b46956f.js";import"./index.bd1dad24.js";import"./animation.fde8d791.js";import"./useScrollTo.537a0974.js";import"./useAttrs.fddcc395.js";import{s as n,u as p}from"./index.ca362417.js";import"./useWindowSizeFn.b2871292.js";import"./index.97911cfc.js";import"./uuid.40269c00.js";import"./download.167d838b.js";import{u as c}from"./useForm.9a3cc7ae.js";const l=[{field:"field1",component:"Input",label:"字段1",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"Input",label:"字段2",colProps:{span:12}}];var j=i({components:{BasicModal:n,BasicForm:m},setup(){const i=e({}),[o,{}]=c({labelWidth:120,schemas:l,showActionButtonGroup:!1,actionColOptions:{span:24}}),[s]=p((e=>{i.value={field2:e.data,field1:e.info}}));return{register:s,schemas:l,registerForm:o,model:i}}});j.render=function(i,e,m,n,p,c){const l=o("BasicForm"),j=o("BasicModal");return s(),t(j,a(i.$attrs,{onRegister:i.register,title:"Modal Title"}),{default:r((()=>[d(l,{onRegister:i.registerForm,model:i.model},null,8,["onRegister","model"])])),_:1},16,["onRegister"])};export default j;