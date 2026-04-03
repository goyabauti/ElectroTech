import { ArticuloBase } from './ArticuloBase.js';

export class Chips extends ArticuloBase { //herencia
    peso: number;

    constructor(nombre: string, precioBase: number, stock: number, peso: number) {
        super(nombre, precioBase, stock);
        this.peso = peso;
    }

    calcularPrecioFinal(): number { // POLIMORFISMO
        return (this.precioBase * 1.21) + 500 * this.peso;
    }

}
