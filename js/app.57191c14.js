(function(e){function t(t){for(var l,u,i=t[0],o=t[1],s=t[2],b=0,d=[];b<i.length;b++)u=i[b],Object.prototype.hasOwnProperty.call(c,u)&&c[u]&&d.push(c[u][0]),c[u]=0;for(l in o)Object.prototype.hasOwnProperty.call(o,l)&&(e[l]=o[l]);r&&r(t);while(d.length)d.shift()();return n.push.apply(n,s||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],l=!0,i=1;i<a.length;i++){var o=a[i];0!==c[o]&&(l=!1)}l&&(n.splice(t--,1),e=u(u.s=a[0]))}return e}var l={},c={app:0},n=[];function u(t){if(l[t])return l[t].exports;var a=l[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,u),a.l=!0,a.exports}u.m=e,u.c=l,u.d=function(e,t,a){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(u.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)u.d(a,l,function(t){return e[t]}.bind(null,l));return a},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/novotorica/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var r=o;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0748":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var l=a("7a23"),c=(a("b680"),Object(l["o"])("data-v-7f9927bb"));Object(l["h"])("data-v-7f9927bb");var n={class:"min-h-screen_"},u={class:"container mx-auto p-10 max-w-screen-2xl"},i={class:"flex mb-4"},o={class:"w-1/3 bg-style-1 p-5"},s=Object(l["e"])("h2",{class:"title-style-1"},"Валюта:",-1),r=Object(l["e"])("h2",{class:"title-style-1 mt-3"},"Доступно:",-1),b={key:2,class:"money-text-style mt-3"},d={key:3,class:"money-text-style mt-3"},j=Object(l["e"])("h2",{class:"title-style-1 mt-3"},"Хочу:",-1),f={class:"mt-3"},O={class:"title-style-1 mt-3"},v={class:"money-text-style mt-3"},h={key:6,class:"alert-error"},y={class:"w-1/3 p-5"},p={class:"title-style-2"},m=Object(l["e"])("div",{class:"table-head flex mt-3 flex-wrap content-center"},[Object(l["e"])("div",{class:"w-1/3"},"Код"),Object(l["e"])("div",{class:"w-1/3"},"Единица"),Object(l["e"])("div",{class:"w-1/3"},"Курс")],-1),V={class:"w-1/3"},x={class:"w-1/3"},g={class:"w-1/3  bg-style-1 p-5"},w=Object(l["e"])("h2",{class:"title-style-2"},"Баланс",-1),C={class:"w-1/2"},S={class:"w-1/2"};Object(l["g"])();var k=c((function(e,t,a,c,k,L){return Object(l["f"])(),Object(l["c"])("div",n,[Object(l["e"])("div",u,[Object(l["e"])("div",i,[Object(l["e"])("div",o,[s,"buy"==k.ativeSelect?Object(l["m"])((Object(l["f"])(),Object(l["c"])("select",{key:0,class:"px-4 py-3 select-style mt-3","onUpdate:modelValue":t[1]||(t[1]=function(e){return k.selectedValute=e})},[(Object(l["f"])(!0),Object(l["c"])(l["a"],null,Object(l["i"])(k.allValutesList,(function(e){return Object(l["f"])(),Object(l["c"])("option",{key:e.ID,value:e},Object(l["j"])(e.Name)+" ("+Object(l["j"])(e.CharCode)+") ",9,["value"])})),128))],512)),[[l["k"],k.selectedValute]]):Object(l["d"])("",!0),"sell"==k.ativeSelect?Object(l["m"])((Object(l["f"])(),Object(l["c"])("select",{key:1,class:"px-4 py-3 select-style mt-3","onUpdate:modelValue":t[2]||(t[2]=function(e){return k.selectedValute=e})},[(Object(l["f"])(!0),Object(l["c"])(l["a"],null,Object(l["i"])(L.balanceWithoutRub,(function(e){return Object(l["f"])(),Object(l["c"])("option",{key:e.CharCode,value:e},Object(l["j"])(e.Name)+" ("+Object(l["j"])(e.CharCode)+") ",9,["value"])})),128))],512)),[[l["k"],k.selectedValute]]):Object(l["d"])("",!0),r,"buy"==k.ativeSelect?(Object(l["f"])(),Object(l["c"])("div",b,Object(l["j"])(L.availableForPurchase),1)):Object(l["d"])("",!0),"sell"==k.ativeSelect?(Object(l["f"])(),Object(l["c"])("div",d,Object(l["j"])(L.availableForSale),1)):Object(l["d"])("",!0),j,Object(l["e"])("div",f,[Object(l["e"])("button",{onClick:t[3]||(t[3]=function(e){return k.ativeSelect="buy"}),class:["sell"==k.ativeSelect?"a":"button-active","button-buy"]}," купить ",2),Object(l["e"])("button",{onClick:t[4]||(t[4]=function(e){return k.ativeSelect="sell"}),class:["buy"==k.ativeSelect?"a":"button-active","button-sell"]}," продать ",2)]),Object(l["m"])(Object(l["e"])("input",{"onUpdate:modelValue":t[5]||(t[5]=function(e){return k.exchangeAmount=e}),onKeydown:t[6]||(t[6]=Object(l["n"])((function(){return L.buyValute&&L.buyValute.apply(L,arguments)}),["enter"])),onKeypress:t[7]||(t[7]=function(){return L.onlyNumber&&L.onlyNumber.apply(L,arguments)}),type:"text",class:"money-to-buy mt-3",placeholder:"0.00"},null,544),[[l["l"],k.exchangeAmount]]),Object(l["e"])("h2",O,Object(l["j"])(L.totaltAmountTitle),1),Object(l["e"])("div",v,Object(l["j"])(L.totaltAmount)+" ₽",1),"buy"==k.ativeSelect?(Object(l["f"])(),Object(l["c"])("button",{key:4,onClick:t[8]||(t[8]=function(){return L.buyValute&&L.buyValute.apply(L,arguments)}),class:"button-pay mt-3"}," Купить ")):Object(l["d"])("",!0),"sell"==k.ativeSelect?(Object(l["f"])(),Object(l["c"])("button",{key:5,onClick:t[9]||(t[9]=function(){return L.sellValute&&L.sellValute.apply(L,arguments)}),class:"button-pay mt-3"}," Продать ")):Object(l["d"])("",!0),k.errorMsg?(Object(l["f"])(),Object(l["c"])("div",h,Object(l["j"])(k.errorMsg),1)):Object(l["d"])("",!0)]),Object(l["e"])("div",y,[Object(l["e"])("h2",p,"Курс валют на "+Object(l["j"])(k.titleDate),1),m,(Object(l["f"])(!0),Object(l["c"])(l["a"],null,Object(l["i"])(k.allValutesList,(function(e){return Object(l["f"])(),Object(l["c"])("div",{key:e.ID,class:"table-body flex flex-wrap content-center"},[Object(l["e"])("div",V,Object(l["j"])(e.CharCode),1),Object(l["e"])("div",x,Object(l["j"])(e.Nominal),1),Object(l["e"])("div",{class:["w-1/3",{"valute-up":+e.Value.toFixed(2)>+e.Previous.toFixed(2),"valute-down":+e.Value.toFixed(2)<+e.Previous.toFixed(2)}]},Object(l["j"])(e.Value)+" "+Object(l["j"])(L.valuteValue(e.Value,e.Previous)),3)])})),128))]),Object(l["e"])("div",g,[w,(Object(l["f"])(!0),Object(l["c"])(l["a"],null,Object(l["i"])(L.hesBalance,(function(e,t){return Object(l["f"])(),Object(l["c"])("div",{key:t,class:"balance flex mt-3 flex-wrap content-center"},[Object(l["e"])("div",C,Object(l["j"])(e.CharCode),1),Object(l["e"])("div",S,Object(l["j"])(L.decimalPlacesVal(e.balanceValue)),1)])})),128))])])])])})),L=(a("4de4"),a("4fad"),a("c1f9"),a("d3b7"),a("99af"),{name:"App",data:function(){return{allValutesList:[],balanceList:{},ativeSelect:"buy",selectedValute:null,exchangeAmount:null,titleDate:"",errorMsg:""}},computed:{hesBalance:function(){var e=Object.entries(this.balanceList).filter((function(e){return e[1].balanceValue>0})),t=Object.fromEntries(e);return t},totaltAmount:function(){var e,t;return null!==(e=this.selectedValute)&&void 0!==e&&e.Value?(this.exchangeAmount*(null===(t=this.selectedValute)||void 0===t?void 0:t.Value)).toFixed(2):(0).toFixed(2)},payListValutes:function(){var e=Object.entries(this.balanceList).filter((function(e){return e[1]>0})),t=Object.fromEntries(e);return t},balanceWithoutRub:function(){var e=Object.entries(this.hesBalance).filter((function(e){return"RUB"!=e[1].CharCode})),t=Object.fromEntries(e);return t},totaltAmountTitle:function(){return"buy"===this.ativeSelect?"Заплачу:":"Получу:"},availableForPurchase:function(){var e,t,a;return((null===(e=this.balanceList.RUB)||void 0===e?void 0:e.balanceValue)/(null===(t=this.selectedValute)||void 0===t?void 0:t.Value)).toFixed(2)+" "+(null===(a=this.selectedValute)||void 0===a?void 0:a.CharCode)},availableForSale:function(){var e,t,a;return void 0!=(null===(e=this.selectedValute)||void 0===e?void 0:e.balanceValue)?(null===(t=this.selectedValute)||void 0===t?void 0:t.balanceValue)+" "+(null===(a=this.selectedValute)||void 0===a?void 0:a.CharCode):"-"}},methods:{valuteValue:function(e,t){e=+e.toFixed(2),t=+t.toFixed(2);var a="";return a=e<=t?(e-t).toFixed(2):"+"+(e-t).toFixed(2),"(".concat(a,")")},onlyNumber:function(e){var t=e.keyCode?e.keyCode:e.which;(t<48||t>57)&&46!==t&&e.preventDefault()},buyValute:function(){var e=this.balanceList.RUB.balanceValue-this.totaltAmount;e>=0&&(this.balanceList.RUB.balanceValue-=this.totaltAmount,this.balanceList[this.selectedValute.CharCode].balanceValue=this.exchangeAmount,this.exchangeAmount=null,localStorage.setItem("balance-list",JSON.stringify(this.balanceList)))},sellValute:function(){this.exchangeAmount<=this.selectedValute.balanceValue&&(this.balanceList[this.selectedValute.CharCode].balanceValue=this.selectedValute.balanceValue-this.exchangeAmount,this.balanceList.RUB.balanceValue+=+this.totaltAmount,this.exchangeAmount=null,localStorage.setItem("balance-list",JSON.stringify(this.balanceList)))},decimalPlacesVal:function(e){return(+e).toFixed(2)}},mounted:function(){var e=this;fetch("https://www.cbr-xml-daily.ru/archive/2021/03/03/daily_json.js").then((function(e){return e.json()})).then((function(t){var a=new Date(t.Date),l=a.getFullYear(),c=""+(a.getMonth()+1),n=""+a.getDate();c.length<2&&(c="0"+c),n.length<2&&(n="0"+n),e.titleDate="".concat(n,".").concat(c,".").concat(l),e.allValutesList=t.Valute,e.selectedValute=e.allValutesList.AUD;var u=localStorage.getItem("balance-list");if(u)e.balanceList=JSON.parse(u);else{var i={};for(var o in t.Valute)i[o]={balanceValue:0,Name:t.Valute[o].Name,CharCode:t.Valute[o].CharCode,Value:t.Valute[o].Value};i.RUB={balanceValue:1e4,Name:"Российский рубль",CharCode:"RUB"},e.balanceList=i}}))}});a("9d79");L.render=k,L.__scopeId="data-v-7f9927bb";var A=L,F=(a("ba8c"),Object(l["b"])(A));F.mount("#app")},"9d79":function(e,t,a){"use strict";a("0748")},ba8c:function(e,t,a){}});
//# sourceMappingURL=app.57191c14.js.map