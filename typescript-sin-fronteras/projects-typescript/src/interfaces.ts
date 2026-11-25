// Interfaces


interface Animal {

    name: string;

    caminar(): void;

     onomatopeya(): void;
   
}

class Caballo implements Animal {
    
    name: string = 'Rocinante';

    caminar(): void {
        console.log('caminando');
    }

    onomatopeya(): void {
        console.log('relinchando');
    }

}

class Cerdo implements Animal {
    
    name: string = 'Porky';

    caminar(): void {
        console.log('caminando');
    }

    onomatopeya(): void {
        console.log('oink');
    }

}


class Perro implements Animal {
    name: string = 'Dody';

    caminar(): void {
        console.log('caminando');
    }
    onomatopeya(): void {
        console.log('ladrando!');
    }
    
}

