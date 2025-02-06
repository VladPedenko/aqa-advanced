const users = [
    {name : "Vadym", email : "Vadymovich@gmail.com", age : 45},
    {name : "Lisa", email : "Lisovna@gmail.com", age : 21},
    {name : "Ivan", email : "Ivan@gmail.com", age : 78}

];

for(const person of users) {
    console.log(`${person.name} is ${person.age} years old, write to email ${person.email}`);
  };

  //деструктуризація

  for(const {name, email} of users) {
    console.log(`This is ${name}, write to my email ${email}`);
  };