// Modulos

import { Point, PUNTOXY } from './modulos/Point';
import Group, { defaultGroups }  from './modulos/Group';
import { Animales, Chanchitos, Caballos } from './modulos/Animales';

// import * as G from './modulos/Group'; // wildcards


const point = new Point(1,2);
const group = new Group(1, 'Que la fuerza te acompañe');
// const group = new G.default(1, 'Que la fuerza te acompañe'); // wildcards


console.log(PUNTOXY.x);
console.log(defaultGroups.admin);
// console.log(G.defaultGroups.admin);

console.log(Animales, Chanchitos, Caballos);
