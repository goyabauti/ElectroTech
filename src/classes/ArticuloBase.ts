import type { Cotizable } from '../interfaces/Cotizable.js';

export abstract class ArticuloBase implements Cotizable { //interfaz aplicada

    constructor( //encapsulamiento de datos
        public nombre: string,
        protected precioBase: number,
        private stock: number
    ) {}

    actualizarStock(stock: number) { //metodos
        if (stock < 0) {
            throw new Error("No se puede poner stock negativo");
        } else {
            this.stock += stock;
            console.log("El stock fue actualizado correctamente")
        }
    }

    calcularPrecioFinal(): number { //metodos
        return this.precioBase;
    }

}
