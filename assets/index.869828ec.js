import{d as s,aK as a,cp as e,cq as t,h as i,o as l,i as o,bw as n,j as r,aO as p,aP as d,k as c,l as m,m as f}from"./index.d4318adc.js";import{L as u}from"./index.9042fb30.js";import"./index.c1942f06.js";import"./index.caa6a329.js";import"./index.1001bbac.js";import{P as j}from"./index.104b2d4a.js";import{R as x,C as b}from"./index.e9368810.js";import{cardList as _}from"./data.a96915dc.js";import{_ as v}from"./index.025c1173.js";import"./vendor.783aefe0.js";import"./SearchOutlined.1eeb08db.js";import"./CheckOutlined.eb5170fb.js";import"./DownOutlined.b7602ab2.js";import"./LeftOutlined.9f33daa5.js";import"./RightOutlined.aa2d326a.js";import"./DoubleLeftOutlined.be2c9db2.js";import"./DoubleRightOutlined.ed97fe7d.js";import"./zh_CN.8094f4d6.js";import"./responsiveObserve.c545f1cc.js";import"./types.4f1ac25d.js";import"./index.045fcbee.js";import"./index.f10db5c5.js";import"./EllipsisOutlined.078d6602.js";import"./isEqual.9fc12f76.js";import"./toInteger.daaae8e7.js";import"./index.95c10fda.js";import"./index.86bc52fe.js";import"./usePageContext.0b56e62c.js";import"./transButton.1a8cd0b2.js";import"./ArrowLeftOutlined.ae61cb07.js";var g=s({components:{Icon:a,Progress:j,PageWrapper:v,[u.name]:u,[u.Item.name]:u.Item,AListItemMeta:u.Item.Meta,[x.name]:x,[b.name]:b},setup:()=>({prefixCls:"list-basic",list:_,pagination:{show:!0,pageSize:3}})});const O=n("data-v-6a8874f4");e("data-v-6a8874f4");const C=r("div",null,"我的待办",-1),h=r("p",null,"8个任务",-1),I=r("div",null,"本周任务平均处理时间",-1),P=r("p",null,"32分钟",-1),w=r("div",null,"本周完成任务数",-1),k=r("p",null,"24个任务",-1),L={key:0,class:"extra"},$={class:"description"},y={class:"info"},D=r("span",null,"Owner",-1),R=r("span",null,"开始时间",-1),q={class:"progress"};t();const z=O(((s,a,e,t,n,u)=>{const j=i("a-col"),x=i("a-row"),b=i("Icon"),_=i("Progress"),v=i("a-list-item-meta"),g=i("a-list-item"),z=i("a-list"),A=i("PageWrapper");return l(),o(A,{class:s.prefixCls,title:"标准列表"},{default:O((()=>[r("div",{class:`${s.prefixCls}__top`},[r(x,{gutter:12},{default:O((()=>[r(j,{span:8,class:`${s.prefixCls}__top-col`},{default:O((()=>[C,h])),_:1},8,["class"]),r(j,{span:8,class:`${s.prefixCls}__top-col`},{default:O((()=>[I,P])),_:1},8,["class"]),r(j,{span:8,class:`${s.prefixCls}__top-col`},{default:O((()=>[w,k])),_:1},8,["class"])])),_:1})],2),r("div",{class:`${s.prefixCls}__content`},[r(z,{pagination:s.pagination},{default:O((()=>[(l(!0),o(p,null,d(s.list,(s=>(l(),o(g,{key:s.id,class:"list"},{default:O((()=>[r(v,null,{avatar:O((()=>[s.icon?(l(),o(b,{key:0,class:"icon",icon:s.icon,color:s.color},null,8,["icon","color"])):c("",!0)])),title:O((()=>[r("span",null,m(s.title),1),s.extra?(l(),o("div",L,m(s.extra),1)):c("",!0)])),description:O((()=>[r("div",$,m(s.description),1),r("div",y,[r("div",null,[D,f(m(s.author),1)]),r("div",null,[R,f(m(s.datetime),1)])]),r("div",q,[r(_,{percent:s.percent,status:"active"},null,8,["percent"])])])),_:2},1024)])),_:2},1024)))),128))])),_:1},8,["pagination"])],2)])),_:1},8,["class"])}));g.render=z,g.__scopeId="data-v-6a8874f4";export default g;