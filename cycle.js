let precioPrompt=prompt("Eliga que tipo de entrada al cine quiere y le dire el precio en total: \n2D \n3D \n2D DBOX \n3D DBOX \n(sino escriba: salir)");

class entradas {
    constructor(entrada, precio) {
        this.entrada = entrada;
        this.precio = precio;
    }
}

let entrada1 = new entradas("2D", 1080);
let entrada2 = new entradas("3D", 1160);
let entrada3 = new entradas("2D DBOX", 1380);
let entrada4 = new entradas("3D DBOX", 1440);
let compra = [];
let entrada;
let precio;

while(precioPrompt!="salir"){
    switch(precioPrompt){
        case "2D":
            console.log(entrada1);
            entrada = entrada1.entrada;
            precio = entrada1.precio;
            break;
        case "3D":
            console.log(entrada2);
            entrada = entrada2.entrada;
            precio = entrada2.precio;
            break;
        case "2D DBOX":
            console.log(entrada3);
            entrada = entrada3.entrada;
            precio = entrada3.precio;
            break;
        case "3D DBOX":
            console.log(entrada4);
            entrada = entrada4.entrada;
            precio = entrada4.precio;
            break;
        default:
            alert("Entrada no valida, intente de nuevo.")
            precioPrompt=prompt("Eliga que tipo de entrada al cine quiere y le dire el precio en total: \n2D \n3D \n2D DBOX \n3D DBOX \n(sino escriba: salir)");
            break;
    }
    let cantidad = parseInt(prompt("Cuantas unidades?"))
    compra.push ({entrada, cantidad, precio})

    precioPrompt = prompt("terminar compra?")
    if (precioPrompt == "si") {
        alert("gracias por comprar!")
        compra.forEach((compraFinal) => {
            console.log("compra:" + compraFinal.entrada + ", unidades:" + compraFinal.cantidad + ", total:" + compraFinal.cantidad * compraFinal.precio)
        } )
        break;
    }
    else if (precioPrompt == "no") {
        precioPrompt = prompt("que mas desea comprar?")
    }
}


//2D 1080 - 3D 1160 - 2D DBOX 1380 - 3D DBOX 1440