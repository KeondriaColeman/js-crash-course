// let cash = 50
// let price = 40
// let isStoreOpen = true
// if (isStoreOpen) {
//   if (cash >= price) {
//     console.log("give receipt")
//   } else {
//     console.log("do not give receipt")
//   }
// }
// DRY = Don't Repeat Yourself
// let count = 1;

// while (count <= 100) {
//   console.log(count);
//   count = count + 1;
// }

// Example of FizzBuzz problem:

// for (let i = 1; i <= 20; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log('frontend simplified');
//     }
//     else if (i % 3 === 0) {
//         console.log('frontend');
//     }
//     else if (i % 5 === 0) {
//         console.log('simplified');
//     }
//     else {
//         console.log(i);
//     }
// }

// Example question spell out the words using loops//

// const str="Frontend simplified";
// for (let i = 0; i < 19; i++){
//   console.log(str[i]);
// }

//Alternative way to spell out the words using loops//

// let words = "frontend simplified";

// for (let i = 0; i < words.length; i++) {
//   console.log(words[i]);
// }  

// new example converting fahrenheit to celsius//

function CtoF(celsius) {
    return celsius * 1.8 + 32
}
 
console.log(CtoF(10))

const convertCelsiusToFahrenheit = (celsius) => {
  return celsius * 1.8 + 32;
};

console.log(convertCelsiusToFahrenheit(0)); // 32