"use strict";(self.webpackChunkalekhaweb=self.webpackChunkalekhaweb||[]).push([[2426],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),h=r,k=c["".concat(o,".").concat(h)]||c[h]||m[h]||i;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=h;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},328:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var a=n(7462),r=(n(7294),n(3905));const i={},l=void 0,s={type:"mdx",permalink:"/home",source:"@site/src/pages/home.mdx",description:"What is Bun?",frontMatter:{}},o=[{value:"What is Bun?",id:"what-is-bun",level:2},{value:"Install",id:"install",level:2},{value:"Upgrade",id:"upgrade",level:3},{value:"Quick links",id:"quick-links",level:2},{value:"Contributing",id:"contributing",level:2},{value:"License",id:"license",level:2}],p=(u="Highlight",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var u;const c={toc:o},m="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-bun"},"What is Bun?"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u200b\u200bBun is still under development.")," Use it to speed up your development workflows or run simpler production code in resource-constrained environments like serverless functions. We're working on more complete Node.js compatibility and integration with existing frameworks. Join the ",(0,r.kt)("a",{parentName:"p",href:"https://bun.sh/discord"},"Discord")," and watch the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oven-sh/bun"},"GitHub repository")," to keeps tabs on future releases.")),(0,r.kt)(p,{color:"#25c2a0",mdxType:"Highlight"},"Bun")," is an all-in-one toolkit for ",(0,r.kt)(p,{color:"#ff6524",mdxType:"Highlight"},"JavaScript")," and TypeScript apps. It ships as a single executable called `bun\u200b`.",(0,r.kt)("p",null,"At its core is the ",(0,r.kt)("em",{parentName:"p"},"Bun runtime"),", a fast JavaScript ",(0,r.kt)(p,{color:"#998524",mdxType:"Highlight"},"Runtime"),"  designed as a drop-in replacement for Node.js. It's written in Zig and powered by JavaScriptCore under the hood, dramatically reducing startup times and memory usage."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bun run index.tsx             # TS and JSX supported out of the box\n")),(0,r.kt)("p",null,"\u200b\u200bThe ",(0,r.kt)("inlineCode",{parentName:"p"},"bun\u200b")," command-line tool also implements a test runner, script runner, and Node.js-compatible package manager. Instead of 1,000 node_modules for development, you only need ",(0,r.kt)("inlineCode",{parentName:"p"},"bun"),". Bun's built-in tools are significantly faster than existing options and usable in existing Node.js projects with little to no changes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bun test                      # run tests\nbun run start                 # run the `start` script in `package.json`\nbun install <pkg>\u200b             # install a package\nbunx cowsay 'Hello, world!'   # execute a package\n")),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)("p",null,"Bun supports Linux (x64 & arm64) and macOS (x64 & Apple Silicon)."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Linux users")," \u2014 Kernel version 5.6 or higher is strongly recommended, but the minimum is 5.1."),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Windows users")," \u2014 Bun does not currently provide a native Windows build. We're working on this; progress can be tracked at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oven-sh/bun/issues/43"},"this issue"),". In the meantime, use one of the installation methods below for Windows Subsystem for Linux.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# with install script (recommended)\ncurl -fsSL https://bun.sh/install | bash\n\n# with npm\nnpm install -g bun\n\n# with Homebrew\nbrew tap oven-sh/bun\nbrew install bun\n\n# with Docker\ndocker pull oven/bun\ndocker run --rm --init --ulimit memlock=-1:-1 oven/bun\n")),(0,r.kt)("h3",{id:"upgrade"},"Upgrade"),(0,r.kt)("p",null,"To upgrade to the latest version of Bun, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"bun upgrade\n")),(0,r.kt)("p",null,"Bun automatically releases a canary build on every commit to ",(0,r.kt)("inlineCode",{parentName:"p"},"main"),". To upgrade to the latest canary build, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"bun upgrade --canary\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/oven-sh/bun/releases/tag/canary"},"View canary build")),(0,r.kt)("h2",{id:"quick-links"},"Quick links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Intro",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/index"},"What is Bun?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/installation"},"Installation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/quickstart"},"Quickstart")))),(0,r.kt)("li",{parentName:"ul"},"CLI",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/cli/run"},(0,r.kt)("inlineCode",{parentName:"a"},"bun run"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/cli/install"},(0,r.kt)("inlineCode",{parentName:"a"},"bun install"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/cli/test"},(0,r.kt)("inlineCode",{parentName:"a"},"bun test"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/cli/create"},(0,r.kt)("inlineCode",{parentName:"a"},"bun create"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/cli/bunx"},(0,r.kt)("inlineCode",{parentName:"a"},"bunx"))))),(0,r.kt)("li",{parentName:"ul"},"Runtime",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/runtime/index"},"Runtime")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/runtime/modules"},"Module resolution")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/runtime/hot"},"Hot ","&"," live reloading")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/runtime/plugins"},"Plugins")))),(0,r.kt)("li",{parentName:"ul"},"Ecosystem",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/ecosystem/nodejs"},"Node.js")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/ecosystem/typescript"},"TypeScript")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/ecosystem/react"},"React")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/ecosystem/elysia"},"Elysia")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/ecosystem/hono"},"Hono")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/ecosystem/express"},"Express")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apvarun/awesome-bun"},"awesome-bun")))),(0,r.kt)("li",{parentName:"ul"},"API",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/api/http"},"HTTP")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/api/websockets"},"WebSockets")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/api/tcp"},"TCP Sockets")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/api/file-io"},"File I/O")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/api/sqlite"},"SQLite")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/api/file-system-router"},"FileSystemRouter")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/api/globals"},"Globals")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/api/spawn"},"Spawn")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/api/transpiler"},"Transpiler")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/api/console"},"Console")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/api/ffi"},"FFI")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/api/html-rewriter"},"HTMLRewriter")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/api/test"},"Testing")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/api/utils"},"Utils")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/api/dns"},"DNS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/api/node-api"},"Node-API"))))),(0,r.kt)("h2",{id:"contributing"},"Contributing"),(0,r.kt)("p",null,"Refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://bun.sh/docs/project/development"},"Project > Development")," guide to start contributing to Bun."),(0,r.kt)("h2",{id:"license"},"License"),(0,r.kt)("p",null,"Refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://bun.sh/docs/project/licensing"},"Project > License")," page for information about Bun's licensing."))}h.isMDXComponent=!0}}]);