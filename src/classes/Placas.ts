import { ArticuloBase } from './ArticuloBase.js';

export class Placas extends ArticuloBase {
    peso: number;

    constructor(nombre: string, precioBase: number, stock: number, peso: number) {
        super(nombre, precioBase, stock);
        this.peso = peso;
    }

    calcularPrecioFinal(): number {
        return (this.precioBase * 1.21) + 500 * this.peso;
    }

}
