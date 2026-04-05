import { ArticuloBase } from './ArticuloBase.js';

export class Keys extends ArticuloBase { //herencia

    constructor(nombre: string, precioBase: number, stock: number) {
        super(nombre, precioBase, stock);
    }

    calcularPrecioFinal(): number { 
        return (this.precioBase * 1.10);
    }

}
