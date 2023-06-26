const students = ['Sarothi', 'Bithi', 'Tithi', 'Aroti', 'Suroti', 'Marothi', 'Koroti'];

const result = students.sort();

//console.log(result);

// Sorting small to greater numbers:

// const sortNumbers = [59, 3, -1, 9, 36, 87, 7, 13, 101, 23, 44];

// const sortSmallToGreater = sortNumbers.sort(function (a, b) {
//     return a - b;
// });

// console.log(sortSmallToGreater);


// // Sorting greater to smaller numbers:

const sortNumbers = [59, 3, -1, 9, 36, 87, 7, 13, 101, 23, 44];

const sortGreaterToSmaller = sortNumbers.sort(function (a, b) {
    return b - a;
});

//console.log(sortNumbers);
console.log(sortGreaterToSmaller);