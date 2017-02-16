//#1:closures: what are they? why are they useful?

//example:

const privateTuringInfo = () => {
  let turingBudgetForNewBuilding = 'a gazillion dollars';

  const reportBudget = () => {
    return `Our total budget for the new building is ${turingBudgetForNewBuilding}.`
  }

  return reportBudget()
}

console.log(privateTuringInfo());

//a more practical example, taken from the MDN docs:

const makeCounter = () => {
  var privateCounter = 0;
  const changeCounterByVal = (val) => {
    privateCounter += val;
  }
  return {
    increment: function (val) {
      changeCounterByVal(val);
    },
    decrement: function (val) {
      changeCounterByVal(-val);
    },
    value: function () {
      return privateCounter;
    }
  }
}

const counter1 = makeCounter();

console.log(`The original value of counter1 is ${counter1.value()}.`);

counter1.increment(2);

console.log(`The value of counter1 after incrementing by two is ${counter1.value()}.`);

counter1.decrement(3)

console.log(`The new value of counter1 after decrementing by three is ${counter1.value()}.`);

console.log(privateCounter); //returns undefined because privateCounter is a private variable

//we can create many such counters, and they are all independent of each other, thanks to closures.

//make your own examples of closures!

//#2: Create a function that reverses an array without using reverse(). How many array methods can we make work with this?

const reverseIt = (array) => {
  
}
