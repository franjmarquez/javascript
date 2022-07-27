let entrada=prompt("Eliga que tipo de entrada al cine quiere y le dire el precio en total: \n2D \n3D \n2D DBOX \n3D DBOX \n(sino escriba: salir)");
let segundaEntrada=prompt("Eliga su segunda entrada (limite de 2 por compra): \n2D \n3D \n2D DBOX \n3D DBOX \n(sino escriba: salir)");

let entrada2D = 1040;
let entrada3D = 1160;
let entrada2Ddbox = 1380;
let entrada3Ddbox = 1440;

while(entrada!="salir"){
    switch(entrada){
        case "2D":
            console.log("La entrada 2D esta $1040");
            productoUno = entrada2D;
            break;
        case "3D":
            console.log("La entrada 3D esta $1160");
            productoUno = entrada3D;
            break;
        case "2D DBOX":
            console.log("La entrada 2D en asiento DBOX esta $1380");
            productoUno = entrada2Ddbox;
            break;
        case "3D DBOX":
            console.log("La entrada 3D en asiento DBOX esta $1440");
            productoUno = entrada3Ddbox;
            break;
        default:
            console.log("Lo sentimos, intente de nuevo mas tarde.");
            break;
    }
    break;
}

function suma (productoUno, productoDos){
    let compra = productoUno + productoDos
    return compra
}

    while(segundaEntrada!="salir"){
        switch(segundaEntrada){
        case "2D":
            console.log("La entrada 2D esta $1040");
            productoDos = entrada2D;
            console.log("El total es " + compra);
            break;
        case "3D":
            console.log("La entrada 3D esta $1160");
            productoDos = entrada3D;
            console.log("El total es " + compra);
            break;
        case "2D DBOX":
            console.log("La entrada 2D en asiento DBOX esta $1380");
            productoDos = entrada2Ddbox;
            console.log("El total es " + compra);
            break;
        case "3D DBOX":
            console.log("La entrada 3D en asiento DBOX esta $1440");
            productoDos = entrada3Ddbox;
            console.log("El total es " + compra);
            break;
        default:
            console.log("Lo sentimos, intente de nuevo mas tarde.");
            break;
    }
    break;
}


// 3D 1160 - 2D DBOX 1380 - 3D DBOX 1440