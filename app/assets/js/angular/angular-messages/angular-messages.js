!function(a,b,c){"use strict";function d(a){function b(a,b){return a?e(a)?a.indexOf(b)>=0:a.hasOwnProperty(b):void 0}return["$animate",function(a){return{restrict:"AE",transclude:"element",terminal:!0,require:"^^ngMessages",link:function(c,d,f,g,h){var i,j=d[0],k=f.ngMessage||f.when,l=f.ngMessageExp||f.whenExp,m=function(a){i=a?e(a)?a:a.split(/[\s,]+/):null,g.reRender()};l?(m(c.$eval(l)),c.$watchCollection(l,m)):m(k);var n,o;g.register(j,o={test:function(a){return b(i,a)},attach:function(){n||h(c,function(b){a.enter(b,null,d),n=b,n.on("$destroy",function(){n&&(g.deregister(j),o.detach())})})},detach:function(){if(n){var b=n;n=null,a.leave(b)}}})}}}]}var e=b.isArray,f=b.forEach,g=b.isString,h=b.element;b.module("ngMessages",[]).directive("ngMessages",["$animate",function(a){function b(a,b){return g(b)&&0===b.length||c(a.$eval(b))}function c(a){return g(a)?a.length:!!a}var d="ng-active",e="ng-inactive";return{require:"ngMessages",restrict:"AE",controller:["$element","$scope","$attrs",function(g,h,i){function j(a,b){for(var c=b,d=[];c&&c!==a;){var e=c.$$ngMessageNode;if(e&&e.length)return q[e];c.childNodes.length&&-1==d.indexOf(c)?(d.push(c),c=c.childNodes[c.childNodes.length-1]):c=c.previousSibling||c.parentNode}}function k(a,b,c){var d=q[c];if(o.head){var e=j(a,b);e?(d.next=e.next,e.next=d):(d.next=o.head,o.head=d)}else o.head=d}function l(a,b,c){var d=q[c],e=j(a,b);e?e.next=d.next:o.head=d.next}var m,n,o=this,p=0,q=this.messages={};this.render=function(j){j=j||{},m=!1,n=j;for(var k=b(h,i.ngMessagesMultiple)||b(h,i.multiple),l=[],p={},q=o.head,r=!1,s=0;null!=q;){s++;var t=q.message,u=!1;r||f(j,function(a,b){if(!u&&c(a)&&t.test(b)){if(p[b])return;p[b]=!0,u=!0,t.attach()}}),u?r=!k:l.push(t),q=q.next}f(l,function(a){a.detach()}),l.length!==s?a.setClass(g,d,e):a.setClass(g,e,d)},h.$watchCollection(i.ngMessages||i["for"],o.render),this.reRender=function(){m||(m=!0,h.$evalAsync(function(){m&&n&&o.render(n)}))},this.register=function(a,b){var c=p.toString();q[c]={message:b},k(g[0],a,c),a.$$ngMessageNode=c,p++,o.reRender()},this.deregister=function(a){var b=a.$$ngMessageNode;delete a.$$ngMessageNode,l(g[0],a,b),delete q[b],o.reRender()}}]}}]).directive("ngMessagesInclude",["$templateRequest","$document","$compile",function(a,b,c){return{restrict:"AE",require:"^^ngMessages",link:function(d,e,f){var g=f.ngMessagesInclude||f.src;a(g).then(function(a){c(a)(d,function(a){e.after(a);var c=h(b[0].createComment(" ngMessagesInclude: "+g+" "));e.after(c),e.remove()})})}}}]).directive("ngMessage",d("AE")).directive("ngMessageExp",d("A"))}(window,window.angular);