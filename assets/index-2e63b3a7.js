import{_,o as n,c as r,a as t,F as l,r as d,u as i}from"./index-6031d13f.js";const g={setup(){return{telegramStore:i}},methods:{selectItem(e){this.telegramStore.tgInstance.showAlert(e)},testWss(){const e="wss://socketsbay.com/wss/v2/1/demo/",o=new WebSocket(e);o.onmessage=({data:c})=>{alert(c)}}}},m={class:"page"},u={class:"page__grid"},p=["onClick"],f=["src"],k={class:"page__btn"};function v(e,o,c,b,h,a){return n(),r("div",m,[t("div",u,[(n(),r(l,null,d(6,s=>t("div",{onClick:x=>a.selectItem(s),class:"page__item card",key:s},[t("img",{class:"card__image",src:`images/${s}.png`,alt:""},null,8,f)],8,p)),64))]),t("div",k,[t("button",{onClick:o[0]||(o[0]=(...s)=>a.testWss&&a.testWss(...s))},"Test Websockets")])])}const S=_(g,[["render",v],["__scopeId","data-v-f563f35b"]]);export{S as default};