import {describe, test, expect} from 'vitest';

import { Chips, Keys } from './ElectroTech.js';

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

})