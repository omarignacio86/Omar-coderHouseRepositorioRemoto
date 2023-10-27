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
const figurasGeometricas = []

let formulario = document.getElementById("formulario")
let rectangulo = document.getElementById("rectangulo")
let circulo = document.getElementById("circulo")
let lado1 = document.getElementById("lado1")
let lado2 = document.getElementById("lado2")
let radio = document.getElementById("radio")
let tablaresultados=document.getElementById("tablaresultados")
rectangulo.addEventListener("click", function () {
        
        lado1.disabled = false
        lado2.disabled = false
        radio.disabled = true
    }
)/*hay q especificar no va formulrio si no rectngulo */
circulo.addEventListener("click", function () {
   
        radio.disabled = false
        lado1.disabled = true
        lado2.disabled = true
    }
)/*ver porq el comportmiento no sigue el del ejemplo */

formulario.addEventListener("submit", function (e) { 
    e.preventDefault() 
    /*lado1value = parseInt(document.getElementById("lado1").value)
    lado2value = parseInt(document.getElementById("lado2").value) 
    radiovalue = parseInt(document.getElementById("radio").value)*/

    if (lado1.value !="" && lado2.value !="") {
    const rectangulo1 = new RECTANGULO()     
    let superficieR = Math.round(rectangulo1.calcularSuperficieRectangulo(lado1.value, lado2.value))
    rectangulo1.lado = lado1.value
    rectangulo1.base = lado2.value
    rectangulo1.superficie = superficieR
    figurasGeometricas.push(rectangulo1)
    let newRow = tablaresultados.insertRow(-1)
    let newLado1cell = newRow.insertCell(0)
    newLado1cell.textContent = rectangulo1.lado
    
    newLado1cell = newRow.insertCell(1)
    newLado1cell.textContent = rectangulo1.base

    newLado1cell = newRow.insertCell(2)
    newLado1cell.textContent = "Sin Valor"

    newLado1cell = newRow.insertCell(3)
    newLado1cell.textContent = rectangulo1.superficie
    
    console.log(figurasGeometricas.length)
    
        
}
else if (radio.value != "") {
    const circulo1 = new CIRCULO()
    let superficieC = Math.round(circulo1.calcularSuperficieCirculo(radio.value))
    circulo1.radio = radio.value
    circulo1.superficie = superficieC
    figurasGeometricas.push(circulo1)
    let newRow = tablaresultados.insertRow(-1)
    let newLado1cell = newRow.insertCell(0)
    newLado1cell.textContent = "Sin valor"

    newLado1cell = newRow.insertCell(1)
    newLado1cell.textContent = "Sin valor"

    newLado1cell = newRow.insertCell(2)
    newLado1cell.textContent = circulo1.radio

    newLado1cell = newRow.insertCell(3)
    newLado1cell.textContent = circulo1.superficie
        
    
   
    
}
    
else {
    let mensaje1 = document.createElement("p")
    mensaje1.textContent = ("Complete los campos por favor")
    document.body.appendChild(mensaje1)
}
})

console.log(figurasGeometricas.length)

let guardar = document.getElementById("save")
let recuperarDatos=document.getElementById("recuperar")

guardar.addEventListener("click", function (x) {
    let figurasGeometricasJSON=JSON.stringify(figurasGeometricas)
    localStorage.setItem("figurasGuardadas",figurasGeometricasJSON)
    
})

recuperarDatos.addEventListener("click", function () {
    let figurasString= localStorage.getItem("figurasGuardadas")
    let figurasGeometricasJSONParse = JSON.parse(figurasString)
    console.log(figurasString)
    console.log(figurasGeometricasJSONParse)
    for (let i = 0; i < figurasGeometricasJSONParse.length; i++){
        if (figurasGeometricasJSONParse[i].lado != "") {
            let newRow1 = tablaresultados.insertRow(-1)
            let newLado2cell = newRow1.insertCell(0)
           newLado2cell.textContent = figurasGeometricasJSONParse[i].lado

            newLado2cell = newRow1.insertCell(1)
            newLado2cell.textContent = figurasGeometricasJSONParse[i].base

            newLado2cell = newRow1.insertCell(2)
            newLado2cell.textContent = "Sin Valor"

            newLado2cell = newRow1.insertCell(3)
            newLado2cell.textContent = figurasGeometricasJSONParse[i].superficie
     
        }
        else if (figurasGeometricasJSONParse[i].lado == "") {
            let newRow2 = tablaresultados.insertRow(-1)
            let newLado3cell = newRow2.insertCell(0)
            newLado3cell.textContent = "Sin Valor"

            newLado3cell = newRow2.insertCell(1)
            newLado3cell.textContent = "Sin Valor"

            newLado3cell = newRow2.insertCell(2)
            newLado3cell.textContent = figurasGeometricasJSONParse[i].radio

            newLado3cell = newRow2.insertCell(3)
            newLado3cell.textContent = figurasGeometricasJSONParse[i].superficie

        }


    }
    
})


