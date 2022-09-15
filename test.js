// let numberOfFilms = +prompt('How many films have you already watched ?', '');
//
// let personalMoviedB = {
//     count: numberOfFilms,
//     movies: {
//
//     },
//     actors: {
//
//     },
//     genres : [],
//     private : false
// }
//
// let lastWatched1 = prompt('Which one was the last you\'ve watched?');
// let whatRank1 = prompt('How can you rank it ?');
// let lastWatched2 = prompt('Which one was the last you\'ve watched?');
// let whatRank2 = prompt('How can you rank it ?');
//
// personalMoviedB.movies[lastWatched1] = whatRank1;
// personalMoviedB.movies[lastWatched2] = whatRank2;
// console.log(personalMoviedB);
//
//
// function fromFiveToTen(){
//     for (let i = 5;i<=10;i++){
//         console.log(i)
//     }
// }

function second() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    let result =[];

    for(let i = 0; i < data.length;i++) {
        result[i] = data[data.length - (i+1)]

    }
    return result;

}

console.log(second())




