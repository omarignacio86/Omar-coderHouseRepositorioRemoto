class RECTANGULO {
    constructor(Id, base, lado, superficie) {
        this.Id = Id
        this.base = base
        this.lado = lado
        this.superficie = superficie
    }

    calcularSuperficieRectangulo(lado, base) { return lado * base }


}

class CIRCULO {
    constructor(Id, radio, superficie) {
        this.Id = Id
        this.radio = radio
        this.superficie = superficie
    }

    calcularSuperficieCirculo(radio) { return Math.PI * radio * radio }

}

//SECCIÓN DE VARIABLES 
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
let tablaresultados = document.getElementById("tablaresultados")
let figurasString = localStorage.getItem("figurasGuardadas")
let contenedor1 = document.getElementById("datos1")

//FUNCIÓN PARA GENERAR ID 
function obtenerNuevoId() {
    let ultimoId = localStorage.getItem("ultimoId") || "-1"
    let nuevoId = JSON.parse(ultimoId) + 1
    localStorage.setItem("ultimoId", JSON.stringify(nuevoId))
    return nuevoId
}

//FUNCION PARA BORRAR DATOS DEL LOCAL STORAGE
function borrarObjeto(Id) {
    console.log("figurasGeometricasJSONParse1 = " + figurasString)
    let figurasGeometricas1 = figurasGeometricas.findIndex(x => x.Id === Id)
    figurasGeometricas.splice(figurasGeometricas1, 1)
    let figurasGeometricasJSONParse1 = JSON.parse(localStorage.getItem("figurasGuardadas"))
    if (figurasGeometricasJSONParse1) {
        let figurasIdArray = figurasGeometricasJSONParse1.findIndex(x => x.Id === Id)
        figurasGeometricasJSONParse1.splice(figurasIdArray, 1)
        let figurasGeometricasJSON = JSON.stringify(figurasGeometricasJSONParse1)
        localStorage.setItem("figurasGuardadas", figurasGeometricasJSON)
        Toastify({
            text: "Elimino los datos guardados en el Local Storage",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "center",
            style: { background: "linear-gradient(to right, #00b09b, #96c93d)" },
        }).showToast();
    }
    
}

//SECCION DE RECUPERACIÓN DE DATOS
if (figurasString != "[]") {
    if (figurasString) {
        contenedor1.innerHTML = `    <h2>Tiene datos almacenados</h2> 
                                <label> ¿Desea Recuperarlos?</label>        
                                 <button id="recuperar">SI</button>
                                 <button id="noRecuperar">NO</button>`


        let recuperarDatos = document.getElementById("recuperar")
        recuperarDatos.addEventListener("click", function () {
            let figurasGeometricasJSONParse = JSON.parse(figurasString)
            figurasGeometricasJSONParse.forEach(function (x) { (figurasGeometricas).push(x) });
            console.log(figurasString)
            console.log(figurasGeometricasJSONParse)
            console.log(figurasGeometricas)


            for (let i = 0; i < figurasGeometricas.length; i++) {
                if (figurasGeometricas[i].lado != undefined || figurasGeometricas[i].radio == "") {
                    let newRow1 = tablaresultados.insertRow(-1)
                    newRow1.setAttribute("filaId", figurasGeometricas[i].Id)


                    let newLado2cell = newRow1.insertCell(0)
                    newLado2cell.textContent = figurasGeometricas[i].lado

                    newLado2cell = newRow1.insertCell(1)
                    newLado2cell.textContent = figurasGeometricas[i].base

                    newLado2cell = newRow1.insertCell(2)
                    newLado2cell.textContent = "Sin Valor"

                    newLado2cell = newRow1.insertCell(3)
                    newLado2cell.textContent = figurasGeometricas[i].superficie

                    let newDeleteCell = newRow1.insertCell(4)
                    let deleteButton = document.createElement("Button")
                    deleteButton.textContent = "Eliminar"
                    newDeleteCell.appendChild(deleteButton)

                    deleteButton.addEventListener("click", function (event) {
                        let filaBorrada = event.target.parentNode.parentNode
                        let filaBorradaId = parseInt(filaBorrada.getAttribute("filaId"))
                        event.target.parentNode.parentNode.remove()
                        borrarObjeto(filaBorradaId)
                    })



                }
                else if (figurasGeometricas[i].radio != undefined || figurasGeometricas[i].lado == "") {
                    let newRow2 = tablaresultados.insertRow(-1)
                    newRow2.setAttribute("filaId", figurasGeometricas[i].Id)

                    let newLado3cell = newRow2.insertCell(0)
                    newLado3cell.textContent = "Sin Valor"

                    newLado3cell = newRow2.insertCell(1)
                    newLado3cell.textContent = "Sin Valor"

                    newLado3cell = newRow2.insertCell(2)
                    newLado3cell.textContent = figurasGeometricas[i].radio

                    newLado3cell = newRow2.insertCell(3)
                    newLado3cell.textContent = figurasGeometricas[i].superficie

                    let newDeleteCell = newRow2.insertCell(4)
                    let deleteButton = document.createElement("Button")
                    deleteButton.textContent = "Eliminar"
                    newDeleteCell.appendChild(deleteButton)

                    deleteButton.addEventListener("click", function (event) {
                        let filaBorrada = event.target.parentNode.parentNode
                        let filaBorradaId = parseInt(filaBorrada.getAttribute("filaId"))
                        event.target.parentNode.parentNode.remove()
                        borrarObjeto(filaBorradaId)
                    })

                }
                contenedor1.style.visibility = "hidden"
            }
        })
        let noRecuperarDatos = document.getElementById("noRecuperar")
        noRecuperarDatos.addEventListener("click", function () {
            let vacio = []
            let vacioJSON = JSON.stringify(vacio)
            localStorage.setItem("figurasGuardadas", vacioJSON)
            contenedor1.style.visibility = "hidden"
        })

    }
    else { contenedor1.style.visibility = "hidden" }
}

//SECIÓN DE ASOCIACIÓN DE RADIO BOTONES Y LOS INPUT TYPE NUMBER
rectangulo.addEventListener("click", function () {

    lado1.disabled = false
    lado2.disabled = false
    radio.disabled = true
}
)


circulo.addEventListener("click", function () {

    radio.disabled = false
    lado1.disabled = true
    lado2.disabled = true

}
)

//SECCIÓN DE CALCULOS MEDIANTE DATOS INGESADOS EN EL FORMULARIO
formulario.addEventListener("submit", function (e) {
    e.preventDefault()
  
    if (lado1.value != "" && lado2.value != "") {
        const rectangulo1 = new RECTANGULO()
        let superficieR = Math.round(rectangulo1.calcularSuperficieRectangulo(lado1.value, lado2.value))
        console.log(typeof (superficieR))
        rectangulo1.lado = lado1.value
        rectangulo1.base = lado2.value
        rectangulo1.superficie = superficieR
        rectangulo1.Id = obtenerNuevoId()
        figurasGeometricas.push(rectangulo1)
        let newRow = tablaresultados.insertRow(-1)
        newRow.setAttribute("filaId", rectangulo1.Id)

        let newLado1cell = newRow.insertCell(0)
        newLado1cell.textContent = rectangulo1.lado

        newLado1cell = newRow.insertCell(1)
        newLado1cell.textContent = rectangulo1.base

        newLado1cell = newRow.insertCell(2)
        newLado1cell.textContent = "Sin Valor"

        newLado1cell = newRow.insertCell(3)
        newLado1cell.textContent = rectangulo1.superficie

        let newDeleteCell = newRow.insertCell(4)
        let deleteButton = document.createElement("Button")
        deleteButton.textContent = "Eliminar"
        newDeleteCell.appendChild(deleteButton)

        deleteButton.addEventListener("click", function (event) {
            let filaBorrada = event.target.parentNode.parentNode
            let filaBorradaId = parseInt(filaBorrada.getAttribute("filaId"))
            event.target.parentNode.parentNode.remove()
            borrarObjeto(filaBorradaId)
        })

        formulario.reset()


    }
    else if (radio.value != "") {
        const circulo1 = new CIRCULO()
        let superficieC = Math.round(circulo1.calcularSuperficieCirculo(radio.value))
        circulo1.radio = radio.value
        circulo1.superficie = superficieC
        circulo1.Id = obtenerNuevoId()
        figurasGeometricas.push(circulo1)
        let newRow = tablaresultados.insertRow(-1)
        newRow.setAttribute("filaId", circulo1.Id)

        let newLado1cell = newRow.insertCell(0)
        newLado1cell.textContent = "Sin valor"

        newLado1cell = newRow.insertCell(1)
        newLado1cell.textContent = "Sin valor"

        newLado1cell = newRow.insertCell(2)
        newLado1cell.textContent = circulo1.radio

        newLado1cell = newRow.insertCell(3)
        newLado1cell.textContent = circulo1.superficie

        let newDeleteCell = newRow.insertCell(4)
        let deleteButton = document.createElement("Button")
        deleteButton.textContent = "Eliminar"
        newDeleteCell.appendChild(deleteButton)


        deleteButton.addEventListener("click", function (event) {
            let filaBorrada = event.target.parentNode.parentNode
            let filaBorradaId = parseInt(filaBorrada.getAttribute("filaId"))
            event.target.parentNode.parentNode.remove()
            borrarObjeto(filaBorradaId)
        })


        formulario.reset()
    }

    else {
        /*let mensaje1 = document.createElement("p")
        mensaje1.textContent = ("Complete los campos por favor")
        document.body.appendChild(mensaje1)*/
        Toastify({
            text: "Introduzca los datos faltantes.",
            duration: 4000,
            close: true,
            gravity: "top",
            position: "center",
            style: { background: "red" },
        }).showToast();
    }
})


//SECCIÓN PARA GUARDAR DATOS EN EL LOCAL STORAGE
let guardar = document.getElementById("save")

guardar.addEventListener("click", function () {
    let figurasGeometricasJSON = JSON.stringify(figurasGeometricas)
    localStorage.setItem("figurasGuardadas", figurasGeometricasJSON)
    Toastify({
        text: "Datos guardados en el Local Storage",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "center",
        style: { background: "linear-gradient(to right, #00b09b, #96c93d)" },
    }).showToast();
})



