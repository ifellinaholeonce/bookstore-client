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
      this.set('pending', false)
      this.set('results', false)
    },

    open() {
      if (this.get('books') || this.get('authors')) {
        this.set('results', true)
      }
    },

    q() {
      this.set('results', false)
      this.set('pending', true)
      let query = { q: this.get('q') }
      let sendQuery = () => {
        if (query.q === '') {
          this.set('pending', false)
          this.set('books', null)
          this.set('authors', null)
          return
        }
        this.get('ajax').request('/search', {
          method: 'GET',
          data: query
        }).then(response => {
          this.set('pending', false)
          this.set('results', true)
          this.set('books', response.books)
          this.set('authors', response.authors)
        })
      }
      debounce( query, sendQuery, 150)
    }
  }
});