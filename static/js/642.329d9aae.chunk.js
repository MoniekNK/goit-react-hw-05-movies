"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[642],{642:function(t,e,n){n.r(e),n.d(e,{default:function(){return d}});var r=n(433),u=n(861),a=n(439),c=n(757),i=n.n(c),s=n(791),o=n(663),f=n(184),p=function(t){return(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=e.target.query.value;t.onSubmit(n)},children:[(0,f.jsx)("input",{type:"text",name:"query"}),(0,f.jsx)("button",{type:"submit",children:"Search"})]})},v=n(87),d=function(){var t=(0,s.useState)([]),e=(0,a.Z)(t,2),n=e[0],c=e[1],d=(0,v.lr)(),l=(0,a.Z)(d,2),h=l[0],m=l[1],x=(0,s.useState)(!1),g=(0,a.Z)(x,2),b=g[0],w=g[1],y=h.get("query"),k=function(){var t=(0,u.Z)(i().mark((function t(e){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return w(!0),t.prev=1,t.next=4,(0,o.LI)(e);case 4:n=t.sent,c((0,r.Z)(n)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:return t.prev=11,w(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})));return function(e){return t.apply(this,arguments)}}();return(0,s.useEffect)((function(){c([]),y&&k(y)}),[y]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(p,{onSubmit:function(t){return m({query:t})}}),b&&(0,f.jsx)("div",{children:"Loading..."}),n.length>0?(0,f.jsx)("ul",{children:n.map((function(t){return(0,f.jsx)("li",{children:(0,f.jsx)(v.rU,{to:"".concat(t.id),state:{from:"/movies/?".concat(h)},children:t.title})},t.id)}))}):y&&!b&&(0,f.jsx)("div",{children:"Nothing found. Try again."})]})}},663:function(t,e,n){n.d(e,{Hx:function(){return p},LI:function(){return s},Y5:function(){return o},uV:function(){return f},wr:function(){return i}});var r=n(861),u=n(757),a=n.n(u),c=n(340).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"5b543a7de6534fa02efb137645eb3774",language:"en-US"}}),i=function(){var t=(0,r.Z)(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("trending/movie/day");case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("search/movie",{params:{query:e,page:1,include_adult:!1}});case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("movie/".concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("movie/".concat(e,"/credits"));case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("movie/".concat(e,"/reviews"),{params:{page:1}});case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=642.329d9aae.chunk.js.map