import{d as e,bf as t,g as s,h as i,o as a,i as o,w as r,j as n}from"./index.c9b191ae.js";import{_ as d}from"./index.62221c24.js";import"./_stringToArray.f9d23805.js";import"./domUtils.43bacb00.js";import"./index.e9cfd29c.js";import"./index.b4918bad.js";import{a as l}from"./index.34b4eaee.js";import"./index.27cba524.js";import"./FullscreenOutlined.499766bf.js";import"./RightOutlined.ce1a9cb6.js";import"./useTimeout.306ef350.js";import"./index.ad8055f7.js";import"./animation.f174d9e2.js";import"./useScrollTo.ed4075e5.js";import"./useAttrs.dd653939.js";import"./useWindowSizeFn.68f6ef4b.js";import"./index.e80c819c.js";import"./uuid.a6cec785.js";import"./download.e374d1b4.js";import{_ as m}from"./index.aec1bac9.js";import"./usePageContext.42b62d5d.js";import{T as u}from"./index.40f5c1f9.js";const c=[{field:"title",component:"Input",label:"title",defaultValue:"defaultValue",rules:[{required:!0}]},{field:"tinymce",component:"Input",label:"tinymce",defaultValue:"defaultValue",rules:[{required:!0}],render:({model:e,field:s})=>t(u,{value:e[s],onChange:t=>{e[s]=t}})}];var p=e({components:{BasicForm:d,CollapseContainer:l,PageWrapper:m},setup(){const{createMessage:e}=s();return{schemas:c,handleSubmit:t=>{e.success("click search,values:"+JSON.stringify(t))}}}});p.render=function(e,t,s,d,l,m){const u=i("BasicForm"),c=i("CollapseContainer"),p=i("PageWrapper");return a(),o(p,{title:"富文本嵌入表单示例"},{default:r((()=>[n(c,{title:"富文本表单"},{default:r((()=>[n(u,{labelWidth:100,schemas:e.schemas,actionColOptions:{span:24},onSubmit:e.handleSubmit},null,8,["schemas","onSubmit"])])),_:1})])),_:1})};export default p;