!function(){"use strict";var e={n:function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,{a:n}),n},d:function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t=window.wp.blocks,n=window.wp.element,r=window.moment,o=e.n(r),a=window.wp.blockEditor,s=window.wp.components,i=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"gatherpress/event-date","version":"0.1.1","title":"Event Date","category":"gatherpress","icon":"clock","example":{},"description":"The block with event dates.","attributes":{"blockId":{"type":"string"}},"supports":{"html":false},"textdomain":"gatherpress","editorScript":"file:./index.js","style":"file:./style-index.css"}');(0,t.registerBlockType)(i,{edit:()=>{const e=(0,a.useBlockProps)(),[t,r]=(0,n.useState)(GatherPress.event_datetime.datetime_start),[i,l]=(0,n.useState)(GatherPress.event_datetime.datetime_end);return function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];for(const[n,r]of Object.entries(e)){let e=n;t&&(e+=t),addEventListener(e,(e=>{r(e.detail)}),!1)}}({setDateTimeEnd:l,setDateTimeStart:r}),(0,n.createElement)("div",e,(0,n.createElement)(s.Flex,{justify:"normal",align:"flex-start",gap:"4"},(0,n.createElement)(s.FlexItem,{display:"flex",className:"gp-event-date__icon"},(0,n.createElement)(s.Icon,{icon:"clock"})),(0,n.createElement)(s.FlexItem,null,((e,t)=>{const n="dddd, MMMM D, YYYY",r=GatherPress.event_datetime.timezone;let a=n+" h:mm A z";return o()(e).format(n)===o()(t).format(n)&&(a="h:mm A z"),o()(e).format("dddd, MMMM D, YYYY h:mm A")+" to "+o().tz(t,r).format(a)})(t,i))))},save:()=>null})}();