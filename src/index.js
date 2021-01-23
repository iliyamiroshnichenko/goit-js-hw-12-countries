import './sass/styles.scss';
import fetchArticles from './js/fetch-articles';
import updateArticlesMarkup from './js/update-articles-markup';
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

refs.form.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const inputValue = form.elements.query.value;

  refs.ul.innerHTML = '';
  form.reset();
  fetchArticles(inputValue).then(updateArticlesMarkup);
});
