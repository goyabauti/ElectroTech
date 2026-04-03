import type { Cotizable } from '../interfaces/Cotizable.js';

export function imprimirTicket(item: Cotizable): void {
    console.log(" Ticket generado por: $", item.calcularPrecioFinal());
}
