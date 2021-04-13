(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1196:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ion_refresher",(function(){return Refresher})),__webpack_require__.d(__webpack_exports__,"ion_refresher_content",(function(){return RefresherContent}));var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7),_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(54),_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(55),_cubic_bezier_eea9a7a9_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(374),_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(41),_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1220),_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(22),_index_9e3fe806_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(375),_spinner_configs_cd7845af_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(1226),createBaseAnimation=function(e){var r=e.querySelector("ion-spinner"),t=r.shadowRoot.querySelector("circle"),n=e.querySelector(".spinner-arrow-container"),i=e.querySelector(".arrow-container"),s=i?i.querySelector("ion-icon"):null,o=Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_6__.a)().duration(1e3).easing("ease-out"),a=Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_6__.a)().addElement(n).keyframes([{offset:0,opacity:"0.3"},{offset:.45,opacity:"0.3"},{offset:.55,opacity:"1"},{offset:1,opacity:"1"}]),f=Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_6__.a)().addElement(t).keyframes([{offset:0,strokeDasharray:"1px, 200px"},{offset:.2,strokeDasharray:"1px, 200px"},{offset:.55,strokeDasharray:"100px, 200px"},{offset:1,strokeDasharray:"100px, 200px"}]),l=Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_6__.a)().addElement(r).keyframes([{offset:0,transform:"rotate(-90deg)"},{offset:1,transform:"rotate(210deg)"}]);if(i&&s){var h=Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_6__.a)().addElement(i).keyframes([{offset:0,transform:"rotate(0deg)"},{offset:.3,transform:"rotate(0deg)"},{offset:.55,transform:"rotate(280deg)"},{offset:1,transform:"rotate(400deg)"}]),c=Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_6__.a)().addElement(s).keyframes([{offset:0,transform:"translateX(2px) scale(0)"},{offset:.3,transform:"translateX(2px) scale(0)"},{offset:.55,transform:"translateX(-1.5px) scale(1)"},{offset:1,transform:"translateX(-1.5px) scale(1)"}]);o.addAnimation([h,c])}return o.addAnimation([a,f,l])},createScaleAnimation=function(e){var r=e.clientHeight,t=Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_6__.a)().addElement(e).keyframes([{offset:0,transform:"scale(0) translateY(-"+(r+20)+"px)"},{offset:1,transform:"scale(1) translateY(100px)"}]);return createBaseAnimation(e).addAnimation([t])},createTranslateAnimation=function(e){var r=e.clientHeight,t=Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_6__.a)().addElement(e).keyframes([{offset:0,transform:"translateY(-"+(r+20)+"px)"},{offset:1,transform:"translateY(100px)"}]);return createBaseAnimation(e).addAnimation([t])},setSpinnerOpacity=function(e,r){e.style.setProperty("opacity",r.toString())},translateElement=function(e,r){if(!e)return Promise.resolve();var t=transitionEndAsync(e,200);return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__.f)((function(){e.style.setProperty("transition","0.2s all ease-out"),void 0===r?e.style.removeProperty("transform"):e.style.setProperty("transform","translate3d(0px, "+r+", 0px)")})),t},shouldUseNativeRefresher=function(e,r){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(void 0,void 0,void 0,(function(){var t,n,i;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(s){switch(s.label){case 0:return(t=e.querySelector("ion-refresher-content"))?[4,new Promise((function(e){return Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__.c)(t,e)}))]:[2,Promise.resolve(!1)];case 1:return s.sent(),n=e.querySelector("ion-refresher-content .refresher-pulling ion-spinner"),i=e.querySelector("ion-refresher-content .refresher-refreshing ion-spinner"),[2,null!==n&&null!==i&&("ios"===r&&Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__.a)("mobile")&&void 0!==e.style.webkitOverflowScrolling||"md"===r)]}}))}))},transitionEndAsync=function(e,r){return void 0===r&&(r=0),new Promise((function(t){transitionEnd(e,r,t)}))},transitionEnd=function(e,r,t){var n,i;void 0===r&&(r=0);var s={passive:!0},a=function(){n&&n()},f=function(r){void 0!==r&&e!==r.target||(a(),t(r))};return e&&(e.addEventListener("webkitTransitionEnd",f,s),e.addEventListener("transitionend",f,s),i=setTimeout(f,r+500),n=function(){i&&(clearTimeout(i),i=void 0),e.removeEventListener("webkitTransitionEnd",f,s),e.removeEventListener("transitionend",f,s)}),a},Refresher=function(){function e(e){Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__.o)(this,e),this.ionRefresh=Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__.g)(this,"ionRefresh",7),this.ionPull=Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__.g)(this,"ionPull",7),this.ionStart=Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__.g)(this,"ionStart",7),this.appliedStyles=!1,this.didStart=!1,this.progress=0,this.pointerDown=!1,this.needsCompletion=!1,this.didRefresh=!1,this.lastVelocityY=0,this.animations=[],this.nativeRefresher=!1,this.state=1,this.pullMin=60,this.pullMax=this.pullMin+60,this.closeDuration="280ms",this.snapbackDuration="280ms",this.pullFactor=1,this.disabled=!1}return e.prototype.disabledChanged=function(){this.gesture&&this.gesture.enable(!this.disabled)},e.prototype.checkNativeRefresher=function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(this,void 0,void 0,(function(){var e,r;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(t){switch(t.label){case 0:return[4,shouldUseNativeRefresher(this.el,Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__.b)(this))];case 1:return(e=t.sent())&&!this.nativeRefresher?(r=this.el.closest("ion-content"),this.setupNativeRefresher(r)):e||this.destroyNativeRefresher(),[2]}}))}))},e.prototype.destroyNativeRefresher=function(){this.scrollEl&&this.scrollListenerCallback&&(this.scrollEl.removeEventListener("scroll",this.scrollListenerCallback),this.scrollListenerCallback=void 0),this.nativeRefresher=!1},e.prototype.resetNativeRefresher=function(e,r){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(this,void 0,void 0,(function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(t){switch(t.label){case 0:return this.state=r,"ios"!==Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__.b)(this)?[3,2]:[4,translateElement(e,void 0)];case 1:return t.sent(),[3,4];case 2:return[4,transitionEndAsync(this.el.querySelector(".refresher-refreshing-icon"),200)];case 3:t.sent(),t.label=4;case 4:return this.didRefresh=!1,this.needsCompletion=!1,this.pointerDown=!1,this.animations.forEach((function(e){return e.destroy()})),this.animations=[],this.progress=0,this.state=1,[2]}}))}))},e.prototype.setupiOSNativeRefresher=function(e,r){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(this,void 0,void 0,(function(){var t,n,i,s,o=this;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(a){switch(a.label){case 0:return this.elementToTransform=this.scrollEl,t=e.shadowRoot.querySelectorAll("svg"),n=.16*this.scrollEl.clientHeight,i=t.length,Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__.f)((function(){return t.forEach((function(e){return e.style.setProperty("animation","none")}))})),this.scrollListenerCallback=function(){(o.pointerDown||1!==o.state)&&Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__.h)((function(){var s=o.scrollEl.scrollTop,a=o.el.clientHeight;if(s>0){if(8===o.state){var f=Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__.j)(0,s/(.5*a),1);return void Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__.f)((function(){return setSpinnerOpacity(r,1-f)}))}Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__.f)((function(){return setSpinnerOpacity(e,0)}))}else{o.pointerDown&&(o.didStart||(o.didStart=!0,o.ionStart.emit()),o.pointerDown&&o.ionPull.emit());var l=Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__.j)(0,Math.abs(s)/a,.99),h=o.progress=Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__.j)(0,(Math.abs(s)-30)/n,1),c=Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__.j)(0,Math.floor(h*i),i-1);8===o.state||c===i-1?(o.pointerDown&&function(e,r){Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__.f)((function(){e.style.setProperty("--refreshing-rotation-duration",r>=1?"0.5s":"2s"),e.style.setProperty("opacity","1")}))}(r,o.lastVelocityY),o.didRefresh||(o.beginRefresh(),o.didRefresh=!0,Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_5__.d)({style:"light"}),o.pointerDown||translateElement(o.elementToTransform,a+"px"))):(o.state=2,function(e,r,t,n){Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__.f)((function(){setSpinnerOpacity(e,t),r.forEach((function(e,r){return e.style.setProperty("opacity",r<=n?"0.99":"0")}))}))}(e,t,l,c))}}))},this.scrollEl.addEventListener("scroll",this.scrollListenerCallback),s=this,[4,Promise.resolve().then(__webpack_require__.bind(null,373))];case 1:return s.gesture=a.sent().createGesture({el:this.scrollEl,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:5,onStart:function(){o.pointerDown=!0,o.didRefresh||translateElement(o.elementToTransform,"0px"),0===n&&(n=.16*o.scrollEl.clientHeight)},onMove:function(e){o.lastVelocityY=e.velocityY},onEnd:function(){o.pointerDown=!1,o.didStart=!1,o.needsCompletion?(o.resetNativeRefresher(o.elementToTransform,32),o.needsCompletion=!1):o.didRefresh&&Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__.h)((function(){return translateElement(o.elementToTransform,o.el.clientHeight+"px")}))}}),this.disabledChanged(),[2]}}))}))},e.prototype.setupMDNativeRefresher=function(e,r,t){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(this,void 0,void 0,(function(){var n,i,s,o,a=this;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(f){switch(f.label){case 0:return n=Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__.g)(r).querySelector("circle"),i=this.el.querySelector("ion-refresher-content .refresher-pulling-icon"),s=Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__.g)(t).querySelector("circle"),null!==n&&null!==s&&Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__.f)((function(){n.style.setProperty("animation","none"),t.style.setProperty("animation-delay","-655ms"),s.style.setProperty("animation-delay","-655ms")})),o=this,[4,Promise.resolve().then(__webpack_require__.bind(null,373))];case 1:return o.gesture=f.sent().createGesture({el:this.scrollEl,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:5,canStart:function(){return 8!==a.state&&32!==a.state&&0===a.scrollEl.scrollTop},onStart:function(e){e.data={animation:void 0,didStart:!1,cancelled:!1},a.state=2},onMove:function(r){if(r.velocityY<0&&0===a.progress&&!r.data.didStart||r.data.cancelled)r.data.cancelled=!0;else{if(!r.data.didStart){r.data.didStart=!0,Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__.f)((function(){return a.scrollEl.style.setProperty("--overflow","hidden")}));var n=function(e,r){return"scale"===e?createScaleAnimation(r):createTranslateAnimation(r)}(function(e){var r=e.previousElementSibling;return null!==r&&"ION-HEADER"===r.tagName?"translate":"scale"}(e),i);return r.data.animation=n,n.progressStart(!1,0),a.ionStart.emit(),void a.animations.push(n)}a.progress=Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__.j)(0,r.deltaY/180*.5,1),r.data.animation.progressStep(a.progress),a.ionPull.emit()}},onEnd:function(e){if(e.data.didStart){if(Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__.f)((function(){return a.scrollEl.style.removeProperty("--overflow")})),a.progress<=.4)return a.gesture.enable(!1),void e.data.animation.progressEnd(0,a.progress,500).onFinish((function(){a.animations.forEach((function(e){return e.destroy()})),a.animations=[],a.gesture.enable(!0),a.state=1}));var r=Object(_cubic_bezier_eea9a7a9_js__WEBPACK_IMPORTED_MODULE_3__.a)([0,0],[0,0],[1,1],[1,1],a.progress)[0],t=function(e){return Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_6__.a)().duration(125).addElement(e).fromTo("transform","translateY(var(--ion-pulling-refresher-translate, 100px))","translateY(0px)")}(i);a.animations.push(t),Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__.f)((function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(a,void 0,void 0,(function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(n){switch(n.label){case 0:return i.style.setProperty("--ion-pulling-refresher-translate",100*r+"px"),e.data.animation.progressEnd(),[4,t.play()];case 1:return n.sent(),this.beginRefresh(),e.data.animation.destroy(),[2]}}))}))}))}}}),this.disabledChanged(),[2]}}))}))},e.prototype.setupNativeRefresher=function(e){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(this,void 0,void 0,(function(){var r,t;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(n){return this.scrollListenerCallback||!e||this.nativeRefresher||!this.scrollEl||(this.setCss(0,"",!1,""),this.nativeRefresher=!0,r=this.el.querySelector("ion-refresher-content .refresher-pulling ion-spinner"),t=this.el.querySelector("ion-refresher-content .refresher-refreshing ion-spinner"),"ios"===Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__.b)(this)?this.setupiOSNativeRefresher(r,t):this.setupMDNativeRefresher(e,r,t)),[2]}))}))},e.prototype.componentDidUpdate=function(){this.checkNativeRefresher()},e.prototype.connectedCallback=function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(this,void 0,void 0,(function(){var e,r,t,n=this;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(i){switch(i.label){case 0:return"fixed"!==this.el.getAttribute("slot")?(console.error('Make sure you use: <ion-refresher slot="fixed">'),[2]):(e=this.el.closest("ion-content"))?[4,new Promise((function(r){return Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__.c)(e,r)}))]:(console.error("<ion-refresher> must be used inside an <ion-content>"),[2]);case 1:return i.sent(),r=this,[4,e.getScrollElement()];case 2:return r.scrollEl=i.sent(),this.backgroundContentEl=Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__.g)(e).querySelector("#background-content"),[4,shouldUseNativeRefresher(this.el,Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__.b)(this))];case 3:return i.sent()?(this.setupNativeRefresher(e),[3,6]):[3,4];case 4:return t=this,[4,Promise.resolve().then(__webpack_require__.bind(null,373))];case 5:t.gesture=i.sent().createGesture({el:e,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:20,passive:!1,canStart:function(){return n.canStart()},onStart:function(){return n.onStart()},onMove:function(e){return n.onMove(e)},onEnd:function(){return n.onEnd()}}),this.disabledChanged(),i.label=6;case 6:return[2]}}))}))},e.prototype.disconnectedCallback=function(){this.destroyNativeRefresher(),this.scrollEl=void 0,this.gesture&&(this.gesture.destroy(),this.gesture=void 0)},e.prototype.complete=function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(this,void 0,void 0,(function(){var e=this;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(r){return this.nativeRefresher?(this.needsCompletion=!0,this.pointerDown||Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__.q)((function(){return Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__.q)((function(){return e.resetNativeRefresher(e.elementToTransform,32)}))}))):this.close(32,"120ms"),[2]}))}))},e.prototype.cancel=function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(this,void 0,void 0,(function(){var e=this;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(r){return this.nativeRefresher?this.pointerDown||Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__.q)((function(){return Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__.q)((function(){return e.resetNativeRefresher(e.elementToTransform,16)}))})):this.close(16,""),[2]}))}))},e.prototype.getProgress=function(){return Promise.resolve(this.progress)},e.prototype.canStart=function(){return!!this.scrollEl&&(1===this.state&&!(this.scrollEl.scrollTop>0))},e.prototype.onStart=function(){this.progress=0,this.state=1},e.prototype.onMove=function(e){if(this.scrollEl){var r=e.event;if(!(r.touches&&r.touches.length>1)&&0==(56&this.state)){var t=Number.isNaN(this.pullFactor)||this.pullFactor<0?1:this.pullFactor,n=e.deltaY*t;if(n<=0)return this.progress=0,this.state=1,this.appliedStyles?void this.setCss(0,"",!1,""):void 0;if(1===this.state){if(this.scrollEl.scrollTop>0)return void(this.progress=0);this.state=2}if(r.cancelable&&r.preventDefault(),this.setCss(n,"0ms",!0,""),0!==n){var s=this.pullMin;this.progress=n/s,this.didStart||(this.didStart=!0,this.ionStart.emit()),this.ionPull.emit(),n<s?this.state=2:n>this.pullMax?this.beginRefresh():this.state=4}else this.progress=0}}},e.prototype.onEnd=function(){4===this.state?this.beginRefresh():2===this.state&&this.cancel()},e.prototype.beginRefresh=function(){this.state=8,this.setCss(this.pullMin,this.snapbackDuration,!0,""),this.ionRefresh.emit({complete:this.complete.bind(this)})},e.prototype.close=function(e,r){var t=this;setTimeout((function(){t.state=1,t.progress=0,t.didStart=!1,t.setCss(0,"0ms",!1,"")}),600),this.state=e,this.setCss(0,this.closeDuration,!0,r)},e.prototype.setCss=function(e,r,t,n){var i=this;this.nativeRefresher||(this.appliedStyles=e>0,Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__.f)((function(){if(i.scrollEl&&i.backgroundContentEl){var s=i.scrollEl.style,o=i.backgroundContentEl.style;s.transform=o.transform=e>0?"translateY("+e+"px) translateZ(0px)":"",s.transitionDuration=o.transitionDuration=r,s.transitionDelay=o.transitionDelay=n,s.overflow=t?"hidden":""}})))},e.prototype.render=function(){var e,r=Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__.b)(this);return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__.j)(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__.c,{slot:"fixed",class:(e={},e[r]=!0,e["refresher-"+r]=!0,e["refresher-native"]=this.nativeRefresher,e["refresher-active"]=1!==this.state,e["refresher-pulling"]=2===this.state,e["refresher-ready"]=4===this.state,e["refresher-refreshing"]=8===this.state,e["refresher-cancelling"]=16===this.state,e["refresher-completing"]=32===this.state,e)})},Object.defineProperty(e.prototype,"el",{get:function(){return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__.k)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"watchers",{get:function(){return{disabled:["disabledChanged"]}},enumerable:!1,configurable:!0}),e}();Refresher.style={ios:"ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}[dir=rtl] ion-refresher,:host-context([dir=rtl]) ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}[dir=rtl] .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-ios .refresher-pulling-icon,.refresher-ios .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-ios .refresher-pulling-text,.refresher-ios .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-lines-ios line,.refresher-ios .refresher-refreshing .spinner-lines-small-ios line,.refresher-ios .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-bubbles circle,.refresher-ios .refresher-refreshing .spinner-circles circle,.refresher-ios .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native ion-spinner{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.refresher-native .refresher-refreshing ion-spinner{--refreshing-rotation-duration:2s;display:none;-webkit-animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards;animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards}.refresher-native .refresher-refreshing{display:none;-webkit-animation:250ms linear refresher-pop forwards;animation:250ms linear refresher-pop forwards}.refresher-native.refresher-refreshing .refresher-pulling ion-spinner,.refresher-native.refresher-completing .refresher-pulling ion-spinner{display:none}.refresher-native.refresher-refreshing .refresher-refreshing ion-spinner,.refresher-native.refresher-completing .refresher-refreshing ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-pulling ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-refreshing ion-spinner{display:none}@-webkit-keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}",md:"ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}[dir=rtl] ion-refresher,:host-context([dir=rtl]) ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}[dir=rtl] .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-md .refresher-pulling-icon,.refresher-md .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-md .refresher-pulling-text,.refresher-md .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-lines-md line,.refresher-md .refresher-refreshing .spinner-lines-small-md line,.refresher-md .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-bubbles circle,.refresher-md .refresher-refreshing .spinner-circles circle,.refresher-md .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;width:24px;height:24px;color:var(--ion-color-primary, #3880ff)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native ion-spinner{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}ion-refresher.refresher-native .spinner-arrow-container{display:inherit}ion-refresher.refresher-native .arrow-container{display:block;position:absolute;width:24px;height:24px}ion-refresher.refresher-native .arrow-container ion-icon{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;left:0;right:0;bottom:-4px;position:absolute;color:var(--ion-color-primary, #3880ff);font-size:12px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .arrow-container ion-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}ion-refresher.refresher-native.refresher-pulling ion-refresher-content .refresher-pulling,ion-refresher.refresher-native.refresher-ready ion-refresher-content .refresher-pulling{display:-ms-flexbox;display:flex}ion-refresher.refresher-native.refresher-refreshing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-completing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-cancelling ion-refresher-content .refresher-refreshing{display:-ms-flexbox;display:flex}ion-refresher.refresher-native .refresher-pulling-icon{-webkit-transform:translateY(calc(-100% - 10px));transform:translateY(calc(-100% - 10px))}ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;border-radius:100%;padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;display:-ms-flexbox;display:flex;border:1px solid var(--ion-color-step-200, #ececec);background:var(--ion-color-step-250, #ffffff);-webkit-box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1);box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}"};var RefresherContent=function(){function e(e){Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__.o)(this,e)}return e.prototype.componentWillLoad=function(){if(void 0===this.pullingIcon){var e=Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__.b)(this),r=void 0!==this.el.style.webkitOverflowScrolling?"lines":"arrow-down";this.pullingIcon=_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__.c.get("refreshingIcon","ios"===e&&Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__.a)("mobile")?_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__.c.get("spinner",r):"circular")}if(void 0===this.refreshingSpinner){e=Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__.b)(this);this.refreshingSpinner=_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__.c.get("refreshingSpinner",_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__.c.get("spinner","ios"===e?"lines":"circular"))}},e.prototype.render=function(){var e=this.pullingIcon,r=null!=e&&void 0!==_spinner_configs_cd7845af_js__WEBPACK_IMPORTED_MODULE_8__.a[e],t=Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__.b)(this);return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__.j)(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__.c,{class:t},Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__.j)("div",{class:"refresher-pulling"},this.pullingIcon&&r&&Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__.j)("div",{class:"refresher-pulling-icon"},Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__.j)("div",{class:"spinner-arrow-container"},Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__.j)("ion-spinner",{name:this.pullingIcon,paused:!0}),"md"===t&&"circular"===this.pullingIcon&&Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__.j)("div",{class:"arrow-container"},Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__.j)("ion-icon",{name:"caret-back-sharp"})))),this.pullingIcon&&!r&&Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__.j)("div",{class:"refresher-pulling-icon"},Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__.j)("ion-icon",{icon:this.pullingIcon,lazy:!1})),this.pullingText&&Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__.j)("div",{class:"refresher-pulling-text",innerHTML:Object(_index_9e3fe806_js__WEBPACK_IMPORTED_MODULE_7__.a)(this.pullingText)})),Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__.j)("div",{class:"refresher-refreshing"},this.refreshingSpinner&&Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__.j)("div",{class:"refresher-refreshing-icon"},Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__.j)("ion-spinner",{name:this.refreshingSpinner})),this.refreshingText&&Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__.j)("div",{class:"refresher-refreshing-text",innerHTML:Object(_index_9e3fe806_js__WEBPACK_IMPORTED_MODULE_7__.a)(this.refreshingText)})))},Object.defineProperty(e.prototype,"el",{get:function(){return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__.k)(this)},enumerable:!1,configurable:!0}),e}()},1220:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return hapticSelectionStart})),__webpack_require__.d(__webpack_exports__,"b",(function(){return hapticSelectionChanged})),__webpack_require__.d(__webpack_exports__,"c",(function(){return hapticSelection})),__webpack_require__.d(__webpack_exports__,"d",(function(){return hapticImpact})),__webpack_require__.d(__webpack_exports__,"e",(function(){return hapticSelectionEnd}));var HapticEngine={getEngine:function(){var t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available:function(){return!!this.getEngine()},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){return!!window.Capacitor},impact:function(t){var i=this.getEngine();if(i){var n=this.isCapacitor()?t.style.toUpperCase():t.style;i.impact({style:n})}},notification:function(t){var i=this.getEngine();if(i){var n=this.isCapacitor()?t.style.toUpperCase():t.style;i.notification({style:n})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},hapticSelection=function(){HapticEngine.selection()},hapticSelectionStart=function(){HapticEngine.selectionStart()},hapticSelectionChanged=function(){HapticEngine.selectionChanged()},hapticSelectionEnd=function(){HapticEngine.selectionEnd()},hapticImpact=function(t){HapticEngine.impact(t)}},1226:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return SPINNERS}));var SPINNERS={bubbles:{dur:1e3,circles:9,fn:function(r,n,e){var t=r*n/e-r+"ms",a=2*Math.PI*n/e;return{r:5,style:{top:9*Math.sin(a)+"px",left:9*Math.cos(a)+"px","animation-delay":t}}}},circles:{dur:1e3,circles:8,fn:function(r,n,e){var t=n/e,a=r*t-r+"ms",s=2*Math.PI*t;return{r:5,style:{top:9*Math.sin(s)+"px",left:9*Math.cos(s)+"px","animation-delay":a}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(r,n){return{r:6,style:{left:9-9*n+"px","animation-delay":-110*n+"ms"}}}},lines:{dur:1e3,lines:12,fn:function(r,n,e){return{y1:17,y2:29,style:{transform:"rotate("+(30*n+(n<6?180:-180))+"deg)","animation-delay":r*n/e-r+"ms"}}}},"lines-small":{dur:1e3,lines:12,fn:function(r,n,e){return{y1:12,y2:20,style:{transform:"rotate("+(30*n+(n<6?180:-180))+"deg)","animation-delay":r*n/e-r+"ms"}}}}}}}]);