let stocks = {
    Crust: ["Thin", "Standard", "Cheese Filled"],
    Sauce: ["Marinara", "Pesto", "BBQ", "Curry"],
    Toppings: ["Pepparoni", "Onion", "Bell Peppers", "Olives", "Chicken", "Pineapple", "Tomato"],
    Container: ["Plate", "Box"]
}

let order = (Crust_type, Sauce_type, Toppings_types, Container_type, call_production) => {
    setTimeout(()=>{
        let toppings = Toppings_types.map(type => stocks.Toppings[type]).join(", ");
        console.log(`Your order: ${stocks.Crust[Crust_type]} crust with ${stocks.Sauce[Sauce_type]} sauce and ${toppings} toppings in a ${stocks.Container[Container_type]}`)
        call_production(Crust_type, Sauce_type, toppings, Container_type);
    }, 2000)

};

let production = (Crust_type, Sauce_type, Toppings, Container_type) => {
    setTimeout(()=>{
        console.log("Production has started");

        setTimeout(()=>{
            console.log(`${stocks.Crust[Crust_type]} crust has been made`);
            setTimeout(()=>{
                console.log(`${stocks.Sauce[Sauce_type]} sauce has been put on the crust`);
                setTimeout(()=>{
                console.log(`The toppings (${Toppings}) have been put on the pizza`);
                console.log("The pizza has been put in the oven to bake");
                    setTimeout(()=>{
                        console.log("The pizza has been taken out from the oven");
                        setTimeout(()=>{
                            console.log(`The pizza has been put in a ${stocks.Container[Container_type]}`);
                        },1000);
                    },3000);
                },3000);
            },700);
            
        }, 2000);
    }, 1000)
    
};

order(1, 2, [4,5,6], 1, production)