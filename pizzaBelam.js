class Pizza {
    constructor(name) {
        this.name = name;
        this.price = this.getPrice()
        this.ingredients = []
    }

    addIngredients(ingrd) {
        this.ingredients.push(ingrd);
    }

    getPrice() {
        switch (this.name.toLowerCase()) {
            case "margherita": return 9.3;
            case "prociutto": return 12;
            case "prociutto e funghi": return 12.5;            case "4 stagioni": return 12.5;
        }
    }

    calculatePrice() {
        this.ingredients.forEach(i => {
            this.price += i.price;
        });
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
            case "basic": return 0.9;
            case "basic": return 0.9;
            case "basic": return 0.9;
            case "basic": return 0.9;
            case "basic": return 0.9;
            case "gourmet": this.price = 1.2; break;
            case "premium": this.price = 2.2; break;
            case "barbacue": this.price = 1; break;
            case "spicy": this.price = 0.9; break;
            case "cheese": this.price = 1.2; break;
        }
    }
}

const pizza = new Pizza("Margherita")

console.log(pizza)

