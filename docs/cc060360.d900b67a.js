(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{126:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(3),i=n(7),r=(n(0),n(147)),o={id:"test_case_config",title:"Test Case Config",slug:"testcaseconfig.html"},s={unversionedId:"framework/test_case_config",id:"framework/test_case_config",isDocsHomePage:!1,title:"Test Case Config",description:"Each test can be configured with various parameters. After the test name, invoke the config function",source:"@site/docs/framework/test_case_config.md",slug:"/framework/testcaseconfig.html",permalink:"/docs/framework/testcaseconfig.html",editUrl:"https://github.com/kotest/kotest/docs/framework/test_case_config.md",version:"current",sidebar:"framework",previous:{title:"Temporary Files",permalink:"/docs/framework/temporary-files"},next:{title:"Project Level Config",permalink:"/docs/framework/project-config.html"}},l=[],c={rightToc:l};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Each test can be configured with various parameters. After the test name, invoke the config function\npassing in the parameters you wish to set. The available parameters are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"invocations")," - The number of times to run this test. Useful if you have a non-deterministic test and you want to run that particular test a set number of times to see if it eventually fails. A test will only succeed if all invocations succeed. Defaults to 1."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"threads")," - Allows the invocation of this test to be parallelized by setting the number of threads. Value must be less or equal of invocations value. Similarly, if you set invocations to a value equal to the number threads, then each invocation will have its own thread."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"enabled")," - If set to ",Object(r.b)("inlineCode",{parentName:"li"},"false")," then this test is ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/framework/conditional-evaluation.html"}),"disabled"),". Can be useful if a test needs to be temporarily ignored. You can also use this parameter with boolean expressions to run a test only under certain conditions."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"enabledIf")," - A function which provides the same ability as ",Object(r.b)("inlineCode",{parentName:"li"},"enabled")," but is lazily evaluated when the test case is due for execution."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"timeout")," - sets a timeout for this test. If the test has not finished in that time then the test fails. Useful for code that is non-deterministic and might not finish. Timeout is of type ",Object(r.b)("inlineCode",{parentName:"li"},"kotlin.Duration")," which can be instantiated like ",Object(r.b)("inlineCode",{parentName:"li"},"2.seconds"),", ",Object(r.b)("inlineCode",{parentName:"li"},"3.minutes")," and so on."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"tags")," - a set of tags that can be used to group tests (see detailed description below)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"listeners")," - register ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/framework/listeners.html"}),"test listeners")," to run only on this test."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"extensions")," - register extensions to run only on this test.")),Object(r.b)("p",null,"An example of setting config on a test:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'class MyTests : ShouldSpec() {\n  init {\n    should("return the length of the string").config(invocations = 10, threads = 2) {\n      "sammy".length shouldBe 5\n      "".length shouldBe 0\n    }\n  }\n}\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'class MyTests : WordSpec() {\n  init {\n    "String.length" should {\n      "return the length of the string".config(timeout = 2.seconds) {\n        "sammy".length shouldBe 5\n        "".length shouldBe 0\n      }\n    }\n  }\n}\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'class FunSpecTest : FunSpec() {\n  init {\n    test("FunSpec should support config syntax").config(tags = setOf(Database, Linux)) {\n      // ...\n    }\n  }\n}\n')),Object(r.b)("p",null,"You can also specify a default TestCaseConfig for all test cases of a Spec:"),Object(r.b)("p",null,"Overriding the defaultTestCaseConfig function:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),"class MySpec : StringSpec() {\n\n  override fun defaultTestCaseConfig() = TestCaseConfig(invocations = 3)\n\n  init {\n    // your test cases ...\n  }\n}\n")),Object(r.b)("p",null,"Or via assignment to the defaultTestConfig val:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'class FunSpecTest : FunSpec() {\n  init {\n\n    defaultTestConfig = TestCaseConfig(enabled = true, invocations = 3)\n\n    test("FunSpec should support Spec config syntax in init{} block") {\n      // ...\n    }\n  }\n}\n')))}u.isMDXComponent=!0},147:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),u=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=u(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=u(n),f=a,m=b["".concat(o,".").concat(f)]||b[f]||p[f]||r;return n?i.a.createElement(m,s(s({ref:t},c),{},{components:n})):i.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);