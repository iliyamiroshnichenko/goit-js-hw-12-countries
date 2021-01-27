import { error } from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

export default {
  tooManyMatchesError() {
    error({
      text: 'Too many matches found! Please enter a more spesific query!',
      delay: 3000,
    });
  },
  nothingFoundError() {
    error({
      text: 'Nothing found :( Try again!',
      delay: 3000,
    });
  },
};
