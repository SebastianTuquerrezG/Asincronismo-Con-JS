function sum(num1, num2){
    return num1 + num2;
}

function calc(num1, num2, callback){
    return callback(num1, num2);
}
console.log(sum(2, 2));
console.log(calc(2, 2, sum));

function date(callback) {
    console.log(new Date);
    for(var i = 0; i < 10; i++){
    setTimeout(function () {
        let date = new Date;
        callback(date);
    }, 3000)}
}

function printDate(dateNow){
    console.log(dateNow);
}

date(printDate);