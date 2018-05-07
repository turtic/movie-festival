
function Movie(title, length, genre) {
    this.title = title;
    this.movieLength = length;
    this.genre = genre;
}

Movie.prototype.getData = function () {
    return this.title + ', ' + this.movieLength + 'min' + ', ' + this.genre.getData();
}

module.exports = { Movie};


// class Movie {

//     constructor(title, length, genre) {
//         this.title = title;
//         this.movieLength = length;
//         this.genre = genre;
//     }

//     getData() {
//         return this.title + ', ' + this.movieLength + 'min' + ', ' + this.genre.getData();
//     }

// }

// module.exports = {
//     Movie
// };