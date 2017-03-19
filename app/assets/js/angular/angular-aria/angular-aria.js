!function(a,b,c){"use strict";function d(){function a(a,b,d){return function(e,f,g){var h=g.$normalize(b);c[h]&&!g[h]&&e.$watch(g[a],function(a){a=d?!a:!!a,f.attr(b,a)})}}var c={ariaHidden:!0,ariaChecked:!0,ariaDisabled:!0,ariaRequired:!0,ariaInvalid:!0,ariaMultiline:!0,ariaValue:!0,tabindex:!0,bindKeypress:!0,bindRoleForClick:!0};this.config=function(a){c=b.extend(c,a)},this.$get=function(){return{config:function(a){return c[a]},$$watchExpr:a}}}var e=b.module("ngAria",["ng"]).provider("$aria",d);e.directive("ngShow",["$aria",function(a){return a.$$watchExpr("ngShow","aria-hidden",!0)}]).directive("ngHide",["$aria",function(a){return a.$$watchExpr("ngHide","aria-hidden",!1)}]).directive("ngModel",["$aria",function(a){function b(b,c,d){return a.config(c)&&!d.attr(b)}function c(a,b){return!b.attr("role")&&b.attr("type")===a&&"INPUT"!==b[0].nodeName}function d(a,b){var c=a.type,d=a.role;return"checkbox"===(c||d)||"menuitemcheckbox"===d?"checkbox":"radio"===(c||d)||"menuitemradio"===d?"radio":"range"===c||"progressbar"===d||"slider"===d?"range":"textbox"===(c||d)||"TEXTAREA"===b[0].nodeName?"multiline":""}return{restrict:"A",require:"?ngModel",priority:200,compile:function(e,f){var g=d(f,e);return{pre:function(a,b,c,d){"checkbox"===g&&"checkbox"!==c.type&&(d.$isEmpty=function(a){return a===!1})},post:function(d,e,f,h){function i(){return h.$modelValue}function j(){return l?(l=!1,function(a){var b=f.value==h.$viewValue;e.attr("aria-checked",b),e.attr("tabindex",0-!b)}):function(a){e.attr("aria-checked",f.value==h.$viewValue)}}function k(){e.attr("aria-checked",!h.$isEmpty(h.$viewValue))}var l=b("tabindex","tabindex",e);switch(g){case"radio":case"checkbox":c(g,e)&&e.attr("role",g),b("aria-checked","ariaChecked",e)&&d.$watch(i,"radio"===g?j():k);break;case"range":if(c(g,e)&&e.attr("role","slider"),a.config("ariaValue")){var m=!e.attr("aria-valuemin")&&(f.hasOwnProperty("min")||f.hasOwnProperty("ngMin")),n=!e.attr("aria-valuemax")&&(f.hasOwnProperty("max")||f.hasOwnProperty("ngMax")),o=!e.attr("aria-valuenow");m&&f.$observe("min",function(a){e.attr("aria-valuemin",a)}),n&&f.$observe("max",function(a){e.attr("aria-valuemax",a)}),o&&d.$watch(i,function(a){e.attr("aria-valuenow",a)})}break;case"multiline":b("aria-multiline","ariaMultiline",e)&&e.attr("aria-multiline",!0)}l&&e.attr("tabindex",0),h.$validators.required&&b("aria-required","ariaRequired",e)&&d.$watch(function(){return h.$error.required},function(a){e.attr("aria-required",!!a)}),b("aria-invalid","ariaInvalid",e)&&d.$watch(function(){return h.$invalid},function(a){e.attr("aria-invalid",!!a)})}}}}}]).directive("ngDisabled",["$aria",function(a){return a.$$watchExpr("ngDisabled","aria-disabled")}]).directive("ngMessages",function(){return{restrict:"A",require:"?ngMessages",link:function(a,b,c,d){b.attr("aria-live")||b.attr("aria-live","assertive")}}}).directive("ngClick",["$aria","$parse",function(a,b){return{restrict:"A",compile:function(c,d){var e=b(d.ngClick,null,!0);return function(b,c,d){function f(a,b){return-1!==b.indexOf(a[0].nodeName)?!0:void 0}var g=["BUTTON","A","INPUT","TEXTAREA"];!a.config("bindRoleForClick")||c.attr("role")||f(c,g)||c.attr("role","button"),a.config("tabindex")&&!c.attr("tabindex")&&c.attr("tabindex",0),!a.config("bindKeypress")||d.ngKeypress||f(c,g)||c.on("keypress",function(a){function c(){e(b,{$event:a})}var d=a.which||a.keyCode;(32===d||13===d)&&b.$apply(c)})}}}}]).directive("ngDblclick",["$aria",function(a){return function(b,c,d){a.config("tabindex")&&!c.attr("tabindex")&&c.attr("tabindex",0)}}])}(window,window.angular);