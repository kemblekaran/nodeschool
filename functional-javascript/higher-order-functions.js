function operation(){

}

function repeat(operation, num){
    //using for loop
    // for(let i in num){
    //     operation
    // }

    //using recursion
    if(num <= 0) return operation();
    return repeat(operation, --num);
}

module.exports = repeat;