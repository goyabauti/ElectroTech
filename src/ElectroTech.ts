interface Cotizable { //interface

    calcularPrecioFinal(): number
    
}

 export class ArticuloBase implements Cotizable { //clases e interfaz aplicada
    
    constructor (public nombre: string, protected precioBase: number, private stock: number){//encapsulamiento
        
    }

    actualizarStock(stock: number){
        if(stock < 0){
            console.log("Error, no es posible tener stock negativo")
        }
        else {
         this.stock += stock
        }

    }

    calcularPrecioFinal(): number{
        return this.precioBase;
    }

}

class Placas extends ArticuloBase { //herencia
    peso: number

    constructor(nombre: string, precioBase: number, stock: number, peso: number){
        super(nombre, precioBase,stock)
        this.peso = peso   
    }
    
    calcularPrecioFinal(): number {
        return (this.precioBase * 1.21) + 500 * this.peso
    }

}

class Memorias extends ArticuloBase {
    peso: number

    constructor(nombre: string, precioBase: number, stock: number, peso: number){
        super(nombre, precioBase,stock)
        this.peso = peso   
    }
    
    calcularPrecioFinal(): number {
       return (this.precioBase * 1.21) + 500 * this.peso
    }
    

}

export class Chips extends ArticuloBase { 
    peso: number

    constructor(nombre: string, precioBase: number, stock: number, peso: number){
        super(nombre, precioBase,stock)
        this.peso = peso   
    }
    
    calcularPrecioFinal(): number { //POLIMORFISMO
        return (this.precioBase * 1.21) + 500 * this.peso
    }
    

}

export class Keys extends ArticuloBase {

    constructor(nombre: string, precioBase: number, stock: number){
        super(nombre,precioBase, stock)
    }

    calcularPrecioFinal(): number { //POLIMORFISMO
       return (this.precioBase * 1.10)
    }

}

class Suscripcion extends ArticuloBase {

    constructor(nombre: string, precioBase: number, stock: number){
        super(nombre, precioBase, stock)
    }

    calcularPrecioFinal(): number {
        return (this.precioBase * 1.10) 
    }

}

export function imprimirTicker(item : Cotizable) { //aplicando polimorfismo con ayuda de la interfaz
    console.log(" Ticket generado por: $", item.calcularPrecioFinal())

}

