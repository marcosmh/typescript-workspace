// Type Unknown

function procesa(algo: unknown) {
    if(typeof algo === 'string') {
        algo.toUpperCase();
    }

    if(typeof algo === 'number') {
        algo.toPrecision(2);
    }

    
}