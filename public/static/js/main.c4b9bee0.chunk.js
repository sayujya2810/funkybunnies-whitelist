(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{1031:function(e,t){},1036:function(e,t){},1038:function(e,t){},1062:function(e,t){},1065:function(e,t){},1070:function(e,t){},1090:function(e,t){},1092:function(e,t){},1122:function(e,t){},1124:function(e,t){},1187:function(e,t){},1189:function(e,t){},1217:function(e,t){},1218:function(e,t){},1224:function(e,t){},1243:function(e,t){},1287:function(e,t){},1288:function(e,t){},1389:function(e,t,n){"use strict";n.r(t);var a=n(4),i=n.n(a),r=n(116),s=n.n(r),o=(n(608),n(163)),u=n(57),p=n(5),l=n.n(p),c=n(100),d=n.n(c),y=(n(984),n(985),n(986),n(987),n(8)),m=function(e){window.onbeforeunload=function(e){r()};var t=e.userAddressInner,n=null;function a(e){if(e)return e.slice(0,5)+"..."+e.slice(38)}function i(){return(i=Object(o.a)(l.a.mark((function e(){var i,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=d.a.User.current()){e.next=22;break}return e.prev=2,e.next=5,d.a.authenticate({signingMessage:"Authenticate"});case 5:return i=e.sent,e.next=8,d.a.enableWeb3();case 8:n=i.get("ethAddress"),t(n),console.log(n),r=a(n),document.getElementById("addressBtn").textContent=r,console.log("here3"),document.getElementById("btn-login").style.display="none",e.next=22;break;case 19:e.prev=19,e.t0=e.catch(2),console.log(e.t0);case 22:case"end":return e.stop()}}),e,null,[[2,19]])})))).apply(this,arguments)}function r(){return s.apply(this,arguments)}function s(){return(s=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.User.logOut();case 2:console.log("logged out"),document.getElementById("addressBtn").textContent="Connect Wallet",n="",document.getElementById("btn-login").style.opacity="1";case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return d.a.start({serverUrl:"https://hwlskb8xmzpc.usemoralis.com:2053/server",appId:"J1TfOOvnJPYjp8pfo7WUrR2BrIiMU89zbdZUBqwu"}),Object(y.jsx)("div",{children:Object(y.jsx)("button",{id:"addressBtn",onClick:function(e){!function(){i.apply(this,arguments)}(),console.log("logged in")},style:{backgroundColor:"white",color:"black",fontSize:"13px",padding:".2rem",marginRight:"1rem",marginLeft:"1rem",marginTop:"1rem",position:"relative",width:"8rem"},children:"Connect Wallet"})})},b=function(e){var t=e.userAddress,n=Object(a.useState)(!1),i=Object(u.a)(n,2);i[0],i[1];return Object(y.jsx)("nav",{className:"main-nav",children:Object(y.jsxs)("ul",{className:"navLinks",children:[Object(y.jsx)("li",{children:Object(y.jsx)("a",{id:"homeLink",href:"https://funkybunnies.xyz/",target:"_blank",className:"cursor hover-underline-animation",children:Object(y.jsx)("img",{style:{left:"0px",borderRadius:"50%",height:"50px"},src:"./video/fb_gif.gif"})})}),Object(y.jsx)("li",{children:Object(y.jsx)(m,{userAddressInner:t})})]})})},f=n(1406),j=n(270),x=function(){return Object(y.jsxs)("div",{id:"social",style:{color:"white",backgroundColor:"black",display:"flex",flexDirection:"column",height:"max-content",alignItems:"center",justifyContent:"center",padding:"3rem",fontSize:"15px"},children:[Object(y.jsx)("h1",{style:{marginBottom:"1rem"},children:"FOLLOW"}),Object(y.jsx)("p",{children:Object(y.jsx)("a",{style:{color:"white",textDecoration:"none"},href:"mailto:contact@funkybunnies.xyz",children:"contact@funkybunnies.xyz"})}),Object(y.jsxs)("div",{style:{margin:"3px 0px"},children:[Object(y.jsx)("a",{href:"https://twitter.com/funkybunnies3d",target:"_blank",children:Object(y.jsx)(j.c,{style:{backgroundColor:"none",borderRadius:"50%",border:"2px solid",color:"rgb(98, 0, 255)",fontSize:"30px",padding:"3px",margin:"5px"},className:"icons-f"})}),Object(y.jsx)("a",{href:"https://www.instagram.com/funky_bunnies_3d",target:"_blank",children:Object(y.jsx)(j.b,{style:{backgroundColor:"none",borderRadius:"50%",border:"2px solid",color:"rgb(98, 0, 255)",fontSize:"30px",padding:"3px",margin:"5px"},className:"icons-f"})}),Object(y.jsx)("a",{href:"https://discord.gg/BbXNX5wW69",target:"_blank",children:Object(y.jsx)(j.a,{style:{backgroundColor:"none",borderRadius:"50%",border:"2px solid",color:"rgb(98, 0, 255)",fontSize:"30px",padding:"3px",margin:"5px"},className:"icons-f"})})]}),Object(y.jsx)("p",{style:{marginBottom:"10px"},children:" \xa9 2022 FUNKY BUNNIES"})]})},h=(n(989),function(){var e=Object(a.useRef)(null),t=Object(a.useRef)(null),n=Object(a.useRef)(!0),i=Object(a.useRef)(!1),r=Object(a.useRef)(window.innerWidth/2),s=Object(a.useRef)(window.innerHeight/2),o=Object(a.useRef)(0),u=Object(a.useRef)(0),p=Object(a.useRef)(null);Object(a.useEffect)((function(){return document.addEventListener("mousedown",d),document.addEventListener("mouseup",m),document.addEventListener("mousemove",j),document.addEventListener("mouseenter",b),document.addEventListener("mouseleave",f),x(),function(){document.removeEventListener("mousedown",d),document.removeEventListener("mouseup",m),document.removeEventListener("mousemove",j),document.removeEventListener("mouseenter",b),document.removeEventListener("mouseleave",f),cancelAnimationFrame(p.current)}}),[]);var l=function(){n.current?(e.current.style.opacity=1,t.current.style.opacity=1):(e.current.style.opacity=0,t.current.style.opacity=0)},c=function(){i.current?(e.current.style.transform="translate(-50%, -50%) scale(0.75)",t.current.style.transform="translate(-50%, -50%) scale(1.5)"):(e.current.style.transform="translate(-50%, -50%) scale(1)",t.current.style.transform="translate(-50%, -50%) scale(1)")},d=function(){i.current=!0,c()},m=function(){i.current=!1,c()},b=function(){n.current=!0,l()},f=function(){n.current=!1,l()},j=function(t){n.current=!0,l(),r.current=t.pageX,s.current=t.pageY,e.current.style.top=s.current+"px",e.current.style.left=r.current+"px"},x=function e(){o.current+=(r.current-o.current)/18,u.current+=(s.current-u.current)/18,t.current.style.top=u.current+"px",t.current.style.left=o.current+"px",p.current=requestAnimationFrame(e)};return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("div",{ref:t,className:"cursor-dot-outline"}),Object(y.jsx)("div",{ref:e,className:"cursor-dot"})]})}),g=n(598),v=n(596),O=n.n(v),T=n(271),w=n.n(T);n(266),n(1047),n(1048);var M=function(){var e=Object(a.useState)(1),t=Object(u.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)(""),s=Object(u.a)(r,2),p=(s[0],s[1],Object(a.useState)("")),c=Object(u.a)(p,2),m=c[0],j=c[1],v=Object(a.useState)(!1),T=Object(u.a)(v,2),M=T[0],k=T[1],C=function(){return k(!1)},N=Object(a.useState)({address:"",email:""}),A=Object(u.a)(N,2),E=(A[0],A[1],Object(a.useState)([{address:"",email:""}])),I=Object(u.a)(E,2),_=I[0],S=I[1];function B(){return(B=Object(o.a)(l.a.mark((function e(){var t,a,i,r,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=!1,a=!0,i=[],r=m,""===m?alert("Wallet is not connected"):a=!1,_.map((function(e){i.push(e.address.toLowerCase())})),s=r.toLowerCase(),i.map((function(e){if(e.toLowerCase()===s)try{t=!0;var a=[];i.map((function(e){a.push(w()(e))})),console.log("leafNodes",a);var o=new O.a(a,w.a,{sortPairs:!0}),u=o.getRoot();console.log("Whitelist Merkle Tree\n",o.toString()),console.log("Root Hash: ",u);var p=w()(r),l=o.getHexProof(p);console.log("hexProof: ",l),console.log("\n"),console.log(o.verify(l,p,u));var c={contractAddress:"0x02FC9Bf7D97200DFe2Dc789047B6fa5320Ae9bBF",functionName:"mint",abi:[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"uint256",name:"_mintAmount",type:"uint256"},{internalType:"address",name:"_receiver",type:"address"}],name:"airdrop",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"cet",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"cost",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"dormant",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"hiddenMetadataUri",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"maxMintAmountPerTx",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"maxSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"merkleRoot",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_mintAmount",type:"uint256"},{internalType:"bytes32[]",name:"_merkleProof",type:"bytes32[]"}],name:"mint",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"paused",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_mintAmount",type:"uint256"}],name:"pmint",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"revealed",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_cost",type:"uint256"}],name:"setCost",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_hiddenMetadataUri",type:"string"}],name:"setHiddenMetadataUri",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_maxMintAmountPerTx",type:"uint256"}],name:"setMaxMintAmountPerTx",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bool",name:"_state",type:"bool"}],name:"setPaused",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bool",name:"_state",type:"bool"}],name:"setRevealed",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_uriPrefix",type:"string"}],name:"setUriPrefix",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_uriSuffix",type:"string"}],name:"setUriSuffix",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_address",type:"address"}],name:"setcet",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bool",name:"_state",type:"bool"}],name:"setdormancy",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_maxSupply",type:"uint256"}],name:"setmaxSupply",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"_merkleroot",type:"bytes32"}],name:"setmerkleroot",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"uriPrefix",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"uriSuffix",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_owner",type:"address"}],name:"walletOfOwner",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"whitelistClaimed",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"}],params:{_mintAmount:1*n,_merkleProof:l},msgValue:d.a.Units.ETH(.022*n)};return d.a.executeFunction(c),0}catch(y){alert("Something went wrong! Check you wallet for transaction Details or Check your wallet balance or Already Claimed")}})),t||a){e.next=11;break}return alert("You are not Whitelisted, Please contact Support."),e.abrupt("return",0);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){fetch("/read").then((function(e){if(e.ok)return e.json()})).then((function(e){S(e)}))})),Object(a.useEffect)((function(){return k(!0),0}),[]),Object(y.jsxs)("div",{id:"App",children:[Object(y.jsx)(b,{userAddress:j}),Object(y.jsxs)("div",{className:"innerContainer",children:[Object(y.jsxs)("div",{className:"text-content",children:[Object(y.jsx)("h1",{id:"heading",children:"WELCOME TO THE FUNKY BUNNIES CLUB!"}),Object(y.jsx)("p",{id:"about",children:"FUNKY BUNNIES are a new kind of art and a fancy playground from Asia-based artist studio AllenxRoot. Built around an initial drop of 3333 unique NFTs on the Ethereum Blockchain, the project unites cuteness with that punky appearance and the community sets them up as the next generation\u2019s trends, with utility which is deemed to become a WEB3 Innovation Brand."}),Object(y.jsxs)("div",{style:{marginTop:"1rem"},children:[Object(y.jsx)("button",{className:"hover-effect",id:"mint-btn",style:{padding:"1.25rem 2.25rem",color:"white",backgroundColor:"rgb(98, 0, 255)",margin:"4px",marginLeft:"20px"},required:!0,onClick:function(){return B.apply(this,arguments)},children:"MINT"}),Object(y.jsxs)("select",{id:"mint-limit",onChange:function(e){return function(e){i(e.target.value)}(e)},children:[Object(y.jsx)("option",{value:1,className:"mintOption",children:"1"}),Object(y.jsx)("option",{value:2,className:"mintOption",children:"2"}),Object(y.jsx)("option",{value:3,className:"mintOption",children:"3"}),Object(y.jsx)("option",{value:4,className:"mintOption",children:"4"})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("p",{style:{backgroundColor:"white",paddingLeft:"5px",borderRadius:"2px",fontWeight:500,marginTop:"0.5rem"},children:"Note: Make sure you have funds greater than or equal to given price + gas price."}),Object(y.jsx)("p",{style:{backgroundColor:"white",paddingLeft:"5px",borderRadius:"2px",fontWeight:500,marginTop:"0.5rem"},children:"You cannot claim whitelist twice, so be carefull with the amount you are minting at once (i.e max. 4 NFTs in one time) "})]}),Object(y.jsx)("div",{children:Object(y.jsxs)("p",{style:{color:"white",paddingTop:"1rem"},children:["0.022 ETH x ",n," = ",Object(y.jsx)("b",{children:"".concat((.022*n).toFixed(3)," ETH + Gas")})]})})]})]}),Object(y.jsx)("div",{className:"image-section",children:Object(y.jsx)("video",{loop:!0,muted:!0,playsInline:!0,autoPlay:!0,children:Object(y.jsx)("source",{src:"./video/preview.mp4",type:"video/mp4"})})})]}),Object(y.jsx)(x,{}),Object(y.jsx)(f.a,{open:M,onClose:C,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(y.jsx)("div",{style:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:Object(y.jsxs)("div",{style:{backgroundColor:"rgb(98, 0, 255)",padding:"3rem",display:"flex",justifyContent:"space-evenly",flexDirection:"column"},children:[Object(y.jsx)("div",{style:{display:"flex",justifyContent:"flex-end",width:"100%",paddingBottom:"1rem"},children:Object(y.jsx)(g.a,{color:"white",onClick:C})}),Object(y.jsx)("p",{style:{color:"white",fontWeight:500,marginTop:"1.5rem"},children:"People who will mint 4 NFTs are eligible for a reward"})]})})}),Object(y.jsx)(h,{})]})};s.a.render(Object(y.jsx)(i.a.StrictMode,{children:Object(y.jsx)(M,{})}),document.getElementById("root"))},608:function(e,t,n){},872:function(e,t){},919:function(e,t){},984:function(e,t,n){},985:function(e,t,n){},986:function(e,t,n){},989:function(e,t,n){}},[[1389,1,2]]]);
//# sourceMappingURL=main.c4b9bee0.chunk.js.map