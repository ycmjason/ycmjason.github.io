(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/kaL":function(t,n,e){"use strict";var r=e("VKCx");e.n(r).a},F3eR:function(t,n,e){"use strict";e.r(n);e("ma9I"),e("TeQF"),e("fbCW"),e("2B1R"),e("E9XD"),e("07d7"),e("rB9j"),e("YGK4"),e("PKPk"),e("EnZy"),e("3bBZ");var r=e("ODXe"),o=(e("rePB"),e("KQm4")),u=(e("VTBJ"),e("Wgwc")),a=e.n(u),i=(e("69XP"),{metaInfo:{title:"Articles"},computed:{posts:function(){return this.$page.posts.edges.map((function(t){return t.node}))},yearMonths:function(){return Object(o.a)(new Set(this.posts.map((function(t){var n=t.publishedTimestamp;return a()(n).format("YYYY.MMMM")})))).map((function(t){return t.split(".")})).reduce((function(t,n){var e=Object(r.a)(n,2),u=e[0],a=e[1],i=t.find((function(t){return t[0]===u}));return i?(i[1].push(a),t):[].concat(Object(o.a)(t),[[u,[a]]])}),[])}},methods:{timestampToDisplay:function(t){var n=a()(t);return"".concat(n.fromNow()," | ").concat(n.format("DD MMMM YYYY"))},getPostsByYearMonth:function(t,n){return this.posts.filter((function(e){var r=e.publishedTimestamp;return a()(r).format("YYYY.MMMM")==="".concat(t,".").concat(n)}))}}}),s=(e("/kaL"),e("KHd+")),c=null,f=Object(s.a)(i,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("Layout",t._l(t.yearMonths,(function(n){var r=n[0],o=n[1];return e("div",{key:r},[e("h2",[t._v(t._s(r))]),e("ul",t._l(o,(function(n){return e("li",{key:n},[e("h3",[t._v(t._s(n))]),e("ul",t._l(t.getPostsByYearMonth(r,n),(function(n){var r=n.id,o=n.title,u=n.tags,a=n.publishedTimestamp,i=n.path;return e("li",{key:r},[e("g-link",{attrs:{to:i}},[t._v(t._s(o))]),e("br"),t._v("\n            "+t._s(u.map((function(t){return"#"+t})).join(" "))+"\n            "),e("br"),t._v("\n            "+t._s(t.timestampToDisplay(a))+"\n          ")],1)})),0)])})),0)])})),0)}),[],!1,null,null,null);"function"==typeof c&&c(f);n.default=f.exports},VKCx:function(t,n,e){}}]);