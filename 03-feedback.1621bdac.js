function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="Expected a function",r=NaN,o="[object Symbol]",a=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,v="object"==typeof self&&self&&self.Object===Object&&self,d=s||v||Function("return this")(),m=Object.prototype.toString,g=Math.max,p=Math.min,y=function(){return d.Date.now()};function b(e,t,n){var r,o,a,u,f,l,c=0,s=!1,v=!1,d=!0;if("function"!=typeof e)throw new TypeError(i);function m(t){var n=r,i=o;return r=o=void 0,c=t,u=e.apply(i,n)}function b(e){var n=e-l;return void 0===l||n>=t||n<0||v&&e-c>=a}function h(){var e=y();if(b(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-l);return v?p(n,a-(e-c)):n}(e))}function w(e){return f=void 0,d&&r?m(e):(r=o=void 0,u)}function O(){var e=y(),n=b(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return function(e){return c=e,f=setTimeout(h,t),s?m(e):u}(l);if(v)return f=setTimeout(h,t),m(l)}return void 0===f&&(f=setTimeout(h,t)),u}return t=T(t)||0,j(n)&&(s=!!n.leading,a=(v="maxWait"in n)?g(T(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},O.flush=function(){return void 0===f?u:w(y())},O}function j(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function T(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&m.call(e)==o}(e))return r;if(j(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=j(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=f.test(e);return n||l.test(e)?c(e.slice(2),n?2:8):u.test(e)?r:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return j(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),b(e,t,{leading:r,maxWait:t,trailing:o})};const h="feedback-form-state",w=document.querySelector(".feedback-form");w.addEventListener("input",e(t)((function(e){O={email:S.value,message:x.value},localStorage.setItem(h,JSON.stringify(O))}),500)),w.addEventListener("submit",(function(e){if(e.preventDefault(),console.log({email:S.value,message:x.value}),""===S.value||""===x.value)return alert("Будь ласка, заповніть всі обов'язкові поля.");localStorage.removeItem(h),e.currentTarget.reset(),O={}}));let O=JSON.parse(localStorage.getItem(h))||{};const{email:S,message:x}=w.elements;O&&(S.value=O.email||"",x.value=O.message||"");
//# sourceMappingURL=03-feedback.1621bdac.js.map