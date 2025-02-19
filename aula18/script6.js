// function square(x) {
//     return x * x
// }

// function addSquares(a, b){
//     return square(a) + square(b)
// }


// function addSquares(a, b){

//     function square(x) {
//         return x * x
//     }

//     return square(a) + square(b)
// }


// function addSquares(a, b){

//     function square(x) {
//         return x * x
//     }
    
//     let sqrA = square(a);
//     let sqrB = square(b);
//     return sqrA + sqrB;
// }


function addSquares(a, b){

    const square = (x) => x * x;
    
    let sqrA = square(a);
    let sqrB = square(b);
    return sqrA + sqrB;
}

console.log(addSquares(2, 4))