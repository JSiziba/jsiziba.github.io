import{s as ut,a as b,f as r,l as s,F as mt,d as k,c as O,g as a,h as ft,u as i,m as l,j as Ct,i as gt,v as n,B as xt}from"../chunks/scheduler.d8ec4c9c.js";import{S as vt,i as _t,b as J,d as K,m as Q,a as X,t as Y,e as Z}from"../chunks/index.f60eb3ad.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.7c14f914.js";import{C as tt}from"../chunks/CodeBlock.3792ad78.js";function wt(dt){let g,t,d,et="Understanding ngOnChanges",S,u,nt="`ngOnChanges` is an important lifecycle hook in Angular components. Here's a breakdown of its functionality:",R,m,ot="Tracks Changes:",G,f,rt="Input Properties:",H,C,at="Reacting to Change:",I,x,st="Code Breakdown",B,c,N,h,U,p,A,v,lt="In Summary",M,_,it="When to Use ngOnChanges",P,w,ct="Updating internal state:",j,q,L,y,ht="Triggering actions:",F,V,D,$,pt="Data Validation/Manipulation:",E,z,T;return c=new tt({props:{language:"html",code:"ngOnChanges(changes: SimpleChanges) {"}}),h=new tt({props:{language:"html",code:" if (changes['collections'])"}}),p=new tt({props:{language:"html",code:"console.log('collections changed', changes['collections'].currentValue);"}}),{c(){g=b(),t=r("div"),d=r("h2"),d.textContent=et,S=b(),u=r("p"),u.textContent=nt,R=s(`\r
\r
  * `),m=r("strong"),m.textContent=ot,G=s(` Angular's change detection automatically triggers it whenever one or more input properties of a component change.\r
  * `),f=r("strong"),f.textContent=rt,H=s(" These are properties decorated with `@Input()` in your component, allowing data to flow from parent components to child components.\r\n  * "),C=r("strong"),C.textContent=at,I=s(" The `ngOnChanges` function provides a place to write code that responds specifically to changes in these input properties.\r\n\r\n  "),x=r("h3"),x.textContent=st,B=s(`\r
\r
  Here's a line-by-line analysis of the code snippet:\r
\r
\r
  `),J(c.$$.fragment),N=s("\r\n\r\n  * This defines the `ngOnChanges` function, part of the `OnChanges` interface.\r\n  * The function takes a `changes` argument (`SimpleChanges`) that holds details about changed input properties.\r\n\r\n  "),J(h.$$.fragment),U=s(`\r
\r
  * Checks if the 'collections' input property has been modified.\r
\r
  `),J(p.$$.fragment),A=s(`\r
\r
  * Logs a message and the new value of the 'collections' input to the console.\r
\r
    `),v=r("h3"),v.textContent=lt,M=s(`\r
\r
    The code shows how to use \`ngOnChanges\` to:\r
\r
    1. Monitor changes to a 'collections' input property.\r
    2. Log the new 'collections' value to the console.\r
\r
    `),_=r("h3"),_.textContent=it,P=b(),w=r("strong"),w.textContent=ct,j=s(" Modify the component's state based on input property changes. "),q=r("br"),L=b(),y=r("strong"),y.textContent=ht,F=s("  Fetch data, re-render the UI, etc., in response to input changes. "),V=r("br"),D=b(),$=r("strong"),$.textContent=pt,E=s(" Perform tasks when an input property changes. "),z=r("br"),this.h()},l(o){mt("svelte-1hqdqan",document.head).forEach(k),g=O(o),t=a(o,"DIV",{class:!0});var e=ft(t);d=a(e,"H2",{"data-svelte-h":!0}),i(d)!=="svelte-e3u9wt"&&(d.textContent=et),S=O(e),u=a(e,"P",{"data-svelte-h":!0}),i(u)!=="svelte-y7d1uo"&&(u.textContent=nt),R=l(e,`\r
\r
  * `),m=a(e,"STRONG",{"data-svelte-h":!0}),i(m)!=="svelte-1gcfgwt"&&(m.textContent=ot),G=l(e,` Angular's change detection automatically triggers it whenever one or more input properties of a component change.\r
  * `),f=a(e,"STRONG",{"data-svelte-h":!0}),i(f)!=="svelte-xysm4x"&&(f.textContent=rt),H=l(e," These are properties decorated with `@Input()` in your component, allowing data to flow from parent components to child components.\r\n  * "),C=a(e,"STRONG",{"data-svelte-h":!0}),i(C)!=="svelte-g0zl0a"&&(C.textContent=at),I=l(e," The `ngOnChanges` function provides a place to write code that responds specifically to changes in these input properties.\r\n\r\n  "),x=a(e,"H3",{"data-svelte-h":!0}),i(x)!=="svelte-qut25a"&&(x.textContent=st),B=l(e,`\r
\r
  Here's a line-by-line analysis of the code snippet:\r
\r
\r
  `),K(c.$$.fragment,e),N=l(e,"\r\n\r\n  * This defines the `ngOnChanges` function, part of the `OnChanges` interface.\r\n  * The function takes a `changes` argument (`SimpleChanges`) that holds details about changed input properties.\r\n\r\n  "),K(h.$$.fragment,e),U=l(e,`\r
\r
  * Checks if the 'collections' input property has been modified.\r
\r
  `),K(p.$$.fragment,e),A=l(e,`\r
\r
  * Logs a message and the new value of the 'collections' input to the console.\r
\r
    `),v=a(e,"H3",{"data-svelte-h":!0}),i(v)!=="svelte-wcw1m3"&&(v.textContent=lt),M=l(e,`\r
\r
    The code shows how to use \`ngOnChanges\` to:\r
\r
    1. Monitor changes to a 'collections' input property.\r
    2. Log the new 'collections' value to the console.\r
\r
    `),_=a(e,"H3",{"data-svelte-h":!0}),i(_)!=="svelte-1lxruk1"&&(_.textContent=it),P=O(e),w=a(e,"STRONG",{"data-svelte-h":!0}),i(w)!=="svelte-1ato2jc"&&(w.textContent=ct),j=l(e," Modify the component's state based on input property changes. "),q=a(e,"BR",{}),L=O(e),y=a(e,"STRONG",{"data-svelte-h":!0}),i(y)!=="svelte-1nn30jj"&&(y.textContent=ht),F=l(e,"  Fetch data, re-render the UI, etc., in response to input changes. "),V=a(e,"BR",{}),D=O(e),$=a(e,"STRONG",{"data-svelte-h":!0}),i($)!=="svelte-1dyse71"&&($.textContent=pt),E=l(e," Perform tasks when an input property changes. "),z=a(e,"BR",{}),e.forEach(k),this.h()},h(){document.title=`\r
  Understanding ngOnChanges in Angular: A Complete Guide\r
`,Ct(t,"class","flex gap-3 flex-col")},m(o,W){gt(o,g,W),gt(o,t,W),n(t,d),n(t,S),n(t,u),n(t,R),n(t,m),n(t,G),n(t,f),n(t,H),n(t,C),n(t,I),n(t,x),n(t,B),Q(c,t,null),n(t,N),Q(h,t,null),n(t,U),Q(p,t,null),n(t,A),n(t,v),n(t,M),n(t,_),n(t,P),n(t,w),n(t,j),n(t,q),n(t,L),n(t,y),n(t,F),n(t,V),n(t,D),n(t,$),n(t,E),n(t,z),T=!0},p:xt,i(o){T||(X(c.$$.fragment,o),X(h.$$.fragment,o),X(p.$$.fragment,o),T=!0)},o(o){Y(c.$$.fragment,o),Y(h.$$.fragment,o),Y(p.$$.fragment,o),T=!1},d(o){o&&(k(g),k(t)),Z(c),Z(h),Z(p)}}}class Tt extends vt{constructor(g){super(),_t(this,g,null,wt,ut,{})}}export{Tt as component};
