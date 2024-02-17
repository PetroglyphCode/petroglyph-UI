<template>
	<div class='flex mb-4 ' id='uicomponents'>
		<div class="w-3/4 ml-auto mr-auto  h-12 font-body">
			<hr class="bg-blue-300 h-1">
		</div>
	</div>
	<div class='lg:flex mb-4 ml-auto mr-auto lg:mr-0 lg:ml-0 w-3/4 lg:w-full '>
	    <div class="w-full lg:w-1/6  font-body flex flex-wrap text-gray-700 ">
			<h2 class="lg:ml-5 text-2xl font-display text-orange-700 font-bold">UI Components</h2>
		</div>
		<div class="w-full lg:w-5/6  font-body mb-12">
			<div class="mb-4 ">
				<button>Button</button>
				<button class='btn-lg'>Big Button</button>
			</div>
			<div class="flex mb4">
				<div class="mb-4 w-1/2 md:w-1/3  p-6">
			      <label class="" for="textfirst">
			        Default Label
			      </label>
			      <input class=" focus" id="textfirst" type="text" placeholder="Placeholder for text">
			    </div>
			    <div class="mb-4 w-1/2 md:w-1/3  p-6">
			      <label class="" for="textsecond">
			        Text field error
			      </label>
			      <input class="error" id="textsecond" type="text" value="Wrong answer">
			      <p class="error-msg">This field has an error.</p>
			    </div>
	    	</div>
			<div class="mb-4 w-full md:w-2/3  flex">
		 <div class="w-full md:w-1/2 mb-6 md:mb-0  p-6">
	      <label class="" for="selectfirst">
	        Select
	      </label>
	      <div class="relative">
	        <select class="" id="selectfirst">
		       <option>Please choose:</option>
	          <option>New Mexico</option>
	          <option>Missouri</option>
	          <option>Texas</option>
	        </select>
	        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
	          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
	        </div>
	      </div>
	    </div>
		 <div class="w-full md:w-1/2 mb-6 md:mb-0  p-6">
	      <label class="" for="selectfirst">
	        Select
	      </label>
	      <div class="relative">
			 <select class="error" id="selectsecond">
				  <option>You Chose..</option>
		          <option>..poorly.</option>
			 </select>
	         <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
	            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
	         </div>
		  </div>
		  <p class="error-msg">This field has an error.</p>
		</div>

	</div>
	<div class="flex mb4">
		<div class="mb-4 w-1/2 md:w-1/3 lg:w-1/4  p-6">
			      <h4 class='font-display heading-xs text-green-600'>Checkboxes</h4>
			      <div>
				  	<input type="checkbox" id="webdesign" name="webdesign" checked>
				  	<label for="webdesign"  class='font-normal'>Web Design</label>
				  </div>
				<div>
				  <input type="checkbox" id="sardines" name="sardines">
				  <label for="sardines" class='font-normal'>Sardine Ice Cream</label>
				</div>
			    </div>
			    <div class="mb-4 w-1/2 md:w-1/3 lg:w-1/4  p-6">
			      <h4 class='font-display heading-xs text-green-600'>Radio buttons</h4>
				  <div>
					 <input type="radio" id="contactChoice1" name="contact" value="email">
					    <label for="contactChoice1" class='font-normal'>Email</label>
					</div>
					<div>
					    <input type="radio" id="contactChoice2" name="contact" value="phone">
					    <label for="contactChoice2" class='font-normal'>Phone</label>
				  </div>
			    </div>
			    <div  class="w-full lg:w-1/2p-6">
					<UIFormPanelDrawer :choices="choices" :label="label" :instructions="instructions"></UIFormPanelDrawer>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import UIFormPanelDrawer from './UIFormPanelDrawer.vue'

const label="What would you like for lunch?"

const instructions="Make a selection"

const choices = [
	
	{text:"Greens n cheese, whatever"},
	{text:"A Giant Roast Beef Sandwich"},
	{text:"Pizza. Like you have to ask."},
	{text:"Soup in a bread bowl"},
	{text:"I'm good - leftovers"},

	]
export default{
	components: {
		UIFormPanelDrawer
	},
	data (){
		return {
			choices:choices,
			label:label,
			instructions:instructions
		}
	}
	
}
</script>
<style scoped>
input[type='text']{
	border-width:1px
}
</style>