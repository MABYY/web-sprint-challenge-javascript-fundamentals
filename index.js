//🚀🚀🚀  Topic #1 Closures 🚀🚀🚀//
/* 🚀🚀🚀🤓 Task 1: 🤓🚀🚀🚀 
Study the code below and explain in your own words why nested function 
can access the variable internal. */

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  }
  nestedFunction();
}
myFunction();

//🚀🚀🚀 ⬇️ 📝 Explanation ⬇️ 📝 🚀🚀🚀: 

// When we refer to scope we reference where functions and varianbles are available to the programmer.
// Anything that is global scope is attacehd to the window function. Let and scope are the exception 
// because they are block scope.This means that if they are inside a function they can only be accessed 
// within the curly brackets unless they are returned. Functions work the same way.

// Closure is the ability to access a function from a parent level scope in a child level even after 
// the parent function has been terminated.  Closure happens when a funcion reaches outside its s
// cope into the parent function to access a variable.

// The nestedFunction can access the variable internal because two things happen ar the same time. 

// 1- the variable internal is scoped within myFunction. This means that we can access this variable
//  if we call myFunction.
// 2- nestedFunction is scoped within myFuncion and therefore can access internal to reach closure.   


/* 🚀🚀🚀 Task 2: Counter 🚀🚀🚀 */
/* Use summation to do the following:
    1. Receive a number 
    2. Use a counter to return the summation of that number. 
    
For example, `summation(4)` should return 10 because 1+2+3+4 is 10. 
Note, you may use a for loop for this function if you wish */

function summation(num) {
 const arr = Array.from(Array((num+1)).keys())
 const singlevalue = arr.reduce(function(accum,item){return accum + item;},0);
 return singlevalue;
 };
 
 
console.log("Task 2");
console.log(summation(4));

// 🦁🦁🦁 Topic 2: ADVANCED Array Methods 🦁🦁🦁
// Given this zoo data from around the United States, follow the instructions below. 
// Use the specific array methods in the requests below to solve the problems.

const zooAnimals = [
    { animal_name: "Jackal, asiatic", population: 5, scientific_name: "Canis aureus", state: "Kentucky" },
    { animal_name: "Screamer, southern", population: 1, scientific_name: "Chauna torquata", state: "Alabama" },
    { animal_name: "White spoonbill", population: 8, scientific_name: "Platalea leucordia", state: "Georgia" },
    { animal_name: "White-cheeked pintail", population: 1, scientific_name: "Anas bahamensis", state: "Oregon" },
    { animal_name: "Black-backed jackal", population: 2, scientific_name: "Canis mesomelas", state: "Washington" },
    { animal_name: "Brolga crane", population: 9, scientific_name: "Grus rubicundus", state: "New Mexico" },
    { animal_name: "Common melba finch", population: 5, scientific_name: "Pytilia melba", state: "Pennsylvania" },
    { animal_name: "Pampa gray fox", population: 10, scientific_name: "Pseudalopex gymnocercus", state: "Connecticut" },
    { animal_name: "Hawk-eagle, crowned", population: 10, scientific_name: "Spizaetus coronatus", state: "Florida" },
    { animal_name: "Australian pelican", population: 5, scientific_name: "Pelecanus conspicillatus", state: "West Virginia" },
  ];
  
  /* 🦁🦁🦁 Request 1: .forEach() 🦁🦁🦁
  The zoos want to display both the scientific name and the animal name in front of the habitats. 
  Use animalNames to populate and return the displayNames array with only the animal name and scientific name of each animal. 
  displayNames will be an array of strings, and each string should follow this pattern: "name: {name}, scientific: {scientific name}"
  */

  function animalNames(arr){
    let displayNames = [];

    function MyFunction(item){
      displayNames.push({
        name: item.animal_name,
        scientific: item.scientific_name
      })
    }
    arr.forEach(MyFunction);
    return displayNames;
  }
  
  console.log("Task 2 Advanced ");
  console.log(animalNames(zooAnimals));

  /* 🦁🦁🦁 Request 2: .map() 🦁🦁🦁
  The zoo needs a list of all their animal's names converted to lower case. 
  Using lowerCaseNames use .map() to create a new array of strings with the animal's names in lowercase and return the new array. 
  For example: ['jackal, asiatic', .....]
  */

  function lowerCaseNames(arr){
    const array_names = arr.map(function(item){
    let arraOfarr = item.animal_name.split(' ').map(subItem => subItem.toLowerCase());
      return arraOfarr;
      });
    let arr_list_names = [];
    array_names.forEach(function(item){
        item.forEach(function(subItem){
          arr_list_names.push(subItem);
        });
      });
    return arr_list_names ;
  }
  
console.log("Task 2 map() ");
console.log(lowerCaseNames(zooAnimals));



  /* 🦁🦁🦁 Request 3: .filter() 🦁🦁🦁
  The zoo is concerned about animals with a lower population count. 
  Using lowPopulationAnimals use .filter() to create a new array of objects which contains only the animals with a population of less than 5.
  */

  function lowPopulationAnimals(arr){
  const arr_low_pop = arr.filter(element => element.population<5);
  return arr_low_pop ;
  }
  console.log("Task 3");
  console.log(lowPopulationAnimals(zooAnimals));
  

  /* 🦁🦁🦁 Request 4: .reduce() 🦁🦁🦁
  The zoo needs to know their total animal population across the United States. 
  Using USApop find the total population from the zoos array using the .reduce() method. 
  Remember the reduce method takes two arguments: a callback (which itself takes two args - 
    the accumulator and the item), and an initial value for the count.
  */

  
  function USApop(arr){
    const arr_low_pop = arr.map(element => element.population);
    return arr_low_pop.reduce(function(accumulator, currentValue) {
      return accumulator + currentValue;}) ;
    }

  console.log("Task 4");
  console.log(USApop(zooAnimals));


  // 🦁🦁🦁 Callbacks 🦁🦁🦁  
  /* 🦁🦁🦁 Step 1: Create a higher-order function 🦁🦁🦁
    * Use the higher-order function consume with 3 parameters: a, b and cb
    * The first two parameters can take any argument (we can pass any value as an argument)
    * The last parameter accepts a callback
    * The consume function should return the invocation of cb, passing a and b into cb as arguments
  */

function consume(a,b,cb){
    return cb(a,b);
  };
 
  /* 🦁🦁🦁 Step 2: Create several functions to callback with consume(); 🦁🦁🦁 */
 // 🦁🦁🦁 Use add to return the sum of two numbers 🦁🦁🦁
  
function add(num1,num2){
  return num1+num2;
  }

// 🦁🦁🦁 Use multiply to return the product of two numbers 🦁🦁🦁
  
function multiply(num1,num2){
  return num1*num2;
  }

 // 🦁🦁🦁 Use greeting to accept a first and last name and return "Hello {first-name} {last-name}, nice to meet you!" 🦁🦁🦁
  
function greeting(firstname,lastname){
   return `Hello ${firstname} ${lastname}, nice to meet you!`;
  }
  

  // 🦁🦁🦁 Step 3: Check your work by un-commenting the following calls to consume(): 🦁🦁🦁 
  // ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️
  console.log(consume(2, 2, add)); // 4
  console.log(consume(10, 16, multiply)); // 160
  console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!
  
  
// 🦁💪 Stretch: If you haven't already, convert your array method callbacks into arrow functions - make sure you comment out this section before you submit your work 🦁💪

console.log("Array Methods");
 
const Add = (num1,num2) => num1 + num2;
const Multiply = (num1,num2) => num1*num2;
const Greeting = (firstname,lastname) => `Hello ${firstname} ${lastname}, nice to meet you!`;

console.log(consume(2, 2, Add)); 
console.log(consume(10, 16, Multiply)); 
console.log(consume("Mary", "Poppins", Greeting)); 

// 🐴🐴🐴 Topic 3: Prototypes 🐴🐴🐴 //
//🐴🐴🐴 Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. 
// Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge. 🐴🐴🐴

/* 🐴🐴🐴 Step 1: Base Constructor 🐴🐴🐴
 Use the constructor function named CuboidMaker to accept properties for length, width, and height which can be initialized as an object
*/
function CuboidMaker(length, width, height){
  this.length = length;
  this.width = width;
  this.height = height;
}


/* 🐴🐴🐴 Step 2: Volume Method 🐴🐴🐴
  Create a method called volume using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
  Formula for cuboid volume: length * width * height   */


CuboidMaker.prototype.volume = function () {
  return this.length * this.width * this.height;
}


/* 🐴🐴🐴 Step 3: Surface Area Method 🐴🐴🐴
  Create another method called surfaceArea using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 
  Formula for cuboid surface area of a cube: 
  2 * (length * width + length * height + width * height)  */

  CuboidMaker.prototype.surfaceArea = function() {
    let area = 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    return area ;
  }



/* 🐴🐴🐴 Step 4: Create a new object that uses CuboidMaker 🐴🐴🐴
  Create an object called cuboid that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid. */

let cuboid = new CuboidMaker(4,5,5);

// 🐴🐴🐴 Test your volume and surfaceArea methods by uncommenting the logs below: 🐴🐴🐴
// ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️

console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
 

// 🦄🦄🦄 Topic 4: Classes 🦄🦄🦄 //
//🦄🦄🦄 1. Take your prototypes from above and refactor into class syntax. Please rename your class CuboidMakerTwo and your object cuboidTwo 🦄🦄🦄

class CuboidMakerTwo{
  constructor(length, width, height){
    this.length = length;
    this.width = width;
    this.height = height;
  };

volume(){
    return this.length * this.width * this.height;
  }
surfaceArea() {
     return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  };
}


//🦄🦄🦄 Test your volume and surfaceArea methods by uncommenting the logs below: 🦄🦄🦄

const cuboidTwo = new CuboidMaker(4,5,5);

console.log(cuboidTwo.volume()); // 100
console.log(cuboidTwo.surfaceArea()); // 130





// 🦄 💪 Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area. 🦄 💪

class CubeMaker extends CuboidMaker {
  constructor(length, width, height){
    super(length, width, height);
  };
  volume(){
    return  this.length * this.width * this.height;
  };
  surfaceArea() {
    return 6* (this.length ** 2)
  };
 };



const cubeTwo = new CubeMaker(5,5,5);
console.log(cubeTwo.volume()); 
console.log(cubeTwo.surfaceArea()); 


  /* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
  function foo(){
    //console.log('its working');
    return 'bar';
  }
  export default{
    foo,
    summation,
    animalNames,
    lowerCaseNames,
    lowPopulationAnimals,
    USApop,
    consume, 
    add,
    multiply,
    greeting,
    CuboidMaker,
    CuboidMakerTwo
  }
