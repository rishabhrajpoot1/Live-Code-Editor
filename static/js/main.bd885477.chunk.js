(this["webpackJsonplive-code-editor"]=this["webpackJsonplive-code-editor"]||[]).push([[0],{11:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(5),r=n.n(s),i=(n(11),n(2)),o=(n(12),n(13),n(14),n(15),n(16),n(6)),l=n(0);var u=function(e){var t=e.language,n=e.name,c=e.value,s=e.onChange,r=Object(a.useState)(!0),u=Object(i.a)(r,2),j=u[0],d=u[1];return Object(l.jsxs)("div",{className:"snippet .editor-container ".concat(j?"expand":""),children:[Object(l.jsxs)("header",{className:"snippet-header flex justify-between align-center",children:[Object(l.jsx)("h2",{className:"snippet-title",children:n||"HTML"}),Object(l.jsx)("button",{onClick:function(){return d((function(e){return!e}))},children:j?Object(l.jsx)("i",{class:"fas fa-compress-alt"}):Object(l.jsx)("i",{class:"fas fa-expand-alt"})})]}),Object(l.jsx)(o.Controlled,{className:"editor",onBeforeChange:function(e,t,n){s(n)},value:c,options:{line:!0,lineWrapping:!0,mode:t,lineNumbers:!0,theme:"material"}})]})};var j=function(e){var t="code-editor-"+e,n=Object(a.useState)((function(){var e=localStorage.getItem(t);return e||""})),c=Object(i.a)(n,2),s=c[0],r=c[1];return Object(a.useEffect)((function(){localStorage.setItem(t,s)}),[t,s]),[s,r]};var d=function(){var e=j("html"),t=Object(i.a)(e,2),n=t[0],c=t[1],s=j("css"),r=Object(i.a)(s,2),o=r[0],d=r[1],b=j("javacsript"),m=Object(i.a)(b,2),f=m[0],O=m[1],h=Object(a.useState)(""),p=Object(i.a)(h,2),x=p[0],v=p[1];return Object(a.useEffect)((function(){var e=setTimeout((function(){v("\n          <html>\n          <head>\n          <style>\n          ".concat(o,"\n          </style>\n          </head>\n          <body>\n            ").concat(n,"\n          <script> \n          ").concat(f,"\n          </script\n          </body>\n          </html>\n        "))}),500);return function(){return clearTimeout(e)}}),[n,o,f]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"input flex",children:[Object(l.jsx)(u,{language:"xml",name:"HTML",value:n,onChange:c}),Object(l.jsx)(u,{language:"css",name:"CSS",value:o,onChange:d}),Object(l.jsx)(u,{language:"javacsript",name:"JS",value:f,onChange:O})]}),Object(l.jsx)("div",{className:"output",children:Object(l.jsx)("iframe",{srcDoc:x,title:"output",frameBorder:"0",width:"100%",sandbox:"allow-scripts"})})]})};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(d,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.bd885477.chunk.js.map