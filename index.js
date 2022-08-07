const botonareacuadradro = document.getElementById("BotonAreaC").addEventListener("click", areacuadrado);

function areacuadrado(){
    const lado = Number (document.getElementById("LCuadrado").value);
    const divres = document.getElementById("AreaC");

    resultado = lado * lado;
    
    divres.innerText = resultado;
}

const botonareatriangulo = document.getElementById("BotonAreaT").addEventListener("click", areatriangulo);

function areatriangulo(){
    const altura= Number (document.getElementById("Atriangulo").value);
    const base = Number (document.getElementById("Btriangulo").value);
    const divres = document.getElementById("AreaT");

    resultado = (base * altura);
    
    divres.innerText = resultado;
}

const botonprecio = document.getElementById("BtnDescuento").addEventListener("click", descuento);

function descuento(){
    const precioarticulo= Number (document.getElementById("Precio").value);
    const divres = document.getElementById("ResDescuento");
    
    if (precioarticulo >1000){
        descuento = precioarticulo * .30;
        precio = precioarticulo -descuento;

        divres.innerText = precio;
    }
    else{
        if (precioarticulo< 500){
            descuento = precioarticulo * .10;
            precio = precioarticulo -descuento;

            divres.innerText = precio;
        }
        else{
            divres.innerText = "El articulo no tiene descuento";
        }
        ;
    }
}

const botonparimpar = document.getElementById("BtnParImpar").addEventListener("click", parimpar);

function parimpar(){
    const numero = Number (document.getElementById("numeroParImpar").value);
    const divres = document.getElementById("ParImpar");

    residuo = numero % 2;

    if (residuo == 0){
        divres.innerText = "El numero " + numero +" es par";
    }
    else{
        divres.innerText = "El numero " + numero +" es impar";
    }
}

const botonsecuencia = document.getElementById("Btnnumeros").addEventListener("click", secuencia);

function secuencia(){
    const listado = document.getElementById("ResSecuencia");

    for( let x=100; x>=1; x--){
            const listas = document.createElement("li");
            listas.setAttribute("class", "list-group-item");
            // <li class="list-group-item">
            listas.innerText = x;
            listado.appendChild(listas);    
    }

}