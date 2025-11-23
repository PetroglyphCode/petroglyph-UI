<template>
    <div class='lg:flex mb-4 ml-auto mr-auto lg:mr-0 lg:ml-0 w-3/4 lg:w-full '>
	    <div class="w-full lg:w-1/6  font-body flex flex-wrap text-gray-700 ">
			<h2 class="lg:ml-12 text-2xl font-display text-orange-700 font-bold mb-3 lg:mb-0" >Images</h2>
		</div>
		<div class="w-full lg:w-5/6 font-body mb-12 flex flex-col  md:flex-row md:flex-wrap justify-around">
			<div class="w-full lg:w-1/3  font-body text-gray-700 md:mr-5 lg:mb-12">
				<h5 class='font-semibold body-l my-1'>Just an inline image</h5>
				<img :src='imagePath' :alt='alt' :title='caption'>
			</div>
			<div class="w-full lg:w-1/3 font-body text-gray-700  lg:mb-12">
				<h5 class='font-semibold body-l my-1'>Figure: Sometimes - Available painting</h5>
                <FigureImage :imagePath="imagePath" :captionText="caption" :altText="alt"></FigureImage>
				
			</div>
            <div class="w-full lg:w-2/3 font-body text-gray-700 lg:mb-12">
				<h5 class='font-semibold body-l my-1'>Figure: Sometimes - but bigger!</h5>
                <FigureImage :imagePath="imagePath" captionText="Position and size this element on the page using an outer wrapper." :altText="alt"></FigureImage>
				
			</div>
		</div>
	</div>
</template>
<script>
import imagePath from '../assets/img/sometimes_800.jpg'
import FigureImage from './FigureImage.vue'

const caption = 'Sometimes painting by Caroline C. Blaker Latex on Canvas, 2011'
const alt = 'Five-color abstract painting'
export default{
    components: {
        FigureImage
    },
    data (){
        return {
            imagePath:imagePath,
            alt:alt,
            caption:caption
        }
    }
}
</script>
<style scoped>
</style>