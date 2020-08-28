"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saludar = void 0;

require("../css/componentes.css");

var saludar = function saludar(nombre) {
  console.log('Creando etiqueta h1');
  var h1 = document.createElement('h1');
  h1.innerText = "Hola, ".concat(nombre, ", aprendiendo?");
  document.body.append(h1);
};

exports.saludar = saludar;