const randomNum = Math.floor(Math.random() * 100);

//console.log(randomNum);

function randomNumberMinToMax(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const result = randomNumberMinToMax(50, 100);
console.log(result);