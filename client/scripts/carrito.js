function mostrarProximamente () {
    alert("Proximamente")
}

function incrementarArticulo (id) {
    const elemento = document.getElementById(id)
    elemento.value = Number(elemento.value) + 1
}

function decrementarArticulo (id) {
    const elemento = document.getElementById(id)
    elemento.value = Math.max(Number(elemento.value) - 1, 0) 
}
