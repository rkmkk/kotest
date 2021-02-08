(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{119:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),s=(n(0),n(147)),i={},o={unversionedId:"blog/release_4.3",id:"blog/release_4.3",isDocsHomePage:!1,title:"release_4.3",description:"Release 4.3.0",source:"@site/docs/blog/release_4.3.md",slug:"/blog/release_4.3",permalink:"/docs/blog/release_4.3",editUrl:"https://github.com/kotest/kotest/docs/blog/release_4.3.md",version:"current"},l=[{value:"New and improved data driven testing",id:"new-and-improved-data-driven-testing",children:[]},{value:"EnabledIf annotation on specs",id:"enabledif-annotation-on-specs",children:[]},{value:"TestCase severity",id:"testcase-severity",children:[]},{value:"Disabling source references",id:"disabling-source-references",children:[]},{value:"Make engine dependency free",id:"make-engine-dependency-free",children:[]},{value:"Matchers return &#39;this&#39; for easy chaining",id:"matchers-return-this-for-easy-chaining",children:[]},{value:"Property test module for kotlinx datetime",id:"property-test-module-for-kotlinx-datetime",children:[]},{value:"Option to strip whitespace from test names",id:"option-to-strip-whitespace-from-test-names",children:[]},{value:"Thanks",id:"thanks",children:[]}],c={rightToc:l};function p(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"release-430"},"Release 4.3.0"),Object(s.b)("p",null,"The Kotest team is pleased to announce the release of Kotest 4.3.0."),Object(s.b)("p",null,"This blog covers some of the new features added in this release.\nFor the full list, see the ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://kotest.io/changelog/"}),"changelog"),"."),Object(s.b)("h3",{id:"new-and-improved-data-driven-testing"},"New and improved data driven testing"),Object(s.b)("p",null,"Kotest has improved its data driven testing support, directly integrating into the framework.\nThis means it will now automatically generate individual test case entries."),Object(s.b)("p",null,"As an example, lets test a function that returns true if the input values are valid ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Pythagorean_triple"}),"pythagorean triples"),"."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),"fun isPythagTriple(a: Int, b: Int, c: Int): Boolean = a * a + b * b == c * c\n")),Object(s.b)("p",null,"We start by writing a data class that will hold each ",Object(s.b)("em",{parentName:"p"},"row")," - a set of inputs."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),"data class PythagTriple(val a: Int, val b: Int, val c: Int)\n")),Object(s.b)("p",null,"Next we invoke the function ",Object(s.b)("inlineCode",{parentName:"p"},"forAll")," inside a test case, passing in one or more of these data classes, and a\nlambda that performs some test logic for a given ",Object(s.b)("em",{parentName:"p"},"row"),"."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'context("Pythag triples tests") {\n    forAll(\n       PythagTriple(3, 4, 5),\n       PythagTriple(6, 8, 10),\n       PythagTriple(8, 15, 17),\n       PythagTriple(7, 24, 25)\n    ) { (a, b, c) ->\n        isPythagTriple(a, b, c) shouldBe true\n    }\n}\n')),Object(s.b)("p",null,"Kotest will automatically generate a test case for each input row, as if you had manually written a seperate test case for each."),Object(s.b)("p",null,Object(s.b)("img",{alt:"data test example output",src:n(206).default})),Object(s.b)("p",null,"For full documentation ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/framework/data-driven-testing.html"}),"click here"),"."),Object(s.b)("h3",{id:"enabledif-annotation-on-specs"},"EnabledIf annotation on specs"),Object(s.b)("p",null,"It can be useful to avoid instantiating a spec entirely, and often we can do that via test tags. But if you want\nto do this with some bespoke code, then the annotation ",Object(s.b)("inlineCode",{parentName:"p"},"EnabledIf")," has been added."),Object(s.b)("p",null,"Annotate a spec with ",Object(s.b)("inlineCode",{parentName:"p"},"EnabledIf"),", passing in a class that extends from ",Object(s.b)("inlineCode",{parentName:"p"},"EnabledCondition")," and that condition\nwill be invoked at runtime to determine if the spec should be instantiated. The ",Object(s.b)("inlineCode",{parentName:"p"},"EnabledCondition")," implementation\nmust have a zero arg constructor."),Object(s.b)("p",null,"For example, lets make a condition that only executes a test if it is midnight."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),"class EnabledIfMidnight : EnabledCondition {\n   override fun enabled(specKlass: KClass<out Spec>): Boolean = LocalTime.now().hour == 0\n}\n")),Object(s.b)("p",null,"And then attach that to a spec:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'@EnabledIf(EnabledIfMidnight::class)\nclass EnabledIfTest : FunSpec() {\n   init {\n      test("tis midnight when the witches roam free") {\n        // test here\n      }\n   }\n}\n')),Object(s.b)("h3",{id:"testcase-severity"},"TestCase severity"),Object(s.b)("p",null,"Test case can be conditionally executed via test tags, and now also by severity levels.\nThe levels are BLOCKER, CRITICAL, NORMAL, MINOR, and TRIVIAL."),Object(s.b)("p",null,"We can mark each test case with a severity level:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'class MyTest : FunSpec() {\n   init {\n      test("very very important").config(severity = TestCaseSeverityLevel.CRITICAL) {\n        // test here\n      }\n   }\n}\n')),Object(s.b)("p",null,"Say we only want to execute tests that are CRITICAL or higher, we can execute with the system property ",Object(s.b)("inlineCode",{parentName:"p"},"kotest.framework.test.severity=CRITICAL")),Object(s.b)("p",null,"This can be useful if we have a huge test suite and want to run some tests first in a seperate test run."),Object(s.b)("p",null,"By default, all tests are executed."),Object(s.b)("h3",{id:"disabling-source-references"},"Disabling source references"),Object(s.b)("p",null,"Whenever a test case is created, Kotest creates a stack trace so that it can link back to the test case.\nThe stack trace contains the filename and line number which the Intellij Plugin uses to create links in the test window.\nIt calls these the ",Object(s.b)("em",{parentName:"p"},"sourceref"),"."),Object(s.b)("p",null,"If you have 1000s of tests and are encountering some slowdown when executing the full suite via gradle, you can now disable\nthe generation of these sourcerefs by setting the system property ",Object(s.b)("inlineCode",{parentName:"p"},"kotest.framework.sourceref.disable=true")),Object(s.b)("p",null,"Generally speaking, this is only of use if you have a huge test suite and mostly aimed at CI builds."),Object(s.b)("h3",{id:"make-engine-dependency-free"},"Make engine dependency free"),Object(s.b)("p",null,"A test framework is one of the lowest levels of dependences in an ecosystem. As Kotest is used by many Kotlin libraries, a clash\ncan occur if Kotest and your project are using the same dependencies but with different versions."),Object(s.b)("p",null,"It is beneficial then if Kotest has as few dependencies as possible. To this aim, 4.3.0 has seen the dependencies\nfor the Kotest framework reduced to just Classgraph (to scan for specs), Mordant (for console output), and opentest4j."),Object(s.b)("h3",{id:"matchers-return-this-for-easy-chaining"},"Matchers return 'this' for easy chaining"),Object(s.b)("p",null,"In the opinion of this author, Kotest has the most comprehensive assertion support for Kotlin. Now they just became more convienient,\nby allowing you to chain assertions together if you wish."),Object(s.b)("p",null,"So, instead of"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'val employees: List<Employee> = ...\nemployees.shouldBeSorted()\nemployees.shouldHaveSize(4)\nemployees.shouldContain(Employee("Sam", "Chicago"))\n')),Object(s.b)("p",null,"You can now do"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'val employees: List<Employee> = ...\nemployees.shouldBeSorted()\n          shouldHaveSize(4)\n          shouldContain(Employee("Sam", "Chicago"))\n')),Object(s.b)("p",null,"Of course, this is entirely optional."),Object(s.b)("h3",{id:"property-test-module-for-kotlinx-datetime"},"Property test module for kotlinx datetime"),Object(s.b)("p",null,"Kotest's expansive property test generators now include ones for the incubating kotlinx datetime library."),Object(s.b)("p",null,"Add the module ",Object(s.b)("inlineCode",{parentName:"p"},"kotest-property-datetime")," to your build. These generators are available for JVM and JS."),Object(s.b)("p",null,"For example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),"forAll(Arb.datetime(1987..1994)) { date ->\n   isValidStarTrekTngSeason(date) shouldBe true\n}\n")),Object(s.b)("h3",{id:"option-to-strip-whitespace-from-test-names"},"Option to strip whitespace from test names"),Object(s.b)("p",null,"If you like to define test names over multiple lines, Kotest will now strip out leading, trailing and repeated whitespace from test names."),Object(s.b)("p",null,"For example, the following spec:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'class MySpec : StringSpec() {\n  init {\n   """this is a\n      test spanning multiple lines""" { }\n  }\n}\n')),Object(s.b)("p",null,"Would normally be output as ",Object(s.b)("inlineCode",{parentName:"p"},"this is a      test spanning multiple lines")),Object(s.b)("p",null,"By setting the configuration object ",Object(s.b)("inlineCode",{parentName:"p"},"removeTestNameWhitespace")," to true, this would instead by output as ",Object(s.b)("inlineCode",{parentName:"p"},"this is a test spanning multiple lines")),Object(s.b)("h3",{id:"thanks"},"Thanks"),Object(s.b)("p",null,"Huge thanks to all who contributed to this release (includes commits since v4.2.0 tag):"),Object(s.b)("p",null,"AJ Alt, Alex Facciorusso, Ashish Kumar Joy, J Phani Mahesh, Jasper de Vries, Javier Segovia C\xf3rdoba,\nJosh Graham, KeremAslan, Leonardo Colman, Micha\u0142 Sikora, Mitchell Yuwono, Neenad Ingole, Rick Busarow,\nSergKhram, Sergei Khramkov, crazyk2, sksamuel"))}p.isMDXComponent=!0},147:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,h=b["".concat(i,".").concat(d)]||b[d]||u[d]||s;return n?r.a.createElement(h,o(o({ref:t},c),{},{components:n})):r.a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},206:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/datatest1-55f0023d0e24fd14ff7081a3746e32ef.png"}}]);