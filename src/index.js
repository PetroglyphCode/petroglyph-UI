import _ from 'lodash';
import Vue from 'vue/dist/vue.js';
import img from './assets/img/sometimes_800.jpg';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['I am a JS ', 'insertion'], ' ');

  return element;
}

document.getElementsByTagName('footer')[0].appendChild(component());

var drawer = new Vue({
	el:'div.drawer',
	data: {
		d_showing:false
	},
	methods:{
		toggledrawer: function(event){
			this.d_showing = !this.d_showing;
		}
	}
});
