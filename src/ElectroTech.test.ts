import {describe, test, expect, Experimental} from 'vitest';

function calcularTierCliente(puntos: number): string{
    if(puntos < 0){
        return "ERROR"
    } 

    else if(puntos >= 0 && puntos <= 100){
        return "RANGO BRONCE"
    }

    else if(puntos > 100 && puntos <= 500){
        return "RANGO PLATA"
    }

    else {
        return "RANGO ORO"
    }

}

describe ("Que rango de cliente tenes, segun tus puntos", () => {

    test("Puntos 0 = Error", () => {

        const rango = calcularTierCliente(-5)

        expect(rango).toBe("ERROR")
        })

    

    test("Puntos entre 0 y 100 = BRONCE", () => {

        const rango = calcularTierCliente(57)

        expect(rango).toBe("RANGO BRONCE")
    })

    test("Puntos entre 100 y 500 = PLATA", () => {

        const rango = calcularTierCliente(249)

        expect(rango).toBe("RANGO PLATA")
    })

    test("Puntos +500 = ORO", () => {

        const rango = calcularTierCliente(777)

        expect(rango).toBe("RANGO ORO")
    })
})