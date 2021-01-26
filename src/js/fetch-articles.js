const apiKey = 'eeb40ede522f4eeca172d2d6e7658ecb';

function fetchArticles(searchQuery, page = 1) {
  const url = `http://newsapi.org/v2/everything?q=${searchQuery}&language=en&pageSize=10&page=${page}`;

  const options = {
    headers: {
      Authorization: apiKey,
    },
  };

  return fetch(url, options)
    .then(res => res.json())
    .then(({ articles }) => articles)
    .catch(error => console.log(error));
}

export default fetchArticles;
