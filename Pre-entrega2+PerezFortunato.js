class RECTANGULO{
    constructor(base, lado,superficie) {
        this.base = base
        this.lado = lado
        this.superficie=superficie
    }

    calcularSuperficieRectangulo(lado, base) { return lado * base }
    

}

class CIRCULO{
    constructor(radio,superficie) {
        this.radio = radio
        this.superficie=superficie
    }
    
    calcularSuperficieCirculo(radio){return Math.PI*radio*radio}

}

let condición = true
let opción;
let opción1;
const figurasGeometricas=[]
while (condición) {
    do {
        alert("Bienvenido a Geometria 2.0: ")
        opción = parseInt(prompt("Para indicar cual es la superficie que desea calcular, elija entre las opciones del 1 al 4 por favor:\n" + "1-Rectangulo\n" + "2-Circulo\n" + "3-Mostrar Resultdos\n" + "4-Salir\n"))
        if (opción < 1 || opción > 4) { alert("La opción ingresada no es correcta") }

    } while (opción < 1 || opción > 4)

    if (opción == 1) {
        rectangulo1=new RECTANGULO()/*primerocreo el objeto porq necesito llamarlo para la funcion*/
        let lado1 = prompt("Ingrese el valor del lado 1 del rectangulo (Valor en metros).")
        let lado2 = prompt("Ingrese el valor del lado 2 del rectangulo (Valor en metros).")
        let superficieR = Math.round(rectangulo1.calcularSuperficieRectangulo(lado1, lado2))
        rectangulo1.lado = lado1
        rectangulo1.base = lado2
        rectangulo1.superficie=superficieR
        alert("La superficie es = " + superficieR)
        
        figurasGeometricas.push(rectangulo1)
    }
    else if (opción == 2) {
        circulo1=new CIRCULO()
        let radio1 = prompt("Ingrese el valor del lado radio del circulo (Valor en metros).")
        let superficieC = Math.round(circulo1.calcularSuperficieCirculo(radio1))
        circulo1.radio = radio1
        circulo1.superficie=superficieC
        alert("La superficie es = " + superficieC)
        figurasGeometricas.push(circulo1)   

        /*NO RESPONDE PORQUE HAY Q DECLARAR EL OBJETO
        let R = prompt("Ingrese el valor del lado radio del circulo (Valor en metros).")
        let superficieC = calcularSuperficieCirculo(R)
        circulo1 = new CIRCULO(R, superficieC)
        alert("superficie = " + superficieC)
        figurasGeometricas.push(circulo1)*/
    }
    else if (opción == 3) {
        alert("El número de objetos en el array es = " + figurasGeometricas.length)
        do {
            opción1 = parseInt(prompt("Por favor seleccione entre las siguientes opciones:\n" + "1-Deseo ver los valores de todas las figuras geométricas\n" + "2-Deseo ver los valores correspondientes a los rectangulos\n" + "3-Deseo ver los valores correspondientes a las circunferencias\n" + "4-Salir"))
            if (opción1 < 1 || opción1 > 4) { alert("La opción ingresada no es correcta") }

        } while (opción1 < 1 || opción1 > 4)

        if (opción1 == 1) {
            console.log("lado" + "\t\t\t" + "base" + "\t\t\t" + "radio" + "\t\t\t" + "superficie")
            for (let i = 0; i < figurasGeometricas.length; i++) {
                console.log(" " + figurasGeometricas[i].base + "\t\t\t" + figurasGeometricas[i].lado + "\t\t" + figurasGeometricas[i].radio + "\t\t\t" + figurasGeometricas[i].superficie)
            }
        }

        if (opción1 == 2) {
            console.log("lado" + "\t\t\t" + "base" + "\t\t\t" + "\t\t\t" + "superficie")
            const arrayRectangulo = figurasGeometricas.filter(function (x) { return x.lado = x.lado })
            for (let i = 0; i < arrayRectangulo.length; i++) {
                console.log(" " + figurasGeometricas[i].base + "\t\t\t" + figurasGeometricas[i].lado + "\t\t" + figurasGeometricas[i].radio + "\t\t\t" + figurasGeometricas[i].superficie)
            }
        }

        if (opción1 == 3) {
            console.log("radio" + "\t\t\t" + "superficie")
            const arrayCirculo = figurasGeometricas.filter(function (x) { return x.radio = x.radio })
            for (let i = 0; i < arrayCirculo.length; i++) {
                console.log(" " + arrayCirculo[i].radio + "\t\t\t" + arrayCirculo[i].superficie)
            }
        }

        if (opción1 ==4){condición=false}
    
    
    }

    else {condición=false}
}  

console.log("Gracias por usar el programa.")