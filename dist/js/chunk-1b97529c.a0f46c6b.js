(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b97529c"],{"030c":function(t,e,r){"use strict";r("da8a")},"064a":function(t,e,r){"use strict";r("663a")},1388:function(t,e,r){},2062:function(t,e,r){},"3ca3":function(t,e,r){"use strict";var n=r("6547").charAt,o=r("69f3"),i=r("7dd0"),a="String Iterator",s=o.set,c=o.getterFor(a);i(String,"String",(function(t){s(this,{type:a,string:String(t),index:0})}),(function(){var t,e=c(this),r=e.string,o=e.index;return o>=r.length?{value:void 0,done:!0}:(t=n(r,o),e.index+=t.length,{value:t,done:!1})}))},"4df4":function(t,e,r){"use strict";var n=r("0366"),o=r("7b0b"),i=r("9bdd"),a=r("e95a"),s=r("50c4"),c=r("8418"),l=r("35a1");t.exports=function(t){var e,r,u,d,f,m,p=o(t),b="function"==typeof this?this:Array,h=arguments.length,v=h>1?arguments[1]:void 0,g=void 0!==v,y=l(p),w=0;if(g&&(v=n(v,h>2?arguments[2]:void 0,2)),void 0==y||b==Array&&a(y))for(e=s(p.length),r=new b(e);e>w;w++)m=g?v(p[w],w):p[w],c(r,w,m);else for(d=y.call(p),f=d.next,r=new b;!(u=f.call(d)).done;w++)m=g?i(d,v,[u.value,w],!0):u.value,c(r,w,m);return r.length=w,r}},"5cbe":function(t,e,r){t.exports=r.p+"img/recommend_bg.794b6628.jpg"},"663a":function(t,e,r){},"80f4":function(t,e,r){"use strict";r("1388")},"9bdd":function(t,e,r){var n=r("825a"),o=r("2a62");t.exports=function(t,e,r,i){try{return i?e(n(r)[0],r[1]):e(r)}catch(a){throw o(t),a}}},a630:function(t,e,r){var n=r("23e7"),o=r("4df4"),i=r("1c7e"),a=!i((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:a},{from:o})},b1da:function(t,e,r){"use strict";r("2062")},b3d7:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"home"}},[r("nav-bar",{staticClass:"home-nav"},[r("div",{attrs:{slot:"center"},slot:"center"},[t._v("购物街")])]),r("tab-control",{directives:[{name:"show",rawName:"v-show",value:t.isTabFixed,expression:"isTabFixed"}],ref:"tabControl1",staticClass:"tab-control",attrs:{titles:["流行","新款","精选"]},on:{tabClick:t.tabClick}}),r("scroll",{ref:"scroll",staticClass:"content",attrs:{"probe-type":3,"pull-up-load":!0},on:{scroll:t.contentScroll,pullingUp:t.loadMore}},[r("home-swiper",{attrs:{banners:t.banners},on:{swiperImageLoad:t.swiperImageLoad}}),r("recommend-view",{attrs:{recommends:t.recommends}}),r("feature-view"),r("tab-control",{ref:"tabControl2",attrs:{titles:["流行","新款","精选"]},on:{tabClick:t.tabClick}}),r("goods-list",{attrs:{goods:t.showGoods}})],1),r("back-top",{directives:[{name:"show",rawName:"v-show",value:t.isShowBackTop,expression:"isShowBackTop"}],nativeOn:{click:function(e){return t.backClick(e)}}})],1)},o=[];function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function a(t){if(Array.isArray(t))return i(t)}r("a4d3"),r("e01a"),r("d28b"),r("a630"),r("d3b7"),r("3ca3"),r("ddb0");function s(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}r("fb6a"),r("b0c0"),r("25f0");function c(t,e){if(t){if("string"===typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t){return a(t)||s(t)||c(t)||l()}var d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("swiper",t._l(t.banners,(function(e,n){return r("swiper-item",{key:n},[r("a",{attrs:{href:e.link}},[r("img",{attrs:{src:e.image,alt:""},on:{load:t.imageLoad}})])])})),1)},f=[],m=r("dc2c"),p={name:"HomeSwiper",props:{banners:{type:Array,default:function(){return[]}}},data:function(){return{isLoad:!1}},components:{Swiper:m["a"],SwiperItem:m["b"]},methods:{imageLoad:function(){this.isLoad||(this.$emit("swiperImageLoad"),this.isLoad=!0)}}},b=p,h=r("2877"),v=Object(h["a"])(b,d,f,!1,null,null,null),g=v.exports,y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"recommend"},t._l(t.recommends,(function(e,n){return r("div",{key:n,staticClass:"recommend-item"},[r("a",{attrs:{href:e.link}},[r("img",{attrs:{src:e.image,alt:""}}),r("div",[t._v(t._s(e.title))])])])})),0)},w=[],S={name:"RecommendView",props:{recommends:{type:Array,default:function(){return[]}}}},k=S,C=(r("80f4"),Object(h["a"])(k,y,w,!1,null,null,null)),x=C.exports,T=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"feature"},[n("a",{attrs:{href:"https://act.mogujie.com/zzlx67"}},[n("img",{attrs:{src:r("5cbe"),alt:""}})])])}],$={name:"FeatureView"},A=$,I=(r("064a"),Object(h["a"])(A,T,_,!1,null,null,null)),O=I.exports,j=r("a7ac"),L=r("5d17"),H=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tab-control"},t._l(t.titles,(function(e,n){return r("div",{key:n,staticClass:"tab-control-item",class:{active:t.currentIndex===n},on:{click:function(e){return t.itemClick(n)}}},[r("span",[t._v(t._s(e))])])})),0)},E=[],G={name:"TabControl",props:{titles:{type:Array,default:function(){return[]}}},data:function(){return{currentIndex:0}},methods:{itemClick:function(t){this.currentIndex=t,this.$emit("tabClick",t)}}},F=G,M=(r("030c"),Object(h["a"])(F,H,E,!1,null,"478230ec",null)),B=M.exports,V=r("6d71"),Y=r("1bab");function N(){return Object(Y["a"])({url:"/home/multidata"})}function R(t,e){return Object(Y["a"])({url:"/home/data",params:{type:t,page:e}})}r("90b9");var U=r("eecb"),z={name:"Home",components:{NavBar:j["a"],HomeSwiper:g,RecommendView:x,FeatureView:O,TabControl:B,GoodsList:V["a"],Scroll:L["a"]},mixins:[U["b"],U["a"]],data:function(){return{banners:[],recommends:[],goods:{pop:{page:0,list:[]},new:{page:0,list:[]},sell:{page:0,list:[]}},currentType:"pop",tabOffsetTop:0,isTabFixed:!1,saveY:0}},computed:{showGoods:function(){return this.goods[this.currentType].list}},created:function(){this.getHomeMultidata(),this.getHomeGoods("pop"),this.getHomeGoods("new"),this.getHomeGoods("sell")},mounted:function(){},activated:function(){this.$refs.scroll.scrollTo(0,this.saveY,0),this.$refs.scroll.refresh()},deactivated:function(){this.saveY=this.$refs.scroll.getScrollY(),this.$bus.$off("itemImageLoad",this.itemImgListener)},methods:{tabClick:function(t){switch(t){case 0:this.currentType="pop";break;case 1:this.currentType="new";break;case 2:this.currentType="sell";break}this.$refs.tabControl1.currentIndex=t,this.$refs.tabControl2.currentIndex=t},contentScroll:function(t){this.listenShowBackTop(t),this.isTabFixed=-t.y>this.tabOffsetTop},loadMore:function(){this.getHomeGoods(this.currentType)},swiperImageLoad:function(){this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop},getHomeMultidata:function(){var t=this;N().then((function(e){t.banners=e.data.banner.list,t.recommends=e.data.recommend.list}))},getHomeGoods:function(t){var e=this,r=this.goods[t].page+1;R(t,r).then((function(r){var n;(n=e.goods[t].list).push.apply(n,u(r.data.list)),e.goods[t].page+=1,e.$refs.scroll.finishPullUp()}))}}},J=z,P=(r("b1da"),Object(h["a"])(J,n,o,!1,null,"6c317456",null));e["default"]=P.exports},d28b:function(t,e,r){var n=r("746f");n("iterator")},da8a:function(t,e,r){},ddb0:function(t,e,r){var n=r("da84"),o=r("fdbc"),i=r("e260"),a=r("9112"),s=r("b622"),c=s("iterator"),l=s("toStringTag"),u=i.values;for(var d in o){var f=n[d],m=f&&f.prototype;if(m){if(m[c]!==u)try{a(m,c,u)}catch(b){m[c]=u}if(m[l]||a(m,l,d),o[d])for(var p in i)if(m[p]!==i[p])try{a(m,p,i[p])}catch(b){m[p]=i[p]}}}},e01a:function(t,e,r){"use strict";var n=r("23e7"),o=r("83ab"),i=r("da84"),a=r("5135"),s=r("861d"),c=r("9bf2").f,l=r("e893"),u=i.Symbol;if(o&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new u(t):void 0===t?u():u(t);return""===t&&(d[e]=!0),e};l(f,u);var m=f.prototype=u.prototype;m.constructor=f;var p=m.toString,b="Symbol(test)"==String(u("test")),h=/^Symbol\((.*)\)[^)]+$/;c(m,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=p.call(t);if(a(d,t))return"";var r=b?e.slice(7,-1):e.replace(h,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:f})}},fb6a:function(t,e,r){"use strict";var n=r("23e7"),o=r("861d"),i=r("e8b5"),a=r("23cb"),s=r("50c4"),c=r("fc6a"),l=r("8418"),u=r("b622"),d=r("1dde"),f=r("ae40"),m=d("slice"),p=f("slice",{ACCESSORS:!0,0:0,1:2}),b=u("species"),h=[].slice,v=Math.max;n({target:"Array",proto:!0,forced:!m||!p},{slice:function(t,e){var r,n,u,d=c(this),f=s(d.length),m=a(t,f),p=a(void 0===e?f:e,f);if(i(d)&&(r=d.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?o(r)&&(r=r[b],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return h.call(d,m,p);for(n=new(void 0===r?Array:r)(v(p-m,0)),u=0;m<p;m++,u++)m in d&&l(n,u,d[m]);return n.length=u,n}})}}]);
//# sourceMappingURL=chunk-1b97529c.a0f46c6b.js.map