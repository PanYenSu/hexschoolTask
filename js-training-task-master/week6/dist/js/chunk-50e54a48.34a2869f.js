(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50e54a48"],{"14c3":function(t,e,n){var r=n("c6b6"),a=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var o=n.call(t,e);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},"1dde":function(t,e,n){var r=n("d039"),a=n("b622"),o=n("2d00"),i=a("species");t.exports=function(t){return o>=51||!r((function(){var e=[],n=e.constructor={};return n[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},5319:function(t,e,n){"use strict";var r=n("d784"),a=n("825a"),o=n("7b0b"),i=n("50c4"),c=n("a691"),s=n("1d80"),u=n("8aa5"),l=n("14c3"),d=Math.max,f=Math.min,p=Math.floor,v=/\$([$&'`]|\d\d?|<[^>]*>)/g,h=/\$([$&'`]|\d\d?)/g,g=function(t){return void 0===t?t:String(t)};r("replace",2,(function(t,e,n,r){var x=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,b=r.REPLACE_KEEPS_$0,m=x?"$":"$0";return[function(n,r){var a=s(this),o=void 0==n?void 0:n[t];return void 0!==o?o.call(n,a,r):e.call(String(a),n,r)},function(t,r){if(!x&&b||"string"===typeof r&&-1===r.indexOf(m)){var o=n(e,t,this,r);if(o.done)return o.value}var s=a(t),p=String(this),v="function"===typeof r;v||(r=String(r));var h=s.global;if(h){var y=s.unicode;s.lastIndex=0}var w=[];while(1){var A=l(s,p);if(null===A)break;if(w.push(A),!h)break;var $=String(A[0]);""===$&&(s.lastIndex=u(p,i(s.lastIndex),y))}for(var _="",k=0,C=0;C<w.length;C++){A=w[C];for(var R=String(A[0]),S=d(f(c(A.index),p.length),0),P=[],I=1;I<A.length;I++)P.push(g(A[I]));var T=A.groups;if(v){var U=[R].concat(P,S,p);void 0!==T&&U.push(T);var D=String(r.apply(void 0,U))}else D=E(R,p,S,P,T,r);S>=k&&(_+=p.slice(k,S)+D,k=S+R.length)}return _+p.slice(k)}];function E(t,n,r,a,i,c){var s=r+t.length,u=a.length,l=h;return void 0!==i&&(i=o(i),l=v),e.call(c,l,(function(e,o){var c;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(s);case"<":c=i[o.slice(1,-1)];break;default:var l=+o;if(0===l)return e;if(l>u){var d=p(l/10);return 0===d?e:d<=u?void 0===a[d-1]?o.charAt(1):a[d-1]+o.charAt(1):e}c=a[l-1]}return void 0===c?"":c}))}}))},"5d9f":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("form",{staticClass:"form-signin",on:{submit:function(e){return e.preventDefault(),t.signin(e)}}},[n("h1",{staticClass:"h3 mb-3 font-weight-normal"},[t._v(" 請先登入 ")]),n("div",{staticClass:"form-group"},[n("label",{staticClass:"sr-only",attrs:{for:"inputEmail"}},[t._v("Email address")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{id:"inputEmail",type:"email",placeholder:"Email address",required:"",autofocus:""},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}})]),n("div",{staticClass:"form-group"},[n("label",{staticClass:"sr-only",attrs:{for:"inputPassword"}},[t._v("Password")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{id:"inputPassword",type:"password",placeholder:"Password",required:""},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}})]),n("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"submit"}},[t._v(" 登入 ")]),n("br"),n("button",{staticClass:"btn btn-outline-primary btn-block",attrs:{type:"button"},on:{click:t.signout}},[t._v(" 登出 ")]),n("br"),n("button",{staticClass:"btn btn-outline-primary btn-block",attrs:{type:"button"},on:{click:t.getData}},[t._v(" 取得資料 ")]),n("p",{staticClass:"mt-5 mb-3 text-muted"},[t._v(" © 2020~∞ - 六角學院 ")])])])},a=[],o=(n("99af"),n("ac1f"),n("5319"),{name:"Login",data:function(){return{user:{email:"",password:""},token:""}},methods:{signin:function(){var t=this,e="".concat("https://course-ec-api.hexschool.io/","api/auth/login");this.$http.post(e,this.user).then((function(e){var n=e.data.token,r=e.data.expired;document.cookie="hexToken=".concat(n,";expires=").concat(new Date(1e3*r),";"),t.$router.push("/admin/products")})).catch((function(t){console.log(t)}))},signout:function(){document.cookie="hexToken=;expires=;",console.log("token 已清除")},getData:function(){var t=this;this.token=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");var e="".concat("https://course-ec-api.hexschool.io/","api/").concat("86bfd5d2-b7d3-4a55-93e6-ef6299ba4c1c","/admin/ec/products");this.$http.defaults.headers.common.Authorization="Bearer ".concat(this.token),this.$http.get(e).then((function(e){t.products=e.data.data,t.pagination=e.data.meta.pagination}))}}}),i=o,c=(n("ebc6"),n("2877")),s=Object(c["a"])(i,r,a,!1,null,null,null);e["default"]=s.exports},6547:function(t,e,n){var r=n("a691"),a=n("1d80"),o=function(t){return function(e,n){var o,i,c=String(a(e)),s=r(n),u=c.length;return s<0||s>=u?t?"":void 0:(o=c.charCodeAt(s),o<55296||o>56319||s+1===u||(i=c.charCodeAt(s+1))<56320||i>57343?t?c.charAt(s):o:t?c.slice(s,s+2):i-56320+(o-55296<<10)+65536)}};t.exports={codeAt:o(!1),charAt:o(!0)}},"65f0":function(t,e,n){var r=n("861d"),a=n("e8b5"),o=n("b622"),i=o("species");t.exports=function(t,e){var n;return a(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!a(n.prototype)?r(n)&&(n=n[i],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},8418:function(t,e,n){"use strict";var r=n("c04e"),a=n("9bf2"),o=n("5c6c");t.exports=function(t,e,n){var i=r(e);i in t?a.f(t,i,o(0,n)):t[i]=n}},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},9263:function(t,e,n){"use strict";var r=n("ad6d"),a=n("9f7f"),o=RegExp.prototype.exec,i=String.prototype.replace,c=o,s=function(){var t=/a/,e=/b*/g;return o.call(t,"a"),o.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),u=a.UNSUPPORTED_Y||a.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],d=s||l||u;d&&(c=function(t){var e,n,a,c,d=this,f=u&&d.sticky,p=r.call(d),v=d.source,h=0,g=t;return f&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),g=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(v="(?: "+v+")",g=" "+g,h++),n=new RegExp("^(?:"+v+")",p)),l&&(n=new RegExp("^"+v+"$(?!\\s)",p)),s&&(e=d.lastIndex),a=o.call(f?n:d,g),f?a?(a.input=a.input.slice(h),a[0]=a[0].slice(h),a.index=d.lastIndex,d.lastIndex+=a[0].length):d.lastIndex=0:s&&a&&(d.lastIndex=d.global?a.index+a[0].length:e),l&&a&&a.length>1&&i.call(a[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(a[c]=void 0)})),a}),t.exports=c},"99af":function(t,e,n){"use strict";var r=n("23e7"),a=n("d039"),o=n("e8b5"),i=n("861d"),c=n("7b0b"),s=n("50c4"),u=n("8418"),l=n("65f0"),d=n("1dde"),f=n("b622"),p=n("2d00"),v=f("isConcatSpreadable"),h=9007199254740991,g="Maximum allowed index exceeded",x=p>=51||!a((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),b=d("concat"),m=function(t){if(!i(t))return!1;var e=t[v];return void 0!==e?!!e:o(t)},E=!x||!b;r({target:"Array",proto:!0,forced:E},{concat:function(t){var e,n,r,a,o,i=c(this),d=l(i,0),f=0;for(e=-1,r=arguments.length;e<r;e++)if(o=-1===e?i:arguments[e],m(o)){if(a=s(o.length),f+a>h)throw TypeError(g);for(n=0;n<a;n++,f++)n in o&&u(d,f,o[n])}else{if(f>=h)throw TypeError(g);u(d,f++,o)}return d.length=f,d}})},"9f7f":function(t,e,n){"use strict";var r=n("d039");function a(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=a("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=a("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,n){"use strict";var r=n("23e7"),a=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),a=n("d039"),o=n("b622"),i=n("9263"),c=n("9112"),s=o("species"),u=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),d=o("replace"),f=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),p=!a((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,d){var v=o(t),h=!a((function(){var e={};return e[v]=function(){return 7},7!=""[t](e)})),g=h&&!a((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[s]=function(){return n},n.flags="",n[v]=/./[v]),n.exec=function(){return e=!0,null},n[v](""),!e}));if(!h||!g||"replace"===t&&(!u||!l||f)||"split"===t&&!p){var x=/./[v],b=n(v,""[t],(function(t,e,n,r,a){return e.exec===i?h&&!a?{done:!0,value:x.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),m=b[0],E=b[1];r(String.prototype,t,m),r(RegExp.prototype,v,2==e?function(t,e){return E.call(t,this,e)}:function(t){return E.call(t,this)})}d&&c(RegExp.prototype[v],"sham",!0)}},e6ae:function(t,e,n){},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},ebc6:function(t,e,n){"use strict";var r=n("e6ae"),a=n.n(r);a.a}}]);
//# sourceMappingURL=chunk-50e54a48.34a2869f.js.map