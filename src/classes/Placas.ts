import { ArticuloBase } from './ArticuloBase.js';

export class Placas extends ArticuloBase {
    socketRam: number;

    constructor(nombre: string, precioBase: number, stock: number, socketRam: number) {
        super(nombre, precioBase, stock);
        this.socketRam = socketRam;
    }

    calcularPrecioFinal(): number {
        return (this.precioBase * 1.21) + 500 * this.socketRam;
    }

}
