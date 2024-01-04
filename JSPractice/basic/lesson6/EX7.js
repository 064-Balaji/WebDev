const movies = [
  {name: 'a', year: 2018, rating: 4.8},
  {name: 'b', year: 2018, rating: 4.7},
  {name: 'c', year: 2018, rating: 3},
  {name: 'd', year: 2017, rating: 4.5}
];

  const moviesName = movies
    .filter(m => m.year === 2018 && m.rating >= 4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(m => m.name)

  console.log(moviesName);