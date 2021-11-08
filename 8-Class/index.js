"use strict";
class Avenger {
    constructor(name, tema, realName) {
        this.name = name;
        this.tema = tema;
        this.realName = realName;
        Avenger.avAge = 80;
    }
    static getAvAge() {
        return `hola static`;
    }
    bio() {
        return `No puedes llamar este metodo afuera de la clase`;
    }
    bio2() {
        return `Puedo llamar este metodo afuera de clase`;
    }
}
Avenger.avAge = 35;
const avenger = new Avenger('adrian', 'duran');
console.log(Avenger.avAge);
console.log(avenger.bio2());
//# sourceMappingURL=index.js.map