import type { Cotizable } from '../interfaces/Cotizable.js';

export class ArticuloBase implements Cotizable {

    constructor(
        public nombre: string,
        protected precioBase: number,
        private stock: number
    ) {}

    actualizarStock(stock: number) {
        if (stock < 0) {
            console.log("Error, no es posible tener stock negativo");
        } else {
            this.stock += stock;
        }
    }

    calcularPrecioFinal(): number {
        return this.precioBase;
    }

}
