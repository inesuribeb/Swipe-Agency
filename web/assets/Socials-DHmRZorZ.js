import{j as s,r as c,L,c as j}from"./index-Dk1DGpuy.js";import"./History-BFS5XVEh.js";function I({url:r}){return s.jsx("div",{className:"logo-container-phone",children:s.jsx("img",{src:r,alt:"Brand logo",className:"logo"})})}function H({content:r,className:i,withLinks:t}){const[a,l]=c.useState(0),[h,g]=c.useState(null),[u,d]=c.useState(null),f=c.useRef(null),n=r.images,m=n.length,x=50,p=e=>{d(null),g(e.targetTouches[0].clientX)},S=e=>{d(e.targetTouches[0].clientX)},C=()=>{if(!h||!u)return;const e=h-u,o=e>x,M=e<-x;o&&N(),M&&v()},N=()=>{l(e=>e===m-1?0:e+1)},v=()=>{l(e=>e===0?m-1:e-1)};return s.jsxs("div",{className:`carrusel-container-mobile ${i}`,children:[s.jsx("div",{className:"carrusel-track",onTouchStart:p,onTouchMove:S,onTouchEnd:C,ref:f,style:{transform:`translateX(-${a*80}%)`},children:n.map((e,o)=>s.jsx("div",{className:"carrusel-slide",children:t?s.jsxs(L,{to:e.link,children:[s.jsx("p",{className:"carrusel-description",children:e.description}),s.jsx("img",{src:e.url,alt:e.description})]}):s.jsx(s.Fragment,{children:s.jsx("img",{src:e.url,alt:e.description,className:"carrusel-image"})})},o))}),s.jsx("div",{className:"carrusel-info",children:s.jsx("p",{className:n[a].textColor,children:n[a].description})})]})}function R({brandOrigin:r}){return s.jsx("div",{className:"brandOrigin",children:r})}const T=j(s.jsx("path",{d:"M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"}),"Instagram"),k=j(s.jsx("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2m6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56M12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96M4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56m2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8M12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96M14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2m.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56M16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2z"}),"Language");function w({instagram:r,facebook:i,website:t}){return s.jsxs(s.Fragment,{children:[s.jsx("h3",{className:"socials-title",children:"Find them on"}),s.jsxs("div",{className:"socials-phone",children:[s.jsx("a",{href:r,target:"_blank",rel:"noopener noreferrer",children:s.jsx(T,{sx:{color:"#000000"}})}),s.jsx("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:s.jsx(k,{sx:{color:"#000000"}})})]})]})}export{H as C,I as L,R as O,w as S};
