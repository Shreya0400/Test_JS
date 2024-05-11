// Question 1:

// Write a JavaScript for loop that iterates from 0 to 10 and prints only the even numbers.

// var number;
// for (number = 0; number <= 10; number++){
//     if (number % 2 == 0) {
//         console.log(number);
//     }
    
// }

// Question 2:

// Write a JavaScript while loop that calculates the factorial of a given number.


// var n;
// function fact(n) {
//     var num = 1;
//     if (n == 0)
//     {
//         return 1;
//         }
//     for (var i = 1; i <= n; i++){
//         num = num * i;
        
//     }
//     return num;
        
// }
// console.log(fact(0));

// Question 3:

// Create a JavaScript function that takes an array of numbers as input and returns the sum of all the numbers using a for loop.

// var s = [1, 2, 3, 4, 5]

// function sum(n) {
//     let temp = 0;
//     for (i = 0; i < s.length; i++)
//     {
//         temp = temp + s[i];
//     }
//     return temp;
// }

// console.log(sum(s));

// Question 4:

// Write a JavaScript program that generates a Fibonacci sequence up to a certain number n, using a while loop.

//var num = 4; //no of terms of the series
var n1 = 0;
var n2 = 1;
var nxt;
function fibo(n) {
    console.log(n1);

    for (i = 1 ; i <= n; i++){
        console.log(n2);
        nxt = n1 + n2;
        n1 = n2;
        n2 = nxt;
    }
    return n2;
}
console.log(fibo(4));