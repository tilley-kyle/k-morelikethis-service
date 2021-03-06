const Movie = require('../../MovieSchema.js');
const faker = require('faker');
const ratingGen = require('./ratingGenerator.js');
const descriptonGen = require('./descriptionGenerator.js');
const starsSeeder = require('./starsSeeder.js');
const similarMoviesSeeder = require('./similarMoviesSeeder.js');


const randomSeeder = () => {
  for (let i = 6; i <= 100; i++) {
    const film = new Movie({
      movieName: faker.fake('{{name.firstName}} {{name.lastName}}'),
      movieID: i,
      image: 'stringggggggggggggggggggggggggg',
      rating: ratingGen(),
      reviewScore: Math.floor(Math.random() * 11),
      description: descriptonGen(),
      director: faker.fake('{{name.firstName}} {{name.lastName}}'),
      stars: starsSeeder(),
      similarMovies: similarMoviesSeeder()
    });
    film.save();
  }
}

module.exports = randomSeeder;