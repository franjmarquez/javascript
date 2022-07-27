let entrada=prompt("Eliga que tipo de entrada al cine quiere y le dire el precio en total: \n2D \n3D \n2D DBOX \n3D DBOX \n(sino escriba: salir)");

while(entrada!="salir"){
    switch(entrada){
        case "2D":
            console.log("La entrada 2D esta $1040");
            break;
        case "3D":
            console.log("La entrada 3D esta $1160");
            break;
        case "2D DBOX":
            console.log("La entrada 2D en asiento DBOX esta $1380");
            break;
        case "3D DBOX":
            console.log("La entrada 3D en asiento DBOX esta $1440");
            break;
        default:
            console.log("Lo sentimos, intente de nuevo mas tarde.");
            break;
    }
    break;
}

// 3D 1160 - 2D DBOX 1380 - 3D DBOX 1440