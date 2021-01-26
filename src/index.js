import './sass/styles.scss';
import newsService from './js/service';
import updateArticlesMarkup from './js/update-articles-markup';
import LoadMoreBtn from './js/loadMoreBtn';
import refs from './js/refs';

// const options = {
//   method: 'GET',
//   headers: {
//     Accept: 'application/json',
//   },
// };

// fetch('http://hn.algolia.com/api/v1/search?query=...', options)
//   .then(response => response.json())
//   .then(data => console.log(data));

// fetch('http://hn.algolia.com/api/v1/search?query=react&tags=story')
//   .then(res => res.json())
//   .then(data => console.log(data));

// console.log(new LoadMoreBtn('button[data-action="load-more"]'));
const loadmoreBtn = new LoadMoreBtn('button[data-action="load-more"]');
refs.form.addEventListener('submit', searchFormSubmitHandler);

loadmoreBtn.refs.button.addEventListener('click', fetchArticles);

function searchFormSubmitHandler(event) {
  event.preventDefault();
  const form = event.currentTarget;
  newsService.query = form.elements.query.value;

  clearArticlesContainer();
  newsService.resetPage();
  fetchArticles();
  form.reset();
}

function fetchArticles() {
  loadmoreBtn.disable();

  newsService.fetchArticles().then(articles => {
    updateArticlesMarkup(articles);
    loadmoreBtn.show();
    loadmoreBtn.enable();
  });
}

function clearArticlesContainer() {
  refs.ul.innerHTML = '';
}
