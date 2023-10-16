(()=>{"use strict";var e={n:t=>{var s=t&&t.__esModule?()=>t.default:()=>t;return e.d(s,{a:s}),s},d:(t,s)=>{for(var n in s)e.o(s,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:s[n]})}};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),e.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);const t=window.wp.element,s=window.wp.domReady;var n=e.n(s);const a=window.wp.i18n,r=(e,t=!1)=>{for(const[s,n]of Object.entries(e)){let e=s;t&&(e+=t),addEventListener(e,(e=>{n(e.detail)}),!1)}};function i(e){if("object"==typeof GatherPress)return e.split(".").reduce(((e,t)=>e&&e[t]),GatherPress)}window.wp.data;const l=({item:e,activeItem:s=!1,count:n,onTitleClick:a,defaultLimit:r})=>{const{title:l,value:o}=e,c=!(0===n&&"attending"!==o),p=s?"span":"a",m=i("post_id"),v=n>r;return(0,t.useEffect)((()=>{s&&((e,t=!1)=>{for(const[s,n]of Object.entries(e)){let e=s;t&&(e+=t);const a=new CustomEvent(e,{detail:n});dispatchEvent(a)}})({setRsvpSeeAllLink:v},m)})),c?(0,t.createElement)("div",{className:"gp-rsvp-response__navigation-item"},(0,t.createElement)(p,{className:"gp-rsvp-response__anchor","data-item":o,"data-toggle":"tab",href:"#",role:"tab","aria-controls":`#gp-rsvp-${o}`,onClick:e=>a(e,o)},l),(0,t.createElement)("span",{className:"gp-rsvp-response__count"},"(",n,")")):""},o=({items:s,activeValue:n,onTitleClick:a,defaultLimit:o})=>{const c={all:0,attending:0,not_attending:0,waiting_list:0};for(const[e,t]of Object.entries(i("responses")))c[e]=t.count;const[p,m]=(0,t.useState)(c),[v,u]=(0,t.useState)(!1),[d,_]=(0,t.useState)(!0),g=d?"span":"a";r({setRsvpCount:m},i("post_id"));let f=0;const E=s.map(((e,s)=>{const r=e.value===n;return r&&(f=s),(0,t.createElement)(l,{key:s,item:e,count:p[e.value],activeItem:r,onTitleClick:a,defaultLimit:o})}));return(0,t.useEffect)((()=>{e.g.document.addEventListener("click",(({target:e})=>{e.closest(".gp-rsvp-response__navigation-active")||u(!1)})),e.g.document.addEventListener("keydown",(({key:e})=>{"Escape"===e&&u(!1)}))})),(0,t.useEffect)((()=>{0===p.not_attending&&0===p.waiting_list?_(!0):_(!1)}),[p]),(0,t.createElement)("div",{className:"gp-rsvp-response__navigation-wrapper"},(0,t.createElement)("div",null,(0,t.createElement)(g,{href:"#",className:"gp-rsvp-response__navigation-active",onClick:e=>(e=>{e.preventDefault(),u(!v)})(e)},s[f].title)," ",(0,t.createElement)("span",null,"(",p[n],")")),!d&&v&&(0,t.createElement)("nav",{className:"gp-rsvp-response__navigation"},E))},c=({items:e,activeValue:s,onTitleClick:n,rsvpLimit:l,setRsvpLimit:c,defaultLimit:p})=>{let m;m=!1===l?(0,a.__)("See fewer","gatherpress"):(0,a.__)("See all","gatherpress");const[v,u]=(0,t.useState)(i("responses")[s].count>p);return r({setRsvpSeeAllLink:u},i("post_id")),(0,t.createElement)("div",{className:"gp-rsvp-response__header"},(0,t.createElement)("div",{className:"dashicons dashicons-groups"}),(0,t.createElement)(o,{items:e,activeValue:s,onTitleClick:n,defaultLimit:p}),v&&(0,t.createElement)("div",{className:"gp-rsvp-response__see-all"},(0,t.createElement)("a",{href:"#",onClick:e=>(e=>{e.preventDefault(),c(!1===l&&p)})(e)},m)))},p=({value:e,limit:s,responses:n=[]})=>{let r="";return"object"==typeof n&&void 0!==n[e]&&(n=[...n[e].responses],s&&(n=n.splice(0,s)),r=n.map(((e,s)=>{const{profile:n,name:a,photo:r,role:i}=e;let{guests:l}=e;return l=l?" +"+l+" guest(s)":"",(0,t.createElement)("div",{key:s,className:"gp-rsvp-response__item"},(0,t.createElement)("figure",{className:"gp-rsvp-response__member-avatar"},(0,t.createElement)("a",{href:n},(0,t.createElement)("img",{alt:a,title:a,src:r}))),(0,t.createElement)("div",{className:"gp-rsvp-response__member-info"},(0,t.createElement)("div",{className:"gp-rsvp-response__member-name"},(0,t.createElement)("a",{href:n},a)),(0,t.createElement)("div",{className:"gp-rsvp-response__member-role"},i),(0,t.createElement)("small",{className:"gp-rsvp-response__guests"},l)))}))),(0,t.createElement)(t.Fragment,null,"attending"===e&&0===r.length&&(0,t.createElement)("div",{className:"gp-rsvp-response__no-responses"},!1===i("has_event_past")?(0,a.__)("No one is attending this event yet.","gatherpress"):(0,a.__)("No one went to this event.","gatherpress")),r)},m=({items:e,activeValue:s,limit:n=!1})=>{const a=i("post_id"),[l,o]=(0,t.useState)(i("responses"));r({setRsvpResponse:o},a);const c=e.map(((e,a)=>{const{value:r}=e;return r===s?(0,t.createElement)("div",{key:a,className:"gp-rsvp-response__items",id:`gp-rsvp-${r}`,role:"tabpanel","aria-labelledby":`gp-rsvp-${r}-tab`},(0,t.createElement)(p,{value:r,limit:n,responses:l})):""}));return(0,t.createElement)("div",{className:"gp-rsvp-response__content"},c)},v=()=>{const e=i("has_event_past"),s=[{title:!1===e?(0,a.__)("Attending","gatherpress"):(0,a.__)("Went","gatherpress"),value:"attending"},{title:!1===e?(0,a.__)("Waiting List","gatherpress"):(0,a.__)("Wait Listed","gatherpress"),value:"waiting_list"},{title:!1===e?(0,a.__)("Not Attending","gatherpress"):(0,a.__)("Didn't Go","gatherpress"),value:"not_attending"}],[n,l]=(0,t.useState)("attending"),[o,p]=(0,t.useState)(8);return r({setRsvpStatus:l},i("post_id")),(0,t.createElement)("div",{className:"gp-rsvp-response"},(0,t.createElement)(c,{items:s,activeValue:n,onTitleClick:(e,t)=>{e.preventDefault(),l(t)},rsvpLimit:o,setRsvpLimit:p,defaultLimit:8}),(0,t.createElement)(m,{items:s,activeValue:n,limit:o}))};n()((()=>{const e=document.querySelectorAll('[data-gp_block_name="rsvp-response"]');for(let s=0;s<e.length;s++)(0,t.createRoot)(e[s]).render((0,t.createElement)(v,null))}))})();