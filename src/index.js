import './sass/styles.scss';
import refs from './js/refs';
import fetchCountries from './js/fetchCountries';
import debounce from 'lodash.debounce';
import addMarkup from './js/add-markup';

refs.countryInput.addEventListener('input', debounce(countryInputHandler, 500));
refs.countryInput.addEventListener('focus', clearCountryInput);

function countryInputHandler(event) {
  fetchCountries(event.target.value).then(countries => {
    console.log(countries);
    refs.markup.innerHTML = '';
    addMarkup(countries);
  });
}

function clearCountryInput(event) {
  event.target.value = '';
}
