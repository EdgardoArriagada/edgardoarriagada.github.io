(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{157:function(e,t,a){"use strict";a.r(t);var n=a(0),A=a.n(n),i=a(59),r=(a(162),a(163),a(164)),l=a(158),c=a(165),o=a.n(c),s=Object(i.c)(o.a).withConfig({displayName:"landing-page___Img",componentId:"sc-9kst4s-0"})(["color:black;z-index:-1;background-color:rgba(255,255,255,0.8);height:100%;width:100%;grid-column:1 / span 6;grid-row:1 / span 7;@media (min-width:760px){grid-column:1 / span 10;}"]),d=i.c.header.withConfig({displayName:"landing-page___Header",componentId:"sc-9kst4s-1"})(["color:white;height:20%;height:100vh;width:auto;position:relative;padding-bottom:3rem;@media (min-width:760px){height:100vh;}"]),m=i.c.div.withConfig({displayName:"landing-page___ContentWrapper",componentId:"sc-9kst4s-2"})(["height:100%;height:100vh;width:100%;display:grid;grid-gap:0.5rem;grid-template-columns:min-content repeat(5,1fr);grid-template-rows:3rem repeat(4,1fr) 1fr 1fr;align-items:start;@media (min-width:760px){height:100vh;grid-template-columns:1fr min-content repeat(6,1fr) minMax(200px,350px) 1fr;grid-template-rows:repeat(5,1fr) 1fr 1fr;}"]),p=i.c.h1.withConfig({displayName:"landing-page___Title",componentId:"sc-9kst4s-3"})(["margin-left:0.8rem;grid-column:1 / span 4;grid-row:2;@media (min-width:760px){margin-left:0;grid-column:2 / span 4;}"]),g=i.c.h3.withConfig({displayName:"landing-page___Occupation",componentId:"sc-9kst4s-4"})(["margin-left:0.8rem;grid-column:1 / span 3;grid-row:3;@media (min-width:760px){margin-left:0;grid-column:2 / span 3;}"]),f=i.c.div.withConfig({displayName:"landing-page___ContactInfo",componentId:"sc-9kst4s-5"})(["height:100%;display:flex;flex-direction:column;justify-items:center;padding:1rem;color:#3d3c3c;background-color:rgba(255,255,255,0.7);max-width:14rem;p{margin:0;}grid-column:1 / span 4;grid-row:6;@media (min-width:760px){grid-column:2;}"]),u=i.c.div.withConfig({displayName:"landing-page___Summary",componentId:"sc-9kst4s-6"})(["color:#3d3c3c;padding:1rem;p{margin:0;}text-align:justify;background-color:rgba(255,255,255,0.7);grid-column:3 / span 4;grid-row:4;@media (min-width:760px){grid-column:9 / span 1;grid-row:3;}@media screen and (min-device-width:768px) and (max-device-width:1024px){grid-row:5;}"]),h=i.c.h2.withConfig({displayName:"landing-page___AboutMe",componentId:"sc-9kst4s-7"})(["margin:0;a{color:white;text-decoration:none;margin-right:0.5rem;}grid-column:1 / span 6;grid-row:7;align-self:end;justify-self:center;display:flex;align-items:center;@media (min-width:760px){justify-self:start;grid-column:7 / span 3;grid-row:6;}"]),E=Object(i.c)(l.a).withConfig({displayName:"landing-page___DownArrowIcon",componentId:"sc-9kst4s-8"})(["font-size:2rem;"]),w=i.c.p.withConfig({displayName:"landing-page___fontAndIcon",componentId:"sc-9kst4s-9"})(["display:flex;align-items:center;span{margin-left:0.5rem;}"]),b=function(){var e=r.data;return A.a.createElement(d,{id:"home"},A.a.createElement(m,null,A.a.createElement(s,{fluid:e.file.childImageSharp.fluid}),A.a.createElement(p,null,e.site.siteMetadata.title),A.a.createElement(f,null,A.a.createElement("p",null,A.a.createElement("strong",null,"Contact Info")),A.a.createElement(w,null,A.a.createElement(l.c,null)," ",A.a.createElement("span",null,"Edgardo Arriagada")),A.a.createElement(w,null,A.a.createElement(l.b,null)," ",A.a.createElement("span",null,"edgardo.arriagada.ortiz")),A.a.createElement(w,null,A.a.createElement("span",{style:{marginLeft:"0"}},"@")," ",A.a.createElement("span",null,"gmail.com"))),A.a.createElement(u,null,A.a.createElement("p",null,A.a.createElement("strong",null,"Summary")),A.a.createElement("p",null,"I'm a full stack engineer with a IT Engineer Bachelor equivalent degree with 1+ year of experience out of the college.")),A.a.createElement(g,null,"Full ",A.a.createElement("br",null),"Stack ",A.a.createElement("br",null),"Engineer"),A.a.createElement(h,null,A.a.createElement("a",{href:"#about"},"About me ")," ",A.a.createElement(E,null))))},x=a(166),y=i.c.footer.withConfig({displayName:"footer___Footer",componentId:"sc-8chkdg-0"})(["width:100%;text-align:center;color:",";padding:4rem 0 2rem;background-color:",";"],function(e){return e.theme.skin.contrastText},function(e){return e.theme.skin.dark}),j=function(){var e=x.data;return A.a.createElement(y,null,A.a.createElement("p",null,e.site.siteMetadata.author+" ©\n        "+(new Date).getFullYear()))},k=a(60),v=a(167),B=i.c.div.withConfig({displayName:"backdrop___Backdrop",componentId:"sc-1a3zwvr-0"})(["position:fixed;height:120%;width:100%;z-index:100;background-color:rgb(0,0,0,0.5);@media (min-width:760px){display:none;}"]),_=function(){var e=Object(k.b)(),t=e.UIState,a=e.UIDispatch;return Object(n.useEffect)(function(){t.isDrawerOpen?document.documentElement.style.overflowY="hidden":document.documentElement.style.overflowY="scroll"}),A.a.createElement(B,{className:t.isDrawerOpen?v.opened:v.closed,onClick:function(){a({type:"UI_CLOSE_DRAWER"})}})},C=a(168),N=a(169),Q=function(e){var t=e.title,a=C.data.site.siteMetadata.title;return n.createElement(N.Helmet,{title:t?t+" | "+a:a},n.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}))},I=Object(i.c)(l.d).withConfig({displayName:"burger-button___BurgerButton",componentId:"sc-1v7dabg-0"})(["position:fixed;z-index:200;color:white;border-radius:3rem;padding:0.1rem;top:0.7rem;left:0.7rem;background-color:rgba(0,0,0,0.5);font-size:2.5rem;"]),D=function(){var e=Object(k.b)().UIDispatch;return A.a.createElement(I,{onClick:function(){e({type:"UI_OPEN_DRAWER"})}})},Y=a(175),z=a.n(Y),R=a(176),S=a.n(R),M=i.c.li.withConfig({displayName:"navigation___Li",componentId:"sc-3gqh6i-0"})(["a{position:relative;overflow:hidden;padding:0.4rem;color:",';text-decoration:none;&:before{content:"";position:absolute;width:250%;height:100%;top:0;left:0;z-index:-1;background-image:',";transform:translate3d(-250%,0,0);transition:transform 0.5s ease-in-out;}}"],function(e){return e.theme.skin.contrastText},function(e){return e.theme.getLinearGradient()}),O=i.c.nav.withConfig({displayName:"navigation___Nav",componentId:"sc-3gqh6i-1"})(["height:6rem;width:100%;display:flex;flex-direction:column;justify-content:end;align-items:center;.link-active{a{transition:color 1s ease-out;color:black;&:before{transform:translate3d(-80%,0,0);}}}"]),P=function(){var e=Object(k.b)().UIDispatch;function t(){e({type:"UI_CLOSE_DRAWER"})}return A.a.createElement(O,null,A.a.createElement(S.a,{items:["home","about","portfolio","contact"],currentClassName:"link-active",style:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",listStyleType:"none",margin:"0"}},A.a.createElement(M,null,A.a.createElement("a",{href:"#home",onClick:t},"Home")),A.a.createElement(M,null,A.a.createElement("a",{href:"#about",onClick:t},"About")),A.a.createElement(M,null,A.a.createElement("a",{href:"#portfolio",onClick:t},"Portfolio")),A.a.createElement(M,null,A.a.createElement("a",{href:"#contact",onClick:t},"Contact"))))},L=i.c.a.withConfig({displayName:"custom-styled-components__IconButton",componentId:"sc-13w08qh-0"})(["padding:0.5rem 0.5rem 0.25rem;border-radius:50%;text-decoration:none;position:relative;overflow:hidden;color:grey;transform:translate3d(0,0,0);transition:background-color 0.1s ease-in;",""],function(e){var t=e.disabled,a=e.primary,n=e.theme;return!t&&Object(i.b)(["cursor:pointer;color:",';&:hover{background-color:rgba(0,0,0,0.1);}&:after{content:"";display:block;position:absolute;width:100%;height:100%;top:0;left:0;pointer-events:none;background-image:radial-gradient(circle,#fff 10%,transparent 10.01%);background-repeat:no-repeat;background-position:50%;transform:scale(10,10);opacity:0;transition:transform 0.5s,opacity 1s;}&:active:after{background-color:lime;transform:scale(0,0);opacity:0.3;transition:0s;}'],function(e){return a?n.primary.main:"inherit"})}),G=i.c.button.withConfig({displayName:"custom-styled-components__TextButton",componentId:"sc-13w08qh-1"})(["border:none;padding:9px 12px;font-size:16px;color:grey;background-color:grey;",""],function(e){var t=e.disabled,a=e.primary,n=e.theme;return!t&&Object(i.b)(["background-color:inherit;cursor:pointer;&:hover{background:#eee;}color:",";"],function(e){return a?n.primary.main:"inherit"})}),T=a(160),F=i.c.div.withConfig({displayName:"social-media___SocialMedia",componentId:"yxuf9e-0"})(["color:",";width:100%;display:flex;justify-content:center;"],function(e){return e.theme.skin.dark}),q=function(){return A.a.createElement(F,null,A.a.createElement(L,{href:"https://github.com/EdgardoArriagada",target:"_blank"},A.a.createElement(T.c,null)),A.a.createElement(L,{href:"https://linkedin.com/in/edgardo-arriagada",target:"_blank"},A.a.createElement(T.d,null)),A.a.createElement(L,{href:"https://codepen.io/EdgardoArriagada/",target:"_blank"},A.a.createElement(T.a,null)))},U=a(190),V=i.c.div.withConfig({displayName:"drawer___Drawer",componentId:"yz02ca-0"})(["position:fixed;display:flex;align-items:flex-start;height:120%;width:",";background-color:",";color:",";box-shadow:",";top:0;left:0;max-width:70%;z-index:200;transition:transform 0.3s ease-out;@media (min-width:760px){transform:translate3d(0,0,0);}"],function(e){return e.theme.drawer.width},function(e){return e.theme.skin.main},function(e){return e.theme.skin.contrastText},function(e){return e.theme.dp.dp4}),H=i.c.div.withConfig({displayName:"drawer___DrawerContentWrapper",componentId:"yz02ca-1"})(["padding:4rem 0 3rem;height:83%;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:space-between;"]),Z=Object(i.c)(z.a).withConfig({displayName:"drawer___Logo",componentId:"yz02ca-2"})(["width:4rem;height:4rem;"]),W=function(){var e=Object(k.b)(),t=e.UIState,a=e.UIDispatch;function i(){a({type:"UI_CLOSE_DRAWER"})}return Object(n.useEffect)(function(){return window.addEventListener("resize",i),function(){window.removeEventListener("resize",i)}},[]),A.a.createElement(V,{className:t.isDrawerOpen?U.opened:U.closed},A.a.createElement(H,null,A.a.createElement(Z,null),A.a.createElement(P,null),A.a.createElement(q,null)))},X=i.c.div.withConfig({displayName:"layout___Container",componentId:"sc-1k7q7u2-0"})(["height:100%;width:100%;display:flex;flex-direction:row;"]),J=i.c.div.withConfig({displayName:"layout___PageContent",componentId:"sc-1k7q7u2-1"})(["margin:1rem auto 4rem auto;width:90%;@media (min-width:760px){width:83%;}"]),K=i.c.div.withConfig({displayName:"layout___MainContent",componentId:"sc-1k7q7u2-2"})(["width:100%;@media (min-width:760px){margin-left:",";width:",";}"],function(e){return e.theme.drawer.width},function(e){return e.theme.drawer.getRest()});"undefined"!=typeof window&&a(191)('a[href*="#"]');var $=function(e){var t=e.children,a=e.title;return A.a.createElement(X,null,A.a.createElement(D,null),A.a.createElement(_,null),A.a.createElement(W,null),A.a.createElement(K,null,A.a.createElement(Q,{title:a}),A.a.createElement(b,null),A.a.createElement(J,null,t),A.a.createElement(j,null)))},ee=(a(192),a(193)),te=i.c.ul.withConfig({displayName:"portfolio___List",componentId:"s3ekbl-0"})(["margin:0;width:100%;display:grid;grid-template-columns:repeat(auto-fit,minMax(300px,1fr));grid-gap:1rem;list-style:none;align-items:stretch;"]),ae=i.c.li.withConfig({displayName:"portfolio___ListItem",componentId:"s3ekbl-1"})(["color:",";display:flex;flex-direction:column;justify-content:space-between;border-radius:5px;overflow:hidden;box-shadow:",";"],function(e){return e.theme.skin.dark},function(e){return e.theme.dp.dp1}),ne=i.c.div.withConfig({displayName:"portfolio___ImageContainer",componentId:"s3ekbl-2"})(["width:100%;height:auto;"]),Ae=i.c.div.withConfig({displayName:"portfolio___LabelsContainer",componentId:"s3ekbl-3"})(["padding:0.7rem;p{color:",";text-align:center;font-style:italic;}"],function(e){return e.theme.skin.contrastText}),ie=i.c.div.withConfig({displayName:"portfolio___ActionsContainer",componentId:"s3ekbl-4"})(["padding:0.5rem;width:100%;display:flex;justify-content:flex-end;"]),re=function(){var e=ee.data;if(e.error)throw new Error(e.error);var t=e.allMarkdownRemark.edges.map(function(e){var t=e.node,a=t.frontmatter,n=a.name,i=a.shortDescription,r=a.githubLink,l=a.liveLink,c=t.html;return A.a.createElement(ae,{key:n},A.a.createElement(Ae,null,A.a.createElement("h3",null,n)),A.a.createElement(ne,{dangerouslySetInnerHTML:{__html:c}}),A.a.createElement(Ae,null,A.a.createElement("p",null,i)),A.a.createElement(ie,null,r?A.a.createElement(L,{href:r,target:"_blank"},A.a.createElement(T.c,null)):A.a.createElement(L,{disabled:!0},A.a.createElement(T.c,null)),l?A.a.createElement(L,{primary:!0,href:l,target:"_blank"},A.a.createElement(T.b,null)):A.a.createElement(L,{disabled:!0},A.a.createElement(T.b,null))))});return A.a.createElement(te,null,t)},le=i.c.form.withConfig({displayName:"contact-form___Form",componentId:"pkpzn2-0"})(["width:100%;display:flex;flex-direction:column;align-items:flex-start;"]),ce=i.c.input.withConfig({displayName:"contact-form___Input",componentId:"pkpzn2-1"})(["border:none;outline:none;background-color:none;border-bottom:2px solid ",";margin:1rem 0;padding:7px;max-width:90%;&:focus{outline:none;}&::placeholder{transition:color 0.3s;color:transparent;}&.animate{&::placeholder{color:",";}}"],function(e){return e.theme.skin.contrastText},function(e){return e.theme.skin.contrastText}),oe=i.c.label.withConfig({displayName:"contact-form___Label",componentId:"pkpzn2-2"})(["font-size:16px;line-height:10px;transform:translate3d(10px,45px,0);transition:transform 0.3s,opacity 0.3s;&.animate{transform:translate3d(2px,80px,0) scale(0.85);}"]),se=Object(i.c)(ce).withConfig({displayName:"contact-form___NameInput",componentId:"pkpzn2-3"})(["width:13rem;"]),de=Object(i.c)(ce).withConfig({displayName:"contact-form___EmailInput",componentId:"pkpzn2-4"})(["width:21rem;"]),me=Object(i.c)(ce).withConfig({displayName:"contact-form___MessageInput",componentId:"pkpzn2-5"})(["width:34rem;"]),pe=function(){var e=Object(n.useState)(""),t=e[0],a=e[1],i=Object(n.useState)(""),r=i[0],l=i[1],c=Object(n.useState)(""),o=c[0],s=c[1],d=Object(n.useRef)({}),m=Object(n.useRef)({}),p=Object(n.useRef)({});function g(e,t){alert,t.current.value.trim()||e("")}return A.a.createElement(le,{action:"https://formspree.io/edgardo.arriagada.ortiz@gmail.com",method:"post"},A.a.createElement(oe,{htmlFor:"name",className:t},"Name"),A.a.createElement(se,{className:t,id:"name",type:"text",name:"name",placeholder:"Your name",onFocus:function(e){return a("animate")},onBlur:function(e){return g(a,d)},ref:d}),A.a.createElement(oe,{htmlFor:"email",className:r},"Email"),A.a.createElement(de,{className:r,id:"email",type:"email",name:"email",placeholder:"Your email",onFocus:function(e){return l("animate")},onBlur:function(e){return g(l,m)},ref:m}),A.a.createElement(oe,{htmlFor:"message",className:o},"Message"),A.a.createElement(me,{className:o,id:"message",name:"message",placeholder:"Your message",onFocus:function(e){return s("animate")},onBlur:function(e){return g(s,p)},ref:p}),A.a.createElement(G,{type:"submit",primary:!0,style:{margin:"0.8rem 0"}},A.a.createElement("strong",null,"Send")))},ge=i.c.div.withConfig({displayName:"contact___Contact",componentId:"sc-888luy-0"})(["width:100%;display:flex;flex-direction:column;align-items:flex-start;"]),fe=i.c.div.withConfig({displayName:"contact___ContactInfo",componentId:"sc-888luy-1"})(["width:100%;display:flex;justify-content:space-around;flex-wrap:wrap;"]),ue=i.c.p.withConfig({displayName:"contact___fontAndIcon",componentId:"sc-888luy-2"})(["display:flex;align-items:center;span{margin-left:0.5rem;}"]),he=function(){return A.a.createElement(ge,null,A.a.createElement(pe,null),A.a.createElement(fe,null,A.a.createElement(ue,null,A.a.createElement(l.c,null)," ",A.a.createElement("span",null,"Edgardo Arriagada")),A.a.createElement(ue,null,A.a.createElement(l.b,null)," ",A.a.createElement("span",null,"edgardo.arriagada.ortiz@gmail.com"))))},Ee=i.c.section.withConfig({displayName:"pages___Section",componentId:"sc-1rmyqsz-0"})(["text-align:justify;margin:0;color:",";h1{color:",";padding:2rem 0;}"],function(e){return e.theme.skin.contrastText},function(e){return e.theme.skin.dark});t.default=function(){return A.a.createElement($,null,A.a.createElement(A.a.Fragment,null,A.a.createElement(Ee,{id:"about"},A.a.createElement("h1",null,"About"),A.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam est placeat facere quis earum? Laudantium vitae repellat laborum sunt eaque praesentium ex et obcaecati perspiciatis sint? Sint a officiis eos."),A.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam est placeat facere quis earum? Laudantium vitae repellat laborum sunt eaque praesentium ex et obcaecati perspiciatis sint? Sint a officiis eos."),A.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam est placeat facere quis earum? Laudantium vitae repellat laborum sunt eaque praesentium ex et obcaecati perspiciatis sint? Sint a officiis eos.")),A.a.createElement(Ee,{id:"portfolio"},A.a.createElement("h1",null,"Portfolio"),A.a.createElement(re,null)),A.a.createElement(Ee,{id:"contact"},A.a.createElement("h1",null,"Contact"),A.a.createElement(he,null))))}},164:function(e){e.exports={data:{site:{siteMetadata:{title:"Edgardo's Portfolio"}},file:{childImageSharp:{fluid:{tracedSVG:"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='400' height='267'%3e%3cpath d='M0 134v133h71a728 728 0 0 0 72-1l34 1h32l3-2 3-3 1-2 1-2c1 0 3-15 2-18l-1-18c0-19 0-19-11-20a1365 1365 0 0 1-71-10h-5v6l1 16v10l12 1a1838 1838 0 0 1 36 8h-16a307 307 0 0 0-34-6l-15-2c-2 0-3-1-3-2-1-2-1-2-6-1-6 0-8 3-8 8 0 3 0 4-1 3l-5-39c0-11 0-11-3-13l-2-2 1-1-2-2-1 2h-2c-3 0-4-1-2-2v-6l-1 3-1 3v-2l-2-1c-4 1-6-3-4-6h2c0 2 2 3 4 1 1-2 4-1 4 1l3 1 2 2 2 1 1 3c0 4 0 4 4 4 9 0 17-3 22-8l10-11a216 216 0 0 0 20-23h-3c-2-3-4-2-5 0-1 1-2 2-3 1v1l1 1 1 1v3c0 2 0 2-1 1-2-2-5-2-5 0l-5 6c-4 4-5 5-4 7 0 3-5 8-7 8l-1 2c-1 4-3 2-3-2s0-5-2-5-2 0 0-1l2-1c-19-2-20-3-20-11 0-4-1-5-2-5h-4c-2 0-3 0-2 1 0 1-4 5-6 5l-1-4c1-7-2-8-8-2-7 6-11 5-9-2 1-4 0-5-3-3h-2v-2l1-3c0-2 1-4 3-5l7-6 5-3 1-1c0-2 3-3 3-2 1 2 5-1 5-3 0-1 0-2 1-1l5-3c4-5 5-5 15-3a2397 2397 0 0 0 50 6c2-1 3 0 4 7 0 4 1 5 3 5h2l-1-1c-1 0-1-2 1-12 1-5 1-6 2-5v4l-1 5 1 7 2 2 3 1h-3c-4 0-9 5-7 6v1l-2 4-1 4a2850 2850 0 0 1 38 7c26 3 25 3 38 3h10v-3c0-4 1-4-14-6l-12-2c-8-2 6-1 20 2l4-1-3-1c-2-1-2-1 2-1h4l-5-1-16-3-22-5 33 4h5v-3a151 151 0 0 1-2-22l1 3 1 3-1-18-2-13a3179 3179 0 0 1-65-10l9-6c8-6 9-6 13-6 23 3 28 3 28 0s8-10 10-10c1 1 1 1-1 2l-1 1h7c1-2 3 0 3 2 0 3 1 3 5 4 10 1 12 2 11 7v4c0 2 0 2 2 1 1-1 3-2 5-1l3-1-4-3c-5 0-5-5 0-5 6 0 8 1 7 4-1 7 0 11 2 8 1-1 2-2 5-2 4 0 4-3 0-3-4-1-5-3-3-5 4-3 12 1 9 4v1c2 0 3 2 1 2v3c0 3 0 3 2 2 2-2 11-3 11-1 0 3 2 4 4 2 3-3 11-1 11 4l-1 2c-1 1-1 1 1 2 2 0 5 7 3 8s-1 2 3 2h6l1-1c0-3-2-4-5-4-4 0-4-3 0-4 4 0 3-4-2-4-4-1-5-2-2-4 2-1 9 0 10 2l-1 1-2 1 2 1v1c-2 2-2 2 0 3 2 0 3 1 3 2l1 3 1 1-1 1h-1c-1 2 1 3 10 3a345 345 0 0 1 30 6c2 1-3 1-27-1h-24l-8 1h14l-5 1h-13c-5 0-7 0-4 1 2 1 2 1 0 1h3c2 0 3 0 2 1l21 4c39 5 45 6 42 8-2 1 1 5 4 5 2 0 3 1 3 2l1 1-1 1h-3c-1-1-1-1-1 1h-5a2478 2478 0 0 0-17-4l-1-4c-4-2-11-1-11 3v2l-45-5c-2-1-3 0-7 4l-5 5 20 2a619 619 0 0 1 26 5 185 185 0 0 1-46-6l-8-3-7-1v5c0 5 1 5 2 5 2 0 2 0 2 4-1 3 0 6 1 8 2 5 3 3 2-1-2-5-1-9 3-9 3 0 5 4 3 7l-2 2-1 2c0 1 1 1 3-2l3-3 6 1 10 2c38 4 62 9 51 9l-4-1-7-1-9 2v2c-1 0-2 1-2 3l-2 2h-2c-2 2-1-1 1-3s3-5 1-3c-1 1-17-1-18-3h-4l-5 1c-6-1-7-2-7-4l-2-1-2 1c0 2-7 2-10 0h-2l-1 2 1 2 2 1 14 1 5 1c5 0 13 2 13 3l-8 1-10-1h-17c-7-1-7-1-8 1l-2 2v1l1 8v8l-2-3-2-1 3 4 3 3-3 3-2 2 2 1 8 2 30 5c3 1 3 2 3 6-1 5 0 6 3 7l19 2 13 2c5 0 6 1 4 4-1 1-2 1-5-1-3-1-5-2-6-1l-33-4c-36-5-47-6-47-5l-1 16v17h4c5 0 13 2 13 3h-9l-9-3c-3-1-10-1-12 1-1 1-2 4-2 9l-2 10c0 3-3 4-5 3h-3c-1 2 4 2 89 2h90V0H0v134m97-20a247 247 0 0 1-11 9l-4 1h-4l4 1 6 1h10c4 0 6 0 5 1s1 1 8 1l9 1 4 1 4-1 3-1c3 0 5-2 5-5 0-2 1-3 2-3l4-1v-2l-2 1-1 1-2-1a834 834 0 0 1-34-5c-3-1-4 0-6 1m49 45c-4 4-4 5 1 6l4 2c-1 1 1 1 20 4 10 2 14 2 15 1h9c7 1 8 1 10-1 2-1 2-1 0-2-1-1-1-1 1-1l2-1 1-1c2 1 3-1 2-2h-3l-3-1h-2l-2-1a323 323 0 0 1-46-6c-5-1-5-1-9 3m193 4l-1 3c-9 10-11 13-8 13 2 0 10-4 10-6l2-1c2 0 4-3 3-5l6-1 7 1-1 1-1 1 1 1c2 0 5-4 4-5l4-1h3c-1-2-8-1-9 0-2 1-15 1-16-1h-4m-126 6c-3 5-4 5 3 6 6 1 8 0 8-5l1-2 1-1-2-1-5-1c-3 0-4 1-6 4m181 3l-2 5c0 3 0 3-1 2h-2c-2 3-8 4-8 2l-5-3c-3-1-4-1-3-2 2-3-4-4-11-2-8 2-6 4 5 6l6 3 7 2h4c1 1-3 7-5 8-4 1-1 5 4 5l7 1 10 1c0-2-1-2-5-2-5 0-6 0-6-2s1-3 2-3l1-1c1-5 0-6-1-6h-3c-2-1-2-1 2-1l5-1 2-2c3-1 4-4 1-4v-1c2 0 3-3 1-5v-1l1-1c0-2-5-1-6 2m-263 8l-3 4 5 1a323 323 0 0 0 28 4 550 550 0 0 0 59 7c4-2 9-7 7-7l2-4 4-5-5 4c-4 5-5 5-9 5a7675 7675 0 0 1-82-13c-2 0-3 1-6 4m35 38c0 2 2 4 7 5 6 1 9 1 9-2 2-3-1-4-9-5-7 0-7 0-7 2' fill='%23d3d3d3' fill-rule='evenodd'/%3e%3c/svg%3e",aspectRatio:1.5,src:"/static/fbdfedb7c011500b8f4c5df9b3cefac0/883ab/home.jpg",srcSet:"/static/fbdfedb7c011500b8f4c5df9b3cefac0/32ee9/home.jpg 500w,\n/static/fbdfedb7c011500b8f4c5df9b3cefac0/2f7e7/home.jpg 1000w,\n/static/fbdfedb7c011500b8f4c5df9b3cefac0/883ab/home.jpg 2000w,\n/static/fbdfedb7c011500b8f4c5df9b3cefac0/7146c/home.jpg 3000w,\n/static/fbdfedb7c011500b8f4c5df9b3cefac0/f4afe/home.jpg 4000w,\n/static/fbdfedb7c011500b8f4c5df9b3cefac0/0b354/home.jpg 6000w,\n/static/fbdfedb7c011500b8f4c5df9b3cefac0/3e7cb/home.jpg 6048w",sizes:"(max-width: 2000px) 100vw, 2000px"}}}}}},166:function(e){e.exports={data:{site:{siteMetadata:{author:"Edgardo Arriagada"}}}}},168:function(e){e.exports={data:{site:{siteMetadata:{title:"Edgardo's Portfolio"}}}}},175:function(e,t,a){var n=a(0);function A(e){return n.createElement("svg",e,[n.createElement("defs",{id:"defs2",key:0}),n.createElement("g",{transform:"translate(-83.413513,-56.73521)",id:"layer1",key:1},[n.createElement("path",{id:"rect4542",d:"m 83.413513,56.73521 h 47.999997 v 48 H 83.413513 Z",style:{fill:"#e7278c",fillOpacity:"1",strokeWidth:"0.25399998"},key:0}),n.createElement("g",{id:"text4554",style:{fontStyle:"normal",fontVariant:"normal",fontWeight:"500",fontStretch:"normal",fontSize:"37.12802505px",lineHeight:"1.25",fontFamily:"KacstPen",fontVariantLigatures:"normal",fontVariantCaps:"normal",fontVariantNumeric:"normal",fontFeatureSettings:"normal",textAlign:"start",letterSpacing:"0px",wordSpacing:"0px",writingMode:"lr-tb",textAnchor:"start",fill:"#ffffff",fillOpacity:"0.94117647",stroke:"none",strokeWidth:"0.43509436"},"aria-label":"E",key:1},n.createElement("path",{id:"path19",style:{fontStyle:"normal",fontVariant:"normal",fontWeight:"500",fontStretch:"normal",fontSize:"37.12802505px",fontFamily:"KacstPen",fontVariantLigatures:"normal",fontVariantCaps:"normal",fontVariantNumeric:"normal",fontFeatureSettings:"normal",textAlign:"start",writingMode:"lr-tb",textAnchor:"start",fill:"#ffffff",fillOpacity:"0.94117647",strokeWidth:"0.43509436"},d:"M 98.693504,67.201973 H 115.8072 v 3.081916 h -13.45165 v 8.012982 h 12.88966 v 3.081916 h -12.88966 v 9.807745 h 13.77797 v 3.081916 H 98.693504 Z"}))])])}A.defaultProps={id:"svg8",version:"1.1",viewBox:"0 0 48 48",height:"48mm",width:"48mm"},e.exports=A,A.default=A},193:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{frontmatter:{name:"shell-treasures",shortDescription:" This project help you to write your own bash aliases and function following the Separation of Concerns design principle. ",liveLink:"",githubLink:"https://github.com/EdgardoArriagada/shell-stuff"},html:'<p><span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; margin-left: auto; margin-right: auto;  max-width: 750px;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 55.55555555555556%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAIBBf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAAB40MmLSP/xAAXEAADAQAAAAAAAAAAAAAAAAABEDEC/9oACAEBAAEFAtRGL//EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAEDAQE/ASf/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAUEAEAAAAAAAAAAAAAAAAAAAAg/9oACAEBAAY/Al//xAAYEAADAQEAAAAAAAAAAAAAAAAAASExUf/aAAgBAQABPyFoNZCgtZ0//9oADAMBAAIAAwAAABCk3//EABYRAAMAAAAAAAAAAAAAAAAAAAABEf/aAAgBAwEBPxBIiH//xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAgEBPxAn/8QAHBAAAgICAwAAAAAAAAAAAAAAAAEhURFxMUGh/9oACAEBAAE/EFQUa4k5PMzY7Q3eDyHex//Z\'); background-size: cover; display: block;"\n    ></span>\n    <img\n        class="gatsby-resp-image-image"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;box-shadow:inset 0px 0px 0px 400px white;"\n        alt="shell-treasures"\n        title=""\n        src="/static/3fe671d971b9ece151d818ee43e198da/a66cd/shell-treasures.jpg"\n        srcset="/static/3fe671d971b9ece151d818ee43e198da/4272c/shell-treasures.jpg 188w,\n/static/3fe671d971b9ece151d818ee43e198da/1459e/shell-treasures.jpg 375w,\n/static/3fe671d971b9ece151d818ee43e198da/a66cd/shell-treasures.jpg 750w,\n/static/3fe671d971b9ece151d818ee43e198da/c0626/shell-treasures.jpg 1125w,\n/static/3fe671d971b9ece151d818ee43e198da/45751/shell-treasures.jpg 1500w,\n/static/3fe671d971b9ece151d818ee43e198da/4b954/shell-treasures.jpg 2250w,\n/static/3fe671d971b9ece151d818ee43e198da/a4bbd/shell-treasures.jpg 4500w"\n        sizes="(max-width: 750px) 100vw, 750px"\n      />\n  </span></p>'}},{node:{frontmatter:{name:"lazy-quiz",shortDescription:" This project built with react helps you to create a small quiz providing only one answer for each question. ",liveLink:"https://edgardoarriagada.github.io/lazy-quiz/",githubLink:"https://github.com/EdgardoArriagada/lazy-quiz"},html:'<p><span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; margin-left: auto; margin-right: auto;  max-width: 750px;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 55.55555555555556%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIDBAX/xAAVAQEBAAAAAAAAAAAAAAAAAAACAP/aAAwDAQACEAMQAAABo63NwTUM/wD/xAAbEAABBAMAAAAAAAAAAAAAAAACAAEDIRIxMv/aAAgBAQABBQId4iacLiR0xdf/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAXEQADAQAAAAAAAAAAAAAAAAAAAREh/9oACAECAQE/AWtpD//EABwQAAEDBQAAAAAAAAAAAAAAAAABECECETFhgf/aAAgBAQAGPwK2iaU4YaG//8QAGhABAAIDAQAAAAAAAAAAAAAAAQARITFBUf/aAAgBAQABPyHFCq4YXhvukrgRy7ieaPKf/9oADAMBAAIAAwAAABDo7//EABYRAQEBAAAAAAAAAAAAAAAAABEAAf/aAAgBAwEBPxBwnb//xAAXEQADAQAAAAAAAAAAAAAAAAAAAREh/9oACAECAQE/EGtawg//xAAcEAEAAgIDAQAAAAAAAAAAAAABABEhMUFRYaH/2gAIAQEAAT8QbfVDQJcqREpDbfENA+vZja0Bb1DeN2sBG2T/2Q==\'); background-size: cover; display: block;"\n    ></span>\n    <img\n        class="gatsby-resp-image-image"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;box-shadow:inset 0px 0px 0px 400px white;"\n        alt="lazy-quiz"\n        title=""\n        src="/static/e86efd29f06a7b0273e0ac02ebaf6393/a66cd/lazy-quiz.jpg"\n        srcset="/static/e86efd29f06a7b0273e0ac02ebaf6393/4272c/lazy-quiz.jpg 188w,\n/static/e86efd29f06a7b0273e0ac02ebaf6393/1459e/lazy-quiz.jpg 375w,\n/static/e86efd29f06a7b0273e0ac02ebaf6393/a66cd/lazy-quiz.jpg 750w,\n/static/e86efd29f06a7b0273e0ac02ebaf6393/c0626/lazy-quiz.jpg 1125w,\n/static/e86efd29f06a7b0273e0ac02ebaf6393/45751/lazy-quiz.jpg 1500w,\n/static/e86efd29f06a7b0273e0ac02ebaf6393/4b954/lazy-quiz.jpg 2250w,\n/static/e86efd29f06a7b0273e0ac02ebaf6393/a4bbd/lazy-quiz.jpg 4500w"\n        sizes="(max-width: 750px) 100vw, 750px"\n      />\n  </span></p>'}},{node:{frontmatter:{name:"easy-event",shortDescription:" A web application to create events built with  Nodejs, React (both with typescript) and Graphql. ",liveLink:"https://edgardoarriagada.github.io/graphql-react-event-booking-frontend",githubLink:"https://github.com/EdgardoArriagada/graphql-react-event-booking-frontend"},html:'<p><span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; margin-left: auto; margin-right: auto;  max-width: 750px;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 55.55555555555556%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAMCBAX/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//aAAwDAQACEAMQAAABVZymzqsiMf/EABoQAQACAwEAAAAAAAAAAAAAAAECAwAQEjL/2gAIAQEAAQUCrAleR5TT5z//xAAVEQEBAAAAAAAAAAAAAAAAAAAQEf/aAAgBAwEBPwGn/8QAFhEAAwAAAAAAAAAAAAAAAAAAEBIh/9oACAECAQE/AVo//8QAGBAAAgMAAAAAAAAAAAAAAAAAAAEgITH/2gAIAQEABj8C1FNR/8QAGxABAAEFAQAAAAAAAAAAAAAAAQAQESFBUTH/2gAIAQEAAT8hIuJ0xYwuEsPZueTT/9oADAMBAAIAAwAAABBs/wD/xAAWEQEBAQAAAAAAAAAAAAAAAAAAIQH/2gAIAQMBAT8QyUf/xAAXEQADAQAAAAAAAAAAAAAAAAAAASER/9oACAECAQE/EHB6U//EABoQAAMAAwEAAAAAAAAAAAAAAAABESExQXH/2gAIAQEAAT8QUmJGyDe7tctmCq6qE2PeuytaZ//Z\'); background-size: cover; display: block;"\n    ></span>\n    <img\n        class="gatsby-resp-image-image"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;box-shadow:inset 0px 0px 0px 400px white;"\n        alt="easy-event"\n        title=""\n        src="/static/ae3fc5396e414904f7eaca6707900ca2/a66cd/easy-event.jpg"\n        srcset="/static/ae3fc5396e414904f7eaca6707900ca2/4272c/easy-event.jpg 188w,\n/static/ae3fc5396e414904f7eaca6707900ca2/1459e/easy-event.jpg 375w,\n/static/ae3fc5396e414904f7eaca6707900ca2/a66cd/easy-event.jpg 750w,\n/static/ae3fc5396e414904f7eaca6707900ca2/c0626/easy-event.jpg 1125w,\n/static/ae3fc5396e414904f7eaca6707900ca2/45751/easy-event.jpg 1500w,\n/static/ae3fc5396e414904f7eaca6707900ca2/4b954/easy-event.jpg 2250w,\n/static/ae3fc5396e414904f7eaca6707900ca2/a4bbd/easy-event.jpg 4500w"\n        sizes="(max-width: 750px) 100vw, 750px"\n      />\n  </span></p>'}},{node:{frontmatter:{name:"fitness-tracker",shortDescription:" This project helps logged users to track their progress when training. It was built with Angular and Firebase. ",liveLink:"https://ng-fitness-tracker-4f273.firebaseapp.com/",githubLink:"https://github.com/EdgardoArriagada/fitness-tracker"},html:'<p><span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; margin-left: auto; margin-right: auto;  max-width: 750px;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 55.55555555555556%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAUGA//EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAF1ggKpSWD/xAAZEAADAQEBAAAAAAAAAAAAAAAAAgMBExT/2gAIAQEAAQUCJszYJeub6Knep//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABkQAAIDAQAAAAAAAAAAAAAAAAABERIyEP/aAAgBAQAGPwIdlDXIuzZtn//EABsQAAICAwEAAAAAAAAAAAAAAAABESEQMWGR/9oACAEBAAE/IS9ERiFIO2Rva+IbLfuf/9oADAMBAAIAAwAAABBHD//EABYRAAMAAAAAAAAAAAAAAAAAAAABEf/aAAgBAwEBPxCoqP/EABYRAAMAAAAAAAAAAAAAAAAAAAABEf/aAAgBAgEBPxCsrP/EABwQAQEBAAIDAQAAAAAAAAAAAAERAEFhIVGRsf/aAAgBAQABPxCaw9kJOL8706xGPIEfrLqGqs8nHrItN7m//9k=\'); background-size: cover; display: block;"\n    ></span>\n    <img\n        class="gatsby-resp-image-image"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;box-shadow:inset 0px 0px 0px 400px white;"\n        alt="fitness-tracker"\n        title=""\n        src="/static/2440ff3217858d78d68c6974ec91a833/a66cd/fitness-tracker.jpg"\n        srcset="/static/2440ff3217858d78d68c6974ec91a833/4272c/fitness-tracker.jpg 188w,\n/static/2440ff3217858d78d68c6974ec91a833/1459e/fitness-tracker.jpg 375w,\n/static/2440ff3217858d78d68c6974ec91a833/a66cd/fitness-tracker.jpg 750w,\n/static/2440ff3217858d78d68c6974ec91a833/c0626/fitness-tracker.jpg 1125w,\n/static/2440ff3217858d78d68c6974ec91a833/45751/fitness-tracker.jpg 1500w,\n/static/2440ff3217858d78d68c6974ec91a833/4b954/fitness-tracker.jpg 2250w,\n/static/2440ff3217858d78d68c6974ec91a833/a4bbd/fitness-tracker.jpg 4500w"\n        sizes="(max-width: 750px) 100vw, 750px"\n      />\n  </span></p>'}}]}}}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-3dd5511fd410f88e4713.js.map