import _ from 'lodash';
import  { createApp } from 'vue/dist/vue.esm-bundler.js';

import img from './assets/img/sometimes_800.jpg';

const app = createApp({})

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['I am a JS ', 'insertion'], ' ');

  return element;
}

document.getElementsByTagName('footer')[0].appendChild(component());

const drawer = createApp({
  data() {
    return {
      d_showing:false
    }
  },
	methods:{
		toggledrawer(event){
			this.d_showing = !this.d_showing;
		}
	}
}).mount('div.drawer');

const thing = createApp({
  data() {
    return {
      locations: [],
      showModal: false,
      hovering: false,
   	  showing: false,
   	  m_showing:  false,
   	  menu_tpo: 0,
   	  menu_lpos: 0,
   	  menu_cpos: 0,
      menu: {
 		     'title':null,
 		     'name':null,
 		     'header':null,
 		     'left':null,
 	       'right':null,
 	       'footer':null,
 	      },
      display:{
   		   one: 'none',
   		   two: 'none',
   		   three: 'none',
   	   },

   	  menudisplay:'none', //CSS switch from none to block for menu container
   	  mobile: window.innerWidth >767 ? false: true,

    }
  },
  methods: {
	    hovermenu (event) { //hovering buttons - open or move the menu
		    if (!this.mobile){
		        this.hovering = true;
		   // console.log("Hovering on "+ event.target.getAttribute('data-menu'));
  		      if (!this.mobile){
  		        if (this.showing ===false){
  			           //Show menu here
  			         this.openmenu(event);
  		        } else {
  			           //Menu is open, just move it.
  			         this.movemenu(event);
  		        }
  		     }
		    }
		},
		hoverboard(event ){
			this.hovering = true;
			this.showing = true;
		},
		resetmenu(){
			this.display.one= 'none';
			this.display.two='none';
			this.display.three= 'none';
		},
		openmenu (event) { //grabs which menu and opens it from closed
			this.mobile = window.innerWidth >767 ? false: true;
			let targetmenu = event.target.getAttribute('data-menu');

			this.showing = true;
			if (this.mobile){
				//console.log('mobile' + this.mobile);
				this.menu.name = event.target.getAttribute('data-menu');

				if (this.menu.name ==='menu-one'){this.display.one= 'block';console.log(this.menu.name);}
				if (this.menu.name ==='menu-two'){this.display.two= 'block';}
				if (this.menu.name ==='menu-three'){this.display.three= 'block';}
			} else {
				//console.log('desktop'+ window.innerWidth);
				this.menudisplay = 'block';

				this.menu_lpos = this.getposition(event.target);
				this.propogatemenu(event);
			}
		},
		getposition(elem){
			let newmenu = elem.getAttribute('data-menu');
			let width = 500;
			let pageWidth = document.getElementById("pagehead").offsetWidth;
			let newmenu_cpos= (elem.offsetWidth /2) + elem.offsetLeft; // center of the button half the width of the button plus its distance from the left side
			//console.log(newmenu_cpos);
			//console.log('offsetwiddth: '+document.getElementById("menubox").offsetWidth);
			width = document.getElementById("menubox").offsetWidth > 0 ? document.getElementById("menubox").offsetWidth : width; 
			let newmenu_lpos=  newmenu_cpos - (document.getElementById("menuroot").offsetLeft) - (width /2); //- (document.getElementById("menuroot").offsetWidth)
			//need a value of at least zero.
			newmenu_lpos= Math.sign(newmenu_lpos) < 0 ? 0 : newmenu_lpos;
			//and! Menu should not run off the side of the page.
			newmenu_lpos = width + newmenu_lpos > pageWidth ? pageWidth - width : newmenu_lpos;
			//console.log(newmenu_lpos);
			return newmenu_lpos;
		},
		movemenu(event)  { //grabs which menu and opens it from open on another menu
			// menu has to be open for this to work
			if (!this.mobile){
			if (this.showing === false){
				return;
			}
			this.resetmenu();
			let newmenu = event.target.getAttribute('data-menu');
		    let rootelem = document.getElementById("menuroot");

		    this.menu_lpos = this.getposition(event.target);
		    this.propogatemenu(event);

		    }

		},
		togglemenu(event) { // Should exclusively fire for buttons.
			//console.log('now toggling');
			//
			if(this.showing && this.menu.name !== event.target.getAttribute('data-menu')){ //menu should switch which is open
			//	this.resetmenu();
				//this.openmenu(event);
				//window.console.log('first - do not match');
				this.resetmenu();

			} else {

			//window.console.log(this.showing);
			this.showing = !this.showing;
			}
			if (this.showing === true){
				//open menu
				this.openmenu(event);
				} else {
					//close menu
					//if (this.mobile){} else {
					let delay = false;
					this.hidemenu(event, delay);
					//}
				}

		},

		propogatemenu(event){ // Let' put the menu together:
			this.resetmenu();
			this.menu.title = event.target.getAttribute('data-menutitle'); //title
			//this.menutitle= this.menu.title;
			this.menu.name = event.target.getAttribute('data-menu'); //namespace
			//console.log(this.menu.name);
			this.menu.left = document.querySelector('[data-nav="'+this.menu.name+'"][data-menu-place="left"]') ? document.querySelector('[data-nav="'+this.menu.name+'"][data-menu-place="left"]').innerHTML : null; // get left side of menu via namespace
			this.menu.right = document.querySelector('[data-nav="'+this.menu.name+'"][data-menu-place="right"]') ? document.querySelector('[data-nav="'+this.menu.name+'"][data-menu-place="right"]').innerHTML : null; // get right side of menu via namespace
			//console.log(this.menuright);
			this.menu.header = document.querySelector('[data-nav="'+this.menu.name+'"][data-menu-place="header"]') ? document.querySelector('[data-nav="'+this.menu.name+'"][data-menu-place="header"]').innerHTML : null; // we may have a header - null if not
			this.menu.footer = document.querySelector('[data-nav="'+this.menu.name+'"][data-menu-place="footer"]') ? document.querySelector('[data-nav="'+this.menu.name+'"][data-menu-place="footer"]').innerHTML : null; // we may have a header - null if not

		},
		hideboard( event) {

			if (!this.mobile){
				this.hidemenu(event);
			}
		},
		hidemenu (event, delay= true) { // when the hovering stops
			//console.log('delay -->' + delay);

			this.hovering= false;
			//console.log("out: "+ this.hovering);
			if (delay===true){
				setTimeout(() => {
					if (this.hovering === true){
						return;
					}
					//hide menu here.
					this.showing= false;
					this.menudisplay= 'none';
					this.resetmenu();
					//console.log('Delay: '+ delay+ 'now hidden')
				}, 1000);
			} else {
			//console.log('Delay: '+ delay+ 'without delay');
			this.showing= false;
			this.menudisplay= 'none';
			this.resetmenu();
			}
		},
		openMobileMenuContainer(x) {
			this.m_showing = this.m_showing === true ? false : true; //change the class
			}
      }
    }).mount('header#pagehead');
