(this.webpackJsonpkeeperapp=this.webpackJsonpkeeperapp||[]).push([[0],{42:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(11),i=n.n(r),o=n(34),s=n(24),j=(n(42),n(2));var l=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"navbar",children:Object(j.jsx)("h4",{children:"keeper App"})})})};(new Date).getFullYear();var u=n(22),b=n(27),O=n(64),d=n(32),x=n.n(d);var h=function(e){var t=Object(c.useState)({title:"",content:""}),n=Object(s.a)(t,2),a=n[0],r=n[1],i=function(e){var t=e.target,n=t.name,c=t.value;r((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(u.a)({},n,c))})),console.log(a)};return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"main_note",children:Object(j.jsxs)("form",{className:"form_main_note",children:[Object(j.jsx)("input",{type:"text",placeholder:"Title",autoComplete:"off",onChange:i,value:a.title,name:"title"}),Object(j.jsx)("textarea",{rows:"3",cols:"32",placeholder:"Write a Note..",onChange:i,value:a.content,name:"content"}),Object(j.jsxs)(O.a,{variant:"contained",className:"btn",onClick:function(){e.passnote(a),r({title:"",content:""})},children:[" ",Object(j.jsx)(x.a,{})]})]})})})},p=n(33),f=n.n(p);var m=function(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"Note",children:[Object(j.jsx)("h4",{children:e.title}),Object(j.jsx)("p",{children:e.content}),Object(j.jsx)(O.a,{variant:"contained",className:"btn",onClick:function(){e.delete(e.id)},children:Object(j.jsx)(f.a,{})})]})})};var v=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1],r=function(e){a((function(t){return t.filter((function(t,n){return n!==e}))}))};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(l,{}),Object(j.jsx)(h,{passnote:function(e){a((function(t){return[].concat(Object(o.a)(t),[e])})),console.log(e)}}),n.map((function(e,t){return Object(j.jsx)(m,{id:t,title:e.title,content:e.content,delete:r},t)}))]})};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.38815998.chunk.js.map