(this["webpackJsonphello-world-part-four"]=this["webpackJsonphello-world-part-four"]||[]).push([[0],{227:function(t,e,n){},246:function(t,e){},248:function(t,e){},251:function(t,e){},255:function(t,e){},256:function(t,e){},283:function(t,e){},285:function(t,e){},299:function(t,e){},301:function(t,e){},316:function(t,e){},333:function(t,e){},335:function(t,e){},353:function(t,e){},354:function(t,e){},424:function(t,e){},426:function(t,e){},432:function(t,e){},444:function(t,e){},447:function(t,e){},452:function(t,e){},537:function(t){t.exports=JSON.parse('[{"inputs":[{"internalType":"string","name":"initMessage","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"oldStr","type":"string"},{"indexed":false,"internalType":"string","name":"newStr","type":"string"}],"name":"UpdatedMessages","type":"event"},{"inputs":[],"name":"message","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"newMessage","type":"string"}],"name":"update","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},538:function(t,e,n){},539:function(t,e,n){"use strict";n.r(e);var r=n(23),s=n.n(r),a=n(208),c=n.n(a),u=(n(227),n(14)),i=n.n(u),o=n(32),p=n(64),d=n(11);n(230).config();var l=n(540).createAlchemyWeb3;console.log(Object({NODE_ENV:"production",PUBLIC_URL:"/SolbiatiAlessandro/smart-contract-UI-example",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ALCHEMY_KEY:"wss://eth-ropsten.alchemyapi.io/v2/fK7smLhG3-R-HPDzuL-qkb94Bu79CNVq"}));var h=l("wss://eth-ropsten.alchemyapi.io/v2/fK7smLhG3-R-HPDzuL-qkb94Bu79CNVq"),f=n(537),b="0xE77328ee4B34f3cd7FaF39dD5dEc3537869e0BB9",m=new h.eth.Contract(f,b),j=function(){var t=Object(o.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.methods.message().call();case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),x=function(){var t=Object(o.a)(i.a.mark((function t(){var e,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.ethereum){t.next=14;break}return t.prev=1,t.next=4,window.ethereum.request({method:"eth_requestAccounts"});case 4:return e=t.sent,n={status:"write message in text-field",address:e[0]},t.abrupt("return",n);case 9:t.prev=9,t.t0=t.catch(1),{status:t.t0.message,address:""};case 12:t.next=15;break;case 14:return t.abrupt("return",{status:"metamask not connected",address:""});case 15:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(){return t.apply(this,arguments)}}(),g=function(){var t=Object(o.a)(i.a.mark((function t(){var e,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.ethereum){t.next=14;break}return t.prev=1,t.next=4,window.ethereum.request({method:"eth_accounts"});case 4:return e=t.sent,n={status:"write message in text-field",address:e[0]},t.abrupt("return",n);case 9:t.prev=9,t.t0=t.catch(1),{status:t.t0.message,address:""};case 12:t.next=15;break;case 14:return t.abrupt("return",{status:"metamask not connected",address:""});case 15:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(){return t.apply(this,arguments)}}(),w=function(){var t=Object(o.a)(i.a.mark((function t(e,n){var r,s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(window.ethereum&&null!==e){t.next=2;break}return t.abrupt("return",{status:"\ud83d\udca1 Connect your MetaMask wallet to update the message on the blockchain."});case 2:if(""!==n.trim()){t.next=4;break}return t.abrupt("return",{status:"\u274c Your message cannot be an empty string."});case 4:return r={to:b,from:e,data:m.methods.update(n).encodeABI()},t.prev=5,t.next=8,window.ethereum.request({method:"eth_sendTransaction",params:[r]});case 8:return s=t.sent,t.abrupt("return",{status:Object(d.jsxs)("span",{children:["\u2705"," ",Object(d.jsx)("a",{target:"_blank",href:"https://ropsten.etherscan.io/tx/".concat(s),children:"https://ropsten.etherscan.io/tx/".concat(s)}),Object(d.jsx)("br",{}),Object(d.jsx)("p",{children:"Waiting for transaction to be mined"})]})});case 12:return t.prev=12,t.t0=t.catch(5),t.abrupt("return",{status:t.t0.message});case 15:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e,n){return t.apply(this,arguments)}}(),O=function(){var t=Object(r.useState)(""),e=Object(p.a)(t,2),n=e[0],s=e[1],a=Object(r.useState)(""),c=Object(p.a)(a,2),u=c[0],l=c[1],h=Object(r.useState)("No connection to the network."),f=Object(p.a)(h,2),O=f[0],v=f[1],y=Object(r.useState)(""),k=Object(p.a)(y,2),C=k[0],S=k[1];Object(r.useEffect)(Object(o.a)(i.a.mark((function t(){var e,n,r,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j();case 2:return e=t.sent,v(e),m.events.UpdatedMessages({},(function(t,e){t?l(t.message):(v(e.returnValues[1]),S(""),l("Message was updated"))})),t.next=7,g();case 7:n=t.sent,r=n.address,a=n.status,s(r),l(a);case 12:case"end":return t.stop()}}),t)}))),[]);var T=function(){var t=Object(o.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x();case 2:e=t.sent,console.log(e),l(e.status),s(e.address);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),E=function(){var t=Object(o.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(n,C);case 2:e=t.sent,l(e.status);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(d.jsxs)("div",{id:"container",children:[Object(d.jsx)("h2",{children:"What is this?"}),Object(d.jsxs)("p",{children:["This is a UI to edit the smart contract ",b," "]}),Object(d.jsxs)("p",{children:['Click on "connect wallet" to link your metamask (your ethereum account with which you sign transaction and you pay gas fees). The UI will call the smart contracts methods for you, for instance ',Object(d.jsx)("i",{children:"HelloWorldContract.update(message)"})," using the web3.js APIs"]}),Object(d.jsx)("a",{href:"https://ropsten.etherscan.io/address/0xE77328ee4B34f3cd7FaF39dD5dEc3537869e0BB9#code",children:"View smart contract on etherscan at https://ropsten.etherscan.io/address/0xE77328ee4B34f3cd7FaF39dD5dEc3537869e0BB9#code"}),Object(d.jsx)("button",{id:"walletButton",onClick:T,children:n.length>0?"Connected: "+String(n).substring(0,6)+"..."+String(n).substring(38):Object(d.jsx)("span",{children:"Connect Wallet"})}),Object(d.jsxs)("h2",{style:{paddingTop:"50px"},children:["Content of ",Object(d.jsx)("i",{children:"string public message"})," on the smart contract:"]}),Object(d.jsx)("p",{children:O}),Object(d.jsx)("h2",{style:{paddingTop:"18px"},children:"New Message:"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"text",placeholder:"Update the message in your smart contract.",onChange:function(t){return S(t.target.value)},value:C}),Object(d.jsx)("p",{id:"status",children:u}),Object(d.jsxs)("button",{id:"publish",onClick:E,children:["Call ",Object(d.jsx)("i",{children:"function update(string memory newMessage)"})," on the smart contract"]})]})]})};n(538);var v=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(O,{})})},y=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,544)).then((function(e){var n=e.getCLS,r=e.getFID,s=e.getFCP,a=e.getLCP,c=e.getTTFB;n(t),r(t),s(t),a(t),c(t)}))};c.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root")),y()}},[[539,1,2]]]);
//# sourceMappingURL=main.b8a701e9.chunk.js.map