import _ from 'lodash';
import img from './assets/img/sometimes_800.jpg';
import Vue from 'vue/dist/vue.js'

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['I am a JS ', 'insertion'], ' ');

  return element;
}
function menuToggle(x) {
  x.classList.toggle("change");
  var y=document.getElementById('siteMenu');
 if(! y.style.display){y.style.display = "block";}
 else if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none"; console.log(y.style.display);
  }
}
document.getElementsByTagName('footer')[0].appendChild(component());
document.getElementById("mobileMenuToggle").addEventListener("click", function(){
  menuToggle(this)
});

var app = new Vue({
  el: '#linelength',
  data: {
    message: 'Hello Vue!'
  }
})

