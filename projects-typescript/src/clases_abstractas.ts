// Herencia

/**
 * Producto:
 * name
 * desc
 * created_at
 * created_by
 * stock
 * sku
 * 
 * Categoria
 * name
 * desc
 * created_at
 * created_by
 * 
 */

abstract class DatosBasicos {

    constructor(
        public name: string,
        public desc: string,
        protected created_at: Date,
        protected created_by: number
    ) {}

    get fullYear() {
        return this.created_at.getFullYear();
    }

    get fullDesc(): string {
        return this.name + ' - ' + this.desc;
    }

    abstract guardar(): void;

}

class Producto extends DatosBasicos {
    
    constructor(
        name: string,
        desc: string,
        created_at: Date,
        created_by: number,

        public stock: number,
        public sku: number
    ) {
        super(name, desc, created_at, created_by);
    }

    override get fullDesc() {
        return 'Producto: ' + super.fullDesc;
    }


    guardar(): void {
        console.log("Guardar Producto");
    }

}

class Categoria extends DatosBasicos {

    public productos: Producto[] = [];

    constructor(
        name: string,
        desc: string,
        created_at: Date,
        created_by: number,
    ) {
        super(name, desc, created_at, created_by);
    }

    agregarProducto(producto: Producto) {
        this.productos.push(producto);
    }

    override get fullDesc() {
        return 'Categoria: ' + super.fullDesc;
    }

     guardar(): void {
        console.log("Guardar Categoria.");
    }

}


let producto1 = new Producto('Iphone','Iphone Pro Max',new Date(), 1, 100, 1 );
let categoria1 = new Categoria('Celulares','',new Date(), 1);

categoria1.agregarProducto(producto1);

console.log(producto1);
console.log(producto1.fullDesc);

console.log(categoria1);
console.log(categoria1.fullDesc);

// let datos = new DatosBasicos(1,"Dato1","Desc 1", new Date(), 1);