import{_ as t}from"./index.35af8c02.js";import{D as s}from"./index.0d2391e6.js";import{u as e}from"./useDescription.9ed72a68.js";import{d as i,u as o,h as r,o as a,i as n,w as d,j as m,a7 as p}from"./index.72961157.js";import{getDescSchema as c}from"./data.5b5491dc.js";import"./useTimeout.3a4cc0a3.js";import"./useWindowSizeFn.048864be.js";import"./index.f458f5b1.js";import"./index.054c67b3.js";import"./domUtils.0adaad38.js";import"./_stringToArray.cf2e328f.js";import"./RightOutlined.ba1a4c59.js";/* empty css              */import"./useScrollTo.2abae1df.js";import"./animation.a805db4d.js";import"./FullscreenOutlined.0333d80b.js";import"./isEqual.2bab8c16.js";import"./index.939a3a90.js";import"./responsiveObserve.c545f1cc.js";import"./get.4975c5e2.js";import"./vendor.3b1829c7.js";import"./index.3d7a4aea.js";var j=i({name:"ErrorLogDetailModal",components:{BasicModal:t,Description:s},props:{info:{type:Object,default:null}},setup(){const{t:t}=o(),[s]=e({column:2,schema:c()});return{register:s,useI18n:o,t:t}}});j.render=function(t,s,e,i,o,c){const j=r("Description"),l=r("BasicModal");return a(),n(l,p({width:800,title:t.t("sys.errorLog.tableActionDesc")},t.$attrs),{default:d((()=>[m(j,{data:t.info,onRegister:t.register},null,8,["data","onRegister"])])),_:1},16,["title"])};export default j;