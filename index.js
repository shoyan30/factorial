
//Normal factorial


// var factorial=1;
// for(var i = 1; i <= 5; i++){
//     factorial *=i;
// }
// console.log(factorial);

//using funtion & for loop

// function getFactorial(num){
//     var factorial = 1;
//     for(var i = 1; i<=num; i++){
//         factorial *=i;
        
//     }
//     return factorial;
// }
// var fact = getFactorial(5);
// console.log(fact);

//using while loop

// function getFactorial(num){
//     var factorial = 1;
//     var i = 1;
//     while( i<=num){
//         factorial *=i;
//         i++;
//     }
//     return factorial;
// }
// var fact = getFactorial(4);
// console.log(fact);

//on the other hand


// function getFactorial(num){
//     var factorial = 1;
//     var i = num;
//     while( i>1){
//         factorial *=i;
//         i--;
//     }
//     return factorial;
// }
// var fact = getFactorial(5);
// console.log(fact);

// n! = n*(n-1)!

function getFactorial(n){
    if(n == 1){
        return 1;
    }
   return n * getFactorial(n-1);
}
const fact = getFactorial(4);
console.log(fact);