// Decoradores de Clades

function Route(ruta: string) {
    return (constructor: Function) => {
         console.log('Ejecutando el decorador de ruta');
         constructor.prototype.route = ruta;
    }

   

}


@Route('/productos')
class Products {
    find() {
        return "Producto";
    }
}

const p = new Products() as any;
console.log(p.route);