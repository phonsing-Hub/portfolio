"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/compute-scroll-into-view";
exports.ids = ["vendor-chunks/compute-scroll-into-view"];
exports.modules = {

/***/ "(ssr)/./node_modules/compute-scroll-into-view/dist/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/compute-scroll-into-view/dist/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   compute: () => (/* binding */ r)\n/* harmony export */ });\nconst t=t=>\"object\"==typeof t&&null!=t&&1===t.nodeType,e=(t,e)=>(!e||\"hidden\"!==t)&&(\"visible\"!==t&&\"clip\"!==t),n=(t,n)=>{if(t.clientHeight<t.scrollHeight||t.clientWidth<t.scrollWidth){const o=getComputedStyle(t,null);return e(o.overflowY,n)||e(o.overflowX,n)||(t=>{const e=(t=>{if(!t.ownerDocument||!t.ownerDocument.defaultView)return null;try{return t.ownerDocument.defaultView.frameElement}catch(t){return null}})(t);return!!e&&(e.clientHeight<t.scrollHeight||e.clientWidth<t.scrollWidth)})(t)}return!1},o=(t,e,n,o,l,r,i,s)=>r<t&&i>e||r>t&&i<e?0:r<=t&&s<=n||i>=e&&s>=n?r-t-o:i>e&&s<n||r<t&&s>n?i-e+l:0,l=t=>{const e=t.parentElement;return null==e?t.getRootNode().host||null:e},r=(e,r)=>{var i,s,d,h;if(\"undefined\"==typeof document)return[];const{scrollMode:c,block:f,inline:u,boundary:a,skipOverflowHiddenElements:g}=r,p=\"function\"==typeof a?a:t=>t!==a;if(!t(e))throw new TypeError(\"Invalid target\");const m=document.scrollingElement||document.documentElement,w=[];let W=e;for(;t(W)&&p(W);){if(W=l(W),W===m){w.push(W);break}null!=W&&W===document.body&&n(W)&&!n(document.documentElement)||null!=W&&n(W,g)&&w.push(W)}const b=null!=(s=null==(i=window.visualViewport)?void 0:i.width)?s:innerWidth,H=null!=(h=null==(d=window.visualViewport)?void 0:d.height)?h:innerHeight,{scrollX:y,scrollY:M}=window,{height:v,width:E,top:x,right:C,bottom:I,left:R}=e.getBoundingClientRect(),{top:T,right:B,bottom:F,left:V}=(t=>{const e=window.getComputedStyle(t);return{top:parseFloat(e.scrollMarginTop)||0,right:parseFloat(e.scrollMarginRight)||0,bottom:parseFloat(e.scrollMarginBottom)||0,left:parseFloat(e.scrollMarginLeft)||0}})(e);let k=\"start\"===f||\"nearest\"===f?x-T:\"end\"===f?I+F:x+v/2-T+F,D=\"center\"===u?R+E/2-V+B:\"end\"===u?C+B:R-V;const L=[];for(let t=0;t<w.length;t++){const e=w[t],{height:n,width:l,top:r,right:i,bottom:s,left:d}=e.getBoundingClientRect();if(\"if-needed\"===c&&x>=0&&R>=0&&I<=H&&C<=b&&x>=r&&I<=s&&R>=d&&C<=i)return L;const h=getComputedStyle(e),a=parseInt(h.borderLeftWidth,10),g=parseInt(h.borderTopWidth,10),p=parseInt(h.borderRightWidth,10),W=parseInt(h.borderBottomWidth,10);let T=0,B=0;const F=\"offsetWidth\"in e?e.offsetWidth-e.clientWidth-a-p:0,V=\"offsetHeight\"in e?e.offsetHeight-e.clientHeight-g-W:0,S=\"offsetWidth\"in e?0===e.offsetWidth?0:l/e.offsetWidth:0,X=\"offsetHeight\"in e?0===e.offsetHeight?0:n/e.offsetHeight:0;if(m===e)T=\"start\"===f?k:\"end\"===f?k-H:\"nearest\"===f?o(M,M+H,H,g,W,M+k,M+k+v,v):k-H/2,B=\"start\"===u?D:\"center\"===u?D-b/2:\"end\"===u?D-b:o(y,y+b,b,a,p,y+D,y+D+E,E),T=Math.max(0,T+M),B=Math.max(0,B+y);else{T=\"start\"===f?k-r-g:\"end\"===f?k-s+W+V:\"nearest\"===f?o(r,s,n,g,W+V,k,k+v,v):k-(r+n/2)+V/2,B=\"start\"===u?D-d-a:\"center\"===u?D-(d+l/2)+F/2:\"end\"===u?D-i+p+F:o(d,i,l,a,p+F,D,D+E,E);const{scrollLeft:t,scrollTop:h}=e;T=0===X?0:Math.max(0,Math.min(h+T/X,e.scrollHeight-n/X+V)),B=0===S?0:Math.max(0,Math.min(t+B/S,e.scrollWidth-l/S+F)),k+=h-T,D+=t-B}L.push({el:e,top:T,left:B})}return L};//# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY29tcHV0ZS1zY3JvbGwtaW50by12aWV3L2Rpc3QvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDBIQUEwSCwrREFBK0QsaUNBQWlDLGdEQUFnRCxhQUFhLDhEQUE4RCxJQUFJLGdEQUFnRCxTQUFTLGFBQWEsS0FBSyx3RUFBd0UsS0FBSyxTQUFTLHlHQUF5Ryx3QkFBd0IsNENBQTRDLFdBQVcsWUFBWSx5Q0FBeUMsTUFBTSxzRUFBc0UscUNBQXFDLCtDQUErQyxpRUFBaUUsUUFBUSxLQUFLLFdBQVcsRUFBRSxpQkFBaUIsVUFBVSxNQUFNLDJGQUEyRix5SkFBeUosb0JBQW9CLFNBQVMsK0NBQStDLDRCQUE0Qiw4QkFBOEIsTUFBTSxtQ0FBbUMsT0FBTyxpS0FBaUssS0FBSyx3R0FBd0csV0FBVyxZQUFZLFdBQVcsS0FBSyxjQUFjLCtDQUErQywyQkFBMkIsNEVBQTRFLGtLQUFrSyxZQUFZLDRPQUE0TyxzTUFBc00sS0FBSyxpTEFBaUwsTUFBTSx5QkFBeUIsR0FBRyxtSUFBbUksUUFBUSxrQkFBa0IsRUFBRSxVQUErQiIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcmZvbGlvLy4vbm9kZV9tb2R1bGVzL2NvbXB1dGUtc2Nyb2xsLWludG8tdmlldy9kaXN0L2luZGV4LmpzPzgxM2MiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdD10PT5cIm9iamVjdFwiPT10eXBlb2YgdCYmbnVsbCE9dCYmMT09PXQubm9kZVR5cGUsZT0odCxlKT0+KCFlfHxcImhpZGRlblwiIT09dCkmJihcInZpc2libGVcIiE9PXQmJlwiY2xpcFwiIT09dCksbj0odCxuKT0+e2lmKHQuY2xpZW50SGVpZ2h0PHQuc2Nyb2xsSGVpZ2h0fHx0LmNsaWVudFdpZHRoPHQuc2Nyb2xsV2lkdGgpe2NvbnN0IG89Z2V0Q29tcHV0ZWRTdHlsZSh0LG51bGwpO3JldHVybiBlKG8ub3ZlcmZsb3dZLG4pfHxlKG8ub3ZlcmZsb3dYLG4pfHwodD0+e2NvbnN0IGU9KHQ9PntpZighdC5vd25lckRvY3VtZW50fHwhdC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3KXJldHVybiBudWxsO3RyeXtyZXR1cm4gdC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LmZyYW1lRWxlbWVudH1jYXRjaCh0KXtyZXR1cm4gbnVsbH19KSh0KTtyZXR1cm4hIWUmJihlLmNsaWVudEhlaWdodDx0LnNjcm9sbEhlaWdodHx8ZS5jbGllbnRXaWR0aDx0LnNjcm9sbFdpZHRoKX0pKHQpfXJldHVybiExfSxvPSh0LGUsbixvLGwscixpLHMpPT5yPHQmJmk+ZXx8cj50JiZpPGU/MDpyPD10JiZzPD1ufHxpPj1lJiZzPj1uP3ItdC1vOmk+ZSYmczxufHxyPHQmJnM+bj9pLWUrbDowLGw9dD0+e2NvbnN0IGU9dC5wYXJlbnRFbGVtZW50O3JldHVybiBudWxsPT1lP3QuZ2V0Um9vdE5vZGUoKS5ob3N0fHxudWxsOmV9LHI9KGUscik9Pnt2YXIgaSxzLGQsaDtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgZG9jdW1lbnQpcmV0dXJuW107Y29uc3R7c2Nyb2xsTW9kZTpjLGJsb2NrOmYsaW5saW5lOnUsYm91bmRhcnk6YSxza2lwT3ZlcmZsb3dIaWRkZW5FbGVtZW50czpnfT1yLHA9XCJmdW5jdGlvblwiPT10eXBlb2YgYT9hOnQ9PnQhPT1hO2lmKCF0KGUpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIHRhcmdldFwiKTtjb25zdCBtPWRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnR8fGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCx3PVtdO2xldCBXPWU7Zm9yKDt0KFcpJiZwKFcpOyl7aWYoVz1sKFcpLFc9PT1tKXt3LnB1c2goVyk7YnJlYWt9bnVsbCE9VyYmVz09PWRvY3VtZW50LmJvZHkmJm4oVykmJiFuKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCl8fG51bGwhPVcmJm4oVyxnKSYmdy5wdXNoKFcpfWNvbnN0IGI9bnVsbCE9KHM9bnVsbD09KGk9d2luZG93LnZpc3VhbFZpZXdwb3J0KT92b2lkIDA6aS53aWR0aCk/czppbm5lcldpZHRoLEg9bnVsbCE9KGg9bnVsbD09KGQ9d2luZG93LnZpc3VhbFZpZXdwb3J0KT92b2lkIDA6ZC5oZWlnaHQpP2g6aW5uZXJIZWlnaHQse3Njcm9sbFg6eSxzY3JvbGxZOk19PXdpbmRvdyx7aGVpZ2h0OnYsd2lkdGg6RSx0b3A6eCxyaWdodDpDLGJvdHRvbTpJLGxlZnQ6Un09ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSx7dG9wOlQscmlnaHQ6Qixib3R0b206RixsZWZ0OlZ9PSh0PT57Y29uc3QgZT13aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0KTtyZXR1cm57dG9wOnBhcnNlRmxvYXQoZS5zY3JvbGxNYXJnaW5Ub3ApfHwwLHJpZ2h0OnBhcnNlRmxvYXQoZS5zY3JvbGxNYXJnaW5SaWdodCl8fDAsYm90dG9tOnBhcnNlRmxvYXQoZS5zY3JvbGxNYXJnaW5Cb3R0b20pfHwwLGxlZnQ6cGFyc2VGbG9hdChlLnNjcm9sbE1hcmdpbkxlZnQpfHwwfX0pKGUpO2xldCBrPVwic3RhcnRcIj09PWZ8fFwibmVhcmVzdFwiPT09Zj94LVQ6XCJlbmRcIj09PWY/SStGOngrdi8yLVQrRixEPVwiY2VudGVyXCI9PT11P1IrRS8yLVYrQjpcImVuZFwiPT09dT9DK0I6Ui1WO2NvbnN0IEw9W107Zm9yKGxldCB0PTA7dDx3Lmxlbmd0aDt0Kyspe2NvbnN0IGU9d1t0XSx7aGVpZ2h0Om4sd2lkdGg6bCx0b3A6cixyaWdodDppLGJvdHRvbTpzLGxlZnQ6ZH09ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtpZihcImlmLW5lZWRlZFwiPT09YyYmeD49MCYmUj49MCYmSTw9SCYmQzw9YiYmeD49ciYmSTw9cyYmUj49ZCYmQzw9aSlyZXR1cm4gTDtjb25zdCBoPWdldENvbXB1dGVkU3R5bGUoZSksYT1wYXJzZUludChoLmJvcmRlckxlZnRXaWR0aCwxMCksZz1wYXJzZUludChoLmJvcmRlclRvcFdpZHRoLDEwKSxwPXBhcnNlSW50KGguYm9yZGVyUmlnaHRXaWR0aCwxMCksVz1wYXJzZUludChoLmJvcmRlckJvdHRvbVdpZHRoLDEwKTtsZXQgVD0wLEI9MDtjb25zdCBGPVwib2Zmc2V0V2lkdGhcImluIGU/ZS5vZmZzZXRXaWR0aC1lLmNsaWVudFdpZHRoLWEtcDowLFY9XCJvZmZzZXRIZWlnaHRcImluIGU/ZS5vZmZzZXRIZWlnaHQtZS5jbGllbnRIZWlnaHQtZy1XOjAsUz1cIm9mZnNldFdpZHRoXCJpbiBlPzA9PT1lLm9mZnNldFdpZHRoPzA6bC9lLm9mZnNldFdpZHRoOjAsWD1cIm9mZnNldEhlaWdodFwiaW4gZT8wPT09ZS5vZmZzZXRIZWlnaHQ/MDpuL2Uub2Zmc2V0SGVpZ2h0OjA7aWYobT09PWUpVD1cInN0YXJ0XCI9PT1mP2s6XCJlbmRcIj09PWY/ay1IOlwibmVhcmVzdFwiPT09Zj9vKE0sTStILEgsZyxXLE0rayxNK2srdix2KTprLUgvMixCPVwic3RhcnRcIj09PXU/RDpcImNlbnRlclwiPT09dT9ELWIvMjpcImVuZFwiPT09dT9ELWI6byh5LHkrYixiLGEscCx5K0QseStEK0UsRSksVD1NYXRoLm1heCgwLFQrTSksQj1NYXRoLm1heCgwLEIreSk7ZWxzZXtUPVwic3RhcnRcIj09PWY/ay1yLWc6XCJlbmRcIj09PWY/ay1zK1crVjpcIm5lYXJlc3RcIj09PWY/byhyLHMsbixnLFcrVixrLGsrdix2KTprLShyK24vMikrVi8yLEI9XCJzdGFydFwiPT09dT9ELWQtYTpcImNlbnRlclwiPT09dT9ELShkK2wvMikrRi8yOlwiZW5kXCI9PT11P0QtaStwK0Y6byhkLGksbCxhLHArRixELEQrRSxFKTtjb25zdHtzY3JvbGxMZWZ0OnQsc2Nyb2xsVG9wOmh9PWU7VD0wPT09WD8wOk1hdGgubWF4KDAsTWF0aC5taW4oaCtUL1gsZS5zY3JvbGxIZWlnaHQtbi9YK1YpKSxCPTA9PT1TPzA6TWF0aC5tYXgoMCxNYXRoLm1pbih0K0IvUyxlLnNjcm9sbFdpZHRoLWwvUytGKSksays9aC1ULEQrPXQtQn1MLnB1c2goe2VsOmUsdG9wOlQsbGVmdDpCfSl9cmV0dXJuIEx9O2V4cG9ydHtyIGFzIGNvbXB1dGV9Oy8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/compute-scroll-into-view/dist/index.js\n");

/***/ })

};
;