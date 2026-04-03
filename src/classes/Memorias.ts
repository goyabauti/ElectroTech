import { ArticuloBase } from './ArticuloBase.js';

export class Memorias extends ArticuloBase {
    gigabyte: number;

    constructor(nombre: string, precioBase: number, stock: number, gigabyte: number) {
        super(nombre, precioBase, stock);
        this.gigabyte = gigabyte;
    }

    calcularPrecioFinal(): number {
        return (this.precioBase * 1.21) + 500 * this.gigabyte;
    }

}
