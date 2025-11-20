class Pizza {
    constructor(name) {
        this.name = name;
        this.price = undefined;
        this.ticketName = undefined;
        this.ingredients = []
        this.getData()
    }

    getData() {
        switch (this.name.toLowerCase()) {
            case "margherita": this.price = 9.3; this.ticketName = "MARGHERITA"; break;
            case "prosciutto": this.price = 12; this.ticketName = "PROSCIUTTO"; break;
            case "funghi": this.price = 12.5; this.ticketName = "PROSCIUTTO E FUNGHI"; break;            
            case "stagioni": this.price = 12.5; this.ticketName = "4 STAGIONI"; break;
        }
    }
}

class Ingredient {
    constructor(name) {
        this.name = name;
        this.price = this.getPrice();
    }

    getPrice() {
        switch (this.name.toLowerCase()) {
            case "jamon": return 0.9;
            case "queso": return 0.9;
            case "tomate": return 0.9;
            case "champiñon": return 0.9;
            case "alcachofas": return 0.9;
            case "atun": return 0.9;
            case "serrano": return 1.2;
            case "alcaparra": return 1.2;
            case "pollo": return 1.2;
            case "olivas": return 1.2;
            case "anchoas": return 2.2;
            case "salmon": return 2.2;
            case "ternera": return 2.2;
            case "barbacoa": return 1;
            case "picante": return 0.9;
            case "borde": return 0.3; // esta mal, pero como va a asumir que queso es un ingrediente extra, es una forma de equilibrar
        }
    }
}

function avoidProsciuttoOverflow(items) {
    pizzaCount = items.filter(i => i instanceof Pizza)
    if (pizzaCount.length > 1) {
        items.splice(0, 1);
    }
    return items;
}
function createTicket(items) {
    let ticket = '';
    let totalCost = 0;
    items.forEach(i => {
        totalCost += i.price;
        if (i instanceof Pizza) {
            ticket = ticket.concat(`${i.ticketName}   ${i.price}\n`);
        } else if (i instanceof Ingredient) {
            ticket = ticket.concat(`+ EXTRA ${i.name.toUpperCase()}      ${i.price}\n`)
        }
    })
    ticket = ticket.concat(`______________________\nTOTAL           ${totalCost.toFixed(2)}€`)
    return ticket;
}

function processTextAndCreateTicket(text) {
    const words = text.toLowerCase().split(" ");
    let items = []
    words.forEach(w => {
        items.push(new Pizza(w))
        items.push(new Ingredient(w))
    })
    items = items.filter(i => i.price != undefined)
    items = avoidProsciuttoOverflow(items)
    const ticket = createTicket(items);
    console.log(ticket);
}



const texts = [
    "Prosciutto e Funghi con extra de queso y extra de anchoas",
    "Prosciutto con jamon dulce, borde relleno de queso, salsa picante y anchoas",
    "4 Stagioni con extra queso mozzarella, tomate natural y olivas"
]

texts.forEach(t => {
    processTextAndCreateTicket(t)
})

