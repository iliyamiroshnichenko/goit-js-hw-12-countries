const apiKey = 'eeb40ede522f4eeca172d2d6e7658ecb';

export default {
  searchQuery: '',
  page: 1,

  fetchArticles() {
    const url = `http://newsapi.org/v2/everything?q=${this.query}&language=en&pageSize=5&page=${this.page}`;

    const options = {
      headers: {
        Authorization: apiKey,
      },
    };

    return fetch(url, options)
      .then(res => res.json())
      .then(({ articles }) => {
        this.page += 1;
        return articles;
      })
      .catch(error => console.log(error));
  },

  resetPage() {
    this.page = 1;
  },

  get query() {
    return this.searchQuery;
  },

  set query(newQuery) {
    this.searchQuery = newQuery;
  },
};
