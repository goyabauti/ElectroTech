import type { Cotizable } from '../interfaces/Cotizable.js';

export function imprimirTicket(item: Cotizable): void { //aplicando polimorfismo con ayuda de la interfaz
    console.log(" Ticket generado por: $", item.calcularPrecioFinal());
}
