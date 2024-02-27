<template>
    <div class="w-3/4 ml-auto mr-auto">
	    <h2 class='heading-xs text-blue-600'>{{instructions}}</h2>
		<label>{{ label }}</label>
		<div class=" mt-3 max-w-lg drawer relative">
            <div class="relative border shadow">
                <input type="text" class="py-2 pl-1 pr-15  focus:ring-2 focus:ring-2 focus:ring-inset focus:ring-blue-600" role="combobox" aria-controls="choices" aria-expanded="false" :value="d_value">
                <button class="absolute  top-1 right-5 text-gray-700  hover:text-gray-700   text-lg   py-1 font-medium block mr-auto ml-auto  items-center" v-bind:class="{'rotate-180': d_showing,}" @click="toggledrawer">
                    <svg class="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                </button>
            </div>
            <div class="w-full ml-auto mr-auto bg-white max-w-lg absolute z-10 w-full ">
                <div class="inner-dropdown border-box items-center border border-gray-300 shadow p-4 " v-bind:class="{'block': d_showing, 'hidden': !d_showing}">
                    <h4 class="heading-xs text-blue-400 leading-tight">This is different from a normal select menu:</h4>
                    <ul class="text-small font-semibold ml-5 text-gray-500 my-3 list-disc">
                        <li class="mb-1">You can style it</li>
                        <li class="mb-1">It can contain more than just selection options</li>
                    </ul>
                    
                    <div class='p-2 vertical-menu'>
                        <ul class="" id="choices">
                            <li class='py-2 ' v-for="option in choices" v-on:click="chooseOption"><a href="#" class='my-1 text-gray-600 hover:text-black border-0'>{{option.text}}</a></li>
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
            event.preventDefault();
            console.log(event.target.text)
            this.d_value = event.target.text
            

           this.toggledrawer(event);

          }
      }
  }
</script>
<style scoped >

</style>