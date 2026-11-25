// Clases

class Personaje {
    
    profesion?: string;
    private static equipo: number = 1;

    constructor(
        readonly id: number, 
        public name: string, 
        public nivel: number, 
        private _hp: number
    ) {
        
    }

    get hp(): number {
        return this._hp;
    }

    static getEquipo(): number {
        return Personaje.equipo;
    }

    static agregarPersonaje(): void {
        // .equipo++;
        Personaje.equipo++;
    }
    
    subirNivel(): number {
        this.nivel = this.nivel + 1;
        return this.nivel;
    }

    cambiarHP(cantidad: number): number {
        this._hp = this._hp + cantidad;
        return this._hp;
    }


}    
    

const personaje = new Personaje(1, 'Anakin', 1, 100);
console.log(personaje);
personaje.cambiarHP(-10);
console.log("Actualizado: ", personaje);

console.log("Equipo: ",Personaje.getEquipo());

const personaje1 = new Personaje(2, 'Luke', 1, 120);
Personaje.agregarPersonaje();
console.log(personaje, personaje1);


if(personaje instanceof Personaje) {
    console.log("true");
}
    

