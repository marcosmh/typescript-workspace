

class DiccionarioUsuarios {
    [id: string]: string;

}

let diccionarioUsuarios = new DiccionarioUsuarios();
diccionarioUsuarios['1a'] = 'usuario 1';
diccionarioUsuarios['a1'] = 'usuario 2';

console.log(diccionarioUsuarios);
