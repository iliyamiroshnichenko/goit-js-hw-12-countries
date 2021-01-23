import articlesTpl from '../templates/articles.hbs';
import refs from './refs';

function updateArticlesMarkup(articles) {
  const markup = articlesTpl(articles);
  refs.ul.insertAdjacentHTML('beforeend', markup);
}

export default updateArticlesMarkup;
