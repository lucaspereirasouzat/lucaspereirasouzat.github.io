const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/Bubbler.BJSQHO-w.js","_astro/sparkTitle.DCU_Odjx.js","_astro/cn.Bh4i3_zX.js","_astro/index.NEDEFKed.js","_astro/motion.DhRAmCJf.js","_astro/Circle.BsfAXaX2.js","_astro/ExternalInteractorBase.CIi3zRdK.js","_astro/OptionsColor.BuOxyFYl.js"])))=>i.map(i=>d[i]);
import{i as u,e as o,_ as c}from"./sparkTitle.DCU_Odjx.js";import{O as l}from"./OptionsColor.BuOxyFYl.js";import"./cn.Bh4i3_zX.js";import"./index.NEDEFKed.js";import"./motion.DhRAmCJf.js";class n{constructor(){this.distance=200,this.duration=.4,this.mix=!1}load(e){if(e){if(e.distance!==void 0&&(this.distance=e.distance),e.duration!==void 0&&(this.duration=e.duration),e.mix!==void 0&&(this.mix=e.mix),e.opacity!==void 0&&(this.opacity=e.opacity),e.color!==void 0){const r=u(this.color)?void 0:this.color;this.color=o(e.color,i=>l.create(r,i))}e.size!==void 0&&(this.size=e.size)}}}class d extends n{constructor(){super(),this.selectors=[]}load(e){super.load(e),e&&e.selectors!==void 0&&(this.selectors=e.selectors)}}class a extends n{load(e){super.load(e),e&&(this.divs=o(e.divs,r=>{const i=new d;return i.load(r),i}))}}async function x(s,e=!0){await s.addInteractor("externalBubble",async r=>{const{Bubbler:i}=await c(async()=>{const{Bubbler:t}=await import("./Bubbler.BJSQHO-w.js");return{Bubbler:t}},__vite__mapDeps([0,1,2,3,4,5,6,7]));return new i(r)},e)}export{a as Bubble,n as BubbleBase,d as BubbleDiv,x as loadExternalBubbleInteraction};
