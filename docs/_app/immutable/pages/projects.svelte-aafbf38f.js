import{S as A,i as F,s as L,l as p,u as D,a as b,m as k,p as v,v as V,h as _,c as j,q as m,U as x,b as M,G as d,w as y,n as z,x as w,y as P,z as E,f as I,L as N,t as G,X as O,C as H,O as T,Z as U}from"../chunks/index-85173f65.js";import{f as X,a as Z}from"../chunks/index-b3cbd6f8.js";import{p as B}from"../chunks/stores-3b53552b.js";import J from"../chunks/Pokedex-36b182ab.js";import K from"../chunks/Hangman-5fdd048e.js";import Q from"../chunks/Serpent-9b3839d3.js";function R(l){let e,a,r,f,i,o,c,g,n,h;return{c(){e=p("a"),a=p("h1"),r=D(l[0]),f=b(),i=p("div"),o=p("img"),g=b(),n=p("p"),h=D(l[1]),this.h()},l(t){e=k(t,"A",{class:!0,href:!0});var s=v(e);a=k(s,"H1",{class:!0});var u=v(a);r=V(u,l[0]),u.forEach(_),f=j(s),i=k(s,"DIV",{class:!0});var C=v(i);o=k(C,"IMG",{class:!0,src:!0,alt:!0}),C.forEach(_),g=j(s),n=k(s,"P",{class:!0});var S=v(n);h=V(S,l[1]),S.forEach(_),s.forEach(_),this.h()},h(){m(a,"class","font-bold text-4xl"),m(o,"class",l[5]),x(o.src,c=l[2])||m(o,"src",c),m(o,"alt",""),m(i,"class",l[4]),m(n,"class","text-2xl"),m(e,"class","space-y-2 hover:bg-primary rounded-lg p-4"),m(e,"href",l[3])},m(t,s){M(t,e,s),d(e,a),d(a,r),d(e,f),d(e,i),d(i,o),d(e,g),d(e,n),d(n,h)},p(t,[s]){s&1&&y(r,t[0]),s&32&&m(o,"class",t[5]),s&4&&!x(o.src,c=t[2])&&m(o,"src",c),s&16&&m(i,"class",t[4]),s&2&&y(h,t[1]),s&8&&m(e,"href",t[3])},i:z,o:z,d(t){t&&_(e)}}}function W(l,e,a){let{title:r}=e,{description:f}=e,{imgSrc:i}=e,{link:o}=e,{containerClass:c}=e,{imgClass:g}=e;return l.$$set=n=>{"title"in n&&a(0,r=n.title),"description"in n&&a(1,f=n.description),"imgSrc"in n&&a(2,i=n.imgSrc),"link"in n&&a(3,o=n.link),"containerClass"in n&&a(4,c=n.containerClass),"imgClass"in n&&a(5,g=n.imgClass)},[r,f,i,o,c,g]}class q extends A{constructor(e){super(),F(this,e,W,R,L,{title:0,description:1,imgSrc:2,link:3,containerClass:4,imgClass:5})}}function Y(l){let e,a,r,f,i,o,c,g,n,h;return r=new q({props:{title:"Pokedex",description:"Pokemon Info",imgSrc:J,link:`${l[0].url.pathname}/Pokedex`,containerClass:"w-full",imgClass:"m-auto rounded-full bg-orange-500"}}),i=new q({props:{title:"Serpent",description:"Serpent NFT Game",imgSrc:Q,link:`${l[0].url.pathname}/Serpent`,containerClass:"w-full",imgClass:"m-auto rounded-full"}}),c=new q({props:{title:"Hangman",description:"Guessing game",imgSrc:K,link:`${l[0].url.pathname}/Hangman`,containerClass:"w-full",imgClass:"m-auto rounded-full"}}),{c(){e=p("div"),a=p("div"),w(r.$$.fragment),f=b(),w(i.$$.fragment),o=b(),w(c.$$.fragment),this.h()},l(t){e=k(t,"DIV",{class:!0});var s=v(e);a=k(s,"DIV",{class:!0});var u=v(a);P(r.$$.fragment,u),f=j(u),P(i.$$.fragment,u),o=j(u),P(c.$$.fragment,u),u.forEach(_),s.forEach(_),this.h()},h(){m(a,"class","grid md:grid-cols-3 gap-4 text-center m-auto px-4 bg-black"),m(e,"class","flex h-full")},m(t,s){M(t,e,s),d(e,a),E(r,a,null),d(a,f),E(i,a,null),d(a,o),E(c,a,null),h=!0},p(t,[s]){const u={};s&1&&(u.link=`${t[0].url.pathname}/Pokedex`),r.$set(u);const C={};s&1&&(C.link=`${t[0].url.pathname}/Serpent`),i.$set(C);const S={};s&1&&(S.link=`${t[0].url.pathname}/Hangman`),c.$set(S)},i(t){h||(I(r.$$.fragment,t),I(i.$$.fragment,t),I(c.$$.fragment,t),N(()=>{n&&n.end(1),g=U(e,Z,{y:200,duration:1e3}),g.start()}),h=!0)},o(t){G(r.$$.fragment,t),G(i.$$.fragment,t),G(c.$$.fragment,t),g&&g.invalidate(),n=O(e,X,{}),h=!1},d(t){t&&_(e),H(r),H(i),H(c),t&&n&&n.end()}}}function $(l,e,a){let r;return T(l,B,f=>a(0,r=f)),[r]}class ie extends A{constructor(e){super(),F(this,e,$,Y,L,{})}}export{ie as default};