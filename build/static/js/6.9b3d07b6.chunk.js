(this["webpackJsonpreact-router-6-upgrade"]=this["webpackJsonpreact-router-6-upgrade"]||[]).push([[6],{48:function(e,t,c){e.exports={card:"Card_card__27DHp"}},49:function(e,t,c){e.exports={form:"QuoteForm_form__1yHDk",loading:"QuoteForm_loading__3C36t",control:"QuoteForm_control__aZpnH",actions:"QuoteForm_actions__5zdgw"}},53:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(2),o=c(35),a=c(48),s=c.n(a),u=c(1),i=function(e){return Object(u.jsx)("div",{className:s.a.card,children:e.children})},l=c(14),d=c(49),j=c.n(d),b=function(e){var t=Object(n.useState)(!1),c=Object(o.a)(t,2),a=c[0],s=c[1],d=Object(n.useRef)(),b=Object(n.useRef)();return Object(u.jsxs)(n.Fragment,{children:[Object(u.jsx)(r.a,{when:a,message:function(e){return"Are you sure you want to leave? All your entered data will be lost!"}}),Object(u.jsx)(i,{children:Object(u.jsxs)("form",{onFocus:function(){s(!0)},className:j.a.form,onSubmit:function(t){t.preventDefault();var c=d.current.value,n=b.current.value;e.onAddQuote({author:c,text:n})},children:[e.isLoading&&Object(u.jsx)("div",{className:j.a.loading,children:Object(u.jsx)(l.a,{})}),Object(u.jsxs)("div",{className:j.a.control,children:[Object(u.jsx)("label",{htmlFor:"author",children:"Author"}),Object(u.jsx)("input",{type:"text",id:"author",ref:d})]}),Object(u.jsxs)("div",{className:j.a.control,children:[Object(u.jsx)("label",{htmlFor:"text",children:"Text"}),Object(u.jsx)("textarea",{id:"text",rows:"5",ref:b})]}),Object(u.jsx)("div",{className:j.a.actions,children:Object(u.jsx)("button",{onClick:function(){s(!1)},className:"btn",children:"Add Quote"})})]})})]})},f=c(33),h=c(34);t.default=function(){var e=Object(f.a)(h.b),t=e.sendRequest,c=e.status,o=Object(r.h)();Object(n.useEffect)((function(){"completed"===c&&o.push("/quotes")}),[c,o]);return Object(u.jsx)(b,{isLoading:"pending"===c,onAddQuote:function(e){t(e)}})}}}]);
//# sourceMappingURL=6.9b3d07b6.chunk.js.map