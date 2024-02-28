import _ from 'lodash';
import  App from './App.vue'
import  { createApp } from 'vue/dist/vue.esm-bundler.js';


const app = createApp(App).mount('#onePageApp')

function append() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['I am a JS ', 'insertion'], ' ');

  return element;
}