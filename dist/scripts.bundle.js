/*! p5.js v0.6.0 January 19, 2018 */ !function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;b="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,b.p5=a()}}(function(){var a;return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c||a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){!function(a){"use strict";function b(a){var b=a.charCodeAt(0);return b===f||b===k?62:b===g||b===l?63:b<h?-1:b<h+10?b-h+26+26:b<j+26?b-j:b<i+26?b-i+26:void 0}function c(a){function c(a){j[l++]=a}var d,f,g,h,i,j;if(a.length%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var k=a.length;i="="===a.charAt(k-2)?2:"="===a.charAt(k-1)?1:0,j=new e(3*a.length/4-i),g=i>0?a.length-4:a.length;var l=0;for(d=0,f=0;d<g;d+=4,f+=3)h=b(a.charAt(d))<<18|b(a.charAt(d+1))<<12|b(a.charAt(d+2))<<6|b(a.charAt(d+3)),c((16711680&h)>>16),c((65280&h)>>8),c(255&h);return 2===i?(h=b(a.charAt(d))<<2|b(a.charAt(d+1))>>4,c(255&h)):1===i&&(h=b(a.charAt(d))<<10|b(a.charAt(d+1))<<4|b(a.charAt(d+2))>>2,c(h>>8&255),c(255&h)),j}function d(a){function b(a){return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(a)}function c(a){return b(a>>18&63)+b(a>>12&63)+b(a>>6&63)+b(63&a)}var d,e,f,g=a.length%3,h="";for(d=0,f=a.length-g;d<f;d+=3)e=(a[d]<<16)+(a[d+1]<<8)+a[d+2],h+=c(e);switch(g){case 1:e=a[a.length-1],h+=b(e>>2),h+=b(e<<4&63),h+="==";break;case 2:e=(a[a.length-2]<<8)+a[a.length-1],h+=b(e>>10),h+=b(e>>4&63),h+=b(e<<2&63),h+="="}return h}var e="undefined"!=typeof Uint8Array?Uint8Array:Array,f="+".charCodeAt(0),g="/".charCodeAt(0),h="0".charCodeAt(0),i="a".charCodeAt(0),j="A".charCodeAt(0),k="-".charCodeAt(0),l="_".charCodeAt(0);a.toByteArray=c,a.fromByteArray=d}(void 0===c?this.base64js={}:c)},{}],2:[function(a,b,c){},{}],3:[function(a,b,c){(function(b){"use strict";function d(){function a(){}try{var b=new Uint8Array(1);return b.foo=function(){return 42},b.constructor=a,42===b.foo()&&b.constructor===a&&"function"==typeof b.subarray&&0===b.subarray(1,1).byteLength}catch(a){return!1}}function e(){return f.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function f(a){return this instanceof f?(f.TYPED_ARRAY_SUPPORT||(this.length=0,this.parent=void 0),"number"==typeof a?g(this,a):"string"==typeof a?h(this,a,arguments.length>1?arguments[1]:"utf8"):i(this,a)):arguments.length>1?new f(a,arguments[1]):new f(a)}function g(a,b){if(a=p(a,b<0?0:0|q(b)),!f.TYPED_ARRAY_SUPPORT)for(var c=0;c<b;c++)a[c]=0;return a}function h(a,b,c){return"string"==typeof c&&""!==c||(c="utf8"),a=p(a,0|s(b,c)),a.write(b,c),a}function i(a,b){if(f.isBuffer(b))return j(a,b);if(Y(b))return k(a,b);if(null==b)throw new TypeError("must start with number, buffer, array or string");if("undefined"!=typeof ArrayBuffer){if(b.buffer instanceof ArrayBuffer)return l(a,b);if(b instanceof ArrayBuffer)return m(a,b)}return b.length?n(a,b):o(a,b)}function j(a,b){var c=0|q(b.length);return a=p(a,c),b.copy(a,0,0,c),a}function k(a,b){var c=0|q(b.length);a=p(a,c);for(var d=0;d<c;d+=1)a[d]=255&b[d];return a}function l(a,b){var c=0|q(b.length);a=p(a,c);for(var d=0;d<c;d+=1)a[d]=255&b[d];return a}function m(a,b){return f.TYPED_ARRAY_SUPPORT?(b.byteLength,a=f._augment(new Uint8Array(b))):a=l(a,new Uint8Array(b)),a}function n(a,b){var c=0|q(b.length);a=p(a,c);for(var d=0;d<c;d+=1)a[d]=255&b[d];return a}function o(a,b){var c,d=0;"Buffer"===b.type&&Y(b.data)&&(c=b.data,d=0|q(c.length)),a=p(a,d);for(var e=0;e<d;e+=1)a[e]=255&c[e];return a}function p(a,b){return f.TYPED_ARRAY_SUPPORT?(a=f._augment(new Uint8Array(b)),a.__proto__=f.prototype):(a.length=b,a._isBuffer=!0),0!==b&&b<=f.poolSize>>>1&&(a.parent=Z),a}function q(a){if(a>=e())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+e().toString(16)+" bytes");return 0|a}function r(a,b){if(!(this instanceof r))return new r(a,b);var c=new f(a,b);return delete c.parent,c}function s(a,b){"string"!=typeof a&&(a=""+a);var c=a.length;if(0===c)return 0;for(var d=!1;;)switch(b){case"ascii":case"binary":case"raw":case"raws":return c;case"utf8":case"utf-8":return R(a).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*c;case"hex":return c>>>1;case"base64":return U(a).length;default:if(d)return R(a).length;b=(""+b).toLowerCase(),d=!0}}function t(a,b,c){var d=!1;if(b|=0,c=void 0===c||c===1/0?this.length:0|c,a||(a="utf8"),b<0&&(b=0),c>this.length&&(c=this.length),c<=b)return"";for(;;)switch(a){case"hex":return F(this,b,c);case"utf8":case"utf-8":return B(this,b,c);case"ascii":return D(this,b,c);case"binary":return E(this,b,c);case"base64":return A(this,b,c);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return G(this,b,c);default:if(d)throw new TypeError("Unknown encoding: "+a);a=(a+"").toLowerCase(),d=!0}}function u(a,b,c,d){c=Number(c)||0;var e=a.length-c;d?(d=Number(d))>e&&(d=e):d=e;var f=b.length;if(f%2!=0)throw new Error("Invalid hex string");d>f/2&&(d=f/2);for(var g=0;g<d;g++){var h=parseInt(b.substr(2*g,2),16);if(isNaN(h))throw new Error("Invalid hex string");a[c+g]=h}return g}function v(a,b,c,d){return V(R(b,a.length-c),a,c,d)}function w(a,b,c,d){return V(S(b),a,c,d)}function x(a,b,c,d){return w(a,b,c,d)}function y(a,b,c,d){return V(U(b),a,c,d)}function z(a,b,c,d){return V(T(b,a.length-c),a,c,d)}function A(a,b,c){return 0===b&&c===a.length?W.fromByteArray(a):W.fromByteArray(a.slice(b,c))}function B(a,b,c){c=Math.min(a.length,c);for(var d=[],e=b;e<c;){var f=a[e],g=null,h=f>239?4:f>223?3:f>191?2:1;if(e+h<=c){var i,j,k,l;switch(h){case 1:f<128&&(g=f);break;case 2:i=a[e+1],128==(192&i)&&(l=(31&f)<<6|63&i)>127&&(g=l);break;case 3:i=a[e+1],j=a[e+2],128==(192&i)&&128==(192&j)&&(l=(15&f)<<12|(63&i)<<6|63&j)>2047&&(l<55296||l>57343)&&(g=l);break;case 4:i=a[e+1],j=a[e+2],k=a[e+3],128==(192&i)&&128==(192&j)&&128==(192&k)&&(l=(15&f)<<18|(63&i)<<12|(63&j)<<6|63&k)>65535&&l<1114112&&(g=l)}}null===g?(g=65533,h=1):g>65535&&(g-=65536,d.push(g>>>10&1023|55296),g=56320|1023&g),d.push(g),e+=h}return C(d)}function C(a){var b=a.length;if(b<=$)return String.fromCharCode.apply(String,a);for(var c="",d=0;d<b;)c+=String.fromCharCode.apply(String,a.slice(d,d+=$));return c}function D(a,b,c){var d="";c=Math.min(a.length,c);for(var e=b;e<c;e++)d+=String.fromCharCode(127&a[e]);return d}function E(a,b,c){var d="";c=Math.min(a.length,c);for(var e=b;e<c;e++)d+=String.fromCharCode(a[e]);return d}function F(a,b,c){var d=a.length;(!b||b<0)&&(b=0),(!c||c<0||c>d)&&(c=d);for(var e="",f=b;f<c;f++)e+=Q(a[f]);return e}function G(a,b,c){for(var d=a.slice(b,c),e="",f=0;f<d.length;f+=2)e+=String.fromCharCode(d[f]+256*d[f+1]);return e}function H(a,b,c){if(a%1!=0||a<0)throw new RangeError("offset is not uint");if(a+b>c)throw new RangeError("Trying to access beyond buffer length")}function I(a,b,c,d,e,g){if(!f.isBuffer(a))throw new TypeError("buffer must be a Buffer instance");if(b>e||b<g)throw new RangeError("value is out of bounds");if(c+d>a.length)throw new RangeError("index out of range")}function J(a,b,c,d){b<0&&(b=65535+b+1);for(var e=0,f=Math.min(a.length-c,2);e<f;e++)a[c+e]=(b&255<<8*(d?e:1-e))>>>8*(d?e:1-e)}function K(a,b,c,d){b<0&&(b=4294967295+b+1);for(var e=0,f=Math.min(a.length-c,4);e<f;e++)a[c+e]=b>>>8*(d?e:3-e)&255}function L(a,b,c,d,e,f){if(b>e||b<f)throw new RangeError("value is out of bounds");if(c+d>a.length)throw new RangeError("index out of range");if(c<0)throw new RangeError("index out of range")}function M(a,b,c,d,e){return e||L(a,b,c,4,3.4028234663852886e38,-3.4028234663852886e38),X.write(a,b,c,d,23,4),c+4}function N(a,b,c,d,e){return e||L(a,b,c,8,1.7976931348623157e308,-1.7976931348623157e308),X.write(a,b,c,d,52,8),c+8}function O(a){if(a=P(a).replace(aa,""),a.length<2)return"";for(;a.length%4!=0;)a+="=";return a}function P(a){return a.trim?a.trim():a.replace(/^\s+|\s+$/g,"")}function Q(a){return a<16?"0"+a.toString(16):a.toString(16)}function R(a,b){b=b||1/0;for(var c,d=a.length,e=null,f=[],g=0;g<d;g++){if((c=a.charCodeAt(g))>55295&&c<57344){if(!e){if(c>56319){(b-=3)>-1&&f.push(239,191,189);continue}if(g+1===d){(b-=3)>-1&&f.push(239,191,189);continue}e=c;continue}if(c<56320){(b-=3)>-1&&f.push(239,191,189),e=c;continue}c=65536+(e-55296<<10|c-56320)}else e&&(b-=3)>-1&&f.push(239,191,189);if(e=null,c<128){if((b-=1)<0)break;f.push(c)}else if(c<2048){if((b-=2)<0)break;f.push(c>>6|192,63&c|128)}else if(c<65536){if((b-=3)<0)break;f.push(c>>12|224,c>>6&63|128,63&c|128)}else{if(!(c<1114112))throw new Error("Invalid code point");if((b-=4)<0)break;f.push(c>>18|240,c>>12&63|128,c>>6&63|128,63&c|128)}}return f}function S(a){for(var b=[],c=0;c<a.length;c++)b.push(255&a.charCodeAt(c));return b}function T(a,b){for(var c,d,e,f=[],g=0;g<a.length&&!((b-=2)<0);g++)c=a.charCodeAt(g),d=c>>8,e=c%256,f.push(e),f.push(d);return f}function U(a){return W.toByteArray(O(a))}function V(a,b,c,d){for(var e=0;e<d&&!(e+c>=b.length||e>=a.length);e++)b[e+c]=a[e];return e}var W=a("base64-js"),X=a("ieee754"),Y=a("isarray");c.Buffer=f,c.SlowBuffer=r,c.INSPECT_MAX_BYTES=50,f.poolSize=8192;var Z={};f.TYPED_ARRAY_SUPPORT=void 0!==b.TYPED_ARRAY_SUPPORT?b.TYPED_ARRAY_SUPPORT:d(),f.TYPED_ARRAY_SUPPORT?(f.prototype.__proto__=Uint8Array.prototype,f.__proto__=Uint8Array):(f.prototype.length=void 0,f.prototype.parent=void 0),f.isBuffer=function(a){return!(null==a||!a._isBuffer)},f.compare=function(a,b){if(!f.isBuffer(a)||!f.isBuffer(b))throw new TypeError("Arguments must be Buffers");if(a===b)return 0;for(var c=a.length,d=b.length,e=0,g=Math.min(c,d);e<g&&a[e]===b[e];)++e;return e!==g&&(c=a[e],d=b[e]),c<d?-1:d<c?1:0},f.isEncoding=function(a){switch(String(a).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},f.concat=function(a,b){if(!Y(a))throw new TypeError("list argument must be an Array of Buffers.");if(0===a.length)return new f(0);var c;if(void 0===b)for(b=0,c=0;c<a.length;c++)b+=a[c].length;var d=new f(b),e=0;for(c=0;c<a.length;c++){var g=a[c];g.copy(d,e),e+=g.length}return d},f.byteLength=s,f.prototype.toString=function(){var a=0|this.length;return 0===a?"":0===arguments.length?B(this,0,a):t.apply(this,arguments)},f.prototype.equals=function(a){if(!f.isBuffer(a))throw new TypeError("Argument must be a Buffer");return this===a||0===f.compare(this,a)},f.prototype.inspect=function(){var a="",b=c.INSPECT_MAX_BYTES;return this.length>0&&(a=this.toString("hex",0,b).match(/.{2}/g).join(" "),this.length>b&&(a+=" ... ")),"<Buffer "+a+">"},f.prototype.compare=function(a){if(!f.isBuffer(a))throw new TypeError("Argument must be a Buffer");return this===a?0:f.compare(this,a)},f.prototype.indexOf=function(a,b){function c(a,b,c){for(var d=-1,e=0;c+e<a.length;e++)if(a[c+e]===b[-1===d?0:e-d]){if(-1===d&&(d=e),e-d+1===b.length)return c+d}else d=-1;return-1}if(b>2147483647?b=2147483647:b<-2147483648&&(b=-2147483648),b>>=0,0===this.length)return-1;if(b>=this.length)return-1;if(b<0&&(b=Math.max(this.length+b,0)),"string"==typeof a)return 0===a.length?-1:String.prototype.indexOf.call(this,a,b);if(f.isBuffer(a))return c(this,a,b);if("number"==typeof a)return f.TYPED_ARRAY_SUPPORT&&"function"===Uint8Array.prototype.indexOf?Uint8Array.prototype.indexOf.call(this,a,b):c(this,[a],b);throw new TypeError("val must be string, number or Buffer")},f.prototype.get=function(a){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(a)},f.prototype.set=function(a,b){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(a,b)},f.prototype.write=function(a,b,c,d){if(void 0===b)d="utf8",c=this.length,b=0;else if(void 0===c&&"string"==typeof b)d=b,c=this.length,b=0;else if(isFinite(b))b|=0,isFinite(c)?(c|=0,void 0===d&&(d="utf8")):(d=c,c=void 0);else{var e=d;d=b,b=0|c,c=e}var f=this.length-b;if((void 0===c||c>f)&&(c=f),a.length>0&&(c<0||b<0)||b>this.length)throw new RangeError("attempt to write outside buffer bounds");d||(d="utf8");for(var g=!1;;)switch(d){case"hex":return u(this,a,b,c);case"utf8":case"utf-8":return v(this,a,b,c);case"ascii":return w(this,a,b,c);case"binary":return x(this,a,b,c);case"base64":return y(this,a,b,c);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return z(this,a,b,c);default:if(g)throw new TypeError("Unknown encoding: "+d);d=(""+d).toLowerCase(),g=!0}},f.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var $=4096;f.prototype.slice=function(a,b){var c=this.length;a=~~a,b=void 0===b?c:~~b,a<0?(a+=c)<0&&(a=0):a>c&&(a=c),b<0?(b+=c)<0&&(b=0):b>c&&(b=c),b<a&&(b=a);var d;if(f.TYPED_ARRAY_SUPPORT)d=f._augment(this.subarray(a,b));else{var e=b-a;d=new f(e,void 0);for(var g=0;g<e;g++)d[g]=this[g+a]}return d.length&&(d.parent=this.parent||this),d},f.prototype.readUIntLE=function(a,b,c){a|=0,b|=0,c||H(a,b,this.length);for(var d=this[a],e=1,f=0;++f<b&&(e*=256);)d+=this[a+f]*e;return d},f.prototype.readUIntBE=function(a,b,c){a|=0,b|=0,c||H(a,b,this.length);for(var d=this[a+--b],e=1;b>0&&(e*=256);)d+=this[a+--b]*e;return d},f.prototype.readUInt8=function(a,b){return b||H(a,1,this.length),this[a]},f.prototype.readUInt16LE=function(a,b){return b||H(a,2,this.length),this[a]|this[a+1]<<8},f.prototype.readUInt16BE=function(a,b){return b||H(a,2,this.length),this[a]<<8|this[a+1]},f.prototype.readUInt32LE=function(a,b){return b||H(a,4,this.length),(this[a]|this[a+1]<<8|this[a+2]<<16)+16777216*this[a+3]},f.prototype.readUInt32BE=function(a,b){return b||H(a,4,this.length),16777216*this[a]+(this[a+1]<<16|this[a+2]<<8|this[a+3])},f.prototype.readIntLE=function(a,b,c){a|=0,b|=0,c||H(a,b,this.length);for(var d=this[a],e=1,f=0;++f<b&&(e*=256);)d+=this[a+f]*e;return e*=128,d>=e&&(d-=Math.pow(2,8*b)),d},f.prototype.readIntBE=function(a,b,c){a|=0,b|=0,c||H(a,b,this.length);for(var d=b,e=1,f=this[a+--d];d>0&&(e*=256);)f+=this[a+--d]*e;return e*=128,f>=e&&(f-=Math.pow(2,8*b)),f},f.prototype.readInt8=function(a,b){return b||H(a,1,this.length),128&this[a]?-1*(255-this[a]+1):this[a]},f.prototype.readInt16LE=function(a,b){b||H(a,2,this.length);var c=this[a]|this[a+1]<<8;return 32768&c?4294901760|c:c},f.prototype.readInt16BE=function(a,b){b||H(a,2,this.length);var c=this[a+1]|this[a]<<8;return 32768&c?4294901760|c:c},f.prototype.readInt32LE=function(a,b){return b||H(a,4,this.length),this[a]|this[a+1]<<8|this[a+2]<<16|this[a+3]<<24},f.prototype.readInt32BE=function(a,b){return b||H(a,4,this.length),this[a]<<24|this[a+1]<<16|this[a+2]<<8|this[a+3]},f.prototype.readFloatLE=function(a,b){return b||H(a,4,this.length),X.read(this,a,!0,23,4)},f.prototype.readFloatBE=function(a,b){return b||H(a,4,this.length),X.read(this,a,!1,23,4)},f.prototype.readDoubleLE=function(a,b){return b||H(a,8,this.length),X.read(this,a,!0,52,8)},f.prototype.readDoubleBE=function(a,b){return b||H(a,8,this.length),X.read(this,a,!1,52,8)},f.prototype.writeUIntLE=function(a,b,c,d){a=+a,b|=0,c|=0,d||I(this,a,b,c,Math.pow(2,8*c),0);var e=1,f=0;for(this[b]=255&a;++f<c&&(e*=256);)this[b+f]=a/e&255;return b+c},f.prototype.writeUIntBE=function(a,b,c,d){a=+a,b|=0,c|=0,d||I(this,a,b,c,Math.pow(2,8*c),0);var e=c-1,f=1;for(this[b+e]=255&a;--e>=0&&(f*=256);)this[b+e]=a/f&255;return b+c},f.prototype.writeUInt8=function(a,b,c){return a=+a,b|=0,c||I(this,a,b,1,255,0),f.TYPED_ARRAY_SUPPORT||(a=Math.floor(a)),this[b]=255&a,b+1},f.prototype.writeUInt16LE=function(a,b,c){return a=+a,b|=0,c||I(this,a,b,2,65535,0),f.TYPED_ARRAY_SUPPORT?(this[b]=255&a,this[b+1]=a>>>8):J(this,a,b,!0),b+2},f.prototype.writeUInt16BE=function(a,b,c){return a=+a,b|=0,c||I(this,a,b,2,65535,0),f.TYPED_ARRAY_SUPPORT?(this[b]=a>>>8,this[b+1]=255&a):J(this,a,b,!1),b+2},f.prototype.writeUInt32LE=function(a,b,c){return a=+a,b|=0,c||I(this,a,b,4,4294967295,0),f.TYPED_ARRAY_SUPPORT?(this[b+3]=a>>>24,this[b+2]=a>>>16,this[b+1]=a>>>8,this[b]=255&a):K(this,a,b,!0),b+4},f.prototype.writeUInt32BE=function(a,b,c){return a=+a,b|=0,c||I(this,a,b,4,4294967295,0),f.TYPED_ARRAY_SUPPORT?(this[b]=a>>>24,this[b+1]=a>>>16,this[b+2]=a>>>8,this[b+3]=255&a):K(this,a,b,!1),b+4},f.prototype.writeIntLE=function(a,b,c,d){if(a=+a,b|=0,!d){var e=Math.pow(2,8*c-1);I(this,a,b,c,e-1,-e)}var f=0,g=1,h=a<0?1:0;for(this[b]=255&a;++f<c&&(g*=256);)this[b+f]=(a/g>>0)-h&255;return b+c},f.prototype.writeIntBE=function(a,b,c,d){if(a=+a,b|=0,!d){var e=Math.pow(2,8*c-1);I(this,a,b,c,e-1,-e)}var f=c-1,g=1,h=a<0?1:0;for(this[b+f]=255&a;--f>=0&&(g*=256);)this[b+f]=(a/g>>0)-h&255;return b+c},f.prototype.writeInt8=function(a,b,c){return a=+a,b|=0,c||I(this,a,b,1,127,-128),f.TYPED_ARRAY_SUPPORT||(a=Math.floor(a)),a<0&&(a=255+a+1),this[b]=255&a,b+1},f.prototype.writeInt16LE=function(a,b,c){return a=+a,b|=0,c||I(this,a,b,2,32767,-32768),f.TYPED_ARRAY_SUPPORT?(this[b]=255&a,this[b+1]=a>>>8):J(this,a,b,!0),b+2},f.prototype.writeInt16BE=function(a,b,c){return a=+a,b|=0,c||I(this,a,b,2,32767,-32768),f.TYPED_ARRAY_SUPPORT?(this[b]=a>>>8,this[b+1]=255&a):J(this,a,b,!1),b+2},f.prototype.writeInt32LE=function(a,b,c){return a=+a,b|=0,c||I(this,a,b,4,2147483647,-2147483648),f.TYPED_ARRAY_SUPPORT?(this[b]=255&a,this[b+1]=a>>>8,this[b+2]=a>>>16,this[b+3]=a>>>24):K(this,a,b,!0),b+4},f.prototype.writeInt32BE=function(a,b,c){return a=+a,b|=0,c||I(this,a,b,4,2147483647,-2147483648),a<0&&(a=4294967295+a+1),f.TYPED_ARRAY_SUPPORT?(this[b]=a>>>24,this[b+1]=a>>>16,this[b+2]=a>>>8,this[b+3]=255&a):K(this,a,b,!1),b+4},f.prototype.writeFloatLE=function(a,b,c){return M(this,a,b,!0,c)},f.prototype.writeFloatBE=function(a,b,c){return M(this,a,b,!1,c)},f.prototype.writeDoubleLE=function(a,b,c){return N(this,a,b,!0,c)},f.prototype.writeDoubleBE=function(a,b,c){return N(this,a,b,!1,c)},f.prototype.copy=function(a,b,c,d){if(c||(c=0),d||0===d||(d=this.length),b>=a.length&&(b=a.length),b||(b=0),d>0&&d<c&&(d=c),d===c)return 0;if(0===a.length||0===this.length)return 0;if(b<0)throw new RangeError("targetStart out of bounds");if(c<0||c>=this.length)throw new RangeError("sourceStart out of bounds");if(d<0)throw new RangeError("sourceEnd out of bounds");d>this.length&&(d=this.length),a.length-b<d-c&&(d=a.length-b+c);var e,g=d-c;if(this===a&&c<b&&b<d)for(e=g-1;e>=0;e--)a[e+b]=this[e+c];else if(g<1e3||!f.TYPED_ARRAY_SUPPORT)for(e=0;e<g;e++)a[e+b]=this[e+c];else a._set(this.subarray(c,c+g),b);return g},f.prototype.fill=function(a,b,c){if(a||(a=0),b||(b=0),c||(c=this.length),c<b)throw new RangeError("end < start");if(c!==b&&0!==this.length){if(b<0||b>=this.length)throw new RangeError("start out of bounds");if(c<0||c>this.length)throw new RangeError("end out of bounds");var d;if("number"==typeof a)for(d=b;d<c;d++)this[d]=a;else{var e=R(a.toString()),f=e.length;for(d=b;d<c;d++)this[d]=e[d%f]}return this}},f.prototype.toArrayBuffer=function(){if("undefined"!=typeof Uint8Array){if(f.TYPED_ARRAY_SUPPORT)return new f(this).buffer;for(var a=new Uint8Array(this.length),b=0,c=a.length;b<c;b+=1)a[b]=this[b];return a.buffer}throw new TypeError("Buffer.toArrayBuffer not supported in this browser")};var _=f.prototype;f._augment=function(a){return a.constructor=f,a._isBuffer=!0,a._set=a.set,a.get=_.get,a.set=_.set,a.write=_.write,a.toString=_.toString,a.toLocaleString=_.toString,a.toJSON=_.toJSON,a.equals=_.equals,a.compare=_.compare,a.indexOf=_.indexOf,a.copy=_.copy,a.slice=_.slice,a.readUIntLE=_.readUIntLE,a.readUIntBE=_.readUIntBE,a.readUInt8=_.readUInt8,a.readUInt16LE=_.readUInt16LE,a.readUInt16BE=_.readUInt16BE,a.readUInt32LE=_.readUInt32LE,a.readUInt32BE=_.readUInt32BE,a.readIntLE=_.readIntLE,a.readIntBE=_.readIntBE,a.readInt8=_.readInt8,a.readInt16LE=_.readInt16LE,a.readInt16BE=_.readInt16BE,a.readInt32LE=_.readInt32LE,a.readInt32BE=_.readInt32BE,a.readFloatLE=_.readFloatLE,a.readFloatBE=_.readFloatBE,a.readDoubleLE=_.readDoubleLE,a.readDoubleBE=_.readDoubleBE,a.writeUInt8=_.writeUInt8,a.writeUIntLE=_.writeUIntLE,a.writeUIntBE=_.writeUIntBE,a.writeUInt16LE=_.writeUInt16LE,a.writeUInt16BE=_.writeUInt16BE,a.writeUInt32LE=_.writeUInt32LE,a.writeUInt32BE=_.writeUInt32BE,a.writeIntLE=_.writeIntLE,a.writeIntBE=_.writeIntBE,a.writeInt8=_.writeInt8,a.writeInt16LE=_.writeInt16LE,a.writeInt16BE=_.writeInt16BE,a.writeInt32LE=_.writeInt32LE,a.writeInt32BE=_.writeInt32BE,a.writeFloatLE=_.writeFloatLE,a.writeFloatBE=_.writeFloatBE,a.writeDoubleLE=_.writeDoubleLE,a.writeDoubleBE=_.writeDoubleBE,a.fill=_.fill,a.inspect=_.inspect,a.toArrayBuffer=_.toArrayBuffer,a};var aa=/[^+\/0-9A-Za-z-_]/g}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"base64-js":1,ieee754:7,isarray:8}],4:[function(b,c,d){(function(e,f){!function(b,e){"object"==typeof d&&void 0!==c?c.exports=e():"function"==typeof a&&a.amd?a(e):b.ES6Promise=e()}(this,function(){"use strict";function a(a){var b=typeof a;return null!==a&&("object"===b||"function"===b)}function c(a){return"function"==typeof a}function d(a){X=a}function g(a){Y=a}function h(){return function(){return e.nextTick(m)}}function i(){return void 0!==W?function(){W(m)}:l()}function j(){var a=0,b=new _(m),c=document.createTextNode("");return b.observe(c,{characterData:!0}),function(){c.data=a=++a%2}}function k(){var a=new MessageChannel;return a.port1.onmessage=m,function(){return a.port2.postMessage(0)}}function l(){var a=setTimeout;return function(){return a(m,1)}}function m(){for(var a=0;a<V;a+=2){(0,ca[a])(ca[a+1]),ca[a]=void 0,ca[a+1]=void 0}V=0}function n(){try{var a=b,c=a("vertx");return W=c.runOnLoop||c.runOnContext,i()}catch(a){return l()}}function o(a,b){var c=arguments,d=this,e=new this.constructor(q);void 0===e[ea]&&J(e);var f=d._state;return f?function(){var a=c[f-1];Y(function(){return G(f,e,a,d._result)})}():C(d,e,a,b),e}function p(a){var b=this;if(a&&"object"==typeof a&&a.constructor===b)return a;var c=new b(q);return y(c,a),c}function q(){}function r(){return new TypeError("You cannot resolve a promise with itself")}function s(){return new TypeError("A promises callback cannot return that same promise.")}function t(a){try{return a.then}catch(a){return ia.error=a,ia}}function u(a,b,c,d){try{a.call(b,c,d)}catch(a){return a}}function v(a,b,c){Y(function(a){var d=!1,e=u(c,b,function(c){d||(d=!0,b!==c?y(a,c):A(a,c))},function(b){d||(d=!0,B(a,b))},"Settle: "+(a._label||" unknown promise"));!d&&e&&(d=!0,B(a,e))},a)}function w(a,b){b._state===ga?A(a,b._result):b._state===ha?B(a,b._result):C(b,void 0,function(b){return y(a,b)},function(b){return B(a,b)})}function x(a,b,d){b.constructor===a.constructor&&d===o&&b.constructor.resolve===p?w(a,b):d===ia?(B(a,ia.error),ia.error=null):void 0===d?A(a,b):c(d)?v(a,b,d):A(a,b)}function y(b,c){b===c?B(b,r()):a(c)?x(b,c,t(c)):A(b,c)}function z(a){a._onerror&&a._onerror(a._result),D(a)}function A(a,b){a._state===fa&&(a._result=b,a._state=ga,0!==a._subscribers.length&&Y(D,a))}function B(a,b){a._state===fa&&(a._state=ha,a._result=b,Y(z,a))}function C(a,b,c,d){var e=a._subscribers,f=e.length;a._onerror=null,e[f]=b,e[f+ga]=c,e[f+ha]=d,0===f&&a._state&&Y(D,a)}function D(a){var b=a._subscribers,c=a._state;if(0!==b.length){for(var d=void 0,e=void 0,f=a._result,g=0;g<b.length;g+=3)d=b[g],e=b[g+c],d?G(c,d,e,f):e(f);a._subscribers.length=0}}function E(){this.error=null}function F(a,b){try{return a(b)}catch(a){return ja.error=a,ja}}function G(a,b,d,e){var f=c(d),g=void 0,h=void 0,i=void 0,j=void 0;if(f){if(g=F(d,e),g===ja?(j=!0,h=g.error,g.error=null):i=!0,b===g)return void B(b,s())}else g=e,i=!0;b._state!==fa||(f&&i?y(b,g):j?B(b,h):a===ga?A(b,g):a===ha&&B(b,g))}function H(a,b){try{b(function(b){y(a,b)},function(b){B(a,b)})}catch(b){B(a,b)}}function I(){return ka++}function J(a){a[ea]=ka++,a._state=void 0,a._result=void 0,a._subscribers=[]}function K(a,b){this._instanceConstructor=a,this.promise=new a(q),this.promise[ea]||J(this.promise),U(b)?(this.length=b.length,this._remaining=b.length,this._result=new Array(this.length),0===this.length?A(this.promise,this._result):(this.length=this.length||0,this._enumerate(b),0===this._remaining&&A(this.promise,this._result))):B(this.promise,L())}function L(){return new Error("Array Methods must be provided an Array")}function M(a){return new K(this,a).promise}function N(a){var b=this;return new b(U(a)?function(c,d){for(var e=a.length,f=0;f<e;f++)b.resolve(a[f]).then(c,d)}:function(a,b){return b(new TypeError("You must pass an array to race."))})}function O(a){var b=this,c=new b(q);return B(c,a),c}function P(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function Q(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function R(a){this[ea]=I(),this._result=this._state=void 0,this._subscribers=[],q!==a&&("function"!=typeof a&&P(),this instanceof R?H(this,a):Q())}function S(){var a=void 0;if(void 0!==f)a=f;else if("undefined"!=typeof self)a=self;else try{a=Function("return this")()}catch(a){throw new Error("polyfill failed because global object is unavailable in this environment")}var b=a.Promise;if(b){var c=null;try{c=Object.prototype.toString.call(b.resolve())}catch(a){}if("[object Promise]"===c&&!b.cast)return}a.Promise=R}var T=void 0;T=Array.isArray?Array.isArray:function(a){return"[object Array]"===Object.prototype.toString.call(a)};var U=T,V=0,W=void 0,X=void 0,Y=function(a,b){ca[V]=a,ca[V+1]=b,2===(V+=2)&&(X?X(m):da())},Z="undefined"!=typeof window?window:void 0,$=Z||{},_=$.MutationObserver||$.WebKitMutationObserver,aa="undefined"==typeof self&&void 0!==e&&"[object process]"==={}.toString.call(e),ba="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,ca=new Array(1e3),da=void 0;da=aa?h():_?j():ba?k():void 0===Z&&"function"==typeof b?n():l();var ea=Math.random().toString(36).substring(16),fa=void 0,ga=1,ha=2,ia=new E,ja=new E,ka=0;return K.prototype._enumerate=function(a){for(var b=0;this._state===fa&&b<a.length;b++)this._eachEntry(a[b],b)},K.prototype._eachEntry=function(a,b){var c=this._instanceConstructor,d=c.resolve;if(d===p){var e=t(a);if(e===o&&a._state!==fa)this._settledAt(a._state,b,a._result);else if("function"!=typeof e)this._remaining--,this._result[b]=a;else if(c===R){var f=new c(q);x(f,a,e),this._willSettleAt(f,b)}else this._willSettleAt(new c(function(b){return b(a)}),b)}else this._willSettleAt(d(a),b)},K.prototype._settledAt=function(a,b,c){var d=this.promise;d._state===fa&&(this._remaining--,a===ha?B(d,c):this._result[b]=c),0===this._remaining&&A(d,this._result)},K.prototype._willSettleAt=function(a,b){var c=this;C(a,void 0,function(a){return c._settledAt(ga,b,a)},function(a){return c._settledAt(ha,b,a)})},R.all=M,R.race=N,R.resolve=p,R.reject=O,R._setScheduler=d,R._setAsap=g,R._asap=Y,R.prototype={constructor:R,then:o,catch:function(a){return this.then(null,a)}},R.polyfill=S,R.Promise=R,R})}).call(this,b("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{_process:10}],5:[function(b,c,d){!function(b,e){if("function"==typeof a&&a.amd)a(["exports","module"],e);else if(void 0!==d&&void 0!==c)e(d,c);else{var f={exports:{}};e(f.exports,f),b.fetchJsonp=f.exports}}(this,function(a,b){"use strict";function c(){return"jsonp_"+Date.now()+"_"+Math.ceil(1e5*Math.random())}function d(a){try{delete window[a]}catch(b){window[a]=void 0}}function e(a){var b=document.getElementById(a);b&&document.getElementsByTagName("head")[0].removeChild(b)}function f(a){var b=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],f=a,h=b.timeout||g.timeout,i=b.jsonpCallback||g.jsonpCallback,j=void 0;return new Promise(function(g,k){var l=b.jsonpCallbackFunction||c(),m=i+"_"+l;window[l]=function(a){g({ok:!0,json:function(){return Promise.resolve(a)}}),j&&clearTimeout(j),e(m),d(l)},f+=-1===f.indexOf("?")?"?":"&";var n=document.createElement("script");n.setAttribute("src",""+f+i+"="+l),b.charset&&n.setAttribute("charset",b.charset),n.id=m,document.getElementsByTagName("head")[0].appendChild(n),j=setTimeout(function(){k(new Error("JSONP request to "+a+" timed out")),d(l),e(m),window[l]=function(){d(l)}},h),n.onerror=function(){k(new Error("JSONP request to "+a+" failed")),d(l),e(m),j&&clearTimeout(j)}})}var g={timeout:5e3,jsonpCallback:"callback",jsonpCallbackFunction:null};b.exports=f})},{}],6:[function(b,c,d){var e=e||function(a){"use strict";if(!(void 0===a||"undefined"!=typeof navigator&&/MSIE [1-9]\./.test(navigator.userAgent))){var b=a.document,c=function(){return a.URL||a.webkitURL||a},d=b.createElementNS("http://www.w3.org/1999/xhtml","a"),e="download"in d,f=function(a){var b=new MouseEvent("click");a.dispatchEvent(b)},g=/constructor/i.test(a.HTMLElement)||a.safari,h=/CriOS\/[\d]+/.test(navigator.userAgent),i=function(b){(a.setImmediate||a.setTimeout)(function(){throw b},0)},j="application/octet-stream",k=4e4,l=function(a){var b=function(){"string"==typeof a?c().revokeObjectURL(a):a.remove()};setTimeout(b,k)},m=function(a,b,c){b=[].concat(b);for(var d=b.length;d--;){var e=a["on"+b[d]];if("function"==typeof e)try{e.call(a,c||a)}catch(a){i(a)}}},n=function(a){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob([String.fromCharCode(65279),a],{type:a.type}):a},o=function(b,i,k){k||(b=n(b));var o,p=this,q=b.type,r=q===j,s=function(){m(p,"writestart progress write writeend".split(" "))},t=function(){if((h||r&&g)&&a.FileReader){var d=new FileReader;return d.onloadend=function(){var b=h?d.result:d.result.replace(/^data:[^;]*;/,"data:attachment/file;");a.open(b,"_blank")||(a.location.href=b),b=void 0,p.readyState=p.DONE,s()},d.readAsDataURL(b),void(p.readyState=p.INIT)}if(o||(o=c().createObjectURL(b)),r)a.location.href=o;else{a.open(o,"_blank")||(a.location.href=o)}p.readyState=p.DONE,s(),l(o)};if(p.readyState=p.INIT,e)return o=c().createObjectURL(b),void setTimeout(function(){d.href=o,d.download=i,f(d),s(),l(o),p.readyState=p.DONE});t()},p=o.prototype,q=function(a,b,c){return new o(a,b||a.name||"download",c)};return"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(a,b,c){return b=b||a.name||"download",c||(a=n(a)),navigator.msSaveOrOpenBlob(a,b)}:(p.abort=function(){},p.readyState=p.INIT=0,p.WRITING=1,p.DONE=2,p.error=p.onwritestart=p.onprogress=p.onwrite=p.onabort=p.onerror=p.onwriteend=null,q)}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content);void 0!==c&&c.exports?c.exports.saveAs=e:void 0!==a&&null!==a&&null!==a.amd&&a("FileSaver.js",function(){return e})},{}],7:[function(a,b,c){c.read=function(a,b,c,d,e){var f,g,h=8*e-d-1,i=(1<<h)-1,j=i>>1,k=-7,l=c?e-1:0,m=c?-1:1,n=a[b+l];for(l+=m,f=n&(1<<-k)-1,n>>=-k,k+=h;k>0;f=256*f+a[b+l],l+=m,k-=8);for(g=f&(1<<-k)-1,f>>=-k,k+=d;k>0;g=256*g+a[b+l],l+=m,k-=8);if(0===f)f=1-j;else{if(f===i)return g?NaN:1/0*(n?-1:1);g+=Math.pow(2,d),f-=j}return(n?-1:1)*g*Math.pow(2,f-d)},c.write=function(a,b,c,d,e,f){var g,h,i,j=8*f-e-1,k=(1<<j)-1,l=k>>1,m=23===e?Math.pow(2,-24)-Math.pow(2,-77):0,n=d?0:f-1,o=d?1:-1,p=b<0||0===b&&1/b<0?1:0;for(b=Math.abs(b),isNaN(b)||b===1/0?(h=isNaN(b)?1:0,g=k):(g=Math.floor(Math.log(b)/Math.LN2),b*(i=Math.pow(2,-g))<1&&(g--,i*=2),b+=g+l>=1?m/i:m*Math.pow(2,1-l),b*i>=2&&(g++,i/=2),g+l>=k?(h=0,g=k):g+l>=1?(h=(b*i-1)*Math.pow(2,e),g+=l):(h=b*Math.pow(2,l-1)*Math.pow(2,e),g=0));e>=8;a[c+n]=255&h,n+=o,h/=256,e-=8);for(g=g<<e|h,j+=e;j>0;a[c+n]=255&g,n+=o,g/=256,j-=8);a[c+n-o]|=128*p}},{}],8:[function(a,b,c){var d={}.toString;b.exports=Array.isArray||function(a){return"[object Array]"==d.call(a)}},{}],9:[function(b,c,d){(function(e){!function(b,e){"object"==typeof d&&void 0!==c?e(d):"function"==typeof a&&a.amd?a(["exports"],e):e(b.opentype=b.opentype||{})}(this,function(a){"use strict";function c(){
this.table=new Uint16Array(16),this.trans=new Uint16Array(288)}function d(a,b){this.source=a,this.sourceIndex=0,this.tag=0,this.bitcount=0,this.dest=b,this.destLen=0,this.ltree=new c,this.dtree=new c}function f(a,b,c,d){var e,f;for(e=0;e<c;++e)a[e]=0;for(e=0;e<30-c;++e)a[e+c]=e/c|0;for(f=d,e=0;e<30;++e)b[e]=f,f+=1<<a[e]}function g(a,b){var c;for(c=0;c<7;++c)a.table[c]=0;for(a.table[7]=24,a.table[8]=152,a.table[9]=112,c=0;c<24;++c)a.trans[c]=256+c;for(c=0;c<144;++c)a.trans[24+c]=c;for(c=0;c<8;++c)a.trans[168+c]=280+c;for(c=0;c<112;++c)a.trans[176+c]=144+c;for(c=0;c<5;++c)b.table[c]=0;for(b.table[5]=32,c=0;c<32;++c)b.trans[c]=c}function h(a,b,c,d){var e,f;for(e=0;e<16;++e)a.table[e]=0;for(e=0;e<d;++e)a.table[b[c+e]]++;for(a.table[0]=0,f=0,e=0;e<16;++e)xe[e]=f,f+=a.table[e];for(e=0;e<d;++e)b[c+e]&&(a.trans[xe[b[c+e]]++]=e)}function i(a){a.bitcount--||(a.tag=a.source[a.sourceIndex++],a.bitcount=7);var b=1&a.tag;return a.tag>>>=1,b}function j(a,b,c){if(!b)return c;for(;a.bitcount<24;)a.tag|=a.source[a.sourceIndex++]<<a.bitcount,a.bitcount+=8;var d=a.tag&65535>>>16-b;return a.tag>>>=b,a.bitcount-=b,d+c}function k(a,b){for(;a.bitcount<24;)a.tag|=a.source[a.sourceIndex++]<<a.bitcount,a.bitcount+=8;var c=0,d=0,e=0,f=a.tag;do{d=2*d+(1&f),f>>>=1,++e,c+=b.table[e],d-=b.table[e]}while(d>=0);return a.tag=f,a.bitcount-=e,b.trans[c+d]}function l(a,b,c){var d,e,f,g,i,l;for(d=j(a,5,257),e=j(a,5,1),f=j(a,4,4),g=0;g<19;++g)we[g]=0;for(g=0;g<f;++g){var m=j(a,3,0);we[ue[g]]=m}for(h(ve,we,0,19),i=0;i<d+e;){var n=k(a,ve);switch(n){case 16:var o=we[i-1];for(l=j(a,2,3);l;--l)we[i++]=o;break;case 17:for(l=j(a,3,3);l;--l)we[i++]=0;break;case 18:for(l=j(a,7,11);l;--l)we[i++]=0;break;default:we[i++]=n}}h(b,we,0,d),h(c,we,d,e)}function m(a,b,c){for(;;){var d=k(a,b);if(256===d)return me;if(d<256)a.dest[a.destLen++]=d;else{var e,f,g,h;for(d-=257,e=j(a,qe[d],re[d]),f=k(a,c),g=a.destLen-j(a,se[f],te[f]),h=g;h<g+e;++h)a.dest[a.destLen++]=a.dest[h]}}}function n(a){for(var b,c,d;a.bitcount>8;)a.sourceIndex--,a.bitcount-=8;if(b=a.source[a.sourceIndex+1],b=256*b+a.source[a.sourceIndex],c=a.source[a.sourceIndex+3],c=256*c+a.source[a.sourceIndex+2],b!==(65535&~c))return ne;for(a.sourceIndex+=4,d=b;d;--d)a.dest[a.destLen++]=a.source[a.sourceIndex++];return a.bitcount=0,me}function o(a,b){var c,e,f=new d(a,b);do{switch(c=i(f),j(f,2,0)){case 0:e=n(f);break;case 1:e=m(f,oe,pe);break;case 2:l(f,f.ltree,f.dtree),e=m(f,f.ltree,f.dtree);break;default:e=ne}if(e!==me)throw new Error("Data error")}while(!c);return f.destLen<f.dest.length?"function"==typeof f.dest.slice?f.dest.slice(0,f.destLen):f.dest.subarray(0,f.destLen):f.dest}function p(a,b,c,d,e){return Math.pow(1-e,3)*a+3*Math.pow(1-e,2)*e*b+3*(1-e)*Math.pow(e,2)*c+Math.pow(e,3)*d}function q(){this.x1=Number.NaN,this.y1=Number.NaN,this.x2=Number.NaN,this.y2=Number.NaN}function r(){this.commands=[],this.fill="black",this.stroke=null,this.strokeWidth=1}function s(a){throw new Error(a)}function t(a,b){a||s(b)}function u(a){return function(){return a}}function v(a){return a>=-128&&a<=127}function w(a,b,c){for(var d=0,e=a.length;b<e&&d<64&&0===a[b];)++b,++d;return c.push(128|d-1),b}function x(a,b,c){for(var d=0,e=a.length,f=b;f<e&&d<64;){var g=a[f];if(!v(g))break;if(0===g&&f+1<e&&0===a[f+1])break;++f,++d}c.push(d-1);for(var h=b;h<f;++h)c.push(a[h]+256&255);return f}function y(a,b,c){for(var d=0,e=a.length,f=b;f<e&&d<64;){var g=a[f];if(0===g)break;if(v(g)&&f+1<e&&v(a[f+1]))break;++f,++d}c.push(64|d-1);for(var h=b;h<f;++h){var i=a[h];c.push(i+65536>>8&255,i+256&255)}return f}function z(a,b,c){for(var d=this,e=0;e<b.length;e+=1){var f=b[e];d[f.name]=f.value}if(this.tableName=a,this.fields=b,c)for(var g=Object.keys(c),h=0;h<g.length;h+=1){var i=g[h],j=c[i];void 0!==d[i]&&(d[i]=j)}}function A(a,b,c){void 0===c&&(c=b.length);var d=new Array(b.length+1);d[0]={name:a+"Count",type:"USHORT",value:c};for(var e=0;e<b.length;e++)d[e+1]={name:a+e,type:"USHORT",value:b[e]};return d}function B(a,b,c){var d=b.length,e=new Array(d+1);e[0]={name:a+"Count",type:"USHORT",value:d};for(var f=0;f<d;f++)e[f+1]={name:a+f,type:"TABLE",value:c(b[f],f)};return e}function C(a,b,c){var d=b.length,e=[];e[0]={name:a+"Count",type:"USHORT",value:d};for(var f=0;f<d;f++)e=e.concat(c(b[f],f));return e}function D(a){1===a.format?z.call(this,"coverageTable",[{name:"coverageFormat",type:"USHORT",value:1}].concat(A("glyph",a.glyphs))):ze.assert(!1,"Can't create coverage table format 2 yet.")}function E(a){z.call(this,"scriptListTable",C("scriptRecord",a,function(a,b){var c=a.script,d=c.defaultLangSys;return ze.assert(!!d,"Unable to write GSUB: script "+a.tag+" has no default language system."),[{name:"scriptTag"+b,type:"TAG",value:a.tag},{name:"script"+b,type:"TABLE",value:new z("scriptTable",[{name:"defaultLangSys",type:"TABLE",value:new z("defaultLangSys",[{name:"lookupOrder",type:"USHORT",value:0},{name:"reqFeatureIndex",type:"USHORT",value:d.reqFeatureIndex}].concat(A("featureIndex",d.featureIndexes)))}].concat(C("langSys",c.langSysRecords,function(a,b){var c=a.langSys;return[{name:"langSysTag"+b,type:"TAG",value:a.tag},{name:"langSys"+b,type:"TABLE",value:new z("langSys",[{name:"lookupOrder",type:"USHORT",value:0},{name:"reqFeatureIndex",type:"USHORT",value:c.reqFeatureIndex}].concat(A("featureIndex",c.featureIndexes)))}]})))}]}))}function F(a){z.call(this,"featureListTable",C("featureRecord",a,function(a,b){var c=a.feature;return[{name:"featureTag"+b,type:"TAG",value:a.tag},{name:"feature"+b,type:"TABLE",value:new z("featureTable",[{name:"featureParams",type:"USHORT",value:c.featureParams}].concat(A("lookupListIndex",c.lookupListIndexes)))}]}))}function G(a,b){z.call(this,"lookupListTable",B("lookup",a,function(a){var c=b[a.lookupType];return ze.assert(!!c,"Unable to write GSUB lookup type "+a.lookupType+" tables."),new z("lookupTable",[{name:"lookupType",type:"USHORT",value:a.lookupType},{name:"lookupFlag",type:"USHORT",value:a.lookupFlag}].concat(B("subtable",a.subtables,c)))}))}function H(a,b){return a.getUint8(b)}function I(a,b){return a.getUint16(b,!1)}function J(a,b){return a.getInt16(b,!1)}function K(a,b){return a.getUint32(b,!1)}function L(a,b){return a.getInt16(b,!1)+a.getUint16(b+2,!1)/65535}function M(a,b){for(var c="",d=b;d<b+4;d+=1)c+=String.fromCharCode(a.getInt8(d));return c}function N(a,b,c){for(var d=0,e=0;e<c;e+=1)d<<=8,d+=a.getUint8(b+e);return d}function O(a,b,c){for(var d=[],e=b;e<c;e+=1)d.push(a.getUint8(e));return d}function P(a){for(var b="",c=0;c<a.length;c+=1)b+=String.fromCharCode(a[c]);return b}function Q(a,b){this.data=a,this.offset=b,this.relativeOffset=0}function R(a,b){b.parseUShort(),a.length=b.parseULong(),a.language=b.parseULong();var c;a.groupCount=c=b.parseULong(),a.glyphIndexMap={};for(var d=0;d<c;d+=1)for(var e=b.parseULong(),f=b.parseULong(),g=b.parseULong(),h=e;h<=f;h+=1)a.glyphIndexMap[h]=g,g++}function S(a,b,c,d,e){a.length=b.parseUShort(),a.language=b.parseUShort();var f;a.segCount=f=b.parseUShort()>>1,b.skip("uShort",3),a.glyphIndexMap={};for(var g=new Ne.Parser(c,d+e+14),h=new Ne.Parser(c,d+e+16+2*f),i=new Ne.Parser(c,d+e+16+4*f),j=new Ne.Parser(c,d+e+16+6*f),k=d+e+16+8*f,l=0;l<f-1;l+=1)for(var m=void 0,n=g.parseUShort(),o=h.parseUShort(),p=i.parseShort(),q=j.parseUShort(),r=o;r<=n;r+=1)0!==q?(k=j.offset+j.relativeOffset-2,k+=q,k+=2*(r-o),0!==(m=Ne.getUShort(c,k))&&(m=m+p&65535)):m=r+p&65535,a.glyphIndexMap[r]=m}function T(a,b){var c={};c.version=Ne.getUShort(a,b),ze.argument(0===c.version,"cmap table version should be 0."),c.numTables=Ne.getUShort(a,b+2);for(var d=-1,e=c.numTables-1;e>=0;e-=1){var f=Ne.getUShort(a,b+4+8*e),g=Ne.getUShort(a,b+4+8*e+2);if(3===f&&(0===g||1===g||10===g)){d=Ne.getULong(a,b+4+8*e+4);break}}if(-1===d)throw new Error("No valid cmap sub-tables found.");var h=new Ne.Parser(a,b+d);if(c.format=h.parseUShort(),12===c.format)R(c,h);else{if(4!==c.format)throw new Error("Only format 4 and 12 cmap tables are supported (found format "+c.format+").");S(c,h,a,b,d)}return c}function U(a,b,c){a.segments.push({end:b,start:b,delta:-(b-c),offset:0})}function V(a){a.segments.push({end:65535,start:65535,delta:1,offset:0})}function W(a){var b=new Ke.Table("cmap",[{name:"version",type:"USHORT",value:0},{name:"numTables",type:"USHORT",value:1},{name:"platformID",type:"USHORT",value:3},{name:"encodingID",type:"USHORT",value:1},{name:"offset",type:"ULONG",value:12},{name:"format",type:"USHORT",value:4},{name:"length",type:"USHORT",value:0},{name:"language",type:"USHORT",value:0},{name:"segCountX2",type:"USHORT",value:0},{name:"searchRange",type:"USHORT",value:0},{name:"entrySelector",type:"USHORT",value:0},{name:"rangeShift",type:"USHORT",value:0}]);b.segments=[];for(var c=0;c<a.length;c+=1){for(var d=a.get(c),e=0;e<d.unicodes.length;e+=1)U(b,d.unicodes[e],c);b.segments=b.segments.sort(function(a,b){return a.start-b.start})}V(b);var f;f=b.segments.length,b.segCountX2=2*f,b.searchRange=2*Math.pow(2,Math.floor(Math.log(f)/Math.log(2))),b.entrySelector=Math.log(b.searchRange/2)/Math.log(2),b.rangeShift=b.segCountX2-b.searchRange;for(var g=[],h=[],i=[],j=[],k=[],l=0;l<f;l+=1){var m=b.segments[l];g=g.concat({name:"end_"+l,type:"USHORT",value:m.end}),h=h.concat({name:"start_"+l,type:"USHORT",value:m.start}),i=i.concat({name:"idDelta_"+l,type:"SHORT",value:m.delta}),j=j.concat({name:"idRangeOffset_"+l,type:"USHORT",value:m.offset}),void 0!==m.glyphId&&(k=k.concat({name:"glyph_"+l,type:"USHORT",value:m.glyphId}))}return b.fields=b.fields.concat(g),b.fields.push({name:"reservedPad",type:"USHORT",value:0}),b.fields=b.fields.concat(h),b.fields=b.fields.concat(i),b.fields=b.fields.concat(j),b.fields=b.fields.concat(k),b.length=14+2*g.length+2+2*h.length+2*i.length+2*j.length+2*k.length,b}function X(a){this.font=a}function Y(a){this.cmap=a}function Z(a,b){this.encoding=a,this.charset=b}function $(a){var b=this;switch(a.version){case 1:this.names=Se.slice();break;case 2:this.names=new Array(a.numberOfGlyphs);for(var c=0;c<a.numberOfGlyphs;c++)a.glyphNameIndex[c]<Se.length?b.names[c]=Se[a.glyphNameIndex[c]]:b.names[c]=a.names[a.glyphNameIndex[c]-Se.length];break;case 2.5:this.names=new Array(a.numberOfGlyphs);for(var d=0;d<a.numberOfGlyphs;d++)b.names[d]=Se[d+a.glyphNameIndex[d]];break;case 3:default:this.names=[]}}function _(a){for(var b,c=a.tables.cmap.glyphIndexMap,d=Object.keys(c),e=0;e<d.length;e+=1){var f=d[e],g=c[f];b=a.glyphs.get(g),b.addUnicode(parseInt(f))}for(var h=0;h<a.glyphs.length;h+=1)b=a.glyphs.get(h),a.cffEncoding?a.isCIDFont?b.name="gid"+h:b.name=a.cffEncoding.charset[h]:a.glyphNames.names&&(b.name=a.glyphNames.glyphIndexToName(h))}function aa(a,b,c,d,e){a.beginPath(),a.moveTo(b,c),a.lineTo(d,e),a.stroke()}function ba(a,b,c,d,e){var f;return(b&d)>0?(f=a.parseByte(),0==(b&e)&&(f=-f),f=c+f):f=(b&e)>0?c:c+a.parseShort(),f}function ca(a,b,c){var d=new Ne.Parser(b,c);a.numberOfContours=d.parseShort(),a._xMin=d.parseShort(),a._yMin=d.parseShort(),a._xMax=d.parseShort(),a._yMax=d.parseShort();var e,f;if(a.numberOfContours>0){for(var g=a.endPointIndices=[],h=0;h<a.numberOfContours;h+=1)g.push(d.parseUShort());a.instructionLength=d.parseUShort(),a.instructions=[];for(var i=0;i<a.instructionLength;i+=1)a.instructions.push(d.parseByte());var j=g[g.length-1]+1;e=[];for(var k=0;k<j;k+=1)if(f=d.parseByte(),e.push(f),(8&f)>0)for(var l=d.parseByte(),m=0;m<l;m+=1)e.push(f),k+=1;if(ze.argument(e.length===j,"Bad flags."),g.length>0){var n,o=[];if(j>0){for(var p=0;p<j;p+=1)f=e[p],n={},n.onCurve=!!(1&f),n.lastPointOfContour=g.indexOf(p)>=0,o.push(n);for(var q=0,r=0;r<j;r+=1)f=e[r],n=o[r],n.x=ba(d,f,q,2,16),q=n.x;for(var s=0,t=0;t<j;t+=1)f=e[t],n=o[t],n.y=ba(d,f,s,4,32),s=n.y}a.points=o}else a.points=[]}else if(0===a.numberOfContours)a.points=[];else{a.isComposite=!0,a.points=[],a.components=[];for(var u=!0;u;){e=d.parseUShort();var v={glyphIndex:d.parseUShort(),xScale:1,scale01:0,scale10:0,yScale:1,dx:0,dy:0};(1&e)>0?(2&e)>0?(v.dx=d.parseShort(),v.dy=d.parseShort()):v.matchedPoints=[d.parseUShort(),d.parseUShort()]:(2&e)>0?(v.dx=d.parseChar(),v.dy=d.parseChar()):v.matchedPoints=[d.parseByte(),d.parseByte()],(8&e)>0?v.xScale=v.yScale=d.parseF2Dot14():(64&e)>0?(v.xScale=d.parseF2Dot14(),v.yScale=d.parseF2Dot14()):(128&e)>0&&(v.xScale=d.parseF2Dot14(),v.scale01=d.parseF2Dot14(),v.scale10=d.parseF2Dot14(),v.yScale=d.parseF2Dot14()),a.components.push(v),u=!!(32&e)}if(256&e){a.instructionLength=d.parseUShort(),a.instructions=[];for(var w=0;w<a.instructionLength;w+=1)a.instructions.push(d.parseByte())}}}function da(a,b){for(var c=[],d=0;d<a.length;d+=1){var e=a[d],f={x:b.xScale*e.x+b.scale01*e.y+b.dx,y:b.scale10*e.x+b.yScale*e.y+b.dy,onCurve:e.onCurve,lastPointOfContour:e.lastPointOfContour};c.push(f)}return c}function ea(a){for(var b=[],c=[],d=0;d<a.length;d+=1){var e=a[d];c.push(e),e.lastPointOfContour&&(b.push(c),c=[])}return ze.argument(0===c.length,"There are still points left in the current contour."),b}function fa(a){var b=new r;if(!a)return b;for(var c=ea(a),d=0;d<c.length;++d){var e=c[d],f=null,g=e[e.length-1],h=e[0];if(g.onCurve)b.moveTo(g.x,g.y);else if(h.onCurve)b.moveTo(h.x,h.y);else{var i={x:.5*(g.x+h.x),y:.5*(g.y+h.y)};b.moveTo(i.x,i.y)}for(var j=0;j<e.length;++j)if(f=g,g=h,h=e[(j+1)%e.length],g.onCurve)b.lineTo(g.x,g.y);else{var k=f,l=h;f.onCurve||(k={x:.5*(g.x+f.x),y:.5*(g.y+f.y)},b.lineTo(k.x,k.y)),h.onCurve||(l={x:.5*(g.x+h.x),y:.5*(g.y+h.y)}),b.lineTo(k.x,k.y),b.quadraticCurveTo(g.x,g.y,l.x,l.y)}b.closePath()}return b}function ga(a,b){if(b.isComposite)for(var c=0;c<b.components.length;c+=1){var d=b.components[c],e=a.get(d.glyphIndex);if(e.getPath(),e.points){var f=void 0;if(void 0===d.matchedPoints)f=da(e.points,d);else{if(d.matchedPoints[0]>b.points.length-1||d.matchedPoints[1]>e.points.length-1)throw Error("Matched points out of range in "+b.name);var g=b.points[d.matchedPoints[0]],h=e.points[d.matchedPoints[1]],i={xScale:d.xScale,scale01:d.scale01,scale10:d.scale10,yScale:d.yScale,dx:0,dy:0};h=da([h],i)[0],i.dx=g.x-h.x,i.dy=g.y-h.y,f=da(e.points,i)}b.points=b.points.concat(f)}}return fa(b.points)}function ha(a,b,c,d){for(var e=new Ve.GlyphSet(d),f=0;f<c.length-1;f+=1){var g=c[f];g!==c[f+1]?e.push(f,Ve.ttfGlyphLoader(d,f,ca,a,b+g,ga)):e.push(f,Ve.glyphLoader(d,f))}return e}function ia(a,b){var c=b||{commands:[]};return{configurable:!0,get:function(){return"function"==typeof c&&(c=c()),c},set:function(a){c=a}}}function ja(a){this.bindConstructorValues(a)}function ka(a,b,c){Object.defineProperty(a,b,{get:function(){return a.path,a[c]},set:function(b){a[c]=b},enumerable:!0,configurable:!0})}function la(a,b){var c=this;if(this.font=a,this.glyphs={},Array.isArray(b))for(var d=0;d<b.length;d++)c.glyphs[d]=b[d];this.length=b&&b.length||0}function ma(a,b){return new ja({index:b,font:a})}function na(a,b,c,d,e,f){return function(){var g=new ja({index:b,font:a});return g.path=function(){c(g,d,e);var b=f(a.glyphs,g);return b.unitsPerEm=a.unitsPerEm,b},ka(g,"xMin","_xMin"),ka(g,"xMax","_xMax"),ka(g,"yMin","_yMin"),ka(g,"yMax","_yMax"),g}}function oa(a,b,c,d){return function(){var e=new ja({index:b,font:a});return e.path=function(){var b=c(a,e,d);return b.unitsPerEm=a.unitsPerEm,b},e}}function pa(a,b){if(a===b)return!0;if(Array.isArray(a)&&Array.isArray(b)){if(a.length!==b.length)return!1;for(var c=0;c<a.length;c+=1)if(!pa(a[c],b[c]))return!1;return!0}return!1}function qa(a){return a.length<1240?107:a.length<33900?1131:32768}function ra(a,b,c){var d,e,f=[],g=[],h=Ne.getCard16(a,b);if(0!==h){var i=Ne.getByte(a,b+2);d=b+(h+1)*i+2;for(var j=b+3,k=0;k<h+1;k+=1)f.push(Ne.getOffset(a,j,i)),j+=i;e=d+f[h]}else e=b+2;for(var l=0;l<f.length-1;l+=1){var m=Ne.getBytes(a,d+f[l],d+f[l+1]);c&&(m=c(m)),g.push(m)}return{objects:g,startOffset:b,endOffset:e}}function sa(a){for(var b="",c=15,d=["0","1","2","3","4","5","6","7","8","9",".","E","E-",null,"-"];;){var e=a.parseByte(),f=e>>4,g=15&e;if(f===c)break;if(b+=d[f],g===c)break;b+=d[g]}return parseFloat(b)}function ta(a,b){var c,d,e,f;if(28===b)return c=a.parseByte(),d=a.parseByte(),c<<8|d;if(29===b)return c=a.parseByte(),d=a.parseByte(),e=a.parseByte(),f=a.parseByte(),c<<24|d<<16|e<<8|f;if(30===b)return sa(a);if(b>=32&&b<=246)return b-139;if(b>=247&&b<=250)return c=a.parseByte(),256*(b-247)+c+108;if(b>=251&&b<=254)return c=a.parseByte(),256*-(b-251)-c-108;throw new Error("Invalid b0 "+b)}function ua(a){for(var b={},c=0;c<a.length;c+=1){var d=a[c][0],e=a[c][1],f=void 0;if(f=1===e.length?e[0]:e,b.hasOwnProperty(d)&&!isNaN(b[d]))throw new Error("Object "+b+" already has key "+d);b[d]=f}return b}function va(a,b,c){b=void 0!==b?b:0;var d=new Ne.Parser(a,b),e=[],f=[];for(c=void 0!==c?c:a.length;d.relativeOffset<c;){var g=d.parseByte();g<=21?(12===g&&(g=1200+d.parseByte()),e.push([g,f]),f=[]):f.push(ta(d,g))}return ua(e)}function wa(a,b){return b=b<=390?Pe[b]:a[b-391]}function xa(a,b,c){for(var d,e={},f=0;f<b.length;f+=1){var g=b[f];if(Array.isArray(g.type)){var h=[];h.length=g.type.length;for(var i=0;i<g.type.length;i++)d=void 0!==a[g.op]?a[g.op][i]:void 0,void 0===d&&(d=void 0!==g.value&&void 0!==g.value[i]?g.value[i]:null),"SID"===g.type[i]&&(d=wa(c,d)),h[i]=d;e[g.name]=h}else d=a[g.op],void 0===d&&(d=void 0!==g.value?g.value:null),"SID"===g.type&&(d=wa(c,d)),e[g.name]=d}return e}function ya(a,b){var c={};return c.formatMajor=Ne.getCard8(a,b),c.formatMinor=Ne.getCard8(a,b+1),c.size=Ne.getCard8(a,b+2),c.offsetSize=Ne.getCard8(a,b+3),c.startOffset=b,c.endOffset=b+4,c}function za(a,b){return xa(va(a,0,a.byteLength),We,b)}function Aa(a,b,c,d){return xa(va(a,b,c),Xe,d)}function Ba(a,b,c,d){for(var e=[],f=0;f<c.length;f+=1){var g=new DataView(new Uint8Array(c[f]).buffer),h=za(g,d);h._subrs=[],h._subrsBias=0;var i=h.private[0],j=h.private[1];if(0!==i&&0!==j){var k=Aa(a,j+b,i,d);if(h._defaultWidthX=k.defaultWidthX,h._nominalWidthX=k.nominalWidthX,0!==k.subrs){var l=j+k.subrs,m=ra(a,l+b);h._subrs=m.objects,h._subrsBias=qa(h._subrs)}h._privateDict=k}e.push(h)}return e}function Ca(a,b,c,d){var e,f,g=new Ne.Parser(a,b);c-=1;var h=[".notdef"],i=g.parseCard8();if(0===i)for(var j=0;j<c;j+=1)e=g.parseSID(),h.push(wa(d,e));else if(1===i)for(;h.length<=c;){e=g.parseSID(),f=g.parseCard8();for(var k=0;k<=f;k+=1)h.push(wa(d,e)),e+=1}else{if(2!==i)throw new Error("Unknown charset format "+i);for(;h.length<=c;){e=g.parseSID(),f=g.parseCard16();for(var l=0;l<=f;l+=1)h.push(wa(d,e)),e+=1}}return h}function Da(a,b,c){var d,e={},f=new Ne.Parser(a,b),g=f.parseCard8();if(0===g)for(var h=f.parseCard8(),i=0;i<h;i+=1)d=f.parseCard8(),e[d]=i;else{if(1!==g)throw new Error("Unknown encoding format "+g);var j=f.parseCard8();d=1;for(var k=0;k<j;k+=1)for(var l=f.parseCard8(),m=f.parseCard8(),n=l;n<=l+m;n+=1)e[n]=d,d+=1}return new Z(e,c)}function Ea(a,b,c){function d(a,b){t&&o.closePath(),o.moveTo(a,b),t=!0}function e(){var a;a=p.length%2!=0,a&&!s&&(y=p.shift()+n),q+=p.length>>1,p.length=0,s=!0}function f(c){for(var m,r,w,x,z,A,B,C,D,E,F,G,H=0;H<c.length;){var I=c[H];switch(H+=1,I){case 1:case 3:e();break;case 4:p.length>1&&!s&&(y=p.shift()+n,s=!0),v+=p.pop(),d(u,v);break;case 5:for(;p.length>0;)u+=p.shift(),v+=p.shift(),o.lineTo(u,v);break;case 6:for(;p.length>0&&(u+=p.shift(),o.lineTo(u,v),0!==p.length);)v+=p.shift(),o.lineTo(u,v);break;case 7:for(;p.length>0&&(v+=p.shift(),o.lineTo(u,v),0!==p.length);)u+=p.shift(),o.lineTo(u,v);break;case 8:for(;p.length>0;)g=u+p.shift(),h=v+p.shift(),i=g+p.shift(),j=h+p.shift(),u=i+p.shift(),v=j+p.shift(),o.curveTo(g,h,i,j,u,v);break;case 10:z=p.pop()+l,A=k[z],A&&f(A);break;case 11:return;case 12:switch(I=c[H],H+=1,I){case 35:g=u+p.shift(),h=v+p.shift(),i=g+p.shift(),j=h+p.shift(),B=i+p.shift(),C=j+p.shift(),D=B+p.shift(),E=C+p.shift(),F=D+p.shift(),G=E+p.shift(),u=F+p.shift(),v=G+p.shift(),p.shift(),o.curveTo(g,h,i,j,B,C),o.curveTo(D,E,F,G,u,v);break;case 34:g=u+p.shift(),h=v,i=g+p.shift(),j=h+p.shift(),B=i+p.shift(),C=j,D=B+p.shift(),E=j,F=D+p.shift(),G=v,u=F+p.shift(),o.curveTo(g,h,i,j,B,C),o.curveTo(D,E,F,G,u,v);break;case 36:g=u+p.shift(),h=v+p.shift(),i=g+p.shift(),j=h+p.shift(),B=i+p.shift(),C=j,D=B+p.shift(),E=j,F=D+p.shift(),G=E+p.shift(),u=F+p.shift(),o.curveTo(g,h,i,j,B,C),o.curveTo(D,E,F,G,u,v);break;case 37:g=u+p.shift(),h=v+p.shift(),i=g+p.shift(),j=h+p.shift(),B=i+p.shift(),C=j+p.shift(),D=B+p.shift(),E=C+p.shift(),F=D+p.shift(),G=E+p.shift(),Math.abs(F-u)>Math.abs(G-v)?u=F+p.shift():v=G+p.shift(),o.curveTo(g,h,i,j,B,C),o.curveTo(D,E,F,G,u,v);break;default:console.log("Glyph "+b.index+": unknown operator 1200"+I),p.length=0}break;case 14:p.length>0&&!s&&(y=p.shift()+n,s=!0),t&&(o.closePath(),t=!1);break;case 18:e();break;case 19:case 20:e(),H+=q+7>>3;break;case 21:p.length>2&&!s&&(y=p.shift()+n,s=!0),v+=p.pop(),u+=p.pop(),d(u,v);break;case 22:p.length>1&&!s&&(y=p.shift()+n,s=!0),u+=p.pop(),d(u,v);break;case 23:e();break;case 24:for(;p.length>2;)g=u+p.shift(),h=v+p.shift(),i=g+p.shift(),j=h+p.shift(),u=i+p.shift(),v=j+p.shift(),o.curveTo(g,h,i,j,u,v);u+=p.shift(),v+=p.shift(),o.lineTo(u,v);break;case 25:for(;p.length>6;)u+=p.shift(),v+=p.shift(),o.lineTo(u,v);g=u+p.shift(),h=v+p.shift(),i=g+p.shift(),j=h+p.shift(),u=i+p.shift(),v=j+p.shift(),o.curveTo(g,h,i,j,u,v);break;case 26:for(p.length%2&&(u+=p.shift());p.length>0;)g=u,h=v+p.shift(),i=g+p.shift(),j=h+p.shift(),u=i,v=j+p.shift(),o.curveTo(g,h,i,j,u,v);break;case 27:for(p.length%2&&(v+=p.shift());p.length>0;)g=u+p.shift(),h=v,i=g+p.shift(),j=h+p.shift(),u=i+p.shift(),v=j,o.curveTo(g,h,i,j,u,v);break;case 28:m=c[H],r=c[H+1],p.push((m<<24|r<<16)>>16),H+=2;break;case 29:z=p.pop()+a.gsubrsBias,A=a.gsubrs[z],A&&f(A);break;case 30:for(;p.length>0&&(g=u,h=v+p.shift(),i=g+p.shift(),j=h+p.shift(),u=i+p.shift(),v=j+(1===p.length?p.shift():0),o.curveTo(g,h,i,j,u,v),0!==p.length);)g=u+p.shift(),h=v,i=g+p.shift(),j=h+p.shift(),v=j+p.shift(),u=i+(1===p.length?p.shift():0),o.curveTo(g,h,i,j,u,v);break;case 31:for(;p.length>0&&(g=u+p.shift(),h=v,i=g+p.shift(),j=h+p.shift(),v=j+p.shift(),u=i+(1===p.length?p.shift():0),o.curveTo(g,h,i,j,u,v),0!==p.length);)g=u,h=v+p.shift(),i=g+p.shift(),j=h+p.shift(),u=i+p.shift(),v=j+(1===p.length?p.shift():0),o.curveTo(g,h,i,j,u,v);break;default:I<32?console.log("Glyph "+b.index+": unknown operator "+I):I<247?p.push(I-139):I<251?(m=c[H],H+=1,p.push(256*(I-247)+m+108)):I<255?(m=c[H],H+=1,p.push(256*-(I-251)-m-108)):(m=c[H],r=c[H+1],w=c[H+2],x=c[H+3],H+=4,p.push((m<<24|r<<16|w<<8|x)/65536))}}}var g,h,i,j,k,l,m,n,o=new r,p=[],q=0,s=!1,t=!1,u=0,v=0;if(a.isCIDFont){var w=a.tables.cff.topDict._fdSelect[b.index],x=a.tables.cff.topDict._fdArray[w];k=x._subrs,l=x._subrsBias,m=x._defaultWidthX,n=x._nominalWidthX}else k=a.tables.cff.topDict._subrs,l=a.tables.cff.topDict._subrsBias,m=a.tables.cff.topDict._defaultWidthX,n=a.tables.cff.topDict._nominalWidthX;var y=m;return f(c),b.advanceWidth=y,o}function Fa(a,b,c,d){var e,f=[],g=new Ne.Parser(a,b),h=g.parseCard8();if(0===h)for(var i=0;i<c;i++){if((e=g.parseCard8())>=d)throw new Error("CFF table CID Font FDSelect has bad FD index value "+e+" (FD count "+d+")");f.push(e)}else{if(3!==h)throw new Error("CFF Table CID Font FDSelect table has unsupported format "+h);var j=g.parseCard16(),k=g.parseCard16();if(0!==k)throw new Error("CFF Table CID Font FDSelect format 3 range has bad initial GID "+k);for(var l,m=0;m<j;m++){if(e=g.parseCard8(),l=g.parseCard16(),e>=d)throw new Error("CFF table CID Font FDSelect has bad FD index value "+e+" (FD count "+d+")");if(l>c)throw new Error("CFF Table CID Font FDSelect format 3 range has bad GID "+l);for(;k<l;k++)f.push(e);k=l}if(l!==c)throw new Error("CFF Table CID Font FDSelect format 3 range has bad final GID "+l)}return f}function Ga(a,b,c){c.tables.cff={};var d=ya(a,b),e=ra(a,d.endOffset,Ne.bytesToString),f=ra(a,e.endOffset),g=ra(a,f.endOffset,Ne.bytesToString),h=ra(a,g.endOffset);c.gsubrs=h.objects,c.gsubrsBias=qa(c.gsubrs);var i=Ba(a,b,f.objects,g.objects);if(1!==i.length)throw new Error("CFF table has too many fonts in 'FontSet' - count of fonts NameIndex.length = "+i.length);var j=i[0];if(c.tables.cff.topDict=j,j._privateDict&&(c.defaultWidthX=j._privateDict.defaultWidthX,c.nominalWidthX=j._privateDict.nominalWidthX),void 0!==j.ros[0]&&void 0!==j.ros[1]&&(c.isCIDFont=!0),c.isCIDFont){var k=j.fdArray,l=j.fdSelect;if(0===k||0===l)throw new Error("Font is marked as a CID font, but FDArray and/or FDSelect information is missing");k+=b;var m=ra(a,k),n=Ba(a,b,m.objects,g.objects);j._fdArray=n,l+=b,j._fdSelect=Fa(a,l,c.numGlyphs,n.length)}var o=b+j.private[1],p=Aa(a,o,j.private[0],g.objects);if(c.defaultWidthX=p.defaultWidthX,c.nominalWidthX=p.nominalWidthX,0!==p.subrs){var q=o+p.subrs,r=ra(a,q);c.subrs=r.objects,c.subrsBias=qa(c.subrs)}else c.subrs=[],c.subrsBias=0;var s=ra(a,b+j.charStrings);c.nGlyphs=s.objects.length;var t=Ca(a,b+j.charset,c.nGlyphs,g.objects);0===j.encoding?c.cffEncoding=new Z(Qe,t):1===j.encoding?c.cffEncoding=new Z(Re,t):c.cffEncoding=Da(a,b+j.encoding,t),c.encoding=c.encoding||c.cffEncoding,c.glyphs=new Ve.GlyphSet(c);for(var u=0;u<c.nGlyphs;u+=1){var v=s.objects[u];c.glyphs.push(u,Ve.cffGlyphLoader(c,u,Ea,v))}}function Ha(a,b){var c,d=Pe.indexOf(a);return d>=0&&(c=d),d=b.indexOf(a),d>=0?c=d+Pe.length:(c=Pe.length+b.length,b.push(a)),c}function Ia(){return new Ke.Record("Header",[{name:"major",type:"Card8",value:1},{name:"minor",type:"Card8",value:0},{name:"hdrSize",type:"Card8",value:4},{name:"major",type:"Card8",value:1}])}function Ja(a){var b=new Ke.Record("Name INDEX",[{name:"names",type:"INDEX",value:[]}]);b.names=[];for(var c=0;c<a.length;c+=1)b.names.push({name:"name_"+c,type:"NAME",value:a[c]});return b}function Ka(a,b,c){for(var d={},e=0;e<a.length;e+=1){var f=a[e],g=b[f.name];void 0===g||pa(g,f.value)||("SID"===f.type&&(g=Ha(g,c)),d[f.op]={name:f.name,type:f.type,value:g})}return d}function La(a,b){var c=new Ke.Record("Top DICT",[{name:"dict",type:"DICT",value:{}}]);return c.dict=Ka(We,a,b),c}function Ma(a){var b=new Ke.Record("Top DICT INDEX",[{name:"topDicts",type:"INDEX",value:[]}]);return b.topDicts=[{name:"topDict_0",type:"TABLE",value:a}],b}function Na(a){var b=new Ke.Record("String INDEX",[{name:"strings",type:"INDEX",value:[]}]);b.strings=[];for(var c=0;c<a.length;c+=1)b.strings.push({name:"string_"+c,type:"STRING",value:a[c]});return b}function Oa(){return new Ke.Record("Global Subr INDEX",[{name:"subrs",type:"INDEX",value:[]}])}function Pa(a,b){for(var c=new Ke.Record("Charsets",[{name:"format",type:"Card8",value:0}]),d=0;d<a.length;d+=1){var e=a[d],f=Ha(e,b);c.fields.push({name:"glyph_"+d,type:"SID",value:f})}return c}function Qa(a){var b=[],c=a.path;b.push({name:"width",type:"NUMBER",value:a.advanceWidth});for(var d=0,e=0,f=0;f<c.commands.length;f+=1){var g=void 0,h=void 0,i=c.commands[f];if("Q"===i.type){var j=1/3,k=2/3;i={type:"C",x:i.x,y:i.y,x1:j*d+k*i.x1,y1:j*e+k*i.y1,x2:j*i.x+k*i.x1,y2:j*i.y+k*i.y1}}if("M"===i.type)g=Math.round(i.x-d),h=Math.round(i.y-e),b.push({name:"dx",type:"NUMBER",value:g}),b.push({name:"dy",type:"NUMBER",value:h}),b.push({name:"rmoveto",type:"OP",value:21}),d=Math.round(i.x),e=Math.round(i.y);else if("L"===i.type)g=Math.round(i.x-d),h=Math.round(i.y-e),b.push({name:"dx",type:"NUMBER",value:g}),b.push({name:"dy",type:"NUMBER",value:h}),b.push({name:"rlineto",type:"OP",value:5}),d=Math.round(i.x),e=Math.round(i.y);else if("C"===i.type){var l=Math.round(i.x1-d),m=Math.round(i.y1-e),n=Math.round(i.x2-i.x1),o=Math.round(i.y2-i.y1);g=Math.round(i.x-i.x2),h=Math.round(i.y-i.y2),b.push({name:"dx1",type:"NUMBER",value:l}),b.push({name:"dy1",type:"NUMBER",value:m}),b.push({name:"dx2",type:"NUMBER",value:n}),b.push({name:"dy2",type:"NUMBER",value:o}),b.push({name:"dx",type:"NUMBER",value:g}),b.push({name:"dy",type:"NUMBER",value:h}),b.push({name:"rrcurveto",type:"OP",value:8}),d=Math.round(i.x),e=Math.round(i.y)}}return b.push({name:"endchar",type:"OP",value:14}),b}function Ra(a){for(var b=new Ke.Record("CharStrings INDEX",[{name:"charStrings",type:"INDEX",value:[]}]),c=0;c<a.length;c+=1){var d=a.get(c),e=Qa(d);b.charStrings.push({name:d.name,type:"CHARSTRING",value:e})}return b}function Sa(a,b){var c=new Ke.Record("Private DICT",[{name:"dict",type:"DICT",value:{}}]);return c.dict=Ka(Xe,a,b),c}function Ta(a,b){for(var c,d=new Ke.Table("CFF ",[{name:"header",type:"RECORD"},{name:"nameIndex",type:"RECORD"},{name:"topDictIndex",type:"RECORD"},{name:"stringIndex",type:"RECORD"},{name:"globalSubrIndex",type:"RECORD"},{name:"charsets",type:"RECORD"},{name:"charStringsIndex",type:"RECORD"},{name:"privateDict",type:"RECORD"}]),e=1/b.unitsPerEm,f={version:b.version,fullName:b.fullName,familyName:b.familyName,weight:b.weightName,fontBBox:b.fontBBox||[0,0,0,0],fontMatrix:[e,0,0,e,0,0],charset:999,encoding:0,charStrings:999,private:[0,999]},g={},h=[],i=1;i<a.length;i+=1)c=a.get(i),h.push(c.name);var j=[];d.header=Ia(),d.nameIndex=Ja([b.postScriptName]);var k=La(f,j);d.topDictIndex=Ma(k),d.globalSubrIndex=Oa(),d.charsets=Pa(h,j),d.charStringsIndex=Ra(a),d.privateDict=Sa(g,j),d.stringIndex=Na(j);var l=d.header.sizeOf()+d.nameIndex.sizeOf()+d.topDictIndex.sizeOf()+d.stringIndex.sizeOf()+d.globalSubrIndex.sizeOf();return f.charset=l,f.encoding=0,f.charStrings=f.charset+d.charsets.sizeOf(),f.private[1]=f.charStrings+d.charStringsIndex.sizeOf(),k=La(f,j),d.topDictIndex=Ma(k),d}function Ua(a,b){var c={},d=new Ne.Parser(a,b);return c.version=d.parseVersion(),c.fontRevision=Math.round(1e3*d.parseFixed())/1e3,c.checkSumAdjustment=d.parseULong(),c.magicNumber=d.parseULong(),ze.argument(1594834165===c.magicNumber,"Font header has wrong magic number."),c.flags=d.parseUShort(),c.unitsPerEm=d.parseUShort(),c.created=d.parseLongDateTime(),c.modified=d.parseLongDateTime(),c.xMin=d.parseShort(),c.yMin=d.parseShort(),c.xMax=d.parseShort(),c.yMax=d.parseShort(),c.macStyle=d.parseUShort(),c.lowestRecPPEM=d.parseUShort(),c.fontDirectionHint=d.parseShort(),c.indexToLocFormat=d.parseShort(),c.glyphDataFormat=d.parseShort(),c}function Va(a){var b=Math.round((new Date).getTime()/1e3)+2082844800,c=b;return a.createdTimestamp&&(c=a.createdTimestamp+2082844800),new Ke.Table("head",[{name:"version",type:"FIXED",value:65536},{name:"fontRevision",type:"FIXED",value:65536},{name:"checkSumAdjustment",type:"ULONG",value:0},{name:"magicNumber",type:"ULONG",value:1594834165},{name:"flags",type:"USHORT",value:0},{name:"unitsPerEm",type:"USHORT",value:1e3},{name:"created",type:"LONGDATETIME",value:c},{name:"modified",type:"LONGDATETIME",value:b},{name:"xMin",type:"SHORT",value:0},{name:"yMin",type:"SHORT",value:0},{name:"xMax",type:"SHORT",value:0},{name:"yMax",type:"SHORT",value:0},{name:"macStyle",type:"USHORT",value:0},{name:"lowestRecPPEM",type:"USHORT",value:0},{name:"fontDirectionHint",type:"SHORT",value:2},{name:"indexToLocFormat",type:"SHORT",value:0},{name:"glyphDataFormat",type:"SHORT",value:0}],a)}function Wa(a,b){var c={},d=new Ne.Parser(a,b);return c.version=d.parseVersion(),c.ascender=d.parseShort(),c.descender=d.parseShort(),c.lineGap=d.parseShort(),c.advanceWidthMax=d.parseUShort(),c.minLeftSideBearing=d.parseShort(),c.minRightSideBearing=d.parseShort(),c.xMaxExtent=d.parseShort(),c.caretSlopeRise=d.parseShort(),c.caretSlopeRun=d.parseShort(),c.caretOffset=d.parseShort(),d.relativeOffset+=8,c.metricDataFormat=d.parseShort(),c.numberOfHMetrics=d.parseUShort(),c}function Xa(a){return new Ke.Table("hhea",[{name:"version",type:"FIXED",value:65536},{name:"ascender",type:"FWORD",value:0},{name:"descender",type:"FWORD",value:0},{name:"lineGap",type:"FWORD",value:0},{name:"advanceWidthMax",type:"UFWORD",value:0},{name:"minLeftSideBearing",type:"FWORD",value:0},{name:"minRightSideBearing",type:"FWORD",value:0},{name:"xMaxExtent",type:"FWORD",value:0},{name:"caretSlopeRise",type:"SHORT",value:1},{name:"caretSlopeRun",type:"SHORT",value:0},{name:"caretOffset",type:"SHORT",value:0},{name:"reserved1",type:"SHORT",value:0},{name:"reserved2",type:"SHORT",value:0},{name:"reserved3",type:"SHORT",value:0},{name:"reserved4",type:"SHORT",value:0},{name:"metricDataFormat",type:"SHORT",value:0},{name:"numberOfHMetrics",type:"USHORT",value:0}],a)}function Ya(a,b,c,d,e){for(var f,g,h=new Ne.Parser(a,b),i=0;i<d;i+=1){i<c&&(f=h.parseUShort(),g=h.parseShort());var j=e.get(i);j.advanceWidth=f,
j.leftSideBearing=g}}function Za(a){for(var b=new Ke.Table("hmtx",[]),c=0;c<a.length;c+=1){var d=a.get(c),e=d.advanceWidth||0,f=d.leftSideBearing||0;b.fields.push({name:"advanceWidth_"+c,type:"USHORT",value:e}),b.fields.push({name:"leftSideBearing_"+c,type:"SHORT",value:f})}return b}function $a(a){for(var b=new Ke.Table("ltag",[{name:"version",type:"ULONG",value:1},{name:"flags",type:"ULONG",value:0},{name:"numTags",type:"ULONG",value:a.length}]),c="",d=12+4*a.length,e=0;e<a.length;++e){var f=c.indexOf(a[e]);f<0&&(f=c.length,c+=a[e]),b.fields.push({name:"offset "+e,type:"USHORT",value:d+f}),b.fields.push({name:"length "+e,type:"USHORT",value:a[e].length})}return b.fields.push({name:"stringPool",type:"CHARARRAY",value:c}),b}function _a(a,b){var c=new Ne.Parser(a,b),d=c.parseULong();ze.argument(1===d,"Unsupported ltag table version."),c.skip("uLong",1);for(var e=c.parseULong(),f=[],g=0;g<e;g++){for(var h="",i=b+c.parseUShort(),j=c.parseUShort(),k=i;k<i+j;++k)h+=String.fromCharCode(a.getInt8(k));f.push(h)}return f}function ab(a,b){var c={},d=new Ne.Parser(a,b);return c.version=d.parseVersion(),c.numGlyphs=d.parseUShort(),1===c.version&&(c.maxPoints=d.parseUShort(),c.maxContours=d.parseUShort(),c.maxCompositePoints=d.parseUShort(),c.maxCompositeContours=d.parseUShort(),c.maxZones=d.parseUShort(),c.maxTwilightPoints=d.parseUShort(),c.maxStorage=d.parseUShort(),c.maxFunctionDefs=d.parseUShort(),c.maxInstructionDefs=d.parseUShort(),c.maxStackElements=d.parseUShort(),c.maxSizeOfInstructions=d.parseUShort(),c.maxComponentElements=d.parseUShort(),c.maxComponentDepth=d.parseUShort()),c}function bb(a){return new Ke.Table("maxp",[{name:"version",type:"FIXED",value:20480},{name:"numGlyphs",type:"USHORT",value:a}])}function cb(a,b,c){switch(a){case 0:if(65535===b)return"und";if(c)return c[b];break;case 1:return df[b];case 3:return ff[b]}}function db(a,b,c){switch(a){case 0:return gf;case 1:return jf[c]||hf[b];case 3:if(1===b||10===b)return gf}}function eb(a,b,c){for(var d={},e=new Ne.Parser(a,b),f=e.parseUShort(),g=e.parseUShort(),h=e.offset+e.parseUShort(),i=0;i<g;i++){var j=e.parseUShort(),k=e.parseUShort(),l=e.parseUShort(),m=e.parseUShort(),n=cf[m]||m,o=e.parseUShort(),p=e.parseUShort(),q=cb(j,l,c),r=db(j,k,l);if(void 0!==r&&void 0!==q){var s=void 0;if(s=r===gf?Ce.UTF16(a,h+p,o):Ce.MACSTRING(a,h+p,o,r)){var t=d[n];void 0===t&&(t=d[n]={}),t[q]=s}}}return 1===f&&e.parseUShort(),d}function fb(a){var b={};for(var c in a)b[a[c]]=parseInt(c);return b}function gb(a,b,c,d,e,f){return new Ke.Record("NameRecord",[{name:"platformID",type:"USHORT",value:a},{name:"encodingID",type:"USHORT",value:b},{name:"languageID",type:"USHORT",value:c},{name:"nameID",type:"USHORT",value:d},{name:"length",type:"USHORT",value:e},{name:"offset",type:"USHORT",value:f}])}function hb(a,b){var c=a.length,d=b.length-c+1;a:for(var e=0;e<d;e++)for(;e<d;e++){for(var f=0;f<c;f++)if(b[e+f]!==a[f])continue a;return e}return-1}function ib(a,b){var c=hb(a,b);if(c<0){c=b.length;for(var d=0,e=a.length;d<e;++d)b.push(a[d])}return c}function jb(a,b){var c,d=[],e={},f=fb(cf);for(var g in a){var h=f[g];if(void 0===h&&(h=g),c=parseInt(h),isNaN(c))throw new Error('Name table entry "'+g+'" does not exist, see nameTableNames for complete list.');e[c]=a[g],d.push(c)}for(var i=fb(df),j=fb(ff),k=[],l=[],m=0;m<d.length;m++){c=d[m];var n=e[c];for(var o in n){var p=n[o],q=1,r=i[o],s=ef[r],t=db(q,s,r),u=De.MACSTRING(p,t);void 0===u&&(q=0,r=b.indexOf(o),r<0&&(r=b.length,b.push(o)),s=4,u=De.UTF16(p));var v=ib(u,l);k.push(gb(q,s,r,c,u.length,v));var w=j[o];if(void 0!==w){var x=De.UTF16(p),y=ib(x,l);k.push(gb(3,1,w,c,x.length,y))}}}k.sort(function(a,b){return a.platformID-b.platformID||a.encodingID-b.encodingID||a.languageID-b.languageID||a.nameID-b.nameID});for(var z=new Ke.Table("name",[{name:"format",type:"USHORT",value:0},{name:"count",type:"USHORT",value:k.length},{name:"stringOffset",type:"USHORT",value:6+12*k.length}]),A=0;A<k.length;A++)z.fields.push({name:"record_"+A,type:"RECORD",value:k[A]});return z.fields.push({name:"strings",type:"LITERAL",value:l}),z}function kb(a){for(var b=0;b<lf.length;b+=1){var c=lf[b];if(a>=c.begin&&a<c.end)return b}return-1}function lb(a,b){var c={},d=new Ne.Parser(a,b);c.version=d.parseUShort(),c.xAvgCharWidth=d.parseShort(),c.usWeightClass=d.parseUShort(),c.usWidthClass=d.parseUShort(),c.fsType=d.parseUShort(),c.ySubscriptXSize=d.parseShort(),c.ySubscriptYSize=d.parseShort(),c.ySubscriptXOffset=d.parseShort(),c.ySubscriptYOffset=d.parseShort(),c.ySuperscriptXSize=d.parseShort(),c.ySuperscriptYSize=d.parseShort(),c.ySuperscriptXOffset=d.parseShort(),c.ySuperscriptYOffset=d.parseShort(),c.yStrikeoutSize=d.parseShort(),c.yStrikeoutPosition=d.parseShort(),c.sFamilyClass=d.parseShort(),c.panose=[];for(var e=0;e<10;e++)c.panose[e]=d.parseByte();return c.ulUnicodeRange1=d.parseULong(),c.ulUnicodeRange2=d.parseULong(),c.ulUnicodeRange3=d.parseULong(),c.ulUnicodeRange4=d.parseULong(),c.achVendID=String.fromCharCode(d.parseByte(),d.parseByte(),d.parseByte(),d.parseByte()),c.fsSelection=d.parseUShort(),c.usFirstCharIndex=d.parseUShort(),c.usLastCharIndex=d.parseUShort(),c.sTypoAscender=d.parseShort(),c.sTypoDescender=d.parseShort(),c.sTypoLineGap=d.parseShort(),c.usWinAscent=d.parseUShort(),c.usWinDescent=d.parseUShort(),c.version>=1&&(c.ulCodePageRange1=d.parseULong(),c.ulCodePageRange2=d.parseULong()),c.version>=2&&(c.sxHeight=d.parseShort(),c.sCapHeight=d.parseShort(),c.usDefaultChar=d.parseUShort(),c.usBreakChar=d.parseUShort(),c.usMaxContent=d.parseUShort()),c}function mb(a){return new Ke.Table("OS/2",[{name:"version",type:"USHORT",value:3},{name:"xAvgCharWidth",type:"SHORT",value:0},{name:"usWeightClass",type:"USHORT",value:0},{name:"usWidthClass",type:"USHORT",value:0},{name:"fsType",type:"USHORT",value:0},{name:"ySubscriptXSize",type:"SHORT",value:650},{name:"ySubscriptYSize",type:"SHORT",value:699},{name:"ySubscriptXOffset",type:"SHORT",value:0},{name:"ySubscriptYOffset",type:"SHORT",value:140},{name:"ySuperscriptXSize",type:"SHORT",value:650},{name:"ySuperscriptYSize",type:"SHORT",value:699},{name:"ySuperscriptXOffset",type:"SHORT",value:0},{name:"ySuperscriptYOffset",type:"SHORT",value:479},{name:"yStrikeoutSize",type:"SHORT",value:49},{name:"yStrikeoutPosition",type:"SHORT",value:258},{name:"sFamilyClass",type:"SHORT",value:0},{name:"bFamilyType",type:"BYTE",value:0},{name:"bSerifStyle",type:"BYTE",value:0},{name:"bWeight",type:"BYTE",value:0},{name:"bProportion",type:"BYTE",value:0},{name:"bContrast",type:"BYTE",value:0},{name:"bStrokeVariation",type:"BYTE",value:0},{name:"bArmStyle",type:"BYTE",value:0},{name:"bLetterform",type:"BYTE",value:0},{name:"bMidline",type:"BYTE",value:0},{name:"bXHeight",type:"BYTE",value:0},{name:"ulUnicodeRange1",type:"ULONG",value:0},{name:"ulUnicodeRange2",type:"ULONG",value:0},{name:"ulUnicodeRange3",type:"ULONG",value:0},{name:"ulUnicodeRange4",type:"ULONG",value:0},{name:"achVendID",type:"CHARARRAY",value:"XXXX"},{name:"fsSelection",type:"USHORT",value:0},{name:"usFirstCharIndex",type:"USHORT",value:0},{name:"usLastCharIndex",type:"USHORT",value:0},{name:"sTypoAscender",type:"SHORT",value:0},{name:"sTypoDescender",type:"SHORT",value:0},{name:"sTypoLineGap",type:"SHORT",value:0},{name:"usWinAscent",type:"USHORT",value:0},{name:"usWinDescent",type:"USHORT",value:0},{name:"ulCodePageRange1",type:"ULONG",value:0},{name:"ulCodePageRange2",type:"ULONG",value:0},{name:"sxHeight",type:"SHORT",value:0},{name:"sCapHeight",type:"SHORT",value:0},{name:"usDefaultChar",type:"USHORT",value:0},{name:"usBreakChar",type:"USHORT",value:0},{name:"usMaxContext",type:"USHORT",value:0}],a)}function nb(a,b){var c={},d=new Ne.Parser(a,b);switch(c.version=d.parseVersion(),c.italicAngle=d.parseFixed(),c.underlinePosition=d.parseShort(),c.underlineThickness=d.parseShort(),c.isFixedPitch=d.parseULong(),c.minMemType42=d.parseULong(),c.maxMemType42=d.parseULong(),c.minMemType1=d.parseULong(),c.maxMemType1=d.parseULong(),c.version){case 1:c.names=Se.slice();break;case 2:c.numberOfGlyphs=d.parseUShort(),c.glyphNameIndex=new Array(c.numberOfGlyphs);for(var e=0;e<c.numberOfGlyphs;e++)c.glyphNameIndex[e]=d.parseUShort();c.names=[];for(var f=0;f<c.numberOfGlyphs;f++)if(c.glyphNameIndex[f]>=Se.length){var g=d.parseChar();c.names.push(d.parseString(g))}break;case 2.5:c.numberOfGlyphs=d.parseUShort(),c.offset=new Array(c.numberOfGlyphs);for(var h=0;h<c.numberOfGlyphs;h++)c.offset[h]=d.parseChar()}return c}function ob(){return new Ke.Table("post",[{name:"version",type:"FIXED",value:196608},{name:"italicAngle",type:"FIXED",value:0},{name:"underlinePosition",type:"FWORD",value:0},{name:"underlineThickness",type:"FWORD",value:0},{name:"isFixedPitch",type:"ULONG",value:0},{name:"minMemType42",type:"ULONG",value:0},{name:"maxMemType42",type:"ULONG",value:0},{name:"minMemType1",type:"ULONG",value:0},{name:"maxMemType1",type:"ULONG",value:0}])}function pb(a,b){b=b||0;var c=new Q(a,b),d=c.parseVersion();return ze.argument(1===d,"Unsupported GSUB table version."),{version:d,scripts:c.parseScriptList(),features:c.parseFeatureList(),lookups:c.parseLookupList(of)}}function qb(a){return new Ke.Table("GSUB",[{name:"version",type:"ULONG",value:65536},{name:"scripts",type:"TABLE",value:new Ke.ScriptList(a.scripts)},{name:"features",type:"TABLE",value:new Ke.FeatureList(a.features)},{name:"lookups",type:"TABLE",value:new Ke.LookupList(a.lookups,qf)}])}function rb(a,b){var c=new Ne.Parser(a,b),d=c.parseULong();ze.argument(1===d,"Unsupported META table version."),c.parseULong(),c.parseULong();for(var e=c.parseULong(),f={},g=0;g<e;g++){var h=c.parseTag(),i=c.parseULong(),j=c.parseULong(),k=Ce.UTF8(a,b+i,j);f[h]=k}return f}function sb(a){var b=Object.keys(a).length,c="",d=16+12*b,e=new Ke.Table("meta",[{name:"version",type:"ULONG",value:1},{name:"flags",type:"ULONG",value:0},{name:"offset",type:"ULONG",value:d},{name:"numTags",type:"ULONG",value:b}]);for(var f in a){var g=c.length;c+=a[f],e.fields.push({name:"tag "+f,type:"TAG",value:f}),e.fields.push({name:"offset "+f,type:"ULONG",value:d+g}),e.fields.push({name:"length "+f,type:"ULONG",value:a[f].length})}return e.fields.push({name:"stringPool",type:"CHARARRAY",value:c}),e}function tb(a){return Math.log(a)/Math.log(2)|0}function ub(a){for(;a.length%4!=0;)a.push(0);for(var b=0,c=0;c<a.length;c+=4)b+=(a[c]<<24)+(a[c+1]<<16)+(a[c+2]<<8)+a[c+3];return b%=Math.pow(2,32)}function vb(a,b,c,d){return new Ke.Record("Table Record",[{name:"tag",type:"TAG",value:void 0!==a?a:""},{name:"checkSum",type:"ULONG",value:void 0!==b?b:0},{name:"offset",type:"ULONG",value:void 0!==c?c:0},{name:"length",type:"ULONG",value:void 0!==d?d:0}])}function wb(a){var b=new Ke.Table("sfnt",[{name:"version",type:"TAG",value:"OTTO"},{name:"numTables",type:"USHORT",value:0},{name:"searchRange",type:"USHORT",value:0},{name:"entrySelector",type:"USHORT",value:0},{name:"rangeShift",type:"USHORT",value:0}]);b.tables=a,b.numTables=a.length;var c=Math.pow(2,tb(b.numTables));b.searchRange=16*c,b.entrySelector=tb(c),b.rangeShift=16*b.numTables-b.searchRange;for(var d=[],e=[],f=b.sizeOf()+vb().sizeOf()*b.numTables;f%4!=0;)f+=1,e.push({name:"padding",type:"BYTE",value:0});for(var g=0;g<a.length;g+=1){var h=a[g];ze.argument(4===h.tableName.length,"Table name"+h.tableName+" is invalid.");var i=h.sizeOf(),j=vb(h.tableName,ub(h.encode()),f,i);for(d.push({name:j.tag+" Table Record",type:"RECORD",value:j}),e.push({name:h.tableName+" table",type:"RECORD",value:h}),f+=i,ze.argument(!isNaN(f),"Something went wrong calculating the offset.");f%4!=0;)f+=1,e.push({name:"padding",type:"BYTE",value:0})}return d.sort(function(a,b){return a.value.tag>b.value.tag?1:-1}),b.fields=b.fields.concat(d),b.fields=b.fields.concat(e),b}function xb(a,b,c){for(var d=0;d<b.length;d+=1){var e=a.charToGlyphIndex(b[d]);if(e>0){return a.glyphs.get(e).getMetrics()}}return c}function yb(a){for(var b=0,c=0;c<a.length;c+=1)b+=a[c];return b/a.length}function zb(a){for(var b,c=[],d=[],e=[],f=[],g=[],h=[],i=[],j=0,k=0,l=0,m=0,n=0,o=0;o<a.glyphs.length;o+=1){var p=a.glyphs.get(o),q=0|p.unicode;if(isNaN(p.advanceWidth))throw new Error("Glyph "+p.name+" ("+o+"): advanceWidth is not a number.");(b>q||void 0===b)&&q>0&&(b=q),j<q&&(j=q);var r=mf.getUnicodeRange(q);if(r<32)k|=1<<r;else if(r<64)l|=1<<r-32;else if(r<96)m|=1<<r-64;else{if(!(r<123))throw new Error("Unicode ranges bits > 123 are reserved for internal usage");n|=1<<r-96}if(".notdef"!==p.name){var s=p.getMetrics();c.push(s.xMin),d.push(s.yMin),e.push(s.xMax),f.push(s.yMax),h.push(s.leftSideBearing),i.push(s.rightSideBearing),g.push(p.advanceWidth)}}var t={xMin:Math.min.apply(null,c),yMin:Math.min.apply(null,d),xMax:Math.max.apply(null,e),yMax:Math.max.apply(null,f),advanceWidthMax:Math.max.apply(null,g),advanceWidthAvg:yb(g),minLeftSideBearing:Math.min.apply(null,h),maxLeftSideBearing:Math.max.apply(null,h),minRightSideBearing:Math.min.apply(null,i)};t.ascender=a.ascender,t.descender=a.descender;var u=Ze.make({flags:3,unitsPerEm:a.unitsPerEm,xMin:t.xMin,yMin:t.yMin,xMax:t.xMax,yMax:t.yMax,lowestRecPPEM:3,createdTimestamp:a.createdTimestamp}),v=$e.make({ascender:t.ascender,descender:t.descender,advanceWidthMax:t.advanceWidthMax,minLeftSideBearing:t.minLeftSideBearing,minRightSideBearing:t.minRightSideBearing,xMaxExtent:t.maxLeftSideBearing+(t.xMax-t.xMin),numberOfHMetrics:a.glyphs.length}),w=bf.make(a.glyphs.length),x=mf.make({xAvgCharWidth:Math.round(t.advanceWidthAvg),usWeightClass:a.tables.os2.usWeightClass,usWidthClass:a.tables.os2.usWidthClass,usFirstCharIndex:b,usLastCharIndex:j,ulUnicodeRange1:k,ulUnicodeRange2:l,ulUnicodeRange3:m,ulUnicodeRange4:n,fsSelection:a.tables.os2.fsSelection,sTypoAscender:t.ascender,sTypoDescender:t.descender,sTypoLineGap:0,usWinAscent:t.yMax,usWinDescent:Math.abs(t.yMin),ulCodePageRange1:1,sxHeight:xb(a,"xyvw",{yMax:Math.round(t.ascender/2)}).yMax,sCapHeight:xb(a,"HIKLEFJMNTZBDPRAGOQSUVWXY",t).yMax,usDefaultChar:a.hasChar(" ")?32:0,usBreakChar:a.hasChar(" ")?32:0}),y=_e.make(a.glyphs),z=Oe.make(a.glyphs),A=a.getEnglishName("fontFamily"),B=a.getEnglishName("fontSubfamily"),C=A+" "+B,D=a.getEnglishName("postScriptName");D||(D=A.replace(/\s/g,"")+"-"+B);var E={};for(var F in a.names)E[F]=a.names[F];E.uniqueID||(E.uniqueID={en:a.getEnglishName("manufacturer")+":"+C}),E.postScriptName||(E.postScriptName={en:D}),E.preferredFamily||(E.preferredFamily=a.names.fontFamily),E.preferredSubfamily||(E.preferredSubfamily=a.names.fontSubfamily);var G=[],H=kf.make(E,G),I=G.length>0?af.make(G):void 0,J=nf.make(),K=Ye.make(a.glyphs,{version:a.getEnglishName("version"),fullName:C,familyName:A,weightName:B,postScriptName:D,unitsPerEm:a.unitsPerEm,fontBBox:[0,t.yMin,t.ascender,t.advanceWidthMax]}),L=a.metas&&Object.keys(a.metas).length>0?sf.make(a.metas):void 0,M=[u,v,w,x,H,z,J,K,y];I&&M.push(I),a.tables.gsub&&M.push(rf.make(a.tables.gsub)),L&&M.push(L);for(var N=wb(M),O=N.encode(),P=ub(O),Q=N.fields,R=!1,S=0;S<Q.length;S+=1)if("head table"===Q[S].name){Q[S].value.checkSumAdjustment=2981146554-P,R=!0;break}if(!R)throw new Error("Could not find head table with checkSum to adjust.");return N}function Ab(a,b){for(var c=0,d=a.length-1;c<=d;){var e=c+d>>>1,f=a[e].tag;if(f===b)return e;f<b?c=e+1:d=e-1}return-c-1}function Bb(a,b){for(var c=0,d=a.length-1;c<=d;){var e=c+d>>>1,f=a[e];if(f===b)return e;f<b?c=e+1:d=e-1}return-c-1}function Cb(a,b){this.font=a,this.tableName=b}function Db(a){Cb.call(this,a,"gsub")}function Eb(a,b){var c=a.length;if(c!==b.length)return!1;for(var d=0;d<c;d++)if(a[d]!==b[d])return!1;return!0}function Fb(a,b,c){for(var d=a.subtables,e=0;e<d.length;e++){var f=d[e];if(f.substFormat===b)return f}if(c)return d.push(c),c}function Gb(){return"undefined"!=typeof window}function Hb(a){for(var b=new ArrayBuffer(a.length),c=new Uint8Array(b),d=0;d<a.length;++d)c[d]=a[d];return b}function Ib(a){for(var b=new e(a.byteLength),c=new Uint8Array(a),d=0;d<b.length;++d)b[d]=c[d];return b}function Jb(a,b){if(!a)throw b}function Kb(a){this.font=a,this._fpgmState=this._prepState=void 0,this._errorState=0}function Lb(a){return a}function Mb(a){return Math.sign(a)*Math.round(Math.abs(a))}function Nb(a){return Math.sign(a)*Math.round(Math.abs(2*a))/2}function Ob(a){return Math.sign(a)*(Math.round(Math.abs(a)+.5)-.5)}function Pb(a){return Math.sign(a)*Math.ceil(Math.abs(a))}function Qb(a){return Math.sign(a)*Math.floor(Math.abs(a))}function Rb(a,b){this.x=a,this.y=b,this.axis=void 0,this.slope=b/a,this.normalSlope=-a/b,Object.freeze(this)}function Sb(a,b){var c=Math.sqrt(a*a+b*b);return a/=c,b/=c,1===a&&0===b?zf:0===a&&1===b?Af:new Rb(a,b)}function Tb(a,b,c,d){this.x=this.xo=Math.round(64*a)/64,this.y=this.yo=Math.round(64*b)/64,this.lastPointOfContour=c,this.onCurve=d,this.prevPointOnContour=void 0,this.nextPointOnContour=void 0,this.xTouched=!1,this.yTouched=!1,Object.preventExtensions(this)}function Ub(a,b){switch(this.env=a,this.stack=[],this.prog=b,a){case"glyf":this.zp0=this.zp1=this.zp2=1,this.rp0=this.rp1=this.rp2=0;case"prep":this.fv=this.pv=this.dpv=zf,this.round=Mb}}function Vb(a){for(var b=a.tZone=new Array(a.gZone.length),c=0;c<b.length;c++)b[c]=new Tb(0,0)}function Wb(a,b){var c,d=a.prog,e=a.ip,f=1;do{if(88===(c=d[++e]))f++;else if(89===c)f--;else if(64===c)e+=d[e+1]+1;else if(65===c)e+=2*d[e+1]+1;else if(c>=176&&c<=183)e+=c-176+1;else if(c>=184&&c<=191)e+=2*(c-184+1);else if(b&&1===f&&27===c)break}while(f>0);a.ip=e}function Xb(b,c){a.DEBUG&&console.log(c.step,"SVTCA["+b.axis+"]"),c.fv=c.pv=c.dpv=b}function Yb(b,c){a.DEBUG&&console.log(c.step,"SPVTCA["+b.axis+"]"),c.pv=c.dpv=b}function Zb(b,c){a.DEBUG&&console.log(c.step,"SFVTCA["+b.axis+"]"),c.fv=b}function $b(b,c){var d=c.stack,e=d.pop(),f=d.pop(),g=c.z2[e],h=c.z1[f];a.DEBUG&&console.log("SPVTL["+b+"]",e,f);var i,j;b?(i=g.y-h.y,j=h.x-g.x):(i=h.x-g.x,j=h.y-g.y),c.pv=c.dpv=Sb(i,j)}function _b(b,c){var d=c.stack,e=d.pop(),f=d.pop(),g=c.z2[e],h=c.z1[f];a.DEBUG&&console.log("SFVTL["+b+"]",e,f);var i,j;b?(i=g.y-h.y,j=h.x-g.x):(i=h.x-g.x,j=h.y-g.y),c.fv=Sb(i,j)}function ac(b){var c=b.stack,d=c.pop(),e=c.pop();a.DEBUG&&console.log(b.step,"SPVFS[]",d,e),b.pv=b.dpv=Sb(e,d)}function bc(b){var c=b.stack,d=c.pop(),e=c.pop();a.DEBUG&&console.log(b.step,"SPVFS[]",d,e),b.fv=Sb(e,d)}function cc(b){var c=b.stack,d=b.pv;a.DEBUG&&console.log(b.step,"GPV[]"),c.push(16384*d.x),c.push(16384*d.y)}function dc(b){var c=b.stack,d=b.fv;a.DEBUG&&console.log(b.step,"GFV[]"),c.push(16384*d.x),c.push(16384*d.y)}function ec(b){b.fv=b.pv,a.DEBUG&&console.log(b.step,"SFVTPV[]")}function fc(b){var c=b.stack,d=c.pop(),e=c.pop(),f=c.pop(),g=c.pop(),h=c.pop(),i=b.z0,j=b.z1,k=i[d],l=i[e],m=j[f],n=j[g],o=b.z2[h];a.DEBUG&&console.log("ISECT[], ",d,e,f,g,h);var p=k.x,q=k.y,r=l.x,s=l.y,t=m.x,u=m.y,v=n.x,w=n.y,x=(p-r)*(u-w)-(q-s)*(t-v),y=p*s-q*r,z=t*w-u*v;o.x=(y*(t-v)-z*(p-r))/x,o.y=(y*(u-w)-z*(q-s))/x}function gc(b){b.rp0=b.stack.pop(),a.DEBUG&&console.log(b.step,"SRP0[]",b.rp0)}function hc(b){b.rp1=b.stack.pop(),a.DEBUG&&console.log(b.step,"SRP1[]",b.rp1)}function ic(b){b.rp2=b.stack.pop(),a.DEBUG&&console.log(b.step,"SRP2[]",b.rp2)}function jc(b){var c=b.stack.pop();switch(a.DEBUG&&console.log(b.step,"SZP0[]",c),b.zp0=c,c){case 0:b.tZone||Vb(b),b.z0=b.tZone;break;case 1:b.z0=b.gZone;break;default:throw new Error("Invalid zone pointer")}}function kc(b){var c=b.stack.pop();switch(a.DEBUG&&console.log(b.step,"SZP1[]",c),b.zp1=c,c){case 0:b.tZone||Vb(b),b.z1=b.tZone;break;case 1:b.z1=b.gZone;break;default:throw new Error("Invalid zone pointer")}}function lc(b){var c=b.stack.pop();switch(a.DEBUG&&console.log(b.step,"SZP2[]",c),b.zp2=c,c){case 0:b.tZone||Vb(b),b.z2=b.tZone;break;case 1:b.z2=b.gZone;break;default:throw new Error("Invalid zone pointer")}}function mc(b){var c=b.stack.pop();switch(a.DEBUG&&console.log(b.step,"SZPS[]",c),b.zp0=b.zp1=b.zp2=c,c){case 0:b.tZone||Vb(b),b.z0=b.z1=b.z2=b.tZone;break;case 1:b.z0=b.z1=b.z2=b.gZone;break;default:throw new Error("Invalid zone pointer")}}function nc(b){b.loop=b.stack.pop(),a.DEBUG&&console.log(b.step,"SLOOP[]",b.loop)}function oc(b){a.DEBUG&&console.log(b.step,"RTG[]"),b.round=Mb}function pc(b){a.DEBUG&&console.log(b.step,"RTHG[]"),b.round=Ob}function qc(b){var c=b.stack.pop();a.DEBUG&&console.log(b.step,"SMD[]",c),b.minDis=c/64}function rc(b){a.DEBUG&&console.log(b.step,"ELSE[]"),Wb(b,!1)}function sc(b){var c=b.stack.pop();a.DEBUG&&console.log(b.step,"JMPR[]",c),b.ip+=c-1}function tc(b){var c=b.stack.pop();a.DEBUG&&console.log(b.step,"SCVTCI[]",c),b.cvCutIn=c/64}function uc(b){var c=b.stack;a.DEBUG&&console.log(b.step,"DUP[]"),c.push(c[c.length-1])}function vc(b){a.DEBUG&&console.log(b.step,"POP[]"),b.stack.pop()}function wc(b){a.DEBUG&&console.log(b.step,"CLEAR[]"),b.stack.length=0}function xc(b){var c=b.stack,d=c.pop(),e=c.pop();a.DEBUG&&console.log(b.step,"SWAP[]"),c.push(d),c.push(e)}function yc(b){var c=b.stack;a.DEBUG&&console.log(b.step,"DEPTH[]"),c.push(c.length)}function zc(b){var c=b.stack,d=c.pop(),e=c.pop();a.DEBUG&&console.log(b.step,"LOOPCALL[]",d,e);var f=b.ip,g=b.prog;b.prog=b.funcs[d];for(var h=0;h<e;h++)vf(b),a.DEBUG&&console.log(++b.step,h+1<e?"next loopcall":"done loopcall",h);b.ip=f,b.prog=g}function Ac(b){var c=b.stack.pop();a.DEBUG&&console.log(b.step,"CALL[]",c);var d=b.ip,e=b.prog;b.prog=b.funcs[c],vf(b),b.ip=d,b.prog=e,a.DEBUG&&console.log(++b.step,"returning from",c)}function Bc(b){var c=b.stack,d=c.pop();a.DEBUG&&console.log(b.step,"CINDEX[]",d),c.push(c[c.length-d])}function Cc(b){var c=b.stack,d=c.pop();a.DEBUG&&console.log(b.step,"MINDEX[]",d),c.push(c.splice(c.length-d,1)[0])}function Dc(b){if("fpgm"!==b.env)throw new Error("FDEF not allowed here");var c=b.stack,d=b.prog,e=b.ip,f=c.pop(),g=e;for(a.DEBUG&&console.log(b.step,"FDEF[]",f);45!==d[++e];);b.ip=e,b.funcs[f]=d.slice(g+1,e)}function Ec(b,c){var d=c.stack.pop(),e=c.z0[d],f=c.fv,g=c.pv;a.DEBUG&&console.log(c.step,"MDAP["+b+"]",d);var h=g.distance(e,Bf);b&&(h=c.round(h)),f.setRelative(e,Bf,h,g),f.touch(e),c.rp0=c.rp1=d}function Fc(b,c){var d,e,f,g=c.z2,h=g.length-2;a.DEBUG&&console.log(c.step,"IUP["+b.axis+"]");for(var i=0;i<h;i++)d=g[i],b.touched(d)||(e=d.prevTouched(b))!==d&&(f=d.nextTouched(b),e===f&&b.setRelative(d,d,b.distance(e,e,!1,!0),b,!0),b.interpolate(d,e,f,b))}function Gc(b,c){for(var d=c.stack,e=b?c.rp1:c.rp2,f=(b?c.z0:c.z1)[e],g=c.fv,h=c.pv,i=c.loop,j=c.z2;i--;){var k=d.pop(),l=j[k],m=h.distance(f,f,!1,!0);g.setRelative(l,l,m,h),g.touch(l),a.DEBUG&&console.log(c.step,(c.loop>1?"loop "+(c.loop-i)+": ":"")+"SHP["+(b?"rp1":"rp2")+"]",k)}c.loop=1}function Hc(b,c){var d=c.stack,e=b?c.rp1:c.rp2,f=(b?c.z0:c.z1)[e],g=c.fv,h=c.pv,i=d.pop(),j=c.z2[c.contours[i]],k=j;a.DEBUG&&console.log(c.step,"SHC["+b+"]",i);var l=h.distance(f,f,!1,!0);do{k!==f&&g.setRelative(k,k,l,h),k=k.nextPointOnContour}while(k!==j)}function Ic(b,c){var d=c.stack,e=b?c.rp1:c.rp2,f=(b?c.z0:c.z1)[e],g=c.fv,h=c.pv,i=d.pop();a.DEBUG&&console.log(c.step,"SHZ["+b+"]",i);var j;switch(i){case 0:j=c.tZone;break;case 1:j=c.gZone;break;default:throw new Error("Invalid zone")}for(var k,l=h.distance(f,f,!1,!0),m=j.length-2,n=0;n<m;n++)(k=j[n])!==f&&g.setRelative(k,k,l,h)}function Jc(b){for(var c=b.stack,d=b.loop,e=b.fv,f=c.pop()/64,g=b.z2;d--;){var h=c.pop(),i=g[h];a.DEBUG&&console.log(b.step,(b.loop>1?"loop "+(b.loop-d)+": ":"")+"SHPIX[]",h,f),e.setRelative(i,i,f),e.touch(i)}b.loop=1}function Kc(b){for(var c=b.stack,d=b.rp1,e=b.rp2,f=b.loop,g=b.z0[d],h=b.z1[e],i=b.fv,j=b.dpv,k=b.z2;f--;){var l=c.pop(),m=k[l];a.DEBUG&&console.log(b.step,(b.loop>1?"loop "+(b.loop-f)+": ":"")+"IP[]",l,d,"<->",e),i.interpolate(m,g,h,j),i.touch(m)}b.loop=1}function Lc(b,c){var d=c.stack,e=d.pop()/64,f=d.pop(),g=c.z1[f],h=c.z0[c.rp0],i=c.fv,j=c.pv;i.setRelative(g,h,e,j),i.touch(g),a.DEBUG&&console.log(c.step,"MSIRP["+b+"]",e,f),c.rp1=c.rp0,c.rp2=f,b&&(c.rp0=f)}function Mc(b){for(var c=b.stack,d=b.rp0,e=b.z0[d],f=b.loop,g=b.fv,h=b.pv,i=b.z1;f--;){var j=c.pop(),k=i[j];a.DEBUG&&console.log(b.step,(b.loop>1?"loop "+(b.loop-f)+": ":"")+"ALIGNRP[]",j),g.setRelative(k,e,0,h),g.touch(k)}b.loop=1}function Nc(b){a.DEBUG&&console.log(b.step,"RTDG[]"),b.round=Nb}function Oc(b,c){var d=c.stack,e=d.pop(),f=d.pop(),g=c.z0[f],h=c.fv,i=c.pv,j=c.cvt[e];b&&(j=c.round(j)),a.DEBUG&&console.log(c.step,"MIAP["+b+"]",e,"(",j,")",f),h.setRelative(g,Bf,j,i),0===c.zp0&&(g.xo=g.x,g.yo=g.y),h.touch(g),c.rp0=c.rp1=f}function Pc(b){var c=b.prog,d=b.ip,e=b.stack,f=c[++d];a.DEBUG&&console.log(b.step,"NPUSHB[]",f);for(var g=0;g<f;g++)e.push(c[++d]);b.ip=d}function Qc(b){var c=b.ip,d=b.prog,e=b.stack,f=d[++c];a.DEBUG&&console.log(b.step,"NPUSHW[]",f);for(var g=0;g<f;g++){var h=d[++c]<<8|d[++c];32768&h&&(h=-(1+(65535^h))),e.push(h)}b.ip=c}function Rc(b){var c=b.stack,d=b.store;d||(d=b.store=[]);var e=c.pop(),f=c.pop();a.DEBUG&&console.log(b.step,"WS",e,f),d[f]=e}function Sc(b){var c=b.stack,d=b.store,e=c.pop();a.DEBUG&&console.log(b.step,"RS",e);var f=d&&d[e]||0;c.push(f)}function Tc(b){var c=b.stack,d=c.pop(),e=c.pop();a.DEBUG&&console.log(b.step,"WCVTP",d,e),b.cvt[e]=d/64}function Uc(b){var c=b.stack,d=c.pop();a.DEBUG&&console.log(b.step,"RCVT",d),c.push(64*b.cvt[d])}function Vc(b,c){var d=c.stack,e=d.pop(),f=c.z2[e];a.DEBUG&&console.log(c.step,"GC["+b+"]",e),d.push(64*c.dpv.distance(f,Bf,b,!1))}function Wc(b,c){var d=c.stack,e=d.pop(),f=d.pop(),g=c.z1[e],h=c.z0[f],i=c.dpv.distance(h,g,b,b);a.DEBUG&&console.log(c.step,"MD["+b+"]",e,f,"->",i),c.stack.push(Math.round(64*i))}function Xc(b){a.DEBUG&&console.log(b.step,"MPPEM[]"),b.stack.push(b.ppem)}function Yc(b){a.DEBUG&&console.log(b.step,"FLIPON[]"),b.autoFlip=!0}function Zc(b){var c=b.stack,d=c.pop(),e=c.pop();a.DEBUG&&console.log(b.step,"LT[]",d,e),c.push(e<d?1:0)}function $c(b){var c=b.stack,d=c.pop(),e=c.pop();a.DEBUG&&console.log(b.step,"LTEQ[]",d,e),c.push(e<=d?1:0)}function _c(b){var c=b.stack,d=c.pop(),e=c.pop();a.DEBUG&&console.log(b.step,"GT[]",d,e),c.push(e>d?1:0)}function ad(b){var c=b.stack,d=c.pop(),e=c.pop();a.DEBUG&&console.log(b.step,"GTEQ[]",d,e),c.push(e>=d?1:0)}function bd(b){var c=b.stack,d=c.pop(),e=c.pop();a.DEBUG&&console.log(b.step,"EQ[]",d,e),c.push(d===e?1:0)}function cd(b){var c=b.stack,d=c.pop(),e=c.pop();a.DEBUG&&console.log(b.step,"NEQ[]",d,e),c.push(d!==e?1:0)}function dd(b){var c=b.stack,d=c.pop();a.DEBUG&&console.log(b.step,"ODD[]",d),c.push(Math.trunc(d)%2?1:0)}function ed(b){var c=b.stack,d=c.pop();a.DEBUG&&console.log(b.step,"EVEN[]",d),c.push(Math.trunc(d)%2?0:1)}function fd(b){var c,d=b.stack.pop();a.DEBUG&&console.log(b.step,"IF[]",d),d||(Wb(b,!0),a.DEBUG&&console.log(b.step,27===c?"ELSE[]":"EIF[]"))}function gd(b){a.DEBUG&&console.log(b.step,"EIF[]")}function hd(b){var c=b.stack,d=c.pop(),e=c.pop();a.DEBUG&&console.log(b.step,"AND[]",d,e),c.push(d&&e?1:0)}function id(b){var c=b.stack,d=c.pop(),e=c.pop();a.DEBUG&&console.log(b.step,"OR[]",d,e),c.push(d||e?1:0)}function jd(b){var c=b.stack,d=c.pop();a.DEBUG&&console.log(b.step,"NOT[]",d),c.push(d?0:1)}function kd(b,c){var d=c.stack,e=d.pop(),f=c.fv,g=c.pv,h=c.ppem,i=c.deltaBase+16*(b-1),j=c.deltaShift,k=c.z0;a.DEBUG&&console.log(c.step,"DELTAP["+b+"]",e,d);for(var l=0;l<e;l++){var m=d.pop(),n=d.pop();if(i+((240&n)>>4)===h){var o=(15&n)-8;o>=0&&o++,a.DEBUG&&console.log(c.step,"DELTAPFIX",m,"by",o*j);var p=k[m];f.setRelative(p,p,o*j,g)}}}function ld(b){var c=b.stack,d=c.pop();a.DEBUG&&console.log(b.step,"SDB[]",d),b.deltaBase=d}function md(b){var c=b.stack,d=c.pop();a.DEBUG&&console.log(b.step,"SDS[]",d),b.deltaShift=Math.pow(.5,d)}function nd(b){var c=b.stack,d=c.pop(),e=c.pop();a.DEBUG&&console.log(b.step,"ADD[]",d,e),c.push(e+d)}function od(b){var c=b.stack,d=c.pop(),e=c.pop();a.DEBUG&&console.log(b.step,"SUB[]",d,e),c.push(e-d)}function pd(b){var c=b.stack,d=c.pop(),e=c.pop();a.DEBUG&&console.log(b.step,"DIV[]",d,e),c.push(64*e/d)}function qd(b){var c=b.stack,d=c.pop(),e=c.pop();a.DEBUG&&console.log(b.step,"MUL[]",d,e),c.push(e*d/64)}function rd(b){var c=b.stack,d=c.pop();a.DEBUG&&console.log(b.step,"ABS[]",d),c.push(Math.abs(d))}function sd(b){var c=b.stack,d=c.pop();a.DEBUG&&console.log(b.step,"NEG[]",d),c.push(-d)}function td(b){var c=b.stack,d=c.pop();a.DEBUG&&console.log(b.step,"FLOOR[]",d),c.push(64*Math.floor(d/64))}function ud(b){var c=b.stack,d=c.pop();a.DEBUG&&console.log(b.step,"CEILING[]",d),c.push(64*Math.ceil(d/64))}function vd(b,c){var d=c.stack,e=d.pop();a.DEBUG&&console.log(c.step,"ROUND[]"),d.push(64*c.round(e/64))}function wd(b){var c=b.stack,d=c.pop(),e=c.pop();a.DEBUG&&console.log(b.step,"WCVTF[]",d,e),b.cvt[e]=d*b.ppem/b.font.unitsPerEm}function xd(b,c){var d=c.stack,e=d.pop(),f=c.ppem,g=c.deltaBase+16*(b-1),h=c.deltaShift;a.DEBUG&&console.log(c.step,"DELTAC["+b+"]",e,d);for(var i=0;i<e;i++){var j=d.pop(),k=d.pop();if(g+((240&k)>>4)===f){var l=(15&k)-8;l>=0&&l++;var m=l*h;a.DEBUG&&console.log(c.step,"DELTACFIX",j,"by",m),c.cvt[j]+=m}}}function yd(b){var c=b.stack.pop();a.DEBUG&&console.log(b.step,"SROUND[]",c),b.round=yf;var d;switch(192&c){case 0:d=.5;break;case 64:d=1;break;case 128:d=2;break;default:throw new Error("invalid SROUND value")}switch(b.srPeriod=d,48&c){case 0:b.srPhase=0;break;case 16:b.srPhase=.25*d;break;case 32:b.srPhase=.5*d;break;case 48:b.srPhase=.75*d;break;default:throw new Error("invalid SROUND value")}c&=15,b.srThreshold=0===c?0:(c/8-.5)*d}function zd(b){var c=b.stack.pop();a.DEBUG&&console.log(b.step,"S45ROUND[]",c),b.round=yf;var d;switch(192&c){case 0:d=Math.sqrt(2)/2;break;case 64:d=Math.sqrt(2);break;case 128:d=2*Math.sqrt(2);break;default:throw new Error("invalid S45ROUND value")}switch(b.srPeriod=d,48&c){case 0:b.srPhase=0;break;case 16:b.srPhase=.25*d;break;case 32:b.srPhase=.5*d;break;case 48:b.srPhase=.75*d;break;default:throw new Error("invalid S45ROUND value")}c&=15,b.srThreshold=0===c?0:(c/8-.5)*d}function Ad(b){a.DEBUG&&console.log(b.step,"ROFF[]"),b.round=Lb}function Bd(b){a.DEBUG&&console.log(b.step,"RUTG[]"),b.round=Pb}function Cd(b){a.DEBUG&&console.log(b.step,"RDTG[]"),b.round=Qb}function Dd(b){var c=b.stack.pop();a.DEBUG&&console.log(b.step,"SCANCTRL[]",c)}function Ed(b,c){var d=c.stack,e=d.pop(),f=d.pop(),g=c.z2[e],h=c.z1[f];a.DEBUG&&console.log("SDPVTL["+b+"]",e,f);var i,j;b?(i=g.y-h.y,j=h.x-g.x):(i=h.x-g.x,j=h.y-g.y),c.dpv=Sb(i,j)}function Fd(b){var c=b.stack,d=c.pop(),e=0;a.DEBUG&&console.log(b.step,"GETINFO[]",d),1&d&&(e=35),32&d&&(e|=4096),c.push(e)}function Gd(b){var c=b.stack,d=c.pop(),e=c.pop(),f=c.pop();a.DEBUG&&console.log(b.step,"ROLL[]"),c.push(e),c.push(d),c.push(f)}function Hd(b){var c=b.stack,d=c.pop(),e=c.pop();a.DEBUG&&console.log(b.step,"MAX[]",d,e),c.push(Math.max(e,d))}function Id(b){var c=b.stack,d=c.pop(),e=c.pop();a.DEBUG&&console.log(b.step,"MIN[]",d,e),c.push(Math.min(e,d))}function Jd(b){var c=b.stack.pop();a.DEBUG&&console.log(b.step,"SCANTYPE[]",c)}function Kd(b){var c=b.stack.pop(),d=b.stack.pop();switch(a.DEBUG&&console.log(b.step,"INSTCTRL[]",c,d),c){case 1:return void(b.inhibitGridFit=!!d);case 2:return void(b.ignoreCvt=!!d);default:throw new Error("invalid INSTCTRL[] selector")}}function Ld(b,c){var d=c.stack,e=c.prog,f=c.ip;a.DEBUG&&console.log(c.step,"PUSHB["+b+"]");for(var g=0;g<b;g++)d.push(e[++f]);c.ip=f}function Md(b,c){var d=c.ip,e=c.prog,f=c.stack;a.DEBUG&&console.log(c.ip,"PUSHW["+b+"]");for(var g=0;g<b;g++){var h=e[++d]<<8|e[++d];32768&h&&(h=-(1+(65535^h))),f.push(h)}c.ip=d}function Nd(b,c,d,e,f,g){var h,i,j,k,l=g.stack,m=b&&l.pop(),n=l.pop(),o=g.rp0,p=g.z0[o],q=g.z1[n],r=g.minDis,s=g.fv,t=g.dpv;i=h=t.distance(q,p,!0,!0),j=i>=0?1:-1,i=Math.abs(i),b&&(k=g.cvt[m],e&&Math.abs(i-k)<g.cvCutIn&&(i=k)),d&&i<r&&(i=r),e&&(i=g.round(i)),s.setRelative(q,p,j*i,t),s.touch(q),a.DEBUG&&console.log(g.step,(b?"MIRP[":"MDRP[")+(c?"M":"m")+(d?">":"_")+(e?"R":"_")+(0===f?"Gr":1===f?"Bl":2===f?"Wh":"")+"]",b?m+"("+g.cvt[m]+","+k+")":"",n,"(d =",h,"->",j*i,")"),g.rp1=g.rp0,g.rp2=n,c&&(g.rp0=n)}function Od(a){a=a||{},a.empty||(Jb(a.familyName,"When creating a new Font object, familyName is required."),Jb(a.styleName,"When creating a new Font object, styleName is required."),Jb(a.unitsPerEm,"When creating a new Font object, unitsPerEm is required."),Jb(a.ascender,"When creating a new Font object, ascender is required."),
Jb(a.descender,"When creating a new Font object, descender is required."),Jb(a.descender<0,"Descender should be negative (e.g. -512)."),this.names={fontFamily:{en:a.familyName||" "},fontSubfamily:{en:a.styleName||" "},fullName:{en:a.fullName||a.familyName+" "+a.styleName},postScriptName:{en:a.postScriptName||a.familyName+a.styleName},designer:{en:a.designer||" "},designerURL:{en:a.designerURL||" "},manufacturer:{en:a.manufacturer||" "},manufacturerURL:{en:a.manufacturerURL||" "},license:{en:a.license||" "},licenseURL:{en:a.licenseURL||" "},version:{en:a.version||"Version 0.1"},description:{en:a.description||" "},copyright:{en:a.copyright||" "},trademark:{en:a.trademark||" "}},this.unitsPerEm=a.unitsPerEm||1e3,this.ascender=a.ascender,this.descender=a.descender,this.createdTimestamp=a.createdTimestamp,this.tables={os2:{usWeightClass:a.weightClass||this.usWeightClasses.MEDIUM,usWidthClass:a.widthClass||this.usWidthClasses.MEDIUM,fsSelection:a.fsSelection||this.fsSelectionValues.REGULAR}}),this.supported=!0,this.glyphs=new Ve.GlyphSet(this,a.glyphs||[]),this.encoding=new X(this),this.substitution=new Db(this),this.tables=this.tables||{},Object.defineProperty(this,"hinting",{get:function(){return this._hinting?this._hinting:"truetype"===this.outlinesFormat?this._hinting=new Kb(this):void 0}})}function Pd(a,b){var c=JSON.stringify(a),d=256;for(var e in b){var f=parseInt(e);if(f&&!(f<256)){if(JSON.stringify(b[e])===c)return f;d<=f&&(d=f+1)}}return b[d]=a,d}function Qd(a,b,c){var d=Pd(b.name,c);return[{name:"tag_"+a,type:"TAG",value:b.tag},{name:"minValue_"+a,type:"FIXED",value:b.minValue<<16},{name:"defaultValue_"+a,type:"FIXED",value:b.defaultValue<<16},{name:"maxValue_"+a,type:"FIXED",value:b.maxValue<<16},{name:"flags_"+a,type:"USHORT",value:0},{name:"nameID_"+a,type:"USHORT",value:d}]}function Rd(a,b,c){var d={},e=new Ne.Parser(a,b);return d.tag=e.parseTag(),d.minValue=e.parseFixed(),d.defaultValue=e.parseFixed(),d.maxValue=e.parseFixed(),e.skip("uShort",1),d.name=c[e.parseUShort()]||{},d}function Sd(a,b,c,d){for(var e=Pd(b.name,d),f=[{name:"nameID_"+a,type:"USHORT",value:e},{name:"flags_"+a,type:"USHORT",value:0}],g=0;g<c.length;++g){var h=c[g].tag;f.push({name:"axis_"+a+" "+h,type:"FIXED",value:b.coordinates[h]<<16})}return f}function Td(a,b,c,d){var e={},f=new Ne.Parser(a,b);e.name=d[f.parseUShort()]||{},f.skip("uShort",1),e.coordinates={};for(var g=0;g<c.length;++g)e.coordinates[c[g].tag]=f.parseFixed();return e}function Ud(a,b){var c=new Ke.Table("fvar",[{name:"version",type:"ULONG",value:65536},{name:"offsetToData",type:"USHORT",value:0},{name:"countSizePairs",type:"USHORT",value:2},{name:"axisCount",type:"USHORT",value:a.axes.length},{name:"axisSize",type:"USHORT",value:20},{name:"instanceCount",type:"USHORT",value:a.instances.length},{name:"instanceSize",type:"USHORT",value:4+4*a.axes.length}]);c.offsetToData=c.sizeOf();for(var d=0;d<a.axes.length;d++)c.fields=c.fields.concat(Qd(d,a.axes[d],b));for(var e=0;e<a.instances.length;e++)c.fields=c.fields.concat(Sd(e,a.instances[e],a.axes,b));return c}function Vd(a,b,c){var d=new Ne.Parser(a,b),e=d.parseULong();ze.argument(65536===e,"Unsupported fvar table version.");var f=d.parseOffset16();d.skip("uShort",1);for(var g=d.parseUShort(),h=d.parseUShort(),i=d.parseUShort(),j=d.parseUShort(),k=[],l=0;l<g;l++)k.push(Rd(a,b+f+l*h,c));for(var m=[],n=b+f+g*h,o=0;o<i;o++)m.push(Td(a,n+o*j,k,c));return{axes:k,instances:m}}function Wd(a,b){for(var c=new Ne.Parser(a,b),d=c.parseUShort(),e=[],f=0;f<d;f++)e[c.parseTag()]={offset:c.parseUShort()};return e}function Xd(a,b){var c=new Ne.Parser(a,b),d=c.parseUShort(),e=c.parseUShort();if(1===d)return c.parseUShortList(e);if(2===d){for(var f=[];e--;)for(var g=c.parseUShort(),h=c.parseUShort(),i=c.parseUShort(),j=g;j<=h;j++)f[i++]=j;return f}}function Yd(a,b){var c=new Ne.Parser(a,b),d=c.parseUShort();if(1===d){var e=c.parseUShort(),f=c.parseUShort(),g=c.parseUShortList(f);return function(a){return g[a-e]||0}}if(2===d){for(var h=c.parseUShort(),i=[],j=[],k=[],l=0;l<h;l++)i[l]=c.parseUShort(),j[l]=c.parseUShort(),k[l]=c.parseUShort();return function(a){for(var b=0,c=i.length-1;b<c;){var d=b+c+1>>1;a<i[d]?c=d-1:b=d}return i[b]<=a&&a<=j[b]?k[b]||0:0}}}function Zd(a,b){var c,d=new Ne.Parser(a,b),e=d.parseUShort(),f=d.parseUShort(),g=Xd(a,b+f),h=d.parseUShort(),i=d.parseUShort();if(4===h&&0===i){var j={};if(1===e){for(var k=d.parseUShort(),l=[],m=d.parseOffset16List(k),n=0;n<k;n++){var o=m[n],p=j[o];if(!p){p={},d.relativeOffset=o;for(var q=d.parseUShort();q--;){var r=d.parseUShort();h&&(c=d.parseShort()),i&&d.parseShort(),p[r]=c}}l[g[n]]=p}return function(a,b){var c=l[a];if(c)return c[b]}}if(2===e){for(var s=d.parseUShort(),t=d.parseUShort(),u=d.parseUShort(),v=d.parseUShort(),w=Yd(a,b+s),x=Yd(a,b+t),y=[],z=0;z<u;z++)for(var A=y[z]=[],B=0;B<v;B++)h&&(c=d.parseShort()),i&&d.parseShort(),A[B]=c;for(var C={},D=0;D<g.length;D++)C[g[D]]=1;return function(a,b){if(C[a]){var c=w(a),d=x(b),e=y[c];return e?e[d]:void 0}}}}}function $d(a,b){var c=new Ne.Parser(a,b),d=c.parseUShort(),e=c.parseUShort(),f=16&e,g=c.parseUShort(),h=c.parseOffset16List(g),i={lookupType:d,lookupFlag:e,markFilteringSet:f?c.parseUShort():-1};if(2===d){for(var j=[],k=0;k<g;k++){var l=Zd(a,b+h[k]);l&&j.push(l)}i.getKerningValue=function(a,b){for(var c=j.length;c--;){var d=j[c](a,b);if(void 0!==d)return d}return 0}}return i}function _d(a,b,c){var d=new Ne.Parser(a,b),e=d.parseFixed();ze.argument(1===e,"Unsupported GPOS table version."),Wd(a,b+d.parseUShort()),Wd(a,b+d.parseUShort());var f=d.parseUShort();d.relativeOffset=f;for(var g=d.parseUShort(),h=d.parseOffset16List(g),i=b+f,j=0;j<g;j++){var k=$d(a,i+h[j]);2!==k.lookupType||c.getGposKerningValue||(c.getGposKerningValue=k.getKerningValue)}}function ae(a){var b={};a.skip("uShort");var c=a.parseUShort();ze.argument(0===c,"Unsupported kern sub-table version."),a.skip("uShort",2);var d=a.parseUShort();a.skip("uShort",3);for(var e=0;e<d;e+=1){var f=a.parseUShort(),g=a.parseUShort(),h=a.parseShort();b[f+","+g]=h}return b}function be(a){var b={};a.skip("uShort"),a.parseULong()>1&&console.warn("Only the first kern subtable is supported."),a.skip("uLong");var c=a.parseUShort(),d=255&c;if(a.skip("uShort"),0===d){var e=a.parseUShort();a.skip("uShort",3);for(var f=0;f<e;f+=1){var g=a.parseUShort(),h=a.parseUShort(),i=a.parseShort();b[g+","+h]=i}}return b}function ce(a,b){var c=new Ne.Parser(a,b),d=c.parseUShort();if(0===d)return ae(c);if(1===d)return be(c);throw new Error("Unsupported kern table version ("+d+").")}function de(a,b,c,d){for(var e=new Ne.Parser(a,b),f=d?e.parseUShort:e.parseULong,g=[],h=0;h<c+1;h+=1){var i=f.call(e);d&&(i*=2),g.push(i)}return g}function ee(a,c){b("fs").readFile(a,function(a,b){if(a)return c(a.message);c(null,Hb(b))})}function fe(a,b){var c=new XMLHttpRequest;c.open("get",a,!0),c.responseType="arraybuffer",c.onload=function(){return 200!==c.status?b("Font could not be loaded: "+c.statusText):b(null,c.response)},c.onerror=function(){b("Font could not be loaded")},c.send()}function ge(a,b){for(var c=[],d=12,e=0;e<b;e+=1){var f=Ne.getTag(a,d),g=Ne.getULong(a,d+4),h=Ne.getULong(a,d+8),i=Ne.getULong(a,d+12);c.push({tag:f,checksum:g,offset:h,length:i,compression:!1}),d+=16}return c}function he(a,b){for(var c=[],d=44,e=0;e<b;e+=1){var f=Ne.getTag(a,d),g=Ne.getULong(a,d+4),h=Ne.getULong(a,d+8),i=Ne.getULong(a,d+12),j=void 0;j=h<i&&"WOFF",c.push({tag:f,offset:g,compression:j,compressedLength:h,length:i}),d+=20}return c}function ie(a,b){if("WOFF"===b.compression){var c=new Uint8Array(a.buffer,b.offset+2,b.compressedLength-2),d=new Uint8Array(b.length);if(ye(c,d),d.byteLength!==b.length)throw new Error("Decompression error: "+b.tag+" decompressed length doesn't match recorded length");return{data:new DataView(d.buffer,0),offset:0}}return{data:a,offset:b.offset}}function je(a){var b,c,d,e=new Od({empty:!0}),f=new DataView(a,0),g=[],h=Ne.getTag(f,0);if(h===String.fromCharCode(0,1,0,0)||"true"===h||"typ1"===h)e.outlinesFormat="truetype",d=Ne.getUShort(f,4),g=ge(f,d);else if("OTTO"===h)e.outlinesFormat="cff",d=Ne.getUShort(f,4),g=ge(f,d);else{if("wOFF"!==h)throw new Error("Unsupported OpenType signature "+h);var i=Ne.getTag(f,4);if(i===String.fromCharCode(0,1,0,0))e.outlinesFormat="truetype";else{if("OTTO"!==i)throw new Error("Unsupported OpenType flavor "+h);e.outlinesFormat="cff"}d=Ne.getUShort(f,12),g=he(f,d)}for(var j,k,l,m,n,o,p,q,r,s,t,u=0;u<d;u+=1){var v=g[u],w=void 0;switch(v.tag){case"cmap":w=ie(f,v),e.tables.cmap=Oe.parse(w.data,w.offset),e.encoding=new Y(e.tables.cmap);break;case"cvt ":w=ie(f,v),t=new Ne.Parser(w.data,w.offset),e.tables.cvt=t.parseShortList(v.length/2);break;case"fvar":k=v;break;case"fpgm":w=ie(f,v),t=new Ne.Parser(w.data,w.offset),e.tables.fpgm=t.parseByteList(v.length);break;case"head":w=ie(f,v),e.tables.head=Ze.parse(w.data,w.offset),e.unitsPerEm=e.tables.head.unitsPerEm,b=e.tables.head.indexToLocFormat;break;case"hhea":w=ie(f,v),e.tables.hhea=$e.parse(w.data,w.offset),e.ascender=e.tables.hhea.ascender,e.descender=e.tables.hhea.descender,e.numberOfHMetrics=e.tables.hhea.numberOfHMetrics;break;case"hmtx":o=v;break;case"ltag":w=ie(f,v),c=af.parse(w.data,w.offset);break;case"maxp":w=ie(f,v),e.tables.maxp=bf.parse(w.data,w.offset),e.numGlyphs=e.tables.maxp.numGlyphs;break;case"name":r=v;break;case"OS/2":w=ie(f,v),e.tables.os2=mf.parse(w.data,w.offset);break;case"post":w=ie(f,v),e.tables.post=nf.parse(w.data,w.offset),e.glyphNames=new $(e.tables.post);break;case"prep":w=ie(f,v),t=new Ne.Parser(w.data,w.offset),e.tables.prep=t.parseByteList(v.length);break;case"glyf":l=v;break;case"loca":q=v;break;case"CFF ":j=v;break;case"kern":p=v;break;case"GPOS":m=v;break;case"GSUB":n=v;break;case"meta":s=v}}var x=ie(f,r);if(e.tables.name=kf.parse(x.data,x.offset,c),e.names=e.tables.name,l&&q){var y=0===b,z=ie(f,q),A=Gf.parse(z.data,z.offset,e.numGlyphs,y),B=ie(f,l);e.glyphs=Ue.parse(B.data,B.offset,A,e)}else{if(!j)throw new Error("Font doesn't contain TrueType or CFF outlines.");var C=ie(f,j);Ye.parse(C.data,C.offset,e)}var D=ie(f,o);if(_e.parse(D.data,D.offset,e.numberOfHMetrics,e.numGlyphs,e.glyphs),_(e),p){var E=ie(f,p);e.kerningPairs=Ff.parse(E.data,E.offset)}else e.kerningPairs={};if(m){var F=ie(f,m);Ef.parse(F.data,F.offset,e)}if(n){var G=ie(f,n);e.tables.gsub=rf.parse(G.data,G.offset)}if(k){var H=ie(f,k);e.tables.fvar=Df.parse(H.data,H.offset,e.names)}if(s){var I=ie(f,s);e.tables.meta=sf.parse(I.data,I.offset),e.metas=e.tables.meta}return e}function ke(a,b){("undefined"==typeof window?ee:fe)(a,function(a,c){if(a)return b(a);var d;try{d=je(c)}catch(a){return b(a,null)}return b(null,d)})}function le(a){return je(Hb(b("fs").readFileSync(a)))}var me=0,ne=-3,oe=new c,pe=new c,qe=new Uint8Array(30),re=new Uint16Array(30),se=new Uint8Array(30),te=new Uint16Array(30),ue=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),ve=new c,we=new Uint8Array(320),xe=new Uint16Array(16);g(oe,pe),f(qe,re,4,3),f(se,te,2,1),qe[28]=0,re[28]=258;var ye=o;q.prototype.isEmpty=function(){return isNaN(this.x1)||isNaN(this.y1)||isNaN(this.x2)||isNaN(this.y2)},q.prototype.addPoint=function(a,b){"number"==typeof a&&((isNaN(this.x1)||isNaN(this.x2))&&(this.x1=a,this.x2=a),a<this.x1&&(this.x1=a),a>this.x2&&(this.x2=a)),"number"==typeof b&&((isNaN(this.y1)||isNaN(this.y2))&&(this.y1=b,this.y2=b),b<this.y1&&(this.y1=b),b>this.y2&&(this.y2=b))},q.prototype.addX=function(a){this.addPoint(a,null)},q.prototype.addY=function(a){this.addPoint(null,a)},q.prototype.addBezier=function(a,b,c,d,e,f,g,h){var i=this,j=[a,b],k=[c,d],l=[e,f],m=[g,h];this.addPoint(a,b),this.addPoint(g,h);for(var n=0;n<=1;n++){var o=6*j[n]-12*k[n]+6*l[n],q=-3*j[n]+9*k[n]-9*l[n]+3*m[n],r=3*k[n]-3*j[n];if(0!==q){var s=Math.pow(o,2)-4*r*q;if(!(s<0)){var t=(-o+Math.sqrt(s))/(2*q);0<t&&t<1&&(0===n&&i.addX(p(j[n],k[n],l[n],m[n],t)),1===n&&i.addY(p(j[n],k[n],l[n],m[n],t)));var u=(-o-Math.sqrt(s))/(2*q);0<u&&u<1&&(0===n&&i.addX(p(j[n],k[n],l[n],m[n],u)),1===n&&i.addY(p(j[n],k[n],l[n],m[n],u)))}}else{if(0===o)continue;var v=-r/o;0<v&&v<1&&(0===n&&i.addX(p(j[n],k[n],l[n],m[n],v)),1===n&&i.addY(p(j[n],k[n],l[n],m[n],v)))}}},q.prototype.addQuad=function(a,b,c,d,e,f){var g=a+2/3*(c-a),h=b+2/3*(d-b),i=g+1/3*(e-a),j=h+1/3*(f-b);this.addBezier(a,b,g,h,i,j,e,f)},r.prototype.moveTo=function(a,b){this.commands.push({type:"M",x:a,y:b})},r.prototype.lineTo=function(a,b){this.commands.push({type:"L",x:a,y:b})},r.prototype.curveTo=r.prototype.bezierCurveTo=function(a,b,c,d,e,f){this.commands.push({type:"C",x1:a,y1:b,x2:c,y2:d,x:e,y:f})},r.prototype.quadTo=r.prototype.quadraticCurveTo=function(a,b,c,d){this.commands.push({type:"Q",x1:a,y1:b,x:c,y:d})},r.prototype.close=r.prototype.closePath=function(){this.commands.push({type:"Z"})},r.prototype.extend=function(a){if(a.commands)a=a.commands;else if(a instanceof q){var b=a;return this.moveTo(b.x1,b.y1),this.lineTo(b.x2,b.y1),this.lineTo(b.x2,b.y2),this.lineTo(b.x1,b.y2),void this.close()}Array.prototype.push.apply(this.commands,a)},r.prototype.getBoundingBox=function(){for(var a=this,b=new q,c=0,d=0,e=0,f=0,g=0;g<this.commands.length;g++){var h=a.commands[g];switch(h.type){case"M":b.addPoint(h.x,h.y),c=e=h.x,d=f=h.y;break;case"L":b.addPoint(h.x,h.y),e=h.x,f=h.y;break;case"Q":b.addQuad(e,f,h.x1,h.y1,h.x,h.y),e=h.x,f=h.y;break;case"C":b.addBezier(e,f,h.x1,h.y1,h.x2,h.y2,h.x,h.y),e=h.x,f=h.y;break;case"Z":e=c,f=d;break;default:throw new Error("Unexpected path command "+h.type)}}return b.isEmpty()&&b.addPoint(0,0),b},r.prototype.draw=function(a){var b=this;a.beginPath();for(var c=0;c<this.commands.length;c+=1){var d=b.commands[c];"M"===d.type?a.moveTo(d.x,d.y):"L"===d.type?a.lineTo(d.x,d.y):"C"===d.type?a.bezierCurveTo(d.x1,d.y1,d.x2,d.y2,d.x,d.y):"Q"===d.type?a.quadraticCurveTo(d.x1,d.y1,d.x,d.y):"Z"===d.type&&a.closePath()}this.fill&&(a.fillStyle=this.fill,a.fill()),this.stroke&&(a.strokeStyle=this.stroke,a.lineWidth=this.strokeWidth,a.stroke())},r.prototype.toPathData=function(a){function b(b){return Math.round(b)===b?""+Math.round(b):b.toFixed(a)}function c(){for(var a=arguments,c="",d=0;d<arguments.length;d+=1){var e=a[d];e>=0&&d>0&&(c+=" "),c+=b(e)}return c}var d=this;a=void 0!==a?a:2;for(var e="",f=0;f<this.commands.length;f+=1){var g=d.commands[f];"M"===g.type?e+="M"+c(g.x,g.y):"L"===g.type?e+="L"+c(g.x,g.y):"C"===g.type?e+="C"+c(g.x1,g.y1,g.x2,g.y2,g.x,g.y):"Q"===g.type?e+="Q"+c(g.x1,g.y1,g.x,g.y):"Z"===g.type&&(e+="Z")}return e},r.prototype.toSVG=function(a){var b='<path d="';return b+=this.toPathData(a),b+='"',this.fill&&"black"!==this.fill&&(null===this.fill?b+=' fill="none"':b+=' fill="'+this.fill+'"'),this.stroke&&(b+=' stroke="'+this.stroke+'" stroke-width="'+this.strokeWidth+'"'),b+="/>"},r.prototype.toDOMElement=function(a){var b=this.toPathData(a),c=document.createElementNS("http://www.w3.org/2000/svg","path");return c.setAttribute("d",b),c};var ze={fail:s,argument:t,assert:t},Ae=32768,Be=2147483648,Ce={},De={},Ee={};De.BYTE=function(a){return ze.argument(a>=0&&a<=255,"Byte value should be between 0 and 255."),[a]},Ee.BYTE=u(1),De.CHAR=function(a){return[a.charCodeAt(0)]},Ee.CHAR=u(1),De.CHARARRAY=function(a){for(var b=[],c=0;c<a.length;c+=1)b[c]=a.charCodeAt(c);return b},Ee.CHARARRAY=function(a){return a.length},De.USHORT=function(a){return[a>>8&255,255&a]},Ee.USHORT=u(2),De.SHORT=function(a){return a>=Ae&&(a=-(2*Ae-a)),[a>>8&255,255&a]},Ee.SHORT=u(2),De.UINT24=function(a){return[a>>16&255,a>>8&255,255&a]},Ee.UINT24=u(3),De.ULONG=function(a){return[a>>24&255,a>>16&255,a>>8&255,255&a]},Ee.ULONG=u(4),De.LONG=function(a){return a>=Be&&(a=-(2*Be-a)),[a>>24&255,a>>16&255,a>>8&255,255&a]},Ee.LONG=u(4),De.FIXED=De.ULONG,Ee.FIXED=Ee.ULONG,De.FWORD=De.SHORT,Ee.FWORD=Ee.SHORT,De.UFWORD=De.USHORT,Ee.UFWORD=Ee.USHORT,De.LONGDATETIME=function(a){return[0,0,0,0,a>>24&255,a>>16&255,a>>8&255,255&a]},Ee.LONGDATETIME=u(8),De.TAG=function(a){return ze.argument(4===a.length,"Tag should be exactly 4 ASCII characters."),[a.charCodeAt(0),a.charCodeAt(1),a.charCodeAt(2),a.charCodeAt(3)]},Ee.TAG=u(4),De.Card8=De.BYTE,Ee.Card8=Ee.BYTE,De.Card16=De.USHORT,Ee.Card16=Ee.USHORT,De.OffSize=De.BYTE,Ee.OffSize=Ee.BYTE,De.SID=De.USHORT,Ee.SID=Ee.USHORT,De.NUMBER=function(a){return a>=-107&&a<=107?[a+139]:a>=108&&a<=1131?(a-=108,[247+(a>>8),255&a]):a>=-1131&&a<=-108?(a=-a-108,[251+(a>>8),255&a]):a>=-32768&&a<=32767?De.NUMBER16(a):De.NUMBER32(a)},Ee.NUMBER=function(a){return De.NUMBER(a).length},De.NUMBER16=function(a){return[28,a>>8&255,255&a]},Ee.NUMBER16=u(3),De.NUMBER32=function(a){return[29,a>>24&255,a>>16&255,a>>8&255,255&a]},Ee.NUMBER32=u(5),De.REAL=function(a){var b=a.toString(),c=/\.(\d*?)(?:9{5,20}|0{5,20})\d{0,2}(?:e(.+)|$)/.exec(b);if(c){var d=parseFloat("1e"+((c[2]?+c[2]:0)+c[1].length));b=(Math.round(a*d)/d).toString()}for(var e="",f=0,g=b.length;f<g;f+=1){var h=b[f];e+="e"===h?"-"===b[++f]?"c":"b":"."===h?"a":"-"===h?"e":h}e+=1&e.length?"f":"ff";for(var i=[30],j=0,k=e.length;j<k;j+=2)i.push(parseInt(e.substr(j,2),16));return i},Ee.REAL=function(a){return De.REAL(a).length},De.NAME=De.CHARARRAY,Ee.NAME=Ee.CHARARRAY,De.STRING=De.CHARARRAY,Ee.STRING=Ee.CHARARRAY,Ce.UTF8=function(a,b,c){for(var d=[],e=c,f=0;f<e;f++,b+=1)d[f]=a.getUint8(b);return String.fromCharCode.apply(null,d)},Ce.UTF16=function(a,b,c){for(var d=[],e=c/2,f=0;f<e;f++,b+=2)d[f]=a.getUint16(b);return String.fromCharCode.apply(null,d)},De.UTF16=function(a){for(var b=[],c=0;c<a.length;c+=1){var d=a.charCodeAt(c);b[b.length]=d>>8&255,b[b.length]=255&d}return b},Ee.UTF16=function(a){return 2*a.length};var Fe={"x-mac-croatian":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®Š™´¨≠ŽØ∞±≤≥∆µ∂∑∏š∫ªºΩžø¿¡¬√ƒ≈Ć«Č… ÀÃÕŒœĐ—“”‘’÷◊©⁄€‹›Æ»–·‚„‰ÂćÁčÈÍÎÏÌÓÔđÒÚÛÙıˆ˜¯πË˚¸Êæˇ","x-mac-cyrillic":"АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°Ґ£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµґЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю","x-mac-gaelic":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØḂ±≤≥ḃĊċḊḋḞḟĠġṀæøṁṖṗɼƒſṠ«»… ÀÃÕŒœ–—“”‘’ṡẛÿŸṪ€‹›Ŷŷṫ·Ỳỳ⁊ÂÊÁËÈÍÎÏÌÓÔ♣ÒÚÛÙıÝýŴŵẄẅẀẁẂẃ","x-mac-greek":"Ä¹²É³ÖÜ΅àâä΄¨çéèêë£™îï•½‰ôö¦€ùûü†ΓΔΘΛΞΠß®©ΣΪ§≠°·Α±≤≥¥ΒΕΖΗΙΚΜΦΫΨΩάΝ¬ΟΡ≈Τ«»… ΥΧΆΈœ–―“”‘’÷ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ­","x-mac-icelandic":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûüÝ°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€ÐðÞþý·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ","x-mac-inuit":"ᐃᐄᐅᐆᐊᐋᐱᐲᐳᐴᐸᐹᑉᑎᑏᑐᑑᑕᑖᑦᑭᑮᑯᑰᑲᑳᒃᒋᒌᒍᒎᒐᒑ°ᒡᒥᒦ•¶ᒧ®©™ᒨᒪᒫᒻᓂᓃᓄᓅᓇᓈᓐᓯᓰᓱᓲᓴᓵᔅᓕᓖᓗᓘᓚᓛᓪᔨᔩᔪᔫᔭ… ᔮᔾᕕᕖᕗ–—“”‘’ᕘᕙᕚᕝᕆᕇᕈᕉᕋᕌᕐᕿᖀᖁᖂᖃᖄᖅᖏᖐᖑᖒᖓᖔᖕᙱᙲᙳᙴᙵᙶᖖᖠᖡᖢᖣᖤᖥᖦᕼŁł","x-mac-ce":"ÄĀāÉĄÖÜáąČäčĆćéŹźĎíďĒēĖóėôöõúĚěü†°Ę£§•¶ß®©™ę¨≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅņŃ¬√ńŇ∆«»… ňŐÕőŌ–—“”‘’÷◊ōŔŕŘ‹›řŖŗŠ‚„šŚśÁŤťÍŽžŪÓÔūŮÚůŰűŲųÝýķŻŁżĢˇ",macintosh:"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ","x-mac-romanian":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ĂȘ∞±≤≥¥µ∂∑∏π∫ªºΩăș¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›Țț‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ","x-mac-turkish":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸĞğİıŞş‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙˆ˜¯˘˙˚¸˝˛ˇ"};Ce.MACSTRING=function(a,b,c,d){var e=Fe[d];if(void 0!==e){for(var f="",g=0;g<c;g++){var h=a.getUint8(b+g);f+=h<=127?String.fromCharCode(h):e[127&h]}return f}};var Ge,He="function"==typeof WeakMap&&new WeakMap,Ie=function(a){if(!Ge){Ge={};for(var b in Fe)Ge[b]=new String(b)}var c=Ge[a];if(void 0!==c){if(He){var d=He.get(c);if(void 0!==d)return d}var e=Fe[a];if(void 0!==e){for(var f={},g=0;g<e.length;g++)f[e.charCodeAt(g)]=g+128;return He&&He.set(c,f),f}}};De.MACSTRING=function(a,b){var c=Ie(b);if(void 0!==c){for(var d=[],e=0;e<a.length;e++){var f=a.charCodeAt(e);if(f>=128&&void 0===(f=c[f]))return;d[e]=f}return d}},Ee.MACSTRING=function(a,b){var c=De.MACSTRING(a,b);return void 0!==c?c.length:0},De.VARDELTAS=function(a){for(var b=0,c=[];b<a.length;){var d=a[b];b=0===d?w(a,b,c):d>=-128&&d<=127?x(a,b,c):y(a,b,c)}return c},De.INDEX=function(a){for(var b=1,c=[b],d=[],e=0;e<a.length;e+=1){var f=De.OBJECT(a[e]);Array.prototype.push.apply(d,f),b+=f.length,c.push(b)}if(0===d.length)return[0,0];for(var g=[],h=1+Math.floor(Math.log(b)/Math.log(2))/8|0,i=[void 0,De.BYTE,De.USHORT,De.UINT24,De.ULONG][h],j=0;j<c.length;j+=1){var k=i(c[j]);Array.prototype.push.apply(g,k)}return Array.prototype.concat(De.Card16(a.length),De.OffSize(h),g,d)},Ee.INDEX=function(a){return De.INDEX(a).length},De.DICT=function(a){for(var b=[],c=Object.keys(a),d=c.length,e=0;e<d;e+=1){var f=parseInt(c[e],0),g=a[f];b=b.concat(De.OPERAND(g.value,g.type)),b=b.concat(De.OPERATOR(f))}return b},Ee.DICT=function(a){return De.DICT(a).length},De.OPERATOR=function(a){return a<1200?[a]:[12,a-1200]},De.OPERAND=function(a,b){var c=[];if(Array.isArray(b))for(var d=0;d<b.length;d+=1)ze.argument(a.length===b.length,"Not enough arguments given for type"+b),c=c.concat(De.OPERAND(a[d],b[d]));else if("SID"===b)c=c.concat(De.NUMBER(a));else if("offset"===b)c=c.concat(De.NUMBER32(a));else if("number"===b)c=c.concat(De.NUMBER(a));else{if("real"!==b)throw new Error("Unknown operand type "+b);c=c.concat(De.REAL(a))}return c},De.OP=De.BYTE,Ee.OP=Ee.BYTE;var Je="function"==typeof WeakMap&&new WeakMap;De.CHARSTRING=function(a){if(Je){var b=Je.get(a);if(void 0!==b)return b}for(var c=[],d=a.length,e=0;e<d;e+=1){var f=a[e];c=c.concat(De[f.type](f.value))}return Je&&Je.set(a,c),c},Ee.CHARSTRING=function(a){return De.CHARSTRING(a).length},De.OBJECT=function(a){var b=De[a.type];return ze.argument(void 0!==b,"No encoding function for type "+a.type),b(a.value)},Ee.OBJECT=function(a){var b=Ee[a.type];return ze.argument(void 0!==b,"No sizeOf function for type "+a.type),b(a.value)},De.TABLE=function(a){for(var b=[],c=a.fields.length,d=[],e=[],f=0;f<c;f+=1){var g=a.fields[f],h=De[g.type];ze.argument(void 0!==h,"No encoding function for field type "+g.type+" ("+g.name+")");var i=a[g.name];void 0===i&&(i=g.value);var j=h(i);"TABLE"===g.type?(e.push(b.length),b=b.concat([0,0]),d.push(j)):b=b.concat(j)}for(var k=0;k<d.length;k+=1){var l=e[k],m=b.length;ze.argument(m<65536,"Table "+a.tableName+" too big."),b[l]=m>>8,b[l+1]=255&m,b=b.concat(d[k])}return b},Ee.TABLE=function(a){for(var b=0,c=a.fields.length,d=0;d<c;d+=1){var e=a.fields[d],f=Ee[e.type];ze.argument(void 0!==f,"No sizeOf function for field type "+e.type+" ("+e.name+")");var g=a[e.name];void 0===g&&(g=e.value),b+=f(g),"TABLE"===e.type&&(b+=2)}return b},De.RECORD=De.TABLE,Ee.RECORD=Ee.TABLE,De.LITERAL=function(a){return a},Ee.LITERAL=function(a){return a.length},z.prototype.encode=function(){return De.TABLE(this)},z.prototype.sizeOf=function(){return Ee.TABLE(this)},D.prototype=Object.create(z.prototype),D.prototype.constructor=D,E.prototype=Object.create(z.prototype),E.prototype.constructor=E,F.prototype=Object.create(z.prototype),F.prototype.constructor=F,G.prototype=Object.create(z.prototype),G.prototype.constructor=G;var Ke={Table:z,Record:z,Coverage:D,ScriptList:E,FeatureList:F,LookupList:G,ushortList:A,tableList:B,recordList:C},Le={byte:1,uShort:2,short:2,uLong:4,fixed:4,longDateTime:8,tag:4};Q.prototype.parseByte=function(){var a=this.data.getUint8(this.offset+this.relativeOffset);return this.relativeOffset+=1,a},Q.prototype.parseChar=function(){var a=this.data.getInt8(this.offset+this.relativeOffset);return this.relativeOffset+=1,a},Q.prototype.parseCard8=Q.prototype.parseByte,Q.prototype.parseUShort=function(){var a=this.data.getUint16(this.offset+this.relativeOffset);return this.relativeOffset+=2,a},Q.prototype.parseCard16=Q.prototype.parseUShort,Q.prototype.parseSID=Q.prototype.parseUShort,Q.prototype.parseOffset16=Q.prototype.parseUShort,Q.prototype.parseShort=function(){var a=this.data.getInt16(this.offset+this.relativeOffset);return this.relativeOffset+=2,a},Q.prototype.parseF2Dot14=function(){var a=this.data.getInt16(this.offset+this.relativeOffset)/16384;return this.relativeOffset+=2,a},Q.prototype.parseULong=function(){var a=K(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=4,a},Q.prototype.parseFixed=function(){var a=L(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=4,a},Q.prototype.parseString=function(a){var b=this.data,c=this.offset+this.relativeOffset,d="";this.relativeOffset+=a;for(var e=0;e<a;e++)d+=String.fromCharCode(b.getUint8(c+e));return d},Q.prototype.parseTag=function(){return this.parseString(4)},Q.prototype.parseLongDateTime=function(){var a=K(this.data,this.offset+this.relativeOffset+4);return a-=2082844800,this.relativeOffset+=8,a},Q.prototype.parseVersion=function(){var a=I(this.data,this.offset+this.relativeOffset),b=I(this.data,this.offset+this.relativeOffset+2);return this.relativeOffset+=4,a+b/4096/10},Q.prototype.skip=function(a,b){void 0===b&&(b=1),this.relativeOffset+=Le[a]*b},Q.prototype.parseOffset16List=Q.prototype.parseUShortList=function(a){void 0===a&&(a=this.parseUShort());for(var b=new Array(a),c=this.data,d=this.offset+this.relativeOffset,e=0;e<a;e++)b[e]=c.getUint16(d),d+=2;return this.relativeOffset+=2*a,b},Q.prototype.parseShortList=function(a){for(var b=new Array(a),c=this.data,d=this.offset+this.relativeOffset,e=0;e<a;e++)b[e]=c.getInt16(d),d+=2;return this.relativeOffset+=2*a,b},Q.prototype.parseByteList=function(a){for(var b=new Array(a),c=this.data,d=this.offset+this.relativeOffset,e=0;e<a;e++)b[e]=c.getUint8(d++);return this.relativeOffset+=a,b},Q.prototype.parseList=function(a,b){var c=this;b||(b=a,a=this.parseUShort());for(var d=new Array(a),e=0;e<a;e++)d[e]=b.call(c);return d},Q.prototype.parseRecordList=function(a,b){var c=this;b||(b=a,a=this.parseUShort());for(var d=new Array(a),e=Object.keys(b),f=0;f<a;f++){for(var g={},h=0;h<e.length;h++){var i=e[h],j=b[i];g[i]=j.call(c)}d[f]=g}return d},Q.prototype.parseStruct=function(a){var b=this;if("function"==typeof a)return a.call(this);for(var c=Object.keys(a),d={},e=0;e<c.length;e++){var f=c[e],g=a[f];d[f]=g.call(b)}return d},Q.prototype.parsePointer=function(a){var b=this.parseOffset16();if(b>0)return new Q(this.data,this.offset+b).parseStruct(a)},Q.prototype.parseListOfLists=function(a){for(var b=this,c=this.parseOffset16List(),d=c.length,e=this.relativeOffset,f=new Array(d),g=0;g<d;g++){var h=c[g];if(0!==h)if(b.relativeOffset=h,a){for(var i=b.parseOffset16List(),j=new Array(i.length),k=0;k<i.length;k++)b.relativeOffset=h+i[k],j[k]=a.call(b);f[g]=j}else f[g]=b.parseUShortList();else f[g]=void 0}return this.relativeOffset=e,f},Q.prototype.parseCoverage=function(){var a=this,b=this.offset+this.relativeOffset,c=this.parseUShort(),d=this.parseUShort();if(1===c)return{format:1,glyphs:this.parseUShortList(d)};if(2===c){for(var e=new Array(d),f=0;f<d;f++)e[f]={start:a.parseUShort(),end:a.parseUShort(),index:a.parseUShort()};return{format:2,ranges:e}}throw new Error("0x"+b.toString(16)+": Coverage format must be 1 or 2.")},Q.prototype.parseClassDef=function(){var a=this.offset+this.relativeOffset,b=this.parseUShort();if(1===b)return{format:1,startGlyph:this.parseUShort(),classes:this.parseUShortList()};if(2===b)return{format:2,ranges:this.parseRecordList({start:Q.uShort,end:Q.uShort,classId:Q.uShort})};throw new Error("0x"+a.toString(16)+": ClassDef format must be 1 or 2.")},Q.list=function(a,b){return function(){return this.parseList(a,b)}},Q.recordList=function(a,b){return function(){return this.parseRecordList(a,b)}},Q.pointer=function(a){return function(){return this.parsePointer(a)}},Q.tag=Q.prototype.parseTag,Q.byte=Q.prototype.parseByte,Q.uShort=Q.offset16=Q.prototype.parseUShort,Q.uShortList=Q.prototype.parseUShortList,Q.struct=Q.prototype.parseStruct,Q.coverage=Q.prototype.parseCoverage,Q.classDef=Q.prototype.parseClassDef;var Me={reserved:Q.uShort,reqFeatureIndex:Q.uShort,featureIndexes:Q.uShortList};Q.prototype.parseScriptList=function(){return this.parsePointer(Q.recordList({tag:Q.tag,script:Q.pointer({defaultLangSys:Q.pointer(Me),langSysRecords:Q.recordList({tag:Q.tag,langSys:Q.pointer(Me)})})}))},Q.prototype.parseFeatureList=function(){return this.parsePointer(Q.recordList({tag:Q.tag,feature:Q.pointer({featureParams:Q.offset16,lookupListIndexes:Q.uShortList})}))},Q.prototype.parseLookupList=function(a){return this.parsePointer(Q.list(Q.pointer(function(){var b=this.parseUShort();ze.argument(1<=b&&b<=8,"GSUB lookup type "+b+" unknown.");var c=this.parseUShort(),d=16&c;return{lookupType:b,lookupFlag:c,subtables:this.parseList(Q.pointer(a[b])),markFilteringSet:d?this.parseUShort():void 0}})))};var Ne={getByte:H,getCard8:H,getUShort:I,getCard16:I,getShort:J,getULong:K,getFixed:L,getTag:M,getOffset:N,getBytes:O,bytesToString:P,Parser:Q},Oe={parse:T,make:W
},Pe=[".notdef","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","endash","dagger","daggerdbl","periodcentered","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","questiondown","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","ring","cedilla","hungarumlaut","ogonek","caron","emdash","AE","ordfeminine","Lslash","Oslash","OE","ordmasculine","ae","dotlessi","lslash","oslash","oe","germandbls","onesuperior","logicalnot","mu","trademark","Eth","onehalf","plusminus","Thorn","onequarter","divide","brokenbar","degree","thorn","threequarters","twosuperior","registered","minus","eth","multiply","threesuperior","copyright","Aacute","Acircumflex","Adieresis","Agrave","Aring","Atilde","Ccedilla","Eacute","Ecircumflex","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Ntilde","Oacute","Ocircumflex","Odieresis","Ograve","Otilde","Scaron","Uacute","Ucircumflex","Udieresis","Ugrave","Yacute","Ydieresis","Zcaron","aacute","acircumflex","adieresis","agrave","aring","atilde","ccedilla","eacute","ecircumflex","edieresis","egrave","iacute","icircumflex","idieresis","igrave","ntilde","oacute","ocircumflex","odieresis","ograve","otilde","scaron","uacute","ucircumflex","udieresis","ugrave","yacute","ydieresis","zcaron","exclamsmall","Hungarumlautsmall","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","266 ff","onedotenleader","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","commasuperior","threequartersemdash","periodsuperior","questionsmall","asuperior","bsuperior","centsuperior","dsuperior","esuperior","isuperior","lsuperior","msuperior","nsuperior","osuperior","rsuperior","ssuperior","tsuperior","ff","ffi","ffl","parenleftinferior","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","exclamdownsmall","centoldstyle","Lslashsmall","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","Dotaccentsmall","Macronsmall","figuredash","hypheninferior","Ogoneksmall","Ringsmall","Cedillasmall","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","zerosuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall","001.000","001.001","001.002","001.003","Black","Bold","Book","Light","Medium","Regular","Roman","Semibold"],Qe=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","","endash","dagger","daggerdbl","periodcentered","","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","","questiondown","","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","","ring","cedilla","","hungarumlaut","ogonek","caron","emdash","","","","","","","","","","","","","","","","","AE","","ordfeminine","","","","","Lslash","Oslash","OE","ordmasculine","","","","","","ae","","","","dotlessi","","","lslash","oslash","oe","germandbls"],Re=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclamsmall","Hungarumlautsmall","","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","twodotenleader","onedotenleader","comma","hyphen","period","fraction","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","colon","semicolon","commasuperior","threequartersemdash","periodsuperior","questionsmall","","asuperior","bsuperior","centsuperior","dsuperior","esuperior","","","isuperior","","","lsuperior","msuperior","nsuperior","osuperior","","","rsuperior","ssuperior","tsuperior","","ff","fi","fl","ffi","ffl","parenleftinferior","","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","exclamdownsmall","centoldstyle","Lslashsmall","","","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","","Dotaccentsmall","","","Macronsmall","","","figuredash","hypheninferior","","","Ogoneksmall","Ringsmall","Cedillasmall","","","","onequarter","onehalf","threequarters","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","","","zerosuperior","onesuperior","twosuperior","threesuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall"],Se=[".notdef",".null","nonmarkingreturn","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quotesingle","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","grave","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","Adieresis","Aring","Ccedilla","Eacute","Ntilde","Odieresis","Udieresis","aacute","agrave","acircumflex","adieresis","atilde","aring","ccedilla","eacute","egrave","ecircumflex","edieresis","iacute","igrave","icircumflex","idieresis","ntilde","oacute","ograve","ocircumflex","odieresis","otilde","uacute","ugrave","ucircumflex","udieresis","dagger","degree","cent","sterling","section","bullet","paragraph","germandbls","registered","copyright","trademark","acute","dieresis","notequal","AE","Oslash","infinity","plusminus","lessequal","greaterequal","yen","mu","partialdiff","summation","product","pi","integral","ordfeminine","ordmasculine","Omega","ae","oslash","questiondown","exclamdown","logicalnot","radical","florin","approxequal","Delta","guillemotleft","guillemotright","ellipsis","nonbreakingspace","Agrave","Atilde","Otilde","OE","oe","endash","emdash","quotedblleft","quotedblright","quoteleft","quoteright","divide","lozenge","ydieresis","Ydieresis","fraction","currency","guilsinglleft","guilsinglright","fi","fl","daggerdbl","periodcentered","quotesinglbase","quotedblbase","perthousand","Acircumflex","Ecircumflex","Aacute","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Oacute","Ocircumflex","apple","Ograve","Uacute","Ucircumflex","Ugrave","dotlessi","circumflex","tilde","macron","breve","dotaccent","ring","cedilla","hungarumlaut","ogonek","caron","Lslash","lslash","Scaron","scaron","Zcaron","zcaron","brokenbar","Eth","eth","Yacute","yacute","Thorn","thorn","minus","multiply","onesuperior","twosuperior","threesuperior","onehalf","onequarter","threequarters","franc","Gbreve","gbreve","Idotaccent","Scedilla","scedilla","Cacute","cacute","Ccaron","ccaron","dcroat"];X.prototype.charToGlyphIndex=function(a){var b=a.charCodeAt(0),c=this.font.glyphs;if(c)for(var d=0;d<c.length;d+=1)for(var e=c.get(d),f=0;f<e.unicodes.length;f+=1)if(e.unicodes[f]===b)return d;return null},Y.prototype.charToGlyphIndex=function(a){return this.cmap.glyphIndexMap[a.charCodeAt(0)]||0},Z.prototype.charToGlyphIndex=function(a){var b=a.charCodeAt(0),c=this.encoding[b];return this.charset.indexOf(c)},$.prototype.nameToGlyphIndex=function(a){return this.names.indexOf(a)},$.prototype.glyphIndexToName=function(a){return this.names[a]};var Te={line:aa},Ue={getPath:fa,parse:ha};ja.prototype.bindConstructorValues=function(a){this.index=a.index||0,this.name=a.name||null,this.unicode=a.unicode||void 0,this.unicodes=a.unicodes||void 0!==a.unicode?[a.unicode]:[],a.xMin&&(this.xMin=a.xMin),a.yMin&&(this.yMin=a.yMin),a.xMax&&(this.xMax=a.xMax),a.yMax&&(this.yMax=a.yMax),a.advanceWidth&&(this.advanceWidth=a.advanceWidth),Object.defineProperty(this,"path",ia(this,a.path))},ja.prototype.addUnicode=function(a){0===this.unicodes.length&&(this.unicode=a),this.unicodes.push(a)},ja.prototype.getBoundingBox=function(){return this.path.getBoundingBox()},ja.prototype.getPath=function(a,b,c,d,e){a=void 0!==a?a:0,b=void 0!==b?b:0,c=void 0!==c?c:72;var f,g;d||(d={});var h=d.xScale,i=d.yScale;if(d.hinting&&e&&e.hinting&&(g=this.path&&e.hinting.exec(this,c)),g)f=Ue.getPath(g).commands,a=Math.round(a),b=Math.round(b),h=i=1;else{f=this.path.commands;var j=1/this.path.unitsPerEm*c;void 0===h&&(h=j),void 0===i&&(i=j)}for(var k=new r,l=0;l<f.length;l+=1){var m=f[l];"M"===m.type?k.moveTo(a+m.x*h,b+-m.y*i):"L"===m.type?k.lineTo(a+m.x*h,b+-m.y*i):"Q"===m.type?k.quadraticCurveTo(a+m.x1*h,b+-m.y1*i,a+m.x*h,b+-m.y*i):"C"===m.type?k.curveTo(a+m.x1*h,b+-m.y1*i,a+m.x2*h,b+-m.y2*i,a+m.x*h,b+-m.y*i):"Z"===m.type&&k.closePath()}return k},ja.prototype.getContours=function(){var a=this;if(void 0===this.points)return[];for(var b=[],c=[],d=0;d<this.points.length;d+=1){var e=a.points[d];c.push(e),e.lastPointOfContour&&(b.push(c),c=[])}return ze.argument(0===c.length,"There are still points left in the current contour."),b},ja.prototype.getMetrics=function(){for(var a=this.path.commands,b=[],c=[],d=0;d<a.length;d+=1){var e=a[d];"Z"!==e.type&&(b.push(e.x),c.push(e.y)),"Q"!==e.type&&"C"!==e.type||(b.push(e.x1),c.push(e.y1)),"C"===e.type&&(b.push(e.x2),c.push(e.y2))}var f={xMin:Math.min.apply(null,b),yMin:Math.min.apply(null,c),xMax:Math.max.apply(null,b),yMax:Math.max.apply(null,c),leftSideBearing:this.leftSideBearing};return isFinite(f.xMin)||(f.xMin=0),isFinite(f.xMax)||(f.xMax=this.advanceWidth),isFinite(f.yMin)||(f.yMin=0),isFinite(f.yMax)||(f.yMax=0),f.rightSideBearing=this.advanceWidth-f.leftSideBearing-(f.xMax-f.xMin),f},ja.prototype.draw=function(a,b,c,d,e){this.getPath(b,c,d,e).draw(a)},ja.prototype.drawPoints=function(a,b,c,d){function e(b,c,d,e){var f=2*Math.PI;a.beginPath();for(var g=0;g<b.length;g+=1)a.moveTo(c+b[g].x*e,d+b[g].y*e),a.arc(c+b[g].x*e,d+b[g].y*e,2,0,f,!1);a.closePath(),a.fill()}b=void 0!==b?b:0,c=void 0!==c?c:0,d=void 0!==d?d:24;for(var f=1/this.path.unitsPerEm*d,g=[],h=[],i=this.path,j=0;j<i.commands.length;j+=1){var k=i.commands[j];void 0!==k.x&&g.push({x:k.x,y:-k.y}),void 0!==k.x1&&h.push({x:k.x1,y:-k.y1}),void 0!==k.x2&&h.push({x:k.x2,y:-k.y2})}a.fillStyle="blue",e(g,b,c,f),a.fillStyle="red",e(h,b,c,f)},ja.prototype.drawMetrics=function(a,b,c,d){var e;b=void 0!==b?b:0,c=void 0!==c?c:0,d=void 0!==d?d:24,e=1/this.path.unitsPerEm*d,a.lineWidth=1,a.strokeStyle="black",Te.line(a,b,-1e4,b,1e4),Te.line(a,-1e4,c,1e4,c);var f=this.xMin||0,g=this.yMin||0,h=this.xMax||0,i=this.yMax||0,j=this.advanceWidth||0;a.strokeStyle="blue",Te.line(a,b+f*e,-1e4,b+f*e,1e4),Te.line(a,b+h*e,-1e4,b+h*e,1e4),Te.line(a,-1e4,c+-g*e,1e4,c+-g*e),Te.line(a,-1e4,c+-i*e,1e4,c+-i*e),a.strokeStyle="green",Te.line(a,b+j*e,-1e4,b+j*e,1e4)},la.prototype.get=function(a){return"function"==typeof this.glyphs[a]&&(this.glyphs[a]=this.glyphs[a]()),this.glyphs[a]},la.prototype.push=function(a,b){this.glyphs[a]=b,this.length++};var Ve={GlyphSet:la,glyphLoader:ma,ttfGlyphLoader:na,cffGlyphLoader:oa},We=[{name:"version",op:0,type:"SID"},{name:"notice",op:1,type:"SID"},{name:"copyright",op:1200,type:"SID"},{name:"fullName",op:2,type:"SID"},{name:"familyName",op:3,type:"SID"},{name:"weight",op:4,type:"SID"},{name:"isFixedPitch",op:1201,type:"number",value:0},{name:"italicAngle",op:1202,type:"number",value:0},{name:"underlinePosition",op:1203,type:"number",value:-100},{name:"underlineThickness",op:1204,type:"number",value:50},{name:"paintType",op:1205,type:"number",value:0},{name:"charstringType",op:1206,type:"number",value:2},{name:"fontMatrix",op:1207,type:["real","real","real","real","real","real"],value:[.001,0,0,.001,0,0]},{name:"uniqueId",op:13,type:"number"},{name:"fontBBox",op:5,type:["number","number","number","number"],value:[0,0,0,0]},{name:"strokeWidth",op:1208,type:"number",value:0},{name:"xuid",op:14,type:[],value:null},{name:"charset",op:15,type:"offset",value:0},{name:"encoding",op:16,type:"offset",value:0},{name:"charStrings",op:17,type:"offset",value:0},{name:"private",op:18,type:["number","offset"],value:[0,0]},{name:"ros",op:1230,type:["SID","SID","number"]},{name:"cidFontVersion",op:1231,type:"number",value:0},{name:"cidFontRevision",op:1232,type:"number",value:0},{name:"cidFontType",op:1233,type:"number",value:0},{name:"cidCount",op:1234,type:"number",value:8720},{name:"uidBase",op:1235,type:"number"},{name:"fdArray",op:1236,type:"offset"},{name:"fdSelect",op:1237,type:"offset"},{name:"fontName",op:1238,type:"SID"}],Xe=[{name:"subrs",op:19,type:"offset",value:0},{name:"defaultWidthX",op:20,type:"number",value:0},{name:"nominalWidthX",op:21,type:"number",value:0}],Ye={parse:Ga,make:Ta},Ze={parse:Ua,make:Va},$e={parse:Wa,make:Xa},_e={parse:Ya,make:Za},af={make:$a,parse:_a},bf={parse:ab,make:bb},cf=["copyright","fontFamily","fontSubfamily","uniqueID","fullName","version","postScriptName","trademark","manufacturer","designer","description","manufacturerURL","designerURL","license","licenseURL","reserved","preferredFamily","preferredSubfamily","compatibleFullName","sampleText","postScriptFindFontName","wwsFamily","wwsSubfamily"],df={0:"en",1:"fr",2:"de",3:"it",4:"nl",5:"sv",6:"es",7:"da",8:"pt",9:"no",10:"he",11:"ja",12:"ar",13:"fi",14:"el",15:"is",16:"mt",17:"tr",18:"hr",19:"zh-Hant",20:"ur",21:"hi",22:"th",23:"ko",24:"lt",25:"pl",26:"hu",27:"es",28:"lv",29:"se",30:"fo",31:"fa",32:"ru",33:"zh",34:"nl-BE",35:"ga",36:"sq",37:"ro",38:"cz",39:"sk",40:"si",41:"yi",42:"sr",43:"mk",44:"bg",45:"uk",46:"be",47:"uz",48:"kk",49:"az-Cyrl",50:"az-Arab",51:"hy",52:"ka",53:"mo",54:"ky",55:"tg",56:"tk",57:"mn-CN",58:"mn",59:"ps",60:"ks",61:"ku",62:"sd",63:"bo",64:"ne",65:"sa",66:"mr",67:"bn",68:"as",69:"gu",70:"pa",71:"or",72:"ml",73:"kn",74:"ta",75:"te",76:"si",77:"my",78:"km",79:"lo",80:"vi",81:"id",82:"tl",83:"ms",84:"ms-Arab",85:"am",86:"ti",87:"om",88:"so",89:"sw",90:"rw",91:"rn",92:"ny",93:"mg",94:"eo",128:"cy",129:"eu",130:"ca",131:"la",132:"qu",133:"gn",134:"ay",135:"tt",136:"ug",137:"dz",138:"jv",139:"su",140:"gl",141:"af",142:"br",143:"iu",144:"gd",145:"gv",146:"ga",147:"to",148:"el-polyton",149:"kl",150:"az",151:"nn"},ef={0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:5,11:1,12:4,13:0,14:6,15:0,16:0,17:0,18:0,19:2,20:4,21:9,22:21,23:3,24:29,25:29,26:29,27:29,28:29,29:0,30:0,31:4,32:7,33:25,34:0,35:0,36:0,37:0,38:29,39:29,40:0,41:5,42:7,43:7,44:7,45:7,46:7,47:7,48:7,49:7,50:4,51:24,52:23,53:7,54:7,55:7,56:7,57:27,58:7,59:4,60:4,61:4,62:4,63:26,64:9,65:9,66:9,67:13,68:13,69:11,70:10,71:12,72:17,73:16,74:14,75:15,76:18,77:19,78:20,79:22,80:30,81:0,82:0,83:0,84:4,85:28,86:28,87:28,88:0,89:0,90:0,91:0,92:0,93:0,94:0,128:0,129:0,130:0,131:0,132:0,133:0,134:0,135:7,136:4,137:26,138:0,139:0,140:0,141:0,142:0,143:28,144:0,145:0,146:0,147:0,148:6,149:0,150:0,151:0},ff={1078:"af",1052:"sq",1156:"gsw",1118:"am",5121:"ar-DZ",15361:"ar-BH",3073:"ar",2049:"ar-IQ",11265:"ar-JO",13313:"ar-KW",12289:"ar-LB",4097:"ar-LY",6145:"ary",8193:"ar-OM",16385:"ar-QA",1025:"ar-SA",10241:"ar-SY",7169:"aeb",14337:"ar-AE",9217:"ar-YE",1067:"hy",1101:"as",2092:"az-Cyrl",1068:"az",1133:"ba",1069:"eu",1059:"be",2117:"bn",1093:"bn-IN",8218:"bs-Cyrl",5146:"bs",1150:"br",1026:"bg",1027:"ca",3076:"zh-HK",5124:"zh-MO",2052:"zh",4100:"zh-SG",1028:"zh-TW",1155:"co",1050:"hr",4122:"hr-BA",1029:"cs",1030:"da",1164:"prs",1125:"dv",2067:"nl-BE",1043:"nl",3081:"en-AU",10249:"en-BZ",4105:"en-CA",9225:"en-029",16393:"en-IN",6153:"en-IE",8201:"en-JM",17417:"en-MY",5129:"en-NZ",13321:"en-PH",18441:"en-SG",7177:"en-ZA",11273:"en-TT",2057:"en-GB",1033:"en",12297:"en-ZW",1061:"et",1080:"fo",1124:"fil",1035:"fi",2060:"fr-BE",3084:"fr-CA",1036:"fr",5132:"fr-LU",6156:"fr-MC",4108:"fr-CH",1122:"fy",1110:"gl",1079:"ka",3079:"de-AT",1031:"de",5127:"de-LI",4103:"de-LU",2055:"de-CH",1032:"el",1135:"kl",1095:"gu",1128:"ha",1037:"he",1081:"hi",1038:"hu",1039:"is",1136:"ig",1057:"id",1117:"iu",2141:"iu-Latn",2108:"ga",1076:"xh",1077:"zu",1040:"it",2064:"it-CH",1041:"ja",1099:"kn",1087:"kk",1107:"km",1158:"quc",1159:"rw",1089:"sw",1111:"kok",1042:"ko",1088:"ky",1108:"lo",1062:"lv",1063:"lt",2094:"dsb",1134:"lb",1071:"mk",2110:"ms-BN",1086:"ms",1100:"ml",1082:"mt",1153:"mi",1146:"arn",1102:"mr",1148:"moh",1104:"mn",2128:"mn-CN",1121:"ne",1044:"nb",2068:"nn",1154:"oc",1096:"or",1123:"ps",1045:"pl",1046:"pt",2070:"pt-PT",1094:"pa",1131:"qu-BO",2155:"qu-EC",3179:"qu",1048:"ro",1047:"rm",1049:"ru",9275:"smn",4155:"smj-NO",5179:"smj",3131:"se-FI",1083:"se",2107:"se-SE",8251:"sms",6203:"sma-NO",7227:"sms",1103:"sa",7194:"sr-Cyrl-BA",3098:"sr",6170:"sr-Latn-BA",2074:"sr-Latn",1132:"nso",1074:"tn",1115:"si",1051:"sk",1060:"sl",11274:"es-AR",16394:"es-BO",13322:"es-CL",9226:"es-CO",5130:"es-CR",7178:"es-DO",12298:"es-EC",17418:"es-SV",4106:"es-GT",18442:"es-HN",2058:"es-MX",19466:"es-NI",6154:"es-PA",15370:"es-PY",10250:"es-PE",20490:"es-PR",3082:"es",1034:"es",21514:"es-US",14346:"es-UY",8202:"es-VE",2077:"sv-FI",1053:"sv",1114:"syr",1064:"tg",2143:"tzm",1097:"ta",1092:"tt",1098:"te",1054:"th",1105:"bo",1055:"tr",1090:"tk",1152:"ug",1058:"uk",1070:"hsb",1056:"ur",2115:"uz-Cyrl",1091:"uz",1066:"vi",1106:"cy",1160:"wo",1157:"sah",1144:"ii",1130:"yo"},gf="utf-16",hf={0:"macintosh",1:"x-mac-japanese",2:"x-mac-chinesetrad",3:"x-mac-korean",6:"x-mac-greek",7:"x-mac-cyrillic",9:"x-mac-devanagai",10:"x-mac-gurmukhi",11:"x-mac-gujarati",12:"x-mac-oriya",13:"x-mac-bengali",14:"x-mac-tamil",15:"x-mac-telugu",16:"x-mac-kannada",17:"x-mac-malayalam",18:"x-mac-sinhalese",19:"x-mac-burmese",20:"x-mac-khmer",21:"x-mac-thai",22:"x-mac-lao",23:"x-mac-georgian",24:"x-mac-armenian",25:"x-mac-chinesesimp",26:"x-mac-tibetan",27:"x-mac-mongolian",28:"x-mac-ethiopic",29:"x-mac-ce",30:"x-mac-vietnamese",31:"x-mac-extarabic"},jf={15:"x-mac-icelandic",17:"x-mac-turkish",18:"x-mac-croatian",24:"x-mac-ce",25:"x-mac-ce",26:"x-mac-ce",27:"x-mac-ce",28:"x-mac-ce",30:"x-mac-icelandic",37:"x-mac-romanian",38:"x-mac-ce",39:"x-mac-ce",40:"x-mac-ce",143:"x-mac-inuit",146:"x-mac-gaelic"},kf={parse:eb,make:jb},lf=[{begin:0,end:127},{begin:128,end:255},{begin:256,end:383},{begin:384,end:591},{begin:592,end:687},{begin:688,end:767},{begin:768,end:879},{begin:880,end:1023},{begin:11392,end:11519},{begin:1024,end:1279},{begin:1328,end:1423},{begin:1424,end:1535},{begin:42240,end:42559},{begin:1536,end:1791},{begin:1984,end:2047},{begin:2304,end:2431},{begin:2432,end:2559},{begin:2560,end:2687},{begin:2688,end:2815},{begin:2816,end:2943},{begin:2944,end:3071},{begin:3072,end:3199},{begin:3200,end:3327},{begin:3328,end:3455},{begin:3584,end:3711},{begin:3712,end:3839},{begin:4256,end:4351},{begin:6912,end:7039},{begin:4352,end:4607},{begin:7680,end:7935},{begin:7936,end:8191},{begin:8192,end:8303},{begin:8304,end:8351},{begin:8352,end:8399},{begin:8400,end:8447},{begin:8448,end:8527},{begin:8528,end:8591},{begin:8592,end:8703},{begin:8704,end:8959},{begin:8960,end:9215},{begin:9216,end:9279},{begin:9280,end:9311},{begin:9312,end:9471},{begin:9472,end:9599},{begin:9600,end:9631},{begin:9632,end:9727},{begin:9728,end:9983},{begin:9984,end:10175},{begin:12288,end:12351},{begin:12352,end:12447},{begin:12448,end:12543},{begin:12544,end:12591},{begin:12592,end:12687},{begin:43072,end:43135},{begin:12800,end:13055},{begin:13056,end:13311},{begin:44032,end:55215},{begin:55296,end:57343},{begin:67840,end:67871},{begin:19968,end:40959},{begin:57344,end:63743},{begin:12736,end:12783},{begin:64256,end:64335},{begin:64336,end:65023},{begin:65056,end:65071},{begin:65040,end:65055},{begin:65104,end:65135},{begin:65136,end:65279},{begin:65280,end:65519},{begin:65520,end:65535},{begin:3840,end:4095},{begin:1792,end:1871},{begin:1920,end:1983},{begin:3456,end:3583},{begin:4096,end:4255},{begin:4608,end:4991},{begin:5024,end:5119},{begin:5120,end:5759},{begin:5760,end:5791},{begin:5792,end:5887},{begin:6016,end:6143},{begin:6144,end:6319},{begin:10240,end:10495},{begin:40960,end:42127},{begin:5888,end:5919},{begin:66304,end:66351},{begin:66352,end:66383},{begin:66560,end:66639},{begin:118784,end:119039},{begin:119808,end:120831},{begin:1044480,end:1048573},{begin:65024,end:65039},{begin:917504,end:917631},{begin:6400,end:6479},{begin:6480,end:6527},{begin:6528,end:6623},{begin:6656,end:6687},{begin:11264,end:11359},{begin:11568,end:11647},{begin:19904,end:19967},{begin:43008,end:43055},{begin:65536,end:65663},{begin:65856,end:65935},{begin:66432,end:66463},{begin:66464,end:66527},{begin:66640,end:66687},{begin:66688,end:66735},{begin:67584,end:67647},{begin:68096,end:68191},{begin:119552,end:119647},{begin:73728,end:74751},{begin:119648,end:119679},{begin:7040,end:7103},{begin:7168,end:7247},{begin:7248,end:7295},{begin:43136,end:43231},{begin:43264,end:43311},{begin:43312,end:43359},{begin:43520,end:43615},{begin:65936,end:65999},{begin:66e3,end:66047},{begin:66208,end:66271},{begin:127024,end:127135}],mf={parse:lb,make:mb,unicodeRanges:lf,getUnicodeRange:kb},nf={parse:nb,make:ob},of=new Array(9);of[1]=function(){var a=this.offset+this.relativeOffset,b=this.parseUShort();return 1===b?{substFormat:1,coverage:this.parsePointer(Q.coverage),deltaGlyphId:this.parseUShort()}:2===b?{substFormat:2,coverage:this.parsePointer(Q.coverage),substitute:this.parseOffset16List()}:void ze.assert(!1,"0x"+a.toString(16)+": lookup type 1 format must be 1 or 2.")},of[2]=function(){var a=this.parseUShort();return ze.argument(1===a,"GSUB Multiple Substitution Subtable identifier-format must be 1"),{substFormat:a,coverage:this.parsePointer(Q.coverage),sequences:this.parseListOfLists()}},of[3]=function(){var a=this.parseUShort();return ze.argument(1===a,"GSUB Alternate Substitution Subtable identifier-format must be 1"),{substFormat:a,coverage:this.parsePointer(Q.coverage),alternateSets:this.parseListOfLists()}},of[4]=function(){var a=this.parseUShort();return ze.argument(1===a,"GSUB ligature table identifier-format must be 1"),{substFormat:a,coverage:this.parsePointer(Q.coverage),ligatureSets:this.parseListOfLists(function(){return{ligGlyph:this.parseUShort(),components:this.parseUShortList(this.parseUShort()-1)}})}};var pf={sequenceIndex:Q.uShort,lookupListIndex:Q.uShort};of[5]=function(){var a=this.offset+this.relativeOffset,b=this.parseUShort();if(1===b)return{substFormat:b,coverage:this.parsePointer(Q.coverage),ruleSets:this.parseListOfLists(function(){var a=this.parseUShort(),b=this.parseUShort();return{input:this.parseUShortList(a-1),lookupRecords:this.parseRecordList(b,pf)}})};if(2===b)return{substFormat:b,coverage:this.parsePointer(Q.coverage),classDef:this.parsePointer(Q.classDef),classSets:this.parseListOfLists(function(){var a=this.parseUShort(),b=this.parseUShort();return{classes:this.parseUShortList(a-1),lookupRecords:this.parseRecordList(b,pf)}})};if(3===b){var c=this.parseUShort(),d=this.parseUShort();return{substFormat:b,coverages:this.parseList(c,Q.pointer(Q.coverage)),lookupRecords:this.parseRecordList(d,pf)}}ze.assert(!1,"0x"+a.toString(16)+": lookup type 5 format must be 1, 2 or 3.")},of[6]=function(){var a=this.offset+this.relativeOffset,b=this.parseUShort();return 1===b?{substFormat:1,coverage:this.parsePointer(Q.coverage),chainRuleSets:this.parseListOfLists(function(){return{backtrack:this.parseUShortList(),input:this.parseUShortList(this.parseShort()-1),lookahead:this.parseUShortList(),lookupRecords:this.parseRecordList(pf)}})}:2===b?{substFormat:2,coverage:this.parsePointer(Q.coverage),backtrackClassDef:this.parsePointer(Q.classDef),inputClassDef:this.parsePointer(Q.classDef),lookaheadClassDef:this.parsePointer(Q.classDef),chainClassSet:this.parseListOfLists(function(){return{backtrack:this.parseUShortList(),input:this.parseUShortList(this.parseShort()-1),lookahead:this.parseUShortList(),lookupRecords:this.parseRecordList(pf)}})}:3===b?{substFormat:3,backtrackCoverage:this.parseList(Q.pointer(Q.coverage)),inputCoverage:this.parseList(Q.pointer(Q.coverage)),lookaheadCoverage:this.parseList(Q.pointer(Q.coverage)),lookupRecords:this.parseRecordList(pf)}:void ze.assert(!1,"0x"+a.toString(16)+": lookup type 6 format must be 1, 2 or 3.")},of[7]=function(){var a=this.parseUShort();ze.argument(1===a,"GSUB Extension Substitution subtable identifier-format must be 1");var b=this.parseUShort(),c=new Q(this.data,this.offset+this.parseULong());return{substFormat:1,lookupType:b,extension:of[b].call(c)}},of[8]=function(){var a=this.parseUShort();return ze.argument(1===a,"GSUB Reverse Chaining Contextual Single Substitution Subtable identifier-format must be 1"),{substFormat:a,coverage:this.parsePointer(Q.coverage),backtrackCoverage:this.parseList(Q.pointer(Q.coverage)),lookaheadCoverage:this.parseList(Q.pointer(Q.coverage)),substitutes:this.parseUShortList()}};var qf=new Array(9);qf[1]=function(a){return 1===a.substFormat?new Ke.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new Ke.Coverage(a.coverage)},{name:"deltaGlyphID",type:"USHORT",value:a.deltaGlyphId}]):new Ke.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:2},{name:"coverage",type:"TABLE",value:new Ke.Coverage(a.coverage)}].concat(Ke.ushortList("substitute",a.substitute)))},qf[3]=function(a){return ze.assert(1===a.substFormat,"Lookup type 3 substFormat must be 1."),new Ke.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new Ke.Coverage(a.coverage)}].concat(Ke.tableList("altSet",a.alternateSets,function(a){return new Ke.Table("alternateSetTable",Ke.ushortList("alternate",a))})))},qf[4]=function(a){return ze.assert(1===a.substFormat,"Lookup type 4 substFormat must be 1."),new Ke.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new Ke.Coverage(a.coverage)}].concat(Ke.tableList("ligSet",a.ligatureSets,function(a){return new Ke.Table("ligatureSetTable",Ke.tableList("ligature",a,function(a){return new Ke.Table("ligatureTable",[{name:"ligGlyph",type:"USHORT",value:a.ligGlyph}].concat(Ke.ushortList("component",a.components,a.components.length+1)))}))})))};var rf={parse:pb,make:qb},sf={parse:rb,make:sb},tf={make:wb,fontToTable:zb,computeCheckSum:ub};Cb.prototype={searchTag:Ab,binSearch:Bb,getTable:function(a){var b=this.font.tables[this.tableName];return!b&&a&&(b=this.font.tables[this.tableName]=this.createDefaultTable()),b},getScriptNames:function(){var a=this.getTable();return a?a.scripts.map(function(a){return a.tag}):[]},getDefaultScriptName:function(){var a=this.getTable();if(a){for(var b=!1,c=0;c<a.scripts.length;c++){var d=a.scripts[c].tag;if("DFLT"===d)return d;"latn"===d&&(b=!0)}return b?"latn":void 0}},getScriptTable:function(a,b){var c=this.getTable(b);if(c){a=a||"DFLT";var d=c.scripts,e=Ab(c.scripts,a);if(e>=0)return d[e].script;if(b){var f={tag:a,script:{defaultLangSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]},langSysRecords:[]}};return d.splice(-1-e,0,f),f.script}}},getLangSysTable:function(a,b,c){var d=this.getScriptTable(a,c);if(d){if(!b||"dflt"===b||"DFLT"===b)return d.defaultLangSys;var e=Ab(d.langSysRecords,b);if(e>=0)return d.langSysRecords[e].langSys;if(c){var f={tag:b,langSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]}};return d.langSysRecords.splice(-1-e,0,f),f.langSys}}},getFeatureTable:function(a,b,c,d){var e=this.getLangSysTable(a,b,d);if(e){for(var f,g=e.featureIndexes,h=this.font.tables[this.tableName].features,i=0;i<g.length;i++)if(f=h[g[i]],f.tag===c)return f.feature;if(d){var j=h.length;return ze.assert(0===j||c>=h[j-1].tag,"Features must be added in alphabetical order."),f={tag:c,feature:{params:0,lookupListIndexes:[]}},h.push(f),g.push(j),f.feature}}},getLookupTables:function(a,b,c,d,e){var f=this.getFeatureTable(a,b,c,e),g=[];if(f){for(var h,i=f.lookupListIndexes,j=this.font.tables[this.tableName].lookups,k=0;k<i.length;k++)h=j[i[k]],h.lookupType===d&&g.push(h);if(0===g.length&&e){h={lookupType:d,lookupFlag:0,subtables:[],markFilteringSet:void 0};var l=j.length;return j.push(h),i.push(l),[h]}}return g},expandCoverage:function(a){if(1===a.format)return a.glyphs;for(var b=[],c=a.ranges,d=0;d<c.length;d++)for(var e=c[d],f=e.start,g=e.end,h=f;h<=g;h++)b.push(h);return b}},Db.prototype=Cb.prototype,Db.prototype.createDefaultTable=function(){return{version:1,scripts:[{tag:"DFLT",script:{defaultLangSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]},langSysRecords:[]}}],features:[],
lookups:[]}},Db.prototype.getSingle=function(a,b,c){for(var d=this,e=[],f=this.getLookupTables(b,c,a,1),g=0;g<f.length;g++)for(var h=f[g].subtables,i=0;i<h.length;i++){var j=h[i],k=d.expandCoverage(j.coverage),l=void 0;if(1===j.substFormat){var m=j.deltaGlyphId;for(l=0;l<k.length;l++){var n=k[l];e.push({sub:n,by:n+m})}}else{var o=j.substitute;for(l=0;l<k.length;l++)e.push({sub:k[l],by:o[l]})}}return e},Db.prototype.getAlternates=function(a,b,c){for(var d=this,e=[],f=this.getLookupTables(b,c,a,3),g=0;g<f.length;g++)for(var h=f[g].subtables,i=0;i<h.length;i++)for(var j=h[i],k=d.expandCoverage(j.coverage),l=j.alternateSets,m=0;m<k.length;m++)e.push({sub:k[m],by:l[m]});return e},Db.prototype.getLigatures=function(a,b,c){for(var d=this,e=[],f=this.getLookupTables(b,c,a,4),g=0;g<f.length;g++)for(var h=f[g].subtables,i=0;i<h.length;i++)for(var j=h[i],k=d.expandCoverage(j.coverage),l=j.ligatureSets,m=0;m<k.length;m++)for(var n=k[m],o=l[m],p=0;p<o.length;p++){var q=o[p];e.push({sub:[n].concat(q.components),by:q.ligGlyph})}return e},Db.prototype.addSingle=function(a,b,c,d){var e=this.getLookupTables(c,d,a,1,!0)[0],f=Fb(e,2,{substFormat:2,coverage:{format:1,glyphs:[]},substitute:[]});ze.assert(1===f.coverage.format,"Ligature: unable to modify coverage table format "+f.coverage.format);var g=b.sub,h=this.binSearch(f.coverage.glyphs,g);h<0&&(h=-1-h,f.coverage.glyphs.splice(h,0,g),f.substitute.splice(h,0,0)),f.substitute[h]=b.by},Db.prototype.addAlternate=function(a,b,c,d){var e=this.getLookupTables(c,d,a,3,!0)[0],f=Fb(e,1,{substFormat:1,coverage:{format:1,glyphs:[]},alternateSets:[]});ze.assert(1===f.coverage.format,"Ligature: unable to modify coverage table format "+f.coverage.format);var g=b.sub,h=this.binSearch(f.coverage.glyphs,g);h<0&&(h=-1-h,f.coverage.glyphs.splice(h,0,g),f.alternateSets.splice(h,0,0)),f.alternateSets[h]=b.by},Db.prototype.addLigature=function(a,b,c,d){var e=this.getLookupTables(c,d,a,4,!0)[0],f=e.subtables[0];f||(f={substFormat:1,coverage:{format:1,glyphs:[]},ligatureSets:[]},e.subtables[0]=f),ze.assert(1===f.coverage.format,"Ligature: unable to modify coverage table format "+f.coverage.format);var g=b.sub[0],h=b.sub.slice(1),i={ligGlyph:b.by,components:h},j=this.binSearch(f.coverage.glyphs,g);if(j>=0){for(var k=f.ligatureSets[j],l=0;l<k.length;l++)if(Eb(k[l].components,h))return;k.push(i)}else j=-1-j,f.coverage.glyphs.splice(j,0,g),f.ligatureSets.splice(j,0,[i])},Db.prototype.getFeature=function(a,b,c){if(/ss\d\d/.test(a))return this.getSingle(a,b,c);switch(a){case"aalt":case"salt":return this.getSingle(a,b,c).concat(this.getAlternates(a,b,c));case"dlig":case"liga":case"rlig":return this.getLigatures(a,b,c)}},Db.prototype.add=function(a,b,c,d){if(/ss\d\d/.test(a))return this.addSingle(a,b,c,d);switch(a){case"aalt":case"salt":return"number"==typeof b.by?this.addSingle(a,b,c,d):this.addAlternate(a,b,c,d);case"dlig":case"liga":case"rlig":return this.addLigature(a,b,c,d)}};var uf,vf,wf,xf,yf=function(a){var b=this.srPeriod,c=this.srPhase,d=this.srThreshold,e=1;return a<0&&(a=-a,e=-1),a+=d-c,a=Math.trunc(a/b)*b,a+=c,e>0&&a<0?c:e<0&&a>0?-c:a*e},zf={x:1,y:0,axis:"x",distance:function(a,b,c,d){return(c?a.xo:a.x)-(d?b.xo:b.x)},interpolate:function(a,b,c,d){var e,f,g,h,i,j,k;return d&&d!==this?(e=d.distance(a,b,!0,!0),f=d.distance(a,c,!0,!0),i=d.distance(b,b,!1,!0),j=d.distance(c,c,!1,!0),g=Math.abs(e),h=Math.abs(f),0===(k=g+h)?void zf.setRelative(a,a,(i+j)/2,d,!0):void zf.setRelative(a,a,(i*h+j*g)/k,d,!0)):(e=a.xo-b.xo,f=a.xo-c.xo,i=b.x-b.xo,j=c.x-c.xo,g=Math.abs(e),h=Math.abs(f),0===(k=g+h)?void(a.x=a.xo+(i+j)/2):void(a.x=a.xo+(i*h+j*g)/k))},normalSlope:Number.NEGATIVE_INFINITY,setRelative:function(a,b,c,d,e){if(!d||d===this)return void(a.x=(e?b.xo:b.x)+c);var f=e?b.xo:b.x,g=e?b.yo:b.y,h=f+c*d.x,i=g+c*d.y;a.x=h+(a.y-i)/d.normalSlope},slope:0,touch:function(a){a.xTouched=!0},touched:function(a){return a.xTouched},untouch:function(a){a.xTouched=!1}},Af={x:0,y:1,axis:"y",distance:function(a,b,c,d){return(c?a.yo:a.y)-(d?b.yo:b.y)},interpolate:function(a,b,c,d){var e,f,g,h,i,j,k;return d&&d!==this?(e=d.distance(a,b,!0,!0),f=d.distance(a,c,!0,!0),i=d.distance(b,b,!1,!0),j=d.distance(c,c,!1,!0),g=Math.abs(e),h=Math.abs(f),0===(k=g+h)?void Af.setRelative(a,a,(i+j)/2,d,!0):void Af.setRelative(a,a,(i*h+j*g)/k,d,!0)):(e=a.yo-b.yo,f=a.yo-c.yo,i=b.y-b.yo,j=c.y-c.yo,g=Math.abs(e),h=Math.abs(f),0===(k=g+h)?void(a.y=a.yo+(i+j)/2):void(a.y=a.yo+(i*h+j*g)/k))},normalSlope:0,setRelative:function(a,b,c,d,e){if(!d||d===this)return void(a.y=(e?b.yo:b.y)+c);var f=e?b.xo:b.x,g=e?b.yo:b.y,h=f+c*d.x,i=g+c*d.y;a.y=i+d.normalSlope*(a.x-h)},slope:Number.POSITIVE_INFINITY,touch:function(a){a.yTouched=!0},touched:function(a){return a.yTouched},untouch:function(a){a.yTouched=!1}};Object.freeze(zf),Object.freeze(Af),Rb.prototype.distance=function(a,b,c,d){return this.x*zf.distance(a,b,c,d)+this.y*Af.distance(a,b,c,d)},Rb.prototype.interpolate=function(a,b,c,d){var e,f,g,h,i,j,k;if(g=d.distance(a,b,!0,!0),h=d.distance(a,c,!0,!0),e=d.distance(b,b,!1,!0),f=d.distance(c,c,!1,!0),i=Math.abs(g),j=Math.abs(h),0===(k=i+j))return void this.setRelative(a,a,(e+f)/2,d,!0);this.setRelative(a,a,(e*j+f*i)/k,d,!0)},Rb.prototype.setRelative=function(a,b,c,d,e){d=d||this;var f=e?b.xo:b.x,g=e?b.yo:b.y,h=f+c*d.x,i=g+c*d.y,j=d.normalSlope,k=this.slope,l=a.x,m=a.y;a.x=(k*l-j*h+i-m)/(k-j),a.y=k*(a.x-l)+m},Rb.prototype.touch=function(a){a.xTouched=!0,a.yTouched=!0},Tb.prototype.nextTouched=function(a){for(var b=this.nextPointOnContour;!a.touched(b)&&b!==this;)b=b.nextPointOnContour;return b},Tb.prototype.prevTouched=function(a){for(var b=this.prevPointOnContour;!a.touched(b)&&b!==this;)b=b.prevPointOnContour;return b};var Bf=Object.freeze(new Tb(0,0)),Cf={cvCutIn:17/16,deltaBase:9,deltaShift:.125,loop:1,minDis:1,autoFlip:!0};Kb.prototype.exec=function(b,c){if("number"!=typeof c)throw new Error("Point size is not a number!");if(!(this._errorState>2)){var d=this.font,e=this._prepState;if(!e||e.ppem!==c){var f=this._fpgmState;if(!f){Ub.prototype=Cf,f=this._fpgmState=new Ub("fpgm",d.tables.fpgm),f.funcs=[],f.font=d,a.DEBUG&&(console.log("---EXEC FPGM---"),f.step=-1);try{vf(f)}catch(a){return console.log("Hinting error in FPGM:"+a),void(this._errorState=3)}}Ub.prototype=f,e=this._prepState=new Ub("prep",d.tables.prep),e.ppem=c;var g=d.tables.cvt;if(g)for(var h=e.cvt=new Array(g.length),i=c/d.unitsPerEm,j=0;j<g.length;j++)h[j]=g[j]*i;else e.cvt=[];a.DEBUG&&(console.log("---EXEC PREP---"),e.step=-1);try{vf(e)}catch(a){this._errorState<2&&console.log("Hinting error in PREP:"+a),this._errorState=2}}if(!(this._errorState>1))try{return wf(b,e)}catch(a){return this._errorState<1&&(console.log("Hinting error:"+a),console.log("Note: further hinting errors are silenced")),void(this._errorState=1)}}},wf=function(b,c){var d,e,f,g=c.ppem/c.font.unitsPerEm,h=g,i=b.components;if(Ub.prototype=c,i){var j=c.font;e=[],d=[];for(var k=0;k<i.length;k++){var l=i[k],m=j.glyphs.get(l.glyphIndex);f=new Ub("glyf",m.instructions),a.DEBUG&&(console.log("---EXEC COMP "+k+"---"),f.step=-1),xf(m,f,g,h);for(var n=Math.round(l.dx*g),o=Math.round(l.dy*h),p=f.gZone,q=f.contours,r=0;r<p.length;r++){var s=p[r];s.xTouched=s.yTouched=!1,s.xo=s.x=s.x+n,s.yo=s.y=s.y+o}var t=e.length;e.push.apply(e,p);for(var u=0;u<q.length;u++)d.push(q[u]+t)}b.instructions&&!f.inhibitGridFit&&(f=new Ub("glyf",b.instructions),f.gZone=f.z0=f.z1=f.z2=e,f.contours=d,e.push(new Tb(0,0),new Tb(Math.round(b.advanceWidth*g),0)),a.DEBUG&&(console.log("---EXEC COMPOSITE---"),f.step=-1),vf(f),e.length-=2)}else f=new Ub("glyf",b.instructions),a.DEBUG&&(console.log("---EXEC GLYPH---"),f.step=-1),xf(b,f,g,h),e=f.gZone;return e},xf=function(b,c,d,e){for(var f,g=b.points||[],h=g.length,i=c.gZone=c.z0=c.z1=c.z2=[],j=c.contours=[],k=0;k<h;k++)f=g[k],i[k]=new Tb(f.x*d,f.y*e,f.lastPointOfContour,f.onCurve);for(var l,m,n=0;n<h;n++)f=i[n],l||(l=f,j.push(n)),f.lastPointOfContour?(f.nextPointOnContour=l,l.prevPointOnContour=f,l=void 0):(m=i[n+1],f.nextPointOnContour=m,m.prevPointOnContour=f);if(!c.inhibitGridFit&&(i.push(new Tb(0,0),new Tb(Math.round(b.advanceWidth*d),0)),vf(c),i.length-=2,a.DEBUG)){console.log("FINISHED GLYPH",c.stack);for(var o=0;o<h;o++)console.log(o,i[o].x,i[o].y)}},vf=function(b){var c=b.prog;if(c){var d,e=c.length;for(b.ip=0;b.ip<e;b.ip++){if(a.DEBUG&&b.step++,!(d=uf[c[b.ip]]))throw new Error("unknown instruction: 0x"+Number(c[b.ip]).toString(16));d(b)}}},uf=[Xb.bind(void 0,Af),Xb.bind(void 0,zf),Yb.bind(void 0,Af),Yb.bind(void 0,zf),Zb.bind(void 0,Af),Zb.bind(void 0,zf),$b.bind(void 0,0),$b.bind(void 0,1),_b.bind(void 0,0),_b.bind(void 0,1),ac,bc,cc,dc,ec,fc,gc,hc,ic,jc,kc,lc,mc,nc,oc,pc,qc,rc,sc,tc,void 0,void 0,uc,vc,wc,xc,yc,Bc,Cc,void 0,void 0,void 0,zc,Ac,Dc,void 0,Ec.bind(void 0,0),Ec.bind(void 0,1),Fc.bind(void 0,Af),Fc.bind(void 0,zf),Gc.bind(void 0,0),Gc.bind(void 0,1),Hc.bind(void 0,0),Hc.bind(void 0,1),Ic.bind(void 0,0),Ic.bind(void 0,1),Jc,Kc,Lc.bind(void 0,0),Lc.bind(void 0,1),Mc,Nc,Oc.bind(void 0,0),Oc.bind(void 0,1),Pc,Qc,Rc,Sc,Tc,Uc,Vc.bind(void 0,0),Vc.bind(void 0,1),void 0,Wc.bind(void 0,0),Wc.bind(void 0,1),Xc,void 0,Yc,void 0,void 0,Zc,$c,_c,ad,bd,cd,dd,ed,fd,gd,hd,id,jd,kd.bind(void 0,1),ld,md,nd,od,pd,qd,rd,sd,td,ud,vd.bind(void 0,0),vd.bind(void 0,1),vd.bind(void 0,2),vd.bind(void 0,3),void 0,void 0,void 0,void 0,wd,kd.bind(void 0,2),kd.bind(void 0,3),xd.bind(void 0,1),xd.bind(void 0,2),xd.bind(void 0,3),yd,zd,void 0,void 0,Ad,void 0,Bd,Cd,vc,vc,void 0,void 0,void 0,void 0,void 0,Dd,Ed.bind(void 0,0),Ed.bind(void 0,1),Fd,void 0,Gd,Hd,Id,Jd,Kd,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,Ld.bind(void 0,1),Ld.bind(void 0,2),Ld.bind(void 0,3),Ld.bind(void 0,4),Ld.bind(void 0,5),Ld.bind(void 0,6),Ld.bind(void 0,7),Ld.bind(void 0,8),Md.bind(void 0,1),Md.bind(void 0,2),Md.bind(void 0,3),Md.bind(void 0,4),Md.bind(void 0,5),Md.bind(void 0,6),Md.bind(void 0,7),Md.bind(void 0,8),Nd.bind(void 0,0,0,0,0,0),Nd.bind(void 0,0,0,0,0,1),Nd.bind(void 0,0,0,0,0,2),Nd.bind(void 0,0,0,0,0,3),Nd.bind(void 0,0,0,0,1,0),Nd.bind(void 0,0,0,0,1,1),Nd.bind(void 0,0,0,0,1,2),Nd.bind(void 0,0,0,0,1,3),Nd.bind(void 0,0,0,1,0,0),Nd.bind(void 0,0,0,1,0,1),Nd.bind(void 0,0,0,1,0,2),Nd.bind(void 0,0,0,1,0,3),Nd.bind(void 0,0,0,1,1,0),Nd.bind(void 0,0,0,1,1,1),Nd.bind(void 0,0,0,1,1,2),Nd.bind(void 0,0,0,1,1,3),Nd.bind(void 0,0,1,0,0,0),Nd.bind(void 0,0,1,0,0,1),Nd.bind(void 0,0,1,0,0,2),Nd.bind(void 0,0,1,0,0,3),Nd.bind(void 0,0,1,0,1,0),Nd.bind(void 0,0,1,0,1,1),Nd.bind(void 0,0,1,0,1,2),Nd.bind(void 0,0,1,0,1,3),Nd.bind(void 0,0,1,1,0,0),Nd.bind(void 0,0,1,1,0,1),Nd.bind(void 0,0,1,1,0,2),Nd.bind(void 0,0,1,1,0,3),Nd.bind(void 0,0,1,1,1,0),Nd.bind(void 0,0,1,1,1,1),Nd.bind(void 0,0,1,1,1,2),Nd.bind(void 0,0,1,1,1,3),Nd.bind(void 0,1,0,0,0,0),Nd.bind(void 0,1,0,0,0,1),Nd.bind(void 0,1,0,0,0,2),Nd.bind(void 0,1,0,0,0,3),Nd.bind(void 0,1,0,0,1,0),Nd.bind(void 0,1,0,0,1,1),Nd.bind(void 0,1,0,0,1,2),Nd.bind(void 0,1,0,0,1,3),Nd.bind(void 0,1,0,1,0,0),Nd.bind(void 0,1,0,1,0,1),Nd.bind(void 0,1,0,1,0,2),Nd.bind(void 0,1,0,1,0,3),Nd.bind(void 0,1,0,1,1,0),Nd.bind(void 0,1,0,1,1,1),Nd.bind(void 0,1,0,1,1,2),Nd.bind(void 0,1,0,1,1,3),Nd.bind(void 0,1,1,0,0,0),Nd.bind(void 0,1,1,0,0,1),Nd.bind(void 0,1,1,0,0,2),Nd.bind(void 0,1,1,0,0,3),Nd.bind(void 0,1,1,0,1,0),Nd.bind(void 0,1,1,0,1,1),Nd.bind(void 0,1,1,0,1,2),Nd.bind(void 0,1,1,0,1,3),Nd.bind(void 0,1,1,1,0,0),Nd.bind(void 0,1,1,1,0,1),Nd.bind(void 0,1,1,1,0,2),Nd.bind(void 0,1,1,1,0,3),Nd.bind(void 0,1,1,1,1,0),Nd.bind(void 0,1,1,1,1,1),Nd.bind(void 0,1,1,1,1,2),Nd.bind(void 0,1,1,1,1,3)],Od.prototype.hasChar=function(a){return null!==this.encoding.charToGlyphIndex(a)},Od.prototype.charToGlyphIndex=function(a){return this.encoding.charToGlyphIndex(a)},Od.prototype.charToGlyph=function(a){var b=this.charToGlyphIndex(a),c=this.glyphs.get(b);return c||(c=this.glyphs.get(0)),c},Od.prototype.stringToGlyphs=function(a,b){var c=this;b=b||this.defaultRenderOptions;for(var d=[],e=0;e<a.length;e+=1){var f=a[e];d.push(c.charToGlyphIndex(f))}var g=d.length;if(b.features){var h=b.script||this.substitution.getDefaultScriptName(),i=[];b.features.liga&&(i=i.concat(this.substitution.getFeature("liga",h,b.language))),b.features.rlig&&(i=i.concat(this.substitution.getFeature("rlig",h,b.language)));for(var j=0;j<g;j+=1)for(var k=0;k<i.length;k++){for(var l=i[k],m=l.sub,n=m.length,o=0;o<n&&m[o]===d[j+o];)o++;o===n&&(d.splice(j,n,l.by),g=g-n+1)}}for(var p=new Array(g),q=this.glyphs.get(0),r=0;r<g;r+=1)p[r]=c.glyphs.get(d[r])||q;return p},Od.prototype.nameToGlyphIndex=function(a){return this.glyphNames.nameToGlyphIndex(a)},Od.prototype.nameToGlyph=function(a){var b=this.nameToGlyphIndex(a),c=this.glyphs.get(b);return c||(c=this.glyphs.get(0)),c},Od.prototype.glyphIndexToName=function(a){return this.glyphNames.glyphIndexToName?this.glyphNames.glyphIndexToName(a):""},Od.prototype.getKerningValue=function(a,b){a=a.index||a,b=b.index||b;var c=this.getGposKerningValue;return c?c(a,b):this.kerningPairs[a+","+b]||0},Od.prototype.defaultRenderOptions={kerning:!0,features:{liga:!0,rlig:!0}},Od.prototype.forEachGlyph=function(a,b,c,d,e,f){var g=this;b=void 0!==b?b:0,c=void 0!==c?c:0,d=void 0!==d?d:72,e=e||this.defaultRenderOptions;for(var h=1/this.unitsPerEm*d,i=this.stringToGlyphs(a,e),j=0;j<i.length;j+=1){var k=i[j];if(f.call(g,k,b,c,d,e),k.advanceWidth&&(b+=k.advanceWidth*h),e.kerning&&j<i.length-1){b+=g.getKerningValue(k,i[j+1])*h}e.letterSpacing?b+=e.letterSpacing*d:e.tracking&&(b+=e.tracking/1e3*d)}return b},Od.prototype.getPath=function(a,b,c,d,e){var f=new r;return this.forEachGlyph(a,b,c,d,e,function(a,b,c,d){var g=a.getPath(b,c,d,e,this);f.extend(g)}),f},Od.prototype.getPaths=function(a,b,c,d,e){var f=[];return this.forEachGlyph(a,b,c,d,e,function(a,b,c,d){var g=a.getPath(b,c,d,e,this);f.push(g)}),f},Od.prototype.getAdvanceWidth=function(a,b,c){return this.forEachGlyph(a,0,0,b,c,function(){})},Od.prototype.draw=function(a,b,c,d,e,f){this.getPath(b,c,d,e,f).draw(a)},Od.prototype.drawPoints=function(a,b,c,d,e,f){this.forEachGlyph(b,c,d,e,f,function(b,c,d,e){b.drawPoints(a,c,d,e)})},Od.prototype.drawMetrics=function(a,b,c,d,e,f){this.forEachGlyph(b,c,d,e,f,function(b,c,d,e){b.drawMetrics(a,c,d,e)})},Od.prototype.getEnglishName=function(a){var b=this.names[a];if(b)return b.en},Od.prototype.validate=function(){function a(a,b){a||c.push(b)}function b(b){var c=d.getEnglishName(b);a(c&&c.trim().length>0,"No English "+b+" specified.")}var c=[],d=this;b("fontFamily"),b("weightName"),b("manufacturer"),b("copyright"),b("version"),a(this.unitsPerEm>0,"No unitsPerEm specified.")},Od.prototype.toTables=function(){return tf.fontToTable(this)},Od.prototype.toBuffer=function(){return console.warn("Font.toBuffer is deprecated. Use Font.toArrayBuffer instead."),this.toArrayBuffer()},Od.prototype.toArrayBuffer=function(){for(var a=this.toTables(),b=a.encode(),c=new ArrayBuffer(b.length),d=new Uint8Array(c),e=0;e<b.length;e++)d[e]=b[e];return c},Od.prototype.download=function(a){var c=this.getEnglishName("fontFamily"),d=this.getEnglishName("fontSubfamily");a=a||c.replace(/\s/g,"")+"-"+d+".otf";var e=this.toArrayBuffer();if(Gb())window.requestFileSystem=window.requestFileSystem||window.webkitRequestFileSystem,window.requestFileSystem(window.TEMPORARY,e.byteLength,function(b){b.root.getFile(a,{create:!0},function(a){a.createWriter(function(b){var c=new DataView(e),d=new Blob([c],{type:"font/opentype"});b.write(d),b.addEventListener("writeend",function(){location.href=a.toURL()},!1)})})},function(a){throw new Error(a.name+": "+a.message)});else{var f=b("fs"),g=Ib(e);f.writeFileSync(a,g)}},Od.prototype.fsSelectionValues={ITALIC:1,UNDERSCORE:2,NEGATIVE:4,OUTLINED:8,STRIKEOUT:16,BOLD:32,REGULAR:64,USER_TYPO_METRICS:128,WWS:256,OBLIQUE:512},Od.prototype.usWidthClasses={ULTRA_CONDENSED:1,EXTRA_CONDENSED:2,CONDENSED:3,SEMI_CONDENSED:4,MEDIUM:5,SEMI_EXPANDED:6,EXPANDED:7,EXTRA_EXPANDED:8,ULTRA_EXPANDED:9},Od.prototype.usWeightClasses={THIN:100,EXTRA_LIGHT:200,LIGHT:300,NORMAL:400,MEDIUM:500,SEMI_BOLD:600,BOLD:700,EXTRA_BOLD:800,BLACK:900};var Df={make:Ud,parse:Vd},Ef={parse:_d},Ff={parse:ce},Gf={parse:de};a.Font=Od,a.Glyph=ja,a.Path=r,a.BoundingBox=q,a._parse=Ne,a.parse=je,a.load=ke,a.loadSync=le,Object.defineProperty(a,"__esModule",{value:!0})})}).call(this,b("buffer").Buffer)},{buffer:3,fs:2}],10:[function(a,b,c){function d(){throw new Error("setTimeout has not been defined")}function e(){throw new Error("clearTimeout has not been defined")}function f(a){if(l===setTimeout)return setTimeout(a,0);if((l===d||!l)&&setTimeout)return l=setTimeout,setTimeout(a,0);try{return l(a,0)}catch(b){try{return l.call(null,a,0)}catch(b){return l.call(this,a,0)}}}function g(a){if(m===clearTimeout)return clearTimeout(a);if((m===e||!m)&&clearTimeout)return m=clearTimeout,clearTimeout(a);try{return m(a)}catch(b){try{return m.call(null,a)}catch(b){return m.call(this,a)}}}function h(){q&&o&&(q=!1,o.length?p=o.concat(p):r=-1,p.length&&i())}function i(){if(!q){var a=f(h);q=!0;for(var b=p.length;b;){for(o=p,p=[];++r<b;)o&&o[r].run();r=-1,b=p.length}o=null,q=!1,g(a)}}function j(a,b){this.fun=a,this.array=b}function k(){}var l,m,n=b.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:d}catch(a){l=d}try{m="function"==typeof clearTimeout?clearTimeout:e}catch(a){m=e}}();var o,p=[],q=!1,r=-1;n.nextTick=function(a){var b=new Array(arguments.length-1);if(arguments.length>1)for(var c=1;c<arguments.length;c++)b[c-1]=arguments[c];p.push(new j(a,b)),1!==p.length||q||f(i)},j.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=k,n.addListener=k,n.once=k,n.off=k,n.removeListener=k,n.removeAllListeners=k,n.emit=k,n.prependListener=k,n.prependOnceListener=k,n.listeners=function(a){return[]},n.binding=function(a){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(a){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},{}],11:[function(a,b,c){!function(a){"use strict";function b(a){if("string"!=typeof a&&(a=String(a)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(a))throw new TypeError("Invalid character in header field name");return a.toLowerCase()}function c(a){return"string"!=typeof a&&(a=String(a)),a}function d(a){var b={next:function(){var b=a.shift();return{done:void 0===b,value:b}}};return r.iterable&&(b[Symbol.iterator]=function(){return b}),b}function e(a){this.map={},a instanceof e?a.forEach(function(a,b){this.append(b,a)},this):Array.isArray(a)?a.forEach(function(a){this.append(a[0],a[1])},this):a&&Object.getOwnPropertyNames(a).forEach(function(b){this.append(b,a[b])},this)}function f(a){if(a.bodyUsed)return Promise.reject(new TypeError("Already read"));a.bodyUsed=!0}function g(a){return new Promise(function(b,c){a.onload=function(){b(a.result)},a.onerror=function(){c(a.error)}})}function h(a){var b=new FileReader,c=g(b);return b.readAsArrayBuffer(a),c}function i(a){var b=new FileReader,c=g(b);return b.readAsText(a),c}function j(a){for(var b=new Uint8Array(a),c=new Array(b.length),d=0;d<b.length;d++)c[d]=String.fromCharCode(b[d]);return c.join("")}function k(a){if(a.slice)return a.slice(0);var b=new Uint8Array(a.byteLength);return b.set(new Uint8Array(a)),b.buffer}function l(){return this.bodyUsed=!1,this._initBody=function(a){if(this._bodyInit=a,a)if("string"==typeof a)this._bodyText=a;else if(r.blob&&Blob.prototype.isPrototypeOf(a))this._bodyBlob=a;else if(r.formData&&FormData.prototype.isPrototypeOf(a))this._bodyFormData=a;else if(r.searchParams&&URLSearchParams.prototype.isPrototypeOf(a))this._bodyText=a.toString();else if(r.arrayBuffer&&r.blob&&t(a))this._bodyArrayBuffer=k(a.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!r.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(a)&&!u(a))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=k(a)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof a?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):r.searchParams&&URLSearchParams.prototype.isPrototypeOf(a)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},r.blob&&(this.blob=function(){var a=f(this);if(a)return a;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?f(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(h)}),this.text=function(){var a=f(this);if(a)return a;if(this._bodyBlob)return i(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(j(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},r.formData&&(this.formData=function(){return this.text().then(o)}),this.json=function(){return this.text().then(JSON.parse)},this}function m(a){var b=a.toUpperCase();return v.indexOf(b)>-1?b:a}function n(a,b){b=b||{};var c=b.body;if(a instanceof n){if(a.bodyUsed)throw new TypeError("Already read");this.url=a.url,this.credentials=a.credentials,b.headers||(this.headers=new e(a.headers)),this.method=a.method,this.mode=a.mode,c||null==a._bodyInit||(c=a._bodyInit,a.bodyUsed=!0)}else this.url=String(a);if(this.credentials=b.credentials||this.credentials||"omit",!b.headers&&this.headers||(this.headers=new e(b.headers)),this.method=m(b.method||this.method||"GET"),this.mode=b.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&c)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(c)}function o(a){var b=new FormData;return a.trim().split("&").forEach(function(a){if(a){var c=a.split("="),d=c.shift().replace(/\+/g," "),e=c.join("=").replace(/\+/g," ");b.append(decodeURIComponent(d),decodeURIComponent(e))}}),b}function p(a){var b=new e;return a.split(/\r?\n/).forEach(function(a){var c=a.split(":"),d=c.shift().trim();if(d){var e=c.join(":").trim();b.append(d,e)}}),b}function q(a,b){b||(b={}),this.type="default",this.status="status"in b?b.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in b?b.statusText:"OK",this.headers=new e(b.headers),this.url=b.url||"",this._initBody(a)}if(!a.fetch){var r={searchParams:"URLSearchParams"in a,iterable:"Symbol"in a&&"iterator"in Symbol,blob:"FileReader"in a&&"Blob"in a&&function(){try{return new Blob,!0}catch(a){return!1}}(),formData:"FormData"in a,arrayBuffer:"ArrayBuffer"in a};if(r.arrayBuffer)var s=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],t=function(a){return a&&DataView.prototype.isPrototypeOf(a)},u=ArrayBuffer.isView||function(a){return a&&s.indexOf(Object.prototype.toString.call(a))>-1};e.prototype.append=function(a,d){a=b(a),d=c(d);var e=this.map[a];this.map[a]=e?e+","+d:d},e.prototype.delete=function(a){delete this.map[b(a)]},e.prototype.get=function(a){return a=b(a),this.has(a)?this.map[a]:null},e.prototype.has=function(a){return this.map.hasOwnProperty(b(a))},e.prototype.set=function(a,d){this.map[b(a)]=c(d)},e.prototype.forEach=function(a,b){for(var c in this.map)this.map.hasOwnProperty(c)&&a.call(b,this.map[c],c,this)},e.prototype.keys=function(){var a=[];return this.forEach(function(b,c){a.push(c)}),d(a)},e.prototype.values=function(){var a=[];return this.forEach(function(b){a.push(b)}),d(a)},e.prototype.entries=function(){var a=[];return this.forEach(function(b,c){a.push([c,b])}),d(a)},r.iterable&&(e.prototype[Symbol.iterator]=e.prototype.entries);var v=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];n.prototype.clone=function(){return new n(this,{body:this._bodyInit})},l.call(n.prototype),l.call(q.prototype),q.prototype.clone=function(){return new q(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new e(this.headers),url:this.url})},q.error=function(){var a=new q(null,{status:0,statusText:""});return a.type="error",a};var w=[301,302,303,307,308];q.redirect=function(a,b){if(-1===w.indexOf(b))throw new RangeError("Invalid status code");return new q(null,{status:b,headers:{location:a}})},a.Headers=e,a.Request=n,a.Response=q,a.fetch=function(a,b){return new Promise(function(c,d){var e=new n(a,b),f=new XMLHttpRequest;f.onload=function(){var a={status:f.status,statusText:f.statusText,headers:p(f.getAllResponseHeaders()||"")};a.url="responseURL"in f?f.responseURL:a.headers.get("X-Request-URL");var b="response"in f?f.response:f.responseText;c(new q(b,a))},f.onerror=function(){d(new TypeError("Network request failed"))},f.ontimeout=function(){d(new TypeError("Network request failed"))},f.open(e.method,e.url,!0),"include"===e.credentials&&(f.withCredentials=!0),"responseType"in f&&r.blob&&(f.responseType="blob"),e.headers.forEach(function(a,b){f.setRequestHeader(b,a)}),f.send(void 0===e._bodyInit?null:e._bodyInit)})},a.fetch.polyfill=!0}}("undefined"!=typeof self?self:this)},{}],12:[function(a,b,c){"use strict";var d=a("./core/core");a("./color/p5.Color"),a("./core/p5.Element"),a("./typography/p5.Font"),a("./core/p5.Graphics"),a("./core/p5.Renderer2D"),a("./image/p5.Image"),a("./math/p5.Vector"),a("./io/p5.TableRow"),a("./io/p5.Table"),a("./io/p5.XML"),a("./color/creating_reading"),a("./color/setting"),a("./core/constants"),a("./utilities/conversion"),a("./utilities/array_functions"),a("./utilities/string_functions"),a("./core/environment"),a("./image/image"),a("./image/loading_displaying"),a("./image/pixels"),a("./io/files"),a("./events/keyboard"),a("./events/acceleration"),a("./events/mouse"),a("./utilities/time_date"),a("./events/touch"),a("./math/math"),a("./math/calculation"),a("./math/random"),a("./math/noise"),a("./math/trigonometry"),a("./core/rendering"),a("./core/2d_primitives"),a("./core/attributes"),a("./core/curves"),a("./core/vertex"),a("./core/structure"),a("./core/transform"),a("./typography/attributes"),a("./typography/loading_displaying"),a("./data/p5.TypedDict"),a("./webgl/p5.RendererGL"),a("./webgl/p5.Geometry"),a("./webgl/p5.RendererGL.Retained"),a("./webgl/p5.RendererGL.Immediate"),a("./webgl/primitives"),a("./webgl/loading"),a("./webgl/p5.Matrix"),a("./webgl/material"),a("./webgl/light"),a("./webgl/p5.Shader"),a("./webgl/camera"),a("./webgl/interaction"),a("./core/init.js"),b.exports=d},{"./color/creating_reading":14,"./color/p5.Color":15,"./color/setting":16,"./core/2d_primitives":17,"./core/attributes":18,"./core/constants":20,"./core/core":21,"./core/curves":22,"./core/environment":23,"./core/init.js":25,"./core/p5.Element":26,"./core/p5.Graphics":27,"./core/p5.Renderer2D":29,"./core/rendering":30,"./core/structure":32,"./core/transform":33,"./core/vertex":34,"./data/p5.TypedDict":35,"./events/acceleration":36,"./events/keyboard":37,"./events/mouse":38,"./events/touch":39,"./image/image":41,"./image/loading_displaying":42,"./image/p5.Image":43,"./image/pixels":44,"./io/files":45,"./io/p5.Table":46,"./io/p5.TableRow":47,"./io/p5.XML":48,"./math/calculation":49,"./math/math":50,"./math/noise":51,"./math/p5.Vector":52,"./math/random":54,"./math/trigonometry":55,"./typography/attributes":56,"./typography/loading_displaying":57,"./typography/p5.Font":58,"./utilities/array_functions":59,"./utilities/conversion":60,"./utilities/string_functions":61,"./utilities/time_date":62,"./webgl/camera":63,"./webgl/interaction":64,"./webgl/light":65,"./webgl/loading":66,"./webgl/material":67,"./webgl/p5.Geometry":68,"./webgl/p5.Matrix":69,"./webgl/p5.RendererGL":72,"./webgl/p5.RendererGL.Immediate":70,"./webgl/p5.RendererGL.Retained":71,"./webgl/p5.Shader":73,"./webgl/primitives":75}],13:[function(a,b,c){"use strict";var d=a("../core/core");d.ColorConversion={},d.ColorConversion._hsbaToHSLA=function(a){var b=a[0],c=a[1],d=a[2],e=(2-c)*d/2;return 0!==e&&(1===e?c=0:e<.5?c/=2-c:c=c*d/(2-2*e)),[b,c,e,a[3]]},d.ColorConversion._hsbaToRGBA=function(a){var b=6*a[0],c=a[1],d=a[2],e=[];if(0===c)e=[d,d,d,a[3]];else{var f,g,h,i=Math.floor(b),j=d*(1-c),k=d*(1-c*(b-i)),l=d*(1-c*(1+i-b));1===i?(f=k,g=d,h=j):2===i?(f=j,g=d,h=l):3===i?(f=j,g=k,h=d):4===i?(f=l,g=j,h=d):5===i?(f=d,g=j,h=k):(f=d,g=l,h=j),e=[f,g,h,a[3]]}return e},d.ColorConversion._hslaToHSBA=function(a){var b,c=a[0],d=a[1],e=a[2];return b=e<.5?(1+d)*e:e+d-e*d,d=2*(b-e)/b,[c,d,b,a[3]]},d.ColorConversion._hslaToRGBA=function(a){var b=6*a[0],c=a[1],d=a[2],e=[];if(0===c)e=[d,d,d,a[3]];else{var f;f=d<.5?(1+c)*d:d+c-d*c;var g=2*d-f,h=function(a,b,c){return a<0?a+=6:a>=6&&(a-=6),a<1?b+(c-b)*a:a<3?c:a<4?b+(c-b)*(4-a):b};e=[h(b+2,g,f),h(b,g,f),h(b-2,g,f),a[3]]}return e},d.ColorConversion._rgbaToHSBA=function(a){var b,c,d=a[0],e=a[1],f=a[2],g=Math.max(d,e,f),h=g-Math.min(d,e,f);return 0===h?(b=0,c=0):(c=h/g,d===g?b=(e-f)/h:e===g?b=2+(f-d)/h:f===g&&(b=4+(d-e)/h),b<0?b+=6:b>=6&&(b-=6)),[b/6,c,g,a[3]]},d.ColorConversion._rgbaToHSLA=function(a){var b,c,d=a[0],e=a[1],f=a[2],g=Math.max(d,e,f),h=Math.min(d,e,f),i=g+h,j=g-h;return 0===j?(b=0,c=0):(c=i<1?j/i:j/(2-i),d===g?b=(e-f)/j:e===g?b=2+(f-d)/j:f===g&&(b=4+(d-e)/j),b<0?b+=6:b>=6&&(b-=6)),[b/6,c,i/2,a[3]]},b.exports=d.ColorConversion},{"../core/core":21}],14:[function(a,b,c){"use strict";var d=a("../core/core"),e=a("../core/constants");a("./p5.Color"),a("../core/error_helpers"),d.prototype.alpha=function(a){return d._validateParameters("alpha",arguments),this.color(a)._getAlpha()},d.prototype.blue=function(a){return d._validateParameters("blue",arguments),this.color(a)._getBlue()},d.prototype.brightness=function(a){return d._validateParameters("brightness",arguments),this.color(a)._getBrightness()},d.prototype.color=function(){if(d._validateParameters("color",arguments),arguments[0]instanceof d.Color)return arguments[0];var a=arguments[0]instanceof Array?arguments[0]:arguments;return new d.Color(this,a)},d.prototype.green=function(a){return d._validateParameters("green",arguments),this.color(a)._getGreen()},d.prototype.hue=function(a){return d._validateParameters("hue",arguments),this.color(a)._getHue()},d.prototype.lerpColor=function(a,b,c){d._validateParameters("lerpColor",arguments);var f,g,h,i,j,k,l=this._colorMode,m=this._colorMaxes;if(l===e.RGB)j=a.levels.map(function(a){return a/255}),k=b.levels.map(function(a){return a/255});else if(l===e.HSB)a._getBrightness(),b._getBrightness(),j=a.hsba,k=b.hsba;else{if(l!==e.HSL)throw new Error(l+"cannot be used for interpolation.");a._getLightness(),b._getLightness(),j=a.hsla,k=b.hsla}return c=Math.max(Math.min(c,1),0),void 0===this.lerp&&(this.lerp=function(a,b,c){return c*(b-a)+a}),f=this.lerp(j[0],k[0],c),g=this.lerp(j[1],k[1],c),h=this.lerp(j[2],k[2],c),i=this.lerp(j[3],k[3],c),f*=m[l][0],g*=m[l][1],h*=m[l][2],i*=m[l][3],this.color(f,g,h,i)},d.prototype.lightness=function(a){return d._validateParameters("lightness",arguments),this.color(a)._getLightness()},d.prototype.red=function(a){return d._validateParameters("red",arguments),this.color(a)._getRed()},d.prototype.saturation=function(a){return d._validateParameters("saturation",arguments),this.color(a)._getSaturation()},b.exports=d},{"../core/constants":20,"../core/core":21,"../core/error_helpers":24,"./p5.Color":15}],15:[function(a,b,c){"use strict";var d=a("../core/core"),e=a("../core/constants"),f=a("./color_conversion");d.Color=function(a,b){if(this._storeModeAndMaxes(a._colorMode,a._colorMaxes),this.mode!==e.RGB&&this.mode!==e.HSL&&this.mode!==e.HSB)throw new Error(this.mode+" is an invalid colorMode.");return this._array=d.Color._parseInputs.apply(this,b),this._calculateLevels(),this.name="p5.Color",this},
d.Color.prototype.toString=function(){var a=this.levels,b=this._array[3];return"rgba("+a[0]+","+a[1]+","+a[2]+","+b+")"},d.Color.prototype.setRed=function(a){this._array[0]=a/this.maxes[e.RGB][0],this._calculateLevels()},d.Color.prototype.setGreen=function(a){this._array[1]=a/this.maxes[e.RGB][1],this._calculateLevels()},d.Color.prototype.setBlue=function(a){this._array[2]=a/this.maxes[e.RGB][2],this._calculateLevels()},d.Color.prototype.setAlpha=function(a){this._array[3]=a/this.maxes[this.mode][3],this._calculateLevels()},d.Color.prototype._calculateLevels=function(){this.levels=this._array.map(function(a){return Math.round(255*a)})},d.Color.prototype._getAlpha=function(){return this._array[3]*this.maxes[this.mode][3]},d.Color.prototype._storeModeAndMaxes=function(a,b){this.mode=a,this.maxes=b},d.Color.prototype._getMode=function(){return this.mode},d.Color.prototype._getMaxes=function(){return this.maxes},d.Color.prototype._getBlue=function(){return this._array[2]*this.maxes[e.RGB][2]},d.Color.prototype._getBrightness=function(){return this.hsba||(this.hsba=f._rgbaToHSBA(this._array)),this.hsba[2]*this.maxes[e.HSB][2]},d.Color.prototype._getGreen=function(){return this._array[1]*this.maxes[e.RGB][1]},d.Color.prototype._getHue=function(){return this.mode===e.HSB?(this.hsba||(this.hsba=f._rgbaToHSBA(this._array)),this.hsba[0]*this.maxes[e.HSB][0]):(this.hsla||(this.hsla=f._rgbaToHSLA(this._array)),this.hsla[0]*this.maxes[e.HSL][0])},d.Color.prototype._getLightness=function(){return this.hsla||(this.hsla=f._rgbaToHSLA(this._array)),this.hsla[2]*this.maxes[e.HSL][2]},d.Color.prototype._getRed=function(){return this._array[0]*this.maxes[e.RGB][0]},d.Color.prototype._getSaturation=function(){return this.mode===e.HSB?(this.hsba||(this.hsba=f._rgbaToHSBA(this._array)),this.hsba[1]*this.maxes[e.HSB][1]):(this.hsla||(this.hsla=f._rgbaToHSLA(this._array)),this.hsla[1]*this.maxes[e.HSL][1])};var g={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},h=/\s*/,i=/(\d{1,3})/,j=/((?:\d+(?:\.\d+)?)|(?:\.\d+))/,k=new RegExp(j.source+"%"),l={HEX3:/^#([a-f0-9])([a-f0-9])([a-f0-9])$/i,HEX4:/^#([a-f0-9])([a-f0-9])([a-f0-9])([a-f0-9])$/i,HEX6:/^#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i,HEX8:/^#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i,RGB:new RegExp(["^rgb\\(",i.source,",",i.source,",",i.source,"\\)$"].join(h.source),"i"),RGB_PERCENT:new RegExp(["^rgb\\(",k.source,",",k.source,",",k.source,"\\)$"].join(h.source),"i"),RGBA:new RegExp(["^rgba\\(",i.source,",",i.source,",",i.source,",",j.source,"\\)$"].join(h.source),"i"),RGBA_PERCENT:new RegExp(["^rgba\\(",k.source,",",k.source,",",k.source,",",j.source,"\\)$"].join(h.source),"i"),HSL:new RegExp(["^hsl\\(",i.source,",",k.source,",",k.source,"\\)$"].join(h.source),"i"),HSLA:new RegExp(["^hsla\\(",i.source,",",k.source,",",k.source,",",j.source,"\\)$"].join(h.source),"i"),HSB:new RegExp(["^hsb\\(",i.source,",",k.source,",",k.source,"\\)$"].join(h.source),"i"),HSBA:new RegExp(["^hsba\\(",i.source,",",k.source,",",k.source,",",j.source,"\\)$"].join(h.source),"i")};d.Color._parseInputs=function(a,b,c,h){var i=arguments.length,j=this.mode,k=this.maxes,m=[];if(i>=3)return m[0]=a/k[j][0],m[1]=b/k[j][1],m[2]=c/k[j][2],m[3]="number"==typeof h?h/k[j][3]:1,m=m.map(function(a){return Math.max(Math.min(a,1),0)}),j===e.HSL?f._hslaToRGBA(m):j===e.HSB?f._hsbaToRGBA(m):m;if(1===i&&"string"==typeof a){var n=a.trim().toLowerCase();if(g[n])return d.Color._parseInputs.call(this,g[n]);if(l.HEX3.test(n))return m=l.HEX3.exec(n).slice(1).map(function(a){return parseInt(a+a,16)/255}),m[3]=1,m;if(l.HEX6.test(n))return m=l.HEX6.exec(n).slice(1).map(function(a){return parseInt(a,16)/255}),m[3]=1,m;if(l.HEX4.test(n))return m=l.HEX4.exec(n).slice(1).map(function(a){return parseInt(a+a,16)/255});if(l.HEX8.test(n))return m=l.HEX8.exec(n).slice(1).map(function(a){return parseInt(a,16)/255});if(l.RGB.test(n))return m=l.RGB.exec(n).slice(1).map(function(a){return a/255}),m[3]=1,m;if(l.RGB_PERCENT.test(n))return m=l.RGB_PERCENT.exec(n).slice(1).map(function(a){return parseFloat(a)/100}),m[3]=1,m;if(l.RGBA.test(n))return m=l.RGBA.exec(n).slice(1).map(function(a,b){return 3===b?parseFloat(a):a/255});if(l.RGBA_PERCENT.test(n))return m=l.RGBA_PERCENT.exec(n).slice(1).map(function(a,b){return 3===b?parseFloat(a):parseFloat(a)/100});if(l.HSL.test(n)?(m=l.HSL.exec(n).slice(1).map(function(a,b){return 0===b?parseInt(a,10)/360:parseInt(a,10)/100}),m[3]=1):l.HSLA.test(n)&&(m=l.HSLA.exec(n).slice(1).map(function(a,b){return 0===b?parseInt(a,10)/360:3===b?parseFloat(a):parseInt(a,10)/100})),m=m.map(function(a){return Math.max(Math.min(a,1),0)}),m.length)return f._hslaToRGBA(m);if(l.HSB.test(n)?(m=l.HSB.exec(n).slice(1).map(function(a,b){return 0===b?parseInt(a,10)/360:parseInt(a,10)/100}),m[3]=1):l.HSBA.test(n)&&(m=l.HSBA.exec(n).slice(1).map(function(a,b){return 0===b?parseInt(a,10)/360:3===b?parseFloat(a):parseInt(a,10)/100})),m=m.map(function(a){return Math.max(Math.min(a,1),0)}),m.length)return f._hsbaToRGBA(m);m=[1,1,1,1]}else{if(1!==i&&2!==i||"number"!=typeof a)throw new Error(arguments+"is not a valid color representation.");m[0]=a/k[j][2],m[1]=a/k[j][2],m[2]=a/k[j][2],m[3]="number"==typeof b?b/k[j][3]:1,m=m.map(function(a){return Math.max(Math.min(a,1),0)})}return m},b.exports=d.Color},{"../core/constants":20,"../core/core":21,"./color_conversion":13}],16:[function(a,b,c){"use strict";var d=a("../core/core"),e=a("../core/constants");a("./p5.Color"),d.prototype.background=function(){return arguments[0]instanceof d.Image?this.image(arguments[0],0,0,this.width,this.height):this._renderer.background.apply(this._renderer,arguments),this},d.prototype.clear=function(){return this._renderer.clear(),this},d.prototype.colorMode=function(a,b,c,f,g){if(d._validateParameters("colorMode",arguments),a===e.RGB||a===e.HSB||a===e.HSL){this._colorMode=a;var h=this._colorMaxes[a];2===arguments.length?(h[0]=b,h[1]=b,h[2]=b,h[3]=b):4===arguments.length?(h[0]=b,h[1]=c,h[2]=f):5===arguments.length&&(h[0]=b,h[1]=c,h[2]=f,h[3]=g)}return this},d.prototype.fill=function(){return this._renderer._setProperty("_fillSet",!0),this._renderer._setProperty("_doFill",!0),this._renderer.fill.apply(this._renderer,arguments),this},d.prototype.noFill=function(){return this._renderer._setProperty("_doFill",!1),this},d.prototype.noStroke=function(){return this._renderer._setProperty("_doStroke",!1),this},d.prototype.stroke=function(){return this._renderer._setProperty("_strokeSet",!0),this._renderer._setProperty("_doStroke",!0),this._renderer.stroke.apply(this._renderer,arguments),this},b.exports=d},{"../core/constants":20,"../core/core":21,"./p5.Color":15}],17:[function(a,b,c){"use strict";var d=a("./core"),e=a("./constants"),f=a("./canvas");a("./error_helpers"),d.prototype.arc=function(a,b,c,f,g,h,i){if(d._validateParameters("arc",arguments),!this._renderer._doStroke&&!this._renderer._doFill)return this;for(this._angleMode===e.DEGREES&&(g=this.radians(g),h=this.radians(h));g<0;)g+=e.TWO_PI;for(;h<0;)h+=e.TWO_PI;return g%=e.TWO_PI,h%=e.TWO_PI,h===g&&(h+=e.TWO_PI),g=g<=e.HALF_PI?Math.atan(c/f*Math.tan(g)):g>e.HALF_PI&&g<=3*e.HALF_PI?Math.atan(c/f*Math.tan(g))+e.PI:Math.atan(c/f*Math.tan(g))+e.TWO_PI,h=h<=e.HALF_PI?Math.atan(c/f*Math.tan(h)):h>e.HALF_PI&&h<=3*e.HALF_PI?Math.atan(c/f*Math.tan(h))+e.PI:Math.atan(c/f*Math.tan(h))+e.TWO_PI,g>h&&(h+=e.TWO_PI),c=Math.abs(c),f=Math.abs(f),this._renderer.arc(a,b,c,f,g,h,i),this},d.prototype.ellipse=function(a,b,c,e,g,h){if(d._validateParameters("ellipse",arguments),c<0&&(c=Math.abs(c)),void 0===e?e=c:e<0&&(e=Math.abs(e)),this._renderer._doStroke||this._renderer._doFill){var i=f.modeAdjust(a,b,c,e,this._renderer._ellipseMode);this._renderer.ellipse([i.x,i.y,i.w,i.h,g,h])}return this},d.prototype.line=function(){return d._validateParameters("line",arguments),this._renderer._doStroke&&this._renderer.line.apply(this._renderer,arguments),this},d.prototype.point=function(){return d._validateParameters("point",arguments),this._renderer._doStroke&&this._renderer.point.apply(this._renderer,arguments),this},d.prototype.quad=function(){return d._validateParameters("quad",arguments),(this._renderer._doStroke||this._renderer._doFill)&&this._renderer.quad.apply(this._renderer,arguments),this},d.prototype.rect=function(a,b,c,e,g,h){if(d._validateParameters("rect",arguments),this._renderer._doStroke||this._renderer._doFill){var i=f.modeAdjust(a,b,c,e,this._renderer._rectMode);this._renderer.rect([i.x,i.y,i.w,i.h,g,h])}return this},d.prototype.triangle=function(){return d._validateParameters("triangle",arguments),(this._renderer._doStroke||this._renderer._doFill)&&this._renderer.triangle(arguments),this},b.exports=d},{"./canvas":19,"./constants":20,"./core":21,"./error_helpers":24}],18:[function(a,b,c){"use strict";var d=a("./core"),e=a("./constants");d.prototype.ellipseMode=function(a){return d._validateParameters("ellipseMode",arguments),a!==e.CORNER&&a!==e.CORNERS&&a!==e.RADIUS&&a!==e.CENTER||(this._renderer._ellipseMode=a),this},d.prototype.noSmooth=function(){return this._renderer.noSmooth(),this},d.prototype.rectMode=function(a){return d._validateParameters("rectMode",arguments),a!==e.CORNER&&a!==e.CORNERS&&a!==e.RADIUS&&a!==e.CENTER||(this._renderer._rectMode=a),this},d.prototype.smooth=function(){return this._renderer.smooth(),this},d.prototype.strokeCap=function(a){return d._validateParameters("strokeCap",arguments),a!==e.ROUND&&a!==e.SQUARE&&a!==e.PROJECT||this._renderer.strokeCap(a),this},d.prototype.strokeJoin=function(a){return d._validateParameters("strokeJoin",arguments),a!==e.ROUND&&a!==e.BEVEL&&a!==e.MITER||this._renderer.strokeJoin(a),this},d.prototype.strokeWeight=function(a){return d._validateParameters("strokeWeight",arguments),this._renderer.strokeWeight(a),this},b.exports=d},{"./constants":20,"./core":21}],19:[function(a,b,c){"use strict";var d=a("./constants");b.exports={modeAdjust:function(a,b,c,e,f){return f===d.CORNER?{x:a,y:b,w:c,h:e}:f===d.CORNERS?{x:a,y:b,w:c-a,h:e-b}:f===d.RADIUS?{x:a-c,y:b-e,w:2*c,h:2*e}:f===d.CENTER?{x:a-.5*c,y:b-.5*e,w:c,h:e}:void 0},arcModeAdjust:function(a,b,c,e,f){return f===d.CORNER?{x:a+.5*c,y:b+.5*e,w:c,h:e}:f===d.CORNERS?{x:a,y:b,w:c+a,h:e+b}:f===d.RADIUS?{x:a,y:b,w:2*c,h:2*e}:f===d.CENTER?{x:a,y:b,w:c,h:e}:void 0}}},{"./constants":20}],20:[function(a,b,c){"use strict";var d=Math.PI;b.exports={P2D:"p2d",WEBGL:"webgl",ARROW:"default",CROSS:"crosshair",HAND:"pointer",MOVE:"move",TEXT:"text",WAIT:"wait",HALF_PI:d/2,PI:d,QUARTER_PI:d/4,TAU:2*d,TWO_PI:2*d,DEGREES:"degrees",RADIANS:"radians",DEG_TO_RAD:d/180,RAD_TO_DEG:180/d,CORNER:"corner",CORNERS:"corners",RADIUS:"radius",RIGHT:"right",LEFT:"left",CENTER:"center",TOP:"top",BOTTOM:"bottom",BASELINE:"alphabetic",POINTS:0,LINES:1,LINE_STRIP:3,LINE_LOOP:2,TRIANGLES:4,TRIANGLE_FAN:6,TRIANGLE_STRIP:5,QUADS:"quads",QUAD_STRIP:"quad_strip",CLOSE:"close",OPEN:"open",CHORD:"chord",PIE:"pie",PROJECT:"square",SQUARE:"butt",ROUND:"round",BEVEL:"bevel",MITER:"miter",RGB:"rgb",HSB:"hsb",HSL:"hsl",AUTO:"auto",ALT:18,BACKSPACE:8,CONTROL:17,DELETE:46,DOWN_ARROW:40,ENTER:13,ESCAPE:27,LEFT_ARROW:37,OPTION:18,RETURN:13,RIGHT_ARROW:39,SHIFT:16,TAB:9,UP_ARROW:38,BLEND:"source-over",ADD:"lighter",DARKEST:"darken",LIGHTEST:"lighten",DIFFERENCE:"difference",EXCLUSION:"exclusion",MULTIPLY:"multiply",SCREEN:"screen",REPLACE:"copy",OVERLAY:"overlay",HARD_LIGHT:"hard-light",SOFT_LIGHT:"soft-light",DODGE:"color-dodge",BURN:"color-burn",THRESHOLD:"threshold",GRAY:"gray",OPAQUE:"opaque",INVERT:"invert",POSTERIZE:"posterize",DILATE:"dilate",ERODE:"erode",BLUR:"blur",NORMAL:"normal",ITALIC:"italic",BOLD:"bold",_DEFAULT_TEXT_FILL:"#000000",_DEFAULT_LEADMULT:1.25,_CTX_MIDDLE:"middle",LINEAR:"linear",QUADRATIC:"quadratic",BEZIER:"bezier",CURVE:"curve",STROKE:"stroke",FILL:"fill",TEXTURE:"texture",IMMEDIATE:"immediate",LANDSCAPE:"landscape",PORTRAIT:"portrait",_DEFAULT_STROKE:"#000000",_DEFAULT_FILL:"#FFFFFF"}},{}],21:[function(a,b,c){"use strict";a("./shim");var d=a("./constants"),e=function(a,b,c){"boolean"==typeof b&&void 0===c&&(c=b,b=void 0),this._setupDone=!1,this._pixelDensity=Math.ceil(window.devicePixelRatio)||1,this._userNode=b,this._curElement=null,this._elements=[],this._requestAnimId=0,this._preloadCount=0,this._isGlobal=!1,this._loop=!0,this._initializeInstanceVariables(),this._defaultCanvasSize={width:100,height:100},this._events={mousemove:null,mousedown:null,mouseup:null,dragend:null,dragover:null,click:null,dblclick:null,mouseover:null,mouseout:null,keydown:null,keyup:null,keypress:null,touchstart:null,touchmove:null,touchend:null,resize:null,blur:null},this._events.wheel=null,this._loadingScreenId="p5_loading",this._registeredMethods={};for(var d=Object.getOwnPropertyNames(e.prototype._registeredMethods),f=0;f<d.length;f++){var g=d[f];this._registeredMethods[g]=e.prototype._registeredMethods[g].slice()}window.DeviceOrientationEvent&&(this._events.deviceorientation=null),window.DeviceMotionEvent&&!window._isNodeWebkit&&(this._events.devicemotion=null),this._start=function(){this._userNode&&"string"==typeof this._userNode&&(this._userNode=document.getElementById(this._userNode));var a=this.preload||window.preload;if(a){var b=document.getElementById(this._loadingScreenId);if(!b){b=document.createElement("div"),b.innerHTML="Loading...",b.style.position="absolute",b.id=this._loadingScreenId;(this._userNode||document.body).appendChild(b)}for(var c in this._preloadMethods){this._preloadMethods[c]=this._preloadMethods[c]||e;var d=this._preloadMethods[c];d!==e.prototype&&d!==e||(d=this._isGlobal?window:this),this._registeredPreloadMethods[c]=d[c],d[c]=this._wrapPreload(d,c)}a(),this._runIfPreloadsAreDone()}else this._setup(),this._runFrames(),this._draw()}.bind(this),this._runIfPreloadsAreDone=function(){var a=this._isGlobal?window:this;if(0===a._preloadCount){var b=document.getElementById(a._loadingScreenId);b&&b.parentNode.removeChild(b),a._setup(),a._runFrames(),a._draw()}},this._decrementPreload=function(){var a=this._isGlobal?window:this;"function"==typeof a.preload&&(a._setProperty("_preloadCount",a._preloadCount-1),a._runIfPreloadsAreDone())},this._wrapPreload=function(a,b){return function(){return this._incrementPreload(),this._registeredPreloadMethods[b].apply(a,arguments)}.bind(this)},this._incrementPreload=function(){var a=this._isGlobal?window:this;a._setProperty("_preloadCount",a._preloadCount+1)},this._setup=function(){this.createCanvas(this._defaultCanvasSize.width,this._defaultCanvasSize.height,"p2d");var a=this._isGlobal?window:this;if("function"==typeof a.preload)for(var b in this._preloadMethods)a[b]=this._preloadMethods[b][b],a[b]&&this&&(a[b]=a[b].bind(this));"function"==typeof a.setup&&a.setup();for(var c=document.getElementsByTagName("canvas"),d=0;d<c.length;d++){var e=c[d];"true"===e.dataset.hidden&&(e.style.visibility="",delete e.dataset.hidden)}this._setupDone=!0}.bind(this),this._draw=function(){var a=window.performance.now(),b=a-this._lastFrameTime,c=1e3/this._targetFrameRate;(!this._loop||b>=c-5)&&(this.redraw(),this._frameRate=1e3/(a-this._lastFrameTime),this._lastFrameTime=a,void 0!==this._updateMouseCoords&&this._updateMouseCoords()),this._loop&&(this._requestAnimId=window.requestAnimationFrame(this._draw))}.bind(this),this._runFrames=function(){this._updateInterval&&clearInterval(this._updateInterval)}.bind(this),this._setProperty=function(a,b){this[a]=b,this._isGlobal&&(window[a]=b)}.bind(this),this.remove=function(){if(this._curElement){this._loop=!1,this._requestAnimId&&window.cancelAnimationFrame(this._requestAnimId);for(var a in this._events)window.removeEventListener(a,this._events[a]);for(var b=0;b<this._elements.length;b++){var c=this._elements[b];c.elt.parentNode&&c.elt.parentNode.removeChild(c.elt);for(var d in c._events)c.elt.removeEventListener(d,c._events[d])}var f=this;if(this._registeredMethods.remove.forEach(function(a){void 0!==a&&a.call(f)}),this._isGlobal){for(var g in e.prototype)try{delete window[g]}catch(a){window[g]=void 0}for(var h in this)if(this.hasOwnProperty(h))try{delete window[h]}catch(a){window[h]=void 0}}}}.bind(this),this._registeredMethods.init.forEach(function(a){void 0!==a&&a.call(this)},this);var h=this._createFriendlyGlobalFunctionBinder();if(a)a(this);else{this._isGlobal=!0,e.instance=this;for(var i in e.prototype)if("function"==typeof e.prototype[i]){var j=i.substring(2);this._events.hasOwnProperty(j)||(Math.hasOwnProperty(i)&&Math[i]===e.prototype[i]?h(i,e.prototype[i]):h(i,e.prototype[i].bind(this)))}else h(i,e.prototype[i]);for(var k in this)this.hasOwnProperty(k)&&h(k,this[k])}for(var l in this._events){var m=this["_on"+l];if(m){var n=m.bind(this);window.addEventListener(l,n,{passive:!1}),this._events[l]=n}}var o=function(){this._setProperty("focused",!0)}.bind(this),p=function(){this._setProperty("focused",!1)}.bind(this);window.addEventListener("focus",o),window.addEventListener("blur",p),this.registerMethod("remove",function(){window.removeEventListener("focus",o),window.removeEventListener("blur",p)}),c?this._start():"complete"===document.readyState?this._start():window.addEventListener("load",this._start.bind(this),!1)};e.prototype._initializeInstanceVariables=function(){this._styles=[],this._bezierDetail=20,this._curveDetail=20,this._colorMode=d.RGB,this._colorMaxes={rgb:[255,255,255,255],hsb:[360,100,100,1],hsl:[360,100,100,1]}},e.instance=null,e.disableFriendlyErrors=!1;for(var f in d)e.prototype[f]=d[f];e.prototype._preloadMethods={loadJSON:e.prototype,loadImage:e.prototype,loadStrings:e.prototype,loadXML:e.prototype,loadShape:e.prototype,loadTable:e.prototype,loadFont:e.prototype,loadModel:e.prototype,loadShader:e.prototype},e.prototype._registeredMethods={init:[],pre:[],post:[],remove:[]},e.prototype._registeredPreloadMethods={},e.prototype.registerPreloadMethod=function(a,b){e.prototype._preloadMethods.hasOwnProperty(a)||(e.prototype._preloadMethods[a]=b)},e.prototype.registerMethod=function(a,b){var c=this||e.prototype;c._registeredMethods.hasOwnProperty(a)||(c._registeredMethods[a]=[]),c._registeredMethods[a].push(b)},e.prototype._createFriendlyGlobalFunctionBinder=function(a){a=a||{};var b=a.globalObject||window,c=a.log||console.log.bind(console),d={print:!0};return function(a,f){if(e.disableFriendlyErrors,1)b[a]=f;else try{if(a in b&&!(a in d))throw new Error('global "'+a+'" already exists');Object.defineProperty(b,a,{configurable:!0,enumerable:!0,get:function(){return f},set:function(d){Object.defineProperty(b,a,{configurable:!0,enumerable:!0,value:d,writable:!0}),c('You just changed the value of "'+a+"\", which was a p5 function. This could cause problems later if you're not careful.")}})}catch(d){c('p5 had problems creating the global function "'+a+'", possibly because your code is already using that name as a variable. You may want to rename your variable to something else.'),b[a]=f}}},b.exports=e},{"./constants":20,"./shim":31}],22:[function(a,b,c){"use strict";var d=a("./core");a("./error_helpers"),d.prototype.bezier=function(){return d._validateParameters("bezier",arguments),(this._renderer._doStroke||this._renderer._doFill)&&this._renderer.bezier.apply(this._renderer,arguments),this},d.prototype.bezierDetail=function(a){return d._validateParameters("bezierDetail",arguments),this._bezierDetail=a,this},d.prototype.bezierPoint=function(a,b,c,e,f){d._validateParameters("bezierPoint",arguments);var g=1-f;return Math.pow(g,3)*a+3*Math.pow(g,2)*f*b+3*g*Math.pow(f,2)*c+Math.pow(f,3)*e},d.prototype.bezierTangent=function(a,b,c,e,f){d._validateParameters("bezierTangent",arguments);var g=1-f;return 3*e*Math.pow(f,2)-3*c*Math.pow(f,2)+6*c*g*f-6*b*g*f+3*b*Math.pow(g,2)-3*a*Math.pow(g,2)},d.prototype.curve=function(){return d._validateParameters("curve",arguments),this._renderer._doStroke&&this._renderer.curve.apply(this._renderer,arguments),this},d.prototype.curveDetail=function(a){return d._validateParameters("curveDetail",arguments),this._curveDetail=a,this},d.prototype.curveTightness=function(a){d._validateParameters("curveTightness",arguments),this._renderer._curveTightness=a},d.prototype.curvePoint=function(a,b,c,e,f){d._validateParameters("curvePoint",arguments);var g=f*f*f,h=f*f;return a*(-.5*g+h-.5*f)+b*(1.5*g-2.5*h+1)+c*(-1.5*g+2*h+.5*f)+e*(.5*g-.5*h)},d.prototype.curveTangent=function(a,b,c,e,f){d._validateParameters("curveTangent",arguments);var g=f*f;return a*(-3*g/2+2*f-.5)+b*(9*g/2-5*f)+c*(-9*g/2+4*f+.5)+e*(3*g/2-f)},b.exports=d},{"./core":21,"./error_helpers":24}],23:[function(a,b,c){"use strict";function d(){return window.innerWidth||document.documentElement&&document.documentElement.clientWidth||document.body&&document.body.clientWidth||0}function e(){return window.innerHeight||document.documentElement&&document.documentElement.clientHeight||document.body&&document.body.clientHeight||0}function f(a){if(!(document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled))throw new Error("Fullscreen not enabled in this browser.");a.requestFullscreen?a.requestFullscreen():a.mozRequestFullScreen?a.mozRequestFullScreen():a.webkitRequestFullscreen?a.webkitRequestFullscreen():a.msRequestFullscreen&&a.msRequestFullscreen()}function g(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()}var h=a("./core"),i=a("./constants"),j=[i.ARROW,i.CROSS,i.HAND,i.MOVE,i.TEXT,i.WAIT];h.prototype._frameRate=0,h.prototype._lastFrameTime=window.performance.now(),h.prototype._targetFrameRate=60;var k=window.print;h.prototype.print=function(a){void 0===a?k():console.log.apply(console,arguments)},h.prototype.frameCount=0,h.prototype.focused=document.hasFocus(),h.prototype.cursor=function(a,b,c){var d="auto",e=this._curElement.elt;if(j.indexOf(a)>-1)d=a;else if("string"==typeof a){var f="";b&&c&&"number"==typeof b&&"number"==typeof c&&(f=b+" "+c),d="http://"===a.substring(0,7)||"https://"===a.substring(0,8)?"url("+a+") "+f+", auto":/\.(cur|jpg|jpeg|gif|png|CUR|JPG|JPEG|GIF|PNG)$/.test(a)?"url("+a+") "+f+", auto":a}e.style.cursor=d},h.prototype.frameRate=function(a){return h._validateParameters("frameRate",arguments),"number"!=typeof a||a<0?this._frameRate:(this._setProperty("_targetFrameRate",a),this._runFrames(),this)},h.prototype.getFrameRate=function(){return this.frameRate()},h.prototype.setFrameRate=function(a){return this.frameRate(a)},h.prototype.noCursor=function(){this._curElement.elt.style.cursor="none"},h.prototype.displayWidth=screen.width,h.prototype.displayHeight=screen.height,h.prototype.windowWidth=d(),h.prototype.windowHeight=e(),h.prototype._onresize=function(a){this._setProperty("windowWidth",d()),this._setProperty("windowHeight",e());var b,c=this._isGlobal?window:this;"function"==typeof c.windowResized&&(void 0===(b=c.windowResized(a))||b||a.preventDefault())},h.prototype.width=0,h.prototype.height=0,h.prototype.fullscreen=function(a){if(h._validateParameters("fullscreen",arguments),void 0===a)return document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement;a?f(document.documentElement):g()},h.prototype.pixelDensity=function(a){if(h._validateParameters("pixelDensity",arguments),"number"!=typeof a)return this._pixelDensity;this._pixelDensity=a,this.resizeCanvas(this.width,this.height,!0)},h.prototype.displayDensity=function(){return window.devicePixelRatio},h.prototype.getURL=function(){return location.href},h.prototype.getURLPath=function(){return location.pathname.split("/").filter(function(a){return""!==a})},h.prototype.getURLParams=function(){for(var a,b=/[?&]([^&=]+)(?:[&=])([^&=]+)/gim,c={};null!=(a=b.exec(location.search));)a.index===b.lastIndex&&b.lastIndex++,c[a[1]]=a[2];return c},b.exports=h},{"./constants":20,"./core":21}],24:[function(a,b,c){"use strict";var d=a("./core");a("./constants");d._validateParameters=d._friendlyFileLoadError=function(){};var e=null,f="https://github.com/processing/p5.js/wiki/Frequently-Asked-Questions#why-cant-i-assign-variables-using-p5-functions-and-variables-before-setup",g=function(){var b={},c=function(a){return Object.getOwnPropertyNames(a).filter(function(a){return"_"!==a[0]&&(!(a in b)&&(b[a]=!0,!0))}).map(function(b){var c;return c="function"==typeof a[b]?"function":b===b.toUpperCase()?"constant":"variable",{name:b,type:c}})};e=[].concat(c(d.prototype),c(a("./constants"))),e.sort(function(a,b){return b.name.length-a.name.length})},h=function(a,b){b||(b=console.log.bind(console)),e||g(),e.some(function(c){if(a.message&&null!==a.message.match("\\W?"+c.name+"\\W"))return b("Did you just try to use p5.js's "+c.name+("function"===c.type?"() ":" ")+c.type+"? If so, you may want to move it into your sketch's setup() function.\n\nFor more details, see: "+f),!0})};d.prototype._helpForMisusedAtTopLevelCode=h,"complete"!==document.readyState&&(window.addEventListener("error",h,!1),window.addEventListener("load",function(){window.removeEventListener("error",h,!1)})),b.exports=d},{"../../docs/reference/data.json":void 0,"./constants":20,"./core":21}],25:[function(a,b,c){"use strict";var d=a("../core/core"),e=function(){window.PHANTOMJS||window.mocha||(window.setup&&"function"==typeof window.setup||window.draw&&"function"==typeof window.draw)&&!d.instance&&new d};"complete"===document.readyState?e():window.addEventListener("load",e,!1)},{"../core/core":21}],26:[function(a,b,c){"use strict";function d(a,b,c){return!1===b?f(a,c):e(a,b,c),this}function e(a,b,c){c._events[a]&&f(a,c);var d=b.bind(c);c.elt.addEventListener(a,d,!1),c._events[a]=d}function f(a,b){var c=b._events[a];b.elt.removeEventListener(a,c,!1),b._events[a]=null}var g=a("./core");g.Element=function(a,b){this.elt=a,this._pInst=b,this._events={},this.width=this.elt.offsetWidth,this.height=this.elt.offsetHeight,this.name="p5.Element"},g.Element.prototype.parent=function(a){return void 0===a?this.elt.parentNode:("string"==typeof a?("#"===a[0]&&(a=a.substring(1)),a=document.getElementById(a)):a instanceof g.Element&&(a=a.elt),a.appendChild(this.elt),this)},g.Element.prototype.id=function(a){return void 0===a?this.elt.id:(this.elt.id=a,this.width=this.elt.offsetWidth,this.height=this.elt.offsetHeight,this)},g.Element.prototype.class=function(a){return void 0===a?this.elt.className:(this.elt.className=a,this)},g.Element.prototype.mousePressed=function(a){return d("mousedown",a,this),d("touchstart",a,this),this},g.Element.prototype.doubleClicked=function(a){return d("dblclick",a,this),this},g.Element.prototype.mouseWheel=function(a){return d("wheel",a,this),this},g.Element.prototype.mouseReleased=function(a){return d("mouseup",a,this),d("touchend",a,this),this},g.Element.prototype.mouseClicked=function(a){return d("click",a,this),this},g.Element.prototype.mouseMoved=function(a){return d("mousemove",a,this),d("touchmove",a,this),this},g.Element.prototype.mouseOver=function(a){return d("mouseover",a,this),this},g.Element.prototype.changed=function(a){return d("change",a,this),this},g.Element.prototype.input=function(a){return d("input",a,this),this},g.Element.prototype.mouseOut=function(a){return d("mouseout",a,this),this},g.Element.prototype.touchStarted=function(a){return d("touchstart",a,this),d("mousedown",a,this),this},g.Element.prototype.touchMoved=function(a){return d("touchmove",a,this),d("mousemove",a,this),this},g.Element.prototype.touchEnded=function(a){return d("touchend",a,this),d("mouseup",a,this),this},g.Element.prototype.dragOver=function(a){return d("dragover",a,this),this},g.Element.prototype.dragLeave=function(a){return d("dragleave",a,this),this},g.Element.prototype.drop=function(a,b){function c(b){var c=new g.File(b);return function(b){c.data=b.target.result,a(c)}}return window.File&&window.FileReader&&window.FileList&&window.Blob?(e("dragover",function(a){a.stopPropagation(),a.preventDefault()},this),e("dragleave",function(a){a.stopPropagation(),a.preventDefault()},this),void 0!==b&&e("drop",b,this),e("drop",function(a){a.stopPropagation(),a.preventDefault();for(var b=a.dataTransfer.files,d=0;d<b.length;d++){var e=b[d],f=new FileReader;f.onload=c(e),e.type.indexOf("text")>-1?f.readAsText(e):f.readAsDataURL(e)}},this)):console.log("The File APIs are not fully supported in this browser."),this},g.Element.prototype._setProperty=function(a,b){this[a]=b},b.exports=g.Element},{"./core":21}],27:[function(a,b,c){"use strict";var d=a("./core"),e=a("./constants");d.Graphics=function(a,b,c,f){var g=c||e.P2D;this.canvas=document.createElement("canvas"),(f._userNode||document.body).appendChild(this.canvas),d.Element.call(this,this.canvas,f,!1);for(var h in d.prototype)this[h]||("function"==typeof d.prototype[h]?this[h]=d.prototype[h].bind(this):this[h]=d.prototype[h]);return d.prototype._initializeInstanceVariables.apply(this),this.width=a,this.height=b,this._pixelDensity=f._pixelDensity,g===e.WEBGL?this._renderer=new d.RendererGL(this.canvas,this,!1):this._renderer=new d.Renderer2D(this.canvas,this,!1),f._elements.push(this),this._renderer.resize(a,b),this._renderer._applyDefaults(),this.name="p5.Graphics",this},
d.Graphics.prototype=Object.create(d.Element.prototype),d.Graphics.prototype.remove=function(){this.elt.parentNode&&this.elt.parentNode.removeChild(this.elt);for(var a in this._events)this.elt.removeEventListener(a,this._events[a])},b.exports=d.Graphics},{"./constants":20,"./core":21}],28:[function(a,b,c){"use strict";function d(a){var b=0,c=0;if(a.offsetParent)do{b+=a.offsetLeft,c+=a.offsetTop}while(a=a.offsetParent);else b+=a.offsetLeft,c+=a.offsetTop;return[b,c]}var e=a("./core"),f=a("../core/constants");e.Renderer=function(a,b,c){e.Element.call(this,a,b),this.name="p5.Renderer",this.canvas=a,this._pInst=b,c?(this._isMainCanvas=!0,this._pInst._setProperty("_curElement",this),this._pInst._setProperty("canvas",this.canvas),this._pInst._setProperty("width",this.width),this._pInst._setProperty("height",this.height)):(this.canvas.style.display="none",this._styles=[]),this._textSize=12,this._textLeading=15,this._textFont="sans-serif",this._textStyle=f.NORMAL,this._textAscent=null,this._textDescent=null,this._rectMode=f.CORNER,this._ellipseMode=f.CENTER,this._curveTightness=0,this._imageMode=f.CORNER,this._tint=null,this._doStroke=!0,this._doFill=!0,this._strokeSet=!1,this._fillSet=!1},e.Renderer.prototype=Object.create(e.Element.prototype),e.Renderer.prototype.resize=function(a,b){this.width=a,this.height=b,this.elt.width=a*this._pInst._pixelDensity,this.elt.height=b*this._pInst._pixelDensity,this.elt.style.width=a+"px",this.elt.style.height=b+"px",this._isMainCanvas&&(this._pInst._setProperty("width",this.width),this._pInst._setProperty("height",this.height))},e.Renderer.prototype.textLeading=function(a){return"number"==typeof a?(this._setProperty("_textLeading",a),this):this._textLeading},e.Renderer.prototype.textSize=function(a){return"number"==typeof a?(this._setProperty("_textSize",a),this._setProperty("_textLeading",a*f._DEFAULT_LEADMULT),this._applyTextProperties()):this._textSize},e.Renderer.prototype.textStyle=function(a){return a?(a!==f.NORMAL&&a!==f.ITALIC&&a!==f.BOLD||this._setProperty("_textStyle",a),this._applyTextProperties()):this._textStyle},e.Renderer.prototype.textAscent=function(){return null===this._textAscent&&this._updateTextMetrics(),this._textAscent},e.Renderer.prototype.textDescent=function(){return null===this._textDescent&&this._updateTextMetrics(),this._textDescent},e.Renderer.prototype._applyDefaults=function(){return this},e.Renderer.prototype._isOpenType=function(a){return"object"==typeof(a=a||this._textFont)&&a.font&&a.font.supported},e.Renderer.prototype._updateTextMetrics=function(){if(this._isOpenType())return this._setProperty("_textAscent",this._textFont._textAscent()),this._setProperty("_textDescent",this._textFont._textDescent()),this;var a=document.createElement("span");a.style.fontFamily=this._textFont,a.style.fontSize=this._textSize+"px",a.innerHTML="ABCjgq|";var b=document.createElement("div");b.style.display="inline-block",b.style.width="1px",b.style.height="0px";var c=document.createElement("div");c.appendChild(a),c.appendChild(b),c.style.height="0px",c.style.overflow="hidden",document.body.appendChild(c),b.style.verticalAlign="baseline";var e=d(b),f=d(a),g=e[1]-f[1];b.style.verticalAlign="bottom",e=d(b),f=d(a);var h=e[1]-f[1],i=h-g;return document.body.removeChild(c),this._setProperty("_textAscent",g),this._setProperty("_textDescent",i),this},b.exports=e.Renderer},{"../core/constants":20,"./core":21}],29:[function(a,b,c){"use strict";var d=a("./core"),e=a("./canvas"),f=a("./constants"),g=a("../image/filters");a("./p5.Renderer");var h="rgba(0,0,0,0)";d.Renderer2D=function(a,b,c){return d.Renderer.call(this,a,b,c),this.name="p5.Renderer2D",this.drawingContext=this.canvas.getContext("2d"),this._pInst._setProperty("drawingContext",this.drawingContext),this},d.Renderer2D.prototype=Object.create(d.Renderer.prototype),d.Renderer2D.prototype._applyDefaults=function(){this._cachedFillStyle=this._cachedStrokeStyle=void 0,this._setFill(f._DEFAULT_FILL),this._setStroke(f._DEFAULT_STROKE),this.drawingContext.lineCap=f.ROUND,this.drawingContext.font="normal 12px sans-serif"},d.Renderer2D.prototype.resize=function(a,b){d.Renderer.prototype.resize.call(this,a,b),this.drawingContext.scale(this._pInst._pixelDensity,this._pInst._pixelDensity)},d.Renderer2D.prototype.background=function(){if(this.drawingContext.save(),this.drawingContext.setTransform(1,0,0,1,0,0),this.drawingContext.scale(this._pInst._pixelDensity,this._pInst._pixelDensity),arguments[0]instanceof d.Image)this._pInst.image(arguments[0],0,0,this.width,this.height);else{var a=this._getFill(),b=this._pInst.color.apply(this._pInst,arguments),c=b.toString();this._setFill(c),this.drawingContext.fillRect(0,0,this.width,this.height),this._setFill(a)}this.drawingContext.restore()},d.Renderer2D.prototype.clear=function(){this.drawingContext.clearRect(0,0,this.width,this.height)},d.Renderer2D.prototype.fill=function(){var a=this._pInst.color.apply(this._pInst,arguments);this._setFill(a.toString())},d.Renderer2D.prototype.stroke=function(){var a=this._pInst.color.apply(this._pInst,arguments);this._setStroke(a.toString())},d.Renderer2D.prototype.image=function(a,b,c,e,f,g,h,i,j){var k;try{this._tint&&(d.MediaElement&&a instanceof d.MediaElement&&a.loadPixels(),a.canvas&&(k=this._getTintedImageCanvas(a))),k||(k=a.canvas||a.elt),this.drawingContext.drawImage(k,b,c,e,f,g,h,i,j)}catch(a){if("NS_ERROR_NOT_AVAILABLE"!==a.name)throw a}},d.Renderer2D.prototype._getTintedImageCanvas=function(a){if(!a.canvas)return a;var b=g._toPixels(a.canvas),c=document.createElement("canvas");c.width=a.canvas.width,c.height=a.canvas.height;for(var d=c.getContext("2d"),e=d.createImageData(a.canvas.width,a.canvas.height),f=e.data,h=0;h<b.length;h+=4){var i=b[h],j=b[h+1],k=b[h+2],l=b[h+3];f[h]=i*this._tint[0]/255,f[h+1]=j*this._tint[1]/255,f[h+2]=k*this._tint[2]/255,f[h+3]=l*this._tint[3]/255}return d.putImageData(e,0,0),c},d.Renderer2D.prototype.blendMode=function(a){this.drawingContext.globalCompositeOperation=a},d.Renderer2D.prototype.blend=function(){var a=this.drawingContext.globalCompositeOperation,b=arguments[arguments.length-1],c=Array.prototype.slice.call(arguments,0,arguments.length-1);this.drawingContext.globalCompositeOperation=b,this._pInst?this._pInst.copy.apply(this._pInst,c):this.copy.apply(this,c),this.drawingContext.globalCompositeOperation=a},d.Renderer2D.prototype.copy=function(){var a,b,c,e,f,g,h,i,j;if(9===arguments.length)a=arguments[0],b=arguments[1],c=arguments[2],e=arguments[3],f=arguments[4],g=arguments[5],h=arguments[6],i=arguments[7],j=arguments[8];else{if(8!==arguments.length)throw new Error("Signature not supported");a=this._pInst,b=arguments[0],c=arguments[1],e=arguments[2],f=arguments[3],g=arguments[4],h=arguments[5],i=arguments[6],j=arguments[7]}d.Renderer2D._copyHelper(this,a,b,c,e,f,g,h,i,j)},d.Renderer2D._copyHelper=function(a,b,c,d,e,f,g,h,i,j){b.loadPixels();var k=b.canvas.width/b.width;a.drawingContext.drawImage(b.canvas,k*c,k*d,k*e,k*f,g,h,i,j)},d.Renderer2D.prototype.get=function(a,b,c,e){if(void 0===a&&void 0===b&&void 0===c&&void 0===e?(a=0,b=0,c=this.width,e=this.height):void 0===c&&void 0===e&&(c=1,e=1),a+c<0||b+e<0||a>this.width||b>this.height)return[0,0,0,255];var f=this._pInst||this;f.loadPixels();var g=f._pixelDensity;a=Math.floor(a),b=Math.floor(b),c=Math.floor(c),e=Math.floor(e);var h=a*g,i=b*g;if(1!==c||1!==e||this instanceof d.RendererGL){var j=Math.min(c,f.width),k=Math.min(e,f.height),l=j*g,m=k*g,n=new d.Image(j,k);return n.canvas.getContext("2d").drawImage(this.canvas,h,i,l,m,0,0,j,k),n}var o=this.drawingContext.getImageData(h,i,1,1).data;return[o[0],o[1],o[2],o[3]]},d.Renderer2D.prototype.loadPixels=function(){var a=this._pixelDensity||this._pInst._pixelDensity,b=this.width*a,c=this.height*a,d=this.drawingContext.getImageData(0,0,b,c);this._pInst?(this._pInst._setProperty("imageData",d),this._pInst._setProperty("pixels",d.data)):(this._setProperty("imageData",d),this._setProperty("pixels",d.data))},d.Renderer2D.prototype.set=function(a,b,c){if(a=Math.floor(a),b=Math.floor(b),c instanceof d.Image)this.drawingContext.save(),this.drawingContext.setTransform(1,0,0,1,0,0),this.drawingContext.scale(this._pInst._pixelDensity,this._pInst._pixelDensity),this.drawingContext.drawImage(c.canvas,a,b),this.loadPixels.call(this._pInst),this.drawingContext.restore();else{var e=this._pInst||this,f=0,g=0,h=0,i=0,j=4*(b*e._pixelDensity*(this.width*e._pixelDensity)+a*e._pixelDensity);if(e.imageData||e.loadPixels.call(e),"number"==typeof c)j<e.pixels.length&&(f=c,g=c,h=c,i=255);else if(c instanceof Array){if(c.length<4)throw new Error("pixel array must be of the form [R, G, B, A]");j<e.pixels.length&&(f=c[0],g=c[1],h=c[2],i=c[3])}else c instanceof d.Color&&j<e.pixels.length&&(f=c.levels[0],g=c.levels[1],h=c.levels[2],i=c.levels[3]);for(var k=0;k<e._pixelDensity;k++)for(var l=0;l<e._pixelDensity;l++)j=4*((b*e._pixelDensity+l)*this.width*e._pixelDensity+(a*e._pixelDensity+k)),e.pixels[j]=f,e.pixels[j+1]=g,e.pixels[j+2]=h,e.pixels[j+3]=i}},d.Renderer2D.prototype.updatePixels=function(a,b,c,d){var e=this._pixelDensity||this._pInst._pixelDensity;void 0===a&&void 0===b&&void 0===c&&void 0===d&&(a=0,b=0,c=this.width,d=this.height),c*=e,d*=e,this._pInst?this.drawingContext.putImageData(this._pInst.imageData,a,b,0,0,c,d):this.drawingContext.putImageData(this.imageData,a,b,0,0,c,d)},d.Renderer2D.prototype._acuteArcToBezier=function(a,b){var c=b/2,d=Math.cos(c),e=Math.sin(c),f=1/Math.tan(c),g=a+c,h=Math.cos(g),i=Math.sin(g),j=(4-d)/3,k=e+(d-j)*f;return{ax:Math.cos(a),ay:Math.sin(a),bx:j*h+k*i,by:j*i-k*h,cx:j*h-k*i,cy:j*i+k*h,dx:Math.cos(a+b),dy:Math.sin(a+b)}},d.Renderer2D.prototype.arc=function(a,b,c,d,g,h,i){for(var j=this.drawingContext,k=e.arcModeAdjust(a,b,c,d,this._ellipseMode),l=k.w/2,m=k.h/2,n=1e-5,o=0,p=[];h-g>n;)o=Math.min(h-g,f.HALF_PI),p.push(this._acuteArcToBezier(g,o)),g+=o;return this._doFill&&(j.beginPath(),p.forEach(function(a,b){0===b&&j.moveTo(k.x+a.ax*l,k.y+a.ay*m),j.bezierCurveTo(k.x+a.bx*l,k.y+a.by*m,k.x+a.cx*l,k.y+a.cy*m,k.x+a.dx*l,k.y+a.dy*m)}),i!==f.PIE&&null!=i||j.lineTo(k.x,k.y),j.closePath(),j.fill()),this._doStroke&&(j.beginPath(),p.forEach(function(a,b){0===b&&j.moveTo(k.x+a.ax*l,k.y+a.ay*m),j.bezierCurveTo(k.x+a.bx*l,k.y+a.by*m,k.x+a.cx*l,k.y+a.cy*m,k.x+a.dx*l,k.y+a.dy*m)}),i===f.PIE?(j.lineTo(k.x,k.y),j.closePath()):i===f.CHORD&&j.closePath(),j.stroke()),this},d.Renderer2D.prototype.ellipse=function(a){var b=this.drawingContext,c=this._doFill,d=this._doStroke,e=a[0],f=a[1],g=a[2],i=a[3];if(c&&!d){if(this._getFill()===h)return this}else if(!c&&d&&this._getStroke()===h)return this;var j=.5522847498,k=g/2*j,l=i/2*j,m=e+g,n=f+i,o=e+g/2,p=f+i/2;b.beginPath(),b.moveTo(e,p),b.bezierCurveTo(e,p-l,o-k,f,o,f),b.bezierCurveTo(o+k,f,m,p-l,m,p),b.bezierCurveTo(m,p+l,o+k,n,o,n),b.bezierCurveTo(o-k,n,e,p+l,e,p),b.closePath(),c&&b.fill(),d&&b.stroke()},d.Renderer2D.prototype.line=function(a,b,c,d){var e=this.drawingContext;return this._doStroke?this._getStroke()===h?this:(e.lineWidth%2==1&&e.translate(.5,.5),e.beginPath(),e.moveTo(a,b),e.lineTo(c,d),e.stroke(),e.lineWidth%2==1&&e.translate(-.5,-.5),this):this},d.Renderer2D.prototype.point=function(a,b){var c=this.drawingContext;if(!this._doStroke)return this;if(this._getStroke()===h)return this;var d=this._getStroke(),e=this._getFill();a=Math.round(a),b=Math.round(b),this._setFill(d),c.lineWidth>1?(c.beginPath(),c.arc(a,b,c.lineWidth/2,0,f.TWO_PI,!1),c.fill()):c.fillRect(a,b,1,1),this._setFill(e)},d.Renderer2D.prototype.quad=function(a,b,c,d,e,f,g,i){var j=this.drawingContext,k=this._doFill,l=this._doStroke;if(k&&!l){if(this._getFill()===h)return this}else if(!k&&l&&this._getStroke()===h)return this;return j.beginPath(),j.moveTo(a,b),j.lineTo(c,d),j.lineTo(e,f),j.lineTo(g,i),j.closePath(),k&&j.fill(),l&&j.stroke(),this},d.Renderer2D.prototype.rect=function(a){var b=a[0],c=a[1],d=a[2],e=a[3],f=a[4],g=a[5],i=a[6],j=a[7],k=this.drawingContext,l=this._doFill,m=this._doStroke;if(l&&!m){if(this._getFill()===h)return this}else if(!l&&m&&this._getStroke()===h)return this;if(this._doStroke&&k.lineWidth%2==1&&k.translate(.5,.5),k.beginPath(),void 0===f)k.rect(b,c,d,e);else{void 0===g&&(g=f),void 0===i&&(i=g),void 0===j&&(j=i);var n=d/2,o=e/2;d<2*f&&(f=n),e<2*f&&(f=o),d<2*g&&(g=n),e<2*g&&(g=o),d<2*i&&(i=n),e<2*i&&(i=o),d<2*j&&(j=n),e<2*j&&(j=o),k.beginPath(),k.moveTo(b+f,c),k.arcTo(b+d,c,b+d,c+e,g),k.arcTo(b+d,c+e,b,c+e,i),k.arcTo(b,c+e,b,c,j),k.arcTo(b,c,b+d,c,f),k.closePath()}return this._doFill&&k.fill(),this._doStroke&&k.stroke(),this._doStroke&&k.lineWidth%2==1&&k.translate(-.5,-.5),this},d.Renderer2D.prototype.triangle=function(a){var b=this.drawingContext,c=this._doFill,d=this._doStroke,e=a[0],f=a[1],g=a[2],i=a[3],j=a[4],k=a[5];if(c&&!d){if(this._getFill()===h)return this}else if(!c&&d&&this._getStroke()===h)return this;b.beginPath(),b.moveTo(e,f),b.lineTo(g,i),b.lineTo(j,k),b.closePath(),c&&b.fill(),d&&b.stroke()},d.Renderer2D.prototype.endShape=function(a,b,c,d,e,g,h){if(0===b.length)return this;if(!this._doStroke&&!this._doFill)return this;var i,j=a===f.CLOSE;j&&!g&&b.push(b[0]);var k,l,m=b.length;if(!c||h!==f.POLYGON&&null!==h)if(!d||h!==f.POLYGON&&null!==h)if(!e||h!==f.POLYGON&&null!==h)if(h===f.POINTS)for(k=0;k<m;k++)i=b[k],this._doStroke&&this._pInst.stroke(i[6]),this._pInst.point(i[0],i[1]);else if(h===f.LINES)for(k=0;k+1<m;k+=2)i=b[k],this._doStroke&&this._pInst.stroke(b[k+1][6]),this._pInst.line(i[0],i[1],b[k+1][0],b[k+1][1]);else if(h===f.TRIANGLES)for(k=0;k+2<m;k+=3)i=b[k],this.drawingContext.beginPath(),this.drawingContext.moveTo(i[0],i[1]),this.drawingContext.lineTo(b[k+1][0],b[k+1][1]),this.drawingContext.lineTo(b[k+2][0],b[k+2][1]),this.drawingContext.lineTo(i[0],i[1]),this._doFill&&(this._pInst.fill(b[k+2][5]),this.drawingContext.fill()),this._doStroke&&(this._pInst.stroke(b[k+2][6]),this.drawingContext.stroke()),this.drawingContext.closePath();else if(h===f.TRIANGLE_STRIP)for(k=0;k+1<m;k++)i=b[k],this.drawingContext.beginPath(),this.drawingContext.moveTo(b[k+1][0],b[k+1][1]),this.drawingContext.lineTo(i[0],i[1]),this._doStroke&&this._pInst.stroke(b[k+1][6]),this._doFill&&this._pInst.fill(b[k+1][5]),k+2<m&&(this.drawingContext.lineTo(b[k+2][0],b[k+2][1]),this._doStroke&&this._pInst.stroke(b[k+2][6]),this._doFill&&this._pInst.fill(b[k+2][5])),this._doFillStrokeClose();else if(h===f.TRIANGLE_FAN){if(m>2){for(this.drawingContext.beginPath(),k=2;k<m;k++)i=b[k],this.drawingContext.moveTo(b[0][0],b[0][1]),this.drawingContext.lineTo(b[k-1][0],b[k-1][1]),this.drawingContext.lineTo(i[0],i[1]),this.drawingContext.lineTo(b[0][0],b[0][1]),k<m-1&&(this._doFill&&i[5]!==b[k+1][5]||this._doStroke&&i[6]!==b[k+1][6])&&(this._doFill&&(this._pInst.fill(i[5]),this.drawingContext.fill(),this._pInst.fill(b[k+1][5])),this._doStroke&&(this._pInst.stroke(i[6]),this.drawingContext.stroke(),this._pInst.stroke(b[k+1][6])),this.drawingContext.closePath(),this.drawingContext.beginPath());this._doFillStrokeClose()}}else if(h===f.QUADS)for(k=0;k+3<m;k+=4){for(i=b[k],this.drawingContext.beginPath(),this.drawingContext.moveTo(i[0],i[1]),l=1;l<4;l++)this.drawingContext.lineTo(b[k+l][0],b[k+l][1]);this.drawingContext.lineTo(i[0],i[1]),this._doFill&&this._pInst.fill(b[k+3][5]),this._doStroke&&this._pInst.stroke(b[k+3][6]),this._doFillStrokeClose()}else if(h===f.QUAD_STRIP){if(m>3)for(k=0;k+1<m;k+=2)i=b[k],this.drawingContext.beginPath(),k+3<m?(this.drawingContext.moveTo(b[k+2][0],b[k+2][1]),this.drawingContext.lineTo(i[0],i[1]),this.drawingContext.lineTo(b[k+1][0],b[k+1][1]),this.drawingContext.lineTo(b[k+3][0],b[k+3][1]),this._doFill&&this._pInst.fill(b[k+3][5]),this._doStroke&&this._pInst.stroke(b[k+3][6])):(this.drawingContext.moveTo(i[0],i[1]),this.drawingContext.lineTo(b[k+1][0],b[k+1][1])),this._doFillStrokeClose()}else{for(this.drawingContext.beginPath(),this.drawingContext.moveTo(b[0][0],b[0][1]),k=1;k<m;k++)i=b[k],i.isVert&&(i.moveTo?this.drawingContext.moveTo(i[0],i[1]):this.drawingContext.lineTo(i[0],i[1]));this._doFillStrokeClose()}else{for(this.drawingContext.beginPath(),k=0;k<m;k++)b[k].isVert?b[k].moveTo?this.drawingContext.moveTo([0],b[k][1]):this.drawingContext.lineTo(b[k][0],b[k][1]):this.drawingContext.quadraticCurveTo(b[k][0],b[k][1],b[k][2],b[k][3]);this._doFillStrokeClose()}else{for(this.drawingContext.beginPath(),k=0;k<m;k++)b[k].isVert?b[k].moveTo?this.drawingContext.moveTo(b[k][0],b[k][1]):this.drawingContext.lineTo(b[k][0],b[k][1]):this.drawingContext.bezierCurveTo(b[k][0],b[k][1],b[k][2],b[k][3],b[k][4],b[k][5]);this._doFillStrokeClose()}else if(m>3){var n=[],o=1-this._curveTightness;for(this.drawingContext.beginPath(),this.drawingContext.moveTo(b[1][0],b[1][1]),k=1;k+2<m;k++)i=b[k],n[0]=[i[0],i[1]],n[1]=[i[0]+(o*b[k+1][0]-o*b[k-1][0])/6,i[1]+(o*b[k+1][1]-o*b[k-1][1])/6],n[2]=[b[k+1][0]+(o*b[k][0]-o*b[k+2][0])/6,b[k+1][1]+(o*b[k][1]-o*b[k+2][1])/6],n[3]=[b[k+1][0],b[k+1][1]],this.drawingContext.bezierCurveTo(n[1][0],n[1][1],n[2][0],n[2][1],n[3][0],n[3][1]);j&&this.drawingContext.lineTo(b[k+1][0],b[k+1][1]),this._doFillStrokeClose()}return c=!1,d=!1,e=!1,g=!1,j&&b.pop(),this},d.Renderer2D.prototype.noSmooth=function(){return"imageSmoothingEnabled"in this.drawingContext&&(this.drawingContext.imageSmoothingEnabled=!1),this},d.Renderer2D.prototype.smooth=function(){return"imageSmoothingEnabled"in this.drawingContext&&(this.drawingContext.imageSmoothingEnabled=!0),this},d.Renderer2D.prototype.strokeCap=function(a){return a!==f.ROUND&&a!==f.SQUARE&&a!==f.PROJECT||(this.drawingContext.lineCap=a),this},d.Renderer2D.prototype.strokeJoin=function(a){return a!==f.ROUND&&a!==f.BEVEL&&a!==f.MITER||(this.drawingContext.lineJoin=a),this},d.Renderer2D.prototype.strokeWeight=function(a){return this.drawingContext.lineWidth=void 0===a||0===a?1e-4:a,this},d.Renderer2D.prototype._getFill=function(){return this._cachedFillStyle||(this._cachedFillStyle=this.drawingContext.fillStyle),this._cachedFillStyle},d.Renderer2D.prototype._setFill=function(a){a!==this._cachedFillStyle&&(this.drawingContext.fillStyle=a,this._cachedFillStyle=a)},d.Renderer2D.prototype._getStroke=function(){return this._cachedStrokeStyle||(this._cachedStrokeStyle=this.drawingContext.strokeStyle),this._cachedStrokeStyle},d.Renderer2D.prototype._setStroke=function(a){a!==this._cachedStrokeStyle&&(this.drawingContext.strokeStyle=a,this._cachedStrokeStyle=a)},d.Renderer2D.prototype.bezier=function(a,b,c,d,e,f,g,h){return this._pInst.beginShape(),this._pInst.vertex(a,b),this._pInst.bezierVertex(c,d,e,f,g,h),this._pInst.endShape(),this},d.Renderer2D.prototype.curve=function(a,b,c,d,e,f,g,h){return this._pInst.beginShape(),this._pInst.curveVertex(a,b),this._pInst.curveVertex(c,d),this._pInst.curveVertex(e,f),this._pInst.curveVertex(g,h),this._pInst.endShape(),this},d.Renderer2D.prototype._doFillStrokeClose=function(){this._doFill&&this.drawingContext.fill(),this._doStroke&&this.drawingContext.stroke(),this.drawingContext.closePath()},d.Renderer2D.prototype.applyMatrix=function(a,b,c,d,e,f){this.drawingContext.transform(a,b,c,d,e,f)},d.Renderer2D.prototype.resetMatrix=function(){return this.drawingContext.setTransform(1,0,0,1,0,0),this.drawingContext.scale(this._pInst._pixelDensity,this._pInst._pixelDensity),this},d.Renderer2D.prototype.rotate=function(a){this.drawingContext.rotate(a)},d.Renderer2D.prototype.scale=function(a,b){return this.drawingContext.scale(a,b),this},d.Renderer2D.prototype.shearX=function(a){return this._pInst._angleMode===f.DEGREES&&(a=this._pInst.degrees(a)),this.drawingContext.transform(1,0,this._pInst.tan(a),1,0,0),this},d.Renderer2D.prototype.shearY=function(a){return this._pInst._angleMode===f.DEGREES&&(a=this._pInst.degrees(a)),this.drawingContext.transform(1,this._pInst.tan(a),0,1,0,0),this},d.Renderer2D.prototype.translate=function(a,b){return this.drawingContext.translate(a,b),this},d.Renderer2D.prototype.text=function(a,b,c,d,e){var g,h,i,j,k,l,m,n,o,p,q=this._pInst,r=Number.MAX_VALUE;if(this._doFill||this._doStroke){if("string"!=typeof a&&(a=a.toString()),a=a.replace(/(\t)/g,"  "),g=a.split("\n"),void 0!==d){for(o=0,i=0;i<g.length;i++)for(k="",n=g[i].split(" "),h=0;h<n.length;h++)l=k+n[h]+" ",m=this.textWidth(l),m>d?(k=n[h]+" ",o+=q.textLeading()):k=l;switch(this._rectMode===f.CENTER&&(b-=d/2,c-=e/2),this.drawingContext.textAlign){case f.CENTER:b+=d/2;break;case f.RIGHT:b+=d}if(void 0!==e){switch(this.drawingContext.textBaseline){case f.BOTTOM:c+=e-o;break;case f._CTX_MIDDLE:c+=(e-o)/2;break;case f.BASELINE:p=!0,this.drawingContext.textBaseline=f.TOP}r=c+e-q.textAscent()}for(i=0;i<g.length;i++){for(k="",n=g[i].split(" "),h=0;h<n.length;h++)l=k+n[h]+" ",m=this.textWidth(l),m>d&&k.length>0?(this._renderText(q,k,b,c,r),k=n[h]+" ",c+=q.textLeading()):k=l;this._renderText(q,k,b,c,r),c+=q.textLeading()}}else{var s=0,t=q.textAlign().vertical;for(t===f.CENTER?s=(g.length-1)*q.textLeading()/2:t===f.BOTTOM&&(s=(g.length-1)*q.textLeading()),j=0;j<g.length;j++)this._renderText(q,g[j],b,c-s,r),c+=q.textLeading()}return p&&(this.drawingContext.textBaseline=f.BASELINE),q}},d.Renderer2D.prototype._renderText=function(a,b,c,d,e){if(!(d>=e))return a.push(),this._isOpenType()?this._textFont._renderPath(b,c,d,{renderer:this}):(this._doStroke&&this._strokeSet&&this.drawingContext.strokeText(b,c,d),this._doFill&&(this._fillSet||this._setFill(f._DEFAULT_TEXT_FILL),this.drawingContext.fillText(b,c,d))),a.pop(),a},d.Renderer2D.prototype.textWidth=function(a){return this._isOpenType()?this._textFont._textWidth(a,this._textSize):this.drawingContext.measureText(a).width},d.Renderer2D.prototype.textAlign=function(a,b){if(void 0!==a)return a!==f.LEFT&&a!==f.RIGHT&&a!==f.CENTER||(this.drawingContext.textAlign=a),b!==f.TOP&&b!==f.BOTTOM&&b!==f.CENTER&&b!==f.BASELINE||(b===f.CENTER?this.drawingContext.textBaseline=f._CTX_MIDDLE:this.drawingContext.textBaseline=b),this._pInst;var c=this.drawingContext.textBaseline;return c===f._CTX_MIDDLE&&(c=f.CENTER),{horizontal:this.drawingContext.textAlign,vertical:c}},d.Renderer2D.prototype._applyTextProperties=function(){var a,b=this._pInst;return this._setProperty("_textAscent",null),this._setProperty("_textDescent",null),a=this._textFont,this._isOpenType()&&(a=this._textFont.font.familyName,this._setProperty("_textStyle",this._textFont.font.styleName)),this.drawingContext.font=(this._textStyle||"normal")+" "+(this._textSize||12)+"px "+(a||"sans-serif"),b},d.Renderer2D.prototype.push=function(){this.drawingContext.save()},d.Renderer2D.prototype.pop=function(){this.drawingContext.restore(),this._cachedFillStyle=this.drawingContext.fillStyle,this._cachedStrokeStyle=this.drawingContext.strokeStyle},b.exports=d.Renderer2D},{"../image/filters":40,"./canvas":19,"./constants":20,"./core":21,"./p5.Renderer":28}],30:[function(a,b,c){"use strict";var d=a("./core"),e=a("./constants");a("./p5.Graphics"),a("./p5.Renderer2D"),a("../webgl/p5.RendererGL");var f="defaultCanvas0";d.prototype.createCanvas=function(a,b,c){d._validateParameters("createCanvas",arguments);var g,h=c||e.P2D;if(h===e.WEBGL){if(g=document.getElementById(f)){g.parentNode.removeChild(g);var i=this._renderer;this._elements=this._elements.filter(function(a){return a!==i})}g=document.createElement("canvas"),g.id=f}else if(this._defaultGraphicsCreated)g=this.canvas;else{g=document.createElement("canvas");for(var j=0;document.getElementById("defaultCanvas"+j);)j++;f="defaultCanvas"+j,g.id=f}return this._setupDone||(g.dataset.hidden=!0,g.style.visibility="hidden"),this._userNode?this._userNode.appendChild(g):document.body.appendChild(g),h===e.WEBGL?(this._setProperty("_renderer",new d.RendererGL(g,this,!0)),this._elements.push(this._renderer)):this._defaultGraphicsCreated||(this._setProperty("_renderer",new d.Renderer2D(g,this,!0)),this._defaultGraphicsCreated=!0,this._elements.push(this._renderer)),this._renderer.resize(a,b),this._renderer._applyDefaults(),this._renderer},d.prototype.resizeCanvas=function(a,b,c){if(d._validateParameters("resizeCanvas",arguments),this._renderer){var e={};for(var f in this.drawingContext){var g=this.drawingContext[f];"object"!=typeof g&&"function"!=typeof g&&(e[f]=g)}this._renderer.resize(a,b);for(var h in e)try{this.drawingContext[h]=e[h]}catch(a){}c||this.redraw()}},d.prototype.noCanvas=function(){this.canvas&&this.canvas.parentNode.removeChild(this.canvas)},d.prototype.createGraphics=function(a,b,c){return d._validateParameters("createGraphics",arguments),new d.Graphics(a,b,c,this)},d.prototype.blendMode=function(a){if(d._validateParameters("blendMode",arguments),a!==e.BLEND&&a!==e.DARKEST&&a!==e.LIGHTEST&&a!==e.DIFFERENCE&&a!==e.MULTIPLY&&a!==e.EXCLUSION&&a!==e.SCREEN&&a!==e.REPLACE&&a!==e.OVERLAY&&a!==e.HARD_LIGHT&&a!==e.SOFT_LIGHT&&a!==e.DODGE&&a!==e.BURN&&a!==e.ADD&&a!==e.NORMAL)throw new Error("Mode "+a+" not recognized.");this._renderer.blendMode(a)},b.exports=d},{"../webgl/p5.RendererGL":72,"./constants":20,"./core":21,"./p5.Graphics":27,"./p5.Renderer2D":29}],31:[function(a,b,c){"use strict";window.requestAnimationFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a,b){window.setTimeout(a,1e3/60)}}(),window.performance=window.performance||{},window.performance.now=function(){var a=Date.now();return window.performance.now||window.performance.mozNow||window.performance.msNow||window.performance.oNow||window.performance.webkitNow||function(){return Date.now()-a}}(),function(){"undefined"==typeof Uint8ClampedArray||Uint8ClampedArray.prototype.slice||Object.defineProperty(Uint8ClampedArray.prototype,"slice",{value:Array.prototype.slice,writable:!0,configurable:!0,enumerable:!1})}()},{}],32:[function(a,b,c){"use strict";function d(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(null!=d)for(var e in d)d.hasOwnProperty(e)&&(a[e]=d[e])}}var e=a("./core");e.prototype.exit=function(){throw"exit() not implemented, see remove()"},e.prototype.noLoop=function(){this._loop=!1},e.prototype.loop=function(){this._loop=!0,this._draw()},e.prototype.push=function(){this._renderer.push(),this._styles.push({props:{_colorMode:this._colorMode},renderer:{_doStroke:this._renderer._doStroke,_strokeSet:this._renderer._strokeSet,_doFill:this._renderer._doFill,_fillSet:this._renderer._fillSet,_tint:this._renderer._tint,_imageMode:this._renderer._imageMode,_rectMode:this._renderer._rectMode,_ellipseMode:this._renderer._ellipseMode,_textFont:this._renderer._textFont,_textLeading:this._renderer._textLeading,_textSize:this._renderer._textSize,_textStyle:this._renderer._textStyle}})},e.prototype.pop=function(){this._renderer.pop();var a=this._styles.pop();d(this._renderer,a.renderer),d(this,a.props)},e.prototype.pushStyle=function(){throw new Error("pushStyle() not used, see push()")},e.prototype.popStyle=function(){throw new Error("popStyle() not used, see pop()")},e.prototype.redraw=function(a){this.resetMatrix(),this._renderer.isP3D&&this._renderer._update();var b=parseInt(a);(isNaN(b)||b<1)&&(b=1);var c=this.setup||window.setup,d=this.draw||window.draw;if("function"==typeof d){void 0===c&&this.scale(this._pixelDensity,this._pixelDensity);for(var e=this,f=function(a){a.call(e)},g=0;g<b;g++)this._setProperty("frameCount",this.frameCount+1),this._registeredMethods.pre.forEach(f),d(),this._registeredMethods.post.forEach(f)}},e.prototype.size=function(){var a="size() is not a valid p5 function, to set the size of the ";throw a+="drawing canvas, please use createCanvas() instead"},b.exports=e},{"./core":21}],33:[function(a,b,c){"use strict";var d=a("./core"),e=a("./constants");d.prototype.applyMatrix=function(a,b,c,d,e,f){return this._renderer.applyMatrix(a,b,c,d,e,f),this},d.prototype.popMatrix=function(){throw new Error("popMatrix() not used, see pop()")},d.prototype.printMatrix=function(){throw new Error("printMatrix() not implemented")},d.prototype.pushMatrix=function(){throw new Error("pushMatrix() not used, see push()")},d.prototype.resetMatrix=function(){return this._renderer.resetMatrix(),this},d.prototype.rotate=function(a,b){d._validateParameters("rotate",arguments);var c;return this._angleMode===e.DEGREES?c=this.radians(a):this._angleMode===e.RADIANS&&(c=a),this._renderer.rotate(c,b),this},d.prototype.rotateX=function(a){if(d._validateParameters("rotateX",arguments),!this._renderer.isP3D)throw"not supported in p2d. Please use webgl mode";return this._renderer.rotateX(a),this},d.prototype.rotateY=function(a){if(d._validateParameters("rotateY",arguments),!this._renderer.isP3D)throw"not supported in p2d. Please use webgl mode";return this._renderer.rotateY(a),this},d.prototype.rotateZ=function(a){if(d._validateParameters("rotateZ",arguments),!this._renderer.isP3D)throw"not supported in p2d. Please use webgl mode";return this._renderer.rotateZ(a),this},d.prototype.scale=function(a,b,c){if(d._validateParameters("scale",arguments),a instanceof d.Vector){var e=a;a=e.x,b=e.y,c=e.z}else if(a instanceof Array){var f=a;a=f[0],b=f[1],c=f[2]||1}return isNaN(b)?b=c=a:isNaN(c)&&(c=1),this._renderer.scale.call(this._renderer,a,b,c),this},d.prototype.shearX=function(a){return d._validateParameters("shearX",arguments),this._angleMode===e.DEGREES&&(a=this.radians(a)),this._renderer.shearX(a),this},d.prototype.shearY=function(a){return d._validateParameters("shearY",arguments),this._angleMode===e.DEGREES&&(a=this.radians(a)),this._renderer.shearY(a),this},d.prototype.translate=function(a,b,c){return d._validateParameters("translate",arguments),this._renderer.isP3D?this._renderer.translate(a,b,c):this._renderer.translate(a,b),this},b.exports=d},{"./constants":20,"./core":21}],34:[function(a,b,c){"use strict";var d=a("./core"),e=a("./constants"),f=null,g=[],h=[],i=!1,j=!1,k=!1,l=!1,m=!0;d.prototype.beginContour=function(){return h=[],l=!0,this},d.prototype.beginShape=function(a){return this._renderer.isP3D?this._renderer.beginShape.apply(this._renderer,arguments):(f=a===e.POINTS||a===e.LINES||a===e.TRIANGLES||a===e.TRIANGLE_FAN||a===e.TRIANGLE_STRIP||a===e.QUADS||a===e.QUAD_STRIP?a:null,g=[],h=[]),this},d.prototype.bezierVertex=function(a,b,c,e,f,j){if(d._validateParameters("bezierVertex",arguments),0===g.length)throw"vertex() must be used once before calling bezierVertex()";i=!0;for(var k=[],m=0;m<arguments.length;m++)k[m]=arguments[m];return k.isVert=!1,l?h.push(k):g.push(k),this},d.prototype.curveVertex=function(a,b){return d._validateParameters("curveVertex",arguments),j=!0,this.vertex(a,b),this},d.prototype.endContour=function(){var a=h[0].slice();a.isVert=h[0].isVert,a.moveTo=!1,h.push(a),m&&(g.push(g[0]),m=!1);for(var b=0;b<h.length;b++)g.push(h[b]);return this},d.prototype.endShape=function(a){if(this._renderer.isP3D)this._renderer.endShape(a,j,i,k,l,f);else{if(0===g.length)return this;if(!this._renderer._doStroke&&!this._renderer._doFill)return this;var b=a===e.CLOSE;b&&!l&&g.push(g[0]),this._renderer.endShape(a,g,j,i,k,l,f),j=!1,i=!1,k=!1,l=!1,m=!0,b&&g.pop()}return this},d.prototype.quadraticVertex=function(a,b,c,f){if(d._validateParameters("quadraticVertex",arguments),this._contourInited){var i={};return i.x=a,i.y=b,i.x3=c,i.y3=f,i.type=e.QUADRATIC,this._contourVertices.push(i),this}if(!(g.length>0))throw"vertex() must be used once before calling quadraticVertex()";k=!0;for(var j=[],m=0;m<arguments.length;m++)j[m]=arguments[m];return j.isVert=!1,l?h.push(j):g.push(j),this},d.prototype.vertex=function(a,b,c,d,e){if(this._renderer.isP3D)this._renderer.vertex.apply(this._renderer,arguments);else{var f=[];f.isVert=!0,f[0]=a,f[1]=b,f[2]=0,f[3]=0,f[4]=0,f[5]=this._renderer._getFill(),f[6]=this._renderer._getStroke(),c&&(f.moveTo=c),l?(0===h.length&&(f.moveTo=!0),h.push(f)):g.push(f)}return this},b.exports=d},{"./constants":20,"./core":21}],35:[function(a,b,c){"use strict";var d=a("../core/core");d.prototype.createStringDict=function(a,b){return new d.StringDict(a,b)},d.prototype.createNumberDict=function(a,b){return new d.NumberDict(a,b)},d.TypedDict=function(a,b){return a instanceof Object?this.data=a:(this.data={},this.data[a]=b),this},
d.TypedDict.prototype.size=function(){return Object.keys(this.data).length},d.TypedDict.prototype.hasKey=function(a){return this.data.hasOwnProperty(a)},d.TypedDict.prototype.get=function(a){if(this.data.hasOwnProperty(a))return this.data[a];console.log(a+" does not exist in this Dictionary")},d.TypedDict.prototype.set=function(a,b){this._validate(b)?this.data[a]=b:console.log("Those values dont work for this dictionary type.")},d.TypedDict.prototype._addObj=function(a){for(var b in a)this.set(b,a[b])},d.TypedDict.prototype.create=function(a,b){a instanceof Object&&void 0===b?this._addObj(a):void 0!==a?this.set(a,b):console.log("In order to create a new Dictionary entry you must pass an object or a key, value pair")},d.TypedDict.prototype.clear=function(){this.data={}},d.TypedDict.prototype.remove=function(a){if(!this.data.hasOwnProperty(a))throw a+" does not exist in this Dictionary";delete this.data[a]},d.TypedDict.prototype.print=function(){for(var a in this.data)console.log("key:"+a+" value:"+this.data[a])},d.TypedDict.prototype.saveTable=function(a){var b="";for(var c in this.data)b+=c+","+this.data[c]+"\n";var e=new Blob([b],{type:"text/csv"});d.prototype.downloadFile(e,a||"mycsv","csv")},d.TypedDict.prototype.saveJSON=function(a,b){d.prototype.saveJSON(this.data,a,b)},d.TypedDict.prototype._validate=function(a){return!0},d.StringDict=function(){d.TypedDict.apply(this,arguments)},d.StringDict.prototype=Object.create(d.TypedDict.prototype),d.StringDict.prototype._validate=function(a){return"string"==typeof a},d.NumberDict=function(){d.TypedDict.apply(this,arguments)},d.NumberDict.prototype=Object.create(d.TypedDict.prototype),d.NumberDict.prototype._validate=function(a){return"number"==typeof a},d.NumberDict.prototype.add=function(a,b){this.data.hasOwnProperty(a)?this.data[a]+=b:console.log("The key - "+a+" does not exist in this dictionary.")},d.NumberDict.prototype.sub=function(a,b){this.add(a,-b)},d.NumberDict.prototype.mult=function(a,b){this.data.hasOwnProperty(a)?this.data[a]*=b:console.log("The key - "+a+" does not exist in this dictionary.")},d.NumberDict.prototype.div=function(a,b){this.data.hasOwnProperty(a)?this.data[a]/=b:console.log("The key - "+a+" does not exist in this dictionary.")},d.NumberDict.prototype._valueTest=function(a){if(0===Object.keys(this.data).length)throw"Unable to search for a minimum or maximum value on an empty NumberDict";if(1===Object.keys(this.data).length)return this.data[Object.keys(this.data)[0]];var b=this.data[Object.keys(this.data)[0]];for(var c in this.data)this.data[c]*a<b*a&&(b=this.data[c]);return b},d.NumberDict.prototype.minValue=function(){return this._valueTest(1)},d.NumberDict.prototype.maxValue=function(){return this._valueTest(-1)},d.NumberDict.prototype._keyTest=function(a){if(0===Object.keys(this.data).length)throw"Unable to use minValue on an empty NumberDict";if(1===Object.keys(this.data).length)return Object.keys(this.data)[0];for(var b=Object.keys(this.data)[0],c=1;c<Object.keys(this.data).length;c++)Object.keys(this.data)[c]*a<b*a&&(b=Object.keys(this.data)[c]);return b},d.NumberDict.prototype.minKey=function(){return this._keyTest(1)},d.NumberDict.prototype.maxKey=function(){return this._keyTest(-1)},b.exports=d.TypedDict},{"../core/core":21}],36:[function(a,b,c){"use strict";var d=a("../core/core");d.prototype.deviceOrientation=void 0,d.prototype.accelerationX=0,d.prototype.accelerationY=0,d.prototype.accelerationZ=0,d.prototype.pAccelerationX=0,d.prototype.pAccelerationY=0,d.prototype.pAccelerationZ=0,d.prototype._updatePAccelerations=function(){this._setProperty("pAccelerationX",this.accelerationX),this._setProperty("pAccelerationY",this.accelerationY),this._setProperty("pAccelerationZ",this.accelerationZ)},d.prototype.rotationX=0,d.prototype.rotationY=0,d.prototype.rotationZ=0,d.prototype.pRotationX=0,d.prototype.pRotationY=0,d.prototype.pRotationZ=0;var e,f,g,h=0,i=0,j=0,k="clockwise",l="clockwise",m="clockwise";d.prototype._updatePRotations=function(){this._setProperty("pRotationX",this.rotationX),this._setProperty("pRotationY",this.rotationY),this._setProperty("pRotationZ",this.rotationZ)},d.prototype.turnAxis=void 0;var n=.5,o=30;d.prototype.setMoveThreshold=function(a){"number"==typeof a&&(n=a)},d.prototype.setShakeThreshold=function(a){"number"==typeof a&&(o=a)},d.prototype._ondeviceorientation=function(a){this._updatePRotations(),this._setProperty("rotationX",a.beta),this._setProperty("rotationY",a.gamma),this._setProperty("rotationZ",a.alpha),this._handleMotion()},d.prototype._ondevicemotion=function(a){this._updatePAccelerations(),this._setProperty("accelerationX",2*a.acceleration.x),this._setProperty("accelerationY",2*a.acceleration.y),this._setProperty("accelerationZ",2*a.acceleration.z),this._handleMotion()},d.prototype._handleMotion=function(){90===window.orientation||-90===window.orientation?this._setProperty("deviceOrientation","landscape"):0===window.orientation?this._setProperty("deviceOrientation","portrait"):void 0===window.orientation&&this._setProperty("deviceOrientation","undefined");var a=this.deviceMoved||window.deviceMoved;"function"==typeof a&&(Math.abs(this.accelerationX-this.pAccelerationX)>n||Math.abs(this.accelerationY-this.pAccelerationY)>n||Math.abs(this.accelerationZ-this.pAccelerationZ)>n)&&a();var b=this.deviceTurned||window.deviceTurned;if("function"==typeof b){var c=this.rotationX+180,d=this.pRotationX+180,p=h+180;c-d>0&&c-d<270||c-d<-270?k="clockwise":(c-d<0||c-d>270)&&(k="counter-clockwise"),k!==e&&(p=c),Math.abs(c-p)>90&&Math.abs(c-p)<270&&(p=c,this._setProperty("turnAxis","X"),b()),e=k,h=p-180;var q=this.rotationY+180,r=this.pRotationY+180,s=i+180;q-r>0&&q-r<270||q-r<-270?l="clockwise":(q-r<0||q-this.pRotationY>270)&&(l="counter-clockwise"),l!==f&&(s=q),Math.abs(q-s)>90&&Math.abs(q-s)<270&&(s=q,this._setProperty("turnAxis","Y"),b()),f=l,i=s-180,this.rotationZ-this.pRotationZ>0&&this.rotationZ-this.pRotationZ<270||this.rotationZ-this.pRotationZ<-270?m="clockwise":(this.rotationZ-this.pRotationZ<0||this.rotationZ-this.pRotationZ>270)&&(m="counter-clockwise"),m!==g&&(j=this.rotationZ),Math.abs(this.rotationZ-j)>90&&Math.abs(this.rotationZ-j)<270&&(j=this.rotationZ,this._setProperty("turnAxis","Z"),b()),g=m,this._setProperty("turnAxis",void 0)}var t=this.deviceShaken||window.deviceShaken;if("function"==typeof t){var u,v;null!==this.pAccelerationX&&(u=Math.abs(this.accelerationX-this.pAccelerationX),v=Math.abs(this.accelerationY-this.pAccelerationY)),u+v>o&&t()}},b.exports=d},{"../core/core":21}],37:[function(a,b,c){"use strict";function d(){for(var a in f)if(f.hasOwnProperty(a)&&!0===f[a])return!0;return!1}var e=a("../core/core"),f={};e.prototype.isKeyPressed=!1,e.prototype.keyIsPressed=!1,e.prototype.key="",e.prototype.keyCode=0,e.prototype._onkeydown=function(a){if(!f[a.which]){this._setProperty("isKeyPressed",!0),this._setProperty("keyIsPressed",!0),this._setProperty("keyCode",a.which),f[a.which]=!0;var b=String.fromCharCode(a.which);b||(b=a.which),this._setProperty("key",b);var c=this.keyPressed||window.keyPressed;if("function"==typeof c&&!a.charCode){!1===c(a)&&a.preventDefault()}}},e.prototype._onkeyup=function(a){var b=this.keyReleased||window.keyReleased;f[a.which]=!1,d()||(this._setProperty("isKeyPressed",!1),this._setProperty("keyIsPressed",!1)),this._setProperty("_lastKeyCodeTyped",null);var c=String.fromCharCode(a.which);if(c||(c=a.which),this._setProperty("key",c),this._setProperty("keyCode",a.which),"function"==typeof b){!1===b(a)&&a.preventDefault()}},e.prototype._onkeypress=function(a){if(a.which!==this._lastKeyCodeTyped){this._setProperty("keyCode",a.which),this._setProperty("_lastKeyCodeTyped",a.which),this._setProperty("key",String.fromCharCode(a.which));var b=this.keyTyped||window.keyTyped;if("function"==typeof b){!1===b(a)&&a.preventDefault()}}},e.prototype._onblur=function(a){f={}},e.prototype.keyIsDown=function(a){return e._validateParameters("keyIsDown",arguments),f[a]},b.exports=e},{"../core/core":21}],38:[function(a,b,c){"use strict";function d(a,b,c,d){d&&!d.clientX&&(d.touches?d=d.touches[0]:d.changedTouches&&(d=d.changedTouches[0]));var e=a.getBoundingClientRect(),f=a.scrollWidth/b,g=a.scrollHeight/c;return{x:(d.clientX-e.left)/f,y:(d.clientY-e.top)/g,winX:d.clientX,winY:d.clientY,id:d.identifier}}var e=a("../core/core"),f=a("../core/constants");e.prototype._hasMouseInteracted=!1,e.prototype.mouseX=0,e.prototype.mouseY=0,e.prototype.pmouseX=0,e.prototype.pmouseY=0,e.prototype.winMouseX=0,e.prototype.winMouseY=0,e.prototype.pwinMouseX=0,e.prototype.pwinMouseY=0,e.prototype.mouseButton=0,e.prototype.mouseIsPressed=!1,e.prototype._updateNextMouseCoords=function(a){if(null!==this._curElement&&(!a.touches||a.touches.length>0)){var b=d(this._curElement.elt,this.width,this.height,a);this._setProperty("mouseX",b.x),this._setProperty("mouseY",b.y),this._setProperty("winMouseX",b.winX),this._setProperty("winMouseY",b.winY)}this._hasMouseInteracted||(this._updateMouseCoords(),this._setProperty("_hasMouseInteracted",!0))},e.prototype._updateMouseCoords=function(){this._setProperty("pmouseX",this.mouseX),this._setProperty("pmouseY",this.mouseY),this._setProperty("pwinMouseX",this.winMouseX),this._setProperty("pwinMouseY",this.winMouseY)},e.prototype._setMouseButton=function(a){1===a.button?this._setProperty("mouseButton",f.CENTER):2===a.button?this._setProperty("mouseButton",f.RIGHT):this._setProperty("mouseButton",f.LEFT)},e.prototype._onmousemove=function(a){var b=this._isGlobal?window:this;this._updateNextMouseCoords(a),this.mouseIsPressed?"function"==typeof b.mouseDragged?!1===b.mouseDragged(a)&&a.preventDefault():"function"==typeof b.touchMoved&&!1===b.touchMoved(a)&&a.preventDefault():"function"==typeof b.mouseMoved&&!1===b.mouseMoved(a)&&a.preventDefault()},e.prototype._onmousedown=function(a){var b=this._isGlobal?window:this;this._setProperty("mouseIsPressed",!0),this._setMouseButton(a),this._updateNextMouseCoords(a),"function"==typeof b.mousePressed?!1===b.mousePressed(a)&&a.preventDefault():"function"==typeof b.touchStarted&&!1===b.touchStarted(a)&&a.preventDefault()},e.prototype._onmouseup=function(a){var b=this._isGlobal?window:this;this._setProperty("mouseIsPressed",!1),"function"==typeof b.mouseReleased?!1===b.mouseReleased(a)&&a.preventDefault():"function"==typeof b.touchEnded&&!1===b.touchEnded(a)&&a.preventDefault()},e.prototype._ondragend=e.prototype._onmouseup,e.prototype._ondragover=e.prototype._onmousemove,e.prototype._onclick=function(a){var b=this._isGlobal?window:this;if("function"==typeof b.mouseClicked){!1===b.mouseClicked(a)&&a.preventDefault()}},e.prototype._ondblclick=function(a){var b=this._isGlobal?window:this;if("function"==typeof b.doubleClicked){!1===b.doubleClicked(a)&&a.preventDefault()}},e.prototype._onwheel=function(a){var b=this._isGlobal?window:this;if("function"==typeof b.mouseWheel){a.delta=a.deltaY;!1===b.mouseWheel(a)&&a.preventDefault()}},b.exports=e},{"../core/constants":20,"../core/core":21}],39:[function(a,b,c){"use strict";function d(a,b,c,d,e){e=e||0;var f=a.getBoundingClientRect(),g=a.scrollWidth/b,h=a.scrollHeight/c,i=d.touches[e]||d.changedTouches[e];return{x:(i.clientX-f.left)/g,y:(i.clientY-f.top)/h,winX:i.clientX,winY:i.clientY,id:i.identifier}}var e=a("../core/core");e.prototype.touches=[],e.prototype._updateTouchCoords=function(a){if(null!==this._curElement){for(var b=[],c=0;c<a.touches.length;c++)b[c]=d(this._curElement.elt,this.width,this.height,a,c);this._setProperty("touches",b)}},e.prototype._ontouchstart=function(a){var b=this._isGlobal?window:this;this._setProperty("mouseIsPressed",!0),this._updateTouchCoords(a),this._updateNextMouseCoords(a),"function"==typeof b.touchStarted?!1===b.touchStarted(a)&&a.preventDefault():"function"==typeof b.mousePressed&&!1===b.mousePressed(a)&&a.preventDefault()},e.prototype._ontouchmove=function(a){var b=this._isGlobal?window:this;this._updateTouchCoords(a),this._updateNextMouseCoords(a),"function"==typeof b.touchMoved?!1===b.touchMoved(a)&&a.preventDefault():"function"==typeof b.mouseDragged&&!1===b.mouseDragged(a)&&a.preventDefault()},e.prototype._ontouchend=function(a){this._setProperty("mouseIsPressed",!1),this._updateTouchCoords(a),this._updateNextMouseCoords(a);var b=this._isGlobal?window:this;"function"==typeof b.touchEnded?!1===b.touchEnded(a)&&a.preventDefault():"function"==typeof b.mouseReleased&&!1===b.mouseReleased(a)&&a.preventDefault()},b.exports=e},{"../core/core":21}],40:[function(a,b,c){"use strict";function d(a){var b=3.5*a|0;if(b=b<1?1:b<248?b:248,g!==b){g=b,h=1+g<<1,i=new Int32Array(h),j=new Array(h);for(var c=0;c<h;c++)j[c]=new Int32Array(256);for(var d,e,f,k,l=1,m=b-1;l<b;l++){i[b+l]=i[m]=e=m*m,f=j[b+l],k=j[m--];for(var n=0;n<256;n++)f[n]=k[n]=e*n}d=i[b]=b*b,f=j[b];for(var o=0;o<256;o++)f[o]=d*o}}function e(a,b){for(var c=f._toPixels(a),e=a.width,k=a.height,l=e*k,m=new Int32Array(l),n=0;n<l;n++)m[n]=f._getARGB(c,n);var o,p,q,r,s,t,u,v,w,x,y=new Int32Array(l),z=new Int32Array(l),A=new Int32Array(l),B=new Int32Array(l),C=0;d(b);var D,E,F,G;for(E=0;E<k;E++){for(D=0;D<e;D++){if(r=q=p=s=o=0,(t=D-g)<0)x=-t,t=0;else{if(t>=e)break;x=0}for(F=x;F<h&&!(t>=e);F++){var H=m[t+C];G=j[F],s+=G[(-16777216&H)>>>24],p+=G[(16711680&H)>>16],q+=G[(65280&H)>>8],r+=G[255&H],o+=i[F],t++}u=C+D,y[u]=s/o,z[u]=p/o,A[u]=q/o,B[u]=r/o}C+=e}for(C=0,v=-g,w=v*e,E=0;E<k;E++){for(D=0;D<e;D++){if(r=q=p=s=o=0,v<0)x=u=-v,t=D;else{if(v>=k)break;x=0,u=v,t=D+w}for(F=x;F<h&&!(u>=k);F++)G=j[F],s+=G[y[t]],p+=G[z[t]],q+=G[A[t]],r+=G[B[t]],o+=i[F],u++,t+=e;m[D+C]=s/o<<24|p/o<<16|q/o<<8|r/o}C+=e,w+=e,v++}f._setPixels(c,m)}var f={};f._toPixels=function(a){return a instanceof ImageData?a.data:a.getContext("2d").getImageData(0,0,a.width,a.height).data},f._getARGB=function(a,b){var c=4*b;return a[c+3]<<24&4278190080|a[c]<<16&16711680|a[c+1]<<8&65280|255&a[c+2]},f._setPixels=function(a,b){for(var c=0,d=0,e=a.length;d<e;d++)c=4*d,a[c+0]=(16711680&b[d])>>>16,a[c+1]=(65280&b[d])>>>8,a[c+2]=255&b[d],a[c+3]=(4278190080&b[d])>>>24},f._toImageData=function(a){return a instanceof ImageData?a:a.getContext("2d").getImageData(0,0,a.width,a.height)},f._createImageData=function(a,b){return f._tmpCanvas=document.createElement("canvas"),f._tmpCtx=f._tmpCanvas.getContext("2d"),this._tmpCtx.createImageData(a,b)},f.apply=function(a,b,c){var d=a.getContext("2d"),e=d.getImageData(0,0,a.width,a.height),f=b(e,c);f instanceof ImageData?d.putImageData(f,0,0,0,0,a.width,a.height):d.putImageData(e,0,0,0,0,a.width,a.height)},f.threshold=function(a,b){var c=f._toPixels(a);void 0===b&&(b=.5);for(var d=Math.floor(255*b),e=0;e<c.length;e+=4){var g,h=c[e],i=c[e+1],j=c[e+2],k=.2126*h+.7152*i+.0722*j;g=k>=d?255:0,c[e]=c[e+1]=c[e+2]=g}},f.gray=function(a){for(var b=f._toPixels(a),c=0;c<b.length;c+=4){var d=b[c],e=b[c+1],g=b[c+2],h=.2126*d+.7152*e+.0722*g;b[c]=b[c+1]=b[c+2]=h}},f.opaque=function(a){for(var b=f._toPixels(a),c=0;c<b.length;c+=4)b[c+3]=255;return b},f.invert=function(a){for(var b=f._toPixels(a),c=0;c<b.length;c+=4)b[c]=255-b[c],b[c+1]=255-b[c+1],b[c+2]=255-b[c+2]},f.posterize=function(a,b){var c=f._toPixels(a);if(b<2||b>255)throw new Error("Level must be greater than 2 and less than 255 for posterize");for(var d=b-1,e=0;e<c.length;e+=4){var g=c[e],h=c[e+1],i=c[e+2];c[e]=255*(g*b>>8)/d,c[e+1]=255*(h*b>>8)/d,c[e+2]=255*(i*b>>8)/d}},f.dilate=function(a){for(var b,c,d,e,g,h,i,j,k,l,m,n,o,p,q,r,s,t=f._toPixels(a),u=0,v=t.length?t.length/4:0,w=new Int32Array(v);u<v;)for(b=u,c=u+a.width;u<c;)d=e=f._getARGB(t,u),i=u-1,h=u+1,j=u-a.width,k=u+a.width,i<b&&(i=u),h>=c&&(h=u),j<0&&(j=0),k>=v&&(k=u),n=f._getARGB(t,j),m=f._getARGB(t,i),o=f._getARGB(t,k),l=f._getARGB(t,h),g=77*(d>>16&255)+151*(d>>8&255)+28*(255&d),q=77*(m>>16&255)+151*(m>>8&255)+28*(255&m),p=77*(l>>16&255)+151*(l>>8&255)+28*(255&l),r=77*(n>>16&255)+151*(n>>8&255)+28*(255&n),s=77*(o>>16&255)+151*(o>>8&255)+28*(255&o),q>g&&(e=m,g=q),p>g&&(e=l,g=p),r>g&&(e=n,g=r),s>g&&(e=o,g=s),w[u++]=e;f._setPixels(t,w)},f.erode=function(a){for(var b,c,d,e,g,h,i,j,k,l,m,n,o,p,q,r,s,t=f._toPixels(a),u=0,v=t.length?t.length/4:0,w=new Int32Array(v);u<v;)for(b=u,c=u+a.width;u<c;)d=e=f._getARGB(t,u),i=u-1,h=u+1,j=u-a.width,k=u+a.width,i<b&&(i=u),h>=c&&(h=u),j<0&&(j=0),k>=v&&(k=u),n=f._getARGB(t,j),m=f._getARGB(t,i),o=f._getARGB(t,k),l=f._getARGB(t,h),g=77*(d>>16&255)+151*(d>>8&255)+28*(255&d),q=77*(m>>16&255)+151*(m>>8&255)+28*(255&m),p=77*(l>>16&255)+151*(l>>8&255)+28*(255&l),r=77*(n>>16&255)+151*(n>>8&255)+28*(255&n),s=77*(o>>16&255)+151*(o>>8&255)+28*(255&o),q<g&&(e=m,g=q),p<g&&(e=l,g=p),r<g&&(e=n,g=r),s<g&&(e=o,g=s),w[u++]=e;f._setPixels(t,w)};var g,h,i,j;f.blur=function(a,b){e(a,b)},b.exports=f},{}],41:[function(a,b,c){"use strict";var d=a("../core/core"),e=[];d.prototype.createImage=function(a,b){return d._validateParameters("createImage",arguments),new d.Image(a,b)},d.prototype.saveCanvas=function(a,b,c){d._validateParameters("saveCanvas",arguments),a instanceof d.Element?a=a.elt:a instanceof HTMLCanvasElement||(b=a,c=b,a=this._curElement&&this._curElement.elt),c=c||d.prototype._checkFileExtension(b,c)[1]||"png";var e;switch(c){default:e="image/png";break;case"jpeg":case"jpg":e="image/jpeg"}a.toBlob(function(a){d.prototype.downloadFile(a,b,c)},e)},d.prototype.saveFrames=function(a,b,c,f,g){d._validateParameters("saveFrames",arguments);var h=c||3;h=d.prototype.constrain(h,0,15),h*=1e3;var i=f||15;i=d.prototype.constrain(i,0,22);var j=0,k=d.prototype._makeFrame,l=this._curElement.elt,m=setInterval(function(){k(a+j,b,l),j++},1e3/i);setTimeout(function(){if(clearInterval(m),g)g(e);else for(var a=0;a<e.length;a++){var b=e[a];d.prototype.downloadFile(b.imageData,b.filename,b.ext)}e=[]},h+.01)},d.prototype._makeFrame=function(a,b,c){var d;d=this?this._curElement.elt:c;var f;if(b)switch(b.toLowerCase()){case"png":f="image/png";break;case"jpeg":case"jpg":f="image/jpeg";break;default:f="image/png"}else b="png",f="image/png";var g=d.toDataURL(f);g=g.replace(f,"image/octet-stream");var h={};h.imageData=g,h.filename=a,h.ext=b,e.push(h)},b.exports=d},{"../core/core":21}],42:[function(a,b,c){"use strict";function d(a,b){return a>0&&a<b?a:b}var e=a("../core/core"),f=a("./filters"),g=a("../core/canvas"),h=a("../core/constants");a("../core/error_helpers"),e.prototype.loadImage=function(a,b,c){e._validateParameters("loadImage",arguments);var d=new Image,f=new e.Image(1,1,this),g=this;return d.onload=function(){f.width=f.canvas.width=d.width,f.height=f.canvas.height=d.height,f.drawingContext.drawImage(d,0,0),f.modified=!0,"function"==typeof b&&b(f),g._decrementPreload()},d.onerror=function(a){e._friendlyFileLoadError(0,d.src),"function"==typeof c&&c(a)},0!==a.indexOf("data:image/")&&(d.crossOrigin="Anonymous"),d.src=a,f},e.prototype.image=function(a,b,c,f,h,i,j,k,l){e._validateParameters("image",arguments);var m=a.width,n=a.height;a.elt&&a.elt.videoWidth&&!a.canvas&&(m=a.elt.videoWidth,n=a.elt.videoHeight);var o=b,p=c,q=f||m,r=h||n,s=i||0,t=j||0,u=k||m,v=l||n;u=d(u,m),v=d(v,n);var w=1;a.elt&&!a.canvas&&a.elt.style.width&&(w=a.elt.videoWidth&&!f?a.elt.videoWidth:a.elt.width,w/=parseInt(a.elt.style.width,10)),s*=w,t*=w,v*=w,u*=w;var x=g.modeAdjust(o,p,q,r,this._renderer._imageMode);this._renderer.image(a,s,t,u,v,x.x,x.y,x.w,x.h)},e.prototype.tint=function(){e._validateParameters("tint",arguments);var a=this.color.apply(this,arguments);this._renderer._tint=a.levels},e.prototype.noTint=function(){this._renderer._tint=null},e.prototype._getTintedImageCanvas=function(a){if(!a.canvas)return a;var b=f._toPixels(a.canvas),c=document.createElement("canvas");c.width=a.canvas.width,c.height=a.canvas.height;for(var d=c.getContext("2d"),e=d.createImageData(a.canvas.width,a.canvas.height),g=e.data,h=0;h<b.length;h+=4){var i=b[h],j=b[h+1],k=b[h+2],l=b[h+3];g[h]=i*this._renderer._tint[0]/255,g[h+1]=j*this._renderer._tint[1]/255,g[h+2]=k*this._renderer._tint[2]/255,g[h+3]=l*this._renderer._tint[3]/255}return d.putImageData(e,0,0),c},e.prototype.imageMode=function(a){e._validateParameters("imageMode",arguments),a!==h.CORNER&&a!==h.CORNERS&&a!==h.CENTER||(this._renderer._imageMode=a)},b.exports=e},{"../core/canvas":19,"../core/constants":20,"../core/core":21,"../core/error_helpers":24,"./filters":40}],43:[function(a,b,c){"use strict";var d=a("../core/core"),e=a("./filters");d.Image=function(a,b){this.width=a,this.height=b,this.canvas=document.createElement("canvas"),this.canvas.width=this.width,this.canvas.height=this.height,this.drawingContext=this.canvas.getContext("2d"),this._pixelDensity=1,this._modified=!1,this.pixels=[],this.name="p5.Image"},d.Image.prototype._setProperty=function(a,b){this[a]=b,this.setModified(!0)},d.Image.prototype.loadPixels=function(){d.Renderer2D.prototype.loadPixels.call(this),this.setModified(!0)},d.Image.prototype.updatePixels=function(a,b,c,e){d.Renderer2D.prototype.updatePixels.call(this,a,b,c,e),this.setModified(!0)},d.Image.prototype.get=function(a,b,c,e){return d.Renderer2D.prototype.get.call(this,a,b,c,e)},d.Image.prototype.set=function(a,b,c){d.Renderer2D.prototype.set.call(this,a,b,c),this.setModified(!0)},d.Image.prototype.resize=function(a,b){0===a&&0===b?(a=this.canvas.width,b=this.canvas.height):0===a?a=this.canvas.width*b/this.canvas.height:0===b&&(b=this.canvas.height*a/this.canvas.width),a=Math.floor(a),b=Math.floor(b);var c=document.createElement("canvas");c.width=a,c.height=b,c.getContext("2d").drawImage(this.canvas,0,0,this.canvas.width,this.canvas.height,0,0,c.width,c.height),this.canvas.width=this.width=a,this.canvas.height=this.height=b,this.drawingContext.drawImage(c,0,0,a,b,0,0,a,b),this.pixels.length>0&&this.loadPixels(),this.setModified(!0)},d.Image.prototype.copy=function(){var a,b,c,e,f,g,h,i,j;if(9===arguments.length)a=arguments[0],b=arguments[1],c=arguments[2],e=arguments[3],f=arguments[4],g=arguments[5],h=arguments[6],i=arguments[7],j=arguments[8];else{if(8!==arguments.length)throw new Error("Signature not supported");a=this,b=arguments[0],c=arguments[1],e=arguments[2],f=arguments[3],g=arguments[4],h=arguments[5],i=arguments[6],j=arguments[7]}d.Renderer2D._copyHelper(this,a,b,c,e,f,g,h,i,j)},d.Image.prototype.mask=function(a){void 0===a&&(a=this);var b=this.drawingContext.globalCompositeOperation,c=1;a instanceof d.Renderer&&(c=a._pInst._pixelDensity);var e=[a,0,0,c*a.width,c*a.height,0,0,this.width,this.height];this.drawingContext.globalCompositeOperation="destination-in",d.Image.prototype.copy.apply(this,e),this.drawingContext.globalCompositeOperation=b,this.setModified(!0)},d.Image.prototype.filter=function(a,b){e.apply(this.canvas,e[a.toLowerCase()],b),this.setModified(!0)},d.Image.prototype.blend=function(){d.prototype.blend.apply(this,arguments),this.setModified(!0)},d.Image.prototype.setModified=function(a){this._modified=a},d.Image.prototype.isModified=function(){return this._modified},d.Image.prototype.save=function(a,b){d.prototype.saveCanvas(this.canvas,a,b)},b.exports=d.Image},{"../core/core":21,"./filters":40}],44:[function(a,b,c){"use strict";var d=a("../core/core"),e=a("./filters");a("../color/p5.Color"),d.prototype.pixels=[],d.prototype.blend=function(){this._renderer?this._renderer.blend.apply(this._renderer,arguments):d.Renderer2D.prototype.blend.apply(this,arguments)},d.prototype.copy=function(){d._validateParameters("copy",arguments),d.Renderer2D.prototype.copy.apply(this._renderer,arguments)},d.prototype.filter=function(a,b){void 0!==this.canvas?e.apply(this.canvas,e[a.toLowerCase()],b):e.apply(this.elt,e[a.toLowerCase()],b)},d.prototype.get=function(a,b,c,d){return this._renderer.get(a,b,c,d)},d.prototype.loadPixels=function(){this._renderer.loadPixels()},d.prototype.set=function(a,b,c){this._renderer.set(a,b,c)},d.prototype.updatePixels=function(a,b,c,d){0!==this.pixels.length&&this._renderer.updatePixels(a,b,c,d)},b.exports=d},{"../color/p5.Color":15,"../core/core":21,"./filters":40}],45:[function(a,b,c){"use strict";function d(a,b){var c={};if(void 0===(b=b||[]))for(var d=0;d<a.length;d++)b[d.toString()]=d;for(var e=0;e<b.length;e++){var f=b[e],g=a[e];c[f]=g}return c}function e(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function f(a,b){b&&!0!==b&&"true"!==b||(b=""),a||(a="untitled");var c="";return a&&a.indexOf(".")>-1&&(c=a.split(".").pop()),b&&c!==b&&(c=b,a=a+"."+c),[a,c]}function g(a){document.body.removeChild(a.target)}var h=a("../core/core");a("whatwg-fetch"),a("es6-promise").polyfill();var i=a("fetch-jsonp");a("../core/error_helpers"),h.prototype.loadJSON=function(){for(var a,b,c,d=arguments[0],e={},f="json",g=1;g<arguments.length;g++){var h=arguments[g];"string"==typeof h?"jsonp"!==h&&"json"!==h||(f=h):"function"==typeof h?a?b=h:a=h:"object"==typeof h&&h.hasOwnProperty("jsonpCallback")&&(f="jsonp",c=h)}var i=this;return this.httpDo(d,"GET",c,f,function(b){for(var c in b)e[c]=b[c];void 0!==a&&a(b),i._decrementPreload()},b),e},h.prototype.loadStrings=function(){for(var a,b,c=[],d=1;d<arguments.length;d++){var e=arguments[d];"function"==typeof e&&(void 0===a?a=e:void 0===b&&(b=e))}var f=this;return h.prototype.httpDo.call(this,arguments[0],"GET","text",function(b){var d=b.match(/[^\r\n]+/g);for(var e in d)c[e]=d[e];void 0!==a&&a(c),f._decrementPreload()},b),c},h.prototype.loadTable=function(a){var b,c,e=[],f=!1,g=a.substring(a.lastIndexOf(".")+1,a.length),i=",",j=!1;"tsv"===g&&(i="\t");for(var k=1;k<arguments.length;k++)if("function"==typeof arguments[k])void 0===b?b=arguments[k]:void 0===c&&(c=arguments[k]);else if("string"==typeof arguments[k])if(e.push(arguments[k]),"header"===arguments[k]&&(f=!0),"csv"===arguments[k]){if(j)throw new Error("Cannot set multiple separator types.");i=",",j=!0}else if("tsv"===arguments[k]){if(j)throw new Error("Cannot set multiple separator types.");i="\t",j=!0}var l=new h.Table,m=this;return this.httpDo(a,"GET","text",function(a){for(var c,e={},g=0,j=1,n=2,o=4,p='"',q="\r",r="\n",s=[],t=0,u=null,v=function(){e.currentState=g,e.token=""},w=function(){u.push(e.token),v()},x=function(){e.escaped=!1,u=[],v()},y=function(){e.currentState=o,s.push(u),u=null};;){if(null==(c=a[t++])){if(e.escaped)throw new Error("Unclosed quote in file.");if(u){w(),y();break}}if(null===u&&x(),e.currentState===g){if(c===p){e.escaped=!0,e.currentState=j;continue}e.currentState=j}if(e.currentState===j&&e.escaped)if(c===p)a[t]===p?(e.token+=p,t++):(e.escaped=!1,e.currentState=n);else{if(c===q)continue;e.token+=c}else c===q?(a[t]===r&&t++,w(),y()):c===r?(w(),y()):c===i?w():e.currentState===j&&(e.token+=c)}if(f)l.columns=s.shift();else for(k=0;k<s[0].length;k++)l.columns[k]="null";var z;for(k=0;k<s.length;k++)(1!==s[k].length||"undefined"!==s[k][0]&&""!==s[k][0])&&(z=new h.TableRow,z.arr=s[k],z.obj=d(s[k],l.columns),l.addRow(z));"function"==typeof b&&b(l),m._decrementPreload()},function(b){if(h._friendlyFileLoadError(2,a),!c)throw b;c(b)}),l},h.prototype.parseXML=function(a){var b,c=new h.XML;if(a.children.length){for(b=0;b<a.children.length;b++){var d=parseXML(a.children[b]);c.addChild(d)}c.setName(a.nodeName),c._setCont(a.textContent),c._setAttributes(a);for(var e=0;e<c.children.length;e++)c.children[e].parent=c;return c}return c.setName(a.nodeName),c._setCont(a.textContent),c._setAttributes(a),c},h.prototype.loadXML=function(){for(var a,b,c={},d=1;d<arguments.length;d++){var e=arguments[d];"function"==typeof e&&(void 0===a?a=e:void 0===b&&(b=e))}var f=this;return this.httpDo(arguments[0],"GET","xml",function(b){for(var d in b)c[d]=b[d];void 0!==a&&a(c),f._decrementPreload()},b),c},h.prototype.httpGet=function(){var a=Array.prototype.slice.call(arguments);a.splice(1,0,"GET"),h.prototype.httpDo.apply(this,a)},h.prototype.httpPost=function(){var a=Array.prototype.slice.call(arguments);a.splice(1,0,"POST"),h.prototype.httpDo.apply(this,a)},h.prototype.httpDo=function(){for(var a,b,c,d="",e={},f=0,g="text/plain",h=arguments.length-1;h>0&&"function"==typeof arguments[h];h--)f++;if(2==arguments.length-f&&"string"==typeof arguments[0]&&"object"==typeof arguments[1])c=new Request(arguments[0],arguments[1]),a=arguments[2],b=arguments[3],""===d&&(d=-1!==c.url.indexOf("json")?"json":-1!==c.url.indexOf("xml")?"xml":"text");else{for(var j,k=arguments[0],l="GET",m=1;m<arguments.length;m++){var n=arguments[m];if("string"==typeof n)"GET"===n||"POST"===n||"PUT"===n||"DELETE"===n?l=n:"json"===n||"jsonp"===n||"xml"===n||"text"===n?d=n:j=n;else if("number"==typeof n)j=n.toString();else if("object"==typeof n)if(n.hasOwnProperty("jsonpCallback"))for(var o in n)e[o]=n[o];else j=JSON.stringify(n),g="application/json";else"function"==typeof n&&(a?b=n:a=n)}""===d&&(d=-1!==k.indexOf("json")?"json":-1!==k.indexOf("xml")?"xml":"text"),c=new Request(k,{method:l,mode:"cors",body:j,headers:new Headers({"Content-Type":g})})}"jsonp"===d?i(arguments[0],e).then(function(a){if(a.ok)return a.json();throw a}).then(function(b){a(b)}).catch(function(a){if(!b)throw a;b(a)}):fetch(c).then(function(a){if(a.ok)return"json"===d?a.json():a.text();throw a}).then(function(b){if("xml"===d){b=(new DOMParser).parseFromString(b,"text/xml"),b=parseXML(b.documentElement)}a(b)}).catch(function(a,c){if(!b)throw a;b(a)})},window.URL=window.URL||window.webkitURL,h.prototype._pWriters=[],h.prototype.createWriter=function(a,b){var c;for(var d in h.prototype._pWriters)if(h.prototype._pWriters[d].name===a)return c=new h.PrintWriter(a+window.millis(),b),h.prototype._pWriters.push(c),c;return c=new h.PrintWriter(a,b),h.prototype._pWriters.push(c),c},h.PrintWriter=function(a,b){var c=this;this.name=a,this.content="",this.write=function(a){this.content+=a},this.print=function(a){this.content+=a+"\n"},this.flush=function(){this.content=""},this.close=function(){var d=[];d.push(this.content),h.prototype.writeFile(d,a,b);for(var e in h.prototype._pWriters)h.prototype._pWriters[e].name===this.name&&h.prototype._pWriters.splice(e,1);c.flush(),c={}}},h.prototype.save=function(a,b,c){var d=arguments,e=this._curElement.elt;if(0===d.length)return void h.prototype.saveCanvas(e);if(d[0]instanceof h.Renderer||d[0]instanceof h.Graphics)return void h.prototype.saveCanvas(d[0].elt,d[1],d[2]);if(1===d.length&&"string"==typeof d[0])h.prototype.saveCanvas(e,d[0]);else{switch(f(d[1],d[2])[1]){case"json":return void h.prototype.saveJSON(d[0],d[1],d[2]);case"txt":return void h.prototype.saveStrings(d[0],d[1],d[2]);default:d[0]instanceof Array?h.prototype.saveStrings(d[0],d[1],d[2]):d[0]instanceof h.Table?h.prototype.saveTable(d[0],d[1],d[2]):d[0]instanceof h.Image?h.prototype.saveCanvas(d[0].canvas,d[1]):d[0]instanceof h.SoundFile&&h.prototype.saveSound(d[0],d[1],d[2],d[3])}}},h.prototype.saveJSON=function(a,b,c){var d;d=c?JSON.stringify(a):JSON.stringify(a,void 0,2),this.saveStrings(d.split("\n"),b,"json")},h.prototype.saveJSONObject=h.prototype.saveJSON,h.prototype.saveJSONArray=h.prototype.saveJSON,h.prototype.saveStrings=function(a,b,c){for(var d=c||"txt",e=this.createWriter(b,d),f=0;f<a.length;f++)a.length,e.print(a[f]);e.close(),e.flush()},h.prototype.saveTable=function(a,b,c){var d;d=void 0===c?b.substring(b.lastIndexOf(".")+1,b.length):c;var f=this.createWriter(b,d),g=a.columns,h=",";if("tsv"===d&&(h="\t"),"html"!==d){if("0"!==g[0]){for(var i=0;i<g.length;i++)i<g.length-1?f.write(g[i]+h):f.write(g[i]);f.write("\n")}for(var j=0;j<a.rows.length;j++){var k;for(k=0;k<a.rows[j].arr.length;k++)k<a.rows[j].arr.length-1?f.write(a.rows[j].arr[k]+h):(a.rows.length,f.write(a.rows[j].arr[k]));f.write("\n")}}else{f.print("<html>"),f.print("<head>");var l='  <meta http-equiv="content-type" content';if(l+='="text/html;charset=utf-8" />',f.print(l),f.print("</head>"),f.print("<body>"),f.print("  <table>"),"0"!==g[0]){f.print("    <tr>");for(var m=0;m<g.length;m++){var n=e(g[m]);f.print("      <td>"+n),f.print("      </td>")}f.print("    </tr>")}for(var o=0;o<a.rows.length;o++){f.print("    <tr>");for(var p=0;p<a.columns.length;p++){var q=a.rows[o].getString(p),r=e(q);f.print("      <td>"+r),f.print("      </td>")}f.print("    </tr>")}f.print("  </table>"),f.print("</body>"),f.print("</html>")}f.close(),f.flush()},
h.prototype.writeFile=function(a,b,c){var d="application/octet-stream";h.prototype._isSafari()&&(d="text/plain");var e=new Blob(a,{type:d});h.prototype.downloadFile(e,b,c)},h.prototype.downloadFile=function(b,c,d){var e=f(c,d),i=e[0];if(b instanceof Blob){return void a("file-saver").saveAs(b,i)}var j=document.createElement("a");if(j.href=b,j.download=i,j.onclick=function(a){g(a),a.stopPropagation()},j.style.display="none",document.body.appendChild(j),h.prototype._isSafari()){var k="Hello, Safari user! To download this file...\n";k+="1. Go to File --\x3e Save As.\n",k+='2. Choose "Page Source" as the Format.\n',k+='3. Name it with this extension: ."'+e[1]+'"',alert(k)}j.click()},h.prototype._checkFileExtension=f,h.prototype._isSafari=function(){return Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")>0},b.exports=h},{"../core/core":21,"../core/error_helpers":24,"es6-promise":4,"fetch-jsonp":5,"file-saver":6,"whatwg-fetch":11}],46:[function(a,b,c){"use strict";var d=a("../core/core");d.Table=function(a){this.columns=[],this.rows=[],this.name="p5.Table"},d.Table.prototype.addRow=function(a){var b=a||new d.TableRow;if(void 0===b.arr||void 0===b.obj)throw"invalid TableRow: "+b;return b.table=this,this.rows.push(b),b},d.Table.prototype.removeRow=function(a){this.rows[a].table=null;var b=this.rows.splice(a+1,this.rows.length);this.rows.pop(),this.rows=this.rows.concat(b)},d.Table.prototype.getRow=function(a){return this.rows[a]},d.Table.prototype.getRows=function(){return this.rows},d.Table.prototype.findRow=function(a,b){if("string"==typeof b){for(var c=0;c<this.rows.length;c++)if(this.rows[c].obj[b]===a)return this.rows[c]}else for(var d=0;d<this.rows.length;d++)if(this.rows[d].arr[b]===a)return this.rows[d];return null},d.Table.prototype.findRows=function(a,b){var c=[];if("string"==typeof b)for(var d=0;d<this.rows.length;d++)this.rows[d].obj[b]===a&&c.push(this.rows[d]);else for(var e=0;e<this.rows.length;e++)this.rows[e].arr[b]===a&&c.push(this.rows[e]);return c},d.Table.prototype.matchRow=function(a,b){if("number"==typeof b){for(var c=0;c<this.rows.length;c++)if(this.rows[c].arr[b].match(a))return this.rows[c]}else for(var d=0;d<this.rows.length;d++)if(this.rows[d].obj[b].match(a))return this.rows[d];return null},d.Table.prototype.matchRows=function(a,b){var c=[];if("number"==typeof b)for(var d=0;d<this.rows.length;d++)this.rows[d].arr[b].match(a)&&c.push(this.rows[d]);else for(var e=0;e<this.rows.length;e++)this.rows[e].obj[b].match(a)&&c.push(this.rows[e]);return c},d.Table.prototype.getColumn=function(a){var b=[];if("string"==typeof a)for(var c=0;c<this.rows.length;c++)b.push(this.rows[c].obj[a]);else for(var d=0;d<this.rows.length;d++)b.push(this.rows[d].arr[a]);return b},d.Table.prototype.clearRows=function(){delete this.rows,this.rows=[]},d.Table.prototype.addColumn=function(a){var b=a||null;this.columns.push(b)},d.Table.prototype.getColumnCount=function(){return this.columns.length},d.Table.prototype.getRowCount=function(){return this.rows.length},d.Table.prototype.removeTokens=function(a,b){for(var c=function(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")},d=[],e=0;e<a.length;e++)d.push(c(a.charAt(e)));var f=new RegExp(d.join("|"),"g");if(void 0===b)for(var g=0;g<this.columns.length;g++)for(var h=0;h<this.rows.length;h++){var i=this.rows[h].arr[g];i=i.replace(f,""),this.rows[h].arr[g]=i,this.rows[h].obj[this.columns[g]]=i}else if("string"==typeof b)for(var j=0;j<this.rows.length;j++){var k=this.rows[j].obj[b];k=k.replace(f,""),this.rows[j].obj[b]=k;var l=this.columns.indexOf(b);this.rows[j].arr[l]=k}else for(var m=0;m<this.rows.length;m++){var n=this.rows[m].arr[b];n=n.replace(f,""),this.rows[m].arr[b]=n,this.rows[m].obj[this.columns[b]]=n}},d.Table.prototype.trim=function(a){var b=new RegExp(" ","g");if(void 0===a)for(var c=0;c<this.columns.length;c++)for(var d=0;d<this.rows.length;d++){var e=this.rows[d].arr[c];e=e.replace(b,""),this.rows[d].arr[c]=e,this.rows[d].obj[this.columns[c]]=e}else if("string"==typeof a)for(var f=0;f<this.rows.length;f++){var g=this.rows[f].obj[a];g=g.replace(b,""),this.rows[f].obj[a]=g;var h=this.columns.indexOf(a);this.rows[f].arr[h]=g}else for(var i=0;i<this.rows.length;i++){var j=this.rows[i].arr[a];j=j.replace(b,""),this.rows[i].arr[a]=j,this.rows[i].obj[this.columns[a]]=j}},d.Table.prototype.removeColumn=function(a){var b,c;"string"==typeof a?(b=a,c=this.columns.indexOf(a),console.log("string")):(c=a,b=this.columns[a]);var d=this.columns.splice(c+1,this.columns.length);this.columns.pop(),this.columns=this.columns.concat(d);for(var e=0;e<this.rows.length;e++){var f=this.rows[e].arr,g=f.splice(c+1,f.length);f.pop(),this.rows[e].arr=f.concat(g),delete this.rows[e].obj[b]}},d.Table.prototype.set=function(a,b,c){this.rows[a].set(b,c)},d.Table.prototype.setNum=function(a,b,c){this.rows[a].setNum(b,c)},d.Table.prototype.setString=function(a,b,c){this.rows[a].setString(b,c)},d.Table.prototype.get=function(a,b){return this.rows[a].get(b)},d.Table.prototype.getNum=function(a,b){return this.rows[a].getNum(b)},d.Table.prototype.getString=function(a,b){return this.rows[a].getString(b)},d.Table.prototype.getObject=function(a){for(var b,c,d={},e=0;e<this.rows.length;e++)if(b=this.rows[e].obj,"string"==typeof a){if(!(this.columns.indexOf(a)>=0))throw'This table has no column named "'+a+'"';c=b[a],d[c]=b}else d[e]=this.rows[e].obj;return d},d.Table.prototype.getArray=function(){for(var a=[],b=0;b<this.rows.length;b++)a.push(this.rows[b].arr);return a},b.exports=d},{"../core/core":21}],47:[function(a,b,c){"use strict";var d=a("../core/core");d.TableRow=function(a,b){var c=[],d={};a&&(b=b||",",c=a.split(b));for(var e=0;e<c.length;e++){var f=e,g=c[e];d[f]=g}this.arr=c,this.obj=d,this.table=null,this.name="p5.TableRow"},d.TableRow.prototype.set=function(a,b){if("string"==typeof a){var c=this.table.columns.indexOf(a);if(!(c>=0))throw'This table has no column named "'+a+'"';this.obj[a]=b,this.arr[c]=b}else{if(!(a<this.table.columns.length))throw"Column #"+a+" is out of the range of this table";this.arr[a]=b;var d=this.table.columns[a];this.obj[d]=b}},d.TableRow.prototype.setNum=function(a,b){var c=parseFloat(b);this.set(a,c)},d.TableRow.prototype.setString=function(a,b){var c=b.toString();this.set(a,c)},d.TableRow.prototype.get=function(a){return"string"==typeof a?this.obj[a]:this.arr[a]},d.TableRow.prototype.getNum=function(a){var b;if(b="string"==typeof a?parseFloat(this.obj[a]):parseFloat(this.arr[a]),"NaN"===b.toString())throw"Error: "+this.obj[a]+" is NaN (Not a Number)";return b},d.TableRow.prototype.getString=function(a){return"string"==typeof a?this.obj[a].toString():this.arr[a].toString()},b.exports=d},{"../core/core":21}],48:[function(a,b,c){"use strict";var d=a("../core/core");d.XML=function(){this.name=null,this.attributes={},this.children=[],this.parent=null,this.content=null,this.name="p5.XML"},d.XML.prototype.getParent=function(){return this.parent},d.XML.prototype.getName=function(){return this.name},d.XML.prototype.setName=function(a){this.name=a},d.XML.prototype.hasChildren=function(){return this.children.length>0},d.XML.prototype.listChildren=function(){return this.children.map(function(a){return a.name})},d.XML.prototype.getChildren=function(a){return a?this.children.filter(function(b){return b.name===a}):this.children},d.XML.prototype.getChild=function(a){return"string"==typeof a?this.children.find(function(b){return b.name===a}):this.children[a]},d.XML.prototype.addChild=function(a){a instanceof d.XML&&this.children.push(a)},d.XML.prototype.removeChild=function(a){var b=-1;if("string"==typeof a){for(var c=0;c<this.children.length;c++)if(this.children[c].name===a){b=c;break}}else b=a;-1!==b&&this.children.splice(b,1)},d.XML.prototype.getAttributeCount=function(){return Object.keys(this.attributes).length},d.XML.prototype.listAttributes=function(){return Object.keys(this.attributes)},d.XML.prototype.hasAttribute=function(a){return!!this.attributes[a]},d.XML.prototype.getNum=function(a,b){return Number(this.attributes[a])||b||0},d.XML.prototype.getString=function(a,b){return String(this.attributes[a])||b||null},d.XML.prototype.setAttribute=function(a,b){this.attributes[a]&&(this.attributes[a]=b)},d.XML.prototype.getContent=function(a){return this.content||a||null},d.XML.prototype.setContent=function(a){this.children.length||(this.content=a)},d.XML.prototype._setCont=function(a){var b;b=a,b=b.replace(/\s\s+/g,","),this.content=b},d.XML.prototype._setAttributes=function(a){var b,c={};for(b=0;b<a.attributes.length;b++)c[a.attributes[b].nodeName]=a.attributes[b].nodeValue;this.attributes=c},b.exports=d},{"../core/core":21}],49:[function(a,b,c){"use strict";function d(a,b,c){if("function"==typeof Math.hypot)return Math.hypot.apply(null,arguments);for(var d=arguments.length,e=[],f=0,g=0;g<d;g++){var h=arguments[g];if((h=+h)===1/0||h===-1/0)return 1/0;h=Math.abs(h),h>f&&(f=h),e[g]=h}0===f&&(f=1);for(var i=0,j=0,k=0;k<d;k++){var l=e[k]/f,m=l*l-j,n=i+m;j=n-i-m,i=n}return Math.sqrt(i)*f}var e=a("../core/core");e.prototype.abs=Math.abs,e.prototype.ceil=Math.ceil,e.prototype.constrain=function(a,b,c){return e._validateParameters("constrain",arguments),Math.max(Math.min(a,c),b)},e.prototype.dist=function(){return e._validateParameters("dist",arguments),4===arguments.length?d(arguments[2]-arguments[0],arguments[3]-arguments[1]):6===arguments.length?d(arguments[3]-arguments[0],arguments[4]-arguments[1],arguments[5]-arguments[2]):void 0},e.prototype.exp=Math.exp,e.prototype.floor=Math.floor,e.prototype.lerp=function(a,b,c){return e._validateParameters("lerp",arguments),c*(b-a)+a},e.prototype.log=Math.log,e.prototype.mag=function(a,b){return e._validateParameters("mag",arguments),d(a,b)},e.prototype.map=function(a,b,c,d,f,g){e._validateParameters("map",arguments);var h=(a-b)/(c-b)*(f-d)+d;return g?d<f?this.constrain(h,d,f):this.constrain(h,f,d):h},e.prototype.max=function(){return e._validateParameters("max",arguments),arguments[0]instanceof Array?Math.max.apply(null,arguments[0]):Math.max.apply(null,arguments)},e.prototype.min=function(){return e._validateParameters("min",arguments),arguments[0]instanceof Array?Math.min.apply(null,arguments[0]):Math.min.apply(null,arguments)},e.prototype.norm=function(a,b,c){return e._validateParameters("norm",arguments),this.map(a,b,c,0,1)},e.prototype.pow=Math.pow,e.prototype.round=Math.round,e.prototype.sq=function(a){return a*a},e.prototype.sqrt=Math.sqrt,b.exports=e},{"../core/core":21}],50:[function(a,b,c){"use strict";var d=a("../core/core");d.prototype.createVector=function(a,b,c){return this instanceof d?new d.Vector(this,arguments):new d.Vector(a,b,c)},b.exports=d},{"../core/core":21}],51:[function(a,b,c){"use strict";var d,e=a("../core/core"),f=4,g=1<<f,h=8,i=1<<h,j=4095,k=4,l=.5,m=function(a){return.5*(1-Math.cos(a*Math.PI))};e.prototype.noise=function(a,b,c){if(b=b||0,c=c||0,null==d){d=new Array(j+1);for(var e=0;e<j+1;e++)d[e]=Math.random()}a<0&&(a=-a),b<0&&(b=-b),c<0&&(c=-c);for(var n,o,p,q,r,s=Math.floor(a),t=Math.floor(b),u=Math.floor(c),v=a-s,w=b-t,x=c-u,y=0,z=.5,A=0;A<k;A++){var B=s+(t<<f)+(u<<h);n=m(v),o=m(w),p=d[B&j],p+=n*(d[B+1&j]-p),q=d[B+g&j],q+=n*(d[B+g+1&j]-q),p+=o*(q-p),B+=i,q=d[B&j],q+=n*(d[B+1&j]-q),r=d[B+g&j],r+=n*(d[B+g+1&j]-r),q+=o*(r-q),p+=m(x)*(q-p),y+=p*z,z*=l,s<<=1,v*=2,t<<=1,w*=2,u<<=1,x*=2,v>=1&&(s++,v--),w>=1&&(t++,w--),x>=1&&(u++,x--)}return y},e.prototype.noiseDetail=function(a,b){a>0&&(k=a),b>0&&(l=b)},e.prototype.noiseSeed=function(a){var b=function(){var a,b,c=4294967296,d=1664525,e=1013904223;return{setSeed:function(d){b=a=(null==d?Math.random()*c:d)>>>0},getSeed:function(){return a},rand:function(){return(b=(d*b+e)%c)/c}}}();b.setSeed(a),d=new Array(j+1);for(var c=0;c<j+1;c++)d[c]=b.rand()},b.exports=e},{"../core/core":21}],52:[function(a,b,c){"use strict";var d=a("../core/core"),e=a("./polargeometry"),f=a("../core/constants");d.Vector=function(){var a,b,c;arguments[0]instanceof d?(this.p5=arguments[0],a=arguments[1][0]||0,b=arguments[1][1]||0,c=arguments[1][2]||0):(a=arguments[0]||0,b=arguments[1]||0,c=arguments[2]||0),this.x=a,this.y=b,this.z=c,this.name="p5.Vector"},d.Vector.prototype.toString=function(){return"p5.Vector Object : ["+this.x+", "+this.y+", "+this.z+"]"},d.Vector.prototype.set=function(a,b,c){return a instanceof d.Vector?(this.x=a.x||0,this.y=a.y||0,this.z=a.z||0,this):a instanceof Array?(this.x=a[0]||0,this.y=a[1]||0,this.z=a[2]||0,this):(this.x=a||0,this.y=b||0,this.z=c||0,this)},d.Vector.prototype.copy=function(){return this.p5?new d.Vector(this.p5,[this.x,this.y,this.z]):new d.Vector(this.x,this.y,this.z)},d.Vector.prototype.add=function(a,b,c){return a instanceof d.Vector?(this.x+=a.x||0,this.y+=a.y||0,this.z+=a.z||0,this):a instanceof Array?(this.x+=a[0]||0,this.y+=a[1]||0,this.z+=a[2]||0,this):(this.x+=a||0,this.y+=b||0,this.z+=c||0,this)},d.Vector.prototype.sub=function(a,b,c){return a instanceof d.Vector?(this.x-=a.x||0,this.y-=a.y||0,this.z-=a.z||0,this):a instanceof Array?(this.x-=a[0]||0,this.y-=a[1]||0,this.z-=a[2]||0,this):(this.x-=a||0,this.y-=b||0,this.z-=c||0,this)},d.Vector.prototype.mult=function(a){return"number"==typeof a&&isFinite(a)?(this.x*=a,this.y*=a,this.z*=a,this):(console.warn("p5.Vector.prototype.mult:","n is undefined or not a finite number"),this)},d.Vector.prototype.div=function(a){return"number"==typeof a&&isFinite(a)?0===a?(console.warn("p5.Vector.prototype.div:","divide by 0"),this):(this.x/=a,this.y/=a,this.z/=a,this):(console.warn("p5.Vector.prototype.div:","n is undefined or not a finite number"),this)},d.Vector.prototype.mag=function(){return Math.sqrt(this.magSq())},d.Vector.prototype.magSq=function(){var a=this.x,b=this.y,c=this.z;return a*a+b*b+c*c},d.Vector.prototype.dot=function(a,b,c){return a instanceof d.Vector?this.dot(a.x,a.y,a.z):this.x*(a||0)+this.y*(b||0)+this.z*(c||0)},d.Vector.prototype.cross=function(a){var b=this.y*a.z-this.z*a.y,c=this.z*a.x-this.x*a.z,e=this.x*a.y-this.y*a.x;return this.p5?new d.Vector(this.p5,[b,c,e]):new d.Vector(b,c,e)},d.Vector.prototype.dist=function(a){return a.copy().sub(this).mag()},d.Vector.prototype.normalize=function(){return 0===this.mag()?this:this.div(this.mag())},d.Vector.prototype.limit=function(a){var b=this.magSq();return b>a*a&&this.div(Math.sqrt(b)).mult(a),this},d.Vector.prototype.setMag=function(a){return this.normalize().mult(a)},d.Vector.prototype.heading=function(){var a=Math.atan2(this.y,this.x);return this.p5?this.p5._angleMode===f.RADIANS?a:e.radiansToDegrees(a):a},d.Vector.prototype.rotate=function(a){var b=this.heading()+a;this.p5&&this.p5._angleMode===f.DEGREES&&(b=e.degreesToRadians(b));var c=this.mag();return this.x=Math.cos(b)*c,this.y=Math.sin(b)*c,this},d.Vector.prototype.angleBetween=function(a){var b=this.dot(a)/(this.mag()*a.mag()),c=Math.acos(Math.min(1,Math.max(-1,b)));return this.p5&&this.p5._angleMode===f.DEGREES&&(c=e.radiansToDegrees(c)),c},d.Vector.prototype.lerp=function(a,b,c,e){return a instanceof d.Vector?this.lerp(a.x,a.y,a.z,b):(this.x+=(a-this.x)*e||0,this.y+=(b-this.y)*e||0,this.z+=(c-this.z)*e||0,this)},d.Vector.prototype.array=function(){return[this.x||0,this.y||0,this.z||0]},d.Vector.prototype.equals=function(a,b,c){var e,f,g;return a instanceof d.Vector?(e=a.x||0,f=a.y||0,g=a.z||0):a instanceof Array?(e=a[0]||0,f=a[1]||0,g=a[2]||0):(e=a||0,f=b||0,g=c||0),this.x===e&&this.y===f&&this.z===g},d.Vector.fromAngle=function(a,b){return this.p5&&this.p5._angleMode===f.DEGREES&&(a=e.degreesToRadians(a)),void 0===b&&(b=1),this.p5?new d.Vector(this.p5,[b*Math.cos(a),b*Math.sin(a),0]):new d.Vector(b*Math.cos(a),b*Math.sin(a),0)},d.Vector.fromAngles=function(a,b,c){this.p5&&this.p5._angleMode===f.DEGREES&&(a=e.degreesToRadians(a),b=e.degreesToRadians(b)),void 0===c&&(c=1);var g=Math.cos(b),h=Math.sin(b),i=Math.cos(a),j=Math.sin(a);return this.p5?new new d.Vector(this.p5,c*j*h,-c*i,c*j*g):new d.Vector(c*j*h,-c*i,c*j*g)},d.Vector.random2D=function(){var a;return a=this.p5?this.p5._angleMode===f.DEGREES?this.p5.random(360):this.p5.random(f.TWO_PI):Math.random()*f.TWO_PI,this.fromAngle(a)},d.Vector.random3D=function(){var a,b;this.p5?(a=this.p5.random(0,f.TWO_PI),b=this.p5.random(-1,1)):(a=Math.random()*f.TWO_PI,b=2*Math.random()-1);var c=Math.sqrt(1-b*b),e=c*Math.cos(a),g=c*Math.sin(a);return this.p5?new d.Vector(this.p5,[e,g,b]):new d.Vector(e,g,b)},d.Vector.add=function(a,b,c){return c?c.set(a):c=a.copy(),c.add(b),c},d.Vector.sub=function(a,b,c){return c?c.set(a):c=a.copy(),c.sub(b),c},d.Vector.mult=function(a,b,c){return c?c.set(a):c=a.copy(),c.mult(b),c},d.Vector.div=function(a,b,c){return c?c.set(a):c=a.copy(),c.div(b),c},d.Vector.dot=function(a,b){return a.dot(b)},d.Vector.cross=function(a,b){return a.cross(b)},d.Vector.dist=function(a,b){return a.dist(b)},d.Vector.lerp=function(a,b,c,d){return d?d.set(a):d=a.copy(),d.lerp(b,c),d},d.Vector.mag=function(a){var b=a.x,c=a.y,d=a.z,e=b*b+c*c+d*d;return Math.sqrt(e)},b.exports=d.Vector},{"../core/constants":20,"../core/core":21,"./polargeometry":53}],53:[function(a,b,c){"use strict";b.exports={degreesToRadians:function(a){return 2*Math.PI*a/360},radiansToDegrees:function(a){return 360*a/(2*Math.PI)}}},{}],54:[function(a,b,c){"use strict";var d=a("../core/core"),e=!1,f=!1,g=0,h=function(){var a,b,c=4294967296,d=1664525,e=1013904223;return{setSeed:function(d){b=a=(null==d?Math.random()*c:d)>>>0},getSeed:function(){return a},rand:function(){return(b=(d*b+e)%c)/c}}}();d.prototype.randomSeed=function(a){h.setSeed(a),e=!0,f=!1},d.prototype.random=function(a,b){var c;if(c=e?h.rand():Math.random(),void 0===a)return c;if(void 0===b)return a instanceof Array?a[Math.floor(c*a.length)]:c*a;if(a>b){var d=a;a=b,b=d}return c*(b-a)+a},d.prototype.randomGaussian=function(a,b){var c,d,e,h;if(f)c=g,f=!1;else{do{d=this.random(2)-1,e=this.random(2)-1,h=d*d+e*e}while(h>=1);h=Math.sqrt(-2*Math.log(h)/h),c=d*h,g=e*h,f=!0}var i=a||0;return c*(b||1)+i},b.exports=d},{"../core/core":21}],55:[function(a,b,c){"use strict";var d=a("../core/core"),e=a("./polargeometry"),f=a("../core/constants");d.prototype._angleMode=f.RADIANS,d.prototype.acos=function(a){return this._angleMode===f.RADIANS?Math.acos(a):e.radiansToDegrees(Math.acos(a))},d.prototype.asin=function(a){return this._angleMode===f.RADIANS?Math.asin(a):e.radiansToDegrees(Math.asin(a))},d.prototype.atan=function(a){return this._angleMode===f.RADIANS?Math.atan(a):e.radiansToDegrees(Math.atan(a))},d.prototype.atan2=function(a,b){return this._angleMode===f.RADIANS?Math.atan2(a,b):e.radiansToDegrees(Math.atan2(a,b))},d.prototype.cos=function(a){return this._angleMode===f.RADIANS?Math.cos(a):Math.cos(this.radians(a))},d.prototype.sin=function(a){return this._angleMode===f.RADIANS?Math.sin(a):Math.sin(this.radians(a))},d.prototype.tan=function(a){return this._angleMode===f.RADIANS?Math.tan(a):Math.tan(this.radians(a))},d.prototype.degrees=function(a){return e.radiansToDegrees(a)},d.prototype.radians=function(a){return e.degreesToRadians(a)},d.prototype.angleMode=function(a){a!==f.DEGREES&&a!==f.RADIANS||(this._angleMode=a)},b.exports=d},{"../core/constants":20,"../core/core":21,"./polargeometry":53}],56:[function(a,b,c){"use strict";var d=a("../core/core");d.prototype.textAlign=function(a,b){return this._renderer.textAlign.apply(this._renderer,arguments)},d.prototype.textLeading=function(a){return this._renderer.textLeading.apply(this._renderer,arguments)},d.prototype.textSize=function(a){return this._renderer.textSize.apply(this._renderer,arguments)},d.prototype.textStyle=function(a){return this._renderer.textStyle.apply(this._renderer,arguments)},d.prototype.textWidth=function(a){return 0===a.length?0:this._renderer.textWidth.apply(this._renderer,arguments)},d.prototype.textAscent=function(){return this._renderer.textAscent()},d.prototype.textDescent=function(){return this._renderer.textDescent()},d.prototype._updateTextMetrics=function(){return this._renderer._updateTextMetrics()},b.exports=d},{"../core/core":21}],57:[function(a,b,c){"use strict";var d=a("../core/core"),e=a("../core/constants"),f=a("opentype.js");a("../core/error_helpers"),d.prototype.loadFont=function(a,b,c){var e=new d.Font(this),g=this;return f.load(a,function(f,h){if(f)return void 0!==c?c(f):(d._friendlyFileLoadError(4,a),void console.error(f,a));e.font=h,void 0!==b&&b(e),g._decrementPreload();var i,j,k=["ttf","otf","woff","woff2"],l=a.split("\\").pop().split("/").pop(),m=l.lastIndexOf("."),n=m<1?null:l.substr(m+1);k.indexOf(n)>-1&&(i=l.substr(0,m),j=document.createElement("style"),j.appendChild(document.createTextNode("\n@font-face {\nfont-family: "+i+";\nsrc: url("+a+");\n}\n")),document.head.appendChild(j))}),e},d.prototype.text=function(a,b,c,d,e){return this._renderer._doFill||this._renderer._doStroke?this._renderer.text.apply(this._renderer,arguments):this},d.prototype.textFont=function(a,b){if(arguments.length){if(!a)throw Error("null font passed to textFont");return this._renderer._setProperty("_textFont",a),b&&(this._renderer._setProperty("_textSize",b),this._renderer._setProperty("_textLeading",b*e._DEFAULT_LEADMULT)),this._renderer._applyTextProperties()}return this._renderer._textFont},b.exports=d},{"../core/constants":20,"../core/core":21,"../core/error_helpers":24,"opentype.js":9}],58:[function(a,b,c){"use strict";function d(a,b){for(var c=h(b,{sampleFactor:.1,simplifyThreshold:0}),d=n(a,0,1),f=d/(d*c.sampleFactor),g=[],i=0;i<d;i+=f)g.push(n(a,i));return c.simplifyThreshold&&e(g,c.simplifyThreshold),g}function e(a,b){b=void 0===b?0:b;for(var c=0,d=a.length-1;a.length>3&&d>=0;--d)j(i(a,d-1),i(a,d),i(a,d+1),b)&&(a.splice(d%a.length,1),c++);return c}function f(a){for(var b,c=[],d=0;d<a.length;d++)"M"===a[d].type&&(b&&c.push(b),b=[]),b.push(g(a[d]));return c.push(b),c}function g(a){var b=[a.type];return"M"===a.type||"L"===a.type?b.push(a.x,a.y):"C"===a.type?b.push(a.x1,a.y1,a.x2,a.y2,a.x,a.y):"Q"===a.type&&b.push(a.x1,a.y1,a.x,a.y),b}function h(a,b){if("object"!=typeof a)a=b;else for(var c in b)void 0===a[c]&&(a[c]=b[c]);return a}function i(a,b){var c=a.length;return a[b<0?b%c+c:b%c]}function j(a,b,c,d){if(!d)return 0===k(a,b,c);void 0===j.tmpPoint1&&(j.tmpPoint1=[],j.tmpPoint2=[]);var e=j.tmpPoint1,f=j.tmpPoint2;e.x=b.x-a.x,e.y=b.y-a.y,f.x=c.x-b.x,f.y=c.y-b.y;var g=e.x*f.x+e.y*f.y,h=Math.sqrt(e.x*e.x+e.y*e.y),i=Math.sqrt(f.x*f.x+f.y*f.y);return Math.acos(g/(h*i))<d}function k(a,b,c){return(b[0]-a[0])*(c[1]-a[1])-(c[0]-a[0])*(b[1]-a[1])}function l(a,b,c,d,e,f,g,h,i){var j=1-i,k=Math.pow(j,3),l=Math.pow(j,2),m=i*i,n=m*i,o=k*a+3*l*i*c+3*j*i*i*e+n*g,p=k*b+3*l*i*d+3*j*i*i*f+n*h,q=a+2*i*(c-a)+m*(e-2*c+a),r=b+2*i*(d-b)+m*(f-2*d+b),s=c+2*i*(e-c)+m*(g-2*e+c),t=d+2*i*(f-d)+m*(h-2*f+d),u=j*a+i*c,v=j*b+i*d,w=j*e+i*g,x=j*f+i*h,y=90-180*Math.atan2(q-s,r-t)/Math.PI;return(q>s||r<t)&&(y+=180),{x:o,y:p,m:{x:q,y:r},n:{x:s,y:t},start:{x:u,y:v},end:{x:w,y:x},alpha:y}}function m(a,b,c,d,e,f,g,h,i){return null==i?u(a,b,c,d,e,f,g,h):l(a,b,c,d,e,f,g,h,v(a,b,c,d,e,f,g,h,i))}function n(a,b,c){a=p(a);for(var d,e,f,g,h,i="",j={},k=0,n=0,o=a.length;n<o;n++){if(f=a[n],"M"===f[0])d=+f[1],e=+f[2];else{if(g=m(d,e,f[1],f[2],f[3],f[4],f[5],f[6]),k+g>b&&!c)return h=m(d,e,f[1],f[2],f[3],f[4],f[5],f[6],b-k),{x:h.x,y:h.y,alpha:h.alpha};k+=g,d=+f[5],e=+f[6]}i+=f.shift()+f}return j.end=i,h=c?k:l(d,e,f[0],f[1],f[2],f[3],f[4],f[5],1),h.alpha&&(h={x:h.x,y:h.y,alpha:h.alpha}),h}function o(a){var b=[],c=0,d=0,e=0,f=0,g=0;if(!a)return b;"M"===a[0][0]&&(c=+a[0][1],d=+a[0][2],e=c,f=d,g++,b[0]=["M",c,d]);for(var h,i,j,k=3===a.length&&"M"===a[0][0]&&"R"===a[1][0].toUpperCase()&&"Z"===a[2][0].toUpperCase(),l=g,m=a.length;l<m;l++){if(b.push(i=[]),j=a[l],j[0]!==String.prototype.toUpperCase.call(j[0]))switch(i[0]=String.prototype.toUpperCase.call(j[0]),i[0]){case"A":i[1]=j[1],i[2]=j[2],i[3]=j[3],i[4]=j[4],i[5]=j[5],i[6]=+(j[6]+c),i[7]=+(j[7]+d);break;case"V":i[1]=+j[1]+d;break;case"H":i[1]=+j[1]+c;break;case"R":h=[c,d].concat(j.slice(1));for(var n=2,o=h.length;n<o;n++)h[n]=+h[n]+c,h[++n]=+h[n]+d;b.pop(),b=b.concat(r(h,k));break;case"M":e=+j[1]+c,f=+j[2]+d;break;default:for(n=1,o=j.length;n<o;n++)i[n]=+j[n]+(n%2?c:d)}else if("R"===j[0])h=[c,d].concat(j.slice(1)),b.pop(),b=b.concat(r(h,k)),i=["R"].concat(j.slice(-2));else for(var p=0,q=j.length;p<q;p++)i[p]=j[p];switch(i[0]){case"Z":c=e,d=f;break;case"H":c=i[1];break;case"V":d=i[1];break;case"M":e=i[i.length-2],f=i[i.length-1];break;default:c=i[i.length-2],d=i[i.length-1]}}return b}function p(a,b){var c,d=o(a),e=b&&o(b),f={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},g={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},h=[],i=[],j=function(a,b,c){var d,e,f={T:1,Q:1};if(!a)return["C",b.x,b.y,b.x,b.y,b.x,b.y];switch(a[0]in f||(b.qx=b.qy=null),a[0]){case"M":b.X=a[1],b.Y=a[2];break;case"A":a=["C"].concat(q.apply(0,[b.x,b.y].concat(a.slice(1))));break;case"S":"C"===c||"S"===c?(d=2*b.x-b.bx,e=2*b.y-b.by):(d=b.x,e=b.y),a=["C",d,e].concat(a.slice(1));break;case"T":"Q"===c||"T"===c?(b.qx=2*b.x-b.qx,b.qy=2*b.y-b.qy):(b.qx=b.x,b.qy=b.y),a=["C"].concat(t(b.x,b.y,b.qx,b.qy,a[1],a[2]));break;case"Q":b.qx=a[1],b.qy=a[2],a=["C"].concat(t(b.x,b.y,a[1],a[2],a[3],a[4]));break;case"L":a=["C"].concat(s(b.x,b.y,a[1],a[2]));break;case"H":a=["C"].concat(s(b.x,b.y,a[1],b.y));break;case"V":a=["C"].concat(s(b.x,b.y,b.x,a[1]));break;case"Z":a=["C"].concat(s(b.x,b.y,b.X,b.Y))}return a},k=function(a,b){if(a[b].length>7){a[b].shift();for(var f=a[b];f.length;)h[b]="A",e&&(i[b]="A"),a.splice(b++,0,["C"].concat(f.splice(0,6)));a.splice(b,1),c=Math.max(d.length,e&&e.length||0)}},l=function(a,b,f,g,h){a&&b&&"M"===a[h][0]&&"M"!==b[h][0]&&(b.splice(h,0,["M",g.x,g.y]),f.bx=0,f.by=0,f.x=a[h][1],f.y=a[h][2],c=Math.max(d.length,e&&e.length||0))},m="",n="";c=Math.max(d.length,e&&e.length||0);for(var p=0;p<c;p++){d[p]&&(m=d[p][0]),"C"!==m&&(h[p]=m,p&&(n=h[p-1])),d[p]=j(d[p],f,n),"A"!==h[p]&&"C"===m&&(h[p]="C"),k(d,p),e&&(e[p]&&(m=e[p][0]),"C"!==m&&(i[p]=m,p&&(n=i[p-1])),e[p]=j(e[p],g,n),"A"!==i[p]&&"C"===m&&(i[p]="C"),k(e,p)),l(d,e,f,g,p),l(e,d,g,f,p);var r=d[p],u=e&&e[p],v=r.length,w=e&&u.length;f.x=r[v-2],f.y=r[v-1],f.bx=parseFloat(r[v-4])||f.x,f.by=parseFloat(r[v-3])||f.y,g.bx=e&&(parseFloat(u[w-4])||g.x),g.by=e&&(parseFloat(u[w-3])||g.y),g.x=e&&u[w-2],g.y=e&&u[w-1]}return e?[d,e]:d}function q(a,b,c,d,e,f,g,h,i,j){var k,l,m,n,o,p=Math.PI,r=120*p/180,s=p/180*(+e||0),t=[],u=function(a,b,c){return{x:a*Math.cos(c)-b*Math.sin(c),y:a*Math.sin(c)+b*Math.cos(c)}};if(j)k=j[0],l=j[1],m=j[2],n=j[3];else{o=u(a,b,-s),a=o.x,b=o.y,o=u(h,i,-s),h=o.x,i=o.y;var v=(a-h)/2,w=(b-i)/2,x=v*v/(c*c)+w*w/(d*d);x>1&&(x=Math.sqrt(x),c*=x,d*=x);var y=c*c,z=d*d,A=(f===g?-1:1)*Math.sqrt(Math.abs((y*z-y*w*w-z*v*v)/(y*w*w+z*v*v)));m=A*c*w/d+(a+h)/2,n=A*-d*v/c+(b+i)/2,k=Math.asin(((b-n)/d).toFixed(9)),l=Math.asin(((i-n)/d).toFixed(9)),k=a<m?p-k:k,l=h<m?p-l:l,k<0&&(k=2*p+k),l<0&&(l=2*p+l),g&&k>l&&(k-=2*p),!g&&l>k&&(l-=2*p)}var B=l-k;if(Math.abs(B)>r){var C=l,D=h,E=i;l=k+r*(g&&l>k?1:-1),h=m+c*Math.cos(l),i=n+d*Math.sin(l),t=q(h,i,c,d,e,0,g,D,E,[l,C,m,n])}B=l-k;var F=Math.cos(k),G=Math.sin(k),H=Math.cos(l),I=Math.sin(l),J=Math.tan(B/4),K=4/3*c*J,L=4/3*d*J,M=[a,b],N=[a+K*G,b-L*F],O=[h+K*I,i-L*H],P=[h,i];if(N[0]=2*M[0]-N[0],N[1]=2*M[1]-N[1],j)return[N,O,P].concat(t);t=[N,O,P].concat(t).join().split(",");for(var Q=[],R=0,S=t.length;R<S;R++)Q[R]=R%2?u(t[R-1],t[R],s).y:u(t[R],t[R+1],s).x;return Q}function r(a,b){for(var c=[],d=0,e=a.length;e-2*!b>d;d+=2){var f=[{x:+a[d-2],y:+a[d-1]},{x:+a[d],y:+a[d+1]},{x:+a[d+2],y:+a[d+3]},{x:+a[d+4],y:+a[d+5]}];b?d?e-4===d?f[3]={x:+a[0],y:+a[1]}:e-2===d&&(f[2]={x:+a[0],y:+a[1]},f[3]={x:+a[2],y:+a[3]}):f[0]={x:+a[e-2],y:+a[e-1]}:e-4===d?f[3]=f[2]:d||(f[0]={x:+a[d],y:+a[d+1]}),c.push(["C",(-f[0].x+6*f[1].x+f[2].x)/6,(-f[0].y+6*f[1].y+f[2].y)/6,(f[1].x+6*f[2].x-f[3].x)/6,(f[1].y+6*f[2].y-f[3].y)/6,f[2].x,f[2].y])}return c}function s(a,b,c,d){return[a,b,c,d,c,d]}function t(a,b,c,d,e,f){var g=1/3,h=2/3;return[g*a+h*c,g*b+h*d,g*e+h*c,g*f+h*d,e,f]}function u(a,b,c,d,e,f,g,h,i){null==i&&(i=1),i=i>1?1:i<0?0:i;for(var j=i/2,k=12,l=[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],m=0,n=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],o=0;o<k;o++){var p=j*l[o]+j,q=w(p,a,c,e,g),r=w(p,b,d,f,h),s=q*q+r*r;m+=n[o]*Math.sqrt(s)}return j*m}function v(a,b,c,d,e,f,g,h,i){if(!(i<0||u(a,b,c,d,e,f,g,h)<i)){var j,k=1,l=k/2,m=k-l,n=.01;for(j=u(a,b,c,d,e,f,g,h,m);Math.abs(j-i)>n;)l/=2,m+=(j<i?1:-1)*l,j=u(a,b,c,d,e,f,g,h,m);return m}}function w(a,b,c,d,e){return a*(a*(-3*b+9*c-9*d+3*e)+6*b-12*c+6*d)-3*b+3*c}function x(){for(var a="",b=arguments.length-1;b>=0;--b){var c=arguments[b];a+=c===Object(c)?JSON.stringify(c):c}return a}var y=a("../core/core"),z=a("../core/constants");y.Font=function(a){this.parent=a,this.cache={},this.font=void 0,this.name="p5.Font"},y.Font.prototype.list=function(){throw"not yet implemented"},y.Font.prototype.textBounds=function(a,b,c,d,e){b=void 0!==b?b:0,c=void 0!==c?c:0,d=d||this.parent._renderer._textSize;var f=e&&e.renderer&&e.renderer._pInst||this.parent,g=f._renderer.drawingContext,h=g.textAlign||z.LEFT,i=g.textBaseline||z.BASELINE,j=x("textBounds",a,b,c,d,h,i),k=this.cache[j];if(!k){var l,m,n,o,p,q=[],r=[],s=this._scale(d);this.font.forEachGlyph(a,b,c,d,e,function(a,b,c,d){var e=a.getMetrics();q.push(b+e.xMin*s),q.push(b+e.xMax*s),r.push(c+-e.yMin*s),r.push(c+-e.yMax*s)}),l=Math.min.apply(null,q),m=Math.min.apply(null,r),n=Math.max.apply(null,q),o=Math.max.apply(null,r),k={x:l,y:m,h:o-m,w:n-l,advance:l-b},p=this._handleAlignment(f,g,a,k.x,k.y,k.w+k.advance),k.x=p.x,k.y=p.y,this.cache[x("textBounds",a,b,c,d,h,i)]=k}return k},y.Font.prototype.textToPoints=function(a,b,c,e,g){function h(b){return k[b].name&&"space"===k[b].name||a.length===k.length&&" "===a[b]||k[b].index&&3===k[b].index}var i=0,j=[],k=this._getGlyphs(a);e=e||this.parent._renderer._textSize;for(var l=0;l<k.length;l++){if(!h(l))for(var m=k[l].getPath(b,c,e),n=f(m.commands),o=0;o<n.length;o++)for(var p=d(n[o],g),q=0;q<p.length;q++)p[q].x+=i,j.push(p[q]);i+=k[l].advanceWidth*this._scale(e)}return j},y.Font.prototype._getGlyphs=function(a){return this.font.stringToGlyphs(a)},y.Font.prototype._getPath=function(a,b,c,d){var e=d&&d.renderer&&d.renderer._pInst||this.parent,f=e._renderer.drawingContext,g=this._handleAlignment(e,f,a,b,c);return this.font.getPath(a,g.x,g.y,e._renderer._textSize,d)},y.Font.prototype._getPathData=function(a,b,c,d){var e=3;return"string"==typeof a&&arguments.length>2?a=this._getPath(a,b,c,d):"object"==typeof b&&(d=b),d&&"number"==typeof d.decimals&&(e=d.decimals),a.toPathData(e)},y.Font.prototype._getSVG=function(a,b,c,d){var e=3;return"string"==typeof a&&arguments.length>2?a=this._getPath(a,b,c,d):"object"==typeof b&&(d=b),d&&("number"==typeof d.decimals&&(e=d.decimals),"number"==typeof d.strokeWidth&&(a.strokeWidth=d.strokeWidth),void 0!==d.fill&&(a.fill=d.fill),void 0!==d.stroke&&(a.stroke=d.stroke)),a.toSVG(e)},y.Font.prototype._renderPath=function(a,b,c,d){var e,f=d&&d.renderer||this.parent._renderer,g=f.drawingContext;e="object"==typeof a&&a.commands?a.commands:this._getPath(a,b,c,d).commands,g.beginPath();for(var h=0;h<e.length;h+=1){var i=e[h];"M"===i.type?g.moveTo(i.x,i.y):"L"===i.type?g.lineTo(i.x,i.y):"C"===i.type?g.bezierCurveTo(i.x1,i.y1,i.x2,i.y2,i.x,i.y):"Q"===i.type?g.quadraticCurveTo(i.x1,i.y1,i.x,i.y):"Z"===i.type&&g.closePath()}return f._doStroke&&f._strokeSet&&g.stroke(),f._doFill&&(f._fillSet||f._setFill(z._DEFAULT_TEXT_FILL),g.fill()),this},y.Font.prototype._textWidth=function(a,b){return this.font.getAdvanceWidth(a,b)},y.Font.prototype._textAscent=function(a){return this.font.ascender*this._scale(a)},y.Font.prototype._textDescent=function(a){return-this.font.descender*this._scale(a)},y.Font.prototype._scale=function(a){return 1/this.font.unitsPerEm*(a||this.parent._renderer._textSize)},y.Font.prototype._handleAlignment=function(a,b,c,d,e,f){var g=a._renderer._textSize,h=this._textAscent(g),i=this._textDescent(g);return f=void 0!==f?f:this._textWidth(c,g),b.textAlign===z.CENTER?d-=f/2:b.textAlign===z.RIGHT&&(d-=f),
b.textBaseline===z.TOP?e+=h:b.textBaseline===z._CTX_MIDDLE?e+=h/2:b.textBaseline===z.BOTTOM&&(e-=i),{x:d,y:e}},b.exports=y},{"../core/constants":20,"../core/core":21}],59:[function(a,b,c){"use strict";var d=a("../core/core");d.prototype.append=function(a,b){return a.push(b),a},d.prototype.arrayCopy=function(a,b,c,d,e){var f,g;void 0!==e?(g=Math.min(e,a.length),f=d,a=a.slice(b,g+b)):(void 0!==c?(g=c,g=Math.min(g,a.length)):g=a.length,f=0,c=b,a=a.slice(0,g)),Array.prototype.splice.apply(c,[f,g].concat(a))},d.prototype.concat=function(a,b){return a.concat(b)},d.prototype.reverse=function(a){return a.reverse()},d.prototype.shorten=function(a){return a.pop(),a},d.prototype.shuffle=function(a,b){var c=ArrayBuffer&&ArrayBuffer.isView&&ArrayBuffer.isView(a);a=b||c?a:a.slice();for(var d,e,f=a.length;f>1;)d=Math.random()*f|0,e=a[--f],a[f]=a[d],a[d]=e;return a},d.prototype.sort=function(a,b){var c=b?a.slice(0,Math.min(b,a.length)):a,d=b?a.slice(Math.min(b,a.length)):[];return c="string"==typeof c[0]?c.sort():c.sort(function(a,b){return a-b}),c.concat(d)},d.prototype.splice=function(a,b,c){return Array.prototype.splice.apply(a,[c,0].concat(b)),a},d.prototype.subset=function(a,b,c){return void 0!==c?a.slice(b,b+c):a.slice(b,a.length)},b.exports=d},{"../core/core":21}],60:[function(a,b,c){"use strict";var d=a("../core/core");d.prototype.float=function(a){return a instanceof Array?a.map(parseFloat):parseFloat(a)},d.prototype.int=function(a,b){return b=b||10,"string"==typeof a?parseInt(a,b):"number"==typeof a?0|a:"boolean"==typeof a?a?1:0:a instanceof Array?a.map(function(a){return d.prototype.int(a,b)}):void 0},d.prototype.str=function(a){return a instanceof Array?a.map(d.prototype.str):String(a)},d.prototype.boolean=function(a){return"number"==typeof a?0!==a:"string"==typeof a?"true"===a.toLowerCase():"boolean"==typeof a?a:a instanceof Array?a.map(d.prototype.boolean):void 0},d.prototype.byte=function(a){var b=d.prototype.int(a,10);return"number"==typeof b?(b+128)%256-128:b instanceof Array?b.map(d.prototype.byte):void 0},d.prototype.char=function(a){return"number"!=typeof a||isNaN(a)?a instanceof Array?a.map(d.prototype.char):"string"==typeof a?d.prototype.char(parseInt(a,10)):void 0:String.fromCharCode(a)},d.prototype.unchar=function(a){return"string"==typeof a&&1===a.length?a.charCodeAt(0):a instanceof Array?a.map(d.prototype.unchar):void 0},d.prototype.hex=function(a,b){if(b=void 0===b||null===b?b=8:b,a instanceof Array)return a.map(function(a){return d.prototype.hex(a,b)});if("number"==typeof a){a<0&&(a=4294967295+a+1);for(var c=Number(a).toString(16).toUpperCase();c.length<b;)c="0"+c;return c.length>=b&&(c=c.substring(c.length-b,c.length)),c}},d.prototype.unhex=function(a){return a instanceof Array?a.map(d.prototype.unhex):parseInt("0x"+a,16)},b.exports=d},{"../core/core":21}],61:[function(a,b,c){"use strict";function d(a,b,c){var d=a<0,e=d?a.toString().substring(1):a.toString(),f=e.indexOf("."),g=-1!==f?e.substring(0,f):e,h=-1!==f?e.substring(f+1):"",i=d?"-":"";if(void 0!==c){var j="";(-1!==f||c-h.length>0)&&(j="."),h.length>c&&(h=h.substring(0,c));for(var k=0;k<b-g.length;k++)i+="0";i+=g,i+=j,i+=h;for(var l=0;l<c-h.length;l++)i+="0";return i}for(var m=0;m<Math.max(b-g.length,0);m++)i+="0";return i+=e}function e(a,b){a=a.toString();var c=a.indexOf("."),d=-1!==c?a.substring(c):"",e=-1!==c?a.substring(0,c):a;if(e=e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),0===b)d="";else if(void 0!==b)if(b>d.length){d+=-1===c?".":"";for(var f=b-d.length+1,g=0;g<f;g++)d+="0"}else d=d.substring(0,b+1);return e+d}function f(a){return parseFloat(a)>0?"+"+a.toString():a.toString()}function g(a){return parseFloat(a)>0?" "+a.toString():a.toString()}var h=a("../core/core");a("../core/error_helpers"),h.prototype.join=function(a,b){return h._validateParameters("join",arguments),a.join(b)},h.prototype.match=function(a,b){return h._validateParameters("match",arguments),a.match(b)},h.prototype.matchAll=function(a,b){h._validateParameters("matchAll",arguments);for(var c=new RegExp(b,"g"),d=c.exec(a),e=[];null!==d;)e.push(d),d=c.exec(a);return e},h.prototype.nf=function(a,b,c){return h._validateParameters("nf",arguments),a instanceof Array?a.map(function(a){return d(a,b,c)}):"[object Arguments]"===Object.prototype.toString.call(a)?3===a.length?this.nf(a[0],a[1],a[2]):2===a.length?this.nf(a[0],a[1]):this.nf(a[0]):d(a,b,c)},h.prototype.nfc=function(a,b){return h._validateParameters("nfc",arguments),a instanceof Array?a.map(function(a){return e(a,b)}):e(a,b)},h.prototype.nfp=function(){h._validateParameters("nfp",arguments);var a=h.prototype.nf.apply(this,arguments);return a instanceof Array?a.map(f):f(a)},h.prototype.nfs=function(){h._validateParameters("nfs",arguments);var a=h.prototype.nf.apply(this,arguments);return a instanceof Array?a.map(g):g(a)},h.prototype.split=function(a,b){return h._validateParameters("split",arguments),a.split(b)},h.prototype.splitTokens=function(a,b){h._validateParameters("splitTokens",arguments);var c;if(void 0!==b){var d=b,e=/\]/g.exec(d),f=/\[/g.exec(d);f&&e?(d=d.slice(0,e.index)+d.slice(e.index+1),f=/\[/g.exec(d),d=d.slice(0,f.index)+d.slice(f.index+1),c=new RegExp("[\\["+d+"\\]]","g")):e?(d=d.slice(0,e.index)+d.slice(e.index+1),c=new RegExp("["+d+"\\]]","g")):f?(d=d.slice(0,f.index)+d.slice(f.index+1),c=new RegExp("["+d+"\\[]","g")):c=new RegExp("["+d+"]","g")}else c=/\s/g;return a.split(c).filter(function(a){return a})},h.prototype.trim=function(a){return h._validateParameters("trim",arguments),a instanceof Array?a.map(this.trim):a.trim()},b.exports=h},{"../core/core":21,"../core/error_helpers":24}],62:[function(a,b,c){"use strict";var d=a("../core/core");d.prototype.day=function(){return(new Date).getDate()},d.prototype.hour=function(){return(new Date).getHours()},d.prototype.minute=function(){return(new Date).getMinutes()},d.prototype.millis=function(){return window.performance.now()},d.prototype.month=function(){return(new Date).getMonth()+1},d.prototype.second=function(){return(new Date).getSeconds()},d.prototype.year=function(){return(new Date).getFullYear()},b.exports=d},{"../core/core":21}],63:[function(a,b,c){"use strict";var d=a("../core/core");d.prototype.camera=function(){return this._renderer.camera.apply(this._renderer,arguments),this},d.RendererGL.prototype.camera=function(a,b,c,d,e,f,g,h,i){void 0===a&&(a=this.defaultCameraX,b=this.defaultCameraY,c=this.defaultCameraZ,d=a,e=b,f=0,g=0,h=1,i=0),this.cameraX=a,this.cameraY=b,this.cameraZ=c;var j=a-d,k=b-e,l=c-f;this.eyeDist=Math.sqrt(j*j+k*k+l*l),0!==this.eyeDist&&(j/=this.eyeDist,k/=this.eyeDist,l/=this.eyeDist);var m=g,n=h,o=i,p=n*l-o*k,q=-m*l+o*j,r=m*k-n*j;m=k*r-l*q,n=-j*r+l*p,o=j*q-k*p;var s=Math.sqrt(p*p+q*q+r*r);0!==s&&(p/=s,q/=s,r/=s);var t=Math.sqrt(m*m+n*n+o*o);0!==t&&(m/=t,n/=t,o/=t),this.cameraMatrix.set(p,m,j,0,q,n,k,0,r,o,l,0,0,0,0,1);var u=-a,v=-b,w=-c;return this.cameraMatrix.translate([u,v,w]),this.uMVMatrix.set(this.cameraMatrix.mat4[0],this.cameraMatrix.mat4[1],this.cameraMatrix.mat4[2],this.cameraMatrix.mat4[3],this.cameraMatrix.mat4[4],this.cameraMatrix.mat4[5],this.cameraMatrix.mat4[6],this.cameraMatrix.mat4[7],this.cameraMatrix.mat4[8],this.cameraMatrix.mat4[9],this.cameraMatrix.mat4[10],this.cameraMatrix.mat4[11],this.cameraMatrix.mat4[12],this.cameraMatrix.mat4[13],this.cameraMatrix.mat4[14],this.cameraMatrix.mat4[15]),this},d.prototype.perspective=function(){return this._renderer.perspective.apply(this._renderer,arguments),this},d.RendererGL.prototype.perspective=function(a,b,c,e){void 0===a&&(a=this.defaultCameraFOV),void 0===b&&(b=this.defaultCameraAspect),void 0===c&&(c=this.defaultCameraNear),void 0===e&&(e=this.defaultCameraFar),this.cameraFOV=a,this.cameraAspect=b,this.cameraNear=c,this.cameraFar=e,this.uPMatrix=d.Matrix.identity(this.pInst);var f=1/Math.tan(this.cameraFOV/2),g=1/(this.cameraNear-this.cameraFar);this.uPMatrix.set(f/b,0,0,0,0,-f,0,0,0,0,(e+c)*g,-1,0,0,2*e*c*g,0),this._curCamera="custom"},d.prototype.ortho=function(){return this._renderer.ortho.apply(this._renderer,arguments),this},d.RendererGL.prototype.ortho=function(a,b,c,e,f,g){void 0===a&&(a=-this.width/2),void 0===b&&(b=+this.width/2),void 0===c&&(c=-this.height/2),void 0===e&&(e=+this.height/2),void 0===f&&(f=0),void 0===g&&(g=Math.max(this.width,this.height)),this.uPMatrix=d.Matrix.identity(this._pInst);var h=b-a,i=e-c,j=g-f,k=2/h,l=2/i,m=-2/j,n=-(b+a)/h,o=-(e+c)/i,p=-(g+f)/j;this.uPMatrix=d.Matrix.identity(),this.uPMatrix.set(k,0,0,0,0,-l,0,0,0,0,m,0,n,o,p,1),this._curCamera="custom"},b.exports=d},{"../core/core":21}],64:[function(a,b,c){"use strict";var d=a("../core/core");d.prototype.orbitControl=function(){return this.mouseIsPressed&&(this.rotateY((this.mouseX-this.width/2)/(this.width/2)),this.rotateX((this.mouseY-this.height/2)/(this.width/2))),this},b.exports=d},{"../core/core":21}],65:[function(a,b,c){"use strict";var d=a("../core/core");d.prototype.ambientLight=function(a,b,c,d){var e=this.color.apply(this,arguments),f=this._renderer._useLightShader();return f.setUniform("uUseLighting",!0),f.setUniform("uMaterialColor",this._renderer.curFillColor),this._renderer.ambientLightColors.push(e._array[0],e._array[1],e._array[2]),f.setUniform("uAmbientColor",this._renderer.ambientLightColors),f.setUniform("uAmbientLightCount",this._renderer.ambientLightColors.length/3),this},d.prototype.directionalLight=function(a,b,c,d,e,f){var g,h,i,j=this._renderer._useLightShader(),k=this.color.apply(this,[a,b,c]),l=arguments[arguments.length-1];"number"==typeof l?(g=arguments[arguments.length-3],h=arguments[arguments.length-2],i=arguments[arguments.length-1]):(g=l.x,h=l.y,i=l.z),j.setUniform("uUseLighting",!0),j.setUniform("uMaterialColor",this._renderer.curFillColor);var m=Math.sqrt(g*g+h*h+i*i);return this._renderer.directionalLightDirections.push(g/m,h/m,i/m),j.setUniform("uLightingDirection",this._renderer.directionalLightDirections),this._renderer.directionalLightColors.push(k._array[0],k._array[1],k._array[2]),j.setUniform("uDirectionalColor",this._renderer.directionalLightColors),j.setUniform("uDirectionalLightCount",this._renderer.directionalLightColors.length/3),this},d.prototype.pointLight=function(a,b,c,d,e,f){var g,h,i,j=this._renderer._pInst.color.apply(this,[a,b,c]),k=arguments[arguments.length-1];"number"==typeof k?(g=arguments[arguments.length-3],h=arguments[arguments.length-2],i=arguments[arguments.length-1]):(g=k.x,h=k.y,i=k.z);var l=this._renderer._useLightShader();return l.setUniform("uUseLighting",!0),l.setUniform("uMaterialColor",this._renderer.curFillColor),this._renderer.pointLightPositions.push(g,h,i),l.setUniform("uPointLightLocation",this._renderer.pointLightPositions),this._renderer.pointLightColors.push(j._array[0],j._array[1],j._array[2]),l.setUniform("uPointLightColor",this._renderer.pointLightColors),l.setUniform("uPointLightCount",this._renderer.pointLightColors.length/3),this},b.exports=d},{"../core/core":21}],66:[function(a,b,c){"use strict";function d(a,b){for(var c={v:[],vt:[],vn:[]},d={},f=0;f<b.length;++f){var g=b[f].trim().split(/\b\s+/);if(g.length>0)if("v"===g[0]||"vn"===g[0]){var h=new e.Vector(parseFloat(g[1]),parseFloat(g[2]),parseFloat(g[3]));c[g[0]].push(h)}else if("vt"===g[0]){var i=[parseFloat(g[1]),parseFloat(g[2])];c[g[0]].push(i)}else if("f"===g[0])for(var j=3;j<g.length;++j){for(var k=[],l=[1,j-1,j],m=0;m<l.length;++m){var n=g[l[m]],o=0;if(void 0!==d[n])o=d[n];else{for(var p=n.split("/"),q=0;q<p.length;q++)p[q]=parseInt(p[q])-1;o=d[n]=a.vertices.length,a.vertices.push(c.v[p[0]].copy()),c.vt[p[1]]?a.uvs.push(c.vt[p[1]].slice()):a.uvs.push([0,0]),c.vn[p[2]]&&a.vertexNormals.push(c.vn[p[2]].copy())}k.push(o)}k[0]!==k[1]&&k[0]!==k[2]&&k[1]!==k[2]&&a.faces.push(k)}}return 0===a.vertexNormals.length&&a.computeNormals(),a}var e=a("../core/core");a("./p5.Geometry"),e.prototype.loadModel=function(a){var b,c,f;"boolean"==typeof arguments[1]?(b=arguments[1],c=arguments[2],f=arguments[3]):(b=!1,c=arguments[1],f=arguments[2]);var g=new e.Geometry;return g.gid=a+"|"+b,this.loadStrings(a,function(a){d(g,a),b&&g.normalize(),"function"==typeof c&&c(g)}.bind(this),f),g},e.prototype.model=function(a){a.vertices.length>0&&(this._renderer.geometryInHash(a.gid)||(a._makeTriangleEdges(),this._renderer._edgesToVertices(a),this._renderer.createBuffers(a.gid,a)),this._renderer.drawBuffers(a.gid))},b.exports=e},{"../core/core":21,"./p5.Geometry":68}],67:[function(a,b,c){"use strict";var d=a("../core/core"),e=a("../core/constants");a("./p5.Texture"),d.prototype.loadShader=function(a,b){var c=new d.Shader,e=this,f=!1,g=!1;return this.loadStrings(b,function(a){c._fragSrc=a.join("\n"),f=!0,g||e._incrementPreload()}),this.loadStrings(a,function(a){c._vertSrc=a.join("\n"),g=!0,f||e._incrementPreload()}),c},d.prototype.createShader=function(a,b){return new d.Shader(this._renderer,a,b)},d.prototype.shader=function(a){return void 0===a._renderer&&(a._renderer=this._renderer),a.isStrokeShader()?this._renderer.setStrokeShader(a):this._renderer.setFillShader(a),this},d.prototype.normalMaterial=function(){return this._renderer.drawMode=e.FILL,this._renderer.setFillShader(this._renderer._getNormalShader()),this._renderer.curFillColor=[1,1,1,1],this.noStroke(),this},d.prototype.texture=function(a){this._renderer.GL.depthMask(!0),this._renderer.GL.enable(this._renderer.GL.BLEND),this._renderer.GL.blendFunc(this._renderer.GL.SRC_ALPHA,this._renderer.GL.ONE_MINUS_SRC_ALPHA),this._renderer.drawMode=e.TEXTURE;var b=this._renderer._useLightShader();return b.setUniform("uSpecular",!1),b.setUniform("isTexture",!0),b.setUniform("uSampler",a),this.noStroke(),this},d.prototype.ambientMaterial=function(a,b,c,e){var f=d.prototype.color.apply(this,arguments);this._renderer.curFillColor=f._array;var g=this._renderer._useLightShader();return g.setUniform("uMaterialColor",this._renderer.curFillColor),g.setUniform("uSpecular",!1),g.setUniform("isTexture",!1),this},d.prototype.specularMaterial=function(a,b,c,e){var f=d.prototype.color.apply(this,arguments);this._renderer.curFillColor=f._array;var g=this._renderer._useLightShader();return g.setUniform("uMaterialColor",this._renderer.curFillColor),g.setUniform("uSpecular",!0),g.setUniform("isTexture",!1),this},d.RendererGL.prototype._applyColorBlend=function(a){var b=this.GL;return a[a.length-1]<1?(b.depthMask(!1),b.enable(b.BLEND),b.blendEquation(b.FUNC_ADD),b.blendFunc(b.SRC_ALPHA,b.ONE_MINUS_SRC_ALPHA)):(b.depthMask(!0),b.disable(b.BLEND)),a},b.exports=d},{"../core/constants":20,"../core/core":21,"./p5.Texture":74}],68:[function(a,b,c){"use strict";var d=a("../core/core");d.Geometry=function(a,b,c){return this.vertices=[],this.lineVertices=[],this.lineNormals=[],this.vertexNormals=[],this.faces=[],this.uvs=[],this.edges=[],this.detailX=void 0!==a?a:1,this.detailY=void 0!==b?b:1,c instanceof Function&&c.call(this),this.name="p5.Geometry",this},d.Geometry.prototype.computeFaces=function(){for(var a,b,c,d,e=this.detailX+1,f=0;f<this.detailY;f++)for(var g=0;g<this.detailX;g++)a=f*e+g,b=f*e+g+1,c=(f+1)*e+g+1,d=(f+1)*e+g,this.faces.push([a,b,d]),this.faces.push([d,b,c]);return this},d.Geometry.prototype._getFaceNormal=function(a){var b=this.faces[a],c=this.vertices[b[0]],e=this.vertices[b[1]],f=this.vertices[b[2]],g=d.Vector.sub(e,c),h=d.Vector.sub(f,c),i=d.Vector.cross(g,h),j=d.Vector.mag(i),k=j/(d.Vector.mag(g)*d.Vector.mag(h));return i.mult(Math.asin(k)/j)},d.Geometry.prototype.computeNormals=function(){for(var a=[],b=0;b<this.vertices.length;b++){for(var c=new d.Vector,e=0;e<this.faces.length;e++)if(this.faces[e][0]===b||this.faces[e][1]===b||this.faces[e][2]===b){var f=a[e]||(a[e]=this._getFaceNormal(e));c=c.add(f)}c=c.normalize(),this.vertexNormals.push(c)}return this},d.Geometry.prototype.averageNormals=function(){for(var a=0;a<=this.detailY;a++){var b=this.detailX+1,c=d.Vector.add(this.vertexNormals[a*b],this.vertexNormals[a*b+this.detailX]);c=d.Vector.div(c,2),this.vertexNormals[a*b]=c,this.vertexNormals[a*b+this.detailX]=c}return this},d.Geometry.prototype.averagePoleNormals=function(){for(var a=new d.Vector(0,0,0),b=0;b<this.detailX;b++)a.add(this.vertexNormals[b]);for(a=d.Vector.div(a,this.detailX),b=0;b<this.detailX;b++)this.vertexNormals[b]=a;for(a=new d.Vector(0,0,0),b=this.vertices.length-1;b>this.vertices.length-1-this.detailX;b--)a.add(this.vertexNormals[b]);for(a=d.Vector.div(a,this.detailX),b=this.vertices.length-1;b>this.vertices.length-1-this.detailX;b--)this.vertexNormals[b]=a;return this},d.Geometry.prototype._makeTriangleEdges=function(){if(Array.isArray(this.strokeIndices))for(var a=0,b=this.strokeIndices.length;a<b;a++)this.edges.push(this.strokeIndices[a]);else for(var c=0;c<this.faces.length;c++)this.edges.push([this.faces[c][0],this.faces[c][1]]),this.edges.push([this.faces[c][1],this.faces[c][2]]),this.edges.push([this.faces[c][2],this.faces[c][0]]);return this},d.RendererGL.prototype._edgesToVertices=function(a){a.lineVertices=[];for(var b=0;b<a.edges.length;b++){var c=a.vertices[a.edges[b][0]],d=a.vertices[a.edges[b][1]],e=d.copy().sub(c).normalize(),f=c.array(),g=c.array(),h=d.array(),i=d.array(),j=e.array(),k=e.array();j.push(1),k.push(-1),a.lineNormals.push(j,k,j,j,k,k),a.lineVertices.push(f,g,h,h,g,i)}},d.Geometry.prototype.normalize=function(){if(this.vertices.length>0){for(var a=this.vertices[0].copy(),b=this.vertices[0].copy(),c=0;c<this.vertices.length;c++)a.x=Math.max(a.x,this.vertices[c].x),b.x=Math.min(b.x,this.vertices[c].x),a.y=Math.max(a.y,this.vertices[c].y),b.y=Math.min(b.y,this.vertices[c].y),a.z=Math.max(a.z,this.vertices[c].z),b.z=Math.min(b.z,this.vertices[c].z);var e=d.Vector.lerp(a,b,.5),f=d.Vector.sub(a,b),g=Math.max(Math.max(f.x,f.y),f.z),h=200/g;for(c=0;c<this.vertices.length;c++)this.vertices[c].sub(e),this.vertices[c].mult(h)}return this},b.exports=d.Geometry},{"../core/core":21}],69:[function(a,b,c){"use strict";var d=a("../core/core"),e=a("../math/polargeometry"),f=a("../core/constants"),g=Array,h=function(a){return a instanceof Array};"undefined"!=typeof Float32Array&&(g=Float32Array,h=function(a){return a instanceof Array||a instanceof Float32Array}),d.Matrix=function(){for(var a=new Array(arguments.length),b=0;b<a.length;++b)a[b]=arguments[b];return a.length&&a[a.length-1]instanceof d&&(this.p5=a[a.length-1]),"mat3"===a[0]?this.mat3=Array.isArray(a[1])?a[1]:new g([1,0,0,0,1,0,0,0,1]):this.mat4=Array.isArray(a[0])?a[0]:new g([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),this.name="p5.Matrix",this},d.Matrix.prototype.set=function(a){return a instanceof d.Matrix?(this.mat4=a.mat4,this):h(a)?(this.mat4=a,this):(16===arguments.length&&(this.mat4[0]=arguments[0],this.mat4[1]=arguments[1],this.mat4[2]=arguments[2],this.mat4[3]=arguments[3],this.mat4[4]=arguments[4],this.mat4[5]=arguments[5],this.mat4[6]=arguments[6],this.mat4[7]=arguments[7],this.mat4[8]=arguments[8],this.mat4[9]=arguments[9],this.mat4[10]=arguments[10],this.mat4[11]=arguments[11],this.mat4[12]=arguments[12],this.mat4[13]=arguments[13],this.mat4[14]=arguments[14],this.mat4[15]=arguments[15]),this)},d.Matrix.prototype.get=function(){return new d.Matrix(this.mat4,this.p5)},d.Matrix.prototype.copy=function(){var a=new d.Matrix(this.p5);return a.mat4[0]=this.mat4[0],a.mat4[1]=this.mat4[1],a.mat4[2]=this.mat4[2],a.mat4[3]=this.mat4[3],a.mat4[4]=this.mat4[4],a.mat4[5]=this.mat4[5],a.mat4[6]=this.mat4[6],a.mat4[7]=this.mat4[7],a.mat4[8]=this.mat4[8],a.mat4[9]=this.mat4[9],a.mat4[10]=this.mat4[10],a.mat4[11]=this.mat4[11],a.mat4[12]=this.mat4[12],a.mat4[13]=this.mat4[13],a.mat4[14]=this.mat4[14],a.mat4[15]=this.mat4[15],a},d.Matrix.identity=function(a){return new d.Matrix(a)},d.Matrix.prototype.transpose=function(a){var b,c,e,f,g,i;return a instanceof d.Matrix?(b=a.mat4[1],c=a.mat4[2],e=a.mat4[3],f=a.mat4[6],g=a.mat4[7],i=a.mat4[11],this.mat4[0]=a.mat4[0],this.mat4[1]=a.mat4[4],this.mat4[2]=a.mat4[8],this.mat4[3]=a.mat4[12],this.mat4[4]=b,this.mat4[5]=a.mat4[5],this.mat4[6]=a.mat4[9],this.mat4[7]=a.mat4[13],this.mat4[8]=c,this.mat4[9]=f,this.mat4[10]=a.mat4[10],this.mat4[11]=a.mat4[14],this.mat4[12]=e,this.mat4[13]=g,this.mat4[14]=i,this.mat4[15]=a.mat4[15]):h(a)&&(b=a[1],c=a[2],e=a[3],f=a[6],g=a[7],i=a[11],this.mat4[0]=a[0],this.mat4[1]=a[4],this.mat4[2]=a[8],this.mat4[3]=a[12],this.mat4[4]=b,this.mat4[5]=a[5],this.mat4[6]=a[9],this.mat4[7]=a[13],this.mat4[8]=c,this.mat4[9]=f,this.mat4[10]=a[10],this.mat4[11]=a[14],this.mat4[12]=e,this.mat4[13]=g,this.mat4[14]=i,this.mat4[15]=a[15]),this},d.Matrix.prototype.invert=function(a){var b,c,e,f,g,i,j,k,l,m,n,o,p,q,r,s;a instanceof d.Matrix?(b=a.mat4[0],c=a.mat4[1],e=a.mat4[2],f=a.mat4[3],g=a.mat4[4],i=a.mat4[5],j=a.mat4[6],k=a.mat4[7],l=a.mat4[8],m=a.mat4[9],n=a.mat4[10],o=a.mat4[11],p=a.mat4[12],q=a.mat4[13],r=a.mat4[14],s=a.mat4[15]):h(a)&&(b=a[0],c=a[1],e=a[2],f=a[3],g=a[4],i=a[5],j=a[6],k=a[7],l=a[8],m=a[9],n=a[10],o=a[11],p=a[12],q=a[13],r=a[14],s=a[15]);var t=b*i-c*g,u=b*j-e*g,v=b*k-f*g,w=c*j-e*i,x=c*k-f*i,y=e*k-f*j,z=l*q-m*p,A=l*r-n*p,B=l*s-o*p,C=m*r-n*q,D=m*s-o*q,E=n*s-o*r,F=t*E-u*D+v*C+w*B-x*A+y*z;return F?(F=1/F,this.mat4[0]=(i*E-j*D+k*C)*F,this.mat4[1]=(e*D-c*E-f*C)*F,this.mat4[2]=(q*y-r*x+s*w)*F,this.mat4[3]=(n*x-m*y-o*w)*F,this.mat4[4]=(j*B-g*E-k*A)*F,this.mat4[5]=(b*E-e*B+f*A)*F,this.mat4[6]=(r*v-p*y-s*u)*F,this.mat4[7]=(l*y-n*v+o*u)*F,this.mat4[8]=(g*D-i*B+k*z)*F,this.mat4[9]=(c*B-b*D-f*z)*F,this.mat4[10]=(p*x-q*v+s*t)*F,this.mat4[11]=(m*v-l*x-o*t)*F,this.mat4[12]=(i*A-g*C-j*z)*F,this.mat4[13]=(b*C-c*A+e*z)*F,this.mat4[14]=(q*u-p*w-r*t)*F,this.mat4[15]=(l*w-m*u+n*t)*F,this):null},d.Matrix.prototype.invert3x3=function(){var a=this.mat3[0],b=this.mat3[1],c=this.mat3[2],d=this.mat3[3],e=this.mat3[4],f=this.mat3[5],g=this.mat3[6],h=this.mat3[7],i=this.mat3[8],j=i*e-f*h,k=-i*d+f*g,l=h*d-e*g,m=a*j+b*k+c*l;return m?(m=1/m,this.mat3[0]=j*m,this.mat3[1]=(-i*b+c*h)*m,this.mat3[2]=(f*b-c*e)*m,this.mat3[3]=k*m,this.mat3[4]=(i*a-c*g)*m,this.mat3[5]=(-f*a+c*d)*m,this.mat3[6]=l*m,this.mat3[7]=(-h*a+b*g)*m,this.mat3[8]=(e*a-b*d)*m,this):null},d.Matrix.prototype.transpose3x3=function(a){var b=a[1],c=a[2],d=a[5];return this.mat3[1]=a[3],this.mat3[2]=a[6],this.mat3[3]=b,this.mat3[5]=a[7],this.mat3[6]=c,this.mat3[7]=d,this},d.Matrix.prototype.inverseTranspose=function(a){void 0===this.mat3?console.error("sorry, this function only works with mat3"):(this.mat3[0]=a.mat4[0],this.mat3[1]=a.mat4[1],this.mat3[2]=a.mat4[2],this.mat3[3]=a.mat4[4],this.mat3[4]=a.mat4[5],this.mat3[5]=a.mat4[6],this.mat3[6]=a.mat4[8],this.mat3[7]=a.mat4[9],this.mat3[8]=a.mat4[10]);var b=this.invert3x3();if(b)b.transpose3x3(this.mat3);else for(var c=0;c<9;c++)this.mat3[c]=0;return this},d.Matrix.prototype.determinant=function(){var a=this.mat4[0]*this.mat4[5]-this.mat4[1]*this.mat4[4],b=this.mat4[0]*this.mat4[6]-this.mat4[2]*this.mat4[4],c=this.mat4[0]*this.mat4[7]-this.mat4[3]*this.mat4[4],d=this.mat4[1]*this.mat4[6]-this.mat4[2]*this.mat4[5],e=this.mat4[1]*this.mat4[7]-this.mat4[3]*this.mat4[5],f=this.mat4[2]*this.mat4[7]-this.mat4[3]*this.mat4[6],g=this.mat4[8]*this.mat4[13]-this.mat4[9]*this.mat4[12],h=this.mat4[8]*this.mat4[14]-this.mat4[10]*this.mat4[12],i=this.mat4[8]*this.mat4[15]-this.mat4[11]*this.mat4[12],j=this.mat4[9]*this.mat4[14]-this.mat4[10]*this.mat4[13],k=this.mat4[9]*this.mat4[15]-this.mat4[11]*this.mat4[13];return a*(this.mat4[10]*this.mat4[15]-this.mat4[11]*this.mat4[14])-b*k+c*j+d*i-e*h+f*g},d.Matrix.prototype.mult=function(a){var b;if(a===this||a===this.mat4)b=this.copy().mat4;else if(a instanceof d.Matrix)b=a.mat4;else{if(!h(a))return;b=a}var c=this.mat4[0],e=this.mat4[1],f=this.mat4[2],g=this.mat4[3];return this.mat4[0]=c*b[0]+e*b[4]+f*b[8]+g*b[12],this.mat4[1]=c*b[1]+e*b[5]+f*b[9]+g*b[13],this.mat4[2]=c*b[2]+e*b[6]+f*b[10]+g*b[14],this.mat4[3]=c*b[3]+e*b[7]+f*b[11]+g*b[15],c=this.mat4[4],e=this.mat4[5],f=this.mat4[6],g=this.mat4[7],this.mat4[4]=c*b[0]+e*b[4]+f*b[8]+g*b[12],this.mat4[5]=c*b[1]+e*b[5]+f*b[9]+g*b[13],this.mat4[6]=c*b[2]+e*b[6]+f*b[10]+g*b[14],this.mat4[7]=c*b[3]+e*b[7]+f*b[11]+g*b[15],c=this.mat4[8],e=this.mat4[9],f=this.mat4[10],g=this.mat4[11],this.mat4[8]=c*b[0]+e*b[4]+f*b[8]+g*b[12],this.mat4[9]=c*b[1]+e*b[5]+f*b[9]+g*b[13],this.mat4[10]=c*b[2]+e*b[6]+f*b[10]+g*b[14],this.mat4[11]=c*b[3]+e*b[7]+f*b[11]+g*b[15],c=this.mat4[12],e=this.mat4[13],f=this.mat4[14],g=this.mat4[15],this.mat4[12]=c*b[0]+e*b[4]+f*b[8]+g*b[12],this.mat4[13]=c*b[1]+e*b[5]+f*b[9]+g*b[13],this.mat4[14]=c*b[2]+e*b[6]+f*b[10]+g*b[14],this.mat4[15]=c*b[3]+e*b[7]+f*b[11]+g*b[15],this},d.Matrix.prototype.scale=function(a,b,c){return a instanceof d.Vector?(b=a.y,c=a.z,a=a.x):a instanceof Array&&(b=a[1],c=a[2],a=a[0]),this.mat4[0]*=a,this.mat4[1]*=a,this.mat4[2]*=a,this.mat4[3]*=a,this.mat4[4]*=b,this.mat4[5]*=b,this.mat4[6]*=b,this.mat4[7]*=b,this.mat4[8]*=c,this.mat4[9]*=c,this.mat4[10]*=c,this.mat4[11]*=c,this},d.Matrix.prototype.rotate=function(a,b,c,g){var h,i;h=this.p5&&this.p5._angleMode===f.DEGREES?e.degreesToRadians(a):a,b instanceof d.Vector?(c=b.y,g=b.z,b=b.x):b instanceof Array&&(c=b[1],g=b[2],b=b[0]),i=Math.sqrt(b*b+c*c+g*g),b*=1/i,c*=1/i,g*=1/i;var j=this.mat4[0],k=this.mat4[1],l=this.mat4[2],m=this.mat4[3],n=this.mat4[4],o=this.mat4[5],p=this.mat4[6],q=this.mat4[7],r=this.mat4[8],s=this.mat4[9],t=this.mat4[10],u=this.mat4[11],v=Math.sin(h),w=Math.cos(h),x=1-w,y=b*b*x+w,z=c*b*x+g*v,A=g*b*x-c*v,B=b*c*x-g*v,C=c*c*x+w,D=g*c*x+b*v,E=b*g*x+c*v,F=c*g*x-b*v,G=g*g*x+w;return this.mat4[0]=j*y+n*z+r*A,this.mat4[1]=k*y+o*z+s*A,this.mat4[2]=l*y+p*z+t*A,this.mat4[3]=m*y+q*z+u*A,this.mat4[4]=j*B+n*C+r*D,this.mat4[5]=k*B+o*C+s*D,this.mat4[6]=l*B+p*C+t*D,this.mat4[7]=m*B+q*C+u*D,this.mat4[8]=j*E+n*F+r*G,this.mat4[9]=k*E+o*F+s*G,this.mat4[10]=l*E+p*F+t*G,this.mat4[11]=m*E+q*F+u*G,this},d.Matrix.prototype.translate=function(a){var b=a[0],c=a[1],d=a[2]||0;this.mat4[12]+=this.mat4[0]*b+this.mat4[4]*c+this.mat4[8]*d,this.mat4[13]+=this.mat4[1]*b+this.mat4[5]*c+this.mat4[9]*d,this.mat4[14]+=this.mat4[2]*b+this.mat4[6]*c+this.mat4[10]*d,this.mat4[15]+=this.mat4[3]*b+this.mat4[7]*c+this.mat4[11]*d},d.Matrix.prototype.rotateX=function(a){this.rotate(a,1,0,0)},d.Matrix.prototype.rotateY=function(a){this.rotate(a,0,1,0)},d.Matrix.prototype.rotateZ=function(a){this.rotate(a,0,0,1)},d.Matrix.prototype.perspective=function(a,b,c,d){var e=1/Math.tan(a/2),f=1/(c-d);return this.mat4[0]=e/b,this.mat4[1]=0,this.mat4[2]=0,this.mat4[3]=0,this.mat4[4]=0,this.mat4[5]=e,this.mat4[6]=0,this.mat4[7]=0,this.mat4[8]=0,this.mat4[9]=0,this.mat4[10]=(d+c)*f,this.mat4[11]=-1,this.mat4[12]=0,this.mat4[13]=0,this.mat4[14]=2*d*c*f,this.mat4[15]=0,this},d.Matrix.prototype.ortho=function(a,b,c,d,e,f){var g=1/(a-b),h=1/(c-d),i=1/(e-f);return this.mat4[0]=-2*g,this.mat4[1]=0,this.mat4[2]=0,this.mat4[3]=0,this.mat4[4]=0,this.mat4[5]=-2*h,this.mat4[6]=0,this.mat4[7]=0,this.mat4[8]=0,this.mat4[9]=0,this.mat4[10]=2*i,this.mat4[11]=0,this.mat4[12]=(a+b)*g,this.mat4[13]=(d+c)*h,this.mat4[14]=(f+e)*i,this.mat4[15]=1,this},b.exports=d.Matrix},{"../core/constants":20,"../core/core":21,"../math/polargeometry":53}],70:[function(a,b,c){"use strict";var d=a("../core/core"),e=a("../core/constants");d.RendererGL.prototype.beginShape=function(a){return this.immediateMode.shapeMode=void 0!==a?a:e.LINE_STRIP,void 0===this.immediateMode.vertices?(this.immediateMode.vertices=[],this.immediateMode.edges=[],this.immediateMode.lineVertices=[],this.immediateMode.vertexColors=[],this.immediateMode.lineNormals=[],this.immediateMode.uvCoords=[],this.immediateMode.vertexBuffer=this.GL.createBuffer(),this.immediateMode.colorBuffer=this.GL.createBuffer(),this.immediateMode.uvBuffer=this.GL.createBuffer(),this.immediateMode.lineVertexBuffer=this.GL.createBuffer(),this.immediateMode.lineNormalBuffer=this.GL.createBuffer()):(this.immediateMode.vertices.length=0,this.immediateMode.edges.length=0,this.immediateMode.lineVertices.length=0,this.immediateMode.lineNormals.length=0,this.immediateMode.vertexColors.length=0,this.immediateMode.uvCoords.length=0),this.isImmediateDrawing=!0,this},d.RendererGL.prototype.vertex=function(a,b){var c,e,f;c=e=f=0,3===arguments.length?c=arguments[2]:4===arguments.length?(e=arguments[2],f=arguments[3]):5===arguments.length&&(c=arguments[2],e=arguments[3],f=arguments[4]);var g=new d.Vector(a,b,c);this.immediateMode.vertices.push(g);var h=this.curFillColor||[.5,.5,.5,1];return this.immediateMode.vertexColors.push(h[0],h[1],h[2],h[3]),this.immediateMode.uvCoords.push(e,f),this},d.RendererGL.prototype.endShape=function(a,b,c,d,f,g){if(this._useImmediateModeShader(),this._doStroke&&this.drawMode!==e.TEXTURE){for(var h=0;h<this.immediateMode.vertices.length-1;h++)this.immediateMode.edges.push([h,h+1]);a===e.CLOSE&&this.immediateMode.edges.push([this.immediateMode.vertices.length-1,0]),this._edgesToVertices(this.immediateMode),this._drawStrokeImmediateMode()}return this._doFill&&this._drawFillImmediateMode(a,b,c,d,f,g),this.immediateMode.vertices.length=0,this.immediateMode.vertexColors.length=0,this.immediateMode.uvCoords.length=0,this.isImmediateDrawing=!1,this},d.RendererGL.prototype._drawFillImmediateMode=function(a,b,c,d,f,g){var h=this.GL;if(this.curFillShader.bindShader(),this.curFillShader.attributes.aPosition&&(this._bindBuffer(this.immediateMode.vertexBuffer,h.ARRAY_BUFFER,this._vToNArray(this.immediateMode.vertices),Float32Array,h.DYNAMIC_DRAW),this.curFillShader.enableAttrib(this.curFillShader.attributes.aPosition.location,3,h.FLOAT,!1,0,0)),this.drawMode===e.FILL&&this.curFillShader.attributes.aVertexColor&&(this._bindBuffer(this.immediateMode.colorBuffer,h.ARRAY_BUFFER,this.immediateMode.vertexColors,Float32Array,h.DYNAMIC_DRAW),this.curFillShader.enableAttrib(this.curFillShader.attributes.aVertexColor.location,4,h.FLOAT,!1,0,0)),this.drawMode===e.TEXTURE&&this.curFillShader.attributes.aTexCoord&&(this._bindBuffer(this.immediateMode.uvBuffer,h.ARRAY_BUFFER,this.immediateMode.uvCoords,Float32Array,h.DYNAMIC_DRAW),this.curFillShader.enableAttrib(this.curFillShader.attributes.aTexCoord.location,2,h.FLOAT,!1,0,0)),this.drawMode===e.FILL||this.drawMode===e.TEXTURE)switch(this.immediateMode.shapeMode){case e.LINE_STRIP:case e.LINES:case e.TRIANGLES:this.immediateMode.shapeMode=e.TRIANGLE_FAN}else switch(this.immediateMode.shapeMode){case e.LINE_STRIP:case e.LINES:this.immediateMode.shapeMode=e.LINE_LOOP}if(this.immediateMode.shapeMode===e.QUADS||this.immediateMode.shapeMode===e.QUAD_STRIP)throw new Error("sorry, "+this.immediateMode.shapeMode+" not yet implemented in webgl mode.");this._applyColorBlend(this.curFillColor),h.enable(h.BLEND),h.drawArrays(this.immediateMode.shapeMode,0,this.immediateMode.vertices.length),this.curFillShader.unbindShader()},d.RendererGL.prototype._drawStrokeImmediateMode=function(){var a=this.GL;this.curStrokeShader.bindShader(),this.curStrokeShader.attributes.aPosition&&(this._bindBuffer(this.immediateMode.lineVertexBuffer,a.ARRAY_BUFFER,this._flatten(this.immediateMode.lineVertices),Float32Array,a.STATIC_DRAW),this.curStrokeShader.enableAttrib(this.curStrokeShader.attributes.aPosition.location,3,a.FLOAT,!1,0,0)),this.curStrokeShader.attributes.aDirection&&(this._bindBuffer(this.immediateMode.lineNormalBuffer,a.ARRAY_BUFFER,this._flatten(this.immediateMode.lineNormals),Float32Array,a.STATIC_DRAW),this.curStrokeShader.enableAttrib(this.curStrokeShader.attributes.aDirection.location,4,a.FLOAT,!1,0,0)),this._applyColorBlend(this.curStrokeColor),a.drawArrays(a.TRIANGLES,0,this.immediateMode.lineVertices.length),this.curStrokeShader.unbindShader()},b.exports=d.RendererGL},{"../core/constants":20,"../core/core":21}],71:[function(a,b,c){"use strict";var d=a("../core/core"),e=0;d.RendererGL.prototype._initBufferDefaults=function(a){if(this._freeBuffers(a),++e>1e3){var b=Object.keys(this.gHash)[0];delete this.gHash[b],e--}this.gHash[a]={}},d.RendererGL.prototype._freeBuffers=function(a){var b=this.gHash[a];if(b){delete this.gHash[a],e--;var c=this.GL;b.vertexBuffer&&c.deleteBuffer(b.vertexBuffer),b.normalBuffer&&c.deleteBuffer(b.normalBuffer),b.lineNormalBuffer&&c.deleteBuffer(b.lineNormalBuffer),b.uvBuffer&&c.deleteBuffer(b.uvBuffer),b.indexBuffer&&c.deleteBuffer(b.indexBuffer),
b.lineVertexBuffer&&c.deleteBuffer(b.lineVertexBuffer)}},d.RendererGL.prototype.createBuffers=function(a,b){var c=this.GL;this._setDefaultCamera(),this._initBufferDefaults(a);var d=this.gHash[a];d.numberOfItems=3*b.faces.length,d.lineVertexCount=b.lineVertices.length,this._useColorShader(),this.curStrokeShader.attributes.aPosition&&(d.lineVertexBuffer=c.createBuffer(),this._bindBuffer(d.lineVertexBuffer,c.ARRAY_BUFFER,this._flatten(b.lineVertices),Float32Array,c.STATIC_DRAW),this.curStrokeShader.enableAttrib(this.curStrokeShader.attributes.aPosition.location,3,c.FLOAT,!1,0,0)),this.curStrokeShader.attributes.aDirection&&(d.lineNormalBuffer=c.createBuffer(),this._bindBuffer(d.lineNormalBuffer,c.ARRAY_BUFFER,this._flatten(b.lineNormals),Float32Array,c.STATIC_DRAW),this.curStrokeShader.enableAttrib(this.curStrokeShader.attributes.aDirection.location,4,c.FLOAT,!1,0,0)),this.curFillShader.attributes.aPosition&&(d.vertexBuffer=c.createBuffer(),this._bindBuffer(d.vertexBuffer,c.ARRAY_BUFFER,this._vToNArray(b.vertices),Float32Array,c.STATIC_DRAW),this.curFillShader.enableAttrib(this.curFillShader.attributes.aPosition.location,3,c.FLOAT,!1,0,0)),d.indexBuffer=c.createBuffer(),this._bindBuffer(d.indexBuffer,c.ELEMENT_ARRAY_BUFFER,this._flatten(b.faces),Uint16Array,c.STATIC_DRAW),this.curFillShader.attributes.aNormal&&(d.normalBuffer=c.createBuffer(),this._bindBuffer(d.normalBuffer,c.ARRAY_BUFFER,this._vToNArray(b.vertexNormals),Float32Array,c.STATIC_DRAW),this.curFillShader.enableAttrib(this.curFillShader.attributes.aNormal.location,3,c.FLOAT,!1,0,0)),this.curFillShader.attributes.aTexCoord&&(d.uvBuffer=c.createBuffer(),this._bindBuffer(d.uvBuffer,c.ARRAY_BUFFER,this._flatten(b.uvs),Float32Array,c.STATIC_DRAW),this.curFillShader.enableAttrib(this.curFillShader.attributes.aTexCoord.location,2,c.FLOAT,!1,0,0))},d.RendererGL.prototype.drawBuffers=function(a){this._setDefaultCamera();var b=this.GL;this._useColorShader();var c=this.gHash[a];return this._doStroke&&c.lineVertexCount>0&&(this.curStrokeShader.bindShader(),c.lineVertexBuffer&&(this._bindBuffer(c.lineVertexBuffer,b.ARRAY_BUFFER),this.curStrokeShader.enableAttrib(this.curStrokeShader.attributes.aPosition.location,3,b.FLOAT,!1,0,0)),c.lineNormalBuffer&&(this._bindBuffer(c.lineNormalBuffer,b.ARRAY_BUFFER),this.curStrokeShader.enableAttrib(this.curStrokeShader.attributes.aDirection.location,4,b.FLOAT,!1,0,0)),this._applyColorBlend(this.curStrokeColor),this._drawArrays(b.TRIANGLES,a),this.curStrokeShader.unbindShader()),!1!==this._doFill&&(this.curFillShader.bindShader(),c.vertexBuffer&&(this._bindBuffer(c.vertexBuffer,b.ARRAY_BUFFER),this.curFillShader.enableAttrib(this.curFillShader.attributes.aPosition.location,3,b.FLOAT,!1,0,0)),c.indexBuffer&&this._bindBuffer(c.indexBuffer,b.ELEMENT_ARRAY_BUFFER),c.normalBuffer&&(this._bindBuffer(c.normalBuffer,b.ARRAY_BUFFER),this.curFillShader.enableAttrib(this.curFillShader.attributes.aNormal.location,3,b.FLOAT,!1,0,0)),c.uvBuffer&&(this._bindBuffer(c.uvBuffer,b.ARRAY_BUFFER),this.curFillShader.enableAttrib(this.curFillShader.attributes.aTexCoord.location,2,b.FLOAT,!1,0,0)),this._applyColorBlend(this.curFillColor),this._drawElements(b.TRIANGLES,a),this.curFillShader.unbindShader()),this},d.RendererGL.prototype.drawBuffersScaled=function(a,b,c,d){var e=this.uMVMatrix.copy();try{this.uMVMatrix.scale(b,c,d),this.drawBuffers(a)}finally{this.uMVMatrix=e}},d.RendererGL.prototype._drawArrays=function(a,b){return this.GL.drawArrays(a,0,this.gHash[b].lineVertexCount),this},d.RendererGL.prototype._drawElements=function(a,b){this.GL.drawElements(a,this.gHash[b].numberOfItems,this.GL.UNSIGNED_SHORT,0)},b.exports=d.RendererGL},{"../core/core":21}],72:[function(a,b,c){"use strict";var d=a("../core/core"),e=a("../core/constants");a("./p5.Shader"),a("../core/p5.Renderer"),a("./p5.Matrix");var f=[],g=[],h={immediateVert:"attribute vec3 aPosition;\nattribute vec4 aVertexColor;\n\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform float uResolution;\nuniform float uPointSize;\n\nvarying vec4 vColor;\nvoid main(void) {\n  vec4 positionVec4 = vec4(aPosition, 1.0);\n  gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;\n  vColor = aVertexColor;\n  gl_PointSize = uPointSize;\n}\n",vertexColorVert:"attribute vec3 aPosition;\nattribute vec4 aVertexColor;\n\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nvarying vec4 vColor;\n\nvoid main(void) {\n  vec4 positionVec4 = vec4(aPosition, 1.0);\n  gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;\n  vColor = aVertexColor;\n}\n",vertexColorFrag:"precision mediump float;\nvarying vec4 vColor;\nvoid main(void) {\n  gl_FragColor = vColor;\n}",normalVert:"attribute vec3 aPosition;\nattribute vec3 aNormal;\nattribute vec2 aTexCoord;\n\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform mat3 uNormalMatrix;\n\nvarying vec3 vVertexNormal;\nvarying highp vec2 vVertTexCoord;\n\nvoid main(void) {\n  vec4 positionVec4 = vec4(aPosition, 1.0);\n  gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;\n  vVertexNormal = normalize(vec3( uNormalMatrix * aNormal ));\n  vVertTexCoord = aTexCoord;\n}\n",normalFrag:"precision mediump float;\nvarying vec3 vVertexNormal;\nvoid main(void) {\n  gl_FragColor = vec4(vVertexNormal, 1.0);\n}",basicFrag:"precision mediump float;\nvarying vec3 vVertexNormal;\nuniform vec4 uMaterialColor;\nvoid main(void) {\n  gl_FragColor = uMaterialColor;\n}",lightVert:"attribute vec3 aPosition;\nattribute vec3 aNormal;\nattribute vec2 aTexCoord;\n\nuniform mat4 uViewMatrix;\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform mat3 uNormalMatrix;\nuniform int uAmbientLightCount;\nuniform int uDirectionalLightCount;\nuniform int uPointLightCount;\n\nuniform vec3 uAmbientColor[8];\nuniform vec3 uLightingDirection[8];\nuniform vec3 uDirectionalColor[8];\nuniform vec3 uPointLightLocation[8];\nuniform vec3 uPointLightColor[8];\nuniform bool uSpecular;\n\nvarying vec3 vVertexNormal;\nvarying vec2 vVertTexCoord;\nvarying vec3 vLightWeighting;\n\nvoid main(void){\n\n  vec4 positionVec4 = vec4(aPosition, 1.0);\n  gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;\n\n  vec3 vertexNormal = normalize(vec3( uNormalMatrix * aNormal ));\n  vVertexNormal = vertexNormal;\n  vVertTexCoord = aTexCoord;\n\n  vec4 mvPosition = uModelViewMatrix * vec4(aPosition, 1.0);\n  vec3 eyeDirection = normalize(-mvPosition.xyz);\n\n  float shininess = 32.0;\n  float specularFactor = 2.0;\n  float diffuseFactor = 0.3;\n\n  vec3 ambientLightFactor = vec3(0.0);\n\n  for (int i = 0; i < 8; i++) {\n    if (uAmbientLightCount == i) break;\n    ambientLightFactor += uAmbientColor[i];\n  }\n\n\n  vec3 directionalLightFactor = vec3(0.0);\n\n  for (int j = 0; j < 8; j++) {\n    if (uDirectionalLightCount == j) break;\n    vec3 dir = uLightingDirection[j];\n    float directionalLightWeighting = max(dot(vertexNormal, -dir), 0.0);\n    directionalLightFactor += uDirectionalColor[j] * directionalLightWeighting;\n  }\n\n\n  vec3 pointLightFactor = vec3(0.0);\n\n  for (int k = 0; k < 8; k++) {\n    if (uPointLightCount == k) break;\n    vec3 loc = (uViewMatrix * vec4(uPointLightLocation[k], 1.0)).xyz;\n    vec3 lightDirection = normalize(loc - mvPosition.xyz);\n\n    float directionalLightWeighting = max(dot(vertexNormal, lightDirection), 0.0);\n\n    float specularLightWeighting = 0.0;\n    if (uSpecular ){\n      vec3 reflectionDirection = reflect(-lightDirection, vertexNormal);\n      specularLightWeighting = pow(max(dot(reflectionDirection, eyeDirection), 0.0), shininess);\n    }\n\n    pointLightFactor += uPointLightColor[k] * (specularFactor * specularLightWeighting\n      + directionalLightWeighting * diffuseFactor);\n  }\n\n  vLightWeighting =  ambientLightFactor + directionalLightFactor + pointLightFactor;\n}\n",lightTextureFrag:"precision mediump float;\n\nuniform vec4 uMaterialColor;\nuniform sampler2D uSampler;\nuniform bool isTexture;\nuniform bool uUseLighting;\n\nvarying vec3 vLightWeighting;\nvarying highp vec2 vVertTexCoord;\n\nvoid main(void) {\n  gl_FragColor = isTexture ? texture2D(uSampler, vVertTexCoord) : uMaterialColor;\n  if (uUseLighting)\n    gl_FragColor.rgb *= vLightWeighting;\n}",phongVert:"precision mediump float;\n\nattribute vec3 aPosition;\nattribute vec3 aNormal;\nattribute vec2 aTexCoord;\n\nuniform vec3 uAmbientColor[8];\n\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform mat3 uNormalMatrix;\nuniform int uAmbientLightCount;\n\nvarying vec3 vNormal;\nvarying vec2 vTexCoord;\nvarying vec3 vViewPosition;\nvarying vec3 vAmbientColor;\n\nvoid main(void){\n\n  vec4 viewModelPosition = uModelViewMatrix * vec4(aPosition, 1.0);\n\n  // Pass varyings to fragment shader\n  vViewPosition = viewModelPosition.xyz;\n  gl_Position = uProjectionMatrix * viewModelPosition;  \n\n  vNormal = normalize(uNormalMatrix * normalize(aNormal));\n  vTexCoord = aTexCoord;\n\n  vAmbientColor = vec3(0.0);\n  for (int i = 0; i < 8; i++) {\n    if (uAmbientLightCount == i) break;\n    vAmbientColor += uAmbientColor[i];\n  }\n}\n",phongFrag:"precision mediump float;\n\n//uniform mat4 uModelViewMatrix;\nuniform mat4 uViewMatrix;\n\nuniform vec4 uMaterialColor;\nuniform sampler2D uSampler;\nuniform bool isTexture;\nuniform bool uUseLighting;\n\nuniform vec3 uLightingDirection[8];\nuniform vec3 uDirectionalColor[8];\nuniform vec3 uPointLightLocation[8];\nuniform vec3 uPointLightColor[8];\nuniform bool uSpecular;\n\nuniform int uDirectionalLightCount;\nuniform int uPointLightCount;\n\nvarying vec3 vNormal;\nvarying vec2 vTexCoord;\nvarying vec3 vViewPosition;\nvarying vec3 vAmbientColor;\n\nvec3 V;\nvec3 N;\n\nconst float shininess = 32.0;\nconst float specularFactor = 2.0;\nconst float diffuseFactor = 0.73;\n\nstruct LightResult {\n\tfloat specular;\n\tfloat diffuse;\n};\n\nfloat phongSpecular(\n  vec3 lightDirection,\n  vec3 viewDirection,\n  vec3 surfaceNormal,\n  float shininess) {\n\n  vec3 R = normalize(reflect(-lightDirection, surfaceNormal));  \n  return pow(max(0.0, dot(R, viewDirection)), shininess);\n}\n\nfloat lambertDiffuse(\n  vec3 lightDirection,\n  vec3 surfaceNormal) {\n  return max(0.0, dot(-lightDirection, surfaceNormal));\n}\n\nLightResult light(vec3 lightVector) {\n\n  vec3 L = normalize(lightVector);\n\n  //compute our diffuse & specular terms\n  LightResult lr;\n  if (uSpecular)\n    lr.specular = phongSpecular(L, V, N, shininess);\n  lr.diffuse = lambertDiffuse(L, N);\n  return lr;\n}\n\nvoid main(void) {\n\n  V = normalize(vViewPosition);\n  N = vNormal;\n\n  vec3 diffuse = vec3(0.0);\n  float specular = 0.0;\n\n  for (int j = 0; j < 8; j++) {\n    if (uDirectionalLightCount == j) break;\n\n    LightResult result = light(uLightingDirection[j]);\n    diffuse += result.diffuse * uDirectionalColor[j];\n    specular += result.specular;\n  }\n\n  for (int k = 0; k < 8; k++) {\n    if (uPointLightCount == k) break;\n\n    vec3 lightPosition = (uViewMatrix * vec4(uPointLightLocation[k], 1.0)).xyz;\n    vec3 lightVector = vViewPosition - lightPosition;\n\t\n    //calculate attenuation\n    float lightDistance = length(lightVector);\n    float falloff = 500.0 / (lightDistance + 500.0);\n\n    LightResult result = light(lightVector);\n    diffuse += result.diffuse * falloff * uPointLightColor[k];\n    specular += result.specular * falloff;\n  }\n\n  gl_FragColor = isTexture ? texture2D(uSampler, vTexCoord) : uMaterialColor;\n  gl_FragColor.rgb = gl_FragColor.rgb * (diffuse * diffuseFactor + vAmbientColor) + specular * specularFactor;\n}",lineVert:"/*\n  Part of the Processing project - http://processing.org\n  Copyright (c) 2012-15 The Processing Foundation\n  Copyright (c) 2004-12 Ben Fry and Casey Reas\n  Copyright (c) 2001-04 Massachusetts Institute of Technology\n  This library is free software; you can redistribute it and/or\n  modify it under the terms of the GNU Lesser General Public\n  License as published by the Free Software Foundation, version 2.1.\n  This library is distributed in the hope that it will be useful,\n  but WITHOUT ANY WARRANTY; without even the implied warranty of\n  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU\n  Lesser General Public License for more details.\n  You should have received a copy of the GNU Lesser General\n  Public License along with this library; if not, write to the\n  Free Software Foundation, Inc., 59 Temple Place, Suite 330,\n  Boston, MA  02111-1307  USA\n*/\n\n#define PROCESSING_LINE_SHADER\n\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform float uStrokeWeight;\n\nuniform vec4 uViewport;\nvec3 scale = vec3(1.0);\n\nattribute vec4 aPosition;\nattribute vec4 aDirection;\n  \nvoid main() {\n  vec4 posp = uModelViewMatrix * aPosition;\n  vec4 posq = uModelViewMatrix * (aPosition + vec4(aDirection.xyz, 0));\n\n  // Moving vertices slightly toward the camera\n  // to avoid depth-fighting with the fill triangles.\n  // Discussed here:\n  // http://www.opengl.org/discussion_boards/ubbthreads.php?ubb=showflat&Number=252848  \n  posp.xyz = posp.xyz * scale;\n  posq.xyz = posq.xyz * scale;\n\n  vec4 p = uProjectionMatrix * posp;\n  vec4 q = uProjectionMatrix * posq;\n\n  // formula to convert from clip space (range -1..1) to screen space (range 0..[width or height])\n  // screen_p = (p.xy/p.w + <1,1>) * 0.5 * uViewport.zw\n\n  // prevent division by W by transforming the tangent formula (div by 0 causes\n  // the line to disappear, see https://github.com/processing/processing/issues/5183)\n  // t = screen_q - screen_p\n  //\n  // tangent is normalized and we don't care which aDirection it points to (+-)\n  // t = +- normalize( screen_q - screen_p )\n  // t = +- normalize( (q.xy/q.w+<1,1>)*0.5*uViewport.zw - (p.xy/p.w+<1,1>)*0.5*uViewport.zw )\n  //\n  // extract common factor, <1,1> - <1,1> cancels out\n  // t = +- normalize( (q.xy/q.w - p.xy/p.w) * 0.5 * uViewport.zw )\n  //\n  // convert to common divisor\n  // t = +- normalize( ((q.xy*p.w - p.xy*q.w) / (p.w*q.w)) * 0.5 * uViewport.zw )\n  //\n  // remove the common scalar divisor/factor, not needed due to normalize and +-\n  // (keep uViewport - can't remove because it has different components for x and y\n  //  and corrects for aspect ratio, see https://github.com/processing/processing/issues/5181)\n  // t = +- normalize( (q.xy*p.w - p.xy*q.w) * uViewport.zw )\n\n  vec2 tangent = normalize((q.xy*p.w - p.xy*q.w) * uViewport.zw);\n\n  // flip tangent to normal (it's already normalized)\n  vec2 normal = vec2(-tangent.y, tangent.x);\n\n  float thickness = aDirection.w * uStrokeWeight;\n  vec2 offset = normal * thickness / 2.0;\n\n  // Perspective ---\n  // convert from world to clip by multiplying with projection scaling factor\n  // to get the right thickness (see https://github.com/processing/processing/issues/5182)\n  // invert Y, projections in Processing invert Y\n  vec2 perspScale = (uProjectionMatrix * vec4(1, -1, 0, 0)).xy;\n\n  // No Perspective ---\n  // multiply by W (to cancel out division by W later in the pipeline) and\n  // convert from screen to clip (derived from clip to screen above)\n  vec2 noPerspScale = p.w / (0.5 * uViewport.zw);\n\n  //gl_Position.xy = p.xy + offset.xy * mix(noPerspScale, perspScale, float(perspective > 0));\n  gl_Position.xy = p.xy + offset.xy * perspScale;\n  gl_Position.zw = p.zw;\n}\n",lineFrag:"precision mediump float;\nprecision mediump int;\n\nuniform vec4 uMaterialColor;\n\nvoid main() {\n  gl_FragColor = uMaterialColor;\n}"};d.RendererGL=function(a,b,c,e){return d.Renderer.call(this,a,b,c),this.attributes={},e=e||{},this.attributes.alpha=void 0===e.alpha||e.alpha,this.attributes.depth=void 0===e.depth||e.depth,this.attributes.stencil=void 0===e.stencil||e.stencil,this.attributes.antialias=void 0!==e.antialias&&e.antialias,this.attributes.premultipliedAlpha=void 0!==e.premultipliedAlpha&&e.premultipliedAlpha,this.attributes.preserveDrawingBuffer=void 0===e.preserveDrawingBuffer||e.preserveDrawingBuffer,this.attributes.perPixelLighting=void 0!==e.perPixelLighting&&e.perPixelLighting,this._initContext(),this.isP3D=!0,this.GL=this.drawingContext,this.ambientLightColors=[],this.directionalLightDirections=[],this.directionalLightColors=[],this.pointLightPositions=[],this.pointLightColors=[],this.uMVMatrix=new d.Matrix,this.uPMatrix=new d.Matrix,this.uNMatrix=new d.Matrix("mat3"),this._curCamera=null,this._computeCameraDefaultSettings(),this.cameraFOV=this.defaultCameraFOV,this.cameraAspect=this.defaultAspect,this.cameraX=this.defaultCameraX,this.cameraY=this.defaultCameraY,this.cameraZ=this.defaultCameraZ,this.cameraNear=this.defaultCameraNear,this.cameraFar=this.defaultCameraFar,this.cameraMatrix=new d.Matrix(b),this.camera(),this.gHash={},this._defaultLightShader=void 0,this._defaultImmediateModeShader=void 0,this._defaultNormalShader=void 0,this._defaultColorShader=void 0,this.curFillShader=void 0,this.curStrokeShader=void 0,this._useColorShader(),this.setStrokeShader(this._getLineShader()),this.isImmediateDrawing=!1,this.immediateMode={},this.fill(255,255,255,255),this.pointSize=5,this.strokeWeight(2),this.stroke(0,0,0),this.textures=[],this.name="p5.RendererGL",this},d.RendererGL.prototype=Object.create(d.Renderer.prototype),d.RendererGL.prototype._initContext=function(){try{if(this.drawingContext=this.canvas.getContext("webgl",this.attributes)||this.canvas.getContext("experimental-webgl",this.attributes),null===this.drawingContext)throw new Error("Error creating webgl context");console.log("p5.RendererGL: enabled webgl context");var a=this.drawingContext;a.enable(a.DEPTH_TEST),a.depthFunc(a.LEQUAL),a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),this._viewport=this.drawingContext.getParameter(this.drawingContext.VIEWPORT)}catch(a){throw new Error(a)}},d.RendererGL.prototype._resetContext=function(a,b,c){var e=this.width,f=this.height,g=this.canvas.id,h=this.canvas;h&&h.parentNode.removeChild(h),h=document.createElement("canvas"),h.id=g,this._pInst._userNode?this._pInst._userNode.appendChild(h):document.body.appendChild(h),this._pInst.canvas=h;var i=new d.RendererGL(this._pInst.canvas,this._pInst,!0,a);this._pInst._setProperty("_renderer",i),i.resize(e,f),i._applyDefaults(),this._pInst._elements.push(i),"function"==typeof c&&setTimeout(function(){c.apply(window._renderer,b)},0)},d.prototype.setAttributes=function(a,b){var c;void 0!==b?(c={},c[a]=b):a instanceof Object&&(c=a),this._renderer._resetContext(c)},d.RendererGL.prototype._computeCameraDefaultSettings=function(){this.defaultCameraFOV=60/180*Math.PI,this.defaultCameraAspect=this.width/this.height,this.defaultCameraX=0,this.defaultCameraY=0,this.defaultCameraZ=this.height/2/Math.tan(this.defaultCameraFOV/2),this.defaultCameraNear=.1*this.defaultCameraZ,this.defaultCameraFar=10*this.defaultCameraZ},d.RendererGL.prototype._setDefaultCamera=function(){null===this._curCamera&&(this._computeCameraDefaultSettings(),this.cameraFOV=this.defaultCameraFOV,this.cameraAspect=this.defaultAspect,this.cameraX=this.defaultCameraX,this.cameraY=this.defaultCameraY,this.cameraZ=this.defaultCameraZ,this.cameraNear=this.defaultCameraNear,this.cameraFar=this.defaultCameraFar,this.perspective(),this.camera(),this._curCamera="default")},d.RendererGL.prototype._update=function(){this.uMVMatrix.set(this.cameraMatrix.mat4[0],this.cameraMatrix.mat4[1],this.cameraMatrix.mat4[2],this.cameraMatrix.mat4[3],this.cameraMatrix.mat4[4],this.cameraMatrix.mat4[5],this.cameraMatrix.mat4[6],this.cameraMatrix.mat4[7],this.cameraMatrix.mat4[8],this.cameraMatrix.mat4[9],this.cameraMatrix.mat4[10],this.cameraMatrix.mat4[11],this.cameraMatrix.mat4[12],this.cameraMatrix.mat4[13],this.cameraMatrix.mat4[14],this.cameraMatrix.mat4[15]),this.ambientLightColors.length=0,this.directionalLightDirections.length=0,this.directionalLightColors.length=0,this.pointLightPositions.length=0,this.pointLightColors.length=0},d.RendererGL.prototype.background=function(){var a=this._pInst.color.apply(this._pInst,arguments),b=a.levels[0]/255,c=a.levels[1]/255,d=a.levels[2]/255,e=a.levels[3]/255;this.GL.clearColor(b,c,d,e),this.GL.depthMask(!0),this.GL.clear(this.GL.COLOR_BUFFER_BIT|this.GL.DEPTH_BUFFER_BIT)},d.RendererGL.prototype.fill=function(a,b,c,f){var g=d.prototype.color.apply(this._pInst,arguments);this.curFillColor=g._array,this.isImmediateDrawing?this.setFillShader(this._getImmediateModeShader()):this.setFillShader(this._getColorShader()),this.drawMode=e.FILL,this.curFillShader.setUniform("uMaterialColor",this.curFillColor)},d.RendererGL.prototype.stroke=function(a,b,c,e){arguments[3]=255;var f=d.prototype.color.apply(this._pInst,arguments);this.curStrokeColor=f._array,this.curStrokeShader.setUniform("uMaterialColor",this.curStrokeColor)},d.RendererGL.prototype.strokeWeight=function(a){this.curStrokeWeight!==a&&(this.pointSize=a,this.curStrokeWeight=a,this.curStrokeShader.setUniform("uStrokeWeight",a))},d.RendererGL.prototype.get=function(a,b,c,e){return d.Renderer2D.prototype.get.apply(this,[a,b,c,e])},d.RendererGL.prototype.loadPixels=function(){if(!0!==this.attributes.preserveDrawingBuffer)return void console.log("loadPixels only works in WebGL when preserveDrawingBuffer is true.");var a=this._pInst._pixelDensity,b=this.width,c=this.height;b*=a,c*=a,void 0===this.pixels&&(this.pixels=new Uint8Array(this.GL.drawingBufferWidth*this.GL.drawingBufferHeight*4)),this.GL.readPixels(0,0,b,c,this.GL.RGBA,this.GL.UNSIGNED_BYTE,this.pixels),this._pInst._setProperty("pixels",this.pixels)},d.RendererGL.prototype.geometryInHash=function(a){return void 0!==this.gHash[a]},d.RendererGL.prototype.resize=function(a,b){d.Renderer.prototype.resize.call(this,a,b),this.GL.viewport(0,0,this.GL.drawingBufferWidth,this.GL.drawingBufferHeight),this._viewport=this.GL.getParameter(this.GL.VIEWPORT),null!==this._curCamera&&"default"!==this._curCamera||(this._curCamera=null,this._setDefaultCamera()),void 0!==this.pixels&&(this.pixels=new Uint8Array(this.GL.drawingBufferWidth*this.GL.drawingBufferHeight*4))},d.RendererGL.prototype.clear=function(){this.GL.clearColor(arguments[0],arguments[1],arguments[2],arguments[3]),this.GL.clear(this.GL.COLOR_BUFFER_BIT|this.GL.DEPTH_BUFFER_BIT)},d.RendererGL.prototype.translate=function(a,b,c){return a instanceof d.Vector&&(c=a.z,b=a.y,a=a.x),this.uMVMatrix.translate([a,b,c]),this},d.RendererGL.prototype.scale=function(a,b,c){return this.uMVMatrix.scale(a,b,c),this},d.RendererGL.prototype.rotate=function(a,b){return void 0===b?this.rotateZ(a):(d.Matrix.prototype.rotate.apply(this.uMVMatrix,arguments),this)},d.RendererGL.prototype.rotateX=function(a){return this.rotate(a,1,0,0),this},d.RendererGL.prototype.rotateY=function(a){return this.rotate(a,0,1,0),this},d.RendererGL.prototype.rotateZ=function(a){return this.rotate(a,0,0,1),this},d.RendererGL.prototype.push=function(){f.push(this.uMVMatrix.copy()),g.push(this.cameraMatrix.copy())},d.RendererGL.prototype.pop=function(){if(0===f.length)throw new Error("Invalid popMatrix!");if(this.uMVMatrix=f.pop(),0===g.length)throw new Error("Invalid popMatrix!");this.cameraMatrix=g.pop()},d.RendererGL.prototype.resetMatrix=function(){return this.uMVMatrix=d.Matrix.identity(this._pInst),this},d.RendererGL.prototype._applyTextProperties=function(){console.error("text commands not yet implemented in webgl")},d.RendererGL.prototype.setFillShader=function(a){return this.curFillShader!==a&&(this.curFillShader=a,this.curFillShader.init()),this.curFillShader},d.RendererGL.prototype.setStrokeShader=function(a){return this.curStrokeShader!==a&&(this.curStrokeShader=a,this.curStrokeShader.init()),this.curStrokeShader},d.RendererGL.prototype._useLightShader=function(){return this.curFillShader&&this.curFillShader.isLightShader()||this.setFillShader(this._getLightShader()),this.curFillShader},d.RendererGL.prototype._useColorShader=function(){return this.curFillShader&&this.curFillShader!==this._defaultImmediateModeShader||this.setFillShader(this._getColorShader()),this.curFillShader},d.RendererGL.prototype._useImmediateModeShader=function(){return this.curFillShader&&this.curFillShader!==this._defaultColorShader||this.setFillShader(this._getImmediateModeShader()),this.curFillShader},d.RendererGL.prototype._getLightShader=function(){return this._defaultLightShader||(this.attributes.perPixelLighting?this._defaultLightShader=new d.Shader(this,h.phongVert,h.phongFrag):this._defaultLightShader=new d.Shader(this,h.lightVert,h.lightTextureFrag)),this._defaultLightShader},d.RendererGL.prototype._getImmediateModeShader=function(){return this._defaultImmediateModeShader||(this._defaultImmediateModeShader=new d.Shader(this,h.immediateVert,h.vertexColorFrag)),this._defaultImmediateModeShader},d.RendererGL.prototype._getNormalShader=function(){return this._defaultNormalShader||(this._defaultNormalShader=new d.Shader(this,h.normalVert,h.normalFrag)),this._defaultNormalShader},d.RendererGL.prototype._getColorShader=function(){return this._defaultColorShader||(this._defaultColorShader=new d.Shader(this,h.normalVert,h.basicFrag)),this._defaultColorShader},d.RendererGL.prototype._getLineShader=function(){return this._defaultLineShader||(this._defaultLineShader=new d.Shader(this,h.lineVert,h.lineFrag)),this._defaultLineShader},d.RendererGL.prototype._getEmptyTexture=function(){if(!this._emptyTexture){var a=new d.Image(1,1);a.set(0,0,255),this._emptyTexture=new d.Texture(this,a)}return this._emptyTexture},d.RendererGL.prototype.getTexture=function(a){var b=function(b){return b.src===a},c=this.textures.find(b);return c||(c=new d.Texture(this,a),this.textures.push(c)),c},d.RendererGL.prototype._bindBuffer=function(a,b,c,d,e){if(this.GL.bindBuffer(b,a),void 0!==c){var f=new d(c);this.GL.bufferData(b,f,e)}},d.RendererGL.prototype._flatten=function(a){if(0===a.length)return[];if(a.length>2e4){var b,c=Object.prototype.toString,d="[object Array]",e=[],f=a.slice();b=f.pop();do{c.call(b)===d?f.push.apply(f,b):e.push(b)}while(f.length&&void 0!==(b=f.pop()));return e.reverse(),e}return[].concat.apply([],a)},d.RendererGL.prototype._vToNArray=function(a){return this._flatten(a.map(function(a){return[a.x,a.y,a.z]}))},b.exports=d.RendererGL},{"../core/constants":20,"../core/core":21,"../core/p5.Renderer":28,"./p5.Matrix":69,"./p5.Shader":73}],73:[function(a,b,c){"use strict";var d=a("../core/core");d.Shader=function(a,b,c){return this._renderer=a,this._vertSrc=b,this._fragSrc=c,this._vertShader=-1,this._fragShader=-1,this._glProgram=0,this._loadedAttributes=!1,this.attributes={},this._loadedUniforms=!1,this.uniforms={},this._bound=!1,this.samplers=[],this},d.Shader.prototype.init=function(){if(0===this._glProgram){var a=this._renderer.GL;if(this._vertShader=a.createShader(a.VERTEX_SHADER),a.shaderSource(this._vertShader,this._vertSrc),a.compileShader(this._vertShader),!a.getShaderParameter(this._vertShader,a.COMPILE_STATUS))return console.error("Yikes! An error occurred compiling the vertex shader:"+a.getShaderInfoLog(this._vertShader)),null;if(this._fragShader=a.createShader(a.FRAGMENT_SHADER),a.shaderSource(this._fragShader,this._fragSrc),a.compileShader(this._fragShader),!a.getShaderParameter(this._fragShader,a.COMPILE_STATUS))return console.error("Darn! An error occurred compiling the fragment shader:"+a.getShaderInfoLog(this._fragShader)),null;this._glProgram=a.createProgram(),a.attachShader(this._glProgram,this._vertShader),a.attachShader(this._glProgram,this._fragShader),a.linkProgram(this._glProgram),a.getProgramParameter(this._glProgram,a.LINK_STATUS)||console.error("Snap! Error linking shader program: "+a.getProgramInfoLog(this._glProgram)),this._loadAttributes(),this._loadUniforms()}return this},d.Shader.prototype._loadAttributes=function(){if(!this._loadedAttributes){this.attributes={};for(var a=this._renderer.GL,b=a.getProgramParameter(this._glProgram,a.ACTIVE_ATTRIBUTES),c=0;c<b;++c){var d=a.getActiveAttrib(this._glProgram,c),e=d.name,f=a.getAttribLocation(this._glProgram,e),g={};g.name=e,g.location=f,g.type=d.type,g.size=d.size,this.attributes[e]=g}this._loadedAttributes=!0}},d.Shader.prototype._loadUniforms=function(){if(!this._loadedUniforms){for(var a=this._renderer.GL,b=a.getProgramParameter(this._glProgram,a.ACTIVE_UNIFORMS),c=0,d=0;d<b;++d){var e=a.getActiveUniform(this._glProgram,d),f={};f.location=a.getUniformLocation(this._glProgram,e.name),f.size=e.size;var g=e.name;e.size>1&&(g=g.substring(0,g.indexOf("[0]"))),f.name=g,f.type=e.type,f.type===a.SAMPLER_2D&&(f.samplerIndex=c,c++,this.samplers.push(f)),this.uniforms[g]=f}this._loadedUniforms=!0}},d.Shader.prototype.compile=function(){},d.Shader.prototype.bindShader=function(){this.init(),this._bound||(this.useProgram(),this._bound=!0,this.bindTextures(),this._loadAttributes(),this._loadUniforms(),this._renderer._setDefaultCamera(),this._setMatrixUniforms(),this===this._renderer.curStrokeShader&&this._setViewportUniform())},d.Shader.prototype.unbindShader=function(){return this._bound&&(this.unbindTextures(),this._bound=!1),this},d.Shader.prototype.bindTextures=function(){for(var a=this._renderer.GL,b=0;b<this.samplers.length;b++){var c=this.samplers[b],d=c.texture;void 0===d&&(d=this._renderer._getEmptyTexture()),a.activeTexture(a.TEXTURE0+c.samplerIndex),d.bindTexture(),d.update(),a.uniform1i(c.location,c.samplerIndex)}},d.Shader.prototype.unbindTextures=function(){},d.Shader.prototype._setMatrixUniforms=function(){this.setUniform("uProjectionMatrix",this._renderer.uPMatrix.mat4),this.setUniform("uModelViewMatrix",this._renderer.uMVMatrix.mat4),this.setUniform("uViewMatrix",this._renderer.cameraMatrix.mat4),this===this._renderer.curFillShader&&(this._renderer.uNMatrix.inverseTranspose(this._renderer.uMVMatrix),this.setUniform("uNormalMatrix",this._renderer.uNMatrix.mat3))},d.Shader.prototype._setViewportUniform=function(){this.setUniform("uViewport",this._renderer._viewport)},d.Shader.prototype.useProgram=function(){return this._renderer.GL.useProgram(this._glProgram),this},d.Shader.prototype.setUniform=function(a,b){var c=this.uniforms[a];if(c){var d=c.location,e=this._renderer.GL;switch(this.useProgram(),c.type){case e.BOOL:!0===b?e.uniform1i(d,1):e.uniform1i(d,0);break;case e.INT:c.size>1?e.uniform1iv(d,b):e.uniform1i(d,b);break;case e.FLOAT:c.size>1?e.uniform1fv(d,b):e.uniform1f(d,b);break;case e.FLOAT_MAT3:e.uniformMatrix3fv(d,!1,b);break;case e.FLOAT_MAT4:e.uniformMatrix4fv(d,!1,b);break;case e.FLOAT_VEC2:c.size>1?e.uniform2fv(d,b):e.uniform2f(d,b[0],b[1]);break;case e.FLOAT_VEC3:c.size>1?e.uniform3fv(d,b):e.uniform3f(d,b[0],b[1],b[2]);break;case e.FLOAT_VEC4:c.size>1?e.uniform4fv(d,b):e.uniform4f(d,b[0],b[1],b[2],b[3]);break;case e.SAMPLER_2D:e.activeTexture(e.TEXTURE0+c.samplerIndex),c.texture=this._renderer.getTexture(b),e.uniform1i(c.location,c.samplerIndex)}return this}},d.Shader.prototype.isLightShader=function(){return void 0!==this.uniforms.uUseLighting||void 0!==this.uniforms.uAmbientLightCount||void 0!==this.uniforms.uDirectionalLightCount||void 0!==this.uniforms.uPointLightCount||void 0!==this.uniforms.uAmbientColor||void 0!==this.uniforms.uDirectionalColor||void 0!==this.uniforms.uPointLightLocation||void 0!==this.uniforms.uPointLightColor||void 0!==this.uniforms.uLightingDirection||void 0!==this.uniforms.uSpecular},d.Shader.prototype.isTextureShader=function(){return this.samplerIndex>0},d.Shader.prototype.isColorShader=function(){return void 0!==this.attributes.aVertexColor||void 0!==this.uniforms.uMaterialColor},d.Shader.prototype.isTexLightShader=function(){return this.isLightShader()&&this.isTextureShader()},d.Shader.prototype.isStrokeShader=function(){return void 0!==this.uniforms.uStrokeWeight},d.Shader.prototype.enableAttrib=function(a,b,c,d,e,f){var g=this._renderer.GL;return-1!==a&&(g.enableVertexAttribArray(a),g.vertexAttribPointer(a,b,c,d,e,f)),this},b.exports=d.Shader},{"../core/core":21}],74:[function(a,b,c){"use strict";var d=a("../core/core");d.Texture=function(a,b){this._renderer=a;var c=this._renderer.GL;this.src=b,this.glTex=void 0,
this.glTarget=c.TEXTURE_2D,this.glFormat=c.RGBA,this.mipmaps=!1,this.glMinFilter=c.LINEAR,this.glMagFilter=c.LINEAR,this.glWrapS=c.CLAMP_TO_EDGE,this.glWrapT=c.CLAMP_TO_EDGE,this.isSrcMediaElement=void 0!==d.MediaElement&&b instanceof d.MediaElement,this._videoPrevUpdateTime=0,this.isSrcHTMLElement=void 0!==d.Element&&b instanceof d.Element&&!(b instanceof d.Graphics),this.isSrcP5Image=b instanceof d.Image,this.isSrcP5Graphics=b instanceof d.Graphics;var e=this._getTextureDataFromSource();return this.width=e.width,this.height=e.height,this.init(e),this},d.Texture.prototype._getTextureDataFromSource=function(){var a;return this.isSrcP5Image?a=this.src.canvas:(this.isSrcMediaElement||this.isSrcP5Graphics||this.isSrcHTMLElement)&&(a=this.src.elt),a},d.Texture.prototype.init=function(a){var b=this._renderer.GL;if(this.glTex=b.createTexture(),this.bindTexture(),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,this.glMagFilter),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,this.glMinFilter),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,this.glWrapS),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,this.glWrapT),0===this.width||0===this.height||this.isSrcMediaElement&&!this.src.loadedmetadata){var c=new Uint8Array([1,1,1,1]);b.texImage2D(this.glTarget,0,b.RGBA,1,1,0,this.glFormat,b.UNSIGNED_BYTE,c)}else b.texImage2D(this.glTarget,0,this.glFormat,this.glFormat,b.UNSIGNED_BYTE,a)},d.Texture.prototype.update=function(){var a=this.src;if(0!==a.width&&0!==a.height){var b=this._getTextureDataFromSource(),c=this._renderer.GL;if(b.width!==this.width||b.height!==this.height)this.width=b.width,this.height=b.height,this.bindTexture(),c.texImage2D(this.glTarget,0,this.glFormat,this.glFormat,c.UNSIGNED_BYTE,b),this.isSrcP5Image?a.setModified(!1):(this.isSrcMediaElement||this.isSrcHTMLElement)&&a.setModified(!0);else if(this.isSrcP5Image)a.isModified()&&(this.bindTexture(),c.texImage2D(this.glTarget,0,this.glFormat,this.glFormat,c.UNSIGNED_BYTE,b),a.setModified(!1));else if(this.isSrcMediaElement){var d=!1;a.isModified()?(d=!0,a.setModified(!1)):a.loadedmetadata&&this._videoPrevUpdateTime!==a.time()&&(this._videoPrevUpdateTime=a.time(),d=!0),d&&(this.bindTexture(),c.texImage2D(this.glTarget,0,this.glFormat,this.glFormat,c.UNSIGNED_BYTE,b))}else c.texImage2D(this.glTarget,0,this.glFormat,this.glFormat,c.UNSIGNED_BYTE,b)}},d.Texture.prototype.bindTexture=function(){return this._renderer.GL.bindTexture(this.glTarget,this.glTex),this},d.Texture.prototype.unbindTexture=function(){this._renderer.GL.bindTexture(this.glTarget,null)},b.exports=d.Texture},{"../core/core":21}],75:[function(a,b,c){"use strict";var d=a("../core/core");a("./p5.Geometry"),d.prototype.plane=function(a,b,c,e){void 0===a&&(a=50),void 0===b&&(b=a),void 0===c&&(c=1),void 0===e&&(e=1);var f="plane|"+c+"|"+e;if(!this._renderer.geometryInHash(f)){var g=function(){for(var a,b,c,e=0;e<=this.detailY;e++){b=e/this.detailY;for(var f=0;f<=this.detailX;f++)a=f/this.detailX,c=new d.Vector(a-.5,b-.5,0),this.vertices.push(c),this.uvs.push([a,b])}},h=new d.Geometry(c,e,g);h.computeFaces().computeNormals(),c<=1&&e<=1?(h._makeTriangleEdges(),this._renderer._edgesToVertices(h)):console.log("Cannot draw stroke on plane objects with more than 1 detailX or 1 detailY"),this._renderer.createBuffers(f,h)}this._renderer.drawBuffersScaled(f,a,b,0)},d.prototype.box=function(a,b,c,e,f){void 0===a&&(a=50),void 0===b&&(b=a),void 0===c&&(c=b),void 0===e&&(e=4),void 0===f&&(f=4);var g="box|"+e+"|"+f;if(!this._renderer.geometryInHash(g)){var h=function(){var a=[[0,4,2,6],[1,3,5,7],[0,1,4,5],[2,6,3,7],[0,2,1,3],[4,5,6,7]];this.strokeIndices=[[0,1],[1,3],[3,2],[6,7],[8,9],[9,11],[14,15],[16,17],[17,19],[18,19],[20,21],[22,23]];for(var b=0;b<a.length;b++){for(var c=a[b],e=4*b,f=0;f<4;f++){var g=c[f],h=new d.Vector((2*(1&g)-1)/2,((2&g)-1)/2,((4&g)/2-1)/2);this.vertices.push(h),this.uvs.push([1&f,(2&f)/2])}this.faces.push([e,e+1,e+2]),this.faces.push([e+2,e+1,e+3])}},i=new d.Geometry(e,f,h);i.computeNormals(),e<=4&&f<=4?(i._makeTriangleEdges(),this._renderer._edgesToVertices(i)):console.log("Cannot draw stroke on box objects with more than 4 detailX or 4 detailY"),this._renderer.createBuffers(g,i)}return this._renderer.drawBuffersScaled(g,a,b,c),this},d.prototype.sphere=function(a,b,c){return void 0===a&&(a=50),void 0===b&&(b=24),void 0===c&&(c=16),this.ellipsoid(a,a,a,b,c),this};var e=function(a,b,c,e,f,g,h){e=e<3?3:e,f=f<1?1:f,g=void 0===g||g,h=void 0===h||h;var i,j,k=(g?2:0)+(h?2:0),l=e+1,m=Math.atan2(a-b,c),n=g?-2:0,o=f+(h?2:0);for(i=n;i<=o;++i){var p,q=i/f,r=c*q;for(i<0?(r=0,q=1,p=a):i>f?(r=c,q=1,p=b):p=a+i/f*(b-a),-2!==i&&i!==f+2||(p=0,q=0),r-=c/2,j=0;j<l;++j)this.vertices.push(new d.Vector(Math.sin(j*Math.PI*2/e)*p,r,Math.cos(j*Math.PI*2/e)*p)),this.vertexNormals.push(new d.Vector(i<0||i>f?0:Math.sin(j*Math.PI*2/e)*Math.cos(m),i<0?-1:i>f?1:Math.sin(m),i<0||i>f?0:Math.cos(j*Math.PI*2/e)*Math.cos(m))),this.uvs.push([j/e,q])}for(i=0;i<f+k;++i)for(j=0;j<e;++j)this.faces.push([l*(i+0)+0+j,l*(i+0)+1+j,l*(i+1)+1+j]),this.faces.push([l*(i+0)+0+j,l*(i+1)+1+j,l*(i+1)+0+j])};d.prototype.cylinder=function(a,b,c,f){void 0===a&&(a=50),void 0===b&&(b=a),void 0===c&&(c=24),void 0===f&&(f=16);var g="cylinder|"+c+"|"+f;if(!this._renderer.geometryInHash(g)){var h=new d.Geometry(c,f);e.call(h,1,1,1,c,f,!0,!0),h.computeNormals(),c<=24&&f<=16?(h._makeTriangleEdges(),this._renderer._edgesToVertices(h)):console.log("Cannot draw stroke on cylinder objects with more than 24 detailX or 16 detailY"),this._renderer.createBuffers(g,h)}return this._renderer.drawBuffersScaled(g,a,a,b),this},d.prototype.cone=function(a,b,c,f){void 0===a&&(a=50),void 0===b&&(b=a),void 0===c&&(c=24),void 0===f&&(f=16);var g="cone|"+a+"|"+b+"|"+c+"|"+f;if(!this._renderer.geometryInHash(g)){var h=new d.Geometry(c,f);e.call(h,a,0,b,c,f,!0,!0),h.computeNormals(),c<=24&&f<=16?(h._makeTriangleEdges(),this._renderer._edgesToVertices(h)):console.log("Cannot draw stroke on cone objects with more than 24 detailX or 16 detailY"),this._renderer.createBuffers(g,h)}return this._renderer.drawBuffers(g),this},d.prototype.ellipsoid=function(a,b,c,e,f){void 0===a&&(a=50),void 0===b&&(b=a),void 0===c&&(c=a),void 0===e&&(e=24),void 0===f&&(f=16);var g="ellipsoid|"+e+"|"+f;if(!this._renderer.geometryInHash(g)){var h=function(){for(var a=0;a<=this.detailY;a++)for(var b=a/this.detailY,c=Math.PI*b-Math.PI/2,e=Math.cos(c),f=Math.sin(c),g=0;g<=this.detailX;g++){var h=g/this.detailX,i=2*Math.PI*h,j=Math.cos(i),k=Math.sin(i),l=new d.Vector(e*k,f,e*j);this.vertices.push(l),this.vertexNormals.push(l),this.uvs.push([h,b])}},i=new d.Geometry(e,f,h);i.computeFaces(),e<=24&&f<=24?(i._makeTriangleEdges(),this._renderer._edgesToVertices(i)):console.log("Cannot draw stroke on ellipsoids with more than 24 detailX or 24 detailY"),this._renderer.createBuffers(g,i)}return this._renderer.drawBuffersScaled(g,a,b,c),this},d.prototype.torus=function(a,b,c,e){if(void 0===a)a=50;else if(!a)return;if(void 0===b)b=10;else if(!b)return;void 0===c&&(c=24),void 0===e&&(e=16);var f=(b/a).toPrecision(4),g="torus|"+f+"|"+c+"|"+e;if(!this._renderer.geometryInHash(g)){var h=function(){for(var a=0;a<=this.detailY;a++)for(var b=a/this.detailY,c=2*Math.PI*b,e=Math.cos(c),g=Math.sin(c),h=1+f*e,i=0;i<=this.detailX;i++){var j=i/this.detailX,k=2*Math.PI*j,l=Math.cos(k),m=Math.sin(k),n=new d.Vector(h*l,h*m,f*g),o=new d.Vector(e*l,e*m,g);this.vertices.push(n),this.vertexNormals.push(o),this.uvs.push([j,b])}},i=new d.Geometry(c,e,h);i.computeFaces(),c<=24&&e<=16?(i._makeTriangleEdges(),this._renderer._edgesToVertices(i)):console.log("Cannot draw strokes on torus object with more than 24 detailX or 16 detailY"),this._renderer.createBuffers(g,i)}return this._renderer.drawBuffersScaled(g,a,a,a),this},d.RendererGL.prototype.point=function(a,b,c){return console.log("point not yet implemented in webgl"),this},d.RendererGL.prototype.triangle=function(a){var b=a[0],c=a[1],e=a[2],f=a[3],g=a[4],h=a[5],i="tri";if(!this.geometryInHash(i)){var j=function(){var a=[];a.push(new d.Vector(0,0,0)),a.push(new d.Vector(0,1,0)),a.push(new d.Vector(1,0,0)),this.strokeIndices=[[0,1],[1,2],[2,0]],this.vertices=a,this.faces=[[0,1,2]],this.uvs=[[0,0],[0,1],[1,1]]},k=new d.Geometry(1,1,j);k._makeTriangleEdges(),this._edgesToVertices(k),k.computeNormals(),this.createBuffers(i,k)}var l=this.uMVMatrix.copy();try{var m=new d.Matrix([e-b,f-c,0,0,g-b,h-c,0,0,0,0,1,0,b,c,0,1]).mult(this.uMVMatrix);this.uMVMatrix=m,this.drawBuffers(i)}finally{this.uMVMatrix=l}return this},d.RendererGL.prototype.ellipse=function(a){var b=a[0],c=a[1],e=a[2],f=a[3],g=a[4]||24,h="ellipse|"+g;if(!this.geometryInHash(h)){var i=function(){this.vertices.push(new d.Vector(.5,.5,0)),this.uvs.push([.5,.5]);for(var a=0;a<=this.detailX;a++){var b=a/this.detailX,c=2*Math.PI*b,e=.5+Math.cos(c)/2,f=.5+Math.sin(c)/2;this.vertices.push(new d.Vector(e,f,0)),this.uvs.push([e,f]),this.faces.push([0,(a+1)%this.detailX+1,a+1])}},j=new d.Geometry(g,1,i);j.computeNormals(),g<=50?(j._makeTriangleEdges(),this._edgesToVertices(j)):console.log("Cannot stroke ellipse with more than 50 detailX"),this.createBuffers(h,j)}var k=this.uMVMatrix.copy();try{this.uMVMatrix.translate([b,c,0]),this.uMVMatrix.scale(e,f,1),this.drawBuffers(h)}finally{this.uMVMatrix=k}return this},d.RendererGL.prototype.rect=function(a){var b=a[0],c=a[1],e=a[2],f=a[3],g=a[4]||24,h=a[5]||16,i="rect|"+g+"|"+h;if(!this.geometryInHash(i)){var j=function(){for(var a=0;a<=this.detailY;a++)for(var b=a/this.detailY,c=0;c<=this.detailX;c++){var e=c/this.detailX,f=new d.Vector(e,b,0);this.vertices.push(f),this.uvs.push([e,b])}},k=new d.Geometry(g,h,j);k.computeFaces().computeNormals()._makeTriangleEdges(),this._edgesToVertices(k),this.createBuffers(i,k)}var l=this.uMVMatrix.copy();try{this.uMVMatrix.translate([b,c,0]),this.uMVMatrix.scale(e,f,1),this.drawBuffers(i)}finally{this.uMVMatrix=l}return this},d.RendererGL.prototype.quad=function(a,b,c,e,f,g,h,i){var j="quad|"+a+"|"+b+"|"+c+"|"+e+"|"+f+"|"+g+"|"+h+"|"+i;if(!this.geometryInHash(j)){var k=function(){this.vertices.push(new d.Vector(a,b,0)),this.vertices.push(new d.Vector(c,e,0)),this.vertices.push(new d.Vector(f,g,0)),this.vertices.push(new d.Vector(h,i,0)),this.uvs.push([0,0],[1,0],[1,1],[0,1]),this.strokeIndices=[[0,1],[1,2],[2,3],[3,0]]},l=new d.Geometry(2,2,k);l.computeNormals()._makeTriangleEdges(),this._edgesToVertices(l),l.faces=[[0,1,2],[2,3,0]],this.createBuffers(j,l)}return this.drawBuffers(j),this},d.RendererGL.prototype.bezier=function(a,b,c,d,e,f,g,h,i,j,k,l){var m=this._pInst._bezierDetail||20;this.beginShape();for(var n=0;n<=m;n++){var o=Math.pow(1-n/m,3),p=n/m*3*Math.pow(1-n/m,2),q=3*Math.pow(n/m,2)*(1-n/m),r=Math.pow(n/m,3);this.vertex(a*o+d*p+g*q+j*r,b*o+e*p+h*q+k*r,c*o+f*p+i*q+l*r)}return this.endShape(),this},d.RendererGL.prototype.curve=function(a,b,c,d,e,f,g,h,i,j,k,l){var m=this._pInst._curveDetail;this.beginShape();for(var n=0;n<=m;n++){var o=.5*Math.pow(n/m,3),p=.5*Math.pow(n/m,2),q=n/m*.5,r=.5,s=o*(3*d-a-3*g+j)+p*(2*a-5*d+4*g-j)+q*(-a+g)+r*(2*d),t=o*(3*e-b-3*h+k)+p*(2*b-5*e+4*h-k)+q*(-b+h)+r*(2*e),u=o*(3*f-c-3*i+l)+p*(2*c-5*f+4*i-l)+q*(-c+i)+r*(2*f);this.vertex(s,t,u)}return this.endShape(),this},d.RendererGL.prototype.line=function(){return 6===arguments.length?(this.beginShape(),this.vertex(arguments[0],arguments[1],arguments[2]),this.vertex(arguments[3],arguments[4],arguments[5]),this.endShape()):4===arguments.length&&(this.beginShape(),this.vertex(arguments[0],arguments[1],0),this.vertex(arguments[2],arguments[3],0),this.endShape()),this},b.exports=d},{"../core/core":21,"./p5.Geometry":68}]},{},[12])(12)});
;/*! p5.sound.js v0.3.7 2018-01-19 */
/**
 *  p5.sound extends p5 with <a href="http://caniuse.com/audio-api"
 *  target="_blank">Web Audio</a> functionality including audio input,
 *  playback, analysis and synthesis.
 *  <br/><br/>
 *  <a href="#/p5.SoundFile"><b>p5.SoundFile</b></a>: Load and play sound files.<br/>
 *  <a href="#/p5.Amplitude"><b>p5.Amplitude</b></a>: Get the current volume of a sound.<br/>
 *  <a href="#/p5.AudioIn"><b>p5.AudioIn</b></a>: Get sound from an input source, typically
 *    a computer microphone.<br/>
 *  <a href="#/p5.FFT"><b>p5.FFT</b></a>: Analyze the frequency of sound. Returns
 *    results from the frequency spectrum or time domain (waveform).<br/>
 *  <a href="#/p5.Oscillator"><b>p5.Oscillator</b></a>: Generate Sine,
 *    Triangle, Square and Sawtooth waveforms. Base class of
 *    <a href="#/p5.Noise">p5.Noise</a> and <a href="#/p5.Pulse">p5.Pulse</a>.
 *    <br/>
 *  <a href="#/p5.Env"><b>p5.Env</b></a>: An Envelope is a series
 *    of fades over time. Often used to control an object's
 *    output gain level as an "ADSR Envelope" (Attack, Decay,
 *    Sustain, Release). Can also modulate other parameters.<br/>
 *  <a href="#/p5.Delay"><b>p5.Delay</b></a>: A delay effect with
 *    parameters for feedback, delayTime, and lowpass filter.<br/>
 *  <a href="#/p5.Filter"><b>p5.Filter</b></a>: Filter the frequency range of a
 *    sound.
 *  <br/>
 *  <a href="#/p5.Reverb"><b>p5.Reverb</b></a>: Add reverb to a sound by specifying
 *    duration and decay. <br/>
 *  <b><a href="#/p5.Convolver">p5.Convolver</a>:</b> Extends
 *  <a href="#/p5.Reverb">p5.Reverb</a> to simulate the sound of real
 *    physical spaces through convolution.<br/>
 *  <b><a href="#/p5.SoundRecorder">p5.SoundRecorder</a></b>: Record sound for playback
 *    / save the .wav file.
 *  <b><a href="#/p5.Phrase">p5.Phrase</a></b>, <b><a href="#/p5.Part">p5.Part</a></b> and
 *  <b><a href="#/p5.Score">p5.Score</a></b>: Compose musical sequences.
 *  <br/><br/>
 *  p5.sound is on <a href="https://github.com/therewasaguy/p5.sound/">GitHub</a>.
 *  Download the latest version
 *  <a href="https://github.com/therewasaguy/p5.sound/blob/master/lib/p5.sound.js">here</a>.
 *
 *  @module p5.sound
 *  @submodule p5.sound
 *  @for p5.sound
 *  @main
 */

/**
 *  p5.sound
 *  https://p5js.org/reference/#/libraries/p5.sound
 *
 *  From the Processing Foundation and contributors
 *  https://github.com/processing/p5.js-sound/graphs/contributors
 *
 *  MIT License (MIT)
 *  https://github.com/processing/p5.js-sound/blob/master/LICENSE
 *
 *  Some of the many audio libraries & resources that inspire p5.sound:
 *   - TONE.js (c) Yotam Mann. Licensed under The MIT License (MIT). https://github.com/TONEnoTONE/Tone.js
 *   - buzz.js (c) Jay Salvat. Licensed under The MIT License (MIT). http://buzz.jaysalvat.com/
 *   - Boris Smus Web Audio API book, 2013. Licensed under the Apache License http://www.apache.org/licenses/LICENSE-2.0
 *   - wavesurfer.js https://github.com/katspaugh/wavesurfer.js
 *   - Web Audio Components by Jordan Santell https://github.com/web-audio-components
 *   - Wilm Thoben's Sound library for Processing https://github.com/processing/processing/tree/master/java/libraries/sound
 *
 *   Web Audio API: http://w3.org/TR/webaudio/
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define('p5.sound', ['p5'], function (p5) { (factory(p5));});
  else if (typeof exports === 'object')
    factory(require('../p5'));
  else
    factory(root['p5']);
}(this, function (p5) {

var sndcore;
'use strict';
sndcore = function () {
  /* AudioContext Monkeypatch
     Copyright 2013 Chris Wilson
     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at
         http://www.apache.org/licenses/LICENSE-2.0
     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
     limitations under the License.
  */
  (function () {
    function fixSetTarget(param) {
      if (!param)
        // if NYI, just return
        return;
      if (!param.setTargetAtTime)
        param.setTargetAtTime = param.setTargetValueAtTime;
    }
    if (window.hasOwnProperty('webkitAudioContext') && !window.hasOwnProperty('AudioContext')) {
      window.AudioContext = window.webkitAudioContext;
      if (typeof AudioContext.prototype.createGain !== 'function')
        AudioContext.prototype.createGain = AudioContext.prototype.createGainNode;
      if (typeof AudioContext.prototype.createDelay !== 'function')
        AudioContext.prototype.createDelay = AudioContext.prototype.createDelayNode;
      if (typeof AudioContext.prototype.createScriptProcessor !== 'function')
        AudioContext.prototype.createScriptProcessor = AudioContext.prototype.createJavaScriptNode;
      if (typeof AudioContext.prototype.createPeriodicWave !== 'function')
        AudioContext.prototype.createPeriodicWave = AudioContext.prototype.createWaveTable;
      AudioContext.prototype.internal_createGain = AudioContext.prototype.createGain;
      AudioContext.prototype.createGain = function () {
        var node = this.internal_createGain();
        fixSetTarget(node.gain);
        return node;
      };
      AudioContext.prototype.internal_createDelay = AudioContext.prototype.createDelay;
      AudioContext.prototype.createDelay = function (maxDelayTime) {
        var node = maxDelayTime ? this.internal_createDelay(maxDelayTime) : this.internal_createDelay();
        fixSetTarget(node.delayTime);
        return node;
      };
      AudioContext.prototype.internal_createBufferSource = AudioContext.prototype.createBufferSource;
      AudioContext.prototype.createBufferSource = function () {
        var node = this.internal_createBufferSource();
        if (!node.start) {
          node.start = function (when, offset, duration) {
            if (offset || duration)
              this.noteGrainOn(when || 0, offset, duration);
            else
              this.noteOn(when || 0);
          };
        } else {
          node.internal_start = node.start;
          node.start = function (when, offset, duration) {
            if (typeof duration !== 'undefined')
              node.internal_start(when || 0, offset, duration);
            else
              node.internal_start(when || 0, offset || 0);
          };
        }
        if (!node.stop) {
          node.stop = function (when) {
            this.noteOff(when || 0);
          };
        } else {
          node.internal_stop = node.stop;
          node.stop = function (when) {
            node.internal_stop(when || 0);
          };
        }
        fixSetTarget(node.playbackRate);
        return node;
      };
      AudioContext.prototype.internal_createDynamicsCompressor = AudioContext.prototype.createDynamicsCompressor;
      AudioContext.prototype.createDynamicsCompressor = function () {
        var node = this.internal_createDynamicsCompressor();
        fixSetTarget(node.threshold);
        fixSetTarget(node.knee);
        fixSetTarget(node.ratio);
        fixSetTarget(node.reduction);
        fixSetTarget(node.attack);
        fixSetTarget(node.release);
        return node;
      };
      AudioContext.prototype.internal_createBiquadFilter = AudioContext.prototype.createBiquadFilter;
      AudioContext.prototype.createBiquadFilter = function () {
        var node = this.internal_createBiquadFilter();
        fixSetTarget(node.frequency);
        fixSetTarget(node.detune);
        fixSetTarget(node.Q);
        fixSetTarget(node.gain);
        return node;
      };
      if (typeof AudioContext.prototype.createOscillator !== 'function') {
        AudioContext.prototype.internal_createOscillator = AudioContext.prototype.createOscillator;
        AudioContext.prototype.createOscillator = function () {
          var node = this.internal_createOscillator();
          if (!node.start) {
            node.start = function (when) {
              this.noteOn(when || 0);
            };
          } else {
            node.internal_start = node.start;
            node.start = function (when) {
              node.internal_start(when || 0);
            };
          }
          if (!node.stop) {
            node.stop = function (when) {
              this.noteOff(when || 0);
            };
          } else {
            node.internal_stop = node.stop;
            node.stop = function (when) {
              node.internal_stop(when || 0);
            };
          }
          if (!node.setPeriodicWave)
            node.setPeriodicWave = node.setWaveTable;
          fixSetTarget(node.frequency);
          fixSetTarget(node.detune);
          return node;
        };
      }
    }
    if (window.hasOwnProperty('webkitOfflineAudioContext') && !window.hasOwnProperty('OfflineAudioContext')) {
      window.OfflineAudioContext = window.webkitOfflineAudioContext;
    }
  }(window));
  // <-- end MonkeyPatch.
  // Create the Audio Context
  var audiocontext = new window.AudioContext();
  /**
   * <p>Returns the Audio Context for this sketch. Useful for users
   * who would like to dig deeper into the <a target='_blank' href=
   * 'http://webaudio.github.io/web-audio-api/'>Web Audio API
   * </a>.</p>
   *
   * @method getAudioContext
   * @return {Object}    AudioContext for this sketch
   */
  p5.prototype.getAudioContext = function () {
    return audiocontext;
  };
  // Polyfill for AudioIn, also handled by p5.dom createCapture
  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
  /**
   * Determine which filetypes are supported (inspired by buzz.js)
   * The audio element (el) will only be used to test browser support for various audio formats
   */
  var el = document.createElement('audio');
  p5.prototype.isSupported = function () {
    return !!el.canPlayType;
  };
  var isOGGSupported = function () {
    return !!el.canPlayType && el.canPlayType('audio/ogg; codecs="vorbis"');
  };
  var isMP3Supported = function () {
    return !!el.canPlayType && el.canPlayType('audio/mpeg;');
  };
  var isWAVSupported = function () {
    return !!el.canPlayType && el.canPlayType('audio/wav; codecs="1"');
  };
  var isAACSupported = function () {
    return !!el.canPlayType && (el.canPlayType('audio/x-m4a;') || el.canPlayType('audio/aac;'));
  };
  var isAIFSupported = function () {
    return !!el.canPlayType && el.canPlayType('audio/x-aiff;');
  };
  p5.prototype.isFileSupported = function (extension) {
    switch (extension.toLowerCase()) {
    case 'mp3':
      return isMP3Supported();
    case 'wav':
      return isWAVSupported();
    case 'ogg':
      return isOGGSupported();
    case 'aac':
    case 'm4a':
    case 'mp4':
      return isAACSupported();
    case 'aif':
    case 'aiff':
      return isAIFSupported();
    default:
      return false;
    }
  };
  // if it is iOS, we have to have a user interaction to start Web Audio
  // http://paulbakaus.com/tutorials/html5/web-audio-on-ios/
  var iOS = navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false;
  if (iOS) {
    var iosStarted = false;
    var startIOS = function () {
      if (iosStarted)
        return;
      // create empty buffer
      var buffer = audiocontext.createBuffer(1, 1, 22050);
      var source = audiocontext.createBufferSource();
      source.buffer = buffer;
      // connect to output (your speakers)
      source.connect(audiocontext.destination);
      // play the file
      source.start(0);
      console.log('start ios!');
      if (audiocontext.state === 'running') {
        iosStarted = true;
      }
    };
    document.addEventListener('touchend', startIOS, false);
    document.addEventListener('touchstart', startIOS, false);
  }
}();
var master;
'use strict';
master = function () {
  /**
   * Master contains AudioContext and the master sound output.
   */
  var Master = function () {
    var audiocontext = p5.prototype.getAudioContext();
    this.input = audiocontext.createGain();
    this.output = audiocontext.createGain();
    //put a hard limiter on the output
    this.limiter = audiocontext.createDynamicsCompressor();
    this.limiter.threshold.value = 0;
    this.limiter.ratio.value = 20;
    this.audiocontext = audiocontext;
    this.output.disconnect();
    // connect input to limiter
    this.input.connect(this.limiter);
    // connect limiter to output
    this.limiter.connect(this.output);
    // meter is just for global Amplitude / FFT analysis
    this.meter = audiocontext.createGain();
    this.fftMeter = audiocontext.createGain();
    this.output.connect(this.meter);
    this.output.connect(this.fftMeter);
    // connect output to destination
    this.output.connect(this.audiocontext.destination);
    // an array of all sounds in the sketch
    this.soundArray = [];
    // an array of all musical parts in the sketch
    this.parts = [];
    // file extensions to search for
    this.extensions = [];
  };
  // create a single instance of the p5Sound / master output for use within this sketch
  var p5sound = new Master();
  /**
   * Returns a number representing the master amplitude (volume) for sound
   * in this sketch.
   *
   * @method getMasterVolume
   * @return {Number} Master amplitude (volume) for sound in this sketch.
   *                  Should be between 0.0 (silence) and 1.0.
   */
  p5.prototype.getMasterVolume = function () {
    return p5sound.output.gain.value;
  };
  /**
   *  <p>Scale the output of all sound in this sketch</p>
   *  Scaled between 0.0 (silence) and 1.0 (full volume).
   *  1.0 is the maximum amplitude of a digital sound, so multiplying
   *  by greater than 1.0 may cause digital distortion. To
   *  fade, provide a <code>rampTime</code> parameter. For more
   *  complex fades, see the Env class.
   *
   *  Alternately, you can pass in a signal source such as an
   *  oscillator to modulate the amplitude with an audio signal.
   *
   *  <p><b>How This Works</b>: When you load the p5.sound module, it
   *  creates a single instance of p5sound. All sound objects in this
   *  module output to p5sound before reaching your computer's output.
   *  So if you change the amplitude of p5sound, it impacts all of the
   *  sound in this module.</p>
   *
   *  <p>If no value is provided, returns a Web Audio API Gain Node</p>
   *
   *  @method  masterVolume
   *  @param {Number|Object} volume  Volume (amplitude) between 0.0
   *                                     and 1.0 or modulating signal/oscillator
   *  @param {Number} [rampTime]  Fade for t seconds
   *  @param {Number} [timeFromNow]  Schedule this event to happen at
   *                                 t seconds in the future
   */
  p5.prototype.masterVolume = function (vol, rampTime, tFromNow) {
    if (typeof vol === 'number') {
      var rampTime = rampTime || 0;
      var tFromNow = tFromNow || 0;
      var now = p5sound.audiocontext.currentTime;
      var currentVol = p5sound.output.gain.value;
      p5sound.output.gain.cancelScheduledValues(now + tFromNow);
      p5sound.output.gain.linearRampToValueAtTime(currentVol, now + tFromNow);
      p5sound.output.gain.linearRampToValueAtTime(vol, now + tFromNow + rampTime);
    } else if (vol) {
      vol.connect(p5sound.output.gain);
    } else {
      // return the Gain Node
      return p5sound.output.gain;
    }
  };
  /**
   *  `p5.soundOut` is the p5.sound master output. It sends output to
   *  the destination of this window's web audio context. It contains
   *  Web Audio API nodes including a dyanmicsCompressor (<code>.limiter</code>),
   *  and Gain Nodes for <code>.input</code> and <code>.output</code>.
   *
   *  @property {Object} soundOut
   */
  p5.prototype.soundOut = p5.soundOut = p5sound;
  /**
   *  a silent connection to the DesinationNode
   *  which will ensure that anything connected to it
   *  will not be garbage collected
   *
   *  @private
   */
  p5.soundOut._silentNode = p5sound.audiocontext.createGain();
  p5.soundOut._silentNode.gain.value = 0;
  p5.soundOut._silentNode.connect(p5sound.audiocontext.destination);
  return p5sound;
}();
var helpers;
'use strict';
helpers = function () {
  var p5sound = master;
  /**
   * @for p5
   */
  /**
   * Returns a number representing the sample rate, in samples per second,
   * of all sound objects in this audio context. It is determined by the
   * sampling rate of your operating system's sound card, and it is not
   * currently possile to change.
   * It is often 44100, or twice the range of human hearing.
   *
   * @method sampleRate
   * @return {Number} samplerate samples per second
   */
  p5.prototype.sampleRate = function () {
    return p5sound.audiocontext.sampleRate;
  };
  /**
   *  Returns the closest MIDI note value for
   *  a given frequency.
   *
   *  @method freqToMidi
   *  @param  {Number} frequency A freqeuncy, for example, the "A"
   *                             above Middle C is 440Hz
   *  @return {Number}   MIDI note value
   */
  p5.prototype.freqToMidi = function (f) {
    var mathlog2 = Math.log(f / 440) / Math.log(2);
    var m = Math.round(12 * mathlog2) + 69;
    return m;
  };
  /**
   *  Returns the frequency value of a MIDI note value.
   *  General MIDI treats notes as integers where middle C
   *  is 60, C# is 61, D is 62 etc. Useful for generating
   *  musical frequencies with oscillators.
   *
   *  @method  midiToFreq
   *  @param  {Number} midiNote The number of a MIDI note
   *  @return {Number} Frequency value of the given MIDI note
   *  @example
   *  <div><code>
   *  var notes = [60, 64, 67, 72];
   *  var i = 0;
   *
   *  function setup() {
   *    osc = new p5.Oscillator('Triangle');
   *    osc.start();
   *    frameRate(1);
   *  }
   *
   *  function draw() {
   *    var freq = midiToFreq(notes[i]);
   *    osc.freq(freq);
   *    i++;
   *    if (i >= notes.length){
   *      i = 0;
   *    }
   *  }
   *  </code></div>
   */
  p5.prototype.midiToFreq = function (m) {
    return 440 * Math.pow(2, (m - 69) / 12);
  };
  /**
   *  List the SoundFile formats that you will include. LoadSound
   *  will search your directory for these extensions, and will pick
   *  a format that is compatable with the client's web browser.
   *  <a href="http://media.io/">Here</a> is a free online file
   *  converter.
   *
   *  @method soundFormats
   *  @param {String} [...formats] i.e. 'mp3', 'wav', 'ogg'
   *  @example
   *  <div><code>
   *  function preload() {
   *    // set the global sound formats
   *    soundFormats('mp3', 'ogg');
   *
   *    // load either beatbox.mp3, or .ogg, depending on browser
   *    mySound = loadSound('assets/beatbox.mp3');
   *  }
   *
   *  function setup() {
   *    mySound.play();
   *  }
   *  </code></div>
   */
  p5.prototype.soundFormats = function () {
    // reset extensions array
    p5sound.extensions = [];
    // add extensions
    for (var i = 0; i < arguments.length; i++) {
      arguments[i] = arguments[i].toLowerCase();
      if ([
          'mp3',
          'wav',
          'ogg',
          'm4a',
          'aac'
        ].indexOf(arguments[i]) > -1) {
        p5sound.extensions.push(arguments[i]);
      } else {
        throw arguments[i] + ' is not a valid sound format!';
      }
    }
  };
  p5.prototype.disposeSound = function () {
    for (var i = 0; i < p5sound.soundArray.length; i++) {
      p5sound.soundArray[i].dispose();
    }
  };
  // register removeSound to dispose of p5sound SoundFiles, Convolvers,
  // Oscillators etc when sketch ends
  p5.prototype.registerMethod('remove', p5.prototype.disposeSound);
  p5.prototype._checkFileFormats = function (paths) {
    var path;
    // if path is a single string, check to see if extension is provided
    if (typeof paths === 'string') {
      path = paths;
      // see if extension is provided
      var extTest = path.split('.').pop();
      // if an extension is provided...
      if ([
          'mp3',
          'wav',
          'ogg',
          'm4a',
          'aac'
        ].indexOf(extTest) > -1) {
        if (p5.prototype.isFileSupported(extTest)) {
          path = path;
        } else {
          var pathSplit = path.split('.');
          var pathCore = pathSplit[pathSplit.length - 1];
          for (var i = 0; i < p5sound.extensions.length; i++) {
            var extension = p5sound.extensions[i];
            var supported = p5.prototype.isFileSupported(extension);
            if (supported) {
              pathCore = '';
              if (pathSplit.length === 2) {
                pathCore += pathSplit[0];
              }
              for (var i = 1; i <= pathSplit.length - 2; i++) {
                var p = pathSplit[i];
                pathCore += '.' + p;
              }
              path = pathCore += '.';
              path = path += extension;
              break;
            }
          }
        }
      } else {
        for (var i = 0; i < p5sound.extensions.length; i++) {
          var extension = p5sound.extensions[i];
          var supported = p5.prototype.isFileSupported(extension);
          if (supported) {
            path = path + '.' + extension;
            break;
          }
        }
      }
    } else if (typeof paths === 'object') {
      for (var i = 0; i < paths.length; i++) {
        var extension = paths[i].split('.').pop();
        var supported = p5.prototype.isFileSupported(extension);
        if (supported) {
          // console.log('.'+extension + ' is ' + supported +
          //  ' supported by your browser.');
          path = paths[i];
          break;
        }
      }
    }
    return path;
  };
  /**
   *  Used by Osc and Env to chain signal math
   */
  p5.prototype._mathChain = function (o, math, thisChain, nextChain, type) {
    // if this type of math already exists in the chain, replace it
    for (var i in o.mathOps) {
      if (o.mathOps[i] instanceof type) {
        o.mathOps[i].dispose();
        thisChain = i;
        if (thisChain < o.mathOps.length - 1) {
          nextChain = o.mathOps[i + 1];
        }
      }
    }
    o.mathOps[thisChain - 1].disconnect();
    o.mathOps[thisChain - 1].connect(math);
    math.connect(nextChain);
    o.mathOps[thisChain] = math;
    return o;
  };
  return { midiToFreq: p5.prototype.midiToFreq };
}(master);
var errorHandler;
'use strict';
errorHandler = function () {
  /*
      Helper function to generate an error
      with a custom stack trace that points to the sketch
      and removes other parts of the stack trace.

      @private
      @class customError
      @constructor
      @param  {String} name         custom  error name
      @param  {String} errorTrace   custom error trace
      @param  {String} failedPath     path to the file that failed to load
      @property {String} name custom error name
      @property {String} message custom error message
      @property {String} stack trace the error back to a line in the user's sketch.
                               Note: this edits out stack trace within p5.js and p5.sound.
      @property {String} originalStack unedited, original stack trace
      @property {String} failedPath path to the file that failed to load
      @return {Error}     returns a custom Error object
     */
  var CustomError = function (name, errorTrace, failedPath) {
    var err = new Error();
    var tempStack, splitStack;
    err.name = name;
    err.originalStack = err.stack + errorTrace;
    tempStack = err.stack + errorTrace;
    err.failedPath = failedPath;
    // only print the part of the stack trace that refers to the user code:
    var splitStack = tempStack.split('\n');
    splitStack = splitStack.filter(function (ln) {
      return !ln.match(/(p5.|native code|globalInit)/g);
    });
    err.stack = splitStack.join('\n');
    return err;
  };
  return CustomError;
}();
var panner;
'use strict';
panner = function () {
  var p5sound = master;
  var ac = p5sound.audiocontext;
  // Stereo panner
  // if there is a stereo panner node use it
  if (typeof ac.createStereoPanner !== 'undefined') {
    p5.Panner = function (input, output) {
      this.stereoPanner = this.input = ac.createStereoPanner();
      input.connect(this.stereoPanner);
      this.stereoPanner.connect(output);
    };
    p5.Panner.prototype.pan = function (val, tFromNow) {
      var time = tFromNow || 0;
      var t = ac.currentTime + time;
      this.stereoPanner.pan.linearRampToValueAtTime(val, t);
    };
    //not implemented because stereopanner
    //node does not require this and will automatically
    //convert single channel or multichannel to stereo.
    //tested with single and stereo, not with (>2) multichannel
    p5.Panner.prototype.inputChannels = function () {
    };
    p5.Panner.prototype.connect = function (obj) {
      this.stereoPanner.connect(obj);
    };
    p5.Panner.prototype.disconnect = function () {
      this.stereoPanner.disconnect();
    };
  } else {
    // if there is no createStereoPanner object
    // such as in safari 7.1.7 at the time of writing this
    // use this method to create the effect
    p5.Panner = function (input, output, numInputChannels) {
      this.input = ac.createGain();
      input.connect(this.input);
      this.left = ac.createGain();
      this.right = ac.createGain();
      this.left.channelInterpretation = 'discrete';
      this.right.channelInterpretation = 'discrete';
      // if input is stereo
      if (numInputChannels > 1) {
        this.splitter = ac.createChannelSplitter(2);
        this.input.connect(this.splitter);
        this.splitter.connect(this.left, 1);
        this.splitter.connect(this.right, 0);
      } else {
        this.input.connect(this.left);
        this.input.connect(this.right);
      }
      this.output = ac.createChannelMerger(2);
      this.left.connect(this.output, 0, 1);
      this.right.connect(this.output, 0, 0);
      this.output.connect(output);
    };
    // -1 is left, +1 is right
    p5.Panner.prototype.pan = function (val, tFromNow) {
      var time = tFromNow || 0;
      var t = ac.currentTime + time;
      var v = (val + 1) / 2;
      var rightVal = Math.cos(v * Math.PI / 2);
      var leftVal = Math.sin(v * Math.PI / 2);
      this.left.gain.linearRampToValueAtTime(leftVal, t);
      this.right.gain.linearRampToValueAtTime(rightVal, t);
    };
    p5.Panner.prototype.inputChannels = function (numChannels) {
      if (numChannels === 1) {
        this.input.disconnect();
        this.input.connect(this.left);
        this.input.connect(this.right);
      } else if (numChannels === 2) {
        if (typeof (this.splitter === 'undefined')) {
          this.splitter = ac.createChannelSplitter(2);
        }
        this.input.disconnect();
        this.input.connect(this.splitter);
        this.splitter.connect(this.left, 1);
        this.splitter.connect(this.right, 0);
      }
    };
    p5.Panner.prototype.connect = function (obj) {
      this.output.connect(obj);
    };
    p5.Panner.prototype.disconnect = function () {
      this.output.disconnect();
    };
  }
}(master);
var soundfile;
'use strict';
soundfile = function () {
  var CustomError = errorHandler;
  var p5sound = master;
  var ac = p5sound.audiocontext;
  var midiToFreq = helpers.midiToFreq;
  /**
   *  <p>SoundFile object with a path to a file.</p>
   *
   *  <p>The p5.SoundFile may not be available immediately because
   *  it loads the file information asynchronously.</p>
   *
   *  <p>To do something with the sound as soon as it loads
   *  pass the name of a function as the second parameter.</p>
   *
   *  <p>Only one file path is required. However, audio file formats
   *  (i.e. mp3, ogg, wav and m4a/aac) are not supported by all
   *  web browsers. If you want to ensure compatability, instead of a single
   *  file path, you may include an Array of filepaths, and the browser will
   *  choose a format that works.</p>
   *
   *  @class p5.SoundFile
   *  @constructor
   *  @param {String|Array} path   path to a sound file (String). Optionally,
   *                               you may include multiple file formats in
   *                               an array. Alternately, accepts an object
   *                               from the HTML5 File API, or a p5.File.
   *  @param {Function} [successCallback]   Name of a function to call once file loads
   *  @param {Function} [errorCallback]   Name of a function to call if file fails to
   *                                      load. This function will receive an error or
   *                                     XMLHttpRequest object with information
   *                                     about what went wrong.
   *  @param {Function} [whileLoadingCallback]   Name of a function to call while file
   *                                             is loading. That function will
   *                                             receive progress of the request to
   *                                             load the sound file
   *                                             (between 0 and 1) as its first
   *                                             parameter. This progress
   *                                             does not account for the additional
   *                                             time needed to decode the audio data.
   *
   *  @example
   *  <div><code>
   *
   *  function preload() {
   *    soundFormats('mp3', 'ogg');
   *    mySound = loadSound('assets/doorbell.mp3');
   *  }
   *
   *  function setup() {
   *    mySound.setVolume(0.1);
   *    mySound.play();
   *  }
   *
   * </code></div>
   */
  p5.SoundFile = function (paths, onload, onerror, whileLoading) {
    if (typeof paths !== 'undefined') {
      if (typeof paths === 'string' || typeof paths[0] === 'string') {
        var path = p5.prototype._checkFileFormats(paths);
        this.url = path;
      } else if (typeof paths === 'object') {
        if (!(window.File && window.FileReader && window.FileList && window.Blob)) {
          // The File API isn't supported in this browser
          throw 'Unable to load file because the File API is not supported';
        }
      }
      // if type is a p5.File...get the actual file
      if (paths.file) {
        paths = paths.file;
      }
      this.file = paths;
    }
    // private _onended callback, set by the method: onended(callback)
    this._onended = function () {
    };
    this._looping = false;
    this._playing = false;
    this._paused = false;
    this._pauseTime = 0;
    // cues for scheduling events with addCue() removeCue()
    this._cues = [];
    //  position of the most recently played sample
    this._lastPos = 0;
    this._counterNode = null;
    this._scopeNode = null;
    // array of sources so that they can all be stopped!
    this.bufferSourceNodes = [];
    // current source
    this.bufferSourceNode = null;
    this.buffer = null;
    this.playbackRate = 1;
    this.input = p5sound.audiocontext.createGain();
    this.output = p5sound.audiocontext.createGain();
    this.reversed = false;
    // start and end of playback / loop
    this.startTime = 0;
    this.endTime = null;
    this.pauseTime = 0;
    // "restart" would stop playback before retriggering
    this.mode = 'sustain';
    // time that playback was started, in millis
    this.startMillis = null;
    // stereo panning
    this.panPosition = 0;
    this.panner = new p5.Panner(this.output, p5sound.input, 2);
    // it is possible to instantiate a soundfile with no path
    if (this.url || this.file) {
      this.load(onload, onerror);
    }
    // add this p5.SoundFile to the soundArray
    p5sound.soundArray.push(this);
    if (typeof whileLoading === 'function') {
      this._whileLoading = whileLoading;
    } else {
      this._whileLoading = function () {
      };
    }
  };
  // register preload handling of loadSound
  p5.prototype.registerPreloadMethod('loadSound', p5.prototype);
  /**
   *  loadSound() returns a new p5.SoundFile from a specified
   *  path. If called during preload(), the p5.SoundFile will be ready
   *  to play in time for setup() and draw(). If called outside of
   *  preload, the p5.SoundFile will not be ready immediately, so
   *  loadSound accepts a callback as the second parameter. Using a
   *  <a href="https://github.com/processing/p5.js/wiki/Local-server">
   *  local server</a> is recommended when loading external files.
   *
   *  @method loadSound
   *  @param  {String|Array}   path     Path to the sound file, or an array with
   *                                    paths to soundfiles in multiple formats
   *                                    i.e. ['sound.ogg', 'sound.mp3'].
   *                                    Alternately, accepts an object: either
   *                                    from the HTML5 File API, or a p5.File.
   *  @param {Function} [successCallback]   Name of a function to call once file loads
   *  @param {Function} [errorCallback]   Name of a function to call if there is
   *                                      an error loading the file.
   *  @param {Function} [whileLoading] Name of a function to call while file is loading.
   *                                 This function will receive the percentage loaded
   *                                 so far, from 0.0 to 1.0.
   *  @return {SoundFile}            Returns a p5.SoundFile
   *  @example
   *  <div><code>
   *  function preload() {
   *   mySound = loadSound('assets/doorbell.mp3');
   *  }
   *
   *  function setup() {
   *    mySound.setVolume(0.1);
   *    mySound.play();
   *  }
   *  </code></div>
   */
  p5.prototype.loadSound = function (path, callback, onerror, whileLoading) {
    // if loading locally without a server
    if (window.location.origin.indexOf('file://') > -1 && window.cordova === 'undefined') {
      window.alert('This sketch may require a server to load external files. Please see http://bit.ly/1qcInwS');
    }
    var self = this;
    var s = new p5.SoundFile(path, function () {
      if (typeof callback === 'function') {
        callback.apply(self, arguments);
      }
      self._decrementPreload();
    }, onerror, whileLoading);
    return s;
  };
  /**
   * This is a helper function that the p5.SoundFile calls to load
   * itself. Accepts a callback (the name of another function)
   * as an optional parameter.
   *
   * @private
   * @param {Function} [successCallback]   Name of a function to call once file loads
   * @param {Function} [errorCallback]   Name of a function to call if there is an error
   */
  p5.SoundFile.prototype.load = function (callback, errorCallback) {
    var self = this;
    var errorTrace = new Error().stack;
    if (this.url !== undefined && this.url !== '') {
      var request = new XMLHttpRequest();
      request.addEventListener('progress', function (evt) {
        self._updateProgress(evt);
      }, false);
      request.open('GET', this.url, true);
      request.responseType = 'arraybuffer';
      request.onload = function () {
        if (request.status === 200) {
          // on sucess loading file:
          ac.decodeAudioData(request.response, // success decoding buffer:
          function (buff) {
            self.buffer = buff;
            self.panner.inputChannels(buff.numberOfChannels);
            if (callback) {
              callback(self);
            }
          }, // error decoding buffer. "e" is undefined in Chrome 11/22/2015
          function () {
            var err = new CustomError('decodeAudioData', errorTrace, self.url);
            var msg = 'AudioContext error at decodeAudioData for ' + self.url;
            if (errorCallback) {
              err.msg = msg;
              errorCallback(err);
            } else {
              console.error(msg + '\n The error stack trace includes: \n' + err.stack);
            }
          });
        } else {
          var err = new CustomError('loadSound', errorTrace, self.url);
          var msg = 'Unable to load ' + self.url + '. The request status was: ' + request.status + ' (' + request.statusText + ')';
          if (errorCallback) {
            err.message = msg;
            errorCallback(err);
          } else {
            console.error(msg + '\n The error stack trace includes: \n' + err.stack);
          }
        }
      };
      // if there is another error, aside from 404...
      request.onerror = function () {
        var err = new CustomError('loadSound', errorTrace, self.url);
        var msg = 'There was no response from the server at ' + self.url + '. Check the url and internet connectivity.';
        if (errorCallback) {
          err.message = msg;
          errorCallback(err);
        } else {
          console.error(msg + '\n The error stack trace includes: \n' + err.stack);
        }
      };
      request.send();
    } else if (this.file !== undefined) {
      var reader = new FileReader();
      reader.onload = function () {
        ac.decodeAudioData(reader.result, function (buff) {
          self.buffer = buff;
          self.panner.inputChannels(buff.numberOfChannels);
          if (callback) {
            callback(self);
          }
        });
      };
      reader.onerror = function (e) {
        if (onerror) {
          onerror(e);
        }
      };
      reader.readAsArrayBuffer(this.file);
    }
  };
  // TO DO: use this method to create a loading bar that shows progress during file upload/decode.
  p5.SoundFile.prototype._updateProgress = function (evt) {
    if (evt.lengthComputable) {
      var percentComplete = evt.loaded / evt.total * 0.99;
      this._whileLoading(percentComplete, evt);
    } else {
      // Unable to compute progress information since the total size is unknown
      this._whileLoading('size unknown');
    }
  };
  /**
   *  Returns true if the sound file finished loading successfully.
   *
   *  @method  isLoaded
   *  @return {Boolean}
   */
  p5.SoundFile.prototype.isLoaded = function () {
    if (this.buffer) {
      return true;
    } else {
      return false;
    }
  };
  /**
   * Play the p5.SoundFile
   *
   * @method play
   * @param {Number} [startTime]            (optional) schedule playback to start (in seconds from now).
   * @param {Number} [rate]             (optional) playback rate
   * @param {Number} [amp]              (optional) amplitude (volume)
   *                                     of playback
   * @param {Number} [cueStart]        (optional) cue start time in seconds
   * @param {Number} [duration]          (optional) duration of playback in seconds
   */
  p5.SoundFile.prototype.play = function (startTime, rate, amp, _cueStart, duration) {
    var self = this;
    var now = p5sound.audiocontext.currentTime;
    var cueStart, cueEnd;
    var time = startTime || 0;
    if (time < 0) {
      time = 0;
    }
    time = time + now;
    if (typeof rate !== 'undefined') {
      this.rate(rate);
    }
    if (typeof amp !== 'undefined') {
      this.setVolume(amp);
    }
    // TO DO: if already playing, create array of buffers for easy stop()
    if (this.buffer) {
      // reset the pause time (if it was paused)
      this._pauseTime = 0;
      // handle restart playmode
      if (this.mode === 'restart' && this.buffer && this.bufferSourceNode) {
        this.bufferSourceNode.stop(time);
        this._counterNode.stop(time);
      }
      //dont create another instance if already playing
      if (this.mode === 'untildone' && this.isPlaying()) {
        return;
      }
      // make a new source and counter. They are automatically assigned playbackRate and buffer
      this.bufferSourceNode = this._initSourceNode();
      // garbage collect counterNode and create a new one
      delete this._counterNode;
      this._counterNode = this._initCounterNode();
      if (_cueStart) {
        if (_cueStart >= 0 && _cueStart < this.buffer.duration) {
          // this.startTime = cueStart;
          cueStart = _cueStart;
        } else {
          throw 'start time out of range';
        }
      } else {
        cueStart = 0;
      }
      if (duration) {
        // if duration is greater than buffer.duration, just play entire file anyway rather than throw an error
        duration = duration <= this.buffer.duration - cueStart ? duration : this.buffer.duration;
      }
      // if it was paused, play at the pause position
      if (this._paused) {
        this.bufferSourceNode.start(time, this.pauseTime, duration);
        this._counterNode.start(time, this.pauseTime, duration);
      } else {
        this.bufferSourceNode.start(time, cueStart, duration);
        this._counterNode.start(time, cueStart, duration);
      }
      this._playing = true;
      this._paused = false;
      // add source to sources array, which is used in stopAll()
      this.bufferSourceNodes.push(this.bufferSourceNode);
      this.bufferSourceNode._arrayIndex = this.bufferSourceNodes.length - 1;
      // delete this.bufferSourceNode from the sources array when it is done playing:
      var clearOnEnd = function () {
        this._playing = false;
        this.removeEventListener('ended', clearOnEnd, false);
        // call the onended callback
        self._onended(self);
        self.bufferSourceNodes.forEach(function (n, i) {
          if (n._playing === false) {
            self.bufferSourceNodes.splice(i);
          }
        });
        if (self.bufferSourceNodes.length === 0) {
          self._playing = false;
        }
      };
      this.bufferSourceNode.onended = clearOnEnd;
    } else {
      throw 'not ready to play file, buffer has yet to load. Try preload()';
    }
    // if looping, will restart at original time
    this.bufferSourceNode.loop = this._looping;
    this._counterNode.loop = this._looping;
    if (this._looping === true) {
      cueEnd = duration ? duration : cueStart - 1e-15;
      this.bufferSourceNode.loopStart = cueStart;
      this.bufferSourceNode.loopEnd = cueEnd;
      this._counterNode.loopStart = cueStart;
      this._counterNode.loopEnd = cueEnd;
    }
  };
  /**
   *  p5.SoundFile has two play modes: <code>restart</code> and
   *  <code>sustain</code>. Play Mode determines what happens to a
   *  p5.SoundFile if it is triggered while in the middle of playback.
   *  In sustain mode, playback will continue simultaneous to the
   *  new playback. In restart mode, play() will stop playback
   *  and start over. With untilDone, a sound will play only if it's
   *  not already playing. Sustain is the default mode.
   *
   *  @method  playMode
   *  @param  {String} str 'restart' or 'sustain' or 'untilDone'
   *  @example
   *  <div><code>
   *  function setup(){
   *    mySound = loadSound('assets/Damscray_DancingTiger.mp3');
   *  }
   *  function mouseClicked() {
   *    mySound.playMode('sustain');
   *    mySound.play();
   *  }
   *  function keyPressed() {
   *    mySound.playMode('restart');
   *    mySound.play();
   *  }
   *
   * </code></div>
   */
  p5.SoundFile.prototype.playMode = function (str) {
    var s = str.toLowerCase();
    // if restart, stop all other sounds from playing
    if (s === 'restart' && this.buffer && this.bufferSourceNode) {
      for (var i = 0; i < this.bufferSourceNodes.length - 1; i++) {
        var now = p5sound.audiocontext.currentTime;
        this.bufferSourceNodes[i].stop(now);
      }
    }
    // set play mode to effect future playback
    if (s === 'restart' || s === 'sustain' || s === 'untildone') {
      this.mode = s;
    } else {
      throw 'Invalid play mode. Must be either "restart" or "sustain"';
    }
  };
  /**
   *  Pauses a file that is currently playing. If the file is not
   *  playing, then nothing will happen.
   *
   *  After pausing, .play() will resume from the paused
   *  position.
   *  If p5.SoundFile had been set to loop before it was paused,
   *  it will continue to loop after it is unpaused with .play().
   *
   *  @method pause
   *  @param {Number} [startTime] (optional) schedule event to occur
   *                               seconds from now
   *  @example
   *  <div><code>
   *  var soundFile;
   *
   *  function preload() {
   *    soundFormats('ogg', 'mp3');
   *    soundFile = loadSound('assets/Damscray_02.mp3');
   *  }
   *  function setup() {
   *    background(0, 255, 0);
   *    soundFile.setVolume(0.1);
   *    soundFile.loop();
   *  }
   *  function keyTyped() {
   *    if (key == 'p') {
   *      soundFile.pause();
   *      background(255, 0, 0);
   *    }
   *  }
   *
   *  function keyReleased() {
   *    if (key == 'p') {
   *      soundFile.play();
   *      background(0, 255, 0);
   *    }
   *  }
   *  </code>
   *  </div>
   */
  p5.SoundFile.prototype.pause = function (startTime) {
    var now = p5sound.audiocontext.currentTime;
    var time = startTime || 0;
    var pTime = time + now;
    if (this.isPlaying() && this.buffer && this.bufferSourceNode) {
      this.pauseTime = this.currentTime();
      this.bufferSourceNode.stop(pTime);
      this._counterNode.stop(pTime);
      this._paused = true;
      this._playing = false;
      this._pauseTime = this.currentTime();
    } else {
      this._pauseTime = 0;
    }
  };
  /**
   * Loop the p5.SoundFile. Accepts optional parameters to set the
   * playback rate, playback volume, loopStart, loopEnd.
   *
   * @method loop
   * @param {Number} [startTime] (optional) schedule event to occur
   *                             seconds from now
   * @param {Number} [rate]        (optional) playback rate
   * @param {Number} [amp]         (optional) playback volume
   * @param {Number} [cueLoopStart] (optional) startTime in seconds
   * @param {Number} [duration]  (optional) loop duration in seconds
   */
  p5.SoundFile.prototype.loop = function (startTime, rate, amp, loopStart, duration) {
    this._looping = true;
    this.play(startTime, rate, amp, loopStart, duration);
  };
  /**
   * Set a p5.SoundFile's looping flag to true or false. If the sound
   * is currently playing, this change will take effect when it
   * reaches the end of the current playback.
   *
   * @method setLoop
   * @param {Boolean} Boolean   set looping to true or false
   */
  p5.SoundFile.prototype.setLoop = function (bool) {
    if (bool === true) {
      this._looping = true;
    } else if (bool === false) {
      this._looping = false;
    } else {
      throw 'Error: setLoop accepts either true or false';
    }
    if (this.bufferSourceNode) {
      this.bufferSourceNode.loop = this._looping;
      this._counterNode.loop = this._looping;
    }
  };
  /**
   * Returns 'true' if a p5.SoundFile is currently looping and playing, 'false' if not.
   *
   * @method isLooping
   * @return {Boolean}
   */
  p5.SoundFile.prototype.isLooping = function () {
    if (!this.bufferSourceNode) {
      return false;
    }
    if (this._looping === true && this.isPlaying() === true) {
      return true;
    }
    return false;
  };
  /**
   *  Returns true if a p5.SoundFile is playing, false if not (i.e.
   *  paused or stopped).
   *
   *  @method isPlaying
   *  @return {Boolean}
   */
  p5.SoundFile.prototype.isPlaying = function () {
    return this._playing;
  };
  /**
   *  Returns true if a p5.SoundFile is paused, false if not (i.e.
   *  playing or stopped).
   *
   *  @method  isPaused
   *  @return {Boolean}
   */
  p5.SoundFile.prototype.isPaused = function () {
    return this._paused;
  };
  /**
   * Stop soundfile playback.
   *
   * @method stop
   * @param {Number} [startTime] (optional) schedule event to occur
   *                             in seconds from now
   */
  p5.SoundFile.prototype.stop = function (timeFromNow) {
    var time = timeFromNow || 0;
    if (this.mode === 'sustain' || this.mode === 'untildone') {
      this.stopAll(time);
      this._playing = false;
      this.pauseTime = 0;
      this._paused = false;
    } else if (this.buffer && this.bufferSourceNode) {
      var now = p5sound.audiocontext.currentTime;
      var t = time || 0;
      this.pauseTime = 0;
      this.bufferSourceNode.stop(now + t);
      this._counterNode.stop(now + t);
      this._playing = false;
      this._paused = false;
    }
  };
  /**
   *  Stop playback on all of this soundfile's sources.
   *  @private
   */
  p5.SoundFile.prototype.stopAll = function (_time) {
    var now = p5sound.audiocontext.currentTime;
    var time = _time || 0;
    if (this.buffer && this.bufferSourceNode) {
      for (var i = 0; i < this.bufferSourceNodes.length; i++) {
        if (typeof this.bufferSourceNodes[i] !== undefined) {
          try {
            this.bufferSourceNodes[i].onended = function () {
            };
            this.bufferSourceNodes[i].stop(now + time);
          } catch (e) {
          }
        }
      }
      this._counterNode.stop(now + time);
      this._onended(this);
    }
  };
  /**
   *  Multiply the output volume (amplitude) of a sound file
   *  between 0.0 (silence) and 1.0 (full volume).
   *  1.0 is the maximum amplitude of a digital sound, so multiplying
   *  by greater than 1.0 may cause digital distortion. To
   *  fade, provide a <code>rampTime</code> parameter. For more
   *  complex fades, see the Env class.
   *
   *  Alternately, you can pass in a signal source such as an
   *  oscillator to modulate the amplitude with an audio signal.
   *
   *  @method  setVolume
   *  @param {Number|Object} volume  Volume (amplitude) between 0.0
   *                                     and 1.0 or modulating signal/oscillator
   *  @param {Number} [rampTime]  Fade for t seconds
   *  @param {Number} [timeFromNow]  Schedule this event to happen at
   *                                 t seconds in the future
   */
  p5.SoundFile.prototype.setVolume = function (vol, _rampTime, _tFromNow) {
    if (typeof vol === 'number') {
      var rampTime = _rampTime || 0;
      var tFromNow = _tFromNow || 0;
      var now = p5sound.audiocontext.currentTime;
      var currentVol = this.output.gain.value;
      this.output.gain.cancelScheduledValues(now + tFromNow);
      this.output.gain.linearRampToValueAtTime(currentVol, now + tFromNow);
      this.output.gain.linearRampToValueAtTime(vol, now + tFromNow + rampTime);
    } else if (vol) {
      vol.connect(this.output.gain);
    } else {
      // return the Gain Node
      return this.output.gain;
    }
  };
  // same as setVolume, to match Processing Sound
  p5.SoundFile.prototype.amp = p5.SoundFile.prototype.setVolume;
  // these are the same thing
  p5.SoundFile.prototype.fade = p5.SoundFile.prototype.setVolume;
  p5.SoundFile.prototype.getVolume = function () {
    return this.output.gain.value;
  };
  /**
   * Set the stereo panning of a p5.sound object to
   * a floating point number between -1.0 (left) and 1.0 (right).
   * Default is 0.0 (center).
   *
   * @method pan
   * @param {Number} [panValue]     Set the stereo panner
   * @param {Number} [timeFromNow]  schedule this event to happen
   *                                 seconds from now
   * @example
   * <div><code>
   *
   *  var ball = {};
   *  var soundFile;
   *
   *  function setup() {
   *    soundFormats('ogg', 'mp3');
   *    soundFile = loadSound('assets/beatbox.mp3');
   *  }
   *
   *  function draw() {
   *    background(0);
   *    ball.x = constrain(mouseX, 0, width);
   *    ellipse(ball.x, height/2, 20, 20)
   *  }
   *
   *  function mousePressed(){
   *    // map the ball's x location to a panning degree
   *    // between -1.0 (left) and 1.0 (right)
   *    var panning = map(ball.x, 0., width,-1.0, 1.0);
   *    soundFile.pan(panning);
   *    soundFile.play();
   *  }
   *  </div></code>
   */
  p5.SoundFile.prototype.pan = function (pval, tFromNow) {
    this.panPosition = pval;
    this.panner.pan(pval, tFromNow);
  };
  /**
   * Returns the current stereo pan position (-1.0 to 1.0)
   *
   * @method getPan
   * @return {Number} Returns the stereo pan setting of the Oscillator
   *                          as a number between -1.0 (left) and 1.0 (right).
   *                          0.0 is center and default.
   */
  p5.SoundFile.prototype.getPan = function () {
    return this.panPosition;
  };
  /**
   *  Set the playback rate of a sound file. Will change the speed and the pitch.
   *  Values less than zero will reverse the audio buffer.
   *
   *  @method rate
   *  @param {Number} [playbackRate]     Set the playback rate. 1.0 is normal,
   *                                     .5 is half-speed, 2.0 is twice as fast.
   *                                     Values less than zero play backwards.
   *  @example
   *  <div><code>
   *  var song;
   *
   *  function preload() {
   *    song = loadSound('assets/Damscray_DancingTiger.mp3');
   *  }
   *
   *  function setup() {
   *    song.loop();
   *  }
   *
   *  function draw() {
   *    background(200);
   *
   *    // Set the rate to a range between 0.1 and 4
   *    // Changing the rate also alters the pitch
   *    var speed = map(mouseY, 0.1, height, 0, 2);
   *    speed = constrain(speed, 0.01, 4);
   *    song.rate(speed);
   *
   *    // Draw a circle to show what is going on
   *    stroke(0);
   *    fill(51, 100);
   *    ellipse(mouseX, 100, 48, 48);
   *  }
   *
   * </code>
   * </div>
   *
   */
  p5.SoundFile.prototype.rate = function (playbackRate) {
    var reverse = false;
    if (typeof playbackRate === 'undefined') {
      return this.playbackRate;
    }
    this.playbackRate = playbackRate;
    if (playbackRate === 0) {
      playbackRate = 1e-13;
    } else if (playbackRate < 0 && !this.reversed) {
      playbackRate = Math.abs(playbackRate);
      reverse = true;
    } else if (playbackRate > 0 && this.reversed) {
      reverse = true;
    }
    if (this.bufferSourceNode) {
      var now = p5sound.audiocontext.currentTime;
      this.bufferSourceNode.playbackRate.cancelScheduledValues(now);
      this.bufferSourceNode.playbackRate.linearRampToValueAtTime(Math.abs(playbackRate), now);
      this._counterNode.playbackRate.cancelScheduledValues(now);
      this._counterNode.playbackRate.linearRampToValueAtTime(Math.abs(playbackRate), now);
    }
    if (reverse) {
      this.reverseBuffer();
    }
    return this.playbackRate;
  };
  // TO DO: document this
  p5.SoundFile.prototype.setPitch = function (num) {
    var newPlaybackRate = midiToFreq(num) / midiToFreq(60);
    this.rate(newPlaybackRate);
  };
  p5.SoundFile.prototype.getPlaybackRate = function () {
    return this.playbackRate;
  };
  /**
   * Returns the duration of a sound file in seconds.
   *
   * @method duration
   * @return {Number} The duration of the soundFile in seconds.
   */
  p5.SoundFile.prototype.duration = function () {
    // Return Duration
    if (this.buffer) {
      return this.buffer.duration;
    } else {
      return 0;
    }
  };
  /**
   * Return the current position of the p5.SoundFile playhead, in seconds.
   * Time is relative to the normal buffer direction, so if `reverseBuffer`
   * has been called, currentTime will count backwards.
   *
   * @method currentTime
   * @return {Number}   currentTime of the soundFile in seconds.
   */
  p5.SoundFile.prototype.currentTime = function () {
    return this.reversed ? Math.abs(this._lastPos - this.buffer.length) / ac.sampleRate : this._lastPos / ac.sampleRate;
  };
  /**
   * Move the playhead of the song to a position, in seconds. Start timing
   * and playback duration. If none are given, will reset the file to play
   * entire duration from start to finish.
   *
   * @method jump
   * @param {Number} cueTime    cueTime of the soundFile in seconds.
   * @param {Number} duration    duration in seconds.
   */
  p5.SoundFile.prototype.jump = function (cueTime, duration) {
    if (cueTime < 0 || cueTime > this.buffer.duration) {
      throw 'jump time out of range';
    }
    if (duration > this.buffer.duration - cueTime) {
      throw 'end time out of range';
    }
    var cTime = cueTime || 0;
    var dur = duration || undefined;
    if (this.isPlaying()) {
      this.stop(0);
    }
    this.play(0, this.playbackRate, this.output.gain.value, cTime, dur);
  };
  /**
  * Return the number of channels in a sound file.
  * For example, Mono = 1, Stereo = 2.
  *
  * @method channels
  * @return {Number} [channels]
  */
  p5.SoundFile.prototype.channels = function () {
    return this.buffer.numberOfChannels;
  };
  /**
  * Return the sample rate of the sound file.
  *
  * @method sampleRate
  * @return {Number} [sampleRate]
  */
  p5.SoundFile.prototype.sampleRate = function () {
    return this.buffer.sampleRate;
  };
  /**
  * Return the number of samples in a sound file.
  * Equal to sampleRate * duration.
  *
  * @method frames
  * @return {Number} [sampleCount]
  */
  p5.SoundFile.prototype.frames = function () {
    return this.buffer.length;
  };
  /**
   * Returns an array of amplitude peaks in a p5.SoundFile that can be
   * used to draw a static waveform. Scans through the p5.SoundFile's
   * audio buffer to find the greatest amplitudes. Accepts one
   * parameter, 'length', which determines size of the array.
   * Larger arrays result in more precise waveform visualizations.
   *
   * Inspired by Wavesurfer.js.
   *
   * @method  getPeaks
   * @params {Number} [length] length is the size of the returned array.
   *                          Larger length results in more precision.
   *                          Defaults to 5*width of the browser window.
   * @returns {Float32Array} Array of peaks.
   */
  p5.SoundFile.prototype.getPeaks = function (length) {
    if (this.buffer) {
      // set length to window's width if no length is provided
      if (!length) {
        length = window.width * 5;
      }
      if (this.buffer) {
        var buffer = this.buffer;
        var sampleSize = buffer.length / length;
        var sampleStep = ~~(sampleSize / 10) || 1;
        var channels = buffer.numberOfChannels;
        var peaks = new Float32Array(Math.round(length));
        for (var c = 0; c < channels; c++) {
          var chan = buffer.getChannelData(c);
          for (var i = 0; i < length; i++) {
            var start = ~~(i * sampleSize);
            var end = ~~(start + sampleSize);
            var max = 0;
            for (var j = start; j < end; j += sampleStep) {
              var value = chan[j];
              if (value > max) {
                max = value;
              } else if (-value > max) {
                max = value;
              }
            }
            if (c === 0 || Math.abs(max) > peaks[i]) {
              peaks[i] = max;
            }
          }
        }
        return peaks;
      }
    } else {
      throw 'Cannot load peaks yet, buffer is not loaded';
    }
  };
  /**
   *  Reverses the p5.SoundFile's buffer source.
   *  Playback must be handled separately (see example).
   *
   *  @method  reverseBuffer
   *  @example
   *  <div><code>
   *  var drum;
   *
   *  function preload() {
   *    drum = loadSound('assets/drum.mp3');
   *  }
   *
   *  function setup() {
   *    drum.reverseBuffer();
   *    drum.play();
   *  }
   *
   * </code>
   * </div>
   */
  p5.SoundFile.prototype.reverseBuffer = function () {
    if (this.buffer) {
      var currentPos = this._lastPos / ac.sampleRate;
      var curVol = this.getVolume();
      this.setVolume(0, 0.001);
      const numChannels = this.buffer.numberOfChannels;
      for (var i = 0; i < numChannels; i++) {
        this.buffer.getChannelData(i).reverse();
      }
      // set reversed flag
      this.reversed = !this.reversed;
      if (currentPos) {
        this.jump(this.duration() - currentPos);
      }
      this.setVolume(curVol, 0.001);
    } else {
      throw 'SoundFile is not done loading';
    }
  };
  /**
   *  Schedule an event to be called when the soundfile
   *  reaches the end of a buffer. If the soundfile is
   *  playing through once, this will be called when it
   *  ends. If it is looping, it will be called when
   *  stop is called.
   *
   *  @method  onended
   *  @param  {Function} callback function to call when the
   *                              soundfile has ended.
   */
  p5.SoundFile.prototype.onended = function (callback) {
    this._onended = callback;
    return this;
  };
  p5.SoundFile.prototype.add = function () {
  };
  p5.SoundFile.prototype.dispose = function () {
    var now = p5sound.audiocontext.currentTime;
    // remove reference to soundfile
    var index = p5sound.soundArray.indexOf(this);
    p5sound.soundArray.splice(index, 1);
    this.stop(now);
    if (this.buffer && this.bufferSourceNode) {
      for (var i = 0; i < this.bufferSourceNodes.length - 1; i++) {
        if (this.bufferSourceNodes[i] !== null) {
          this.bufferSourceNodes[i].disconnect();
          try {
            this.bufferSourceNodes[i].stop(now);
          } catch (e) {
            console.warning('no buffer source node to dispose');
          }
          this.bufferSourceNodes[i] = null;
        }
      }
      if (this.isPlaying()) {
        try {
          this._counterNode.stop(now);
        } catch (e) {
          console.log(e);
        }
        this._counterNode = null;
      }
    }
    if (this.output) {
      this.output.disconnect();
      this.output = null;
    }
    if (this.panner) {
      this.panner.disconnect();
      this.panner = null;
    }
  };
  /**
   * Connects the output of a p5sound object to input of another
   * p5.sound object. For example, you may connect a p5.SoundFile to an
   * FFT or an Effect. If no parameter is given, it will connect to
   * the master output. Most p5sound objects connect to the master
   * output when they are created.
   *
   * @method connect
   * @param {Object} [object] Audio object that accepts an input
   */
  p5.SoundFile.prototype.connect = function (unit) {
    if (!unit) {
      this.panner.connect(p5sound.input);
    } else {
      if (unit.hasOwnProperty('input')) {
        this.panner.connect(unit.input);
      } else {
        this.panner.connect(unit);
      }
    }
  };
  /**
   * Disconnects the output of this p5sound object.
   *
   * @method disconnect
   */
  p5.SoundFile.prototype.disconnect = function () {
    this.panner.disconnect();
  };
  /**
   */
  p5.SoundFile.prototype.getLevel = function () {
    console.warn('p5.SoundFile.getLevel has been removed from the library. Use p5.Amplitude instead');
  };
  /**
   *  Reset the source for this SoundFile to a
   *  new path (URL).
   *
   *  @method  setPath
   *  @param {String}   path     path to audio file
   *  @param {Function} callback Callback
   */
  p5.SoundFile.prototype.setPath = function (p, callback) {
    var path = p5.prototype._checkFileFormats(p);
    this.url = path;
    this.load(callback);
  };
  /**
   *  Replace the current Audio Buffer with a new Buffer.
   *
   *  @method setBuffer
   *  @param {Array} buf Array of Float32 Array(s). 2 Float32 Arrays
   *                     will create a stereo source. 1 will create
   *                     a mono source.
   */
  p5.SoundFile.prototype.setBuffer = function (buf) {
    var numChannels = buf.length;
    var size = buf[0].length;
    var newBuffer = ac.createBuffer(numChannels, size, ac.sampleRate);
    if (!(buf[0] instanceof Float32Array)) {
      buf[0] = new Float32Array(buf[0]);
    }
    for (var channelNum = 0; channelNum < numChannels; channelNum++) {
      var channel = newBuffer.getChannelData(channelNum);
      channel.set(buf[channelNum]);
    }
    this.buffer = newBuffer;
    // set numbers of channels on input to the panner
    this.panner.inputChannels(numChannels);
  };
  //////////////////////////////////////////////////
  // script processor node with an empty buffer to help
  // keep a sample-accurate position in playback buffer.
  // Inspired by Chinmay Pendharkar's technique for Sonoport --> http://bit.ly/1HwdCsV
  // Copyright [2015] [Sonoport (Asia) Pte. Ltd.],
  // Licensed under the Apache License http://apache.org/licenses/LICENSE-2.0
  ////////////////////////////////////////////////////////////////////////////////////
  var _createCounterBuffer = function (buffer) {
    const len = buffer.length;
    const audioBuf = ac.createBuffer(1, buffer.length, ac.sampleRate);
    const arrayBuffer = audioBuf.getChannelData(0);
    for (var index = 0; index < len; index++) {
      arrayBuffer[index] = index;
    }
    return audioBuf;
  };
  // initialize counterNode, set its initial buffer and playbackRate
  p5.SoundFile.prototype._initCounterNode = function () {
    var self = this;
    var now = ac.currentTime;
    var cNode = ac.createBufferSource();
    // dispose of scope node if it already exists
    if (self._scopeNode) {
      self._scopeNode.disconnect();
      delete self._scopeNode.onaudioprocess;
      delete self._scopeNode;
    }
    self._scopeNode = ac.createScriptProcessor(256, 1, 1);
    // create counter buffer of the same length as self.buffer
    cNode.buffer = _createCounterBuffer(self.buffer);
    cNode.playbackRate.setValueAtTime(self.playbackRate, now);
    cNode.connect(self._scopeNode);
    self._scopeNode.connect(p5.soundOut._silentNode);
    self._scopeNode.onaudioprocess = function (processEvent) {
      var inputBuffer = processEvent.inputBuffer.getChannelData(0);
      self._lastPos = inputBuffer[inputBuffer.length - 1] || 0;
      // do any callbacks that have been scheduled
      self._onTimeUpdate(self._lastPos);
    };
    return cNode;
  };
  // initialize sourceNode, set its initial buffer and playbackRate
  p5.SoundFile.prototype._initSourceNode = function () {
    var bufferSourceNode = ac.createBufferSource();
    bufferSourceNode.buffer = this.buffer;
    bufferSourceNode.playbackRate.value = this.playbackRate;
    bufferSourceNode.connect(this.output);
    return bufferSourceNode;
  };
  /**
   *  processPeaks returns an array of timestamps where it thinks there is a beat.
   *
   *  This is an asynchronous function that processes the soundfile in an offline audio context,
   *  and sends the results to your callback function.
   *
   *  The process involves running the soundfile through a lowpass filter, and finding all of the
   *  peaks above the initial threshold. If the total number of peaks are below the minimum number of peaks,
   *  it decreases the threshold and re-runs the analysis until either minPeaks or minThreshold are reached.
   *
   *  @method  processPeaks
   *  @param  {Function} callback       a function to call once this data is returned
   *  @param  {Number}   [initThreshold] initial threshold defaults to 0.9
   *  @param  {Number}   [minThreshold]   minimum threshold defaults to 0.22
   *  @param  {Number}   [minPeaks]       minimum number of peaks defaults to 200
   *  @return {Array}                  Array of timestamped peaks
   */
  p5.SoundFile.prototype.processPeaks = function (callback, _initThreshold, _minThreshold, _minPeaks) {
    var bufLen = this.buffer.length;
    var sampleRate = this.buffer.sampleRate;
    var buffer = this.buffer;
    var allPeaks = [];
    var initialThreshold = _initThreshold || 0.9, threshold = initialThreshold, minThreshold = _minThreshold || 0.22, minPeaks = _minPeaks || 200;
    // Create offline context
    var offlineContext = new window.OfflineAudioContext(1, bufLen, sampleRate);
    // create buffer source
    var source = offlineContext.createBufferSource();
    source.buffer = buffer;
    // Create filter. TO DO: allow custom setting of filter
    var filter = offlineContext.createBiquadFilter();
    filter.type = 'lowpass';
    source.connect(filter);
    filter.connect(offlineContext.destination);
    // start playing at time:0
    source.start(0);
    offlineContext.startRendering();
    // Render the song
    // act on the result
    offlineContext.oncomplete = function (e) {
      var filteredBuffer = e.renderedBuffer;
      var bufferData = filteredBuffer.getChannelData(0);
      // step 1:
      // create Peak instances, add them to array, with strength and sampleIndex
      do {
        allPeaks = getPeaksAtThreshold(bufferData, threshold);
        threshold -= 0.005;
      } while (Object.keys(allPeaks).length < minPeaks && threshold >= minThreshold);
      // step 2:
      // find intervals for each peak in the sampleIndex, add tempos array
      var intervalCounts = countIntervalsBetweenNearbyPeaks(allPeaks);
      // step 3: find top tempos
      var groups = groupNeighborsByTempo(intervalCounts, filteredBuffer.sampleRate);
      // sort top intervals
      var topTempos = groups.sort(function (intA, intB) {
        return intB.count - intA.count;
      }).splice(0, 5);
      // set this SoundFile's tempo to the top tempo ??
      this.tempo = topTempos[0].tempo;
      // step 4:
      // new array of peaks at top tempo within a bpmVariance
      var bpmVariance = 5;
      var tempoPeaks = getPeaksAtTopTempo(allPeaks, topTempos[0].tempo, filteredBuffer.sampleRate, bpmVariance);
      callback(tempoPeaks);
    };
  };
  // process peaks
  var Peak = function (amp, i) {
    this.sampleIndex = i;
    this.amplitude = amp;
    this.tempos = [];
    this.intervals = [];
  };
  // 1. for processPeaks() Function to identify peaks above a threshold
  // returns an array of peak indexes as frames (samples) of the original soundfile
  function getPeaksAtThreshold(data, threshold) {
    var peaksObj = {};
    var length = data.length;
    for (var i = 0; i < length; i++) {
      if (data[i] > threshold) {
        var amp = data[i];
        var peak = new Peak(amp, i);
        peaksObj[i] = peak;
        // Skip forward ~ 1/8s to get past this peak.
        i += 6000;
      }
      i++;
    }
    return peaksObj;
  }
  // 2. for processPeaks()
  function countIntervalsBetweenNearbyPeaks(peaksObj) {
    var intervalCounts = [];
    var peaksArray = Object.keys(peaksObj).sort();
    for (var index = 0; index < peaksArray.length; index++) {
      // find intervals in comparison to nearby peaks
      for (var i = 0; i < 10; i++) {
        var startPeak = peaksObj[peaksArray[index]];
        var endPeak = peaksObj[peaksArray[index + i]];
        if (startPeak && endPeak) {
          var startPos = startPeak.sampleIndex;
          var endPos = endPeak.sampleIndex;
          var interval = endPos - startPos;
          // add a sample interval to the startPeak in the allPeaks array
          if (interval > 0) {
            startPeak.intervals.push(interval);
          }
          // tally the intervals and return interval counts
          var foundInterval = intervalCounts.some(function (intervalCount) {
            if (intervalCount.interval === interval) {
              intervalCount.count++;
              return intervalCount;
            }
          });
          // store with JSON like formatting
          if (!foundInterval) {
            intervalCounts.push({
              interval: interval,
              count: 1
            });
          }
        }
      }
    }
    return intervalCounts;
  }
  // 3. for processPeaks --> find tempo
  function groupNeighborsByTempo(intervalCounts, sampleRate) {
    var tempoCounts = [];
    intervalCounts.forEach(function (intervalCount) {
      try {
        // Convert an interval to tempo
        var theoreticalTempo = Math.abs(60 / (intervalCount.interval / sampleRate));
        theoreticalTempo = mapTempo(theoreticalTempo);
        var foundTempo = tempoCounts.some(function (tempoCount) {
          if (tempoCount.tempo === theoreticalTempo)
            return tempoCount.count += intervalCount.count;
        });
        if (!foundTempo) {
          if (isNaN(theoreticalTempo)) {
            return;
          }
          tempoCounts.push({
            tempo: Math.round(theoreticalTempo),
            count: intervalCount.count
          });
        }
      } catch (e) {
        throw e;
      }
    });
    return tempoCounts;
  }
  // 4. for processPeaks - get peaks at top tempo
  function getPeaksAtTopTempo(peaksObj, tempo, sampleRate, bpmVariance) {
    var peaksAtTopTempo = [];
    var peaksArray = Object.keys(peaksObj).sort();
    // TO DO: filter out peaks that have the tempo and return
    for (var i = 0; i < peaksArray.length; i++) {
      var key = peaksArray[i];
      var peak = peaksObj[key];
      for (var j = 0; j < peak.intervals.length; j++) {
        var intervalBPM = Math.round(Math.abs(60 / (peak.intervals[j] / sampleRate)));
        intervalBPM = mapTempo(intervalBPM);
        if (Math.abs(intervalBPM - tempo) < bpmVariance) {
          // convert sampleIndex to seconds
          peaksAtTopTempo.push(peak.sampleIndex / sampleRate);
        }
      }
    }
    // filter out peaks that are very close to each other
    peaksAtTopTempo = peaksAtTopTempo.filter(function (peakTime, index, arr) {
      var dif = arr[index + 1] - peakTime;
      if (dif > 0.01) {
        return true;
      }
    });
    return peaksAtTopTempo;
  }
  // helper function for processPeaks
  function mapTempo(theoreticalTempo) {
    // these scenarios create infinite while loop
    if (!isFinite(theoreticalTempo) || theoreticalTempo === 0) {
      return;
    }
    // Adjust the tempo to fit within the 90-180 BPM range
    while (theoreticalTempo < 90)
      theoreticalTempo *= 2;
    while (theoreticalTempo > 180 && theoreticalTempo > 90)
      theoreticalTempo /= 2;
    return theoreticalTempo;
  }
  /*** SCHEDULE EVENTS ***/
  // Cue inspired by JavaScript setTimeout, and the
  // Tone.js Transport Timeline Event, MIT License Yotam Mann 2015 tonejs.org
  var Cue = function (callback, time, id, val) {
    this.callback = callback;
    this.time = time;
    this.id = id;
    this.val = val;
  };
  /**
   *  Schedule events to trigger every time a MediaElement
   *  (audio/video) reaches a playback cue point.
   *
   *  Accepts a callback function, a time (in seconds) at which to trigger
   *  the callback, and an optional parameter for the callback.
   *
   *  Time will be passed as the first parameter to the callback function,
   *  and param will be the second parameter.
   *
   *
   *  @method  addCue
   *  @param {Number}   time     Time in seconds, relative to this media
   *                             element's playback. For example, to trigger
   *                             an event every time playback reaches two
   *                             seconds, pass in the number 2. This will be
   *                             passed as the first parameter to
   *                             the callback function.
   *  @param {Function} callback Name of a function that will be
   *                             called at the given time. The callback will
   *                             receive time and (optionally) param as its
   *                             two parameters.
   *  @param {Object} [value]    An object to be passed as the
   *                             second parameter to the
   *                             callback function.
   *  @return {Number} id ID of this cue,
   *                      useful for removeCue(id)
   *  @example
   *  <div><code>
   *  function setup() {
   *    background(0);
   *    noStroke();
   *    fill(255);
   *    textAlign(CENTER);
   *    text('click to play', width/2, height/2);
   *
   *    mySound = loadSound('assets/beat.mp3');
   *
   *    // schedule calls to changeText
   *    mySound.addCue(0.50, changeText, "hello" );
   *    mySound.addCue(1.00, changeText, "p5" );
   *    mySound.addCue(1.50, changeText, "what" );
   *    mySound.addCue(2.00, changeText, "do" );
   *    mySound.addCue(2.50, changeText, "you" );
   *    mySound.addCue(3.00, changeText, "want" );
   *    mySound.addCue(4.00, changeText, "to" );
   *    mySound.addCue(5.00, changeText, "make" );
   *    mySound.addCue(6.00, changeText, "?" );
   *  }
   *
   *  function changeText(val) {
   *    background(0);
   *    text(val, width/2, height/2);
   *  }
   *
   *  function mouseClicked() {
   *    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
   *      if (mySound.isPlaying() ) {
   *        mySound.stop();
   *      } else {
   *        mySound.play();
   *      }
   *    }
   *  }
   *  </code></div>
   */
  p5.SoundFile.prototype.addCue = function (time, callback, val) {
    var id = this._cueIDCounter++;
    var cue = new Cue(callback, time, id, val);
    this._cues.push(cue);
    // if (!this.elt.ontimeupdate) {
    //   this.elt.ontimeupdate = this._onTimeUpdate.bind(this);
    // }
    return id;
  };
  /**
   *  Remove a callback based on its ID. The ID is returned by the
   *  addCue method.
   *
   *  @method removeCue
   *  @param  {Number} id ID of the cue, as returned by addCue
   */
  p5.SoundFile.prototype.removeCue = function (id) {
    var cueLength = this._cues.length;
    for (var i = 0; i < cueLength; i++) {
      var cue = this._cues[i];
      if (cue.id === id) {
        this.cues.splice(i, 1);
      }
    }
    if (this._cues.length === 0) {
    }
  };
  /**
   *  Remove all of the callbacks that had originally been scheduled
   *  via the addCue method.
   *
   *  @method  clearCues
   */
  p5.SoundFile.prototype.clearCues = function () {
    this._cues = [];
  };
  // private method that checks for cues to be fired if events
  // have been scheduled using addCue(callback, time).
  p5.SoundFile.prototype._onTimeUpdate = function (position) {
    var playbackTime = position / this.buffer.sampleRate;
    var cueLength = this._cues.length;
    for (var i = 0; i < cueLength; i++) {
      var cue = this._cues[i];
      var callbackTime = cue.time;
      var val = cue.val;
      if (this._prevTime < callbackTime && callbackTime <= playbackTime) {
        // pass the scheduled callbackTime as parameter to the callback
        cue.callback(val);
      }
    }
    this._prevTime = playbackTime;
  };
}(sndcore, errorHandler, master, helpers);
var amplitude;
'use strict';
amplitude = function () {
  var p5sound = master;
  /**
   *  Amplitude measures volume between 0.0 and 1.0.
   *  Listens to all p5sound by default, or use setInput()
   *  to listen to a specific sound source. Accepts an optional
   *  smoothing value, which defaults to 0.
   *
   *  @class p5.Amplitude
   *  @constructor
   *  @param {Number} [smoothing] between 0.0 and .999 to smooth
   *                             amplitude readings (defaults to 0)
   *  @example
   *  <div><code>
   *  var sound, amplitude, cnv;
   *
   *  function preload(){
   *    sound = loadSound('assets/beat.mp3');
   *  }
   *  function setup() {
   *    cnv = createCanvas(100,100);
   *    amplitude = new p5.Amplitude();
   *
   *    // start / stop the sound when canvas is clicked
   *    cnv.mouseClicked(function() {
   *      if (sound.isPlaying() ){
   *        sound.stop();
   *      } else {
   *        sound.play();
   *      }
   *    });
   *  }
   *  function draw() {
   *    background(0);
   *    fill(255);
   *    var level = amplitude.getLevel();
   *    var size = map(level, 0, 1, 0, 200);
   *    ellipse(width/2, height/2, size, size);
   *  }
   *
   *  </code></div>
   */
  p5.Amplitude = function (smoothing) {
    // Set to 2048 for now. In future iterations, this should be inherited or parsed from p5sound's default
    this.bufferSize = 2048;
    // set audio context
    this.audiocontext = p5sound.audiocontext;
    this.processor = this.audiocontext.createScriptProcessor(this.bufferSize, 2, 1);
    // for connections
    this.input = this.processor;
    this.output = this.audiocontext.createGain();
    // smoothing defaults to 0
    this.smoothing = smoothing || 0;
    // the variables to return
    this.volume = 0;
    this.average = 0;
    this.stereoVol = [
      0,
      0
    ];
    this.stereoAvg = [
      0,
      0
    ];
    this.stereoVolNorm = [
      0,
      0
    ];
    this.volMax = 0.001;
    this.normalize = false;
    this.processor.onaudioprocess = this._audioProcess.bind(this);
    this.processor.connect(this.output);
    this.output.gain.value = 0;
    // this may only be necessary because of a Chrome bug
    this.output.connect(this.audiocontext.destination);
    // connect to p5sound master output by default, unless set by input()
    p5sound.meter.connect(this.processor);
    // add this p5.SoundFile to the soundArray
    p5sound.soundArray.push(this);
  };
  /**
   *  Connects to the p5sound instance (master output) by default.
   *  Optionally, you can pass in a specific source (i.e. a soundfile).
   *
   *  @method setInput
   *  @param {soundObject|undefined} [snd] set the sound source
   *                                       (optional, defaults to
   *                                       master output)
   *  @param {Number|undefined} [smoothing] a range between 0.0 and 1.0
   *                                        to smooth amplitude readings
   *  @example
   *  <div><code>
   *  function preload(){
   *    sound1 = loadSound('assets/beat.mp3');
   *    sound2 = loadSound('assets/drum.mp3');
   *  }
   *  function setup(){
   *    amplitude = new p5.Amplitude();
   *    sound1.play();
   *    sound2.play();
   *    amplitude.setInput(sound2);
   *  }
   *  function draw() {
   *    background(0);
   *    fill(255);
   *    var level = amplitude.getLevel();
   *    var size = map(level, 0, 1, 0, 200);
   *    ellipse(width/2, height/2, size, size);
   *  }
   *  function mouseClicked(){
   *    sound1.stop();
   *    sound2.stop();
   *  }
   *  </code></div>
   */
  p5.Amplitude.prototype.setInput = function (source, smoothing) {
    p5sound.meter.disconnect();
    if (smoothing) {
      this.smoothing = smoothing;
    }
    // connect to the master out of p5s instance if no snd is provided
    if (source == null) {
      console.log('Amplitude input source is not ready! Connecting to master output instead');
      p5sound.meter.connect(this.processor);
    } else if (source instanceof p5.Signal) {
      source.output.connect(this.processor);
    } else if (source) {
      source.connect(this.processor);
      this.processor.disconnect();
      this.processor.connect(this.output);
    } else {
      p5sound.meter.connect(this.processor);
    }
  };
  p5.Amplitude.prototype.connect = function (unit) {
    if (unit) {
      if (unit.hasOwnProperty('input')) {
        this.output.connect(unit.input);
      } else {
        this.output.connect(unit);
      }
    } else {
      this.output.connect(this.panner.connect(p5sound.input));
    }
  };
  p5.Amplitude.prototype.disconnect = function () {
    this.output.disconnect();
  };
  // TO DO make this stereo / dependent on # of audio channels
  p5.Amplitude.prototype._audioProcess = function (event) {
    for (var channel = 0; channel < event.inputBuffer.numberOfChannels; channel++) {
      var inputBuffer = event.inputBuffer.getChannelData(channel);
      var bufLength = inputBuffer.length;
      var total = 0;
      var sum = 0;
      var x;
      for (var i = 0; i < bufLength; i++) {
        x = inputBuffer[i];
        if (this.normalize) {
          total += Math.max(Math.min(x / this.volMax, 1), -1);
          sum += Math.max(Math.min(x / this.volMax, 1), -1) * Math.max(Math.min(x / this.volMax, 1), -1);
        } else {
          total += x;
          sum += x * x;
        }
      }
      var average = total / bufLength;
      // ... then take the square root of the sum.
      var rms = Math.sqrt(sum / bufLength);
      this.stereoVol[channel] = Math.max(rms, this.stereoVol[channel] * this.smoothing);
      this.stereoAvg[channel] = Math.max(average, this.stereoVol[channel] * this.smoothing);
      this.volMax = Math.max(this.stereoVol[channel], this.volMax);
    }
    // add volume from all channels together
    var self = this;
    var volSum = this.stereoVol.reduce(function (previousValue, currentValue, index) {
      self.stereoVolNorm[index - 1] = Math.max(Math.min(self.stereoVol[index - 1] / self.volMax, 1), 0);
      self.stereoVolNorm[index] = Math.max(Math.min(self.stereoVol[index] / self.volMax, 1), 0);
      return previousValue + currentValue;
    });
    // volume is average of channels
    this.volume = volSum / this.stereoVol.length;
    // normalized value
    this.volNorm = Math.max(Math.min(this.volume / this.volMax, 1), 0);
  };
  /**
   *  Returns a single Amplitude reading at the moment it is called.
   *  For continuous readings, run in the draw loop.
   *
   *  @method getLevel
   *  @param {Number} [channel] Optionally return only channel 0 (left) or 1 (right)
   *  @return {Number}       Amplitude as a number between 0.0 and 1.0
   *  @example
   *  <div><code>
   *  function preload(){
   *    sound = loadSound('assets/beat.mp3');
   *  }
   *  function setup() {
   *    amplitude = new p5.Amplitude();
   *    sound.play();
   *  }
   *  function draw() {
   *    background(0);
   *    fill(255);
   *    var level = amplitude.getLevel();
   *    var size = map(level, 0, 1, 0, 200);
   *    ellipse(width/2, height/2, size, size);
   *  }
   *  function mouseClicked(){
   *    sound.stop();
   *  }
   *  </code></div>
   */
  p5.Amplitude.prototype.getLevel = function (channel) {
    if (typeof channel !== 'undefined') {
      if (this.normalize) {
        return this.stereoVolNorm[channel];
      } else {
        return this.stereoVol[channel];
      }
    } else if (this.normalize) {
      return this.volNorm;
    } else {
      return this.volume;
    }
  };
  /**
   * Determines whether the results of Amplitude.process() will be
   * Normalized. To normalize, Amplitude finds the difference the
   * loudest reading it has processed and the maximum amplitude of
   * 1.0. Amplitude adds this difference to all values to produce
   * results that will reliably map between 0.0 and 1.0. However,
   * if a louder moment occurs, the amount that Normalize adds to
   * all the values will change. Accepts an optional boolean parameter
   * (true or false). Normalizing is off by default.
   *
   * @method toggleNormalize
   * @param {boolean} [boolean] set normalize to true (1) or false (0)
   */
  p5.Amplitude.prototype.toggleNormalize = function (bool) {
    if (typeof bool === 'boolean') {
      this.normalize = bool;
    } else {
      this.normalize = !this.normalize;
    }
  };
  /**
   *  Smooth Amplitude analysis by averaging with the last analysis
   *  frame. Off by default.
   *
   *  @method smooth
   *  @param {Number} set smoothing from 0.0 <= 1
   */
  p5.Amplitude.prototype.smooth = function (s) {
    if (s >= 0 && s < 1) {
      this.smoothing = s;
    } else {
      console.log('Error: smoothing must be between 0 and 1');
    }
  };
  p5.Amplitude.prototype.dispose = function () {
    // remove reference from soundArray
    var index = p5sound.soundArray.indexOf(this);
    p5sound.soundArray.splice(index, 1);
    this.input.disconnect();
    this.output.disconnect();
    this.input = this.processor = undefined;
    this.output = undefined;
  };
}(master);
var fft;
'use strict';
fft = function () {
  var p5sound = master;
  /**
   *  <p>FFT (Fast Fourier Transform) is an analysis algorithm that
   *  isolates individual
   *  <a href="https://en.wikipedia.org/wiki/Audio_frequency">
   *  audio frequencies</a> within a waveform.</p>
   *
   *  <p>Once instantiated, a p5.FFT object can return an array based on
   *  two types of analyses: <br> • <code>FFT.waveform()</code> computes
   *  amplitude values along the time domain. The array indices correspond
   *  to samples across a brief moment in time. Each value represents
   *  amplitude of the waveform at that sample of time.<br>
   *  • <code>FFT.analyze() </code> computes amplitude values along the
   *  frequency domain. The array indices correspond to frequencies (i.e.
   *  pitches), from the lowest to the highest that humans can hear. Each
   *  value represents amplitude at that slice of the frequency spectrum.
   *  Use with <code>getEnergy()</code> to measure amplitude at specific
   *  frequencies, or within a range of frequencies. </p>
   *
   *  <p>FFT analyzes a very short snapshot of sound called a sample
   *  buffer. It returns an array of amplitude measurements, referred
   *  to as <code>bins</code>. The array is 1024 bins long by default.
   *  You can change the bin array length, but it must be a power of 2
   *  between 16 and 1024 in order for the FFT algorithm to function
   *  correctly. The actual size of the FFT buffer is twice the
   *  number of bins, so given a standard sample rate, the buffer is
   *  2048/44100 seconds long.</p>
   *
   *
   *  @class p5.FFT
   *  @constructor
   *  @param {Number} [smoothing]   Smooth results of Freq Spectrum.
   *                                0.0 < smoothing < 1.0.
   *                                Defaults to 0.8.
   *  @param {Number} [bins]    Length of resulting array.
   *                            Must be a power of two between
   *                            16 and 1024. Defaults to 1024.
   *  @example
   *  <div><code>
   *  function preload(){
   *    sound = loadSound('assets/Damscray_DancingTiger.mp3');
   *  }
   *
   *  function setup(){
   *    var cnv = createCanvas(100,100);
   *    cnv.mouseClicked(togglePlay);
   *    fft = new p5.FFT();
   *    sound.amp(0.2);
   *  }
   *
   *  function draw(){
   *    background(0);
   *
   *    var spectrum = fft.analyze();
   *    noStroke();
   *    fill(0,255,0); // spectrum is green
   *    for (var i = 0; i< spectrum.length; i++){
   *      var x = map(i, 0, spectrum.length, 0, width);
   *      var h = -height + map(spectrum[i], 0, 255, height, 0);
   *      rect(x, height, width / spectrum.length, h )
   *    }
   *
   *    var waveform = fft.waveform();
   *    noFill();
   *    beginShape();
   *    stroke(255,0,0); // waveform is red
   *    strokeWeight(1);
   *    for (var i = 0; i< waveform.length; i++){
   *      var x = map(i, 0, waveform.length, 0, width);
   *      var y = map( waveform[i], -1, 1, 0, height);
   *      vertex(x,y);
   *    }
   *    endShape();
   *
   *    text('click to play/pause', 4, 10);
   *  }
   *
   *  // fade sound if mouse is over canvas
   *  function togglePlay() {
   *    if (sound.isPlaying()) {
   *      sound.pause();
   *    } else {
   *      sound.loop();
   *    }
   *  }
   *  </code></div>
   */
  p5.FFT = function (smoothing, bins) {
    this.input = this.analyser = p5sound.audiocontext.createAnalyser();
    Object.defineProperties(this, {
      bins: {
        get: function () {
          return this.analyser.fftSize / 2;
        },
        set: function (b) {
          this.analyser.fftSize = b * 2;
        },
        configurable: true,
        enumerable: true
      },
      smoothing: {
        get: function () {
          return this.analyser.smoothingTimeConstant;
        },
        set: function (s) {
          this.analyser.smoothingTimeConstant = s;
        },
        configurable: true,
        enumerable: true
      }
    });
    // set default smoothing and bins
    this.smooth(smoothing);
    this.bins = bins || 1024;
    // default connections to p5sound fftMeter
    p5sound.fftMeter.connect(this.analyser);
    this.freqDomain = new Uint8Array(this.analyser.frequencyBinCount);
    this.timeDomain = new Uint8Array(this.analyser.frequencyBinCount);
    // predefined frequency ranges, these will be tweakable
    this.bass = [
      20,
      140
    ];
    this.lowMid = [
      140,
      400
    ];
    this.mid = [
      400,
      2600
    ];
    this.highMid = [
      2600,
      5200
    ];
    this.treble = [
      5200,
      14000
    ];
    // add this p5.SoundFile to the soundArray
    p5sound.soundArray.push(this);
  };
  /**
   *  Set the input source for the FFT analysis. If no source is
   *  provided, FFT will analyze all sound in the sketch.
   *
   *  @method  setInput
   *  @param {Object} [source] p5.sound object (or web audio API source node)
   */
  p5.FFT.prototype.setInput = function (source) {
    if (!source) {
      p5sound.fftMeter.connect(this.analyser);
    } else {
      if (source.output) {
        source.output.connect(this.analyser);
      } else if (source.connect) {
        source.connect(this.analyser);
      }
      p5sound.fftMeter.disconnect();
    }
  };
  /**
   *  Returns an array of amplitude values (between -1.0 and +1.0) that represent
   *  a snapshot of amplitude readings in a single buffer. Length will be
   *  equal to bins (defaults to 1024). Can be used to draw the waveform
   *  of a sound.
   *
   *  @method waveform
   *  @param {Number} [bins]    Must be a power of two between
   *                            16 and 1024. Defaults to 1024.
   *  @param {String} [precision] If any value is provided, will return results
   *                              in a Float32 Array which is more precise
   *                              than a regular array.
   *  @return {Array}  Array    Array of amplitude values (-1 to 1)
   *                            over time. Array length = bins.
   *
   */
  p5.FFT.prototype.waveform = function () {
    var bins, mode, normalArray;
    for (var i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] === 'number') {
        bins = arguments[i];
        this.analyser.fftSize = bins * 2;
      }
      if (typeof arguments[i] === 'string') {
        mode = arguments[i];
      }
    }
    // getFloatFrequencyData doesnt work in Safari as of 5/2015
    if (mode && !p5.prototype._isSafari()) {
      timeToFloat(this, this.timeDomain);
      this.analyser.getFloatTimeDomainData(this.timeDomain);
      return this.timeDomain;
    } else {
      timeToInt(this, this.timeDomain);
      this.analyser.getByteTimeDomainData(this.timeDomain);
      var normalArray = new Array();
      for (var j = 0; j < this.timeDomain.length; j++) {
        var scaled = p5.prototype.map(this.timeDomain[j], 0, 255, -1, 1);
        normalArray.push(scaled);
      }
      return normalArray;
    }
  };
  /**
   *  Returns an array of amplitude values (between 0 and 255)
   *  across the frequency spectrum. Length is equal to FFT bins
   *  (1024 by default). The array indices correspond to frequencies
   *  (i.e. pitches), from the lowest to the highest that humans can
   *  hear. Each value represents amplitude at that slice of the
   *  frequency spectrum. Must be called prior to using
   *  <code>getEnergy()</code>.
   *
   *  @method analyze
   *  @param {Number} [bins]    Must be a power of two between
   *                             16 and 1024. Defaults to 1024.
   *  @param {Number} [scale]    If "dB," returns decibel
   *                             float measurements between
   *                             -140 and 0 (max).
   *                             Otherwise returns integers from 0-255.
   *  @return {Array} spectrum    Array of energy (amplitude/volume)
   *                              values across the frequency spectrum.
   *                              Lowest energy (silence) = 0, highest
   *                              possible is 255.
   *  @example
   *  <div><code>
   *  var osc;
   *  var fft;
   *
   *  function setup(){
   *    createCanvas(100,100);
   *    osc = new p5.Oscillator();
   *    osc.amp(0);
   *    osc.start();
   *    fft = new p5.FFT();
   *  }
   *
   *  function draw(){
   *    background(0);
   *
   *    var freq = map(mouseX, 0, 800, 20, 15000);
   *    freq = constrain(freq, 1, 20000);
   *    osc.freq(freq);
   *
   *    var spectrum = fft.analyze();
   *    noStroke();
   *    fill(0,255,0); // spectrum is green
   *    for (var i = 0; i< spectrum.length; i++){
   *      var x = map(i, 0, spectrum.length, 0, width);
   *      var h = -height + map(spectrum[i], 0, 255, height, 0);
   *      rect(x, height, width / spectrum.length, h );
   *    }
   *
   *    stroke(255);
   *    text('Freq: ' + round(freq)+'Hz', 10, 10);
   *
   *    isMouseOverCanvas();
   *  }
   *
   *  // only play sound when mouse is over canvas
   *  function isMouseOverCanvas() {
   *    var mX = mouseX, mY = mouseY;
   *    if (mX > 0 && mX < width && mY < height && mY > 0) {
   *      osc.amp(0.5, 0.2);
   *    } else {
   *      osc.amp(0, 0.2);
   *    }
   *  }
   *  </code></div>
   *
   *
   */
  p5.FFT.prototype.analyze = function () {
    var mode;
    for (var i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] === 'number') {
        this.bins = arguments[i];
        this.analyser.fftSize = this.bins * 2;
      }
      if (typeof arguments[i] === 'string') {
        mode = arguments[i];
      }
    }
    if (mode && mode.toLowerCase() === 'db') {
      freqToFloat(this);
      this.analyser.getFloatFrequencyData(this.freqDomain);
      return this.freqDomain;
    } else {
      freqToInt(this, this.freqDomain);
      this.analyser.getByteFrequencyData(this.freqDomain);
      var normalArray = Array.apply([], this.freqDomain);
      normalArray.length === this.analyser.fftSize;
      normalArray.constructor === Array;
      return normalArray;
    }
  };
  /**
   *  Returns the amount of energy (volume) at a specific
   *  <a href="https://en.wikipedia.org/wiki/Audio_frequency" target="_blank">
   *  frequency</a>, or the average amount of energy between two
   *  frequencies. Accepts Number(s) corresponding
   *  to frequency (in Hz), or a String corresponding to predefined
   *  frequency ranges ("bass", "lowMid", "mid", "highMid", "treble").
   *  Returns a range between 0 (no energy/volume at that frequency) and
   *  255 (maximum energy).
   *  <em>NOTE: analyze() must be called prior to getEnergy(). Analyze()
   *  tells the FFT to analyze frequency data, and getEnergy() uses
   *  the results determine the value at a specific frequency or
   *  range of frequencies.</em></p>
   *
   *  @method  getEnergy
   *  @param  {Number|String} frequency1   Will return a value representing
   *                                energy at this frequency. Alternately,
   *                                the strings "bass", "lowMid" "mid",
   *                                "highMid", and "treble" will return
   *                                predefined frequency ranges.
   *  @param  {Number} [frequency2] If a second frequency is given,
   *                                will return average amount of
   *                                energy that exists between the
   *                                two frequencies.
   *  @return {Number}   Energy   Energy (volume/amplitude) from
   *                              0 and 255.
   *
   */
  p5.FFT.prototype.getEnergy = function (frequency1, frequency2) {
    var nyquist = p5sound.audiocontext.sampleRate / 2;
    if (frequency1 === 'bass') {
      frequency1 = this.bass[0];
      frequency2 = this.bass[1];
    } else if (frequency1 === 'lowMid') {
      frequency1 = this.lowMid[0];
      frequency2 = this.lowMid[1];
    } else if (frequency1 === 'mid') {
      frequency1 = this.mid[0];
      frequency2 = this.mid[1];
    } else if (frequency1 === 'highMid') {
      frequency1 = this.highMid[0];
      frequency2 = this.highMid[1];
    } else if (frequency1 === 'treble') {
      frequency1 = this.treble[0];
      frequency2 = this.treble[1];
    }
    if (typeof frequency1 !== 'number') {
      throw 'invalid input for getEnergy()';
    } else if (!frequency2) {
      // if only one parameter:
      var index = Math.round(frequency1 / nyquist * this.freqDomain.length);
      return this.freqDomain[index];
    } else if (frequency1 && frequency2) {
      // if two parameters:
      // if second is higher than first
      if (frequency1 > frequency2) {
        var swap = frequency2;
        frequency2 = frequency1;
        frequency1 = swap;
      }
      var lowIndex = Math.round(frequency1 / nyquist * this.freqDomain.length);
      var highIndex = Math.round(frequency2 / nyquist * this.freqDomain.length);
      var total = 0;
      var numFrequencies = 0;
      // add up all of the values for the frequencies
      for (var i = lowIndex; i <= highIndex; i++) {
        total += this.freqDomain[i];
        numFrequencies += 1;
      }
      // divide by total number of frequencies
      var toReturn = total / numFrequencies;
      return toReturn;
    } else {
      throw 'invalid input for getEnergy()';
    }
  };
  // compatability with v.012, changed to getEnergy in v.0121. Will be deprecated...
  p5.FFT.prototype.getFreq = function (freq1, freq2) {
    console.log('getFreq() is deprecated. Please use getEnergy() instead.');
    var x = this.getEnergy(freq1, freq2);
    return x;
  };
  /**
     *  Returns the
     *  <a href="http://en.wikipedia.org/wiki/Spectral_centroid" target="_blank">
     *  spectral centroid</a> of the input signal.
     *  <em>NOTE: analyze() must be called prior to getCentroid(). Analyze()
     *  tells the FFT to analyze frequency data, and getCentroid() uses
     *  the results determine the spectral centroid.</em></p>
     *
     *  @method  getCentroid
     *  @return {Number}   Spectral Centroid Frequency   Frequency of the spectral centroid in Hz.
     *
     *
     * @example
     *  <div><code>
     *
     *
     *function setup(){
     *  cnv = createCanvas(800,400);
     *  sound = new p5.AudioIn();
     *  sound.start();
     *  fft = new p5.FFT();
     *  sound.connect(fft);
     *}
     *
     *
     *function draw(){
     *
     *  var centroidplot = 0.0;
     *  var spectralCentroid = 0;
     *
     *
     *  background(0);
     *  stroke(0,255,0);
     *  var spectrum = fft.analyze();
     *  fill(0,255,0); // spectrum is green
     *
     *  //draw the spectrum
     *
     *  for (var i = 0; i< spectrum.length; i++){
     *    var x = map(log(i), 0, log(spectrum.length), 0, width);
     *    var h = map(spectrum[i], 0, 255, 0, height);
     *    var rectangle_width = (log(i+1)-log(i))*(width/log(spectrum.length));
     *    rect(x, height, rectangle_width, -h )
     *  }

     *  var nyquist = 22050;
     *
     *  // get the centroid
     *  spectralCentroid = fft.getCentroid();
     *
     *  // the mean_freq_index calculation is for the display.
     *  var mean_freq_index = spectralCentroid/(nyquist/spectrum.length);
     *
     *  centroidplot = map(log(mean_freq_index), 0, log(spectrum.length), 0, width);
     *
     *
     *  stroke(255,0,0); // the line showing where the centroid is will be red
     *
     *  rect(centroidplot, 0, width / spectrum.length, height)
     *  noStroke();
     *  fill(255,255,255);  // text is white
     *  textSize(40);
     *  text("centroid: "+round(spectralCentroid)+" Hz", 10, 40);
     *}
     * </code></div>
     */
  p5.FFT.prototype.getCentroid = function () {
    var nyquist = p5sound.audiocontext.sampleRate / 2;
    var cumulative_sum = 0;
    var centroid_normalization = 0;
    for (var i = 0; i < this.freqDomain.length; i++) {
      cumulative_sum += i * this.freqDomain[i];
      centroid_normalization += this.freqDomain[i];
    }
    var mean_freq_index = 0;
    if (centroid_normalization !== 0) {
      mean_freq_index = cumulative_sum / centroid_normalization;
    }
    var spec_centroid_freq = mean_freq_index * (nyquist / this.freqDomain.length);
    return spec_centroid_freq;
  };
  /**
   *  Smooth FFT analysis by averaging with the last analysis frame.
   *
   *  @method smooth
   *  @param {Number} smoothing    0.0 < smoothing < 1.0.
   *                               Defaults to 0.8.
   */
  p5.FFT.prototype.smooth = function (s) {
    if (typeof s !== 'undefined') {
      this.smoothing = s;
    }
    return this.smoothing;
  };
  p5.FFT.prototype.dispose = function () {
    // remove reference from soundArray
    var index = p5sound.soundArray.indexOf(this);
    p5sound.soundArray.splice(index, 1);
    this.analyser.disconnect();
    this.analyser = undefined;
  };
  /**
   *  Returns an array of average amplitude values for a given number
   *  of frequency bands split equally. N defaults to 16.
   *  <em>NOTE: analyze() must be called prior to linAverages(). Analyze()
   *  tells the FFT to analyze frequency data, and linAverages() uses
   *  the results to group them into a smaller set of averages.</em></p>
   *
   *  @method  linAverages
   *  @param  {Number}  N                Number of returned frequency groups
   *  @return {Array}   linearAverages   Array of average amplitude values for each group
   */
  p5.FFT.prototype.linAverages = function (N) {
    var N = N || 16;
    // This prevents undefined, null or 0 values of N
    var spectrum = this.freqDomain;
    var spectrumLength = spectrum.length;
    var spectrumStep = Math.floor(spectrumLength / N);
    var linearAverages = new Array(N);
    // Keep a second index for the current average group and place the values accordingly
    // with only one loop in the spectrum data
    var groupIndex = 0;
    for (var specIndex = 0; specIndex < spectrumLength; specIndex++) {
      linearAverages[groupIndex] = linearAverages[groupIndex] !== undefined ? (linearAverages[groupIndex] + spectrum[specIndex]) / 2 : spectrum[specIndex];
      // Increase the group index when the last element of the group is processed
      if (specIndex % spectrumStep === spectrumStep - 1) {
        groupIndex++;
      }
    }
    return linearAverages;
  };
  /**
   *  Returns an array of average amplitude values of the spectrum, for a given
   *  set of <a href="https://en.wikipedia.org/wiki/Octave_band" target="_blank">
   *  Octave Bands</a>
   *  <em>NOTE: analyze() must be called prior to logAverages(). Analyze()
   *  tells the FFT to analyze frequency data, and logAverages() uses
   *  the results to group them into a smaller set of averages.</em></p>
   *
   *  @method  logAverages
   *  @param  {Array}   octaveBands    Array of Octave Bands objects for grouping
   *  @return {Array}   logAverages    Array of average amplitude values for each group
   */
  p5.FFT.prototype.logAverages = function (octaveBands) {
    var nyquist = p5sound.audiocontext.sampleRate / 2;
    var spectrum = this.freqDomain;
    var spectrumLength = spectrum.length;
    var logAverages = new Array(octaveBands.length);
    // Keep a second index for the current average group and place the values accordingly
    // With only one loop in the spectrum data
    var octaveIndex = 0;
    for (var specIndex = 0; specIndex < spectrumLength; specIndex++) {
      var specIndexFrequency = Math.round(specIndex * nyquist / this.freqDomain.length);
      // Increase the group index if the current frequency exceeds the limits of the band
      if (specIndexFrequency > octaveBands[octaveIndex].hi) {
        octaveIndex++;
      }
      logAverages[octaveIndex] = logAverages[octaveIndex] !== undefined ? (logAverages[octaveIndex] + spectrum[specIndex]) / 2 : spectrum[specIndex];
    }
    return logAverages;
  };
  /**
   *  Calculates and Returns the 1/N
   *  <a href="https://en.wikipedia.org/wiki/Octave_band" target="_blank">Octave Bands</a>
   *  N defaults to 3 and minimum central frequency to 15.625Hz.
   *  (1/3 Octave Bands ~= 31 Frequency Bands)
   *  Setting fCtr0 to a central value of a higher octave will ignore the lower bands
   *  and produce less frequency groups.
   *
   *  @method   getOctaveBands
   *  @param  {Number}  N             Specifies the 1/N type of generated octave bands
   *  @param  {Number}  fCtr0         Minimum central frequency for the lowest band
   *  @return {Array}   octaveBands   Array of octave band objects with their bounds
   */
  p5.FFT.prototype.getOctaveBands = function (N, fCtr0) {
    var N = N || 3;
    // Default to 1/3 Octave Bands
    var fCtr0 = fCtr0 || 15.625;
    // Minimum central frequency, defaults to 15.625Hz
    var octaveBands = [];
    var lastFrequencyBand = {
      lo: fCtr0 / Math.pow(2, 1 / (2 * N)),
      ctr: fCtr0,
      hi: fCtr0 * Math.pow(2, 1 / (2 * N))
    };
    octaveBands.push(lastFrequencyBand);
    var nyquist = p5sound.audiocontext.sampleRate / 2;
    while (lastFrequencyBand.hi < nyquist) {
      var newFrequencyBand = {};
      newFrequencyBand.lo = lastFrequencyBand.hi;
      newFrequencyBand.ctr = lastFrequencyBand.ctr * Math.pow(2, 1 / N);
      newFrequencyBand.hi = newFrequencyBand.ctr * Math.pow(2, 1 / (2 * N));
      octaveBands.push(newFrequencyBand);
      lastFrequencyBand = newFrequencyBand;
    }
    return octaveBands;
  };
  // helper methods to convert type from float (dB) to int (0-255)
  var freqToFloat = function (fft) {
    if (fft.freqDomain instanceof Float32Array === false) {
      fft.freqDomain = new Float32Array(fft.analyser.frequencyBinCount);
    }
  };
  var freqToInt = function (fft) {
    if (fft.freqDomain instanceof Uint8Array === false) {
      fft.freqDomain = new Uint8Array(fft.analyser.frequencyBinCount);
    }
  };
  var timeToFloat = function (fft) {
    if (fft.timeDomain instanceof Float32Array === false) {
      fft.timeDomain = new Float32Array(fft.analyser.frequencyBinCount);
    }
  };
  var timeToInt = function (fft) {
    if (fft.timeDomain instanceof Uint8Array === false) {
      fft.timeDomain = new Uint8Array(fft.analyser.frequencyBinCount);
    }
  };
}(master);
/** Tone.js module by Yotam Mann, MIT License 2016  http://opensource.org/licenses/MIT **/
var Tone_core_Tone;
Tone_core_Tone = function () {
  'use strict';
  var Tone = function (inputs, outputs) {
    if (this.isUndef(inputs) || inputs === 1) {
      this.input = this.context.createGain();
    } else if (inputs > 1) {
      this.input = new Array(inputs);
    }
    if (this.isUndef(outputs) || outputs === 1) {
      this.output = this.context.createGain();
    } else if (outputs > 1) {
      this.output = new Array(inputs);
    }
  };
  Tone.prototype.set = function (params, value, rampTime) {
    if (this.isObject(params)) {
      rampTime = value;
    } else if (this.isString(params)) {
      var tmpObj = {};
      tmpObj[params] = value;
      params = tmpObj;
    }
    paramLoop:
      for (var attr in params) {
        value = params[attr];
        var parent = this;
        if (attr.indexOf('.') !== -1) {
          var attrSplit = attr.split('.');
          for (var i = 0; i < attrSplit.length - 1; i++) {
            parent = parent[attrSplit[i]];
            if (parent instanceof Tone) {
              attrSplit.splice(0, i + 1);
              var innerParam = attrSplit.join('.');
              parent.set(innerParam, value);
              continue paramLoop;
            }
          }
          attr = attrSplit[attrSplit.length - 1];
        }
        var param = parent[attr];
        if (this.isUndef(param)) {
          continue;
        }
        if (Tone.Signal && param instanceof Tone.Signal || Tone.Param && param instanceof Tone.Param) {
          if (param.value !== value) {
            if (this.isUndef(rampTime)) {
              param.value = value;
            } else {
              param.rampTo(value, rampTime);
            }
          }
        } else if (param instanceof AudioParam) {
          if (param.value !== value) {
            param.value = value;
          }
        } else if (param instanceof Tone) {
          param.set(value);
        } else if (param !== value) {
          parent[attr] = value;
        }
      }
    return this;
  };
  Tone.prototype.get = function (params) {
    if (this.isUndef(params)) {
      params = this._collectDefaults(this.constructor);
    } else if (this.isString(params)) {
      params = [params];
    }
    var ret = {};
    for (var i = 0; i < params.length; i++) {
      var attr = params[i];
      var parent = this;
      var subRet = ret;
      if (attr.indexOf('.') !== -1) {
        var attrSplit = attr.split('.');
        for (var j = 0; j < attrSplit.length - 1; j++) {
          var subAttr = attrSplit[j];
          subRet[subAttr] = subRet[subAttr] || {};
          subRet = subRet[subAttr];
          parent = parent[subAttr];
        }
        attr = attrSplit[attrSplit.length - 1];
      }
      var param = parent[attr];
      if (this.isObject(params[attr])) {
        subRet[attr] = param.get();
      } else if (Tone.Signal && param instanceof Tone.Signal) {
        subRet[attr] = param.value;
      } else if (Tone.Param && param instanceof Tone.Param) {
        subRet[attr] = param.value;
      } else if (param instanceof AudioParam) {
        subRet[attr] = param.value;
      } else if (param instanceof Tone) {
        subRet[attr] = param.get();
      } else if (!this.isFunction(param) && !this.isUndef(param)) {
        subRet[attr] = param;
      }
    }
    return ret;
  };
  Tone.prototype._collectDefaults = function (constr) {
    var ret = [];
    if (!this.isUndef(constr.defaults)) {
      ret = Object.keys(constr.defaults);
    }
    if (!this.isUndef(constr._super)) {
      var superDefs = this._collectDefaults(constr._super);
      for (var i = 0; i < superDefs.length; i++) {
        if (ret.indexOf(superDefs[i]) === -1) {
          ret.push(superDefs[i]);
        }
      }
    }
    return ret;
  };
  Tone.prototype.toString = function () {
    for (var className in Tone) {
      var isLetter = className[0].match(/^[A-Z]$/);
      var sameConstructor = Tone[className] === this.constructor;
      if (this.isFunction(Tone[className]) && isLetter && sameConstructor) {
        return className;
      }
    }
    return 'Tone';
  };
  Object.defineProperty(Tone.prototype, 'numberOfInputs', {
    get: function () {
      if (this.input) {
        if (this.isArray(this.input)) {
          return this.input.length;
        } else {
          return 1;
        }
      } else {
        return 0;
      }
    }
  });
  Object.defineProperty(Tone.prototype, 'numberOfOutputs', {
    get: function () {
      if (this.output) {
        if (this.isArray(this.output)) {
          return this.output.length;
        } else {
          return 1;
        }
      } else {
        return 0;
      }
    }
  });
  Tone.prototype.dispose = function () {
    if (!this.isUndef(this.input)) {
      if (this.input instanceof AudioNode) {
        this.input.disconnect();
      }
      this.input = null;
    }
    if (!this.isUndef(this.output)) {
      if (this.output instanceof AudioNode) {
        this.output.disconnect();
      }
      this.output = null;
    }
    return this;
  };
  Tone.prototype.connect = function (unit, outputNum, inputNum) {
    if (Array.isArray(this.output)) {
      outputNum = this.defaultArg(outputNum, 0);
      this.output[outputNum].connect(unit, 0, inputNum);
    } else {
      this.output.connect(unit, outputNum, inputNum);
    }
    return this;
  };
  Tone.prototype.disconnect = function (destination, outputNum, inputNum) {
    if (this.isArray(this.output)) {
      if (this.isNumber(destination)) {
        this.output[destination].disconnect();
      } else {
        outputNum = this.defaultArg(outputNum, 0);
        this.output[outputNum].disconnect(destination, 0, inputNum);
      }
    } else {
      this.output.disconnect.apply(this.output, arguments);
    }
  };
  Tone.prototype.connectSeries = function () {
    if (arguments.length > 1) {
      var currentUnit = arguments[0];
      for (var i = 1; i < arguments.length; i++) {
        var toUnit = arguments[i];
        currentUnit.connect(toUnit);
        currentUnit = toUnit;
      }
    }
    return this;
  };
  Tone.prototype.chain = function () {
    if (arguments.length > 0) {
      var currentUnit = this;
      for (var i = 0; i < arguments.length; i++) {
        var toUnit = arguments[i];
        currentUnit.connect(toUnit);
        currentUnit = toUnit;
      }
    }
    return this;
  };
  Tone.prototype.fan = function () {
    if (arguments.length > 0) {
      for (var i = 0; i < arguments.length; i++) {
        this.connect(arguments[i]);
      }
    }
    return this;
  };
  AudioNode.prototype.chain = Tone.prototype.chain;
  AudioNode.prototype.fan = Tone.prototype.fan;
  Tone.prototype.defaultArg = function (given, fallback) {
    if (this.isObject(given) && this.isObject(fallback)) {
      var ret = {};
      for (var givenProp in given) {
        ret[givenProp] = this.defaultArg(fallback[givenProp], given[givenProp]);
      }
      for (var fallbackProp in fallback) {
        ret[fallbackProp] = this.defaultArg(given[fallbackProp], fallback[fallbackProp]);
      }
      return ret;
    } else {
      return this.isUndef(given) ? fallback : given;
    }
  };
  Tone.prototype.optionsObject = function (values, keys, defaults) {
    var options = {};
    if (values.length === 1 && this.isObject(values[0])) {
      options = values[0];
    } else {
      for (var i = 0; i < keys.length; i++) {
        options[keys[i]] = values[i];
      }
    }
    if (!this.isUndef(defaults)) {
      return this.defaultArg(options, defaults);
    } else {
      return options;
    }
  };
  Tone.prototype.isUndef = function (val) {
    return typeof val === 'undefined';
  };
  Tone.prototype.isFunction = function (val) {
    return typeof val === 'function';
  };
  Tone.prototype.isNumber = function (arg) {
    return typeof arg === 'number';
  };
  Tone.prototype.isObject = function (arg) {
    return Object.prototype.toString.call(arg) === '[object Object]' && arg.constructor === Object;
  };
  Tone.prototype.isBoolean = function (arg) {
    return typeof arg === 'boolean';
  };
  Tone.prototype.isArray = function (arg) {
    return Array.isArray(arg);
  };
  Tone.prototype.isString = function (arg) {
    return typeof arg === 'string';
  };
  Tone.noOp = function () {
  };
  Tone.prototype._readOnly = function (property) {
    if (Array.isArray(property)) {
      for (var i = 0; i < property.length; i++) {
        this._readOnly(property[i]);
      }
    } else {
      Object.defineProperty(this, property, {
        writable: false,
        enumerable: true
      });
    }
  };
  Tone.prototype._writable = function (property) {
    if (Array.isArray(property)) {
      for (var i = 0; i < property.length; i++) {
        this._writable(property[i]);
      }
    } else {
      Object.defineProperty(this, property, { writable: true });
    }
  };
  Tone.State = {
    Started: 'started',
    Stopped: 'stopped',
    Paused: 'paused'
  };
  Tone.prototype.equalPowerScale = function (percent) {
    var piFactor = 0.5 * Math.PI;
    return Math.sin(percent * piFactor);
  };
  Tone.prototype.dbToGain = function (db) {
    return Math.pow(2, db / 6);
  };
  Tone.prototype.gainToDb = function (gain) {
    return 20 * (Math.log(gain) / Math.LN10);
  };
  Tone.prototype.intervalToFrequencyRatio = function (interval) {
    return Math.pow(2, interval / 12);
  };
  Tone.prototype.now = function () {
    return Tone.context.now();
  };
  Tone.now = function () {
    return Tone.context.now();
  };
  Tone.extend = function (child, parent) {
    if (Tone.prototype.isUndef(parent)) {
      parent = Tone;
    }
    function TempConstructor() {
    }
    TempConstructor.prototype = parent.prototype;
    child.prototype = new TempConstructor();
    child.prototype.constructor = child;
    child._super = parent;
  };
  var audioContext;
  Object.defineProperty(Tone, 'context', {
    get: function () {
      return audioContext;
    },
    set: function (context) {
      if (Tone.Context && context instanceof Tone.Context) {
        audioContext = context;
      } else {
        audioContext = new Tone.Context(context);
      }
      if (Tone.Context) {
        Tone.Context.emit('init', audioContext);
      }
    }
  });
  Object.defineProperty(Tone.prototype, 'context', {
    get: function () {
      return Tone.context;
    }
  });
  Tone.setContext = function (ctx) {
    Tone.context = ctx;
  };
  Object.defineProperty(Tone.prototype, 'blockTime', {
    get: function () {
      return 128 / this.context.sampleRate;
    }
  });
  Object.defineProperty(Tone.prototype, 'sampleTime', {
    get: function () {
      return 1 / this.context.sampleRate;
    }
  });
  Object.defineProperty(Tone, 'supported', {
    get: function () {
      var hasAudioContext = window.hasOwnProperty('AudioContext') || window.hasOwnProperty('webkitAudioContext');
      var hasPromises = window.hasOwnProperty('Promise');
      var hasWorkers = window.hasOwnProperty('Worker');
      return hasAudioContext && hasPromises && hasWorkers;
    }
  });
  Tone.version = 'r10';
  if (!window.TONE_SILENCE_VERSION_LOGGING) {
  }
  return Tone;
}();
/** Tone.js module by Yotam Mann, MIT License 2016  http://opensource.org/licenses/MIT **/
var Tone_signal_SignalBase;
Tone_signal_SignalBase = function (Tone) {
  'use strict';
  Tone.SignalBase = function () {
  };
  Tone.extend(Tone.SignalBase);
  Tone.SignalBase.prototype.connect = function (node, outputNumber, inputNumber) {
    if (Tone.Signal && Tone.Signal === node.constructor || Tone.Param && Tone.Param === node.constructor || Tone.TimelineSignal && Tone.TimelineSignal === node.constructor) {
      node._param.cancelScheduledValues(0);
      node._param.value = 0;
      node.overridden = true;
    } else if (node instanceof AudioParam) {
      node.cancelScheduledValues(0);
      node.value = 0;
    }
    Tone.prototype.connect.call(this, node, outputNumber, inputNumber);
    return this;
  };
  return Tone.SignalBase;
}(Tone_core_Tone);
/** Tone.js module by Yotam Mann, MIT License 2016  http://opensource.org/licenses/MIT **/
var Tone_signal_WaveShaper;
Tone_signal_WaveShaper = function (Tone) {
  'use strict';
  Tone.WaveShaper = function (mapping, bufferLen) {
    this._shaper = this.input = this.output = this.context.createWaveShaper();
    this._curve = null;
    if (Array.isArray(mapping)) {
      this.curve = mapping;
    } else if (isFinite(mapping) || this.isUndef(mapping)) {
      this._curve = new Float32Array(this.defaultArg(mapping, 1024));
    } else if (this.isFunction(mapping)) {
      this._curve = new Float32Array(this.defaultArg(bufferLen, 1024));
      this.setMap(mapping);
    }
  };
  Tone.extend(Tone.WaveShaper, Tone.SignalBase);
  Tone.WaveShaper.prototype.setMap = function (mapping) {
    for (var i = 0, len = this._curve.length; i < len; i++) {
      var normalized = i / (len - 1) * 2 - 1;
      this._curve[i] = mapping(normalized, i);
    }
    this._shaper.curve = this._curve;
    return this;
  };
  Object.defineProperty(Tone.WaveShaper.prototype, 'curve', {
    get: function () {
      return this._shaper.curve;
    },
    set: function (mapping) {
      this._curve = new Float32Array(mapping);
      this._shaper.curve = this._curve;
    }
  });
  Object.defineProperty(Tone.WaveShaper.prototype, 'oversample', {
    get: function () {
      return this._shaper.oversample;
    },
    set: function (oversampling) {
      if ([
          'none',
          '2x',
          '4x'
        ].indexOf(oversampling) !== -1) {
        this._shaper.oversample = oversampling;
      } else {
        throw new RangeError('Tone.WaveShaper: oversampling must be either \'none\', \'2x\', or \'4x\'');
      }
    }
  });
  Tone.WaveShaper.prototype.dispose = function () {
    Tone.prototype.dispose.call(this);
    this._shaper.disconnect();
    this._shaper = null;
    this._curve = null;
    return this;
  };
  return Tone.WaveShaper;
}(Tone_core_Tone);
/** Tone.js module by Yotam Mann, MIT License 2016  http://opensource.org/licenses/MIT **/
var Tone_type_TimeBase;
Tone_type_TimeBase = function (Tone) {
  Tone.TimeBase = function (val, units) {
    if (this instanceof Tone.TimeBase) {
      this._expr = this._noOp;
      if (val instanceof Tone.TimeBase) {
        this.copy(val);
      } else if (!this.isUndef(units) || this.isNumber(val)) {
        units = this.defaultArg(units, this._defaultUnits);
        var method = this._primaryExpressions[units].method;
        this._expr = method.bind(this, val);
      } else if (this.isString(val)) {
        this.set(val);
      } else if (this.isUndef(val)) {
        this._expr = this._defaultExpr();
      }
    } else {
      return new Tone.TimeBase(val, units);
    }
  };
  Tone.extend(Tone.TimeBase);
  Tone.TimeBase.prototype.set = function (exprString) {
    this._expr = this._parseExprString(exprString);
    return this;
  };
  Tone.TimeBase.prototype.clone = function () {
    var instance = new this.constructor();
    instance.copy(this);
    return instance;
  };
  Tone.TimeBase.prototype.copy = function (time) {
    var val = time._expr();
    return this.set(val);
  };
  Tone.TimeBase.prototype._primaryExpressions = {
    'n': {
      regexp: /^(\d+)n/i,
      method: function (value) {
        value = parseInt(value);
        if (value === 1) {
          return this._beatsToUnits(this._timeSignature());
        } else {
          return this._beatsToUnits(4 / value);
        }
      }
    },
    't': {
      regexp: /^(\d+)t/i,
      method: function (value) {
        value = parseInt(value);
        return this._beatsToUnits(8 / (parseInt(value) * 3));
      }
    },
    'm': {
      regexp: /^(\d+)m/i,
      method: function (value) {
        return this._beatsToUnits(parseInt(value) * this._timeSignature());
      }
    },
    'i': {
      regexp: /^(\d+)i/i,
      method: function (value) {
        return this._ticksToUnits(parseInt(value));
      }
    },
    'hz': {
      regexp: /^(\d+(?:\.\d+)?)hz/i,
      method: function (value) {
        return this._frequencyToUnits(parseFloat(value));
      }
    },
    'tr': {
      regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,
      method: function (m, q, s) {
        var total = 0;
        if (m && m !== '0') {
          total += this._beatsToUnits(this._timeSignature() * parseFloat(m));
        }
        if (q && q !== '0') {
          total += this._beatsToUnits(parseFloat(q));
        }
        if (s && s !== '0') {
          total += this._beatsToUnits(parseFloat(s) / 4);
        }
        return total;
      }
    },
    's': {
      regexp: /^(\d+(?:\.\d+)?s)/,
      method: function (value) {
        return this._secondsToUnits(parseFloat(value));
      }
    },
    'samples': {
      regexp: /^(\d+)samples/,
      method: function (value) {
        return parseInt(value) / this.context.sampleRate;
      }
    },
    'default': {
      regexp: /^(\d+(?:\.\d+)?)/,
      method: function (value) {
        return this._primaryExpressions[this._defaultUnits].method.call(this, value);
      }
    }
  };
  Tone.TimeBase.prototype._binaryExpressions = {
    '+': {
      regexp: /^\+/,
      precedence: 2,
      method: function (lh, rh) {
        return lh() + rh();
      }
    },
    '-': {
      regexp: /^\-/,
      precedence: 2,
      method: function (lh, rh) {
        return lh() - rh();
      }
    },
    '*': {
      regexp: /^\*/,
      precedence: 1,
      method: function (lh, rh) {
        return lh() * rh();
      }
    },
    '/': {
      regexp: /^\//,
      precedence: 1,
      method: function (lh, rh) {
        return lh() / rh();
      }
    }
  };
  Tone.TimeBase.prototype._unaryExpressions = {
    'neg': {
      regexp: /^\-/,
      method: function (lh) {
        return -lh();
      }
    }
  };
  Tone.TimeBase.prototype._syntaxGlue = {
    '(': { regexp: /^\(/ },
    ')': { regexp: /^\)/ }
  };
  Tone.TimeBase.prototype._tokenize = function (expr) {
    var position = -1;
    var tokens = [];
    while (expr.length > 0) {
      expr = expr.trim();
      var token = getNextToken(expr, this);
      tokens.push(token);
      expr = expr.substr(token.value.length);
    }
    function getNextToken(expr, context) {
      var expressions = [
        '_binaryExpressions',
        '_unaryExpressions',
        '_primaryExpressions',
        '_syntaxGlue'
      ];
      for (var i = 0; i < expressions.length; i++) {
        var group = context[expressions[i]];
        for (var opName in group) {
          var op = group[opName];
          var reg = op.regexp;
          var match = expr.match(reg);
          if (match !== null) {
            return {
              method: op.method,
              precedence: op.precedence,
              regexp: op.regexp,
              value: match[0]
            };
          }
        }
      }
      throw new SyntaxError('Tone.TimeBase: Unexpected token ' + expr);
    }
    return {
      next: function () {
        return tokens[++position];
      },
      peek: function () {
        return tokens[position + 1];
      }
    };
  };
  Tone.TimeBase.prototype._matchGroup = function (token, group, prec) {
    var ret = false;
    if (!this.isUndef(token)) {
      for (var opName in group) {
        var op = group[opName];
        if (op.regexp.test(token.value)) {
          if (!this.isUndef(prec)) {
            if (op.precedence === prec) {
              return op;
            }
          } else {
            return op;
          }
        }
      }
    }
    return ret;
  };
  Tone.TimeBase.prototype._parseBinary = function (lexer, precedence) {
    if (this.isUndef(precedence)) {
      precedence = 2;
    }
    var expr;
    if (precedence < 0) {
      expr = this._parseUnary(lexer);
    } else {
      expr = this._parseBinary(lexer, precedence - 1);
    }
    var token = lexer.peek();
    while (token && this._matchGroup(token, this._binaryExpressions, precedence)) {
      token = lexer.next();
      expr = token.method.bind(this, expr, this._parseBinary(lexer, precedence - 1));
      token = lexer.peek();
    }
    return expr;
  };
  Tone.TimeBase.prototype._parseUnary = function (lexer) {
    var token, expr;
    token = lexer.peek();
    var op = this._matchGroup(token, this._unaryExpressions);
    if (op) {
      token = lexer.next();
      expr = this._parseUnary(lexer);
      return op.method.bind(this, expr);
    }
    return this._parsePrimary(lexer);
  };
  Tone.TimeBase.prototype._parsePrimary = function (lexer) {
    var token, expr;
    token = lexer.peek();
    if (this.isUndef(token)) {
      throw new SyntaxError('Tone.TimeBase: Unexpected end of expression');
    }
    if (this._matchGroup(token, this._primaryExpressions)) {
      token = lexer.next();
      var matching = token.value.match(token.regexp);
      return token.method.bind(this, matching[1], matching[2], matching[3]);
    }
    if (token && token.value === '(') {
      lexer.next();
      expr = this._parseBinary(lexer);
      token = lexer.next();
      if (!(token && token.value === ')')) {
        throw new SyntaxError('Expected )');
      }
      return expr;
    }
    throw new SyntaxError('Tone.TimeBase: Cannot process token ' + token.value);
  };
  Tone.TimeBase.prototype._parseExprString = function (exprString) {
    if (!this.isString(exprString)) {
      exprString = exprString.toString();
    }
    var lexer = this._tokenize(exprString);
    var tree = this._parseBinary(lexer);
    return tree;
  };
  Tone.TimeBase.prototype._noOp = function () {
    return 0;
  };
  Tone.TimeBase.prototype._defaultExpr = function () {
    return this._noOp;
  };
  Tone.TimeBase.prototype._defaultUnits = 's';
  Tone.TimeBase.prototype._frequencyToUnits = function (freq) {
    return 1 / freq;
  };
  Tone.TimeBase.prototype._beatsToUnits = function (beats) {
    return 60 / Tone.Transport.bpm.value * beats;
  };
  Tone.TimeBase.prototype._secondsToUnits = function (seconds) {
    return seconds;
  };
  Tone.TimeBase.prototype._ticksToUnits = function (ticks) {
    return ticks * (this._beatsToUnits(1) / Tone.Transport.PPQ);
  };
  Tone.TimeBase.prototype._timeSignature = function () {
    return Tone.Transport.timeSignature;
  };
  Tone.TimeBase.prototype._pushExpr = function (val, name, units) {
    if (!(val instanceof Tone.TimeBase)) {
      val = new this.constructor(val, units);
    }
    this._expr = this._binaryExpressions[name].method.bind(this, this._expr, val._expr);
    return this;
  };
  Tone.TimeBase.prototype.add = function (val, units) {
    return this._pushExpr(val, '+', units);
  };
  Tone.TimeBase.prototype.sub = function (val, units) {
    return this._pushExpr(val, '-', units);
  };
  Tone.TimeBase.prototype.mult = function (val, units) {
    return this._pushExpr(val, '*', units);
  };
  Tone.TimeBase.prototype.div = function (val, units) {
    return this._pushExpr(val, '/', units);
  };
  Tone.TimeBase.prototype.valueOf = function () {
    return this._expr();
  };
  Tone.TimeBase.prototype.dispose = function () {
    this._expr = null;
  };
  return Tone.TimeBase;
}(Tone_core_Tone);
/** Tone.js module by Yotam Mann, MIT License 2016  http://opensource.org/licenses/MIT **/
var Tone_type_Time;
Tone_type_Time = function (Tone) {
  Tone.Time = function (val, units) {
    if (this instanceof Tone.Time) {
      this._plusNow = false;
      Tone.TimeBase.call(this, val, units);
    } else {
      return new Tone.Time(val, units);
    }
  };
  Tone.extend(Tone.Time, Tone.TimeBase);
  Tone.Time.prototype._unaryExpressions = Object.create(Tone.TimeBase.prototype._unaryExpressions);
  Tone.Time.prototype._unaryExpressions.quantize = {
    regexp: /^@/,
    method: function (rh) {
      return Tone.Transport.nextSubdivision(rh());
    }
  };
  Tone.Time.prototype._unaryExpressions.now = {
    regexp: /^\+/,
    method: function (lh) {
      this._plusNow = true;
      return lh();
    }
  };
  Tone.Time.prototype.quantize = function (subdiv, percent) {
    percent = this.defaultArg(percent, 1);
    this._expr = function (expr, subdivision, percent) {
      expr = expr();
      subdivision = subdivision.toSeconds();
      var multiple = Math.round(expr / subdivision);
      var ideal = multiple * subdivision;
      var diff = ideal - expr;
      return expr + diff * percent;
    }.bind(this, this._expr, new this.constructor(subdiv), percent);
    return this;
  };
  Tone.Time.prototype.addNow = function () {
    this._plusNow = true;
    return this;
  };
  Tone.Time.prototype._defaultExpr = function () {
    this._plusNow = true;
    return this._noOp;
  };
  Tone.Time.prototype.copy = function (time) {
    Tone.TimeBase.prototype.copy.call(this, time);
    this._plusNow = time._plusNow;
    return this;
  };
  Tone.Time.prototype.toNotation = function () {
    var time = this.toSeconds();
    var testNotations = [
      '1m',
      '2n',
      '4n',
      '8n',
      '16n',
      '32n',
      '64n',
      '128n'
    ];
    var retNotation = this._toNotationHelper(time, testNotations);
    var testTripletNotations = [
      '1m',
      '2n',
      '2t',
      '4n',
      '4t',
      '8n',
      '8t',
      '16n',
      '16t',
      '32n',
      '32t',
      '64n',
      '64t',
      '128n'
    ];
    var retTripletNotation = this._toNotationHelper(time, testTripletNotations);
    if (retTripletNotation.split('+').length < retNotation.split('+').length) {
      return retTripletNotation;
    } else {
      return retNotation;
    }
  };
  Tone.Time.prototype._toNotationHelper = function (units, testNotations) {
    var threshold = this._notationToUnits(testNotations[testNotations.length - 1]);
    var retNotation = '';
    for (var i = 0; i < testNotations.length; i++) {
      var notationTime = this._notationToUnits(testNotations[i]);
      var multiple = units / notationTime;
      var floatingPointError = 0.000001;
      if (1 - multiple % 1 < floatingPointError) {
        multiple += floatingPointError;
      }
      multiple = Math.floor(multiple);
      if (multiple > 0) {
        if (multiple === 1) {
          retNotation += testNotations[i];
        } else {
          retNotation += multiple.toString() + '*' + testNotations[i];
        }
        units -= multiple * notationTime;
        if (units < threshold) {
          break;
        } else {
          retNotation += ' + ';
        }
      }
    }
    if (retNotation === '') {
      retNotation = '0';
    }
    return retNotation;
  };
  Tone.Time.prototype._notationToUnits = function (notation) {
    var primaryExprs = this._primaryExpressions;
    var notationExprs = [
      primaryExprs.n,
      primaryExprs.t,
      primaryExprs.m
    ];
    for (var i = 0; i < notationExprs.length; i++) {
      var expr = notationExprs[i];
      var match = notation.match(expr.regexp);
      if (match) {
        return expr.method.call(this, match[1]);
      }
    }
  };
  Tone.Time.prototype.toBarsBeatsSixteenths = function () {
    var quarterTime = this._beatsToUnits(1);
    var quarters = this.toSeconds() / quarterTime;
    var measures = Math.floor(quarters / this._timeSignature());
    var sixteenths = quarters % 1 * 4;
    quarters = Math.floor(quarters) % this._timeSignature();
    sixteenths = sixteenths.toString();
    if (sixteenths.length > 3) {
      sixteenths = parseFloat(sixteenths).toFixed(3);
    }
    var progress = [
      measures,
      quarters,
      sixteenths
    ];
    return progress.join(':');
  };
  Tone.Time.prototype.toTicks = function () {
    var quarterTime = this._beatsToUnits(1);
    var quarters = this.valueOf() / quarterTime;
    return Math.floor(quarters * Tone.Transport.PPQ);
  };
  Tone.Time.prototype.toSamples = function () {
    return this.toSeconds() * this.context.sampleRate;
  };
  Tone.Time.prototype.toFrequency = function () {
    return 1 / this.toSeconds();
  };
  Tone.Time.prototype.toSeconds = function () {
    return this.valueOf();
  };
  Tone.Time.prototype.toMilliseconds = function () {
    return this.toSeconds() * 1000;
  };
  Tone.Time.prototype.valueOf = function () {
    var val = this._expr();
    return val + (this._plusNow ? this.now() : 0);
  };
  return Tone.Time;
}(Tone_core_Tone);
/** Tone.js module by Yotam Mann, MIT License 2016  http://opensource.org/licenses/MIT **/
var Tone_type_Frequency;
Tone_type_Frequency = function (Tone) {
  Tone.Frequency = function (val, units) {
    if (this instanceof Tone.Frequency) {
      Tone.TimeBase.call(this, val, units);
    } else {
      return new Tone.Frequency(val, units);
    }
  };
  Tone.extend(Tone.Frequency, Tone.TimeBase);
  Tone.Frequency.prototype._primaryExpressions = Object.create(Tone.TimeBase.prototype._primaryExpressions);
  Tone.Frequency.prototype._primaryExpressions.midi = {
    regexp: /^(\d+(?:\.\d+)?midi)/,
    method: function (value) {
      return this.midiToFrequency(value);
    }
  };
  Tone.Frequency.prototype._primaryExpressions.note = {
    regexp: /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i,
    method: function (pitch, octave) {
      var index = noteToScaleIndex[pitch.toLowerCase()];
      var noteNumber = index + (parseInt(octave) + 1) * 12;
      return this.midiToFrequency(noteNumber);
    }
  };
  Tone.Frequency.prototype._primaryExpressions.tr = {
    regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,
    method: function (m, q, s) {
      var total = 1;
      if (m && m !== '0') {
        total *= this._beatsToUnits(this._timeSignature() * parseFloat(m));
      }
      if (q && q !== '0') {
        total *= this._beatsToUnits(parseFloat(q));
      }
      if (s && s !== '0') {
        total *= this._beatsToUnits(parseFloat(s) / 4);
      }
      return total;
    }
  };
  Tone.Frequency.prototype.transpose = function (interval) {
    this._expr = function (expr, interval) {
      var val = expr();
      return val * this.intervalToFrequencyRatio(interval);
    }.bind(this, this._expr, interval);
    return this;
  };
  Tone.Frequency.prototype.harmonize = function (intervals) {
    this._expr = function (expr, intervals) {
      var val = expr();
      var ret = [];
      for (var i = 0; i < intervals.length; i++) {
        ret[i] = val * this.intervalToFrequencyRatio(intervals[i]);
      }
      return ret;
    }.bind(this, this._expr, intervals);
    return this;
  };
  Tone.Frequency.prototype.toMidi = function () {
    return this.frequencyToMidi(this.valueOf());
  };
  Tone.Frequency.prototype.toNote = function () {
    var freq = this.valueOf();
    var log = Math.log(freq / Tone.Frequency.A4) / Math.LN2;
    var noteNumber = Math.round(12 * log) + 57;
    var octave = Math.floor(noteNumber / 12);
    if (octave < 0) {
      noteNumber += -12 * octave;
    }
    var noteName = scaleIndexToNote[noteNumber % 12];
    return noteName + octave.toString();
  };
  Tone.Frequency.prototype.toSeconds = function () {
    return 1 / this.valueOf();
  };
  Tone.Frequency.prototype.toFrequency = function () {
    return this.valueOf();
  };
  Tone.Frequency.prototype.toTicks = function () {
    var quarterTime = this._beatsToUnits(1);
    var quarters = this.valueOf() / quarterTime;
    return Math.floor(quarters * Tone.Transport.PPQ);
  };
  Tone.Frequency.prototype._frequencyToUnits = function (freq) {
    return freq;
  };
  Tone.Frequency.prototype._ticksToUnits = function (ticks) {
    return 1 / (ticks * 60 / (Tone.Transport.bpm.value * Tone.Transport.PPQ));
  };
  Tone.Frequency.prototype._beatsToUnits = function (beats) {
    return 1 / Tone.TimeBase.prototype._beatsToUnits.call(this, beats);
  };
  Tone.Frequency.prototype._secondsToUnits = function (seconds) {
    return 1 / seconds;
  };
  Tone.Frequency.prototype._defaultUnits = 'hz';
  var noteToScaleIndex = {
    'cbb': -2,
    'cb': -1,
    'c': 0,
    'c#': 1,
    'cx': 2,
    'dbb': 0,
    'db': 1,
    'd': 2,
    'd#': 3,
    'dx': 4,
    'ebb': 2,
    'eb': 3,
    'e': 4,
    'e#': 5,
    'ex': 6,
    'fbb': 3,
    'fb': 4,
    'f': 5,
    'f#': 6,
    'fx': 7,
    'gbb': 5,
    'gb': 6,
    'g': 7,
    'g#': 8,
    'gx': 9,
    'abb': 7,
    'ab': 8,
    'a': 9,
    'a#': 10,
    'ax': 11,
    'bbb': 9,
    'bb': 10,
    'b': 11,
    'b#': 12,
    'bx': 13
  };
  var scaleIndexToNote = [
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#',
    'A',
    'A#',
    'B'
  ];
  Tone.Frequency.A4 = 440;
  Tone.Frequency.prototype.midiToFrequency = function (midi) {
    return Tone.Frequency.A4 * Math.pow(2, (midi - 69) / 12);
  };
  Tone.Frequency.prototype.frequencyToMidi = function (frequency) {
    return 69 + 12 * Math.log(frequency / Tone.Frequency.A4) / Math.LN2;
  };
  return Tone.Frequency;
}(Tone_core_Tone);
/** Tone.js module by Yotam Mann, MIT License 2016  http://opensource.org/licenses/MIT **/
var Tone_type_TransportTime;
Tone_type_TransportTime = function (Tone) {
  Tone.TransportTime = function (val, units) {
    if (this instanceof Tone.TransportTime) {
      Tone.Time.call(this, val, units);
    } else {
      return new Tone.TransportTime(val, units);
    }
  };
  Tone.extend(Tone.TransportTime, Tone.Time);
  Tone.TransportTime.prototype._unaryExpressions = Object.create(Tone.Time.prototype._unaryExpressions);
  Tone.TransportTime.prototype._unaryExpressions.quantize = {
    regexp: /^@/,
    method: function (rh) {
      var subdivision = this._secondsToTicks(rh());
      var multiple = Math.ceil(Tone.Transport.ticks / subdivision);
      return this._ticksToUnits(multiple * subdivision);
    }
  };
  Tone.TransportTime.prototype._secondsToTicks = function (seconds) {
    var quarterTime = this._beatsToUnits(1);
    var quarters = seconds / quarterTime;
    return Math.round(quarters * Tone.Transport.PPQ);
  };
  Tone.TransportTime.prototype.valueOf = function () {
    var val = this._secondsToTicks(this._expr());
    return val + (this._plusNow ? Tone.Transport.ticks : 0);
  };
  Tone.TransportTime.prototype.toTicks = function () {
    return this.valueOf();
  };
  Tone.TransportTime.prototype.toSeconds = function () {
    var val = this._expr();
    return val + (this._plusNow ? Tone.Transport.seconds : 0);
  };
  Tone.TransportTime.prototype.toFrequency = function () {
    return 1 / this.toSeconds();
  };
  return Tone.TransportTime;
}(Tone_core_Tone);
/** Tone.js module by Yotam Mann, MIT License 2016  http://opensource.org/licenses/MIT **/
var Tone_core_Emitter;
Tone_core_Emitter = function (Tone) {
  'use strict';
  Tone.Emitter = function () {
    this._events = {};
  };
  Tone.extend(Tone.Emitter);
  Tone.Emitter.prototype.on = function (event, callback) {
    var events = event.split(/\W+/);
    for (var i = 0; i < events.length; i++) {
      var eventName = events[i];
      if (!this._events.hasOwnProperty(eventName)) {
        this._events[eventName] = [];
      }
      this._events[eventName].push(callback);
    }
    return this;
  };
  Tone.Emitter.prototype.off = function (event, callback) {
    var events = event.split(/\W+/);
    for (var ev = 0; ev < events.length; ev++) {
      event = events[ev];
      if (this._events.hasOwnProperty(event)) {
        if (Tone.prototype.isUndef(callback)) {
          this._events[event] = [];
        } else {
          var eventList = this._events[event];
          for (var i = 0; i < eventList.length; i++) {
            if (eventList[i] === callback) {
              eventList.splice(i, 1);
            }
          }
        }
      }
    }
    return this;
  };
  Tone.Emitter.prototype.emit = function (event) {
    if (this._events) {
      var args = Array.apply(null, arguments).slice(1);
      if (this._events.hasOwnProperty(event)) {
        var eventList = this._events[event];
        for (var i = 0, len = eventList.length; i < len; i++) {
          eventList[i].apply(this, args);
        }
      }
    }
    return this;
  };
  Tone.Emitter.mixin = function (object) {
    var functions = [
      'on',
      'off',
      'emit'
    ];
    object._events = {};
    for (var i = 0; i < functions.length; i++) {
      var func = functions[i];
      var emitterFunc = Tone.Emitter.prototype[func];
      object[func] = emitterFunc;
    }
  };
  Tone.Emitter.prototype.dispose = function () {
    Tone.prototype.dispose.call(this);
    this._events = null;
    return this;
  };
  return Tone.Emitter;
}(Tone_core_Tone);
/** Tone.js module by Yotam Mann, MIT License 2016  http://opensource.org/licenses/MIT **/
var Tone_core_Context;
Tone_core_Context = function (Tone) {
  if (!window.hasOwnProperty('AudioContext') && window.hasOwnProperty('webkitAudioContext')) {
    window.AudioContext = window.webkitAudioContext;
  }
  Tone.Context = function (context) {
    Tone.Emitter.call(this);
    if (!context) {
      context = new window.AudioContext();
    }
    this._context = context;
    for (var prop in this._context) {
      this._defineProperty(this._context, prop);
    }
    this._latencyHint = 'interactive';
    this._lookAhead = 0.1;
    this._updateInterval = this._lookAhead / 3;
    this._computedUpdateInterval = 0;
    this._worker = this._createWorker();
    this._constants = {};
  };
  Tone.extend(Tone.Context, Tone.Emitter);
  Tone.Emitter.mixin(Tone.Context);
  Tone.Context.prototype._defineProperty = function (context, prop) {
    if (this.isUndef(this[prop])) {
      Object.defineProperty(this, prop, {
        get: function () {
          if (typeof context[prop] === 'function') {
            return context[prop].bind(context);
          } else {
            return context[prop];
          }
        },
        set: function (val) {
          context[prop] = val;
        }
      });
    }
  };
  Tone.Context.prototype.now = function () {
    return this._context.currentTime;
  };
  Tone.Context.prototype._createWorker = function () {
    window.URL = window.URL || window.webkitURL;
    var blob = new Blob(['var timeoutTime = ' + (this._updateInterval * 1000).toFixed(1) + ';' + 'self.onmessage = function(msg){' + '\ttimeoutTime = parseInt(msg.data);' + '};' + 'function tick(){' + '\tsetTimeout(tick, timeoutTime);' + '\tself.postMessage(\'tick\');' + '}' + 'tick();']);
    var blobUrl = URL.createObjectURL(blob);
    var worker = new Worker(blobUrl);
    worker.addEventListener('message', function () {
      this.emit('tick');
    }.bind(this));
    worker.addEventListener('message', function () {
      var now = this.now();
      if (this.isNumber(this._lastUpdate)) {
        var diff = now - this._lastUpdate;
        this._computedUpdateInterval = Math.max(diff, this._computedUpdateInterval * 0.97);
      }
      this._lastUpdate = now;
    }.bind(this));
    return worker;
  };
  Tone.Context.prototype.getConstant = function (val) {
    if (this._constants[val]) {
      return this._constants[val];
    } else {
      var buffer = this._context.createBuffer(1, 128, this._context.sampleRate);
      var arr = buffer.getChannelData(0);
      for (var i = 0; i < arr.length; i++) {
        arr[i] = val;
      }
      var constant = this._context.createBufferSource();
      constant.channelCount = 1;
      constant.channelCountMode = 'explicit';
      constant.buffer = buffer;
      constant.loop = true;
      constant.start(0);
      this._constants[val] = constant;
      return constant;
    }
  };
  Object.defineProperty(Tone.Context.prototype, 'lag', {
    get: function () {
      var diff = this._computedUpdateInterval - this._updateInterval;
      diff = Math.max(diff, 0);
      return diff;
    }
  });
  Object.defineProperty(Tone.Context.prototype, 'lookAhead', {
    get: function () {
      return this._lookAhead;
    },
    set: function (lA) {
      this._lookAhead = lA;
    }
  });
  Object.defineProperty(Tone.Context.prototype, 'updateInterval', {
    get: function () {
      return this._updateInterval;
    },
    set: function (interval) {
      this._updateInterval = Math.max(interval, Tone.prototype.blockTime);
      this._worker.postMessage(Math.max(interval * 1000, 1));
    }
  });
  Object.defineProperty(Tone.Context.prototype, 'latencyHint', {
    get: function () {
      return this._latencyHint;
    },
    set: function (hint) {
      var lookAhead = hint;
      this._latencyHint = hint;
      if (this.isString(hint)) {
        switch (hint) {
        case 'interactive':
          lookAhead = 0.1;
          this._context.latencyHint = hint;
          break;
        case 'playback':
          lookAhead = 0.8;
          this._context.latencyHint = hint;
          break;
        case 'balanced':
          lookAhead = 0.25;
          this._context.latencyHint = hint;
          break;
        case 'fastest':
          lookAhead = 0.01;
          break;
        }
      }
      this.lookAhead = lookAhead;
      this.updateInterval = lookAhead / 3;
    }
  });
  function shimConnect() {
    var nativeConnect = AudioNode.prototype.connect;
    var nativeDisconnect = AudioNode.prototype.disconnect;
    function toneConnect(B, outNum, inNum) {
      if (B.input) {
        if (Array.isArray(B.input)) {
          if (Tone.prototype.isUndef(inNum)) {
            inNum = 0;
          }
          this.connect(B.input[inNum]);
        } else {
          this.connect(B.input, outNum, inNum);
        }
      } else {
        try {
          if (B instanceof AudioNode) {
            nativeConnect.call(this, B, outNum, inNum);
          } else {
            nativeConnect.call(this, B, outNum);
          }
        } catch (e) {
          throw new Error('error connecting to node: ' + B + '\n' + e);
        }
      }
    }
    function toneDisconnect(B, outNum, inNum) {
      if (B && B.input && Array.isArray(B.input)) {
        if (Tone.prototype.isUndef(inNum)) {
          inNum = 0;
        }
        this.disconnect(B.input[inNum], outNum, inNum);
      } else if (B && B.input) {
        this.disconnect(B.input, outNum, inNum);
      } else {
        try {
          nativeDisconnect.apply(this, arguments);
        } catch (e) {
          throw new Error('error disconnecting node: ' + B + '\n' + e);
        }
      }
    }
    if (AudioNode.prototype.connect !== toneConnect) {
      AudioNode.prototype.connect = toneConnect;
      AudioNode.prototype.disconnect = toneDisconnect;
    }
  }
  if (Tone.supported) {
    shimConnect();
    Tone.context = new Tone.Context();
  } else {
    console.warn('This browser does not support Tone.js');
  }
  return Tone.Context;
}(Tone_core_Tone);
/** Tone.js module by Yotam Mann, MIT License 2016  http://opensource.org/licenses/MIT **/
var Tone_type_Type;
Tone_type_Type = function (Tone) {
  Tone.Type = {
    Default: 'number',
    Time: 'time',
    Frequency: 'frequency',
    TransportTime: 'transportTime',
    Ticks: 'ticks',
    NormalRange: 'normalRange',
    AudioRange: 'audioRange',
    Decibels: 'db',
    Interval: 'interval',
    BPM: 'bpm',
    Positive: 'positive',
    Cents: 'cents',
    Degrees: 'degrees',
    MIDI: 'midi',
    BarsBeatsSixteenths: 'barsBeatsSixteenths',
    Samples: 'samples',
    Hertz: 'hertz',
    Note: 'note',
    Milliseconds: 'milliseconds',
    Seconds: 'seconds',
    Notation: 'notation'
  };
  Tone.prototype.toSeconds = function (time) {
    if (this.isNumber(time)) {
      return time;
    } else if (this.isUndef(time)) {
      return this.now();
    } else if (this.isString(time)) {
      return new Tone.Time(time).toSeconds();
    } else if (time instanceof Tone.TimeBase) {
      return time.toSeconds();
    }
  };
  Tone.prototype.toFrequency = function (freq) {
    if (this.isNumber(freq)) {
      return freq;
    } else if (this.isString(freq) || this.isUndef(freq)) {
      return new Tone.Frequency(freq).valueOf();
    } else if (freq instanceof Tone.TimeBase) {
      return freq.toFrequency();
    }
  };
  Tone.prototype.toTicks = function (time) {
    if (this.isNumber(time) || this.isString(time)) {
      return new Tone.TransportTime(time).toTicks();
    } else if (this.isUndef(time)) {
      return Tone.Transport.ticks;
    } else if (time instanceof Tone.TimeBase) {
      return time.toTicks();
    }
  };
  return Tone;
}(Tone_core_Tone, Tone_type_Time, Tone_type_Frequency, Tone_type_TransportTime);
/** Tone.js module by Yotam Mann, MIT License 2016  http://opensource.org/licenses/MIT **/
var Tone_core_Param;
Tone_core_Param = function (Tone) {
  'use strict';
  Tone.Param = function () {
    var options = this.optionsObject(arguments, [
      'param',
      'units',
      'convert'
    ], Tone.Param.defaults);
    this._param = this.input = options.param;
    this.units = options.units;
    this.convert = options.convert;
    this.overridden = false;
    this._lfo = null;
    if (this.isObject(options.lfo)) {
      this.value = options.lfo;
    } else if (!this.isUndef(options.value)) {
      this.value = options.value;
    }
  };
  Tone.extend(Tone.Param);
  Tone.Param.defaults = {
    'units': Tone.Type.Default,
    'convert': true,
    'param': undefined
  };
  Object.defineProperty(Tone.Param.prototype, 'value', {
    get: function () {
      return this._toUnits(this._param.value);
    },
    set: function (value) {
      if (this.isObject(value)) {
        if (this.isUndef(Tone.LFO)) {
          throw new Error('Include \'Tone.LFO\' to use an LFO as a Param value.');
        }
        if (this._lfo) {
          this._lfo.dispose();
        }
        this._lfo = new Tone.LFO(value).start();
        this._lfo.connect(this.input);
      } else {
        var convertedVal = this._fromUnits(value);
        this._param.cancelScheduledValues(0);
        this._param.value = convertedVal;
      }
    }
  });
  Tone.Param.prototype._fromUnits = function (val) {
    if (this.convert || this.isUndef(this.convert)) {
      switch (this.units) {
      case Tone.Type.Time:
        return this.toSeconds(val);
      case Tone.Type.Frequency:
        return this.toFrequency(val);
      case Tone.Type.Decibels:
        return this.dbToGain(val);
      case Tone.Type.NormalRange:
        return Math.min(Math.max(val, 0), 1);
      case Tone.Type.AudioRange:
        return Math.min(Math.max(val, -1), 1);
      case Tone.Type.Positive:
        return Math.max(val, 0);
      default:
        return val;
      }
    } else {
      return val;
    }
  };
  Tone.Param.prototype._toUnits = function (val) {
    if (this.convert || this.isUndef(this.convert)) {
      switch (this.units) {
      case Tone.Type.Decibels:
        return this.gainToDb(val);
      default:
        return val;
      }
    } else {
      return val;
    }
  };
  Tone.Param.prototype._minOutput = 0.00001;
  Tone.Param.prototype.setValueAtTime = function (value, time) {
    value = this._fromUnits(value);
    time = this.toSeconds(time);
    if (time <= this.now() + this.blockTime) {
      this._param.value = value;
    } else {
      this._param.setValueAtTime(value, time);
    }
    return this;
  };
  Tone.Param.prototype.setRampPoint = function (now) {
    now = this.defaultArg(now, this.now());
    var currentVal = this._param.value;
    if (currentVal === 0) {
      currentVal = this._minOutput;
    }
    this._param.setValueAtTime(currentVal, now);
    return this;
  };
  Tone.Param.prototype.linearRampToValueAtTime = function (value, endTime) {
    value = this._fromUnits(value);
    this._param.linearRampToValueAtTime(value, this.toSeconds(endTime));
    return this;
  };
  Tone.Param.prototype.exponentialRampToValueAtTime = function (value, endTime) {
    value = this._fromUnits(value);
    value = Math.max(this._minOutput, value);
    this._param.exponentialRampToValueAtTime(value, this.toSeconds(endTime));
    return this;
  };
  Tone.Param.prototype.exponentialRampToValue = function (value, rampTime, startTime) {
    startTime = this.toSeconds(startTime);
    this.setRampPoint(startTime);
    this.exponentialRampToValueAtTime(value, startTime + this.toSeconds(rampTime));
    return this;
  };
  Tone.Param.prototype.linearRampToValue = function (value, rampTime, startTime) {
    startTime = this.toSeconds(startTime);
    this.setRampPoint(startTime);
    this.linearRampToValueAtTime(value, startTime + this.toSeconds(rampTime));
    return this;
  };
  Tone.Param.prototype.setTargetAtTime = function (value, startTime, timeConstant) {
    value = this._fromUnits(value);
    value = Math.max(this._minOutput, value);
    timeConstant = Math.max(this._minOutput, timeConstant);
    this._param.setTargetAtTime(value, this.toSeconds(startTime), timeConstant);
    return this;
  };
  Tone.Param.prototype.setValueCurveAtTime = function (values, startTime, duration) {
    for (var i = 0; i < values.length; i++) {
      values[i] = this._fromUnits(values[i]);
    }
    this._param.setValueCurveAtTime(values, this.toSeconds(startTime), this.toSeconds(duration));
    return this;
  };
  Tone.Param.prototype.cancelScheduledValues = function (startTime) {
    this._param.cancelScheduledValues(this.toSeconds(startTime));
    return this;
  };
  Tone.Param.prototype.rampTo = function (value, rampTime, startTime) {
    rampTime = this.defaultArg(rampTime, 0);
    if (this.units === Tone.Type.Frequency || this.units === Tone.Type.BPM || this.units === Tone.Type.Decibels) {
      this.exponentialRampToValue(value, rampTime, startTime);
    } else {
      this.linearRampToValue(value, rampTime, startTime);
    }
    return this;
  };
  Object.defineProperty(Tone.Param.prototype, 'lfo', {
    get: function () {
      return this._lfo;
    }
  });
  Tone.Param.prototype.dispose = function () {
    Tone.prototype.dispose.call(this);
    this._param = null;
    if (this._lfo) {
      this._lfo.dispose();
      this._lfo = null;
    }
    return this;
  };
  return Tone.Param;
}(Tone_core_Tone);
/** Tone.js module by Yotam Mann, MIT License 2016  http://opensource.org/licenses/MIT **/
var Tone_core_Gain;
Tone_core_Gain = function (Tone) {
  'use strict';
  if (window.GainNode && !AudioContext.prototype.createGain) {
    AudioContext.prototype.createGain = AudioContext.prototype.createGainNode;
  }
  Tone.Gain = function () {
    var options = this.optionsObject(arguments, [
      'gain',
      'units'
    ], Tone.Gain.defaults);
    this.input = this.output = this._gainNode = this.context.createGain();
    this.gain = new Tone.Param({
      'param': this._gainNode.gain,
      'units': options.units,
      'value': options.gain,
      'convert': options.convert
    });
    this._readOnly('gain');
  };
  Tone.extend(Tone.Gain);
  Tone.Gain.defaults = {
    'gain': 1,
    'convert': true
  };
  Tone.Gain.prototype.dispose = function () {
    Tone.Param.prototype.dispose.call(this);
    this._gainNode.disconnect();
    this._gainNode = null;
    this._writable('gain');
    this.gain.dispose();
    this.gain = null;
  };
  Tone.prototype.createInsOuts = function (inputs, outputs) {
    if (inputs === 1) {
      this.input = new Tone.Gain();
    } else if (inputs > 1) {
      this.input = new Array(inputs);
    }
    if (outputs === 1) {
      this.output = new Tone.Gain();
    } else if (outputs > 1) {
      this.output = new Array(inputs);
    }
  };
  return Tone.Gain;
}(Tone_core_Tone, Tone_core_Param);
/** Tone.js module by Yotam Mann, MIT License 2016  http://opensource.org/licenses/MIT **/
var Tone_signal_Signal;
Tone_signal_Signal = function (Tone) {
  'use strict';
  Tone.Signal = function () {
    var options = this.optionsObject(arguments, [
      'value',
      'units'
    ], Tone.Signal.defaults);
    this.output = this._gain = this.context.createGain();
    options.param = this._gain.gain;
    Tone.Param.call(this, options);
    this.input = this._param = this._gain.gain;
    this.context.getConstant(1).chain(this._gain);
  };
  Tone.extend(Tone.Signal, Tone.Param);
  Tone.Signal.defaults = {
    'value': 0,
    'units': Tone.Type.Default,
    'convert': true
  };
  Tone.Signal.prototype.connect = Tone.SignalBase.prototype.connect;
  Tone.Signal.prototype.dispose = function () {
    Tone.Param.prototype.dispose.call(this);
    this._param = null;
    this._gain.disconnect();
    this._gain = null;
    return this;
  };
  return Tone.Signal;
}(Tone_core_Tone, Tone_signal_WaveShaper, Tone_type_Type, Tone_core_Param);
/** Tone.js module by Yotam Mann, MIT License 2016  http://opensource.org/licenses/MIT **/
var Tone_signal_Add;
Tone_signal_Add = function (Tone) {
  'use strict';
  Tone.Add = function (value) {
    this.createInsOuts(2, 0);
    this._sum = this.input[0] = this.input[1] = this.output = new Tone.Gain();
    this._param = this.input[1] = new Tone.Signal(value);
    this._param.connect(this._sum);
  };
  Tone.extend(Tone.Add, Tone.Signal);
  Tone.Add.prototype.dispose = function () {
    Tone.prototype.dispose.call(this);
    this._sum.dispose();
    this._sum = null;
    this._param.dispose();
    this._param = null;
    return this;
  };
  return Tone.Add;
}(Tone_core_Tone, Tone_signal_Signal);
/** Tone.js module by Yotam Mann, MIT License 2016  http://opensource.org/licenses/MIT **/
var Tone_signal_Multiply;
Tone_signal_Multiply = function (Tone) {
  'use strict';
  Tone.Multiply = function (value) {
    this.createInsOuts(2, 0);
    this._mult = this.input[0] = this.output = new Tone.Gain();
    this._param = this.input[1] = this.output.gain;
    this._param.value = this.defaultArg(value, 0);
  };
  Tone.extend(Tone.Multiply, Tone.Signal);
  Tone.Multiply.prototype.dispose = function () {
    Tone.prototype.dispose.call(this);
    this._mult.dispose();
    this._mult = null;
    this._param = null;
    return this;
  };
  return Tone.Multiply;
}(Tone_core_Tone, Tone_signal_Signal);
/** Tone.js module by Yotam Mann, MIT License 2016  http://opensource.org/licenses/MIT **/
var Tone_signal_Scale;
Tone_signal_Scale = function (Tone) {
  'use strict';
  Tone.Scale = function (outputMin, outputMax) {
    this._outputMin = this.defaultArg(outputMin, 0);
    this._outputMax = this.defaultArg(outputMax, 1);
    this._scale = this.input = new Tone.Multiply(1);
    this._add = this.output = new Tone.Add(0);
    this._scale.connect(this._add);
    this._setRange();
  };
  Tone.extend(Tone.Scale, Tone.SignalBase);
  Object.defineProperty(Tone.Scale.prototype, 'min', {
    get: function () {
      return this._outputMin;
    },
    set: function (min) {
      this._outputMin = min;
      this._setRange();
    }
  });
  Object.defineProperty(Tone.Scale.prototype, 'max', {
    get: function () {
      return this._outputMax;
    },
    set: function (max) {
      this._outputMax = max;
      this._setRange();
    }
  });
  Tone.Scale.prototype._setRange = function () {
    this._add.value = this._outputMin;
    this._scale.value = this._outputMax - this._outputMin;
  };
  Tone.Scale.prototype.dispose = function () {
    Tone.prototype.dispose.call(this);
    this._add.dispose();
    this._add = null;
    this._scale.dispose();
    this._scale = null;
    return this;
  };
  return Tone.Scale;
}(Tone_core_Tone, Tone_signal_Add, Tone_signal_Multiply);
var signal;
'use strict';
signal = function () {
  // Signal is built with the Tone.js signal by Yotam Mann
  // https://github.com/TONEnoTONE/Tone.js/
  var Signal = Tone_signal_Signal;
  var Add = Tone_signal_Add;
  var Mult = Tone_signal_Multiply;
  var Scale = Tone_signal_Scale;
  var Tone = Tone_core_Tone;
  var p5sound = master;
  Tone.setContext(p5sound.audiocontext);
  /**
   *  <p>p5.Signal is a constant audio-rate signal used by p5.Oscillator
   *  and p5.Envelope for modulation math.</p>
   *
   *  <p>This is necessary because Web Audio is processed on a seprate clock.
   *  For example, the p5 draw loop runs about 60 times per second. But
   *  the audio clock must process samples 44100 times per second. If we
   *  want to add a value to each of those samples, we can't do it in the
   *  draw loop, but we can do it by adding a constant-rate audio signal.</p.
   *
   *  <p>This class mostly functions behind the scenes in p5.sound, and returns
   *  a Tone.Signal from the Tone.js library by Yotam Mann.
   *  If you want to work directly with audio signals for modular
   *  synthesis, check out
   *  <a href='http://bit.ly/1oIoEng' target=_'blank'>tone.js.</a></p>
   *
   *  @class  p5.Signal
   *  @constructor
   *  @return {Tone.Signal} A Signal object from the Tone.js library
   *  @example
   *  <div><code>
   *  function setup() {
   *    carrier = new p5.Oscillator('sine');
   *    carrier.amp(1); // set amplitude
   *    carrier.freq(220); // set frequency
   *    carrier.start(); // start oscillating
   *
   *    modulator = new p5.Oscillator('sawtooth');
   *    modulator.disconnect();
   *    modulator.amp(1);
   *    modulator.freq(4);
   *    modulator.start();
   *
   *    // Modulator's default amplitude range is -1 to 1.
   *    // Multiply it by -200, so the range is -200 to 200
   *    // then add 220 so the range is 20 to 420
   *    carrier.freq( modulator.mult(-200).add(220) );
   *  }
   *  </code></div>
   */
  p5.Signal = function (value) {
    var s = new Signal(value);
    // p5sound.soundArray.push(s);
    return s;
  };
  /**
   *  Fade to value, for smooth transitions
   *
   *  @method  fade
   *  @param  {Number} value          Value to set this signal
   *  @param  {Number} [secondsFromNow] Length of fade, in seconds from now
   */
  Signal.prototype.fade = Signal.prototype.linearRampToValueAtTime;
  Mult.prototype.fade = Signal.prototype.fade;
  Add.prototype.fade = Signal.prototype.fade;
  Scale.prototype.fade = Signal.prototype.fade;
  /**
   *  Connect a p5.sound object or Web Audio node to this
   *  p5.Signal so that its amplitude values can be scaled.
   *
   *  @method setInput
   *  @param {Object} input
   */
  Signal.prototype.setInput = function (_input) {
    _input.connect(this);
  };
  Mult.prototype.setInput = Signal.prototype.setInput;
  Add.prototype.setInput = Signal.prototype.setInput;
  Scale.prototype.setInput = Signal.prototype.setInput;
  // signals can add / mult / scale themselves
  /**
   *  Add a constant value to this audio signal,
   *  and return the resulting audio signal. Does
   *  not change the value of the original signal,
   *  instead it returns a new p5.SignalAdd.
   *
   *  @method  add
   *  @param {Number} number
   *  @return {p5.Signal} object
   */
  Signal.prototype.add = function (num) {
    var add = new Add(num);
    // add.setInput(this);
    this.connect(add);
    return add;
  };
  Mult.prototype.add = Signal.prototype.add;
  Add.prototype.add = Signal.prototype.add;
  Scale.prototype.add = Signal.prototype.add;
  /**
   *  Multiply this signal by a constant value,
   *  and return the resulting audio signal. Does
   *  not change the value of the original signal,
   *  instead it returns a new p5.SignalMult.
   *
   *  @method  mult
   *  @param {Number} number to multiply
   *  @return {p5.Signal} object
   */
  Signal.prototype.mult = function (num) {
    var mult = new Mult(num);
    // mult.setInput(this);
    this.connect(mult);
    return mult;
  };
  Mult.prototype.mult = Signal.prototype.mult;
  Add.prototype.mult = Signal.prototype.mult;
  Scale.prototype.mult = Signal.prototype.mult;
  /**
   *  Scale this signal value to a given range,
   *  and return the result as an audio signal. Does
   *  not change the value of the original signal,
   *  instead it returns a new p5.SignalScale.
   *
   *  @method  scale
   *  @param {Number} number to multiply
   *  @param  {Number} inMin  input range minumum
   *  @param  {Number} inMax  input range maximum
   *  @param  {Number} outMin input range minumum
   *  @param  {Number} outMax input range maximum
   *  @return {p5.Signal} object
   */
  Signal.prototype.scale = function (inMin, inMax, outMin, outMax) {
    var mapOutMin, mapOutMax;
    if (arguments.length === 4) {
      mapOutMin = p5.prototype.map(outMin, inMin, inMax, 0, 1) - 0.5;
      mapOutMax = p5.prototype.map(outMax, inMin, inMax, 0, 1) - 0.5;
    } else {
      mapOutMin = arguments[0];
      mapOutMax = arguments[1];
    }
    var scale = new Scale(mapOutMin, mapOutMax);
    this.connect(scale);
    return scale;
  };
  Mult.prototype.scale = Signal.prototype.scale;
  Add.prototype.scale = Signal.prototype.scale;
  Scale.prototype.scale = Signal.prototype.scale;
}(Tone_signal_Signal, Tone_signal_Add, Tone_signal_Multiply, Tone_signal_Scale, Tone_core_Tone, master);
var oscillator;
'use strict';
oscillator = function () {
  var p5sound = master;
  var Add = Tone_signal_Add;
  var Mult = Tone_signal_Multiply;
  var Scale = Tone_signal_Scale;
  /**
   *  <p>Creates a signal that oscillates between -1.0 and 1.0.
   *  By default, the oscillation takes the form of a sinusoidal
   *  shape ('sine'). Additional types include 'triangle',
   *  'sawtooth' and 'square'. The frequency defaults to
   *  440 oscillations per second (440Hz, equal to the pitch of an
   *  'A' note).</p>
   *
   *  <p>Set the type of oscillation with setType(), or by instantiating a
   *  specific oscillator: <a href="/reference/#/p5.SinOsc">p5.SinOsc</a>, <a
   *  href="/reference/#/p5.TriOsc">p5.TriOsc</a>, <a
   *  href="/reference/#/p5.SqrOsc">p5.SqrOsc</a>, or <a
   *  href="/reference/#/p5.SawOsc">p5.SawOsc</a>.
   *  </p>
   *
   *  @class p5.Oscillator
   *  @constructor
   *  @param {Number} [freq] frequency defaults to 440Hz
   *  @param {String} [type] type of oscillator. Options:
   *                         'sine' (default), 'triangle',
   *                         'sawtooth', 'square'
   *  @example
   *  <div><code>
   *  var osc;
   *  var playing = false;
   *
   *  function setup() {
   *    backgroundColor = color(255,0,255);
   *    textAlign(CENTER);
   *
   *    osc = new p5.Oscillator();
   *    osc.setType('sine');
   *    osc.freq(240);
   *    osc.amp(0);
   *    osc.start();
   *  }
   *
   *  function draw() {
   *    background(backgroundColor)
   *    text('click to play', width/2, height/2);
   *  }
   *
   *  function mouseClicked() {
   *    if (mouseX > 0 && mouseX < width && mouseY < height && mouseY > 0) {
   *      if (!playing) {
   *        // ramp amplitude to 0.5 over 0.05 seconds
   *        osc.amp(0.5, 0.05);
   *        playing = true;
   *        backgroundColor = color(0,255,255);
   *      } else {
   *        // ramp amplitude to 0 over 0.5 seconds
   *        osc.amp(0, 0.5);
   *        playing = false;
   *        backgroundColor = color(255,0,255);
   *      }
   *    }
   *  }
   *  </code> </div>
   */
  p5.Oscillator = function (freq, type) {
    if (typeof freq === 'string') {
      var f = type;
      type = freq;
      freq = f;
    }
    if (typeof type === 'number') {
      var f = type;
      type = freq;
      freq = f;
    }
    this.started = false;
    // components
    this.phaseAmount = undefined;
    this.oscillator = p5sound.audiocontext.createOscillator();
    this.f = freq || 440;
    // frequency
    this.oscillator.type = type || 'sine';
    this.oscillator.frequency.setValueAtTime(this.f, p5sound.audiocontext.currentTime);
    // connections
    this.output = p5sound.audiocontext.createGain();
    this._freqMods = [];
    // modulators connected to this oscillator's frequency
    // set default output gain to 0.5
    this.output.gain.value = 0.5;
    this.output.gain.setValueAtTime(0.5, p5sound.audiocontext.currentTime);
    this.oscillator.connect(this.output);
    // stereo panning
    this.panPosition = 0;
    this.connection = p5sound.input;
    // connect to p5sound by default
    this.panner = new p5.Panner(this.output, this.connection, 1);
    //array of math operation signal chaining
    this.mathOps = [this.output];
    // add to the soundArray so we can dispose of the osc later
    p5sound.soundArray.push(this);
  };
  /**
   *  Start an oscillator. Accepts an optional parameter to
   *  determine how long (in seconds from now) until the
   *  oscillator starts.
   *
   *  @method  start
   *  @param  {Number} [time] startTime in seconds from now.
   *  @param  {Number} [frequency] frequency in Hz.
   */
  p5.Oscillator.prototype.start = function (time, f) {
    if (this.started) {
      var now = p5sound.audiocontext.currentTime;
      this.stop(now);
    }
    if (!this.started) {
      var freq = f || this.f;
      var type = this.oscillator.type;
      // set old osc free to be garbage collected (memory)
      if (this.oscillator) {
        this.oscillator.disconnect();
        this.oscillator = undefined;
      }
      // var detune = this.oscillator.frequency.value;
      this.oscillator = p5sound.audiocontext.createOscillator();
      this.oscillator.frequency.value = Math.abs(freq);
      this.oscillator.type = type;
      // this.oscillator.detune.value = detune;
      this.oscillator.connect(this.output);
      time = time || 0;
      this.oscillator.start(time + p5sound.audiocontext.currentTime);
      this.freqNode = this.oscillator.frequency;
      // if other oscillators are already connected to this osc's freq
      for (var i in this._freqMods) {
        if (typeof this._freqMods[i].connect !== 'undefined') {
          this._freqMods[i].connect(this.oscillator.frequency);
        }
      }
      this.started = true;
    }
  };
  /**
   *  Stop an oscillator. Accepts an optional parameter
   *  to determine how long (in seconds from now) until the
   *  oscillator stops.
   *
   *  @method  stop
   *  @param  {Number} secondsFromNow Time, in seconds from now.
   */
  p5.Oscillator.prototype.stop = function (time) {
    if (this.started) {
      var t = time || 0;
      var now = p5sound.audiocontext.currentTime;
      this.oscillator.stop(t + now);
      this.started = false;
    }
  };
  /**
   *  Set the amplitude between 0 and 1.0. Or, pass in an object
   *  such as an oscillator to modulate amplitude with an audio signal.
   *
   *  @method  amp
   *  @param  {Number|Object} vol between 0 and 1.0
   *                              or a modulating signal/oscillator
   *  @param {Number} [rampTime] create a fade that lasts rampTime
   *  @param {Number} [timeFromNow] schedule this event to happen
   *                                seconds from now
   *  @return  {AudioParam} gain  If no value is provided,
   *                              returns the Web Audio API
   *                              AudioParam that controls
   *                              this oscillator's
   *                              gain/amplitude/volume)
   */
  p5.Oscillator.prototype.amp = function (vol, rampTime, tFromNow) {
    var self = this;
    if (typeof vol === 'number') {
      var rampTime = rampTime || 0;
      var tFromNow = tFromNow || 0;
      var now = p5sound.audiocontext.currentTime;
      this.output.gain.linearRampToValueAtTime(vol, now + tFromNow + rampTime);
    } else if (vol) {
      vol.connect(self.output.gain);
    } else {
      // return the Gain Node
      return this.output.gain;
    }
  };
  // these are now the same thing
  p5.Oscillator.prototype.fade = p5.Oscillator.prototype.amp;
  p5.Oscillator.prototype.getAmp = function () {
    return this.output.gain.value;
  };
  /**
   *  Set frequency of an oscillator to a value. Or, pass in an object
   *  such as an oscillator to modulate the frequency with an audio signal.
   *
   *  @method  freq
   *  @param  {Number|Object} Frequency Frequency in Hz
   *                                        or modulating signal/oscillator
   *  @param  {Number} [rampTime] Ramp time (in seconds)
   *  @param  {Number} [timeFromNow] Schedule this event to happen
   *                                   at x seconds from now
   *  @return  {AudioParam} Frequency If no value is provided,
   *                                  returns the Web Audio API
   *                                  AudioParam that controls
   *                                  this oscillator's frequency
   *  @example
   *  <div><code>
   *  var osc = new p5.Oscillator(300);
   *  osc.start();
   *  osc.freq(40, 10);
   *  </code></div>
   */
  p5.Oscillator.prototype.freq = function (val, rampTime, tFromNow) {
    if (typeof val === 'number' && !isNaN(val)) {
      this.f = val;
      var now = p5sound.audiocontext.currentTime;
      var rampTime = rampTime || 0;
      var tFromNow = tFromNow || 0;
      var t = now + tFromNow + rampTime;
      // var currentFreq = this.oscillator.frequency.value;
      // this.oscillator.frequency.cancelScheduledValues(now);
      if (rampTime === 0) {
        this.oscillator.frequency.setValueAtTime(val, tFromNow + now);
      } else {
        if (val > 0) {
          this.oscillator.frequency.exponentialRampToValueAtTime(val, tFromNow + rampTime + now);
        } else {
          this.oscillator.frequency.linearRampToValueAtTime(val, tFromNow + rampTime + now);
        }
      }
      // reset phase if oscillator has a phase
      if (this.phaseAmount) {
        this.phase(this.phaseAmount);
      }
    } else if (val) {
      if (val.output) {
        val = val.output;
      }
      val.connect(this.oscillator.frequency);
      // keep track of what is modulating this param
      // so it can be re-connected if
      this._freqMods.push(val);
    } else {
      // return the Frequency Node
      return this.oscillator.frequency;
    }
  };
  p5.Oscillator.prototype.getFreq = function () {
    return this.oscillator.frequency.value;
  };
  /**
   *  Set type to 'sine', 'triangle', 'sawtooth' or 'square'.
   *
   *  @method  setType
   *  @param {String} type 'sine', 'triangle', 'sawtooth' or 'square'.
   */
  p5.Oscillator.prototype.setType = function (type) {
    this.oscillator.type = type;
  };
  p5.Oscillator.prototype.getType = function () {
    return this.oscillator.type;
  };
  /**
   *  Connect to a p5.sound / Web Audio object.
   *
   *  @method  connect
   *  @param  {Object} unit A p5.sound or Web Audio object
   */
  p5.Oscillator.prototype.connect = function (unit) {
    if (!unit) {
      this.panner.connect(p5sound.input);
    } else if (unit.hasOwnProperty('input')) {
      this.panner.connect(unit.input);
      this.connection = unit.input;
    } else {
      this.panner.connect(unit);
      this.connection = unit;
    }
  };
  /**
   *  Disconnect all outputs
   *
   *  @method  disconnect
   */
  p5.Oscillator.prototype.disconnect = function () {
    this.output.disconnect();
    this.panner.disconnect();
    this.output.connect(this.panner);
    this.oscMods = [];
  };
  /**
   *  Pan between Left (-1) and Right (1)
   *
   *  @method  pan
   *  @param  {Number} panning Number between -1 and 1
   *  @param  {Number} timeFromNow schedule this event to happen
   *                                seconds from now
   */
  p5.Oscillator.prototype.pan = function (pval, tFromNow) {
    this.panPosition = pval;
    this.panner.pan(pval, tFromNow);
  };
  p5.Oscillator.prototype.getPan = function () {
    return this.panPosition;
  };
  // get rid of the oscillator
  p5.Oscillator.prototype.dispose = function () {
    // remove reference from soundArray
    var index = p5sound.soundArray.indexOf(this);
    p5sound.soundArray.splice(index, 1);
    if (this.oscillator) {
      var now = p5sound.audiocontext.currentTime;
      this.stop(now);
      this.disconnect();
      this.panner = null;
      this.oscillator = null;
    }
    // if it is a Pulse
    if (this.osc2) {
      this.osc2.dispose();
    }
  };
  /**
   *  Set the phase of an oscillator between 0.0 and 1.0.
   *  In this implementation, phase is a delay time
   *  based on the oscillator's current frequency.
   *
   *  @method  phase
   *  @param  {Number} phase float between 0.0 and 1.0
   */
  p5.Oscillator.prototype.phase = function (p) {
    var delayAmt = p5.prototype.map(p, 0, 1, 0, 1 / this.f);
    var now = p5sound.audiocontext.currentTime;
    this.phaseAmount = p;
    if (!this.dNode) {
      // create a delay node
      this.dNode = p5sound.audiocontext.createDelay();
      // put the delay node in between output and panner
      this.oscillator.disconnect();
      this.oscillator.connect(this.dNode);
      this.dNode.connect(this.output);
    }
    // set delay time to match phase:
    this.dNode.delayTime.setValueAtTime(delayAmt, now);
  };
  // ========================== //
  // SIGNAL MATH FOR MODULATION //
  // ========================== //
  // return sigChain(this, scale, thisChain, nextChain, Scale);
  var sigChain = function (o, mathObj, thisChain, nextChain, type) {
    var chainSource = o.oscillator;
    // if this type of math already exists in the chain, replace it
    for (var i in o.mathOps) {
      if (o.mathOps[i] instanceof type) {
        chainSource.disconnect();
        o.mathOps[i].dispose();
        thisChain = i;
        // assume nextChain is output gain node unless...
        if (thisChain < o.mathOps.length - 2) {
          nextChain = o.mathOps[i + 1];
        }
      }
    }
    if (thisChain === o.mathOps.length - 1) {
      o.mathOps.push(nextChain);
    }
    // assume source is the oscillator unless i > 0
    if (i > 0) {
      chainSource = o.mathOps[i - 1];
    }
    chainSource.disconnect();
    chainSource.connect(mathObj);
    mathObj.connect(nextChain);
    o.mathOps[thisChain] = mathObj;
    return o;
  };
  /**
   *  Add a value to the p5.Oscillator's output amplitude,
   *  and return the oscillator. Calling this method again
   *  will override the initial add() with a new value.
   *
   *  @method  add
   *  @param {Number} number Constant number to add
   *  @return {p5.Oscillator} Oscillator Returns this oscillator
   *                                     with scaled output
   *
   */
  p5.Oscillator.prototype.add = function (num) {
    var add = new Add(num);
    var thisChain = this.mathOps.length - 1;
    var nextChain = this.output;
    return sigChain(this, add, thisChain, nextChain, Add);
  };
  /**
   *  Multiply the p5.Oscillator's output amplitude
   *  by a fixed value (i.e. turn it up!). Calling this method
   *  again will override the initial mult() with a new value.
   *
   *  @method  mult
   *  @param {Number} number Constant number to multiply
   *  @return {p5.Oscillator} Oscillator Returns this oscillator
   *                                     with multiplied output
   */
  p5.Oscillator.prototype.mult = function (num) {
    var mult = new Mult(num);
    var thisChain = this.mathOps.length - 1;
    var nextChain = this.output;
    return sigChain(this, mult, thisChain, nextChain, Mult);
  };
  /**
   *  Scale this oscillator's amplitude values to a given
   *  range, and return the oscillator. Calling this method
   *  again will override the initial scale() with new values.
   *
   *  @method  scale
   *  @param  {Number} inMin  input range minumum
   *  @param  {Number} inMax  input range maximum
   *  @param  {Number} outMin input range minumum
   *  @param  {Number} outMax input range maximum
   *  @return {p5.Oscillator} Oscillator Returns this oscillator
   *                                     with scaled output
   */
  p5.Oscillator.prototype.scale = function (inMin, inMax, outMin, outMax) {
    var mapOutMin, mapOutMax;
    if (arguments.length === 4) {
      mapOutMin = p5.prototype.map(outMin, inMin, inMax, 0, 1) - 0.5;
      mapOutMax = p5.prototype.map(outMax, inMin, inMax, 0, 1) - 0.5;
    } else {
      mapOutMin = arguments[0];
      mapOutMax = arguments[1];
    }
    var scale = new Scale(mapOutMin, mapOutMax);
    var thisChain = this.mathOps.length - 1;
    var nextChain = this.output;
    return sigChain(this, scale, thisChain, nextChain, Scale);
  };
  // ============================== //
  // SinOsc, TriOsc, SqrOsc, SawOsc //
  // ============================== //
  /**
   *  Constructor: <code>new p5.SinOsc()</code>.
   *  This creates a Sine Wave Oscillator and is
   *  equivalent to <code> new p5.Oscillator('sine')
   *  </code> or creating a p5.Oscillator and then calling
   *  its method <code>setType('sine')</code>.
   *  See p5.Oscillator for methods.
   *
   *  @class  p5.SinOsc
   *  @constructor
   *  @extends p5.Oscillator
   *  @param {Number} [freq] Set the frequency
   */
  p5.SinOsc = function (freq) {
    p5.Oscillator.call(this, freq, 'sine');
  };
  p5.SinOsc.prototype = Object.create(p5.Oscillator.prototype);
  /**
   *  Constructor: <code>new p5.TriOsc()</code>.
   *  This creates a Triangle Wave Oscillator and is
   *  equivalent to <code>new p5.Oscillator('triangle')
   *  </code> or creating a p5.Oscillator and then calling
   *  its method <code>setType('triangle')</code>.
   *  See p5.Oscillator for methods.
   *
   *  @class  p5.TriOsc
   *  @constructor
   *  @extends p5.Oscillator
   *  @param {Number} [freq] Set the frequency
   */
  p5.TriOsc = function (freq) {
    p5.Oscillator.call(this, freq, 'triangle');
  };
  p5.TriOsc.prototype = Object.create(p5.Oscillator.prototype);
  /**
   *  Constructor: <code>new p5.SawOsc()</code>.
   *  This creates a SawTooth Wave Oscillator and is
   *  equivalent to <code> new p5.Oscillator('sawtooth')
   *  </code> or creating a p5.Oscillator and then calling
   *  its method <code>setType('sawtooth')</code>.
   *  See p5.Oscillator for methods.
   *
   *  @class  p5.SawOsc
   *  @constructor
   *  @extends p5.Oscillator
   *  @param {Number} [freq] Set the frequency
   */
  p5.SawOsc = function (freq) {
    p5.Oscillator.call(this, freq, 'sawtooth');
  };
  p5.SawOsc.prototype = Object.create(p5.Oscillator.prototype);
  /**
   *  Constructor: <code>new p5.SqrOsc()</code>.
   *  This creates a Square Wave Oscillator and is
   *  equivalent to <code> new p5.Oscillator('square')
   *  </code> or creating a p5.Oscillator and then calling
   *  its method <code>setType('square')</code>.
   *  See p5.Oscillator for methods.
   *
   *  @class  p5.SqrOsc
   *  @constructor
   *  @extends p5.Oscillator
   *  @param {Number} [freq] Set the frequency
   */
  p5.SqrOsc = function (freq) {
    p5.Oscillator.call(this, freq, 'square');
  };
  p5.SqrOsc.prototype = Object.create(p5.Oscillator.prototype);
}(master, Tone_signal_Add, Tone_signal_Multiply, Tone_signal_Scale);
/** Tone.js module by Yotam Mann, MIT License 2016  http://opensource.org/licenses/MIT **/
var Tone_core_Timeline;
Tone_core_Timeline = function (Tone) {
  'use strict';
  Tone.Timeline = function () {
    var options = this.optionsObject(arguments, ['memory'], Tone.Timeline.defaults);
    this._timeline = [];
    this._toRemove = [];
    this._iterating = false;
    this.memory = options.memory;
  };
  Tone.extend(Tone.Timeline);
  Tone.Timeline.defaults = { 'memory': Infinity };
  Object.defineProperty(Tone.Timeline.prototype, 'length', {
    get: function () {
      return this._timeline.length;
    }
  });
  Tone.Timeline.prototype.add = function (event) {
    if (this.isUndef(event.time)) {
      throw new Error('Tone.Timeline: events must have a time attribute');
    }
    if (this._timeline.length) {
      var index = this._search(event.time);
      this._timeline.splice(index + 1, 0, event);
    } else {
      this._timeline.push(event);
    }
    if (this.length > this.memory) {
      var diff = this.length - this.memory;
      this._timeline.splice(0, diff);
    }
    return this;
  };
  Tone.Timeline.prototype.remove = function (event) {
    if (this._iterating) {
      this._toRemove.push(event);
    } else {
      var index = this._timeline.indexOf(event);
      if (index !== -1) {
        this._timeline.splice(index, 1);
      }
    }
    return this;
  };
  Tone.Timeline.prototype.get = function (time) {
    var index = this._search(time);
    if (index !== -1) {
      return this._timeline[index];
    } else {
      return null;
    }
  };
  Tone.Timeline.prototype.peek = function () {
    return this._timeline[0];
  };
  Tone.Timeline.prototype.shift = function () {
    return this._timeline.shift();
  };
  Tone.Timeline.prototype.getAfter = function (time) {
    var index = this._search(time);
    if (index + 1 < this._timeline.length) {
      return this._timeline[index + 1];
    } else {
      return null;
    }
  };
  Tone.Timeline.prototype.getBefore = function (time) {
    var len = this._timeline.length;
    if (len > 0 && this._timeline[len - 1].time < time) {
      return this._timeline[len - 1];
    }
    var index = this._search(time);
    if (index - 1 >= 0) {
      return this._timeline[index - 1];
    } else {
      return null;
    }
  };
  Tone.Timeline.prototype.cancel = function (after) {
    if (this._timeline.length > 1) {
      var index = this._search(after);
      if (index >= 0) {
        if (this._timeline[index].time === after) {
          for (var i = index; i >= 0; i--) {
            if (this._timeline[i].time === after) {
              index = i;
            } else {
              break;
            }
          }
          this._timeline = this._timeline.slice(0, index);
        } else {
          this._timeline = this._timeline.slice(0, index + 1);
        }
      } else {
        this._timeline = [];
      }
    } else if (this._timeline.length === 1) {
      if (this._timeline[0].time >= after) {
        this._timeline = [];
      }
    }
    return this;
  };
  Tone.Timeline.prototype.cancelBefore = function (time) {
    if (this._timeline.length) {
      var index = this._search(time);
      if (index >= 0) {
        this._timeline = this._timeline.slice(index + 1);
      }
    }
    return this;
  };
  Tone.Timeline.prototype._search = function (time) {
    var beginning = 0;
    var len = this._timeline.length;
    var end = len;
    if (len > 0 && this._timeline[len - 1].time <= time) {
      return len - 1;
    }
    while (beginning < end) {
      var midPoint = Math.floor(beginning + (end - beginning) / 2);
      var event = this._timeline[midPoint];
      var nextEvent = this._timeline[midPoint + 1];
      if (event.time === time) {
        for (var i = midPoint; i < this._timeline.length; i++) {
          var testEvent = this._timeline[i];
          if (testEvent.time === time) {
            midPoint = i;
          }
        }
        return midPoint;
      } else if (event.time < time && nextEvent.time > time) {
        return midPoint;
      } else if (event.time > time) {
        end = midPoint;
      } else if (event.time < time) {
        beginning = midPoint + 1;
      }
    }
    return -1;
  };
  Tone.Timeline.prototype._iterate = function (callback, lowerBound, upperBound) {
    this._iterating = true;
    lowerBound = this.defaultArg(lowerBound, 0);
    upperBound = this.defaultArg(upperBound, this._timeline.length - 1);
    for (var i = lowerBound; i <= upperBound; i++) {
      callback(this._timeline[i]);
    }
    this._iterating = false;
    if (this._toRemove.length > 0) {
      for (var j = 0; j < this._toRemove.length; j++) {
        var index = this._timeline.indexOf(this._toRemove[j]);
        if (index !== -1) {
          this._timeline.splice(index, 1);
        }
      }
      this._toRemove = [];
    }
  };
  Tone.Timeline.prototype.forEach = function (callback) {
    this._iterate(callback);
    return this;
  };
  Tone.Timeline.prototype.forEachBefore = function (time, callback) {
    var upperBound = this._search(time);
    if (upperBound !== -1) {
      this._iterate(callback, 0, upperBound);
    }
    return this;
  };
  Tone.Timeline.prototype.forEachAfter = function (time, callback) {
    var lowerBound = this._search(time);
    this._iterate(callback, lowerBound + 1);
    return this;
  };
  Tone.Timeline.prototype.forEachFrom = function (time, callback) {
    var lowerBound = this._search(time);
    while (lowerBound >= 0 && this._timeline[lowerBound].time >= time) {
      lowerBound--;
    }
    this._iterate(callback, lowerBound + 1);
    return this;
  };
  Tone.Timeline.prototype.forEachAtTime = function (time, callback) {
    var upperBound = this._search(time);
    if (upperBound !== -1) {
      this._iterate(function (event) {
        if (event.time === time) {
          callback(event);
        }
      }, 0, upperBound);
    }
    return this;
  };
  Tone.Timeline.prototype.dispose = function () {
    Tone.prototype.dispose.call(this);
    this._timeline = null;
    this._toRemove = null;
  };
  return Tone.Timeline;
}(Tone_core_Tone);
/** Tone.js module by Yotam Mann, MIT License 2016  http://opensource.org/licenses/MIT **/
var Tone_signal_TimelineSignal;
Tone_signal_TimelineSignal = function (Tone) {
  'use strict';
  Tone.TimelineSignal = function () {
    var options = this.optionsObject(arguments, [
      'value',
      'units'
    ], Tone.Signal.defaults);
    this._events = new Tone.Timeline(10);
    Tone.Signal.apply(this, options);
    options.param = this._param;
    Tone.Param.call(this, options);
    this._initial = this._fromUnits(this._param.value);
  };
  Tone.extend(Tone.TimelineSignal, Tone.Param);
  Tone.TimelineSignal.Type = {
    Linear: 'linear',
    Exponential: 'exponential',
    Target: 'target',
    Curve: 'curve',
    Set: 'set'
  };
  Object.defineProperty(Tone.TimelineSignal.prototype, 'value', {
    get: function () {
      var now = this.now();
      var val = this.getValueAtTime(now);
      return this._toUnits(val);
    },
    set: function (value) {
      var convertedVal = this._fromUnits(value);
      this._initial = convertedVal;
      this.cancelScheduledValues();
      this._param.value = convertedVal;
    }
  });
  Tone.TimelineSignal.prototype.setValueAtTime = function (value, startTime) {
    value = this._fromUnits(value);
    startTime = this.toSeconds(startTime);
    this._events.add({
      'type': Tone.TimelineSignal.Type.Set,
      'value': value,
      'time': startTime
    });
    this._param.setValueAtTime(value, startTime);
    return this;
  };
  Tone.TimelineSignal.prototype.linearRampToValueAtTime = function (value, endTime) {
    value = this._fromUnits(value);
    endTime = this.toSeconds(endTime);
    this._events.add({
      'type': Tone.TimelineSignal.Type.Linear,
      'value': value,
      'time': endTime
    });
    this._param.linearRampToValueAtTime(value, endTime);
    return this;
  };
  Tone.TimelineSignal.prototype.exponentialRampToValueAtTime = function (value, endTime) {
    endTime = this.toSeconds(endTime);
    var beforeEvent = this._searchBefore(endTime);
    if (beforeEvent && beforeEvent.value === 0) {
      this.setValueAtTime(this._minOutput, beforeEvent.time);
    }
    value = this._fromUnits(value);
    var setValue = Math.max(value, this._minOutput);
    this._events.add({
      'type': Tone.TimelineSignal.Type.Exponential,
      'value': setValue,
      'time': endTime
    });
    if (value < this._minOutput) {
      this._param.exponentialRampToValueAtTime(this._minOutput, endTime - this.sampleTime);
      this.setValueAtTime(0, endTime);
    } else {
      this._param.exponentialRampToValueAtTime(value, endTime);
    }
    return this;
  };
  Tone.TimelineSignal.prototype.setTargetAtTime = function (value, startTime, timeConstant) {
    value = this._fromUnits(value);
    value = Math.max(this._minOutput, value);
    timeConstant = Math.max(this._minOutput, timeConstant);
    startTime = this.toSeconds(startTime);
    this._events.add({
      'type': Tone.TimelineSignal.Type.Target,
      'value': value,
      'time': startTime,
      'constant': timeConstant
    });
    this._param.setTargetAtTime(value, startTime, timeConstant);
    return this;
  };
  Tone.TimelineSignal.prototype.setValueCurveAtTime = function (values, startTime, duration, scaling) {
    scaling = this.defaultArg(scaling, 1);
    var floats = new Array(values.length);
    for (var i = 0; i < floats.length; i++) {
      floats[i] = this._fromUnits(values[i]) * scaling;
    }
    startTime = this.toSeconds(startTime);
    duration = this.toSeconds(duration);
    this._events.add({
      'type': Tone.TimelineSignal.Type.Curve,
      'value': floats,
      'time': startTime,
      'duration': duration
    });
    this._param.setValueAtTime(floats[0], startTime);
    for (var j = 1; j < floats.length; j++) {
      var segmentTime = startTime + j / (floats.length - 1) * duration;
      this._param.linearRampToValueAtTime(floats[j], segmentTime);
    }
    return this;
  };
  Tone.TimelineSignal.prototype.cancelScheduledValues = function (after) {
    after = this.toSeconds(after);
    this._events.cancel(after);
    this._param.cancelScheduledValues(after);
    return this;
  };
  Tone.TimelineSignal.prototype.setRampPoint = function (time) {
    time = this.toSeconds(time);
    var val = this._toUnits(this.getValueAtTime(time));
    var before = this._searchBefore(time);
    if (before && before.time === time) {
      this.cancelScheduledValues(time + this.sampleTime);
    } else if (before && before.type === Tone.TimelineSignal.Type.Curve && before.time + before.duration > time) {
      this.cancelScheduledValues(time);
      this.linearRampToValueAtTime(val, time);
    } else {
      var after = this._searchAfter(time);
      if (after) {
        this.cancelScheduledValues(time);
        if (after.type === Tone.TimelineSignal.Type.Linear) {
          this.linearRampToValueAtTime(val, time);
        } else if (after.type === Tone.TimelineSignal.Type.Exponential) {
          this.exponentialRampToValueAtTime(val, time);
        }
      }
      this.setValueAtTime(val, time);
    }
    return this;
  };
  Tone.TimelineSignal.prototype.linearRampToValueBetween = function (value, start, finish) {
    this.setRampPoint(start);
    this.linearRampToValueAtTime(value, finish);
    return this;
  };
  Tone.TimelineSignal.prototype.exponentialRampToValueBetween = function (value, start, finish) {
    this.setRampPoint(start);
    this.exponentialRampToValueAtTime(value, finish);
    return this;
  };
  Tone.TimelineSignal.prototype._searchBefore = function (time) {
    return this._events.get(time);
  };
  Tone.TimelineSignal.prototype._searchAfter = function (time) {
    return this._events.getAfter(time);
  };
  Tone.TimelineSignal.prototype.getValueAtTime = function (time) {
    time = this.toSeconds(time);
    var after = this._searchAfter(time);
    var before = this._searchBefore(time);
    var value = this._initial;
    if (before === null) {
      value = this._initial;
    } else if (before.type === Tone.TimelineSignal.Type.Target) {
      var previous = this._events.getBefore(before.time);
      var previouVal;
      if (previous === null) {
        previouVal = this._initial;
      } else {
        previouVal = previous.value;
      }
      value = this._exponentialApproach(before.time, previouVal, before.value, before.constant, time);
    } else if (before.type === Tone.TimelineSignal.Type.Curve) {
      value = this._curveInterpolate(before.time, before.value, before.duration, time);
    } else if (after === null) {
      value = before.value;
    } else if (after.type === Tone.TimelineSignal.Type.Linear) {
      value = this._linearInterpolate(before.time, before.value, after.time, after.value, time);
    } else if (after.type === Tone.TimelineSignal.Type.Exponential) {
      value = this._exponentialInterpolate(before.time, before.value, after.time, after.value, time);
    } else {
      value = before.value;
    }
    return value;
  };
  Tone.TimelineSignal.prototype.connect = Tone.SignalBase.prototype.connect;
  Tone.TimelineSignal.prototype._exponentialApproach = function (t0, v0, v1, timeConstant, t) {
    return v1 + (v0 - v1) * Math.exp(-(t - t0) / timeConstant);
  };
  Tone.TimelineSignal.prototype._linearInterpolate = function (t0, v0, t1, v1, t) {
    return v0 + (v1 - v0) * ((t - t0) / (t1 - t0));
  };
  Tone.TimelineSignal.prototype._exponentialInterpolate = function (t0, v0, t1, v1, t) {
    v0 = Math.max(this._minOutput, v0);
    return v0 * Math.pow(v1 / v0, (t - t0) / (t1 - t0));
  };
  Tone.TimelineSignal.prototype._curveInterpolate = function (start, curve, duration, time) {
    var len = curve.length;
    if (time >= start + duration) {
      return curve[len - 1];
    } else if (time <= start) {
      return curve[0];
    } else {
      var progress = (time - start) / duration;
      var lowerIndex = Math.floor((len - 1) * progress);
      var upperIndex = Math.ceil((len - 1) * progress);
      var lowerVal = curve[lowerIndex];
      var upperVal = curve[upperIndex];
      if (upperIndex === lowerIndex) {
        return lowerVal;
      } else {
        return this._linearInterpolate(lowerIndex, lowerVal, upperIndex, upperVal, progress * (len - 1));
      }
    }
  };
  Tone.TimelineSignal.prototype.dispose = function () {
    Tone.Signal.prototype.dispose.call(this);
    Tone.Param.prototype.dispose.call(this);
    this._events.dispose();
    this._events = null;
  };
  return Tone.TimelineSignal;
}(Tone_core_Tone, Tone_signal_Signal);
var env;
'use strict';
env = function () {
  var p5sound = master;
  var Add = Tone_signal_Add;
  var Mult = Tone_signal_Multiply;
  var Scale = Tone_signal_Scale;
  var TimelineSignal = Tone_signal_TimelineSignal;
  var Tone = Tone_core_Tone;
  Tone.setContext(p5sound.audiocontext);
  /**
   *  <p>Envelopes are pre-defined amplitude distribution over time.
   *  Typically, envelopes are used to control the output volume
   *  of an object, a series of fades referred to as Attack, Decay,
   *  Sustain and Release (
   *  <a href="https://upload.wikimedia.org/wikipedia/commons/e/ea/ADSR_parameter.svg">ADSR</a>
   *  ). Envelopes can also control other Web Audio Parameters—for example, a p5.Env can
   *  control an Oscillator's frequency like this: <code>osc.freq(env)</code>.</p>
   *  <p>Use <code><a href="#/p5.Env/setRange">setRange</a></code> to change the attack/release level.
   *  Use <code><a href="#/p5.Env/setADSR">setADSR</a></code> to change attackTime, decayTime, sustainPercent and releaseTime.</p>
   *  <p>Use the <code><a href="#/p5.Env/play">play</a></code> method to play the entire envelope,
   *  the <code><a href="#/p5.Env/ramp">ramp</a></code> method for a pingable trigger,
   *  or <code><a href="#/p5.Env/triggerAttack">triggerAttack</a></code>/
   *  <code><a href="#/p5.Env/triggerRelease">triggerRelease</a></code> to trigger noteOn/noteOff.</p>
   *
   *  @class p5.Env
   *  @constructor
   *  @example
   *  <div><code>
   *  var attackLevel = 1.0;
   *  var releaseLevel = 0;
   *
   *  var attackTime = 0.001
   *  var decayTime = 0.2;
   *  var susPercent = 0.2;
   *  var releaseTime = 0.5;
   *
   *  var env, triOsc;
   *
   *  function setup() {
   *    var cnv = createCanvas(100, 100);
   *
   *    textAlign(CENTER);
   *    text('click to play', width/2, height/2);
   *
   *    env = new p5.Env();
   *    env.setADSR(attackTime, decayTime, susPercent, releaseTime);
   *    env.setRange(attackLevel, releaseLevel);
   *
   *    triOsc = new p5.Oscillator('triangle');
   *    triOsc.amp(env);
   *    triOsc.start();
   *    triOsc.freq(220);
   *
   *    cnv.mousePressed(playEnv);
   *  }
   *
   *  function playEnv(){
   *    env.play();
   *  }
   *  </code></div>
   */
  p5.Env = function (t1, l1, t2, l2, t3, l3) {
    /**
     * Time until envelope reaches attackLevel
     * @property attackTime
     */
    this.aTime = t1 || 0.1;
    /**
     * Level once attack is complete.
     * @property attackLevel
     */
    this.aLevel = l1 || 1;
    /**
     * Time until envelope reaches decayLevel.
     * @property decayTime
     */
    this.dTime = t2 || 0.5;
    /**
     * Level after decay. The envelope will sustain here until it is released.
     * @property decayLevel
     */
    this.dLevel = l2 || 0;
    /**
     * Duration of the release portion of the envelope.
     * @property releaseTime
     */
    this.rTime = t3 || 0;
    /**
     * Level at the end of the release.
     * @property releaseLevel
     */
    this.rLevel = l3 || 0;
    this._rampHighPercentage = 0.98;
    this._rampLowPercentage = 0.02;
    this.output = p5sound.audiocontext.createGain();
    this.control = new TimelineSignal();
    this._init();
    // this makes sure the envelope starts at zero
    this.control.connect(this.output);
    // connect to the output
    this.connection = null;
    // store connection
    //array of math operation signal chaining
    this.mathOps = [this.control];
    //whether envelope should be linear or exponential curve
    this.isExponential = false;
    // oscillator or buffer source to clear on env complete
    // to save resources if/when it is retriggered
    this.sourceToClear = null;
    // set to true if attack is set, then false on release
    this.wasTriggered = false;
    // add to the soundArray so we can dispose of the env later
    p5sound.soundArray.push(this);
  };
  // this init function just smooths the starting value to zero and gives a start point for the timeline
  // - it was necessary to remove glitches at the beginning.
  p5.Env.prototype._init = function () {
    var now = p5sound.audiocontext.currentTime;
    var t = now;
    this.control.setTargetAtTime(0.00001, t, 0.001);
    //also, compute the correct time constants
    this._setRampAD(this.aTime, this.dTime);
  };
  /**
   *  Reset the envelope with a series of time/value pairs.
   *
   *  @method  set
   *  @param {Number} attackTime     Time (in seconds) before level
   *                                 reaches attackLevel
   *  @param {Number} attackLevel    Typically an amplitude between
   *                                 0.0 and 1.0
   *  @param {Number} decayTime      Time
   *  @param {Number} decayLevel   Amplitude (In a standard ADSR envelope,
   *                                 decayLevel = sustainLevel)
   *  @param {Number} releaseTime   Release Time (in seconds)
   *  @param {Number} releaseLevel  Amplitude
   *  @example
   *  <div><code>
   *  var t1 = 0.1; // attack time in seconds
   *  var l1 = 0.7; // attack level 0.0 to 1.0
   *  var t2 = 0.3; // decay time in seconds
   *  var l2 = 0.1; // decay level  0.0 to 1.0
   *  var t3 = 0.2; // sustain time in seconds
   *  var l3 = dL; // sustain level  0.0 to 1.0
   *  // release level defaults to zero
   *
   *  var env;
   *  var triOsc;
   *
   *  function setup() {
   *    background(0);
   *    noStroke();
   *    fill(255);
   *    textAlign(CENTER);
   *    text('click to play', width/2, height/2);
   *
   *    env = new p5.Env(t1, l1, t2, l2, t3, l3);
   *    triOsc = new p5.Oscillator('triangle');
   *    triOsc.amp(env); // give the env control of the triOsc's amp
   *    triOsc.start();
   *  }
   *
   *  // mouseClick triggers envelope if over canvas
   *  function mouseClicked() {
   *    // is mouse over canvas?
   *    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
   *      env.play(triOsc);
   *    }
   *  }
   *  </code></div>
   *
   */
  p5.Env.prototype.set = function (t1, l1, t2, l2, t3, l3) {
    this.aTime = t1;
    this.aLevel = l1;
    this.dTime = t2 || 0;
    this.dLevel = l2 || 0;
    this.rTime = t3 || 0;
    this.rLevel = l3 || 0;
    // set time constants for ramp
    this._setRampAD(t1, t2);
  };
  /**
   *  Set values like a traditional
   *  <a href="https://en.wikipedia.org/wiki/Synthesizer#/media/File:ADSR_parameter.svg">
   *  ADSR envelope
   *  </a>.
   *
   *  @method  setADSR
   *  @param {Number} attackTime    Time (in seconds before envelope
   *                                reaches Attack Level
   *  @param {Number} [decayTime]    Time (in seconds) before envelope
   *                                reaches Decay/Sustain Level
   *  @param {Number} [susRatio]    Ratio between attackLevel and releaseLevel, on a scale from 0 to 1,
   *                                where 1.0 = attackLevel, 0.0 = releaseLevel.
   *                                The susRatio determines the decayLevel and the level at which the
   *                                sustain portion of the envelope will sustain.
   *                                For example, if attackLevel is 0.4, releaseLevel is 0,
   *                                and susAmt is 0.5, the decayLevel would be 0.2. If attackLevel is
   *                                increased to 1.0 (using <code>setRange</code>),
   *                                then decayLevel would increase proportionally, to become 0.5.
   *  @param {Number} [releaseTime]   Time in seconds from now (defaults to 0)
   *  @example
   *  <div><code>
   *  var attackLevel = 1.0;
   *  var releaseLevel = 0;
   *
   *  var attackTime = 0.001
   *  var decayTime = 0.2;
   *  var susPercent = 0.2;
   *  var releaseTime = 0.5;
   *
   *  var env, triOsc;
   *
   *  function setup() {
   *    var cnv = createCanvas(100, 100);
   *
   *    textAlign(CENTER);
   *    text('click to play', width/2, height/2);
   *
   *    env = new p5.Env();
   *    env.setADSR(attackTime, decayTime, susPercent, releaseTime);
   *    env.setRange(attackLevel, releaseLevel);
   *
   *    triOsc = new p5.Oscillator('triangle');
   *    triOsc.amp(env);
   *    triOsc.start();
   *    triOsc.freq(220);
   *
   *    cnv.mousePressed(playEnv);
   *  }
   *
   *  function playEnv(){
   *    env.play();
   *  }
   *  </code></div>
   */
  p5.Env.prototype.setADSR = function (aTime, dTime, sPercent, rTime) {
    this.aTime = aTime;
    this.dTime = dTime || 0;
    // lerp
    this.sPercent = sPercent || 0;
    this.dLevel = typeof sPercent !== 'undefined' ? sPercent * (this.aLevel - this.rLevel) + this.rLevel : 0;
    this.rTime = rTime || 0;
    // also set time constants for ramp
    this._setRampAD(aTime, dTime);
  };
  /**
   *  Set max (attackLevel) and min (releaseLevel) of envelope.
   *
   *  @method  setRange
   *  @param {Number} aLevel attack level (defaults to 1)
   *  @param {Number} rLevel release level (defaults to 0)
   *  @example
   *  <div><code>
   *  var attackLevel = 1.0;
   *  var releaseLevel = 0;
   *
   *  var attackTime = 0.001
   *  var decayTime = 0.2;
   *  var susPercent = 0.2;
   *  var releaseTime = 0.5;
   *
   *  var env, triOsc;
   *
   *  function setup() {
   *    var cnv = createCanvas(100, 100);
   *
   *    textAlign(CENTER);
   *    text('click to play', width/2, height/2);
   *
   *    env = new p5.Env();
   *    env.setADSR(attackTime, decayTime, susPercent, releaseTime);
   *    env.setRange(attackLevel, releaseLevel);
   *
   *    triOsc = new p5.Oscillator('triangle');
   *    triOsc.amp(env);
   *    triOsc.start();
   *    triOsc.freq(220);
   *
   *    cnv.mousePressed(playEnv);
   *  }
   *
   *  function playEnv(){
   *    env.play();
   *  }
   *  </code></div>
   */
  p5.Env.prototype.setRange = function (aLevel, rLevel) {
    this.aLevel = aLevel || 1;
    this.rLevel = rLevel || 0;
  };
  //  private (undocumented) method called when ADSR is set to set time constants for ramp
  //
  //  Set the <a href="https://en.wikipedia.org/wiki/RC_time_constant">
  //  time constants</a> for simple exponential ramps.
  //  The larger the time constant value, the slower the
  //  transition will be.
  //
  //  method  _setRampAD
  //  param {Number} attackTimeConstant  attack time constant
  //  param {Number} decayTimeConstant   decay time constant
  //
  p5.Env.prototype._setRampAD = function (t1, t2) {
    this._rampAttackTime = this.checkExpInput(t1);
    this._rampDecayTime = this.checkExpInput(t2);
    var TCDenominator = 1;
    /// Aatish Bhatia's calculation for time constant for rise(to adjust 1/1-e calculation to any percentage)
    TCDenominator = Math.log(1 / this.checkExpInput(1 - this._rampHighPercentage));
    this._rampAttackTC = t1 / this.checkExpInput(TCDenominator);
    TCDenominator = Math.log(1 / this._rampLowPercentage);
    this._rampDecayTC = t2 / this.checkExpInput(TCDenominator);
  };
  // private method
  p5.Env.prototype.setRampPercentages = function (p1, p2) {
    //set the percentages that the simple exponential ramps go to
    this._rampHighPercentage = this.checkExpInput(p1);
    this._rampLowPercentage = this.checkExpInput(p2);
    var TCDenominator = 1;
    //now re-compute the time constants based on those percentages
    /// Aatish Bhatia's calculation for time constant for rise(to adjust 1/1-e calculation to any percentage)
    TCDenominator = Math.log(1 / this.checkExpInput(1 - this._rampHighPercentage));
    this._rampAttackTC = this._rampAttackTime / this.checkExpInput(TCDenominator);
    TCDenominator = Math.log(1 / this._rampLowPercentage);
    this._rampDecayTC = this._rampDecayTime / this.checkExpInput(TCDenominator);
  };
  /**
   *  Assign a parameter to be controlled by this envelope.
   *  If a p5.Sound object is given, then the p5.Env will control its
   *  output gain. If multiple inputs are provided, the env will
   *  control all of them.
   *
   *  @method  setInput
   *  @param  {Object} [...inputs]         A p5.sound object or
   *                                Web Audio Param.
   */
  p5.Env.prototype.setInput = function () {
    for (var i = 0; i < arguments.length; i++) {
      this.connect(arguments[i]);
    }
  };
  /**
   *  Set whether the envelope ramp is linear (default) or exponential.
   *  Exponential ramps can be useful because we perceive amplitude
   *  and frequency logarithmically.
   *
   *  @method  setExp
   *  @param {Boolean} isExp true is exponential, false is linear
   */
  p5.Env.prototype.setExp = function (isExp) {
    this.isExponential = isExp;
  };
  //helper method to protect against zero values being sent to exponential functions
  p5.Env.prototype.checkExpInput = function (value) {
    if (value <= 0) {
      value = 1e-8;
    }
    return value;
  };
  /**
   *  Play tells the envelope to start acting on a given input.
   *  If the input is a p5.sound object (i.e. AudioIn, Oscillator,
   *  SoundFile), then Env will control its output volume.
   *  Envelopes can also be used to control any <a href="
   *  http://docs.webplatform.org/wiki/apis/webaudio/AudioParam">
   *  Web Audio Audio Param.</a>
   *
   *  @method  play
   *  @param  {Object} unit         A p5.sound object or
   *                                Web Audio Param.
   *  @param  {Number} [startTime]  time from now (in seconds) at which to play
   *  @param  {Number} [sustainTime] time to sustain before releasing the envelope
   *  @example
   *  <div><code>
   *  var attackLevel = 1.0;
   *  var releaseLevel = 0;
   *
   *  var attackTime = 0.001
   *  var decayTime = 0.2;
   *  var susPercent = 0.2;
   *  var releaseTime = 0.5;
   *
   *  var env, triOsc;
   *
   *  function setup() {
   *    var cnv = createCanvas(100, 100);
   *
   *    textAlign(CENTER);
   *    text('click to play', width/2, height/2);
   *
   *    env = new p5.Env();
   *    env.setADSR(attackTime, decayTime, susPercent, releaseTime);
   *    env.setRange(attackLevel, releaseLevel);
   *
   *    triOsc = new p5.Oscillator('triangle');
   *    triOsc.amp(env);
   *    triOsc.start();
   *    triOsc.freq(220);
   *
   *    cnv.mousePressed(playEnv);
   *  }
   *
   *  function playEnv(){
   *    // trigger env on triOsc, 0 seconds from now
   *    // After decay, sustain for 0.2 seconds before release
   *    env.play(triOsc, 0, 0.2);
   *  }
   *  </code></div>
   */
  p5.Env.prototype.play = function (unit, secondsFromNow, susTime) {
    var tFromNow = secondsFromNow || 0;
    var susTime = susTime || 0;
    if (unit) {
      if (this.connection !== unit) {
        this.connect(unit);
      }
    }
    this.triggerAttack(unit, tFromNow);
    this.triggerRelease(unit, tFromNow + this.aTime + this.dTime + susTime);
  };
  /**
   *  Trigger the Attack, and Decay portion of the Envelope.
   *  Similar to holding down a key on a piano, but it will
   *  hold the sustain level until you let go. Input can be
   *  any p5.sound object, or a <a href="
   *  http://docs.webplatform.org/wiki/apis/webaudio/AudioParam">
   *  Web Audio Param</a>.
   *
   *  @method  triggerAttack
   *  @param  {Object} unit p5.sound Object or Web Audio Param
   *  @param  {Number} secondsFromNow time from now (in seconds)
   *  @example
   *  <div><code>
   *
   *  var attackLevel = 1.0;
   *  var releaseLevel = 0;
   *
   *  var attackTime = 0.001
   *  var decayTime = 0.3;
   *  var susPercent = 0.4;
   *  var releaseTime = 0.5;
   *
   *  var env, triOsc;
   *
   *  function setup() {
   *    var cnv = createCanvas(100, 100);
   *    background(200);
   *    textAlign(CENTER);
   *    text('click to play', width/2, height/2);
   *
   *    env = new p5.Env();
   *    env.setADSR(attackTime, decayTime, susPercent, releaseTime);
   *    env.setRange(attackLevel, releaseLevel);
   *
   *    triOsc = new p5.Oscillator('triangle');
   *    triOsc.amp(env);
   *    triOsc.start();
   *    triOsc.freq(220);
   *
   *    cnv.mousePressed(envAttack);
   *  }
   *
   *  function envAttack(){
   *    console.log('trigger attack');
   *    env.triggerAttack();
   *
   *    background(0,255,0);
   *    text('attack!', width/2, height/2);
   *  }
   *
   *  function mouseReleased() {
   *    env.triggerRelease();
   *
   *    background(200);
   *    text('click to play', width/2, height/2);
   *  }
   *  </code></div>
   */
  p5.Env.prototype.triggerAttack = function (unit, secondsFromNow) {
    var now = p5sound.audiocontext.currentTime;
    var tFromNow = secondsFromNow || 0;
    var t = now + tFromNow;
    this.lastAttack = t;
    this.wasTriggered = true;
    if (unit) {
      if (this.connection !== unit) {
        this.connect(unit);
      }
    }
    // get and set value (with linear ramp) to anchor automation
    var valToSet = this.control.getValueAtTime(t);
    if (this.isExponential === true) {
      this.control.exponentialRampToValueAtTime(this.checkExpInput(valToSet), t);
    } else {
      this.control.linearRampToValueAtTime(valToSet, t);
    }
    // after each ramp completes, cancel scheduled values
    // (so they can be overridden in case env has been re-triggered)
    // then, set current value (with linearRamp to avoid click)
    // then, schedule the next automation...
    // attack
    t += this.aTime;
    if (this.isExponential === true) {
      this.control.exponentialRampToValueAtTime(this.checkExpInput(this.aLevel), t);
      valToSet = this.checkExpInput(this.control.getValueAtTime(t));
      this.control.cancelScheduledValues(t);
      this.control.exponentialRampToValueAtTime(valToSet, t);
    } else {
      this.control.linearRampToValueAtTime(this.aLevel, t);
      valToSet = this.control.getValueAtTime(t);
      this.control.cancelScheduledValues(t);
      this.control.linearRampToValueAtTime(valToSet, t);
    }
    // decay to decay level (if using ADSR, then decay level == sustain level)
    t += this.dTime;
    if (this.isExponential === true) {
      this.control.exponentialRampToValueAtTime(this.checkExpInput(this.dLevel), t);
      valToSet = this.checkExpInput(this.control.getValueAtTime(t));
      this.control.cancelScheduledValues(t);
      this.control.exponentialRampToValueAtTime(valToSet, t);
    } else {
      this.control.linearRampToValueAtTime(this.dLevel, t);
      valToSet = this.control.getValueAtTime(t);
      this.control.cancelScheduledValues(t);
      this.control.linearRampToValueAtTime(valToSet, t);
    }
  };
  /**
   *  Trigger the Release of the Envelope. This is similar to releasing
   *  the key on a piano and letting the sound fade according to the
   *  release level and release time.
   *
   *  @method  triggerRelease
   *  @param  {Object} unit p5.sound Object or Web Audio Param
   *  @param  {Number} secondsFromNow time to trigger the release
   *  @example
   *  <div><code>
   *
   *  var attackLevel = 1.0;
   *  var releaseLevel = 0;
   *
   *  var attackTime = 0.001
   *  var decayTime = 0.3;
   *  var susPercent = 0.4;
   *  var releaseTime = 0.5;
   *
   *  var env, triOsc;
   *
   *  function setup() {
   *    var cnv = createCanvas(100, 100);
   *    background(200);
   *    textAlign(CENTER);
   *    text('click to play', width/2, height/2);
   *
   *    env = new p5.Env();
   *    env.setADSR(attackTime, decayTime, susPercent, releaseTime);
   *    env.setRange(attackLevel, releaseLevel);
   *
   *    triOsc = new p5.Oscillator('triangle');
   *    triOsc.amp(env);
   *    triOsc.start();
   *    triOsc.freq(220);
   *
   *    cnv.mousePressed(envAttack);
   *  }
   *
   *  function envAttack(){
   *    console.log('trigger attack');
   *    env.triggerAttack();
   *
   *    background(0,255,0);
   *    text('attack!', width/2, height/2);
   *  }
   *
   *  function mouseReleased() {
   *    env.triggerRelease();
   *
   *    background(200);
   *    text('click to play', width/2, height/2);
   *  }
   *  </code></div>
   */
  p5.Env.prototype.triggerRelease = function (unit, secondsFromNow) {
    // only trigger a release if an attack was triggered
    if (!this.wasTriggered) {
      // this currently causes a bit of trouble:
      // if a later release has been scheduled (via the play function)
      // a new earlier release won't interrupt it, because
      // this.wasTriggered has already been set to false.
      // If we want new earlier releases to override, then we need to
      // keep track of the last release time, and if the new release time is
      // earlier, then use it.
      return;
    }
    var now = p5sound.audiocontext.currentTime;
    var tFromNow = secondsFromNow || 0;
    var t = now + tFromNow;
    if (unit) {
      if (this.connection !== unit) {
        this.connect(unit);
      }
    }
    // get and set value (with linear or exponential ramp) to anchor automation
    var valToSet = this.control.getValueAtTime(t);
    if (this.isExponential === true) {
      this.control.exponentialRampToValueAtTime(this.checkExpInput(valToSet), t);
    } else {
      this.control.linearRampToValueAtTime(valToSet, t);
    }
    // release
    t += this.rTime;
    if (this.isExponential === true) {
      this.control.exponentialRampToValueAtTime(this.checkExpInput(this.rLevel), t);
      valToSet = this.checkExpInput(this.control.getValueAtTime(t));
      this.control.cancelScheduledValues(t);
      this.control.exponentialRampToValueAtTime(valToSet, t);
    } else {
      this.control.linearRampToValueAtTime(this.rLevel, t);
      valToSet = this.control.getValueAtTime(t);
      this.control.cancelScheduledValues(t);
      this.control.linearRampToValueAtTime(valToSet, t);
    }
    this.wasTriggered = false;
  };
  /**
   *  Exponentially ramp to a value using the first two
   *  values from <code><a href="#/p5.Env/setADSR">setADSR(attackTime, decayTime)</a></code>
   *  as <a href="https://en.wikipedia.org/wiki/RC_time_constant">
   *  time constants</a> for simple exponential ramps.
   *  If the value is higher than current value, it uses attackTime,
   *  while a decrease uses decayTime.
   *
   *  @method  ramp
   *  @param  {Object} unit           p5.sound Object or Web Audio Param
   *  @param  {Number} secondsFromNow When to trigger the ramp
   *  @param  {Number} v              Target value
   *  @param  {Number} [v2]           Second target value (optional)
   *  @example
   *  <div><code>
   *  var env, osc, amp, cnv;
   *
   *  var attackTime = 0.001;
   *  var decayTime = 0.2;
   *  var attackLevel = 1;
   *  var decayLevel = 0;
   *
   *  function setup() {
   *    cnv = createCanvas(100, 100);
   *    fill(0,255,0);
   *    noStroke();
   *
   *    env = new p5.Env();
   *    env.setADSR(attackTime, decayTime);
   *
   *    osc = new p5.Oscillator();
   *    osc.amp(env);
   *    osc.start();
   *
   *    amp = new p5.Amplitude();
   *
   *    cnv.mousePressed(triggerRamp);
   *  }
   *
   *  function triggerRamp() {
   *    env.ramp(osc, 0, attackLevel, decayLevel);
   *  }
   *
   *  function draw() {
   *    background(20,20,20);
   *    text('click me', 10, 20);
   *    var h = map(amp.getLevel(), 0, 0.4, 0, height);;
   *
   *    rect(0, height, width, -h);
   *  }
   *  </code></div>
   */
  p5.Env.prototype.ramp = function (unit, secondsFromNow, v1, v2) {
    var now = p5sound.audiocontext.currentTime;
    var tFromNow = secondsFromNow || 0;
    var t = now + tFromNow;
    var destination1 = this.checkExpInput(v1);
    var destination2 = typeof v2 !== 'undefined' ? this.checkExpInput(v2) : undefined;
    // connect env to unit if not already connected
    if (unit) {
      if (this.connection !== unit) {
        this.connect(unit);
      }
    }
    //get current value
    var currentVal = this.checkExpInput(this.control.getValueAtTime(t));
    // this.control.cancelScheduledValues(t);
    //if it's going up
    if (destination1 > currentVal) {
      this.control.setTargetAtTime(destination1, t, this._rampAttackTC);
      t += this._rampAttackTime;
    } else if (destination1 < currentVal) {
      this.control.setTargetAtTime(destination1, t, this._rampDecayTC);
      t += this._rampDecayTime;
    }
    // Now the second part of envelope begins
    if (destination2 === undefined)
      return;
    //if it's going up
    if (destination2 > destination1) {
      this.control.setTargetAtTime(destination2, t, this._rampAttackTC);
    } else if (destination2 < destination1) {
      this.control.setTargetAtTime(destination2, t, this._rampDecayTC);
    }
  };
  p5.Env.prototype.connect = function (unit) {
    this.connection = unit;
    // assume we're talking about output gain
    // unless given a different audio param
    if (unit instanceof p5.Oscillator || unit instanceof p5.SoundFile || unit instanceof p5.AudioIn || unit instanceof p5.Reverb || unit instanceof p5.Noise || unit instanceof p5.Filter || unit instanceof p5.Delay) {
      unit = unit.output.gain;
    }
    if (unit instanceof AudioParam) {
      //set the initial value
      unit.setValueAtTime(0, p5sound.audiocontext.currentTime);
    }
    if (unit instanceof p5.Signal) {
      unit.setValue(0);
    }
    this.output.connect(unit);
  };
  p5.Env.prototype.disconnect = function () {
    this.output.disconnect();
  };
  // Signal Math
  /**
   *  Add a value to the p5.Oscillator's output amplitude,
   *  and return the oscillator. Calling this method
   *  again will override the initial add() with new values.
   *
   *  @method  add
   *  @param {Number} number Constant number to add
   *  @return {p5.Env} Envelope Returns this envelope
   *                                     with scaled output
   */
  p5.Env.prototype.add = function (num) {
    var add = new Add(num);
    var thisChain = this.mathOps.length;
    var nextChain = this.output;
    return p5.prototype._mathChain(this, add, thisChain, nextChain, Add);
  };
  /**
   *  Multiply the p5.Env's output amplitude
   *  by a fixed value. Calling this method
   *  again will override the initial mult() with new values.
   *
   *  @method  mult
   *  @param {Number} number Constant number to multiply
   *  @return {p5.Env} Envelope Returns this envelope
   *                                     with scaled output
   */
  p5.Env.prototype.mult = function (num) {
    var mult = new Mult(num);
    var thisChain = this.mathOps.length;
    var nextChain = this.output;
    return p5.prototype._mathChain(this, mult, thisChain, nextChain, Mult);
  };
  /**
   *  Scale this envelope's amplitude values to a given
   *  range, and return the envelope. Calling this method
   *  again will override the initial scale() with new values.
   *
   *  @method  scale
   *  @param  {Number} inMin  input range minumum
   *  @param  {Number} inMax  input range maximum
   *  @param  {Number} outMin input range minumum
   *  @param  {Number} outMax input range maximum
   *  @return {p5.Env} Envelope Returns this envelope
   *                                     with scaled output
   */
  p5.Env.prototype.scale = function (inMin, inMax, outMin, outMax) {
    var scale = new Scale(inMin, inMax, outMin, outMax);
    var thisChain = this.mathOps.length;
    var nextChain = this.output;
    return p5.prototype._mathChain(this, scale, thisChain, nextChain, Scale);
  };
  // get rid of the oscillator
  p5.Env.prototype.dispose = function () {
    // remove reference from soundArray
    var index = p5sound.soundArray.indexOf(this);
    p5sound.soundArray.splice(index, 1);
    this.disconnect();
    try {
      this.control.dispose();
      this.control = null;
    } catch (e) {
      console.warn(e, 'already disposed p5.Env');
    }
    for (var i = 1; i < this.mathOps.length; i++) {
      this.mathOps[i].dispose();
    }
  };
}(master, Tone_signal_Add, Tone_signal_Multiply, Tone_signal_Scale, Tone_signal_TimelineSignal, Tone_core_Tone);
var pulse;
'use strict';
pulse = function () {
  var p5sound = master;
  /**
   *  Creates a Pulse object, an oscillator that implements
   *  Pulse Width Modulation.
   *  The pulse is created with two oscillators.
   *  Accepts a parameter for frequency, and to set the
   *  width between the pulses. See <a href="
   *  http://p5js.org/reference/#/p5.Oscillator">
   *  <code>p5.Oscillator</code> for a full list of methods.
   *
   *  @class p5.Pulse
   *  @extends p5.Oscillator
   *  @constructor
   *  @param {Number} [freq] Frequency in oscillations per second (Hz)
   *  @param {Number} [w]    Width between the pulses (0 to 1.0,
   *                         defaults to 0)
   *  @example
   *  <div><code>
   *  var pulse;
   *  function setup() {
   *    background(0);
   *
   *    // Create and start the pulse wave oscillator
   *    pulse = new p5.Pulse();
   *    pulse.amp(0.5);
   *    pulse.freq(220);
   *    pulse.start();
   *  }
   *
   *  function draw() {
   *    var w = map(mouseX, 0, width, 0, 1);
   *    w = constrain(w, 0, 1);
   *    pulse.width(w)
   *  }
   *  </code></div>
   */
  p5.Pulse = function (freq, w) {
    p5.Oscillator.call(this, freq, 'sawtooth');
    // width of PWM, should be betw 0 to 1.0
    this.w = w || 0;
    // create a second oscillator with inverse frequency
    this.osc2 = new p5.SawOsc(freq);
    // create a delay node
    this.dNode = p5sound.audiocontext.createDelay();
    // dc offset
    this.dcOffset = createDCOffset();
    this.dcGain = p5sound.audiocontext.createGain();
    this.dcOffset.connect(this.dcGain);
    this.dcGain.connect(this.output);
    // set delay time based on PWM width
    this.f = freq || 440;
    var mW = this.w / this.oscillator.frequency.value;
    this.dNode.delayTime.value = mW;
    this.dcGain.gain.value = 1.7 * (0.5 - this.w);
    // disconnect osc2 and connect it to delay, which is connected to output
    this.osc2.disconnect();
    this.osc2.panner.disconnect();
    this.osc2.amp(-1);
    // inverted amplitude
    this.osc2.output.connect(this.dNode);
    this.dNode.connect(this.output);
    this.output.gain.value = 1;
    this.output.connect(this.panner);
  };
  p5.Pulse.prototype = Object.create(p5.Oscillator.prototype);
  /**
   *  Set the width of a Pulse object (an oscillator that implements
   *  Pulse Width Modulation).
   *
   *  @method  width
   *  @param {Number} [width]    Width between the pulses (0 to 1.0,
   *                         defaults to 0)
   */
  p5.Pulse.prototype.width = function (w) {
    if (typeof w === 'number') {
      if (w <= 1 && w >= 0) {
        this.w = w;
        // set delay time based on PWM width
        // var mW = map(this.w, 0, 1.0, 0, 1/this.f);
        var mW = this.w / this.oscillator.frequency.value;
        this.dNode.delayTime.value = mW;
      }
      this.dcGain.gain.value = 1.7 * (0.5 - this.w);
    } else {
      w.connect(this.dNode.delayTime);
      var sig = new p5.SignalAdd(-0.5);
      sig.setInput(w);
      sig = sig.mult(-1);
      sig = sig.mult(1.7);
      sig.connect(this.dcGain.gain);
    }
  };
  p5.Pulse.prototype.start = function (f, time) {
    var now = p5sound.audiocontext.currentTime;
    var t = time || 0;
    if (!this.started) {
      var freq = f || this.f;
      var type = this.oscillator.type;
      this.oscillator = p5sound.audiocontext.createOscillator();
      this.oscillator.frequency.setValueAtTime(freq, now);
      this.oscillator.type = type;
      this.oscillator.connect(this.output);
      this.oscillator.start(t + now);
      // set up osc2
      this.osc2.oscillator = p5sound.audiocontext.createOscillator();
      this.osc2.oscillator.frequency.setValueAtTime(freq, t + now);
      this.osc2.oscillator.type = type;
      this.osc2.oscillator.connect(this.osc2.output);
      this.osc2.start(t + now);
      this.freqNode = [
        this.oscillator.frequency,
        this.osc2.oscillator.frequency
      ];
      // start dcOffset, too
      this.dcOffset = createDCOffset();
      this.dcOffset.connect(this.dcGain);
      this.dcOffset.start(t + now);
      // if LFO connections depend on these oscillators
      if (this.mods !== undefined && this.mods.frequency !== undefined) {
        this.mods.frequency.connect(this.freqNode[0]);
        this.mods.frequency.connect(this.freqNode[1]);
      }
      this.started = true;
      this.osc2.started = true;
    }
  };
  p5.Pulse.prototype.stop = function (time) {
    if (this.started) {
      var t = time || 0;
      var now = p5sound.audiocontext.currentTime;
      this.oscillator.stop(t + now);
      this.osc2.oscillator.stop(t + now);
      this.dcOffset.stop(t + now);
      this.started = false;
      this.osc2.started = false;
    }
  };
  p5.Pulse.prototype.freq = function (val, rampTime, tFromNow) {
    if (typeof val === 'number') {
      this.f = val;
      var now = p5sound.audiocontext.currentTime;
      var rampTime = rampTime || 0;
      var tFromNow = tFromNow || 0;
      var currentFreq = this.oscillator.frequency.value;
      this.oscillator.frequency.cancelScheduledValues(now);
      this.oscillator.frequency.setValueAtTime(currentFreq, now + tFromNow);
      this.oscillator.frequency.exponentialRampToValueAtTime(val, tFromNow + rampTime + now);
      this.osc2.oscillator.frequency.cancelScheduledValues(now);
      this.osc2.oscillator.frequency.setValueAtTime(currentFreq, now + tFromNow);
      this.osc2.oscillator.frequency.exponentialRampToValueAtTime(val, tFromNow + rampTime + now);
      if (this.freqMod) {
        this.freqMod.output.disconnect();
        this.freqMod = null;
      }
    } else if (val.output) {
      val.output.disconnect();
      val.output.connect(this.oscillator.frequency);
      val.output.connect(this.osc2.oscillator.frequency);
      this.freqMod = val;
    }
  };
  // inspiration: http://webaudiodemos.appspot.com/oscilloscope/
  function createDCOffset() {
    var ac = p5sound.audiocontext;
    var buffer = ac.createBuffer(1, 2048, ac.sampleRate);
    var data = buffer.getChannelData(0);
    for (var i = 0; i < 2048; i++)
      data[i] = 1;
    var bufferSource = ac.createBufferSource();
    bufferSource.buffer = buffer;
    bufferSource.loop = true;
    return bufferSource;
  }
}(master, oscillator);
var noise;
'use strict';
noise = function () {
  var p5sound = master;
  /**
   *  Noise is a type of oscillator that generates a buffer with random values.
   *
   *  @class p5.Noise
   *  @extends p5.Oscillator
   *  @constructor
   *  @param {String} type Type of noise can be 'white' (default),
   *                       'brown' or 'pink'.
   */
  p5.Noise = function (type) {
    var assignType;
    p5.Oscillator.call(this);
    delete this.f;
    delete this.freq;
    delete this.oscillator;
    if (type === 'brown') {
      assignType = _brownNoise;
    } else if (type === 'pink') {
      assignType = _pinkNoise;
    } else {
      assignType = _whiteNoise;
    }
    this.buffer = assignType;
  };
  p5.Noise.prototype = Object.create(p5.Oscillator.prototype);
  // generate noise buffers
  var _whiteNoise = function () {
    var bufferSize = 2 * p5sound.audiocontext.sampleRate;
    var whiteBuffer = p5sound.audiocontext.createBuffer(1, bufferSize, p5sound.audiocontext.sampleRate);
    var noiseData = whiteBuffer.getChannelData(0);
    for (var i = 0; i < bufferSize; i++) {
      noiseData[i] = Math.random() * 2 - 1;
    }
    whiteBuffer.type = 'white';
    return whiteBuffer;
  }();
  var _pinkNoise = function () {
    var bufferSize = 2 * p5sound.audiocontext.sampleRate;
    var pinkBuffer = p5sound.audiocontext.createBuffer(1, bufferSize, p5sound.audiocontext.sampleRate);
    var noiseData = pinkBuffer.getChannelData(0);
    var b0, b1, b2, b3, b4, b5, b6;
    b0 = b1 = b2 = b3 = b4 = b5 = b6 = 0;
    for (var i = 0; i < bufferSize; i++) {
      var white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.969 * b2 + white * 0.153852;
      b3 = 0.8665 * b3 + white * 0.3104856;
      b4 = 0.55 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.016898;
      noiseData[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
      noiseData[i] *= 0.11;
      // (roughly) compensate for gain
      b6 = white * 0.115926;
    }
    pinkBuffer.type = 'pink';
    return pinkBuffer;
  }();
  var _brownNoise = function () {
    var bufferSize = 2 * p5sound.audiocontext.sampleRate;
    var brownBuffer = p5sound.audiocontext.createBuffer(1, bufferSize, p5sound.audiocontext.sampleRate);
    var noiseData = brownBuffer.getChannelData(0);
    var lastOut = 0;
    for (var i = 0; i < bufferSize; i++) {
      var white = Math.random() * 2 - 1;
      noiseData[i] = (lastOut + 0.02 * white) / 1.02;
      lastOut = noiseData[i];
      noiseData[i] *= 3.5;
    }
    brownBuffer.type = 'brown';
    return brownBuffer;
  }();
  /**
   *  Set type of noise to 'white', 'pink' or 'brown'.
   *  White is the default.
   *
   *  @method setType
   *  @param {String} [type] 'white', 'pink' or 'brown'
   */
  p5.Noise.prototype.setType = function (type) {
    switch (type) {
    case 'white':
      this.buffer = _whiteNoise;
      break;
    case 'pink':
      this.buffer = _pinkNoise;
      break;
    case 'brown':
      this.buffer = _brownNoise;
      break;
    default:
      this.buffer = _whiteNoise;
    }
    if (this.started) {
      var now = p5sound.audiocontext.currentTime;
      this.stop(now);
      this.start(now + 0.01);
    }
  };
  p5.Noise.prototype.getType = function () {
    return this.buffer.type;
  };
  /**
   *  Start the noise
   *
   *  @method start
   */
  p5.Noise.prototype.start = function () {
    if (this.started) {
      this.stop();
    }
    this.noise = p5sound.audiocontext.createBufferSource();
    this.noise.buffer = this.buffer;
    this.noise.loop = true;
    this.noise.connect(this.output);
    var now = p5sound.audiocontext.currentTime;
    this.noise.start(now);
    this.started = true;
  };
  /**
   *  Stop the noise.
   *
   *  @method  stop
   */
  p5.Noise.prototype.stop = function () {
    var now = p5sound.audiocontext.currentTime;
    if (this.noise) {
      this.noise.stop(now);
      this.started = false;
    }
  };
  /**
   *  Pan the noise.
   *
   *  @method  pan
   *  @param  {Number} panning Number between -1 (left)
   *                           and 1 (right)
   *  @param  {Number} timeFromNow schedule this event to happen
   *                                seconds from now
   */
  /**
   *  Set the amplitude of the noise between 0 and 1.0. Or,
   *  modulate amplitude with an audio signal such as an oscillator.
   *
   *  @method amp
   *  @param  {Number|Object} volume amplitude between 0 and 1.0
   *                                     or modulating signal/oscillator
   *  @param {Number} [rampTime] create a fade that lasts rampTime
   *  @param {Number} [timeFromNow] schedule this event to happen
   *                                seconds from now
   */
  /**
   *  Send output to a p5.sound or web audio object
   *
   *  @method  connect
   *  @param  {Object} unit
   */
  /**
   *  Disconnect all output.
   *
   *  @method disconnect
   */
  p5.Noise.prototype.dispose = function () {
    var now = p5sound.audiocontext.currentTime;
    // remove reference from soundArray
    var index = p5sound.soundArray.indexOf(this);
    p5sound.soundArray.splice(index, 1);
    if (this.noise) {
      this.noise.disconnect();
      this.stop(now);
    }
    if (this.output) {
      this.output.disconnect();
    }
    if (this.panner) {
      this.panner.disconnect();
    }
    this.output = null;
    this.panner = null;
    this.buffer = null;
    this.noise = null;
  };
}(master);
var audioin;
'use strict';
audioin = function () {
  var p5sound = master;
  // an array of input sources
  p5sound.inputSources = [];
  /**
   *  <p>Get audio from an input, i.e. your computer's microphone.</p>
   *
   *  <p>Turn the mic on/off with the start() and stop() methods. When the mic
   *  is on, its volume can be measured with getLevel or by connecting an
   *  FFT object.</p>
   *
   *  <p>If you want to hear the AudioIn, use the .connect() method.
   *  AudioIn does not connect to p5.sound output by default to prevent
   *  feedback.</p>
   *
   *  <p><em>Note: This uses the <a href="http://caniuse.com/stream">getUserMedia/
   *  Stream</a> API, which is not supported by certain browsers. Access in Chrome browser
   *  is limited to localhost and https, but access over http may be limited.</em></p>
   *
   *  @class p5.AudioIn
   *  @constructor
   *  @param {Function} [errorCallback] A function to call if there is an error
   *                                    accessing the AudioIn. For example,
   *                                    Safari and iOS devices do not
   *                                    currently allow microphone access.
   *  @example
   *  <div><code>
   *  var mic;
   *  function setup(){
   *    mic = new p5.AudioIn()
   *    mic.start();
   *  }
   *  function draw(){
   *    background(0);
   *    micLevel = mic.getLevel();
   *    ellipse(width/2, constrain(height-micLevel*height*5, 0, height), 10, 10);
   *  }
   *  </code></div>
   */
  p5.AudioIn = function (errorCallback) {
    // set up audio input
    this.input = p5sound.audiocontext.createGain();
    this.output = p5sound.audiocontext.createGain();
    this.stream = null;
    this.mediaStream = null;
    this.currentSource = null;
    /**
     *  Client must allow browser to access their microphone / audioin source.
     *  Default: false. Will become true when the client enables acces.
     *
     *  @property {Boolean} enabled
     */
    this.enabled = false;
    // create an amplitude, connect to it by default but not to master out
    this.amplitude = new p5.Amplitude();
    this.output.connect(this.amplitude.input);
    if (!window.MediaStreamTrack || !window.navigator.mediaDevices || !window.navigator.mediaDevices.getUserMedia) {
      errorCallback ? errorCallback() : window.alert('This browser does not support MediaStreamTrack and mediaDevices');
    }
    // add to soundArray so we can dispose on close
    p5sound.soundArray.push(this);
  };
  /**
   *  Start processing audio input. This enables the use of other
   *  AudioIn methods like getLevel(). Note that by default, AudioIn
   *  is not connected to p5.sound's output. So you won't hear
   *  anything unless you use the connect() method.<br/>
   *
   *  Certain browsers limit access to the user's microphone. For example,
   *  Chrome only allows access from localhost and over https. For this reason,
   *  you may want to include an errorCallback—a function that is called in case
   *  the browser won't provide mic access.
   *
   *  @method start
   *  @param {Function} [successCallback] Name of a function to call on
   *                                    success.
   *  @param {Function} [errorCallback] Name of a function to call if
   *                                    there was an error. For example,
   *                                    some browsers do not support
   *                                    getUserMedia.
   */
  p5.AudioIn.prototype.start = function (successCallback, errorCallback) {
    var self = this;
    if (this.stream) {
      this.stop();
    }
    // set the audio source
    var audioSource = p5sound.inputSources[self.currentSource];
    var constraints = {
      audio: {
        sampleRate: p5sound.audiocontext.sampleRate,
        echoCancellation: false
      }
    };
    // if developers determine which source to use
    if (p5sound.inputSources[this.currentSource]) {
      constraints.audio.deviceId = audioSource.deviceId;
    }
    window.navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
      self.stream = stream;
      self.enabled = true;
      // Wrap a MediaStreamSourceNode around the live input
      self.mediaStream = p5sound.audiocontext.createMediaStreamSource(stream);
      self.mediaStream.connect(self.output);
      // only send to the Amplitude reader, so we can see it but not hear it.
      self.amplitude.setInput(self.output);
      if (successCallback)
        successCallback();
    }).catch(function (err) {
      if (errorCallback)
        errorCallback(err);
      else
        console.error(err);
    });
  };
  /**
   *  Turn the AudioIn off. If the AudioIn is stopped, it cannot getLevel().
   *  If re-starting, the user may be prompted for permission access.
   *
   *  @method stop
   */
  p5.AudioIn.prototype.stop = function () {
    if (this.stream) {
      this.stream.getTracks().forEach(function (track) {
        track.stop();
      });
      this.mediaStream.disconnect();
      delete this.mediaStream;
      delete this.stream;
    }
  };
  /**
   *  Connect to an audio unit. If no parameter is provided, will
   *  connect to the master output (i.e. your speakers).<br/>
   *
   *  @method  connect
   *  @param  {Object} [unit] An object that accepts audio input,
   *                          such as an FFT
   */
  p5.AudioIn.prototype.connect = function (unit) {
    if (unit) {
      if (unit.hasOwnProperty('input')) {
        this.output.connect(unit.input);
      } else if (unit.hasOwnProperty('analyser')) {
        this.output.connect(unit.analyser);
      } else {
        this.output.connect(unit);
      }
    } else {
      this.output.connect(p5sound.input);
    }
  };
  /**
   *  Disconnect the AudioIn from all audio units. For example, if
   *  connect() had been called, disconnect() will stop sending
   *  signal to your speakers.<br/>
   *
   *  @method  disconnect
   */
  p5.AudioIn.prototype.disconnect = function () {
    this.output.disconnect();
    // stay connected to amplitude even if not outputting to p5
    this.output.connect(this.amplitude.input);
  };
  /**
   *  Read the Amplitude (volume level) of an AudioIn. The AudioIn
   *  class contains its own instance of the Amplitude class to help
   *  make it easy to get a microphone's volume level. Accepts an
   *  optional smoothing value (0.0 < 1.0). <em>NOTE: AudioIn must
   *  .start() before using .getLevel().</em><br/>
   *
   *  @method  getLevel
   *  @param  {Number} [smoothing] Smoothing is 0.0 by default.
   *                               Smooths values based on previous values.
   *  @return {Number}           Volume level (between 0.0 and 1.0)
   */
  p5.AudioIn.prototype.getLevel = function (smoothing) {
    if (smoothing) {
      this.amplitude.smoothing = smoothing;
    }
    return this.amplitude.getLevel();
  };
  /**
   *  Set amplitude (volume) of a mic input between 0 and 1.0. <br/>
   *
   *  @method  amp
   *  @param  {Number} vol between 0 and 1.0
   *  @param {Number} [time] ramp time (optional)
   */
  p5.AudioIn.prototype.amp = function (vol, t) {
    if (t) {
      var rampTime = t || 0;
      var currentVol = this.output.gain.value;
      this.output.gain.cancelScheduledValues(p5sound.audiocontext.currentTime);
      this.output.gain.setValueAtTime(currentVol, p5sound.audiocontext.currentTime);
      this.output.gain.linearRampToValueAtTime(vol, rampTime + p5sound.audiocontext.currentTime);
    } else {
      this.output.gain.cancelScheduledValues(p5sound.audiocontext.currentTime);
      this.output.gain.setValueAtTime(vol, p5sound.audiocontext.currentTime);
    }
  };
  /**
   * Returns a list of available input sources. This is a wrapper
   * for <a title="MediaDevices.enumerateDevices() - Web APIs | MDN" target="_blank" href=
   *  "https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/enumerateDevices"
   *  > and it returns a Promise.
   *
   * @method  getSources
   * @param  {Function} [successCallback] This callback function handles the sources when they
   *                                      have been enumerated. The callback function
   *                                      receives the deviceList array as its only argument
   * @param  {Function} [errorCallback] This optional callback receives the error
   *                                    message as its argument.
   * @returns {Object} Returns a Promise that can be used in place of the callbacks, similar
   *                            to the enumerateDevices() method
   * @example
   *  <div><code>
   *  var audiograb;
   *
   *  function setup(){
   *    //new audioIn
   *    audioGrab = new p5.AudioIn();
   *
   *    audioGrab.getSources(function(deviceList) {
   *      //print out the array of available sources
   *      console.log(deviceList);
   *      //set the source to the first item in the deviceList array
   *      audioGrab.setSource(0);
   *    });
   *  }
   *  </code></div>
   */
  p5.AudioIn.prototype.getSources = function (onSuccess, onError) {
    return new Promise(function (resolve, reject) {
      window.navigator.mediaDevices.enumerateDevices().then(function (devices) {
        p5sound.inputSources = devices.filter(function (device) {
          return device.kind === 'audioinput';
        });
        resolve(p5sound.inputSources);
        if (onSuccess) {
          onSuccess(p5sound.inputSources);
        }
      }).catch(function (error) {
        reject(error);
        if (onError) {
          onError(error);
        } else {
          console.error('This browser does not support MediaStreamTrack.getSources()');
        }
      });
    });
  };
  /**
   *  Set the input source. Accepts a number representing a
   *  position in the array returned by getSources().
   *  This is only available in browsers that support
   *  <a title="MediaDevices.enumerateDevices() - Web APIs | MDN" target="_blank" href=
   *  "https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/enumerateDevices"
   *  >navigator.mediaDevices.enumerateDevices()</a>.<br/>
   *
   *  @method setSource
   *  @param {number} num position of input source in the array
   */
  p5.AudioIn.prototype.setSource = function (num) {
    if (p5sound.inputSources.length > 0 && num < p5sound.inputSources.length) {
      // set the current source
      this.currentSource = num;
      console.log('set source to ', p5sound.inputSources[this.currentSource]);
    } else {
      console.log('unable to set input source');
    }
    // restart stream if currently active
    if (this.stream && this.stream.active) {
      this.start();
    }
  };
  // private method
  p5.AudioIn.prototype.dispose = function () {
    // remove reference from soundArray
    var index = p5sound.soundArray.indexOf(this);
    p5sound.soundArray.splice(index, 1);
    this.stop();
    if (this.output) {
      this.output.disconnect();
    }
    if (this.amplitude) {
      this.amplitude.disconnect();
    }
    delete this.amplitude;
    delete this.output;
  };
}(master);
/** Tone.js module by Yotam Mann, MIT License 2016  http://opensource.org/licenses/MIT **/
var Tone_signal_Negate;
Tone_signal_Negate = function (Tone) {
  'use strict';
  Tone.Negate = function () {
    this._multiply = this.input = this.output = new Tone.Multiply(-1);
  };
  Tone.extend(Tone.Negate, Tone.SignalBase);
  Tone.Negate.prototype.dispose = function () {
    Tone.prototype.dispose.call(this);
    this._multiply.dispose();
    this._multiply = null;
    return this;
  };
  return Tone.Negate;
}(Tone_core_Tone, Tone_signal_Multiply);
/** Tone.js module by Yotam Mann, MIT License 2016  http://opensource.org/licenses/MIT **/
var Tone_signal_Subtract;
Tone_signal_Subtract = function (Tone) {
  'use strict';
  Tone.Subtract = function (value) {
    this.createInsOuts(2, 0);
    this._sum = this.input[0] = this.output = new Tone.Gain();
    this._neg = new Tone.Negate();
    this._param = this.input[1] = new Tone.Signal(value);
    this._param.chain(this._neg, this._sum);
  };
  Tone.extend(Tone.Subtract, Tone.Signal);
  Tone.Subtract.prototype.dispose = function () {
    Tone.prototype.dispose.call(this);
    this._neg.dispose();
    this._neg = null;
    this._sum.disconnect();
    this._sum = null;
    this._param.dispose();
    this._param = null;
    return this;
  };
  return Tone.Subtract;
}(Tone_core_Tone, Tone_signal_Add, Tone_signal_Negate, Tone_signal_Signal);
/** Tone.js module by Yotam Mann, MIT License 2016  http://opensource.org/licenses/MIT **/
var Tone_signal_GreaterThanZero;
Tone_signal_GreaterThanZero = function (Tone) {
  'use strict';
  Tone.GreaterThanZero = function () {
    this._thresh = this.output = new Tone.WaveShaper(function (val) {
      if (val <= 0) {
        return 0;
      } else {
        return 1;
      }
    }, 127);
    this._scale = this.input = new Tone.Multiply(10000);
    this._scale.connect(this._thresh);
  };
  Tone.extend(Tone.GreaterThanZero, Tone.SignalBase);
  Tone.GreaterThanZero.prototype.dispose = function () {
    Tone.prototype.dispose.call(this);
    this._scale.dispose();
    this._scale = null;
    this._thresh.dispose();
    this._thresh = null;
    return this;
  };
  return Tone.GreaterThanZero;
}(Tone_core_Tone, Tone_signal_Signal, Tone_signal_Multiply);
/** Tone.js module by Yotam Mann, MIT License 2016  http://opensource.org/licenses/MIT **/
var Tone_signal_GreaterThan;
Tone_signal_GreaterThan = function (Tone) {
  'use strict';
  Tone.GreaterThan = function (value) {
    this.createInsOuts(2, 0);
    this._param = this.input[0] = new Tone.Subtract(value);
    this.input[1] = this._param.input[1];
    this._gtz = this.output = new Tone.GreaterThanZero();
    this._param.connect(this._gtz);
  };
  Tone.extend(Tone.GreaterThan, Tone.Signal);
  Tone.GreaterThan.prototype.dispose = function () {
    Tone.prototype.dispose.call(this);
    this._param.dispose();
    this._param = null;
    this._gtz.dispose();
    this._gtz = null;
    return this;
  };
  return Tone.GreaterThan;
}(Tone_core_Tone, Tone_signal_GreaterThanZero, Tone_signal_Subtract);
/** Tone.js module by Yotam Mann, MIT License 2016  http://opensource.org/licenses/MIT **/
var Tone_signal_Abs;
Tone_signal_Abs = function (Tone) {
  'use strict';
  Tone.Abs = function () {
    this._abs = this.input = this.output = new Tone.WaveShaper(function (val) {
      if (val === 0) {
        return 0;
      } else {
        return Math.abs(val);
      }
    }, 127);
  };
  Tone.extend(Tone.Abs, Tone.SignalBase);
  Tone.Abs.prototype.dispose = function () {
    Tone.prototype.dispose.call(this);
    this._abs.dispose();
    this._abs = null;
    return this;
  };
  return Tone.Abs;
}(Tone_core_Tone, Tone_signal_WaveShaper);
/** Tone.js module by Yotam Mann, MIT License 2016  http://opensource.org/licenses/MIT **/
var Tone_signal_Modulo;
Tone_signal_Modulo = function (Tone) {
  'use strict';
  Tone.Modulo = function (modulus) {
    this.createInsOuts(1, 0);
    this._shaper = new Tone.WaveShaper(Math.pow(2, 16));
    this._multiply = new Tone.Multiply();
    this._subtract = this.output = new Tone.Subtract();
    this._modSignal = new Tone.Signal(modulus);
    this.input.fan(this._shaper, this._subtract);
    this._modSignal.connect(this._multiply, 0, 0);
    this._shaper.connect(this._multiply, 0, 1);
    this._multiply.connect(this._subtract, 0, 1);
    this._setWaveShaper(modulus);
  };
  Tone.extend(Tone.Modulo, Tone.SignalBase);
  Tone.Modulo.prototype._setWaveShaper = function (mod) {
    this._shaper.setMap(function (val) {
      var multiple = Math.floor((val + 0.0001) / mod);
      return multiple;
    });
  };
  Object.defineProperty(Tone.Modulo.prototype, 'value', {
    get: function () {
      return this._modSignal.value;
    },
    set: function (mod) {
      this._modSignal.value = mod;
      this._setWaveShaper(mod);
    }
  });
  Tone.Modulo.prototype.dispose = function () {
    Tone.prototype.dispose.call(this);
    this._shaper.dispose();
    this._shaper = null;
    this._multiply.dispose();
    this._multiply = null;
    this._subtract.dispose();
    this._subtract = null;
    this._modSignal.dispose();
    this._modSignal = null;
    return this;
  };
  return Tone.Modulo;
}(Tone_core_Tone, Tone_signal_WaveShaper, Tone_signal_Multiply);
/** Tone.js module by Yotam Mann, MIT License 2016  http://opensource.org/licenses/MIT **/
var Tone_signal_Pow;
Tone_signal_Pow = function (Tone) {
  'use strict';
  Tone.Pow = function (exp) {
    this._exp = this.defaultArg(exp, 1);
    this._expScaler = this.input = this.output = new Tone.WaveShaper(this._expFunc(this._exp), 8192);
  };
  Tone.extend(Tone.Pow, Tone.SignalBase);
  Object.defineProperty(Tone.Pow.prototype, 'value', {
    get: function () {
      return this._exp;
    },
    set: function (exp) {
      this._exp = exp;
      this._expScaler.setMap(this._expFunc(this._exp));
    }
  });
  Tone.Pow.prototype._expFunc = function (exp) {
    return function (val) {
      return Math.pow(Math.abs(val), exp);
    };
  };
  Tone.Pow.prototype.dispose = function () {
    Tone.prototype.dispose.call(this);
    this._expScaler.dispose();
    this._expScaler = null;
    return this;
  };
  return Tone.Pow;
}(Tone_core_Tone);
/** Tone.js module by Yotam Mann, MIT License 2016  http://opensource.org/licenses/MIT **/
var Tone_signal_AudioToGain;
Tone_signal_AudioToGain = function (Tone) {
  'use strict';
  Tone.AudioToGain = function () {
    this._norm = this.input = this.output = new Tone.WaveShaper(function (x) {
      return (x + 1) / 2;
    });
  };
  Tone.extend(Tone.AudioToGain, Tone.SignalBase);
  Tone.AudioToGain.prototype.dispose = function () {
    Tone.prototype.dispose.call(this);
    this._norm.dispose();
    this._norm = null;
    return this;
  };
  return Tone.AudioToGain;
}(Tone_core_Tone, Tone_signal_WaveShaper);
/** Tone.js module by Yotam Mann, MIT License 2016  http://opensource.org/licenses/MIT **/
var Tone_signal_Expr;
Tone_signal_Expr = function (Tone) {
  'use strict';
  Tone.Expr = function () {
    var expr = this._replacements(Array.prototype.slice.call(arguments));
    var inputCount = this._parseInputs(expr);
    this._nodes = [];
    this.input = new Array(inputCount);
    for (var i = 0; i < inputCount; i++) {
      this.input[i] = this.context.createGain();
    }
    var tree = this._parseTree(expr);
    var result;
    try {
      result = this._eval(tree);
    } catch (e) {
      this._disposeNodes();
      throw new Error('Tone.Expr: Could evaluate expression: ' + expr);
    }
    this.output = result;
  };
  Tone.extend(Tone.Expr, Tone.SignalBase);
  function applyBinary(Constructor, args, self) {
    var op = new Constructor();
    self._eval(args[0]).connect(op, 0, 0);
    self._eval(args[1]).connect(op, 0, 1);
    return op;
  }
  function applyUnary(Constructor, args, self) {
    var op = new Constructor();
    self._eval(args[0]).connect(op, 0, 0);
    return op;
  }
  function getNumber(arg) {
    return arg ? parseFloat(arg) : undefined;
  }
  function literalNumber(arg) {
    return arg && arg.args ? parseFloat(arg.args) : undefined;
  }
  Tone.Expr._Expressions = {
    'value': {
      'signal': {
        regexp: /^\d+\.\d+|^\d+/,
        method: function (arg) {
          var sig = new Tone.Signal(getNumber(arg));
          return sig;
        }
      },
      'input': {
        regexp: /^\$\d/,
        method: function (arg, self) {
          return self.input[getNumber(arg.substr(1))];
        }
      }
    },
    'glue': {
      '(': { regexp: /^\(/ },
      ')': { regexp: /^\)/ },
      ',': { regexp: /^,/ }
    },
    'func': {
      'abs': {
        regexp: /^abs/,
        method: applyUnary.bind(this, Tone.Abs)
      },
      'mod': {
        regexp: /^mod/,
        method: function (args, self) {
          var modulus = literalNumber(args[1]);
          var op = new Tone.Modulo(modulus);
          self._eval(args[0]).connect(op);
          return op;
        }
      },
      'pow': {
        regexp: /^pow/,
        method: function (args, self) {
          var exp = literalNumber(args[1]);
          var op = new Tone.Pow(exp);
          self._eval(args[0]).connect(op);
          return op;
        }
      },
      'a2g': {
        regexp: /^a2g/,
        method: function (args, self) {
          var op = new Tone.AudioToGain();
          self._eval(args[0]).connect(op);
          return op;
        }
      }
    },
    'binary': {
      '+': {
        regexp: /^\+/,
        precedence: 1,
        method: applyBinary.bind(this, Tone.Add)
      },
      '-': {
        regexp: /^\-/,
        precedence: 1,
        method: function (args, self) {
          if (args.length === 1) {
            return applyUnary(Tone.Negate, args, self);
          } else {
            return applyBinary(Tone.Subtract, args, self);
          }
        }
      },
      '*': {
        regexp: /^\*/,
        precedence: 0,
        method: applyBinary.bind(this, Tone.Multiply)
      }
    },
    'unary': {
      '-': {
        regexp: /^\-/,
        method: applyUnary.bind(this, Tone.Negate)
      },
      '!': {
        regexp: /^\!/,
        method: applyUnary.bind(this, Tone.NOT)
      }
    }
  };
  Tone.Expr.prototype._parseInputs = function (expr) {
    var inputArray = expr.match(/\$\d/g);
    var inputMax = 0;
    if (inputArray !== null) {
      for (var i = 0; i < inputArray.length; i++) {
        var inputNum = parseInt(inputArray[i].substr(1)) + 1;
        inputMax = Math.max(inputMax, inputNum);
      }
    }
    return inputMax;
  };
  Tone.Expr.prototype._replacements = function (args) {
    var expr = args.shift();
    for (var i = 0; i < args.length; i++) {
      expr = expr.replace(/\%/i, args[i]);
    }
    return expr;
  };
  Tone.Expr.prototype._tokenize = function (expr) {
    var position = -1;
    var tokens = [];
    while (expr.length > 0) {
      expr = expr.trim();
      var token = getNextToken(expr);
      tokens.push(token);
      expr = expr.substr(token.value.length);
    }
    function getNextToken(expr) {
      for (var type in Tone.Expr._Expressions) {
        var group = Tone.Expr._Expressions[type];
        for (var opName in group) {
          var op = group[opName];
          var reg = op.regexp;
          var match = expr.match(reg);
          if (match !== null) {
            return {
              type: type,
              value: match[0],
              method: op.method
            };
          }
        }
      }
      throw new SyntaxError('Tone.Expr: Unexpected token ' + expr);
    }
    return {
      next: function () {
        return tokens[++position];
      },
      peek: function () {
        return tokens[position + 1];
      }
    };
  };
  Tone.Expr.prototype._parseTree = function (expr) {
    var lexer = this._tokenize(expr);
    var isUndef = this.isUndef.bind(this);
    function matchSyntax(token, syn) {
      return !isUndef(token) && token.type === 'glue' && token.value === syn;
    }
    function matchGroup(token, groupName, prec) {
      var ret = false;
      var group = Tone.Expr._Expressions[groupName];
      if (!isUndef(token)) {
        for (var opName in group) {
          var op = group[opName];
          if (op.regexp.test(token.value)) {
            if (!isUndef(prec)) {
              if (op.precedence === prec) {
                return true;
              }
            } else {
              return true;
            }
          }
        }
      }
      return ret;
    }
    function parseExpression(precedence) {
      if (isUndef(precedence)) {
        precedence = 5;
      }
      var expr;
      if (precedence < 0) {
        expr = parseUnary();
      } else {
        expr = parseExpression(precedence - 1);
      }
      var token = lexer.peek();
      while (matchGroup(token, 'binary', precedence)) {
        token = lexer.next();
        expr = {
          operator: token.value,
          method: token.method,
          args: [
            expr,
            parseExpression(precedence - 1)
          ]
        };
        token = lexer.peek();
      }
      return expr;
    }
    function parseUnary() {
      var token, expr;
      token = lexer.peek();
      if (matchGroup(token, 'unary')) {
        token = lexer.next();
        expr = parseUnary();
        return {
          operator: token.value,
          method: token.method,
          args: [expr]
        };
      }
      return parsePrimary();
    }
    function parsePrimary() {
      var token, expr;
      token = lexer.peek();
      if (isUndef(token)) {
        throw new SyntaxError('Tone.Expr: Unexpected termination of expression');
      }
      if (token.type === 'func') {
        token = lexer.next();
        return parseFunctionCall(token);
      }
      if (token.type === 'value') {
        token = lexer.next();
        return {
          method: token.method,
          args: token.value
        };
      }
      if (matchSyntax(token, '(')) {
        lexer.next();
        expr = parseExpression();
        token = lexer.next();
        if (!matchSyntax(token, ')')) {
          throw new SyntaxError('Expected )');
        }
        return expr;
      }
      throw new SyntaxError('Tone.Expr: Parse error, cannot process token ' + token.value);
    }
    function parseFunctionCall(func) {
      var token, args = [];
      token = lexer.next();
      if (!matchSyntax(token, '(')) {
        throw new SyntaxError('Tone.Expr: Expected ( in a function call "' + func.value + '"');
      }
      token = lexer.peek();
      if (!matchSyntax(token, ')')) {
        args = parseArgumentList();
      }
      token = lexer.next();
      if (!matchSyntax(token, ')')) {
        throw new SyntaxError('Tone.Expr: Expected ) in a function call "' + func.value + '"');
      }
      return {
        method: func.method,
        args: args,
        name: name
      };
    }
    function parseArgumentList() {
      var token, expr, args = [];
      while (true) {
        expr = parseExpression();
        if (isUndef(expr)) {
          break;
        }
        args.push(expr);
        token = lexer.peek();
        if (!matchSyntax(token, ',')) {
          break;
        }
        lexer.next();
      }
      return args;
    }
    return parseExpression();
  };
  Tone.Expr.prototype._eval = function (tree) {
    if (!this.isUndef(tree)) {
      var node = tree.method(tree.args, this);
      this._nodes.push(node);
      return node;
    }
  };
  Tone.Expr.prototype._disposeNodes = function () {
    for (var i = 0; i < this._nodes.length; i++) {
      var node = this._nodes[i];
      if (this.isFunction(node.dispose)) {
        node.dispose();
      } else if (this.isFunction(node.disconnect)) {
        node.disconnect();
      }
      node = null;
      this._nodes[i] = null;
    }
    this._nodes = null;
  };
  Tone.Expr.prototype.dispose = function () {
    Tone.prototype.dispose.call(this);
    this._disposeNodes();
  };
  return Tone.Expr;
}(Tone_core_Tone, Tone_signal_Add, Tone_signal_Subtract, Tone_signal_Multiply, Tone_signal_GreaterThan, Tone_signal_GreaterThanZero, Tone_signal_Abs, Tone_signal_Negate, Tone_signal_Modulo, Tone_signal_Pow);
/** Tone.js module by Yotam Mann, MIT License 2016  http://opensource.org/licenses/MIT **/
var Tone_signal_EqualPowerGain;
Tone_signal_EqualPowerGain = function (Tone) {
  'use strict';
  Tone.EqualPowerGain = function () {
    this._eqPower = this.input = this.output = new Tone.WaveShaper(function (val) {
      if (Math.abs(val) < 0.001) {
        return 0;
      } else {
        return this.equalPowerScale(val);
      }
    }.bind(this), 4096);
  };
  Tone.extend(Tone.EqualPowerGain, Tone.SignalBase);
  Tone.EqualPowerGain.prototype.dispose = function () {
    Tone.prototype.dispose.call(this);
    this._eqPower.dispose();
    this._eqPower = null;
    return this;
  };
  return Tone.EqualPowerGain;
}(Tone_core_Tone);
/** Tone.js module by Yotam Mann, MIT License 2016  http://opensource.org/licenses/MIT **/
var Tone_component_CrossFade;
Tone_component_CrossFade = function (Tone) {
  'use strict';
  Tone.CrossFade = function (initialFade) {
    this.createInsOuts(2, 1);
    this.a = this.input[0] = new Tone.Gain();
    this.b = this.input[1] = new Tone.Gain();
    this.fade = new Tone.Signal(this.defaultArg(initialFade, 0.5), Tone.Type.NormalRange);
    this._equalPowerA = new Tone.EqualPowerGain();
    this._equalPowerB = new Tone.EqualPowerGain();
    this._invert = new Tone.Expr('1 - $0');
    this.a.connect(this.output);
    this.b.connect(this.output);
    this.fade.chain(this._equalPowerB, this.b.gain);
    this.fade.chain(this._invert, this._equalPowerA, this.a.gain);
    this._readOnly('fade');
  };
  Tone.extend(Tone.CrossFade);
  Tone.CrossFade.prototype.dispose = function () {
    Tone.prototype.dispose.call(this);
    this._writable('fade');
    this._equalPowerA.dispose();
    this._equalPowerA = null;
    this._equalPowerB.dispose();
    this._equalPowerB = null;
    this.fade.dispose();
    this.fade = null;
    this._invert.dispose();
    this._invert = null;
    this.a.dispose();
    this.a = null;
    this.b.dispose();
    this.b = null;
    return this;
  };
  return Tone.CrossFade;
}(Tone_core_Tone, Tone_signal_Signal, Tone_signal_Expr, Tone_signal_EqualPowerGain);
var effect;
'use strict';
effect = function () {
  var p5sound = master;
  var CrossFade = Tone_component_CrossFade;
  /**
  * Effect is a base class for audio effects in p5. <br>
  * This module handles the nodes and methods that are
  * common and useful for current and future effects.
  *
  *
  * This class is extended by <a href="reference/#/p5.Distortion">p5.Distortion</a>,
  * <a href="reference/#/p5.Compressor">p5.Compressor</a>,
  * <a href="reference/#/p5.Delay">p5.Delay</a>,
  * <a href="reference/#/p5.Filter">p5.Filter</a>,
  * <a href="reference/#/p5.Reverb">p5.Reverb</a>.
  *
  * @class  p5.Effect
  * @constructor
  *
  * @param {Object} [ac]   Reference to the audio context of the p5 object
  * @param {AudioNode} [input]  Gain Node effect wrapper
  * @param {AudioNode} [output] Gain Node effect wrapper
  * @param {Object} [_drywet]   Tone.JS CrossFade node (defaults to value: 1)
  * @param {AudioNode} [wet]  Effects that extend this class should connect
  *                              to the wet signal to this gain node, so that dry and wet
  *                              signals are mixed properly.
  */
  p5.Effect = function () {
    this.ac = p5sound.audiocontext;
    this.input = this.ac.createGain();
    this.output = this.ac.createGain();
    /**
    * The p5.Effect class is built
    *   using Tone.js CrossFade
    *   @private
    */
    this._drywet = new CrossFade(1);
    /**
     *  In classes that extend
     *  p5.Effect, connect effect nodes
     *  to the wet parameter
     */
    this.wet = this.ac.createGain();
    this.input.connect(this._drywet.a);
    this.wet.connect(this._drywet.b);
    this._drywet.connect(this.output);
    this.connect();
    //Add to the soundArray
    p5sound.soundArray.push(this);
  };
  /**
  *  Set the output volume of the filter.
  *
  *  @method  amp
  *  @param {Number} [vol] amplitude between 0 and 1.0
  *  @param {Number} [rampTime] create a fade that lasts until rampTime
  *  @param {Number} [tFromNow] schedule this event to happen in tFromNow seconds
  */
  p5.Effect.prototype.amp = function (vol, rampTime, tFromNow) {
    var rampTime = rampTime || 0;
    var tFromNow = tFromNow || 0;
    var now = p5sound.audiocontext.currentTime;
    var currentVol = this.output.gain.value;
    this.output.gain.cancelScheduledValues(now);
    this.output.gain.linearRampToValueAtTime(currentVol, now + tFromNow + 0.001);
    this.output.gain.linearRampToValueAtTime(vol, now + tFromNow + rampTime + 0.001);
  };
  /**
  * Link effects together in a chain
  * Example usage: filter.chain(reverb, delay, panner);
  * May be used with an open-ended number of arguments
  *
  * @method chain
     *  @param {Object} [arguments]  Chain together multiple sound objects
  */
  p5.Effect.prototype.chain = function () {
    if (arguments.length > 0) {
      this.connect(arguments[0]);
      for (var i = 1; i < arguments.length; i += 1) {
        arguments[i - 1].connect(arguments[i]);
      }
    }
    return this;
  };
  /**
  * Adjust the dry/wet value.
  *
  * @method drywet
  * @param {Number} [fade] The desired drywet value (0 - 1.0)
  */
  p5.Effect.prototype.drywet = function (fade) {
    if (typeof fade !== 'undefined') {
      this._drywet.fade.value = fade;
    }
    return this._drywet.fade.value;
  };
  /**
  * Send output to a p5.js-sound, Web Audio Node, or use signal to
  * control an AudioParam
  *
  * @method connect
  * @param {Object} unit
  */
  p5.Effect.prototype.connect = function (unit) {
    var u = unit || p5.soundOut.input;
    this.output.connect(u.input ? u.input : u);
  };
  /**
  * Disconnect all output.
  *
  * @method disconnect
  */
  p5.Effect.prototype.disconnect = function () {
    this.output.disconnect();
  };
  p5.Effect.prototype.dispose = function () {
    // remove refernce form soundArray
    var index = p5sound.soundArray.indexOf(this);
    p5sound.soundArray.splice(index, 1);
    this.input.disconnect();
    this.input = undefined;
    this.output.disconnect();
    this.output = undefined;
    this._drywet.disconnect();
    delete this._drywet;
    this.wet.disconnect();
    delete this.wet;
    this.ac = undefined;
  };
  return p5.Effect;
}(master, Tone_component_CrossFade);
var filter;
'use strict';
filter = function () {
  var p5sound = master;
  var Effect = effect;
  /**
   *  <p>A p5.Filter uses a Web Audio Biquad Filter to filter
   *  the frequency response of an input source. Subclasses
   *  include:</p>
   *  * <a href="/reference/#/p5.LowPass"><code>p5.LowPass</code></a>:
   *  Allows frequencies below the cutoff frequency to pass through,
   *  and attenuates frequencies above the cutoff.<br/>
   *  * <a href="/reference/#/p5.HighPass"><code>p5.HighPass</code></a>:
   *  The opposite of a lowpass filter. <br/>
   *  * <a href="/reference/#/p5.BandPass"><code>p5.BandPass</code></a>:
   *  Allows a range of frequencies to pass through and attenuates
   *  the frequencies below and above this frequency range.<br/>
   *
   *  The <code>.res()</code> method controls either width of the
   *  bandpass, or resonance of the low/highpass cutoff frequency.
   *
   *  This class extends <a href = "/reference/#/p5.Effect">p5.Effect</a>.
   *  Methods <a href = "/reference/#/p5.Effect/amp">amp()</a>, <a href = "/reference/#/p5.Effect/chain">chain()</a>,
   *  <a href = "/reference/#/p5.Effect/drywet">drywet()</a>, <a href = "/reference/#/p5.Effect/connect">connect()</a>, and
   *  <a href = "/reference/#/p5.Effect/disconnect">disconnect()</a> are available.
   *
   *  @class p5.Filter
   *  @extends p5.Effect
   *  @constructor
   *  @param {String} [type] 'lowpass' (default), 'highpass', 'bandpass'
   *  @example
   *  <div><code>
   *  var fft, noise, filter;
   *
   *  function setup() {
   *    fill(255, 40, 255);
   *
   *    filter = new p5.BandPass();
   *
   *    noise = new p5.Noise();
   *    // disconnect unfiltered noise,
   *    // and connect to filter
   *    noise.disconnect();
   *    noise.connect(filter);
   *    noise.start();
   *
   *    fft = new p5.FFT();
   *  }
   *
   *  function draw() {
   *    background(30);
   *
   *    // set the BandPass frequency based on mouseX
   *    var freq = map(mouseX, 0, width, 20, 10000);
   *    filter.freq(freq);
   *    // give the filter a narrow band (lower res = wider bandpass)
   *    filter.res(50);
   *
   *    // draw filtered spectrum
   *    var spectrum = fft.analyze();
   *    noStroke();
   *    for (var i = 0; i < spectrum.length; i++) {
   *      var x = map(i, 0, spectrum.length, 0, width);
   *      var h = -height + map(spectrum[i], 0, 255, height, 0);
   *      rect(x, height, width/spectrum.length, h);
   *    }
   *
   *    isMouseOverCanvas();
   *  }
   *
   *  function isMouseOverCanvas() {
   *    var mX = mouseX, mY = mouseY;
   *    if (mX > 0 && mX < width && mY < height && mY > 0) {
   *      noise.amp(0.5, 0.2);
   *    } else {
   *      noise.amp(0, 0.2);
   *    }
   *  }
   *  </code></div>
   */
  //constructor with inheritance
  p5.Filter = function (type) {
    Effect.call(this);
    //add extend Effect by adding a Biquad Filter
    /**
        *  The p5.Filter is built with a
        *  <a href="http://www.w3.org/TR/webaudio/#BiquadFilterNode">
        *  Web Audio BiquadFilter Node</a>.
        *
        *  @property {DelayNode} biquadFilter
     */
    this.biquad = this.ac.createBiquadFilter();
    this.input.connect(this.biquad);
    this.biquad.connect(this.wet);
    if (type) {
      this.setType(type);
    }
    //Properties useful for the toggle method.
    this._on = true;
    this._untoggledType = this.biquad.type;
  };
  p5.Filter.prototype = Object.create(Effect.prototype);
  /**
   *  Filter an audio signal according to a set
   *  of filter parameters.
   *
   *  @method  process
   *  @param  {Object} Signal  An object that outputs audio
   *  @param {Number} [freq] Frequency in Hz, from 10 to 22050
   *  @param {Number} [res] Resonance/Width of the filter frequency
   *                        from 0.001 to 1000
   */
  p5.Filter.prototype.process = function (src, freq, res, time) {
    src.connect(this.input);
    this.set(freq, res, time);
  };
  /**
   *  Set the frequency and the resonance of the filter.
   *
   *  @method  set
   *  @param {Number} [freq] Frequency in Hz, from 10 to 22050
   *  @param {Number} [res]  Resonance (Q) from 0.001 to 1000
   *  @param {Number} [timeFromNow] schedule this event to happen
   *                                seconds from now
   */
  p5.Filter.prototype.set = function (freq, res, time) {
    if (freq) {
      this.freq(freq, time);
    }
    if (res) {
      this.res(res, time);
    }
  };
  /**
   *  Set the filter frequency, in Hz, from 10 to 22050 (the range of
   *  human hearing, although in reality most people hear in a narrower
   *  range).
   *
   *  @method  freq
   *  @param  {Number} freq Filter Frequency
   *  @param {Number} [timeFromNow] schedule this event to happen
   *                                seconds from now
   *  @return {Number} value  Returns the current frequency value
   */
  p5.Filter.prototype.freq = function (freq, time) {
    var t = time || 0;
    if (freq <= 0) {
      freq = 1;
    }
    if (typeof freq === 'number') {
      this.biquad.frequency.value = freq;
      this.biquad.frequency.cancelScheduledValues(this.ac.currentTime + 0.01 + t);
      this.biquad.frequency.exponentialRampToValueAtTime(freq, this.ac.currentTime + 0.02 + t);
    } else if (freq) {
      freq.connect(this.biquad.frequency);
    }
    return this.biquad.frequency.value;
  };
  /**
   *  Controls either width of a bandpass frequency,
   *  or the resonance of a low/highpass cutoff frequency.
   *
   *  @method  res
   *  @param {Number} res  Resonance/Width of filter freq
   *                       from 0.001 to 1000
   *  @param {Number} [timeFromNow] schedule this event to happen
   *                                seconds from now
   *  @return {Number} value Returns the current res value
   */
  p5.Filter.prototype.res = function (res, time) {
    var t = time || 0;
    if (typeof res === 'number') {
      this.biquad.Q.value = res;
      this.biquad.Q.cancelScheduledValues(this.ac.currentTime + 0.01 + t);
      this.biquad.Q.linearRampToValueAtTime(res, this.ac.currentTime + 0.02 + t);
    } else if (res) {
      res.connect(this.biquad.Q);
    }
    return this.biquad.Q.value;
  };
  /**
   * Controls the gain attribute of a Biquad Filter.
   * This is distinctly different from .amp() which is inherited from p5.Effect
   * .amp() controls the volume via the output gain node
   * p5.Filter.gain() controls the gain parameter of a Biquad Filter node.
   *
   * @method gain
   * @param  {Number} gain
   * @return {Number} Returns the current or updated gain value
   */
  p5.Filter.prototype.gain = function (gain, time) {
    var t = time || 0;
    if (typeof gain === 'number') {
      this.biquad.gain.value = gain;
      this.biquad.gain.cancelScheduledValues(this.ac.currentTime + 0.01 + t);
      this.biquad.gain.linearRampToValueAtTime(gain, this.ac.currentTime + 0.02 + t);
    } else if (gain) {
      gain.connect(this.biquad.gain);
    }
    return this.biquad.gain.value;
  };
  /**
   * Toggle function. Switches between the specified type and allpass
   *
   * @method toggle
   * @return {boolean} [Toggle value]
   */
  p5.Filter.prototype.toggle = function () {
    this._on = !this._on;
    if (this._on === true) {
      this.biquad.type = this._untoggledType;
    } else if (this._on === false) {
      this.biquad.type = 'allpass';
    }
    return this._on;
  };
  /**
   *  Set the type of a p5.Filter. Possible types include:
   *  "lowpass" (default), "highpass", "bandpass",
   *  "lowshelf", "highshelf", "peaking", "notch",
   *  "allpass".
   *
   *  @method  setType
   *  @param {String} t
   */
  p5.Filter.prototype.setType = function (t) {
    this.biquad.type = t;
    this._untoggledType = this.biquad.type;
  };
  p5.Filter.prototype.dispose = function () {
    // remove reference from soundArray
    Effect.prototype.dispose.apply(this);
    this.biquad.disconnect();
    this.biquad = undefined;
  };
  /**
   *  Constructor: <code>new p5.LowPass()</code> Filter.
   *  This is the same as creating a p5.Filter and then calling
   *  its method <code>setType('lowpass')</code>.
   *  See p5.Filter for methods.
   *
   *  @class p5.LowPass
   *  @constructor
   *  @extends p5.Filter
   */
  p5.LowPass = function () {
    p5.Filter.call(this, 'lowpass');
  };
  p5.LowPass.prototype = Object.create(p5.Filter.prototype);
  /**
   *  Constructor: <code>new p5.HighPass()</code> Filter.
   *  This is the same as creating a p5.Filter and then calling
   *  its method <code>setType('highpass')</code>.
   *  See p5.Filter for methods.
   *
   *  @class p5.HighPass
   *  @constructor
   *  @extends p5.Filter
   */
  p5.HighPass = function () {
    p5.Filter.call(this, 'highpass');
  };
  p5.HighPass.prototype = Object.create(p5.Filter.prototype);
  /**
   *  Constructor: <code>new p5.BandPass()</code> Filter.
   *  This is the same as creating a p5.Filter and then calling
   *  its method <code>setType('bandpass')</code>.
   *  See p5.Filter for methods.
   *
   *  @class p5.BandPass
   *  @constructor
   *  @extends p5.Filter
   */
  p5.BandPass = function () {
    p5.Filter.call(this, 'bandpass');
  };
  p5.BandPass.prototype = Object.create(p5.Filter.prototype);
  return p5.Filter;
}(master, effect);
var src_eqFilter;
'use strict';
src_eqFilter = function () {
  var Filter = filter;
  var p5sound = master;
  /**
   *  EQFilter extends p5.Filter with constraints
   *  necessary for the p5.EQ
   *
   *  @private
   */
  var EQFilter = function (freq, res) {
    Filter.call(this, 'peaking');
    this.disconnect();
    this.set(freq, res);
    this.biquad.gain.value = 0;
    delete this.input;
    delete this.output;
    delete this._drywet;
    delete this.wet;
  };
  EQFilter.prototype = Object.create(Filter.prototype);
  EQFilter.prototype.amp = function () {
    console.warn('`amp()` is not available for p5.EQ bands. Use `.gain()`');
  };
  EQFilter.prototype.drywet = function () {
    console.warn('`drywet()` is not available for p5.EQ bands.');
  };
  EQFilter.prototype.connect = function (unit) {
    var u = unit || p5.soundOut.input;
    if (this.biquad) {
      this.biquad.connect(u.input ? u.input : u);
    } else {
      this.output.connect(u.input ? u.input : u);
    }
  };
  EQFilter.prototype.disconnect = function () {
    this.biquad.disconnect();
  };
  EQFilter.prototype.dispose = function () {
    // remove reference form soundArray
    var index = p5sound.soundArray.indexOf(this);
    p5sound.soundArray.splice(index, 1);
    this.disconnect();
    delete this.biquad;
  };
  return EQFilter;
}(filter, master);
var eq;
'use strict';
eq = function () {
  var Effect = effect;
  var EQFilter = src_eqFilter;
  /**
   * p5.EQ is an audio effect that performs the function of a multiband
   * audio equalizer. Equalization is used to adjust the balance of
   * frequency compoenents of an audio signal. This process is commonly used
   * in sound production and recording to change the waveform before it reaches
   * a sound output device. EQ can also be used as an audio effect to create
   * interesting distortions by filtering out parts of the spectrum. p5.EQ is
   * built using a chain of Web Audio Biquad Filter Nodes and can be
   * instantiated with 3 or 8 bands. Bands can be added or removed from
   * the EQ by directly modifying p5.EQ.bands (the array that stores filters).
   *
   * This class extends <a href = "/reference/#/p5.Effect">p5.Effect</a>.
   * Methods <a href = "/reference/#/p5.Effect/amp">amp()</a>, <a href = "/reference/#/p5.Effect/chain">chain()</a>,
   * <a href = "/reference/#/p5.Effect/drywet">drywet()</a>, <a href = "/reference/#/p5.Effect/connect">connect()</a>, and
   * <a href = "/reference/#/p5.Effect/disconnect">disconnect()</a> are available.
   *
   * @class p5.EQ
   * @constructor
   * @extends p5.Effect
   * @param {Number} [_eqsize] Constructor will accept 3 or 8, defaults to 3
   * @return {Object} p5.EQ object
   *
   * @example
   * <div><code>
   * var eq;
   * var band_names;
   * var band_index;
   *
   * var soundFile, play;
   *
   * function preload() {
   *   soundFormats('mp3', 'ogg');
   *   soundFile = loadSound('assets/beat');
   * }
   *
   * function setup() {
   *   eq = new p5.EQ(3);
   *   soundFile.disconnect();
   *   eq.process(soundFile);
   *
   *   band_names = ['lows','mids','highs'];
   *   band_index = 0;
   *   play = false;
   *   textAlign(CENTER);
   * }
   *
   * function draw() {
   *   background(30);
   *   noStroke();
   *   fill(255);
   *   text('click to kill',50,25);
   *
   *   fill(255, 40, 255);
   *   textSize(26);
   *   text(band_names[band_index],50,55);
   *
   *   fill(255);
   *   textSize(9);
   *   text('space = play/pause',50,80);
   * }
   *
   * //If mouse is over canvas, cycle to the next band and kill the frequency
   * function mouseClicked() {
   *   for (var i = 0; i < eq.bands.length; i++) {
   *     eq.bands[i].gain(0);
   *   }
   *   eq.bands[band_index].gain(-40);
   *   if (mouseX > 0 && mouseX < width && mouseY < height && mouseY > 0) {
   *     band_index === 2 ? band_index = 0 : band_index++;
   *   }
   * }
   *
   * //use space bar to trigger play / pause
   * function keyPressed() {
   *   if (key===' ') {
   *     play = !play
   *     play ? soundFile.loop() : soundFile.pause();
   *   }
   * }
   * </code></div>
   */
  p5.EQ = function (_eqsize) {
    Effect.call(this);
    //p5.EQ can be of size (3) or (8), defaults to 3
    _eqsize = _eqsize === 3 || _eqsize === 8 ? _eqsize : 3;
    var factor;
    _eqsize === 3 ? factor = Math.pow(2, 3) : factor = 2;
    /**
      *  The p5.EQ is built with abstracted p5.Filter objects.
      *  To modify any bands, use methods of the <a
      *  href="/reference/#/p5.Filter" title="p5.Filter reference">
      *  p5.Filter</a> API, especially `gain` and `freq`.
      *  Bands are stored in an array, with indices 0 - 3, or 0 - 7
      *  @property {Array}  bands
      *
    */
    this.bands = [];
    var freq, res;
    for (var i = 0; i < _eqsize; i++) {
      if (i === _eqsize - 1) {
        freq = 21000;
        res = 0.01;
      } else if (i === 0) {
        freq = 100;
        res = 0.1;
      } else if (i === 1) {
        freq = _eqsize === 3 ? 360 * factor : 360;
        res = 1;
      } else {
        freq = this.bands[i - 1].freq() * factor;
        res = 1;
      }
      this.bands[i] = this._newBand(freq, res);
      if (i > 0) {
        this.bands[i - 1].connect(this.bands[i].biquad);
      } else {
        this.input.connect(this.bands[i].biquad);
      }
    }
    this.bands[_eqsize - 1].connect(this.output);
  };
  p5.EQ.prototype = Object.create(Effect.prototype);
  /**
   * Process an input by connecting it to the EQ
   * @method  process
   * @param  {Object} src Audio source
   */
  p5.EQ.prototype.process = function (src) {
    src.connect(this.input);
  };
  //  /**
  //   * Set the frequency and gain of each band in the EQ. This method should be
  //   * called with 3 or 8 frequency and gain pairs, depending on the size of the EQ.
  //   * ex. eq.set(freq0, gain0, freq1, gain1, freq2, gain2);
  //   *
  //   * @method  set
  //   * @param {Number} [freq0] Frequency value for band with index 0
  //   * @param {Number} [gain0] Gain value for band with index 0
  //   * @param {Number} [freq1] Frequency value for band with index 1
  //   * @param {Number} [gain1] Gain value for band with index 1
  //   * @param {Number} [freq2] Frequency value for band with index 2
  //   * @param {Number} [gain2] Gain value for band with index 2
  //   * @param {Number} [freq3] Frequency value for band with index 3
  //   * @param {Number} [gain3] Gain value for band with index 3
  //   * @param {Number} [freq4] Frequency value for band with index 4
  //   * @param {Number} [gain4] Gain value for band with index 4
  //   * @param {Number} [freq5] Frequency value for band with index 5
  //   * @param {Number} [gain5] Gain value for band with index 5
  //   * @param {Number} [freq6] Frequency value for band with index 6
  //   * @param {Number} [gain6] Gain value for band with index 6
  //   * @param {Number} [freq7] Frequency value for band with index 7
  //   * @param {Number} [gain7] Gain value for band with index 7
  //   */
  p5.EQ.prototype.set = function () {
    if (arguments.length === this.bands.length * 2) {
      for (var i = 0; i < arguments.length; i += 2) {
        this.bands[i / 2].freq(arguments[i]);
        this.bands[i / 2].gain(arguments[i + 1]);
      }
    } else {
      console.error('Argument mismatch. .set() should be called with ' + this.bands.length * 2 + ' arguments. (one frequency and gain value pair for each band of the eq)');
    }
  };
  /**
   * Add a new band. Creates a p5.Filter and strips away everything but
   * the raw biquad filter. This method returns an abstracted p5.Filter,
   * which can be added to p5.EQ.bands, in order to create new EQ bands.
   * @private
   * @method  _newBand
   * @param  {Number} freq
   * @param  {Number} res
   * @return {Object}      Abstracted Filter
   */
  p5.EQ.prototype._newBand = function (freq, res) {
    return new EQFilter(freq, res);
  };
  p5.EQ.prototype.dispose = function () {
    Effect.prototype.dispose.apply(this);
    while (this.bands.length > 0) {
      delete this.bands.pop().dispose();
    }
    delete this.bands;
  };
  return p5.EQ;
}(effect, src_eqFilter);
var panner3d;
'use strict';
panner3d = function () {
  var p5sound = master;
  var Effect = effect;
  /**
   * Panner3D is based on the <a title="Web Audio Panner docs"  href=
   * "https://developer.mozilla.org/en-US/docs/Web/API/PannerNode">
   * Web Audio Spatial Panner Node</a>.
   * This panner is a spatial processing node that allows audio to be positioned
   * and oriented in 3D space.
   *
   * The position is relative to an <a title="Web Audio Listener docs" href=
   * "https://developer.mozilla.org/en-US/docs/Web/API/AudioListener">
   * Audio Context Listener</a>, which can be accessed
   * by <code>p5.soundOut.audiocontext.listener</code>
   *
   *
   * @class p5.Panner3D
   * @constructor
   */
  p5.Panner3D = function () {
    Effect.call(this);
    /**
     *  <a title="Web Audio Panner docs"  href=
     *  "https://developer.mozilla.org/en-US/docs/Web/API/PannerNode">
     *  Web Audio Spatial Panner Node</a>
     *
     *  Properties include
     *    -  <a title="w3 spec for Panning Model"
     *    href="https://www.w3.org/TR/webaudio/#idl-def-PanningModelType"
     *    >panningModel</a>: "equal power" or "HRTF"
     *    -  <a title="w3 spec for Distance Model"
     *    href="https://www.w3.org/TR/webaudio/#idl-def-DistanceModelType"
     *    >distanceModel</a>: "linear", "inverse", or "exponential"
     *
     *  @property {AudioNode} panner
     *
     */
    this.panner = this.ac.createPanner();
    this.panner.panningModel = 'HRTF';
    this.panner.distanceModel = 'linear';
    this.panner.connect(this.output);
    this.input.connect(this.panner);
  };
  p5.Panner3D.prototype = Object.create(Effect.prototype);
  /**
   * Connect an audio sorce
   *
   * @method  process
   * @param  {Object} src Input source
   */
  p5.Panner3D.prototype.process = function (src) {
    src.connect(this.input);
  };
  /**
   * Set the X,Y,Z position of the Panner
   * @method set
   * @param  {Number} xVal
   * @param  {Number} yVal
   * @param  {Number} zVal
   * @param  {Number} time
   * @return {Array}      Updated x, y, z values as an array
   */
  p5.Panner3D.prototype.set = function (xVal, yVal, zVal, time) {
    this.positionX(xVal, time);
    this.positionY(yVal, time);
    this.positionZ(zVal, time);
    return [
      this.panner.positionX.value,
      this.panner.positionY.value,
      this.panner.positionZ.value
    ];
  };
  /**
   * Getter and setter methods for position coordinates
   * @method positionX
   * @return {Number}      updated coordinate value
   */
  /**
   * Getter and setter methods for position coordinates
   * @method positionY
   * @return {Number}      updated coordinate value
   */
  /**
   * Getter and setter methods for position coordinates
   * @method positionZ
   * @return {Number}      updated coordinate value
   */
  p5.Panner3D.prototype.positionX = function (xVal, time) {
    var t = time || 0;
    if (typeof xVal === 'number') {
      this.panner.positionX.value = xVal;
      this.panner.positionX.cancelScheduledValues(this.ac.currentTime + 0.01 + t);
      this.panner.positionX.linearRampToValueAtTime(xVal, this.ac.currentTime + 0.02 + t);
    } else if (xVal) {
      xVal.connect(this.panner.positionX);
    }
    return this.panner.positionX.value;
  };
  p5.Panner3D.prototype.positionY = function (yVal, time) {
    var t = time || 0;
    if (typeof yVal === 'number') {
      this.panner.positionY.value = yVal;
      this.panner.positionY.cancelScheduledValues(this.ac.currentTime + 0.01 + t);
      this.panner.positionY.linearRampToValueAtTime(yVal, this.ac.currentTime + 0.02 + t);
    } else if (yVal) {
      yVal.connect(this.panner.positionY);
    }
    return this.panner.positionY.value;
  };
  p5.Panner3D.prototype.positionZ = function (zVal, time) {
    var t = time || 0;
    if (typeof zVal === 'number') {
      this.panner.positionZ.value = zVal;
      this.panner.positionZ.cancelScheduledValues(this.ac.currentTime + 0.01 + t);
      this.panner.positionZ.linearRampToValueAtTime(zVal, this.ac.currentTime + 0.02 + t);
    } else if (zVal) {
      zVal.connect(this.panner.positionZ);
    }
    return this.panner.positionZ.value;
  };
  /**
   * Set the X,Y,Z position of the Panner
   * @method  orient
   * @param  {Number} xVal
   * @param  {Number} yVal
   * @param  {Number} zVal
   * @param  {Number} time
   * @return {Array}      Updated x, y, z values as an array
   */
  p5.Panner3D.prototype.orient = function (xVal, yVal, zVal, time) {
    this.orientX(xVal, time);
    this.orientY(yVal, time);
    this.orientZ(zVal, time);
    return [
      this.panner.orientationX.value,
      this.panner.orientationY.value,
      this.panner.orientationZ.value
    ];
  };
  /**
   * Getter and setter methods for orient coordinates
   * @method orientX
   * @return {Number}      updated coordinate value
   */
  /**
   * Getter and setter methods for orient coordinates
   * @method orientY
   * @return {Number}      updated coordinate value
   */
  /**
   * Getter and setter methods for orient coordinates
   * @method orientZ
   * @return {Number}      updated coordinate value
   */
  p5.Panner3D.prototype.orientX = function (xVal, time) {
    var t = time || 0;
    if (typeof xVal === 'number') {
      this.panner.orientationX.value = xVal;
      this.panner.orientationX.cancelScheduledValues(this.ac.currentTime + 0.01 + t);
      this.panner.orientationX.linearRampToValueAtTime(xVal, this.ac.currentTime + 0.02 + t);
    } else if (xVal) {
      xVal.connect(this.panner.orientationX);
    }
    return this.panner.orientationX.value;
  };
  p5.Panner3D.prototype.orientY = function (yVal, time) {
    var t = time || 0;
    if (typeof yVal === 'number') {
      this.panner.orientationY.value = yVal;
      this.panner.orientationY.cancelScheduledValues(this.ac.currentTime + 0.01 + t);
      this.panner.orientationY.linearRampToValueAtTime(yVal, this.ac.currentTime + 0.02 + t);
    } else if (yVal) {
      yVal.connect(this.panner.orientationY);
    }
    return this.panner.orientationY.value;
  };
  p5.Panner3D.prototype.orientZ = function (zVal, time) {
    var t = time || 0;
    if (typeof zVal === 'number') {
      this.panner.orientationZ.value = zVal;
      this.panner.orientationZ.cancelScheduledValues(this.ac.currentTime + 0.01 + t);
      this.panner.orientationZ.linearRampToValueAtTime(zVal, this.ac.currentTime + 0.02 + t);
    } else if (zVal) {
      zVal.connect(this.panner.orientationZ);
    }
    return this.panner.orientationZ.value;
  };
  /**
   * Set the rolloff factor and max distance
   * @method  setFalloff
   * @param {Number} [maxDistance]
   * @param {Number} [rolloffFactor]
   */
  p5.Panner3D.prototype.setFalloff = function (maxDistance, rolloffFactor) {
    this.maxDist(maxDistance);
    this.rolloff(rolloffFactor);
  };
  /**
   * Maxium distance between the source and the listener
   * @method  maxDist
   * @param  {Number} maxDistance
   * @return {Number} updated value
   */
  p5.Panner3D.prototype.maxDist = function (maxDistance) {
    if (typeof maxDistance === 'number') {
      this.panner.maxDistance = maxDistance;
    }
    return this.panner.maxDistance;
  };
  /**
   * How quickly the volume is reduced as the source moves away from the listener
   * @method  rollof
   * @param  {Number} rolloffFactor
   * @return {Number} updated value
   */
  p5.Panner3D.prototype.rolloff = function (rolloffFactor) {
    if (typeof rolloffFactor === 'number') {
      this.panner.rolloffFactor = rolloffFactor;
    }
    return this.panner.rolloffFactor;
  };
  p5.Panner3D.dispose = function () {
    Effect.prototype.dispose.apply(this);
    this.panner.disconnect();
    delete this.panner;
  };
  return p5.Panner3D;
}(master, effect);
var listener3d;
'use strict';
listener3d = function () {
  var p5sound = master;
  var Effect = effect;
  //  /**
  //   * listener is a class that can construct both a Spatial Panner
  //   * and a Spatial Listener. The panner is based on the
  //   * Web Audio Spatial Panner Node
  //   * https://www.w3.org/TR/webaudio/#the-listenernode-interface
  //   * This panner is a spatial processing node that allows audio to be positioned
  //   * and oriented in 3D space.
  //   *
  //   * The Listener modifies the properties of the Audio Context Listener.
  //   * Both objects types use the same methods. The default is a spatial panner.
  //   *
  //   * <code>p5.Panner3D</code> - Constructs a Spatial Panner<br/>
  //   * <code>p5.Listener3D</code> - Constructs a Spatial Listener<br/>
  //   *
  //   * @class listener
  //   * @constructor
  //   * @return {Object} p5.Listener3D Object
  //   *
  //   * @param {Web Audio Node} listener Web Audio Spatial Panning Node
  //   * @param {AudioParam} listener.panningModel "equal power" or "HRTF"
  //   * @param {AudioParam} listener.distanceModel "linear", "inverse", or "exponential"
  //   * @param {String} [type] [Specify construction of a spatial panner or listener]
  //   */
  p5.Listener3D = function (type) {
    this.ac = p5sound.audiocontext;
    this.listener = this.ac.listener;
  };
  //  /**
  //   * Connect an audio sorce
  //   * @param  {Object} src Input source
  //   */
  p5.Listener3D.prototype.process = function (src) {
    src.connect(this.input);
  };
  //  /**
  //   * Set the X,Y,Z position of the Panner
  //   * @param  {[Number]} xVal
  //   * @param  {[Number]} yVal
  //   * @param  {[Number]} zVal
  //   * @param  {[Number]} time
  //   * @return {[Array]}      [Updated x, y, z values as an array]
  //   */
  p5.Listener3D.prototype.position = function (xVal, yVal, zVal, time) {
    this.positionX(xVal, time);
    this.positionY(yVal, time);
    this.positionZ(zVal, time);
    return [
      this.listener.positionX.value,
      this.listener.positionY.value,
      this.listener.positionZ.value
    ];
  };
  //  /**
  //   * Getter and setter methods for position coordinates
  //   * @return {Number}      [updated coordinate value]
  //   */
  p5.Listener3D.prototype.positionX = function (xVal, time) {
    var t = time || 0;
    if (typeof xVal === 'number') {
      this.listener.positionX.value = xVal;
      this.listener.positionX.cancelScheduledValues(this.ac.currentTime + 0.01 + t);
      this.listener.positionX.linearRampToValueAtTime(xVal, this.ac.currentTime + 0.02 + t);
    } else if (xVal) {
      xVal.connect(this.listener.positionX);
    }
    return this.listener.positionX.value;
  };
  p5.Listener3D.prototype.positionY = function (yVal, time) {
    var t = time || 0;
    if (typeof yVal === 'number') {
      this.listener.positionY.value = yVal;
      this.listener.positionY.cancelScheduledValues(this.ac.currentTime + 0.01 + t);
      this.listener.positionY.linearRampToValueAtTime(yVal, this.ac.currentTime + 0.02 + t);
    } else if (yVal) {
      yVal.connect(this.listener.positionY);
    }
    return this.listener.positionY.value;
  };
  p5.Listener3D.prototype.positionZ = function (zVal, time) {
    var t = time || 0;
    if (typeof zVal === 'number') {
      this.listener.positionZ.value = zVal;
      this.listener.positionZ.cancelScheduledValues(this.ac.currentTime + 0.01 + t);
      this.listener.positionZ.linearRampToValueAtTime(zVal, this.ac.currentTime + 0.02 + t);
    } else if (zVal) {
      zVal.connect(this.listener.positionZ);
    }
    return this.listener.positionZ.value;
  };
  // cannot define method when class definition is commented
  //  /**
  //   * Overrides the listener orient() method because Listener has slightly
  //   * different params. In human terms, Forward vectors are the direction the
  //   * nose is pointing. Up vectors are the direction of the top of the head.
  //   *
  //   * @method orient
  //   * @param  {Number} xValF  Forward vector X direction
  //   * @param  {Number} yValF  Forward vector Y direction
  //   * @param  {Number} zValF  Forward vector Z direction
  //   * @param  {Number} xValU  Up vector X direction
  //   * @param  {Number} yValU  Up vector Y direction
  //   * @param  {Number} zValU  Up vector Z direction
  //   * @param  {Number} time
  //   * @return {Array}       All orienation params
  //   */
  p5.Listener3D.prototype.orient = function (xValF, yValF, zValF, xValU, yValU, zValU, time) {
    if (arguments.length === 3 || arguments.length === 4) {
      time = arguments[3];
      this.orientForward(xValF, yValF, zValF, time);
    } else if (arguments.length === 6 || arguments === 7) {
      this.orientForward(xValF, yValF, zValF);
      this.orientUp(xValU, yValU, zValU, time);
    }
    return [
      this.listener.forwardX.value,
      this.listener.forwardY.value,
      this.listener.forwardZ.value,
      this.listener.upX.value,
      this.listener.upY.value,
      this.listener.upZ.value
    ];
  };
  p5.Listener3D.prototype.orientForward = function (xValF, yValF, zValF, time) {
    this.forwardX(xValF, time);
    this.forwardY(yValF, time);
    this.forwardZ(zValF, time);
    return [
      this.listener.forwardX,
      this.listener.forwardY,
      this.listener.forwardZ
    ];
  };
  p5.Listener3D.prototype.orientUp = function (xValU, yValU, zValU, time) {
    this.upX(xValU, time);
    this.upY(yValU, time);
    this.upZ(zValU, time);
    return [
      this.listener.upX,
      this.listener.upY,
      this.listener.upZ
    ];
  };
  //  /**
  //   * Getter and setter methods for orient coordinates
  //   * @return {Number}      [updated coordinate value]
  //   */
  p5.Listener3D.prototype.forwardX = function (xVal, time) {
    var t = time || 0;
    if (typeof xVal === 'number') {
      this.listener.forwardX.value = xVal;
      this.listener.forwardX.cancelScheduledValues(this.ac.currentTime + 0.01 + t);
      this.listener.forwardX.linearRampToValueAtTime(xVal, this.ac.currentTime + 0.02 + t);
    } else if (xVal) {
      xVal.connect(this.listener.forwardX);
    }
    return this.listener.forwardX.value;
  };
  p5.Listener3D.prototype.forwardY = function (yVal, time) {
    var t = time || 0;
    if (typeof yVal === 'number') {
      this.listener.forwardY.value = yVal;
      this.listener.forwardY.cancelScheduledValues(this.ac.currentTime + 0.01 + t);
      this.listener.forwardY.linearRampToValueAtTime(yVal, this.ac.currentTime + 0.02 + t);
    } else if (yVal) {
      yVal.connect(this.listener.forwardY);
    }
    return this.listener.forwardY.value;
  };
  p5.Listener3D.prototype.forwardZ = function (zVal, time) {
    var t = time || 0;
    if (typeof zVal === 'number') {
      this.listener.forwardZ.value = zVal;
      this.listener.forwardZ.cancelScheduledValues(this.ac.currentTime + 0.01 + t);
      this.listener.forwardZ.linearRampToValueAtTime(zVal, this.ac.currentTime + 0.02 + t);
    } else if (zVal) {
      zVal.connect(this.listener.forwardZ);
    }
    return this.listener.forwardZ.value;
  };
  p5.Listener3D.prototype.upX = function (xVal, time) {
    var t = time || 0;
    if (typeof xVal === 'number') {
      this.listener.upX.value = xVal;
      this.listener.upX.cancelScheduledValues(this.ac.currentTime + 0.01 + t);
      this.listener.upX.linearRampToValueAtTime(xVal, this.ac.currentTime + 0.02 + t);
    } else if (xVal) {
      xVal.connect(this.listener.upX);
    }
    return this.listener.upX.value;
  };
  p5.Listener3D.prototype.upY = function (yVal, time) {
    var t = time || 0;
    if (typeof yVal === 'number') {
      this.listener.upY.value = yVal;
      this.listener.upY.cancelScheduledValues(this.ac.currentTime + 0.01 + t);
      this.listener.upY.linearRampToValueAtTime(yVal, this.ac.currentTime + 0.02 + t);
    } else if (yVal) {
      yVal.connect(this.listener.upY);
    }
    return this.listener.upY.value;
  };
  p5.Listener3D.prototype.upZ = function (zVal, time) {
    var t = time || 0;
    if (typeof zVal === 'number') {
      this.listener.upZ.value = zVal;
      this.listener.upZ.cancelScheduledValues(this.ac.currentTime + 0.01 + t);
      this.listener.upZ.linearRampToValueAtTime(zVal, this.ac.currentTime + 0.02 + t);
    } else if (zVal) {
      zVal.connect(this.listener.upZ);
    }
    return this.listener.upZ.value;
  };
  return p5.Listener3D;
}(master, effect);
var delay;
'use strict';
delay = function () {
  var Filter = filter;
  var Effect = effect;
  /**
   *  Delay is an echo effect. It processes an existing sound source,
   *  and outputs a delayed version of that sound. The p5.Delay can
   *  produce different effects depending on the delayTime, feedback,
   *  filter, and type. In the example below, a feedback of 0.5 (the
   *  defaul value) will produce a looping delay that decreases in
   *  volume by 50% each repeat. A filter will cut out the high
   *  frequencies so that the delay does not sound as piercing as the
   *  original source.
   *
   *
   *  This class extends <a href = "/reference/#/p5.Effect">p5.Effect</a>.
   *  Methods <a href = "/reference/#/p5.Effect/amp">amp()</a>, <a href = "/reference/#/p5.Effect/chain">chain()</a>,
   *  <a href = "/reference/#/p5.Effect/drywet">drywet()</a>, <a href = "/reference/#/p5.Effect/connect">connect()</a>, and
   *  <a href = "/reference/#/p5.Effect/disconnect">disconnect()</a> are available.
   *  @class p5.Delay
   *  @extends p5.Effect
   *  @constructor
   *  @example
   *  <div><code>
   *  var noise, env, delay;
   *
   *  function setup() {
   *    background(0);
   *    noStroke();
   *    fill(255);
   *    textAlign(CENTER);
   *    text('click to play', width/2, height/2);
   *
   *    noise = new p5.Noise('brown');
   *    noise.amp(0);
   *    noise.start();
   *
   *    delay = new p5.Delay();
   *
   *    // delay.process() accepts 4 parameters:
   *    // source, delayTime, feedback, filter frequency
   *    // play with these numbers!!
   *    delay.process(noise, .12, .7, 2300);
   *
   *    // play the noise with an envelope,
   *    // a series of fades ( time / value pairs )
   *    env = new p5.Env(.01, 0.2, .2, .1);
   *  }
   *
   *  // mouseClick triggers envelope
   *  function mouseClicked() {
   *    // is mouse over canvas?
   *    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
   *      env.play(noise);
   *    }
   *  }
   *  </code></div>
   */
  p5.Delay = function () {
    Effect.call(this);
    this._split = this.ac.createChannelSplitter(2);
    this._merge = this.ac.createChannelMerger(2);
    this._leftGain = this.ac.createGain();
    this._rightGain = this.ac.createGain();
    /**
     *  The p5.Delay is built with two
     *  <a href="http://www.w3.org/TR/webaudio/#DelayNode">
     *  Web Audio Delay Nodes</a>, one for each stereo channel.
     *
     *  @property {DelayNode} leftDelay
     */
    this.leftDelay = this.ac.createDelay();
    /**
     *  The p5.Delay is built with two
     *  <a href="http://www.w3.org/TR/webaudio/#DelayNode">
     *  Web Audio Delay Nodes</a>, one for each stereo channel.
     *
     *  @property {DelayNode} rightDelay
     */
    this.rightDelay = this.ac.createDelay();
    this._leftFilter = new Filter();
    this._rightFilter = new Filter();
    this._leftFilter.disconnect();
    this._rightFilter.disconnect();
    this._leftFilter.biquad.frequency.setValueAtTime(1200, this.ac.currentTime);
    this._rightFilter.biquad.frequency.setValueAtTime(1200, this.ac.currentTime);
    this._leftFilter.biquad.Q.setValueAtTime(0.3, this.ac.currentTime);
    this._rightFilter.biquad.Q.setValueAtTime(0.3, this.ac.currentTime);
    // graph routing
    this.input.connect(this._split);
    this.leftDelay.connect(this._leftGain);
    this.rightDelay.connect(this._rightGain);
    this._leftGain.connect(this._leftFilter.input);
    this._rightGain.connect(this._rightFilter.input);
    this._merge.connect(this.wet);
    this._leftFilter.biquad.gain.setValueAtTime(1, this.ac.currentTime);
    this._rightFilter.biquad.gain.setValueAtTime(1, this.ac.currentTime);
    // default routing
    this.setType(0);
    this._maxDelay = this.leftDelay.delayTime.maxValue;
    // set initial feedback to 0.5
    this.feedback(0.5);
  };
  p5.Delay.prototype = Object.create(Effect.prototype);
  /**
   *  Add delay to an audio signal according to a set
   *  of delay parameters.
   *
   *  @method  process
   *  @param  {Object} Signal  An object that outputs audio
   *  @param  {Number} [delayTime] Time (in seconds) of the delay/echo.
   *                               Some browsers limit delayTime to
   *                               1 second.
   *  @param  {Number} [feedback]  sends the delay back through itself
   *                               in a loop that decreases in volume
   *                               each time.
   *  @param  {Number} [lowPass]   Cutoff frequency. Only frequencies
   *                               below the lowPass will be part of the
   *                               delay.
   */
  p5.Delay.prototype.process = function (src, _delayTime, _feedback, _filter) {
    var feedback = _feedback || 0;
    var delayTime = _delayTime || 0;
    if (feedback >= 1) {
      throw new Error('Feedback value will force a positive feedback loop.');
    }
    if (delayTime >= this._maxDelay) {
      throw new Error('Delay Time exceeds maximum delay time of ' + this._maxDelay + ' second.');
    }
    src.connect(this.input);
    this.leftDelay.delayTime.setValueAtTime(delayTime, this.ac.currentTime);
    this.rightDelay.delayTime.setValueAtTime(delayTime, this.ac.currentTime);
    this._leftGain.gain.value = feedback;
    this._rightGain.gain.value = feedback;
    if (_filter) {
      this._leftFilter.freq(_filter);
      this._rightFilter.freq(_filter);
    }
  };
  /**
   *  Set the delay (echo) time, in seconds. Usually this value will be
   *  a floating point number between 0.0 and 1.0.
   *
   *  @method  delayTime
   *  @param {Number} delayTime Time (in seconds) of the delay
   */
  p5.Delay.prototype.delayTime = function (t) {
    // if t is an audio node...
    if (typeof t !== 'number') {
      t.connect(this.leftDelay.delayTime);
      t.connect(this.rightDelay.delayTime);
    } else {
      this.leftDelay.delayTime.cancelScheduledValues(this.ac.currentTime);
      this.rightDelay.delayTime.cancelScheduledValues(this.ac.currentTime);
      this.leftDelay.delayTime.linearRampToValueAtTime(t, this.ac.currentTime);
      this.rightDelay.delayTime.linearRampToValueAtTime(t, this.ac.currentTime);
    }
  };
  /**
   *  Feedback occurs when Delay sends its signal back through its input
   *  in a loop. The feedback amount determines how much signal to send each
   *  time through the loop. A feedback greater than 1.0 is not desirable because
   *  it will increase the overall output each time through the loop,
   *  creating an infinite feedback loop. The default value is 0.5
   *
   *  @method  feedback
   *  @param {Number|Object} feedback 0.0 to 1.0, or an object such as an
   *                                  Oscillator that can be used to
   *                                  modulate this param
   *  @returns {Number} Feedback value
   *
   */
  p5.Delay.prototype.feedback = function (f) {
    // if f is an audio node...
    if (f && typeof f !== 'number') {
      f.connect(this._leftGain.gain);
      f.connect(this._rightGain.gain);
    } else if (f >= 1) {
      throw new Error('Feedback value will force a positive feedback loop.');
    } else if (typeof f === 'number') {
      this._leftGain.gain.value = f;
      this._rightGain.gain.value = f;
    }
    // return value of feedback
    return this._leftGain.gain.value;
  };
  /**
   *  Set a lowpass filter frequency for the delay. A lowpass filter
   *  will cut off any frequencies higher than the filter frequency.
   *
   *  @method  filter
   *  @param {Number|Object} cutoffFreq  A lowpass filter will cut off any
   *                              frequencies higher than the filter frequency.
   *  @param {Number|Object} res  Resonance of the filter frequency
   *                              cutoff, or an object (i.e. a p5.Oscillator)
   *                              that can be used to modulate this parameter.
   *                              High numbers (i.e. 15) will produce a resonance,
   *                              low numbers (i.e. .2) will produce a slope.
   */
  p5.Delay.prototype.filter = function (freq, q) {
    this._leftFilter.set(freq, q);
    this._rightFilter.set(freq, q);
  };
  /**
   *  Choose a preset type of delay. 'pingPong' bounces the signal
   *  from the left to the right channel to produce a stereo effect.
   *  Any other parameter will revert to the default delay setting.
   *
   *  @method  setType
   *  @param {String|Number} type 'pingPong' (1) or 'default' (0)
   */
  p5.Delay.prototype.setType = function (t) {
    if (t === 1) {
      t = 'pingPong';
    }
    this._split.disconnect();
    this._leftFilter.disconnect();
    this._rightFilter.disconnect();
    this._split.connect(this.leftDelay, 0);
    this._split.connect(this.rightDelay, 1);
    switch (t) {
    case 'pingPong':
      this._rightFilter.setType(this._leftFilter.biquad.type);
      this._leftFilter.output.connect(this._merge, 0, 0);
      this._rightFilter.output.connect(this._merge, 0, 1);
      this._leftFilter.output.connect(this.rightDelay);
      this._rightFilter.output.connect(this.leftDelay);
      break;
    default:
      this._leftFilter.output.connect(this._merge, 0, 0);
      this._rightFilter.output.connect(this._merge, 0, 1);
      this._leftFilter.output.connect(this.leftDelay);
      this._rightFilter.output.connect(this.rightDelay);
    }
  };
  // DocBlocks for methods inherited from p5.Effect
  /**
   *  Set the output level of the delay effect.
   *
   *  @method  amp
   *  @param  {Number} volume amplitude between 0 and 1.0
   *  @param {Number} [rampTime] create a fade that lasts rampTime
   *  @param {Number} [timeFromNow] schedule this event to happen
   *                                seconds from now
   */
  /**
   *  Send output to a p5.sound or web audio object
   *
   *  @method  connect
   *  @param  {Object} unit
   */
  /**
   *  Disconnect all output.
   *
   *  @method disconnect
   */
  p5.Delay.prototype.dispose = function () {
    Effect.prototype.dispose.apply(this);
    this._split.disconnect();
    this._leftFilter.dispose();
    this._rightFilter.dispose();
    this._merge.disconnect();
    this._leftGain.disconnect();
    this._rightGain.disconnect();
    this.leftDelay.disconnect();
    this.rightDelay.disconnect();
    this._split = undefined;
    this._leftFilter = undefined;
    this._rightFilter = undefined;
    this._merge = undefined;
    this._leftGain = undefined;
    this._rightGain = undefined;
    this.leftDelay = undefined;
    this.rightDelay = undefined;
  };
}(filter, effect);
var reverb;
'use strict';
reverb = function () {
  var CustomError = errorHandler;
  var Effect = effect;
  /**
   *  Reverb adds depth to a sound through a large number of decaying
   *  echoes. It creates the perception that sound is occurring in a
   *  physical space. The p5.Reverb has paramters for Time (how long does the
   *  reverb last) and decayRate (how much the sound decays with each echo)
   *  that can be set with the .set() or .process() methods. The p5.Convolver
   *  extends p5.Reverb allowing you to recreate the sound of actual physical
   *  spaces through convolution.
   *
   *  This class extends <a href = "/reference/#/p5.Effect">p5.Effect</a>.
   *  Methods <a href = "/reference/#/p5.Effect/amp">amp()</a>, <a href = "/reference/#/p5.Effect/chain">chain()</a>,
   *  <a href = "/reference/#/p5.Effect/drywet">drywet()</a>, <a href = "/reference/#/p5.Effect/connect">connect()</a>, and
   *  <a href = "/reference/#/p5.Effect/disconnect">disconnect()</a> are available.
   *
   *  @class p5.Reverb
   *  @extends p5.Effect
   *  @constructor
   *  @example
   *  <div><code>
   *  var soundFile, reverb;
   *  function preload() {
   *    soundFile = loadSound('assets/Damscray_DancingTiger.mp3');
   *  }
   *
   *  function setup() {
   *    reverb = new p5.Reverb();
   *    soundFile.disconnect(); // so we'll only hear reverb...
   *
   *    // connect soundFile to reverb, process w/
   *    // 3 second reverbTime, decayRate of 2%
   *    reverb.process(soundFile, 3, 2);
   *    soundFile.play();
   *  }
   *  </code></div>
   */
  p5.Reverb = function () {
    Effect.call(this);
    this.convolverNode = this.ac.createConvolver();
    // otherwise, Safari distorts
    this.input.gain.value = 0.5;
    this.input.connect(this.convolverNode);
    this.convolverNode.connect(this.wet);
    // default params
    this._seconds = 3;
    this._decay = 2;
    this._reverse = false;
    this._buildImpulse();
  };
  p5.Reverb.prototype = Object.create(Effect.prototype);
  /**
   *  Connect a source to the reverb, and assign reverb parameters.
   *
   *  @method  process
   *  @param  {Object} src     p5.sound / Web Audio object with a sound
   *                           output.
   *  @param  {Number} [seconds] Duration of the reverb, in seconds.
   *                           Min: 0, Max: 10. Defaults to 3.
   *  @param  {Number} [decayRate] Percentage of decay with each echo.
   *                            Min: 0, Max: 100. Defaults to 2.
   *  @param  {Boolean} [reverse] Play the reverb backwards or forwards.
   */
  p5.Reverb.prototype.process = function (src, seconds, decayRate, reverse) {
    src.connect(this.input);
    var rebuild = false;
    if (seconds) {
      this._seconds = seconds;
      rebuild = true;
    }
    if (decayRate) {
      this._decay = decayRate;
    }
    if (reverse) {
      this._reverse = reverse;
    }
    if (rebuild) {
      this._buildImpulse();
    }
  };
  /**
   *  Set the reverb settings. Similar to .process(), but without
   *  assigning a new input.
   *
   *  @method  set
   *  @param  {Number} [seconds] Duration of the reverb, in seconds.
   *                           Min: 0, Max: 10. Defaults to 3.
   *  @param  {Number} [decayRate] Percentage of decay with each echo.
   *                            Min: 0, Max: 100. Defaults to 2.
   *  @param  {Boolean} [reverse] Play the reverb backwards or forwards.
   */
  p5.Reverb.prototype.set = function (seconds, decayRate, reverse) {
    var rebuild = false;
    if (seconds) {
      this._seconds = seconds;
      rebuild = true;
    }
    if (decayRate) {
      this._decay = decayRate;
    }
    if (reverse) {
      this._reverse = reverse;
    }
    if (rebuild) {
      this._buildImpulse();
    }
  };
  // DocBlocks for methods inherited from p5.Effect
  /**
   *  Set the output level of the reverb effect.
   *
   *  @method  amp
   *  @param  {Number} volume amplitude between 0 and 1.0
   *  @param  {Number} [rampTime] create a fade that lasts rampTime
   *  @param  {Number} [timeFromNow] schedule this event to happen
   *                                seconds from now
   */
  /**
   *  Send output to a p5.sound or web audio object
   *
   *  @method  connect
   *  @param  {Object} unit
   */
  /**
   *  Disconnect all output.
   *
   *  @method disconnect
   */
  /**
   *  Inspired by Simple Reverb by Jordan Santell
   *  https://github.com/web-audio-components/simple-reverb/blob/master/index.js
   *
   *  Utility function for building an impulse response
   *  based on the module parameters.
   *
   *  @private
   */
  p5.Reverb.prototype._buildImpulse = function () {
    var rate = this.ac.sampleRate;
    var length = rate * this._seconds;
    var decay = this._decay;
    var impulse = this.ac.createBuffer(2, length, rate);
    var impulseL = impulse.getChannelData(0);
    var impulseR = impulse.getChannelData(1);
    var n, i;
    for (i = 0; i < length; i++) {
      n = this._reverse ? length - i : i;
      impulseL[i] = (Math.random() * 2 - 1) * Math.pow(1 - n / length, decay);
      impulseR[i] = (Math.random() * 2 - 1) * Math.pow(1 - n / length, decay);
    }
    this.convolverNode.buffer = impulse;
  };
  p5.Reverb.prototype.dispose = function () {
    Effect.prototype.dispose.apply(this);
    if (this.convolverNode) {
      this.convolverNode.buffer = null;
      this.convolverNode = null;
    }
  };
  // =======================================================================
  //                          *** p5.Convolver ***
  // =======================================================================
  /**
   *  <p>p5.Convolver extends p5.Reverb. It can emulate the sound of real
   *  physical spaces through a process called <a href="
   *  https://en.wikipedia.org/wiki/Convolution_reverb#Real_space_simulation">
   *  convolution</a>.</p>
   *
   *  <p>Convolution multiplies any audio input by an "impulse response"
   *  to simulate the dispersion of sound over time. The impulse response is
   *  generated from an audio file that you provide. One way to
   *  generate an impulse response is to pop a balloon in a reverberant space
   *  and record the echo. Convolution can also be used to experiment with
   *  sound.</p>
   *
   *  <p>Use the method <code>createConvolution(path)</code> to instantiate a
   *  p5.Convolver with a path to your impulse response audio file.</p>
   *
   *  @class p5.Convolver
   *  @extends p5.Effect
   *  @constructor
   *  @param  {String}   path     path to a sound file
   *  @param  {Function} [callback] function to call when loading succeeds
   *  @param  {Function} [errorCallback] function to call if loading fails.
   *                                     This function will receive an error or
   *                                     XMLHttpRequest object with information
   *                                     about what went wrong.
   *  @example
   *  <div><code>
   *  var cVerb, sound;
   *  function preload() {
   *    // We have both MP3 and OGG versions of all sound assets
   *    soundFormats('ogg', 'mp3');
   *
   *    // Try replacing 'bx-spring' with other soundfiles like
   *    // 'concrete-tunnel' 'small-plate' 'drum' 'beatbox'
   *    cVerb = createConvolver('assets/bx-spring.mp3');
   *
   *    // Try replacing 'Damscray_DancingTiger' with
   *    // 'beat', 'doorbell', lucky_dragons'
   *    sound = loadSound('assets/Damscray_DancingTiger.mp3');
   *  }
   *
   *  function setup() {
   *    // disconnect from master output...
   *    sound.disconnect();
   *
   *    // ...and process with cVerb
   *    // so that we only hear the convolution
   *    cVerb.process(sound);
   *
   *    sound.play();
   *  }
   *  </code></div>
   */
  p5.Convolver = function (path, callback, errorCallback) {
    Effect.call(this);
    /**
     *  Internally, the p5.Convolver uses the a
     *  <a href="http://www.w3.org/TR/webaudio/#ConvolverNode">
     *  Web Audio Convolver Node</a>.
     *
     *  @property {ConvolverNode} convolverNod
     */
    this.convolverNode = this.ac.createConvolver();
    // otherwise, Safari distorts
    this.input.gain.value = 0.5;
    this.input.connect(this.convolverNode);
    this.convolverNode.connect(this.wet);
    if (path) {
      this.impulses = [];
      this._loadBuffer(path, callback, errorCallback);
    } else {
      // parameters
      this._seconds = 3;
      this._decay = 2;
      this._reverse = false;
      this._buildImpulse();
    }
  };
  p5.Convolver.prototype = Object.create(p5.Reverb.prototype);
  p5.prototype.registerPreloadMethod('createConvolver', p5.prototype);
  /**
   *  Create a p5.Convolver. Accepts a path to a soundfile
   *  that will be used to generate an impulse response.
   *
   *  @method  createConvolver
   *  @param  {String}   path     path to a sound file
   *  @param  {Function} [callback] function to call if loading is successful.
   *                                The object will be passed in as the argument
   *                                to the callback function.
   *  @param  {Function} [errorCallback] function to call if loading is not successful.
   *                                A custom error will be passed in as the argument
   *                                to the callback function.
   *  @return {p5.Convolver}
   *  @example
   *  <div><code>
   *  var cVerb, sound;
   *  function preload() {
   *    // We have both MP3 and OGG versions of all sound assets
   *    soundFormats('ogg', 'mp3');
   *
   *    // Try replacing 'bx-spring' with other soundfiles like
   *    // 'concrete-tunnel' 'small-plate' 'drum' 'beatbox'
   *    cVerb = createConvolver('assets/bx-spring.mp3');
   *
   *    // Try replacing 'Damscray_DancingTiger' with
   *    // 'beat', 'doorbell', lucky_dragons'
   *    sound = loadSound('assets/Damscray_DancingTiger.mp3');
   *  }
   *
   *  function setup() {
   *    // disconnect from master output...
   *    sound.disconnect();
   *
   *    // ...and process with cVerb
   *    // so that we only hear the convolution
   *    cVerb.process(sound);
   *
   *    sound.play();
   *  }
   *  </code></div>
   */
  p5.prototype.createConvolver = function (path, callback, errorCallback) {
    // if loading locally without a server
    if (window.location.origin.indexOf('file://') > -1 && window.cordova === 'undefined') {
      alert('This sketch may require a server to load external files. Please see http://bit.ly/1qcInwS');
    }
    var cReverb = new p5.Convolver(path, callback, errorCallback);
    cReverb.impulses = [];
    return cReverb;
  };
  /**
   *  Private method to load a buffer as an Impulse Response,
   *  assign it to the convolverNode, and add to the Array of .impulses.
   *
   *  @param   {String}   path
   *  @param   {Function} callback
   *  @param   {Function} errorCallback
   *  @private
   */
  p5.Convolver.prototype._loadBuffer = function (path, callback, errorCallback) {
    var path = p5.prototype._checkFileFormats(path);
    var self = this;
    var errorTrace = new Error().stack;
    var ac = p5.prototype.getAudioContext();
    var request = new XMLHttpRequest();
    request.open('GET', path, true);
    request.responseType = 'arraybuffer';
    request.onload = function () {
      if (request.status === 200) {
        // on success loading file:
        ac.decodeAudioData(request.response, function (buff) {
          var buffer = {};
          var chunks = path.split('/');
          buffer.name = chunks[chunks.length - 1];
          buffer.audioBuffer = buff;
          self.impulses.push(buffer);
          self.convolverNode.buffer = buffer.audioBuffer;
          if (callback) {
            callback(buffer);
          }
        }, // error decoding buffer. "e" is undefined in Chrome 11/22/2015
        function () {
          var err = new CustomError('decodeAudioData', errorTrace, self.url);
          var msg = 'AudioContext error at decodeAudioData for ' + self.url;
          if (errorCallback) {
            err.msg = msg;
            errorCallback(err);
          } else {
            console.error(msg + '\n The error stack trace includes: \n' + err.stack);
          }
        });
      } else {
        var err = new CustomError('loadConvolver', errorTrace, self.url);
        var msg = 'Unable to load ' + self.url + '. The request status was: ' + request.status + ' (' + request.statusText + ')';
        if (errorCallback) {
          err.message = msg;
          errorCallback(err);
        } else {
          console.error(msg + '\n The error stack trace includes: \n' + err.stack);
        }
      }
    };
    // if there is another error, aside from 404...
    request.onerror = function () {
      var err = new CustomError('loadConvolver', errorTrace, self.url);
      var msg = 'There was no response from the server at ' + self.url + '. Check the url and internet connectivity.';
      if (errorCallback) {
        err.message = msg;
        errorCallback(err);
      } else {
        console.error(msg + '\n The error stack trace includes: \n' + err.stack);
      }
    };
    request.send();
  };
  p5.Convolver.prototype.set = null;
  /**
   *  Connect a source to the reverb, and assign reverb parameters.
   *
   *  @method  process
   *  @param  {Object} src     p5.sound / Web Audio object with a sound
   *                           output.
   *  @example
   *  <div><code>
   *  var cVerb, sound;
   *  function preload() {
   *    soundFormats('ogg', 'mp3');
   *
   *    cVerb = createConvolver('assets/concrete-tunnel.mp3');
   *
   *    sound = loadSound('assets/beat.mp3');
   *  }
   *
   *  function setup() {
   *    // disconnect from master output...
   *    sound.disconnect();
   *
   *    // ...and process with (i.e. connect to) cVerb
   *    // so that we only hear the convolution
   *    cVerb.process(sound);
   *
   *    sound.play();
   *  }
   *  </code></div>
   */
  p5.Convolver.prototype.process = function (src) {
    src.connect(this.input);
  };
  /**
   *  If you load multiple impulse files using the .addImpulse method,
   *  they will be stored as Objects in this Array. Toggle between them
   *  with the <code>toggleImpulse(id)</code> method.
   *
   *  @property {Array} impulses
   */
  p5.Convolver.prototype.impulses = [];
  /**
   *  Load and assign a new Impulse Response to the p5.Convolver.
   *  The impulse is added to the <code>.impulses</code> array. Previous
   *  impulses can be accessed with the <code>.toggleImpulse(id)</code>
   *  method.
   *
   *  @method  addImpulse
   *  @param  {String}   path     path to a sound file
   *  @param  {Function} callback function (optional)
   *  @param  {Function} errorCallback function (optional)
   */
  p5.Convolver.prototype.addImpulse = function (path, callback, errorCallback) {
    // if loading locally without a server
    if (window.location.origin.indexOf('file://') > -1 && window.cordova === 'undefined') {
      alert('This sketch may require a server to load external files. Please see http://bit.ly/1qcInwS');
    }
    this._loadBuffer(path, callback, errorCallback);
  };
  /**
   *  Similar to .addImpulse, except that the <code>.impulses</code>
   *  Array is reset to save memory. A new <code>.impulses</code>
   *  array is created with this impulse as the only item.
   *
   *  @method  resetImpulse
   *  @param  {String}   path     path to a sound file
   *  @param  {Function} callback function (optional)
   *  @param  {Function} errorCallback function (optional)
   */
  p5.Convolver.prototype.resetImpulse = function (path, callback, errorCallback) {
    // if loading locally without a server
    if (window.location.origin.indexOf('file://') > -1 && window.cordova === 'undefined') {
      alert('This sketch may require a server to load external files. Please see http://bit.ly/1qcInwS');
    }
    this.impulses = [];
    this._loadBuffer(path, callback, errorCallback);
  };
  /**
   *  If you have used <code>.addImpulse()</code> to add multiple impulses
   *  to a p5.Convolver, then you can use this method to toggle between
   *  the items in the <code>.impulses</code> Array. Accepts a parameter
   *  to identify which impulse you wish to use, identified either by its
   *  original filename (String) or by its position in the <code>.impulses
   *  </code> Array (Number).<br/>
   *  You can access the objects in the .impulses Array directly. Each
   *  Object has two attributes: an <code>.audioBuffer</code> (type:
   *  Web Audio <a href="
   *  http://webaudio.github.io/web-audio-api/#the-audiobuffer-interface">
   *  AudioBuffer)</a> and a <code>.name</code>, a String that corresponds
   *  with the original filename.
   *
   *  @method toggleImpulse
   *  @param {String|Number} id Identify the impulse by its original filename
   *                            (String), or by its position in the
   *                            <code>.impulses</code> Array (Number).
   */
  p5.Convolver.prototype.toggleImpulse = function (id) {
    if (typeof id === 'number' && id < this.impulses.length) {
      this.convolverNode.buffer = this.impulses[id].audioBuffer;
    }
    if (typeof id === 'string') {
      for (var i = 0; i < this.impulses.length; i++) {
        if (this.impulses[i].name === id) {
          this.convolverNode.buffer = this.impulses[i].audioBuffer;
          break;
        }
      }
    }
  };
  p5.Convolver.prototype.dispose = function () {
    Effect.prototype.dispose.apply(this);
    // remove all the Impulse Response buffers
    for (var i in this.impulses) {
      if (this.impulses[i]) {
        this.impulses[i] = null;
      }
    }
    this.convolverNode.disconnect();
    this.concolverNode = null;
  };
}(errorHandler, effect, sndcore);
/** Tone.js module by Yotam Mann, MIT License 2016  http://opensource.org/licenses/MIT **/
var Tone_core_TimelineState;
Tone_core_TimelineState = function (Tone) {
  'use strict';
  Tone.TimelineState = function (initial) {
    Tone.Timeline.call(this);
    this._initial = initial;
  };
  Tone.extend(Tone.TimelineState, Tone.Timeline);
  Tone.TimelineState.prototype.getValueAtTime = function (time) {
    var event = this.get(time);
    if (event !== null) {
      return event.state;
    } else {
      return this._initial;
    }
  };
  Tone.TimelineState.prototype.setStateAtTime = function (state, time) {
    this.add({
      'state': state,
      'time': time
    });
  };
  return Tone.TimelineState;
}(Tone_core_Tone, Tone_core_Timeline);
/** Tone.js module by Yotam Mann, MIT License 2016  http://opensource.org/licenses/MIT **/
var Tone_core_Clock;
Tone_core_Clock = function (Tone) {
  'use strict';
  Tone.Clock = function () {
    Tone.Emitter.call(this);
    var options = this.optionsObject(arguments, [
      'callback',
      'frequency'
    ], Tone.Clock.defaults);
    this.callback = options.callback;
    this._nextTick = 0;
    this._lastState = Tone.State.Stopped;
    this.frequency = new Tone.TimelineSignal(options.frequency, Tone.Type.Frequency);
    this._readOnly('frequency');
    this.ticks = 0;
    this._state = new Tone.TimelineState(Tone.State.Stopped);
    this._boundLoop = this._loop.bind(this);
    this.context.on('tick', this._boundLoop);
  };
  Tone.extend(Tone.Clock, Tone.Emitter);
  Tone.Clock.defaults = {
    'callback': Tone.noOp,
    'frequency': 1,
    'lookAhead': 'auto'
  };
  Object.defineProperty(Tone.Clock.prototype, 'state', {
    get: function () {
      return this._state.getValueAtTime(this.now());
    }
  });
  Tone.Clock.prototype.start = function (time, offset) {
    time = this.toSeconds(time);
    if (this._state.getValueAtTime(time) !== Tone.State.Started) {
      this._state.add({
        'state': Tone.State.Started,
        'time': time,
        'offset': offset
      });
    }
    return this;
  };
  Tone.Clock.prototype.stop = function (time) {
    time = this.toSeconds(time);
    this._state.cancel(time);
    this._state.setStateAtTime(Tone.State.Stopped, time);
    return this;
  };
  Tone.Clock.prototype.pause = function (time) {
    time = this.toSeconds(time);
    if (this._state.getValueAtTime(time) === Tone.State.Started) {
      this._state.setStateAtTime(Tone.State.Paused, time);
    }
    return this;
  };
  Tone.Clock.prototype._loop = function () {
    var now = this.now();
    var lookAhead = this.context.lookAhead;
    var updateInterval = this.context.updateInterval;
    var lagCompensation = this.context.lag * 2;
    var loopInterval = now + lookAhead + updateInterval + lagCompensation;
    while (loopInterval > this._nextTick && this._state) {
      var currentState = this._state.getValueAtTime(this._nextTick);
      if (currentState !== this._lastState) {
        this._lastState = currentState;
        var event = this._state.get(this._nextTick);
        if (currentState === Tone.State.Started) {
          this._nextTick = event.time;
          if (!this.isUndef(event.offset)) {
            this.ticks = event.offset;
          }
          this.emit('start', event.time, this.ticks);
        } else if (currentState === Tone.State.Stopped) {
          this.ticks = 0;
          this.emit('stop', event.time);
        } else if (currentState === Tone.State.Paused) {
          this.emit('pause', event.time);
        }
      }
      var tickTime = this._nextTick;
      if (this.frequency) {
        this._nextTick += 1 / this.frequency.getValueAtTime(this._nextTick);
        if (currentState === Tone.State.Started) {
          this.callback(tickTime);
          this.ticks++;
        }
      }
    }
  };
  Tone.Clock.prototype.getStateAtTime = function (time) {
    time = this.toSeconds(time);
    return this._state.getValueAtTime(time);
  };
  Tone.Clock.prototype.dispose = function () {
    Tone.Emitter.prototype.dispose.call(this);
    this.context.off('tick', this._boundLoop);
    this._writable('frequency');
    this.frequency.dispose();
    this.frequency = null;
    this._boundLoop = null;
    this._nextTick = Infinity;
    this.callback = null;
    this._state.dispose();
    this._state = null;
  };
  return Tone.Clock;
}(Tone_core_Tone, Tone_signal_TimelineSignal, Tone_core_TimelineState, Tone_core_Emitter);
var metro;
'use strict';
metro = function () {
  var p5sound = master;
  // requires the Tone.js library's Clock (MIT license, Yotam Mann)
  // https://github.com/TONEnoTONE/Tone.js/
  var Clock = Tone_core_Clock;
  p5.Metro = function () {
    this.clock = new Clock({ 'callback': this.ontick.bind(this) });
    this.syncedParts = [];
    this.bpm = 120;
    // gets overridden by p5.Part
    this._init();
    this.prevTick = 0;
    this.tatumTime = 0;
    this.tickCallback = function () {
    };
  };
  p5.Metro.prototype.ontick = function (tickTime) {
    var elapsedTime = tickTime - this.prevTick;
    var secondsFromNow = tickTime - p5sound.audiocontext.currentTime;
    if (elapsedTime - this.tatumTime <= -0.02) {
      return;
    } else {
      // console.log('ok', this.syncedParts[0].phrases[0].name);
      this.prevTick = tickTime;
      // for all of the active things on the metro:
      var self = this;
      this.syncedParts.forEach(function (thisPart) {
        if (!thisPart.isPlaying)
          return;
        thisPart.incrementStep(secondsFromNow);
        // each synced source keeps track of its own beat number
        thisPart.phrases.forEach(function (thisPhrase) {
          var phraseArray = thisPhrase.sequence;
          var bNum = self.metroTicks % phraseArray.length;
          if (phraseArray[bNum] !== 0 && (self.metroTicks < phraseArray.length || !thisPhrase.looping)) {
            thisPhrase.callback(secondsFromNow, phraseArray[bNum]);
          }
        });
      });
      this.metroTicks += 1;
      this.tickCallback(secondsFromNow);
    }
  };
  p5.Metro.prototype.setBPM = function (bpm, rampTime) {
    var beatTime = 60 / (bpm * this.tatums);
    var now = p5sound.audiocontext.currentTime;
    this.tatumTime = beatTime;
    var rampTime = rampTime || 0;
    this.clock.frequency.setValueAtTime(this.clock.frequency.value, now);
    this.clock.frequency.linearRampToValueAtTime(bpm, now + rampTime);
    this.bpm = bpm;
  };
  p5.Metro.prototype.getBPM = function () {
    return this.clock.getRate() / this.tatums * 60;
  };
  p5.Metro.prototype._init = function () {
    this.metroTicks = 0;
  };
  // clear existing synced parts, add only this one
  p5.Metro.prototype.resetSync = function (part) {
    this.syncedParts = [part];
  };
  // push a new synced part to the array
  p5.Metro.prototype.pushSync = function (part) {
    this.syncedParts.push(part);
  };
  p5.Metro.prototype.start = function (timeFromNow) {
    var t = timeFromNow || 0;
    var now = p5sound.audiocontext.currentTime;
    this.clock.start(now + t);
    this.setBPM(this.bpm);
  };
  p5.Metro.prototype.stop = function (timeFromNow) {
    var t = timeFromNow || 0;
    var now = p5sound.audiocontext.currentTime;
    this.clock.stop(now + t);
  };
  p5.Metro.prototype.beatLength = function (tatums) {
    this.tatums = 1 / tatums / 4;
  };
}(master, Tone_core_Clock);
var looper;
'use strict';
looper = function () {
  var p5sound = master;
  var BPM = 120;
  /**
   *  Set the global tempo, in beats per minute, for all
   *  p5.Parts. This method will impact all active p5.Parts.
   *
   *  @method setBPM
   *  @param {Number} BPM      Beats Per Minute
   *  @param {Number} rampTime Seconds from now
   */
  p5.prototype.setBPM = function (bpm, rampTime) {
    BPM = bpm;
    for (var i in p5sound.parts) {
      if (p5sound.parts[i]) {
        p5sound.parts[i].setBPM(bpm, rampTime);
      }
    }
  };
  /**
   *  <p>A phrase is a pattern of musical events over time, i.e.
   *  a series of notes and rests.</p>
   *
   *  <p>Phrases must be added to a p5.Part for playback, and
   *  each part can play multiple phrases at the same time.
   *  For example, one Phrase might be a kick drum, another
   *  could be a snare, and another could be the bassline.</p>
   *
   *  <p>The first parameter is a name so that the phrase can be
   *  modified or deleted later. The callback is a a function that
   *  this phrase will call at every step—for example it might be
   *  called <code>playNote(value){}</code>. The array determines
   *  which value is passed into the callback at each step of the
   *  phrase. It can be numbers, an object with multiple numbers,
   *  or a zero (0) indicates a rest so the callback won't be called).</p>
   *
   *  @class p5.Phrase
   *  @constructor
   *  @param {String}   name     Name so that you can access the Phrase.
   *  @param {Function} callback The name of a function that this phrase
   *                             will call. Typically it will play a sound,
   *                             and accept two parameters: a time at which
   *                             to play the sound (in seconds from now),
   *                             and a value from the sequence array. The
   *                             time should be passed into the play() or
   *                             start() method to ensure precision.
   *  @param {Array}   sequence    Array of values to pass into the callback
   *                            at each step of the phrase.
   *  @example
   *  <div><code>
   *  var mySound, myPhrase, myPart;
   *  var pattern = [1,0,0,2,0,2,0,0];
   *  var msg = 'click to play';
   *
   *  function preload() {
   *    mySound = loadSound('assets/beatbox.mp3');
   *  }
   *
   *  function setup() {
   *    noStroke();
   *    fill(255);
   *    textAlign(CENTER);
   *    masterVolume(0.1);
   *
   *    myPhrase = new p5.Phrase('bbox', makeSound, pattern);
   *    myPart = new p5.Part();
   *    myPart.addPhrase(myPhrase);
   *    myPart.setBPM(60);
   *  }
   *
   *  function draw() {
   *    background(0);
   *    text(msg, width/2, height/2);
   *  }
   *
   *  function makeSound(time, playbackRate) {
   *    mySound.rate(playbackRate);
   *    mySound.play(time);
   *  }
   *
   *  function mouseClicked() {
   *    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
   *      myPart.start();
   *      msg = 'playing pattern';
   *    }
   *  }
   *
   *  </code></div>
   */
  p5.Phrase = function (name, callback, sequence) {
    this.phraseStep = 0;
    this.name = name;
    this.callback = callback;
    /**
     * Array of values to pass into the callback
     * at each step of the phrase. Depending on the callback
     * function's requirements, these values may be numbers,
     * strings, or an object with multiple parameters.
     * Zero (0) indicates a rest.
     *
     * @property {Array} sequence
     */
    this.sequence = sequence;
  };
  /**
   *  <p>A p5.Part plays back one or more p5.Phrases. Instantiate a part
   *  with steps and tatums. By default, each step represents 1/16th note.</p>
   *
   *  <p>See p5.Phrase for more about musical timing.</p>
   *
   *  @class p5.Part
   *  @constructor
   *  @param {Number} [steps]   Steps in the part
   *  @param {Number} [tatums] Divisions of a beat (default is 1/16, a quarter note)
   *  @example
   *  <div><code>
   *  var box, drum, myPart;
   *  var boxPat = [1,0,0,2,0,2,0,0];
   *  var drumPat = [0,1,1,0,2,0,1,0];
   *  var msg = 'click to play';
   *
   *  function preload() {
   *    box = loadSound('assets/beatbox.mp3');
   *    drum = loadSound('assets/drum.mp3');
   *  }
   *
   *  function setup() {
   *    noStroke();
   *    fill(255);
   *    textAlign(CENTER);
   *    masterVolume(0.1);
   *
   *    var boxPhrase = new p5.Phrase('box', playBox, boxPat);
   *    var drumPhrase = new p5.Phrase('drum', playDrum, drumPat);
   *    myPart = new p5.Part();
   *    myPart.addPhrase(boxPhrase);
   *    myPart.addPhrase(drumPhrase);
   *    myPart.setBPM(60);
   *    masterVolume(0.1);
   *  }
   *
   *  function draw() {
   *    background(0);
   *    text(msg, width/2, height/2);
   *  }
   *
   *  function playBox(time, playbackRate) {
   *    box.rate(playbackRate);
   *    box.play(time);
   *  }
   *
   *  function playDrum(time, playbackRate) {
   *    drum.rate(playbackRate);
   *    drum.play(time);
   *  }
   *
   *  function mouseClicked() {
   *    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
   *      myPart.start();
   *      msg = 'playing part';
   *    }
   *  }
   *  </code></div>
   */
  p5.Part = function (steps, bLength) {
    this.length = steps || 0;
    // how many beats
    this.partStep = 0;
    this.phrases = [];
    this.isPlaying = false;
    this.noLoop();
    this.tatums = bLength || 0.0625;
    // defaults to quarter note
    this.metro = new p5.Metro();
    this.metro._init();
    this.metro.beatLength(this.tatums);
    this.metro.setBPM(BPM);
    p5sound.parts.push(this);
    this.callback = function () {
    };
  };
  /**
   *  Set the tempo of this part, in Beats Per Minute.
   *
   *  @method  setBPM
   *  @param {Number} BPM      Beats Per Minute
   *  @param {Number} [rampTime] Seconds from now
   */
  p5.Part.prototype.setBPM = function (tempo, rampTime) {
    this.metro.setBPM(tempo, rampTime);
  };
  /**
   *  Returns the Beats Per Minute of this currently part.
   *
   *  @method getBPM
   *  @return {Number}
   */
  p5.Part.prototype.getBPM = function () {
    return this.metro.getBPM();
  };
  /**
   *  Start playback of this part. It will play
   *  through all of its phrases at a speed
   *  determined by setBPM.
   *
   *  @method  start
   *  @param  {Number} [time] seconds from now
   */
  p5.Part.prototype.start = function (time) {
    if (!this.isPlaying) {
      this.isPlaying = true;
      this.metro.resetSync(this);
      var t = time || 0;
      this.metro.start(t);
    }
  };
  /**
   *  Loop playback of this part. It will begin
   *  looping through all of its phrases at a speed
   *  determined by setBPM.
   *
   *  @method  loop
   *  @param  {Number} [time] seconds from now
   */
  p5.Part.prototype.loop = function (time) {
    this.looping = true;
    // rest onended function
    this.onended = function () {
      this.partStep = 0;
    };
    var t = time || 0;
    this.start(t);
  };
  /**
   *  Tell the part to stop looping.
   *
   *  @method  noLoop
   */
  p5.Part.prototype.noLoop = function () {
    this.looping = false;
    // rest onended function
    this.onended = function () {
      this.stop();
    };
  };
  /**
   *  Stop the part and cue it to step 0.
   *
   *  @method  stop
   *  @param  {Number} [time] seconds from now
   */
  p5.Part.prototype.stop = function (time) {
    this.partStep = 0;
    this.pause(time);
  };
  /**
   *  Pause the part. Playback will resume
   *  from the current step.
   *
   *  @method  pause
   *  @param  {Number} time seconds from now
   */
  p5.Part.prototype.pause = function (time) {
    this.isPlaying = false;
    var t = time || 0;
    this.metro.stop(t);
  };
  /**
   *  Add a p5.Phrase to this Part.
   *
   *  @method  addPhrase
   *  @param {p5.Phrase}   phrase   reference to a p5.Phrase
   */
  p5.Part.prototype.addPhrase = function (name, callback, array) {
    var p;
    if (arguments.length === 3) {
      p = new p5.Phrase(name, callback, array);
    } else if (arguments[0] instanceof p5.Phrase) {
      p = arguments[0];
    } else {
      throw 'invalid input. addPhrase accepts name, callback, array or a p5.Phrase';
    }
    this.phrases.push(p);
    // reset the length if phrase is longer than part's existing length
    if (p.sequence.length > this.length) {
      this.length = p.sequence.length;
    }
  };
  /**
   *  Remove a phrase from this part, based on the name it was
   *  given when it was created.
   *
   *  @method  removePhrase
   *  @param  {String} phraseName
   */
  p5.Part.prototype.removePhrase = function (name) {
    for (var i in this.phrases) {
      if (this.phrases[i].name === name) {
        this.phrases.splice(i, 1);
      }
    }
  };
  /**
   *  Get a phrase from this part, based on the name it was
   *  given when it was created. Now you can modify its array.
   *
   *  @method  getPhrase
   *  @param  {String} phraseName
   */
  p5.Part.prototype.getPhrase = function (name) {
    for (var i in this.phrases) {
      if (this.phrases[i].name === name) {
        return this.phrases[i];
      }
    }
  };
  /**
   *  Get a phrase from this part, based on the name it was
   *  given when it was created. Now you can modify its array.
   *
   *  @method  replaceSequence
   *  @param  {String} phraseName
   *  @param  {Array} sequence  Array of values to pass into the callback
   *                            at each step of the phrase.
   */
  p5.Part.prototype.replaceSequence = function (name, array) {
    for (var i in this.phrases) {
      if (this.phrases[i].name === name) {
        this.phrases[i].sequence = array;
      }
    }
  };
  p5.Part.prototype.incrementStep = function (time) {
    if (this.partStep < this.length - 1) {
      this.callback(time);
      this.partStep += 1;
    } else {
      if (!this.looping && this.partStep === this.length - 1) {
        console.log('done');
        // this.callback(time);
        this.onended();
      }
    }
  };
  /**
   *  Fire a callback function at every step.
   *
   *  @method onStep
   *  @param  {Function} callback The name of the callback
   *                              you want to fire
   *                              on every beat/tatum.
   */
  p5.Part.prototype.onStep = function (callback) {
    this.callback = callback;
  };
  // ===============
  // p5.Score
  // ===============
  /**
   *  A Score consists of a series of Parts. The parts will
   *  be played back in order. For example, you could have an
   *  A part, a B part, and a C part, and play them back in this order
   *  <code>new p5.Score(a, a, b, a, c)</code>
   *
   *  @class p5.Score
   *  @constructor
   *  @param {p5.Part} [...parts] One or multiple parts, to be played in sequence.
   */
  p5.Score = function () {
    // for all of the arguments
    this.parts = [];
    this.currentPart = 0;
    var thisScore = this;
    for (var i in arguments) {
      if (arguments[i] && this.parts[i]) {
        this.parts[i] = arguments[i];
        this.parts[i].nextPart = this.parts[i + 1];
        this.parts[i].onended = function () {
          thisScore.resetPart(i);
          playNextPart(thisScore);
        };
      }
    }
    this.looping = false;
  };
  p5.Score.prototype.onended = function () {
    if (this.looping) {
      // this.resetParts();
      this.parts[0].start();
    } else {
      this.parts[this.parts.length - 1].onended = function () {
        this.stop();
        this.resetParts();
      };
    }
    this.currentPart = 0;
  };
  /**
   *  Start playback of the score.
   *
   *  @method  start
   */
  p5.Score.prototype.start = function () {
    this.parts[this.currentPart].start();
    this.scoreStep = 0;
  };
  /**
   *  Stop playback of the score.
   *
   *  @method  stop
   */
  p5.Score.prototype.stop = function () {
    this.parts[this.currentPart].stop();
    this.currentPart = 0;
    this.scoreStep = 0;
  };
  /**
   *  Pause playback of the score.
   *
   *  @method  pause
   */
  p5.Score.prototype.pause = function () {
    this.parts[this.currentPart].stop();
  };
  /**
   *  Loop playback of the score.
   *
   *  @method  loop
   */
  p5.Score.prototype.loop = function () {
    this.looping = true;
    this.start();
  };
  /**
   *  Stop looping playback of the score. If it
   *  is currently playing, this will go into effect
   *  after the current round of playback completes.
   *
   *  @method  noLoop
   */
  p5.Score.prototype.noLoop = function () {
    this.looping = false;
  };
  p5.Score.prototype.resetParts = function () {
    var self = this;
    this.parts.forEach(function (part) {
      self.resetParts[part];
    });
  };
  p5.Score.prototype.resetPart = function (i) {
    this.parts[i].stop();
    this.parts[i].partStep = 0;
    for (var p in this.parts[i].phrases) {
      if (this.parts[i]) {
        this.parts[i].phrases[p].phraseStep = 0;
      }
    }
  };
  /**
   *  Set the tempo for all parts in the score
   *
   *  @method setBPM
   *  @param {Number} BPM      Beats Per Minute
   *  @param {Number} rampTime Seconds from now
   */
  p5.Score.prototype.setBPM = function (bpm, rampTime) {
    for (var i in this.parts) {
      if (this.parts[i]) {
        this.parts[i].setBPM(bpm, rampTime);
      }
    }
  };
  function playNextPart(aScore) {
    aScore.currentPart++;
    if (aScore.currentPart >= aScore.parts.length) {
      aScore.scoreStep = 0;
      aScore.onended();
    } else {
      aScore.scoreStep = 0;
      aScore.parts[aScore.currentPart - 1].stop();
      aScore.parts[aScore.currentPart].start();
    }
  }
}(master);
var soundloop;
'use strict';
soundloop = function () {
  var p5sound = master;
  var Clock = Tone_core_Clock;
  /**
   * SoundLoop
   *
   * @class p5.SoundLoop
   * @constructor
   *
   * @param {Function} callback this function will be called on each iteration of theloop
   * @param {Number|String} [interval] amount of time or beats for each iteration of the loop
   *                                       defaults to 1
   *
   * @example
   * <div><code>
   * var click;
   * var looper1;
   *
   * function preload() {
   *   click = loadSound('assets/drum.mp3');
   * }
   *
   * function setup() {
   *   //the looper's callback is passed the timeFromNow
   *   //this value should be used as a reference point from
   *   //which to schedule sounds
   *   looper1 = new p5.SoundLoop(function(timeFromNow){
   *     click.play(timeFromNow);
   *     background(255 * (looper1.iterations % 2));
   *     }, 2);
   *
   *   //stop after 10 iteratios;
   *   looper1.maxIterations = 10;
   *   //start the loop
   *   looper1.start();
   * }
   * </code></div>
   */
  p5.SoundLoop = function (callback, interval) {
    this.callback = callback;
    /**
       * musicalTimeMode uses <a href = "https://github.com/Tonejs/Tone.js/wiki/Time">Tone.Time</a> convention
    * true if string, false if number
       * @property {Boolean} musicalTimeMode
       */
    this.musicalTimeMode = typeof this._interval === 'number' ? false : true;
    this._interval = interval || 1;
    /**
     * musicalTimeMode variables
     * modify these only when the interval is specified in musicalTime format as a string
     */
    this._timeSignature = 4;
    this._bpm = 60;
    this.isPlaying = false;
    /**
     * Set a limit to the number of loops to play. defaults to Infinity
     * @property {Number} maxIterations
     */
    this.maxIterations = Infinity;
    var self = this;
    this.clock = new Clock({
      'callback': function (time) {
        var timeFromNow = time - p5sound.audiocontext.currentTime;
        /**
         * Do not initiate the callback if timeFromNow is < 0
         * This ususually occurs for a few milliseconds when the page
         * is not fully loaded
         *
         * The callback should only be called until maxIterations is reached
         */
        if (timeFromNow > 0 && self.iterations <= self.maxIterations) {
          self.callback(timeFromNow);
        }
      },
      'frequency': this._calcFreq()
    });
  };
  /**
   * Start the loop
   * @method  start
   * @param  {Number} [timeFromNow] schedule a starting time
   */
  p5.SoundLoop.prototype.start = function (timeFromNow) {
    var t = timeFromNow || 0;
    var now = p5sound.audiocontext.currentTime;
    if (!this.isPlaying) {
      this.clock.start(now + t);
      this.isPlaying = true;
    }
  };
  /**
   * Stop the loop
   * @method  stop
   * @param  {Number} [timeFromNow] schedule a stopping time
   */
  p5.SoundLoop.prototype.stop = function (timeFromNow) {
    var t = timeFromNow || 0;
    var now = p5sound.audiocontext.currentTime;
    if (this.isPlaying) {
      this.clock.stop(now + t);
      this.isPlaying = false;
    }
  };
  /**
   * Pause the loop
   * @method pause
   * @param  {Number} [timeFromNow] schedule a pausing time
   */
  p5.SoundLoop.prototype.pause = function (timeFromNow) {
    var t = timeFromNow || 0;
    if (this.isPlaying) {
      this.clock.pause(t);
      this.isPlaying = false;
    }
  };
  /**
   * Synchronize loops. Use this method to start two more more loops in synchronization
   * or to start a loop in synchronization with a loop that is already playing
   * This method will schedule the implicit loop in sync with the explicit master loop
   * i.e. loopToStart.syncedStart(loopToSyncWith)
   *
   * @method  syncedStart
   * @param  {Object} otherLoop   a p5.SoundLoop to sync with
   * @param  {Number} [timeFromNow] Start the loops in sync after timeFromNow seconds
   */
  p5.SoundLoop.prototype.syncedStart = function (otherLoop, timeFromNow) {
    var t = timeFromNow || 0;
    var now = p5sound.audiocontext.currentTime;
    if (!otherLoop.isPlaying) {
      otherLoop.clock.start(now + t);
      otherLoop.isPlaying = true;
      this.clock.start(now + t);
      this.isPlaying = true;
    } else if (otherLoop.isPlaying) {
      var time = otherLoop.clock._nextTick - p5sound.audiocontext.currentTime;
      this.clock.start(now + time);
      this.isPlaying = true;
    }
  };
  /**
   * Updates frequency value, reflected in next callback
   * @private
   * @method  _update
   */
  p5.SoundLoop.prototype._update = function () {
    this.clock.frequency.value = this._calcFreq();
  };
  /**
   * Calculate the frequency of the clock's callback based on bpm, interval, and timesignature
   * @private
   * @method  _calcFreq
   * @return {Number} new clock frequency value
   */
  p5.SoundLoop.prototype._calcFreq = function () {
    //Seconds mode, bpm / timesignature has no effect
    if (typeof this._interval === 'number') {
      this.musicalTimeMode = false;
      return 1 / this._interval;
    } else if (typeof this._interval === 'string') {
      this.musicalTimeMode = true;
      return this._bpm / 60 / this._convertNotation(this._interval) * (this._timeSignature / 4);
    }
  };
  /**
   * Convert notation from musical time format to seconds
   * Uses <a href = "https://github.com/Tonejs/Tone.js/wiki/Time">Tone.Time</a> convention
   * @private
   * @method _convertNotation
   * @param  {String} value value to be converted
   * @return {Number}       converted value in seconds
   */
  p5.SoundLoop.prototype._convertNotation = function (value) {
    var type = value.slice(-1);
    value = Number(value.slice(0, -1));
    switch (type) {
    case 'm':
      return this._measure(value);
    case 'n':
      return this._note(value);
    default:
      console.warn('Specified interval is not formatted correctly. See Tone.js ' + 'timing reference for more info: https://github.com/Tonejs/Tone.js/wiki/Time');
    }
  };
  /**
   * Helper conversion methods of measure and note
   * @private
   * @method  _measure
   * @private
   * @method  _note
   */
  p5.SoundLoop.prototype._measure = function (value) {
    return value * this._timeSignature;
  };
  p5.SoundLoop.prototype._note = function (value) {
    return this._timeSignature / value;
  };
  /**
   * Getters and Setters, setting any paramter will result in a change in the clock's
   * frequency, that will be reflected after the next callback
   * beats per minute (defaults to 60)
   * @property {Number} bpm
   */
  Object.defineProperty(p5.SoundLoop.prototype, 'bpm', {
    get: function () {
      return this._bpm;
    },
    set: function (bpm) {
      if (!this.musicalTimeMode) {
        console.warn('Changing the BPM in "seconds" mode has no effect. ' + 'BPM is only relevant in musicalTimeMode ' + 'when the interval is specified as a string ' + '("2n", "4n", "1m"...etc)');
      }
      this._bpm = bpm;
      this._update();
    }
  });
  /**
   * number of quarter notes in a measure (defaults to 4)
   * @property {Number} timeSignature
   */
  Object.defineProperty(p5.SoundLoop.prototype, 'timeSignature', {
    get: function () {
      return this._timeSignature;
    },
    set: function (timeSig) {
      if (!this.musicalTimeMode) {
        console.warn('Changing the timeSignature in "seconds" mode has no effect. ' + 'BPM is only relevant in musicalTimeMode ' + 'when the interval is specified as a string ' + '("2n", "4n", "1m"...etc)');
      }
      this._timeSignature = timeSig;
      this._update();
    }
  });
  /**
   * length of the loops interval
   * @property {Number|String} interval
   */
  Object.defineProperty(p5.SoundLoop.prototype, 'interval', {
    get: function () {
      return this._interval;
    },
    set: function (interval) {
      this.musicalTimeMode = typeof interval === 'Number' ? false : true;
      this._interval = interval;
      this._update();
    }
  });
  /**
   * how many times the callback has been called so far
   * @property {Number} iterations
   * @readonly
   */
  Object.defineProperty(p5.SoundLoop.prototype, 'iterations', {
    get: function () {
      return this.clock.ticks;
    }
  });
  return p5.SoundLoop;
}(master, Tone_core_Clock);
var compressor;
compressor = function () {
  'use strict';
  var p5sound = master;
  var Effect = effect;
  var CustomError = errorHandler;
  /**
   * Compressor is an audio effect class that performs dynamics compression
   * on an audio input source. This is a very commonly used technique in music
   * and sound production. Compression creates an overall louder, richer,
   * and fuller sound by lowering the volume of louds and raising that of softs.
   * Compression can be used to avoid clipping (sound distortion due to
   * peaks in volume) and is especially useful when many sounds are played
   * at once. Compression can be used on indivudal sound sources in addition
   * to the master output.
   *
   * This class extends <a href = "/reference/#/p5.Effect">p5.Effect</a>.
   * Methods <a href = "/reference/#/p5.Effect/amp">amp()</a>, <a href = "/reference/#/p5.Effect/chain">chain()</a>,
   * <a href = "/reference/#/p5.Effect/drywet">drywet()</a>, <a href = "/reference/#/p5.Effect/connect">connect()</a>, and
   * <a href = "/reference/#/p5.Effect/disconnect">disconnect()</a> are available.
   *
   * @class p5.Compressor
   * @constructor
   * @extends p5.Effect
   *
   *
   */
  p5.Compressor = function () {
    Effect.call(this);
    /**
       * The p5.Compressor is built with a <a href="https://www.w3.org/TR/webaudio/#the-dynamicscompressornode-interface"
     *   target="_blank" title="W3 spec for Dynamics Compressor Node">Web Audio Dynamics Compressor Node
     *   </a>
       * @property {AudioNode} compressor
       */
    this.compressor = this.ac.createDynamicsCompressor();
    this.input.connect(this.compressor);
    this.compressor.connect(this.wet);
  };
  p5.Compressor.prototype = Object.create(Effect.prototype);
  /**
  * Performs the same function as .connect, but also accepts
  * optional parameters to set compressor's audioParams
  * @method process
  *
  * @param {Object} src         Sound source to be connected
  *
  * @param {Number} [attack]     The amount of time (in seconds) to reduce the gain by 10dB,
  *                            default = .003, range 0 - 1
  * @param {Number} [knee]       A decibel value representing the range above the
  *                            threshold where the curve smoothly transitions to the "ratio" portion.
  *                            default = 30, range 0 - 40
  * @param {Number} [ratio]      The amount of dB change in input for a 1 dB change in output
  *                            default = 12, range 1 - 20
  * @param {Number} [threshold]  The decibel value above which the compression will start taking effect
  *                            default = -24, range -100 - 0
  * @param {Number} [release]    The amount of time (in seconds) to increase the gain by 10dB
  *                            default = .25, range 0 - 1
  */
  p5.Compressor.prototype.process = function (src, attack, knee, ratio, threshold, release) {
    src.connect(this.input);
    this.set(attack, knee, ratio, threshold, release);
  };
  /**
   * Set the paramters of a compressor.
   * @method  set
   * @param {Number} attack     The amount of time (in seconds) to reduce the gain by 10dB,
   *                            default = .003, range 0 - 1
   * @param {Number} knee       A decibel value representing the range above the
   *                            threshold where the curve smoothly transitions to the "ratio" portion.
   *                            default = 30, range 0 - 40
   * @param {Number} ratio      The amount of dB change in input for a 1 dB change in output
   *                            default = 12, range 1 - 20
   * @param {Number} threshold  The decibel value above which the compression will start taking effect
   *                            default = -24, range -100 - 0
   * @param {Number} release    The amount of time (in seconds) to increase the gain by 10dB
   *                            default = .25, range 0 - 1
   */
  p5.Compressor.prototype.set = function (attack, knee, ratio, threshold, release) {
    if (typeof attack !== 'undefined') {
      this.attack(attack);
    }
    if (typeof knee !== 'undefined') {
      this.knee(knee);
    }
    if (typeof ratio !== 'undefined') {
      this.ratio(ratio);
    }
    if (typeof threshold !== 'undefined') {
      this.threshold(threshold);
    }
    if (typeof release !== 'undefined') {
      this.release(release);
    }
  };
  /**
   * Get current attack or set value w/ time ramp
   *
   *
   * @method attack
   * @param {Number} [attack] Attack is the amount of time (in seconds) to reduce the gain by 10dB,
   *                          default = .003, range 0 - 1
   * @param {Number} [time]  Assign time value to schedule the change in value
   */
  p5.Compressor.prototype.attack = function (attack, time) {
    var t = time || 0;
    if (typeof attack == 'number') {
      this.compressor.attack.value = attack;
      this.compressor.attack.cancelScheduledValues(this.ac.currentTime + 0.01 + t);
      this.compressor.attack.linearRampToValueAtTime(attack, this.ac.currentTime + 0.02 + t);
    } else if (typeof attack !== 'undefined') {
      attack.connect(this.compressor.attack);
    }
    return this.compressor.attack.value;
  };
  /**
   * Get current knee or set value w/ time ramp
   *
   * @method knee
   * @param {Number} [knee] A decibel value representing the range above the
   *                        threshold where the curve smoothly transitions to the "ratio" portion.
   *                        default = 30, range 0 - 40
   * @param {Number} [time]  Assign time value to schedule the change in value
   */
  p5.Compressor.prototype.knee = function (knee, time) {
    var t = time || 0;
    if (typeof knee == 'number') {
      this.compressor.knee.value = knee;
      this.compressor.knee.cancelScheduledValues(this.ac.currentTime + 0.01 + t);
      this.compressor.knee.linearRampToValueAtTime(knee, this.ac.currentTime + 0.02 + t);
    } else if (typeof knee !== 'undefined') {
      knee.connect(this.compressor.knee);
    }
    return this.compressor.knee.value;
  };
  /**
   * Get current ratio or set value w/ time ramp
   * @method ratio
   *
   * @param {Number} [ratio]      The amount of dB change in input for a 1 dB change in output
   *                            default = 12, range 1 - 20
   * @param {Number} [time]  Assign time value to schedule the change in value
   */
  p5.Compressor.prototype.ratio = function (ratio, time) {
    var t = time || 0;
    if (typeof ratio == 'number') {
      this.compressor.ratio.value = ratio;
      this.compressor.ratio.cancelScheduledValues(this.ac.currentTime + 0.01 + t);
      this.compressor.ratio.linearRampToValueAtTime(ratio, this.ac.currentTime + 0.02 + t);
    } else if (typeof ratio !== 'undefined') {
      ratio.connect(this.compressor.ratio);
    }
    return this.compressor.ratio.value;
  };
  /**
   * Get current threshold or set value w/ time ramp
   * @method threshold
   *
   * @param {Number} threshold  The decibel value above which the compression will start taking effect
   *                            default = -24, range -100 - 0
   * @param {Number} [time]  Assign time value to schedule the change in value
   */
  p5.Compressor.prototype.threshold = function (threshold, time) {
    var t = time || 0;
    if (typeof threshold == 'number') {
      this.compressor.threshold.value = threshold;
      this.compressor.threshold.cancelScheduledValues(this.ac.currentTime + 0.01 + t);
      this.compressor.threshold.linearRampToValueAtTime(threshold, this.ac.currentTime + 0.02 + t);
    } else if (typeof threshold !== 'undefined') {
      threshold.connect(this.compressor.threshold);
    }
    return this.compressor.threshold.value;
  };
  /**
   * Get current release or set value w/ time ramp
   * @method release
   *
   * @param {Number} release    The amount of time (in seconds) to increase the gain by 10dB
   *                            default = .25, range 0 - 1
   *
   * @param {Number} [time]  Assign time value to schedule the change in value
   */
  p5.Compressor.prototype.release = function (release, time) {
    var t = time || 0;
    if (typeof release == 'number') {
      this.compressor.release.value = release;
      this.compressor.release.cancelScheduledValues(this.ac.currentTime + 0.01 + t);
      this.compressor.release.linearRampToValueAtTime(release, this.ac.currentTime + 0.02 + t);
    } else if (typeof number !== 'undefined') {
      release.connect(this.compressor.release);
    }
    return this.compressor.release.value;
  };
  /**
   * Return the current reduction value
   *
   * @method reduction
   * @return {Number} Value of the amount of gain reduction that is applied to the signal
   */
  p5.Compressor.prototype.reduction = function () {
    return this.compressor.reduction.value;
  };
  p5.Compressor.prototype.dispose = function () {
    Effect.prototype.dispose.apply(this);
    this.compressor.disconnect();
    this.compressor = undefined;
  };
  return p5.Compressor;
}(master, effect, errorHandler);
var soundRecorder;
'use strict';
soundRecorder = function () {
  var p5sound = master;
  var ac = p5sound.audiocontext;
  /**
   *  <p>Record sounds for playback and/or to save as a .wav file.
   *  The p5.SoundRecorder records all sound output from your sketch,
   *  or can be assigned a specific source with setInput().</p>
   *  <p>The record() method accepts a p5.SoundFile as a parameter.
   *  When playback is stopped (either after the given amount of time,
   *  or with the stop() method), the p5.SoundRecorder will send its
   *  recording to that p5.SoundFile for playback.</p>
   *
   *  @class p5.SoundRecorder
   *  @constructor
   *  @example
   *  <div><code>
   *  var mic, recorder, soundFile;
   *  var state = 0;
   *
   *  function setup() {
   *    background(200);
   *    // create an audio in
   *    mic = new p5.AudioIn();
   *
   *    // prompts user to enable their browser mic
   *    mic.start();
   *
   *    // create a sound recorder
   *    recorder = new p5.SoundRecorder();
   *
   *    // connect the mic to the recorder
   *    recorder.setInput(mic);
   *
   *    // this sound file will be used to
   *    // playback & save the recording
   *    soundFile = new p5.SoundFile();
   *
   *    text('keyPress to record', 20, 20);
   *  }
   *
   *  function keyPressed() {
   *    // make sure user enabled the mic
   *    if (state === 0 && mic.enabled) {
   *
   *      // record to our p5.SoundFile
   *      recorder.record(soundFile);
   *
   *      background(255,0,0);
   *      text('Recording!', 20, 20);
   *      state++;
   *    }
   *    else if (state === 1) {
   *      background(0,255,0);
   *
   *      // stop recorder and
   *      // send result to soundFile
   *      recorder.stop();
   *
   *      text('Stopped', 20, 20);
   *      state++;
   *    }
   *
   *    else if (state === 2) {
   *      soundFile.play(); // play the result!
   *      save(soundFile, 'mySound.wav');
   *      state++;
   *    }
   *  }
   *  </div></code>
   */
  p5.SoundRecorder = function () {
    this.input = ac.createGain();
    this.output = ac.createGain();
    this.recording = false;
    this.bufferSize = 1024;
    this._channels = 2;
    // stereo (default)
    this._clear();
    // initialize variables
    this._jsNode = ac.createScriptProcessor(this.bufferSize, this._channels, 2);
    this._jsNode.onaudioprocess = this._audioprocess.bind(this);
    /**
     *  callback invoked when the recording is over
     *  @private
     *  @type Function(Float32Array)
     */
    this._callback = function () {
    };
    // connections
    this._jsNode.connect(p5.soundOut._silentNode);
    this.setInput();
    // add this p5.SoundFile to the soundArray
    p5sound.soundArray.push(this);
  };
  /**
   *  Connect a specific device to the p5.SoundRecorder.
   *  If no parameter is given, p5.SoundRecorer will record
   *  all audible p5.sound from your sketch.
   *
   *  @method  setInput
   *  @param {Object} [unit] p5.sound object or a web audio unit
   *                         that outputs sound
   */
  p5.SoundRecorder.prototype.setInput = function (unit) {
    this.input.disconnect();
    this.input = null;
    this.input = ac.createGain();
    this.input.connect(this._jsNode);
    this.input.connect(this.output);
    if (unit) {
      unit.connect(this.input);
    } else {
      p5.soundOut.output.connect(this.input);
    }
  };
  /**
   *  Start recording. To access the recording, provide
   *  a p5.SoundFile as the first parameter. The p5.SoundRecorder
   *  will send its recording to that p5.SoundFile for playback once
   *  recording is complete. Optional parameters include duration
   *  (in seconds) of the recording, and a callback function that
   *  will be called once the complete recording has been
   *  transfered to the p5.SoundFile.
   *
   *  @method  record
   *  @param  {p5.SoundFile}   soundFile    p5.SoundFile
   *  @param  {Number}   [duration] Time (in seconds)
   *  @param  {Function} [callback] The name of a function that will be
   *                                called once the recording completes
   */
  p5.SoundRecorder.prototype.record = function (sFile, duration, callback) {
    this.recording = true;
    if (duration) {
      this.sampleLimit = Math.round(duration * ac.sampleRate);
    }
    if (sFile && callback) {
      this._callback = function () {
        this.buffer = this._getBuffer();
        sFile.setBuffer(this.buffer);
        callback();
      };
    } else if (sFile) {
      this._callback = function () {
        this.buffer = this._getBuffer();
        sFile.setBuffer(this.buffer);
      };
    }
  };
  /**
   *  Stop the recording. Once the recording is stopped,
   *  the results will be sent to the p5.SoundFile that
   *  was given on .record(), and if a callback function
   *  was provided on record, that function will be called.
   *
   *  @method  stop
   */
  p5.SoundRecorder.prototype.stop = function () {
    this.recording = false;
    this._callback();
    this._clear();
  };
  p5.SoundRecorder.prototype._clear = function () {
    this._leftBuffers = [];
    this._rightBuffers = [];
    this.recordedSamples = 0;
    this.sampleLimit = null;
  };
  /**
   *  internal method called on audio process
   *
   *  @private
   *  @param   {AudioProcessorEvent} event
   */
  p5.SoundRecorder.prototype._audioprocess = function (event) {
    if (this.recording === false) {
      return;
    } else if (this.recording === true) {
      // if we are past the duration, then stop... else:
      if (this.sampleLimit && this.recordedSamples >= this.sampleLimit) {
        this.stop();
      } else {
        // get channel data
        var left = event.inputBuffer.getChannelData(0);
        var right = event.inputBuffer.getChannelData(1);
        // clone the samples
        this._leftBuffers.push(new Float32Array(left));
        this._rightBuffers.push(new Float32Array(right));
        this.recordedSamples += this.bufferSize;
      }
    }
  };
  p5.SoundRecorder.prototype._getBuffer = function () {
    var buffers = [];
    buffers.push(this._mergeBuffers(this._leftBuffers));
    buffers.push(this._mergeBuffers(this._rightBuffers));
    return buffers;
  };
  p5.SoundRecorder.prototype._mergeBuffers = function (channelBuffer) {
    var result = new Float32Array(this.recordedSamples);
    var offset = 0;
    var lng = channelBuffer.length;
    for (var i = 0; i < lng; i++) {
      var buffer = channelBuffer[i];
      result.set(buffer, offset);
      offset += buffer.length;
    }
    return result;
  };
  p5.SoundRecorder.prototype.dispose = function () {
    this._clear();
    // remove reference from soundArray
    var index = p5sound.soundArray.indexOf(this);
    p5sound.soundArray.splice(index, 1);
    this._callback = function () {
    };
    if (this.input) {
      this.input.disconnect();
    }
    this.input = null;
    this._jsNode = null;
  };
  /**
   *  Save a p5.SoundFile as a .wav audio file.
   *
   *  @method saveSound
   *  @param  {p5.SoundFile} soundFile p5.SoundFile that you wish to save
   *  @param  {String} name      name of the resulting .wav file.
   */
  p5.prototype.saveSound = function (soundFile, name) {
    var leftChannel, rightChannel;
    leftChannel = soundFile.buffer.getChannelData(0);
    // handle mono files
    if (soundFile.buffer.numberOfChannels > 1) {
      rightChannel = soundFile.buffer.getChannelData(1);
    } else {
      rightChannel = leftChannel;
    }
    var interleaved = interleave(leftChannel, rightChannel);
    // create the buffer and view to create the .WAV file
    var buffer = new window.ArrayBuffer(44 + interleaved.length * 2);
    var view = new window.DataView(buffer);
    // write the WAV container,
    // check spec at: https://ccrma.stanford.edu/courses/422/projects/WaveFormat/
    // RIFF chunk descriptor
    writeUTFBytes(view, 0, 'RIFF');
    view.setUint32(4, 36 + interleaved.length * 2, true);
    writeUTFBytes(view, 8, 'WAVE');
    // FMT sub-chunk
    writeUTFBytes(view, 12, 'fmt ');
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true);
    // stereo (2 channels)
    view.setUint16(22, 2, true);
    view.setUint32(24, 44100, true);
    view.setUint32(28, 44100 * 4, true);
    view.setUint16(32, 4, true);
    view.setUint16(34, 16, true);
    // data sub-chunk
    writeUTFBytes(view, 36, 'data');
    view.setUint32(40, interleaved.length * 2, true);
    // write the PCM samples
    var lng = interleaved.length;
    var index = 44;
    var volume = 1;
    for (var i = 0; i < lng; i++) {
      view.setInt16(index, interleaved[i] * (32767 * volume), true);
      index += 2;
    }
    p5.prototype.writeFile([view], name, 'wav');
  };
  // helper methods to save waves
  function interleave(leftChannel, rightChannel) {
    var length = leftChannel.length + rightChannel.length;
    var result = new Float32Array(length);
    var inputIndex = 0;
    for (var index = 0; index < length;) {
      result[index++] = leftChannel[inputIndex];
      result[index++] = rightChannel[inputIndex];
      inputIndex++;
    }
    return result;
  }
  function writeUTFBytes(view, offset, string) {
    var lng = string.length;
    for (var i = 0; i < lng; i++) {
      view.setUint8(offset + i, string.charCodeAt(i));
    }
  }
}(sndcore, master);
var peakdetect;
'use strict';
peakdetect = function () {
  /**
   *  <p>PeakDetect works in conjunction with p5.FFT to
   *  look for onsets in some or all of the frequency spectrum.
   *  </p>
   *  <p>
   *  To use p5.PeakDetect, call <code>update</code> in the draw loop
   *  and pass in a p5.FFT object.
   *  </p>
   *  <p>
   *  You can listen for a specific part of the frequency spectrum by
   *  setting the range between <code>freq1</code> and <code>freq2</code>.
   *  </p>
   *
   *  <p><code>threshold</code> is the threshold for detecting a peak,
   *  scaled between 0 and 1. It is logarithmic, so 0.1 is half as loud
   *  as 1.0.</p>
   *
   *  <p>
   *  The update method is meant to be run in the draw loop, and
   *  <b>frames</b> determines how many loops must pass before
   *  another peak can be detected.
   *  For example, if the frameRate() = 60, you could detect the beat of a
   *  120 beat-per-minute song with this equation:
   *  <code> framesPerPeak = 60 / (estimatedBPM / 60 );</code>
   *  </p>
   *
   *  <p>
   *  Based on example contribtued by @b2renger, and a simple beat detection
   *  explanation by <a
   *  href="http://www.airtightinteractive.com/2013/10/making-audio-reactive-visuals/"
   *  target="_blank">Felix Turner</a>.
   *  </p>
   *
   *  @class  p5.PeakDetect
   *  @constructor
   *  @param {Number} [freq1]     lowFrequency - defaults to 20Hz
   *  @param {Number} [freq2]     highFrequency - defaults to 20000 Hz
   *  @param {Number} [threshold] Threshold for detecting a beat between 0 and 1
   *                            scaled logarithmically where 0.1 is 1/2 the loudness
   *                            of 1.0. Defaults to 0.35.
   *  @param {Number} [framesPerPeak]     Defaults to 20.
   *  @example
   *  <div><code>
   *
   *  var cnv, soundFile, fft, peakDetect;
   *  var ellipseWidth = 10;
   *
   *  function setup() {
   *    background(0);
   *    noStroke();
   *    fill(255);
   *    textAlign(CENTER);
   *
   *    soundFile = loadSound('assets/beat.mp3');
   *
   *    // p5.PeakDetect requires a p5.FFT
   *    fft = new p5.FFT();
   *    peakDetect = new p5.PeakDetect();
   *
   *  }
   *
   *  function draw() {
   *    background(0);
   *    text('click to play/pause', width/2, height/2);
   *
   *    // peakDetect accepts an fft post-analysis
   *    fft.analyze();
   *    peakDetect.update(fft);
   *
   *    if ( peakDetect.isDetected ) {
   *      ellipseWidth = 50;
   *    } else {
   *      ellipseWidth *= 0.95;
   *    }
   *
   *    ellipse(width/2, height/2, ellipseWidth, ellipseWidth);
   *  }
   *
   *  // toggle play/stop when canvas is clicked
   *  function mouseClicked() {
   *    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
   *      if (soundFile.isPlaying() ) {
   *        soundFile.stop();
   *      } else {
   *        soundFile.play();
   *      }
   *    }
   *  }
   *  </code></div>
   */
  p5.PeakDetect = function (freq1, freq2, threshold, _framesPerPeak) {
    // framesPerPeak determines how often to look for a beat.
    // If a beat is provided, try to look for a beat based on bpm
    this.framesPerPeak = _framesPerPeak || 20;
    this.framesSinceLastPeak = 0;
    this.decayRate = 0.95;
    this.threshold = threshold || 0.35;
    this.cutoff = 0;
    // how much to increase the cutoff
    // TO DO: document this / figure out how to make it accessible
    this.cutoffMult = 1.5;
    this.energy = 0;
    this.penergy = 0;
    // TO DO: document this property / figure out how to make it accessible
    this.currentValue = 0;
    /**
     *  isDetected is set to true when a peak is detected.
     *
     *  @attribute isDetected {Boolean}
     *  @default  false
     */
    this.isDetected = false;
    this.f1 = freq1 || 40;
    this.f2 = freq2 || 20000;
    // function to call when a peak is detected
    this._onPeak = function () {
    };
  };
  /**
   *  The update method is run in the draw loop.
   *
   *  Accepts an FFT object. You must call .analyze()
   *  on the FFT object prior to updating the peakDetect
   *  because it relies on a completed FFT analysis.
   *
   *  @method  update
   *  @param  {p5.FFT} fftObject A p5.FFT object
   */
  p5.PeakDetect.prototype.update = function (fftObject) {
    var nrg = this.energy = fftObject.getEnergy(this.f1, this.f2) / 255;
    if (nrg > this.cutoff && nrg > this.threshold && nrg - this.penergy > 0) {
      // trigger callback
      this._onPeak();
      this.isDetected = true;
      // debounce
      this.cutoff = nrg * this.cutoffMult;
      this.framesSinceLastPeak = 0;
    } else {
      this.isDetected = false;
      if (this.framesSinceLastPeak <= this.framesPerPeak) {
        this.framesSinceLastPeak++;
      } else {
        this.cutoff *= this.decayRate;
        this.cutoff = Math.max(this.cutoff, this.threshold);
      }
    }
    this.currentValue = nrg;
    this.penergy = nrg;
  };
  /**
   *  onPeak accepts two arguments: a function to call when
   *  a peak is detected. The value of the peak,
   *  between 0.0 and 1.0, is passed to the callback.
   *
   *  @method  onPeak
   *  @param  {Function} callback Name of a function that will
   *                              be called when a peak is
   *                              detected.
   *  @param  {Object}   [val]    Optional value to pass
   *                              into the function when
   *                              a peak is detected.
   *  @example
   *  <div><code>
   *  var cnv, soundFile, fft, peakDetect;
   *  var ellipseWidth = 0;
   *
   *  function setup() {
   *    cnv = createCanvas(100,100);
   *    textAlign(CENTER);
   *
   *    soundFile = loadSound('assets/beat.mp3');
   *    fft = new p5.FFT();
   *    peakDetect = new p5.PeakDetect();
   *
   *    setupSound();
   *
   *    // when a beat is detected, call triggerBeat()
   *    peakDetect.onPeak(triggerBeat);
   *  }
   *
   *  function draw() {
   *    background(0);
   *    fill(255);
   *    text('click to play', width/2, height/2);
   *
   *    fft.analyze();
   *    peakDetect.update(fft);
   *
   *    ellipseWidth *= 0.95;
   *    ellipse(width/2, height/2, ellipseWidth, ellipseWidth);
   *  }
   *
   *  // this function is called by peakDetect.onPeak
   *  function triggerBeat() {
   *    ellipseWidth = 50;
   *  }
   *
   *  // mouseclick starts/stops sound
   *  function setupSound() {
   *    cnv.mouseClicked( function() {
   *      if (soundFile.isPlaying() ) {
   *        soundFile.stop();
   *      } else {
   *        soundFile.play();
   *      }
   *    });
   *  }
   *  </code></div>
   */
  p5.PeakDetect.prototype.onPeak = function (callback, val) {
    var self = this;
    self._onPeak = function () {
      callback(self.energy, val);
    };
  };
}();
var gain;
'use strict';
gain = function () {
  var p5sound = master;
  /**
   *  A gain node is usefull to set the relative volume of sound.
   *  It's typically used to build mixers.
   *
   *  @class p5.Gain
   *  @constructor
   *  @example
   *  <div><code>
   *
   * // load two soundfile and crossfade beetween them
   * var sound1,sound2;
   * var gain1, gain2, gain3;
   *
   * function preload(){
   *   soundFormats('ogg', 'mp3');
   *   sound1 = loadSound('../_files/Damscray_01');
   *   sound2 = loadSound('../_files/beat.mp3');
   * }
   *
   * function setup() {
   *   createCanvas(400,200);
   *
   *   // create a 'master' gain to which we will connect both soundfiles
   *   gain3 = new p5.Gain();
   *   gain3.connect();
   *
   *   // setup first sound for playing
   *   sound1.rate(1);
   *   sound1.loop();
   *   sound1.disconnect(); // diconnect from p5 output
   *
   *   gain1 = new p5.Gain(); // setup a gain node
   *   gain1.setInput(sound1); // connect the first sound to its input
   *   gain1.connect(gain3); // connect its output to the 'master'
   *
   *   sound2.rate(1);
   *   sound2.disconnect();
   *   sound2.loop();
   *
   *   gain2 = new p5.Gain();
   *   gain2.setInput(sound2);
   *   gain2.connect(gain3);
   *
   * }
   *
   * function draw(){
   *   background(180);
   *
   *   // calculate the horizontal distance beetween the mouse and the right of the screen
   *   var d = dist(mouseX,0,width,0);
   *
   *   // map the horizontal position of the mouse to values useable for volume control of sound1
   *   var vol1 = map(mouseX,0,width,0,1);
   *   var vol2 = 1-vol1; // when sound1 is loud, sound2 is quiet and vice versa
   *
   *   gain1.amp(vol1,0.5,0);
   *   gain2.amp(vol2,0.5,0);
   *
   *   // map the vertical position of the mouse to values useable for 'master volume control'
   *   var vol3 = map(mouseY,0,height,0,1);
   *   gain3.amp(vol3,0.5,0);
   * }
   *</code></div>
   *
   */
  p5.Gain = function () {
    this.ac = p5sound.audiocontext;
    this.input = this.ac.createGain();
    this.output = this.ac.createGain();
    // otherwise, Safari distorts
    this.input.gain.value = 0.5;
    this.input.connect(this.output);
    // add  to the soundArray
    p5sound.soundArray.push(this);
  };
  /**
   *  Connect a source to the gain node.
   *
   *  @method  setInput
   *  @param  {Object} src     p5.sound / Web Audio object with a sound
   *                           output.
   */
  p5.Gain.prototype.setInput = function (src) {
    src.connect(this.input);
  };
  /**
   *  Send output to a p5.sound or web audio object
   *
   *  @method  connect
   *  @param  {Object} unit
   */
  p5.Gain.prototype.connect = function (unit) {
    var u = unit || p5.soundOut.input;
    this.output.connect(u.input ? u.input : u);
  };
  /**
   *  Disconnect all output.
   *
   *  @method disconnect
   */
  p5.Gain.prototype.disconnect = function () {
    this.output.disconnect();
  };
  /**
   *  Set the output level of the gain node.
   *
   *  @method  amp
   *  @param  {Number} volume amplitude between 0 and 1.0
   *  @param  {Number} [rampTime] create a fade that lasts rampTime
   *  @param  {Number} [timeFromNow] schedule this event to happen
   *                                seconds from now
   */
  p5.Gain.prototype.amp = function (vol, rampTime, tFromNow) {
    var rampTime = rampTime || 0;
    var tFromNow = tFromNow || 0;
    var now = p5sound.audiocontext.currentTime;
    var currentVol = this.output.gain.value;
    this.output.gain.cancelScheduledValues(now);
    this.output.gain.linearRampToValueAtTime(currentVol, now + tFromNow);
    this.output.gain.linearRampToValueAtTime(vol, now + tFromNow + rampTime);
  };
  p5.Gain.prototype.dispose = function () {
    // remove reference from soundArray
    var index = p5sound.soundArray.indexOf(this);
    p5sound.soundArray.splice(index, 1);
    this.output.disconnect();
    this.input.disconnect();
    this.output = undefined;
    this.input = undefined;
  };
}(master, sndcore);
var audioVoice;
'use strict';
audioVoice = function () {
  var p5sound = master;
  /**
   * Base class for monophonic synthesizers. Any extensions of this class
   * should follow the API and implement the methods below in order to
   * remain compatible with p5.PolySynth();
   *
   * @class p5.AudioVoice
   * @constructor
   */
  p5.AudioVoice = function () {
    this.ac = p5sound.audiocontext;
    this.output = this.ac.createGain();
    this.connect();
    p5sound.soundArray.push(this);
  };
  /**
   * This method converts midi notes specified as a string "C4", "Eb3"...etc
   * to frequency
   * @private
   * @method  _setNote
   * @param {String} note
   */
  p5.AudioVoice.prototype._setNote = function (note) {
    var wholeNotes = {
      A: 21,
      B: 23,
      C: 24,
      D: 26,
      E: 28,
      F: 29,
      G: 31
    };
    var value = wholeNotes[note[0]];
    var octave = typeof Number(note.slice(-1)) === 'number' ? note.slice(-1) : 0;
    value += 12 * octave;
    value = note[1] === '#' ? value + 1 : note[1] === 'b' ? value - 1 : value;
    //return midi value converted to frequency
    return p5.prototype.midiToFreq(value);
  };
  p5.AudioVoice.prototype.play = function (note, velocity, secondsFromNow, sustime) {
  };
  p5.AudioVoice.prototype.triggerAttack = function (note, velocity, secondsFromNow) {
  };
  p5.AudioVoice.prototype.triggerRelease = function (secondsFromNow) {
  };
  p5.AudioVoice.prototype.amp = function (vol, rampTime) {
  };
  /**
   * Connect to p5 objects or Web Audio Nodes
   * @method  connect
   * @param {Object} unit
   */
  p5.AudioVoice.prototype.connect = function (unit) {
    var u = unit || p5sound.input;
    this.output.connect(u.input ? u.input : u);
  };
  /**
   * Disconnect from soundOut
   * @method  disconnect
   */
  p5.AudioVoice.prototype.disconnect = function () {
    this.output.disconnect();
  };
  p5.AudioVoice.prototype.dispose = function () {
    this.output.disconnect();
    delete this.output;
  };
  return p5.AudioVoice;
}(master);
var monosynth;
'use strict';
monosynth = function () {
  var p5sound = master;
  var AudioVoice = audioVoice;
  /**
  *  An MonoSynth is used as a single voice for sound synthesis.
  *  This is a class to be used in conjonction with the PolySynth
  *  class. Custom synthetisers should be built inheriting from
  *  this class.
  *
  *  @class p5.MonoSynth
  *  @constructor
  *  @example
  *  <div><code>
  *  var monosynth;
  *  var x;
  *
  *  function setup() {
  *    monosynth = new p5.MonoSynth();
  *    monosynth.loadPreset('simpleBass');
  *    monosynth.play(45,1,x=0,1);
  *    monosynth.play(49,1,x+=1,0.25);
  *    monosynth.play(50,1,x+=0.25,0.25);
  *    monosynth.play(49,1,x+=0.5,0.25);
  *    monosynth.play(50,1,x+=0.25,0.25);
  *  }
  *  </code></div>
  **/
  p5.MonoSynth = function () {
    AudioVoice.call(this);
    this.oscillator = new p5.Oscillator();
    // this.oscillator.disconnect();
    this.env = new p5.Env();
    this.env.setRange(1, 0);
    this.env.setExp(true);
    //set params
    this.setADSR(0.02, 0.25, 0.05, 0.35);
    // filter
    this.filter = new p5.Filter('highpass');
    this.filter.set(5, 1);
    // oscillator --> env --> filter --> this.output (gain) --> p5.soundOut
    this.oscillator.disconnect();
    this.oscillator.connect(this.filter);
    this.env.disconnect();
    this.env.setInput(this.oscillator);
    // this.env.connect(this.filter);
    this.filter.connect(this.output);
    this.oscillator.start();
    this.connect();
    //Audiovoices are connected to soundout by default
    this._isOn = false;
    p5sound.soundArray.push(this);
  };
  p5.MonoSynth.prototype = Object.create(p5.AudioVoice.prototype);
  /**
   *  Play tells the MonoSynth to start playing a note. This method schedules
   *  the calling of .triggerAttack and .triggerRelease.
   *
   *  @method play
   *  @param {String | Number} note the note you want to play, specified as a
   *                                 frequency in Hertz (Number) or as a midi
   *                                 value in Note/Octave format ("C4", "Eb3"...etc")
   *                                 See <a href = "https://github.com/Tonejs/Tone.js/wiki/Instruments">
   *                                 Tone</a>. Defaults to 440 hz.
   *  @param  {Number} [velocity] velocity of the note to play (ranging from 0 to 1)
   *  @param  {Number} [secondsFromNow]  time from now (in seconds) at which to play
   *  @param  {Number} [sustainTime] time to sustain before releasing the envelope
   *
   */
  p5.MonoSynth.prototype.play = function (note, velocity, secondsFromNow, susTime) {
    // set range of env (TO DO: allow this to be scheduled in advance)
    var susTime = susTime || this.sustain;
    this.susTime = susTime;
    this.triggerAttack(note, velocity, secondsFromNow);
    this.triggerRelease(secondsFromNow + susTime);
  };
  /**
   *  Trigger the Attack, and Decay portion of the Envelope.
   *  Similar to holding down a key on a piano, but it will
   *  hold the sustain level until you let go.
   *
   *  @param {String | Number} note the note you want to play, specified as a
   *                                 frequency in Hertz (Number) or as a midi
   *                                 value in Note/Octave format ("C4", "Eb3"...etc")
   *                                 See <a href = "https://github.com/Tonejs/Tone.js/wiki/Instruments">
   *                                 Tone</a>. Defaults to 440 hz
   *  @param  {Number} [velocity] velocity of the note to play (ranging from 0 to 1)
   *  @param  {Number} [secondsFromNow]  time from now (in seconds) at which to play
   *  @method  triggerAttack
   */
  p5.MonoSynth.prototype.triggerAttack = function (note, velocity, secondsFromNow) {
    var secondsFromNow = secondsFromNow || 0;
    //triggerAttack uses ._setNote to convert a midi string to a frequency if necessary
    var freq = typeof note === 'string' ? this._setNote(note) : typeof note === 'number' ? note : 440;
    var vel = velocity || 1;
    this._isOn = true;
    this.oscillator.freq(freq, 0, secondsFromNow);
    this.env.ramp(this.output, secondsFromNow, vel);
  };
  /**
   *  Trigger the release of the Envelope. This is similar to releasing
   *  the key on a piano and letting the sound fade according to the
   *  release level and release time.
   *
   *  @param  {Number} secondsFromNow time to trigger the release
   *  @method  triggerRelease
   */
  p5.MonoSynth.prototype.triggerRelease = function (secondsFromNow) {
    var secondsFromNow = secondsFromNow || 0;
    this.env.ramp(this.output, secondsFromNow, 0);
    this._isOn = false;
  };
  /**
   *  Set values like a traditional
   *  <a href="https://en.wikipedia.org/wiki/Synthesizer#/media/File:ADSR_parameter.svg">
   *  ADSR envelope
   *  </a>.
   *
   *  @method  setADSR
   *  @param {Number} attackTime    Time (in seconds before envelope
   *                                reaches Attack Level
   *  @param {Number} [decayTime]    Time (in seconds) before envelope
   *                                reaches Decay/Sustain Level
   *  @param {Number} [susRatio]    Ratio between attackLevel and releaseLevel, on a scale from 0 to 1,
   *                                where 1.0 = attackLevel, 0.0 = releaseLevel.
   *                                The susRatio determines the decayLevel and the level at which the
   *                                sustain portion of the envelope will sustain.
   *                                For example, if attackLevel is 0.4, releaseLevel is 0,
   *                                and susAmt is 0.5, the decayLevel would be 0.2. If attackLevel is
   *                                increased to 1.0 (using <code>setRange</code>),
   *                                then decayLevel would increase proportionally, to become 0.5.
   *  @param {Number} [releaseTime]   Time in seconds from now (defaults to 0)
   */
  p5.MonoSynth.prototype.setADSR = function (attack, decay, sustain, release) {
    this.env.setADSR(attack, decay, sustain, release);
  };
  /**
   * Getters and Setters
   * @property {Number} attack
   */
  /**
   * @property {Number} decay
   */
  /**
   * @property {Number} sustain
   */
  /**
   * @property {Number} release
   */
  Object.defineProperties(p5.MonoSynth.prototype, {
    'attack': {
      get: function () {
        return this.env.aTime;
      },
      set: function (attack) {
        this.env.setADSR(attack, this.env.dTime, this.env.sPercent, this.env.rTime);
      }
    },
    'decay': {
      get: function () {
        return this.env.dTime;
      },
      set: function (decay) {
        this.env.setADSR(this.env.aTime, decay, this.env.sPercent, this.env.rTime);
      }
    },
    'sustain': {
      get: function () {
        return this.env.sPercent;
      },
      set: function (sustain) {
        this.env.setADSR(this.env.aTime, this.env.dTime, sustain, this.env.rTime);
      }
    },
    'release': {
      get: function () {
        return this.env.rTime;
      },
      set: function (release) {
        this.env.setADSR(this.env.aTime, this.env.dTime, this.env.sPercent, release);
      }
    }
  });
  /**
   * MonoSynth amp
   * @method  amp
   * @param  {Number} vol      desired volume
   * @param  {Number} [rampTime] Time to reach new volume
   * @return {Number}          new volume value
   */
  p5.MonoSynth.prototype.amp = function (vol, rampTime) {
    var t = rampTime || 0;
    if (typeof vol !== 'undefined') {
      this.oscillator.amp(vol, t);
    }
    return this.oscillator.amp().value;
  };
  /**
   *  Connect to a p5.sound / Web Audio object.
   *
   *  @method  connect
   *  @param  {Object} unit A p5.sound or Web Audio object
   */
  p5.MonoSynth.prototype.connect = function (unit) {
    var u = unit || p5sound.input;
    this.output.connect(u.input ? u.input : u);
  };
  /**
   *  Disconnect all outputs
   *
   *  @method  disconnect
   */
  p5.MonoSynth.prototype.disconnect = function () {
    this.output.disconnect();
  };
  /**
   *  Get rid of the MonoSynth and free up its resources / memory.
   *
   *  @method  dispose
   */
  p5.MonoSynth.prototype.dispose = function () {
    AudioVoice.prototype.dispose.apply(this);
    this.filter.dispose();
    this.env.dispose();
    try {
      this.oscillator.dispose();
    } catch (e) {
      console.error('mono synth default oscillator already disposed');
    }
  };
}(master, audioVoice);
var polysynth;
'use strict';
polysynth = function () {
  var p5sound = master;
  var TimelineSignal = Tone_signal_TimelineSignal;
  /**
  *  An AudioVoice is used as a single voice for sound synthesis.
  *  The PolySynth class holds an array of AudioVoice, and deals
  *  with voices allocations, with setting notes to be played, and
  *  parameters to be set.
  *
  *  @class p5.PolySynth
  *  @constructor
  *
  *  @param {Number} [synthVoice]   A monophonic synth voice inheriting
  *                                 the AudioVoice class. Defaults to p5.MonoSynth
  *  @param {Number} [polyValue] Number of voices, defaults to 8;
  *
  *
  *  @example
  *  <div><code>
  *  var polysynth;
  *  function setup() {
  *    polysynth = new p5.PolySynth();
  *    polysynth.play(53,1,0,3);
  *    polysynth.play(60,1,0,2.9);
  *    polysynth.play(69,1,0,3);
  *    polysynth.play(71,1,0,3);
  *    polysynth.play(74,1,0,3);
  *  }
  *  </code></div>
  *
  **/
  p5.PolySynth = function (audioVoice, polyValue) {
    //audiovoices will contain polyValue many monophonic synths
    this.audiovoices = [];
    /**
     * An object that holds information about which notes have been played and
     * which notes are currently being played. New notes are added as keys
     * on the fly. While a note has been attacked, but not released, the value of the
     * key is the audiovoice which is generating that note. When notes are released,
     * the value of the key becomes undefined.
     * @property notes
     */
    this.notes = {};
    //indices of the most recently used, and least recently used audiovoice
    this._newest = 0;
    this._oldest = 0;
    /**
     * A PolySynth must have at least 1 voice, defaults to 8
     * @property polyvalue
     */
    this.polyValue = polyValue || 8;
    /**
     * Monosynth that generates the sound for each note that is triggered. The
     * p5.PolySynth defaults to using the p5.MonoSynth as its voice.
     * @property AudioVoice
     */
    this.AudioVoice = audioVoice === undefined ? p5.MonoSynth : audioVoice;
    /**
       * This value must only change as a note is attacked or released. Due to delay
       * and sustain times, Tone.TimelineSignal is required to schedule the change in value.
    * @private
       * @property {Tone.TimelineSignal} _voicesInUse
       */
    this._voicesInUse = new TimelineSignal(0);
    this.output = p5sound.audiocontext.createGain();
    this.connect();
    //Construct the appropriate number of audiovoices
    this._allocateVoices();
    p5sound.soundArray.push(this);
  };
  /**
   * Construct the appropriate number of audiovoices
   * @private
   * @method  _allocateVoices
   */
  p5.PolySynth.prototype._allocateVoices = function () {
    for (var i = 0; i < this.polyValue; i++) {
      this.audiovoices.push(new this.AudioVoice());
      this.audiovoices[i].disconnect();
      this.audiovoices[i].connect(this.output);
    }
  };
  /**
   *  Play a note by triggering noteAttack and noteRelease with sustain time
   *
   *  @method  play
   *  @param  {Number} [note] midi note to play (ranging from 0 to 127 - 60 being a middle C)
   *  @param  {Number} [velocity] velocity of the note to play (ranging from 0 to 1)
   *  @param  {Number} [secondsFromNow]  time from now (in seconds) at which to play
   *  @param  {Number} [sustainTime] time to sustain before releasing the envelope
   */
  p5.PolySynth.prototype.play = function (note, velocity, secondsFromNow, susTime) {
    var susTime = susTime || 1;
    this.noteAttack(note, velocity, secondsFromNow);
    this.noteRelease(note, secondsFromNow + susTime);
  };
  /**
   *  noteADSR sets the envelope for a specific note that has just been triggered.
   *  Using this method modifies the envelope of whichever audiovoice is being used
   *  to play the desired note. The envelope should be reset before noteRelease is called
   *  in order to prevent the modified envelope from being used on other notes.
   *
   *  @method  noteADSR
   *  @param {Number} [note]        Midi note on which ADSR should be set.
   *  @param {Number} [attackTime]  Time (in seconds before envelope
   *                                reaches Attack Level
   *  @param {Number} [decayTime]   Time (in seconds) before envelope
   *                                reaches Decay/Sustain Level
   *  @param {Number} [susRatio]    Ratio between attackLevel and releaseLevel, on a scale from 0 to 1,
   *                                where 1.0 = attackLevel, 0.0 = releaseLevel.
   *                                The susRatio determines the decayLevel and the level at which the
   *                                sustain portion of the envelope will sustain.
   *                                For example, if attackLevel is 0.4, releaseLevel is 0,
   *                                and susAmt is 0.5, the decayLevel would be 0.2. If attackLevel is
   *                                increased to 1.0 (using <code>setRange</code>),
   *                                then decayLevel would increase proportionally, to become 0.5.
   *  @param {Number} [releaseTime]   Time in seconds from now (defaults to 0)
   **/
  p5.PolySynth.prototype.noteADSR = function (note, a, d, s, r, timeFromNow) {
    var now = p5sound.audiocontext.currentTime;
    var timeFromNow = timeFromNow || 0;
    var t = now + timeFromNow;
    this.audiovoices[this.notes[note].getValueAtTime(t)].setADSR(a, d, s, r);
  };
  /**
   * Set the PolySynths global envelope. This method modifies the envelopes of each
   * monosynth so that all notes are played with this envelope.
   *
   *  @method  setADSR
   *  @param {Number} [note]        Midi note on which ADSR should be set.
   *  @param {Number} [attackTime]  Time (in seconds before envelope
   *                                reaches Attack Level
   *  @param {Number} [decayTime]   Time (in seconds) before envelope
   *                                reaches Decay/Sustain Level
   *  @param {Number} [susRatio]    Ratio between attackLevel and releaseLevel, on a scale from 0 to 1,
   *                                where 1.0 = attackLevel, 0.0 = releaseLevel.
   *                                The susRatio determines the decayLevel and the level at which the
   *                                sustain portion of the envelope will sustain.
   *                                For example, if attackLevel is 0.4, releaseLevel is 0,
   *                                and susAmt is 0.5, the decayLevel would be 0.2. If attackLevel is
   *                                increased to 1.0 (using <code>setRange</code>),
   *                                then decayLevel would increase proportionally, to become 0.5.
   *  @param {Number} [releaseTime]   Time in seconds from now (defaults to 0)
   **/
  p5.PolySynth.prototype.setADSR = function (a, d, s, r) {
    this.audiovoices.forEach(function (voice) {
      voice.setADSR(a, d, s, r);
    });
  };
  /**
   *  Trigger the Attack, and Decay portion of a MonoSynth.
   *  Similar to holding down a key on a piano, but it will
   *  hold the sustain level until you let go.
   *
   *  @method  noteAttack
   *  @param  {Number} [note]           midi note on which attack should be triggered.
   *  @param  {Number} [velocity]       velocity of the note to play (ranging from 0 to 1)/
   *  @param  {Number} [secondsFromNow] time from now (in seconds)
   *
   */
  p5.PolySynth.prototype.noteAttack = function (_note, _velocity, secondsFromNow) {
    var now = p5sound.audiocontext.currentTime;
    //this value goes to the audiovoices which handle their own scheduling
    var tFromNow = secondsFromNow || 0;
    //this value is used by this._voicesInUse
    var t = now + tFromNow;
    //Convert note to frequency if necessary. This is because entries into this.notes
    //should be based on frequency for the sake of consistency.
    var note = typeof _note === 'string' ? this.AudioVoice.prototype._setNote(_note) : typeof _note === 'number' ? _note : 440;
    var velocity = _velocity === undefined ? 1 : _velocity;
    var currentVoice;
    //Release the note if it is already playing
    if (this.notes[note] !== undefined && this.notes[note].getValueAtTime(t) !== null) {
      this.noteRelease(note, 0);
    }
    //Check to see how many voices are in use at the time the note will start
    if (this._voicesInUse.getValueAtTime(t) < this.polyValue) {
      currentVoice = this._voicesInUse.getValueAtTime(t);
    } else {
      currentVoice = this._oldest;
      var oldestNote = p5.prototype.freqToMidi(this.audiovoices[this._oldest].oscillator.freq().value);
      this.noteRelease(oldestNote);
      this._oldest = (this._oldest + 1) % (this.polyValue - 1);
    }
    //Overrite the entry in the notes object. A note (frequency value)
    //corresponds to the index of the audiovoice that is playing it
    this.notes[note] = new TimelineSignal();
    this.notes[note].setValueAtTime(currentVoice, t);
    //Find the scheduled change in this._voicesInUse that will be previous to this new note
    //Add 1 and schedule this value at time 't', when this note will start playing
    var previousVal = this._voicesInUse._searchBefore(t) === null ? 0 : this._voicesInUse._searchBefore(t).value;
    this._voicesInUse.setValueAtTime(previousVal + 1, t);
    //Then update all scheduled values that follow to increase by 1
    this._updateAfter(t, 1);
    this._newest = currentVoice;
    //The audiovoice handles the actual scheduling of the note
    if (typeof velocity === 'number') {
      var maxRange = 1 / this._voicesInUse.getValueAtTime(t) * 2;
      velocity = velocity > maxRange ? maxRange : velocity;
    }
    this.audiovoices[currentVoice].triggerAttack(note, velocity, tFromNow);
  };
  /**
   * Private method to ensure accurate values of this._voicesInUse
   * Any time a new value is scheduled, it is necessary to increment all subsequent
   * scheduledValues after attack, and decrement all subsequent
   * scheduledValues after release
   *
   * @private
   * @param  {[type]} time  [description]
   * @param  {[type]} value [description]
   * @return {[type]}       [description]
   */
  p5.PolySynth.prototype._updateAfter = function (time, value) {
    if (this._voicesInUse._searchAfter(time) === null) {
      return;
    } else {
      this._voicesInUse._searchAfter(time).value += value;
      var nextTime = this._voicesInUse._searchAfter(time).time;
      this._updateAfter(nextTime, value);
    }
  };
  /**
   *  Trigger the Release of an AudioVoice note. This is similar to releasing
   *  the key on a piano and letting the sound fade according to the
   *  release level and release time.
   *
   *  @method  noteRelease
   *  @param  {Number} [note]           midi note on which attack should be triggered.
   *  @param  {Number} [secondsFromNow] time to trigger the release
   *
   */
  p5.PolySynth.prototype.noteRelease = function (_note, secondsFromNow) {
    //Make sure note is in frequency inorder to query the this.notes object
    var note = typeof _note === 'string' ? this.AudioVoice.prototype._setNote(_note) : typeof _note === 'number' ? _note : this.audiovoices[this._newest].oscillator.freq().value;
    var now = p5sound.audiocontext.currentTime;
    var tFromNow = secondsFromNow || 0;
    var t = now + tFromNow;
    if (this.notes[note].getValueAtTime(t) === null) {
      console.warn('Cannot release a note that is not already playing');
    } else {
      //Find the scheduled change in this._voicesInUse that will be previous to this new note
      //subtract 1 and schedule this value at time 't', when this note will stop playing
      var previousVal = this._voicesInUse._searchBefore(t) === null ? 0 : this._voicesInUse._searchBefore(t).value;
      this._voicesInUse.setValueAtTime(previousVal - 1, t);
      //Then update all scheduled values that follow to decrease by 1
      this._updateAfter(t, -1);
      this.audiovoices[this.notes[note].getValueAtTime(t)].triggerRelease(tFromNow);
      this.notes[note].setValueAtTime(null, t);
      this._newest = this._newest === 0 ? 0 : (this._newest - 1) % (this.polyValue - 1);
    }
  };
  /**
  *  Connect to a p5.sound / Web Audio object.
  *
  *  @method  connect
  *  @param  {Object} unit A p5.sound or Web Audio object
  */
  p5.PolySynth.prototype.connect = function (unit) {
    var u = unit || p5sound.input;
    this.output.connect(u.input ? u.input : u);
  };
  /**
  *  Disconnect all outputs
  *
  *  @method  disconnect
  */
  p5.PolySynth.prototype.disconnect = function () {
    this.output.disconnect();
  };
  /**
  *  Get rid of the MonoSynth and free up its resources / memory.
  *
  *  @method  dispose
  */
  p5.PolySynth.prototype.dispose = function () {
    this.audiovoices.forEach(function (voice) {
      voice.dispose();
    });
    this.output.disconnect();
    delete this.output;
  };
}(master, Tone_signal_TimelineSignal, sndcore);
var distortion;
'use strict';
distortion = function () {
  var Effect = effect;
  /*
   * Adapted from [Kevin Ennis on StackOverflow](http://stackoverflow.com/questions/22312841/waveshaper-node-in-webaudio-how-to-emulate-distortion)
   */
  function makeDistortionCurve(amount) {
    var k = typeof amount === 'number' ? amount : 50;
    var numSamples = 44100;
    var curve = new Float32Array(numSamples);
    var deg = Math.PI / 180;
    var i = 0;
    var x;
    for (; i < numSamples; ++i) {
      x = i * 2 / numSamples - 1;
      curve[i] = (3 + k) * x * 20 * deg / (Math.PI + k * Math.abs(x));
    }
    return curve;
  }
  /**
   * A Distortion effect created with a Waveshaper Node,
   * with an approach adapted from
   * [Kevin Ennis](http://stackoverflow.com/questions/22312841/waveshaper-node-in-webaudio-how-to-emulate-distortion)
   *
   * This class extends <a href = "/reference/#/p5.Effect">p5.Effect</a>.
   * Methods <a href = "/reference/#/p5.Effect/amp">amp()</a>, <a href = "/reference/#/p5.Effect/chain">chain()</a>,
   * <a href = "/reference/#/p5.Effect/drywet">drywet()</a>, <a href = "/reference/#/p5.Effect/connect">connect()</a>, and
   * <a href = "/reference/#/p5.Effect/disconnect">disconnect()</a> are available.
   *
   * @class p5.Distortion
   * @extends p5.Effect
   * @constructor
   * @param {Number} [amount=0.25] Unbounded distortion amount.
   *                                Normal values range from 0-1.
   * @param {String} [oversample='none'] 'none', '2x', or '4x'.
   *
   */
  p5.Distortion = function (amount, oversample) {
    Effect.call(this);
    if (typeof amount === 'undefined') {
      amount = 0.25;
    }
    if (typeof amount !== 'number') {
      throw new Error('amount must be a number');
    }
    if (typeof oversample === 'undefined') {
      oversample = '2x';
    }
    if (typeof oversample !== 'string') {
      throw new Error('oversample must be a String');
    }
    var curveAmount = p5.prototype.map(amount, 0, 1, 0, 2000);
    /**
     *  The p5.Distortion is built with a
     *  <a href="http://www.w3.org/TR/webaudio/#WaveShaperNode">
     *  Web Audio WaveShaper Node</a>.
     *
     *  @property {AudioNode} WaveShaperNode
     */
    this.waveShaperNode = this.ac.createWaveShaper();
    this.amount = curveAmount;
    this.waveShaperNode.curve = makeDistortionCurve(curveAmount);
    this.waveShaperNode.oversample = oversample;
    this.input.connect(this.waveShaperNode);
    this.waveShaperNode.connect(this.wet);
  };
  p5.Distortion.prototype = Object.create(Effect.prototype);
  /**
   * Process a sound source, optionally specify amount and oversample values.
   *
   * @method process
   * @param {Number} [amount=0.25] Unbounded distortion amount.
   *                                Normal values range from 0-1.
   * @param {String} [oversample='none'] 'none', '2x', or '4x'.
   */
  p5.Distortion.prototype.process = function (src, amount, oversample) {
    src.connect(this.input);
    this.set(amount, oversample);
  };
  /**
   * Set the amount and oversample of the waveshaper distortion.
   *
   * @method set
   * @param {Number} [amount=0.25] Unbounded distortion amount.
   *                                Normal values range from 0-1.
   * @param {String} [oversample='none'] 'none', '2x', or '4x'.
   */
  p5.Distortion.prototype.set = function (amount, oversample) {
    if (amount) {
      var curveAmount = p5.prototype.map(amount, 0, 1, 0, 2000);
      this.amount = curveAmount;
      this.waveShaperNode.curve = makeDistortionCurve(curveAmount);
    }
    if (oversample) {
      this.waveShaperNode.oversample = oversample;
    }
  };
  /**
   *  Return the distortion amount, typically between 0-1.
   *
   *  @method  getAmount
   *  @return {Number} Unbounded distortion amount.
   *                   Normal values range from 0-1.
   */
  p5.Distortion.prototype.getAmount = function () {
    return this.amount;
  };
  /**
   *  Return the oversampling.
   *
   *  @method getOversample
   *
   *  @return {String} Oversample can either be 'none', '2x', or '4x'.
   */
  p5.Distortion.prototype.getOversample = function () {
    return this.waveShaperNode.oversample;
  };
  p5.Distortion.prototype.dispose = function () {
    Effect.prototype.dispose.apply(this);
    this.waveShaperNode.disconnect();
    this.waveShaperNode = null;
  };
}(effect);
var src_app;
'use strict';
src_app = function () {
  var p5SOUND = sndcore;
  return p5SOUND;
}(sndcore, master, helpers, errorHandler, panner, soundfile, amplitude, fft, signal, oscillator, env, pulse, noise, audioin, filter, eq, panner3d, listener3d, delay, reverb, metro, looper, soundloop, compressor, soundRecorder, peakdetect, gain, monosynth, polysynth, distortion, audioVoice, monosynth, polysynth);
}));

;/*! p5.dom.js v0.3.4 Aug 11, 2017 */
/**
 * <p>The web is much more than just canvas and p5.dom makes it easy to interact
 * with other HTML5 objects, including text, hyperlink, image, input, video,
 * audio, and webcam.</p>
 * <p>There is a set of creation methods, DOM manipulation methods, and
 * an extended p5.Element that supports a range of HTML elements. See the
 * <a href='https://github.com/processing/p5.js/wiki/Beyond-the-canvas'>
 * beyond the canvas tutorial</a> for a full overview of how this addon works.
 *
 * <p>Methods and properties shown in black are part of the p5.js core, items in
 * blue are part of the p5.dom library. You will need to include an extra file
 * in order to access the blue functions. See the
 * <a href='http://p5js.org/libraries/#using-a-library'>using a library</a>
 * section for information on how to include this library. p5.dom comes with
 * <a href='http://p5js.org/download'>p5 complete</a> or you can download the single file
 * <a href='https://raw.githubusercontent.com/lmccart/p5.js/master/lib/addons/p5.dom.js'>
 * here</a>.</p>
 * <p>See <a href='https://github.com/processing/p5.js/wiki/Beyond-the-canvas'>tutorial: beyond the canvas</a>
 * for more info on how to use this libary.</a>
 *
 * @module p5.dom
 * @submodule p5.dom
 * @for p5.dom
 * @main
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd)
    define('p5.dom', ['p5'], function(p5) {
      factory(p5);
    });
  else if (typeof exports === 'object') factory(require('../p5'));
  else factory(root['p5']);
})(this, function(p5) {
  // =============================================================================
  //                         p5 additions
  // =============================================================================

  /**
   * Searches the page for an element with the given ID, class, or tag name (using the '#' or '.'
   * prefixes to specify an ID or class respectively, and none for a tag) and returns it as
   * a p5.Element. If a class or tag name is given with more than 1 element,
   * only the first element will be returned.
   * The DOM node itself can be accessed with .elt.
   * Returns null if none found. You can also specify a container to search within.
   *
   * @method select
   * @param  {String} name id, class, or tag name of element to search for
   * @param  {String} [container] id, p5.Element, or HTML element to search within
   * @return {Object|p5.Element|Null} p5.Element containing node found
   * @example
   * <div ><code class='norender'>
   * function setup() {
   *   createCanvas(100, 100);
   *   //translates canvas 50px down
   *   select('canvas').position(100, 100);
   * }
   * </code></div>
   * <div ><code class='norender'>
   * // these are all valid calls to select()
   * var a = select('#moo');
   * var b = select('#blah', '#myContainer');
   * var c = select('#foo', b);
   * var d = document.getElementById('beep');
   * var e = select('p', d);
   * [a, b, c, d, e]; // unused
   * </code></div>
   *
   */
  p5.prototype.select = function(e, p) {
    p5._validateParameters('select', arguments);
    var res = null;
    var container = getContainer(p);
    if (e[0] === '.') {
      e = e.slice(1);
      res = container.getElementsByClassName(e);
      if (res.length) {
        res = res[0];
      } else {
        res = null;
      }
    } else if (e[0] === '#') {
      e = e.slice(1);
      res = container.getElementById(e);
    } else {
      res = container.getElementsByTagName(e);
      if (res.length) {
        res = res[0];
      } else {
        res = null;
      }
    }
    if (res) {
      return this._wrapElement(res);
    } else {
      return null;
    }
  };

  /**
   * Searches the page for elements with the given class or tag name (using the '.' prefix
   * to specify a class and no prefix for a tag) and returns them as p5.Elements
   * in an array.
   * The DOM node itself can be accessed with .elt.
   * Returns an empty array if none found.
   * You can also specify a container to search within.
   *
   * @method selectAll
   * @param  {String} name class or tag name of elements to search for
   * @param  {String} [container] id, p5.Element, or HTML element to search within
   * @return {Array} Array of p5.Elements containing nodes found
   * @example
   * <div class='norender'><code>
   * function setup() {
   *   createButton('btn');
   *   createButton('2nd btn');
   *   createButton('3rd btn');
   *   var buttons = selectAll('button');
   *
   *   for (var i = 0; i < buttons.length; i++) {
   *     buttons[i].size(100, 100);
   *   }
   * }
   * </code></div>
   * <div class='norender'><code>
   * // these are all valid calls to selectAll()
   * var a = selectAll('.moo');
   * a = selectAll('div');
   * a = selectAll('button', '#myContainer');
   *
   * var d = select('#container');
   * a = selectAll('p', d);
   *
   * var f = document.getElementById('beep');
   * a = select('.blah', f);
   *
   * a; // unused
   * </code></div>
   *
   */
  p5.prototype.selectAll = function(e, p) {
    p5._validateParameters('selectAll', arguments);
    var arr = [];
    var res;
    var container = getContainer(p);
    if (e[0] === '.') {
      e = e.slice(1);
      res = container.getElementsByClassName(e);
    } else {
      res = container.getElementsByTagName(e);
    }
    if (res) {
      for (var j = 0; j < res.length; j++) {
        var obj = this._wrapElement(res[j]);
        arr.push(obj);
      }
    }
    return arr;
  };

  /**
   * Helper function for select and selectAll
   */
  function getContainer(p) {
    var container = document;
    if (typeof p === 'string' && p[0] === '#') {
      p = p.slice(1);
      container = document.getElementById(p) || document;
    } else if (p instanceof p5.Element) {
      container = p.elt;
    } else if (p instanceof HTMLElement) {
      container = p;
    }
    return container;
  }

  /**
   * Helper function for getElement and getElements.
   */
  p5.prototype._wrapElement = function(elt) {
    var children = Array.prototype.slice.call(elt.children);
    if (elt.tagName === 'INPUT' && elt.type === 'checkbox') {
      var converted = new p5.Element(elt);
      converted.checked = function() {
        if (arguments.length === 0) {
          return this.elt.checked;
        } else if (arguments[0]) {
          this.elt.checked = true;
        } else {
          this.elt.checked = false;
        }
        return this;
      };
      return converted;
    } else if (elt.tagName === 'VIDEO' || elt.tagName === 'AUDIO') {
      return new p5.MediaElement(elt);
    } else if (elt.tagName === 'SELECT') {
      return this.createSelect(new p5.Element(elt));
    } else if (
      children.length > 0 &&
      children.every(function(c) {
        return c.tagName === 'INPUT' || c.tagName === 'LABEL';
      })
    ) {
      return this.createRadio(new p5.Element(elt));
    } else {
      return new p5.Element(elt);
    }
  };

  /**
   * Removes all elements created by p5, except any canvas / graphics
   * elements created by createCanvas or createGraphics.
   * Event handlers are removed, and element is removed from the DOM.
   * @method removeElements
   * @example
   * <div class='norender'><code>
   * function setup() {
   *   createCanvas(100, 100);
   *   createDiv('this is some text');
   *   createP('this is a paragraph');
   * }
   * function mousePressed() {
   *   removeElements(); // this will remove the div and p, not canvas
   * }
   * </code></div>
   *
   */
  p5.prototype.removeElements = function(e) {
    p5._validateParameters('removeElements', arguments);
    for (var i = 0; i < this._elements.length; i++) {
      if (!(this._elements[i].elt instanceof HTMLCanvasElement)) {
        this._elements[i].remove();
      }
    }
  };

  /**
   * Helpers for create methods.
   */
  function addElement(elt, pInst, media) {
    var node = pInst._userNode ? pInst._userNode : document.body;
    node.appendChild(elt);
    var c = media ? new p5.MediaElement(elt) : new p5.Element(elt);
    pInst._elements.push(c);
    return c;
  }

  /**
   * Creates a &lt;div&gt;&lt;/div&gt; element in the DOM with given inner HTML.
   * Appends to the container node if one is specified, otherwise
   * appends to body.
   *
   * @method createDiv
   * @param  {String} [html] inner HTML for element created
   * @return {Object|p5.Element} pointer to p5.Element holding created node
   * @example
   * <div class='norender'><code>
   * createDiv('this is some text');
   * </code></div>
   */

  /**
   * Creates a &lt;p&gt;&lt;/p&gt; element in the DOM with given inner HTML. Used
   * for paragraph length text.
   * Appends to the container node if one is specified, otherwise
   * appends to body.
   *
   * @method createP
   * @param  {String} [html] inner HTML for element created
   * @return {Object|p5.Element} pointer to p5.Element holding created node
   * @example
   * <div class='norender'><code>
   * createP('this is some text');
   * </code></div>
   */

  /**
   * Creates a &lt;span&gt;&lt;/span&gt; element in the DOM with given inner HTML.
   * Appends to the container node if one is specified, otherwise
   * appends to body.
   *
   * @method createSpan
   * @param  {String} [html] inner HTML for element created
   * @return {Object|p5.Element} pointer to p5.Element holding created node
   * @example
   * <div class='norender'><code>
   * createSpan('this is some text');
   * </code></div>
   */
  var tags = ['div', 'p', 'span'];
  tags.forEach(function(tag) {
    var method = 'create' + tag.charAt(0).toUpperCase() + tag.slice(1);
    p5.prototype[method] = function(html) {
      var elt = document.createElement(tag);
      elt.innerHTML = typeof html === undefined ? '' : html;
      return addElement(elt, this);
    };
  });

  /**
   * Creates an &lt;img&gt; element in the DOM with given src and
   * alternate text.
   * Appends to the container node if one is specified, otherwise
   * appends to body.
   *
   * @method createImg
   * @param  {String} src src path or url for image
   * @param  {String} [alt] alternate text to be used if image does not load
   * @param  {Function} [successCallback] callback to be called once image data is loaded
   * @return {Object|p5.Element} pointer to p5.Element holding created node
   * @example
   * <div class='norender'><code>
   * createImg('http://p5js.org/img/asterisk-01.png');
   * </code></div>
   */
  p5.prototype.createImg = function() {
    p5._validateParameters('createImg', arguments);
    var elt = document.createElement('img');
    var args = arguments;
    var self;
    var setAttrs = function() {
      self.width = elt.offsetWidth || elt.width;
      self.height = elt.offsetHeight || elt.height;
      if (args.length > 1 && typeof args[1] === 'function') {
        self.fn = args[1];
        self.fn();
      } else if (args.length > 1 && typeof args[2] === 'function') {
        self.fn = args[2];
        self.fn();
      }
    };
    elt.src = args[0];
    if (args.length > 1 && typeof args[1] === 'string') {
      elt.alt = args[1];
    }
    elt.onload = function() {
      setAttrs();
    };
    self = addElement(elt, this);
    return self;
  };

  /**
   * Creates an &lt;a&gt;&lt;/a&gt; element in the DOM for including a hyperlink.
   * Appends to the container node if one is specified, otherwise
   * appends to body.
   *
   * @method createA
   * @param  {String} href       url of page to link to
   * @param  {String} html       inner html of link element to display
   * @param  {String} [target]   target where new link should open,
   *                             could be _blank, _self, _parent, _top.
   * @return {Object|p5.Element} pointer to p5.Element holding created node
   * @example
   * <div class='norender'><code>
   * createA('http://p5js.org/', 'this is a link');
   * </code></div>
   */
  p5.prototype.createA = function(href, html, target) {
    p5._validateParameters('createA', arguments);
    var elt = document.createElement('a');
    elt.href = href;
    elt.innerHTML = html;
    if (target) elt.target = target;
    return addElement(elt, this);
  };

  /** INPUT **/

  /**
   * Creates a slider &lt;input&gt;&lt;/input&gt; element in the DOM.
   * Use .size() to set the display length of the slider.
   * Appends to the container node if one is specified, otherwise
   * appends to body.
   *
   * @method createSlider
   * @param  {Number} min minimum value of the slider
   * @param  {Number} max maximum value of the slider
   * @param  {Number} [value] default value of the slider
   * @param  {Number} [step] step size for each tick of the slider (if step is set to 0, the slider will move continuously from the minimum to the maximum value)
   * @return {Object|p5.Element} pointer to p5.Element holding created node
   * @example
   * <div><code>
   * var slider;
   * function setup() {
   *   slider = createSlider(0, 255, 100);
   *   slider.position(10, 10);
   *   slider.style('width', '80px');
   * }
   *
   * function draw() {
   *   var val = slider.value();
   *   background(val);
   * }
   * </code></div>
   *
   * <div><code>
   * var slider;
   * function setup() {
   *   colorMode(HSB);
   *   slider = createSlider(0, 360, 60, 40);
   *   slider.position(10, 10);
   *   slider.style('width', '80px');
   * }
   *
   * function draw() {
   *   var val = slider.value();
   *   background(val, 100, 100, 1);
   * }
   * </code></div>
   */
  p5.prototype.createSlider = function(min, max, value, step) {
    p5._validateParameters('createSlider', arguments);
    var elt = document.createElement('input');
    elt.type = 'range';
    elt.min = min;
    elt.max = max;
    if (step === 0) {
      elt.step = 0.000000000000000001; // smallest valid step
    } else if (step) {
      elt.step = step;
    }
    if (typeof value === 'number') elt.value = value;
    return addElement(elt, this);
  };

  /**
   * Creates a &lt;button&gt;&lt;/button&gt; element in the DOM.
   * Use .size() to set the display size of the button.
   * Use .mousePressed() to specify behavior on press.
   * Appends to the container node if one is specified, otherwise
   * appends to body.
   *
   * @method createButton
   * @param  {String} label label displayed on the button
   * @param  {String} [value] value of the button
   * @return {Object|p5.Element} pointer to p5.Element holding created node
   * @example
   * <div class='norender'><code>
   * var button;
   * function setup() {
   *   createCanvas(100, 100);
   *   background(0);
   *   button = createButton('click me');
   *   button.position(19, 19);
   *   button.mousePressed(changeBG);
   * }
   *
   * function changeBG() {
   *   var val = random(255);
   *   background(val);
   * }
   * </code></div>
   */
  p5.prototype.createButton = function(label, value) {
    p5._validateParameters('createButton', arguments);
    var elt = document.createElement('button');
    elt.innerHTML = label;
    if (value) elt.value = value;
    return addElement(elt, this);
  };

  /**
   * Creates a checkbox &lt;input&gt;&lt;/input&gt; element in the DOM.
   * Calling .checked() on a checkbox returns if it is checked or not
   *
   * @method createCheckbox
   * @param  {String} [label] label displayed after checkbox
   * @param  {boolean} [value] value of the checkbox; checked is true, unchecked is false
   * @return {Object|p5.Element} pointer to p5.Element holding created node
   * @example
   * <div class='norender'><code>
   * var checkbox;
   *
   * function setup() {
   *   checkbox = createCheckbox('label', false);
   *   checkbox.changed(myCheckedEvent);
   * }
   *
   * function myCheckedEvent() {
   *   if (this.checked()) {
   *     console.log('Checking!');
   *   } else {
   *     console.log('Unchecking!');
   *   }
   * }
   * </code></div>
   */
  p5.prototype.createCheckbox = function() {
    p5._validateParameters('createCheckbox', arguments);
    var elt = document.createElement('div');
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    elt.appendChild(checkbox);
    //checkbox must be wrapped in p5.Element before label so that label appears after
    var self = addElement(elt, this);
    self.checked = function() {
      var cb = self.elt.getElementsByTagName('input')[0];
      if (cb) {
        if (arguments.length === 0) {
          return cb.checked;
        } else if (arguments[0]) {
          cb.checked = true;
        } else {
          cb.checked = false;
        }
      }
      return self;
    };
    this.value = function(val) {
      self.value = val;
      return this;
    };
    if (arguments[0]) {
      var ran = Math.random()
        .toString(36)
        .slice(2);
      var label = document.createElement('label');
      checkbox.setAttribute('id', ran);
      label.htmlFor = ran;
      self.value(arguments[0]);
      label.appendChild(document.createTextNode(arguments[0]));
      elt.appendChild(label);
    }
    if (arguments[1]) {
      checkbox.checked = true;
    }
    return self;
  };

  /**
   * Creates a dropdown menu &lt;select&gt;&lt;/select&gt; element in the DOM.
   * It also helps to assign select-box methods to p5.Element when selecting existing select box
   * @method createSelect
   * @param {boolean} [multiple] true if dropdown should support multiple selections
   * @return {p5.Element}
   * @example
   * <div><code>
   * var sel;
   *
   * function setup() {
   *   textAlign(CENTER);
   *   background(200);
   *   sel = createSelect();
   *   sel.position(10, 10);
   *   sel.option('pear');
   *   sel.option('kiwi');
   *   sel.option('grape');
   *   sel.changed(mySelectEvent);
   * }
   *
   * function mySelectEvent() {
   *   var item = sel.value();
   *   background(200);
   *   text('it is a' + item + '!', 50, 50);
   * }
   * </code></div>
   */
  /**
   * @method createSelect
   * @param {Object} existing DOM select element
   * @return {p5.Element}
   */

  p5.prototype.createSelect = function() {
    p5._validateParameters('createSelect', arguments);
    var elt, self;
    var arg = arguments[0];
    if (typeof arg === 'object' && arg.elt.nodeName === 'SELECT') {
      self = arg;
      elt = this.elt = arg.elt;
    } else {
      elt = document.createElement('select');
      if (arg && typeof arg === 'boolean') {
        elt.setAttribute('multiple', 'true');
      }
      self = addElement(elt, this);
    }
    self.option = function(name, value) {
      var index;
      //see if there is already an option with this name
      for (var i = 0; i < this.elt.length; i++) {
        if (this.elt[i].innerHTML === name) {
          index = i;
          break;
        }
      }
      //if there is an option with this name we will modify it
      if (index !== undefined) {
        //if the user passed in false then delete that option
        if (value === false) {
          this.elt.remove(index);
        } else {
          //otherwise if the name and value are the same then change both
          if (this.elt[index].innerHTML === this.elt[index].value) {
            this.elt[index].innerHTML = this.elt[index].value = value;
            //otherwise just change the value
          } else {
            this.elt[index].value = value;
          }
        }
      } else {
        //if it doesn't exist make it
        var opt = document.createElement('option');
        opt.innerHTML = name;
        if (arguments.length > 1) opt.value = value;
        else opt.value = name;
        elt.appendChild(opt);
      }
    };
    self.selected = function(value) {
      var arr = [],
        i;
      if (arguments.length > 0) {
        for (i = 0; i < this.elt.length; i++) {
          if (value.toString() === this.elt[i].value) {
            this.elt.selectedIndex = i;
          }
        }
        return this;
      } else {
        if (this.elt.getAttribute('multiple')) {
          for (i = 0; i < this.elt.selectedOptions.length; i++) {
            arr.push(this.elt.selectedOptions[i].value);
          }
          return arr;
        } else {
          return this.elt.value;
        }
      }
    };
    return self;
  };

  /**
   * Creates a radio button &lt;input&gt;&lt;/input&gt; element in the DOM.
   * The .option() method can be used to set options for the radio after it is
   * created. The .value() method will return the currently selected option.
   *
   * @method createRadio
   * @param  {String} [divId] the id and name of the created div and input field respectively
   * @return {Object|p5.Element} pointer to p5.Element holding created node
   * @example
   * <div><code>
   * var radio;
   *
   * function setup() {
   *   radio = createRadio();
   *   radio.option('black');
   *   radio.option('white');
   *   radio.option('gray');
   *   radio.style('width', '60px');
   *   textAlign(CENTER);
   *   fill(255, 0, 0);
   * }
   *
   * function draw() {
   *   var val = radio.value();
   *   background(val);
   *   text(val, width / 2, height / 2);
   * }
   * </code></div>
   * <div><code>
   * var radio;
   *
   * function setup() {
   *   radio = createRadio();
   *   radio.option('apple', 1);
   *   radio.option('bread', 2);
   *   radio.option('juice', 3);
   *   radio.style('width', '60px');
   *   textAlign(CENTER);
   * }
   *
   * function draw() {
   *   background(200);
   *   var val = radio.value();
   *   if (val) {
   *     text('item cost is $' + val, width / 2, height / 2);
   *   }
   * }
   * </code></div>
   */
  p5.prototype.createRadio = function(existing_radios) {
    p5._validateParameters('createRadio', arguments);
    // do some prep by counting number of radios on page
    var radios = document.querySelectorAll('input[type=radio]');
    var count = 0;
    if (radios.length > 1) {
      var length = radios.length;
      var prev = radios[0].name;
      var current = radios[1].name;
      count = 1;
      for (var i = 1; i < length; i++) {
        current = radios[i].name;
        if (prev !== current) {
          count++;
        }
        prev = current;
      }
    } else if (radios.length === 1) {
      count = 1;
    }
    // see if we got an existing set of radios from callee
    var elt, self;
    if (typeof existing_radios === 'object') {
      // use existing elements
      self = existing_radios;
      elt = this.elt = existing_radios.elt;
    } else {
      // create a set of radio buttons
      elt = document.createElement('div');
      self = addElement(elt, this);
    }
    // setup member functions
    self._getInputChildrenArray = function() {
      return Array.prototype.slice.call(this.elt.children).filter(function(c) {
        return c.tagName === 'INPUT';
      });
    };

    var times = -1;
    self.option = function(name, value) {
      var opt = document.createElement('input');
      opt.type = 'radio';
      opt.innerHTML = name;
      if (value) opt.value = value;
      else opt.value = name;
      opt.setAttribute('name', 'defaultradio' + count);
      elt.appendChild(opt);
      if (name) {
        times++;
        var label = document.createElement('label');
        opt.setAttribute('id', 'defaultradio' + count + '-' + times);
        label.htmlFor = 'defaultradio' + count + '-' + times;
        label.appendChild(document.createTextNode(name));
        elt.appendChild(label);
      }
      return opt;
    };
    self.selected = function(value) {
      var i;
      var inputChildren = self._getInputChildrenArray();
      if (value) {
        for (i = 0; i < inputChildren.length; i++) {
          if (inputChildren[i].value === value) inputChildren[i].checked = true;
        }
        return this;
      } else {
        for (i = 0; i < inputChildren.length; i++) {
          if (inputChildren[i].checked === true) return inputChildren[i].value;
        }
      }
    };
    self.value = function(value) {
      var i;
      var inputChildren = self._getInputChildrenArray();
      if (value) {
        for (i = 0; i < inputChildren.length; i++) {
          if (inputChildren[i].value === value) inputChildren[i].checked = true;
        }
        return this;
      } else {
        for (i = 0; i < inputChildren.length; i++) {
          if (inputChildren[i].checked === true) return inputChildren[i].value;
        }
        return '';
      }
    };
    return self;
  };

  /**
   * Creates an &lt;input&gt;&lt;/input&gt; element in the DOM for text input.
   * Use .size() to set the display length of the box.
   * Appends to the container node if one is specified, otherwise
   * appends to body.
   *
   * @method createInput
   * @param {String} [value] default value of the input box
   * @param {String} [type] type of text, ie text, password etc. Defaults to text
   * @return {Object|p5.Element} pointer to p5.Element holding created node
   * @example
   * <div class='norender'><code>
   * function setup() {
   *   var inp = createInput('');
   *   inp.input(myInputEvent);
   * }
   *
   * function myInputEvent() {
   *   console.log('you are typing: ', this.value());
   * }
   * </code></div>
   */
  p5.prototype.createInput = function(value, type) {
    p5._validateParameters('createInput', arguments);
    var elt = document.createElement('input');
    elt.type = type ? type : 'text';
    if (value) elt.value = value;
    return addElement(elt, this);
  };

  /**
   * Creates an &lt;input&gt;&lt;/input&gt; element in the DOM of type 'file'.
   * This allows users to select local files for use in a sketch.
   *
   * @method createFileInput
   * @param  {Function} [callback] callback function for when a file loaded
   * @param  {String} [multiple] optional to allow multiple files selected
   * @return {Object|p5.Element} pointer to p5.Element holding created DOM element
   * @example
   * var input;
   * var img;
   *
   * function setup() {
   *   input = createFileInput(handleFile);
   *   input.position(0, 0);
   * }
   *
   * function draw() {
   *   if (img) {
   *     image(img, 0, 0, width, height);
   *   }
   * }
   *
   * function handleFile(file) {
   *   print(file);
   *   if (file.type === 'image') {
   *     img = createImg(file.data);
   *     img.hide();
   *   }
   * }
   */
  p5.prototype.createFileInput = function(callback, multiple) {
    p5._validateParameters('createFileInput', arguments);
    // Function to handle when a file is selected
    // We're simplifying life and assuming that we always
    // want to load every selected file
    function handleFileSelect(evt) {
      function makeLoader(theFile) {
        // Making a p5.File object
        var p5file = new p5.File(theFile);
        return function(e) {
          p5file.data = e.target.result;
          callback(p5file);
        };
      }
      // These are the files
      var files = evt.target.files;
      // Load each one and trigger a callback
      for (var i = 0; i < files.length; i++) {
        var f = files[i];
        var reader = new FileReader();

        reader.onload = makeLoader(f);

        // Text or data?
        // This should likely be improved
        if (f.type.indexOf('text') > -1) {
          reader.readAsText(f);
        } else {
          reader.readAsDataURL(f);
        }
      }
    }
    // Is the file stuff supported?
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      // Yup, we're ok and make an input file selector
      var elt = document.createElement('input');
      elt.type = 'file';

      // If we get a second argument that evaluates to true
      // then we are looking for multiple files
      if (multiple) {
        // Anything gets the job done
        elt.multiple = 'multiple';
      }

      // Now let's handle when a file was selected
      elt.addEventListener('change', handleFileSelect, false);
      return addElement(elt, this);
    } else {
      console.log(
        'The File APIs are not fully supported in this browser. Cannot create element.'
      );
    }
  };

  /** VIDEO STUFF **/

  function createMedia(pInst, type, src, callback) {
    var elt = document.createElement(type);

    // allow src to be empty
    src = src || '';
    if (typeof src === 'string') {
      src = [src];
    }
    for (var i = 0; i < src.length; i++) {
      var source = document.createElement('source');
      source.src = src[i];
      elt.appendChild(source);
    }
    if (typeof callback !== 'undefined') {
      var callbackHandler = function() {
        callback();
        elt.removeEventListener('canplaythrough', callbackHandler);
      };
      elt.addEventListener('canplaythrough', callbackHandler);
    }

    var c = addElement(elt, pInst, true);
    c.loadedmetadata = false;
    // set width and height onload metadata
    elt.addEventListener('loadedmetadata', function() {
      c.width = elt.videoWidth;
      c.height = elt.videoHeight;
      // set elt width and height if not set
      if (c.elt.width === 0) c.elt.width = elt.videoWidth;
      if (c.elt.height === 0) c.elt.height = elt.videoHeight;
      c.loadedmetadata = true;
    });

    return c;
  }
  /**
   * Creates an HTML5 &lt;video&gt; element in the DOM for simple playback
   * of audio/video. Shown by default, can be hidden with .hide()
   * and drawn into canvas using video(). Appends to the container
   * node if one is specified, otherwise appends to body. The first parameter
   * can be either a single string path to a video file, or an array of string
   * paths to different formats of the same video. This is useful for ensuring
   * that your video can play across different browsers, as each supports
   * different formats. See <a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats'>this
   * page</a> for further information about supported formats.
   *
   * @method createVideo
   * @param  {String|Array} src  path to a video file, or array of paths for
   *                             supporting different browsers
   * @param  {Object} [callback] callback function to be called upon
   *                             'canplaythrough' event fire, that is, when the
   *                             browser can play the media, and estimates that
   *                             enough data has been loaded to play the media
   *                             up to its end without having to stop for
   *                             further buffering of content
   * @return {p5.MediaElement|p5.Element} pointer to video p5.Element
   * @example
   * <div><code>
   * var vid;
   * function setup() {
   *   vid = createVideo(['small.mp4', 'small.ogv', 'small.webm'], vidLoad);
   * }
   *
   * // This function is called when the video loads
   * function vidLoad() {
   *   vid.play();
   * }
   * </code></div>
   */
  p5.prototype.createVideo = function(src, callback) {
    p5._validateParameters('createVideo', arguments);
    return createMedia(this, 'video', src, callback);
  };

  /** AUDIO STUFF **/

  /**
   * Creates a hidden HTML5 &lt;audio&gt; element in the DOM for simple audio
   * playback. Appends to the container node if one is specified,
   * otherwise appends to body. The first parameter
   * can be either a single string path to a audio file, or an array of string
   * paths to different formats of the same audio. This is useful for ensuring
   * that your audio can play across different browsers, as each supports
   * different formats. See <a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats'>this
   * page for further information about supported formats</a>.
   *
   * @method createAudio
   * @param  {String|String[]} [src] path to an audio file, or array of paths
   *                             for supporting different browsers
   * @param  {Object} [callback] callback function to be called upon
   *                             'canplaythrough' event fire, that is, when the
   *                             browser can play the media, and estimates that
   *                             enough data has been loaded to play the media
   *                             up to its end without having to stop for
   *                             further buffering of content
   * @return {p5.MediaElement|p5.Element} pointer to audio p5.Element  /**
   * @example
   * <div><code>
   * var ele;
   * function setup() {
   *   ele = createAudio('assets/beat.mp3');
   *
   *   // here we set the element to autoplay
   *   // The element will play as soon
   *   // as it is able to do so.
   *   ele.autoplay(true);
   * }
   * </code></div>
   */
  p5.prototype.createAudio = function(src, callback) {
    p5._validateParameters('createAudio', arguments);
    return createMedia(this, 'audio', src, callback);
  };

  /** CAMERA STUFF **/

  p5.prototype.VIDEO = 'video';
  p5.prototype.AUDIO = 'audio';

  // from: https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
  // Older browsers might not implement mediaDevices at all, so we set an empty object first
  if (navigator.mediaDevices === undefined) {
    navigator.mediaDevices = {};
  }

  // Some browsers partially implement mediaDevices. We can't just assign an object
  // with getUserMedia as it would overwrite existing properties.
  // Here, we will just add the getUserMedia property if it's missing.
  if (navigator.mediaDevices.getUserMedia === undefined) {
    navigator.mediaDevices.getUserMedia = function(constraints) {
      // First get ahold of the legacy getUserMedia, if present
      var getUserMedia =
        navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

      // Some browsers just don't implement it - return a rejected promise with an error
      // to keep a consistent interface
      if (!getUserMedia) {
        return Promise.reject(
          new Error('getUserMedia is not implemented in this browser')
        );
      }

      // Otherwise, wrap the call to the old navigator.getUserMedia with a Promise
      return new Promise(function(resolve, reject) {
        getUserMedia.call(navigator, constraints, resolve, reject);
      });
    };
  }

  /**
   * <p>Creates a new &lt;video&gt; element that contains the audio/video feed
   * from a webcam. This can be drawn onto the canvas using video().</p>
   * <p>More specific properties of the feed can be passing in a Constraints object.
   * See the
   * <a href='http://w3c.github.io/mediacapture-main/getusermedia.html#media-track-constraints'> W3C
   * spec</a> for possible properties. Note that not all of these are supported
   * by all browsers.</p>
   * <p>Security note: A new browser security specification requires that getUserMedia,
   * which is behind createCapture(), only works when you're running the code locally,
   * or on HTTPS. Learn more <a href='http://stackoverflow.com/questions/34197653/getusermedia-in-chrome-47-without-using-https'>here</a>
   * and <a href='https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia'>here</a>.</p>
   *
   * @method createCapture
   * @param  {String|Constant|Object}   type type of capture, either VIDEO or
   *                                   AUDIO if none specified, default both,
   *                                   or a Constraints object
   * @param  {Function}                 callback function to be called once
   *                                   stream has loaded
   * @return {Object|p5.Element} capture video p5.Element
   * @example
   * <div class='norender'><code>
   * var capture;
   *
   * function setup() {
   *   createCanvas(480, 120);
   *   capture = createCapture(VIDEO);
   * }
   *
   * function draw() {
   *   image(capture, 0, 0, width, width * capture.height / capture.width);
   *   filter(INVERT);
   * }
   * </code></div>
   * <div class='norender'><code>
   * function setup() {
   *   createCanvas(480, 120);
   *   var constraints = {
   *     video: {
   *       mandatory: {
   *         minWidth: 1280,
   *         minHeight: 720
   *       },
   *       optional: [{ maxFrameRate: 10 }]
   *     },
   *     audio: true
   *   };
   *   createCapture(constraints, function(stream) {
   *     console.log(stream);
   *   });
   * }
   * </code></div>
   */
  p5.prototype.createCapture = function() {
    p5._validateParameters('createCapture', arguments);
    var useVideo = true;
    var useAudio = true;
    var constraints;
    var cb;
    for (var i = 0; i < arguments.length; i++) {
      if (arguments[i] === p5.prototype.VIDEO) {
        useAudio = false;
      } else if (arguments[i] === p5.prototype.AUDIO) {
        useVideo = false;
      } else if (typeof arguments[i] === 'object') {
        constraints = arguments[i];
      } else if (typeof arguments[i] === 'function') {
        cb = arguments[i];
      }
    }
    if (navigator.getUserMedia) {
      var elt = document.createElement('video');

      if (!constraints) {
        constraints = { video: useVideo, audio: useAudio };
      }

      navigator.mediaDevices.getUserMedia(constraints).then(
        function(stream) {
          try {
            if ('srcObject' in elt) {
              elt.srcObject = stream;
            } else {
              elt.src = window.URL.createObjectURL(stream);
            }
          } catch (err) {
            elt.src = stream;
          }
          if (cb) {
            cb(stream);
          }
        },
        function(e) {
          console.log(e);
        }
      );
    } else {
      throw 'getUserMedia not supported in this browser';
    }
    var c = addElement(elt, this, true);
    c.loadedmetadata = false;
    // set width and height onload metadata
    elt.addEventListener('loadedmetadata', function() {
      elt.play();
      if (elt.width) {
        c.width = elt.videoWidth = elt.width;
        c.height = elt.videoHeight = elt.height;
      } else {
        c.width = c.elt.width = elt.videoWidth;
        c.height = c.elt.height = elt.videoHeight;
      }
      c.loadedmetadata = true;
    });
    return c;
  };

  /**
   * Creates element with given tag in the DOM with given content.
   * Appends to the container node if one is specified, otherwise
   * appends to body.
   *
   * @method createElement
   * @param  {String} tag tag for the new element
   * @param  {String} [content] html content to be inserted into the element
   * @return {Object|p5.Element} pointer to p5.Element holding created node
   * @example
   * <div class='norender'><code>
   * createElement('h2', 'im an h2 p5.element!');
   * </code></div>
   */
  p5.prototype.createElement = function(tag, content) {
    p5._validateParameters('createElement', arguments);
    var elt = document.createElement(tag);
    if (typeof content !== 'undefined') {
      elt.innerHTML = content;
    }
    return addElement(elt, this);
  };

  // =============================================================================
  //                         p5.Element additions
  // =============================================================================
  /**
   *
   * Adds specified class to the element.
   *
   * @for p5.Element
   * @method addClass
   * @param  {String} class name of class to add
   * @return {Object|p5.Element}
   * @example
   * <div class='norender'><code>
   * var div = createDiv('div');
   * div.addClass('myClass');
   * </code></div>
   */
  p5.Element.prototype.addClass = function(c) {
    if (this.elt.className) {
      // PEND don't add class more than once
      //var regex = new RegExp('[^a-zA-Z\d:]?'+c+'[^a-zA-Z\d:]?');
      //if (this.elt.className.search(/[^a-zA-Z\d:]?hi[^a-zA-Z\d:]?/) === -1) {
      this.elt.className = this.elt.className + ' ' + c;
      //}
    } else {
      this.elt.className = c;
    }
    return this;
  };

  /**
   *
   * Removes specified class from the element.
   *
   * @method removeClass
   * @param  {String} class name of class to remove
   * @return {Object|p5.Element}   * @example
   * <div class='norender'><code>
   * // In this example, a class is set when the div is created
   * // and removed when mouse is pressed. This could link up
   * // with a CSS style rule to toggle style properties.
   *
   * var div;
   *
   * function setup() {
   *   div = createDiv('div');
   *   div.addClass('myClass');
   * }
   *
   * function mousePressed() {
   *   div.removeClass('myClass');
   * }
   * </code></div>
   */
  p5.Element.prototype.removeClass = function(c) {
    var regex = new RegExp('(?:^|\\s)' + c + '(?!\\S)');
    this.elt.className = this.elt.className.replace(regex, '');
    this.elt.className = this.elt.className.replace(/^\s+|\s+$/g, ''); //prettify (optional)
    return this;
  };

  /**
   *
   * Attaches the element  as a child to the parent specified.
   * Accepts either a string ID, DOM node, or p5.Element.
   * If no argument is specified, an array of children DOM nodes is returned.
   *
   * @method child
   * @param  {String|Object|p5.Element} [child] the ID, DOM node, or p5.Element
   *                         to add to the current element
   * @return {p5.Element}
   * @example
   * <div class='norender'><code>
   * var div0 = createDiv('this is the parent');
   * var div1 = createDiv('this is the child');
   * div0.child(div1); // use p5.Element
   * </code></div>
   * <div class='norender'><code>
   * var div0 = createDiv('this is the parent');
   * var div1 = createDiv('this is the child');
   * div1.id('apples');
   * div0.child('apples'); // use id
   * </code></div>
   * <div class='norender'><code>
   * var div0 = createDiv('this is the parent');
   * var elt = document.getElementById('myChildDiv');
   * div0.child(elt); // use element from page
   * </code></div>
   */
  p5.Element.prototype.child = function(c) {
    if (typeof c === 'undefined') {
      return this.elt.childNodes;
    }
    if (typeof c === 'string') {
      if (c[0] === '#') {
        c = c.substring(1);
      }
      c = document.getElementById(c);
    } else if (c instanceof p5.Element) {
      c = c.elt;
    }
    this.elt.appendChild(c);
    return this;
  };

  /**
   * Centers a p5 Element either vertically, horizontally,
   * or both, relative to its parent or according to
   * the body if the Element has no parent. If no argument is passed
   * the Element is aligned both vertically and horizontally.
   *
   * @method center
   * @param  {String} [align]       passing 'vertical', 'horizontal' aligns element accordingly
   * @return {Object|p5.Element} pointer to p5.Element
   * @example
   * <div><code>
   * function setup() {
   *   var div = createDiv('').size(10, 10);
   *   div.style('background-color', 'orange');
   *   div.center();
   * }
   * </code></div>
   */
  p5.Element.prototype.center = function(align) {
    var style = this.elt.style.display;
    var hidden = this.elt.style.display === 'none';
    var parentHidden = this.parent().style.display === 'none';
    var pos = { x: this.elt.offsetLeft, y: this.elt.offsetTop };

    if (hidden) this.show();

    this.elt.style.display = 'block';
    this.position(0, 0);

    if (parentHidden) this.parent().style.display = 'block';

    var wOffset = Math.abs(this.parent().offsetWidth - this.elt.offsetWidth);
    var hOffset = Math.abs(this.parent().offsetHeight - this.elt.offsetHeight);
    var y = pos.y;
    var x = pos.x;

    if (align === 'both' || align === undefined) {
      this.position(wOffset / 2, hOffset / 2);
    } else if (align === 'horizontal') {
      this.position(wOffset / 2, y);
    } else if (align === 'vertical') {
      this.position(x, hOffset / 2);
    }

    this.style('display', style);

    if (hidden) this.hide();

    if (parentHidden) this.parent().style.display = 'none';

    return this;
  };

  /**
   *
   * If an argument is given, sets the inner HTML of the element,
   * replacing any existing html. If true is included as a second
   * argument, html is appended instead of replacing existing html.
   * If no arguments are given, returns
   * the inner HTML of the element.
   *
   * @for p5.Element
   * @method html
   * @param  {String} [html] the HTML to be placed inside the element
   * @param  {boolean} [append] whether to append HTML to existing
   * @return {Object|p5.Element|String}
   * @example
   * <div class='norender'><code>
   * var div = createDiv('').size(100, 100);
   * div.html('hi');
   * </code></div>
   * <div class='norender'><code>
   * var div = createDiv('Hello ').size(100, 100);
   * div.html('World', true);
   * </code></div>
   */
  p5.Element.prototype.html = function() {
    if (arguments.length === 0) {
      return this.elt.innerHTML;
    } else if (arguments[1]) {
      this.elt.innerHTML += arguments[0];
      return this;
    } else {
      this.elt.innerHTML = arguments[0];
      return this;
    }
  };

  /**
   *
   * Sets the position of the element relative to (0, 0) of the
   * window. Essentially, sets position:absolute and left and top
   * properties of style. If no arguments given returns the x and y position
   * of the element in an object.
   *
   * @method position
   * @param  {Number} [x] x-position relative to upper left of window
   * @param  {Number} [y] y-position relative to upper left of window
   * @return {Object|p5.Element}
   * @example
   * <div><code class='norender'>
   * function setup() {
   *   var cnv = createCanvas(100, 100);
   *   // positions canvas 50px to the right and 100px
   *   // below upper left corner of the window
   *   cnv.position(50, 100);
   * }
   * </code></div>
   */
  p5.Element.prototype.position = function() {
    if (arguments.length === 0) {
      return { x: this.elt.offsetLeft, y: this.elt.offsetTop };
    } else {
      this.elt.style.position = 'absolute';
      this.elt.style.left = arguments[0] + 'px';
      this.elt.style.top = arguments[1] + 'px';
      this.x = arguments[0];
      this.y = arguments[1];
      return this;
    }
  };

  /* Helper method called by p5.Element.style() */
  p5.Element.prototype._translate = function() {
    this.elt.style.position = 'absolute';
    // save out initial non-translate transform styling
    var transform = '';
    if (this.elt.style.transform) {
      transform = this.elt.style.transform.replace(/translate3d\(.*\)/g, '');
      transform = transform.replace(/translate[X-Z]?\(.*\)/g, '');
    }
    if (arguments.length === 2) {
      this.elt.style.transform =
        'translate(' + arguments[0] + 'px, ' + arguments[1] + 'px)';
    } else if (arguments.length > 2) {
      this.elt.style.transform =
        'translate3d(' +
        arguments[0] +
        'px,' +
        arguments[1] +
        'px,' +
        arguments[2] +
        'px)';
      if (arguments.length === 3) {
        this.elt.parentElement.style.perspective = '1000px';
      } else {
        this.elt.parentElement.style.perspective = arguments[3] + 'px';
      }
    }
    // add any extra transform styling back on end
    this.elt.style.transform += transform;
    return this;
  };

  /* Helper method called by p5.Element.style() */
  p5.Element.prototype._rotate = function() {
    // save out initial non-rotate transform styling
    var transform = '';
    if (this.elt.style.transform) {
      transform = this.elt.style.transform.replace(/rotate3d\(.*\)/g, '');
      transform = transform.replace(/rotate[X-Z]?\(.*\)/g, '');
    }

    if (arguments.length === 1) {
      this.elt.style.transform = 'rotate(' + arguments[0] + 'deg)';
    } else if (arguments.length === 2) {
      this.elt.style.transform =
        'rotate(' + arguments[0] + 'deg, ' + arguments[1] + 'deg)';
    } else if (arguments.length === 3) {
      this.elt.style.transform = 'rotateX(' + arguments[0] + 'deg)';
      this.elt.style.transform += 'rotateY(' + arguments[1] + 'deg)';
      this.elt.style.transform += 'rotateZ(' + arguments[2] + 'deg)';
    }
    // add remaining transform back on
    this.elt.style.transform += transform;
    return this;
  };

  /**
   * Sets the given style (css) property (1st arg) of the element with the
   * given value (2nd arg). If a single argument is given, .style()
   * returns the value of the given property; however, if the single argument
   * is given in css syntax ('text-align:center'), .style() sets the css
   * appropriatly. .style() also handles 2d and 3d css transforms. If
   * the 1st arg is 'rotate', 'translate', or 'position', the following arguments
   * accept Numbers as values. ('translate', 10, 100, 50);
   *
   * @method style
   * @param  {String} property   property to be set
   * @param  {String|Number|p5.Color} [value]   value to assign to property (only String|Number for rotate/translate)
   * @param  {String|Number|p5.Color} [value2]  position can take a 2nd value
   * @param  {String|Number|p5.Color} [value3]  translate can take a 2nd & 3rd value
   * @return {String|Object|p5.Element} value of property, if no value is specified
   * or p5.Element
   * @example
   * <div><code class='norender'>
   * var myDiv = createDiv('I like pandas.');
   * myDiv.style('font-size', '18px');
   * myDiv.style('color', '#ff0000');
   * </code></div>
   * <div><code class='norender'>
   * var col = color(25, 23, 200, 50);
   * var button = createButton('button');
   * button.style('background-color', col);
   * button.position(10, 10);
   * </code></div>
   * <div><code class='norender'>
   * var myDiv = createDiv('I like lizards.');
   * myDiv.style('position', 20, 20);
   * myDiv.style('rotate', 45);
   * </code></div>
   * <div><code class='norender'>
   * var myDiv;
   * function setup() {
   *   background(200);
   *   myDiv = createDiv('I like gray.');
   *   myDiv.position(20, 20);
   * }
   *
   * function draw() {
   *   myDiv.style('font-size', mouseX + 'px');
   * }
   * </code></div>
   */
  p5.Element.prototype.style = function(prop, val) {
    var self = this;

    if (val instanceof p5.Color) {
      val =
        'rgba(' +
        val.levels[0] +
        ',' +
        val.levels[1] +
        ',' +
        val.levels[2] +
        ',' +
        val.levels[3] / 255 +
        ')';
    }

    if (typeof val === 'undefined') {
      if (prop.indexOf(':') === -1) {
        var styles = window.getComputedStyle(self.elt);
        var style = styles.getPropertyValue(prop);
        return style;
      } else {
        var attrs = prop.split(';');
        for (var i = 0; i < attrs.length; i++) {
          var parts = attrs[i].split(':');
          if (parts[0] && parts[1]) {
            this.elt.style[parts[0].trim()] = parts[1].trim();
          }
        }
      }
    } else {
      if (prop === 'rotate' || prop === 'translate' || prop === 'position') {
        var trans = Array.prototype.shift.apply(arguments);
        var f = this[trans] || this['_' + trans];
        f.apply(this, arguments);
      } else {
        this.elt.style[prop] = val;
        if (
          prop === 'width' ||
          prop === 'height' ||
          prop === 'left' ||
          prop === 'top'
        ) {
          var numVal = val.replace(/\D+/g, '');
          this[prop] = parseInt(numVal, 10); // pend: is this necessary?
        }
      }
    }
    return this;
  };

  /**
   *
   * Adds a new attribute or changes the value of an existing attribute
   * on the specified element. If no value is specified, returns the
   * value of the given attribute, or null if attribute is not set.
   *
   * @method attribute
   * @param  {String} attr       attribute to set
   * @param  {String} [value]    value to assign to attribute
   * @return {String|Object|p5.Element} value of attribute, if no value is
   *                             specified or p5.Element
   * @example
   * <div class='norender'><code>
   * var myDiv = createDiv('I like pandas.');
   * myDiv.attribute('align', 'center');
   * </code></div>
   */
  p5.Element.prototype.attribute = function(attr, value) {
    //handling for checkboxes and radios to ensure options get
    //attributes not divs
    if (
      this.elt.firstChild != null &&
      (this.elt.firstChild.type === 'checkbox' ||
        this.elt.firstChild.type === 'radio')
    ) {
      if (typeof value === 'undefined') {
        return this.elt.firstChild.getAttribute(attr);
      } else {
        for (var i = 0; i < this.elt.childNodes.length; i++) {
          this.elt.childNodes[i].setAttribute(attr, value);
        }
      }
    } else if (typeof value === 'undefined') {
      return this.elt.getAttribute(attr);
    } else {
      this.elt.setAttribute(attr, value);
      return this;
    }
  };

  /**
   *
   * Removes an attribute on the specified element.
   *
   * @method removeAttribute
   * @param  {String} attr       attribute to remove
   * @return {Object|p5.Element}
   *
   * @example
   * <div><code>
   * var button;
   * var checkbox;
   *
   * function setup() {
   *   checkbox = createCheckbox('enable', true);
   *   checkbox.changed(enableButton);
   *   button = createButton('button');
   *   button.position(10, 10);
   * }
   *
   * function enableButton() {
   *   if (this.checked()) {
   *     // Re-enable the button
   *     button.removeAttribute('disabled');
   *   } else {
   *     // Disable the button
   *     button.attribute('disabled', '');
   *   }
   * }
   * </code></div>
   */
  p5.Element.prototype.removeAttribute = function(attr) {
    if (
      this.elt.firstChild != null &&
      (this.elt.firstChild.type === 'checkbox' ||
        this.elt.firstChild.type === 'radio')
    ) {
      for (var i = 0; i < this.elt.childNodes.length; i++) {
        this.elt.childNodes[i].removeAttribute(attr);
      }
    }
    this.elt.removeAttribute(attr);
    return this;
  };

  /**
   * Either returns the value of the element if no arguments
   * given, or sets the value of the element.
   *
   * @method value
   * @param  {String|Number}     [value]
   * @return {String|Object|p5.Element} value of element if no value is specified or p5.Element
   * @example
   * <div class='norender'><code>
   * // gets the value
   * var inp;
   * function setup() {
   *   inp = createInput('');
   * }
   *
   * function mousePressed() {
   *   print(inp.value());
   * }
   * </code></div>
   * <div class='norender'><code>
   * // sets the value
   * var inp;
   * function setup() {
   *   inp = createInput('myValue');
   * }
   *
   * function mousePressed() {
   *   inp.value('myValue');
   * }
   * </code></div>
   */
  p5.Element.prototype.value = function() {
    if (arguments.length > 0) {
      this.elt.value = arguments[0];
      return this;
    } else {
      if (this.elt.type === 'range') {
        return parseFloat(this.elt.value);
      } else return this.elt.value;
    }
  };

  /**
   *
   * Shows the current element. Essentially, setting display:block for the style.
   *
   * @method show
   * @return {Object|p5.Element}
   * @example
   * <div class='norender'><code>
   * var div = createDiv('div');
   * div.style('display', 'none');
   * div.show(); // turns display to block
   * </code></div>
   */
  p5.Element.prototype.show = function() {
    this.elt.style.display = 'block';
    return this;
  };

  /**
   * Hides the current element. Essentially, setting display:none for the style.
   *
   * @method hide
   * @return {Object|p5.Element}
   * @example
   * <div class='norender'><code>
   * var div = createDiv('this is a div');
   * div.hide();
   * </code></div>
   */
  p5.Element.prototype.hide = function() {
    this.elt.style.display = 'none';
    return this;
  };

  /**
   *
   * Sets the width and height of the element. AUTO can be used to
   * only adjust one dimension. If no arguments given returns the width and height
   * of the element in an object.
   *
   * @method size
   * @param  {Number|Constant} [w] width of the element, either AUTO, or a number
   * @param  {Number|Constant} [h] height of the element, either AUTO, or a number
   * @return {Object|p5.Element}
   * @example
   * <div class='norender'><code>
   * var div = createDiv('this is a div');
   * div.size(100, 100);
   * </code></div>
   */
  p5.Element.prototype.size = function(w, h) {
    if (arguments.length === 0) {
      return { width: this.elt.offsetWidth, height: this.elt.offsetHeight };
    } else {
      var aW = w;
      var aH = h;
      var AUTO = p5.prototype.AUTO;
      if (aW !== AUTO || aH !== AUTO) {
        if (aW === AUTO) {
          aW = h * this.width / this.height;
        } else if (aH === AUTO) {
          aH = w * this.height / this.width;
        }
        // set diff for cnv vs normal div
        if (this.elt instanceof HTMLCanvasElement) {
          var j = {};
          var k = this.elt.getContext('2d');
          var prop;
          for (prop in k) {
            j[prop] = k[prop];
          }
          this.elt.setAttribute('width', aW * this._pInst._pixelDensity);
          this.elt.setAttribute('height', aH * this._pInst._pixelDensity);
          this.elt.setAttribute(
            'style',
            'width:' + aW + 'px; height:' + aH + 'px'
          );
          this._pInst.scale(
            this._pInst._pixelDensity,
            this._pInst._pixelDensity
          );
          for (prop in j) {
            this.elt.getContext('2d')[prop] = j[prop];
          }
        } else {
          this.elt.style.width = aW + 'px';
          this.elt.style.height = aH + 'px';
          this.elt.width = aW;
          this.elt.height = aH;
          this.width = aW;
          this.height = aH;
        }

        this.width = this.elt.offsetWidth;
        this.height = this.elt.offsetHeight;

        if (this._pInst) {
          // main canvas associated with p5 instance
          if (this._pInst._curElement.elt === this.elt) {
            this._pInst._setProperty('width', this.elt.offsetWidth);
            this._pInst._setProperty('height', this.elt.offsetHeight);
          }
        }
      }
      return this;
    }
  };

  /**
   * Removes the element and deregisters all listeners.
   * @method remove
   * @example
   * <div class='norender'><code>
   * var myDiv = createDiv('this is some text');
   * myDiv.remove();
   * </code></div>
   */
  p5.Element.prototype.remove = function() {
    // deregister events
    for (var ev in this._events) {
      this.elt.removeEventListener(ev, this._events[ev]);
    }
    if (this.elt.parentNode) {
      this.elt.parentNode.removeChild(this.elt);
    }
    delete this;
  };

  // =============================================================================
  //                         p5.MediaElement additions
  // =============================================================================

  /**
   * Extends p5.Element to handle audio and video. In addition to the methods
   * of p5.Element, it also contains methods for controlling media. It is not
   * called directly, but p5.MediaElements are created by calling createVideo,
   * createAudio, and createCapture.
   *
   * @class p5.MediaElement
   * @constructor
   * @param {String} elt DOM node that is wrapped
   */
  p5.MediaElement = function(elt, pInst) {
    p5.Element.call(this, elt, pInst);

    var self = this;
    this.elt.crossOrigin = 'anonymous';

    this._prevTime = 0;
    this._cueIDCounter = 0;
    this._cues = [];
    this._pixelDensity = 1;
    this._modified = false;

    /**
     * Path to the media element source.
     *
     * @property src
     * @return {String} src
     * @example
     * <div><code>
     * var ele;
     *
     * function setup() {
     *   background(250);
     *
     *   //p5.MediaElement objects are usually created
     *   //by calling the createAudio(), createVideo(),
     *   //and createCapture() functions.
     *
     *   //In this example we create
     *   //a new p5.MediaElement via createAudio().
     *   ele = createAudio('assets/beat.mp3');
     *
     *   //We'll set up our example so that
     *   //when you click on the text,
     *   //an alert box displays the MediaElement's
     *   //src field.
     *   textAlign(CENTER);
     *   text('Click Me!', width / 2, height / 2);
     * }
     *
     * function mouseClicked() {
     *   //here we test if the mouse is over the
     *   //canvas element when it's clicked
     *   if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
     *     //Show our p5.MediaElement's src field
     *     alert(ele.src);
     *   }
     * }
     * </code></div>
     */
    Object.defineProperty(self, 'src', {
      get: function() {
        var firstChildSrc = self.elt.children[0].src;
        var srcVal = self.elt.src === window.location.href ? '' : self.elt.src;
        var ret =
          firstChildSrc === window.location.href ? srcVal : firstChildSrc;
        return ret;
      },
      set: function(newValue) {
        for (var i = 0; i < self.elt.children.length; i++) {
          self.elt.removeChild(self.elt.children[i]);
        }
        var source = document.createElement('source');
        source.src = newValue;
        elt.appendChild(source);
        self.elt.src = newValue;
        self.modified = true;
      }
    });

    // private _onended callback, set by the method: onended(callback)
    self._onended = function() {};
    self.elt.onended = function() {
      self._onended(self);
    };
  };
  p5.MediaElement.prototype = Object.create(p5.Element.prototype);

  /**
   * Play an HTML5 media element.
   *
   * @method play
   * @return {Object|p5.Element}
   * @example
   * <div><code>
   * var ele;
   *
   * function setup() {
   *   //p5.MediaElement objects are usually created
   *   //by calling the createAudio(), createVideo(),
   *   //and createCapture() functions.
   *
   *   //In this example we create
   *   //a new p5.MediaElement via createAudio().
   *   ele = createAudio('assets/beat.mp3');
   *
   *   background(250);
   *   textAlign(CENTER);
   *   text('Click to Play!', width / 2, height / 2);
   * }
   *
   * function mouseClicked() {
   *   //here we test if the mouse is over the
   *   //canvas element when it's clicked
   *   if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
   *     //Here we call the play() function on
   *     //the p5.MediaElement we created above.
   *     //This will start the audio sample.
   *     ele.play();
   *
   *     background(200);
   *     text('You clicked Play!', width / 2, height / 2);
   *   }
   * }
   * </code></div>
   */
  p5.MediaElement.prototype.play = function() {
    if (this.elt.currentTime === this.elt.duration) {
      this.elt.currentTime = 0;
    }

    if (this.elt.readyState > 1) {
      this.elt.play();
    } else {
      // in Chrome, playback cannot resume after being stopped and must reload
      this.elt.load();
      this.elt.play();
    }
    return this;
  };

  /**
   * Stops an HTML5 media element (sets current time to zero).
   *
   * @method stop
   * @return {Object|p5.Element}
   * @example
   * <div><code>
   * //This example both starts
   * //and stops a sound sample
   * //when the user clicks the canvas
   *
   * //We will store the p5.MediaElement
   * //object in here
   * var ele;
   *
   * //while our audio is playing,
   * //this will be set to true
   * var sampleIsPlaying = false;
   *
   * function setup() {
   *   //Here we create a p5.MediaElement object
   *   //using the createAudio() function.
   *   ele = createAudio('assets/beat.mp3');
   *   background(200);
   *   textAlign(CENTER);
   *   text('Click to play!', width / 2, height / 2);
   * }
   *
   * function mouseClicked() {
   *   //here we test if the mouse is over the
   *   //canvas element when it's clicked
   *   if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
   *     background(200);
   *
   *     if (sampleIsPlaying) {
   *       //if the sample is currently playing
   *       //calling the stop() function on
   *       //our p5.MediaElement will stop
   *       //it and reset its current
   *       //time to 0 (i.e. it will start
   *       //at the beginning the next time
   *       //you play it)
   *       ele.stop();
   *
   *       sampleIsPlaying = false;
   *       text('Click to play!', width / 2, height / 2);
   *     } else {
   *       //loop our sound element until we
   *       //call ele.stop() on it.
   *       ele.loop();
   *
   *       sampleIsPlaying = true;
   *       text('Click to stop!', width / 2, height / 2);
   *     }
   *   }
   * }
   * </code></div>
   */
  p5.MediaElement.prototype.stop = function() {
    this.elt.pause();
    this.elt.currentTime = 0;
    return this;
  };

  /**
   * Pauses an HTML5 media element.
   *
   * @method pause
   * @return {Object|p5.Element}
   * @example
   * <div><code>
   * //This example both starts
   * //and pauses a sound sample
   * //when the user clicks the canvas
   *
   * //We will store the p5.MediaElement
   * //object in here
   * var ele;
   *
   * //while our audio is playing,
   * //this will be set to true
   * var sampleIsPlaying = false;
   *
   * function setup() {
   *   //Here we create a p5.MediaElement object
   *   //using the createAudio() function.
   *   ele = createAudio('assets/lucky_dragons.mp3');
   *   background(200);
   *   textAlign(CENTER);
   *   text('Click to play!', width / 2, height / 2);
   * }
   *
   * function mouseClicked() {
   *   //here we test if the mouse is over the
   *   //canvas element when it's clicked
   *   if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
   *     background(200);
   *
   *     if (sampleIsPlaying) {
   *       //Calling pause() on our
   *       //p5.MediaElement will stop it
   *       //playing, but when we call the
   *       //loop() or play() functions
   *       //the sample will start from
   *       //where we paused it.
   *       ele.pause();
   *
   *       sampleIsPlaying = false;
   *       text('Click to resume!', width / 2, height / 2);
   *     } else {
   *       //loop our sound element until we
   *       //call ele.pause() on it.
   *       ele.loop();
   *
   *       sampleIsPlaying = true;
   *       text('Click to pause!', width / 2, height / 2);
   *     }
   *   }
   * }
   * </code></div>
   */
  p5.MediaElement.prototype.pause = function() {
    this.elt.pause();
    return this;
  };

  /**
   * Set 'loop' to true for an HTML5 media element, and starts playing.
   *
   * @method loop
   * @return {Object|p5.Element}
   * @example
   * <div><code>
   * //Clicking the canvas will loop
   * //the audio sample until the user
   * //clicks again to stop it
   *
   * //We will store the p5.MediaElement
   * //object in here
   * var ele;
   *
   * //while our audio is playing,
   * //this will be set to true
   * var sampleIsLooping = false;
   *
   * function setup() {
   *   //Here we create a p5.MediaElement object
   *   //using the createAudio() function.
   *   ele = createAudio('assets/lucky_dragons.mp3');
   *   background(200);
   *   textAlign(CENTER);
   *   text('Click to loop!', width / 2, height / 2);
   * }
   *
   * function mouseClicked() {
   *   //here we test if the mouse is over the
   *   //canvas element when it's clicked
   *   if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
   *     background(200);
   *
   *     if (!sampleIsLooping) {
   *       //loop our sound element until we
   *       //call ele.stop() on it.
   *       ele.loop();
   *
   *       sampleIsLooping = true;
   *       text('Click to stop!', width / 2, height / 2);
   *     } else {
   *       ele.stop();
   *
   *       sampleIsLooping = false;
   *       text('Click to loop!', width / 2, height / 2);
   *     }
   *   }
   * }
   * </code></div>
   */
  p5.MediaElement.prototype.loop = function() {
    this.elt.setAttribute('loop', true);
    this.play();
    return this;
  };
  /**
   * Set 'loop' to false for an HTML5 media element. Element will stop
   * when it reaches the end.
   *
   * @method noLoop
   * @return {Object|p5.Element}
   * @example
   * <div><code>
   * //This example both starts
   * //and stops loop of sound sample
   * //when the user clicks the canvas
   *
   * //We will store the p5.MediaElement
   * //object in here
   * var ele;
   * //while our audio is playing,
   * //this will be set to true
   * var sampleIsPlaying = false;
   *
   * function setup() {
   *   //Here we create a p5.MediaElement object
   *   //using the createAudio() function.
   *   ele = createAudio('assets/beat.mp3');
   *   background(200);
   *   textAlign(CENTER);
   *   text('Click to play!', width / 2, height / 2);
   * }
   *
   * function mouseClicked() {
   *   //here we test if the mouse is over the
   *   //canvas element when it's clicked
   *   if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
   *     background(200);
   *
   *     if (sampleIsPlaying) {
   *       ele.noLoop();
   *       text('No more Loops!', width / 2, height / 2);
   *     } else {
   *       ele.loop();
   *       sampleIsPlaying = true;
   *       text('Click to stop looping!', width / 2, height / 2);
   *     }
   *   }
   * }
   * </code></div>
   *
   */
  p5.MediaElement.prototype.noLoop = function() {
    this.elt.setAttribute('loop', false);
    return this;
  };

  /**
   * Set HTML5 media element to autoplay or not.
   *
   * @method autoplay
   * @param {Boolean} autoplay whether the element should autoplay
   * @return {Object|p5.Element}
   */
  p5.MediaElement.prototype.autoplay = function(val) {
    this.elt.setAttribute('autoplay', val);
    return this;
  };

  /**
   * Sets volume for this HTML5 media element. If no argument is given,
   * returns the current volume.
   *
   * @param {Number}            [val] volume between 0.0 and 1.0
   * @return {Number|p5.MediaElement} current volume or p5.MediaElement
   * @method volume
   *
   * @example
   * <div><code>
   * var ele;
   * function setup() {
   *   // p5.MediaElement objects are usually created
   *   // by calling the createAudio(), createVideo(),
   *   // and createCapture() functions.
   *   // In this example we create
   *   // a new p5.MediaElement via createAudio().
   *   ele = createAudio('assets/lucky_dragons.mp3');
   *   background(250);
   *   textAlign(CENTER);
   *   text('Click to Play!', width / 2, height / 2);
   * }
   * function mouseClicked() {
   *   // Here we call the volume() function
   *   // on the sound element to set its volume
   *   // Volume must be between 0.0 and 1.0
   *   ele.volume(0.2);
   *   ele.play();
   *   background(200);
   *   text('You clicked Play!', width / 2, height / 2);
   * }
   * </code></div>
   * <div><code>
   * var audio;
   * var counter = 0;
   *
   * function loaded() {
   *   audio.play();
   * }
   *
   * function setup() {
   *   audio = createAudio('assets/lucky_dragons.mp3', loaded);
   *   textAlign(CENTER);
   * }
   *
   * function draw() {
   *   if (counter === 0) {
   *     background(0, 255, 0);
   *     text('volume(0.9)', width / 2, height / 2);
   *   } else if (counter === 1) {
   *     background(255, 255, 0);
   *     text('volume(0.5)', width / 2, height / 2);
   *   } else if (counter === 2) {
   *     background(255, 0, 0);
   *     text('volume(0.1)', width / 2, height / 2);
   *   }
   * }
   *
   * function mousePressed() {
   *   counter++;
   *   if (counter === 0) {
   *     audio.volume(0.9);
   *   } else if (counter === 1) {
   *     audio.volume(0.5);
   *   } else if (counter === 2) {
   *     audio.volume(0.1);
   *   } else {
   *     counter = 0;
   *     audio.volume(0.9);
   *   }
   * }
   * </code>
   * </div>
   */
  p5.MediaElement.prototype.volume = function(val) {
    if (typeof val === 'undefined') {
      return this.elt.volume;
    } else {
      this.elt.volume = val;
    }
  };

  /**
   * If no arguments are given, returns the current playback speed of the
   * element. The speed parameter sets the speed where 2.0 will play the
   * element twice as fast, 0.5 will play at half the speed, and -1 will play
   * the element in normal speed in reverse.(Note that not all browsers support
   * backward playback and even if they do, playback might not be smooth.)
   *
   * @method speed
   * @param {Number} [speed]  speed multiplier for element playback
   * @return {Number|Object|p5.MediaElement} current playback speed or p5.MediaElement
   * @example
   * <div class='norender'><code>
   * //Clicking the canvas will loop
   * //the audio sample until the user
   * //clicks again to stop it
   *
   * //We will store the p5.MediaElement
   * //object in here
   * var ele;
   * var button;
   *
   * function setup() {
   *   createCanvas(710, 400);
   *   //Here we create a p5.MediaElement object
   *   //using the createAudio() function.
   *   ele = createAudio('assets/beat.mp3');
   *   ele.loop();
   *   background(200);
   *
   *   button = createButton('2x speed');
   *   button.position(100, 68);
   *   button.mousePressed(twice_speed);
   *
   *   button = createButton('half speed');
   *   button.position(200, 68);
   *   button.mousePressed(half_speed);
   *
   *   button = createButton('reverse play');
   *   button.position(300, 68);
   *   button.mousePressed(reverse_speed);
   *
   *   button = createButton('STOP');
   *   button.position(400, 68);
   *   button.mousePressed(stop_song);
   *
   *   button = createButton('PLAY!');
   *   button.position(500, 68);
   *   button.mousePressed(play_speed);
   * }
   *
   * function twice_speed() {
   *   ele.speed(2);
   * }
   *
   * function half_speed() {
   *   ele.speed(0.5);
   * }
   *
   * function reverse_speed() {
   *   ele.speed(-1);
   * }
   *
   * function stop_song() {
   *   ele.stop();
   * }
   *
   * function play_speed() {
   *   ele.play();
   * }
   * </code></div>
   */
  p5.MediaElement.prototype.speed = function(val) {
    if (typeof val === 'undefined') {
      return this.elt.playbackRate;
    } else {
      this.elt.playbackRate = val;
    }
  };

  /**
   * If no arguments are given, returns the current time of the element.
   * If an argument is given the current time of the element is set to it.
   *
   * @method time
   * @param {Number} [time] time to jump to (in seconds)
   * @return {Number|Object|p5.MediaElement} current time (in seconds)
   *                                 or p5.MediaElement
   * @example
   * <div><code>
   * var ele;
   * var beginning = true;
   * function setup() {
   *   //p5.MediaElement objects are usually created
   *   //by calling the createAudio(), createVideo(),
   *   //and createCapture() functions.
   *
   *   //In this example we create
   *   //a new p5.MediaElement via createAudio().
   *   ele = createAudio('assets/lucky_dragons.mp3');
   *   background(250);
   *   textAlign(CENTER);
   *   text('start at beginning', width / 2, height / 2);
   * }
   *
   * // this function fires with click anywhere
   * function mousePressed() {
   *   if (beginning === true) {
   *     // here we start the sound at the beginning
   *     // time(0) is not necessary here
   *     // as this produces the same result as
   *     // play()
   *     ele.play().time(0);
   *     background(200);
   *     text('jump 2 sec in', width / 2, height / 2);
   *     beginning = false;
   *   } else {
   *     // here we jump 2 seconds into the sound
   *     ele.play().time(2);
   *     background(250);
   *     text('start at beginning', width / 2, height / 2);
   *     beginning = true;
   *   }
   * }
   * </code></div>
   */

  p5.MediaElement.prototype.time = function(val) {
    if (typeof val === 'undefined') {
      return this.elt.currentTime;
    } else {
      this.elt.currentTime = val;
    }
  };

  /**
   * Returns the duration of the HTML5 media element.
   *
   * @method duration
   * @return {Number} duration
   *
   * @example
   * <div><code>
   * var ele;
   * function setup() {
   *   //p5.MediaElement objects are usually created
   *   //by calling the createAudio(), createVideo(),
   *   //and createCapture() functions.
   *   //In this example we create
   *   //a new p5.MediaElement via createAudio().
   *   ele = createAudio('assets/doorbell.mp3');
   *   background(250);
   *   textAlign(CENTER);
   *   text('Click to know the duration!', 10, 25, 70, 80);
   * }
   * function mouseClicked() {
   *   ele.play();
   *   background(200);
   *   //ele.duration dislpays the duration
   *   text(ele.duration() + ' seconds', width / 2, height / 2);
   * }
   * </code></div>
   */
  p5.MediaElement.prototype.duration = function() {
    return this.elt.duration;
  };
  p5.MediaElement.prototype.pixels = [];
  p5.MediaElement.prototype.loadPixels = function() {
    if (!this.canvas) {
      this.canvas = document.createElement('canvas');
      this.drawingContext = this.canvas.getContext('2d');
    }
    if (this.loadedmetadata) {
      // wait for metadata for w/h
      if (this.canvas.width !== this.elt.width) {
        this.canvas.width = this.elt.width;
        this.canvas.height = this.elt.height;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
      }
      this.drawingContext.drawImage(
        this.elt,
        0,
        0,
        this.canvas.width,
        this.canvas.height
      );
      p5.Renderer2D.prototype.loadPixels.call(this);
    }
    this.setModified(true);
    return this;
  };
  p5.MediaElement.prototype.updatePixels = function(x, y, w, h) {
    if (this.loadedmetadata) {
      // wait for metadata
      p5.Renderer2D.prototype.updatePixels.call(this, x, y, w, h);
    }
    this.setModified(true);
    return this;
  };
  p5.MediaElement.prototype.get = function(x, y, w, h) {
    if (this.loadedmetadata) {
      // wait for metadata
      return p5.Renderer2D.prototype.get.call(this, x, y, w, h);
    } else if (typeof x === 'undefined') {
      return new p5.Image(1, 1);
    } else if (w > 1) {
      return new p5.Image(x, y, w, h);
    } else {
      return [0, 0, 0, 255];
    }
  };
  p5.MediaElement.prototype.set = function(x, y, imgOrCol) {
    if (this.loadedmetadata) {
      // wait for metadata
      p5.Renderer2D.prototype.set.call(this, x, y, imgOrCol);
      this.setModified(true);
    }
  };
  p5.MediaElement.prototype.copy = function() {
    p5.Renderer2D.prototype.copy.apply(this, arguments);
  };
  p5.MediaElement.prototype.mask = function() {
    this.loadPixels();
    this.setModified(true);
    p5.Image.prototype.mask.apply(this, arguments);
  };
  /**
   * helper method for web GL mode to figure out if the element
   * has been modified and might need to be re-uploaded to texture
   * memory between frames.
   * @method isModified
   * @private
   * @return {boolean} a boolean indicating whether or not the
   * image has been updated or modified since last texture upload.
   */
  p5.MediaElement.prototype.isModified = function() {
    return this._modified;
  };
  /**
   * helper method for web GL mode to indicate that an element has been
   * changed or unchanged since last upload. gl texture upload will
   * set this value to false after uploading the texture; or might set
   * it to true if metadata has become available but there is no actual
   * texture data available yet..
   * @method setModified
   * @param {boolean} val sets whether or not the element has been
   * modified.
   * @private
   */
  p5.MediaElement.prototype.setModified = function(value) {
    this._modified = value;
  };
  /**
   * Schedule an event to be called when the audio or video
   * element reaches the end. If the element is looping,
   * this will not be called. The element is passed in
   * as the argument to the onended callback.
   *
   * @method  onended
   * @param  {Function} callback function to call when the
   *                             soundfile has ended. The
   *                             media element will be passed
   *                             in as the argument to the
   *                             callback.
   * @return {Object|p5.MediaElement}
   * @example
   * <div><code>
   * function setup() {
   *   var audioEl = createAudio('assets/beat.mp3');
   *   audioEl.showControls();
   *   audioEl.onended(sayDone);
   * }
   *
   * function sayDone(elt) {
   *   alert('done playing ' + elt.src);
   * }
   * </code></div>
   */
  p5.MediaElement.prototype.onended = function(callback) {
    this._onended = callback;
    return this;
  };

  /*** CONNECT TO WEB AUDIO API / p5.sound.js ***/

  /**
   * Send the audio output of this element to a specified audioNode or
   * p5.sound object. If no element is provided, connects to p5's master
   * output. That connection is established when this method is first called.
   * All connections are removed by the .disconnect() method.
   *
   * This method is meant to be used with the p5.sound.js addon library.
   *
   * @method  connect
   * @param  {AudioNode|Object} audioNode AudioNode from the Web Audio API,
   * or an object from the p5.sound library
   */
  p5.MediaElement.prototype.connect = function(obj) {
    var audioContext, masterOutput;

    // if p5.sound exists, same audio context
    if (typeof p5.prototype.getAudioContext === 'function') {
      audioContext = p5.prototype.getAudioContext();
      masterOutput = p5.soundOut.input;
    } else {
      try {
        audioContext = obj.context;
        masterOutput = audioContext.destination;
      } catch (e) {
        throw 'connect() is meant to be used with Web Audio API or p5.sound.js';
      }
    }

    // create a Web Audio MediaElementAudioSourceNode if none already exists
    if (!this.audioSourceNode) {
      this.audioSourceNode = audioContext.createMediaElementSource(this.elt);

      // connect to master output when this method is first called
      this.audioSourceNode.connect(masterOutput);
    }

    // connect to object if provided
    if (obj) {
      if (obj.input) {
        this.audioSourceNode.connect(obj.input);
      } else {
        this.audioSourceNode.connect(obj);
      }
    } else {
      // otherwise connect to master output of p5.sound / AudioContext
      this.audioSourceNode.connect(masterOutput);
    }
  };

  /**
   * Disconnect all Web Audio routing, including to master output.
   * This is useful if you want to re-route the output through
   * audio effects, for example.
   *
   * @method  disconnect
   */
  p5.MediaElement.prototype.disconnect = function() {
    if (this.audioSourceNode) {
      this.audioSourceNode.disconnect();
    } else {
      throw 'nothing to disconnect';
    }
  };

  /*** SHOW / HIDE CONTROLS ***/

  /**
   * Show the default MediaElement controls, as determined by the web browser.
   *
   * @method  showControls
   * @example
   * <div><code>
   * var ele;
   * function setup() {
   *   //p5.MediaElement objects are usually created
   *   //by calling the createAudio(), createVideo(),
   *   //and createCapture() functions.
   *   //In this example we create
   *   //a new p5.MediaElement via createAudio()
   *   ele = createAudio('assets/lucky_dragons.mp3');
   *   background(200);
   *   textAlign(CENTER);
   *   text('Click to Show Controls!', 10, 25, 70, 80);
   * }
   * function mousePressed() {
   *   ele.showControls();
   *   background(200);
   *   text('Controls Shown', width / 2, height / 2);
   * }
   * </code></div>
   */
  p5.MediaElement.prototype.showControls = function() {
    // must set style for the element to show on the page
    this.elt.style['text-align'] = 'inherit';
    this.elt.controls = true;
  };

  /**
   * Hide the default mediaElement controls.
   * @method hideControls
   * @example
   * <div><code>
   * var ele;
   * function setup() {
   *   //p5.MediaElement objects are usually created
   *   //by calling the createAudio(), createVideo(),
   *   //and createCapture() functions.
   *   //In this example we create
   *   //a new p5.MediaElement via createAudio()
   *   ele = createAudio('assets/lucky_dragons.mp3');
   *   ele.showControls();
   *   background(200);
   *   textAlign(CENTER);
   *   text('Click to hide Controls!', 10, 25, 70, 80);
   * }
   * function mousePressed() {
   *   ele.hideControls();
   *   background(200);
   *   text('Controls hidden', width / 2, height / 2);
   * }
   * </code></div>
   */
  p5.MediaElement.prototype.hideControls = function() {
    this.elt.controls = false;
  };

  /*** SCHEDULE EVENTS ***/

  // Cue inspired by JavaScript setTimeout, and the
  // Tone.js Transport Timeline Event, MIT License Yotam Mann 2015 tonejs.org
  var Cue = function(callback, time, id, val) {
    this.callback = callback;
    this.time = time;
    this.id = id;
    this.val = val;
  };

  /**
   * Schedule events to trigger every time a MediaElement
   * (audio/video) reaches a playback cue point.
   *
   * Accepts a callback function, a time (in seconds) at which to trigger
   * the callback, and an optional parameter for the callback.
   *
   * Time will be passed as the first parameter to the callback function,
   * and param will be the second parameter.
   *
   *
   * @method  addCue
   * @param {Number}   time     Time in seconds, relative to this media
   *                             element's playback. For example, to trigger
   *                             an event every time playback reaches two
   *                             seconds, pass in the number 2. This will be
   *                             passed as the first parameter to
   *                             the callback function.
   * @param {Function} callback Name of a function that will be
   *                             called at the given time. The callback will
   *                             receive time and (optionally) param as its
   *                             two parameters.
   * @param {Object} [value]    An object to be passed as the
   *                             second parameter to the
   *                             callback function.
   * @return {Number} id ID of this cue,
   *                     useful for removeCue(id)
   * @example
   * <div><code>
   * function setup() {
   *   background(255, 255, 255);
   *
   *   var audioEl = createAudio('assets/beat.mp3');
   *   audioEl.showControls();
   *
   *   // schedule three calls to changeBackground
   *   audioEl.addCue(0.5, changeBackground, color(255, 0, 0));
   *   audioEl.addCue(1.0, changeBackground, color(0, 255, 0));
   *   audioEl.addCue(2.5, changeBackground, color(0, 0, 255));
   *   audioEl.addCue(3.0, changeBackground, color(0, 255, 255));
   *   audioEl.addCue(4.2, changeBackground, color(255, 255, 0));
   *   audioEl.addCue(5.0, changeBackground, color(255, 255, 0));
   * }
   *
   * function changeBackground(val) {
   *   background(val);
   * }
   * </code></div>
   */
  p5.MediaElement.prototype.addCue = function(time, callback, val) {
    var id = this._cueIDCounter++;

    var cue = new Cue(callback, time, id, val);
    this._cues.push(cue);

    if (!this.elt.ontimeupdate) {
      this.elt.ontimeupdate = this._onTimeUpdate.bind(this);
    }

    return id;
  };

  /**
   * Remove a callback based on its ID. The ID is returned by the
   * addCue method.
   * @method removeCue
   * @param  {Number} id ID of the cue, as returned by addCue
   * @example
   * <div><code>
   * var audioEl, id1, id2;
   * function setup() {
   *   background(255, 255, 255);
   *   audioEl = createAudio('assets/beat.mp3');
   *   audioEl.showControls();
   *   // schedule five calls to changeBackground
   *   id1 = audioEl.addCue(0.5, changeBackground, color(255, 0, 0));
   *   audioEl.addCue(1.0, changeBackground, color(0, 255, 0));
   *   audioEl.addCue(2.5, changeBackground, color(0, 0, 255));
   *   audioEl.addCue(3.0, changeBackground, color(0, 255, 255));
   *   id2 = audioEl.addCue(4.2, changeBackground, color(255, 255, 0));
   *   text('Click to remove first and last Cue!', 10, 25, 70, 80);
   * }
   * function mousePressed() {
   *   audioEl.removeCue(id1);
   *   audioEl.removeCue(id2);
   * }
   * function changeBackground(val) {
   *   background(val);
   * }
   * </code></div>
   */
  p5.MediaElement.prototype.removeCue = function(id) {
    for (var i = 0; i < this._cues.length; i++) {
      if (this._cues[i].id === id) {
        console.log(id);
        this._cues.splice(i, 1);
      }
    }

    if (this._cues.length === 0) {
      this.elt.ontimeupdate = null;
    }
  };

  /**
   * Remove all of the callbacks that had originally been scheduled
   * via the addCue method.
   * @method  clearCues
   * @param  {Number} id ID of the cue, as returned by addCue
   * @example
   * <div><code>
   * var audioEl;
   * function setup() {
   *   background(255, 255, 255);
   *   audioEl = createAudio('assets/beat.mp3');
   *   //Show the default MediaElement controls, as determined by the web browser
   *   audioEl.showControls();
   *   // schedule calls to changeBackground
   *   background(200);
   *   text('Click to change Cue!', 10, 25, 70, 80);
   *   audioEl.addCue(0.5, changeBackground, color(255, 0, 0));
   *   audioEl.addCue(1.0, changeBackground, color(0, 255, 0));
   *   audioEl.addCue(2.5, changeBackground, color(0, 0, 255));
   *   audioEl.addCue(3.0, changeBackground, color(0, 255, 255));
   *   audioEl.addCue(4.2, changeBackground, color(255, 255, 0));
   * }
   * function mousePressed() {
   *   // here we clear the scheduled callbacks
   *   audioEl.clearCues();
   *   // then we add some more callbacks
   *   audioEl.addCue(1, changeBackground, color(2, 2, 2));
   *   audioEl.addCue(3, changeBackground, color(255, 255, 0));
   * }
   * function changeBackground(val) {
   *   background(val);
   * }
   * </code></div>
   */
  p5.MediaElement.prototype.clearCues = function() {
    this._cues = [];
    this.elt.ontimeupdate = null;
  };

  // private method that checks for cues to be fired if events
  // have been scheduled using addCue(callback, time).
  p5.MediaElement.prototype._onTimeUpdate = function() {
    var playbackTime = this.time();

    for (var i = 0; i < this._cues.length; i++) {
      var callbackTime = this._cues[i].time;
      var val = this._cues[i].val;

      if (this._prevTime < callbackTime && callbackTime <= playbackTime) {
        // pass the scheduled callbackTime as parameter to the callback
        this._cues[i].callback(val);
      }
    }

    this._prevTime = playbackTime;
  };

  // =============================================================================
  //                         p5.File
  // =============================================================================

  /**
   * Base class for a file
   * Using this for createFileInput
   *
   * @class p5.File
   * @constructor
   * @param {File} file File that is wrapped
   */
  p5.File = function(file, pInst) {
    /**
     * Underlying File object. All normal File methods can be called on this.
     *
     * @property file
     */
    this.file = file;

    this._pInst = pInst;

    // Splitting out the file type into two components
    // This makes determining if image or text etc simpler
    var typeList = file.type.split('/');
    /**
     * File type (image, text, etc.)
     *
     * @property type
     */
    this.type = typeList[0];
    /**
     * File subtype (usually the file extension jpg, png, xml, etc.)
     *
     * @property subtype
     */
    this.subtype = typeList[1];
    /**
     * File name
     *
     * @property name
     */
    this.name = file.name;
    /**
     * File size
     *
     * @property size
     */
    this.size = file.size;

    /**
     * URL string containing image data.
     *
     * @property data
     */
    this.data = undefined;
  };
});

;
//# sourceMappingURL=scripts.bundle.js.map