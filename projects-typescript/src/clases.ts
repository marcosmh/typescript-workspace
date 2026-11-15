// Clases

class Personaje {
    readonly id: number;
    name: string;
    nivel: number;
    private _hp: number;
    profesion?: string;


    constructor(id: number, name: string, nivel: number, hp: number) {
        this.id = id;
        this.name = name;
        this.nivel = nivel;
        this._hp = hp;
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

if(personaje instanceof Personaje) {
    console.log("true");
}
    

