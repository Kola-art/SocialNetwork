(this.webpackJsonpproject1=this.webpackJsonpproject1||[]).push([[4],{294:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__2ulF2",dialogsItems:"Dialogs_dialogsItems__qyPFE",dialog:"Dialogs_dialog__2kGh0",active:"Dialogs_active__g1Xjh",messages:"Dialogs_messages__1oL0u",message:"Dialogs_message__34cnR"}},300:function(e,s,a){"use strict";a.r(s);a(0);var i=a(95),t=a(9),n=a(18),c=a(294),o=a.n(c),d=a(1),l=function(e){return Object(d.jsx)("div",{className:o.a.dialog+""+o.a.active,children:Object(d.jsxs)(n.b,{to:"/dialogs/"+e.id,children:[" ",e.name," "]})})},g=function(e){return Object(d.jsx)("div",{className:o.a.dialog,children:e.message})},j=a(88),r=a(125),b=a(48),m=a(85),u=Object(m.a)(50),O=Object(r.a)({form:"dialogAddMessageForm"})((function(e){return Object(d.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(d.jsx)("div",{children:Object(d.jsx)(j.a,{component:b.b,validate:[m.b,u],name:"newMessageBody",palceholder:"Enter your message"})}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{children:"Send"})})]})})),h=function(e){var s=e.dialogsPage,a=s.dialogs.map((function(e){return Object(d.jsx)(l,{name:e.name,id:e.id},e.id)})),i=s.messages.map((function(e){return Object(d.jsx)(g,{message:e.message},e.id)}));s.newMessageBody;return e.isAuth?Object(d.jsxs)("div",{className:o.a.dialogs,children:[Object(d.jsx)("div",{className:o.a.dialogsItems,children:a}),Object(d.jsx)("div",{className:o.a.messages,children:Object(d.jsx)("div",{children:i})}),Object(d.jsx)(O,{onSubmit:function(s){e.sendMessage(s.newMessageBody)}})]}):Object(d.jsx)(t.a,{to:"/login"})},_=a(13),x=a(10),f=a(135);s.default=Object(x.d)(Object(_.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(s){e(Object(i.b)(s))}}})),f.a)(h)}}]);
//# sourceMappingURL=4.40713708.chunk.js.map