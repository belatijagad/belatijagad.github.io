import{S as A,P as M,Q as Y,R as y,T as Z,U as b,V as v,W as D,g,I as L,X as $,Y as j,Z as V,_ as z,$ as G,a0 as H,a1 as Q,a2 as U,a3 as W,b as q,f as C,a4 as X,a5 as J,a6 as p,a7 as k,a8 as ee,a9 as re,aa as ne}from"./runtime.C3rkP3kX.js";import{e as te}from"./disclose-version.BT0BMDlc.js";function O(n,a=null,c){if(typeof n!="object"||n===null||A in n)return n;const P=j(n);if(P!==M&&P!==Y)return n;var u=new Map,o=V(n),h=y(0);o&&u.set("length",y(n.length));var w;return new Proxy(n,{defineProperty(f,e,r){(!("value"in r)||r.configurable===!1||r.enumerable===!1||r.writable===!1)&&Z();var t=u.get(e);return t===void 0?(t=y(r.value),u.set(e,t)):b(t,O(r.value,w)),!0},deleteProperty(f,e){var r=u.get(e);if(r===void 0)e in f&&u.set(e,y(v));else{if(o&&typeof e=="string"){var t=u.get("length"),i=Number(e);Number.isInteger(i)&&i<t.v&&b(t,i)}b(r,v),F(h)}return!0},get(f,e,r){var d;if(e===A)return n;var t=u.get(e),i=e in f;if(t===void 0&&(!i||(d=D(f,e))!=null&&d.writable)&&(t=y(O(i?f[e]:v,w)),u.set(e,t)),t!==void 0){var s=g(t);return s===v?void 0:s}return Reflect.get(f,e,r)},getOwnPropertyDescriptor(f,e){var r=Reflect.getOwnPropertyDescriptor(f,e);if(r&&"value"in r){var t=u.get(e);t&&(r.value=g(t))}else if(r===void 0){var i=u.get(e),s=i==null?void 0:i.v;if(i!==void 0&&s!==v)return{enumerable:!0,configurable:!0,value:s,writable:!0}}return r},has(f,e){var s;if(e===A)return!0;var r=u.get(e),t=r!==void 0&&r.v!==v||Reflect.has(f,e);if(r!==void 0||L!==null&&(!t||(s=D(f,e))!=null&&s.writable)){r===void 0&&(r=y(t?O(f[e],w):v),u.set(e,r));var i=g(r);if(i===v)return!1}return t},set(f,e,r,t){var S;var i=u.get(e),s=e in f;if(o&&e==="length")for(var d=r;d<i.v;d+=1){var _=u.get(d+"");_!==void 0?b(_,v):d in f&&(_=y(v),u.set(d+"",_))}i===void 0?(!s||(S=D(f,e))!=null&&S.writable)&&(i=y(void 0),b(i,O(r,w)),u.set(e,i)):(s=i.v!==v,b(i,O(r,w)));var m=Reflect.getOwnPropertyDescriptor(f,e);if(m!=null&&m.set&&m.set.call(t,r),!s){if(o&&typeof e=="string"){var x=u.get("length"),I=Number(e);Number.isInteger(I)&&I>=x.v&&b(x,I+1)}F(h)}return!0},ownKeys(f){g(h);var e=Reflect.ownKeys(f).filter(i=>{var s=u.get(i);return s===void 0||s.v!==v});for(var[r,t]of u)t.v!==v&&!(r in f)&&e.push(r);return e},setPrototypeOf(){$()}})}function F(n,a=1){b(n,n.v+a)}const ae={get(n,a){if(!n.exclude.includes(a))return n.props[a]},set(n,a){return!1},getOwnPropertyDescriptor(n,a){if(!n.exclude.includes(a)&&a in n.props)return{enumerable:!0,configurable:!0,value:n.props[a]}},has(n,a){return n.exclude.includes(a)?!1:a in n.props},ownKeys(n){return Reflect.ownKeys(n.props).filter(a=>!n.exclude.includes(a))}};function ue(n,a,c){return new Proxy({props:n,exclude:a},ae)}function K(n){for(var a=L,c=L;a!==null&&!(a.f&(H|Q));)a=a.parent;try{return U(a),n()}finally{U(c)}}function se(n,a,c,P){var B;var u=(c&k)!==0,o=(c&W)!==0,h=(c&ee)!==0,w=(c&re)!==0,f=!1,e;h?[e,f]=te(()=>n[a]):e=n[a];var r=(B=D(n,a))==null?void 0:B.set,t=P,i=!0,s=!1,d=()=>(s=!0,i&&(i=!1,w?t=q(P):t=P),t);e===void 0&&P!==void 0&&(r&&o&&z(),e=d(),r&&r(e));var _;if(o)_=()=>{var l=n[a];return l===void 0?d():(i=!0,s=!1,l)};else{var m=K(()=>(u?C:X)(()=>n[a]));m.f|=G,_=()=>{var l=g(m);return l!==void 0&&(t=void 0),l===void 0?t:l}}if(!(c&J))return _;if(r){var x=n.$$legacy;return function(l,R){return arguments.length>0?((!o||!R||x||f)&&r(R?_():l),l):_()}}var I=!1,S=!1,N=ne(e),E=K(()=>C(()=>{var l=_(),R=g(N);return I?(I=!1,S=!0,R):(S=!1,N.v=l)}));return u||(E.equals=p),function(l,R){if(arguments.length>0){const T=R?g(E):o&&h?O(l):l;return E.equals(T)||(I=!0,b(N,T),s&&t!==void 0&&(t=T),q(()=>g(E))),l}return g(E)}}export{O as a,se as p,ue as r};
