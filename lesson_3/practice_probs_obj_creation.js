function createPet(animal, name) {
  return {
    animal,
    name,
    sleep: function() {
      console.log("I am sleeping");
    },
    wake: function() {
      console.log("I am awake");
    }
  };
}

let PetPrototype = {
  sleep() {
    console.log("I am sleeping");
  },
  wake() {
    console.log("I am awake");
  },
  init(animal, name) {
    this.animal = animal;
    this.name = name;
    return this;
  }
}


let pudding = Object.create(PetPrototype).init("Cat", "Pudding");
