const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/Slower.DLYU7chK.js","_astro/ExternalInteractorBase.CIi3zRdK.js","_astro/sparkTitle.DCU_Odjx.js","_astro/cn.Bh4i3_zX.js","_astro/index.NEDEFKed.js","_astro/motion.DhRAmCJf.js"])))=>i.map(i=>d[i]);
import{_ as e}from"./sparkTitle.DCU_Odjx.js";import"./cn.Bh4i3_zX.js";import"./index.NEDEFKed.js";import"./motion.DhRAmCJf.js";class f{constructor(){this.factor=3,this.radius=200}load(r){r&&(r.factor!==void 0&&(this.factor=r.factor),r.radius!==void 0&&(this.radius=r.radius))}}async function l(t,r=!0){await t.addInteractor("externalSlow",async o=>{const{Slower:i}=await e(async()=>{const{Slower:n}=await import("./Slower.DLYU7chK.js");return{Slower:n}},__vite__mapDeps([0,1,2,3,4,5]));return new i(o)},r)}export{f as Slow,l as loadExternalSlowInteraction};
