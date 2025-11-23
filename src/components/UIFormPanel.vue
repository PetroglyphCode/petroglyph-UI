<template>
	<div class='lg:flex mb-4 ml-auto mr-auto lg:mr-0 lg:ml-0 w-3/4 lg:w-full '>
	    <div class="w-full lg:w-1/6  font-body flex flex-wrap text-gray-700 ">
			<h2 class="lg:ml-5 text-2xl font-display text-orange-700 font-bold">UI Components</h2>
		</div>
		<div class="w-full lg:w-5/6  font-body mb-12">
			<h3 class="heading-m  flex w-full lg:items-center lg:justify-end lg:pr-10" >Buttons</h3>
			<div class="mb-4 flex flex-row flex-wrap align-left">
				<div class="w-2/3 md:w-1/2 lg:w-1/3  ml-auto mr-auto md:m-0 flex items-center justify-center py-3">
					<UIFormPanelButton classes="" text="Button"></UIFormPanelButton>
				</div>
				<div class="w-2/3 md:w-1/2 lg:w-1/3 ml-auto mr-auto md:m-0 flex items-center justify-center py-3">
					<UIFormPanelButton classes="btn-lg" text="Big Button"></UIFormPanelButton>
				</div>
				<div class="w-2/3 md:w-1/2 lg:w-1/3 ml-auto mr-auto md:m-0 flex items-center justify-center py-3 ">
					<UIFormPanelButton classes="btn-lg btn-active" text="Active Button"></UIFormPanelButton>
				</div>
				<div class="w-2/3 md:w-1/2 lg:w-1/3 ml-auto mr-auto md:m-0 flex items-center justify-center py-3 ">
					<UIFormPanelButton classes="btn-lg btn-reverse" text="Reverse Button"></UIFormPanelButton>
			    </div>
				<div class="ww-2/3 md:w-1/2 lg:w-1/3 ml-auto mr-auto md:m-0 flex items-center justify-center py-3 ">
					<UIFormPanelButton classes="btn-lg btn-error" text="Error Button"></UIFormPanelButton>
				</div>
				<div class="w-2/3 md:w-1/2 lg:w-1/3 ml-auto mr-auto md:m-0 flex items-center justify-center py-3 ">
					<UIFormPanelButton classes="btn-lg btn-warning" text="Warning Button"></UIFormPanelButton>
				</div>
				<div class="w-2/3 md:w-1/2 lg:w-1/3 ml-auto mr-auto md:m-0 flex items-center justify-center py-3 ">
					<UIFormPanelButton classes="btn-lg btn-success" text="Success Button"></UIFormPanelButton>
				</div>
				<div class="w-2/3 md:w-1/2 lg:w-1/3 ml-auto mr-auto md:m-0 flex items-center justify-center py-3 ">
					<UIFormPanelButton classes="btn-lg btn-go" text="Go Button"></UIFormPanelButton>
				</div>
				<div class="w-2/3 md:w-1/2 lg:w-1/3 ml-auto mr-auto md:m-0 flex items-center justify-center py-3 ">
					<UIFormPanelButton classes="btn-lg btn-disabled" text="Disabled Button"></UIFormPanelButton>
				</div>
			</div>
			<h3 class="heading-m  flex w-full lg:items-center lg:justify-end lg:pr-10" >Inputs</h3>
			<div class="flex mb4 flex-col md:flex-row md:flex-wrap">
				<div class="mb-4 w-full md:w-1/2 lg:w-1/3  p-6">
			      <label class="" for="textfirst">
			       Text Field
			      </label>
			      <input class="" id="textfirst" type="text" placeholder="Placeholder for text">
			    </div>
			    <div class="mb-4 w-full md:w-1/2 lg:w-1/3 p-6">
			      <label class="" for="textsecond">
			        Text field error
			      </label>
			      <input class="error" id="textsecond" type="text" value="Wrong answer" placeholder="Why did you delete that?">
			      <p class="msg error-msg">This field has an error.</p>
			    </div>
				<div class="mb-4 w-full md:w-1/2 lg:w-1/3  p-6">
			      <label class="" for="textthird">
			        Text field confirm
			      </label>
			      <input class="confirm" id="textthird" type="text" value="Correct answer">
			      <p class="msg confirm-msg">This field has been evaluated and is confirmed.</p>
			    </div>
	    	</div>
			<div class="mb-4 w-full md:w-1/2 lg:w-1/3  flex">
				<div class="w-full mb-6 md:mb-0  p-6">
	      			<label class="" for="selectfirst">
	        			Select
	      			</label>
					<div class="relative">
						<UIFormPanelSelect elementId="selectfirst" :elementOptions="UIPrimarySelectFields" :elementClass="foo" @selectionFromSelect="(emittedValue)" ></UIFormPanelSelect>
						<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
						<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
						</div>
					</div>
				</div>
			</div>
			<div class="flex mb4 flex-wrap">
				<div class="mb-4 w-1/2 md:w-1/3 lg:w-1/4  p-6">
					<h4 class='font-display heading-xs text-green-600'>Checkboxes</h4>
					<div class="flex">
						<input type="checkbox" id="webdesign" name="webdesign" checked>
						<label for="webdesign"  class='font-normal'>Web Design</label>
					</div>
					<div class="flex">
						<input type="checkbox" id="sardines" name="sardines">
						<label for="sardines" class='font-normal'>Sardine Ice Cream</label>
					</div>
				</div>
				<div class="mb-4 w-1/2 md:w-1/3 lg:w-1/4  p-6">
					<h4 class='font-display heading-xs text-green-600'>Radio buttons</h4>
					<div class="flex">
						<input type="radio" id="contactChoice1" name="contact" value="email">
						<label for="contactChoice1" class='font-normal'>Email</label>
					</div>
					<div class="flex">
						<input type="radio" id="contactChoice2" name="contact" value="phone">
						<label for="contactChoice2" class='font-normal'>Phone</label>
					</div>
				</div>
				<div  class="w-full lg:w-1/2 p-6">
					<UIFormPanelDrawer :choices="choices" :label="label" :instructions="instructions"></UIFormPanelDrawer>
				</div>
			</div>
		</div>
	</div>
</template>
<script>

//import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'
import UIFormPanelDrawer from './UIFormPanelDrawer.vue'
import UIFormPanelButton from './UIFormPanelButton.vue'
import UIFormPanelSelect from './UIFormPanelSelect.vue'

//const fullConfig = resolveConfig(tailwindConfig)


const label="What would you like for lunch?"

const instructions="Make a selection"

const UIPrimarySelectFields = [
	{optionText:"Right Answer", optionValue:"right"},
	{optionText:"Wrong Answer", optionValue:"wrong"},
	{optionText:"I need more information", optionValue:"moar"},

]

const UIFormPanelDrawerChoices = [
	
	{text:"Greens n cheese, whatever"},
	{text:"A Giant Roast Beef Sandwich"},
	{text:"Pizza. Like you have to ask."},
	{text:"Soup in a bread bowl"},
	{text:"I'm good - leftovers"},

	]
export default{
	components: {
		UIFormPanelDrawer,
		UIFormPanelButton,
		UIFormPanelSelect
	},
	data (){
		return {
			choices:UIFormPanelDrawerChoices,
			UIPrimarySelectFields:UIPrimarySelectFields,
			label:label,
			instructions:instructions
		}
	}
	
}
</script>
<style scoped>
.drawer button {
    background-color:white;
    z-index:10;
    left:0;
    
}
</style>
<style scoped lang="postcss">

</style>