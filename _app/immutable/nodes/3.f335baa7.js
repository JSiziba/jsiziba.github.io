var de=Object.defineProperty;var pe=(a,e,n)=>e in a?de(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n;var Q=(a,e,n)=>(pe(a,typeof e!="symbol"?e+"":e,n),n);import{s as L,n as K,f as te}from"../chunks/scheduler.d35e8dc7.js";import{S as q,i as O,g as v,m as W,h as y,j as b,n as A,f as _,k,a as R,y as w,o as B,s as N,c as P,x as ne,d as T,p as ae,b as ie,t as H,z as oe,r as se,u as le,v as re,w as ce}from"../chunks/index.805a63b0.js";import{e as M}from"../chunks/each.e59479a4.js";function fe(a,e){const n={},o={},s={$$scope:1};let t=a.length;for(;t--;){const r=a[t],l=e[t];if(l){for(const u in r)u in l||(o[u]=1);for(const u in l)s[u]||(n[u]=l[u],s[u]=1);a[t]=l}else for(const u in r)s[u]=1}for(const r in o)r in n||(n[r]=void 0);return n}function he(a){return typeof a=="object"&&a!==null?a:{}}function ge(a){let e,n;return{c(){e=v("a"),n=W(a[0]),this.h()},l(o){e=y(o,"A",{target:!0,class:!0,href:!0});var s=b(e);n=A(s,a[0]),s.forEach(_),this.h()},h(){k(e,"target","_blank"),k(e,"class","text-[14px] whitespace-nowrap text-sylphrena-cyan flex items-center gap-1 bg-windrunner-blue-primary bg-opacity-10 px-10 h-[37px] rounded-[18px]"),k(e,"href",a[1])},m(o,s){R(o,e,s),w(e,n)},p(o,[s]){s&1&&B(n,o[0]),s&2&&k(e,"href",o[1])},i:K,o:K,d(o){o&&_(e)}}}function we(a,e,n){let{name:o}=e,{link:s="#"}=e;return a.$$set=t=>{"name"in t&&n(0,o=t.name),"link"in t&&n(1,s=t.link)},[o,s]}class _e extends q{constructor(e){super(),O(this,e,we,ge,L,{name:0,link:1})}}function X(a,e,n){const o=a.slice();return o[6]=e[n],o}function Y(a){let e,n;const o=[a[6]];let s={};for(let t=0;t<o.length;t+=1)s=te(s,o[t]);return e=new _e({props:s}),{c(){se(e.$$.fragment)},l(t){le(e.$$.fragment,t)},m(t,r){re(e,t,r),n=!0},p(t,r){const l=r&32?fe(o,[he(t[6])]):{};e.$set(l)},i(t){n||(T(e.$$.fragment,t),n=!0)},o(t){H(e.$$.fragment,t),n=!1},d(t){ce(e,t)}}}function ke(a){let e,n,o,s,t,r,l,u,i,I,h=".",g,c,x,S,F,V,j,C,z=M(a[5]),m=[];for(let f=0;f<z.length;f+=1)m[f]=Y(X(a,z,f));const me=f=>H(m[f],1,1,()=>{m[f]=null});return{c(){e=v("div"),n=v("h2"),o=W(a[2]),s=N(),t=v("div"),r=v("h2"),l=v("a"),u=W(a[0]),i=N(),I=v("span"),I.textContent=h,g=N(),c=W(a[1]),x=N(),S=v("p"),F=W(a[3]),V=N(),j=v("div");for(let f=0;f<m.length;f+=1)m[f].c();this.h()},l(f){e=y(f,"DIV",{class:!0});var p=b(e);n=y(p,"H2",{class:!0});var d=b(n);o=A(d,a[2]),d.forEach(_),s=P(p),t=y(p,"DIV",{class:!0});var E=b(t);r=y(E,"H2",{});var G=b(r);l=y(G,"A",{rel:!0,target:!0,href:!0});var D=b(l);u=A(D,a[0]),i=P(D),I=y(D,"SPAN",{"data-svelte-h":!0}),ne(I)!=="svelte-1ft2yuk"&&(I.textContent=h),g=P(D),c=A(D,a[1]),D.forEach(_),G.forEach(_),x=P(E),S=y(E,"P",{});var U=b(S);F=A(U,a[3]),U.forEach(_),V=P(E),j=y(E,"DIV",{class:!0});var Z=b(j);for(let J=0;J<m.length;J+=1)m[J].l(Z);Z.forEach(_),E.forEach(_),p.forEach(_),this.h()},h(){k(n,"class","uppercase text-[20px] font-normal text-windrunner-blue-secondary whitespace-nowrap"),k(l,"rel","external"),k(l,"target","_blank"),k(l,"href",a[4]),k(j,"class","flex gap-3 flex-wrap"),k(t,"class","flex flex-col gap-4 flex-grow"),k(e,"class","w-full flex gap-8 p-5 hover:bg-highstorm-white hover:bg-opacity-5 hover:shadow rounded-sm")},m(f,p){R(f,e,p),w(e,n),w(n,o),w(e,s),w(e,t),w(t,r),w(r,l),w(l,u),w(l,i),w(l,I),w(l,g),w(l,c),w(t,x),w(t,S),w(S,F),w(t,V),w(t,j);for(let d=0;d<m.length;d+=1)m[d]&&m[d].m(j,null);C=!0},p(f,[p]){if((!C||p&4)&&B(o,f[2]),(!C||p&1)&&B(u,f[0]),(!C||p&2)&&B(c,f[1]),(!C||p&16)&&k(l,"href",f[4]),(!C||p&8)&&B(F,f[3]),p&32){z=M(f[5]);let d;for(d=0;d<z.length;d+=1){const E=X(f,z,d);m[d]?(m[d].p(E,p),T(m[d],1)):(m[d]=Y(E),m[d].c(),T(m[d],1),m[d].m(j,null))}for(ae(),d=z.length;d<m.length;d+=1)me(d);ie()}},i(f){if(!C){for(let p=0;p<z.length;p+=1)T(m[p]);C=!0}},o(f){m=m.filter(Boolean);for(let p=0;p<m.length;p+=1)H(m[p]);C=!1},d(f){f&&_(e),oe(m,f)}}}function ve(a,e,n){let{title:o}=e,{companyName:s}=e,{duration:t}=e,{description:r}=e,{companyWebsite:l}=e,{skills:u}=e;return a.$$set=i=>{"title"in i&&n(0,o=i.title),"companyName"in i&&n(1,s=i.companyName),"duration"in i&&n(2,t=i.duration),"description"in i&&n(3,r=i.description),"companyWebsite"in i&&n(4,l=i.companyWebsite),"skills"in i&&n(5,u=i.skills)},[o,s,t,r,l,u]}class ye extends q{constructor(e){super(),O(this,e,ve,ke,L,{title:0,companyName:1,duration:2,description:3,companyWebsite:4,skills:5})}}class ue{}Q(ue,"experience",[{title:"Software Engineer",duration:"2021 - Present",description:"I am currently working as a software engineer at a company called Cognite. I am working on a product called Cognite Data Fusion, which is a data platform for industrial data. I am working on the front end team, and we are using React and TypeScript.",companyName:"Cognite",companyWebsite:"https://www.cognite.com/",skills:[{name:"React",link:"https://reactjs.org/"},{name:"TypeScript",link:"https://www.typescriptlang.org/"},{name:"JavaScript",link:"https://www.javascript.com/"},{name:"HTML",link:"https://html.com/"},{name:"CSS",link:"https://www.w3schools.com/css/"},{name:"Google Cloud Platform",link:"https://cloud.google.com/"},{name:"Cognite Data Fusion",link:"https://www.cognite.com/product/data-fusion/"}]},{title:"Software Engineer",duration:"2021 - Present",description:"I am currently working as a software engineer at a company called Cognite. I am working on a product called Cognite Data Fusion, which is a data platform for industrial data. I am working on the front end team, and we are using React and TypeScript.",companyName:"Cognite",companyWebsite:"https://www.cognite.com/",skills:[{name:"JavaScript",link:"https://www.javascript.com/"},{name:"HTML",link:"https://html.com/"},{name:"CSS",link:"https://www.w3schools.com/css/"},{name:"Google Cloud Platform",link:"https://cloud.google.com/"},{name:"Cognite Data Fusion",link:"https://www.cognite.com/product/data-fusion/"}]}]);function $(a,e,n){const o=a.slice();return o[1]=e[n],o}function ee(a){let e,n;const o=[a[1]];let s={};for(let t=0;t<o.length;t+=1)s=te(s,o[t]);return e=new ye({props:s}),{c(){se(e.$$.fragment)},l(t){le(e.$$.fragment,t)},m(t,r){re(e,t,r),n=!0},p(t,r){const l=r&1?fe(o,[he(t[1])]):{};e.$set(l)},i(t){n||(T(e.$$.fragment,t),n=!0)},o(t){H(e.$$.fragment,t),n=!1},d(t){ce(e,t)}}}function be(a){let e,n,o=`<p>Ever since I was young, the joy of building something from the ground up has captivated me. This passion found its true calling in software development during my  studies in
      <a target="_blank" href="https://www.uz.ac.zw/index.php/commerce-departments/104-business-studies/programmes-offered-business-studies/206-bachelor-of-business-studies-computing-science-degree-4-years">Bachelor of Business Studies and Computing Science (HBSCTC 2017)</a> at <a target="_blank" href="https://www.uz.ac.zw/">University of Zimbabwe</a>. Fast forward to today, and I&#39;ve had the incredible opportunity to create impactful software solutions for a
      <a target="_blank" href="https://www.afcholdings.co.zw/">top commercial bank</a> and a <a target="_blank" href="https://jemina.capital/">leading stock broking company</a> in Zimbabwe, as well as an
      <a target="_blank" href="https://www.quintessencesoftware.com/">international software company</a>.</p> <br/> <p>My main focus these days is developing dynamic, data-intensive applications that not only empower our internal teams but also elevate our clients&#39; experiences at
      <a target="_blank" href="https://www.quintessencesoftware.com/">Quintessence Software</a>. Outside of work, my creative spirit doesn&#39;t rest - I delve into developing
      <a target="_blank" href="https://play.google.com/store/apps/developer?id=Johnson+Andrew+Siziba&amp;hl=en&amp;gl=US">mobile applications</a> that often reflect my personal interests and skills.</p> <br/> <p>When I&#39;m not busy coding, you&#39;ll find me on various adventures. Traveling to new places, immersing myself in the latest
      <a target="_blank" href="https://myanimelist.net/animelist/JSiziba">anime series</a>, or getting swept up in the imaginative worlds of
      <a target="_blank" href="https://www.goodreads.com/review/list/172388734-johnson-siziba?ref=nav_mybooks">sci-fi and fantasy books</a> – that&#39;s my kind of downtime. And let&#39;s not forget the fun times with friends. All these experiences feed into my personal and professional growth, making me a more rounded developer and a more curious individual.</p> <br/>`,s,t,r,l,u=M(a[0]),i=[];for(let h=0;h<u.length;h+=1)i[h]=ee($(a,u,h));const I=h=>H(i[h],1,1,()=>{i[h]=null});return{c(){e=v("div"),n=v("section"),n.innerHTML=o,s=N(),t=v("section"),r=v("div");for(let h=0;h<i.length;h+=1)i[h].c();this.h()},l(h){e=y(h,"DIV",{class:!0});var g=b(e);n=y(g,"SECTION",{"data-svelte-h":!0}),ne(n)!=="svelte-i9v5md"&&(n.innerHTML=o),s=P(g),t=y(g,"SECTION",{});var c=b(t);r=y(c,"DIV",{class:!0});var x=b(r);for(let S=0;S<i.length;S+=1)i[S].l(x);x.forEach(_),c.forEach(_),g.forEach(_),this.h()},h(){k(r,"class","flex flex-col gap-3"),k(e,"class","w-full flex flex-col gap-5")},m(h,g){R(h,e,g),w(e,n),w(e,s),w(e,t),w(t,r);for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(r,null);l=!0},p(h,[g]){if(g&1){u=M(h[0]);let c;for(c=0;c<u.length;c+=1){const x=$(h,u,c);i[c]?(i[c].p(x,g),T(i[c],1)):(i[c]=ee(x),i[c].c(),T(i[c],1),i[c].m(r,null))}for(ae(),c=u.length;c<i.length;c+=1)I(c);ie()}},i(h){if(!l){for(let g=0;g<u.length;g+=1)T(i[g]);l=!0}},o(h){i=i.filter(Boolean);for(let g=0;g<i.length;g+=1)H(i[g]);l=!1},d(h){h&&_(e),oe(i,h)}}}function xe(a){return[ue.experience]}class Te extends q{constructor(e){super(),O(this,e,xe,be,L,{})}}export{Te as component};