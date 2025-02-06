const person = {
    firstName : "Dmytro",
    lastName : "Savchuk",
    age : 25
};

person.email = "dmytro_savchuk@gmail.com";
delete person.age;
console.log(person);