(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(3),a=n.n(s),i=(n(12),n(4)),o=n(5),h=n(7),l=n(6),d=n(0),b=function(e){var t=e.name,n=e.email,r=e.id;return Object(d.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(d.jsx)("img",{src:"https://robohash.org/".concat(r,"?size=200x200"),alt:"robots"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:t}),Object(d.jsx)("p",{children:n})]})]})},j=function(e){var t=e.robots;return Object(d.jsx)("div",{children:t.map((function(e,t){return Object(d.jsx)(b,{id:e.id,name:e.name,email:e.email},t)}))})},u=function(e){e.searchfield;var t=e.searchChange;return Object(d.jsx)("div",{className:"pa2",children:Object(d.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},f=(n(14),function(e){return Object(d.jsx)("div",{style:{overflowY:"scroll",border:"hidden",height:"500px"},children:e.children})}),g=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(d.jsxs)("div",{className:"tc",children:[Object(d.jsx)("h1",{children:"Robot Friends"}),Object(d.jsx)(u,{searchChange:this.onSearchChange}),Object(d.jsx)(f,{children:Object(d.jsx)(j,{robots:r})})]}):Object(d.jsx)("h1",{className:"tc pa5",children:"Loading..."})}}]),n}(r.Component),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};n(15);a.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),O()}},[[16,1,2]]]);
//# sourceMappingURL=main.8f871cf7.chunk.js.map