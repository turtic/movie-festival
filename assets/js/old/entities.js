'use strict';
// global varibles
var movieList = [];
var programList = [];

// movie constructor function
function Movie(title, length, genre) {
    this.movieTitle = title;
    this.movieLength = length;
    this.movieGenre = genre;
}

Movie.prototype.getData = function () {
    return this.movieTitle + ', ' + this.movieLength + 'min' + ', ' + this.getGen();
}

Movie.prototype.getGen = function () {
    var a = this.movieGenre[0] + this.movieGenre[this.movieGenre.length - 1];
    return a.toUpperCase(this.movieGenre);
}
// program constructor function
function Program(date) {
    this.date = date;
    this.list = [];
    this.number = 0;
}



Program.prototype.addMovie = function (movie) {
    this.list.push(movie);
    this.number++;
};

Program.prototype.getData = function () {
    var programLength = 0;
    var z = '';

    for (var i = 0; i < this.list.length; i++) {
        programLength = programLength + parseInt(this.list[i].movieLength);
    }

    return this.date + ', ' + 'Total program length: ' + programLength + 'min. Number of movies: ' + this.number;
}


