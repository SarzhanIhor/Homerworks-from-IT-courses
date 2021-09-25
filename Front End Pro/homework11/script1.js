function createCalculator(result) {    


return {
    
    sum: function () {
        result = result + 5;
        console.log(result);
    },
    
    mult: function () {
        result = result * 10;
        console.log(result);
    },

    sub: function () {
        result = result - 40;
        console.log(result);
    },

    div: function () {
        result = result / 10;
        console.log(result);
    },

    set: function () {
        result = 100;
        console.log(result);
    },    
}
};

const calc = createCalculator(10);
calc.sum();
calc.mult();
calc.sub();
calc.div();
calc.set();
