"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[736],{736:function(n,t,e){e.r(t),e.d(t,{default:function(){return v}});var r,a=e(861),c=e(439),u=e(757),i=e.n(u),o=e(791),s=e(689),p=e(502),f=e(168),d=e(444).ZP.li(r||(r=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  padding: 20px;\n  max-width: 240px;\n\n  background-color: #dfdbda;\n  border-radius: 4px;\n  text-align: center;\n\n  & + & {\n    margin-top: 20px;\n  }\n\n  img {\n    margin-bottom: 16px;\n    border-radius: 4px;\n  }\n"]))),l=e(184),v=function(){var n=(0,s.UO)().movieId,t=(0,o.useState)([]),e=(0,c.Z)(t,2),r=e[0],u=e[1];return(0,o.useEffect)((function(){var t=function(){var t=(0,a.Z)(i().mark((function t(){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.xc(n);case 3:e=t.sent,u(e.cast),console.log(e.cast),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();return t(),function(){t()}}),[n]),(0,l.jsx)("div",{children:(0,l.jsx)("ul",{children:r&&r.map((function(n){return(0,l.jsxs)(d,{children:[(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(n.profile_path),alt:""}),(0,l.jsx)("p",{children:n.name}),(0,l.jsxs)("p",{children:["Character: ",n.character]})]},n.id+n.cast_id)}))})})}},502:function(n,t,e){e.d(t,{Hx:function(){return d},Y5:function(){return p},bI:function(){return s},wr:function(){return o},xc:function(){return f}});var r=e(861),a=e(757),c=e.n(a),u=e(243),i="d892969fd580e8f0dbedefcab33e9ce9";u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/all/day?api_key=".concat(i));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=736.68e2ab28.chunk.js.map