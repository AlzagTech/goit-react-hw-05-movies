"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[499],{499:function(n,e,r){r.r(e),r.d(e,{default:function(){return l}});var t,a=r(861),u=r(439),c=r(757),i=r.n(c),o=r(791),s=r(689),p=r(502),f=r(168),d=r(444).ZP.li(t||(t=(0,f.Z)(["\n  padding: 20px;\n\n  background-color: #efc8c8;\n\n  border-radius: 4px;\n\n  & + & {\n    margin-top: 20px;\n  }\n\n  p + p {\n    margin-top: 8px;\n  }\n"]))),v=r(184),l=function(){var n=(0,s.UO)().movieId,e=(0,o.useState)([]),r=(0,u.Z)(e,2),t=r[0],c=r[1];return(0,o.useEffect)((function(){var e=function(){var e=(0,a.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.Hx(n);case 3:r=e.sent,c(r.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]),(0,v.jsx)("div",{children:(0,v.jsx)("ul",{children:0===t.length?(0,v.jsx)("p",{children:"We don't have any reviews for this movie."}):t.map((function(n){return(0,v.jsxs)(d,{children:[(0,v.jsxs)("p",{children:["Author: ",n.author]}),(0,v.jsxs)("p",{children:[" ",n.content]})]},n.id)}))})})}},502:function(n,e,r){r.d(e,{Hx:function(){return d},Y5:function(){return p},bI:function(){return s},wr:function(){return o},xc:function(){return f}});var t=r(861),a=r(757),u=r.n(a),c=r(243),i="d892969fd580e8f0dbedefcab33e9ce9";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var n=(0,t.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/all/day?api_key=".concat(i));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,t.Z)(u().mark((function n(e){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(u().mark((function n(e){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(u().mark((function n(e){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(u().mark((function n(e){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=499.41470299.chunk.js.map