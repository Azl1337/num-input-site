import{a as Z,g as B,h as ee,j as te,k as oe,l as W,o as re,t as ne}from"./chunk-5ZH5ITQI.js";import{a as U}from"./chunk-T7KBBLU3.js";import{a as H,b as J,c as Q}from"./chunk-SYQESB6R.js";import{c as ie}from"./chunk-LEIMCQKJ.js";import"./chunk-ALHTM6L5.js";import{f as se,g as ae}from"./chunk-CI2X2AE5.js";import{a as v}from"./chunk-FERD25SW.js";import"./chunk-MCRJI3T3.js";import{a as G}from"./chunk-MM5QLNJM.js";import{c as V,f as j,h as E,i as Y}from"./chunk-72KDLSWN.js";import"./chunk-OBXDPQ3V.js";import{b as K,c as X}from"./chunk-DXQK3E4W.js";import{b as pe,g as L,h as ce,k as de,l as D}from"./chunk-7VYUPGMW.js";import{f as C}from"./chunk-RW4GY4BD.js";var De=t=>{if(!t)return{arrowWidth:0,arrowHeight:0};let{width:e,height:o}=t.getBoundingClientRect();return{arrowWidth:e,arrowHeight:o}},fe=(t,e,o)=>{let r=e.getBoundingClientRect(),n=r.height,i=r.width;return t==="cover"&&o&&(i=o.getBoundingClientRect().width),{contentWidth:i,contentHeight:n}},Ae=(t,e,o,r)=>{let n=[],a=E(r).querySelector(".popover-content");switch(e){case"hover":n=[{eventName:"mouseenter",callback:s=>{document.elementFromPoint(s.clientX,s.clientY)!==t&&o.dismiss(void 0,void 0,!1)}}];break;case"context-menu":case"click":default:n=[{eventName:"click",callback:s=>{if(s.target.closest("[data-ion-popover-trigger]")===t){s.stopPropagation();return}o.dismiss(void 0,void 0,!1)}}];break}return n.forEach(({eventName:s,callback:p})=>a.addEventListener(s,p)),()=>{n.forEach(({eventName:s,callback:p})=>a.removeEventListener(s,p))}},Ie=(t,e,o)=>{let r=[];switch(e){case"hover":let n;r=[{eventName:"mouseenter",callback:i=>C(void 0,null,function*(){i.stopPropagation(),n&&clearTimeout(n),n=setTimeout(()=>{Y(()=>{o.presentFromTrigger(i),n=void 0})},100)})},{eventName:"mouseleave",callback:i=>{n&&clearTimeout(n);let a=i.relatedTarget;a&&a.closest("ion-popover")!==o&&o.dismiss(void 0,void 0,!1)}},{eventName:"click",callback:i=>i.stopPropagation()},{eventName:"ionPopoverActivateTrigger",callback:i=>o.presentFromTrigger(i,!0)}];break;case"context-menu":r=[{eventName:"contextmenu",callback:i=>{i.preventDefault(),o.presentFromTrigger(i)}},{eventName:"click",callback:i=>i.stopPropagation()},{eventName:"ionPopoverActivateTrigger",callback:i=>o.presentFromTrigger(i,!0)}];break;case"click":default:r=[{eventName:"click",callback:i=>o.presentFromTrigger(i)},{eventName:"ionPopoverActivateTrigger",callback:i=>o.presentFromTrigger(i,!0)}];break}return r.forEach(({eventName:n,callback:i})=>t.addEventListener(n,i)),t.setAttribute("data-ion-popover-trigger","true"),()=>{r.forEach(({eventName:n,callback:i})=>t.removeEventListener(n,i)),t.removeAttribute("data-ion-popover-trigger")}},he=(t,e)=>!e||e.tagName!=="ION-ITEM"?-1:t.findIndex(o=>o===e),Te=(t,e)=>{let o=he(t,e);return t[o+1]},Se=(t,e)=>{let o=he(t,e);return t[o-1]},z=t=>{let o=E(t).querySelector("button");o&&Y(()=>o.focus())},Ce=t=>t.hasAttribute("data-ion-popover-trigger"),Ee=t=>{let e=o=>C(void 0,null,function*(){var r;let n=document.activeElement,i=[],a=(r=o.target)===null||r===void 0?void 0:r.tagName;if(!(a!=="ION-POPOVER"&&a!=="ION-ITEM")){try{i=Array.from(t.querySelectorAll("ion-item:not(ion-popover ion-popover *):not([disabled])"))}catch{}switch(o.key){case"ArrowLeft":(yield t.getParentPopover())&&t.dismiss(void 0,void 0,!1);break;case"ArrowDown":o.preventDefault();let p=Te(i,n);p!==void 0&&z(p);break;case"ArrowUp":o.preventDefault();let d=Se(i,n);d!==void 0&&z(d);break;case"Home":o.preventDefault();let u=i[0];u!==void 0&&z(u);break;case"End":o.preventDefault();let l=i[i.length-1];l!==void 0&&z(l);break;case"ArrowRight":case" ":case"Enter":if(n&&Ce(n)){let h=new CustomEvent("ionPopoverActivateTrigger");n.dispatchEvent(h)}break}}});return t.addEventListener("keydown",e),()=>t.removeEventListener("keydown",e)},me=(t,e,o,r,n,i,a,s,p,d,u)=>{var l;let h={top:0,left:0,width:0,height:0};switch(i){case"event":if(!u)return p;let A=u;h={top:A.clientY,left:A.clientX,width:1,height:1};break;case"trigger":default:let c=u,I=d||((l=c==null?void 0:c.detail)===null||l===void 0?void 0:l.ionShadowTarget)||(c==null?void 0:c.target);if(!I)return p;let x=I.getBoundingClientRect();h={top:x.top,left:x.left,width:x.width,height:x.height};break}let m=$e(a,h,e,o,r,n,t),g=Ne(s,a,h,e,o),b=m.top+g.top,y=m.left+g.left,{arrowTop:f,arrowLeft:k}=Oe(a,r,n,b,y,e,o,t),{originX:w,originY:P}=Le(a,s,t);return{top:b,left:y,referenceCoordinates:h,arrowTop:f,arrowLeft:k,originX:w,originY:P}},Le=(t,e,o)=>{switch(t){case"top":return{originX:le(e),originY:"bottom"};case"bottom":return{originX:le(e),originY:"top"};case"left":return{originX:"right",originY:_(e)};case"right":return{originX:"left",originY:_(e)};case"start":return{originX:o?"left":"right",originY:_(e)};case"end":return{originX:o?"right":"left",originY:_(e)}}},le=t=>{switch(t){case"start":return"left";case"center":return"center";case"end":return"right"}},_=t=>{switch(t){case"start":return"top";case"center":return"center";case"end":return"bottom"}},Oe=(t,e,o,r,n,i,a,s)=>{let p={arrowTop:r+a/2-e/2,arrowLeft:n+i-e/2},d={arrowTop:r+a/2-e/2,arrowLeft:n-e*1.5};switch(t){case"top":return{arrowTop:r+a,arrowLeft:n+i/2-e/2};case"bottom":return{arrowTop:r-o,arrowLeft:n+i/2-e/2};case"left":return p;case"right":return d;case"start":return s?d:p;case"end":return s?p:d;default:return{arrowTop:0,arrowLeft:0}}},$e=(t,e,o,r,n,i,a)=>{let s={top:e.top,left:e.left-o-n},p={top:e.top,left:e.left+e.width+n};switch(t){case"top":return{top:e.top-r-i,left:e.left};case"right":return p;case"bottom":return{top:e.top+e.height+i,left:e.left};case"left":return s;case"start":return a?p:s;case"end":return a?s:p}},Ne=(t,e,o,r,n)=>{switch(t){case"center":return Ye(e,o,r,n);case"end":return qe(e,o,r,n);case"start":default:return{top:0,left:0}}},qe=(t,e,o,r)=>{switch(t){case"start":case"end":case"left":case"right":return{top:-(r-e.height),left:0};case"top":case"bottom":default:return{top:0,left:-(o-e.width)}}},Ye=(t,e,o,r)=>{switch(t){case"start":case"end":case"left":case"right":return{top:-(r/2-e.height/2),left:0};case"top":case"bottom":default:return{top:0,left:-(o/2-e.width/2)}}},ve=(t,e,o,r,n,i,a,s,p,d,u,l,h=0,m=0,g=0)=>{let b=h,y=m,f=o,k=e,w,P=d,A=u,c=!1,I=!1,x=l?l.top+l.height:i/2-s/2,T=l?l.height:0,O=!1;return f<r+p?(f=r,c=!0,P="left"):a+r+f+p>n&&(I=!0,f=n-a-r,P="right"),x+T+s>i&&(t==="top"||t==="bottom")&&(x-s>0?(k=Math.max(12,x-s-T-(g-1)),b=k+s,A="bottom",O=!0):w=r),{top:k,left:f,bottom:w,originX:P,originY:A,checkSafeAreaLeft:c,checkSafeAreaRight:I,arrowTop:b,arrowLeft:y,addPopoverBottomClass:O}},ze=(t,e=!1,o,r)=>!(!o&&!r||t!=="top"&&t!=="bottom"&&e),_e=5,Me=(t,e)=>{var o;let{event:r,size:n,trigger:i,reference:a,side:s,align:p}=e,d=t.ownerDocument,u=d.dir==="rtl",l=d.defaultView.innerWidth,h=d.defaultView.innerHeight,m=E(t),g=m.querySelector(".popover-content"),b=m.querySelector(".popover-arrow"),y=i||((o=r==null?void 0:r.detail)===null||o===void 0?void 0:o.ionShadowTarget)||(r==null?void 0:r.target),{contentWidth:f,contentHeight:k}=fe(n,g,y),{arrowWidth:w,arrowHeight:P}=De(b),A={top:h/2-k/2,left:l/2-f/2,originX:u?"right":"left",originY:"top"},c=me(u,f,k,w,P,a,s,p,A,i,r),I=n==="cover"?0:_e,x=n==="cover"?0:25,{originX:T,originY:O,top:$,left:S,bottom:N,checkSafeAreaLeft:q,checkSafeAreaRight:ue,arrowTop:ge,arrowLeft:be,addPopoverBottomClass:we}=ve(s,c.top,c.left,I,l,h,f,k,x,c.originX,c.originY,c.referenceCoordinates,c.arrowTop,c.arrowLeft,P),xe=v(),F=v(),R=v();return F.addElement(m.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),R.addElement(m.querySelector(".popover-arrow")).addElement(m.querySelector(".popover-content")).fromTo("opacity",.01,1),xe.easing("ease").duration(100).beforeAddWrite(()=>{n==="cover"&&t.style.setProperty("--width",`${f}px`),we&&t.classList.add("popover-bottom"),N!==void 0&&g.style.setProperty("bottom",`${N}px`);let ye=" + var(--ion-safe-area-left, 0)",ke=" - var(--ion-safe-area-right, 0)",M=`${S}px`;if(q&&(M=`${S}px${ye}`),ue&&(M=`${S}px${ke}`),g.style.setProperty("top",`calc(${$}px + var(--offset-y, 0))`),g.style.setProperty("left",`calc(${M} + var(--offset-x, 0))`),g.style.setProperty("transform-origin",`${O} ${T}`),b!==null){let Pe=c.top!==$||c.left!==S;ze(s,Pe,r,i)?(b.style.setProperty("top",`calc(${ge}px + var(--offset-y, 0))`),b.style.setProperty("left",`calc(${be}px + var(--offset-x, 0))`)):b.style.setProperty("display","none")}}).addAnimation([F,R])},Xe=t=>{let e=E(t),o=e.querySelector(".popover-content"),r=e.querySelector(".popover-arrow"),n=v(),i=v(),a=v();return i.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),a.addElement(e.querySelector(".popover-arrow")).addElement(e.querySelector(".popover-content")).fromTo("opacity",.99,0),n.easing("ease").afterAddWrite(()=>{t.style.removeProperty("--width"),t.classList.remove("popover-bottom"),o.style.removeProperty("top"),o.style.removeProperty("left"),o.style.removeProperty("bottom"),o.style.removeProperty("transform-origin"),r&&(r.style.removeProperty("top"),r.style.removeProperty("left"),r.style.removeProperty("display"))}).duration(300).addAnimation([i,a])},We=12,Fe=(t,e)=>{var o;let{event:r,size:n,trigger:i,reference:a,side:s,align:p}=e,d=t.ownerDocument,u=d.dir==="rtl",l=d.defaultView.innerWidth,h=d.defaultView.innerHeight,m=E(t),g=m.querySelector(".popover-content"),b=i||((o=r==null?void 0:r.detail)===null||o===void 0?void 0:o.ionShadowTarget)||(r==null?void 0:r.target),{contentWidth:y,contentHeight:f}=fe(n,g,b),k={top:h/2-f/2,left:l/2-y/2,originX:u?"right":"left",originY:"top"},w=me(u,y,f,0,0,a,s,p,k,i,r),P=n==="cover"?0:We,{originX:A,originY:c,top:I,left:x,bottom:T}=ve(s,w.top,w.left,P,l,h,y,f,0,w.originX,w.originY,w.referenceCoordinates),O=v(),$=v(),S=v(),N=v(),q=v();return $.addElement(m.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),S.addElement(m.querySelector(".popover-wrapper")).duration(150).fromTo("opacity",.01,1),N.addElement(g).beforeStyles({top:`calc(${I}px + var(--offset-y, 0px))`,left:`calc(${x}px + var(--offset-x, 0px))`,"transform-origin":`${c} ${A}`}).beforeAddWrite(()=>{T!==void 0&&g.style.setProperty("bottom",`${T}px`)}).fromTo("transform","scale(0.8)","scale(1)"),q.addElement(m.querySelector(".popover-viewport")).fromTo("opacity",.01,1),O.easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).beforeAddWrite(()=>{n==="cover"&&t.style.setProperty("--width",`${y}px`),c==="bottom"&&t.classList.add("popover-bottom")}).addAnimation([$,S,N,q])},Re=t=>{let e=E(t),o=e.querySelector(".popover-content"),r=v(),n=v(),i=v();return n.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),r.easing("ease").afterAddWrite(()=>{t.style.removeProperty("--width"),t.classList.remove("popover-bottom"),o.style.removeProperty("top"),o.style.removeProperty("left"),o.style.removeProperty("bottom"),o.style.removeProperty("transform-origin")}).duration(150).addAnimation([n,i])},Ve=':host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}:host(.popover-nested){pointer-events:none}:host(.popover-nested) .popover-wrapper{pointer-events:auto}:host(.overlay-hidden){display:none}.popover-wrapper{z-index:10}.popover-content{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}::slotted(.popover-viewport){--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}@supports selector(:dir(rtl)){:host(.popover-nested.popover-side-start:dir(rtl)){--offset-x:-5px}}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}@supports selector(:dir(rtl)){:host(.popover-nested.popover-side-end:dir(rtl)){--offset-x:5px}}:host{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}:host(.popover-desktop){--box-shadow:0px 4px 16px 0px rgba(0, 0, 0, 0.12)}.popover-content{border-radius:10px}:host(.popover-desktop) .popover-content{border:0.5px solid var(--ion-color-step-100, var(--ion-background-color-step-100, #e6e6e6))}.popover-arrow{display:block;position:absolute;width:20px;height:10px;overflow:hidden;z-index:11}.popover-arrow::after{top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}.popover-arrow::after{inset-inline-start:3px}:host(.popover-bottom) .popover-arrow{top:auto;bottom:-10px}:host(.popover-bottom) .popover-arrow::after{top:-6px}:host(.popover-side-left) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host(.popover-side-right) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host(.popover-side-top) .popover-arrow{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host(.popover-side-start) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host-context([dir=rtl]):host(.popover-side-start) .popover-arrow,:host-context([dir=rtl]).popover-side-start .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}@supports selector(:dir(rtl)){:host(.popover-side-start:dir(rtl)) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}}:host(.popover-side-end) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host-context([dir=rtl]):host(.popover-side-end) .popover-arrow,:host-context([dir=rtl]).popover-side-end .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}@supports selector(:dir(rtl)){:host(.popover-side-end:dir(rtl)) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}}.popover-arrow,.popover-content{opacity:0}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.popover-translucent) .popover-content,:host(.popover-translucent) .popover-arrow::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}',je=Ve,Ke=":host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}:host(.popover-nested){pointer-events:none}:host(.popover-nested) .popover-wrapper{pointer-events:auto}:host(.overlay-hidden){display:none}.popover-wrapper{z-index:10}.popover-content{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}::slotted(.popover-viewport){--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}@supports selector(:dir(rtl)){:host(.popover-nested.popover-side-start:dir(rtl)){--offset-x:-5px}}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}@supports selector(:dir(rtl)){:host(.popover-nested.popover-side-end:dir(rtl)){--offset-x:5px}}:host{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}:host-context([dir=rtl]) .popover-content{-webkit-transform-origin:right top;transform-origin:right top}[dir=rtl] .popover-content{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){.popover-content:dir(rtl){-webkit-transform-origin:right top;transform-origin:right top}}.popover-viewport{-webkit-transition-delay:100ms;transition-delay:100ms}.popover-wrapper{opacity:0}",Ge=Ke,Ue=class{constructor(t){pe(this,t),this.didPresent=D(this,"ionPopoverDidPresent",7),this.willPresent=D(this,"ionPopoverWillPresent",7),this.willDismiss=D(this,"ionPopoverWillDismiss",7),this.didDismiss=D(this,"ionPopoverDidDismiss",7),this.didPresentShorthand=D(this,"didPresent",7),this.willPresentShorthand=D(this,"willPresent",7),this.willDismissShorthand=D(this,"willDismiss",7),this.didDismissShorthand=D(this,"didDismiss",7),this.ionMount=D(this,"ionMount",7),this.parentPopover=null,this.coreDelegate=Q(),this.lockController=U(),this.inline=!1,this.focusDescendantOnPresent=!1,this.onBackdropTap=()=>{this.dismiss(void 0,re)},this.onLifecycle=e=>{let o=this.usersElement,r=He[e.type];if(o&&r){let n=new CustomEvent(r,{bubbles:!1,cancelable:!1,detail:e.detail});o.dispatchEvent(n)}},this.configureTriggerInteraction=()=>{let{trigger:e,triggerAction:o,el:r,destroyTriggerInteraction:n}=this;if(n&&n(),e===void 0)return;let i=this.triggerEl=e!==void 0?document.getElementById(e):null;if(!i){G(`A trigger element with the ID "${e}" was not found in the DOM. The trigger element must be in the DOM when the "trigger" property is set on ion-popover.`,this.el);return}this.destroyTriggerInteraction=Ie(i,o,r)},this.configureKeyboardInteraction=()=>{let{destroyKeyboardInteraction:e,el:o}=this;e&&e(),this.destroyKeyboardInteraction=Ee(o)},this.configureDismissInteraction=()=>{let{destroyDismissInteraction:e,parentPopover:o,triggerAction:r,triggerEl:n,el:i}=this;!o||!n||(e&&e(),this.destroyDismissInteraction=Ae(n,r,i,o))},this.presented=!1,this.hasController=!1,this.delegate=void 0,this.overlayIndex=void 0,this.enterAnimation=void 0,this.leaveAnimation=void 0,this.component=void 0,this.componentProps=void 0,this.keyboardClose=!0,this.cssClass=void 0,this.backdropDismiss=!0,this.event=void 0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.htmlAttributes=void 0,this.triggerAction="click",this.trigger=void 0,this.size="auto",this.dismissOnSelect=!1,this.reference="trigger",this.side="bottom",this.alignment=void 0,this.arrow=!0,this.isOpen=!1,this.keyboardEvents=!1,this.focusTrap=!0,this.keepContentsMounted=!1}onTriggerChange(){this.configureTriggerInteraction()}onIsOpenChange(t,e){t===!0&&e===!1?this.present():t===!1&&e===!0&&this.dismiss()}connectedCallback(){let{configureTriggerInteraction:t,el:e}=this;B(e),t()}disconnectedCallback(){let{destroyTriggerInteraction:t}=this;t&&t()}componentWillLoad(){var t,e;let{el:o}=this,r=(e=(t=this.htmlAttributes)===null||t===void 0?void 0:t.id)!==null&&e!==void 0?e:ee(o);this.parentPopover=o.closest(`ion-popover:not(#${r})`),this.alignment===void 0&&(this.alignment=X(this)==="ios"?"center":"start")}componentDidLoad(){let{parentPopover:t,isOpen:e}=this;e===!0&&Y(()=>this.present()),t&&j(t,"ionPopoverWillDismiss",()=>{this.dismiss(void 0,void 0,!1)}),this.configureTriggerInteraction()}presentFromTrigger(t,e=!1){return C(this,null,function*(){this.focusDescendantOnPresent=e,yield this.present(t),this.focusDescendantOnPresent=!1})}getDelegate(t=!1){if(this.workingDelegate&&!t)return{delegate:this.workingDelegate,inline:this.inline};let e=this.el.parentNode,o=this.inline=e!==null&&!this.hasController,r=this.workingDelegate=o?this.delegate||this.coreDelegate:this.delegate;return{inline:o,delegate:r}}present(t){return C(this,null,function*(){let e=yield this.lockController.lock();if(this.presented){e();return}let{el:o}=this,{inline:r,delegate:n}=this.getDelegate(!0);this.ionMount.emit(),this.usersElement=yield H(n,o,this.component,["popover-viewport"],this.componentProps,r),this.keyboardEvents||this.configureKeyboardInteraction(),this.configureDismissInteraction(),V(o)?yield ae(this.usersElement):this.keepContentsMounted||(yield se()),yield te(this,"popoverEnter",Me,Fe,{event:t||this.event,size:this.size,trigger:this.triggerEl,reference:this.reference,side:this.side,align:this.alignment}),this.focusDescendantOnPresent&&Z(o),e()})}dismiss(t,e,o=!0){return C(this,null,function*(){let r=yield this.lockController.lock(),{destroyKeyboardInteraction:n,destroyDismissInteraction:i}=this;o&&this.parentPopover&&this.parentPopover.dismiss(t,e,o);let a=yield oe(this,t,e,"popoverLeave",Xe,Re,this.event);if(a){n&&(n(),this.destroyKeyboardInteraction=void 0),i&&(i(),this.destroyDismissInteraction=void 0);let{delegate:s}=this.getDelegate();yield J(s,this.usersElement)}return r(),a})}getParentPopover(){return C(this,null,function*(){return this.parentPopover})}onDidDismiss(){return W(this.el,"ionPopoverDidDismiss")}onWillDismiss(){return W(this.el,"ionPopoverWillDismiss")}render(){let t=X(this),{onLifecycle:e,parentPopover:o,dismissOnSelect:r,side:n,arrow:i,htmlAttributes:a,focusTrap:s}=this,p=K("desktop"),d=i&&!o;return L(ce,Object.assign({key:"ffe8b37c9ffb5cac210a7307e6cdfcf78712905b","aria-modal":"true","no-router":!0,tabindex:"-1"},a,{style:{zIndex:`${2e4+this.overlayIndex}`},class:Object.assign(Object.assign({},ie(this.cssClass)),{[t]:!0,"popover-translucent":this.translucent,"overlay-hidden":!0,"popover-desktop":p,[`popover-side-${n}`]:!0,[ne]:s===!1,"popover-nested":!!o}),onIonPopoverDidPresent:e,onIonPopoverWillPresent:e,onIonPopoverWillDismiss:e,onIonPopoverDidDismiss:e,onIonBackdropTap:this.onBackdropTap}),!o&&L("ion-backdrop",{key:"12b3ffa3928b4d56a4f09c3d2f5d493d47b45255",tappable:this.backdropDismiss,visible:this.showBackdrop,part:"backdrop"}),L("div",{key:"2c2862d5c7e75b637973c712b4982bf4978c0cdf",class:"popover-wrapper ion-overlay-wrapper",onClick:r?()=>this.dismiss():void 0},d&&L("div",{key:"0cfacc52afaa7abc28c1b7742889d7a1c23a37ad",class:"popover-arrow",part:"arrow"}),L("div",{key:"3ef570c44d4fe7f063dd419008c92c8c40d3cd22",class:"popover-content",part:"content"},L("slot",{key:"6fc5dfdce20fee1642bc1f05d41b5bf7d1034457"}))))}get el(){return de(this)}static get watchers(){return{trigger:["onTriggerChange"],triggerAction:["onTriggerChange"],isOpen:["onIsOpenChange"]}}},He={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"};Ue.style={ios:je,md:Ge};export{Ue as ion_popover};
