(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70f675e8"],{"0a58":function(t,e,s){},"104c":function(t,e,s){},1148:function(t,e,s){"use strict";var i=s("a691"),a=s("1d80");t.exports="".repeat||function(t){var e=String(a(this)),s="",n=i(t);if(n<0||n==1/0)throw RangeError("Wrong number of repetitions");for(;n>0;(n>>>=1)&&(e+=e))1&n&&(s+=e);return s}},"159b":function(t,e,s){var i=s("da84"),a=s("fdbc"),n=s("17c2"),o=s("9112");for(var r in a){var c=i[r],l=c&&c.prototype;if(l&&l.forEach!==n)try{o(l,"forEach",n)}catch(f){l.forEach=n}}},"17c2":function(t,e,s){"use strict";var i=s("b727").forEach,a=s("a640"),n=s("ae40"),o=a("forEach"),r=n("forEach");t.exports=o&&r?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},"196c":function(t,e,s){"use strict";s("0a58")},"2e44":function(t,e,s){},"3f76":function(t,e,s){"use strict";s("4c54")},4038:function(t,e,s){"use strict";s("aa54")},"408a":function(t,e,s){var i=s("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=i(t))throw TypeError("Incorrect invocation");return+t}},4160:function(t,e,s){"use strict";var i=s("23e7"),a=s("17c2");i({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})},"4c54":function(t,e,s){},"4de4":function(t,e,s){"use strict";var i=s("23e7"),a=s("b727").filter,n=s("1dde"),o=s("ae40"),r=n("filter"),c=o("filter");i({target:"Array",proto:!0,forced:!r||!c},{filter:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,s){"use strict";s.d(e,"a",(function(){return n}));s("a4d3"),s("4de4"),s("4160"),s("e439"),s("dbb4"),s("b64b"),s("159b");var i=s("ade3");function a(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function n(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?a(Object(s),!0).forEach((function(e){Object(i["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}},"55a4":function(t,e,s){"use strict";s("f9e7")},5911:function(t,e,s){},"6ab7":function(t,e,s){"use strict";s.r(e);var i,a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"detail"}},[s("detail-nav-bar",{ref:"nav",staticClass:"detail-nav",on:{titleClick:t.titleClick}}),s("scroll",{ref:"scroll",staticClass:"content",attrs:{"probe-type":3},on:{scroll:t.contentScroll}},[s("detail-swiper",{attrs:{"top-images":t.topImages}}),s("detail-base-info",{attrs:{goods:t.goods}}),s("detail-shop-info",{attrs:{shop:t.shop}}),s("detail-goods-info",{attrs:{"detail-info":t.detailInfo},on:{imageLoad:t.imageLoad}}),s("detail-param-info",{ref:"params",attrs:{"param-info":t.paramInfo}}),s("detail-comment-info",{ref:"comment",attrs:{"comment-info":t.commentInfo}}),s("goods-list",{ref:"recommend",attrs:{goods:t.recommends}})],1),s("detail-bottom-bar",{on:{addCart:t.addToCart}}),s("back-top",{directives:[{name:"show",rawName:"v-show",value:t.isShowBackTop,expression:"isShowBackTop"}],nativeOn:{click:function(e){return t.backClick(e)}}})],1)},n=[],o=(s("a9e3"),s("5530")),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"detailNavBar"}},[i("nav-bar",[i("div",{staticClass:"back",attrs:{slot:"left"},on:{click:t.backClick},slot:"left"},[i("img",{attrs:{src:s("7a74"),alt:""}})]),i("div",{staticClass:"title",attrs:{slot:"center"},slot:"center"},t._l(t.titles,(function(e,s){return i("div",{key:s,staticClass:"title-item",class:{active:t.currentIndex===s},on:{click:function(e){return t.titleClick(s)}}},[t._v(t._s(e))])})),0)])],1)},c=[],l=s("a7ac"),f={name:"DetailNavBar",components:{NavBar:l["a"]},data:function(){return{titles:["商品","参数","评论","推荐"],currentIndex:0}},methods:{backClick:function(){this.$router.back()},titleClick:function(t){this.currentIndex=t,this.$emit("titleClick",t)}}},d=f,u=(s("3f76"),s("2877")),m=Object(u["a"])(d,r,c,!1,null,"283880c2",null),h=m.exports,p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("swiper",{staticClass:"detail-swiper"},t._l(t.topImages,(function(t,e){return s("swiper-item",{key:e},[s("img",{attrs:{src:t,alt:""}})])})),1)},v=[],b=s("ade3"),g=s("dc2c"),_=(i={components:{SwiperItem:g["b"]},name:"DetailSwiper"},Object(b["a"])(i,"components",{Swiper:g["a"],SwiperItem:g["b"]}),Object(b["a"])(i,"props",{topImages:{type:Array,default:function(){return[]}}}),i),C=_,I=(s("55a4"),Object(u["a"])(C,p,v,!1,null,"326be988",null)),w=I.exports,y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.goods).length?s("div",{staticClass:"base-info"},[s("div",{staticClass:"info-title"},[t._v(t._s(t.goods.title))]),s("div",{staticClass:"info-price"},[s("span",{staticClass:"n-price"},[t._v(t._s(t.goods.newPrice))]),s("span",{staticClass:"o-price"},[t._v(t._s(t.goods.oldPrice))]),t.goods.discount?s("span",{staticClass:"discount"},[t._v(t._s(t.goods.discount))]):t._e()]),s("div",{staticClass:"info-other"},[s("span",[t._v(t._s(t.goods.columns[0]))]),s("span",[t._v(t._s(t.goods.columns[1]))]),s("span",[t._v(t._s(t.goods.services[t.goods.services.length-1].name))])]),s("div",{staticClass:"info-service"},t._l(t.goods.services.length-1,(function(e){return s("span",{key:e,staticClass:"info-service-item"},[t.goods.services[e-1].icon?s("img",{attrs:{src:t.goods.services[e-1].icon,alt:""}}):t._e(),s("span",[t._v(t._s(t.goods.services[e-1].name))])])})),0)]):t._e()},O=[],k={name:"DetailBaseInfo",props:{goods:{type:Object,default:function(){return{}}}}},j=k,x=(s("4038"),Object(u["a"])(j,y,O,!1,null,"5c5e8b95",null)),$=x.exports,E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"shop-info"},[s("div",{staticClass:"shop-top"},[s("img",{attrs:{src:t.shop.logo,alt:""}}),s("span",{staticClass:"title"},[t._v(t._s(t.shop.name))])]),s("div",{staticClass:"shop-middle"},[s("div",{staticClass:"shop-middle-item shop-middle-left"},[s("div",{staticClass:"info-sells"},[s("div",{staticClass:"sells-count"},[t._v(t._s(t._f("sellCountFilter")(t.shop.sells)))]),s("div",{staticClass:"sells-text"},[t._v("总销量")])]),s("div",{staticClass:"info-goods"},[s("div",{staticClass:"goods-count"},[t._v(t._s(t.shop.goodsCount))]),s("div",{staticClass:"goods-text"},[t._v("全部宝贝")])])]),s("div",{staticClass:"shop-middle-item shop-middle-right"},[s("table",t._l(t.shop.score,(function(e,i){return s("tr",{key:i},[s("td",[t._v(t._s(e.name))]),s("td",{staticClass:"score",class:{"score-better":e.isBetter}},[t._v(t._s(e.score))]),s("td",{staticClass:"better",class:{"better-more":e.isBetter}},[s("span",[t._v(t._s(e.isBetter?"高":"低"))])])])})),0)])]),t._m(0)])},D=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"shop-bottom"},[s("div",{staticClass:"enter-shop"},[t._v("进店逛逛")])])}],T=(s("b680"),{name:"DetailShopInfo",props:{shop:{type:Object,default:function(){return{}}}},filters:{sellCountFilter:function(t){return t<1e4?t:(t/1e4).toFixed(1)+"万"}}}),P=T,S=(s("196c"),Object(u["a"])(P,E,D,!1,null,"6fe273a4",null)),B=S.exports,L=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.detailInfo).length?s("div",{staticClass:"goods-info"},[s("div",{staticClass:"info-desc clear-fix"},[s("div",{staticClass:"start"}),s("div",{staticClass:"desc"},[t._v(t._s(t.detailInfo.desc))]),s("div",{staticClass:"end"})]),s("div",{staticClass:"info-key"},[t._v(t._s(t.detailInfo.detailImage[0].key))]),s("div",{staticClass:"info-list"},t._l(t.detailInfo.detailImage[0].list,(function(e,i){return s("img",{key:i,attrs:{src:e,alt:""},on:{load:t.imgLoad}})})),0)]):t._e()},N=[],Y={name:"DetailGoodsInfo",props:{detailInfo:{type:Object,default:function(){return{}}}},data:function(){return{counter:0,imageLength:0}},methods:{imgLoad:function(){++this.counter===this.imageLength&&this.$emit("imageLoad")}},watch:{detailInfo:function(){this.imageLength=this.detailInfo.detailImage[0].list.length}}},F=Y,A=(s("e4a1"),Object(u["a"])(F,L,N,!1,null,"b0f35100",null)),G=A.exports,M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.paramInfo).length?s("div",{staticClass:"param-info"},[t._l(t.paramInfo.sizes,(function(e,i){return s("table",{key:i,staticClass:"info-size"},t._l(e,(function(e,i){return s("tr",{key:i},t._l(e,(function(e,i){return s("td",{key:i},[t._v(t._s(e))])})),0)})),0)})),s("table",{staticClass:"info-param"},t._l(t.paramInfo.infos,(function(e,i){return s("tr",{key:i},[s("td",{staticClass:"info-param-key"},[t._v(t._s(e.key))]),s("td",{staticClass:"param-value"},[t._v(t._s(e.value))])])})),0),0!==t.paramInfo.image.length?s("div",{staticClass:"info-img"},[s("img",{attrs:{src:t.paramInfo.image,alt:""}})]):t._e()],2):t._e()},z=[],R={name:"DetailParamInfo",props:{paramInfo:{type:Object,default:function(){return{}}}}},J=R,U=(s("9840"),Object(u["a"])(J,M,z,!1,null,"0ca82004",null)),V=U.exports,W=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.commentInfo).length?s("div",{staticClass:"comment-info"},[t._m(0),s("div",{staticClass:"info-user"},[s("img",{attrs:{src:t.commentInfo.user.avatar,alt:""}}),s("span",[t._v(t._s(t.commentInfo.user.uname))])]),s("div",{staticClass:"info-detail"},[s("p",[t._v(t._s(t.commentInfo.content))]),s("div",{staticClass:"info-other"},[s("span",{staticClass:"date"},[t._v(t._s(t._f("showDate")(t.commentInfo.created)))]),s("span",[t._v(t._s(t.commentInfo.style))])]),s("div",{staticClass:"info-imgs"},t._l(t.commentInfo.images,(function(t,e){return s("img",{key:e,attrs:{src:t,alt:""}})})),0)])]):t._e()},X=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"info-header"},[s("div",{staticClass:"header-title"},[t._v("用户评价")]),s("div",{staticClass:"header-more"},[t._v(" 更多 "),s("i",{staticClass:"arrow-right"})])])}],q=s("90b9"),H={name:"DetailCommentInfo",props:{commentInfo:{type:Object,default:function(){return{}}}},filters:{showDate:function(t){var e=new Date(1e3*t);return Object(q["b"])(e,"yyyy-MM-dd")}}},K=H,Q=(s("b2cd"),Object(u["a"])(K,W,X,!1,null,"26fd5243",null)),Z=Q.exports,tt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bottom-bar"},[t._m(0),s("div",{staticClass:"bar-item bar-right"},[s("div",{staticClass:"cart",on:{click:t.addToCart}},[t._v("加入购物车")]),s("div",{staticClass:"buy"},[t._v("购买")])])])},et=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bar-item bar-left"},[s("div",[s("i",{staticClass:"icon service"}),s("span",{staticClass:"text"},[t._v("客服")])]),s("div",[s("i",{staticClass:"icon shop"}),s("span",{staticClass:"text"},[t._v("店铺")])]),s("div",[s("i",{staticClass:"icon select"}),s("span",{staticClass:"text"},[t._v("收藏")])])])}],st={name:"DetailBottomBar",methods:{addToCart:function(){this.$emit("addCart")}}},it=st,at=(s("6de3"),Object(u["a"])(it,tt,et,!1,null,"77c97ef4",null)),nt=at.exports,ot=s("5d17"),rt=s("6d71");s("b0c0");function ct(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var lt=s("1bab");function ft(t){return Object(lt["a"])({url:"/detail",params:{iid:t}})}function dt(){return Object(lt["a"])({url:"/recommend"})}var ut=function t(e,s,i){ct(this,t),this.title=e.title,this.desc=e.desc,this.newPrice=e.price,this.oldPrice=e.oldPrice,this.discount=e.discountDesc,this.columns=s,this.services=i,this.realPrice=e.lowNowPrice},mt=function t(e){ct(this,t),this.logo=e.shopLogo,this.name=e.name,this.fans=e.cFans,this.sells=e.cSells,this.score=e.score,this.goodsCount=e.cGoods},ht=function t(e,s){ct(this,t),this.image=e.images?e.images[0]:"",this.infos=e.set,this.sizes=s.tables},pt=s("eecb"),vt=s("2f62"),bt={name:"Detail",components:{DetailNavBar:h,DetailSwiper:w,DetailBaseInfo:$,DetailShopInfo:B,DetailGoodsInfo:G,DetailParamInfo:V,DetailCommentInfo:Z,DetailBottomBar:nt,GoodsList:rt["a"],Scroll:ot["a"]},mixins:[pt["b"],pt["a"]],data:function(){return{iid:"",topImages:[],goods:{},shop:{},detailInfo:{},paramInfo:{},commentInfo:{},recommends:[],themeTopYs:[],currentIndex:0}},created:function(){var t=this;this.iid=this.$route.params.iid,ft(this.iid).then((function(e){var s=e.result;t.topImages=s.itemInfo.topImages,t.goods=new ut(s.itemInfo,s.columns,s.shopInfo.services),t.shop=new mt(s.shopInfo),t.detailInfo=s.detailInfo,t.paramInfo=new ht(s.itemParams.info,s.itemParams.rule),0!==s.rate.cRate&&(t.commentInfo=s.rate.list[0])})),dt().then((function(e){t.recommends=e.data.list}))},mounted:function(){},destroyed:function(){this.$bus.$off("itemImageLoad",this.itemImgListener)},methods:Object(o["a"])(Object(o["a"])({},Object(vt["b"])(["addCart"])),{},{imageLoad:function(){this.$refs.scroll.refresh(),this.themeTopYs=[],this.themeTopYs.push(0),this.themeTopYs.push(this.$refs.params.$el.offsetTop),this.themeTopYs.push(this.$refs.comment.$el.offsetTop),this.themeTopYs.push(this.$refs.recommend.$el.offsetTop),this.themeTopYs.push(Number.MAX_VALUE)},titleClick:function(t){this.$refs.scroll.scrollTo(0,-this.themeTopYs[t],200)},contentScroll:function(t){for(var e=-t.y,s=this.themeTopYs.length,i=0;i<s-1;i++)this.currentIndex!==i&&e>=this.themeTopYs[i]&&e<this.themeTopYs[i+1]&&(this.currentIndex=i,this.$refs.nav.currentIndex=this.currentIndex);this.listenShowBackTop(t)},addToCart:function(){var t=this,e={};e.image=this.topImages[0],e.title=this.goods.title,e.desc=this.goods.desc,e.price=this.goods.realPrice,e.iid=this.iid,this.addCart(e).then((function(e){t.$toast.show(e)}))}})},gt=bt,_t=(s("e321"),Object(u["a"])(gt,a,n,!1,null,"2d81b4e2",null));e["default"]=_t.exports},"6de3":function(t,e,s){"use strict";s("dad7")},"7a74":function(t,e,s){t.exports=s.p+"img/back.26df9036.svg"},9840:function(t,e,s){"use strict";s("104c")},aa54:function(t,e,s){},b2cd:function(t,e,s){"use strict";s("f050")},b64b:function(t,e,s){var i=s("23e7"),a=s("7b0b"),n=s("df75"),o=s("d039"),r=o((function(){n(1)}));i({target:"Object",stat:!0,forced:r},{keys:function(t){return n(a(t))}})},b680:function(t,e,s){"use strict";var i=s("23e7"),a=s("a691"),n=s("408a"),o=s("1148"),r=s("d039"),c=1..toFixed,l=Math.floor,f=function(t,e,s){return 0===e?s:e%2===1?f(t,e-1,s*t):f(t*t,e/2,s)},d=function(t){var e=0,s=t;while(s>=4096)e+=12,s/=4096;while(s>=2)e+=1,s/=2;return e},u=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!r((function(){c.call({})}));i({target:"Number",proto:!0,forced:u},{toFixed:function(t){var e,s,i,r,c=n(this),u=a(t),m=[0,0,0,0,0,0],h="",p="0",v=function(t,e){var s=-1,i=e;while(++s<6)i+=t*m[s],m[s]=i%1e7,i=l(i/1e7)},b=function(t){var e=6,s=0;while(--e>=0)s+=m[e],m[e]=l(s/t),s=s%t*1e7},g=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==m[t]){var s=String(m[t]);e=""===e?s:e+o.call("0",7-s.length)+s}return e};if(u<0||u>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(h="-",c=-c),c>1e-21)if(e=d(c*f(2,69,1))-69,s=e<0?c*f(2,-e,1):c/f(2,e,1),s*=4503599627370496,e=52-e,e>0){v(0,s),i=u;while(i>=7)v(1e7,0),i-=7;v(f(10,i,1),0),i=e-1;while(i>=23)b(1<<23),i-=23;b(1<<i),v(1,1),b(2),p=g()}else v(0,s),v(1<<-e,0),p=g()+o.call("0",u);return u>0?(r=p.length,p=h+(r<=u?"0."+o.call("0",u-r)+p:p.slice(0,r-u)+"."+p.slice(r-u))):p=h+p,p}})},dad7:function(t,e,s){},dbb4:function(t,e,s){var i=s("23e7"),a=s("83ab"),n=s("56ef"),o=s("fc6a"),r=s("06cf"),c=s("8418");i({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(t){var e,s,i=o(t),a=r.f,l=n(i),f={},d=0;while(l.length>d)s=a(i,e=l[d++]),void 0!==s&&c(f,e,s);return f}})},e321:function(t,e,s){"use strict";s("2e44")},e439:function(t,e,s){var i=s("23e7"),a=s("d039"),n=s("fc6a"),o=s("06cf").f,r=s("83ab"),c=a((function(){o(1)})),l=!r||c;i({target:"Object",stat:!0,forced:l,sham:!r},{getOwnPropertyDescriptor:function(t,e){return o(n(t),e)}})},e4a1:function(t,e,s){"use strict";s("5911")},f050:function(t,e,s){},f9e7:function(t,e,s){}}]);
//# sourceMappingURL=chunk-70f675e8.aaf23770.js.map