(function(e){function t(t){for(var n,s,l=t[0],r=t[1],c=t[2],p=0,d=[];p<l.length;p++)s=l[p],o[s]&&d.push(o[s][0]),o[s]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);u&&u(t);while(d.length)d.shift()();return a.push.apply(a,c||[]),i()}function i(){for(var e,t=0;t<a.length;t++){for(var i=a[t],n=!0,l=1;l<i.length;l++){var r=i[l];0!==o[r]&&(n=!1)}n&&(a.splice(t--,1),e=s(s.s=i[0]))}return e}var n={},o={app:0},a=[];function s(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=n,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(i,n,function(t){return e[t]}.bind(null,n));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=r;a.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"18b9":function(e,t,i){"use strict";var n=i("8412"),o=i.n(n);o.a},2524:function(e,t,i){e.exports=i.p+"img/F_detoure.3790e04e.png"},"3cc5":function(e,t,i){e.exports=i.p+"img/F.10321a93.png"},"56d7":function(e,t,i){"use strict";i.r(t);i("cadf"),i("551c"),i("097d");var n=i("2b0e"),o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("Homepage")],1)},a=[],s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"Homepage"},[i("Header"),i("Music",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",value:{delay:e.isMobile?50:250},expression:"{delay: (isMobile ? 50 : 250)}",modifiers:{reset:!0}}]}),i("div",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",value:{delay:e.isMobile?50:250},expression:"{delay: (isMobile ? 50 : 250)}",modifiers:{reset:!0}}],staticClass:"Youtube"},[i("Title",{attrs:{title:"Youtube"}}),i("div",{staticClass:"Youtube-wrapper"},[i("div",{staticClass:"Youtube-downloads"},[i("h3",{staticClass:"Youtube-downloads-title"},[e._v("Downloads")]),i("ul",{staticClass:"Youtube-list"},e._l(e.downloads,function(t){return i("li",{key:t.path,staticClass:"Youtube-item"},[i("a",{attrs:{target:"_blank",href:t.path,download:t.title}},[e._v(e._s(t.title))])])}),0)]),i("div",{staticClass:"Youtube-player"},[i("youtube",{attrs:{"video-id":e.videoId,width:e.isMobile?360:790,height:e.isMobile?240:560}})],1)])],1),i("About",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",value:{delay:e.isMobile?50:250},expression:"{delay: (isMobile ? 50 : 250)}",modifiers:{reset:!0}}]}),i("Footer")],1)},l=[],r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"Header"},[i("div",{staticClass:"Header-opaque"}),i("div",{staticClass:"Header-header-image"}),i("h1",{staticClass:"Header-title"},[e._v(e._s(e.title))]),e._m(0)])},c=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"Header-scroll"},[e._v("scroll "),i("span",{staticClass:"Header-underline"})])}],u={name:"Header",components:{},data:function(){return{title:"MeloFedre"}}},p=u,d=(i("18b9"),i("2877")),f=Object(d["a"])(p,r,c,!1,null,"02c454ef",null);f.options.__file="Header.vue";var m=f.exports,v=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"Music"},[i("Title",{attrs:{title:"Music"}}),i("div",{staticClass:"Music-wrapper"},[i("div",{staticClass:"Music-song"},[i("div",{staticClass:"Music-album"},[i("img",{attrs:{src:e.song.image,alt:""}})]),i("div",{staticClass:"Music-song-title"},[e._v(e._s(e.song.title))])]),i("div",{staticClass:"Music-container"},e._l(e.platforms,function(t){return i("div",{key:t.name,staticClass:"Music-item"},[i("div",{staticClass:"Music-image"},[i("img",{attrs:{src:t.logo,alt:""}})]),i("a",{staticClass:"Music-link",style:e.isMobile?"#FFF":{color:t.color},attrs:{href:t.link,target:"_blank"}},[e._v(e._s(t.name))])])}),0)])],1)},b=[],g=i("cf08"),h=i.n(g),_=i("dae4"),y=i.n(_),w=i("9511"),M=i.n(w),x=i("eff7"),C=i.n(x),k=i("f4ca"),j=i.n(k),T=i("80b5"),A=i.n(T),O=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"Title"},[i("p",[e._v(e._s(e.title))])])},F=[],H={name:"Title",props:{title:{type:String,default:"Text"}}},I=H,E=(i("6101"),Object(d["a"])(I,O,F,!1,null,"f518acda",null));E.options.__file="Title.vue";var Y=E.exports,P={name:"Music",components:{Title:Y},data:function(){return{song:{title:"Broken Rhythm",image:A.a},platforms:[{name:"iTunes",logo:h.a,link:"http://itunes.apple.com/album/id1444665969?ls=1&app=itunes",color:"#CE6AEE"},{name:"Apple Music",logo:y.a,link:"http://itunes.apple.com/album/id/1444665969",color:"#EA6177"},{name:"Spotify",logo:M.a,link:"https://open.spotify.com/album/1OoWWIxlweDy0HolB0Pbex",color:"#1BD760"},{name:"Google Play",logo:j.a,link:"https://play.google.com/store/music/album/MeloFedre_Broken_Rhythm?id=Bjyyra24mqeeotcf72pzleg5j2y",color:"#0DCFFF"},{name:"Youtube",logo:C.a,link:"https://www.youtube.com/channel/UCnR1xQspydYVdkWNGMAKTug",color:"#DB2624"}]}},computed:{isMobile:function(){return window.innerWidth<768?this.mobile=!0:this.mobile=!1,this.mobile}}},$=P,S=(i("dd88"),Object(d["a"])($,v,b,!1,null,"766b50b7",null));S.options.__file="Music.vue";var W=S.exports,B=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"About"},[i("Title",{attrs:{title:"About"}}),i("div",{staticClass:"About-wrapper"},[i("div",{staticClass:"About-image"},[i("img",{attrs:{src:e.isMobile?e.mobileImage:e.desktopImage}})]),i("div",{staticClass:"About-text"},[e._v(e._s(e.text))])])],1)},D=[],N=i("2524"),R=i.n(N),q=i("3cc5"),G=i.n(q),J={name:"About",components:{Title:Y},data:function(){return{mobile:!1,desktopImage:R.a,mobileImage:G.a,text:"People may define me as a curious \"multi-potentialist\": I have many passions that I'd like to combine in one. Any sort of art really thrills me such as cinema, video-making, photography, dance, and most of all music, which has been part of my life since I was such a cutie tiny girl. At present I can play violin, piano, guitar and ukulele but I mostly enjoy composing songs.\n\nWhy? Well, composing and all my interests have a thing in common: it's all about language learning.\n\nI've been learning four foreign languages (in addition to my mother tongue) because I love decrypting and manipulating symbols and sounds, in order to communicate.\n\nThat's why logical and computing languages are very challenging to me."}},computed:{isMobile:function(){return window.innerWidth<768?this.mobile=!0:this.mobile=!1,this.mobile}}},Q=J,z=(i("a84a"),Object(d["a"])(Q,B,D,!1,null,"1ec8fa7c",null));z.options.__file="About.vue";var K=z.exports,U=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},V=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"Footer"},[i("p",[e._v("©MeloFedre")])])}],L={name:"Footer"},X=L,Z=(i("c513"),Object(d["a"])(X,U,V,!1,null,"65e0c096",null));Z.options.__file="Footer.vue";var ee=Z.exports,te={name:"Homepage",props:{},components:{Title:Y,Header:m,Music:W,About:K,Footer:ee},data:function(){return{mobile:!1,videoId:"0o3tDTelBpQ",downloads:[{title:"Parigi economica",path:"./assets/docs/"}]}},computed:{isMobile:function(){return window.innerWidth<768?this.mobile=!0:this.mobile=!1,this.mobile}}},ie=te,ne=(i("97ae"),Object(d["a"])(ie,s,l,!1,null,"478ff3a3",null));ne.options.__file="Homepage.vue";var oe=ne.exports,ae={name:"app",components:{Homepage:oe},data:function(){return{}}},se=ae,le=(i("5c0b"),Object(d["a"])(se,o,a,!1,null,null,null));le.options.__file="App.vue";var re=le.exports,ce=i("5c96"),ue=i.n(ce),pe=i("e0ec"),de=i.n(pe),fe=i("4c95"),me=i.n(fe);n["default"].use(me.a),n["default"].use(de.a),n["default"].use(ue.a),n["default"].config.productionTip=!1,new n["default"]({render:function(e){return e(re)}}).$mount("#app")},"5c0b":function(e,t,i){"use strict";var n=i("5e27"),o=i.n(n);o.a},"5e27":function(e,t,i){},"5fd0":function(e,t,i){},6101:function(e,t,i){"use strict";var n=i("77cf"),o=i.n(n);o.a},"77cf":function(e,t,i){},"80b5":function(e,t,i){e.exports=i.p+"img/pochette.c902f8e1.jpg"},8412:function(e,t,i){},"8bbf":function(e,t,i){},9511:function(e,t,i){e.exports=i.p+"img/2000px-Spotify_logo_without_text.svg.426528c7.png"},"97ae":function(e,t,i){"use strict";var n=i("dfe7"),o=i.n(n);o.a},a84a:function(e,t,i){"use strict";var n=i("8bbf"),o=i.n(n);o.a},c513:function(e,t,i){"use strict";var n=i("5fd0"),o=i.n(n);o.a},cdcb:function(e,t,i){},cf08:function(e,t,i){e.exports=i.p+"img/itunes-logo-png-transparent.21937d88.png"},dae4:function(e,t,i){e.exports=i.p+"img/Apple-music-icon.d1ae6bb6.png"},dd88:function(e,t,i){"use strict";var n=i("cdcb"),o=i.n(n);o.a},dfe7:function(e,t,i){},eff7:function(e,t,i){e.exports=i.p+"img/YouTube_logo_(2013-2015).2ef32908.png"},f4ca:function(e,t,i){e.exports=i.p+"img/google_play_881808.6d2bffba.png"}});
//# sourceMappingURL=app.789cc536.js.map