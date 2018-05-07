    //------------------------------------------ Genre --------------------------------
    function Genre(name) {

        this.name = name;
    }

    Genre.prototype.getData = function () {
        var a = this.name[0] + this.name[this.name.length - 1];
        return a.toUpperCase(this.name);
    }

    //------------------------------------------ Movie --------------------------------
    function Movie(title, length, genre) {
        this.title = title;
        this.movieLength = length;
        this.genre = genre;
    }

    Movie.prototype.getData = function () {
        return this.title + ', ' + this.movieLength + 'min' + ', ' + this.genre.getData();
    }

    //------------------------------------------ Program --------------------------------    
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

            programLength = programLength + this.list[i].movieLength;
        }

        for (var i = 0; i < this.list.length; i++) {

            z = z + this.list[i].getData() + '\n';
        }
        // console.log(z)
        return this.date + ', ' + programLength + 'min' + '\n' + z;
    }

    //------------------------------------------ Festival --------------------------------
    function Festival(name) {
        this.name = name;
        this.list = [];
        this.number = 0;
    }

    Festival.prototype.addProgram = function (program) {
        this.list.push(program);
        this.number++;
    };

    Festival.prototype.getData = function () {
        var sumMov = 0;
        var sumProgData = '';
        for (var i = 0; i < this.list.length; i++) {
            sumMov = sumMov + this.list[i].number;
            sumProgData = sumProgData + this.list[i].getData() + '\n';
        }

        return this.name + ' has ' + sumMov + ' movie titles' + '\n' + sumProgData

    }


    module.exports = { Genre, Movie, Program, Festival};

