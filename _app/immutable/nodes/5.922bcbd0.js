var ee=Object.defineProperty;var te=(l,e,t)=>e in l?ee(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t;var Q=(l,e,t)=>(te(l,typeof e!="symbol"?e+"":e,t),t);import{s as se,f as g,a as H,g as v,h as T,c as M,u as R,d as m,j as h,F as le,G as ae,i as U,v as i,H as W,w as q,A as P,D as Z,B as re,o as ne,l as j,m as G,n as O,I as ie}from"../chunks/scheduler.fd402130.js";import{e as V}from"../chunks/each.e59479a4.js";import{S as oe,i as ce}from"../chunks/index.4d74d394.js";import{w as ue}from"../chunks/index.e7906ff7.js";class he{constructor(){Q(this,"notesList",[{id:1,title:"Creating a new branch in git",link:"creating-a-new-branch-in-git",date:"2023-12-12",tags:["git","branch"]}])}getNotesList(e){return e?(e=e.toLowerCase(),this.notesList.filter(t=>t.title.toLowerCase().includes(e)||t.tags.some(s=>s.toLowerCase().includes(e)))):this.notesList}}function Y(l,e,t){const s=l.slice();return s[7]=e[t],s}function J(l,e,t){const s=l.slice();return s[10]=e[t],s}function K(l){let e,t=l[10]+"",s;return{c(){e=g("span"),s=j(t),this.h()},l(a){e=v(a,"SPAN",{class:!0});var b=T(e);s=G(b,t),b.forEach(m),this.h()},h(){h(e,"class","badge variant-filled-surface")},m(a,b){U(a,e,b),i(e,s)},p(a,b){b&4&&t!==(t=a[10]+"")&&O(s,t)},d(a){a&&m(e)}}}function X(l){let e,t,s,a=l[7].title+"",b,L,w,o,x,y,C,_=l[7].date+"",I,k,D=V(l[7].tags),d=[];for(let r=0;r<D.length;r+=1)d[r]=K(J(l,D,r));return{c(){e=g("tr"),t=g("td"),s=g("a"),b=j(a),w=H(),o=g("td"),x=g("div");for(let r=0;r<d.length;r+=1)d[r].c();y=H(),C=g("td"),I=j(_),k=H(),this.h()},l(r){e=v(r,"TR",{});var u=T(e);t=v(u,"TD",{class:!0});var n=T(t);s=v(n,"A",{href:!0});var $=T(s);b=G($,a),$.forEach(m),n.forEach(m),w=M(u),o=v(u,"TD",{class:!0});var N=T(o);x=v(N,"DIV",{class:!0});var f=T(x);for(let E=0;E<d.length;E+=1)d[E].l(f);f.forEach(m),N.forEach(m),y=M(u),C=v(u,"TD",{class:!0});var c=T(C);I=G(c,_),c.forEach(m),k=M(u),u.forEach(m),this.h()},h(){h(s,"href",L="/posts/"+l[7].link),h(t,"class","border border-slate-600 px-4 py-2"),h(x,"class","flex gap-2"),h(o,"class","border border-slate-600 px-4 py-2 hidden lg:table-cell"),h(C,"class","border border-slate-600 px-4 py-2 hidden lg:table-cell")},m(r,u){U(r,e,u),i(e,t),i(t,s),i(s,b),i(e,w),i(e,o),i(o,x);for(let n=0;n<d.length;n+=1)d[n]&&d[n].m(x,null);i(e,y),i(e,C),i(C,I),i(e,k)},p(r,u){if(u&4&&a!==(a=r[7].title+"")&&O(b,a),u&4&&L!==(L="/posts/"+r[7].link)&&h(s,"href",L),u&4){D=V(r[7].tags);let n;for(n=0;n<D.length;n+=1){const $=J(r,D,n);d[n]?d[n].p($,u):(d[n]=K($),d[n].c(),d[n].m(x,null))}for(;n<d.length;n+=1)d[n].d(1);d.length=D.length}u&4&&_!==(_=r[7].date+"")&&O(I,_)},d(r){r&&m(e),Z(d,r)}}}function de(l){let e,t,s,a,b,L,w,o,x,y,C='<img class="w-[24px]" src="/svgs/close.svg" alt="" srcset=""/>',_,I,k,D,d='<tr><th class="px-4 py-2 ">Title</th> <th class="px-4 py-2 hidden lg:table-cell">Tags</th> <th class="px-4 py-2 hidden lg:table-cell">Date</th></tr>',r,u,n,$,N=V(l[2]),f=[];for(let c=0;c<N.length;c+=1)f[c]=X(Y(l,N,c));return{c(){e=g("div"),t=g("div"),s=g("div"),a=g("img"),w=H(),o=g("input"),x=H(),y=g("button"),y.innerHTML=C,_=H(),I=g("div"),k=g("table"),D=g("thead"),D.innerHTML=d,r=H(),u=g("tbody");for(let c=0;c<f.length;c+=1)f[c].c();this.h()},l(c){e=v(c,"DIV",{class:!0});var E=T(e);t=v(E,"DIV",{class:!0});var p=T(t);s=v(p,"DIV",{class:!0});var S=T(s);a=v(S,"IMG",{class:!0,src:!0,alt:!0,srcset:!0}),w=M(S),o=v(S,"INPUT",{type:!0,autocomplete:!0,placeholder:!0,class:!0}),x=M(S),y=v(S,"BUTTON",{class:!0,"data-svelte-h":!0}),R(y)!=="svelte-ecz2xh"&&(y.innerHTML=C),S.forEach(m),p.forEach(m),_=M(E),I=v(E,"DIV",{class:!0});var z=T(I);k=v(z,"TABLE",{class:!0});var A=T(k);D=v(A,"THEAD",{class:!0,"data-svelte-h":!0}),R(D)!=="svelte-fxlp5o"&&(D.innerHTML=d),r=M(A),u=v(A,"TBODY",{});var F=T(u);for(let B=0;B<f.length;B+=1)f[B].l(F);F.forEach(m),A.forEach(m),z.forEach(m),E.forEach(m),this.h()},h(){h(a,"class","w-[24px]"),le(a.src,b="/svgs/search.svg")||h(a,"src",b),h(a,"alt",""),ae(a,L="")||h(a,"srcset",L),h(o,"type","text"),h(o,"autocomplete","on"),h(o,"placeholder","Search by title or tags"),h(o,"class","w-full h-full bg-transparent"),h(y,"class","bg-transparent border-0 outline-0"),h(s,"class","w-full flex gap-2 lg:w-2/3 h-[40px] border-[2px] border-windrunner-blue-primary rounded px-2"),h(t,"class","flex gap-2 w-full justify-center"),h(D,"class","bg-windrunner-blue-primary"),h(k,"class","table-auto table w-full mt-10 text-left relative"),h(I,"class","overflow-hidden"),h(e,"class","w-full flex flex-col h-full relative")},m(c,E){U(c,e,E),i(e,t),i(t,s),i(s,a),i(s,w),i(s,o),W(o,l[1]),i(s,x),i(s,y),i(e,_),i(e,I),i(I,k),i(k,D),i(k,r),i(k,u);for(let p=0;p<f.length;p+=1)f[p]&&f[p].m(u,null);n||($=[q(o,"input",l[5]),q(o,"input",l[3]),q(y,"click",l[4])],n=!0)},p(c,[E]){if(E&2&&o.value!==c[1]&&W(o,c[1]),E&4){N=V(c[2]);let p;for(p=0;p<N.length;p+=1){const S=Y(c,N,p);f[p]?f[p].p(S,E):(f[p]=X(S),f[p].c(),f[p].m(u,null))}for(;p<f.length;p+=1)f[p].d(1);f.length=N.length}},i:P,o:P,d(c){c&&m(e),Z(f,c),n=!1,re($)}}}function fe(l,e,t){let s,a=P,b=()=>(a(),a=ie(L,_=>t(2,s=_)),L);l.$$.on_destroy.push(()=>a());const L=ue([]);b();let w="";const o=new he;ne(()=>{const _=o.getNotesList();L.set(_)});function x(){if(w.length>0){const _=o.getNotesList(w);L.set(_)}else{const _=o.getNotesList();L.set(_)}}function y(){t(1,w=""),x()}function C(){w=this.value,t(1,w)}return[L,w,s,x,y,C]}class me extends oe{constructor(e){super(),ce(this,e,fe,de,se,{notesList:0})}get notesList(){return this.$$.ctx[0]}}export{me as component};
