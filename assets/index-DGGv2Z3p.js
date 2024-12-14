var Nl=Object.defineProperty;var Ul=(i,t,e)=>t in i?Nl(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var $t=(i,t,e)=>Ul(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gs="158",ai={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},li={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Fl=0,ao=1,Bl=2,ja=1,Ol=2,bn=3,Hn=0,Ye=1,wn=2,Bn=0,Pi=1,lo=2,co=3,ho=4,zl=5,Qn=100,Vl=101,Hl=102,uo=103,fo=104,kl=200,Gl=201,Wl=202,Xl=203,Ls=204,Is=205,ql=206,Yl=207,jl=208,Kl=209,Zl=210,$l=211,Ql=212,Jl=213,tc=214,ec=0,nc=1,ic=2,Br=3,rc=4,sc=5,oc=6,ac=7,Ws=0,lc=1,cc=2,On=0,hc=1,uc=2,dc=3,fc=4,pc=5,Ka=300,Ii=301,Di=302,Ds=303,Ns=304,Yr=306,Us=1e3,un=1001,Fs=1002,qe=1003,po=1004,Jr=1005,nn=1006,mc=1007,er=1008,zn=1009,vc=1010,gc=1011,Xs=1012,Za=1013,Un=1014,Fn=1015,nr=1016,$a=1017,Qa=1018,ti=1020,_c=1021,dn=1023,yc=1024,xc=1025,ei=1026,Ni=1027,Sc=1028,Ja=1029,Mc=1030,tl=1031,el=1033,ts=33776,es=33777,ns=33778,is=33779,mo=35840,vo=35841,go=35842,_o=35843,Ec=36196,yo=37492,xo=37496,So=37808,Mo=37809,Eo=37810,bo=37811,wo=37812,To=37813,Ao=37814,Co=37815,Ro=37816,Po=37817,Lo=37818,Io=37819,Do=37820,No=37821,rs=36492,Uo=36494,Fo=36495,bc=36283,Bo=36284,Oo=36285,zo=36286,nl=3e3,ni=3001,wc=3200,Tc=3201,qs=0,Ac=1,rn="",ze="srgb",Cn="srgb-linear",Ys="display-p3",jr="display-p3-linear",Or="linear",Me="srgb",zr="rec709",Vr="p3",ci=7680,Vo=519,Cc=512,Rc=513,Pc=514,Lc=515,Ic=516,Dc=517,Nc=518,Uc=519,Ho=35044,ko="300 es",Bs=1035,An=2e3,Hr=2001;class oi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Go=1234567;const Zi=Math.PI/180,Ui=180/Math.PI;function Bi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]).toLowerCase()}function Ge(i,t,e){return Math.max(t,Math.min(e,i))}function js(i,t){return(i%t+t)%t}function Fc(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function Bc(i,t,e){return i!==t?(e-i)/(t-i):0}function $i(i,t,e){return(1-e)*i+e*t}function Oc(i,t,e,n){return $i(i,t,1-Math.exp(-e*n))}function zc(i,t=1){return t-Math.abs(js(i,t*2)-t)}function Vc(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Hc(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function kc(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Gc(i,t){return i+Math.random()*(t-i)}function Wc(i){return i*(.5-Math.random())}function Xc(i){i!==void 0&&(Go=i);let t=Go+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function qc(i){return i*Zi}function Yc(i){return i*Ui}function Os(i){return(i&i-1)===0&&i!==0}function jc(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function kr(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Kc(i,t,e,n,r){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),u=s((t+n)/2),h=o((t+n)/2),c=s((t-n)/2),d=o((t-n)/2),p=s((n-t)/2),v=o((n-t)/2);switch(r){case"XYX":i.set(a*h,l*c,l*d,a*u);break;case"YZY":i.set(l*d,a*h,l*c,a*u);break;case"ZXZ":i.set(l*c,l*d,a*h,a*u);break;case"XZX":i.set(a*h,l*v,l*p,a*u);break;case"YXY":i.set(l*p,a*h,l*v,a*u);break;case"ZYZ":i.set(l*v,l*p,a*h,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function wi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function We(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Zc={DEG2RAD:Zi,RAD2DEG:Ui,generateUUID:Bi,clamp:Ge,euclideanModulo:js,mapLinear:Fc,inverseLerp:Bc,lerp:$i,damp:Oc,pingpong:zc,smoothstep:Vc,smootherstep:Hc,randInt:kc,randFloat:Gc,randFloatSpread:Wc,seededRandom:Xc,degToRad:qc,radToDeg:Yc,isPowerOfTwo:Os,ceilPowerOfTwo:jc,floorPowerOfTwo:kr,setQuaternionFromProperEuler:Kc,normalize:We,denormalize:wi};class he{constructor(t=0,e=0){he.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fe{constructor(t,e,n,r,s,o,a,l,u){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,u)}set(t,e,n,r,s,o,a,l,u){const h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],u=n[1],h=n[4],c=n[7],d=n[2],p=n[5],v=n[8],g=r[0],m=r[3],f=r[6],y=r[1],x=r[4],_=r[7],M=r[2],R=r[5],C=r[8];return s[0]=o*g+a*y+l*M,s[3]=o*m+a*x+l*R,s[6]=o*f+a*_+l*C,s[1]=u*g+h*y+c*M,s[4]=u*m+h*x+c*R,s[7]=u*f+h*_+c*C,s[2]=d*g+p*y+v*M,s[5]=d*m+p*x+v*R,s[8]=d*f+p*_+v*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],h=t[8];return e*o*h-e*a*u-n*s*h+n*a*l+r*s*u-r*o*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],h=t[8],c=h*o-a*u,d=a*l-h*s,p=u*s-o*l,v=e*c+n*d+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return t[0]=c*g,t[1]=(r*u-h*n)*g,t[2]=(a*n-r*o)*g,t[3]=d*g,t[4]=(h*e-r*l)*g,t[5]=(r*s-a*e)*g,t[6]=p*g,t[7]=(n*l-u*e)*g,t[8]=(o*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(n*l,n*u,-n*(l*o+u*a)+o+t,-r*u,r*l,-r*(-u*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ss.makeScale(t,e)),this}rotate(t){return this.premultiply(ss.makeRotation(-t)),this}translate(t,e){return this.premultiply(ss.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ss=new fe;function il(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Gr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function $c(){const i=Gr("canvas");return i.style.display="block",i}const Wo={};function Qi(i){i in Wo||(Wo[i]=!0,console.warn(i))}const Xo=new fe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),qo=new fe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),cr={[Cn]:{transfer:Or,primaries:zr,toReference:i=>i,fromReference:i=>i},[ze]:{transfer:Me,primaries:zr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[jr]:{transfer:Or,primaries:Vr,toReference:i=>i.applyMatrix3(qo),fromReference:i=>i.applyMatrix3(Xo)},[Ys]:{transfer:Me,primaries:Vr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(qo),fromReference:i=>i.applyMatrix3(Xo).convertLinearToSRGB()}},Qc=new Set([Cn,jr]),xe={enabled:!0,_workingColorSpace:Cn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Qc.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=cr[t].toReference,r=cr[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return cr[i].primaries},getTransfer:function(i){return i===rn?Or:cr[i].transfer}};function Li(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function os(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let hi;class rl{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{hi===void 0&&(hi=Gr("canvas")),hi.width=t.width,hi.height=t.height;const n=hi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=hi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Gr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Li(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Li(e[n]/255)*255):e[n]=Li(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Jc=0;class sl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jc++}),this.uuid=Bi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(as(r[o].image)):s.push(as(r[o]))}else s=as(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function as(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?rl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let th=0;class tn extends oi{constructor(t=tn.DEFAULT_IMAGE,e=tn.DEFAULT_MAPPING,n=un,r=un,s=nn,o=er,a=dn,l=zn,u=tn.DEFAULT_ANISOTROPY,h=rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:th++}),this.uuid=Bi(),this.name="",this.source=new sl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Qi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ni?ze:rn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ka)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Us:t.x=t.x-Math.floor(t.x);break;case un:t.x=t.x<0?0:1;break;case Fs:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Us:t.y=t.y-Math.floor(t.y);break;case un:t.y=t.y<0?0:1;break;case Fs:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Qi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ze?ni:nl}set encoding(t){Qi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===ni?ze:rn}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Ka;tn.DEFAULT_ANISOTROPY=1;class Oe{constructor(t=0,e=0,n=0,r=1){Oe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,u=l[0],h=l[4],c=l[8],d=l[1],p=l[5],v=l[9],g=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(c-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(c+g)<.1&&Math.abs(v+m)<.1&&Math.abs(u+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(u+1)/2,_=(p+1)/2,M=(f+1)/2,R=(h+d)/4,C=(c+g)/4,B=(v+m)/4;return x>_&&x>M?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=R/n,s=C/n):_>M?_<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),n=R/r,s=B/r):M<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),n=C/s,r=B/s),this.set(n,r,s,e),this}let y=Math.sqrt((m-v)*(m-v)+(c-g)*(c-g)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-v)/y,this.y=(c-g)/y,this.z=(d-h)/y,this.w=Math.acos((u+p+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class eh extends oi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Oe(0,0,t,e),this.scissorTest=!1,this.viewport=new Oe(0,0,t,e);const r={width:t,height:e,depth:1};n.encoding!==void 0&&(Qi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ni?ze:rn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new tn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new sl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ii extends eh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ol extends tn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=qe,this.minFilter=qe,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nh extends tn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=qe,this.minFilter=qe,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ri{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],u=n[r+1],h=n[r+2],c=n[r+3];const d=s[o+0],p=s[o+1],v=s[o+2],g=s[o+3];if(a===0){t[e+0]=l,t[e+1]=u,t[e+2]=h,t[e+3]=c;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=v,t[e+3]=g;return}if(c!==g||l!==d||u!==p||h!==v){let m=1-a;const f=l*d+u*p+h*v+c*g,y=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const M=Math.sqrt(x),R=Math.atan2(M,f*y);m=Math.sin(m*R)/M,a=Math.sin(a*R)/M}const _=a*y;if(l=l*m+d*_,u=u*m+p*_,h=h*m+v*_,c=c*m+g*_,m===1-a){const M=1/Math.sqrt(l*l+u*u+h*h+c*c);l*=M,u*=M,h*=M,c*=M}}t[e]=l,t[e+1]=u,t[e+2]=h,t[e+3]=c}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],l=n[r+1],u=n[r+2],h=n[r+3],c=s[o],d=s[o+1],p=s[o+2],v=s[o+3];return t[e]=a*v+h*c+l*p-u*d,t[e+1]=l*v+h*d+u*c-a*p,t[e+2]=u*v+h*p+a*d-l*c,t[e+3]=h*v-a*c-l*d-u*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,u=a(n/2),h=a(r/2),c=a(s/2),d=l(n/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=d*h*c+u*p*v,this._y=u*p*c-d*h*v,this._z=u*h*v+d*p*c,this._w=u*h*c-d*p*v;break;case"YXZ":this._x=d*h*c+u*p*v,this._y=u*p*c-d*h*v,this._z=u*h*v-d*p*c,this._w=u*h*c+d*p*v;break;case"ZXY":this._x=d*h*c-u*p*v,this._y=u*p*c+d*h*v,this._z=u*h*v+d*p*c,this._w=u*h*c-d*p*v;break;case"ZYX":this._x=d*h*c-u*p*v,this._y=u*p*c+d*h*v,this._z=u*h*v-d*p*c,this._w=u*h*c+d*p*v;break;case"YZX":this._x=d*h*c+u*p*v,this._y=u*p*c+d*h*v,this._z=u*h*v-d*p*c,this._w=u*h*c-d*p*v;break;case"XZY":this._x=d*h*c-u*p*v,this._y=u*p*c-d*h*v,this._z=u*h*v+d*p*c,this._w=u*h*c+d*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],u=e[2],h=e[6],c=e[10],d=n+a+c;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(n>a&&n>c){const p=2*Math.sqrt(1+n-a-c);this._w=(h-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>c){const p=2*Math.sqrt(1+a-n-c);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+c-n-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ge(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,u=e._z,h=e._w;return this._x=n*h+o*a+r*u-s*l,this._y=r*h+o*l+s*a-n*u,this._z=s*h+o*u+n*l-r*a,this._w=o*h-n*a-r*l-s*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),h=Math.atan2(u,a),c=Math.sin((1-e)*h)/u,d=Math.sin(e*h)/u;return this._w=o*c+this._w*d,this._x=n*c+this._x*d,this._y=r*c+this._y*d,this._z=s*c+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(r),n*Math.sin(s),n*Math.cos(s),e*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class et{constructor(t=0,e=0,n=0){et.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Yo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Yo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,u=2*(o*r-a*n),h=2*(a*e-s*r),c=2*(s*n-o*e);return this.x=e+l*u+o*c-a*h,this.y=n+l*h+a*u-s*c,this.z=r+l*c+s*h-o*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ls.copy(this).projectOnVector(t),this.sub(ls)}reflect(t){return this.sub(ls.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ls=new et,Yo=new ri;class or{constructor(t=new et(1/0,1/0,1/0),e=new et(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(an.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(an.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=an.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,an):an.fromBufferAttribute(s,o),an.applyMatrix4(t.matrixWorld),this.expandByPoint(an);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),hr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),hr.copy(n.boundingBox)),hr.applyMatrix4(t.matrixWorld),this.union(hr)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,an),an.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hi),ur.subVectors(this.max,Hi),ui.subVectors(t.a,Hi),di.subVectors(t.b,Hi),fi.subVectors(t.c,Hi),Rn.subVectors(di,ui),Pn.subVectors(fi,di),Yn.subVectors(ui,fi);let e=[0,-Rn.z,Rn.y,0,-Pn.z,Pn.y,0,-Yn.z,Yn.y,Rn.z,0,-Rn.x,Pn.z,0,-Pn.x,Yn.z,0,-Yn.x,-Rn.y,Rn.x,0,-Pn.y,Pn.x,0,-Yn.y,Yn.x,0];return!cs(e,ui,di,fi,ur)||(e=[1,0,0,0,1,0,0,0,1],!cs(e,ui,di,fi,ur))?!1:(dr.crossVectors(Rn,Pn),e=[dr.x,dr.y,dr.z],cs(e,ui,di,fi,ur))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,an).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(an).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const yn=[new et,new et,new et,new et,new et,new et,new et,new et],an=new et,hr=new or,ui=new et,di=new et,fi=new et,Rn=new et,Pn=new et,Yn=new et,Hi=new et,ur=new et,dr=new et,jn=new et;function cs(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){jn.fromArray(i,s);const a=r.x*Math.abs(jn.x)+r.y*Math.abs(jn.y)+r.z*Math.abs(jn.z),l=t.dot(jn),u=e.dot(jn),h=n.dot(jn);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>a)return!1}return!0}const ih=new or,ki=new et,hs=new et;class Ks{constructor(t=new et,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ih.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ki.subVectors(t,this.center);const e=ki.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(ki,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(hs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ki.copy(t.center).add(hs)),this.expandByPoint(ki.copy(t.center).sub(hs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xn=new et,us=new et,fr=new et,Ln=new et,ds=new et,pr=new et,fs=new et;class al{constructor(t=new et,e=new et(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(xn.copy(this.origin).addScaledVector(this.direction,e),xn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){us.copy(t).add(e).multiplyScalar(.5),fr.copy(e).sub(t).normalize(),Ln.copy(this.origin).sub(us);const s=t.distanceTo(e)*.5,o=-this.direction.dot(fr),a=Ln.dot(this.direction),l=-Ln.dot(fr),u=Ln.lengthSq(),h=Math.abs(1-o*o);let c,d,p,v;if(h>0)if(c=o*l-a,d=o*a-l,v=s*h,c>=0)if(d>=-v)if(d<=v){const g=1/h;c*=g,d*=g,p=c*(c+o*d+2*a)+d*(o*c+d+2*l)+u}else d=s,c=Math.max(0,-(o*d+a)),p=-c*c+d*(d+2*l)+u;else d=-s,c=Math.max(0,-(o*d+a)),p=-c*c+d*(d+2*l)+u;else d<=-v?(c=Math.max(0,-(-o*s+a)),d=c>0?-s:Math.min(Math.max(-s,-l),s),p=-c*c+d*(d+2*l)+u):d<=v?(c=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+u):(c=Math.max(0,-(o*s+a)),d=c>0?s:Math.min(Math.max(-s,-l),s),p=-c*c+d*(d+2*l)+u);else d=o>0?-s:s,c=Math.max(0,-(o*d+a)),p=-c*c+d*(d+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,c),r&&r.copy(us).addScaledVector(fr,d),p}intersectSphere(t,e){xn.subVectors(t.center,this.origin);const n=xn.dot(this.direction),r=xn.dot(xn)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l;const u=1/this.direction.x,h=1/this.direction.y,c=1/this.direction.z,d=this.origin;return u>=0?(n=(t.min.x-d.x)*u,r=(t.max.x-d.x)*u):(n=(t.max.x-d.x)*u,r=(t.min.x-d.x)*u),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),c>=0?(a=(t.min.z-d.z)*c,l=(t.max.z-d.z)*c):(a=(t.max.z-d.z)*c,l=(t.min.z-d.z)*c),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,xn)!==null}intersectTriangle(t,e,n,r,s){ds.subVectors(e,t),pr.subVectors(n,t),fs.crossVectors(ds,pr);let o=this.direction.dot(fs),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ln.subVectors(this.origin,t);const l=a*this.direction.dot(pr.crossVectors(Ln,pr));if(l<0)return null;const u=a*this.direction.dot(ds.cross(Ln));if(u<0||l+u>o)return null;const h=-a*Ln.dot(fs);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ie{constructor(t,e,n,r,s,o,a,l,u,h,c,d,p,v,g,m){Ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,u,h,c,d,p,v,g,m)}set(t,e,n,r,s,o,a,l,u,h,c,d,p,v,g,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=u,f[6]=h,f[10]=c,f[14]=d,f[3]=p,f[7]=v,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/pi.setFromMatrixColumn(t,0).length(),s=1/pi.setFromMatrixColumn(t,1).length(),o=1/pi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),u=Math.sin(r),h=Math.cos(s),c=Math.sin(s);if(t.order==="XYZ"){const d=o*h,p=o*c,v=a*h,g=a*c;e[0]=l*h,e[4]=-l*c,e[8]=u,e[1]=p+v*u,e[5]=d-g*u,e[9]=-a*l,e[2]=g-d*u,e[6]=v+p*u,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,p=l*c,v=u*h,g=u*c;e[0]=d+g*a,e[4]=v*a-p,e[8]=o*u,e[1]=o*c,e[5]=o*h,e[9]=-a,e[2]=p*a-v,e[6]=g+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,p=l*c,v=u*h,g=u*c;e[0]=d-g*a,e[4]=-o*c,e[8]=v+p*a,e[1]=p+v*a,e[5]=o*h,e[9]=g-d*a,e[2]=-o*u,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,p=o*c,v=a*h,g=a*c;e[0]=l*h,e[4]=v*u-p,e[8]=d*u+g,e[1]=l*c,e[5]=g*u+d,e[9]=p*u-v,e[2]=-u,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,p=o*u,v=a*l,g=a*u;e[0]=l*h,e[4]=g-d*c,e[8]=v*c+p,e[1]=c,e[5]=o*h,e[9]=-a*h,e[2]=-u*h,e[6]=p*c+v,e[10]=d-g*c}else if(t.order==="XZY"){const d=o*l,p=o*u,v=a*l,g=a*u;e[0]=l*h,e[4]=-c,e[8]=u*h,e[1]=d*c+g,e[5]=o*h,e[9]=p*c-v,e[2]=v*c-p,e[6]=a*h,e[10]=g*c+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(rh,t,sh)}lookAt(t,e,n){const r=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),In.crossVectors(n,Ze),In.lengthSq()===0&&(Math.abs(n.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),In.crossVectors(n,Ze)),In.normalize(),mr.crossVectors(Ze,In),r[0]=In.x,r[4]=mr.x,r[8]=Ze.x,r[1]=In.y,r[5]=mr.y,r[9]=Ze.y,r[2]=In.z,r[6]=mr.z,r[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],u=n[12],h=n[1],c=n[5],d=n[9],p=n[13],v=n[2],g=n[6],m=n[10],f=n[14],y=n[3],x=n[7],_=n[11],M=n[15],R=r[0],C=r[4],B=r[8],S=r[12],E=r[1],P=r[5],z=r[9],H=r[13],D=r[2],k=r[6],tt=r[10],F=r[14],O=r[3],Z=r[7],X=r[11],w=r[15];return s[0]=o*R+a*E+l*D+u*O,s[4]=o*C+a*P+l*k+u*Z,s[8]=o*B+a*z+l*tt+u*X,s[12]=o*S+a*H+l*F+u*w,s[1]=h*R+c*E+d*D+p*O,s[5]=h*C+c*P+d*k+p*Z,s[9]=h*B+c*z+d*tt+p*X,s[13]=h*S+c*H+d*F+p*w,s[2]=v*R+g*E+m*D+f*O,s[6]=v*C+g*P+m*k+f*Z,s[10]=v*B+g*z+m*tt+f*X,s[14]=v*S+g*H+m*F+f*w,s[3]=y*R+x*E+_*D+M*O,s[7]=y*C+x*P+_*k+M*Z,s[11]=y*B+x*z+_*tt+M*X,s[15]=y*S+x*H+_*F+M*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],u=t[13],h=t[2],c=t[6],d=t[10],p=t[14],v=t[3],g=t[7],m=t[11],f=t[15];return v*(+s*l*c-r*u*c-s*a*d+n*u*d+r*a*p-n*l*p)+g*(+e*l*p-e*u*d+s*o*d-r*o*p+r*u*h-s*l*h)+m*(+e*u*c-e*a*p-s*o*c+n*o*p+s*a*h-n*u*h)+f*(-r*a*h-e*l*c+e*a*d+r*o*c-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],h=t[8],c=t[9],d=t[10],p=t[11],v=t[12],g=t[13],m=t[14],f=t[15],y=c*m*u-g*d*u+g*l*p-a*m*p-c*l*f+a*d*f,x=v*d*u-h*m*u-v*l*p+o*m*p+h*l*f-o*d*f,_=h*g*u-v*c*u+v*a*p-o*g*p-h*a*f+o*c*f,M=v*c*l-h*g*l-v*a*d+o*g*d+h*a*m-o*c*m,R=e*y+n*x+r*_+s*M;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return t[0]=y*C,t[1]=(g*d*s-c*m*s-g*r*p+n*m*p+c*r*f-n*d*f)*C,t[2]=(a*m*s-g*l*s+g*r*u-n*m*u-a*r*f+n*l*f)*C,t[3]=(c*l*s-a*d*s-c*r*u+n*d*u+a*r*p-n*l*p)*C,t[4]=x*C,t[5]=(h*m*s-v*d*s+v*r*p-e*m*p-h*r*f+e*d*f)*C,t[6]=(v*l*s-o*m*s-v*r*u+e*m*u+o*r*f-e*l*f)*C,t[7]=(o*d*s-h*l*s+h*r*u-e*d*u-o*r*p+e*l*p)*C,t[8]=_*C,t[9]=(v*c*s-h*g*s-v*n*p+e*g*p+h*n*f-e*c*f)*C,t[10]=(o*g*s-v*a*s+v*n*u-e*g*u-o*n*f+e*a*f)*C,t[11]=(h*a*s-o*c*s-h*n*u+e*c*u+o*n*p-e*a*p)*C,t[12]=M*C,t[13]=(h*g*r-v*c*r+v*n*d-e*g*d-h*n*m+e*c*m)*C,t[14]=(v*a*r-o*g*r-v*n*l+e*g*l+o*n*m-e*a*m)*C,t[15]=(o*c*r-h*a*r+h*n*l-e*c*l-o*n*d+e*a*d)*C,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,u=s*o,h=s*a;return this.set(u*o+n,u*a-r*l,u*l+r*a,0,u*a+r*l,h*a+n,h*l-r*o,0,u*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,u=s+s,h=o+o,c=a+a,d=s*u,p=s*h,v=s*c,g=o*h,m=o*c,f=a*c,y=l*u,x=l*h,_=l*c,M=n.x,R=n.y,C=n.z;return r[0]=(1-(g+f))*M,r[1]=(p+_)*M,r[2]=(v-x)*M,r[3]=0,r[4]=(p-_)*R,r[5]=(1-(d+f))*R,r[6]=(m+y)*R,r[7]=0,r[8]=(v+x)*C,r[9]=(m-y)*C,r[10]=(1-(d+g))*C,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=pi.set(r[0],r[1],r[2]).length();const o=pi.set(r[4],r[5],r[6]).length(),a=pi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],ln.copy(this);const u=1/s,h=1/o,c=1/a;return ln.elements[0]*=u,ln.elements[1]*=u,ln.elements[2]*=u,ln.elements[4]*=h,ln.elements[5]*=h,ln.elements[6]*=h,ln.elements[8]*=c,ln.elements[9]*=c,ln.elements[10]*=c,e.setFromRotationMatrix(ln),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=An){const l=this.elements,u=2*s/(e-t),h=2*s/(n-r),c=(e+t)/(e-t),d=(n+r)/(n-r);let p,v;if(a===An)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Hr)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=c,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=An){const l=this.elements,u=1/(e-t),h=1/(n-r),c=1/(o-s),d=(e+t)*u,p=(n+r)*h;let v,g;if(a===An)v=(o+s)*c,g=-2*c;else if(a===Hr)v=s*c,g=-1*c;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const pi=new et,ln=new Ie,rh=new et(0,0,0),sh=new et(1,1,1),In=new et,mr=new et,Ze=new et,jo=new Ie,Ko=new ri;class Kr{constructor(t=0,e=0,n=0,r=Kr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],h=r[9],c=r[2],d=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-c,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-c,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ge(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-c,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return jo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(jo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ko.setFromEuler(this),this.setFromQuaternion(Ko,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kr.DEFAULT_ORDER="XYZ";class ll{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let oh=0;const Zo=new et,mi=new ri,Sn=new Ie,vr=new et,Gi=new et,ah=new et,lh=new ri,$o=new et(1,0,0),Qo=new et(0,1,0),Jo=new et(0,0,1),ch={type:"added"},hh={type:"removed"};class Ve extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:oh++}),this.uuid=Bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ve.DEFAULT_UP.clone();const t=new et,e=new Kr,n=new ri,r=new et(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ie},normalMatrix:{value:new fe}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=Ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ll,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return mi.setFromAxisAngle(t,e),this.quaternion.multiply(mi),this}rotateOnWorldAxis(t,e){return mi.setFromAxisAngle(t,e),this.quaternion.premultiply(mi),this}rotateX(t){return this.rotateOnAxis($o,t)}rotateY(t){return this.rotateOnAxis(Qo,t)}rotateZ(t){return this.rotateOnAxis(Jo,t)}translateOnAxis(t,e){return Zo.copy(t).applyQuaternion(this.quaternion),this.position.add(Zo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis($o,t)}translateY(t){return this.translateOnAxis(Qo,t)}translateZ(t){return this.translateOnAxis(Jo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?vr.copy(t):vr.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Gi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(Gi,vr,this.up):Sn.lookAt(vr,Gi,this.up),this.quaternion.setFromRotationMatrix(Sn),r&&(Sn.extractRotation(r.matrixWorld),mi.setFromRotationMatrix(Sn),this.quaternion.premultiply(mi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(ch)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(hh)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Sn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Sn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(t,e);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,t,ah),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,lh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){const c=l[u];s(t.shapes,c)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),u=o(t.textures),h=o(t.images),c=o(t.shapes),d=o(t.skeletons),p=o(t.animations),v=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),c.length>0&&(n.shapes=c),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=r,n;function o(a){const l=[];for(const u in a){const h=a[u];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Ve.DEFAULT_UP=new et(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const cn=new et,Mn=new et,ps=new et,En=new et,vi=new et,gi=new et,ta=new et,ms=new et,vs=new et,gs=new et;let gr=!1;class hn{constructor(t=new et,e=new et,n=new et){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),cn.subVectors(t,e),r.cross(cn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){cn.subVectors(r,e),Mn.subVectors(n,e),ps.subVectors(t,e);const o=cn.dot(cn),a=cn.dot(Mn),l=cn.dot(ps),u=Mn.dot(Mn),h=Mn.dot(ps),c=o*u-a*a;if(c===0)return s.set(-2,-1,-1);const d=1/c,p=(u*l-a*h)*d,v=(o*h-a*l)*d;return s.set(1-p-v,v,p)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,En),En.x>=0&&En.y>=0&&En.x+En.y<=1}static getUV(t,e,n,r,s,o,a,l){return gr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),gr=!0),this.getInterpolation(t,e,n,r,s,o,a,l)}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,En),l.setScalar(0),l.addScaledVector(s,En.x),l.addScaledVector(o,En.y),l.addScaledVector(a,En.z),l}static isFrontFacing(t,e,n,r){return cn.subVectors(n,e),Mn.subVectors(t,e),cn.cross(Mn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return cn.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),cn.cross(Mn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return hn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return hn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,r,s){return gr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),gr=!0),hn.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}getInterpolation(t,e,n,r,s){return hn.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return hn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;vi.subVectors(r,n),gi.subVectors(s,n),ms.subVectors(t,n);const l=vi.dot(ms),u=gi.dot(ms);if(l<=0&&u<=0)return e.copy(n);vs.subVectors(t,r);const h=vi.dot(vs),c=gi.dot(vs);if(h>=0&&c<=h)return e.copy(r);const d=l*c-h*u;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(vi,o);gs.subVectors(t,s);const p=vi.dot(gs),v=gi.dot(gs);if(v>=0&&p<=v)return e.copy(s);const g=p*u-l*v;if(g<=0&&u>=0&&v<=0)return a=u/(u-v),e.copy(n).addScaledVector(gi,a);const m=h*v-p*c;if(m<=0&&c-h>=0&&p-v>=0)return ta.subVectors(s,r),a=(c-h)/(c-h+(p-v)),e.copy(r).addScaledVector(ta,a);const f=1/(m+g+d);return o=g*f,a=d*f,e.copy(n).addScaledVector(vi,o).addScaledVector(gi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const cl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},_r={h:0,s:0,l:0};function _s(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}let ve=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,xe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=xe.workingColorSpace){return this.r=t,this.g=e,this.b=n,xe.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=xe.workingColorSpace){if(t=js(t,1),e=Ge(e,0,1),n=Ge(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=_s(o,s,t+1/3),this.g=_s(o,s,t),this.b=_s(o,s,t-1/3)}return xe.toWorkingColorSpace(this,r),this}setStyle(t,e=ze){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ze){const n=cl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Li(t.r),this.g=Li(t.g),this.b=Li(t.b),this}copyLinearToSRGB(t){return this.r=os(t.r),this.g=os(t.g),this.b=os(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return xe.fromWorkingColorSpace(ke.copy(this),t),Math.round(Ge(ke.r*255,0,255))*65536+Math.round(Ge(ke.g*255,0,255))*256+Math.round(Ge(ke.b*255,0,255))}getHexString(t=ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=xe.workingColorSpace){xe.fromWorkingColorSpace(ke.copy(this),e);const n=ke.r,r=ke.g,s=ke.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,u;const h=(a+o)/2;if(a===o)l=0,u=0;else{const c=o-a;switch(u=h<=.5?c/(o+a):c/(2-o-a),o){case n:l=(r-s)/c+(r<s?6:0);break;case r:l=(s-n)/c+2;break;case s:l=(n-r)/c+4;break}l/=6}return t.h=l,t.s=u,t.l=h,t}getRGB(t,e=xe.workingColorSpace){return xe.fromWorkingColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=ze){xe.fromWorkingColorSpace(ke.copy(this),t);const e=ke.r,n=ke.g,r=ke.b;return t!==ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Dn),this.setHSL(Dn.h+t,Dn.s+e,Dn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Dn),t.getHSL(_r);const n=$i(Dn.h,_r.h,e),r=$i(Dn.s,_r.s,e),s=$i(Dn.l,_r.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const ke=new ve;ve.NAMES=cl;let uh=0;class Oi extends oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uh++}),this.uuid=Bi(),this.name="",this.type="Material",this.blending=Pi,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ls,this.blendDst=Is,this.blendEquation=Qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ve(0,0,0),this.blendAlpha=0,this.depthFunc=Br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ci,this.stencilZFail=ci,this.stencilZPass=ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Pi&&(n.blending=this.blending),this.side!==Hn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ls&&(n.blendSrc=this.blendSrc),this.blendDst!==Is&&(n.blendDst=this.blendDst),this.blendEquation!==Qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Br&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ci&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ci&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ci&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class hl extends Oi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ws,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Pe=new et,yr=new he;class gn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ho,this.updateRange={offset:0,count:-1},this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)yr.fromBufferAttribute(this,e),yr.applyMatrix3(t),this.setXY(e,yr.x,yr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=wi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=We(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=wi(e,this.array)),e}setX(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=wi(e,this.array)),e}setY(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=wi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=wi(e,this.array)),e}setW(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array),r=We(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array),r=We(r,this.array),s=We(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ho&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}class ul extends gn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class dl extends gn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class _n extends gn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let dh=0;const en=new Ie,ys=new Ve,_i=new et,$e=new or,Wi=new or,Be=new et;class Gn extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dh++}),this.uuid=Bi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(il(t)?dl:ul)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new fe().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return en.makeRotationFromQuaternion(t),this.applyMatrix4(en),this}rotateX(t){return en.makeRotationX(t),this.applyMatrix4(en),this}rotateY(t){return en.makeRotationY(t),this.applyMatrix4(en),this}rotateZ(t){return en.makeRotationZ(t),this.applyMatrix4(en),this}translate(t,e,n){return en.makeTranslation(t,e,n),this.applyMatrix4(en),this}scale(t,e,n){return en.makeScale(t,e,n),this.applyMatrix4(en),this}lookAt(t){return ys.lookAt(t),ys.updateMatrix(),this.applyMatrix4(ys.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_i).negate(),this.translate(_i.x,_i.y,_i.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new _n(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new or);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new et(-1/0,-1/0,-1/0),new et(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];$e.setFromBufferAttribute(s),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ks);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new et,1/0);return}if(t){const n=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Wi.setFromBufferAttribute(a),this.morphTargetsRelative?(Be.addVectors($e.min,Wi.min),$e.expandByPoint(Be),Be.addVectors($e.max,Wi.max),$e.expandByPoint(Be)):($e.expandByPoint(Wi.min),$e.expandByPoint(Wi.max))}$e.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)Be.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Be));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let u=0,h=a.count;u<h;u++)Be.fromBufferAttribute(a,u),l&&(_i.fromBufferAttribute(t,u),Be.add(_i)),r=Math.max(r,n.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,r=e.position.array,s=e.normal.array,o=e.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],h=[];for(let E=0;E<a;E++)u[E]=new et,h[E]=new et;const c=new et,d=new et,p=new et,v=new he,g=new he,m=new he,f=new et,y=new et;function x(E,P,z){c.fromArray(r,E*3),d.fromArray(r,P*3),p.fromArray(r,z*3),v.fromArray(o,E*2),g.fromArray(o,P*2),m.fromArray(o,z*2),d.sub(c),p.sub(c),g.sub(v),m.sub(v);const H=1/(g.x*m.y-m.x*g.y);isFinite(H)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(H),y.copy(p).multiplyScalar(g.x).addScaledVector(d,-m.x).multiplyScalar(H),u[E].add(f),u[P].add(f),u[z].add(f),h[E].add(y),h[P].add(y),h[z].add(y))}let _=this.groups;_.length===0&&(_=[{start:0,count:n.length}]);for(let E=0,P=_.length;E<P;++E){const z=_[E],H=z.start,D=z.count;for(let k=H,tt=H+D;k<tt;k+=3)x(n[k+0],n[k+1],n[k+2])}const M=new et,R=new et,C=new et,B=new et;function S(E){C.fromArray(s,E*3),B.copy(C);const P=u[E];M.copy(P),M.sub(C.multiplyScalar(C.dot(P))).normalize(),R.crossVectors(B,P);const H=R.dot(h[E])<0?-1:1;l[E*4]=M.x,l[E*4+1]=M.y,l[E*4+2]=M.z,l[E*4+3]=H}for(let E=0,P=_.length;E<P;++E){const z=_[E],H=z.start,D=z.count;for(let k=H,tt=H+D;k<tt;k+=3)S(n[k+0]),S(n[k+1]),S(n[k+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const r=new et,s=new et,o=new et,a=new et,l=new et,u=new et,h=new et,c=new et;if(t)for(let d=0,p=t.count;d<p;d+=3){const v=t.getX(d+0),g=t.getX(d+1),m=t.getX(d+2);r.fromBufferAttribute(e,v),s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),h.subVectors(o,s),c.subVectors(r,s),h.cross(c),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),u.fromBufferAttribute(n,m),a.add(h),l.add(h),u.add(h),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,p=e.count;d<p;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),c.subVectors(r,s),h.cross(c),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(a,l){const u=a.array,h=a.itemSize,c=a.normalized,d=new u.constructor(l.length*h);let p=0,v=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*h;for(let f=0;f<h;f++)d[v++]=u[p++]}return new gn(d,h,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Gn,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=t(l,n);e.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let h=0,c=u.length;h<c;h++){const d=u[h],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const u=n[l];t.data.attributes[l]=u.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],h=[];for(let c=0,d=u.length;c<d;c++){const p=u[c];h.push(p.toJSON(t.data))}h.length>0&&(r[l]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(e))}const s=t.morphAttributes;for(const u in s){const h=[],c=s[u];for(let d=0,p=c.length;d<p;d++)h.push(c[d].clone(e));this.morphAttributes[u]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let u=0,h=o.length;u<h;u++){const c=o[u];this.addGroup(c.start,c.count,c.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ea=new Ie,Kn=new al,xr=new Ks,na=new et,yi=new et,xi=new et,Si=new et,xs=new et,Sr=new et,Mr=new he,Er=new he,br=new he,ia=new et,ra=new et,sa=new et,wr=new et,Tr=new et;class Le extends Ve{constructor(t=new Gn,e=new hl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Sr.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const h=a[l],c=s[l];h!==0&&(xs.fromBufferAttribute(c,t),o?Sr.addScaledVector(xs,h):Sr.addScaledVector(xs.sub(e),h))}e.add(Sr)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere),xr.applyMatrix4(s),Kn.copy(t.ray).recast(t.near),!(xr.containsPoint(Kn.origin)===!1&&(Kn.intersectSphere(xr,na)===null||Kn.origin.distanceToSquared(na)>(t.far-t.near)**2))&&(ea.copy(s).invert(),Kn.copy(t.ray).applyMatrix4(ea),!(n.boundingBox!==null&&Kn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Kn)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,c=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,g=d.length;v<g;v++){const m=d[v],f=o[m.materialIndex],y=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let _=y,M=x;_<M;_+=3){const R=a.getX(_),C=a.getX(_+1),B=a.getX(_+2);r=Ar(this,f,t,n,u,h,c,R,C,B),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const v=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=v,f=g;m<f;m+=3){const y=a.getX(m),x=a.getX(m+1),_=a.getX(m+2);r=Ar(this,o,t,n,u,h,c,y,x,_),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,g=d.length;v<g;v++){const m=d[v],f=o[m.materialIndex],y=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=y,M=x;_<M;_+=3){const R=_,C=_+1,B=_+2;r=Ar(this,f,t,n,u,h,c,R,C,B),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const v=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=v,f=g;m<f;m+=3){const y=m,x=m+1,_=m+2;r=Ar(this,o,t,n,u,h,c,y,x,_),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function fh(i,t,e,n,r,s,o,a){let l;if(t.side===Ye?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===Hn,a),l===null)return null;Tr.copy(a),Tr.applyMatrix4(i.matrixWorld);const u=e.ray.origin.distanceTo(Tr);return u<e.near||u>e.far?null:{distance:u,point:Tr.clone(),object:i}}function Ar(i,t,e,n,r,s,o,a,l,u){i.getVertexPosition(a,yi),i.getVertexPosition(l,xi),i.getVertexPosition(u,Si);const h=fh(i,t,e,n,yi,xi,Si,wr);if(h){r&&(Mr.fromBufferAttribute(r,a),Er.fromBufferAttribute(r,l),br.fromBufferAttribute(r,u),h.uv=hn.getInterpolation(wr,yi,xi,Si,Mr,Er,br,new he)),s&&(Mr.fromBufferAttribute(s,a),Er.fromBufferAttribute(s,l),br.fromBufferAttribute(s,u),h.uv1=hn.getInterpolation(wr,yi,xi,Si,Mr,Er,br,new he),h.uv2=h.uv1),o&&(ia.fromBufferAttribute(o,a),ra.fromBufferAttribute(o,l),sa.fromBufferAttribute(o,u),h.normal=hn.getInterpolation(wr,yi,xi,Si,ia,ra,sa,new et),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const c={a,b:l,c:u,normal:new et,materialIndex:0};hn.getNormal(yi,xi,Si,c.normal),h.face=c}return h}class Je extends Gn{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],h=[],c=[];let d=0,p=0;v("z","y","x",-1,-1,n,e,t,o,s,0),v("z","y","x",1,-1,n,e,-t,o,s,1),v("x","z","y",1,1,t,n,e,r,o,2),v("x","z","y",1,-1,t,n,-e,r,o,3),v("x","y","z",1,-1,t,e,n,r,s,4),v("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new _n(u,3)),this.setAttribute("normal",new _n(h,3)),this.setAttribute("uv",new _n(c,2));function v(g,m,f,y,x,_,M,R,C,B,S){const E=_/C,P=M/B,z=_/2,H=M/2,D=R/2,k=C+1,tt=B+1;let F=0,O=0;const Z=new et;for(let X=0;X<tt;X++){const w=X*P-H;for(let U=0;U<k;U++){const N=U*E-z;Z[g]=N*y,Z[m]=w*x,Z[f]=D,u.push(Z.x,Z.y,Z.z),Z[g]=0,Z[m]=0,Z[f]=R>0?1:-1,h.push(Z.x,Z.y,Z.z),c.push(U/C),c.push(1-X/B),F+=1}}for(let X=0;X<B;X++)for(let w=0;w<C;w++){const U=d+w+k*X,N=d+w+k*(X+1),I=d+(w+1)+k*(X+1),A=d+(w+1)+k*X;l.push(U,N,A),l.push(N,I,A),O+=6}a.addGroup(p,O,S),p+=O,d+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Je(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Fi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Xe(i){const t={};for(let e=0;e<i.length;e++){const n=Fi(i[e]);for(const r in n)t[r]=n[r]}return t}function ph(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function fl(i){return i.getRenderTarget()===null?i.outputColorSpace:xe.workingColorSpace}const mh={clone:Fi,merge:Xe};var vh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class si extends Oi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vh,this.fragmentShader=gh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fi(t.uniforms),this.uniformsGroups=ph(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class pl extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=An}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Qe extends pl{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ui*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ui*2*Math.atan(Math.tan(Zi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Zi*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/u,r*=o.width/l,n*=o.height/u}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Mi=-90,Ei=1;class _h extends Ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Qe(Mi,Ei,t,e);r.layers=this.layers,this.add(r);const s=new Qe(Mi,Ei,t,e);s.layers=this.layers,this.add(s);const o=new Qe(Mi,Ei,t,e);o.layers=this.layers,this.add(o);const a=new Qe(Mi,Ei,t,e);a.layers=this.layers,this.add(a);const l=new Qe(Mi,Ei,t,e);l.layers=this.layers,this.add(l);const u=new Qe(Mi,Ei,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(const u of e)this.remove(u);if(t===An)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Hr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,h]=this.children,c=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,u),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,r),t.render(e,h),t.setRenderTarget(c,d,p),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class ml extends tn{constructor(t,e,n,r,s,o,a,l,u,h){t=t!==void 0?t:[],e=e!==void 0?e:Ii,super(t,e,n,r,s,o,a,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class yh extends ii{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];e.encoding!==void 0&&(Qi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===ni?ze:rn),this.texture=new ml(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:nn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Je(5,5,5),s=new si({name:"CubemapFromEquirect",uniforms:Fi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ye,blending:Bn});s.uniforms.tEquirect.value=e;const o=new Le(r,s),a=e.minFilter;return e.minFilter===er&&(e.minFilter=nn),new _h(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}const Ss=new et,xh=new et,Sh=new fe;class Nn{constructor(t=new et(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Ss.subVectors(n,e).cross(xh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ss),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Sh.getNormalMatrix(t),r=this.coplanarPoint(Ss).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zn=new Ks,Cr=new et;class Zs{constructor(t=new Nn,e=new Nn,n=new Nn,r=new Nn,s=new Nn,o=new Nn){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=An){const n=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],h=r[5],c=r[6],d=r[7],p=r[8],v=r[9],g=r[10],m=r[11],f=r[12],y=r[13],x=r[14],_=r[15];if(n[0].setComponents(l-s,d-u,m-p,_-f).normalize(),n[1].setComponents(l+s,d+u,m+p,_+f).normalize(),n[2].setComponents(l+o,d+h,m+v,_+y).normalize(),n[3].setComponents(l-o,d-h,m-v,_-y).normalize(),n[4].setComponents(l-a,d-c,m-g,_-x).normalize(),e===An)n[5].setComponents(l+a,d+c,m+g,_+x).normalize();else if(e===Hr)n[5].setComponents(a,c,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Zn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zn)}intersectsSprite(t){return Zn.center.set(0,0,0),Zn.radius=.7071067811865476,Zn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zn)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Cr.x=r.normal.x>0?t.max.x:t.min.x,Cr.y=r.normal.y>0?t.max.y:t.min.y,Cr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Cr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vl(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Mh(i,t){const e=t.isWebGL2,n=new WeakMap;function r(u,h){const c=u.array,d=u.usage,p=i.createBuffer();i.bindBuffer(h,p),i.bufferData(h,c,d),u.onUploadCallback();let v;if(c instanceof Float32Array)v=i.FLOAT;else if(c instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(e)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)v=i.SHORT;else if(c instanceof Uint32Array)v=i.UNSIGNED_INT;else if(c instanceof Int32Array)v=i.INT;else if(c instanceof Int8Array)v=i.BYTE;else if(c instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:v,bytesPerElement:c.BYTES_PER_ELEMENT,version:u.version}}function s(u,h,c){const d=h.array,p=h.updateRange;i.bindBuffer(c,u),p.count===-1?i.bufferSubData(c,0,d):(e?i.bufferSubData(c,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):i.bufferSubData(c,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=n.get(u);h&&(i.deleteBuffer(h.buffer),n.delete(u))}function l(u,h){if(u.isGLBufferAttribute){const d=n.get(u);(!d||d.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const c=n.get(u);c===void 0?n.set(u,r(u,h)):c.version<u.version&&(s(c.buffer,u,h),c.version=u.version)}return{get:o,remove:a,update:l}}class ar extends Gn{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),u=a+1,h=l+1,c=t/a,d=e/l,p=[],v=[],g=[],m=[];for(let f=0;f<h;f++){const y=f*d-o;for(let x=0;x<u;x++){const _=x*c-s;v.push(_,-y,0),g.push(0,0,1),m.push(x/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<a;y++){const x=y+u*f,_=y+u*(f+1),M=y+1+u*(f+1),R=y+1+u*f;p.push(x,_,R),p.push(_,M,R)}this.setIndex(p),this.setAttribute("position",new _n(v,3)),this.setAttribute("normal",new _n(g,3)),this.setAttribute("uv",new _n(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ar(t.width,t.height,t.widthSegments,t.heightSegments)}}var Eh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Th=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ah=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ch=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ph=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ih=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Nh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Uh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Fh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Bh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Oh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Gh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Wh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Xh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,qh=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Yh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$h="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Jh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,tu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,eu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,nu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ru=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,su=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ou=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,au=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,hu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,du=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,pu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,mu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_u=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,xu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Su=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Mu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Eu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Au=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Cu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ru=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Lu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Iu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Du=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Uu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Fu=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Bu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ou=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Vu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ku=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Wu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ju=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ku=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Zu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$u=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ju=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,td=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ed=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,id=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,od=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ad=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,ld=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ud=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,md=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_d=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Md=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ed=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Td=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ad=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Cd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Rd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Pd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ld=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Id=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nd=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ud=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Od=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Hd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,kd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Xd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Kd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zd=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$d=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ue={alphahash_fragment:Eh,alphahash_pars_fragment:bh,alphamap_fragment:wh,alphamap_pars_fragment:Th,alphatest_fragment:Ah,alphatest_pars_fragment:Ch,aomap_fragment:Rh,aomap_pars_fragment:Ph,begin_vertex:Lh,beginnormal_vertex:Ih,bsdfs:Dh,iridescence_fragment:Nh,bumpmap_pars_fragment:Uh,clipping_planes_fragment:Fh,clipping_planes_pars_fragment:Bh,clipping_planes_pars_vertex:Oh,clipping_planes_vertex:zh,color_fragment:Vh,color_pars_fragment:Hh,color_pars_vertex:kh,color_vertex:Gh,common:Wh,cube_uv_reflection_fragment:Xh,defaultnormal_vertex:qh,displacementmap_pars_vertex:Yh,displacementmap_vertex:jh,emissivemap_fragment:Kh,emissivemap_pars_fragment:Zh,colorspace_fragment:$h,colorspace_pars_fragment:Qh,envmap_fragment:Jh,envmap_common_pars_fragment:tu,envmap_pars_fragment:eu,envmap_pars_vertex:nu,envmap_physical_pars_fragment:pu,envmap_vertex:iu,fog_vertex:ru,fog_pars_vertex:su,fog_fragment:ou,fog_pars_fragment:au,gradientmap_pars_fragment:lu,lightmap_fragment:cu,lightmap_pars_fragment:hu,lights_lambert_fragment:uu,lights_lambert_pars_fragment:du,lights_pars_begin:fu,lights_toon_fragment:mu,lights_toon_pars_fragment:vu,lights_phong_fragment:gu,lights_phong_pars_fragment:_u,lights_physical_fragment:yu,lights_physical_pars_fragment:xu,lights_fragment_begin:Su,lights_fragment_maps:Mu,lights_fragment_end:Eu,logdepthbuf_fragment:bu,logdepthbuf_pars_fragment:wu,logdepthbuf_pars_vertex:Tu,logdepthbuf_vertex:Au,map_fragment:Cu,map_pars_fragment:Ru,map_particle_fragment:Pu,map_particle_pars_fragment:Lu,metalnessmap_fragment:Iu,metalnessmap_pars_fragment:Du,morphcolor_vertex:Nu,morphnormal_vertex:Uu,morphtarget_pars_vertex:Fu,morphtarget_vertex:Bu,normal_fragment_begin:Ou,normal_fragment_maps:zu,normal_pars_fragment:Vu,normal_pars_vertex:Hu,normal_vertex:ku,normalmap_pars_fragment:Gu,clearcoat_normal_fragment_begin:Wu,clearcoat_normal_fragment_maps:Xu,clearcoat_pars_fragment:qu,iridescence_pars_fragment:Yu,opaque_fragment:ju,packing:Ku,premultiplied_alpha_fragment:Zu,project_vertex:$u,dithering_fragment:Qu,dithering_pars_fragment:Ju,roughnessmap_fragment:td,roughnessmap_pars_fragment:ed,shadowmap_pars_fragment:nd,shadowmap_pars_vertex:id,shadowmap_vertex:rd,shadowmask_pars_fragment:sd,skinbase_vertex:od,skinning_pars_vertex:ad,skinning_vertex:ld,skinnormal_vertex:cd,specularmap_fragment:hd,specularmap_pars_fragment:ud,tonemapping_fragment:dd,tonemapping_pars_fragment:fd,transmission_fragment:pd,transmission_pars_fragment:md,uv_pars_fragment:vd,uv_pars_vertex:gd,uv_vertex:_d,worldpos_vertex:yd,background_vert:xd,background_frag:Sd,backgroundCube_vert:Md,backgroundCube_frag:Ed,cube_vert:bd,cube_frag:wd,depth_vert:Td,depth_frag:Ad,distanceRGBA_vert:Cd,distanceRGBA_frag:Rd,equirect_vert:Pd,equirect_frag:Ld,linedashed_vert:Id,linedashed_frag:Dd,meshbasic_vert:Nd,meshbasic_frag:Ud,meshlambert_vert:Fd,meshlambert_frag:Bd,meshmatcap_vert:Od,meshmatcap_frag:zd,meshnormal_vert:Vd,meshnormal_frag:Hd,meshphong_vert:kd,meshphong_frag:Gd,meshphysical_vert:Wd,meshphysical_frag:Xd,meshtoon_vert:qd,meshtoon_frag:Yd,points_vert:jd,points_frag:Kd,shadow_vert:Zd,shadow_frag:$d,sprite_vert:Qd,sprite_frag:Jd},Gt={common:{diffuse:{value:new ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new ve(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},vn={basic:{uniforms:Xe([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:Xe([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new ve(0)}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:Xe([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new ve(0)},specular:{value:new ve(1118481)},shininess:{value:30}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:Xe([Gt.common,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.roughnessmap,Gt.metalnessmap,Gt.fog,Gt.lights,{emissive:{value:new ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:Xe([Gt.common,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.gradientmap,Gt.fog,Gt.lights,{emissive:{value:new ve(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:Xe([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:Xe([Gt.points,Gt.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:Xe([Gt.common,Gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:Xe([Gt.common,Gt.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:Xe([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:Xe([Gt.sprite,Gt.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distanceRGBA:{uniforms:Xe([Gt.common,Gt.displacementmap,{referencePosition:{value:new et},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distanceRGBA_vert,fragmentShader:ue.distanceRGBA_frag},shadow:{uniforms:Xe([Gt.lights,Gt.fog,{color:{value:new ve(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};vn.physical={uniforms:Xe([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new ve(0)},specularColor:{value:new ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};const Rr={r:0,b:0,g:0};function tf(i,t,e,n,r,s,o){const a=new ve(0);let l=s===!0?0:1,u,h,c=null,d=0,p=null;function v(m,f){let y=!1,x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=(f.backgroundBlurriness>0?e:t).get(x)),x===null?g(a,l):x&&x.isColor&&(g(x,1),y=!0);const _=i.xr.getEnvironmentBlendMode();_==="additive"?n.buffers.color.setClear(0,0,0,1,o):_==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Yr)?(h===void 0&&(h=new Le(new Je(1,1,1),new si({name:"BackgroundCubeMaterial",uniforms:Fi(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=xe.getTransfer(x.colorSpace)!==Me,(c!==x||d!==x.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,c=x,d=x.version,p=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new Le(new ar(2,2),new si({name:"BackgroundMaterial",uniforms:Fi(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=xe.getTransfer(x.colorSpace)!==Me,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(c!==x||d!==x.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,c=x,d=x.version,p=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function g(m,f){m.getRGB(Rr,fl(i)),n.buffers.color.setClear(Rr.r,Rr.g,Rr.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(a,l)},render:v}}function ef(i,t,e,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=m(null);let u=l,h=!1;function c(D,k,tt,F,O){let Z=!1;if(o){const X=g(F,tt,k);u!==X&&(u=X,p(u.object)),Z=f(D,F,tt,O),Z&&y(D,F,tt,O)}else{const X=k.wireframe===!0;(u.geometry!==F.id||u.program!==tt.id||u.wireframe!==X)&&(u.geometry=F.id,u.program=tt.id,u.wireframe=X,Z=!0)}O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(Z||h)&&(h=!1,B(D,k,tt,F),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function d(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function p(D){return n.isWebGL2?i.bindVertexArray(D):s.bindVertexArrayOES(D)}function v(D){return n.isWebGL2?i.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function g(D,k,tt){const F=tt.wireframe===!0;let O=a[D.id];O===void 0&&(O={},a[D.id]=O);let Z=O[k.id];Z===void 0&&(Z={},O[k.id]=Z);let X=Z[F];return X===void 0&&(X=m(d()),Z[F]=X),X}function m(D){const k=[],tt=[],F=[];for(let O=0;O<r;O++)k[O]=0,tt[O]=0,F[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:tt,attributeDivisors:F,object:D,attributes:{},index:null}}function f(D,k,tt,F){const O=u.attributes,Z=k.attributes;let X=0;const w=tt.getAttributes();for(const U in w)if(w[U].location>=0){const I=O[U];let A=Z[U];if(A===void 0&&(U==="instanceMatrix"&&D.instanceMatrix&&(A=D.instanceMatrix),U==="instanceColor"&&D.instanceColor&&(A=D.instanceColor)),I===void 0||I.attribute!==A||A&&I.data!==A.data)return!0;X++}return u.attributesNum!==X||u.index!==F}function y(D,k,tt,F){const O={},Z=k.attributes;let X=0;const w=tt.getAttributes();for(const U in w)if(w[U].location>=0){let I=Z[U];I===void 0&&(U==="instanceMatrix"&&D.instanceMatrix&&(I=D.instanceMatrix),U==="instanceColor"&&D.instanceColor&&(I=D.instanceColor));const A={};A.attribute=I,I&&I.data&&(A.data=I.data),O[U]=A,X++}u.attributes=O,u.attributesNum=X,u.index=F}function x(){const D=u.newAttributes;for(let k=0,tt=D.length;k<tt;k++)D[k]=0}function _(D){M(D,0)}function M(D,k){const tt=u.newAttributes,F=u.enabledAttributes,O=u.attributeDivisors;tt[D]=1,F[D]===0&&(i.enableVertexAttribArray(D),F[D]=1),O[D]!==k&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,k),O[D]=k)}function R(){const D=u.newAttributes,k=u.enabledAttributes;for(let tt=0,F=k.length;tt<F;tt++)k[tt]!==D[tt]&&(i.disableVertexAttribArray(tt),k[tt]=0)}function C(D,k,tt,F,O,Z,X){X===!0?i.vertexAttribIPointer(D,k,tt,O,Z):i.vertexAttribPointer(D,k,tt,F,O,Z)}function B(D,k,tt,F){if(n.isWebGL2===!1&&(D.isInstancedMesh||F.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const O=F.attributes,Z=tt.getAttributes(),X=k.defaultAttributeValues;for(const w in Z){const U=Z[w];if(U.location>=0){let N=O[w];if(N===void 0&&(w==="instanceMatrix"&&D.instanceMatrix&&(N=D.instanceMatrix),w==="instanceColor"&&D.instanceColor&&(N=D.instanceColor)),N!==void 0){const I=N.normalized,A=N.itemSize,j=e.get(N);if(j===void 0)continue;const at=j.buffer,nt=j.type,K=j.bytesPerElement,lt=n.isWebGL2===!0&&(nt===i.INT||nt===i.UNSIGNED_INT||N.gpuType===Za);if(N.isInterleavedBufferAttribute){const ut=N.data,q=ut.stride,Dt=N.offset;if(ut.isInstancedInterleavedBuffer){for(let pt=0;pt<U.locationSize;pt++)M(U.location+pt,ut.meshPerAttribute);D.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let pt=0;pt<U.locationSize;pt++)_(U.location+pt);i.bindBuffer(i.ARRAY_BUFFER,at);for(let pt=0;pt<U.locationSize;pt++)C(U.location+pt,A/U.locationSize,nt,I,q*K,(Dt+A/U.locationSize*pt)*K,lt)}else{if(N.isInstancedBufferAttribute){for(let ut=0;ut<U.locationSize;ut++)M(U.location+ut,N.meshPerAttribute);D.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let ut=0;ut<U.locationSize;ut++)_(U.location+ut);i.bindBuffer(i.ARRAY_BUFFER,at);for(let ut=0;ut<U.locationSize;ut++)C(U.location+ut,A/U.locationSize,nt,I,A*K,A/U.locationSize*ut*K,lt)}}else if(X!==void 0){const I=X[w];if(I!==void 0)switch(I.length){case 2:i.vertexAttrib2fv(U.location,I);break;case 3:i.vertexAttrib3fv(U.location,I);break;case 4:i.vertexAttrib4fv(U.location,I);break;default:i.vertexAttrib1fv(U.location,I)}}}}R()}function S(){z();for(const D in a){const k=a[D];for(const tt in k){const F=k[tt];for(const O in F)v(F[O].object),delete F[O];delete k[tt]}delete a[D]}}function E(D){if(a[D.id]===void 0)return;const k=a[D.id];for(const tt in k){const F=k[tt];for(const O in F)v(F[O].object),delete F[O];delete k[tt]}delete a[D.id]}function P(D){for(const k in a){const tt=a[k];if(tt[D.id]===void 0)continue;const F=tt[D.id];for(const O in F)v(F[O].object),delete F[O];delete tt[D.id]}}function z(){H(),h=!0,u!==l&&(u=l,p(u.object))}function H(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:c,reset:z,resetDefaultState:H,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:_,disableUnusedAttributes:R}}function nf(i,t,e,n){const r=n.isWebGL2;let s;function o(u){s=u}function a(u,h){i.drawArrays(s,u,h),e.update(h,s,1)}function l(u,h,c){if(c===0)return;let d,p;if(r)d=i,p="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,u,h,c),e.update(h,s,c)}this.setMode=o,this.render=a,this.renderInstances=l}function rf(i,t,e){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,c=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,_=o||t.has("OES_texture_float"),M=x&&_,R=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:c,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:_,floatVertexTextures:M,maxSamples:R}}function sf(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new Nn,a=new fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(c,d){const p=c.length!==0||d||n!==0||r;return r=d,n=c.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(c,d){e=h(c,d,0)},this.setState=function(c,d,p){const v=c.clippingPlanes,g=c.clipIntersection,m=c.clipShadows,f=i.get(c);if(!r||v===null||v.length===0||s&&!m)s?h(null):u();else{const y=s?0:n,x=y*4;let _=f.clippingState||null;l.value=_,_=h(v,d,x,p);for(let M=0;M!==x;++M)_[M]=e[M];f.clippingState=_,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function u(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(c,d,p,v){const g=c!==null?c.length:0;let m=null;if(g!==0){if(m=l.value,v!==!0||m===null){const f=p+g*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,_=p;x!==g;++x,_+=4)o.copy(c[x]).applyMatrix4(y,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function of(i){let t=new WeakMap;function e(o,a){return a===Ds?o.mapping=Ii:a===Ns&&(o.mapping=Di),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Ds||a===Ns)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new yh(l.height/2);return u.fromEquirectangularTexture(i,o),t.set(o,u),o.addEventListener("dispose",r),e(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class af extends pl{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ci=4,oa=[.125,.215,.35,.446,.526,.582],Jn=20,Ms=new af,aa=new ve;let Es=null,bs=0,ws=0;const $n=(1+Math.sqrt(5))/2,bi=1/$n,la=[new et(1,1,1),new et(-1,1,1),new et(1,1,-1),new et(-1,1,-1),new et(0,$n,bi),new et(0,$n,-bi),new et(bi,0,$n),new et(-bi,0,$n),new et($n,bi,0),new et(-$n,bi,0)];class ca{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){Es=this._renderer.getRenderTarget(),bs=this._renderer.getActiveCubeFace(),ws=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=da(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ua(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Es,bs,ws),t.scissorTest=!1,Pr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ii||t.mapping===Di?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Es=this._renderer.getRenderTarget(),bs=this._renderer.getActiveCubeFace(),ws=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:nr,format:dn,colorSpace:Cn,depthBuffer:!1},r=ha(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ha(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lf(s)),this._blurMaterial=cf(s,t,e)}return r}_compileMaterial(t){const e=new Le(this._lodPlanes[0],t);this._renderer.compile(e,Ms)}_sceneToCubeUV(t,e,n,r){const a=new Qe(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,c=h.autoClear,d=h.toneMapping;h.getClearColor(aa),h.toneMapping=On,h.autoClear=!1;const p=new hl({name:"PMREM.Background",side:Ye,depthWrite:!1,depthTest:!1}),v=new Le(new Je,p);let g=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,g=!0):(p.color.copy(aa),g=!0);for(let f=0;f<6;f++){const y=f%3;y===0?(a.up.set(0,l[f],0),a.lookAt(u[f],0,0)):y===1?(a.up.set(0,0,l[f]),a.lookAt(0,u[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,u[f]));const x=this._cubeSize;Pr(r,y*x,f>2?x:0,x,x),h.setRenderTarget(r),g&&h.render(v,a),h.render(t,a)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=d,h.autoClear=c,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Ii||t.mapping===Di;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=da()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ua());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Le(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Pr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ms)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=la[(r-1)%la.length];this._blur(t,r-1,r,s,o)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,c=new Le(this._lodPlanes[r],u),d=u.uniforms,p=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Jn-1),g=s/v,m=isFinite(s)?1+Math.floor(h*g):Jn;m>Jn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Jn}`);const f=[];let y=0;for(let C=0;C<Jn;++C){const B=C/g,S=Math.exp(-B*B/2);f.push(S),C===0?y+=S:C<m&&(y+=2*S)}for(let C=0;C<f.length;C++)f[C]=f[C]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=v,d.mipInt.value=x-n;const _=this._sizeLods[r],M=3*_*(r>x-Ci?r-x+Ci:0),R=4*(this._cubeSize-_);Pr(e,M,R,3*_,2*_),l.setRenderTarget(e),l.render(c,Ms)}}function lf(i){const t=[],e=[],n=[];let r=i;const s=i-Ci+1+oa.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>i-Ci?l=oa[o-i+Ci-1]:o===0&&(l=0),n.push(l);const u=1/(a-2),h=-u,c=1+u,d=[h,h,c,h,c,c,h,h,c,c,h,c],p=6,v=6,g=3,m=2,f=1,y=new Float32Array(g*v*p),x=new Float32Array(m*v*p),_=new Float32Array(f*v*p);for(let R=0;R<p;R++){const C=R%3*2/3-1,B=R>2?0:-1,S=[C,B,0,C+2/3,B,0,C+2/3,B+1,0,C,B,0,C+2/3,B+1,0,C,B+1,0];y.set(S,g*v*R),x.set(d,m*v*R);const E=[R,R,R,R,R,R];_.set(E,f*v*R)}const M=new Gn;M.setAttribute("position",new gn(y,g)),M.setAttribute("uv",new gn(x,m)),M.setAttribute("faceIndex",new gn(_,f)),t.push(M),r>Ci&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ha(i,t,e){const n=new ii(i,t,e);return n.texture.mapping=Yr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Pr(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function cf(i,t,e){const n=new Float32Array(Jn),r=new et(0,1,0);return new si({name:"SphericalGaussianBlur",defines:{n:Jn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:$s(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function ua(){return new si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$s(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function da(){return new si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$s(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function $s(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hf(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,u=l===Ds||l===Ns,h=l===Ii||l===Di;if(u||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let c=t.get(a);return e===null&&(e=new ca(i)),c=u?e.fromEquirectangular(a,c):e.fromCubemap(a,c),t.set(a,c),c.texture}else{if(t.has(a))return t.get(a).texture;{const c=a.image;if(u&&c&&c.height>0||h&&c&&r(c)){e===null&&(e=new ca(i));const d=u?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let h=0;h<u;h++)a[h]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function uf(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const r=e(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function df(i,t,e,n){const r={},s=new WeakMap;function o(c){const d=c.target;d.index!==null&&t.remove(d.index);for(const v in d.attributes)t.remove(d.attributes[v]);for(const v in d.morphAttributes){const g=d.morphAttributes[v];for(let m=0,f=g.length;m<f;m++)t.remove(g[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(t.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(c,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,e.memory.geometries++),d}function l(c){const d=c.attributes;for(const v in d)t.update(d[v],i.ARRAY_BUFFER);const p=c.morphAttributes;for(const v in p){const g=p[v];for(let m=0,f=g.length;m<f;m++)t.update(g[m],i.ARRAY_BUFFER)}}function u(c){const d=[],p=c.index,v=c.attributes.position;let g=0;if(p!==null){const y=p.array;g=p.version;for(let x=0,_=y.length;x<_;x+=3){const M=y[x+0],R=y[x+1],C=y[x+2];d.push(M,R,R,C,C,M)}}else if(v!==void 0){const y=v.array;g=v.version;for(let x=0,_=y.length/3-1;x<_;x+=3){const M=x+0,R=x+1,C=x+2;d.push(M,R,R,C,C,M)}}else return;const m=new(il(d)?dl:ul)(d,1);m.version=g;const f=s.get(c);f&&t.remove(f),s.set(c,m)}function h(c){const d=s.get(c);if(d){const p=c.index;p!==null&&d.version<p.version&&u(c)}else u(c);return s.get(c)}return{get:a,update:l,getWireframeAttribute:h}}function ff(i,t,e,n){const r=n.isWebGL2;let s;function o(d){s=d}let a,l;function u(d){a=d.type,l=d.bytesPerElement}function h(d,p){i.drawElements(s,p,a,d*l),e.update(p,s,1)}function c(d,p,v){if(v===0)return;let g,m;if(r)g=i,m="drawElementsInstanced";else if(g=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](s,p,a,d*l,v),e.update(p,s,v)}this.setMode=o,this.setIndex=u,this.render=h,this.renderInstances=c}function pf(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function mf(i,t){return i[0]-t[0]}function vf(i,t){return Math.abs(t[1])-Math.abs(i[1])}function gf(i,t,e){const n={},r=new Float32Array(8),s=new WeakMap,o=new Oe,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,h,c){const d=u.morphTargetInfluences;if(t.isWebGL2===!0){const v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=v!==void 0?v.length:0;let m=s.get(h);if(m===void 0||m.count!==g){let k=function(){H.dispose(),s.delete(h),h.removeEventListener("dispose",k)};var p=k;m!==void 0&&m.texture.dispose();const x=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],B=h.morphAttributes.color||[];let S=0;x===!0&&(S=1),_===!0&&(S=2),M===!0&&(S=3);let E=h.attributes.position.count*S,P=1;E>t.maxTextureSize&&(P=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const z=new Float32Array(E*P*4*g),H=new ol(z,E,P,g);H.type=Fn,H.needsUpdate=!0;const D=S*4;for(let tt=0;tt<g;tt++){const F=R[tt],O=C[tt],Z=B[tt],X=E*P*4*tt;for(let w=0;w<F.count;w++){const U=w*D;x===!0&&(o.fromBufferAttribute(F,w),z[X+U+0]=o.x,z[X+U+1]=o.y,z[X+U+2]=o.z,z[X+U+3]=0),_===!0&&(o.fromBufferAttribute(O,w),z[X+U+4]=o.x,z[X+U+5]=o.y,z[X+U+6]=o.z,z[X+U+7]=0),M===!0&&(o.fromBufferAttribute(Z,w),z[X+U+8]=o.x,z[X+U+9]=o.y,z[X+U+10]=o.z,z[X+U+11]=Z.itemSize===4?o.w:1)}}m={count:g,texture:H,size:new he(E,P)},s.set(h,m),h.addEventListener("dispose",k)}let f=0;for(let x=0;x<d.length;x++)f+=d[x];const y=h.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",y),c.getUniforms().setValue(i,"morphTargetInfluences",d),c.getUniforms().setValue(i,"morphTargetsTexture",m.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const v=d===void 0?0:d.length;let g=n[h.id];if(g===void 0||g.length!==v){g=[];for(let _=0;_<v;_++)g[_]=[_,0];n[h.id]=g}for(let _=0;_<v;_++){const M=g[_];M[0]=_,M[1]=d[_]}g.sort(vf);for(let _=0;_<8;_++)_<v&&g[_][1]?(a[_][0]=g[_][0],a[_][1]=g[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(mf);const m=h.morphAttributes.position,f=h.morphAttributes.normal;let y=0;for(let _=0;_<8;_++){const M=a[_],R=M[0],C=M[1];R!==Number.MAX_SAFE_INTEGER&&C?(m&&h.getAttribute("morphTarget"+_)!==m[R]&&h.setAttribute("morphTarget"+_,m[R]),f&&h.getAttribute("morphNormal"+_)!==f[R]&&h.setAttribute("morphNormal"+_,f[R]),r[_]=C,y+=C):(m&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),f&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),r[_]=0)}const x=h.morphTargetsRelative?1:1-y;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function _f(i,t,e,n){let r=new WeakMap;function s(l){const u=n.render.frame,h=l.geometry,c=t.get(l,h);if(r.get(c)!==u&&(t.update(c),r.set(c,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return c}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:s,dispose:o}}const gl=new tn,_l=new ol,yl=new nh,xl=new ml,fa=[],pa=[],ma=new Float32Array(16),va=new Float32Array(9),ga=new Float32Array(4);function zi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=fa[r];if(s===void 0&&(s=new Float32Array(r),fa[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function Ne(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ue(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Zr(i,t){let e=pa[t];e===void 0&&(e=new Int32Array(t),pa[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function yf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function xf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2fv(this.addr,t),Ue(e,t)}}function Sf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;i.uniform3fv(this.addr,t),Ue(e,t)}}function Mf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4fv(this.addr,t),Ue(e,t)}}function Ef(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,n))return;ga.set(n),i.uniformMatrix2fv(this.addr,!1,ga),Ue(e,n)}}function bf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,n))return;va.set(n),i.uniformMatrix3fv(this.addr,!1,va),Ue(e,n)}}function wf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,n))return;ma.set(n),i.uniformMatrix4fv(this.addr,!1,ma),Ue(e,n)}}function Tf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Af(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2iv(this.addr,t),Ue(e,t)}}function Cf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3iv(this.addr,t),Ue(e,t)}}function Rf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4iv(this.addr,t),Ue(e,t)}}function Pf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Lf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2uiv(this.addr,t),Ue(e,t)}}function If(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3uiv(this.addr,t),Ue(e,t)}}function Df(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4uiv(this.addr,t),Ue(e,t)}}function Nf(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2D(t||gl,r)}function Uf(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||yl,r)}function Ff(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||xl,r)}function Bf(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||_l,r)}function Of(i){switch(i){case 5126:return yf;case 35664:return xf;case 35665:return Sf;case 35666:return Mf;case 35674:return Ef;case 35675:return bf;case 35676:return wf;case 5124:case 35670:return Tf;case 35667:case 35671:return Af;case 35668:case 35672:return Cf;case 35669:case 35673:return Rf;case 5125:return Pf;case 36294:return Lf;case 36295:return If;case 36296:return Df;case 35678:case 36198:case 36298:case 36306:case 35682:return Nf;case 35679:case 36299:case 36307:return Uf;case 35680:case 36300:case 36308:case 36293:return Ff;case 36289:case 36303:case 36311:case 36292:return Bf}}function zf(i,t){i.uniform1fv(this.addr,t)}function Vf(i,t){const e=zi(t,this.size,2);i.uniform2fv(this.addr,e)}function Hf(i,t){const e=zi(t,this.size,3);i.uniform3fv(this.addr,e)}function kf(i,t){const e=zi(t,this.size,4);i.uniform4fv(this.addr,e)}function Gf(i,t){const e=zi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Wf(i,t){const e=zi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Xf(i,t){const e=zi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function qf(i,t){i.uniform1iv(this.addr,t)}function Yf(i,t){i.uniform2iv(this.addr,t)}function jf(i,t){i.uniform3iv(this.addr,t)}function Kf(i,t){i.uniform4iv(this.addr,t)}function Zf(i,t){i.uniform1uiv(this.addr,t)}function $f(i,t){i.uniform2uiv(this.addr,t)}function Qf(i,t){i.uniform3uiv(this.addr,t)}function Jf(i,t){i.uniform4uiv(this.addr,t)}function tp(i,t,e){const n=this.cache,r=t.length,s=Zr(e,r);Ne(n,s)||(i.uniform1iv(this.addr,s),Ue(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||gl,s[o])}function ep(i,t,e){const n=this.cache,r=t.length,s=Zr(e,r);Ne(n,s)||(i.uniform1iv(this.addr,s),Ue(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||yl,s[o])}function np(i,t,e){const n=this.cache,r=t.length,s=Zr(e,r);Ne(n,s)||(i.uniform1iv(this.addr,s),Ue(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||xl,s[o])}function ip(i,t,e){const n=this.cache,r=t.length,s=Zr(e,r);Ne(n,s)||(i.uniform1iv(this.addr,s),Ue(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||_l,s[o])}function rp(i){switch(i){case 5126:return zf;case 35664:return Vf;case 35665:return Hf;case 35666:return kf;case 35674:return Gf;case 35675:return Wf;case 35676:return Xf;case 5124:case 35670:return qf;case 35667:case 35671:return Yf;case 35668:case 35672:return jf;case 35669:case 35673:return Kf;case 5125:return Zf;case 36294:return $f;case 36295:return Qf;case 36296:return Jf;case 35678:case 36198:case 36298:case 36306:case 35682:return tp;case 35679:case 36299:case 36307:return ep;case 35680:case 36300:case 36308:case 36293:return np;case 36289:case 36303:case 36311:case 36292:return ip}}class sp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=Of(e.type)}}class op{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=rp(e.type)}}class ap{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const Ts=/(\w+)(\])?(\[|\.)?/g;function _a(i,t){i.seq.push(t),i.map[t.id]=t}function lp(i,t,e){const n=i.name,r=n.length;for(Ts.lastIndex=0;;){const s=Ts.exec(n),o=Ts.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){_a(e,u===void 0?new sp(a,i,t):new op(a,i,t));break}else{let c=e.map[a];c===void 0&&(c=new ap(a),_a(e,c)),e=c}}}class Fr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);lp(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function ya(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const cp=37297;let hp=0;function up(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function dp(i){const t=xe.getPrimaries(xe.workingColorSpace),e=xe.getPrimaries(i);let n;switch(t===e?n="":t===Vr&&e===zr?n="LinearDisplayP3ToLinearSRGB":t===zr&&e===Vr&&(n="LinearSRGBToLinearDisplayP3"),i){case Cn:case jr:return[n,"LinearTransferOETF"];case ze:case Ys:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function xa(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+up(i.getShaderSource(t),o)}else return r}function fp(i,t){const e=dp(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function pp(i,t){let e;switch(t){case hc:e="Linear";break;case uc:e="Reinhard";break;case dc:e="OptimizedCineon";break;case fc:e="ACESFilmic";break;case pc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function mp(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ji).join(`
`)}function vp(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function gp(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ji(i){return i!==""}function Sa(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ma(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const _p=/^[ \t]*#include +<([\w\d./]+)>/gm;function zs(i){return i.replace(_p,xp)}const yp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function xp(i,t){let e=ue[t];if(e===void 0){const n=yp.get(t);if(n!==void 0)e=ue[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return zs(e)}const Sp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ea(i){return i.replace(Sp,Mp)}function Mp(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ba(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Ep(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ja?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ol?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===bn&&(t="SHADOWMAP_TYPE_VSM"),t}function bp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ii:case Di:t="ENVMAP_TYPE_CUBE";break;case Yr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function wp(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Di:t="ENVMAP_MODE_REFRACTION";break}return t}function Tp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ws:t="ENVMAP_BLENDING_MULTIPLY";break;case lc:t="ENVMAP_BLENDING_MIX";break;case cc:t="ENVMAP_BLENDING_ADD";break}return t}function Ap(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Cp(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Ep(e),u=bp(e),h=wp(e),c=Tp(e),d=Ap(e),p=e.isWebGL2?"":mp(e),v=vp(s),g=r.createProgram();let m,f,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(ji).join(`
`),m.length>0&&(m+=`
`),f=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(ji).join(`
`),f.length>0&&(f+=`
`)):(m=[ba(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ji).join(`
`),f=[p,ba(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",e.envMap?"#define "+c:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==On?"#define TONE_MAPPING":"",e.toneMapping!==On?ue.tonemapping_pars_fragment:"",e.toneMapping!==On?pp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,fp("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ji).join(`
`)),o=zs(o),o=Sa(o,e),o=Ma(o,e),a=zs(a),a=Sa(a,e),a=Ma(a,e),o=Ea(o),a=Ea(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===ko?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ko?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=y+m+o,_=y+f+a,M=ya(r,r.VERTEX_SHADER,x),R=ya(r,r.FRAGMENT_SHADER,_);r.attachShader(g,M),r.attachShader(g,R),e.index0AttributeName!==void 0?r.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function C(P){if(i.debug.checkShaderErrors){const z=r.getProgramInfoLog(g).trim(),H=r.getShaderInfoLog(M).trim(),D=r.getShaderInfoLog(R).trim();let k=!0,tt=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,M,R);else{const F=xa(r,M,"vertex"),O=xa(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+z+`
`+F+`
`+O)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(H===""||D==="")&&(tt=!1);tt&&(P.diagnostics={runnable:k,programLog:z,vertexShader:{log:H,prefix:m},fragmentShader:{log:D,prefix:f}})}r.deleteShader(M),r.deleteShader(R),B=new Fr(r,g),S=gp(r,g)}let B;this.getUniforms=function(){return B===void 0&&C(this),B};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(g,cp)),E},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=hp++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=R,this}let Rp=0;class Pp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Lp(t),e.set(t,n)),n}}class Lp{constructor(t){this.id=Rp++,this.code=t,this.usedTimes=0}}function Ip(i,t,e,n,r,s,o){const a=new ll,l=new Pp,u=[],h=r.isWebGL2,c=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return S===0?"uv":`uv${S}`}function m(S,E,P,z,H){const D=z.fog,k=H.geometry,tt=S.isMeshStandardMaterial?z.environment:null,F=(S.isMeshStandardMaterial?e:t).get(S.envMap||tt),O=F&&F.mapping===Yr?F.image.height:null,Z=v[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const X=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,w=X!==void 0?X.length:0;let U=0;k.morphAttributes.position!==void 0&&(U=1),k.morphAttributes.normal!==void 0&&(U=2),k.morphAttributes.color!==void 0&&(U=3);let N,I,A,j;if(Z){const de=vn[Z];N=de.vertexShader,I=de.fragmentShader}else N=S.vertexShader,I=S.fragmentShader,l.update(S),A=l.getVertexShaderID(S),j=l.getFragmentShaderID(S);const at=i.getRenderTarget(),nt=H.isInstancedMesh===!0,K=!!S.map,lt=!!S.matcap,ut=!!F,q=!!S.aoMap,Dt=!!S.lightMap,pt=!!S.bumpMap,it=!!S.normalMap,ht=!!S.displacementMap,ee=!!S.emissiveMap,Ct=!!S.metalnessMap,Xt=!!S.roughnessMap,Et=S.anisotropy>0,se=S.clearcoat>0,ae=S.iridescence>0,L=S.sheen>0,T=S.transmission>0,Q=Et&&!!S.anisotropyMap,gt=se&&!!S.clearcoatMap,ft=se&&!!S.clearcoatNormalMap,St=se&&!!S.clearcoatRoughnessMap,Wt=ae&&!!S.iridescenceMap,At=ae&&!!S.iridescenceThicknessMap,Ft=L&&!!S.sheenColorMap,G=L&&!!S.sheenRoughnessMap,bt=!!S.specularMap,mt=!!S.specularColorMap,ne=!!S.specularIntensityMap,Kt=T&&!!S.transmissionMap,Zt=T&&!!S.thicknessMap,qt=!!S.gradientMap,Bt=!!S.alphaMap,le=S.alphaTest>0,Y=!!S.alphaHash,wt=!!S.extensions,Mt=!!k.attributes.uv1,dt=!!k.attributes.uv2,Tt=!!k.attributes.uv3;let Qt=On;return S.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Qt=i.toneMapping),{isWebGL2:h,shaderID:Z,shaderType:S.type,shaderName:S.name,vertexShader:N,fragmentShader:I,defines:S.defines,customVertexShaderID:A,customFragmentShaderID:j,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,instancing:nt,instancingColor:nt&&H.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Cn,map:K,matcap:lt,envMap:ut,envMapMode:ut&&F.mapping,envMapCubeUVHeight:O,aoMap:q,lightMap:Dt,bumpMap:pt,normalMap:it,displacementMap:d&&ht,emissiveMap:ee,normalMapObjectSpace:it&&S.normalMapType===Ac,normalMapTangentSpace:it&&S.normalMapType===qs,metalnessMap:Ct,roughnessMap:Xt,anisotropy:Et,anisotropyMap:Q,clearcoat:se,clearcoatMap:gt,clearcoatNormalMap:ft,clearcoatRoughnessMap:St,iridescence:ae,iridescenceMap:Wt,iridescenceThicknessMap:At,sheen:L,sheenColorMap:Ft,sheenRoughnessMap:G,specularMap:bt,specularColorMap:mt,specularIntensityMap:ne,transmission:T,transmissionMap:Kt,thicknessMap:Zt,gradientMap:qt,opaque:S.transparent===!1&&S.blending===Pi,alphaMap:Bt,alphaTest:le,alphaHash:Y,combine:S.combine,mapUv:K&&g(S.map.channel),aoMapUv:q&&g(S.aoMap.channel),lightMapUv:Dt&&g(S.lightMap.channel),bumpMapUv:pt&&g(S.bumpMap.channel),normalMapUv:it&&g(S.normalMap.channel),displacementMapUv:ht&&g(S.displacementMap.channel),emissiveMapUv:ee&&g(S.emissiveMap.channel),metalnessMapUv:Ct&&g(S.metalnessMap.channel),roughnessMapUv:Xt&&g(S.roughnessMap.channel),anisotropyMapUv:Q&&g(S.anisotropyMap.channel),clearcoatMapUv:gt&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:ft&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Wt&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:At&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:G&&g(S.sheenRoughnessMap.channel),specularMapUv:bt&&g(S.specularMap.channel),specularColorMapUv:mt&&g(S.specularColorMap.channel),specularIntensityMapUv:ne&&g(S.specularIntensityMap.channel),transmissionMapUv:Kt&&g(S.transmissionMap.channel),thicknessMapUv:Zt&&g(S.thicknessMap.channel),alphaMapUv:Bt&&g(S.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(it||Et),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:Mt,vertexUv2s:dt,vertexUv3s:Tt,pointsUvs:H.isPoints===!0&&!!k.attributes.uv&&(K||Bt),fog:!!D,useFog:S.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:c,skinning:H.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:U,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Qt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:K&&S.map.isVideoTexture===!0&&xe.getTransfer(S.map.colorSpace)===Me,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===wn,flipSided:S.side===Ye,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:wt&&S.extensions.derivatives===!0,extensionFragDepth:wt&&S.extensions.fragDepth===!0,extensionDrawBuffers:wt&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:wt&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function f(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)E.push(P),E.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(y(E,S),x(E,S),E.push(i.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function y(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function x(S,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function _(S){const E=v[S.type];let P;if(E){const z=vn[E];P=mh.clone(z.uniforms)}else P=S.uniforms;return P}function M(S,E){let P;for(let z=0,H=u.length;z<H;z++){const D=u[z];if(D.cacheKey===E){P=D,++P.usedTimes;break}}return P===void 0&&(P=new Cp(i,E,S,s),u.push(P)),P}function R(S){if(--S.usedTimes===0){const E=u.indexOf(S);u[E]=u[u.length-1],u.pop(),S.destroy()}}function C(S){l.remove(S)}function B(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:_,acquireProgram:M,releaseProgram:R,releaseShaderCache:C,programs:u,dispose:B}}function Dp(){let i=new WeakMap;function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function e(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:r}}function Np(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function wa(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ta(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(c,d,p,v,g,m){let f=i[t];return f===void 0?(f={id:c.id,object:c,geometry:d,material:p,groupOrder:v,renderOrder:c.renderOrder,z:g,group:m},i[t]=f):(f.id=c.id,f.object=c,f.geometry=d,f.material=p,f.groupOrder=v,f.renderOrder=c.renderOrder,f.z=g,f.group=m),t++,f}function a(c,d,p,v,g,m){const f=o(c,d,p,v,g,m);p.transmission>0?n.push(f):p.transparent===!0?r.push(f):e.push(f)}function l(c,d,p,v,g,m){const f=o(c,d,p,v,g,m);p.transmission>0?n.unshift(f):p.transparent===!0?r.unshift(f):e.unshift(f)}function u(c,d){e.length>1&&e.sort(c||Np),n.length>1&&n.sort(d||wa),r.length>1&&r.sort(d||wa)}function h(){for(let c=t,d=i.length;c<d;c++){const p=i[c];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:h,sort:u}}function Up(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new Ta,i.set(n,[o])):r>=s.length?(o=new Ta,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Fp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new et,color:new ve};break;case"SpotLight":e={position:new et,direction:new et,color:new ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new et,color:new ve,distance:0,decay:0};break;case"HemisphereLight":e={direction:new et,skyColor:new ve,groundColor:new ve};break;case"RectAreaLight":e={color:new ve,position:new et,halfWidth:new et,halfHeight:new et};break}return i[t.id]=e,e}}}function Bp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Op=0;function zp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Vp(i,t){const e=new Fp,n=Bp(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new et);const s=new et,o=new Ie,a=new Ie;function l(h,c){let d=0,p=0,v=0;for(let z=0;z<9;z++)r.probe[z].set(0,0,0);let g=0,m=0,f=0,y=0,x=0,_=0,M=0,R=0,C=0,B=0,S=0;h.sort(zp);const E=c===!0?Math.PI:1;for(let z=0,H=h.length;z<H;z++){const D=h[z],k=D.color,tt=D.intensity,F=D.distance,O=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=k.r*tt*E,p+=k.g*tt*E,v+=k.b*tt*E;else if(D.isLightProbe){for(let Z=0;Z<9;Z++)r.probe[Z].addScaledVector(D.sh.coefficients[Z],tt);S++}else if(D.isDirectionalLight){const Z=e.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity*E),D.castShadow){const X=D.shadow,w=n.get(D);w.shadowBias=X.bias,w.shadowNormalBias=X.normalBias,w.shadowRadius=X.radius,w.shadowMapSize=X.mapSize,r.directionalShadow[g]=w,r.directionalShadowMap[g]=O,r.directionalShadowMatrix[g]=D.shadow.matrix,_++}r.directional[g]=Z,g++}else if(D.isSpotLight){const Z=e.get(D);Z.position.setFromMatrixPosition(D.matrixWorld),Z.color.copy(k).multiplyScalar(tt*E),Z.distance=F,Z.coneCos=Math.cos(D.angle),Z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Z.decay=D.decay,r.spot[f]=Z;const X=D.shadow;if(D.map&&(r.spotLightMap[C]=D.map,C++,X.updateMatrices(D),D.castShadow&&B++),r.spotLightMatrix[f]=X.matrix,D.castShadow){const w=n.get(D);w.shadowBias=X.bias,w.shadowNormalBias=X.normalBias,w.shadowRadius=X.radius,w.shadowMapSize=X.mapSize,r.spotShadow[f]=w,r.spotShadowMap[f]=O,R++}f++}else if(D.isRectAreaLight){const Z=e.get(D);Z.color.copy(k).multiplyScalar(tt),Z.halfWidth.set(D.width*.5,0,0),Z.halfHeight.set(0,D.height*.5,0),r.rectArea[y]=Z,y++}else if(D.isPointLight){const Z=e.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity*E),Z.distance=D.distance,Z.decay=D.decay,D.castShadow){const X=D.shadow,w=n.get(D);w.shadowBias=X.bias,w.shadowNormalBias=X.normalBias,w.shadowRadius=X.radius,w.shadowMapSize=X.mapSize,w.shadowCameraNear=X.camera.near,w.shadowCameraFar=X.camera.far,r.pointShadow[m]=w,r.pointShadowMap[m]=O,r.pointShadowMatrix[m]=D.shadow.matrix,M++}r.point[m]=Z,m++}else if(D.isHemisphereLight){const Z=e.get(D);Z.skyColor.copy(D.color).multiplyScalar(tt*E),Z.groundColor.copy(D.groundColor).multiplyScalar(tt*E),r.hemi[x]=Z,x++}}y>0&&(t.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Gt.LTC_FLOAT_1,r.rectAreaLTC2=Gt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Gt.LTC_HALF_1,r.rectAreaLTC2=Gt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=v;const P=r.hash;(P.directionalLength!==g||P.pointLength!==m||P.spotLength!==f||P.rectAreaLength!==y||P.hemiLength!==x||P.numDirectionalShadows!==_||P.numPointShadows!==M||P.numSpotShadows!==R||P.numSpotMaps!==C||P.numLightProbes!==S)&&(r.directional.length=g,r.spot.length=f,r.rectArea.length=y,r.point.length=m,r.hemi.length=x,r.directionalShadow.length=_,r.directionalShadowMap.length=_,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=_,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=R+C-B,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=S,P.directionalLength=g,P.pointLength=m,P.spotLength=f,P.rectAreaLength=y,P.hemiLength=x,P.numDirectionalShadows=_,P.numPointShadows=M,P.numSpotShadows=R,P.numSpotMaps=C,P.numLightProbes=S,r.version=Op++)}function u(h,c){let d=0,p=0,v=0,g=0,m=0;const f=c.matrixWorldInverse;for(let y=0,x=h.length;y<x;y++){const _=h[y];if(_.isDirectionalLight){const M=r.directional[d];M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(f),d++}else if(_.isSpotLight){const M=r.spot[v];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(f),M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(f),v++}else if(_.isRectAreaLight){const M=r.rectArea[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(f),a.identity(),o.copy(_.matrixWorld),o.premultiply(f),a.extractRotation(o),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){const M=r.point[p];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(f),p++}else if(_.isHemisphereLight){const M=r.hemi[m];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(f),m++}}}return{setup:l,setupView:u,state:r}}function Aa(i,t){const e=new Vp(i,t),n=[],r=[];function s(){n.length=0,r.length=0}function o(c){n.push(c)}function a(c){r.push(c)}function l(c){e.setup(n,c)}function u(c){e.setupView(n,c)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:e},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function Hp(i,t){let e=new WeakMap;function n(s,o=0){const a=e.get(s);let l;return a===void 0?(l=new Aa(i,t),e.set(s,[l])):o>=a.length?(l=new Aa(i,t),a.push(l)):l=a[o],l}function r(){e=new WeakMap}return{get:n,dispose:r}}class kp extends Oi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Gp extends Oi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Wp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function qp(i,t,e){let n=new Zs;const r=new he,s=new he,o=new Oe,a=new kp({depthPacking:Tc}),l=new Gp,u={},h=e.maxTextureSize,c={[Hn]:Ye,[Ye]:Hn,[wn]:wn},d=new si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:Wp,fragmentShader:Xp}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const v=new Gn;v.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Le(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ja;let f=this.type;this.render=function(M,R,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const B=i.getRenderTarget(),S=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),P=i.state;P.setBlending(Bn),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const z=f!==bn&&this.type===bn,H=f===bn&&this.type!==bn;for(let D=0,k=M.length;D<k;D++){const tt=M[D],F=tt.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const O=F.getFrameExtents();if(r.multiply(O),s.copy(F.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/O.x),r.x=s.x*O.x,F.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/O.y),r.y=s.y*O.y,F.mapSize.y=s.y)),F.map===null||z===!0||H===!0){const X=this.type!==bn?{minFilter:qe,magFilter:qe}:{};F.map!==null&&F.map.dispose(),F.map=new ii(r.x,r.y,X),F.map.texture.name=tt.name+".shadowMap",F.camera.updateProjectionMatrix()}i.setRenderTarget(F.map),i.clear();const Z=F.getViewportCount();for(let X=0;X<Z;X++){const w=F.getViewport(X);o.set(s.x*w.x,s.y*w.y,s.x*w.z,s.y*w.w),P.viewport(o),F.updateMatrices(tt,X),n=F.getFrustum(),_(R,C,F.camera,tt,this.type)}F.isPointLightShadow!==!0&&this.type===bn&&y(F,C),F.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(B,S,E)};function y(M,R){const C=t.update(g);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new ii(r.x,r.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(R,null,C,d,g,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(R,null,C,p,g,null)}function x(M,R,C,B){let S=null;const E=C.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(E!==void 0)S=E;else if(S=C.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const P=S.uuid,z=R.uuid;let H=u[P];H===void 0&&(H={},u[P]=H);let D=H[z];D===void 0&&(D=S.clone(),H[z]=D),S=D}if(S.visible=R.visible,S.wireframe=R.wireframe,B===bn?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:c[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const P=i.properties.get(S);P.light=C}return S}function _(M,R,C,B,S){if(M.visible===!1)return;if(M.layers.test(R.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&S===bn)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,M.matrixWorld);const z=t.update(M),H=M.material;if(Array.isArray(H)){const D=z.groups;for(let k=0,tt=D.length;k<tt;k++){const F=D[k],O=H[F.materialIndex];if(O&&O.visible){const Z=x(M,O,B,S);i.renderBufferDirect(C,null,z,Z,M,F)}}}else if(H.visible){const D=x(M,H,B,S);i.renderBufferDirect(C,null,z,D,M,null)}}const P=M.children;for(let z=0,H=P.length;z<H;z++)_(P[z],R,C,B,S)}}function Yp(i,t,e){const n=e.isWebGL2;function r(){let Y=!1;const wt=new Oe;let Mt=null;const dt=new Oe(0,0,0,0);return{setMask:function(Tt){Mt!==Tt&&!Y&&(i.colorMask(Tt,Tt,Tt,Tt),Mt=Tt)},setLocked:function(Tt){Y=Tt},setClear:function(Tt,Qt,ce,de,ct){ct===!0&&(Tt*=de,Qt*=de,ce*=de),wt.set(Tt,Qt,ce,de),dt.equals(wt)===!1&&(i.clearColor(Tt,Qt,ce,de),dt.copy(wt))},reset:function(){Y=!1,Mt=null,dt.set(-1,0,0,0)}}}function s(){let Y=!1,wt=null,Mt=null,dt=null;return{setTest:function(Tt){Tt?K(i.DEPTH_TEST):lt(i.DEPTH_TEST)},setMask:function(Tt){wt!==Tt&&!Y&&(i.depthMask(Tt),wt=Tt)},setFunc:function(Tt){if(Mt!==Tt){switch(Tt){case ec:i.depthFunc(i.NEVER);break;case nc:i.depthFunc(i.ALWAYS);break;case ic:i.depthFunc(i.LESS);break;case Br:i.depthFunc(i.LEQUAL);break;case rc:i.depthFunc(i.EQUAL);break;case sc:i.depthFunc(i.GEQUAL);break;case oc:i.depthFunc(i.GREATER);break;case ac:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Mt=Tt}},setLocked:function(Tt){Y=Tt},setClear:function(Tt){dt!==Tt&&(i.clearDepth(Tt),dt=Tt)},reset:function(){Y=!1,wt=null,Mt=null,dt=null}}}function o(){let Y=!1,wt=null,Mt=null,dt=null,Tt=null,Qt=null,ce=null,de=null,ct=null;return{setTest:function(ot){Y||(ot?K(i.STENCIL_TEST):lt(i.STENCIL_TEST))},setMask:function(ot){wt!==ot&&!Y&&(i.stencilMask(ot),wt=ot)},setFunc:function(ot,vt,_t){(Mt!==ot||dt!==vt||Tt!==_t)&&(i.stencilFunc(ot,vt,_t),Mt=ot,dt=vt,Tt=_t)},setOp:function(ot,vt,_t){(Qt!==ot||ce!==vt||de!==_t)&&(i.stencilOp(ot,vt,_t),Qt=ot,ce=vt,de=_t)},setLocked:function(ot){Y=ot},setClear:function(ot){ct!==ot&&(i.clearStencil(ot),ct=ot)},reset:function(){Y=!1,wt=null,Mt=null,dt=null,Tt=null,Qt=null,ce=null,de=null,ct=null}}}const a=new r,l=new s,u=new o,h=new WeakMap,c=new WeakMap;let d={},p={},v=new WeakMap,g=[],m=null,f=!1,y=null,x=null,_=null,M=null,R=null,C=null,B=null,S=new ve(0,0,0),E=0,P=!1,z=null,H=null,D=null,k=null,tt=null;const F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,Z=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(X)[1]),O=Z>=1):X.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),O=Z>=2);let w=null,U={};const N=i.getParameter(i.SCISSOR_BOX),I=i.getParameter(i.VIEWPORT),A=new Oe().fromArray(N),j=new Oe().fromArray(I);function at(Y,wt,Mt,dt){const Tt=new Uint8Array(4),Qt=i.createTexture();i.bindTexture(Y,Qt),i.texParameteri(Y,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Y,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ce=0;ce<Mt;ce++)n&&(Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY)?i.texImage3D(wt,0,i.RGBA,1,1,dt,0,i.RGBA,i.UNSIGNED_BYTE,Tt):i.texImage2D(wt+ce,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Tt);return Qt}const nt={};nt[i.TEXTURE_2D]=at(i.TEXTURE_2D,i.TEXTURE_2D,1),nt[i.TEXTURE_CUBE_MAP]=at(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(nt[i.TEXTURE_2D_ARRAY]=at(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),nt[i.TEXTURE_3D]=at(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),K(i.DEPTH_TEST),l.setFunc(Br),Ct(!1),Xt(ao),K(i.CULL_FACE),ht(Bn);function K(Y){d[Y]!==!0&&(i.enable(Y),d[Y]=!0)}function lt(Y){d[Y]!==!1&&(i.disable(Y),d[Y]=!1)}function ut(Y,wt){return p[Y]!==wt?(i.bindFramebuffer(Y,wt),p[Y]=wt,n&&(Y===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=wt),Y===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=wt)),!0):!1}function q(Y,wt){let Mt=g,dt=!1;if(Y)if(Mt=v.get(wt),Mt===void 0&&(Mt=[],v.set(wt,Mt)),Y.isWebGLMultipleRenderTargets){const Tt=Y.texture;if(Mt.length!==Tt.length||Mt[0]!==i.COLOR_ATTACHMENT0){for(let Qt=0,ce=Tt.length;Qt<ce;Qt++)Mt[Qt]=i.COLOR_ATTACHMENT0+Qt;Mt.length=Tt.length,dt=!0}}else Mt[0]!==i.COLOR_ATTACHMENT0&&(Mt[0]=i.COLOR_ATTACHMENT0,dt=!0);else Mt[0]!==i.BACK&&(Mt[0]=i.BACK,dt=!0);dt&&(e.isWebGL2?i.drawBuffers(Mt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Mt))}function Dt(Y){return m!==Y?(i.useProgram(Y),m=Y,!0):!1}const pt={[Qn]:i.FUNC_ADD,[Vl]:i.FUNC_SUBTRACT,[Hl]:i.FUNC_REVERSE_SUBTRACT};if(n)pt[uo]=i.MIN,pt[fo]=i.MAX;else{const Y=t.get("EXT_blend_minmax");Y!==null&&(pt[uo]=Y.MIN_EXT,pt[fo]=Y.MAX_EXT)}const it={[kl]:i.ZERO,[Gl]:i.ONE,[Wl]:i.SRC_COLOR,[Ls]:i.SRC_ALPHA,[Zl]:i.SRC_ALPHA_SATURATE,[jl]:i.DST_COLOR,[ql]:i.DST_ALPHA,[Xl]:i.ONE_MINUS_SRC_COLOR,[Is]:i.ONE_MINUS_SRC_ALPHA,[Kl]:i.ONE_MINUS_DST_COLOR,[Yl]:i.ONE_MINUS_DST_ALPHA,[$l]:i.CONSTANT_COLOR,[Ql]:i.ONE_MINUS_CONSTANT_COLOR,[Jl]:i.CONSTANT_ALPHA,[tc]:i.ONE_MINUS_CONSTANT_ALPHA};function ht(Y,wt,Mt,dt,Tt,Qt,ce,de,ct,ot){if(Y===Bn){f===!0&&(lt(i.BLEND),f=!1);return}if(f===!1&&(K(i.BLEND),f=!0),Y!==zl){if(Y!==y||ot!==P){if((x!==Qn||R!==Qn)&&(i.blendEquation(i.FUNC_ADD),x=Qn,R=Qn),ot)switch(Y){case Pi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case lo:i.blendFunc(i.ONE,i.ONE);break;case co:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ho:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case Pi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case lo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case co:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ho:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}_=null,M=null,C=null,B=null,S.set(0,0,0),E=0,y=Y,P=ot}return}Tt=Tt||wt,Qt=Qt||Mt,ce=ce||dt,(wt!==x||Tt!==R)&&(i.blendEquationSeparate(pt[wt],pt[Tt]),x=wt,R=Tt),(Mt!==_||dt!==M||Qt!==C||ce!==B)&&(i.blendFuncSeparate(it[Mt],it[dt],it[Qt],it[ce]),_=Mt,M=dt,C=Qt,B=ce),(de.equals(S)===!1||ct!==E)&&(i.blendColor(de.r,de.g,de.b,ct),S.copy(de),E=ct),y=Y,P=!1}function ee(Y,wt){Y.side===wn?lt(i.CULL_FACE):K(i.CULL_FACE);let Mt=Y.side===Ye;wt&&(Mt=!Mt),Ct(Mt),Y.blending===Pi&&Y.transparent===!1?ht(Bn):ht(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),l.setFunc(Y.depthFunc),l.setTest(Y.depthTest),l.setMask(Y.depthWrite),a.setMask(Y.colorWrite);const dt=Y.stencilWrite;u.setTest(dt),dt&&(u.setMask(Y.stencilWriteMask),u.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),u.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),se(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ct(Y){z!==Y&&(Y?i.frontFace(i.CW):i.frontFace(i.CCW),z=Y)}function Xt(Y){Y!==Fl?(K(i.CULL_FACE),Y!==H&&(Y===ao?i.cullFace(i.BACK):Y===Bl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):lt(i.CULL_FACE),H=Y}function Et(Y){Y!==D&&(O&&i.lineWidth(Y),D=Y)}function se(Y,wt,Mt){Y?(K(i.POLYGON_OFFSET_FILL),(k!==wt||tt!==Mt)&&(i.polygonOffset(wt,Mt),k=wt,tt=Mt)):lt(i.POLYGON_OFFSET_FILL)}function ae(Y){Y?K(i.SCISSOR_TEST):lt(i.SCISSOR_TEST)}function L(Y){Y===void 0&&(Y=i.TEXTURE0+F-1),w!==Y&&(i.activeTexture(Y),w=Y)}function T(Y,wt,Mt){Mt===void 0&&(w===null?Mt=i.TEXTURE0+F-1:Mt=w);let dt=U[Mt];dt===void 0&&(dt={type:void 0,texture:void 0},U[Mt]=dt),(dt.type!==Y||dt.texture!==wt)&&(w!==Mt&&(i.activeTexture(Mt),w=Mt),i.bindTexture(Y,wt||nt[Y]),dt.type=Y,dt.texture=wt)}function Q(){const Y=U[w];Y!==void 0&&Y.type!==void 0&&(i.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function gt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ft(){try{i.compressedTexImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function St(){try{i.texSubImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Wt(){try{i.texSubImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function At(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ft(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function G(){try{i.texStorage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function bt(){try{i.texStorage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function mt(){try{i.texImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ne(){try{i.texImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Kt(Y){A.equals(Y)===!1&&(i.scissor(Y.x,Y.y,Y.z,Y.w),A.copy(Y))}function Zt(Y){j.equals(Y)===!1&&(i.viewport(Y.x,Y.y,Y.z,Y.w),j.copy(Y))}function qt(Y,wt){let Mt=c.get(wt);Mt===void 0&&(Mt=new WeakMap,c.set(wt,Mt));let dt=Mt.get(Y);dt===void 0&&(dt=i.getUniformBlockIndex(wt,Y.name),Mt.set(Y,dt))}function Bt(Y,wt){const dt=c.get(wt).get(Y);h.get(wt)!==dt&&(i.uniformBlockBinding(wt,dt,Y.__bindingPointIndex),h.set(wt,dt))}function le(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},w=null,U={},p={},v=new WeakMap,g=[],m=null,f=!1,y=null,x=null,_=null,M=null,R=null,C=null,B=null,S=new ve(0,0,0),E=0,P=!1,z=null,H=null,D=null,k=null,tt=null,A.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:K,disable:lt,bindFramebuffer:ut,drawBuffers:q,useProgram:Dt,setBlending:ht,setMaterial:ee,setFlipSided:Ct,setCullFace:Xt,setLineWidth:Et,setPolygonOffset:se,setScissorTest:ae,activeTexture:L,bindTexture:T,unbindTexture:Q,compressedTexImage2D:gt,compressedTexImage3D:ft,texImage2D:mt,texImage3D:ne,updateUBOMapping:qt,uniformBlockBinding:Bt,texStorage2D:G,texStorage3D:bt,texSubImage2D:St,texSubImage3D:Wt,compressedTexSubImage2D:At,compressedTexSubImage3D:Ft,scissor:Kt,viewport:Zt,reset:le}}function jp(i,t,e,n,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,h=r.maxTextureSize,c=r.maxSamples,d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let g;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(L,T){return f?new OffscreenCanvas(L,T):Gr("canvas")}function x(L,T,Q,gt){let ft=1;if((L.width>gt||L.height>gt)&&(ft=gt/Math.max(L.width,L.height)),ft<1||T===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const St=T?kr:Math.floor,Wt=St(ft*L.width),At=St(ft*L.height);g===void 0&&(g=y(Wt,At));const Ft=Q?y(Wt,At):g;return Ft.width=Wt,Ft.height=At,Ft.getContext("2d").drawImage(L,0,0,Wt,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+Wt+"x"+At+")."),Ft}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function _(L){return Os(L.width)&&Os(L.height)}function M(L){return a?!1:L.wrapS!==un||L.wrapT!==un||L.minFilter!==qe&&L.minFilter!==nn}function R(L,T){return L.generateMipmaps&&T&&L.minFilter!==qe&&L.minFilter!==nn}function C(L){i.generateMipmap(L)}function B(L,T,Q,gt,ft=!1){if(a===!1)return T;if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let St=T;if(T===i.RED&&(Q===i.FLOAT&&(St=i.R32F),Q===i.HALF_FLOAT&&(St=i.R16F),Q===i.UNSIGNED_BYTE&&(St=i.R8)),T===i.RED_INTEGER&&(Q===i.UNSIGNED_BYTE&&(St=i.R8UI),Q===i.UNSIGNED_SHORT&&(St=i.R16UI),Q===i.UNSIGNED_INT&&(St=i.R32UI),Q===i.BYTE&&(St=i.R8I),Q===i.SHORT&&(St=i.R16I),Q===i.INT&&(St=i.R32I)),T===i.RG&&(Q===i.FLOAT&&(St=i.RG32F),Q===i.HALF_FLOAT&&(St=i.RG16F),Q===i.UNSIGNED_BYTE&&(St=i.RG8)),T===i.RGBA){const Wt=ft?Or:xe.getTransfer(gt);Q===i.FLOAT&&(St=i.RGBA32F),Q===i.HALF_FLOAT&&(St=i.RGBA16F),Q===i.UNSIGNED_BYTE&&(St=Wt===Me?i.SRGB8_ALPHA8:i.RGBA8),Q===i.UNSIGNED_SHORT_4_4_4_4&&(St=i.RGBA4),Q===i.UNSIGNED_SHORT_5_5_5_1&&(St=i.RGB5_A1)}return(St===i.R16F||St===i.R32F||St===i.RG16F||St===i.RG32F||St===i.RGBA16F||St===i.RGBA32F)&&t.get("EXT_color_buffer_float"),St}function S(L,T,Q){return R(L,Q)===!0||L.isFramebufferTexture&&L.minFilter!==qe&&L.minFilter!==nn?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function E(L){return L===qe||L===po||L===Jr?i.NEAREST:i.LINEAR}function P(L){const T=L.target;T.removeEventListener("dispose",P),H(T),T.isVideoTexture&&v.delete(T)}function z(L){const T=L.target;T.removeEventListener("dispose",z),k(T)}function H(L){const T=n.get(L);if(T.__webglInit===void 0)return;const Q=L.source,gt=m.get(Q);if(gt){const ft=gt[T.__cacheKey];ft.usedTimes--,ft.usedTimes===0&&D(L),Object.keys(gt).length===0&&m.delete(Q)}n.remove(L)}function D(L){const T=n.get(L);i.deleteTexture(T.__webglTexture);const Q=L.source,gt=m.get(Q);delete gt[T.__cacheKey],o.memory.textures--}function k(L){const T=L.texture,Q=n.get(L),gt=n.get(T);if(gt.__webglTexture!==void 0&&(i.deleteTexture(gt.__webglTexture),o.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(Q.__webglFramebuffer[ft]))for(let St=0;St<Q.__webglFramebuffer[ft].length;St++)i.deleteFramebuffer(Q.__webglFramebuffer[ft][St]);else i.deleteFramebuffer(Q.__webglFramebuffer[ft]);Q.__webglDepthbuffer&&i.deleteRenderbuffer(Q.__webglDepthbuffer[ft])}else{if(Array.isArray(Q.__webglFramebuffer))for(let ft=0;ft<Q.__webglFramebuffer.length;ft++)i.deleteFramebuffer(Q.__webglFramebuffer[ft]);else i.deleteFramebuffer(Q.__webglFramebuffer);if(Q.__webglDepthbuffer&&i.deleteRenderbuffer(Q.__webglDepthbuffer),Q.__webglMultisampledFramebuffer&&i.deleteFramebuffer(Q.__webglMultisampledFramebuffer),Q.__webglColorRenderbuffer)for(let ft=0;ft<Q.__webglColorRenderbuffer.length;ft++)Q.__webglColorRenderbuffer[ft]&&i.deleteRenderbuffer(Q.__webglColorRenderbuffer[ft]);Q.__webglDepthRenderbuffer&&i.deleteRenderbuffer(Q.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let ft=0,St=T.length;ft<St;ft++){const Wt=n.get(T[ft]);Wt.__webglTexture&&(i.deleteTexture(Wt.__webglTexture),o.memory.textures--),n.remove(T[ft])}n.remove(T),n.remove(L)}let tt=0;function F(){tt=0}function O(){const L=tt;return L>=l&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l),tt+=1,L}function Z(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function X(L,T){const Q=n.get(L);if(L.isVideoTexture&&se(L),L.isRenderTargetTexture===!1&&L.version>0&&Q.__version!==L.version){const gt=L.image;if(gt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(Q,L,T);return}}e.bindTexture(i.TEXTURE_2D,Q.__webglTexture,i.TEXTURE0+T)}function w(L,T){const Q=n.get(L);if(L.version>0&&Q.__version!==L.version){K(Q,L,T);return}e.bindTexture(i.TEXTURE_2D_ARRAY,Q.__webglTexture,i.TEXTURE0+T)}function U(L,T){const Q=n.get(L);if(L.version>0&&Q.__version!==L.version){K(Q,L,T);return}e.bindTexture(i.TEXTURE_3D,Q.__webglTexture,i.TEXTURE0+T)}function N(L,T){const Q=n.get(L);if(L.version>0&&Q.__version!==L.version){lt(Q,L,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture,i.TEXTURE0+T)}const I={[Us]:i.REPEAT,[un]:i.CLAMP_TO_EDGE,[Fs]:i.MIRRORED_REPEAT},A={[qe]:i.NEAREST,[po]:i.NEAREST_MIPMAP_NEAREST,[Jr]:i.NEAREST_MIPMAP_LINEAR,[nn]:i.LINEAR,[mc]:i.LINEAR_MIPMAP_NEAREST,[er]:i.LINEAR_MIPMAP_LINEAR},j={[Cc]:i.NEVER,[Uc]:i.ALWAYS,[Rc]:i.LESS,[Lc]:i.LEQUAL,[Pc]:i.EQUAL,[Nc]:i.GEQUAL,[Ic]:i.GREATER,[Dc]:i.NOTEQUAL};function at(L,T,Q){if(Q?(i.texParameteri(L,i.TEXTURE_WRAP_S,I[T.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,I[T.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,I[T.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,A[T.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,A[T.minFilter])):(i.texParameteri(L,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(L,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(T.wrapS!==un||T.wrapT!==un)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(L,i.TEXTURE_MAG_FILTER,E(T.magFilter)),i.texParameteri(L,i.TEXTURE_MIN_FILTER,E(T.minFilter)),T.minFilter!==qe&&T.minFilter!==nn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,j[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const gt=t.get("EXT_texture_filter_anisotropic");if(T.magFilter===qe||T.minFilter!==Jr&&T.minFilter!==er||T.type===Fn&&t.has("OES_texture_float_linear")===!1||a===!1&&T.type===nr&&t.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(i.texParameterf(L,gt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function nt(L,T){let Q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",P));const gt=T.source;let ft=m.get(gt);ft===void 0&&(ft={},m.set(gt,ft));const St=Z(T);if(St!==L.__cacheKey){ft[St]===void 0&&(ft[St]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Q=!0),ft[St].usedTimes++;const Wt=ft[L.__cacheKey];Wt!==void 0&&(ft[L.__cacheKey].usedTimes--,Wt.usedTimes===0&&D(T)),L.__cacheKey=St,L.__webglTexture=ft[St].texture}return Q}function K(L,T,Q){let gt=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(gt=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(gt=i.TEXTURE_3D);const ft=nt(L,T),St=T.source;e.bindTexture(gt,L.__webglTexture,i.TEXTURE0+Q);const Wt=n.get(St);if(St.version!==Wt.__version||ft===!0){e.activeTexture(i.TEXTURE0+Q);const At=xe.getPrimaries(xe.workingColorSpace),Ft=T.colorSpace===rn?null:xe.getPrimaries(T.colorSpace),G=T.colorSpace===rn||At===Ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,G);const bt=M(T)&&_(T.image)===!1;let mt=x(T.image,bt,!1,h);mt=ae(T,mt);const ne=_(mt)||a,Kt=s.convert(T.format,T.colorSpace);let Zt=s.convert(T.type),qt=B(T.internalFormat,Kt,Zt,T.colorSpace,T.isVideoTexture);at(gt,T,ne);let Bt;const le=T.mipmaps,Y=a&&T.isVideoTexture!==!0,wt=Wt.__version===void 0||ft===!0,Mt=S(T,mt,ne);if(T.isDepthTexture)qt=i.DEPTH_COMPONENT,a?T.type===Fn?qt=i.DEPTH_COMPONENT32F:T.type===Un?qt=i.DEPTH_COMPONENT24:T.type===ti?qt=i.DEPTH24_STENCIL8:qt=i.DEPTH_COMPONENT16:T.type===Fn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===ei&&qt===i.DEPTH_COMPONENT&&T.type!==Xs&&T.type!==Un&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Un,Zt=s.convert(T.type)),T.format===Ni&&qt===i.DEPTH_COMPONENT&&(qt=i.DEPTH_STENCIL,T.type!==ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=ti,Zt=s.convert(T.type))),wt&&(Y?e.texStorage2D(i.TEXTURE_2D,1,qt,mt.width,mt.height):e.texImage2D(i.TEXTURE_2D,0,qt,mt.width,mt.height,0,Kt,Zt,null));else if(T.isDataTexture)if(le.length>0&&ne){Y&&wt&&e.texStorage2D(i.TEXTURE_2D,Mt,qt,le[0].width,le[0].height);for(let dt=0,Tt=le.length;dt<Tt;dt++)Bt=le[dt],Y?e.texSubImage2D(i.TEXTURE_2D,dt,0,0,Bt.width,Bt.height,Kt,Zt,Bt.data):e.texImage2D(i.TEXTURE_2D,dt,qt,Bt.width,Bt.height,0,Kt,Zt,Bt.data);T.generateMipmaps=!1}else Y?(wt&&e.texStorage2D(i.TEXTURE_2D,Mt,qt,mt.width,mt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt.width,mt.height,Kt,Zt,mt.data)):e.texImage2D(i.TEXTURE_2D,0,qt,mt.width,mt.height,0,Kt,Zt,mt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Y&&wt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,qt,le[0].width,le[0].height,mt.depth);for(let dt=0,Tt=le.length;dt<Tt;dt++)Bt=le[dt],T.format!==dn?Kt!==null?Y?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,Bt.width,Bt.height,mt.depth,Kt,Bt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,dt,qt,Bt.width,Bt.height,mt.depth,0,Bt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Y?e.texSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,Bt.width,Bt.height,mt.depth,Kt,Zt,Bt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,dt,qt,Bt.width,Bt.height,mt.depth,0,Kt,Zt,Bt.data)}else{Y&&wt&&e.texStorage2D(i.TEXTURE_2D,Mt,qt,le[0].width,le[0].height);for(let dt=0,Tt=le.length;dt<Tt;dt++)Bt=le[dt],T.format!==dn?Kt!==null?Y?e.compressedTexSubImage2D(i.TEXTURE_2D,dt,0,0,Bt.width,Bt.height,Kt,Bt.data):e.compressedTexImage2D(i.TEXTURE_2D,dt,qt,Bt.width,Bt.height,0,Bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Y?e.texSubImage2D(i.TEXTURE_2D,dt,0,0,Bt.width,Bt.height,Kt,Zt,Bt.data):e.texImage2D(i.TEXTURE_2D,dt,qt,Bt.width,Bt.height,0,Kt,Zt,Bt.data)}else if(T.isDataArrayTexture)Y?(wt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,qt,mt.width,mt.height,mt.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,mt.width,mt.height,mt.depth,Kt,Zt,mt.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,qt,mt.width,mt.height,mt.depth,0,Kt,Zt,mt.data);else if(T.isData3DTexture)Y?(wt&&e.texStorage3D(i.TEXTURE_3D,Mt,qt,mt.width,mt.height,mt.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,mt.width,mt.height,mt.depth,Kt,Zt,mt.data)):e.texImage3D(i.TEXTURE_3D,0,qt,mt.width,mt.height,mt.depth,0,Kt,Zt,mt.data);else if(T.isFramebufferTexture){if(wt)if(Y)e.texStorage2D(i.TEXTURE_2D,Mt,qt,mt.width,mt.height);else{let dt=mt.width,Tt=mt.height;for(let Qt=0;Qt<Mt;Qt++)e.texImage2D(i.TEXTURE_2D,Qt,qt,dt,Tt,0,Kt,Zt,null),dt>>=1,Tt>>=1}}else if(le.length>0&&ne){Y&&wt&&e.texStorage2D(i.TEXTURE_2D,Mt,qt,le[0].width,le[0].height);for(let dt=0,Tt=le.length;dt<Tt;dt++)Bt=le[dt],Y?e.texSubImage2D(i.TEXTURE_2D,dt,0,0,Kt,Zt,Bt):e.texImage2D(i.TEXTURE_2D,dt,qt,Kt,Zt,Bt);T.generateMipmaps=!1}else Y?(wt&&e.texStorage2D(i.TEXTURE_2D,Mt,qt,mt.width,mt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Kt,Zt,mt)):e.texImage2D(i.TEXTURE_2D,0,qt,Kt,Zt,mt);R(T,ne)&&C(gt),Wt.__version=St.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function lt(L,T,Q){if(T.image.length!==6)return;const gt=nt(L,T),ft=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+Q);const St=n.get(ft);if(ft.version!==St.__version||gt===!0){e.activeTexture(i.TEXTURE0+Q);const Wt=xe.getPrimaries(xe.workingColorSpace),At=T.colorSpace===rn?null:xe.getPrimaries(T.colorSpace),Ft=T.colorSpace===rn||Wt===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);const G=T.isCompressedTexture||T.image[0].isCompressedTexture,bt=T.image[0]&&T.image[0].isDataTexture,mt=[];for(let dt=0;dt<6;dt++)!G&&!bt?mt[dt]=x(T.image[dt],!1,!0,u):mt[dt]=bt?T.image[dt].image:T.image[dt],mt[dt]=ae(T,mt[dt]);const ne=mt[0],Kt=_(ne)||a,Zt=s.convert(T.format,T.colorSpace),qt=s.convert(T.type),Bt=B(T.internalFormat,Zt,qt,T.colorSpace),le=a&&T.isVideoTexture!==!0,Y=St.__version===void 0||gt===!0;let wt=S(T,ne,Kt);at(i.TEXTURE_CUBE_MAP,T,Kt);let Mt;if(G){le&&Y&&e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,Bt,ne.width,ne.height);for(let dt=0;dt<6;dt++){Mt=mt[dt].mipmaps;for(let Tt=0;Tt<Mt.length;Tt++){const Qt=Mt[Tt];T.format!==dn?Zt!==null?le?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Tt,0,0,Qt.width,Qt.height,Zt,Qt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Tt,Bt,Qt.width,Qt.height,0,Qt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):le?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Tt,0,0,Qt.width,Qt.height,Zt,qt,Qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Tt,Bt,Qt.width,Qt.height,0,Zt,qt,Qt.data)}}}else{Mt=T.mipmaps,le&&Y&&(Mt.length>0&&wt++,e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,Bt,mt[0].width,mt[0].height));for(let dt=0;dt<6;dt++)if(bt){le?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,mt[dt].width,mt[dt].height,Zt,qt,mt[dt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,Bt,mt[dt].width,mt[dt].height,0,Zt,qt,mt[dt].data);for(let Tt=0;Tt<Mt.length;Tt++){const ce=Mt[Tt].image[dt].image;le?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Tt+1,0,0,ce.width,ce.height,Zt,qt,ce.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Tt+1,Bt,ce.width,ce.height,0,Zt,qt,ce.data)}}else{le?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Zt,qt,mt[dt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,Bt,Zt,qt,mt[dt]);for(let Tt=0;Tt<Mt.length;Tt++){const Qt=Mt[Tt];le?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Tt+1,0,0,Zt,qt,Qt.image[dt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Tt+1,Bt,Zt,qt,Qt.image[dt])}}}R(T,Kt)&&C(i.TEXTURE_CUBE_MAP),St.__version=ft.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function ut(L,T,Q,gt,ft,St){const Wt=s.convert(Q.format,Q.colorSpace),At=s.convert(Q.type),Ft=B(Q.internalFormat,Wt,At,Q.colorSpace);if(!n.get(T).__hasExternalTextures){const bt=Math.max(1,T.width>>St),mt=Math.max(1,T.height>>St);ft===i.TEXTURE_3D||ft===i.TEXTURE_2D_ARRAY?e.texImage3D(ft,St,Ft,bt,mt,T.depth,0,Wt,At,null):e.texImage2D(ft,St,Ft,bt,mt,0,Wt,At,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),Et(T)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,gt,ft,n.get(Q).__webglTexture,0,Xt(T)):(ft===i.TEXTURE_2D||ft>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ft<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,gt,ft,n.get(Q).__webglTexture,St),e.bindFramebuffer(i.FRAMEBUFFER,null)}function q(L,T,Q){if(i.bindRenderbuffer(i.RENDERBUFFER,L),T.depthBuffer&&!T.stencilBuffer){let gt=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(Q||Et(T)){const ft=T.depthTexture;ft&&ft.isDepthTexture&&(ft.type===Fn?gt=i.DEPTH_COMPONENT32F:ft.type===Un&&(gt=i.DEPTH_COMPONENT24));const St=Xt(T);Et(T)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,St,gt,T.width,T.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,St,gt,T.width,T.height)}else i.renderbufferStorage(i.RENDERBUFFER,gt,T.width,T.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,L)}else if(T.depthBuffer&&T.stencilBuffer){const gt=Xt(T);Q&&Et(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,i.DEPTH24_STENCIL8,T.width,T.height):Et(T)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt,i.DEPTH24_STENCIL8,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,L)}else{const gt=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ft=0;ft<gt.length;ft++){const St=gt[ft],Wt=s.convert(St.format,St.colorSpace),At=s.convert(St.type),Ft=B(St.internalFormat,Wt,At,St.colorSpace),G=Xt(T);Q&&Et(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,G,Ft,T.width,T.height):Et(T)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,G,Ft,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Ft,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Dt(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),X(T.depthTexture,0);const gt=n.get(T.depthTexture).__webglTexture,ft=Xt(T);if(T.depthTexture.format===ei)Et(T)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,gt,0,ft):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,gt,0);else if(T.depthTexture.format===Ni)Et(T)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,gt,0,ft):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,gt,0);else throw new Error("Unknown depthTexture format")}function pt(L){const T=n.get(L),Q=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");Dt(T.__webglFramebuffer,L)}else if(Q){T.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[gt]),T.__webglDepthbuffer[gt]=i.createRenderbuffer(),q(T.__webglDepthbuffer[gt],L,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=i.createRenderbuffer(),q(T.__webglDepthbuffer,L,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function it(L,T,Q){const gt=n.get(L);T!==void 0&&ut(gt.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Q!==void 0&&pt(L)}function ht(L){const T=L.texture,Q=n.get(L),gt=n.get(T);L.addEventListener("dispose",z),L.isWebGLMultipleRenderTargets!==!0&&(gt.__webglTexture===void 0&&(gt.__webglTexture=i.createTexture()),gt.__version=T.version,o.memory.textures++);const ft=L.isWebGLCubeRenderTarget===!0,St=L.isWebGLMultipleRenderTargets===!0,Wt=_(L)||a;if(ft){Q.__webglFramebuffer=[];for(let At=0;At<6;At++)if(a&&T.mipmaps&&T.mipmaps.length>0){Q.__webglFramebuffer[At]=[];for(let Ft=0;Ft<T.mipmaps.length;Ft++)Q.__webglFramebuffer[At][Ft]=i.createFramebuffer()}else Q.__webglFramebuffer[At]=i.createFramebuffer()}else{if(a&&T.mipmaps&&T.mipmaps.length>0){Q.__webglFramebuffer=[];for(let At=0;At<T.mipmaps.length;At++)Q.__webglFramebuffer[At]=i.createFramebuffer()}else Q.__webglFramebuffer=i.createFramebuffer();if(St)if(r.drawBuffers){const At=L.texture;for(let Ft=0,G=At.length;Ft<G;Ft++){const bt=n.get(At[Ft]);bt.__webglTexture===void 0&&(bt.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&L.samples>0&&Et(L)===!1){const At=St?T:[T];Q.__webglMultisampledFramebuffer=i.createFramebuffer(),Q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Ft=0;Ft<At.length;Ft++){const G=At[Ft];Q.__webglColorRenderbuffer[Ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Q.__webglColorRenderbuffer[Ft]);const bt=s.convert(G.format,G.colorSpace),mt=s.convert(G.type),ne=B(G.internalFormat,bt,mt,G.colorSpace,L.isXRRenderTarget===!0),Kt=Xt(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Kt,ne,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.RENDERBUFFER,Q.__webglColorRenderbuffer[Ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(Q.__webglDepthRenderbuffer=i.createRenderbuffer(),q(Q.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ft){e.bindTexture(i.TEXTURE_CUBE_MAP,gt.__webglTexture),at(i.TEXTURE_CUBE_MAP,T,Wt);for(let At=0;At<6;At++)if(a&&T.mipmaps&&T.mipmaps.length>0)for(let Ft=0;Ft<T.mipmaps.length;Ft++)ut(Q.__webglFramebuffer[At][Ft],L,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+At,Ft);else ut(Q.__webglFramebuffer[At],L,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);R(T,Wt)&&C(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){const At=L.texture;for(let Ft=0,G=At.length;Ft<G;Ft++){const bt=At[Ft],mt=n.get(bt);e.bindTexture(i.TEXTURE_2D,mt.__webglTexture),at(i.TEXTURE_2D,bt,Wt),ut(Q.__webglFramebuffer,L,bt,i.COLOR_ATTACHMENT0+Ft,i.TEXTURE_2D,0),R(bt,Wt)&&C(i.TEXTURE_2D)}e.unbindTexture()}else{let At=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(a?At=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(At,gt.__webglTexture),at(At,T,Wt),a&&T.mipmaps&&T.mipmaps.length>0)for(let Ft=0;Ft<T.mipmaps.length;Ft++)ut(Q.__webglFramebuffer[Ft],L,T,i.COLOR_ATTACHMENT0,At,Ft);else ut(Q.__webglFramebuffer,L,T,i.COLOR_ATTACHMENT0,At,0);R(T,Wt)&&C(At),e.unbindTexture()}L.depthBuffer&&pt(L)}function ee(L){const T=_(L)||a,Q=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let gt=0,ft=Q.length;gt<ft;gt++){const St=Q[gt];if(R(St,T)){const Wt=L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,At=n.get(St).__webglTexture;e.bindTexture(Wt,At),C(Wt),e.unbindTexture()}}}function Ct(L){if(a&&L.samples>0&&Et(L)===!1){const T=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],Q=L.width,gt=L.height;let ft=i.COLOR_BUFFER_BIT;const St=[],Wt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(L),Ft=L.isWebGLMultipleRenderTargets===!0;if(Ft)for(let G=0;G<T.length;G++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+G,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+G,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let G=0;G<T.length;G++){St.push(i.COLOR_ATTACHMENT0+G),L.depthBuffer&&St.push(Wt);const bt=At.__ignoreDepthValues!==void 0?At.__ignoreDepthValues:!1;if(bt===!1&&(L.depthBuffer&&(ft|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&(ft|=i.STENCIL_BUFFER_BIT)),Ft&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[G]),bt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Wt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Wt])),Ft){const mt=n.get(T[G]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,mt,0)}i.blitFramebuffer(0,0,Q,gt,0,0,Q,gt,ft,i.NEAREST),p&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,St)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ft)for(let G=0;G<T.length;G++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+G,i.RENDERBUFFER,At.__webglColorRenderbuffer[G]);const bt=n.get(T[G]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+G,i.TEXTURE_2D,bt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}}function Xt(L){return Math.min(c,L.samples)}function Et(L){const T=n.get(L);return a&&L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function se(L){const T=o.render.frame;v.get(L)!==T&&(v.set(L,T),L.update())}function ae(L,T){const Q=L.colorSpace,gt=L.format,ft=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===Bs||Q!==Cn&&Q!==rn&&(xe.getTransfer(Q)===Me?a===!1?t.has("EXT_sRGB")===!0&&gt===dn?(L.format=Bs,L.minFilter=nn,L.generateMipmaps=!1):T=rl.sRGBToLinear(T):(gt!==dn||ft!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),T}this.allocateTextureUnit=O,this.resetTextureUnits=F,this.setTexture2D=X,this.setTexture2DArray=w,this.setTexture3D=U,this.setTextureCube=N,this.rebindTextures=it,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=Et}function Kp(i,t,e){const n=e.isWebGL2;function r(s,o=rn){let a;const l=xe.getTransfer(o);if(s===zn)return i.UNSIGNED_BYTE;if(s===$a)return i.UNSIGNED_SHORT_4_4_4_4;if(s===Qa)return i.UNSIGNED_SHORT_5_5_5_1;if(s===vc)return i.BYTE;if(s===gc)return i.SHORT;if(s===Xs)return i.UNSIGNED_SHORT;if(s===Za)return i.INT;if(s===Un)return i.UNSIGNED_INT;if(s===Fn)return i.FLOAT;if(s===nr)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===_c)return i.ALPHA;if(s===dn)return i.RGBA;if(s===yc)return i.LUMINANCE;if(s===xc)return i.LUMINANCE_ALPHA;if(s===ei)return i.DEPTH_COMPONENT;if(s===Ni)return i.DEPTH_STENCIL;if(s===Bs)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Sc)return i.RED;if(s===Ja)return i.RED_INTEGER;if(s===Mc)return i.RG;if(s===tl)return i.RG_INTEGER;if(s===el)return i.RGBA_INTEGER;if(s===ts||s===es||s===ns||s===is)if(l===Me)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===ts)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===es)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ns)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===is)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===ts)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===es)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ns)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===is)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===mo||s===vo||s===go||s===_o)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===mo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===vo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===go)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===_o)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ec)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===yo||s===xo)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===yo)return l===Me?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===xo)return l===Me?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===So||s===Mo||s===Eo||s===bo||s===wo||s===To||s===Ao||s===Co||s===Ro||s===Po||s===Lo||s===Io||s===Do||s===No)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===So)return l===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Mo)return l===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Eo)return l===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===bo)return l===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===wo)return l===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===To)return l===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ao)return l===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Co)return l===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ro)return l===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Po)return l===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Lo)return l===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Io)return l===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Do)return l===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===No)return l===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===rs||s===Uo||s===Fo)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===rs)return l===Me?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Uo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Fo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===bc||s===Bo||s===Oo||s===zo)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===rs)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Bo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Oo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===zo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ti?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class Zp extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class sn extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $p={type:"move"};class As{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new et,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new et),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new et,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new et),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){o=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),f=this._getHandJoint(u,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=u.joints["index-finger-tip"],c=u.joints["thumb-tip"],d=h.position.distanceTo(c.position),p=.02,v=.005;u.inputState.pinching&&d>p+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&d<=p-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($p)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new sn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Qp extends tn{constructor(t,e,n,r,s,o,a,l,u,h){if(h=h!==void 0?h:ei,h!==ei&&h!==Ni)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ei&&(n=Un),n===void 0&&h===Ni&&(n=ti),super(null,r,s,o,a,l,h,n,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:qe,this.minFilter=l!==void 0?l:qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Jp extends oi{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,h=null,c=null,d=null,p=null,v=null;const g=e.getContextAttributes();let m=null,f=null;const y=[],x=[],_=new Qe;_.layers.enable(1),_.viewport=new Oe;const M=new Qe;M.layers.enable(2),M.viewport=new Oe;const R=[_,M],C=new Zp;C.layers.enable(1),C.layers.enable(2);let B=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(w){let U=y[w];return U===void 0&&(U=new As,y[w]=U),U.getTargetRaySpace()},this.getControllerGrip=function(w){let U=y[w];return U===void 0&&(U=new As,y[w]=U),U.getGripSpace()},this.getHand=function(w){let U=y[w];return U===void 0&&(U=new As,y[w]=U),U.getHandSpace()};function E(w){const U=x.indexOf(w.inputSource);if(U===-1)return;const N=y[U];N!==void 0&&(N.update(w.inputSource,w.frame,u||o),N.dispatchEvent({type:w.type,data:w.inputSource}))}function P(){r.removeEventListener("select",E),r.removeEventListener("selectstart",E),r.removeEventListener("selectend",E),r.removeEventListener("squeeze",E),r.removeEventListener("squeezestart",E),r.removeEventListener("squeezeend",E),r.removeEventListener("end",P),r.removeEventListener("inputsourceschange",z);for(let w=0;w<y.length;w++){const U=x[w];U!==null&&(x[w]=null,y[w].disconnect(U))}B=null,S=null,t.setRenderTarget(m),p=null,d=null,c=null,r=null,f=null,X.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(w){s=w,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(w){a=w,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(w){u=w},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return c},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(w){if(r=w,r!==null){if(m=t.getRenderTarget(),r.addEventListener("select",E),r.addEventListener("selectstart",E),r.addEventListener("selectend",E),r.addEventListener("squeeze",E),r.addEventListener("squeezestart",E),r.addEventListener("squeezeend",E),r.addEventListener("end",P),r.addEventListener("inputsourceschange",z),g.xrCompatible!==!0&&await e.makeXRCompatible(),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const U={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,U),r.updateRenderState({baseLayer:p}),f=new ii(p.framebufferWidth,p.framebufferHeight,{format:dn,type:zn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let U=null,N=null,I=null;g.depth&&(I=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,U=g.stencil?Ni:ei,N=g.stencil?ti:Un);const A={colorFormat:e.RGBA8,depthFormat:I,scaleFactor:s};c=new XRWebGLBinding(r,e),d=c.createProjectionLayer(A),r.updateRenderState({layers:[d]}),f=new ii(d.textureWidth,d.textureHeight,{format:dn,type:zn,depthTexture:new Qp(d.textureWidth,d.textureHeight,N,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0});const j=t.properties.get(f);j.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),X.setContext(r),X.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function z(w){for(let U=0;U<w.removed.length;U++){const N=w.removed[U],I=x.indexOf(N);I>=0&&(x[I]=null,y[I].disconnect(N))}for(let U=0;U<w.added.length;U++){const N=w.added[U];let I=x.indexOf(N);if(I===-1){for(let j=0;j<y.length;j++)if(j>=x.length){x.push(N),I=j;break}else if(x[j]===null){x[j]=N,I=j;break}if(I===-1)break}const A=y[I];A&&A.connect(N)}}const H=new et,D=new et;function k(w,U,N){H.setFromMatrixPosition(U.matrixWorld),D.setFromMatrixPosition(N.matrixWorld);const I=H.distanceTo(D),A=U.projectionMatrix.elements,j=N.projectionMatrix.elements,at=A[14]/(A[10]-1),nt=A[14]/(A[10]+1),K=(A[9]+1)/A[5],lt=(A[9]-1)/A[5],ut=(A[8]-1)/A[0],q=(j[8]+1)/j[0],Dt=at*ut,pt=at*q,it=I/(-ut+q),ht=it*-ut;U.matrixWorld.decompose(w.position,w.quaternion,w.scale),w.translateX(ht),w.translateZ(it),w.matrixWorld.compose(w.position,w.quaternion,w.scale),w.matrixWorldInverse.copy(w.matrixWorld).invert();const ee=at+it,Ct=nt+it,Xt=Dt-ht,Et=pt+(I-ht),se=K*nt/Ct*ee,ae=lt*nt/Ct*ee;w.projectionMatrix.makePerspective(Xt,Et,se,ae,ee,Ct),w.projectionMatrixInverse.copy(w.projectionMatrix).invert()}function tt(w,U){U===null?w.matrixWorld.copy(w.matrix):w.matrixWorld.multiplyMatrices(U.matrixWorld,w.matrix),w.matrixWorldInverse.copy(w.matrixWorld).invert()}this.updateCamera=function(w){if(r===null)return;C.near=M.near=_.near=w.near,C.far=M.far=_.far=w.far,(B!==C.near||S!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),B=C.near,S=C.far);const U=w.parent,N=C.cameras;tt(C,U);for(let I=0;I<N.length;I++)tt(N[I],U);N.length===2?k(C,_,M):C.projectionMatrix.copy(_.projectionMatrix),F(w,C,U)};function F(w,U,N){N===null?w.matrix.copy(U.matrixWorld):(w.matrix.copy(N.matrixWorld),w.matrix.invert(),w.matrix.multiply(U.matrixWorld)),w.matrix.decompose(w.position,w.quaternion,w.scale),w.updateMatrixWorld(!0),w.projectionMatrix.copy(U.projectionMatrix),w.projectionMatrixInverse.copy(U.projectionMatrixInverse),w.isPerspectiveCamera&&(w.fov=Ui*2*Math.atan(1/w.projectionMatrix.elements[5]),w.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(w){l=w,d!==null&&(d.fixedFoveation=w),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=w)};let O=null;function Z(w,U){if(h=U.getViewerPose(u||o),v=U,h!==null){const N=h.views;p!==null&&(t.setRenderTargetFramebuffer(f,p.framebuffer),t.setRenderTarget(f));let I=!1;N.length!==C.cameras.length&&(C.cameras.length=0,I=!0);for(let A=0;A<N.length;A++){const j=N[A];let at=null;if(p!==null)at=p.getViewport(j);else{const K=c.getViewSubImage(d,j);at=K.viewport,A===0&&(t.setRenderTargetTextures(f,K.colorTexture,d.ignoreDepthValues?void 0:K.depthStencilTexture),t.setRenderTarget(f))}let nt=R[A];nt===void 0&&(nt=new Qe,nt.layers.enable(A),nt.viewport=new Oe,R[A]=nt),nt.matrix.fromArray(j.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(j.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(at.x,at.y,at.width,at.height),A===0&&(C.matrix.copy(nt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),I===!0&&C.cameras.push(nt)}}for(let N=0;N<y.length;N++){const I=x[N],A=y[N];I!==null&&A!==void 0&&A.update(I,U,u||o)}O&&O(w,U),U.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:U}),v=null}const X=new vl;X.setAnimationLoop(Z),this.setAnimationLoop=function(w){O=w},this.dispose=function(){}}}function tm(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,fl(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,y,x,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),c(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,_)):f.isMeshMatcapMaterial?(s(m,f),v(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),g(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,y,x):f.isSpriteMaterial?u(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ye&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ye&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const y=t.get(f).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const x=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*x,e(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,y,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=x*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function c(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),t.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ye&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const y=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function em(i,t,e,n){let r={},s={},o=[];const a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,x){const _=x.program;n.uniformBlockBinding(y,_)}function u(y,x){let _=r[y.id];_===void 0&&(v(y),_=h(y),r[y.id]=_,y.addEventListener("dispose",m));const M=x.program;n.updateUBOMapping(y,M);const R=t.render.frame;s[y.id]!==R&&(d(y),s[y.id]=R)}function h(y){const x=c();y.__bindingPointIndex=x;const _=i.createBuffer(),M=y.__size,R=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,M,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,_),_}function c(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const x=r[y.id],_=y.uniforms,M=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let R=0,C=_.length;R<C;R++){const B=_[R];if(p(B,R,M)===!0){const S=B.__offset,E=Array.isArray(B.value)?B.value:[B.value];let P=0;for(let z=0;z<E.length;z++){const H=E[z],D=g(H);typeof H=="number"?(B.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,S+P,B.__data)):H.isMatrix3?(B.__data[0]=H.elements[0],B.__data[1]=H.elements[1],B.__data[2]=H.elements[2],B.__data[3]=H.elements[0],B.__data[4]=H.elements[3],B.__data[5]=H.elements[4],B.__data[6]=H.elements[5],B.__data[7]=H.elements[0],B.__data[8]=H.elements[6],B.__data[9]=H.elements[7],B.__data[10]=H.elements[8],B.__data[11]=H.elements[0]):(H.toArray(B.__data,P),P+=D.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,S,B.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,x,_){const M=y.value;if(_[x]===void 0){if(typeof M=="number")_[x]=M;else{const R=Array.isArray(M)?M:[M],C=[];for(let B=0;B<R.length;B++)C.push(R[B].clone());_[x]=C}return!0}else if(typeof M=="number"){if(_[x]!==M)return _[x]=M,!0}else{const R=Array.isArray(_[x])?_[x]:[_[x]],C=Array.isArray(M)?M:[M];for(let B=0;B<R.length;B++){const S=R[B];if(S.equals(C[B])===!1)return S.copy(C[B]),!0}}return!1}function v(y){const x=y.uniforms;let _=0;const M=16;let R=0;for(let C=0,B=x.length;C<B;C++){const S=x[C],E={boundary:0,storage:0},P=Array.isArray(S.value)?S.value:[S.value];for(let z=0,H=P.length;z<H;z++){const D=P[z],k=g(D);E.boundary+=k.boundary,E.storage+=k.storage}if(S.__data=new Float32Array(E.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=_,C>0){R=_%M;const z=M-R;R!==0&&z-E.boundary<0&&(_+=M-R,S.__offset=_)}_+=E.storage}return R=_%M,R>0&&(_+=M-R),y.__size=_,y.__cache={},this}function g(y){const x={boundary:0,storage:0};return typeof y=="number"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const _=o.indexOf(x.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function f(){for(const y in r)i.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:u,dispose:f}}class Sl{constructor(t={}){const{canvas:e=$c(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:c=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const p=new Uint32Array(4),v=new Int32Array(4);let g=null,m=null;const f=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ze,this._useLegacyLights=!1,this.toneMapping=On,this.toneMappingExposure=1;const x=this;let _=!1,M=0,R=0,C=null,B=-1,S=null;const E=new Oe,P=new Oe;let z=null;const H=new ve(0);let D=0,k=e.width,tt=e.height,F=1,O=null,Z=null;const X=new Oe(0,0,k,tt),w=new Oe(0,0,k,tt);let U=!1;const N=new Zs;let I=!1,A=!1,j=null;const at=new Ie,nt=new he,K=new et,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ut(){return C===null?F:1}let q=n;function Dt(b,W){for(let $=0;$<b.length;$++){const V=b[$],J=e.getContext(V,W);if(J!==null)return J}return null}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Gs}`),e.addEventListener("webglcontextlost",le,!1),e.addEventListener("webglcontextrestored",Y,!1),e.addEventListener("webglcontextcreationerror",wt,!1),q===null){const W=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&W.shift(),q=Dt(W,b),q===null)throw Dt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&q instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let pt,it,ht,ee,Ct,Xt,Et,se,ae,L,T,Q,gt,ft,St,Wt,At,Ft,G,bt,mt,ne,Kt,Zt;function qt(){pt=new uf(q),it=new rf(q,pt,t),pt.init(it),ne=new Kp(q,pt,it),ht=new Yp(q,pt,it),ee=new pf(q),Ct=new Dp,Xt=new jp(q,pt,ht,Ct,it,ne,ee),Et=new of(x),se=new hf(x),ae=new Mh(q,it),Kt=new ef(q,pt,ae,it),L=new df(q,ae,ee,Kt),T=new _f(q,L,ae,ee),G=new gf(q,it,Xt),Wt=new sf(Ct),Q=new Ip(x,Et,se,pt,it,Kt,Wt),gt=new tm(x,Ct),ft=new Up,St=new Hp(pt,it),Ft=new tf(x,Et,se,ht,T,d,l),At=new qp(x,T,it),Zt=new em(q,ee,it,ht),bt=new nf(q,pt,ee,it),mt=new ff(q,pt,ee,it),ee.programs=Q.programs,x.capabilities=it,x.extensions=pt,x.properties=Ct,x.renderLists=ft,x.shadowMap=At,x.state=ht,x.info=ee}qt();const Bt=new Jp(x,q);this.xr=Bt,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const b=pt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=pt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(b){b!==void 0&&(F=b,this.setSize(k,tt,!1))},this.getSize=function(b){return b.set(k,tt)},this.setSize=function(b,W,$=!0){if(Bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=b,tt=W,e.width=Math.floor(b*F),e.height=Math.floor(W*F),$===!0&&(e.style.width=b+"px",e.style.height=W+"px"),this.setViewport(0,0,b,W)},this.getDrawingBufferSize=function(b){return b.set(k*F,tt*F).floor()},this.setDrawingBufferSize=function(b,W,$){k=b,tt=W,F=$,e.width=Math.floor(b*$),e.height=Math.floor(W*$),this.setViewport(0,0,b,W)},this.getCurrentViewport=function(b){return b.copy(E)},this.getViewport=function(b){return b.copy(X)},this.setViewport=function(b,W,$,V){b.isVector4?X.set(b.x,b.y,b.z,b.w):X.set(b,W,$,V),ht.viewport(E.copy(X).multiplyScalar(F).floor())},this.getScissor=function(b){return b.copy(w)},this.setScissor=function(b,W,$,V){b.isVector4?w.set(b.x,b.y,b.z,b.w):w.set(b,W,$,V),ht.scissor(P.copy(w).multiplyScalar(F).floor())},this.getScissorTest=function(){return U},this.setScissorTest=function(b){ht.setScissorTest(U=b)},this.setOpaqueSort=function(b){O=b},this.setTransparentSort=function(b){Z=b},this.getClearColor=function(b){return b.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor.apply(Ft,arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha.apply(Ft,arguments)},this.clear=function(b=!0,W=!0,$=!0){let V=0;if(b){let J=!1;if(C!==null){const xt=C.texture.format;J=xt===el||xt===tl||xt===Ja}if(J){const xt=C.texture.type,Ht=xt===zn||xt===Un||xt===Xs||xt===ti||xt===$a||xt===Qa,Nt=Ft.getClearColor(),Vt=Ft.getClearAlpha(),Lt=Nt.r,ie=Nt.g,re=Nt.b;Ht?(p[0]=Lt,p[1]=ie,p[2]=re,p[3]=Vt,q.clearBufferuiv(q.COLOR,0,p)):(v[0]=Lt,v[1]=ie,v[2]=re,v[3]=Vt,q.clearBufferiv(q.COLOR,0,v))}else V|=q.COLOR_BUFFER_BIT}W&&(V|=q.DEPTH_BUFFER_BIT),$&&(V|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",le,!1),e.removeEventListener("webglcontextrestored",Y,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),ft.dispose(),St.dispose(),Ct.dispose(),Et.dispose(),se.dispose(),T.dispose(),Kt.dispose(),Zt.dispose(),Q.dispose(),Bt.dispose(),Bt.removeEventListener("sessionstart",ct),Bt.removeEventListener("sessionend",ot),j&&(j.dispose(),j=null),vt.stop()};function le(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function Y(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const b=ee.autoReset,W=At.enabled,$=At.autoUpdate,V=At.needsUpdate,J=At.type;qt(),ee.autoReset=b,At.enabled=W,At.autoUpdate=$,At.needsUpdate=V,At.type=J}function wt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Mt(b){const W=b.target;W.removeEventListener("dispose",Mt),dt(W)}function dt(b){Tt(b),Ct.remove(b)}function Tt(b){const W=Ct.get(b).programs;W!==void 0&&(W.forEach(function($){Q.releaseProgram($)}),b.isShaderMaterial&&Q.releaseShaderCache(b))}this.renderBufferDirect=function(b,W,$,V,J,xt){W===null&&(W=lt);const Ht=J.isMesh&&J.matrixWorld.determinant()<0,Nt=Yt(b,W,$,V,J);ht.setMaterial(V,Ht);let Vt=$.index,Lt=1;if(V.wireframe===!0){if(Vt=L.getWireframeAttribute($),Vt===void 0)return;Lt=2}const ie=$.drawRange,re=$.attributes.position;let me=ie.start*Lt,we=(ie.start+ie.count)*Lt;xt!==null&&(me=Math.max(me,xt.start*Lt),we=Math.min(we,(xt.start+xt.count)*Lt)),Vt!==null?(me=Math.max(me,0),we=Math.min(we,Vt.count)):re!=null&&(me=Math.max(me,0),we=Math.min(we,re.count));const _e=we-me;if(_e<0||_e===1/0)return;Kt.setup(J,V,Nt,$,Vt);let pe,ye=bt;if(Vt!==null&&(pe=ae.get(Vt),ye=mt,ye.setIndex(pe)),J.isMesh)V.wireframe===!0?(ht.setLineWidth(V.wireframeLinewidth*ut()),ye.setMode(q.LINES)):ye.setMode(q.TRIANGLES);else if(J.isLine){let Jt=V.linewidth;Jt===void 0&&(Jt=1),ht.setLineWidth(Jt*ut()),J.isLineSegments?ye.setMode(q.LINES):J.isLineLoop?ye.setMode(q.LINE_LOOP):ye.setMode(q.LINE_STRIP)}else J.isPoints?ye.setMode(q.POINTS):J.isSprite&&ye.setMode(q.TRIANGLES);if(J.isInstancedMesh)ye.renderInstances(me,_e,J.count);else if($.isInstancedBufferGeometry){const Jt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,je=Math.min($.instanceCount,Jt);ye.renderInstances(me,_e,je)}else ye.render(me,_e)};function Qt(b,W,$){b.transparent===!0&&b.side===wn&&b.forceSinglePass===!1?(b.side=Ye,b.needsUpdate=!0,rt(b,W,$),b.side=Hn,b.needsUpdate=!0,rt(b,W,$),b.side=wn):rt(b,W,$)}this.compile=function(b,W,$=null){$===null&&($=b),m=St.get($),m.init(),y.push(m),$.traverseVisible(function(J){J.isLight&&J.layers.test(W.layers)&&(m.pushLight(J),J.castShadow&&m.pushShadow(J))}),b!==$&&b.traverseVisible(function(J){J.isLight&&J.layers.test(W.layers)&&(m.pushLight(J),J.castShadow&&m.pushShadow(J))}),m.setupLights(x._useLegacyLights);const V=new Set;return b.traverse(function(J){const xt=J.material;if(xt)if(Array.isArray(xt))for(let Ht=0;Ht<xt.length;Ht++){const Nt=xt[Ht];Qt(Nt,$,J),V.add(Nt)}else Qt(xt,$,J),V.add(xt)}),y.pop(),m=null,V},this.compileAsync=function(b,W,$=null){const V=this.compile(b,W,$);return new Promise(J=>{function xt(){if(V.forEach(function(Ht){Ct.get(Ht).currentProgram.isReady()&&V.delete(Ht)}),V.size===0){J(b);return}setTimeout(xt,10)}pt.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let ce=null;function de(b){ce&&ce(b)}function ct(){vt.stop()}function ot(){vt.start()}const vt=new vl;vt.setAnimationLoop(de),typeof self<"u"&&vt.setContext(self),this.setAnimationLoop=function(b){ce=b,Bt.setAnimationLoop(b),b===null?vt.stop():vt.start()},Bt.addEventListener("sessionstart",ct),Bt.addEventListener("sessionend",ot),this.render=function(b,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Bt.enabled===!0&&Bt.isPresenting===!0&&(Bt.cameraAutoUpdate===!0&&Bt.updateCamera(W),W=Bt.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,W,C),m=St.get(b,y.length),m.init(),y.push(m),at.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),N.setFromProjectionMatrix(at),A=this.localClippingEnabled,I=Wt.init(this.clippingPlanes,A),g=ft.get(b,f.length),g.init(),f.push(g),_t(b,W,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(O,Z),this.info.render.frame++,I===!0&&Wt.beginShadows();const $=m.state.shadowsArray;if(At.render($,b,W),I===!0&&Wt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ft.render(g,b),m.setupLights(x._useLegacyLights),W.isArrayCamera){const V=W.cameras;for(let J=0,xt=V.length;J<xt;J++){const Ht=V[J];oe(g,b,Ht,Ht.viewport)}}else oe(g,b,W);C!==null&&(Xt.updateMultisampleRenderTarget(C),Xt.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(x,b,W),Kt.resetDefaultState(),B=-1,S=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,f.pop(),f.length>0?g=f[f.length-1]:g=null};function _t(b,W,$,V){if(b.visible===!1)return;if(b.layers.test(W.layers)){if(b.isGroup)$=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(W);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||N.intersectsSprite(b)){V&&K.setFromMatrixPosition(b.matrixWorld).applyMatrix4(at);const Ht=T.update(b),Nt=b.material;Nt.visible&&g.push(b,Ht,Nt,$,K.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||N.intersectsObject(b))){const Ht=T.update(b),Nt=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),K.copy(b.boundingSphere.center)):(Ht.boundingSphere===null&&Ht.computeBoundingSphere(),K.copy(Ht.boundingSphere.center)),K.applyMatrix4(b.matrixWorld).applyMatrix4(at)),Array.isArray(Nt)){const Vt=Ht.groups;for(let Lt=0,ie=Vt.length;Lt<ie;Lt++){const re=Vt[Lt],me=Nt[re.materialIndex];me&&me.visible&&g.push(b,Ht,me,$,K.z,re)}}else Nt.visible&&g.push(b,Ht,Nt,$,K.z,null)}}const xt=b.children;for(let Ht=0,Nt=xt.length;Ht<Nt;Ht++)_t(xt[Ht],W,$,V)}function oe(b,W,$,V){const J=b.opaque,xt=b.transmissive,Ht=b.transparent;m.setupLightsView($),I===!0&&Wt.setGlobalState(x.clippingPlanes,$),xt.length>0&&kt(J,xt,W,$),V&&ht.viewport(E.copy(V)),J.length>0&&Rt(J,W,$),xt.length>0&&Rt(xt,W,$),Ht.length>0&&Rt(Ht,W,$),ht.buffers.depth.setTest(!0),ht.buffers.depth.setMask(!0),ht.buffers.color.setMask(!0),ht.setPolygonOffset(!1)}function kt(b,W,$,V){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;const xt=it.isWebGL2;j===null&&(j=new ii(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")?nr:zn,minFilter:er,samples:xt?4:0})),x.getDrawingBufferSize(nt),xt?j.setSize(nt.x,nt.y):j.setSize(kr(nt.x),kr(nt.y));const Ht=x.getRenderTarget();x.setRenderTarget(j),x.getClearColor(H),D=x.getClearAlpha(),D<1&&x.setClearColor(16777215,.5),x.clear();const Nt=x.toneMapping;x.toneMapping=On,Rt(b,$,V),Xt.updateMultisampleRenderTarget(j),Xt.updateRenderTargetMipmap(j);let Vt=!1;for(let Lt=0,ie=W.length;Lt<ie;Lt++){const re=W[Lt],me=re.object,we=re.geometry,_e=re.material,pe=re.group;if(_e.side===wn&&me.layers.test(V.layers)){const ye=_e.side;_e.side=Ye,_e.needsUpdate=!0,Ot(me,$,V,we,_e,pe),_e.side=ye,_e.needsUpdate=!0,Vt=!0}}Vt===!0&&(Xt.updateMultisampleRenderTarget(j),Xt.updateRenderTargetMipmap(j)),x.setRenderTarget(Ht),x.setClearColor(H,D),x.toneMapping=Nt}function Rt(b,W,$){const V=W.isScene===!0?W.overrideMaterial:null;for(let J=0,xt=b.length;J<xt;J++){const Ht=b[J],Nt=Ht.object,Vt=Ht.geometry,Lt=V===null?Ht.material:V,ie=Ht.group;Nt.layers.test($.layers)&&Ot(Nt,W,$,Vt,Lt,ie)}}function Ot(b,W,$,V,J,xt){b.onBeforeRender(x,W,$,V,J,xt),b.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),J.onBeforeRender(x,W,$,V,b,xt),J.transparent===!0&&J.side===wn&&J.forceSinglePass===!1?(J.side=Ye,J.needsUpdate=!0,x.renderBufferDirect($,W,V,J,b,xt),J.side=Hn,J.needsUpdate=!0,x.renderBufferDirect($,W,V,J,b,xt),J.side=wn):x.renderBufferDirect($,W,V,J,b,xt),b.onAfterRender(x,W,$,V,J,xt)}function rt(b,W,$){W.isScene!==!0&&(W=lt);const V=Ct.get(b),J=m.state.lights,xt=m.state.shadowsArray,Ht=J.state.version,Nt=Q.getParameters(b,J.state,xt,W,$),Vt=Q.getProgramCacheKey(Nt);let Lt=V.programs;V.environment=b.isMeshStandardMaterial?W.environment:null,V.fog=W.fog,V.envMap=(b.isMeshStandardMaterial?se:Et).get(b.envMap||V.environment),Lt===void 0&&(b.addEventListener("dispose",Mt),Lt=new Map,V.programs=Lt);let ie=Lt.get(Vt);if(ie!==void 0){if(V.currentProgram===ie&&V.lightsStateVersion===Ht)return zt(b,Nt),ie}else Nt.uniforms=Q.getUniforms(b),b.onBuild($,Nt,x),b.onBeforeCompile(Nt,x),ie=Q.acquireProgram(Nt,Vt),Lt.set(Vt,ie),V.uniforms=Nt.uniforms;const re=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(re.clippingPlanes=Wt.uniform),zt(b,Nt),V.needsLights=Pt(b),V.lightsStateVersion=Ht,V.needsLights&&(re.ambientLightColor.value=J.state.ambient,re.lightProbe.value=J.state.probe,re.directionalLights.value=J.state.directional,re.directionalLightShadows.value=J.state.directionalShadow,re.spotLights.value=J.state.spot,re.spotLightShadows.value=J.state.spotShadow,re.rectAreaLights.value=J.state.rectArea,re.ltc_1.value=J.state.rectAreaLTC1,re.ltc_2.value=J.state.rectAreaLTC2,re.pointLights.value=J.state.point,re.pointLightShadows.value=J.state.pointShadow,re.hemisphereLights.value=J.state.hemi,re.directionalShadowMap.value=J.state.directionalShadowMap,re.directionalShadowMatrix.value=J.state.directionalShadowMatrix,re.spotShadowMap.value=J.state.spotShadowMap,re.spotLightMatrix.value=J.state.spotLightMatrix,re.spotLightMap.value=J.state.spotLightMap,re.pointShadowMap.value=J.state.pointShadowMap,re.pointShadowMatrix.value=J.state.pointShadowMatrix),V.currentProgram=ie,V.uniformsList=null,ie}function It(b){if(b.uniformsList===null){const W=b.currentProgram.getUniforms();b.uniformsList=Fr.seqWithValue(W.seq,b.uniforms)}return b.uniformsList}function zt(b,W){const $=Ct.get(b);$.outputColorSpace=W.outputColorSpace,$.instancing=W.instancing,$.instancingColor=W.instancingColor,$.skinning=W.skinning,$.morphTargets=W.morphTargets,$.morphNormals=W.morphNormals,$.morphColors=W.morphColors,$.morphTargetsCount=W.morphTargetsCount,$.numClippingPlanes=W.numClippingPlanes,$.numIntersection=W.numClipIntersection,$.vertexAlphas=W.vertexAlphas,$.vertexTangents=W.vertexTangents,$.toneMapping=W.toneMapping}function Yt(b,W,$,V,J){W.isScene!==!0&&(W=lt),Xt.resetTextureUnits();const xt=W.fog,Ht=V.isMeshStandardMaterial?W.environment:null,Nt=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Cn,Vt=(V.isMeshStandardMaterial?se:Et).get(V.envMap||Ht),Lt=V.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ie=!!$.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),re=!!$.morphAttributes.position,me=!!$.morphAttributes.normal,we=!!$.morphAttributes.color;let _e=On;V.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(_e=x.toneMapping);const pe=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ye=pe!==void 0?pe.length:0,Jt=Ct.get(V),je=m.state.lights;if(I===!0&&(A===!0||b!==S)){const Ce=b===S&&V.id===B;Wt.setState(V,b,Ce)}let ge=!1;V.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==je.state.version||Jt.outputColorSpace!==Nt||J.isInstancedMesh&&Jt.instancing===!1||!J.isInstancedMesh&&Jt.instancing===!0||J.isSkinnedMesh&&Jt.skinning===!1||!J.isSkinnedMesh&&Jt.skinning===!0||J.isInstancedMesh&&Jt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Jt.instancingColor===!1&&J.instanceColor!==null||Jt.envMap!==Vt||V.fog===!0&&Jt.fog!==xt||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==Wt.numPlanes||Jt.numIntersection!==Wt.numIntersection)||Jt.vertexAlphas!==Lt||Jt.vertexTangents!==ie||Jt.morphTargets!==re||Jt.morphNormals!==me||Jt.morphColors!==we||Jt.toneMapping!==_e||it.isWebGL2===!0&&Jt.morphTargetsCount!==ye)&&(ge=!0):(ge=!0,Jt.__version=V.version);let Ee=Jt.currentProgram;ge===!0&&(Ee=rt(V,W,J));let Re=!1,Fe=!1,Ke=!1;const te=Ee.getUniforms(),Ae=Jt.uniforms;if(ht.useProgram(Ee.program)&&(Re=!0,Fe=!0,Ke=!0),V.id!==B&&(B=V.id,Fe=!0),Re||S!==b){te.setValue(q,"projectionMatrix",b.projectionMatrix),te.setValue(q,"viewMatrix",b.matrixWorldInverse);const Ce=te.map.cameraPosition;Ce!==void 0&&Ce.setValue(q,K.setFromMatrixPosition(b.matrixWorld)),it.logarithmicDepthBuffer&&te.setValue(q,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&te.setValue(q,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,Fe=!0,Ke=!0)}if(J.isSkinnedMesh){te.setOptional(q,J,"bindMatrix"),te.setOptional(q,J,"bindMatrixInverse");const Ce=J.skeleton;Ce&&(it.floatVertexTextures?(Ce.boneTexture===null&&Ce.computeBoneTexture(),te.setValue(q,"boneTexture",Ce.boneTexture,Xt),te.setValue(q,"boneTextureSize",Ce.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Te=$.morphAttributes;if((Te.position!==void 0||Te.normal!==void 0||Te.color!==void 0&&it.isWebGL2===!0)&&G.update(J,$,Ee),(Fe||Jt.receiveShadow!==J.receiveShadow)&&(Jt.receiveShadow=J.receiveShadow,te.setValue(q,"receiveShadow",J.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Ae.envMap.value=Vt,Ae.flipEnvMap.value=Vt.isCubeTexture&&Vt.isRenderTargetTexture===!1?-1:1),Fe&&(te.setValue(q,"toneMappingExposure",x.toneMappingExposure),Jt.needsLights&&Ut(Ae,Ke),xt&&V.fog===!0&&gt.refreshFogUniforms(Ae,xt),gt.refreshMaterialUniforms(Ae,V,F,tt,j),Fr.upload(q,It(Jt),Ae,Xt)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Fr.upload(q,It(Jt),Ae,Xt),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&te.setValue(q,"center",J.center),te.setValue(q,"modelViewMatrix",J.modelViewMatrix),te.setValue(q,"normalMatrix",J.normalMatrix),te.setValue(q,"modelMatrix",J.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Ce=V.uniformsGroups;for(let on=0,Qr=Ce.length;on<Qr;on++)if(it.isWebGL2){const lr=Ce[on];Zt.update(lr,Ee),Zt.bind(lr,Ee)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ee}function Ut(b,W){b.ambientLightColor.needsUpdate=W,b.lightProbe.needsUpdate=W,b.directionalLights.needsUpdate=W,b.directionalLightShadows.needsUpdate=W,b.pointLights.needsUpdate=W,b.pointLightShadows.needsUpdate=W,b.spotLights.needsUpdate=W,b.spotLightShadows.needsUpdate=W,b.rectAreaLights.needsUpdate=W,b.hemisphereLights.needsUpdate=W}function Pt(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,W,$){Ct.get(b.texture).__webglTexture=W,Ct.get(b.depthTexture).__webglTexture=$;const V=Ct.get(b);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=$===void 0,V.__autoAllocateDepthBuffer||pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,W){const $=Ct.get(b);$.__webglFramebuffer=W,$.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(b,W=0,$=0){C=b,M=W,R=$;let V=!0,J=null,xt=!1,Ht=!1;if(b){const Vt=Ct.get(b);Vt.__useDefaultFramebuffer!==void 0?(ht.bindFramebuffer(q.FRAMEBUFFER,null),V=!1):Vt.__webglFramebuffer===void 0?Xt.setupRenderTarget(b):Vt.__hasExternalTextures&&Xt.rebindTextures(b,Ct.get(b.texture).__webglTexture,Ct.get(b.depthTexture).__webglTexture);const Lt=b.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(Ht=!0);const ie=Ct.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ie[W])?J=ie[W][$]:J=ie[W],xt=!0):it.isWebGL2&&b.samples>0&&Xt.useMultisampledRTT(b)===!1?J=Ct.get(b).__webglMultisampledFramebuffer:Array.isArray(ie)?J=ie[$]:J=ie,E.copy(b.viewport),P.copy(b.scissor),z=b.scissorTest}else E.copy(X).multiplyScalar(F).floor(),P.copy(w).multiplyScalar(F).floor(),z=U;if(ht.bindFramebuffer(q.FRAMEBUFFER,J)&&it.drawBuffers&&V&&ht.drawBuffers(b,J),ht.viewport(E),ht.scissor(P),ht.setScissorTest(z),xt){const Vt=Ct.get(b.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+W,Vt.__webglTexture,$)}else if(Ht){const Vt=Ct.get(b.texture),Lt=W||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,Vt.__webglTexture,$||0,Lt)}B=-1},this.readRenderTargetPixels=function(b,W,$,V,J,xt,Ht){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=Ct.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ht!==void 0&&(Nt=Nt[Ht]),Nt){ht.bindFramebuffer(q.FRAMEBUFFER,Nt);try{const Vt=b.texture,Lt=Vt.format,ie=Vt.type;if(Lt!==dn&&ne.convert(Lt)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const re=ie===nr&&(pt.has("EXT_color_buffer_half_float")||it.isWebGL2&&pt.has("EXT_color_buffer_float"));if(ie!==zn&&ne.convert(ie)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ie===Fn&&(it.isWebGL2||pt.has("OES_texture_float")||pt.has("WEBGL_color_buffer_float")))&&!re){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=b.width-V&&$>=0&&$<=b.height-J&&q.readPixels(W,$,V,J,ne.convert(Lt),ne.convert(ie),xt)}finally{const Vt=C!==null?Ct.get(C).__webglFramebuffer:null;ht.bindFramebuffer(q.FRAMEBUFFER,Vt)}}},this.copyFramebufferToTexture=function(b,W,$=0){const V=Math.pow(2,-$),J=Math.floor(W.image.width*V),xt=Math.floor(W.image.height*V);Xt.setTexture2D(W,0),q.copyTexSubImage2D(q.TEXTURE_2D,$,0,0,b.x,b.y,J,xt),ht.unbindTexture()},this.copyTextureToTexture=function(b,W,$,V=0){const J=W.image.width,xt=W.image.height,Ht=ne.convert($.format),Nt=ne.convert($.type);Xt.setTexture2D($,0),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,$.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,$.unpackAlignment),W.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,V,b.x,b.y,J,xt,Ht,Nt,W.image.data):W.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,V,b.x,b.y,W.mipmaps[0].width,W.mipmaps[0].height,Ht,W.mipmaps[0].data):q.texSubImage2D(q.TEXTURE_2D,V,b.x,b.y,Ht,Nt,W.image),V===0&&$.generateMipmaps&&q.generateMipmap(q.TEXTURE_2D),ht.unbindTexture()},this.copyTextureToTexture3D=function(b,W,$,V,J=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xt=b.max.x-b.min.x+1,Ht=b.max.y-b.min.y+1,Nt=b.max.z-b.min.z+1,Vt=ne.convert(V.format),Lt=ne.convert(V.type);let ie;if(V.isData3DTexture)Xt.setTexture3D(V,0),ie=q.TEXTURE_3D;else if(V.isDataArrayTexture)Xt.setTexture2DArray(V,0),ie=q.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,V.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,V.unpackAlignment);const re=q.getParameter(q.UNPACK_ROW_LENGTH),me=q.getParameter(q.UNPACK_IMAGE_HEIGHT),we=q.getParameter(q.UNPACK_SKIP_PIXELS),_e=q.getParameter(q.UNPACK_SKIP_ROWS),pe=q.getParameter(q.UNPACK_SKIP_IMAGES),ye=$.isCompressedTexture?$.mipmaps[0]:$.image;q.pixelStorei(q.UNPACK_ROW_LENGTH,ye.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,ye.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,b.min.x),q.pixelStorei(q.UNPACK_SKIP_ROWS,b.min.y),q.pixelStorei(q.UNPACK_SKIP_IMAGES,b.min.z),$.isDataTexture||$.isData3DTexture?q.texSubImage3D(ie,J,W.x,W.y,W.z,xt,Ht,Nt,Vt,Lt,ye.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(ie,J,W.x,W.y,W.z,xt,Ht,Nt,Vt,ye.data)):q.texSubImage3D(ie,J,W.x,W.y,W.z,xt,Ht,Nt,Vt,Lt,ye),q.pixelStorei(q.UNPACK_ROW_LENGTH,re),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,me),q.pixelStorei(q.UNPACK_SKIP_PIXELS,we),q.pixelStorei(q.UNPACK_SKIP_ROWS,_e),q.pixelStorei(q.UNPACK_SKIP_IMAGES,pe),J===0&&V.generateMipmaps&&q.generateMipmap(ie),ht.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?Xt.setTextureCube(b,0):b.isData3DTexture?Xt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Xt.setTexture2DArray(b,0):Xt.setTexture2D(b,0),ht.unbindTexture()},this.resetState=function(){M=0,R=0,C=null,ht.reset(),Kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ys?"display-p3":"srgb",e.unpackColorSpace=xe.workingColorSpace===jr?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ze?ni:nl}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===ni?ze:Cn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class nm extends Sl{}nm.prototype.isWebGL1Renderer=!0;class im extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Qs extends Gn{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let u=0;const h=[],c=new et,d=new et,p=[],v=[],g=[],m=[];for(let f=0;f<=n;f++){const y=[],x=f/n;let _=0;f===0&&o===0?_=.5/e:f===n&&l===Math.PI&&(_=-.5/e);for(let M=0;M<=e;M++){const R=M/e;c.x=-t*Math.cos(r+R*s)*Math.sin(o+x*a),c.y=t*Math.cos(o+x*a),c.z=t*Math.sin(r+R*s)*Math.sin(o+x*a),v.push(c.x,c.y,c.z),d.copy(c).normalize(),g.push(d.x,d.y,d.z),m.push(R+_,1-x),y.push(u++)}h.push(y)}for(let f=0;f<n;f++)for(let y=0;y<e;y++){const x=h[f][y+1],_=h[f][y],M=h[f+1][y],R=h[f+1][y+1];(f!==0||o>0)&&p.push(x,_,R),(f!==n-1||l<Math.PI)&&p.push(_,M,R)}this.setIndex(p),this.setAttribute("position",new _n(v,3)),this.setAttribute("normal",new _n(g,3)),this.setAttribute("uv",new _n(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qs(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ml extends Oi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qs,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Tn extends Oi{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ve(16777215),this.specular=new ve(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qs,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ws,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Js extends Ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ve(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class rm extends Js{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ve(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Cs=new Ie,Ca=new et,Ra=new et;class sm{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zs,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new Oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ca.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ca),Ra.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ra),e.updateMatrixWorld(),Cs.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cs),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Cs)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class om extends sm{constructor(){super(new Qe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Ui*2*t.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||r!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=r,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class am extends Js{constructor(t,e,n=0,r=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new om}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class lm extends Js{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Pa{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ge(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gs);const La={type:"change"},Rs={type:"start"},Ia={type:"end"},Lr=new al,Da=new Nn,cm=Math.cos(70*Zc.DEG2RAD);class hm extends oi{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new et,this.cursor=new et,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ai.ROTATE,MIDDLE:ai.DOLLY,RIGHT:ai.PAN},this.touches={ONE:li.ROTATE,TWO:li.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(G){G.addEventListener("keydown",T),this._domElementKeyEvents=G},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",T),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(La),n.update(),s=r.NONE},this.update=function(){const G=new et,bt=new ri().setFromUnitVectors(t.up,new et(0,1,0)),mt=bt.clone().invert(),ne=new et,Kt=new ri,Zt=new et,qt=2*Math.PI;return function(le=null){const Y=n.object.position;G.copy(Y).sub(n.target),G.applyQuaternion(bt),a.setFromVector3(G),n.autoRotate&&s===r.NONE&&P(S(le)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let wt=n.minAzimuthAngle,Mt=n.maxAzimuthAngle;isFinite(wt)&&isFinite(Mt)&&(wt<-Math.PI?wt+=qt:wt>Math.PI&&(wt-=qt),Mt<-Math.PI?Mt+=qt:Mt>Math.PI&&(Mt-=qt),wt<=Mt?a.theta=Math.max(wt,Math.min(Mt,a.theta)):a.theta=a.theta>(wt+Mt)/2?Math.max(wt,a.theta):Math.min(Mt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&R||n.object.isOrthographicCamera?a.radius=Z(a.radius):a.radius=Z(a.radius*u),G.setFromSpherical(a),G.applyQuaternion(mt),Y.copy(n.target).add(G),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let dt=!1;if(n.zoomToCursor&&R){let Tt=null;if(n.object.isPerspectiveCamera){const Qt=G.length();Tt=Z(Qt*u);const ce=Qt-Tt;n.object.position.addScaledVector(_,ce),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Qt=new et(M.x,M.y,0);Qt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/u)),n.object.updateProjectionMatrix(),dt=!0;const ce=new et(M.x,M.y,0);ce.unproject(n.object),n.object.position.sub(ce).add(Qt),n.object.updateMatrixWorld(),Tt=G.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Tt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Tt).add(n.object.position):(Lr.origin.copy(n.object.position),Lr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Lr.direction))<cm?t.lookAt(n.target):(Da.setFromNormalAndCoplanarPoint(n.object.up,n.target),Lr.intersectPlane(Da,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/u)),n.object.updateProjectionMatrix(),dt=!0);return u=1,R=!1,dt||ne.distanceToSquared(n.object.position)>o||8*(1-Kt.dot(n.object.quaternion))>o||Zt.distanceToSquared(n.target)>0?(n.dispatchEvent(La),ne.copy(n.object.position),Kt.copy(n.object.quaternion),Zt.copy(n.target),dt=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ft),n.domElement.removeEventListener("pointerdown",Ct),n.domElement.removeEventListener("pointercancel",Et),n.domElement.removeEventListener("wheel",L),n.domElement.removeEventListener("pointermove",Xt),n.domElement.removeEventListener("pointerup",Et),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",T),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Pa,l=new Pa;let u=1;const h=new et,c=new he,d=new he,p=new he,v=new he,g=new he,m=new he,f=new he,y=new he,x=new he,_=new et,M=new he;let R=!1;const C=[],B={};function S(G){return G!==null?2*Math.PI/60*n.autoRotateSpeed*G:2*Math.PI/60/60*n.autoRotateSpeed}function E(){return Math.pow(.95,n.zoomSpeed)}function P(G){l.theta-=G}function z(G){l.phi-=G}const H=function(){const G=new et;return function(mt,ne){G.setFromMatrixColumn(ne,0),G.multiplyScalar(-mt),h.add(G)}}(),D=function(){const G=new et;return function(mt,ne){n.screenSpacePanning===!0?G.setFromMatrixColumn(ne,1):(G.setFromMatrixColumn(ne,0),G.crossVectors(n.object.up,G)),G.multiplyScalar(mt),h.add(G)}}(),k=function(){const G=new et;return function(mt,ne){const Kt=n.domElement;if(n.object.isPerspectiveCamera){const Zt=n.object.position;G.copy(Zt).sub(n.target);let qt=G.length();qt*=Math.tan(n.object.fov/2*Math.PI/180),H(2*mt*qt/Kt.clientHeight,n.object.matrix),D(2*ne*qt/Kt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(H(mt*(n.object.right-n.object.left)/n.object.zoom/Kt.clientWidth,n.object.matrix),D(ne*(n.object.top-n.object.bottom)/n.object.zoom/Kt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function tt(G){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?u/=G:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function F(G){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?u*=G:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function O(G){if(!n.zoomToCursor)return;R=!0;const bt=n.domElement.getBoundingClientRect(),mt=G.clientX-bt.left,ne=G.clientY-bt.top,Kt=bt.width,Zt=bt.height;M.x=mt/Kt*2-1,M.y=-(ne/Zt)*2+1,_.set(M.x,M.y,1).unproject(n.object).sub(n.object.position).normalize()}function Z(G){return Math.max(n.minDistance,Math.min(n.maxDistance,G))}function X(G){c.set(G.clientX,G.clientY)}function w(G){O(G),f.set(G.clientX,G.clientY)}function U(G){v.set(G.clientX,G.clientY)}function N(G){d.set(G.clientX,G.clientY),p.subVectors(d,c).multiplyScalar(n.rotateSpeed);const bt=n.domElement;P(2*Math.PI*p.x/bt.clientHeight),z(2*Math.PI*p.y/bt.clientHeight),c.copy(d),n.update()}function I(G){y.set(G.clientX,G.clientY),x.subVectors(y,f),x.y>0?tt(E()):x.y<0&&F(E()),f.copy(y),n.update()}function A(G){g.set(G.clientX,G.clientY),m.subVectors(g,v).multiplyScalar(n.panSpeed),k(m.x,m.y),v.copy(g),n.update()}function j(G){O(G),G.deltaY<0?F(E()):G.deltaY>0&&tt(E()),n.update()}function at(G){let bt=!1;switch(G.code){case n.keys.UP:G.ctrlKey||G.metaKey||G.shiftKey?z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(0,n.keyPanSpeed),bt=!0;break;case n.keys.BOTTOM:G.ctrlKey||G.metaKey||G.shiftKey?z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(0,-n.keyPanSpeed),bt=!0;break;case n.keys.LEFT:G.ctrlKey||G.metaKey||G.shiftKey?P(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(n.keyPanSpeed,0),bt=!0;break;case n.keys.RIGHT:G.ctrlKey||G.metaKey||G.shiftKey?P(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(-n.keyPanSpeed,0),bt=!0;break}bt&&(G.preventDefault(),n.update())}function nt(){if(C.length===1)c.set(C[0].pageX,C[0].pageY);else{const G=.5*(C[0].pageX+C[1].pageX),bt=.5*(C[0].pageY+C[1].pageY);c.set(G,bt)}}function K(){if(C.length===1)v.set(C[0].pageX,C[0].pageY);else{const G=.5*(C[0].pageX+C[1].pageX),bt=.5*(C[0].pageY+C[1].pageY);v.set(G,bt)}}function lt(){const G=C[0].pageX-C[1].pageX,bt=C[0].pageY-C[1].pageY,mt=Math.sqrt(G*G+bt*bt);f.set(0,mt)}function ut(){n.enableZoom&&lt(),n.enablePan&&K()}function q(){n.enableZoom&&lt(),n.enableRotate&&nt()}function Dt(G){if(C.length==1)d.set(G.pageX,G.pageY);else{const mt=Ft(G),ne=.5*(G.pageX+mt.x),Kt=.5*(G.pageY+mt.y);d.set(ne,Kt)}p.subVectors(d,c).multiplyScalar(n.rotateSpeed);const bt=n.domElement;P(2*Math.PI*p.x/bt.clientHeight),z(2*Math.PI*p.y/bt.clientHeight),c.copy(d)}function pt(G){if(C.length===1)g.set(G.pageX,G.pageY);else{const bt=Ft(G),mt=.5*(G.pageX+bt.x),ne=.5*(G.pageY+bt.y);g.set(mt,ne)}m.subVectors(g,v).multiplyScalar(n.panSpeed),k(m.x,m.y),v.copy(g)}function it(G){const bt=Ft(G),mt=G.pageX-bt.x,ne=G.pageY-bt.y,Kt=Math.sqrt(mt*mt+ne*ne);y.set(0,Kt),x.set(0,Math.pow(y.y/f.y,n.zoomSpeed)),tt(x.y),f.copy(y)}function ht(G){n.enableZoom&&it(G),n.enablePan&&pt(G)}function ee(G){n.enableZoom&&it(G),n.enableRotate&&Dt(G)}function Ct(G){n.enabled!==!1&&(C.length===0&&(n.domElement.setPointerCapture(G.pointerId),n.domElement.addEventListener("pointermove",Xt),n.domElement.addEventListener("pointerup",Et)),St(G),G.pointerType==="touch"?Q(G):se(G))}function Xt(G){n.enabled!==!1&&(G.pointerType==="touch"?gt(G):ae(G))}function Et(G){Wt(G),C.length===0&&(n.domElement.releasePointerCapture(G.pointerId),n.domElement.removeEventListener("pointermove",Xt),n.domElement.removeEventListener("pointerup",Et)),n.dispatchEvent(Ia),s=r.NONE}function se(G){let bt;switch(G.button){case 0:bt=n.mouseButtons.LEFT;break;case 1:bt=n.mouseButtons.MIDDLE;break;case 2:bt=n.mouseButtons.RIGHT;break;default:bt=-1}switch(bt){case ai.DOLLY:if(n.enableZoom===!1)return;w(G),s=r.DOLLY;break;case ai.ROTATE:if(G.ctrlKey||G.metaKey||G.shiftKey){if(n.enablePan===!1)return;U(G),s=r.PAN}else{if(n.enableRotate===!1)return;X(G),s=r.ROTATE}break;case ai.PAN:if(G.ctrlKey||G.metaKey||G.shiftKey){if(n.enableRotate===!1)return;X(G),s=r.ROTATE}else{if(n.enablePan===!1)return;U(G),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Rs)}function ae(G){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;N(G);break;case r.DOLLY:if(n.enableZoom===!1)return;I(G);break;case r.PAN:if(n.enablePan===!1)return;A(G);break}}function L(G){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(G.preventDefault(),n.dispatchEvent(Rs),j(G),n.dispatchEvent(Ia))}function T(G){n.enabled===!1||n.enablePan===!1||at(G)}function Q(G){switch(At(G),C.length){case 1:switch(n.touches.ONE){case li.ROTATE:if(n.enableRotate===!1)return;nt(),s=r.TOUCH_ROTATE;break;case li.PAN:if(n.enablePan===!1)return;K(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case li.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ut(),s=r.TOUCH_DOLLY_PAN;break;case li.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;q(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Rs)}function gt(G){switch(At(G),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;Dt(G),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;pt(G),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ht(G),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ee(G),n.update();break;default:s=r.NONE}}function ft(G){n.enabled!==!1&&G.preventDefault()}function St(G){C.push(G)}function Wt(G){delete B[G.pointerId];for(let bt=0;bt<C.length;bt++)if(C[bt].pointerId==G.pointerId){C.splice(bt,1);return}}function At(G){let bt=B[G.pointerId];bt===void 0&&(bt=new he,B[G.pointerId]=bt),bt.set(G.pageX,G.pageY)}function Ft(G){const bt=G.pointerId===C[0].pointerId?C[1]:C[0];return B[bt.pointerId]}n.domElement.addEventListener("contextmenu",ft),n.domElement.addEventListener("pointerdown",Ct),n.domElement.addEventListener("pointercancel",Et),n.domElement.addEventListener("wheel",L,{passive:!1}),this.update()}}function um(i){if(!(typeof window>"u")){var t=document.createElement("style");return t.setAttribute("type","text/css"),t.innerHTML=i,document.head.appendChild(t),i}}function Ri(i,t){var e=i.__state.conversionName.toString(),n=Math.round(i.r),r=Math.round(i.g),s=Math.round(i.b),o=i.a,a=Math.round(i.h),l=i.s.toFixed(1),u=i.v.toFixed(1);if(t||e==="THREE_CHAR_HEX"||e==="SIX_CHAR_HEX"){for(var h=i.hex.toString(16);h.length<6;)h="0"+h;return"#"+h}else{if(e==="CSS_RGB")return"rgb("+n+","+r+","+s+")";if(e==="CSS_RGBA")return"rgba("+n+","+r+","+s+","+o+")";if(e==="HEX")return"0x"+i.hex.toString(16);if(e==="RGB_ARRAY")return"["+n+","+r+","+s+"]";if(e==="RGBA_ARRAY")return"["+n+","+r+","+s+","+o+"]";if(e==="RGB_OBJ")return"{r:"+n+",g:"+r+",b:"+s+"}";if(e==="RGBA_OBJ")return"{r:"+n+",g:"+r+",b:"+s+",a:"+o+"}";if(e==="HSV_OBJ")return"{h:"+a+",s:"+l+",v:"+u+"}";if(e==="HSVA_OBJ")return"{h:"+a+",s:"+l+",v:"+u+",a:"+o+"}"}return"unknown format"}var Na=Array.prototype.forEach,Xi=Array.prototype.slice,yt={BREAK:{},extend:function(t){return this.each(Xi.call(arguments,1),function(e){var n=this.isObject(e)?Object.keys(e):[];n.forEach((function(r){this.isUndefined(e[r])||(t[r]=e[r])}).bind(this))},this),t},defaults:function(t){return this.each(Xi.call(arguments,1),function(e){var n=this.isObject(e)?Object.keys(e):[];n.forEach((function(r){this.isUndefined(t[r])&&(t[r]=e[r])}).bind(this))},this),t},compose:function(){var t=Xi.call(arguments);return function(){for(var e=Xi.call(arguments),n=t.length-1;n>=0;n--)e=[t[n].apply(this,e)];return e[0]}},each:function(t,e,n){if(t){if(Na&&t.forEach&&t.forEach===Na)t.forEach(e,n);else if(t.length===t.length+0){var r=void 0,s=void 0;for(r=0,s=t.length;r<s;r++)if(r in t&&e.call(n,t[r],r)===this.BREAK)return}else for(var o in t)if(e.call(n,t[o],o)===this.BREAK)return}},defer:function(t){setTimeout(t,0)},debounce:function(t,e,n){var r=void 0;return function(){var s=this,o=arguments;function a(){r=null,n||t.apply(s,o)}var l=n||!r;clearTimeout(r),r=setTimeout(a,e),l&&t.apply(s,o)}},toArray:function(t){return t.toArray?t.toArray():Xi.call(t)},isUndefined:function(t){return t===void 0},isNull:function(t){return t===null},isNaN:function(i){function t(e){return i.apply(this,arguments)}return t.toString=function(){return i.toString()},t}(function(i){return isNaN(i)}),isArray:Array.isArray||function(i){return i.constructor===Array},isObject:function(t){return t===Object(t)},isNumber:function(t){return t===t+0},isString:function(t){return t===t+""},isBoolean:function(t){return t===!1||t===!0},isFunction:function(t){return t instanceof Function}},dm=[{litmus:yt.isString,conversions:{THREE_CHAR_HEX:{read:function(t){var e=t.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return e===null?!1:{space:"HEX",hex:parseInt("0x"+e[1].toString()+e[1].toString()+e[2].toString()+e[2].toString()+e[3].toString()+e[3].toString(),0)}},write:Ri},SIX_CHAR_HEX:{read:function(t){var e=t.match(/^#([A-F0-9]{6})$/i);return e===null?!1:{space:"HEX",hex:parseInt("0x"+e[1].toString(),0)}},write:Ri},CSS_RGB:{read:function(t){var e=t.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return e===null?!1:{space:"RGB",r:parseFloat(e[1]),g:parseFloat(e[2]),b:parseFloat(e[3])}},write:Ri},CSS_RGBA:{read:function(t){var e=t.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return e===null?!1:{space:"RGB",r:parseFloat(e[1]),g:parseFloat(e[2]),b:parseFloat(e[3]),a:parseFloat(e[4])}},write:Ri}}},{litmus:yt.isNumber,conversions:{HEX:{read:function(t){return{space:"HEX",hex:t,conversionName:"HEX"}},write:function(t){return t.hex}}}},{litmus:yt.isArray,conversions:{RGB_ARRAY:{read:function(t){return t.length!==3?!1:{space:"RGB",r:t[0],g:t[1],b:t[2]}},write:function(t){return[t.r,t.g,t.b]}},RGBA_ARRAY:{read:function(t){return t.length!==4?!1:{space:"RGB",r:t[0],g:t[1],b:t[2],a:t[3]}},write:function(t){return[t.r,t.g,t.b,t.a]}}}},{litmus:yt.isObject,conversions:{RGBA_OBJ:{read:function(t){return yt.isNumber(t.r)&&yt.isNumber(t.g)&&yt.isNumber(t.b)&&yt.isNumber(t.a)?{space:"RGB",r:t.r,g:t.g,b:t.b,a:t.a}:!1},write:function(t){return{r:t.r,g:t.g,b:t.b,a:t.a}}},RGB_OBJ:{read:function(t){return yt.isNumber(t.r)&&yt.isNumber(t.g)&&yt.isNumber(t.b)?{space:"RGB",r:t.r,g:t.g,b:t.b}:!1},write:function(t){return{r:t.r,g:t.g,b:t.b}}},HSVA_OBJ:{read:function(t){return yt.isNumber(t.h)&&yt.isNumber(t.s)&&yt.isNumber(t.v)&&yt.isNumber(t.a)?{space:"HSV",h:t.h,s:t.s,v:t.v,a:t.a}:!1},write:function(t){return{h:t.h,s:t.s,v:t.v,a:t.a}}},HSV_OBJ:{read:function(t){return yt.isNumber(t.h)&&yt.isNumber(t.s)&&yt.isNumber(t.v)?{space:"HSV",h:t.h,s:t.s,v:t.v}:!1},write:function(t){return{h:t.h,s:t.s,v:t.v}}}}}],qi=void 0,Ir=void 0,Wr=function(){Ir=!1;var t=arguments.length>1?yt.toArray(arguments):arguments[0];return yt.each(dm,function(e){if(e.litmus(t))return yt.each(e.conversions,function(n,r){if(qi=n.read(t),Ir===!1&&qi!==!1)return Ir=qi,qi.conversionName=r,qi.conversion=n,yt.BREAK}),yt.BREAK}),Ir},Ua=void 0,ir={hsv_to_rgb:function(t,e,n){var r=Math.floor(t/60)%6,s=t/60-Math.floor(t/60),o=n*(1-e),a=n*(1-s*e),l=n*(1-(1-s)*e),u=[[n,l,o],[a,n,o],[o,n,l],[o,a,n],[l,o,n],[n,o,a]][r];return{r:u[0]*255,g:u[1]*255,b:u[2]*255}},rgb_to_hsv:function(t,e,n){var r=Math.min(t,e,n),s=Math.max(t,e,n),o=s-r,a=void 0,l=void 0;if(s!==0)l=o/s;else return{h:NaN,s:0,v:0};return t===s?a=(e-n)/o:e===s?a=2+(n-t)/o:a=4+(t-e)/o,a/=6,a<0&&(a+=1),{h:a*360,s:l,v:s/255}},rgb_to_hex:function(t,e,n){var r=this.hex_with_component(0,2,t);return r=this.hex_with_component(r,1,e),r=this.hex_with_component(r,0,n),r},component_from_hex:function(t,e){return t>>e*8&255},hex_with_component:function(t,e,n){return n<<(Ua=e*8)|t&~(255<<Ua)}},fm=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},fn=function(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")},pn=function(){function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}}(),kn=function i(t,e,n){t===null&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,e);if(r===void 0){var s=Object.getPrototypeOf(t);return s===null?void 0:i(s,e,n)}else{if("value"in r)return r.value;var o=r.get;return o===void 0?void 0:o.call(n)}},Wn=function(i,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);i.prototype=Object.create(t&&t.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(i,t):i.__proto__=t)},Xn=function(i,t){if(!i)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:i},De=function(){function i(){if(fn(this,i),this.__state=Wr.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return pn(i,[{key:"toString",value:function(){return Ri(this)}},{key:"toHexString",value:function(){return Ri(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),i}();function to(i,t,e){Object.defineProperty(i,t,{get:function(){return this.__state.space==="RGB"?this.__state[t]:(De.recalculateRGB(this,t,e),this.__state[t])},set:function(r){this.__state.space!=="RGB"&&(De.recalculateRGB(this,t,e),this.__state.space="RGB"),this.__state[t]=r}})}function eo(i,t){Object.defineProperty(i,t,{get:function(){return this.__state.space==="HSV"?this.__state[t]:(De.recalculateHSV(this),this.__state[t])},set:function(n){this.__state.space!=="HSV"&&(De.recalculateHSV(this),this.__state.space="HSV"),this.__state[t]=n}})}De.recalculateRGB=function(i,t,e){if(i.__state.space==="HEX")i.__state[t]=ir.component_from_hex(i.__state.hex,e);else if(i.__state.space==="HSV")yt.extend(i.__state,ir.hsv_to_rgb(i.__state.h,i.__state.s,i.__state.v));else throw new Error("Corrupted color state")};De.recalculateHSV=function(i){var t=ir.rgb_to_hsv(i.r,i.g,i.b);yt.extend(i.__state,{s:t.s,v:t.v}),yt.isNaN(t.h)?yt.isUndefined(i.__state.h)&&(i.__state.h=0):i.__state.h=t.h};De.COMPONENTS=["r","g","b","h","s","v","hex","a"];to(De.prototype,"r",2);to(De.prototype,"g",1);to(De.prototype,"b",0);eo(De.prototype,"h");eo(De.prototype,"s");eo(De.prototype,"v");Object.defineProperty(De.prototype,"a",{get:function(){return this.__state.a},set:function(t){this.__state.a=t}});Object.defineProperty(De.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=ir.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(t){this.__state.space="HEX",this.__state.hex=t}});var qn=function(){function i(t,e){fn(this,i),this.initialValue=t[e],this.domElement=document.createElement("div"),this.object=t,this.property=e,this.__onChange=void 0,this.__onFinishChange=void 0}return pn(i,[{key:"onChange",value:function(e){return this.__onChange=e,this}},{key:"onFinishChange",value:function(e){return this.__onFinishChange=e,this}},{key:"setValue",value:function(e){return this.object[this.property]=e,this.__onChange&&this.__onChange.call(this,e),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),i}(),pm={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},El={};yt.each(pm,function(i,t){yt.each(i,function(e){El[e]=t})});var mm=/(\d+(\.\d+)?)px/;function mn(i){if(i==="0"||yt.isUndefined(i))return 0;var t=i.match(mm);return yt.isNull(t)?0:parseFloat(t[1])}var st={makeSelectable:function(t,e){t===void 0||t.style===void 0||(t.onselectstart=e?function(){return!1}:function(){},t.style.MozUserSelect=e?"auto":"none",t.style.KhtmlUserSelect=e?"auto":"none",t.unselectable=e?"on":"off")},makeFullscreen:function(t,e,n){var r=n,s=e;yt.isUndefined(s)&&(s=!0),yt.isUndefined(r)&&(r=!0),t.style.position="absolute",s&&(t.style.left=0,t.style.right=0),r&&(t.style.top=0,t.style.bottom=0)},fakeEvent:function(t,e,n,r){var s=n||{},o=El[e];if(!o)throw new Error("Event type "+e+" not supported.");var a=document.createEvent(o);switch(o){case"MouseEvents":{var l=s.x||s.clientX||0,u=s.y||s.clientY||0;a.initMouseEvent(e,s.bubbles||!1,s.cancelable||!0,window,s.clickCount||1,0,0,l,u,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var h=a.initKeyboardEvent||a.initKeyEvent;yt.defaults(s,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),h(e,s.bubbles||!1,s.cancelable,window,s.ctrlKey,s.altKey,s.shiftKey,s.metaKey,s.keyCode,s.charCode);break}default:{a.initEvent(e,s.bubbles||!1,s.cancelable||!0);break}}yt.defaults(a,r),t.dispatchEvent(a)},bind:function(t,e,n,r){var s=r||!1;return t.addEventListener?t.addEventListener(e,n,s):t.attachEvent&&t.attachEvent("on"+e,n),st},unbind:function(t,e,n,r){var s=r||!1;return t.removeEventListener?t.removeEventListener(e,n,s):t.detachEvent&&t.detachEvent("on"+e,n),st},addClass:function(t,e){if(t.className===void 0)t.className=e;else if(t.className!==e){var n=t.className.split(/ +/);n.indexOf(e)===-1&&(n.push(e),t.className=n.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return st},removeClass:function(t,e){if(e)if(t.className===e)t.removeAttribute("class");else{var n=t.className.split(/ +/),r=n.indexOf(e);r!==-1&&(n.splice(r,1),t.className=n.join(" "))}else t.className=void 0;return st},hasClass:function(t,e){return new RegExp("(?:^|\\s+)"+e+"(?:\\s+|$)").test(t.className)||!1},getWidth:function(t){var e=getComputedStyle(t);return mn(e["border-left-width"])+mn(e["border-right-width"])+mn(e["padding-left"])+mn(e["padding-right"])+mn(e.width)},getHeight:function(t){var e=getComputedStyle(t);return mn(e["border-top-width"])+mn(e["border-bottom-width"])+mn(e["padding-top"])+mn(e["padding-bottom"])+mn(e.height)},getOffset:function(t){var e=t,n={left:0,top:0};if(e.offsetParent)do n.left+=e.offsetLeft,n.top+=e.offsetTop,e=e.offsetParent;while(e);return n},isActive:function(t){return t===document.activeElement&&(t.type||t.href)}},no=function(i){Wn(t,i);function t(e,n){fn(this,t);var r=Xn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n)),s=r;r.__prev=r.getValue(),r.__checkbox=document.createElement("input"),r.__checkbox.setAttribute("type","checkbox");function o(){s.setValue(!s.__prev)}return st.bind(r.__checkbox,"change",o,!1),r.domElement.appendChild(r.__checkbox),r.updateDisplay(),r}return pn(t,[{key:"setValue",value:function(n){var r=kn(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),r}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),kn(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this)}}]),t}(qn),bl=function(i){Wn(t,i);function t(e,n,r){fn(this,t);var s=Xn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n)),o=r,a=s;if(s.__select=document.createElement("select"),yt.isArray(o)){var l={};yt.each(o,function(u){l[u]=u}),o=l}return yt.each(o,function(u,h){var c=document.createElement("option");c.innerHTML=h,c.setAttribute("value",u),a.__select.appendChild(c)}),s.updateDisplay(),st.bind(s.__select,"change",function(){var u=this.options[this.selectedIndex].value;a.setValue(u)}),s.domElement.appendChild(s.__select),s}return pn(t,[{key:"setValue",value:function(n){var r=kn(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),r}},{key:"updateDisplay",value:function(){return st.isActive(this.__select)?this:(this.__select.value=this.getValue(),kn(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this))}}]),t}(qn),wl=function(i){Wn(t,i);function t(e,n){fn(this,t);var r=Xn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n)),s=r;function o(){s.setValue(s.__input.value)}function a(){s.__onFinishChange&&s.__onFinishChange.call(s,s.getValue())}return r.__input=document.createElement("input"),r.__input.setAttribute("type","text"),st.bind(r.__input,"keyup",o),st.bind(r.__input,"change",o),st.bind(r.__input,"blur",a),st.bind(r.__input,"keydown",function(l){l.keyCode===13&&this.blur()}),r.updateDisplay(),r.domElement.appendChild(r.__input),r}return pn(t,[{key:"updateDisplay",value:function(){return st.isActive(this.__input)||(this.__input.value=this.getValue()),kn(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this)}}]),t}(qn);function Fa(i){var t=i.toString();return t.indexOf(".")>-1?t.length-t.indexOf(".")-1:0}var io=function(i){Wn(t,i);function t(e,n,r){fn(this,t);var s=Xn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n)),o=r||{};return s.__min=o.min,s.__max=o.max,s.__step=o.step,yt.isUndefined(s.__step)?s.initialValue===0?s.__impliedStep=1:s.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(s.initialValue))/Math.LN10))/10:s.__impliedStep=s.__step,s.__precision=Fa(s.__impliedStep),s}return pn(t,[{key:"setValue",value:function(n){var r=n;return this.__min!==void 0&&r<this.__min?r=this.__min:this.__max!==void 0&&r>this.__max&&(r=this.__max),this.__step!==void 0&&r%this.__step!==0&&(r=Math.round(r/this.__step)*this.__step),kn(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"setValue",this).call(this,r)}},{key:"min",value:function(n){return this.__min=n,this}},{key:"max",value:function(n){return this.__max=n,this}},{key:"step",value:function(n){return this.__step=n,this.__impliedStep=n,this.__precision=Fa(n),this}}]),t}(qn);function vm(i,t){var e=Math.pow(10,t);return Math.round(i*e)/e}var rr=function(i){Wn(t,i);function t(e,n,r){fn(this,t);var s=Xn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n,r));s.__truncationSuspended=!1;var o=s,a=void 0;function l(){var v=parseFloat(o.__input.value);yt.isNaN(v)||o.setValue(v)}function u(){o.__onFinishChange&&o.__onFinishChange.call(o,o.getValue())}function h(){u()}function c(v){var g=a-v.clientY;o.setValue(o.getValue()+g*o.__impliedStep),a=v.clientY}function d(){st.unbind(window,"mousemove",c),st.unbind(window,"mouseup",d),u()}function p(v){st.bind(window,"mousemove",c),st.bind(window,"mouseup",d),a=v.clientY}return s.__input=document.createElement("input"),s.__input.setAttribute("type","text"),st.bind(s.__input,"change",l),st.bind(s.__input,"blur",h),st.bind(s.__input,"mousedown",p),st.bind(s.__input,"keydown",function(v){v.keyCode===13&&(o.__truncationSuspended=!0,this.blur(),o.__truncationSuspended=!1,u())}),s.updateDisplay(),s.domElement.appendChild(s.__input),s}return pn(t,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():vm(this.getValue(),this.__precision),kn(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this)}}]),t}(io);function Ba(i,t,e,n,r){return n+(r-n)*((i-t)/(e-t))}var Xr=function(i){Wn(t,i);function t(e,n,r,s,o){fn(this,t);var a=Xn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n,{min:r,max:s,step:o})),l=a;a.__background=document.createElement("div"),a.__foreground=document.createElement("div"),st.bind(a.__background,"mousedown",u),st.bind(a.__background,"touchstart",d),st.addClass(a.__background,"slider"),st.addClass(a.__foreground,"slider-fg");function u(g){document.activeElement.blur(),st.bind(window,"mousemove",h),st.bind(window,"mouseup",c),h(g)}function h(g){g.preventDefault();var m=l.__background.getBoundingClientRect();return l.setValue(Ba(g.clientX,m.left,m.right,l.__min,l.__max)),!1}function c(){st.unbind(window,"mousemove",h),st.unbind(window,"mouseup",c),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function d(g){g.touches.length===1&&(st.bind(window,"touchmove",p),st.bind(window,"touchend",v),p(g))}function p(g){var m=g.touches[0].clientX,f=l.__background.getBoundingClientRect();l.setValue(Ba(m,f.left,f.right,l.__min,l.__max))}function v(){st.unbind(window,"touchmove",p),st.unbind(window,"touchend",v),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}return a.updateDisplay(),a.__background.appendChild(a.__foreground),a.domElement.appendChild(a.__background),a}return pn(t,[{key:"updateDisplay",value:function(){var n=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=n*100+"%",kn(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this)}}]),t}(io),ro=function(i){Wn(t,i);function t(e,n,r){fn(this,t);var s=Xn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n)),o=s;return s.__button=document.createElement("div"),s.__button.innerHTML=r===void 0?"Fire":r,st.bind(s.__button,"click",function(a){return a.preventDefault(),o.fire(),!1}),st.addClass(s.__button,"button"),s.domElement.appendChild(s.__button),s}return pn(t,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),t}(qn),qr=function(i){Wn(t,i);function t(e,n){fn(this,t);var r=Xn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));r.__color=new De(r.getValue()),r.__temp=new De(0);var s=r;r.domElement=document.createElement("div"),st.makeSelectable(r.domElement,!1),r.__selector=document.createElement("div"),r.__selector.className="selector",r.__saturation_field=document.createElement("div"),r.__saturation_field.className="saturation-field",r.__field_knob=document.createElement("div"),r.__field_knob.className="field-knob",r.__field_knob_border="2px solid ",r.__hue_knob=document.createElement("div"),r.__hue_knob.className="hue-knob",r.__hue_field=document.createElement("div"),r.__hue_field.className="hue-field",r.__input=document.createElement("input"),r.__input.type="text",r.__input_textShadow="0 1px 1px ",st.bind(r.__input,"keydown",function(g){g.keyCode===13&&c.call(this)}),st.bind(r.__input,"blur",c),st.bind(r.__selector,"mousedown",function(){st.addClass(this,"drag").bind(window,"mouseup",function(){st.removeClass(s.__selector,"drag")})}),st.bind(r.__selector,"touchstart",function(){st.addClass(this,"drag").bind(window,"touchend",function(){st.removeClass(s.__selector,"drag")})});var o=document.createElement("div");yt.extend(r.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),yt.extend(r.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:r.__field_knob_border+(r.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),yt.extend(r.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),yt.extend(r.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),yt.extend(o.style,{width:"100%",height:"100%",background:"none"}),Oa(o,"top","rgba(0,0,0,0)","#000"),yt.extend(r.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),_m(r.__hue_field),yt.extend(r.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:r.__input_textShadow+"rgba(0,0,0,0.7)"}),st.bind(r.__saturation_field,"mousedown",a),st.bind(r.__saturation_field,"touchstart",a),st.bind(r.__field_knob,"mousedown",a),st.bind(r.__field_knob,"touchstart",a),st.bind(r.__hue_field,"mousedown",l),st.bind(r.__hue_field,"touchstart",l);function a(g){p(g),st.bind(window,"mousemove",p),st.bind(window,"touchmove",p),st.bind(window,"mouseup",u),st.bind(window,"touchend",u)}function l(g){v(g),st.bind(window,"mousemove",v),st.bind(window,"touchmove",v),st.bind(window,"mouseup",h),st.bind(window,"touchend",h)}function u(){st.unbind(window,"mousemove",p),st.unbind(window,"touchmove",p),st.unbind(window,"mouseup",u),st.unbind(window,"touchend",u),d()}function h(){st.unbind(window,"mousemove",v),st.unbind(window,"touchmove",v),st.unbind(window,"mouseup",h),st.unbind(window,"touchend",h),d()}function c(){var g=Wr(this.value);g!==!1?(s.__color.__state=g,s.setValue(s.__color.toOriginal())):this.value=s.__color.toString()}function d(){s.__onFinishChange&&s.__onFinishChange.call(s,s.__color.toOriginal())}r.__saturation_field.appendChild(o),r.__selector.appendChild(r.__field_knob),r.__selector.appendChild(r.__saturation_field),r.__selector.appendChild(r.__hue_field),r.__hue_field.appendChild(r.__hue_knob),r.domElement.appendChild(r.__input),r.domElement.appendChild(r.__selector),r.updateDisplay();function p(g){g.type.indexOf("touch")===-1&&g.preventDefault();var m=s.__saturation_field.getBoundingClientRect(),f=g.touches&&g.touches[0]||g,y=f.clientX,x=f.clientY,_=(y-m.left)/(m.right-m.left),M=1-(x-m.top)/(m.bottom-m.top);return M>1?M=1:M<0&&(M=0),_>1?_=1:_<0&&(_=0),s.__color.v=M,s.__color.s=_,s.setValue(s.__color.toOriginal()),!1}function v(g){g.type.indexOf("touch")===-1&&g.preventDefault();var m=s.__hue_field.getBoundingClientRect(),f=g.touches&&g.touches[0]||g,y=f.clientY,x=1-(y-m.top)/(m.bottom-m.top);return x>1?x=1:x<0&&(x=0),s.__color.h=x*360,s.setValue(s.__color.toOriginal()),!1}return r}return pn(t,[{key:"updateDisplay",value:function(){var n=Wr(this.getValue());if(n!==!1){var r=!1;yt.each(De.COMPONENTS,function(a){if(!yt.isUndefined(n[a])&&!yt.isUndefined(this.__color.__state[a])&&n[a]!==this.__color.__state[a])return r=!0,{}},this),r&&yt.extend(this.__color.__state,n)}yt.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var s=this.__color.v<.5||this.__color.s>.5?255:0,o=255-s;yt.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+s+","+s+","+s+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,Oa(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),yt.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+s+","+s+","+s+")",textShadow:this.__input_textShadow+"rgba("+o+","+o+","+o+",.7)"})}}]),t}(qn),gm=["-moz-","-o-","-webkit-","-ms-",""];function Oa(i,t,e,n){i.style.background="",yt.each(gm,function(r){i.style.cssText+="background: "+r+"linear-gradient("+t+", "+e+" 0%, "+n+" 100%); "})}function _m(i){i.style.background="",i.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",i.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",i.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",i.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",i.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var ym={load:function(t,e){var n=e||document,r=n.createElement("link");r.type="text/css",r.rel="stylesheet",r.href=t,n.getElementsByTagName("head")[0].appendChild(r)},inject:function(t,e){var n=e||document,r=document.createElement("style");r.type="text/css",r.innerHTML=t;var s=n.getElementsByTagName("head")[0];try{s.appendChild(r)}catch{}}},xm=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,Sm=function(t,e){var n=t[e];return yt.isArray(arguments[2])||yt.isObject(arguments[2])?new bl(t,e,arguments[2]):yt.isNumber(n)?yt.isNumber(arguments[2])&&yt.isNumber(arguments[3])?yt.isNumber(arguments[4])?new Xr(t,e,arguments[2],arguments[3],arguments[4]):new Xr(t,e,arguments[2],arguments[3]):yt.isNumber(arguments[4])?new rr(t,e,{min:arguments[2],max:arguments[3],step:arguments[4]}):new rr(t,e,{min:arguments[2],max:arguments[3]}):yt.isString(n)?new wl(t,e):yt.isFunction(n)?new ro(t,e,""):yt.isBoolean(n)?new no(t,e):null};function Mm(i){setTimeout(i,1e3/60)}var Em=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||Mm,bm=function(){function i(){fn(this,i),this.backgroundElement=document.createElement("div"),yt.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),st.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),yt.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var t=this;st.bind(this.backgroundElement,"click",function(){t.hide()})}return pn(i,[{key:"show",value:function(){var e=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),yt.defer(function(){e.backgroundElement.style.opacity=1,e.domElement.style.opacity=1,e.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var e=this,n=function r(){e.domElement.style.display="none",e.backgroundElement.style.display="none",st.unbind(e.domElement,"webkitTransitionEnd",r),st.unbind(e.domElement,"transitionend",r),st.unbind(e.domElement,"oTransitionEnd",r)};st.bind(this.domElement,"webkitTransitionEnd",n),st.bind(this.domElement,"transitionend",n),st.bind(this.domElement,"oTransitionEnd",n),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-st.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-st.getHeight(this.domElement)/2+"px"}}]),i}(),wm=um(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);ym.inject(wm);var za="dg",Va=72,Ha=20,sr="Default",Ki=function(){try{return!!window.localStorage}catch{return!1}}(),Ji=void 0,ka=!0,Ti=void 0,Ps=!1,Tl=[],Se=function i(t){var e=this,n=t||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),st.addClass(this.domElement,za),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],n=yt.defaults(n,{closeOnTop:!1,autoPlace:!0,width:i.DEFAULT_WIDTH}),n=yt.defaults(n,{resizable:n.autoPlace,hideable:n.autoPlace}),yt.isUndefined(n.load)?n.load={preset:sr}:n.preset&&(n.load.preset=n.preset),yt.isUndefined(n.parent)&&n.hideable&&Tl.push(this),n.resizable=yt.isUndefined(n.parent)&&n.resizable,n.autoPlace&&yt.isUndefined(n.scrollable)&&(n.scrollable=!0);var r=Ki&&localStorage.getItem(Ai(this,"isLocal"))==="true",s=void 0,o=void 0;if(Object.defineProperties(this,{parent:{get:function(){return n.parent}},scrollable:{get:function(){return n.scrollable}},autoPlace:{get:function(){return n.autoPlace}},closeOnTop:{get:function(){return n.closeOnTop}},preset:{get:function(){return e.parent?e.getRoot().preset:n.load.preset},set:function(d){e.parent?e.getRoot().preset=d:n.load.preset=d,Rm(this),e.revert()}},width:{get:function(){return n.width},set:function(d){n.width=d,ks(e,d)}},name:{get:function(){return n.name},set:function(d){n.name=d,o&&(o.innerHTML=n.name)}},closed:{get:function(){return n.closed},set:function(d){n.closed=d,n.closed?st.addClass(e.__ul,i.CLASS_CLOSED):st.removeClass(e.__ul,i.CLASS_CLOSED),this.onResize(),e.__closeButton&&(e.__closeButton.innerHTML=d?i.TEXT_OPEN:i.TEXT_CLOSED)}},load:{get:function(){return n.load}},useLocalStorage:{get:function(){return r},set:function(d){Ki&&(r=d,d?st.bind(window,"unload",s):st.unbind(window,"unload",s),localStorage.setItem(Ai(e,"isLocal"),d))}}}),yt.isUndefined(n.parent)){if(this.closed=n.closed||!1,st.addClass(this.domElement,i.CLASS_MAIN),st.makeSelectable(this.domElement,!1),Ki&&r){e.useLocalStorage=!0;var a=localStorage.getItem(Ai(this,"gui"));a&&(n.load=JSON.parse(a))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=i.TEXT_CLOSED,st.addClass(this.__closeButton,i.CLASS_CLOSE_BUTTON),n.closeOnTop?(st.addClass(this.__closeButton,i.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(st.addClass(this.__closeButton,i.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),st.bind(this.__closeButton,"click",function(){e.closed=!e.closed})}else{n.closed===void 0&&(n.closed=!0);var l=document.createTextNode(n.name);st.addClass(l,"controller-name"),o=so(e,l);var u=function(d){return d.preventDefault(),e.closed=!e.closed,!1};st.addClass(this.__ul,i.CLASS_CLOSED),st.addClass(o,"title"),st.bind(o,"click",u),n.closed||(this.closed=!1)}n.autoPlace&&(yt.isUndefined(n.parent)&&(ka&&(Ti=document.createElement("div"),st.addClass(Ti,za),st.addClass(Ti,i.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(Ti),ka=!1),Ti.appendChild(this.domElement),st.addClass(this.domElement,i.CLASS_AUTO_PLACE)),this.parent||ks(e,n.width)),this.__resizeHandler=function(){e.onResizeDebounced()},st.bind(window,"resize",this.__resizeHandler),st.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),st.bind(this.__ul,"transitionend",this.__resizeHandler),st.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),n.resizable&&Cm(this),s=function(){Ki&&localStorage.getItem(Ai(e,"isLocal"))==="true"&&localStorage.setItem(Ai(e,"gui"),JSON.stringify(e.getSaveObject()))},this.saveToLocalStorageIfPossible=s;function h(){var c=e.getRoot();c.width+=1,yt.defer(function(){c.width-=1})}n.parent||h()};Se.toggleHide=function(){Ps=!Ps,yt.each(Tl,function(i){i.domElement.style.display=Ps?"none":""})};Se.CLASS_AUTO_PLACE="a";Se.CLASS_AUTO_PLACE_CONTAINER="ac";Se.CLASS_MAIN="main";Se.CLASS_CONTROLLER_ROW="cr";Se.CLASS_TOO_TALL="taller-than-window";Se.CLASS_CLOSED="closed";Se.CLASS_CLOSE_BUTTON="close-button";Se.CLASS_CLOSE_TOP="close-top";Se.CLASS_CLOSE_BOTTOM="close-bottom";Se.CLASS_DRAG="drag";Se.DEFAULT_WIDTH=245;Se.TEXT_CLOSED="Close Controls";Se.TEXT_OPEN="Open Controls";Se._keydownHandler=function(i){document.activeElement.type!=="text"&&(i.which===Va||i.keyCode===Va)&&Se.toggleHide()};st.bind(window,"keydown",Se._keydownHandler,!1);yt.extend(Se.prototype,{add:function(t,e){return tr(this,t,e,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(t,e){return tr(this,t,e,{color:!0})},remove:function(t){this.__ul.removeChild(t.__li),this.__controllers.splice(this.__controllers.indexOf(t),1);var e=this;yt.defer(function(){e.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&Ti.removeChild(this.domElement);var t=this;yt.each(this.__folders,function(e){t.removeFolder(e)}),st.unbind(window,"keydown",Se._keydownHandler,!1),Ga(this)},addFolder:function(t){if(this.__folders[t]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+t+'"');var e={name:t,parent:this};e.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[t]&&(e.closed=this.load.folders[t].closed,e.load=this.load.folders[t]);var n=new Se(e);this.__folders[t]=n;var r=so(this,n.domElement);return st.addClass(r,"folder"),n},removeFolder:function(t){this.__ul.removeChild(t.domElement.parentElement),delete this.__folders[t.name],this.load&&this.load.folders&&this.load.folders[t.name]&&delete this.load.folders[t.name],Ga(t);var e=this;yt.each(t.__folders,function(n){t.removeFolder(n)}),yt.defer(function(){e.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var t=this.getRoot();if(t.scrollable){var e=st.getOffset(t.__ul).top,n=0;yt.each(t.__ul.childNodes,function(r){t.autoPlace&&r===t.__save_row||(n+=st.getHeight(r))}),window.innerHeight-e-Ha<n?(st.addClass(t.domElement,Se.CLASS_TOO_TALL),t.__ul.style.height=window.innerHeight-e-Ha+"px"):(st.removeClass(t.domElement,Se.CLASS_TOO_TALL),t.__ul.style.height="auto")}t.__resize_handle&&yt.defer(function(){t.__resize_handle.style.height=t.__ul.offsetHeight+"px"}),t.__closeButton&&(t.__closeButton.style.width=t.width+"px")},onResizeDebounced:yt.debounce(function(){this.onResize()},50),remember:function(){if(yt.isUndefined(Ji)&&(Ji=new bm,Ji.domElement.innerHTML=xm),this.parent)throw new Error("You can only call remember on a top level GUI.");var t=this;yt.each(Array.prototype.slice.call(arguments),function(e){t.__rememberedObjects.length===0&&Am(t),t.__rememberedObjects.indexOf(e)===-1&&t.__rememberedObjects.push(e)}),this.autoPlace&&ks(this,this.width)},getRoot:function(){for(var t=this;t.parent;)t=t.parent;return t},getSaveObject:function(){var t=this.load;return t.closed=this.closed,this.__rememberedObjects.length>0&&(t.preset=this.preset,t.remembered||(t.remembered={}),t.remembered[this.preset]=Dr(this)),t.folders={},yt.each(this.__folders,function(e,n){t.folders[n]=e.getSaveObject()}),t},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=Dr(this),Vs(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(t){this.load.remembered||(this.load.remembered={},this.load.remembered[sr]=Dr(this,!0)),this.load.remembered[t]=Dr(this),this.preset=t,Hs(this,t,!0),this.saveToLocalStorageIfPossible()},revert:function(t){yt.each(this.__controllers,function(e){this.getRoot().load.remembered?Al(t||this.getRoot(),e):e.setValue(e.initialValue),e.__onFinishChange&&e.__onFinishChange.call(e,e.getValue())},this),yt.each(this.__folders,function(e){e.revert(e)}),t||Vs(this.getRoot(),!1)},listen:function(t){var e=this.__listening.length===0;this.__listening.push(t),e&&Cl(this.__listening)},updateDisplay:function(){yt.each(this.__controllers,function(t){t.updateDisplay()}),yt.each(this.__folders,function(t){t.updateDisplay()})}});function so(i,t,e){var n=document.createElement("li");return t&&n.appendChild(t),e?i.__ul.insertBefore(n,e):i.__ul.appendChild(n),i.onResize(),n}function Ga(i){st.unbind(window,"resize",i.__resizeHandler),i.saveToLocalStorageIfPossible&&st.unbind(window,"unload",i.saveToLocalStorageIfPossible)}function Vs(i,t){var e=i.__preset_select[i.__preset_select.selectedIndex];t?e.innerHTML=e.value+"*":e.innerHTML=e.value}function Tm(i,t,e){if(e.__li=t,e.__gui=i,yt.extend(e,{options:function(o){if(arguments.length>1){var a=e.__li.nextElementSibling;return e.remove(),tr(i,e.object,e.property,{before:a,factoryArgs:[yt.toArray(arguments)]})}if(yt.isArray(o)||yt.isObject(o)){var l=e.__li.nextElementSibling;return e.remove(),tr(i,e.object,e.property,{before:l,factoryArgs:[o]})}},name:function(o){return e.__li.firstElementChild.firstElementChild.innerHTML=o,e},listen:function(){return e.__gui.listen(e),e},remove:function(){return e.__gui.remove(e),e}}),e instanceof Xr){var n=new rr(e.object,e.property,{min:e.__min,max:e.__max,step:e.__step});yt.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(s){var o=e[s],a=n[s];e[s]=n[s]=function(){var l=Array.prototype.slice.call(arguments);return a.apply(n,l),o.apply(e,l)}}),st.addClass(t,"has-slider"),e.domElement.insertBefore(n.domElement,e.domElement.firstElementChild)}else if(e instanceof rr){var r=function(o){if(yt.isNumber(e.__min)&&yt.isNumber(e.__max)){var a=e.__li.firstElementChild.firstElementChild.innerHTML,l=e.__gui.__listening.indexOf(e)>-1;e.remove();var u=tr(i,e.object,e.property,{before:e.__li.nextElementSibling,factoryArgs:[e.__min,e.__max,e.__step]});return u.name(a),l&&u.listen(),u}return o};e.min=yt.compose(r,e.min),e.max=yt.compose(r,e.max)}else e instanceof no?(st.bind(t,"click",function(){st.fakeEvent(e.__checkbox,"click")}),st.bind(e.__checkbox,"click",function(s){s.stopPropagation()})):e instanceof ro?(st.bind(t,"click",function(){st.fakeEvent(e.__button,"click")}),st.bind(t,"mouseover",function(){st.addClass(e.__button,"hover")}),st.bind(t,"mouseout",function(){st.removeClass(e.__button,"hover")})):e instanceof qr&&(st.addClass(t,"color"),e.updateDisplay=yt.compose(function(s){return t.style.borderLeftColor=e.__color.toString(),s},e.updateDisplay),e.updateDisplay());e.setValue=yt.compose(function(s){return i.getRoot().__preset_select&&e.isModified()&&Vs(i.getRoot(),!0),s},e.setValue)}function Al(i,t){var e=i.getRoot(),n=e.__rememberedObjects.indexOf(t.object);if(n!==-1){var r=e.__rememberedObjectIndecesToControllers[n];if(r===void 0&&(r={},e.__rememberedObjectIndecesToControllers[n]=r),r[t.property]=t,e.load&&e.load.remembered){var s=e.load.remembered,o=void 0;if(s[i.preset])o=s[i.preset];else if(s[sr])o=s[sr];else return;if(o[n]&&o[n][t.property]!==void 0){var a=o[n][t.property];t.initialValue=a,t.setValue(a)}}}}function tr(i,t,e,n){if(t[e]===void 0)throw new Error('Object "'+t+'" has no property "'+e+'"');var r=void 0;if(n.color)r=new qr(t,e);else{var s=[t,e].concat(n.factoryArgs);r=Sm.apply(i,s)}n.before instanceof qn&&(n.before=n.before.__li),Al(i,r),st.addClass(r.domElement,"c");var o=document.createElement("span");st.addClass(o,"property-name"),o.innerHTML=r.property;var a=document.createElement("div");a.appendChild(o),a.appendChild(r.domElement);var l=so(i,a,n.before);return st.addClass(l,Se.CLASS_CONTROLLER_ROW),r instanceof qr?st.addClass(l,"color"):st.addClass(l,fm(r.getValue())),Tm(i,l,r),i.__controllers.push(r),r}function Ai(i,t){return document.location.href+"."+t}function Hs(i,t,e){var n=document.createElement("option");n.innerHTML=t,n.value=t,i.__preset_select.appendChild(n),e&&(i.__preset_select.selectedIndex=i.__preset_select.length-1)}function Wa(i,t){t.style.display=i.useLocalStorage?"block":"none"}function Am(i){var t=i.__save_row=document.createElement("li");st.addClass(i.domElement,"has-save"),i.__ul.insertBefore(t,i.__ul.firstChild),st.addClass(t,"save-row");var e=document.createElement("span");e.innerHTML="&nbsp;",st.addClass(e,"button gears");var n=document.createElement("span");n.innerHTML="Save",st.addClass(n,"button"),st.addClass(n,"save");var r=document.createElement("span");r.innerHTML="New",st.addClass(r,"button"),st.addClass(r,"save-as");var s=document.createElement("span");s.innerHTML="Revert",st.addClass(s,"button"),st.addClass(s,"revert");var o=i.__preset_select=document.createElement("select");if(i.load&&i.load.remembered?yt.each(i.load.remembered,function(c,d){Hs(i,d,d===i.preset)}):Hs(i,sr,!1),st.bind(o,"change",function(){for(var c=0;c<i.__preset_select.length;c++)i.__preset_select[c].innerHTML=i.__preset_select[c].value;i.preset=this.value}),t.appendChild(o),t.appendChild(e),t.appendChild(n),t.appendChild(r),t.appendChild(s),Ki){var a=document.getElementById("dg-local-explain"),l=document.getElementById("dg-local-storage"),u=document.getElementById("dg-save-locally");u.style.display="block",localStorage.getItem(Ai(i,"isLocal"))==="true"&&l.setAttribute("checked","checked"),Wa(i,a),st.bind(l,"change",function(){i.useLocalStorage=!i.useLocalStorage,Wa(i,a)})}var h=document.getElementById("dg-new-constructor");st.bind(h,"keydown",function(c){c.metaKey&&(c.which===67||c.keyCode===67)&&Ji.hide()}),st.bind(e,"click",function(){h.innerHTML=JSON.stringify(i.getSaveObject(),void 0,2),Ji.show(),h.focus(),h.select()}),st.bind(n,"click",function(){i.save()}),st.bind(r,"click",function(){var c=prompt("Enter a new preset name.");c&&i.saveAs(c)}),st.bind(s,"click",function(){i.revert()})}function Cm(i){var t=void 0;i.__resize_handle=document.createElement("div"),yt.extend(i.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function e(s){return s.preventDefault(),i.width+=t-s.clientX,i.onResize(),t=s.clientX,!1}function n(){st.removeClass(i.__closeButton,Se.CLASS_DRAG),st.unbind(window,"mousemove",e),st.unbind(window,"mouseup",n)}function r(s){return s.preventDefault(),t=s.clientX,st.addClass(i.__closeButton,Se.CLASS_DRAG),st.bind(window,"mousemove",e),st.bind(window,"mouseup",n),!1}st.bind(i.__resize_handle,"mousedown",r),st.bind(i.__closeButton,"mousedown",r),i.domElement.insertBefore(i.__resize_handle,i.domElement.firstElementChild)}function ks(i,t){i.domElement.style.width=t+"px",i.__save_row&&i.autoPlace&&(i.__save_row.style.width=t+"px"),i.__closeButton&&(i.__closeButton.style.width=t+"px")}function Dr(i,t){var e={};return yt.each(i.__rememberedObjects,function(n,r){var s={},o=i.__rememberedObjectIndecesToControllers[r];yt.each(o,function(a,l){s[l]=t?a.initialValue:a.getValue()}),e[r]=s}),e}function Rm(i){for(var t=0;t<i.__preset_select.length;t++)i.__preset_select[t].value===i.preset&&(i.__preset_select.selectedIndex=t)}function Cl(i){i.length!==0&&Em.call(window,function(){Cl(i)}),yt.each(i,function(t){t.updateDisplay()})}var Pm={Color:De,math:ir,interpret:Wr},Lm={Controller:qn,BooleanController:no,OptionController:bl,StringController:wl,NumberController:io,NumberControllerBox:rr,NumberControllerSlider:Xr,FunctionController:ro,ColorController:qr},Im={dom:st},Dm={GUI:Se},Nm=Se,Um={color:Pm,controllers:Lm,dom:Im,gui:Dm,GUI:Nm};function Fm(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function Nr(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Rl={exports:{}};(function(i,t){(function(e){i.exports=e()})(function(){return function e(n,r,s){function o(u,h){if(!r[u]){if(!n[u]){var c=typeof Nr=="function"&&Nr;if(!h&&c)return c(u,!0);if(a)return a(u,!0);throw new Error("Cannot find module '"+u+"'")}var d=r[u]={exports:{}};n[u][0].call(d.exports,function(p){var v=n[u][1][p];return o(v||p)},d,d.exports,e,n,r,s)}return r[u].exports}for(var a=typeof Nr=="function"&&Nr,l=0;l<s.length;l++)o(s[l]);return o}({1:[function(e,n,r){n.exports={name:"cannon",version:"0.6.2",description:"A lightweight 3D physics engine written in JavaScript.",homepage:"https://github.com/schteppe/cannon.js",author:"Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",keywords:["cannon.js","cannon","physics","engine","3d"],main:"./build/cannon.js",engines:{node:"*"},repository:{type:"git",url:"https://github.com/schteppe/cannon.js.git"},bugs:{url:"https://github.com/schteppe/cannon.js/issues"},licenses:[{type:"MIT"}],devDependencies:{jshint:"latest","uglify-js":"latest",nodeunit:"^0.9.0",grunt:"~0.4.0","grunt-contrib-jshint":"~0.1.1","grunt-contrib-nodeunit":"^0.4.1","grunt-contrib-concat":"~0.1.3","grunt-contrib-uglify":"^0.5.1","grunt-browserify":"^2.1.4","grunt-contrib-yuidoc":"^0.5.2",browserify:"*"},dependencies:{}}},{}],2:[function(e,n,r){n.exports={version:e("../package.json").version,AABB:e("./collision/AABB"),ArrayCollisionMatrix:e("./collision/ArrayCollisionMatrix"),Body:e("./objects/Body"),Box:e("./shapes/Box"),Broadphase:e("./collision/Broadphase"),Constraint:e("./constraints/Constraint"),ContactEquation:e("./equations/ContactEquation"),Narrowphase:e("./world/Narrowphase"),ConeTwistConstraint:e("./constraints/ConeTwistConstraint"),ContactMaterial:e("./material/ContactMaterial"),ConvexPolyhedron:e("./shapes/ConvexPolyhedron"),Cylinder:e("./shapes/Cylinder"),DistanceConstraint:e("./constraints/DistanceConstraint"),Equation:e("./equations/Equation"),EventTarget:e("./utils/EventTarget"),FrictionEquation:e("./equations/FrictionEquation"),GSSolver:e("./solver/GSSolver"),GridBroadphase:e("./collision/GridBroadphase"),Heightfield:e("./shapes/Heightfield"),HingeConstraint:e("./constraints/HingeConstraint"),LockConstraint:e("./constraints/LockConstraint"),Mat3:e("./math/Mat3"),Material:e("./material/Material"),NaiveBroadphase:e("./collision/NaiveBroadphase"),ObjectCollisionMatrix:e("./collision/ObjectCollisionMatrix"),Pool:e("./utils/Pool"),Particle:e("./shapes/Particle"),Plane:e("./shapes/Plane"),PointToPointConstraint:e("./constraints/PointToPointConstraint"),Quaternion:e("./math/Quaternion"),Ray:e("./collision/Ray"),RaycastVehicle:e("./objects/RaycastVehicle"),RaycastResult:e("./collision/RaycastResult"),RigidVehicle:e("./objects/RigidVehicle"),RotationalEquation:e("./equations/RotationalEquation"),RotationalMotorEquation:e("./equations/RotationalMotorEquation"),SAPBroadphase:e("./collision/SAPBroadphase"),SPHSystem:e("./objects/SPHSystem"),Shape:e("./shapes/Shape"),Solver:e("./solver/Solver"),Sphere:e("./shapes/Sphere"),SplitSolver:e("./solver/SplitSolver"),Spring:e("./objects/Spring"),Trimesh:e("./shapes/Trimesh"),Vec3:e("./math/Vec3"),Vec3Pool:e("./utils/Vec3Pool"),World:e("./world/World")}},{"../package.json":1,"./collision/AABB":3,"./collision/ArrayCollisionMatrix":4,"./collision/Broadphase":5,"./collision/GridBroadphase":6,"./collision/NaiveBroadphase":7,"./collision/ObjectCollisionMatrix":8,"./collision/Ray":9,"./collision/RaycastResult":10,"./collision/SAPBroadphase":11,"./constraints/ConeTwistConstraint":12,"./constraints/Constraint":13,"./constraints/DistanceConstraint":14,"./constraints/HingeConstraint":15,"./constraints/LockConstraint":16,"./constraints/PointToPointConstraint":17,"./equations/ContactEquation":19,"./equations/Equation":20,"./equations/FrictionEquation":21,"./equations/RotationalEquation":22,"./equations/RotationalMotorEquation":23,"./material/ContactMaterial":24,"./material/Material":25,"./math/Mat3":27,"./math/Quaternion":28,"./math/Vec3":30,"./objects/Body":31,"./objects/RaycastVehicle":32,"./objects/RigidVehicle":33,"./objects/SPHSystem":34,"./objects/Spring":35,"./shapes/Box":37,"./shapes/ConvexPolyhedron":38,"./shapes/Cylinder":39,"./shapes/Heightfield":40,"./shapes/Particle":41,"./shapes/Plane":42,"./shapes/Shape":43,"./shapes/Sphere":44,"./shapes/Trimesh":45,"./solver/GSSolver":46,"./solver/Solver":47,"./solver/SplitSolver":48,"./utils/EventTarget":49,"./utils/Pool":51,"./utils/Vec3Pool":54,"./world/Narrowphase":55,"./world/World":56}],3:[function(e,n,r){var s=e("../math/Vec3");e("../utils/Utils"),n.exports=o;function o(u){u=u||{},this.lowerBound=new s,u.lowerBound&&this.lowerBound.copy(u.lowerBound),this.upperBound=new s,u.upperBound&&this.upperBound.copy(u.upperBound)}var a=new s;o.prototype.setFromPoints=function(u,h,c,d){var p=this.lowerBound,v=this.upperBound,g=c;p.copy(u[0]),g&&g.vmult(p,p),v.copy(p);for(var m=1;m<u.length;m++){var f=u[m];g&&(g.vmult(f,a),f=a),f.x>v.x&&(v.x=f.x),f.x<p.x&&(p.x=f.x),f.y>v.y&&(v.y=f.y),f.y<p.y&&(p.y=f.y),f.z>v.z&&(v.z=f.z),f.z<p.z&&(p.z=f.z)}return h&&(h.vadd(p,p),h.vadd(v,v)),d&&(p.x-=d,p.y-=d,p.z-=d,v.x+=d,v.y+=d,v.z+=d),this},o.prototype.copy=function(u){return this.lowerBound.copy(u.lowerBound),this.upperBound.copy(u.upperBound),this},o.prototype.clone=function(){return new o().copy(this)},o.prototype.extend=function(u){var h=u.lowerBound.x;this.lowerBound.x>h&&(this.lowerBound.x=h);var c=u.upperBound.x;this.upperBound.x<c&&(this.upperBound.x=c);var h=u.lowerBound.y;this.lowerBound.y>h&&(this.lowerBound.y=h);var c=u.upperBound.y;this.upperBound.y<c&&(this.upperBound.y=c);var h=u.lowerBound.z;this.lowerBound.z>h&&(this.lowerBound.z=h);var c=u.upperBound.z;this.upperBound.z<c&&(this.upperBound.z=c)},o.prototype.overlaps=function(u){var h=this.lowerBound,c=this.upperBound,d=u.lowerBound,p=u.upperBound;return(d.x<=c.x&&c.x<=p.x||h.x<=p.x&&p.x<=c.x)&&(d.y<=c.y&&c.y<=p.y||h.y<=p.y&&p.y<=c.y)&&(d.z<=c.z&&c.z<=p.z||h.z<=p.z&&p.z<=c.z)},o.prototype.contains=function(u){var h=this.lowerBound,c=this.upperBound,d=u.lowerBound,p=u.upperBound;return h.x<=d.x&&c.x>=p.x&&h.y<=d.y&&c.y>=p.y&&h.z<=d.z&&c.z>=p.z},o.prototype.getCorners=function(u,h,c,d,p,v,g,m){var f=this.lowerBound,y=this.upperBound;u.copy(f),h.set(y.x,f.y,f.z),c.set(y.x,y.y,f.z),d.set(f.x,y.y,y.z),p.set(y.x,f.y,f.z),v.set(f.x,y.y,f.z),g.set(f.x,f.y,y.z),m.copy(y)};var l=[new s,new s,new s,new s,new s,new s,new s,new s];o.prototype.toLocalFrame=function(u,h){var c=l,d=c[0],p=c[1],v=c[2],g=c[3],m=c[4],f=c[5],y=c[6],x=c[7];this.getCorners(d,p,v,g,m,f,y,x);for(var _=0;_!==8;_++){var M=c[_];u.pointToLocal(M,M)}return h.setFromPoints(c)},o.prototype.toWorldFrame=function(u,h){var c=l,d=c[0],p=c[1],v=c[2],g=c[3],m=c[4],f=c[5],y=c[6],x=c[7];this.getCorners(d,p,v,g,m,f,y,x);for(var _=0;_!==8;_++){var M=c[_];u.pointToWorld(M,M)}return h.setFromPoints(c)}},{"../math/Vec3":30,"../utils/Utils":53}],4:[function(e,n,r){n.exports=s;function s(){this.matrix=[]}s.prototype.get=function(o,a){if(o=o.index,a=a.index,a>o){var l=a;a=o,o=l}return this.matrix[(o*(o+1)>>1)+a-1]},s.prototype.set=function(o,a,l){if(o=o.index,a=a.index,a>o){var u=a;a=o,o=u}this.matrix[(o*(o+1)>>1)+a-1]=l?1:0},s.prototype.reset=function(){for(var o=0,a=this.matrix.length;o!==a;o++)this.matrix[o]=0},s.prototype.setNumObjects=function(o){this.matrix.length=o*(o-1)>>1}},{}],5:[function(e,n,r){var s=e("../objects/Body"),o=e("../math/Vec3"),a=e("../math/Quaternion");e("../shapes/Shape"),e("../shapes/Plane"),n.exports=l;function l(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}l.prototype.collisionPairs=function(g,m,f){throw new Error("collisionPairs not implemented for this BroadPhase class!")};var u=s.STATIC|s.KINEMATIC;l.prototype.needBroadphaseCollision=function(g,m){return!(!(g.collisionFilterGroup&m.collisionFilterMask)||!(m.collisionFilterGroup&g.collisionFilterMask)||(g.type&u||g.sleepState===s.SLEEPING)&&(m.type&u||m.sleepState===s.SLEEPING))},l.prototype.intersectionTest=function(g,m,f,y){this.useBoundingBoxes?this.doBoundingBoxBroadphase(g,m,f,y):this.doBoundingSphereBroadphase(g,m,f,y)};var h=new o;new o,new a,new o,l.prototype.doBoundingSphereBroadphase=function(g,m,f,y){var x=h;m.position.vsub(g.position,x);var _=Math.pow(g.boundingRadius+m.boundingRadius,2),M=x.norm2();M<_&&(f.push(g),y.push(m))},l.prototype.doBoundingBoxBroadphase=function(g,m,f,y){g.aabbNeedsUpdate&&g.computeAABB(),m.aabbNeedsUpdate&&m.computeAABB(),g.aabb.overlaps(m.aabb)&&(f.push(g),y.push(m))};var c={keys:[]},d=[],p=[];l.prototype.makePairsUnique=function(g,m){for(var f=c,y=d,x=p,_=g.length,M=0;M!==_;M++)y[M]=g[M],x[M]=m[M];g.length=0,m.length=0;for(var M=0;M!==_;M++){var R=y[M].id,C=x[M].id,B=R<C?R+","+C:C+","+R;f[B]=M,f.keys.push(B)}for(var M=0;M!==f.keys.length;M++){var B=f.keys.pop(),S=f[B];g.push(y[S]),m.push(x[S]),delete f[B]}},l.prototype.setWorld=function(g){};var v=new o;l.boundingSphereCheck=function(g,m){var f=v;return g.position.vsub(m.position,f),Math.pow(g.shape.boundingSphereRadius+m.shape.boundingSphereRadius,2)>f.norm2()},l.prototype.aabbQuery=function(g,m,f){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Plane":42,"../shapes/Shape":43}],6:[function(e,n,r){n.exports=l;var s=e("./Broadphase"),o=e("../math/Vec3"),a=e("../shapes/Shape");function l(h,c,d,p,v){s.apply(this),this.nx=d||10,this.ny=p||10,this.nz=v||10,this.aabbMin=h||new o(100,100,100),this.aabbMax=c||new o(-100,-100,-100);var g=this.nx*this.ny*this.nz;if(g<=0)throw"GridBroadphase: Each dimension's n must be >0";this.bins=[],this.binLengths=[],this.bins.length=g,this.binLengths.length=g;for(var m=0;m<g;m++)this.bins[m]=[],this.binLengths[m]=0}l.prototype=new s,l.prototype.constructor=l;var u=new o;new o,l.prototype.collisionPairs=function(h,c,d){var p=h.numObjects(),v=h.bodies,at=this.aabbMax,j=this.aabbMin,g=this.nx,m=this.ny,f=this.nz,y=m*f,x=f,_=1,M=at.x,R=at.y,C=at.z,B=j.x,S=j.y,E=j.z,P=g/(M-B),z=m/(R-S),H=f/(C-E),D=(M-B)/g,k=(R-S)/m,tt=(C-E)/f,F=Math.sqrt(D*D+k*k+tt*tt)*.5,O=a.types,Z=O.SPHERE,X=O.PLANE;O.BOX,O.COMPOUND,O.CONVEXPOLYHEDRON;for(var w=this.bins,U=this.binLengths,N=this.bins.length,I=0;I!==N;I++)U[I]=0;var A=Math.ceil,j=Math.min,at=Math.max;function nt(At,Ft,G,bt,mt,ne,Kt){var Zt=(At-B)*P|0,qt=(Ft-S)*z|0,Bt=(G-E)*H|0,le=A((bt-B)*P),Y=A((mt-S)*z),wt=A((ne-E)*H);Zt<0?Zt=0:Zt>=g&&(Zt=g-1),qt<0?qt=0:qt>=m&&(qt=m-1),Bt<0?Bt=0:Bt>=f&&(Bt=f-1),le<0?le=0:le>=g&&(le=g-1),Y<0?Y=0:Y>=m&&(Y=m-1),wt<0?wt=0:wt>=f&&(wt=f-1),Zt*=y,qt*=x,Bt*=_,le*=y,Y*=x,wt*=_;for(var Mt=Zt;Mt<=le;Mt+=y)for(var dt=qt;dt<=Y;dt+=x)for(var Tt=Bt;Tt<=wt;Tt+=_){var Qt=Mt+dt+Tt;w[Qt][U[Qt]++]=Kt}}for(var I=0;I!==p;I++){var K=v[I],lt=K.shape;switch(lt.type){case Z:var ut=K.position.x,q=K.position.y,Dt=K.position.z,pt=lt.radius;nt(ut-pt,q-pt,Dt-pt,ut+pt,q+pt,Dt+pt,K);break;case X:lt.worldNormalNeedsUpdate&&lt.computeWorldNormal(K.quaternion);var it=lt.worldNormal,ht=B+D*.5-K.position.x,ee=S+k*.5-K.position.y,Ct=E+tt*.5-K.position.z,Xt=u;Xt.set(ht,ee,Ct);for(var Et=0,se=0;Et!==g;Et++,se+=y,Xt.y=ee,Xt.x+=D)for(var ae=0,L=0;ae!==m;ae++,L+=x,Xt.z=Ct,Xt.y+=k)for(var T=0,Q=0;T!==f;T++,Q+=_,Xt.z+=tt)if(Xt.dot(it)<F){var gt=se+L+Q;w[gt][U[gt]++]=K}break;default:K.aabbNeedsUpdate&&K.computeAABB(),nt(K.aabb.lowerBound.x,K.aabb.lowerBound.y,K.aabb.lowerBound.z,K.aabb.upperBound.x,K.aabb.upperBound.y,K.aabb.upperBound.z,K);break}}for(var I=0;I!==N;I++){var ft=U[I];if(ft>1)for(var St=w[I],Et=0;Et!==ft;Et++)for(var K=St[Et],ae=0;ae!==Et;ae++){var Wt=St[ae];this.needBroadphaseCollision(K,Wt)&&this.intersectionTest(K,Wt,c,d)}}this.makePairsUnique(c,d)}},{"../math/Vec3":30,"../shapes/Shape":43,"./Broadphase":5}],7:[function(e,n,r){n.exports=a;var s=e("./Broadphase"),o=e("./AABB");function a(){s.apply(this)}a.prototype=new s,a.prototype.constructor=a,a.prototype.collisionPairs=function(l,u,h){var c=l.bodies,d=c.length,p,v,g,m;for(p=0;p!==d;p++)for(v=0;v!==p;v++)g=c[p],m=c[v],this.needBroadphaseCollision(g,m)&&this.intersectionTest(g,m,u,h)},new o,a.prototype.aabbQuery=function(l,u,h){h=h||[];for(var c=0;c<l.bodies.length;c++){var d=l.bodies[c];d.aabbNeedsUpdate&&d.computeAABB(),d.aabb.overlaps(u)&&h.push(d)}return h}},{"./AABB":3,"./Broadphase":5}],8:[function(e,n,r){n.exports=s;function s(){this.matrix={}}s.prototype.get=function(o,a){if(o=o.id,a=a.id,a>o){var l=a;a=o,o=l}return o+"-"+a in this.matrix},s.prototype.set=function(o,a,l){if(o=o.id,a=a.id,a>o){var u=a;a=o,o=u}l?this.matrix[o+"-"+a]=!0:delete this.matrix[o+"-"+a]},s.prototype.reset=function(){this.matrix={}},s.prototype.setNumObjects=function(o){}},{}],9:[function(e,n,r){n.exports=c;var s=e("../math/Vec3"),o=e("../math/Quaternion"),a=e("../math/Transform");e("../shapes/ConvexPolyhedron"),e("../shapes/Box");var l=e("../collision/RaycastResult"),u=e("../shapes/Shape"),h=e("../collision/AABB");function c(N,I){this.from=N?N.clone():new s,this.to=I?I.clone():new s,this._direction=new s,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=c.ANY,this.result=new l,this.hasHit=!1,this.callback=function(A){}}c.prototype.constructor=c,c.CLOSEST=1,c.ANY=2,c.ALL=4;var d=new h,p=[];c.prototype.intersectWorld=function(N,I){return this.mode=I.mode||c.ANY,this.result=I.result||new l,this.skipBackfaces=!!I.skipBackfaces,this.collisionFilterMask=typeof I.collisionFilterMask<"u"?I.collisionFilterMask:-1,this.collisionFilterGroup=typeof I.collisionFilterGroup<"u"?I.collisionFilterGroup:-1,I.from&&this.from.copy(I.from),I.to&&this.to.copy(I.to),this.callback=I.callback||function(){},this.hasHit=!1,this.result.reset(),this._updateDirection(),this.getAABB(d),p.length=0,N.broadphase.aabbQuery(N,d,p),this.intersectBodies(p),this.hasHit};var v=new s,g=new s;c.pointInTriangle=m;function m(N,I,A,j){j.vsub(I,X),A.vsub(I,v),N.vsub(I,g);var at=X.dot(X),nt=X.dot(v),K=X.dot(g),lt=v.dot(v),ut=v.dot(g),q,Dt;return(q=lt*K-nt*ut)>=0&&(Dt=at*ut-nt*K)>=0&&q+Dt<at*lt-nt*nt}var f=new s,y=new o;c.prototype.intersectBody=function(N,I){I&&(this.result=I,this._updateDirection());var A=this.checkCollisionResponse;if(!(A&&!N.collisionResponse)&&!(!(this.collisionFilterGroup&N.collisionFilterMask)||!(N.collisionFilterGroup&this.collisionFilterMask)))for(var j=f,at=y,nt=0,K=N.shapes.length;nt<K;nt++){var lt=N.shapes[nt];if(!(A&&!lt.collisionResponse)&&(N.quaternion.mult(N.shapeOrientations[nt],at),N.quaternion.vmult(N.shapeOffsets[nt],j),j.vadd(N.position,j),this.intersectShape(lt,at,j,N),this.result._shouldStop))break}},c.prototype.intersectBodies=function(N,I){I&&(this.result=I,this._updateDirection());for(var A=0,j=N.length;!this.result._shouldStop&&A<j;A++)this.intersectBody(N[A])},c.prototype._updateDirection=function(){this.to.vsub(this.from,this._direction),this._direction.normalize()},c.prototype.intersectShape=function(N,I,A,j){var at=this.from,nt=U(at,this._direction,A);if(!(nt>N.boundingSphereRadius)){var K=this[N.type];K&&K.call(this,N,I,A,j)}},new s,new s;var x=new s,_=new s,M=new s,R=new s;new s,new l,c.prototype.intersectBox=function(N,I,A,j){return this.intersectConvex(N.convexPolyhedronRepresentation,I,A,j)},c.prototype[u.types.BOX]=c.prototype.intersectBox,c.prototype.intersectPlane=function(N,I,A,j){var at=this.from,nt=this.to,K=this._direction,lt=new s(0,0,1);I.vmult(lt,lt);var ut=new s;at.vsub(A,ut);var q=ut.dot(lt);nt.vsub(A,ut);var Dt=ut.dot(lt);if(!(q*Dt>0)&&!(at.distanceTo(nt)<q)){var pt=lt.dot(K);if(!(Math.abs(pt)<this.precision)){var it=new s,ht=new s,ee=new s;at.vsub(A,it);var Ct=-lt.dot(it)/pt;K.scale(Ct,ht),at.vadd(ht,ee),this.reportIntersection(lt,ee,N,j,-1)}}},c.prototype[u.types.PLANE]=c.prototype.intersectPlane,c.prototype.getAABB=function(N){var I=this.to,A=this.from;N.lowerBound.x=Math.min(I.x,A.x),N.lowerBound.y=Math.min(I.y,A.y),N.lowerBound.z=Math.min(I.z,A.z),N.upperBound.x=Math.max(I.x,A.x),N.upperBound.y=Math.max(I.y,A.y),N.upperBound.z=Math.max(I.z,A.z)};var C={faceList:[0]};c.prototype.intersectHeightfield=function(N,I,A,j){N.data,N.elementSize;var at=new s,nt=new c(this.from,this.to);a.pointToLocalFrame(A,I,nt.from,nt.from),a.pointToLocalFrame(A,I,nt.to,nt.to);var K=[],lt=null,ut=null,q=null,Dt=null,pt=N.getIndexOfPosition(nt.from.x,nt.from.y,K,!1);if(pt&&(lt=K[0],ut=K[1],q=K[0],Dt=K[1]),pt=N.getIndexOfPosition(nt.to.x,nt.to.y,K,!1),pt&&((lt===null||K[0]<lt)&&(lt=K[0]),(q===null||K[0]>q)&&(q=K[0]),(ut===null||K[1]<ut)&&(ut=K[1]),(Dt===null||K[1]>Dt)&&(Dt=K[1])),lt!==null){var it=[];N.getRectMinMax(lt,ut,q,Dt,it),it[0],it[1];for(var ht=lt;ht<=q;ht++)for(var ee=ut;ee<=Dt;ee++){if(this.result._shouldStop||(N.getConvexTrianglePillar(ht,ee,!1),a.pointToWorldFrame(A,I,N.pillarOffset,at),this.intersectConvex(N.pillarConvex,I,at,j,C),this.result._shouldStop))return;N.getConvexTrianglePillar(ht,ee,!0),a.pointToWorldFrame(A,I,N.pillarOffset,at),this.intersectConvex(N.pillarConvex,I,at,j,C)}}},c.prototype[u.types.HEIGHTFIELD]=c.prototype.intersectHeightfield;var B=new s,S=new s;c.prototype.intersectSphere=function(N,I,A,j){var at=this.from,nt=this.to,K=N.radius,lt=Math.pow(nt.x-at.x,2)+Math.pow(nt.y-at.y,2)+Math.pow(nt.z-at.z,2),ut=2*((nt.x-at.x)*(at.x-A.x)+(nt.y-at.y)*(at.y-A.y)+(nt.z-at.z)*(at.z-A.z)),q=Math.pow(at.x-A.x,2)+Math.pow(at.y-A.y,2)+Math.pow(at.z-A.z,2)-Math.pow(K,2),Dt=Math.pow(ut,2)-4*lt*q,pt=B,it=S;if(!(Dt<0))if(Dt===0)at.lerp(nt,Dt,pt),pt.vsub(A,it),it.normalize(),this.reportIntersection(it,pt,N,j,-1);else{var ht=(-ut-Math.sqrt(Dt))/(2*lt),ee=(-ut+Math.sqrt(Dt))/(2*lt);if(ht>=0&&ht<=1&&(at.lerp(nt,ht,pt),pt.vsub(A,it),it.normalize(),this.reportIntersection(it,pt,N,j,-1)),this.result._shouldStop)return;ee>=0&&ee<=1&&(at.lerp(nt,ee,pt),pt.vsub(A,it),it.normalize(),this.reportIntersection(it,pt,N,j,-1))}},c.prototype[u.types.SPHERE]=c.prototype.intersectSphere;var E=new s;new s,new s;var P=new s;c.prototype.intersectConvex=function(I,A,j,at,nt){for(var K=E,lt=P,ut=nt&&nt.faceList||null,q=I.faces,Dt=I.vertices,pt=I.faceNormals,it=this._direction,ht=this.from,ee=this.to,Ct=ht.distanceTo(ee),Xt=ut?ut.length:q.length,Et=this.result,se=0;!Et._shouldStop&&se<Xt;se++){var ae=ut?ut[se]:se,L=q[ae],T=pt[ae],Q=A,gt=j;lt.copy(Dt[L[0]]),Q.vmult(lt,lt),lt.vadd(gt,lt),lt.vsub(ht,lt),Q.vmult(T,K);var ft=it.dot(K);if(!(Math.abs(ft)<this.precision)){var St=K.dot(lt)/ft;if(!(St<0)){it.mult(St,x),x.vadd(ht,x),_.copy(Dt[L[0]]),Q.vmult(_,_),gt.vadd(_,_);for(var Wt=1;!Et._shouldStop&&Wt<L.length-1;Wt++){M.copy(Dt[L[Wt]]),R.copy(Dt[L[Wt+1]]),Q.vmult(M,M),Q.vmult(R,R),gt.vadd(M,M),gt.vadd(R,R);var At=x.distanceTo(ht);!(m(x,_,M,R)||m(x,M,_,R))||At>Ct||this.reportIntersection(K,x,I,at,ae)}}}}},c.prototype[u.types.CONVEXPOLYHEDRON]=c.prototype.intersectConvex;var z=new s,H=new s,D=new s,k=new s,tt=new s,F=new s;new h;var O=[],Z=new a;c.prototype.intersectTrimesh=function(I,A,j,at,nt){var K=z,lt=O,ut=Z,q=P,Dt=H,pt=D,it=k,ht=F,ee=tt;nt&&nt.faceList;var Ct=I.indices;I.vertices,I.faceNormals;var Xt=this.from,Et=this.to,se=this._direction;ut.position.copy(j),ut.quaternion.copy(A),a.vectorToLocalFrame(j,A,se,Dt),a.pointToLocalFrame(j,A,Xt,pt),a.pointToLocalFrame(j,A,Et,it);var ae=pt.distanceSquared(it);I.tree.rayQuery(this,ut,lt);for(var L=0,T=lt.length;!this.result._shouldStop&&L!==T;L++){var Q=lt[L];I.getNormal(Q,K),I.getVertex(Ct[Q*3],_),_.vsub(pt,q);var gt=Dt.dot(K),ft=K.dot(q)/gt;if(!(ft<0)){Dt.scale(ft,x),x.vadd(pt,x),I.getVertex(Ct[Q*3+1],M),I.getVertex(Ct[Q*3+2],R);var St=x.distanceSquared(pt);!(m(x,M,_,R)||m(x,_,M,R))||St>ae||(a.vectorToWorldFrame(A,K,ee),a.pointToWorldFrame(j,A,x,ht),this.reportIntersection(ee,ht,I,at,Q))}}lt.length=0},c.prototype[u.types.TRIMESH]=c.prototype.intersectTrimesh,c.prototype.reportIntersection=function(N,I,A,j,at){var nt=this.from,K=this.to,lt=nt.distanceTo(I),ut=this.result;if(!(this.skipBackfaces&&N.dot(this._direction)>0))switch(ut.hitFaceIndex=typeof at<"u"?at:-1,this.mode){case c.ALL:this.hasHit=!0,ut.set(nt,K,N,I,A,j,lt),ut.hasHit=!0,this.callback(ut);break;case c.CLOSEST:(lt<ut.distance||!ut.hasHit)&&(this.hasHit=!0,ut.hasHit=!0,ut.set(nt,K,N,I,A,j,lt));break;case c.ANY:this.hasHit=!0,ut.hasHit=!0,ut.set(nt,K,N,I,A,j,lt),ut._shouldStop=!0;break}};var X=new s,w=new s;function U(N,I,A){A.vsub(N,X);var j=X.dot(I);I.mult(j,w),w.vadd(N,w);var at=A.distanceTo(w);return at}},{"../collision/AABB":3,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/Box":37,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43}],10:[function(e,n,r){var s=e("../math/Vec3");n.exports=o;function o(){this.rayFromWorld=new s,this.rayToWorld=new s,this.hitNormalWorld=new s,this.hitPointWorld=new s,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1}o.prototype.reset=function(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1},o.prototype.abort=function(){this._shouldStop=!0},o.prototype.set=function(a,l,u,h,c,d,p){this.rayFromWorld.copy(a),this.rayToWorld.copy(l),this.hitNormalWorld.copy(u),this.hitPointWorld.copy(h),this.shape=c,this.body=d,this.distance=p}},{"../math/Vec3":30}],11:[function(e,n,r){e("../shapes/Shape");var s=e("../collision/Broadphase");n.exports=o;function o(a){s.apply(this),this.axisList=[],this.world=null,this.axisIndex=0;var l=this.axisList;this._addBodyHandler=function(u){l.push(u.body)},this._removeBodyHandler=function(u){var h=l.indexOf(u.body);h!==-1&&l.splice(h,1)},a&&this.setWorld(a)}o.prototype=new s,o.prototype.setWorld=function(a){this.axisList.length=0;for(var l=0;l<a.bodies.length;l++)this.axisList.push(a.bodies[l]);a.removeEventListener("addBody",this._addBodyHandler),a.removeEventListener("removeBody",this._removeBodyHandler),a.addEventListener("addBody",this._addBodyHandler),a.addEventListener("removeBody",this._removeBodyHandler),this.world=a,this.dirty=!0},o.insertionSortX=function(a){for(var l=1,u=a.length;l<u;l++){for(var h=a[l],c=l-1;c>=0&&!(a[c].aabb.lowerBound.x<=h.aabb.lowerBound.x);c--)a[c+1]=a[c];a[c+1]=h}return a},o.insertionSortY=function(a){for(var l=1,u=a.length;l<u;l++){for(var h=a[l],c=l-1;c>=0&&!(a[c].aabb.lowerBound.y<=h.aabb.lowerBound.y);c--)a[c+1]=a[c];a[c+1]=h}return a},o.insertionSortZ=function(a){for(var l=1,u=a.length;l<u;l++){for(var h=a[l],c=l-1;c>=0&&!(a[c].aabb.lowerBound.z<=h.aabb.lowerBound.z);c--)a[c+1]=a[c];a[c+1]=h}return a},o.prototype.collisionPairs=function(a,l,u){var h=this.axisList,c=h.length,d=this.axisIndex,p,v;for(this.dirty&&(this.sortList(),this.dirty=!1),p=0;p!==c;p++){var g=h[p];for(v=p+1;v<c;v++){var m=h[v];if(this.needBroadphaseCollision(g,m)){if(!o.checkBounds(g,m,d))break;this.intersectionTest(g,m,l,u)}}}},o.prototype.sortList=function(){for(var a=this.axisList,l=this.axisIndex,u=a.length,h=0;h!==u;h++){var c=a[h];c.aabbNeedsUpdate&&c.computeAABB()}l===0?o.insertionSortX(a):l===1?o.insertionSortY(a):l===2&&o.insertionSortZ(a)},o.checkBounds=function(a,l,u){var h,c;u===0?(h=a.position.x,c=l.position.x):u===1?(h=a.position.y,c=l.position.y):u===2&&(h=a.position.z,c=l.position.z);var d=a.boundingRadius,p=l.boundingRadius,v=h+d,g=c-p;return g<v},o.prototype.autoDetectAxis=function(){for(var a=0,l=0,u=0,h=0,c=0,d=0,p=this.axisList,v=p.length,g=1/v,m=0;m!==v;m++){var f=p[m],y=f.position.x;a+=y,l+=y*y;var x=f.position.y;u+=x,h+=x*x;var _=f.position.z;c+=_,d+=_*_}var M=l-a*a*g,R=h-u*u*g,C=d-c*c*g;M>R?M>C?this.axisIndex=0:this.axisIndex=2:R>C?this.axisIndex=1:this.axisIndex=2},o.prototype.aabbQuery=function(a,l,u){u=u||[],this.dirty&&(this.sortList(),this.dirty=!1);var h=this.axisIndex,c="x";h===1&&(c="y"),h===2&&(c="z");var d=this.axisList;l.lowerBound[c],l.upperBound[c];for(var p=0;p<d.length;p++){var v=d[p];v.aabbNeedsUpdate&&v.computeAABB(),v.aabb.overlaps(l)&&u.push(v)}return u}},{"../collision/Broadphase":5,"../shapes/Shape":43}],12:[function(e,n,r){n.exports=u,e("./Constraint");var s=e("./PointToPointConstraint"),o=e("../equations/ConeEquation"),a=e("../equations/RotationalEquation");e("../equations/ContactEquation");var l=e("../math/Vec3");function u(h,c,d){d=d||{};var p=typeof d.maxForce<"u"?d.maxForce:1e6,v=d.pivotA?d.pivotA.clone():new l,g=d.pivotB?d.pivotB.clone():new l;this.axisA=d.axisA?d.axisA.clone():new l,this.axisB=d.axisB?d.axisB.clone():new l,s.call(this,h,v,c,g,p),this.collideConnected=!!d.collideConnected,this.angle=typeof d.angle<"u"?d.angle:0;var m=this.coneEquation=new o(h,c,d),f=this.twistEquation=new a(h,c,d);this.twistAngle=typeof d.twistAngle<"u"?d.twistAngle:0,m.maxForce=0,m.minForce=-p,f.maxForce=0,f.minForce=-p,this.equations.push(m,f)}u.prototype=new s,u.constructor=u,new l,new l,u.prototype.update=function(){var h=this.bodyA,c=this.bodyB,d=this.coneEquation,p=this.twistEquation;s.prototype.update.call(this),h.vectorToWorldFrame(this.axisA,d.axisA),c.vectorToWorldFrame(this.axisB,d.axisB),this.axisA.tangents(p.axisA,p.axisA),h.vectorToWorldFrame(p.axisA,p.axisA),this.axisB.tangents(p.axisB,p.axisB),c.vectorToWorldFrame(p.axisB,p.axisB),d.angle=this.angle,p.maxAngle=this.twistAngle}},{"../equations/ConeEquation":18,"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],13:[function(e,n,r){n.exports=o;var s=e("../utils/Utils");function o(a,l,u){u=s.defaults(u,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=a,this.bodyB=l,this.id=o.idCounter++,this.collideConnected=u.collideConnected,u.wakeUpBodies&&(a&&a.wakeUp(),l&&l.wakeUp())}o.prototype.update=function(){throw new Error("method update() not implmemented in this Constraint subclass!")},o.prototype.enable=function(){for(var a=this.equations,l=0;l<a.length;l++)a[l].enabled=!0},o.prototype.disable=function(){for(var a=this.equations,l=0;l<a.length;l++)a[l].enabled=!1},o.idCounter=0},{"../utils/Utils":53}],14:[function(e,n,r){n.exports=a;var s=e("./Constraint"),o=e("../equations/ContactEquation");function a(l,u,h,c){s.call(this,l,u),typeof h>"u"&&(h=l.position.distanceTo(u.position)),typeof c>"u"&&(c=1e6),this.distance=h;var d=this.distanceEquation=new o(l,u);this.equations.push(d),d.minForce=-c,d.maxForce=c}a.prototype=new s,a.prototype.update=function(){var l=this.bodyA,u=this.bodyB,h=this.distanceEquation,c=this.distance*.5,d=h.ni;u.position.vsub(l.position,d),d.normalize(),d.mult(c,h.ri),d.mult(-c,h.rj)}},{"../equations/ContactEquation":19,"./Constraint":13}],15:[function(e,n,r){n.exports=u,e("./Constraint");var s=e("./PointToPointConstraint"),o=e("../equations/RotationalEquation"),a=e("../equations/RotationalMotorEquation");e("../equations/ContactEquation");var l=e("../math/Vec3");function u(d,p,v){v=v||{};var g=typeof v.maxForce<"u"?v.maxForce:1e6,m=v.pivotA?v.pivotA.clone():new l,f=v.pivotB?v.pivotB.clone():new l;s.call(this,d,m,p,f,g);var y=this.axisA=v.axisA?v.axisA.clone():new l(1,0,0);y.normalize();var x=this.axisB=v.axisB?v.axisB.clone():new l(1,0,0);x.normalize();var _=this.rotationalEquation1=new o(d,p,v),M=this.rotationalEquation2=new o(d,p,v),R=this.motorEquation=new a(d,p,g);R.enabled=!1,this.equations.push(_,M,R)}u.prototype=new s,u.constructor=u,u.prototype.enableMotor=function(){this.motorEquation.enabled=!0},u.prototype.disableMotor=function(){this.motorEquation.enabled=!1},u.prototype.setMotorSpeed=function(d){this.motorEquation.targetVelocity=d},u.prototype.setMotorMaxForce=function(d){this.motorEquation.maxForce=d,this.motorEquation.minForce=-d};var h=new l,c=new l;u.prototype.update=function(){var d=this.bodyA,p=this.bodyB,v=this.motorEquation,g=this.rotationalEquation1,m=this.rotationalEquation2,f=h,y=c,x=this.axisA,_=this.axisB;s.prototype.update.call(this),d.quaternion.vmult(x,f),p.quaternion.vmult(_,y),f.tangents(g.axisA,m.axisA),g.axisB.copy(y),m.axisB.copy(y),this.motorEquation.enabled&&(d.quaternion.vmult(this.axisA,v.axisA),p.quaternion.vmult(this.axisB,v.axisB))}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],16:[function(e,n,r){n.exports=l,e("./Constraint");var s=e("./PointToPointConstraint"),o=e("../equations/RotationalEquation");e("../equations/RotationalMotorEquation"),e("../equations/ContactEquation");var a=e("../math/Vec3");function l(u,h,c){c=c||{};var d=typeof c.maxForce<"u"?c.maxForce:1e6,p=new a,v=new a,g=new a;u.position.vadd(h.position,g),g.scale(.5,g),h.pointToLocalFrame(g,v),u.pointToLocalFrame(g,p),s.call(this,u,p,h,v,d);var m=this.rotationalEquation1=new o(u,h,c),f=this.rotationalEquation2=new o(u,h,c),y=this.rotationalEquation3=new o(u,h,c);this.equations.push(m,f,y)}l.prototype=new s,l.constructor=l,new a,new a,l.prototype.update=function(){var u=this.bodyA,h=this.bodyB;this.motorEquation;var c=this.rotationalEquation1,d=this.rotationalEquation2,p=this.rotationalEquation3;s.prototype.update.call(this),u.vectorToWorldFrame(a.UNIT_X,c.axisA),h.vectorToWorldFrame(a.UNIT_Y,c.axisB),u.vectorToWorldFrame(a.UNIT_Y,d.axisA),h.vectorToWorldFrame(a.UNIT_Z,d.axisB),u.vectorToWorldFrame(a.UNIT_Z,p.axisA),h.vectorToWorldFrame(a.UNIT_X,p.axisB)}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],17:[function(e,n,r){n.exports=l;var s=e("./Constraint"),o=e("../equations/ContactEquation"),a=e("../math/Vec3");function l(u,h,c,d,p){s.call(this,u,c),p=typeof p<"u"?p:1e6,this.pivotA=h?h.clone():new a,this.pivotB=d?d.clone():new a;var v=this.equationX=new o(u,c),g=this.equationY=new o(u,c),m=this.equationZ=new o(u,c);this.equations.push(v,g,m),v.minForce=g.minForce=m.minForce=-p,v.maxForce=g.maxForce=m.maxForce=p,v.ni.set(1,0,0),g.ni.set(0,1,0),m.ni.set(0,0,1)}l.prototype=new s,l.prototype.update=function(){var u=this.bodyA,h=this.bodyB,c=this.equationX,d=this.equationY,p=this.equationZ;u.quaternion.vmult(this.pivotA,c.ri),h.quaternion.vmult(this.pivotB,c.rj),d.ri.copy(c.ri),d.rj.copy(c.rj),p.ri.copy(c.ri),p.rj.copy(c.rj)}},{"../equations/ContactEquation":19,"../math/Vec3":30,"./Constraint":13}],18:[function(e,n,r){n.exports=a;var s=e("../math/Vec3");e("../math/Mat3");var o=e("./Equation");function a(h,c,d){d=d||{};var p=typeof d.maxForce<"u"?d.maxForce:1e6;o.call(this,h,c,-p,p),this.axisA=d.axisA?d.axisA.clone():new s(1,0,0),this.axisB=d.axisB?d.axisB.clone():new s(0,1,0),this.angle=typeof d.angle<"u"?d.angle:0}a.prototype=new o,a.prototype.constructor=a;var l=new s,u=new s;a.prototype.computeB=function(h){var c=this.a,d=this.b,p=this.axisA,v=this.axisB,g=l,m=u,f=this.jacobianElementA,y=this.jacobianElementB;p.cross(v,g),v.cross(p,m),f.rotational.copy(m),y.rotational.copy(g);var x=Math.cos(this.angle)-p.dot(v),_=this.computeGW(),M=this.computeGiMf(),R=-x*c-_*d-h*M;return R}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],19:[function(e,n,r){n.exports=a;var s=e("./Equation"),o=e("../math/Vec3");e("../math/Mat3");function a(m,f,y){y=typeof y<"u"?y:1e6,s.call(this,m,f,0,y),this.restitution=0,this.ri=new o,this.rj=new o,this.ni=new o}a.prototype=new s,a.prototype.constructor=a;var l=new o,u=new o,h=new o;a.prototype.computeB=function(m){var f=this.a,y=this.b,x=this.bi,_=this.bj,M=this.ri,R=this.rj,C=l,B=u,S=x.velocity,E=x.angularVelocity;x.force,x.torque;var P=_.velocity,z=_.angularVelocity;_.force,_.torque;var H=h,D=this.jacobianElementA,k=this.jacobianElementB,tt=this.ni;M.cross(tt,C),R.cross(tt,B),tt.negate(D.spatial),C.negate(D.rotational),k.spatial.copy(tt),k.rotational.copy(B),H.copy(_.position),H.vadd(R,H),H.vsub(x.position,H),H.vsub(M,H);var F=tt.dot(H),O=this.restitution+1,Z=O*P.dot(tt)-O*S.dot(tt)+z.dot(B)-E.dot(C),X=this.computeGiMf(),w=-F*f-Z*y-m*X;return w};var c=new o,d=new o,p=new o,v=new o,g=new o;a.prototype.getImpactVelocityAlongNormal=function(){var m=c,f=d,y=p,x=v,_=g;return this.bi.position.vadd(this.ri,y),this.bj.position.vadd(this.rj,x),this.bi.getVelocityAtWorldPoint(y,m),this.bj.getVelocityAtWorldPoint(x,f),m.vsub(f,_),this.ni.dot(_)}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],20:[function(e,n,r){n.exports=a;var s=e("../math/JacobianElement"),o=e("../math/Vec3");function a(g,m,f,y){this.id=a.id++,this.minForce=typeof f>"u"?-1e6:f,this.maxForce=typeof y>"u"?1e6:y,this.bi=g,this.bj=m,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new s,this.jacobianElementB=new s,this.enabled=!0,this.setSpookParams(1e7,4,1/60)}a.prototype.constructor=a,a.id=0,a.prototype.setSpookParams=function(g,m,f){var y=m,x=g,_=f;this.a=4/(_*(1+4*y)),this.b=4*y/(1+4*y),this.eps=4/(_*_*x*(1+4*y))},a.prototype.computeB=function(g,m,f){var y=this.computeGW(),x=this.computeGq(),_=this.computeGiMf();return-x*g-y*m-_*f},a.prototype.computeGq=function(){var g=this.jacobianElementA,m=this.jacobianElementB,f=this.bi,y=this.bj,x=f.position,_=y.position;return g.spatial.dot(x)+m.spatial.dot(_)};var l=new o;a.prototype.computeGW=function(){var g=this.jacobianElementA,m=this.jacobianElementB,f=this.bi,y=this.bj,x=f.velocity,_=y.velocity,M=f.angularVelocity||l,R=y.angularVelocity||l;return g.multiplyVectors(x,M)+m.multiplyVectors(_,R)},a.prototype.computeGWlambda=function(){var g=this.jacobianElementA,m=this.jacobianElementB,f=this.bi,y=this.bj,x=f.vlambda,_=y.vlambda,M=f.wlambda||l,R=y.wlambda||l;return g.multiplyVectors(x,M)+m.multiplyVectors(_,R)};var u=new o,h=new o,c=new o,d=new o;a.prototype.computeGiMf=function(){var g=this.jacobianElementA,m=this.jacobianElementB,f=this.bi,y=this.bj,x=f.force,_=f.torque,M=y.force,R=y.torque,C=f.invMassSolve,B=y.invMassSolve;return f.invInertiaWorldSolve?f.invInertiaWorldSolve.vmult(_,c):c.set(0,0,0),y.invInertiaWorldSolve?y.invInertiaWorldSolve.vmult(R,d):d.set(0,0,0),x.mult(C,u),M.mult(B,h),g.multiplyVectors(u,c)+m.multiplyVectors(h,d)};var p=new o;a.prototype.computeGiMGt=function(){var g=this.jacobianElementA,m=this.jacobianElementB,f=this.bi,y=this.bj,x=f.invMassSolve,_=y.invMassSolve,M=f.invInertiaWorldSolve,R=y.invInertiaWorldSolve,C=x+_;return M&&(M.vmult(g.rotational,p),C+=p.dot(g.rotational)),R&&(R.vmult(m.rotational,p),C+=p.dot(m.rotational)),C};var v=new o;new o,new o,new o,new o,new o,a.prototype.addToWlambda=function(g){var m=this.jacobianElementA,f=this.jacobianElementB,y=this.bi,x=this.bj,_=v;m.spatial.mult(y.invMassSolve*g,_),y.vlambda.vadd(_,y.vlambda),f.spatial.mult(x.invMassSolve*g,_),x.vlambda.vadd(_,x.vlambda),y.invInertiaWorldSolve&&(y.invInertiaWorldSolve.vmult(m.rotational,_),_.mult(g,_),y.wlambda.vadd(_,y.wlambda)),x.invInertiaWorldSolve&&(x.invInertiaWorldSolve.vmult(f.rotational,_),_.mult(g,_),x.wlambda.vadd(_,x.wlambda))},a.prototype.computeC=function(){return this.computeGiMGt()+this.eps}},{"../math/JacobianElement":26,"../math/Vec3":30}],21:[function(e,n,r){n.exports=a;var s=e("./Equation"),o=e("../math/Vec3");e("../math/Mat3");function a(h,c,d){s.call(this,h,c,-d,d),this.ri=new o,this.rj=new o,this.t=new o}a.prototype=new s,a.prototype.constructor=a;var l=new o,u=new o;a.prototype.computeB=function(h){this.a;var c=this.b;this.bi,this.bj;var d=this.ri,p=this.rj,v=l,g=u,m=this.t;d.cross(m,v),p.cross(m,g);var f=this.jacobianElementA,y=this.jacobianElementB;m.negate(f.spatial),v.negate(f.rotational),y.spatial.copy(m),y.rotational.copy(g);var x=this.computeGW(),_=this.computeGiMf(),M=-x*c-h*_;return M}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],22:[function(e,n,r){n.exports=a;var s=e("../math/Vec3");e("../math/Mat3");var o=e("./Equation");function a(h,c,d){d=d||{};var p=typeof d.maxForce<"u"?d.maxForce:1e6;o.call(this,h,c,-p,p),this.axisA=d.axisA?d.axisA.clone():new s(1,0,0),this.axisB=d.axisB?d.axisB.clone():new s(0,1,0),this.maxAngle=Math.PI/2}a.prototype=new o,a.prototype.constructor=a;var l=new s,u=new s;a.prototype.computeB=function(h){var c=this.a,d=this.b,p=this.axisA,v=this.axisB,g=l,m=u,f=this.jacobianElementA,y=this.jacobianElementB;p.cross(v,g),v.cross(p,m),f.rotational.copy(m),y.rotational.copy(g);var x=Math.cos(this.maxAngle)-p.dot(v),_=this.computeGW(),M=this.computeGiMf(),R=-x*c-_*d-h*M;return R}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],23:[function(e,n,r){n.exports=a;var s=e("../math/Vec3");e("../math/Mat3");var o=e("./Equation");function a(l,u,h){h=typeof h<"u"?h:1e6,o.call(this,l,u,-h,h),this.axisA=new s,this.axisB=new s,this.targetVelocity=0}a.prototype=new o,a.prototype.constructor=a,a.prototype.computeB=function(l){this.a;var u=this.b;this.bi,this.bj;var h=this.axisA,c=this.axisB,d=this.jacobianElementA,p=this.jacobianElementB;d.rotational.copy(h),c.negate(p.rotational);var v=this.computeGW()-this.targetVelocity,g=this.computeGiMf(),m=-v*u-l*g;return m}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],24:[function(e,n,r){var s=e("../utils/Utils");n.exports=o;function o(a,l,u){u=s.defaults(u,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=o.idCounter++,this.materials=[a,l],this.friction=u.friction,this.restitution=u.restitution,this.contactEquationStiffness=u.contactEquationStiffness,this.contactEquationRelaxation=u.contactEquationRelaxation,this.frictionEquationStiffness=u.frictionEquationStiffness,this.frictionEquationRelaxation=u.frictionEquationRelaxation}o.idCounter=0},{"../utils/Utils":53}],25:[function(e,n,r){n.exports=s;function s(o){var a="";o=o||{},typeof o=="string"?(a=o,o={}):typeof o=="object"&&(a=""),this.name=a,this.id=s.idCounter++,this.friction=typeof o.friction<"u"?o.friction:-1,this.restitution=typeof o.restitution<"u"?o.restitution:-1}s.idCounter=0},{}],26:[function(e,n,r){n.exports=o;var s=e("./Vec3");function o(){this.spatial=new s,this.rotational=new s}o.prototype.multiplyElement=function(a){return a.spatial.dot(this.spatial)+a.rotational.dot(this.rotational)},o.prototype.multiplyVectors=function(a,l){return a.dot(this.spatial)+l.dot(this.rotational)}},{"./Vec3":30}],27:[function(e,n,r){n.exports=o;var s=e("./Vec3");function o(a){a?this.elements=a:this.elements=[0,0,0,0,0,0,0,0,0]}o.prototype.identity=function(){var a=this.elements;a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=1,a[5]=0,a[6]=0,a[7]=0,a[8]=1},o.prototype.setZero=function(){var a=this.elements;a[0]=0,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=0,a[6]=0,a[7]=0,a[8]=0},o.prototype.setTrace=function(a){var l=this.elements;l[0]=a.x,l[4]=a.y,l[8]=a.z},o.prototype.getTrace=function(l){var l=l||new s,u=this.elements;l.x=u[0],l.y=u[4],l.z=u[8]},o.prototype.vmult=function(a,l){l=l||new s;var u=this.elements,h=a.x,c=a.y,d=a.z;return l.x=u[0]*h+u[1]*c+u[2]*d,l.y=u[3]*h+u[4]*c+u[5]*d,l.z=u[6]*h+u[7]*c+u[8]*d,l},o.prototype.smult=function(a){for(var l=0;l<this.elements.length;l++)this.elements[l]*=a},o.prototype.mmult=function(a,l){for(var u=l||new o,h=0;h<3;h++)for(var c=0;c<3;c++){for(var d=0,p=0;p<3;p++)d+=a.elements[h+p*3]*this.elements[p+c*3];u.elements[h+c*3]=d}return u},o.prototype.scale=function(a,l){l=l||new o;for(var u=this.elements,h=l.elements,c=0;c!==3;c++)h[3*c+0]=a.x*u[3*c+0],h[3*c+1]=a.y*u[3*c+1],h[3*c+2]=a.z*u[3*c+2];return l},o.prototype.solve=function(a,l){l=l||new s;for(var u=3,h=4,c=[],d=0;d<u*h;d++)c.push(0);var d,p;for(d=0;d<3;d++)for(p=0;p<3;p++)c[d+h*p]=this.elements[d+3*p];c[3+4*0]=a.x,c[3+4*1]=a.y,c[3+4*2]=a.z;var v=3,g=v,m,f=4,y;do{if(d=g-v,c[d+h*d]===0){for(p=d+1;p<g;p++)if(c[d+h*p]!==0){m=f;do y=f-m,c[y+h*d]+=c[y+h*p];while(--m);break}}if(c[d+h*d]!==0)for(p=d+1;p<g;p++){var x=c[d+h*p]/c[d+h*d];m=f;do y=f-m,c[y+h*p]=y<=d?0:c[y+h*p]-c[y+h*d]*x;while(--m)}}while(--v);if(l.z=c[2*h+3]/c[2*h+2],l.y=(c[1*h+3]-c[1*h+2]*l.z)/c[1*h+1],l.x=(c[0*h+3]-c[0*h+2]*l.z-c[0*h+1]*l.y)/c[0*h+0],isNaN(l.x)||isNaN(l.y)||isNaN(l.z)||l.x===1/0||l.y===1/0||l.z===1/0)throw"Could not solve equation! Got x=["+l.toString()+"], b=["+a.toString()+"], A=["+this.toString()+"]";return l},o.prototype.e=function(a,l,u){if(u===void 0)return this.elements[l+3*a];this.elements[l+3*a]=u},o.prototype.copy=function(a){for(var l=0;l<a.elements.length;l++)this.elements[l]=a.elements[l];return this},o.prototype.toString=function(){for(var a="",l=",",u=0;u<9;u++)a+=this.elements[u]+l;return a},o.prototype.reverse=function(a){a=a||new o;for(var l=3,u=6,h=[],c=0;c<l*u;c++)h.push(0);var c,d;for(c=0;c<3;c++)for(d=0;d<3;d++)h[c+u*d]=this.elements[c+3*d];h[3+6*0]=1,h[3+6*1]=0,h[3+6*2]=0,h[4+6*0]=0,h[4+6*1]=1,h[4+6*2]=0,h[5+6*0]=0,h[5+6*1]=0,h[5+6*2]=1;var p=3,v=p,g,m=u,f;do{if(c=v-p,h[c+u*c]===0){for(d=c+1;d<v;d++)if(h[c+u*d]!==0){g=m;do f=m-g,h[f+u*c]+=h[f+u*d];while(--g);break}}if(h[c+u*c]!==0)for(d=c+1;d<v;d++){var y=h[c+u*d]/h[c+u*c];g=m;do f=m-g,h[f+u*d]=f<=c?0:h[f+u*d]-h[f+u*c]*y;while(--g)}}while(--p);c=2;do{d=c-1;do{var y=h[c+u*d]/h[c+u*c];g=u;do f=u-g,h[f+u*d]=h[f+u*d]-h[f+u*c]*y;while(--g)}while(d--)}while(--c);c=2;do{var y=1/h[c+u*c];g=u;do f=u-g,h[f+u*c]=h[f+u*c]*y;while(--g)}while(c--);c=2;do{d=2;do{if(f=h[l+d+u*c],isNaN(f)||f===1/0)throw"Could not reverse! A=["+this.toString()+"]";a.e(c,d,f)}while(d--)}while(c--);return a},o.prototype.setRotationFromQuaternion=function(a){var l=a.x,u=a.y,h=a.z,c=a.w,d=l+l,p=u+u,v=h+h,g=l*d,m=l*p,f=l*v,y=u*p,x=u*v,_=h*v,M=c*d,R=c*p,C=c*v,B=this.elements;return B[3*0+0]=1-(y+_),B[3*0+1]=m-C,B[3*0+2]=f+R,B[3*1+0]=m+C,B[3*1+1]=1-(g+_),B[3*1+2]=x-M,B[3*2+0]=f-R,B[3*2+1]=x+M,B[3*2+2]=1-(g+y),this},o.prototype.transpose=function(a){a=a||new o;for(var l=a.elements,u=this.elements,h=0;h!==3;h++)for(var c=0;c!==3;c++)l[3*h+c]=u[3*c+h];return a}},{"./Vec3":30}],28:[function(e,n,r){n.exports=o;var s=e("./Vec3");function o(d,p,v,g){this.x=d!==void 0?d:0,this.y=p!==void 0?p:0,this.z=v!==void 0?v:0,this.w=g!==void 0?g:1}o.prototype.set=function(d,p,v,g){this.x=d,this.y=p,this.z=v,this.w=g},o.prototype.toString=function(){return this.x+","+this.y+","+this.z+","+this.w},o.prototype.toArray=function(){return[this.x,this.y,this.z,this.w]},o.prototype.setFromAxisAngle=function(d,p){var v=Math.sin(p*.5);this.x=d.x*v,this.y=d.y*v,this.z=d.z*v,this.w=Math.cos(p*.5)},o.prototype.toAxisAngle=function(d){d=d||new s,this.normalize();var p=2*Math.acos(this.w),v=Math.sqrt(1-this.w*this.w);return v<.001?(d.x=this.x,d.y=this.y,d.z=this.z):(d.x=this.x/v,d.y=this.y/v,d.z=this.z/v),[d,p]};var a=new s,l=new s;o.prototype.setFromVectors=function(d,p){if(d.isAntiparallelTo(p)){var v=a,g=l;d.tangents(v,g),this.setFromAxisAngle(v,Math.PI)}else{var m=d.cross(p);this.x=m.x,this.y=m.y,this.z=m.z,this.w=Math.sqrt(Math.pow(d.norm(),2)*Math.pow(p.norm(),2))+d.dot(p),this.normalize()}};var u=new s,h=new s,c=new s;o.prototype.mult=function(d,p){p=p||new o;var v=this.w,g=u,m=h,f=c;return g.set(this.x,this.y,this.z),m.set(d.x,d.y,d.z),p.w=v*d.w-g.dot(m),g.cross(m,f),p.x=v*m.x+d.w*g.x+f.x,p.y=v*m.y+d.w*g.y+f.y,p.z=v*m.z+d.w*g.z+f.z,p},o.prototype.inverse=function(d){var p=this.x,v=this.y,g=this.z,m=this.w;d=d||new o,this.conjugate(d);var f=1/(p*p+v*v+g*g+m*m);return d.x*=f,d.y*=f,d.z*=f,d.w*=f,d},o.prototype.conjugate=function(d){return d=d||new o,d.x=-this.x,d.y=-this.y,d.z=-this.z,d.w=this.w,d},o.prototype.normalize=function(){var d=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);d===0?(this.x=0,this.y=0,this.z=0,this.w=0):(d=1/d,this.x*=d,this.y*=d,this.z*=d,this.w*=d)},o.prototype.normalizeFast=function(){var d=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;d===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=d,this.y*=d,this.z*=d,this.w*=d)},o.prototype.vmult=function(d,p){p=p||new s;var v=d.x,g=d.y,m=d.z,f=this.x,y=this.y,x=this.z,_=this.w,M=_*v+y*m-x*g,R=_*g+x*v-f*m,C=_*m+f*g-y*v,B=-f*v-y*g-x*m;return p.x=M*_+B*-f+R*-x-C*-y,p.y=R*_+B*-y+C*-f-M*-x,p.z=C*_+B*-x+M*-y-R*-f,p},o.prototype.copy=function(d){return this.x=d.x,this.y=d.y,this.z=d.z,this.w=d.w,this},o.prototype.toEuler=function(d,p){p=p||"YZX";var v,g,m,f=this.x,y=this.y,x=this.z,_=this.w;switch(p){case"YZX":var M=f*y+x*_;if(M>.499&&(v=2*Math.atan2(f,_),g=Math.PI/2,m=0),M<-.499&&(v=-2*Math.atan2(f,_),g=-Math.PI/2,m=0),isNaN(v)){var R=f*f,C=y*y,B=x*x;v=Math.atan2(2*y*_-2*f*x,1-2*C-2*B),g=Math.asin(2*M),m=Math.atan2(2*f*_-2*y*x,1-2*R-2*B)}break;default:throw new Error("Euler order "+p+" not supported yet.")}d.y=v,d.z=g,d.x=m},o.prototype.setFromEuler=function(d,p,v,g){g=g||"XYZ";var m=Math.cos(d/2),f=Math.cos(p/2),y=Math.cos(v/2),x=Math.sin(d/2),_=Math.sin(p/2),M=Math.sin(v/2);return g==="XYZ"?(this.x=x*f*y+m*_*M,this.y=m*_*y-x*f*M,this.z=m*f*M+x*_*y,this.w=m*f*y-x*_*M):g==="YXZ"?(this.x=x*f*y+m*_*M,this.y=m*_*y-x*f*M,this.z=m*f*M-x*_*y,this.w=m*f*y+x*_*M):g==="ZXY"?(this.x=x*f*y-m*_*M,this.y=m*_*y+x*f*M,this.z=m*f*M+x*_*y,this.w=m*f*y-x*_*M):g==="ZYX"?(this.x=x*f*y-m*_*M,this.y=m*_*y+x*f*M,this.z=m*f*M-x*_*y,this.w=m*f*y+x*_*M):g==="YZX"?(this.x=x*f*y+m*_*M,this.y=m*_*y+x*f*M,this.z=m*f*M-x*_*y,this.w=m*f*y-x*_*M):g==="XZY"&&(this.x=x*f*y-m*_*M,this.y=m*_*y-x*f*M,this.z=m*f*M+x*_*y,this.w=m*f*y+x*_*M),this},o.prototype.clone=function(){return new o(this.x,this.y,this.z,this.w)}},{"./Vec3":30}],29:[function(e,n,r){var s=e("./Vec3"),o=e("./Quaternion");n.exports=a;function a(u){u=u||{},this.position=new s,u.position&&this.position.copy(u.position),this.quaternion=new o,u.quaternion&&this.quaternion.copy(u.quaternion)}var l=new o;a.pointToLocalFrame=function(u,h,c,p){var p=p||new s;return c.vsub(u,p),h.conjugate(l),l.vmult(p,p),p},a.prototype.pointToLocal=function(u,h){return a.pointToLocalFrame(this.position,this.quaternion,u,h)},a.pointToWorldFrame=function(u,h,c,p){var p=p||new s;return h.vmult(c,p),p.vadd(u,p),p},a.prototype.pointToWorld=function(u,h){return a.pointToWorldFrame(this.position,this.quaternion,u,h)},a.prototype.vectorToWorldFrame=function(u,c){var c=c||new s;return this.quaternion.vmult(u,c),c},a.vectorToWorldFrame=function(u,h,c){return u.vmult(h,c),c},a.vectorToLocalFrame=function(u,h,c,p){var p=p||new s;return h.w*=-1,h.vmult(c,p),h.w*=-1,p}},{"./Quaternion":28,"./Vec3":30}],30:[function(e,n,r){n.exports=o;var s=e("./Mat3");function o(h,c,d){this.x=h||0,this.y=c||0,this.z=d||0}o.ZERO=new o(0,0,0),o.UNIT_X=new o(1,0,0),o.UNIT_Y=new o(0,1,0),o.UNIT_Z=new o(0,0,1),o.prototype.cross=function(h,c){var d=h.x,p=h.y,v=h.z,g=this.x,m=this.y,f=this.z;return c=c||new o,c.x=m*v-f*p,c.y=f*d-g*v,c.z=g*p-m*d,c},o.prototype.set=function(h,c,d){return this.x=h,this.y=c,this.z=d,this},o.prototype.setZero=function(){this.x=this.y=this.z=0},o.prototype.vadd=function(h,c){if(c)c.x=h.x+this.x,c.y=h.y+this.y,c.z=h.z+this.z;else return new o(this.x+h.x,this.y+h.y,this.z+h.z)},o.prototype.vsub=function(h,c){if(c)c.x=this.x-h.x,c.y=this.y-h.y,c.z=this.z-h.z;else return new o(this.x-h.x,this.y-h.y,this.z-h.z)},o.prototype.crossmat=function(){return new s([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])},o.prototype.normalize=function(){var h=this.x,c=this.y,d=this.z,p=Math.sqrt(h*h+c*c+d*d);if(p>0){var v=1/p;this.x*=v,this.y*=v,this.z*=v}else this.x=0,this.y=0,this.z=0;return p},o.prototype.unit=function(h){h=h||new o;var c=this.x,d=this.y,p=this.z,v=Math.sqrt(c*c+d*d+p*p);return v>0?(v=1/v,h.x=c*v,h.y=d*v,h.z=p*v):(h.x=1,h.y=0,h.z=0),h},o.prototype.norm=function(){var h=this.x,c=this.y,d=this.z;return Math.sqrt(h*h+c*c+d*d)},o.prototype.length=o.prototype.norm,o.prototype.norm2=function(){return this.dot(this)},o.prototype.lengthSquared=o.prototype.norm2,o.prototype.distanceTo=function(h){var c=this.x,d=this.y,p=this.z,v=h.x,g=h.y,m=h.z;return Math.sqrt((v-c)*(v-c)+(g-d)*(g-d)+(m-p)*(m-p))},o.prototype.distanceSquared=function(h){var c=this.x,d=this.y,p=this.z,v=h.x,g=h.y,m=h.z;return(v-c)*(v-c)+(g-d)*(g-d)+(m-p)*(m-p)},o.prototype.mult=function(h,c){c=c||new o;var d=this.x,p=this.y,v=this.z;return c.x=h*d,c.y=h*p,c.z=h*v,c},o.prototype.scale=o.prototype.mult,o.prototype.dot=function(h){return this.x*h.x+this.y*h.y+this.z*h.z},o.prototype.isZero=function(){return this.x===0&&this.y===0&&this.z===0},o.prototype.negate=function(h){return h=h||new o,h.x=-this.x,h.y=-this.y,h.z=-this.z,h};var a=new o,l=new o;o.prototype.tangents=function(h,c){var d=this.norm();if(d>0){var p=a,v=1/d;p.set(this.x*v,this.y*v,this.z*v);var g=l;Math.abs(p.x)<.9?(g.set(1,0,0),p.cross(g,h)):(g.set(0,1,0),p.cross(g,h)),p.cross(h,c)}else h.set(1,0,0),c.set(0,1,0)},o.prototype.toString=function(){return this.x+","+this.y+","+this.z},o.prototype.toArray=function(){return[this.x,this.y,this.z]},o.prototype.copy=function(h){return this.x=h.x,this.y=h.y,this.z=h.z,this},o.prototype.lerp=function(h,c,d){var p=this.x,v=this.y,g=this.z;d.x=p+(h.x-p)*c,d.y=v+(h.y-v)*c,d.z=g+(h.z-g)*c},o.prototype.almostEquals=function(h,c){return c===void 0&&(c=1e-6),!(Math.abs(this.x-h.x)>c||Math.abs(this.y-h.y)>c||Math.abs(this.z-h.z)>c)},o.prototype.almostZero=function(h){return h===void 0&&(h=1e-6),!(Math.abs(this.x)>h||Math.abs(this.y)>h||Math.abs(this.z)>h)};var u=new o;o.prototype.isAntiparallelTo=function(h,c){return this.negate(u),u.almostEquals(h,c)},o.prototype.clone=function(){return new o(this.x,this.y,this.z)}},{"./Mat3":27}],31:[function(e,n,r){n.exports=c;var s=e("../utils/EventTarget");e("../shapes/Shape");var o=e("../math/Vec3"),a=e("../math/Mat3"),l=e("../math/Quaternion");e("../material/Material");var u=e("../collision/AABB"),h=e("../shapes/Box");function c(P){P=P||{},s.apply(this),this.id=c.idCounter++,this.world=null,this.preStep=null,this.postStep=null,this.vlambda=new o,this.collisionFilterGroup=typeof P.collisionFilterGroup=="number"?P.collisionFilterGroup:1,this.collisionFilterMask=typeof P.collisionFilterMask=="number"?P.collisionFilterMask:1,this.collisionResponse=!0,this.position=new o,P.position&&this.position.copy(P.position),this.previousPosition=new o,this.initPosition=new o,this.velocity=new o,P.velocity&&this.velocity.copy(P.velocity),this.initVelocity=new o,this.force=new o;var z=typeof P.mass=="number"?P.mass:0;this.mass=z,this.invMass=z>0?1/z:0,this.material=P.material||null,this.linearDamping=typeof P.linearDamping=="number"?P.linearDamping:.01,this.type=z<=0?c.STATIC:c.DYNAMIC,typeof P.type==typeof c.STATIC&&(this.type=P.type),this.allowSleep=typeof P.allowSleep<"u"?P.allowSleep:!0,this.sleepState=0,this.sleepSpeedLimit=typeof P.sleepSpeedLimit<"u"?P.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof P.sleepTimeLimit<"u"?P.sleepTimeLimit:1,this.timeLastSleepy=0,this._wakeUpAfterNarrowphase=!1,this.torque=new o,this.quaternion=new l,P.quaternion&&this.quaternion.copy(P.quaternion),this.initQuaternion=new l,this.angularVelocity=new o,P.angularVelocity&&this.angularVelocity.copy(P.angularVelocity),this.initAngularVelocity=new o,this.interpolatedPosition=new o,this.interpolatedQuaternion=new l,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new o,this.invInertia=new o,this.invInertiaWorld=new a,this.invMassSolve=0,this.invInertiaSolve=new o,this.invInertiaWorldSolve=new a,this.fixedRotation=typeof P.fixedRotation<"u"?P.fixedRotation:!1,this.angularDamping=typeof P.angularDamping<"u"?P.angularDamping:.01,this.aabb=new u,this.aabbNeedsUpdate=!0,this.wlambda=new o,P.shape&&this.addShape(P.shape),this.updateMassProperties()}c.prototype=new s,c.prototype.constructor=c,c.DYNAMIC=1,c.STATIC=2,c.KINEMATIC=4,c.AWAKE=0,c.SLEEPY=1,c.SLEEPING=2,c.idCounter=0,c.prototype.wakeUp=function(){var P=this.sleepState;this.sleepState=0,P===c.SLEEPING&&this.dispatchEvent({type:"wakeup"})},c.prototype.sleep=function(){this.sleepState=c.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0)},c.sleepyEvent={type:"sleepy"},c.sleepEvent={type:"sleep"},c.prototype.sleepTick=function(P){if(this.allowSleep){var z=this.sleepState,H=this.velocity.norm2()+this.angularVelocity.norm2(),D=Math.pow(this.sleepSpeedLimit,2);z===c.AWAKE&&H<D?(this.sleepState=c.SLEEPY,this.timeLastSleepy=P,this.dispatchEvent(c.sleepyEvent)):z===c.SLEEPY&&H>D?this.wakeUp():z===c.SLEEPY&&P-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(c.sleepEvent))}},c.prototype.updateSolveMassProperties=function(){this.sleepState===c.SLEEPING||this.type===c.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))},c.prototype.pointToLocalFrame=function(P,H){var H=H||new o;return P.vsub(this.position,H),this.quaternion.conjugate().vmult(H,H),H},c.prototype.vectorToLocalFrame=function(P,H){var H=H||new o;return this.quaternion.conjugate().vmult(P,H),H},c.prototype.pointToWorldFrame=function(P,H){var H=H||new o;return this.quaternion.vmult(P,H),H.vadd(this.position,H),H},c.prototype.vectorToWorldFrame=function(P,H){var H=H||new o;return this.quaternion.vmult(P,H),H};var d=new o,p=new l;c.prototype.addShape=function(P,z,H){var D=new o,k=new l;return z&&D.copy(z),H&&k.copy(H),this.shapes.push(P),this.shapeOffsets.push(D),this.shapeOrientations.push(k),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,this},c.prototype.updateBoundingRadius=function(){for(var P=this.shapes,z=this.shapeOffsets,H=P.length,D=0,k=0;k!==H;k++){var tt=P[k];tt.updateBoundingSphereRadius();var F=z[k].norm(),O=tt.boundingSphereRadius;F+O>D&&(D=F+O)}this.boundingRadius=D};var v=new u;c.prototype.computeAABB=function(){for(var P=this.shapes,z=this.shapeOffsets,H=this.shapeOrientations,D=P.length,k=d,tt=p,F=this.quaternion,O=this.aabb,Z=v,X=0;X!==D;X++){var w=P[X];H[X].mult(F,tt),tt.vmult(z[X],k),k.vadd(this.position,k),w.calculateWorldAABB(k,tt,Z.lowerBound,Z.upperBound),X===0?O.copy(Z):O.extend(Z)}this.aabbNeedsUpdate=!1};var g=new a,m=new a;new a,c.prototype.updateInertiaWorld=function(P){var z=this.invInertia;if(!(z.x===z.y&&z.y===z.z&&!P)){var H=g,D=m;H.setRotationFromQuaternion(this.quaternion),H.transpose(D),H.scale(z,H),H.mmult(D,this.invInertiaWorld)}};var f=new o,y=new o;c.prototype.applyForce=function(P,z){if(this.type===c.DYNAMIC){var H=f;z.vsub(this.position,H);var D=y;H.cross(P,D),this.force.vadd(P,this.force),this.torque.vadd(D,this.torque)}};var x=new o,_=new o;c.prototype.applyLocalForce=function(P,z){if(this.type===c.DYNAMIC){var H=x,D=_;this.vectorToWorldFrame(P,H),this.pointToWorldFrame(z,D),this.applyForce(H,D)}};var M=new o,R=new o,C=new o;c.prototype.applyImpulse=function(P,z){if(this.type===c.DYNAMIC){var H=M;z.vsub(this.position,H);var D=R;D.copy(P),D.mult(this.invMass,D),this.velocity.vadd(D,this.velocity);var k=C;H.cross(P,k),this.invInertiaWorld.vmult(k,k),this.angularVelocity.vadd(k,this.angularVelocity)}};var B=new o,S=new o;c.prototype.applyLocalImpulse=function(P,z){if(this.type===c.DYNAMIC){var H=B,D=S;this.vectorToWorldFrame(P,H),this.pointToWorldFrame(z,D),this.applyImpulse(H,D)}};var E=new o;c.prototype.updateMassProperties=function(){var P=E;this.invMass=this.mass>0?1/this.mass:0;var z=this.inertia,H=this.fixedRotation;this.computeAABB(),P.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),h.calculateInertia(P,this.mass,z),this.invInertia.set(z.x>0&&!H?1/z.x:0,z.y>0&&!H?1/z.y:0,z.z>0&&!H?1/z.z:0),this.updateInertiaWorld(!0)},c.prototype.getVelocityAtWorldPoint=function(P,z){var H=new o;return P.vsub(this.position,H),this.angularVelocity.cross(H,z),this.velocity.vadd(z,z),z}},{"../collision/AABB":3,"../material/Material":25,"../math/Mat3":27,"../math/Quaternion":28,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Shape":43,"../utils/EventTarget":49}],32:[function(e,n,r){e("./Body");var s=e("../math/Vec3"),o=e("../math/Quaternion");e("../collision/RaycastResult");var a=e("../collision/Ray"),l=e("../objects/WheelInfo");n.exports=u;function u(F){this.chassisBody=F.chassisBody,this.wheelInfos=[],this.sliding=!1,this.world=null,this.indexRightAxis=typeof F.indexRightAxis<"u"?F.indexRightAxis:1,this.indexForwardAxis=typeof F.indexForwardAxis<"u"?F.indexForwardAxis:0,this.indexUpAxis=typeof F.indexUpAxis<"u"?F.indexUpAxis:2}new s,new s,new s;var h=new s,c=new s,d=new s;new a,u.prototype.addWheel=function(F){F=F||{};var O=new l(F),Z=this.wheelInfos.length;return this.wheelInfos.push(O),Z},u.prototype.setSteeringValue=function(F,O){var Z=this.wheelInfos[O];Z.steering=F},new s,u.prototype.applyEngineForce=function(F,O){this.wheelInfos[O].engineForce=F},u.prototype.setBrake=function(F,O){this.wheelInfos[O].brake=F},u.prototype.addToWorld=function(F){this.constraints,F.add(this.chassisBody);var O=this;this.preStepCallback=function(){O.updateVehicle(F.dt)},F.addEventListener("preStep",this.preStepCallback),this.world=F},u.prototype.getVehicleAxisWorld=function(F,O){O.set(F===0?1:0,F===1?1:0,F===2?1:0),this.chassisBody.vectorToWorldFrame(O,O)},u.prototype.updateVehicle=function(F){for(var O=this.wheelInfos,Z=O.length,X=this.chassisBody,w=0;w<Z;w++)this.updateWheelTransform(w);this.currentVehicleSpeedKmHour=3.6*X.velocity.norm();var U=new s;this.getVehicleAxisWorld(this.indexForwardAxis,U),U.dot(X.velocity)<0&&(this.currentVehicleSpeedKmHour*=-1);for(var w=0;w<Z;w++)this.castRay(O[w]);this.updateSuspension(F);for(var N=new s,I=new s,w=0;w<Z;w++){var A=O[w],j=A.suspensionForce;j>A.maxSuspensionForce&&(j=A.maxSuspensionForce),A.raycastResult.hitNormalWorld.scale(j*F,N),A.raycastResult.hitPointWorld.vsub(X.position,I),X.applyImpulse(N,A.raycastResult.hitPointWorld)}this.updateFriction(F);var at=new s,nt=new s,K=new s;for(w=0;w<Z;w++){var A=O[w];X.getVelocityAtWorldPoint(A.chassisConnectionPointWorld,K);var lt=1;switch(this.indexUpAxis){case 1:lt=-1;break}if(A.isInContact){this.getVehicleAxisWorld(this.indexForwardAxis,nt);var ut=nt.dot(A.raycastResult.hitNormalWorld);A.raycastResult.hitNormalWorld.scale(ut,at),nt.vsub(at,nt);var q=nt.dot(K);A.deltaRotation=lt*q*F/A.radius}(A.sliding||!A.isInContact)&&A.engineForce!==0&&A.useCustomSlidingRotationalSpeed&&(A.deltaRotation=(A.engineForce>0?1:-1)*A.customSlidingRotationalSpeed*F),Math.abs(A.brake)>Math.abs(A.engineForce)&&(A.deltaRotation=0),A.rotation+=A.deltaRotation,A.deltaRotation*=.99}},u.prototype.updateSuspension=function(F){for(var O=this.chassisBody,Z=O.mass,X=this.wheelInfos,w=X.length,U=0;U<w;U++){var N=X[U];if(N.isInContact){var I,A=N.suspensionRestLength,j=N.suspensionLength,at=A-j;I=N.suspensionStiffness*at*N.clippedInvContactDotSuspension;var nt=N.suspensionRelativeVelocity,K;nt<0?K=N.dampingCompression:K=N.dampingRelaxation,I-=K*nt,N.suspensionForce=I*Z,N.suspensionForce<0&&(N.suspensionForce=0)}else N.suspensionForce=0}},u.prototype.removeFromWorld=function(F){this.constraints,F.remove(this.chassisBody),F.removeEventListener("preStep",this.preStepCallback),this.world=null};var p=new s,v=new s;u.prototype.castRay=function(F){var O=p,Z=v;this.updateWheelTransformWorld(F);var X=this.chassisBody,w=-1,U=F.suspensionRestLength+F.radius;F.directionWorld.scale(U,O);var N=F.chassisConnectionPointWorld;N.vadd(O,Z);var I=F.raycastResult;I.reset();var A=X.collisionResponse;X.collisionResponse=!1,this.world.rayTest(N,Z,I),X.collisionResponse=A;var j=I.body;if(F.raycastResult.groundObject=0,j){w=I.distance,F.raycastResult.hitNormalWorld=I.hitNormalWorld,F.isInContact=!0;var at=I.distance;F.suspensionLength=at-F.radius;var nt=F.suspensionRestLength-F.maxSuspensionTravel,K=F.suspensionRestLength+F.maxSuspensionTravel;F.suspensionLength<nt&&(F.suspensionLength=nt),F.suspensionLength>K&&(F.suspensionLength=K,F.raycastResult.reset());var lt=F.raycastResult.hitNormalWorld.dot(F.directionWorld),ut=new s;X.getVelocityAtWorldPoint(F.raycastResult.hitPointWorld,ut);var q=F.raycastResult.hitNormalWorld.dot(ut);if(lt>=-.1)F.suspensionRelativeVelocity=0,F.clippedInvContactDotSuspension=1/.1;else{var Dt=-1/lt;F.suspensionRelativeVelocity=q*Dt,F.clippedInvContactDotSuspension=Dt}}else F.suspensionLength=F.suspensionRestLength+0*F.maxSuspensionTravel,F.suspensionRelativeVelocity=0,F.directionWorld.scale(-1,F.raycastResult.hitNormalWorld),F.clippedInvContactDotSuspension=1;return w},u.prototype.updateWheelTransformWorld=function(F){F.isInContact=!1;var O=this.chassisBody;O.pointToWorldFrame(F.chassisConnectionPointLocal,F.chassisConnectionPointWorld),O.vectorToWorldFrame(F.directionLocal,F.directionWorld),O.vectorToWorldFrame(F.axleLocal,F.axleWorld)},u.prototype.updateWheelTransform=function(F){var O=h,Z=c,X=d,w=this.wheelInfos[F];this.updateWheelTransformWorld(w),w.directionLocal.scale(-1,O),Z.copy(w.axleLocal),O.cross(Z,X),X.normalize(),Z.normalize();var U=w.steering,N=new o;N.setFromAxisAngle(O,U);var I=new o;I.setFromAxisAngle(Z,w.rotation);var A=w.worldTransform.quaternion;this.chassisBody.quaternion.mult(N,A),A.mult(I,A),A.normalize();var j=w.worldTransform.position;j.copy(w.directionWorld),j.scale(w.suspensionLength,j),j.vadd(w.chassisConnectionPointWorld,j)};var g=[new s(1,0,0),new s(0,1,0),new s(0,0,1)];u.prototype.getWheelTransformWorld=function(F){return this.wheelInfos[F].worldTransform};var m=new s,f=[],y=[],x=1;u.prototype.updateFriction=function(F){for(var O=m,Z=this.wheelInfos,X=Z.length,w=this.chassisBody,U=y,N=f,I=0;I<X;I++){var A=Z[I],j=A.raycastResult.body;A.sideImpulse=0,A.forwardImpulse=0,U[I]||(U[I]=new s),N[I]||(N[I]=new s)}for(var I=0;I<X;I++){var A=Z[I],j=A.raycastResult.body;if(j){var at=N[I],nt=this.getWheelTransformWorld(I);nt.vectorToWorldFrame(g[this.indexRightAxis],at);var K=A.raycastResult.hitNormalWorld,lt=at.dot(K);K.scale(lt,O),at.vsub(O,at),at.normalize(),K.cross(at,U[I]),U[I].normalize(),A.sideImpulse=tt(w,A.raycastResult.hitPointWorld,j,A.raycastResult.hitPointWorld,at),A.sideImpulse*=x}}var ut=1,q=.5;this.sliding=!1;for(var I=0;I<X;I++){var A=Z[I],j=A.raycastResult.body,Dt=0;if(A.slipInfo=1,j){var pt=0,it=A.brake?A.brake:pt;Dt=C(w,j,A.raycastResult.hitPointWorld,U[I],it),Dt+=A.engineForce*F;var ht=it/Dt;A.slipInfo*=ht}if(A.forwardImpulse=0,A.skidInfo=1,j){A.skidInfo=1;var ee=A.suspensionForce*F*A.frictionSlip,Ct=ee,Xt=ee*Ct;A.forwardImpulse=Dt;var Et=A.forwardImpulse*q,se=A.sideImpulse*ut,ae=Et*Et+se*se;if(A.sliding=!1,ae>Xt){this.sliding=!0,A.sliding=!0;var ht=ee/Math.sqrt(ae);A.skidInfo*=ht}}}if(this.sliding)for(var I=0;I<X;I++){var A=Z[I];A.sideImpulse!==0&&A.skidInfo<1&&(A.forwardImpulse*=A.skidInfo,A.sideImpulse*=A.skidInfo)}for(var I=0;I<X;I++){var A=Z[I],L=new s;if(L.copy(A.raycastResult.hitPointWorld),A.forwardImpulse!==0){var T=new s;U[I].scale(A.forwardImpulse,T),w.applyImpulse(T,L)}if(A.sideImpulse!==0){var j=A.raycastResult.body,Q=new s;Q.copy(A.raycastResult.hitPointWorld);var gt=new s;N[I].scale(A.sideImpulse,gt),w.pointToLocalFrame(L,L),L["xyz"[this.indexUpAxis]]*=A.rollInfluence,w.pointToWorldFrame(L,L),w.applyImpulse(gt,L),gt.scale(-1,gt),j.applyImpulse(gt,Q)}}};var _=new s,M=new s,R=new s;function C(F,O,Z,X,w){var U=0,N=Z,I=_,A=M,j=R;F.getVelocityAtWorldPoint(N,I),O.getVelocityAtWorldPoint(N,A),I.vsub(A,j);var at=X.dot(j),nt=z(F,Z,X),K=z(O,Z,X),lt=1,ut=lt/(nt+K);return U=-at*ut,w<U&&(U=w),U<-w&&(U=-w),U}var B=new s,S=new s,E=new s,P=new s;function z(F,O,Z){var X=B,w=S,U=E,N=P;return O.vsub(F.position,X),X.cross(Z,w),F.invInertiaWorld.vmult(w,N),N.cross(X,U),F.invMass+Z.dot(U)}var H=new s,D=new s,k=new s;function tt(F,O,Z,X,w,lt){var N=w.norm2();if(N>1.1)return 0;var I=H,A=D,j=k;F.getVelocityAtWorldPoint(O,I),Z.getVelocityAtWorldPoint(X,A),I.vsub(A,j);var at=w.dot(j),nt=.2,K=1/(F.invMass+Z.invMass),lt=-nt*at*K;return lt}},{"../collision/Ray":9,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Vec3":30,"../objects/WheelInfo":36,"./Body":31}],33:[function(e,n,r){var s=e("./Body"),o=e("../shapes/Sphere"),a=e("../shapes/Box"),l=e("../math/Vec3"),u=e("../constraints/HingeConstraint");n.exports=h;function h(p){if(this.wheelBodies=[],this.coordinateSystem=typeof p.coordinateSystem>"u"?new l(1,2,3):p.coordinateSystem.clone(),this.chassisBody=p.chassisBody,!this.chassisBody){var v=new a(new l(5,2,.5));this.chassisBody=new s(1,v)}this.constraints=[],this.wheelAxes=[],this.wheelForces=[]}h.prototype.addWheel=function(p){p=p||{};var v=p.body;v||(v=new s(1,new o(1.2))),this.wheelBodies.push(v),this.wheelForces.push(0),new l;var g=typeof p.position<"u"?p.position.clone():new l,m=new l;this.chassisBody.pointToWorldFrame(g,m),v.position.set(m.x,m.y,m.z);var f=typeof p.axis<"u"?p.axis.clone():new l(0,1,0);this.wheelAxes.push(f);var y=new u(this.chassisBody,v,{pivotA:g,axisA:f,pivotB:l.ZERO,axisB:f,collideConnected:!1});return this.constraints.push(y),this.wheelBodies.length-1},h.prototype.setSteeringValue=function(p,v){var g=this.wheelAxes[v],m=Math.cos(p),f=Math.sin(p),y=g.x,x=g.y;this.constraints[v].axisA.set(m*y-f*x,f*y+m*x,0)},h.prototype.setMotorSpeed=function(p,v){var g=this.constraints[v];g.enableMotor(),g.motorTargetVelocity=p},h.prototype.disableMotor=function(p){var v=this.constraints[p];v.disableMotor()};var c=new l;h.prototype.setWheelForce=function(p,v){this.wheelForces[v]=p},h.prototype.applyWheelForce=function(p,v){var g=this.wheelAxes[v],m=this.wheelBodies[v],f=m.torque;g.scale(p,c),m.vectorToWorldFrame(c,c),f.vadd(c,f)},h.prototype.addToWorld=function(p){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),m=0;m<g.length;m++)p.add(g[m]);for(var m=0;m<v.length;m++)p.addConstraint(v[m]);p.addEventListener("preStep",this._update.bind(this))},h.prototype._update=function(){for(var p=this.wheelForces,v=0;v<p.length;v++)this.applyWheelForce(p[v],v)},h.prototype.removeFromWorld=function(p){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),m=0;m<g.length;m++)p.remove(g[m]);for(var m=0;m<v.length;m++)p.removeConstraint(v[m])};var d=new l;h.prototype.getWheelSpeed=function(p){var v=this.wheelAxes[p],g=this.wheelBodies[p],m=g.angularVelocity;return this.chassisBody.vectorToWorldFrame(v,d),m.dot(d)}},{"../constraints/HingeConstraint":15,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Sphere":44,"./Body":31}],34:[function(e,n,r){n.exports=o,e("../shapes/Shape");var s=e("../math/Vec3");e("../math/Quaternion"),e("../shapes/Particle"),e("../objects/Body"),e("../material/Material");function o(){this.particles=[],this.density=1,this.smoothingRadius=1,this.speedOfSound=1,this.viscosity=.01,this.eps=1e-6,this.pressures=[],this.densities=[],this.neighbors=[]}o.prototype.add=function(v){this.particles.push(v),this.neighbors.length<this.particles.length&&this.neighbors.push([])},o.prototype.remove=function(v){var g=this.particles.indexOf(v);g!==-1&&(this.particles.splice(g,1),this.neighbors.length>this.particles.length&&this.neighbors.pop())};var a=new s;o.prototype.getNeighbors=function(v,g){for(var m=this.particles.length,f=v.id,y=this.smoothingRadius*this.smoothingRadius,x=a,_=0;_!==m;_++){var M=this.particles[_];M.position.vsub(v.position,x),f!==M.id&&x.norm2()<y&&g.push(M)}};var l=new s,u=new s,h=new s,c=new s,d=new s,p=new s;o.prototype.update=function(){for(var v=this.particles.length,g=l,m=this.speedOfSound,f=this.eps,y=0;y!==v;y++){var x=this.particles[y],_=this.neighbors[y];_.length=0,this.getNeighbors(x,_),_.push(this.particles[y]);for(var M=_.length,R=0,C=0;C!==M;C++){x.position.vsub(_[C].position,g);var B=g.norm(),S=this.w(B);R+=_[C].mass*S}this.densities[y]=R,this.pressures[y]=m*m*(this.densities[y]-this.density)}for(var E=u,P=h,z=c,H=d,D=p,y=0;y!==v;y++){var k=this.particles[y];E.set(0,0,0),P.set(0,0,0);for(var tt,F,_=this.neighbors[y],M=_.length,C=0;C!==M;C++){var O=_[C];k.position.vsub(O.position,H);var Z=H.norm();tt=-O.mass*(this.pressures[y]/(this.densities[y]*this.densities[y]+f)+this.pressures[C]/(this.densities[C]*this.densities[C]+f)),this.gradw(H,z),z.mult(tt,z),E.vadd(z,E),O.velocity.vsub(k.velocity,D),D.mult(1/(1e-4+this.densities[y]*this.densities[C])*this.viscosity*O.mass,D),F=this.nablaw(Z),D.mult(F,D),P.vadd(D,P)}P.mult(k.mass,P),E.mult(k.mass,E),k.force.vadd(P,k.force),k.force.vadd(E,k.force)}},o.prototype.w=function(v){var g=this.smoothingRadius;return 315/(64*Math.PI*Math.pow(g,9))*Math.pow(g*g-v*v,3)},o.prototype.gradw=function(v,g){var m=v.norm(),f=this.smoothingRadius;v.mult(945/(32*Math.PI*Math.pow(f,9))*Math.pow(f*f-m*m,2),g)},o.prototype.nablaw=function(v){var g=this.smoothingRadius,m=945/(32*Math.PI*Math.pow(g,9))*(g*g-v*v)*(7*v*v-3*g*g);return m}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Particle":41,"../shapes/Shape":43}],35:[function(e,n,r){var s=e("../math/Vec3");n.exports=o;function o(y,x,_){_=_||{},this.restLength=typeof _.restLength=="number"?_.restLength:1,this.stiffness=_.stiffness||100,this.damping=_.damping||1,this.bodyA=y,this.bodyB=x,this.localAnchorA=new s,this.localAnchorB=new s,_.localAnchorA&&this.localAnchorA.copy(_.localAnchorA),_.localAnchorB&&this.localAnchorB.copy(_.localAnchorB),_.worldAnchorA&&this.setWorldAnchorA(_.worldAnchorA),_.worldAnchorB&&this.setWorldAnchorB(_.worldAnchorB)}o.prototype.setWorldAnchorA=function(y){this.bodyA.pointToLocalFrame(y,this.localAnchorA)},o.prototype.setWorldAnchorB=function(y){this.bodyB.pointToLocalFrame(y,this.localAnchorB)},o.prototype.getWorldAnchorA=function(y){this.bodyA.pointToWorldFrame(this.localAnchorA,y)},o.prototype.getWorldAnchorB=function(y){this.bodyB.pointToWorldFrame(this.localAnchorB,y)};var a=new s,l=new s,u=new s,h=new s,c=new s,d=new s,p=new s,v=new s,g=new s,m=new s,f=new s;o.prototype.applyForce=function(){var y=this.stiffness,x=this.damping,_=this.restLength,M=this.bodyA,R=this.bodyB,C=a,B=l,S=u,E=h,P=f,z=c,H=d,D=p,k=v,tt=g,F=m;this.getWorldAnchorA(z),this.getWorldAnchorB(H),z.vsub(M.position,D),H.vsub(R.position,k),H.vsub(z,C);var O=C.norm();B.copy(C),B.normalize(),R.velocity.vsub(M.velocity,S),R.angularVelocity.cross(k,P),S.vadd(P,S),M.angularVelocity.cross(D,P),S.vsub(P,S),B.mult(-y*(O-_)-x*S.dot(B),E),M.force.vsub(E,M.force),R.force.vadd(E,R.force),D.cross(E,tt),k.cross(E,F),M.torque.vsub(tt,M.torque),R.torque.vadd(F,R.torque)}},{"../math/Vec3":30}],36:[function(e,n,r){var s=e("../math/Vec3"),o=e("../math/Transform"),a=e("../collision/RaycastResult"),l=e("../utils/Utils");n.exports=u;function u(d){d=l.defaults(d,{chassisConnectionPointLocal:new s,chassisConnectionPointWorld:new s,directionLocal:new s,directionWorld:new s,axleLocal:new s,axleWorld:new s,suspensionRestLength:1,suspensionMaxLength:2,radius:1,suspensionStiffness:100,dampingCompression:10,dampingRelaxation:10,frictionSlip:1e4,steering:0,rotation:0,deltaRotation:0,rollInfluence:.01,maxSuspensionForce:Number.MAX_VALUE,isFrontWheel:!0,clippedInvContactDotSuspension:1,suspensionRelativeVelocity:0,suspensionForce:0,skidInfo:0,suspensionLength:0,maxSuspensionTravel:1,useCustomSlidingRotationalSpeed:!1,customSlidingRotationalSpeed:-.1}),this.maxSuspensionTravel=d.maxSuspensionTravel,this.customSlidingRotationalSpeed=d.customSlidingRotationalSpeed,this.useCustomSlidingRotationalSpeed=d.useCustomSlidingRotationalSpeed,this.sliding=!1,this.chassisConnectionPointLocal=d.chassisConnectionPointLocal.clone(),this.chassisConnectionPointWorld=d.chassisConnectionPointWorld.clone(),this.directionLocal=d.directionLocal.clone(),this.directionWorld=d.directionWorld.clone(),this.axleLocal=d.axleLocal.clone(),this.axleWorld=d.axleWorld.clone(),this.suspensionRestLength=d.suspensionRestLength,this.suspensionMaxLength=d.suspensionMaxLength,this.radius=d.radius,this.suspensionStiffness=d.suspensionStiffness,this.dampingCompression=d.dampingCompression,this.dampingRelaxation=d.dampingRelaxation,this.frictionSlip=d.frictionSlip,this.steering=0,this.rotation=0,this.deltaRotation=0,this.rollInfluence=d.rollInfluence,this.maxSuspensionForce=d.maxSuspensionForce,this.engineForce=0,this.brake=0,this.isFrontWheel=d.isFrontWheel,this.clippedInvContactDotSuspension=1,this.suspensionRelativeVelocity=0,this.suspensionForce=0,this.skidInfo=0,this.suspensionLength=0,this.sideImpulse=0,this.forwardImpulse=0,this.raycastResult=new a,this.worldTransform=new o,this.isInContact=!1}var c=new s,h=new s,c=new s;u.prototype.updateWheel=function(d){var p=this.raycastResult;if(this.isInContact){var v=p.hitNormalWorld.dot(p.directionWorld);p.hitPointWorld.vsub(d.position,h),d.getVelocityAtWorldPoint(h,c);var g=p.hitNormalWorld.dot(c);if(v>=-.1)this.suspensionRelativeVelocity=0,this.clippedInvContactDotSuspension=1/.1;else{var m=-1/v;this.suspensionRelativeVelocity=g*m,this.clippedInvContactDotSuspension=m}}else p.suspensionLength=this.suspensionRestLength,this.suspensionRelativeVelocity=0,p.directionWorld.scale(-1,p.hitNormalWorld),this.clippedInvContactDotSuspension=1}},{"../collision/RaycastResult":10,"../math/Transform":29,"../math/Vec3":30,"../utils/Utils":53}],37:[function(e,n,r){n.exports=l;var s=e("./Shape"),o=e("../math/Vec3"),a=e("./ConvexPolyhedron");function l(c){s.call(this),this.type=s.types.BOX,this.halfExtents=c,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}l.prototype=new s,l.prototype.constructor=l,l.prototype.updateConvexPolyhedronRepresentation=function(){var c=this.halfExtents.x,d=this.halfExtents.y,p=this.halfExtents.z,v=o,g=[new v(-c,-d,-p),new v(c,-d,-p),new v(c,d,-p),new v(-c,d,-p),new v(-c,-d,p),new v(c,-d,p),new v(c,d,p),new v(-c,d,p)],m=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]];new v(0,0,1),new v(0,1,0),new v(1,0,0);var f=new a(g,m);this.convexPolyhedronRepresentation=f,f.material=this.material},l.prototype.calculateLocalInertia=function(c,d){return d=d||new o,l.calculateInertia(this.halfExtents,c,d),d},l.calculateInertia=function(c,d,p){var v=c;p.x=1/12*d*(2*v.y*2*v.y+2*v.z*2*v.z),p.y=1/12*d*(2*v.x*2*v.x+2*v.z*2*v.z),p.z=1/12*d*(2*v.y*2*v.y+2*v.x*2*v.x)},l.prototype.getSideNormals=function(c,d){var p=c,v=this.halfExtents;if(p[0].set(v.x,0,0),p[1].set(0,v.y,0),p[2].set(0,0,v.z),p[3].set(-v.x,0,0),p[4].set(0,-v.y,0),p[5].set(0,0,-v.z),d!==void 0)for(var g=0;g!==p.length;g++)d.vmult(p[g],p[g]);return p},l.prototype.volume=function(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z},l.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.halfExtents.norm()};var u=new o;new o,l.prototype.forEachWorldCorner=function(c,d,p){for(var v=this.halfExtents,g=[[v.x,v.y,v.z],[-v.x,v.y,v.z],[-v.x,-v.y,v.z],[-v.x,-v.y,-v.z],[v.x,-v.y,-v.z],[v.x,v.y,-v.z],[-v.x,v.y,-v.z],[v.x,-v.y,v.z]],m=0;m<g.length;m++)u.set(g[m][0],g[m][1],g[m][2]),d.vmult(u,u),c.vadd(u,u),p(u.x,u.y,u.z)};var h=[new o,new o,new o,new o,new o,new o,new o,new o];l.prototype.calculateWorldAABB=function(c,d,p,v){var g=this.halfExtents;h[0].set(g.x,g.y,g.z),h[1].set(-g.x,g.y,g.z),h[2].set(-g.x,-g.y,g.z),h[3].set(-g.x,-g.y,-g.z),h[4].set(g.x,-g.y,-g.z),h[5].set(g.x,g.y,-g.z),h[6].set(-g.x,g.y,-g.z),h[7].set(g.x,-g.y,g.z);var m=h[0];d.vmult(m,m),c.vadd(m,m),v.copy(m),p.copy(m);for(var f=1;f<8;f++){var m=h[f];d.vmult(m,m),c.vadd(m,m);var y=m.x,x=m.y,_=m.z;y>v.x&&(v.x=y),x>v.y&&(v.y=x),_>v.z&&(v.z=_),y<p.x&&(p.x=y),x<p.y&&(p.y=x),_<p.z&&(p.z=_)}}},{"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],38:[function(e,n,r){n.exports=l;var s=e("./Shape"),o=e("../math/Vec3");e("../math/Quaternion");var a=e("../math/Transform");function l(w,U,N){s.call(this),this.type=s.types.CONVEXPOLYHEDRON,this.vertices=w||[],this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.faces=U||[],this.faceNormals=[],this.computeNormals(),this.worldFaceNormalsNeedsUpdate=!0,this.worldFaceNormals=[],this.uniqueEdges=[],this.uniqueAxes=N?N.slice():null,this.computeEdges(),this.updateBoundingSphereRadius()}l.prototype=new s,l.prototype.constructor=l;var u=new o;l.prototype.computeEdges=function(){var w=this.faces,U=this.vertices;U.length;var N=this.uniqueEdges;N.length=0;for(var I=u,A=0;A!==w.length;A++)for(var j=w[A],at=j.length,nt=0;nt!==at;nt++){var K=(nt+1)%at;U[j[nt]].vsub(U[j[K]],I),I.normalize();for(var lt=!1,ut=0;ut!==N.length;ut++)if(N[ut].almostEquals(I)||N[ut].almostEquals(I)){lt=!0;break}lt||N.push(I.clone())}},l.prototype.computeNormals=function(){this.faceNormals.length=this.faces.length;for(var w=0;w<this.faces.length;w++){for(var U=0;U<this.faces[w].length;U++)if(!this.vertices[this.faces[w][U]])throw new Error("Vertex "+this.faces[w][U]+" not found!");var N=this.faceNormals[w]||new o;this.getFaceNormal(w,N),N.negate(N),this.faceNormals[w]=N;var I=this.vertices[this.faces[w][0]];if(N.dot(I)<0){console.error(".faceNormals["+w+"] = Vec3("+N.toString()+") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");for(var U=0;U<this.faces[w].length;U++)console.warn(".vertices["+this.faces[w][U]+"] = Vec3("+this.vertices[this.faces[w][U]].toString()+")")}}};var h=new o,c=new o;l.computeNormal=function(w,U,N,I){U.vsub(w,c),N.vsub(U,h),h.cross(c,I),I.isZero()||I.normalize()},l.prototype.getFaceNormal=function(w,U){var N=this.faces[w],I=this.vertices[N[0]],A=this.vertices[N[1]],j=this.vertices[N[2]];return l.computeNormal(I,A,j,U)};var d=new o;l.prototype.clipAgainstHull=function(w,U,N,I,A,j,at,nt,K){for(var lt=d,ut=-1,q=-Number.MAX_VALUE,Dt=0;Dt<N.faces.length;Dt++){lt.copy(N.faceNormals[Dt]),A.vmult(lt,lt);var pt=lt.dot(j);pt>q&&(q=pt,ut=Dt)}for(var it=[],ht=N.faces[ut],ee=ht.length,Ct=0;Ct<ee;Ct++){var Xt=N.vertices[ht[Ct]],Et=new o;Et.copy(Xt),A.vmult(Et,Et),I.vadd(Et,Et),it.push(Et)}ut>=0&&this.clipFaceAgainstHull(j,w,U,it,at,nt,K)};var p=new o,v=new o,g=new o,m=new o,f=new o,y=new o;l.prototype.findSeparatingAxis=function(w,U,N,I,A,j,at,nt){var K=p,lt=v,ut=g,q=m,Dt=f,pt=y,it=Number.MAX_VALUE,ht=this;if(ht.uniqueAxes)for(var Ct=0;Ct!==ht.uniqueAxes.length;Ct++){N.vmult(ht.uniqueAxes[Ct],K);var Et=ht.testSepAxis(K,w,U,N,I,A);if(Et===!1)return!1;Et<it&&(it=Et,j.copy(K))}else for(var ee=at?at.length:ht.faces.length,Ct=0;Ct<ee;Ct++){var Xt=at?at[Ct]:Ct;K.copy(ht.faceNormals[Xt]),N.vmult(K,K);var Et=ht.testSepAxis(K,w,U,N,I,A);if(Et===!1)return!1;Et<it&&(it=Et,j.copy(K))}if(w.uniqueAxes)for(var Ct=0;Ct!==w.uniqueAxes.length;Ct++){A.vmult(w.uniqueAxes[Ct],lt);var Et=ht.testSepAxis(lt,w,U,N,I,A);if(Et===!1)return!1;Et<it&&(it=Et,j.copy(lt))}else for(var se=nt?nt.length:w.faces.length,Ct=0;Ct<se;Ct++){var Xt=nt?nt[Ct]:Ct;lt.copy(w.faceNormals[Xt]),A.vmult(lt,lt);var Et=ht.testSepAxis(lt,w,U,N,I,A);if(Et===!1)return!1;Et<it&&(it=Et,j.copy(lt))}for(var ae=0;ae!==ht.uniqueEdges.length;ae++){N.vmult(ht.uniqueEdges[ae],q);for(var L=0;L!==w.uniqueEdges.length;L++)if(A.vmult(w.uniqueEdges[L],Dt),q.cross(Dt,pt),!pt.almostZero()){pt.normalize();var T=ht.testSepAxis(pt,w,U,N,I,A);if(T===!1)return!1;T<it&&(it=T,j.copy(pt))}}return I.vsub(U,ut),ut.dot(j)>0&&j.negate(j),!0};var x=[],_=[];l.prototype.testSepAxis=function(w,U,N,I,A,j){var at=this;l.project(at,w,N,I,x),l.project(U,w,A,j,_);var nt=x[0],K=x[1],lt=_[0],ut=_[1],q=nt-ut,Dt=lt-K,pt=q<Dt?q:Dt;return pt};var M=new o,R=new o;l.prototype.calculateLocalInertia=function(w,U){this.computeLocalAABB(M,R);var N=R.x-M.x,I=R.y-M.y,A=R.z-M.z;U.x=1/12*w*(2*I*2*I+2*A*2*A),U.y=1/12*w*(2*N*2*N+2*A*2*A),U.z=1/12*w*(2*I*2*I+2*N*2*N)},l.prototype.getPlaneConstantOfFace=function(w){var U=this.faces[w],N=this.faceNormals[w],I=this.vertices[U[0]],A=-N.dot(I);return A};var C=new o,B=new o,S=new o,E=new o,P=new o,z=new o,H=new o,D=new o;l.prototype.clipFaceAgainstHull=function(w,U,N,I,A,j,at){for(var nt=C,K=B,lt=S,ut=E,q=P,Dt=z,pt=H,it=D,ht=this,ee=[],Ct=I,Xt=ee,Et=-1,se=Number.MAX_VALUE,ae=0;ae<ht.faces.length;ae++){nt.copy(ht.faceNormals[ae]),N.vmult(nt,nt);var L=nt.dot(w);L<se&&(se=L,Et=ae)}if(!(Et<0)){var T=ht.faces[Et];T.connectedFaces=[];for(var Q=0;Q<ht.faces.length;Q++)for(var gt=0;gt<ht.faces[Q].length;gt++)T.indexOf(ht.faces[Q][gt])!==-1&&Q!==Et&&T.connectedFaces.indexOf(Q)===-1&&T.connectedFaces.push(Q);Ct.length;for(var ft=T.length,St=0;St<ft;St++){var Wt=ht.vertices[T[St]],At=ht.vertices[T[(St+1)%ft]];Wt.vsub(At,K),lt.copy(K),N.vmult(lt,lt),U.vadd(lt,lt),ut.copy(this.faceNormals[Et]),N.vmult(ut,ut),U.vadd(ut,ut),lt.cross(ut,q),q.negate(q),Dt.copy(Wt),N.vmult(Dt,Dt),U.vadd(Dt,Dt),-Dt.dot(q);var bt;{var Ft=T.connectedFaces[St];pt.copy(this.faceNormals[Ft]);var G=this.getPlaneConstantOfFace(Ft);it.copy(pt),N.vmult(it,it);var bt=G-it.dot(U)}for(this.clipFaceAgainstPlane(Ct,Xt,it,bt);Ct.length;)Ct.shift();for(;Xt.length;)Ct.push(Xt.shift())}pt.copy(this.faceNormals[Et]);var G=this.getPlaneConstantOfFace(Et);it.copy(pt),N.vmult(it,it);for(var bt=G-it.dot(U),Q=0;Q<Ct.length;Q++){var mt=it.dot(Ct[Q])+bt;if(mt<=A&&(console.log("clamped: depth="+mt+" to minDist="+(A+"")),mt=A),mt<=j){var ne=Ct[Q];if(mt<=0){var Kt={point:ne,normal:it,depth:mt};at.push(Kt)}}}}},l.prototype.clipFaceAgainstPlane=function(w,U,N,I){var A,j,at=w.length;if(at<2)return U;var nt=w[w.length-1],K=w[0];A=N.dot(nt)+I;for(var lt=0;lt<at;lt++){if(K=w[lt],j=N.dot(K)+I,A<0)if(j<0){var ut=new o;ut.copy(K),U.push(ut)}else{var ut=new o;nt.lerp(K,A/(A-j),ut),U.push(ut)}else if(j<0){var ut=new o;nt.lerp(K,A/(A-j),ut),U.push(ut),U.push(K)}nt=K,A=j}return U},l.prototype.computeWorldVertices=function(w,U){for(var N=this.vertices.length;this.worldVertices.length<N;)this.worldVertices.push(new o);for(var I=this.vertices,A=this.worldVertices,j=0;j!==N;j++)U.vmult(I[j],A[j]),w.vadd(A[j],A[j]);this.worldVerticesNeedsUpdate=!1},new o,l.prototype.computeLocalAABB=function(w,U){var N=this.vertices.length,I=this.vertices;w.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),U.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(var A=0;A<N;A++){var j=I[A];j.x<w.x?w.x=j.x:j.x>U.x&&(U.x=j.x),j.y<w.y?w.y=j.y:j.y>U.y&&(U.y=j.y),j.z<w.z?w.z=j.z:j.z>U.z&&(U.z=j.z)}},l.prototype.computeWorldFaceNormals=function(w){for(var U=this.faceNormals.length;this.worldFaceNormals.length<U;)this.worldFaceNormals.push(new o);for(var N=this.faceNormals,I=this.worldFaceNormals,A=0;A!==U;A++)w.vmult(N[A],I[A]);this.worldFaceNormalsNeedsUpdate=!1},l.prototype.updateBoundingSphereRadius=function(){for(var w=0,U=this.vertices,N=0,I=U.length;N!==I;N++){var A=U[N].norm2();A>w&&(w=A)}this.boundingSphereRadius=Math.sqrt(w)};var k=new o;l.prototype.calculateWorldAABB=function(w,U,N,I){for(var A=this.vertices.length,j=this.vertices,at,nt,K,lt,ut,q,Dt=0;Dt<A;Dt++){k.copy(j[Dt]),U.vmult(k,k),w.vadd(k,k);var pt=k;pt.x<at||at===void 0?at=pt.x:(pt.x>lt||lt===void 0)&&(lt=pt.x),pt.y<nt||nt===void 0?nt=pt.y:(pt.y>ut||ut===void 0)&&(ut=pt.y),pt.z<K||K===void 0?K=pt.z:(pt.z>q||q===void 0)&&(q=pt.z)}N.set(at,nt,K),I.set(lt,ut,q)},l.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},l.prototype.getAveragePointLocal=function(w){w=w||new o;for(var U=this.vertices.length,N=this.vertices,I=0;I<U;I++)w.vadd(N[I],w);return w.mult(1/U,w),w},l.prototype.transformAllPoints=function(w,U){var N=this.vertices.length,I=this.vertices;if(U){for(var A=0;A<N;A++){var j=I[A];U.vmult(j,j)}for(var A=0;A<this.faceNormals.length;A++){var j=this.faceNormals[A];U.vmult(j,j)}}if(w)for(var A=0;A<N;A++){var j=I[A];j.vadd(w,j)}};var tt=new o,F=new o,O=new o;l.prototype.pointIsInside=function(w){var U=this.vertices.length,N=this.vertices,I=this.faces,A=this.faceNormals,j=null,at=this.faces.length,nt=tt;this.getAveragePointLocal(nt);for(var K=0;K<at;K++){this.faces[K].length;var U=A[K],lt=N[I[K][0]],ut=F;w.vsub(lt,ut);var q=U.dot(ut),Dt=O;nt.vsub(lt,Dt);var pt=U.dot(Dt);if(q<0&&pt>0||q>0&&pt<0)return!1}return j?1:-1},new o;var Z=new o,X=new o;l.project=function(w,U,N,I,A){var j=w.vertices.length,at=Z,nt=0,K=0,lt=X,ut=w.vertices;lt.setZero(),a.vectorToLocalFrame(N,I,U,at),a.pointToLocalFrame(N,I,lt,lt);var q=lt.dot(at);K=nt=ut[0].dot(at);for(var Dt=1;Dt<j;Dt++){var pt=ut[Dt].dot(at);pt>nt&&(nt=pt),pt<K&&(K=pt)}if(K-=q,nt-=q,K>nt){var it=K;K=nt,nt=it}A[0]=nt,A[1]=K}},{"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"./Shape":43}],39:[function(e,n,r){n.exports=l;var s=e("./Shape"),o=e("../math/Vec3");e("../math/Quaternion");var a=e("./ConvexPolyhedron");function l(u,h,c,d){var p=d,v=[],g=[],m=[],f=[],y=[],x=Math.cos,_=Math.sin;v.push(new o(h*x(0),h*_(0),-c*.5)),f.push(0),v.push(new o(u*x(0),u*_(0),c*.5)),y.push(1);for(var M=0;M<p;M++){var R=2*Math.PI/p*(M+1),C=2*Math.PI/p*(M+.5);M<p-1?(v.push(new o(h*x(R),h*_(R),-c*.5)),f.push(2*M+2),v.push(new o(u*x(R),u*_(R),c*.5)),y.push(2*M+3),m.push([2*M+2,2*M+3,2*M+1,2*M])):m.push([0,1,2*M+1,2*M]),(p%2===1||M<p/2)&&g.push(new o(x(C),_(C),0))}m.push(y),g.push(new o(0,0,1));for(var B=[],M=0;M<f.length;M++)B.push(f[f.length-M-1]);m.push(B),this.type=s.types.CONVEXPOLYHEDRON,a.call(this,v,m,g)}l.prototype=new a},{"../math/Quaternion":28,"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],40:[function(e,n,r){var s=e("./Shape"),o=e("./ConvexPolyhedron"),a=e("../math/Vec3"),l=e("../utils/Utils");n.exports=u;function u(h,c){c=l.defaults(c,{maxValue:null,minValue:null,elementSize:1}),this.data=h,this.maxValue=c.maxValue,this.minValue=c.minValue,this.elementSize=c.elementSize,c.minValue===null&&this.updateMinValue(),c.maxValue===null&&this.updateMaxValue(),this.cacheEnabled=!0,s.call(this),this.pillarConvex=new o,this.pillarOffset=new a,this.type=s.types.HEIGHTFIELD,this.updateBoundingSphereRadius(),this._cachedPillars={}}u.prototype=new s,u.prototype.update=function(){this._cachedPillars={}},u.prototype.updateMinValue=function(){for(var h=this.data,c=h[0][0],d=0;d!==h.length;d++)for(var p=0;p!==h[d].length;p++){var v=h[d][p];v<c&&(c=v)}this.minValue=c},u.prototype.updateMaxValue=function(){for(var h=this.data,c=h[0][0],d=0;d!==h.length;d++)for(var p=0;p!==h[d].length;p++){var v=h[d][p];v>c&&(c=v)}this.maxValue=c},u.prototype.setHeightValueAtIndex=function(h,c,d){var p=this.data;p[h][c]=d,this.clearCachedConvexTrianglePillar(h,c,!1),h>0&&(this.clearCachedConvexTrianglePillar(h-1,c,!0),this.clearCachedConvexTrianglePillar(h-1,c,!1)),c>0&&(this.clearCachedConvexTrianglePillar(h,c-1,!0),this.clearCachedConvexTrianglePillar(h,c-1,!1)),c>0&&h>0&&this.clearCachedConvexTrianglePillar(h-1,c-1,!0)},u.prototype.getRectMinMax=function(h,c,d,p,v){v=v||[];for(var g=this.data,m=this.minValue,f=h;f<=d;f++)for(var y=c;y<=p;y++){var x=g[f][y];x>m&&(m=x)}v[0]=this.minValue,v[1]=m},u.prototype.getIndexOfPosition=function(h,c,d,p){var v=this.elementSize,g=this.data,m=Math.floor(h/v),f=Math.floor(c/v);return d[0]=m,d[1]=f,p&&(m<0&&(m=0),f<0&&(f=0),m>=g.length-1&&(m=g.length-1),f>=g[0].length-1&&(f=g[0].length-1)),!(m<0||f<0||m>=g.length-1||f>=g[0].length-1)},u.prototype.getHeightAt=function(h,c,d){var p=[];this.getIndexOfPosition(h,c,p,d);var v=[];return this.getRectMinMax(p[0],p[1]+1,p[0],p[1]+1,v),(v[0]+v[1])/2},u.prototype.getCacheConvexTrianglePillarKey=function(h,c,d){return h+"_"+c+"_"+(d?1:0)},u.prototype.getCachedConvexTrianglePillar=function(h,c,d){return this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,c,d)]},u.prototype.setCachedConvexTrianglePillar=function(h,c,d,p,v){this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,c,d)]={convex:p,offset:v}},u.prototype.clearCachedConvexTrianglePillar=function(h,c,d){delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,c,d)]},u.prototype.getConvexTrianglePillar=function(h,c,d){var p=this.pillarConvex,v=this.pillarOffset;if(this.cacheEnabled){var g=this.getCachedConvexTrianglePillar(h,c,d);if(g){this.pillarConvex=g.convex,this.pillarOffset=g.offset;return}p=new o,v=new a,this.pillarConvex=p,this.pillarOffset=v}var g=this.data,m=this.elementSize,f=p.faces;p.vertices.length=6;for(var y=0;y<6;y++)p.vertices[y]||(p.vertices[y]=new a);f.length=5;for(var y=0;y<5;y++)f[y]||(f[y]=[]);var x=p.vertices,_=(Math.min(g[h][c],g[h+1][c],g[h][c+1],g[h+1][c+1])-this.minValue)/2+this.minValue;d?(v.set((h+.75)*m,(c+.75)*m,_),x[0].set(.25*m,.25*m,g[h+1][c+1]-_),x[1].set(-.75*m,.25*m,g[h][c+1]-_),x[2].set(.25*m,-.75*m,g[h+1][c]-_),x[3].set(.25*m,.25*m,-_-1),x[4].set(-.75*m,.25*m,-_-1),x[5].set(.25*m,-.75*m,-_-1),f[0][0]=0,f[0][1]=1,f[0][2]=2,f[1][0]=5,f[1][1]=4,f[1][2]=3,f[2][0]=2,f[2][1]=5,f[2][2]=3,f[2][3]=0,f[3][0]=3,f[3][1]=4,f[3][2]=1,f[3][3]=0,f[4][0]=1,f[4][1]=4,f[4][2]=5,f[4][3]=2):(v.set((h+.25)*m,(c+.25)*m,_),x[0].set(-.25*m,-.25*m,g[h][c]-_),x[1].set(.75*m,-.25*m,g[h+1][c]-_),x[2].set(-.25*m,.75*m,g[h][c+1]-_),x[3].set(-.25*m,-.25*m,-_-1),x[4].set(.75*m,-.25*m,-_-1),x[5].set(-.25*m,.75*m,-_-1),f[0][0]=0,f[0][1]=1,f[0][2]=2,f[1][0]=5,f[1][1]=4,f[1][2]=3,f[2][0]=0,f[2][1]=2,f[2][2]=5,f[2][3]=3,f[3][0]=1,f[3][1]=0,f[3][2]=3,f[3][3]=4,f[4][0]=4,f[4][1]=5,f[4][2]=2,f[4][3]=1),p.computeNormals(),p.computeEdges(),p.updateBoundingSphereRadius(),this.setCachedConvexTrianglePillar(h,c,d,p,v)},u.prototype.calculateLocalInertia=function(h,c){return c=c||new a,c.set(0,0,0),c},u.prototype.volume=function(){return Number.MAX_VALUE},u.prototype.calculateWorldAABB=function(h,c,d,p){d.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),p.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)},u.prototype.updateBoundingSphereRadius=function(){var h=this.data,c=this.elementSize;this.boundingSphereRadius=new a(h.length*c,h[0].length*c,Math.max(Math.abs(this.maxValue),Math.abs(this.minValue))).norm()}},{"../math/Vec3":30,"../utils/Utils":53,"./ConvexPolyhedron":38,"./Shape":43}],41:[function(e,n,r){n.exports=a;var s=e("./Shape"),o=e("../math/Vec3");function a(){s.call(this),this.type=s.types.PARTICLE}a.prototype=new s,a.prototype.constructor=a,a.prototype.calculateLocalInertia=function(l,u){return u=u||new o,u.set(0,0,0),u},a.prototype.volume=function(){return 0},a.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=0},a.prototype.calculateWorldAABB=function(l,u,h,c){h.copy(l),c.copy(l)}},{"../math/Vec3":30,"./Shape":43}],42:[function(e,n,r){n.exports=a;var s=e("./Shape"),o=e("../math/Vec3");function a(){s.call(this),this.type=s.types.PLANE,this.worldNormal=new o,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}a.prototype=new s,a.prototype.constructor=a,a.prototype.computeWorldNormal=function(u){var h=this.worldNormal;h.set(0,0,1),u.vmult(h,h),this.worldNormalNeedsUpdate=!1},a.prototype.calculateLocalInertia=function(u,h){return h=h||new o,h},a.prototype.volume=function(){return Number.MAX_VALUE};var l=new o;a.prototype.calculateWorldAABB=function(u,h,c,d){l.set(0,0,1),h.vmult(l,l);var p=Number.MAX_VALUE;c.set(-p,-p,-p),d.set(p,p,p),l.x===1&&(d.x=u.x),l.y===1&&(d.y=u.y),l.z===1&&(d.z=u.z),l.x===-1&&(c.x=u.x),l.y===-1&&(c.y=u.y),l.z===-1&&(c.z=u.z)},a.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=Number.MAX_VALUE}},{"../math/Vec3":30,"./Shape":43}],43:[function(e,n,r){n.exports=s;var s=e("./Shape");e("../math/Vec3"),e("../math/Quaternion"),e("../material/Material");function s(){this.id=s.idCounter++,this.type=0,this.boundingSphereRadius=0,this.collisionResponse=!0,this.material=null}s.prototype.constructor=s,s.prototype.updateBoundingSphereRadius=function(){throw"computeBoundingSphereRadius() not implemented for shape type "+this.type},s.prototype.volume=function(){throw"volume() not implemented for shape type "+this.type},s.prototype.calculateLocalInertia=function(o,a){throw"calculateLocalInertia() not implemented for shape type "+this.type},s.idCounter=0,s.types={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"./Shape":43}],44:[function(e,n,r){n.exports=a;var s=e("./Shape"),o=e("../math/Vec3");function a(l){if(s.call(this),this.radius=l!==void 0?Number(l):1,this.type=s.types.SPHERE,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}a.prototype=new s,a.prototype.constructor=a,a.prototype.calculateLocalInertia=function(l,u){u=u||new o;var h=2*l*this.radius*this.radius/5;return u.x=h,u.y=h,u.z=h,u},a.prototype.volume=function(){return 4*Math.PI*this.radius/3},a.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.radius},a.prototype.calculateWorldAABB=function(l,u,h,c){for(var d=this.radius,p=["x","y","z"],v=0;v<p.length;v++){var g=p[v];h[g]=l[g]-d,c[g]=l[g]+d}}},{"../math/Vec3":30,"./Shape":43}],45:[function(e,n,r){n.exports=h;var s=e("./Shape"),o=e("../math/Vec3");e("../math/Quaternion");var a=e("../math/Transform"),l=e("../collision/AABB"),u=e("../utils/Octree");function h(B,S){s.call(this),this.type=s.types.TRIMESH,this.vertices=new Float32Array(B),this.indices=new Int16Array(S),this.normals=new Float32Array(S.length),this.aabb=new l,this.edges=null,this.scale=new o(1,1,1),this.tree=new u,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}h.prototype=new s,h.prototype.constructor=h;var c=new o;h.prototype.updateTree=function(){var B=this.tree;B.reset(),B.aabb.copy(this.aabb);var S=this.scale;B.aabb.lowerBound.x*=1/S.x,B.aabb.lowerBound.y*=1/S.y,B.aabb.lowerBound.z*=1/S.z,B.aabb.upperBound.x*=1/S.x,B.aabb.upperBound.y*=1/S.y,B.aabb.upperBound.z*=1/S.z;for(var E=new l,P=new o,z=new o,H=new o,D=[P,z,H],k=0;k<this.indices.length/3;k++){var tt=k*3;this._getUnscaledVertex(this.indices[tt],P),this._getUnscaledVertex(this.indices[tt+1],z),this._getUnscaledVertex(this.indices[tt+2],H),E.setFromPoints(D),B.insert(E,k)}B.removeEmptyNodes()};var d=new l;h.prototype.getTrianglesInAABB=function(B,S){d.copy(B);var E=this.scale,P=E.x,z=E.y,H=E.z,D=d.lowerBound,k=d.upperBound;return D.x/=P,D.y/=z,D.z/=H,k.x/=P,k.y/=z,k.z/=H,this.tree.aabbQuery(d,S)},h.prototype.setScale=function(B){var S=this.scale.x===this.scale.y===this.scale.z,E=B.x===B.y===B.z;S&&E||this.updateNormals(),this.scale.copy(B),this.updateAABB(),this.updateBoundingSphereRadius()},h.prototype.updateNormals=function(){for(var B=c,S=this.normals,E=0;E<this.indices.length/3;E++){var P=E*3,z=this.indices[P],H=this.indices[P+1],D=this.indices[P+2];this.getVertex(z,f),this.getVertex(H,y),this.getVertex(D,x),h.computeNormal(y,f,x,B),S[P]=B.x,S[P+1]=B.y,S[P+2]=B.z}},h.prototype.updateEdges=function(){for(var B={},S=function(tt,F){var O=z<H?z+"_"+H:H+"_"+z;B[O]=!0},E=0;E<this.indices.length/3;E++){var P=E*3,z=this.indices[P],H=this.indices[P+1];this.indices[P+2],S(),S(),S()}var D=Object.keys(B);this.edges=new Int16Array(D.length*2);for(var E=0;E<D.length;E++){var k=D[E].split("_");this.edges[2*E]=parseInt(k[0],10),this.edges[2*E+1]=parseInt(k[1],10)}},h.prototype.getEdgeVertex=function(B,S,E){var P=this.edges[B*2+(S?1:0)];this.getVertex(P,E)};var p=new o,v=new o;h.prototype.getEdgeVector=function(B,S){var E=p,P=v;this.getEdgeVertex(B,0,E),this.getEdgeVertex(B,1,P),P.vsub(E,S)};var g=new o,m=new o;h.computeNormal=function(B,S,E,P){S.vsub(B,m),E.vsub(S,g),g.cross(m,P),P.isZero()||P.normalize()};var f=new o,y=new o,x=new o;h.prototype.getVertex=function(B,S){var E=this.scale;return this._getUnscaledVertex(B,S),S.x*=E.x,S.y*=E.y,S.z*=E.z,S},h.prototype._getUnscaledVertex=function(B,S){var E=B*3,P=this.vertices;return S.set(P[E],P[E+1],P[E+2])},h.prototype.getWorldVertex=function(B,S,E,P){return this.getVertex(B,P),a.pointToWorldFrame(S,E,P,P),P},h.prototype.getTriangleVertices=function(B,S,E,P){var z=B*3;this.getVertex(this.indices[z],S),this.getVertex(this.indices[z+1],E),this.getVertex(this.indices[z+2],P)},h.prototype.getNormal=function(B,S){var E=B*3;return S.set(this.normals[E],this.normals[E+1],this.normals[E+2])};var _=new l;h.prototype.calculateLocalInertia=function(B,S){this.computeLocalAABB(_);var E=_.upperBound.x-_.lowerBound.x,P=_.upperBound.y-_.lowerBound.y,z=_.upperBound.z-_.lowerBound.z;return S.set(1/12*B*(2*P*2*P+2*z*2*z),1/12*B*(2*E*2*E+2*z*2*z),1/12*B*(2*P*2*P+2*E*2*E))};var M=new o;h.prototype.computeLocalAABB=function(B){var S=B.lowerBound,E=B.upperBound,P=this.vertices.length;this.vertices;var z=M;this.getVertex(0,z),S.copy(z),E.copy(z);for(var H=0;H!==P;H++)this.getVertex(H,z),z.x<S.x?S.x=z.x:z.x>E.x&&(E.x=z.x),z.y<S.y?S.y=z.y:z.y>E.y&&(E.y=z.y),z.z<S.z?S.z=z.z:z.z>E.z&&(E.z=z.z)},h.prototype.updateAABB=function(){this.computeLocalAABB(this.aabb)},h.prototype.updateBoundingSphereRadius=function(){for(var B=0,S=this.vertices,E=new o,P=0,z=S.length/3;P!==z;P++){this.getVertex(P,E);var H=E.norm2();H>B&&(B=H)}this.boundingSphereRadius=Math.sqrt(B)},new o;var R=new a,C=new l;h.prototype.calculateWorldAABB=function(B,S,E,P){var z=R,H=C;z.position=B,z.quaternion=S,this.aabb.toWorldFrame(z,H),E.copy(H.lowerBound),P.copy(H.upperBound)},h.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},h.createTorus=function(B,S,E,P,z){B=B||1,S=S||.5,E=E||8,P=P||6,z=z||Math.PI*2;for(var H=[],D=[],k=0;k<=E;k++)for(var tt=0;tt<=P;tt++){var F=tt/P*z,O=k/E*Math.PI*2,Z=(B+S*Math.cos(O))*Math.cos(F),X=(B+S*Math.cos(O))*Math.sin(F),w=S*Math.sin(O);H.push(Z,X,w)}for(var k=1;k<=E;k++)for(var tt=1;tt<=P;tt++){var U=(P+1)*k+tt-1,N=(P+1)*(k-1)+tt-1,I=(P+1)*(k-1)+tt,A=(P+1)*k+tt;D.push(U,N,A),D.push(N,I,A)}return new h(H,D)}},{"../collision/AABB":3,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../utils/Octree":50,"./Shape":43}],46:[function(e,n,r){n.exports=o,e("../math/Vec3"),e("../math/Quaternion");var s=e("./Solver");function o(){s.call(this),this.iterations=10,this.tolerance=1e-7}o.prototype=new s;var a=[],l=[],u=[];o.prototype.solve=function(h,c){var d=0,p=this.iterations,v=this.tolerance*this.tolerance,g=this.equations,m=g.length,f=c.bodies,y=f.length,x=h,_,M,R,C,B,S;if(m!==0)for(var E=0;E!==y;E++)f[E].updateSolveMassProperties();var P=l,z=u,H=a;P.length=m,z.length=m,H.length=m;for(var E=0;E!==m;E++){var D=g[E];H[E]=0,z[E]=D.computeB(x),P[E]=1/D.computeC()}if(m!==0){for(var E=0;E!==y;E++){var k=f[E],tt=k.vlambda,F=k.wlambda;tt.set(0,0,0),F&&F.set(0,0,0)}for(d=0;d!==p;d++){C=0;for(var O=0;O!==m;O++){var D=g[O];_=z[O],M=P[O],S=H[O],B=D.computeGWlambda(),R=M*(_-B-D.eps*S),S+R<D.minForce?R=D.minForce-S:S+R>D.maxForce&&(R=D.maxForce-S),H[O]+=R,C+=R>0?R:-R,D.addToWlambda(R)}if(C*C<v)break}for(var E=0;E!==y;E++){var k=f[E],Z=k.velocity,X=k.angularVelocity;Z.vadd(k.vlambda,Z),X&&X.vadd(k.wlambda,X)}}return d}},{"../math/Quaternion":28,"../math/Vec3":30,"./Solver":47}],47:[function(e,n,r){n.exports=s;function s(){this.equations=[]}s.prototype.solve=function(o,a){return 0},s.prototype.addEquation=function(o){o.enabled&&this.equations.push(o)},s.prototype.removeEquation=function(o){var a=this.equations,l=a.indexOf(o);l!==-1&&a.splice(l,1)},s.prototype.removeAllEquations=function(){this.equations.length=0}},{}],48:[function(e,n,r){n.exports=a,e("../math/Vec3"),e("../math/Quaternion");var s=e("./Solver"),o=e("../objects/Body");function a(f){for(s.call(this),this.iterations=10,this.tolerance=1e-7,this.subsolver=f,this.nodes=[],this.nodePool=[];this.nodePool.length<128;)this.nodePool.push(this.createNode())}a.prototype=new s;var l=[],u=[],h={bodies:[]},c=o.STATIC;function d(f){for(var y=f.length,x=0;x!==y;x++){var _=f[x];if(!_.visited&&!(_.body.type&c))return _}return!1}var p=[];function v(f,y,x,_){for(p.push(f),f.visited=!0,y(f,x,_);p.length;)for(var M=p.pop(),R;R=d(M.children);)R.visited=!0,y(R,x,_),p.push(R)}function g(f,y,x){y.push(f.body);for(var _=f.eqs.length,M=0;M!==_;M++){var R=f.eqs[M];x.indexOf(R)===-1&&x.push(R)}}a.prototype.createNode=function(){return{body:null,children:[],eqs:[],visited:!1}},a.prototype.solve=function(f,y){for(var x=l,_=this.nodePool,M=y.bodies,R=this.equations,C=R.length,B=M.length,S=this.subsolver;_.length<B;)_.push(this.createNode());x.length=B;for(var E=0;E<B;E++)x[E]=_[E];for(var E=0;E!==B;E++){var P=x[E];P.body=M[E],P.children.length=0,P.eqs.length=0,P.visited=!1}for(var z=0;z!==C;z++){var H=R[z],E=M.indexOf(H.bi),D=M.indexOf(H.bj),k=x[E],tt=x[D];k.children.push(tt),k.eqs.push(H),tt.children.push(k),tt.eqs.push(H)}var F,O=0,Z=u;S.tolerance=this.tolerance,S.iterations=this.iterations;for(var X=h;F=d(x);){Z.length=0,X.bodies.length=0,v(F,g,X.bodies,Z);var w=Z.length;Z=Z.sort(m);for(var E=0;E!==w;E++)S.addEquation(Z[E]);S.solve(f,X),S.removeAllEquations(),O++}return O};function m(f,y){return y.id-f.id}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"./Solver":47}],49:[function(e,n,r){var s=function(){};n.exports=s,s.prototype={constructor:s,addEventListener:function(o,a){this._listeners===void 0&&(this._listeners={});var l=this._listeners;return l[o]===void 0&&(l[o]=[]),l[o].indexOf(a)===-1&&l[o].push(a),this},hasEventListener:function(o,a){if(this._listeners===void 0)return!1;var l=this._listeners;return l[o]!==void 0&&l[o].indexOf(a)!==-1},removeEventListener:function(o,a){if(this._listeners===void 0)return this;var l=this._listeners;if(l[o]===void 0)return this;var u=l[o].indexOf(a);return u!==-1&&l[o].splice(u,1),this},dispatchEvent:function(o){if(this._listeners===void 0)return this;var a=this._listeners,l=a[o.type];if(l!==void 0){o.target=this;for(var u=0,h=l.length;u<h;u++)l[u].call(this,o)}return this}}},{}],50:[function(e,n,r){var s=e("../collision/AABB"),o=e("../math/Vec3");n.exports=l;function a(c){c=c||{},this.root=c.root||null,this.aabb=c.aabb?c.aabb.clone():new s,this.data=[],this.children=[]}function l(c,d){d=d||{},d.root=null,d.aabb=c,a.call(this,d),this.maxDepth=typeof d.maxDepth<"u"?d.maxDepth:8}l.prototype=new a,a.prototype.reset=function(c,d){this.children.length=this.data.length=0},a.prototype.insert=function(c,d,p){var v=this.data;if(p=p||0,!this.aabb.contains(c))return!1;var g=this.children;if(p<(this.maxDepth||this.root.maxDepth)){var m=!1;g.length||(this.subdivide(),m=!0);for(var f=0;f!==8;f++)if(g[f].insert(c,d,p+1))return!0;m&&(g.length=0)}return v.push(d),!0};var u=new o;a.prototype.subdivide=function(){var c=this.aabb,d=c.lowerBound,p=c.upperBound,v=this.children;v.push(new a({aabb:new s({lowerBound:new o(0,0,0)})}),new a({aabb:new s({lowerBound:new o(1,0,0)})}),new a({aabb:new s({lowerBound:new o(1,1,0)})}),new a({aabb:new s({lowerBound:new o(1,1,1)})}),new a({aabb:new s({lowerBound:new o(0,1,1)})}),new a({aabb:new s({lowerBound:new o(0,0,1)})}),new a({aabb:new s({lowerBound:new o(1,0,1)})}),new a({aabb:new s({lowerBound:new o(0,1,0)})})),p.vsub(d,u),u.scale(.5,u);for(var g=this.root||this,m=0;m!==8;m++){var f=v[m];f.root=g;var y=f.aabb.lowerBound;y.x*=u.x,y.y*=u.y,y.z*=u.z,y.vadd(d,y),y.vadd(u,f.aabb.upperBound)}},a.prototype.aabbQuery=function(c,d){this.data,this.children;for(var p=[this];p.length;){var v=p.pop();v.aabb.overlaps(c)&&Array.prototype.push.apply(d,v.data),Array.prototype.push.apply(p,v.children)}return d};var h=new s;a.prototype.rayQuery=function(c,d,p){return c.getAABB(h),h.toLocalFrame(d,h),this.aabbQuery(h,p),p},a.prototype.removeEmptyNodes=function(){for(var c=[this];c.length;){for(var d=c.pop(),p=d.children.length-1;p>=0;p--)d.children[p].data.length||d.children.splice(p,1);Array.prototype.push.apply(c,d.children)}}},{"../collision/AABB":3,"../math/Vec3":30}],51:[function(e,n,r){n.exports=s;function s(){this.objects=[],this.type=Object}s.prototype.release=function(){for(var o=arguments.length,a=0;a!==o;a++)this.objects.push(arguments[a])},s.prototype.get=function(){return this.objects.length===0?this.constructObject():this.objects.pop()},s.prototype.constructObject=function(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}},{}],52:[function(e,n,r){n.exports=s;function s(){this.data={keys:[]}}s.prototype.get=function(o,a){if(o>a){var l=a;a=o,o=l}return this.data[o+"-"+a]},s.prototype.set=function(o,a,l){if(o>a){var u=a;a=o,o=u}var h=o+"-"+a;this.get(o,a)||this.data.keys.push(h),this.data[h]=l},s.prototype.reset=function(){for(var o=this.data,a=o.keys;a.length>0;){var l=a.pop();delete o[l]}}},{}],53:[function(e,n,r){function s(){}n.exports=s,s.defaults=function(o,a){o=o||{};for(var l in a)l in o||(o[l]=a[l]);return o}},{}],54:[function(e,n,r){n.exports=a;var s=e("../math/Vec3"),o=e("./Pool");function a(){o.call(this),this.type=s}a.prototype=new o,a.prototype.constructObject=function(){return new s}},{"../math/Vec3":30,"./Pool":51}],55:[function(e,n,r){n.exports=v;var s=e("../collision/AABB"),o=e("../shapes/Shape"),a=e("../collision/Ray"),l=e("../math/Vec3"),u=e("../math/Transform");e("../shapes/ConvexPolyhedron");var h=e("../math/Quaternion");e("../solver/Solver");var c=e("../utils/Vec3Pool"),d=e("../equations/ContactEquation"),p=e("../equations/FrictionEquation");function v(ct){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new c,this.world=ct,this.currentContactMaterial=null,this.enableFrictionReduction=!1}v.prototype.createContactEquation=function(ct,ot,vt,_t,oe,kt){var Rt;this.contactPointPool.length?(Rt=this.contactPointPool.pop(),Rt.bi=ct,Rt.bj=ot):Rt=new d(ct,ot),Rt.enabled=ct.collisionResponse&&ot.collisionResponse&&vt.collisionResponse&&_t.collisionResponse;var Ot=this.currentContactMaterial;Rt.restitution=Ot.restitution,Rt.setSpookParams(Ot.contactEquationStiffness,Ot.contactEquationRelaxation,this.world.dt);var rt=vt.material||ct.material,It=_t.material||ot.material;return rt&&It&&rt.restitution>=0&&It.restitution>=0&&(Rt.restitution=rt.restitution*It.restitution),Rt.si=oe||vt,Rt.sj=kt||_t,Rt},v.prototype.createFrictionEquationsFromContact=function(ct,ot){var vt=ct.bi,_t=ct.bj,oe=ct.si,kt=ct.sj,Rt=this.world,Ot=this.currentContactMaterial,rt=Ot.friction,It=oe.material||vt.material,zt=kt.material||_t.material;if(It&&zt&&It.friction>=0&&zt.friction>=0&&(rt=It.friction*zt.friction),rt>0){var Yt=rt*Rt.gravity.length(),Ut=vt.invMass+_t.invMass;Ut>0&&(Ut=1/Ut);var Pt=this.frictionEquationPool,b=Pt.length?Pt.pop():new p(vt,_t,Yt*Ut),W=Pt.length?Pt.pop():new p(vt,_t,Yt*Ut);return b.bi=W.bi=vt,b.bj=W.bj=_t,b.minForce=W.minForce=-Yt*Ut,b.maxForce=W.maxForce=Yt*Ut,b.ri.copy(ct.ri),b.rj.copy(ct.rj),W.ri.copy(ct.ri),W.rj.copy(ct.rj),ct.ni.tangents(b.t,W.t),b.setSpookParams(Ot.frictionEquationStiffness,Ot.frictionEquationRelaxation,Rt.dt),W.setSpookParams(Ot.frictionEquationStiffness,Ot.frictionEquationRelaxation,Rt.dt),b.enabled=W.enabled=ct.enabled,ot.push(b,W),!0}return!1};var g=new l,m=new l,f=new l;v.prototype.createFrictionFromAverage=function(ct){var ot=this.result[this.result.length-1];if(!(!this.createFrictionEquationsFromContact(ot,this.frictionResult)||ct===1)){var vt=this.frictionResult[this.frictionResult.length-2],_t=this.frictionResult[this.frictionResult.length-1];g.setZero(),m.setZero(),f.setZero();var oe=ot.bi;ot.bj;for(var kt=0;kt!==ct;kt++)ot=this.result[this.result.length-1-kt],ot.bodyA!==oe?(g.vadd(ot.ni,g),m.vadd(ot.ri,m),f.vadd(ot.rj,f)):(g.vsub(ot.ni,g),m.vadd(ot.rj,m),f.vadd(ot.ri,f));var Rt=1/ct;m.scale(Rt,vt.ri),f.scale(Rt,vt.rj),_t.ri.copy(vt.ri),_t.rj.copy(vt.rj),g.normalize(),g.tangents(vt.t,_t.t)}};var y=new l,x=new l,_=new h,M=new h;v.prototype.getContacts=function(ct,ot,vt,_t,oe,kt,Rt){this.contactPointPool=oe,this.frictionEquationPool=Rt,this.result=_t,this.frictionResult=kt;for(var Ot=_,rt=M,It=y,zt=x,Yt=0,Ut=ct.length;Yt!==Ut;Yt++){var Pt=ct[Yt],b=ot[Yt],W=null;Pt.material&&b.material&&(W=vt.getContactMaterial(Pt.material,b.material)||null);for(var $=0;$<Pt.shapes.length;$++){Pt.quaternion.mult(Pt.shapeOrientations[$],Ot),Pt.quaternion.vmult(Pt.shapeOffsets[$],It),It.vadd(Pt.position,It);for(var V=Pt.shapes[$],J=0;J<b.shapes.length;J++){b.quaternion.mult(b.shapeOrientations[J],rt),b.quaternion.vmult(b.shapeOffsets[J],zt),zt.vadd(b.position,zt);var xt=b.shapes[J];if(!(It.distanceTo(zt)>V.boundingSphereRadius+xt.boundingSphereRadius)){var Ht=null;V.material&&xt.material&&(Ht=vt.getContactMaterial(V.material,xt.material)||null),this.currentContactMaterial=Ht||W||vt.defaultContactMaterial;var Nt=this[V.type|xt.type];Nt&&(V.type<xt.type?Nt.call(this,V,xt,It,zt,Ot,rt,Pt,b,V,xt):Nt.call(this,xt,V,zt,It,rt,Ot,b,Pt,V,xt))}}}}},v.prototype[o.types.BOX|o.types.BOX]=v.prototype.boxBox=function(ct,ot,vt,_t,oe,kt,Rt,Ot){ct.convexPolyhedronRepresentation.material=ct.material,ot.convexPolyhedronRepresentation.material=ot.material,ct.convexPolyhedronRepresentation.collisionResponse=ct.collisionResponse,ot.convexPolyhedronRepresentation.collisionResponse=ot.collisionResponse,this.convexConvex(ct.convexPolyhedronRepresentation,ot.convexPolyhedronRepresentation,vt,_t,oe,kt,Rt,Ot,ct,ot)},v.prototype[o.types.BOX|o.types.CONVEXPOLYHEDRON]=v.prototype.boxConvex=function(ct,ot,vt,_t,oe,kt,Rt,Ot){ct.convexPolyhedronRepresentation.material=ct.material,ct.convexPolyhedronRepresentation.collisionResponse=ct.collisionResponse,this.convexConvex(ct.convexPolyhedronRepresentation,ot,vt,_t,oe,kt,Rt,Ot,ct,ot)},v.prototype[o.types.BOX|o.types.PARTICLE]=v.prototype.boxParticle=function(ct,ot,vt,_t,oe,kt,Rt,Ot){ct.convexPolyhedronRepresentation.material=ct.material,ct.convexPolyhedronRepresentation.collisionResponse=ct.collisionResponse,this.convexParticle(ct.convexPolyhedronRepresentation,ot,vt,_t,oe,kt,Rt,Ot,ct,ot)},v.prototype[o.types.SPHERE]=v.prototype.sphereSphere=function(ct,ot,vt,_t,oe,kt,Rt,Ot){var rt=this.createContactEquation(Rt,Ot,ct,ot);_t.vsub(vt,rt.ni),rt.ni.normalize(),rt.ri.copy(rt.ni),rt.rj.copy(rt.ni),rt.ri.mult(ct.radius,rt.ri),rt.rj.mult(-ot.radius,rt.rj),rt.ri.vadd(vt,rt.ri),rt.ri.vsub(Rt.position,rt.ri),rt.rj.vadd(_t,rt.rj),rt.rj.vsub(Ot.position,rt.rj),this.result.push(rt),this.createFrictionEquationsFromContact(rt,this.frictionResult)};var R=new l,C=new l,B=new l;v.prototype[o.types.PLANE|o.types.TRIMESH]=v.prototype.planeTrimesh=function(ct,ot,vt,_t,oe,kt,Rt,Ot){var rt=new l,It=R;It.set(0,0,1),oe.vmult(It,It);for(var zt=0;zt<ot.vertices.length/3;zt++){ot.getVertex(zt,rt);var Yt=new l;Yt.copy(rt),u.pointToWorldFrame(_t,kt,Yt,rt);var Ut=C;rt.vsub(vt,Ut);var Pt=It.dot(Ut);if(Pt<=0){var b=this.createContactEquation(Rt,Ot,ct,ot);b.ni.copy(It);var W=B;It.scale(Ut.dot(It),W),rt.vsub(W,W),b.ri.copy(W),b.ri.vsub(Rt.position,b.ri),b.rj.copy(rt),b.rj.vsub(Ot.position,b.rj),this.result.push(b),this.createFrictionEquationsFromContact(b,this.frictionResult)}}};var S=new l,E=new l;new l;var P=new l,z=new l,H=new l,D=new l,k=new l,tt=new l,F=new l,O=new l,Z=new l,X=new l,w=new l,U=new s,N=[];v.prototype[o.types.SPHERE|o.types.TRIMESH]=v.prototype.sphereTrimesh=function(ct,ot,vt,_t,oe,kt,Rt,Ot){var rt=H,It=D,zt=k,Yt=tt,Ut=F,Pt=O,b=U,W=z,$=E,V=N;u.pointToLocalFrame(_t,kt,vt,Ut);var J=ct.radius;b.lowerBound.set(Ut.x-J,Ut.y-J,Ut.z-J),b.upperBound.set(Ut.x+J,Ut.y+J,Ut.z+J),ot.getTrianglesInAABB(b,V);for(var xt=P,Ht=ct.radius*ct.radius,Nt=0;Nt<V.length;Nt++)for(var Vt=0;Vt<3;Vt++)if(ot.getVertex(ot.indices[V[Nt]*3+Vt],xt),xt.vsub(Ut,$),$.norm2()<=Ht){W.copy(xt),u.pointToWorldFrame(_t,kt,W,xt),xt.vsub(vt,$);var Lt=this.createContactEquation(Rt,Ot,ct,ot);Lt.ni.copy($),Lt.ni.normalize(),Lt.ri.copy(Lt.ni),Lt.ri.scale(ct.radius,Lt.ri),Lt.ri.vadd(vt,Lt.ri),Lt.ri.vsub(Rt.position,Lt.ri),Lt.rj.copy(xt),Lt.rj.vsub(Ot.position,Lt.rj),this.result.push(Lt),this.createFrictionEquationsFromContact(Lt,this.frictionResult)}for(var Nt=0;Nt<V.length;Nt++)for(var Vt=0;Vt<3;Vt++){ot.getVertex(ot.indices[V[Nt]*3+Vt],rt),ot.getVertex(ot.indices[V[Nt]*3+(Vt+1)%3],It),It.vsub(rt,zt),Ut.vsub(It,Pt);var ie=Pt.dot(zt);Ut.vsub(rt,Pt);var re=Pt.dot(zt);if(re>0&&ie<0){Ut.vsub(rt,Pt),Yt.copy(zt),Yt.normalize(),re=Pt.dot(Yt),Yt.scale(re,Pt),Pt.vadd(rt,Pt);var me=Pt.distanceTo(Ut);if(me<ct.radius){var Lt=this.createContactEquation(Rt,Ot,ct,ot);Pt.vsub(Ut,Lt.ni),Lt.ni.normalize(),Lt.ni.scale(ct.radius,Lt.ri),u.pointToWorldFrame(_t,kt,Pt,Pt),Pt.vsub(Ot.position,Lt.rj),u.vectorToWorldFrame(kt,Lt.ni,Lt.ni),u.vectorToWorldFrame(kt,Lt.ri,Lt.ri),this.result.push(Lt),this.createFrictionEquationsFromContact(Lt,this.frictionResult)}}}for(var we=Z,_e=X,pe=w,ye=S,Nt=0,Jt=V.length;Nt!==Jt;Nt++){ot.getTriangleVertices(V[Nt],we,_e,pe),ot.getNormal(V[Nt],ye),Ut.vsub(we,Pt);var me=Pt.dot(ye);if(ye.scale(me,Pt),Ut.vsub(Pt,Pt),me=Pt.distanceTo(Ut),a.pointInTriangle(Pt,we,_e,pe)&&me<ct.radius){var Lt=this.createContactEquation(Rt,Ot,ct,ot);Pt.vsub(Ut,Lt.ni),Lt.ni.normalize(),Lt.ni.scale(ct.radius,Lt.ri),u.pointToWorldFrame(_t,kt,Pt,Pt),Pt.vsub(Ot.position,Lt.rj),u.vectorToWorldFrame(kt,Lt.ni,Lt.ni),u.vectorToWorldFrame(kt,Lt.ri,Lt.ri),this.result.push(Lt),this.createFrictionEquationsFromContact(Lt,this.frictionResult)}}V.length=0};var I=new l,A=new l;v.prototype[o.types.SPHERE|o.types.PLANE]=v.prototype.spherePlane=function(ct,ot,vt,_t,oe,kt,Rt,Ot){var rt=this.createContactEquation(Rt,Ot,ct,ot);if(rt.ni.set(0,0,1),kt.vmult(rt.ni,rt.ni),rt.ni.negate(rt.ni),rt.ni.normalize(),rt.ni.mult(ct.radius,rt.ri),vt.vsub(_t,I),rt.ni.mult(rt.ni.dot(I),A),I.vsub(A,rt.rj),-I.dot(rt.ni)<=ct.radius){var It=rt.ri,zt=rt.rj;It.vadd(vt,It),It.vsub(Rt.position,It),zt.vadd(_t,zt),zt.vsub(Ot.position,zt),this.result.push(rt),this.createFrictionEquationsFromContact(rt,this.frictionResult)}};var j=new l,at=new l,nt=new l;function K(ct,ot,vt){for(var _t=null,oe=ct.length,kt=0;kt!==oe;kt++){var Rt=ct[kt],Ot=j;ct[(kt+1)%oe].vsub(Rt,Ot);var rt=at;Ot.cross(ot,rt);var It=nt;vt.vsub(Rt,It);var zt=rt.dot(It);if(_t===null||zt>0&&_t===!0||zt<=0&&_t===!1){_t===null&&(_t=zt>0);continue}else return!1}return!0}var lt=new l,ut=new l,q=new l,Dt=new l,pt=[new l,new l,new l,new l,new l,new l],it=new l,ht=new l,ee=new l,Ct=new l;v.prototype[o.types.SPHERE|o.types.BOX]=v.prototype.sphereBox=function(ct,ot,vt,_t,oe,kt,Rt,Ot){var rt=this.v3pool,It=pt;vt.vsub(_t,lt),ot.getSideNormals(It,kt);for(var zt=ct.radius,Yt=!1,Ut=ht,Pt=ee,b=Ct,W=null,$=0,V=0,J=0,xt=null,Ht=0,Nt=It.length;Ht!==Nt&&Yt===!1;Ht++){var Vt=ut;Vt.copy(It[Ht]);var Lt=Vt.norm();Vt.normalize();var ie=lt.dot(Vt);if(ie<Lt+zt&&ie>0){var re=q,me=Dt;re.copy(It[(Ht+1)%3]),me.copy(It[(Ht+2)%3]);var we=re.norm(),_e=me.norm();re.normalize(),me.normalize();var pe=lt.dot(re),ye=lt.dot(me);if(pe<we&&pe>-we&&ye<_e&&ye>-_e){var Te=Math.abs(ie-Lt-zt);(xt===null||Te<xt)&&(xt=Te,V=pe,J=ye,W=Lt,Ut.copy(Vt),Pt.copy(re),b.copy(me),$++)}}}if($){Yt=!0;var te=this.createContactEquation(Rt,Ot,ct,ot);Ut.mult(-zt,te.ri),te.ni.copy(Ut),te.ni.negate(te.ni),Ut.mult(W,Ut),Pt.mult(V,Pt),Ut.vadd(Pt,Ut),b.mult(J,b),Ut.vadd(b,te.rj),te.ri.vadd(vt,te.ri),te.ri.vsub(Rt.position,te.ri),te.rj.vadd(_t,te.rj),te.rj.vsub(Ot.position,te.rj),this.result.push(te),this.createFrictionEquationsFromContact(te,this.frictionResult)}for(var Jt=rt.get(),je=it,ge=0;ge!==2&&!Yt;ge++)for(var Ee=0;Ee!==2&&!Yt;Ee++)for(var Re=0;Re!==2&&!Yt;Re++)if(Jt.set(0,0,0),ge?Jt.vadd(It[0],Jt):Jt.vsub(It[0],Jt),Ee?Jt.vadd(It[1],Jt):Jt.vsub(It[1],Jt),Re?Jt.vadd(It[2],Jt):Jt.vsub(It[2],Jt),_t.vadd(Jt,je),je.vsub(vt,je),je.norm2()<zt*zt){Yt=!0;var te=this.createContactEquation(Rt,Ot,ct,ot);te.ri.copy(je),te.ri.normalize(),te.ni.copy(te.ri),te.ri.mult(zt,te.ri),te.rj.copy(Jt),te.ri.vadd(vt,te.ri),te.ri.vsub(Rt.position,te.ri),te.rj.vadd(_t,te.rj),te.rj.vsub(Ot.position,te.rj),this.result.push(te),this.createFrictionEquationsFromContact(te,this.frictionResult)}rt.release(Jt),Jt=null;for(var Fe=rt.get(),Ke=rt.get(),te=rt.get(),Ae=rt.get(),Te=rt.get(),Ce=It.length,ge=0;ge!==Ce&&!Yt;ge++)for(var Ee=0;Ee!==Ce&&!Yt;Ee++)if(ge%3!==Ee%3){It[Ee].cross(It[ge],Fe),Fe.normalize(),It[ge].vadd(It[Ee],Ke),te.copy(vt),te.vsub(Ke,te),te.vsub(_t,te);var on=te.dot(Fe);Fe.mult(on,Ae);for(var Re=0;Re===ge%3||Re===Ee%3;)Re++;Te.copy(vt),Te.vsub(Ae,Te),Te.vsub(Ke,Te),Te.vsub(_t,Te);var Qr=Math.abs(on),lr=Te.norm();if(Qr<It[Re].norm()&&lr<zt){Yt=!0;var be=this.createContactEquation(Rt,Ot,ct,ot);Ke.vadd(Ae,be.rj),be.rj.copy(be.rj),Te.negate(be.ni),be.ni.normalize(),be.ri.copy(be.rj),be.ri.vadd(_t,be.ri),be.ri.vsub(vt,be.ri),be.ri.normalize(),be.ri.mult(zt,be.ri),be.ri.vadd(vt,be.ri),be.ri.vsub(Rt.position,be.ri),be.rj.vadd(_t,be.rj),be.rj.vsub(Ot.position,be.rj),this.result.push(be),this.createFrictionEquationsFromContact(be,this.frictionResult)}}rt.release(Fe,Ke,te,Ae,Te)};var Xt=new l,Et=new l,se=new l,ae=new l,L=new l,T=new l,Q=new l,gt=new l,ft=new l,St=new l;v.prototype[o.types.SPHERE|o.types.CONVEXPOLYHEDRON]=v.prototype.sphereConvex=function(ct,ot,vt,_t,oe,kt,Rt,Ot){var rt=this.v3pool;vt.vsub(_t,Xt);for(var It=ot.faceNormals,zt=ot.faces,Yt=ot.vertices,Ut=ct.radius,Pt=0;Pt!==Yt.length;Pt++){var b=Yt[Pt],W=L;kt.vmult(b,W),_t.vadd(W,W);var $=ae;if(W.vsub(vt,$),$.norm2()<Ut*Ut){J=!0;var V=this.createContactEquation(Rt,Ot,ct,ot);V.ri.copy($),V.ri.normalize(),V.ni.copy(V.ri),V.ri.mult(Ut,V.ri),W.vsub(_t,V.rj),V.ri.vadd(vt,V.ri),V.ri.vsub(Rt.position,V.ri),V.rj.vadd(_t,V.rj),V.rj.vsub(Ot.position,V.rj),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult);return}}for(var J=!1,Pt=0,xt=zt.length;Pt!==xt&&J===!1;Pt++){var Ht=It[Pt],Nt=zt[Pt],Vt=T;kt.vmult(Ht,Vt);var Lt=Q;kt.vmult(Yt[Nt[0]],Lt),Lt.vadd(_t,Lt);var ie=gt;Vt.mult(-Ut,ie),vt.vadd(ie,ie);var re=ft;ie.vsub(Lt,re);var me=re.dot(Vt),we=St;if(vt.vsub(Lt,we),me<0&&we.dot(Vt)>0){for(var _e=[],pe=0,ye=Nt.length;pe!==ye;pe++){var Jt=rt.get();kt.vmult(Yt[Nt[pe]],Jt),_t.vadd(Jt,Jt),_e.push(Jt)}if(K(_e,Vt,vt)){J=!0;var V=this.createContactEquation(Rt,Ot,ct,ot);Vt.mult(-Ut,V.ri),Vt.negate(V.ni);var je=rt.get();Vt.mult(-me,je);var ge=rt.get();Vt.mult(-Ut,ge),vt.vsub(_t,V.rj),V.rj.vadd(ge,V.rj),V.rj.vadd(je,V.rj),V.rj.vadd(_t,V.rj),V.rj.vsub(Ot.position,V.rj),V.ri.vadd(vt,V.ri),V.ri.vsub(Rt.position,V.ri),rt.release(je),rt.release(ge),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult);for(var pe=0,Ee=_e.length;pe!==Ee;pe++)rt.release(_e[pe]);return}else for(var pe=0;pe!==Nt.length;pe++){var Re=rt.get(),Fe=rt.get();kt.vmult(Yt[Nt[(pe+1)%Nt.length]],Re),kt.vmult(Yt[Nt[(pe+2)%Nt.length]],Fe),_t.vadd(Re,Re),_t.vadd(Fe,Fe);var Ke=Et;Fe.vsub(Re,Ke);var te=se;Ke.unit(te);var Ae=rt.get(),Te=rt.get();vt.vsub(Re,Te);var Ce=Te.dot(te);te.mult(Ce,Ae),Ae.vadd(Re,Ae);var on=rt.get();if(Ae.vsub(vt,on),Ce>0&&Ce*Ce<Ke.norm2()&&on.norm2()<Ut*Ut){var V=this.createContactEquation(Rt,Ot,ct,ot);Ae.vsub(_t,V.rj),Ae.vsub(vt,V.ni),V.ni.normalize(),V.ni.mult(Ut,V.ri),V.rj.vadd(_t,V.rj),V.rj.vsub(Ot.position,V.rj),V.ri.vadd(vt,V.ri),V.ri.vsub(Rt.position,V.ri),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult);for(var pe=0,Ee=_e.length;pe!==Ee;pe++)rt.release(_e[pe]);rt.release(Re),rt.release(Fe),rt.release(Ae),rt.release(on),rt.release(Te);return}rt.release(Re),rt.release(Fe),rt.release(Ae),rt.release(on),rt.release(Te)}for(var pe=0,Ee=_e.length;pe!==Ee;pe++)rt.release(_e[pe])}}},new l,new l,v.prototype[o.types.PLANE|o.types.BOX]=v.prototype.planeBox=function(ct,ot,vt,_t,oe,kt,Rt,Ot){ot.convexPolyhedronRepresentation.material=ot.material,ot.convexPolyhedronRepresentation.collisionResponse=ot.collisionResponse,this.planeConvex(ct,ot.convexPolyhedronRepresentation,vt,_t,oe,kt,Rt,Ot)};var Wt=new l,At=new l,Ft=new l,G=new l;v.prototype[o.types.PLANE|o.types.CONVEXPOLYHEDRON]=v.prototype.planeConvex=function(ct,ot,vt,_t,oe,kt,Rt,Ot){var rt=Wt,It=At;It.set(0,0,1),oe.vmult(It,It);for(var zt=0,Yt=Ft,Ut=0;Ut!==ot.vertices.length;Ut++){rt.copy(ot.vertices[Ut]),kt.vmult(rt,rt),_t.vadd(rt,rt),rt.vsub(vt,Yt);var Pt=It.dot(Yt);if(Pt<=0){var b=this.createContactEquation(Rt,Ot,ct,ot),W=G;It.mult(It.dot(Yt),W),rt.vsub(W,W),W.vsub(vt,b.ri),b.ni.copy(It),rt.vsub(_t,b.rj),b.ri.vadd(vt,b.ri),b.ri.vsub(Rt.position,b.ri),b.rj.vadd(_t,b.rj),b.rj.vsub(Ot.position,b.rj),this.result.push(b),zt++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(b,this.frictionResult)}}this.enableFrictionReduction&&zt&&this.createFrictionFromAverage(zt)};var bt=new l,mt=new l;v.prototype[o.types.CONVEXPOLYHEDRON]=v.prototype.convexConvex=function(ct,ot,vt,_t,oe,kt,Rt,Ot,rt,It,zt,Yt){var Ut=bt;if(!(vt.distanceTo(_t)>ct.boundingSphereRadius+ot.boundingSphereRadius)&&ct.findSeparatingAxis(ot,vt,oe,_t,kt,Ut,zt,Yt)){var Pt=[],b=mt;ct.clipAgainstHull(vt,oe,ot,_t,kt,Ut,-100,100,Pt);for(var W=0,$=0;$!==Pt.length;$++){var V=this.createContactEquation(Rt,Ot,ct,ot,rt,It),J=V.ri,xt=V.rj;Ut.negate(V.ni),Pt[$].normal.negate(b),b.mult(Pt[$].depth,b),Pt[$].point.vadd(b,J),xt.copy(Pt[$].point),J.vsub(vt,J),xt.vsub(_t,xt),J.vadd(vt,J),J.vsub(Rt.position,J),xt.vadd(_t,xt),xt.vsub(Ot.position,xt),this.result.push(V),W++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(V,this.frictionResult)}this.enableFrictionReduction&&W&&this.createFrictionFromAverage(W)}};var ne=new l,Kt=new l,Zt=new l;v.prototype[o.types.PLANE|o.types.PARTICLE]=v.prototype.planeParticle=function(ct,ot,vt,_t,oe,kt,Rt,Ot){var rt=ne;rt.set(0,0,1),Rt.quaternion.vmult(rt,rt);var It=Kt;_t.vsub(Rt.position,It);var zt=rt.dot(It);if(zt<=0){var Yt=this.createContactEquation(Ot,Rt,ot,ct);Yt.ni.copy(rt),Yt.ni.negate(Yt.ni),Yt.ri.set(0,0,0);var Ut=Zt;rt.mult(rt.dot(_t),Ut),_t.vsub(Ut,Ut),Yt.rj.copy(Ut),this.result.push(Yt),this.createFrictionEquationsFromContact(Yt,this.frictionResult)}};var qt=new l;v.prototype[o.types.PARTICLE|o.types.SPHERE]=v.prototype.sphereParticle=function(ct,ot,vt,_t,oe,kt,Rt,Ot){var rt=qt;rt.set(0,0,1),_t.vsub(vt,rt);var It=rt.norm2();if(It<=ct.radius*ct.radius){var zt=this.createContactEquation(Ot,Rt,ot,ct);rt.normalize(),zt.rj.copy(rt),zt.rj.mult(ct.radius,zt.rj),zt.ni.copy(rt),zt.ni.negate(zt.ni),zt.ri.set(0,0,0),this.result.push(zt),this.createFrictionEquationsFromContact(zt,this.frictionResult)}};var Bt=new h,le=new l;new l;var Y=new l,wt=new l,Mt=new l;v.prototype[o.types.PARTICLE|o.types.CONVEXPOLYHEDRON]=v.prototype.convexParticle=function(ct,ot,vt,_t,oe,kt,Rt,Ot){var rt=-1,It=Y,zt=Mt,Yt=null,Ut=le;if(Ut.copy(_t),Ut.vsub(vt,Ut),oe.conjugate(Bt),Bt.vmult(Ut,Ut),ct.pointIsInside(Ut)){ct.worldVerticesNeedsUpdate&&ct.computeWorldVertices(vt,oe),ct.worldFaceNormalsNeedsUpdate&&ct.computeWorldFaceNormals(oe);for(var Pt=0,b=ct.faces.length;Pt!==b;Pt++){var W=[ct.worldVertices[ct.faces[Pt][0]]],$=ct.worldFaceNormals[Pt];_t.vsub(W[0],wt);var V=-$.dot(wt);(Yt===null||Math.abs(V)<Math.abs(Yt))&&(Yt=V,rt=Pt,It.copy($))}if(rt!==-1){var J=this.createContactEquation(Ot,Rt,ot,ct);It.mult(Yt,zt),zt.vadd(_t,zt),zt.vsub(vt,zt),J.rj.copy(zt),It.negate(J.ni),J.ri.set(0,0,0);var xt=J.ri,Ht=J.rj;xt.vadd(_t,xt),xt.vsub(Ot.position,xt),Ht.vadd(vt,Ht),Ht.vsub(Rt.position,Ht),this.result.push(J),this.createFrictionEquationsFromContact(J,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}},v.prototype[o.types.BOX|o.types.HEIGHTFIELD]=v.prototype.boxHeightfield=function(ct,ot,vt,_t,oe,kt,Rt,Ot){ct.convexPolyhedronRepresentation.material=ct.material,ct.convexPolyhedronRepresentation.collisionResponse=ct.collisionResponse,this.convexHeightfield(ct.convexPolyhedronRepresentation,ot,vt,_t,oe,kt,Rt,Ot)};var dt=new l,Tt=new l,Qt=[0];v.prototype[o.types.CONVEXPOLYHEDRON|o.types.HEIGHTFIELD]=v.prototype.convexHeightfield=function(ct,ot,vt,_t,oe,kt,Rt,Ot){var rt=ot.data,It=ot.elementSize,zt=ct.boundingSphereRadius,Yt=Tt,Ut=Qt,Pt=dt;u.pointToLocalFrame(_t,kt,vt,Pt);var b=Math.floor((Pt.x-zt)/It)-1,W=Math.ceil((Pt.x+zt)/It)+1,$=Math.floor((Pt.y-zt)/It)-1,V=Math.ceil((Pt.y+zt)/It)+1;if(!(W<0||V<0||b>rt.length||$>rt[0].length)){b<0&&(b=0),W<0&&(W=0),$<0&&($=0),V<0&&(V=0),b>=rt.length&&(b=rt.length-1),W>=rt.length&&(W=rt.length-1),V>=rt[0].length&&(V=rt[0].length-1),$>=rt[0].length&&($=rt[0].length-1);var J=[];ot.getRectMinMax(b,$,W,V,J);var xt=J[0],Ht=J[1];if(!(Pt.z-zt>Ht||Pt.z+zt<xt))for(var Nt=b;Nt<W;Nt++)for(var Vt=$;Vt<V;Vt++)ot.getConvexTrianglePillar(Nt,Vt,!1),u.pointToWorldFrame(_t,kt,ot.pillarOffset,Yt),vt.distanceTo(Yt)<ot.pillarConvex.boundingSphereRadius+ct.boundingSphereRadius&&this.convexConvex(ct,ot.pillarConvex,vt,Yt,oe,kt,Rt,Ot,null,null,Ut,null),ot.getConvexTrianglePillar(Nt,Vt,!0),u.pointToWorldFrame(_t,kt,ot.pillarOffset,Yt),vt.distanceTo(Yt)<ot.pillarConvex.boundingSphereRadius+ct.boundingSphereRadius&&this.convexConvex(ct,ot.pillarConvex,vt,Yt,oe,kt,Rt,Ot,null,null,Ut,null)}};var ce=new l,de=new l;v.prototype[o.types.SPHERE|o.types.HEIGHTFIELD]=v.prototype.sphereHeightfield=function(ct,ot,vt,_t,oe,kt,Rt,Ot){var rt=ot.data,It=ct.radius,zt=ot.elementSize,Yt=de,Ut=ce;u.pointToLocalFrame(_t,kt,vt,Ut);var Pt=Math.floor((Ut.x-It)/zt)-1,b=Math.ceil((Ut.x+It)/zt)+1,W=Math.floor((Ut.y-It)/zt)-1,$=Math.ceil((Ut.y+It)/zt)+1;if(!(b<0||$<0||Pt>rt.length||$>rt[0].length)){Pt<0&&(Pt=0),b<0&&(b=0),W<0&&(W=0),$<0&&($=0),Pt>=rt.length&&(Pt=rt.length-1),b>=rt.length&&(b=rt.length-1),$>=rt[0].length&&($=rt[0].length-1),W>=rt[0].length&&(W=rt[0].length-1);var V=[];ot.getRectMinMax(Pt,W,b,$,V);var J=V[0],xt=V[1];if(!(Ut.z-It>xt||Ut.z+It<J))for(var Ht=this.result,Nt=Pt;Nt<b;Nt++)for(var Vt=W;Vt<$;Vt++){var Lt=Ht.length;ot.getConvexTrianglePillar(Nt,Vt,!1),u.pointToWorldFrame(_t,kt,ot.pillarOffset,Yt),vt.distanceTo(Yt)<ot.pillarConvex.boundingSphereRadius+ct.boundingSphereRadius&&this.sphereConvex(ct,ot.pillarConvex,vt,Yt,oe,kt,Rt,Ot),ot.getConvexTrianglePillar(Nt,Vt,!0),u.pointToWorldFrame(_t,kt,ot.pillarOffset,Yt),vt.distanceTo(Yt)<ot.pillarConvex.boundingSphereRadius+ct.boundingSphereRadius&&this.sphereConvex(ct,ot.pillarConvex,vt,Yt,oe,kt,Rt,Ot);var ie=Ht.length-Lt;if(ie>2)return}}}},{"../collision/AABB":3,"../collision/Ray":9,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43,"../solver/Solver":47,"../utils/Vec3Pool":54}],56:[function(e,n,r){n.exports=_;var s=e("../shapes/Shape"),o=e("../math/Vec3"),a=e("../math/Quaternion"),l=e("../solver/GSSolver");e("../utils/Vec3Pool"),e("../equations/ContactEquation"),e("../equations/FrictionEquation");var u=e("./Narrowphase"),h=e("../utils/EventTarget"),c=e("../collision/ArrayCollisionMatrix"),d=e("../material/Material"),p=e("../material/ContactMaterial"),v=e("../objects/Body"),g=e("../utils/TupleDictionary"),m=e("../collision/RaycastResult"),f=e("../collision/AABB"),y=e("../collision/Ray"),x=e("../collision/NaiveBroadphase");function _(){h.apply(this),this.dt=-1,this.allowSleep=!1,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=0,this.quatNormalizeFast=!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new o,this.broadphase=new x,this.bodies=[],this.solver=new l,this.constraints=[],this.narrowphase=new u(this),this.collisionMatrix=new c,this.collisionMatrixPrevious=new c,this.materials=[],this.contactmaterials=[],this.contactMaterialTable=new g,this.defaultMaterial=new d("default"),this.defaultContactMaterial=new p(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null}}_.prototype=new h,new f;var M=new y;if(_.prototype.getContactMaterial=function(O,Z){return this.contactMaterialTable.get(O.id,Z.id)},_.prototype.numObjects=function(){return this.bodies.length},_.prototype.collisionMatrixTick=function(){var O=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=O,this.collisionMatrix.reset()},_.prototype.add=_.prototype.addBody=function(O){this.bodies.indexOf(O)===-1&&(O.index=this.bodies.length,this.bodies.push(O),O.world=this,O.initPosition.copy(O.position),O.initVelocity.copy(O.velocity),O.timeLastSleepy=this.time,O instanceof v&&(O.initAngularVelocity.copy(O.angularVelocity),O.initQuaternion.copy(O.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=O,this.dispatchEvent(this.addBodyEvent))},_.prototype.addConstraint=function(O){this.constraints.push(O)},_.prototype.removeConstraint=function(O){var Z=this.constraints.indexOf(O);Z!==-1&&this.constraints.splice(Z,1)},_.prototype.rayTest=function(O,Z,X){X instanceof m?this.raycastClosest(O,Z,{skipBackfaces:!0},X):this.raycastAll(O,Z,{skipBackfaces:!0},X)},_.prototype.raycastAll=function(O,Z,X,w){return X.mode=y.ALL,X.from=O,X.to=Z,X.callback=w,M.intersectWorld(this,X)},_.prototype.raycastAny=function(O,Z,X,w){return X.mode=y.ANY,X.from=O,X.to=Z,X.result=w,M.intersectWorld(this,X)},_.prototype.raycastClosest=function(O,Z,X,w){return X.mode=y.CLOSEST,X.from=O,X.to=Z,X.result=w,M.intersectWorld(this,X)},_.prototype.remove=function(O){O.world=null;var Z=this.bodies.length-1,X=this.bodies,w=X.indexOf(O);if(w!==-1){X.splice(w,1);for(var U=0;U!==X.length;U++)X[U].index=U;this.collisionMatrix.setNumObjects(Z),this.removeBodyEvent.body=O,this.dispatchEvent(this.removeBodyEvent)}},_.prototype.removeBody=_.prototype.remove,_.prototype.addMaterial=function(O){this.materials.push(O)},_.prototype.addContactMaterial=function(O){this.contactmaterials.push(O),this.contactMaterialTable.set(O.materials[0].id,O.materials[1].id,O)},typeof performance>"u"&&(performance={}),!performance.now){var R=Date.now();performance.timing&&performance.timing.navigationStart&&(R=performance.timing.navigationStart),performance.now=function(){return Date.now()-R}}var C=new o;_.prototype.step=function(O,Z,X){if(X=X||10,Z=Z||0,Z===0)this.internalStep(O),this.time+=O;else{var w=Math.floor((this.time+Z)/O)-Math.floor(this.time/O);w=Math.min(w,X);for(var U=performance.now(),N=0;N!==w&&(this.internalStep(O),!(performance.now()-U>O*1e3));N++);this.time+=Z;for(var I=this.time%O,A=I/O,j=C,at=this.bodies,nt=0;nt!==at.length;nt++){var K=at[nt];K.type!==v.STATIC&&K.sleepState!==v.SLEEPING?(K.position.vsub(K.previousPosition,j),j.scale(A,j),K.position.vadd(j,K.interpolatedPosition)):(K.interpolatedPosition.copy(K.position),K.interpolatedQuaternion.copy(K.quaternion))}}};var B={type:"postStep"},S={type:"preStep"},E={type:"collide",body:null,contact:null},P=[],z=[],H=[],D=[];new o,new o,new o,new o,new o,new o,new o,new o,new o,new a;var k=new a,tt=new a,F=new o;_.prototype.internalStep=function(O){this.dt=O;var Z=this.contacts,X=H,w=D,U=this.numObjects(),N=this.bodies,I=this.solver,A=this.gravity,j=this.doProfiling,at=this.profile,nt=v.DYNAMIC,K,lt=this.constraints,ut=z;A.norm();var q=A.x,Dt=A.y,pt=A.z,it=0;for(j&&(K=performance.now()),it=0;it!==U;it++){var ht=N[it];if(ht.type&nt){var ee=ht.force,Ct=ht.mass;ee.x+=Ct*q,ee.y+=Ct*Dt,ee.z+=Ct*pt}}for(var it=0,Xt=this.subsystems.length;it!==Xt;it++)this.subsystems[it].update();j&&(K=performance.now()),X.length=0,w.length=0,this.broadphase.collisionPairs(this,X,w),j&&(at.broadphase=performance.now()-K);var bt=lt.length;for(it=0;it!==bt;it++){var Et=lt[it];if(!Et.collideConnected)for(var se=X.length-1;se>=0;se-=1)(Et.bodyA===X[se]&&Et.bodyB===w[se]||Et.bodyB===X[se]&&Et.bodyA===w[se])&&(X.splice(se,1),w.splice(se,1))}this.collisionMatrixTick(),j&&(K=performance.now());var ae=P,L=Z.length;for(it=0;it!==L;it++)ae.push(Z[it]);Z.length=0;var T=this.frictionEquations.length;for(it=0;it!==T;it++)ut.push(this.frictionEquations[it]);this.frictionEquations.length=0,this.narrowphase.getContacts(X,w,this,Z,ae,this.frictionEquations,ut),j&&(at.narrowphase=performance.now()-K),j&&(K=performance.now());for(var it=0;it<this.frictionEquations.length;it++)I.addEquation(this.frictionEquations[it]);for(var Q=Z.length,gt=0;gt!==Q;gt++){var Et=Z[gt],ht=Et.bi,ft=Et.bj;Et.si,Et.sj;var St;if(ht.material&&ft.material?St=this.getContactMaterial(ht.material,ft.material)||this.defaultContactMaterial:St=this.defaultContactMaterial,St.friction,ht.material&&ft.material&&(ht.material.friction>=0&&ft.material.friction>=0&&ht.material.friction*ft.material.friction,ht.material.restitution>=0&&ft.material.restitution>=0&&(Et.restitution=ht.material.restitution*ft.material.restitution)),I.addEquation(Et),ht.allowSleep&&ht.type===v.DYNAMIC&&ht.sleepState===v.SLEEPING&&ft.sleepState===v.AWAKE&&ft.type!==v.STATIC){var Wt=ft.velocity.norm2()+ft.angularVelocity.norm2(),At=Math.pow(ft.sleepSpeedLimit,2);Wt>=At*2&&(ht._wakeUpAfterNarrowphase=!0)}if(ft.allowSleep&&ft.type===v.DYNAMIC&&ft.sleepState===v.SLEEPING&&ht.sleepState===v.AWAKE&&ht.type!==v.STATIC){var Ft=ht.velocity.norm2()+ht.angularVelocity.norm2(),G=Math.pow(ht.sleepSpeedLimit,2);Ft>=G*2&&(ft._wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(ht,ft,!0),this.collisionMatrixPrevious.get(ht,ft)||(E.body=ft,E.contact=Et,ht.dispatchEvent(E),E.body=ht,ft.dispatchEvent(E))}for(j&&(at.makeContactConstraints=performance.now()-K,K=performance.now()),it=0;it!==U;it++){var ht=N[it];ht._wakeUpAfterNarrowphase&&(ht.wakeUp(),ht._wakeUpAfterNarrowphase=!1)}var bt=lt.length;for(it=0;it!==bt;it++){var Et=lt[it];Et.update();for(var se=0,mt=Et.equations.length;se!==mt;se++){var ne=Et.equations[se];I.addEquation(ne)}}I.solve(O,this),j&&(at.solve=performance.now()-K),I.removeAllEquations();var Kt=Math.pow;for(it=0;it!==U;it++){var ht=N[it];if(ht.type&nt){var Zt=Kt(1-ht.linearDamping,O),qt=ht.velocity;qt.mult(Zt,qt);var Bt=ht.angularVelocity;if(Bt){var le=Kt(1-ht.angularDamping,O);Bt.mult(le,Bt)}}}for(this.dispatchEvent(S),it=0;it!==U;it++){var ht=N[it];ht.preStep&&ht.preStep.call(ht)}j&&(K=performance.now());var Y=k,wt=tt,Mt=this.stepnumber,dt=v.DYNAMIC|v.KINEMATIC,Tt=Mt%(this.quatNormalizeSkip+1)===0,Qt=this.quatNormalizeFast,ce=O*.5;for(s.types.PLANE,s.types.CONVEXPOLYHEDRON,it=0;it!==U;it++){var de=N[it],ct=de.force,ot=de.torque;if(de.type&dt&&de.sleepState!==v.SLEEPING){var vt=de.velocity,_t=de.angularVelocity,oe=de.position,kt=de.quaternion,Rt=de.invMass,Ot=de.invInertiaWorld;vt.x+=ct.x*Rt*O,vt.y+=ct.y*Rt*O,vt.z+=ct.z*Rt*O,de.angularVelocity&&(Ot.vmult(ot,F),F.mult(O,F),F.vadd(_t,_t)),oe.x+=vt.x*O,oe.y+=vt.y*O,oe.z+=vt.z*O,de.angularVelocity&&(Y.set(_t.x,_t.y,_t.z,0),Y.mult(kt,wt),kt.x+=ce*wt.x,kt.y+=ce*wt.y,kt.z+=ce*wt.z,kt.w+=ce*wt.w,Tt&&(Qt?kt.normalizeFast():kt.normalize())),de.aabb&&(de.aabbNeedsUpdate=!0),de.updateInertiaWorld&&de.updateInertiaWorld()}}for(this.clearForces(),this.broadphase.dirty=!0,j&&(at.integrate=performance.now()-K),this.time+=O,this.stepnumber+=1,this.dispatchEvent(B),it=0;it!==U;it++){var ht=N[it],rt=ht.postStep;rt&&rt.call(ht)}if(this.allowSleep)for(it=0;it!==U;it++)N[it].sleepTick(this.time)},_.prototype.clearForces=function(){for(var O=this.bodies,Z=O.length,X=0;X!==Z;X++){var w=O[X];w.force,w.torque,w.force.set(0,0,0),w.torque.set(0,0,0)}}},{"../collision/AABB":3,"../collision/ArrayCollisionMatrix":4,"../collision/NaiveBroadphase":7,"../collision/Ray":9,"../collision/RaycastResult":10,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../material/ContactMaterial":24,"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Shape":43,"../solver/GSSolver":46,"../utils/EventTarget":49,"../utils/TupleDictionary":52,"../utils/Vec3Pool":54,"./Narrowphase":55}]},{},[2])(2)})})(Rl);var Pl=Rl.exports;const jt=Fm(Pl);class Bm extends sn{constructor(e){super();$t(this,"ball_body");$t(this,"ball_mesh");this.name="pinball";const n=.5,r=new Qs(n),s=new Tn({color:65280});this.ball_mesh=new Le(r,s),this.ball_mesh.geometry.computeBoundingSphere(),this.add(this.ball_mesh);const o=new jt.Sphere(n);this.ball_body=new jt.Body({mass:1,position:new jt.Vec3(-15,1,-4)}),this.ball_body.addShape(o),this.ball_mesh.position.set(this.ball_body.position.x,this.ball_body.position.y,this.ball_body.position.z),e.addToUpdateList(this),e.world.addBody(this.ball_body)}update(){this.ball_mesh.position.set(this.ball_body.position.x,this.ball_body.position.y,this.ball_body.position.z),this.ball_body.applyLocalForce(new jt.Vec3(20,-100,0),new jt.Vec3(0,0,0))}}class Om extends sn{constructor(){super();const t=new am(16777215,4,7,.8,1,1),e=new lm(4210752,1.32),n=new rm(16777147,526368,2.3);t.position.set(5,1,2),t.target.position.set(0,0,0),this.add(e,n,t)}}class zm extends sn{constructor(e){super();$t(this,"floor_body");$t(this,"floor_mesh");$t(this,"lWall_body");$t(this,"lWall_mesh");$t(this,"rWall_body");$t(this,"rWall_mesh");$t(this,"lSlant_body");$t(this,"lSlant_mesh");$t(this,"rSlant_body");$t(this,"rSlant_mesh");this.name="table";const n=100,r=.1,s=15,o=new Je(n,r,s),a=new Tn({color:255});this.floor_mesh=new Le(o,a),this.floor_mesh.geometry.computeBoundingBox(),this.add(this.floor_mesh);const l=new jt.Box(new jt.Vec3(n/2,r/2,s/2));this.floor_body=new jt.Body({mass:0,position:new jt.Vec3(0,-1,0)}),this.floor_body.addShape(l),this.floor_body.quaternion.setFromEuler(0,0,0),this.floor_mesh.position.set(this.floor_body.position.x,this.floor_body.position.y,this.floor_body.position.z);const u=new jt.Vec3(0,0,0);this.floor_body.quaternion.toEuler(u),this.floor_mesh.rotation.set(u.x,u.y,u.z),e.world.addBody(this.floor_body);const h=30,c=.75,d=.5,p=new Je(h,c,d),v=new Tn({color:16777215});this.lWall_mesh=new Le(p,v),this.lWall_mesh.geometry.computeBoundingBox(),this.add(this.lWall_mesh);const g=new jt.Box(new jt.Vec3(h/2,c/2,d/2));this.lWall_body=new jt.Body({mass:0,position:new jt.Vec3(-15,-.5,7.5)}),this.lWall_body.addShape(g),this.lWall_body.quaternion.setFromEuler(0,0,0),this.lWall_mesh.position.set(this.lWall_body.position.x,this.lWall_body.position.y,this.lWall_body.position.z);const m=new jt.Vec3(0,0,0);this.lWall_body.quaternion.toEuler(m),this.lWall_mesh.rotation.set(m.x,m.y,m.z),e.world.addBody(this.lWall_body);const f=30,y=.75,x=.5,_=new Je(f,y,x),M=new Tn({color:16777215});this.rWall_mesh=new Le(_,M),this.rWall_mesh.geometry.computeBoundingBox(),this.add(this.rWall_mesh);const R=new jt.Box(new jt.Vec3(f/2,y/2,x/2));this.rWall_body=new jt.Body({mass:0,position:new jt.Vec3(-15,-.5,-7.5)}),this.rWall_body.addShape(R),this.rWall_body.quaternion.setFromEuler(0,0,0),this.rWall_mesh.position.set(this.rWall_body.position.x,this.rWall_body.position.y,this.rWall_body.position.z);const C=new jt.Vec3(0,0,0);this.rWall_body.quaternion.toEuler(C),this.rWall_mesh.rotation.set(C.x,C.y,C.z),e.world.addBody(this.rWall_body);const B=5.4,S=.75,E=.5,P=new Je(B,S,E),z=new Tn({color:16777215});this.lSlant_mesh=new Le(P,z),this.lSlant_mesh.geometry.computeBoundingBox(),this.add(this.lSlant_mesh);const H=new jt.Box(new jt.Vec3(B/2,S/2,E/2));this.lSlant_body=new jt.Body({mass:0,position:new jt.Vec3(1.4,-.5,5.3)}),this.lSlant_body.addShape(H),this.lSlant_body.quaternion.setFromEuler(0,.95,0),this.lSlant_mesh.position.set(this.lSlant_body.position.x,this.lSlant_body.position.y,this.lSlant_body.position.z);const D=new jt.Vec3(0,0,0);this.lSlant_body.quaternion.toEuler(D),this.lSlant_mesh.rotation.set(D.x,D.y,D.z),e.world.addBody(this.lSlant_body);const k=5.4,tt=.75,F=.5,O=new Je(k,tt,F),Z=new Tn({color:16777215});this.rSlant_mesh=new Le(O,Z),this.rSlant_mesh.geometry.computeBoundingBox(),this.add(this.rSlant_mesh);const X=new jt.Box(new jt.Vec3(k/2,tt/2,F/2));this.rSlant_body=new jt.Body({mass:0,position:new jt.Vec3(1.4,-.5,-5.3)}),this.rSlant_body.addShape(X),this.rSlant_body.quaternion.setFromEuler(0,-.95,0),this.rSlant_mesh.position.set(this.rSlant_body.position.x,this.rSlant_body.position.y,this.rSlant_body.position.z);const w=new jt.Vec3(0,0,0);this.rSlant_body.quaternion.toEuler(w),this.rSlant_mesh.rotation.set(w.x,w.y,w.z),e.world.addBody(this.rSlant_body),e.addToUpdateList(this)}update(){this.floor_mesh.position.set(this.floor_body.position.x,this.floor_body.position.y,this.floor_body.position.z);const e=new jt.Vec3(0,0,0);this.floor_body.quaternion.toEuler(e),this.floor_mesh.rotation.set(e.x,e.y,e.z),this.lWall_mesh.position.set(this.lWall_body.position.x,this.lWall_body.position.y,this.lWall_body.position.z);const n=new jt.Vec3(0,0,0);this.lWall_body.quaternion.toEuler(n),this.lWall_mesh.rotation.set(n.x,n.y,n.z),this.rWall_mesh.position.set(this.rWall_body.position.x,this.rWall_body.position.y,this.rWall_body.position.z);const r=new jt.Vec3(0,0,0);this.rWall_body.quaternion.toEuler(r),this.rWall_mesh.rotation.set(r.x,r.y,r.z),this.lSlant_mesh.position.set(this.lSlant_body.position.x,this.lSlant_body.position.y,this.lSlant_body.position.z);const s=new jt.Vec3(0,0,0);this.lSlant_body.quaternion.toEuler(s),this.lSlant_mesh.rotation.set(s.x,s.y,s.z),this.rSlant_mesh.position.set(this.rSlant_body.position.x,this.rSlant_body.position.y,this.rSlant_body.position.z);const o=new jt.Vec3(0,0,0);this.rSlant_body.quaternion.toEuler(o),this.rSlant_mesh.rotation.set(o.x,o.y,o.z)}}class Vm{constructor(t){$t(this,"target");$t(this,"keys");$t(this,"currentState");this.target=t,this.target.addEventListener("keydown",e=>this.onKeyDown(e),!1),this.target.addEventListener("keyup",e=>this.onKeyUp(e),!1),this.keys={q:!1,p:!1},this.currentState={leftInput:!1,rightInput:!1}}onKeyDown(t){t.key=="q"&&(this.keys.q=!0),t.key=="p"&&(this.keys.p=!0)}onKeyUp(t){t.key=="q"&&(this.keys.q=!1),t.key=="p"&&(this.keys.p=!1)}}class Xa extends sn{constructor(e,n,r){super();$t(this,"inputs");$t(this,"width",.25);$t(this,"height",.75);$t(this,"depth",2);$t(this,"isLeftPaddle");$t(this,"xInitPosition");$t(this,"yInitPosition");$t(this,"zInitPosition");$t(this,"xInitRotation");$t(this,"yInitRotation");$t(this,"zInitRotation");$t(this,"aPivotDirection");$t(this,"xOffset");$t(this,"yOffset");$t(this,"zOffset");$t(this,"meshRotation");$t(this,"impulseForce");$t(this,"returnForce");$t(this,"paddle_body");$t(this,"paddle_mesh");$t(this,"paddle");$t(this,"hinge_limit");$t(this,"hinge_constraint");$t(this,"hinge_mesh");this.inputs=new Vm(n),this.isLeftPaddle=r,this.xInitPosition=4,this.yInitPosition=-.5,this.zInitPosition=2,this.xInitRotation=0,this.yInitRotation=5.7+Math.PI,this.zInitRotation=0,this.aPivotDirection=1,this.meshRotation=0,this.xOffset=0,this.yOffset=0,this.zOffset=0,this.impulseForce=20,this.returnForce=-100,r||(this.zInitPosition=-2,this.yInitRotation=-5.7,this.aPivotDirection=-1,this.meshRotation=0,this.zOffset=0,this.impulseForce=-20,this.returnForce=100),this.name="paddle";const s=new Je(this.width,this.height,this.depth),o=new Tn({color:16711680});this.paddle_mesh=new Le(s,o),this.paddle_mesh.geometry.computeBoundingBox(),this.add(this.paddle_mesh),this.paddle_body=new jt.Body({mass:1,position:new jt.Vec3(this.xInitPosition,this.yInitPosition,this.zInitPosition)});const a=new jt.Box(new jt.Vec3(this.width/2,this.height/2,this.depth/2));this.paddle_body.addShape(a),this.paddle_body.quaternion.setFromEuler(this.xInitRotation,this.yInitRotation,this.zInitRotation),r&&this.paddle_body.quaternion.setFromEuler(this.xInitRotation,this.yInitRotation+.75,this.zInitRotation),this.paddle_mesh.position.set(this.paddle_body.position.x,this.paddle_body.position.y,this.paddle_body.position.z);const l=new jt.Vec3(0,0,0);this.paddle_body.quaternion.toEuler(l),this.paddle_mesh.rotation.set(l.x,l.y,l.z),e.addToUpdateList(this),e.world.addBody(this.paddle_body);const u=new Je(this.width,this.height,this.depth),h=new Tn({color:0});this.hinge_mesh=new Le(u,h),this.hinge_mesh.geometry.computeBoundingBox(),this.add(this.hinge_mesh),this.hinge_limit=new jt.Body({mass:0,position:new jt.Vec3(this.xInitPosition,this.yInitPosition,this.zInitPosition)});const c=new jt.Box(new jt.Vec3(this.width/2,this.height/2,this.depth/2));this.hinge_limit.addShape(c),this.hinge_limit.quaternion.setFromEuler(this.xInitRotation,this.yInitRotation,this.zInitRotation),this.hinge_mesh.position.set(this.hinge_limit.position.x,this.hinge_limit.position.y,this.hinge_limit.position.z);const d=new jt.Vec3(0,0,0);this.hinge_limit.quaternion.toEuler(d),this.hinge_mesh.rotation.set(d.x,d.y,d.z),e.addToUpdateList(this),e.world.addBody(this.hinge_limit),r?this.hinge_constraint=new jt.HingeConstraint(this.hinge_limit,this.paddle_body,{pivotA:new jt.Vec3(0,0,-(this.aPivotDirection*this.depth)/2),axisA:new jt.Vec3(0,1,0),pivotB:new jt.Vec3(-this.width,0,-(this.aPivotDirection*this.depth)/2),axisB:new jt.Vec3(0,1,0)}):this.hinge_constraint=new jt.HingeConstraint(this.paddle_body,this.hinge_limit,{pivotA:new jt.Vec3(this.width,0,this.aPivotDirection*this.depth/2),axisA:new jt.Vec3(0,1,0),pivotB:new jt.Vec3(0,0,this.aPivotDirection*this.depth/2),axisB:new jt.Vec3(0,1,0)}),e.world.addConstraint(this.hinge_constraint),this.hinge_constraint.enable()}update(){this.hinge_constraint.update(),this.paddle_mesh.position.set(this.paddle_body.position.x+this.xOffset,this.paddle_body.position.y+this.yOffset,this.paddle_body.position.z+this.zOffset);const e=new jt.Vec3(0,0,0);this.paddle_body.quaternion.toEuler(e),this.isLeftPaddle&&e.y>-1.9&&e.y<1&&this.paddle_body.quaternion.setFromEuler(e.x,-2,e.z),!this.isLeftPaddle&&e.y>-2&&e.y<-1.2&&this.paddle_body.quaternion.setFromEuler(e.x,-1.1,e.z),this.paddle_mesh.rotation.set(e.x,e.y+this.meshRotation,e.z),this.hinge_mesh.position.set(this.hinge_limit.position.x,this.hinge_limit.position.y,this.hinge_limit.position.z);const n=new jt.Vec3(0,0,0);this.hinge_limit.quaternion.toEuler(n),this.hinge_mesh.rotation.set(n.x,n.y,n.z),this.inputs.keys.q&&this.isLeftPaddle&&this.paddle_body.applyLocalImpulse(new jt.Vec3(this.impulseForce,0,0),new jt.Vec3(0,0,this.depth/2)),this.inputs.keys.p&&!this.isLeftPaddle&&this.paddle_body.applyLocalImpulse(new jt.Vec3(this.impulseForce,0,0),new jt.Vec3(0,0,this.depth/2)),this.paddle_body.applyLocalForce(new jt.Vec3(this.returnForce,0,0),new jt.Vec3(0,0,this.depth*4))}}const Ll=Math.sqrt(3),Hm=.5*(Ll-1),Yi=(3-Ll)/6,qa=i=>Math.floor(i)|0,Ya=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function km(i=Math.random){const t=Gm(i),e=new Float64Array(t).map(r=>Ya[r%12*2]),n=new Float64Array(t).map(r=>Ya[r%12*2+1]);return function(s,o){let a=0,l=0,u=0;const h=(s+o)*Hm,c=qa(s+h),d=qa(o+h),p=(c+d)*Yi,v=c-p,g=d-p,m=s-v,f=o-g;let y,x;m>f?(y=1,x=0):(y=0,x=1);const _=m-y+Yi,M=f-x+Yi,R=m-1+2*Yi,C=f-1+2*Yi,B=c&255,S=d&255;let E=.5-m*m-f*f;if(E>=0){const H=B+t[S],D=e[H],k=n[H];E*=E,a=E*E*(D*m+k*f)}let P=.5-_*_-M*M;if(P>=0){const H=B+y+t[S+x],D=e[H],k=n[H];P*=P,l=P*P*(D*_+k*M)}let z=.5-R*R-C*C;if(z>=0){const H=B+1+t[S+1],D=e[H],k=n[H];z*=z,u=z*z*(D*R+k*C)}return 70*(a+l+u)}}function Gm(i){const e=new Uint8Array(512);for(let n=0;n<512/2;n++)e[n]=n;for(let n=0;n<512/2-1;n++){const r=n+~~(i()*(256-n)),s=e[n];e[n]=e[r],e[r]=s}for(let n=256;n<512;n++)e[n]=e[n-256];return e}class Wm extends sn{constructor(e,n){super();$t(this,"cube_body");$t(this,"cube_mesh");$t(this,"parent");$t(this,"originY");$t(this,"originZ");$t(this,"hasCollided");$t(this,"counter");this.name="cube",this.parent=e,this.originY=n.y,this.originZ=n.z,this.hasCollided=!1,this.counter=0;const r=.2,s=.2,o=.2,a=new Je(r,s,o),l=new Tn({color:1044688});this.cube_mesh=new Le(a,l),this.cube_mesh.geometry.computeBoundingBox(),this.add(this.cube_mesh);const u=new jt.Box(new jt.Vec3(r/2,s/2,o/2));this.cube_body=new jt.Body({mass:.001,position:n.clone()}),this.cube_body.addShape(u),this.cube_mesh.position.set(this.cube_body.position.x,this.cube_body.position.y,this.cube_body.position.z),e.addToUpdateList(this),e.world.addBody(this.cube_body),this.parent.add(this)}update(){this.hasCollided?(this.counter++,this.counter>=100&&this.score()):this.cube_body.position.x>0&&this.dispose(),this.cube_body.position.set(this.cube_body.position.x+.05,this.cube_body.position.y,this.cube_body.position.z),this.cube_mesh.position.set(this.cube_body.position.x,this.cube_body.position.y,this.cube_body.position.z),this.cube_body.position.y>=this.originY-.01&&this.cube_body.position.y<=this.originY+.01||(this.hasCollided=!0)}score(){this.parent.state.score++,this.parent.world.remove(this.cube_body),this.cube_mesh&&(this.remove(this.cube_mesh),this.cube_mesh.geometry.dispose())}dispose(){this.parent.world.remove(this.cube_body),this.cube_mesh&&(this.remove(this.cube_mesh),this.cube_mesh.geometry.dispose())}}class Xm extends sn{constructor(e,n){super();$t(this,"state");$t(this,"scene");$t(this,"world");$t(this,"parent");$t(this,"pileMesh");this.parent=e,this.state={numCubes:0,cubeArray:[],position:this.generateRandomPosition(),isCubified:!1,radius:2,resolution:7},this.world=n.world,this.scene=n,this.pileMesh=this.createMesh(),this.add(this.pileMesh),this.scene.add(this),this.scene.addToUpdateList(this)}generateRandomPosition(){const e=Math.random()*this.parent.state.width-this.parent.state.width/2+this.parent.terrainMesh.position.x,n=Math.random()*this.parent.state.height-this.parent.state.height/2+this.parent.terrainMesh.position.z,r=-.95;return new et(e,r,n)}createMesh(){const r=km(),s=new ar(this.state.radius,this.state.radius,this.state.resolution,this.state.resolution),o=new Ml({color:8421504}),a=s.attributes.position;for(let u=0;u<a.count;u++){const h=a.getX(u),c=a.getY(u),d=Math.sqrt(h*h+c*c),p=Math.max(0,1-d/(this.state.radius/2)),v=r(h*.1,c*.1)*p*15;a.setZ(u,-.9+v)}a.needsUpdate=!0,s.computeVertexNormals();const l=new Le(s,o);return l.position.set(this.state.position.x,this.state.position.y,this.state.position.z),l.rotateX(-Math.PI/2),l}cubify(){if(this.state.isCubified||!this.pileMesh)return;const n=this.pileMesh.geometry.attributes.position;for(let r=0;r<n.count;r++){const s=this.state.position.x+n.getX(r),o=this.state.position.z+n.getY(r),a=this.state.position.y+Math.abs(n.getZ(r));if(a>=.01)for(let l=-.9;l<a;l++){const u=new Pl.Vec3(s,l*(this.state.radius/this.state.resolution)-.3,o),h=new Wm(this.scene,u);this.add(h),this.state.cubeArray.push(h),this.state.numCubes++}}this.state.isCubified=!0}removeMesh(){this.pileMesh&&(this.remove(this.pileMesh),this.pileMesh.geometry.dispose(),this.pileMesh=void 0)}update(){var e;this.shouldCubify()&&this.cubify(),this.state.cubeArray.forEach(n=>n.update()),this.state.position.set(this.state.position.x+.05,this.state.position.y,this.state.position.z),(e=this.pileMesh)==null||e.position.set(this.pileMesh.position.x+.05,this.pileMesh.position.y,this.pileMesh.position.z),this.state.isCubified&&this.dispose()}shouldCubify(){return this.pileMesh?this.pileMesh.position.x>=-50:!1}dispose(){this.removeMesh();const e=this.scene.state.updateList.indexOf(this);e>-1&&this.scene.state.updateList.splice(e,1)}}class qm extends sn{constructor(e,n){super();$t(this,"terrainMesh");$t(this,"state");$t(this,"piles",[]);$t(this,"world");$t(this,"scene");this.state={width:5,height:12,initPos:n},this.world=e.world,this.scene=e,e.addToUpdateList(this),this.terrainMesh=this.createFlatTerrain(),this.add(this.terrainMesh),this.scene.add(this),this.generatePiles()}createFlatTerrain(){const e=new ar(this.state.width,this.state.height,1,1),n=new Ml({color:8421504}),r=new Le(e,n);return r.position.set(this.state.initPos.x,this.state.initPos.y,this.state.initPos.z),r.rotateX(-Math.PI/2),r}generatePiles(){for(let n=0;n<1;n++){const r=new Xm(this,this.scene);this.add(r),this.piles.push(r)}}dispose(){this.terrainMesh&&(this.remove(this.terrainMesh),this.terrainMesh.geometry.dispose()),this.piles.forEach(e=>e.dispose()),this.piles=[]}update(){this.terrainMesh.position.set(this.terrainMesh.position.x+.05,this.terrainMesh.position.y,this.terrainMesh.position.z)}}class Ym extends sn{constructor(e){super();$t(this,"state");$t(this,"parent");this.state={gui:e.state.gui,speed:.1,updateList:[],chunks:[],numChunks:7,width:10,height:5,meshMaterial:void 0},this.parent=e,this.state.numChunks=5,e.addToUpdateList(this),this.addChunk(new et(-50,-.9,0)),this.addChunk(new et(-55,-.9,0)),this.addChunk(new et(-60,-.9,0)),this.addChunk(new et(-65,-.9,0)),this.addChunk(new et(-70,-.9,0))}addChunk(e){const n=new qm(this.parent,new et(e.x,e.y,e.z));this.add(n.terrainMesh),this.state.chunks.push(n)}removeChunk(e){this.remove(e.terrainMesh),e.terrainMesh&&e.terrainMesh.geometry.dispose();const n=this.state.chunks.indexOf(e);n>-1&&this.state.chunks.splice(n,1),e.dispose()}update(){for(;this.state.chunks.length<this.state.numChunks;)this.addChunk(new et(-65,-.9,0));this.state.chunks[0].terrainMesh.position.x>=-40&&this.removeChunk(this.state.chunks[0])}dispose(){this.state.chunks.forEach(e=>this.removeChunk(e))}}class jm extends im{constructor(e){super();$t(this,"state");$t(this,"document");$t(this,"world");this.world=new jt.World,this.state={gui:new Um.GUI,updateList:[],score:0},this.document=e,this.background=new ve(0);const n=new Bm(this),r=new zm(this),s=new Om,o=new Xa(this,e,!0),a=new Xa(this,e,!1),l=new Ym(this);this.add(n,r,s,o,a,l)}addToUpdateList(e){this.state.updateList.push(e)}update(e){const{updateList:n}=this.state;this.document.getElementById("totalScore").innerText=this.state.score.toString();for(const r of n)r.update!==void 0&&r.update(e)}}const Ur=new jm(document),Vn=new Qe,$r=new Sl({antialias:!0});Vn.position.set(10.2,7.8,0);Vn.lookAt(new et(0,0,0));$r.setPixelRatio(window.devicePixelRatio);const oo=$r.domElement;oo.style.display="block";document.body.style.margin="0";document.body.style.overflow="hidden";document.body.appendChild(oo);const Vi=new hm(Vn,oo);Vi.enableDamping=!0;Vi.enablePan=!1;Vi.minDistance=4;Vi.maxDistance=16;Vi.update();const Il=i=>{Vi.update(),Ur.world.step(1/60),Vn.position.set(10.2,7.8,0),Vn.lookAt(new et(0,0,0)),$r.render(Ur,Vn),Ur.update&&Ur.update(i),window.requestAnimationFrame(Il)};window.requestAnimationFrame(Il);const Dl=()=>{const{innerHeight:i,innerWidth:t}=window;$r.setSize(t,i),Vn.aspect=t/i,Vn.updateProjectionMatrix()};Dl();window.addEventListener("resize",Dl,!1);
