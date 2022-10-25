!function(){"use strict";var e,t={973:function(){var e=window.wp.blocks,t=window.wp.element,n=(window.wp.i18n,window.wp.blockEditor),l=window.wp.components,a=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"gatherpress/time-template","version":"0.1.1","title":"GP Time Template","example":{},"category":"gatherpress","icon":{"background":"#29c8aa","foreground":"white","src":"flag"},"description":"Using Blocks to build a Block.","supports":{"html":false},"textdomain":"gatherpress","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}'),r=window.wp.plugins,i=window.wp.editPost,o=window.wp.primitives,c=(0,t.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(o.Path,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"})),s=(0,t.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(o.Path,{d:"M20.1 5.1L16.9 2 6.2 12.7l-1.3 4.4 4.5-1.3L20.1 5.1zM4 20.8h8v-1.5H4v1.5z"})),m=(0,t.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(o.Path,{fillRule:"evenodd",d:"M18.646 9H20V8l-1-.5L12 4 5 7.5 4 8v1h14.646zm-3-1.5L12 5.677 8.354 7.5h7.292zm-7.897 9.44v-6.5h-1.5v6.5h1.5zm5-6.5v6.5h-1.5v-6.5h1.5zm5 0v6.5h-1.5v-6.5h1.5zm2.252 8.81c0 .414-.334.75-.748.75H4.752a.75.75 0 010-1.5h14.5a.75.75 0 01.749.75z",clipRule:"evenodd"})),p=(0,t.createElement)(o.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,t.createElement)(o.Path,{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.5h14c.3 0 .5.2.5.5v8.4l-3-2.9c-.3-.3-.8-.3-1 0L11.9 14 9 12c-.3-.2-.6-.2-.8 0l-3.6 2.6V5c-.1-.3.1-.5.4-.5zm14 15H5c-.3 0-.5-.2-.5-.5v-2.4l4.1-3 3 1.9c.3.2.7.2.9-.1L16 12l3.5 3.4V19c0 .3-.2.5-.5.5z"}));const u=e=>{console.log("Selecting tab ",e)},d=()=>(0,t.createElement)(l.TabPanel,{className:"my-tab-panel",activeClass:"active-tab",onSelect:u,tabs:[{name:"primary",title:"Tab 1 Title",content:"Tab 1 Content is kind of like paragraph information.",className:"tab-one is-primary"},{name:"tab2",title:"Tab 2 Title",content:"Tab 2 Content is kind of like paragraph information.",className:"tab-two is-secondary",variant:"secondary"},{name:"tab3",title:"Tab 3 Title",content:"Tab 3 Content is kind of like paragraph information.",className:"tab-three is-secondary"}]},(e=>(0,t.createElement)(t.Fragment,null,(0,t.createElement)("h3",null,e.title),(0,t.createElement)("p",null,e.content))));(0,r.registerPlugin)("pbrocks-settings-sidebar",{render:()=>(0,t.createElement)(i.PluginSidebar,{name:"pbrocks-settings-sidebar",title:"GatherPress Event",icon:"nametag"},(0,t.createElement)(l.PanelBody,{title:"Settings PanelBody",icon:c,initialOpen:!1},(0,t.createElement)(l.PanelRow,null,"Settings PanelRow within PanelBody"),(0,t.createElement)(l.PanelRow,null,"Settings PanelRow within PanelBody")),(0,t.createElement)(l.PanelBody,{title:"Venue PanelBody",icon:s,initialOpen:!1},(0,t.createElement)(l.PanelRow,null,"Venue PanelRow within PanelBody")),(0,t.createElement)(l.PanelBody,{title:"Topics PanelBody",icon:m,initialOpen:!1},(0,t.createElement)(l.PanelRow,null,"Topics PanelRow within PanelBody")),(0,t.createElement)(l.PanelBody,{title:"Attendance PanelBody",icon:"palmtree",initialOpen:!1},(0,t.createElement)(l.PanelRow,null,"Attendance PanelRow within PanelBody")),(0,t.createElement)(l.PanelBody,{title:"Tabbed PanelBody",icon:p,initialOpen:!0},(0,t.createElement)(l.PanelRow,null,(0,t.createElement)(d,null))))}),(0,r.registerPlugin)("pbrocks-time-panel-plugin",{render:()=>(0,t.createElement)(i.PluginDocumentSettingPanel,{name:"pbrocks-time-panel",title:"PBrocks Time Panel",className:"pbrocks-time-panel"},(0,t.createElement)("div",null,"PBrocks Panel Contents"),(0,t.createElement)("div",null,"PBrocks Panel Contents")),icon:"palmtree"}),(0,e.registerBlockType)(a,{edit:function(){const e=(0,n.useBlockProps)();return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(n.InspectorControls,null,(0,t.createElement)(l.PanelBody,{title:e["data-title"],initialOpen:!0},(0,t.createElement)(l.PanelRow,null,(0,t.createElement)("h3",null,"Why useBlockProps:")),(0,t.createElement)(l.PanelRow,null,(0,t.createElement)("label",null,"id:")," ",e.id),(0,t.createElement)(l.PanelRow,null,(0,t.createElement)("label",null,"className:")," ",e.className),(0,t.createElement)(l.PanelRow,null,(0,t.createElement)("label",null,"aria-label:")," ",e["aria-label"]),(0,t.createElement)(l.PanelRow,null,(0,t.createElement)("label",null,"data-block:")," ",e["data-block"]),(0,t.createElement)(l.PanelRow,null,(0,t.createElement)("label",null,"data-type:")," ",e["data-type"]),(0,t.createElement)(l.PanelRow,null,(0,t.createElement)("label",null,"data-title:")," ",e["data-title"]))),(0,t.createElement)("div",e,(0,t.createElement)(n.InnerBlocks,{template:[["core/columns",{},[["core/column",{},[["gatherpress/initial-time",{}]]],["core/column",{},[["gatherpress/end-time",{}]]]]]]})))},save:function(e){let{attributes:l}=e;const a=n.useBlockProps.save();return(0,t.createElement)("div",a,(0,t.createElement)(n.InnerBlocks.Content,null))}})}},n={};function l(e){var a=n[e];if(void 0!==a)return a.exports;var r=n[e]={exports:{}};return t[e](r,r.exports,l),r.exports}l.m=t,e=[],l.O=function(t,n,a,r){if(!n){var i=1/0;for(m=0;m<e.length;m++){n=e[m][0],a=e[m][1],r=e[m][2];for(var o=!0,c=0;c<n.length;c++)(!1&r||i>=r)&&Object.keys(l.O).every((function(e){return l.O[e](n[c])}))?n.splice(c--,1):(o=!1,r<i&&(i=r));if(o){e.splice(m--,1);var s=a();void 0!==s&&(t=s)}}return t}r=r||0;for(var m=e.length;m>0&&e[m-1][2]>r;m--)e[m]=e[m-1];e[m]=[n,a,r]},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={70:0,478:0};l.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,r,i=n[0],o=n[1],c=n[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(a in o)l.o(o,a)&&(l.m[a]=o[a]);if(c)var m=c(l)}for(t&&t(n);s<i.length;s++)r=i[s],l.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return l.O(m)},n=self.webpackChunkgatherpress=self.webpackChunkgatherpress||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var a=l.O(void 0,[478],(function(){return l(973)}));a=l.O(a)}();