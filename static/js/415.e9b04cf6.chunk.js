"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{368:function(n,t,e){var r=e(87),a=e(544),u=e(184);t.Z=function(n){var t=n.movies,e=n.state;return(0,u.jsx)("div",{children:(0,u.jsxs)("ul",{children:[" ",(0,u.jsx)("ul",{children:t.map((function(n){return(0,u.jsx)(a.H,{children:(0,u.jsx)(r.rU,{to:"/movies/".concat(n.id),state:e,children:n.name||n.title})},n.id)}))})]})})}},544:function(n,t,e){e.d(t,{A:function(){return i},H:function(){return s}});var r,a,u=e(168),c=e(444),i=c.ZP.h1(r||(r=(0,u.Z)(["\n  margin-bottom: 20px;\n"]))),s=c.ZP.li(a||(a=(0,u.Z)(["\n  & + & {\n    margin-top: 8px;\n  }\n\n  a:visited {\n    color: #0000ee;\n  }\n"])))},415:function(n,t,e){e.r(t);var r=e(861),a=e(439),u=e(757),c=e.n(u),i=e(791),s=e(689),o=e(368),f=e(544),p=e(502),v=e(184);t.default=function(){var n=(0,i.useState)([]),t=(0,a.Z)(n,2),e=t[0],u=t[1],d=(0,s.TH)();return(0,i.useEffect)((function(){var n=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p.wr();case 2:t=n.sent,u(t);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,v.jsxs)("div",{children:[(0,v.jsx)(f.A,{children:"Trending today"}),(0,v.jsx)(o.Z,{movies:e,state:{from:d}})]})}},502:function(n,t,e){e.d(t,{Hx:function(){return v},Y5:function(){return f},bI:function(){return o},wr:function(){return s},xc:function(){return p}});var r=e(861),a=e(757),u=e.n(a),c=e(243),i="d892969fd580e8f0dbedefcab33e9ce9";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var n=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/all/day?api_key=".concat(i));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=415.e9b04cf6.chunk.js.map