(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{132:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(147)),s={id:"inspectors",title:"Inspectors",slug:"inspectors.html"},i={unversionedId:"assertions/inspectors",id:"assertions/inspectors",isDocsHomePage:!1,title:"Inspectors",description:"Inspectors allow us to test elements in a collection. They are extension functions for collections and arrays that test",source:"@site/docs/assertions/inspectors.md",slug:"/assertions/inspectors.html",permalink:"/docs/assertions/inspectors.html",editUrl:"https://github.com/kotest/kotest/docs/assertions/inspectors.md",version:"current",sidebar:"assertions",previous:{title:"Retry",permalink:"/docs/assertions/retry.html"},next:{title:"Assertion Mode",permalink:"/docs/assertions/assertion-mode.html"}},l=[],c={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Inspectors allow us to test elements in a collection. They are extension functions for collections and arrays that test\nthat all, none or some of the elements pass the given assertions. For example, to test that a list of names contains\nat least two elements which have a length of 7 or more, we can do this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),'val xs = listOf("sam", "gareth", "timothy", "muhammad")\nxs.forAtLeast(2) {\n    it.shouldHaveMinLength(7)\n}\n')),Object(o.b)("p",null,"Similarly, if we wanted to asset that ",Object(o.b)("em",{parentName:"p"},"no")," elements in a collection passed the assertions, we could do something like:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),'xs.forNone {\n  it.shouldContain("x")\n  it.shouldStartWith("bb")\n}\n')),Object(o.b)("p",null,"The full list of inspectors are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"forAll")," which asserts every element passes the assertions"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"forNone")," which asserts no element passes"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"forOne")," which asserts only a single element passed"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"forAtMostOne")," which asserts that either 0 or 1 elements pass"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"forAtLeastOne")," which asserts that 1 or more elements passed"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"forAtLeast(k)")," which is a generalization that k or more elements passed"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"forAtMost(k)")," which is a generalization that k or fewer elements passed"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"forAny")," which is an alias for ",Object(o.b)("inlineCode",{parentName:"li"},"forAtLeastOne")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"forSome")," which asserts that between 1 and n-1 elements passed. Ie, if NONE pass or ALL pass then we consider that a failure."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"forExactly(k)")," which is a generalization that exactly k elements passed. This is the basis for the implementation of the other methods")))}p.isMDXComponent=!0},147:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,f=m["".concat(s,".").concat(u)]||m[u]||b[u]||o;return n?a.a.createElement(f,i(i({ref:t},c),{},{components:n})):a.a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);