(this.webpackJsonpdeepartgallery=this.webpackJsonpdeepartgallery||[]).push([[0],{4:function(e,a,t){e.exports=t(9)},9:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(3),l=t.n(r),s=t(1);function i(e){var a=Object(n.useState)(!0),t=Object(s.a)(a,2),r=t[0],l=(t[1],Object(n.useState)(!1)),i=Object(s.a)(l,2),m=i[0],o=i[1],u=Object(n.useState)(null),d=Object(s.a)(u,2);d[0],d[1];return Object(n.useEffect)((function(){}),[m]),c.a.createElement("div",{className:r?"imgContainer":"hide"},c.a.createElement("img",{src:e.src,alt:e.descr}),c.a.createElement("div",{className:"actions"},c.a.createElement("span",{className:"details",onClick:function(){return o((function(e){return!e}))}},c.a.createElement("i",{className:"fa fa-info"})," Details"),c.a.createElement("a",{className:"imgDwl",href:e.src,download:!0},c.a.createElement("i",{className:"fa fa-download"})," Download HD"),c.a.createElement("div",{className:m?"showDetails":"hide",id:e.idx},c.a.createElement("span",{className:"imgTitle"},e.descr),c.a.createElement("span",{className:"imgOrg"},"Orignal:"),c.a.createElement("span",{className:"imgStyle"},"Style:"))))}function m(e){return c.a.createElement("div",{className:"imageColumn"},e.imgs.map((function(a,t){return c.a.createElement(i,{key:t,idx:e.idx*t+t,src:"https://ramagg.com/deepartgallery/imgs/".concat(a.src),descr:a.title})})))}var o=function(){var e=Object(n.useState)({imgs:[]}),a=Object(s.a)(e,2),t=a[0],r=a[1];Object(n.useEffect)((function(){fetch("https://ramagg.com/deepartgallery/imgs/").then((function(e){return e.json()})).then((function(e){console.log("Fetching"),r(e)}))}),[]);var l=function(e){for(var a=e,t=a.length,n=[],c=parseInt(t/4),r=0;r<4;r++){var l=a.slice(r*c,(r+1)*c);n.push(l)}return n}(t.imgs);return c.a.createElement("div",{className:"App"},c.a.createElement("header",null,c.a.createElement("h1",null,"DeepArtGallery")),c.a.createElement("div",{className:"artBox"},l.map((function(e,a){return c.a.createElement(m,{key:a,idx:a,imgs:e})}))))};l.a.render(c.a.createElement(o,null),document.getElementById("root"))}},[[4,1,2]]]);
//# sourceMappingURL=main.7c4eab8e.chunk.js.map