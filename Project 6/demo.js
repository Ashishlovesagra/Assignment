// Firstcall function:-
// ex-1
// const temp = function(){
//     console.log("Ashish Singh");
// }
// temp();
// Ex-2
// function sayHello() {
//     return "Hello, ";
//     }
//     function greeting(helloMessage, name) {
//     console.log(helloMessage() + name);
//     }
//     // Pass “sayHello” function as an argument to “greeting” function
//     greeting(sayHello, "JavaScript!");

// function outerFunc() {
//     var outerVar = 100;
//     function innerFunc() {
//     console.log(outerVar);
//     }
//     return innerFunc;
//     }
//     var value=outerFunc();
//     value();

// function Person(first, last, age, eyecolor) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eyecolor;
// }

//     Person.prototype.nationality = "English";
//     const myFather = new Person("John", "Doe", 50, "blue");
//     console.log("The nationality of my father is " + myFather.nationality);
//     console.log(myFather.firstName);


// var promise = new Promise(function(resolve, reject) {
//     const x = "prepbytes";
//     const y = "prepbytes"
//     if(x === y) {
//     resolve();
//     } else {
//     reject();
//     }
//     });
//     promise.
//     then(function () {
//     console.log('Success,you are a prepbytes student');
//     }).
//     catch(function () {
//     console.log('Some error has occurred');
//     });

// .then(function(result){
//     //handle success
//     }, function(error){
//     //handle error
//     })
//     var promise = new Promise(function(resolve, reject) {
//     resolve('prepbytes');
//     })
//     promise
//     .then(function(successMessage) {
//     //success handler function is invoked
//     console.log(successMessage);
//     }, function(errorMessage) {
//     console.log(errorMessage);
//     });


//     async function fetchData() {
//         try {
//           const response = await fetch("https://api.example.com/data");
//           const data = await response.json();
//           return data;
//         } catch (error) {
//           console.error("There was a problem fetching the data:", error);
//         }
//       }
      
//       fetchData().then(data => {
//         console.log("Data fetched:", data);
//       });
      
//     let promise = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//         resolve('Promise resolved')}, 4000);
//         });
//         async function asyncFunc() {
//         // wait until the promise resolves
//         let result = await promise;
//         console.log(result);
//         console.log('hello');
//         }
//         // calling the async function
//         asyncFunc();
    
    
//     function Car(make, model, year) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//       }
      
//       const myCar = new Car("Toyota", "Camry", 2020);
//       console.log(myCar);


//     function Car(make, model, year) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//         this.start = function() {
//           console.log(`Starting ${this.make} ${this.model}...`);
//         };
//       }
      
//       const myCar = new Car("Toyota", "Camry", 2020);
//       myCar.start(); // Starting Toyota Camry...

    
//     function User (name, age) {
//         this.name = name;
//         this.age = age;
//         }
//         var user1 = new User('Bob', 25);
//         var user2 = new User('Alice', 27);
//         console.log(user1.name);
//         console.log(user1.age);
//         console.log(user2.name);
//         console.log(user2.age);


//     function calculateGST( productPrice ) {
//         return productPrice * 0.05;
//         };
//     console.log(calculateGST(25));