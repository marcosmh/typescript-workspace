// Utilities types

type Punto = {
    x: number,
    y: number,
    desc?: string
}


type PuntoOpcional = Partial<Punto>;
type PuntoRequerido = Required<Punto>;

const keyVal: Record<string, number> = {
    'soy un string': 42
}

type kv = { [key: string]: number }

const p: Omit<Punto,'desc' | 'y'> = {
    x: 1,
    //
}

const p1: Pick<Punto, 'x' | 'y'> = {
    x: 1,
    y: 2
}

const readOnlyP: Readonly<Punto> = {
  x: 1,
  y: 2,
  desc: 'descripcion'
}

readOnlyP.x.toString();

