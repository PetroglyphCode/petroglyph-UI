<template>
	<div class='lg:flex mb-4 ml-auto mr-auto lg:mr-0 lg:ml-0 w-3/4 lg:w-full '>
	    <div class="w-full lg:w-1/6  font-body flex  text-gray-700 text-right">
			<h2 class="lg:ml-20 text-2xl font-display text-orange-700 font-bold" id='typography'>Typography</h2>
		</div>
		<div class="w-full lg:w-2/3  font-body md:flex md:flex-wrap text-gray-700 md:mt-6 lg:mt-0">
		<div class="w-1/2   font-body flex flex-wrap text-gray-700 md:pl-12 ml-auto md:ml-0 mr-auto md:mr-0  mb-10 mt-2 md:mt-0 md:mb-0">
			<p class="w-full font-display text-3xl">AaBbCcDdEe</p>
            <p class="w-full font-display text-3xl">1234567890?!</p>
            <p class="w-full  mt-2"><b>Zilla Slab</b>&mdash; for headings</p>
		</div>
		<div class="w-1/2  font-body flex flex-wrap text-gray-700 md:pl-12 ml-auto md:ml-0 mr-auto md:mr-0 mt-2 md:mt-0 md:mb-0">
			<p class="w-full font-body text-3xl">AaBbCcDdEe</p>
            <p class="w-full font-body text-3xl">1234567890?!</p>
            <p class="w-full mt-2"><b>Libre Franklin</b>&mdash; for body copy</p>
		</div>
		</div>
	</div>
	<div class='flex mb-4 '>
		<div class="w-1/5  font-body flex flex-wrap text-gray-700 text-right">

		</div>
		<div class="w-3/5  font-body">
           <p class="lg:w-3/5 text-small mt-2 mb-2">The type scale enables you to indicate content hierarchy. These sizes and styles are designed to balance content density with increased readability.</p>
        </div>
    </div>
    <div class='flex mb-4 '>
	    <table class='w-2/3 ml-auto mr-auto mb-12'>
		    <tr>
			    <th>Name</th>
			    <th>Typeface</th>
			    <th>Weight</th>
			    <th>Size</th>
			    <th>Lh</th>
			</tr>
			<tr>
				<td class="text-tiny">Tiny</td>
				<td>Libre Franklin</td>
				<td>Regular</td>
				<td>12px</td>
				<td>16px</td>
			</tr>
			<tr>
				<td class="text-small">Body Small</td>
				<td>Libre Franklin</td>
				<td>Regular</td>
				<td>14px</td>
				<td>24px</td>
			</tr>
			<tr>
				<td >Body</td>
				<td>Libre Franklin</td>
				<td>Regular</td>
				<td>16px</td>
				<td>24px</td>
			</tr>
			<tr>
				<td class="text-large">Body Large</td>
				<td>Libre Franklin</td>
				<td>Regular</td>
				<td>18px</td>
				<td>32px</td>
			</tr>
			<tr>
				<td class="heading-xs">Heading XS</td>
				<td>Zilla Slab</td>
				<td>Bold</td>
				<td>21px</td>
				<td>32px</td>
			</tr>
			<tr>
				<td class="heading-s">Heading Small</td>
				<td>Zilla Slab</td>
				<td>Bold</td>
				<td>24px</td>
				<td>40px</td>
			</tr>
			<tr>
				<td class="heading">Heading</td>
				<td>Zilla Slab</td>
				<td>Bold</td>
				<td>28px</td>
				<td>48px</td>
			</tr>
			<tr>
				<td class="heading-m">Heading Medium</td>
				<td>Zilla Slab</td>
				<td>Bold</td>
				<td>32px</td>
				<td>56px</td>
			</tr>
			<tr>
				<td class="heading-l">Heading Large</td>
				<td>Zilla Slab</td>
				<td>Bold</td>
				<td>36px</td>
				<td>64px</td>
			</tr>
			<tr>
				<td class="heading-xl">Heading XL</td>
				<td>Zilla Slab</td>
				<td>Bold</td>
				<td>48px</td>
				<td>72px</td>
			</tr>
			<tr>
				<td class="heading-d">Display</td>
				<td>Zilla Slab</td>
				<td>Regular</td>
				<td>60px</td>
				<td>80px</td>
			</tr>
			<tr>
				<td class="heading-dxl">Display XL</td>
				<td>Zilla Slab</td>
				<td>Regular</td>
				<td>72px</td>
				<td>96px</td>
			</tr>
		</table>
	</div>
	<div class='flex mb-4 ' >
		<div class="w-2/3 mr-auto ml-auto flex flex-wrap">
			<div class="w-1/2">
				<h4 class="heading-s">Line Length</h4>
				<p class='mb-4'>The number of characters per line influences readability. Studies indicate the following guidelines for English:</p>
				<h5 class='heading-xs text-blue-600'>Satisfactory</h5>
				<p class='mb-4'>45-75 characters (desktop) or 35-40 characters (mobile) per line iswidely regarded as a satisfactory line length.</p>
				<h5 class='heading-xs text-green-600'>Optimal</h5>
				<p class='mb-4'>Around 66 characters (desktop) or 39 characters (mobile) is optimal.</p>
					<h5 class='heading-xs text-red-600'>Too long</h5>
					<p class='mb-4'>More than 90 characters (desktop) or 50 characters (mobile) is likely too long for continuous reading.</p>
			</div>
			<div class="w-1/2">
				<p class="mt-10">Studies show that different aspects of reading performance such as comprehension, reading speed, method of movement, and eye movements are affected by changes in line length. </p>


        <div id = 'linelength'>
				<!-- SUPER COOL FEATURE HERE - VUE.JS pixel generated in-html graph
				- 3 data graph
				- Diff on mobile and desktop
				mobile: 35, 39, 50
				desktop: 45, 66 90,
				- Data is a number of characters, bars are that length
				Too Short, Satisfactory, Optimal, Too Long  DESKTOP .V. MOBILE
				 -->
				 </div>
			</div>
			<blockquote cite="https://www.aquarianwebdesign.com/blog/2023/wordpress-keeps-getting-hacked">
				<p>Most people like WordPress, but if your website outgrown it or it can no longer support your website, you're often told you're not a good enough developer. That's incorrect. It can also get very expensive and unsustainable. Don't take your website's success the wrong way. You just need something stronger.</p>
				<footer>—Caroline C Blaker, <cite>Aquarian Web Studio</cite></footer>
			</blockquote>
		</div>
	</div>
</template>
<script>
export default{
    props: {
        fonts: {
            type: Object,
            required: true
        }
    }
}
</script>
<style scoped>
</style>