/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
//create an array of all the titles of each movie in the array
// each title is movies[0].title
//pushing into an empty array
function getAllMovieTitles(movies) {
  //create an empty array
  let movieTitleArray = [];
  //loop through each movie object
  for (const eachMovie of movies) {
    //push the movie into the array
    movieTitleArray.push(eachMovie.title)
  }
  return movieTitleArray;
}

// console.log(getAllMovieTitles(exampleMovies));

/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */
//function gives me the highest metascore of the movie array
//there needs to be a default value of movies[0].metascore
//if there is a metascore that is higher than it should be the new default value
//thing to note is that the metascore value is a string
function getHighestMetascore(movies) {
  if (movies.length === 0) {
    return 0;
  }
  let highestMetaScore = movies[0].metascore;
  //loop through the array to compare metascores
  for (let i = 0; i < movies.length; i++) {
    if (Number(movies[i].metascore > Number(highestMetaScore))) {
      highestMetaScore = movies[i].metascore
    }
  }
  return Number(highestMetaScore);
}

// console.log(getHighestMetascore(exampleMovies));

/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */

//get an average all of the IMDB ratings
//access imdb rating by movies[0].imdbRating
//get total first, then divide by the amount of mvovies in the list
function getAverageIMDBRating(movies) {
  if (movies.length === 0) {
    return 0;
  }
  let grandIMDBtotal = 0;
  //loop through each movie
  for (const eachMovie of movies) {
    grandIMDBtotal += Number(eachMovie.imdbRating);
  }
  let average = grandIMDBtotal/movies.length;
  return Number(average.toFixed(2));
}

// console.log(getAverageIMDBRating(exampleMovies));

/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */
//create a new object
//the keys are movie ratings
//the values are the number of movies with the rating
//determine if the rating key exists, if it doesn't create one and have the value = 1
//if the rating key does exist, add one to its value
//access the ratings as movies[i].rated
function countByRating(movies) {
  if (movies.length === 0) {
    return {};
  }
  //create an empty object
  let ratingCount = {};
  //loop through the movies
  for (let i = 0; i < movies.length; i++) {
    let movieRated = movies[i].rated;
    if (ratingCount[movieRated]){
      ratingCount[movieRated] += 1;
    } else {
      ratingCount[movieRated] = 1;
    }
  }
  return ratingCount;
}

countByRating(exampleMovies);
/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
function findById() {}

/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
function filterByGenre() {}

/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function getAllMoviesReleasedAtOrBeforeYear() {}

/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */
function getBiggestBoxOfficeMovie() {}

// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
