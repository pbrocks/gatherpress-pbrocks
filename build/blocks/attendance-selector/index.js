!function(){"use strict";var e={n:function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,{a:n}),n},d:function(t,n){for(var s in n)e.o(n,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:n[s]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t=window.wp.i18n,n=window.wp.blocks,s=window.wp.element,a=window.wp.blockEditor,o=window.wp.components,r=window.wp.apiFetch,i=e.n(r);const c=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];for(const[n,s]of Object.entries(e)){let e=n;t&&(e+=t);const a=new CustomEvent(e,{detail:s});dispatchEvent(a)}};var l=e=>{let{type:n="upcoming",status:a="attend"}=e;const o={upcoming:{attend:{icon:"",text:""},attending:{icon:"dashicons dashicons-yes-alt",text:(0,t.__)("Attending","gatherpress")},waiting_list:{icon:"dashicons dashicons-editor-help",text:(0,t.__)("Waiting List","gatherpress")},not_attending:{icon:"dashicons dashicons-dismiss",text:(0,t.__)("Not Attending","gatherpress")}},past:{attending:{icon:"dashicons dashicons-yes-alt",text:(0,t.__)("Went","gatherpress")},attend:{icon:"dashicons dashicons-dismiss",text:(0,t.__)("Didn't Go","gatherpress")},waiting_list:{icon:"dashicons dashicons-dismiss",text:(0,t.__)("Didn't Go","gatherpress")},not_attending:{icon:"dashicons dashicons-dismiss",text:(0,t.__)("Didn't Go","gatherpress")}}};return(0,s.createElement)("div",{className:"gp-status__response"},(0,s.createElement)("span",{className:o[n][a].icon}),(0,s.createElement)("strong",null,o[n][a].text))};const d=()=>{const[e,t]=(0,s.useState)(!1),n=()=>t(!1);return(0,s.createElement)(s.Fragment,null,(0,s.createElement)(o.Button,{variant:"secondary",onClick:()=>t(!0)},"Open Modal"),e&&(0,s.createElement)(o.Modal,{title:"This is my modal",onRequestClose:n},(0,s.createElement)(o.Button,{variant:"secondary",onClick:n},"My custom close button")))};var p=e=>{let{eventId:n,currentUser:a="",type:r}=e;const[p,u]=(0,s.useState)(a.status),[g,m]=(0,s.useState)(a.guests),[_,h]=(0,s.useState)("hidden"),[b,w]=(0,s.useState)("false"),[f,E]=(0,s.useState)(!1);if("past"===r)return"";"undefined"==typeof adminpage&&o.Modal.setAppElement(".gp-enabled");const v=e=>{e.preventDefault(),E(!1)},y=async function(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];e.preventDefault(),"attending"!==t&&(s=0),i()({path:"/gatherpress/v1/event/attendance",method:"POST",data:{post_id:n,status:t,guests:s,_wpnonce:GatherPress.nonce}}).then((t=>{if(t.success){u(t.status),m(t.guests);const n={all:0,attending:0,not_attending:0,waiting_list:0};for(const[e,s]of Object.entries(t.attendees))n[e]=s.count;const s={setAttendanceStatus:t.status,setAttendanceList:t.attendees,setAttendanceCount:n};c(s,t.event_id),a&&v(e)}}))};return""===a?(0,s.createElement)("div",{className:"gp-attendance-selector"},(0,s.createElement)("div",{className:"wp-block-button"},(0,s.createElement)("a",{className:"wp-block-button__link",href:"#",onClick:e=>y(e,"attending")},(0,t.__)("Attend","gatherpress")))):(0,s.createElement)("div",{className:"gp-attendance-selector"},(0,s.createElement)(o.ButtonGroup,{className:"gp-buttons wp-block-buttons"},(0,s.createElement)("div",{className:"gp-buttons__container  wp-block-button"},(0,s.createElement)("a",{href:"#",className:"gp-buttons__button wp-block-button__link","aria-expanded":b,tabIndex:"0",onKeyDown:e=>{13===e.keyCode&&(h("hidden"===_?"show":"hidden"),w("false"===b?"true":"false"))},onClick:e=>(e=>{e.preventDefault(),"not_attending"!==p&&"attend"!==p||y(e,"attending",0,!1),E(!0)})(e)},(e=>{switch(e){case"attending":case"waiting_list":return(0,t.__)("Edit RSVP","gatherpress")}return(0,t.__)("Attend","gatherpress")})(p))),(0,s.createElement)(d,null),(0,s.createElement)(o.Modal,{isOpen:f,onRequestClose:v,style:{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},contentLabel:(0,t.__)("Edit RSVP","gatherpress")},(0,s.createElement)("div",{className:"gp-modal gp-modal__attendance-selector"},(0,s.createElement)("div",{className:"gp-modal__header has-large-font-size"},(0,t.__)("Edit RSVP","gatherpress")),(0,s.createElement)("div",{className:"gp-modal__content"},(0,s.createElement)("label",{htmlFor:"gp-guests"},(0,t.__)("Number of guests?","gatherpress")),(0,s.createElement)("input",{id:"gp-guests",type:"number",min:"0",max:"5",onChange:e=>y(e,"attending",e.target.value,!1),defaultValue:g})),(0,s.createElement)(o.ButtonGroup,{className:"gp-buttons wp-block-buttons"},(0,s.createElement)("div",{className:"gp-buttons__container wp-block-button is-style-outline has-small-font-size"},(0,s.createElement)("a",{href:"#",onClick:e=>y(e,"not_attending"),className:"gp-buttons__button wp-block-button__link"},(0,t.__)("Not Attending","gatherpress"))),(0,s.createElement)("div",{className:"gp-buttons__container wp-block-button has-small-font-size"},(0,s.createElement)("a",{href:"#",onClick:v,className:"gp-buttons__button wp-block-button__link"},(0,t.__)("Close","gatherpress"))))))),"attend"!==p&&(0,s.createElement)("div",{className:"gp-status"},(0,s.createElement)(l,{type:r,status:p}),0<g&&(0,s.createElement)("div",{className:"gp-status__guests"},(0,s.createElement)("span",null,"+",g," ",(0,t.__)("guest(s)","gatherpress")))))},u=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"gatherpress/attendance-selector","version":"0.1.1","title":"Attendance Selector","category":"gatherpress","icon":"groups","example":{},"description":"The block with attendance list.","attributes":{"blockId":{"type":"string"},"content":{"type":"string"},"color":{"type":"string"}},"supports":{"html":false},"textdomain":"gatherpress","editorScript":"file:./index.js","style":"file:./style-index.css"}');(0,n.registerBlockType)(u,{apiVersion:2,title:(0,t.__)("Attendance Selector","gatherpress"),icon:"groups",category:"gatherpress",attributes:{content:{type:"string"},color:{type:"string"}},edit:()=>{const e=(0,a.useBlockProps)(),t="1"===GatherPress.has_event_past?"past":"upcoming",n=GatherPress.post_id,o=GatherPress.current_user;return(0,s.createElement)("div",e,(0,s.createElement)(p,{eventId:n,currentUser:o,type:t}))},save:()=>null})}();