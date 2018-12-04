import Component from '@ember/component';

export default Component.extend({
  actions: {
    close() {
      this.get('closeModal')();
      this.get('blurBackground')(false);
    }
  }
});
