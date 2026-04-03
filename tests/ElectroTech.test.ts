import {describe, test, expect} from 'vitest';

import { Chips, Keys, Memorias, Placas, Suscripcion } from '../src/index.js';
import { Carrito } from '../src/classes/Carrito.js';

describe("Test Unitarios", () => {

    test("Prueba de calcular precio para chips", () => {

        const chip1 = new Chips ("Chip Samsung A14", 1000, 20, 2)
        
        const precioFinalChip = chip1.calcularPrecioFinal();

        expect(precioFinalChip).toBe(2210)
    })

    test("Prueba de calcular precio para Keys", () => {

        const key1 = new Keys ("Llave de steam para Call of Duty", 5000, 10)

        const precioFinalKeys = key1.calcularPrecioFinal();

        expect(precioFinalKeys).toBe(5500)

    })

    test("Agregando items al carrito", () => {

        const carrito = new Carrito();

        const placa1 = new Placas ("B760M", 1500, 30, 4); 
        
        const suscripcionW = new Suscripcion ("Windows 11", 2500, 50);

        carrito.agregarItem(placa1);
        carrito.agregarItem(suscripcionW);

        const totalPagar = carrito.calcularTotalCarrito();

        expect(totalPagar).toBe(6565)

    })

    test ("Error al poner stock negativo", () => {

        const memoria1 = new Memorias ("Kingston 1Tb", 2750, 5, 1024)

        expect(() => {
            memoria1.actualizarStock(-5)
        }).toThrowError("No se puede poner stock negativo") 
    })

})