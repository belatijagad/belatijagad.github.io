import{i as m,h as D,H,j as L,k as p,s as h,l as E,m as O,n as _,o as C,p as I,q as Y,t as j,v as k,w as M,x as S,y as V,z as $,A as w,B as q,C as z,c as B}from"./runtime.wlakdTzX.js";import{a as W,r as A,h as y,b as F,i as G}from"./disclose-version.DGhPRkzy.js";function Q(t,e){var n=e==null?"":typeof e=="object"?e+"":e;n!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=n,t.nodeValue=n==null?"":n+"")}function J(t,e){return N(t,e)}function U(t,e){m(),e.intro=e.intro??!1;const n=e.target,l=w,u=_;try{for(var a=D(n);a&&(a.nodeType!==8||a.data!==H);)a=L(a);if(!a)throw p;h(!0),E(a),O();const o=N(t,{...e,anchor:a});if(_===null||_.nodeType!==8||_.data!==C)throw I(),p;return h(!1),o}catch(o){if(o===p)return e.recover===!1&&Y(),m(),j(n),h(!1),J(t,e);throw o}finally{h(l),E(u)}}const d=new Map;function N(t,{target:e,anchor:n,props:l={},events:u,context:a,intro:o=!0}){m();var v=new Set,g=i=>{for(var r=0;r<i.length;r++){var s=i[r];if(!v.has(s)){v.add(s);var f=G(s);e.addEventListener(s,y,{passive:f});var T=d.get(s);T===void 0?(document.addEventListener(s,y,{passive:f}),d.set(s,1)):d.set(s,T+1)}}};g(k(W)),A.add(g);var c=void 0,b=M(()=>{var i=n??e.appendChild(S());return V(()=>{if(a){$({});var r=B;r.c=a}u&&(l.$$events=u),w&&F(i,null),c=t(i,l)||{},w&&(q.nodes_end=_),a&&z()}),()=>{var f;for(var r of v){e.removeEventListener(r,y);var s=d.get(r);--s===0?(document.removeEventListener(r,y),d.delete(r)):d.set(r,s)}A.delete(g),R.delete(c),i!==n&&((f=i.parentNode)==null||f.removeChild(i))}});return R.set(c,b),c}let R=new WeakMap;function X(t){const e=R.get(t);e&&e()}export{U as h,J as m,Q as s,X as u};
