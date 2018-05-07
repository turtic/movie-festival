'use strict';


document.querySelector('#create-movie').addEventListener('click', function (event) {

    var movieInput = document.querySelector('#movie-title');
    var lengthInput = document.querySelector('#movie-length');
    var movieGenreSelect = document.querySelector('#genre-select');

    var movieError = document.querySelector('#movie-title-error');
    var lengthError = document.querySelector('#movie-length-error');
    var genreError = document.querySelector('#movie-genre-error');

    var movieTitle = movieInput.value;
    var movieLength = lengthInput.value;


    var movieGenreIndex = movieGenreSelect.selectedIndex;
    var movieGenre = movieGenreSelect.options[movieGenreIndex].value;

    // validation

    var error = {
        OK: 'OK',
        INSERT_TITLE: 'Please insert the title',
        INSERT_LENGTH: 'Please check the movie length',
        SELECT_GENRE: 'Please select the movie genre'
    }


    if (movieTitle == '') {
        return movieError.innerHTML = error.INSERT_TITLE;
    }

    if (isNaN(movieLength) || movieLength == '') {
        return lengthError.innerHTML = error.INSERT_LENGTH,
            movieError.innerHTML = '';
    }

    if (movieGenre == '-') {
        return genreError.innerHTML = error.SELECT_GENRE,
            lengthError.innerHTML = '',
            movieError.innerHTML = '';
    }

    // creating movie object
    var movie = new Movie(movieTitle, movieLength, movieGenre)

    // pushing movie object to global list of movies
    movieList.push(movie)

    // inserting movie data into HTML
    var newEl = document.createElement('li');
    var nodeText = movie.getData()
    var newText = document.createTextNode(nodeText);
    newEl.appendChild(newText);
    var someList = document.querySelector('#movie-list');
    someList.appendChild(newEl);

    // calculating total length of all movies
    var sum = 0;
    for (var i = 0; i < movieList.length; i++) {
        sum = sum + parseInt(movieList[i].movieLength);
    }
    // inserting total length into HTML
    document.querySelector('#total-length').innerHTML = 'All movies length: ' + sum + ' min';

    // resetting inputs
    movieInput.value = '';
    lengthInput.value = '';
    movieGenreSelect.value = '-';

    // reset errors
    document.querySelector('#movie-length-error').innerHTML = '';
    document.querySelector('#movie-title-error').innerHTML = '';
    document.querySelector('#movie-genre-error').innerHTML = ''

    // inserting movie title into movie drop down list(HTML)
    var newEl1 = document.createElement('option');
    var nodeText1 = movieTitle
    var newText1 = document.createTextNode(nodeText1);
    newEl1.appendChild(newText1);
    var someList1 = document.querySelector('#movie-select');
    someList1.appendChild(newEl1);

})


document.querySelector('#create-program').addEventListener('click', function (event) {

    // validation
    if (document.querySelector('#date2').value == "") {
        return document.querySelector('#date-error').innerHTML = "Please select a date"
    }

    // delete error message
    document.querySelector('#date-error').innerHTML = '';

    // create program object
    var dateInput = document.querySelector('#date2').value;
    var program1 = new Program(dateInput);

    // push program to global list of programs
    programList.push(program1);

    // add program list to screen
    var newEl = document.createElement('li');
    var newText = document.createTextNode(program1.getData());
    newEl.appendChild(newText);
    var someList = document.querySelector('#program-list');
    someList.appendChild(newEl);

    // add program to select program drop down
    var newEl1 = document.createElement('option');
    var nodeText1 = program1.getData()
    var newText1 = document.createTextNode(nodeText1);
    newEl1.appendChild(newText1);
    var someList1 = document.querySelector('#program-select');
    someList1.appendChild(newEl1);

    // reset date input
    document.querySelector('#date2').value = '';

})


document.querySelector('#add-movie').addEventListener('click', function (event) {

    var movieName = document.querySelector('#movie-select').value;
    var programData = document.querySelector('#program-select').value;
    var addMovieError = document.querySelector('#add-movie-error').innerHTML;
    var addProgramError = document.querySelector('#add-program-error').innerHTML;
    var selectedProgram;
    var selectedMovie;
    var index;

    // validation

    if (movieName == "-" || movieName == "") {
        return document.querySelector('#add-movie-error').innerHTML = "Please select a movie";
    }
    // reset movie error message
    document.querySelector('#add-movie-error').innerHTML = "";

    if (programData == "-" || programData == "") {
        return document.querySelector('#add-program-error').innerHTML = "Please select a program";
    }
    // reset program error message
    document.querySelector('#add-program-error').innerHTML = "";

    // find(compare) program with getData() string
    for (var i = 0; i < programList.length; i++) {
        
        if ('' + programData == programList[i].getData() + '') {

            selectedProgram = programList[i];
            index = i;
        }
    }
    // find(compare) movie with movieTitle string
    for (var i = 0; i < movieList.length; i++) {

        if (movieName == movieList[i].movieTitle) {

            selectedMovie = movieList[i];
        }
    }
    // add movie to the list
    selectedProgram.addMovie(selectedMovie);

    // clear old program list from screen
    document.querySelector('#program-list').innerHTML = '';

    // add updated program lists to screen(HTML)
    for (var i = 0; i < programList.length; i++) {

        var newEl = document.createElement('li');
        var newText = document.createTextNode(programList[i].getData());
        newEl.appendChild(newText);
        var someList = document.querySelector('#program-list');
        someList.appendChild(newEl);

    }
    // clear old program list from drop down
    document.querySelector('#program-select').innerHTML = '';
    // add empty option
    document.querySelector('#program-select').innerHTML = '<option>-<option>';

    // add updated program lists in drop down
    for (var i = 0; i < programList.length; i++) {

        var newEl1 = document.createElement('option');
        var nodeText1 = programList[i].getData()
        var newText1 = document.createTextNode(nodeText1);
        newEl1.appendChild(newText1);
        var someList1 = document.querySelector('#program-select');
        someList1.appendChild(newEl1);

    }

    // reset inputs
    document.querySelector('#program-select').value = '-';
    document.querySelector('#movie-select').value = '-';

})