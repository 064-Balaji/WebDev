//String type properties of an objects is only gets displayed.

const movie = {
  Name: 'Interstellar',
  Year: 2018,
  Rating: 4.95,
  Director: 'Christopher Nolan'
};

showProperties(movie);

function showProperties(movie) {
  for(let key in movie)
    if(typeof(movie[key]) == 'string')
      console.log(key, movie[key]);
}