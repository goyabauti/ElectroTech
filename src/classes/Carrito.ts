import type { Cotizable } from "../interfaces/Cotizable.js";

export class Carrito{
    private items: Cotizable[] = []; //mi carrito es privado y solo acepta cosas "cotizables"

    agregarItem(item: Cotizable){ //nuevo metodo para agregar esas cosas al carrito
        this.items.push(item);
    }

    calcularTotalCarrito(): number{
        let total = 0; //la cuenta empieza ocn cero items, let me deja tener una variable que cambie su valor luego

        for (const producto of this.items){ //por cada producto que esta adentro de mi lista "this.items" itera y me agrega el item
            total = total + producto.calcularPrecioFinal();
        }

        return total;
    }
}
