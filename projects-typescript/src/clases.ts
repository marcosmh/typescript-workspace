// Clases

class Personaje {
    
    profesion?: string;

    constructor(
        readonly id: number, 
        public name: string, 
        public nivel: number, 
        private _hp: number
    ) {
        
    }

    getHP(): number {
        return this._hp;
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
    

const personaje = new Personaje(1, 'Anakin', 10, 100);
console.log(personaje);
console.log("Actualizado: ", personaje);
console.log("HP: ", personaje.getHP() );

if(personaje instanceof Personaje) {
    console.log("true");
}
    

