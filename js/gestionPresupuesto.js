// TODO: Crear las funciones, objetos y variables indicadas en el enunciado

// TODO: Variable global
var presupuesto = 0;


function actualizarPresupuesto(p) {
    if (p >= 0) {
        presupuesto = p;
        return presupuesto;
    } else {
        console.log(`Se ha producido un error`);
        return -1;
    }
}

function mostrarPresupuesto() {
    return `Tu presupuesto actual es de ${presupuesto} €`;
}

function CrearGasto(pDescripcion, pValor) {
    this.descripcion = pDescripcion;

    if (pValor >= 0)
        this.valor = pValor;
    else
        this.valor = 0;

    this.mostrarGasto = function mostrar() {
        return `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €`;
    }
    this.actualizarDescripcion = function actDescr(pDescripcion) {
        this.descripcion = pDescripcion;
    }
    this.actualizarValor = function actValor(pValor) {
        if (pValor >= 0)
            this.valor = pValor;
    }
}

// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto
}
