import Component from '@ember/component';
import {
  debounce
} from '@ember/runloop';

export default Component.extend({
  actions: {
    q() {
      let query = { q: this.get('q') }
      let myQ = () => {
        console.log(this.q)
      }
      debounce( query, myQ, 200)
    }
  }
});