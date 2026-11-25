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

class DatosBasicos {

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

}


let producto1 = new Producto('Iphone','Iphone Pro Max',new Date(), 1, 100, 1 );
let categoria1 = new Categoria('Celulares','',new Date(), 1);

categoria1.agregarProducto(producto1);

console.log(producto1);
console.log(producto1.fullDesc);

console.log(categoria1);
console.log(categoria1.fullDesc);