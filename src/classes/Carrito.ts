import type { Cotizable } from "../interfaces/Cotizable.js";

export class Carrito{ // composicion, carrito es una lista de mis objetos "cotizables" 
    private items: Cotizable[] = []; 

    agregarItem(item: Cotizable){ 
        this.items.push(item);
    }

    calcularTotalCarrito(): number{ // polimorfismo, carrito agrega items indiferentemente de como son, pero los trabaja de manera distinta (IVA, peso)
        let total = 0; //la cuenta empieza ocn cero items, let me deja tener una variable que cambie su valor luego

        for (const producto of this.items){ //por cada producto que esta adentro de mi lista "this.items" itera y me agrega el item
            total = total + producto.calcularPrecioFinal();
        }

        return total;
    }
}
