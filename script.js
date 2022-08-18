let namePrompt = prompt ("Hola! \n¿Cual es tu nombre?")
isCancellable = false;
let greetings = document.getElementById("h1-header");
greetings.innerHTML = "HOLA " + namePrompt.toUpperCase();

while(namePrompt=="" || namePrompt == null){
    switch(namePrompt){
        default:
            alert("Nombre no valido, intente de nuevo.")
            namePrompt=prompt("¿Cual es tu nombre?");
            break;
    }
}

class tickets {
    constructor(ticket, price) {
        this.ticket = ticket;
        this.price = price;
    }
}

let ticketGeneral = new tickets("ENTRADA GENERAL", 1080);
let ticket3D = new tickets("ENTRADA 3D", 1160);
let ticketDBOX = new tickets("ENTRADA DBOX", 1380);
let ticketStar = new tickets("ENTRADA STAR", 1440);

let generalTicket = document.getElementById("general-ticket");
generalTicket.innerHTML = ticketGeneral.ticket;
let priceGeneralTicket = document.getElementById("general-ticket-price-general");
priceGeneralTicket.innerHTML = "$" + ticketGeneral.price;


let special3dTicket = document.getElementById("special-ticket-3D");
special3dTicket.innerHTML = ticket3D.ticket;
let priceSpecial3dTicket = document.getElementById("special-ticket-price-3D");
priceSpecial3dTicket.innerHTML = "$" + ticket3D.price;


let specialDboxTicket = document.getElementById("special-ticket-DBOX");
specialDboxTicket.innerHTML = ticketDBOX.ticket;
let priceSpecialDboxTicket = document.getElementById("special-ticket-price-DBOX");
priceSpecialDboxTicket.innerHTML = "$" + ticketDBOX.price;


let specialStarTicket = document.getElementById("special-ticket-star");
specialStarTicket.innerHTML = ticketStar.ticket;
let priceSpecialStarTicket = document.getElementById("special-ticket-price-star");
priceSpecialStarTicket.innerHTML = "$" + ticketStar.price;

const ticketCart = [{ id: 1,  product: "general", price:  1080},
                  {  id: 2,  product: "special3D", price: 1160},
                  {  id: 3,  product: "specialDBOX"  , price: 1380},
                  {  id: 4,  product: "specialStar" , price: 1440}
                ];

const saveLocal = (name, value) => {localStorage.setItem(name, value)};

window.onload = function() {
    let button1 = document.getElementById("btng");
    button1.onclick = addToCart;
}

function addToCart() {
    let button1 = document.getElementById("btng");
}

let cart=document.getElementsByClassName("cart");
//2D 1080 - 3D 1160 - 2D DBOX 1380 - 3D DBOX 1440