import{s as C,n as v,c as S,u as V,g as L,d as P}from"../chunks/scheduler.d35e8dc7.js";import{S as D,i as I,g as m,h,j as p,f,k as _,a as g,z as A,m as N,s as $,n as j,c as b,y as u,x as q,r as z,u as B,v as H,d as x,t as k,w as F}from"../chunks/index.805a63b0.js";import{e as y}from"../chunks/each.e59479a4.js";function E(i,t,a){const e=i.slice();return e[1]=t[a],e[3]=a,e}function G(i){let t,a="/";return{c(){t=m("span"),t.textContent=a,this.h()},l(e){t=h(e,"SPAN",{class:!0,"data-svelte-h":!0}),q(t)!=="svelte-v5kgoo"&&(t.textContent=a),this.h()},h(){_(t,"class","text-windrunner-blue-secondary")},m(e,s){g(e,t,s)},d(e){e&&f(t)}}}function w(i){let t,a,e=i[1].name+"",s,o,n,l=i[3]!==i[0].length-1&&G();return{c(){t=m("div"),a=m("span"),s=N(e),o=$(),l&&l.c(),n=$(),this.h()},l(r){t=h(r,"DIV",{class:!0});var c=p(t);a=h(c,"SPAN",{class:!0});var d=p(a);s=j(d,e),d.forEach(f),o=b(c),l&&l.l(c),n=b(c),c.forEach(f),this.h()},h(){_(a,"class","text-stormlight-gold"),_(t,"class","flex gap-3 items-center")},m(r,c){g(r,t,c),u(t,a),u(a,s),u(t,o),l&&l.m(t,null),u(t,n)},p:v,d(r){r&&f(t),l&&l.d()}}}function J(i){let t,a=y(i[0]),e=[];for(let s=0;s<a.length;s+=1)e[s]=w(E(i,a,s));return{c(){t=m("div");for(let s=0;s<e.length;s+=1)e[s].c();this.h()},l(s){t=h(s,"DIV",{class:!0});var o=p(t);for(let n=0;n<e.length;n+=1)e[n].l(o);o.forEach(f),this.h()},h(){_(t,"class","flex gap-5 font-medium text-[18px] items-center")},m(s,o){g(s,t,o);for(let n=0;n<e.length;n+=1)e[n]&&e[n].m(t,null)},p(s,[o]){if(o&1){a=y(s[0]);let n;for(n=0;n<a.length;n+=1){const l=E(s,a,n);e[n]?e[n].p(l,o):(e[n]=w(l),e[n].c(),e[n].m(t,null))}for(;n<e.length;n+=1)e[n].d(1);e.length=a.length}},i:v,o:v,d(s){s&&f(t),A(e,s)}}}function K(i){return[[{name:"Home",url:"/"},{name:"Posts",url:"/posts"}]]}class M extends D{constructor(t){super(),I(this,t,K,J,C,{})}}function O(i){let t,a,e,s,o;e=new M({});const n=i[1].default,l=S(n,i,i[0],null);return{c(){t=m("div"),a=m("div"),z(e.$$.fragment),s=$(),l&&l.c(),this.h()},l(r){t=h(r,"DIV",{class:!0});var c=p(t);a=h(c,"DIV",{class:!0});var d=p(a);B(e.$$.fragment,d),d.forEach(f),s=b(c),l&&l.l(c),c.forEach(f),this.h()},h(){_(a,"class","mb-3"),_(t,"class","w-full")},m(r,c){g(r,t,c),u(t,a),H(e,a,null),u(t,s),l&&l.m(t,null),o=!0},p(r,[c]){l&&l.p&&(!o||c&1)&&V(l,n,r,r[0],o?P(n,r[0],c,null):L(r[0]),null)},i(r){o||(x(e.$$.fragment,r),x(l,r),o=!0)},o(r){k(e.$$.fragment,r),k(l,r),o=!1},d(r){r&&f(t),F(e),l&&l.d(r)}}}function Q(i,t,a){let{$$slots:e={},$$scope:s}=t;return i.$$set=o=>{"$$scope"in o&&a(0,s=o.$$scope)},[s,e]}class W extends D{constructor(t){super(),I(this,t,Q,O,C,{})}}export{W as component};
