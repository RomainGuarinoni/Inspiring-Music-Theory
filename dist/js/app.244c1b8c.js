(function(e){function t(t){for(var o,a,i=t[0],l=t[1],u=t[2],d=0,v=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&v.push(r[a][0]),r[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);c&&c(t);while(v.length)v.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,i=1;i<n.length;i++){var l=n[i];0!==r[l]&&(o=!1)}o&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={app:0},s=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},2995:function(e,t,n){"use strict";n("c441")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("minijeux")],1)},s=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"all"},[n("div",{staticClass:"testBox",class:{hidden:e.finish}},[n("h1",[e._v("Test mini jeux")]),n("div",{staticClass:"info"},[n("p",[e._v("Votre score : "+e._s(e.score)+" /8")]),n("p",[e._v("Temps : "+e._s(e.time))])]),n("div",{attrs:{id:"gameBox"}}),n("div",{staticClass:"buttonBox"},e._l(e.noteBase,(function(t,o){return n("Button",{key:t.value,attrs:{id:o,value:t.value,note:t.note,index:e.index,notes:e.notes},on:{checkAnswer:e.scoreUpdate}})})),1)]),n("div",{staticClass:"resultBox",class:{hidden:!e.finish}},[n("h1",[e._v("bravo, tu as finis l'exercice")]),n("h2",[e._v("Voici tes résultats :")]),n("div",{staticClass:"result"},[n("p",[e._v("Score : "+e._s(e.score)+" / 8")]),n("p",[e._v("temps : ...")])]),e.score>5?n("p",{staticClass:"comment",staticStyle:{color:"green"}},[e._v(" Bravo, c'est un bon score ")]):n("p",{staticClass:"comment",staticStyle:{color:"red"}},[e._v(" Tu dois encore t'entrainer... ")])])])},i=[],l=n("f8c0"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"button"},[n("button",{staticClass:"noteButton",class:{greenColor:e.goodAnswer,redColor:e.badAnswer},on:{click:e.check}},[e._v(" "+e._s(e.note)+" ")])])},c=[],d=(n("a9e3"),{props:{value:String,index:Number,note:String,notes:Array,id:Number},data:function(){return{goodAnswer:!1,badAnswer:!1}},methods:{check:function(){var e,t=this;this.value==this.notes[this.index].value?(e={result:!0},this.goodAnswer=!0,console.log(this.goodAnswer),setTimeout((function(){t.goodAnswer=!1,console.log(t.goodAnswer)}),500)):(e={result:!1},this.badAnswer=!0,console.log(this.badAnswer),setTimeout((function(){t.badAnswer=!1,console.log(t.badAnswer)}),500)),this.$emit("checkAnswer",e)}}}),v=d,f=(n("761e"),n("2877")),p=Object(f["a"])(v,u,c,!1,null,"efbb860a",null),h=p.exports,b={name:"HelloWorld",components:{Button:h},data:function(){return{switchValue:!1,notes:[],noteBase:[{note:"Do",value:"c/4"},{note:"Re",value:"d/4"},{note:"Mi",value:"e/4"},{note:"Fa",value:"f/4"},{note:"Sol",value:"g/4"},{note:"La",value:"a/4"},{note:"Si",value:"b/4"}],score:0,index:0,finish:!1,time:"0:00:00:00"}},created:function(){for(var e=[{note:"Do",value:"c/4"},{note:"Re",value:"d/4"},{note:"Mi",value:"e/4"},{note:"Fa",value:"f/4"},{note:"Sol",value:"g/4"},{note:"La",value:"a/4"},{note:"Si",value:"b/4"}],t=0;t<8;t++){var n=Math.floor(7*Math.random());this.notes[t]=e[n]}console.log(this.notes)},mounted:function(){var e=l["a"].Flow,t=document.getElementById("gameBox"),n=new e.Renderer(t,e.Renderer.Backends.SVG);n.resize(1e3,500);var o=n.getContext(),r=new e.Stave(60,40,400);r.addClef("treble").addTimeSignature("4/4"),r.setContext(o).draw();var s=[new e.StaveNote({clef:"treble",keys:[this.notes[0].value],duration:"q"}),new e.StaveNote({clef:"treble",keys:[this.notes[1].value],duration:"q"}),new e.StaveNote({clef:"treble",keys:[this.notes[2].value],duration:"q"}),new e.StaveNote({clef:"treble",keys:[this.notes[3].value],duration:"q"})],a=new e.Voice({num_beats:4,beat_value:4});a.addTickables(s),e.Formatter.FormatAndDraw(o,r,s);var i=l["a"].Flow,u=new i.Stave(460,40,400);u.setContext(o).draw();var c=[new i.StaveNote({clef:"treble",keys:[this.notes[4].value],duration:"q"}),new i.StaveNote({clef:"treble",keys:[this.notes[5].value],duration:"q"}),new i.StaveNote({clef:"treble",keys:[this.notes[6].value],duration:"q"}),new i.StaveNote({clef:"treble",keys:[this.notes[7].value],duration:"q"})],d=new i.Voice({num_beats:4,beat_value:4});d.addTickables(s),i.Formatter.FormatAndDraw(o,u,c)},methods:{scoreUpdate:function(e){this.index++,e.result&&this.score++,8==this.index&&(this.finish=!0)}}},w=b,m=(n("2995"),Object(f["a"])(w,a,i,!1,null,"fef96372",null)),g=m.exports,_={name:"App",components:{Minijeux:g}},y=_,x=(n("034f"),Object(f["a"])(y,r,s,!1,null,null,null)),S=x.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(S)}}).$mount("#app")},"761e":function(e,t,n){"use strict";n("ac51")},"85ec":function(e,t,n){},ac51:function(e,t,n){},c441:function(e,t,n){}});
//# sourceMappingURL=app.244c1b8c.js.map