import{w as h,r as v}from"./index.d6a5d6b6.js";import{Q as _}from"./scheduler.083d7a95.js";const E=h(void 0),i={};function w(e){return e==="local"?localStorage:sessionStorage}function u(e,n,r){const s=(r==null?void 0:r.serializer)??JSON,l=(r==null?void 0:r.storage)??"local";function g(o,c){w(l).setItem(o,s.stringify(c))}if(!i[e]){const o=h(n,t=>{const a=w(l).getItem(e);a&&t(s.parse(a));{const m=d=>{d.key===e&&t(d.newValue?s.parse(d.newValue):null)};return window.addEventListener("storage",m),()=>window.removeEventListener("storage",m)}}),{subscribe:c,set:f}=o;i[e]={set(t){g(e,t),f(t)},update(t){const a=t(_(o));g(e,a),f(a)},subscribe:c}}return i[e]}u("modeOsPrefers",!1);u("modeUserPrefers",void 0);u("modeCurrent",!1);const S="(prefers-reduced-motion: reduce)";function L(){return window.matchMedia(S).matches}v(L(),e=>{{const n=s=>{e(s.matches)},r=window.matchMedia(S);return r.addEventListener("change",n),()=>{r.removeEventListener("change",n)}}});export{E as s};