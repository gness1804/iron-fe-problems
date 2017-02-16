//#1: write a function that sorts the athletes by titles won (most to least) and then, from that data, is able to return a string saying 'Tom Brady has won the most titles with 4'.

const athletes = [
  {
    name: 'Tom Brady',
    titles: 4,
  },
  {
    name: 'Sidney Crosby',
    titles: 2,
  },
  {
    name: 'LeBron James',
    titles: 3,
  },
  {
    name: 'Aaron Rodgers',
    titles: 1,
  },
]

const sorter = (arr) => {

}

//Bonus: can you write a solution without using the 'sort' method?

 //#2: Write a prototype chain of three classes that each inherit properties and methods from each other but also have their own properties and methods.

//This example is similar to the one we did in class:

class Animal {
  constructor(options) {
    this.kingdom = 'animal';
    this.species = options.species;
    this.home = 'Earth';
    this.extinct = options.extinct;
    this.favoredFood = options.favoredFood;
  }

  eat(){
    return `The ${this.species} eats ${this.favoredFood}.`
  }

}

let bambi = new Animal({
  species: 'deer',
  extinct: false,
  favoredFood: 'berries',
})

//What will `bambi.eat()` return?

class Human extends Animal {
  constructor(options){
    super(options)
    this.name = options.name;
    this.languages = options.languages;
    this.nationality = options.nationality;
    this.species = 'human';
  }
  speak(){
  return `${this.name} speaks ${this.languages[0]}.`
  }

}

let graham = new Human({
  name: 'Graham',
  languages: ['English', 'Spanish', 'French'],
  nationality: 'United States',
  favoredFood: 'pizza',
})

console.log(graham.nationality, graham.eat(), graham.speak())

class TuringStudent extends Human {
  constructor(options){
    super(options)
    this.mod = options.mod;
    this.program = options.program;
  }
}

let dale = new TuringStudent({
  name: 'Dale',
  languages: ['English'],
  nationality: 'United States',
  mod: 4,
  program: 'Front End',
})

console.log(dale.mod, dale.program, dale.nationality);

Object.assign(exports, {
  sorter,
  athletes,
  Animal,
})
