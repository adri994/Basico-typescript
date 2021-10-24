"use strict";
var sumar = function (a, b) { return a + b; };
var hero = function (hero) { return hero.length; };
var superHeroe = ['batman', 'superman', 'flash'];
hero(superHeroe);
var llamarBatman = function (llamar) {
    if (llamar === void 0) { llamar = false; }
    if (llamar)
        console.log('Batiseñal activada');
};
llamarBatman();
var unirHeroe = function () {
    var persona = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        persona[_i] = arguments[_i];
    }
    return persona.join(', ');
};
var noHaceNadaTampoco;
