(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){e.exports=a(38)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/model.5c4d0925.png"},,,,,,,function(e,t,a){},function(e,t,a){var n={"./cotton-shirt.jpg":31,"./denim-shirt.jpg":32,"./oxford-shirt.jpg":33,"./patterned-shirt.jpg":34};function r(e){var t=l(e);return a(t)}function l(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=l,e.exports=r,r.id=30},function(e,t,a){e.exports=a.p+"static/media/cotton-shirt.8766cb4c.jpg"},function(e,t,a){e.exports=a.p+"static/media/denim-shirt.dde2ed90.jpg"},function(e,t,a){e.exports=a.p+"static/media/oxford-shirt.b62e0b0b.jpg"},function(e,t,a){e.exports=a.p+"static/media/patterned-shirt.66109624.jpg"},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/done-shopping.3a2584cf.png"},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),c=a.n(l);a(19),a(20);var i=function(){return r.a.createElement("header",null,r.a.createElement("a",{href:"/"},r.a.createElement("h1",null,"HOOKMEAPP")),r.a.createElement("nav",null,r.a.createElement("div",{className:"hamburger"},r.a.createElement("div",{className:"line"}),r.a.createElement("div",{className:"line"}),r.a.createElement("div",{className:"line"})),r.a.createElement("ul",{className:"nav-links"},r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"HOME")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://ihdev.netlify.com/#Contact"},"CONTACT US")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"SIGN UP/SIGN IN")))))};a(21);var m=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"LETS HOOK YOU UP WITH OUR LATEST PRODUCTS"),r.a.createElement("img",{src:a(22),alt:"By name of the photogropher"}),r.a.createElement("div",{className:"buttons"},r.a.createElement("a",{href:"/itemspage"},r.a.createElement("button",{id:"shop-now"},"SHOP NOW")),r.a.createElement("a",{href:"https://github.com/IslamHamad95/shopping-website"},r.a.createElement("button",{id:"learn-more"},"LEARN MORE"))))},o=a(13),s=a(1),d=Object(n.createContext)(),u=function(e){var t=Object(n.useState)([{name:"Oxford Shirt ",id:1,price:50,desc:"All sizes Avalabile",image:"oxford-shirt"},{name:"Cotton Shirt",id:2,price:70,desc:"All sizes Avalabile",image:"cotton-shirt"},{name:"Patterned Shirt",id:3,price:30,desc:"All sizes Avalabile",image:"patterned-shirt"},{name:"Denim Shirt",id:4,price:40,desc:"All sizes Avalabile",image:"denim-shirt"},{name:"Oxford Shirt 2 ",id:5,price:50,desc:"All sizes Avalabile",image:"oxford-shirt"},{name:"Cotton Shirt 2",id:6,price:70,desc:"All sizes Avalabile",image:"cotton-shirt"},{name:"Patterned Shirt 2",id:7,price:30,desc:"All sizes Avalabile",image:"patterned-shirt"},{name:"Denim Shirt 2",id:8,price:40,desc:"All sizes Avalabile",image:"denim-shirt"},{name:"Oxford Shirt 3",id:9,price:50,desc:"All sizes Avalabile",image:"oxford-shirt"},{name:"Cotton Shirt 3",id:10,price:70,desc:"All sizes Avalabile",image:"cotton-shirt"},{name:"Patterned Shirt 3",id:11,price:30,desc:"All sizes Avalabile",image:"patterned-shirt"},{name:"Denim Shirt 3",id:12,price:40,desc:"All sizes Avalabile",image:"denim-shirt"}]),a=Object(s.a)(t,1)[0];return r.a.createElement(d.Provider,{value:{clothes:a}},e.children)},E=a(7),p=Object(n.createContext)(),h=function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),l=a[0],c=a[1];return r.a.createElement(p.Provider,{value:{Cart:l,addToCart:function(e,t,a){c([].concat(Object(E.a)(l),[{name:e,price:t,id:a}]))},removeFromCart:function(e){if(!(l.length<1))for(var t=l.length-1;t>=0;t--)if(l[t].name===e){c([].concat(Object(E.a)(l.slice(0,t)),Object(E.a)(l.slice(t+1,l.length))));break}}}},e.children)},b=a(6),f=a.n(b),v=(a(29),function(){var e=Object(n.useContext)(d).clothes,t=Object(n.useContext)(p),l=t.Cart,c=t.addToCart,i=t.removeFromCart,m=Object(n.useState)(!1),o=Object(s.a)(m,2),u=o[0],E=o[1];return Object(n.useEffect)((function(){localStorage.setItem("Cart",JSON.stringify(l))}),[l]),r.a.createElement("div",null,r.a.createElement("div",{style:{display:u&&l.length?"block":"none"},className:"slider"},l.map((function(e){return r.a.createElement("div",{className:"cart-item",key:f()()},r.a.createElement("button",{onClick:function(t){return i(e.name)},id:"remove-from-cart-btn"},"x"),r.a.createElement("h4",{id:"cart-item-name"},e.name),r.a.createElement("p",{id:"cart-item-price"},e.price,"$"),r.a.createElement("br",null))})),r.a.createElement("a",{href:"/check-out"},r.a.createElement("button",{id:"check-out-btn"},"CheckOut"))),r.a.createElement("div",{className:"items-page-container"},r.a.createElement("div",{className:"items"},e.map((function(e){return r.a.createElement("div",{className:"item",key:e.id},r.a.createElement("img",{src:a(30)("./".concat(e.image,".jpg")),alt:e.name}),r.a.createElement("h4",{id:"item-name"},e.name),r.a.createElement("p",{id:"item-price"},e.price,"$"),r.a.createElement("button",{onClick:function(t){return c(e.name,e.price,e.id)},id:"add-to-cart-btn"},"ADD TO CART"))}))),r.a.createElement("i",{id:"cart-icon",onClick:function(e){E(!u)},style:{display:l.length?"block":"none"},className:"fas fa-cart-plus"})))}),g=a(4),O=a(8),C=(a(35),function(){var e=localStorage.getItem("Cart"),t=e?JSON.parse(e):[],a=Object(n.useState)({name:"",email:"",phone:"",address:"",comments:""}),l=Object(s.a)(a,2),c=l[0],i=l[1],m=Object(n.useState)(!1),o=Object(s.a)(m,2),d=o[0],u=o[1],E=Object(n.useState)({creditCardNum:0}),p=Object(s.a)(E,2),h=p[0],b=p[1],v=t.map((function(e){return e.price})).reduce((function(e,t){return e+t})),C=function(e){i(Object(O.a)({},c,Object(g.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",null,r.a.createElement("div",{className:"submit"},r.a.createElement("form",{className:"submit-form"},r.a.createElement("label",null,"Full Name:"),r.a.createElement("input",{id:"full-name",name:"name",onChange:C,value:c.name}),r.a.createElement("label",null,"Email:"),r.a.createElement("input",{id:"email",name:"email",onChange:C,value:c.email}),r.a.createElement("label",null,"Phone Number:"),r.a.createElement("input",{id:"phone",name:"phone",onChange:C,value:c.phone}),r.a.createElement("label",null,"Full Address:"),r.a.createElement("input",{id:"address",name:"address",onChange:C,value:c.address}),r.a.createElement("label",null,"Comments:"),r.a.createElement("textarea",{id:"comments",name:"comments",onChange:C,value:c.comments})),r.a.createElement("div",{className:"cart-items-to-submit"},t.map((function(e){return r.a.createElement("div",{style:{display:"flex-box",width:"100%"},key:f()()},r.a.createElement("p",{style:{float:"left"}},e.name),r.a.createElement("p",{style:{float:"right"}},e.price,"$"),r.a.createElement("br",null))})),r.a.createElement("br",null),r.a.createElement("p",{style:{float:"left"}},"Total"),r.a.createElement("p",{style:{float:"right"}},v,"$"),r.a.createElement("br",null),r.a.createElement("div",{className:"payment-method"},r.a.createElement("input",{type:"radio",id:"cash",name:"method",onClick:function(e){return u(!1)},value:"cash"}),r.a.createElement("label",null,"Cash(will cost additional 10$)"),r.a.createElement("br",null),r.a.createElement("input",{type:"radio",id:"credit-card",onClick:function(e){return u(!0)},name:"method",value:"credit-card"}),r.a.createElement("label",null,"Credit Card")),r.a.createElement("br",null),r.a.createElement("div",{className:"card-info",style:{display:d?"block":"none"}},r.a.createElement("h3",null,"Payment info"),r.a.createElement("input",{type:"radio",id:"visa-card",name:"card",value:"visa-card"}),r.a.createElement("label",null,"Visa Card"),r.a.createElement("br",null),r.a.createElement("input",{type:"radio",id:"master-card",name:"card",value:"master-card"}),r.a.createElement("label",null,"Master Card"),r.a.createElement("br",null),r.a.createElement("label",null,"Credit Card Number:"),r.a.createElement("input",{type:"text",name:"creditCardNum",onChange:function(e){b(Object(O.a)({},h,Object(g.a)({},e.target.name,e.target.value)))},id:"credit-card-number"}),r.a.createElement("br",null),r.a.createElement("label",null,"Expiration Date:")," ",r.a.createElement("br",null),r.a.createElement("input",{type:"date",id:"exp-date"})))),r.a.createElement("a",{href:"/order-placed"},r.a.createElement("button",{id:"place-your-order-btn"},"Place your order")))}),N=(a(36),function(){return r.a.createElement("div",{className:"success-post"},r.a.createElement("div",{className:"thank-you"},r.a.createElement("img",{src:a(37),alt:"done-shopping"}),r.a.createElement("h1",null,"YOUR ORDER HAS BEEN PLACED"),r.a.createElement("h3",null,"THANKS FOR PURCHASING FROM  OUR WEBSITE")))});var A=function(){return r.a.createElement("div",null,r.a.createElement(i,null),r.a.createElement(h,null,r.a.createElement(u,null,r.a.createElement(o.a,null,r.a.createElement(m,{path:"/"}),r.a.createElement(v,{path:"/itemspage"}),r.a.createElement(C,{path:"/check-out"}),r.a.createElement(N,{path:"/order-placed"})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[14,1,2]]]);
//# sourceMappingURL=main.79e4cad4.chunk.js.map