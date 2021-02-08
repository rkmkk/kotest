(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{133:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),b=(a(0),a(147)),i={id:"android_matchers",title:"Android Matchers",slug:"android-matchers.html",sidebar_label:"Android"},l={unversionedId:"assertions/android_matchers",id:"assertions/android_matchers",isDocsHomePage:!1,title:"Android Matchers",description:"This page lists all current Android matchers in Kotest. These are additional to the default matchers and are specific to Android.",source:"@site/docs/assertions/android_matchers.md",slug:"/assertions/android-matchers.html",permalink:"/docs/assertions/android-matchers.html",editUrl:"https://github.com/kotest/kotest/docs/assertions/android_matchers.md",version:"current",sidebar_label:"Android",sidebar:"assertions",previous:{title:"Ktor Matchers",permalink:"/docs/assertions/ktor-matchers.html"},next:{title:"Kotlinx Datetime Matchers",permalink:"/docs/assertions/kotlinx-datetime-matchers.html"}},c=[],o={rightToc:c};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"This page lists all current Android matchers in Kotest. These are additional to the default ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/assertions/matchers.html"}),"matchers")," and are specific to Android."),Object(b.b)("p",null,"To use them, it's required to add an extra dependency to your project:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-kotlin"}),'implementation("io.kotest:kotest-assertions-android:VERSION")\n')),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"View"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"view.shouldBeVisible()")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the view visibility is VISIBLE")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"view.shouldBeInvisible()")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the view visibility is INVISIBLE")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"view.shouldBeGone()")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the view visibility is GONE")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"view.shouldHaveContentDescription()")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the view has any content description")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"view.shouldHaveContentDescription(desc)")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the view has ",Object(b.b)("inlineCode",{parentName:"td"},"desc")," as Content Description")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"view.shouldHaveTag(key, value)")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the view has a tag ",Object(b.b)("inlineCode",{parentName:"td"},"key")," with value ",Object(b.b)("inlineCode",{parentName:"td"},"value"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"view.shouldHaveTag(any)")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the view's tag is ",Object(b.b)("inlineCode",{parentName:"td"},"any"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"view.shouldBeEnabled()")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the view is enabled")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"view.shouldBeFocused()")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the view has focus")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"view.shouldBeFocusable()")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the view is focusable")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"view.shouldBeFocusableInTouchMode()")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the view is focusable in touch mode")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"view.shouldBeClickable()")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the view is clickable")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"view.shouldBeLongClickable()")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the view is long clickable")))),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"TextView"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"tv.shouldHaveText(text)")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the text view has text ",Object(b.b)("inlineCode",{parentName:"td"},"text"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"tv.shouldHaveTextColorId(id)")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the text color is the same from color resource ",Object(b.b)("inlineCode",{parentName:"td"},"id"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"tv.shouldHaveTextColor(colorInt)")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the text color is ",Object(b.b)("inlineCode",{parentName:"td"},"colorInt"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"tv.shouldBeAllCaps()")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the textview is marked with the ",Object(b.b)("inlineCode",{parentName:"td"},"isAllCaps")," flag")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"tv.shouldHaveTextAlignment(alignment)")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the text alignment is ",Object(b.b)("inlineCode",{parentName:"td"},"alignment"))))))}s.isMDXComponent=!0},147:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),d=s(a),O=n,m=d["".concat(i,".").concat(O)]||d[O]||p[O]||b;return a?r.a.createElement(m,l(l({ref:t},o),{},{components:a})):r.a.createElement(m,l({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,i=new Array(b);i[0]=O;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var o=2;o<b;o++)i[o]=a[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);