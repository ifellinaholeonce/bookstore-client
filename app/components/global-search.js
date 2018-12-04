import Component from '@ember/component';
import {
  inject
} from '@ember/service'
import {
  debounce
} from '@ember/runloop';

export default Component.extend({
  ajax: inject(),
  actions: {
    close() {
      this.setProperties({
        pending: false,
        results: false
      })
    },

    open() {
      if (this.get('books') || this.get('authors')) {
        this.set('results', true)
      }
    },

    closeModal() {
      this.set('showModal', false)
    },

    showModal(book) {
      this.send('close')
      this.setProperties({
        myBook: book,
        showModal: true
      })
      this.get('blurBackground')(true);
    },

    q() {
      this.setProperties({
        results: false,
        pending: true
      })
      let sendQuery = () => {
        this.get('ajax').request('/search', {
          method: 'GET',
          data: query
        }).then(response => {
          this.setProperties({
            pending: false,
            results: true,
            books: response.books,
            authors: response.authors
          })
        })
      }
      let query = { q: this.get('q') }
      if (query.q === '') {
        this.setProperties({
          pending: false,
          books: null,
          authors: null
        })
        return
      } else {
        debounce(query, sendQuery, 150)
      }
    }
  }
});