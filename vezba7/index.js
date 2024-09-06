class Person {
  constructor(name, age, ...address) {
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}

class Address {
  constructor(street, city, country) {
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

const person1 = new Person("Nens", 23, "07", "Kraljevo", "Srbija");
console.log(person1.name);
console.log(person1.age);
console.log(person1.address.city);
