<template>
    <div class="w-3/4 ml-auto mr-auto article-body mt-8">
	    <h2 class='heading-xs text-blue-600'>{{instructions}}</h2>
		<label>{{ label }}</label>
		<div class="ml-auto mr-auto  m-3 max-w-2xl drawer">
            <div class="relative">
                <input type="text" class="py-2 pl-1 pr-15 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-2 focus:ring-inset focus:ring-blue-600" role="combobox" aria-controls="choices" aria-expanded="false">
                <button class="absolute text-gray-700  hover:text-gray-700 hover:bg-gray-100  text-lg   py-1 font-medium block mr-auto ml-auto inline-flex items-center"  @click="toggledrawer"><span class="mr-4"></span>
                    <svg class="fill-current h-4 w-4" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                </button>
            </div>
            <div class="p-4 w-full ml-auto mr-auto ">
                <div class="inner-dropdown border-box items-center border border-gray-300 shadow" v-bind:class="{'block': d_showing, 'hidden': !d_showing}">
                    <h4 class="heading-s text-blue-300">This is different from a normal select menu</h4>
                    <p>You can style it</p>
                    <div class='p-2 vertical-menu'>
                        <ul class="" id="choices">
                            <li class='py-2 ' v-for="option in choices"><a href="#" class='my-1 text-gray-600 hover:text-black border-0'>{{option.text}}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { stringify } from 'postcss';

//Get Tailwind Vars from config

// make border not appear on combo box

export default {
    props:{
        label:{
            type:String,
            require:true
        },
        instructions:{
            type:String
        },
        choices:{
            type:Array,
            require: true
        }

    },
    data() {
      return {
        d_showing:false,
        d_value: ''
      }
    },
      methods:{
          toggledrawer(event){
              this.d_showing = !this.d_showing;
          },
         chooseOption(event){

          }
      }
  }
</script>
<style scoped>
.drawer input[type='text'] {
    border-width:0;
}
.drawer button {
    background-color:white;
    z-index:10;
    left:0;
    
}
</style>