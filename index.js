!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("lodash")):"function"==typeof define&&define.amd?define(["lodash"],t):t((e=e||self)._)}(this,(function(e){"use strict";(e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e).mixin({multipermutations:function(t,n){var f=e.values(t),o=function(e,t){if(--t<0)return[[]];var n=[];return e.forEach((function(f){o(e,t).forEach((function(e){e.unshift(f),n.push(e)}))})),n};return o(f,n)}})}));