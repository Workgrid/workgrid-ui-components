(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{1232:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"startInputShims",(function(){return startInputShims}));var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7),_helpers_cf6e85ee_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(42),cloneMap=new WeakMap,relocateInput=function(e,t,n,r){void 0===r&&(r=0),cloneMap.has(e)!==n&&(n?addClone(e,t,r):removeClone(e,t))},isFocused=function(e){return e===e.getRootNode().activeElement},addClone=function(e,t,n){var r=t.parentNode,o=t.cloneNode(!1);o.classList.add("cloned-input"),o.tabIndex=-1,r.appendChild(o),cloneMap.set(e,o);var i="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform="translate3d("+i+"px,"+n+"px,0) scale(0)"},removeClone=function(e,t){var n=cloneMap.get(e);n&&(cloneMap.delete(e),n.remove()),e.style.pointerEvents="",t.style.transform=""},SKIP_SELECTOR="input, textarea, [no-blur], [contenteditable]",calcScrollData=function(e,t,n,r){var o=e.top,a=e.bottom,i=t.top,l=i+15,c=.75*Math.min(t.bottom,r-n)-a,v=l-o,d=Math.round(c<0?-c:v>0?-v:0),f=Math.min(d,o-i),p=Math.abs(f)/.3;return{scrollAmount:f,scrollDuration:Math.min(400,Math.max(150,p)),scrollPadding:n,inputSafeY:4-(o-l)}},jsSetFocus=function(e,t,n,r,o){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(void 0,void 0,void 0,(function(){var a,i,u,l,s,c;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(v){switch(v.label){case 0:return n||r?(a=function(e,t,n){var r=e.closest("ion-item,[ion-item]")||e;return calcScrollData(r.getBoundingClientRect(),t.getBoundingClientRect(),n,e.ownerDocument.defaultView.innerHeight)}(e,n||r,o),n&&Math.abs(a.scrollAmount)<4?(t.focus(),[2]):(relocateInput(e,t,!0,a.inputSafeY),t.focus(),Object(_helpers_cf6e85ee_js__WEBPACK_IMPORTED_MODULE_1__.q)((function(){return e.click()})),"undefined"==typeof window?[3,3]:(u=function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(void 0,void 0,void 0,(function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(r){switch(r.label){case 0:return void 0!==i&&clearTimeout(i),window.removeEventListener("ionKeyboardDidShow",l),window.removeEventListener("ionKeyboardDidShow",u),n?[4,n.scrollByPoint(0,a.scrollAmount,a.scrollDuration)]:[3,2];case 1:r.sent(),r.label=2;case 2:return relocateInput(e,t,!1,a.inputSafeY),t.focus(),[2]}}))}))},l=function(){window.removeEventListener("ionKeyboardDidShow",l),window.addEventListener("ionKeyboardDidShow",u)},n?[4,n.getScrollElement()]:[3,2]))):[2];case 1:if(s=v.sent(),c=s.scrollHeight-s.clientHeight,a.scrollAmount>c-s.scrollTop)return"password"===t.type?(a.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",l)):window.addEventListener("ionKeyboardDidShow",u),i=setTimeout(u,1e3),[2];v.label=2;case 2:u(),v.label=3;case 3:return[2]}}))}))},hasPointerMoved=function(e,t,n){if(t&&n){var r=t.x-n.x,o=t.y-n.y;return r*r+o*o>e*e}return!1},setScrollPadding=function(e,t){if("INPUT"===e.tagName&&!(e.parentElement&&"ION-INPUT"===e.parentElement.tagName||e.parentElement&&e.parentElement.parentElement&&"ION-SEARCHBAR"===e.parentElement.parentElement.tagName)){var n=e.closest("ion-content");if(null!==n){var r=n.$ionPaddingTimer;r&&clearTimeout(r),t>0?n.style.setProperty("--keyboard-offset",t+"px"):n.$ionPaddingTimer=setTimeout((function(){n.style.setProperty("--keyboard-offset","0px")}),120)}}},startInputShims=function(e){var t=document,n=e.getNumber("keyboardHeight",290),r=e.getBoolean("scrollAssist",!0),o=e.getBoolean("hideCaretOnScroll",!0),a=e.getBoolean("inputBlurring",!0),i=e.getBoolean("scrollPadding",!0),u=Array.from(t.querySelectorAll("ion-input, ion-textarea")),l=new WeakMap,s=new WeakMap,c=function(e){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(void 0,void 0,void 0,(function(){var t,a,i,u,c;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(v){switch(v.label){case 0:return[4,new Promise((function(t){return Object(_helpers_cf6e85ee_js__WEBPACK_IMPORTED_MODULE_1__.c)(e,t)}))];case 1:return v.sent(),t=e.shadowRoot||e,a=t.querySelector("input")||t.querySelector("textarea"),i=e.closest("ion-content"),u=i?null:e.closest("ion-footer"),a?(i&&o&&!l.has(e)&&(c=function(e,t,n){if(!n||!t)return function(){};var r=function(n){isFocused(t)&&relocateInput(e,t,n)},o=function(){return relocateInput(e,t,!1)},a=function(){return r(!0)},i=function(){return r(!1)};return Object(_helpers_cf6e85ee_js__WEBPACK_IMPORTED_MODULE_1__.a)(n,"ionScrollStart",a),Object(_helpers_cf6e85ee_js__WEBPACK_IMPORTED_MODULE_1__.a)(n,"ionScrollEnd",i),t.addEventListener("blur",o),function(){Object(_helpers_cf6e85ee_js__WEBPACK_IMPORTED_MODULE_1__.b)(n,"ionScrollStart",a),Object(_helpers_cf6e85ee_js__WEBPACK_IMPORTED_MODULE_1__.b)(n,"ionScrollEnd",i),t.addEventListener("ionBlur",o)}}(e,a,i),l.set(e,c)),(i||u)&&r&&!s.has(e)&&(c=function(e,t,n,r,o){var a,i=function(e){a=Object(_helpers_cf6e85ee_js__WEBPACK_IMPORTED_MODULE_1__.p)(e)},u=function(i){if(a){var u=Object(_helpers_cf6e85ee_js__WEBPACK_IMPORTED_MODULE_1__.p)(i);hasPointerMoved(6,a,u)||isFocused(t)||(i.stopPropagation(),jsSetFocus(e,t,n,r,o))}};return e.addEventListener("touchstart",i,!0),e.addEventListener("touchend",u,!0),function(){e.removeEventListener("touchstart",i,!0),e.removeEventListener("touchend",u,!0)}}(e,a,i,u,n),s.set(e,c)),[2]):[2]}}))}))};a&&function(){var e=!0,t=!1,n=document,r=function(){t=!0},o=function(){e=!0},a=function(r){if(t)t=!1;else{var o=n.activeElement;if(o&&!o.matches(SKIP_SELECTOR)){var a=r.target;a!==o&&(a.matches(SKIP_SELECTOR)||a.closest(SKIP_SELECTOR)||(e=!1,setTimeout((function(){e||o.blur()}),50)))}}};Object(_helpers_cf6e85ee_js__WEBPACK_IMPORTED_MODULE_1__.a)(n,"ionScrollStart",r),n.addEventListener("focusin",o,!0),n.addEventListener("touchend",a,!1)}(),i&&function(e){var t=document,n=function(t){setScrollPadding(t.target,e)},r=function(e){setScrollPadding(e.target,0)};t.addEventListener("focusin",n),t.addEventListener("focusout",r)}(n);for(var d=0,f=u;d<f.length;d++){var m=f[d];c(m)}t.addEventListener("ionInputDidLoad",(function(e){c(e.detail)})),t.addEventListener("ionInputDidUnload",(function(e){!function(e){var t;o&&((t=l.get(e))&&t(),l.delete(e));r&&((t=s.get(e))&&t(),s.delete(e))}(e.detail)}))}}}]);
//# sourceMappingURL=43.d227337fe1d80a87b5b9.bundle.js.map