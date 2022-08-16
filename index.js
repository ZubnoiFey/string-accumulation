// function askUser(word) {
//     for (let i = 1; i++;) {
//         let emptyString = '';
//         let askaQuestion = prompt("Enter a word");
//         askaQuestion.toLowerCase();
//        askaQuestion = emptyString += askaQuestion;
//         // let result = emptyArray.reduce((previous, current) => previous + current);
//         // if (askaQuestion === "break" || askaQuestion === false) {
//         //     console.log(emptyArray);
//         //     break;
//         // }
//         // console.log(result);
//         console.log(emptyString += askaQuestion);
//     }
//
// }
//
// askUser();


// function askUser(word) {
//     for (let i = 1; i++;) {
//         let emptyString = '';
//         let askaQuestion = prompt("Enter a word");
//         askaQuestion.toLowerCase();
//         askaQuestion = emptyString += askaQuestion;
//         console.log(emptyString);
//         if (askaQuestion === "break" || askaQuestion === false) {
//             console.log(askaQuestion);
//             break;
//         } else if(askaQuestion==="word") {
//             break;
//         }
//
//     }
// }
//
// askUser();

/*Зафарбувати одну літеру в реченні*/
// let askaQuestion = "Lorem ipsum fuck dolor sit amet";
// let emptyString = '';
//
//     for (let i = 0; i < askaQuestion.length; i++) {
//         console.log(askaQuestion[i]);
//         if(askaQuestion[i]==="f") {
//             emptyString = `${emptyString}#`;
//         } else{
//             emptyString = `${emptyString}${askaQuestion[i]}`;
//     }
//
// }
//
//
// console.log(emptyString);



/*Питаємо у користувача числа нескінченно. Якщо користувач вводить слово break, ми закінчуємо цикл і виводимо в консоль всі слова*/

let iterationsStorage = '';

function askWords(word) {
    while (true) {
        const getWord = prompt("Enter a number");
        if (getWord === "break") {
            break;
        } else if(getWord===word) {
            iterationsStorage = `${iterationsStorage}*`
        }
        iterationsStorage += getWord + ',';
    }
}

askWords();
console.log(iterationsStorage);