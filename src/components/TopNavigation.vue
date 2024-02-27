<template>
	<header class="lg:px-2 px-1 bg-gray-600 flex flex-wrap items-center py-3 lg:pb-0 " id='pagehead'>
		<div class="container ml-auto mr-auto px-2 md:max-w-full">
			<nav class=" border-b-2 border-gray-500   block pt-2">
				<ul class="block md:flex md:flex-wrap xl:flex-no-wrap  xl:items-stretch xl:justify-between ">
					<li class=' flex text-center  md:w-1/2  lg:w-auto justify-between text-large' >
						<a href="/">Petroglyph UI</a>
						<a class="menu-toggle md:hidden  align-top h-12" id='mobileMenuToggle' v-on:click="openMobileMenuContainer"  v-bind:class="{ 'change': m_showing}">
							<div class="bar1"></div>
							<div class="bar2"></div>
							<div class="bar3"></div>
						</a>
					</li>
					<li class=" primary_nav  md:flex md:order-last md:justify-center md:w-full lg:w-auto lg:order-none lg:ml-auto lg:mr-auto  xl:ml-0 xl:mr-0 border-box items-center" v-bind:class="{'block': m_showing, 'hidden': !m_showing}">
						<button class="text-gray-100 mr-auto ml-auto  text-2xl  px-12 py-3 hover:text-gray-700 hover:bg-gray-100  md:text-base lg:text-lg md:px-3 lg:px-6 md:py-1 font-medium block md:flex  md:m-0 " v-on:mouseover.self="hovermenu" v-on:click.self="togglemenu" v-on:mouseout='hideboard' data-menu='menu-one' data-menutitle='Petroglyph UI Features' name='Page Features'>UI Kit Features<span class="text-orange-200 ml-1">&#9660;</span></button>
						<div class='p-4  vertical-menu' data-nav='menu-one' data-menu-place='left' v-bind:style="{ display: display.one }">
							<ul class="subnav left" >
								<!-- Vue Router goes here for these examples-->
									<li><a class="block p-3 text-center md:text-left text-white md:text-gray-600 hover:text-blue-900" href="#typography">Typography</a></li>
									<li><a class="block p-3 text-center md:text-left text-white md:text-gray-600 hover:text-blue-900" href="#colors">Color Palette</a></li>
									<li><a class="block p-3 text-center md:text-left text-white md:text-gray-600 hover:text-blue-900" href="#text">Text Display</a></li>
									<li><a class="block p-3 text-center md:text-left text-white md:text-gray-600 hover:text-blue-900" href="#uicomponents">UI Components</a></li>
									<li><a class="block p-3 text-center md:text-left text-white md:text-gray-600 hover:text-blue-900" href="#images">Images</a></li>
									<li><a class="block p-3 text-center md:text-left text-white md:text-gray-600 hover:text-blue-900" href="#cards">Cards</a></li>
									<li><a class="block p-3 text-center md:text-left text-white md:text-gray-600 hover:text-blue-900" href="#">Adding features? Add them here</a></li>
							</ul>
						</div>
						<div class=' vertical-menu' data-nav='menu-one' data-menu-place='right' v-bind:style="{ display: display.one }">
							<h4 class='text-center md:text-left md:text-xl text-white md:text-gray-300 md:font-semibold md:font-display md:mb-4'>Off-page features</h4>
							<ul class="" >
								<li class="my-2">Skip To Main Content for accessibility</li>
								<li class="my-2">Mobile-first, Vue-driven mega-menu navigation</li>
								<li class="my-2">ExpressionEngine and Craft CMS ready</li>
								<li class="my-2">Color palette built into Tailwind CSS</li>
							</ul>
						</div>
						<button class="text-gray-100 hover:text-gray-700 hover:bg-gray-100  text-2xl md:text-base lg:text-lg md:px-3 lg:px-6 py-3 md:py-1 font-medium block md:flex mr-auto ml-auto md:m-0" v-on:mouseover.self="hovermenu" v-on:click.self="togglemenu" v-on:mouseout='hideboard' data-menu='menu-two' data-menutitle='Aquarian Web Studio' name="About Aquarian Web Studio">About Aquarian Web Studio<span class="text-orange-200 ml-1">&#9660;</span></button>
						<div class='p-4 vertical-menu' data-nav='menu-two' data-menu-place='left' v-bind:style="{ display: display.two }">
							<ul class="subnav left">

								<li><a class="block p-3 text-center md:text-left text-white md:text-gray-600 hover:text-blue-900 hover:text-underline" href="https://www.aquarianwebdesign.com/web-design-process">Web Design</a></li>
								<li><a class="block p-3 text-center md:text-left text-white md:text-gray-600 hover:text-blue-900 hover:text-underline" href="https://www.aquarianwebdesign.com/web-design-process">Web Development</a></li>
								<li><a class="block p-3 text-center md:text-left text-white md:text-gray-600 hover:text-blue-900 hover:text-underline" href="https://www.aquarianwebdesign.com/web-design-process/website-problem-rescue">CMS / Hack Rescue</a></li>
								<li><a class="block p-3 text-center md:text-left text-white md:text-gray-600 hover:text-blue-900 hover:text-underline" href="https://www.aquarianwebdesign.com/web-design-process/content-strategy-seo-cro">Content Strategy</a></li>
								<li><a class="block p-3 text-center md:text-left text-white md:text-gray-600 hover:text-blue-900 hover:text-underline" href="https://www.aquarianwebdesign.com/web-design-process/social-media">Social Media</a></li>

							</ul>
						</div>
						<div  data-nav='menu-two' data-menu-place='right' v-bind:style="{ display: display.two }" class="subnav right ">
							<h4 class='text-center md:text-left md:text-xl text-white md:text-gray-300 font-semibold font-display md:mb-4'>Nice to meet you</h4>
							<p class="block p-3 text-center md:text-left text-white md:text-gray-600 ">We are a women-led one-stop agency for the care of successful websites. We are high-touch and care deeply about our work. We put this together as a starting place for all of our websites.</p>
						</div>
						<button class="text-gray-100 hover:text-gray-700 hover:bg-gray-100  text-2xl md:text-base lg:text-lg md:px-3 lg:px-6  py-3  md:py-1 font-medium block md:flex mr-auto ml-auto md:m-0" v-on:mouseover.self="hovermenu" v-on:click.self="togglemenu" v-on:mouseout='hideboard' data-menu='menu-three' data-menutitle='Demo Menu'>Demo Menu <span class="text-orange-200 ml-1">&#9660;</span></button>
						<div class="p-4 vertical-menu " data-nav='menu-three' data-menu-place='header' v-bind:style="{ display: display.three }">
							<div class= 'md:flex md:w-full md:bg-orange-200 md:p-2'>
								<p class="block p-3 text-center md:text-left text-white md:text-gray-600 ">There's space for some text up here in the header</p>
							</div>
						</div>
						<div class='p-4 vertical-menu ' data-nav='menu-three' data-menu-place='left' v-bind:style="{ display: display.three }">
							<ul class="subnav left md:bg-red-200 md:p-2">
								<li><a class="block p-3 text-center md:text-left text-white md:text-gray-600 " href="#">Left on desktop, top on mobile</a></li>
							</ul>
						</div>
						<div class="p-4 vertical-menu " data-nav='menu-three' data-menu-place='right' v-bind:style="{ display: display.three }">
							<div class="subnav right md:bg-blue-200 md:p-2">
								<p class="block p-3 text-center md:text-left text-white md:text-gray-600 ">Right-hand side navigation on desktop, bottom on mobile</p>
							</div>
						</div>
						<div class="p-4 vertical-menu " data-nav='menu-three' data-menu-place='footer' v-bind:style="{ display: display.three }">
							<div class=" md:bg-yellow-200 md:p-2">
								<p class="block p-3 text-center md:text-left text-white md:text-gray-600 ">You have a footer to play around with. Not enough? Customize the menu!</p>
							</div>

						</div>
					</li>
					<li class="secondary_nav  md:flex md:justify-end md:w-1/2 lg:w-auto items-center" v-bind:class="{'block': m_showing, 'hidden': !m_showing}">
						<a href="https://github.com/PetroglyphCode/petroglyph-UI" class="text-gray-100  px-4 py-3 md:py-1  rounded text-gray-100 hover:border-blue-600 block  hover:bg-gray-300 ml-auto mr-auto md:mr-0 md:ml-0 md:flex md:flex-row   text-2xl md:text-base lg:text-lg md:px-3 lg:px-6  text-center">Download on GitHub</a>

					</li>
				</ul>
							<!--<dropdown-holder></dropdown-holder>-->
				<div class="dropdown-holder relative border-1 bg-gray-200 w-full block z-20" id="menuroot" >
					<div class="dropdown-point"></div>
						<div class="dropdown-box border-2 border-gray-400 border-t-red-200 p-4 bg-gray-100 " id='menubox' style=''  v-on:mouseover="hoverboard" v-on:mouseout="hideboard" v-bind:style="{ left: menu_lpos + 'px', display: menudisplay }" v-bind:class="menu.name">
							<h4 class='font-display text-semibold text-blue-500 text-2xl block align-left w-full mb-4 '><!--{% verbatim %}-->{{menu.title}}<!--{% endverbatim %}--></h4>

							<div class='header w-full' id='menuheader' v-html='menu.header'></div>
							<div class="w-full flex">
								<div class='menu-left w-1/2' id='menuleft' v-html='menu.left'></div>
								<div class='menu-right w-1/2' id='menuright' v-html='menu.right'></div>
							</div>
							<div class='footer w-full' id='menufooter' v-html='menu.footer'></div>

					</div>
				</div>		
			</nav>
		</div>
	</header>
</template>
<script>
export default {
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
			// newmenu_cpos: Center position of new menu- Center of the button half the width of the button plus its distance from the left side
			let newmenu_cpos= (elem.offsetWidth /2) + elem.offsetLeft; 
			//console.log('cpos: '+newmenu_cpos);
			//console.log('offsetwiddth: '+document.getElementById("menubox").offsetWidth);
			
			// This code was problematic. Removed:

			//width = document.getElementById("menubox").offsetWidth > 0 ? document.getElementById("menubox").offsetWidth : width; 
			//console.log('width: '+width)

			// find the menu's left offset using the center of its trigger button
			let newmenu_lpos=  newmenu_cpos - (document.getElementById("menuroot").offsetLeft) - (width /2); 
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
				}, 500);
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
    };


</script>

<style scoped>

</style>