import{c as g,r as y,o as f,d as c,a as _,b as o,e as m,w as I,t as d,f as a,g as l,v as p,F as $,h as V,i as k,j as w}from"./vendor.260349ad.js";const D=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))u(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const t of r.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&u(t)}).observe(document,{childList:!0,subtree:!0});function s(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function u(i){if(i.ep)return;i.ep=!0;const r=s(i);fetch(i.href,r)}};D();var v=(e,n)=>{const s=e.__vccOpts||e;for(const[u,i]of n)s[u]=i;return s};const N={};function B(e,n){const s=y("router-view");return f(),g(s)}var M=v(N,[["render",B]]),U="/assets/logo.da9b9095.svg";const W=c({data(){return{title:"HelpMeMod"}}}),A={class:"brand"},H=o("img",{alt:"Vue logo",class:"logo",src:U},null,-1),L={class:"navBarText"},O=a("About"),C=a("Empty");function E(e,n,s,u,i,r){const t=y("router-link");return f(),_("header",null,[o("ul",null,[o("li",null,[m(t,{to:"/"},{default:I(()=>[o("div",A,[H,o("p",L,d(e.title),1)])]),_:1})]),o("li",null,[m(t,{to:"/about"},{default:I(()=>[O]),_:1})]),o("li",null,[m(t,{to:"/empty"},{default:I(()=>[C]),_:1})])])])}var h=v(W,[["render",E]]);const F=c({data(){return{modInfo:{packageId:{name:"packageId",description:"packageId",field:"newu2012.template"},name:{name:"name",description:"name",field:"Parrots"},author:{name:"author",description:"author",field:"newu2012"},supportedVersions:{name:"supportedVersions",description:"supportedVersions",field:["1.3"]},modDependencies:{name:"modDependencies",description:"modDependencies",field:[]},incompatibleWith:{name:"incompatibleWith",description:"incompatibleWith",field:[]},description:{name:"description",description:"description",field:"10 new types of real world parrots now in your human-eating colony!"}}}}}),P={class:"mainContainer"},T={class:"modInfo"},S=o("h2",null,"Mod Info",-1);function j(e,n,s,u,i,r){return f(),_("div",P,[o("div",T,[S,o("p",null,[a(d(e.modInfo.packageId.name),1),l(o("input",{"onUpdate:modelValue":n[0]||(n[0]=t=>e.modInfo.packageId.field=t)},null,512),[[p,e.modInfo.packageId.field]])]),o("p",null,[a(d(e.modInfo.name.name),1),l(o("input",{"onUpdate:modelValue":n[1]||(n[1]=t=>e.modInfo.name.field=t)},null,512),[[p,e.modInfo.name.field]])]),o("p",null,[a(d(e.modInfo.author.name),1),l(o("input",{"onUpdate:modelValue":n[2]||(n[2]=t=>e.modInfo.author.field=t)},null,512),[[p,e.modInfo.author.field]])]),o("p",null,[a(d(e.modInfo.supportedVersions.name),1),l(o("input",{"onUpdate:modelValue":n[3]||(n[3]=t=>e.modInfo.supportedVersions.field=t)},null,512),[[p,e.modInfo.supportedVersions.field]])]),o("p",null,[a(d(e.modInfo.modDependencies.name),1),l(o("input",{"onUpdate:modelValue":n[4]||(n[4]=t=>e.modInfo.modDependencies.field=t)},null,512),[[p,e.modInfo.modDependencies.field]])]),o("p",null,[a(d(e.modInfo.incompatibleWith.name),1),l(o("input",{"onUpdate:modelValue":n[5]||(n[5]=t=>e.modInfo.incompatibleWith.field=t)},null,512),[[p,e.modInfo.incompatibleWith.field]])]),o("p",null,[a(d(e.modInfo.description.name),1),l(o("input",{"onUpdate:modelValue":n[6]||(n[6]=t=>e.modInfo.description.field=t)},null,512),[[p,e.modInfo.description.field]])])])])}var q=v(F,[["render",j]]);const K=c({setup(e){return(n,s)=>(f(),_($,null,[m(h),o("main",null,[m(q)])],64))}}),R=o("div",null,[o("p",null,"Info about this site")],-1),z=c({setup(e){return(n,s)=>(f(),_($,null,[m(h),R],64))}}),G=c({setup(e){return(n,s)=>(f(),g(h))}}),J=[{path:"/",name:"Home",component:K},{path:"/about",name:"About",component:z},{path:"/empty",name:"Empty",component:G}],Q=V({history:k(),routes:J}),b=w(M);b.use(Q);b.mount("#app");
