// Genericos en Clases

type Computador = {
    encender: () => void,
    apagar: () => void
}

class Programador<T> {
    computador: T;

    constructor(t: T) {
        this.computador = t;
    }

}


const programador = new Programador<Computador>({ encender: () => {}, apagar: () => {}});
const programador1 = new Programador<string>('Que la fuerza te acompañe!');

programador.computador.encender();
programador.computador.apagar();
programador1.computador.concat('Hola');