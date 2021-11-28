"use strict";
var conducirBatimovil = function (auto) {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelear();
};
var batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelear: function () {
        console.log("...... gogogo!!!");
    }
};
var guason = {
    reir: true,
    comer: true,
    llorar: false
};
var reir = function (guason) {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
};
var ciudadGotica = function (ciudadanos) {
    return ciudadanos.length;
};
var Persona = (function () {
    function Persona() {
        this.nombre = 'adrian';
        this.edad = 5;
        this.sexo = 'Masculino';
        this.estadoCivil = 'Soltero';
    }
    Persona.prototype.imprimirBio = function () {
        console.log('gola mundo');
    };
    return Persona;
}());
//# sourceMappingURL=app.js.map