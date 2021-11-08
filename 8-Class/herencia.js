"use strict";
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('Constructor llamado');
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
        getFullNameProtected() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
        }
        getNameXmen() {
            console.log(super.getFullNameProtected());
        }
        get fullName() {
            return this.name;
        }
        set fullName(name) {
            this.name = name;
        }
    }
    const wolverine = new Xmen('logan', 'logan', false);
    class Mutante {
        constructor(name, apellido) {
            this.name = name;
            this.apellido = apellido;
        }
    }
    class Heroe extends Mutante {
        print() {
            console.log('Hola heroe');
        }
    }
    class Villanos extends Mutante {
        print() {
            console.log('Hola heroe');
        }
    }
    const xmen = new Heroe('wolverine', 'logan');
    const villanos = new Villanos('magneton', 'magnus');
    console.log(xmen.name);
    console.log(villanos.name);
    const printName = (character) => {
        character.name;
    };
    printName(xmen);
});
//# sourceMappingURL=herencia.js.map