function seriesSum(num){
    let res = 0;
    for (let i = 0; i <= num; i++) {
        res += i;
        
    }
    return res;
}

function printSum(){
    console.log("The sum is: " + seriesSum(5))
};

setTimeout(printSum,1000);
console.log('hello world');
