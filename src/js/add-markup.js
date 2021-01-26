import refs from './refs';
import severalCountriesTpl from '../templates/several-countries.hbs';
import oneCountry from '../templates/one-country.hbs';

export default function addMarkup(countries) {
  if (countries.length === 1) {
    const markup = oneCountry(countries);
    refs.markup.insertAdjacentHTML('beforeend', markup);
    console.log('only one country');
    return;
  }
  if (countries.length >= 2 && countries.length <= 10) {
    const markup = severalCountriesTpl(countries);
    refs.markup.insertAdjacentHTML('beforeend', markup);
    console.log('more then one country');
    return;
  }
  if (countries.length > 10) {
    console.log('too many countries');
  }
}
