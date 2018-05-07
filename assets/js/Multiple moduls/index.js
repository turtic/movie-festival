const {Genre} = require('./genre.js')
const {Movie} = require('./movie.js')
const {Program} = require('./program.js')
const {Festival} = require('./festival.js')


var action = new Genre('Action');
var drama = new Genre('Drama');
var comedy = new Genre('Comedy');

var redemption = new Movie('The Shawshank Redemption', 130, drama);
var matrix = new Movie('Matrix', 150, action);
var simpsons = new Movie('Simpsons', 120, comedy);
var madmax = new Movie('Mad Max', 125, action);

var ourProgram = new Program(new Date(2018, 3, 4));
var secondProgram = new Program(new Date(2018, 3, 5));

var fest = new Festival('Fest18');



ourProgram.addMovie(redemption);
ourProgram.addMovie(matrix);

secondProgram.addMovie(simpsons);
secondProgram.addMovie(madmax);

fest.addProgram(ourProgram);
fest.addProgram(secondProgram);

console.log(fest.getData());
