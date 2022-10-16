//Question 1
// getRanNum = () => {
//     return Math.floor(Math.random() * 100);
// }

// buttonClick = () => {
//     document.getElementById('results').innerHTML = getRanNum();
// }

//Question 2
// numUp = (x) => {
//     return Number.parseFloat(x).toFixed(2);
// }

// console.log(numUp(3.143342));
// console.log(numUp(576.3443));
// console.log(numUp(333.464564));

//Question 3
// let text = "I am learning js.";
// let result = text.includes("js");

// document.getElementById("results").innerHTML = result;

//Question 4
// function checkLeapYear() {

//     const year = prompt('Enter a year:');
 
//     if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
//         console.log(year + ' is a leap year');
//     } else {
//         console.log(year + ' is not a leap year');
//     }
//  }
//  checkLeapYear();

//Question 6



//Question 7
// function maxEvenArray (arr) {
    
//     arr.sort((x, y) => y - x);

//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0)
//         return arr[i];
//     }   
// }
// console.log(maxEvenArray([10, 12, 90, 93, 707]));

//Question 8
// const arr1 = [10, 20, 30];
// const arr2 = [1, 2, 3];
// const sumOfArr = arr1.map((e, i) => e + arr2[i]);
// console.log(sumOfArr);

//Question 9
// function reverseArray (arr) {
//     let newArr = [];
//     for (let i = 0, j = arr.length - 1; i < arr.length; i++, j--) {      
//         newArr[i] = arr[j];
//     }   
//     return newArr;
// }
// console.log(reverseArray([10, 78, 0]));

//Question 10
// function reverseString(str) {

//     let newString = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }

// const string = prompt('Enter a string: ');

// const result = reverseString(string);
// console.log(result);

//Question 11
// let arr = [10, 50, 20, 67, 10, 20];

// let filteredArr = arr.filter((e, index) => {
//     return arr.indexOf(e) === index;
// });

// console.log(filteredArr);

//Question 12
let arr = [12, 56, 89];
let displayArr = document.getElementById("displayArr");
displayArr.innerHTML = 'Array =  ' + arr.join(" , ");


delArr = ()=>{
    let delNum = Number(document.getElementById("delNum").value);
    let displayArr = document.getElementById("displayNewArr");
    for (var i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === number) {
         arr.splice(i, 1);
        }
       };
    
    let displayNewArr = document.getElementById("displayNewArr");
    displayNewArr.innerHTML = 'New Array = [ ' + arr.join(" , ") + ' ]';
}



//Question 13
// maxEvenArray = (arr) => {
    
//     arr.sort((x, y) => y - x);

//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0)
//         return arr[i];
//     }   
// }

// maxOddArray = (arr) => {
    
//     arr.sort((x, y) => y - x);

//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 !== 0)
//         return arr[i];
//     }   
// }

// console.log('The largest even number is: ' + maxEvenArray([10, 12, 900, 93, 707]));
// console.log('The largest odd number is: ' + maxOddArray([10, 12, 900, 93, 707]));

// Question 14
// class Person {
//     constructor(firstName, lastName, age) {
//       this.firstName = firstName;
//       this.lastName = lastName;
//       this.age = age;
//     }
//   }
  
  
//   let person1 = new Person("Sean", "Seow", "24");
  
//   let person2 = new Person("Clarissa", "Lee", "25");
  
//   function addNewPerson() {
//     let inputFirstName = prompt("Enter your first name:");
//     let inputLastName = prompt("Enter your last name:");
//     let inputAge = prompt("Enter your age:");
  
//     return new Person(inputFirstName, inputLastName, inputAge);
//   }
  
//   console.log(addNewPerson());

// Question 15
// class car {
//     constructor(name, brand, color, manufacture) {
//         this.name = name;
//         this.brand = brand;
//         this.color = color;
//         this.manu = manufacture;
//     }

//       city() {
//         console.log(this.manu);
//       }

//       specialFeature() {
//         console.log(this.brand + ' and ' +this.color);
//       }
// }

// let car1 = new car('Vezel', 'Honda', 'Blue', 'Singapore');
// console.log(car1);
// car1.city();
// car1.specialFeature();

//Question 16
// class book {
//     constructor(title, numOfPages, typeOfPages, author, yearWritten) {
//         this.title = title;
//         this.numOfPages = numOfPages;
//         this.typeOfPages = typeOfPages;
//         this.author = author;
//         this.yearWritten = yearWritten;
//     }

//       type_of_book() {
//         console.log(this.title + ' , ' + this.numOfPages + ' , ' + this.typeOfPages + ' , ' + this.author);
//       }
// }

// let book1 = new book('Harry Potter', '300', 'Hard Cover', 'J.K Rowling', '2000');
// console.log(book1);
// book1.type_of_book();


//Question 17
// class animal {
//     constructor(gender, name, disease, speed, food, climbObj) {
//         this.gender = gender;
//         this.name = name;
//         this.dis = disease;
//         this.speed = speed;
//         this.food = food;
//         this.climbObj = climbObj;
//     }

//     walk() {
//         console.log('Walks ' + this.speed);
//     }

//     eat() {
//         console.log('Eats ' + this.food);
//     }

//     climb() {
//         console.log('Climbs on ' + this.climbObj);
//     }
// }

// let dog = new animal('Male', 'Harry', 'Diabetes', 'fast', 'Bones', 'Bed');
// console.log(dog);
// dog.walk(); 
// dog.eat();
// dog.climb();

//Question 18
// class electronics {
//     constructor(id, name, version, companyName) {
//         this.id = id;
//         this.name = name;
//         this.version = version;
//         this.companyName = companyName;
//     }

//     name() {
//         console.log('Name: ' + this.name);
//     }

//     version() {
//         console.log('Version: ' + this.version);
//     }

//     companyName() {
//         console.log ('Company Name: ' + this.companyName);
//     }
// }

// class laptop extends electronics {
//     constructor(id, name, version, companyName, price, colour) {
//         super(id, name, version, companyName);
//         this.price = price;
//         this.colour = colour;
//     }
// }

// class ipad extends electronics {
//     constructor(id, name, version, companyName, price, colour) {
//         super(id, name, version, companyName);
//         this.price = price;
//         this.colour = colour;
//     }
// }

// class mobile extends electronics {
//     constructor(id, name, version, companyName, price, colour) {
//         super(id, name, version, companyName);
//         this.price = price;
//         this.colour = colour;
//     }
// }

// class tablet extends electronics {
//     constructor(id, name, version, companyName, price, colour) {
//         super(id, name, version, companyName);
//         this.price = price;
//         this.colour = colour;
//     }
// }

// let ipad1 = new ipad('1120202','Ipad Pro', '2.0', 'Apple', '$2000', 'Black');
// console.log(ipad1);

// let tablet1 = new tablet('1244344','Tablet Pro', '1.0', 'Sony', '$1399', 'White');
// console.log(tablet1);



