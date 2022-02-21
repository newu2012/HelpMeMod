(()=>{"use strict";var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=require("express");var n=e.n(t);const o=require("morgan");var r=e.n(o);const s=require("cookie-parser");var i=e.n(s);const c=require("cors");var a=e.n(c);const u=require("zip-a-folder"),l=require("path");var p=e.n(l);const d=p().resolve();class v{static createZip(){return e=this,t=void 0,o=function*(){try{return yield(0,u.zip)(this.zipFrom,this.zipTo),this.zipFrom}catch(e){console.log(e)}},new((n=void 0)||(n=Promise))((function(r,s){function i(e){try{a(o.next(e))}catch(e){s(e)}}function c(e){try{a(o.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}a((o=o.apply(e,t||[])).next())}));var e,t,n,o}}v.zipFrom=p().join(d,"./src/mod_template/Template"),v.zipTo=p().join(d,"./src/mod_template/mod_template.zip");const f=t.Router();f.get("/",((e,t,n)=>{t.sendFile(process.cwd()+"/Vue/dist/index.html")}));const m=t.Router();m.get("/",((e,t,n)=>{return o=void 0,r=void 0,i=function*(){try{const e=v.zipTo;null==e?t.status(404).send("Can't find ready template"):t.sendFile(e)}catch(e){t.status(400).send(e.message)}},new((s=void 0)||(s=Promise))((function(e,t){function n(e){try{a(i.next(e))}catch(e){t(e)}}function c(e){try{a(i.throw(e))}catch(e){t(e)}}function a(t){var o;t.done?e(t.value):(o=t.value,o instanceof s?o:new s((function(e){e(o)}))).then(n,c)}a((i=i.apply(o,r||[])).next())}));var o,r,s,i}));const h=n()();h.use(a()()),h.use(r()("dev")),h.use(t.json()),h.use(i()()),h.enable("trust proxy"),h.use(t.static(process.cwd()+"/Vue/dist")),function(e){e.use("/",f),e.use("/template",m)}(h),v.createZip().then((()=>{console.log("Mod template zip created")})),h.listen(8080,(()=>{console.log("Example app listening on port 8080!")}))})();