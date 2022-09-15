let numberOfFilms = +prompt('How many films have you already watched ?', '');

let personalMoviedB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres : [],
    private : false
}

let lastWatched1 = prompt('Which one was the last you\'ve watched?');
let whatRank1 = prompt('How can you rank it ?');
let lastWatched2 = prompt('Which one was the last you\'ve watched?');
let whatRank2 = prompt('How can you rank it ?');

personalMoviedB.movies[lastWatched1] = whatRank1;
personalMoviedB.movies[lastWatched2] = whatRank2;
console.log(personalMoviedB);

