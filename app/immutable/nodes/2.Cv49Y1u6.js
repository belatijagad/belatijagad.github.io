import{c as C,t as H}from"../chunks/disclose-version.DGhPRkzy.js";import{x as ee,af as ae,A,l as D,m as re,W as te,v as G,ag as ne,ah as F,s as U,n as N,aq as z,ai as Q,y as W,aj as ie,B as O,ar as se,as as oe,at as le,a7 as ce,P as Y,au as ue,av as fe,t as de,aw as ve,ax as pe,h as he,o as ge,aa as xe,j as me,E as R,F as m,ay as X,G as x,I,g as M}from"../chunks/runtime.wlakdTzX.js";import{s as k}from"../chunks/attributes.Cudjcegs.js";import{p as w}from"../chunks/props.kn4BiALX.js";import{s as S}from"../chunks/render.CZoDuGBz.js";let B=null;function _e(n,e){return e}function ye(n,e,a,r){for(var s=[],o=e.length,i=0;i<o;i++)fe(e[i].e,s,!0);var p=o>0&&s.length===0&&a!==null;if(p){var h=a.parentNode;de(h),h.append(a),r.clear(),E(n,e[0].prev,e[o-1].next)}ve(s,()=>{for(var v=0;v<o;v++){var t=e[v];p||(r.delete(t.k),E(n,t.prev,t.next)),pe(t.e,!p)}})}function Ee(n,e,a,r,s,o=null){var i=n,p={flags:e,items:new Map,first:null};{var h=n;i=A?D(he(h)):h.appendChild(ee())}A&&re();var v=null,t=!1;ae(()=>{var d=a(),l=te(d)?d:d==null?[]:G(d),u=l.length;if(t&&u===0)return;t=u===0;let c=!1;if(A){var T=i.data===ne;T!==(u===0)&&(i=F(),D(i),U(!1),c=!0)}if(A){for(var y=null,f,g=0;g<u;g++){if(N.nodeType===8&&N.data===ge){i=N,c=!0,U(!1);break}var P=l[g],b=r(P,g);f=J(N,p,y,null,P,b,g,s,e),p.items.set(b,f),y=f}u>0&&D(F())}if(!A){var _=xe;we(l,p,i,s,e,(_.f&z)!==0,r)}o!==null&&(u===0?v?Q(v):v=W(()=>o(i)):v!==null&&ie(v,()=>{v=null})),c&&U(!0)}),A&&(i=N)}function we(n,e,a,r,s,o,i){var p=n.length,h=e.items,v=e.first,t=v,d,l=null,u=[],c=[],T,y,f,g;for(g=0;g<p;g+=1){if(T=n[g],y=i(T,g),f=h.get(y),f===void 0){var P=t?t.e.nodes_start:a;l=J(P,e,l,l===null?e.first:l.next,T,y,g,r,s),h.set(y,l),u=[],c=[],t=l.next;continue}if(be(f,T,g),f.e.f&z&&Q(f.e),f!==t){if(d!==void 0&&d.has(f)){if(u.length<c.length){var b=c[0],_;l=b.prev;var V=u[0],L=u[u.length-1];for(_=0;_<u.length;_+=1)q(u[_],b,a);for(_=0;_<c.length;_+=1)d.delete(c[_]);E(e,V.prev,L.next),E(e,l,V),E(e,L,b),t=b,l=L,g-=1,u=[],c=[]}else d.delete(f),q(f,t,a),E(e,f.prev,f.next),E(e,f,l===null?e.first:l.next),E(e,l,f),l=f;continue}for(u=[],c=[];t!==null&&t.k!==y;)(o||!(t.e.f&z))&&(d??(d=new Set)).add(t),c.push(t),t=t.next;if(t===null)continue;f=t}u.push(f),l=f,t=f.next}if(t!==null||d!==void 0){for(var j=d===void 0?[]:G(d);t!==null;)(o||!(t.e.f&z))&&j.push(t),t=t.next;var Z=j.length;if(Z>0){var $=p===0?a:null;ye(e,j,$,h)}}O.first=e.first&&e.first.e,O.last=l&&l.e}function be(n,e,a,r){se(n.v,e),n.i=a}function J(n,e,a,r,s,o,i,p,h){var v=B;try{var t=(h&oe)!==0,d=(h&le)===0,l=t?d?ce(s):Y(s):s,u=h&ue?Y(i):i,c={i:u,v:l,k:o,a:null,e:null,prev:a,next:r};return B=c,c.e=W(()=>p(n,l,u),A),c.e.prev=a&&a.e,c.e.next=r&&r.e,a===null?e.first=c:(a.next=c,a.e.next=c.e),r!==null&&(r.prev=c,r.e.prev=c.e),c}finally{B=v}}function q(n,e,a){for(var r=n.next?n.next.e.nodes_start:a,s=e?e.e.nodes_start:a,o=n.e.nodes_start;o!==r;){var i=me(o);s.before(o),o=i}}function E(n,e,a){e===null?n.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}const K=""+new URL("../assets/me.Bdn8vQHx.png",import.meta.url).href;var Ae=H('<section class="h-screen container mx-auto flex flex-col text-center justify-center gap-4"><img class="w-[250px] h-[250px] rounded-full mx-auto" alt="me"> <h1 class="text-4xl">Future Research Scientist</h1> <p>Hello, my name is Abel.</p> <div class="flex flex-row mx-auto gap-x-16"><a href="#about">About</a> <a href="#experience">Experience</a> <a href="#projects">Projects</a></div></section>');function Ie(n,e){let a=w(e,"id",8);var r=Ae(),s=m(r);k(s,"src",K),X(6),x(r),R(()=>k(r,"id",a())),C(n,r)}var Te=H(`<section class="h-screen container mx-auto"><div class="grid grid-cols-12 gap-8 h-full items-center"><div class="col-span-5"><img class="rounded-lg" alt="me"></div> <div class="col-span-7 flex flex-col justify-center gap-8"><h2 class="text-4xl">Here's a piece of <span class="underline decoration-amber-200">my story</span>...</h2> <p class="text-lg text-neutral-600">I'm a <span class="text-gradient from-red-600 to-blue-600">Computer Science</span> Undergraduate at <span class="text-gradient from-amber-500 to-yellow-400">Universitas Indonesia</span>. 
                I do machine learning side projects on my free time and I love to mess around using <span class="text-orange-600">PyTorch</span> for NLP and Computer Vision tasks.
                Currently doing one-project-a-week to sharpen my skills and grow my imaginations.
                This site will be where I'll showcase my fun little projects at.</p></div></div></section>`);function ke(n,e){let a=w(e,"id",8);var r=Te(),s=m(r),o=m(s),i=m(o);k(i,"src",K),x(o),X(2),x(s),x(r),R(()=>k(r,"id",a())),C(n,r)}var Ce=H("<div><h1> </h1> <h2> </h2> <h2> </h2> <p> </p></div>");function He(n,e){let a=w(e,"position",8),r=w(e,"organization",8),s=w(e,"period",8),o=w(e,"description",8);var i=Ce(),p=m(i),h=m(p,!0);x(p);var v=I(p,2),t=m(v,!0);x(v);var d=I(v,2),l=m(d,!0);x(d);var u=I(d,2),c=m(u,!0);x(u),x(i),R(()=>{S(h,a()),S(t,r()),S(l,s()),S(c,o())}),C(n,i)}const Ne=[{position:"Mentee",organization:"SeaCrowd Apprenticeship Program",period:"Aug 2024 -- Now",description:"Participating on a research about Language Taxonomy."}];var Re=H('<section class="h-screen container mx-auto"><h1 class="text-center">Experience</h1> <div></div></section>');function Pe(n,e){let a=w(e,"id",8);var r=Re(),s=I(m(r),2);Ee(s,5,()=>Ne,_e,(o,i)=>{He(o,{get position(){return M(i).position},get organization(){return M(i).organization},get period(){return M(i).period},get description(){return M(i).description}})}),x(s),x(r),R(()=>k(r,"id",a())),C(n,r)}var Me=H('<section class="h-screen container mx-auto"><h1 class="text-center text-4xl">Take a look on my works...</h1></section>');function Se(n,e){let a=w(e,"id",8);var r=Me();R(()=>k(r,"id",a())),C(n,r)}var ze=H('<main class="container mx-auto"><!> <!> <!> <!></main>');function Ve(n){var e=ze(),a=m(e);Ie(a,{id:"hero"});var r=I(a,2);ke(r,{id:"about"});var s=I(r,2);Pe(s,{id:"experience"});var o=I(s,2);Se(o,{id:"projects"}),x(e),C(n,e)}export{Ve as component};
