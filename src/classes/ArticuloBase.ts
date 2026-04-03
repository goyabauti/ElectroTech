import type { Cotizable } from '../interfaces/Cotizable.js';

export class ArticuloBase implements Cotizable { //interfaz aplicada

    constructor(
        public nombre: string,
        protected precioBase: number,
        private stock: number
    ) {}

    actualizarStock(stock: number) {
        if (stock < 0) {
            throw new Error("No se puede poner stock negativo");
        } else {
            this.stock += stock;
        }
    }

    calcularPrecioFinal(): number {
        return this.precioBase;
    }

}
