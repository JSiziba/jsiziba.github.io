import{s as Q,e as M,i as j,B as R,d as f,C as X,G as Y,E as U,H as z,f as w,l as P,a as G,g as N,h as T,m as A,c as V,j as d,v as m,w as Z,S as x,n as I,T as $,A as ee,L as te,M as le}from"./scheduler.d8ec4c9c.js";import{S as ae,i as ne}from"./index.f60eb3ad.js";import{s as oe}from"./stores.3eb891df.js";function ie(n,t){if(!window.isSecureContext){console.error("Clipboard action failed: app not running in secure context, see: https://developer.mozilla.org/en-US/docs/Web/API/Clipboard");return}const e=()=>{n.dispatchEvent(new CustomEvent("copyComplete"))},a=()=>{if(typeof t=="object"){if("element"in t){const o=document.querySelector(`[data-clipboard="${t.element}"]`);if(!o)throw new Error(`Missing HTMLElement with an attribute of [data-clipboard="${t.element}"]`);D(o.innerHTML,"text/html").then(e);return}if("input"in t){const o=document.querySelector(`[data-clipboard="${t.input}"]`);if(!o)throw new Error(`Missing HTMLInputElement with an attribute of [data-clipboard="${t.input}"]`);D(o.value).then(e);return}}D(t).then(e)};return n.addEventListener("click",a),{update(o){t=o},destroy(){n.removeEventListener("click",a)}}}async function D(n,t="text/plain"){navigator.clipboard.write?await navigator.clipboard.write([new ClipboardItem({[t]:new Blob([n],{type:t}),"text/plain":new Blob([n],{type:"text/plain"})})]):await new Promise(e=>{e(navigator.clipboard.writeText(String(n)))})}function W(n){let t,e,a,o=K(n[0])+"",H,C,c,b=(n[7]?n[4]:n[3])+"",h,_,k,E,u,s,y,p,L,S;function v(l,i){return l[6]?re:ce}let g=v(n),r=g(n);return{c(){t=w("div"),e=w("header"),a=w("span"),H=P(o),C=G(),c=w("button"),h=P(b),E=G(),u=w("pre"),s=w("code"),r.c(),this.h()},l(l){t=N(l,"DIV",{class:!0,"data-testid":!0});var i=T(t);e=N(i,"HEADER",{class:!0});var B=T(e);a=N(B,"SPAN",{class:!0});var q=T(a);H=A(q,o),q.forEach(f),C=V(B),c=N(B,"BUTTON",{class:!0});var F=T(c);h=A(F,b),F.forEach(f),B.forEach(f),E=V(i),u=N(i,"PRE",{class:!0});var J=T(u);s=N(J,"CODE",{class:!0});var O=T(s);r.l(O),O.forEach(f),J.forEach(f),i.forEach(f),this.h()},h(){d(a,"class","codeblock-language"),d(c,"class",_="codeblock-btn "+n[2]),d(e,"class","codeblock-header "+de),d(s,"class",y="codeblock-code language-"+n[0]+" lineNumbers"),d(u,"class","codeblock-pre "+fe),d(t,"class",p="codeblock "+n[8]),d(t,"data-testid","codeblock")},m(l,i){j(l,t,i),m(t,e),m(e,a),m(a,H),m(e,C),m(e,c),m(c,h),m(t,E),m(t,u),m(u,s),r.m(s,null),L||(S=[Z(c,"click",n[9]),x(k=ie.call(null,c,n[1]))],L=!0)},p(l,i){i&1&&o!==(o=K(l[0])+"")&&I(H,o),i&152&&b!==(b=(l[7]?l[4]:l[3])+"")&&I(h,b),i&4&&_!==(_="codeblock-btn "+l[2])&&d(c,"class",_),k&&$(k.update)&&i&2&&k.update.call(null,l[1]),g===(g=v(l))&&r?r.p(l,i):(r.d(1),r=g(l),r&&(r.c(),r.m(s,null))),i&1&&y!==(y="codeblock-code language-"+l[0]+" lineNumbers")&&d(s,"class",y),i&256&&p!==(p="codeblock "+l[8])&&d(t,"class",p)},d(l){l&&f(t),r.d(),L=!1,ee(S)}}}function ce(n){let t=n[1].trim()+"",e;return{c(){e=P(t)},l(a){e=A(a,t)},m(a,o){j(a,e,o)},p(a,o){o&2&&t!==(t=a[1].trim()+"")&&I(e,t)},d(a){a&&f(e)}}}function re(n){let t,e;return{c(){t=new te(!1),e=M(),this.h()},l(a){t=le(a,!1),e=M(),this.h()},h(){t.a=e},m(a,o){t.m(n[5],a,o),j(a,e,o)},p(a,o){o&32&&t.p(a[5])},d(a){a&&(f(e),t.d())}}}function se(n){let t,e=n[0]&&n[1]&&W(n);return{c(){e&&e.c(),t=M()},l(a){e&&e.l(a),t=M()},m(a,o){e&&e.m(a,o),j(a,t,o)},p(a,[o]){a[0]&&a[1]?e?e.p(a,o):(e=W(a),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},i:R,o:R,d(a){a&&f(t),e&&e.d(a)}}}const ue="overflow-hidden shadow",de="text-xs text-white/50 uppercase flex justify-between items-center p-2 pl-4",fe="whitespace-pre-wrap break-all p-4 pt-1";function K(n){return n==="js"?"javascript":n==="ts"?"typescript":n==="shell"?"terminal":n}function be(n,t,e){let a,o;X(n,oe,l=>e(17,o=l));const H=Y();let{language:C="plaintext"}=t,{code:c=""}=t,{lineNumbers:b=!1}=t,{background:h="bg-neutral-900/90"}=t,{blur:_=""}=t,{text:k="text-sm"}=t,{color:E="text-white"}=t,{rounded:u="rounded-container-token"}=t,{shadow:s="shadow"}=t,{button:y="btn btn-sm variant-soft !text-white"}=t,{buttonLabel:p="Copy"}=t,{buttonCopied:L="👍"}=t,S=!1,v=c,g=!1;function r(){e(7,g=!0),setTimeout(()=>{e(7,g=!1)},2e3),H("copy")}return n.$$set=l=>{e(19,t=U(U({},t),z(l))),"language"in l&&e(0,C=l.language),"code"in l&&e(1,c=l.code),"lineNumbers"in l&&e(10,b=l.lineNumbers),"background"in l&&e(11,h=l.background),"blur"in l&&e(12,_=l.blur),"text"in l&&e(13,k=l.text),"color"in l&&e(14,E=l.color),"rounded"in l&&e(15,u=l.rounded),"shadow"in l&&e(16,s=l.shadow),"button"in l&&e(2,y=l.button),"buttonLabel"in l&&e(3,p=l.buttonLabel),"buttonCopied"in l&&e(4,L=l.buttonCopied)},n.$$.update=()=>{n.$$.dirty&131075&&o!==void 0&&(e(5,v=o.highlight(c,{language:C}).value.trim()),e(6,S=!0)),n.$$.dirty&1056&&b&&(e(5,v=v.replace(/^/gm,()=>'<span class="line"></span>	')),e(6,S=!0)),e(8,a=`${ue} ${h} ${_} ${k} ${E} ${u} ${s} ${t.class??""}`)},t=z(t),[C,c,y,p,L,v,S,g,a,r,b,h,_,k,E,u,s,o]}class ke extends ae{constructor(t){super(),ne(this,t,be,se,Q,{language:0,code:1,lineNumbers:10,background:11,blur:12,text:13,color:14,rounded:15,shadow:16,button:2,buttonLabel:3,buttonCopied:4})}}export{ke as C};
