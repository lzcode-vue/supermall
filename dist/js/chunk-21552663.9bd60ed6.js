(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21552663"],{"0031":function(t,e,r){},"030c":function(t,e,r){"use strict";r("da8a")},"159b":function(t,e,r){var a=r("da84"),n=r("fdbc"),c=r("17c2"),i=r("9112");for(var o in n){var s=a[o],u=s&&s.prototype;if(u&&u.forEach!==c)try{i(u,"forEach",c)}catch(l){u.forEach=c}}},"17c2":function(t,e,r){"use strict";var a=r("b727").forEach,n=r("a640"),c=r("ae40"),i=n("forEach"),o=c("forEach");t.exports=i&&o?[].forEach:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}},1955:function(t,e,r){"use strict";r("d184")},"237e":function(t,e,r){},"39e7":function(t,e,r){"use strict";r("0031")},4160:function(t,e,r){"use strict";var a=r("23e7"),n=r("17c2");a({target:"Array",proto:!0,forced:[].forEach!=n},{forEach:n})},"4de4":function(t,e,r){"use strict";var a=r("23e7"),n=r("b727").filter,c=r("1dde"),i=r("ae40"),o=c("filter"),s=i("filter");a({target:"Array",proto:!0,forced:!o||!s},{filter:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");var a=r("ade3");function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"8c04":function(t,e,r){"use strict";r("e7d7")},"99af":function(t,e,r){"use strict";var a=r("23e7"),n=r("d039"),c=r("e8b5"),i=r("861d"),o=r("7b0b"),s=r("50c4"),u=r("8418"),l=r("65f0"),f=r("1dde"),d=r("b622"),b=r("2d00"),g=d("isConcatSpreadable"),h=9007199254740991,y="Maximum allowed index exceeded",p=b>=51||!n((function(){var t=[];return t[g]=!1,t.concat()[0]!==t})),m=f("concat"),v=function(t){if(!i(t))return!1;var e=t[g];return void 0!==e?!!e:c(t)},C=!p||!m;a({target:"Array",proto:!0,forced:C},{concat:function(t){var e,r,a,n,c,i=o(this),f=l(i,0),d=0;for(e=-1,a=arguments.length;e<a;e++)if(c=-1===e?i:arguments[e],v(c)){if(n=s(c.length),d+n>h)throw TypeError(y);for(r=0;r<n;r++,d++)r in c&&u(f,d,c[r])}else{if(d>=h)throw TypeError(y);u(f,d++,c)}return f.length=d,f}})},"9a37":function(t,e,r){"use strict";r("a780")},"9bd0":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tab-control"},t._l(t.titles,(function(e,a){return r("div",{key:a,staticClass:"tab-control-item",class:{active:t.currentIndex===a},on:{click:function(e){return t.itemClick(a)}}},[r("span",[t._v(t._s(e))])])})),0)},n=[],c={name:"TabControl",props:{titles:{type:Array,default:function(){return[]}}},data:function(){return{currentIndex:0}},methods:{itemClick:function(t){this.currentIndex=t,this.$emit("tabClick",t)}}},i=c,o=(r("030c"),r("2877")),s=Object(o["a"])(i,a,n,!1,null,"478230ec",null);e["a"]=s.exports},a5de:function(t,e,r){"use strict";r("237e")},a780:function(t,e,r){},b64b:function(t,e,r){var a=r("23e7"),n=r("7b0b"),c=r("df75"),i=r("d039"),o=i((function(){c(1)}));a({target:"Object",stat:!0,forced:o},{keys:function(t){return c(n(t))}})},bb51:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"category"}},[r("nav-bar",{staticClass:"nav-bar"},[r("div",{attrs:{slot:"center"},slot:"center"},[t._v("商品分类")])]),r("div",{staticClass:"content"},[r("tab-menu",{attrs:{categories:t.categories},on:{selectItem:t.selectItem}}),r("scroll",{attrs:{id:"tab-content"}},[r("div",[r("tab-content-category",{attrs:{subcategories:t.showSubcategory}}),r("tab-control",{attrs:{titles:["综合","新品","销量"]},on:{tabClick:t.tabClick}}),r("tab-content-detail",{attrs:{"category-detail":t.showCategoryDetail}})],1)])],1)],1)},n=[],c=r("5530"),i=r("a7ac"),o=r("5d17"),s=r("9bd0"),u=r("1bab");function l(){return Object(u["a"])({url:"/category"})}function f(t){return Object(u["a"])({url:"/subcategory",params:{maitKey:t}})}function d(t,e){return Object(u["a"])({url:"/subcategory/detail",params:{miniWallkey:t,type:e}})}var b=r("eecb"),g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("scroll",{attrs:{id:"tab-menu"}},[r("div",{staticClass:"menu-list"},t._l(t.categories,(function(e,a){return r("div",{key:a,staticClass:"menu-list-item",class:{isActive:a===t.currentIndex},on:{click:function(e){return t.itemClick(a)}}},[t._v(" "+t._s(e.title)+" ")])})),0)])},h=[],y={name:"TabMenu",components:{Scroll:o["a"]},data:function(){return{currentIndex:0}},props:{categories:{type:Array,default:function(){return[]}}},methods:{itemClick:function(t){this.currentIndex=t,this.$emit("selectItem",t)}}},p=y,m=(r("8c04"),r("2877")),v=Object(m["a"])(p,g,h,!1,null,null,null),C=v.exports,_=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tab-category"},t._l(t.subcategories.list,(function(e,a){return r("div",{key:a,staticClass:"item"},[r("a",{attrs:{href:e.link}},[r("img",{staticClass:"item-img",attrs:{src:e.image,alt:""}}),r("div",{staticClass:"item-text"},[t._v(t._s(e.title))])])])})),0)},O=[],x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{ref:"gridView",staticClass:"grid-view"},[t._t("default")],2)},w=[],D=(r("99af"),r("a9e3"),{name:"GridView",props:{cols:{type:Number,default:2},hMargin:{type:Number,default:8},vMargin:{type:Number,default:8},itemSpace:{type:Number,default:8},lineSpace:{type:Number,default:8}},mounted:function(){setTimeout(this._autoLayout,20)},updated:function(){this._autoLayout()},methods:{_autoLayout:function(){var t=this.$refs.gridView,e=t.children;t.style.padding="".concat(this.vMargin,"px ").concat(this.hMargin,"px");for(var r=(t.clientWidth-2*this.hMargin-(this.cols-1)*this.itemSpace)/this.cols,a=0;a<e.length;a++){var n=e[a];n.style.width=r+"px",(a+1)%this.cols!==0&&(n.style.marginRight=this.itemSpace+"px"),a>=this.cols&&(n.style.marginTop=this.lineSpace+"px")}}}}),j=D,k=(r("9a37"),Object(m["a"])(j,x,w,!1,null,"58a324f6",null)),E=k.exports,I={name:"TabContentCategory",components:{GridView:E},props:{subcategories:{type:Object,default:function(){return{}}}}},S=I,T=(r("a5de"),Object(m["a"])(S,_,O,!1,null,null,null)),P=T.exports,$=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tab-detail"},t._l(t.categoryDetail,(function(t,e){return r("goods-list-item",{key:e,attrs:{"goods-item":t}})})),1)},M=[],A=r("9977"),N={name:"TabContentDetail",components:{GoodsListItem:A["a"]},props:{categoryDetail:{type:Array,default:function(){return[]}}}},L=N,V=(r("1955"),Object(m["a"])(L,$,M,!1,null,null,null)),G=V.exports,W={name:"Category",components:{NavBar:i["a"],TabMenu:C,TabContentCategory:P,TabControl:s["a"],TabContentDetail:G,Scroll:o["a"]},mixins:[b["c"]],data:function(){return{categories:[],categoryData:{},currentIndex:-1}},created:function(){this._getCategory()},computed:{showSubcategory:function(){return-1===this.currentIndex?{}:this.categoryData[this.currentIndex].subcategories},showCategoryDetail:function(){return-1===this.currentIndex?[]:this.categoryData[this.currentIndex].categoryDetail[this.currentType]}},methods:{_getCategory:function(){var t=this;l().then((function(e){t.categories=e.data.category.list;for(var r=0;r<t.categories.length;r++)t.categoryData[r]={subcategories:{},categoryDetail:{pop:[],new:[],sell:[]}};t._getSubcategories(0)}))},_getSubcategories:function(t){var e=this;this.currentIndex=t;var r=this.categories[t].maitKey;f(r).then((function(r){e.categoryData[t].subcategories=r.data,e.categoryData=Object(c["a"])({},e.categoryData),e._getCategoryDetail("pop"),e._getCategoryDetail("new"),e._getCategoryDetail("sell")}))},_getCategoryDetail:function(t){var e=this,r=this.categories[this.currentIndex].miniWallkey;d(r,t).then((function(r){e.categoryData[e.currentIndex].categoryDetail[t]=r,e.categoryData=Object(c["a"])({},e.categoryData)}))},selectItem:function(t){this._getSubcategories(t)}}},J=W,K=(r("39e7"),Object(m["a"])(J,a,n,!1,null,"5cbb76ec",null));e["default"]=K.exports},d184:function(t,e,r){},da8a:function(t,e,r){},dbb4:function(t,e,r){var a=r("23e7"),n=r("83ab"),c=r("56ef"),i=r("fc6a"),o=r("06cf"),s=r("8418");a({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(t){var e,r,a=i(t),n=o.f,u=c(a),l={},f=0;while(u.length>f)r=n(a,e=u[f++]),void 0!==r&&s(l,e,r);return l}})},e439:function(t,e,r){var a=r("23e7"),n=r("d039"),c=r("fc6a"),i=r("06cf").f,o=r("83ab"),s=n((function(){i(1)})),u=!o||s;a({target:"Object",stat:!0,forced:u,sham:!o},{getOwnPropertyDescriptor:function(t,e){return i(c(t),e)}})},e7d7:function(t,e,r){}}]);
//# sourceMappingURL=chunk-21552663.9bd60ed6.js.map