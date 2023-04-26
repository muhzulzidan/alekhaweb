"use strict";(self.webpackChunkalekhaweb=self.webpackChunkalekhaweb||[]).push([[3089],{9703:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(7294),n=a(5999),r=a(2244);function o(e){const{metadata:t}=e,{previousPage:a,nextPage:o}=t;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,n.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&l.createElement(r.Z,{permalink:a,title:l.createElement(n.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),o&&l.createElement(r.Z,{permalink:o,title:l.createElement(n.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},9985:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(7294),n=a(9460),r=a(1164);function o(e){let{items:t,component:a=r.Z}=e;return l.createElement(l.Fragment,null,t.map((e=>{let{content:t}=e;return l.createElement(n.n,{key:t.metadata.permalink,content:t},l.createElement(a,null,l.createElement(t,null)))})))}},4881:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(7294),n=a(5999),r=a(5281),o=a(7462),s=a(6010);const i={iconEdit:"iconEdit_Z9Sw"};function c(e){let{className:t,...a}=e;return l.createElement("svg",(0,o.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(i.iconEdit,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function m(e){let{editUrl:t}=e;return l.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:r.k.common.editThisPage},l.createElement(c,null),l.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},2244:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(7294),n=a(6010),r=a(9960);function o(e){const{permalink:t,title:a,subLabel:o,isNext:s}=e;return l.createElement(r.Z,{className:(0,n.Z)("pagination-nav__link",s?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},o&&l.createElement("div",{className:"pagination-nav__sublabel"},o),l.createElement("div",{className:"pagination-nav__label"},a))}},3008:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(7294),n=a(6010),r=a(9960);const o={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function s(e){let{permalink:t,label:a,count:s}=e;return l.createElement(r.Z,{href:t,className:(0,n.Z)(o.tag,s?o.tagWithCount:o.tagRegular)},a,s&&l.createElement("span",null,s))}},1526:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(7294),n=a(6010),r=a(5999),o=a(3008);const s={tags:"tags_jXut",tag:"tag_QGVx"};function i(e){let{tags:t}=e;return l.createElement(l.Fragment,null,l.createElement("b",null,l.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),l.createElement("ul",{className:(0,n.Z)(s.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return l.createElement("li",{key:a,className:s.tag},l.createElement(o.Z,{label:t,permalink:a}))}))))}},9460:(e,t,a)=>{a.d(t,{C:()=>s,n:()=>o});var l=a(7294),n=a(902);const r=l.createContext(null);function o(e){let{children:t,content:a,isBlogPostPage:n=!1}=e;const o=function(e){let{content:t,isBlogPostPage:a}=e;return(0,l.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:n});return l.createElement(r.Provider,{value:o},t)}function s(){const e=(0,l.useContext)(r);if(null===e)throw new n.i6("BlogPostProvider");return e}},2524:(e,t,a)=>{a.d(t,{Z:()=>r});var l=a(7294),n=a(7961);a(9960),a(5999);function r(e){const{sidebar:t,toc:a,children:r,...o}=e;t&&t.items.length;return l.createElement(n.Z,o,l.createElement("div",{className:"py-12"},e.title&&l.createElement("div",{className:"flex justify-center items-center text-center py-12"},l.createElement("h1",{className:"text-6xl"},e.title)),l.createElement("div",{className:"flex"},l.createElement("main",{className:"flex flex-wrap gap-8 px-10",itemScope:!0,itemType:"http://schema.org/Blog"},r),a&&l.createElement("div",{className:"col col--2"},a))))}},1217:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var l=a(7294),n=a(6010),r=a(2263),o=a(1944),s=a(5281),i=a(2524),c=(a(9703),a(197));a(9985);const m=function(e){return l.createElement("a",{className:"flex relative",href:e.props.metadata.permalink},l.createElement("div",{className:"flex flex-col border border-solid border-neutral-100 rounded-xl p-4 w-[272px]"},l.createElement("div",{className:"flex flex-col"},l.createElement("div",{className:""},l.createElement("img",{className:"h-10",alt:e.alt,loading:"lazy",src:e.props.assets.image})),l.createElement("div",{className:"text-neutral-100 pt-4 h-20 mb-10"},l.createElement("h3",{className:"capitalize text-base"},e.props.metadata.frontMatter.title)),l.createElement("div",{className:"flex gap-2 items-end text-neutral-100 "},e.props.metadata.tags.slice(0,2).map((e=>l.createElement("div",{className:"border border-solid border-neutral-200 p-1 px-2 rounded-md"},e.label))),l.createElement("div",{className:"border rounded-md border-solid border-neutral-200 p-1 px-2"},l.createElement("p",{className:"m-0"},"..."))))))};a(7462),a(3905);const u={title:"See asdas how Hasura helps /n transform businesses"};function g(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,r.Z)(),{blogDescription:n,blogTitle:s,permalink:i}=t,m="/"===i?a:s;return l.createElement(l.Fragment,null,l.createElement(o.d,{title:m,description:n}),l.createElement(c.Z,{tag:"blog_posts_list"}))}function d(e){const{metadata:t,items:a,sidebar:n}=e;return l.createElement(i.Z,{title:u.title},a.map((e=>l.createElement(m,{key:e,props:e.content}))))}function p(e){return l.createElement(o.FG,{className:(0,n.Z)(s.k.wrapper.blogPages,s.k.page.blogListPage)},l.createElement(g,e),l.createElement(d,e))}},1164:(e,t,a)=>{a.d(t,{Z:()=>C});var l=a(7294),n=a(6010),r=a(9460),o=a(4996);function s(e){let{children:t,className:a}=e;const{frontMatter:n,assets:s}=(0,r.C)(),{withBaseUrl:i}=(0,o.C)(),c=s.image??n.image;return l.createElement("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},c&&l.createElement("meta",{itemProp:"image",content:i(c,{absolute:!0})}),t)}var i=a(9960);const c={title:"title_xvU1"};function m(e){let{className:t}=e;const{metadata:a,isBlogPostPage:o}=(0,r.C)(),{permalink:s,title:m}=a,u=o?"h1":"h2";return l.createElement(u,{className:(0,n.Z)(c.title,t),itemProp:"headline"},a.frontMatter.talking&&l.createElement("h2",null,"In conversation with ",a.frontMatter.talking),console.log(a.frontMatter),o?m:l.createElement(i.Z,{itemProp:"url",to:s},m),l.createElement("br",null),a.frontMatter.descriptions&&l.createElement("p",{className:"text-xl pt-8"},a.frontMatter.descriptions),l.createElement("div",{className:"flex py-4 gap-8 mb-32"},a.frontMatter.timeline.map(((e,t)=>l.createElement("div",{className:"flex text-xl items-center justify-center gap-4 border border-solid border-neutral-700 p-4 rounded-xl bg-neutral-800"},l.createElement("div",{className:"flex rounded-full bg-neutral-300 h-[40px] w-[80px] content-center text-neutral-900 justify-center items-center"},t+1),l.createElement("div",null,e))))))}var u=a(5999);function g(e){return e.href?l.createElement(i.Z,e):l.createElement(l.Fragment,null,e.children)}function d(e){let{author:t,className:a}=e;const{name:r,title:o,url:s,imageURL:i,email:c}=t,m=s||c&&`mailto:${c}`||void 0;return l.createElement("div",{className:(0,n.Z)("avatar margin-bottom--sm",a)},i&&l.createElement(g,{href:m,className:"avatar__photo-link"},l.createElement("img",{className:"avatar__photo",src:i,alt:r})),r&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(g,{href:m,itemProp:"url"},l.createElement("span",{itemProp:"name"},r))),o&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},o)))}const p={authorCol:"authorCol_q4o9",imageOnlyAuthorRow:"imageOnlyAuthorRow_lXe7",imageOnlyAuthorCol:"imageOnlyAuthorCol_cxD5"};function E(e){let{className:t}=e;const{metadata:{authors:a},assets:o}=(0,r.C)();if(0===a.length)return null;const s=a.every((e=>{let{name:t}=e;return!t}));return l.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",s?p.imageOnlyAuthorRow:"row",t)},a.map(((e,t)=>l.createElement("div",{className:(0,n.Z)(!s&&"col col--6",s?p.imageOnlyAuthorCol:p.authorCol),key:t},l.createElement(d,{author:{...e,imageURL:o.authorsImageUrls[t]??e.imageURL}})))))}function h(){return l.createElement("header",null,l.createElement(m,null),l.createElement(E,null))}var b=a(8780),f=a(5042);function v(e){let{children:t,className:a}=e;const{isBlogPostPage:o}=(0,r.C)();return l.createElement("div",{id:o?b.blogPostContainerID:void 0,className:(0,n.Z)("markdown",a),itemProp:"articleBody"},l.createElement(f.Z,null,t))}var N=a(4881),x=a(1526),Z=a(7462);function P(){return l.createElement("b",null,l.createElement(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function k(e){const{blogPostTitle:t,...a}=e;return l.createElement(i.Z,(0,Z.Z)({"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),l.createElement(P,null))}const _={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_Wr5y"};function w(){const{metadata:e,isBlogPostPage:t}=(0,r.C)(),{tags:a,title:o,editUrl:s,hasTruncateMarker:i}=e,c=!t&&i,m=a.length>0;return m||c||s?l.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",t&&_.blogPostFooterDetailsFull)},m&&l.createElement("div",{className:(0,n.Z)("col",{"col--9":c})},l.createElement(x.Z,{tags:a})),t&&s&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(N.Z,{editUrl:s})),c&&l.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":m})},l.createElement(k,{blogPostTitle:o,to:e.permalink}))):null}function C(e){let{children:t,className:a}=e;const o=function(){const{isBlogPostPage:e}=(0,r.C)();return e?void 0:"margin-bottom--xl"}();return l.createElement(s,{className:(0,n.Z)(o,a)},l.createElement(h,null),l.createElement(v,null,t),l.createElement(w,null))}},8389:(e,t,a)=>{a.d(t,{Z:()=>n});var l=a(7294);const n={...a(702).Z,Highlight:function(e){let{children:t,color:a}=e;return l.createElement("span",{style:{backgroundColor:a,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)}}}}]);