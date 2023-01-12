import{_ as t}from"../../chunks/preload-helper-c28b9807.js";import{S as kt,i as St,s as jt,l as m,a as R,u as x,P as J,m as g,p as l,h as n,c as b,v as k,Q as K,q as s,U as Ot,b as xt,G as _,w as ht,L as yt,X as Ht,Y as qt,Z as Mt}from"../../chunks/index-85173f65.js";import{a as Rt}from"../../chunks/index-b3cbd6f8.js";const ct=(p,e)=>{const a=p[e];return a?typeof a=="function"?a():Promise.resolve(a):new Promise((i,o)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(o.bind(null,new Error("Unknown variable dynamic import: "+e)))})},Ct={title:"Pokedex",description:"It provides pokemon information powered by PokeAPI",repo:"https://github.com/adambeis/pokedex",demo:"https://elaborate-pixie-43169f.netlify.app",languages:["Svelte","Tailwind"]},Gt={title:"Serpent NFT Game",description:"Game where the NFTs level up powered only on-chain, NFTs can be bought and sold",repo:"https://github.com/adambeis/Serpent",demo:"https://splendorous-granita-0d76d7.netlify.app",languages:["Svelte Kit","Tailwind","Truffle","Solidity"]},Nt={title:"Hangman",description:"It's a guessing game developed with native web technologies",repo:"https://github.com/adambeis/hangman",demo:"https://testy-robin.surge.sh/",languages:["JavaScript","HTML","CSS"]},T={Pokedex:Ct,Serpent:Gt,Hangman:Nt};function bt(p,e,a){const i=p.slice();return i[3]=e[a],i}function wt(p){let e,a=p[3]+"",i;return{c(){e=m("span"),i=x(a),this.h()},l(o){e=g(o,"SPAN",{class:!0});var v=l(e);i=k(v,a),v.forEach(n),this.h()},h(){s(e,"class","mx-1")},m(o,v){xt(o,e,v),_(e,i)},p(o,v){v&1&&a!==(a=o[3]+"")&&ht(i,a)},d(o){o&&n(e)}}}function Bt(p){let e,a,i,o,v,h,_t,c,S,C=T[p[0]].title+"",Q,at,j,G=T[p[0]].description+"",X,rt,A,y,it,ot,w,nt,V,f,I,N,lt,B,pt,H,dt,Y,ut,P,L,z,mt,q,gt,Z,W,F,D,M=T[p[0]].languages,u=[];for(let r=0;r<M.length;r+=1)u[r]=wt(bt(p,M,r));return{c(){e=m("div"),a=m("div"),i=m("div"),o=m("img"),_t=R(),c=m("div"),S=m("h1"),Q=x(C),at=R(),j=m("p"),X=x(G),rt=R(),A=m("div"),y=m("h1"),it=x("Languages"),ot=R(),w=m("div");for(let r=0;r<u.length;r+=1)u[r].c();nt=R(),V=m("div"),f=m("a"),I=J("svg"),N=J("title"),lt=x("GitHub"),B=J("path"),pt=R(),H=m("span"),dt=x("Repo"),ut=R(),P=m("a"),L=J("svg"),z=J("path"),mt=R(),q=m("span"),gt=x("Demo"),this.h()},l(r){e=g(r,"DIV",{class:!0});var E=l(e);a=g(E,"DIV",{class:!0});var d=l(a);i=g(d,"DIV",{class:!0});var U=l(i);o=g(U,"IMG",{class:!0,src:!0,alt:!0}),U.forEach(n),d.forEach(n),_t=b(E),c=g(E,"DIV",{class:!0});var O=l(c);S=g(O,"H1",{class:!0});var ft=l(S);Q=k(ft,C),ft.forEach(n),at=b(O),j=g(O,"P",{class:!0});var Pt=l(j);X=k(Pt,G),Pt.forEach(n),rt=b(O),A=g(O,"DIV",{class:!0});var $=l(A);y=g($,"H1",{class:!0});var It=l(y);it=k(It,"Languages"),It.forEach(n),ot=b($),w=g($,"DIV",{class:!0});var Dt=l(w);for(let vt=0;vt<u.length;vt+=1)u[vt].l(Dt);Dt.forEach(n),$.forEach(n),nt=b(O),V=g(O,"DIV",{class:!0});var tt=l(V);f=g(tt,"A",{class:!0,target:!0,href:!0});var et=l(f);I=K(et,"svg",{role:!0,class:!0,viewBox:!0,xmlns:!0});var Et=l(I);N=K(Et,"title",{});var Tt=l(N);lt=k(Tt,"GitHub"),Tt.forEach(n),B=K(Et,"path",{d:!0}),l(B).forEach(n),Et.forEach(n),pt=b(et),H=g(et,"SPAN",{class:!0});var At=l(H);dt=k(At,"Repo"),At.forEach(n),et.forEach(n),ut=b(tt),P=g(tt,"A",{class:!0,target:!0,href:!0});var st=l(P);L=K(st,"svg",{class:!0,viewBox:!0,xmlns:!0});var Vt=l(L);z=K(Vt,"path",{d:!0}),l(z).forEach(n),Vt.forEach(n),mt=b(st),q=g(st,"SPAN",{class:!0});var Lt=l(q);gt=k(Lt,"Demo"),Lt.forEach(n),st.forEach(n),tt.forEach(n),O.forEach(n),E.forEach(n),this.h()},h(){s(o,"class",v="animate rounded-lg "+p[2]),Ot(o.src,h=p[1])||s(o,"src",h),s(o,"alt",""),s(i,"class","w-1/2 md:w-full m-auto"),s(a,"class","grid m-auto"),s(S,"class","font-bold text-2xl"),s(j,"class","m-auto md:w-3/5 md:mt-4"),s(y,"class","font-bold"),s(w,"class","md:mt-4"),s(A,"class","mt-4 md:mt-8"),s(B,"d","M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"),s(I,"role","img"),s(I,"class","rounded-full w-8 h-8 cursor-pointer"),s(I,"viewBox","0 0 24 24"),s(I,"xmlns","http://www.w3.org/2000/svg"),s(H,"class","ml-1"),s(f,"class","px-2 py-1 rounded-lg bg-white text-black hover:bg-primary hover:text-white inline-flex items-center"),s(f,"target","_blank"),s(f,"href",Y=T[p[0]].repo),s(z,"d","M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"),s(L,"class","rounded-full w-8 h-8 cursor-pointer"),s(L,"viewBox","0 0 576 512"),s(L,"xmlns","http://www.w3.org/2000/svg"),s(q,"class","ml-1"),s(P,"class","px-2 py-1 rounded-lg bg-white text-black hover:bg-primary hover:text-white inline-flex items-center"),s(P,"target","_blank"),s(P,"href",Z=T[p[0]].demo),s(V,"class","mt-4 md:mt-8"),s(c,"class","text-xl text-center col-span-2 rounded-lg pt-2 m-auto"),s(e,"class","grid grid-cols-1 md:grid-cols-3 md:gap-2 text-center m-auto px-4 pt-2 md:pt-8")},m(r,E){xt(r,e,E),_(e,a),_(a,i),_(i,o),_(e,_t),_(e,c),_(c,S),_(S,Q),_(c,at),_(c,j),_(j,X),_(c,rt),_(c,A),_(A,y),_(y,it),_(A,ot),_(A,w);for(let d=0;d<u.length;d+=1)u[d].m(w,null);_(c,nt),_(c,V),_(V,f),_(f,I),_(I,N),_(N,lt),_(I,B),_(f,pt),_(f,H),_(H,dt),_(V,ut),_(V,P),_(P,L),_(L,z),_(P,mt),_(P,q),_(q,gt),D=!0},p(r,[E]){if((!D||E&4&&v!==(v="animate rounded-lg "+r[2]))&&s(o,"class",v),(!D||E&2&&!Ot(o.src,h=r[1]))&&s(o,"src",h),(!D||E&1)&&C!==(C=T[r[0]].title+"")&&ht(Q,C),(!D||E&1)&&G!==(G=T[r[0]].description+"")&&ht(X,G),E&1){M=T[r[0]].languages;let d;for(d=0;d<M.length;d+=1){const U=bt(r,M,d);u[d]?u[d].p(U,E):(u[d]=wt(U),u[d].c(),u[d].m(w,null))}for(;d<u.length;d+=1)u[d].d(1);u.length=M.length}(!D||E&1&&Y!==(Y=T[r[0]].repo))&&s(f,"href",Y),(!D||E&1&&Z!==(Z=T[r[0]].demo))&&s(P,"href",Z)},i(r){D||(yt(()=>{F&&F.end(1),W=Mt(e,Rt,{x:-300,duration:1e3}),W.start()}),D=!0)},o(r){W&&W.invalidate(),F=Ht(e,Rt,{x:-200}),D=!1},d(r){r&&n(e),qt(u,r),r&&F&&F.end()}}}async function Kt({params:p}){let e=p.id,a,i;switch(e){case"Pokedex":i="bg-orange-500",a=(await ct(Object.assign({"../../assets/Hangman.png":()=>t(()=>import("../../chunks/Hangman-5fdd048e.js"),[]),"../../assets/Pokedex.png":()=>t(()=>import("../../chunks/Pokedex-36b182ab.js"),[]),"../../assets/Serpent.png":()=>t(()=>import("../../chunks/Serpent-9b3839d3.js"),[]),"../../assets/ab_logo.png":()=>t(()=>import("../../chunks/ab_logo-f9eb3436.js"),[]),"../../assets/css.png":()=>t(()=>import("../../chunks/css-86125a87.js"),[]),"../../assets/ethersjs.png":()=>t(()=>import("../../chunks/ethersjs-927b1cf9.js"),[]),"../../assets/ganache.png":()=>t(()=>import("../../chunks/ganache-95cc2764.js"),[]),"../../assets/git.png":()=>t(()=>import("../../chunks/git-07d9eaed.js"),[]),"../../assets/github.png":()=>t(()=>import("../../chunks/github-8c222788.js"),[]),"../../assets/gmail.png":()=>t(()=>import("../../chunks/gmail-cb2b6e92.js"),[]),"../../assets/hardhat.png":()=>t(()=>import("../../chunks/hardhat-9f823b82.js"),[]),"../../assets/html.png":()=>t(()=>import("../../chunks/html-44d76566.js"),[]),"../../assets/ipfs.png":()=>t(()=>import("../../chunks/ipfs-6e1c203e.js"),[]),"../../assets/js.png":()=>t(()=>import("../../chunks/js-92098089.js"),[]),"../../assets/metamask.png":()=>t(()=>import("../../chunks/metamask-e6e0bdbc.js"),[]),"../../assets/nodejs.png":()=>t(()=>import("../../chunks/nodejs-45a0e9c7.js"),[]),"../../assets/npm.png":()=>t(()=>import("../../chunks/npm-f9d70925.js"),[]),"../../assets/postgresql.png":()=>t(()=>import("../../chunks/postgresql-e5ef2348.js"),[]),"../../assets/python.png":()=>t(()=>import("../../chunks/python-0dbe1f65.js"),[]),"../../assets/remix.png":()=>t(()=>import("../../chunks/remix-bc51fcee.js"),[]),"../../assets/solidity.png":()=>t(()=>import("../../chunks/solidity-d7bef9ef.js"),[]),"../../assets/svelte.png":()=>t(()=>import("../../chunks/svelte-55126bdb.js"),[]),"../../assets/tailwindcss.png":()=>t(()=>import("../../chunks/tailwindcss-721c4964.js"),[]),"../../assets/telegram.png":()=>t(()=>import("../../chunks/telegram-6f8ac04b.js"),[]),"../../assets/truffle.png":()=>t(()=>import("../../chunks/truffle-eb16a593.js"),[])}),`../../assets/${e}.png`)).default;break;case"Serpent":i="bg-[#111826]",a=(await ct(Object.assign({"../../assets/Hangman.png":()=>t(()=>import("../../chunks/Hangman-5fdd048e.js"),[]),"../../assets/Pokedex.png":()=>t(()=>import("../../chunks/Pokedex-36b182ab.js"),[]),"../../assets/Serpent.png":()=>t(()=>import("../../chunks/Serpent-9b3839d3.js"),[]),"../../assets/ab_logo.png":()=>t(()=>import("../../chunks/ab_logo-f9eb3436.js"),[]),"../../assets/css.png":()=>t(()=>import("../../chunks/css-86125a87.js"),[]),"../../assets/ethersjs.png":()=>t(()=>import("../../chunks/ethersjs-927b1cf9.js"),[]),"../../assets/ganache.png":()=>t(()=>import("../../chunks/ganache-95cc2764.js"),[]),"../../assets/git.png":()=>t(()=>import("../../chunks/git-07d9eaed.js"),[]),"../../assets/github.png":()=>t(()=>import("../../chunks/github-8c222788.js"),[]),"../../assets/gmail.png":()=>t(()=>import("../../chunks/gmail-cb2b6e92.js"),[]),"../../assets/hardhat.png":()=>t(()=>import("../../chunks/hardhat-9f823b82.js"),[]),"../../assets/html.png":()=>t(()=>import("../../chunks/html-44d76566.js"),[]),"../../assets/ipfs.png":()=>t(()=>import("../../chunks/ipfs-6e1c203e.js"),[]),"../../assets/js.png":()=>t(()=>import("../../chunks/js-92098089.js"),[]),"../../assets/metamask.png":()=>t(()=>import("../../chunks/metamask-e6e0bdbc.js"),[]),"../../assets/nodejs.png":()=>t(()=>import("../../chunks/nodejs-45a0e9c7.js"),[]),"../../assets/npm.png":()=>t(()=>import("../../chunks/npm-f9d70925.js"),[]),"../../assets/postgresql.png":()=>t(()=>import("../../chunks/postgresql-e5ef2348.js"),[]),"../../assets/python.png":()=>t(()=>import("../../chunks/python-0dbe1f65.js"),[]),"../../assets/remix.png":()=>t(()=>import("../../chunks/remix-bc51fcee.js"),[]),"../../assets/solidity.png":()=>t(()=>import("../../chunks/solidity-d7bef9ef.js"),[]),"../../assets/svelte.png":()=>t(()=>import("../../chunks/svelte-55126bdb.js"),[]),"../../assets/tailwindcss.png":()=>t(()=>import("../../chunks/tailwindcss-721c4964.js"),[]),"../../assets/telegram.png":()=>t(()=>import("../../chunks/telegram-6f8ac04b.js"),[]),"../../assets/truffle.png":()=>t(()=>import("../../chunks/truffle-eb16a593.js"),[])}),`../../assets/${e}.png`)).default;break;case"Hangman":i="bg-[#0d1117]",a=(await ct(Object.assign({"../../assets/Hangman.png":()=>t(()=>import("../../chunks/Hangman-5fdd048e.js"),[]),"../../assets/Pokedex.png":()=>t(()=>import("../../chunks/Pokedex-36b182ab.js"),[]),"../../assets/Serpent.png":()=>t(()=>import("../../chunks/Serpent-9b3839d3.js"),[]),"../../assets/ab_logo.png":()=>t(()=>import("../../chunks/ab_logo-f9eb3436.js"),[]),"../../assets/css.png":()=>t(()=>import("../../chunks/css-86125a87.js"),[]),"../../assets/ethersjs.png":()=>t(()=>import("../../chunks/ethersjs-927b1cf9.js"),[]),"../../assets/ganache.png":()=>t(()=>import("../../chunks/ganache-95cc2764.js"),[]),"../../assets/git.png":()=>t(()=>import("../../chunks/git-07d9eaed.js"),[]),"../../assets/github.png":()=>t(()=>import("../../chunks/github-8c222788.js"),[]),"../../assets/gmail.png":()=>t(()=>import("../../chunks/gmail-cb2b6e92.js"),[]),"../../assets/hardhat.png":()=>t(()=>import("../../chunks/hardhat-9f823b82.js"),[]),"../../assets/html.png":()=>t(()=>import("../../chunks/html-44d76566.js"),[]),"../../assets/ipfs.png":()=>t(()=>import("../../chunks/ipfs-6e1c203e.js"),[]),"../../assets/js.png":()=>t(()=>import("../../chunks/js-92098089.js"),[]),"../../assets/metamask.png":()=>t(()=>import("../../chunks/metamask-e6e0bdbc.js"),[]),"../../assets/nodejs.png":()=>t(()=>import("../../chunks/nodejs-45a0e9c7.js"),[]),"../../assets/npm.png":()=>t(()=>import("../../chunks/npm-f9d70925.js"),[]),"../../assets/postgresql.png":()=>t(()=>import("../../chunks/postgresql-e5ef2348.js"),[]),"../../assets/python.png":()=>t(()=>import("../../chunks/python-0dbe1f65.js"),[]),"../../assets/remix.png":()=>t(()=>import("../../chunks/remix-bc51fcee.js"),[]),"../../assets/solidity.png":()=>t(()=>import("../../chunks/solidity-d7bef9ef.js"),[]),"../../assets/svelte.png":()=>t(()=>import("../../chunks/svelte-55126bdb.js"),[]),"../../assets/tailwindcss.png":()=>t(()=>import("../../chunks/tailwindcss-721c4964.js"),[]),"../../assets/telegram.png":()=>t(()=>import("../../chunks/telegram-6f8ac04b.js"),[]),"../../assets/truffle.png":()=>t(()=>import("../../chunks/truffle-eb16a593.js"),[])}),`../../assets/${e}.png`)).default;break;default:i="bg-white",a="";break}return{props:{project:e,img:a,bg:i}}}function zt(p,e,a){let{project:i}=e,{img:o}=e,{bg:v}=e;return p.$$set=h=>{"project"in h&&a(0,i=h.project),"img"in h&&a(1,o=h.img),"bg"in h&&a(2,v=h.bg)},[i,o,v]}class Qt extends kt{constructor(e){super(),St(this,e,zt,Bt,jt,{project:0,img:1,bg:2})}}export{Qt as default,Kt as load};