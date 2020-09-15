(function(t){function e(e){for(var a,s,r=e[0],c=e[1],l=e[2],m=0,u=[];m<r.length;m++)s=r[m],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&u.push(o[s][0]),o[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(u.length)u.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={app:0},i=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),o=n.n(a);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}}),n("router-view")],1)},i=[],s=(n("034f"),n("2877")),r={},c=Object(s["a"])(r,o,i,!1,null,null,null),l=c.exports,d=n("8c4f"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("h1",[t._v("Stock de Libreria")]),n("div",{staticClass:"container mt-4"},[n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}],staticClass:"btn btn-success mb-4"},[t._v("Agregar Articulo")]),n("b-alert",{attrs:{show:t.dismissCountDown,dismissible:"",variant:t.mensaje.color},on:{dismissed:function(e){t.dismissCountDown=0},"dismiss-count-down":t.countDownChanged}},[t._v(" "+t._s(t.mensaje.texto)+" ")]),n("table",{staticClass:"table table-striped"},[t._m(0),n("tbody",t._l(t.articulos,(function(e,a){return n("tr",{key:a},[n("th",{staticClass:"text-primary",attrs:{scope:"row"}},[t._v(t._s(e.name))]),n("td",[t._v(" "+t._s(e.cantidad)+" ")]),n("td",[t._v(t._s(e.comments))]),n("td",[n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-2",modifiers:{"modal-2":!0}}],staticClass:"mx-4",attrs:{variant:"warning"},on:{click:function(n){return t.edit(e._id)}}},[t._v(" editar ")]),n("b-button",{attrs:{variant:"secondary"},on:{click:function(n){return t.delet(e._id)}}},[t._v(" borrar ")])],1)])})),0)])],1),n("b-modal",{staticClass:"modal-dialog modal-dialog-centered",attrs:{id:"modal-1",title:"Nuevo Articulo","hide-footer":""}},[n("form",{on:{submit:function(e){return e.preventDefault(),t.addItem()}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newItem.name,expression:"newItem.name"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"articulo"},domProps:{value:t.newItem.name},on:{input:function(e){e.target.composing||t.$set(t.newItem,"name",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newItem.cantidad,expression:"newItem.cantidad"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"cantidad"},domProps:{value:t.newItem.cantidad},on:{input:function(e){e.target.composing||t.$set(t.newItem,"cantidad",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newItem.comments,expression:"newItem.comments"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"comentarios"},domProps:{value:t.newItem.comments},on:{input:function(e){e.target.composing||t.$set(t.newItem,"comments",e.target.value)}}}),n("b-button",{staticClass:"btn btn-info my-4 mx-4",attrs:{type:"submit"},on:{click:function(e){return t.$bvModal.hide("modal-1")}}},[t._v("Guardar")]),n("b-button",{staticClass:"btn btn-warning my-4",attrs:{type:"button"},on:{click:function(e){return t.$bvModal.hide("modal-1")}}},[t._v("cancelar")])],1)]),n("b-modal",{staticClass:"modal-dialog modal-dialog-centered",attrs:{id:"modal-2",title:"Editar Articulo","hide-footer":""}},[n("form",{on:{submit:function(e){return e.preventDefault(),t.changeItem(t.itemEditar)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.itemEditar.name,expression:"itemEditar.name"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"articulo"},domProps:{value:t.itemEditar.name},on:{input:function(e){e.target.composing||t.$set(t.itemEditar,"name",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.itemEditar.cantidad,expression:"itemEditar.cantidad"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"cantidad"},domProps:{value:t.itemEditar.cantidad},on:{input:function(e){e.target.composing||t.$set(t.itemEditar,"cantidad",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.itemEditar.comments,expression:"itemEditar.comments"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"comentarios"},domProps:{value:t.itemEditar.comments},on:{input:function(e){e.target.composing||t.$set(t.itemEditar,"comments",e.target.value)}}}),n("b-button",{staticClass:"btn btn-info my-4 mx-4",attrs:{type:"submit"},on:{click:function(e){return t.$bvModal.hide("modal-2")}}},[t._v("Editar")]),n("b-button",{staticClass:"btn btn-warning my-4",attrs:{type:"button"},on:{click:function(e){return t.$bvModal.hide("modal-2")}}},[t._v("cancelar")])],1)])],1)},u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("articulo")]),n("th",{attrs:{scope:"col"}},[t._v("cantidad")]),n("th",{attrs:{scope:"col"}},[t._v("comentarios")]),n("th",{attrs:{scope:"col"}},[t._v("accion")])])])}],f=(n("c740"),n("a434"),n("b0c0"),{data:function(){return{articulos:[],newItem:{name:"",cantidad:"",comments:""},itemEditar:[],mensaje:{color:"",texto:""},dismissSecs:5,dismissCountDown:0}},created:function(){this.allItems()},methods:{allItems:function(){var t=this;this.axios.get("/items").then((function(e){t.articulos=e.data})).catch((function(t){console.log(t)}))},addItem:function(){var t=this;console.log(this.newItem),this.axios.post("new-item",this.newItem).then((function(e){t.articulos.push(e.data),t.showAlert(),t.mensaje.texto="Notas Agregada!",t.mensaje.color="success"})).catch((function(t){return console.log(t.response)})),this.newItem.name="",this.newItem.cantidad="",this.newItem.comments=""},delet:function(t){var e=this;this.axios.delete("/items/".concat(t)).then((function(t){var n=e.articulos.findIndex((function(e){return e._id===t.data._id}));e.articulos.splice(n,1),e.showAlert(),e.mensaje.color="success",e.mensaje.texto="nota eliminada"})).catch((function(t){console.log(t.response)}))},edit:function(t){var e=this;this.axios.get("/items/".concat(t)).then((function(t){e.itemEditar=t.data})).catch((function(t){console.log(t.response)}))},changeItem:function(t){var e=this;this.axios.put("/items/".concat(t._id),t).then((function(t){var n=e.articulos.findIndex((function(e){return e._id===t.data._id}));e.articulos[n].name=t.data.name,e.articulos[n].cantidad=t.data.cantidad,e.articulos[n].comments=t.data.comments,e.showAlert(),e.mensaje.color="success",e.mensaje.texto="nota editada"})).catch((function(t){console.log(t.response)}))},countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs}}}),p=f,h=Object(s["a"])(p,m,u,!1,null,null,null),v=h.exports;a["default"].use(d["a"]);var b=[{path:"/",name:"Home",component:v}],w=new d["a"]({mode:"history",base:"/",routes:b}),g=w,x=n("2f62");a["default"].use(x["a"]);var _=new x["a"].Store({state:{newItem:{name:"",cantidad:"",comments:""},articulos:[],itemEditar:[]},mutations:{allItems:function(){var t=this;this.axios.get("/items").then((function(e){t.articulos=e.data})).catch((function(t){console.log(t)}))},addItem:function(){var t=this;console.log(this.newItem),this.axios.post("new-item",this.newItem).then((function(e){t.articulos.push(e.data),t.showAlert(),t.mensaje.texto="Notas Agregada!",t.mensaje.color="success"})).catch((function(t){return console.log(t.response)})),this.newItem.name="",this.newItem.cantidad="",this.newItem.comments=""},delet:function(t){var e=this;this.axios.delete("/items/".concat(t)).then((function(t){var n=e.articulos.findIndex((function(e){return e._id===t.data._id}));e.articulos.splice(n,1),e.showAlert(),e.mensaje.color="success",e.mensaje.texto="nota eliminada"})).catch((function(t){console.log(t.response)}))},edit:function(t){var e=this;this.axios.get("/items/".concat(t)).then((function(t){e.itemEditar=t.data})).catch((function(t){console.log(t.response)}))},changeItem:function(t){var e=this;this.axios.put("/items/".concat(t._id),t).then((function(t){var n=e.articulos.findIndex((function(e){return e._id===t.data._id}));e.articulos[n].name=t.data.name,e.articulos[n].cantidad=t.data.cantidad,e.articulos[n].comments=t.data.comments,e.showAlert(),e.mensaje.color="success",e.mensaje.texto="nota editada"})).catch((function(t){console.log(t.response)}))}},actions:{},modules:{}}),y=n("5f5b"),I=(n("f9e3"),n("2dd8"),n("bc3a")),j=n.n(I),C=n("a7fe"),E=n.n(C);a["default"].use(y["a"]),a["default"].use(E.a,j.a),j.a.defaults.baseURL="http://localhost:3000/api",a["default"].config.productionTip=!1,new a["default"]({router:g,store:_,render:function(t){return t(l)}}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.8e48c19b.js.map