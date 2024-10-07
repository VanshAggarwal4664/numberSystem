const numbers = [  19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30, ];
  
let primeArray=[];
function findPrime(numbers){
    for(let i=0;i<numbers.length;i++){
        let num=numbers[i]
        let count=0;
        for(let j=1;j<=num;j++){
            if(num%j==0){
                count++;
            }
        }

        if(count==2){
            console.log("prime number",num)
            primeArray.push(num)
        }
    }
}

function FindMax(primeArray){
    let max=primeArray[0]

    for(let i=1;i<primeArray.length;i++){
        if(max<primeArray[i]){
            max=primeArray[i];
        }
    }
    return max;
}

function FindMin(primeArray){
    let min=primeArray[0]

    for(let i=1;i<primeArray.length;i++){
        if(min>primeArray[i]){
            min=primeArray[i];
        }
    }
    return min;
}

function FindSum(primeArray){
    let sum=0;
    for(let i=0;i<primeArray.length;i++){
        sum+=primeArray[i]
    }
    return sum;
}

findPrime(numbers);
console.log(FindMax(primeArray))
console.log(FindMin(primeArray))
console.log(FindSum(primeArray))