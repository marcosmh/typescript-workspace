// Genericos con Herencia

class Usuario {
    constructor(public id: string, public name: string) {}
}

class Estado<T> {
    protected data: T[] = []

    agregar(t: T): void {
        this.data.push(t);
    }

    getEstado(): T[] {
        return this.data;
    }

}

type ObjectId = {
    id: string
}

class EstadoEliminar<T extends ObjectId> extends Estado<T> {
    eliminar(id: string) {
        this.data = this.data.filter( x => x.id !== id );
    }
}

const estadoEliminar = new EstadoEliminar<Usuario>();
estadoEliminar.getEstado();

class EstadoUsuarios extends Estado<Usuario> {
    reiniciarContrasenias() {
        // 
    }
}