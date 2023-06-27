const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function countVowels(sentence) {
    let count = 0;
    const letters = Array.from(sentence);

    letters.forEach(function (value) {
        if (vowels.includes(value)) {
            count++;
        }
    });
    return count;
}
const result = countVowels('I love Jinan and she is my pran');
//console.log(result);

const text = 'I love Jinan';
const newText = Array.from(text);

console.log(newText);