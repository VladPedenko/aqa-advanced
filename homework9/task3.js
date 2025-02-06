const car1 = {
    brand : "vw",
    model : "passat",
    year : 2021
};

const car2 = {
    brand : "renault",
    model : "laguna",
    owner : "Oleksandr"
}

const car3 = {...car1, ...car2};

console.log(car3);
