<template>
	<div class='lg:flex mb-4 ml-auto mr-auto lg:mr-0 lg:ml-0 w-3/4 lg:w-full '>
	    <div class="w-full lg:w-1/6  font-body flex flex-wrap text-gray-700 text-right">
			<h2 class="lg:ml-20 text-2xl font-display text-orange-700 font-bold">Color</h2>
		</div>
		<div class="w-full lg:w-1/6  font-body mb-12">
			<h5 class="heading-xs text-gray-800">Color Contrast for Accessibility</h5>
           <p class="text-small mt-2 mb-2">Follow the WCAG 2.0 Level AA guidelines to ensure proper color contrast.</p>
			<h5 class="heading-xs  text-gray-800">Color Contrast Values</h5>
			<ul class='text-sm mb-3 mr-2'>
			<li class='mb-3'>- Fail – Your text doesn’t have enough contrast with the background.</li>
			<li class='mb-3'>- AA Large – The smallest acceptable amount of contrast for type >= 18px.</li>
			<li class='mb-3'>- AA – This is the sweet spot for text sizes below below 18px.</li>
			<li class='mb-3'>- AAA – Enhanced contrast.</li>
			</ul>

        </div>

		<div class="w-full lg:w-1/3  font-body  text-gray-700 mb-12">
			<h3 class="ml-10 text-xl font-display text-gray-600 font-bold">Main Colors</h3>
			<div class="flex flex-wrap mb-10">
			  <div class="flex-1 bg-gray-100 h-12 md:h-20 lg:h-30"></div>
			  <div class="flex-1 bg-gray-200 h-12 md:h-20 lg:h-30"></div>
			  <div class="flex-1 bg-gray-300 h-12 md:h-20 lg:h-30"></div>
			  <div class="flex-1 bg-gray-400 h-12 md:h-20 lg:h-30"></div>
			  <div class="flex-1 bg-gray-500 h-12 md:h-20 lg:h-30"></div>
			  <div class="flex-1 bg-gray-600 h-12 md:h-20 lg:h-30"></div>
			  <div class="flex-1 bg-gray-700 h-12 md:h-20 lg:h-30"></div>
			  <div class="flex-1 bg-gray-800 h-12 md:h-20 lg:h-30"></div>
			  <div class="flex-1 bg-gray-900 h-12 md:h-20 lg:h-30"></div>
			</div>
			<div class="flex flex-wrap mb-10">
			  <div class="flex-1 bg-green-100 h-12 md:h-20 lg:h-30"></div>
			  <div class="flex-1 bg-green-200 h-12 md:h-20 lg:h-30"></div>
			  <div class="flex-1 bg-green-300 h-12 md:h-20 lg:h-30"></div>
			  <div class="flex-1 bg-green-400 h-12 md:h-20 lg:h-30"></div>
			  <div class="flex-1 bg-green-500 h-12 md:h-20 lg:h-30"></div>
			  <div class="flex-1 bg-green-600 h-12 md:h-20 lg:h-30"></div>
			  <div class="flex-1 bg-green-700 h-12 md:h-20 lg:h-30"></div>
			  <div class="flex-1 bg-green-800 h-12 md:h-20 lg:h-30"></div>
			  <div class="flex-1 bg-green-900 h-12 md:h-20 lg:h-30"></div>
			</div>
			<div class="flex flex-wrap mb-10">
			  <div class="flex-1 bg-orange-100 h-12 md:h-20 lg:h-30"></div>
			  <div class="flex-1 bg-orange-200 h-12 md:h-20 lg:h-30"></div>
			  <div class="flex-1 bg-orange-300 h-12 md:h-20 lg:h-30"></div>
			  <div class="flex-1 bg-orange-400 h-12 md:h-20 lg:h-30"></div>
			  <div class="flex-1 bg-orange-500 h-12 md:h-20 lg:h-30"></div>
			  <div class="flex-1 bg-orange-600 h-12 md:h-20 lg:h-30"></div>
			  <div class="flex-1 bg-orange-700 h-12 md:h-20 lg:h-30"></div>
			  <div class="flex-1 bg-orange-800 h-12 md:h-20 lg:h-30"></div>
			  <div class="flex-1 bg-orange-900 h-12 md:h-20 lg:h-30"></div>
			</div>
			<p class="text-small">These are the splashes of color that should appear the most in the UI, and are the ones that determine the overall "look". Best for things like primary actions, links, navigation items, icons, accent borders, or text that should be emphasized.</p>
		</div>
		<div class="w-full lg:w-1/3  font-body text-gray-700 ml-3 mr-3 mb-12">
			<h3 class="ml-10 text-xl font-display text-gray-600 font-bold">Accent Colors</h3>
			<div class="flex flex-wrap mb-10 ">
			  <div class="flex-1 bg-blue-100 h-12 md:h-20 lg:h-30"></div>
			  <div class="flex-1 bg-blue-200 h-12 md:h-20 lg:h-30"></div>
			  <div class="flex-1 bg-blue-300 h-12 md:h-20 lg:h-30"></div>
			  <div class="flex-1 bg-blue-400 h-12 md:h-20 lg:h-30"></div>
			  <div class="flex-1 bg-blue-500 h-12 md:h-20 lg:h-30"></div>
			  <div class="flex-1 bg-blue-600 h-12 md:h-20 lg:h-30"></div>
			  <div class="flex-1 bg-blue-700 h-12 md:h-20 lg:h-30"></div>
			  <div class="flex-1 bg-blue-800 h-12 md:h-20 lg:h-30"></div>
			  <div class="flex-1 bg-blue-900 h-12 md:h-20 lg:h-30"></div>
			</div>
			<div class="flex flex-wrap mb-10 ">
			  <div class="flex-1 bg-yellow-100 h-12 md:h-20 lg:h-30"></div>
			  <div class="flex-1 bg-yellow-200 h-12 md:h-20 lg:h-30"></div>
			  <div class="flex-1 bg-yellow-300 h-12 md:h-20 lg:h-30"></div>
			  <div class="flex-1 bg-yellow-400 h-12 md:h-20 lg:h-30"></div>
			  <div class="flex-1 bg-yellow-500 h-12 md:h-20 lg:h-30"></div>
			  <div class="flex-1 bg-yellow-600  h-12 md:h-20 lg:h-30"></div>
			  <div class="flex-1 bg-yellow-700 h-12 md:h-20 lg:h-30"></div>
			  <div class="flex-1 bg-yellow-800 h-12 md:h-20 lg:h-30"></div>
			  <div class="flex-1 bg-yellow-900 h-12 md:h-20 lg:h-30"></div>
			</div>
			<div class="flex flex-wrap mb-10">
			  <div class="flex-1 bg-red-100 h-12 md:h-20 lg:h-30"></div>
			  <div class="flex-1 bg-red-200 h-12 md:h-20 lg:h-30"></div>
			  <div class="flex-1 bg-red-300 h-12 md:h-20 lg:h-30"></div>
			  <div class="flex-1 bg-red-400 h-12 md:h-20 lg:h-30"></div>
			  <div class="flex-1 bg-red-500 h-12 md:h-20 lg:h-30"></div>
			  <div class="flex-1 bg-red-600 h-12 md:h-20 lg:h-30"></div>
			  <div class="flex-1 bg-red-700 h-12 md:h-20 lg:h-30"></div>
			  <div class="flex-1 bg-red-800 h-12 md:h-20 lg:h-30"></div>
			  <div class="flex-1 bg-red-900 h-12 md:h-20 lg:h-30"></div>
			</div>
			<p class="text-small">These colors should be used fairly conservatively throughout the UI to avoid overpowering the primary colors. Used an element needs to stand out, or to reinforce things like error states or positive trends with the appropriate semantic color.</p>
		</div>
	</div>
	<p class='w-full text-medium text-center mb-10'>A beautiful and harmonious color palate will draw the user in and invite interaction; and is therefore critical to good UX.</p>

</template>
<script>
export default{}
</script>
<style scoped>
</style>