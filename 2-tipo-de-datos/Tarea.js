"use strict";
(function () {
    // Tipos
    var batman = 'Bruce';
    var superman = 'Clark';
    var existe = false;
    // Tuplas
    var parejaHeroes = [batman, superman];
    var villano = ['Lex Lutor', 5, true];
    // Arreglos
    var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    var Power;
    (function (Power) {
        Power[Power["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
        Power[Power["fuerzaBatman"] = 1] = "fuerzaBatman";
        Power[Power["fuerzaFlash"] = 5] = "fuerzaFlash";
        Power[Power["fuerzaSuperman"] = 100] = "fuerzaSuperman";
    })(Power || (Power = {}));
    var fuerzaFlash = Power.fuerzaFlash;
    var fuerzaSuperman = Power.fuerzaSuperman;
    var fuerzaBatman = Power.fuerzaBatman;
    var fuerzaAcuaman = Power.fuerzaAcuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    var poder = '100';
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
