import{af as P,W as u,ad as C,Y as m,a6 as h,V as g}from"./sparkTitle.DCU_Odjx.js";import"./cn.Bh4i3_zX.js";import"./index.NEDEFKed.js";import"./motion.DhRAmCJf.js";const y=0,x=0;class D{constructor(o){this.container=o,this.modes=["out"]}async update(o,e,M,v){if(!this.modes.includes(v))return;const d=this.container;switch(o.outType){case"inside":{const{x:s,y:n}=o.velocity,i=u.origin;i.length=o.moveCenter.radius,i.angle=o.velocity.angle+Math.PI,i.addTo(u.create(o.moveCenter));const{dx:f,dy:t}=g(o.position,i);if(s<=y&&f>=x||n<=y&&t>=x||s>=y&&f<=x||n>=y&&t<=x)return;o.position.x=Math.floor(h({min:0,max:d.canvas.size.width})),o.position.y=Math.floor(h({min:0,max:d.canvas.size.height}));const{dx:a,dy:w}=g(o.position,o.moveCenter);o.direction=Math.atan2(-w,-a),o.velocity.angle=o.direction;break}default:{if(P(o.position,d.canvas.size,u.origin,o.getRadius(),e))return;switch(o.outType){case"outside":{o.position.x=Math.floor(h({min:-o.moveCenter.radius,max:o.moveCenter.radius}))+o.moveCenter.x,o.position.y=Math.floor(h({min:-o.moveCenter.radius,max:o.moveCenter.radius}))+o.moveCenter.y;const{dx:s,dy:n}=g(o.position,o.moveCenter);o.moveCenter.radius&&(o.direction=Math.atan2(n,s),o.velocity.angle=o.direction);break}case"normal":{const s=o.options.move.warp,n=d.canvas.size,i={bottom:n.height+o.getRadius()+o.offset.y,left:-o.getRadius()-o.offset.x,right:n.width+o.getRadius()+o.offset.x,top:-o.getRadius()-o.offset.y},f=o.getRadius(),t=C(o.position,f);e==="right"&&t.left>n.width+o.offset.x?(o.position.x=i.left,o.initialPosition.x=o.position.x,s||(o.position.y=m()*n.height,o.initialPosition.y=o.position.y)):e==="left"&&t.right<-o.offset.x&&(o.position.x=i.right,o.initialPosition.x=o.position.x,s||(o.position.y=m()*n.height,o.initialPosition.y=o.position.y)),e==="bottom"&&t.top>n.height+o.offset.y?(s||(o.position.x=m()*n.width,o.initialPosition.x=o.position.x),o.position.y=i.top,o.initialPosition.y=o.position.y):e==="top"&&t.bottom<-o.offset.y&&(s||(o.position.x=m()*n.width,o.initialPosition.x=o.position.x),o.position.y=i.bottom,o.initialPosition.y=o.position.y);break}}break}}await Promise.resolve()}}export{D as OutOutMode};
