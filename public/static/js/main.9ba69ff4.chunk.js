(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{1003:function(e,t){},1005:function(e,t){},1034:function(e,t){},1036:function(e,t){},1121:function(e,t){},1122:function(e,t){},1225:function(e,t,n){"use strict";n.r(t);var r=n(4),c=n.n(r),i=n(106),o=n.n(i),s=(n(528),n(153)),a=n(55),l=n(5),u=n.n(l),d=n(92),j=n.n(d),b=(n(901),n(902),n(903),n(904),n(8)),m=function(e){window.onbeforeunload=function(e){i()};var t=e.userAddressInner,n=null;function r(e){if(e)return e.slice(0,5)+"..."+e.slice(38)}function c(){return(c=Object(s.a)(u.a.mark((function e(){var c,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=j.a.User.current()){e.next=22;break}return e.prev=2,e.next=5,j.a.authenticate({signingMessage:"Authenticate"});case 5:return c=e.sent,e.next=8,j.a.enableWeb3();case 8:n=c.get("ethAddress"),t(n),console.log(n),i=r(n),document.getElementById("addressBtn").textContent=i,console.log("here3"),document.getElementById("btn-login").style.display="none",e.next=22;break;case 19:e.prev=19,e.t0=e.catch(2),console.log(e.t0);case 22:case"end":return e.stop()}}),e,null,[[2,19]])})))).apply(this,arguments)}function i(){return o.apply(this,arguments)}function o(){return(o=Object(s.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.User.logOut();case 2:console.log("logged out"),document.getElementById("addressBtn").textContent="Connect Wallet",n="",document.getElementById("btn-login").style.opacity="1";case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return j.a.start({serverUrl:"https://hwlskb8xmzpc.usemoralis.com:2053/server",appId:"J1TfOOvnJPYjp8pfo7WUrR2BrIiMU89zbdZUBqwu"}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{id:"addressBtn",onClick:function(e){!function(){c.apply(this,arguments)}(),console.log("logged in")},style:{backgroundColor:"white",color:"black",fontSize:"13px",padding:".2rem",marginRight:"1rem",marginLeft:"1rem",marginTop:"1rem",position:"relative",width:"8rem"},children:"Connect Wallet"})})},f=function(e){var t=e.userAddress,n=Object(r.useState)(!1),c=Object(a.a)(n,2);c[0],c[1];return Object(b.jsx)("nav",{className:"main-nav",children:Object(b.jsxs)("ul",{className:"navLinks",children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{id:"homeLink",href:"https://funkybunnies.xyz/",target:"_blank",className:"cursor hover-underline-animation",children:Object(b.jsx)("img",{style:{left:"0px",borderRadius:"50%",height:"50px"},src:"./video/fb_gif.gif"})})}),Object(b.jsx)("li",{children:Object(b.jsx)(m,{userAddressInner:t})})]})})},p=n(1242),h=n(249),x=function(){return Object(b.jsxs)("div",{id:"social",style:{color:"white",backgroundColor:"black",display:"flex",flexDirection:"column",height:"max-content",alignItems:"center",justifyContent:"center",padding:"3rem",fontSize:"15px"},children:[Object(b.jsx)("h1",{style:{marginBottom:"1rem"},children:"FOLLOW"}),Object(b.jsx)("p",{children:Object(b.jsx)("a",{style:{color:"white",textDecoration:"none"},href:"mailto:contact@funkybunnies.xyz",children:"contact@funkybunnies.xyz"})}),Object(b.jsxs)("div",{style:{margin:"3px 0px"},children:[Object(b.jsx)("a",{href:"https://twitter.com/funkybunnies3d",target:"_blank",children:Object(b.jsx)(h.c,{style:{backgroundColor:"none",borderRadius:"50%",border:"2px solid",color:"rgb(98, 0, 255)",fontSize:"30px",padding:"3px",margin:"5px"},className:"icons-f"})}),Object(b.jsx)("a",{href:"https://www.instagram.com/funky_bunnies_3d",target:"_blank",children:Object(b.jsx)(h.b,{style:{backgroundColor:"none",borderRadius:"50%",border:"2px solid",color:"rgb(98, 0, 255)",fontSize:"30px",padding:"3px",margin:"5px"},className:"icons-f"})}),Object(b.jsx)("a",{href:"https://discord.gg/BbXNX5wW69",target:"_blank",children:Object(b.jsx)(h.a,{style:{backgroundColor:"none",borderRadius:"50%",border:"2px solid",color:"rgb(98, 0, 255)",fontSize:"30px",padding:"3px",margin:"5px"},className:"icons-f"})})]}),Object(b.jsx)("p",{style:{marginBottom:"10px"},children:" \xa9 2022 FUNKY BUNNIES"})]})},O=(n(906),function(){var e=Object(r.useRef)(null),t=Object(r.useRef)(null),n=Object(r.useRef)(!0),c=Object(r.useRef)(!1),i=Object(r.useRef)(window.innerWidth/2),o=Object(r.useRef)(window.innerHeight/2),s=Object(r.useRef)(0),a=Object(r.useRef)(0),l=Object(r.useRef)(null);Object(r.useEffect)((function(){return document.addEventListener("mousedown",j),document.addEventListener("mouseup",m),document.addEventListener("mousemove",h),document.addEventListener("mouseenter",f),document.addEventListener("mouseleave",p),x(),function(){document.removeEventListener("mousedown",j),document.removeEventListener("mouseup",m),document.removeEventListener("mousemove",h),document.removeEventListener("mouseenter",f),document.removeEventListener("mouseleave",p),cancelAnimationFrame(l.current)}}),[]);var u=function(){n.current?(e.current.style.opacity=1,t.current.style.opacity=1):(e.current.style.opacity=0,t.current.style.opacity=0)},d=function(){c.current?(e.current.style.transform="translate(-50%, -50%) scale(0.75)",t.current.style.transform="translate(-50%, -50%) scale(1.5)"):(e.current.style.transform="translate(-50%, -50%) scale(1)",t.current.style.transform="translate(-50%, -50%) scale(1)")},j=function(){c.current=!0,d()},m=function(){c.current=!1,d()},f=function(){n.current=!0,u()},p=function(){n.current=!1,u()},h=function(t){n.current=!0,u(),i.current=t.pageX,o.current=t.pageY,e.current.style.top=o.current+"px",e.current.style.left=i.current+"px"},x=function e(){s.current+=(i.current-s.current)/18,a.current+=(o.current-a.current)/18,t.current.style.top=a.current+"px",t.current.style.left=s.current+"px",l.current=requestAnimationFrame(e)};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{ref:t,className:"cursor-dot-outline"}),Object(b.jsx)("div",{ref:e,className:"cursor-dot"})]})}),g=n(518);n(516),n(250),n(244),n(960),n(961);var y=function(){var e=Object(r.useState)(1),t=Object(a.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)(""),o=Object(a.a)(i,2),s=(o[0],o[1],Object(r.useState)("")),l=Object(a.a)(s,2),u=(l[0],l[1]),d=Object(r.useState)(!1),j=Object(a.a)(d,2),m=j[0],h=j[1],y=function(){return h(!1)},v=Object(r.useState)({address:"",email:""}),w=Object(a.a)(v,2),k=(w[0],w[1],Object(r.useState)([{address:"",email:""}])),N=Object(a.a)(k,2),E=(N[0],N[1]);return Object(r.useEffect)((function(){fetch("/read").then((function(e){if(e.ok)return e.json()})).then((function(e){E(e)}))})),Object(r.useEffect)((function(){return h(!0),0}),[]),Object(b.jsxs)("div",{id:"App",children:[Object(b.jsx)(f,{userAddress:u}),Object(b.jsxs)("div",{className:"innerContainer",children:[Object(b.jsxs)("div",{className:"text-content",children:[Object(b.jsx)("h1",{id:"heading",children:"WELCOME TO THE FUNKY BUNNIES CLUB!"}),Object(b.jsx)("p",{id:"about",children:"FUNKY BUNNIES are a new kind of art and a fancy playground from Asia-based artist studio AllenxRoot. Built around an initial drop of 3333 unique NFTs on the Ethereum Blockchain, the project unites cuteness with that punky appearance and the community sets them up as the next generation\u2019s trends, with utility which is deemed to become a WEB3 Innovation Brand."}),Object(b.jsxs)("div",{style:{marginTop:"1rem"},children:[Object(b.jsxs)("select",{id:"mint-limit",onChange:function(e){return function(e){c(e.target.value)}(e)},children:[Object(b.jsx)("option",{value:1,className:"mintOption ",children:"1"}),Object(b.jsx)("option",{value:2,className:"mintOption",children:"2"}),Object(b.jsx)("option",{value:3,className:"mintOption",children:"3"}),Object(b.jsx)("option",{value:4,className:"mintOption",children:"4"}),Object(b.jsx)("option",{value:5,className:"mintOption",children:"5"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{style:{backgroundColor:"white",paddingLeft:"5px",borderRadius:"2px",fontWeight:500,marginTop:"0.5rem"},children:"Note: Make sure you have funds greater than or equal to given price + gas price."}),Object(b.jsx)("p",{style:{backgroundColor:"white",paddingLeft:"5px",borderRadius:"2px",fontWeight:500,marginTop:"0.5rem"},children:"You cannot claim whitelist twice, so be carefull with the amount you are minting at once (i.e max. 5 NFTs in one time) "})]}),Object(b.jsx)("div",{children:Object(b.jsxs)("p",{style:{color:"white",paddingTop:"1rem"},children:["0.022 ETH x ",n," = ",Object(b.jsx)("b",{children:"".concat((.022*n).toFixed(3)," ETH + Gas")})]})})]})]}),Object(b.jsx)("div",{className:"image-section",children:Object(b.jsx)("video",{loop:!0,muted:!0,playsInline:!0,autoPlay:!0,children:Object(b.jsx)("source",{src:"./video/preview.mp4",type:"video/mp4"})})})]}),Object(b.jsx)(x,{}),Object(b.jsx)(p.a,{open:m,onClose:y,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(b.jsx)("div",{style:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:Object(b.jsxs)("div",{style:{backgroundColor:"rgb(98, 0, 255)",padding:"3rem",display:"flex",justifyContent:"space-evenly",flexDirection:"column"},children:[Object(b.jsx)("div",{style:{display:"flex",justifyContent:"flex-end",width:"100%",paddingBottom:"1rem"},children:Object(b.jsx)(g.a,{color:"white",onClick:y})}),Object(b.jsx)("p",{style:{color:"white",fontWeight:500,marginTop:"1.5rem"},children:"People who will mint 5 NFTs are eligible for a reward"})]})})}),Object(b.jsx)(O,{})]})};o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(y,{})}),document.getElementById("root"))},528:function(e,t,n){},790:function(e,t){},836:function(e,t){},901:function(e,t,n){},902:function(e,t,n){},903:function(e,t,n){},906:function(e,t,n){},947:function(e,t){},950:function(e,t){},952:function(e,t){},975:function(e,t){},978:function(e,t){},982:function(e,t){}},[[1225,1,2]]]);
//# sourceMappingURL=main.9ba69ff4.chunk.js.map