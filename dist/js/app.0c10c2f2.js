(function(e){function s(s){for(var a,c,o=s[0],f=s[1],d=s[2],j=0,b=[];j<o.length;j++)c=o[j],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&b.push(n[c][0]),n[c]=0;for(a in f)Object.prototype.hasOwnProperty.call(f,a)&&(e[a]=f[a]);i&&i(s);while(b.length)b.shift()();return r.push.apply(r,d||[]),t()}function t(){for(var e,s=0;s<r.length;s++){for(var t=r[s],a=!0,o=1;o<t.length;o++){var f=t[o];0!==n[f]&&(a=!1)}a&&(r.splice(s--,1),e=c(c.s=t[0]))}return e}var a={},n={app:0},r=[];function c(s){if(a[s])return a[s].exports;var t=a[s]={i:s,l:!1,exports:{}};return e[s].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=e,c.c=a,c.d=function(e,s,t){c.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,s){if(1&s&&(e=c(e)),8&s)return e;if(4&s&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var a in e)c.d(t,a,function(s){return e[s]}.bind(null,a));return t},c.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(s,"a",s),s},c.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},c.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],f=o.push.bind(o);o.push=s,o=o.slice();for(var d=0;d<o.length;d++)s(o[d]);var i=f;r.push([0,"chunk-vendors"]),t()})({0:function(e,s,t){e.exports=t("56d7")},"28ea":function(e,s,t){var a=t("997e");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=t("499e").default;n("eacbb656",a,!0,{sourceMap:!1,shadowMode:!1})},3958:function(e,s,t){var a=t("24fb");s=a(!1),s.push([e.i,"#pos[data-v-42032d98]{margin:10px;widows:80%}",""]),e.exports=s},"3aa4":function(e,s,t){var a=t("3958");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=t("499e").default;n("715fcd36",a,!0,{sourceMap:!1,shadowMode:!1})},"457d":function(e,s,t){"use strict";var a=t("28ea"),n=t.n(a);n.a},4678:function(e,s,t){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var s=r(e);return t(s)}function r(e){if(!t.o(a,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=r,e.exports=n,n.id="4678"},"56d7":function(e,s,t){"use strict";t.r(s);t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),n=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("a-row",{attrs:{type:"flex",justify:"center"}},[t("AIMSPosition",{attrs:{id:"pos"}})],1)},r=[],c=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("a-table",{attrs:{loading:!e.hasData,columns:e.columns,"data-source":e.resultData,pagination:!1,bordered:""}},[t("template",{slot:"title"},[e._v("AIMS 策略当前持仓信息")]),t("template",{slot:"footer"},[t("a-row",{style:{fontWeight:"bold"}},[e._v(" Total cost: "),t("span",{style:{fontWeight:"400"}},[e._v(" "+e._s(e.totalCost)+" ")])])],1)],2)},o=[],f=(t("4160"),t("13d5"),t("159b"),t("bc3a")),d=t.n(f),i=d.a.create({baseURL:"/quant/api",headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json;"}}),j={name:"AIMSPosition",data:function(){return{resultData:[],columns:[{title:"Exchange",dataIndex:"exchange_name",key:"exchangeName"},{title:"CoinPair",dataIndex:"coin_pair",sorter:function(e,s){return e.coin_pair>s.coin_pair?1:-1},sortDirections:["descend","ascend"],key:"coinPair"},{title:"Cost",dataIndex:"cost",key:"cost",sorter:function(e,s){return e.cost-s.cost}},{title:"Hold",dataIndex:"hold",key:"hold"},{title:"Average",dataIndex:"average_costing",key:"average"}]}},computed:{hasData:function(){return this.resultData.length>0},totalCost:function(){return this.hasData?this.resultData.reduce((function(e,s){return e+s.cost}),0):0}},mounted:function(){var e=this;i.get("/aims_position").then((function(s){var t=s.data["data"];t.forEach((function(e){e["key"]=Math.random()})),e.resultData=t}))},methods:{}},b=j,l=(t("457d"),t("2877")),u=Object(l["a"])(b,c,o,!1,null,"3c626c8e",null),p=u.exports,h={name:"App",components:{AIMSPosition:p},created:function(){document.title="AIMS"}},m=h,v=(t("89b1"),Object(l["a"])(m,n,r,!1,null,"42032d98",null)),g=v.exports,y=t("f23d");t("202f");a["a"].config.productionTip=!1,a["a"].use(y["a"]),new a["a"]({render:function(e){return e(g)}}).$mount("#app")},"89b1":function(e,s,t){"use strict";var a=t("3aa4"),n=t.n(a);n.a},"997e":function(e,s,t){var a=t("24fb");s=a(!1),s.push([e.i,"#abc[data-v-3c626c8e]{font-weight:700}",""]),e.exports=s}});
//# sourceMappingURL=app.0c10c2f2.js.map