import { ArticuloBase } from './ArticuloBase.js';

export class Suscripcion extends ArticuloBase {

    constructor(nombre: string, precioBase: number, stock: number) {
        super(nombre, precioBase, stock);
    }

    calcularPrecioFinal(): number {
        return (this.precioBase * 1.10);
    }

}
