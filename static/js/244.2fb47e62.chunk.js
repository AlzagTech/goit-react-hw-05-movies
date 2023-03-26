"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[244],{368:function(n,t,e){var r=e(87),a=e(544),u=e(184);t.Z=function(n){var t=n.movies,e=n.state;return(0,u.jsx)("div",{children:(0,u.jsxs)("ul",{children:[" ",(0,u.jsx)("ul",{children:t.map((function(n){return(0,u.jsx)(a.H,{children:(0,u.jsx)(r.rU,{to:"/movies/".concat(n.id),state:e,children:n.name||n.title})},n.id)}))})]})})}},544:function(n,t,e){e.d(t,{A:function(){return o},H:function(){return i}});var r,a,u=e(168),c=e(444),o=c.ZP.h1(r||(r=(0,u.Z)(["\n  margin-bottom: 20px;\n"]))),i=c.ZP.li(a||(a=(0,u.Z)(["\n  & + & {\n    margin-top: 8px;\n  }\n\n  a:visited {\n    color: #0000ee;\n  }\n"])))},244:function(n,t,e){e.r(t),e.d(t,{default:function(){return w}});var r,a,u,c=e(861),o=e(439),i=e(757),s=e.n(i),p=e(791),f=e(87),d=e(689),l=e(502),v=e(168),x=e(444),b=x.ZP.form(r||(r=(0,v.Z)(["\n  margin-bottom: 16px;\n"]))),h=x.ZP.input(a||(a=(0,v.Z)(["\n  padding: 8px;\n\n  border: none;\n  outline: none;\n  border-radius: 4px 0 0 4px;\n\n  background-color: #dad7d7;\n\n  font-size: 16px;\n"]))),g=x.ZP.button(u||(u=(0,v.Z)(["\n  padding: 8px 16px;\n\n  border: none;\n  border-radius: 0 4px 4px 0;\n\n  background-color: #bbb5b5;\n  cursor: pointer;\n\n  font-size: 16px;\n\n  &:hover {\n    background-color: #beaaaa;\n  }\n"]))),m=e(184),Z=function(n){var t=n.onSubmit,e=(0,p.useState)(""),r=(0,o.Z)(e,2),a=r[0],u=r[1];return(0,m.jsxs)(b,{onSubmit:function(n){n.preventDefault(),a&&t(a),u("")},children:[(0,m.jsx)(h,{type:"text",value:a,onChange:function(n){u(n.target.value.trim().toLowerCase())},autoFocus:!0}),(0,m.jsx)(g,{type:"submit",children:"Search"})]})},k=e(368),w=function(){var n=(0,p.useState)(null),t=(0,o.Z)(n,2),e=t[0],r=t[1],a=(0,f.lr)(),u=(0,o.Z)(a,2),i=u[0],v=u[1],x=i.get("query"),b=(0,d.TH)();(0,p.useEffect)((function(){if(x){var n=function(){var n=(0,c.Z)(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,l.bI(x);case 3:t=n.sent,r(t.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}}),[x]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(Z,{onSubmit:function(n){n&&v({query:n})}}),e&&(0,m.jsx)(k.Z,{movies:e,state:{from:b}})]})}},502:function(n,t,e){e.d(t,{Hx:function(){return d},Y5:function(){return p},bI:function(){return s},wr:function(){return i},xc:function(){return f}});var r=e(861),a=e(757),u=e.n(a),c=e(243),o="d892969fd580e8f0dbedefcab33e9ce9";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i=function(){var n=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/all/day?api_key=".concat(o));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(o,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=244.2fb47e62.chunk.js.map