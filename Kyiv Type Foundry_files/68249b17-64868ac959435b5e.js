"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3982],{15238:(e,t,i)=>{Object.defineProperty(t,Symbol.toStringTag,{value:"Module"});let n=i(95155),o=i(12115),r=i(85203),a=i(60437),l=i(47650),s={wrapper:"ControlSlider-module__wrapper___sHEkd",hoverArrow:"ControlSlider-module__hoverArrow___A-dOH",sliderItem:"ControlSlider-module__sliderItem___QQSkR",sliderImage:"ControlSlider-module__sliderImage___9hRl-",arrow:"ControlSlider-module__arrow___05ghY",arrowVertical:"ControlSlider-module__arrowVertical___tBfVN",nextArrow:"ControlSlider-module__nextArrow___-30Yc",arrowInner:"ControlSlider-module__arrowInner___aEra3",arrowIcon:"ControlSlider-module__arrowIcon___S4ztF",arrowImg:"ControlSlider-module__arrowImg___2dwJW",mirror:"ControlSlider-module__mirror___brd6U",pagination:"ControlSlider-module__pagination___bicLF",paginationInner:"ControlSlider-module__paginationInner___bT-P-",paginationVertical:"ControlSlider-module__paginationVertical___zYqKw",paginationItem:"ControlSlider-module__paginationItem___nTRbk",dot:"ControlSlider-module__dot___p1Qun",activeDot:"ControlSlider-module__activeDot___LHFaj",paginationInsideBottom:"ControlSlider-module__paginationInsideBottom___R3FWn",paginationInsideTop:"ControlSlider-module__paginationInsideTop___V-qb-",paginationOutsideBottom:"ControlSlider-module__paginationOutsideBottom___14w8D",paginationOutsideTop:"ControlSlider-module__paginationOutsideTop___SCLqB",paginationInsideLeft:"ControlSlider-module__paginationInsideLeft___yOBRZ",paginationInsideRight:"ControlSlider-module__paginationInsideRight___Rtt3o",paginationOutsideLeft:"ControlSlider-module__paginationOutsideLeft___lahaw",paginationOutsideRight:"ControlSlider-module__paginationOutsideRight___EtuQa",imgWrapper:"ControlSlider-module__imgWrapper___UjEgB",captionBlock:"ControlSlider-module__captionBlock___dJ6-j",captionTextWrapper:"ControlSlider-module__captionTextWrapper___HFlpf",captionText:"ControlSlider-module__captionText___uGBVc",active:"ControlSlider-module__active___WZK4G",withPointerEvents:"ControlSlider-module__withPointerEvents___t-18M",topLeftAlignment:"ControlSlider-module__topLeftAlignment___zjnGM",topCenterAlignment:"ControlSlider-module__topCenterAlignment___gD1xW",topRightAlignment:"ControlSlider-module__topRightAlignment___NMapS",middleLeftAlignment:"ControlSlider-module__middleLeftAlignment___OnUrY",middleCenterAlignment:"ControlSlider-module__middleCenterAlignment___Tdkl0",middleRightAlignment:"ControlSlider-module__middleRightAlignment___wEbfX",bottomLeftAlignment:"ControlSlider-module__bottomLeftAlignment___cTP2-",bottomCenterAlignment:"ControlSlider-module__bottomCenterAlignment___c54fB",bottomRightAlignment:"ControlSlider-module__bottomRightAlignment___kEwrz",clickOverlay:"ControlSlider-module__clickOverlay___DZA28",contain:"ControlSlider-module__contain___pLyq7",cover:"ControlSlider-module__cover___KdDat"};var c="(prefers-reduced-motion: reduce)";function d(e){e.length=0}function u(e,t,i){return Array.prototype.slice.call(e,t,i)}function p(e){return e.bind.apply(e,[null].concat(u(arguments,1)))}var m=setTimeout,g=function(){};function h(e){return requestAnimationFrame(e)}function f(e,t){return typeof t===e}function y(e){return null!==e&&f("object",e)}var v=Array.isArray,x=p(f,"function"),b=p(f,"string"),w=p(f,"undefined");function $(e){try{return e instanceof(e.ownerDocument.defaultView||window).HTMLElement}catch{return!1}}function S(e){return v(e)?e:[e]}function C(e,t){S(e).forEach(t)}function P(e,t){return e.indexOf(t)>-1}function L(e,t){return e.push.apply(e,S(t)),e}function T(e,t,i){e&&C(t,function(t){t&&e.classList[i?"add":"remove"](t)})}function M(e,t){T(e,b(t)?t.split(" "):t,!0)}function E(e,t){C(t,e.appendChild.bind(e))}function I(e,t){C(e,function(e){var i=(t||e).parentNode;i&&i.insertBefore(e,t)})}function k(e,t){return $(e)&&(e.msMatchesSelector||e.matches).call(e,t)}function R(e,t){var i=e?u(e.children):[];return t?i.filter(function(e){return k(e,t)}):i}function F(e,t){return t?R(e,t)[0]:e.firstElementChild}var A=Object.keys;function W(e,t,i){return e&&(i?A(e).reverse():A(e)).forEach(function(i){"__proto__"!==i&&t(e[i],i)}),e}function H(e){return u(arguments,1).forEach(function(t){W(t,function(i,n){e[n]=t[n]})}),e}function _(e){return u(arguments,1).forEach(function(t){W(t,function(t,i){v(t)?e[i]=t.slice():y(t)?e[i]=_({},y(e[i])?e[i]:{},t):e[i]=t})}),e}function N(e,t){C(t||A(e),function(t){delete e[t]})}function j(e,t){C(e,function(e){C(t,function(t){e&&e.removeAttribute(t)})})}function z(e,t,i){y(t)?W(t,function(t,i){z(e,i,t)}):C(e,function(e){null===i||""===i?j(e,t):e.setAttribute(t,String(i))})}function B(e,t,i){var n=document.createElement(e);return t&&(b(t)?M(n,t):z(n,t)),i&&E(i,n),n}function O(e,t,i){if(w(i))return getComputedStyle(e)[t];null===i||(e.style[t]=""+i)}function D(e,t){O(e,"display",t)}function V(e){e.setActive&&e.setActive()||e.focus({preventScroll:!0})}function q(e,t){return e.getAttribute(t)}function G(e,t){return e&&e.classList.contains(t)}function K(e){return e.getBoundingClientRect()}function U(e){C(e,function(e){e&&e.parentNode&&e.parentNode.removeChild(e)})}function X(e){return F(new DOMParser().parseFromString(e,"text/html").body)}function Y(e,t){e.preventDefault(),t&&(e.stopPropagation(),e.stopImmediatePropagation())}function J(e,t){return e&&e.querySelector(t)}function Z(e,t){return t?u(e.querySelectorAll(t)):[]}function Q(e,t){T(e,t,!1)}function ee(e){return e.timeStamp}function et(e){return b(e)?e:e?e+"px":""}var ei="splide",en="data-"+ei;function eo(e,t){if(!e)throw Error("["+ei+"] "+(t||""))}var er=Math.min,ea=Math.max,el=Math.floor,es=Math.ceil,ec=Math.abs;function ed(e,t,i,n){var o=er(t,i),r=ea(t,i);return n?o<e&&e<r:o<=e&&e<=r}function eu(e,t,i){var n=er(t,i),o=ea(t,i);return er(ea(n,e),o)}function ep(e,t){return C(t,function(t){e=e.replace("%s",""+t)}),e}function em(e){return e<10?"0"+e:""+e}var eg={};function eh(){var e=[];function t(e,t,i){C(e,function(e){e&&C(t,function(t){t.split(" ").forEach(function(t){var n=t.split(".");i(e,n[0],n[1])})})})}return{bind:function(i,n,o,r){t(i,n,function(t,i,n){var a="addEventListener"in t,l=a?t.removeEventListener.bind(t,i,o,r):t.removeListener.bind(t,o);a?t.addEventListener(i,o,r):t.addListener(o),e.push([t,i,n,o,l])})},unbind:function(i,n,o){t(i,n,function(t,i,n){e=e.filter(function(e){return e[0]!==t||e[1]!==i||e[2]!==n||!!o&&e[3]!==o||(e[4](),!1)})})},dispatch:function(e,t,i){var n;return"function"==typeof CustomEvent?n=new CustomEvent(t,{bubbles:!0,detail:i}):(n=document.createEvent("CustomEvent")).initCustomEvent(t,!0,!1,i),e.dispatchEvent(n),n},destroy:function(){e.forEach(function(e){e[4]()}),d(e)}}}var ef="mounted",ey="ready",ev="move",ex="moved",eb="click",ew="active",e$="inactive",eS="visible",eC="hidden",eP="refresh",eL="updated",eT="resize",eM="resized",eE="drag",eI="dragging",ek="dragged",eR="scroll",eF="scrolled",eA="destroy",eW="arrows:mounted",eH="arrows:updated",e_="pagination:mounted",eN="pagination:updated",ej="navigation:mounted",ez="autoplay:play",eB="autoplay:playing",eO="autoplay:pause",eD="lazyload:loaded";function eV(e){var t=e?e.event.bus:document.createDocumentFragment(),i=eh();return e&&e.event.on(eA,i.destroy),H(i,{bus:t,on:function(e,n){i.bind(t,S(e).join(" "),function(e){n.apply(n,v(e.detail)?e.detail:[])})},off:p(i.unbind,t),emit:function(e){i.dispatch(t,e,u(arguments,1))}})}function eq(e,t,i,n){var o,r,a=Date.now,l=0,s=!0,c=0;function d(){if(!s){if(l=e?er((a()-o)/e,1):1,i&&i(l),l>=1&&(t(),o=a(),n&&++c>=n))return u();r=h(d)}}function u(){s=!0}function p(){r&&cancelAnimationFrame(r),l=0,r=0,s=!0}return{start:function(t){t||p(),o=a()-(t?l*e:0),s=!1,r=h(d)},rewind:function(){o=a(),l=0,i&&i(l)},pause:u,cancel:p,set:function(t){e=t},isPaused:function(){return s}}}var eG="Arrow",eK=eG+"Left",eU=eG+"Right",eX=eG+"Up",eY=eG+"Down",eJ={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[eX,eU],ArrowRight:[eY,eK]},eZ="role",eQ="tabindex",e0="aria-",e1=e0+"controls",e2=e0+"current",e3=e0+"selected",e5=e0+"label",e4=e0+"labelledby",e9=e0+"hidden",e6=e0+"orientation",e7=e0+"roledescription",e8=e0+"live",te=e0+"busy",tt=e0+"atomic",ti=[eZ,eQ,"disabled",e1,e2,e5,e4,e9,e6,e7],tn=ei+"__",to=tn+"track",tr=tn+"list",ta=tn+"slide",tl=ta+"--clone",ts=ta+"__container",tc=tn+"arrows",td=tn+"arrow",tu=td+"--prev",tp=td+"--next",tm=tn+"pagination",tg=tm+"__page",th=tn+"progress__bar",tf=tn+"toggle",ty=tn+"sr",tv="is-active",tx="is-prev",tb="is-next",tw="is-visible",t$="is-loading",tS="is-focus-in",tC="is-overflow",tP=[tv,tw,tx,tb,t$,tS,tC],tL="touchstart mousedown",tT="touchmove mousemove",tM="touchend touchcancel mouseup click",tE="slide",tI="loop",tk="fade",tR=en+"-interval",tF={passive:!1,capture:!0},tA={Spacebar:" ",Right:eU,Left:eK,Up:eX,Down:eY};function tW(e){return tA[e=b(e)?e:e.key]||e}var tH="keydown",t_=en+"-lazy",tN=t_+"-srcset",tj="["+t_+"], ["+tN+"]",tz=[" ","Enter"],tB=Object.freeze({__proto__:null,Media:function(e,t,i){var n=e.state,o=i.breakpoints||{},r=i.reducedMotion||{},a=eh(),l=[];function s(e){e&&a.destroy()}function d(e,t){var i=matchMedia(t);a.bind(i,"change",u),l.push([e,i])}function u(){var t=n.is(7),o=i.direction,r=l.reduce(function(e,t){return _(e,t[1].matches?t[0]:{})},{});N(i),p(r),i.destroy?e.destroy("completely"===i.destroy):t?(s(!0),e.mount()):o!==i.direction&&e.refresh()}function p(t,o,r){_(i,t),o&&_(Object.getPrototypeOf(i),t),(r||!n.is(1))&&e.emit(eL,i)}return{setup:function(){var e="min"===i.mediaQuery;A(o).sort(function(t,i){return e?t-i:i-t}).forEach(function(t){d(o[t],"("+(e?"min":"max")+"-width:"+t+"px)")}),d(r,c),u()},destroy:s,reduce:function(e){matchMedia(c).matches&&(e?_(i,r):N(i,A(r)))},set:p}},Direction:function(e,t,i){return{resolve:function(e,t,n){var o="rtl"!==(n=n||i.direction)||t?"ttb"===n?0:-1:1;return eJ[e]&&eJ[e][o]||e.replace(/width|left|right/i,function(e,t){var i=eJ[e.toLowerCase()][o]||e;return t>0?i.charAt(0).toUpperCase()+i.slice(1):i})},orient:function(e){return e*("rtl"===i.direction?1:-1)}}},Elements:function(e,t,i){var n,o,r,a=eV(e),l=a.on,s=a.bind,c=e.root,u=i.i18n,p={},m=[],g=[],h=[];function f(){o=F(n=b("."+to),"."+tr),eo(n&&o,"A track/list element is missing."),L(m,R(o,"."+ta+":not(."+tl+")")),W({arrows:tc,pagination:tm,prev:tu,next:tp,bar:th,toggle:tf},function(e,t){p[t]=b("."+e)}),H(p,{root:c,track:n,list:o,slides:m}),function(){var e=c.id||""+ei+em(eg[ei]=(eg[ei]||0)+1),t=i.role;c.id=e,n.id=n.id||e+"-track",o.id=o.id||e+"-list",!q(c,eZ)&&"SECTION"!==c.tagName&&t&&z(c,eZ,t),z(c,e7,u.carousel),z(o,eZ,"presentation")}(),v()}function y(e){var t=ti.concat("style");d(m),Q(c,g),Q(n,h),j([n,o],t),j(c,e?t:["style",e7])}function v(){Q(c,g),Q(n,h),g=w(ei),h=w(to),M(c,g),M(n,h),z(c,e5,i.label),z(c,e4,i.labelledby)}function b(e){var t=J(c,e);return t&&function(e,t){if(x(e.closest))return e.closest(t);for(var i=e;i&&1===i.nodeType&&!k(i,t);)i=i.parentElement;return i}(t,"."+ei)===c?t:void 0}function w(e){return[e+"--"+i.type,e+"--"+i.direction,i.drag&&e+"--draggable",i.isNavigation&&e+"--nav",e===ei&&tv]}return H(p,{setup:f,mount:function(){l(eP,y),l(eP,f),l(eL,v),s(document,tL+" keydown",function(e){r="keydown"===e.type},{capture:!0}),s(c,"focusin",function(){T(c,tS,!!r)})},destroy:y})},Slides:function(e,t,i){var n=eV(e),o=n.on,r=n.emit,a=n.bind,l=t.Elements,s=l.slides,c=l.list,u=[];function m(){s.forEach(function(e,t){h(e,t,-1)})}function g(){y(function(e){e.destroy()}),d(u)}function h(t,i,n){var o=function(e,t,i,n){var o,r=eV(e),a=r.on,l=r.emit,s=r.bind,c=e.Components,d=e.root,u=e.options,m=u.isNavigation,g=u.updateOnMove,h=u.i18n,f=u.pagination,y=u.slideFocus,v=c.Direction.resolve,x=q(n,"style"),b=q(n,e5),w=i>-1,$=F(n,"."+ts);function S(){var o=e.splides.map(function(e){var i=e.splide.Components.Slides.getAt(t);return i?i.slide.id:""}).join(" ");z(n,e5,ep(h.slideX,(w?i:t)+1)),z(n,e1,o),z(n,eZ,y?"button":""),y&&j(n,e7)}function C(){o||P()}function P(){if(!o){var i,r=e.index;(i=L())!==G(n,tv)&&(T(n,tv,i),z(n,e2,m&&i||""),l(i?ew:e$,M)),function(){var t=function(){if(e.is(tk))return L();var t=K(c.Elements.track),i=K(n),o=v("left",!0),r=v("right",!0);return el(t[o])<=es(i[o])&&el(i[r])<=es(t[r])}(),i=!t&&(!L()||w);if(e.state.is([4,5])||z(n,e9,i||""),z(Z(n,u.focusableNodes||""),eQ,i?-1:""),y&&z(n,eQ,i?-1:0),t!==G(n,tw)&&(T(n,tw,t),l(t?eS:eC,M)),!t&&document.activeElement===n){var o=c.Slides.getAt(e.index);o&&V(o.slide)}}(),T(n,tx,t===r-1),T(n,tb,t===r+1)}}function L(){var n=e.index;return n===t||u.cloneStatus&&n===i}var M={index:t,slideIndex:i,slide:n,container:$,isClone:w,mount:function(){w||(n.id=d.id+"-slide"+em(t+1),z(n,eZ,f?"tabpanel":"group"),z(n,e7,h.slide),z(n,e5,b||ep(h.slideLabel,[t+1,e.length]))),s(n,"click",p(l,eb,M)),s(n,"keydown",p(l,"sk",M)),a([ex,"sh",eF],P),a(ej,S),g&&a(ev,C)},destroy:function(){o=!0,r.destroy(),Q(n,tP),j(n,ti),z(n,"style",x),z(n,e5,b||"")},update:P,style:function(e,t,i){O(i&&$||n,e,t)},isWithin:function(i,n){var o=ec(i-t);return!w&&(u.rewind||e.is(tI))&&(o=er(o,e.length-o)),o<=n}};return M}(e,i,n,t);o.mount(),u.push(o),u.sort(function(e,t){return e.index-t.index})}function f(e){return e?v(function(e){return!e.isClone}):u}function y(e,t){f(t).forEach(e)}function v(e){return u.filter(x(e)?e:function(t){return b(e)?k(t.slide,e):P(S(e),t.index)})}return{mount:function(){m(),o(eP,g),o(eP,m)},destroy:g,update:function(){y(function(e){e.update()})},register:h,get:f,getIn:function(e){var n=t.Controller,o=n.toIndex(e),r=n.hasFocus()?1:i.perPage;return v(function(e){return ed(e.index,o,o+r-1)})},getAt:function(e){return v(e)[0]},add:function(e,t){C(e,function(e){if(b(e)&&(e=X(e)),$(e)){var n,o,l,d,u=s[t];u?I(e,u):E(c,e),M(e,i.classes.slide),n=e,o=p(r,eT),(d=(l=Z(n,"img")).length)?l.forEach(function(e){a(e,"load error",function(){--d||o()})}):o()}}),r(eP)},remove:function(e){U(v(e).map(function(e){return e.slide})),r(eP)},forEach:y,filter:v,style:function(e,t,i){y(function(n){n.style(e,t,i)})},getLength:function(e){return e?s.length:u.length},isEnough:function(){return u.length>i.perPage}}},Layout:function(e,t,i){var n,o,r,a=eV(e),l=a.on,s=a.bind,c=a.emit,d=t.Slides,u=t.Direction.resolve,m=t.Elements,g=m.root,h=m.track,f=m.list,v=d.getAt,x=d.style;function b(){n="ttb"===i.direction,O(g,"maxWidth",et(i.width)),O(h,u("paddingLeft"),$(!1)),O(h,u("paddingRight"),$(!0)),w(!0)}function w(e){var t,a=K(g);(e||o.width!==a.width||o.height!==a.height)&&(O(h,"height",(t="",n&&(eo(t=S(),"height or heightRatio is missing."),t="calc("+t+" - "+$(!1)+" - "+$(!0)+")"),t)),x(u("marginRight"),et(i.gap)),x("width",i.autoWidth?null:et(i.fixedWidth)||(n?"":C())),x("height",et(i.fixedHeight)||(n?i.autoHeight?null:C():S()),!0),o=a,c(eM),r!==(r=k())&&(T(g,tC,r),c("overflow",r)))}function $(e){var t=i.padding,n=u(e?"right":"left");return t&&et(t[n]||(y(t)?0:t))||"0px"}function S(){return et(i.height||K(f).width*i.heightRatio)}function C(){var e=et(i.gap);return"calc((100%"+(e&&" + "+e)+")/"+(i.perPage||1)+(e&&" - "+e)+")"}function P(){return K(f)[u("width")]}function L(e,t){var i=v(e||0);return i?K(i.slide)[u("width")]+(t?0:I()):0}function M(e,t){var i=v(e);return i?ec(K(i.slide)[u("right")]-K(f)[u("left")])+(t?0:I()):0}function E(t){return M(e.length-1)-M(0)+L(0,t)}function I(){var e=v(0);return e&&parseFloat(O(e.slide,u("marginRight")))||0}function k(){return e.is(tk)||E(!0)>P()}return{mount:function(){var e;b(),s(window,"resize load",(e=eq(0,p(c,eT),null,1),function(){e.isPaused()&&e.start()})),l([eL,eP],b),l(eT,w)},resize:w,listSize:P,slideSize:L,sliderSize:E,totalSize:M,getPadding:function(e){return parseFloat(O(h,u("padding"+(e?"Right":"Left"))))||0},isOverflow:k}},Clones:function(e,t,i){var n,o=eV(e),r=o.on,a=t.Elements,l=t.Slides,s=t.Direction.resolve,c=[];function u(){r(eP,p),r([eL,eT],g),(n=h())&&(function(t){var n=l.get().slice(),o=n.length;if(o){for(;n.length<t;)L(n,n);L(n.slice(-t),n.slice(0,t)).forEach(function(r,s){var d,u,p,m=s<t,g=(d=r.slide,u=s,M(p=d.cloneNode(!0),i.classes.clone),p.id=e.root.id+"-clone"+em(u+1),p);m?I(g,n[0].slide):E(a.list,g),L(c,g),l.register(g,s-t+(m?0:o),r.index)})}}(n),t.Layout.resize(!0))}function p(){m(),u()}function m(){U(c),d(c),o.destroy()}function g(){var e=h();n!==e&&(n<e||!e)&&o.emit(eP)}function h(){var n=i.clones;if(e.is(tI)){if(w(n)){var o=i[s("fixedWidth")]&&t.Layout.slideSize(0);n=o&&es(K(a.track)[s("width")]/o)||i[s("autoWidth")]&&e.length||2*i.perPage}}else n=0;return n}return{mount:u,destroy:m}},Move:function(e,t,i){var n,o=eV(e),r=o.on,a=o.emit,l=e.state.set,s=t.Layout,c=s.slideSize,d=s.getPadding,u=s.totalSize,p=s.listSize,m=s.sliderSize,g=t.Direction,h=g.resolve,f=g.orient,y=t.Elements,v=y.list,x=y.track;function b(){t.Controller.isBusy()||(t.Scroll.cancel(),$(e.index),t.Slides.update())}function $(e){S(T(e,!0))}function S(i,n){if(!e.is(tk)){var o=n?i:function(i){if(e.is(tI)){var n=L(i),o=n>t.Controller.getEnd();(n<0||o)&&(i=C(i,o))}return i}(i);O(v,"transform","translate"+h("X")+"("+o+"px)"),i!==o&&a("sh")}}function C(e,t){var i=e-E(t),n=m();return e-f(n*(es(ec(i)/n)||1))*(t?1:-1)}function P(){S(M(),!0),n.cancel()}function L(e){for(var i=t.Slides.get(),n=0,o=1/0,r=0;r<i.length;r++){var a=i[r].index,l=ec(T(a,!0)-e);if(l<=o)o=l,n=a;else break}return n}function T(t,n){var o,r,a,l=f(u(t-1)-(o=t,"center"===(r=i.focus)?(p()-c(o,!0))/2:r*c(o)||0));return n?(a=l,i.trimSpace&&e.is(tE)&&(a=eu(a,0,f(m(!0)-p()))),a):l}function M(){var e=h("left");return K(v)[e]-K(x)[e]+f(d(!1))}function E(e){return T(e?t.Controller.getEnd():0,!!i.trimSpace)}return{mount:function(){n=t.Transition,r([ef,eM,eL,eP],b)},move:function(e,t,i,o){var r,s;e!==t&&(r=e>i,s=f(C(M(),r)),r?s>=0:s<=v[h("scrollWidth")]-K(x)[h("width")])&&(P(),S(C(M(),e>i),!0)),l(4),a(ev,t,i,e),n.start(t,function(){l(3),a(ex,t,i,e),o&&o()})},jump:$,translate:S,shift:C,cancel:P,toIndex:L,toPosition:T,getPosition:M,getLimit:E,exceededLimit:function(e,t){t=w(t)?M():t;var i=!0!==e&&f(t)<f(E(!1)),n=!1!==e&&f(t)>f(E(!0));return i||n},reposition:b}},Controller:function(e,t,i){var n,o,r,a,l=eV(e),s=l.on,c=l.emit,d=t.Move,u=d.getPosition,m=d.getLimit,g=d.toPosition,h=t.Slides,f=h.isEnough,y=h.getLength,v=i.omitEnd,x=e.is(tI),$=e.is(tE),S=p(E,!1),C=p(E,!0),P=i.start||0,L=P;function T(){o=y(!0),r=i.perMove,a=i.perPage,n=R();var e=eu(P,0,v?n:o-1);e!==P&&(P=e,d.reposition())}function M(){n!==R()&&c("ei")}function E(e,t){var i=r||(H()?1:a),o=I(P+i*(e?-1:1),P,!(r||H()));return -1===o&&$&&!(1>ec(u()-m(!e)))?e?0:n:t?o:k(o)}function I(t,l,s){if(f()||H()){var c=function(t){if($&&"move"===i.trimSpace&&t!==P)for(var n=u();n===g(t,!0)&&ed(t,0,e.length-1,!i.rewind);)t<P?--t:++t;return t}(t);c!==t&&(l=t,t=c,s=!1),t<0||t>n?t=!r&&(ed(0,t,l,!0)||ed(n,l,t,!0))?F(A(t)):x?s?t<0?-(o%a||a):o:t:i.rewind?t<0?n:0:-1:s&&t!==l&&(t=F(A(l)+(t<l?-1:1)))}else t=-1;return t}function k(e){return x?(e+o)%o||0:e}function R(){for(var e=o-(H()||x&&r?1:a);v&&e-- >0;)if(g(o-1,!0)!==g(e,!0)){e++;break}return eu(e,0,o-1)}function F(e){return eu(H()?e:a*e,0,n)}function A(e){return H()?er(e,n):el((e>=n?o-1:e)/a)}function W(e){e!==P&&(L=P,P=e)}function H(){return!w(i.focus)||i.isNavigation}function _(){return e.state.is([4,5])&&!!i.waitForTransition}return{mount:function(){T(),s([eL,eP,"ei"],T),s(eM,M)},go:function(e,t,i){if(!_()){var o=function(e){var t=P;if(b(e)){var i=e.match(/([+\-<>])(\d+)?/)||[],o=i[1],r=i[2];"+"===o||"-"===o?t=I(P+ +(""+o+(+r||1)),P):">"===o?t=r?F(+r):S(!0):"<"===o&&(t=C(!0))}else t=x?e:eu(e,0,n);return t}(e),r=k(o);r>-1&&(t||r!==P)&&(W(r),d.move(o,r,L,i))}},scroll:function(e,i,o,r){t.Scroll.scroll(e,i,o,function(){var e=k(d.toIndex(u()));W(v?er(e,n):e),r&&r()})},getNext:S,getPrev:C,getAdjacent:E,getEnd:R,setIndex:W,getIndex:function(e){return e?L:P},toIndex:F,toPage:A,toDest:function(e){var t=d.toIndex(e);return $?eu(t,0,n):t},hasFocus:H,isBusy:_}},Arrows:function(e,t,i){var n,o,r=eV(e),a=r.on,l=r.bind,s=r.emit,c=i.classes,d=i.i18n,u=t.Elements,m=t.Controller,g=u.arrows,h=u.track,f=g,y=u.prev,v=u.next,x={};function b(){var e;(e=i.arrows)&&!(y&&v)&&(f=g||B("div",c.arrows),y=C(!0),v=C(!1),n=!0,E(f,[y,v]),g||I(f,h)),y&&v&&(H(x,{prev:y,next:v}),D(f,e?"":"none"),M(f,o=tc+"--"+i.direction),e&&(a([ef,ex,eP,eF,"ei"],P),l(v,"click",p(S,">")),l(y,"click",p(S,"<")),P(),z([y,v],e1,h.id),s(eW,y,v))),a(eL,w)}function w(){$(),b()}function $(){r.destroy(),Q(f,o),n?(U(g?[y,v]:f),y=v=null):j([y,v],ti)}function S(e){m.go(e,!0)}function C(e){return X('<button class="'+c.arrow+" "+(e?c.prev:c.next)+'" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="'+(i.arrowPath||"m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z")+'" />')}function P(){if(y&&v){var t=e.index,i=m.getPrev(),n=m.getNext(),o=i>-1&&t<i?d.last:d.prev,r=n>-1&&t>n?d.first:d.next;y.disabled=i<0,v.disabled=n<0,z(y,e5,o),z(v,e5,r),s(eH,y,v,i,n)}}return{arrows:x,mount:b,destroy:$,update:P}},Autoplay:function(e,t,i){var n,o,r=eV(e),a=r.on,l=r.bind,s=r.emit,c=eq(i.interval,e.go.bind(e,">"),function(e){var t=u.bar;t&&O(t,"width",100*e+"%"),s(eB,e)}),d=c.isPaused,u=t.Elements,p=t.Elements,m=p.root,g=p.toggle,h=i.autoplay,f="pause"===h;function y(){d()&&t.Slides.isEnough()&&(c.start(!i.resetProgress),o=n=f=!1,b(),s(ez))}function v(e){void 0===e&&(e=!0),f=!!e,b(),d()||(c.pause(),s(eO))}function x(){f||(n||o?v(!1):y())}function b(){g&&(T(g,tv,!f),z(g,e5,i.i18n[f?"play":"pause"]))}function w(e){var n=t.Slides.getAt(e);c.set(n&&+q(n.slide,tR)||i.interval)}return{mount:function(){h&&(i.pauseOnHover&&l(m,"mouseenter mouseleave",function(e){n="mouseenter"===e.type,x()}),i.pauseOnFocus&&l(m,"focusin focusout",function(e){o="focusin"===e.type,x()}),g&&l(g,"click",function(){f?y():v(!0)}),a([ev,eR,eP],c.rewind),a(ev,w),g&&z(g,e1,u.track.id),f||y(),b())},destroy:c.cancel,play:y,pause:v,isPaused:d}},Cover:function(e,t,i){var n=eV(e).on;function o(e){t.Slides.forEach(function(t){var i=F(t.container||t.slide,"img");i&&i.src&&r(e,i,t)})}function r(e,t,i){i.style("background",e?'center/cover no-repeat url("'+t.src+'")':"",!0),D(t,e?"none":"")}return{mount:function(){i.cover&&(n(eD,p(r,!0)),n([ef,eL,eP],p(o,!0)))},destroy:p(o,!1)}},Scroll:function(e,t,i){var n,o,r=eV(e),a=r.on,l=r.emit,s=e.state.set,c=t.Move,d=c.getPosition,u=c.getLimit,m=c.exceededLimit,g=c.translate,h=e.is(tE),f=1;function y(e,i,r,a,u){var g=d();if(b(),r&&(!h||!m())){var y,w=t.Layout.sliderSize(),$=(((y=e)>0)-(y<0))*w*el(ec(e)/w)||0;e=c.toPosition(t.Controller.toDest(e%w))+$}var S=1>ec(g-e);f=1,i=S?0:i||ea(ec(e-g)/1.5,800),o=a,n=eq(i,v,p(x,g,e,u),1),s(5),l(eR),n.start()}function v(){s(3),o&&o(),l(eF)}function x(e,t,n,r){var a,l,s=d(),c=(e+(t-e)*(a=r,(l=i.easingFunc)?l(a):1-Math.pow(1-a,4))-s)*f;g(s+c),h&&!n&&m()&&(f*=.6,10>ec(c)&&y(u(m(!0)),600,!1,o,!0))}function b(){n&&n.cancel()}function w(){n&&!n.isPaused()&&(b(),v())}return{mount:function(){a(ev,b),a([eL,eP],w)},destroy:b,scroll:y,cancel:w}},Drag:function(e,t,i){var n,o,r,a,l,s,c,d,u=eV(e),p=u.on,m=u.emit,h=u.bind,f=u.unbind,v=e.state,x=t.Move,b=t.Scroll,w=t.Controller,$=t.Elements.track,S=t.Media.reduce,C=t.Direction,P=C.resolve,L=C.orient,T=x.getPosition,M=x.exceededLimit,E=!1;function I(){var e=i.drag;c=!e,a="free"===e}function R(e){if(s=!1,!c){var t,n,o=z(e);t=e.target,n=i.noDrag,k(t,"."+tg+", ."+td)||n&&k(t,n)||!o&&e.button||(w.isBusy()?Y(e,!0):(d=o?$:window,l=v.is([4,5]),r=null,h(d,tT,F,tF),h(d,tM,A,tF),x.cancel(),b.cancel(),H(e)))}}function F(t){if(v.is(6)||(v.set(6),m(eE)),t.cancelable)if(l){x.translate(n+_(t)/(E&&e.is(tE)?5:1));var o,r,a,c,d,u,p=N(t)>200,g=E!==(E=M());(p||g)&&H(t),s=!0,m(eI),Y(t)}else{ec(_(o=t))>ec(_(o,!0))&&(r=t,d=(c=y(a=i.dragMinThreshold))&&a.mouse||0,u=(c?a.touch:+a)||10,l=ec(_(r))>(z(r)?u:d),Y(t))}}function A(n){v.is(6)&&(v.set(3),m(ek)),l&&(function(n){var o=function(t){if(e.is(tI)||!E){var i=N(t);if(i&&i<200)return _(t)/i}return 0}(n),r=function(e){return T()+((e>0)-(e<0))*er(ec(e)*(i.flickPower||600),a?1/0:t.Layout.listSize()*(i.flickMaxPages||1))}(o),l=i.rewind&&i.rewindByDrag;S(!1),a?w.scroll(r,0,i.snap):e.is(tk)?w.go(0>L((o>0)-(o<0))?l?"<":"-":l?">":"+"):e.is(tE)&&E&&l?w.go(M(!0)?">":"<"):w.go(w.toDest(r),!0),S(!0)}(n),Y(n)),f(d,tT,F),f(d,tM,A),l=!1}function W(e){!c&&s&&Y(e,!0)}function H(e){r=o,o=e,n=T()}function _(e,t){return j(e,t)-j(o===e&&r||o,t)}function N(e){return ee(e)-ee(o===e&&r||o)}function j(e,t){return(z(e)?e.changedTouches[0]:e)["page"+P(t?"Y":"X")]}function z(e){return"u">typeof TouchEvent&&e instanceof TouchEvent}return{mount:function(){h($,tT,g,tF),h($,tM,g,tF),h($,tL,R,tF),h($,"click",W,{capture:!0}),h($,"dragstart",Y),p([ef,eL],I)},disable:function(e){c=e},isDragging:function(){return l}}},Keyboard:function(e,t,i){var n,o,r=eV(e),a=r.on,l=r.bind,s=r.unbind,c=e.root,d=t.Direction.resolve;function u(){var e=i.keyboard;e&&l(n="global"===e?window:c,tH,h)}function p(){s(n,tH)}function g(){var e=o;o=!0,m(function(){o=e})}function h(t){if(!o){var i=tW(t);i===d(eK)?e.go("<"):i===d(eU)&&e.go(">")}}return{mount:function(){u(),a(eL,p),a(eL,u),a(ev,g)},destroy:p,disable:function(e){o=e}}},LazyLoad:function(e,t,i){var n=eV(e),o=n.on,r=n.off,a=n.bind,l=n.emit,s="sequential"===i.lazyLoad,c=[ex,eF],u=[];function m(){d(u),t.Slides.forEach(function(e){Z(e.slide,tj).forEach(function(t){var n=q(t,t_),o=q(t,tN);if(n!==t.src||o!==t.srcset){var r=i.classes.spinner,a=t.parentElement,l=F(a,"."+r)||B("span",r,a);u.push([t,e,l]),t.src||D(t,"none")}})}),s?y():(r(c),o(c,g),g())}function g(){(u=u.filter(function(t){var n=i.perPage*((i.preloadPages||1)+1)-1;return!t[1].isWithin(e.index,n)||h(t)})).length||r(c)}function h(e){var t=e[0];M(e[1].slide,t$),a(t,"load error",p(f,e)),z(t,"src",q(t,t_)),z(t,"srcset",q(t,tN)),j(t,t_),j(t,tN)}function f(e,t){var i=e[0],n=e[1];Q(n.slide,t$),"error"!==t.type&&(U(e[2]),D(i,""),l(eD,i,n),l(eT)),s&&y()}function y(){u.length&&h(u.shift())}return{mount:function(){i.lazyLoad&&(m(),o(eP,m))},destroy:p(d,u),check:g}},Pagination:function(e,t,i){var n,o,r=eV(e),a=r.on,l=r.emit,s=r.bind,c=t.Slides,m=t.Elements,g=t.Controller,h=g.hasFocus,f=g.getIndex,y=g.go,v=t.Direction.resolve,x=m.pagination,b=[];function w(){n&&(U(x?u(n.children):n),Q(n,o),d(b),n=null),r.destroy()}function $(e){y(">"+e,!0)}function S(e,t){var i=b.length,n=tW(t),o=C(),r=-1;n===v(eU,!1,o)?r=++e%i:n===v(eK,!1,o)?r=(--e+i)%i:"Home"===n?r=0:"End"===n&&(r=i-1);var a=b[r];a&&(V(a.button),y(">"+r),Y(t,!0))}function C(){return i.paginationDirection||i.direction}function P(e){return b[g.toPage(e)]}function L(){var e=P(f(!0)),t=P(f());if(e){var i=e.button;Q(i,tv),j(i,e3),z(i,eQ,-1)}if(t){var o=t.button;M(o,tv),z(o,e3,!0),z(o,eQ,"")}l(eN,{list:n,items:b},e,t)}return{items:b,mount:function t(){w(),a([eL,eP,"ei"],t);var r=i.pagination;x&&D(x,r?"":"none"),r&&(a([ev,eR,eF],L),function(){var t=e.length,r=i.classes,a=i.i18n,l=i.perPage,d=h()?g.getEnd()+1:es(t/l);M(n=x||B("ul",r.pagination,m.track.parentElement),o=tm+"--"+C()),z(n,eZ,"tablist"),z(n,e5,a.select),z(n,e6,"ttb"===C()?"vertical":"");for(var u=0;u<d;u++){var f=B("li",null,n),y=B("button",{class:r.page,type:"button"},f),v=c.getIn(u).map(function(e){return e.slide.id}),w=!h()&&l>1?a.pageX:a.slideX;s(y,"click",p($,u)),i.paginationKeyboard&&s(y,"keydown",p(S,u)),z(f,eZ,"presentation"),z(y,eZ,"tab"),z(y,e1,v.join(" ")),z(y,e5,ep(w,u+1)),z(y,eQ,-1),b.push({li:f,button:y,page:u})}}(),L(),l(e_,{list:n,items:b},P(e.index)))},destroy:w,getAt:P,update:L}},Sync:function(e,t,i){var n=i.isNavigation,o=i.slideFocus,r=[];function a(){var t,i;e.splides.forEach(function(t){t.isParent||(s(e,t.splide),s(t.splide,e))}),n&&((i=(t=eV(e)).on)(eb,u),i("sk",m),i([ef,eL],c),r.push(t),t.emit(ej,e.splides))}function l(){r.forEach(function(e){e.destroy()}),d(r)}function s(e,t){var i=eV(e);i.on(ev,function(e,i,n){t.go(t.is(tI)?n:e)}),r.push(i)}function c(){z(t.Elements.list,e6,"ttb"===i.direction?"vertical":"")}function u(t){e.go(t.index)}function m(e,t){P(tz,tW(t))&&(u(e),Y(t))}return{setup:p(t.Media.set,{slideFocus:w(o)?n:o},!0),mount:a,destroy:l,remount:function(){l(),a()}}},Wheel:function(e,t,i){var n=eV(e).bind,o=0;function r(n){if(n.cancelable){var r,a=n.deltaY,l=a<0,s=ee(n),c=i.wheelMinThreshold||0,d=i.wheelSleep||0;ec(a)>c&&s-o>d&&(e.go(l?"<":">"),o=s),r=l,(!i.releaseWheel||e.state.is(4)||-1!==t.Controller.getAdjacent(r))&&Y(n)}}return{mount:function(){i.wheel&&n(t.Elements.track,"wheel",r,tF)}}},Live:function(e,t,i){var n=eV(e).on,o=t.Elements.track,r=i.live&&!i.isNavigation,a=B("span",ty),l=eq(90,p(s,!1));function s(e){z(o,te,e),e?(E(o,a),l.start()):(U(a),l.cancel())}function c(e){r&&z(o,e8,e?"off":"polite")}return{mount:function(){r&&(c(!t.Autoplay.isPaused()),z(o,tt,!0),a.textContent="…",n(ez,p(c,!0)),n(eO,p(c,!1)),n([ex,eF],p(s,!0)))},disable:c,destroy:function(){j(o,[e8,tt,te]),U(a)}}}}),tO={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:{slide:ta,clone:tl,arrows:tc,arrow:td,prev:tu,next:tp,pagination:tm,page:tg,spinner:tn+"spinner"},i18n:{prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function tD(e,t,i){var n=t.Slides;function o(){n.forEach(function(e){e.style("transform","translateX(-"+100*e.index+"%)")})}return{mount:function(){eV(e).on([ef,eP],o)},start:function(e,t){n.style("transition","opacity "+i.speed+"ms "+i.easing),m(t)},cancel:g}}function tV(e,t,i){var n,o=t.Move,r=t.Controller,a=t.Scroll,l=t.Elements.list,s=p(O,l,"transition");function c(){s(""),a.cancel()}return{mount:function(){eV(e).bind(l,"transitionend",function(e){e.target===l&&n&&(c(),n())})},start:function(t,l){var c=o.toPosition(t,!0),d=o.getPosition(),u=function(t){var n=i.rewindSpeed;if(e.is(tE)&&n){var o=r.getIndex(!0),a=r.getEnd();if(0===o&&t>=a||o>=a&&0===t)return n}return i.speed}(t);ec(c-d)>=1&&u>=1?i.useScroll?a.scroll(c,u,!1,l):(s("transform "+u+"ms "+i.easing),o.translate(c,!0),n=l):(o.jump(t),l())},cancel:c}}var tq=function(){function e(t,i){this.event=eV(),this.Components={},this.state=(n=1,{set:function(e){n=e},is:function(e){return P(S(e),n)}}),this.splides=[],this._o={},this._E={};var n,o=b(t)?J(document,t):t;eo(o,o+" is invalid."),this.root=o,i=_({label:q(o,e5)||"",labelledby:q(o,e4)||""},tO,e.defaults,i||{});try{_(i,JSON.parse(q(o,en)))}catch{eo(!1,"Invalid JSON")}this._o=Object.create(_({},i))}var t,i=e.prototype;return i.mount=function(e,t){var i=this,n=this.state,o=this.Components;return eo(n.is([1,7]),"Already mounted!"),n.set(1),this._C=o,this._T=t||this._T||(this.is(tk)?tD:tV),this._E=e||this._E,W(H({},tB,this._E,{Transition:this._T}),function(e,t){var n=e(i,o,i._o);o[t]=n,n.setup&&n.setup()}),W(o,function(e){e.mount&&e.mount()}),this.emit(ef),M(this.root,"is-initialized"),n.set(3),this.emit(ey),this},i.sync=function(e){return this.splides.push({splide:e}),e.splides.push({splide:this,isParent:!0}),this.state.is(3)&&(this._C.Sync.remount(),e.Components.Sync.remount()),this},i.go=function(e){return this._C.Controller.go(e),this},i.on=function(e,t){return this.event.on(e,t),this},i.off=function(e){return this.event.off(e),this},i.emit=function(e){var t;return(t=this.event).emit.apply(t,[e].concat(u(arguments,1))),this},i.add=function(e,t){return this._C.Slides.add(e,t),this},i.remove=function(e){return this._C.Slides.remove(e),this},i.is=function(e){return this._o.type===e},i.refresh=function(){return this.emit(eP),this},i.destroy=function(e){void 0===e&&(e=!0);var t=this.event,i=this.state;return i.is(1)?eV(this).on(ey,this.destroy.bind(this,e)):(W(this._C,function(t){t.destroy&&t.destroy(e)},!0),t.emit(eA),t.destroy(),e&&d(this.splides),i.set(7)),this},t=[{key:"options",get:function(){return this._o},set:function(e){this._C.Media.set(e,!0,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}],function(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}();tq.defaults={},tq.STATES={CREATED:1,MOUNTED:2,IDLE:3,MOVING:4,SCROLLING:5,DRAGGING:6,DESTROYED:7};var tG=[[ef,"onMounted"],[ey,"onReady"],[ev,"onMove"],[ex,"onMoved"],[eb,"onClick"],[ew,"onActive"],[e$,"onInactive"],[eS,"onVisible"],[eC,"onHidden"],[eP,"onRefresh"],[eL,"onUpdated"],[eT,"onResize"],[eM,"onResized"],[eE,"onDrag"],[eI,"onDragging"],[ek,"onDragged"],[eR,"onScroll"],[eF,"onScrolled"],[eA,"onDestroy"],[eW,"onArrowsMounted"],[eH,"onArrowsUpdated"],[e_,"onPaginationMounted"],[eN,"onPaginationUpdated"],[ej,"onNavigationMounted"],[ez,"onAutoplayPlay"],[eB,"onAutoplayPlaying"],[eO,"onAutoplayPause"],[eD,"onLazyLoadLoaded"]];function tK(...e){return e.filter(Boolean).join(" ")}function tU(e){return null!==e&&"object"==typeof e}function tX(e,t){return function(e,t){if(e){let i=Object.keys(e);for(let n=0;n<i.length;n++){let o=i[n];if("__proto__"!==o&&!1===t(e[o],o))break}}}(t,(t,i)=>{Array.isArray(t)?e[i]=t.slice():tU(t)?e[i]=tX(tU(e[i])?e[i]:{},t):e[i]=t}),e}var tY=({children:e,className:t,...i})=>o.createElement("div",{className:tK("splide__track",t),...i},o.createElement("ul",{className:"splide__list"},e)),tJ=class extends o.Component{constructor(){super(...arguments),this.splideRef=o.createRef(),this.slides=[]}componentDidMount(){let{options:e,extensions:t,transition:i}=this.props,{current:n}=this.splideRef;n&&(this.splide=new tq(n,e),this.bind(this.splide),this.splide.mount(t,i),this.options=tX({},e||{}),this.slides=this.getSlides())}componentWillUnmount(){this.splide&&(this.splide.destroy(),this.splide=void 0),this.options=void 0,this.slides.length=0}componentDidUpdate(){var e;if(!this.splide)return;let{options:t}=this.props;t&&!function e(t,i){if(Array.isArray(t)&&Array.isArray(i))return t.length===i.length&&!t.some((t,n)=>!e(t,i[n]));if(tU(t)&&tU(i)){let n=Object.keys(t),o=Object.keys(i);return n.length===o.length&&!n.some(n=>!Object.prototype.hasOwnProperty.call(i,n)||!e(t[n],i[n]))}return t===i}(this.options,t)&&(this.splide.options=t,this.options=tX({},t));let i=this.getSlides();e=this.slides,(e.length!==i.length||e.some((e,t)=>e!==i[t]))&&(this.splide.refresh(),this.slides=i)}sync(e){var t;null==(t=this.splide)||t.sync(e)}go(e){var t;null==(t=this.splide)||t.go(e)}getSlides(){var e;if(this.splide){let t=null==(e=this.splide.Components.Elements)?void 0:e.list.children;return t&&Array.prototype.slice.call(t)||[]}return[]}bind(e){tG.forEach(([t,i])=>{let n=this.props[i];"function"==typeof n&&e.on(t,(...t)=>{n(e,...t)})})}omit(e,t){return t.forEach(t=>{Object.prototype.hasOwnProperty.call(e,t)&&delete e[t]}),e}render(){let{className:e,tag:t="div",hasTrack:i=!0,children:n,...r}=this.props;return o.createElement(t,{className:tK("splide",e),ref:this.splideRef,...this.omit(r,["options",...tG.map(e=>e[1])])},i?o.createElement(tY,null,n):n)}},tZ=({children:e,className:t,...i})=>o.createElement("li",{className:tK("splide__slide",t),...i},e);let tQ={link:"RichTextRenderer-module__link___BWeZ2"},t0=e=>e&&e.split(",").map(e=>e.trim()).filter(Boolean).map(e=>(e=>{let t=e.trim();return!(!t||t.startsWith('"')&&t.endsWith('"')||t.startsWith("'")&&t.endsWith("'"))&&t.split(/\s+/g).filter(Boolean).some(e=>/^\d/.test(e))})(e)?`"${e.replace(/"/g,'\\"')}"`:e).join(", ");function t1(e){let{color:t,...i}=e;return i}function t2(e,t){var i,n,o;let{fontSize:r,lineHeight:l}=e;return{fontFamily:t0(e.fontSettings.fontFamily),fontWeight:e.fontSettings.fontWeight,fontStyle:e.fontSettings.fontStyle,letterSpacing:a.scalingValue(e.letterSpacing,t),wordSpacing:a.scalingValue(e.wordSpacing,t),fontSize:a.scalingValue(r,t),lineHeight:void 0!==l?a.scalingValue(l,t):void 0,textTransform:null==(i=e.textAppearance)?void 0:i.textTransform,textDecoration:null==(n=e.textAppearance)?void 0:n.textDecoration,fontVariant:null==(o=e.textAppearance)?void 0:o.fontVariant,textAlign:e.textAlign,color:e.color}}let t3=({content:e})=>{let t=e=>e.map((e,i)=>"link"===e.type?n.jsx("a",{className:tQ.link,href:e.value,target:e.target,children:t(e.children)},i):n.jsx("span",{style:function(e){return{...e.fontFamily&&{fontFamily:t0(e.fontFamily)},...e.fontWeight&&{fontWeight:e.fontWeight},...e.fontStyle&&{fontStyle:e.fontStyle},...e.textDecoration&&{textDecoration:e.textDecoration},...e.textTransform&&{textTransform:e.textTransform},...e.fontVariant&&{fontVariant:e.fontVariant},...e.verticalAlign&&{verticalAlign:e.verticalAlign,lineHeight:"0px"}}}(e),children:e.text},i));return n.jsx(n.Fragment,{children:e.map((e,i)=>{let o=e.children;return n.jsx("div",{children:t(o)},i)})})},t5={svg:"SvgImage-module__svg___q3xE-",img:"SvgImage-module__img___VsTm-"},t4=({url:e,fill:t="#000000",hoverFill:i="#CCCCCC",className:a="",style:l})=>{let[s,c]=o.useState(()=>typeof window>"u"||CSS.supports("mask-image",'url("")')||CSS.supports("-webkit-mask-image",'url("")'));return o.useEffect(()=>{"u">typeof window&&window.CSS&&c(CSS.supports("mask-image",'url("")')||CSS.supports("-webkit-mask-image",'url("")'))},[]),(e=>{let t=e.trim();return!!t.startsWith("data:image/svg+xml")||(t.split(/[?#]/)[0]??t).endsWith(".svg")})(e)&&s?n.jsx("span",{"data-supports-mask":s,className:r(t5.svg,a),style:{"--svg":`url("${e.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}")`,"--fill":t,"--hover-fill":i,...l??{}}}):n.jsx("img",{src:e,alt:"",className:r(t5.img,a),style:l})},t9={"top-left":s.topLeftAlignment,"top-center":s.topCenterAlignment,"top-right":s.topRightAlignment,"middle-left":s.middleLeftAlignment,"middle-center":s.middleCenterAlignment,"middle-right":s.middleRightAlignment,"bottom-left":s.bottomLeftAlignment,"bottom-center":s.bottomCenterAlignment,"bottom-right":s.bottomRightAlignment};function t6({color:e,className:t}){return n.jsx("svg",{viewBox:"0 0 10 18",className:t,children:n.jsx("g",{id:"Symbols",stroke:"none",strokeWidth:"1",fillRule:"evenodd",children:n.jsx("path",{d:"M-3.70710678,4.29289322 C-3.34662282,3.93240926 -2.77939176,3.90467972 -2.38710056,4.20970461 L-2.29289322,4.29289322 L5,11.585 L12.2928932,4.29289322 C12.6533772,3.93240926 13.2206082,3.90467972 13.6128994,4.20970461 L13.7071068,4.29289322 C14.0675907,4.65337718 14.0953203,5.22060824 13.7902954,5.61289944 L13.7071068,5.70710678 L5.70710678,13.7071068 C5.34662282,14.0675907 4.77939176,14.0953203 4.38710056,13.7902954 L4.29289322,13.7071068 L-3.70710678,5.70710678 C-4.09763107,5.31658249 -4.09763107,4.68341751 -3.70710678,4.29289322 Z",id:"Shape-Copy",fill:e,transform:"translate(5, 9) rotate(-90) translate(-5, -9)"})})})}let t7={element:function({settings:e,content:t,styles:i,isEditor:l}){let[c,d]=o.useState(null),{widthSettings:u,fontSettings:p,letterSpacing:m,textAlign:g,wordSpacing:h,fontSizeLineHeight:f,textAppearance:y,color:v}=i.imageCaption??{},[x,b]=o.useState(void 0),[w,$]=o.useState(null),[S,C]=o.useState(0),[P,L]=o.useState(0),{direction:T,transition:M,controls:E,pagination:I,imageCaption:k,triggers:R}=e,F=o.useRef(M.type),{x:A,y:W}=e.controls.offset,H=e=>{c&&c.go(e)};return o.useEffect(()=>{if(!w)return;let e=new ResizeObserver(e=>{if(!c)return;let[t]=e;b({width:Math.round(t.contentRect.width),height:Math.round(t.contentRect.height)})});return e.observe(w),()=>e.unobserve(w)},[w]),o.useEffect(()=>{c&&F.current!==M.type&&(L(e=>e+1),F.current=M.type)},[M.type]),n.jsx("div",{className:r(s.wrapper,{[s.editor]:l}),ref:$,children:n.jsxs("div",{className:s.sliderInner,style:{width:x?x.width:"100%",height:x?x.height:"100%",backgroundColor:M.backgroundColor&&"fade in"===M.type?M.backgroundColor:"transparent"},children:[e.imageCaption.isActive&&n.jsx("div",{className:r(s.captionBlock),children:n.jsx("div",{className:s.captionTextWrapper,children:t.map((e,t)=>n.jsx("div",{className:r(s.captionText,t9[k.alignment],{[s.withPointerEvents]:t===S&&l,[s.active]:t===S}),style:{fontFamily:t0(p.fontFamily),fontWeight:p.fontWeight,fontStyle:p.fontStyle,width:"auto"===u.sizing?"max-content":a.scalingValue(u.width,l),letterSpacing:a.scalingValue(m,l),wordSpacing:a.scalingValue(h,l),textAlign:g,fontSize:a.scalingValue(f.fontSize,l),lineHeight:a.scalingValue(f.lineHeight,l),textTransform:y.textTransform??"none",textDecoration:y.textDecoration??"none",fontVariant:y.fontVariant??"normal",color:v,transitionDuration:M.duration?`${Math.round(parseInt(M.duration)/2)}ms`:"500ms"},children:n.jsx("div",{"data-styles":"imageCaption",className:s.captionTextInner,style:{"--link-hover-color":k.linkHoverColor,"--link-color":k.linkColor,position:"relative",top:a.scalingValue(k.offset.y,l),left:a.scalingValue(k.offset.x,l)},children:n.jsx(t3,{content:e.imageCaption})})},t))})}),n.jsx(tJ,{onMove:e=>{C(e.index)},ref:d,options:{arrows:!1,speed:M.duration?parseInt(M.duration):500,autoplay:null!==R.autoPlay,...null!==R.autoPlay&&{interval:1e3*parseInt(R.autoPlay)},direction:"horiz"===T||"fade in"===M.type?"ltr":"ttb",pagination:!1,drag:R.triggersList.drag,perPage:1,width:x?x.width:"100%",height:x?x.height:"100%",type:"fade in"===M.type?"fade":"loop",rewind:!0},children:t.map((e,t)=>n.jsx(tZ,{children:n.jsx("div",{className:s.sliderItem,children:n.jsx("div",{className:s.imgWrapper,children:n.jsx("img",{className:r(s.sliderImage,{[s.contain]:"contain"===e.image.objectFit,[s.cover]:"cover"===e.image.objectFit}),src:e.image.url,alt:e.image.name??""})})})},t))},P),E.isActive&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:r(s.arrow,{[s.arrowVertical]:"vert"===T,[s.hoverArrow]:"on hover"===E.show}),style:{color:E.color,"--arrow-hover-color":E.hover},children:n.jsxs("button",{onClick:()=>{H("-1")},className:s.arrowInner,style:{transform:`translate(${a.scalingValue(A,l)}, ${a.scalingValue(W*("horiz"===T?1:-1),l)}) scale(${e.controls.scale/100}) rotate(${"horiz"===T?"0deg":"90deg"})`},children:[E.arrowsImgUrl&&n.jsx(t4,{url:E.arrowsImgUrl,fill:E.color,hoverFill:E.hover,className:r(s.arrowImg,s.mirror)}),!E.arrowsImgUrl&&n.jsx(t6,{color:E.color,className:r(s.arrowIcon,s.arrowImg,s.mirror)})]})}),n.jsx("div",{className:r(s.arrow,s.nextArrow,{[s.arrowVertical]:"vert"===T,[s.hoverArrow]:"on hover"===E.show}),style:{color:E.color,"--arrow-hover-color":E.hover},children:n.jsxs("button",{className:s.arrowInner,onClick:()=>H("+1"),style:{transform:`translate(${a.scalingValue(A*("horiz"===T?-1:1),l)}, ${a.scalingValue(W,l)}) scale(${e.controls.scale/100}) rotate(${"horiz"===T?"0deg":"90deg"})`},children:[E.arrowsImgUrl&&n.jsx(t4,{url:E.arrowsImgUrl,fill:E.color,hoverFill:E.hover,className:s.arrowImg}),!E.arrowsImgUrl&&n.jsx(t6,{color:E.color,className:r(s.arrowIcon,s.arrowImg)})]})})]}),R.triggersList.click&&n.jsx("div",{className:s.clickOverlay,onClick:()=>{c&&c.go("+1")}}),I.isActive&&n.jsx("div",{className:r(s.pagination,{[s.paginationInsideBottom]:"inside-1"===I.position&&"horiz"===T,[s.paginationInsideTop]:"inside-2"===I.position&&"horiz"===T,[s.paginationOutsideBottom]:"outside-1"===I.position&&"horiz"===T,[s.paginationOutsideTop]:"outside-2"===I.position&&"horiz"===T,[s.paginationInsideLeft]:"inside-1"===I.position&&"vert"===T,[s.paginationInsideRight]:"inside-2"===I.position&&"vert"===T,[s.paginationOutsideLeft]:"outside-1"===I.position&&"vert"===T,[s.paginationOutsideRight]:"outside-2"===I.position&&"vert"===T,[s.paginationVertical]:"vert"===T}),children:n.jsx("div",{className:s.paginationInner,style:{backgroundColor:I.colors[2],transform:`scale(${I.scale/100}) translate(${a.scalingValue(I.offset.x,l)}, ${a.scalingValue(I.offset.y,l)}) rotate(${"horiz"===T?"0deg":"90deg"})`},children:t.map((e,t)=>n.jsx("button",{onClick:()=>{c&&c.go(t)},className:r(s.paginationItem),children:n.jsx("div",{className:r(s.dot,{[s.activeDot]:t===S}),style:{backgroundColor:t===S?I.colors[0]:I.colors[1],"--pagination-hover-color":I.hover}})},t))})})]})})},id:"control-slider",name:"Slider",preview:{type:"image",url:"https://cdn.cntrl.site/component-assets/Slider.mp4"},defaultSize:{d:{width:400,height:400},t:{width:400,height:400},m:{width:300,height:300}},assetsPaths:{content:[{path:"image.url",placeholderEnabled:!0}],parameters:[{path:"settings.controls.arrowsImgUrl"}]},fontSettingsPaths:{content:[],parameters:[{path:"styles.imageCaption.fontSettings"}]},schema:{type:"object",properties:{settings:{type:"object",display:{type:"settings-block"},properties:{triggers:{title:"triggers",icon:"target",tooltip:"Triggers",type:"object",properties:{triggersList:{type:"object",display:{type:"toggle-ratio-group"},properties:{click:{type:"boolean"},drag:{type:"boolean"}}},autoPlay:{type:["string","null"],label:"Auto",display:{type:"step-selector"},enum:[null,"1s","2s","3s","4s","5s"]}}},direction:{icon:"horizontal-resize",tooltip:"Direction",type:"string",display:{type:"ratio-group"},enum:["horiz","vert"]},transition:{title:"transit",icon:"transition",tooltip:"Transition",type:"object",properties:{type:{type:"string",display:{type:"ratio-group"},enum:["slide","fade in"]},backgroundColor:{type:["string","null"],title:"BG Color",display:{visible:!1,type:"settings-color-picker",format:"single"}},duration:{type:"string",label:"icon:hourglass",display:{type:"step-selector"},enum:["100ms","250ms","500ms","1000ms","1500ms","2000ms"]}}},controls:{title:"controls",icon:"controls",tooltip:"Controls",type:"object",properties:{isActive:{type:"boolean",display:{type:"setting-toggle"}},arrowsImgUrl:{type:["string","null"],display:{type:"settings-image-input"}},offset:{type:"object",title:"Offset",display:{type:"group"},properties:{x:{type:"number",label:"X",scalingEnabled:!0,display:{type:"numeric-input",visible:!0}},y:{type:"number",label:"Y",scalingEnabled:!0,display:{type:"numeric-input",visible:!0}}}},scale:{type:"number",title:"scale",min:50,max:600,display:{type:"range-control"}},color:{title:"color",type:"string",display:{type:"settings-color-picker",format:"single"}},hover:{title:"hover",type:"string",display:{type:"settings-color-picker",format:"single"}},show:{title:"Show",type:"string",display:{type:"ratio-group"},enum:["always","on hover"]}}},pagination:{title:"nav",icon:"pagination",tooltip:"Navigation",type:"object",properties:{isActive:{type:"boolean",display:{type:"setting-toggle"}},position:{display:{type:"socket",direction:"horizontal"},type:"string",enum:["outside-1","outside-2","inside-1","inside-2"]},offset:{type:"object",title:"Offset",display:{type:"group"},properties:{x:{type:"number",label:"X",scalingEnabled:!0,display:{type:"numeric-input",visible:!0}},y:{type:"number",label:"Y",scalingEnabled:!0,display:{type:"numeric-input",visible:!0}}}},scale:{type:"number",title:"scale",min:10,max:400,display:{type:"range-control"}},colors:{display:{type:"settings-color-picker",format:"multiple"},title:"color",type:"array",items:{type:"string"}},hover:{title:"hover",type:"string",display:{type:"settings-color-picker",format:"single"}}}},imageCaption:{title:"Caption",icon:"text-icon",tooltip:"Caption",type:"object",properties:{isActive:{type:"boolean",display:{type:"setting-toggle"}},alignment:{type:"string",display:{type:"align-grid"},enum:["top-left","top-center","top-right","middle-left","middle-center","middle-right","bottom-left","bottom-center","bottom-right"]},offset:{type:"object",title:"Offset",display:{type:"group"},properties:{x:{type:"number",label:"X",scalingEnabled:!0,display:{type:"numeric-input",visible:!0}},y:{type:"number",label:"Y",scalingEnabled:!0,display:{type:"numeric-input",visible:!0}}}},linkColor:{title:"Link",type:"string",display:{type:"settings-color-picker",format:"single"}},linkHoverColor:{title:"Link Hov",type:"string",display:{type:"settings-color-picker",format:"single"}}}}},default:{triggers:{triggersList:{click:!1,drag:!0},autoPlay:null},controls:{isActive:!0,arrowsImgUrl:null,offset:{x:0,y:0},scale:100,color:"#000000",hover:"#cccccc",show:"always"},transition:{type:"slide",duration:"500ms",backgroundColor:null},pagination:{isActive:!0,scale:50,position:"inside-1",offset:{x:0,y:0},colors:["#cccccc","#cccccc","#000000"],hover:"#cccccc"},direction:"horiz",imageCaption:{offset:{x:0,y:0},isActive:!0,alignment:"middle-center",linkColor:"#cccccc",linkHoverColor:"#cccccc"}},displayRules:[{if:{name:"direction",value:"vert"},then:{name:"properties.pagination.properties.position.display.direction",value:"vertical"}},{if:{name:"transition.type",value:"fade in"},then:{name:"properties.transition.properties.backgroundColor.display.visible",value:!0}}]},content:{type:"array",settings:{addItemFromFileExplorer:!0},items:{type:"object",properties:{image:{type:"object",label:"Image",display:{type:"media-input"},properties:{url:{type:"string"},name:{type:"string"},objectFit:{type:"string",enum:["cover","contain"]}},required:["url","name"]},imageCaption:{placeholder:"Add Caption...",label:"Description",display:{type:"rich-text"}}},required:["image"]},default:[{image:{objectFit:"cover",url:"https://cdn.cntrl.site/component-assets/Control-slider-default-picture-1.png",name:"Slider-1.png"},imageCaption:[{type:"paragraph",children:[{text:""}]}]},{image:{objectFit:"cover",url:"https://cdn.cntrl.site/component-assets/Control-slider-default-picture-2.png",name:"Slider-2.png"},imageCaption:[{type:"paragraph",children:[{text:""}]}]},{image:{objectFit:"cover",url:"https://cdn.cntrl.site/component-assets/Control-slider-default-picture-3.png",name:"Slider-3.png"},imageCaption:[{type:"paragraph",children:[{text:""}]}]}]},styles:{type:"object",properties:{imageCaption:{dataName:"caption",type:"object",properties:{fontSettings:{type:"object",display:{type:"font-settings"},properties:{fontFamily:{type:"string"},fontWeight:{type:"number"},fontStyle:{type:"string"}}},widthSettings:{display:{type:"text-width-control"},type:"object",properties:{width:{type:"number"},sizing:{type:"string",enum:["auto","manual"]}}},fontSizeLineHeight:{type:"object",display:{type:"font-size-line-height"},properties:{fontSize:{type:"number"},lineHeight:{type:"number"}}},letterSpacing:{display:{type:"letter-spacing-input"},type:"number"},wordSpacing:{display:{type:"word-spacing-input"},type:"number"},textAlign:{display:{type:"text-align-control"},type:"string",enum:["left","center","right","justify"]},textAppearance:{display:{type:"text-appearance"},properties:{textTransform:{type:"string",enum:["none","uppercase","lowercase","capitalize"]},textDecoration:{type:"string",enum:["none","underline"]},fontVariant:{type:"string",enum:["normal","small-caps"]}}},color:{display:{type:"style-panel-color-picker"},type:"string"}}}},default:{imageCaption:{widthSettings:{width:.13,sizing:"auto"},fontSettings:{fontFamily:"Arial",fontWeight:400,fontStyle:"normal"},fontSizeLineHeight:{fontSize:.02,lineHeight:.02},letterSpacing:0,wordSpacing:0,textAlign:"left",textAppearance:{textTransform:"none",textDecoration:"none",fontVariant:"normal"},color:"#000000"}}}},required:["settings","content","styles"]}},t8={imageRevealSlider:"ImageRevealSlider-module__imageRevealSlider___UE5Ob",image:"ImageRevealSlider-module__image___Qjt-e",link:"ImageRevealSlider-module__link___N-iLG",cursor:"ImageRevealSlider-module__cursor___2U03d"};function ie(e,t,i){for(let n of i){let i=new Image;i.src=n.url;let o=n.width?Number.parseFloat(n.width):i.naturalWidth,r=i.naturalHeight/i.naturalWidth*o,a=o/2,l=r/2;if(e>=n.x-a&&e<=n.x+a&&t>=n.y-l&&t<=n.y+l)return!0}return!1}function it(e){return new Promise(t=>{let i=new Image;i.src=e,i.onload=()=>{t({width:i.naturalWidth,height:i.naturalHeight})}})}async function ii(e,t,i,n){let o,r;if("custom"===t){o=i;let t=await it(e);r=t.height/t.width*o}else if("random"===t){o=Math.random()*(n.max-n.min)+n.min;let t=await it(e);r=t.height/t.width*o}else{let t=await it(e);o=t.width,r=t.height}return{width:o,height:r,finalWidth:`${o}px`}}let io={element:function({settings:e,content:t,isEditor:i}){let[r,a]=o.useState(null),[l,s]=o.useState([]),[c,d]=o.useState(0),u=o.useRef(0),[p,m]=o.useState({x:0,y:0}),[g,h]=o.useState(1),[f,y]=o.useState("none"),v=o.useRef({x:0,y:0}),[x,b]=o.useState(!1),{sizeType:w,imageWidth:$,randomRangeImageWidth:S}=e.imageSize,{revealPosition:C,visible:P}=e.position,{cursorType:L,target:T,defaultCursorScale:M,defaultCursor:E,hoverCursorScale:I,hoverCursor:k}=e.cursor;o.useEffect(()=>{if(!r)return;let e=(e,t)=>{let i=r.getBoundingClientRect(),n=e-i.left,o=t-i.top;if(m({x:n,y:o}),"system"===L){y("none"),h(1);return}let a=document.elementFromPoint(i.left+n,i.top+o);if(a&&a.closest("a")){y("none"),h(1);return}let s=ie(n,o,l)||"area"===T?{img:k??"none",scale:I}:{img:E??"none",scale:M};y(s.img),h(s.scale)},t=t=>{t.stopPropagation(),v.current={x:t.clientX,y:t.clientY},e(t.clientX,t.clientY)},i=()=>{x&&e(v.current.x,v.current.y)};return r.addEventListener("mousemove",t),window.addEventListener("scroll",i,!0),()=>{r.removeEventListener("mousemove",t),window.removeEventListener("scroll",i,!0)}},[r,x,p,L,T,k,E,I,M,l]),o.useEffect(()=>{x||(y("none"),h(0))},[x]);let R=async(e,t,i,n={})=>{let{width:o,height:r,finalWidth:a}=await ii(e.image.url,w,$,S),l=0,s=0;"same"===C?(l=t/2,s=i/2):(l=n.x??Math.random()*t,s=n.y??Math.random()*i);let c=Math.min(Math.max(l,o/2),t-o/2),d=Math.min(Math.max(s,r/2),i-r/2);return{id:u.current++,url:e.image.url,link:e.link,name:e.image.name,x:c,y:d,width:a}};o.useEffect(()=>{if(!r||0===t.length)return;let e=r.getBoundingClientRect(),i=e.width,n=e.height,o=[];(async()=>{let e=t[0],r=await R(e,i,n);o.push(r),s(o),d(1)})()},[w,$,S,C,r]),o.useEffect(()=>{"last One"===P&&s(e=>e.length>0?[e[e.length-1]]:[])},[P]);let F=async e=>{if(!r)return;let i=r.getBoundingClientRect(),n=e.clientX-i.left,o=e.clientY-i.top;if("image"===T&&!ie(n,o,l))return;let a=0,u=0;"on Click"===C?(a=n,u=o):"same"===C?(a=i.width/2,u=i.height/2):(a=Math.random()*i.width,u=Math.random()*i.height);let p=t[c],m=await R(p,i.width,i.height,{x:a,y:u});s(e=>"all"===P?[...e,m]:[m]),d(e=>e>=t.length-1?0:e+1)};return n.jsxs("div",{ref:a,onClick:F,onMouseEnter:()=>b(!0),onMouseLeave:()=>b(!1),className:t8.imageRevealSlider,style:{cursor:"none"===f?"default":"none"},children:[l.map(e=>n.jsx("div",{className:t8.wrapper,style:{top:`${e.y}px`,left:`${e.x}px`,position:"absolute",transform:"translate(-50%, -50%)",width:e.width??"auto",height:"auto",cursor:"none"===f?"default":"none"},children:"area"===T&&e.link?n.jsx("a",{href:e.link,target:"_blank",className:t8.link,children:n.jsx("img",{src:e.url,alt:e.name,className:t8.image},e.id)}):n.jsx("img",{src:e.url,alt:e.name,className:t8.image},e.id)},e.id)),x&&n.jsx("div",{className:t8.cursor,style:{left:`${p.x}px`,top:`${p.y}px`,transform:`translate(-50%, -50%) scale(${g})`,backgroundImage:`url('${f}')`,backgroundSize:"cover",backgroundPosition:"center",position:"absolute",pointerEvents:"none"}})]})},id:"control-image-reveal",name:"Click Gallery",preview:{type:"image",url:"https://cdn.cntrl.site/component-assets/Click_Gallery.mp4"},defaultSize:{d:{width:"100%",height:"100%"},t:{width:"100%",height:"100%"},m:{width:"100%",height:"100%"}},assetsPaths:{content:[{path:"image.url",placeholderEnabled:!0}],parameters:[{path:"settings.cursor.defaultCursor"},{path:"settings.cursor.hoverCursor"}]},fontSettingsPaths:{content:[],parameters:[]},schema:{type:"object",properties:{settings:{type:"object",display:{type:"settings-block"},properties:{imageSize:{title:"IMG SIZE",icon:"size",tooltip:"IMG SIZE",type:"object",properties:{sizeType:{type:"string",display:{type:"ratio-group"},enum:["as Is","custom","random"]},imageWidth:{type:"number",label:"W",display:{type:"numeric-input",visible:!1}},randomRangeImageWidth:{type:"object",display:{type:"random-range-controls",visible:!1},properties:{min:{type:"number"},max:{type:"number"}}}}},cursor:{title:"cursor",icon:"cursor",tooltip:"cursor",type:"object",properties:{cursorType:{type:"string",display:{type:"ratio-group"},enum:["system","custom"]},target:{type:"string",title:"Target",display:{type:"ratio-group"},enum:["area","image"]},defaultCursor:{type:["string","null"],title:"Default",display:{type:"settings-image-input",visible:!1}},defaultCursorScale:{type:"number",title:"Scale",min:1,max:5,step:.1,display:{type:"range-control",visible:!1}},hoverCursor:{type:["string","null"],title:"Hover",display:{type:"settings-image-input",visible:!1}},hoverCursorScale:{type:"number",title:"Scale",min:1,max:5,step:.1,display:{type:"range-control",visible:!1}}}},position:{title:"position",icon:"transition",tooltip:"Position",type:"object",properties:{revealPosition:{type:"string",display:{type:"ratio-group"},enum:["random","same","on Click"]},visible:{type:"string",title:"Visible",display:{type:"ratio-group"},enum:["all","last One"]}}}},default:{imageSize:{sizeType:"custom",imageWidth:500,randomRangeImageWidth:{min:100,max:1e3}},cursor:{cursorType:"system",target:"area",defaultCursor:null,defaultCursorScale:2,hoverCursor:null,hoverCursorScale:2},position:{revealPosition:"random",visible:"all"}},displayRules:[{if:{name:"imageSize.sizeType",value:"custom"},then:{name:"properties.imageSize.properties.imageWidth.display.visible",value:!0}},{if:{name:"imageSize.sizeType",value:"random"},then:{name:"properties.imageSize.properties.randomRangeImageWidth.display.visible",value:!0}},{if:[{name:"cursor.target",value:"image"},{name:"cursor.cursorType",value:"custom"}],then:{name:"properties.cursor.properties.defaultCursor.display.visible",value:!0}},{if:[{name:"cursor.target",value:"image"},{name:"cursor.cursorType",value:"custom"},{name:"cursor.defaultCursor",value:null,isNotEqual:!0}],then:{name:"properties.cursor.properties.defaultCursorScale.display.visible",value:!0}},{if:{name:"cursor.cursorType",value:"custom"},then:{name:"properties.cursor.properties.hoverCursor.display.visible",value:!0}},{if:[{name:"cursor.cursorType",value:"custom"},{name:"cursor.hoverCursor",value:null,isNotEqual:!0}],then:{name:"properties.cursor.properties.hoverCursorScale.display.visible",value:!0}}]},content:{type:"array",settings:{addItemFromFileExplorer:!0},items:{type:"object",properties:{image:{type:"object",label:"Image",display:{isObjectFitEditable:!1,type:"media-input"},properties:{url:{type:"string"},name:{type:"string"},objectFit:{type:"string",enum:["cover","contain"]}},required:["url","name"]},link:{label:"URL",placeholder:"Enter link...",display:{type:"text-input"}}},required:["image"]},default:[{image:{objectFit:"cover",url:"https://cdn.cntrl.site/projects/01JJKT02AWY2FGN2QJ7A173RNZ/articles-assets/01K7ERQK9211QXBE9W284ZNKB8.png",name:"Slider-1.png"},link:""},{image:{objectFit:"cover",url:"https://cdn.cntrl.site/projects/01JJKT02AWY2FGN2QJ7A173RNZ/articles-assets/01K7ERQMFT72JD18WKP0Q2DVAT.png",name:"Slider-2.png"},link:""},{image:{objectFit:"cover",url:"https://cdn.cntrl.site/projects/01JJKT02AWY2FGN2QJ7A173RNZ/articles-assets/01K7ERQNEVRXPSRX5K1YTMJQY9.png",name:"Slider-3.png"},link:""},{image:{objectFit:"cover",url:"https://cdn.cntrl.site/projects/01JJKT02AWY2FGN2QJ7A173RNZ/articles-assets/01K7ERQP84JKRDT7WNWDQZR4Y9.png",name:"Slider-4.png"},link:""}]}}}},ir={hidden:"LightBox-module__hidden___9s-9x",heroImage:"LightBox-module__heroImage___sTxNF",background:"LightBox-module__background___rm9ml",editor:"LightBox-module__editor___4ACaY",contentStyle:"LightBox-module__contentStyle___Bgnsq",imageStyle:"LightBox-module__imageStyle___tLIlB",imgWrapper:"LightBox-module__imgWrapper___LuFUp",contain:"LightBox-module__contain___8-yaS",cover:"LightBox-module__cover___hNvOG",caption:"LightBox-module__caption___b6L2I",captionTextInner:"LightBox-module__captionTextInner___rCGNH",lightboxSplide:"LightBox-module__lightboxSplide___XFuWC",arrow:"LightBox-module__arrow___iz38X",arrowVertical:"LightBox-module__arrowVertical___Zfz81",nextArrow:"LightBox-module__nextArrow___zkAQN",arrowInner:"LightBox-module__arrowInner___p48sW",arrowIcon:"LightBox-module__arrowIcon___3VaFf",arrowImg:"LightBox-module__arrowImg___pNV88",mirror:"LightBox-module__mirror___pjeXc",thumbsWrapper:"LightBox-module__thumbsWrapper___GB-nU",thumbsContainerVertical:"LightBox-module__thumbsContainerVertical___wttk5",thumbsContainer:"LightBox-module__thumbsContainer___osSma",thumbsAlignStart:"LightBox-module__thumbsAlignStart___MO6tY",thumbsAlignCenter:"LightBox-module__thumbsAlignCenter___Q4sUx",thumbsAlignEnd:"LightBox-module__thumbsAlignEnd___p4y9R",thumbItem:"LightBox-module__thumbItem___HvnF3",closeButton:"LightBox-module__closeButton___g2khP",fadeIn:"LightBox-module__fadeIn___0m5GW",slideInLeft:"LightBox-module__slideInLeft___gPYwC",slideInRight:"LightBox-module__slideInRight___S-pPp",slideInTop:"LightBox-module__slideInTop___DFdAj",slideInBottom:"LightBox-module__slideInBottom___m27kZ",fadeOut:"LightBox-module__fadeOut___55qBR",slideOutLeft:"LightBox-module__slideOutLeft___NvU7P",slideOutRight:"LightBox-module__slideOutRight___SK7eC",slideOutTop:"LightBox-module__slideOutTop___Vgg0z",slideOutBottom:"LightBox-module__slideOutBottom___nJ0Ef",scaleSlide:"LightBox-module__scaleSlide___vZriG"},ia=(e,t,i)=>{let n={},[o,r]=e.split("-");return"top"===o?(n.top="0",n.bottom="auto"):"middle"===o?(n.top="50%",n.bottom="auto"):"bottom"===o&&(n.top="auto",n.bottom="0"),"left"===r?(n.left="0",n.right="auto"):"center"===r?(n.left="50%",n.right="auto"):"right"===r&&(n.left="auto",n.right="0"),"middle"===o&&"center"===r?n.transform=`translate(calc(-50% + ${a.scalingValue(t.x,i)}), calc(-50% + ${a.scalingValue(t.y,i)}))`:"middle"===o?n.transform=`translate(${a.scalingValue(t.x,i)}, calc(-50% + ${a.scalingValue(t.y,i)}))`:"center"===r?n.transform=`translate(calc(-50% + ${a.scalingValue(t.x,i)}), ${a.scalingValue(t.y,i)})`:n.transform=`translate(${a.scalingValue(t.x,i)}, ${a.scalingValue(t.y,i)})`,n};function il(e){let t=window.getComputedStyle(e);return{top:parseFloat(t.paddingTop)||0,right:parseFloat(t.paddingRight)||0,bottom:parseFloat(t.paddingBottom)||0,left:parseFloat(t.paddingLeft)||0}}function is(e){let t,i,n=e.getBoundingClientRect(),o=il(e),r=Math.max(0,n.width-o.left-o.right),a=Math.max(0,n.height-o.top-o.bottom),l=e.naturalWidth/e.naturalHeight;l>r/a?(t=r,i=r/l):(i=a,t=a*l);let s=n.left+o.left;return{x:(r-t)/2+s,y:(a-i)/2+(n.top+o.top),width:t,height:i}}function ic(e){let t=e.getBoundingClientRect(),i=il(e);return{left:t.left+i.left,right:t.right-i.right,top:t.top+i.top,bottom:t.bottom-i.bottom}}function id(e){let t=e.match(/rgba?\(([^)]+)\)/);if(t){let e=t[1].split(",").map(e=>parseFloat(e.trim()));return 4===e.length?e[3]:1}let i=e.match(/^#([0-9a-fA-F]{8})$/);return i?parseInt(i[1].substring(6,8),16)/255:(e.match(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/),1)}let iu=({isOpen:e,onClose:t,content:i,lightboxStyles:s,settings:c,portalId:d,isEditor:u,metadata:p})=>{var m;let{widthSettings:g,fontSettings:h,letterSpacing:f,textAlign:y,wordSpacing:v,fontSizeLineHeight:x,textAppearance:b,color:w}=s.imageCaption??{},[$,S]=o.useState(0),[C,P]=o.useState(0),[L,T]=o.useState(!1),[M,E]=o.useState(!1),[I,k]=o.useState({}),R=o.useRef(null),F=o.useRef(null),A=o.useRef(null),W=o.useRef(!1),H=o.useRef(null),_=o.useRef(null),N=o.useRef(null),j=o.useRef(null),z=o.useRef(!1),B=o.useRef(null),[O,D]=o.useState(!1),{appear:V,triggers:q,slider:G,thumbnail:K,controls:U,area:X,caption:Y,layout:J}=c.lightboxBlock,{appearClass:Z,backdropAppearClass:Q,backdropDisappearClass:ee,disappearClass:et}=function(e,t){let i=(()=>{if("fade in"===e)return ir.fadeIn;if("slide in"===e||"mix"===e)switch(t){case"left":return ir.slideInLeft;case"right":default:return ir.slideInRight;case"top":return ir.slideInTop;case"bottom":return ir.slideInBottom}return ir.fadeIn})(),n=(()=>{if("fade in"===e||"mix"===e)return ir.fadeIn;if("slide in"===e)switch(t){case"left":return ir.slideInLeft;case"right":default:return ir.slideInRight;case"top":return ir.slideInTop;case"bottom":return ir.slideInBottom}return ir.fadeIn})();return{appearClass:i,backdropAppearClass:n,backdropDisappearClass:(()=>{if("fade in"===e||"mix"===e)return ir.fadeOut;if("slide in"===e)switch(t){case"left":return ir.slideOutLeft;case"right":default:return ir.slideOutRight;case"top":return ir.slideOutTop;case"bottom":return ir.slideOutBottom}return ir.fadeOut})(),disappearClass:(()=>{if("fade in"===e)return ir.fadeOut;if("slide in"===e||"mix"===e)switch(t){case"left":return ir.slideOutLeft;case"right":default:return ir.slideOutRight;case"top":return ir.slideOutTop;case"bottom":return ir.slideOutBottom}return ir.fadeOut})()}}(V.type,V.direction),ei=(null==p?void 0:p.itemId)??null;o.useEffect(()=>{let e=()=>{setTimeout(()=>{var e,t;null==(t=null==(e=R.current)?void 0:e.splide)||t.refresh()},16)},t=()=>{P(e=>e+1)};return window.addEventListener("ArticleEditor.Layout:change",e),window.addEventListener("ArticleEditor.ComponentContent:change",t),()=>{window.removeEventListener("ArticleEditor.Layout:change",e),window.removeEventListener("ArticleEditor.ComponentContent:change",t)}},[]),o.useEffect(()=>{if(!e||!K.isActive)return void D(!1);let t=B.current;if(!t)return;let i=()=>{"horiz"===G.direction?D(t.scrollWidth>t.clientWidth):D(t.scrollHeight>t.clientHeight)};i();let n=new ResizeObserver(i);return n.observe(t),()=>n.disconnect()},[e,K.isActive,i.length,I,G.direction]);let en=o.useCallback(()=>{let e=window.matchMedia("(max-width: 768px)").matches,i=id(X.color);e&&!u&&i>.9&&(document.body.style.backgroundColor=""),T(!0),W.current=!0;let n=e=>{e.target===H.current&&e.animationName&&(H.current&&_.current&&H.current.removeEventListener("animationend",_.current),_.current=null,W.current&&(W.current=!1,t()),T(!1))};H.current&&(_.current=n,H.current.addEventListener("animationend",n))},[t,X.color,u]),eo=e=>{let t,n,o;if(z.current){z.current=!1;return}let r=i[$],a=(null==r?void 0:r.image.objectFit)==="cover";if("changedTouches"in e&&e.changedTouches.length>0)t=e.changedTouches[0].clientX,n=e.changedTouches[0].clientY;else{if(!("clientX"in e))return;t=e.clientX,n=e.clientY}if(a&&A.current){let e=ic(A.current);o=t>=e.left&&t<=e.right&&n>=e.top&&n<=e.bottom}else{let i=A.current?is(A.current):null;if(!i){e.target===e.currentTarget&&en();return}o=t>=i.x&&t<=i.x+i.width&&n>=i.y&&n<=i.y+i.height}o?((e,t,n)=>{var o,r;if(e){if("click"===q.type&&"image"===q.switch)"close"===q.repeat&&$===i.length-1?en():null==(o=R.current)||o.go("+1");else if("click"===q.type&&"50/50"===q.switch){let i,o=e.getBoundingClientRect(),a=t-o.left,l=n-o.top,s=o.width,c=o.height;i="horiz"===G.direction?a<s/2?"-1":"+1":l<c/2?"-1":"+1",null==(r=R.current)||r.go(i)}}})(A.current,t,n):en()};o.useEffect(()=>{if(!e)return;let t=e=>{var t,n;if("Escape"===e.key)return void en();if("ArrowRight"===e.key){S(e=>(e+1)%Math.max(i.length,1)),null==(t=R.current)||t.go("+1");return}"ArrowLeft"===e.key&&(S(e=>(e-1+Math.max(i.length,1))%Math.max(i.length,1)),null==(n=R.current)||n.go("-1"))};return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}},[e,en,i.length]),o.useEffect(()=>{if(e){if(S(0),P(e=>e+1),W.current=!1,T(!1),E(!1),k({}),!ei)return;let e=new CustomEvent("page-overlay",{detail:{itemId:ei}});window.dispatchEvent(e)}return()=>{H.current&&_.current&&(H.current.removeEventListener("animationend",_.current),_.current=null),E(!1)}},[e,ei]),o.useEffect(()=>{null!==F.current&&F.current!==G.type&&P(e=>e+1),F.current=G.type},[G.type]),o.useEffect(()=>{if(!e)return;let t=document.body.style.overflow,i=window.matchMedia("(max-width: 768px)").matches,n=id(X.color);document.body.style.overflow="hidden",E(!1);let o=e=>{e.target===H.current&&!W.current&&e.animationName&&(i&&!u&&n>.9&&(document.body.style.backgroundColor=X.color),E(!0),H.current&&N.current&&H.current.removeEventListener("animationend",N.current),N.current=null)};H.current&&(N.current=o,H.current.addEventListener("animationend",o));let r=e=>{let t=e.target;t&&(t.closest(`.${ir.thumbsWrapper}`)||t.closest(`.${ir.thumbsContainer}`))||"slide"!==G.type&&e.preventDefault()};return document.addEventListener("touchmove",r,{passive:!1}),()=>{document.body.style.overflow=t,document.removeEventListener("touchmove",r),H.current&&N.current&&(H.current.removeEventListener("animationend",N.current),N.current=null),E(!1)}},[e,u,X.color,G.type]),o.useEffect(()=>{if(!e)return;let t=e=>{var t,n;if(W.current)return void e.stopPropagation();if(z.current){z.current=!1;return}let o=e.target;if(!(o&&(o.closest(`.${ir.thumbsContainer}`)||o.closest(`.${ir.thumbItem}`)||o.closest(`.${ir.arrow}`)||o.closest(`.${ir.closeButton}`)||o.closest(`.${ir.caption}`)))){if("slide"===G.type&&"drag"===q.type&&null!=(n=null==(t=R.current)?void 0:t.splide)&&n.root){let e=R.current.splide.root;if(o&&(e.contains(o)||e===o))return}if(0===e.touches.length&&e.changedTouches.length>0){let t,n=i[$],o=(null==n?void 0:n.image.objectFit)==="cover",r=e.changedTouches[0];if(o&&A.current){let e=ic(A.current);t=r.clientX>=e.left&&r.clientX<=e.right&&r.clientY>=e.top&&r.clientY<=e.bottom}else{let e=A.current?is(A.current):null;if(!e)return;t=r.clientX>=e.x&&r.clientX<=e.x+e.width&&r.clientY>=e.y&&r.clientY<=e.y+e.height}if(!t){e.stopPropagation(),W.current=!0;let t=e=>{e.stopPropagation(),e.preventDefault(),document.removeEventListener("click",t,!0)};document.addEventListener("click",t,!0),en()}}}};return document.addEventListener("touchend",t,{passive:!0}),()=>{document.removeEventListener("touchend",t)}},[e,en,$,i]);let er=("scale"===G.type||"fade"===G.type)&&"vert"===G.direction&&"drag"===q.type;o.useEffect(()=>{var t,i;if(!e||!er||!(null!=(i=null==(t=R.current)?void 0:t.splide)&&i.root))return;let n=R.current.splide.root,o=(e,t)=>{if(j.current){let i=Math.abs(e-j.current.x),n=Math.abs(t-j.current.y);(i>0||n>0)&&(z.current=!0)}},r=e=>{j.current&&(e.preventDefault(),o(e.clientX,e.clientY))},a=e=>{j.current&&e.touches.length>0&&(e.preventDefault(),o(e.touches[0].clientX,e.touches[0].clientY))},l=(e,t)=>{if(!j.current||!R.current){j.current=null;return}let i=Math.abs(e-j.current.x),n=Math.abs(t-j.current.y);n>30&&n>i&&R.current.go(t<j.current.y?"+1":"-1"),j.current=null},s=e=>{j.current&&l(e.clientX,e.clientY),document.removeEventListener("pointerup",s),document.removeEventListener("pointercancel",s),document.removeEventListener("pointermove",r)},c=e=>{if(j.current){if(e.changedTouches.length>0){let t=e.changedTouches[0];l(t.clientX,t.clientY)}document.removeEventListener("touchend",c),document.removeEventListener("touchcancel",c),document.removeEventListener("touchmove",a)}},d=e=>{j.current={x:e.clientX,y:e.clientY},z.current=!1,document.addEventListener("pointermove",r,{passive:!1}),document.addEventListener("pointerup",s),document.addEventListener("pointercancel",s)},u=e=>{e.touches.length>0&&(j.current={x:e.touches[0].clientX,y:e.touches[0].clientY},z.current=!1,document.addEventListener("touchmove",a,{passive:!1}),document.addEventListener("touchend",c),document.addEventListener("touchcancel",c))};return n.addEventListener("pointerdown",d),n.addEventListener("touchstart",u),()=>{n.removeEventListener("pointerdown",d),n.removeEventListener("touchstart",u),document.removeEventListener("pointermove",r),document.removeEventListener("pointerup",s),document.removeEventListener("pointercancel",s),document.removeEventListener("touchmove",a),document.removeEventListener("touchend",c),document.removeEventListener("touchcancel",c),j.current=null,z.current=!1}},[e,er,C]);let ea={backgroundColor:X.color,backdropFilter:`blur(${X.blur}px)`,animationDuration:`${parseInt(V.duration)}ms`,animationTimingFunction:"ease",animationFillMode:"both"};return typeof document>"u"||!document.getElementById(d)?null:l.createPortal(n.jsxs(n.Fragment,{children:[n.jsx("div",{ref:u?null:H,className:r(ir.background,L?ee:Q,{[ir.editor]:u},{[ir.hidden]:!e}),style:{...ea,...M&&!u&&!L?{position:"absolute"}:{}}}),n.jsxs("div",{ref:u?H:null,className:r(ir.contentStyle,L?et:Z,{[ir.editor]:u},{[ir.hidden]:!e}),style:{animationDuration:`${parseInt(V.duration)}ms`,animationTimingFunction:"ease",animationFillMode:"both"},children:[n.jsx(tJ,{onMove:e=>S(e.index),ref:R,className:ir.lightboxSplide,options:{arrows:!1,speed:G.duration?parseInt(G.duration):500,direction:"horiz"===G.direction||"fade"===G.type||"scale"===G.type?"ltr":"ttb",pagination:!1,drag:"drag"===q.type&&!er,perPage:1,width:"100%",height:"100%",type:"fade"===G.type||"scale"===G.type?"fade":"loop",padding:0,rewind:"close"!==q.repeat,start:0},style:{"--splide-speed":G.duration},children:i.map((e,t)=>{let i=ia(J.position,J.offset,u),o=`${a.scalingValue(J.padding.top,u)} ${a.scalingValue(J.padding.right,u)} ${a.scalingValue(J.padding.bottom,u)} ${a.scalingValue(J.padding.left,u)}`,l="scale"===G.type?(()=>{let{transform:e,...t}=i;return{...t,position:"absolute",padding:o,boxSizing:"border-box","--position-transform":e||"none"}})():{...i,position:"absolute",padding:o,boxSizing:"border-box"};return n.jsx(tZ,{children:n.jsx("div",{className:ir.imgWrapper,onClick:eo,children:n.jsx("img",{ref:t===$?A:null,className:r(ir.imageStyle,{[ir.contain]:"contain"===e.image.objectFit,[ir.cover]:"cover"===e.image.objectFit,[ir.scaleSlide]:"scale"===G.type}),src:e.image.url,alt:e.image.name??"",style:{...l,pointerEvents:"contain"===e.image.objectFit?"none":"auto"}})})},t)})},C),U.isActive&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:r(ir.arrow,{[ir.arrowVertical]:"vert"===G.direction}),style:{color:U.color,"--arrow-hover-color":U.hover},children:n.jsxs("button",{className:ir.arrowInner,style:{transform:`translate(${a.scalingValue(U.offset.x,u)}, ${a.scalingValue(U.offset.y*("horiz"===G.direction?1:-1),u)}) scale(${U.scale}) rotate(${"horiz"===G.direction?"0deg":"90deg"})`},onClick:()=>{var e;return null==(e=R.current)?void 0:e.go("-1")},"aria-label":"Previous",children:[U.arrowsImgUrl&&n.jsx(t4,{url:U.arrowsImgUrl,fill:U.color,hoverFill:U.hover,className:r(ir.arrowImg,ir.mirror)}),!U.arrowsImgUrl&&n.jsx(ip,{color:U.color,className:r(ir.arrowIcon,ir.arrowImg,ir.mirror)})]})}),n.jsx("div",{className:r(ir.arrow,ir.nextArrow,{[ir.arrowVertical]:"vert"===G.direction}),style:{color:U.color,"--arrow-hover-color":U.hover},children:n.jsxs("button",{className:ir.arrowInner,style:{transform:`translate(${a.scalingValue(U.offset.x*("horiz"===G.direction?-1:1),u)}, ${a.scalingValue(U.offset.y,u)}) scale(${U.scale}) rotate(${"horiz"===G.direction?"0deg":"90deg"})`},onClick:()=>{var e;return null==(e=R.current)?void 0:e.go("+1")},"aria-label":"Next",children:[U.arrowsImgUrl&&n.jsx(t4,{url:U.arrowsImgUrl,fill:U.color,hoverFill:U.hover,className:ir.arrowImg}),!U.arrowsImgUrl&&n.jsx(ip,{color:U.color,className:r(ir.arrowIcon,ir.arrowImg)})]})})]}),X.closeIconUrl&&(()=>{let e=ia(X.closeIconAlign,X.closeIconOffset,u),t=`scale(${X.closeIconScale})`,i=e.transform?`${e.transform} ${t}`:t;return n.jsx("button",{className:ir.closeButton,style:{...e,transform:i},onClick:en,"aria-label":"Close lightbox",children:n.jsx(t4,{url:X.closeIconUrl,fill:X.closeIconColor??"#000000",hoverFill:X.closeIconHover??"#cccccc"})})})(),Y&&Y.isActive&&s.imageCaption&&(null==(m=i[$])?void 0:m.imageCaption)&&n.jsx("div",{className:ir.caption,style:{...ia(Y.alignment,Y.offset,u),fontFamily:t0(h.fontFamily),fontWeight:h.fontWeight,fontStyle:h.fontStyle,width:"auto"===g.sizing?"max-content":a.scalingValue(g.width,u),letterSpacing:a.scalingValue(f,u),wordSpacing:a.scalingValue(v,u),textAlign:y,fontSize:a.scalingValue(x.fontSize,u),lineHeight:a.scalingValue(x.lineHeight,u),textTransform:b.textTransform??"none",textDecoration:b.textDecoration??"none",fontVariant:b.fontVariant??"normal",color:w},onClick:e=>e.stopPropagation(),children:n.jsx("div",{"data-styles":"imageCaption",className:ir.captionTextInner,style:{"--link-color":Y.linkColor,"--link-hover-color":Y.linkHoverColor},children:n.jsx(t3,{content:i[$].imageCaption})})}),K.isActive&&(()=>{let[e,t]=K.position.split("-"),o=ia("horiz"===G.direction?`${e}-left`:K.position,K.offset,u);return n.jsx("div",{ref:B,className:ir.thumbsWrapper,onClick:e=>(e=>{let t=e.target;(t.classList.contains(ir.thumbsWrapper)||t.classList.contains(ir.thumbsContainer))&&eo(e)})(e),style:{position:u?"absolute":"fixed",...o,..."horiz"===G.direction?{maxWidth:"100vw",width:"100%",overflowX:"auto",overflowY:"hidden"}:{maxHeight:"100vh",overflowY:"auto",overflowX:"hidden"}},children:n.jsx("div",{className:r(ir.thumbsContainer,{[ir.thumbsContainerVertical]:"vert"===G.direction,[ir.thumbsAlignStart]:"start"===K.align,[ir.thumbsAlignCenter]:"center"===K.align,[ir.thumbsAlignEnd]:"end"===K.align}),style:{gap:a.scalingValue(K.grid.gap,u),justifyContent:O?"flex-start":(()=>{if("horiz"===G.direction){if("left"===t)return"flex-start";if("center"===t)return"center";if("right"===t)return"flex-end"}else{if("top"===e)return"flex-start";if("middle"===e)return"center";if("bottom"===e)return"flex-end"}return"flex-start"})()},children:i.map((e,t)=>{let i=t===$,o=I[t],r=K.grid.size*(i?K.activeState.scale:1);return n.jsx("button",{className:ir.thumbItem,style:{..."horiz"===G.direction&&"fit"!==K.fit?{height:a.scalingValue(r,u)}:{},..."vert"===G.direction&&"fit"!==K.fit?{width:a.scalingValue(r,u)}:{},..."cover"===K.fit?{width:a.scalingValue(r,u),height:a.scalingValue(r,u)}:{},...(()=>{if("fit"!==K.fit)return{};if(!o)return"horiz"===G.direction?{height:a.scalingValue(r,u)}:{width:a.scalingValue(r,u)};let e=o.width/o.height;if("horiz"===G.direction){let t=r*e;return{width:a.scalingValue(t,u),height:a.scalingValue(r,u)}}{let t=r/e;return{width:a.scalingValue(r,u),height:a.scalingValue(t,u)}}})(),transition:i?"all 0.25s ease-out":"none",opacity:i?K.activeState.opacity/100:K.opacity/100,"--thumb-hover":K.activeState.opacity/100},onClick:e=>{var i;e.stopPropagation(),S(t),null==(i=R.current)||i.go(t)},onMouseEnter:()=>{var e;"hov"===K.triggers&&(null==(e=R.current)||e.go(t))},children:n.jsx("img",{src:e.image.url,alt:e.image.name??"",onLoad:e=>{let i=e.currentTarget;i.naturalWidth&&i.naturalHeight&&k(e=>({...e,[t]:{width:i.naturalWidth,height:i.naturalHeight}}))},style:{objectFit:"cover"===K.fit?"cover":"contain",..."fit"===K.fit?{maxWidth:"100%",maxHeight:"100%",objectFit:"contain"}:{},..."cover"===K.fit?{width:"100%",height:"100%"}:{}}})},`${e.image.name}-${t}`)})})})})()]})]}),document.getElementById(d))};function ip({color:e,className:t}){return n.jsx("svg",{viewBox:"0 0 10 18",className:t,children:n.jsx("g",{id:"Symbols",stroke:"none",strokeWidth:"1",fillRule:"evenodd",children:n.jsx("path",{d:"M-3.70710678,4.29289322 C-3.34662282,3.93240926 -2.77939176,3.90467972 -2.38710056,4.20970461 L-2.29289322,4.29289322 L5,11.585 L12.2928932,4.29289322 C12.6533772,3.93240926 13.2206082,3.90467972 13.6128994,4.20970461 L13.7071068,4.29289322 C14.0675907,4.65337718 14.0953203,5.22060824 13.7902954,5.61289944 L13.7071068,5.70710678 L5.70710678,13.7071068 C5.34662282,14.0675907 4.77939176,14.0953203 4.38710056,13.7902954 L4.29289322,13.7071068 L-3.70710678,5.70710678 C-4.09763107,5.31658249 -4.09763107,4.68341751 -3.70710678,4.29289322 Z",id:"Shape-Copy",fill:e,transform:"translate(5, 9) rotate(-90) translate(-5, -9)"})})})}let im={element:({settings:e,content:t,styles:i,portalId:r,activeEvent:a,isEditor:l,isPreviewMode:s})=>{let[c,d]=o.useState(!1),{url:u}=e.thumbnailBlock.cover;return o.useEffect(()=>{"close"===a&&d(!1),"open"===a&&d(!0)},[a]),n.jsxs(n.Fragment,{children:[n.jsx("img",{src:u,alt:"Cover",className:ir.heroImage,onClick:()=>d(!0)}),n.jsx(iu,{isOpen:c,onClose:()=>d(!1),content:t,settings:e,lightboxStyles:i,portalId:r,isEditor:l})]})},id:"lightbox",name:"Lightbox",preview:{type:"image",url:"https://cdn.cntrl.site/component-assets/Lightbox.png"},defaultSize:{d:{width:440,height:550},t:{width:235,height:293},m:{width:265,height:331}},fontSettingsPaths:{content:[],parameters:[{path:"styles.imageCaption.fontSettings"}]},assetsPaths:{content:[{path:"image.url",placeholderEnabled:!0}],parameters:[{path:"settings.thumbnailBlock.cover.url",placeholderEnabled:!0},{path:"settings.controls.arrowsImgUrl"},{path:"settings.area.closeIconUrl"}]},schema:{type:"object",properties:{settings:{type:"object",properties:{thumbnailBlock:{display:{type:"settings-block",triggerEvent:"close"},type:"object",properties:{cover:{title:"COVER",icon:"cover",tooltip:"Cover Image",type:"object",properties:{url:{type:"string",display:{type:"cover-image-input"}}}}}},lightboxBlock:{display:{type:"settings-block",triggerEvent:"open"},type:"object",properties:{appear:{title:"APPEAR",icon:"transition",tooltip:"Appearance",type:"object",properties:{type:{type:"string",display:{type:"ratio-group"},enum:["slide in","fade in","mix"]},duration:{type:"string",label:"T",display:{type:"step-selector"},enum:["100ms","250ms","500ms","1000ms","1500ms","2000ms"]},direction:{type:"string",title:"From",display:{type:"direction-control"},enum:["top","left","right","bottom"]}}},triggers:{title:"TRIGGERS",icon:"target",tooltip:"Triggers",type:"object",properties:{type:{type:"string",display:{type:"ratio-group"},enum:["click","drag"]},switch:{type:"string",display:{type:"ratio-group"},enum:["image","50/50"]},repeat:{type:"string",title:"Repeat",display:{visible:!1,type:"ratio-group"},enum:["close","loop"]}}},slider:{title:"SLIDER",icon:"horizontal-resize",tooltip:"Slider",type:"object",properties:{type:{type:"string",display:{type:"ratio-group"},enum:["slide","fade","scale"]},direction:{type:"string",display:{type:"ratio-group"},enum:["horiz","vert"]},duration:{type:"string",label:"T",display:{type:"step-selector"},enum:["100ms","250ms","500ms","1000ms","1500ms","2000ms"]}}},thumbnail:{title:"THUMB",icon:"thumbnail",tooltip:"Thumbnail",type:"object",properties:{isActive:{type:"boolean",display:{type:"setting-toggle"}},position:{display:{type:"align-grid"},type:"string",enum:["top-left","top-center","top-right","middle-left","middle-center","middle-right","bottom-left","bottom-center","bottom-right"]},fit:{type:"string",display:{type:"ratio-group"},enum:["cover","fit"]},align:{type:"string",title:"Align",display:{type:"align-group",direction:"horizontal"},enum:["start","center","end"]},triggers:{type:"string",title:"Triggers",display:{type:"ratio-group",direction:"horizontal"},enum:["clk","hov"]},grid:{type:"object",title:"Grid",display:{type:"group"},properties:{size:{type:"number",label:"Box",scalingEnabled:!0,display:{type:"numeric-input",visible:!0}},gap:{type:"number",label:"Gap",scalingEnabled:!0,min:0,display:{type:"numeric-input"}}}},offset:{type:"object",title:"Offset",display:{type:"group"},properties:{x:{type:"number",label:"X",scalingEnabled:!0,display:{type:"numeric-input",visible:!0}},y:{type:"number",label:"Y",scalingEnabled:!0,display:{type:"numeric-input",visible:!0}}}},opacity:{type:"number",title:"Opacity",label:"icon:opacity",min:0,max:100,step:1,display:{type:"numeric-input"}},activeState:{type:"object",title:"ACTIVE",display:{type:"group"},properties:{scale:{type:"number",title:"Scale",min:1,max:5,step:.1,display:{type:"range-control"}},opacity:{type:"number",title:"Opacity",label:"icon:opacity",min:0,max:100,step:1,display:{type:"numeric-input"}}}}}},layout:{title:"LAYOUT",icon:"layout",tooltip:"Layout",type:"object",properties:{position:{display:{type:"align-grid"},type:"string",enum:["top-left","top-center","top-right","middle-left","middle-center","middle-right","bottom-left","bottom-center","bottom-right"]},offset:{type:"object",title:"Offset",display:{type:"group"},properties:{x:{type:"number",label:"X",scalingEnabled:!0,display:{type:"numeric-input",visible:!0}},y:{type:"number",label:"Y",scalingEnabled:!0,display:{type:"numeric-input",visible:!0}}}},padding:{type:"object",title:"Padding",display:{type:"padding-controls"},properties:{top:{min:0,step:1,type:"number"},left:{min:0,step:1,type:"number"},right:{min:0,step:1,type:"number"},bottom:{min:0,step:1,type:"number"}}}}},controls:{title:"CONTROLS",icon:"controls",tooltip:"Controls",type:"object",properties:{isActive:{type:"boolean",display:{type:"setting-toggle"}},arrowsImgUrl:{type:["string","null"],display:{type:"settings-image-input"}},offset:{title:"Offset",type:"object",display:{type:"group"},properties:{x:{type:"number",label:"X",scalingEnabled:!0,display:{type:"numeric-input",visible:!0}},y:{type:"number",label:"Y",scalingEnabled:!0,display:{type:"numeric-input",visible:!0}}}},scale:{type:"number",title:"Scale",min:.5,max:5,step:.1,display:{type:"range-control"}},color:{title:"Color",type:"string",display:{type:"settings-color-picker",format:"single"}},hover:{title:"Hover",type:"string",display:{type:"settings-color-picker",format:"single"}}}},area:{title:"AREA",icon:"area",tooltip:"Area",type:"object",properties:{color:{type:"string",display:{type:"settings-color-picker",format:"single"}},blur:{type:"number",label:"icon:blur",display:{type:"numeric-input"}},closeIconUrl:{type:["string","null"],title:"Close Icon",display:{type:"settings-image-input"}},closeIconAlign:{display:{type:"align-grid",direction:"horizontal"},type:"string",enum:["top-left","top-center","top-right","middle-left","middle-center","middle-right","bottom-left","bottom-center","bottom-right"]},closeIconScale:{type:"number",title:"Scale",min:.5,max:5,step:.1,display:{type:"range-control"}},closeIconOffset:{type:"object",title:"Offset",display:{type:"group"},properties:{x:{type:"number",label:"X",scalingEnabled:!0,display:{type:"numeric-input",visible:!0}},y:{type:"number",label:"Y",scalingEnabled:!0,display:{type:"numeric-input",visible:!0}}}},closeIconColor:{title:"Color",type:"string",display:{type:"settings-color-picker",format:"single"}},closeIconHover:{title:"Hover",type:"string",display:{type:"settings-color-picker",format:"single"}}}},caption:{title:"DESC",icon:"text-icon",tooltip:"Description",type:"object",properties:{isActive:{type:"boolean",display:{type:"setting-toggle"}},alignment:{type:"string",display:{type:"align-grid"},enum:["top-left","top-center","top-right","middle-left","middle-center","middle-right","bottom-left","bottom-center","bottom-right"]},offset:{title:"Offset",type:"object",display:{type:"group"},properties:{x:{type:"number",label:"X",scalingEnabled:!0,display:{type:"numeric-input",visible:!0}},y:{type:"number",label:"Y",scalingEnabled:!0,display:{type:"numeric-input",visible:!0}}}},linkColor:{title:"Link",type:"string",display:{type:"settings-color-picker",format:"single"}},linkHoverColor:{title:"Link Hov",type:"string",display:{type:"settings-color-picker",format:"single"}}}}}}},default:{d:{thumbnailBlock:{cover:{url:"https://cdn.cntrl.site/component-assets/Cover.jpg"}},lightboxBlock:{appear:{type:"slide in",duration:"1000ms",direction:"bottom"},triggers:{type:"click",switch:"image",repeat:"loop"},slider:{type:"slide",direction:"vert",duration:"1000ms"},thumbnail:{isActive:!0,position:"middle-left",fit:"fit",align:"start",triggers:"hov",grid:{size:.05,gap:.01},offset:{x:.01,y:0},opacity:50,activeState:{scale:1,opacity:100}},layout:{position:"middle-center",offset:{x:0,y:0},padding:{top:.06,right:0,bottom:.06,left:0}},controls:{isActive:!1,arrowsImgUrl:null,offset:{x:0,y:0},scale:1,color:"#000000",hover:"#cccccc"},area:{color:"rgba(28,31,34,0.9)",blur:0,closeIconUrl:null,closeIconColor:"#000000",closeIconHover:"#cccccc",closeIconAlign:"top-right",closeIconOffset:{x:0,y:0},closeIconScale:1},caption:{isActive:!0,alignment:"middle-center",offset:{x:0,y:0},linkColor:"#cccccc",linkHoverColor:"#cccccc"}}},m:{thumbnailBlock:{cover:{url:"https://cdn.cntrl.site/component-assets/Cover.jpg"}},lightboxBlock:{appear:{type:"fade in",duration:"500ms",direction:"bottom"},triggers:{type:"click",switch:"image",repeat:"loop"},slider:{type:"slide",direction:"horiz",duration:"1000ms"},thumbnail:{isActive:!0,position:"bottom-center",fit:"fit",align:"start",triggers:"hov",grid:{size:.1,gap:.05},offset:{x:.01,y:-.05},opacity:50,activeState:{scale:1,opacity:100}},layout:{position:"middle-center",offset:{x:0,y:0},padding:{top:.06,right:.05,bottom:.06,left:.05}},controls:{isActive:!1,arrowsImgUrl:null,offset:{x:0,y:0},scale:1,color:"#000000",hover:"#cccccc"},area:{color:"rgba(28,31,34,0.9)",blur:0,closeIconUrl:null,closeIconColor:"#000000",closeIconHover:"#cccccc",closeIconAlign:"top-right",closeIconOffset:{x:0,y:0},closeIconScale:1},caption:{isActive:!0,alignment:"middle-center",offset:{x:0,y:0},hover:"#cccccc"}}},t:{thumbnailBlock:{cover:{url:"https://cdn.cntrl.site/component-assets/Cover.jpg"}},lightboxBlock:{appear:{type:"fade in",duration:"500ms",direction:"bottom"},triggers:{type:"click",switch:"image",repeat:"loop"},slider:{type:"slide",direction:"vert",duration:"1000ms"},thumbnail:{isActive:!0,position:"middle-left",fit:"fit",align:"start",triggers:"hov",grid:{size:.05,gap:.01},offset:{x:.03,y:0},opacity:50,activeState:{scale:1,opacity:100}},layout:{position:"middle-center",offset:{x:0,y:0},padding:{top:.06,right:.1,bottom:.06,left:.1}},controls:{isActive:!1,arrowsImgUrl:null,offset:{x:0,y:0},scale:1,color:"#000000",hover:"#cccccc"},area:{color:"rgba(28,31,34,0.9)",blur:0,closeIconUrl:null,closeIconColor:"#000000",closeIconHover:"#cccccc",closeIconAlign:"top-right",closeIconOffset:{x:0,y:0},closeIconScale:1},caption:{isActive:!0,alignment:"middle-center",offset:{x:0,y:0},hover:"#cccccc"}}}},displayRules:[{if:{name:"lightboxBlock.appear.type",value:"slide in"},then:{name:"properties.lightboxBlock.properties.appear.properties.direction.display.visible",value:!0}},{if:{name:"lightboxBlock.slider.direction",value:"vert"},then:{name:"properties.lightboxBlock.properties.thumbnail.properties.align.display.direction",value:"vertical"}},{if:{name:"lightboxBlock.appear.type",value:"mix"},then:{name:"properties.lightboxBlock.properties.appear.properties.direction.display.visible",value:!0}},{if:{name:"lightboxBlock.appear.type",value:"fade in"},then:{name:"properties.lightboxBlock.properties.appear.properties.direction.display.visible",value:!1}},{if:[{name:"lightboxBlock.triggers.type",value:"click"},{name:"lightboxBlock.triggers.switch",value:"image"}],then:{name:"properties.lightboxBlock.properties.triggers.properties.repeat.display.visible",value:!0}}]},content:{type:"array",settings:{addItemFromFileExplorer:!0},items:{type:"object",properties:{image:{type:"object",label:"Image",display:{type:"media-input"},properties:{url:{type:"string"},name:{type:"string"},objectFit:{type:"string",enum:["cover","contain"]}},required:["url","name"]},imageCaption:{label:"Description",placeholder:"Add Caption...",display:{type:"rich-text"}}},required:["image"]},default:[{image:{objectFit:"contain",url:"https://cdn.cntrl.site/component-assets/2.jpg",name:"Slider-1.png"},imageCaption:[{type:"paragraph",children:[{text:""}]}]},{image:{objectFit:"contain",url:"https://cdn.cntrl.site/component-assets/3.jpg",name:"Slider-2.png"},imageCaption:[{type:"paragraph",children:[{text:""}]}]},{image:{objectFit:"contain",url:"https://cdn.cntrl.site/component-assets/4.jpg",name:"Slider-3.png"},imageCaption:[{type:"paragraph",children:[{text:""}]}]}]},styles:{type:"object",properties:{imageCaption:{dataName:"caption",type:"object",properties:{fontSettings:{type:"object",display:{type:"font-settings"},properties:{fontFamily:{type:"string"},fontWeight:{type:"number"},fontStyle:{type:"string"}}},widthSettings:{display:{type:"text-width-control"},type:"object",properties:{width:{type:"number"},sizing:{type:"string",enum:["auto","manual"]}}},fontSizeLineHeight:{type:"object",display:{type:"font-size-line-height"},properties:{fontSize:{type:"number"},lineHeight:{type:"number"}}},letterSpacing:{display:{type:"letter-spacing-input"},type:"number"},wordSpacing:{display:{type:"word-spacing-input"},type:"number"},textAlign:{display:{type:"text-align-control"},type:"string",enum:["left","center","right","justify"]},textAppearance:{display:{type:"text-appearance"},properties:{textTransform:{type:"string",enum:["none","uppercase","lowercase","capitalize"]},textDecoration:{type:"string",enum:["none","underline"]},fontVariant:{type:"string",enum:["normal","small-caps"]}}},color:{display:{type:"style-panel-color-picker"},type:"string"}}}},default:{imageCaption:{widthSettings:{width:.13,sizing:"auto"},fontSettings:{fontFamily:"Arial",fontWeight:400,fontStyle:"normal"},fontSizeLineHeight:{fontSize:.02,lineHeight:.02},letterSpacing:0,wordSpacing:0,textAlign:"left",textAppearance:{textTransform:"none",textDecoration:"none",fontVariant:"normal"},color:"#000000"}}}},required:["settings","content","styles"]}};function ig(e){return`calc(var(--cntrl-article-width, 100vw) * ${e/1440})`}let ih={inputColor:"input-color",inputTextColor:"input-text-color",inputBorderColor:"input-border-color",placeholderColor:"placeholder-color",buttonColor:"button-color",buttonTextColor:"button-text-color",buttonBorderColor:"button-border-color",labelTextColor:"label-text-color",successColor:"success-color",errorColor:"error-color"},iy=["hover","focus","filled","success","error"],iv=`import React, { useMemo, useState } from 'react';
import { CommonComponentProps } from '../props';
import { buildColorVars, getFormFieldValidationError, scalingValue, useScopedStyles } from '../utils/index';
import { omitTextColors, textStylesToCss, type TextStyles } from '../utils/textStylesToCss';

function sv(px: number): string {
  return \`calc(var(--cntrl-article-width, 100vw) * \${px / 1440})\`;
}

function getCSS(P: string): string {
  return \`
.\${P}-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: \${sv(48)};
}
.\${P}-wrapper.\${P}-type-C .\${P}-input:focus-visible,
.\${P}-wrapper.\${P}-type-C .\${P}-button:focus-visible {
  outline: none;
}
.\${P}-form {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.\${P}-fields {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
}
.\${P}-field-group {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
}
.\${P}-field-group.\${P}-labeled {
  gap: \${sv(4)};
}
.\${P}-field-label {
  white-space: nowrap;
  color: var(--\${P}-label-text-color);
}
.\${P}-input {
  width: 100%;
  box-sizing: border-box;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  background-color: var(--\${P}-input-color);
  color: var(--\${P}-input-text-color);
  border-color: var(--\${P}-input-border-color);
  transition: color 250ms, border-color 250ms, background-color 250ms;
}
.\${P}-input::placeholder {
  color: var(--\${P}-placeholder-color);
  opacity: 1;
  transition: color 250ms, opacity 250ms;
}
.\${P}-input:hover {
  background-color: var(--\${P}-hover-input-color, var(--\${P}-input-color));
  color: var(--\${P}-hover-input-text-color, var(--\${P}-input-text-color));
  border-color: var(--\${P}-hover-input-border-color, var(--\${P}-input-border-color));
}
.\${P}-wrapper.\${P}-state-hover .\${P}-input {
  background-color: var(--\${P}-hover-input-color, var(--\${P}-input-color));
  color: var(--\${P}-hover-input-text-color, var(--\${P}-input-text-color));
  border-color: var(--\${P}-hover-input-border-color, var(--\${P}-input-border-color));
}
.\${P}-input:focus,
.\${P}-input:focus-visible,
.\${P}-wrapper.\${P}-state-focus .\${P}-input {
  background-color: var(--\${P}-focus-input-color, var(--\${P}-input-color));
  color: var(--\${P}-focus-input-text-color, var(--\${P}-input-text-color));
  border-color: var(--\${P}-focus-input-border-color, var(--\${P}-input-border-color));
}
.\${P}-input[data-filled="true"] {
  background-color: var(--\${P}-filled-input-color, var(--\${P}-input-color));
  color: var(--\${P}-filled-input-text-color, var(--\${P}-input-text-color));
  border-color: var(--\${P}-filled-input-border-color, var(--\${P}-input-border-color));
}
.\${P}-wrapper.\${P}-state-filled .\${P}-button {
  background-color: var(--\${P}-filled-button-color, var(--\${P}-button-color));
  color: var(--\${P}-filled-button-text-color, var(--\${P}-button-text-color));
  border-color: var(--\${P}-filled-button-border-color, var(--\${P}-button-border-color));
}
.\${P}-wrapper.\${P}-state-success .\${P}-input,
.\${P}-wrapper.\${P}-state-success .\${P}-button {
  pointer-events: none;
}
.\${P}-wrapper.\${P}-state-error .\${P}-input {
}
.\${P}-input[data-field-type="textarea"] {
  resize: vertical;
}
.\${P}-input:disabled {
  cursor: not-allowed;
}
.\${P}-button {
  cursor: pointer;
  white-space: nowrap;
  box-sizing: border-box;
  outline: none;
  background-color: var(--\${P}-button-color);
  color: var(--\${P}-button-text-color);
  border-color: var(--\${P}-button-border-color);
  transition: color 250ms, background-color 250ms, border-color 250ms;
}
.\${P}-button:hover {
  background-color: var(--\${P}-hover-button-color, var(--\${P}-button-color));
  color: var(--\${P}-hover-button-text-color, var(--\${P}-button-text-color));
  border-color: var(--\${P}-hover-button-border-color, var(--\${P}-button-border-color));
}
.\${P}-wrapper.\${P}-state-hover .\${P}-button {
  background-color: var(--\${P}-hover-button-color, var(--\${P}-button-color));
  color: var(--\${P}-hover-button-text-color, var(--\${P}-button-text-color));
  border-color: var(--\${P}-hover-button-border-color, var(--\${P}-button-border-color));
}
.\${P}-button:focus,
.\${P}-button:focus-visible,
.\${P}-wrapper.\${P}-state-focus .\${P}-button {
  background-color: var(--\${P}-focus-button-color, var(--\${P}-button-color));
  color: var(--\${P}-focus-button-text-color, var(--\${P}-button-text-color));
  border-color: var(--\${P}-focus-button-border-color, var(--\${P}-button-border-color));
}
.\${P}-input:focus-visible,
.\${P}-wrapper.\${P}-state-focus .\${P}-input {
  outline: none;
}
.\${P}-button:focus-visible,
.\${P}-wrapper.\${P}-state-focus .\${P}-button {
  outline: none;
}
.\${P}-success {
  margin-top: \${sv(8)};
  color: var(--\${P}-success-success-color, var(--\${P}-success-color));
}
.\${P}-error {
  margin-top: \${sv(8)};
  color: var(--\${P}-error-error-color, var(--\${P}-error-color));
}
.\${P}-overlay-anchor {
  position: relative;
  height: auto;
}
.\${P}-control {
  position: relative;
  z-index: 2;
  width: 100%;
}
.\${P}-control::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 20px;
  pointer-events: auto;
  z-index: 10;
}
\`;
}

type FormProps = {
  settings: FormSettings;
  content?: unknown;
  isEditor?: boolean;
  isEditMode?: boolean;
  isPreviewMode?: boolean;
  activeEvent: string | undefined;
  onUpdateSettings?: (settings: FormSettings) => void;
} & CommonComponentProps;

export function Form({ settings, isEditor, isEditMode, isPreviewMode, metadata, activeEvent }: FormProps) {
  const showControls = Boolean(isEditMode);
  const canSubmit = (isPreviewMode && isEditor) || !isEditor;
  const { prefix: P } = useScopedStyles();
  const {
    type = 'A',
    fieldsToShow = 2,
    fields = [],
    buttonLabel,
    gap,
    fieldsGap,
    buttonCorners,
    buttonStroke,
    buttonPadding,
    isButtonFullWidth,
    inputCorners,
    inputStroke,
    inputPadding,
    inputColor,
    inputTextColor,
    inputBorderColor,
    placeholderColor,
    buttonColor,
    buttonTextColor,
    buttonBorderColor,
    labelTextColor,
    successColor,
    errorColor,
    fontFamily,
    inputFontSettings,
    inputFontSize,
    inputLineHeight,
    inputLetterSpacing,
    inputWordSpacing,
    inputTextAppearance,
    buttonFontSettings,
    buttonFontSize,
    buttonLineHeight,
    buttonLetterSpacing,
    buttonWordSpacing,
    buttonTextAppearance,
    labelFontSettings,
    labelFontSize,
    labelLineHeight,
    labelLetterSpacing,
    labelWordSpacing,
    labelTextAppearance,
    statusFontSettings,
    statusFontSize,
    statusLineHeight,
    statusLetterSpacing,
    statusWordSpacing,
    statusTextAppearance,
    successMessage,
    errorMessage: errorMessageText,
    stateOverrides,
  } = settings;

  const showLabels = type === 'B';
  const visibleFields = fields.slice(0, Math.min(fieldsToShow, fields.length));

  const resolvedInputTextStyle: TextStyles = {
    fontSettings: {
      fontFamily,
      fontWeight: inputFontSettings?.fontWeight ?? 400,
      fontStyle: inputFontSettings?.fontStyle ?? 'normal',
    },
    fontSize: inputFontSize ?? 0.01,
    lineHeight: inputLineHeight,
    letterSpacing: inputLetterSpacing ?? 0,
    wordSpacing: inputWordSpacing ?? 0,
    textAppearance: inputTextAppearance,
    color: inputTextColor,
  };
  const inputTypographyCss = omitTextColors(textStylesToCss(resolvedInputTextStyle, isEditor));
  const strokeForInput = scalingValue(inputStroke ?? 0, isEditor);
  const inputBaseHeight = scalingValue(
    (inputLineHeight ?? inputFontSize ?? 0.01) +
      (inputPadding?.top ?? 0) +
      (inputPadding?.bottom ?? 0) +
      (type === 'C' ? (inputStroke ?? 0) : (inputStroke ?? 0) * 2),
    isEditor,
  );
  const inputFieldCss = {
    ...inputTypographyCss,
    borderStyle: 'solid',
    borderRadius: type === 'C' ? 0 : scalingValue(inputCorners ?? 0, isEditor),
    ...(type === 'C'
      ? {
          borderTopWidth: 0,
          borderRightWidth: 0,
          borderBottomWidth: strokeForInput,
          borderLeftWidth: 0,
        }
      : { borderWidth: strokeForInput }),
    paddingTop: scalingValue(inputPadding?.top ?? 0, isEditor),
    paddingRight: scalingValue(inputPadding?.right ?? 0, isEditor),
    paddingBottom: scalingValue(inputPadding?.bottom ?? 0, isEditor),
    paddingLeft: scalingValue(inputPadding?.left ?? 0, isEditor),
    height: inputBaseHeight,
    minHeight: inputBaseHeight,
  } as React.CSSProperties;

  const resolvedButtonTextStyle: TextStyles = {
    fontSettings: {
      fontFamily,
      fontWeight: buttonFontSettings?.fontWeight ?? 400,
      fontStyle: buttonFontSettings?.fontStyle ?? 'normal',
    },
    fontSize: buttonFontSize ?? 0.01,
    lineHeight: buttonLineHeight,
    letterSpacing: buttonLetterSpacing ?? 0,
    wordSpacing: buttonWordSpacing ?? 0,
    textAppearance: buttonTextAppearance,
    color: buttonTextColor,
  };
  const buttonTypographyCss = omitTextColors(textStylesToCss(resolvedButtonTextStyle, isEditor));
  const strokeForButton = scalingValue(buttonStroke ?? 0, isEditor);

  const resolvedLabelTextStyle: TextStyles = {
    fontSettings: {
      fontFamily,
      fontWeight: labelFontSettings?.fontWeight ?? 400,
      fontStyle: labelFontSettings?.fontStyle ?? 'normal',
    },
    fontSize: labelFontSize ?? 0.01,
    lineHeight: labelLineHeight,
    letterSpacing: labelLetterSpacing ?? 0,
    wordSpacing: labelWordSpacing ?? 0,
    textAppearance: labelTextAppearance,
    color: labelTextColor,
  };
  const labelTextCss = textStylesToCss(resolvedLabelTextStyle, isEditor);

  const resolvedStatusTextStyle: TextStyles = {
    fontSettings: {
      fontFamily,
      fontWeight: statusFontSettings?.fontWeight ?? 400,
      fontStyle: statusFontSettings?.fontStyle ?? 'normal',
    },
    fontSize: statusFontSize ?? 0.01,
    lineHeight: statusLineHeight,
    letterSpacing: statusLetterSpacing ?? 0,
    wordSpacing: statusWordSpacing ?? 0,
    textAppearance: statusTextAppearance,
    color: successColor,
  };
  const statusTypographyCss = omitTextColors(textStylesToCss(resolvedStatusTextStyle, isEditor));

  const colorVars = buildColorVars(P, {
    inputColor,
    inputTextColor,
    inputBorderColor,
    placeholderColor: placeholderColor?.trim() ? placeholderColor : '#cccccc',
    buttonColor,
    buttonTextColor,
    buttonBorderColor,
    labelTextColor,
    successColor,
    errorColor,
  }, COLOR_VAR_MAP, STATE_KEYS, stateOverrides);

  const [fieldValues, setFieldValues] = useState<Record<string, string>>(() =>
    Object.fromEntries(visibleFields.map((f) => [f.name, '']))
  );
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const displayStatus = activeEvent === 'success' ? 'success'
    : activeEvent === 'error' ? 'error'
    : status;
  const displayError = activeEvent === 'error' ? errorMessageText : errorMessage;
  const isFilledPreview = activeEvent === 'filled';
  const displayValues = useMemo(() => {
    if (!isFilledPreview) return fieldValues;

    let next: Record<string, string> | null = null;
    for (const f of visibleFields) {
      const current = fieldValues[f.name] ?? '';
      if (current.trim().length > 0) continue;
      next = next ?? { ...fieldValues };
      next[f.name] = 'Filled';
    }
    return next ?? fieldValues;
  }, [fieldValues, isFilledPreview, visibleFields]);
  const validationErrorMessage =
    displayStatus === 'error'
      ? getFormFieldValidationError(visibleFields, displayValues)
      : null;
  const stateClass = activeEvent && activeEvent !== 'default' ? \`\${P}-state-\${activeEvent}\` : '';
  const wrapperStateClasses = \`\${stateClass}\`.trim();

  const submitUrl = metadata?.submitUrl as string | undefined;
  const handleFieldChange = (name: string, value: string) => {
    setFieldValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    const payload = Object.fromEntries(
      visibleFields.map((f) => [f.name, fieldValues[f.name]?.trim() ?? '']).filter(([, v]) => v)
    );
    if (!submitUrl) {
      setStatus('error');
      setErrorMessage('No integrations were found for this form.');
      return;
    }
    if (Object.keys(payload).length === 0) return;

    const validationError = getFormFieldValidationError(visibleFields, fieldValues);
    if (validationError) {
      setStatus('error');
      setErrorMessage(validationError);
      return;
    }

    setStatus('submitting');
    setErrorMessage(null);

    try {
      const res = await fetch(submitUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || \`Request failed: \${res.status}\`);
      }

      setStatus('success');
      setFieldValues(Object.fromEntries(visibleFields.map((f) => [f.name, ''])));
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong');
    }
  };

  return (
    <div className={\`\${P}-wrapper \${P}-type-\${type} \${wrapperStateClasses}\`.trim()} style={colorVars}>
      <style dangerouslySetInnerHTML={{ __html: getCSS(P) }} />
      <form
        onSubmit={handleSubmit}
        className={\`\${P}-form\`}
      >
        <div className={\`\${P}-fields\`}>
          {visibleFields.map((field, index) => (
            <React.Fragment key={index}>
              {index > 0 && (
                <div
                  data-controls={showControls ? 'fieldsGap' : undefined}
                  className={showControls ? \`\${P}-control\` : undefined}
                  style={{ height: scalingValue(fieldsGap ?? 0, isEditor) }}
                />
              )}
              <div className={\`\${P}-field-group\${showLabels ? \` \${P}-labeled\` : ''}\`}>
                {showLabels && (
                  <span className={\`\${P}-field-label\`} style={labelTextCss ? { ...labelTextCss, lineHeight: labelTextCss.fontSize } : undefined}>
                    {field.label || field.name}
                  </span>
                )}
                {field.type === 'textarea' ? (
                  <textarea
                    name={field.name}
                    autoComplete="off"
                    value={displayValues[field.name] ?? ''}
                    onChange={(e) => handleFieldChange(field.name, e.target.value)}
                    placeholder={field.placeholder}
                    className={\`\${P}-input\`}
                    style={inputFieldCss}
                    rows={1}
                    data-filled={isFilledPreview || ((displayValues[field.name] ?? '') as string).trim().length > 0}
                    data-field-type="textarea"
                  />
                ) : (
                  <input
                    type={field.type === 'phone' ? 'tel' : field.type === 'email' ? 'email' : 'text'}
                    name={field.name}
                    autoComplete="off"
                    value={displayValues[field.name] ?? ''}
                    onChange={(e) => handleFieldChange(field.name, e.target.value)}
                    placeholder={field.placeholder}
                    required={field.isRequired ?? field.type === 'email'}
                    className={\`\${P}-input\`}
                    style={inputFieldCss}
                    data-filled={isFilledPreview || ((displayValues[field.name] ?? '') as string).trim().length > 0}
                  />
                )}
              </div>
            </React.Fragment>
          ))}
        </div>
        <div
          data-controls={showControls ? 'gap' : undefined}
          className={showControls ? \`\${P}-control\` : undefined}
          style={{ height: scalingValue(gap ?? 0, isEditor) }}
        />
        <div className={\`\${P}-overlay-anchor\`}>
          <button
            type={canSubmit ? 'submit' : 'button'}
            className={\`\${P}-button\`}
            style={{
              borderStyle: 'solid',
              borderRadius: scalingValue(buttonCorners ?? 0, isEditor),
              borderWidth: strokeForButton,
              paddingTop: scalingValue(buttonPadding?.top ?? 0, isEditor),
              paddingRight: scalingValue(buttonPadding?.right ?? 0, isEditor),
              paddingBottom: scalingValue(buttonPadding?.bottom ?? 0, isEditor),
              paddingLeft: scalingValue(buttonPadding?.left ?? 0, isEditor),
              pointerEvents: canSubmit ? 'auto' : undefined,
              ...buttonTypographyCss,
              ...(isButtonFullWidth
                ? {
                  width: '100%',
                  textAlign: 'center',
                  whiteSpace: 'normal',
                }
                : {}),
            }}
          >
            <span
              className={\`\${P}-overlay-anchor\`}
              style={isButtonFullWidth
                ? {
                  display: 'inline-block',
                  maxWidth: '100%',
                  whiteSpace: 'normal',
                  textAlign: 'center',
                }
                : undefined}
            >
              {status === 'submitting' ? '...' : buttonLabel}
            </span>
          </button>
        </div>
      </form>
      {displayStatus === 'success' && (
        <p
          className={\`\${P}-success\`}
          style={{ ...statusTypographyCss }}
        >
          {successMessage}
        </p>
      )}
      {displayStatus === 'error' && (
        <p
          className={\`\${P}-error\`}
          style={{ ...statusTypographyCss }}
          role="alert"
        >
          {validationErrorMessage ?? displayError ?? errorMessageText}
        </p>
      )}
    </div>
  );
}

export type FormFieldType = 'text' | 'textarea' | 'phone' | 'email';

export type FormFieldItem = {
  name: string;
  type: FormFieldType;
  placeholder: string;
  label?: string;
  isRequired?: boolean;
  error?: string;
};

type Padding = {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
};

type ColorKeys =
  | 'inputColor'
  | 'inputTextColor'
  | 'inputBorderColor'
  | 'placeholderColor'
  | 'buttonColor'
  | 'buttonTextColor'
  | 'buttonBorderColor'
  | 'labelTextColor'
  | 'successColor'
  | 'errorColor';

type StateColorOverrides = Partial<Record<ColorKeys, string>>;

type FormSettings = {
  type: 'A' | 'B' | 'C';
  fontFamily: string;
  fieldsToShow: number;
  fields: FormFieldItem[];
  buttonLabel?: string;
  gap?: number;
  fieldsGap?: number;
  inputFontSettings?: { fontWeight: number; fontStyle: string };
  inputFontSize?: number;
  inputLineHeight?: number;
  inputLetterSpacing?: number;
  inputWordSpacing?: number;
  inputTextAppearance?: TextStyles['textAppearance'];
  buttonFontSettings?: { fontWeight: number; fontStyle: string };
  buttonFontSize?: number;
  buttonLineHeight?: number;
  buttonLetterSpacing?: number;
  buttonWordSpacing?: number;
  buttonTextAppearance?: TextStyles['textAppearance'];
  labelFontSettings?: { fontWeight: number; fontStyle: string };
  labelFontSize?: number;
  labelLineHeight?: number;
  labelLetterSpacing?: number;
  labelWordSpacing?: number;
  labelTextAppearance?: TextStyles['textAppearance'];
  statusFontSettings?: { fontWeight: number; fontStyle: string };
  statusFontSize?: number;
  statusLineHeight?: number;
  statusLetterSpacing?: number;
  statusWordSpacing?: number;
  statusTextAppearance?: TextStyles['textAppearance'];
  buttonCorners?: number;
  buttonStroke?: number;
  buttonPadding?: Padding;
  isButtonFullWidth?: boolean;
  inputCorners?: number;
  inputStroke?: number;
  inputPadding?: Padding;
  inputColor: string;
  inputTextColor: string;
  inputBorderColor: string;
  buttonColor: string;
  buttonTextColor: string;
  buttonBorderColor: string;
  placeholderColor: string;
  labelTextColor: string;
  successColor: string;
  errorColor: string;
  successMessage: string;
  errorMessage: string;
  stateOverrides?: Record<string, StateColorOverrides>;
};

const COLOR_VAR_MAP: Record<ColorKeys, string> = {
  inputColor: 'input-color',
  inputTextColor: 'input-text-color',
  inputBorderColor: 'input-border-color',
  placeholderColor: 'placeholder-color',
  buttonColor: 'button-color',
  buttonTextColor: 'button-text-color',
  buttonBorderColor: 'button-border-color',
  labelTextColor: 'label-text-color',
  successColor: 'success-color',
  errorColor: 'error-color',
};

const STATE_KEYS = ['hover', 'focus', 'filled', 'success', 'error'] as const;
`,ix={fontSettings:{type:"object",display:{type:"font-settings-weight"},properties:{fontWeight:{type:"number"},fontStyle:{type:"string"}}}},ib={type:"object",version:1,settings:{sizing:"auto manual",properties:{fieldsToShow:{type:"number",scope:"common",title:"Fields",display:{type:"common-numeric-input"},min:1,max:7},fields:{type:"array",scope:"common",display:{type:"fields-group"},items:{type:"object",properties:{name:{type:"string"},type:{type:"string",enum:["text","textarea","phone","email"]},placeholder:{type:"string"},label:{type:"string"},isRequired:{type:"boolean"},error:{type:"string"}}}},buttonLabel:{type:"string",scope:"common",title:"Button Label",display:{type:"text-input"}},successMessage:{type:"string",scope:"common",title:"Success Message",display:{type:"text-input"}},errorMessage:{type:"string",scope:"common",title:"Error Message",display:{type:"text-input"}},type:{type:"string",scope:"common",title:"",display:{type:"radio-group"},enum:["A","B","C"]},gap:{type:"number",scope:"layout",title:"Gap",display:{type:"numeric-input"},min:0,max:100},fieldsGap:{type:"number",scope:"layout",title:"Gap",display:{type:"numeric-input",enabled:!0},min:0,max:100},buttonPadding:{type:"object",scope:"layout",title:"Padding",display:{type:"padding-controls"}},inputPadding:{type:"object",scope:"layout",title:"Padding",display:{type:"padding-controls"}},buttonStroke:{type:"number",scope:"layout",title:"Stroke",display:{type:"numeric-input"},min:0,max:20},buttonCorners:{type:"number",scope:"layout",title:"Corners",display:{type:"numeric-input",enabled:!0},min:0,max:100},inputStroke:{type:"number",scope:"layout",title:"Stroke",display:{type:"numeric-input"},min:0,max:20},inputCorners:{type:"number",scope:"layout",title:"Corners",display:{type:"numeric-input",enabled:!0},min:0,max:100},inputColor:{type:"string",scope:"common",title:"Fill Input",display:{type:"palette-color-picker"}},inputTextColor:{type:"string",scope:"common",title:"Input Label",display:{type:"palette-color-picker"}},inputBorderColor:{type:"string",scope:"common",title:"Stroke Input",display:{type:"palette-color-picker"}},placeholderColor:{type:"string",scope:"common",title:"Filler Input",display:{type:"palette-color-picker"}},buttonColor:{type:"string",scope:"common",title:"Fill Button",display:{type:"palette-color-picker"}},buttonTextColor:{type:"string",scope:"common",title:"Label Button",display:{type:"palette-color-picker"}},isButtonFullWidth:{type:"boolean",scope:"common",title:"Full Width",display:{type:"toggle",enum:["On","Off"]}},buttonBorderColor:{type:"string",scope:"common",title:"Stroke Button",display:{type:"palette-color-picker"}},labelTextColor:{type:"string",scope:"common",title:"Label Button",display:{type:"palette-color-picker",visible:!1}},successColor:{type:"string",scope:"common",title:"Success Message Color",display:{type:"palette-color-picker"}},errorColor:{type:"string",scope:"common",title:"Error Message Color",display:{type:"palette-color-picker"}},stateOverrides:{type:"object",scope:"common"},fontFamily:{type:"string",scope:"common",title:"Font family",display:{type:"font-family-select"}},inputFontSettings:{...ix.fontSettings,scope:"common",title:"Input",display:{type:"font-settings-weight"}},inputFontSize:{type:"number",scope:"layout",title:"Input Font Size",display:{type:"font-size"}},inputLineHeight:{type:"number",scope:"layout",title:"Input Line Height",display:{type:"line-height-input"}},inputLetterSpacing:{type:"number",scope:"layout",title:"Input Letter Spacing",display:{type:"letter-spacing-input"}},inputWordSpacing:{type:"number",scope:"layout",title:"Input Word Spacing",display:{type:"word-spacing-input"}},inputTextAppearance:{type:"object",scope:"layout",title:"Input Text Appearance",display:{type:"text-appearance"}},buttonFontSettings:{...ix.fontSettings,scope:"common",title:"Button",display:{type:"font-settings-weight"}},buttonFontSize:{type:"number",scope:"layout",title:"Button Font Size",display:{type:"font-size"}},buttonLineHeight:{type:"number",scope:"layout",title:"Button Line Height",display:{type:"line-height-input"}},buttonLetterSpacing:{type:"number",scope:"layout",title:"Button Letter Spacing",display:{type:"letter-spacing-input"}},buttonWordSpacing:{type:"number",scope:"layout",title:"Button Word Spacing",display:{type:"word-spacing-input"}},buttonTextAppearance:{type:"object",scope:"layout",title:"Button Text Appearance",display:{type:"text-appearance"}},labelFontSettings:{...ix.fontSettings,scope:"common",title:"Label",display:{type:"font-settings-weight",visible:!1}},labelFontSize:{type:"number",scope:"layout",title:"Label Font Size",display:{type:"font-size",visible:!1}},labelLineHeight:{type:"number",scope:"layout",title:"Label Line Height",display:{type:"line-height-input",visible:!1}},labelLetterSpacing:{type:"number",scope:"layout",title:"Label Letter Spacing",display:{type:"letter-spacing-input",visible:!1}},labelWordSpacing:{type:"number",scope:"layout",title:"Label Word Spacing",display:{type:"word-spacing-input",visible:!1}},labelTextAppearance:{type:"object",scope:"layout",title:"Label Text Appearance",display:{type:"text-appearance",visible:!1}},statusFontSettings:{...ix.fontSettings,scope:"common",title:"Success/Error"},statusFontSize:{type:"number",scope:"layout",title:"Success/Error Font Size",display:{type:"font-size"}},statusLineHeight:{type:"number",scope:"layout",title:"Success/Error Line Height",display:{type:"line-height-input"}},statusLetterSpacing:{type:"number",scope:"layout",title:"Success/Error Letter Spacing",display:{type:"letter-spacing-input"}},statusWordSpacing:{type:"number",scope:"layout",title:"Success/Error Word Spacing",display:{type:"word-spacing-input"}},statusTextAppearance:{type:"object",scope:"layout",title:"Success/Error Text Appearance",display:{type:"text-appearance"}}},defaults:{fieldsToShow:2,fields:[{name:"name",type:"text",placeholder:"Enter your name",label:"Name",isRequired:!1,error:"Please, enter your name."},{name:"email",type:"email",placeholder:"Enter your email",label:"Email",isRequired:!0,error:"Please, enter a valid e-mail."},{name:"company",type:"text",placeholder:"Enter company",label:"Company",isRequired:!1,error:"Please, enter your company name."},{name:"phone",type:"phone",placeholder:"Enter your phone",label:"Phone",isRequired:!1,error:"Please, enter a valid phone number."},{name:"message",type:"textarea",placeholder:"Enter your message",label:"Message",isRequired:!1,error:"Message is required"},{name:"message2",type:"textarea",placeholder:"Enter your message 2",label:"Message 2",isRequired:!1,error:"Message 2 is required"},{name:"message3",type:"textarea",placeholder:"Enter your message 3",label:"Message 3",isRequired:!1,error:"Message 3 is required"}],type:"A",inputColor:"#FFFFFF",inputTextColor:"#0A00F8",inputBorderColor:"#A7A7A7",placeholderColor:"#808080",buttonColor:"#0A00F8",buttonTextColor:"#ffffff",buttonBorderColor:"#0A00F8",labelTextColor:"#999999",successColor:"#22c55e",errorColor:"#ef4444",stateOverrides:{hover:{buttonColor:"#194EFF"}},fontFamily:"Arial",inputFontSettings:{fontWeight:400,fontStyle:"normal"},inputLetterSpacing:0,inputWordSpacing:0,inputTextAppearance:{textTransform:"none",textDecoration:"none",fontVariant:"normal"},buttonFontSettings:{fontWeight:400,fontStyle:"normal"},buttonLetterSpacing:0,buttonWordSpacing:0,buttonTextAppearance:{textTransform:"none",textDecoration:"none",fontVariant:"normal"},labelFontSettings:{fontWeight:400,fontStyle:"normal"},labelLetterSpacing:0,labelWordSpacing:0,labelTextAppearance:{textTransform:"none",textDecoration:"none",fontVariant:"normal"},statusFontSettings:{fontWeight:400,fontStyle:"normal"},statusLetterSpacing:0,statusWordSpacing:0,statusTextAppearance:{textTransform:"none",textDecoration:"none",fontVariant:"normal"},isButtonFullWidth:!0,buttonLabel:"Sign up",successMessage:"Thanks for subscribing!",errorMessage:"Please, fill all required fields."},layoutDefaults:{m:{gap:.032,fieldsGap:.032,buttonStroke:0,buttonCorners:.192,inputStroke:.003,inputCorners:.192,buttonPadding:{top:.0373,right:.0373,bottom:.0373,left:.0373},inputPadding:{top:.0373,right:.0373,bottom:.0373,left:.0373},inputFontSize:.043,inputLineHeight:.043,buttonFontSize:.0426,buttonLineHeight:.0426,labelFontSize:.0373,labelLineHeight:.0373,statusFontSize:.0373,statusLineHeight:.0373},t:{gap:.02604,fieldsGap:.0083,buttonStroke:0,buttonCorners:.05,inputStroke:.001,inputCorners:.039,buttonPadding:{top:.0195,right:.02604,bottom:.0195,left:.0195},inputPadding:{top:.0195,right:.0195,bottom:.0195,left:.0195},inputFontSize:.02083,inputLineHeight:.02604,buttonFontSize:.02083,buttonLineHeight:.02604,labelFontSize:.01,labelLineHeight:.01,statusFontSize:.01,statusLineHeight:.01},d:{gap:.0083,fieldsGap:.0083,buttonStroke:0,buttonCorners:.05,inputStroke:.001,inputCorners:.05,buttonPadding:{top:.01,right:.01,bottom:.01,left:.01},inputPadding:{top:.01,right:.01,bottom:.01,left:.01},inputFontSize:.01,inputLineHeight:.01,buttonFontSize:.01,buttonLineHeight:.01,labelFontSize:.01,labelLineHeight:.01,statusFontSize:.01,statusLineHeight:.01}},displayRules:[{if:{name:"type",value:"B"},then:{name:"properties.labelTextColor.display.visible",value:!0}},{if:{name:"type",value:"B"},then:{name:"properties.labelFontSettings.display.visible",value:!0}},{if:{name:"type",value:"B"},then:{name:"properties.labelFontSize.display.visible",value:!0}},{if:{name:"type",value:"B"},then:{name:"properties.labelLineHeight.display.visible",value:!0}},{if:{name:"type",value:"B"},then:{name:"properties.labelLetterSpacing.display.visible",value:!0}},{if:{name:"type",value:"B"},then:{name:"properties.labelWordSpacing.display.visible",value:!0}},{if:{name:"type",value:"B"},then:{name:"properties.labelTextAppearance.display.visible",value:!0}},{if:{name:"type",value:"C"},then:{name:"properties.buttonCorners.display.enabled",value:!1}},{if:{name:"type",value:"C"},then:{name:"properties.inputCorners.display.enabled",value:!1}},{if:{name:"buttonStroke",value:0},then:{name:"properties.buttonBorderColor.display.visible",value:!1}},{if:{name:"inputStroke",value:0},then:{name:"properties.inputBorderColor.display.visible",value:!1}},{if:{name:"fieldsToShow",value:1},then:{name:"properties.fieldsGap.display.enabled",value:!1}}]},panels:[{id:"general",icon:"settings",title:"General",tooltip:"General Settings",layout:[{type:"row",items:["__componentName__","name"]},"type",{type:"group",title:"",items:[{type:"row",title:"Input",items:["inputCorners","inputPadding"]},{type:"row",title:"",items:["fieldsToShow","inputStroke"]}]},{type:"group",title:"",items:[{type:"row",title:"Button",items:["buttonCorners","buttonPadding"]},{type:"row",title:"",items:["buttonStroke","isButtonFullWidth"]}]}]},{id:"typeStyle",icon:"text-icon",title:"Type Style",tooltip:"Typography",layout:["__componentName__","fontFamily",{type:"group",title:"",items:["inputFontSettings",{type:"row",items:["inputFontSize","inputLineHeight","inputLetterSpacing","inputWordSpacing"]},"inputTextAppearance"]},{type:"group",title:"",items:["buttonFontSettings",{type:"row",items:["buttonFontSize","buttonLineHeight","buttonLetterSpacing","buttonWordSpacing"]},"buttonTextAppearance"]},{type:"group",title:"",items:["labelFontSettings",{type:"row",items:["labelFontSize","labelLineHeight","labelLetterSpacing","labelWordSpacing"]},"labelTextAppearance"]},{type:"group",title:"",items:["statusFontSettings",{type:"row",items:["statusFontSize","statusLineHeight","statusLetterSpacing","statusWordSpacing"]},"statusTextAppearance"]}]},{id:"fields",icon:"layers",title:"Fields",tooltip:"Fields",layout:["__componentName__","fields","buttonLabel","successMessage","errorMessage"]}],paletteBookmark:{items:["inputColor","inputTextColor","inputBorderColor","placeholderColor","buttonColor","buttonTextColor","buttonBorderColor","labelTextColor","successColor","errorColor"],panelIds:["general","typeStyle"],stateItems:{default:["placeholderColor","inputColor","inputBorderColor","buttonTextColor","buttonColor","buttonBorderColor","labelTextColor"],hover:["inputColor","inputBorderColor","buttonTextColor","buttonColor","buttonBorderColor"],focus:["inputColor","inputBorderColor","buttonTextColor","buttonColor","buttonBorderColor"],filled:["inputTextColor","inputColor","inputBorderColor","buttonTextColor"],success:["successColor"],error:["errorColor"]}},allowedPlugins:["newsletter"],states:["default","hover","focus","filled","success","error"]};function iw(e){return`calc(var(--cntrl-article-width, 100vw) * ${e/1440})`}let i$={strokeColor:"stroke-color",inputColor:"input-color",placeholderColor:"placeholder-color",buttonColor:"button-color",inputTextColor:"input-text-color",buttonTextColor:"button-text-color",successColor:"success-color",errorColor:"error-color"},iS=["hover","focus","filled","success","error"],iC=`import React, { useMemo, useState } from 'react';
import { CommonComponentProps } from '../props';
import { buildColorVars, getFormFieldValidationError, scalingValue, useScopedStyles } from '../utils/index';
import { omitTextColors, textStylesToCss, type TextStyles } from '../utils/textStylesToCss';
import { SvgImage } from '../helpers/SvgImage/SvgImage';

function sv(px: number): string {
  return \`calc(var(--cntrl-article-width, 100vw) * \${px / 1440})\`;
}

function getCSS(P: string): string {
  return \`
.\${P}-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: stretch;
  justify-content: center;
}
.\${P}-form {
  display: flex;
  width: 100%;
  align-items: stretch;
  overflow: hidden;
  border-color: var(--\${P}-stroke-color);
  transition: border-color 250ms;
}
.\${P}-form:hover {
  border-color: var(--\${P}-hover-stroke-color, var(--\${P}-stroke-color));
}
.\${P}-form:focus-within {
  border-color: var(--\${P}-focus-stroke-color, var(--\${P}-stroke-color));
}
.\${P}-wrapper.\${P}-state-hover .\${P}-form {
  border-color: var(--\${P}-hover-stroke-color, var(--\${P}-stroke-color));
}
.\${P}-wrapper.\${P}-state-focus .\${P}-form {
  border-color: var(--\${P}-focus-stroke-color, var(--\${P}-stroke-color));
}
.\${P}-wrapper.\${P}-state-filled .\${P}-form {
  border-color: var(--\${P}-filled-stroke-color, var(--\${P}-stroke-color));
}
.\${P}-inputWrap {
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 0;
  background-color: var(--\${P}-input-color);
  transition: background-color 250ms;
}
.\${P}-inputWrap:hover,
.\${P}-wrapper.\${P}-state-hover .\${P}-inputWrap {
  background-color: var(--\${P}-hover-input-color, var(--\${P}-input-color));
}
.\${P}-inputWrap:focus-within,
.\${P}-wrapper.\${P}-state-focus .\${P}-inputWrap {
  background-color: var(--\${P}-focus-input-color, var(--\${P}-input-color));
}
.\${P}-wrapper.\${P}-state-filled .\${P}-inputWrap {
  background-color: var(--\${P}-filled-input-color, var(--\${P}-input-color));
}
.\${P}-input {
  flex: 1;
  min-width: 0;
  background: transparent;
  border: none;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  color: var(--\${P}-input-text-color);
  transition: color 250ms, background-color 250ms, border-color 250ms;
}
.\${P}-input:hover {
  color: var(--\${P}-hover-input-text-color, var(--\${P}-input-text-color));
}
.\${P}-inputWrap:hover .\${P}-input,
.\${P}-wrapper.\${P}-state-hover .\${P}-input {
  color: var(--\${P}-hover-input-text-color, var(--\${P}-input-text-color));
}
.\${P}-input:focus,
.\${P}-wrapper.\${P}-state-focus .\${P}-input {
  color: var(--\${P}-focus-input-text-color, var(--\${P}-input-text-color));
}
.\${P}-wrapper.\${P}-state-filled .\${P}-input {
  color: var(--\${P}-filled-input-text-color, var(--\${P}-input-text-color));
}
.\${P}-input::placeholder {
  color: var(--\${P}-placeholder-color);
  opacity: 1;
  transition: color 250ms, opacity 250ms;
}
.\${P}-inputWrap:hover .\${P}-input::placeholder,
.\${P}-wrapper.\${P}-state-hover .\${P}-input::placeholder {
  color: var(--\${P}-hover-placeholder-color, var(--\${P}-placeholder-color));
}
.\${P}-inputWrap:focus-within .\${P}-input::placeholder,
.\${P}-wrapper.\${P}-state-focus .\${P}-input::placeholder {
  color: var(--\${P}-focus-placeholder-color, var(--\${P}-placeholder-color));
}
.\${P}-wrapper.\${P}-state-filled .\${P}-input::placeholder {
  color: var(--\${P}-filled-placeholder-color, var(--\${P}-placeholder-color));
}
.\${P}-submitBtn {
  box-sizing: border-box;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  background-color: var(--\${P}-button-color);
  color: var(--\${P}-button-text-color);
  border-left-style: solid;
  border-left-color: var(--\${P}-stroke-color);
  transition: color 250ms, background-color 250ms, border-color 250ms;
}
.\${P}-submitBtn img {
  display: block;
  box-sizing: border-box;
  flex: 0 1 auto;
  min-width: 0;
  height: 100%;
  width: auto;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
.\${P}-submitBtn svg {
  display: block;
  box-sizing: border-box;
  flex: 0 1 auto;
  min-width: 0;
  height: 100%;
  width: auto;
  max-width: 100%;
  max-height: 100%;
}
.\${P}-submitBtn .\${P}-submitBtnIcon {
  position: relative;
  top: auto;
  left: auto;
  transform: none;
  display: block;
  box-sizing: border-box;
  flex: 0 1 auto;
  align-self: stretch;
  min-width: 0;
  width: auto;
  height: auto;
  aspect-ratio: 1;
  max-width: 100%;
  max-height: 100%;
}
.\${P}-submitBtn:hover,
.\${P}-wrapper.\${P}-state-hover .\${P}-submitBtn {
  background-color: var(--\${P}-hover-button-color, var(--\${P}-button-color));
  color: var(--\${P}-hover-button-text-color, var(--\${P}-button-text-color));
  border-left-color: var(--\${P}-hover-stroke-color, var(--\${P}-stroke-color));
}
.\${P}-submitBtn:focus,
.\${P}-wrapper.\${P}-state-focus .\${P}-submitBtn {
  background-color: var(--\${P}-focus-button-color, var(--\${P}-button-color));
  color: var(--\${P}-focus-button-text-color, var(--\${P}-button-text-color));
  border-left-color: var(--\${P}-focus-stroke-color, var(--\${P}-stroke-color));
}
.\${P}-wrapper.\${P}-state-filled .\${P}-submitBtn {
  background-color: var(--\${P}-filled-button-color, var(--\${P}-button-color));
  color: var(--\${P}-filled-button-text-color, var(--\${P}-button-text-color));
  border-left-color: var(--\${P}-filled-stroke-color, var(--\${P}-stroke-color));
}
.\${P}-submitBtn:hover .\${P}-submitBtnIcon,
.\${P}-wrapper.\${P}-state-hover .\${P}-submitBtn .\${P}-submitBtnIcon {
  background-color: var(--\${P}-hover-button-text-color, var(--\${P}-button-text-color));
}
.\${P}-submitBtn:focus .\${P}-submitBtnIcon,
.\${P}-wrapper.\${P}-state-focus .\${P}-submitBtn .\${P}-submitBtnIcon {
  background-color: var(--\${P}-focus-button-text-color, var(--\${P}-button-text-color));
}
.\${P}-wrapper.\${P}-state-filled .\${P}-submitBtn .\${P}-submitBtnIcon {
  background-color: var(--\${P}-filled-button-text-color, var(--\${P}-button-text-color));
}
.\${P}-wrapper.\${P}-state-success .\${P}-input,
.\${P}-wrapper.\${P}-state-success .\${P}-submitBtn {
  pointer-events: none;
}
.\${P}-overlayAnchor {
  position: relative;
  display: flex;
  align-items: center;
}
.\${P}-success {
  margin-top: \${sv(8)};
  font-size: \${sv(14)};
  color: var(--\${P}-success-success-color, var(--\${P}-success-color));
}
.\${P}-error {
  margin-top: \${sv(8)};
  font-size: \${sv(14)};
  color: var(--\${P}-error-error-color, var(--\${P}-error-color));
}
\`;
}

type OnelinerFormProps = {
  settings: OnelinerFormSettings;
  content?: unknown;
  isEditor?: boolean;
  isPreviewMode?: boolean;
  activeEvent?: string;
} & CommonComponentProps;

export const OnelinerForm = ({ settings, isEditor, isPreviewMode, metadata, activeEvent }: OnelinerFormProps) => {
  const { prefix: P } = useScopedStyles();
  const canSubmit = (isPreviewMode && isEditor) || !isEditor;
  const {
    fields = [{ name: 'email', type: 'email', placeholder: 'Your email' }],
    buttonIcon,
    buttonLabel,
    fieldsToShow = 1,
    fontFamily,
    inputFontSettings,
    inputFontSize,
    inputLineHeight,
    inputLetterSpacing,
    inputWordSpacing,
    inputTextAppearance,
    buttonFontSettings,
    buttonFontSize,
    buttonLineHeight,
    buttonLetterSpacing,
    buttonWordSpacing,
    buttonTextAppearance,
    statusFontSettings,
    statusFontSize,
    statusLineHeight,
    statusLetterSpacing,
    statusWordSpacing,
    statusTextAppearance,
    iconMaxWidth,
    minHeight,
    corners,
    stroke,
    stateOverrides,
    inputPadding,
    buttonPadding,
    successMessage = 'Thanks for subscribing!',
    errorMessage: errorMessageText = 'Please, fill all required fields.',
  } = settings;

  const visibleFields = fields.slice(0, Math.min(fieldsToShow, fields.length));
  const [values, setValues] = useState<Record<string, string>>(() =>
    Object.fromEntries(visibleFields.map((f) => [f.name, '']))
  );
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const displayStatus = activeEvent === 'success' ? 'success'
    : activeEvent === 'error' ? 'error'
    : status;
  const displayError = activeEvent === 'error' ? errorMessageText : errorMessage;
  const isFilledPreview = activeEvent === 'filled';
  const displayValues = useMemo(() => {
    if (!isFilledPreview) return values;

    let next: Record<string, string> | null = null;
    for (const f of visibleFields) {
      const current = values[f.name] ?? '';
      if (current.trim().length > 0) continue;
      next = next ?? { ...values };
      next[f.name] = 'Filled';
    }
    return next ?? values;
  }, [isFilledPreview, values, visibleFields]);
  const validationErrorMessage = displayStatus === 'error'
    ? getFormFieldValidationError(visibleFields, displayValues)
    : null;
  const stateClass = activeEvent && activeEvent !== 'default' ? \`\${P}-state-\${activeEvent}\` : '';
  const hasFilledFieldValue = visibleFields.some((f) => (displayValues[f.name] ?? '').trim().length > 0);
  const filledStateClass =
    stateClass !== \`\${P}-state-filled\` && hasFilledFieldValue ? \`\${P}-state-filled\` : '';
  const wrapperStateClasses = \`\${stateClass} \${filledStateClass}\`.trim();

  const submitUrl = metadata?.submitUrl as string | undefined;
  const labelText = buttonLabel ?? '';
  const iconSrc = buttonIcon?.icon ?? '';
  const useIconButton = buttonIcon?.mode === 'On';
  const submitAriaLabel = labelText || 'Submit';

  const resolvedInputTextStyle: TextStyles = {
    fontSettings: {
      fontFamily,
      fontWeight: inputFontSettings?.fontWeight ?? 400,
      fontStyle: inputFontSettings?.fontStyle ?? 'normal',
    },
    fontSize: inputFontSize ?? 0.01,
    lineHeight: inputLineHeight,
    letterSpacing: inputLetterSpacing ?? 0,
    wordSpacing: inputWordSpacing ?? 0,
    textAppearance: inputTextAppearance,
    color: settings.inputTextColor ?? '#111111',
  };

  const resolvedButtonTextStyle: TextStyles = {
    fontSettings: {
      fontFamily,
      fontWeight: buttonFontSettings?.fontWeight ?? 400,
      fontStyle: buttonFontSettings?.fontStyle ?? 'normal',
    },
    fontSize: buttonFontSize ?? 0.01,
    lineHeight: buttonLineHeight,
    letterSpacing: buttonLetterSpacing ?? 0,
    wordSpacing: buttonWordSpacing ?? 0,
    textAppearance: buttonTextAppearance,
    color: settings.buttonTextColor ?? '#ffffff',
  };

  const resolvedStatusTextStyle: TextStyles = {
    fontSettings: {
      fontFamily,
      fontWeight: statusFontSettings?.fontWeight ?? 400,
      fontStyle: statusFontSettings?.fontStyle ?? 'normal',
    },
    fontSize: statusFontSize ?? 0.01,
    lineHeight: statusLineHeight,
    letterSpacing: statusLetterSpacing ?? 0,
    wordSpacing: statusWordSpacing ?? 0,
    textAppearance: statusTextAppearance,
    color: settings.successColor ?? '#22c55e',
  };

  const inputTypographyCss = omitTextColors(textStylesToCss(resolvedInputTextStyle, isEditor));
  const buttonTypographyCss = omitTextColors(textStylesToCss(resolvedButtonTextStyle, isEditor));
  const statusTypographyCss = omitTextColors(textStylesToCss(resolvedStatusTextStyle, isEditor));
  const colorVars = buildColorVars(P, {
    strokeColor: settings.strokeColor,
    inputColor: settings.inputColor,
    placeholderColor: settings.placeholderColor,
    buttonColor: settings.buttonColor,
    successColor: settings.successColor,
    errorColor: settings.errorColor,
    inputTextColor: settings.inputTextColor ?? resolvedInputTextStyle?.color ?? '#111111',
    buttonTextColor: settings.buttonTextColor ?? resolvedButtonTextStyle?.color ?? '#ffffff',
  }, COLOR_VAR_MAP, STATE_KEYS, stateOverrides);

  const formStyle: React.CSSProperties = {
    borderRadius: scalingValue(corners, isEditor),
    borderWidth: scalingValue(stroke, isEditor),
    borderStyle: 'solid',
  };

  const dividerWidthStyle = { borderLeftWidth: scalingValue(stroke, isEditor) };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    const payload = Object.fromEntries(
      visibleFields.map((f) => [f.name, values[f.name]?.trim() ?? '']).filter(([, v]) => v)
    );
    if (!submitUrl) {
      setStatus('error');
      setErrorMessage('No integrations were found for this form.');
      return;
    }
    if (Object.keys(payload).length === 0) return;

    const validationError = getFormFieldValidationError(visibleFields, values);
    if (validationError) {
      setStatus('error');
      setErrorMessage(validationError);
      return;
    }

    setStatus('submitting');
    setErrorMessage(null);

    try {
      const res = await fetch(submitUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || \`Request failed: \${res.status}\`);
      }

      setStatus('success');
      setValues(Object.fromEntries(visibleFields.map((f) => [f.name, ''])));
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong');
    }
  };

  return (
    <div className={\`\${P}-wrapper \${wrapperStateClasses}\`.trim()} style={colorVars}>
      <style dangerouslySetInnerHTML={{ __html: getCSS(P) }} />
      <form
        onSubmit={handleSubmit}
        className={\`\${P}-form\`}
        style={{
          ...formStyle,
          height: scalingValue(minHeight, isEditor),
          minHeight: scalingValue(minHeight, isEditor),
        }}
      >
        <div
          className={\`\${P}-inputWrap \${P}-overlayAnchor\`}
          style={{ flex: 1, minWidth: 0 }}
        >
          {visibleFields.map((field) => (
            <input
              key={field.name}
              type={field.type === 'email' ? 'email' : field.type === 'phone' ? 'tel' : 'text'}
              name={field.name}
              autoComplete="off"
              value={displayValues[field.name] ?? ''}
              onChange={(e) => setValues((prev) => ({ ...prev, [field.name]: e.target.value }))}
              placeholder={field.placeholder}
              required={field.isRequired ?? field.type === 'email'}
              className={\`\${P}-input\`}
              style={{
                ...inputTypographyCss,
                paddingRight: scalingValue(inputPadding.right, isEditor),
                paddingLeft: scalingValue(inputPadding.left, isEditor),
                paddingTop: scalingValue(inputPadding.top, isEditor),
                paddingBottom: scalingValue(inputPadding.bottom, isEditor),
              }}
            />
          ))}
        </div>
        <div className={\`\${P}-overlayAnchor\`}>
          <button
            type={canSubmit ? 'submit' : 'button'}
            className={\`\${P}-submitBtn\`}
            aria-label={submitAriaLabel}
            style={{
              ...buttonTypographyCss,
              ...dividerWidthStyle,
              paddingRight: scalingValue(buttonPadding.right, isEditor),
              paddingLeft: scalingValue(buttonPadding.left, isEditor),
              paddingTop: scalingValue(buttonPadding.top, isEditor),
              paddingBottom: scalingValue(buttonPadding.bottom, isEditor),
              pointerEvents: canSubmit ? 'auto' : undefined,
            }}
          >
            {status === 'submitting'
              ? '...'
              : useIconButton
                ? (iconSrc && (
                    <SvgImage
                      url={iconSrc}
                      className={\`\${P}-submitBtnIcon\`}
                      style={{ maxWidth: scalingValue(iconMaxWidth ?? 0, isEditor) }}
                      fill={\`var(--\${P}-button-text-color)\`}
                      hoverFill={\`var(--\${P}-button-text-color)\`}
                    />
                  ))
                : labelText}
          </button>
        </div>
      </form>
      {displayStatus === 'success' && (
        <p
          className={\`\${P}-success\`}
          style={{ ...statusTypographyCss }}
        >
          {successMessage}
        </p>
      )}
      {displayStatus === 'error' && (
        <p
          className={\`\${P}-error\`}
          style={{ ...statusTypographyCss }}
          role="alert"
        >
          {validationErrorMessage ?? displayError ?? errorMessageText}
        </p>
      )}
    </div>
  );
};

type FieldConfig = {
  name: string;
  type: 'text' | 'phone' | 'email';
  placeholder: string;
  isRequired?: boolean;
  error?: string;
};

type OnelinerColorKeys =
  | 'strokeColor'
  | 'inputColor'
  | 'placeholderColor'
  | 'buttonColor'
  | 'inputTextColor'
  | 'buttonTextColor'
  | 'successColor'
  | 'errorColor';

type StateColorOverrides = Partial<Record<OnelinerColorKeys, string>>;

export type OnelinerFormButtonIcon = {
  mode?: 'On' | 'Off';
  icon?: string | null;
};

export type OnelinerFormSettings = {
  fields: FieldConfig[];
  fieldsToShow: number;
  buttonLabel?: string | null;
  buttonIcon?: OnelinerFormButtonIcon | null;
  iconMaxWidth?: number;
  fontFamily?: string;
  inputFontSettings?: { fontWeight: number; fontStyle: string };
  inputFontSize?: number;
  inputLineHeight?: number;
  inputLetterSpacing?: number;
  inputWordSpacing?: number;
  inputTextAppearance?: TextStyles['textAppearance'];
  buttonFontSettings?: { fontWeight: number; fontStyle: string };
  buttonFontSize?: number;
  buttonLineHeight?: number;
  buttonLetterSpacing?: number;
  buttonWordSpacing?: number;
  buttonTextAppearance?: TextStyles['textAppearance'];
  statusFontSettings?: { fontWeight: number; fontStyle: string };
  statusFontSize?: number;
  statusLineHeight?: number;
  statusLetterSpacing?: number;
  statusWordSpacing?: number;
  statusTextAppearance?: TextStyles['textAppearance'];
  minHeight: number;
  corners: number;
  stroke: number;
  inputPadding: {
    left: number;
    right: number;
    top: number;
    bottom: number;
  };
  buttonPadding: {
    left: number;
    right: number;
    top: number;
    bottom: number;
  };
  strokeColor: string;
  inputColor: string;
  placeholderColor: string;
  buttonColor: string;
  successColor: string;
  errorColor: string;
  inputTextColor?: string;
  buttonTextColor?: string;
  stateOverrides?: Record<string, StateColorOverrides>;
  successMessage?: string;
  errorMessage?: string;
};

const COLOR_VAR_MAP: Record<OnelinerColorKeys, string> = {
  strokeColor: 'stroke-color',
  inputColor: 'input-color',
  placeholderColor: 'placeholder-color',
  buttonColor: 'button-color',
  inputTextColor: 'input-text-color',
  buttonTextColor: 'button-text-color',
  successColor: 'success-color',
  errorColor: 'error-color',
};

const STATE_KEYS = ['hover', 'focus', 'filled', 'success', 'error'] as const;
`,iP="data:image/svg+xml,"+encodeURIComponent('<svg width="23px" height="20px" viewBox="0 0 23 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Newsletter" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Tutorials-pop-up-Copy-12" transform="translate(-43, -687)" fill="#FFFFFF" fill-rule="nonzero"><path d="M66,697 C66,697.552285 65.5522847,698 65,698 L44,698 C43.4477153,698 43,697.552285 43,697 C43,696.447715 43.4477153,696 44,696 L65,696 C65.5522847,696 66,696.447715 66,697 Z M55.6689647,687.256706 L65.6689647,696.256706 C66.1103451,696.653948 66.1103451,697.346052 65.6689647,697.743294 L55.6689647,706.743294 C55.2584547,707.112753 54.6261649,707.079475 54.2567059,706.668965 C53.8872468,706.258455 53.9205252,705.626165 54.3310353,705.256706 L63.5051529,697 L54.3310353,688.743294 C53.9205252,688.373835 53.8872468,687.741545 54.2567059,687.331035 C54.6261649,686.920525 55.2584547,686.887247 55.6689647,687.256706 Z" id="Combined-Shape"></path></g></g></svg>'),iL={fontSettings:{type:"object",display:{type:"font-settings-weight",visible:!0},properties:{fontWeight:{type:"number"},fontStyle:{type:"string"}}}},iT={type:"object",version:1,settings:{sizing:"auto manual",properties:{fieldsToShow:{type:"number",scope:"common",title:"Fields",display:{type:"common-numeric-input"},min:1,max:3},fields:{type:"array",scope:"common",display:{type:"fields-group"},items:{type:"object",properties:{name:{type:"string"},type:{type:"string",enum:["text","phone","email"]},placeholder:{type:"string"},label:{type:"string"},isRequired:{type:"boolean"},error:{type:"string"}}}},buttonLabel:{type:"string",scope:"common",title:"Button Label",display:{type:"text-input"}},buttonIcon:{type:"object",scope:"common",title:"Button Icon",display:{type:"button-icon-switch"},properties:{mode:{type:"string",enum:["On","Off"]},icon:{type:["string","null"],title:"Icon",display:{type:"settings-image-input"}}}},iconMaxWidth:{type:"number",scope:"common",title:"Icon Max Width",display:{type:"full-width-input"},min:0,max:1},fontFamily:{type:"string",scope:"common",title:"Font family",display:{type:"font-family-select"}},inputPadding:{type:"object",scope:"layout",title:"Input Padding",display:{type:"padding-controls"}},buttonPadding:{type:"object",scope:"layout",title:"Button Padding",display:{type:"padding-controls"}},minHeight:{type:"number",scope:"layout",title:"min Height",display:{type:"numeric-input"},min:0,max:200},corners:{type:"number",scope:"layout",title:"Corners",display:{type:"numeric-input"},min:0,max:100},stroke:{type:"number",scope:"layout",title:"Stroke",display:{type:"numeric-input"},min:0,max:20},strokeColor:{type:"string",scope:"common",title:"Stroke All",display:{type:"palette-color-picker"}},inputColor:{type:"string",scope:"common",title:"Fill Input",display:{type:"palette-color-picker"}},inputTextColor:{type:"string",scope:"common",title:"Input Label",display:{type:"palette-color-picker"}},placeholderColor:{type:"string",scope:"common",title:"Filler Input",display:{type:"palette-color-picker"}},buttonColor:{type:"string",scope:"common",title:"Fill Button",display:{type:"palette-color-picker"}},buttonTextColor:{type:"string",scope:"common",title:"Label Button",display:{type:"palette-color-picker"}},successColor:{type:"string",scope:"common",title:"Success Message Color",display:{type:"palette-color-picker"}},errorColor:{type:"string",scope:"common",title:"Error Message Color",display:{type:"palette-color-picker"}},successMessage:{type:"string",scope:"common",title:"Success Message",display:{type:"text-input"}},errorMessage:{type:"string",scope:"common",title:"Error Message",display:{type:"text-input"}},stateOverrides:{type:"object",scope:"common"},inputFontSettings:{...iL.fontSettings,scope:"common",title:"Input"},inputFontSize:{type:"number",scope:"layout",title:"Input Font Size",display:{type:"font-size"}},inputLineHeight:{type:"number",scope:"layout",title:"Input Line Height",display:{type:"line-height-input"}},inputLetterSpacing:{type:"number",scope:"layout",title:"Input Letter Spacing",display:{type:"letter-spacing-input"}},inputWordSpacing:{type:"number",scope:"layout",title:"Input Word Spacing",display:{type:"word-spacing-input"}},inputTextAppearance:{type:"object",scope:"layout",title:"Input Text Appearance",display:{type:"text-appearance"}},buttonFontSettings:{...iL.fontSettings,scope:"common",title:"Button"},buttonFontSize:{type:"number",scope:"layout",title:"Button Font Size",display:{type:"font-size"}},buttonLineHeight:{type:"number",scope:"layout",title:"Button Line Height",display:{type:"line-height-input"}},buttonLetterSpacing:{type:"number",scope:"layout",title:"Button Letter Spacing",display:{type:"letter-spacing-input"}},buttonWordSpacing:{type:"number",scope:"layout",title:"Button Word Spacing",display:{type:"word-spacing-input"}},buttonTextAppearance:{type:"object",scope:"layout",title:"Button Text Appearance",display:{type:"text-appearance"}},statusFontSettings:{...iL.fontSettings,scope:"common",title:"Success/Error"},statusFontSize:{type:"number",scope:"layout",title:"Success/Error Font Size",display:{type:"font-size"}},statusLineHeight:{type:"number",scope:"layout",title:"Success/Error Line Height",display:{type:"line-height-input"}},statusLetterSpacing:{type:"number",scope:"layout",title:"Success/Error Letter Spacing",display:{type:"letter-spacing-input"}},statusWordSpacing:{type:"number",scope:"layout",title:"Success/Error Word Spacing",display:{type:"word-spacing-input"}},statusTextAppearance:{type:"object",scope:"layout",title:"Success/Error Text Appearance",display:{type:"text-appearance"}}},defaults:{fields:[{name:"email",type:"email",placeholder:"Enter your email",label:"Email",isRequired:!0,error:"Please, enter a valid e-mail."},{name:"name",type:"text",placeholder:"Enter your name",label:"Name",isRequired:!1,error:"Please, enter your name."},{name:"company",type:"text",placeholder:"Enter company",label:"Company",isRequired:!1,error:"Please, enter your company name."},{name:"phone",type:"phone",placeholder:"Enter your phone",label:"Phone",isRequired:!1,error:"Please, enter a valid phone number."}],fieldsToShow:1,buttonLabel:"Subscribe",buttonIcon:{mode:"Off",icon:iP},fontFamily:"Arial",strokeColor:"#000000",inputColor:"#ffffff",inputTextColor:"#0A00F8",placeholderColor:"#000000",buttonColor:"#000000",buttonTextColor:"#ffffff",errorColor:"#ef4444",successColor:"#22c55e",successMessage:"Thanks for subscribing!",errorMessage:"Please, fill all required fields.",stateOverrides:{hover:{buttonColor:"#33A2F2"}},inputFontSettings:{fontWeight:400,fontStyle:"normal"},inputLetterSpacing:0,inputWordSpacing:0,inputTextAppearance:{textTransform:"none",textDecoration:"none",fontVariant:"normal"},buttonFontSettings:{fontWeight:400,fontStyle:"normal"},buttonLetterSpacing:0,buttonWordSpacing:0,buttonTextAppearance:{textTransform:"uppercase",textDecoration:"none",fontVariant:"normal"},statusFontSettings:{fontWeight:400,fontStyle:"normal"},statusLetterSpacing:0,statusWordSpacing:0,statusTextAppearance:{textTransform:"none",textDecoration:"none",fontVariant:"normal"}},layoutDefaults:{m:{minHeight:.1,iconMaxWidth:.1,stroke:.001,corners:.0053,buttonPadding:{top:.02,right:.04,bottom:.02,left:.04},inputPadding:{top:.01,right:.03,bottom:.01,left:.03},inputFontSize:.043,inputLineHeight:.043,buttonFontSize:.0373,buttonLineHeight:.0373,statusFontSize:.0373,statusLineHeight:.0373},t:{minHeight:.0651,iconMaxWidth:.1,stroke:.001,corners:.0026,buttonPadding:{top:.02604,right:.02604,bottom:.02604,left:.02604},inputPadding:{top:.02604,right:.02604,bottom:.02604,left:.0182},inputFontSize:.0208,inputLineHeight:.02604,buttonFontSize:.0208,buttonLineHeight:.02604,statusFontSize:.0208,statusLineHeight:.02604},d:{minHeight:.028,iconMaxWidth:.028,stroke:.001,corners:.0027,buttonPadding:{right:.0175,left:.0175,top:.005,bottom:.004},inputPadding:{top:.01,right:.01,bottom:.01,left:.01},inputFontSize:.01,inputLineHeight:.01,buttonFontSize:.009,buttonLineHeight:.01,statusFontSize:.01,statusLineHeight:.01}},displayRules:[{if:{name:"stroke",value:0},then:{name:"properties.strokeColor.display.visible",value:!1}},{if:{name:"buttonIcon.mode",value:"On"},then:{name:"properties.buttonFontSettings.display.visible",value:!1}},{if:{name:"buttonIcon.mode",value:"On"},then:{name:"properties.buttonFontSize.display.visible",value:!1}},{if:{name:"buttonIcon.mode",value:"On"},then:{name:"properties.buttonLineHeight.display.visible",value:!1}},{if:{name:"buttonIcon.mode",value:"On"},then:{name:"properties.buttonLetterSpacing.display.visible",value:!1}},{if:{name:"buttonIcon.mode",value:"On"},then:{name:"properties.buttonWordSpacing.display.visible",value:!1}},{if:{name:"buttonIcon.mode",value:"On"},then:{name:"properties.buttonTextAppearance.display.visible",value:!1}},{if:{name:"buttonIcon.mode",value:"Off"},then:{name:"properties.iconMaxWidth.display.visible",value:!1}}]},panels:[{id:"general",icon:"settings",title:"General",tooltip:"General Settings",layout:[{type:"row",items:["__componentName__"]},{type:"row",items:["fieldsToShow","minHeight"]},{type:"row",items:["corners","stroke"]},{type:"row",title:"",items:["inputPadding","buttonPadding"]},{type:"row",title:"",items:["buttonIcon"]},"iconMaxWidth"]},{id:"typeStyle",icon:"text-icon",title:"Type Style",tooltip:"Typography",layout:["__componentName__","fontFamily",{type:"group",title:"",items:["inputFontSettings",{type:"row",items:["inputFontSize","inputLineHeight","inputLetterSpacing","inputWordSpacing"]},"inputTextAppearance"]},{type:"group",title:"",items:["buttonFontSettings",{type:"row",items:["buttonFontSize","buttonLineHeight","buttonLetterSpacing","buttonWordSpacing"]},"buttonTextAppearance"]},{type:"group",title:"",items:["statusFontSettings",{type:"row",items:["statusFontSize","statusLineHeight","statusLetterSpacing","statusWordSpacing"]},"statusTextAppearance"]}]},{id:"fields",icon:"layers",title:"Fields",tooltip:"Fields",layout:["__componentName__","fields","buttonLabel","successMessage","errorMessage"]}],paletteBookmark:{items:["strokeColor","inputColor","inputTextColor","placeholderColor","buttonColor","buttonTextColor","successColor","errorColor"],panelIds:["general","typeStyle"],stateItems:{default:["strokeColor","placeholderColor","inputColor","buttonTextColor","buttonColor"],hover:["strokeColor","inputColor","buttonTextColor","buttonColor"],focus:["strokeColor","inputTextColor","buttonTextColor","buttonColor"],filled:["strokeColor","inputColor","inputTextColor","buttonTextColor"],success:["successColor"],error:["errorColor"]}},allowedPlugins:["newsletter"],states:["default","hover","focus","filled","success","error"]},iM=e=>e.reduce((e,t)=>e+(t.offsetWidth||t.getBoundingClientRect().width),0),iE=(e,t)=>{if(t<=0||e.children.length<t)return 0;let i=e.children[0],n=e.children[t-1];if(!i||!n)return 0;let o=getComputedStyle(e),r=Number.parseFloat(o.columnGap||o.gap||"0")||0,a=n.getBoundingClientRect().right-i.getBoundingClientRect().left;if(a>0)return a;let l=iM(Array.from({length:t},(t,i)=>e.children[i]));return l<=0?0:l+r*Math.max(0,t-1)},iI=({item:e,prefix:t,imageFit:i,imageMaxWidth:a,imageMaxHeight:l,imageHoverClass:s,isFirstSet:c,scaled:d,onFirstSetImageDone:u})=>{var p,m,g;let h=o.useRef(null);o.useLayoutEffect(()=>{if(!c)return;let e=h.current;null!=e&&e.complete&&(null==u||u())},[c,null==(p=e.image)?void 0:p.url,u]);let f="cover"===i.display,y=i.ratioValue??"1:1",v=i.reversed??!1,[x,b]=y.split(":").map(Number),w=(v?b:x)/(v?x:b),$=a/w,S=d($>l?l*w:a),C=d($>l?l:$),P=(null==(m=e.image)?void 0:m.url)&&n.jsx("img",{ref:h,src:e.image.url,alt:(null==(g=e.image)?void 0:g.name)??"",style:f?{pointerEvents:"auto",display:"block",width:"100%",height:"100%",objectFit:"cover"}:{pointerEvents:"auto",display:"block",height:"100%",width:"auto",maxWidth:d(a),objectFit:"contain"},onLoad:c?u:void 0,onError:c?u:void 0});return n.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"start",...f?{width:S}:{width:"max-content",maxWidth:d(a),minWidth:0}},children:n.jsx("div",{className:s,style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",flexShrink:0,...f?{width:S,height:C,overflow:"hidden"}:{width:"max-content",maxWidth:d(a),height:d(l)}},children:P&&e.link?n.jsx("a",{href:e.link,target:"_self",rel:"noopener noreferrer",className:r(`${t}-marquee-link`,!f&&`${t}-marquee-link-contain`),children:P}):P})})},ik=`import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import cn from 'classnames';
import { CommonComponentProps } from '../props';
import { scalingValue } from '../utils/scalingValue';
import { useScopedStyles } from '../utils/useScopedStyles';

function getCSS(P: string, setWidthPx: number): string {
  const distance = setWidthPx > 0 ? \`\${setWidthPx}px\` : '0px';
  return \`
.\${P}-marquee-wrapper {
  overflow: hidden;
  width: 100%;
  height: auto;
}

@keyframes \${P}-marquee-left {
  from { -webkit-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); }
  to { -webkit-transform: translate3d(-\${distance}, 0, 0); transform: translate3d(-\${distance}, 0, 0); }
}

@keyframes \${P}-marquee-right {
  from { -webkit-transform: translate3d(-\${distance}, 0, 0); transform: translate3d(-\${distance}, 0, 0); }
  to { -webkit-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); }
}

.\${P}-marquee-track {
  display: flex;
  flex-direction: row;
  width: max-content;
  will-change: transform;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  flex-wrap: nowrap;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}

.\${P}-marquee-track[data-direction="left"] {
  -webkit-animation-name: \${P}-marquee-left;
  animation-name: \${P}-marquee-left;
}

.\${P}-marquee-track[data-direction="right"] {
  -webkit-animation-name: \${P}-marquee-right;
  animation-name: \${P}-marquee-right;
}
.\${P}-marquee-row {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
.\${P}-marquee-set {
  flex: 0 0 auto;
}
.\${P}-marquee-static {
  justify-content: center;
  overflow-x: auto;
}
.\${P}-marquee-card {
  position: relative;
  flex: 0 0 auto;
  align-self: flex-start;
}
.\${P}-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  order: 1;
}
.\${P}-cover {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.\${P}-elements-overlay {
  position: relative;
  inset: 0;
  display: flex;
  flex-direction: column;
  pointer-events: none;
}
.\${P}-control {
  position: relative;
  z-index: 2;
  width: 100%;
}

.\${P}-marquee-link {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: inherit;
}
.\${P}-marquee-link-contain {
  width: auto;
  height: auto;
}

.\${P}-control::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 20px;
  pointer-events: auto;
  z-index: 10;
}

.\${P}-gap-control {
  position: relative;
  z-index: 2;
  pointer-events: auto;
  height: 100%;
}
.\${P}-image-hover-brightness img {
  transition: filter 0.3s ease;
}
.\${P}-image-hover-brightness:hover img {
  filter: brightness(1.25);
}
.\${P}-image-hover-grayscale img {
  transition: filter 0.3s ease;
}
.\${P}-image-hover-grayscale:hover img {
  filter: grayscale(100%);
}
\`;
}

const PX_PER_SEC_PER_SPEED_UNIT = 30;
const GAP_LABEL_AREA_PX = 20;
const MIN_CONTENT_SEQUENCE_REPEAT = 3;
const MAX_CONTENT_SEQUENCE_REPEAT = 12;
const MIN_TRUSTWORTHY_CYCLE_WIDTH_PX = 32;
const OUTER_SET_COPIES = 3;

const restartTrackAnimation = (track: HTMLElement) => {
  track.style.setProperty('animation-name', 'none');
  track.style.setProperty('-webkit-animation-name', 'none');
  void track.offsetHeight;
  track.style.removeProperty('animation-name');
  track.style.removeProperty('-webkit-animation-name');
};

const expandSetContent = (items: MarqueeItem[], repeat: number) =>
  Array.from({ length: repeat }, () => items).flat();

type MarqueeImageFit = {
  display: 'fit' | 'cover';
  ratioValue: '1:1' | '2:3' | '3:4' | '4:5' | '16:9';
  reversed: boolean;
};

const normalizeImageFit = (raw: MarqueeSettings['imageFit'] | string | undefined): MarqueeImageFit => {
  if (typeof raw === 'string') {
    return {
      display: raw.toLowerCase() === 'cover' ? 'cover' : 'fit',
      ratioValue: '16:9',
      reversed: false,
    };
  }
  const display = typeof raw?.display === 'string' ? raw.display.toLowerCase() : '';
  return {
    display: display === 'cover' ? 'cover' : 'fit',
    ratioValue: raw?.ratioValue ?? '16:9',
    reversed: raw?.reversed ?? false,
  };
};

const sumElementWidths = (elements: readonly HTMLElement[]): number =>
  elements.reduce(
    (sum, child) => sum + (child.offsetWidth || child.getBoundingClientRect().width),
    0,
  );

const measureSingleCycleWidth = (set: HTMLElement, originalItemCount: number): number => {
  if (originalItemCount <= 0 || set.children.length < originalItemCount) return 0;
  const firstCard = set.children[0] as HTMLElement;
  const lastCard = set.children[originalItemCount - 1] as HTMLElement;
  if (!firstCard || !lastCard) return 0;
  const style = getComputedStyle(set);
  const gapPx = Number.parseFloat(style.columnGap || style.gap || '0') || 0;
  const spanWidth = lastCard.getBoundingClientRect().right - firstCard.getBoundingClientRect().left;
  if (spanWidth > 0) return spanWidth;
  const cycleChildren = Array.from({ length: originalItemCount }, (_, i) => set.children[i] as HTMLElement);
  const childWidth = sumElementWidths(cycleChildren);
  if (childWidth <= 0) return 0;
  return childWidth + gapPx * Math.max(0, originalItemCount - 1);
};

const measureSetWidth = (set: HTMLElement): number => {
  const rectWidth = set.getBoundingClientRect().width;
  if (rectWidth > 0) return rectWidth;
  const offsetWidth = set.offsetWidth;
  if (offsetWidth > 0) return offsetWidth;
  const childWidth = sumElementWidths(Array.from(set.children) as HTMLElement[]);
  if (childWidth <= 0) return 0;
  const style = getComputedStyle(set);
  const gapPx = Number.parseFloat(style.columnGap || style.gap || '0') || 0;
  const paddingRightPx = Number.parseFloat(style.paddingRight) || 0;
  return childWidth + gapPx * Math.max(0, set.children.length - 1) + paddingRightPx;
};

const isCardInMarqueeView = (card: Element, wrapper: Element): boolean => {
  const wrapperRect = wrapper.getBoundingClientRect();
  const rect = card.getBoundingClientRect();
  return rect.right > wrapperRect.left && rect.left < wrapperRect.right;
};

const isAnyCopyOfSlotInView = (wrapper: Element, itemIndex: number): boolean => {
  const cards = wrapper.querySelectorAll<HTMLElement>(\`[data-marquee-item-index="\${itemIndex}"]\`);
  return Array.from(cards).some((card) => isCardInMarqueeView(card, wrapper));
};

type MarqueeItemCardProps = {
  item: MarqueeItem;
  prefix: string;
  imageFit: MarqueeImageFit;
  imageMaxWidth: number;
  imageMaxHeight: number;
  imageHoverClass?: string;
  isEditor?: boolean;
  isFirstSet?: boolean;
  scaled: (value: number) => string;
  onFirstSetImageDone?: () => void;
};

const MarqueeItemCard = ({
  item,
  prefix: P,
  imageFit,
  imageMaxWidth,
  imageMaxHeight,
  imageHoverClass,
  isFirstSet,
  scaled,
  onFirstSetImageDone,
}: MarqueeItemCardProps) => {
  const imageRef = useRef<HTMLImageElement | null>(null);

  useLayoutEffect(() => {
    if (!isFirstSet) return;
    const el = imageRef.current;
    if (el?.complete) onFirstSetImageDone?.();
  }, [isFirstSet, item.image?.url, onFirstSetImageDone]);

  const isCover = imageFit.display === 'cover';
  const ratioValue = imageFit.ratioValue ?? '1:1';
  const ratioReversed = imageFit.reversed ?? false;
  const [rW, rH] = ratioValue.split(':').map(Number);
  const effW = ratioReversed ? rH : rW;
  const effH = ratioReversed ? rW : rH;
  const ratio = effW / effH;
  const unconstrainedHeight = imageMaxWidth / ratio;
  const coverHeight = unconstrainedHeight > imageMaxHeight ? imageMaxHeight : unconstrainedHeight;
  const coverWidth = unconstrainedHeight > imageMaxHeight ? imageMaxHeight * ratio : imageMaxWidth;
  const coverWidthScaled = scaled(coverWidth);
  const coverHeightScaled = scaled(coverHeight);

  const imageNode =
    item.image?.url &&
    (
      <img
        ref={imageRef}
        src={item.image.url}
        alt={item.image?.name ?? ''}
        style={
          isCover
            ? {
                pointerEvents: 'auto',
                display: 'block',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }
            : {
                pointerEvents: 'auto',
                display: 'block',
                height: '100%',
                width: 'auto',
                maxWidth: scaled(imageMaxWidth),
                objectFit: 'contain',
              }
        }
        onLoad={isFirstSet ? onFirstSetImageDone : undefined}
        onError={isFirstSet ? onFirstSetImageDone : undefined}
      />
    );
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        ...(isCover
          ? { width: coverWidthScaled }
          : { width: 'max-content', maxWidth: scaled(imageMaxWidth), minWidth: 0 }),
      }}
    >
      <div
        className={imageHoverClass}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          flexShrink: 0,
          ...(isCover
            ? { width: coverWidthScaled, height: coverHeightScaled, overflow: 'hidden'}
            : {
                width: 'max-content',
                maxWidth: scaled(imageMaxWidth),
                height: scaled(imageMaxHeight),
              }),
        }}
      >
        {imageNode && item.link
          ? (
            <a href={item.link} target='_self' rel='noopener noreferrer' className={cn(\`\${P}-marquee-link\`, !isCover && \`\${P}-marquee-link-contain\`)}>
              {imageNode}
            </a>
          )
          : imageNode
        }
      </div>
    </div>
  );
};

export const Marquee = ({ settings, content, isEditor, isPreviewMode, isEditMode }: MarqueeProps) => {
  const { prefix: P } = useScopedStyles();
  const [setWidth, setSetWidth] = useState(0);
  const animationDistance = setWidth > 0 ? Math.round(setWidth) : 0;
  const scopedCss = useMemo(() => getCSS(P, animationDistance), [P, animationDistance]);
  const { speed, direction, pauseOnHover, gap, imageMaxWidth, imageMaxHeight, hoverEffect } = settings;
  const imageFit = useMemo(() => normalizeImageFit(settings.imageFit), [settings.imageFit]);
  const originalItemCount = content?.length ?? 0;
  const showControls = Boolean(isEditMode);
  const showHoverEffects = !isEditor || Boolean(isPreviewMode);
  const imageHoverClass = showHoverEffects && hoverEffect !== 'off' && hoverEffect !== 'randomize' ? \`\${P}-image-hover-\${hoverEffect}\` : undefined;
  const autoplayEnabled = isEditor ? Boolean(isPreviewMode) : true;
  const hasContent = (content?.length ?? 0) > 0;
  const useMarqueeTrack = hasContent && (autoplayEnabled || Boolean(isEditor));
  const pxPerSec = Math.max(0, speed) * PX_PER_SEC_PER_SPEED_UNIT;
  const scaled = (v: number) => scalingValue(v, isEditor ?? false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const setRef = useRef<HTMLDivElement | null>(null);
  const [trackHeight, setTrackHeight] = useState(0);
  const hoverPauseEnabled = autoplayEnabled && pauseOnHover === 'on';
  const [isHovering, setIsHovering] = useState(false);
  const [swappedSlots, setSwappedSlots] = useState<Record<number, MarqueeItem>>({});
  const swappedSlotsRef = useRef(swappedSlots);
  swappedSlotsRef.current = swappedSlots;
  const stableCandidateRef = useRef<number | null>(null);
  const loadedFirstSetImagesRef = useRef(0);
  const scheduleRemeasureRef = useRef<(() => void) | null>(null);
  const contentImageUrlsKey = useMemo(() => (content ?? []).map((i) => i.image?.url ?? '').join('\\0'),[content]);
  const [contentSequenceRepeat, setContentSequenceRepeat] = useState(MIN_CONTENT_SEQUENCE_REPEAT);
  const setContent = useMemo(() => {
    const items = content ?? [];
    if (items.length === 0) return items;
    const shouldExpandSet = autoplayEnabled || Boolean(isEditor);
    if (!shouldExpandSet) return items;
    return expandSetContent(items, contentSequenceRepeat);
  }, [content, autoplayEnabled, contentSequenceRepeat, isEditor]);
  const firstSetImageUrlCount = useMemo(
    () => (content ?? []).filter((i) => Boolean(i.image?.url)).length,
    [content],
  );
  const copies = useMarqueeTrack ? OUTER_SET_COPIES : 1;

  useLayoutEffect(() => {
    loadedFirstSetImagesRef.current = 0;
    setSwappedSlots({});
    stableCandidateRef.current = null;
    setContentSequenceRepeat(MIN_CONTENT_SEQUENCE_REPEAT);
    setSetWidth(0);
  }, [contentImageUrlsKey]);

  useEffect(() => {
    if (!showHoverEffects || hoverEffect !== 'randomize') return;
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const revertSwappedSlotsOutOfView = (itemIndices: Iterable<number>) => {
      setSwappedSlots((prev) => {
        const indicesToRemove = Array.from(itemIndices).filter(
          (itemIndex) => itemIndex in prev && !isAnyCopyOfSlotInView(wrapper, itemIndex),
        );
        if (indicesToRemove.length === 0) return prev;
        const next = { ...prev };
        indicesToRemove.forEach((itemIndex) => {
          delete next[itemIndex];
        });
        return next;
      });
    };

    const observer = new IntersectionObserver((entries) => {
      const itemIndices = new Set<number>();
      for (const entry of entries) {
        const raw = (entry.target as HTMLElement).dataset.marqueeItemIndex;
        const itemIndex = raw !== undefined ? Number(raw) : NaN;
        if (!Number.isNaN(itemIndex)) itemIndices.add(itemIndex);
      }
      if (itemIndices.size > 0) revertSwappedSlotsOutOfView(itemIndices);
    }, { root: wrapper, threshold: 0 });

    Object.keys(swappedSlots).forEach((rawItemIndex) => {
      const itemIndex = Number(rawItemIndex);
      wrapper
        .querySelectorAll<HTMLDivElement>(\`[data-marquee-item-index="\${itemIndex}"]\`)
        .forEach((card) => observer.observe(card));
    });

    const rafRef = { current: 0 };
    const tick = () => {
      const swappedKeys = Object.keys(swappedSlotsRef.current);
      if (swappedKeys.length === 0) return;
      revertSwappedSlotsOutOfView(swappedKeys.map(Number));
      rafRef.current = requestAnimationFrame(tick);
    };
    if (Object.keys(swappedSlotsRef.current).length > 0) {
      rafRef.current = requestAnimationFrame(tick);
    }

    return () => {
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
    };
  }, [hoverEffect, swappedSlots, showHoverEffects]);

  useLayoutEffect(() => {
    if (!useMarqueeTrack) return;
    const wrapper = wrapperRef.current;
    const set = setRef.current;
    if (!wrapper || !set) return;
    const rafRef = { current: 0 };
    const measure = () => {
      const nextContainerWidth = wrapper.getBoundingClientRect().width || wrapper.offsetWidth;
      const nextRawSetWidth = measureSetWidth(set);
      const prevCandidate = stableCandidateRef.current;
      const isStableNow =
        typeof prevCandidate === 'number' &&
        Math.abs(prevCandidate - nextRawSetWidth) <= 0.25;
      stableCandidateRef.current = nextRawSetWidth;
      let effectiveRepeat = contentSequenceRepeat;
      let trustworthySingleCycleWidth = 0;
      if ((autoplayEnabled || isEditor) && originalItemCount > 0 && nextContainerWidth > 0) {
        const singleCycleWidth = measureSingleCycleWidth(set, originalItemCount);
        if (singleCycleWidth >= MIN_TRUSTWORTHY_CYCLE_WIDTH_PX) {
          trustworthySingleCycleWidth = singleCycleWidth;
          const targetRepeat = Math.min(
            MAX_CONTENT_SEQUENCE_REPEAT,
            Math.max(
              MIN_CONTENT_SEQUENCE_REPEAT,
              Math.ceil(nextContainerWidth / singleCycleWidth) + 1,
            ),
          );
          effectiveRepeat = targetRepeat;
          if (targetRepeat !== contentSequenceRepeat) {
            setContentSequenceRepeat(targetRepeat);
          }
        }
      }
      const repeatIsChanging = effectiveRepeat !== contentSequenceRepeat;
      const resolvedSetWidth = repeatIsChanging && trustworthySingleCycleWidth > 0
        ? trustworthySingleCycleWidth * effectiveRepeat
        : nextRawSetWidth > 0
          ? nextRawSetWidth
          : trustworthySingleCycleWidth > 0
            ? trustworthySingleCycleWidth * effectiveRepeat
            : (() => {
              const singleCycleWidth = measureSingleCycleWidth(set, originalItemCount);
              return singleCycleWidth > 0 ? singleCycleWidth * effectiveRepeat : 0;
            })();
      if (resolvedSetWidth > 0) {
        setSetWidth((prev) => {
          if (prev <= 0) return resolvedSetWidth;
          if (!isStableNow) return prev;
          if (Math.round(prev) === Math.round(resolvedSetWidth)) return prev;
          return resolvedSetWidth;
        });
      } else if (!isStableNow && setWidth <= 0) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(measure);
      }
    };
    const schedule = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(measure);
    };
    scheduleRemeasureRef.current = schedule;
    schedule();
    const ro = new ResizeObserver(schedule);
    ro.observe(wrapper);
    ro.observe(set);
    return () => {
      scheduleRemeasureRef.current = null;
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, [autoplayEnabled, useMarqueeTrack, setWidth, contentImageUrlsKey, contentSequenceRepeat, originalItemCount, isEditor]);

  useLayoutEffect(() => {
    if (!useMarqueeTrack || animationDistance <= 0) return;
    const track = trackRef.current;
    if (!track) return;
    restartTrackAnimation(track);
  }, [useMarqueeTrack, animationDistance, direction, pxPerSec]);

  useLayoutEffect(() => {
    if (!useMarqueeTrack || setWidth <= 0) {
      setTrackHeight(0);
      return;
    }
    const track = trackRef.current;
    const set = setRef.current;
    if (!track || !set) return;
    const measure = () => {
      const trackHeight = track.offsetHeight || track.getBoundingClientRect().height;
      const childMaxHeight = (Array.from(set.children) as HTMLElement[]).reduce(
        (max, child) => Math.max(max, child.offsetHeight || child.getBoundingClientRect().height),
        0,
      );
      const next = trackHeight > 0 ? trackHeight : childMaxHeight;
      setTrackHeight(next > 0 ? next : 0);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    ro.observe(set);
    return () => ro.disconnect();
  }, [useMarqueeTrack, copies, setContent, isEditor, gap, imageMaxWidth, imageMaxHeight, setWidth, imageFit, swappedSlots]);

  useLayoutEffect(() => {
    if (!isEditor || !showControls || !useMarqueeTrack) return;
    if (typeof window === 'undefined') return;
    const raf = requestAnimationFrame(() => {
      window.dispatchEvent(new Event('scroll'));
    });
    return () => cancelAnimationFrame(raf);
  }, [isEditor, showControls, useMarqueeTrack, direction, setWidth, trackHeight, gap, setContent]);

  const onTrackEnter = () => {
    if (!hoverPauseEnabled) return;
    setIsHovering(true);
  };
  const onTrackLeave = () => {
    if (!hoverPauseEnabled) return;
    setIsHovering(false);
  };

  const onFirstSetImageDone = useCallback(() => {
    loadedFirstSetImagesRef.current = Math.min(
      firstSetImageUrlCount,
      loadedFirstSetImagesRef.current + 1,
    );
    scheduleRemeasureRef.current?.();
  }, [firstSetImageUrlCount]);

  const handleRandomizeEnter = useCallback((slotIndex: number, item: MarqueeItem) => {
    setSwappedSlots((prev) => {
      const current = prev[slotIndex] ?? item;
      const candidates = (content ?? []).filter((c) => c !== current);
      if (candidates.length === 0) return prev;
      const next = candidates[Math.floor(Math.random() * candidates.length)];
      return { ...prev, [slotIndex]: next };
    });
  }, [content]);

  const renderCardWrapper = (item: MarqueeItem, copyIndex: number, slotIndex: number, isFirstSet?: boolean) => {
    const displayItem = showHoverEffects && hoverEffect === 'randomize' && imageFit.display === 'cover' ? (swappedSlots[slotIndex] ?? item) : item;
    const gapLabelSize = \`max(\${scaled(gap)}, \${GAP_LABEL_AREA_PX}px)\`;
    const gapControlRight = \`calc(-0.5 * (\${gapLabelSize} + \${scaled(gap)}))\`;
    return (
      <div
        key={\`\${copyIndex}-\${slotIndex}\`}
        className={\`\${P}-marquee-card\`}
        data-marquee-item-index={slotIndex}
        onMouseEnter={showHoverEffects && hoverEffect === 'randomize' && imageFit.display === 'cover' ? () => handleRandomizeEnter(slotIndex, item) : undefined}
      >
        <MarqueeItemCard
          item={displayItem}
          prefix={P}
          imageFit={imageFit}
          imageMaxWidth={imageMaxWidth}
          imageMaxHeight={imageMaxHeight}
          imageHoverClass={imageHoverClass}
          isEditor={isEditor}
          isFirstSet={isFirstSet}
          scaled={scaled}
          onFirstSetImageDone={onFirstSetImageDone}
        />
        {showControls && (
          <div
            data-controls="gap"
            data-controls-axis="x"
            className={\`\${P}-gap-control\`}
            style={{
              position: 'absolute',
              top: 0,
              right: gapControlRight,
              width: gapLabelSize,
              height: '100%',
            }}
          />
        )}
      </div>
    );
  };

  if (useMarqueeTrack) {
    const marqueePlayState = !autoplayEnabled
      ? 'paused'
      : hoverPauseEnabled
        ? (isHovering ? 'paused' : 'running')
        : 'running';
    const durationMs = animationDistance > 0 && pxPerSec > 0 ? (animationDistance / pxPerSec) * 1000 : 0;
    const durationS = \`\${Math.max(0, durationMs) / 1000}s\`;

    return (
      <div
        ref={wrapperRef}
        className={cn(\`\${P}-wrapper\`, \`\${P}-marquee-wrapper\`)}
        aria-label="Marquee"
        style={trackHeight > 0 ? { height: trackHeight } : undefined}
      >
        <style dangerouslySetInnerHTML={{ __html: scopedCss }} />
        <div
          ref={trackRef}
          className={\`\${P}-marquee-track\`}
          data-direction={direction}
          onMouseEnter={onTrackEnter}
          onMouseLeave={onTrackLeave}
          style={{
            WebkitAnimationDuration: durationS,
            animationDuration: durationS,
            WebkitAnimationPlayState: marqueePlayState,
            animationPlayState: marqueePlayState,
          }}
        >
          {Array.from({ length: copies }, (_, copyIndex) => (
            <div
              key={\`set-\${copyIndex}\`}
              ref={copyIndex === 0 ? setRef : undefined}
              className={cn(\`\${P}-marquee-row\`, \`\${P}-marquee-set\`)}
              style={{
                gap: scaled(gap),
                paddingRight: scaled(gap),
              }}
              aria-hidden={copyIndex > 0}
            >
              {setContent.map((marqueeItem, slotIndex) =>
                renderCardWrapper(
                  marqueeItem,
                  copyIndex,
                  slotIndex,
                  copyIndex === 0 && slotIndex < originalItemCount,
                ),
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div ref={wrapperRef} className={\`\${P}-wrapper\`}>
      <style dangerouslySetInnerHTML={{ __html: scopedCss }} />
      <div
        key="marquee-static"
        className={cn(\`\${P}-marquee-row\`, \`\${P}-marquee-static\`)}
        style={{ gap: scaled(gap), transform: 'none' }}
        aria-label="Marquee"
      >
        {content?.map((marqueeItem, itemIndex) =>
          renderCardWrapper(marqueeItem, 0, itemIndex),
        )}
      </div>
    </div>
  );
};

export type MarqueeItem = {
  image?: {
    url?: string;
    name?: string;
  };
  link?: string;
};

export type MarqueeSettings = {
  speed: number;
  direction: 'left' | 'right';
  pauseOnHover: 'on' | 'off';
  hoverEffect: 'off' | 'brightness' | 'grayscale' | 'randomize';
  gap: number;
  imageMaxWidth: number;
  imageMaxHeight: number;
  imageFit: {
    display: 'fit' | 'cover';
    ratioValue: '1:1' | '2:3' | '3:4' | '4:5' | '16:9';
    reversed: boolean;
  };
};

type MarqueeProps = {
  settings: MarqueeSettings;
  content?: MarqueeItem[];
  isEditor?: boolean;
  isPreviewMode?: boolean;
  isEditMode?: boolean;
} & CommonComponentProps;
`,iR={type:"object",version:1,settings:{sizing:"auto manual",properties:{speed:{type:"number",scope:"layout",title:"Speed",display:{type:"speed-control"},min:0,max:7},direction:{type:"string",scope:"common",title:"Direction",display:{type:"direction-control"},enum:["left","right"]},pauseOnHover:{title:"Pause on hover",type:"string",scope:"common",display:{type:"toggle-cycle",enum:["on","off"]}},hoverEffect:{type:"string",scope:"common",title:"Effect",display:{type:"toggle-cycle",enum:["off","brightness","grayscale"]}},gap:{type:"number",scope:"layout",title:"Gap",min:0,display:{type:"numeric-input"}},imageMaxWidth:{type:"number",scope:"layout",title:"Max width",min:10,display:{type:"numeric-input"}},imageMaxHeight:{type:"number",scope:"layout",title:"Max height",min:10,display:{type:"numeric-input"}},imageFit:{type:"object",scope:"common",title:"Display",display:{type:"image-ratio-control"},properties:{display:{type:"string",enum:["fit","cover"]},ratioValue:{type:"string",enum:["1:1","2:3","3:4","4:5","16:9"]},reversed:{type:"boolean"}}}},defaults:{direction:"left",pauseOnHover:"off",hoverEffect:"off",imageFit:{display:"fit",ratioValue:"16:9",reversed:!1}},layoutDefaults:{m:{speed:.55,gap:.04,imageMaxWidth:.8,imageMaxHeight:.8},t:{speed:1.64,gap:.02,imageMaxWidth:.5208,imageMaxHeight:.5208},d:{speed:1.64,gap:.02,imageMaxWidth:.208,imageMaxHeight:.278}},displayRules:[{if:{name:"imageFit.display",value:"cover"},then:{name:"properties.hoverEffect.display.enum",value:["off","brightness","grayscale","randomize"]}}],layout:["__componentName__","speed","direction","pauseOnHover","hoverEffect","gap","imageMaxWidth","imageMaxHeight","imageFit"]},panels:[{id:"general",icon:"settings",title:"General",tooltip:"General Settings",layout:[{type:"row",items:["__componentName__"]},{type:"row",items:["direction"]},{type:"row",items:["speed","imageFit"]},{type:"row",items:["imageMaxWidth","imageMaxHeight"]},{type:"row",title:"Hover Settings",items:[{type:"row",title:"",items:["hoverEffect","pauseOnHover"]}]}]}],content:{type:"array",settings:{addItemFromFileExplorer:!0},items:{type:"object",properties:{image:{type:"object",label:"Image",display:{isObjectFitEditable:!1,type:"media-input"}},link:{label:"URL",placeholder:"Enter link...",display:{type:"text-input"}}}},default:[{image:{url:"https://cdn.cntrl.site/component-assets/grid(1).webp",name:""},link:""},{image:{url:"https://cdn.cntrl.site/component-assets/grid(2).webp",name:""},link:""},{image:{url:"https://cdn.cntrl.site/component-assets/grid(3).webp",name:""},link:""},{image:{url:"https://cdn.cntrl.site/component-assets/grid(4).webp",name:""},link:""},{image:{url:"https://cdn.cntrl.site/component-assets/grid(5).webp",name:""},link:""}]}};function iF(e){return`
.${e}-marquee-wrapper {
  overflow: hidden;
  width: 100%;
  height: auto;
}

@keyframes ${e}-marquee-left {
  from { transform: translate3d(0, 0, 0); }
  to { transform: translate3d(calc(-1 * var(--marquee-distance)), 0, 0); }
}

@keyframes ${e}-marquee-right {
  from { transform: translate3d(calc(-1 * var(--marquee-distance)), 0, 0); }
  to { transform: translate3d(0, 0, 0); }
}

.${e}-marquee-track {
  display: flex;
  flex-direction: row;
  width: max-content;
  will-change: transform;
  backface-visibility: hidden;
  transform: translateZ(0);
  -webkit-backface-visibility: hidden;
  -webkit-transform: translateZ(0);
  perspective: 1000px;
  animation-duration: var(--marquee-duration);
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-play-state: var(--marquee-play-state, running);
}

.${e}-marquee-track[data-direction="left"] {
  animation-name: ${e}-marquee-left;
}

.${e}-marquee-track[data-direction="right"] {
  animation-name: ${e}-marquee-right;
}

.${e}-marquee-set {
  display: flex;
  flex-direction: row;
  flex: 0 0 auto;
}

.${e}-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  order: 1;
}

.${e}-cover {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.${e}-elements-overlay {
  position: relative;
  inset: 0;
  display: flex;
  flex-direction: column;
  pointer-events: none;
}

.${e}-control {
  position: relative;
  z-index: 2;
  width: 100%;
}

.${e}-control::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 20px;
  pointer-events: auto;
  z-index: 10;
}
`}let iA=`import { useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react';
import cn from 'classnames';
import { CommonComponentProps } from '../props';
import { RichTextRenderer } from '../helpers/RichTextRenderer/RichTextRenderer';
import { scalingValue } from '../utils/scalingValue';
import { textStylesToCss, type TextStyles } from '../utils/textStylesToCss';
import { useScopedStyles } from '../utils/useScopedStyles';
import { readTestimonialTextMeasure } from '../utils/readTestimonialTextMeasure';

function getCSS(P: string): string {
  return \`
.\${P}-marquee-wrapper {
  overflow: hidden;
  width: 100%;
  height: auto;
}

@keyframes \${P}-marquee-left {
  from { transform: translate3d(0, 0, 0); }
  to { transform: translate3d(calc(-1 * var(--marquee-distance)), 0, 0); }
}

@keyframes \${P}-marquee-right {
  from { transform: translate3d(calc(-1 * var(--marquee-distance)), 0, 0); }
  to { transform: translate3d(0, 0, 0); }
}

.\${P}-marquee-track {
  display: flex;
  flex-direction: row;
  width: max-content;
  will-change: transform;
  backface-visibility: hidden;
  transform: translateZ(0);
  -webkit-backface-visibility: hidden;
  -webkit-transform: translateZ(0);
  perspective: 1000px;
  animation-duration: var(--marquee-duration);
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-play-state: var(--marquee-play-state, running);
}

.\${P}-marquee-track[data-direction="left"] {
  animation-name: \${P}-marquee-left;
}

.\${P}-marquee-track[data-direction="right"] {
  animation-name: \${P}-marquee-right;
}

.\${P}-marquee-set {
  display: flex;
  flex-direction: row;
  flex: 0 0 auto;
}

.\${P}-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  order: 1;
}

.\${P}-cover {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.\${P}-elements-overlay {
  position: relative;
  inset: 0;
  display: flex;
  flex-direction: column;
  pointer-events: none;
}

.\${P}-control {
  position: relative;
  z-index: 2;
  width: 100%;
}

.\${P}-control::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 20px;
  pointer-events: auto;
  z-index: 10;
}
\`;
}

type TestimonialsProps = {
  settings: TestimonialsSettings;
  content?: TestimonialsItem[];
  isEditor?: boolean;
  isPreviewMode?: boolean;
  isEditMode?: boolean;
} & CommonComponentProps;

const PX_PER_SEC_PER_SPEED_UNIT = 30;
const MIN_TRACK_COPIES = 2;

type RenderCardOpts = {
  textMinHeightPx?: number;
  captionMinHeightPx?: number;
  dataMeasureAttrs?: boolean;
};

type RenderTextOpts = {
  controlsName?: string;
  marginTop?: number;
  minHeightPx?: number;
  dataMeasureKind?: 'text' | 'caption';
};

export const TestimonialGrid = ({ settings, content, isEditor, isPreviewMode, isEditMode }: TestimonialsProps) => {
  const { prefix: P } = useScopedStyles();
  const { align, speed, direction, pauseOnHover, gap, cardWidth, corners, stroke, strokeColor, bgColor, padding, logoMarginTop, logoWidth, logoHeight, captionMarginTop } = settings;
  const showControls = Boolean(isEditMode);
  const hasContent = (content?.length ?? 0) > 0;
  const autoplayEnabled = speed > 0 && (!isEditor || isPreviewMode);
  const useMarqueeTrack = hasContent && (autoplayEnabled || isEditor);
  const pxPerSec = Math.max(0, speed) * PX_PER_SEC_PER_SPEED_UNIT;
  const scaled = (v: number) => scalingValue(v, isEditor ?? false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const setRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [setWidth, setSetWidth] = useState(0);
  const [trackHeight, setTrackHeight] = useState(0);
  const hoverPauseEnabled = autoplayEnabled && (pauseOnHover === 'on');
  const [isHovering, setIsHovering] = useState(false);
  const measureLayerRef = useRef<HTMLDivElement>(null);
  const [measuredTextMinPx, setMeasuredTextMinPx] = useState(0);
  const [measuredCaptionMinPx, setMeasuredCaptionMinPx] = useState(0);
  const stableCandidateRef = useRef<number | null>(null);

  const resolveTextStyle = (kind: 'text' | 'caption'): TextStyles => {
    const styles: TextStyles = {
      fontSettings: {
        fontFamily: (settings as any)?.[\`\${kind}FontFamily\`] ?? 'Arial',
        fontWeight: (settings as any)?.[\`\${kind}FontSettings\`]?.fontWeight ?? 400,
        fontStyle: (settings as any)?.[\`\${kind}FontSettings\`]?.fontStyle ?? 'normal',
      },
      textAppearance: {
        textTransform: (settings as any)?.[\`\${kind}TextAppearance\`]?.textTransform ?? 'none',
        textDecoration: (settings as any)?.[\`\${kind}TextAppearance\`]?.textDecoration ?? 'none',
        fontVariant: (settings as any)?.[\`\${kind}TextAppearance\`]?.fontVariant ?? 'normal',
      },
      letterSpacing: (settings as any)?.[\`\${kind}LetterSpacing\`] ?? 0,
      wordSpacing: (settings as any)?.[\`\${kind}WordSpacing\`] ?? 0,
      fontSize: (settings as any)?.[\`\${kind}FontSize\`] ?? 0.01,
      lineHeight: (settings as any)?.[\`\${kind}LineHeight\`] ?? 0.01,
      color: (settings as any)?.[\`\${kind}Color\`] ?? '#000000',
    };
    return styles;
  };

  const textStyle = resolveTextStyle('text');
  const captionStyle = resolveTextStyle('caption');

  const shouldMeasureTextExtents = useMemo(() =>
      (content?.length ?? 0) > 1 &&
      (content ?? []).some((item) => (item.text?.length ?? 0) > 0 || (item.caption?.length ?? 0) > 0),
    [content]
  );

  const copies = useMemo(() => {
    if (!useMarqueeTrack || content?.length === 0) return 1;
    if (setWidth <= 0 || containerWidth <= 0) return MIN_TRACK_COPIES;
    return Math.max(MIN_TRACK_COPIES, Math.ceil(containerWidth / setWidth) + 1);
  }, [useMarqueeTrack, content?.length, setWidth, containerWidth]);

  useLayoutEffect(() => {
    if (!useMarqueeTrack) return;
    const wrapper = wrapperRef.current;
    const set = setRef.current;
    if (!wrapper || !set) return;
    let raf = 0;
    const measure = () => {
      const nextContainerWidth = wrapper.getBoundingClientRect().width;
      const nextRawSetWidth = set.getBoundingClientRect().width;
      const prevCandidate = stableCandidateRef.current;
      const isStableNow = typeof prevCandidate === 'number' && Math.abs(prevCandidate - nextRawSetWidth) <= 0.25;
      stableCandidateRef.current = nextRawSetWidth;
      setContainerWidth(nextContainerWidth);
      if (typeof nextRawSetWidth === 'number' && nextRawSetWidth > 0 && setWidth <= 0) {
        setSetWidth(nextRawSetWidth);
        return;
      }
      if (isStableNow && nextRawSetWidth !== setWidth) {
        setSetWidth(nextRawSetWidth);
      } else if (!isStableNow && setWidth <= 0) {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(measure);
      }
    };
    const schedule = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    };
    schedule();
    const ro = new ResizeObserver(schedule);
    ro.observe(wrapper);
    ro.observe(set);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [autoplayEnabled, useMarqueeTrack, setWidth]);

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!useMarqueeTrack || !track) return;
    const safeSetWidth = setWidth > 0 ? setWidth : 0;
    const durationMs = safeSetWidth > 0 && pxPerSec > 0 ? (safeSetWidth / pxPerSec) * 1000 : 0;
    const durationS = \`\${Math.max(0, durationMs) / 1000}s\`;
    track.style.setProperty('--marquee-distance', \`\${safeSetWidth}px\`);
    track.style.setProperty('--marquee-duration', durationS);
  }, [autoplayEnabled, useMarqueeTrack, pxPerSec, setWidth]);

  useLayoutEffect(() => {
    if (!useMarqueeTrack) {
      setTrackHeight(0);
      return;
    }
    const set = setRef.current;
    const track = trackRef.current;
    if (!set || !track) return;
    const measure = () => {
      let next = 0;
      for (let i = 0; i < set.children.length; i++) {
        const wrapper = set.children[i] as HTMLElement;
        const card = wrapper.firstElementChild as HTMLElement | null;
        if (card) next = Math.max(next, card.offsetHeight);
      }
      if (next <= 0) {
        next = track.offsetHeight;
      }
      setTrackHeight(next > 0 ? next : 0);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(set);
    ro.observe(track);
    return () => {
      ro.disconnect();
    };
  }, [useMarqueeTrack, copies, content, isEditor, gap, cardWidth, padding, stroke, corners, logoWidth, logoHeight, measuredTextMinPx, measuredCaptionMinPx]);

  const onTrackEnter = () => {
    if (!hoverPauseEnabled) return;
    setIsHovering(true);
  };
  const onTrackLeave = () => {
    if (!hoverPauseEnabled) return;
    setIsHovering(false);
  };

  const overlayAlignItems = useMemo(() => {
    switch (align) {
      case 'center':
        return 'center' as const;
      case 'end':
        return 'flex-end' as const;
      case 'start':
      default:
        return 'flex-start' as const;
    }
  }, [align]);

  const overlayTextAlign = useMemo(() => {
    switch (align) {
      case 'center':
        return 'center' as const;
      case 'end':
        return 'right' as const;
      case 'start':
      default:
        return 'left' as const;
    }
  }, [align]);

  const renderText = useCallback(
    (style: TextStyles, richContent: any[], key: string, options?: RenderTextOpts) => (
      <div
        key={key}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: overlayAlignItems,
          width: '100%',
        }}
      >
        <div
          data-controls={showControls ? options?.controlsName : undefined}
          data-controls-axis={showControls ? 'y' : undefined}
          className={showControls ? \`\${P}-control\` : undefined}
          style={{ height: scaled(options?.marginTop ?? 0) }}
        />
        <div
          {...(options?.dataMeasureKind ? { 'data-testimonial-measure': options.dataMeasureKind } : {})}
          style={{
            ...textStylesToCss(style, isEditor),
            textAlign: overlayTextAlign,
            pointerEvents: 'auto',
            ...(typeof options?.minHeightPx === 'number' && options.minHeightPx > 0
              ? { minHeight: options.minHeightPx }
              : {}),
          }}
        >
          <RichTextRenderer content={richContent} />
        </div>
      </div>
    ),
    [overlayAlignItems, overlayTextAlign, isEditor, showControls, P, scaled]
  );

  const renderCard = useCallback(
    (item: TestimonialsItem, key: string | number, opts?: RenderCardOpts) => (
      <div
        key={key}
        style={{
          padding: \`\${scaled(padding.top)} \${scaled(padding.right)} \${scaled(padding.bottom)} \${scaled(padding.left)}\`,
          width: scaled(cardWidth + (stroke * 2)),
          height: '100%',
          borderRadius: scaled(corners),
          border: \`\${scaled(stroke)} solid \${strokeColor}\`,
          boxSizing: 'border-box',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className={\`\${P}-cover\`} style={{ background: bgColor }} />
        <div
          className={\`\${P}-elements-overlay\`}
          style={{ alignItems: overlayAlignItems, textAlign: overlayTextAlign }}
        >
          {item.text && renderText(
              textStyle,
              item.text,
              'text',
              opts?.dataMeasureAttrs
                ? { dataMeasureKind: 'text' }
                : typeof opts?.textMinHeightPx === 'number' && opts.textMinHeightPx > 0
                  ? { minHeightPx: opts.textMinHeightPx }
                  : undefined
            )}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: overlayAlignItems,
              width: '100%',
            }}
          >
            <div
            data-controls={showControls && !opts?.dataMeasureAttrs ? 'logoMarginTop' : undefined}
            className={showControls && !opts?.dataMeasureAttrs ? \`\${P}-control\` : undefined}
            style={{ height: scaled(logoMarginTop) }}
            />
            <div style={{ width: scaled(logoWidth), height: scaled(logoHeight) }}>
              {item.logo?.url && (
                <img
                  src={item.logo.url}
                  alt={item.logo?.name ?? ''}
                  style={{ pointerEvents: 'auto', width: '100%', height: '100%', objectFit: item.logo?.objectFit || 'contain' }}
                />
              )}
            </div>
          </div>
          {item.caption &&
            renderText(captionStyle, item.caption, 'caption', {
              ...(opts?.dataMeasureAttrs ? {} : { controlsName: 'captionMarginTop' }),
              marginTop: captionMarginTop,
              ...(opts?.dataMeasureAttrs
                ? { dataMeasureKind: 'caption' as const }
                : typeof opts?.captionMinHeightPx === 'number' && opts.captionMinHeightPx > 0
                  ? { minHeightPx: opts.captionMinHeightPx }
                  : {}),
            })}
        </div>
      </div>
    ),
    [
      bgColor,
      captionMarginTop,
      captionStyle,
      cardWidth,
      corners,
      logoHeight,
      logoMarginTop,
      logoWidth,
      overlayAlignItems,
      overlayTextAlign,
      padding.bottom,
      padding.left,
      padding.right,
      padding.top,
      renderText,
      stroke,
      strokeColor,
      textStyle,
      isEditor,
      showControls,
      P,
    ]
  );

  const onMeasuredExtents = useCallback((extents: { maxTextPx: number; maxCaptionPx: number }) => {
    setMeasuredTextMinPx(extents.maxTextPx);
    setMeasuredCaptionMinPx(extents.maxCaptionPx);
  }, []);

  useLayoutEffect(() => {
    if (!shouldMeasureTextExtents) {
      onMeasuredExtents({ maxTextPx: 0, maxCaptionPx: 0 });
      return;
    }
    const root = measureLayerRef.current;
    if (!root) return;
    const readExtents = () => {
      readTestimonialTextMeasure(root, onMeasuredExtents);
    };
    readExtents();
    const ro = new ResizeObserver(readExtents);
    ro.observe(root);
    return () => {
      ro.disconnect();
    };
  }, [shouldMeasureTextExtents, onMeasuredExtents, content, renderCard]);

  const visibleCardOpts: RenderCardOpts | undefined = shouldMeasureTextExtents
    ? { textMinHeightPx: measuredTextMinPx, captionMinHeightPx: measuredCaptionMinPx }
    : undefined;

  const measureLayerEl = shouldMeasureTextExtents ? (
    <div
      ref={measureLayerRef}
      aria-hidden
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        visibility: 'hidden',
        pointerEvents: 'none',
        zIndex: -1,
      }}
    >
      {(content ?? []).map((item, index) => renderCard(item, \`measure-\${index}\`, { dataMeasureAttrs: true }))}
    </div>
  ) : null;

  const renderCardWrapper = (item: TestimonialsItem, key: string | number) => (
    <div
      key={key}
      style={{
        position: 'relative',
        flex: '0 0 auto',
        height: '100%',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        willChange: 'transform',
      }}
    >
      {renderCard(item, \`card-\${key}\`, visibleCardOpts)}
      {showControls && (
        <div
          data-controls="gap"
          data-controls-axis="x"
          style={{
            position: 'absolute',
            top: 0,
            right: \`calc(-1 * \${scaled(gap)})\`,
            width: scaled(gap),
            height: '100%',
            pointerEvents: 'auto',
            zIndex: 2,
          }}
        />
      )}
    </div>
  );

  if (useMarqueeTrack) {
    const marqueePlayState = !autoplayEnabled
      ? 'paused'
      : hoverPauseEnabled
        ? (isHovering ? 'paused' : 'running')
        : 'running';

    return (
      <div
        ref={wrapperRef}
        className={cn(\`\${P}-wrapper\`, \`\${P}-marquee-wrapper\`)}
        aria-label="Testimonials"
        style={{
          overflow: 'hidden',
          width: '100%',
          ...(trackHeight > 0 ? { height: trackHeight } : {}),
        }}
      >
        <style dangerouslySetInnerHTML={{ __html: getCSS(P) }} />
        {measureLayerEl}
        <div
          ref={trackRef}
          className={\`\${P}-marquee-track\`}
          data-direction={direction}
          onMouseEnter={onTrackEnter}
          onMouseLeave={onTrackLeave}
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            width: 'max-content',
            willChange: 'transform',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'translateZ(0)',
            WebkitTransform: 'translateZ(0)',
            perspective: '1000px',
            ...( { '--marquee-play-state': marqueePlayState } as React.CSSProperties),
          }}
        >
          {Array.from({ length: copies }, (_, copyIndex) => (
            <div
              key={\`set-\${copyIndex}\`}
              ref={copyIndex === 0 ? setRef : undefined}
              className={\`\${P}-marquee-set\`}
              style={{
                display: 'flex',
                flexDirection: 'row',
                flex: '0 0 auto',
                gap: scaled(gap),
                paddingRight: scaled(gap),
              }}
              aria-hidden={copyIndex > 0}
            >
              {content?.map((item: TestimonialsItem, index: number) =>
                renderCardWrapper(item, \`\${copyIndex}-\${index}\`)
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={\`\${P}-wrapper\`}>
      <style dangerouslySetInnerHTML={{ __html: getCSS(P) }} />
      {measureLayerEl}
      <div
        style={{
          gap: scaled(gap),
          justifyContent: 'center',
          overflowX: 'auto',
          display: 'flex',
          flexDirection: 'row',
        }}
        aria-label="Testimonials"
      >
        {content?.map((item: TestimonialsItem, index: number) =>
          renderCardWrapper(item, index)
        )}
      </div>
    </div>
  );
};

export type TestimonialsItem = {
  logo?: {
    url?: string;
    name?: string;
    objectFit?: 'cover' | 'contain';
  };
  text?: any[];
  caption?: any[];
};

type Padding = {
  top: number;
  right: number;
  bottom: number;
  left: number;
};

type TestimonialsSettings = {
  speed: number;
  align: 'start' | 'center' | 'end';
  direction: 'left' | 'right';
  pauseOnHover: 'on' | 'off';
  gap: number;
  cardWidth: number;
  corners: number;
  stroke: number;
  strokeColor: string;
  bgColor: string;
  padding: Padding;
  logoMarginTop: number;
  logoWidth: number;
  logoHeight: number;
  captionMarginTop: number;
};
`,iW={fontSettings:{type:"object",scope:"common",display:{type:"font-settings"},properties:{fontWeight:{type:"number",scope:"common"},fontStyle:{type:"string",scope:"common"}}}},iH={type:"object",version:1,settings:{sizing:"auto manual",properties:{speed:{type:"number",scope:"layout",title:"Speed",display:{type:"speed-control"},min:0,max:8},direction:{type:"string",scope:"common",title:"Direction",display:{type:"direction-control"},enum:["left","right"]},pauseOnHover:{title:"Pause on hover",type:"string",scope:"common",display:{type:"toggle-cycle",enum:["on","off"]}},gap:{type:"number",scope:"layout",title:"Gap",min:0,max:200,display:{type:"range-control"}},align:{type:"string",title:"Alignment",display:{type:"align-group",direction:"horizontal"},enum:["start","center","end"]},cardWidth:{type:"number",scope:"layout",title:"width",min:0,max:400,display:{type:"numeric-input"}},corners:{type:"number",scope:"layout",title:"Corners",min:0,max:100,display:{type:"numeric-input"}},stroke:{type:"number",scope:"layout",title:"Stroke",min:0,max:10,display:{type:"numeric-input"}},strokeColor:{type:"string",scope:"common",title:"Stroke Card",display:{type:"palette-color-picker",visible:!0}},bgColor:{title:"BG card",type:"string",scope:"common",display:{type:"palette-color-picker"}},padding:{type:"object",scope:"layout",title:"Padding",display:{type:"padding-controls"}},logoMarginTop:{type:"number",scope:"layout",title:"Logo margin top",min:0,max:200,display:{type:"range-control"}},logoWidth:{type:"number",scope:"layout",title:"width",min:0,max:200,display:{type:"numeric-input"}},logoHeight:{type:"number",scope:"layout",title:"height",min:0,max:200,display:{type:"numeric-input"}},textColor:{type:"string",scope:"common",title:"Fill Text",display:{type:"palette-color-picker"}},captionColor:{type:"string",scope:"common",title:"Fill Caption",display:{type:"palette-color-picker"}},captionMarginTop:{type:"number",scope:"layout",title:"Caption margin top",min:0,max:200,display:{type:"range-control"}},captionFontFamily:{type:"string",scope:"common",title:"Font Family",display:{type:"font-family-select"}},captionFontSettings:{...iW.fontSettings,scope:"common",title:"",display:{type:"font-settings-weight"}},captionFontSize:{type:"number",scope:"layout",title:"Caption Font Size",display:{type:"font-size"}},captionLineHeight:{type:"number",scope:"layout",title:"Caption Line Height",display:{type:"line-height-input"}},captionLetterSpacing:{type:"number",scope:"layout",title:"Caption Letter Spacing",display:{type:"letter-spacing-input"}},captionWordSpacing:{type:"number",scope:"layout",title:"Caption Word Spacing",display:{type:"word-spacing-input"}},captionTextAppearance:{type:"object",scope:"layout",title:"Caption Text Appearance",display:{type:"text-appearance"}},textFontFamily:{type:"string",scope:"common",title:"Font Family",display:{type:"font-family-select"}},textFontSettings:{...iW.fontSettings,scope:"common",title:"",display:{type:"font-settings-weight"}},textFontSize:{type:"number",scope:"layout",title:"Text Font Size",display:{type:"font-size"}},textLineHeight:{type:"number",scope:"layout",title:"Text Line Height",display:{type:"line-height-input"}},textLetterSpacing:{type:"number",scope:"layout",title:"Text Letter Spacing",display:{type:"letter-spacing-input"}},textWordSpacing:{type:"number",scope:"layout",title:"Text Word Spacing",display:{type:"word-spacing-input"}},textTextAppearance:{type:"object",scope:"layout",title:"Text Text Appearance",display:{type:"text-appearance"}}},defaults:{direction:"left",pauseOnHover:"off",strokeColor:"#000000",bgColor:"rgba(255, 255, 255, 0.81)",textColor:"#000000",captionColor:"#000000",captionFontFamily:"Goudy Bookletter 1911",captionFontSettings:{fontWeight:400,fontStyle:"normal"},align:"center",captionLetterSpacing:0,captionWordSpacing:0,captionTextAppearance:{textTransform:"none",textDecoration:"none",fontVariant:"normal"},textFontFamily:"Goudy Bookletter 1911",textFontSettings:{fontWeight:400,fontStyle:"normal"},textLetterSpacing:0,textWordSpacing:0,textTextAppearance:{textTransform:"none",textDecoration:"none",fontVariant:"normal"}},layoutDefaults:{m:{speed:.55,gap:.04,cardWidth:.8,corners:.02,stroke:.001,padding:{top:.053,right:.026,bottom:.053,left:.026},logoMarginTop:.18,logoWidth:.21,logoHeight:.21,captionMarginTop:.056,textFontSize:.069,textLineHeight:.093,captionFontSize:.053,captionLineHeight:.069},t:{speed:1.64,gap:.02,cardWidth:.44,corners:.005,stroke:.001,padding:{top:.01,right:.01,bottom:.065,left:.01},logoMarginTop:.1,logoWidth:.052,logoHeight:.052,captionMarginTop:.005,textFontSize:.035,textLineHeight:.04,captionFontSize:.023,captionLineHeight:.029},d:{speed:1.64,gap:.02,cardWidth:.15,corners:.005,stroke:.001,padding:{top:.01,right:.01,bottom:.01,left:.01},logoMarginTop:.048,logoWidth:.055,logoHeight:.027,captionMarginTop:.005,textFontSize:.012,textLineHeight:.013,captionFontSize:.01,captionLineHeight:.01}},displayRules:[{if:{name:"stroke",value:0},then:{name:"properties.strokeColor.display.visible",value:!1}}],layout:["__componentName__","speed","direction","pauseOnHover","gap","cardWidth","corners","stroke","strokeColor","bgColor","padding","logoMarginTop","logoWidth","logoHeight","captionMarginTop"]},panels:[{id:"general",icon:"settings",title:"General",tooltip:"General Settings",layout:[{type:"row",items:["__componentName__"]},{type:"row",items:["align","direction"]},{type:"row",items:["speed","pauseOnHover"]},{type:"row",title:"Card",items:[{type:"group",title:"",items:["cardWidth","corners"]},{type:"group",title:"",items:["stroke","padding"]}]},{type:"row",title:"Image Container",items:["logoWidth","logoHeight"]}]},{id:"typeStyle",icon:"text-icon",title:"Type Style",tooltip:"Typography",layout:["__componentName__",{type:"group",title:"Text",items:["textFontFamily","textFontSettings",{type:"group",title:"",items:["text",{type:"row",items:["textFontSize","textLineHeight","textLetterSpacing","textWordSpacing"]},"textTextAppearance"]}]},{type:"group",title:"Caption",items:["captionFontFamily","captionFontSettings",{type:"group",title:"",items:["caption",{type:"row",items:["captionFontSize","captionLineHeight","captionLetterSpacing","captionWordSpacing"]},"captionTextAppearance"]}]}]}],paletteBookmark:{items:["bgColor","strokeColor","textColor","captionColor"],panelIds:["general","typeStyle"]},content:{type:"array",settings:{addItemFromFileExplorer:!1},items:{type:"object",properties:{logo:{type:"object",label:"Image",display:{type:"media-input"}},text:{placeholder:"Add Text...",label:"Text",display:{type:"rich-text"}},caption:{placeholder:"Add Caption...",label:"Caption",display:{type:"rich-text"}}}},default:[{logo:{objectFit:"contain",url:"https://cdn.cntrl.site/component-assets/julia.png",name:""},text:[{type:"paragraph",children:[{text:"This website is a great tool for designers and developers. The ease of creating animations here is mesmerizing. Bravo to the creators of this product!"}]}],caption:[{type:"paragraph",children:[{text:"Julia Smith,"}]},{type:"paragraph",children:[{text:"Freelance Designer"}]}]},{logo:{objectFit:"contain",url:"https://cdn.cntrl.site/component-assets/mark.png",name:""},text:[{type:"paragraph",children:[{text:"This is super cool. The on onboarding terminal style animation brings me back to what made the Internet simple and fun."}]}],caption:[{type:"paragraph",children:[{text:"Mark Travis,"}]},{type:"paragraph",children:[{text:"Architect @ United Architects"}]}]},{logo:{objectFit:"contain",url:"https://cdn.cntrl.site/component-assets/pia.png",name:""},text:[{type:"paragraph",children:[{text:"Great tool for someone who wants to quickly and easily build a site that has fancy scrolling animations. Totally addictive!"}]}],caption:[{type:"paragraph",children:[{text:"Pia,"}]},{type:"paragraph",children:[{text:"Media Buyer"}]}]}]}},i_=`import cn from 'classnames';
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { CommonComponentProps } from '../props';
import { RichTextRenderer } from '../helpers/RichTextRenderer/RichTextRenderer';
import { scalingValue } from '../utils/scalingValue';
import { SvgImage } from '../helpers/SvgImage/SvgImage';
import { useScopedStyles } from '../utils/useScopedStyles';
import { readTestimonialTextMeasure } from '../utils/readTestimonialTextMeasure';
import { textStylesToCss, type TextStyles } from '../utils/textStylesToCss';

function getCSS(P: string): string {
  return \`
.\${P}-container {
  position: relative;
  overflow-x: clip;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
}

.\${P}-wrapper {
  position: relative;
  width: 100%;
  order: 1;
  display: flex;
  flex-direction: column;
  inset: 0;
  pointer-events: none;
  box-sizing: border-box;
  height: auto;
}

.\${P}-fade-stack {
  position: relative;
  width: 100%;
}

.\${P}-fade-item-prev {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.\${P}-fade-item-current {
  position: relative;
  width: 100%;
}

@keyframes \${P}-testimonial-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes \${P}-testimonial-fade-out {
  from { opacity: 1; }
  to { opacity: 0; }
}

.\${P}-fade-in {
  animation: \${P}-testimonial-fade-in 300ms ease-in forwards;
}

.\${P}-fade-out {
  animation: \${P}-testimonial-fade-out 300ms ease-in forwards;
}

.\${P}-controls {
  position: absolute;
  inset: 0;
  pointer-events: none;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
}

.\${P}-arrow {
  pointer-events: auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  z-index: 1;
  padding: 0;
}

.\${P}-next-arrow {
  left: unset;
}

.\${P}-arrow-inner {
  all: unset;
  cursor: pointer;
  width: 100%;
  height: 100%;
  pointer-events: auto;
}

.\${P}-arrow-img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.\${P}-mirror {
  transform: translate(-50%, -50%) scaleX(-1) !important;
}

.\${P}-control {
  position: relative;
  z-index: 2;
  pointer-events: auto;
  width: 100%;
}

.\${P}-control::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: auto;
  z-index: 10;
}
.\${P}-icon {
  pointer-events: auto;
  width: 100%;
  height: 100%;
}
\`;
}

type TestimonialsProps = {
  settings: TestimonialsSettings;
  content?: TestimonialsItem[];
  isEditor?: boolean;
  isPreviewMode?: boolean;
  isEditMode?: boolean;
} & CommonComponentProps;

type RenderItemContentOpts = {
  textMinHeightPx?: number;
  captionMinHeightPx?: number;
  dataMeasureAttrs?: boolean;
  hideControls?: boolean;
};

const SLIDE_INTERVAL_BASE_MS = 3000;

export const TestimonialSingle = ({ settings, content, isEditor, isPreviewMode, isEditMode }: TestimonialsProps) => {
  const { prefix: P } = useScopedStyles();
  const items = content || [];
  const { speed, align, width, imageMarginTop, textMarginTop, captionMarginTop, imageWidth, imageHeight, controlsWidth, controlsColor, controlsHoverColor } = settings;
  const isAnimating = speed > 0 && (!isEditor || Boolean(isPreviewMode));
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [isFading, setIsFading] = useState(false);
  const fadeTimerRef = useRef<number | null>(null);

  const overlayAlignItems = useMemo(() => {
    switch (align) {
      case 'center':
        return 'center' as const;
      case 'end':
        return 'flex-end' as const;
      case 'start':
      default:
        return 'flex-start' as const;
    }
  }, [align]);

  const overlayTextAlign = useMemo(() => {
    switch (align) {
      case 'center':
        return 'center' as const;
      case 'end':
        return 'right' as const;
      case 'start':
      default:
        return 'left' as const;
    }
  }, [align]);

  useEffect(() => {
    setActiveIndex(0);
    setPrevIndex(null);
    setIsFading(false);
  }, [items.length]);

  const currentItem = items[activeIndex];
  const previousItem = prevIndex === null ? null : items[prevIndex];

  const resolveTextStyle = (kind: 'text' | 'caption'): TextStyles => {
    const styles: TextStyles = {
      fontSettings: {
        fontFamily: (settings as any)?.[\`\${kind}FontFamily\`] ?? 'Arial',
        fontWeight: (settings as any)?.[\`\${kind}FontSettings\`]?.fontWeight ?? 400,
        fontStyle: (settings as any)?.[\`\${kind}FontSettings\`]?.fontStyle ?? 'normal',
      },
      textAppearance: {
        textTransform: (settings as any)?.[\`\${kind}TextAppearance\`]?.textTransform ?? 'none',
        textDecoration: (settings as any)?.[\`\${kind}TextAppearance\`]?.textDecoration ?? 'none',
        fontVariant: (settings as any)?.[\`\${kind}TextAppearance\`]?.fontVariant ?? 'normal',
      },
      fontSize: (settings as any)?.[\`\${kind}FontSize\`] ?? 0.01,
      lineHeight: (settings as any)?.[\`\${kind}LineHeight\`] ?? 0.01,
      letterSpacing: (settings as any)?.[\`\${kind}LetterSpacing\`] ?? 0,
      wordSpacing: (settings as any)?.[\`\${kind}WordSpacing\`] ?? 0,
      color: (settings as any)?.[\`\${kind}Color\`] ?? '#000000',
    };
    return styles;
  };

  const textStyle = resolveTextStyle('text');
  const captionStyle = resolveTextStyle('caption');
  const shouldMeasureTextExtents =
    items.length > 1 && items.some((item) => (item.text?.length ?? 0) > 0 || (item.caption?.length ?? 0) > 0);
  const measureLayerRef = useRef<HTMLDivElement>(null);
  const [measuredTextMinPx, setMeasuredTextMinPx] = useState(0);
  const [measuredCaptionMinPx, setMeasuredCaptionMinPx] = useState(0);
  const controls: TestimonialsSettings['controls'] = settings.controls ?? { mode: 'Off', icon: null };
  const canSwitch = items.length > 1;

  const commitTransition = useCallback((currentIndex: number, nextIndex: number) => {
    if (!canSwitch) return currentIndex;
    if (nextIndex === currentIndex) return currentIndex;
    if (fadeTimerRef.current) window.clearTimeout(fadeTimerRef.current);
    setPrevIndex(currentIndex);
    setIsFading(true);
    fadeTimerRef.current = window.setTimeout(() => {
      setPrevIndex(null);
      setIsFading(false);
      fadeTimerRef.current = null;
    }, 300);
    return nextIndex;
  }, [canSwitch]);

  const goPrev = useCallback(() => {
    if (!canSwitch) return;
    setActiveIndex((currentIndex) => commitTransition(currentIndex, (currentIndex - 1 + items.length) % items.length));
  }, [canSwitch, commitTransition, items.length]);

  const goNext = useCallback(() => {
    if (!canSwitch) return;
    setActiveIndex((currentIndex) => commitTransition(currentIndex, (currentIndex + 1) % items.length));
  }, [canSwitch, commitTransition, items.length]);

  useEffect(() => {
    if (!isAnimating || !canSwitch) return;
    const slideIntervalMs = Math.max(300, SLIDE_INTERVAL_BASE_MS / speed);
    const id = window.setInterval(() => {
      setActiveIndex((currentIndex) => commitTransition(currentIndex, (currentIndex + 1) % items.length));
    }, slideIntervalMs);
    return () => {
      window.clearInterval(id);
    };
  }, [isAnimating, canSwitch, commitTransition, items.length, speed]);

  useEffect(() => {
    return () => {
      if (fadeTimerRef.current) window.clearTimeout(fadeTimerRef.current);
    };
  }, []);

  const renderItemContent = (item: TestimonialsItem, opts?: RenderItemContentOpts) => {
    const textMinHeightPx = opts?.textMinHeightPx;
    const captionMinHeightPx = opts?.captionMinHeightPx;
    const dataMeasureAttrs = opts?.dataMeasureAttrs;
    const showMarginControls = isEditMode && !opts?.dataMeasureAttrs && !opts?.hideControls;

    return (
      <>
        {item.text && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: overlayAlignItems, width: '100%' }}>
            <div
              data-controls={showMarginControls ? 'textMarginTop' : undefined}
              className={showMarginControls ? \`\${P}-control\` : undefined}
              style={{ height: scalingValue(textMarginTop ?? 0, isEditor ?? false) }}
            />
            <div
              {...(dataMeasureAttrs && { 'data-testimonial-measure': 'text' as const })}
              style={{
                ...textStylesToCss(textStyle, isEditor),
                ...(textMinHeightPx && textMinHeightPx > 0 ? { minHeight: textMinHeightPx } : {}),
                textAlign: overlayTextAlign,
                pointerEvents: 'auto',
              }}
            >
              <RichTextRenderer content={item.text} />
            </div>
          </div>
        )}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: overlayAlignItems, width: '100%' }}>
          <div
            data-controls={showMarginControls ? 'imageMarginTop' : undefined}
            className={showMarginControls ? \`\${P}-control\` : undefined}
            style={{ height: scalingValue(imageMarginTop ?? 0, isEditor ?? false) }}
          />
          <div style={{ width: scalingValue(imageWidth ?? 0, isEditor ?? false), height: scalingValue(imageHeight ?? 0, isEditor ?? false)}}>
            {item.image?.url && 
              <img
                src={item.image?.url}
                alt={item.image?.name ?? ''}
                className={\`\${P}-icon\`}
                style={{ objectFit: item.image?.objectFit || 'contain' }}
              />
            }
          </div>
        </div>
        {item.caption && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: overlayAlignItems, width: '100%' }}>
            <div
              data-controls={showMarginControls ? 'captionMarginTop' : undefined}
              className={showMarginControls ? \`\${P}-control\` : undefined}
              style={{ height: scalingValue(captionMarginTop ?? 0, isEditor ?? false) }}
            />
            <div
              {...(dataMeasureAttrs ? { 'data-testimonial-measure': 'caption' as const } : {})}
              style={{
                ...textStylesToCss(captionStyle, isEditor),
                ...(captionMinHeightPx && captionMinHeightPx > 0 ? { minHeight: captionMinHeightPx } : {}),
                textAlign: overlayTextAlign,
                pointerEvents: 'auto',
              }}
            >
              <RichTextRenderer content={item.caption} />
            </div>
          </div>
        )}
      </>
    );
  };

  const onMeasuredExtents = useCallback((extents: { maxTextPx: number; maxCaptionPx: number }) => {
    setMeasuredTextMinPx(extents.maxTextPx);
    setMeasuredCaptionMinPx(extents.maxCaptionPx);
  }, []);

  useLayoutEffect(() => {
    if (!shouldMeasureTextExtents) {
      onMeasuredExtents({ maxTextPx: 0, maxCaptionPx: 0 });
      return;
    }
    const root = measureLayerRef.current;
    if (!root) return;
    const readExtents = () => {
      readTestimonialTextMeasure(root, onMeasuredExtents);
    };
    readExtents();
    const ro = new ResizeObserver(readExtents);
    ro.observe(root);
    return () => {
      ro.disconnect();
    };
  }, [shouldMeasureTextExtents, onMeasuredExtents, content]);

  if (!currentItem) return <></>;

  const visibleContentOpts: RenderItemContentOpts | undefined = shouldMeasureTextExtents
    ? { textMinHeightPx: measuredTextMinPx, captionMinHeightPx: measuredCaptionMinPx }
    : undefined;

  return (
    <>
      <div className={\`\${P}-container\`}>
        <style dangerouslySetInnerHTML={{ __html: getCSS(P) }} />
        <div
          className={\`\${P}-wrapper\`}
          style={{ width: scalingValue(width ?? 0, isEditor ?? false), alignItems: overlayAlignItems }}
        >
          {shouldMeasureTextExtents && (
            <div
              ref={measureLayerRef}
              aria-hidden
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: '100%',
                height: '100%',
                visibility: 'hidden',
                pointerEvents: 'none',
                zIndex: -1,
              }}
            >
              {items.map((item, index) => (
                <div key={index} style={{ width: '100%' }}>
                  {renderItemContent(item, { dataMeasureAttrs: true })}
                </div>
              ))}
            </div>
          )}
          <div className={\`\${P}-fade-stack\`}>
            {previousItem && isFading && (
              <div className={cn(\`\${P}-fade-item-prev\`, \`\${P}-fade-out\`)}>
                {renderItemContent(previousItem, { ...visibleContentOpts, hideControls: true })}
              </div>
            )}
            <div className={cn(\`\${P}-fade-item-current\`, isFading ? \`\${P}-fade-in\` : undefined)}>
              {renderItemContent(currentItem, visibleContentOpts)}
            </div>
          </div>
        </div>
        {controls.mode === 'On' && (
          <div className={\`\${P}-controls\`}>
            <div
              className={\`\${P}-arrow\`}
              style={{
                width: scalingValue(controlsWidth ?? 0.02, isEditor ?? false),
                height: scalingValue(controlsWidth ?? 0.02, isEditor ?? false),
                ['--arrow-hover-color' as string]: controlsHoverColor,
              }}
            >
              <button
                type="button"
                className={\`\${P}-arrow-inner\`}
                onClick={goPrev}
                disabled={!canSwitch}
                aria-label="Previous testimonial"
              >
                {controls.icon  && (
                  <SvgImage
                    url={controls.icon }
                    fill={controlsColor}
                    hoverFill={controlsHoverColor}
                    className={cn(\`\${P}-arrow-img\`, \`\${P}-mirror\`)}
                  />
                )}
              </button>
            </div>
            <div
              className={cn(\`\${P}-arrow\`, \`\${P}-next-arrow\`)}
              style={{
                width: scalingValue(controlsWidth ?? 0.02, isEditor ?? false),
                height: scalingValue(controlsWidth ?? 0.02, isEditor ?? false),
                ['--arrow-hover-color' as string]: controlsHoverColor,
              }}
            >
              <button
                type="button"
                className={\`\${P}-arrow-inner\`}
                onClick={goNext}
                disabled={!canSwitch}
                aria-label="Next testimonial"
              >
                {controls.icon && (
                  <SvgImage
                    url={controls.icon }
                    fill={controlsColor}
                    hoverFill={controlsHoverColor}
                    className={\`\${P}-arrow-img\`}
                  />
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};


export type TestimonialsItem = {
  image?: {
    url?: string;
    name?: string;
    objectFit?: 'cover' | 'contain';
  };
  text?: any[];
  caption?: any[];
};

type TestimonialsSettings = {
  speed: number;
  align: 'start' | 'center' | 'end';
  width: number;
  imageMarginTop?: number;
  imageWidth?: number;
  imageHeight?: number;
  textMarginTop?: number;
  captionMarginTop?: number;
  controlsColor: string;
  controlsHoverColor: string;
  controlsWidth?: number;
  controls: {
    mode?: 'On' | 'Off';
    icon?: string | null;
  };
};
`,iN="data:image/svg+xml,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 18" width="10" height="18"><path fill="#000000" fill-rule="evenodd" d="M-3.70710678,4.29289322 C-3.34662282,3.93240926 -2.77939176,3.90467972 -2.38710056,4.20970461 L-2.29289322,4.29289322 L5,11.585 L12.2928932,4.29289322 C12.6533772,3.93240926 13.2206082,3.90467972 13.6128994,4.20970461 L13.7071068,4.29289322 C14.0675907,4.65337718 14.0953203,5.22060824 13.7902954,5.61289944 L13.7071068,5.70710678 L5.70710678,13.7071068 C5.34662282,14.0675907 4.77939176,14.0953203 4.38710056,13.7902954 L4.29289322,13.7071068 L-3.70710678,5.70710678 C-4.09763107,5.31658249 -4.09763107,4.68341751 -3.70710678,4.29289322 Z" transform="translate(5, 9) rotate(-90) translate(-5, -9)"/></svg>'),ij={fontSettings:{type:"object",scope:"common",display:{type:"font-settings"},properties:{fontWeight:{type:"number",scope:"common"},fontStyle:{type:"string",scope:"common"}}}},iz={type:"object",version:1,settings:{sizing:"auto manual",properties:{speed:{type:"number",scope:"layout",title:"Speed",display:{type:"speed-control"},min:0,max:8},align:{type:"string",scope:"common",title:"Alignment",display:{type:"align-group",direction:"horizontal"},enum:["start","center","end"]},width:{type:"number",scope:"layout",title:"width",min:0,max:1e3,display:{type:"numeric-input"}},imageWidth:{type:"number",scope:"layout",title:"width",min:0,max:300,display:{type:"numeric-input"}},imageHeight:{type:"number",scope:"layout",title:"height",min:0,max:300,display:{type:"numeric-input"}},imageMarginTop:{type:"number",scope:"layout",title:"Image margin top",min:0,max:200,display:{type:"range-control"}},textMarginTop:{type:"number",scope:"layout",title:"Text margin top",min:0,max:200,display:{type:"range-control"}},controls:{type:"object",scope:"common",title:"Controls",display:{type:"button-icon-switch"},properties:{mode:{type:"string",enum:["On","Off"]},icon:{type:["string","null"],title:"Icon",display:{type:"settings-image-input"}}}},controlsWidth:{type:"number",scope:"layout",title:"Controls width",min:0,max:100,display:{type:"numeric-input"}},controlsColor:{type:"string",scope:"common",title:"Fill Controls",display:{type:"settings-color-picker"}},controlsHoverColor:{type:"string",scope:"common",title:"Hover Controls",display:{type:"settings-color-picker"}},captionMarginTop:{type:"number",scope:"layout",title:"Caption margin top",min:0,max:200,display:{type:"range-control"}},captionFontFamily:{type:"string",scope:"common",title:"Font Family",display:{type:"font-family-select"}},captionFontSettings:{...ij.fontSettings,scope:"common",title:"",display:{type:"font-settings-weight"}},captionFontSize:{type:"number",scope:"layout",title:"Caption Font Size",display:{type:"font-size"}},captionLineHeight:{type:"number",scope:"layout",title:"Caption Line Height",display:{type:"line-height-input"}},captionLetterSpacing:{type:"number",scope:"layout",title:"Caption Letter Spacing",display:{type:"letter-spacing-input"}},captionWordSpacing:{type:"number",scope:"layout",title:"Caption Word Spacing",display:{type:"word-spacing-input"}},captionTextAppearance:{type:"object",scope:"layout",title:"Caption Text Appearance",display:{type:"text-appearance"}},captionColor:{display:{type:"style-panel-color-picker"},type:"string",scope:"common",title:"Fill Caption"},textFontFamily:{type:"string",scope:"common",title:"Font Family",display:{type:"font-family-select"}},textFontSettings:{...ij.fontSettings,scope:"common",title:"",display:{type:"font-settings-weight"}},textFontSize:{type:"number",scope:"layout",title:"Text Font Size",display:{type:"font-size"}},textLineHeight:{type:"number",scope:"layout",title:"Text Line Height",display:{type:"line-height-input"}},textLetterSpacing:{type:"number",scope:"layout",title:"Text Letter Spacing",display:{type:"letter-spacing-input"}},textWordSpacing:{type:"number",scope:"layout",title:"Text Word Spacing",display:{type:"word-spacing-input"}},textTextAppearance:{type:"object",scope:"layout",title:"Text Text Appearance",display:{type:"text-appearance"}},textColor:{display:{type:"style-panel-color-picker"},type:"string",scope:"common",title:"Fill Text"}},defaults:{controls:{mode:"On",icon:iN},controlsColor:"#000000",controlsHoverColor:"#EABC01",align:"center",textFontFamily:"Goudy Bookletter 1911",textFontSettings:{fontWeight:400,fontStyle:"normal"},textLetterSpacing:0,textWordSpacing:0,textTextAppearance:{textTransform:"none",textDecoration:"none",fontVariant:"normal"},textColor:"#000000",captionFontFamily:"Goudy Bookletter 1911",captionFontSettings:{fontWeight:400,fontStyle:"normal"},captionLetterSpacing:0,captionWordSpacing:0,captionTextAppearance:{textTransform:"none",textDecoration:"none",fontVariant:"normal"},captionColor:"#000000"},layoutDefaults:{m:{speed:1,width:.69,imageMarginTop:.08,captionMarginTop:.04,textMarginTop:0,textFontSize:.069,captionFontSize:.053,textLineHeight:.093,captionLineHeight:.069,imageWidth:.21,imageHeight:.21,controlsWidth:.06},t:{speed:1,width:.65,imageMarginTop:.026,captionMarginTop:.01,textMarginTop:0,textFontSize:.035,captionFontSize:.023,textLineHeight:.04,captionLineHeight:.029,imageWidth:.05,imageHeight:.05,controlsWidth:.026},d:{speed:1,width:.35,imageMarginTop:.02,textMarginTop:0,captionMarginTop:.01,textFontSize:.016,captionFontSize:.009,textLineHeight:.018,captionLineHeight:.009,imageWidth:.027,imageHeight:.027,controlsWidth:.014}},layout:["__componentName__","speed","width","imageMarginTop","textMarginTop","captionMarginTop"]},panels:[{id:"general",icon:"settings",title:"General",tooltip:"General Settings",layout:[{type:"row",items:["__componentName__"]},{type:"row",items:["width","align"]},{type:"row",items:["controls"]},{type:"row",items:["controlsWidth","speed"]},{type:"row",title:"Image Container",items:["imageWidth","imageHeight"]}]},{id:"typeStyle",icon:"text-icon",title:"Type Style",tooltip:"Typography",layout:["__componentName__",{type:"group",title:"Text",items:["textFontFamily","textFontSettings",{type:"group",title:"",items:["text",{type:"row",items:["textFontSize","textLineHeight","textLetterSpacing","textWordSpacing"]},"textTextAppearance"]}]},{type:"group",title:"Caption",items:["captionFontFamily","captionFontSettings",{type:"group",title:"",items:["caption",{type:"row",items:["captionFontSize","captionLineHeight","captionLetterSpacing","captionWordSpacing"]},"captionTextAppearance"]}]}]}],paletteBookmark:{items:["textColor","captionColor","controlsColor","controlsHoverColor"],panelIds:["general","typeStyle"]},content:{type:"array",settings:{addItemFromFileExplorer:!1},items:{type:"object",properties:{image:{type:"object",label:"Image",display:{type:"media-input"}},text:{placeholder:"Add Text...",label:"Text",display:{type:"rich-text"}},caption:{placeholder:"Add Caption...",label:"Caption",display:{type:"rich-text"}}}},default:[{image:{objectFit:"contain",url:"https://cdn.cntrl.site/component-assets/julia.png",name:""},text:[{type:"paragraph",children:[{text:"This website is a great tool for designers and developers. The ease of creating animations here is mesmerizing. Bravo to the creators of this product!"}]}],caption:[{type:"paragraph",children:[{text:"Julia Smith,"}]},{type:"paragraph",children:[{text:"Freelance Designer"}]}]},{image:{objectFit:"contain",url:"https://cdn.cntrl.site/component-assets/mark.png",name:""},text:[{type:"paragraph",children:[{text:"This is super cool. The on onboarding terminal style animation brings me back to what made the Internet simple and fun."}]}],caption:[{type:"paragraph",children:[{text:"Mark Travis,"}]},{type:"paragraph",children:[{text:"Architect @ United Architects"}]}]},{image:{objectFit:"contain",url:"https://cdn.cntrl.site/component-assets/pia.png",name:""},text:[{type:"paragraph",children:[{text:"Great tool for someone who wants to quickly and easily build a site that has fancy scrolling animations. Totally addictive!"}]}],caption:[{type:"paragraph",children:[{text:"Pia,"}]},{type:"paragraph",children:[{text:"Media Buyer"}]}]}]}};function iB(e){return((null==e?void 0:e.trim().length)??0)>0}function iO(e,t,i,n){return void 0!==t&&t<(e??.01)?`${i} ${n}`:i}function iD(e,t,i,n){let o=e??.01;return void 0===t||t>=o?{}:{[`--${i}-title-leading-gap`]:a.scalingValue((o-t)/2,n)}}let iV="cubic-bezier(0.22, 1, 0.36, 1)";function iq(e){return"video"===e.type}function iG({media:e,className:t,style:i,onMediaClick:o}){return iq(e)?n.jsx("video",{src:e.url,className:t,style:{...i,cursor:o?"pointer":"default"},muted:!0,autoPlay:!0,loop:!0,playsInline:!0,onClick:o}):n.jsx("img",{src:e.url,alt:e.name,className:t,style:{...i,cursor:o?"pointer":"default"},onClick:o})}function iK(e){let t=e.getBoundingClientRect();return{width:t.width,height:t.height,left:t.left,top:t.top}}function iU({src:e,phase:t,mediaRef:i,mediaStyle:r,onLoadedMetadata:a,onClick:l,onMouseMove:s,onTransitionEnd:c}){return o.useEffect(()=>{let e=i.current;if(e)return()=>{e.pause(),e.removeAttribute("src"),e.load()}},[e,i]),n.jsx("video",{ref:i,src:e,controls:"open"===t,playsInline:!0,preload:"auto",onLoadedMetadata:a,onClick:l,onMouseMove:s,onTransitionEnd:c,style:r})}function iX({items:e,index:t,imageDisplay:i,onClose:r,onPrev:a,onNext:l,counterClassName:s,counterStyle:c}){let d="cover"===i,u=o.useRef(null),p=o.useRef(null),m=o.useRef(null),g=o.useRef(null),h=o.useRef(0),f=o.useRef(0),y=o.useRef("none"),v=o.useRef(!1),x=o.useRef(!1),b=o.useRef(!1),w=o.useRef(null),[$,S]=o.useState(null),[C,P]=o.useState("opening"),[L,T]=o.useState(0),[M,E]=o.useState(0),[I,k]=o.useState(!1),[R,F]=o.useState(!1),[A,W]=o.useState(!1),H=o.useRef(t),_=e[t],N=!!_&&iq(_),j=0!==M||I,z=o.useCallback(e=>{b.current=e,k(e)},[]),B=o.useCallback(()=>{null!==w.current&&(window.clearTimeout(w.current),w.current=null)},[]),O=o.useCallback(()=>{B(),w.current=window.setTimeout(()=>{B(),z(!1)},532)},[B,z]),D=o.useCallback(()=>{let e=p.current,t=m.current;if(!e)return;let n=e.getBoundingClientRect(),o=n.width,r=n.height;if(!o||!r)return;if("cover"===i)return void S({width:o,height:r,left:n.left,top:n.top});if(!t)return void S(iK(e));let{width:a,height:l}=t instanceof HTMLVideoElement?{width:t.videoWidth,height:t.videoHeight}:{width:t.naturalWidth,height:t.naturalHeight};if(!a||!l)return void S(iK(e));let s=a/l;if(s>o/r){let e=o/s;S({width:o,height:e,left:n.left,top:n.top+(r-e)/2})}else{let e=r*s;S({width:e,height:r,left:n.left+(o-e)/2,top:n.top})}},[i]);o.useEffect(()=>{D();let e=p.current;if(!e)return;let t=new ResizeObserver(()=>D());return t.observe(e),()=>t.disconnect()},[D,t]),o.useEffect(()=>{"opening"===C&&$&&P("open")},[C,$]),o.useEffect(()=>{if("closing"!==C)return;let e=setTimeout(()=>r(),500);return()=>clearTimeout(e)},[C,r]),o.useEffect(()=>()=>{B()},[B]),o.useLayoutEffect(()=>{if(H.current===t)return;B(),T(0),E(0),z(!1),W(!1),F(!1),h.current=0,f.current=0,y.current="none",v.current=!1,g.current=null,x.current=!1;let e=p.current;e&&S(iK(e)),H.current=t},[t,z,B]),o.useEffect(()=>{if("open"!==C)return;let t=()=>{let e=t=>{t.stopPropagation(),t.preventDefault(),document.removeEventListener("click",e,!0)};document.addEventListener("click",e,!0)},i=t=>{if(Math.abs(t)>50&&e.length>1)return void(e=>{B(),b.current=!1,k(!1),E(0),F(!1),v.current=!1,f.current=0,y.current="none";let t=p.current;t&&S(iK(t)),e<0?l():a()})(t);z(!0),E(0),O()},n=e=>{if(1!==e.touches.length||b.current)return;let t=e.touches[0];x.current=!0,g.current={x:t.clientX,y:t.clientY},y.current="none",f.current=0,v.current=!1},o=t=>{if(!g.current||1!==t.touches.length||b.current)return;let i=t.touches[0],n=i.clientX-g.current.x,o=i.clientY-g.current.y;if("none"===y.current){if(10>Math.abs(n)&&10>Math.abs(o))return;if(Math.abs(n)>Math.abs(o)){if(e.length<=1)return;y.current="horizontal"}else{if(!(o>0))return;y.current="vertical"}}if("horizontal"===y.current){v.current=!0,F(!0),f.current=n,E(n),t.preventDefault();return}"vertical"===y.current&&(v.current=!0,F(!0),h.current=o,T(o),t.preventDefault())},r=()=>{if(!g.current)return;let e=y.current,n=v.current;if(n&&"horizontal"===e)i(f.current),t();else if(n&&"vertical"===e){if(h.current>72){let e=window.innerHeight;h.current=e,W(!0),T(e),P("closing")}else h.current=0,T(0);t()}else"horizontal"===e&&Math.abs(f.current)>0&&(i(f.current),t());g.current=null,y.current="none",f.current=0,v.current=!1,F(!1)};return document.addEventListener("touchstart",n,{passive:!0}),document.addEventListener("touchmove",o,{passive:!1}),document.addEventListener("touchend",r),document.addEventListener("touchcancel",r),()=>{document.removeEventListener("touchstart",n),document.removeEventListener("touchmove",o),document.removeEventListener("touchend",r),document.removeEventListener("touchcancel",r)}},[C,e.length,l,a,z,O]),o.useEffect(()=>{let e=e=>{"Escape"===e.key&&(e.preventDefault(),e.stopPropagation(),"closing"!==C&&P("closing"))};return window.addEventListener("keydown",e,!0),()=>window.removeEventListener("keydown",e,!0)},[C]);let V="open"===C,q="closing"===C,G=L>0?Math.max(0,1-L/500):1,K=L>0?Math.max(.35,1-L/500):1,U=o.useCallback(e=>{"transform"===e.propertyName&&b.current&&(B(),z(!1))},[B,z]),X=j?`translateX(${M}px)`:L>0?`translateY(${L}px)`:void 0,Y={position:"fixed",top:null==$?void 0:$.top,left:null==$?void 0:$.left,width:null==$?void 0:$.width,height:null==$?void 0:$.height,objectFit:"cover"===i?"cover":"contain",transform:X,opacity:L>0?K:"opening"===C||q?0:1,transition:R&&!I?"none":I?`transform 500ms ${iV}`:A?`transform 500ms ${iV}, opacity 500ms ${iV}`:"opening"===C||q?`opacity 500ms ${iV}`:"none",pointerEvents:N&&V&&!j?"auto":"none",touchAction:N&&V?"none":void 0,zIndex:9998},J=$?{position:"fixed",top:$.top,height:$.height,width:$.width/2,zIndex:9999}:null;return n.jsxs("div",{ref:u,style:{position:"fixed",top:"var(--cntrl-article-top, 0)",left:"var(--cntrl-article-left, 0)",width:"var(--cntrl-article-width, 100vw) !important",height:"var(--cntrl-viewport-height, 100vh) !important",zIndex:9997,touchAction:"open"===C?"none":void 0},onClick:()=>{"closing"!==C&&P("closing")},children:[n.jsx("div",{style:{position:"absolute",inset:0,background:"rgba(28,31,34,0.9)",opacity:V?G:0,transition:R?"none":`opacity 500ms ${iV}`,pointerEvents:"none"}}),n.jsx("div",{style:{position:"relative",width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:d?n.jsxs(n.Fragment,{children:[n.jsx("div",{ref:p,style:{position:"absolute",inset:0}}),n.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",height:"10%",opacity:+!!V,transition:`opacity 500ms ${iV}`,pointerEvents:"none",zIndex:9999},children:e.length>1&&n.jsxs("p",{className:s,style:c,children:[t+1," / ",e.length]})})]}):n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{height:"10%"}}),n.jsx("div",{style:{width:"70%",height:"80%",display:"flex",justifyContent:"center",alignItems:"center"},children:n.jsx("div",{ref:p,style:{width:"100%",height:"100%"}})}),n.jsx("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",height:"10%",opacity:+!!V,transition:`opacity 500ms ${iV}`},children:e.length>1&&n.jsxs("p",{className:s,style:c,children:[t+1," / ",e.length]})})]})}),$&&_&&(N?n.jsx(iU,{src:_.url,phase:C,mediaRef:m,mediaStyle:Y,onLoadedMetadata:D,onClick:t=>{if(t.stopPropagation(),x.current){x.current=!1;return}if(e.length<=1)return;let i=t.currentTarget.getBoundingClientRect(),n=t.clientY-i.top,o=Math.min(52,.2*i.height);if(!(n>i.height-o)){if(t.clientX-i.left<i.width/2)return void a();l()}},onMouseMove:t=>{if(e.length<=1)return;let i=t.currentTarget.getBoundingClientRect(),n=t.clientX-i.left,o=t.clientY-i.top,r=Math.min(52,.2*i.height);if(o>i.height-r){t.currentTarget.style.cursor="default";return}t.currentTarget.style.cursor=n<i.width/2?"w-resize":"e-resize"},onTransitionEnd:U},`${t}-${_.url}`):n.jsx("img",{ref:m,src:_.url,alt:_.name,onLoad:D,onTransitionEnd:U,style:Y},`${t}-${_.url}`)),V&&J&&e.length>1&&!N&&n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{...J,left:$.left,cursor:"w-resize",pointerEvents:j?"none":"auto"},onClick:e=>{if(x.current){x.current=!1;return}e.stopPropagation(),a()}}),n.jsx("div",{style:{...J,left:$.left+$.width/2,cursor:"e-resize",pointerEvents:j?"none":"auto"},onClick:e=>{if(x.current){x.current=!1;return}e.stopPropagation(),l()}})]})]})}let iY={titleColor:"title-color",subtitleColor:"subtitle-color",lightboxCounterColor:"lightbox-counter-color"},iJ=["hover","focus","filled","success","error"],iZ=`import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import { CommonComponentProps } from '../props';
import {
  buildColorVars,
  getFormFieldValidationError,
  scalingValue,
  useScopedStyles,
} from '../utils/index';
import { useCallback, useEffect, useLayoutEffect, useRef, useState, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { omitTextColors, TextStyles, textStylesToCss } from '../utils/textStylesToCss';

function sv(px: number): string {
  return \`calc(var(--cntrl-article-width, 100vw) * \${px / 1440})\`;
}

function hasText(value: string | undefined): boolean {
  return (value?.trim().length ?? 0) > 0;
}

function getGridTextClassName(
  fontSize: number | undefined,
  lineHeight: number | undefined,
  baseClassName: string,
  tightLeadingClassName: string,
): string {
  const resolvedFontSize = fontSize ?? 0.01;
  const needsTightLeading = lineHeight !== undefined && lineHeight < resolvedFontSize;

  return needsTightLeading
    ? \`\${baseClassName} \${tightLeadingClassName}\`
    : baseClassName;
}

function getGridTextLeadingVars(
  fontSize: number | undefined,
  lineHeight: number | undefined,
  varPrefix: string,
  isEditor?: boolean,
): React.CSSProperties {
  const resolvedFontSize = fontSize ?? 0.01;

  if (lineHeight === undefined || lineHeight >= resolvedFontSize) {
    return {};
  }

  return {
    [\`--\${varPrefix}-title-leading-gap\`]: scalingValue((resolvedFontSize - lineHeight) / 2, isEditor),
  } as React.CSSProperties;
}

function getCSS(P: string): string {
  return \`
.\${P}-wrapper {
  display: grid;
  align-items: start;
  justify-content: center;
  min-height: \${sv(48)};
}
.\${P}-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.\${P}-item-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  outline: 1px solid #FF5C02;
}
.\${P}-item-inner-hidden {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.\${P}-item-image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
}
.\${P}-item-image-wrapper-fit-slider {
  display: grid;
}
.\${P}-item-image-wrapper-fit-slider > .\${P}-item-image-wrapper-sizer,
.\${P}-item-image-wrapper-fit-slider > .\${P}-item-slider {
  grid-area: 1 / 1;
  width: 100%;
}
.\${P}-item-image-wrapper-fit-slider > .\${P}-item-image-wrapper-sizer {
  display: grid;
  visibility: hidden;
  pointer-events: none;
}
.\${P}-item-image-wrapper-fit-slider > .\${P}-item-image-wrapper-sizer img {
  grid-area: 1 / 1;
  width: auto;
  height: auto;
  max-width: 100%;
  object-fit: contain;
}
.\${P}-item-image-wrapper-fit-slider > .\${P}-item-image-wrapper-sizer video {
  grid-area: 1 / 1;
  width: auto;
  height: auto;
  max-width: 100%;
  object-fit: contain;
}
.\${P}-item-image-wrapper-fit-slider > .\${P}-item-slider {
  align-self: stretch;
  min-height: 0;
}
.\${P}-item-image-link {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.\${P}-item-text-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: inherit;
  text-decoration: none;
}
.\${P}-item-image {
  width: 100%;
  height: 100%;
  display: block;
  max-width: 100%;
}
.\${P}-item-video {
  width: 100%;
  height: 100%;
  display: block;
  max-width: 100%;
}
.\${P}-item-slider,
.\${P}-item-slider .splide__track,
.\${P}-item-slider .splide__list,
.\${P}-item-slider .splide__slide {
  width: 100%;
  height: 100%;
}
.\${P}-item-slider .splide__slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
.\${P}-item-title {
  white-space: normal;
  overflow-wrap: anywhere;
  word-break: break-word;
  text-align: center;
  margin-bottom: 0px;
  margin-top: 0px;
  color: var(--\${P}-title-color);
}
.\${P}-item-subtitle {
  white-space: normal;
  overflow-wrap: anywhere;
  word-break: break-word;
  text-align: center;
  margin-bottom: 0px;
  margin-top: 0px;
  color: var(--\${P}-subtitle-color);
}
.\${P}-text-tight-leading {
  display: block;
  flex-shrink: 0;
  padding-top: var(--\${P}-title-leading-gap, 0);
  padding-bottom: var(--\${P}-title-leading-gap, 0);
}
.\${P}-show-text-hover .\${P}-item-title,
.\${P}-show-text-hover .\${P}-item-subtitle {
  opacity: 0;
  transition: opacity 250ms;
}
.\${P}-show-text-hover .\${P}-item-inner:hover .\${P}-item-title,
.\${P}-show-text-hover .\${P}-item-inner:hover .\${P}-item-subtitle,
.\${P}-show-text-hover .\${P}-item-inner-hidden:hover .\${P}-item-title,
.\${P}-show-text-hover .\${P}-item-inner-hidden:hover .\${P}-item-subtitle {
  opacity: 1;
}
.\${P}-type-a .\${P}-item-inner,
.\${P}-type-a .\${P}-item-inner-hidden,
.\${P}-type-d .\${P}-item-inner,
.\${P}-type-d .\${P}-item-inner-hidden {
  align-items: flex-start;
}
.\${P}-type-b .\${P}-item-inner,
.\${P}-type-b .\${P}-item-inner-hidden,
.\${P}-type-e .\${P}-item-inner,
.\${P}-type-e .\${P}-item-inner-hidden {
  align-items: center;
}
.\${P}-type-c .\${P}-item-inner,
.\${P}-type-c .\${P}-item-inner-hidden,
.\${P}-type-f .\${P}-item-inner,
.\${P}-type-f .\${P}-item-inner-hidden {
  align-items: flex-end;
}
.\${P}-type-a .\${P}-item-image-link,
.\${P}-type-b .\${P}-item-image-link,
.\${P}-type-c .\${P}-item-image-link,
.\${P}-type-d .\${P}-item-image-link,
.\${P}-type-e .\${P}-item-image-link,
.\${P}-type-f .\${P}-item-image-link {
  align-items: center;
}
.\${P}-type-a .\${P}-item-title,
.\${P}-type-a .\${P}-item-subtitle,
.\${P}-type-d .\${P}-item-title,
.\${P}-type-d .\${P}-item-subtitle {
  text-align: left;
}
.\${P}-type-b .\${P}-item-title,
.\${P}-type-b .\${P}-item-subtitle,
.\${P}-type-e .\${P}-item-title,
.\${P}-type-e .\${P}-item-subtitle {
  text-align: center;
}
.\${P}-type-c .\${P}-item-title,
.\${P}-type-c .\${P}-item-subtitle,
.\${P}-type-f .\${P}-item-title,
.\${P}-type-f .\${P}-item-subtitle {
  text-align: right;
}
.\${P}-item-text-block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  flex-shrink: 0;
}
.\${P}-type-d .\${P}-item-text-block {
  align-items: flex-start;
}
.\${P}-type-e .\${P}-item-text-block {
  align-items: center;
}
.\${P}-type-f .\${P}-item-text-block {
  align-items: flex-end;
}
.\${P}-type-a .\${P}-item-text-link,
.\${P}-type-d .\${P}-item-text-link {
  align-items: flex-start;
}
.\${P}-type-b .\${P}-item-text-link,
.\${P}-type-e .\${P}-item-text-link {
  align-items: center;
}
.\${P}-type-c .\${P}-item-text-link,
.\${P}-type-f .\${P}-item-text-link {
  align-items: flex-end;
}
.\${P}-image-align-top .\${P}-item-image-wrapper:not(.\${P}-item-image-wrapper-fit-slider) {
  align-items: flex-start;
}
.\${P}-image-align-center .\${P}-item-image-wrapper:not(.\${P}-item-image-wrapper-fit-slider) {
  align-items: center;
}
.\${P}-image-align-bottom .\${P}-item-image-wrapper:not(.\${P}-item-image-wrapper-fit-slider) {
  align-items: flex-end;
}
.\${P}-image-align-top .\${P}-item-slider .splide__slide {
  align-items: flex-start;
}
.\${P}-image-align-center .\${P}-item-slider .splide__slide {
  align-items: center;
}
.\${P}-image-align-bottom .\${P}-item-slider .splide__slide {
  align-items: flex-end;
}
.\${P}-align-entries .\${P}-item {
  display: contents;
}
.\${P}-align-entries .\${P}-item-inner,
.\${P}-align-entries .\${P}-item-inner-hidden {
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 3;
  justify-self: center;
  margin-bottom: var(--\${P}-align-entries-row-gap, 0);
}
.\${P}-align-entries .\${P}-item-inner-last-row {
  margin-bottom: 0;
}
.\${P}-align-entries .\${P}-item-text-link {
  display: contents;
}
.\${P}-align-entries .\${P}-item-title-row,
.\${P}-align-entries .\${P}-item-subtitle-row {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  min-height: 100%;
}
.\${P}-type-a.\${P}-align-entries .\${P}-item-title-row,
.\${P}-type-a.\${P}-align-entries .\${P}-item-subtitle-row,
.\${P}-type-d.\${P}-align-entries .\${P}-item-title-row,
.\${P}-type-d.\${P}-align-entries .\${P}-item-subtitle-row {
  align-items: flex-start;
}
.\${P}-type-b.\${P}-align-entries .\${P}-item-title-row,
.\${P}-type-b.\${P}-align-entries .\${P}-item-subtitle-row,
.\${P}-type-e.\${P}-align-entries .\${P}-item-title-row,
.\${P}-type-e.\${P}-align-entries .\${P}-item-subtitle-row {
  align-items: center;
}
.\${P}-type-c.\${P}-align-entries .\${P}-item-title-row,
.\${P}-type-c.\${P}-align-entries .\${P}-item-subtitle-row,
.\${P}-type-f.\${P}-align-entries .\${P}-item-title-row,
.\${P}-type-f.\${P}-align-entries .\${P}-item-subtitle-row {
  align-items: flex-end;
}
.\${P}-align-entries .\${P}-item-image-link {
  width: 100%;
  height: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.\${P}-align-entries .\${P}-item-image-link > .\${P}-item-image-wrapper {
  flex-shrink: 0;
  height: auto;
  align-self: auto;
}
.\${P}-image-align-top.\${P}-align-entries .\${P}-item-image-link > .\${P}-item-image-wrapper {
  margin-top: 0;
  margin-bottom: auto;
}
.\${P}-image-align-center.\${P}-align-entries .\${P}-item-image-link > .\${P}-item-image-wrapper {
  margin-top: auto;
  margin-bottom: auto;
}
.\${P}-image-align-bottom.\${P}-align-entries .\${P}-item-image-link > .\${P}-item-image-wrapper {
  margin-top: auto;
  margin-bottom: 0;
}
.\${P}-image-align-top.\${P}-align-entries .\${P}-item-image-wrapper:not(.\${P}-item-image-wrapper-fit-slider) {
  align-items: flex-start;
}
.\${P}-image-align-center.\${P}-align-entries .\${P}-item-image-wrapper:not(.\${P}-item-image-wrapper-fit-slider) {
  align-items: center;
}
.\${P}-image-align-bottom.\${P}-align-entries .\${P}-item-image-wrapper:not(.\${P}-item-image-wrapper-fit-slider) {
  align-items: flex-end;
}
.\${P}-image-align-top.\${P}-align-entries .\${P}-item-slider .splide__slide {
  align-items: flex-start;
}
.\${P}-image-align-center.\${P}-align-entries .\${P}-item-slider .splide__slide {
  align-items: center;
}
.\${P}-image-align-bottom.\${P}-align-entries .\${P}-item-slider .splide__slide {
  align-items: flex-end;
}
.\${P}-image-align-top.\${P}-align-entries .\${P}-item-image-link {
  justify-content: flex-start;
}
.\${P}-image-align-center.\${P}-align-entries .\${P}-item-image-link {
  justify-content: center;
}
.\${P}-image-align-bottom.\${P}-align-entries .\${P}-item-image-link {
  justify-content: flex-end;
}
.\${P}-lightbox-counter {
  margin: 0;
  color: var(--\${P}-lightbox-counter-color);
}

.\${P}-control {
  position: relative;
  z-index: 2;
  width: 100%;
}

.\${P}-control::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 20px;
  pointer-events: auto;
  z-index: 10;
}
\`;
}

type GridProps = {
  layoutId?: string;
  settings: GridSettings;
  content?: any;
  isEditor?: boolean;
  isPreviewMode?: boolean;
  isEditMode?: boolean;
  activeEvent: string | undefined;
  portalId?: string;
  onUpdateSettings?: (settings: GridSettings) => void;
} & CommonComponentProps;

type AnimRect = { top: number; left: number; width: number; height: number };

type LightboxProps = {
  items: GridMedia[];
  index: number;
  imageDisplay: 'fit' | 'cover';
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  counterClassName: string;
  counterStyle: React.CSSProperties;
};

const LIGHTBOX_ANIM_MS = 500;
const SLIDER_TRANSITION_MS = 750;
const LIGHTBOX_EASING = 'cubic-bezier(0.22, 1, 0.36, 1)';
const SWIPE_CLOSE_THRESHOLD = 72;
const SWIPE_NAV_THRESHOLD = 50;

type SwipeAxis = 'none' | 'horizontal' | 'vertical';

type GridMedia = {
  url: string;
  name?: string;
  type: 'image' | 'video';
};

type GridMediaPair = {
  media: GridMedia[];
};

type GridDisplayItem = {
  displayMedia: GridMedia;
  lightboxMedia: GridMedia | null;
};

function isPairFormat(image: GridMedia[] | GridMediaPair[] | undefined): image is GridMediaPair[] {
  if (!Array.isArray(image) || image.length === 0) return false;
  const first = image[0];
  return first !== null && typeof first === 'object' && 'media' in first && Array.isArray(first.media);
}

function getDisplayMediaForPair(pair: GridMediaPair): GridMedia | null {
  const [first, second] = pair.media;
  if (second?.url) return second;
  if (first?.url) return first;
  return null;
}

function getLightboxMediaForPair(pair: GridMediaPair): GridMedia | null {
  const [first] = pair.media;
  if (first?.url) return first;
  return null;
}

function getGridDisplayItems(image: GridMedia[] | GridMediaPair[] | undefined): GridDisplayItem[] {
  if (!Array.isArray(image) || image.length === 0) return [];

  if (isPairFormat(image)) {
    return image.flatMap(pair => {
      const displayMedia = getDisplayMediaForPair(pair);
      if (!displayMedia) return [];

      const lightboxMedia = getLightboxMediaForPair(pair);
      return [{
        displayMedia,
        lightboxMedia: lightboxMedia?.url ? lightboxMedia : null,
      }];
    });
  }

  return (image as GridMedia[])
    .filter(media => media?.url)
    .map(media => ({
      displayMedia: media,
      lightboxMedia: media,
    }));
}

function isVideoMedia(media: GridMedia): boolean {
  if (media.type === 'video') return true;
  return false;
}

function unloadVideoElement(video: HTMLVideoElement) {
  video.pause();
  video.removeAttribute('src');
  video.load();
}

function GridMediaItem({
  media,
  className,
  style,
  onMediaClick,
}: {
  media: GridMedia;
  className: string;
  style: React.CSSProperties;
  onMediaClick?: (e: React.MouseEvent<HTMLElement>) => void;
}) {
  if (isVideoMedia(media)) {
    return (
      <video
        src={media.url}
        className={className}
        style={{
          ...style,
          cursor: onMediaClick ? 'pointer' : 'default',
        }}
        muted
        autoPlay
        loop
        playsInline
        onClick={onMediaClick}
      />
    );
  }

  return (
    <img
      src={media.url}
      alt={media.name}
      className={className}
      style={{
        ...style,
        cursor: onMediaClick ? 'pointer' : 'default',
      }}
      onClick={onMediaClick}
    />
  );
}

function getGhostRect(ghost: HTMLElement): AnimRect {
  const cb = ghost.getBoundingClientRect();
  return { width: cb.width, height: cb.height, left: cb.left, top: cb.top };
}

function getLightboxMediaDimensions(media: HTMLImageElement | HTMLVideoElement) {
  if (media instanceof HTMLVideoElement) {
    return { width: media.videoWidth, height: media.videoHeight };
  }
  return { width: media.naturalWidth, height: media.naturalHeight };
}

function LightboxVideo({
  src,
  phase,
  mediaRef,
  mediaStyle,
  onLoadedMetadata,
  onClick,
  onMouseMove,
  onTransitionEnd,
}: {
  src: string;
  phase: 'opening' | 'open' | 'closing';
  mediaRef: React.RefObject<HTMLVideoElement>;
  mediaStyle: React.CSSProperties;
  onLoadedMetadata: () => void;
  onClick: (e: React.MouseEvent<HTMLVideoElement>) => void;
  onMouseMove: (e: React.MouseEvent<HTMLVideoElement>) => void;
  onTransitionEnd: (e: React.TransitionEvent<HTMLVideoElement>) => void;
}) {
  useEffect(() => {
    const video = mediaRef.current;
    if (!video) return;

    return () => {
      unloadVideoElement(video);
    };
  }, [src, mediaRef]);

  return (
    <video
      ref={mediaRef}
      src={src}
      controls={phase === 'open'}
      playsInline
      preload='auto'
      onLoadedMetadata={onLoadedMetadata}
      onClick={onClick}
      onMouseMove={onMouseMove}
      onTransitionEnd={onTransitionEnd}
      style={mediaStyle}
    />
  );
}

function Lightbox({ items, index, imageDisplay, onClose, onPrev, onNext, counterClassName, counterStyle }: LightboxProps) {
  const isCover = imageDisplay === 'cover';
  const containerRef = useRef<HTMLDivElement>(null);
  const ghostRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLImageElement | HTMLVideoElement>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const swipeOffsetRef = useRef(0);
  const swipeDeltaXRef = useRef(0);
  const swipeAxisRef = useRef<SwipeAxis>('none');
  const isSwipingRef = useRef(false);
  const touchInteractionRef = useRef(false);
  const navSwipeAnimatingRef = useRef(false);
  const navSwipeCommitTimerRef = useRef<number | null>(null);
  const [finalRect, setFinalRect] = useState<AnimRect | null>(null);
  const [phase, setPhase] = useState<'opening' | 'open' | 'closing'>('opening');
  const [swipeOffset, setSwipeOffset] = useState(0);
  const [navSwipeOffset, setNavSwipeOffset] = useState(0);
  const [navSwipeAnimating, setNavSwipeAnimating] = useState(false);
  const [isSwiping, setIsSwiping] = useState(false);
  const [swipeDismiss, setSwipeDismiss] = useState(false);
  const prevIndexRef = useRef(index);
  const currentItem = items[index];
  const isCurrentVideo = currentItem ? isVideoMedia(currentItem) : false;
  const isHorizontalNavActive = navSwipeOffset !== 0 || navSwipeAnimating;

  const setNavSwipeAnimatingState = useCallback((value: boolean) => {
    navSwipeAnimatingRef.current = value;
    setNavSwipeAnimating(value);
  }, []);

  const clearNavSwipeCommitTimer = useCallback(() => {
    if (navSwipeCommitTimerRef.current !== null) {
      window.clearTimeout(navSwipeCommitTimerRef.current);
      navSwipeCommitTimerRef.current = null;
    }
  }, []);

  const scheduleNavSwipeSnapBackEnd = useCallback(() => {
    clearNavSwipeCommitTimer();
    navSwipeCommitTimerRef.current = window.setTimeout(() => {
      clearNavSwipeCommitTimer();
      setNavSwipeAnimatingState(false);
    }, LIGHTBOX_ANIM_MS + 32);
  }, [clearNavSwipeCommitTimer, setNavSwipeAnimatingState]);

  const computeFinalRect = useCallback(() => {
    const ghost = ghostRef.current;
    const media = mediaRef.current;
    if (!ghost) return;
    const cb = ghost.getBoundingClientRect();
    const cw = cb.width;
    const ch = cb.height;
    if (!cw || !ch) return;

    if (imageDisplay === 'cover') {
      setFinalRect({ width: cw, height: ch, left: cb.left, top: cb.top });
      return;
    }

    if (!media) {
      setFinalRect(getGhostRect(ghost));
      return;
    }

    const { width: nw, height: nh } = getLightboxMediaDimensions(media);
    if (!nw || !nh) {
      setFinalRect(getGhostRect(ghost));
      return;
    }

    const ir = nw / nh;
    const cr = cw / ch;
    if (ir > cr) {
      const dh = cw / ir;
      setFinalRect({ width: cw, height: dh, left: cb.left, top: cb.top + (ch - dh) / 2 });
    } else {
      const dw = ch * ir;
      setFinalRect({ width: dw, height: ch, left: cb.left + (cw - dw) / 2, top: cb.top });
    }
  }, [imageDisplay]);

  useEffect(() => {
    computeFinalRect();
    const c = ghostRef.current;
    if (!c) return;
    const ro = new ResizeObserver(() => computeFinalRect());
    ro.observe(c);
    return () => ro.disconnect();
  }, [computeFinalRect, index]);

  useEffect(() => {
    if (phase === 'opening' && finalRect) setPhase('open');
  }, [phase, finalRect]);

  useEffect(() => {
    if (phase !== 'closing') return;
    const t = setTimeout(() => onClose(), LIGHTBOX_ANIM_MS);
    return () => clearTimeout(t);
  }, [phase, onClose]);

  useEffect(() => {
    return () => {
      clearNavSwipeCommitTimer();
    };
  }, [clearNavSwipeCommitTimer]);

  useLayoutEffect(() => {
    if (prevIndexRef.current === index) return;

    clearNavSwipeCommitTimer();
    setSwipeOffset(0);
    setNavSwipeOffset(0);
    setNavSwipeAnimatingState(false);
    setSwipeDismiss(false);
    setIsSwiping(false);
    swipeOffsetRef.current = 0;
    swipeDeltaXRef.current = 0;
    swipeAxisRef.current = 'none';
    isSwipingRef.current = false;
    touchStartRef.current = null;
    touchInteractionRef.current = false;

    const ghost = ghostRef.current;
    if (ghost) {
      setFinalRect(getGhostRect(ghost));
    }

    prevIndexRef.current = index;
  }, [index, setNavSwipeAnimatingState, clearNavSwipeCommitTimer]);

  useEffect(() => {
    if (phase !== 'open') return;

    const blockSwipeClick = () => {
      const blockClick = (clickEvent: Event) => {
        clickEvent.stopPropagation();
        clickEvent.preventDefault();
        document.removeEventListener('click', blockClick, true);
      };
      document.addEventListener('click', blockClick, true);
    };

    const commitNavSwipe = (deltaX: number) => {
      clearNavSwipeCommitTimer();
      navSwipeAnimatingRef.current = false;
      setNavSwipeAnimating(false);
      setNavSwipeOffset(0);
      setIsSwiping(false);
      isSwipingRef.current = false;
      swipeDeltaXRef.current = 0;
      swipeAxisRef.current = 'none';

      const ghost = ghostRef.current;
      if (ghost) {
        setFinalRect(getGhostRect(ghost));
      }

      if (deltaX < 0) onNext();
      else onPrev();
    };

    const startNavSwipeRelease = (deltaX: number) => {
      if (Math.abs(deltaX) > SWIPE_NAV_THRESHOLD && items.length > 1) {
        commitNavSwipe(deltaX);
        return;
      }

      setNavSwipeAnimatingState(true);
      setNavSwipeOffset(0);
      scheduleNavSwipeSnapBackEnd();
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length !== 1 || navSwipeAnimatingRef.current) return;
      const touch = e.touches[0];

      touchInteractionRef.current = true;
      touchStartRef.current = { x: touch.clientX, y: touch.clientY };
      swipeAxisRef.current = 'none';
      swipeDeltaXRef.current = 0;
      isSwipingRef.current = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartRef.current || e.touches.length !== 1 || navSwipeAnimatingRef.current) return;
      const touch = e.touches[0];
      const deltaX = touch.clientX - touchStartRef.current.x;
      const deltaY = touch.clientY - touchStartRef.current.y;

      if (swipeAxisRef.current === 'none') {
        if (Math.abs(deltaX) < 10 && Math.abs(deltaY) < 10) return;
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
          if (items.length <= 1) return;
          swipeAxisRef.current = 'horizontal';
        } else if (deltaY > 0) {
          swipeAxisRef.current = 'vertical';
        } else {
          return;
        }
      }

      if (swipeAxisRef.current === 'horizontal') {
        isSwipingRef.current = true;
        setIsSwiping(true);
        swipeDeltaXRef.current = deltaX;
        setNavSwipeOffset(deltaX);
        e.preventDefault();
        return;
      }

      if (swipeAxisRef.current === 'vertical') {
        isSwipingRef.current = true;
        setIsSwiping(true);
        swipeOffsetRef.current = deltaY;
        setSwipeOffset(deltaY);
        e.preventDefault();
      }
    };

    const handleTouchEnd = () => {
      if (!touchStartRef.current) return;

      const axis = swipeAxisRef.current;
      const wasSwiping = isSwipingRef.current;

      if (wasSwiping && axis === 'horizontal') {
        startNavSwipeRelease(swipeDeltaXRef.current);
        blockSwipeClick();
      } else if (wasSwiping && axis === 'vertical') {
        const offset = swipeOffsetRef.current;

        if (offset > SWIPE_CLOSE_THRESHOLD) {
          const dismissOffset = window.innerHeight;
          swipeOffsetRef.current = dismissOffset;
          setSwipeDismiss(true);
          setSwipeOffset(dismissOffset);
          setPhase('closing');
        } else {
          swipeOffsetRef.current = 0;
          setSwipeOffset(0);
        }

        blockSwipeClick();
      } else if (axis === 'horizontal' && Math.abs(swipeDeltaXRef.current) > 0) {
        startNavSwipeRelease(swipeDeltaXRef.current);
        blockSwipeClick();
      }

      touchStartRef.current = null;
      swipeAxisRef.current = 'none';
      swipeDeltaXRef.current = 0;
      isSwipingRef.current = false;
      setIsSwiping(false);
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd);
    document.addEventListener('touchcancel', handleTouchEnd);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
      document.removeEventListener('touchcancel', handleTouchEnd);
    };
  }, [phase, items.length, onNext, onPrev, setNavSwipeAnimatingState, scheduleNavSwipeSnapBackEnd]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      e.preventDefault();
      e.stopPropagation();
      if (phase === 'closing') return;
      setPhase('closing');
    };
    window.addEventListener('keydown', onKeyDown, true);
    return () => window.removeEventListener('keydown', onKeyDown, true);
  }, [phase]);

  const handleClose = () => {
    if (phase === 'closing') return;
    setPhase('closing');
  };

  const isOpen = phase === 'open';
  const isClosing = phase === 'closing';
  const swipeBackdropOpacity = swipeOffset > 0 ? Math.max(0, 1 - swipeOffset / 500) : 1;
  const swipeMediaOpacity = swipeOffset > 0 ? Math.max(0.35, 1 - swipeOffset / 500) : 1;

  const handleVideoClick = (e: React.MouseEvent<HTMLVideoElement>) => {
    e.stopPropagation();
    if (touchInteractionRef.current) {
      touchInteractionRef.current = false;
      return;
    }
    if (items.length <= 1) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const y = e.clientY - rect.top;
    const controlsZoneHeight = Math.min(52, rect.height * 0.2);

    if (y > rect.height - controlsZoneHeight) {
      return;
    }

    if (e.clientX - rect.left < rect.width / 2) {
      onPrev();
      return;
    }

    onNext();
  };

  const handleVideoMouseMove = (e: React.MouseEvent<HTMLVideoElement>) => {
    if (items.length <= 1) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const controlsZoneHeight = Math.min(52, rect.height * 0.2);

    if (y > rect.height - controlsZoneHeight) {
      e.currentTarget.style.cursor = 'default';
      return;
    }

    e.currentTarget.style.cursor = x < rect.width / 2 ? 'w-resize' : 'e-resize';
  };

  const handleNavSwipeTransitionEnd = useCallback((e: React.TransitionEvent<HTMLElement>) => {
    if (e.propertyName !== 'transform' || !navSwipeAnimatingRef.current) return;

    clearNavSwipeCommitTimer();
    setNavSwipeAnimatingState(false);
  }, [clearNavSwipeCommitTimer, setNavSwipeAnimatingState]);

  const mediaTransform = isHorizontalNavActive
    ? \`translateX(\${navSwipeOffset}px)\`
    : swipeOffset > 0
      ? \`translateY(\${swipeOffset}px)\`
      : undefined;

  const mediaStyle: React.CSSProperties = {
    position: 'fixed',
    top: finalRect?.top,
    left: finalRect?.left,
    width: finalRect?.width,
    height: finalRect?.height,
    objectFit: imageDisplay === 'cover' ? 'cover' : 'contain',
    transform: mediaTransform,
    opacity: swipeOffset > 0
      ? swipeMediaOpacity
      : phase === 'opening' || isClosing
        ? 0
        : 1,
    transition: (isSwiping && !navSwipeAnimating)
      ? 'none'
      : navSwipeAnimating
        ? \`transform \${LIGHTBOX_ANIM_MS}ms \${LIGHTBOX_EASING}\`
        : swipeDismiss
          ? \`transform \${LIGHTBOX_ANIM_MS}ms \${LIGHTBOX_EASING}, opacity \${LIGHTBOX_ANIM_MS}ms \${LIGHTBOX_EASING}\`
          : phase === 'opening' || isClosing
            ? \`opacity \${LIGHTBOX_ANIM_MS}ms \${LIGHTBOX_EASING}\`
            : 'none',
    pointerEvents: isCurrentVideo && isOpen && !isHorizontalNavActive ? 'auto' : 'none',
    touchAction: isCurrentVideo && isOpen ? 'none' : undefined,
    zIndex: 9998,
  };

  const navOverlayBaseStyle = finalRect ? {
    position: 'fixed' as const,
    top: finalRect.top,
    height: finalRect.height,
    width: finalRect.width / 2,
    zIndex: 9999,
  } : null;

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 'var(--cntrl-article-top, 0)',
        left: 'var(--cntrl-article-left, 0)',
        width: 'var(--cntrl-article-width, 100vw) !important',
        height: 'var(--cntrl-viewport-height, 100vh) !important',
        zIndex: 9997,
        touchAction: phase === 'open' ? 'none' : undefined,
      }}
      onClick={handleClose}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(28,31,34,0.9)',
          opacity: isOpen ? swipeBackdropOpacity : 0,
          transition: isSwiping ? 'none' : \`opacity \${LIGHTBOX_ANIM_MS}ms \${LIGHTBOX_EASING}\`,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {isCover ? (
          <>
            <div ref={ghostRef} style={{ position: 'absolute', inset: 0 }} />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                height: '10%',
                opacity: isOpen ? 1 : 0,
                transition: \`opacity \${LIGHTBOX_ANIM_MS}ms \${LIGHTBOX_EASING}\`,
                pointerEvents: 'none',
                zIndex: 9999,
              }}
            >
              {items.length > 1 &&
                <p className={counterClassName} style={counterStyle}>
                  {index + 1} / {items.length}
                </p>
              }
            </div>
          </>
        ) : (
          <>
            <div style={{ height: '10%' }}></div>
            <div
              style={{
                width: '70%',
                height: '80%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
              <div ref={ghostRef} style={{ width: '100%', height: '100%' }} />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                height: '10%',
                opacity: isOpen ? 1 : 0,
                transition: \`opacity \${LIGHTBOX_ANIM_MS}ms \${LIGHTBOX_EASING}\`,
              }}
            >
              {items.length > 1 &&
                <p className={counterClassName} style={counterStyle}>
                  {index + 1} / {items.length}
                </p>
              }
            </div>
          </>
        )}
      </div>

      {finalRect && currentItem && (
        isCurrentVideo ? (
          <LightboxVideo
            key={\`\${index}-\${currentItem.url}\`}
            src={currentItem.url}
            phase={phase}
            mediaRef={mediaRef as React.RefObject<HTMLVideoElement>}
            mediaStyle={mediaStyle}
            onLoadedMetadata={computeFinalRect}
            onClick={handleVideoClick}
            onMouseMove={handleVideoMouseMove}
            onTransitionEnd={handleNavSwipeTransitionEnd}
          />
        ) : (
          <img
            key={\`\${index}-\${currentItem.url}\`}
            ref={mediaRef as React.RefObject<HTMLImageElement>}
            src={currentItem.url}
            alt={currentItem.name}
            onLoad={computeFinalRect}
            onTransitionEnd={handleNavSwipeTransitionEnd}
            style={mediaStyle}
          />
        )
      )}

      {isOpen && navOverlayBaseStyle && items.length > 1 && !isCurrentVideo && (
        <>
          <div
            style={{
              ...navOverlayBaseStyle,
              left: finalRect!.left,
              cursor: 'w-resize',
              pointerEvents: isHorizontalNavActive ? 'none' : 'auto',
            }}
            onClick={(e) => {
              if (touchInteractionRef.current) {
                touchInteractionRef.current = false;
                return;
              }
              e.stopPropagation();
              onPrev();
            }}
          />
          <div
            style={{
              ...navOverlayBaseStyle,
              left: finalRect!.left + finalRect!.width / 2,
              cursor: 'e-resize',
              pointerEvents: isHorizontalNavActive ? 'none' : 'auto',
            }}
            onClick={(e) => {
              if (touchInteractionRef.current) {
                touchInteractionRef.current = false;
                return;
              }
              e.stopPropagation();
              onNext();
            }}
          />
        </>
      )}
    </div>
  );
}

function resolveLightboxImageDisplay(
  value: GridSettings['lightboxImageDisplay'],
): 'fit' | 'cover' {
  if (typeof value === 'string') {
    return value === 'cover' ? 'cover' : 'fit';
  }
  return value?.display === 'cover' ? 'cover' : 'fit';
}

export function Grid({ settings, content, isEditor, isPreviewMode, isEditMode, metadata, activeEvent, layoutId, portalId }: GridProps) {
  const { prefix: P } = useScopedStyles();
  const {
    type = 'a',
    gridLayout,
    textBoxWidth = 100,
    verticalGap,
    entriesCount,
    lightbox,
    imageDisplay,
    lightboxImageDisplay,
    slider,
    sliderTiming,
    direction,
    transition,
    titleMarginTop,
    subtitleMarginTop,
    titleColor,
    subtitleColor,
    lightboxCounterColor,
    titleFontFamily,
    titleFontSettings,
    titleFontSize,
    titleLineHeight,
    titleLetterSpacing,
    titleWordSpacing,
    titleTextAppearance,
    subtitleFontFamily,
    subtitleFontSettings,
    subtitleFontSize,
    subtitleLineHeight,
    subtitleLetterSpacing,
    subtitleWordSpacing,
    subtitleTextAppearance,
    lightboxCounterFontFamily,
    lightboxCounterFontSettings,
    lightboxCounterFontSize,
    lightboxCounterLineHeight,
    lightboxCounterLetterSpacing,
    lightboxCounterWordSpacing,
    lightboxCounterTextAppearance,
    showText = 'always',
    alignEntries = 'off',
    align = 'top',
  } = settings;

  const resolvedTitleTextStyle: TextStyles = {
    fontSettings: {
      fontFamily: titleFontFamily,
      fontWeight: titleFontSettings?.fontWeight ?? 400,
      fontStyle: titleFontSettings?.fontStyle ?? 'normal',
    },
    fontSize: titleFontSize ?? 0.01,
    lineHeight: titleLineHeight,
    letterSpacing: titleLetterSpacing ?? 0,
    wordSpacing: titleWordSpacing ?? 0,
    textAppearance: titleTextAppearance,
    color: titleColor,
  };
  const titleTypographyCss = omitTextColors(textStylesToCss(resolvedTitleTextStyle, isEditor));
  const titleFieldCss = {
    ...titleTypographyCss,
  } as React.CSSProperties;

  const resolvedSubtitleTextStyle: TextStyles = {
    fontSettings: {
      fontFamily: subtitleFontFamily,
      fontWeight: subtitleFontSettings?.fontWeight ?? 400,
      fontStyle: subtitleFontSettings?.fontStyle ?? 'normal',
    },
    fontSize: subtitleFontSize ?? 0.01,
    lineHeight: subtitleLineHeight,
    letterSpacing: subtitleLetterSpacing ?? 0,
    wordSpacing: subtitleWordSpacing ?? 0,
    textAppearance: subtitleTextAppearance,
    color: subtitleColor,
  };
  const subtitleTypographyCss = omitTextColors(textStylesToCss(resolvedSubtitleTextStyle, isEditor));
  const subtitleFieldCss = {
    ...subtitleTypographyCss,
  } as React.CSSProperties;

  const resolvedLightboxCounterTextStyle: TextStyles = {
    fontSettings: {
      fontFamily: lightboxCounterFontFamily,
      fontWeight: lightboxCounterFontSettings?.fontWeight ?? 400,
      fontStyle: lightboxCounterFontSettings?.fontStyle ?? 'normal',
    },
    fontSize: lightboxCounterFontSize ?? 0.01,
    lineHeight: lightboxCounterLineHeight,
    letterSpacing: lightboxCounterLetterSpacing ?? 0,
    wordSpacing: lightboxCounterWordSpacing ?? 0,
    textAppearance: lightboxCounterTextAppearance,
    color: lightboxCounterColor,
  };
  const lightboxCounterTypographyCss = omitTextColors(textStylesToCss(resolvedLightboxCounterTextStyle, isEditor));
  const lightboxCounterFieldCss = {
    ...lightboxCounterTypographyCss,
    ...getGridTextLeadingVars(lightboxCounterFontSize, lightboxCounterLineHeight, P, isEditor),
  } as React.CSSProperties;

  const titleTextClassName = getGridTextClassName(
    titleFontSize,
    titleLineHeight,
    \`\${P}-item-title\`,
    \`\${P}-text-tight-leading\`,
  );
  const subtitleTextClassName = getGridTextClassName(
    subtitleFontSize,
    subtitleLineHeight,
    \`\${P}-item-subtitle\`,
    \`\${P}-text-tight-leading\`,
  );
  const titleTextLeadingVars = getGridTextLeadingVars(titleFontSize, titleLineHeight, P, isEditor);
  const subtitleTextLeadingVars = getGridTextLeadingVars(subtitleFontSize, subtitleLineHeight, P, isEditor);
  const lightboxCounterClassName = getGridTextClassName(
    lightboxCounterFontSize,
    lightboxCounterLineHeight,
    \`\${P}-lightbox-counter\`,
    \`\${P}-text-tight-leading\`,
  );

  const colorVars = buildColorVars(P, {
    titleColor,
    subtitleColor,
    lightboxCounterColor,
  }, COLOR_VAR_MAP, STATE_KEYS);

  const stateClass = activeEvent && activeEvent !== 'default' ? \`\${P}-state-\${activeEvent}\` : '';
  const showTextOnHover = showText === 'on hover' && (!isEditor || isPreviewMode);
  const wrapperStateClasses = \`\${stateClass}\${showTextOnHover ? \` \${P}-show-text-hover\` : ''}\`.trim();

  const resEntriesCount = entriesCount === 0 ? Infinity : entriesCount;

  const cropContent = (content ?? []).slice(0, resEntriesCount);

  const size = gridLayout.entryWidth ?? 0.2;

  const isCover = imageDisplay?.display === 'cover';
  const ratioValue = imageDisplay?.ratioValue ?? '1:1';
  const ratioReversed = imageDisplay?.reversed ?? false;
  const [rW, rH] = ratioValue.split(':').map(Number);
  const effW = ratioReversed ? rH : rW;
  const effH = ratioReversed ? rW : rH;
  const aspectRatio = \`\${effW} / \${effH}\`;

  const columnsCount = gridLayout.columnsCount;
  const entryWidthScaled = scalingValue(size ?? 0, isEditor);
  const imageWrapperWidth = entryWidthScaled;
  const isFitSlider = !isCover && slider !== 'off';

  const itemsInLastRow = cropContent.length % columnsCount || columnsCount;
  const isPartialLastRow = itemsInLastRow < columnsCount && cropContent.length > 0;
  const lastRowStartIndex = cropContent.length - itemsInLastRow;
  const lastRowStartColumn = isPartialLastRow
    ? Math.floor((columnsCount - itemsInLastRow) / 2) + 1
    : 1;

  const imageWrapperStyle: React.CSSProperties = {
    width: imageWrapperWidth,
    ...(isCover
      ? { aspectRatio, height: 'auto', overflow: 'hidden' }
      : { height: 'auto' }),
  };

  const imageWrapperClassName = \`\${P}-item-image-wrapper\${isFitSlider ? \` \${P}-item-image-wrapper-fit-slider\` : ''}\`.trim();
  const isTextBeforeImage = type === 'd' || type === 'e' || type === 'f';
  const shouldAlignEntries = alignEntries === 'on';
  const textBoxWidthStyle = \`calc(\${scalingValue(size ?? 0, isEditor)} * (\${textBoxWidth} / 100))\`;
  const controlWidthStyle = scalingValue(size * textBoxWidth / 100, isEditor);

  const imageStyle: React.CSSProperties = isCover
    ? {
        objectFit: 'cover',
        pointerEvents: 'auto',
        width: '100%',
        height: '100%',
        maxWidth: '100%',
      }
    : {
        objectFit: 'contain',
        pointerEvents: 'auto',
        width: 'auto',
        height: 'auto',
        maxWidth: '100%',
      };

  const [dir, setDir] = useState('ltr');
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      setContainerWidth(Math.round(entries[0].contentRect.width));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const lightboxPortalStyle = (() => {
    const style: Record<string, string> = { ...(colorVars as Record<string, string>) };
    const articleWidth = containerRef.current
      ? getComputedStyle(containerRef.current).getPropertyValue('--cntrl-article-width').trim()
      : '';
    if (articleWidth) {
      style['--cntrl-article-width'] = articleWidth;
    }
    return style as React.CSSProperties;
  })();

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxItems, setLightboxItems] = useState<GridMedia[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const canOpenLightboxMedia = lightbox === 'on' && (!isEditor || isPreviewMode);

  const openLightbox = (items: GridMedia[], idx: number) => {
    if (isEditor && !isPreviewMode) return;
    if (lightbox === 'off') return;
    setLightboxItems(items);
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  useEffect(() => {
    if (!lightboxOpen || lightbox !== 'on') return;
    if (typeof document === 'undefined') return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [lightboxOpen, lightbox]);

  useEffect(() => {
    if (!isEditor || isPreviewMode) return;
    setLightboxOpen(false);
  }, [isEditor, isPreviewMode]);

  const scopedCss = useMemo(() => getCSS(P), [P]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: scopedCss }} />
      <div style={colorVars}>
        <div
          ref={containerRef}
          className={\`\${P}-wrapper \${P}-type-\${type}\${shouldAlignEntries ? \` \${P}-align-entries\` : ''} \${P}-image-align-\${align} \${wrapperStateClasses}\`.trim()}
          style={{
            gridTemplateColumns: \`repeat(\${columnsCount}, \${entryWidthScaled})\`,
            rowGap: shouldAlignEntries ? 0 : scalingValue(verticalGap ?? 0, isEditor),
            columnGap: scalingValue(gridLayout.horizontalGap ?? 0, isEditor),
            width: scalingValue(gridLayout.wrapperWidth ?? 0, isEditor),
            ...(shouldAlignEntries
              ? { [\`--\${P}-align-entries-row-gap\`]: scalingValue(verticalGap ?? 0, isEditor) }
              : {}),
          }}>
          {cropContent.map((item: any, index: number) => {
            const hasTitle = hasText(item.title);
            const hasSubtitle = hasText(item.subtitle);
            const itemLink = (item.link?.length ?? 0) > 0 && lightbox === 'off' ? item.link : undefined;
            const isLastRow = Math.floor(index / columnsCount)
              === Math.ceil(cropContent.length / columnsCount) - 1;
            const gridColumn = isPartialLastRow && index >= lastRowStartIndex
              ? \`\${lastRowStartColumn + (index - lastRowStartIndex)}\`
              : undefined;

            const typeCTextBlock = isTextBeforeImage ? (
              <div className={\`\${P}-item-text-block\`}>
                {hasTitle && (
                  <p className={titleTextClassName} style={{ width: textBoxWidthStyle, ...titleFieldCss, ...titleTextLeadingVars }}>
                    {item.title}
                  </p>
                )}
                {hasTitle && (
                  <div
                    data-controls={isEditMode ? 'titleMarginTop' : undefined}
                    className={isEditMode ? \`\${P}-control\` : undefined}
                    style={{
                      height: scalingValue(titleMarginTop ?? 0, isEditor),
                      width: controlWidthStyle,
                    }}
                  />
                )}
                {hasSubtitle && (
                  <p className={subtitleTextClassName} style={{ width: textBoxWidthStyle, ...subtitleFieldCss, ...subtitleTextLeadingVars }}>
                    {item.subtitle}
                  </p>
                )}
                {hasSubtitle && (
                  <div
                    data-controls={isEditMode ? 'subtitleMarginTop' : undefined}
                    className={isEditMode ? \`\${P}-control\` : undefined}
                    style={{
                      height: scalingValue(subtitleMarginTop ?? 0, isEditor),
                      width: controlWidthStyle,
                    }}
                  />
                )}
              </div>
            ) : null;

            const titleRow = shouldAlignEntries ? (
              <div className={\`\${P}-item-title-row\`}>
                {!isTextBeforeImage && (
                  <div
                    data-controls={isEditMode && hasTitle ? 'titleMarginTop' : undefined}
                    className={isEditMode && hasTitle ? \`\${P}-control\` : undefined}
                    style={{
                      height: hasTitle ? scalingValue(titleMarginTop ?? 0, isEditor) : 0,
                      width: controlWidthStyle,
                    }}
                  />
                )}
                {hasTitle && (
                  <p className={titleTextClassName} style={{ width: textBoxWidthStyle, ...titleFieldCss, ...titleTextLeadingVars }}>
                    {item.title}
                  </p>
                )}
                {isTextBeforeImage && hasTitle && (
                  <div
                    data-controls={isEditMode ? 'titleMarginTop' : undefined}
                    className={isEditMode ? \`\${P}-control\` : undefined}
                    style={{
                      height: scalingValue(titleMarginTop ?? 0, isEditor),
                      width: controlWidthStyle,
                    }}
                  />
                )}
              </div>
            ) : null;

            const subtitleRow = shouldAlignEntries ? (
              <div className={\`\${P}-item-subtitle-row\`}>
                {!isTextBeforeImage && (
                  <div
                    data-controls={isEditMode && hasSubtitle ? 'subtitleMarginTop' : undefined}
                    className={isEditMode && hasSubtitle ? \`\${P}-control\` : undefined}
                    style={{
                      height: hasSubtitle ? scalingValue(subtitleMarginTop ?? 0, isEditor) : 0,
                      width: controlWidthStyle,
                    }}
                  />
                )}
                {hasSubtitle && (
                  <p className={subtitleTextClassName} style={{ width: textBoxWidthStyle, ...subtitleFieldCss, ...subtitleTextLeadingVars }}>
                    {item.subtitle}
                  </p>
                )}
                {isTextBeforeImage && hasSubtitle && (
                  <div
                    data-controls={isEditMode ? 'subtitleMarginTop' : undefined}
                    className={isEditMode ? \`\${P}-control\` : undefined}
                    style={{
                      height: scalingValue(subtitleMarginTop ?? 0, isEditor),
                      width: controlWidthStyle,
                    }}
                  />
                )}
              </div>
            ) : null;

            const alignedTextRows = itemLink ? (
              <a href={itemLink} target="_blank" className={\`\${P}-item-text-link\`}>
                {titleRow}
                {subtitleRow}
              </a>
            ) : (
              <>
                {titleRow}
                {subtitleRow}
              </>
            );

            const displayItems = getGridDisplayItems(item.gallery);
            const lightboxItemsForEntry = displayItems
              .filter(entry => entry.lightboxMedia)
              .map(entry => entry.lightboxMedia!);

            const imageContent = (
              <div className={imageWrapperClassName} style={imageWrapperStyle}>
                {displayItems.length === 0
                  ? null
                  : slider === 'off'
                    ?
                    (() => {
                      const { displayMedia, lightboxMedia } = displayItems[0];
                      const lightboxIndex = lightboxMedia
                        ? lightboxItemsForEntry.findIndex(item => item.url === lightboxMedia.url)
                        : -1;
                      return (
                        <GridMediaItem
                          media={displayMedia}
                          className={\`\${P}-item-\${isVideoMedia(displayMedia) ? 'video' : 'image'}\`.trim()}
                          style={imageStyle}
                          onMediaClick={canOpenLightboxMedia && lightboxIndex >= 0
                            ? () => openLightbox(lightboxItemsForEntry, lightboxIndex)
                            : undefined}
                        />
                      );
                    })()
                    :
                    <>
                    {isFitSlider && shouldAlignEntries && (
                      <div className={\`\${P}-item-image-wrapper-sizer\`} aria-hidden="true">
                        {displayItems.map(({ displayMedia }) => (
                          isVideoMedia(displayMedia) ? (
                            <video key={\`sizer-\${displayMedia.url}\`} src={displayMedia.url} muted playsInline />
                          ) : (
                            <img key={\`sizer-\${displayMedia.url}\`} src={displayMedia.url} alt="" />
                          )
                        ))}
                      </div>
                    )}
                    <Splide
                      key={\`\${transition}-\${size}-\${direction}-\${sliderTiming}-\${containerWidth}-\${layoutId}\`}
                      className={\`\${P}-item-slider\`}
                      options={{
                        arrows: false,
                        pagination: false,
                        drag: false,
                        perPage: 1,
                        autoplay: true,
                        interval: sliderTiming * 1000,
                        width: '100%',
                        height: '100%',
                        speed: SLIDER_TRANSITION_MS,
                        type: transition === 'fade' ? 'fade' : 'loop',
                        rewind: transition === 'fade',
                        pauseOnHover: false,
                        pauseOnFocus: false,
                        direction: transition === 'fade' ? 'ltr' : direction !== 'random'
                          ? direction === 'horizontal'
                            ? 'ltr'
                            : 'ttb'
                          : dir as 'ltr' | 'ttb' | 'rtl',
                      }}
                      onMoved={(splide) => {
                        if (direction !== 'random' || transition === 'fade') return;
                        const next = Math.random() > 0.5 ? Math.random() > 0.5 ? 'rtl' : 'ltr' : 'ttb';
                        setDir(next);

                        setTimeout(() => {
                          splide.refresh();
                        }, 0);
                      }}
                    >
                      {displayItems.map(({ displayMedia, lightboxMedia }, imgIndex) => {
                        const lightboxIndex = lightboxMedia
                          ? lightboxItemsForEntry.findIndex(item => item.url === lightboxMedia.url)
                          : -1;
                        return (
                          <SplideSlide key={imgIndex}>
                            <GridMediaItem
                              media={displayMedia}
                              className={\`\${P}-item-\${isVideoMedia(displayMedia) ? 'video' : 'image'}\`.trim()}
                              style={imageStyle}
                              onMediaClick={canOpenLightboxMedia && lightboxIndex >= 0
                                ? () => openLightbox(lightboxItemsForEntry, lightboxIndex)
                                : undefined}
                            />
                          </SplideSlide>
                        );
                      })}
                    </Splide>
                    </>
                }
              </div>
            );

            const typeABText = !isTextBeforeImage ? (
              <>
                <div
                  data-controls={isEditMode && hasTitle ? 'titleMarginTop' : undefined}
                  className={isEditMode && hasTitle ? \`\${P}-control\` : undefined}
                  style={{
                    height: hasTitle ? scalingValue(titleMarginTop ?? 0, isEditor) : 0,
                    width: controlWidthStyle,
                  }}
                />
                <p
                  className={titleTextClassName}
                  style={{ width: textBoxWidthStyle, ...titleFieldCss, ...titleTextLeadingVars }}
                >
                  {item.title}
                </p>
                <div
                  data-controls={isEditMode && hasSubtitle ? 'subtitleMarginTop' : undefined}
                  className={isEditMode && hasSubtitle ? \`\${P}-control\` : undefined}
                  style={{
                    height: hasSubtitle ? scalingValue(subtitleMarginTop ?? 0, isEditor) : 0,
                    width: controlWidthStyle,
                  }}
                />
                <p
                  className={subtitleTextClassName}
                  style={{ width: textBoxWidthStyle, ...subtitleFieldCss, ...subtitleTextLeadingVars }}
                >
                  {item.subtitle}
                </p>
              </>
            ) : null;

            return (
            <div
              key={index}
              className={\`\${P}-item\`.trim()}
              style={gridColumn && !shouldAlignEntries ? { gridColumn } : undefined}
            >
              <div
                className={\`\${isEditMode 
                  ? \`\${P}-item-inner\` 
                  : \`\${P}-item-inner-hidden\`}\${shouldAlignEntries && isLastRow ? \` \${P}-item-inner-last-row\` : ''}\`.trim()}
                style={{
                  width: (textBoxWidth ?? 0) > 100
                    ? \`calc(\${entryWidthScaled} * (\${textBoxWidth} / 100))\`
                    : entryWidthScaled,
                  ...(gridColumn && shouldAlignEntries ? { gridColumn } : {}),
                }}
              >
                {shouldAlignEntries ? (
                  <>
                    {isTextBeforeImage ? (
                      <>
                        {alignedTextRows}
                        <a href={itemLink} target="_blank" className={\`\${P}-item-image-link\`}>
                          {imageContent}
                        </a>
                      </>
                    ) : (
                      <>
                        <a href={itemLink} target="_blank" className={\`\${P}-item-image-link\`}>
                          {imageContent}
                        </a>
                        {alignedTextRows}
                      </>
                    )}
                  </>
                ) : itemLink ? (
                  <>
                    <a href={itemLink} target="_blank" className={\`\${P}-item-image-link\`}>
                      {typeCTextBlock}
                      {imageContent}
                    </a>
                    {!isTextBeforeImage && (
                      <a href={itemLink} target="_blank" className={\`\${P}-item-text-link\`}>
                        {typeABText}
                      </a>
                    )}
                  </>
                ) : (
                  <>
                    {typeCTextBlock}
                    {imageContent}
                    {typeABText}
                  </>
                )}
              </div>
            </div>
          );
          })}
        </div>
      </div>
      {(!isEditor || isPreviewMode) && lightboxOpen && typeof document !== 'undefined' && lightbox === 'on' && (() => {
        const portalTarget = (portalId ? document.getElementById(portalId) : null) ?? document.body;
        return createPortal(
          <div style={lightboxPortalStyle} data-selection="none">
            <Lightbox
              items={lightboxItems}
              index={lightboxIndex}
              imageDisplay={resolveLightboxImageDisplay(lightboxImageDisplay)}
              onClose={() => setLightboxOpen(false)}
              onPrev={() => setLightboxIndex((prev) => (prev - 1 + lightboxItems.length) % lightboxItems.length)}
              onNext={() => setLightboxIndex((prev) => (prev + 1) % lightboxItems.length)}
              counterClassName={lightboxCounterClassName}
              counterStyle={lightboxCounterFieldCss}
            />
          </div>,
          portalTarget,
        );
      })()}
    </>
  );
}

type GridLayoutConfig = {
  entryWidth: number;
  horizontalGap: number;
  wrapperWidth: number;
  columnsCount: number;
  lockedParam?: 'wrapperWidth' | 'entryWidth' | 'horizontalGap' | null;
};

type GridSettings = {
  type: 'a' | 'b' | 'c' | 'd' | 'e' | 'f';
  gridLayout: GridLayoutConfig;
  textBoxWidth: number;
  verticalGap: number;
  entriesCount: number;
  lightbox: 'on' | 'off';
  imageDisplay: {
    display: 'fit' | 'cover';
    ratioValue: '1:1' | '2:3' | '3:4' | '4:5' | '16:9';
    reversed: boolean;
  };
  lightboxImageDisplay?: 'fit' | 'cover' | { display?: 'fit' | 'cover' };
  slider: 'on' | 'off';
  sliderTiming: number;
  direction: 'horizontal' | 'vertical' | 'random',
  transition: 'fade' | 'slide',
  showText: 'always' | 'on hover';
  alignEntries: 'on' | 'off';
  align?: 'top' | 'center' | 'bottom';
  titleMarginTop: number;
  subtitleMarginTop: number;
  titleColor: string;
  subtitleColor: string;
  lightboxCounterColor: string;
  titleFontFamily: string;
  titleFontSettings?: { fontWeight: number; fontStyle: string };
  titleFontSize?: number;
  titleLineHeight?: number;
  titleLetterSpacing?: number;
  titleWordSpacing?: number;
  titleTextAppearance?: TextStyles['textAppearance'];
  subtitleFontFamily: string;
  subtitleFontSettings?: { fontWeight: number; fontStyle: string };
  subtitleFontSize?: number;
  subtitleLineHeight?: number;
  subtitleLetterSpacing?: number;
  subtitleWordSpacing?: number;
  subtitleTextAppearance?: TextStyles['textAppearance'];
  lightboxCounterFontFamily: string;
  lightboxCounterFontSettings?: { fontWeight: number; fontStyle: string };
  lightboxCounterFontSize?: number;
  lightboxCounterLineHeight?: number;
  lightboxCounterLetterSpacing?: number;
  lightboxCounterWordSpacing?: number;
  lightboxCounterTextAppearance?: TextStyles['textAppearance'];
};

type ColorKeys =
  | 'titleColor'
  | 'subtitleColor'
  | 'lightboxCounterColor'

const COLOR_VAR_MAP: Record<ColorKeys, string> = {
  titleColor: 'title-color',
  subtitleColor: 'subtitle-color',
  lightboxCounterColor: 'lightbox-counter-color',
};

const STATE_KEYS = ['hover', 'focus', 'filled', 'success', 'error'] as const;
`,iQ={fontSettings:{type:"object",display:{type:"font-settings-weight"},properties:{fontWeight:{type:"number"},fontStyle:{type:"string"}}}},i0={type:"object",version:1,content:{type:"array",settings:{addItemWithoutImage:!0,allowsVideo:!0},display:{type:"array"},items:{type:"object",properties:{title:{type:"string",label:"Title",placeholder:"Add Title...",display:{type:"text-input"}},subtitle:{type:"string",label:"Subtitle",placeholder:"Add Subtitle...",display:{type:"text-input"}},gallery:{type:"array",label:"Gallery",display:{type:"media-pair-list-input"},items:{type:"object",properties:{media:{type:"array",items:{type:"object",properties:{url:{type:"string"},name:{type:"string"},type:{type:"string",enum:["image","video"]},objectFit:{type:"string",enum:["cover","contain"]}}}}}}},link:{type:"string",label:"Link",placeholder:"Add link...",display:{type:"text-input"}}},required:["gallery"]},default:[{title:"Flying Over the Old Town",subtitle:"Leica M6 / SUMMICRON-M 50mm F2/ PORTRA 400",gallery:[{media:[{url:"https://cdn.cntrl.site/component-assets/grid(1).webp",name:"",objectFit:"cover"},{url:"",name:"",objectFit:"cover"}]}],link:""},{title:"Doors of Matera",subtitle:"Leica M6 / SUMMICRON-M 50mm F2/ PORTRA 400",gallery:[{media:[{url:"https://cdn.cntrl.site/component-assets/grid(2).webp",name:"",objectFit:"cover"},{url:"",name:"",objectFit:"cover"}]}],link:""},{title:"Cattedrale di Santa Maria",subtitle:"Leica M6 / SUMMICRON-M 50mm F2/ PORTRA 400",gallery:[{media:[{url:"https://cdn.cntrl.site/component-assets/grid(3).webp",name:"",objectFit:"cover"},{url:"",name:"",objectFit:"cover"}]}],link:""},{title:"City Through the Cracks",subtitle:"Leica M6 / SUMMICRON-M 50mm F2/ PORTRA 400",gallery:[{media:[{url:"https://cdn.cntrl.site/component-assets/grid(4).webp",name:"",objectFit:"cover"},{url:"",name:"",objectFit:"cover"}]}],link:""},{title:"Private Stone Gardens",subtitle:"Leica M6 / SUMMICRON-M 50mm F2/ PORTRA 400",gallery:[{media:[{url:"https://cdn.cntrl.site/component-assets/grid(5).webp",name:"",objectFit:"cover"},{url:"",name:"",objectFit:"cover"}]},{media:[{url:"https://cdn.cntrl.site/component-assets/grid(6).webp",name:"",objectFit:"cover"},{url:"",name:"",objectFit:"cover"}]},{media:[{url:"https://cdn.cntrl.site/component-assets/grid(7).webp",name:"",objectFit:"cover"},{url:"",name:"",objectFit:"cover"}]}],link:""},{title:"Leaving the Old Town",subtitle:"Leica M6 / SUMMICRON-M 50mm F2/ PORTRA 400",gallery:[{media:[{url:"https://cdn.cntrl.site/component-assets/grid(8).webp",name:"",objectFit:"cover"},{url:"",name:"",objectFit:"cover"}]}],link:""},{title:"Under the Sun",subtitle:"Leica M6 / SUMMICRON-M 50mm F2/ PORTRA 400",gallery:[{media:[{url:"https://cdn.cntrl.site/component-assets/grid(9).webp",name:"",objectFit:"cover"},{url:"",name:"",objectFit:"cover"}]}],link:""},{title:"Citygates View",subtitle:"Leica M6 / SUMMICRON-M 50mm F2/ PORTRA 400",gallery:[{media:[{url:"https://cdn.cntrl.site/component-assets/grid(10).webp",name:"",objectFit:"cover"},{url:"",name:"",objectFit:"cover"}]}],link:""},{title:"Around the City",subtitle:"Leica M6 / SUMMICRON-M 50mm F2/ PORTRA 400",gallery:[{media:[{url:"https://cdn.cntrl.site/component-assets/grid(11).webp",name:"",objectFit:"cover"},{url:"",name:"",objectFit:"cover"}]}],link:""}]},settings:{sizing:"auto auto",properties:{type:{type:"string",scope:"layout",title:"",display:{type:"radio-group"},enum:["a","b","c","d","e","f"]},gridLayout:{type:"grid-layout",scope:"layout",display:{type:"grid-layout"},gridParams:{type:"object",properties:{columnsCount:{type:"number",title:"Columns",min:1,max:4},wrapperWidth:{type:"number",title:"Width",min:0},entryWidth:{type:"number",title:"Entry",min:0},horizontalGap:{type:"number",title:"Gutter",min:0}}}},textBoxWidth:{type:"number",scope:"layout",title:"Text Width (%)",display:{type:"percentage-input"},min:0},verticalGap:{type:"number",scope:"layout",title:"Vertical Gap",display:{type:"numeric-input"},min:0,max:1e3},showText:{type:"boolean",scope:"common",title:"Show text",display:{type:"toggle-cycle",enum:["always","on hover"]}},alignEntries:{type:"boolean",scope:"layout",title:"Align entries",display:{type:"toggle-cycle",enum:["on","off"]}},align:{type:"string",scope:"layout",title:"Align",display:{type:"toggle-cycle",enum:["top","center","bottom"]}},entriesCount:{type:"number",scope:"layout",title:"Entries #",display:{type:"toggle-numeric-input",enum:["auto","fixed"]},min:1},lightbox:{type:"boolean",scope:"common",title:"Lightbox",display:{type:"toggle-cycle",enum:["on","off"]}},imageDisplay:{type:"object",scope:"common",title:"Display",display:{type:"image-ratio-control"},properties:{display:{type:"string",enum:["fit","cover"]},ratioValue:{type:"string",enum:["1:1","2:3","3:4","4:5","16:9"]},reversed:{type:"boolean"}}},lightboxImageDisplay:{type:"string",scope:"common",title:"Display",display:{type:"toggle-cycle",enum:["fit","cover"]}},slider:{type:"boolean",scope:"common",title:"Slider",display:{type:"toggle-cycle",enum:["on","off"]}},sliderTiming:{type:"number",scope:"common",title:"Timing (Sec)",display:{type:"common-numeric-input"},min:1,max:10},direction:{type:"string",scope:"common",title:"Direction",display:{type:"toggle-cycle",enum:["horizontal","vertical","random"],enabled:!0}},transition:{type:"string",scope:"common",title:"Transition",display:{type:"toggle-cycle",enum:["fade","slide"]}},titleMarginTop:{type:"number",scope:"layout",title:"Title margin top",min:0,max:100,display:{type:"range-control"}},subtitleMarginTop:{type:"number",scope:"layout",title:"Subtitle margin top",min:0,max:100,display:{type:"range-control"}},titleColor:{type:"string",scope:"common",title:"Title Entry",display:{type:"palette-color-picker"}},subtitleColor:{type:"string",scope:"common",title:"Subtitle Entry",display:{type:"palette-color-picker"}},lightboxCounterColor:{type:"string",scope:"common",title:"Counter Lightbox",display:{type:"palette-color-picker"}},titleFontFamily:{type:"string",scope:"common",title:"Font family",display:{type:"font-family-select"}},titleFontSettings:{...iQ.fontSettings,scope:"common",title:"",display:{type:"font-settings-weight"}},titleFontSize:{type:"number",scope:"layout",title:"Input Font Size",display:{type:"font-size"}},titleLineHeight:{type:"number",scope:"layout",title:"Input Line Height",display:{type:"line-height-input"}},titleLetterSpacing:{type:"number",scope:"layout",title:"Input Letter Spacing",display:{type:"letter-spacing-input"}},titleWordSpacing:{type:"number",scope:"layout",title:"Input Word Spacing",display:{type:"word-spacing-input"}},titleTextAppearance:{type:"object",scope:"layout",title:"Input Text Appearance",display:{type:"text-appearance"}},subtitleFontFamily:{type:"string",scope:"common",title:"Font family",display:{type:"font-family-select"}},subtitleFontSettings:{...iQ.fontSettings,scope:"common",title:"",display:{type:"font-settings-weight"}},subtitleFontSize:{type:"number",scope:"layout",title:"Subtitle Font Size",display:{type:"font-size"}},subtitleLineHeight:{type:"number",scope:"layout",title:"Subtitle Line Height",display:{type:"line-height-input"}},subtitleLetterSpacing:{type:"number",scope:"layout",title:"Subtitle Letter Spacing",display:{type:"letter-spacing-input"}},subtitleWordSpacing:{type:"number",scope:"layout",title:"Subtitle Word Spacing",display:{type:"word-spacing-input"}},subtitleTextAppearance:{type:"object",scope:"layout",title:"Subtitle Text Appearance",display:{type:"text-appearance"}},lightboxCounterFontFamily:{type:"string",scope:"common",title:"Font family",display:{type:"font-family-select"}},lightboxCounterFontSettings:{...iQ.fontSettings,scope:"common",title:"",display:{type:"font-settings-weight"}},lightboxCounterFontSize:{type:"number",scope:"layout",title:"Input Font Size",display:{type:"font-size"}},lightboxCounterLineHeight:{type:"number",scope:"layout",title:"Input Line Height",display:{type:"line-height-input"}},lightboxCounterLetterSpacing:{type:"number",scope:"layout",title:"Input Letter Spacing",display:{type:"letter-spacing-input"}},lightboxCounterWordSpacing:{type:"number",scope:"layout",title:"Input Word Spacing",display:{type:"word-spacing-input"}},lightboxCounterTextAppearance:{type:"object",scope:"layout",title:"Input Text Appearance",display:{type:"text-appearance"}}},defaults:{lightbox:"on",imageDisplay:{display:"cover",ratioValue:"2:3",reversed:!1},lightboxImageDisplay:"fit",slider:"on",sliderTiming:3,direction:"horizontal",transition:"fade",showText:"always",alignEntries:"off",align:"top",titleColor:"#000000",subtitleColor:"#000000",lightboxCounterColor:"#DEDDDD",titleFontFamily:"Arial",titleFontSettings:{fontWeight:400,fontStyle:"normal"},titleLetterSpacing:0,titleWordSpacing:0,titleTextAppearance:{textTransform:"uppercase",textDecoration:"none",fontVariant:"normal"},subtitleFontFamily:"Goudy Bookletter 1911",subtitleFontSettings:{fontWeight:400,fontStyle:"normal"},subtitleLetterSpacing:0,subtitleWordSpacing:0,subtitleTextAppearance:{textTransform:"none",textDecoration:"none",fontVariant:"normal"},lightboxCounterFontFamily:"Goudy Bookletter 1911",lightboxCounterFontSettings:{fontWeight:400,fontStyle:"normal"},lightboxCounterLetterSpacing:0,lightboxCounterWordSpacing:0,lightboxCounterTextAppearance:{textTransform:"none",textDecoration:"none",fontVariant:"normal"}},layoutDefaults:{m:{type:"b",gridLayout:{entryWidth:.8,horizontalGap:.0533,wrapperWidth:1,columnsCount:1,lockedParam:null},textBoxWidth:100,verticalGap:.266,entriesCount:0,titleMarginTop:.02,subtitleMarginTop:.02,titleStroke:.003,titleCorners:.192,subtitlePadding:{top:.0373,right:.0373,bottom:.0373,left:.0373},titlePadding:{top:.0373,right:.0373,bottom:.0373,left:.0373},titleFontSize:.1066,titleLineHeight:.0853,subtitleFontSize:.056,subtitleLineHeight:.0506,lightboxCounterFontSize:.0373,lightboxCounterLineHeight:.0373},t:{type:"b",gridLayout:{entryWidth:.0833,horizontalGap:.26041,wrapperWidth:1,columnsCount:3,lockedParam:null},textBoxWidth:250,verticalGap:.09722,entriesCount:0,titleMarginTop:.01953125,subtitleMarginTop:.008,titleStroke:.001,titleCorners:.05,subtitlePadding:{top:.01,right:.01,bottom:.01,left:.01},titlePadding:{top:.01,right:.01,bottom:.01,left:.01},titleFontSize:.027,titleLineHeight:.0222,titleLetterSpacing:-.00118,subtitleFontSize:.015625,subtitleLineHeight:.018229166666666668,lightboxCounterFontSize:.01,lightboxCounterLineHeight:.01},d:{type:"b",gridLayout:{entryWidth:.0833,horizontalGap:.25,wrapperWidth:1,columnsCount:3,lockedParam:null},textBoxWidth:200,verticalGap:.09722,entriesCount:0,titleMarginTop:.008,subtitleMarginTop:.008,titleStroke:.001,titleCorners:.05,subtitlePadding:{top:.01,right:.01,bottom:.01,left:.01},titlePadding:{top:.01,right:.01,bottom:.01,left:.01},titleFontSize:.027,titleLineHeight:.0222,titleLetterSpacing:-.00118,subtitleFontSize:.01,subtitleLineHeight:.01,lightboxCounterFontSize:.01,lightboxCounterLineHeight:.01}},displayRules:[{if:{name:"transition",value:"fade"},then:{name:"properties.direction.display.enabled",value:!1}},{if:{name:"lightbox",value:"off"},then:{name:"properties.lightboxImageDisplay.display.enabled",value:!1}},{if:{name:"imageDisplay.display",value:"cover"},then:{name:"properties.align.display.enabled",value:!1}}],layout:["__componentName__","name","type","gridLayout","textBoxWidth","verticalGap","showText","alignEntries","align","entriesCount","lightbox","imageDisplay","lightboxImageDisplay","slider","sliderTiming","direction","transition","transition","titleMarginTop","subtitleMarginTop"]},panels:[{id:"general",icon:"settings",title:"General",tooltip:"General Settings",layout:["__componentName__","type",{type:"row",title:"Grid",items:[{type:"group",title:"",items:["gridLayout"]}]},{type:"row",title:"",items:["textBoxWidth","verticalGap"]},{type:"row",title:"",items:["entriesCount","showText"]},{type:"row",title:"",items:["alignEntries","align"]}]},{id:"imageSettings",icon:"cover",title:"Image settings",tooltip:"Image settings",layout:["__componentName__",{type:"row",title:"Image",items:["imageDisplay"]},{type:"row",title:"Lightbox",items:["lightbox","lightboxImageDisplay"]},{type:"row",title:"Slider",items:[{type:"group",title:"",items:["slider","direction"]},{type:"group",title:"",items:["sliderTiming","transition"]}]}]},{id:"typeStyle",icon:"text-icon",title:"Type Style",tooltip:"Typography",layout:["__componentName__",{type:"group",title:"Title",items:["titleFontFamily","titleFontSettings",{type:"row",items:["titleFontSize","titleLineHeight","titleLetterSpacing","titleWordSpacing"]},"titleTextAppearance"]},{type:"group",title:"Subtitle",items:["subtitleFontFamily","subtitleFontSettings",{type:"row",items:["subtitleFontSize","subtitleLineHeight","subtitleLetterSpacing","subtitleWordSpacing"]},"subtitleTextAppearance"]},{type:"group",title:"Lightbox Counter",items:["lightboxCounterFontFamily","lightboxCounterFontSettings",{type:"row",items:["lightboxCounterFontSize","lightboxCounterLineHeight","lightboxCounterLetterSpacing","lightboxCounterWordSpacing"]},"lightboxCounterTextAppearance"]}]}],paletteBookmark:{items:["titleColor","subtitleColor","lightboxCounterColor"],panelIds:["general","typeStyle"],stateItems:{default:["titleColor","subtitleColor","lightboxCounterColor"]}}},i1="cntrl-lightbox-journal",i2=`${i1}-`,i3=e=>`${i1}-${e}`,i5=e=>e===i1||e.startsWith(i2),i4=e=>{if(!e)return null;let t=Number.parseInt(e,10);return Number.isFinite(t)&&t>=1?t:null},i9=e=>{if(typeof window>"u")return null;let t=new URLSearchParams(window.location.search);if(e){let i=i4(t.get(i3(e)));if(i)return i}let i=i4(t.get(i1));if(i)return i;for(let[e]of t){if(!e.startsWith(i2))continue;let t=e.slice(i2.length);if(!/^\d+$/.test(t))continue;let i=Number.parseInt(t,10);if(Number.isFinite(i)&&i>=1)return i}return null},i6=(e,t)=>{if(t<=0)return -1;let i=e-1;return i<0||i>=t?-1:i},i7=(e,t,i=!0)=>{if(typeof window>"u")return;let n=new URL(window.location.href);[...n.searchParams.keys()].forEach(e=>{i5(e)&&n.searchParams.delete(e)}),t?n.searchParams.set(i3(t),String(e)):n.searchParams.set(i1,String(e));let o=`${n.pathname}${n.search}${n.hash}`;window.history[i?"replaceState":"pushState"](window.history.state,"",o)},i8=e=>{if(typeof window>"u")return!1;let t=new URLSearchParams(window.location.search);return e?t.has(i3(e)):[...t.keys()].some(e=>i5(e))},ne=e=>`max(${e}, 20px)`,nt=e=>((null==e?void 0:e.image)??[]).slice(0,2),ni=e=>e.reduce((e,t)=>e+nt(t).length,0),nn=(e,t)=>"B"===t?e.flatMap((e,t)=>nt(e).map(i=>({entry:e,entryIndex:t,images:[i]}))):e.map((e,t)=>({entry:e,entryIndex:t,images:nt(e)})),no=e=>e?`${e.title1??""}|${e.title2??""}|${e.title3??""}`:"",nr={title1Width:.13,title2Width:.13,title3Width:.14},na=(e,t,i,n,o)=>{let r=[];return t.title1&&r.push({prefix:"title1",widthKey:"title1Width",className:`${e}-title1`,style:i,text:t.title1}),t.title2&&r.push({prefix:"title2",widthKey:"title2Width",marginLeftKey:"title2MarginLeft",className:`${e}-title2`,style:n,text:t.title2}),t.title3&&r.push({prefix:"title3",widthKey:"title3Width",marginLeftKey:"title3MarginLeft",className:`${e}-title3`,style:o,text:t.title3}),r},nl=(e,t)=>{if(e<=0)return[];let i=t.slice(0,e),n=i.reduce((e,t)=>e+t,0);if(n<=1)return i;let{widths:o}=[...i].reverse().reduce(({overflow:e,widths:t},i)=>{if(e<=0||i<=0)return{overflow:e,widths:[i,...t]};let n=Math.min(e,i);return{overflow:e-n,widths:[i-n,...t]}},{overflow:n-1,widths:[]});return o},ns=(e,t)=>nl(e,t),nc=(e,t)=>Math.max(1-t.filter((t,i)=>i!==e).reduce((e,t)=>e+t,0),0),nd=(e,t)=>{let i=e.map(e=>t[e.widthKey]??0);return{resolved:nl(e.length,i),effective:ns(e.length,i)}},nu=(e,t,i,n)=>e.slice(0,n).reduce((e,n,o)=>e+(null!=n&&n.marginLeftKey?i[n.marginLeftKey]??0:0)+(t[o]??0),0),np=(e,t,i,n)=>e.slice(0,n+1).reduce((e,n,o)=>e+(null!=n&&n.marginLeftKey?i[n.marginLeftKey]??0:0)+(t[o]??0),0),nm=["title1","title2","title3","count"],ng=(e,t)=>`${e}${t.charAt(0).toUpperCase()}${t.slice(1)}`,nh={title1:"1",title2:"2",title3:"3",count:"Count"},nf=e=>[ng(e,"fontFamily"),ng(e,"fontSettings"),{type:"row",items:[ng(e,"fontSize"),ng(e,"lineHeight"),ng(e,"letterSpacing"),ng(e,"wordSpacing")]},ng(e,"textAlign"),ng(e,"textAppearance")],ny={title1:"title1Color",title2:"title2Color",title3:"title3Color",count:"countColor"},nv={title1:.02,title2:.02,title3:.02,count:.017},nx=(e,t)=>{let i=i=>e[ng(t,i)];return{fontFamily:i("fontFamily")??"Arial",fontSettings:i("fontSettings")??{fontWeight:400,fontStyle:"normal"},fontSize:i("fontSize"),lineHeight:i("lineHeight"),letterSpacing:i("letterSpacing")??0,wordSpacing:i("wordSpacing")??0,textAlign:i("textAlign")??"left",textAppearance:i("textAppearance"),color:e[ny[t]]}},nb=(e,t,i)=>{var n,o;return t2({fontSettings:{fontFamily:t.fontFamily,fontWeight:(null==(n=t.fontSettings)?void 0:n.fontWeight)??400,fontStyle:(null==(o=t.fontSettings)?void 0:o.fontStyle)??"normal"},fontSize:t.fontSize??nv[e],lineHeight:t.lineHeight,letterSpacing:t.letterSpacing,wordSpacing:t.wordSpacing,textAlign:t.textAlign,textAppearance:t.textAppearance,color:t.color??"#ffffff"},i)};function nw({prefix:e,entry:t,settings:i,isEditor:r,isEditMode:l,isPreviewMode:s,onClose:c}){let{title1Width:d,title2Width:u,title3Width:p,title1MarginLeft:m=0,title2MarginLeft:g=0,title3MarginLeft:h=0,titleRowMarginBottom:f=0,titleHeaderLayout:y="desktop",contentMarginTop:v=0,iconMarginRight:x=0,closeIcon:b=null,closeIconMaxWidth:w=0,closeIconColor:$="#000000",closeIconHoverColor:S="#cccccc"}=i,C=a.scalingValue(v,r),P=a.scalingValue(x,r),L=a.scalingValue(f,r),T="mobile"===y,M=nb("title1",nx(i,"title1"),r),E=nb("title2",nx(i,"title2"),r),I=nb("title3",nx(i,"title3"),r),k=o.useMemo(()=>({title1Width:d??nr.title1Width,title2Width:u??nr.title2Width,title3Width:p??nr.title3Width}),[d,u,p]),R=o.useMemo(()=>({title2MarginLeft:g,title3MarginLeft:h}),[g,h]),F=o.useMemo(()=>na(e,t,M,E,I),[e,t,M,E,I]),A=o.useMemo(()=>F.map(e=>k[e.widthKey]),[F,k]),W=o.useMemo(()=>nl(F.length,A),[F.length,A]),H=o.useMemo(()=>ns(F.length,A),[F.length,A]),_=o.useMemo(()=>F.filter(e=>"title1"===e.prefix),[F]),N=o.useMemo(()=>F.filter(e=>"title2"===e.prefix||"title3"===e.prefix),[F]),j=o.useMemo(()=>nd(_,k),[_,k]),z=o.useMemo(()=>nd(N,k),[N,k]),B=!!(t.title1||t.title2||t.title3),O=null!==b;if(!(B||O))return null;let D=(m??0)>0||l,V=(e,t)=>{let i=F.findIndex(t=>t.prefix===e.prefix);if(!T||"single-row"===t)return{effectiveWidth:H[i]??0,resolvedWidth:W[i]??0,maxWidth:nc(i,W)};if("two-row-top"===t){let t=_.findIndex(t=>t.prefix===e.prefix);return{effectiveWidth:j.effective[t]??0,resolvedWidth:j.resolved[t]??0,maxWidth:nc(t,j.resolved)}}let n=N.findIndex(t=>t.prefix===e.prefix);return{effectiveWidth:z.effective[n]??0,resolvedWidth:z.resolved[n]??0,maxWidth:nc(n,z.resolved)}},q=(e,t,i)=>{if(!T||"single-row"===i){let i=e.findIndex(e=>e.prefix===t.prefix),n=e.map(e=>k[e.widthKey]),o=nl(e.length,n);return{effectiveWidth:ns(e.length,n)[i]??0,resolvedWidth:o[i]??0,maxWidth:nc(i,o)}}if("two-row-top"===i){let i=e.filter(e=>"title1"===e.prefix),n=i.findIndex(e=>e.prefix===t.prefix),{resolved:o,effective:r}=nd(i,k);return{effectiveWidth:r[n]??0,resolvedWidth:o[n]??0,maxWidth:nc(n,o)}}let n=e.filter(e=>"title2"===e.prefix||"title3"===e.prefix),o=n.findIndex(e=>e.prefix===t.prefix),{resolved:r,effective:a}=nd(n,k);return{effectiveWidth:a[o]??0,resolvedWidth:r[o]??0,maxWidth:nc(o,r)}},G=e=>N.slice(0,e).reduce((e,t,i)=>e+(t.marginLeftKey?R[t.marginLeftKey]??0:0)+(z.resolved[i]??0),0),K=(t,i,o)=>{let s=t.marginLeftKey?R[t.marginLeftKey]??0:0,{effectiveWidth:c,resolvedWidth:d,maxWidth:u}=o??V(t,i),p=Math.max(s,.004),m=l&&"two-row-top"===i;return n.jsxs("div",{className:`${e}-title-cell`,"data-title":t.prefix,style:{width:a.scalingValue(c,r),...s>0?{marginLeft:a.scalingValue(s,r)}:{}},children:[n.jsx("p",{className:t.className,style:t.style,children:t.text}),m&&t.marginLeftKey?n.jsx("div",{"data-controls":t.marginLeftKey,"data-controls-axis":"x","data-controls-min":"0","data-controls-max-fraction":String(d),style:{position:"absolute",top:0,left:a.scalingValue(-s,r),width:a.scalingValue(p,r),height:"100%",pointerEvents:"auto"}}):null,m?n.jsx("div",{"data-controls":t.widthKey,"data-controls-axis":"x","data-controls-max-fraction":String(u),"data-controls-variant":"column-width",className:`${e}-title-resize-handle`,style:{position:"absolute",top:0,right:a.scalingValue(-.004/2,r),width:a.scalingValue(.004,r),height:"100%",pointerEvents:"auto"}}):null]},t.className)},U=(e="two-row")=>{let t=F.findIndex(e=>"title1"===e.prefix),i=t>=0?W[t]:k.title1Width,o="two-row"===e&&l;return n.jsx("div",{...o?{"data-controls":"title1MarginLeft","data-controls-axis":"x","data-controls-min":"0","data-controls-max-fraction":String(i)}:{},style:{width:a.scalingValue(m??0,r),flexShrink:0,alignSelf:"stretch",...o?{pointerEvents:"auto"}:{}}})},X=()=>n.jsx("span",{className:`${e}-titles-baseline-strut`,style:M,"aria-hidden":"true",children:"\xa0"}),Y=()=>O?n.jsx("div",{className:`${e}-titles-row-header-controls`,children:n.jsxs("div",{className:`${e}-close-icon`,style:{width:a.scalingValue(w??0,r),height:a.scalingValue(w??0,r),marginRight:P,"--close-icon-hover-color":S},children:[n.jsx("button",{type:"button",className:`${e}-close-icon-inner`,onClick:e=>{e.stopPropagation(),null==c||c()},"aria-label":"Close",children:n.jsx(t4,{url:b??"",fill:$,hoverFill:r&&!s?$:S,className:`${e}-close-icon-img`})}),l&&n.jsx("div",{"data-controls":"iconMarginRight","data-controls-axis":"x","data-controls-reverse":"",className:`${e}-control`,style:{position:"absolute",top:0,left:"100%",width:P,height:"100%",pointerEvents:"auto"}})]})}):null,J=t=>n.jsx("div",{className:`${e}-titles-row-titles`,children:n.jsx("div",{className:`${e}-titles-stack`,children:t})}),Z=()=>!l||T?null:n.jsxs(n.Fragment,{children:[(()=>{let e=T?-1:F.findIndex(e=>"title1"===e.prefix),t=!T&&(l||(m??0)>0)?(()=>{let t=e>=0?W[e]:k.title1Width,i=Math.max(m??0,.004);return n.jsx("div",{"data-controls":"title1MarginLeft","data-controls-axis":"x","data-controls-min":"0","data-controls-max-fraction":String(t),style:{position:"absolute",top:0,left:0,width:a.scalingValue(i,r),height:"100%",pointerEvents:"auto"}},"title1MarginLeft")})():null,i=F.flatMap((e,t)=>{if(!e.marginLeftKey)return[];let i=R[e.marginLeftKey]??0,o=nu(F,W,R,t)+(T?0:m??0),l=Math.max(i,.004);return n.jsx("div",{"data-controls":e.marginLeftKey,"data-controls-axis":"x","data-controls-min":"0","data-controls-max-fraction":String(W[t]),style:{position:"absolute",top:0,left:a.scalingValue(o,r),width:a.scalingValue(l,r),height:"100%",pointerEvents:"auto"}},e.marginLeftKey)});return t?[t,...i]:i})(),F.map((t,i)=>{let o=nc(i,W),l=np(F,W,R,i)+(T?0:m??0)-.002;return n.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none"},children:n.jsx("div",{"data-controls":t.widthKey,"data-controls-axis":"x","data-controls-max-fraction":String(o),"data-controls-variant":"column-width",className:`${e}-title-resize-handle`,style:{position:"absolute",top:0,left:a.scalingValue(l,r),width:a.scalingValue(.004,r),height:"100%",pointerEvents:"auto"}})},`${t.widthKey}-junction`)})]}),Q=!!(t.title2||t.title3||(f??0)>0||l);return n.jsxs("div",{className:`${e}-lightbox-overlay-content`,children:[n.jsx("div",{"data-controls":l?"contentMarginTop":void 0,className:l?`${e}-control`:void 0,style:{height:C,width:"100%"}}),n.jsx("div",{style:{display:"flex",flexDirection:"row",width:"100%",...T?{flex:1,minHeight:0}:{}},children:n.jsx("div",{className:`${e}-lightbox-content-area${T?` ${e}-lightbox-content-area-stacked`:""}`,children:n.jsx("div",{className:`${e}-text-bar-cell${T?` ${e}-text-bar-cell-stacked`:""}`,style:T?void 0:{flex:1,minWidth:0,width:"100%"},children:T?n.jsxs("div",{style:{position:"relative",width:"100%",alignSelf:"stretch",display:"flex",flexDirection:"column",minHeight:0,...Q?{flex:1,height:"100%"}:{}},children:[n.jsx("div",{className:`${e}-titles-row-two-row`,style:Q?void 0:{flex:"0 0 auto",height:"auto"},children:((t,i=!1)=>{let o;return n.jsxs(n.Fragment,{children:[(o=(t=>{let i=na(e,t,M,E,I),n=i.find(e=>"title1"===e.prefix);return n?K(n,"two-row-top",q(i,n,"two-row-top")):null})(t),n.jsxs("div",{className:`${e}-titles-row-top`,children:[O||B?X():null,D?U("two-row"):null,J(o),Y()]})),((t,i=!1)=>{let o=na(e,t,M,E,I),s=o.filter(e=>"title2"===e.prefix||"title3"===e.prefix),c=l&&i;return s.length>0||c||(f??0)>0?n.jsxs("div",{className:`${e}-titles-row-bottom-wrap`,children:[s.length>0?n.jsxs("div",{className:`${e}-titles-row-bottom`,children:[n.jsx("div",{className:`${e}-titles-stack`,children:s.map(e=>K(e,"two-row-bottom",q(o,e,"two-row-bottom")))}),i&&l?n.jsxs(n.Fragment,{children:[N.flatMap((e,t)=>{if(!e.marginLeftKey)return[];let i=R[e.marginLeftKey]??0,o=G(t),l=Math.max(i,.004),{resolvedWidth:s}=V(e,"two-row-bottom");return n.jsx("div",{"data-controls":e.marginLeftKey,"data-controls-axis":"x","data-controls-min":"0","data-controls-max-fraction":String(s),style:{position:"absolute",top:0,left:a.scalingValue(o,r),width:a.scalingValue(l,r),height:"100%",pointerEvents:"auto"}},e.marginLeftKey)}),N.map((t,i)=>{let{maxWidth:o}=V(t,"two-row-bottom"),l=(e=>{let t=N[e];return G(e)+(t.marginLeftKey?R[t.marginLeftKey]??0:0)+(z.resolved[e]??0)})(i)-.002;return n.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none"},children:n.jsx("div",{"data-controls":t.widthKey,"data-controls-axis":"x","data-controls-max-fraction":String(o),"data-controls-variant":"column-width",className:`${e}-title-resize-handle`,style:{position:"absolute",top:0,left:a.scalingValue(l,r),width:a.scalingValue(.004,r),height:"100%",pointerEvents:"auto"}})},`${t.widthKey}-junction`)})]}):null]}):null,(f??0)>0||c?n.jsx("div",{"data-controls":c?"titleRowMarginBottom":void 0,"data-controls-axis":c?"y":void 0,"data-controls-reverse":c?"":void 0,className:c?`${e}-control`:void 0,style:{height:L,width:"100%",flexShrink:0,pointerEvents:c?"auto":"none"}}):null]}):null})(t,i)]})})(t,!0)}),Z()]}):n.jsxs("div",{className:`${e}-titles-row ${e}-titles-row-header`,style:{width:"100%",position:"relative"},children:[O||B?X():null,D?U("single-row"):null,B?J((t=>{let i=na(e,t,M,E,I);return n.jsx(n.Fragment,{children:i.map(e=>K(e,"single-row",q(i,e,"single-row")))})})(t)):n.jsx("div",{className:`${e}-titles-row-titles`,"aria-hidden":"true"}),Y(),Z()]})})})})]})}let n$={url:"",name:"",objectFit:"cover"},nS="cubic-bezier(0.22, 1, 0.36, 1)";function nC(e,t){if("contain"===t&&e instanceof HTMLImageElement){let t=is(e);return{left:t.x,top:t.y,width:t.width,height:t.height}}let i=e.getBoundingClientRect();return{left:i.left,top:i.top,width:i.width,height:i.height}}function nP(e,t,i){var n;if(e.length<=1)return null;let o=(t+i+e.length)%e.length;return(null==(n=e[o])?void 0:n.items[0])??null}function nL(e,t,i){if(e.length<=2)return null;let n=(t+i+e.length)%e.length;return nP(e,n,i)}function nT(e){return .03*e.width}let nM={left:0,top:0,width:"u">typeof window?window.innerWidth:1440,height:"u">typeof window?window.innerHeight:900};function nE(e,t){return{left:e.left-t.left,top:e.top-t.top,width:e.width,height:e.height}}function nI(e){let t=e.getBoundingClientRect();return{width:t.width,height:t.height,left:t.left,top:t.top}}function nk(e,t,i){let n=e.getBoundingClientRect(),o=n.width,r=n.height,a=t/i;if(a>o/r){let e=o/a;return{width:o,height:e,left:n.left,top:n.top+(r-e)/2}}let l=r*a;return{width:l,height:r,left:n.left+(o-l)/2,top:n.top}}function nR({mediaList:e}){return 0===e.length?null:n.jsx("div",{"aria-hidden":!0,style:{position:"absolute",width:0,height:0,overflow:"hidden",opacity:0,pointerEvents:"none"},children:e.map(e=>nj(e)?n.jsx("video",{src:e.url,preload:"auto",muted:!0,playsInline:!0},e.url):n.jsx("img",{src:e.url,alt:""},e.url))})}function nF(e,t,i){let{width:n,height:o,top:r}=e,{left:a,width:l}=i,s=nT(i);return"left"===t?{left:a+s-n,top:r,width:n,height:o}:{left:a+l-s,top:r,width:n,height:o}}function nA(e,t,i){let n=nF(e,t,i);return{...n,left:2*n.left-e.left}}function nW(e,t,i,n){let o=nF(e,"left",n),r=nF(e,"right",n),a=nA(e,"left",n),l=nA(e,"right",n);if(1===i)switch(t){case"center":return{start:e,end:o};case"right-adjacent":return{start:r,end:e};case"left-adjacent":return{start:o,end:a};case"far-right":return{start:l,end:r};default:return{start:e,end:e}}switch(t){case"center":return{start:e,end:r};case"left-adjacent":return{start:o,end:e};case"right-adjacent":return{start:r,end:l};case"far-left":return{start:a,end:o};default:return{start:e,end:e}}}function nH(e){if(!Array.isArray(e)||0===e.length)return!1;let t=e[0];return null!==t&&"object"==typeof t&&"media"in t&&Array.isArray(t.media)}function n_(e){if(!e)return;if(nH(e))return e;if(!Array.isArray(e))return;let[t,i]=e,n=null!=t&&t.url?t:void 0,o=null!=i&&i.url?i:void 0;if(!(!n&&!o))return[{media:[o??n??n$,n??o??n$]}]}function nN(e){if(!Array.isArray(e)||0===e.length)return[];if(nH(e)){let t=[];for(let i of e){let e=function(e){let[t,i]=e.media;return null!=i&&i.url?i:null!=t&&t.url?t:null}(i);if(!e)continue;let n=function(e){let[t]=e.media;return null!=t&&t.url?t:null}(i);t.push({displayMedia:e,lightboxMedia:null!=n&&n.url?n:null})}return t}return e.filter(e=>null==e?void 0:e.url).map(e=>({displayMedia:e,lightboxMedia:e}))}function nj(e){return"video"===e.type||/\.(mp4|webm|ogg|mov)(\?|#|$)/i.test(e.url)}function nz({media:e,className:t,style:i,gridIndex:o,onMediaClick:r}){return nj(e)?n.jsx("video",{src:e.url,className:t,"data-hive-grid-index":o,style:{...i,cursor:r?"pointer":"default"},muted:!0,autoPlay:!0,loop:!0,playsInline:!0,preload:"auto",onClick:r}):n.jsx("img",{src:e.url,alt:e.name,className:t,"data-hive-grid-index":o,style:{...i,cursor:r?"pointer":"default"},onClick:r})}function nB({src:e,phase:t,onMediaElement:i,wrapperStyle:r,videoStyle:a,onLoadedMetadata:l,onTransitionEnd:s}){let c=o.useRef(null);return o.useEffect(()=>{let e=c.current;return null==i||i(e??null),()=>{null==e||e.pause(),null==i||i(null)}},[e,i]),n.jsx("div",{style:r,onTransitionEnd:s,children:n.jsx("video",{ref:c,src:e,controls:"open"===t,playsInline:!0,preload:"auto",onLoadedMetadata:l,onClick:e=>e.stopPropagation(),style:a},e)})}function nO({media:e,style:t,onTransitionEnd:i,onMeasure:o}){return nj(e)?n.jsx("video",{src:e.url,muted:!0,playsInline:!0,preload:"auto",style:t,onLoadedMetadata:t=>{let i=t.currentTarget;i.videoWidth>0&&i.videoHeight>0&&(null==o||o(e.url,i.videoWidth,i.videoHeight))},onTransitionEnd:i}):n.jsx("img",{src:e.url,alt:e.name,style:t,onLoad:t=>{let i=t.currentTarget;i.naturalWidth>0&&i.naturalHeight>0&&(null==o||o(e.url,i.naturalWidth,i.naturalHeight))},onTransitionEnd:i})}function nD({prefix:e,items:t,index:i,entry:r,settings:a,isEditor:l,isEditMode:s,isPreviewMode:c,canNavigate:d,lightboxEntries:u,entryIdx:p,layoutId:m,sourceRect:g,resolveCloseSourceRect:h,onClose:f,onPrev:y,onNext:v}){let x=o.useRef(null),b=o.useRef(null),w=o.useRef(null),$=o.useRef(new Map),[S,C]=o.useState(0),P=o.useRef(null),L=o.useRef(0),T=o.useRef(0),M=o.useRef("none"),E=o.useRef(!1),I=o.useRef(!1),k=o.useRef(!1),R=o.useRef(null),F=o.useRef(null),A=o.useRef(null),W=o.useRef(()=>{}),H=o.useRef(null),_=o.useRef(null),N=o.useRef(null),j=o.useRef(!1),[z,B]=o.useState(null),[O,D]=o.useState(nM),[V,q]=o.useState(0),[G,K]=o.useState("opening"),[U,X]=o.useState(0),[Y,J]=o.useState(0),[Z,Q]=o.useState(!1),[ee,et]=o.useState(null),[ei,en]=o.useState(null),[eo,er]=o.useState(null),[ea,el]=o.useState(!1),[es,ec]=o.useState(null),[ed,eu]=o.useState(!1),ep=o.useRef(!1),[em,eg]=o.useState(!1),[eh,ef]=o.useState(!1),ey=o.useRef(i),ev=o.useRef(void 0),ex=t[i],eb=!!ex&&nj(ex),ew=0!==Y||Z,e$=!s&&(!l||!!c),eS=d&&!s,eC=u.length>1,eP=o.useCallback((e,i)=>t.length<=1?null:t[(e+i+t.length)%t.length]??null,[t]),eL=eC?nP(u,p,-1):eP(i,-1),eT=eC?nP(u,p,1):eP(i,1),eM=-1===ee&&ew?eC&&null!==ei?nP(u,ei,-1):null!==eo?eP(eo,-1):null:null,eE=1===ee&&ew?eC&&null!==ei?nP(u,ei,1):null!==eo?eP(eo,1):null:null,eI=eM&&eM.url!==(null==eL?void 0:eL.url)?eM:null,ek=eE&&eE.url!==(null==eT?void 0:eT.url)?eE:null,eR=eL&&eS?(()=>{let e=eC?nL(u,p,-1):t.length>2?eP((i-1+t.length)%t.length,-1):null;return e&&e.url!==eL.url?e:null})():null,eF=eT&&eS?(()=>{let e=eC?nL(u,p,1):t.length>2?eP((i+1)%t.length,1):null;return e&&e.url!==eT.url?e:null})():null,eA=eI??eR,eW=ek??eF,eH=o.useCallback((e,t,i)=>{if(!e||!t||!i)return;let n=$.current,o=n.get(e);(null==o?void 0:o.width)===t&&(null==o?void 0:o.height)===i||(n.set(e,{width:t,height:i}),C(e=>e+1))},[]),e_=o.useCallback(e=>{var t;if(!(null!=e&&e.url))return null;let i=$.current.get(e.url);return t=b.current,t&&null!=i&&i.width&&null!=i&&i.height?nk(t,i.width,i.height):null},[S,V]),eN=o.useCallback(()=>{if(!ex)return;let e=e_(ex);if(e)return void B(e);let t=b.current;t&&B(nI(t))},[ex,e_]),ej=o.useCallback(e=>{if(eC){let t=u.length;en((p+e+t)%t),er(null);return}t.length>1&&(er((i+e+t.length)%t.length),en(null))},[eC,u.length,p,t.length,i]),ez=o.useCallback(e=>{k.current=e,Q(e)},[]),eB=o.useCallback(()=>{null!==R.current&&(window.clearTimeout(R.current),R.current=null)},[]),eO=o.useCallback(()=>{eB(),R.current=window.setTimeout(()=>{eB(),ez(!1)},682)},[eB,ez]),eD=o.useCallback(()=>{let e=x.current;if(!e)return void D({left:0,top:0,width:"u">typeof window?window.innerWidth:nM.width,height:"u">typeof window?window.innerHeight:nM.height});let t=e.getBoundingClientRect();D({left:t.left,top:t.top,width:t.width,height:t.height})},[]),eV=o.useCallback((e,t)=>{if(ew){if(em&&!Z)return`translate(${Y}px, 0px)`;if(Z&&null!==ee){let i=e_(e);if(!i)return;let{x:n,y:o}=function(e,t,i,n){let{start:o,end:r}=nW(e,t,i,n);return{x:r.left-o.left,y:r.top-o.top}}(i,t,ee,O);return`translate(${n}px, ${o}px)`}if(Z)return"translate(0px, 0px)"}},[ew,em,Z,Y,ee,O,e_]),eq=o.useCallback(()=>{let e=F.current;F.current=null,eB(),ez(!1),et(null),en(null),er(null),J(0),eg(!1),E.current=!1,T.current=0,M.current="none",-1===e?y():1===e&&v()},[eB,ez,y,v]),eG=o.useCallback(()=>{eB(),R.current=window.setTimeout(()=>{null!==F.current&&eq()},682)},[eB,eq]),eK=o.useCallback(()=>{eB(),F.current=null,ez(!1),et(null),en(null),er(null),J(0),eg(!1),E.current=!1,T.current=0,M.current="none"},[eB,ez]),eU=o.useCallback(e=>{if(!(!eS||!z)){if(k.current){if(F.current===e){A.current=e,eq();return}eK()}eB(),ej(e),F.current=e,et(e),ez(!0),eG()}},[eS,z,eq,eK,eB,ej,ez,eG]);W.current=eU;let eX=o.useCallback(()=>{H.current=null,j.current=!1,null!==_.current&&(window.clearInterval(_.current),_.current=null),null!==N.current&&(window.clearTimeout(N.current),N.current=null)},[]),eY=o.useCallback(e=>{null!==_.current&&window.clearInterval(_.current);let t=j.current?500:650;_.current=window.setInterval(()=>{W.current(e)},t)},[]),eJ=o.useCallback(e=>{H.current!==e&&(eX(),H.current=e,j.current=!1,W.current(e),eY(e),N.current=window.setTimeout(()=>{N.current=null,H.current===e&&(j.current=!0,eY(e))},1e4))},[eX,eY]),eZ=o.useCallback(()=>{let e=b.current;if(!e)return;let t=null==ex?void 0:ex.url,i=t?$.current.get(t):void 0;if(null!=i&&i.width&&null!=i&&i.height)return void B(nk(e,i.width,i.height));let n=w.current;if(n&&t&&(n.src===t||n.currentSrc===t)){let{width:i,height:o}=n instanceof HTMLVideoElement?{width:n.videoWidth,height:n.videoHeight}:{width:n.naturalWidth,height:n.naturalHeight};if(i&&o){eH(t,i,o),B(nk(e,i,o));return}}let o=nI(e);o.width&&o.height&&B(o)},[null==ex?void 0:ex.url,eH]),eQ=o.useCallback(e=>{if(w.current=e,e){if(e instanceof HTMLVideoElement){e.readyState>=1&&e.videoWidth>0&&eZ();return}e.complete&&e.naturalWidth>0&&eZ()}},[eZ]),e0=o.useCallback(()=>{eD(),eZ(),q(e=>e+1)},[eD,eZ]);o.useEffect(()=>{e0();let e=b.current,t=x.current,i=new ResizeObserver(()=>e0());return e&&i.observe(e),t&&i.observe(t),window.addEventListener("resize",e0),()=>{i.disconnect(),window.removeEventListener("resize",e0)}},[e0,i,m]),o.useLayoutEffect(()=>{if(!ex)return;let e=w.current;if(e){if(e instanceof HTMLImageElement&&e.complete&&e.naturalWidth>0)return void eZ();e instanceof HTMLVideoElement&&e.readyState>=1&&e.videoWidth>0&&eZ()}},[null==ex?void 0:ex.url,i,eZ]),o.useEffect(()=>{eN()},[eN,S]),o.useEffect(()=>{let e=new Set,i=[],n=t=>{!(null!=t&&t.url)||e.has(t.url)||(e.add(t.url),i.push(t))};t.forEach(n),u.forEach(e=>e.items.forEach(n)),i.forEach(e=>{$.current.has(e.url)||function(e,t){if(nj(e)){let i=document.createElement("video"),n=()=>{i.videoWidth>0&&i.videoHeight>0&&t(e.url,i.videoWidth,i.videoHeight),i.removeEventListener("loadedmetadata",n)};i.addEventListener("loadedmetadata",n),i.preload="auto",i.src=e.url,i.load();return}let i=new Image;i.onload=()=>{i.naturalWidth>0&&i.naturalHeight>0&&t(e.url,i.naturalWidth,i.naturalHeight)},i.src=e.url}(e,eH)})},[t,u,eH]),o.useEffect(()=>{if("opening"!==G||!z)return;if(!g)return void K("open");el(!1);let e=requestAnimationFrame(()=>{requestAnimationFrame(()=>{el(!0),K("open")})});return()=>cancelAnimationFrame(e)},[G,z,g]),o.useEffect(()=>{if("closing"!==G)return;let e=setTimeout(()=>f(),500);return()=>clearTimeout(e)},[G,f]),o.useEffect(()=>()=>{eB()},[eB]),o.useLayoutEffect(()=>{ey.current===i&&ev.current===(null==ex?void 0:ex.url)||(eB(),F.current=null,et(null),en(null),er(null),X(0),J(0),ez(!1),ef(!1),eg(!1),L.current=0,T.current=0,M.current="none",E.current=!1,P.current=null,I.current=!1,w.current=null,eN(),ey.current=i,ev.current=null==ex?void 0:ex.url)},[i,null==ex?void 0:ex.url,ez,eB,eN]),o.useLayoutEffect(()=>{let e=A.current;null!==e&&(A.current=null,requestAnimationFrame(()=>{W.current(e)}))},[i,p,null==ex?void 0:ex.url]),o.useLayoutEffect(()=>{if("opening"===G){ep.current=!1,eu(!1);return}if("open"!==G||ep.current)return;if(!eL&&!eT){ep.current=!0;return}eu(!1);let e=requestAnimationFrame(()=>{requestAnimationFrame(()=>{eu(!0),ep.current=!0})});return()=>cancelAnimationFrame(e)},[G,null==eL?void 0:eL.url,null==eT?void 0:eT.url]),o.useEffect(()=>{if("open"!==G)return;let e=()=>{let e=t=>{t.stopPropagation(),t.preventDefault(),document.removeEventListener("click",e,!0)};document.addEventListener("click",e,!0)},t=e=>{if(Math.abs(e)>50&&eS)return void(e=>{let t=e<0?1:-1;eB(),ej(t),F.current=t,et(t),ez(!0),eG()})(e);F.current=null,et(null),en(null),er(null),ez(!0),J(0),eO()},i=e=>{if(1!==e.touches.length||k.current)return;let t=e.touches[0];I.current=!0,P.current={x:t.clientX,y:t.clientY},M.current="none",T.current=0,E.current=!1},n=e=>{if(!P.current||1!==e.touches.length||k.current)return;let t=e.touches[0],i=t.clientX-P.current.x,n=t.clientY-P.current.y;if("none"===M.current){if(10>Math.abs(i)&&10>Math.abs(n))return;if(Math.abs(i)>Math.abs(n)){if(!eS)return;M.current="horizontal"}else{if(!(n>0)||!e$)return;M.current="vertical"}}if("horizontal"===M.current){E.current=!0,eg(!0),T.current=i,J(i),e.preventDefault();return}"vertical"===M.current&&(E.current=!0,eg(!0),L.current=n,X(n),e.preventDefault())},o=()=>{if(!P.current)return;let i=M.current,n=E.current;if(n&&"horizontal"===i)t(T.current),e();else if(n&&"vertical"===i){let t=L.current;if(e$&&t>72){let e=window.innerHeight;L.current=e,ef(!0),X(e),K("closing")}else L.current=0,X(0);e()}else"horizontal"===i&&Math.abs(T.current)>0&&(t(T.current),e());P.current=null,M.current="none",T.current=0,E.current=!1,eg(!1)};return document.addEventListener("touchstart",i,{passive:!0}),document.addEventListener("touchmove",n,{passive:!1}),document.addEventListener("touchend",o),document.addEventListener("touchcancel",o),()=>{document.removeEventListener("touchstart",i),document.removeEventListener("touchmove",n),document.removeEventListener("touchend",o),document.removeEventListener("touchcancel",o)}},[G,eS,ez,eO,eB,e$,eG,ej]);let e1=o.useCallback(()=>{let e=(null==h?void 0:h())??g??null;e&&z&&(ec(e),el(!0)),K("closing")},[h,g,z]);o.useEffect(()=>{let e=e=>{if("Escape"===e.key){if(l&&c||"closing"===G)return;eX(),e1();return}if("ArrowLeft"!==e.key&&"ArrowRight"!==e.key||"open"!==G||!eS)return;e.preventDefault();let t="ArrowLeft"===e.key?-1:1;e.repeat&&H.current===t||eJ(t)},t=e=>{if("ArrowLeft"!==e.key&&"ArrowRight"!==e.key)return;let t="ArrowLeft"===e.key?-1:1;H.current===t&&eX()},i=()=>{eX()};return window.addEventListener("keydown",e),window.addEventListener("keyup",t),window.addEventListener("blur",i),()=>{window.removeEventListener("keydown",e),window.removeEventListener("keyup",t),window.removeEventListener("blur",i),eX()}},[G,l,c,e1,eS,eJ,eX]),o.useEffect(()=>{"open"!==G&&eX()},[G,eX]);let e2=()=>{"closing"===G||s||e1()},e3="open"===G,e5="closing"===G,e4=U>0?Math.max(0,1-U/500):1,e9=U>0?Math.max(.35,1-U/500):1,e6=o.useCallback(e=>{if(!("transform"!==e.propertyName||!k.current)){if(null!==F.current)return void eq();eB(),ez(!1)}},[eB,ez,eq]),e7="closing"===G?es??g:g,e8=e7&&z&&("opening"===G||e5)?function(e,t){let i=e.width/t.width,n=e.height/t.height,o=e.left-t.left,r=e.top-t.top;return`translate(${o}px, ${r}px) scale(${i}, ${n})`}(e7,z):void 0,te=ew&&ex?eV(ex,"center"):U>0?`translateY(${U}px)`:e8,tt=z?nE(z,O):null,ti=!!(e7&&z),tn=ti&&("closing"===G||"open"===G&&ea),to={position:"absolute",top:null==tt?void 0:tt.top,left:null==tt?void 0:tt.left,width:null==tt?void 0:tt.width,height:null==tt?void 0:tt.height,objectFit:"contain",transformOrigin:"top left",transform:te,opacity:U>0?e9:ti?1:"opening"===G||e5?0:1,transition:em&&!Z?"none":Z?`transform 650ms ${nS}`:eh?`transform 500ms ${nS}, opacity 500ms ${nS}`:tn?`transform 500ms ${nS}`:"opening"===G||e5?`opacity 500ms ${nS}`:"none",pointerEvents:eb&&e3&&!ew?"auto":"none",touchAction:eb&&e3?"none":void 0,zIndex:1,overflow:eb?"hidden":void 0},tr=(e,t,i="adjacent")=>{let n=e_(e);if(!n)return{display:"none"};let o="far"===i?"left"===t?"far-left":"far-right":"left"===t?"left-adjacent":"right-adjacent",{start:r}=null!==ee?nW(n,o,ee,O):{start:"far"===i?nA(n,t,O):nF(n,t,O)},a=nE(r,O),l=eV(e,o),s=ew||"adjacent"!==i||!e3||ed?null:function(e,t,i){let n=nF(e,t,i),o=nA(e,t,i);return{x:o.left-n.left,y:o.top-n.top}}(n,t,O),c="far"===i&&ew&&ee===("left"===t?-1:1),d=(!em||!!Z)&&Z,u="adjacent"===i&&e3&&ed&&!ew;return{position:"absolute",top:a.top,left:a.left,width:a.width,height:a.height,objectFit:"contain",transform:l??(s?`translate(${s.x}px, ${s.y}px)`:void 0),opacity:"far"===i?e3&&c?1:0:+!!e3,transition:d?"far"===i?`transform 650ms ${nS}`:`transform 650ms ${nS}, opacity 500ms ${nS}`:u?`transform 500ms ${nS}`:"opening"===G||e5?`opacity 500ms ${nS}`:"none",pointerEvents:"none",zIndex:1}},ta=(e,t)=>{let i=e_(e);return i?function(e,t,i){let{left:n,width:o}=i,r=nT(i);return"left"===t?{left:n,top:e.top,width:r,height:e.height}:{left:n+o-r,top:e.top,width:r,height:e.height}}(nF(i,t,O),t,O):null},tl=e=>t=>{if(!s){if(I.current){I.current=!1;return}t.stopPropagation(),eU(e)}},ts=eL?ta(eL,"left"):null,tc=eT?ta(eT,"right"):null,td=ts?nE(ts,O):null,tu=tc?nE(tc,O):null;return n.jsxs("div",{ref:x,className:[`${e}-lightbox`,l?`${e}-lightbox-editor`:"",s?`${e}-lightbox-edit-mode`:""].filter(Boolean).join(" "),style:{touchAction:"open"===G?"none":void 0},onClick:e2,children:[n.jsx("div",{style:{position:"absolute",inset:0,background:a.backgroundColor??"#FFFFFF",opacity:e3?e4:0,transition:em?"none":`opacity 500ms ${nS}`,pointerEvents:"none"}}),n.jsxs("div",{className:`${e}-lightbox-dismiss-area`,children:[n.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[n.jsx("div",{style:{height:"10%"}}),n.jsx("div",{style:{width:"70%",height:"80%",display:"flex",justifyContent:"center",alignItems:"center"},children:n.jsx("div",{ref:b,style:{width:"100%",height:"100%"}})}),n.jsx("div",{style:{height:"10%"}})]}),n.jsx("div",{style:{position:"absolute",inset:0,opacity:+!!e3,transition:em?"none":`opacity 500ms ${nS}`,pointerEvents:"none"},children:n.jsx(nw,{prefix:e,entry:r,settings:a,isEditor:l,isEditMode:s,isPreviewMode:c,onClose:e2})})]}),e3&&eA&&n.jsx(nO,{media:eA,style:tr(eA,"left","far"),onMeasure:eH,onTransitionEnd:e6},`far-prev-${eA.url}`),e3&&eL&&n.jsxs(n.Fragment,{children:[n.jsx(nO,{media:eL,style:tr(eL,"left"),onMeasure:eH,onTransitionEnd:e6},`prev-${eL.url}`),td&&n.jsx("div",{style:{position:"absolute",top:td.top,left:td.left,width:td.width,height:td.height,cursor:s||em?"default":"pointer",pointerEvents:s||em?"none":"auto",zIndex:3},onClick:tl(-1)})]}),e3&&eT&&n.jsxs(n.Fragment,{children:[n.jsx(nO,{media:eT,style:tr(eT,"right"),onMeasure:eH,onTransitionEnd:e6},`next-${eT.url}`),tu&&n.jsx("div",{style:{position:"absolute",top:tu.top,left:tu.left,width:tu.width,height:tu.height,cursor:s||em?"default":"pointer",pointerEvents:s||em?"none":"auto",zIndex:3},onClick:tl(1)})]}),e3&&eW&&n.jsx(nO,{media:eW,style:tr(eW,"right","far"),onMeasure:eH,onTransitionEnd:e6},`far-next-${eW.url}`),z&&ex&&(eb?n.jsx(nB,{src:ex.url,phase:G,onMediaElement:eQ,wrapperStyle:to,videoStyle:{width:"100%",height:"100%",display:"block",objectFit:"contain",pointerEvents:e3&&!ew?"auto":"none"},onLoadedMetadata:eZ,onTransitionEnd:e6},`${i}-${ex.url}`):n.jsx("img",{ref:eQ,src:ex.url,alt:ex.name,onLoad:eZ,onTransitionEnd:e6,style:to},`${i}-${ex.url}`))]})}let nV=`import { CommonComponentProps } from '../props';
import { scalingValue, useScopedStyles } from '../utils/index';
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  HiveLightboxTitles,
  type HiveLightboxTextEntry,
  type HiveLightboxTitleSettings,
} from './HiveLightboxTitles';
import { getDisplayedImageRect } from '../utils/getImageRect';

function sv(px: number): string {
  return \`calc(var(--cntrl-article-width, 100vw) * \${px / 1440})\`;
}

function getCSS(P: string): string {
  return \`
.\${P}-wrapper {
  display: grid;
  align-items: start;
  justify-content: center;
  min-height: \${sv(48)};
}
.\${P}-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.\${P}-item-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  outline: 1px solid #FF5C02;
}
.\${P}-item-inner-hidden {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.\${P}-item-image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
}
.\${P}-item-image-link {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.\${P}-item-image {
  width: 100%;
  height: 100%;
  display: block;
  max-width: 100%;
}
.\${P}-item-video {
  width: 100%;
  height: 100%;
  display: block;
  max-width: 100%;
}
.\${P}-image-align-top .\${P}-item-image-wrapper {
  align-items: flex-start;
}
.\${P}-image-align-center .\${P}-item-image-wrapper {
  align-items: center;
}
.\${P}-image-align-bottom .\${P}-item-image-wrapper {
  align-items: flex-end;
}
.\${P}-align-entries .\${P}-item {
  display: contents;
}
.\${P}-align-entries .\${P}-item-inner,
.\${P}-align-entries .\${P}-item-inner-hidden {
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 3;
  justify-self: center;
  margin-bottom: var(--\${P}-align-entries-row-gap, 0);
}
.\${P}-align-entries .\${P}-item-inner-last-row {
  margin-bottom: 0;
}
.\${P}-align-entries .\${P}-item-title-row,
.\${P}-align-entries .\${P}-item-subtitle-row {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100%;
}
.\${P}-align-entries .\${P}-item-image-link {
  width: 100%;
  height: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.\${P}-align-entries .\${P}-item-image-link > .\${P}-item-image-wrapper {
  flex-shrink: 0;
  height: auto;
  align-self: auto;
}
.\${P}-image-align-top.\${P}-align-entries .\${P}-item-image-link > .\${P}-item-image-wrapper {
  margin-top: 0;
  margin-bottom: auto;
}
.\${P}-image-align-center.\${P}-align-entries .\${P}-item-image-link > .\${P}-item-image-wrapper {
  margin-top: auto;
  margin-bottom: auto;
}
.\${P}-image-align-bottom.\${P}-align-entries .\${P}-item-image-link > .\${P}-item-image-wrapper {
  margin-top: auto;
  margin-bottom: 0;
}
.\${P}-image-align-top.\${P}-align-entries .\${P}-item-image-wrapper {
  align-items: flex-start;
}
.\${P}-image-align-center.\${P}-align-entries .\${P}-item-image-wrapper {
  align-items: center;
}
.\${P}-image-align-bottom.\${P}-align-entries .\${P}-item-image-wrapper {
  align-items: flex-end;
}
.\${P}-image-align-top.\${P}-align-entries .\${P}-item-image-link {
  justify-content: flex-start;
}
.\${P}-image-align-center.\${P}-align-entries .\${P}-item-image-link {
  justify-content: center;
}
.\${P}-image-align-bottom.\${P}-align-entries .\${P}-item-image-link {
  justify-content: flex-end;
}
.\${P}-titles-row {
  position: relative;
  flex: 0 1 auto;
  z-index: 2;
  box-sizing: border-box;
  pointer-events: none;
  word-break: break-word;
  min-width: 0;
  display: flex;
  flex-direction: row;
  align-items: baseline;
}
.\${P}-titles-row-header {
  flex: 1;
  align-items: baseline;
}
.\${P}-titles-row-header-controls {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  flex-shrink: 0;
}
.\${P}-close-icon {
  position: relative;
  flex-shrink: 0;
  align-self: center;
  pointer-events: auto;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  padding: 0;
}
.\${P}-close-icon-inner {
  all: unset;
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 100%;
  pointer-events: auto;
}
.\${P}-close-icon-img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.\${P}-titles-baseline-strut {
  width: 0;
  overflow: hidden;
  flex-shrink: 0;
  pointer-events: none;
  white-space: nowrap;
}
.\${P}-titles-row-titles {
  position: relative;
  flex: 1;
  min-width: 0;
  align-self: flex-start;
}
.\${P}-titles-stack {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  align-self: flex-start;
  min-width: 0;
}
.\${P}-titles-row-two-row {
  display: flex;
  flex: 1;
  height: 100%;
  min-height: 0;
  align-self: stretch;
  flex-direction: column;
  width: 100%;
}
.\${P}-titles-row-top {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  width: 100%;
  flex-shrink: 0;
  margin-bottom: 0;
}
.\${P}-titles-row-top .\${P}-title-cell[data-title="title1"] {
  flex: 0 0 auto;
  min-width: 0;
}
.\${P}-titles-row-bottom-wrap {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: auto;
  flex-shrink: 0;
}
.\${P}-titles-row-bottom-area {
  position: relative;
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
}
.\${P}-titles-row-bottom {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  width: 100%;
}
.\${P}-titles-row-bottom .\${P}-title-cell {
  flex: 0 0 auto;
}
.\${P}-title-cell {
  position: relative;
  flex: 0 0 auto;
  min-width: 0;
  box-sizing: border-box;
}
.\${P}-text-bar-cell {
  position: relative;
  flex: 0 1 auto;
  min-width: 0;
  display: flex;
  align-items: baseline;
}
.\${P}-title1,
.\${P}-title2,
.\${P}-title3 {
  margin: 0;
  min-width: 0;
}
.\${P}-title-resize-handle {
  background: transparent;
}
.\${P}-title-resize-handle::after {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background: #FF5C02;
  pointer-events: none;
}
.\${P}-lightbox {
  position: fixed;
  inset: 0;
  z-index: 9997;
  overscroll-behavior: none;
  overflow: hidden;
}
.\${P}-lightbox-editor {
  inset: auto;
  top: var(--cntrl-article-top, 0);
  left: var(--cntrl-article-left, 0);
  width: var(--cntrl-article-width, 100vw) !important;
  height: var(--cntrl-viewport-height, 100vh) !important;
}
.\${P}-lightbox-edit-mode {
  z-index: 1;
}
.\${P}-lightbox-dismiss-area {
  position: relative;
  width: 100%;
  height: 100%;
}
.\${P}-lightbox-overlay-content {
  position: absolute;
  inset: 0;
  z-index: 3;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  isolation: isolate;
}
.\${P}-lightbox-content-area {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex: 1;
  min-width: 0;
  min-height: 0;
}
.\${P}-lightbox-content-area-stacked {
  align-items: stretch;
  align-self: stretch;
}
.\${P}-text-bar-cell-stacked {
  align-self: stretch;
  flex: 1;
  min-width: 0;
  min-height: 0;
  height: 100%;
  flex-direction: column;
  align-items: stretch;
}
.\${P}-control {
  position: relative;
  z-index: 2;
  pointer-events: auto;
  flex-shrink: 0;
}
\`;
}

type GridLayoutConfig = {
  entryWidth: number;
  horizontalGap: number;
  wrapperWidth: number;
  columnsCount: number;
  lockedParam?: 'wrapperWidth' | 'entryWidth' | 'horizontalGap' | null;
};

type HiveSettings = {
  gridLayout: GridLayoutConfig;
  verticalGap: number;
  align?: 'top' | 'center' | 'bottom';
  imageDisplay: {
    display: 'fit' | 'cover';
    ratioValue: '1:1' | '2:3' | '3:4' | '4:5' | '16:9';
    reversed: boolean;
  };
} & HiveLightboxTitleSettings;

type HiveMedia = {
  url: string;
  name?: string;
  objectFit?: 'cover' | 'contain';
  type?: 'image' | 'video';
};

type HiveMediaPair = {
  media: HiveMedia[];
};

type HiveContentItem = {
  title1?: string;
  title2?: string;
  title3?: string;
  gallery?: HiveMediaPair[];
};

type HiveProps = {
  settings: HiveSettings;
  content?: HiveContentItem[];
  isEditor?: boolean;
  isPreviewMode?: boolean;
  isEditMode?: boolean;
  activeEvent?: string;
  layoutId?: string;
  portalId?: string;
} & CommonComponentProps;

const EMPTY_MEDIA: HiveMedia = { url: '', name: '', objectFit: 'cover' };

const LIGHTBOX_ANIM_MS = 500;
const SLIDE_ANIM_MS = 650;
const LIGHTBOX_EASING = 'cubic-bezier(0.22, 1, 0.36, 1)';
const SWIPE_CLOSE_THRESHOLD = 72;
const SWIPE_NAV_THRESHOLD = 50;
const ARROW_HOLD_ACCELERATE_MS = 10000;
const ARROW_HOLD_NORMAL_INTERVAL_MS = 650;
const ARROW_HOLD_FAST_INTERVAL_MS = 500;

type AnimRect = { top: number; left: number; width: number; height: number };
type SwipeAxis = 'none' | 'horizontal' | 'vertical';

function getZoomTransform(from: AnimRect, to: AnimRect): string {
  const scaleX = from.width / to.width;
  const scaleY = from.height / to.height;
  const translateX = from.left - to.left;
  const translateY = from.top - to.top;
  return \`translate(\${translateX}px, \${translateY}px) scale(\${scaleX}, \${scaleY})\`;
}

function getMediaClickSourceRect(
  target: HTMLElement,
  objectFit: 'cover' | 'contain',
): AnimRect {
  if (objectFit === 'contain' && target instanceof HTMLImageElement) {
    const rect = getDisplayedImageRect(target);
    return { left: rect.x, top: rect.y, width: rect.width, height: rect.height };
  }

  const cb = target.getBoundingClientRect();
  return { left: cb.left, top: cb.top, width: cb.width, height: cb.height };
}

function getGridItemSourceRect(
  container: HTMLElement,
  gridIndex: number,
  objectFit: 'cover' | 'contain',
): AnimRect | null {
  const mediaEl = container.querySelector(\`[data-hive-grid-index="\${gridIndex}"]\`);
  if (!(mediaEl instanceof HTMLElement)) return null;
  return getMediaClickSourceRect(mediaEl, objectFit);
}

type DisplayItem = {
  displayMedia: HiveMedia;
  lightboxMedia: HiveMedia | null;
};

type LightboxEntryData = {
  gridIndex: number;
  items: HiveMedia[];
  entry: HiveLightboxTextEntry;
};

function buildLightboxEntries(content: HiveContentItem[]): LightboxEntryData[] {
  return content.reduce<LightboxEntryData[]>((acc, item, gridIndex) => {
    const gallery = normalizeGallery(item.gallery);
    const displayItems = getDisplayItems(gallery);
    const lightboxItems = displayItems
      .filter(entry => entry.lightboxMedia)
      .map(entry => entry.lightboxMedia!);
    if (lightboxItems.length === 0) return acc;

    acc.push({
      gridIndex,
      items: lightboxItems,
      entry: {
        title1: item.title1 ?? '',
        title2: item.title2 ?? '',
        title3: item.title3 ?? '',
      },
    });
    return acc;
  }, []);
}

function getAdjacentEntryMedia(
  entries: LightboxEntryData[],
  entryIdx: number,
  direction: -1 | 1,
): HiveMedia | null {
  if (entries.length <= 1) return null;
  const adjacentIdx = (entryIdx + direction + entries.length) % entries.length;
  return entries[adjacentIdx]?.items[0] ?? null;
}

function getFarAdjacentEntryMedia(
  entries: LightboxEntryData[],
  entryIdx: number,
  direction: -1 | 1,
): HiveMedia | null {
  if (entries.length <= 2) return null;
  const adjacentIdx = (entryIdx + direction + entries.length) % entries.length;
  return getAdjacentEntryMedia(entries, adjacentIdx, direction);
}

const SIDE_PEEK_WIDTH_RATIO = 0.03;

function getSidePeekWidth(bounds: LightboxBounds): number {
  return bounds.width * SIDE_PEEK_WIDTH_RATIO;
}

type LightboxBounds = {
  left: number;
  top: number;
  width: number;
  height: number;
};

const DEFAULT_LIGHTBOX_BOUNDS: LightboxBounds = {
  left: 0,
  top: 0,
  width: typeof window !== 'undefined' ? window.innerWidth : 1440,
  height: typeof window !== 'undefined' ? window.innerHeight : 900,
};

function toContainerRect(rect: AnimRect, bounds: LightboxBounds): AnimRect {
  return {
    left: rect.left - bounds.left,
    top: rect.top - bounds.top,
    width: rect.width,
    height: rect.height,
  };
}

type MediaDimensions = { width: number; height: number };

function getGhostRect(ghost: HTMLElement): AnimRect {
  const cb = ghost.getBoundingClientRect();
  return { width: cb.width, height: cb.height, left: cb.left, top: cb.top };
}

function getLightboxMediaDimensions(media: HTMLImageElement | HTMLVideoElement) {
  if (media instanceof HTMLVideoElement) {
    return { width: media.videoWidth, height: media.videoHeight };
  }
  return { width: media.naturalWidth, height: media.naturalHeight };
}

function fitMediaRectInGhost(
  ghost: HTMLElement,
  mediaWidth: number,
  mediaHeight: number,
): AnimRect {
  const cb = ghost.getBoundingClientRect();
  const cw = cb.width;
  const ch = cb.height;
  const ir = mediaWidth / mediaHeight;
  const cr = cw / ch;

  if (ir > cr) {
    const dh = cw / ir;
    return { width: cw, height: dh, left: cb.left, top: cb.top + (ch - dh) / 2 };
  }

  const dw = ch * ir;
  return { width: dw, height: ch, left: cb.left + (cw - dw) / 2, top: cb.top };
}

function getMediaFittedRect(
  ghost: HTMLElement | null,
  dimensions: MediaDimensions | undefined,
): AnimRect | null {
  if (!ghost || !dimensions?.width || !dimensions?.height) return null;
  return fitMediaRectInGhost(ghost, dimensions.width, dimensions.height);
}

function preloadMediaDimensions(
  media: HiveMedia,
  onDimensions: (url: string, width: number, height: number) => void,
) {
  if (isVideoMedia(media)) {
    const video = document.createElement('video');
    const handleMetadata = () => {
      if (video.videoWidth > 0 && video.videoHeight > 0) {
        onDimensions(media.url, video.videoWidth, video.videoHeight);
      }
      video.removeEventListener('loadedmetadata', handleMetadata);
    };
    video.addEventListener('loadedmetadata', handleMetadata);
    video.preload = 'auto';
    video.src = media.url;
    video.load();
    return;
  }

  const image = new Image();
  image.onload = () => {
    if (image.naturalWidth > 0 && image.naturalHeight > 0) {
      onDimensions(media.url, image.naturalWidth, image.naturalHeight);
    }
  };
  image.src = media.url;
}

function collectAllHiveMedia(content: HiveContentItem[]): HiveMedia[] {
  const seen = new Set<string>();
  const result: HiveMedia[] = [];

  for (const item of content) {
    const gallery = normalizeGallery(item.gallery);
    const displayItems = getDisplayItems(gallery);
    for (const entry of displayItems) {
      for (const media of [entry.displayMedia, entry.lightboxMedia]) {
        if (media?.url && !seen.has(media.url)) {
          seen.add(media.url);
          result.push(media);
        }
      }
    }
  }

  return result;
}

function PreloadedMediaPool({ mediaList }: { mediaList: HiveMedia[] }) {
  if (mediaList.length === 0) return null;

  return (
    <div
      aria-hidden
      style={{
        position: 'absolute',
        width: 0,
        height: 0,
        overflow: 'hidden',
        opacity: 0,
        pointerEvents: 'none',
      }}
    >
      {mediaList.map((media) => (
        isVideoMedia(media) ? (
          <video
            key={media.url}
            src={media.url}
            preload='auto'
            muted
            playsInline
          />
        ) : (
          <img
            key={media.url}
            src={media.url}
            alt=''
          />
        )
      ))}
    </div>
  );
}

function positionPeekRect(fittedRect: AnimRect, side: 'left' | 'right', bounds: LightboxBounds): AnimRect {
  const { width, height, top } = fittedRect;
  const { left: containerLeft, width: containerWidth } = bounds;
  const peekWidth = getSidePeekWidth(bounds);

  if (side === 'left') {
    return {
      left: containerLeft + peekWidth - width,
      top,
      width,
      height,
    };
  }

  return {
    left: containerLeft + containerWidth - peekWidth,
    top,
    width,
    height,
  };
}

function getFarPeekRect(fittedRect: AnimRect, side: 'left' | 'right', bounds: LightboxBounds): AnimRect {
  const peekRect = positionPeekRect(fittedRect, side, bounds);
  return {
    ...peekRect,
    left: 2 * peekRect.left - fittedRect.left,
  };
}

function getSidePeekHitRect(sideRect: AnimRect, side: 'left' | 'right', bounds: LightboxBounds): AnimRect {
  const { left: containerLeft, width: containerWidth } = bounds;
  const peekWidth = getSidePeekWidth(bounds);

  if (side === 'left') {
    return {
      left: containerLeft,
      top: sideRect.top,
      width: peekWidth,
      height: sideRect.height,
    };
  }

  return {
    left: containerLeft + containerWidth - peekWidth,
    top: sideRect.top,
    width: peekWidth,
    height: sideRect.height,
  };
}

type SlidePlacement = 'center' | 'left-adjacent' | 'right-adjacent' | 'far-left' | 'far-right';

function getSlideRects(
  fittedRect: AnimRect,
  placement: SlidePlacement,
  direction: -1 | 1,
  bounds: LightboxBounds,
): { start: AnimRect; end: AnimRect } {
  const leftPeek = positionPeekRect(fittedRect, 'left', bounds);
  const rightPeek = positionPeekRect(fittedRect, 'right', bounds);
  const farLeft = getFarPeekRect(fittedRect, 'left', bounds);
  const farRight = getFarPeekRect(fittedRect, 'right', bounds);

  if (direction === 1) {
    switch (placement) {
      case 'center':
        return { start: fittedRect, end: leftPeek };
      case 'right-adjacent':
        return { start: rightPeek, end: fittedRect };
      case 'left-adjacent':
        return { start: leftPeek, end: farLeft };
      case 'far-right':
        return { start: farRight, end: rightPeek };
      default:
        return { start: fittedRect, end: fittedRect };
    }
  }

  switch (placement) {
    case 'center':
      return { start: fittedRect, end: rightPeek };
    case 'left-adjacent':
      return { start: leftPeek, end: fittedRect };
    case 'right-adjacent':
      return { start: rightPeek, end: farRight };
    case 'far-left':
      return { start: farLeft, end: leftPeek };
    default:
      return { start: fittedRect, end: fittedRect };
  }
}

function getSlideTransform(
  fittedRect: AnimRect,
  placement: SlidePlacement,
  direction: -1 | 1,
  bounds: LightboxBounds,
): { x: number; y: number } {
  const { start, end } = getSlideRects(fittedRect, placement, direction, bounds);
  return {
    x: end.left - start.left,
    y: end.top - start.top,
  };
}

function getSideOpenTransform(
  fittedRect: AnimRect,
  side: 'left' | 'right',
  bounds: LightboxBounds,
): { x: number; y: number } {
  const peekRect = positionPeekRect(fittedRect, side, bounds);
  const farRect = getFarPeekRect(fittedRect, side, bounds);
  return {
    x: farRect.left - peekRect.left,
    y: farRect.top - peekRect.top,
  };
}

function isMediaPairGallery(gallery: unknown): gallery is HiveMediaPair[] {
  if (!Array.isArray(gallery) || gallery.length === 0) return false;
  const first = gallery[0];
  return first !== null && typeof first === 'object' && 'media' in first && Array.isArray(first.media);
}

function normalizeGallery(gallery: unknown): HiveMediaPair[] | undefined {
  if (!gallery) return undefined;
  if (isMediaPairGallery(gallery)) return gallery;
  if (!Array.isArray(gallery)) return undefined;

  const [gridImage, lightboxImage] = gallery as HiveMedia[];
  const grid = gridImage?.url ? gridImage : undefined;
  const lightbox = lightboxImage?.url ? lightboxImage : undefined;

  if (!grid && !lightbox) return undefined;

  return [{
    media: [
      lightbox ?? grid ?? EMPTY_MEDIA,
      grid ?? lightbox ?? EMPTY_MEDIA,
    ],
  }];
}

function getDisplayMediaForPair(pair: HiveMediaPair): HiveMedia | null {
  const [first, second] = pair.media;
  if (second?.url) return second;
  if (first?.url) return first;
  return null;
}

function getLightboxMediaForPair(pair: HiveMediaPair): HiveMedia | null {
  const [first] = pair.media;
  if (first?.url) return first;
  return null;
}

function getDisplayItems(gallery: HiveMedia[] | HiveMediaPair[] | undefined): DisplayItem[] {
  if (!Array.isArray(gallery) || gallery.length === 0) return [];

  if (isMediaPairGallery(gallery)) {
    const result: DisplayItem[] = [];
    for (const pair of gallery) {
      const displayMedia = getDisplayMediaForPair(pair);
      if (!displayMedia) continue;

      const lightboxMedia = getLightboxMediaForPair(pair);
      result.push({
        displayMedia,
        lightboxMedia: lightboxMedia?.url ? lightboxMedia : null,
      });
    }
    return result;
  }

  return (gallery as HiveMedia[])
    .filter(media => media?.url)
    .map(media => ({
      displayMedia: media,
      lightboxMedia: media,
    }));
}

function isVideoMedia(media: HiveMedia): boolean {
  if (media.type === 'video') return true;
  return /\\.(mp4|webm|ogg|mov)(\\?|#|$)/i.test(media.url);
}

function MediaItem({
  media,
  className,
  style,
  gridIndex,
  onMediaClick,
}: {
  media: HiveMedia;
  className: string;
  style: React.CSSProperties;
  gridIndex?: number;
  onMediaClick?: (e: React.MouseEvent<HTMLElement>) => void;
}) {
  if (isVideoMedia(media)) {
    return (
      <video
        src={media.url}
        className={className}
        data-hive-grid-index={gridIndex}
        style={{
          ...style,
          cursor: onMediaClick ? 'pointer' : 'default',
        }}
        muted
        autoPlay
        loop
        playsInline
        preload='auto'
        onClick={onMediaClick}
      />
    );
  }

  return (
    <img
      src={media.url}
      alt={media.name}
      className={className}
      data-hive-grid-index={gridIndex}
      style={{
        ...style,
        cursor: onMediaClick ? 'pointer' : 'default',
      }}
      onClick={onMediaClick}
    />
  );
}

function LightboxVideo({
  src,
  phase,
  onMediaElement,
  wrapperStyle,
  videoStyle,
  onLoadedMetadata,
  onTransitionEnd,
}: {
  src: string;
  phase: 'opening' | 'open' | 'closing';
  onMediaElement?: (element: HTMLVideoElement | null) => void;
  wrapperStyle: React.CSSProperties;
  videoStyle: React.CSSProperties;
  onLoadedMetadata?: () => void;
  onTransitionEnd: (e: React.TransitionEvent<HTMLElement>) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    onMediaElement?.(video ?? null);

    return () => {
      video?.pause();
      onMediaElement?.(null);
    };
  }, [src, onMediaElement]);

  return (
    <div style={wrapperStyle} onTransitionEnd={onTransitionEnd}>
      <video
        key={src}
        ref={videoRef}
        src={src}
        controls={phase === 'open'}
        playsInline
        preload='auto'
        onLoadedMetadata={onLoadedMetadata}
        onClick={(e) => e.stopPropagation()}
        style={videoStyle}
      />
    </div>
  );
}

function LightboxSideMedia({
  media,
  style,
  onTransitionEnd,
  onMeasure,
}: {
  media: HiveMedia;
  style: React.CSSProperties;
  onTransitionEnd?: (e: React.TransitionEvent<HTMLElement>) => void;
  onMeasure?: (url: string, width: number, height: number) => void;
}) {
  if (isVideoMedia(media)) {
    return (
      <video
        src={media.url}
        muted
        playsInline
        preload='auto'
        style={style}
        onLoadedMetadata={(e) => {
          const video = e.currentTarget;
          if (video.videoWidth > 0 && video.videoHeight > 0) {
            onMeasure?.(media.url, video.videoWidth, video.videoHeight);
          }
        }}
        onTransitionEnd={onTransitionEnd}
      />
    );
  }

  return (
    <img
      src={media.url}
      alt={media.name}
      style={style}
      onLoad={(e) => {
        const image = e.currentTarget;
        if (image.naturalWidth > 0 && image.naturalHeight > 0) {
          onMeasure?.(media.url, image.naturalWidth, image.naturalHeight);
        }
      }}
      onTransitionEnd={onTransitionEnd}
    />
  );
}

function Lightbox({
  prefix: P,
  items,
  index,
  entry,
  settings,
  isEditor,
  isEditMode,
  isPreviewMode,
  canNavigate,
  lightboxEntries,
  entryIdx,
  layoutId,
  sourceRect,
  resolveCloseSourceRect,
  onClose,
  onPrev,
  onNext,
}: {
  prefix: string;
  items: HiveMedia[];
  index: number;
  entry: HiveLightboxTextEntry;
  settings: HiveLightboxTitleSettings;
  isEditor?: boolean;
  isEditMode?: boolean;
  isPreviewMode?: boolean;
  canNavigate: boolean;
  lightboxEntries: LightboxEntryData[];
  entryIdx: number;
  layoutId?: string;
  sourceRect?: AnimRect | null;
  resolveCloseSourceRect?: () => AnimRect | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const ghostRef = useRef<HTMLDivElement>(null);
  const centerMediaRef = useRef<HTMLImageElement | HTMLVideoElement | null>(null);
  const mediaDimensionsCacheRef = useRef<Map<string, MediaDimensions>>(new Map());
  const [mediaDimensionsVersion, setMediaDimensionsVersion] = useState(0);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const swipeOffsetRef = useRef(0);
  const swipeDeltaXRef = useRef(0);
  const swipeAxisRef = useRef<SwipeAxis>('none');
  const isSwipingRef = useRef(false);
  const touchInteractionRef = useRef(false);
  const navSwipeAnimatingRef = useRef(false);
  const navSwipeCommitTimerRef = useRef<number | null>(null);
  const slideCommitDirectionRef = useRef<-1 | 1 | null>(null);
  const rapidNavDirectionRef = useRef<-1 | 1 | null>(null);
  const startSlideNavigationRef = useRef<(direction: -1 | 1) => void>(() => {});
  const heldArrowDirectionRef = useRef<-1 | 1 | null>(null);
  const arrowHoldIntervalRef = useRef<number | null>(null);
  const arrowHoldAccelerateTimerRef = useRef<number | null>(null);
  const arrowHoldFastRef = useRef(false);
  const [finalRect, setFinalRect] = useState<AnimRect | null>(null);
  const [containerBounds, setContainerBounds] = useState<LightboxBounds>(DEFAULT_LIGHTBOX_BOUNDS);
  const [layoutVersion, setLayoutVersion] = useState(0);
  const [phase, setPhase] = useState<'opening' | 'open' | 'closing'>('opening');
  const [swipeOffset, setSwipeOffset] = useState(0);
  const [navSwipeOffset, setNavSwipeOffset] = useState(0);
  const [navSwipeAnimating, setNavSwipeAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState<-1 | 1 | null>(null);
  const [pendingEntryIdx, setPendingEntryIdx] = useState<number | null>(null);
  const [pendingImageIdx, setPendingImageIdx] = useState<number | null>(null);
  const [zoomTransitionActive, setZoomTransitionActive] = useState(false);
  const [closeSourceRect, setCloseSourceRect] = useState<AnimRect | null>(null);
  const [sidePeekAnimating, setSidePeekAnimating] = useState(false);
  const sidePeekOpenDoneRef = useRef(false);
  const [isSwiping, setIsSwiping] = useState(false);
  const [swipeDismiss, setSwipeDismiss] = useState(false);
  const prevIndexRef = useRef(index);
  const prevItemUrlRef = useRef<string | undefined>(undefined);
  const currentItem = items[index];
  const isCurrentVideo = currentItem ? isVideoMedia(currentItem) : false;
  const isHorizontalNavActive = navSwipeOffset !== 0 || navSwipeAnimating;
  const allowSwipeDismiss = !isEditMode && (!isEditor || Boolean(isPreviewMode));
  const allowNavigation = canNavigate && !isEditMode;
  const isEntryNavigation = lightboxEntries.length > 1;

  const getAdjacentImage = useCallback((imageIdx: number, direction: -1 | 1): HiveMedia | null => {
    if (items.length <= 1) return null;
    return items[(imageIdx + direction + items.length) % items.length] ?? null;
  }, [items]);

  const prevMedia = isEntryNavigation
    ? getAdjacentEntryMedia(lightboxEntries, entryIdx, -1)
    : getAdjacentImage(index, -1);
  const nextMedia = isEntryNavigation
    ? getAdjacentEntryMedia(lightboxEntries, entryIdx, 1)
    : getAdjacentImage(index, 1);

  const farPrevCandidate = slideDirection === -1 && isHorizontalNavActive
    ? isEntryNavigation && pendingEntryIdx !== null
      ? getAdjacentEntryMedia(lightboxEntries, pendingEntryIdx, -1)
      : pendingImageIdx !== null
        ? getAdjacentImage(pendingImageIdx, -1)
        : null
    : null;
  const farNextCandidate = slideDirection === 1 && isHorizontalNavActive
    ? isEntryNavigation && pendingEntryIdx !== null
      ? getAdjacentEntryMedia(lightboxEntries, pendingEntryIdx, 1)
      : pendingImageIdx !== null
        ? getAdjacentImage(pendingImageIdx, 1)
        : null
    : null;
  const farPrevMedia = farPrevCandidate && farPrevCandidate.url !== prevMedia?.url
    ? farPrevCandidate
    : null;
  const farNextMedia = farNextCandidate && farNextCandidate.url !== nextMedia?.url
    ? farNextCandidate
    : null;

  const idleFarPrevMedia = prevMedia && allowNavigation
    ? (() => {
      const candidate = isEntryNavigation
        ? getFarAdjacentEntryMedia(lightboxEntries, entryIdx, -1)
        : items.length > 2
          ? getAdjacentImage((index - 1 + items.length) % items.length, -1)
          : null;
      return candidate && candidate.url !== prevMedia.url ? candidate : null;
    })()
    : null;
  const idleFarNextMedia = nextMedia && allowNavigation
    ? (() => {
      const candidate = isEntryNavigation
        ? getFarAdjacentEntryMedia(lightboxEntries, entryIdx, 1)
        : items.length > 2
          ? getAdjacentImage((index + 1) % items.length, 1)
          : null;
      return candidate && candidate.url !== nextMedia.url ? candidate : null;
    })()
    : null;
  const renderFarPrevMedia = farPrevMedia ?? idleFarPrevMedia;
  const renderFarNextMedia = farNextMedia ?? idleFarNextMedia;

  const rememberMediaDimensions = useCallback((url: string, width: number, height: number) => {
    if (!url || !width || !height) return;

    const cache = mediaDimensionsCacheRef.current;
    const existing = cache.get(url);
    if (existing?.width === width && existing?.height === height) return;

    cache.set(url, { width, height });
    setMediaDimensionsVersion((value) => value + 1);
  }, []);

  const getFittedRectForMedia = useCallback((media: HiveMedia | null | undefined): AnimRect | null => {
    if (!media?.url) return null;
    const dimensions = mediaDimensionsCacheRef.current.get(media.url);
    return getMediaFittedRect(ghostRef.current, dimensions);
  }, [mediaDimensionsVersion, layoutVersion]);

  const syncFinalRectForCurrentItem = useCallback(() => {
    if (!currentItem) return;
    const rect = getFittedRectForMedia(currentItem);
    if (rect) {
      setFinalRect(rect);
      return;
    }

    const ghost = ghostRef.current;
    if (ghost) {
      setFinalRect(getGhostRect(ghost));
    }
  }, [currentItem, getFittedRectForMedia]);

  const beginSlideTo = useCallback((direction: -1 | 1) => {
    if (isEntryNavigation) {
      const len = lightboxEntries.length;
      setPendingEntryIdx((entryIdx + direction + len) % len);
      setPendingImageIdx(null);
      return;
    }

    if (items.length > 1) {
      setPendingImageIdx((index + direction + items.length) % items.length);
      setPendingEntryIdx(null);
    }
  }, [isEntryNavigation, lightboxEntries.length, entryIdx, items.length, index]);

  const setNavSwipeAnimatingState = useCallback((value: boolean) => {
    navSwipeAnimatingRef.current = value;
    setNavSwipeAnimating(value);
  }, []);

  const clearNavSwipeCommitTimer = useCallback(() => {
    if (navSwipeCommitTimerRef.current !== null) {
      window.clearTimeout(navSwipeCommitTimerRef.current);
      navSwipeCommitTimerRef.current = null;
    }
  }, []);

  const scheduleNavSwipeSnapBackEnd = useCallback(() => {
    clearNavSwipeCommitTimer();
    navSwipeCommitTimerRef.current = window.setTimeout(() => {
      clearNavSwipeCommitTimer();
      setNavSwipeAnimatingState(false);
    }, SLIDE_ANIM_MS + 32);
  }, [clearNavSwipeCommitTimer, setNavSwipeAnimatingState]);

  const updateContainerBounds = useCallback(() => {
    const container = containerRef.current;
    if (!container) {
      setContainerBounds({
        left: 0,
        top: 0,
        width: typeof window !== 'undefined' ? window.innerWidth : DEFAULT_LIGHTBOX_BOUNDS.width,
        height: typeof window !== 'undefined' ? window.innerHeight : DEFAULT_LIGHTBOX_BOUNDS.height,
      });
      return;
    }

    const rect = container.getBoundingClientRect();
    setContainerBounds({
      left: rect.left,
      top: rect.top,
      width: rect.width,
      height: rect.height,
    });
  }, []);

  const getHorizontalNavTransform = useCallback((
    media: HiveMedia,
    placement: SlidePlacement,
  ): string | undefined => {
    if (!isHorizontalNavActive) return undefined;

    if (isSwiping && !navSwipeAnimating) {
      return \`translate(\${navSwipeOffset}px, 0px)\`;
    }

    if (navSwipeAnimating && slideDirection !== null) {
      const fittedRect = getFittedRectForMedia(media);
      if (!fittedRect) return undefined;

      const { x, y } = getSlideTransform(fittedRect, placement, slideDirection, containerBounds);
      return \`translate(\${x}px, \${y}px)\`;
    }

    if (navSwipeAnimating) {
      return 'translate(0px, 0px)';
    }

    return undefined;
  }, [
    isHorizontalNavActive,
    isSwiping,
    navSwipeAnimating,
    navSwipeOffset,
    slideDirection,
    containerBounds,
    getFittedRectForMedia,
  ]);

  const commitSlideNavigation = useCallback(() => {
    const direction = slideCommitDirectionRef.current;
    slideCommitDirectionRef.current = null;
    clearNavSwipeCommitTimer();
    setNavSwipeAnimatingState(false);
    setSlideDirection(null);
    setPendingEntryIdx(null);
    setPendingImageIdx(null);
    setNavSwipeOffset(0);
    setIsSwiping(false);
    isSwipingRef.current = false;
    swipeDeltaXRef.current = 0;
    swipeAxisRef.current = 'none';

    if (direction === -1) onPrev();
    else if (direction === 1) onNext();
  }, [clearNavSwipeCommitTimer, setNavSwipeAnimatingState, onPrev, onNext]);

  const scheduleSlideCommit = useCallback(() => {
    clearNavSwipeCommitTimer();
    navSwipeCommitTimerRef.current = window.setTimeout(() => {
      if (slideCommitDirectionRef.current === null) return;
      commitSlideNavigation();
    }, SLIDE_ANIM_MS + 32);
  }, [clearNavSwipeCommitTimer, commitSlideNavigation]);

  const cancelNavSwipeAnimation = useCallback(() => {
    clearNavSwipeCommitTimer();
    slideCommitDirectionRef.current = null;
    setNavSwipeAnimatingState(false);
    setSlideDirection(null);
    setPendingEntryIdx(null);
    setPendingImageIdx(null);
    setNavSwipeOffset(0);
    setIsSwiping(false);
    isSwipingRef.current = false;
    swipeDeltaXRef.current = 0;
    swipeAxisRef.current = 'none';
  }, [clearNavSwipeCommitTimer, setNavSwipeAnimatingState]);

  const startSlideNavigation = useCallback((direction: -1 | 1) => {
    if (!allowNavigation || !finalRect) return;

    if (navSwipeAnimatingRef.current) {
      if (slideCommitDirectionRef.current === direction) {
        rapidNavDirectionRef.current = direction;
        commitSlideNavigation();
        return;
      }

      cancelNavSwipeAnimation();
    }

    clearNavSwipeCommitTimer();
    beginSlideTo(direction);
    slideCommitDirectionRef.current = direction;
    setSlideDirection(direction);
    setNavSwipeAnimatingState(true);
    scheduleSlideCommit();
  }, [
    allowNavigation,
    finalRect,
    commitSlideNavigation,
    cancelNavSwipeAnimation,
    clearNavSwipeCommitTimer,
    beginSlideTo,
    setNavSwipeAnimatingState,
    scheduleSlideCommit,
  ]);

  startSlideNavigationRef.current = startSlideNavigation;

  const clearArrowHoldNavigation = useCallback(() => {
    heldArrowDirectionRef.current = null;
    arrowHoldFastRef.current = false;

    if (arrowHoldIntervalRef.current !== null) {
      window.clearInterval(arrowHoldIntervalRef.current);
      arrowHoldIntervalRef.current = null;
    }

    if (arrowHoldAccelerateTimerRef.current !== null) {
      window.clearTimeout(arrowHoldAccelerateTimerRef.current);
      arrowHoldAccelerateTimerRef.current = null;
    }
  }, []);

  const restartArrowHoldInterval = useCallback((direction: -1 | 1) => {
    if (arrowHoldIntervalRef.current !== null) {
      window.clearInterval(arrowHoldIntervalRef.current);
    }

    const intervalMs = arrowHoldFastRef.current
      ? ARROW_HOLD_FAST_INTERVAL_MS
      : ARROW_HOLD_NORMAL_INTERVAL_MS;

    arrowHoldIntervalRef.current = window.setInterval(() => {
      startSlideNavigationRef.current(direction);
    }, intervalMs);
  }, []);

  const startArrowHoldNavigation = useCallback((direction: -1 | 1) => {
    if (heldArrowDirectionRef.current === direction) return;

    clearArrowHoldNavigation();
    heldArrowDirectionRef.current = direction;
    arrowHoldFastRef.current = false;

    startSlideNavigationRef.current(direction);
    restartArrowHoldInterval(direction);

    arrowHoldAccelerateTimerRef.current = window.setTimeout(() => {
      arrowHoldAccelerateTimerRef.current = null;
      if (heldArrowDirectionRef.current !== direction) return;

      arrowHoldFastRef.current = true;
      restartArrowHoldInterval(direction);
    }, ARROW_HOLD_ACCELERATE_MS);
  }, [clearArrowHoldNavigation, restartArrowHoldInterval]);

  const computeFinalRect = useCallback(() => {
    const ghost = ghostRef.current;
    if (!ghost) return;

    const url = currentItem?.url;
    const cached = url ? mediaDimensionsCacheRef.current.get(url) : undefined;
    if (cached?.width && cached?.height) {
      setFinalRect(fitMediaRectInGhost(ghost, cached.width, cached.height));
      return;
    }

    const media = centerMediaRef.current;
    if (media && url && (media.src === url || media.currentSrc === url)) {
      const { width, height } = getLightboxMediaDimensions(media);
      if (width && height) {
        rememberMediaDimensions(url, width, height);
        setFinalRect(fitMediaRectInGhost(ghost, width, height));
        return;
      }
    }

    const ghostRect = getGhostRect(ghost);
    if (!ghostRect.width || !ghostRect.height) return;
    setFinalRect(ghostRect);
  }, [currentItem?.url, rememberMediaDimensions]);

  const setCenterMediaElement = useCallback((element: HTMLImageElement | HTMLVideoElement | null) => {
    centerMediaRef.current = element;
    if (!element) return;

    if (element instanceof HTMLVideoElement) {
      if (element.readyState >= 1 && element.videoWidth > 0) {
        computeFinalRect();
      }
      return;
    }

    if (element.complete && element.naturalWidth > 0) {
      computeFinalRect();
    }
  }, [computeFinalRect]);

  const handleLayoutChange = useCallback(() => {
    updateContainerBounds();
    computeFinalRect();
    setLayoutVersion((value) => value + 1);
  }, [updateContainerBounds, computeFinalRect]);

  useEffect(() => {
    handleLayoutChange();
    const ghost = ghostRef.current;
    const container = containerRef.current;
    const ro = new ResizeObserver(() => handleLayoutChange());
    if (ghost) ro.observe(ghost);
    if (container) ro.observe(container);
    window.addEventListener('resize', handleLayoutChange);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', handleLayoutChange);
    };
  }, [handleLayoutChange, index, layoutId]);

  useLayoutEffect(() => {
    if (!currentItem) return;
    const media = centerMediaRef.current;
    if (!media) return;

    if (media instanceof HTMLImageElement && media.complete && media.naturalWidth > 0) {
      computeFinalRect();
      return;
    }

    if (media instanceof HTMLVideoElement && media.readyState >= 1 && media.videoWidth > 0) {
      computeFinalRect();
    }
  }, [currentItem?.url, index, computeFinalRect]);

  useEffect(() => {
    syncFinalRectForCurrentItem();
  }, [syncFinalRectForCurrentItem, mediaDimensionsVersion]);

  useEffect(() => {
    const seen = new Set<string>();
    const mediaItems: HiveMedia[] = [];

    const addMedia = (media: HiveMedia | null | undefined) => {
      if (!media?.url || seen.has(media.url)) return;
      seen.add(media.url);
      mediaItems.push(media);
    };

    items.forEach(addMedia);
    lightboxEntries.forEach((entry) => entry.items.forEach(addMedia));

    mediaItems.forEach((media) => {
      if (mediaDimensionsCacheRef.current.has(media.url)) return;
      preloadMediaDimensions(media, rememberMediaDimensions);
    });
  }, [items, lightboxEntries, rememberMediaDimensions]);

  useEffect(() => {
    if (phase !== 'opening' || !finalRect) return;

    if (!sourceRect) {
      setPhase('open');
      return;
    }

    setZoomTransitionActive(false);
    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setZoomTransitionActive(true);
        setPhase('open');
      });
    });

    return () => cancelAnimationFrame(frame);
  }, [phase, finalRect, sourceRect]);

  useEffect(() => {
    if (phase !== 'closing') return;
    const t = setTimeout(() => onClose(), LIGHTBOX_ANIM_MS);
    return () => clearTimeout(t);
  }, [phase, onClose]);

  useEffect(() => {
    return () => {
      clearNavSwipeCommitTimer();
    };
  }, [clearNavSwipeCommitTimer]);

  useLayoutEffect(() => {
    if (prevIndexRef.current === index && prevItemUrlRef.current === currentItem?.url) return;

    clearNavSwipeCommitTimer();
    slideCommitDirectionRef.current = null;
    setSlideDirection(null);
    setPendingEntryIdx(null);
    setPendingImageIdx(null);
    setSwipeOffset(0);
    setNavSwipeOffset(0);
    setNavSwipeAnimatingState(false);
    setSwipeDismiss(false);
    setIsSwiping(false);
    swipeOffsetRef.current = 0;
    swipeDeltaXRef.current = 0;
    swipeAxisRef.current = 'none';
    isSwipingRef.current = false;
    touchStartRef.current = null;
    touchInteractionRef.current = false;

    centerMediaRef.current = null;
    syncFinalRectForCurrentItem();

    prevIndexRef.current = index;
    prevItemUrlRef.current = currentItem?.url;
  }, [index, currentItem?.url, setNavSwipeAnimatingState, clearNavSwipeCommitTimer, syncFinalRectForCurrentItem]);

  useLayoutEffect(() => {
    const rapidDirection = rapidNavDirectionRef.current;
    if (rapidDirection === null) return;

    rapidNavDirectionRef.current = null;
    requestAnimationFrame(() => {
      startSlideNavigationRef.current(rapidDirection);
    });
  }, [index, entryIdx, currentItem?.url]);

  useLayoutEffect(() => {
    if (phase === 'opening') {
      sidePeekOpenDoneRef.current = false;
      setSidePeekAnimating(false);
      return;
    }

    if (phase !== 'open' || sidePeekOpenDoneRef.current) return;
    if (!prevMedia && !nextMedia) {
      sidePeekOpenDoneRef.current = true;
      return;
    }

    setSidePeekAnimating(false);
    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setSidePeekAnimating(true);
        sidePeekOpenDoneRef.current = true;
      });
    });

    return () => cancelAnimationFrame(frame);
  }, [phase, prevMedia?.url, nextMedia?.url]);

  useEffect(() => {
    if (phase !== 'open') return;

    const blockSwipeClick = () => {
      const blockClick = (clickEvent: Event) => {
        clickEvent.stopPropagation();
        clickEvent.preventDefault();
        document.removeEventListener('click', blockClick, true);
      };
      document.addEventListener('click', blockClick, true);
    };

    const commitNavSwipe = (deltaX: number) => {
      const direction: -1 | 1 = deltaX < 0 ? 1 : -1;
      clearNavSwipeCommitTimer();
      beginSlideTo(direction);
      slideCommitDirectionRef.current = direction;
      setSlideDirection(direction);
      setNavSwipeAnimatingState(true);
      scheduleSlideCommit();
    };

    const startNavSwipeRelease = (deltaX: number) => {
      if (Math.abs(deltaX) > SWIPE_NAV_THRESHOLD && allowNavigation) {
        commitNavSwipe(deltaX);
        return;
      }

      slideCommitDirectionRef.current = null;
      setSlideDirection(null);
      setPendingEntryIdx(null);
      setPendingImageIdx(null);
      setNavSwipeAnimatingState(true);
      setNavSwipeOffset(0);
      scheduleNavSwipeSnapBackEnd();
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length !== 1 || navSwipeAnimatingRef.current) return;
      const touch = e.touches[0];

      touchInteractionRef.current = true;
      touchStartRef.current = { x: touch.clientX, y: touch.clientY };
      swipeAxisRef.current = 'none';
      swipeDeltaXRef.current = 0;
      isSwipingRef.current = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartRef.current || e.touches.length !== 1 || navSwipeAnimatingRef.current) return;
      const touch = e.touches[0];
      const deltaX = touch.clientX - touchStartRef.current.x;
      const deltaY = touch.clientY - touchStartRef.current.y;

      if (swipeAxisRef.current === 'none') {
        if (Math.abs(deltaX) < 10 && Math.abs(deltaY) < 10) return;
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
          if (!allowNavigation) return;
          swipeAxisRef.current = 'horizontal';
        } else if (deltaY > 0) {
          if (!allowSwipeDismiss) return;
          swipeAxisRef.current = 'vertical';
        } else {
          return;
        }
      }

      if (swipeAxisRef.current === 'horizontal') {
        isSwipingRef.current = true;
        setIsSwiping(true);
        swipeDeltaXRef.current = deltaX;
        setNavSwipeOffset(deltaX);
        e.preventDefault();
        return;
      }

      if (swipeAxisRef.current === 'vertical') {
        isSwipingRef.current = true;
        setIsSwiping(true);
        swipeOffsetRef.current = deltaY;
        setSwipeOffset(deltaY);
        e.preventDefault();
      }
    };

    const handleTouchEnd = () => {
      if (!touchStartRef.current) return;

      const axis = swipeAxisRef.current;
      const wasSwiping = isSwipingRef.current;

      if (wasSwiping && axis === 'horizontal') {
        startNavSwipeRelease(swipeDeltaXRef.current);
        blockSwipeClick();
      } else if (wasSwiping && axis === 'vertical') {
        const offset = swipeOffsetRef.current;

        if (allowSwipeDismiss && offset > SWIPE_CLOSE_THRESHOLD) {
          const dismissOffset = window.innerHeight;
          swipeOffsetRef.current = dismissOffset;
          setSwipeDismiss(true);
          setSwipeOffset(dismissOffset);
          setPhase('closing');
        } else {
          swipeOffsetRef.current = 0;
          setSwipeOffset(0);
        }

        blockSwipeClick();
      } else if (axis === 'horizontal' && Math.abs(swipeDeltaXRef.current) > 0) {
        startNavSwipeRelease(swipeDeltaXRef.current);
        blockSwipeClick();
      }

      touchStartRef.current = null;
      swipeAxisRef.current = 'none';
      swipeDeltaXRef.current = 0;
      isSwipingRef.current = false;
      setIsSwiping(false);
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd);
    document.addEventListener('touchcancel', handleTouchEnd);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
      document.removeEventListener('touchcancel', handleTouchEnd);
    };
  }, [phase, allowNavigation, setNavSwipeAnimatingState, scheduleNavSwipeSnapBackEnd, clearNavSwipeCommitTimer, allowSwipeDismiss, scheduleSlideCommit, beginSlideTo]);

  const startClosing = useCallback(() => {
    const rect = resolveCloseSourceRect?.() ?? sourceRect ?? null;
    if (rect && finalRect) {
      setCloseSourceRect(rect);
      setZoomTransitionActive(true);
    }
    setPhase('closing');
  }, [resolveCloseSourceRect, sourceRect, finalRect]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isEditor && isPreviewMode) return;
        if (phase === 'closing') return;
        clearArrowHoldNavigation();
        startClosing();
        return;
      }

      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
      if (phase !== 'open') return;
      if (!allowNavigation) return;

      e.preventDefault();

      const direction: -1 | 1 = e.key === 'ArrowLeft' ? -1 : 1;
      if (e.repeat && heldArrowDirectionRef.current === direction) return;

      startArrowHoldNavigation(direction);
    };

    const onKeyUp = (e: KeyboardEvent) => {
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;

      const direction: -1 | 1 = e.key === 'ArrowLeft' ? -1 : 1;
      if (heldArrowDirectionRef.current === direction) {
        clearArrowHoldNavigation();
      }
    };

    const onWindowBlur = () => {
      clearArrowHoldNavigation();
    };

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
    window.addEventListener('blur', onWindowBlur);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
      window.removeEventListener('blur', onWindowBlur);
      clearArrowHoldNavigation();
    };
  }, [
    phase,
    isEditor,
    isPreviewMode,
    startClosing,
    allowNavigation,
    startArrowHoldNavigation,
    clearArrowHoldNavigation,
  ]);

  useEffect(() => {
    if (phase !== 'open') {
      clearArrowHoldNavigation();
    }
  }, [phase, clearArrowHoldNavigation]);

  const handleClose = () => {
    if (phase === 'closing' || isEditMode) return;
    startClosing();
  };

  const isOpen = phase === 'open';
  const isClosing = phase === 'closing';
  const swipeBackdropOpacity = swipeOffset > 0 ? Math.max(0, 1 - swipeOffset / 500) : 1;
  const swipeMediaOpacity = swipeOffset > 0 ? Math.max(0.35, 1 - swipeOffset / 500) : 1;

  const handleNavSwipeTransitionEnd = useCallback((e: React.TransitionEvent<HTMLElement>) => {
    if (e.propertyName !== 'transform' || !navSwipeAnimatingRef.current) return;

    if (slideCommitDirectionRef.current !== null) {
      commitSlideNavigation();
      return;
    }

    clearNavSwipeCommitTimer();
    setNavSwipeAnimatingState(false);
  }, [clearNavSwipeCommitTimer, setNavSwipeAnimatingState, commitSlideNavigation]);

  const zoomSourceRect = phase === 'closing'
    ? (closeSourceRect ?? sourceRect)
    : sourceRect;

  const zoomTransform = zoomSourceRect && finalRect && (phase === 'opening' || isClosing)
    ? getZoomTransform(zoomSourceRect, finalRect)
    : undefined;

  const mediaTransform = isHorizontalNavActive && currentItem
    ? getHorizontalNavTransform(currentItem, 'center')
    : swipeOffset > 0
      ? \`translateY(\${swipeOffset}px)\`
      : zoomTransform;

  const containerMediaRect = finalRect ? toContainerRect(finalRect, containerBounds) : null;
  const useZoomAnimation = Boolean(zoomSourceRect && finalRect);
  const shouldAnimateZoom = useZoomAnimation && (
    phase === 'closing' || (phase === 'open' && zoomTransitionActive)
  );

  const mediaStyle: React.CSSProperties = {
    position: 'absolute',
    top: containerMediaRect?.top,
    left: containerMediaRect?.left,
    width: containerMediaRect?.width,
    height: containerMediaRect?.height,
    objectFit: 'contain',
    transformOrigin: 'top left',
    transform: mediaTransform,
    opacity: swipeOffset > 0
      ? swipeMediaOpacity
      : useZoomAnimation
        ? 1
        : phase === 'opening' || isClosing
          ? 0
          : 1,
    transition: (isSwiping && !navSwipeAnimating)
      ? 'none'
      : navSwipeAnimating
        ? \`transform \${SLIDE_ANIM_MS}ms \${LIGHTBOX_EASING}\`
        : swipeDismiss
          ? \`transform \${LIGHTBOX_ANIM_MS}ms \${LIGHTBOX_EASING}, opacity \${LIGHTBOX_ANIM_MS}ms \${LIGHTBOX_EASING}\`
          : shouldAnimateZoom
            ? \`transform \${LIGHTBOX_ANIM_MS}ms \${LIGHTBOX_EASING}\`
            : phase === 'opening' || isClosing
              ? \`opacity \${LIGHTBOX_ANIM_MS}ms \${LIGHTBOX_EASING}\`
              : 'none',
    pointerEvents: isCurrentVideo && isOpen && !isHorizontalNavActive ? 'auto' : 'none',
    touchAction: isCurrentVideo && isOpen ? 'none' : undefined,
    zIndex: 1,
    overflow: isCurrentVideo ? 'hidden' : undefined,
  };

  const lightboxVideoStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    display: 'block',
    objectFit: 'contain',
    pointerEvents: isOpen && !isHorizontalNavActive ? 'auto' : 'none',
  };

  const getSideMediaStyle = (
    media: HiveMedia,
    side: 'left' | 'right',
    placement: 'adjacent' | 'far' = 'adjacent',
  ): React.CSSProperties => {
    const fittedRect = getFittedRectForMedia(media);
    if (!fittedRect) return { display: 'none' };

    const slidePlacement: SlidePlacement = placement === 'far'
      ? (side === 'left' ? 'far-left' : 'far-right')
      : (side === 'left' ? 'left-adjacent' : 'right-adjacent');
    const { start: sideRect } = slideDirection !== null
      ? getSlideRects(fittedRect, slidePlacement, slideDirection, containerBounds)
      : {
        start: placement === 'far'
          ? getFarPeekRect(fittedRect, side, containerBounds)
          : positionPeekRect(fittedRect, side, containerBounds),
      };
    const containerSideRect = toContainerRect(sideRect, containerBounds);
    const swipeTransform = getHorizontalNavTransform(media, slidePlacement);
    const openSlideOffset = !isHorizontalNavActive && placement === 'adjacent' && isOpen && !sidePeekAnimating
      ? getSideOpenTransform(fittedRect, side, containerBounds)
      : null;
    const isFarSlideActive = placement === 'far'
      && isHorizontalNavActive
      && slideDirection === (side === 'left' ? -1 : 1);
    const useSlideTransition = (isSwiping && !navSwipeAnimating)
      ? false
      : navSwipeAnimating;
    const useSideOpenTransition = placement === 'adjacent' && isOpen && sidePeekAnimating && !isHorizontalNavActive;

    return {
      position: 'absolute',
      top: containerSideRect.top,
      left: containerSideRect.left,
      width: containerSideRect.width,
      height: containerSideRect.height,
      objectFit: 'contain',
      transform: swipeTransform ?? (
        openSlideOffset
          ? \`translate(\${openSlideOffset.x}px, \${openSlideOffset.y}px)\`
          : undefined
      ),
      opacity: placement === 'far'
        ? (isOpen && isFarSlideActive ? 1 : 0)
        : (isOpen ? 1 : 0),
      transition: useSlideTransition
        ? placement === 'far'
          ? \`transform \${SLIDE_ANIM_MS}ms \${LIGHTBOX_EASING}\`
          : \`transform \${SLIDE_ANIM_MS}ms \${LIGHTBOX_EASING}, opacity \${LIGHTBOX_ANIM_MS}ms \${LIGHTBOX_EASING}\`
        : useSideOpenTransition
          ? \`transform \${LIGHTBOX_ANIM_MS}ms \${LIGHTBOX_EASING}\`
          : phase === 'opening' || isClosing
            ? \`opacity \${LIGHTBOX_ANIM_MS}ms \${LIGHTBOX_EASING}\`
            : 'none',
      pointerEvents: 'none',
      zIndex: 1,
    };
  };

  const getPeekHitRectForMedia = (media: HiveMedia, side: 'left' | 'right'): AnimRect | null => {
    const fittedRect = getFittedRectForMedia(media);
    if (!fittedRect) return null;
    return getSidePeekHitRect(positionPeekRect(fittedRect, side, containerBounds), side, containerBounds);
  };

  const handleSidePeekClick = (direction: -1 | 1) => (e: React.MouseEvent<HTMLDivElement>) => {
    if (isEditMode) return;
    if (touchInteractionRef.current) {
      touchInteractionRef.current = false;
      return;
    }
    e.stopPropagation();
    startSlideNavigation(direction);
  };

  const leftPeekHitRect = prevMedia
    ? getPeekHitRectForMedia(prevMedia, 'left')
    : null;
  const rightPeekHitRect = nextMedia
    ? getPeekHitRectForMedia(nextMedia, 'right')
    : null;
  const containerLeftPeekHitRect = leftPeekHitRect
    ? toContainerRect(leftPeekHitRect, containerBounds)
    : null;
  const containerRightPeekHitRect = rightPeekHitRect
    ? toContainerRect(rightPeekHitRect, containerBounds)
    : null;

  return (
    <div
      ref={containerRef}
      className={[
        \`\${P}-lightbox\`,
        isEditor ? \`\${P}-lightbox-editor\` : '',
        isEditMode ? \`\${P}-lightbox-edit-mode\` : '',
      ].filter(Boolean).join(' ')}
      style={{
        touchAction: phase === 'open' ? 'none' : undefined,
      }}
      onClick={handleClose}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: settings.backgroundColor ?? '#FFFFFF',
          opacity: isOpen ? swipeBackdropOpacity : 0,
          transition: isSwiping ? 'none' : \`opacity \${LIGHTBOX_ANIM_MS}ms \${LIGHTBOX_EASING}\`,
          pointerEvents: 'none',
        }}
      />
      <div className={\`\${P}-lightbox-dismiss-area\`}>
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ height: '10%' }} />
          <div
            style={{
              width: '70%',
              height: '80%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div ref={ghostRef} style={{ width: '100%', height: '100%' }} />
          </div>
          <div style={{ height: '10%' }} />
        </div>

        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: isOpen ? 1 : 0,
            transition: isSwiping ? 'none' : \`opacity \${LIGHTBOX_ANIM_MS}ms \${LIGHTBOX_EASING}\`,
            pointerEvents: 'none',
          }}
        >
          <HiveLightboxTitles
            prefix={P}
            entry={entry}
            settings={settings}
            isEditor={isEditor}
            isEditMode={isEditMode}
            isPreviewMode={isPreviewMode}
            onClose={handleClose}
          />
        </div>
      </div>

      {isOpen && renderFarPrevMedia && (
        <LightboxSideMedia
          key={\`far-prev-\${renderFarPrevMedia.url}\`}
          media={renderFarPrevMedia}
          style={getSideMediaStyle(renderFarPrevMedia, 'left', 'far')}
          onMeasure={rememberMediaDimensions}
          onTransitionEnd={handleNavSwipeTransitionEnd}
        />
      )}

      {isOpen && prevMedia && (
        <>
          <LightboxSideMedia
            key={\`prev-\${prevMedia.url}\`}
            media={prevMedia}
            style={getSideMediaStyle(prevMedia, 'left')}
            onMeasure={rememberMediaDimensions}
            onTransitionEnd={handleNavSwipeTransitionEnd}
          />
          {containerLeftPeekHitRect && (
            <div
              style={{
                position: 'absolute',
                top: containerLeftPeekHitRect.top,
                left: containerLeftPeekHitRect.left,
                width: containerLeftPeekHitRect.width,
                height: containerLeftPeekHitRect.height,
                cursor: isEditMode || isSwiping ? 'default' : 'pointer',
                pointerEvents: isEditMode || isSwiping ? 'none' : 'auto',
                zIndex: 3,
              }}
              onClick={handleSidePeekClick(-1)}
            />
          )}
        </>
      )}

      {isOpen && nextMedia && (
        <>
          <LightboxSideMedia
            key={\`next-\${nextMedia.url}\`}
            media={nextMedia}
            style={getSideMediaStyle(nextMedia, 'right')}
            onMeasure={rememberMediaDimensions}
            onTransitionEnd={handleNavSwipeTransitionEnd}
          />
          {containerRightPeekHitRect && (
            <div
              style={{
                position: 'absolute',
                top: containerRightPeekHitRect.top,
                left: containerRightPeekHitRect.left,
                width: containerRightPeekHitRect.width,
                height: containerRightPeekHitRect.height,
                cursor: isEditMode || isSwiping ? 'default' : 'pointer',
                pointerEvents: isEditMode || isSwiping ? 'none' : 'auto',
                zIndex: 3,
              }}
              onClick={handleSidePeekClick(1)}
            />
          )}
        </>
      )}

      {isOpen && renderFarNextMedia && (
        <LightboxSideMedia
          key={\`far-next-\${renderFarNextMedia.url}\`}
          media={renderFarNextMedia}
          style={getSideMediaStyle(renderFarNextMedia, 'right', 'far')}
          onMeasure={rememberMediaDimensions}
          onTransitionEnd={handleNavSwipeTransitionEnd}
        />
      )}

      {finalRect && currentItem && (
        isCurrentVideo ? (
          <LightboxVideo
            key={\`\${index}-\${currentItem.url}\`}
            src={currentItem.url}
            phase={phase}
            onMediaElement={setCenterMediaElement}
            wrapperStyle={mediaStyle}
            videoStyle={lightboxVideoStyle}
            onLoadedMetadata={computeFinalRect}
            onTransitionEnd={handleNavSwipeTransitionEnd}
          />
        ) : (
          <img
            key={\`\${index}-\${currentItem.url}\`}
            ref={setCenterMediaElement}
            src={currentItem.url}
            alt={currentItem.name}
            onLoad={computeFinalRect}
            onTransitionEnd={handleNavSwipeTransitionEnd}
            style={mediaStyle}
          />
        )
      )}
    </div>
  );
}

export function Hive({
  settings,
  content,
  isEditor,
  isPreviewMode,
  isEditMode,
  layoutId,
  portalId,
}: HiveProps) {
  const { prefix: P } = useScopedStyles();
  const { gridLayout, verticalGap, align = 'top', imageDisplay } = settings;

  const isCover = imageDisplay?.display === 'cover';
  const ratioValue = imageDisplay?.ratioValue ?? '1:1';
  const ratioReversed = imageDisplay?.reversed ?? false;
  const [rW, rH] = ratioValue.split(':').map(Number);
  const effW = ratioReversed ? rH : rW;
  const effH = ratioReversed ? rW : rH;
  const aspectRatio = \`\${effW} / \${effH}\`;

  const size = gridLayout.entryWidth ?? 0.2;
  const columnsCount = gridLayout.columnsCount;
  const entryWidthScaled = scalingValue(size, isEditor);
  const horizontalGapScaled = scalingValue(gridLayout.horizontalGap ?? 0, isEditor);
  const imageWrapperWidth = entryWidthScaled;
  const controlWidthStyle = entryWidthScaled;

  const imageWrapperStyle: React.CSSProperties = {
    width: imageWrapperWidth,
    ...(isCover
      ? { aspectRatio, height: 'auto', overflow: 'hidden' }
      : { height: 'auto' }),
  };

  const imageStyle: React.CSSProperties = isCover
    ? {
        objectFit: 'cover',
        pointerEvents: 'auto',
        width: '100%',
        height: '100%',
        maxWidth: '100%',
      }
    : {
        objectFit: 'contain',
        pointerEvents: 'auto',
        width: 'auto',
        height: 'auto',
        maxWidth: '100%',
      };

  const containerRef = useRef<HTMLDivElement>(null);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxItems, setLightboxItems] = useState<HiveMedia[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxEntryIdx, setLightboxEntryIdx] = useState(0);
  const [lightboxSourceRect, setLightboxSourceRect] = useState<AnimRect | null>(null);
  const [lightboxEntry, setLightboxEntry] = useState<HiveLightboxTextEntry>({
    title1: '',
    title2: '',
    title3: '',
  });

  const lightboxPortalStyle = (() => {
    const style: Record<string, string> = {};
    const articleWidth = containerRef.current
      ? getComputedStyle(containerRef.current).getPropertyValue('--cntrl-article-width').trim()
      : '';
    if (articleWidth) {
      style['--cntrl-article-width'] = articleWidth;
    }
    return style as React.CSSProperties;
  })();

  const canOpenLightbox = !isEditor || isPreviewMode || isEditMode;
  const scopedCss = useMemo(() => getCSS(P), [P]);
  const items = content ?? [];
  const itemsInLastRow = items.length % columnsCount || columnsCount;
  const isPartialLastRow = itemsInLastRow < columnsCount && items.length > 0;
  const lastRowStartIndex = items.length - itemsInLastRow;
  const lastRowStartColumn = isPartialLastRow
    ? Math.floor((columnsCount - itemsInLastRow) / 2) + 1
    : 1;
  const allLightboxEntries = useMemo(() => buildLightboxEntries(items), [items]);
  const allMedia = useMemo(() => collectAllHiveMedia(items), [items]);

  const openLightbox = (gridIndex: number, imageIdx: number, sourceRect?: AnimRect) => {
    if (isEditor && !isEditMode && !isPreviewMode) return;
    const entryIdx = allLightboxEntries.findIndex(entry => entry.gridIndex === gridIndex);
    if (entryIdx < 0) return;

    const data = allLightboxEntries[entryIdx];
    setLightboxEntryIdx(entryIdx);
    setLightboxItems(data.items);
    setLightboxIndex(imageIdx);
    setLightboxEntry(data.entry);
    setLightboxSourceRect(sourceRect ?? null);
    setLightboxOpen(true);
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    setLightboxSourceRect(null);
  }, []);

  const resolveCloseSourceRect = useCallback((): AnimRect | null => {
    const entry = allLightboxEntries[lightboxEntryIdx];
    if (!entry || !containerRef.current) return lightboxSourceRect;

    return getGridItemSourceRect(
      containerRef.current,
      entry.gridIndex,
      isCover ? 'cover' : 'contain',
    ) ?? lightboxSourceRect;
  }, [allLightboxEntries, lightboxEntryIdx, lightboxSourceRect, isCover]);

  const navigateLightbox = useCallback((direction: -1 | 1) => {
    if (allLightboxEntries.length > 1) {
      const len = allLightboxEntries.length;
      const newEntryIdx = (lightboxEntryIdx + direction + len) % len;
      const newData = allLightboxEntries[newEntryIdx];
      const newImageIdx = Math.min(lightboxIndex, newData.items.length - 1);

      setLightboxEntryIdx(newEntryIdx);
      setLightboxItems(newData.items);
      setLightboxIndex(newImageIdx);
      setLightboxEntry(newData.entry);
      return;
    }

    setLightboxIndex((prev) => (prev + direction + lightboxItems.length) % lightboxItems.length);
  }, [allLightboxEntries, lightboxEntryIdx, lightboxIndex, lightboxItems.length]);

  const canNavigateLightbox = allLightboxEntries.length > 1 || lightboxItems.length > 1;

  useEffect(() => {
    if (!lightboxOpen) return;
    if (typeof document === 'undefined') return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [lightboxOpen]);

  useEffect(() => {
    if (!isEditor || isEditMode || isPreviewMode) return;
    setLightboxOpen(false);
  }, [isEditor, isEditMode, isPreviewMode]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: scopedCss }} />
      <PreloadedMediaPool mediaList={allMedia} />
      <div
        ref={containerRef}
        className={\`\${P}-wrapper \${P}-align-entries \${P}-image-align-\${align}\`.trim()}
        style={{
          gridTemplateColumns: \`repeat(\${columnsCount}, \${entryWidthScaled})\`,
          rowGap: 0,
          columnGap: horizontalGapScaled,
          width: scalingValue(gridLayout.wrapperWidth ?? 0, isEditor),
          [\`--\${P}-align-entries-row-gap\`]: scalingValue(verticalGap ?? 0, isEditor),
        }}
      >
        {items.map((item, index) => {
          const gallery = normalizeGallery(item.gallery);
          const displayItems = getDisplayItems(gallery);
          const lightboxItemsForEntry = displayItems
            .filter(entry => entry.lightboxMedia)
            .map(entry => entry.lightboxMedia!);
          const isLastRow = Math.floor(index / columnsCount)
            === Math.ceil(items.length / columnsCount) - 1;
          const gridColumn = isPartialLastRow && index >= lastRowStartIndex
            ? \`\${lastRowStartColumn + (index - lastRowStartIndex)}\`
            : undefined;

          const firstDisplayItem = displayItems[0];
          const entryLightboxIndex = firstDisplayItem?.lightboxMedia
            ? lightboxItemsForEntry.findIndex(media => media.url === firstDisplayItem.lightboxMedia!.url)
            : -1;

          const imageContent = (
            <div className={\`\${P}-item-image-wrapper\`} style={imageWrapperStyle}>
              {displayItems.length > 0 && (
                <MediaItem
                  media={firstDisplayItem.displayMedia}
                  gridIndex={index}
                  className={\`\${P}-item-\${isVideoMedia(firstDisplayItem.displayMedia) ? 'video' : 'image'}\`.trim()}
                  style={imageStyle}
                  onMediaClick={canOpenLightbox && entryLightboxIndex >= 0
                    ? (e) => openLightbox(
                      index,
                      entryLightboxIndex,
                      getMediaClickSourceRect(e.currentTarget, isCover ? 'cover' : 'contain'),
                    )
                    : undefined}
                />
              )}
            </div>
          );

          return (
            <div key={index} className={\`\${P}-item\`}>
              <div
                className={[
                  isEditMode ? \`\${P}-item-inner\` : \`\${P}-item-inner-hidden\`,
                  isLastRow ? \`\${P}-item-inner-last-row\` : '',
                ].filter(Boolean).join(' ')}
                style={{
                  width: entryWidthScaled,
                  ...(gridColumn ? { gridColumn } : {}),
                }}
              >
                <div className={\`\${P}-item-title-row\`}>
                  <div style={{ height: 0, width: controlWidthStyle }} />
                </div>
                <a className={\`\${P}-item-image-link\`}>
                  {imageContent}
                </a>
                <div className={\`\${P}-item-subtitle-row\`}>
                  <div style={{ height: 0, width: controlWidthStyle }} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {lightboxOpen && typeof document !== 'undefined' && (() => {
        const portalTarget = (portalId ? document.getElementById(portalId) : null) ?? document.body;
        return createPortal(
          <div style={lightboxPortalStyle} data-selection="none">
            <Lightbox
              prefix={P}
              items={lightboxItems}
              index={lightboxIndex}
              entry={lightboxEntry}
              settings={settings}
              isEditor={isEditor}
              isEditMode={isEditMode}
              isPreviewMode={isPreviewMode}
              canNavigate={canNavigateLightbox}
              lightboxEntries={allLightboxEntries}
              entryIdx={lightboxEntryIdx}
              layoutId={layoutId}
              sourceRect={lightboxSourceRect}
              resolveCloseSourceRect={resolveCloseSourceRect}
              onClose={closeLightbox}
              onPrev={() => navigateLightbox(-1)}
              onNext={() => navigateLightbox(1)}
            />
          </div>,
          portalTarget,
        );
      })()}
    </>
  );
}
`,nq="data:image/svg+xml,"+encodeURIComponent('<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.959 0.40332L0.402635 15.9597" stroke="#000000" stroke-width="1.14"/><path d="M15.959 15.9594L0.402635 0.403002" stroke="#000000" stroke-width="1.14"/></svg>'),nG={fontSettings:{type:"object",display:{type:"font-settings-weight"},properties:{fontWeight:{type:"number"},fontStyle:{type:"string"}}},fontSize:{type:"number",display:{type:"font-size"}},lineHeight:{type:"number",display:{type:"line-height-input"}},letterSpacing:{type:"number",display:{type:"letter-spacing-input"}},wordSpacing:{type:"number",display:{type:"word-spacing-input"}},textAlign:{type:"string",enum:["left","center","right","justify"],display:{type:"vertical-text-aligh-options"}},textAppearance:{type:"object",display:{type:"text-appearance",useTabDesign:!0},properties:{textTransform:{type:"string",enum:["none","uppercase","lowercase","capitalize"]},textDecoration:{type:"string",enum:["none","underline"]},fontVariant:{type:"string",enum:["normal","small-caps"]}}}},nK=nm.filter(e=>"count"!==e),nU=nK.reduce((e,t)=>({...e,...function(e){let t={};return t[ng(e,"fontFamily")]={type:"string",scope:"common",title:"",display:{type:"font-family-select",hideLabel:!0,useTabDesign:!0}},t[ng(e,"fontSettings")]={...nG.fontSettings,scope:"common",title:"",display:{type:"font-settings-weight",hideLabel:!0,useTabDesign:!0}},t[ng(e,"fontSize")]={...nG.fontSize,scope:"layout",title:"",display:{type:"font-size"}},t[ng(e,"lineHeight")]={...nG.lineHeight,scope:"layout",title:"",display:{type:"line-height-input"}},t[ng(e,"letterSpacing")]={...nG.letterSpacing,scope:"layout",title:"",display:{type:"letter-spacing-input"}},t[ng(e,"wordSpacing")]={...nG.wordSpacing,scope:"layout",title:"",display:{type:"word-spacing-input"}},t[ng(e,"textAlign")]={...nG.textAlign,scope:"layout",title:"",display:{type:"vertical-text-aligh-options"}},t[ng(e,"textAppearance")]={...nG.textAppearance,scope:"layout",title:"",display:{type:"text-appearance",useTabDesign:!0}},t}(t)}),{}),nX=nK.reduce((e,t)=>({...e,[ng(t,"fontFamily")]:"Arial",[ng(t,"fontSettings")]:{fontWeight:400,fontStyle:"normal"},[ng(t,"letterSpacing")]:0,[ng(t,"wordSpacing")]:0,[ng(t,"textAlign")]:"left",[ng(t,"textAppearance")]:{textTransform:"none",textDecoration:"none",fontVariant:"normal"}}),{});function nY(e){return nK.reduce((t,i)=>{let n=e[`${i}FontSize`],o=e[`${i}LineHeight`];return void 0!==n&&(t[ng(i,"fontSize")]=n),void 0!==o&&(t[ng(i,"lineHeight")]=o),t},{})}let nJ={type:"tab",id:"journalTextStyle",tabs:Object.fromEntries(nK.map(e=>[nh[e],nf(e)]))},nZ={title1:"NASA",title2:"Ames Research Center",title3:"Archive Footage"},nQ={type:"object",version:1,content:{type:"array",settings:{addItemFromFileExplorer:!0,allowsVideo:!0},display:{type:"array"},items:{type:"object",properties:{title1:{type:"string",label:"Title",placeholder:"Add Title...",display:{type:"text-input"}},title2:{type:"string",label:"Subtitle",placeholder:"Add Subtitle...",display:{type:"text-input"}},title3:{type:"string",label:"Caption",placeholder:"Add Caption...",display:{type:"text-input"}},gallery:{type:"array",label:"Gallery",max:1,display:{type:"media-pair-list-input"},items:{type:"object",properties:{media:{type:"array",items:{type:"object",properties:{url:{type:"string"},name:{type:"string"},type:{type:"string",enum:["image","video"]},objectFit:{type:"string",enum:["cover","contain"]}}}}}}}},required:["gallery"]},default:(()=>{let e=[];for(let t=1;t<=24;t+=1)e.push({...nZ,gallery:[{media:[{url:`https://cdn.cntrl.site/component-assets/hive_${t}.jpg`,name:"",objectFit:"cover"},{url:"",name:"",objectFit:"cover"}]}]});return e})()},settings:{sizing:"auto auto",properties:{gridLayout:{type:"grid-layout",scope:"layout",display:{type:"grid-layout"},gridParams:{type:"object",properties:{columnsCount:{type:"number",title:"Columns",min:1,max:9999,display:{type:"numeric-input"}},wrapperWidth:{type:"number",title:"Width",min:0},entryWidth:{type:"number",title:"Entry",min:0},horizontalGap:{type:"number",title:"Gutter",min:0}}}},verticalGap:{type:"number",scope:"layout",title:"Vertical Gap",display:{type:"numeric-input"},min:0,max:1e3},align:{type:"string",scope:"layout",title:"Align",display:{type:"toggle-cycle",enum:["top","center","bottom"]}},imageDisplay:{type:"object",scope:"common",title:"Display",display:{type:"image-ratio-control"},properties:{display:{type:"string",enum:["fit","cover"]},ratioValue:{type:"string",enum:["1:1","2:3","3:4","4:5","16:9"]},reversed:{type:"boolean"}}},title1Width:{type:"number",scope:"layout",title:"Title 1 width",min:0,display:{type:"range-control"}},title2Width:{type:"number",scope:"layout",title:"Title 2 width",min:0,display:{type:"range-control"}},title3Width:{type:"number",scope:"layout",title:"Title 3 width",min:0,display:{type:"range-control"}},title2MarginLeft:{type:"number",scope:"layout",title:"Title 2 margin left",min:0,display:{type:"range-control"}},title3MarginLeft:{type:"number",scope:"layout",title:"Title 3 margin left",min:0,display:{type:"range-control"}},titleHeaderLayout:{type:"string",scope:"layout",title:"Title header layout",display:{type:"toggle-cycle",enum:["desktop","mobile"]}},title1MarginLeft:{type:"number",scope:"layout",title:"Title 1 margin left",min:0,display:{type:"range-control"}},titleRowMarginBottom:{type:"number",scope:"layout",title:"Title row margin bottom",min:0,display:{type:"range-control"}},title1Color:{type:"string",scope:"common",title:"Title Default",display:{type:"palette-color-picker"}},title2Color:{type:"string",scope:"common",title:"Subtitle Default",display:{type:"palette-color-picker"}},title3Color:{type:"string",scope:"common",title:"Caption Default",display:{type:"palette-color-picker"}},contentMarginTop:{type:"number",scope:"layout",title:"Content margin top",min:0,display:{type:"range-control"}},backgroundColor:{type:"string",scope:"common",title:"BG Lightbox",display:{type:"settings-color-picker"}},closeIcon:{type:["string","null"],scope:"common",title:"",display:{type:"settings-image-input"}},closeIconMaxWidth:{type:"number",scope:"layout",title:"Max Width",display:{type:"full-width-input"},min:0,max:1},closeIconColor:{type:"string",scope:"common",title:"Icon Default",display:{type:"settings-color-picker"}},closeIconHoverColor:{type:"string",scope:"common",title:"Icon Hover",display:{type:"settings-color-picker"}},iconMarginRight:{type:"number",scope:"layout",title:"Icon margin right",min:0,display:{type:"range-control"}},...nU},defaults:{imageDisplay:{display:"fit",ratioValue:"2:3",reversed:!1},align:"top",title1Color:"#000000",title2Color:"#000000",title3Color:"#000000",backgroundColor:"#FFFFFF",closeIcon:nq,closeIconColor:"#000000",closeIconHoverColor:"#999999",...nX},layoutDefaults:{m:{gridLayout:{entryWidth:.37837,horizontalGap:.081,wrapperWidth:1,columnsCount:2,lockedParam:"wrapperWidth"},verticalGap:.081,titleHeaderLayout:"mobile",title1Width:.4,title2Width:.464864,title3Width:.3,title1MarginLeft:.04,title2MarginLeft:.04,title3MarginLeft:.08,titleRowMarginBottom:.08,contentMarginTop:.081,closeIconMaxWidth:.081,iconMarginRight:.05405,...nY({title1FontSize:.04864,title1LineHeight:.056756,title2FontSize:.04864,title2LineHeight:.056756,title3FontSize:.04864,title3LineHeight:.056756})},t:{gridLayout:{entryWidth:.10416,horizontalGap:.013,wrapperWidth:1,columnsCount:8,lockedParam:"wrapperWidth"},verticalGap:.013,titleHeaderLayout:"desktop",title1Width:.3,title2Width:.248,title3Width:.1,title1MarginLeft:.01,title2MarginLeft:.1,title3MarginLeft:.1,titleRowMarginBottom:0,contentMarginTop:.026,closeIconMaxWidth:.039,iconMarginRight:.026,...nY({title1FontSize:.02083,title1LineHeight:.02734,title2FontSize:.02083,title2LineHeight:.02734,title3FontSize:.02083,title3LineHeight:.02734})},d:{gridLayout:{entryWidth:.06944,horizontalGap:.006944,wrapperWidth:1,columnsCount:12,lockedParam:"wrapperWidth"},verticalGap:.00694,titleHeaderLayout:"desktop",title1Width:.35,title2Width:.248,title3Width:.1,title1MarginLeft:.01,title2MarginLeft:.1,title3MarginLeft:.1,titleRowMarginBottom:0,contentMarginTop:.01,closeIconMaxWidth:.0125,iconMarginRight:.01,...nY({title1FontSize:.0098,title1LineHeight:.0098,title2FontSize:.0098,title2LineHeight:.0098,title3FontSize:.0098,title3LineHeight:.0098})}},displayRules:[{if:{name:"imageDisplay.display",value:"cover"},then:{name:"properties.align.display.enabled",value:!1}}],layout:["__componentName__","gridLayout","verticalGap","align","imageDisplay","title1Width","title2Width","title3Width","title2MarginLeft","title3MarginLeft","titleHeaderLayout","titleRowMarginBottom","title1MarginLeft","contentMarginTop","closeIconMaxWidth","iconMarginRight"]},panels:[{id:"general",icon:"settings",title:"General",tooltip:"General Settings",layout:["__componentName__",{type:"row",title:"",items:[{type:"group",title:"",items:["gridLayout"]}]},{type:"row",title:"",items:["verticalGap"]},{type:"row",title:"",items:["imageDisplay","align"]},{type:"row",title:"Close icon",items:["closeIcon","closeIconMaxWidth"]}]},{id:"typeStyle",icon:"text-icon",title:"Type Style",tooltip:"Typography",layout:[nJ]}],paletteBookmark:{items:["title1Color","title2Color","title3Color","backgroundColor","closeIconColor","closeIconHoverColor"],panelIds:["general","typeStyle"]}},n0={element:function({settings:e,content:t,isEditor:i,isPreviewMode:r,isEditMode:s,layoutId:c,portalId:d}){let{prefix:u}=a.useScopedStyles(),{gridLayout:p,verticalGap:m,align:g="top",imageDisplay:h}=e,f=(null==h?void 0:h.display)==="cover",y=(null==h?void 0:h.ratioValue)??"1:1",v=(null==h?void 0:h.reversed)??!1,[x,b]=y.split(":").map(Number),w=`${v?b:x} / ${v?x:b}`,$=p.entryWidth??.2,S=p.columnsCount,C=a.scalingValue($,i),P=a.scalingValue(p.horizontalGap??0,i),L={width:C,...f?{aspectRatio:w,height:"auto",overflow:"hidden"}:{height:"auto"}},T=f?{objectFit:"cover",pointerEvents:"auto",width:"100%",height:"100%",maxWidth:"100%"}:{objectFit:"contain",pointerEvents:"auto",width:"auto",height:"auto",maxWidth:"100%"},M=o.useRef(null),[E,I]=o.useState(!1),[k,R]=o.useState([]),[F,A]=o.useState(0),[W,H]=o.useState(0),[_,N]=o.useState(null),[j,z]=o.useState({title1:"",title2:"",title3:""}),B=(()=>{let e={},t=M.current?getComputedStyle(M.current).getPropertyValue("--cntrl-article-width").trim():"";return t&&(e["--cntrl-article-width"]=t),e})(),O=!i||r||s,D=o.useMemo(()=>`
.${u}-wrapper {
  display: grid;
  align-items: start;
  justify-content: center;
  min-height: calc(var(--cntrl-article-width, 100vw) * 0.03333333333333333);
}
.${u}-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.${u}-item-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  outline: 1px solid #FF5C02;
}
.${u}-item-inner-hidden {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.${u}-item-image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
}
.${u}-item-image-link {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.${u}-item-image {
  width: 100%;
  height: 100%;
  display: block;
  max-width: 100%;
}
.${u}-item-video {
  width: 100%;
  height: 100%;
  display: block;
  max-width: 100%;
}
.${u}-image-align-top .${u}-item-image-wrapper {
  align-items: flex-start;
}
.${u}-image-align-center .${u}-item-image-wrapper {
  align-items: center;
}
.${u}-image-align-bottom .${u}-item-image-wrapper {
  align-items: flex-end;
}
.${u}-align-entries .${u}-item {
  display: contents;
}
.${u}-align-entries .${u}-item-inner,
.${u}-align-entries .${u}-item-inner-hidden {
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 3;
  justify-self: center;
  margin-bottom: var(--${u}-align-entries-row-gap, 0);
}
.${u}-align-entries .${u}-item-inner-last-row {
  margin-bottom: 0;
}
.${u}-align-entries .${u}-item-title-row,
.${u}-align-entries .${u}-item-subtitle-row {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100%;
}
.${u}-align-entries .${u}-item-image-link {
  width: 100%;
  height: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.${u}-align-entries .${u}-item-image-link > .${u}-item-image-wrapper {
  flex-shrink: 0;
  height: auto;
  align-self: auto;
}
.${u}-image-align-top.${u}-align-entries .${u}-item-image-link > .${u}-item-image-wrapper {
  margin-top: 0;
  margin-bottom: auto;
}
.${u}-image-align-center.${u}-align-entries .${u}-item-image-link > .${u}-item-image-wrapper {
  margin-top: auto;
  margin-bottom: auto;
}
.${u}-image-align-bottom.${u}-align-entries .${u}-item-image-link > .${u}-item-image-wrapper {
  margin-top: auto;
  margin-bottom: 0;
}
.${u}-image-align-top.${u}-align-entries .${u}-item-image-wrapper {
  align-items: flex-start;
}
.${u}-image-align-center.${u}-align-entries .${u}-item-image-wrapper {
  align-items: center;
}
.${u}-image-align-bottom.${u}-align-entries .${u}-item-image-wrapper {
  align-items: flex-end;
}
.${u}-image-align-top.${u}-align-entries .${u}-item-image-link {
  justify-content: flex-start;
}
.${u}-image-align-center.${u}-align-entries .${u}-item-image-link {
  justify-content: center;
}
.${u}-image-align-bottom.${u}-align-entries .${u}-item-image-link {
  justify-content: flex-end;
}
.${u}-titles-row {
  position: relative;
  flex: 0 1 auto;
  z-index: 2;
  box-sizing: border-box;
  pointer-events: none;
  word-break: break-word;
  min-width: 0;
  display: flex;
  flex-direction: row;
  align-items: baseline;
}
.${u}-titles-row-header {
  flex: 1;
  align-items: baseline;
}
.${u}-titles-row-header-controls {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  flex-shrink: 0;
}
.${u}-close-icon {
  position: relative;
  flex-shrink: 0;
  align-self: center;
  pointer-events: auto;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  padding: 0;
}
.${u}-close-icon-inner {
  all: unset;
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 100%;
  pointer-events: auto;
}
.${u}-close-icon-img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.${u}-titles-baseline-strut {
  width: 0;
  overflow: hidden;
  flex-shrink: 0;
  pointer-events: none;
  white-space: nowrap;
}
.${u}-titles-row-titles {
  position: relative;
  flex: 1;
  min-width: 0;
  align-self: flex-start;
}
.${u}-titles-stack {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  align-self: flex-start;
  min-width: 0;
}
.${u}-titles-row-two-row {
  display: flex;
  flex: 1;
  height: 100%;
  min-height: 0;
  align-self: stretch;
  flex-direction: column;
  width: 100%;
}
.${u}-titles-row-top {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  width: 100%;
  flex-shrink: 0;
  margin-bottom: 0;
}
.${u}-titles-row-top .${u}-title-cell[data-title="title1"] {
  flex: 0 0 auto;
  min-width: 0;
}
.${u}-titles-row-bottom-wrap {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: auto;
  flex-shrink: 0;
}
.${u}-titles-row-bottom-area {
  position: relative;
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
}
.${u}-titles-row-bottom {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  width: 100%;
}
.${u}-titles-row-bottom .${u}-title-cell {
  flex: 0 0 auto;
}
.${u}-title-cell {
  position: relative;
  flex: 0 0 auto;
  min-width: 0;
  box-sizing: border-box;
}
.${u}-text-bar-cell {
  position: relative;
  flex: 0 1 auto;
  min-width: 0;
  display: flex;
  align-items: baseline;
}
.${u}-title1,
.${u}-title2,
.${u}-title3 {
  margin: 0;
  min-width: 0;
}
.${u}-title-resize-handle {
  background: transparent;
}
.${u}-title-resize-handle::after {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background: #FF5C02;
  pointer-events: none;
}
.${u}-lightbox {
  position: fixed;
  inset: 0;
  z-index: 9997;
  overscroll-behavior: none;
  overflow: hidden;
}
.${u}-lightbox-editor {
  inset: auto;
  top: var(--cntrl-article-top, 0);
  left: var(--cntrl-article-left, 0);
  width: var(--cntrl-article-width, 100vw) !important;
  height: var(--cntrl-viewport-height, 100vh) !important;
}
.${u}-lightbox-edit-mode {
  z-index: 1;
}
.${u}-lightbox-dismiss-area {
  position: relative;
  width: 100%;
  height: 100%;
}
.${u}-lightbox-overlay-content {
  position: absolute;
  inset: 0;
  z-index: 3;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  isolation: isolate;
}
.${u}-lightbox-content-area {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex: 1;
  min-width: 0;
  min-height: 0;
}
.${u}-lightbox-content-area-stacked {
  align-items: stretch;
  align-self: stretch;
}
.${u}-text-bar-cell-stacked {
  align-self: stretch;
  flex: 1;
  min-width: 0;
  min-height: 0;
  height: 100%;
  flex-direction: column;
  align-items: stretch;
}
.${u}-control {
  position: relative;
  z-index: 2;
  pointer-events: auto;
  flex-shrink: 0;
}
`,[u]),V=t??[],q=V.length%S||S,G=q<S&&V.length>0,K=V.length-q,U=G?Math.floor((S-q)/2)+1:1,X=o.useMemo(()=>V.reduce((e,t,i)=>{let n=nN(n_(t.gallery)).filter(e=>e.lightboxMedia).map(e=>e.lightboxMedia);return 0===n.length||e.push({gridIndex:i,items:n,entry:{title1:t.title1??"",title2:t.title2??"",title3:t.title3??""}}),e},[]),[V]),Y=o.useMemo(()=>(function(e){let t=new Set,i=[];for(let n of e)for(let e of nN(n_(n.gallery)))for(let n of[e.displayMedia,e.lightboxMedia])null!=n&&n.url&&!t.has(n.url)&&(t.add(n.url),i.push(n));return i})(V),[V]),J=o.useCallback(()=>{I(!1),N(null)},[]),Z=o.useCallback(()=>{let e=X[W];return e&&M.current?function(e,t,i){let n=e.querySelector(`[data-hive-grid-index="${t}"]`);return n instanceof HTMLElement?nC(n,i):null}(M.current,e.gridIndex,f?"cover":"contain")??_:_},[X,W,_,f]),Q=o.useCallback(e=>{if(X.length>1){let t=X.length,i=(W+e+t)%t,n=X[i],o=Math.min(F,n.items.length-1);H(i),R(n.items),A(o),z(n.entry);return}A(t=>(t+e+k.length)%k.length)},[X,W,F,k.length]),ee=X.length>1||k.length>1;return o.useEffect(()=>{if(!E||typeof document>"u")return;let e=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=e}},[E]),o.useEffect(()=>{!i||s||r||I(!1)},[i,s,r]),n.jsxs(n.Fragment,{children:[n.jsx("style",{dangerouslySetInnerHTML:{__html:D}}),n.jsx(nR,{mediaList:Y}),n.jsx("div",{ref:M,className:`${u}-wrapper ${u}-align-entries ${u}-image-align-${g}`.trim(),style:{gridTemplateColumns:`repeat(${S}, ${C})`,rowGap:0,columnGap:P,width:a.scalingValue(p.wrapperWidth??0,i),[`--${u}-align-entries-row-gap`]:a.scalingValue(m??0,i)},children:V.map((e,t)=>{let o=nN(n_(e.gallery)),a=o.filter(e=>e.lightboxMedia).map(e=>e.lightboxMedia),l=Math.floor(t/S)===Math.ceil(V.length/S)-1,c=G&&t>=K?`${U+(t-K)}`:void 0,d=o[0],p=null!=d&&d.lightboxMedia?a.findIndex(e=>e.url===d.lightboxMedia.url):-1,m=n.jsx("div",{className:`${u}-item-image-wrapper`,style:L,children:o.length>0&&n.jsx(nz,{media:d.displayMedia,gridIndex:t,className:`${u}-item-${nj(d.displayMedia)?"video":"image"}`.trim(),style:T,onMediaClick:O&&p>=0?e=>((e,t,n)=>{if(i&&!s&&!r)return;let o=X.findIndex(t=>t.gridIndex===e);if(o<0)return;let a=X[o];H(o),R(a.items),A(t),z(a.entry),N(n??null),I(!0)})(t,p,nC(e.currentTarget,f?"cover":"contain")):void 0})});return n.jsx("div",{className:`${u}-item`,children:n.jsxs("div",{className:[s?`${u}-item-inner`:`${u}-item-inner-hidden`,l?`${u}-item-inner-last-row`:""].filter(Boolean).join(" "),style:{width:C,...c?{gridColumn:c}:{}},children:[n.jsx("div",{className:`${u}-item-title-row`,children:n.jsx("div",{style:{height:0,width:C}})}),n.jsx("a",{className:`${u}-item-image-link`,children:m}),n.jsx("div",{className:`${u}-item-subtitle-row`,children:n.jsx("div",{style:{height:0,width:C}})})]})},t)})}),E&&"u">typeof document&&(()=>{let t=(d?document.getElementById(d):null)??document.body;return l.createPortal(n.jsx("div",{style:B,"data-selection":"none",children:n.jsx(nD,{prefix:u,items:k,index:F,entry:j,settings:e,isEditor:i,isEditMode:s,isPreviewMode:r,canNavigate:ee,lightboxEntries:X,entryIdx:W,layoutId:c,sourceRect:_,resolveCloseSourceRect:Z,onClose:J,onPrev:()=>Q(-1),onNext:()=>Q(1)})}),t)})()]})},id:"hive",name:"Hive",category:"grids",layoutMode:"structured",preview:{type:"image",url:"https://cdn.cntrl.site/component-assets/hive.png"},version:1,defaultSize:{d:{width:720,height:540}},assetsPaths:{content:[{path:"gallery.media.url",placeholderEnabled:!0}],parameters:[]},fontSettingsPaths:{content:[],parameters:[...nK.map(e=>({path:`${ng(e,"fontFamily")}`}))]},fontRelations:{...nK.reduce((e,t)=>({...e,[`${t}FontSettings`]:`${ng(t,"fontFamily")}`}),{})},schema:nQ,sourceCode:nV};function n1({className:e,areaStyle:t,hitPlacement:i,centerXHitTop:o,...r}){return n.jsx("div",{className:e,style:{...t,pointerEvents:"none"},"data-controls-center-only-drag":"",...r,children:n.jsx("div",{style:function(e,t="50%"){let i={position:"absolute",width:12,height:12,pointerEvents:"none"};return"left-y"===e?{...i,left:20,top:"50%",transform:"translateY(-50%)"}:"center-x"===e?{...i,left:"50%",top:t,transform:"translate(-50%, -50%)"}:{...i,left:"50%",top:"50%",transform:"translate(-50%, -50%)"}}(i,o)})})}function n2({media:e,className:t,style:i}){let r=o.useRef(null);return o.useEffect(()=>{if(!e.isVideo)return;let t=r.current;if(!t)return;let i=t.play();i&&i.catch(()=>{})},[e.isVideo,e.url]),e.isVideo?n.jsx("video",{ref:r,className:t,src:e.url,style:i,muted:!0,loop:!0,autoPlay:!0,playsInline:!0,preload:"auto"}):n.jsx("img",{className:t,src:e.url,alt:"",style:i})}function n3(e){return`calc(var(--cntrl-article-width, 100vw) * ${e/1440})`}function n5(e,t){let i=e.currentTarget,n=i.getBoundingClientRect(),o=e.clientY-n.top>n.height/2;i.classList.toggle(`${t}-reveal-from-bottom`,o)}function n4(e,t){let i=e.currentTarget,n=i.getBoundingClientRect(),o=e.clientY<n.top+n.height/2;i.classList.toggle(`${t}-reveal-from-bottom`,o)}function n9(e,t,i,n,o,r,l){let s=a.scalingValue(r,l),c=a.scalingValue(0,l);return{borderTopWidth:0===e&&i?s:c,borderBottomWidth:!(e===t-1&&!o)||n?s:c}}let n6=["AColumn","BColumnWidth","CColumnWidth","DColumnWidth","EColumnWidth"],n7=["AColumn","BColumn","CColumn","DColumn","EColumn"],n8="cutLabel",oe=[...n7,n8],ot=["A","B","C","D","E"];function oi(e){return`${e}ColumnVerticalAlign`}let on=["Top","Center","Bottom"];function oo(e){let t=String(e??"Top").trim();if(t.toLowerCase().startsWith("baseline")){let e=t.slice(-1).toUpperCase();return ot.includes(e)?`Baseline ${e}`:"Top"}let i=t.toLowerCase();return"center"===i?"Center":"bottom"===i?"Bottom":"top"===i?"Top":t}function or(e,t,i){let n=function(e){let t=String(e??"").trim();if(!t.toLowerCase().startsWith("baseline"))return null;let i=t.slice(-1).toUpperCase();return ot.includes(i)?i:null}(e);return!n||n!==t&&function(e){let t=oo(e);return!t.toLowerCase().startsWith("baseline")&&("Top"===t||"Center"===t||"Bottom"===t)}(i[oi(n)])}function oa(e){let t=oo(e);if(t.toLowerCase().startsWith("baseline")){let e=t.slice(-1).toUpperCase();return ot.includes(e)?{kind:"baseline",anchorLetter:e}:{kind:"top"}}return"Center"===t?{kind:"center"}:"Bottom"===t?{kind:"bottom"}:{kind:"top"}}function ol(e,t,i){return!!or(e,i,t)&&"baseline"===oa(e).kind}function os(e){return"center"===e?"center":"bottom"===e?"flex-end":"flex-start"}function oc(e,t,i,n){let o=e.titleEl;if(!o)return 0;let r=o.closest(`.${i}`);if(!r)return 0;let a=function(e,t){let i=document.createElement("i");i.className=t,i.setAttribute("aria-hidden","true"),e.prepend(i);let{top:n}=e.getBoundingClientRect(),{bottom:o}=i.getBoundingClientRect();return i.remove(),o-n}(o,n);if("baseline"===e.kind)return o.getBoundingClientRect().top-t+a;let l=r.getBoundingClientRect(),s=o.getBoundingClientRect().height,c=0;return"center"===e.kind?c=(l.height-s)/2:"bottom"===e.kind&&(c=l.height-s),l.top-t+c+a}let od={AColumn:"AColumn",BColumnWidth:"BColumn",CColumnWidth:"CColumn",DColumnWidth:"DColumn",EColumnWidth:"EColumn"};function ou(e,t){return`${e}${t.replace(/^text/,"Text")}`}let op={AColumn:"A",BColumn:"B",CColumn:"C",DColumn:"D",EColumn:"E",cutLabel:"CUT"};function om(e,t){let i=i=>e[ou(t,i)];return{textFontFamily:i("textFontFamily")??"Arial",textFontSettings:i("textFontSettings")??{fontWeight:400,fontStyle:"normal"},textFontSize:i("textFontSize"),textLineHeight:i("textLineHeight"),textLetterSpacing:i("textLetterSpacing")??0,textWordSpacing:i("textWordSpacing")??0,textTextAlign:i("textTextAlign")??(t===n8?"center":"left"),textTextAppearance:i("textTextAppearance"),textColor:e.textColor}}function og(e,t){var i,n;return t1(t2({fontSettings:{fontFamily:e.textFontFamily,fontWeight:(null==(i=e.textFontSettings)?void 0:i.fontWeight)??400,fontStyle:(null==(n=e.textFontSettings)?void 0:n.fontStyle)??"normal"},fontSize:e.textFontSize??.01,lineHeight:e.textLineHeight,letterSpacing:e.textLetterSpacing,wordSpacing:e.textWordSpacing,textAlign:e.textTextAlign,textAppearance:e.textTextAppearance,color:e.textColor??"#767676"},t))}function oh(e,t,i,n){let o=om(e,t),r=o.textFontSize??.01,a=o.textLineHeight;return void 0!==a&&a<r?`${i} ${n}`:i}function of(e,t,i,n){let o=om(e,t),r=o.textFontSize??.01,l=o.textLineHeight;return void 0===l||l>=r?{}:{[`--${i}-title-leading-gap`]:a.scalingValue((r-l)/2,n)}}let oy=["AColumnWidth","BColumnWidth","CColumnWidth","DColumnWidth","EColumnWidth"],ov=["AColumnPaddingLeft","BColumnPaddingLeft","CColumnPaddingLeft","DColumnPaddingLeft","EColumnPaddingLeft"],ox=["AColumnPaddingRight","BColumnPaddingRight","CColumnPaddingRight","DColumnPaddingRight","EColumnPaddingRight"],ob=["AColumnPaddingBottom","BColumnPaddingBottom","CColumnPaddingBottom","DColumnPaddingBottom","EColumnPaddingBottom"],ow={textColor:"text-color",backgroundColor:"background-color",dividerColor:"divider-color",textHoverColor:"text-hover-color",backgroundHoverColor:"background-hover-color",dividerHoverColor:"divider-hover-color"},o$=["hover","focus","filled","success","error"],oS=50/1440;function oC(e){return 50/("number"==typeof e&&e>0?e:1440)}let oP={AColumnWidth:.02,BColumnWidth:.02,CColumnWidth:.02,DColumnWidth:.02,EColumnWidth:.02};function oL(e){return Math.max(0,"number"==typeof e.wrapperWidth?e.wrapperWidth:1)}function oT(e){return Object.fromEntries(oy.map(t=>[t,"number"==typeof e[t]?e[t]:oP[t]]))}function oM(e,t,i){let n=e-oS,o=t+i;if(o<=0||o<=n)return{paddingLeft:t,paddingRight:i};if(n<=0)return{paddingLeft:0,paddingRight:0};let r=n/o;return{paddingLeft:t*r,paddingRight:i*r}}function oE(e,t,i){let n=oI(e,t,i);if(e<=0)return[];let o=n.slice(0,e-1).reduce((e,t)=>e+t,0);return[...n.slice(0,e-1),Math.max(0,t-o)]}function oI(e,t,i){if(e<=0)return[];let n=oy.slice(0,e).map(e=>i[e]);if(1===e)return n;let o=n.slice(0,e-1),r=o.reduce((e,t)=>e+t,0)+oS;if(t>=r)return n;let a=[...o],l=r-t;for(let e=a.length-1;e>=0&&l>0;e-=1){let t=a[e]-oS;if(t<=0)continue;let i=Math.min(l,t);a[e]-=i,l-=i}return[...a,n[e-1]]}function ok(e){return Array.isArray(e.columnsOrder)&&e.columnsOrder.length>0?e.columnsOrder:[...n6]}function oR(e,t){for(let i of new Set([...Object.keys(e),...Object.keys(t)]))if(e[i]!==t[i])return!0;return!1}function oF(e,t,i=0){return Object.fromEntries(t.map(t=>[t,"number"==typeof e[t]?e[t]:i]))}let oA=`import { useEffect, useLayoutEffect, useMemo, useRef, useState, type CSSProperties } from 'react';
import { CommonComponentProps } from '../props';
import { buildColorVars, scalingValue, useScopedStyles } from '../utils/index';
import { omitTextColors, TextStyles, textStylesToCss } from '../utils/textStylesToCss';
import { PaddingControl } from '../helpers/PaddingControl/PaddingControl';
import type { LayoutItem, LayoutTab } from '../../types/SchemaV1';

type ListFontSettings = { fontWeight: number; fontStyle: string };

type ListColumnPrefix = 'AColumn' | 'BColumn' | 'CColumn' | 'DColumn' | 'EColumn';

type ListColumnTextStyleOverrides = {
  AColumnVerticalAlign?: string;
  AColumnTextFontFamily?: string;
  AColumnTextFontSettings?: ListFontSettings;
  AColumnTextFontSize?: number;
  AColumnTextLineHeight?: number;
  AColumnTextLetterSpacing?: number;
  AColumnTextWordSpacing?: number;
  AColumnTextTextAlign?: 'left' | 'center' | 'right' | 'justify';
  AColumnTextTextAppearance?: TextStyles['textAppearance'];
  BColumnVerticalAlign?: string;
  BColumnTextFontFamily?: string;
  BColumnTextFontSettings?: ListFontSettings;
  BColumnTextFontSize?: number;
  BColumnTextLineHeight?: number;
  BColumnTextLetterSpacing?: number;
  BColumnTextWordSpacing?: number;
  BColumnTextTextAlign?: 'left' | 'center' | 'right' | 'justify';
  BColumnTextTextAppearance?: TextStyles['textAppearance'];
  CColumnVerticalAlign?: string;
  CColumnTextFontFamily?: string;
  CColumnTextFontSettings?: ListFontSettings;
  CColumnTextFontSize?: number;
  CColumnTextLineHeight?: number;
  CColumnTextLetterSpacing?: number;
  CColumnTextWordSpacing?: number;
  CColumnTextTextAlign?: 'left' | 'center' | 'right' | 'justify';
  CColumnTextTextAppearance?: TextStyles['textAppearance'];
  DColumnVerticalAlign?: string;
  DColumnTextFontFamily?: string;
  DColumnTextFontSettings?: ListFontSettings;
  DColumnTextFontSize?: number;
  DColumnTextLineHeight?: number;
  DColumnTextLetterSpacing?: number;
  DColumnTextWordSpacing?: number;
  DColumnTextTextAlign?: 'left' | 'center' | 'right' | 'justify';
  DColumnTextTextAppearance?: TextStyles['textAppearance'];
  EColumnVerticalAlign?: string;
  EColumnTextFontFamily?: string;
  EColumnTextFontSettings?: ListFontSettings;
  EColumnTextFontSize?: number;
  EColumnTextLineHeight?: number;
  EColumnTextLetterSpacing?: number;
  EColumnTextWordSpacing?: number;
  EColumnTextTextAlign?: 'left' | 'center' | 'right' | 'justify';
  EColumnTextTextAppearance?: TextStyles['textAppearance'];
  cutLabelTextFontFamily?: string;
  cutLabelTextFontSettings?: ListFontSettings;
  cutLabelTextFontSize?: number;
  cutLabelTextLineHeight?: number;
  cutLabelTextLetterSpacing?: number;
  cutLabelTextWordSpacing?: number;
  cutLabelTextTextAlign?: 'left' | 'center' | 'right' | 'justify';
  cutLabelTextTextAppearance?: TextStyles['textAppearance'];
  cutLabelVerticalAlign?: string;
};

export type ListColumnVerticalAlignKey = \`\${ListColumnPrefix}VerticalAlign\`;

type ListColumnVerticalAlignUpdates = {
  AColumnVerticalAlign?: string;
  BColumnVerticalAlign?: string;
  CColumnVerticalAlign?: string;
  DColumnVerticalAlign?: string;
  EColumnVerticalAlign?: string;
};

export type ListSettings = {
  columns: number;
  type: 'a' | 'b';
  wrapperWidth: number;
  entriesCount: number;
  cellMinHeight: number;
  imageOnHover: 'on' | 'off';
  imageSize?: { min: number; max: number };
  dividerWidth: number;
  showVisibility: boolean[];
  cut: number;
  showCut: number;
  cutCellMinHeight: number;
  cutLabel: string;
  entryHoverEffect: 'none' | 'default' | 'blinds' | 'reveal';
  entryHoverShowOption: 'always' | 'link only';
  rowPaddingTop: number;
  rowPaddingBottom: number;
  rowPaddingTopB: number;
  AColumnWidth: number;
  AColumnPaddingLeft: number;
  AColumnPaddingRight: number;
  AColumnPaddingBottom: number;
  BColumnWidth: number;
  BColumnPaddingLeft: number;
  BColumnPaddingRight: number;
  BColumnPaddingBottom: number;
  CColumnWidth: number;
  CColumnPaddingLeft: number;
  CColumnPaddingRight: number;
  CColumnPaddingBottom: number;
  DColumnWidth: number;
  DColumnPaddingLeft: number;
  DColumnPaddingRight: number;
  DColumnPaddingBottom: number;
  EColumnWidth: number;
  EColumnPaddingLeft: number;
  EColumnPaddingRight: number;
  EColumnPaddingBottom: number;
  columnsOrder?: string[];
  textPaddingLR?: number;
  textColor: string;
  backgroundColor: string;
  dividerColor: string;
  textHoverColor: string;
  backgroundHoverColor: string;
  dividerHoverColor: string;
} & ListColumnTextStyleOverrides;

type ListMedia = {
  objectFit?: 'cover' | 'contain';
  url: string;
  name: string;
  type?: 'image' | 'video';
};

type ListContentItem = {
  AColumn?: string;
  BColumnWidth?: string;
  CColumnWidth?: string;
  DColumnWidth?: string;
  EColumnWidth?: string;
  image?: ListMedia;
  link?: string;
};

type ListItemRow = {
  id: string | number;
  cells: Record<string, React.ReactNode>;
  image?: ListContentItem['image'];
  link?: string;
};

type HoverImageState = {
  rowId: string | number;
  url: string;
  objectFit: 'cover' | 'contain';
  isVideo: boolean;
  widthPx: number;
  x: number;
  y: number;
};

function isVideoMedia(media: Pick<ListMedia, 'url' | 'type' | 'name'>): boolean {
  if (media.type === 'video') return true;
  if (media.type === 'image') return false;
  const name = media.name ?? '';
  if (/\\.(mp4|webm|ogg|mov)(\\?|$)/i.test(name)) return true;
  return /\\.(mp4|webm|ogg|mov)(\\?|$)/i.test(media.url);
}

function ListHoverMedia({
  media,
  className,
  style,
}: {
  media: Pick<HoverImageState, 'url' | 'objectFit' | 'isVideo'>;
  className: string;
  style: React.CSSProperties;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!media.isVideo) return;
    const video = videoRef.current;
    if (!video) return;

    const playPromise = video.play();
    if (playPromise) {
      playPromise.catch(() => {});
    }
  }, [media.isVideo, media.url]);

  if (media.isVideo) {
    return (
      <video
        ref={videoRef}
        className={className}
        src={media.url}
        style={style}
        muted
        loop
        autoPlay
        playsInline
        preload="auto"
      />
    );
  }

  return (
    <img
      className={className}
      src={media.url}
      alt=""
      style={style}
    />
  );
}

type ListProps = {
  layoutId?: string;
  settings: ListSettings;
  content?: ListContentItem[];
  isEditor?: boolean;
  isPreviewMode?: boolean;
  isEditMode?: boolean;
  activeEvent: string | undefined;
  onUpdateSettings?: (settings: ListSettings) => void;
} & CommonComponentProps;

function sv(px: number): string {
  return \`calc(var(--cntrl-article-width, 100vw) * \${px / 1440})\`;
}

function hasListColumnText(value: React.ReactNode): boolean {
  return String(value ?? '').trim().length > 0;
}

function setRevealOpenDirectionFromMouseEnter(event: React.MouseEvent<HTMLElement>, prefix: string): void {
  const el = event.currentTarget;
  const rect = el.getBoundingClientRect();
  const fromBottom = event.clientY - rect.top > rect.height / 2;
  el.classList.toggle(\`\${prefix}-reveal-from-bottom\`, fromBottom);
}

function setRevealCloseDirectionFromMouseLeave(event: React.MouseEvent<HTMLElement>, prefix: string): void {
  const el = event.currentTarget;
  const rect = el.getBoundingClientRect();
  const exitToTop = event.clientY < rect.top + rect.height / 2;
  el.classList.toggle(\`\${prefix}-reveal-from-bottom\`, exitToTop);
}

function getEntryDividerWidths(
  rowIdx: number,
  rowCount: number,
  showDividerTop: boolean,
  showDividerBottom: boolean,
  hasCutItem: boolean,
  dividerWidth: number,
  isEditor: boolean,
): { borderTopWidth: string; borderBottomWidth: string } {
  const scaledDividerWidth = scalingValue(dividerWidth, isEditor);
  const none = scalingValue(0, isEditor);

  const isFirst = rowIdx === 0;
  const isLastEntry = rowIdx === rowCount - 1 && !hasCutItem;

  const borderTopWidth = isFirst && showDividerTop ? scaledDividerWidth : none;
  const borderBottomWidth = !isLastEntry || showDividerBottom ? scaledDividerWidth : none;

  return { borderTopWidth, borderBottomWidth };
}

function getCutItemDividerWidths(
  showDividerBottom: boolean,
  dividerWidth: number,
  isEditor: boolean,
): { borderTopWidth: string; borderBottomWidth: string } {
  const scaledDividerWidth = scalingValue(dividerWidth, isEditor);
  const none = scalingValue(0, isEditor);

  return {
    borderTopWidth: none,
    borderBottomWidth: showDividerBottom ? scaledDividerWidth : none,
  };
}

const HOVER_IMAGE_CURSOR_OFFSET = 10;

function getCSS(P: string): string {
  return \`
.\${P}-wrapper {
  display: grid;
  align-items: start;
  min-height: \${sv(48)};
  position: relative;
  overflow: visible;
  box-sizing: border-box;
}

.\${P}-hover-image,
.\${P}-hover-video {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  pointer-events: none;
  display: block;
}

.\${P}-list-item {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  overflow: visible;
  position: relative;
  box-sizing: content-box;
  user-select: none;
  background: var(--\${P}-background-color);
}

.\${P}-wrapper.\${P}-divider-top .\${P}-list-item {
  border-top-style: solid;
  border-top-color: var(--\${P}-divider-color);
}

.\${P}-wrapper.\${P}-divider-bottom .\${P}-list-item {
  border-bottom-style: solid;
  border-bottom-color: var(--\${P}-divider-color);
}

.\${P}-list-cols-row {
  display: flex;
  align-items: start;
  width: 100%;
  box-sizing: border-box;
}

.\${P}-list-cols-row-h {
  align-items: stretch;
}

.\${P}-list-cols-row-h [data-list-col] {
  display: grid;
  grid-template-rows: minmax(0, 1fr);
  align-self: stretch;
  min-height: min-content;
}

.\${P}-list-cols-row-h .\${P}-list-col {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  min-height: 0;
}

.\${P}-list-cols-row-h .\${P}-list-col-title {
  display: block;
  flex: 0 0 auto;
  align-self: stretch;
}

.\${P}-text-tight-leading {
  display: block;
  flex-shrink: 0;
  padding-top: var(--\${P}-title-leading-gap, 0);
  padding-bottom: var(--\${P}-title-leading-gap, 0);
}

.\${P}-wrapper.\${P}-type-b .\${P}-list-cols-row {
  flex-direction: column;
  align-items: stretch;
}

.\${P}-wrapper.\${P}-type-b .\${P}-list-col {
  width: 100%;
  min-width: 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: min-content;
}

.\${P}-wrapper.\${P}-type-b .\${P}-list-col-title {
  display: block;
  flex: 0 0 auto;
  align-self: stretch;
  text-align: center;
}

.\${P}-wrapper.\${P}-type-b .\${P}-cut-item .\${P}-list-cols-row {
  flex-direction: row;
}

.\${P}-wrapper.\${P}-type-b .\${P}-cut-label {
  box-sizing: border-box;
}

.\${P}-wrapper.\${P}-type-b .\${P}-list-col-last {
  flex: 0 0 auto;
  min-width: 0;
}

a.\${P}-list-item {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

.\${P}-list-col {
  flex-shrink: 0;
  overflow: visible;
  box-sizing: border-box;
  min-width: \${sv(50)};
  position: relative;
  display: flex;
  align-items: flex-start;
}

.\${P}-list-col-last {
  flex: 1 1 auto;
  min-width: \${sv(50)};
}

.\${P}-list-col-title {
  color: var(--\${P}-text-color);
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  word-break: break-word;
  flex: 1;
  min-width: 0;
  width: 100%;
  box-sizing: border-box;
}

.\${P}-baseline-probe {
  display: inline-block;
  width: 0;
  height: 0;
  overflow: hidden;
  vertical-align: baseline;
}

.\${P}-col-resize-handle,
.\${P}-padding-control-handle,
.\${P}-text-padding-lr-handle {
  background: transparent;
}

.\${P}-padding-control-handle[data-controls-axis="x"][data-controls-variant="column-padding"]::after,
.\${P}-text-padding-lr-handle::after {
  content: '';
  position: absolute;
  top: var(--\${P}-first-entry-handle-top, 50%);
  left: 50%;
  transform: translate(-50%, -50%);
  width: 4px;
  height: 12px;
  background: #FF5C02;
  border: 1px solid #FFFFFF;
  border-radius: 5px;
  box-sizing: border-box;
  pointer-events: none;
}

.\${P}-text-padding-lr-handle::after {
  top: 50%;
}

.\${P}-padding-control-handle[data-controls-axis="y"]::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 4px;
  background: #FF5C02;
  border: 1px solid #FFFFFF;
  border-radius: 5px;
  box-sizing: border-box;
  pointer-events: none;
}

.\${P}-padding-control-handle[data-controls-variant="row-padding"][data-controls-axis="y"]::after,
.\${P}-padding-control-handle[data-controls-variant="column-padding"][data-controls-axis="y"]::after {
  left: 20px;
  transform: translateY(-50%);
}

.\${P}-wrapper.\${P}-type-b .\${P}-padding-control-handle[data-controls-variant="row-padding"][data-controls-axis="y"]::after,
.\${P}-wrapper.\${P}-type-b .\${P}-padding-control-handle[data-controls-variant="column-padding"][data-controls-axis="y"]::after {
  left: 50%;
  transform: translate(-50%, -50%);
}

.\${P}-row-padding-handle {
  width: 100%;
  flex-shrink: 0;
  background: transparent;
}

.\${P}-list-col-wrap {
  position: relative;
}

.\${P}-list-cols-row-controls {
  position: relative;
}

.\${P}-col-resize-handle::after {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background: #FF5C02;
  pointer-events: none;
}

.\${P}-wrapper.\${P}-type-b .\${P}-col-resize-handle::after {
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100%;
  height: 2px;
}

.\${P}-wrapper.\${P}-entry-hover-default .\${P}-list-item-has-link,
.\${P}-wrapper.\${P}-entry-hover-blinds .\${P}-list-item-has-link,
.\${P}-wrapper.\${P}-entry-hover-reveal .\${P}-list-item-has-link,
.\${P}-wrapper.\${P}-entry-hover-default .\${P}-cut-item,
.\${P}-wrapper.\${P}-entry-hover-blinds .\${P}-cut-item,
.\${P}-wrapper.\${P}-entry-hover-reveal .\${P}-cut-item {
  transition: background-color 250ms, border-color 250ms;
}

.\${P}-wrapper.\${P}-entry-hover-default .\${P}-list-item-has-link .\${P}-list-col-title,
.\${P}-wrapper.\${P}-entry-hover-blinds .\${P}-list-item-has-link .\${P}-list-col-title,
.\${P}-wrapper.\${P}-entry-hover-reveal .\${P}-list-item-has-link .\${P}-list-col-title,
.\${P}-wrapper.\${P}-entry-hover-default .\${P}-cut-label,
.\${P}-wrapper.\${P}-entry-hover-blinds .\${P}-cut-label,
.\${P}-wrapper.\${P}-entry-hover-reveal .\${P}-cut-label {
  transition: color 250ms;
}

.\${P}-wrapper.\${P}-entry-hover-default .\${P}-list-item-has-link:hover,
.\${P}-wrapper.\${P}-entry-hover-default.\${P}-state-hover .\${P}-list-item-has-link,
.\${P}-wrapper.\${P}-entry-hover-default .\${P}-cut-item:hover,
.\${P}-wrapper.\${P}-entry-hover-default.\${P}-state-hover .\${P}-cut-item {
  background: var(--\${P}-background-hover-color);
}

.\${P}-wrapper.\${P}-divider-bottom.\${P}-entry-hover-default .\${P}-list-item-has-link:hover,
.\${P}-wrapper.\${P}-divider-bottom.\${P}-entry-hover-default .\${P}-list-item:has(+ .\${P}-list-item-has-link:hover),
.\${P}-wrapper.\${P}-divider-bottom.\${P}-entry-hover-default .\${P}-list-item:has(+ .\${P}-cut-item:hover),
.\${P}-wrapper.\${P}-divider-bottom.\${P}-entry-hover-default.\${P}-state-hover .\${P}-list-item-has-link,
.\${P}-wrapper.\${P}-divider-bottom.\${P}-entry-hover-default .\${P}-cut-item:hover,
.\${P}-wrapper.\${P}-divider-bottom.\${P}-entry-hover-default.\${P}-state-hover .\${P}-cut-item,
.\${P}-wrapper.\${P}-divider-bottom.\${P}-entry-hover-blinds .\${P}-list-item-has-link:hover,
.\${P}-wrapper.\${P}-divider-bottom.\${P}-entry-hover-blinds .\${P}-list-item:has(+ .\${P}-list-item-has-link:hover),
.\${P}-wrapper.\${P}-divider-bottom.\${P}-entry-hover-blinds .\${P}-list-item:has(+ .\${P}-cut-item:hover),
.\${P}-wrapper.\${P}-divider-bottom.\${P}-entry-hover-blinds.\${P}-state-hover .\${P}-list-item-has-link,
.\${P}-wrapper.\${P}-divider-bottom.\${P}-entry-hover-blinds .\${P}-cut-item:hover,
.\${P}-wrapper.\${P}-divider-bottom.\${P}-entry-hover-blinds.\${P}-state-hover .\${P}-cut-item,
.\${P}-wrapper.\${P}-divider-bottom.\${P}-entry-hover-reveal .\${P}-list-item-has-link:hover,
.\${P}-wrapper.\${P}-divider-bottom.\${P}-entry-hover-reveal .\${P}-list-item:has(+ .\${P}-list-item-has-link:hover),
.\${P}-wrapper.\${P}-divider-bottom.\${P}-entry-hover-reveal .\${P}-list-item:has(+ .\${P}-cut-item:hover),
.\${P}-wrapper.\${P}-divider-bottom.\${P}-entry-hover-reveal.\${P}-state-hover .\${P}-list-item-has-link,
.\${P}-wrapper.\${P}-divider-bottom.\${P}-entry-hover-reveal .\${P}-cut-item:hover,
.\${P}-wrapper.\${P}-divider-bottom.\${P}-entry-hover-reveal.\${P}-state-hover .\${P}-cut-item {
  border-bottom-color: var(--\${P}-divider-hover-color);
}

.\${P}-wrapper.\${P}-divider-top:not(.\${P}-divider-bottom).\${P}-entry-hover-default .\${P}-list-item-has-link:hover:first-child,
.\${P}-wrapper.\${P}-divider-top:not(.\${P}-divider-bottom).\${P}-entry-hover-default.\${P}-state-hover .\${P}-list-item-has-link:first-child,
.\${P}-wrapper.\${P}-divider-top:not(.\${P}-divider-bottom).\${P}-entry-hover-blinds .\${P}-list-item-has-link:hover:first-child,
.\${P}-wrapper.\${P}-divider-top:not(.\${P}-divider-bottom).\${P}-entry-hover-blinds.\${P}-state-hover .\${P}-list-item-has-link:first-child,
.\${P}-wrapper.\${P}-divider-top:not(.\${P}-divider-bottom).\${P}-entry-hover-reveal .\${P}-list-item-has-link:hover:first-child,
.\${P}-wrapper.\${P}-divider-top:not(.\${P}-divider-bottom).\${P}-entry-hover-reveal.\${P}-state-hover .\${P}-list-item-has-link:first-child {
  border-top-color: var(--\${P}-divider-hover-color);
}

.\${P}-wrapper.\${P}-divider-top.\${P}-divider-bottom.\${P}-entry-hover-default .\${P}-list-item-has-link:hover:first-child,
.\${P}-wrapper.\${P}-divider-top.\${P}-divider-bottom.\${P}-entry-hover-default.\${P}-state-hover .\${P}-list-item-has-link:first-child,
.\${P}-wrapper.\${P}-divider-top.\${P}-divider-bottom.\${P}-entry-hover-blinds .\${P}-list-item-has-link:hover:first-child,
.\${P}-wrapper.\${P}-divider-top.\${P}-divider-bottom.\${P}-entry-hover-blinds.\${P}-state-hover .\${P}-list-item-has-link:first-child,
.\${P}-wrapper.\${P}-divider-top.\${P}-divider-bottom.\${P}-entry-hover-reveal .\${P}-list-item-has-link:hover:first-child,
.\${P}-wrapper.\${P}-divider-top.\${P}-divider-bottom.\${P}-entry-hover-reveal.\${P}-state-hover .\${P}-list-item-has-link:first-child {
  border-top-color: var(--\${P}-divider-hover-color);
}

.\${P}-wrapper.\${P}-entry-hover-default .\${P}-list-item-has-link:hover .\${P}-list-col-title,
.\${P}-wrapper.\${P}-entry-hover-default.\${P}-state-hover .\${P}-list-item-has-link .\${P}-list-col-title,
.\${P}-wrapper.\${P}-entry-hover-default .\${P}-cut-item:hover .\${P}-cut-label,
.\${P}-wrapper.\${P}-entry-hover-default.\${P}-state-hover .\${P}-cut-item .\${P}-cut-label,
.\${P}-wrapper.\${P}-entry-hover-blinds .\${P}-list-item-has-link:hover .\${P}-list-col-title,
.\${P}-wrapper.\${P}-entry-hover-blinds.\${P}-state-hover .\${P}-list-item-has-link .\${P}-list-col-title,
.\${P}-wrapper.\${P}-entry-hover-blinds .\${P}-cut-item:hover .\${P}-cut-label,
.\${P}-wrapper.\${P}-entry-hover-blinds.\${P}-state-hover .\${P}-cut-item .\${P}-cut-label,
.\${P}-wrapper.\${P}-entry-hover-reveal .\${P}-list-item-has-link:hover .\${P}-list-col-title,
.\${P}-wrapper.\${P}-entry-hover-reveal.\${P}-state-hover .\${P}-list-item-has-link .\${P}-list-col-title,
.\${P}-wrapper.\${P}-entry-hover-reveal .\${P}-cut-item:hover .\${P}-cut-label,
.\${P}-wrapper.\${P}-entry-hover-reveal.\${P}-state-hover .\${P}-cut-item .\${P}-cut-label {
  color: var(--\${P}-text-hover-color);
}

.\${P}-wrapper.\${P}-entry-hover-blinds .\${P}-list-item-has-link::before,
.\${P}-wrapper.\${P}-entry-hover-blinds .\${P}-cut-item::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--\${P}-background-hover-color);
  transform: scaleY(0);
  transform-origin: center center;
  opacity: 0;
  transition: opacity 150ms, transform 0s 250ms;
  z-index: 0;
  pointer-events: none;
}

.\${P}-wrapper.\${P}-entry-hover-blinds .\${P}-list-col,
.\${P}-wrapper.\${P}-entry-hover-blinds .\${P}-cut-label {
  position: relative;
  z-index: 1;
}

.\${P}-wrapper.\${P}-entry-hover-blinds .\${P}-list-item-has-link:hover::before,
.\${P}-wrapper.\${P}-entry-hover-blinds.\${P}-state-hover .\${P}-list-item-has-link::before,
.\${P}-wrapper.\${P}-entry-hover-blinds .\${P}-cut-item:hover::before,
.\${P}-wrapper.\${P}-entry-hover-blinds.\${P}-state-hover .\${P}-cut-item::before {
  transform: scaleY(1);
  opacity: 1;
  transition: transform 250ms, opacity 250ms;
}

.\${P}-wrapper.\${P}-entry-hover-reveal .\${P}-list-item-has-link::before,
.\${P}-wrapper.\${P}-entry-hover-reveal .\${P}-cut-item::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--\${P}-background-hover-color);
  transform: scaleY(0);
  transform-origin: bottom center;
  transition: transform 120ms;
  z-index: 0;
  pointer-events: none;
}

.\${P}-wrapper.\${P}-entry-hover-reveal .\${P}-list-col,
.\${P}-wrapper.\${P}-entry-hover-reveal .\${P}-cut-label {
  position: relative;
  z-index: 1;
}

.\${P}-wrapper.\${P}-entry-hover-reveal .\${P}-list-item-has-link:hover::before,
.\${P}-wrapper.\${P}-entry-hover-reveal.\${P}-state-hover .\${P}-list-item-has-link::before,
.\${P}-wrapper.\${P}-entry-hover-reveal .\${P}-cut-item:hover::before,
.\${P}-wrapper.\${P}-entry-hover-reveal.\${P}-state-hover .\${P}-cut-item::before {
  transform: scaleY(1);
  transform-origin: top center;
}

.\${P}-wrapper.\${P}-entry-hover-reveal .\${P}-list-item-has-link.\${P}-reveal-from-bottom::before,
.\${P}-wrapper.\${P}-entry-hover-reveal .\${P}-cut-item.\${P}-reveal-from-bottom::before {
  transform-origin: top center;
}

.\${P}-wrapper.\${P}-entry-hover-reveal .\${P}-list-item-has-link.\${P}-reveal-from-bottom:hover::before,
.\${P}-wrapper.\${P}-entry-hover-reveal .\${P}-list-item-has-link.\${P}-reveal-from-bottom.\${P}-state-hover::before,
.\${P}-wrapper.\${P}-entry-hover-reveal .\${P}-cut-item.\${P}-reveal-from-bottom:hover::before,
.\${P}-wrapper.\${P}-entry-hover-reveal .\${P}-cut-item.\${P}-reveal-from-bottom.\${P}-state-hover::before {
  transform-origin: bottom center;
}

.\${P}-cut-item {
  display: flex;
  align-items: stretch;
  width: 100%;
  overflow: visible;
  position: relative;
  z-index: 3;
  box-sizing: border-box;
  user-select: none;
  background: var(--\${P}-background-color);
  cursor: pointer;
  padding: 0;
  border: none;
  font: inherit;
  text-align: inherit;
  appearance: none;
  -webkit-appearance: none;
}

.\${P}-cut-item .\${P}-list-cols-row {
  flex: 1;
  min-height: 100%;
  width: 100%;
  display: flex;
}

.\${P}-wrapper.\${P}-divider-bottom .\${P}-cut-item {
  border-bottom-style: solid;
  border-bottom-color: var(--\${P}-divider-color);
}

.\${P}-cut-label {
  display: block;
  position: relative;
  z-index: 1;
  margin: 0;
  color: var(--\${P}-text-color);
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  word-break: break-word;
}
\`;
}

export const COLUMN_CONTENT_KEYS = [
  'AColumn',
  'BColumnWidth',
  'CColumnWidth',
  'DColumnWidth',
  'EColumnWidth',
] as const;

export const COLUMN_TEXT_PREFIXES = [
  'AColumn',
  'BColumn',
  'CColumn',
  'DColumn',
  'EColumn',
] as const;

export const CUT_LABEL_TEXT_PREFIX = 'cutLabel' as const;

export const LIST_TEXT_STYLE_PREFIXES = [
  ...COLUMN_TEXT_PREFIXES,
  CUT_LABEL_TEXT_PREFIX,
] as const;

export type ListTextStylePrefix = typeof LIST_TEXT_STYLE_PREFIXES[number];

export const LIST_COLUMN_LETTERS = ['A', 'B', 'C', 'D', 'E'] as const;

export function getListColumnVerticalAlignSettingKey(columnLetter: string): string {
  return \`\${columnLetter}ColumnVerticalAlign\`;
}

export const COLUMN_VALIGN_BASIC_OPTIONS = ['Top', 'Center', 'Bottom'] as const;

export function normalizeListColumnVerticalAlign(value: string | undefined): string {
  const raw = String(value ?? 'Top').trim();
  if (raw.toLowerCase().startsWith('baseline')) {
    const anchorLetter = raw.slice(-1).toUpperCase();
    if (LIST_COLUMN_LETTERS.includes(anchorLetter as typeof LIST_COLUMN_LETTERS[number])) {
      return \`Baseline \${anchorLetter}\`;
    }
    return 'Top';
  }
  const lower = raw.toLowerCase();
  if (lower === 'center') return 'Center';
  if (lower === 'bottom') return 'Bottom';
  if (lower === 'top') return 'Top';
  return raw;
}

export function isBaselineAnchorColumnVerticalAlign(value: string | undefined): boolean {
  const raw = normalizeListColumnVerticalAlign(value);
  if (raw.toLowerCase().startsWith('baseline')) {
    return false;
  }
  return raw === 'Top' || raw === 'Center' || raw === 'Bottom';
}

export function parseBaselineAnchorLetter(value: string | undefined): string | null {
  const raw = String(value ?? '').trim();
  if (!raw.toLowerCase().startsWith('baseline')) {
    return null;
  }
  const anchorLetter = raw.slice(-1).toUpperCase();
  return LIST_COLUMN_LETTERS.includes(anchorLetter as typeof LIST_COLUMN_LETTERS[number])
    ? anchorLetter
    : null;
}

export function isValidColumnBaselineVAlign(
  value: string | undefined,
  forColumnLetter: string,
  settings: ListSettings,
): boolean {
  const anchorLetter = parseBaselineAnchorLetter(value);
  if (!anchorLetter) {
    return true;
  }
  if (anchorLetter === forColumnLetter) {
    return false;
  }
  return isBaselineAnchorColumnVerticalAlign(settings[getListColumnVerticalAlignSettingKey(anchorLetter) as ListColumnVerticalAlignKey]);
}

export function getColumnVerticalAlignOptionsForLetter(
  columnLetter: string,
  settings: ListSettings,
): string[] {
  const baselineOptions = LIST_COLUMN_LETTERS
    .filter((letter) => letter !== columnLetter)
    .filter((letter) => isBaselineAnchorColumnVerticalAlign(settings[getListColumnVerticalAlignSettingKey(letter) as ListColumnVerticalAlignKey]))
    .map((letter) => \`Baseline \${letter}\`);

  return [...COLUMN_VALIGN_BASIC_OPTIONS, ...baselineOptions];
}

type ColumnVerticalAlign =
  | { kind: 'top' | 'center' | 'bottom' }
  | { kind: 'baseline'; anchorLetter: string };

function parseColumnVerticalAlign(value: string | undefined): ColumnVerticalAlign {
  const raw = normalizeListColumnVerticalAlign(value);
  if (raw.toLowerCase().startsWith('baseline')) {
    const anchorLetter = raw.slice(-1).toUpperCase();
    if (LIST_COLUMN_LETTERS.includes(anchorLetter as typeof LIST_COLUMN_LETTERS[number])) {
      return { kind: 'baseline', anchorLetter };
    }
    return { kind: 'top' };
  }
  if (raw === 'Center') return { kind: 'center' };
  if (raw === 'Bottom') return { kind: 'bottom' };
  return { kind: 'top' };
}

function resolveColumnVerticalAlign(
  value: string | undefined,
  settings: ListSettings,
  columnLetter: string,
): ColumnVerticalAlign {
  if (isActiveBaselineVAlign(value, settings, columnLetter)) {
    return parseColumnVerticalAlign(value);
  }

  const parsed = parseColumnVerticalAlign(value);
  if (parsed.kind === 'baseline') {
    return { kind: 'top' };
  }

  return parsed;
}

function resolveBasicColumnVerticalAlign(value: string | undefined): ColumnVerticalAlign {
  const parsed = parseColumnVerticalAlign(value);
  if (parsed.kind === 'baseline') {
    return { kind: 'top' };
  }
  return parsed;
}

function isActiveBaselineVAlign(
  value: string | undefined,
  settings: ListSettings,
  forColumnLetter: string,
): boolean {
  if (!isValidColumnBaselineVAlign(value, forColumnLetter, settings)) {
    return false;
  }
  return parseColumnVerticalAlign(value).kind === 'baseline';
}

function getListColumnVerticalAlignSanitizeUpdates(
  settings: ListSettings,
): ListColumnVerticalAlignUpdates | null {
  const updates: ListColumnVerticalAlignUpdates = {};
  let hasUpdates = false;

  for (const letter of LIST_COLUMN_LETTERS) {
    const key = getListColumnVerticalAlignSettingKey(letter) as ListColumnVerticalAlignKey;
    const value = settings[key];

    if (settings.type === 'b') {
      const raw = String(value ?? 'Top').trim();
      if (raw !== 'Top' && raw !== 'Center' && raw !== 'Bottom') {
        updates[key] = 'Top';
        hasUpdates = true;
      }
      continue;
    }

    if (!isValidColumnBaselineVAlign(value, letter, settings)) {
      updates[key] = 'Top';
      hasUpdates = true;
    }
  }

  return hasUpdates ? updates : null;
}

function vAlignToTitleStyle(
  kind: ColumnVerticalAlign['kind'],
): React.CSSProperties {
  if (kind === 'center') {
    return { flex: '0 0 auto', marginTop: 'auto', marginBottom: 'auto' };
  }
  if (kind === 'bottom') {
    return { flex: '0 0 auto', marginTop: 'auto' };
  }
  return {};
}

function resolveCutLabelVerticalAlignKind(
  value: string | undefined,
): ColumnVerticalAlign['kind'] {
  const kind = parseColumnVerticalAlign(value).kind;
  return kind === 'baseline' ? 'center' : kind;
}

function textAlignToJustifyContent(
  textAlign: 'left' | 'center' | 'right' | 'justify',
): React.CSSProperties['justifyContent'] {
  if (textAlign === 'right') {
    return 'flex-end';
  }
  if (textAlign === 'center') {
    return 'center';
  }
  if (textAlign === 'left') {
    return 'flex-start';
  }
  return 'flex-start';
}

function cutVerticalAlignKindToFlexAlign(
  kind: ColumnVerticalAlign['kind'],
): React.CSSProperties['alignItems'] {
  if (kind === 'center') {
    return 'center';
  }
  if (kind === 'bottom') {
    return 'flex-end';
  }
  return 'flex-start';
}

function getFirstLineBaselineOffsetInTitle(
  titleEl: HTMLElement,
  probeClassName: string,
): number {
  const probe = document.createElement('i');
  probe.className = probeClassName;
  probe.setAttribute('aria-hidden', 'true');
  titleEl.prepend(probe);

  const { top: titleTop } = titleEl.getBoundingClientRect();
  const { bottom: probeBottom } = probe.getBoundingClientRect();
  const baselineOffset = probeBottom - titleTop;
  probe.remove();

  return baselineOffset;
}

function measureColumnFirstLineBaselineOffset(
  info: {
    titleEl: HTMLElement | null;
    kind: string;
  },
  rowTop: number,
  listColClassName: string,
  probeClassName: string,
): number {
  const titleEl = info.titleEl;
  if (!titleEl) return 0;

  const listCol = titleEl.closest<HTMLElement>(\`.\${listColClassName}\`);
  if (!listCol) return 0;

  const baselineInTitle = getFirstLineBaselineOffsetInTitle(titleEl, probeClassName);

  if (info.kind === 'baseline') {
    return titleEl.getBoundingClientRect().top - rowTop + baselineInTitle;
  }

  const listColRect = listCol.getBoundingClientRect();
  const titleHeight = titleEl.getBoundingClientRect().height;
  let valignOffset = 0;

  if (info.kind === 'center') {
    valignOffset = (listColRect.height - titleHeight) / 2;
  } else if (info.kind === 'bottom') {
    valignOffset = listColRect.height - titleHeight;
  }

  return (listColRect.top - rowTop) + valignOffset + baselineInTitle;
}

function syncRowListColHeights(
  rowEl: HTMLElement,
  cols: HTMLElement[],
  listColClassName: string,
): number {
  const rowHeight = rowEl.getBoundingClientRect().height;
  if (rowHeight <= 0) {
    return 0;
  }

  cols.forEach((colEl) => {
    const listCol = colEl.querySelector<HTMLElement>(\`.\${listColClassName}\`);
    if (listCol) {
      listCol.style.minHeight = \`\${rowHeight}px\`;
      listCol.style.height = \`\${rowHeight}px\`;
    }
  });

  return rowHeight;
}

function applyBaselineTitleShift(titleEl: HTMLElement | null, shift: number): number {
  if (!titleEl || !shift) {
    if (titleEl) {
      titleEl.style.transform = '';
    }
    return 0;
  }

  titleEl.style.transform = \`translateY(\${shift}px)\`;
  return shift;
}

const COLUMN_CONTENT_KEY_TO_TEXT_PREFIX: Record<
  typeof COLUMN_CONTENT_KEYS[number],
  typeof COLUMN_TEXT_PREFIXES[number]
> = {
  AColumn: 'AColumn',
  BColumnWidth: 'BColumn',
  CColumnWidth: 'CColumn',
  DColumnWidth: 'DColumn',
  EColumnWidth: 'EColumn',
};

export const LIST_GLOBAL_TEXT_STYLE_KEYS = [
  'textFontFamily',
  'textFontSettings',
  'textFontSize',
  'textLineHeight',
  'textLetterSpacing',
  'textWordSpacing',
  'textTextAlign',
  'textTextAppearance',
] as const;

export type ListGlobalTextStyleKey = typeof LIST_GLOBAL_TEXT_STYLE_KEYS[number];

export function getListColumnTextSettingKey(
  prefix: ListTextStylePrefix,
  globalKey: ListGlobalTextStyleKey,
): string {
  return \`\${prefix}\${globalKey.replace(/^text/, 'Text')}\`;
}

export const LIST_TEXT_STYLE_TAB_LABELS: Record<ListTextStylePrefix, string> = {
  AColumn: 'A',
  BColumn: 'B',
  CColumn: 'C',
  DColumn: 'D',
  EColumn: 'E',
  cutLabel: 'CUT',
};

export function createListTextStyleTabContentItems(prefix: ListTextStylePrefix): LayoutItem[] {
  return [
    getListColumnTextSettingKey(prefix, 'textFontFamily'),
    getListColumnTextSettingKey(prefix, 'textFontSettings'),
    {
      type: 'row',
      items: [
        getListColumnTextSettingKey(prefix, 'textFontSize'),
        getListColumnTextSettingKey(prefix, 'textLineHeight'),
        getListColumnTextSettingKey(prefix, 'textLetterSpacing'),
        getListColumnTextSettingKey(prefix, 'textWordSpacing'),
      ],
    },
    getListColumnTextSettingKey(prefix, 'textTextAlign'),
    getListColumnTextSettingKey(prefix, 'textTextAppearance'),
    \`\${prefix}VerticalAlign\`,
  ];
}

export function createListTextStylePanelTab(): LayoutTab {
  return {
    type: 'tab',
    id: 'listColumnTextStyle',
    tabs: Object.fromEntries(
      LIST_TEXT_STYLE_PREFIXES.map((prefix) => [
        LIST_TEXT_STYLE_TAB_LABELS[prefix],
        createListTextStyleTabContentItems(prefix),
      ]),
    ),
  };
}

type ListTextStyleFields = {
  textFontFamily?: string;
  textFontSettings?: { fontWeight: number; fontStyle: string };
  textFontSize?: number;
  textLineHeight?: number;
  textLetterSpacing?: number;
  textWordSpacing?: number;
  textTextAlign?: 'left' | 'center' | 'right' | 'justify';
  textTextAppearance?: TextStyles['textAppearance'];
  textColor?: string;
};

type ResolvedListTextFields = {
  textFontFamily: string;
  textFontSettings: { fontWeight: number; fontStyle: string };
  textFontSize?: number;
  textLineHeight?: number;
  textLetterSpacing: number;
  textWordSpacing: number;
  textTextAlign: 'left' | 'center' | 'right' | 'justify';
  textTextAppearance?: TextStyles['textAppearance'];
  textColor?: string;
};

function resolveListColumnTextFields(
  settings: ListSettings,
  textPrefix: ListTextStylePrefix,
): ResolvedListTextFields {
  const read = <K extends ListGlobalTextStyleKey>(globalKey: K) => {
    const columnKey = getListColumnTextSettingKey(textPrefix, globalKey);
    return settings[columnKey as keyof ListSettings] as ListTextStyleFields[K] | undefined;
  };

  return {
    textFontFamily: (read('textFontFamily') as string | undefined) ?? 'Arial',
    textFontSettings: (read('textFontSettings') as ListTextStyleFields['textFontSettings']) ?? {
      fontWeight: 400,
      fontStyle: 'normal',
    },
    textFontSize: read('textFontSize') as number | undefined,
    textLineHeight: read('textLineHeight') as number | undefined,
    textLetterSpacing: (read('textLetterSpacing') as number | undefined) ?? 0,
    textWordSpacing: (read('textWordSpacing') as number | undefined) ?? 0,
    textTextAlign: (read('textTextAlign') as ListTextStyleFields['textTextAlign'])
      ?? (textPrefix === CUT_LABEL_TEXT_PREFIX ? 'center' : 'left'),
    textTextAppearance: read('textTextAppearance') as ListTextStyleFields['textTextAppearance'],
    textColor: settings.textColor,
  };
}

function listColumnTextFieldsToCss(
  fields: ResolvedListTextFields,
  isEditor?: boolean,
): React.CSSProperties {
  const resolvedTextStyle: TextStyles = {
    fontSettings: {
      fontFamily: fields.textFontFamily,
      fontWeight: fields.textFontSettings?.fontWeight ?? 400,
      fontStyle: fields.textFontSettings?.fontStyle ?? 'normal',
    },
    fontSize: fields.textFontSize ?? 0.01,
    lineHeight: fields.textLineHeight,
    letterSpacing: fields.textLetterSpacing,
    wordSpacing: fields.textWordSpacing,
    textAlign: fields.textTextAlign,
    textAppearance: fields.textTextAppearance,
    color: fields.textColor ?? '#767676',
  };

  return omitTextColors(textStylesToCss(resolvedTextStyle, isEditor));
}

function getListColumnTitleClassName(
  settings: ListSettings,
  prefix: ListTextStylePrefix,
  baseClassName: string,
  tightLeadingClassName: string,
): string {
  const fields = resolveListColumnTextFields(settings, prefix);
  const fontSize = fields.textFontSize ?? 0.01;
  const lineHeight = fields.textLineHeight;
  const needsTightLeading = lineHeight !== undefined && lineHeight < fontSize;

  return needsTightLeading
    ? \`\${baseClassName} \${tightLeadingClassName}\`
    : baseClassName;
}

function getListColumnTitleVars(
  settings: ListSettings,
  prefix: ListTextStylePrefix,
  titleVarPrefix: string,
  isEditor?: boolean,
): React.CSSProperties {
  const fields = resolveListColumnTextFields(settings, prefix);
  const fontSize = fields.textFontSize ?? 0.01;
  const lineHeight = fields.textLineHeight;

  if (lineHeight === undefined || lineHeight >= fontSize) {
    return {};
  }

  return {
    [\`--\${titleVarPrefix}-title-leading-gap\`]: scalingValue((fontSize - lineHeight) / 2, isEditor),
  } as React.CSSProperties;
}

const COLUMN_WIDTH_KEYS = [
  'AColumnWidth',
  'BColumnWidth',
  'CColumnWidth',
  'DColumnWidth',
  'EColumnWidth',
] as const;

const COLUMN_PADDING_LEFT_KEYS = [
  'AColumnPaddingLeft',
  'BColumnPaddingLeft',
  'CColumnPaddingLeft',
  'DColumnPaddingLeft',
  'EColumnPaddingLeft',
] as const;

const COLUMN_PADDING_RIGHT_KEYS = [
  'AColumnPaddingRight',
  'BColumnPaddingRight',
  'CColumnPaddingRight',
  'DColumnPaddingRight',
  'EColumnPaddingRight',
] as const;

const COLUMN_PADDING_BOTTOM_KEYS = [
  'AColumnPaddingBottom',
  'BColumnPaddingBottom',
  'CColumnPaddingBottom',
  'DColumnPaddingBottom',
  'EColumnPaddingBottom',
] as const;

type ColumnWidthKey = typeof COLUMN_WIDTH_KEYS[number];
type ColumnPaddingLeftKey = typeof COLUMN_PADDING_LEFT_KEYS[number];
type ColumnPaddingRightKey = typeof COLUMN_PADDING_RIGHT_KEYS[number];
type ColumnPaddingBottomKey = typeof COLUMN_PADDING_BOTTOM_KEYS[number];

type ListColumnPaddingUpdates = {
  AColumnPaddingLeft?: number;
  AColumnPaddingRight?: number;
  BColumnPaddingLeft?: number;
  BColumnPaddingRight?: number;
  CColumnPaddingLeft?: number;
  CColumnPaddingRight?: number;
  DColumnPaddingLeft?: number;
  DColumnPaddingRight?: number;
  EColumnPaddingLeft?: number;
  EColumnPaddingRight?: number;
};

type ListColumnWidthUpdates = {
  AColumnWidth?: number;
  BColumnWidth?: number;
  CColumnWidth?: number;
  DColumnWidth?: number;
  EColumnWidth?: number;
};

type ListItemColumn = {
  key: string;
  textPrefix: typeof COLUMN_TEXT_PREFIXES[number];
  widthKey: ColumnWidthKey;
  paddingLeftKey: ColumnPaddingLeftKey;
  paddingRightKey: ColumnPaddingRightKey;
  paddingBottomKey: ColumnPaddingBottomKey;
  width: number;
  paddingLeft: number;
  paddingRight: number;
  paddingBottom: number;
};

type ColorKeys =
  | 'textColor'
  | 'backgroundColor'
  | 'dividerColor'
  | 'textHoverColor'
  | 'backgroundHoverColor'
  | 'dividerHoverColor';

const COLOR_VAR_MAP: Record<ColorKeys, string> = {
  textColor: 'text-color',
  backgroundColor: 'background-color',
  dividerColor: 'divider-color',
  textHoverColor: 'text-hover-color',
  backgroundHoverColor: 'background-hover-color',
  dividerHoverColor: 'divider-hover-color',
};

const STATE_KEYS = ['hover', 'focus', 'filled', 'success', 'error'] as const;

const COL_RESIZE_HANDLE_WIDTH = 0.004;
const COL_PADDING_HANDLE_WIDTH = 0.004;
const ROW_PADDING_HANDLE_HEIGHT = COL_PADDING_HANDLE_WIDTH;
const MIN_COLUMN_WIDTH_PX = 50;
const ARTICLE_DESIGN_WIDTH = 1440;
const MIN_COLUMN_WIDTH = MIN_COLUMN_WIDTH_PX / ARTICLE_DESIGN_WIDTH;

export function getListMinColumnWidth(designWidthPx?: number): number {
  const designWidth = typeof designWidthPx === 'number' && designWidthPx > 0
    ? designWidthPx
    : ARTICLE_DESIGN_WIDTH;

  return MIN_COLUMN_WIDTH_PX / designWidth;
}

function getEditorDesignWidth(element: HTMLElement | null | undefined): number {
  let el = element ?? null;

  while (el) {
    const inline = el.style.getPropertyValue('--cntrl-article-width').trim();
    if (inline) {
      const px = parseFloat(inline);
      if (Number.isFinite(px) && px > 0) {
        return px;
      }
    }

    const computed = getComputedStyle(el).getPropertyValue('--cntrl-article-width').trim();
    if (computed) {
      const px = parseFloat(computed);
      if (Number.isFinite(px) && px > 0) {
        return px;
      }
    }

    el = el.parentElement;
  }

  return ARTICLE_DESIGN_WIDTH;
}

const DEFAULT_COLUMN_WIDTHS: Record<ColumnWidthKey, number> = {
  AColumnWidth: 0.02,
  BColumnWidth: 0.02,
  CColumnWidth: 0.02,
  DColumnWidth: 0.02,
  EColumnWidth: 0.02,
};

export function getListEffectiveContentWidth(
  settings: ListSettings,
): number {
  const wrapperWidth = typeof settings.wrapperWidth === 'number' ? settings.wrapperWidth : 1;

  return Math.max(0, wrapperWidth);
}

export function getEqualListColumnWidthUpdates(
  columns: number,
  contentWidth: number = 1,
): Record<ColumnWidthKey, number> {
  const equalColumnWidth = contentWidth / columns;
  return Object.fromEntries(
    COLUMN_WIDTH_KEYS.map((key) => [key, equalColumnWidth]),
  ) as Record<ColumnWidthKey, number>;
}

function getResetListColumnPaddingUpdates(): Record<
  ColumnPaddingLeftKey | ColumnPaddingRightKey,
  number
> {
  return Object.fromEntries([
    ...COLUMN_PADDING_LEFT_KEYS.map((key) => [key, 0]),
    ...COLUMN_PADDING_RIGHT_KEYS.map((key) => [key, 0]),
  ]) as Record<ColumnPaddingLeftKey | ColumnPaddingRightKey, number>;
}

function getResetListColumnPaddingBottomUpdates(): Record<ColumnPaddingBottomKey, number> {
  return Object.fromEntries(
    COLUMN_PADDING_BOTTOM_KEYS.map((key) => [key, 0]),
  ) as Record<ColumnPaddingBottomKey, number>;
}

function getStoredColumnWidths(
  settings: ListSettings,
): Record<ColumnWidthKey, number> {
  return Object.fromEntries(
    COLUMN_WIDTH_KEYS.map((key) => [
      key,
      typeof settings[key] === 'number'
        ? settings[key] as number
        : DEFAULT_COLUMN_WIDTHS[key],
    ]),
  ) as Record<ColumnWidthKey, number>;
}

export function resolveListColumnPadding(
  columnWidth: number,
  paddingLeft: number,
  paddingRight: number,
): { paddingLeft: number; paddingRight: number } {
  const maxTotalPadding = columnWidth - MIN_COLUMN_WIDTH;
  const totalPadding = paddingLeft + paddingRight;

  if (totalPadding <= 0 || totalPadding <= maxTotalPadding) {
    return { paddingLeft, paddingRight };
  }

  if (maxTotalPadding <= 0) {
    return { paddingLeft: 0, paddingRight: 0 };
  }

  const scale = maxTotalPadding / totalPadding;

  return {
    paddingLeft: paddingLeft * scale,
    paddingRight: paddingRight * scale,
  };
}

export function getEffectiveListColumnWidths(
  columns: number,
  wrapperWidth: number,
  storedWidths: Record<ColumnWidthKey, number>,
): number[] {
  const resolvedWidths = resolveListColumnWidths(columns, wrapperWidth, storedWidths);

  if (columns <= 0) {
    return [];
  }

  const sumFixed = resolvedWidths.slice(0, columns - 1).reduce((sum, width) => sum + width, 0);

  return [
    ...resolvedWidths.slice(0, columns - 1),
    Math.max(0, wrapperWidth - sumFixed),
  ];
}

function getListColumnPaddingUpdates(
  columns: number,
  effectiveWidths: number[],
  settings: ListSettings,
): ListColumnPaddingUpdates {
  const updates: ListColumnPaddingUpdates = {};

  for (let index = 0; index < columns; index += 1) {
    const paddingLeftKey = COLUMN_PADDING_LEFT_KEYS[index];
    const paddingRightKey = COLUMN_PADDING_RIGHT_KEYS[index];
    const storedPaddingLeft = typeof settings[paddingLeftKey] === 'number'
      ? settings[paddingLeftKey] as number
      : 0;
    const storedPaddingRight = typeof settings[paddingRightKey] === 'number'
      ? settings[paddingRightKey] as number
      : 0;
    const resolvedPadding = resolveListColumnPadding(
      effectiveWidths[index] ?? 0,
      storedPaddingLeft,
      storedPaddingRight,
    );

    if (resolvedPadding.paddingLeft !== storedPaddingLeft) {
      updates[paddingLeftKey] = resolvedPadding.paddingLeft;
    }

    if (resolvedPadding.paddingRight !== storedPaddingRight) {
      updates[paddingRightKey] = resolvedPadding.paddingRight;
    }
  }

  return updates;
}

export function resolveListColumnWidths(
  columns: number,
  wrapperWidth: number,
  storedWidths: Record<ColumnWidthKey, number>,
): number[] {
  if (columns <= 0) {
    return [];
  }

  const widths = COLUMN_WIDTH_KEYS.slice(0, columns).map(
    (key) => storedWidths[key],
  );

  if (columns === 1) {
    return widths;
  }

  const fixedWidths = widths.slice(0, columns - 1);
  const fixedSum = fixedWidths.reduce((sum, width) => sum + width, 0);
  const minTotalWidth = fixedSum + MIN_COLUMN_WIDTH;

  if (wrapperWidth >= minTotalWidth) {
    return widths;
  }

  const resolvedFixedWidths = [...fixedWidths];
  let overflow = minTotalWidth - wrapperWidth;

  for (let index = resolvedFixedWidths.length - 1; index >= 0 && overflow > 0; index -= 1) {
    const shrinkable = resolvedFixedWidths[index] - MIN_COLUMN_WIDTH;
    if (shrinkable <= 0) {
      continue;
    }

    const shrinkAmount = Math.min(overflow, shrinkable);
    resolvedFixedWidths[index] -= shrinkAmount;
    overflow -= shrinkAmount;
  }

  return [...resolvedFixedWidths, widths[columns - 1]];
}

function getListColumnWidthUpdatesForWrapperWidth(
  columns: number,
  wrapperWidth: number,
  storedWidths: Record<ColumnWidthKey, number>,
): ListColumnWidthUpdates {
  if (columns <= 1) {
    return {};
  }

  const resolvedWidths = resolveListColumnWidths(columns, wrapperWidth, storedWidths);
  const updates: ListColumnWidthUpdates = {};

  for (let index = 0; index < columns - 1; index += 1) {
    const key = COLUMN_WIDTH_KEYS[index];
    if (resolvedWidths[index] !== storedWidths[key]) {
      updates[key] = resolvedWidths[index];
    }
  }

  return updates;
}

function getColumnsOrder(settings: ListSettings): string[] {
  if (Array.isArray(settings.columnsOrder) && settings.columnsOrder.length > 0) {
    return settings.columnsOrder as string[];
  }

  return [...COLUMN_CONTENT_KEYS];
}

function areStringArraysEqual(left: string[], right: string[]): boolean {
  if (left.length !== right.length) {
    return false;
  }

  return left.every((value, index) => value === right[index]);
}

function getColumnLayoutUpdatesForOrderChange(
  nextOrder: string[],
  prevOrder: string[],
  prevSettings: ListSettings,
  columns: number,
): Record<string, number> {
  const count = Math.min(columns, nextOrder.length, COLUMN_WIDTH_KEYS.length);
  const updates: Record<string, number> = {};

  for (let index = 0; index < count; index += 1) {
    const contentKey = nextOrder[index];
    const prevSlotIndex = prevOrder.indexOf(contentKey);

    if (prevSlotIndex === -1) {
      continue;
    }

    const prevWidthKey = COLUMN_WIDTH_KEYS[prevSlotIndex];
    const prevPaddingLeftKey = COLUMN_PADDING_LEFT_KEYS[prevSlotIndex];
    const prevPaddingRightKey = COLUMN_PADDING_RIGHT_KEYS[prevSlotIndex];
    const prevPaddingBottomKey = COLUMN_PADDING_BOTTOM_KEYS[prevSlotIndex];
    const widthKey = COLUMN_WIDTH_KEYS[index];
    const paddingLeftKey = COLUMN_PADDING_LEFT_KEYS[index];
    const paddingRightKey = COLUMN_PADDING_RIGHT_KEYS[index];
    const paddingBottomKey = COLUMN_PADDING_BOTTOM_KEYS[index];

    const prevWidth = prevSettings[prevWidthKey];
    const prevPaddingLeft = prevSettings[prevPaddingLeftKey];
    const prevPaddingRight = prevSettings[prevPaddingRightKey];
    const prevPaddingBottom = prevSettings[prevPaddingBottomKey];

    if (typeof prevWidth === 'number') {
      updates[widthKey] = prevWidth;
    }

    if (typeof prevPaddingLeft === 'number') {
      updates[paddingLeftKey] = prevPaddingLeft;
    }

    if (typeof prevPaddingRight === 'number') {
      updates[paddingRightKey] = prevPaddingRight;
    }

    if (typeof prevPaddingBottom === 'number') {
      updates[paddingBottomKey] = prevPaddingBottom;
    }
  }

  return updates;
}

function hasListSettingsChanges(
  current: ListSettings,
  updated: ListSettings,
): boolean {
  const keys = new Set([
    ...Object.keys(current),
    ...Object.keys(updated),
  ]);

  for (const key of keys) {
    if (current[key as keyof ListSettings] !== updated[key as keyof ListSettings]) {
      return true;
    }
  }

  return false;
}

export function applyListColumnCountChange(
  nextSettings: ListSettings,
  prevSettings: ListSettings,
): ListSettings {
  const nextColumns = nextSettings.columns;
  const prevColumns = prevSettings.columns;

  if (typeof nextColumns !== 'number' || nextColumns === prevColumns) {
    return nextSettings;
  }

  const nextContentWidth = getListEffectiveContentWidth(nextSettings);
  const isVerticalLayout = nextSettings.type === 'b'
    || (nextSettings.type === undefined && prevSettings.type === 'b');
  const updates: ListSettings = {
    ...nextSettings,
    ...getEqualListColumnWidthUpdates(nextColumns, nextContentWidth),
    ...getResetListColumnPaddingUpdates(),
  };

  if (isVerticalLayout) {
    for (const key of COLUMN_PADDING_BOTTOM_KEYS) {
      if (typeof prevSettings[key] === 'number') {
        updates[key] = prevSettings[key];
      }
    }
  } else {
    Object.assign(updates, getResetListColumnPaddingBottomUpdates());
  }

  return hasListSettingsChanges(nextSettings, updates) ? updates : nextSettings;
}

export function applyListSettingsChange(
  nextSettings: ListSettings,
  prevSettings: ListSettings,
  options?: { designWidth?: number },
): ListSettings {
  const valignSanitizeUpdates = getListColumnVerticalAlignSanitizeUpdates(nextSettings);
  if (valignSanitizeUpdates) {
    nextSettings = { ...nextSettings, ...valignSanitizeUpdates };
  }

  const minColumnWidth = getListMinColumnWidth(options?.designWidth);
  const nextColumns = nextSettings.columns;
  const prevColumns = prevSettings.columns;
  const nextContentWidth = getListEffectiveContentWidth(nextSettings);
  const prevContentWidth = getListEffectiveContentWidth(prevSettings);
  const isVerticalLayout = nextSettings.type === 'b'
    || (nextSettings.type === undefined && prevSettings.type === 'b');
  const columns =
    typeof nextColumns === 'number'
      ? nextColumns
      : typeof prevColumns === 'number'
        ? prevColumns
        : COLUMN_CONTENT_KEYS.length;

  const withColumnPaddingUpdates = (
    settings: ListSettings,
  ): ListSettings => {
    if (isVerticalLayout) {
      return settings;
    }

    const storedWidths = getStoredColumnWidths({ ...prevSettings, ...settings });
    const contentWidth = getListEffectiveContentWidth(settings);
    const effectiveWidths = getEffectiveListColumnWidths(columns, contentWidth, storedWidths);
    const paddingUpdates = getListColumnPaddingUpdates(columns, effectiveWidths, {
      ...prevSettings,
      ...settings,
    });

    if (Object.keys(paddingUpdates).length === 0) {
      return settings;
    }

    return {
      ...settings,
      ...paddingUpdates,
    };
  };

  if (typeof nextColumns === 'number' && nextColumns !== prevColumns) {
    return nextSettings;
  }

  const nextOrder = getColumnsOrder(nextSettings);
  const prevOrder = getColumnsOrder(prevSettings);

  if (!areStringArraysEqual(nextOrder, prevOrder)) {
    return withColumnPaddingUpdates({
      ...nextSettings,
      ...getColumnLayoutUpdatesForOrderChange(nextOrder, prevOrder, prevSettings, columns),
    });
  }

  if (nextContentWidth < prevContentWidth) {
    if (typeof columns === 'number' && !isVerticalLayout) {
      const storedWidths = getStoredColumnWidths({ ...prevSettings, ...nextSettings });

      return withColumnPaddingUpdates({
        ...nextSettings,
        ...getListColumnWidthUpdatesForWrapperWidth(columns, nextContentWidth, storedWidths),
      });
    }
  }

  if (isVerticalLayout) {
    const storedTextPaddingLR = typeof nextSettings.textPaddingLR === 'number'
      ? nextSettings.textPaddingLR as number
      : 0;
    const maxAllowedPadding = Math.max(0, (nextContentWidth - minColumnWidth) / 2);

    if (storedTextPaddingLR > maxAllowedPadding) {
      return { ...nextSettings, textPaddingLR: maxAllowedPadding };
    }

    return nextSettings;
  }

  const storedWidths = getStoredColumnWidths({ ...prevSettings, ...nextSettings });
  const prevEffectiveWidths = getEffectiveListColumnWidths(
    columns,
    prevContentWidth,
    getStoredColumnWidths(prevSettings),
  );
  const nextEffectiveWidths = getEffectiveListColumnWidths(
    columns,
    nextContentWidth,
    storedWidths,
  );
  const columnWidthDecreased = nextEffectiveWidths.some(
    (width, index) => width < (prevEffectiveWidths[index] ?? width),
  );
  const columnWidthSettingChanged = COLUMN_WIDTH_KEYS.some((key) => {
    const nextWidth = nextSettings[key];
    const prevWidth = prevSettings[key];

    return typeof nextWidth === 'number'
      && typeof prevWidth === 'number'
      && nextWidth !== prevWidth;
  });

  if (columnWidthDecreased || columnWidthSettingChanged) {
    return withColumnPaddingUpdates(nextSettings);
  }

  return nextSettings;
}

function getColumnMaxWidth(
  columnIndex: number,
  resolvedWidths: number[],
  storedWidths: number[],
  wrapperWidth: number,
): number {
  const leftWidth = resolvedWidths
    .slice(0, columnIndex)
    .reduce((sum, width) => sum + width, 0);
  const rightPreferredWidth = storedWidths
    .slice(columnIndex + 1, resolvedWidths.length - 1)
    .reduce((sum, width) => sum + width, 0);

  return Math.max(
    MIN_COLUMN_WIDTH,
    wrapperWidth - leftWidth - rightPreferredWidth - MIN_COLUMN_WIDTH,
  );
}

function randomBetween(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

function getColumnWidthsFromSettings(
  settings: ListSettings,
): Record<ColumnWidthKey, number> {
  return Object.fromEntries(
    COLUMN_WIDTH_KEYS.map((key) => [
      key,
      typeof settings[key] === 'number' ? settings[key] as number : DEFAULT_COLUMN_WIDTHS[key],
    ]),
  ) as Record<ColumnWidthKey, number>;
}

function getNumericSettingValues<K extends ColumnPaddingLeftKey | ColumnPaddingRightKey | ColumnPaddingBottomKey>(
  settings: ListSettings,
  keys: readonly K[],
  fallback = 0,
): Record<K, number> {
  return Object.fromEntries(
    keys.map((key) => [
      key,
      typeof settings[key] === 'number' ? settings[key] as number : fallback,
    ]),
  ) as Record<K, number>;
}

function buildListColumns(
  columnContentOrder: readonly typeof COLUMN_CONTENT_KEYS[number][],
  columns: number,
  columnWidthByKey: Record<ColumnWidthKey, number>,
  columnPaddingLeftByKey: Record<ColumnPaddingLeftKey, number>,
  columnPaddingRightByKey: Record<ColumnPaddingRightKey, number>,
  columnPaddingBottomByKey: Record<ColumnPaddingBottomKey, number>,
): ListItemColumn[] {
  return columnContentOrder.slice(0, columns).map((key, index) => {
    const paddingLeftKey = COLUMN_PADDING_LEFT_KEYS[index];
    const paddingRightKey = COLUMN_PADDING_RIGHT_KEYS[index];
    const paddingBottomKey = COLUMN_PADDING_BOTTOM_KEYS[index];

    return {
      key,
      textPrefix: COLUMN_CONTENT_KEY_TO_TEXT_PREFIX[key],
      widthKey: COLUMN_WIDTH_KEYS[index],
      width: columnWidthByKey[COLUMN_WIDTH_KEYS[index]],
      paddingLeftKey,
      paddingRightKey,
      paddingBottomKey,
      paddingLeft: columnPaddingLeftByKey[paddingLeftKey],
      paddingRight: columnPaddingRightByKey[paddingRightKey],
      paddingBottom: columnPaddingBottomByKey[paddingBottomKey],
    };
  });
}

export function List({ settings, content, isEditor, isPreviewMode, isEditMode, activeEvent, layoutId, onUpdateSettings }: ListProps) {
  const { prefix: P } = useScopedStyles();
  const showControls = Boolean(isEditMode);
  const {
    columns,
    type,
    wrapperWidth,
    entriesCount,
    cellMinHeight,
    dividerWidth,
    showVisibility,
    cut,
    showCut,
    cutCellMinHeight,
    cutLabel,
    imageSize,
    imageOnHover,
    entryHoverEffect,
    entryHoverShowOption,
    rowPaddingTop,
    rowPaddingBottom,
    rowPaddingTopB,
    columnsOrder,
    textPaddingLR,
    textColor,
    backgroundColor,
    dividerColor,
    textHoverColor,
    backgroundHoverColor,
    dividerHoverColor,
  } = settings;

  const [visibleRowCount, setVisibleRowCount] = useState<number | undefined>(undefined);
  const [hoverImage, setHoverImage] = useState<HoverImageState | null>(null);
  const showHoverImage = imageOnHover === 'on' && (!isEditor || isPreviewMode);
  const cutEnabled = (cut ?? 0) > 0;
  const isVerticalLayout = type === 'b';
  const containerRef = useRef<HTMLDivElement>(null);
  const firstEntryRef = useRef<HTMLElement | null>(null);
  const [firstEntryHandleTopPx, setFirstEntryHandleTopPx] = useState<number | null>(null);
  const [designWidth, setDesignWidth] = useState(ARTICLE_DESIGN_WIDTH);
  const minColumnWidth = getListMinColumnWidth(designWidth);

  const storedTextPaddingLRMax = Math.max(0, ((wrapperWidth ?? 0) - minColumnWidth) / 2);
  const effectiveTextPaddingLR = Math.min(textPaddingLR ?? 0, storedTextPaddingLRMax);
  const textPaddingLRHandleWidth = Math.max(effectiveTextPaddingLR, COL_PADDING_HANDLE_WIDTH);
  const textPaddingLRMaxFraction = ((wrapperWidth ?? 0) + minColumnWidth) / 2;

  useLayoutEffect(() => {
    if (!isEditor) {
      setDesignWidth(ARTICLE_DESIGN_WIDTH);
      return;
    }

    const syncDesignWidth = () => {
      setDesignWidth(getEditorDesignWidth(containerRef.current));
    };

    syncDesignWidth();

    const observed = containerRef.current;
    if (!observed) {
      return;
    }

    const observer = new ResizeObserver(syncDesignWidth);
    observer.observe(observed);

    let pageEl: HTMLElement | null = observed;
    while (pageEl && !pageEl.style.getPropertyValue('--cntrl-article-width')) {
      pageEl = pageEl.parentElement;
    }
    if (pageEl) {
      observer.observe(pageEl);
    }

    return () => observer.disconnect();
  }, [isEditor, layoutId]);

  useEffect(() => {
    setVisibleRowCount(undefined);
  }, [cut, showCut, content, entriesCount]);

  useEffect(() => {
    if (isEditor && !isPreviewMode) {
      setVisibleRowCount(undefined);
    }
  }, [isEditor, isPreviewMode]);

  const colorVars = buildColorVars(P, {
    textColor,
    backgroundColor,
    dividerColor,
    textHoverColor,
    backgroundHoverColor,
    dividerHoverColor
  }, COLOR_VAR_MAP, STATE_KEYS);

  const stateClass = activeEvent && activeEvent !== 'default' ? \`\${P}-state-\${activeEvent}\` : '';
  const entryHoverClass = (!isEditor || isPreviewMode)
    ? entryHoverEffect === 'default'
      ? \`\${P}-entry-hover-default\`
      : entryHoverEffect === 'blinds'
        ? \`\${P}-entry-hover-blinds\`
        : entryHoverEffect === 'reveal'
          ? \`\${P}-entry-hover-reveal\`
          : ''
    : '';
  const wrapperStateClasses = \`\${entryHoverClass} \${stateClass}\`.trim();
  const revealHoverActive = entryHoverEffect === 'reveal' && (!isEditor || isPreviewMode);
  const showDividerTop = showVisibility?.[0] ?? false;
  const showDividerBottom = showVisibility?.[1] ?? false;

  const prevSettingsRef = useRef(settings);
  const prevLayoutIdRef = useRef(layoutId);

  useEffect(() => {
    if (!onUpdateSettings || !isEditor) {
      prevSettingsRef.current = settings;
      prevLayoutIdRef.current = layoutId;
      return;
    }

    if (prevLayoutIdRef.current !== layoutId) {
      prevSettingsRef.current = settings;
      prevLayoutIdRef.current = layoutId;
      return;
    }

    const prevSettings = prevSettingsRef.current;
    const settingsChanged = prevSettings !== settings;

    if (!settingsChanged) {
      return;
    }

    if (
      typeof prevSettings.columns === 'number'
      && typeof settings.columns === 'number'
      && prevSettings.columns !== settings.columns
    ) {
      prevSettingsRef.current = settings;
      return;
    }

    const updatedSettings = applyListSettingsChange(
      settings,
      prevSettings,
      { designWidth },
    );

    prevSettingsRef.current = settings;

    if (!hasListSettingsChanges(settings, updatedSettings)) {
      return;
    }

    onUpdateSettings(updatedSettings);
  }, [settings, onUpdateSettings, isEditor, layoutId, designWidth]);

  const columnWidthByKey = useMemo(
    () => getColumnWidthsFromSettings(settings),
    [
      settings.AColumnWidth,
      settings.BColumnWidth,
      settings.CColumnWidth,
      settings.DColumnWidth,
      settings.EColumnWidth,
    ],
  );

  const columnPaddingLeftByKey = useMemo(
    () => getNumericSettingValues(settings, COLUMN_PADDING_LEFT_KEYS),
    [
      settings.AColumnPaddingLeft,
      settings.BColumnPaddingLeft,
      settings.CColumnPaddingLeft,
      settings.DColumnPaddingLeft,
      settings.EColumnPaddingLeft,
    ],
  );

  const columnPaddingRightByKey = useMemo(
    () => getNumericSettingValues(settings, COLUMN_PADDING_RIGHT_KEYS),
    [
      settings.AColumnPaddingRight,
      settings.BColumnPaddingRight,
      settings.CColumnPaddingRight,
      settings.DColumnPaddingRight,
      settings.EColumnPaddingRight,
    ],
  );

  const columnPaddingBottomByKey = useMemo(
    () => getNumericSettingValues(settings, COLUMN_PADDING_BOTTOM_KEYS),
    [
      settings.AColumnPaddingBottom,
      settings.BColumnPaddingBottom,
      settings.CColumnPaddingBottom,
      settings.DColumnPaddingBottom,
      settings.EColumnPaddingBottom,
    ],
  );

  const columnContentOrder = useMemo((): typeof COLUMN_CONTENT_KEYS[number][] => {
    if (Array.isArray(columnsOrder) && columnsOrder.length > 0) {
      return columnsOrder as typeof COLUMN_CONTENT_KEYS[number][];
    }
    return [...COLUMN_CONTENT_KEYS];
  }, [columnsOrder]);

  const listColumns = useMemo(
    () => buildListColumns(
      columnContentOrder,
      columns,
      columnWidthByKey,
      columnPaddingLeftByKey,
      columnPaddingRightByKey,
      columnPaddingBottomByKey,
    ),
    [columnContentOrder, columns, columnWidthByKey, columnPaddingLeftByKey, columnPaddingRightByKey, columnPaddingBottomByKey],
  );

  const resolvedContentWidth = getListEffectiveContentWidth(settings);

  const storedColumnWidths = useMemo(
    () => COLUMN_WIDTH_KEYS.slice(0, columns).map((key) => columnWidthByKey[key]),
    [columns, columnWidthByKey],
  );

  const resolvedColumnWidths = useMemo(
    () => resolveListColumnWidths(columns, resolvedContentWidth, columnWidthByKey),
    [columns, resolvedContentWidth, columnWidthByKey],
  );

  const effectiveColumnWidths = useMemo(
    () => getEffectiveListColumnWidths(columns, resolvedContentWidth, columnWidthByKey),
    [columns, resolvedContentWidth, columnWidthByKey],
  );

  const effectiveColumnPaddings = useMemo(
    () =>
      listColumns.map((col, index) =>
        resolveListColumnPadding(
          effectiveColumnWidths[index] ?? 0,
          col.paddingLeft,
          col.paddingRight,
        )),
    [listColumns, effectiveColumnWidths],
  );

  const allRows: ListItemRow[] = useMemo(() => {
    const resEntriesCount = entriesCount === 0 ? Infinity : entriesCount;
    const items = (content ?? []).slice(0, resEntriesCount);

    return items.map((item, index) => ({
      id: index,
      cells: Object.fromEntries(
        COLUMN_CONTENT_KEYS.map((key) => [key, item[key] ?? ''])
      ),
      image: item.image,
      link: item.link,
    }));
  }, [content, entriesCount]);

  const effectiveVisibleCount = cutEnabled
    ? (visibleRowCount ?? cut)
    : allRows.length;

  const visibleRows = useMemo(() => {
    if (cutEnabled) {
      return allRows.slice(0, effectiveVisibleCount);
    }
    return allRows;
  }, [allRows, cutEnabled, effectiveVisibleCount]);

  const showCutLabel = cutEnabled && effectiveVisibleCount < allRows.length;

  const hasBetweenItemDividers = visibleRows.length > 1 || showCutLabel;
  const dividerClassNames = [
    showDividerTop ? \`\${P}-divider-top\` : '',
    showDividerBottom || hasBetweenItemDividers ? \`\${P}-divider-bottom\` : '',
  ].filter(Boolean).join(' ');

  const cutItemClickable = !isEditor || isPreviewMode;

  const handleShowMore = () => {
    if (!cutItemClickable) return;

    const currentVisible = visibleRowCount ?? cut;
    if (!showCut) {
      setVisibleRowCount(allRows.length);
      return;
    }
    setVisibleRowCount(Math.min(currentVisible + showCut, allRows.length));
  };

  const scaled = (v: number) => scalingValue(v, isEditor ?? false);
  const resolvedRowPaddingTop = isVerticalLayout
    ? (rowPaddingTopB ?? 0)
    : (rowPaddingTop ?? 0);
  const resolvedRowPaddingBottom = rowPaddingBottom ?? 0;
  const resolvedCellMinHeight = cellMinHeight ?? 0;
  const firstEntryContentCenter = resolvedRowPaddingTop + resolvedCellMinHeight / 2;
  const rowPaddingBottomControlHeight = Math.max(resolvedRowPaddingBottom, ROW_PADDING_HANDLE_HEIGHT);
  const firstEntryBorderTopWidth = getEntryDividerWidths(
    0,
    visibleRows.length,
    showDividerTop,
    showDividerBottom,
    showCutLabel,
    dividerWidth ?? 0,
    isEditor ?? false,
  ).borderTopWidth;
  const firstEntryHandleTop = firstEntryHandleTopPx != null
    ? \`\${firstEntryHandleTopPx}px\`
    : \`calc(\${firstEntryBorderTopWidth} + \${scaled(firstEntryContentCenter)})\`;
  const rowPaddingTopControlKey = isVerticalLayout ? 'rowPaddingTopB' : 'rowPaddingTop';
  const firstColumn = listColumns[0];
  const lastColumn = listColumns[listColumns.length - 1];
  const firstColumnEffectivePadding = effectiveColumnPaddings[0];
  const lastColumnEffectivePadding = effectiveColumnPaddings[effectiveColumnPaddings.length - 1];
  const firstColumnPaddingLeftWidth = firstColumn && firstColumnEffectivePadding
    ? Math.max(firstColumnEffectivePadding.paddingLeft, COL_PADDING_HANDLE_WIDTH)
    : 0;
  const lastColumnPaddingRightWidth = lastColumn && lastColumnEffectivePadding
    ? Math.max(lastColumnEffectivePadding.paddingRight, COL_PADDING_HANDLE_WIDTH)
    : 0;
  const columnsRightEdge = resolvedContentWidth;

  const getHoverImagePosition = (event: React.MouseEvent) => {
    const container = containerRef.current;
    if (!container) {
      return { x: 0, y: 0 };
    }

    const rect = container.getBoundingClientRect();
    return {
      x: event.clientX - rect.left + HOVER_IMAGE_CURSOR_OFFSET,
      y: event.clientY - rect.top + HOVER_IMAGE_CURSOR_OFFSET,
    };
  };

  const handleRowMouseEnter = (row: ListItemRow, event: React.MouseEvent) => {
    if (!showHoverImage) return;

    const image = row.image;
    if (!image?.url) {
      setHoverImage(null);
      return;
    }

    const { x, y } = getHoverImagePosition(event);
    const minWidth = imageSize?.min ?? 80;
    const maxWidth = imageSize?.max ?? 320;
    const widthPx = hoverImage?.rowId === row.id
      ? hoverImage.widthPx
      : randomBetween(minWidth, maxWidth);

    setHoverImage({
      rowId: row.id,
      url: image.url,
      objectFit: 'contain',
      isVideo: isVideoMedia(image),
      widthPx,
      x,
      y,
    });
  };

  const handleWrapperMouseMove = (event: React.MouseEvent) => {
    if (!showHoverImage || !hoverImage) return;

    const { x, y } = getHoverImagePosition(event);
    setHoverImage((prev) => {
      if (!prev) return prev;
      if (prev.x === x && prev.y === y) return prev;
      return { ...prev, x, y };
    });
  };

  const handleWrapperMouseLeave = () => {
    setHoverImage(null);
  };

  const handleCutItemMouseEnter = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (revealHoverActive) {
      setRevealOpenDirectionFromMouseEnter(event, P);
    }
    if (!showHoverImage) return;
    setHoverImage(null);
  };

  const handleCutItemMouseLeave = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (revealHoverActive) {
      setRevealCloseDirectionFromMouseLeave(event, P);
    }
  };

  useLayoutEffect(() => {
    if (!showControls || isVerticalLayout) {
      setFirstEntryHandleTopPx(null);
      return;
    }

    const el = firstEntryRef.current;
    const container = el?.parentElement;
    if (!el || !container) {
      setFirstEntryHandleTopPx(null);
      return;
    }

    const update = () => {
      const rowContent = el.querySelector('[data-list-row]');
      if (!rowContent) {
        setFirstEntryHandleTopPx(null);
        return;
      }

      const containerRect = container.getBoundingClientRect();
      const rowRect = rowContent.getBoundingClientRect();
      setFirstEntryHandleTopPx(rowRect.top - containerRect.top + rowRect.height / 2);
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    observer.observe(container);

    return () => observer.disconnect();
  }, [
    showControls,
    isVerticalLayout,
    visibleRows,
    resolvedRowPaddingTop,
    resolvedRowPaddingBottom,
    resolvedCellMinHeight,
    content,
    settings,
    listColumns,
    effectiveColumnWidths,
    designWidth,
    dividerWidth,
    showDividerTop,
    showDividerBottom,
    showCutLabel,
  ]);

  const hasBaselineColumn = useMemo(
    () =>
      !isVerticalLayout &&
      COLUMN_TEXT_PREFIXES.some((prefix) => {
        const columnLetter = prefix.charAt(0);
        const valign = settings[\`\${prefix}VerticalAlign\` as ListColumnVerticalAlignKey];
        return isActiveBaselineVAlign(valign, settings, columnLetter);
      }),
    [
      isVerticalLayout,
      settings,
      settings.AColumnVerticalAlign,
      settings.BColumnVerticalAlign,
      settings.CColumnVerticalAlign,
      settings.DColumnVerticalAlign,
      settings.EColumnVerticalAlign,
    ],
  );
  
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const clearBaselineStyles = () => {
      container.querySelectorAll<HTMLElement>('[data-list-col]').forEach((el) => {
        el.style.transform = '';
        const listCol = el.querySelector<HTMLElement>(\`.\${P}-list-col\`);
        if (listCol) {
          listCol.style.minHeight = '';
          listCol.style.height = '';
        }
        const title = el.querySelector<HTMLElement>(\`.\${P}-list-col-title\`);
        if (title) {
          title.style.transform = '';
        }
      });
    };

    if (isVerticalLayout || !hasBaselineColumn) {
      clearBaselineStyles();
      return;
    }

    const applyBaselines = () => {
      const rows = Array.from(container.querySelectorAll<HTMLElement>('[data-list-row]'));
      const listColClassName = \`\${P}-list-col\`;
      const probeClassName = \`\${P}-baseline-probe\`;

      rows.forEach((rowEl) => {
        rowEl.querySelectorAll<HTMLElement>('[data-list-col]').forEach((el) => {
          el.style.transform = '';
          const listCol = el.querySelector<HTMLElement>(\`.\${listColClassName}\`);
          if (listCol) {
            listCol.style.minHeight = '';
            listCol.style.height = '';
          }
          const title = el.querySelector<HTMLElement>(\`.\${P}-list-col-title\`);
          if (title) {
            title.style.transform = '';
          }
        });
      });

      rows.forEach((rowEl) => {
        const cols = Array.from(rowEl.querySelectorAll<HTMLElement>('[data-list-col]'));
        syncRowListColHeights(rowEl, cols, listColClassName);
      });

      void container.offsetHeight;

      rows.forEach((rowEl) => {
        const cols = Array.from(rowEl.querySelectorAll<HTMLElement>('[data-list-col]'));
        const rowTop = rowEl.getBoundingClientRect().top;

        type ColInfo = {
          el: HTMLElement;
          titleEl: HTMLElement | null;
          letter: string;
          kind: string;
          anchor: string | null;
        };

        const byLetter = new Map<string, ColInfo>();
        const infos: ColInfo[] = cols.map((el) => {
          const titleEl = el.querySelector<HTMLElement>(\`.\${P}-list-col-title\`);
          const info: ColInfo = {
            el,
            titleEl,
            letter: el.getAttribute('data-col-letter') ?? '',
            kind: el.getAttribute('data-valign') ?? 'top',
            anchor: el.getAttribute('data-valign-anchor'),
          };
          byLetter.set(info.letter, info);
          return info;
        });

        const finalBaseline = new Map<string, number>();
        const resolve = (info: ColInfo, stack: Set<string>): number => {
          const cached = finalBaseline.get(info.letter);
          if (cached !== undefined) return cached;

          const anchor = info.anchor ? byLetter.get(info.anchor) : undefined;
          if (info.kind !== 'baseline' || !anchor || stack.has(info.letter)) {
            const baseline = measureColumnFirstLineBaselineOffset(
              info,
              rowTop,
              listColClassName,
              probeClassName,
            );
            finalBaseline.set(info.letter, baseline);
            return baseline;
          }

          stack.add(info.letter);
          const anchorBaseline = resolve(anchor, stack);
          stack.delete(info.letter);

          const followerNatural = measureColumnFirstLineBaselineOffset(
            info,
            rowTop,
            listColClassName,
            probeClassName,
          );
          const shift = anchorBaseline - followerNatural;
          applyBaselineTitleShift(info.titleEl, shift);

          const result = measureColumnFirstLineBaselineOffset(
            info,
            rowTop,
            listColClassName,
            probeClassName,
          );
          finalBaseline.set(info.letter, result);
          return result;
        };

        infos.forEach((info) => resolve(info, new Set<string>()));
      });
    };

    let rafId: number | null = null;
    const scheduleApplyBaselines = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        applyBaselines();
      });
    };

    applyBaselines();

    const observer = new ResizeObserver(() => scheduleApplyBaselines());
    observer.observe(container);

    let cancelled = false;
    if (typeof document !== 'undefined' && document.fonts?.ready) {
      document.fonts.ready.then(() => {
        if (!cancelled) scheduleApplyBaselines();
      });
    }

    return () => {
      cancelled = true;
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      observer.disconnect();
      clearBaselineStyles();
    };
  }, [
    hasBaselineColumn,
    isVerticalLayout,
    settings,
    content,
    designWidth,
    visibleRows,
    effectiveColumnWidths,
  ]);

  const scopedCss = useMemo(() => getCSS(P), [P]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: scopedCss }} />
      <div style={colorVars}>
        <div
          ref={containerRef}
          className={\`\${P}-wrapper \${wrapperStateClasses}\${dividerClassNames ? \` \${dividerClassNames}\` : ''}\${isVerticalLayout ? \` \${P}-type-b\` : ''}\`.trim()}
          style={{
            width: scalingValue(wrapperWidth ?? 0, isEditor),
            ...(!isVerticalLayout && showControls
              ? { [\`--\${P}-first-entry-handle-top\`]: firstEntryHandleTop }
              : {}),
          }}
          onMouseMove={showHoverImage ? handleWrapperMouseMove : undefined}
          onMouseLeave={showHoverImage ? handleWrapperMouseLeave : undefined}
        >
          <div style={{ width: '100%', position: 'relative' }}>
            {visibleRows.map((row, rowIdx) => {
              const hasLink = (row.link?.length ?? 0) > 0;
              const RowElement = hasLink && (!isEditor || isPreviewMode) ? 'a' : 'div';
              const rowStyle = getEntryDividerWidths(
                rowIdx,
                visibleRows.length,
                showDividerTop,
                showDividerBottom,
                showCutLabel,
                dividerWidth ?? 0,
                isEditor ?? false,
              );

              return (
              <RowElement
                key={row.id}
                ref={rowIdx === 0 ? (el: HTMLElement | null) => { firstEntryRef.current = el; } : undefined}
                className={\`\${P}-list-item\${hasLink || entryHoverShowOption === 'always' ? \` \${P}-list-item-has-link\` : ''}\`}
                {...(hasLink ? { href: row.link, target: '_blank' } : {})}
                style={rowStyle}
                onMouseEnter={(event) => {
                  if (revealHoverActive && (hasLink || entryHoverShowOption === 'always')) {
                    setRevealOpenDirectionFromMouseEnter(event, P);
                  }
                  if (showHoverImage) {
                    handleRowMouseEnter(row, event);
                  }
                }}
                onMouseLeave={(event) => {
                  if (revealHoverActive && (hasLink || entryHoverShowOption === 'always')) {
                    setRevealCloseDirectionFromMouseLeave(event, P);
                  }
                }}
              >
                {resolvedRowPaddingTop > 0 && (
                  <div
                    className={\`\${P}-row-padding-handle\`}
                    style={{ height: scaled(resolvedRowPaddingTop) }}
                  />
                )}
                <div
                  className={\`\${P}-list-cols-row\${isVerticalLayout ? '' : \` \${P}-list-cols-row-h\`}\${showControls && rowIdx === 0 && isVerticalLayout ? \` \${P}-list-cols-row-controls\` : ''}\`}
                  {...(isVerticalLayout ? {} : { 'data-list-row': '' })}
                  style={isVerticalLayout ? undefined : { minHeight: scaled(resolvedCellMinHeight) }}
                >
                  {listColumns.map((col, colIndex) => {
                    const isLastColumn = colIndex === listColumns.length - 1;
                    const effectivePadding = effectiveColumnPaddings[colIndex];
                    const columnPaddingBottom = col.paddingBottom;
                    const hasColumnText = hasListColumnText(row.cells[col.key]);
                    const showColumnPaddingBottom = isVerticalLayout
                      && hasColumnText
                      && columnPaddingBottom > 0;
                    const columnSizeStyle = isVerticalLayout
                      ? { minHeight: scaled(resolvedCellMinHeight) }
                      : { width: scaled(effectiveColumnWidths[colIndex]) };
                    const columnPaddingStyle = isVerticalLayout
                      ? {
                        paddingLeft: scaled(effectiveTextPaddingLR),
                        paddingRight: scaled(effectiveTextPaddingLR),
                      }
                      : {
                        paddingLeft: scaled(effectivePadding.paddingLeft),
                        paddingRight: scaled(effectivePadding.paddingRight),
                      };
                    const columnLetter = col.textPrefix.charAt(0);
                    const vAlign = isVerticalLayout
                      ? resolveBasicColumnVerticalAlign(
                        settings[\`\${col.textPrefix}VerticalAlign\` as ListColumnVerticalAlignKey],
                      )
                      : resolveColumnVerticalAlign(
                        settings[\`\${col.textPrefix}VerticalAlign\` as ListColumnVerticalAlignKey],
                        settings,
                        columnLetter,
                      );

                    const columnPaddingBottomOverlay = isVerticalLayout
                      && hasColumnText
                      && showControls
                      && rowIdx === 0;

                    return (
                      <div
                        key={col.key}
                        className={isVerticalLayout ? \`\${P}-list-col-wrap\` : undefined}
                        {...(isVerticalLayout
                          ? {}
                          : {
                            'data-list-col': '',
                            'data-col-letter': columnLetter,
                            'data-valign': vAlign.kind,
                            ...(vAlign.kind === 'baseline'
                              ? { 'data-valign-anchor': vAlign.anchorLetter }
                              : {}),
                          })}
                      >
                        <div
                          className={\`\${P}-list-col\${isLastColumn ? \` \${P}-list-col-last\` : ''}\`}
                          style={{
                            ...columnPaddingStyle,
                            ...columnSizeStyle,
                            ...(isVerticalLayout
                              ? { justifyContent: cutVerticalAlignKindToFlexAlign(vAlign.kind) }
                              : {}),
                          }}
                          data-test={col.width}
                        >
                          <span
                            className={getListColumnTitleClassName(
                              settings,
                              col.textPrefix,
                              \`\${P}-list-col-title\`,
                              \`\${P}-text-tight-leading\`,
                            )}
                            style={{
                              ...listColumnTextFieldsToCss(resolveListColumnTextFields(settings, col.textPrefix), isEditor),
                              ...getListColumnTitleVars(settings, col.textPrefix, P, isEditor),
                              ...(!isVerticalLayout ? vAlignToTitleStyle(vAlign.kind) : {}),
                            }}
                          >
                            {row.cells[col.key] ?? null}
                          </span>
                        </div>
                        {showColumnPaddingBottom && (
                          <div
                            className={\`\${P}-row-padding-handle\`}
                            style={{ height: scaled(columnPaddingBottom) }}
                          />
                        )}
                        {columnPaddingBottomOverlay && (
                          <PaddingControl
                            centerXHitTop={\`var(--\${P}-first-entry-handle-top, 50%)\`}
                            data-controls={col.paddingBottomKey}
                            data-controls-static-handle=""
                            data-controls-axis="y"
                            data-controls-variant="column-padding"
                            data-controls-min="0"
                            className={\`\${P}-padding-control-handle\`}
                            hitPlacement="center"
                            areaStyle={{
                              position: 'absolute',
                              bottom: 0,
                              left: 0,
                              width: '100%',
                              height: scaled(Math.max(columnPaddingBottom, ROW_PADDING_HANDLE_HEIGHT)),
                            }}
                          />
                        )}
                      </div>
                    );
                  })}
                  {showControls && rowIdx === 0 && isVerticalLayout && (
                    <>
                      <PaddingControl
                        centerXHitTop={\`var(--\${P}-first-entry-handle-top, 50%)\`}
                        data-controls="textPaddingLR"
                        data-controls-static-handle=""
                        data-controls-paired=""
                        data-controls-axis="x"
                        data-controls-variant="column-padding"
                        data-controls-min="0"
                        data-controls-max-fraction={String(textPaddingLRMaxFraction)}
                        className={\`\${P}-text-padding-lr-handle\`}
                        hitPlacement="center"
                        areaStyle={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: scaled(textPaddingLRHandleWidth),
                          height: '100%',
                        }}
                      />
                      <PaddingControl
                        centerXHitTop={\`var(--\${P}-first-entry-handle-top, 50%)\`}
                        data-controls="textPaddingLR"
                        data-controls-static-handle=""
                        data-controls-paired=""
                        data-controls-axis="x"
                        data-controls-variant="column-padding"
                        data-controls-reverse=""
                        data-controls-min="0"
                        data-controls-max-fraction={String(textPaddingLRMaxFraction)}
                        className={\`\${P}-text-padding-lr-handle\`}
                        hitPlacement="center"
                        areaStyle={{
                          position: 'absolute',
                          top: 0,
                          left: scaled(Math.max(textPaddingLRHandleWidth, resolvedContentWidth - textPaddingLRHandleWidth)),
                          width: scaled(textPaddingLRHandleWidth),
                          height: '100%',
                        }}
                      />
                    </>
                  )}
                </div>
                {!isVerticalLayout && resolvedRowPaddingBottom > 0 && (
                  <div
                    className={\`\${P}-row-padding-handle\`}
                    style={{ height: scaled(resolvedRowPaddingBottom) }}
                  />
                )}
                {showControls && rowIdx === 0 && !isVerticalLayout && (
                  <PaddingControl
                    centerXHitTop={\`var(--\${P}-first-entry-handle-top, 50%)\`}
                    data-controls="rowPaddingBottom"
                    data-controls-static-handle=""
                    data-controls-handle-left="20"
                    data-controls-axis="y"
                    data-controls-variant="row-padding"
                    data-controls-min="0"
                    className={\`\${P}-padding-control-handle\`}
                    hitPlacement="left-y"
                    areaStyle={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: scaled(rowPaddingBottomControlHeight),
                    }}
                  />
                )}
              </RowElement>
            );
            })}
          {showControls && (
            <div key="row-padding-handles" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
              <PaddingControl
                centerXHitTop={\`var(--\${P}-first-entry-handle-top, 50%)\`}
                data-controls={rowPaddingTopControlKey}
                data-controls-static-handle=""
                {...(!isVerticalLayout ? { 'data-controls-handle-left': '20' } : {})}
                data-controls-axis="y"
                data-controls-variant="row-padding"
                data-controls-min="0"
                className={\`\${P}-padding-control-handle\`}
                hitPlacement={isVerticalLayout ? 'center' : 'left-y'}
                areaStyle={{
                  position: 'absolute',
                  top: firstEntryBorderTopWidth,
                  left: 0,
                  width: '100%',
                  height: scaled(Math.max(resolvedRowPaddingTop, ROW_PADDING_HANDLE_HEIGHT)),
                }}
              />
            </div>
          )}
          {showControls && !isVerticalLayout && firstColumn && lastColumn && (
            <div key="column-edge-padding-handles" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
              <PaddingControl
                centerXHitTop={\`var(--\${P}-first-entry-handle-top, 50%)\`}
                data-controls={firstColumn.paddingLeftKey}
                data-controls-static-handle=""
                data-controls-axis="x"
                data-controls-variant="column-padding"
                data-controls-min="0"
                data-controls-max-fraction={String(
                  effectiveColumnWidths[0] - (firstColumnEffectivePadding?.paddingRight ?? 0),
                )}
                className={\`\${P}-padding-control-handle\`}
                hitPlacement="center-x"
                areaStyle={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: scaled(firstColumnPaddingLeftWidth),
                  height: '100%',
                }}
              />
              <PaddingControl
                centerXHitTop={\`var(--\${P}-first-entry-handle-top, 50%)\`}
                data-controls={lastColumn.paddingRightKey}
                data-controls-static-handle=""
                data-controls-axis="x"
                data-controls-variant="column-padding"
                data-controls-reverse=""
                data-controls-min="0"
                data-controls-max-fraction={String(
                  effectiveColumnWidths[listColumns.length - 1]
                    - (lastColumnEffectivePadding?.paddingLeft ?? 0),
                )}
                className={\`\${P}-padding-control-handle\`}
                hitPlacement="center-x"
                areaStyle={{
                  position: 'absolute',
                  top: 0,
                  left: scaled(columnsRightEdge - lastColumnPaddingRightWidth),
                  width: scaled(lastColumnPaddingRightWidth),
                  height: '100%',
                }}
              />
            </div>
          )}
          {showControls && !isVerticalLayout && listColumns.slice(0, -1).map((col, colIndex) => {
            const nextCol = listColumns[colIndex + 1];
            const boundaryOffset = resolvedColumnWidths.slice(0, colIndex + 1).reduce((sum, width) => sum + width, 0);
            const colEffectivePadding = effectiveColumnPaddings[colIndex];
            const nextColEffectivePadding = effectiveColumnPaddings[colIndex + 1];
            const paddingRightWidth = Math.max(
              colEffectivePadding.paddingRight,
              COL_PADDING_HANDLE_WIDTH,
            );
            const paddingLeftWidth = Math.max(
              nextColEffectivePadding.paddingLeft,
              COL_PADDING_HANDLE_WIDTH,
            );

            return (
              <div key={\`\${col.paddingRightKey}-padding\`} style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
                <PaddingControl
                  centerXHitTop={\`var(--\${P}-first-entry-handle-top, 50%)\`}
                  data-controls={col.paddingRightKey}
                  data-controls-static-handle=""
                  data-controls-axis="x"
                  data-controls-variant="column-padding"
                  data-controls-reverse=""
                  data-controls-min="0"
                  data-controls-max-fraction={String(
                    effectiveColumnWidths[colIndex] - colEffectivePadding.paddingLeft,
                  )}
                  className={\`\${P}-padding-control-handle\`}
                  hitPlacement="center-x"
                  areaStyle={{
                    position: 'absolute',
                    top: 0,
                    left: scaled(boundaryOffset - paddingRightWidth),
                    width: scaled(paddingRightWidth),
                    height: '100%',
                  }}
                />
                <PaddingControl
                  centerXHitTop={\`var(--\${P}-first-entry-handle-top, 50%)\`}
                  data-controls={nextCol.paddingLeftKey}
                  data-controls-static-handle=""
                  data-controls-axis="x"
                  data-controls-variant="column-padding"
                  data-controls-min="0"
                  data-controls-max-fraction={String(
                    effectiveColumnWidths[colIndex + 1] - nextColEffectivePadding.paddingRight,
                  )}
                  className={\`\${P}-padding-control-handle\`}
                  hitPlacement="center-x"
                  areaStyle={{
                    position: 'absolute',
                    top: 0,
                    left: scaled(boundaryOffset),
                    width: scaled(paddingLeftWidth),
                    height: '100%',
                  }}
                />
              </div>
            );
          })}
          {showControls && !isVerticalLayout && listColumns.slice(0, -1).map((col, colIndex) => {
            const maxColumnWidth = getColumnMaxWidth(
              colIndex,
              resolvedColumnWidths,
              storedColumnWidths,
              resolvedContentWidth,
            );
            const boundaryOffset = resolvedColumnWidths.slice(0, colIndex + 1).reduce((sum, width) => sum + width, 0);
            const columnWidthHandleOffset = boundaryOffset - COL_RESIZE_HANDLE_WIDTH / 2;

            return (
              <div key={\`\${col.widthKey}-junction\`} style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
                <div
                  data-controls={col.widthKey}
                  data-controls-static-handle=""
                  data-controls-axis="x"
                  data-controls-min={String(MIN_COLUMN_WIDTH_PX)}
                  data-controls-max-fraction={String(maxColumnWidth)}
                  data-controls-variant="column-width"
                  className={\`\${P}-col-resize-handle\`}
                  style={{
                    position: 'absolute',
                    top: '0px',
                    left: scaled(columnWidthHandleOffset),
                    width: scaled(COL_RESIZE_HANDLE_WIDTH),
                    height: 'calc(100%)',
                    pointerEvents: 'auto',
                  }}
                />
              </div>
            );
          })}
          </div>
          {showCutLabel && (() => {
            const cutLabelFields = resolveListColumnTextFields(settings, CUT_LABEL_TEXT_PREFIX);
            const cutLabelVerticalAlignKind = resolveCutLabelVerticalAlignKind(settings.cutLabelVerticalAlign);
            const cutLabelUsesFullWidth = cutLabelFields.textTextAlign === 'justify' || isVerticalLayout;

            return (
            <button
              type="button"
              className={\`\${P}-cut-item\`}
              style={{
                minHeight: scaled(cutCellMinHeight ?? 0),
                cursor: cutItemClickable ? 'pointer' : 'default',
                ...getCutItemDividerWidths(
                  showDividerBottom,
                  dividerWidth ?? 0,
                  isEditor ?? false,
                ),
              }}
              onClick={cutItemClickable ? handleShowMore : undefined}
              onMouseEnter={revealHoverActive || showHoverImage ? handleCutItemMouseEnter : undefined}
              onMouseLeave={revealHoverActive ? handleCutItemMouseLeave : undefined}
            >
              <div
                className={\`\${P}-list-cols-row\`}
                style={{
                  ...(isVerticalLayout
                    ? {
                      paddingLeft: scaled(effectiveTextPaddingLR),
                      paddingRight: scaled(effectiveTextPaddingLR),
                    }
                    : {}),
                  justifyContent: textAlignToJustifyContent(cutLabelFields.textTextAlign),
                  alignItems: cutVerticalAlignKindToFlexAlign(cutLabelVerticalAlignKind),
                }}
              >
                <span
                  className={getListColumnTitleClassName(
                    settings,
                    CUT_LABEL_TEXT_PREFIX,
                    \`\${P}-cut-label\`,
                    \`\${P}-text-tight-leading\`,
                  )}
                  style={{
                    ...listColumnTextFieldsToCss(cutLabelFields, isEditor),
                    ...getListColumnTitleVars(settings, CUT_LABEL_TEXT_PREFIX, P, isEditor),
                    ...(cutLabelUsesFullWidth ? { width: '100%' } : {}),
                  }}
                >
                  {cutLabel}
                </span>
              </div>
            </button>
            );
          })()}
          {showHoverImage && hoverImage && (() => {
            const hoverSize = sv(hoverImage.widthPx);
            const hoverMediaStyle: React.CSSProperties = {
              width: hoverSize,
              height: 'auto',
              maxHeight: hoverSize,
              objectFit: 'contain',
              left: hoverImage.x,
              top: hoverImage.y,
              position: 'absolute',
            };

            return (
              <ListHoverMedia
                key={\`\${hoverImage.rowId}-\${hoverImage.url}\`}
                media={hoverImage}
                className={hoverImage.isVideo ? \`\${P}-hover-video\` : \`\${P}-hover-image\`}
                style={hoverMediaStyle}
              />
            );
          })()}
        </div>
      </div>
    </>
  );
}
`,oW=["A","B","C","D","E"],oH=[...on,"Baseline A","Baseline B","Baseline C","Baseline D","Baseline E"],o_={fontSettings:{type:"object",display:{type:"font-settings-weight"},properties:{fontWeight:{type:"number"},fontStyle:{type:"string"}}},fontSize:{type:"number",display:{type:"font-size"}},lineHeight:{type:"number",display:{type:"line-height-input"}},letterSpacing:{type:"number",display:{type:"letter-spacing-input"}},wordSpacing:{type:"number",display:{type:"word-spacing-input"}},textAlign:{type:"string",enum:["left","center","right","justify"],display:{type:"vertical-text-aligh-options"}},textAppearance:{type:"object",display:{type:"text-appearance"},properties:{textTransform:{type:"string",enum:["none","uppercase","lowercase","capitalize"]},textDecoration:{type:"string",enum:["none","underline"]},fontVariant:{type:"string",enum:["normal","small-caps"]}}}};function oN(e){return{type:"number",scope:"layout",title:e,min:0,max:100,display:{type:"range-control"}}}function oj(e={}){let{typeBDefaults:t,...i}=e,n={wrapperWidth:1,columnsOrder:[...n6]};for(let e of oW)n[`${e}ColumnWidth`]="A"===e?.0798:.32,n[`${e}ColumnPaddingLeft`]=0,n[`${e}ColumnPaddingRight`]=0,n[`${e}ColumnPaddingBottom`]=0;let o="b"===i.type&&t?t:{};return{...n,...o,...i}}let oz=oe.reduce((e,t)=>({...e,...function(e){let t={};if(e===n8)t[`${e}VerticalAlign`]={type:"string",scope:"layout",title:"",display:{type:"drop-down",label:"Vertical alignment",enum:[...on]},enum:[...on]};else{let i=e.charAt(0);t[`${e}VerticalAlign`]={type:"string",scope:"layout",title:"",display:{type:"drop-down",label:"Vertical alignment",enum:[...oH],filterBaselineByTopAnchor:!0,columnLetter:i},enum:[...oH]}}return t[ou(e,"textFontFamily")]={type:"string",scope:"layout",title:"",display:{type:"font-family-select",hideLabel:!0}},t[ou(e,"textFontSettings")]={...o_.fontSettings,scope:"layout",title:"",display:{type:"font-settings-weight",hideLabel:!0}},t[ou(e,"textFontSize")]={...o_.fontSize,scope:"layout",title:"",display:{type:"font-size"}},t[ou(e,"textLineHeight")]={...o_.lineHeight,scope:"layout",title:"",display:{type:"line-height-input"}},t[ou(e,"textLetterSpacing")]={...o_.letterSpacing,scope:"layout",title:"",display:{type:"letter-spacing-input"}},t[ou(e,"textWordSpacing")]={...o_.wordSpacing,scope:"layout",title:"",display:{type:"word-spacing-input"}},t[ou(e,"textTextAlign")]={...o_.textAlign,scope:"layout",title:"",display:{type:"vertical-text-aligh-options"}},t[ou(e,"textTextAppearance")]={...o_.textAppearance,scope:"layout",title:"",display:{type:"text-appearance"}},t}(t)}),{}),oB=new Set(["textFontFamily","textFontSettings"]);function oO(e={},t){return oe.reduce((i,n)=>({...i,...function(e,t,i){let n=e=>void 0===i||("common"===i?oB.has(e):!oB.has(e)),o={};return n("verticalAlign")&&void 0!==t.verticalAlign&&(o[`${e}VerticalAlign`]=oo(t.verticalAlign)),n("textFontFamily")&&void 0!==t.textFontFamily&&(o[ou(e,"textFontFamily")]=t.textFontFamily),n("textFontSettings")&&void 0!==t.textFontSettings&&(o[ou(e,"textFontSettings")]=t.textFontSettings),n("textFontSize")&&void 0!==t.textFontSize&&(o[ou(e,"textFontSize")]=t.textFontSize),n("textLineHeight")&&void 0!==t.textLineHeight&&(o[ou(e,"textLineHeight")]=t.textLineHeight),n("textLetterSpacing")&&void 0!==t.textLetterSpacing&&(o[ou(e,"textLetterSpacing")]=t.textLetterSpacing),n("textWordSpacing")&&void 0!==t.textWordSpacing&&(o[ou(e,"textWordSpacing")]=t.textWordSpacing),n("textTextAlign")&&void 0!==t.textTextAlign&&(o[ou(e,"textTextAlign")]=t.textTextAlign),n("textTextAppearance")&&void 0!==t.textTextAppearance&&(o[ou(e,"textTextAppearance")]=t.textTextAppearance),o}(n,function(e,t={}){var i;return{verticalAlign:e===n8?"Center":"Top",textFontFamily:"Arial",textFontSettings:{fontWeight:400,fontStyle:"normal"},textLetterSpacing:0,textWordSpacing:0,textTextAlign:e===n8?"center":"left",textTextAppearance:{textTransform:"none",textDecoration:"none",fontVariant:"normal"},...t.default,...null==(i=t.byPrefix)?void 0:i[e]}}(n,e),t)}),{})}let oD=oO(),oV={type:"tab",id:"listColumnTextStyle",tabs:Object.fromEntries(oe.map(e=>[op[e],[ou(e,"textFontFamily"),ou(e,"textFontSettings"),{type:"row",items:[ou(e,"textFontSize"),ou(e,"textLineHeight"),ou(e,"textLetterSpacing"),ou(e,"textWordSpacing")]},ou(e,"textTextAlign"),ou(e,"textTextAppearance"),`${e}VerticalAlign`]]))};function oq(e){return[ou(e,"textFontFamily"),ou(e,"textFontSettings"),ou(e,"textFontSize"),ou(e,"textLineHeight"),ou(e,"textLetterSpacing"),ou(e,"textWordSpacing"),ou(e,"textTextAlign"),ou(e,"textTextAppearance"),`${e}VerticalAlign`]}oq(n8);let oG=[...oW.flatMap(e=>[`${e}ColumnWidth`,`${e}ColumnPaddingLeft`,`${e}ColumnPaddingRight`]),"rowPaddingTop","rowPaddingBottom"],oK=[{objectFit:"contain",url:"https://cdn.cntrl.site/component-assets/grid(1).webp"},{objectFit:"contain",url:"https://cdn.cntrl.site/component-assets/grid(2).webp"},{objectFit:"contain",url:"https://cdn.cntrl.site/component-assets/grid(3).webp"},{objectFit:"contain",url:"https://cdn.cntrl.site/component-assets/grid(4).webp"},{objectFit:"contain",url:"https://cdn.cntrl.site/component-assets/grid(5).webp"},{objectFit:"contain",url:"https://cdn.cntrl.site/component-assets/grid(8).webp"},{objectFit:"contain",url:"https://cdn.cntrl.site/component-assets/grid(9).webp"}],oU=[{AColumn:"01",BColumnWidth:"Ethan Parker",CColumnWidth:"Midnight Atlas",DColumnWidth:"Portland, OR",EColumnWidth:"On Display",image:oK[0],link:""},{AColumn:"02",BColumnWidth:"Madison Reed",CColumnWidth:"Echoes in Vermilion",DColumnWidth:"Savannah, GA",EColumnWidth:"Scheduled",image:oK[1],link:""},{AColumn:"03",BColumnWidth:"Noah Bennett",CColumnWidth:"Paper and scissors",DColumnWidth:"Madison, WI",EColumnWidth:"On Display",image:oK[2],link:""},{AColumn:"04",BColumnWidth:"Olivia Carter",CColumnWidth:"The Quiet Frequency",DColumnWidth:"Boise, ID",EColumnWidth:"On Display",image:oK[3],link:""},{AColumn:"05",BColumnWidth:"Mason Brooks",CColumnWidth:"Sights of Tomorrow",DColumnWidth:"Tampa, FL",EColumnWidth:"Postponed",image:oK[4],link:""},{AColumn:"06",BColumnWidth:"Sophia Mitchell",CColumnWidth:"Velvet Horizons",DColumnWidth:"Albuquerque, NM",EColumnWidth:"Scheduled",image:oK[5],link:""},{AColumn:"07",BColumnWidth:"Jackson Turner",CColumnWidth:"Ink & Aurora",DColumnWidth:"Pittsburgh, PA",EColumnWidth:"On Display",image:oK[6],link:""}],oX=[...oW.flatMap(e=>[`${e}ColumnWidth`,`${e}ColumnPaddingLeft`,`${e}ColumnPaddingRight`,`${e}ColumnPaddingBottom`]),"columnsOrder"],oY={type:"object",version:1,content:{type:"array",settings:{addItemWithoutImage:!0,allowsVideo:!0},display:{type:"array",ref:{columnsOrder:"settings.properties.columnsOrder",columnsCount:"settings.properties.columns"}},items:{type:"object",properties:{...Object.fromEntries(oW.map((e,t)=>[n6[t],{type:"string",label:`${e} column`,placeholder:"Add Title...",display:{type:"text-input"}}])),image:{type:"object",label:"Image",display:{isObjectFitEditable:!1,defaultObjectFit:"contain",type:"media-input"},properties:{url:{type:"string"},name:{type:"string"},type:{type:"string",enum:["image","video"]},objectFit:{type:"string",enum:["cover","contain"]}},required:["url","name"]},link:{type:"string",label:"Link",placeholder:"Add link...",display:{type:"text-input"}}},required:["image"]},default:oU},settings:{sizing:"auto auto",properties:{type:{type:"string",scope:"layout",title:"",display:{type:"radio-group"},enum:["a","b"]},columns:{type:"number",scope:"layout",title:"Columns",display:{type:"count-number"},min:1,max:5},wrapperWidth:{type:"number",scope:"layout",title:"Width",display:{type:"numeric-input"},min:0,max:9999},textPaddingLR:{type:"number",scope:"layout",title:"Text Padding LR",min:0,max:9999,display:{type:"range-control"}},entriesCount:{type:"number",scope:"layout",title:"Amount",display:{type:"toggle-numeric-input",enum:["auto","fixed"]},min:1},cellMinHeight:{type:"number",scope:"layout",title:"Min height",display:{type:"numeric-input"},min:0,max:9999},imageOnHover:{type:"boolean",scope:"common",title:"Image On Hover",display:{type:"toggle-cycle",enum:["on","off"]}},imageSize:{type:"object",scope:"layout",title:"Image size",display:{type:"min-max-input"},min:1,max:1440,properties:{min:{type:"number"},max:{type:"number"}}},dividerWidth:{type:"number",scope:"layout",title:"Divider width",display:{type:"numeric-input"},min:0,max:9999},showVisibility:{type:"array",scope:"common",title:"Show",display:{type:"double-toggle",enum:["top","bottom"]},items:{type:"boolean"},default:[!0,!1]},cut:{type:"number",scope:"layout",title:"Display",display:{type:"toggle-numeric-input",enum:["off","on"]},min:1},entryHoverEffect:{type:"string",scope:"common",title:"Effect",display:{type:"toggle-cycle",enum:["none","default","blinds","reveal"]}},entryHoverShowOption:{type:"string",scope:"common",title:"Show",display:{type:"toggle-cycle",enum:["always","link only"]}},cutCellMinHeight:{type:"number",scope:"layout",title:"Cell min height",display:{type:"numeric-input"},min:0,max:9999},cutLabel:{type:"string",scope:"common",title:"Cut Label",display:{type:"label-input"}},showCut:{type:"number",scope:"layout",title:"Show",display:{type:"toggle-numeric-input",enum:["all","custom"]},min:1},rowPaddingTop:{type:"number",scope:"layout",title:"Row Padding Top",min:0,max:100,display:{type:"range-control"}},rowPaddingBottom:{type:"number",scope:"layout",title:"Row Padding Bottom",min:0,max:100,display:{type:"range-control"}},rowPaddingTopB:{type:"number",scope:"layout",title:"Row Padding Top",min:0,max:100,display:{type:"range-control"}},...function(){let e={};for(let t of oW)e[`${t}ColumnWidth`]=oN(`${t} column width`),e[`${t}ColumnPaddingLeft`]=oN(`${t} column padding left`),e[`${t}ColumnPaddingRight`]=oN(`${t} column padding right`),e[`${t}ColumnPaddingBottom`]=oN(`${t} column padding bottom`);return e}(),columnsOrder:{type:"array",scope:"layout",title:"Columns Order",display:{type:"reorder-input"},items:{type:"string"}},textColor:{type:"string",scope:"common",title:"Text Default",display:{type:"palette-color-picker"}},textHoverColor:{type:"string",scope:"common",title:"Text Hover",display:{type:"palette-color-picker"}},...oz,backgroundColor:{type:"string",scope:"common",title:"BG Default",display:{type:"palette-color-picker"}},dividerColor:{type:"string",scope:"common",title:"Divider Default",display:{type:"palette-color-picker"}},backgroundHoverColor:{type:"string",scope:"common",title:"BG Hover",display:{type:"palette-color-picker"}},dividerHoverColor:{type:"string",scope:"common",title:"Divider Hover",display:{type:"palette-color-picker"}}},defaults:{imageOnHover:"on",entryHoverEffect:"default",entryHoverShowOption:"always",cutLabel:"SEE ALL",showVisibility:[!0,!0],textColor:"#000000",textHoverColor:"#FFFFFF",...oD,...oO({},"common"),backgroundColor:"#FFFFFF00",dividerColor:"#373737",backgroundHoverColor:"#000000",dividerHoverColor:"#000000"},layoutDefaults:{m:oj({columns:3,type:"b",textPaddingLR:.0373,entriesCount:0,cellMinHeight:.02,imageSize:{min:80,max:320},dividerWidth:.004,cut:0,showCut:0,cutCellMinHeight:.02,rowPaddingTop:.01,rowPaddingBottom:.01,typeBDefaults:{rowPaddingTopB:.0461,AColumnPaddingBottom:.041,BColumnPaddingBottom:.041,CColumnPaddingBottom:.0615,DColumnPaddingBottom:0,EColumnPaddingBottom:0},textStroke:.003,textCorners:.192,textPadding:{top:.0373,right:.0373,bottom:.0373,left:.0373},...oO({default:{textFontSize:.0906,textLineHeight:.0426,textTextAlign:"left"},byPrefix:{cutLabel:{textTextAlign:"center"}}},"layout")}),d:oj({columns:4,type:"a",textPaddingLR:.01,entriesCount:0,cellMinHeight:.0555,imageSize:{min:200,max:200},dividerWidth:.002083,cut:0,showCut:0,cutCellMinHeight:.0555,rowPaddingTop:0,rowPaddingBottom:0,rowPaddingTopB:.01,textStroke:.001,textCorners:.05,textPadding:{top:.01,right:.01,bottom:.01,left:.01},...oO({default:{textFontSize:.0333,textLineHeight:.0333,textLetterSpacing:-9e-4,textTextAlign:"left",verticalAlign:"center"},byPrefix:{cutLabel:{textTextAlign:"center"}}},"layout")})},displayRules:[...function(){let e=[];return n7.forEach((t,i)=>{let n=n6[i],o=oq(t);for(let t=1;t<n6.length;t+=1){let i=[{name:"columns",value:t},...Array.from({length:t},(e,t)=>({name:`columnsOrder.${t}`,value:n,isNotEqual:!0}))];o.forEach(t=>{e.push({if:i,then:{name:`properties.${t}.display.visible`,value:!1}})})}}),e}(),{if:{name:"type",value:"a"},then:{name:"properties.textPaddingLR.display.visible",value:!1}},...oG.map(e=>({if:{name:"type",value:"b"},then:{name:`properties.${e}.display.visible`,value:!1}})),{if:{name:"type",value:"a"},then:{name:"properties.rowPaddingTopB.display.visible",value:!1}},...oW.map(e=>({if:{name:"type",value:"a"},then:{name:`properties.${e}ColumnPaddingBottom.display.visible`,value:!1}}))],layout:["__componentName__","name","type","columns","wrapperWidth","textPaddingLR","entriesCount","cellMinHeight","imageOnHover","imageSize","dividerWidth","showVisibility","cut","showCut","cutCellMinHeight","entryHoverEffect","entryHoverShowOption","cutLabel","rowPaddingTop","rowPaddingBottom","rowPaddingTopB",...oX]},panels:[{id:"general",icon:"settings",title:"General",tooltip:"General Settings",layout:[{type:"row",items:["__componentName__","name"]},"type",{type:"row",title:"",items:["columns","wrapperWidth"]},{type:"row",title:"Entries",items:["entriesCount","cellMinHeight"]},{type:"row",title:"",items:["imageOnHover","imageSize"]},{type:"row",title:"Entry Hover",items:["entryHoverEffect","entryHoverShowOption"]},{type:"row",title:"Divider Settings",items:["dividerWidth","showVisibility"]}]},{id:"columnsOrder",icon:"layers",title:"Columns Order",tooltip:"Columns order",layout:["__componentName__","columnsOrder"]},{id:"cutSettings",icon:"cut",title:"Cut settings",tooltip:"Cut settings",layout:["__componentName__",{type:"row",title:"",items:["cut"]},{type:"row",title:"Cut Settings",items:["cutLabel","cutCellMinHeight"]},{type:"row",title:"",items:["showCut"]}]},{id:"typeStyle",icon:"text-icon",title:"Type Style",tooltip:"Typography",layout:["__componentName__",oV]}],paletteBookmark:{items:["textColor","backgroundColor","dividerColor","textHoverColor","backgroundHoverColor","dividerHoverColor"],panelIds:["general","typeStyle"],stateItems:{default:["textColor","backgroundColor","dividerColor","textHoverColor","backgroundHoverColor","dividerHoverColor"]}}},oJ={element:function({settings:e,content:t,isEditor:i,isPreviewMode:r,isEditMode:l,activeEvent:s,layoutId:c,onUpdateSettings:d}){let{prefix:u}=a.useScopedStyles(),p=!!l,{columns:m,type:g,wrapperWidth:h,entriesCount:f,cellMinHeight:y,dividerWidth:v,showVisibility:x,cut:b,showCut:w,cutCellMinHeight:$,cutLabel:S,imageSize:C,imageOnHover:P,entryHoverEffect:L,entryHoverShowOption:T,rowPaddingTop:M,rowPaddingBottom:E,rowPaddingTopB:I,columnsOrder:k,textPaddingLR:R,textColor:F,backgroundColor:A,dividerColor:W,textHoverColor:H,backgroundHoverColor:_,dividerHoverColor:N}=e,[j,z]=o.useState(void 0),[B,O]=o.useState(null),D="on"===P&&(!i||r),V=(b??0)>0,q="b"===g,G=o.useRef(null),K=o.useRef(null),[U,X]=o.useState(null),[Y,J]=o.useState(1440),Z=oC(Y),Q=Math.min(R??0,Math.max(0,((h??0)-Z)/2)),ee=Math.max(Q,.004),et=((h??0)+Z)/2;o.useLayoutEffect(()=>{if(!i)return void J(1440);let e=()=>{J(function(e){let t=e??null;for(;t;){let e=t.style.getPropertyValue("--cntrl-article-width").trim();if(e){let t=parseFloat(e);if(Number.isFinite(t)&&t>0)return t}let i=getComputedStyle(t).getPropertyValue("--cntrl-article-width").trim();if(i){let e=parseFloat(i);if(Number.isFinite(e)&&e>0)return e}t=t.parentElement}return 1440}(G.current))};e();let t=G.current;if(!t)return;let n=new ResizeObserver(e);n.observe(t);let o=t;for(;o&&!o.style.getPropertyValue("--cntrl-article-width");)o=o.parentElement;return o&&n.observe(o),()=>n.disconnect()},[i,c]),o.useEffect(()=>{z(void 0)},[b,w,t,f]),o.useEffect(()=>{i&&!r&&z(void 0)},[i,r]);let ei=a.buildColorVars(u,{textColor:F,backgroundColor:A,dividerColor:W,textHoverColor:H,backgroundHoverColor:_,dividerHoverColor:N},ow,o$),en=s&&"default"!==s?`${u}-state-${s}`:"",eo=`${!i||r?"default"===L?`${u}-entry-hover-default`:"blinds"===L?`${u}-entry-hover-blinds`:"reveal"===L?`${u}-entry-hover-reveal`:"":""} ${en}`.trim(),er="reveal"===L&&(!i||r),ea=(null==x?void 0:x[0])??!1,el=(null==x?void 0:x[1])??!1,es=o.useRef(e),ec=o.useRef(c);o.useEffect(()=>{if(!d||!i||ec.current!==c){es.current=e,ec.current=c;return}let t=es.current;if(t===e)return;if("number"==typeof t.columns&&"number"==typeof e.columns&&t.columns!==e.columns){es.current=e;return}let n=function(e,t,i){let n=function(e){let t={},i=!1;for(let n of ot){let o=oi(n),r=e[o];if("b"===e.type){let e=String(r??"Top").trim();"Top"!==e&&"Center"!==e&&"Bottom"!==e&&(t[o]="Top",i=!0);continue}or(r,n,e)||(t[o]="Top",i=!0)}return i?t:null}(e);n&&(e={...e,...n});let o=oC(null==i?void 0:i.designWidth),r=e.columns,a=t.columns,l=oL(e),s=oL(t),c="b"===e.type||void 0===e.type&&"b"===t.type,d="number"==typeof r?r:"number"==typeof a?a:n6.length,u=e=>{if(c)return e;let i=oT({...t,...e}),n=oE(d,oL(e),i),o=function(e,t,i){let n={};for(let o=0;o<e;o+=1){let e=ov[o],r=ox[o],a="number"==typeof i[e]?i[e]:0,l="number"==typeof i[r]?i[r]:0,s=oM(t[o]??0,a,l);s.paddingLeft!==a&&(n[e]=s.paddingLeft),s.paddingRight!==l&&(n[r]=s.paddingRight)}return n}(d,n,{...t,...e});return 0===Object.keys(o).length?e:{...e,...o}};if("number"==typeof r&&r!==a)return e;let p=ok(e),m=ok(t);if(!(p.length===m.length&&p.every((e,t)=>e===m[t])))return u({...e,...function(e,t,i,n){let o=Math.min(n,e.length,oy.length),r={};for(let n=0;n<o;n+=1){let o=e[n],a=t.indexOf(o);if(-1===a)continue;let l=oy[a],s=ov[a],c=ox[a],d=ob[a],u=oy[n],p=ov[n],m=ox[n],g=ob[n],h=i[l],f=i[s],y=i[c],v=i[d];"number"==typeof h&&(r[u]=h),"number"==typeof f&&(r[p]=f),"number"==typeof y&&(r[m]=y),"number"==typeof v&&(r[g]=v)}return r}(p,m,t,d)});if(l<s&&"number"==typeof d&&!c){let i=oT({...t,...e});return u({...e,...function(e,t,i){if(e<=1)return{};let n=oI(e,t,i),o={};for(let t=0;t<e-1;t+=1){let e=oy[t];n[t]!==i[e]&&(o[e]=n[t])}return o}(d,l,i)})}if(c){let t="number"==typeof e.textPaddingLR?e.textPaddingLR:0,i=Math.max(0,(l-o)/2);return t>i?{...e,textPaddingLR:i}:e}let g=oT({...t,...e}),h=oE(d,s,oT(t)),f=oE(d,l,g).some((e,t)=>e<(h[t]??e)),y=oy.some(i=>{let n=e[i],o=t[i];return"number"==typeof n&&"number"==typeof o&&n!==o});return f||y?u(e):e}(e,t,{designWidth:Y});es.current=e,oR(e,n)&&d(n)},[e,d,i,c,Y]);let ed=o.useMemo(()=>Object.fromEntries(oy.map(t=>[t,"number"==typeof e[t]?e[t]:oP[t]])),[e.AColumnWidth,e.BColumnWidth,e.CColumnWidth,e.DColumnWidth,e.EColumnWidth]),eu=o.useMemo(()=>oF(e,ov),[e.AColumnPaddingLeft,e.BColumnPaddingLeft,e.CColumnPaddingLeft,e.DColumnPaddingLeft,e.EColumnPaddingLeft]),ep=o.useMemo(()=>oF(e,ox),[e.AColumnPaddingRight,e.BColumnPaddingRight,e.CColumnPaddingRight,e.DColumnPaddingRight,e.EColumnPaddingRight]),em=o.useMemo(()=>oF(e,ob),[e.AColumnPaddingBottom,e.BColumnPaddingBottom,e.CColumnPaddingBottom,e.DColumnPaddingBottom,e.EColumnPaddingBottom]),eg=o.useMemo(()=>Array.isArray(k)&&k.length>0?k:[...n6],[k]),eh=o.useMemo(()=>eg.slice(0,m).map((e,t)=>{let i=ov[t],n=ox[t],o=ob[t];return{key:e,textPrefix:od[e],widthKey:oy[t],width:ed[oy[t]],paddingLeftKey:i,paddingRightKey:n,paddingBottomKey:o,paddingLeft:eu[i],paddingRight:ep[n],paddingBottom:em[o]}}),[eg,m,ed,eu,ep,em]),ef=oL(e),ey=o.useMemo(()=>oy.slice(0,m).map(e=>ed[e]),[m,ed]),ev=o.useMemo(()=>oI(m,ef,ed),[m,ef,ed]),ex=o.useMemo(()=>oE(m,ef,ed),[m,ef,ed]),eb=o.useMemo(()=>eh.map((e,t)=>oM(ex[t]??0,e.paddingLeft,e.paddingRight)),[eh,ex]),ew=o.useMemo(()=>{let e=0===f?1/0:f;return(t??[]).slice(0,e).map((e,t)=>({id:t,cells:Object.fromEntries(n6.map(t=>[t,e[t]??""])),image:e.image,link:e.link}))},[t,f]),e$=V?j??b:ew.length,eS=o.useMemo(()=>V?ew.slice(0,e$):ew,[ew,V,e$]),eC=V&&e$<ew.length,eP=eS.length>1||eC,eL=[ea?`${u}-divider-top`:"",el||eP?`${u}-divider-bottom`:""].filter(Boolean).join(" "),eT=!i||r,eM=()=>{if(!eT)return;let e=j??b;if(!w)return void z(ew.length);z(Math.min(e+w,ew.length))},eE=e=>a.scalingValue(e,i??!1),eI=q?I??0:M??0,ek=E??0,eR=y??0,eF=eI+eR/2,eA=Math.max(ek,.004),eW=n9(0,eS.length,ea,el,eC,v??0,i??!1).borderTopWidth,eH=null!=U?`${U}px`:`calc(${eW} + ${eE(eF)})`,e_=q?"rowPaddingTopB":"rowPaddingTop",eN=eh[0],ej=eh[eh.length-1],ez=eb[0],eB=eb[eb.length-1],eO=eN&&ez?Math.max(ez.paddingLeft,.004):0,eD=ej&&eB?Math.max(eB.paddingRight,.004):0,eV=e=>{let t=G.current;if(!t)return{x:0,y:0};let i=t.getBoundingClientRect();return{x:e.clientX-i.left+10,y:e.clientY-i.top+10}},eq=e=>{er&&n5(e,u),D&&O(null)},eG=e=>{er&&n4(e,u)};o.useLayoutEffect(()=>{if(!p||q)return void X(null);let e=K.current,t=null==e?void 0:e.parentElement;if(!e||!t)return void X(null);let i=()=>{let i=e.querySelector("[data-list-row]");if(!i)return void X(null);let n=t.getBoundingClientRect(),o=i.getBoundingClientRect();X(o.top-n.top+o.height/2)};i();let n=new ResizeObserver(i);return n.observe(e),n.observe(t),()=>n.disconnect()},[p,q,eS,eI,ek,eR,t,e,eh,ex,Y,v,ea,el,eC]);let eK=o.useMemo(()=>!q&&n7.some(t=>{let i=t.charAt(0);return ol(e[`${t}VerticalAlign`],e,i)}),[q,e,e.AColumnVerticalAlign,e.BColumnVerticalAlign,e.CColumnVerticalAlign,e.DColumnVerticalAlign,e.EColumnVerticalAlign]);o.useLayoutEffect(()=>{var e;let t=G.current;if(!t)return;let i=()=>{t.querySelectorAll("[data-list-col]").forEach(e=>{e.style.transform="";let t=e.querySelector(`.${u}-list-col`);t&&(t.style.minHeight="",t.style.height="");let i=e.querySelector(`.${u}-list-col-title`);i&&(i.style.transform="")})};if(q||!eK)return void i();let n=()=>{let e=Array.from(t.querySelectorAll("[data-list-row]")),i=`${u}-list-col`,n=`${u}-baseline-probe`;e.forEach(e=>{e.querySelectorAll("[data-list-col]").forEach(e=>{e.style.transform="";let t=e.querySelector(`.${i}`);t&&(t.style.minHeight="",t.style.height="");let n=e.querySelector(`.${u}-list-col-title`);n&&(n.style.transform="")})}),e.forEach(e=>{let t=Array.from(e.querySelectorAll("[data-list-col]"));var n=e,o=t,r=i;let a=n.getBoundingClientRect().height;a<=0||o.forEach(e=>{let t=e.querySelector(`.${r}`);t&&(t.style.minHeight=`${a}px`,t.style.height=`${a}px`)})}),t.offsetHeight,e.forEach(e=>{let t=Array.from(e.querySelectorAll("[data-list-col]")),o=e.getBoundingClientRect().top,r=new Map,a=t.map(e=>{let t=e.querySelector(`.${u}-list-col-title`),i={el:e,titleEl:t,letter:e.getAttribute("data-col-letter")??"",kind:e.getAttribute("data-valign")??"top",anchor:e.getAttribute("data-valign-anchor")};return r.set(i.letter,i),i}),l=new Map,s=(e,t)=>{var a,c;let d=l.get(e.letter);if(void 0!==d)return d;let u=e.anchor?r.get(e.anchor):void 0;if("baseline"!==e.kind||!u||t.has(e.letter)){let t=oc(e,o,i,n);return l.set(e.letter,t),t}t.add(e.letter);let p=s(u,t);t.delete(e.letter);let m=oc(e,o,i,n);a=e.titleEl,c=p-m,a&&c?a.style.transform=`translateY(${c}px)`:a&&(a.style.transform="");let g=oc(e,o,i,n);return l.set(e.letter,g),g};a.forEach(e=>s(e,new Set))})},o=null,r=()=>{null===o&&(o=requestAnimationFrame(()=>{o=null,n()}))};n();let a=new ResizeObserver(()=>r());a.observe(t);let l=!1;return"u">typeof document&&null!=(e=document.fonts)&&e.ready&&document.fonts.ready.then(()=>{l||r()}),()=>{l=!0,null!==o&&(cancelAnimationFrame(o),o=null),a.disconnect(),i()}},[eK,q,e,t,Y,eS,ex]);let eU=o.useMemo(()=>`
.${u}-wrapper {
  display: grid;
  align-items: start;
  min-height: ${n3(48)};
  position: relative;
  overflow: visible;
  box-sizing: border-box;
}

.${u}-hover-image,
.${u}-hover-video {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  pointer-events: none;
  display: block;
}

.${u}-list-item {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  overflow: visible;
  position: relative;
  box-sizing: content-box;
  user-select: none;
  background: var(--${u}-background-color);
}

.${u}-wrapper.${u}-divider-top .${u}-list-item {
  border-top-style: solid;
  border-top-color: var(--${u}-divider-color);
}

.${u}-wrapper.${u}-divider-bottom .${u}-list-item {
  border-bottom-style: solid;
  border-bottom-color: var(--${u}-divider-color);
}

.${u}-list-cols-row {
  display: flex;
  align-items: start;
  width: 100%;
  box-sizing: border-box;
}

.${u}-list-cols-row-h {
  align-items: stretch;
}

.${u}-list-cols-row-h [data-list-col] {
  display: grid;
  grid-template-rows: minmax(0, 1fr);
  align-self: stretch;
  min-height: min-content;
}

.${u}-list-cols-row-h .${u}-list-col {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  min-height: 0;
}

.${u}-list-cols-row-h .${u}-list-col-title {
  display: block;
  flex: 0 0 auto;
  align-self: stretch;
}

.${u}-text-tight-leading {
  display: block;
  flex-shrink: 0;
  padding-top: var(--${u}-title-leading-gap, 0);
  padding-bottom: var(--${u}-title-leading-gap, 0);
}

.${u}-wrapper.${u}-type-b .${u}-list-cols-row {
  flex-direction: column;
  align-items: stretch;
}

.${u}-wrapper.${u}-type-b .${u}-list-col {
  width: 100%;
  min-width: 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: min-content;
}

.${u}-wrapper.${u}-type-b .${u}-list-col-title {
  display: block;
  flex: 0 0 auto;
  align-self: stretch;
  text-align: center;
}

.${u}-wrapper.${u}-type-b .${u}-cut-item .${u}-list-cols-row {
  flex-direction: row;
}

.${u}-wrapper.${u}-type-b .${u}-cut-label {
  box-sizing: border-box;
}

.${u}-wrapper.${u}-type-b .${u}-list-col-last {
  flex: 0 0 auto;
  min-width: 0;
}

a.${u}-list-item {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

.${u}-list-col {
  flex-shrink: 0;
  overflow: visible;
  box-sizing: border-box;
  min-width: ${n3(50)};
  position: relative;
  display: flex;
  align-items: flex-start;
}

.${u}-list-col-last {
  flex: 1 1 auto;
  min-width: ${n3(50)};
}

.${u}-list-col-title {
  color: var(--${u}-text-color);
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  word-break: break-word;
  flex: 1;
  min-width: 0;
  width: 100%;
  box-sizing: border-box;
}

.${u}-baseline-probe {
  display: inline-block;
  width: 0;
  height: 0;
  overflow: hidden;
  vertical-align: baseline;
}

.${u}-col-resize-handle,
.${u}-padding-control-handle,
.${u}-text-padding-lr-handle {
  background: transparent;
}

.${u}-padding-control-handle[data-controls-axis="x"][data-controls-variant="column-padding"]::after,
.${u}-text-padding-lr-handle::after {
  content: '';
  position: absolute;
  top: var(--${u}-first-entry-handle-top, 50%);
  left: 50%;
  transform: translate(-50%, -50%);
  width: 4px;
  height: 12px;
  background: #FF5C02;
  border: 1px solid #FFFFFF;
  border-radius: 5px;
  box-sizing: border-box;
  pointer-events: none;
}

.${u}-text-padding-lr-handle::after {
  top: 50%;
}

.${u}-padding-control-handle[data-controls-axis="y"]::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 4px;
  background: #FF5C02;
  border: 1px solid #FFFFFF;
  border-radius: 5px;
  box-sizing: border-box;
  pointer-events: none;
}

.${u}-padding-control-handle[data-controls-variant="row-padding"][data-controls-axis="y"]::after,
.${u}-padding-control-handle[data-controls-variant="column-padding"][data-controls-axis="y"]::after {
  left: 20px;
  transform: translateY(-50%);
}

.${u}-wrapper.${u}-type-b .${u}-padding-control-handle[data-controls-variant="row-padding"][data-controls-axis="y"]::after,
.${u}-wrapper.${u}-type-b .${u}-padding-control-handle[data-controls-variant="column-padding"][data-controls-axis="y"]::after {
  left: 50%;
  transform: translate(-50%, -50%);
}

.${u}-row-padding-handle {
  width: 100%;
  flex-shrink: 0;
  background: transparent;
}

.${u}-list-col-wrap {
  position: relative;
}

.${u}-list-cols-row-controls {
  position: relative;
}

.${u}-col-resize-handle::after {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background: #FF5C02;
  pointer-events: none;
}

.${u}-wrapper.${u}-type-b .${u}-col-resize-handle::after {
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100%;
  height: 2px;
}

.${u}-wrapper.${u}-entry-hover-default .${u}-list-item-has-link,
.${u}-wrapper.${u}-entry-hover-blinds .${u}-list-item-has-link,
.${u}-wrapper.${u}-entry-hover-reveal .${u}-list-item-has-link,
.${u}-wrapper.${u}-entry-hover-default .${u}-cut-item,
.${u}-wrapper.${u}-entry-hover-blinds .${u}-cut-item,
.${u}-wrapper.${u}-entry-hover-reveal .${u}-cut-item {
  transition: background-color 250ms, border-color 250ms;
}

.${u}-wrapper.${u}-entry-hover-default .${u}-list-item-has-link .${u}-list-col-title,
.${u}-wrapper.${u}-entry-hover-blinds .${u}-list-item-has-link .${u}-list-col-title,
.${u}-wrapper.${u}-entry-hover-reveal .${u}-list-item-has-link .${u}-list-col-title,
.${u}-wrapper.${u}-entry-hover-default .${u}-cut-label,
.${u}-wrapper.${u}-entry-hover-blinds .${u}-cut-label,
.${u}-wrapper.${u}-entry-hover-reveal .${u}-cut-label {
  transition: color 250ms;
}

.${u}-wrapper.${u}-entry-hover-default .${u}-list-item-has-link:hover,
.${u}-wrapper.${u}-entry-hover-default.${u}-state-hover .${u}-list-item-has-link,
.${u}-wrapper.${u}-entry-hover-default .${u}-cut-item:hover,
.${u}-wrapper.${u}-entry-hover-default.${u}-state-hover .${u}-cut-item {
  background: var(--${u}-background-hover-color);
}

.${u}-wrapper.${u}-divider-bottom.${u}-entry-hover-default .${u}-list-item-has-link:hover,
.${u}-wrapper.${u}-divider-bottom.${u}-entry-hover-default .${u}-list-item:has(+ .${u}-list-item-has-link:hover),
.${u}-wrapper.${u}-divider-bottom.${u}-entry-hover-default .${u}-list-item:has(+ .${u}-cut-item:hover),
.${u}-wrapper.${u}-divider-bottom.${u}-entry-hover-default.${u}-state-hover .${u}-list-item-has-link,
.${u}-wrapper.${u}-divider-bottom.${u}-entry-hover-default .${u}-cut-item:hover,
.${u}-wrapper.${u}-divider-bottom.${u}-entry-hover-default.${u}-state-hover .${u}-cut-item,
.${u}-wrapper.${u}-divider-bottom.${u}-entry-hover-blinds .${u}-list-item-has-link:hover,
.${u}-wrapper.${u}-divider-bottom.${u}-entry-hover-blinds .${u}-list-item:has(+ .${u}-list-item-has-link:hover),
.${u}-wrapper.${u}-divider-bottom.${u}-entry-hover-blinds .${u}-list-item:has(+ .${u}-cut-item:hover),
.${u}-wrapper.${u}-divider-bottom.${u}-entry-hover-blinds.${u}-state-hover .${u}-list-item-has-link,
.${u}-wrapper.${u}-divider-bottom.${u}-entry-hover-blinds .${u}-cut-item:hover,
.${u}-wrapper.${u}-divider-bottom.${u}-entry-hover-blinds.${u}-state-hover .${u}-cut-item,
.${u}-wrapper.${u}-divider-bottom.${u}-entry-hover-reveal .${u}-list-item-has-link:hover,
.${u}-wrapper.${u}-divider-bottom.${u}-entry-hover-reveal .${u}-list-item:has(+ .${u}-list-item-has-link:hover),
.${u}-wrapper.${u}-divider-bottom.${u}-entry-hover-reveal .${u}-list-item:has(+ .${u}-cut-item:hover),
.${u}-wrapper.${u}-divider-bottom.${u}-entry-hover-reveal.${u}-state-hover .${u}-list-item-has-link,
.${u}-wrapper.${u}-divider-bottom.${u}-entry-hover-reveal .${u}-cut-item:hover,
.${u}-wrapper.${u}-divider-bottom.${u}-entry-hover-reveal.${u}-state-hover .${u}-cut-item {
  border-bottom-color: var(--${u}-divider-hover-color);
}

.${u}-wrapper.${u}-divider-top:not(.${u}-divider-bottom).${u}-entry-hover-default .${u}-list-item-has-link:hover:first-child,
.${u}-wrapper.${u}-divider-top:not(.${u}-divider-bottom).${u}-entry-hover-default.${u}-state-hover .${u}-list-item-has-link:first-child,
.${u}-wrapper.${u}-divider-top:not(.${u}-divider-bottom).${u}-entry-hover-blinds .${u}-list-item-has-link:hover:first-child,
.${u}-wrapper.${u}-divider-top:not(.${u}-divider-bottom).${u}-entry-hover-blinds.${u}-state-hover .${u}-list-item-has-link:first-child,
.${u}-wrapper.${u}-divider-top:not(.${u}-divider-bottom).${u}-entry-hover-reveal .${u}-list-item-has-link:hover:first-child,
.${u}-wrapper.${u}-divider-top:not(.${u}-divider-bottom).${u}-entry-hover-reveal.${u}-state-hover .${u}-list-item-has-link:first-child {
  border-top-color: var(--${u}-divider-hover-color);
}

.${u}-wrapper.${u}-divider-top.${u}-divider-bottom.${u}-entry-hover-default .${u}-list-item-has-link:hover:first-child,
.${u}-wrapper.${u}-divider-top.${u}-divider-bottom.${u}-entry-hover-default.${u}-state-hover .${u}-list-item-has-link:first-child,
.${u}-wrapper.${u}-divider-top.${u}-divider-bottom.${u}-entry-hover-blinds .${u}-list-item-has-link:hover:first-child,
.${u}-wrapper.${u}-divider-top.${u}-divider-bottom.${u}-entry-hover-blinds.${u}-state-hover .${u}-list-item-has-link:first-child,
.${u}-wrapper.${u}-divider-top.${u}-divider-bottom.${u}-entry-hover-reveal .${u}-list-item-has-link:hover:first-child,
.${u}-wrapper.${u}-divider-top.${u}-divider-bottom.${u}-entry-hover-reveal.${u}-state-hover .${u}-list-item-has-link:first-child {
  border-top-color: var(--${u}-divider-hover-color);
}

.${u}-wrapper.${u}-entry-hover-default .${u}-list-item-has-link:hover .${u}-list-col-title,
.${u}-wrapper.${u}-entry-hover-default.${u}-state-hover .${u}-list-item-has-link .${u}-list-col-title,
.${u}-wrapper.${u}-entry-hover-default .${u}-cut-item:hover .${u}-cut-label,
.${u}-wrapper.${u}-entry-hover-default.${u}-state-hover .${u}-cut-item .${u}-cut-label,
.${u}-wrapper.${u}-entry-hover-blinds .${u}-list-item-has-link:hover .${u}-list-col-title,
.${u}-wrapper.${u}-entry-hover-blinds.${u}-state-hover .${u}-list-item-has-link .${u}-list-col-title,
.${u}-wrapper.${u}-entry-hover-blinds .${u}-cut-item:hover .${u}-cut-label,
.${u}-wrapper.${u}-entry-hover-blinds.${u}-state-hover .${u}-cut-item .${u}-cut-label,
.${u}-wrapper.${u}-entry-hover-reveal .${u}-list-item-has-link:hover .${u}-list-col-title,
.${u}-wrapper.${u}-entry-hover-reveal.${u}-state-hover .${u}-list-item-has-link .${u}-list-col-title,
.${u}-wrapper.${u}-entry-hover-reveal .${u}-cut-item:hover .${u}-cut-label,
.${u}-wrapper.${u}-entry-hover-reveal.${u}-state-hover .${u}-cut-item .${u}-cut-label {
  color: var(--${u}-text-hover-color);
}

.${u}-wrapper.${u}-entry-hover-blinds .${u}-list-item-has-link::before,
.${u}-wrapper.${u}-entry-hover-blinds .${u}-cut-item::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--${u}-background-hover-color);
  transform: scaleY(0);
  transform-origin: center center;
  opacity: 0;
  transition: opacity 150ms, transform 0s 250ms;
  z-index: 0;
  pointer-events: none;
}

.${u}-wrapper.${u}-entry-hover-blinds .${u}-list-col,
.${u}-wrapper.${u}-entry-hover-blinds .${u}-cut-label {
  position: relative;
  z-index: 1;
}

.${u}-wrapper.${u}-entry-hover-blinds .${u}-list-item-has-link:hover::before,
.${u}-wrapper.${u}-entry-hover-blinds.${u}-state-hover .${u}-list-item-has-link::before,
.${u}-wrapper.${u}-entry-hover-blinds .${u}-cut-item:hover::before,
.${u}-wrapper.${u}-entry-hover-blinds.${u}-state-hover .${u}-cut-item::before {
  transform: scaleY(1);
  opacity: 1;
  transition: transform 250ms, opacity 250ms;
}

.${u}-wrapper.${u}-entry-hover-reveal .${u}-list-item-has-link::before,
.${u}-wrapper.${u}-entry-hover-reveal .${u}-cut-item::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--${u}-background-hover-color);
  transform: scaleY(0);
  transform-origin: bottom center;
  transition: transform 120ms;
  z-index: 0;
  pointer-events: none;
}

.${u}-wrapper.${u}-entry-hover-reveal .${u}-list-col,
.${u}-wrapper.${u}-entry-hover-reveal .${u}-cut-label {
  position: relative;
  z-index: 1;
}

.${u}-wrapper.${u}-entry-hover-reveal .${u}-list-item-has-link:hover::before,
.${u}-wrapper.${u}-entry-hover-reveal.${u}-state-hover .${u}-list-item-has-link::before,
.${u}-wrapper.${u}-entry-hover-reveal .${u}-cut-item:hover::before,
.${u}-wrapper.${u}-entry-hover-reveal.${u}-state-hover .${u}-cut-item::before {
  transform: scaleY(1);
  transform-origin: top center;
}

.${u}-wrapper.${u}-entry-hover-reveal .${u}-list-item-has-link.${u}-reveal-from-bottom::before,
.${u}-wrapper.${u}-entry-hover-reveal .${u}-cut-item.${u}-reveal-from-bottom::before {
  transform-origin: top center;
}

.${u}-wrapper.${u}-entry-hover-reveal .${u}-list-item-has-link.${u}-reveal-from-bottom:hover::before,
.${u}-wrapper.${u}-entry-hover-reveal .${u}-list-item-has-link.${u}-reveal-from-bottom.${u}-state-hover::before,
.${u}-wrapper.${u}-entry-hover-reveal .${u}-cut-item.${u}-reveal-from-bottom:hover::before,
.${u}-wrapper.${u}-entry-hover-reveal .${u}-cut-item.${u}-reveal-from-bottom.${u}-state-hover::before {
  transform-origin: bottom center;
}

.${u}-cut-item {
  display: flex;
  align-items: stretch;
  width: 100%;
  overflow: visible;
  position: relative;
  z-index: 3;
  box-sizing: border-box;
  user-select: none;
  background: var(--${u}-background-color);
  cursor: pointer;
  padding: 0;
  border: none;
  font: inherit;
  text-align: inherit;
  appearance: none;
  -webkit-appearance: none;
}

.${u}-cut-item .${u}-list-cols-row {
  flex: 1;
  min-height: 100%;
  width: 100%;
  display: flex;
}

.${u}-wrapper.${u}-divider-bottom .${u}-cut-item {
  border-bottom-style: solid;
  border-bottom-color: var(--${u}-divider-color);
}

.${u}-cut-label {
  display: block;
  position: relative;
  z-index: 1;
  margin: 0;
  color: var(--${u}-text-color);
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  word-break: break-word;
}
`,[u]);return n.jsxs(n.Fragment,{children:[n.jsx("style",{dangerouslySetInnerHTML:{__html:eU}}),n.jsx("div",{style:ei,children:n.jsxs("div",{ref:G,className:`${u}-wrapper ${eo}${eL?` ${eL}`:""}${q?` ${u}-type-b`:""}`.trim(),style:{width:a.scalingValue(h??0,i),...!q&&p?{[`--${u}-first-entry-handle-top`]:eH}:{}},onMouseMove:D?e=>{if(!D||!B)return;let{x:t,y:i}=eV(e);O(e=>e&&(e.x!==t||e.y!==i)?{...e,x:t,y:i}:e)}:void 0,onMouseLeave:D?()=>{O(null)}:void 0,children:[n.jsxs("div",{style:{width:"100%",position:"relative"},children:[eS.map((t,o)=>{var a;let l=((null==(a=t.link)?void 0:a.length)??0)>0,s=l&&(!i||r)?"a":"div",c=n9(o,eS.length,ea,el,eC,v??0,i??!1);return n.jsxs(s,{ref:0===o?e=>{K.current=e}:void 0,className:`${u}-list-item${l||"always"===T?` ${u}-list-item-has-link`:""}`,...l?{href:t.link,target:"_blank"}:{},style:c,onMouseEnter:e=>{er&&(l||"always"===T)&&n5(e,u),D&&((e,t)=>{if(!D)return;let i=e.image;if(!(null!=i&&i.url))return O(null);let{x:n,y:o}=eV(t),r=(null==C?void 0:C.min)??80,a=(null==C?void 0:C.max)??320,l=(null==B?void 0:B.rowId)===e.id?B.widthPx:Math.random()*(a-r)+r;O({rowId:e.id,url:i.url,objectFit:"contain",isVideo:function(e){if("video"===e.type)return!0;if("image"===e.type)return!1;let t=e.name??"";return!!/\.(mp4|webm|ogg|mov)(\?|$)/i.test(t)||/\.(mp4|webm|ogg|mov)(\?|$)/i.test(e.url)}(i),widthPx:l,x:n,y:o})})(t,e)},onMouseLeave:e=>{er&&(l||"always"===T)&&n4(e,u)},children:[eI>0&&n.jsx("div",{className:`${u}-row-padding-handle`,style:{height:eE(eI)}}),n.jsxs("div",{className:`${u}-list-cols-row${q?"":` ${u}-list-cols-row-h`}${p&&0===o&&q?` ${u}-list-cols-row-controls`:""}`,...q?{}:{"data-list-row":""},style:q?void 0:{minHeight:eE(eR)},children:[eh.map((r,a)=>{var l;let s=a===eh.length-1,c=eb[a],d=r.paddingBottom,m=String(t.cells[r.key]??"").trim().length>0,g=q&&m&&d>0,h=q?{minHeight:eE(eR)}:{width:eE(ex[a])},f=q?{paddingLeft:eE(Q),paddingRight:eE(Q)}:{paddingLeft:eE(c.paddingLeft),paddingRight:eE(c.paddingRight)},y=r.textPrefix.charAt(0),v=q?function(e){let t=oa(e);return"baseline"===t.kind?{kind:"top"}:t}(e[`${r.textPrefix}VerticalAlign`]):function(e,t,i){if(ol(e,t,i))return oa(e);let n=oa(e);return"baseline"===n.kind?{kind:"top"}:n}(e[`${r.textPrefix}VerticalAlign`],e,y),x=q&&m&&p&&0===o;return n.jsxs("div",{className:q?`${u}-list-col-wrap`:void 0,...q?{}:{"data-list-col":"","data-col-letter":y,"data-valign":v.kind,..."baseline"===v.kind?{"data-valign-anchor":v.anchorLetter}:{}},children:[n.jsx("div",{className:`${u}-list-col${s?` ${u}-list-col-last`:""}`,style:{...f,...h,...q?{justifyContent:os(v.kind)}:{}},"data-test":r.width,children:n.jsx("span",{className:oh(e,r.textPrefix,`${u}-list-col-title`,`${u}-text-tight-leading`),style:{...og(om(e,r.textPrefix),i),...of(e,r.textPrefix,u,i),...q?{}:"center"===(l=v.kind)?{flex:"0 0 auto",marginTop:"auto",marginBottom:"auto"}:"bottom"===l?{flex:"0 0 auto",marginTop:"auto"}:{}},children:t.cells[r.key]??null})}),g&&n.jsx("div",{className:`${u}-row-padding-handle`,style:{height:eE(d)}}),x&&n.jsx(n1,{centerXHitTop:`var(--${u}-first-entry-handle-top, 50%)`,"data-controls":r.paddingBottomKey,"data-controls-static-handle":"","data-controls-axis":"y","data-controls-variant":"column-padding","data-controls-min":"0",className:`${u}-padding-control-handle`,hitPlacement:"center",areaStyle:{position:"absolute",bottom:0,left:0,width:"100%",height:eE(Math.max(d,.004))}})]},r.key)}),p&&0===o&&q&&n.jsxs(n.Fragment,{children:[n.jsx(n1,{centerXHitTop:`var(--${u}-first-entry-handle-top, 50%)`,"data-controls":"textPaddingLR","data-controls-static-handle":"","data-controls-paired":"","data-controls-axis":"x","data-controls-variant":"column-padding","data-controls-min":"0","data-controls-max-fraction":String(et),className:`${u}-text-padding-lr-handle`,hitPlacement:"center",areaStyle:{position:"absolute",top:0,left:0,width:eE(ee),height:"100%"}}),n.jsx(n1,{centerXHitTop:`var(--${u}-first-entry-handle-top, 50%)`,"data-controls":"textPaddingLR","data-controls-static-handle":"","data-controls-paired":"","data-controls-axis":"x","data-controls-variant":"column-padding","data-controls-reverse":"","data-controls-min":"0","data-controls-max-fraction":String(et),className:`${u}-text-padding-lr-handle`,hitPlacement:"center",areaStyle:{position:"absolute",top:0,left:eE(Math.max(ee,ef-ee)),width:eE(ee),height:"100%"}})]})]}),!q&&ek>0&&n.jsx("div",{className:`${u}-row-padding-handle`,style:{height:eE(ek)}}),p&&0===o&&!q&&n.jsx(n1,{centerXHitTop:`var(--${u}-first-entry-handle-top, 50%)`,"data-controls":"rowPaddingBottom","data-controls-static-handle":"","data-controls-handle-left":"20","data-controls-axis":"y","data-controls-variant":"row-padding","data-controls-min":"0",className:`${u}-padding-control-handle`,hitPlacement:"left-y",areaStyle:{position:"absolute",bottom:0,left:0,width:"100%",height:eE(eA)}})]},t.id)}),p&&n.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none"},children:n.jsx(n1,{centerXHitTop:`var(--${u}-first-entry-handle-top, 50%)`,"data-controls":e_,"data-controls-static-handle":"",...q?{}:{"data-controls-handle-left":"20"},"data-controls-axis":"y","data-controls-variant":"row-padding","data-controls-min":"0",className:`${u}-padding-control-handle`,hitPlacement:q?"center":"left-y",areaStyle:{position:"absolute",top:eW,left:0,width:"100%",height:eE(Math.max(eI,.004))}})},"row-padding-handles"),p&&!q&&eN&&ej&&n.jsxs("div",{style:{position:"absolute",inset:0,pointerEvents:"none"},children:[n.jsx(n1,{centerXHitTop:`var(--${u}-first-entry-handle-top, 50%)`,"data-controls":eN.paddingLeftKey,"data-controls-static-handle":"","data-controls-axis":"x","data-controls-variant":"column-padding","data-controls-min":"0","data-controls-max-fraction":String(ex[0]-((null==ez?void 0:ez.paddingRight)??0)),className:`${u}-padding-control-handle`,hitPlacement:"center-x",areaStyle:{position:"absolute",top:0,left:0,width:eE(eO),height:"100%"}}),n.jsx(n1,{centerXHitTop:`var(--${u}-first-entry-handle-top, 50%)`,"data-controls":ej.paddingRightKey,"data-controls-static-handle":"","data-controls-axis":"x","data-controls-variant":"column-padding","data-controls-reverse":"","data-controls-min":"0","data-controls-max-fraction":String(ex[eh.length-1]-((null==eB?void 0:eB.paddingLeft)??0)),className:`${u}-padding-control-handle`,hitPlacement:"center-x",areaStyle:{position:"absolute",top:0,left:eE(ef-eD),width:eE(eD),height:"100%"}})]},"column-edge-padding-handles"),p&&!q&&eh.slice(0,-1).map((e,t)=>{let i=eh[t+1],o=ev.slice(0,t+1).reduce((e,t)=>e+t,0),r=eb[t],a=eb[t+1],l=Math.max(r.paddingRight,.004),s=Math.max(a.paddingLeft,.004);return n.jsxs("div",{style:{position:"absolute",inset:0,pointerEvents:"none"},children:[n.jsx(n1,{centerXHitTop:`var(--${u}-first-entry-handle-top, 50%)`,"data-controls":e.paddingRightKey,"data-controls-static-handle":"","data-controls-axis":"x","data-controls-variant":"column-padding","data-controls-reverse":"","data-controls-min":"0","data-controls-max-fraction":String(ex[t]-r.paddingLeft),className:`${u}-padding-control-handle`,hitPlacement:"center-x",areaStyle:{position:"absolute",top:0,left:eE(o-l),width:eE(l),height:"100%"}}),n.jsx(n1,{centerXHitTop:`var(--${u}-first-entry-handle-top, 50%)`,"data-controls":i.paddingLeftKey,"data-controls-static-handle":"","data-controls-axis":"x","data-controls-variant":"column-padding","data-controls-min":"0","data-controls-max-fraction":String(ex[t+1]-a.paddingRight),className:`${u}-padding-control-handle`,hitPlacement:"center-x",areaStyle:{position:"absolute",top:0,left:eE(o),width:eE(s),height:"100%"}})]},`${e.paddingRightKey}-padding`)}),p&&!q&&eh.slice(0,-1).map((e,t)=>{var i,o,r;let a=(i=t,o=ev,r=ey,Math.max(oS,ef-o.slice(0,i).reduce((e,t)=>e+t,0)-r.slice(i+1,o.length-1).reduce((e,t)=>e+t,0)-oS)),l=ev.slice(0,t+1).reduce((e,t)=>e+t,0)-.002;return n.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none"},children:n.jsx("div",{"data-controls":e.widthKey,"data-controls-static-handle":"","data-controls-axis":"x","data-controls-min":String(50),"data-controls-max-fraction":String(a),"data-controls-variant":"column-width",className:`${u}-col-resize-handle`,style:{position:"absolute",top:"0px",left:eE(l),width:eE(.004),height:"calc(100%)",pointerEvents:"auto"}})},`${e.widthKey}-junction`)})]}),eC&&(()=>{var t;let o=om(e,n8),r=function(e){let t=oa(e).kind;return"baseline"===t?"center":t}(e.cutLabelVerticalAlign),l="justify"===o.textTextAlign||q;return n.jsx("button",{type:"button",className:`${u}-cut-item`,style:{minHeight:eE($??0),cursor:eT?"pointer":"default",...function(e,t,i){let n=a.scalingValue(t,i),o=a.scalingValue(0,i);return{borderTopWidth:o,borderBottomWidth:e?n:o}}(el,v??0,i??!1)},onClick:eT?eM:void 0,onMouseEnter:er||D?eq:void 0,onMouseLeave:er?eG:void 0,children:n.jsx("div",{className:`${u}-list-cols-row`,style:{...q?{paddingLeft:eE(Q),paddingRight:eE(Q)}:{},justifyContent:"right"===(t=o.textTextAlign)?"flex-end":"center"===t?"center":"flex-start",alignItems:os(r)},children:n.jsx("span",{className:oh(e,n8,`${u}-cut-label`,`${u}-text-tight-leading`),style:{...og(o,i),...of(e,n8,u,i),...l?{width:"100%"}:{}},children:S})})})})(),D&&B&&(()=>{let e=n3(B.widthPx),t={width:e,height:"auto",maxHeight:e,objectFit:"contain",left:B.x,top:B.y,position:"absolute"};return n.jsx(n2,{media:B,className:B.isVideo?`${u}-hover-video`:`${u}-hover-image`,style:t},`${B.rowId}-${B.url}`)})()]})})]})},id:"list",name:"Programme",category:"lists",layoutMode:"structured",normalizeLayoutSettingsUpdate:(e,t)=>(function(e,t){let i=e.columns,n=t.columns;if("number"!=typeof i||i===n)return e;let o=oL(e),r="b"===e.type||void 0===e.type&&"b"===t.type,a={...e,...function(e,t=1){let i=t/e;return Object.fromEntries(oy.map(e=>[e,i]))}(i,o),...Object.fromEntries([...ov.map(e=>[e,0]),...ox.map(e=>[e,0])])};if(r)for(let e of ob)"number"==typeof t[e]&&(a[e]=t[e]);else Object.assign(a,Object.fromEntries(ob.map(e=>[e,0])));return oR(e,a)?a:e})(e,t),preview:{type:"image",url:"https://cdn.cntrl.site/component-assets/Programme_List.png"},version:1,defaultSize:{d:{width:720,height:540}},assetsPaths:{content:[{path:"image.url",placeholderEnabled:!0}],parameters:[]},fontSettingsPaths:{content:[],parameters:[...oe.map(e=>({path:`${ou(e,"textFontFamily")}`}))]},fontRelations:{...oe.reduce((e,t)=>({...e,[`${t}TextFontSettings`]:`${ou(t,"textFontFamily")}`}),{})},schema:oY,sourceCode:oA},oZ={questionColor:"question-color",answerColor:"answer-color",dividerColor:"divider-color",iconColor:"icon-color",questionHoverColor:"question-hover-color",iconHoverColor:"icon-hover-color",iconActiveColor:"icon-active-color",dividerHoverColor:"divider-hover-color"},oQ=["hover","focus","filled","success","error"];function o0(e,t,i,n){return void 0!==t&&t<(e??.01)?`${i} ${n}`:i}function o1(e,t,i,n){let o=e??.01;return void 0===t||t>=o?{}:{[`--${i}-text-leading-gap`]:a.scalingValue((o-t)/2,n)}}function o2(e,t,i,n,o,r,a,l){return{fontSettings:{fontFamily:e,fontWeight:(null==t?void 0:t.fontWeight)??400,fontStyle:(null==t?void 0:t.fontStyle)??"normal"},fontSize:i??.01,lineHeight:n,letterSpacing:o??0,wordSpacing:r??0,textAppearance:a,color:l??"#000000"}}let o3=`import { useCallback, useEffect, useMemo, useState } from 'react';
import cn from 'classnames';
import { CommonComponentProps } from '../props';
import { buildColorVars, scalingValue, useScopedStyles } from '../utils/index';
import { omitTextColors, TextStyles, textStylesToCss } from '../utils/textStylesToCss';
import { SvgImage } from '../helpers/SvgImage/SvgImage';
import { RichTextRenderer } from '../helpers/RichTextRenderer/RichTextRenderer';
import { PaddingControl } from '../helpers/PaddingControl/PaddingControl';

type FAQContentItem = {
  question?: string;
  answer?: any[];
};

type FAQSettings = {
  wrapperWidth?: number;
  cellMinHeight?: number;
  dividerWidth?: number;
  dividerStyle?: 'solid' | 'dashed' | 'dotted';
  entryHoverEffect?: 'none' | 'default';
  autoclose?: 'on' | 'off';
  icon?: string | null;
  iconMaxWidth?: number;
  iconPaddingRight?: number;
  iconAnimation?: 'rotate 180' | 'rotate 90' | 'rotate 45';
  questionColor?: string;
  answerColor?: string;
  dividerColor?: string;
  iconColor?: string;
  questionHoverColor?: string;
  iconHoverColor?: string;
  iconActiveColor?: string;
  dividerHoverColor?: string;
  questionFontFamily?: string;
  questionFontSettings?: { fontWeight: number; fontStyle: string };
  questionFontSize?: number;
  questionLineHeight?: number;
  questionLetterSpacing?: number;
  questionWordSpacing?: number;
  questionTextAppearance?: TextStyles['textAppearance'];
  answerFontFamily?: string;
  answerFontSettings?: { fontWeight: number; fontStyle: string };
  answerFontSize?: number;
  answerLineHeight?: number;
  answerLetterSpacing?: number;
  answerWordSpacing?: number;
  answerTextAppearance?: TextStyles['textAppearance'];
  questionPaddingLeft?: number;
  questionPaddingTop?: number;
  questionPaddingBottom?: number;
  answerPaddingLeft?: number;
  answerPaddingRight?: number;
  answerPaddingTop?: number;
  answerPaddingBottom?: number;
};

type FAQProps = {
  settings: FAQSettings;
  content?: FAQContentItem[];
  isEditor?: boolean;
  isPreviewMode?: boolean;
  isEditMode?: boolean;
  activeEvent: string | undefined;
  onUpdateSettings?: (settings: FAQSettings) => void;
} & CommonComponentProps;

const PANEL_ANIM_MS = 300;
const PADDING_HANDLE_SIZE = 0.004;

type ColorKeys =
  | 'questionColor'
  | 'answerColor'
  | 'dividerColor'
  | 'iconColor'
  | 'questionHoverColor'
  | 'iconHoverColor'
  | 'iconActiveColor'
  | 'dividerHoverColor';

const COLOR_VAR_MAP: Record<ColorKeys, string> = {
  questionColor: 'question-color',
  answerColor: 'answer-color',
  dividerColor: 'divider-color',
  iconColor: 'icon-color',
  questionHoverColor: 'question-hover-color',
  iconHoverColor: 'icon-hover-color',
  iconActiveColor: 'icon-active-color',
  dividerHoverColor: 'divider-hover-color',
};

const STATE_KEYS = ['hover', 'focus', 'filled', 'success', 'error'] as const;

function sv(px: number): string {
  return \`calc(var(--cntrl-article-width, 100vw) * \${px / 1440})\`;
}

function getTextClassName(
  fontSize: number | undefined,
  lineHeight: number | undefined,
  baseClassName: string,
  tightLeadingClassName: string,
): string {
  const resolvedFontSize = fontSize ?? 0.01;
  const needsTightLeading = lineHeight !== undefined && lineHeight < resolvedFontSize;

  return needsTightLeading
    ? \`\${baseClassName} \${tightLeadingClassName}\`
    : baseClassName;
}

function getTextLeadingVars(
  fontSize: number | undefined,
  lineHeight: number | undefined,
  prefix: string,
  isEditor?: boolean,
): React.CSSProperties {
  const resolvedFontSize = fontSize ?? 0.01;

  if (lineHeight === undefined || lineHeight >= resolvedFontSize) {
    return {};
  }

  return {
    [\`--\${prefix}-text-leading-gap\`]: scalingValue((resolvedFontSize - lineHeight) / 2, isEditor),
  } as React.CSSProperties;
}

function getCSS(P: string): string {
  return \`
.\${P}-wrapper {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
.\${P}-item {
  display: flex;
  flex-direction: column;
  position: relative;
  border-bottom-width: var(--\${P}-divider-width);
  border-bottom-style: var(--\${P}-divider-style);
  border-bottom-color: var(--\${P}-divider-color);
}
.\${P}-item:first-child {
  border-top-width: var(--\${P}-divider-width);
  border-top-style: var(--\${P}-divider-style);
  border-top-color: var(--\${P}-divider-color);
}
.\${P}-wrapper.\${P}-entry-hover-default .\${P}-item {
  transition: border-color 250ms;
}
.\${P}-wrapper.\${P}-entry-hover-default .\${P}-question-button {
  transition: color 250ms;
}
.\${P}-wrapper.\${P}-entry-hover-default .\${P}-item:not(.\${P}-item-open):hover,
.\${P}-wrapper.\${P}-entry-hover-default .\${P}-item:has(+ .\${P}-item:not(.\${P}-item-open):hover),
.\${P}-wrapper.\${P}-entry-hover-default.\${P}-state-hover .\${P}-item:not(.\${P}-item-open) {
  border-bottom-color: var(--\${P}-divider-hover-color, var(--\${P}-divider-color));
}
.\${P}-wrapper.\${P}-entry-hover-default .\${P}-item:not(.\${P}-item-open):hover:first-child,
.\${P}-wrapper.\${P}-entry-hover-default.\${P}-state-hover .\${P}-item:not(.\${P}-item-open):first-child {
  border-top-color: var(--\${P}-divider-hover-color, var(--\${P}-divider-color));
}
.\${P}-wrapper.\${P}-entry-hover-default .\${P}-item:not(.\${P}-item-open):hover .\${P}-question-button,
.\${P}-wrapper.\${P}-entry-hover-default.\${P}-state-hover .\${P}-item:not(.\${P}-item-open) .\${P}-question-button {
  color: var(--\${P}-question-hover-color, var(--\${P}-question-color));
}
.\${P}-question-button {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  margin: 0;
  border: none;
  background: none;
  cursor: pointer;
  text-align: left;
  color: var(--\${P}-question-color);
  font: inherit;
  padding-left: 0;
  outline: none;
  -webkit-tap-highlight-color: transparent;
}
.\${P}-question-button:focus,
.\${P}-question-button:focus-visible {
  outline: none;
}
.\${P}-question-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: \${sv(20)};
  width: 100%;
  min-width: 0;
  min-height: var(--\${P}-question-min-height, unset);
}
.\${P}-editor .\${P}-question-button {
  cursor: default;
}
.\${P}-question {
  margin: 0;
  flex: 1;
  min-width: 0;
  color: inherit;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  word-break: break-word;
}
.\${P}-text-tight-leading {
  display: block;
  flex-shrink: 0;
  padding-top: var(--\${P}-text-leading-gap, 0);
  padding-bottom: var(--\${P}-text-leading-gap, 0);
}
.\${P}-icon {
  flex-shrink: 0;
  width: var(--\${P}-icon-max-width);
  height: var(--\${P}-icon-max-width);
  position: relative;
  transition: transform \${PANEL_ANIM_MS}ms ease;
}
.\${P}-icon-custom {
  display: flex;
  align-items: center;
  justify-content: center;
}
.\${P}-icon-image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: background-color 250ms;
}
.\${P}-wrapper.\${P}-entry-hover-default .\${P}-item:not(.\${P}-item-open):hover .\${P}-icon-image,
.\${P}-wrapper.\${P}-entry-hover-default.\${P}-state-hover .\${P}-item:not(.\${P}-item-open) .\${P}-icon-image {
  --fill: var(--\${P}-icon-hover-color, var(--\${P}-icon-color)) !important;
  --hover-fill: var(--\${P}-icon-hover-color, var(--\${P}-icon-color)) !important;
}
.\${P}-item-open .\${P}-icon-image {
  --fill: var(--\${P}-icon-active-color, var(--\${P}-icon-color)) !important;
  --hover-fill: var(--\${P}-icon-active-color, var(--\${P}-icon-color)) !important;
}
.\${P}-item-open .\${P}-icon-anim-45 {
  transform: rotate(45deg);
}
.\${P}-item-open .\${P}-icon-anim-90 {
  transform: rotate(90deg);
}
.\${P}-item-open .\${P}-icon-anim-180 {
  transform: rotate(180deg);
}
.\${P}-panel {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows \${PANEL_ANIM_MS}ms ease;
}
.\${P}-item-open .\${P}-panel {
  grid-template-rows: 1fr;
}
.\${P}-panel-inner {
  overflow: hidden;
  min-height: 0;
}
.\${P}-answer {
  color: var(--\${P}-answer-color);
}
.\${P}-answer-text {
  margin: 0;
  color: inherit;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  word-break: break-word;
}
.\${P}-answer-text a {
  color: inherit;
  text-decoration: underline;
  text-underline-offset: 0.1em;
}
.\${P}-padding-handle {
  width: 100%;
  flex-shrink: 0;
  background: transparent;
}
.\${P}-question-controls,
.\${P}-answer-controls {
  position: relative;
}
.\${P}-padding-control-handle {
  background: transparent;
}
.\${P}-padding-control-handle[data-controls-axis="x"][data-controls-variant="column-padding"]::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 4px;
  height: 12px;
  background: #FF5C02;
  border: 1px solid #FFFFFF;
  border-radius: 5px;
  box-sizing: border-box;
  pointer-events: none;
}
.\${P}-padding-control-handle[data-controls-axis="y"]::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 4px;
  background: #FF5C02;
  border: 1px solid #FFFFFF;
  border-radius: 5px;
  box-sizing: border-box;
  pointer-events: none;
}
.\${P}-padding-control-handle[data-controls-variant="row-padding"][data-controls-axis="y"]::after {
  left: 20px;
  transform: translateY(-50%);
}
\`;
}

function resolveTextStyle(
  fontFamily: string | undefined,
  fontSettings: FAQSettings['questionFontSettings'],
  fontSize: number | undefined,
  lineHeight: number | undefined,
  letterSpacing: number | undefined,
  wordSpacing: number | undefined,
  textAppearance: TextStyles['textAppearance'],
  color: string | undefined,
): TextStyles {
  return {
    fontSettings: {
      fontFamily,
      fontWeight: fontSettings?.fontWeight ?? 400,
      fontStyle: fontSettings?.fontStyle ?? 'normal',
    },
    fontSize: fontSize ?? 0.01,
    lineHeight,
    letterSpacing: letterSpacing ?? 0,
    wordSpacing: wordSpacing ?? 0,
    textAppearance,
    color: color ?? '#000000',
  };
}

export function FAQ({ settings, content, isEditor, isPreviewMode, isEditMode, activeEvent }: FAQProps) {
  const { prefix: P } = useScopedStyles();
  const showControls = isEditMode ?? false;
  const {
    wrapperWidth = 1,
    cellMinHeight = 0,
    dividerWidth = 0.000694,
    dividerStyle = 'solid',
    entryHoverEffect = 'default',
    autoclose = 'off',
    icon,
    iconMaxWidth = 0.00833,
    iconPaddingRight = 0,
    iconAnimation = 'rotate 45',
    questionColor = '#000000',
    answerColor = '#000000',
    dividerColor = '#0000001F',
    iconColor = '#000000',
    questionHoverColor = '#666666',
    iconHoverColor = '#666666',
    iconActiveColor = '#000000',
    dividerHoverColor = '#000000',
    questionFontFamily,
    questionFontSettings,
    questionFontSize,
    questionLineHeight,
    questionLetterSpacing,
    questionWordSpacing,
    questionTextAppearance,
    answerFontFamily,
    answerFontSettings,
    answerFontSize,
    answerLineHeight,
    answerLetterSpacing,
    answerWordSpacing,
    answerTextAppearance,
    questionPaddingLeft = 0,
    questionPaddingTop = 0,
    questionPaddingBottom = 0,
    answerPaddingLeft = 0,
    answerPaddingRight = 0,
    answerPaddingTop = 0,
    answerPaddingBottom = 0,
  } = settings;
  const items = content ?? [];
  const [openIndices, setOpenIndices] = useState<Set<number>>(() => new Set());
  const isInteractive = !isEditor || isPreviewMode;

  useEffect(() => {
    setOpenIndices(new Set());
  }, [autoclose]);

  useEffect(() => {
    if (isEditor && !isEditMode && !isPreviewMode) {
      setOpenIndices(new Set());
    }
  }, [isEditor, isEditMode, isPreviewMode]);
  const scaled = (value: number) => scalingValue(value, isEditor ?? false);
  const questionPaddingLeftWidth = Math.max(questionPaddingLeft, PADDING_HANDLE_SIZE);
  const questionPaddingTopHeight = Math.max(questionPaddingTop, PADDING_HANDLE_SIZE);
  const questionPaddingBottomHeight = Math.max(questionPaddingBottom, PADDING_HANDLE_SIZE);
  const answerPaddingLeftWidth = Math.max(answerPaddingLeft, PADDING_HANDLE_SIZE);
  const answerPaddingRightWidth = Math.max(answerPaddingRight, PADDING_HANDLE_SIZE);
  const answerPaddingTopHeight = Math.max(answerPaddingTop, PADDING_HANDLE_SIZE);
  const answerPaddingBottomHeight = Math.max(answerPaddingBottom, PADDING_HANDLE_SIZE);
  const questionPaddingLeftMaxFraction = Math.max(0, (wrapperWidth ?? 1) - iconPaddingRight - iconMaxWidth);
  const answerPaddingLeftMaxFraction = Math.max(0, (wrapperWidth ?? 1) - answerPaddingRight);
  const answerPaddingRightMaxFraction = Math.max(0, (wrapperWidth ?? 1) - answerPaddingLeft);
  const iconPaddingRightWidth = Math.max(iconPaddingRight, PADDING_HANDLE_SIZE);
  const iconPaddingRightMaxFraction = Math.max(0, (wrapperWidth ?? 1) - questionPaddingLeft - iconMaxWidth);

  const controlsTargetIndex = useMemo(() => {
    if (openIndices.size === 0) {
      return 0;
    }

    return Math.min(...openIndices);
  }, [openIndices]);

  const isItemOpen = useCallback((index: number) => openIndices.has(index), [openIndices]);
  const entryHoverClass = isInteractive && entryHoverEffect === 'default'
    ? \`\${P}-entry-hover-default\`
    : '';
  const iconSrc = icon ?? '';
  const useCustomIcon = iconSrc !== '';
  const iconAnimSuffix = iconAnimation.replace(/^rotate /, '');
  const iconAnimClass = \`\${P}-icon-anim-\${iconAnimSuffix}\`;

  const questionTypographyCss = omitTextColors(textStylesToCss(
    resolveTextStyle(
      questionFontFamily,
      questionFontSettings,
      questionFontSize,
      questionLineHeight,
      questionLetterSpacing,
      questionWordSpacing,
      questionTextAppearance,
      questionColor,
    ),
    isEditor,
  ));
  const answerTypographyCss = omitTextColors(textStylesToCss(
    resolveTextStyle(
      answerFontFamily,
      answerFontSettings,
      answerFontSize,
      answerLineHeight,
      answerLetterSpacing,
      answerWordSpacing,
      answerTextAppearance,
      answerColor,
    ),
    isEditor,
  ));

  const questionTextClassName = getTextClassName(
    questionFontSize,
    questionLineHeight,
    \`\${P}-question\`,
    \`\${P}-text-tight-leading\`,
  );
  const answerTextClassName = getTextClassName(
    answerFontSize,
    answerLineHeight,
    \`\${P}-answer-text\`,
    \`\${P}-text-tight-leading\`,
  );
  const questionTextLeadingVars = getTextLeadingVars(questionFontSize, questionLineHeight, P, isEditor);
  const answerTextLeadingVars = getTextLeadingVars(answerFontSize, answerLineHeight, P, isEditor);

  const colorVars = buildColorVars(P, {
    questionColor,
    answerColor,
    dividerColor,
    iconColor,
    questionHoverColor,
    iconHoverColor,
    iconActiveColor,
    dividerHoverColor,
  }, COLOR_VAR_MAP, STATE_KEYS);

  const stateClass = activeEvent && activeEvent !== 'default' ? \`\${P}-state-\${activeEvent}\` : '';

  const toggleItem = useCallback((index: number) => {
    if (!isInteractive) return;

    setOpenIndices((prev) => {
      if (prev.has(index)) {
        const next = new Set(prev);
        next.delete(index);
        return next;
      }

      if (autoclose === 'on') {
        return new Set([index]);
      }

      const next = new Set(prev);
      next.add(index);
      return next;
    });
  }, [isInteractive, autoclose]);

  const scopedCss = useMemo(() => getCSS(P), [P]);
  const wrapperStyleVars = {
    [\`--\${P}-divider-width\`]: scalingValue(dividerWidth, isEditor ?? false),
    [\`--\${P}-divider-style\`]: dividerStyle,
    [\`--\${P}-icon-max-width\`]: scalingValue(iconMaxWidth, isEditor ?? false),
    ...(cellMinHeight > 0
      ? { [\`--\${P}-question-min-height\`]: scalingValue(cellMinHeight, isEditor ?? false) }
      : {}),
  } as React.CSSProperties;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: scopedCss }} />
      <div style={colorVars}>
        <div
          className={cn(
            \`\${P}-wrapper\`,
            isEditor && !isPreviewMode && \`\${P}-editor\`,
            entryHoverClass,
            stateClass,
          )}
          style={{
            width: scalingValue(wrapperWidth, isEditor ?? false),
            maxWidth: '100%',
            ...wrapperStyleVars,
          }}
        >
          {items.map((item, index) => {
            const isOpen = isItemOpen(index);
            const question = item.question?.trim() ?? '';
            const answer = item.answer;
            const hasAnswer = (answer?.length ?? 0) > 0;
            const showPaddingControls = showControls && index === controlsTargetIndex;

            return (
              <div
                key={index}
                className={cn(\`\${P}-item\`, isOpen && \`\${P}-item-open\`)}
                data-faq-item=""
              >
                <div className={\`\${P}-question-controls\`}>
                  {showPaddingControls && (
                    <>
                      <PaddingControl
                        data-controls="questionPaddingTop"
                        data-controls-static-handle=""
                        data-controls-handle-left="20"
                        data-controls-axis="y"
                        data-controls-variant="row-padding"
                        data-controls-min="0"
                        className={\`\${P}-padding-control-handle\`}
                        hitPlacement="left-y"
                        areaStyle={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: scaled(questionPaddingTopHeight),
                          zIndex: 2,
                        }}
                      />
                      <PaddingControl
                        data-controls="questionPaddingLeft"
                        data-controls-static-handle=""
                        data-controls-axis="x"
                        data-controls-variant="column-padding"
                        data-controls-min="0"
                        data-controls-max-fraction={String(questionPaddingLeftMaxFraction)}
                        className={\`\${P}-padding-control-handle\`}
                        hitPlacement="center-x"
                        areaStyle={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: scaled(questionPaddingLeftWidth),
                          height: '100%',
                          zIndex: 2,
                        }}
                      />
                      <PaddingControl
                        data-controls="iconPaddingRight"
                        data-controls-static-handle=""
                        data-controls-axis="x"
                        data-controls-variant="column-padding"
                        data-controls-reverse=""
                        data-controls-min="0"
                        data-controls-max-fraction={String(iconPaddingRightMaxFraction)}
                        className={\`\${P}-padding-control-handle\`}
                        hitPlacement="center-x"
                        areaStyle={{
                          position: 'absolute',
                          top: 0,
                          right: 0,
                          width: scaled(iconPaddingRightWidth),
                          height: '100%',
                          zIndex: 2,
                        }}
                      />
                    </>
                  )}
                  <button
                    type="button"
                    className={\`\${P}-question-button\`}
                    aria-expanded={isOpen}
                    style={{
                      ...questionTypographyCss,
                      ...questionTextLeadingVars,
                      paddingLeft: scaled(questionPaddingLeft),
                      paddingRight: scaled(iconPaddingRight),
                    }}
                    onClick={() => toggleItem(index)}
                  >
                    {questionPaddingTop > 0 && (
                      <span
                        className={\`\${P}-padding-handle\`}
                        style={{ height: scaled(questionPaddingTop) }}
                        aria-hidden="true"
                      />
                    )}
                    <span className={\`\${P}-question-row\`}>
                      <span className={questionTextClassName}>{question}</span>
                      {hasAnswer && (
                        useCustomIcon ? (
                          <span className={\`\${P}-icon \${P}-icon-custom \${iconAnimClass}\`} aria-hidden="true">
                            <SvgImage
                              url={iconSrc}
                              fill={iconColor}
                              hoverFill={iconHoverColor}
                              className={\`\${P}-icon-image\`}
                            />
                          </span>
                        ) : (
                          <span className={\`\${P}-icon \${P}-icon-default \${iconAnimClass}\`} aria-hidden="true" />
                        )
                      )}
                    </span>
                    {questionPaddingBottom > 0 && (
                      <span
                        className={\`\${P}-padding-handle\`}
                        style={{ height: scaled(questionPaddingBottom) }}
                        aria-hidden="true"
                      />
                    )}
                  </button>
                  {showPaddingControls && (
                    <PaddingControl
                      data-controls="questionPaddingBottom"
                      data-controls-static-handle=""
                      data-controls-handle-left="20"
                      data-controls-axis="y"
                      data-controls-variant="row-padding"
                      data-controls-min="0"
                      className={\`\${P}-padding-control-handle\`}
                      hitPlacement="left-y"
                      areaStyle={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: scaled(questionPaddingBottomHeight),
                        zIndex: 2,
                      }}
                    />
                  )}
                </div>
                {hasAnswer && answer && (
                  <div className={\`\${P}-panel\`} aria-hidden={!isOpen}>
                    <div className={\`\${P}-panel-inner\`}>
                      <div className={\`\${P}-answer-controls\`}>
                        {showPaddingControls && isOpen && (
                          <>
                            <PaddingControl
                              data-controls="answerPaddingTop"
                              data-controls-static-handle=""
                              data-controls-handle-left="20"
                              data-controls-axis="y"
                              data-controls-variant="row-padding"
                              data-controls-min="0"
                              className={\`\${P}-padding-control-handle\`}
                              hitPlacement="left-y"
                              areaStyle={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: scaled(answerPaddingTopHeight),
                                zIndex: 2,
                              }}
                            />
                            <PaddingControl
                              data-controls="answerPaddingLeft"
                              data-controls-static-handle=""
                              data-controls-axis="x"
                              data-controls-variant="column-padding"
                              data-controls-min="0"
                              data-controls-max-fraction={String(answerPaddingLeftMaxFraction)}
                              className={\`\${P}-padding-control-handle\`}
                              hitPlacement="center-x"
                              areaStyle={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: scaled(answerPaddingLeftWidth),
                                height: '100%',
                                zIndex: 2,
                              }}
                            />
                            <PaddingControl
                              data-controls="answerPaddingRight"
                              data-controls-static-handle=""
                              data-controls-axis="x"
                              data-controls-variant="column-padding"
                              data-controls-reverse=""
                              data-controls-min="0"
                              data-controls-max-fraction={String(answerPaddingRightMaxFraction)}
                              className={\`\${P}-padding-control-handle\`}
                              hitPlacement="center-x"
                              areaStyle={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                width: scaled(answerPaddingRightWidth),
                                height: '100%',
                                zIndex: 2,
                              }}
                            />
                          </>
                        )}
                        {answerPaddingTop > 0 && (
                          <div
                            className={\`\${P}-padding-handle\`}
                            style={{ height: scaled(answerPaddingTop) }}
                          />
                        )}
                        <div
                          className={\`\${P}-answer\`}
                          style={{
                            ...answerTypographyCss,
                            ...answerTextLeadingVars,
                            paddingLeft: scaled(answerPaddingLeft),
                            paddingRight: scaled(answerPaddingRight),
                          }}
                        >
                          <div className={answerTextClassName}>
                            <RichTextRenderer content={answer} />
                          </div>
                        </div>
                        {answerPaddingBottom > 0 && (
                          <div
                            className={\`\${P}-padding-handle\`}
                            style={{ height: scaled(answerPaddingBottom) }}
                          />
                        )}
                        {showPaddingControls && isOpen && (
                          <PaddingControl
                            data-controls="answerPaddingBottom"
                            data-controls-static-handle=""
                            data-controls-handle-left="20"
                            data-controls-axis="y"
                            data-controls-variant="row-padding"
                            data-controls-min="0"
                            className={\`\${P}-padding-control-handle\`}
                            hitPlacement="left-y"
                            areaStyle={{
                              position: 'absolute',
                              bottom: 0,
                              left: 0,
                              width: '100%',
                              height: scaled(answerPaddingBottomHeight),
                              zIndex: 2,
                            }}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
`;function o5(e){return{type:"number",scope:"layout",title:e,min:0,max:100,display:{type:"range-control"}}}let o4={fontSettings:{type:"object",display:{type:"font-settings-weight"},properties:{fontWeight:{type:"number"},fontStyle:{type:"string"}}}},o9={type:"object",version:1,content:{type:"array",display:{type:"array"},items:{type:"object",properties:{question:{type:"string",label:"Question",placeholder:"Add question...",display:{type:"text-input"}},answer:{label:"Answer",placeholder:"Add answer...",display:{type:"rich-text"}}}},default:[{question:"What are the three main parts of The Divine Comedy?",answer:[{type:"paragraph",children:[{text:"The poem is divided into Inferno, Purgatorio, and Paradiso. These three sections follow Dante’s journey through Hell, Purgatory, and Heaven."}]}]},{question:"Who guides Dante through Hell and most of Purgatory?",answer:[{type:"paragraph",children:[{text:"Dante is guided by Virgil, the ancient Roman poet. Virgil represents human reason and wisdom, but because he lived before Christianity, he cannot guide Dante all the way into Heaven."}]}]},{question:"What does the dark wood at the beginning of the poem symbolize?",answer:[{type:"paragraph",children:[{text:"The dark wood symbolizes Dante’s spiritual confusion and moral crisis. It shows that he has lost the “straight way” in life and needs guidance to return to truth and salvation."}]}]},{question:"What is “contrapasso” in Inferno?",answer:[{type:"paragraph",children:[{text:"“Contrapasso” is the principle that punishments in Hell reflect the sins committed during life. For example, people who caused division are themselves physically divided, showing how their punishment mirrors their wrongdoing."}]}]},{question:"Who guides Dante through Heaven?",answer:[{type:"paragraph",children:[{text:"Beatrice guides Dante through Paradiso. She represents divine love, grace, and spiritual understanding, helping Dante move beyond human reason toward a vision of God."}]}]},{question:"Why is The Divine Comedy important in literary history?",answer:[{type:"paragraph",children:[{text:"The Divine Comedy is important because it is one of the greatest works of world literature and helped shape the Italian language. Dante wrote it in the Tuscan dialect rather than Latin, making serious literature more accessible to ordinary readers."}]}]},{question:"What is the overall journey of The Divine Comedy about?",answer:[{type:"paragraph",children:[{text:"The poem is about Dante’s spiritual journey from sin and despair toward repentance, wisdom, and union with God. On a deeper level, it represents the soul’s path from confusion to divine truth."}]}]}]},settings:{sizing:"auto",properties:{wrapperWidth:{type:"number",scope:"layout",title:"Width",display:{type:"numeric-input"},min:0,max:9999},cellMinHeight:{type:"number",scope:"layout",title:"Min height",display:{type:"numeric-input"},min:0,max:9999},dividerWidth:{type:"number",scope:"layout",title:"Width",display:{type:"numeric-input"},min:0,max:9999},dividerStyle:{type:"string",scope:"common",title:"Style",display:{type:"toggle-cycle",enum:["solid","dashed","dotted"]}},entryHoverEffect:{type:"string",scope:"common",title:"Effect",display:{type:"toggle-cycle",enum:["none","default"]}},autoclose:{type:"string",scope:"common",title:"Autoclose",display:{type:"toggle-cycle",enum:["on","off"]}},icon:{type:["string","null"],scope:"common",display:{type:"settings-image-input"}},iconMaxWidth:{type:"number",scope:"layout",title:"Max Width",display:{type:"numeric-input"},min:0,max:9999},iconPaddingRight:o5("Icon Padding Right"),iconAnimation:{type:"string",scope:"common",title:"Icon Animation",display:{type:"toggle-cycle",enum:["rotate 180","rotate 90","rotate 45"]}},questionColor:{type:"string",scope:"common",title:"Question Default",display:{type:"palette-color-picker"}},answerColor:{type:"string",scope:"common",title:"Answer Default",display:{type:"palette-color-picker"}},dividerColor:{type:"string",scope:"common",title:"Divider Default",display:{type:"palette-color-picker"}},iconColor:{type:"string",scope:"common",title:"Icon Default",display:{type:"palette-color-picker"}},questionHoverColor:{type:"string",scope:"common",title:"Question Hover",display:{type:"palette-color-picker"}},iconHoverColor:{type:"string",scope:"common",title:"Icon Hover",display:{type:"palette-color-picker"}},iconActiveColor:{type:"string",scope:"common",title:"Icon Active",display:{type:"palette-color-picker"}},dividerHoverColor:{type:"string",scope:"common",title:"Divider Hover",display:{type:"palette-color-picker"}},questionFontFamily:{type:"string",scope:"common",title:"Font family",display:{type:"font-family-select"}},questionFontSettings:{...o4.fontSettings,scope:"common",title:"",display:{type:"font-settings-weight"}},questionFontSize:{type:"number",scope:"layout",title:"Question Font Size",display:{type:"font-size"}},questionLineHeight:{type:"number",scope:"layout",title:"Question Line Height",display:{type:"line-height-input"}},questionLetterSpacing:{type:"number",scope:"layout",title:"Question Letter Spacing",display:{type:"letter-spacing-input"}},questionWordSpacing:{type:"number",scope:"layout",title:"Question Word Spacing",display:{type:"word-spacing-input"}},questionTextAppearance:{type:"object",scope:"layout",title:"Question Text Appearance",display:{type:"text-appearance"}},answerFontFamily:{type:"string",scope:"common",title:"Font family",display:{type:"font-family-select"}},answerFontSettings:{...o4.fontSettings,scope:"common",title:"",display:{type:"font-settings-weight"}},answerFontSize:{type:"number",scope:"layout",title:"Answer Font Size",display:{type:"font-size"}},answerLineHeight:{type:"number",scope:"layout",title:"Answer Line Height",display:{type:"line-height-input"}},answerLetterSpacing:{type:"number",scope:"layout",title:"Answer Letter Spacing",display:{type:"letter-spacing-input"}},answerWordSpacing:{type:"number",scope:"layout",title:"Answer Word Spacing",display:{type:"word-spacing-input"}},answerTextAppearance:{type:"object",scope:"layout",title:"Answer Text Appearance",display:{type:"text-appearance"}},questionPaddingLeft:o5("Question Padding Left"),questionPaddingTop:o5("Question Padding Top"),questionPaddingBottom:o5("Question Padding Bottom"),answerPaddingLeft:o5("Answer Padding Left"),answerPaddingRight:o5("Answer Padding Right"),answerPaddingTop:o5("Answer Padding Top"),answerPaddingBottom:o5("Answer Padding Bottom")},defaults:{dividerStyle:"dotted",entryHoverEffect:"default",autoclose:"off",icon:"https://cdn.cntrl.site/component-assets/PlusIcon.svg",iconAnimation:"rotate 45",questionColor:"#000000",answerColor:"#000000",dividerColor:"#000000",iconColor:"#000000",questionHoverColor:"#A60239",iconHoverColor:"#A60239",iconActiveColor:"#000000",dividerHoverColor:"#A60239",questionFontFamily:"Goudy Bookletter 1911",questionFontSettings:{fontWeight:400,fontStyle:"normal"},questionLetterSpacing:0,questionWordSpacing:0,questionTextAppearance:{textTransform:"none",textDecoration:"none",fontVariant:"normal"},answerFontFamily:"Goudy Bookletter 1911",answerFontSettings:{fontWeight:400,fontStyle:"normal"},answerLetterSpacing:0,answerWordSpacing:0,answerTextAppearance:{textTransform:"none",textDecoration:"none",fontVariant:"normal"}},layoutDefaults:{m:{wrapperWidth:1,cellMinHeight:0,dividerWidth:.008,iconMaxWidth:.0533,iconPaddingRight:.08,questionFontSize:.09066,questionLineHeight:.10133,questionLetterSpacing:-.00266,answerFontSize:.0533,answerLineHeight:.064,questionPaddingLeft:.0533,questionPaddingTop:.0533,questionPaddingBottom:.0533,answerPaddingLeft:.0533,answerPaddingRight:.16,answerPaddingTop:.0533,answerPaddingBottom:.0533},t:{wrapperWidth:.651041,cellMinHeight:0,dividerWidth:.00390625,iconMaxWidth:.02604166,iconPaddingRight:.0130208,questionFontSize:.0390625,questionLineHeight:.04427,questionLetterSpacing:-91145833e-11,answerFontSize:.0234375,answerLineHeight:.026041,questionPaddingLeft:0,questionPaddingTop:.01302,questionPaddingBottom:.01302,answerPaddingLeft:.065104,answerPaddingRight:.09765625,answerPaddingTop:.026041,answerPaddingBottom:.026041},d:{wrapperWidth:.6388,cellMinHeight:0,dividerWidth:.002083,iconMaxWidth:.01388,iconPaddingRight:.01388,questionFontSize:.0333,questionLineHeight:.0333,questionLetterSpacing:-9e-4,answerFontSize:.01111,answerLineHeight:.01388,questionPaddingLeft:0,questionPaddingTop:.01111,questionPaddingBottom:.01111,answerPaddingLeft:.0625,answerPaddingRight:.1625,answerPaddingTop:0,answerPaddingBottom:.01111}},layout:["__componentName__","wrapperWidth","cellMinHeight","dividerWidth","dividerStyle","entryHoverEffect","autoclose","icon","iconMaxWidth","iconAnimation"]},panels:[{id:"general",icon:"settings",title:"General",tooltip:"General Settings",layout:["__componentName__",{type:"row",title:"",items:["wrapperWidth","cellMinHeight"]},{type:"row",title:"",items:["entryHoverEffect","autoclose"]},{type:"row",title:"Divider",items:["dividerWidth","dividerStyle"]},{type:"row",title:"Icon",items:["icon","iconMaxWidth"]},{type:"row",title:"",items:["iconAnimation"]}]},{id:"typeStyle",icon:"text-icon",title:"Type Style",tooltip:"Typography",layout:["__componentName__",{type:"group",title:"Question",items:["questionFontFamily","questionFontSettings",{type:"row",items:["questionFontSize","questionLineHeight","questionLetterSpacing","questionWordSpacing"]},"questionTextAppearance"]},{type:"group",title:"Answer",items:["answerFontFamily","answerFontSettings",{type:"row",items:["answerFontSize","answerLineHeight","answerLetterSpacing","answerWordSpacing"]},"answerTextAppearance"]}]}],paletteBookmark:{items:["questionColor","answerColor","dividerColor","iconColor","questionHoverColor","iconHoverColor","iconActiveColor","dividerHoverColor"],panelIds:["general","typeStyle"],stateItems:{default:["questionColor","answerColor","dividerColor","iconColor","questionHoverColor","dividerHoverColor","iconHoverColor","iconActiveColor"]}}},o6=e=>{let t=e.ratioValue??"1:1",i=e.reversed??!1,[n,o]=t.split(":").map(Number);return`${i?o:n} / ${i?n:o}`},o7=({enabled:e,onClose:t,animMs:i=300,isBlockedTarget:n})=>{let[r,a]=o.useState(0),[l,s]=o.useState(!1),c=o.useRef(null),d=o.useRef(0);d.current=r;let u=o.useMemo(()=>typeof window>"u"?100:Math.max(100,.2*window.innerHeight),[]),p=o.useCallback(e=>Math.max(0,1-e/(1.5*u)),[u]),m=o.useCallback(e=>Math.max(0,1-e/(.45*u)),[u]),g=o.useCallback(e=>{let t=Math.max(.88,1-e/("u">typeof window?window.innerHeight:800)*.12);return`translateY(${e}px) scale(${t})`},[]),h=o.useCallback(()=>{c.current=null},[]),f=o.useCallback(()=>{s(!0),a(0),window.setTimeout(()=>s(!1),i),h()},[i,h]),y=o.useCallback(()=>{let e="u">typeof window?window.innerHeight:800;s(!0),a(e),window.setTimeout(()=>{t(),h(),s(!1)},Math.min(i,200))},[i,t,h]),v=o.useCallback(t=>{!e||l||"touch"===t.pointerType&&(null!=n&&n(t.target)||(c.current={startX:t.clientX,startY:t.clientY,isLocked:null,pointerId:t.pointerId}))},[e,l,n]),x=o.useCallback(t=>{let i=c.current;if(!e||!i||"touch"!==t.pointerType||i.pointerId!==t.pointerId)return;let n=t.clientX-i.startX,o=t.clientY-i.startY;if(null===i.isLocked){if(8>Math.abs(n)&&8>Math.abs(o))return;if(o>0&&o>Math.abs(n))i.isLocked=!0,t.currentTarget.setPointerCapture(t.pointerId);else{i.isLocked=!1,h();return}}if(!i.isLocked)return;t.preventDefault();let r=Math.max(0,o);d.current=r,a(r)},[e,h]),b=o.useCallback(t=>{let i=c.current;if(!e||!i||"touch"!==t.pointerType||i.pointerId!==t.pointerId)return;let n=!0===i.isLocked;if(t.currentTarget.hasPointerCapture(t.pointerId)&&t.currentTarget.releasePointerCapture(t.pointerId),!n)return void h();t.clientY-i.startY>=u?y():f()},[u,y,e,h,f]),w=o.useCallback(e=>{b(e)},[b]),$=o.useCallback(e=>{b(e)},[b]),S=r>0,C=l?`transform ${i}ms ease`:"none",P=l?`opacity ${i}ms ease`:"none",L=r>0||l;return{isSwipeDragging:S,backdropStyle:{opacity:p(r),transition:P},mediaAreaStyle:{transform:g(r),transition:C,touchAction:S?"none":void 0,willChange:S?"transform":void 0},overlayContentStyle:L?{opacity:m(r),transition:P}:void 0,swipeHandlers:e?{onPointerDown:v,onPointerMove:x,onPointerUp:w,onPointerCancel:$}:{},dismissAreaStyle:e?{touchAction:S?"none":"pan-x"}:void 0}},o8=()=>{o.useEffect(()=>{let e=window.scrollY,t=document.body.style.overflow,i=document.body.style.position,n=document.body.style.top,o=document.body.style.width,r=document.documentElement.style.overflow;document.body.style.overflow="hidden",document.body.style.position="fixed",document.body.style.top=`-${e}px`,document.body.style.width="100%",document.documentElement.style.overflow="hidden";let a=e=>{let t=e.target;t instanceof Element&&t.closest("[data-lightbox-scrollable]")||e.preventDefault()};return document.addEventListener("touchmove",a,{passive:!1}),()=>{document.removeEventListener("touchmove",a),document.body.style.overflow=t,document.body.style.position=i,document.body.style.top=n,document.body.style.width=o,document.documentElement.style.overflow=r,window.scrollTo(0,e)}},[])},re=["title1","title2","title3"],rt={title1:"1",title2:"2",title3:"3"},ri={title1:"title1Color",title2:"title2Color",title3:"title3Color"},rn={title1:.02,title2:.02,title3:.02},ro=e=>`max(${e}, 20px)`,rr=(e,t)=>`${e}${t.charAt(0).toUpperCase()}${t.slice(1)}`,ra=(e,t)=>{if(e<=0)return[];let i=t.slice(0,e),n=i.reduce((e,t)=>e+t,0);if(n<=1)return i;let{widths:o}=[...i].reverse().reduce(({overflow:e,widths:t},i)=>{if(e<=0||i<=0)return{overflow:e,widths:[i,...t]};let n=Math.min(e,i);return{overflow:e-n,widths:[i-n,...t]}},{overflow:n-1,widths:[]});return o},rl=(e,t)=>ra(e,t),rs=(e,t)=>Math.max(1-t.filter((t,i)=>i!==e).reduce((e,t)=>e+t,0),0),rc=(e,t)=>{let i=e.map(e=>t[e.widthKey]??0);return{resolved:ra(e.length,i),effective:rl(e.length,i)}},rd=(e,t)=>{let i=i=>e[rr(t,i)];return{fontFamily:i("fontFamily")??"Arial",fontSettings:i("fontSettings")??{fontWeight:400,fontStyle:"normal"},fontSize:i("fontSize"),lineHeight:i("lineHeight"),letterSpacing:i("letterSpacing")??0,wordSpacing:i("wordSpacing")??0,textAlign:i("textAlign")??"left",textAppearance:i("textAppearance"),color:e[ri[t]]}},ru=(e,t,i)=>{var n,o;return t2({fontSettings:{fontFamily:t.fontFamily,fontWeight:(null==(n=t.fontSettings)?void 0:n.fontWeight)??400,fontStyle:(null==(o=t.fontSettings)?void 0:o.fontStyle)??"normal"},fontSize:t.fontSize??rn[e],lineHeight:t.lineHeight,letterSpacing:t.letterSpacing,wordSpacing:t.wordSpacing,textAlign:t.textAlign,textAppearance:t.textAppearance,color:t.color??"#ffffff"},i)},rp=({prefix:e,images:t,settings:i,isEditor:r,isEditMode:l,isPreviewMode:s,onClose:c})=>{let{backgroundColor:d,thumbnailSize:u,thumbnailGap:p,thumbnailMarginBottom:m,imageGap:g,closeIcon:h,closeIconMaxWidth:f,closeIconColor:y,closeIconHoverColor:v,thumbnailTrigger:x,thumbnailVisibility:b,thumbnailObjectFit:w,thumbnailActive:$,thumbnailActiveColor:S,title1Width:C,title2Width:P,title3Width:L,title1MarginLeft:T=0,title2MarginLeft:M=0,title3MarginLeft:E=0,titleRowMarginBottom:I=0,titleHeaderLayout:k="desktop",contentMarginTop:R,iconMarginLeft:F}=i,A=e=>a.scalingValue(e,r??!1),W=A(u??i.thumnailSize??.03),H=A(p),_=A(m??.02),N=A(g??0),j=A(R??0),z=ro(j),B=A(F??0),[O,D]=o.useState(0),V=o.useRef(O);V.current=O;let{title1:q,title2:G,title3:K}=(e=>{if(!e)return{title1:"",title2:"",title3:""};if(e.title1||e.title2||e.title3)return{title1:e.title1??"",title2:e.title2??"",title3:e.title3??""};let t=(e=>{if(!Array.isArray(e)||0===e.length)return{};let t=e.find(e=>(null==e?void 0:e.type)==="paragraph")??e[0],i=null==t?void 0:t.children;if(!Array.isArray(i))return{};let n=i.map(e=>"string"==typeof(null==e?void 0:e.text)?e.text.trim():"").filter(Boolean);return{title1:n[0],title2:n[1],title3:n[2]}})(e.text);return{title1:t.title1??"",title2:t.title2??"",title3:t.title3??""}})(t[O]),U=ru("title1",rd(i,"title1"),r),X=ru("title2",rd(i,"title2"),r),Y=ru("title3",rd(i,"title3"),r),J="mobile"===k,Z=!l&&(!r||s),Q="cover"===w.display,ee=Q?{"--image-aspect-ratio":o6(w)}:void 0,et=!!(q||G||K),ei=o.useMemo(()=>((e,t,i,n,o,r,a)=>{let l=[];return t&&l.push({prefix:"title1",widthKey:"title1Width",className:`${e}-title1`,style:o,text:t}),i&&l.push({prefix:"title2",widthKey:"title2Width",marginLeftKey:"title2MarginLeft",className:`${e}-title2`,style:r,text:i}),n&&l.push({prefix:"title3",widthKey:"title3Width",marginLeftKey:"title3MarginLeft",className:`${e}-title3`,style:a,text:n}),l})(e,q,G,K,U,X,Y),[e,O,q,G,K,U,X,Y]),en=o.useMemo(()=>({title1Width:C,title2Width:P,title3Width:L}),[C,P,L]),eo=o.useMemo(()=>ei.map(e=>en[e.widthKey]),[ei,en]),er=o.useMemo(()=>ra(ei.length,eo),[ei.length,eo]),ea=o.useMemo(()=>rl(ei.length,eo),[ei.length,eo]),el=o.useMemo(()=>ei.filter(e=>"title1"===e.prefix),[ei]),es=o.useMemo(()=>ei.filter(e=>"title2"===e.prefix||"title3"===e.prefix),[ei]),ec=o.useMemo(()=>rc(el,en),[el,en]),ed=o.useMemo(()=>rc(es,en),[es,en]),eu=o.useCallback((e,t)=>{let i=ei.indexOf(e);if(!J||"single-row"===t)return{effectiveWidth:ea[i]??0,resolvedWidth:er[i]??0,maxWidth:rs(i,er)};if("two-row-top"===t){let t=el.indexOf(e);return{effectiveWidth:ec.effective[t]??0,resolvedWidth:ec.resolved[t]??0,maxWidth:rs(t,ec.resolved)}}let n=es.indexOf(e);return{effectiveWidth:ed.effective[n]??0,resolvedWidth:ed.resolved[n]??0,maxWidth:rs(n,ed.resolved)}},[es,ed,ea,er,ei,el,ec,J]),ep=o.useCallback(e=>a.scalingValue(e,r??!1),[r]),em=ep(I??0),eg=o.useMemo(()=>({title1MarginLeft:T,title2MarginLeft:M,title3MarginLeft:E}),[T,M,E]),eh=o.useCallback(e=>ei.slice(0,e+1).reduce((e,t,i)=>e+(null!=t&&t.marginLeftKey?eg[t.marginLeftKey]??0:0)+(er[i]??0),0)+(J?0:T??0),[ei,eg,er,J,T]),ef=o.useCallback(()=>J?0:T??0,[J,T]),ey=o.useCallback(e=>es.slice(0,e).reduce((e,t,i)=>e+(t.marginLeftKey?eg[t.marginLeftKey]??0:0)+(ed.resolved[i]??0),0),[es,ed.resolved,eg]),ev=o.useCallback(e=>{let t=es[e];return ey(e)+(t.marginLeftKey?eg[t.marginLeftKey]??0:0)+(ed.resolved[e]??0)},[es,ed.resolved,ey,eg]),ex=(t,i)=>{let o=t.marginLeftKey?eg[t.marginLeftKey]??0:0,{effectiveWidth:r,resolvedWidth:a,maxWidth:s}=eu(t,i),c=l&&"two-row-top"===i;return n.jsxs("div",{className:`${e}-title-cell`,"data-title":t.prefix,style:{..."single-row"===i?{gridArea:t.prefix}:{},width:ep(r),...o>0?{marginLeft:ep(o)}:{}},children:[n.jsx("p",{className:t.className,style:t.style,children:t.text}),c&&t.marginLeftKey&&n.jsx("div",{"data-controls":t.marginLeftKey,"data-controls-axis":"x","data-controls-min":"0","data-controls-max-fraction":String(a),style:{position:"absolute",top:0,left:ep(-o),width:`max(${ep(o)}, 10px)`,height:"100%",pointerEvents:"auto"}}),c&&n.jsx("div",{"data-controls":t.widthKey,"data-controls-axis":"x","data-controls-max-fraction":String(s),"data-controls-variant":"column-width",className:`${e}-title-resize-handle`,style:{position:"absolute",top:0,right:ep(-.004/2),width:ep(.004),height:"100%",pointerEvents:"auto"}})]},t.className)},eb=o.useRef(null),ew=o.useRef(null),e$=o.useRef(null),eS=o.useRef(null),eC=o.useRef([]),eP=o.useRef([]),eL=o.useRef(0),eT=o.useRef(null),eM=o.useRef({isActive:!1,startX:0,scrollLeft:0,startActiveIndex:0,hasMoved:!1}),eE=o.useRef(null),eI=o.useRef(null),ek=o.useRef(0),eR=o.useRef("forward"),eF=o.useRef(0),eA=o.useRef(null),eW=o.useRef(!1),eH=t.length>1&&(!l||!!s),e_=eH?3:1,eN=o.useMemo(()=>Array.from({length:e_},()=>t).flat(),[t,e_]),[ej,ez]=o.useState(!1),[eB,eO]=o.useState(!1),[eD,eV]=o.useState(!0),eq=o.useRef(null),eG=o.useRef(null),eK=o.useRef(!1),eU=o.useRef(!1),eX=o.useRef(null),eY=o.useRef(null),eJ=Z&&!eD,eZ=o.useCallback(()=>{Z&&(eV(!0),eY.current&&clearTimeout(eY.current),eY.current=setTimeout(()=>{eM.current.isActive||eV(!1)},3e3))},[Z]),eQ=o.useCallback(()=>{l||eU.current||(eU.current=!0,eO(!1),eX.current=setTimeout(()=>{c()},300))},[l,c]),e0=()=>n.jsxs("div",{className:`${e}-close-icon`,"data-overlay-content-hidden":eJ?"true":"false",style:{width:a.scalingValue(f??0,r),height:a.scalingValue(f??0,r),marginRight:B,"--close-icon-hover-color":v},children:[n.jsx("button",{type:"button",className:`${e}-close-icon-inner`,onClick:eQ,"aria-label":"Close",children:n.jsx(t4,{url:h,fill:y,hoverFill:r&&!s?y:v,className:`${e}-close-icon-img`})}),l&&n.jsx("div",{"data-controls":"iconMarginLeft","data-controls-axis":"x","data-controls-reverse":"",className:`${e}-control`,style:{position:"absolute",top:0,left:"100%",width:B,height:"100%",pointerEvents:"auto"}})]}),e1=(e="two-row")=>n.jsx("div",{..."two-row"===e&&l?{"data-controls":"title1MarginLeft","data-controls-axis":"x"}:{},style:{width:ep(T??0),flexShrink:0,..."single-row"===e?{gridArea:"margin"}:{alignSelf:"stretch"},..."two-row"===e&&l?{pointerEvents:"auto"}:{}}}),e2=o.useCallback(t=>!!(t.closest("[data-controls]")||t.closest(`.${e}-thumbnails`)||t.closest(`.${e}-close-icon`)),[e]),{isSwipeDragging:e3,backdropStyle:e5,mediaAreaStyle:e4,overlayContentStyle:e9,swipeHandlers:e6,dismissAreaStyle:e7}=o7({enabled:Z??!1,onClose:eQ,animMs:300,isBlockedTarget:e2}),e8=()=>{if(!eH||0===t.length)return eL.current=0,0;let e=eP.current[0],i=eP.current[t.length];if(!e||!i)return eL.current;let n=i.offsetLeft-e.offsetLeft;return n>0&&(eL.current=n),eL.current},te=(e=!1)=>{if(!eH)return;let t=ew.current,i=e8();!t||i<=0||i<.25*t.clientWidth||(t.scrollLeft<=0?(t.scrollLeft+=i,e&&(eM.current.scrollLeft+=i),eW.current&&(eF.current+=i)):t.scrollLeft>=2*i&&(t.scrollLeft-=i,e&&(eM.current.scrollLeft-=i),eW.current&&(eF.current-=i)))},tt=(e,i=(e=>null==(e=ew.current)?void 0:e.scrollLeft)()??0)=>{if(!eH)return e;let n=t.length+e,o=1/0;for(let r=0;r<e_;r++){let a=r*t.length+e,l=eP.current[a];if(!l)continue;let s=Math.abs(l.offsetLeft-i);s<o&&(o=s,n=a)}return n},ti=e=>{let t=ew.current;return!!e&&!!t&&e.offsetWidth>t.clientWidth+1},tn=e=>{let t=ew.current;if(!e||!t||!ti(e))return!1;let i=e.offsetLeft,n=i+e.offsetWidth;return t.scrollLeft>=i-1&&t.scrollLeft+t.clientWidth<=n+1},to=(e=(e=>null==(e=ew.current)?void 0:e.scrollLeft)()??0)=>{for(let e=0;e<eP.current.length;e+=1){let t=eP.current[e];if(t&&tn(t))return e}let t={flatIndex:0,distance:1/0};return eP.current.forEach((i,n)=>{if(!i)return;let o=Math.abs(i.offsetLeft-e);o<t.distance&&(t={flatIndex:n,distance:o})}),t.flatIndex},tr=e=>{ew.current&&eP.current.forEach(t=>{t&&(t.style.scrollSnapAlign=ti(t)&&"backward"===e?"end":"start")})},ta=o.useCallback((e=!1)=>{if("on"!==b||l)return;let t=eS.current,i=V.current,n=eC.current[i];if(!t||!n||t.scrollWidth<=t.clientWidth)return;let o=t.scrollLeft,r=o+t.clientWidth,a=n.offsetLeft,s=a+n.offsetWidth;if(a>=o&&s<=r)return;let c=t.scrollWidth-t.clientWidth,d=o;if(e||null!==eq.current)d=s>r?s-t.clientWidth:a;else{let e=eC.current[i-1],t=eC.current[i+1],l=e?n.offsetLeft-e.offsetLeft:t?t.offsetLeft-n.offsetLeft:n.offsetWidth;s>r?d+=l:a<o&&(d-=l)}t.scrollLeft=Math.max(0,Math.min(c,d))},[l,b]),tl=o.useCallback((e=!1)=>{e&&(eK.current=!0),null===eG.current&&(eG.current=requestAnimationFrame(()=>{eG.current=null;let e=eK.current;eK.current=!1,ta(e)}))},[ta]),ts=o.useCallback(e=>{if(e===V.current)return;let i=V.current;V.current=e;let n=Math.abs(e-i)>1,o=eH&&t.length>1&&(i===t.length-1&&0===e||0===i&&e===t.length-1);D(e),tl(n||o)},[t.length,eH,tl]),tc=()=>{if(!ew.current||0===t.length||null!==eq.current||eM.current.isActive&&eM.current.hasMoved)return;let e=to(ew.current.scrollLeft)%t.length;e!==V.current&&ts(e)},td=()=>{eq.current=null},tu=e=>{let t=ew.current;t&&(t.style.scrollSnapType=e?"":"none")},tp=()=>{var e;null==(e=eI.current)||e.call(eI),eI.current=null},tm=()=>{null!==eA.current&&(cancelAnimationFrame(eA.current),eA.current=null),eW.current=!1},tg=()=>{let e=ew.current;if(!e){eA.current=null,eW.current=!1;return}let t=eF.current-e.scrollLeft;if(.5>Math.abs(t)){e.scrollLeft=eF.current,te(),tc(),eA.current=null,eW.current=!1;return}e.scrollLeft+=.05*t,te(),tc(),eZ(),eA.current=requestAnimationFrame(tg)},th=()=>{let e=e$.current;e&&(e.style.transition="",e.style.transform="",e.style.willChange="")},tf=(e,t,i,n)=>{th(),e.scrollLeft=t,ek.current=e.scrollLeft,te(),void 0!==i?(V.current=i,D(i)):tc(),tu(!0),null==n||n()},ty=(e,{behavior:t="smooth",activeIndex:i,onComplete:n}={})=>{let o=ew.current,r=e$.current;if(!o||!r)return;if(tm(),tp(),tu(!1),"auto"===t)return void tf(o,e,i,n);let a=((e,t,i,n)=>t+(i-t)*Math.min(Math.abs(e)/Math.max(n,1),1))(Math.abs(e-o.scrollLeft),900,1500,.55*o.clientWidth);eI.current=((e,t,i,{duration:n,easing:o,onComplete:r})=>{let a=e.scrollLeft,l=i-a,s=a-i,c=(i,n)=>{(e=>{e.style.transition="",e.style.transform="",e.style.willChange=""})(t),e.scrollLeft=i,n&&(null==r||r())};if(.5>Math.abs(l))return c(i,!0),()=>{};let d=!1,u=0,p=()=>{t.removeEventListener("transitionend",m),clearTimeout(u)},m=e=>{e.target!==t||"transform"!==e.propertyName||d||(d=!0,p(),c(i,!0))};return t.addEventListener("transitionend",m),t.style.willChange="transform",t.style.transition="none",t.style.transform="translate3d(0, 0, 0)",t.offsetHeight,t.style.transition=`transform ${n}ms ${o}`,t.style.transform=`translate3d(${s}px, 0, 0)`,u=window.setTimeout(()=>{d||(d=!0,p(),c(i,!0))},n+64),()=>{d||(d=!0,p(),c(a-(e=>{let t=getComputedStyle(e).transform;return"none"===t?0:new DOMMatrixReadOnly(t).m41})(t),!1))}})(o,r,e,{duration:a,easing:"cubic-bezier(0.16, 1, 0.3, 1)",onComplete:()=>{eI.current=null,tf(o,e,i,n)}})},tv=(e,i="smooth")=>{let n=ew.current;if(!n||0===t.length)return;let o=tt(e,n.scrollLeft),r=eP.current[o];r&&("smooth"===i?eq.current=e:eq.current=null,V.current=e,D(e),tl(!0),ty(r.offsetLeft,{behavior:i,activeIndex:e,onComplete:"smooth"===i?td:void 0}))},tx=()=>{eE.current&&(window.removeEventListener("pointerup",eE.current),window.removeEventListener("pointercancel",eE.current),eE.current=null)},tb=e=>{if(!eM.current.isActive)return;tx();let i=ew.current;if(!i)return;let{scrollLeft:n,startActiveIndex:o,hasMoved:r}=eM.current,a=i.scrollLeft;te(!0),eM.current={isActive:!1,startX:0,scrollLeft:0,startActiveIndex:0,hasMoved:!1},ez(!1),void 0!==e&&i.hasPointerCapture(e)&&i.releasePointerCapture(e),r?((e,i="smooth",n,o)=>{let r=ew.current;if(!r||0===t.length)return;let a=(o??r.scrollLeft)-e,l=to(e),s=eP.current[l];if(tn(s)){tu(!0),tc();return}let c=eP.current[l+1],d=s?c?c.offsetLeft-s.offsetLeft:s.offsetWidth:0;if((d>0?a>.3*d?1:a<-(.3*d)?-1:0:0)!=0){let a=n??l%t.length;tv(((e,i,n)=>{let o=e-i,r=to(i),a=eP.current[r];if(tn(a))return to(e)%t.length;let l=eP.current[r+1],s=a?l?l.offsetLeft-a.offsetLeft:a.offsetWidth:0,c=s>0?o>.3*s?1:o<-(.3*s)?-1:0:0;return 0===c?n:eH?(n+c+t.length)%t.length:Math.max(0,Math.min(t.length-1,n+c))})(o??r.scrollLeft,e,a),i);return}let u=o??r.scrollLeft,p=to(u),m=eP.current[p];if(m&&1>Math.abs(m.offsetLeft-u)){tu(!0),tc();return}((e="smooth")=>{let i=ew.current;if(!i||0===t.length)return;let n=to()%t.length,o=tt(n,i.scrollLeft),r=eP.current[o];r&&ty(r.offsetLeft,{behavior:e,activeIndex:n})})("auto")})(n,"smooth",o,a):(tu(!0),tc()),eZ()},tw=e=>{if(Z){if("touch"===e.pointerType)return void("pointerup"===e.type?((e,i)=>{let n=eT.current;eT.current=null,n&&(((e,i,n,o,r)=>{let a=n-e,l=Math.abs(a),s=Math.abs(o-i);if(l<50||l<=s)return;let c=a<0?1:-1,d=eH?(r+c+t.length)%t.length:Math.max(0,Math.min(t.length-1,r+c));return d!==r&&tv(d)})(n.startX,n.startY,e,i,n.startActiveIndex),eZ())})(e.clientX,e.clientY):eT.current=null);"mouse"===e.pointerType&&tb(e.pointerId)}};return o8(),o.useEffect(()=>{let e=requestAnimationFrame(()=>eO(!0));return()=>{cancelAnimationFrame(e),tp(),tx(),null!==eG.current&&(cancelAnimationFrame(eG.current),eG.current=null),eX.current&&clearTimeout(eX.current),eY.current&&clearTimeout(eY.current)}},[]),o.useEffect(()=>{if(!Z)return void eV(!0);eZ();let e=eb.current;if(!e)return;let t=()=>eZ();return e.addEventListener("pointermove",t),e.addEventListener("pointerdown",t),()=>{e.removeEventListener("pointermove",t),e.removeEventListener("pointerdown",t),eY.current&&clearTimeout(eY.current)}},[Z,eZ]),o.useEffect(()=>{let e=e=>{"Escape"===e.key&&eQ()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[eQ]),o.useLayoutEffect(()=>{e8()},[N,t.length,eH]),o.useLayoutEffect(()=>{l||tv(V.current,"auto")},[N,l]),o.useLayoutEffect(()=>{tv(0,"auto")},[t.length,eH]),o.useEffect(()=>{let e=ew.current;if(!e||l||!Z)return;let t=t=>{if(t.preventDefault(),Math.abs(t.deltaY)<=Math.abs(t.deltaX))return;let i=1===t.deltaMode?16:2===t.deltaMode?e.clientHeight:1,n=t.deltaY*i*2;0!==n&&(tp(),eW.current||(eW.current=!0,eF.current=e.scrollLeft,eq.current=null,tu(!1)),eF.current+=n,eH||(eF.current=Math.max(0,Math.min(e.scrollWidth-e.clientWidth,eF.current))),eZ(),null===eA.current&&(eA.current=requestAnimationFrame(tg)))};return e.addEventListener("wheel",t,{passive:!1}),()=>{e.removeEventListener("wheel",t),tm()}},[l,Z,eH]),o.useEffect(()=>{let e=ew.current;if(!e)return;let t=()=>{te(eM.current.isActive);let t=e.scrollLeft,i=t-ek.current;ek.current=t;let n=eL.current>0?.5*eL.current:1/0;if(0!==i&&Math.abs(i)<n){let e=i>0?"forward":"backward";e!==eR.current&&(eR.current=e,tr(e))}eM.current.isActive&&eM.current.hasMoved||tc()};e.addEventListener("scroll",t,{passive:!0});let i=new ResizeObserver(()=>{e8(),te(eM.current.isActive),tr(eR.current),tc()});return i.observe(e),()=>{tp(),e.removeEventListener("scroll",t),i.disconnect()}},[t.length,eH]),n.jsxs("div",{"data-selection":"none",className:`${e}-lightbox${r?` ${e}-lightbox-editor`:""}${l?` ${e}-lightbox-edit-mode`:""}`,onClick:()=>{e3||eQ()},role:"dialog","aria-modal":"true","aria-label":"Image gallery",style:{opacity:+!!eB,transition:"opacity 300ms ease",pointerEvents:eB?"auto":"none"},children:[n.jsx("div",{className:`${e}-lightbox-backdrop`,style:{backgroundColor:d,...e5}}),n.jsxs("div",{ref:eb,className:`${e}-lightbox-dismiss-area`,style:e7,...e6,children:[n.jsx("div",{className:`${e}-lightbox-content`,style:e4,onClick:e=>e.stopPropagation(),children:n.jsx("div",{ref:ew,className:`${e}-lightbox-strip`,"data-lightbox-scrollable":"","data-mouse-draggable":Z&&t.length>0?"true":"false","data-mouse-dragging":ej?"true":"false",onPointerDown:e=>{if(!Z)return;if("touch"===e.pointerType){if(tm(),tu(!0),e2(e.target))return;eT.current={startX:e.clientX,startY:e.clientY,startActiveIndex:V.current};return}if("mouse"!==e.pointerType||0!==e.button||e2(e.target))return;let t=ew.current;if(!t)return;tm(),tp(),th(),eq.current=null,eM.current={isActive:!0,startX:e.clientX,scrollLeft:t.scrollLeft,startActiveIndex:V.current,hasMoved:!1},tu(!1),eZ(),t.setPointerCapture(e.pointerId),tx();let i=e=>{"mouse"===e.pointerType&&tb(e.pointerId)};eE.current=i,window.addEventListener("pointerup",i),window.addEventListener("pointercancel",i)},onPointerMove:e=>{if(!Z||"mouse"!==e.pointerType)return;let t=ew.current;if(!t||!eM.current.isActive)return;if(0===e.buttons)return void tb(e.pointerId);let i=e.clientX-eM.current.startX;Math.abs(i)>1&&(eM.current.hasMoved=!0,ez(!0)),eM.current.hasMoved&&(e.preventDefault(),t.scrollLeft=eM.current.scrollLeft-i,te(!0),tc(),eZ())},onPointerUp:tw,onPointerCancel:tw,onLostPointerCapture:e=>{Z&&"mouse"===e.pointerType&&tb(e.pointerId)},children:n.jsx("div",{ref:e$,className:`${e}-lightbox-strip-track`,style:{gap:N},children:eN.map((i,o)=>{let r=i.image.objectFit??"contain",a=o%t.length,s=Math.floor(o/t.length),c=ro(N),d=`calc(-0.5 * (${c} + ${N}))`;return n.jsxs("div",{ref:e=>eP.current[o]=e,className:`${e}-strip-item`,style:{height:"mobile"===k?"calc(0.75 * var(--cntrl-viewport-height, 100vh))":"100%"},children:[n.jsx("img",{src:i.image.url,draggable:!1,style:{display:"block",maxWidth:"100%",height:"100%",objectFit:r}}),l&&a<t.length-1&&0===s&&n.jsx("div",{"data-controls":"imageGap","data-controls-axis":"x",style:{position:"absolute",top:0,right:d,width:c,height:"100%",pointerEvents:"auto",zIndex:3}})]},`${s}-${i.image.url}-${a}`)})})})}),n.jsxs("div",{className:`${e}-lightbox-content-inner`,"data-overlay-content-hidden":eJ?"true":"false",style:e9,children:[n.jsx("div",{style:{position:"relative",width:"100%",height:j,flexShrink:0,pointerEvents:"none"},children:l&&n.jsx("div",{"data-controls":"contentMarginTop","data-controls-axis":"y","data-controls-handle-left-fraction":"0.05",style:{position:"absolute",left:0,right:0,top:0,height:z,pointerEvents:"auto",zIndex:3}})}),n.jsx("div",{style:{display:"flex",flexDirection:"row",width:"100%",flex:1,minHeight:0,pointerEvents:"none"},children:n.jsx("div",{className:`${e}-lightbox-content-area${J?` ${e}-lightbox-content-area-stacked`:""}`,children:(et||h)&&n.jsx("div",{className:`${e}-header ${J?`${e}-header-two-row`:`${e}-header-single-row`}`,children:J?(()=>{let t=ei.find(e=>"title1"===e.prefix),i=ei.filter(e=>"title2"===e.prefix||"title3"===e.prefix),o=i.length>0||l||(I??0)>0;return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:`${e}-header-row-top`,children:[(T??0)>0||l?e1():null,t&&ex(t,"two-row-top"),h&&e0()]}),o?n.jsxs("div",{className:`${e}-header-row-bottom-wrap`,children:[i.length>0?n.jsxs("div",{className:`${e}-header-row-bottom`,children:[i.map(e=>ex(e,"two-row-bottom")),l&&n.jsxs(n.Fragment,{children:[es.flatMap((e,t)=>{if(!e.marginLeftKey)return[];let i=eg[e.marginLeftKey]??0,o=ey(t),{resolvedWidth:r}=eu(e,"two-row-bottom");return n.jsx("div",{"data-controls":e.marginLeftKey,"data-controls-axis":"x","data-controls-min":"0","data-controls-max-fraction":String(r),style:{position:"absolute",top:0,left:ep(o),width:`max(${ep(i)}, 10px)`,height:"100%",pointerEvents:"auto"}},e.marginLeftKey)}),es.map((t,i)=>{let{maxWidth:o}=eu(t,"two-row-bottom"),r=ev(i)-.002;return n.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none"},children:n.jsx("div",{"data-controls":t.widthKey,"data-controls-axis":"x","data-controls-max-fraction":String(o),"data-controls-variant":"column-width",className:`${e}-title-resize-handle`,style:{position:"absolute",top:0,left:ep(r),width:ep(.004),height:"100%",pointerEvents:"auto"}})},`${t.widthKey}-junction`)})]})]}):null,n.jsx("div",{"data-controls":l?"titleRowMarginBottom":void 0,"data-controls-axis":l?"y":void 0,"data-controls-reverse":l?"":void 0,className:l?`${e}-control`:void 0,style:{height:em,width:"100%",flexShrink:0,pointerEvents:l?"auto":"none"}})]}):null]})})():et||h?n.jsxs(n.Fragment,{children:[(T??0)>0||l?e1("single-row"):null,ei.map(e=>ex(e,"single-row")),l?n.jsxs(n.Fragment,{children:[(()=>{let e=J?-1:ei.findIndex(e=>"title1"===e.prefix),t=!J&&(l||(T??0)>0)?(()=>{let t=T??0,i=e>=0?er[e]:C??0;return n.jsx("div",{"data-controls":"title1MarginLeft","data-controls-axis":"x","data-controls-min":"0","data-controls-max-fraction":String(i),style:{position:"absolute",top:0,left:0,width:`max(${ep(t)}, 10px)`,height:"100%",pointerEvents:"auto"}},"title1MarginLeft")})():null,i=ei.flatMap((e,t)=>{if(!e.marginLeftKey)return[];let i=eg[e.marginLeftKey]??0,o=ei.slice(0,t).reduce((e,t,i)=>e+(null!=t&&t.marginLeftKey?eg[t.marginLeftKey]??0:0)+(er[i]??0),0)+ef();return n.jsx("div",{"data-controls":e.marginLeftKey,"data-controls-axis":"x","data-controls-min":"0","data-controls-max-fraction":String(er[t]),style:{position:"absolute",top:0,left:ep(o),width:`max(${ep(i)}, 10px)`,height:"100%",pointerEvents:"auto"}},e.marginLeftKey)});return t?[t,...i]:i})(),ei.map((t,i)=>{let o=rs(i,er),r=eh(i)-.002;return n.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none"},children:n.jsx("div",{"data-controls":t.widthKey,"data-controls-axis":"x","data-controls-max-fraction":String(o),"data-controls-variant":"column-width",className:`${e}-title-resize-handle`,style:{position:"absolute",top:0,left:ep(r),width:ep(.004),height:"100%",pointerEvents:"auto"}})},`${t.widthKey}-junction`)})]}):null,h?e0():null]}):null})})})]}),t.length>1&&"on"===b&&(()=>{let i=ro(_),o=`calc(-0.5 * (${_} + ${i}))`;return n.jsx("div",{className:`${e}-thumbnails-wrap`,style:{bottom:_},children:n.jsx("div",{ref:eS,className:`${e}-thumbnails`,"data-lightbox-scrollable":"",onClick:e=>e.stopPropagation(),children:n.jsxs("div",{className:`${e}-thumbnails-track`,"data-thumbnail-active":$,style:{gap:H,"--thumbnail-active-color":S},children:[t.map((i,o)=>{let r=ro(H),a=`calc(-0.5 * (${r} + ${H}))`;return n.jsxs("div",{ref:e=>{eC.current[o]=e},style:{position:"relative",flex:"0 0 auto"},children:[n.jsx("button",{type:"button",className:`${e}-thumb`,"data-active":O===o?"true":"false",onClick:()=>Z&&"click"===x&&tv(o),onMouseEnter:()=>Z&&"hover"===x&&tv(o),"aria-label":i.image.name?`View ${i.image.name}`:`View image ${o+1}`,"aria-current":O===o?"true":void 0,children:n.jsx("img",{className:`${e}-thumb-image${Q?` ${e}-thumb-image-cover`:""}`,src:i.image.url,alt:"",draggable:!1,style:{...ee,maxWidth:W,maxHeight:W,width:"cover"===w.display?"auto":"100%",height:"auto",objectFit:"cover"===w.display?"cover":"contain"}})}),l&&o<t.length-1&&n.jsx("div",{"data-controls":"thumbnailGap","data-controls-axis":"x",style:{position:"absolute",top:0,right:a,width:r,height:"100%",pointerEvents:"auto",zIndex:3}})]},`thumb-${i.image.url}-${o}`)}),l&&n.jsx("div",{"data-controls":"thumbnailMarginBottom","data-controls-axis":"y","data-controls-reverse":l?"":void 0,style:{position:"absolute",left:0,right:0,bottom:o,height:i,pointerEvents:"auto",zIndex:3}})]})})})})()]})]})},rm=`import { useEffect, useRef, useState, type MouseEvent } from 'react';
import { createPortal } from 'react-dom';
import { CommonComponentProps } from '../props';
import { useScopedStyles } from '../utils/useScopedStyles';
import { getAspectRatio, isImageRatioCover, type ImageRatioFit } from '../utils/imageFitStyles';
import type { TextStyles } from '../utils/textStylesToCss';
import { scalingValue } from '../utils/scalingValue';
import { LightboxOverlay } from './LightboxOverlay';
import { LIGHTBOX_ANIM_MS } from './utils';
export {
  createStripTextStylePanelTab,
  createStripTextStyleTabContentItems,
  extractTitlesFromLegacyText,
  getStripTextStyleSettingKey,
  resolveStripItemTitles,
  STRIP_GLOBAL_TEXT_STYLE_KEYS,
  STRIP_TEXT_STYLE_PREFIXES,
  STRIP_TEXT_STYLE_TAB_LABELS,
  STRIP_TITLE_WIDTH_KEYS,
} from './utils';
export type {
  StripGlobalTextStyleKey,
  StripTextStylePrefix,
  StripTitleWidthKey,
} from './utils';

function getCSS(P: string): string {
  return \`
.\${P}-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.\${P}-cover {
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  pointer-events: auto;
}

.\${P}-ratio-wrapper-cover {
  aspect-ratio: var(--image-aspect-ratio);
  height: auto;
  overflow: hidden;
  width: 100%;
}

.\${P}-ratio-wrapper-fit {
  height: 100%;
  width: 100%;
}

.\${P}-cover-image {
  display: block;
}

.\${P}-cover-image-cover {
  object-fit: cover;
  width: 100%;
  height: 100%;
  max-width: 100%;
}

.\${P}-cover-image-fit {
  object-fit: contain;
  width: auto;
  height: auto;
  max-width: 100%;
}

.\${P}-lightbox {
  position: fixed;
  inset: 0;
  z-index: 9997;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overscroll-behavior: none;
}

.\${P}-lightbox-editor {
  inset: auto;
  top: var(--cntrl-article-top, 0);
  left: var(--cntrl-article-left, 0);
  width: var(--cntrl-article-width, 100vw) !important;
  height: var(--cntrl-viewport-height, 100vh) !important;
  overflow: hidden;
}

.\${P}-lightbox-edit-mode {
  z-index: 1;
}

.\${P}-lightbox-edit-mode .\${P}-lightbox-strip {
  overflow-x: hidden;
  touch-action: none;
  scroll-snap-type: none;
}

.\${P}-lightbox-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.\${P}-lightbox-backdrop {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.\${P}-lightbox-dismiss-area {
  position: relative;
  width: 100%;
  height: 100%;
}

.\${P}-lightbox-strip {
  position: relative;
  flex: 1;
  width: 100%;
  min-height: 0;
  max-width: 100%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  box-sizing: border-box;
  touch-action: pan-x;
  scrollbar-width: none;
}

.\${P}-lightbox-strip-track {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  height: 100%;
  min-width: min-content;
  backface-visibility: hidden;
}

.\${P}-lightbox-strip[data-mouse-dragging="true"] {
  scroll-snap-type: none;
  cursor: grabbing;
  user-select: none;
}

.\${P}-lightbox-strip[data-mouse-draggable="true"] {
  cursor: grab;
}

.\${P}-lightbox-strip::-webkit-scrollbar {
  display: none;
}

.\${P}-strip-item {
  position: relative;
  flex: 0 0 auto;
  height: 100%;
  scroll-snap-align: start;
}

.\${P}-strip-item img {
  user-select: none;
}

.\${P}-thumbnails-wrap {
  position: absolute;
  left: 16px;
  right: 16px;
  z-index: 2;
  pointer-events: auto;
}

.\${P}-thumbnails {
  width: 100%;
  overflow-x: auto;
  scrollbar-width: none;
}

.\${P}-thumbnails-track {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-end;
  justify-content: center;
  width: max-content;
  min-width: 100%;
}

.\${P}-lightbox-editor.\${P}-lightbox-edit-mode .\${P}-thumbnails {
  overflow: visible;
}

.\${P}-thumbnails::-webkit-scrollbar {
  display: none;
}

.\${P}-thumb {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
}

.\${P}-thumbnails-track[data-thumbnail-active="outline"] .\${P}-thumb[data-active="true"] {
  border-color: var(--thumbnail-active-color, #ffffff);
}

.\${P}-thumbnails-track[data-thumbnail-active="color"] .\${P}-thumb:not([data-active="true"]) .\${P}-thumb-image {
  filter: grayscale(1);
}

.\${P}-thumbnails-track[data-thumbnail-active="scale-up"] .\${P}-thumb[data-active="true"] {
  transform: scale(1.15);
}

.\${P}-thumb-image {
  display: block;
  object-fit: contain;
}

.\${P}-thumb-image-cover {
  aspect-ratio: var(--image-aspect-ratio);
  width: auto;
  height: auto;
  object-fit: cover;
}
.\${P}-close-icon {
  position: relative;
  flex-shrink: 0;
  grid-area: close;
  pointer-events: auto;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  padding: 0;
  opacity: 1;
  transition: opacity \${LIGHTBOX_ANIM_MS}ms ease;
}

.\${P}-close-icon[data-overlay-content-hidden="true"] {
  opacity: 0;
  pointer-events: none;
}

.\${P}-close-icon-inner {
  all: unset;
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 100%;
  pointer-events: auto;
}

.\${P}-close-icon-img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.\${P}-header {
  position: relative;
  display: grid;
  flex: 1;
  width: 100%;
  min-width: 0;
  z-index: 2;
  box-sizing: border-box;
  pointer-events: none;
  word-break: break-word;
  align-items: center;
}

.\${P}-header-single-row {
  grid-template-columns: auto auto auto auto 1fr auto;
  grid-template-areas: "margin title1 title2 title3 . close";
}

.\${P}-header-two-row {
  height: 100%;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.\${P}-header-row-top {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  flex-shrink: 0;
}

.\${P}-header-row-top .\${P}-title-cell[data-title="title1"] {
  flex: 0 0 auto;
  min-width: 0;
}

.\${P}-header-row-top .\${P}-close-icon {
  flex-shrink: 0;
  margin-left: auto;
}

.\${P}-header-row-bottom-wrap {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: auto;
  flex-shrink: 0;
}

.\${P}-header-row-bottom {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  width: 100%;
}

.\${P}-header-row-bottom .\${P}-title-cell {
  flex: 0 0 auto;
}

.\${P}-title-cell {
  position: relative;
  flex: 0 0 auto;
  min-width: 0;
  box-sizing: border-box;
}
.\${P}-title1,
.\${P}-title2,
.\${P}-title3 {
  margin: 0;
  min-width: 0;
}

.\${P}-title-resize-handle {
  background: transparent;
}

.\${P}-title-resize-handle::after {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background: #FF5C02;
  pointer-events: none;
}

.\${P}-lightbox-content-inner {
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  opacity: 1;
  transition: opacity \${LIGHTBOX_ANIM_MS}ms ease;
}

.\${P}-lightbox-content-inner[data-overlay-content-hidden="true"] {
  opacity: 0;
  pointer-events: none;
}

.\${P}-lightbox-content-area {
  position: relative;
  display: flex;
  flex-direction: row;
  flex: 1;
  min-width: 0;
  min-height: 0;
  align-items: flex-start;
}

.\${P}-lightbox-content-area-stacked {
  align-items: stretch;
}

.\${P}-control {
  position: relative;
  z-index: 2;
  pointer-events: auto;
  flex-shrink: 0;
}

.\${P}-control::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-width: 20px;
  min-height: 20px;
  pointer-events: auto;
  z-index: 10;
}
\`;
}

export type LightboxStripItem = {
  image: {
    url: string;
    name?: string;
    objectFit?: 'cover' | 'contain';
  };
  title1?: string;
  title2?: string;
  title3?: string;
};

export type LightboxStripSettings = {
  cover: string | null;
  coverFit: ImageRatioFit;
  backgroundColor: string;
  thumbnailVisibility: 'on' | 'off';
  thumbnailSize: number;
  thumbnailObjectFit: ImageRatioFit;
  thumbnailTrigger: 'click' | 'hover';
  thumbnailActive: 'outline' | 'color' | 'scale-up';
  thumbnailActiveColor: string;
  thumbnailGap: number;
  thumbnailMarginBottom?: number;
  imageGap?: number;
  title1Width: number;
  title2Width: number;
  title3Width: number;
  title1MarginLeft: number;
  title2MarginLeft: number;
  title3MarginLeft: number;
  titleRowMarginBottom?: number;
  titleHeaderLayout?: 'desktop' | 'mobile';
  title1Color: string;
  title2Color: string;
  title3Color: string;
  title1FontFamily?: string;
  title1FontSettings?: { fontWeight: number; fontStyle: string };
  title1FontSize?: number;
  title1LineHeight?: number;
  title1LetterSpacing?: number;
  title1WordSpacing?: number;
  title1TextAlign?: 'left' | 'center' | 'right' | 'justify';
  title1TextAppearance?: TextStyles['textAppearance'];
  title2FontFamily?: string;
  title2FontSettings?: { fontWeight: number; fontStyle: string };
  title2FontSize?: number;
  title2LineHeight?: number;
  title2LetterSpacing?: number;
  title2WordSpacing?: number;
  title2TextAlign?: 'left' | 'center' | 'right' | 'justify';
  title2TextAppearance?: TextStyles['textAppearance'];
  title3FontFamily?: string;
  title3FontSettings?: { fontWeight: number; fontStyle: string };
  title3FontSize?: number;
  title3LineHeight?: number;
  title3LetterSpacing?: number;
  title3WordSpacing?: number;
  title3TextAlign?: 'left' | 'center' | 'right' | 'justify';
  title3TextAppearance?: TextStyles['textAppearance'];
  contentMarginTop: number;
  iconMarginLeft: number;
  closeIcon: string | null;
  closeIconMaxWidth: number;
  closeIconColor: string;
  closeIconHoverColor: string;
};

type LightboxStripProps = {
  settings: LightboxStripSettings;
  content?: LightboxStripItem[];
  isEditor?: boolean;
  isEditMode?: boolean;
  isPreviewMode?: boolean;
  portalId?: string;
} & CommonComponentProps;

export const LightboxStrip = ({ settings, content, isEditor, isEditMode, isPreviewMode, portalId }: LightboxStripProps) => {
  const { prefix: P } = useScopedStyles();
  const { cover, coverFit } = settings;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const items = content ?? [];
  const isOverlayVisible = lightboxOpen && items.length > 0;

  const openLightbox = () => {
    if (items.length === 0) return;
    setLightboxOpen(true);
  };

  useEffect(() => {
    if (!isEditor || isEditMode || isPreviewMode) return;
    setLightboxOpen(false);
  }, [isEditor, isEditMode, isPreviewMode]);

  return (
    <>
      <div ref={wrapperRef} className={\`\${P}-wrapper\`}>
        <style dangerouslySetInnerHTML={{ __html: getCSS(P) }} />
        {cover && (
          <div
            className={\`\${P}-cover \${isImageRatioCover(coverFit) ? \`\${P}-ratio-wrapper-cover\` : \`\${P}-ratio-wrapper-fit\`}\`}
            onClick={() => openLightbox()}
            style={{ ...(isImageRatioCover(coverFit) ? ({ '--image-aspect-ratio': getAspectRatio(coverFit) } as React.CSSProperties) : {}) }}
            aria-label='Open image gallery'
          >
            <img
              className={\`\${P}-cover-image \${isImageRatioCover(coverFit) ? \`\${P}-cover-image-cover\` : \`\${P}-cover-image-fit\`}\`}
              src={cover}
              alt='cover'
            />
          </div>
        )}
      </div>

      {isOverlayVisible && typeof document !== 'undefined' && (() => {
        const portalTarget = (portalId ? document.getElementById(portalId) : null) ?? document.body;
        return createPortal(
          <LightboxOverlay
            prefix={P}
            images={items}
            settings={settings}
            isEditor={isEditor}
            isEditMode={isEditMode}
            isPreviewMode={isPreviewMode}
            onClose={() => setLightboxOpen(false)}
          />,
          portalTarget,
        );
      })()}
    </>
  );
};
`,rg="data:image/svg+xml,"+encodeURIComponent('<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.959 0.40332L0.402635 15.9597" stroke="#000000" stroke-width="1.14"/><path d="M15.959 15.9594L0.402635 0.403002" stroke="#000000" stroke-width="1.14"/></svg>'),rh={fontSettings:{type:"object",display:{type:"font-settings-weight"},properties:{fontWeight:{type:"number"},fontStyle:{type:"string"}}},fontSize:{type:"number",display:{type:"font-size"}},lineHeight:{type:"number",display:{type:"line-height-input"}},letterSpacing:{type:"number",display:{type:"letter-spacing-input"}},wordSpacing:{type:"number",display:{type:"word-spacing-input"}},textAlign:{type:"string",enum:["left","center","right","justify"],display:{type:"vertical-text-aligh-options"}},textAppearance:{type:"object",display:{type:"text-appearance",useTabDesign:!0},properties:{textTransform:{type:"string",enum:["none","uppercase","lowercase","capitalize"]},textDecoration:{type:"string",enum:["none","underline"]},fontVariant:{type:"string",enum:["normal","small-caps"]}}}},rf=re.reduce((e,t)=>({...e,...function(e){let t={};return t[rr(e,"fontFamily")]={type:"string",scope:"common",title:"",display:{type:"font-family-select",hideLabel:!0,useTabDesign:!0}},t[rr(e,"fontSettings")]={...rh.fontSettings,scope:"common",title:"",display:{type:"font-settings-weight",hideLabel:!0,useTabDesign:!0}},t[rr(e,"fontSize")]={...rh.fontSize,scope:"layout",title:"",display:{type:"font-size"}},t[rr(e,"lineHeight")]={...rh.lineHeight,scope:"layout",title:"",display:{type:"line-height-input"}},t[rr(e,"letterSpacing")]={...rh.letterSpacing,scope:"layout",title:"",display:{type:"letter-spacing-input"}},t[rr(e,"wordSpacing")]={...rh.wordSpacing,scope:"layout",title:"",display:{type:"word-spacing-input"}},t[rr(e,"textAlign")]={...rh.textAlign,scope:"layout",title:"",display:{type:"vertical-text-aligh-options"}},t[rr(e,"textAppearance")]={...rh.textAppearance,scope:"layout",title:"",display:{type:"text-appearance",useTabDesign:!0}},t}(t)}),{}),ry=re.reduce((e,t)=>({...e,[rr(t,"fontFamily")]:"Goudy Bookletter 1911",[rr(t,"fontSettings")]:{fontWeight:400,fontStyle:"normal"},[rr(t,"letterSpacing")]:0,[rr(t,"wordSpacing")]:0,[rr(t,"textAlign")]:"left",[rr(t,"textAppearance")]:{textTransform:"none",textDecoration:"none",fontVariant:"normal"}}),{});function rv(e){return re.reduce((t,i)=>{let n=e[`${i}FontSize`],o=e[`${i}LineHeight`];return void 0!==n&&(t[rr(i,"fontSize")]=n),void 0!==o&&(t[rr(i,"lineHeight")]=o),t},{})}let rx={type:"tab",id:"stripTextStyle",tabs:Object.fromEntries(re.map(e=>[rt[e],(e=>[rr(e,"fontFamily"),rr(e,"fontSettings"),{type:"row",items:[rr(e,"fontSize"),rr(e,"lineHeight"),rr(e,"letterSpacing"),rr(e,"wordSpacing")]},rr(e,"textAlign"),rr(e,"textAppearance")])(e)]))},rb={element:({settings:e,content:t,isEditor:i,isEditMode:r,isPreviewMode:s,portalId:c})=>{let{prefix:d}=a.useScopedStyles(),{cover:u,coverFit:p}=e,m=o.useRef(null),[g,h]=o.useState(!1),f=t??[],y=g&&f.length>0;return o.useEffect(()=>{!i||r||s||h(!1)},[i,r,s]),n.jsxs(n.Fragment,{children:[n.jsxs("div",{ref:m,className:`${d}-wrapper`,children:[n.jsx("style",{dangerouslySetInnerHTML:{__html:function(e){return`
.${e}-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.${e}-cover {
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  pointer-events: auto;
}

.${e}-ratio-wrapper-cover {
  aspect-ratio: var(--image-aspect-ratio);
  height: auto;
  overflow: hidden;
  width: 100%;
}

.${e}-ratio-wrapper-fit {
  height: 100%;
  width: 100%;
}

.${e}-cover-image {
  display: block;
}

.${e}-cover-image-cover {
  object-fit: cover;
  width: 100%;
  height: 100%;
  max-width: 100%;
}

.${e}-cover-image-fit {
  object-fit: contain;
  width: auto;
  height: auto;
  max-width: 100%;
}

.${e}-lightbox {
  position: fixed;
  inset: 0;
  z-index: 9997;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overscroll-behavior: none;
}

.${e}-lightbox-editor {
  inset: auto;
  top: var(--cntrl-article-top, 0);
  left: var(--cntrl-article-left, 0);
  width: var(--cntrl-article-width, 100vw) !important;
  height: var(--cntrl-viewport-height, 100vh) !important;
  overflow: hidden;
}

.${e}-lightbox-edit-mode {
  z-index: 1;
}

.${e}-lightbox-edit-mode .${e}-lightbox-strip {
  overflow-x: hidden;
  touch-action: none;
  scroll-snap-type: none;
}

.${e}-lightbox-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.${e}-lightbox-backdrop {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.${e}-lightbox-dismiss-area {
  position: relative;
  width: 100%;
  height: 100%;
}

.${e}-lightbox-strip {
  position: relative;
  flex: 1;
  width: 100%;
  min-height: 0;
  max-width: 100%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  box-sizing: border-box;
  touch-action: pan-x;
  scrollbar-width: none;
}

.${e}-lightbox-strip-track {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  height: 100%;
  min-width: min-content;
  backface-visibility: hidden;
}

.${e}-lightbox-strip[data-mouse-dragging="true"] {
  scroll-snap-type: none;
  cursor: grabbing;
  user-select: none;
}

.${e}-lightbox-strip[data-mouse-draggable="true"] {
  cursor: grab;
}

.${e}-lightbox-strip::-webkit-scrollbar {
  display: none;
}

.${e}-strip-item {
  position: relative;
  flex: 0 0 auto;
  height: 100%;
  scroll-snap-align: start;
}

.${e}-strip-item img {
  user-select: none;
}

.${e}-thumbnails-wrap {
  position: absolute;
  left: 16px;
  right: 16px;
  z-index: 2;
  pointer-events: auto;
}

.${e}-thumbnails {
  width: 100%;
  overflow-x: auto;
  scrollbar-width: none;
}

.${e}-thumbnails-track {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-end;
  justify-content: center;
  width: max-content;
  min-width: 100%;
}

.${e}-lightbox-editor.${e}-lightbox-edit-mode .${e}-thumbnails {
  overflow: visible;
}

.${e}-thumbnails::-webkit-scrollbar {
  display: none;
}

.${e}-thumb {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
}

.${e}-thumbnails-track[data-thumbnail-active="outline"] .${e}-thumb[data-active="true"] {
  border-color: var(--thumbnail-active-color, #ffffff);
}

.${e}-thumbnails-track[data-thumbnail-active="color"] .${e}-thumb:not([data-active="true"]) .${e}-thumb-image {
  filter: grayscale(1);
}

.${e}-thumbnails-track[data-thumbnail-active="scale-up"] .${e}-thumb[data-active="true"] {
  transform: scale(1.15);
}

.${e}-thumb-image {
  display: block;
  object-fit: contain;
}

.${e}-thumb-image-cover {
  aspect-ratio: var(--image-aspect-ratio);
  width: auto;
  height: auto;
  object-fit: cover;
}
.${e}-close-icon {
  position: relative;
  flex-shrink: 0;
  grid-area: close;
  pointer-events: auto;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  padding: 0;
  opacity: 1;
  transition: opacity 300ms ease;
}

.${e}-close-icon[data-overlay-content-hidden="true"] {
  opacity: 0;
  pointer-events: none;
}

.${e}-close-icon-inner {
  all: unset;
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 100%;
  pointer-events: auto;
}

.${e}-close-icon-img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.${e}-header {
  position: relative;
  display: grid;
  flex: 1;
  width: 100%;
  min-width: 0;
  z-index: 2;
  box-sizing: border-box;
  pointer-events: none;
  word-break: break-word;
  align-items: center;
}

.${e}-header-single-row {
  grid-template-columns: auto auto auto auto 1fr auto;
  grid-template-areas: "margin title1 title2 title3 . close";
}

.${e}-header-two-row {
  height: 100%;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.${e}-header-row-top {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  flex-shrink: 0;
}

.${e}-header-row-top .${e}-title-cell[data-title="title1"] {
  flex: 0 0 auto;
  min-width: 0;
}

.${e}-header-row-top .${e}-close-icon {
  flex-shrink: 0;
  margin-left: auto;
}

.${e}-header-row-bottom-wrap {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: auto;
  flex-shrink: 0;
}

.${e}-header-row-bottom {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  width: 100%;
}

.${e}-header-row-bottom .${e}-title-cell {
  flex: 0 0 auto;
}

.${e}-title-cell {
  position: relative;
  flex: 0 0 auto;
  min-width: 0;
  box-sizing: border-box;
}
.${e}-title1,
.${e}-title2,
.${e}-title3 {
  margin: 0;
  min-width: 0;
}

.${e}-title-resize-handle {
  background: transparent;
}

.${e}-title-resize-handle::after {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background: #FF5C02;
  pointer-events: none;
}

.${e}-lightbox-content-inner {
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  opacity: 1;
  transition: opacity 300ms ease;
}

.${e}-lightbox-content-inner[data-overlay-content-hidden="true"] {
  opacity: 0;
  pointer-events: none;
}

.${e}-lightbox-content-area {
  position: relative;
  display: flex;
  flex-direction: row;
  flex: 1;
  min-width: 0;
  min-height: 0;
  align-items: flex-start;
}

.${e}-lightbox-content-area-stacked {
  align-items: stretch;
}

.${e}-control {
  position: relative;
  z-index: 2;
  pointer-events: auto;
  flex-shrink: 0;
}

.${e}-control::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-width: 20px;
  min-height: 20px;
  pointer-events: auto;
  z-index: 10;
}
`}(d)}}),u&&n.jsx("div",{className:`${d}-cover ${"cover"===p.display?`${d}-ratio-wrapper-cover`:`${d}-ratio-wrapper-fit`}`,onClick:()=>void(0!==f.length&&h(!0)),style:{..."cover"===p.display?{"--image-aspect-ratio":o6(p)}:{}},"aria-label":"Open image gallery",children:n.jsx("img",{className:`${d}-cover-image ${"cover"===p.display?`${d}-cover-image-cover`:`${d}-cover-image-fit`}`,src:u,alt:"cover"})})]}),y&&"u">typeof document&&(()=>{let t=(c?document.getElementById(c):null)??document.body;return l.createPortal(n.jsx(rp,{prefix:d,images:f,settings:e,isEditor:i,isEditMode:r,isPreviewMode:s,onClose:()=>h(!1)}),t)})()]})},id:"lightbox-strip",name:"Strip",category:"galleries",version:1,defaultSize:{d:{width:350},t:{width:300},m:{width:300}},preview:{type:"image",url:"https://cdn.cntrl.site/component-assets/Strip.mp4"},schema:{type:"object",version:1,settings:{sizing:"auto manual",properties:{cover:{type:"string",scope:"common",title:"",display:{type:"settings-image-input"}},coverFit:{type:"object",scope:"common",title:"Display",display:{type:"image-ratio-control"},properties:{display:{type:"string",enum:["fit","cover"]},ratioValue:{type:"string",enum:["1:1","2:3","3:4","4:5","16:9"]},reversed:{type:"boolean"}}},thumbnailSize:{type:"number",scope:"layout",title:"Thumbnail Size",min:0,display:{type:"range-control"}},thumbnailGap:{type:"number",scope:"layout",title:"Thumbnail Gap",min:0,display:{type:"range-control"}},thumbnailMarginBottom:{type:"number",scope:"layout",title:"Thumbnail Margin Bottom",min:0,display:{type:"range-control"}},imageGap:{type:"number",scope:"layout",title:"Image Gap",min:0,display:{type:"range-control"}},backgroundColor:{type:"string",scope:"common",title:"BG Default",display:{type:"settings-color-picker"}},closeIcon:{type:["string","null"],scope:"common",title:"",display:{type:"settings-image-input"}},closeIconMaxWidth:{type:"number",scope:"layout",title:"Max Width",display:{type:"full-width-input"},min:0,max:1},closeIconColor:{type:"string",scope:"common",title:"Icon Default",display:{type:"settings-color-picker"}},closeIconHoverColor:{type:"string",scope:"common",title:"Icon Hover",display:{type:"settings-color-picker"}},thumbnailVisibility:{type:"boolean",scope:"layout",title:"Visibility",display:{type:"toggle-cycle",enum:["on","off"]}},thumbnailObjectFit:{type:"object",scope:"common",title:"Display",display:{type:"image-ratio-control"},properties:{display:{type:"string",enum:["fit","cover"]},ratioValue:{type:"string",enum:["1:1","2:3","3:4","4:5","16:9"]},reversed:{type:"boolean"}}},thumbnailTrigger:{type:"string",scope:"common",title:"Trigger",display:{type:"toggle-cycle",enum:["click","hover"]}},thumbnailActive:{type:"boolean",scope:"common",title:"Active",display:{type:"toggle-cycle",enum:["outline","color","scale-up"]}},thumbnailActiveColor:{type:"string",scope:"common",title:"Outline Active",display:{type:"palette-color-picker",visible:!1}},title1Width:{type:"number",scope:"layout",title:"Title 1 width",min:0,display:{type:"range-control"}},title2Width:{type:"number",scope:"layout",title:"Title 2 width",min:0,display:{type:"range-control"}},title3Width:{type:"number",scope:"layout",title:"Title 3 width",min:0,display:{type:"range-control"}},title2MarginLeft:{type:"number",scope:"layout",title:"Title 2 margin left",min:0,display:{type:"range-control"}},title3MarginLeft:{type:"number",scope:"layout",title:"Title 3 margin left",min:0,display:{type:"range-control"}},titleHeaderLayout:{type:"string",scope:"layout",title:"Title header layout",display:{type:"toggle-cycle",enum:["desktop","mobile"]}},title1Color:{type:"string",scope:"common",title:"Title Default",display:{type:"palette-color-picker"}},title2Color:{type:"string",scope:"common",title:"Subtitle Default",display:{type:"palette-color-picker"}},title3Color:{type:"string",scope:"common",title:"Caption Default",display:{type:"palette-color-picker"}},...rf,contentMarginTop:{type:"number",scope:"layout",title:"Content margin top",min:0,display:{type:"range-control"}},title1MarginLeft:{type:"number",scope:"layout",title:"Title 1 margin left",min:0,display:{type:"range-control"}},titleRowMarginBottom:{type:"number",scope:"layout",title:"Title row margin bottom",min:0,display:{type:"range-control"}},iconMarginLeft:{type:"number",scope:"layout",title:"Icon margin left",min:0,display:{type:"range-control"}}},defaults:{cover:"https://cdn.cntrl.site/component-assets/lightbox_strip_1.jpg",coverFit:{display:"fit",ratioValue:"1:1",reversed:!1},closeIcon:rg,backgroundColor:"#FFFFFF",closeIconColor:"#000000",closeIconHoverColor:"#cccccc",thumbnailObjectFit:{display:"fit",ratioValue:"16:9",reversed:!1},thumbnailTrigger:"click",thumbnailActive:"color",thumbnailActiveColor:"#ffffff",title1Color:"#000000",title2Color:"#000000",title3Color:"#000000",...ry},layoutDefaults:{m:{thumbnailSize:.1,thumbnailVisibility:"off",titleHeaderLayout:"mobile",thumbnailGap:.04,thumbnailMarginBottom:.04,imageGap:.005,title1Width:.25,title2Width:.6,title3Width:.25,title1MarginLeft:.04,title2MarginLeft:.04,title3MarginLeft:.04,titleRowMarginBottom:.08,closeIconMaxWidth:.04,contentMarginTop:.08,iconMarginLeft:.02,...rv({title1FontSize:.042,title1LineHeight:.042,title2FontSize:.042,title2LineHeight:.042,title3FontSize:.042,title3LineHeight:.042})},t:{thumbnailSize:.03,thumbnailVisibility:"on",titleHeaderLayout:"desktop",thumbnailGap:.02,thumbnailMarginBottom:.007,imageGap:.005,title1Width:.29,title2Width:.13,title3Width:.14,title1MarginLeft:.015,title2MarginLeft:.1,title3MarginLeft:.1,titleRowMarginBottom:0,closeIconMaxWidth:.039,contentMarginTop:.015,iconMarginLeft:.02,...rv({title1FontSize:.0208,title1LineHeight:.0208,title2FontSize:.0208,title2LineHeight:.0208,title3FontSize:.0208,title3LineHeight:.0208})},d:{thumbnailSize:.03,thumbnailVisibility:"on",titleHeaderLayout:"desktop",thumbnailGap:.02,thumbnailMarginBottom:.007,imageGap:.005,title1Width:.29,title2Width:.13,title3Width:.14,title1MarginLeft:.015,title2MarginLeft:.1,title3MarginLeft:.1,titleRowMarginBottom:0,closeIconMaxWidth:.02,contentMarginTop:.015,iconMarginLeft:.02,...rv({title1FontSize:.011,title1LineHeight:.02,title2FontSize:.011,title2LineHeight:.02,title3FontSize:.011,title3LineHeight:.02})}},displayRules:[{if:{name:"thumbnailActive",value:"outline"},then:{name:"properties.thumbnailActiveColor.display.visible",value:!0}}],layout:["__componentName__","thumbnailGap","thumbnailMarginBottom","imageGap","title1Width","title2Width","title3Width","title2MarginLeft","title3MarginLeft","titleHeaderLayout","titleRowMarginBottom","contentMarginTop","title1MarginLeft","iconMarginLeft"]},panels:[{id:"general",icon:"settings",title:"General",tooltip:"General Settings",layout:[{type:"row",items:["__componentName__"]},{type:"row",title:"Thumbnails",items:["thumbnailVisibility","thumbnailObjectFit"]},{type:"row",items:["thumbnailTrigger","thumbnailActive"]},{type:"row",title:"Close icon",items:["closeIcon","closeIconMaxWidth"]},{type:"row",title:"Cover",items:["cover","coverFit"]}]},{id:"typeStyle",icon:"text-icon",title:"Type Style",tooltip:"Typography",layout:[rx]}],paletteBookmark:{items:["title1Color","title2Color","title3Color","backgroundColor","closeIconColor","closeIconHoverColor","thumbnailActiveColor"],panelIds:["general","typeStyle"]},content:{type:"array",settings:{addItemFromFileExplorer:!0},items:{type:"object",properties:{image:{type:"object",label:"Image",display:{isObjectFitEditable:!1,defaultObjectFit:"contain",type:"media-input"}},title1:{type:"string",label:"Title",placeholder:"Add Title...",display:{type:"text-input"}},title2:{type:"string",label:"Subtitle",placeholder:"Add Subtitle...",display:{type:"text-input"}},title3:{type:"string",label:"Caption",placeholder:"Add Caption...",display:{type:"text-input"}}}},default:[{image:{url:"https://cdn.cntrl.site/component-assets/lightbox_strip_2.jpg",name:"",objectFit:"contain"},title1:"Giovanni Andrea Vavassore",title2:"ESEMPLA",title3:"Venice, 1500"},{image:{url:"https://cdn.cntrl.site/component-assets/lightbox_strip_3.jpg",name:"",objectFit:"contain"},title1:"Giovanni Andrea Vavassore",title2:"ESEMPLA",title3:"Venice, 1500"},{image:{url:"https://cdn.cntrl.site/component-assets/lightbox_strip_4.jpg",name:"",objectFit:"contain"},title1:"Giovanni Andrea Vavassore",title2:"ESEMPLA",title3:"Venice, 1500"},{image:{url:"https://cdn.cntrl.site/component-assets/lightbox_strip_5.jpg",name:"",objectFit:"contain"},title1:"Giovanni Andrea Vavassore",title2:"ESEMPLA",title3:"Venice, 1500"},{image:{url:"https://cdn.cntrl.site/component-assets/lightbox_strip_6.jpg",name:"",objectFit:"contain"},title1:"Giovanni Andrea Vavassore",title2:"ESEMPLA",title3:"Venice, 1500"},{image:{url:"https://cdn.cntrl.site/component-assets/lightbox_strip_7.jpg",name:"",objectFit:"contain"},title1:"Giovanni Andrea Vavassore",title2:"ESEMPLA",title3:"Venice, 1500"}]}},sourceCode:rm,assetsPaths:{content:[{path:"image.url",placeholderEnabled:!0}],parameters:[{path:"cover",placeholderEnabled:!0}]},fontSettingsPaths:{content:[],parameters:[...re.map(e=>({path:`${rr(e,"fontFamily")}`}))]},fontRelations:{...re.reduce((e,t)=>({...e,[`${t}FontSettings`]:`${rr(t,"fontFamily")}`}),{})}},rw=({prefix:e,entries:t,settings:i,isEditor:r,isEditMode:s,isPreviewMode:c,initialSlideIndex:d=0,enableUrlSync:u=!1,journalItemId:p=null,onBeforeClose:m,onClose:g})=>{let{type:h,coverFit:f,backgroundColor:y,imageGap:v,maxWidth:x,maxHeight:b,textTransition:w,title1Width:$,title2Width:S,title3Width:C,title1MarginLeft:P=0,title2MarginLeft:L=0,title3MarginLeft:T=0,titleRowMarginBottom:M=0,titleHeaderLayout:E="single-row",countCloseGap:I=0,closeIcon:k,closeIconMaxWidth:R,closeIconColor:F,closeIconHoverColor:A,contentMarginTop:W=0,iconMarginRight:H=0}=i,_=o.useCallback(e=>a.scalingValue(e,r??!1),[r]),N=_(v??0),j=`${x}%`,z=`${b}%`,B=_(I),O=_(W),D=_(H),V=nb("title1",nx(i,"title1"),r),q=nb("title2",nx(i,"title2"),r),G=nb("title3",nx(i,"title3"),r),K=nb("count",nx(i,"count"),r),U="mobile"===E,X=!r||!!c,Y=!s&&(!r||!!c),J=o.useMemo(()=>nn(t,h),[t,h]),[Z,Q]=o.useState(d),ee=J[Z],et=null==ee?void 0:ee.entry,[ei,en]=o.useState(!1),[eo,er]=o.useState(null),[ea,el]=o.useState(!1),[es,ec]=o.useState(null),[ed,eu]=o.useState(!1),[ep,em]=o.useState(0),[eg,eh]=o.useState(),[ef,ey]=o.useState(),[ev,ex]=o.useState(null),eb=o.useRef(null),ew=o.useRef(0),e$=o.useRef(0),eS=o.useRef(0),eC=o.useRef(!1),eP=o.useRef(null),eL=o.useRef(null),eT=o.useRef(null),eM=o.useRef(null),eE=o.useRef(null),eI=o.useRef(null),ek=o.useRef(null),eR=o.useCallback(()=>{let t=eL.current;if(!t)return;let i=t.closest(`.${e}-lightbox-content-area`);if(!i)return t.getBoundingClientRect().width;let n=Array.from(i.children).reduce((e,i)=>!(i instanceof HTMLElement)||i.contains(t)?e:e+i.getBoundingClientRect().width,0);return i.getBoundingClientRect().width-n},[e]),eF=o.useCallback(()=>{eb.current&&(clearTimeout(eb.current),eb.current=null)},[]),eA=o.useCallback(e=>{e===ew.current&&(ec(null),eu(!1))},[]),eW=o.useCallback(()=>{s||eC.current||(eC.current=!0,null==m||m(),en(!1),eP.current=setTimeout(()=>{g()},300))},[s,m,g]),{isSwipeDragging:eH,backdropStyle:e_,mediaAreaStyle:eN,overlayContentStyle:ej,swipeHandlers:ez,dismissAreaStyle:eB}=o7({enabled:Y,onClose:eW,animMs:300,isBlockedTarget:o.useCallback(t=>!!(t.closest("[data-controls]")||t.closest(`.${e}-close-icon`)),[e])}),eO=o.useCallback(e=>{u&&i7(e+1,p,!0)},[u,p]),eD=o.useCallback(e=>{if(e)return e.getBoundingClientRect().height},[]),eV=o.useCallback(e=>{if(0===J.length)return;let t=(e%J.length+J.length)%J.length;if(t===Z)return;let i=J[Z],n=J[t];ew.current+=1;let o=ew.current,r="fade"===w&&no(null==i?void 0:i.entry)!==no(null==n?void 0:n.entry),a=eD(eT.current),s=r?(()=>{let e=eR();l.flushSync(()=>{ex(n.entry)}),eT.current&&e&&(eT.current.style.width=`${e}px`);let t=eD(eT.current);return eT.current&&(eT.current.style.width=""),{measuredIncomingTitlesHeight:t,incomingTitlesMeasureWidth:e}})():void 0,c=Math.max(a??0,(null==s?void 0:s.measuredIncomingTitlesHeight)??0)||void 0;em(o),ec(Z),eu(!0),Q(t),eO(t),eS.current=t,r?(eF(),c&&eh(c),null!=s&&s.incomingTitlesMeasureWidth&&ey(s.incomingTitlesMeasureWidth),er((null==i?void 0:i.entryIndex)??null),el(!0),e$.current=n.entryIndex,eb.current=setTimeout(()=>{er(null),el(!1),eh(void 0),ey(void 0),ex(null),eb.current=null},400)):(eF(),er(null),el(!1),eh(void 0),ey(void 0),ex(null),e$.current=n.entryIndex)},[Z,eF,eR,eD,J,eO,w]),eq=o.useCallback(()=>{ek.current=null},[]),eG=o.useCallback(e=>{!X||J.length<=1||"mouse"===e.pointerType&&0!==e.button||e.target.closest("[data-controls]")||(ek.current={startX:e.clientX,startY:e.clientY,pointerId:e.pointerId})},[X,J.length]),eK=o.useCallback(e=>{var t;if(!X||J.length<=1||"mouse"===e.pointerType&&0!==e.button)return;if(eH)return void eq();let i=ek.current;if(!i||i.pointerId!==e.pointerId||(eq(),e.target.closest("[data-controls]")))return;let n=e.clientX-i.startX,o=e.clientY-i.startY,r=Math.abs(n),a=Math.abs(o);if(r>=50&&r>a)return void eV(n>0?Z-1:Z+1);if(r>10||a>10)return;let l=null==(t=eM.current)?void 0:t.getBoundingClientRect(),s=l?l.left+l.width/2:window.innerWidth/2;eV(e.clientX<s?Z-1:Z+1)},[Z,X,eV,eH,eq,J.length]),eU=o.useCallback(e=>{let t=ek.current;(null==t?void 0:t.pointerId)===e.pointerId&&eq()},[eq]);o8(),o.useEffect(()=>{eI.current=document.activeElement instanceof HTMLElement?document.activeElement:null;let e=requestAnimationFrame(()=>{en(!0),requestAnimationFrame(()=>{eE.current?eE.current.focus():eM.current&&eM.current.focus()})});return()=>{cancelAnimationFrame(e),eP.current&&clearTimeout(eP.current),eb.current&&clearTimeout(eb.current);let t=eI.current;t&&document.contains(t)&&t.focus()}},[]),o.useEffect(()=>{var e;"fade"!==w&&(e$.current=(null==(e=J[Z])?void 0:e.entryIndex)??0,eF(),er(null),el(!1),eh(void 0),ey(void 0))},[Z,eF,J,w]),o.useEffect(()=>{let e=e=>{if("Escape"===e.key)return void eW();if("ArrowLeft"===e.key&&J.length>1)return void eV(Z-1);if("ArrowRight"===e.key&&J.length>1)return void eV(Z+1);if("Tab"===e.key&&eM.current){let t=Array.from(eM.current.querySelectorAll('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')).filter(e=>!e.closest('[aria-hidden="true"]'));if(0===t.length)return;let i=t[0],n=t[t.length-1],o=document.activeElement;e.shiftKey?o!==i&&eM.current.contains(o)||(e.preventDefault(),n.focus()):o!==n&&eM.current.contains(o)||(e.preventDefault(),i.focus())}};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[eV,eW,Z,J.length]),o.useLayoutEffect(()=>{eF(),ew.current=0,em(0),ec(null),eu(!1),er(null),el(!1),eh(void 0),ey(void 0),ex(null),Q(e=>Math.min(e,Math.max(0,J.length-1)))},[eF,t.length,h,J.length]),o.useLayoutEffect(()=>{var e;let t=Math.min(Math.max(0,d),Math.max(0,J.length-1));eS.current=t,e$.current=(null==(e=J[t])?void 0:e.entryIndex)??0,Q(t)},[d]);let eX=null!==eo?t[eo]:null,eY=null!==es?J[es]:null,eJ=(null==et?void 0:et.title1)||(null==et?void 0:et.title2)||(null==et?void 0:et.title3)||(null==eX?void 0:eX.title1)||(null==eX?void 0:eX.title2)||(null==eX?void 0:eX.title3),eZ="B"===h?J.length>1:ni(t)>1,eQ=null!==k,e0=eZ&&eQ?{gap:B}:void 0,e1=`${e}-titles-stack${U?` ${e}-titles-stack-stacked`:""}`,e2=`${e}-titles-layer-out${U?` ${e}-titles-layer-out-stacked`:""}`,e3=`${e}-titles-layer-out`,e5=(P??0)>0||s,e4=_(M),e9=o.useMemo(()=>({title1Width:$??nr.title1Width,title2Width:S??nr.title2Width,title3Width:C??nr.title3Width}),[$,S,C]),e6=o.useMemo(()=>({title2MarginLeft:L,title3MarginLeft:T}),[L,T]),e7=o.useMemo(()=>et?na(e,et,V,q,G):[],[e,et,V,q,G]),e8=o.useMemo(()=>e7.map(e=>e9[e.widthKey]),[e7,e9]),te=o.useMemo(()=>nl(e7.length,e8),[e7.length,e8]),tt=o.useMemo(()=>ns(e7.length,e8),[e7.length,e8]),ti=o.useMemo(()=>e7.filter(e=>"title1"===e.prefix),[e7]),tn=o.useMemo(()=>e7.filter(e=>"title2"===e.prefix||"title3"===e.prefix),[e7]),to=o.useMemo(()=>nd(ti,e9),[ti,e9]),tr=o.useMemo(()=>nd(tn,e9),[tn,e9]),ta=o.useCallback((e,t)=>{let i=e7.findIndex(t=>t.prefix===e.prefix);if(!U||"single-row"===t)return{effectiveWidth:tt[i]??0,resolvedWidth:te[i]??0,maxWidth:nc(i,te)};if("two-row-top"===t){let t=ti.findIndex(t=>t.prefix===e.prefix);return{effectiveWidth:to.effective[t]??0,resolvedWidth:to.resolved[t]??0,maxWidth:nc(t,to.resolved)}}let n=tn.findIndex(t=>t.prefix===e.prefix);return{effectiveWidth:tr.effective[n]??0,resolvedWidth:tr.resolved[n]??0,maxWidth:nc(n,tr.resolved)}},[e7,tn,tr,tt,te,ti,to,U]),tl=o.useCallback(e=>np(e7,te,e6,e)+(U?0:P??0),[e7,te,e6,U,P]),ts=o.useCallback(()=>U?0:P??0,[U,P]),tc=o.useCallback(e=>tn.slice(0,e).reduce((e,t,i)=>e+(t.marginLeftKey?e6[t.marginLeftKey]??0:0)+(tr.resolved[i]??0),0),[tn,tr.resolved,e6]),td=o.useCallback(e=>{let t=tn[e];return tc(e)+(t.marginLeftKey?e6[t.marginLeftKey]??0:0)+(tr.resolved[e]??0)},[tn,tr.resolved,tc,e6]),tu=o.useCallback((e,t,i)=>{if(!U||"single-row"===i){let i=e.findIndex(e=>e.prefix===t.prefix),n=e.map(e=>e9[e.widthKey]),o=nl(e.length,n);return{effectiveWidth:ns(e.length,n)[i]??0,resolvedWidth:o[i]??0,maxWidth:nc(i,o)}}if("two-row-top"===i){let i=e.filter(e=>"title1"===e.prefix),n=i.findIndex(e=>e.prefix===t.prefix),{resolved:o,effective:r}=nd(i,e9);return{effectiveWidth:r[n]??0,resolvedWidth:o[n]??0,maxWidth:nc(n,o)}}let n=e.filter(e=>"title2"===e.prefix||"title3"===e.prefix),o=n.findIndex(e=>e.prefix===t.prefix),{resolved:r,effective:a}=nd(n,e9);return{effectiveWidth:a[o]??0,resolvedWidth:r[o]??0,maxWidth:nc(o,r)}},[e9,U]),tp=(t,i,o)=>{let r=t.marginLeftKey?e6[t.marginLeftKey]??0:0,{effectiveWidth:a,resolvedWidth:l,maxWidth:c}=o??ta(t,i),d=Math.max(r,.004),u=s&&"two-row-top"===i;return n.jsxs("div",{className:`${e}-title-cell`,"data-title":t.prefix,style:{width:_(a),...r>0?{marginLeft:_(r)}:{}},children:[n.jsx("p",{className:t.className,style:t.style,children:t.text}),u&&t.marginLeftKey?n.jsx("div",{"data-controls":t.marginLeftKey,"data-controls-axis":"x","data-controls-min":"0","data-controls-max-fraction":String(l),style:{position:"absolute",top:0,left:_(-r),width:_(d),height:"100%",pointerEvents:"auto"}}):null,u?n.jsx("div",{"data-controls":t.widthKey,"data-controls-axis":"x","data-controls-max-fraction":String(c),"data-controls-variant":"column-width",className:`${e}-title-resize-handle`,style:{position:"absolute",top:0,right:_(-.004/2),width:_(.004),height:"100%",pointerEvents:"auto"}}):null]},t.className)},tm=(e="two-row")=>{let t=e7.findIndex(e=>"title1"===e.prefix),i=t>=0?te[t]:e9.title1Width,o="two-row"===e&&s;return n.jsx("div",{...o?{"data-controls":"title1MarginLeft","data-controls-axis":"x","data-controls-min":"0","data-controls-max-fraction":String(i)}:{},style:{width:_(P??0),flexShrink:0,alignSelf:"stretch",...o?{pointerEvents:"auto"}:{}}})},tg=()=>n.jsx("span",{className:`${e}-titles-baseline-strut`,style:V,"aria-hidden":"true",children:"\xa0"}),th=()=>n.jsx("span",{className:`${e}-entry-counter`,style:K,"aria-live":"polite","aria-atomic":"true",children:((e,t,i,n)=>{var o;return"B"===i?`${t+1} / ${e.length}`:((e,t)=>{let i=ni(e),{start:n,end:o}=((e,t)=>{let i=e.slice(0,t).reduce((e,t)=>e+nt(t).length,1);return{start:i,end:i+nt(e[t]).length-1}})(e,t);return n===o?`${n} / ${i}`:`${n}-${o} / ${i}`})(n,(null==(o=e[t])?void 0:o.entryIndex)??0)})(J,Z,h,t)}),tf=()=>eZ||eQ?n.jsxs("div",{className:`${e}-titles-row-header-controls`,style:e0,children:[eZ?s&&eQ?n.jsxs("div",{className:`${e}-text-bar-cell`,style:{flexShrink:0},children:[th(),n.jsx("div",{"data-controls":"countCloseGap","data-controls-axis":"x","data-controls-reverse":"true",style:{position:"absolute",top:0,right:`calc(-0.5 * (${ne(B)} + ${B}))`,width:ne(B),height:"100%",pointerEvents:"auto",zIndex:3}})]}):th():null,eQ?ty():null]}):null,ty=()=>n.jsxs("div",{className:`${e}-close-icon`,style:{width:a.scalingValue(R??0,r),height:a.scalingValue(R??0,r),marginRight:D,"--close-icon-hover-color":A},children:[n.jsx("button",{ref:eE,type:"button",className:`${e}-close-icon-inner`,onClick:eW,"aria-label":"Close",children:n.jsx(t4,{url:k??"",fill:F,hoverFill:r&&!c?F:A,className:`${e}-close-icon-img`})}),s&&n.jsx("div",{"data-controls":"iconMarginRight","data-controls-axis":"x","data-controls-reverse":"",className:`${e}-control`,style:{position:"absolute",top:0,left:"100%",width:D,height:"100%",pointerEvents:"auto"}})]}),tv=(t,i)=>n.jsxs("div",{className:`${e}-titles-row-top`,children:[eZ||eJ?tg():null,e5?tm("two-row"):null,void 0!==i?n.jsx("div",{className:`${e}-titles-row-titles`,style:{position:"relative",flex:1,minWidth:0,minHeight:i},children:t}):n.jsxs(n.Fragment,{children:[t,n.jsx("div",{style:{flex:1,minWidth:0},"aria-hidden":"true"})]}),tf()]}),tx=t=>{if(!t)return null;let i=na(e,t,V,q,G);return n.jsx(n.Fragment,{children:i.map(e=>tp(e,"single-row",tu(i,e,"single-row")))})},tb=t=>{if(!t)return null;let i=na(e,t,V,q,G),n=i.find(e=>"title1"===e.prefix);return n?tp(n,"two-row-top",tu(i,n,"two-row-top")):null},tw=(t,i=!1)=>{let o=t?na(e,t,V,q,G):[],r=o.filter(e=>"title2"===e.prefix||"title3"===e.prefix),a=s&&i;return r.length>0||a||(M??0)>0?n.jsxs("div",{className:`${e}-titles-row-bottom-wrap`,children:[r.length>0?n.jsxs("div",{className:`${e}-titles-row-bottom`,children:[r.map(e=>tp(e,"two-row-bottom",tu(o,e,"two-row-bottom"))),i&&s?n.jsxs(n.Fragment,{children:[tC(),tP()]}):null]}):null,(M??0)>0||a?n.jsx("div",{"data-controls":a?"titleRowMarginBottom":void 0,"data-controls-axis":a?"y":void 0,"data-controls-reverse":a?"":void 0,className:a?`${e}-control`:void 0,style:{height:e4,width:"100%",flexShrink:0,pointerEvents:a?"auto":"none"}}):null]}):null},t$=(e,t=!1)=>n.jsxs(n.Fragment,{children:[tv(tb(e)),tw(e,t)]}),tS=t=>U?n.jsx("div",{className:`${e}-titles-row-two-row`,children:t$(t)}):t?n.jsx("div",{className:`${e}-titles-row`,style:{width:"100%"},children:tx(t)}):null,tC=()=>tn.flatMap((e,t)=>{if(!e.marginLeftKey)return[];let i=e6[e.marginLeftKey]??0,o=tc(t),r=Math.max(i,.004),{resolvedWidth:a}=ta(e,"two-row-bottom");return n.jsx("div",{"data-controls":e.marginLeftKey,"data-controls-axis":"x","data-controls-min":"0","data-controls-max-fraction":String(a),style:{position:"absolute",top:0,left:_(o),width:_(r),height:"100%",pointerEvents:"auto"}},e.marginLeftKey)}),tP=()=>tn.map((t,i)=>{let{maxWidth:o}=ta(t,"two-row-bottom"),r=td(i)-.002;return n.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none"},children:n.jsx("div",{"data-controls":t.widthKey,"data-controls-axis":"x","data-controls-max-fraction":String(o),"data-controls-variant":"column-width",className:`${e}-title-resize-handle`,style:{position:"absolute",top:0,left:_(r),width:_(.004),height:"100%",pointerEvents:"auto"}})},`${t.widthKey}-junction`)}),tL=()=>!s||U?null:n.jsxs(n.Fragment,{children:[(()=>{let e=U?-1:e7.findIndex(e=>"title1"===e.prefix),t=!U&&(s||(P??0)>0)?(()=>{let t=P??0,i=e>=0?te[e]:e9.title1Width,o=Math.max(t,.004);return n.jsx("div",{"data-controls":"title1MarginLeft","data-controls-axis":"x","data-controls-min":"0","data-controls-max-fraction":String(i),style:{position:"absolute",top:0,left:0,width:_(o),height:"100%",pointerEvents:"auto"}},"title1MarginLeft")})():null,i=e7.flatMap((e,t)=>{if(!e.marginLeftKey)return[];let i=e6[e.marginLeftKey]??0,o=nu(e7,te,e6,t)+ts(),r=Math.max(i,.004);return n.jsx("div",{"data-controls":e.marginLeftKey,"data-controls-axis":"x","data-controls-min":"0","data-controls-max-fraction":String(te[t]),style:{position:"absolute",top:0,left:_(o),width:_(r),height:"100%",pointerEvents:"auto"}},e.marginLeftKey)});return t?[t,...i]:i})(),e7.map((t,i)=>{let o=nc(i,te),r=tl(i)-.002;return n.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none"},children:n.jsx("div",{"data-controls":t.widthKey,"data-controls-axis":"x","data-controls-max-fraction":String(o),"data-controls-variant":"column-width",className:`${e}-title-resize-handle`,style:{position:"absolute",top:0,left:_(r),width:_(.004),height:"100%",pointerEvents:"auto"}})},`${t.widthKey}-junction`)})]}),tT=t=>{let i=!t.objectFit&&"cover"===f.display;return{className:`${e}-slide-image-cell${i?` ${e}-slide-image-cell-cover`:""}`,style:{maxWidth:j,maxHeight:z,...i?{"--image-aspect-ratio":o6(f)}:{}}}},tM=t=>t.objectFit?{className:`${e}-slide-image ${e}-slide-image-custom`,style:{"--image-object-fit":t.objectFit}}:"cover"===f.display?{className:`${e}-slide-image ${e}-slide-image-cover`}:{className:`${e}-slide-image ${e}-slide-image-fit`},tE=t=>{if(0===t.length)return null;let i=t.length>1,o=ne(N),r=`calc(-0.5 * (${o} + ${N}))`;if(1===t.length){let e=t[0];return n.jsx("div",{...tT(e),children:n.jsx("img",{...tM(e),src:e.url,alt:e.name??"",draggable:!1})})}return n.jsx("div",{className:`${e}-slide-inner`,style:i?{gap:N}:void 0,children:t.map((e,a)=>n.jsxs("div",{...tT(e),children:[n.jsx("img",{...tM(e),src:e.url,alt:e.name??"",draggable:!1}),s&&i&&a<t.length-1&&n.jsx("div",{"data-controls":"imageGap","data-controls-axis":"x",style:{position:"absolute",top:0,right:r,width:o,height:"100%",pointerEvents:"auto",zIndex:3}})]},`${e.url}-${a}`))})},tI=!!(null!=et&&et.title2||null!=et&&et.title3||null!=eX&&eX.title2||null!=eX&&eX.title3||(M??0)>0||s);return n.jsxs("div",{ref:eM,"data-selection":"none",className:`${e}-lightbox${r?` ${e}-lightbox-editor`:""}${s?` ${e}-lightbox-edit-mode`:""}`,onClick:()=>{eH||eW()},role:"dialog","aria-modal":"true","aria-label":"Journal gallery",tabIndex:eQ?void 0:-1,style:{opacity:+!!ei,transition:"opacity 300ms ease",pointerEvents:ei?"auto":"none"},children:[n.jsx("div",{className:`${e}-lightbox-backdrop`,style:{backgroundColor:y,...e_}}),n.jsxs("div",{className:`${e}-lightbox-dismiss-area`,style:eB,...ez,children:[n.jsx("div",{className:`${e}-lightbox-content`,style:eN,onClick:e=>e.stopPropagation(),children:n.jsx("div",{className:`${e}-lightbox-strip`,"data-desktop-nav":X&&J.length>1?"true":"false",onPointerDown:X?eG:void 0,onPointerUp:X?eK:void 0,onPointerCancel:X?eU:void 0,children:n.jsxs("div",{className:`${e}-slide-stack`,children:[eY&&ed?n.jsx("div",{className:`${e}-slide-layer-out ${e}-slide-fade-out`,onAnimationEnd:e=>{e.target===e.currentTarget&&eA(ep)},children:n.jsx("div",{className:`${e}-slide-area`,children:tE(eY.images)})},`slide-out-${ep}`):null,n.jsx("div",{className:`${e}-slide-layer-in${ed?` ${e}-slide-fade-in`:""}`,children:n.jsx("div",{className:`${e}-slide-area`,children:ee?tE(ee.images):null})},`slide-in-${ep}-${Z}`)]})})}),n.jsxs("div",{className:`${e}-lightbox-overlay-content`,style:ej,children:[n.jsx("div",{"data-controls":s?"contentMarginTop":void 0,className:s?`${e}-control`:void 0,style:{height:O,width:"100%"}}),n.jsx("div",{style:{display:"flex",flexDirection:"row",width:"100%",...U?{flex:1,minHeight:0}:{}},children:n.jsx("div",{className:`${e}-lightbox-content-area${U?` ${e}-lightbox-content-area-stacked`:""}`,children:(eJ||eZ||eQ)&&n.jsx("div",{className:`${e}-text-bar-cell${U?` ${e}-text-bar-cell-stacked`:""}`,style:U?void 0:{flex:1,minWidth:0,width:"100%"},children:U?"fade"===w?n.jsxs("div",{style:{position:"relative",width:"100%",flex:1,alignSelf:"stretch",display:"flex",flexDirection:"column",minHeight:0,height:"100%"},children:[n.jsx("div",{ref:eT,className:e1,style:{position:"absolute",visibility:"hidden",pointerEvents:"none",left:0,right:0,top:0,width:"100%",height:"auto"},"aria-hidden":"true",children:t$(ev||et)}),n.jsxs("div",{ref:eL,className:`${e}-titles-row-two-row`,style:{...ea&&eg?{minHeight:eg}:void 0,...ea&&ef?{width:ef,maxWidth:"100%"}:void 0},children:[tv(n.jsxs("div",{className:e1,style:{position:ea?"absolute":"relative",inset:ea?0:void 0,width:"100%"},children:[eX&&ea?n.jsx("div",{className:`${e3} ${e}-titles-fade-out`,children:tb(eX)}):null,n.jsx("div",{className:`${e}-titles-layer-in${ea?` ${e}-titles-layer-in-fading ${e}-titles-fade-in`:""}`,children:tb(et)})]}),ea&&eg?eg:void 0),tI?n.jsxs("div",{className:`${e}-titles-row-bottom-area`,children:[eX&&ea?n.jsx("div",{className:`${e2} ${e}-titles-layer-out-bottom ${e}-titles-fade-out`,children:tw(eX)}):null,n.jsx("div",{className:`${e}-titles-layer-in${ea?` ${e}-titles-layer-in-fading ${e}-titles-fade-in`:""}${U?` ${e}-titles-layer-in-stacked`:""}`,children:tw(et,!0)})]}):null]})]}):n.jsxs("div",{style:{position:"relative",width:"100%",alignSelf:"stretch",display:"flex",flexDirection:"column",minHeight:0,...tI?{flex:1,height:"100%"}:{}},children:[n.jsx("div",{className:`${e}-titles-row-two-row`,style:tI?void 0:{flex:"0 0 auto",height:"auto"},children:t$(et,!0)}),tL()]}):"fade"===w?n.jsxs("div",{className:`${e}-titles-row ${e}-titles-row-header`,style:{width:"100%",position:"relative"},children:[eZ||eJ?tg():null,e5?tm("single-row"):null,n.jsxs("div",{className:`${e}-titles-row-titles`,style:ea&&eg?{minHeight:eg}:void 0,children:[n.jsx("div",{ref:eT,className:e1,style:{position:"absolute",visibility:"hidden",pointerEvents:"none",left:0,right:0,top:0,width:"100%",height:"auto"},"aria-hidden":"true",children:tS(ev||et)}),n.jsxs("div",{ref:eL,className:e1,style:{position:ea?"absolute":"relative",inset:ea?0:void 0,width:"100%",...ea&&ef?{width:ef,maxWidth:"100%"}:void 0},children:[eX&&ea?n.jsx("div",{className:`${e2} ${e}-titles-fade-out`,children:tS(eX)}):null,n.jsx("div",{className:`${e}-titles-layer-in${ea?` ${e}-titles-layer-in-fading ${e}-titles-fade-in`:""}`,children:tS(et)})]})]}),tf(),tL()]}):n.jsxs("div",{className:`${e}-titles-row ${e}-titles-row-header`,style:{width:"100%",position:"relative"},children:[eZ||eJ?tg():null,e5?tm("single-row"):null,tx(et),n.jsx("div",{style:{flex:1,minWidth:0},"aria-hidden":"true"}),tf(),tL()]})})})})]})]})]})},r$=`import { useCallback, useEffect, useMemo, useRef, useState, type MouseEvent } from 'react';
import { createPortal } from 'react-dom';
import { CommonComponentProps } from '../props';
import { useScopedStyles } from '../utils/useScopedStyles';
import { type TextStyles } from '../utils/textStylesToCss';
import { getAspectRatio, isImageRatioCover, type ImageRatioFit } from '../utils/imageFitStyles';
import { LightboxOverlay } from './LightboxOverlay';
import { buildJournalSlides, findJournalUrlSlideNumber, getEntryImages, hasJournalUrlParam, removeJournalUrlParam, setJournalUrlParam, slideNumberToIndex } from './utils';

function getCSS(P: string): string {
  return \`
.\${P}-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.\${P}-cover {
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  pointer-events: auto;
}

.\${P}-ratio-wrapper-cover {
  aspect-ratio: var(--image-aspect-ratio);
  height: auto;
  overflow: hidden;
  width: 100%;
}

.\${P}-ratio-wrapper-fit {
  height: 100%;
  width: 100%;
}

.\${P}-cover-image {
  display: block;
}

.\${P}-cover-image-cover {
  object-fit: cover;
  width: 100%;
  height: 100%;
  max-width: 100%;
}

.\${P}-cover-image-fit {
  object-fit: contain;
  width: auto;
  height: auto;
  max-width: 100%;
}

.\${P}-lightbox {
  position: fixed;
  inset: 0;
  z-index: 9997;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overscroll-behavior: none;
}

.\${P}-lightbox-editor {
  inset: auto;
  top: var(--cntrl-article-top, 0);
  left: var(--cntrl-article-left, 0);
  width: var(--cntrl-article-width, 100vw) !important;
  height: var(--cntrl-viewport-height, 100vh) !important;
}

.\${P}-lightbox-edit-mode {
  z-index: 1;
}

.\${P}-lightbox-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.\${P}-lightbox-backdrop {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.\${P}-lightbox-dismiss-area {
  position: relative;
  width: 100%;
  height: 100%;
}

.\${P}-lightbox-strip {
  position: relative;
  flex: 1;
  width: 100%;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  overflow: hidden;
  box-sizing: border-box;
}

.\${P}-lightbox-strip[data-desktop-nav="true"]::before,
.\${P}-lightbox-strip[data-desktop-nav="true"]::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 50%;
  z-index: 2;
}

.\${P}-lightbox-strip[data-desktop-nav="true"]::before {
  left: 0;
  cursor: w-resize;
}

.\${P}-lightbox-strip[data-desktop-nav="true"]::after {
  right: 0;
  cursor: e-resize;
}

.\${P}-slide-stack {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.\${P}-slide-layer-out {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.\${P}-slide-layer-in {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
}

@keyframes \${P}-slide-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes \${P}-slide-fade-out {
  from { opacity: 1; }
  to { opacity: 0; }
}

.\${P}-slide-fade-in {
  opacity: 0;
  animation: \${P}-slide-fade-in 300ms ease-in-out forwards;
}

.\${P}-slide-fade-out {
  animation: \${P}-slide-fade-out 300ms ease-in-out forwards;
}

.\${P}-slide-area {
  position: relative;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}

.\${P}-slide-inner {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.\${P}-slide-image-cell {
  position: relative;
  min-width: 0;
  height: 100%;
}

.\${P}-slide-image-cell-cover {
  aspect-ratio: var(--image-aspect-ratio);
  overflow: hidden;
  height: auto;
  width: 100%;
}

.\${P}-slide-image {
  display: block;
  user-select: none;
}

.\${P}-slide-image-cover {
  object-fit: cover;
  width: 100%;
  height: 100%;
  max-width: 100%;
}

.\${P}-slide-image-fit {
  object-fit: contain;
  width: auto;
  height: auto;
  max-width: 100%;
}

.\${P}-slide-image-custom {
  object-fit: var(--image-object-fit);
  max-width: 100%;
  height: 100%;
}

.\${P}-close-icon {
  position: relative;
  flex-shrink: 0;
  align-self: center;
  pointer-events: auto;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  padding: 0;
}

.\${P}-close-icon-inner {
  all: unset;
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 100%;
  pointer-events: auto;
}

.\${P}-close-icon-img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.\${P}-titles-row {
  position: relative;
  flex: 0 1 auto;
  z-index: 2;
  box-sizing: border-box;
  pointer-events: none;
  word-break: break-word;
  min-width: 0;
  display: flex;
  flex-direction: row;
  align-items: baseline;
}

.\${P}-titles-row-header {
  flex: 1;
  align-items: baseline;
}

.\${P}-titles-row-header-controls {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  flex-shrink: 0;
}

.\${P}-titles-baseline-strut {
  width: 0;
  overflow: hidden;
  flex-shrink: 0;
  pointer-events: none;
  white-space: nowrap;
}

.\${P}-titles-row-titles {
  position: relative;
  flex: 1;
  min-width: 0;
  align-self: flex-start;
}

.\${P}-titles-row-two-row {
  display: flex;
  flex: 1;
  height: 100%;
  min-height: 0;
  align-self: stretch;
  flex-direction: column;
  width: 100%;
}

.\${P}-titles-row-top {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  width: 100%;
  flex-shrink: 0;
  margin-bottom: 0;
}

.\${P}-titles-row-top .\${P}-title-cell[data-title="title1"] {
  flex: 0 0 auto;
  min-width: 0;
}

.\${P}-titles-row-bottom-wrap {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: auto;
  flex-shrink: 0;
}

.\${P}-titles-row-bottom-area {
  position: relative;
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.\${P}-titles-row-bottom {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  width: 100%;
}

.\${P}-titles-row-bottom .\${P}-title-cell {
  flex: 0 0 auto;
}

.\${P}-title-cell {
  position: relative;
  flex: 0 0 auto;
  min-width: 0;
  box-sizing: border-box;
}

.\${P}-text-bar-cell {
  position: relative;
  flex: 0 1 auto;
  min-width: 0;
  display: flex;
  align-items: baseline;
}

.\${P}-title1,
.\${P}-title2,
.\${P}-title3 {
  margin: 0;
  min-width: 0;
}

.\${P}-title-resize-handle {
  background: transparent;
}

.\${P}-title-resize-handle::after {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background: #FF5C02;
  pointer-events: none;
}

.\${P}-titles-stack {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  align-self: flex-start;
  min-width: 0;
}

.\${P}-titles-stack-stacked {
  flex-direction: column;
  align-items: stretch;
  height: 100%;
}

.\${P}-titles-layer-out {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  z-index: 1;
  overflow: visible;
}

.\${P}-titles-layer-out-stacked {
  flex-direction: column;
  align-items: stretch;
}

.\${P}-titles-layer-out-bottom {
  justify-content: flex-end;
}

.\${P}-titles-layer-in {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  min-width: 0;
}

.\${P}-titles-layer-in-stacked {
  flex-direction: column;
  align-items: stretch;
  flex: 1;
  min-height: 0;
}

.\${P}-titles-layer-in-fading {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: visible;
}

.\${P}-titles-fade-in,
.\${P}-titles-fade-out {
  overflow: visible;
}

@keyframes \${P}-titles-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes \${P}-titles-fade-out {
  from { opacity: 1; }
  to { opacity: 0; }
}

.\${P}-titles-fade-in {
  opacity: 0;
  animation: \${P}-titles-fade-in 400ms ease-in-out forwards;
}

.\${P}-titles-fade-out {
  animation: \${P}-titles-fade-out 400ms ease-in-out forwards;
}

.\${P}-lightbox-overlay-content {
  position: absolute;
  inset: 0;
  z-index: 3;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  isolation: isolate;
}

.\${P}-lightbox-content-area {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex: 1;
  min-width: 0;
  min-height: 0;
}

.\${P}-lightbox-content-area-stacked {
  align-items: stretch;
  align-self: stretch;
}

.\${P}-text-bar-cell-stacked {
  align-self: stretch;
  flex: 1;
  min-width: 0;
  min-height: 0;
  height: 100%;
  flex-direction: column;
  align-items: stretch;
}

.\${P}-entry-counter {
  position: relative;
  z-index: 2;
  pointer-events: none;
  white-space: nowrap;
  flex-shrink: 0;
}

.\${P}-control {
  position: relative;
  z-index: 2;
  pointer-events: auto;
  flex-shrink: 0;
}

.\${P}-control::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-width: 20px;
  min-height: 20px;
  pointer-events: auto;
  z-index: 10;
}
\`;
}

export type LightboxJournalImage = {
  url: string;
  name?: string;
  objectFit?: 'cover' | 'contain';
};

export type LightboxJournalItem = {
  title1: string;
  title2: string;
  title3: string;
  image: LightboxJournalImage[];
};

type LightboxJournalProps = {
  settings: LightboxJournalSettings;
  content?: LightboxJournalItem[];
  isEditor?: boolean;
  isEditMode?: boolean;
  isPreviewMode?: boolean;
  portalId?: string;
} & CommonComponentProps;

export const LightboxJournal = ({ settings, content, isEditor, isEditMode, isPreviewMode, portalId, metadata }: LightboxJournalProps) => {
  const { prefix: P } = useScopedStyles();
  const itemId = metadata?.itemId ?? null;
  const { cover, coverFit, type } = settings;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxInitialSlideIndex, setLightboxInitialSlideIndex] = useState(0);
  const didApplyInitialUrlRef = useRef(false);
  const urlHistoryPushedRef = useRef(false);
  const isClosingFromUrlRef = useRef(false);
  const entries = useMemo(
    () => (content ?? []).filter((entry) => getEntryImages(entry).length > 0),
    [content],
  );
  const isOverlayVisible = lightboxOpen && entries.length > 0;
  const shouldSyncUrl = !isEditor;

  const removeJournalUrl = useCallback(() => {
    if (!shouldSyncUrl) return;
    isClosingFromUrlRef.current = true;
    removeJournalUrlParam(urlHistoryPushedRef.current, itemId);
    urlHistoryPushedRef.current = false;
  }, [shouldSyncUrl, itemId]);

  const openLightbox = (slideIndex = 0) => {
    if (entries.length === 0) return;
    if (isEditor && !isEditMode && !isPreviewMode) return;
    const slides = buildJournalSlides(entries, type);
    const normalizedSlideIndex = Math.max(0, Math.min(slideIndex, slides.length - 1));
    setLightboxInitialSlideIndex(normalizedSlideIndex);
    if (shouldSyncUrl) {
      const hadParam = hasJournalUrlParam();
      setJournalUrlParam(normalizedSlideIndex + 1, itemId, hadParam);
      urlHistoryPushedRef.current = !hadParam;
    }
    setLightboxOpen(true);
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    isClosingFromUrlRef.current = false;
  }, []);

  useEffect(() => {
    if (!isEditor || isEditMode || isPreviewMode) return;
    setLightboxOpen(false);
  }, [isEditor, isEditMode, isPreviewMode]);

  useEffect(() => {
    if (!shouldSyncUrl || didApplyInitialUrlRef.current) return;
    didApplyInitialUrlRef.current = true;
    const slideNumber = findJournalUrlSlideNumber(itemId);
    if (!slideNumber) return;
    const slideIndex = slideNumberToIndex(slideNumber, buildJournalSlides(entries, type).length);
    if (slideIndex < 0) return;
    setLightboxInitialSlideIndex(slideIndex);
    setLightboxOpen(true);
  }, [entries, itemId, shouldSyncUrl, type]);

  useEffect(() => {
    if (!shouldSyncUrl) return;
    const onPopState = () => {
      if (isClosingFromUrlRef.current) {
        isClosingFromUrlRef.current = false;
        setLightboxOpen(false);
        return;
      }
      const slideNumber = findJournalUrlSlideNumber(itemId);
      if (!slideNumber) {
        setLightboxOpen(false);
        return;
      }
      const slideIndex = slideNumberToIndex(slideNumber, buildJournalSlides(entries, type).length);
      if (slideIndex < 0) {
        setLightboxOpen(false);
        return;
      }
      urlHistoryPushedRef.current = false;
      setLightboxInitialSlideIndex(slideIndex);
      setLightboxOpen(true);
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, [entries, itemId, shouldSyncUrl, type]);

  return (
    <>
      <div ref={wrapperRef} className={\`\${P}-wrapper\`}>
        <style dangerouslySetInnerHTML={{ __html: getCSS(P) }} />
        {cover ? (
          <button
            type="button"
            className={\`\${P}-cover \${isImageRatioCover(coverFit) ? \`\${P}-ratio-wrapper-cover\` : \`\${P}-ratio-wrapper-fit\`}\`}
            onClick={() => openLightbox()}
            style={{
              display: 'block',
              padding: 0,
              border: 'none',
              background: 'transparent',
              pointerEvents: isEditor && !isEditMode && !isPreviewMode ? 'none' : undefined,
              ...(isImageRatioCover(coverFit)
                ? ({ '--image-aspect-ratio': getAspectRatio(coverFit) } as React.CSSProperties)
                : {}),
            }}
            aria-label="Open journal gallery"
          >
            <img
              className={\`\${P}-cover-image \${isImageRatioCover(coverFit) ? \`\${P}-cover-image-cover\` : \`\${P}-cover-image-fit\`}\`}
              src={cover}
              alt="cover"
            />
          </button>
        ) : null}
      </div>

      {isOverlayVisible && typeof document !== 'undefined' && (() => {
        const portalTarget = (portalId ? document.getElementById(portalId) : null) ?? document.body;
        return createPortal(
          <LightboxOverlay
            prefix={P}
            entries={entries}
            settings={settings}
            isEditor={isEditor}
            isEditMode={isEditMode}
            isPreviewMode={isPreviewMode}
            initialSlideIndex={lightboxInitialSlideIndex}
            enableUrlSync={shouldSyncUrl}
            journalItemId={itemId}
            onBeforeClose={removeJournalUrl}
            onClose={closeLightbox}
          />,
          portalTarget,
        );
      })()}
    </>
  );
};

export type LightboxJournalSettings = {
  cover: string | null;
  coverFit: ImageRatioFit;
  type: 'A' | 'B';
  maxWidth: number;
  maxHeight: number;
  backgroundColor: string;
  imageGap?: number;
  textTransition: 'none' | 'fade';
  title1Width?: number;
  title2Width?: number;
  title3Width?: number;
  title1MarginLeft?: number;
  title2MarginLeft?: number;
  title3MarginLeft?: number;
  titleRowMarginBottom?: number;
  titleHeaderLayout?: 'desktop' | 'mobile';
  countCloseGap?: number;
  title1Color: string;
  title2Color: string;
  title3Color: string;
  countColor: string;
  title1FontFamily?: string;
  title1FontSettings?: { fontWeight: number; fontStyle: string };
  title1FontSize?: number;
  title1LineHeight?: number;
  title1LetterSpacing?: number;
  title1WordSpacing?: number;
  title1TextAlign?: 'left' | 'center' | 'right' | 'justify';
  title1TextAppearance?: TextStyles['textAppearance'];
  title2FontFamily?: string;
  title2FontSettings?: { fontWeight: number; fontStyle: string };
  title2FontSize?: number;
  title2LineHeight?: number;
  title2LetterSpacing?: number;
  title2WordSpacing?: number;
  title2TextAlign?: 'left' | 'center' | 'right' | 'justify';
  title2TextAppearance?: TextStyles['textAppearance'];
  title3FontFamily?: string;
  title3FontSettings?: { fontWeight: number; fontStyle: string };
  title3FontSize?: number;
  title3LineHeight?: number;
  title3LetterSpacing?: number;
  title3WordSpacing?: number;
  title3TextAlign?: 'left' | 'center' | 'right' | 'justify';
  title3TextAppearance?: TextStyles['textAppearance'];
  countFontFamily?: string;
  countFontSettings?: { fontWeight: number; fontStyle: string };
  countFontSize?: number;
  countLineHeight?: number;
  countLetterSpacing?: number;
  countWordSpacing?: number;
  countTextAlign?: 'left' | 'center' | 'right' | 'justify';
  countTextAppearance?: TextStyles['textAppearance'];
  contentMarginTop: number;
  iconMarginRight: number;
  closeIcon: string | null;
  closeIconMaxWidth: number;
  closeIconColor: string;
  closeIconHoverColor: string;
};
`,rS="data:image/svg+xml,"+encodeURIComponent('<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.959 0.40332L0.402635 15.9597" stroke="#000000" stroke-width="1.14"/><path d="M15.959 15.9594L0.402635 0.403002" stroke="#000000" stroke-width="1.14"/></svg>'),rC={fontSettings:{type:"object",display:{type:"font-settings-weight"},properties:{fontWeight:{type:"number"},fontStyle:{type:"string"}}},fontSize:{type:"number",display:{type:"font-size"}},lineHeight:{type:"number",display:{type:"line-height-input"}},letterSpacing:{type:"number",display:{type:"letter-spacing-input"}},wordSpacing:{type:"number",display:{type:"word-spacing-input"}},textAlign:{type:"string",enum:["left","center","right","justify"],display:{type:"vertical-text-aligh-options"}},textAppearance:{type:"object",display:{type:"text-appearance",useTabDesign:!0},properties:{textTransform:{type:"string",enum:["none","uppercase","lowercase","capitalize"]},textDecoration:{type:"string",enum:["none","underline"]},fontVariant:{type:"string",enum:["normal","small-caps"]}}}},rP=nm.reduce((e,t)=>({...e,...function(e){let t={};return t[ng(e,"fontFamily")]={type:"string",scope:"common",title:"",display:{type:"font-family-select",hideLabel:!0,useTabDesign:!0}},t[ng(e,"fontSettings")]={...rC.fontSettings,scope:"common",title:"",display:{type:"font-settings-weight",hideLabel:!0,useTabDesign:!0}},t[ng(e,"fontSize")]={...rC.fontSize,scope:"layout",title:"",display:{type:"font-size"}},t[ng(e,"lineHeight")]={...rC.lineHeight,scope:"layout",title:"",display:{type:"line-height-input"}},t[ng(e,"letterSpacing")]={...rC.letterSpacing,scope:"layout",title:"",display:{type:"letter-spacing-input"}},t[ng(e,"wordSpacing")]={...rC.wordSpacing,scope:"layout",title:"",display:{type:"word-spacing-input"}},t[ng(e,"textAlign")]={...rC.textAlign,scope:"layout",title:"",display:{type:"vertical-text-aligh-options"}},t[ng(e,"textAppearance")]={...rC.textAppearance,scope:"layout",title:"",display:{type:"text-appearance",useTabDesign:!0}},t}(t)}),{}),rL=nm.reduce((e,t)=>({...e,[ng(t,"fontFamily")]:"Goudy Bookletter 1911",[ng(t,"fontSettings")]:{fontWeight:400,fontStyle:"normal"},[ng(t,"letterSpacing")]:0,[ng(t,"wordSpacing")]:0,[ng(t,"textAlign")]:"left",[ng(t,"textAppearance")]:{textTransform:"none",textDecoration:"none",fontVariant:"normal"}}),{});function rT(e){return nm.reduce((t,i)=>{let n=e[`${i}FontSize`],o=e[`${i}LineHeight`];return void 0!==n&&(t[ng(i,"fontSize")]=n),void 0!==o&&(t[ng(i,"lineHeight")]=o),t},{})}let rM={type:"tab",id:"journalTextStyle",tabs:Object.fromEntries(nm.map(e=>[nh[e],nf(e)]))},rE={element:({settings:e,content:t,isEditor:i,isEditMode:r,isPreviewMode:s,portalId:c,metadata:d})=>{let{prefix:u}=a.useScopedStyles(),p=(null==d?void 0:d.itemId)??null,{cover:m,coverFit:g,type:h}=e,f=o.useRef(null),[y,v]=o.useState(!1),[x,b]=o.useState(0),w=o.useRef(!1),$=o.useRef(!1),S=o.useRef(!1),C=o.useMemo(()=>(t??[]).filter(e=>nt(e).length>0),[t]),P=y&&C.length>0,L=!i,T=o.useCallback(()=>{L&&(S.current=!0,((e,t)=>{if(i8(t)){if(e)return window.history.back();(e=>{if(typeof window>"u")return;let t=new URL(window.location.href),i=[...t.searchParams.keys()].filter(t=>e?t===i3(e)||t===i1:i5(t));if(i.forEach(e=>t.searchParams.delete(e)),i.length>0){let e=`${t.pathname}${t.search}${t.hash}`;window.history.replaceState(window.history.state,"",e)}})(t)}})($.current,p),$.current=!1)},[L,p]),M=o.useCallback(()=>{v(!1),S.current=!1},[]);return o.useEffect(()=>{!i||r||s||v(!1)},[i,r,s]),o.useEffect(()=>{if(!L||w.current)return;w.current=!0;let e=i9(p);if(!e)return;let t=i6(e,nn(C,h).length);t<0||(b(t),v(!0))},[C,p,L,h]),o.useEffect(()=>{if(!L)return;let e=()=>{if(S.current){S.current=!1,v(!1);return}let e=i9(p);if(!e)return void v(!1);let t=i6(e,nn(C,h).length);if(t<0)return void v(!1);$.current=!1,b(t),v(!0)};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)},[C,p,L,h]),n.jsxs(n.Fragment,{children:[n.jsxs("div",{ref:f,className:`${u}-wrapper`,children:[n.jsx("style",{dangerouslySetInnerHTML:{__html:function(e){return`
.${e}-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.${e}-cover {
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  pointer-events: auto;
}

.${e}-ratio-wrapper-cover {
  aspect-ratio: var(--image-aspect-ratio);
  height: auto;
  overflow: hidden;
  width: 100%;
}

.${e}-ratio-wrapper-fit {
  height: 100%;
  width: 100%;
}

.${e}-cover-image {
  display: block;
}

.${e}-cover-image-cover {
  object-fit: cover;
  width: 100%;
  height: 100%;
  max-width: 100%;
}

.${e}-cover-image-fit {
  object-fit: contain;
  width: auto;
  height: auto;
  max-width: 100%;
}

.${e}-lightbox {
  position: fixed;
  inset: 0;
  z-index: 9997;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overscroll-behavior: none;
}

.${e}-lightbox-editor {
  inset: auto;
  top: var(--cntrl-article-top, 0);
  left: var(--cntrl-article-left, 0);
  width: var(--cntrl-article-width, 100vw) !important;
  height: var(--cntrl-viewport-height, 100vh) !important;
}

.${e}-lightbox-edit-mode {
  z-index: 1;
}

.${e}-lightbox-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.${e}-lightbox-backdrop {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.${e}-lightbox-dismiss-area {
  position: relative;
  width: 100%;
  height: 100%;
}

.${e}-lightbox-strip {
  position: relative;
  flex: 1;
  width: 100%;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  overflow: hidden;
  box-sizing: border-box;
}

.${e}-lightbox-strip[data-desktop-nav="true"]::before,
.${e}-lightbox-strip[data-desktop-nav="true"]::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 50%;
  z-index: 2;
}

.${e}-lightbox-strip[data-desktop-nav="true"]::before {
  left: 0;
  cursor: w-resize;
}

.${e}-lightbox-strip[data-desktop-nav="true"]::after {
  right: 0;
  cursor: e-resize;
}

.${e}-slide-stack {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.${e}-slide-layer-out {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.${e}-slide-layer-in {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
}

@keyframes ${e}-slide-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes ${e}-slide-fade-out {
  from { opacity: 1; }
  to { opacity: 0; }
}

.${e}-slide-fade-in {
  opacity: 0;
  animation: ${e}-slide-fade-in 300ms ease-in-out forwards;
}

.${e}-slide-fade-out {
  animation: ${e}-slide-fade-out 300ms ease-in-out forwards;
}

.${e}-slide-area {
  position: relative;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}

.${e}-slide-inner {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.${e}-slide-image-cell {
  position: relative;
  min-width: 0;
  height: 100%;
}

.${e}-slide-image-cell-cover {
  aspect-ratio: var(--image-aspect-ratio);
  overflow: hidden;
  height: auto;
  width: 100%;
}

.${e}-slide-image {
  display: block;
  user-select: none;
}

.${e}-slide-image-cover {
  object-fit: cover;
  width: 100%;
  height: 100%;
  max-width: 100%;
}

.${e}-slide-image-fit {
  object-fit: contain;
  width: auto;
  height: auto;
  max-width: 100%;
}

.${e}-slide-image-custom {
  object-fit: var(--image-object-fit);
  max-width: 100%;
  height: 100%;
}

.${e}-close-icon {
  position: relative;
  flex-shrink: 0;
  align-self: center;
  pointer-events: auto;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  padding: 0;
}

.${e}-close-icon-inner {
  all: unset;
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 100%;
  pointer-events: auto;
}

.${e}-close-icon-img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.${e}-titles-row {
  position: relative;
  flex: 0 1 auto;
  z-index: 2;
  box-sizing: border-box;
  pointer-events: none;
  word-break: break-word;
  min-width: 0;
  display: flex;
  flex-direction: row;
  align-items: baseline;
}

.${e}-titles-row-header {
  flex: 1;
  align-items: baseline;
}

.${e}-titles-row-header-controls {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  flex-shrink: 0;
}

.${e}-titles-baseline-strut {
  width: 0;
  overflow: hidden;
  flex-shrink: 0;
  pointer-events: none;
  white-space: nowrap;
}

.${e}-titles-row-titles {
  position: relative;
  flex: 1;
  min-width: 0;
  align-self: flex-start;
}

.${e}-titles-row-two-row {
  display: flex;
  flex: 1;
  height: 100%;
  min-height: 0;
  align-self: stretch;
  flex-direction: column;
  width: 100%;
}

.${e}-titles-row-top {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  width: 100%;
  flex-shrink: 0;
  margin-bottom: 0;
}

.${e}-titles-row-top .${e}-title-cell[data-title="title1"] {
  flex: 0 0 auto;
  min-width: 0;
}

.${e}-titles-row-bottom-wrap {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: auto;
  flex-shrink: 0;
}

.${e}-titles-row-bottom-area {
  position: relative;
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.${e}-titles-row-bottom {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  width: 100%;
}

.${e}-titles-row-bottom .${e}-title-cell {
  flex: 0 0 auto;
}

.${e}-title-cell {
  position: relative;
  flex: 0 0 auto;
  min-width: 0;
  box-sizing: border-box;
}

.${e}-text-bar-cell {
  position: relative;
  flex: 0 1 auto;
  min-width: 0;
  display: flex;
  align-items: baseline;
}

.${e}-title1,
.${e}-title2,
.${e}-title3 {
  margin: 0;
  min-width: 0;
}

.${e}-title-resize-handle {
  background: transparent;
}

.${e}-title-resize-handle::after {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background: #FF5C02;
  pointer-events: none;
}

.${e}-titles-stack {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  align-self: flex-start;
  min-width: 0;
}

.${e}-titles-stack-stacked {
  flex-direction: column;
  align-items: stretch;
  height: 100%;
}

.${e}-titles-layer-out {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  z-index: 1;
  overflow: visible;
}

.${e}-titles-layer-out-stacked {
  flex-direction: column;
  align-items: stretch;
}

.${e}-titles-layer-out-bottom {
  justify-content: flex-end;
}

.${e}-titles-layer-in {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  min-width: 0;
}

.${e}-titles-layer-in-stacked {
  flex-direction: column;
  align-items: stretch;
  flex: 1;
  min-height: 0;
}

.${e}-titles-layer-in-fading {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: visible;
}

.${e}-titles-fade-in,
.${e}-titles-fade-out {
  overflow: visible;
}

@keyframes ${e}-titles-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes ${e}-titles-fade-out {
  from { opacity: 1; }
  to { opacity: 0; }
}

.${e}-titles-fade-in {
  opacity: 0;
  animation: ${e}-titles-fade-in 400ms ease-in-out forwards;
}

.${e}-titles-fade-out {
  animation: ${e}-titles-fade-out 400ms ease-in-out forwards;
}

.${e}-lightbox-overlay-content {
  position: absolute;
  inset: 0;
  z-index: 3;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  isolation: isolate;
}

.${e}-lightbox-content-area {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex: 1;
  min-width: 0;
  min-height: 0;
}

.${e}-lightbox-content-area-stacked {
  align-items: stretch;
  align-self: stretch;
}

.${e}-text-bar-cell-stacked {
  align-self: stretch;
  flex: 1;
  min-width: 0;
  min-height: 0;
  height: 100%;
  flex-direction: column;
  align-items: stretch;
}

.${e}-entry-counter {
  position: relative;
  z-index: 2;
  pointer-events: none;
  white-space: nowrap;
  flex-shrink: 0;
}

.${e}-control {
  position: relative;
  z-index: 2;
  pointer-events: auto;
  flex-shrink: 0;
}

.${e}-control::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-width: 20px;
  min-height: 20px;
  pointer-events: auto;
  z-index: 10;
}
`}(u)}}),m?n.jsx("button",{type:"button",className:`${u}-cover ${"cover"===g.display?`${u}-ratio-wrapper-cover`:`${u}-ratio-wrapper-fit`}`,onClick:()=>((e=0)=>{if(0===C.length||i&&!r&&!s)return;let t=Math.max(0,Math.min(e,nn(C,h).length-1));if(b(t),L){let e=i8();i7(t+1,p,e),$.current=!e}v(!0)})(),style:{display:"block",padding:0,border:"none",background:"transparent",pointerEvents:!i||r||s?void 0:"none",..."cover"===g.display?{"--image-aspect-ratio":o6(g)}:{}},"aria-label":"Open journal gallery",children:n.jsx("img",{className:`${u}-cover-image ${"cover"===g.display?`${u}-cover-image-cover`:`${u}-cover-image-fit`}`,src:m,alt:"cover"})}):null]}),P&&"u">typeof document&&(()=>{let t=(c?document.getElementById(c):null)??document.body;return l.createPortal(n.jsx(rw,{prefix:u,entries:C,settings:e,isEditor:i,isEditMode:r,isPreviewMode:s,initialSlideIndex:x,enableUrlSync:L,journalItemId:p,onBeforeClose:T,onClose:M}),t)})()]})},id:"lightbox-journal",name:"Journal",category:"galleries",version:1,defaultSize:{d:{width:350},t:{width:300},m:{width:300}},preview:{type:"image",url:"https://cdn.cntrl.site/component-assets/Journal.png"},schema:{type:"object",version:1,settings:{sizing:"auto manual",properties:{cover:{type:"string",scope:"common",title:"",display:{type:"settings-image-input"}},coverFit:{type:"object",scope:"common",title:"Display",display:{type:"image-ratio-control"},properties:{display:{type:"string",enum:["fit","cover"]},ratioValue:{type:"string",enum:["1:1","2:3","3:4","4:5","16:9"]},reversed:{type:"boolean"}}},type:{type:"string",scope:"layout",title:"",display:{type:"radio-group"},enum:["A","B"]},maxHeight:{type:"number",scope:"layout",title:"Max Height (%)",min:0,max:100,display:{type:"percentage-input"}},maxWidth:{type:"number",scope:"layout",title:"Max Width (%)",min:0,max:100,display:{type:"percentage-input"}},imageGap:{type:"number",scope:"layout",title:"Image Gap",min:0,display:{type:"range-control",visible:!1}},backgroundColor:{type:"string",scope:"common",title:"BG Default",display:{type:"settings-color-picker"}},closeIcon:{type:["string","null"],scope:"common",title:"",display:{type:"settings-image-input"}},closeIconMaxWidth:{type:"number",scope:"layout",title:"Max Width",display:{type:"full-width-input"},min:0,max:1},closeIconColor:{type:"string",scope:"common",title:"Icon Default",display:{type:"settings-color-picker"}},closeIconHoverColor:{type:"string",scope:"common",title:"Icon Hover",display:{type:"settings-color-picker"}},textTransition:{type:"string",scope:"common",title:"Transition",display:{type:"toggle-cycle",enum:["none","fade"]}},title1Width:{type:"number",scope:"layout",title:"Title 1 width",min:0,display:{type:"range-control"}},title2Width:{type:"number",scope:"layout",title:"Title 2 width",min:0,display:{type:"range-control"}},title3Width:{type:"number",scope:"layout",title:"Title 3 width",min:0,display:{type:"range-control"}},title2MarginLeft:{type:"number",scope:"layout",title:"Title 2 margin left",min:0,display:{type:"range-control"}},title3MarginLeft:{type:"number",scope:"layout",title:"Title 3 margin left",min:0,display:{type:"range-control"}},titleHeaderLayout:{type:"string",scope:"layout",title:"Title header layout",display:{type:"toggle-cycle",enum:["desktop","mobile"]}},title1MarginLeft:{type:"number",scope:"layout",title:"Title 1 margin left",min:0,display:{type:"range-control"}},titleRowMarginBottom:{type:"number",scope:"layout",title:"Title row margin bottom",min:0,display:{type:"range-control"}},countCloseGap:{type:"number",scope:"layout",title:"Count / Close Gap",min:0,display:{type:"range-control"}},title1Color:{type:"string",scope:"common",title:"Title Default",display:{type:"palette-color-picker"}},title2Color:{type:"string",scope:"common",title:"Subtitle Default",display:{type:"palette-color-picker"}},title3Color:{type:"string",scope:"common",title:"Caption Default",display:{type:"palette-color-picker"}},countColor:{type:"string",scope:"common",title:"Count Default",display:{type:"palette-color-picker"}},...rP,contentMarginTop:{type:"number",scope:"layout",title:"Content margin top",min:0,display:{type:"range-control"}},iconMarginRight:{type:"number",scope:"layout",title:"Icon margin right",min:0,display:{type:"range-control"}}},defaults:{cover:"https://cdn.cntrl.site/component-assets/journal_1.jpg",coverFit:{display:"fit",ratioValue:"1:1",reversed:!1},closeIcon:rS,backgroundColor:"rgb(255, 255, 255)",closeIconColor:"#000000",closeIconHoverColor:"#cccccc",textTransition:"fade",title1Color:"#000000",title2Color:"#000000",title3Color:"#000000",countColor:"#000000",...rL,countFontFamily:"Arial"},layoutDefaults:{m:{type:"B",imageGap:.01,maxHeight:80,maxWidth:80,closeIconMaxWidth:.08,contentMarginTop:.04,titleHeaderLayout:"mobile",title1Width:.4,title2Width:.55,title3Width:.3,title1MarginLeft:.04,title2MarginLeft:.04,title3MarginLeft:.08,titleRowMarginBottom:.08,iconMarginRight:.01,countCloseGap:.005,...rT({title1FontSize:.04,title1LineHeight:.04,title2FontSize:.04,title2LineHeight:.04,title3FontSize:.04,title3LineHeight:.04,countFontSize:.04,countLineHeight:.04})},t:{type:"A",imageGap:.05,maxHeight:80,maxWidth:40,closeIconMaxWidth:.03,contentMarginTop:.01,titleHeaderLayout:"desktop",title1Width:.35,title2Width:.16,title3Width:.1,title1MarginLeft:.01,title2MarginLeft:.1,title3MarginLeft:.1,titleRowMarginBottom:0,iconMarginRight:.01,countCloseGap:.03,...rT({title1FontSize:.0208,title1LineHeight:.0208,title2FontSize:.0208,title2LineHeight:.0208,title3FontSize:.0208,title3LineHeight:.0208,countFontSize:.0208,countLineHeight:.0208})},d:{type:"A",maxHeight:80,maxWidth:40,imageGap:.05,closeIconMaxWidth:.0125,contentMarginTop:.01,titleHeaderLayout:"desktop",title1Width:.35,title2Width:.248,title3Width:.1,title1MarginLeft:.01,title2MarginLeft:.1,title3MarginLeft:.1,titleRowMarginBottom:0,iconMarginRight:.01,countCloseGap:.02,...rT({title1FontSize:.0098,title1LineHeight:.0098,title2FontSize:.0098,title2LineHeight:.0098,title3FontSize:.0098,title3LineHeight:.0098,countFontSize:.008,countLineHeight:.0098})}},layout:["__componentName__","maxWidth","maxHeight","imageGap","title1Width","title2Width","title3Width","title2MarginLeft","title3MarginLeft","titleHeaderLayout","titleRowMarginBottom","title1MarginLeft","countCloseGap","contentMarginTop","iconMarginRight"]},panels:[{id:"general",icon:"settings",title:"General",tooltip:"General Settings",layout:[{type:"row",items:["__componentName__"]},{type:"row",items:["type"]},{type:"row",title:"Image",items:["maxWidth","maxHeight"]},{type:"row",title:"Text",items:["textTransition"]},{type:"row",title:"Close icon",items:["closeIcon","closeIconMaxWidth"]},{type:"row",title:"Cover Image",items:["cover","coverFit"]}]},{id:"typeStyle",icon:"text-icon",title:"Type Style",tooltip:"Typography",layout:[rM]}],paletteBookmark:{items:["title1Color","title2Color","title3Color","backgroundColor","countColor","closeIconColor","closeIconHoverColor"],panelIds:["general","typeStyle"]},content:{type:"array",settings:{addItemWithoutImage:!0},items:{type:"object",properties:{title1:{type:"string",label:"Title",placeholder:"Add Title...",display:{type:"text-input"}},title2:{type:"string",label:"Subtitle",placeholder:"Add Subtitle...",display:{type:"text-input"}},title3:{type:"string",label:"Caption",placeholder:"Add Caption...",display:{type:"text-input"}},image:{type:"object",label:"Image",max:2,display:{type:"media-list-input"},properties:{url:{type:"string"},name:{type:"string"},objectFit:{type:"string",enum:["cover","contain"]}},required:["url","name"]}}},default:[{title1:"Dorothy Manners & Julanne Johnston",title2:"by Evans Studio",title3:"Screenland",image:[{url:"https://cdn.cntrl.site/component-assets/journal_2.jpg",name:"",objectFit:"contain"},{url:"https://cdn.cntrl.site/component-assets/journal_3.jpg",name:"",objectFit:"contain"}]},{title1:"Inez Nadeau",title2:"Melbourne Spurr",title3:"Screenland",image:[{url:"https://cdn.cntrl.site/component-assets/journal_4.jpg",name:"",objectFit:"contain"}]},{title1:"Colleen Moore",title2:"Clarence S. Bull",title3:"Screenland",image:[{url:"https://cdn.cntrl.site/component-assets/journal_5.jpg",name:"",objectFit:"contain"}]},{title1:"Gloria Swanson",title2:"Donald Biddle Keyes",title3:"Screenland",image:[{url:"https://cdn.cntrl.site/component-assets/journal_6.jpg",name:"",objectFit:"contain"}]}]}},sourceCode:r$,assetsPaths:{content:[{path:"image.url",placeholderEnabled:!0}],parameters:[{path:"cover",placeholderEnabled:!0}]},fontSettingsPaths:{content:[],parameters:[...nm.map(e=>({path:`${ng(e,"fontFamily")}`}))]},fontRelations:{...nm.reduce((e,t)=>({...e,[`${t}FontSettings`]:`${ng(t,"fontFamily")}`}),{})}},rI={sizeType:"custom",value:700,min:400,max:700};function rk(e,t){return{widthPx:e,heightPx:e*t}}function rR(e,t,i,n,o,r){return{x:Math.min(Math.max(e,o/2),i-o/2),y:Math.min(Math.max(t,r/2),n-r/2)}}function rF(e,t,i,n){let{heightPx:o}=rk(i,n);return rR(e/2,t/2,e,t,i,o)}function rA(e,t,i){for(let n of i){let{heightPx:i}=rk(n.widthPx,n.aspectRatio),o=n.widthPx/2,r=i/2;if(e>=n.x-o&&e<=n.x+o&&t>=n.y-r&&t<=n.y+r)return!0}return!1}function rW(e,t,i){var n;let{sizeType:o,value:r,min:a,max:l}=t;return"custom"===o?r:"as is"===o?(null==(n=i.get(e))?void 0:n.naturalWidth)??r:Math.round(Math.random()*(l-a)+a)}async function rH(e){let t=[...new Set(e.filter(Boolean))];return new Map(await Promise.all(t.map(async e=>[e,await new Promise(t=>{let i=new Image;i.onload=()=>{t({aspectRatio:i.naturalHeight/i.naturalWidth,naturalWidth:i.naturalWidth})},i.onerror=()=>{t({aspectRatio:1,naturalWidth:700})},i.src=e})])))}let r_="cubic-bezier(0.86, 0, 0.07, 1)";function rN(e,t=1,i=1){let n=("blur"===e?70:100*("greyscale"===e))*Math.max(0,Math.min(1,t));if("greyscale"===e)return`grayscale(${n}%)`;if("blur"===e){let e=n/4;return e<=0?"none":`blur(${e/Math.max(i,1)}px)`}return"none"}function rj(e){return e<=1?{backgroundIndex:0,activeIndex:0}:{backgroundIndex:0,activeIndex:1}}function rz(e,t,i){if(e<=0||t<=0)return 1;let n=e*i.widthPercent/100,o=t*i.heightPercent/100;return n<=0||o<=0?1:Math.max(e/n,t/o)}function rB(e){return{width:`${e.widthPercent}%`,height:`${e.heightPercent}%`}}function rO(e,t,i){return{...rB(e),[`--${i}-stage-scale`]:t}}t.components=[t7,io,{element:function({settings:e,content:t=[],isEditor:i}){let{prefix:r}=a.useScopedStyles(),[l,s]=o.useState(null),[c,d]=o.useState([]),[u,p]=o.useState(0),m=o.useRef(0),[g,h]=o.useState({x:0,y:0}),[f,y]=o.useState("none"),v=o.useRef({x:0,y:0}),[x,b]=o.useState(!1),[w,$]=o.useState(!1),S=o.useRef(new Map),{imageSize:C=rI,cursor:P="system",target:L="area",position:T="random",visible:M="all",defaultCursor:E=null,hoverCursor:I=null}=e,k=o.useMemo(()=>`
.${r}-root {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.${r}-wrapper {
  position: absolute;
  transform: translate(-50%, -50%);
  height: auto;
}
.${r}-image {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
  position: relative;
  user-select: none;
  pointer-events: none;
}
.${r}-link {
  width: 100%;
  display: block;
}
.${r}-cursor {
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  width: 32px;
  height: 32px;
}
`,[r]),R=o.useCallback((e,t,i=c)=>{if(!l)return;let n=l.getBoundingClientRect(),o=e-n.left,r=t-n.top;h({x:o,y:r}),y(function(e,t,i,n,o,r,a,l){if("system"===o)return"none";let s=n.getBoundingClientRect(),c=document.elementFromPoint(s.left+e,s.top+t);return c&&c.closest("a")?"none":rA(e,t,i)||"area"===r?a??"none":l??"none"}(o,r,i,l,P,L,I,E))},[l,c,P,L,I,E]);o.useEffect(()=>{let e=[...t.map(e=>e.image.url),E,I].filter(e=>!!e);if(0===e.length){S.current=new Map,$(!0);return}let i=!1;return $(!1),rH(e).then(e=>{i||(S.current=e,$(!0))}),()=>{i=!0}},[t,E,I]),o.useEffect(()=>{if(!l)return;let e=e=>{e.stopPropagation(),v.current={x:e.clientX,y:e.clientY},R(e.clientX,e.clientY)},t=()=>{x&&R(v.current.x,v.current.y)};return l.addEventListener("mousemove",e),window.addEventListener("scroll",t,!0),()=>{l.removeEventListener("mousemove",e),window.removeEventListener("scroll",t,!0)}},[l,x,R]),o.useEffect(()=>{l&&x&&R(v.current.x,v.current.y)},[c,l,x,R]),o.useEffect(()=>{x||y("none")},[x]);let F=(e,t,i,n={})=>{var o;let r=(null==(o=S.current.get(e.image.url))?void 0:o.aspectRatio)??1,a=rW(e.image.url,C,S.current),{heightPx:l}=rk(a,r),s=0,c=0;return"same"===T?{x:s,y:c}=rF(t,i,a,r):(s=n.x??Math.random()*t,c=n.y??Math.random()*i,{x:s,y:c}=rR(s,c,t,i,a,l)),{id:m.current++,url:e.image.url,link:e.link,name:e.image.name,x:s,y:c,xRatio:s/t,yRatio:c/i,aspectRatio:r,widthPx:a}},A=()=>{if(!l)return;let e=l.getBoundingClientRect(),t=e.width,i=e.height;0===t||0===i||d(e=>0===e.length?e:e.map(e=>{let n="random"===C.sizeType?e.widthPx:rW(e.url,C,S.current),{heightPx:o}=rk(n,e.aspectRatio);if("same"===T){let{x:o,y:r}=rF(t,i,n,e.aspectRatio);return{...e,x:o,y:r,widthPx:n}}let{x:r,y:a}=rR(e.xRatio*t,e.yRatio*i,t,i,n,o);return{...e,x:r,y:a,widthPx:n}}))};o.useEffect(()=>{if(!l||0===t.length||!w)return;let e=l.getBoundingClientRect(),i=e.width,n=e.height;d([F(t[0],i,n)]),p(1)},[C,T,l,t,w]),o.useEffect(()=>{if(!l)return;A();let e=new ResizeObserver(A);return e.observe(l),window.addEventListener("resize",A),()=>{e.disconnect(),window.removeEventListener("resize",A)}},[l,T,C,c.length]),o.useEffect(()=>{"last One"===M&&d(e=>e.length>0?[e[e.length-1]]:[])},[M]);let W="custom"===P&&"none"!==f;return n.jsxs(n.Fragment,{children:[n.jsx("style",{dangerouslySetInnerHTML:{__html:k}}),n.jsxs("div",{ref:s,onClick:e=>{if(!l||0===t.length||!w)return;let i=l.getBoundingClientRect(),n=e.clientX-i.left,o=e.clientY-i.top;if("image"===L&&!rA(n,o,c))return;let r=0,a=0;"on Click"===T?(r=n,a=o):"same"===T?(r=i.width/2,a=i.height/2):(r=Math.random()*i.width,a=Math.random()*i.height);let s=F(t[u],i.width,i.height,{x:r,y:a}),m="all"===M?[...c,s]:[s];d(m),p(e=>e>=t.length-1?0:e+1),R(e.clientX,e.clientY,m)},onMouseEnter:()=>b(!0),onMouseLeave:()=>b(!1),className:`${r}-root`,style:{cursor:W?"none":"default"},children:[c.map(e=>n.jsx("div",{className:`${r}-wrapper`,style:{top:`${e.y}px`,left:`${e.x}px`,width:`${e.widthPx}px`,cursor:W?"none":"default"},children:"area"===L&&e.link?n.jsx("a",{href:e.link,target:"_blank",rel:"noreferrer",className:`${r}-link`,children:n.jsx("img",{src:e.url,alt:e.name,className:`${r}-image`})}):n.jsx("img",{src:e.url,alt:e.name,className:`${r}-image`})},e.id)),x&&W&&n.jsx("div",{className:`${r}-cursor`,style:{left:`${g.x}px`,top:`${g.y}px`,transform:"translate(-50%, -50%)",backgroundImage:`url('${f}')`,backgroundSize:"cover",backgroundPosition:"center"}})]})]})},id:"click-gallerie",name:"Click",category:"galleries",version:1,defaultSize:{d:{width:"100%",height:"100%"},t:{width:"100%",height:"100%"},m:{width:"100%",height:"100%"}},preview:{type:"image",url:"https://cdn.cntrl.site/component-assets/Click_Gallery.mp4"},schema:{type:"object",version:1,content:{type:"array",settings:{addItemFromFileExplorer:!0},items:{type:"object",properties:{image:{type:"object",label:"Image",display:{isObjectFitEditable:!1,type:"media-input"},properties:{url:{type:"string"},name:{type:"string"}},required:["url","name"]},link:{label:"URL",placeholder:"Enter link...",display:{type:"text-input"}}},required:["image"]},default:[{image:{url:"https://cdn.cntrl.site/projects/01JJKT02AWY2FGN2QJ7A173RNZ/articles-assets/01K7ERQK9211QXBE9W284ZNKB8.png",name:"Slider-1.png"},link:""},{image:{url:"https://cdn.cntrl.site/projects/01JJKT02AWY2FGN2QJ7A173RNZ/articles-assets/01K7ERQMFT72JD18WKP0Q2DVAT.png",name:"Slider-2.png"},link:""},{image:{url:"https://cdn.cntrl.site/projects/01JJKT02AWY2FGN2QJ7A173RNZ/articles-assets/01K7ERQNEVRXPSRX5K1YTMJQY9.png",name:"Slider-3.png"},link:""},{image:{url:"https://cdn.cntrl.site/projects/01JJKT02AWY2FGN2QJ7A173RNZ/articles-assets/01K7ERQP84JKRDT7WNWDQZR4Y9.png",name:"Slider-4.png"},link:""}]},settings:{sizing:"manual",properties:{imageSize:{type:"object",scope:"layout",title:"Img Size",display:{type:"toggle-cycle-numeric-input",enum:["custom","as is","random"],inputs:{custom:"single","as is":"none",random:"range"},defaultValue:700,defaultMin:400,defaultMax:700},min:0,max:9999,properties:{sizeType:{type:"string"},value:{type:"number"},min:{type:"number"},max:{type:"number"}}},cursor:{type:"string",scope:"common",title:"Cursor",display:{type:"toggle-cycle",enum:["system","custom"]}},target:{type:"string",scope:"common",title:"Target",display:{type:"toggle-cycle",enum:["area","image"]}},position:{type:"string",scope:"common",title:"Position",display:{type:"toggle-cycle",enum:["random","same","on Click"]}},visible:{type:"string",scope:"common",title:"Visible",display:{type:"toggle-cycle",enum:["all","last One"]}},defaultCursor:{type:["string","null"],scope:"common",title:"Default",display:{type:"settings-image-input",visible:!1}},hoverCursor:{type:["string","null"],scope:"common",title:"Hover",display:{type:"settings-image-input",visible:!1}}},defaults:{imageSize:{sizeType:"custom",value:700,min:400,max:700},cursor:"system",target:"area",position:"random",visible:"all",defaultCursor:null,hoverCursor:null},layoutDefaults:{m:{imageSize:{sizeType:"custom",value:500,min:400,max:700}},t:{imageSize:{sizeType:"custom",value:600,min:400,max:700}},d:{imageSize:{sizeType:"custom",value:700,min:400,max:700}}},displayRules:[{if:{name:"cursor",value:"custom"},then:{name:"properties.defaultCursor.display.visible",value:!0}},{if:{name:"cursor",value:"custom"},then:{name:"properties.hoverCursor.display.visible",value:!0}}],layout:["__componentName__","imageSize","cursor","target","position","visible","defaultCursor","hoverCursor"]},panels:[{id:"general",icon:"settings",title:"General",tooltip:"General Settings",layout:["__componentName__",{type:"row",title:"",items:["imageSize"]},{type:"row",title:"",items:["cursor","target"]},{type:"row",title:"",items:["position","visible"]},{type:"row",title:"Custom Cursor",items:["defaultCursor","hoverCursor"]}]}]},sourceCode:`import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { CommonComponentProps } from '../props';
import { useScopedStyles } from '../utils/index';

type ClickGallerieItem = {
  image: {
    url: string;
    name: string;
  };
  link: string;
};

type ImageSizeSettings = {
  sizeType: 'custom' | 'as is' | 'random';
  value: number;
  min: number;
  max: number;
};

type ClickGallerieSettings = {
  imageSize?: ImageSizeSettings;
  cursor?: 'system' | 'custom';
  target?: 'area' | 'image';
  position?: 'random' | 'same' | 'on Click';
  visible?: 'all' | 'last One';
  defaultCursor?: string | null;
  hoverCursor?: string | null;
};

type ClickGallerieProps = {
  settings: ClickGallerieSettings;
  content?: ClickGallerieItem[];
  isEditor?: boolean;
} & CommonComponentProps;

type ImageMeta = {
  aspectRatio: number;
  naturalWidth: number;
};

interface PlacedImage {
  id: number;
  url: string;
  link: string;
  name: string;
  x: number;
  y: number;
  xRatio: number;
  yRatio: number;
  aspectRatio: number;
  widthPx: number;
}

const DEFAULT_IMAGE_SIZE: ImageSizeSettings = {
  sizeType: 'custom',
  value: 700,
  min: 400,
  max: 700,
};

function getImageDimensions(
  widthPx: number,
  aspectRatio: number,
): { widthPx: number; heightPx: number } {
  return {
    widthPx,
    heightPx: widthPx * aspectRatio,
  };
}

function clampPosition(
  x: number,
  y: number,
  containerWidth: number,
  containerHeight: number,
  widthPx: number,
  heightPx: number,
): { x: number; y: number } {
  return {
    x: Math.min(Math.max(x, widthPx / 2), containerWidth - widthPx / 2),
    y: Math.min(Math.max(y, heightPx / 2), containerHeight - heightPx / 2),
  };
}

function getSamePosition(
  containerWidth: number,
  containerHeight: number,
  widthPx: number,
  aspectRatio: number,
): { x: number; y: number } {
  const { heightPx } = getImageDimensions(widthPx, aspectRatio);

  return clampPosition(
    containerWidth / 2,
    containerHeight / 2,
    containerWidth,
    containerHeight,
    widthPx,
    heightPx,
  );
}

function isMouseOverImage(
  mouseX: number,
  mouseY: number,
  placedImages: PlacedImage[],
) {
  for (const img of placedImages) {
    const { heightPx } = getImageDimensions(img.widthPx, img.aspectRatio);
    const halfW = img.widthPx / 2;
    const halfH = heightPx / 2;

    if (
      mouseX >= img.x - halfW
      && mouseX <= img.x + halfW
      && mouseY >= img.y - halfH
      && mouseY <= img.y + halfH
    ) {
      return true;
    }
  }
  return false;
}

function resolveCustomCursorImg(
  x: number,
  y: number,
  placedImages: PlacedImage[],
  divRef: HTMLDivElement,
  cursorMode: 'system' | 'custom',
  target: 'area' | 'image',
  hoverCursor: string | null,
  defaultCursor: string | null,
): string {
  if (cursorMode === 'system') {
    return 'none';
  }

  const rect = divRef.getBoundingClientRect();
  const el = document.elementFromPoint(rect.left + x, rect.top + y);

  if (el && el.closest('a')) {
    return 'none';
  }

  return isMouseOverImage(x, y, placedImages) || target === 'area'
    ? hoverCursor ?? 'none'
    : defaultCursor ?? 'none';
}

function resolveImageWidthPx(
  url: string,
  imageSize: ImageSizeSettings,
  metaByUrl: Map<string, ImageMeta>,
): number {
  const { sizeType, value, min, max } = imageSize;

  if (sizeType === 'custom') {
    return value;
  }

  if (sizeType === 'as is') {
    return metaByUrl.get(url)?.naturalWidth ?? value;
  }

  return Math.round(Math.random() * (max - min) + min);
}

function getCSS(P: string): string {
  return \`
.\${P}-root {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.\${P}-wrapper {
  position: absolute;
  transform: translate(-50%, -50%);
  height: auto;
}
.\${P}-image {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
  position: relative;
  user-select: none;
  pointer-events: none;
}
.\${P}-link {
  width: 100%;
  display: block;
}
.\${P}-cursor {
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  width: 32px;
  height: 32px;
}
\`;
}

function preloadImage(url: string): Promise<ImageMeta> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      resolve({
        aspectRatio: img.naturalHeight / img.naturalWidth,
        naturalWidth: img.naturalWidth,
      });
    };
    img.onerror = () => {
      resolve({ aspectRatio: 1, naturalWidth: 700 });
    };
    img.src = url;
  });
}

async function preloadImages(urls: string[]): Promise<Map<string, ImageMeta>> {
  const uniqueUrls = [...new Set(urls.filter(Boolean))];
  const entries = await Promise.all(
    uniqueUrls.map(async (url) => [url, await preloadImage(url)] as const),
  );

  return new Map(entries);
}

export function ClickGallerie({ settings, content = [], isEditor }: ClickGallerieProps) {
  const { prefix: P } = useScopedStyles();
  const [divRef, setDivRef] = useState<HTMLDivElement | null>(null);
  const [placedImages, setPlacedImages] = useState<PlacedImage[]>([]);
  const [counter, setCounter] = useState(0);
  const imageIdCounter = useRef(0);

  const [cursorCenter, setCursorCenter] = useState({ x: 0, y: 0 });
  const [customCursorImg, setCustomCursorImg] = useState('none');
  const lastMousePos = useRef({ x: 0, y: 0 });
  const [isInside, setIsInside] = useState(false);
  const [imagesReady, setImagesReady] = useState(false);
  const imageMetaByUrlRef = useRef<Map<string, ImageMeta>>(new Map());

  const {
    imageSize = DEFAULT_IMAGE_SIZE,
    cursor: cursorMode = 'system',
    target = 'area',
    position = 'random',
    visible = 'all',
    defaultCursor = null,
    hoverCursor = null,
  } = settings;

  const scopedCss = useMemo(() => getCSS(P), [P]);

  const updateCursorFromMousePosition = useCallback((
    clientX: number,
    clientY: number,
    images = placedImages,
  ) => {
    if (!divRef) return;

    const rect = divRef.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    setCursorCenter({ x, y });
    setCustomCursorImg(
      resolveCustomCursorImg(x, y, images, divRef, cursorMode, target, hoverCursor, defaultCursor),
    );
  }, [divRef, placedImages, cursorMode, target, hoverCursor, defaultCursor]);

  useEffect(() => {
    const urls = [
      ...content.map((item) => item.image.url),
      defaultCursor,
      hoverCursor,
    ].filter((url): url is string => Boolean(url));

    if (urls.length === 0) {
      imageMetaByUrlRef.current = new Map();
      setImagesReady(true);
      return;
    }

    let cancelled = false;
    setImagesReady(false);

    preloadImages(urls).then((map) => {
      if (cancelled) return;
      imageMetaByUrlRef.current = map;
      setImagesReady(true);
    });

    return () => {
      cancelled = true;
    };
  }, [content, defaultCursor, hoverCursor]);

  useEffect(() => {
    if (!divRef) return;

    const mouseMove = (e: MouseEvent) => {
      e.stopPropagation();
      lastMousePos.current = { x: e.clientX, y: e.clientY };
      updateCursorFromMousePosition(e.clientX, e.clientY);
    };

    const handleScroll = () => {
      if (!isInside) return;
      updateCursorFromMousePosition(lastMousePos.current.x, lastMousePos.current.y);
    };

    divRef.addEventListener('mousemove', mouseMove);
    window.addEventListener('scroll', handleScroll, true);

    return () => {
      divRef.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [divRef, isInside, updateCursorFromMousePosition]);

  useEffect(() => {
    if (!divRef || !isInside) return;
    updateCursorFromMousePosition(lastMousePos.current.x, lastMousePos.current.y);
  }, [placedImages, divRef, isInside, updateCursorFromMousePosition]);

  useEffect(() => {
    if (!isInside) {
      setCustomCursorImg('none');
    }
  }, [isInside]);

  const createNewImage = (
    imgData: ClickGallerieItem,
    containerWidth: number,
    containerHeight: number,
    clickPosition: { x?: number; y?: number } = {},
  ): PlacedImage => {
    const aspectRatio = imageMetaByUrlRef.current.get(imgData.image.url)?.aspectRatio ?? 1;
    const widthPx = resolveImageWidthPx(imgData.image.url, imageSize, imageMetaByUrlRef.current);
    const { heightPx } = getImageDimensions(widthPx, aspectRatio);

    let x = 0;
    let y = 0;
    if (position === 'same') {
      ({ x, y } = getSamePosition(containerWidth, containerHeight, widthPx, aspectRatio));
    } else {
      x = clickPosition.x ?? Math.random() * containerWidth;
      y = clickPosition.y ?? Math.random() * containerHeight;
      ({ x, y } = clampPosition(x, y, containerWidth, containerHeight, widthPx, heightPx));
    }

    return {
      id: imageIdCounter.current++,
      url: imgData.image.url,
      link: imgData.link,
      name: imgData.image.name,
      x,
      y,
      xRatio: x / containerWidth,
      yRatio: y / containerHeight,
      aspectRatio,
      widthPx,
    };
  };

  const repositionPlacedImages = () => {
    if (!divRef) return;

    const rect = divRef.getBoundingClientRect();
    const containerWidth = rect.width;
    const containerHeight = rect.height;
    if (containerWidth === 0 || containerHeight === 0) return;

    setPlacedImages((prev) => {
      if (prev.length === 0) return prev;

      return prev.map((img) => {
        const widthPx = imageSize.sizeType === 'random'
          ? img.widthPx
          : resolveImageWidthPx(img.url, imageSize, imageMetaByUrlRef.current);
        const { heightPx } = getImageDimensions(widthPx, img.aspectRatio);

        if (position === 'same') {
          const { x, y } = getSamePosition(containerWidth, containerHeight, widthPx, img.aspectRatio);
          return { ...img, x, y, widthPx };
        }

        const { x, y } = clampPosition(
          img.xRatio * containerWidth,
          img.yRatio * containerHeight,
          containerWidth,
          containerHeight,
          widthPx,
          heightPx,
        );

        return { ...img, x, y, widthPx };
      });
    });
  };

  useEffect(() => {
    if (!divRef || content.length === 0 || !imagesReady) return;

    const rect = divRef.getBoundingClientRect();
    const containerWidth = rect.width;
    const containerHeight = rect.height;

    const newImg = createNewImage(content[0], containerWidth, containerHeight);

    setPlacedImages([newImg]);
    setCounter(1);
  }, [imageSize, position, divRef, content, imagesReady]);

  useEffect(() => {
    if (!divRef) return;

    repositionPlacedImages();

    const ro = new ResizeObserver(repositionPlacedImages);
    ro.observe(divRef);
    window.addEventListener('resize', repositionPlacedImages);

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', repositionPlacedImages);
    };
  }, [divRef, position, imageSize, placedImages.length]);

  useEffect(() => {
    if (visible === 'last One') {
      setPlacedImages((prev) => (prev.length > 0 ? [prev[prev.length - 1]] : []));
    }
  }, [visible]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef || content.length === 0 || !imagesReady) return;

    const rect = divRef.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    if (target === 'image' && !isMouseOverImage(clickX, clickY, placedImages)) return;

    let x = 0;
    let y = 0;
    if (position === 'on Click') {
      x = clickX;
      y = clickY;
    } else if (position === 'same') {
      x = rect.width / 2;
      y = rect.height / 2;
    } else {
      x = Math.random() * rect.width;
      y = Math.random() * rect.height;
    }

    const imgData = content[counter];
    const newImage = createNewImage(imgData, rect.width, rect.height, { x, y });
    const nextPlacedImages = visible === 'all' ? [...placedImages, newImage] : [newImage];

    setPlacedImages(nextPlacedImages);
    setCounter((prev) => (prev >= content.length - 1 ? 0 : prev + 1));
    updateCursorFromMousePosition(e.clientX, e.clientY, nextPlacedImages);
  };

  const useCustomCursor = cursorMode === 'custom' && customCursorImg !== 'none';

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: scopedCss }} />
      <div
        ref={setDivRef}
        onClick={handleClick}
        onMouseEnter={() => setIsInside(true)}
        onMouseLeave={() => setIsInside(false)}
        className={\`\${P}-root\`}
        style={{ cursor: useCustomCursor ? 'none' : 'default' }}
      >
        {placedImages.map((img) => (
          <div
            className={\`\${P}-wrapper\`}
            key={img.id}
            style={{
              top: \`\${img.y}px\`,
              left: \`\${img.x}px\`,
              width: \`\${img.widthPx}px\`,
              cursor: useCustomCursor ? 'none' : 'default',
            }}
          >
            {target === 'area' && img.link ? (
              <a href={img.link} target="_blank" rel="noreferrer" className={\`\${P}-link\`}>
                <img src={img.url} alt={img.name} className={\`\${P}-image\`} />
              </a>
            ) : (
              <img src={img.url} alt={img.name} className={\`\${P}-image\`} />
            )}
          </div>
        ))}
        {isInside && useCustomCursor && (
          <div
            className={\`\${P}-cursor\`}
            style={{
              left: \`\${cursorCenter.x}px\`,
              top: \`\${cursorCenter.y}px\`,
              transform: 'translate(-50%, -50%)',
              backgroundImage: \`url('\${customCursorImg}')\`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        )}
      </div>
    </>
  );
}
`,assetsPaths:{content:[{path:"image.url",placeholderEnabled:!0}],parameters:[{path:"settings.defaultCursor"},{path:"settings.hoverCursor"}]},fontSettingsPaths:{content:[],parameters:[]}},im,{element:function({settings:e,isEditor:t,isEditMode:i,isPreviewMode:r,metadata:l,activeEvent:s}){let c=!!i,d=r&&t||!t,{prefix:u}=a.useScopedStyles(),{type:p="A",fieldsToShow:m=2,fields:g=[],buttonLabel:h,gap:f,fieldsGap:y,buttonCorners:v,buttonStroke:x,buttonPadding:b,isButtonFullWidth:w,inputCorners:$,inputStroke:S,inputPadding:C,inputColor:P,inputTextColor:L,inputBorderColor:T,placeholderColor:M,buttonColor:E,buttonTextColor:I,buttonBorderColor:k,labelTextColor:R,successColor:F,errorColor:A,fontFamily:W,inputFontSettings:H,inputFontSize:_,inputLineHeight:N,inputLetterSpacing:j,inputWordSpacing:z,inputTextAppearance:B,buttonFontSettings:O,buttonFontSize:D,buttonLineHeight:V,buttonLetterSpacing:q,buttonWordSpacing:G,buttonTextAppearance:K,labelFontSettings:U,labelFontSize:X,labelLineHeight:Y,labelLetterSpacing:J,labelWordSpacing:Z,labelTextAppearance:Q,statusFontSettings:ee,statusFontSize:et,statusLineHeight:ei,statusLetterSpacing:en,statusWordSpacing:eo,statusTextAppearance:er,successMessage:ea,errorMessage:el,stateOverrides:es}=e,ec="B"===p,ed=g.slice(0,Math.min(m,g.length)),eu=t1(t2({fontSettings:{fontFamily:W,fontWeight:(null==H?void 0:H.fontWeight)??400,fontStyle:(null==H?void 0:H.fontStyle)??"normal"},fontSize:_??.01,lineHeight:N,letterSpacing:j??0,wordSpacing:z??0,textAppearance:B,color:L},t)),ep=a.scalingValue(S??0,t),em=a.scalingValue((N??_??.01)+((null==C?void 0:C.top)??0)+((null==C?void 0:C.bottom)??0)+("C"===p?S??0:(S??0)*2),t),eg={...eu,borderStyle:"solid",borderRadius:"C"===p?0:a.scalingValue($??0,t),..."C"===p?{borderTopWidth:0,borderRightWidth:0,borderBottomWidth:ep,borderLeftWidth:0}:{borderWidth:ep},paddingTop:a.scalingValue((null==C?void 0:C.top)??0,t),paddingRight:a.scalingValue((null==C?void 0:C.right)??0,t),paddingBottom:a.scalingValue((null==C?void 0:C.bottom)??0,t),paddingLeft:a.scalingValue((null==C?void 0:C.left)??0,t),height:em,minHeight:em},eh=t1(t2({fontSettings:{fontFamily:W,fontWeight:(null==O?void 0:O.fontWeight)??400,fontStyle:(null==O?void 0:O.fontStyle)??"normal"},fontSize:D??.01,lineHeight:V,letterSpacing:q??0,wordSpacing:G??0,textAppearance:K,color:I},t)),ef=a.scalingValue(x??0,t),ey=t2({fontSettings:{fontFamily:W,fontWeight:(null==U?void 0:U.fontWeight)??400,fontStyle:(null==U?void 0:U.fontStyle)??"normal"},fontSize:X??.01,lineHeight:Y,letterSpacing:J??0,wordSpacing:Z??0,textAppearance:Q,color:R},t),ev=t1(t2({fontSettings:{fontFamily:W,fontWeight:(null==ee?void 0:ee.fontWeight)??400,fontStyle:(null==ee?void 0:ee.fontStyle)??"normal"},fontSize:et??.01,lineHeight:ei,letterSpacing:en??0,wordSpacing:eo??0,textAppearance:er,color:F},t)),ex=a.buildColorVars(u,{inputColor:P,inputTextColor:L,inputBorderColor:T,placeholderColor:null!=M&&M.trim()?M:"#cccccc",buttonColor:E,buttonTextColor:I,buttonBorderColor:k,labelTextColor:R,successColor:F,errorColor:A},ih,iy,es),[eb,ew]=o.useState(()=>Object.fromEntries(ed.map(e=>[e.name,""]))),[e$,eS]=o.useState("idle"),[eC,eP]=o.useState(null),eL="success"===s?"success":"error"===s?"error":e$,eT="error"===s?el:eC,eM="filled"===s,eE=o.useMemo(()=>{if(!eM)return eb;let e=null;for(let t of ed)(eb[t.name]??"").trim().length>0||((e=e??{...eb})[t.name]="Filled");return e??eb},[eb,eM,ed]),eI="error"===eL?a.getFormFieldValidationError(ed,eE):null,ek=`${s&&"default"!==s?`${u}-state-${s}`:""}`.trim(),eR=null==l?void 0:l.submitUrl,eF=(e,t)=>{ew(i=>({...i,[e]:t}))},eA=async e=>{if(e.preventDefault(),!d)return;let t=Object.fromEntries(ed.map(e=>{var t;return[e.name,(null==(t=eb[e.name])?void 0:t.trim())??""]}).filter(([,e])=>e));if(!eR){eS("error"),eP("No integrations were found for this form.");return}if(0===Object.keys(t).length)return;let i=a.getFormFieldValidationError(ed,eb);if(i){eS("error"),eP(i);return}eS("submitting"),eP(null);try{let e=await fetch(eR,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!e.ok){let t=await e.text();throw Error(t||`Request failed: ${e.status}`)}eS("success"),ew(Object.fromEntries(ed.map(e=>[e.name,""])))}catch(e){eS("error"),eP(e instanceof Error?e.message:"Something went wrong")}};return n.jsxs("div",{className:`${u}-wrapper ${u}-type-${p} ${ek}`.trim(),style:ex,children:[n.jsx("style",{dangerouslySetInnerHTML:{__html:`
.${u}-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: ${ig(48)};
}
.${u}-wrapper.${u}-type-C .${u}-input:focus-visible,
.${u}-wrapper.${u}-type-C .${u}-button:focus-visible {
  outline: none;
}
.${u}-form {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.${u}-fields {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
}
.${u}-field-group {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
}
.${u}-field-group.${u}-labeled {
  gap: ${ig(4)};
}
.${u}-field-label {
  white-space: nowrap;
  color: var(--${u}-label-text-color);
}
.${u}-input {
  width: 100%;
  box-sizing: border-box;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  background-color: var(--${u}-input-color);
  color: var(--${u}-input-text-color);
  border-color: var(--${u}-input-border-color);
  transition: color 250ms, border-color 250ms, background-color 250ms;
}
.${u}-input::placeholder {
  color: var(--${u}-placeholder-color);
  opacity: 1;
  transition: color 250ms, opacity 250ms;
}
.${u}-input:hover {
  background-color: var(--${u}-hover-input-color, var(--${u}-input-color));
  color: var(--${u}-hover-input-text-color, var(--${u}-input-text-color));
  border-color: var(--${u}-hover-input-border-color, var(--${u}-input-border-color));
}
.${u}-wrapper.${u}-state-hover .${u}-input {
  background-color: var(--${u}-hover-input-color, var(--${u}-input-color));
  color: var(--${u}-hover-input-text-color, var(--${u}-input-text-color));
  border-color: var(--${u}-hover-input-border-color, var(--${u}-input-border-color));
}
.${u}-input:focus,
.${u}-input:focus-visible,
.${u}-wrapper.${u}-state-focus .${u}-input {
  background-color: var(--${u}-focus-input-color, var(--${u}-input-color));
  color: var(--${u}-focus-input-text-color, var(--${u}-input-text-color));
  border-color: var(--${u}-focus-input-border-color, var(--${u}-input-border-color));
}
.${u}-input[data-filled="true"] {
  background-color: var(--${u}-filled-input-color, var(--${u}-input-color));
  color: var(--${u}-filled-input-text-color, var(--${u}-input-text-color));
  border-color: var(--${u}-filled-input-border-color, var(--${u}-input-border-color));
}
.${u}-wrapper.${u}-state-filled .${u}-button {
  background-color: var(--${u}-filled-button-color, var(--${u}-button-color));
  color: var(--${u}-filled-button-text-color, var(--${u}-button-text-color));
  border-color: var(--${u}-filled-button-border-color, var(--${u}-button-border-color));
}
.${u}-wrapper.${u}-state-success .${u}-input,
.${u}-wrapper.${u}-state-success .${u}-button {
  pointer-events: none;
}
.${u}-wrapper.${u}-state-error .${u}-input {
}
.${u}-input[data-field-type="textarea"] {
  resize: vertical;
}
.${u}-input:disabled {
  cursor: not-allowed;
}
.${u}-button {
  cursor: pointer;
  white-space: nowrap;
  box-sizing: border-box;
  outline: none;
  background-color: var(--${u}-button-color);
  color: var(--${u}-button-text-color);
  border-color: var(--${u}-button-border-color);
  transition: color 250ms, background-color 250ms, border-color 250ms;
}
.${u}-button:hover {
  background-color: var(--${u}-hover-button-color, var(--${u}-button-color));
  color: var(--${u}-hover-button-text-color, var(--${u}-button-text-color));
  border-color: var(--${u}-hover-button-border-color, var(--${u}-button-border-color));
}
.${u}-wrapper.${u}-state-hover .${u}-button {
  background-color: var(--${u}-hover-button-color, var(--${u}-button-color));
  color: var(--${u}-hover-button-text-color, var(--${u}-button-text-color));
  border-color: var(--${u}-hover-button-border-color, var(--${u}-button-border-color));
}
.${u}-button:focus,
.${u}-button:focus-visible,
.${u}-wrapper.${u}-state-focus .${u}-button {
  background-color: var(--${u}-focus-button-color, var(--${u}-button-color));
  color: var(--${u}-focus-button-text-color, var(--${u}-button-text-color));
  border-color: var(--${u}-focus-button-border-color, var(--${u}-button-border-color));
}
.${u}-input:focus-visible,
.${u}-wrapper.${u}-state-focus .${u}-input {
  outline: none;
}
.${u}-button:focus-visible,
.${u}-wrapper.${u}-state-focus .${u}-button {
  outline: none;
}
.${u}-success {
  margin-top: ${ig(8)};
  color: var(--${u}-success-success-color, var(--${u}-success-color));
}
.${u}-error {
  margin-top: ${ig(8)};
  color: var(--${u}-error-error-color, var(--${u}-error-color));
}
.${u}-overlay-anchor {
  position: relative;
  height: auto;
}
.${u}-control {
  position: relative;
  z-index: 2;
  width: 100%;
}
.${u}-control::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 20px;
  pointer-events: auto;
  z-index: 10;
}
`}}),n.jsxs("form",{onSubmit:eA,className:`${u}-form`,children:[n.jsx("div",{className:`${u}-fields`,children:ed.map((e,i)=>n.jsxs(o.Fragment,{children:[i>0&&n.jsx("div",{"data-controls":c?"fieldsGap":void 0,className:c?`${u}-control`:void 0,style:{height:a.scalingValue(y??0,t)}}),n.jsxs("div",{className:`${u}-field-group${ec?` ${u}-labeled`:""}`,children:[ec&&n.jsx("span",{className:`${u}-field-label`,style:ey?{...ey,lineHeight:ey.fontSize}:void 0,children:e.label||e.name}),"textarea"===e.type?n.jsx("textarea",{name:e.name,autoComplete:"off",value:eE[e.name]??"",onChange:t=>eF(e.name,t.target.value),placeholder:e.placeholder,className:`${u}-input`,style:eg,rows:1,"data-filled":eM||(eE[e.name]??"").trim().length>0,"data-field-type":"textarea"}):n.jsx("input",{type:"phone"===e.type?"tel":"email"===e.type?"email":"text",name:e.name,autoComplete:"off",value:eE[e.name]??"",onChange:t=>eF(e.name,t.target.value),placeholder:e.placeholder,required:e.isRequired??"email"===e.type,className:`${u}-input`,style:eg,"data-filled":eM||(eE[e.name]??"").trim().length>0})]})]},i))}),n.jsx("div",{"data-controls":c?"gap":void 0,className:c?`${u}-control`:void 0,style:{height:a.scalingValue(f??0,t)}}),n.jsx("div",{className:`${u}-overlay-anchor`,children:n.jsx("button",{type:d?"submit":"button",className:`${u}-button`,style:{borderStyle:"solid",borderRadius:a.scalingValue(v??0,t),borderWidth:ef,paddingTop:a.scalingValue((null==b?void 0:b.top)??0,t),paddingRight:a.scalingValue((null==b?void 0:b.right)??0,t),paddingBottom:a.scalingValue((null==b?void 0:b.bottom)??0,t),paddingLeft:a.scalingValue((null==b?void 0:b.left)??0,t),pointerEvents:d?"auto":void 0,...eh,...w?{width:"100%",textAlign:"center",whiteSpace:"normal"}:{}},children:n.jsx("span",{className:`${u}-overlay-anchor`,style:w?{display:"inline-block",maxWidth:"100%",whiteSpace:"normal",textAlign:"center"}:void 0,children:"submitting"===e$?"...":h})})})]}),"success"===eL&&n.jsx("p",{className:`${u}-success`,style:{...ev},children:ea}),"error"===eL&&n.jsx("p",{className:`${u}-error`,style:{...ev},role:"alert",children:eI??eT??el})]})},id:"form",name:"Newsletter Stacked",category:"forms",preview:{type:"image",url:"https://cdn.cntrl.site/component-assets/Newsletter_Stacked.png"},defaultSize:{d:{width:300},t:{width:300},m:{width:340}},schema:ib,sourceCode:iv,fontRelations:{inputFontSettings:"fontFamily",buttonFontSettings:"fontFamily",labelFontSettings:"fontFamily",statusFontSettings:"fontFamily"},assetsPaths:{content:[],parameters:[]},fontSettingsPaths:{content:[],parameters:[{path:"fontFamily"}]}},{element:({settings:e,isEditor:t,isPreviewMode:i,metadata:r,activeEvent:l})=>{let{prefix:s}=a.useScopedStyles(),c=i&&t||!t,{fields:d=[{name:"email",type:"email",placeholder:"Your email"}],buttonIcon:u,buttonLabel:p,fieldsToShow:m=1,fontFamily:g,inputFontSettings:h,inputFontSize:f,inputLineHeight:y,inputLetterSpacing:v,inputWordSpacing:x,inputTextAppearance:b,buttonFontSettings:w,buttonFontSize:$,buttonLineHeight:S,buttonLetterSpacing:C,buttonWordSpacing:P,buttonTextAppearance:L,statusFontSettings:T,statusFontSize:M,statusLineHeight:E,statusLetterSpacing:I,statusWordSpacing:k,statusTextAppearance:R,iconMaxWidth:F,minHeight:A,corners:W,stroke:H,stateOverrides:_,inputPadding:N,buttonPadding:j,successMessage:z="Thanks for subscribing!",errorMessage:B="Please, fill all required fields."}=e,O=d.slice(0,Math.min(m,d.length)),[D,V]=o.useState(()=>Object.fromEntries(O.map(e=>[e.name,""]))),[q,G]=o.useState("idle"),[K,U]=o.useState(null),X="success"===l?"success":"error"===l?"error":q,Y="error"===l?B:K,J="filled"===l,Z=o.useMemo(()=>{if(!J)return D;let e=null;for(let t of O)(D[t.name]??"").trim().length>0||((e=e??{...D})[t.name]="Filled");return e??D},[J,D,O]),Q="error"===X?a.getFormFieldValidationError(O,Z):null,ee=l&&"default"!==l?`${s}-state-${l}`:"",et=O.some(e=>(Z[e.name]??"").trim().length>0),ei=ee!==`${s}-state-filled`&&et?`${s}-state-filled`:"",en=`${ee} ${ei}`.trim(),eo=null==r?void 0:r.submitUrl,er=p??"",ea=(null==u?void 0:u.icon)??"",el=(null==u?void 0:u.mode)==="On",es=er||"Submit",ec={fontSettings:{fontFamily:g,fontWeight:(null==h?void 0:h.fontWeight)??400,fontStyle:(null==h?void 0:h.fontStyle)??"normal"},fontSize:f??.01,lineHeight:y,letterSpacing:v??0,wordSpacing:x??0,textAppearance:b,color:e.inputTextColor??"#111111"},ed={fontSettings:{fontFamily:g,fontWeight:(null==w?void 0:w.fontWeight)??400,fontStyle:(null==w?void 0:w.fontStyle)??"normal"},fontSize:$??.01,lineHeight:S,letterSpacing:C??0,wordSpacing:P??0,textAppearance:L,color:e.buttonTextColor??"#ffffff"},eu={fontSettings:{fontFamily:g,fontWeight:(null==T?void 0:T.fontWeight)??400,fontStyle:(null==T?void 0:T.fontStyle)??"normal"},fontSize:M??.01,lineHeight:E,letterSpacing:I??0,wordSpacing:k??0,textAppearance:R,color:e.successColor??"#22c55e"},ep=t1(t2(ec,t)),em=t1(t2(ed,t)),eg=t1(t2(eu,t)),eh=a.buildColorVars(s,{strokeColor:e.strokeColor,inputColor:e.inputColor,placeholderColor:e.placeholderColor,buttonColor:e.buttonColor,successColor:e.successColor,errorColor:e.errorColor,inputTextColor:e.inputTextColor??(null==ec?void 0:ec.color)??"#111111",buttonTextColor:e.buttonTextColor??(null==ed?void 0:ed.color)??"#ffffff"},i$,iS,_),ef={borderRadius:a.scalingValue(W,t),borderWidth:a.scalingValue(H,t),borderStyle:"solid"},ey={borderLeftWidth:a.scalingValue(H,t)},ev=async e=>{if(e.preventDefault(),!c)return;let t=Object.fromEntries(O.map(e=>{var t;return[e.name,(null==(t=D[e.name])?void 0:t.trim())??""]}).filter(([,e])=>e));if(!eo){G("error"),U("No integrations were found for this form.");return}if(0===Object.keys(t).length)return;let i=a.getFormFieldValidationError(O,D);if(i){G("error"),U(i);return}G("submitting"),U(null);try{let e=await fetch(eo,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!e.ok){let t=await e.text();throw Error(t||`Request failed: ${e.status}`)}G("success"),V(Object.fromEntries(O.map(e=>[e.name,""])))}catch(e){G("error"),U(e instanceof Error?e.message:"Something went wrong")}};return n.jsxs("div",{className:`${s}-wrapper ${en}`.trim(),style:eh,children:[n.jsx("style",{dangerouslySetInnerHTML:{__html:function(e){return`
.${e}-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: stretch;
  justify-content: center;
}
.${e}-form {
  display: flex;
  width: 100%;
  align-items: stretch;
  overflow: hidden;
  border-color: var(--${e}-stroke-color);
  transition: border-color 250ms;
}
.${e}-form:hover {
  border-color: var(--${e}-hover-stroke-color, var(--${e}-stroke-color));
}
.${e}-form:focus-within {
  border-color: var(--${e}-focus-stroke-color, var(--${e}-stroke-color));
}
.${e}-wrapper.${e}-state-hover .${e}-form {
  border-color: var(--${e}-hover-stroke-color, var(--${e}-stroke-color));
}
.${e}-wrapper.${e}-state-focus .${e}-form {
  border-color: var(--${e}-focus-stroke-color, var(--${e}-stroke-color));
}
.${e}-wrapper.${e}-state-filled .${e}-form {
  border-color: var(--${e}-filled-stroke-color, var(--${e}-stroke-color));
}
.${e}-inputWrap {
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 0;
  background-color: var(--${e}-input-color);
  transition: background-color 250ms;
}
.${e}-inputWrap:hover,
.${e}-wrapper.${e}-state-hover .${e}-inputWrap {
  background-color: var(--${e}-hover-input-color, var(--${e}-input-color));
}
.${e}-inputWrap:focus-within,
.${e}-wrapper.${e}-state-focus .${e}-inputWrap {
  background-color: var(--${e}-focus-input-color, var(--${e}-input-color));
}
.${e}-wrapper.${e}-state-filled .${e}-inputWrap {
  background-color: var(--${e}-filled-input-color, var(--${e}-input-color));
}
.${e}-input {
  flex: 1;
  min-width: 0;
  background: transparent;
  border: none;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  color: var(--${e}-input-text-color);
  transition: color 250ms, background-color 250ms, border-color 250ms;
}
.${e}-input:hover {
  color: var(--${e}-hover-input-text-color, var(--${e}-input-text-color));
}
.${e}-inputWrap:hover .${e}-input,
.${e}-wrapper.${e}-state-hover .${e}-input {
  color: var(--${e}-hover-input-text-color, var(--${e}-input-text-color));
}
.${e}-input:focus,
.${e}-wrapper.${e}-state-focus .${e}-input {
  color: var(--${e}-focus-input-text-color, var(--${e}-input-text-color));
}
.${e}-wrapper.${e}-state-filled .${e}-input {
  color: var(--${e}-filled-input-text-color, var(--${e}-input-text-color));
}
.${e}-input::placeholder {
  color: var(--${e}-placeholder-color);
  opacity: 1;
  transition: color 250ms, opacity 250ms;
}
.${e}-inputWrap:hover .${e}-input::placeholder,
.${e}-wrapper.${e}-state-hover .${e}-input::placeholder {
  color: var(--${e}-hover-placeholder-color, var(--${e}-placeholder-color));
}
.${e}-inputWrap:focus-within .${e}-input::placeholder,
.${e}-wrapper.${e}-state-focus .${e}-input::placeholder {
  color: var(--${e}-focus-placeholder-color, var(--${e}-placeholder-color));
}
.${e}-wrapper.${e}-state-filled .${e}-input::placeholder {
  color: var(--${e}-filled-placeholder-color, var(--${e}-placeholder-color));
}
.${e}-submitBtn {
  box-sizing: border-box;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  background-color: var(--${e}-button-color);
  color: var(--${e}-button-text-color);
  border-left-style: solid;
  border-left-color: var(--${e}-stroke-color);
  transition: color 250ms, background-color 250ms, border-color 250ms;
}
.${e}-submitBtn img {
  display: block;
  box-sizing: border-box;
  flex: 0 1 auto;
  min-width: 0;
  height: 100%;
  width: auto;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
.${e}-submitBtn svg {
  display: block;
  box-sizing: border-box;
  flex: 0 1 auto;
  min-width: 0;
  height: 100%;
  width: auto;
  max-width: 100%;
  max-height: 100%;
}
.${e}-submitBtn .${e}-submitBtnIcon {
  position: relative;
  top: auto;
  left: auto;
  transform: none;
  display: block;
  box-sizing: border-box;
  flex: 0 1 auto;
  align-self: stretch;
  min-width: 0;
  width: auto;
  height: auto;
  aspect-ratio: 1;
  max-width: 100%;
  max-height: 100%;
}
.${e}-submitBtn:hover,
.${e}-wrapper.${e}-state-hover .${e}-submitBtn {
  background-color: var(--${e}-hover-button-color, var(--${e}-button-color));
  color: var(--${e}-hover-button-text-color, var(--${e}-button-text-color));
  border-left-color: var(--${e}-hover-stroke-color, var(--${e}-stroke-color));
}
.${e}-submitBtn:focus,
.${e}-wrapper.${e}-state-focus .${e}-submitBtn {
  background-color: var(--${e}-focus-button-color, var(--${e}-button-color));
  color: var(--${e}-focus-button-text-color, var(--${e}-button-text-color));
  border-left-color: var(--${e}-focus-stroke-color, var(--${e}-stroke-color));
}
.${e}-wrapper.${e}-state-filled .${e}-submitBtn {
  background-color: var(--${e}-filled-button-color, var(--${e}-button-color));
  color: var(--${e}-filled-button-text-color, var(--${e}-button-text-color));
  border-left-color: var(--${e}-filled-stroke-color, var(--${e}-stroke-color));
}
.${e}-submitBtn:hover .${e}-submitBtnIcon,
.${e}-wrapper.${e}-state-hover .${e}-submitBtn .${e}-submitBtnIcon {
  background-color: var(--${e}-hover-button-text-color, var(--${e}-button-text-color));
}
.${e}-submitBtn:focus .${e}-submitBtnIcon,
.${e}-wrapper.${e}-state-focus .${e}-submitBtn .${e}-submitBtnIcon {
  background-color: var(--${e}-focus-button-text-color, var(--${e}-button-text-color));
}
.${e}-wrapper.${e}-state-filled .${e}-submitBtn .${e}-submitBtnIcon {
  background-color: var(--${e}-filled-button-text-color, var(--${e}-button-text-color));
}
.${e}-wrapper.${e}-state-success .${e}-input,
.${e}-wrapper.${e}-state-success .${e}-submitBtn {
  pointer-events: none;
}
.${e}-overlayAnchor {
  position: relative;
  display: flex;
  align-items: center;
}
.${e}-success {
  margin-top: ${iw(8)};
  font-size: ${iw(14)};
  color: var(--${e}-success-success-color, var(--${e}-success-color));
}
.${e}-error {
  margin-top: ${iw(8)};
  font-size: ${iw(14)};
  color: var(--${e}-error-error-color, var(--${e}-error-color));
}
`}(s)}}),n.jsxs("form",{onSubmit:ev,className:`${s}-form`,style:{...ef,height:a.scalingValue(A,t),minHeight:a.scalingValue(A,t)},children:[n.jsx("div",{className:`${s}-inputWrap ${s}-overlayAnchor`,style:{flex:1,minWidth:0},children:O.map(e=>n.jsx("input",{type:"email"===e.type?"email":"phone"===e.type?"tel":"text",name:e.name,autoComplete:"off",value:Z[e.name]??"",onChange:t=>V(i=>({...i,[e.name]:t.target.value})),placeholder:e.placeholder,required:e.isRequired??"email"===e.type,className:`${s}-input`,style:{...ep,paddingRight:a.scalingValue(N.right,t),paddingLeft:a.scalingValue(N.left,t),paddingTop:a.scalingValue(N.top,t),paddingBottom:a.scalingValue(N.bottom,t)}},e.name))}),n.jsx("div",{className:`${s}-overlayAnchor`,children:n.jsx("button",{type:c?"submit":"button",className:`${s}-submitBtn`,"aria-label":es,style:{...em,...ey,paddingRight:a.scalingValue(j.right,t),paddingLeft:a.scalingValue(j.left,t),paddingTop:a.scalingValue(j.top,t),paddingBottom:a.scalingValue(j.bottom,t),pointerEvents:c?"auto":void 0},children:"submitting"===q?"...":el?ea&&n.jsx(t4,{url:ea,className:`${s}-submitBtnIcon`,style:{maxWidth:a.scalingValue(F??0,t)},fill:`var(--${s}-button-text-color)`,hoverFill:`var(--${s}-button-text-color)`}):er})})]}),"success"===X&&n.jsx("p",{className:`${s}-success`,style:{...eg},children:z}),"error"===X&&n.jsx("p",{className:`${s}-error`,style:{...eg},role:"alert",children:Q??Y??B})]})},id:"oneliner-form",name:"Newsletter Single Line",category:"forms",preview:{type:"image",url:"https://cdn.cntrl.site/component-assets/Newsletter_Single_Line.png"},defaultSize:{d:{width:400},t:{width:500},m:{width:340}},assetsPaths:{content:[],parameters:[{path:"buttonIcon.icon"}]},fontSettingsPaths:{content:[],parameters:[{path:"fontFamily"}]},fontRelations:{inputFontSettings:"fontFamily",buttonFontSettings:"fontFamily",statusFontSettings:"fontFamily"},schema:iT,sourceCode:iC},{element:({settings:e,content:t,isEditor:i,isPreviewMode:l,isEditMode:s})=>{let{prefix:c}=a.useScopedStyles(),[d,u]=o.useState(0),p=d>0?Math.round(d):0,m=o.useMemo(()=>(function(e,t){let i=t>0?`${t}px`:"0px";return`
.${e}-marquee-wrapper {
  overflow: hidden;
  width: 100%;
  height: auto;
}

@keyframes ${e}-marquee-left {
  from { -webkit-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); }
  to { -webkit-transform: translate3d(-${i}, 0, 0); transform: translate3d(-${i}, 0, 0); }
}

@keyframes ${e}-marquee-right {
  from { -webkit-transform: translate3d(-${i}, 0, 0); transform: translate3d(-${i}, 0, 0); }
  to { -webkit-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); }
}

.${e}-marquee-track {
  display: flex;
  flex-direction: row;
  width: max-content;
  will-change: transform;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  flex-wrap: nowrap;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}

.${e}-marquee-track[data-direction="left"] {
  -webkit-animation-name: ${e}-marquee-left;
  animation-name: ${e}-marquee-left;
}

.${e}-marquee-track[data-direction="right"] {
  -webkit-animation-name: ${e}-marquee-right;
  animation-name: ${e}-marquee-right;
}
.${e}-marquee-row {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
.${e}-marquee-set {
  flex: 0 0 auto;
}
.${e}-marquee-static {
  justify-content: center;
  overflow-x: auto;
}
.${e}-marquee-card {
  position: relative;
  flex: 0 0 auto;
  align-self: flex-start;
}
.${e}-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  order: 1;
}
.${e}-cover {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.${e}-elements-overlay {
  position: relative;
  inset: 0;
  display: flex;
  flex-direction: column;
  pointer-events: none;
}
.${e}-control {
  position: relative;
  z-index: 2;
  width: 100%;
}

.${e}-marquee-link {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: inherit;
}
.${e}-marquee-link-contain {
  width: auto;
  height: auto;
}

.${e}-control::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 20px;
  pointer-events: auto;
  z-index: 10;
}

.${e}-gap-control {
  position: relative;
  z-index: 2;
  pointer-events: auto;
  height: 100%;
}
.${e}-image-hover-brightness img {
  transition: filter 0.3s ease;
}
.${e}-image-hover-brightness:hover img {
  filter: brightness(1.25);
}
.${e}-image-hover-grayscale img {
  transition: filter 0.3s ease;
}
.${e}-image-hover-grayscale:hover img {
  filter: grayscale(100%);
}
`})(c,p),[c,p]),{speed:g,direction:h,pauseOnHover:f,gap:y,imageMaxWidth:v,imageMaxHeight:x,hoverEffect:b}=e,w=o.useMemo(()=>(e=>"string"==typeof e?{display:"cover"===e.toLowerCase()?"cover":"fit",ratioValue:"16:9",reversed:!1}:{display:("string"==typeof(null==e?void 0:e.display)?e.display.toLowerCase():"")==="cover"?"cover":"fit",ratioValue:(null==e?void 0:e.ratioValue)??"16:9",reversed:(null==e?void 0:e.reversed)??!1})(e.imageFit),[e.imageFit]),$=(null==t?void 0:t.length)??0,S=!!s,C=!i||!!l,P=C&&"off"!==b&&"randomize"!==b?`${c}-image-hover-${b}`:void 0,L=!i||!!l,T=((null==t?void 0:t.length)??0)>0&&(L||!!i),M=30*Math.max(0,g),E=e=>a.scalingValue(e,i??!1),I=o.useRef(null),k=o.useRef(null),R=o.useRef(null),[F,A]=o.useState(0),W=L&&"on"===f,[H,_]=o.useState(!1),[N,j]=o.useState({}),z=o.useRef(N);z.current=N;let B=o.useRef(null),O=o.useRef(0),D=o.useRef(null),V=o.useMemo(()=>(t??[]).map(e=>{var t;return(null==(t=e.image)?void 0:t.url)??""}).join("\0"),[t]),[q,G]=o.useState(3),K=o.useMemo(()=>{let e=t??[];return 0!==e.length&&(L||i)?Array.from({length:q},()=>e).flat():e},[t,L,q,i]),U=o.useMemo(()=>(t??[]).filter(e=>{var t;return!!(null!=(t=e.image)&&t.url)}).length,[t]),X=T?3:1;o.useLayoutEffect(()=>{O.current=0,j({}),B.current=null,G(3),u(0)},[V]),o.useEffect(()=>{if(!C||"randomize"!==b)return;let e=I.current;if(!e)return;let t=t=>{j(i=>{let n=Array.from(t).filter(t=>t in i&&!((e,t)=>Array.from(e.querySelectorAll(`[data-marquee-item-index="${t}"]`)).some(t=>((e,t)=>{let i=t.getBoundingClientRect(),n=e.getBoundingClientRect();return n.right>i.left&&n.left<i.right})(t,e)))(e,t));if(0===n.length)return i;let o={...i};return n.forEach(e=>{delete o[e]}),o})},i=new IntersectionObserver(e=>{let i=new Set;for(let t of e){let e=t.target.dataset.marqueeItemIndex,n=void 0!==e?Number(e):NaN;Number.isNaN(n)||i.add(n)}i.size>0&&t(i)},{root:e,threshold:0});Object.keys(N).forEach(t=>{let n=Number(t);e.querySelectorAll(`[data-marquee-item-index="${n}"]`).forEach(e=>i.observe(e))});let n={current:0},o=()=>{let e=Object.keys(z.current);0!==e.length&&(t(e.map(Number)),n.current=requestAnimationFrame(o))};return Object.keys(z.current).length>0&&(n.current=requestAnimationFrame(o)),()=>{cancelAnimationFrame(n.current),i.disconnect()}},[b,N,C]),o.useLayoutEffect(()=>{if(!T)return;let e=I.current,t=R.current;if(!e||!t)return;let n={current:0},o=()=>{let r=e.getBoundingClientRect().width||e.offsetWidth,a=(e=>{let t=e.getBoundingClientRect().width;if(t>0)return t;let i=e.offsetWidth;if(i>0)return i;let n=iM(Array.from(e.children));if(n<=0)return 0;let o=getComputedStyle(e),r=Number.parseFloat(o.columnGap||o.gap||"0")||0,a=Number.parseFloat(o.paddingRight)||0;return n+r*Math.max(0,e.children.length-1)+a})(t),l=B.current,s="number"==typeof l&&.25>=Math.abs(l-a);B.current=a;let c=q,p=0;if((L||i)&&$>0&&r>0){let e=iE(t,$);if(e>=32){p=e;let t=Math.min(12,Math.max(3,Math.ceil(r/e)+1));c=t,t!==q&&G(t)}}let m=c!==q&&p>0?p*c:a>0?a:p>0?p*c:(()=>{let e=iE(t,$);return e>0?e*c:0})();m>0?u(e=>e<=0||s&&Math.round(e)!==Math.round(m)?m:e):!s&&d<=0&&(cancelAnimationFrame(n.current),n.current=requestAnimationFrame(o))},r=()=>{cancelAnimationFrame(n.current),n.current=requestAnimationFrame(o)};D.current=r,r();let a=new ResizeObserver(r);return a.observe(e),a.observe(t),()=>{D.current=null,cancelAnimationFrame(n.current),a.disconnect()}},[L,T,d,V,q,$,i]),o.useLayoutEffect(()=>{if(!T||p<=0)return;let e=k.current;e&&(e=>{e.style.setProperty("animation-name","none"),e.style.setProperty("-webkit-animation-name","none"),e.offsetHeight,e.style.removeProperty("animation-name"),e.style.removeProperty("-webkit-animation-name")})(e)},[T,p,h,M]),o.useLayoutEffect(()=>{if(!T||d<=0)return void A(0);let e=k.current,t=R.current;if(!e||!t)return;let i=()=>{let i=e.offsetHeight||e.getBoundingClientRect().height,n=Array.from(t.children).reduce((e,t)=>Math.max(e,t.offsetHeight||t.getBoundingClientRect().height),0),o=i>0?i:n;A(o>0?o:0)};i();let n=new ResizeObserver(i);return n.observe(e),n.observe(t),()=>n.disconnect()},[T,X,K,i,y,v,x,d,w,N]),o.useLayoutEffect(()=>{if(!i||!S||!T||typeof window>"u")return;let e=requestAnimationFrame(()=>{window.dispatchEvent(new Event("scroll"))});return()=>cancelAnimationFrame(e)},[i,S,T,h,d,F,y,K]);let Y=o.useCallback(()=>{var e;O.current=Math.min(U,O.current+1),null==(e=D.current)||e.call(D)},[U]),J=o.useCallback((e,i)=>{j(n=>{let o=n[e]??i,r=(t??[]).filter(e=>e!==o);if(0===r.length)return n;let a=r[Math.floor(Math.random()*r.length)];return{...n,[e]:a}})},[t]),Z=(e,t,o,r)=>{let a=C&&"randomize"===b&&"cover"===w.display?N[o]??e:e,l=`max(${E(y)}, 20px)`,s=`calc(-0.5 * (${l} + ${E(y)}))`;return n.jsxs("div",{className:`${c}-marquee-card`,"data-marquee-item-index":o,onMouseEnter:C&&"randomize"===b&&"cover"===w.display?()=>J(o,e):void 0,children:[n.jsx(iI,{item:a,prefix:c,imageFit:w,imageMaxWidth:v,imageMaxHeight:x,imageHoverClass:P,isEditor:i,isFirstSet:r,scaled:E,onFirstSetImageDone:Y}),S&&n.jsx("div",{"data-controls":"gap","data-controls-axis":"x",className:`${c}-gap-control`,style:{position:"absolute",top:0,right:s,width:l,height:"100%"}})]},`${t}-${o}`)};if(T){let e=L?W&&H?"paused":"running":"paused",t=p>0&&M>0?p/M*1e3:0,i=`${Math.max(0,t)/1e3}s`;return n.jsxs("div",{ref:I,className:r(`${c}-wrapper`,`${c}-marquee-wrapper`),"aria-label":"Marquee",style:F>0?{height:F}:void 0,children:[n.jsx("style",{dangerouslySetInnerHTML:{__html:m}}),n.jsx("div",{ref:k,className:`${c}-marquee-track`,"data-direction":h,onMouseEnter:()=>{W&&_(!0)},onMouseLeave:()=>{W&&_(!1)},style:{WebkitAnimationDuration:i,animationDuration:i,WebkitAnimationPlayState:e,animationPlayState:e},children:Array.from({length:X},(e,t)=>n.jsx("div",{ref:0===t?R:void 0,className:r(`${c}-marquee-row`,`${c}-marquee-set`),style:{gap:E(y),paddingRight:E(y)},"aria-hidden":t>0,children:K.map((e,i)=>Z(e,t,i,0===t&&i<$))},`set-${t}`))})]})}return n.jsxs("div",{ref:I,className:`${c}-wrapper`,children:[n.jsx("style",{dangerouslySetInnerHTML:{__html:m}}),n.jsx("div",{className:r(`${c}-marquee-row`,`${c}-marquee-static`),style:{gap:E(y),transform:"none"},"aria-label":"Marquee",children:null==t?void 0:t.map((e,t)=>Z(e,0,t))},"marquee-static")]})},id:"marquee",name:"Simple Marquee",category:"galleries",version:1,defaultSize:{d:{width:"100%"},t:{width:"100%"},m:{width:"100%"}},preview:{type:"image",url:"https://cdn.cntrl.site/component-assets/Simple_Marquee.mp4"},schema:iR,sourceCode:ik,assetsPaths:{content:[{path:"image.url",placeholderEnabled:!0}],parameters:[]},fontSettingsPaths:{content:[],parameters:[]}},{element:({settings:e,content:t,isEditor:i,isPreviewMode:l,isEditMode:s})=>{let{prefix:c}=a.useScopedStyles(),{align:d,speed:u,direction:p,pauseOnHover:m,gap:g,cardWidth:h,corners:f,stroke:y,strokeColor:v,bgColor:x,padding:b,logoMarginTop:w,logoWidth:$,logoHeight:S,captionMarginTop:C}=e,P=!!s,L=((null==t?void 0:t.length)??0)>0,T=u>0&&(!i||l),M=L&&(T||i),E=30*Math.max(0,u),I=e=>a.scalingValue(e,i??!1),k=o.useRef(null),R=o.useRef(null),F=o.useRef(null),[A,W]=o.useState(0),[H,_]=o.useState(0),[N,j]=o.useState(0),z=T&&"on"===m,[B,O]=o.useState(!1),D=o.useRef(null),[V,q]=o.useState(0),[G,K]=o.useState(0),U=o.useRef(null),X=t=>{var i,n,o,r,a;return{fontSettings:{fontFamily:(null==e?void 0:e[`${t}FontFamily`])??"Arial",fontWeight:(null==(i=null==e?void 0:e[`${t}FontSettings`])?void 0:i.fontWeight)??400,fontStyle:(null==(n=null==e?void 0:e[`${t}FontSettings`])?void 0:n.fontStyle)??"normal"},textAppearance:{textTransform:(null==(o=null==e?void 0:e[`${t}TextAppearance`])?void 0:o.textTransform)??"none",textDecoration:(null==(r=null==e?void 0:e[`${t}TextAppearance`])?void 0:r.textDecoration)??"none",fontVariant:(null==(a=null==e?void 0:e[`${t}TextAppearance`])?void 0:a.fontVariant)??"normal"},letterSpacing:(null==e?void 0:e[`${t}LetterSpacing`])??0,wordSpacing:(null==e?void 0:e[`${t}WordSpacing`])??0,fontSize:(null==e?void 0:e[`${t}FontSize`])??.01,lineHeight:(null==e?void 0:e[`${t}LineHeight`])??.01,color:(null==e?void 0:e[`${t}Color`])??"#000000"}},Y=X("text"),J=X("caption"),Z=o.useMemo(()=>((null==t?void 0:t.length)??0)>1&&(t??[]).some(e=>{var t,i;return((null==(t=e.text)?void 0:t.length)??0)>0||((null==(i=e.caption)?void 0:i.length)??0)>0}),[t]),Q=o.useMemo(()=>M&&(null==t?void 0:t.length)!==0?H<=0||A<=0?2:Math.max(2,Math.ceil(A/H)+1):1,[M,null==t?void 0:t.length,H,A]);o.useLayoutEffect(()=>{if(!M)return;let e=k.current,t=F.current;if(!e||!t)return;let i=0,n=()=>{let o=e.getBoundingClientRect().width,r=t.getBoundingClientRect().width,a=U.current,l="number"==typeof a&&.25>=Math.abs(a-r);if(U.current=r,W(o),"number"==typeof r&&r>0&&H<=0)return void _(r);l&&r!==H?_(r):!l&&H<=0&&(cancelAnimationFrame(i),i=requestAnimationFrame(n))},o=()=>{cancelAnimationFrame(i),i=requestAnimationFrame(n)};o();let r=new ResizeObserver(o);return r.observe(e),r.observe(t),()=>{cancelAnimationFrame(i),r.disconnect()}},[T,M,H]),o.useLayoutEffect(()=>{let e=R.current;if(!M||!e)return;let t=H>0?H:0,i=`${Math.max(0,t>0&&E>0?t/E*1e3:0)/1e3}s`;e.style.setProperty("--marquee-distance",`${t}px`),e.style.setProperty("--marquee-duration",i)},[T,M,E,H]),o.useLayoutEffect(()=>{if(!M)return void j(0);let e=F.current,t=R.current;if(!e||!t)return;let i=()=>{let i=0;for(let t=0;t<e.children.length;t++){let n=e.children[t].firstElementChild;n&&(i=Math.max(i,n.offsetHeight))}i<=0&&(i=t.offsetHeight),j(i>0?i:0)};i();let n=new ResizeObserver(i);return n.observe(e),n.observe(t),()=>{n.disconnect()}},[M,Q,t,i,g,h,b,y,f,$,S,V,G]);let ee=o.useMemo(()=>{switch(d){case"center":return"center";case"end":return"flex-end";default:return"flex-start"}},[d]),et=o.useMemo(()=>{switch(d){case"center":return"center";case"end":return"right";default:return"left"}},[d]),ei=o.useCallback((e,t,o,r)=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:ee,width:"100%"},children:[n.jsx("div",{"data-controls":P?null==r?void 0:r.controlsName:void 0,"data-controls-axis":P?"y":void 0,className:P?`${c}-control`:void 0,style:{height:I((null==r?void 0:r.marginTop)??0)}}),n.jsx("div",{...null!=r&&r.dataMeasureKind?{"data-testimonial-measure":r.dataMeasureKind}:{},style:{...t2(e,i),textAlign:et,pointerEvents:"auto",..."number"==typeof(null==r?void 0:r.minHeightPx)&&r.minHeightPx>0?{minHeight:r.minHeightPx}:{}},children:n.jsx(t3,{content:t})})]},o),[ee,et,i,P,c,I]),en=o.useCallback((e,t,i)=>{var o,r,a;return n.jsxs("div",{style:{padding:`${I(b.top)} ${I(b.right)} ${I(b.bottom)} ${I(b.left)}`,width:I(h+2*y),height:"100%",borderRadius:I(f),border:`${I(y)} solid ${v}`,boxSizing:"border-box",position:"relative",overflow:"hidden"},children:[n.jsx("div",{className:`${c}-cover`,style:{background:x}}),n.jsxs("div",{className:`${c}-elements-overlay`,style:{alignItems:ee,textAlign:et},children:[e.text&&ei(Y,e.text,"text",null!=i&&i.dataMeasureAttrs?{dataMeasureKind:"text"}:"number"==typeof(null==i?void 0:i.textMinHeightPx)&&i.textMinHeightPx>0?{minHeightPx:i.textMinHeightPx}:void 0),n.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:ee,width:"100%"},children:[n.jsx("div",{"data-controls":P&&!(null!=i&&i.dataMeasureAttrs)?"logoMarginTop":void 0,className:P&&!(null!=i&&i.dataMeasureAttrs)?`${c}-control`:void 0,style:{height:I(w)}}),n.jsx("div",{style:{width:I($),height:I(S)},children:(null==(o=e.logo)?void 0:o.url)&&n.jsx("img",{src:e.logo.url,alt:(null==(r=e.logo)?void 0:r.name)??"",style:{pointerEvents:"auto",width:"100%",height:"100%",objectFit:(null==(a=e.logo)?void 0:a.objectFit)||"contain"}})})]}),e.caption&&ei(J,e.caption,"caption",{...null!=i&&i.dataMeasureAttrs?{}:{controlsName:"captionMarginTop"},marginTop:C,...null!=i&&i.dataMeasureAttrs?{dataMeasureKind:"caption"}:"number"==typeof(null==i?void 0:i.captionMinHeightPx)&&i.captionMinHeightPx>0?{minHeightPx:i.captionMinHeightPx}:{}})]})]},t)},[x,C,J,h,f,S,w,$,ee,et,b.bottom,b.left,b.right,b.top,ei,y,v,Y,i,P,c]),eo=o.useCallback(e=>{q(e.maxTextPx),K(e.maxCaptionPx)},[]);o.useLayoutEffect(()=>{if(!Z)return void eo({maxTextPx:0,maxCaptionPx:0});let e=D.current;if(!e)return;let t=()=>{a.readTestimonialTextMeasure(e,eo)};t();let i=new ResizeObserver(t);return i.observe(e),()=>{i.disconnect()}},[Z,eo,t,en]);let er=Z?{textMinHeightPx:V,captionMinHeightPx:G}:void 0,ea=Z?n.jsx("div",{ref:D,"aria-hidden":!0,style:{position:"absolute",left:0,top:0,width:"100%",visibility:"hidden",pointerEvents:"none",zIndex:-1},children:(t??[]).map((e,t)=>en(e,`measure-${t}`,{dataMeasureAttrs:!0}))}):null,el=(e,t)=>n.jsxs("div",{style:{position:"relative",flex:"0 0 auto",height:"100%",transform:"translateZ(0)",backfaceVisibility:"hidden",WebkitBackfaceVisibility:"hidden",willChange:"transform"},children:[en(e,`card-${t}`,er),P&&n.jsx("div",{"data-controls":"gap","data-controls-axis":"x",style:{position:"absolute",top:0,right:`calc(-1 * ${I(g)})`,width:I(g),height:"100%",pointerEvents:"auto",zIndex:2}})]},t);if(M){let e=T?z&&B?"paused":"running":"paused";return n.jsxs("div",{ref:k,className:r(`${c}-wrapper`,`${c}-marquee-wrapper`),"aria-label":"Testimonials",style:{overflow:"hidden",width:"100%",...N>0?{height:N}:{}},children:[n.jsx("style",{dangerouslySetInnerHTML:{__html:iF(c)}}),ea,n.jsx("div",{ref:R,className:`${c}-marquee-track`,"data-direction":p,onMouseEnter:()=>{z&&O(!0)},onMouseLeave:()=>{z&&O(!1)},style:{display:"flex",flexDirection:"row",flexWrap:"nowrap",width:"max-content",willChange:"transform",backfaceVisibility:"hidden",WebkitBackfaceVisibility:"hidden",transform:"translateZ(0)",WebkitTransform:"translateZ(0)",perspective:"1000px","--marquee-play-state":e},children:Array.from({length:Q},(e,i)=>n.jsx("div",{ref:0===i?F:void 0,className:`${c}-marquee-set`,style:{display:"flex",flexDirection:"row",flex:"0 0 auto",gap:I(g),paddingRight:I(g)},"aria-hidden":i>0,children:null==t?void 0:t.map((e,t)=>el(e,`${i}-${t}`))},`set-${i}`))})]})}return n.jsxs("div",{className:`${c}-wrapper`,children:[n.jsx("style",{dangerouslySetInnerHTML:{__html:iF(c)}}),ea,n.jsx("div",{style:{gap:I(g),justifyContent:"center",overflowX:"auto",display:"flex",flexDirection:"row"},"aria-label":"Testimonials",children:null==t?void 0:t.map((e,t)=>el(e,t))})]})},id:"testimonials",name:"Eliana",category:"testimonials",version:1,preview:{type:"image",url:"https://cdn.cntrl.site/component-assets/Testimonials_Grid.mp4"},defaultSize:{d:{width:"100%",height:320}},schema:iH,sourceCode:iA,assetsPaths:{content:[{path:"logo.url",placeholderEnabled:!0}],parameters:[]},fontSettingsPaths:{content:[],parameters:[{path:"textFontFamily"},{path:"captionFontFamily"}]},fontRelations:{textFontSettings:"textFontFamily",captionFontSettings:"captionFontFamily"}},{element:({settings:e,content:t,isEditor:i,isPreviewMode:l,isEditMode:s})=>{let{prefix:c}=a.useScopedStyles(),d=t||[],{speed:u,align:p,width:m,imageMarginTop:g,textMarginTop:h,captionMarginTop:f,imageWidth:y,imageHeight:v,controlsWidth:x,controlsColor:b,controlsHoverColor:w}=e,$=u>0&&(!i||!!l),[S,C]=o.useState(0),[P,L]=o.useState(null),[T,M]=o.useState(!1),E=o.useRef(null),I=o.useMemo(()=>{switch(p){case"center":return"center";case"end":return"flex-end";default:return"flex-start"}},[p]),k=o.useMemo(()=>{switch(p){case"center":return"center";case"end":return"right";default:return"left"}},[p]);o.useEffect(()=>{C(0),L(null),M(!1)},[d.length]);let R=d[S],F=null===P?null:d[P],A=t=>{var i,n,o,r,a;return{fontSettings:{fontFamily:(null==e?void 0:e[`${t}FontFamily`])??"Arial",fontWeight:(null==(i=null==e?void 0:e[`${t}FontSettings`])?void 0:i.fontWeight)??400,fontStyle:(null==(n=null==e?void 0:e[`${t}FontSettings`])?void 0:n.fontStyle)??"normal"},textAppearance:{textTransform:(null==(o=null==e?void 0:e[`${t}TextAppearance`])?void 0:o.textTransform)??"none",textDecoration:(null==(r=null==e?void 0:e[`${t}TextAppearance`])?void 0:r.textDecoration)??"none",fontVariant:(null==(a=null==e?void 0:e[`${t}TextAppearance`])?void 0:a.fontVariant)??"normal"},fontSize:(null==e?void 0:e[`${t}FontSize`])??.01,lineHeight:(null==e?void 0:e[`${t}LineHeight`])??.01,letterSpacing:(null==e?void 0:e[`${t}LetterSpacing`])??0,wordSpacing:(null==e?void 0:e[`${t}WordSpacing`])??0,color:(null==e?void 0:e[`${t}Color`])??"#000000"}},W=A("text"),H=A("caption"),_=d.length>1&&d.some(e=>{var t,i;return((null==(t=e.text)?void 0:t.length)??0)>0||((null==(i=e.caption)?void 0:i.length)??0)>0}),N=o.useRef(null),[j,z]=o.useState(0),[B,O]=o.useState(0),D=e.controls??{mode:"Off",icon:null},V=d.length>1,q=o.useCallback((e,t)=>V&&t!==e?(E.current&&window.clearTimeout(E.current),L(e),M(!0),E.current=window.setTimeout(()=>{L(null),M(!1),E.current=null},300),t):e,[V]),G=o.useCallback(()=>{V&&C(e=>q(e,(e-1+d.length)%d.length))},[V,q,d.length]),K=o.useCallback(()=>{V&&C(e=>q(e,(e+1)%d.length))},[V,q,d.length]);o.useEffect(()=>{if(!$||!V)return;let e=Math.max(300,3e3/u),t=window.setInterval(()=>{C(e=>q(e,(e+1)%d.length))},e);return()=>{window.clearInterval(t)}},[$,V,q,d.length,u]),o.useEffect(()=>()=>{E.current&&window.clearTimeout(E.current)},[]);let U=(e,t)=>{var o,r,l,d;let u=null==t?void 0:t.textMinHeightPx,p=null==t?void 0:t.captionMinHeightPx,m=null==t?void 0:t.dataMeasureAttrs,x=s&&!(null!=t&&t.dataMeasureAttrs)&&!(null!=t&&t.hideControls);return n.jsxs(n.Fragment,{children:[e.text&&n.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:I,width:"100%"},children:[n.jsx("div",{"data-controls":x?"textMarginTop":void 0,className:x?`${c}-control`:void 0,style:{height:a.scalingValue(h??0,i??!1)}}),n.jsx("div",{...m&&{"data-testimonial-measure":"text"},style:{...t2(W,i),...u&&u>0?{minHeight:u}:{},textAlign:k,pointerEvents:"auto"},children:n.jsx(t3,{content:e.text})})]}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:I,width:"100%"},children:[n.jsx("div",{"data-controls":x?"imageMarginTop":void 0,className:x?`${c}-control`:void 0,style:{height:a.scalingValue(g??0,i??!1)}}),n.jsx("div",{style:{width:a.scalingValue(y??0,i??!1),height:a.scalingValue(v??0,i??!1)},children:(null==(o=e.image)?void 0:o.url)&&n.jsx("img",{src:null==(r=e.image)?void 0:r.url,alt:(null==(l=e.image)?void 0:l.name)??"",className:`${c}-icon`,style:{objectFit:(null==(d=e.image)?void 0:d.objectFit)||"contain"}})})]}),e.caption&&n.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:I,width:"100%"},children:[n.jsx("div",{"data-controls":x?"captionMarginTop":void 0,className:x?`${c}-control`:void 0,style:{height:a.scalingValue(f??0,i??!1)}}),n.jsx("div",{...m?{"data-testimonial-measure":"caption"}:{},style:{...t2(H,i),...p&&p>0?{minHeight:p}:{},textAlign:k,pointerEvents:"auto"},children:n.jsx(t3,{content:e.caption})})]})]})},X=o.useCallback(e=>{z(e.maxTextPx),O(e.maxCaptionPx)},[]);if(o.useLayoutEffect(()=>{if(!_)return void X({maxTextPx:0,maxCaptionPx:0});let e=N.current;if(!e)return;let t=()=>{a.readTestimonialTextMeasure(e,X)};t();let i=new ResizeObserver(t);return i.observe(e),()=>{i.disconnect()}},[_,X,t]),!R)return n.jsx(n.Fragment,{});let Y=_?{textMinHeightPx:j,captionMinHeightPx:B}:void 0;return n.jsx(n.Fragment,{children:n.jsxs("div",{className:`${c}-container`,children:[n.jsx("style",{dangerouslySetInnerHTML:{__html:function(e){return`
.${e}-container {
  position: relative;
  overflow-x: clip;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
}

.${e}-wrapper {
  position: relative;
  width: 100%;
  order: 1;
  display: flex;
  flex-direction: column;
  inset: 0;
  pointer-events: none;
  box-sizing: border-box;
  height: auto;
}

.${e}-fade-stack {
  position: relative;
  width: 100%;
}

.${e}-fade-item-prev {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.${e}-fade-item-current {
  position: relative;
  width: 100%;
}

@keyframes ${e}-testimonial-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes ${e}-testimonial-fade-out {
  from { opacity: 1; }
  to { opacity: 0; }
}

.${e}-fade-in {
  animation: ${e}-testimonial-fade-in 300ms ease-in forwards;
}

.${e}-fade-out {
  animation: ${e}-testimonial-fade-out 300ms ease-in forwards;
}

.${e}-controls {
  position: absolute;
  inset: 0;
  pointer-events: none;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
}

.${e}-arrow {
  pointer-events: auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  z-index: 1;
  padding: 0;
}

.${e}-next-arrow {
  left: unset;
}

.${e}-arrow-inner {
  all: unset;
  cursor: pointer;
  width: 100%;
  height: 100%;
  pointer-events: auto;
}

.${e}-arrow-img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.${e}-mirror {
  transform: translate(-50%, -50%) scaleX(-1) !important;
}

.${e}-control {
  position: relative;
  z-index: 2;
  pointer-events: auto;
  width: 100%;
}

.${e}-control::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: auto;
  z-index: 10;
}
.${e}-icon {
  pointer-events: auto;
  width: 100%;
  height: 100%;
}
`}(c)}}),n.jsxs("div",{className:`${c}-wrapper`,style:{width:a.scalingValue(m??0,i??!1),alignItems:I},children:[_&&n.jsx("div",{ref:N,"aria-hidden":!0,style:{position:"absolute",left:0,top:0,width:"100%",height:"100%",visibility:"hidden",pointerEvents:"none",zIndex:-1},children:d.map((e,t)=>n.jsx("div",{style:{width:"100%"},children:U(e,{dataMeasureAttrs:!0})},t))}),n.jsxs("div",{className:`${c}-fade-stack`,children:[F&&T&&n.jsx("div",{className:r(`${c}-fade-item-prev`,`${c}-fade-out`),children:U(F,{...Y,hideControls:!0})}),n.jsx("div",{className:r(`${c}-fade-item-current`,T?`${c}-fade-in`:void 0),children:U(R,Y)})]})]}),"On"===D.mode&&n.jsxs("div",{className:`${c}-controls`,children:[n.jsx("div",{className:`${c}-arrow`,style:{width:a.scalingValue(x??.02,i??!1),height:a.scalingValue(x??.02,i??!1),"--arrow-hover-color":w},children:n.jsx("button",{type:"button",className:`${c}-arrow-inner`,onClick:G,disabled:!V,"aria-label":"Previous testimonial",children:D.icon&&n.jsx(t4,{url:D.icon,fill:b,hoverFill:w,className:r(`${c}-arrow-img`,`${c}-mirror`)})})}),n.jsx("div",{className:r(`${c}-arrow`,`${c}-next-arrow`),style:{width:a.scalingValue(x??.02,i??!1),height:a.scalingValue(x??.02,i??!1),"--arrow-hover-color":w},children:n.jsx("button",{type:"button",className:`${c}-arrow-inner`,onClick:K,disabled:!V,"aria-label":"Next testimonial",children:D.icon&&n.jsx(t4,{url:D.icon,fill:b,hoverFill:w,className:`${c}-arrow-img`})})})]})]})})},id:"testimonial-single",name:"Clara",category:"testimonials",version:1,preview:{type:"image",url:"https://cdn.cntrl.site/component-assets/Testimonials_Single.png"},defaultSize:{d:{width:700},t:{width:700},m:{width:334}},schema:iz,sourceCode:i_,assetsPaths:{content:[{path:"image.url",placeholderEnabled:!0}],parameters:[{path:"controls.icon"}]},fontSettingsPaths:{content:[],parameters:[{path:"textFontFamily"},{path:"captionFontFamily"}]},fontRelations:{textFontSettings:"textFontFamily",captionFontSettings:"captionFontFamily"}},{element:function({settings:e,content:t,isEditor:i,isPreviewMode:r,isEditMode:s,metadata:c,activeEvent:d,layoutId:u,portalId:p}){let{prefix:m}=a.useScopedStyles(),{type:g="a",gridLayout:h,textBoxWidth:f=100,verticalGap:y,entriesCount:v,lightbox:x,imageDisplay:b,lightboxImageDisplay:w,slider:$,sliderTiming:S,direction:C,transition:P,titleMarginTop:L,subtitleMarginTop:T,titleColor:M,subtitleColor:E,lightboxCounterColor:I,titleFontFamily:k,titleFontSettings:R,titleFontSize:F,titleLineHeight:A,titleLetterSpacing:W,titleWordSpacing:H,titleTextAppearance:_,subtitleFontFamily:N,subtitleFontSettings:j,subtitleFontSize:z,subtitleLineHeight:B,subtitleLetterSpacing:O,subtitleWordSpacing:D,subtitleTextAppearance:V,lightboxCounterFontFamily:q,lightboxCounterFontSettings:G,lightboxCounterFontSize:K,lightboxCounterLineHeight:U,lightboxCounterLetterSpacing:X,lightboxCounterWordSpacing:Y,lightboxCounterTextAppearance:J,showText:Z="always",alignEntries:Q="off",align:ee="top"}=e,et={...t1(t2({fontSettings:{fontFamily:k,fontWeight:(null==R?void 0:R.fontWeight)??400,fontStyle:(null==R?void 0:R.fontStyle)??"normal"},fontSize:F??.01,lineHeight:A,letterSpacing:W??0,wordSpacing:H??0,textAppearance:_,color:M},i))},ei={...t1(t2({fontSettings:{fontFamily:N,fontWeight:(null==j?void 0:j.fontWeight)??400,fontStyle:(null==j?void 0:j.fontStyle)??"normal"},fontSize:z??.01,lineHeight:B,letterSpacing:O??0,wordSpacing:D??0,textAppearance:V,color:E},i))},en={...t1(t2({fontSettings:{fontFamily:q,fontWeight:(null==G?void 0:G.fontWeight)??400,fontStyle:(null==G?void 0:G.fontStyle)??"normal"},fontSize:K??.01,lineHeight:U,letterSpacing:X??0,wordSpacing:Y??0,textAppearance:J,color:I},i)),...iD(K,U,m,i)},eo=iO(F,A,`${m}-item-title`,`${m}-text-tight-leading`),er=iO(z,B,`${m}-item-subtitle`,`${m}-text-tight-leading`),ea=iD(F,A,m,i),el=iD(z,B,m,i),es=iO(K,U,`${m}-lightbox-counter`,`${m}-text-tight-leading`),ec=a.buildColorVars(m,{titleColor:M,subtitleColor:E,lightboxCounterColor:I},iY,iJ),ed=`${d&&"default"!==d?`${m}-state-${d}`:""}${"on hover"===Z&&(!i||r)?` ${m}-show-text-hover`:""}`.trim(),eu=(t??[]).slice(0,0===v?1/0:v),ep=h.entryWidth??.2,em=(null==b?void 0:b.display)==="cover",eg=(null==b?void 0:b.ratioValue)??"1:1",eh=(null==b?void 0:b.reversed)??!1,[ef,ey]=eg.split(":").map(Number),ev=`${eh?ey:ef} / ${eh?ef:ey}`,ex=h.columnsCount,eb=a.scalingValue(ep??0,i),ew=!em&&"off"!==$,e$=eu.length%ex||ex,eS=e$<ex&&eu.length>0,eC=eu.length-e$,eP=eS?Math.floor((ex-e$)/2)+1:1,eL={width:eb,...em?{aspectRatio:ev,height:"auto",overflow:"hidden"}:{height:"auto"}},eT=`${m}-item-image-wrapper${ew?` ${m}-item-image-wrapper-fit-slider`:""}`.trim(),eM="d"===g||"e"===g||"f"===g,eE="on"===Q,eI=`calc(${a.scalingValue(ep??0,i)} * (${f} / 100))`,ek=a.scalingValue(ep*f/100,i),eR=em?{objectFit:"cover",pointerEvents:"auto",width:"100%",height:"100%",maxWidth:"100%"}:{objectFit:"contain",pointerEvents:"auto",width:"auto",height:"auto",maxWidth:"100%"},[eF,eA]=o.useState("ltr"),[eW,eH]=o.useState(0),e_=o.useRef(null);o.useEffect(()=>{let e=e_.current;if(!e)return;let t=new ResizeObserver(e=>{eH(Math.round(e[0].contentRect.width))});return t.observe(e),()=>t.disconnect()},[]);let eN=(()=>{let e={...ec},t=e_.current?getComputedStyle(e_.current).getPropertyValue("--cntrl-article-width").trim():"";return t&&(e["--cntrl-article-width"]=t),e})(),[ej,ez]=o.useState(!1),[eB,eO]=o.useState([]),[eD,eV]=o.useState(0),eq="on"===x&&(!i||r),eG=(e,t)=>{i&&!r||"off"!==x&&(eO(e),eV(t),ez(!0))};o.useEffect(()=>{if(!ej||"on"!==x||typeof document>"u")return;let e=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=e}},[ej,x]),o.useEffect(()=>{!i||r||ez(!1)},[i,r]);let eK=o.useMemo(()=>`
.${m}-wrapper {
  display: grid;
  align-items: start;
  justify-content: center;
  min-height: calc(var(--cntrl-article-width, 100vw) * 0.03333333333333333);
}
.${m}-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.${m}-item-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  outline: 1px solid #FF5C02;
}
.${m}-item-inner-hidden {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.${m}-item-image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
}
.${m}-item-image-wrapper-fit-slider {
  display: grid;
}
.${m}-item-image-wrapper-fit-slider > .${m}-item-image-wrapper-sizer,
.${m}-item-image-wrapper-fit-slider > .${m}-item-slider {
  grid-area: 1 / 1;
  width: 100%;
}
.${m}-item-image-wrapper-fit-slider > .${m}-item-image-wrapper-sizer {
  display: grid;
  visibility: hidden;
  pointer-events: none;
}
.${m}-item-image-wrapper-fit-slider > .${m}-item-image-wrapper-sizer img {
  grid-area: 1 / 1;
  width: auto;
  height: auto;
  max-width: 100%;
  object-fit: contain;
}
.${m}-item-image-wrapper-fit-slider > .${m}-item-image-wrapper-sizer video {
  grid-area: 1 / 1;
  width: auto;
  height: auto;
  max-width: 100%;
  object-fit: contain;
}
.${m}-item-image-wrapper-fit-slider > .${m}-item-slider {
  align-self: stretch;
  min-height: 0;
}
.${m}-item-image-link {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.${m}-item-text-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: inherit;
  text-decoration: none;
}
.${m}-item-image {
  width: 100%;
  height: 100%;
  display: block;
  max-width: 100%;
}
.${m}-item-video {
  width: 100%;
  height: 100%;
  display: block;
  max-width: 100%;
}
.${m}-item-slider,
.${m}-item-slider .splide__track,
.${m}-item-slider .splide__list,
.${m}-item-slider .splide__slide {
  width: 100%;
  height: 100%;
}
.${m}-item-slider .splide__slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
.${m}-item-title {
  white-space: normal;
  overflow-wrap: anywhere;
  word-break: break-word;
  text-align: center;
  margin-bottom: 0px;
  margin-top: 0px;
  color: var(--${m}-title-color);
}
.${m}-item-subtitle {
  white-space: normal;
  overflow-wrap: anywhere;
  word-break: break-word;
  text-align: center;
  margin-bottom: 0px;
  margin-top: 0px;
  color: var(--${m}-subtitle-color);
}
.${m}-text-tight-leading {
  display: block;
  flex-shrink: 0;
  padding-top: var(--${m}-title-leading-gap, 0);
  padding-bottom: var(--${m}-title-leading-gap, 0);
}
.${m}-show-text-hover .${m}-item-title,
.${m}-show-text-hover .${m}-item-subtitle {
  opacity: 0;
  transition: opacity 250ms;
}
.${m}-show-text-hover .${m}-item-inner:hover .${m}-item-title,
.${m}-show-text-hover .${m}-item-inner:hover .${m}-item-subtitle,
.${m}-show-text-hover .${m}-item-inner-hidden:hover .${m}-item-title,
.${m}-show-text-hover .${m}-item-inner-hidden:hover .${m}-item-subtitle {
  opacity: 1;
}
.${m}-type-a .${m}-item-inner,
.${m}-type-a .${m}-item-inner-hidden,
.${m}-type-d .${m}-item-inner,
.${m}-type-d .${m}-item-inner-hidden {
  align-items: flex-start;
}
.${m}-type-b .${m}-item-inner,
.${m}-type-b .${m}-item-inner-hidden,
.${m}-type-e .${m}-item-inner,
.${m}-type-e .${m}-item-inner-hidden {
  align-items: center;
}
.${m}-type-c .${m}-item-inner,
.${m}-type-c .${m}-item-inner-hidden,
.${m}-type-f .${m}-item-inner,
.${m}-type-f .${m}-item-inner-hidden {
  align-items: flex-end;
}
.${m}-type-a .${m}-item-image-link,
.${m}-type-b .${m}-item-image-link,
.${m}-type-c .${m}-item-image-link,
.${m}-type-d .${m}-item-image-link,
.${m}-type-e .${m}-item-image-link,
.${m}-type-f .${m}-item-image-link {
  align-items: center;
}
.${m}-type-a .${m}-item-title,
.${m}-type-a .${m}-item-subtitle,
.${m}-type-d .${m}-item-title,
.${m}-type-d .${m}-item-subtitle {
  text-align: left;
}
.${m}-type-b .${m}-item-title,
.${m}-type-b .${m}-item-subtitle,
.${m}-type-e .${m}-item-title,
.${m}-type-e .${m}-item-subtitle {
  text-align: center;
}
.${m}-type-c .${m}-item-title,
.${m}-type-c .${m}-item-subtitle,
.${m}-type-f .${m}-item-title,
.${m}-type-f .${m}-item-subtitle {
  text-align: right;
}
.${m}-item-text-block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  flex-shrink: 0;
}
.${m}-type-d .${m}-item-text-block {
  align-items: flex-start;
}
.${m}-type-e .${m}-item-text-block {
  align-items: center;
}
.${m}-type-f .${m}-item-text-block {
  align-items: flex-end;
}
.${m}-type-a .${m}-item-text-link,
.${m}-type-d .${m}-item-text-link {
  align-items: flex-start;
}
.${m}-type-b .${m}-item-text-link,
.${m}-type-e .${m}-item-text-link {
  align-items: center;
}
.${m}-type-c .${m}-item-text-link,
.${m}-type-f .${m}-item-text-link {
  align-items: flex-end;
}
.${m}-image-align-top .${m}-item-image-wrapper:not(.${m}-item-image-wrapper-fit-slider) {
  align-items: flex-start;
}
.${m}-image-align-center .${m}-item-image-wrapper:not(.${m}-item-image-wrapper-fit-slider) {
  align-items: center;
}
.${m}-image-align-bottom .${m}-item-image-wrapper:not(.${m}-item-image-wrapper-fit-slider) {
  align-items: flex-end;
}
.${m}-image-align-top .${m}-item-slider .splide__slide {
  align-items: flex-start;
}
.${m}-image-align-center .${m}-item-slider .splide__slide {
  align-items: center;
}
.${m}-image-align-bottom .${m}-item-slider .splide__slide {
  align-items: flex-end;
}
.${m}-align-entries .${m}-item {
  display: contents;
}
.${m}-align-entries .${m}-item-inner,
.${m}-align-entries .${m}-item-inner-hidden {
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 3;
  justify-self: center;
  margin-bottom: var(--${m}-align-entries-row-gap, 0);
}
.${m}-align-entries .${m}-item-inner-last-row {
  margin-bottom: 0;
}
.${m}-align-entries .${m}-item-text-link {
  display: contents;
}
.${m}-align-entries .${m}-item-title-row,
.${m}-align-entries .${m}-item-subtitle-row {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  min-height: 100%;
}
.${m}-type-a.${m}-align-entries .${m}-item-title-row,
.${m}-type-a.${m}-align-entries .${m}-item-subtitle-row,
.${m}-type-d.${m}-align-entries .${m}-item-title-row,
.${m}-type-d.${m}-align-entries .${m}-item-subtitle-row {
  align-items: flex-start;
}
.${m}-type-b.${m}-align-entries .${m}-item-title-row,
.${m}-type-b.${m}-align-entries .${m}-item-subtitle-row,
.${m}-type-e.${m}-align-entries .${m}-item-title-row,
.${m}-type-e.${m}-align-entries .${m}-item-subtitle-row {
  align-items: center;
}
.${m}-type-c.${m}-align-entries .${m}-item-title-row,
.${m}-type-c.${m}-align-entries .${m}-item-subtitle-row,
.${m}-type-f.${m}-align-entries .${m}-item-title-row,
.${m}-type-f.${m}-align-entries .${m}-item-subtitle-row {
  align-items: flex-end;
}
.${m}-align-entries .${m}-item-image-link {
  width: 100%;
  height: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.${m}-align-entries .${m}-item-image-link > .${m}-item-image-wrapper {
  flex-shrink: 0;
  height: auto;
  align-self: auto;
}
.${m}-image-align-top.${m}-align-entries .${m}-item-image-link > .${m}-item-image-wrapper {
  margin-top: 0;
  margin-bottom: auto;
}
.${m}-image-align-center.${m}-align-entries .${m}-item-image-link > .${m}-item-image-wrapper {
  margin-top: auto;
  margin-bottom: auto;
}
.${m}-image-align-bottom.${m}-align-entries .${m}-item-image-link > .${m}-item-image-wrapper {
  margin-top: auto;
  margin-bottom: 0;
}
.${m}-image-align-top.${m}-align-entries .${m}-item-image-wrapper:not(.${m}-item-image-wrapper-fit-slider) {
  align-items: flex-start;
}
.${m}-image-align-center.${m}-align-entries .${m}-item-image-wrapper:not(.${m}-item-image-wrapper-fit-slider) {
  align-items: center;
}
.${m}-image-align-bottom.${m}-align-entries .${m}-item-image-wrapper:not(.${m}-item-image-wrapper-fit-slider) {
  align-items: flex-end;
}
.${m}-image-align-top.${m}-align-entries .${m}-item-slider .splide__slide {
  align-items: flex-start;
}
.${m}-image-align-center.${m}-align-entries .${m}-item-slider .splide__slide {
  align-items: center;
}
.${m}-image-align-bottom.${m}-align-entries .${m}-item-slider .splide__slide {
  align-items: flex-end;
}
.${m}-image-align-top.${m}-align-entries .${m}-item-image-link {
  justify-content: flex-start;
}
.${m}-image-align-center.${m}-align-entries .${m}-item-image-link {
  justify-content: center;
}
.${m}-image-align-bottom.${m}-align-entries .${m}-item-image-link {
  justify-content: flex-end;
}
.${m}-lightbox-counter {
  margin: 0;
  color: var(--${m}-lightbox-counter-color);
}

.${m}-control {
  position: relative;
  z-index: 2;
  width: 100%;
}

.${m}-control::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 20px;
  pointer-events: auto;
  z-index: 10;
}
`,[m]);return n.jsxs(n.Fragment,{children:[n.jsx("style",{dangerouslySetInnerHTML:{__html:eK}}),n.jsx("div",{style:ec,children:n.jsx("div",{ref:e_,className:`${m}-wrapper ${m}-type-${g}${eE?` ${m}-align-entries`:""} ${m}-image-align-${ee} ${ed}`.trim(),style:{gridTemplateColumns:`repeat(${ex}, ${eb})`,rowGap:eE?0:a.scalingValue(y??0,i),columnGap:a.scalingValue(h.horizontalGap??0,i),width:a.scalingValue(h.wrapperWidth??0,i),...eE?{[`--${m}-align-entries-row-gap`]:a.scalingValue(y??0,i)}:{}},children:eu.map((e,t)=>{var o,r;let l=iB(e.title),c=iB(e.subtitle),d=((null==(o=e.link)?void 0:o.length)??0)>0&&"off"===x?e.link:void 0,p=Math.floor(t/ex)===Math.ceil(eu.length/ex)-1,g=eS&&t>=eC?`${eP+(t-eC)}`:void 0,h=eM?n.jsxs("div",{className:`${m}-item-text-block`,children:[l&&n.jsx("p",{className:eo,style:{width:eI,...et,...ea},children:e.title}),l&&n.jsx("div",{"data-controls":s?"titleMarginTop":void 0,className:s?`${m}-control`:void 0,style:{height:a.scalingValue(L??0,i),width:ek}}),c&&n.jsx("p",{className:er,style:{width:eI,...ei,...el},children:e.subtitle}),c&&n.jsx("div",{"data-controls":s?"subtitleMarginTop":void 0,className:s?`${m}-control`:void 0,style:{height:a.scalingValue(T??0,i),width:ek}})]}):null,y=eE?n.jsxs("div",{className:`${m}-item-title-row`,children:[!eM&&n.jsx("div",{"data-controls":s&&l?"titleMarginTop":void 0,className:s&&l?`${m}-control`:void 0,style:{height:l?a.scalingValue(L??0,i):0,width:ek}}),l&&n.jsx("p",{className:eo,style:{width:eI,...et,...ea},children:e.title}),eM&&l&&n.jsx("div",{"data-controls":s?"titleMarginTop":void 0,className:s?`${m}-control`:void 0,style:{height:a.scalingValue(L??0,i),width:ek}})]}):null,v=eE?n.jsxs("div",{className:`${m}-item-subtitle-row`,children:[!eM&&n.jsx("div",{"data-controls":s&&c?"subtitleMarginTop":void 0,className:s&&c?`${m}-control`:void 0,style:{height:c?a.scalingValue(T??0,i):0,width:ek}}),c&&n.jsx("p",{className:er,style:{width:eI,...ei,...el},children:e.subtitle}),eM&&c&&n.jsx("div",{"data-controls":s?"subtitleMarginTop":void 0,className:s?`${m}-control`:void 0,style:{height:a.scalingValue(T??0,i),width:ek}})]}):null,b=d?n.jsxs("a",{href:d,target:"_blank",className:`${m}-item-text-link`,children:[y,v]}):n.jsxs(n.Fragment,{children:[y,v]}),w=Array.isArray(r=e.gallery)&&0!==r.length?!function(e){if(!Array.isArray(e)||0===e.length)return!1;let t=e[0];return null!==t&&"object"==typeof t&&"media"in t&&Array.isArray(t.media)}(r)?r.filter(e=>null==e?void 0:e.url).map(e=>({displayMedia:e,lightboxMedia:e})):r.flatMap(e=>{let t=function(e){let[t,i]=e.media;return null!=i&&i.url?i:null!=t&&t.url?t:null}(e);if(!t)return[];let i=function(e){let[t]=e.media;return null!=t&&t.url?t:null}(e);return[{displayMedia:t,lightboxMedia:null!=i&&i.url?i:null}]}):[],M=w.filter(e=>e.lightboxMedia).map(e=>e.lightboxMedia),E=n.jsx("div",{className:eT,style:eL,children:0===w.length?null:"off"===$?(()=>{let{displayMedia:e,lightboxMedia:t}=w[0],i=t?M.findIndex(e=>e.url===t.url):-1;return n.jsx(iG,{media:e,className:`${m}-item-${iq(e)?"video":"image"}`.trim(),style:eR,onMediaClick:eq&&i>=0?()=>eG(M,i):void 0})})():n.jsxs(n.Fragment,{children:[ew&&eE&&n.jsx("div",{className:`${m}-item-image-wrapper-sizer`,"aria-hidden":"true",children:w.map(({displayMedia:e})=>iq(e)?n.jsx("video",{src:e.url,muted:!0,playsInline:!0},`sizer-${e.url}`):n.jsx("img",{src:e.url,alt:""},`sizer-${e.url}`))}),n.jsx(tJ,{className:`${m}-item-slider`,options:{arrows:!1,pagination:!1,drag:!1,perPage:1,autoplay:!0,interval:1e3*S,width:"100%",height:"100%",speed:750,type:"fade"===P?"fade":"loop",rewind:"fade"===P,pauseOnHover:!1,pauseOnFocus:!1,direction:"fade"===P?"ltr":"random"!==C?"horizontal"===C?"ltr":"ttb":eF},onMoved:e=>{"random"===C&&"fade"!==P&&(eA(Math.random()>.5?Math.random()>.5?"rtl":"ltr":"ttb"),setTimeout(()=>{e.refresh()},0))},children:w.map(({displayMedia:e,lightboxMedia:t},i)=>{let o=t?M.findIndex(e=>e.url===t.url):-1;return n.jsx(tZ,{children:n.jsx(iG,{media:e,className:`${m}-item-${iq(e)?"video":"image"}`.trim(),style:eR,onMediaClick:eq&&o>=0?()=>eG(M,o):void 0})},i)})},`${P}-${ep}-${C}-${S}-${eW}-${u}`)]})}),I=eM?null:n.jsxs(n.Fragment,{children:[n.jsx("div",{"data-controls":s&&l?"titleMarginTop":void 0,className:s&&l?`${m}-control`:void 0,style:{height:l?a.scalingValue(L??0,i):0,width:ek}}),n.jsx("p",{className:eo,style:{width:eI,...et,...ea},children:e.title}),n.jsx("div",{"data-controls":s&&c?"subtitleMarginTop":void 0,className:s&&c?`${m}-control`:void 0,style:{height:c?a.scalingValue(T??0,i):0,width:ek}}),n.jsx("p",{className:er,style:{width:eI,...ei,...el},children:e.subtitle})]});return n.jsx("div",{className:`${m}-item`.trim(),style:g&&!eE?{gridColumn:g}:void 0,children:n.jsx("div",{className:`${s?`${m}-item-inner`:`${m}-item-inner-hidden`}${eE&&p?` ${m}-item-inner-last-row`:""}`.trim(),style:{width:(f??0)>100?`calc(${eb} * (${f} / 100))`:eb,...g&&eE?{gridColumn:g}:{}},children:eE?n.jsx(n.Fragment,{children:eM?n.jsxs(n.Fragment,{children:[b,n.jsx("a",{href:d,target:"_blank",className:`${m}-item-image-link`,children:E})]}):n.jsxs(n.Fragment,{children:[n.jsx("a",{href:d,target:"_blank",className:`${m}-item-image-link`,children:E}),b]})}):d?n.jsxs(n.Fragment,{children:[n.jsxs("a",{href:d,target:"_blank",className:`${m}-item-image-link`,children:[h,E]}),!eM&&n.jsx("a",{href:d,target:"_blank",className:`${m}-item-text-link`,children:I})]}):n.jsxs(n.Fragment,{children:[h,E,I]})})},t)})})}),(!i||r)&&ej&&"u">typeof document&&"on"===x&&(()=>{let e=(p?document.getElementById(p):null)??document.body;return l.createPortal(n.jsx("div",{style:eN,"data-selection":"none",children:n.jsx(iX,{items:eB,index:eD,imageDisplay:"string"==typeof w?"cover"===w?"cover":"fit":(null==w?void 0:w.display)==="cover"?"cover":"fit",onClose:()=>ez(!1),onPrev:()=>eV(e=>(e-1+eB.length)%eB.length),onNext:()=>eV(e=>(e+1)%eB.length),counterClassName:es,counterStyle:en})}),e)})()]})},id:"grid",name:"Neptune",category:"grids",layoutMode:"structured",preview:{type:"image",url:"https://cdn.cntrl.site/component-assets/Neptune_Grid.png"},version:1,defaultSize:{d:{width:720,height:540}},assetsPaths:{content:[{path:"gallery.media.url",placeholderEnabled:!0}],parameters:[]},fontSettingsPaths:{content:[],parameters:[{path:"titleFontFamily"},{path:"subtitleFontFamily"},{path:"lightboxCounterFontFamily"}]},fontRelations:{titleFontSettings:"titleFontFamily",subtitleFontSettings:"subtitleFontFamily",lightboxCounterFontSettings:"lightboxCounterFontFamily"},schema:i0,sourceCode:iZ},n0,oJ,{element:function({settings:e,content:t,isEditor:i,isPreviewMode:l,isEditMode:s,activeEvent:c}){let{prefix:d}=a.useScopedStyles(),u=s??!1,{wrapperWidth:p=1,cellMinHeight:m=0,dividerWidth:g=694e-6,dividerStyle:h="solid",entryHoverEffect:f="default",autoclose:y="off",icon:v,iconMaxWidth:x=.00833,iconPaddingRight:b=0,iconAnimation:w="rotate 45",questionColor:$="#000000",answerColor:S="#000000",dividerColor:C="#0000001F",iconColor:P="#000000",questionHoverColor:L="#666666",iconHoverColor:T="#666666",iconActiveColor:M="#000000",dividerHoverColor:E="#000000",questionFontFamily:I,questionFontSettings:k,questionFontSize:R,questionLineHeight:F,questionLetterSpacing:A,questionWordSpacing:W,questionTextAppearance:H,answerFontFamily:_,answerFontSettings:N,answerFontSize:j,answerLineHeight:z,answerLetterSpacing:B,answerWordSpacing:O,answerTextAppearance:D,questionPaddingLeft:V=0,questionPaddingTop:q=0,questionPaddingBottom:G=0,answerPaddingLeft:K=0,answerPaddingRight:U=0,answerPaddingTop:X=0,answerPaddingBottom:Y=0}=e,[J,Z]=o.useState(()=>new Set),Q=!i||l;o.useEffect(()=>{Z(new Set)},[y]),o.useEffect(()=>{!i||s||l||Z(new Set)},[i,s,l]);let ee=e=>a.scalingValue(e,i??!1),et=Math.max(V,.004),ei=Math.max(q,.004),en=Math.max(G,.004),eo=Math.max(K,.004),er=Math.max(U,.004),ea=Math.max(X,.004),el=Math.max(Y,.004),es=Math.max(0,(p??1)-b-x),ec=Math.max(0,(p??1)-U),ed=Math.max(0,(p??1)-K),eu=Math.max(b,.004),ep=Math.max(0,(p??1)-V-x),em=o.useMemo(()=>0===J.size?0:Math.min(...J),[J]),eg=o.useCallback(e=>J.has(e),[J]),eh=Q&&"default"===f?`${d}-entry-hover-default`:"",ef=v??"",ey=""!==ef,ev=w.replace(/^rotate /,""),ex=`${d}-icon-anim-${ev}`,eb=t1(t2(o2(I,k,R,F,A,W,H,$),i)),ew=t1(t2(o2(_,N,j,z,B,O,D,S),i)),e$=o0(R,F,`${d}-question`,`${d}-text-tight-leading`),eS=o0(j,z,`${d}-answer-text`,`${d}-text-tight-leading`),eC=o1(R,F,d,i),eP=o1(j,z,d,i),eL=a.buildColorVars(d,{questionColor:$,answerColor:S,dividerColor:C,iconColor:P,questionHoverColor:L,iconHoverColor:T,iconActiveColor:M,dividerHoverColor:E},oZ,oQ),eT=c&&"default"!==c?`${d}-state-${c}`:"",eM=o.useCallback(e=>{Q&&Z(t=>{if(t.has(e)){let i=new Set(t);return i.delete(e),i}if("on"===y)return new Set([e]);let i=new Set(t);return i.add(e),i})},[Q,y]),eE=o.useMemo(()=>`
.${d}-wrapper {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
.${d}-item {
  display: flex;
  flex-direction: column;
  position: relative;
  border-bottom-width: var(--${d}-divider-width);
  border-bottom-style: var(--${d}-divider-style);
  border-bottom-color: var(--${d}-divider-color);
}
.${d}-item:first-child {
  border-top-width: var(--${d}-divider-width);
  border-top-style: var(--${d}-divider-style);
  border-top-color: var(--${d}-divider-color);
}
.${d}-wrapper.${d}-entry-hover-default .${d}-item {
  transition: border-color 250ms;
}
.${d}-wrapper.${d}-entry-hover-default .${d}-question-button {
  transition: color 250ms;
}
.${d}-wrapper.${d}-entry-hover-default .${d}-item:not(.${d}-item-open):hover,
.${d}-wrapper.${d}-entry-hover-default .${d}-item:has(+ .${d}-item:not(.${d}-item-open):hover),
.${d}-wrapper.${d}-entry-hover-default.${d}-state-hover .${d}-item:not(.${d}-item-open) {
  border-bottom-color: var(--${d}-divider-hover-color, var(--${d}-divider-color));
}
.${d}-wrapper.${d}-entry-hover-default .${d}-item:not(.${d}-item-open):hover:first-child,
.${d}-wrapper.${d}-entry-hover-default.${d}-state-hover .${d}-item:not(.${d}-item-open):first-child {
  border-top-color: var(--${d}-divider-hover-color, var(--${d}-divider-color));
}
.${d}-wrapper.${d}-entry-hover-default .${d}-item:not(.${d}-item-open):hover .${d}-question-button,
.${d}-wrapper.${d}-entry-hover-default.${d}-state-hover .${d}-item:not(.${d}-item-open) .${d}-question-button {
  color: var(--${d}-question-hover-color, var(--${d}-question-color));
}
.${d}-question-button {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  margin: 0;
  border: none;
  background: none;
  cursor: pointer;
  text-align: left;
  color: var(--${d}-question-color);
  font: inherit;
  padding-left: 0;
  outline: none;
  -webkit-tap-highlight-color: transparent;
}
.${d}-question-button:focus,
.${d}-question-button:focus-visible {
  outline: none;
}
.${d}-question-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: calc(var(--cntrl-article-width, 100vw) * 0.013888888888888888);
  width: 100%;
  min-width: 0;
  min-height: var(--${d}-question-min-height, unset);
}
.${d}-editor .${d}-question-button {
  cursor: default;
}
.${d}-question {
  margin: 0;
  flex: 1;
  min-width: 0;
  color: inherit;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  word-break: break-word;
}
.${d}-text-tight-leading {
  display: block;
  flex-shrink: 0;
  padding-top: var(--${d}-text-leading-gap, 0);
  padding-bottom: var(--${d}-text-leading-gap, 0);
}
.${d}-icon {
  flex-shrink: 0;
  width: var(--${d}-icon-max-width);
  height: var(--${d}-icon-max-width);
  position: relative;
  transition: transform 300ms ease;
}
.${d}-icon-custom {
  display: flex;
  align-items: center;
  justify-content: center;
}
.${d}-icon-image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: background-color 250ms;
}
.${d}-wrapper.${d}-entry-hover-default .${d}-item:not(.${d}-item-open):hover .${d}-icon-image,
.${d}-wrapper.${d}-entry-hover-default.${d}-state-hover .${d}-item:not(.${d}-item-open) .${d}-icon-image {
  --fill: var(--${d}-icon-hover-color, var(--${d}-icon-color)) !important;
  --hover-fill: var(--${d}-icon-hover-color, var(--${d}-icon-color)) !important;
}
.${d}-item-open .${d}-icon-image {
  --fill: var(--${d}-icon-active-color, var(--${d}-icon-color)) !important;
  --hover-fill: var(--${d}-icon-active-color, var(--${d}-icon-color)) !important;
}
.${d}-item-open .${d}-icon-anim-45 {
  transform: rotate(45deg);
}
.${d}-item-open .${d}-icon-anim-90 {
  transform: rotate(90deg);
}
.${d}-item-open .${d}-icon-anim-180 {
  transform: rotate(180deg);
}
.${d}-panel {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 300ms ease;
}
.${d}-item-open .${d}-panel {
  grid-template-rows: 1fr;
}
.${d}-panel-inner {
  overflow: hidden;
  min-height: 0;
}
.${d}-answer {
  color: var(--${d}-answer-color);
}
.${d}-answer-text {
  margin: 0;
  color: inherit;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  word-break: break-word;
}
.${d}-answer-text a {
  color: inherit;
  text-decoration: underline;
  text-underline-offset: 0.1em;
}
.${d}-padding-handle {
  width: 100%;
  flex-shrink: 0;
  background: transparent;
}
.${d}-question-controls,
.${d}-answer-controls {
  position: relative;
}
.${d}-padding-control-handle {
  background: transparent;
}
.${d}-padding-control-handle[data-controls-axis="x"][data-controls-variant="column-padding"]::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 4px;
  height: 12px;
  background: #FF5C02;
  border: 1px solid #FFFFFF;
  border-radius: 5px;
  box-sizing: border-box;
  pointer-events: none;
}
.${d}-padding-control-handle[data-controls-axis="y"]::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 4px;
  background: #FF5C02;
  border: 1px solid #FFFFFF;
  border-radius: 5px;
  box-sizing: border-box;
  pointer-events: none;
}
.${d}-padding-control-handle[data-controls-variant="row-padding"][data-controls-axis="y"]::after {
  left: 20px;
  transform: translateY(-50%);
}
`,[d]),eI={[`--${d}-divider-width`]:a.scalingValue(g,i??!1),[`--${d}-divider-style`]:h,[`--${d}-icon-max-width`]:a.scalingValue(x,i??!1),...m>0?{[`--${d}-question-min-height`]:a.scalingValue(m,i??!1)}:{}};return n.jsxs(n.Fragment,{children:[n.jsx("style",{dangerouslySetInnerHTML:{__html:eE}}),n.jsx("div",{style:eL,children:n.jsx("div",{className:r(`${d}-wrapper`,i&&!l&&`${d}-editor`,eh,eT),style:{width:a.scalingValue(p,i??!1),maxWidth:"100%",...eI},children:(t??[]).map((e,t)=>{var i;let o=eg(t),a=(null==(i=e.question)?void 0:i.trim())??"",l=e.answer,s=((null==l?void 0:l.length)??0)>0,c=u&&t===em;return n.jsxs("div",{className:r(`${d}-item`,o&&`${d}-item-open`),"data-faq-item":"",children:[n.jsxs("div",{className:`${d}-question-controls`,children:[c&&n.jsxs(n.Fragment,{children:[n.jsx(n1,{"data-controls":"questionPaddingTop","data-controls-static-handle":"","data-controls-handle-left":"20","data-controls-axis":"y","data-controls-variant":"row-padding","data-controls-min":"0",className:`${d}-padding-control-handle`,hitPlacement:"left-y",areaStyle:{position:"absolute",top:0,left:0,width:"100%",height:ee(ei),zIndex:2}}),n.jsx(n1,{"data-controls":"questionPaddingLeft","data-controls-static-handle":"","data-controls-axis":"x","data-controls-variant":"column-padding","data-controls-min":"0","data-controls-max-fraction":String(es),className:`${d}-padding-control-handle`,hitPlacement:"center-x",areaStyle:{position:"absolute",top:0,left:0,width:ee(et),height:"100%",zIndex:2}}),n.jsx(n1,{"data-controls":"iconPaddingRight","data-controls-static-handle":"","data-controls-axis":"x","data-controls-variant":"column-padding","data-controls-reverse":"","data-controls-min":"0","data-controls-max-fraction":String(ep),className:`${d}-padding-control-handle`,hitPlacement:"center-x",areaStyle:{position:"absolute",top:0,right:0,width:ee(eu),height:"100%",zIndex:2}})]}),n.jsxs("button",{type:"button",className:`${d}-question-button`,"aria-expanded":o,style:{...eb,...eC,paddingLeft:ee(V),paddingRight:ee(b)},onClick:()=>eM(t),children:[q>0&&n.jsx("span",{className:`${d}-padding-handle`,style:{height:ee(q)},"aria-hidden":"true"}),n.jsxs("span",{className:`${d}-question-row`,children:[n.jsx("span",{className:e$,children:a}),s&&(ey?n.jsx("span",{className:`${d}-icon ${d}-icon-custom ${ex}`,"aria-hidden":"true",children:n.jsx(t4,{url:ef,fill:P,hoverFill:T,className:`${d}-icon-image`})}):n.jsx("span",{className:`${d}-icon ${d}-icon-default ${ex}`,"aria-hidden":"true"}))]}),G>0&&n.jsx("span",{className:`${d}-padding-handle`,style:{height:ee(G)},"aria-hidden":"true"})]}),c&&n.jsx(n1,{"data-controls":"questionPaddingBottom","data-controls-static-handle":"","data-controls-handle-left":"20","data-controls-axis":"y","data-controls-variant":"row-padding","data-controls-min":"0",className:`${d}-padding-control-handle`,hitPlacement:"left-y",areaStyle:{position:"absolute",bottom:0,left:0,width:"100%",height:ee(en),zIndex:2}})]}),s&&l&&n.jsx("div",{className:`${d}-panel`,"aria-hidden":!o,children:n.jsx("div",{className:`${d}-panel-inner`,children:n.jsxs("div",{className:`${d}-answer-controls`,children:[c&&o&&n.jsxs(n.Fragment,{children:[n.jsx(n1,{"data-controls":"answerPaddingTop","data-controls-static-handle":"","data-controls-handle-left":"20","data-controls-axis":"y","data-controls-variant":"row-padding","data-controls-min":"0",className:`${d}-padding-control-handle`,hitPlacement:"left-y",areaStyle:{position:"absolute",top:0,left:0,width:"100%",height:ee(ea),zIndex:2}}),n.jsx(n1,{"data-controls":"answerPaddingLeft","data-controls-static-handle":"","data-controls-axis":"x","data-controls-variant":"column-padding","data-controls-min":"0","data-controls-max-fraction":String(ec),className:`${d}-padding-control-handle`,hitPlacement:"center-x",areaStyle:{position:"absolute",top:0,left:0,width:ee(eo),height:"100%",zIndex:2}}),n.jsx(n1,{"data-controls":"answerPaddingRight","data-controls-static-handle":"","data-controls-axis":"x","data-controls-variant":"column-padding","data-controls-reverse":"","data-controls-min":"0","data-controls-max-fraction":String(ed),className:`${d}-padding-control-handle`,hitPlacement:"center-x",areaStyle:{position:"absolute",top:0,right:0,width:ee(er),height:"100%",zIndex:2}})]}),X>0&&n.jsx("div",{className:`${d}-padding-handle`,style:{height:ee(X)}}),n.jsx("div",{className:`${d}-answer`,style:{...ew,...eP,paddingLeft:ee(K),paddingRight:ee(U)},children:n.jsx("div",{className:eS,children:n.jsx(t3,{content:l})})}),Y>0&&n.jsx("div",{className:`${d}-padding-handle`,style:{height:ee(Y)}}),c&&o&&n.jsx(n1,{"data-controls":"answerPaddingBottom","data-controls-static-handle":"","data-controls-handle-left":"20","data-controls-axis":"y","data-controls-variant":"row-padding","data-controls-min":"0",className:`${d}-padding-control-handle`,hitPlacement:"left-y",areaStyle:{position:"absolute",bottom:0,left:0,width:"100%",height:ee(el),zIndex:2}})]})})})]},t)})})})]})},id:"faq",name:"FAQ",category:"lists",layoutMode:"structured",preview:{type:"image",url:"https://cdn.cntrl.site/component-assets/FAQ_List.png"},version:1,defaultSize:{d:{width:720,height:540}},assetsPaths:{content:[],parameters:[{path:"icon"}]},fontSettingsPaths:{content:[],parameters:[{path:"questionFontFamily"},{path:"answerFontFamily"}]},fontRelations:{questionFontSettings:"questionFontFamily",answerFontSettings:"answerFontFamily"},schema:o9,sourceCode:o3},rb,rE,{element:function({settings:e,content:t,isEditor:i,isPreviewMode:l}){var s,c,d,u,p,m,g;let{prefix:h}=a.useScopedStyles(),f=o.useMemo(()=>`
.${h}-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.${h}-background {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  overflow: hidden;
}
.${h}-effect-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.${h}-stage {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(var(--${h}-stage-scale, 1));
  overflow: hidden;
}
.${h}-foreground {
  z-index: 2;
}
.${h}-incoming {
  will-change: transform;
}
.${h}-incoming-next {
  z-index: 4;
  transition: transform var(--${h}-transition-ms) ${r_};
}
.${h}-incoming-prev {
  z-index: 4;
  transition: transform var(--${h}-transition-ms) ${r_};
}
.${h}-outgoing {
  will-change: transform;
}
.${h}-outgoing-next {
  z-index: 3;
  transition: transform var(--${h}-transition-ms) ${r_};
}
.${h}-outgoing-prev {
  z-index: 3;
  transition: transform var(--${h}-transition-ms) ${r_};
}
.${h}-outgoing-next .${h}-effect-image {
  transition: filter var(--${h}-transition-ms) ${r_};
}
.${h}-outgoing-prev .${h}-effect-image {
  transition: filter var(--${h}-transition-ms) ${r_};
}
.${h}-incoming .${h}-effect-image {
  transition: filter var(--${h}-transition-ms) ${r_};
}
.${h}-background .${h}-effect-image {
  transition: filter var(--${h}-transition-ms) ${r_};
}
.${h}-snap .${h}-incoming,
.${h}-snap .${h}-outgoing,
.${h}-snap .${h}-outgoing .${h}-effect-image,
.${h}-snap .${h}-incoming .${h}-effect-image {
  transition: none !important;
}
.${h}-nav {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 50%;
  z-index: 5;
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  outline: none;
  -webkit-tap-highlight-color: transparent;
}
.${h}-nav-prev {
  left: 0;
  cursor: w-resize;
}
.${h}-nav-next {
  right: 0;
  cursor: e-resize;
}
.${h}-nav:focus,
.${h}-nav:focus-visible {
  outline: none;
}
.${h}-editor .${h}-nav {
  cursor: default;
  pointer-events: none;
}
.${h}-foreground {
  pointer-events: none;
}
.${h}-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  pointer-events: none;
}
`,[h]),{imageSize:y,maxWidth:v,maxHeight:x,transition:b=1e3,bgImage:w="greyscale"}=e,$=t??[],S=rj($.length),[C,P]=o.useState(S.activeIndex),[L,T]=o.useState(S.backgroundIndex),[M,E]=o.useState(!1),[I,k]=o.useState(!1),[R,F]=o.useState(null),[A,W]=o.useState(null),[H,_]=o.useState(0),[N,j]=o.useState(1),[z,B]=o.useState("none"),[O,D]=o.useState("next"),[V,q]=o.useState({}),[G,K]=o.useState({width:0,height:0}),U=o.useRef(null),X=o.useRef(null),Y=!i||!!l,J=y??60,Z=Math.max(10,Math.min(100,v??J)),Q=Math.max(10,Math.min(100,x??J)),ee=Math.max(100,b),et=rN(w),ei=o.useCallback(e=>{let t=function(e,t=1){return e&&0!==e.height?e.width/e.height:t}(e?V[e]:void 0);return function(e,t,i,n,o){if(e<=0||t<=0)return{widthPercent:n,heightPercent:o};let r=t*o/100,a=e*n/100,l=a/i;return l>r&&(a=(l=r)*i),{widthPercent:a/e*100,heightPercent:l/t*100}}(G.width,G.height,t,Z,Q)},[G.height,G.width,V,Q,Z]);o.useEffect(()=>{let e=X.current;if(!e)return;let t=new ResizeObserver(([e])=>{let{width:t,height:i}=e.contentRect;K({width:t,height:i})});return t.observe(e),()=>t.disconnect()},[]),o.useEffect(()=>{var e;e=(t??[]).map(e=>{var t;return null==(t=e.image)?void 0:t.url}).filter(e=>!!e),[...new Set(e.filter(Boolean))].forEach(e=>{let t=new Image;t.onload=()=>{t.naturalWidth>0&&t.naturalHeight>0&&((e,t)=>{q(i=>{var n,o;return(null==(n=i[e])?void 0:n.width)===t.width&&(null==(o=i[e])?void 0:o.height)===t.height?i:{...i,[e]:t}})})(e,{width:t.naturalWidth,height:t.naturalHeight})},t.src=e})},[t]),o.useEffect(()=>{let{backgroundIndex:e,activeIndex:t}=rj($.length);P(t),T(e),E(!1),k(!1),F(null),W(null),_(0),j(1),B("none"),D("next")},[$.length,t]),o.useEffect(()=>()=>{U.current&&clearTimeout(U.current)},[]);let en=o.useCallback(e=>{var t,i,n,o,r;if(!Y||M||$.length<=1)return;let a="next"===e?(C+1)%$.length:(C-1+$.length)%$.length,l=ei(null==(i=null==(t=$[C])?void 0:t.image)?void 0:i.url),s=ei(null==(o=null==(n=$[a])?void 0:n.image)?void 0:o.url),c=rz(G.width,G.height,l),d=rz(G.width,G.height,s);U.current&&clearTimeout(U.current),D(e),k(!0),E(!0),"next"===e?(F(C),W(a),_(0),j(1),B(rN(w,0,1))):(T((r=$.length)<=1?0:(a-1+r)%r),F(a),W(C),_(1),j(d),B(rN(w,1,d))),requestAnimationFrame(()=>{k(!1),requestAnimationFrame(()=>{"next"===e?(_(1),j(c),B(rN(w,1,c))):(_(0),j(1),B(rN(w,0,1)))})}),U.current=setTimeout(()=>{"next"===e&&T(C),P(a),F(null),W(null),E(!1)},ee)},[C,w,G.height,G.width,ei,M,Y,$,ee]),eo=$[C],er=null!==L?$[L]:null,ea=null!==R?$[R]:null,el=null!==A?$[A]:null,es=$.length<=1?0:(C-1+$.length)%$.length,ec=$.length<=1?0:(C+1)%$.length,ed=ei(null==(s=null==eo?void 0:eo.image)?void 0:s.url),eu=ei(null==(c=null==ea?void 0:ea.image)?void 0:c.url),ep=ei(null==(d=null==el?void 0:el.image)?void 0:d.url),em={[`--${h}-transition-ms`]:`${ee}ms`};return n.jsxs(n.Fragment,{children:[n.jsx("style",{dangerouslySetInnerHTML:{__html:f}}),n.jsxs("div",{ref:X,className:r(`${h}-wrapper`,I&&`${h}-snap`,i&&!l&&`${h}-editor`),style:em,"aria-label":"Zoom gallery",children:[(null==(u=null==er?void 0:er.image)?void 0:u.url)&&n.jsx("div",{className:`${h}-background`,"aria-hidden":"true",children:n.jsx("img",{className:`${h}-effect-image`,src:er.image.url,alt:"",style:{filter:et}})}),M&&(null==(p=null==ea?void 0:ea.image)?void 0:p.url)&&n.jsx("div",{className:r(`${h}-stage`,`${h}-outgoing`,`${h}-outgoing-${O}`),style:rO(eu,N,h),"aria-hidden":"true",children:n.jsx("img",{className:`${h}-effect-image`,src:ea.image.url,alt:"",style:{filter:z}})}),M&&(null==(m=null==el?void 0:el.image)?void 0:m.url)&&n.jsx("div",{className:r(`${h}-stage`,`${h}-incoming`,`${h}-incoming-${O}`),style:rO(ep,H,h),"aria-hidden":"true",children:n.jsx("img",{className:`${h}-image`,src:el.image.url,alt:""})}),!M&&(null==(g=null==eo?void 0:eo.image)?void 0:g.url)&&n.jsx("div",{className:r(`${h}-stage`,`${h}-foreground`),style:rB(ed),children:n.jsx("img",{className:`${h}-image`,src:eo.image.url,alt:eo.image.name??""})}),Y&&$.length>1&&!M&&n.jsxs(n.Fragment,{children:[n.jsx("button",{type:"button",className:r(`${h}-nav`,`${h}-nav-prev`),onClick:()=>en("prev"),"aria-label":`Show previous image (${es+1} of ${$.length})`}),n.jsx("button",{type:"button",className:r(`${h}-nav`,`${h}-nav-next`),onClick:()=>en("next"),"aria-label":`Show next image (${ec+1} of ${$.length})`})]})]})]})},id:"scale",name:"Scale",category:"galleries",version:1,defaultSize:{d:{width:920,height:540},m:{width:"100%",height:300}},preview:{type:"image",url:"https://cdn.cntrl.site/component-assets/Scale.mp4"},schema:{type:"object",version:1,settings:{sizing:"manual",properties:{maxWidth:{type:"number",scope:"common",title:"Max width (%)",display:{type:"percentage-input"},min:10,max:100},maxHeight:{type:"number",scope:"common",title:"Max height (%)",display:{type:"percentage-input"},min:10,max:100},transition:{type:"number",scope:"common",title:"Transition (ms)",display:{type:"common-numeric-input"},min:100,max:9999},bgImage:{type:"string",scope:"common",title:"BG image",display:{type:"toggle-cycle",enum:["greyscale","blur","as is"]}}},defaults:{maxWidth:60,maxHeight:60,transition:700,bgImage:"greyscale"},layout:["__componentName__","maxWidth","maxHeight","transition","bgImage"]},panels:[{id:"general",icon:"settings",title:"General",tooltip:"General Settings",layout:["__componentName__",{type:"row",title:"",items:["maxWidth","maxHeight"]},{type:"row",title:"",items:["transition","bgImage"]}]}],content:{type:"array",settings:{addItemFromFileExplorer:!0,deleteImageDeletesEntry:!0},items:{type:"object",properties:{image:{type:"object",label:"Image",display:{type:"media-input",isObjectFitEditable:!1}}}},default:[{image:{url:"https://cdn.cntrl.site/component-assets/scale_component_1.jpg ",name:""}},{image:{url:"https://cdn.cntrl.site/component-assets/scale_component_2.jpg",name:""}},{image:{url:"https://cdn.cntrl.site/component-assets/scale_component_3.jpg",name:""}},{image:{url:"https://cdn.cntrl.site/component-assets/scale_component_4.jpg",name:""}},{image:{url:"https://cdn.cntrl.site/component-assets/scale_component_5.jpg",name:""}},{image:{url:"https://cdn.cntrl.site/component-assets/scale_component_6.jpg",name:""}}]}},sourceCode:`import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import cn from 'classnames';
import { CommonComponentProps } from '../props';
import { useScopedStyles } from '../utils/useScopedStyles';

type ScaleContentItem = {
  image?: {
    url?: string;
    name?: string;
  };
};

type ScaleSettings = {
  imageSize?: number;
  maxWidth?: number;
  maxHeight?: number;
  transition?: number;
  bgImage?: 'greyscale' | 'blur' | 'as is';
};

const GREYSCALE_EFFECT_AMOUNT = 100;
const BLUR_EFFECT_AMOUNT = 70;
const TRANSITION_TIMING_FUNCTION = 'cubic-bezier(0.86, 0, 0.07, 1)';

type ImageDimensions = {
  width: number;
  height: number;
};

type SizePercents = {
  widthPercent: number;
  heightPercent: number;
};

type ScaleProps = {
  settings: ScaleSettings;
  content?: ScaleContentItem[];
  isEditor?: boolean;
  isPreviewMode?: boolean;
} & CommonComponentProps;

function getCSS(P: string): string {
  return \`
.\${P}-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.\${P}-background {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  overflow: hidden;
}
.\${P}-effect-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.\${P}-stage {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(var(--\${P}-stage-scale, 1));
  overflow: hidden;
}
.\${P}-foreground {
  z-index: 2;
}
.\${P}-incoming {
  will-change: transform;
}
.\${P}-incoming-next {
  z-index: 4;
  transition: transform var(--\${P}-transition-ms) \${TRANSITION_TIMING_FUNCTION};
}
.\${P}-incoming-prev {
  z-index: 4;
  transition: transform var(--\${P}-transition-ms) \${TRANSITION_TIMING_FUNCTION};
}
.\${P}-outgoing {
  will-change: transform;
}
.\${P}-outgoing-next {
  z-index: 3;
  transition: transform var(--\${P}-transition-ms) \${TRANSITION_TIMING_FUNCTION};
}
.\${P}-outgoing-prev {
  z-index: 3;
  transition: transform var(--\${P}-transition-ms) \${TRANSITION_TIMING_FUNCTION};
}
.\${P}-outgoing-next .\${P}-effect-image {
  transition: filter var(--\${P}-transition-ms) \${TRANSITION_TIMING_FUNCTION};
}
.\${P}-outgoing-prev .\${P}-effect-image {
  transition: filter var(--\${P}-transition-ms) \${TRANSITION_TIMING_FUNCTION};
}
.\${P}-incoming .\${P}-effect-image {
  transition: filter var(--\${P}-transition-ms) \${TRANSITION_TIMING_FUNCTION};
}
.\${P}-background .\${P}-effect-image {
  transition: filter var(--\${P}-transition-ms) \${TRANSITION_TIMING_FUNCTION};
}
.\${P}-snap .\${P}-incoming,
.\${P}-snap .\${P}-outgoing,
.\${P}-snap .\${P}-outgoing .\${P}-effect-image,
.\${P}-snap .\${P}-incoming .\${P}-effect-image {
  transition: none !important;
}
.\${P}-nav {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 50%;
  z-index: 5;
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  outline: none;
  -webkit-tap-highlight-color: transparent;
}
.\${P}-nav-prev {
  left: 0;
  cursor: w-resize;
}
.\${P}-nav-next {
  right: 0;
  cursor: e-resize;
}
.\${P}-nav:focus,
.\${P}-nav:focus-visible {
  outline: none;
}
.\${P}-editor .\${P}-nav {
  cursor: default;
  pointer-events: none;
}
.\${P}-foreground {
  pointer-events: none;
}
.\${P}-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  pointer-events: none;
}
\`;
}

function getEffectAmount(bgImage: ScaleSettings['bgImage']): number {
  if (bgImage === 'blur') return BLUR_EFFECT_AMOUNT;
  if (bgImage === 'greyscale') return GREYSCALE_EFFECT_AMOUNT;
  return 0;
}

function getBackgroundFilter(bgImage: ScaleSettings['bgImage'], progress = 1, scale = 1): string {
  const amount = getEffectAmount(bgImage) * Math.max(0, Math.min(1, progress));
  if (bgImage === 'greyscale') {
    return \`grayscale(\${amount}%)\`;
  }
  if (bgImage === 'blur') {
    const blurPx = amount / 4;
    return blurPx <= 0 ? 'none' : \`blur(\${blurPx / Math.max(scale, 1)}px)\`;
  }
  return 'none';
}

function getInitialIndices(itemCount: number): { backgroundIndex: number | null; activeIndex: number } {
  if (itemCount <= 1) {
    return { backgroundIndex: 0, activeIndex: 0 };
  }
  return { backgroundIndex: 0, activeIndex: 1 };
}

function getPreviousBackgroundIndex(targetIndex: number, itemCount: number): number {
  if (itemCount <= 1) return 0;
  return (targetIndex - 1 + itemCount) % itemCount;
}

function getImageAspectRatio(dimensions: ImageDimensions | undefined, fallback = 1): number {
  if (!dimensions || dimensions.height === 0) return fallback;
  return dimensions.width / dimensions.height;
}

function computeFitSize(
  containerWidth: number,
  containerHeight: number,
  imageAspectRatio: number,
  maxWidthPercent: number,
  maxHeightPercent: number,
): SizePercents {
  if (containerWidth <= 0 || containerHeight <= 0) {
    return { widthPercent: maxWidthPercent, heightPercent: maxHeightPercent };
  }

  const maxW = containerWidth * maxWidthPercent / 100;
  const maxH = containerHeight * maxHeightPercent / 100;

  let width = maxW;
  let height = width / imageAspectRatio;

  if (height > maxH) {
    height = maxH;
    width = height * imageAspectRatio;
  }

  return {
    widthPercent: (width / containerWidth) * 100,
    heightPercent: (height / containerHeight) * 100,
  };
}

function computeCoverScale(
  containerWidth: number,
  containerHeight: number,
  fitSize: SizePercents,
): number {
  if (containerWidth <= 0 || containerHeight <= 0) return 1;

  const fitW = containerWidth * fitSize.widthPercent / 100;
  const fitH = containerHeight * fitSize.heightPercent / 100;
  if (fitW <= 0 || fitH <= 0) return 1;

  return Math.max(containerWidth / fitW, containerHeight / fitH);
}

function toSizeStyle(size: SizePercents): React.CSSProperties {
  return {
    width: \`\${size.widthPercent}%\`,
    height: \`\${size.heightPercent}%\`,
  };
}

function toStageStyle(size: SizePercents, scale: number, prefix: string): React.CSSProperties {
  return {
    ...toSizeStyle(size),
    [\`--\${prefix}-stage-scale\`]: scale,
  } as React.CSSProperties;
}

function preloadImages(
  urls: string[],
  onDimensions: (url: string, dimensions: ImageDimensions) => void,
): void {
  const uniqueUrls = [...new Set(urls.filter(Boolean))];
  uniqueUrls.forEach((url) => {
    const img = new Image();
    img.onload = () => {
      if (img.naturalWidth > 0 && img.naturalHeight > 0) {
        onDimensions(url, { width: img.naturalWidth, height: img.naturalHeight });
      }
    };
    img.src = url;
  });
}

export function Scale({ settings, content, isEditor, isPreviewMode }: ScaleProps) {
  const { prefix: P } = useScopedStyles();
  const scopedCss = useMemo(() => getCSS(P), [P]);
  const {
    imageSize,
    maxWidth,
    maxHeight,
    transition = 1000,
    bgImage = 'greyscale',
  } = settings;
  const items = content ?? [];
  const initialIndices = getInitialIndices(items.length);
  const [activeIndex, setActiveIndex] = useState(initialIndices.activeIndex);
  const [backgroundIndex, setBackgroundIndex] = useState<number | null>(initialIndices.backgroundIndex);
  const [isAnimating, setIsAnimating] = useState(false);
  const [snapLayout, setSnapLayout] = useState(false);
  const [outgoingIndex, setOutgoingIndex] = useState<number | null>(null);
  const [incomingIndex, setIncomingIndex] = useState<number | null>(null);
  const [incomingScale, setIncomingScale] = useState(0);
  const [outgoingScale, setOutgoingScale] = useState(1);
  const [outgoingFilter, setOutgoingFilter] = useState('none');
  const [transitionDirection, setTransitionDirection] = useState<'next' | 'prev'>('next');
  const [imageDimensions, setImageDimensions] = useState<Record<string, ImageDimensions>>({});
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const transitionTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isInteractive = !isEditor || Boolean(isPreviewMode);
  const legacyImageSize = imageSize ?? 60;
  const maxWidthPercent = Math.max(10, Math.min(100, maxWidth ?? legacyImageSize));
  const maxHeightPercent = Math.max(10, Math.min(100, maxHeight ?? legacyImageSize));
  const transitionMs = Math.max(100, transition);
  const backgroundFilter = getBackgroundFilter(bgImage);

  const getImageSizePercents = useCallback((url: string | undefined): SizePercents => {
    const aspectRatio = getImageAspectRatio(url ? imageDimensions[url] : undefined);
    return computeFitSize(
      containerSize.width,
      containerSize.height,
      aspectRatio,
      maxWidthPercent,
      maxHeightPercent,
    );
  }, [containerSize.height, containerSize.width, imageDimensions, maxHeightPercent, maxWidthPercent]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return undefined;

    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setContainerSize({ width, height });
    });
    observer.observe(wrapper);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const urls = (content ?? []).map((item) => item.image?.url).filter((url): url is string => Boolean(url));
    preloadImages(urls, (url, dimensions) => {
      setImageDimensions((prev) => (
        prev[url]?.width === dimensions.width && prev[url]?.height === dimensions.height
          ? prev
          : { ...prev, [url]: dimensions }
      ));
    });
  }, [content]);

  useEffect(() => {
    const { backgroundIndex: nextBackgroundIndex, activeIndex: nextActiveIndex } = getInitialIndices(items.length);
    setActiveIndex(nextActiveIndex);
    setBackgroundIndex(nextBackgroundIndex);
    setIsAnimating(false);
    setSnapLayout(false);
    setOutgoingIndex(null);
    setIncomingIndex(null);
    setIncomingScale(0);
    setOutgoingScale(1);
    setOutgoingFilter('none');
    setTransitionDirection('next');
  }, [items.length, content]);

  useEffect(() => () => {
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
    }
  }, []);

  const startTransition = useCallback((direction: 'next' | 'prev') => {
    if (!isInteractive || isAnimating || items.length <= 1) return;

    const targetIndex = direction === 'next'
      ? (activeIndex + 1) % items.length
      : (activeIndex - 1 + items.length) % items.length;
    const activeSize = getImageSizePercents(items[activeIndex]?.image?.url);
    const targetSize = getImageSizePercents(items[targetIndex]?.image?.url);
    const activeCoverScale = computeCoverScale(containerSize.width, containerSize.height, activeSize);
    const targetCoverScale = computeCoverScale(containerSize.width, containerSize.height, targetSize);

    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
    }

    setTransitionDirection(direction);
    setSnapLayout(true);
    setIsAnimating(true);

    if (direction === 'next') {
      setOutgoingIndex(activeIndex);
      setIncomingIndex(targetIndex);
      setIncomingScale(0);
      setOutgoingScale(1);
      setOutgoingFilter(getBackgroundFilter(bgImage, 0, 1));
    } else {
      setBackgroundIndex(getPreviousBackgroundIndex(targetIndex, items.length));
      setOutgoingIndex(targetIndex);
      setIncomingIndex(activeIndex);
      setIncomingScale(1);
      setOutgoingScale(targetCoverScale);
      setOutgoingFilter(getBackgroundFilter(bgImage, 1, targetCoverScale));
    }

    requestAnimationFrame(() => {
      setSnapLayout(false);
      requestAnimationFrame(() => {
        if (direction === 'next') {
          setIncomingScale(1);
          setOutgoingScale(activeCoverScale);
          setOutgoingFilter(getBackgroundFilter(bgImage, 1, activeCoverScale));
        } else {
          setIncomingScale(0);
          setOutgoingScale(1);
          setOutgoingFilter(getBackgroundFilter(bgImage, 0, 1));
        }
      });
    });

    transitionTimeoutRef.current = setTimeout(() => {
      if (direction === 'next') {
        setBackgroundIndex(activeIndex);
      }
      setActiveIndex(targetIndex);
      setOutgoingIndex(null);
      setIncomingIndex(null);
      setIsAnimating(false);
    }, transitionMs);
  }, [
    activeIndex,
    bgImage,
    containerSize.height,
    containerSize.width,
    getImageSizePercents,
    isAnimating,
    isInteractive,
    items,
    transitionMs,
  ]);

  const foregroundItem = items[activeIndex];
  const backgroundItem = backgroundIndex !== null ? items[backgroundIndex] : null;
  const outgoingItem = outgoingIndex !== null ? items[outgoingIndex] : null;
  const incomingItem = incomingIndex !== null ? items[incomingIndex] : null;
  const prevIndex = items.length <= 1 ? 0 : (activeIndex - 1 + items.length) % items.length;
  const nextIndex = items.length <= 1 ? 0 : (activeIndex + 1) % items.length;
  const foregroundSize = getImageSizePercents(foregroundItem?.image?.url);
  const outgoingFitSize = getImageSizePercents(outgoingItem?.image?.url);
  const incomingFitSize = getImageSizePercents(incomingItem?.image?.url);
  const wrapperStyle = {
    [\`--\${P}-transition-ms\`]: \`\${transitionMs}ms\`,
  } as React.CSSProperties;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: scopedCss }} />
      <div
        ref={wrapperRef}
        className={cn(\`\${P}-wrapper\`, snapLayout && \`\${P}-snap\`, isEditor && !isPreviewMode && \`\${P}-editor\`)}
        style={wrapperStyle}
        aria-label="Zoom gallery"
      >
        {backgroundItem?.image?.url && (
          <div className={\`\${P}-background\`} aria-hidden="true">
            <img
              className={\`\${P}-effect-image\`}
              src={backgroundItem.image.url}
              alt=""
              style={{ filter: backgroundFilter }}
            />
          </div>
        )}
        {isAnimating && outgoingItem?.image?.url && (
          <div
            className={cn(
              \`\${P}-stage\`,
              \`\${P}-outgoing\`,
              \`\${P}-outgoing-\${transitionDirection}\`,
            )}
            style={toStageStyle(outgoingFitSize, outgoingScale, P)}
            aria-hidden="true"
          >
            <img
              className={\`\${P}-effect-image\`}
              src={outgoingItem.image.url}
              alt=""
              style={{ filter: outgoingFilter }}
            />
          </div>
        )}
        {isAnimating && incomingItem?.image?.url && (
          <div
            className={cn(
              \`\${P}-stage\`,
              \`\${P}-incoming\`,
              \`\${P}-incoming-\${transitionDirection}\`,
            )}
            style={toStageStyle(incomingFitSize, incomingScale, P)}
            aria-hidden="true"
          >
            <img
              className={\`\${P}-image\`}
              src={incomingItem.image.url}
              alt=""
            />
          </div>
        )}
        {!isAnimating && foregroundItem?.image?.url && (
          <div
            className={cn(\`\${P}-stage\`, \`\${P}-foreground\`)}
            style={toSizeStyle(foregroundSize)}
          >
            <img
              className={\`\${P}-image\`}
              src={foregroundItem.image.url}
              alt={foregroundItem.image.name ?? ''}
            />
          </div>
        )}
        {isInteractive && items.length > 1 && !isAnimating && (
          <>
            <button
              type="button"
              className={cn(\`\${P}-nav\`, \`\${P}-nav-prev\`)}
              onClick={() => startTransition('prev')}
              aria-label={\`Show previous image (\${prevIndex + 1} of \${items.length})\`}
            />
            <button
              type="button"
              className={cn(\`\${P}-nav\`, \`\${P}-nav-next\`)}
              onClick={() => startTransition('next')}
              aria-label={\`Show next image (\${nextIndex + 1} of \${items.length})\`}
            />
          </>
        )}
      </div>
    </>
  );
}
`,assetsPaths:{content:[{path:"image.url",placeholderEnabled:!0}],parameters:[]},fontSettingsPaths:{content:[],parameters:[]}}],t.isSchemaV1=function(e){return"object"===e.type&&1===e.version}}}]);