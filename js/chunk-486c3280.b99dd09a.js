(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-486c3280"],{"014b":function(t,e,r){"use strict";var n=r("e53d"),i=r("07e3"),o=r("8e60"),a=r("63b6"),s=r("9138"),c=r("ebfd").KEY,l=r("294c"),f=r("dbdb"),u=r("45f2"),d=r("62a0"),p=r("5168"),b=r("ccb9"),h=r("6718"),v=r("47ee"),m=r("9003"),g=r("e4ae"),y=r("f772"),w=r("36c3"),S=r("1bc3"),_=r("aebd"),C=r("a159"),x=r("0395"),O=r("bf0b"),E=r("d9f6"),j=r("c3a1"),k=O.f,P=E.f,$=x.f,N=n.Symbol,R=n.JSON,F=R&&R.stringify,D="prototype",J=p("_hidden"),I=p("toPrimitive"),q={}.propertyIsEnumerable,A=f("symbol-registry"),K=f("symbols"),W=f("op-symbols"),B=Object[D],T="function"==typeof N,M=n.QObject,Y=!M||!M[D]||!M[D].findChild,z=o&&l(function(){return 7!=C(P({},"a",{get:function(){return P(this,"a",{value:7}).a}})).a})?function(t,e,r){var n=k(B,e);n&&delete B[e],P(t,e,r),n&&t!==B&&P(B,e,n)}:P,G=function(t){var e=K[t]=C(N[D]);return e._k=t,e},Q=T&&"symbol"==typeof N.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof N},H=function(t,e,r){return t===B&&H(W,e,r),g(t),e=S(e,!0),g(r),i(K,e)?(r.enumerable?(i(t,J)&&t[J][e]&&(t[J][e]=!1),r=C(r,{enumerable:_(0,!1)})):(i(t,J)||P(t,J,_(1,{})),t[J][e]=!0),z(t,e,r)):P(t,e,r)},L=function(t,e){g(t);var r,n=v(e=w(e)),i=0,o=n.length;while(o>i)H(t,r=n[i++],e[r]);return t},U=function(t,e){return void 0===e?C(t):L(C(t),e)},V=function(t){var e=q.call(this,t=S(t,!0));return!(this===B&&i(K,t)&&!i(W,t))&&(!(e||!i(this,t)||!i(K,t)||i(this,J)&&this[J][t])||e)},X=function(t,e){if(t=w(t),e=S(e,!0),t!==B||!i(K,e)||i(W,e)){var r=k(t,e);return!r||!i(K,e)||i(t,J)&&t[J][e]||(r.enumerable=!0),r}},Z=function(t){var e,r=$(w(t)),n=[],o=0;while(r.length>o)i(K,e=r[o++])||e==J||e==c||n.push(e);return n},tt=function(t){var e,r=t===B,n=$(r?W:w(t)),o=[],a=0;while(n.length>a)!i(K,e=n[a++])||r&&!i(B,e)||o.push(K[e]);return o};T||(N=function(){if(this instanceof N)throw TypeError("Symbol is not a constructor!");var t=d(arguments.length>0?arguments[0]:void 0),e=function(r){this===B&&e.call(W,r),i(this,J)&&i(this[J],t)&&(this[J][t]=!1),z(this,t,_(1,r))};return o&&Y&&z(B,t,{configurable:!0,set:e}),G(t)},s(N[D],"toString",function(){return this._k}),O.f=X,E.f=H,r("6abf").f=x.f=Z,r("355d").f=V,r("9aa9").f=tt,o&&!r("b8e3")&&s(B,"propertyIsEnumerable",V,!0),b.f=function(t){return G(p(t))}),a(a.G+a.W+a.F*!T,{Symbol:N});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),rt=0;et.length>rt;)p(et[rt++]);for(var nt=j(p.store),it=0;nt.length>it;)h(nt[it++]);a(a.S+a.F*!T,"Symbol",{for:function(t){return i(A,t+="")?A[t]:A[t]=N(t)},keyFor:function(t){if(!Q(t))throw TypeError(t+" is not a symbol!");for(var e in A)if(A[e]===t)return e},useSetter:function(){Y=!0},useSimple:function(){Y=!1}}),a(a.S+a.F*!T,"Object",{create:U,defineProperty:H,defineProperties:L,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:tt}),R&&a(a.S+a.F*(!T||l(function(){var t=N();return"[null]"!=F([t])||"{}"!=F({a:t})||"{}"!=F(Object(t))})),"JSON",{stringify:function(t){var e,r,n=[t],i=1;while(arguments.length>i)n.push(arguments[i++]);if(r=e=n[1],(y(e)||void 0!==t)&&!Q(t))return m(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!Q(e))return e}),n[1]=e,F.apply(R,n)}}),N[D][I]||r("35e8")(N[D],I,N[D].valueOf),u(N,"Symbol"),u(Math,"Math",!0),u(n.JSON,"JSON",!0)},"0395":function(t,e,r){var n=r("36c3"),i=r("6abf").f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return i(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?s(t):i(n(t))}},"1feb":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("background"),r("section",{staticClass:"container-fluid"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 head-padding"}),r("div",{staticClass:"col-12 col-sm-10 offset-sm-1 frame rounded-lg",staticStyle:{"background-color":"rgb(51, 51, 51, 0.6)"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-10 offset-1",staticStyle:{"padding-top":"3%","padding-bottom":"2%",color:"white"}},[r("div",{staticClass:"float-right"},[r("router-link",{staticClass:"btn btn-default btn-lg",staticStyle:{"background-color":"white"},attrs:{to:"./"}},[r("font-awesome-icon",{attrs:{icon:"times"}})],1)],1),t._m(0)])]),t._m(1),t._m(2),t._m(3),r("div",{staticClass:"col-12",staticStyle:{padding:"3%"}})]),r("div",{staticClass:"col-12",staticStyle:{padding:"3%"}}),r("div",{staticClass:"col-12 col-sm-10 offset-sm-1 frame pb-4",staticStyle:{"background-color":"rgb(51, 51, 51, 0.6)"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-10 offset-1",staticStyle:{"padding-top":"3%","padding-bottom":"2%",color:"white"}},[r("div",{staticClass:"float-right"},[r("router-link",{staticClass:"btn btn-default btn-lg",staticStyle:{"background-color":"white"},attrs:{to:"./"}},[r("font-awesome-icon",{attrs:{icon:"times"}})],1)],1),t._m(4)]),t._m(5),r("div",{staticClass:"col-10 offset-1"},[r("b-alert",{attrs:{show:t.errors,variant:"danger"}},[t._v(t._s(t.errors))]),r("p",{staticStyle:{color:"white",margin:"0px auto","white-space":"nowrap"}},[t._v("學號格式:限定字母全大寫。")]),r("p",{staticStyle:{color:"white",margin:"0px auto","white-space":"nowrap"}},[t._v("床位格式:")]),r("p",{staticStyle:{color:"white",margin:"0px auto","white-space":"nowrap"}},[t._v("Example1:")]),r("p",[t._v("A3108-4")]),r("p",{staticStyle:{color:"white",margin:"0px auto","white-space":"nowrap"}},[t._v("Example2:")]),r("p",[t._v("E2102-2")]),r("b-form",{on:{submit:function(e){return e.preventDefault(),t.regist(e)}}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 form-inline d-flex justify-content-center",staticStyle:{padding:"1%"}},[r("b-form-group",{staticStyle:{color:"white"},attrs:{id:"student_id group",label:"學號/臨時卡號｜Student ID/Access Card Number：","label-for":"student_id"}},[r("b-form-input",{attrs:{id:"student_id",maxlength:"40",required:""},model:{value:t.id,callback:function(e){t.id=e},expression:"id"}})],1)],1),r("div",{staticClass:"col-12 form-inline d-flex justify-content-center",staticStyle:{padding:"1%"}},[r("b-form-group",{staticStyle:{color:"white"},attrs:{id:"bed group",label:"床位｜Bed：","label-for":"bed"}},[r("b-form-input",{staticStyle:{margin:"0px"},attrs:{id:"bed",maxlength:"40",required:""},model:{value:t.bed,callback:function(e){t.bed=e},expression:"bed"}})],1)],1),r("div",{staticClass:"col-12 form-inline d-flex justify-content-center",staticStyle:{padding:"1%"}},[r("b-form-group",{staticStyle:{color:"white"},attrs:{id:"password group",label:"密碼 | Password：","label-for":"password"}},[r("b-form-input",{attrs:{id:"password",type:"password",maxlength:"40",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),r("div",{staticClass:"col-12 form-inline d-flex justify-content-center",staticStyle:{padding:"1%"}},[r("b-form-group",{staticStyle:{color:"white"},attrs:{id:"REpassword group",label:"確認密碼 | Confirm Password：","label-for":"REpassword"}},[r("b-form-input",{attrs:{id:"REpassword",type:"password",maxlength:"40",required:""},model:{value:t.REpassword,callback:function(e){t.REpassword=e},expression:"REpassword"}})],1)],1),r("div",{staticClass:"col-12"},[r("b-button",{attrs:{type:"submit",variant:"info"}},[r("p",{staticStyle:{margin:"auto auto"}},[t._v("送出")])])],1)])])],1)])]),r("div",{staticClass:"col-12",staticStyle:{padding:"10%"}})])])],1)},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"float-left"},[r("h1",[t._v("Register - Contract")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-10 offset-1"},[r("hr")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-10 offset-1",staticStyle:{color:"white","text-align":"left"}},[r("p",[t._v("\n            請各位住宿生注意：\n            "),r("br"),t._v("申請網路前請先詳閱以上管理辦法及規定，若不同意請勿申請，以免使用上誤觸規則遭到校規處分。\n            而填寫申請資料時，亦請務必依照申請表格各欄位指示確實填寫，以免因為錯誤資料而延誤您使用網路啟用的時間。\n            (網路卡卡號輸入錯誤，將導致無法使用網路，請務必加以確認！)\n          ")]),r("p",[t._v("\n            申請時若遭遇問題，請至\n            "),r("span",{staticClass:"title",attrs:{id:"egg"}},[t._v("網路管理小組")]),t._v("求助。\n          ")]),r("p",{staticClass:"title"},[t._v("請看完詳細條款再行註冊，註冊後等同您同意遵守本條款約定，請細心閱讀，以免您的權利受損!!")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-12 col-sm-10 offset-sm-1",staticStyle:{height:"70vh"}},[r("iframe",{staticStyle:{"background-color":"white"},attrs:{id:"contract",name:"contract",width:"100%",height:"100%",src:"./#/contract"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"float-left"},[r("h1",[t._v("Register - Application Form")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-10 offset-1"},[r("hr")])}],o=r("cebc"),a=r("2f15"),s=r("7f5f"),c=r("2f62"),l={name:"Register",components:{Background:a["a"]},data:function(){return{id:null,bed:null,password:null,REpassword:null}},methods:{regist:function(){var t=this,e=/[\W]/g,r=this.id,n=this.bed,i=this.password;e.test(r)?this.$store.dispatch(s["d"],"格式錯誤:只能英文和數字"):i===this.REpassword?this.$store.dispatch(s["l"],{username:r,bed:n,password:i}).then(function(){return t.$router.push({name:"Index"})}):this.$store.dispatch(s["d"],"重複密碼錯誤!")}},computed:Object(o["a"])({},Object(c["c"])({errors:function(t){return t.auth.errors}}))},f=l,u=(r("367b"),r("2877")),d=Object(u["a"])(f,n,i,!1,null,"72ee1f23",null);e["default"]=d.exports},"268f":function(t,e,r){t.exports=r("fde4")},"2f15":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"col-12",staticStyle:{position:"fixed"},attrs:{id:"BK"}})},i=[],o=(r("483a"),r("2877")),a={},s=Object(o["a"])(a,n,i,!1,null,null,null);e["a"]=s.exports},"32a6":function(t,e,r){var n=r("241e"),i=r("c3a1");r("ce7e")("keys",function(){return function(t){return i(n(t))}})},"367b":function(t,e,r){"use strict";var n=r("fcc2"),i=r.n(n);i.a},"47ee":function(t,e,r){var n=r("c3a1"),i=r("9aa9"),o=r("355d");t.exports=function(t){var e=n(t),r=i.f;if(r){var a,s=r(t),c=o.f,l=0;while(s.length>l)c.call(t,a=s[l++])&&e.push(a)}return e}},"483a":function(t,e,r){"use strict";var n=r("c34c"),i=r.n(n);i.a},6718:function(t,e,r){var n=r("e53d"),i=r("584a"),o=r("b8e3"),a=r("ccb9"),s=r("d9f6").f;t.exports=function(t){var e=i.Symbol||(i.Symbol=o?{}:n.Symbol||{});"_"==t.charAt(0)||t in e||s(e,t,{value:a.f(t)})}},"6abf":function(t,e,r){var n=r("e6f3"),i=r("1691").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,i)}},"8aae":function(t,e,r){r("32a6"),t.exports=r("584a").Object.keys},a4bb:function(t,e,r){t.exports=r("8aae")},bf0b:function(t,e,r){var n=r("355d"),i=r("aebd"),o=r("36c3"),a=r("1bc3"),s=r("07e3"),c=r("794b"),l=Object.getOwnPropertyDescriptor;e.f=r("8e60")?l:function(t,e){if(t=o(t),e=a(e,!0),c)try{return l(t,e)}catch(r){}if(s(t,e))return i(!n.f.call(t,e),t[e])}},bf90:function(t,e,r){var n=r("36c3"),i=r("bf0b").f;r("ce7e")("getOwnPropertyDescriptor",function(){return function(t,e){return i(n(t),e)}})},c34c:function(t,e,r){},ccb9:function(t,e,r){e.f=r("5168")},ce7e:function(t,e,r){var n=r("63b6"),i=r("584a"),o=r("294c");t.exports=function(t,e){var r=(i.Object||{})[t]||Object[t],a={};a[t]=e(r),n(n.S+n.F*o(function(){r(1)}),"Object",a)}},cebc:function(t,e,r){"use strict";r.d(e,"a",function(){return f});var n=r("268f"),i=r.n(n),o=r("e265"),a=r.n(o),s=r("a4bb"),c=r.n(s),l=r("bd86");function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=c()(r);"function"===typeof a.a&&(n=n.concat(a()(r).filter(function(t){return i()(r,t).enumerable}))),n.forEach(function(e){Object(l["a"])(t,e,r[e])})}return t}},e265:function(t,e,r){t.exports=r("ed33")},ebfd:function(t,e,r){var n=r("62a0")("meta"),i=r("f772"),o=r("07e3"),a=r("d9f6").f,s=0,c=Object.isExtensible||function(){return!0},l=!r("294c")(function(){return c(Object.preventExtensions({}))}),f=function(t){a(t,n,{value:{i:"O"+ ++s,w:{}}})},u=function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,n)){if(!c(t))return"F";if(!e)return"E";f(t)}return t[n].i},d=function(t,e){if(!o(t,n)){if(!c(t))return!0;if(!e)return!1;f(t)}return t[n].w},p=function(t){return l&&b.NEED&&c(t)&&!o(t,n)&&f(t),t},b=t.exports={KEY:n,NEED:!1,fastKey:u,getWeak:d,onFreeze:p}},ed33:function(t,e,r){r("014b"),t.exports=r("584a").Object.getOwnPropertySymbols},fcc2:function(t,e,r){},fde4:function(t,e,r){r("bf90");var n=r("584a").Object;t.exports=function(t,e){return n.getOwnPropertyDescriptor(t,e)}}}]);
//# sourceMappingURL=chunk-486c3280.b99dd09a.js.map