import{N as i,H as r,r as a,a1 as l,a2 as d}from"./sparkTitle.DCU_Odjx.js";import"./cn.Bh4i3_zX.js";import"./index.NEDEFKed.js";import"./motion.DhRAmCJf.js";const u=1;class g{constructor(o){this.container=o}async init(o){const t=this.container,e=o.options,n=i(e.stroke,o.id,e.reduceDuplicates);o.strokeWidth=r(n.width)*t.retina.pixelRatio,o.strokeOpacity=r(n.opacity??u),o.strokeAnimation=n.color?.animation;const s=a(n.color)??o.getFillColor();s&&(o.strokeColor=l(s,o.strokeAnimation,t.retina.reduceFactor)),await Promise.resolve()}isEnabled(o){const t=o.strokeAnimation,{strokeColor:e}=o;return!o.destroyed&&!o.spawning&&!!t&&(e?.h.value!==void 0&&e.h.enable||e?.s.value!==void 0&&e.s.enable||e?.l.value!==void 0&&e.l.enable)}async update(o,t){this.isEnabled(o)&&(d(o.strokeColor,t),await Promise.resolve())}}export{g as StrokeColorUpdater};
