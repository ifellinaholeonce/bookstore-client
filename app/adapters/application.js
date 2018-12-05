import JSONAPIAdapter from 'ember-data/adapters/json-api';
import { underscore } from '@ember/string'
import { pluralize } from 'ember-inflector'
export default JSONAPIAdapter.extend({

  pathForType(type) {
    return pluralize(underscore(type));
  },

  shouldReloadRecord() {
      return false;
    },

    shouldBackgroundReloadRecord(store, snapshot) {

      const loadedAt = snapshot.record.get('loadedAt');

      // if it was loaded more than an hour ago
      if (Date.now() - loadedAt > 3600000) {
        return true;
      } else {
        return false;
      }
    }
});