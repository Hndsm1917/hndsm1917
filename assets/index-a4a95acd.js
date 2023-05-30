import{_ as k,o,c as a,a as e,r as f,n as I,d as T,b as u,F as $,e as y,f as n,t as m,p as S,g as C,h as U,i as F,u as L,j as P,w as h,T as A,k as w,l}from"./index-b234ac49.js";import{I as B}from"./Icon-3979b360.js";const V=["primary"],H=["left","center"],M={props:{type:{type:String,default:"button"},text:{type:String,required:!0},to:{type:String,default:void 0},target:{type:String,default:void 0},theme:{type:String,default:"primary",validator(t){return V.includes(t)}},align:{type:String,default:"left",validator(t){return H.includes(t)}}},emits:["click"],methods:{emitClick(t){this.$emit("click",t)}}},O=["type"],j={class:"ui-button__wrapper"},q={class:"ui-button__inner"},z=["innerHTML"];function E(t,r,i,v,_,c){return o(),a("button",{class:I(["ui-button",[`ui-button--theme--${i.theme}`,`ui-button--align--${i.align}`]]),type:i.type,onClick:r[0]||(r[0]=(...s)=>c.emitClick&&c.emitClick(...s))},[e("span",j,[e("span",q,[f(t.$slots,"icon",{},void 0,!0),e("span",{class:"ui-button__font ui-button__font--text",innerHTML:i.text},null,8,z)])])],10,O)}const G=k(M,[["render",E],["__scopeId","data-v-331c2c9b"]]);const R=T({name:"CTab"}),W={class:"c-tab"},X={class:"c-tab__heading"},J={class:"c-tab__sub-heading"},K={class:"c-tab__content"};function Q(t,r,i,v,_,c){return o(),a("div",W,[e("div",X,[f(t.$slots,"heading",{},void 0,!0)]),e("div",J,[f(t.$slots,"sub-heading",{},void 0,!0)]),e("div",K,[f(t.$slots,"content",{},void 0,!0)])])}const Y=k(R,[["render",Q],["__scopeId","data-v-30775f31"]]);const Z=T({name:"ProgressBar",components:{Icon:B},props:{time:{type:Number,default:15},profit:{type:Number,default:.31},risk:{type:Number,default:.38},logged:{type:Boolean,default:!1},progress:{type:Number,default:0}},methods:{endAnimation(){console.log("end animation")}}}),D=t=>(S("data-v-733d4020"),t=t(),C(),t),ee={ref:"wrapper",class:"wrapper"},te={class:"top-block"},se={class:"top-block__image top-block__image--arrows"},ne={key:0,class:"mid-block"},oe={class:"progress-bar"},ae={ref:"line",class:"progress-bar__line"},re={class:"time"},ie={key:1,class:"mid-block mid-block--not-logged"},_e=D(()=>e("span",{class:"button__text"},"Войти: ",-1)),ce=D(()=>e("span",{class:"button__amount"},"100 USDT",-1)),de=[_e,ce],le={class:"mid-block__right"},pe={class:"time time--not-logged"},ue={class:"bot-block"},ge={class:"bot-block__content"},be={class:"profit"},me={class:"bot-block__content"},he={class:"risk"};function fe(t,r,i,v,_,c){const s=u("Icon");return o(),a("div",ee,[e("div",te,[(o(),a($,null,y(4,p=>e("div",{class:"top-block__image top-block__image--usdt",key:p},[n(s,{class:"usdt-chain",id:"usdt-chain",name:"usdt-chain"}),n(s,{class:"arrow",id:"arrow",name:"arrow"})])),64)),e("div",se,[n(s,{class:"arrows-up-down",name:"arrows-up-down"}),n(s,{class:"arrow",name:"arrow"})]),n(s,{class:"usdt-chain",id:"usdt-chain",name:"usdt-chain"})]),t.logged?(o(),a("div",ne,[e("div",oe,[e("div",ae,[n(s,{class:"progress-bar__token",name:"usdt-bar"})],512),n(s,{class:"progress-bar__tongue",name:"tongue"})]),e("span",re,m("≈ "+t.time+" мин."),1)])):(o(),a("div",ie,[e("button",{class:"mid-block__left button",onClick:r[0]||(r[0]=p=>t.$emit("login"))},de),e("div",le,[n(s,{class:"usdt-wallet",name:"usdt-wallet"}),e("span",pe,m("≈ "+t.time+" мин."),1)])])),e("div",ue,[e("div",ge,[n(s,{class:"plus",name:"plus"}),e("span",be,m("прогнозируемая доходность: "+t.profit+"%"),1)]),e("div",me,[n(s,{class:"minus",name:"minus"}),e("span",he,m("риск: "+t.risk+"%"),1)])])],512)}const ke=k(Z,[["render",fe],["__scopeId","data-v-733d4020"]]),ve=U("arbitrage",{state:()=>({arbitrageData:null}),getters:{balance(t){return 0}},actions:{fetchArbitrageData(){F.getArbitrageData().then(({data:t})=>{this.arbitrageData=t})}}});const $e={components:{UiButton:G,CTab:Y,Icon:B,ProgressBar:ke},setup(){const t=L(),r=ve();let i=P(!1);return{arbitrageStore:r,show:i,telegramStore:t}},data(){return{currentTabID:0,isClickable:!0,tabs:[{heading:"В работе"},{heading:"Все цепочки"}],arr:[{time:15,risk:.5,profit:.5,logged:!1,progress:0},{time:15,risk:.5,profit:.5,logged:!0,progress:30},{time:22,risk:.8,profit:.9,logged:!0,progress:60}]}},methods:{setCurrentTabId(t){this.currentTabID=t},login(){this.userStore.login()}}},g=t=>(S("data-v-f5c29fd1"),t=t(),C(),t),ye={class:"page"},we={ref:"counterWrapper",class:"page__info"},Ie={class:"page__balance"},Te=g(()=>e("span",{class:"page__font page__font--balance"},[l(" Баланс: "),e("span",{class:"page__font page__font--currency"},"200 USDT")],-1)),Se={class:"page__data"},Ce=g(()=>e("span",{class:"page__font page__font--send"},[l(" Отправлено на "),e("br"),l(" внешний кошелек: ")],-1)),Be=g(()=>e("div",{class:"page__font page__font--currency"},[l(" 340 USDT "),e("br"),e("span",null,"= 573.1 TRX")],-1)),De={key:0,class:"page__block"},xe=g(()=>e("span",{class:"page__font page__font--block"},[l(" В данный момент у вас нет"),e("br"),l(" цепочек в работе ")],-1)),Ne=[xe],Ue={key:1,class:"page__ratings ratings"},Fe=g(()=>e("div",{class:"ratings__header"},null,-1)),Le={class:"ratings__list"};function Pe(t,r,i,v,_,c){const s=u("UiButton"),p=u("Icon"),x=u("ProgressBar"),N=u("CTab");return o(),a("div",ye,[n(N,{class:"page__tab",currentIndex:_.currentTabID},{heading:h(()=>[(o(!0),a($,null,y(_.tabs,(d,b)=>(o(),w(s,{key:b,class:"page__btn page__btn--tab",text:d.heading,onClick:Ae=>c.setCurrentTabId(b)},null,8,["text","onClick"]))),128)),e("div",{class:I(["page__glider",[`page__glider--${_.currentTabID}`]])},null,2)]),"sub-heading":h(()=>[e("div",we,[e("div",Ie,[Te,n(p,{id:"wallet",class:"page__icon page__icon--wallet",name:"wallet"})]),e("div",Se,[Ce,Be,n(p,{id:"arrow-top",class:"page__icon page__icon--wallet",name:"arrow-top"})])],512)]),content:h(()=>[_.currentTabID===0?(o(),a("div",De,Ne)):(o(),a("div",Ue,[Fe,e("div",Le,[n(A,{name:"list"},{default:h(()=>[(o(!0),a($,null,y(_.arr,(d,b)=>(o(),w(x,{key:b,time:d.timestamp,profit:d.profit,risk:d.risk,logged:d.logged,progress:d.progress,onOnFinish:t.onFinish,onLogin:c.login,class:"ratings__item"},null,8,["time","profit","risk","logged","progress","onOnFinish","onLogin"]))),128))]),_:1})])]))]),_:1},8,["currentIndex"])])}const Me=k($e,[["render",Pe],["__scopeId","data-v-f5c29fd1"]]);export{Me as default};