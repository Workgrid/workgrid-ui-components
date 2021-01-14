(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1185:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ion_route",(function(){return Route})),__webpack_require__.d(__webpack_exports__,"ion_route_redirect",(function(){return RouteRedirect})),__webpack_require__.d(__webpack_exports__,"ion_router",(function(){return Router})),__webpack_require__.d(__webpack_exports__,"ion_router_link",(function(){return RouterLink}));var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5),_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(50),_ionic_global_9d5c8ee3_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(53),_helpers_90f46169_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(61),_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1207),Route=function(){function e(e){Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_1__.o)(this,e),this.ionRouteDataChanged=Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_1__.g)(this,"ionRouteDataChanged",7),this.url=""}return e.prototype.onUpdate=function(e){this.ionRouteDataChanged.emit(e)},e.prototype.onComponentProps=function(e,t){if(e!==t){var r=e?Object.keys(e):[],n=t?Object.keys(t):[];if(r.length===n.length)for(var o=0,i=r;o<i.length;o++){var a=i[o];if(e[a]!==t[a])return void this.onUpdate(e)}else this.onUpdate(e)}},e.prototype.connectedCallback=function(){this.ionRouteDataChanged.emit()},Object.defineProperty(e,"watchers",{get:function(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}},enumerable:!1,configurable:!0}),e}(),RouteRedirect=function(){function e(e){Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_1__.o)(this,e),this.ionRouteRedirectChanged=Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_1__.g)(this,"ionRouteRedirectChanged",7)}return e.prototype.propDidChange=function(){this.ionRouteRedirectChanged.emit()},e.prototype.connectedCallback=function(){this.ionRouteRedirectChanged.emit()},Object.defineProperty(e,"watchers",{get:function(){return{from:["propDidChange"],to:["propDidChange"]}},enumerable:!1,configurable:!0}),e}(),generatePath=function(e){return"/"+e.filter((function(e){return e.length>0})).join("/")},parsePath=function(e){if(null==e)return[""];var r=e.split("?")[0].split("/").map((function(e){return e.trim()})).filter((function(e){return e.length>0}));return 0===r.length?[""]:r},writeNavState=function(e,t,r,n,o,i){return void 0===o&&(o=!1),Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(void 0,void 0,void 0,(function(){var a,u,s,h;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(c){switch(c.label){case 0:return c.trys.push([0,6,,7]),a=searchNavNode(e),n>=t.length||!a?[2,o]:[4,a.componentOnReady()];case 1:return c.sent(),u=t[n],[4,a.setRouteId(u.id,u.params,r,i)];case 2:return(s=c.sent()).changed&&(r="root",o=!0),[4,writeNavState(s.element,t,r,n+1,o,i)];case 3:return o=c.sent(),s.markVisible?[4,s.markVisible()]:[3,5];case 4:c.sent(),c.label=5;case 5:return[2,o];case 6:return h=c.sent(),console.error(h),[2,!1];case 7:return[2]}}))}))},readNavState=function(e){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(void 0,void 0,void 0,(function(){var t,r,n,o;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(i){switch(i.label){case 0:t=[],n=e,i.label=1;case 1:return(r=searchNavNode(n))?[4,r.getRouteId()]:[3,3];case 2:return(o=i.sent())?(n=o.element,o.element=void 0,t.push(o),[3,4]):[3,5];case 3:return[3,5];case 4:return[3,1];case 5:return[2,{ids:t,outlet:r}]}}))}))},QUERY=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",searchNavNode=function(e){if(e){if(e.matches(QUERY))return e;var t=e.querySelector(QUERY);return t||void 0}},routeRedirect=function(e,t){return t.find((function(t){return function(e,t){var r=t.from;if(void 0===t.to)return!1;if(r.length>e.length)return!1;for(var o=0;o<r.length;o++){var i=r[o];if("*"===i)return!0;if(i!==e[o])return!1}return r.length===e.length}(e,t)}))},matchesIDs=function(e,t){for(var r=Math.min(e.length,t.length),n=0;n<r&&e[n].toLowerCase()===t[n].id;n++);return n},matchesPath=function(e,t){for(var o,r=new RouterSegments(e),n=!1,i=0;i<t.length;i++){var a=t[i].path;if(""===a[0])n=!0;else{for(var u=0,s=a;u<s.length;u++){var h=s[u],c=r.next();if(":"===h[0]){if(""===c)return null;((o=o||[])[i]||(o[i]={}))[h.slice(1)]=c}else if(c!==h)return null}n=!1}}return!n||n===(""===r.next())?o?t.map((function(e,t){return{id:e.id,path:e.path,params:mergeParams(e.params,o[t]),beforeEnter:e.beforeEnter,beforeLeave:e.beforeLeave}})):t:null},mergeParams=function(e,t){return!e&&t?t:e&&!t?e:e&&t?Object.assign(Object.assign({},e),t):void 0},routerPathToChain=function(e,t){for(var r=null,n=0,o=0,i=t;o<i.length;o++){var a=i[o],u=matchesPath(e,a);if(null!==u){var s=computePriority(u);s>n&&(n=s,r=u)}}return r},computePriority=function(e){for(var t=1,r=1,n=0,o=e;n<o.length;n++)for(var a=0,u=o[n].path;a<u.length;a++){var s=u[a];":"===s[0]?t+=Math.pow(1,r):""!==s&&(t+=Math.pow(2,r)),r++}return t},RouterSegments=function(){function e(e){this.path=e.slice()}return e.prototype.next=function(){return this.path.length>0?this.path.shift():""},e}(),readRedirects=function(e){return Array.from(e.children).filter((function(e){return"ION-ROUTE-REDIRECT"===e.tagName})).map((function(e){var t=readProp(e,"to");return{from:parsePath(readProp(e,"from")),to:null==t?void 0:parsePath(t)}}))},readRoutes=function(e){return flattenRouterTree(readRouteNodes(e))},readRouteNodes=function(e,t){return void 0===t&&(t=e),Array.from(t.children).filter((function(e){return"ION-ROUTE"===e.tagName&&e.component})).map((function(t){var r=readProp(t,"component");if(null==r)throw new Error("component missing in ion-route");return{path:parsePath(readProp(t,"url")),id:r.toLowerCase(),params:t.componentProps,beforeLeave:t.beforeLeave,beforeEnter:t.beforeEnter,children:readRouteNodes(e,t)}}))},readProp=function(e,t){return t in e?e[t]:e.hasAttribute(t)?e.getAttribute(t):null},flattenRouterTree=function(e){for(var t=[],r=0,n=e;r<n.length;r++){var o=n[r];flattenNode([],t,o)}return t},flattenNode=function(e,t,r){var n=e.slice();if(n.push({id:r.id,path:r.path,params:r.params,beforeLeave:r.beforeLeave,beforeEnter:r.beforeEnter}),0!==r.children.length)for(var o=0,i=r.children;o<i.length;o++){var a=i[o];flattenNode(n,t,a)}else t.push(n)},Router=function(){function e(e){Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_1__.o)(this,e),this.ionRouteWillChange=Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_1__.g)(this,"ionRouteWillChange",7),this.ionRouteDidChange=Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_1__.g)(this,"ionRouteDidChange",7),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0}return e.prototype.componentWillLoad=function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(this,void 0,void 0,(function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(e){switch(e.label){case 0:return console.debug("[ion-router] router will load"),[4,searchNavNode(document.body)?Promise.resolve():new Promise((function(e){window.addEventListener("ionNavWillLoad",e,{once:!0})}))];case 1:return e.sent(),console.debug("[ion-router] found nav"),[4,this.onRoutesChanged()];case 2:return e.sent(),[2]}}))}))},e.prototype.componentDidLoad=function(){window.addEventListener("ionRouteRedirectChanged",Object(_helpers_90f46169_js__WEBPACK_IMPORTED_MODULE_3__.m)(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",Object(_helpers_90f46169_js__WEBPACK_IMPORTED_MODULE_3__.m)(this.onRoutesChanged.bind(this),100))},e.prototype.onPopState=function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(this,void 0,void 0,(function(){var e,t,r;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(n){switch(n.label){case 0:return e=this.historyDirection(),t=this.getPath(),[4,this.runGuards(t)];case 1:return!0!==(r=n.sent())?("object"==typeof r&&(t=parsePath(r.redirect)),[2,!1]):(console.debug("[ion-router] URL changed -> update nav",t,e),[2,this.writeNavStateRoot(t,e)])}}))}))},e.prototype.onBackButton=function(e){var t=this;e.detail.register(0,(function(e){t.back(),e()}))},e.prototype.canTransition=function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(this,void 0,void 0,(function(){var e;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(t){switch(t.label){case 0:return[4,this.runGuards()];case 1:return!0!==(e=t.sent())?"object"==typeof e?[2,e.redirect]:[2,!1]:[2,!0]}}))}))},e.prototype.push=function(e,t,r){return void 0===t&&(t="forward"),Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(this,void 0,void 0,(function(){var n,o,i;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(a){switch(a.label){case 0:return e.startsWith(".")&&(e=new URL(e,window.location.href).pathname),console.debug("[ion-router] URL pushed -> updating nav",e,t),n=parsePath(e),o=e.split("?")[1],[4,this.runGuards(n)];case 1:if(!0!==(i=a.sent())){if("object"!=typeof i)return[2,!1];n=parsePath(i.redirect),o=i.redirect.split("?")[1]}return this.setPath(n,t,o),[2,this.writeNavStateRoot(n,t,r)]}}))}))},e.prototype.back=function(){return window.history.back(),Promise.resolve(this.waitPromise)},e.prototype.printDebug=function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(this,void 0,void 0,(function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(e){return console.debug("CURRENT PATH",this.getPath()),console.debug("PREVIOUS PATH",this.previousPath),function(e){console.group("[ion-core] ROUTES["+e.length+"]");for(var t=function(e){var t=[];e.forEach((function(e){return t.push.apply(t,e.path)}));var r=e.map((function(e){return e.id}));console.debug("%c "+generatePath(t),"font-weight: bold; padding-left: 20px","=>\t","("+r.join(", ")+")")},r=0,n=e;r<n.length;r++){t(n[r])}console.groupEnd()}(readRoutes(this.el)),function(e){console.group("[ion-core] REDIRECTS["+e.length+"]");for(var t=0,r=e;t<r.length;t++){var n=r[t];n.to&&console.debug("FROM: ","$c "+generatePath(n.from),"font-weight: bold"," TO: ","$c "+generatePath(n.to),"font-weight: bold")}console.groupEnd()}(readRedirects(this.el)),[2]}))}))},e.prototype.navChanged=function(e){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(this,void 0,void 0,(function(){var t,r,n,o,i,a;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(u){switch(u.label){case 0:return this.busy?(console.warn("[ion-router] router is busy, navChanged was cancelled"),[2,!1]):[4,readNavState(window.document.body)];case 1:return t=u.sent(),r=t.ids,n=t.outlet,o=readRoutes(this.el),(i=function(e,t){for(var r=null,n=0,o=e.map((function(e){return e.id})),i=0,a=t;i<a.length;i++){var u=a[i],s=matchesIDs(o,u);s>n&&(r=u,n=s)}return r?r.map((function(t,r){return{id:t.id,path:t.path,params:mergeParams(t.params,e[r]&&e[r].params)}})):null}(r,o))?(a=function(e){for(var t=[],r=0,n=e;r<n.length;r++)for(var o=n[r],i=0,a=o.path;i<a.length;i++){var u=a[i];if(":"===u[0]){var s=o.params&&o.params[u.slice(1)];if(!s)return null;t.push(s)}else""!==u&&t.push(u)}return t}(i))?(console.debug("[ion-router] nav changed -> update URL",r,a),this.setPath(a,e),[4,this.safeWriteNavState(n,i,"root",a,null,r.length)]):(console.warn("[ion-router] router could not match path because some required param is missing"),[2,!1]):(console.warn("[ion-router] no matching URL for ",r.map((function(e){return e.id}))),[2,!1]);case 2:return u.sent(),[2,!0]}}))}))},e.prototype.onRedirectChanged=function(){var e=this.getPath();e&&routeRedirect(e,readRedirects(this.el))&&this.writeNavStateRoot(e,"root")},e.prototype.onRoutesChanged=function(){return this.writeNavStateRoot(this.getPath(),"root")},e.prototype.historyDirection=function(){var e=window;null===e.history.state&&(this.state++,e.history.replaceState(this.state,e.document.title,e.document.location&&e.document.location.href));var t=e.history.state,r=this.lastState;return this.lastState=t,t>r||t>=r&&r>0?"forward":t<r?"back":"root"},e.prototype.writeNavStateRoot=function(e,t,r){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(this,void 0,void 0,(function(){var n,o,i,a,u;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(s){return e?(n=readRedirects(this.el),o=routeRedirect(e,n),i=null,o&&(this.setPath(o.to,t),i=o.from,e=o.to),a=readRoutes(this.el),(u=routerPathToChain(e,a))?[2,this.safeWriteNavState(document.body,u,t,e,i,0,r)]:(console.error("[ion-router] the path does not match any route"),[2,!1])):(console.error("[ion-router] URL is not part of the routing set"),[2,!1])}))}))},e.prototype.safeWriteNavState=function(e,t,r,n,o,i,a){return void 0===i&&(i=0),Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(this,void 0,void 0,(function(){var u,s,h;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(c){switch(c.label){case 0:return[4,this.lock()];case 1:u=c.sent(),s=!1,c.label=2;case 2:return c.trys.push([2,4,,5]),[4,this.writeNavState(e,t,r,n,o,i,a)];case 3:return s=c.sent(),[3,5];case 4:return h=c.sent(),console.error(h),[3,5];case 5:return u(),[2,s]}}))}))},e.prototype.lock=function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(this,void 0,void 0,(function(){var e,t;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(r){switch(r.label){case 0:return e=this.waitPromise,this.waitPromise=new Promise((function(e){return t=e})),void 0===e?[3,2]:[4,e];case 1:r.sent(),r.label=2;case 2:return[2,t]}}))}))},e.prototype.runGuards=function(e,t){return void 0===e&&(e=this.getPath()),void 0===t&&(t=parsePath(this.previousPath)),Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(this,void 0,void 0,(function(){var r,n,o,i,a,u,s,h,c;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(f){switch(f.label){case 0:return e&&t?(r=readRoutes(this.el),n=routerPathToChain(e,r),o=routerPathToChain(t,r),i=n&&n[n.length-1].beforeEnter,(a=o&&o[o.length-1].beforeLeave)?[4,a()]:[3,2]):[2,!0];case 1:return s=f.sent(),[3,3];case 2:s=!0,f.label=3;case 3:return!1===(u=s)||"object"==typeof u?[2,u]:i?[4,i()]:[3,5];case 4:return c=f.sent(),[3,6];case 5:c=!0,f.label=6;case 6:return!1===(h=c)||"object"==typeof h?[2,h]:[2,!0]}}))}))},e.prototype.writeNavState=function(e,t,r,n,o,i,a){return void 0===i&&(i=0),Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(this,void 0,void 0,(function(){var u,s;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(h){switch(h.label){case 0:return this.busy?(console.warn("[ion-router] router is busy, transition was cancelled"),[2,!1]):(this.busy=!0,(u=this.routeChangeEvent(n,o))&&this.ionRouteWillChange.emit(u),[4,writeNavState(e,t,r,i,!1,a)]);case 1:return s=h.sent(),this.busy=!1,s&&console.debug("[ion-router] route changed",n),u&&this.ionRouteDidChange.emit(u),[2,s]}}))}))},e.prototype.setPath=function(e,t,r){this.state++,function(e,t,r,n,o,i,a){var u=generatePath(Object(tslib__WEBPACK_IMPORTED_MODULE_0__.d)(parsePath(t),n));r&&(u="#"+u),void 0!==a&&(u=u+"?"+a),"forward"===o?e.pushState(i,"",u):e.replaceState(i,"",u)}(window.history,this.root,this.useHash,e,t,this.state,r)},e.prototype.getPath=function(){return function(e,t,r){var n=e.pathname;if(r){var o=e.hash;n="#"===o[0]?o.slice(1):""}return function(e,t){if(e.length>t.length)return null;if(e.length<=1&&""===e[0])return t;for(var r=0;r<e.length;r++)if(e[r].length>0&&e[r]!==t[r])return null;return t.length===e.length?[""]:t.slice(e.length)}(parsePath(t),parsePath(n))}(window.location,this.root,this.useHash)},e.prototype.routeChangeEvent=function(e,t){var r=this.previousPath,n=generatePath(e);return this.previousPath=n,n===r?null:{from:r,redirectedFrom:t?generatePath(t):null,to:n}},Object.defineProperty(e.prototype,"el",{get:function(){return Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_1__.k)(this)},enumerable:!1,configurable:!0}),e}(),RouterLink=function(){function e(e){var t=this;Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_1__.o)(this,e),this.routerDirection="forward",this.onClick=function(e){Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_4__.d)(t.href,e,t.routerDirection,t.routerAnimation)}}return e.prototype.render=function(){var e,t=Object(_ionic_global_9d5c8ee3_js__WEBPACK_IMPORTED_MODULE_2__.b)(this),r={href:this.href,rel:this.rel,target:this.target};return Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_1__.j)(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_1__.c,{onClick:this.onClick,class:Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_4__.a)(this.color,(e={},e[t]=!0,e["ion-activatable"]=!0,e))},Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_1__.j)("a",Object.assign({},r),Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_1__.j)("slot",null)))},e}();RouterLink.style=":host{--background:transparent;--color:var(--ion-color-primary, #3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"},1207:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return createColorClasses})),__webpack_require__.d(__webpack_exports__,"b",(function(){return getClassMap})),__webpack_require__.d(__webpack_exports__,"c",(function(){return hostContext})),__webpack_require__.d(__webpack_exports__,"d",(function(){return openURL}));var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5),hostContext=function(r,t){return null!==t.closest(r)},createColorClasses=function(r,t){var e;return"string"==typeof r&&r.length>0?Object.assign(((e={"ion-color":!0})["ion-color-"+r]=!0,e),t):t},getClassMap=function(r){var t={};return function(r){return void 0!==r?(Array.isArray(r)?r:r.split(" ")).filter((function(r){return null!=r})).map((function(r){return r.trim()})).filter((function(r){return""!==r})):[]}(r).forEach((function(r){return t[r]=!0})),t},SCHEME=/^[a-z][a-z0-9+\-.]*:/,openURL=function(r,t,e,n){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(void 0,void 0,void 0,(function(){var o;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(a){return null!=r&&"#"!==r[0]&&!SCHEME.test(r)&&(o=document.querySelector("ion-router"))?(null!=t&&t.preventDefault(),[2,o.push(r,e,n)]):[2,!1]}))}))}}}]);
//# sourceMappingURL=33.77453f339b802758505f.bundle.js.map