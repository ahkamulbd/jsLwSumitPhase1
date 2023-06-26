function randomNumberInLodo(min, max) {
    const number = Math.floor(Math.random() * (max - min + 1) + min);
    return number;
}

const result = randomNumberInLodo(1, 6);
console.log(result);