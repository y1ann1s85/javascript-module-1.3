// 1

// 1.1
// let myString = "hello,this,is,a,difficult,to,read,sentence";
// console.log(myString);

// 1.2
// console.log(myString.length);

// 1.3
// let myString = "hello this is a difficult to read sentence";

// // 1.4
// console.log(myString);

// // 2
// let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];

// // 2.1
// favoriteAnimals.push("turtle");

// // 2.2
// console.log(favoriteAnimals);

// // 2.3
// favoriteAnimals.splice(1, 0, "meerkat");

// // 2.4
// console.log("The new valeu of the array is:", favoriteAnimals[1]);

// // 2.5
// console.log(favoriteAnimals);

// // 2.6
// console.log("The array has a lenth of:", favoriteAnimals.length);

// // 2.7
// favoriteAnimals.splice(3, 1);

// // 2.8
// console.log(favoriteAnimals);

// // 2.9 - 2.10
// console.log("The item you are looking for is at index: ", favoriteAnimals.indexOf("meerkat"));

// // More JavaScript

// // 1
// sum = 0;

// function myfunction(x, y, z) {
//    sum = (x + y + z);
//    return sum;
// }

// myfunction(2, 3, 5);

// // 2
// function colorCar(color) {
//    console.log(`a ${color} car`);

// }

// // 3
// let myObject = {};

// function myObjectFunction(myObject) {
//    // myObject = {
//    //    type: "1",
//    //    name: "2",
//    //    color: "red"
//    // };
//    console.log(myObject);
// }

// // 4
// // let type = 0;

// // function vehicleType(color, type) {
// //    if (type == 1) {
// //       console.log(`a ${color} car`);
// //    }
// //    else if (type == 2) {
// //       console.log(`a ${color} motorcycle`);
// //    }
// //    else {
// //       console.log("Wrong Code Dude!")
// //    }
// // }

// // 5
// 3 === 3 ? console.log("yes") : console.log("no");

// // 6
// // let type = 0;
// // let age = 0;

// // function vehicle(color, type, age) {
// //    if (type == 1 && age == 4) {
// //       console.log(`a ${color} new car`);
// //    }
// //    else if (type == 1 && age == 5) {
// //       console.log(`a ${color} used car`);
// //    }
// //    else if (type == 2 && age == 4) {
// //       console.log(`a ${color} new motorcycle`);
// //    }
// //    else if (type == 2 && age == 5) {
// //       console.log(`a ${color} used motorcycle`);
// //    }
// //    else {
// //       console.log("Wrong Code Dude!")
// //    }
// // }

// // 7
// let vehiclesList = [];
// vehiclesList[0] = "motorbike";
// vehiclesList[1] = "caravan";
// vehiclesList[2] = "bike";
// vehiclesList[3] = "car";

// // 8
// console.log(vehiclesList[2]);

// // 9
// let type = 0;
// let age = 0;

// function vehicle(color, type, age) {
//    if (type == 1 && age == 1) {
//       console.log(`a ${color} new ${vehiclesList[0]}`);
//    }
//    else if (type == 1 && age == 2) {
//       console.log(`a ${color} used ${vehiclesList[0]}`);
//    }
//    else if (type == 2 && age == 1) {
//       console.log(`a ${color} new ${vehiclesList[1]}`);
//    }
//    else if (type == 2 && age == 2) {
//       console.log(`a ${color} used ${vehiclesList[1]}`);
//    }
//    else if (type == 3 && age == 1) {
//       console.log(`a ${color} new ${vehiclesList[2]}`);
//    }
//    else if (type == 3 && age == 2) {
//       console.log(`a ${color} used ${vehiclesList[2]}`);
//    }
//    else {
//       console.log("Wrong Code Dude!")
//    }
// }

// // 10
// for (i=0; i<=0; i++) {
//    console.log(`Amazing Joe's Garage, we service ${vehiclesList[i+3]}s, ${vehiclesList[i]}s, ${vehiclesList[i+1]}s and ${vehiclesList[i+2]}s.`)
// }

// // 11
// vehiclesList.push("boat");
// console.log(vehiclesList);

// for (i=0; i<=0; i++) {
//    console.log(`Amazing Joe's Garage, we service ${vehiclesList[i+4]}s, ${vehiclesList[i+3]}s, ${vehiclesList[i]}s, ${vehiclesList[i+1]}s and ${vehiclesList[i+2]}s.`)
// }

// // 12 - 13
// let teachers = {};
// teachers = {
//    firstTeacher: "Ahmed",
//    secondTeacher: "Giorgos"
// }

// // 14
// teachers["languages"] = "HTML, CSS, JavaScript";
// console.log(teachers);

// // 15
// let x = [1, 2, 3];
// let y = [1, 2, 3];
// let z = y;

// if (x == y) {
//    console.log("true");
// }
// else {
//    console.log("false");
// }

// if (x === y) {
//    console.log("true");
// } 
// else {
//    console.log("false");
// }

// if (z == y) {
//    console.log("true");
// } 
// else {
//    console.log("false");
// }

// if (z == x) {
//    console.log("true");
// } 
// else {
//    console.log("false");
// }

// // 16
// let o1 = { foo: "bar" };
// let o2 = { foo: "bar" };
// let o3 = o2;

// console.log(o3);

// o2 = { foo: "cafe" };
// console.log(o3);

// o1 = { foo: "pub"};
// console.log(o3);

// o2 = o3;
// console.log(o2, o3);

// o3 = o2;
// console.log(o2, o3);
// console.log("The order that you assign (o3 = o2 or o2 = o3) matter because it's an assigment. The object on the left side of the equation takes the value of the object in the right side.");

// // 17
// let bar = 42;
// typeof typeof bar;
// console.log("The typeof typeof bar gives us a: ", typeof typeof bar);