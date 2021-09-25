class Hamburger {
    constructor(size) {
        this._size = size;
        this._stuffings = [];
        this._toppings = [];
    }

    
    addTopping(topping) {
        
            return this._toppings.push(topping);
        
    }

    addStuffing(stuffing) {
        
        return this._stuffings.push(stuffing);
    
}


    get getPrice() {
        const priceTopping = this._toppings.map(x => Hamburger.TOPPINGS[x].price);          
        const priceStuffing = this._stuffings.map(x => Hamburger.STUFFINGS[x].price); 
        const priceArr = priceTopping.concat(priceStuffing);
      
        priceArr.push(Hamburger.SIZES[this._size].price);
        
        let price = priceArr.reduce((acc, prices) => acc + prices, 0);
        return price;
    }


    get getCallories() {        
        const caloriesTopping = this._toppings.map(x => Hamburger.TOPPINGS[x].calories);
        const caloriesStuffing = this._stuffings.map(x => Hamburger.STUFFINGS[x].calories);
        const caloriesArr = caloriesTopping.concat(caloriesStuffing);
        
        caloriesArr.push(Hamburger.SIZES[this._size].calories);
        
        let calories = caloriesArr.reduce((acc, itemcalories) => acc + itemcalories, 0);
        return calories;
    }
}


Hamburger.SIZE_SMALL = 'SIZE_SMALL';
Hamburger.SIZE_MEDIUM = 'SIZE_MEDIUM';
Hamburger.SIZE_LARGE = 'SIZE_LARGE';

Hamburger.SIZES = {
    [Hamburger.SIZE_SMALL]: {
        price: 50,
        calories: 20,
    },
    [Hamburger.SIZE_MEDIUM]: {
        price: 75,
        calories: 30,
    },
    [Hamburger.SIZE_LARGE]: {
        price: 100,
        calories: 40,
    },
};

Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
Hamburger.STUFFING_SALAD = "STUFFING_SALAD";
Hamburger.STUFFING_POTATO = "STUFFING_POTATO";

Hamburger.STUFFINGS = {
    [Hamburger.STUFFING_CHEESE]: {
        price: 10,
        calories: 20,
    },
    [Hamburger.STUFFING_SALAD]: {
        price: 20,
        calories: 5,
    },
    [Hamburger.STUFFING_POTATO]: {
        price: 15,
        calories: 10,
    },
};

Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
Hamburger.TOPPING_MAYO = "TOPPING_MAYO";

Hamburger.TOPPINGS = {
    [Hamburger.TOPPING_SPICE]: {
        price: 15,
        calories: 0,
    },
    [Hamburger.TOPPING_MAYO]: {
        price: 20,
        calories: 5,
    },
};



const hamburger = new Hamburger(Hamburger.SIZE_SMALL);
hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.addStuffing(Hamburger.STUFFING_POTATO);


console.log("Price with sauce:", hamburger.getPrice);
console.log("Callories with sauce:", hamburger.getCallories);