import Publisher from './publisher';
import {
  hasMany
} from 'ember-data/relationships';
import {
  on
} from '@ember/object/evented';

export default Publisher.extend({
  books: hasMany('book', {
    async: true
  }),

  loadedAt: on('didLoad', function () {
    this.set('loadedAt', new Date());
  })
});