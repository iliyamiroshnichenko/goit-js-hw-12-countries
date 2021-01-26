export default class loadmoreBtn {
  constructor(selector) {
    this.refs = this.getRefs(selector);
  }
  getRefs(selector) {
    const refs = {};
    refs.button = document.querySelector(selector);
    refs.label = refs.button.querySelector('.label');
    refs.spinner = refs.button.querySelector('.spinner');
    return refs;
  }

  enable() {
    this.refs.button.disabled = false;
    this.refs.label.textContent = 'Показать еще';
    this.refs.spinner.classList.add('is-hidden');
  }
  disable() {
    this.refs.button.disabled = true;
    this.refs.label.textContent = 'Загружаем...';
    this.refs.spinner.classList.remove('is-hidden');
  }
  show() {
    this.refs.button.classList.remove('is-hidden');
  }
}

// export default {
//   refs: {
//     button: document.querySelector('button[data-action="load-more"]'),
//     label: document.querySelector('button[data-action="load-more"] .label'),
//     spinner: document.querySelector('button[data-action="load-more"] .spinner'),
//   },
//   enable() {
//     this.refs.button.disabled = false;
//     this.refs.label.textContent = 'Показать еще';
//     this.refs.spinner.classList.add('is-hidden');
//   },
//   disable() {
//     this.refs.button.disabled = true;
//     this.refs.label.textContent = 'Загружаем...';
//     this.refs.spinner.classList.remove('is-hidden');
//   },
//   show() {
//     this.refs.button.classList.remove('is-hidden');
//   },
// };
