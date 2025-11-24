<template>
   
	<div class="mx-4 md:mx-0">
		<div class="w-full md:w-3/4 lg:w-1/2 ml-auto mr-auto font-body my-8 read">
			<h1 class="">What if your blog title is really, really long? (h1)</h1>
			<p class="">Aquarian Web Studio listens carefully to clients from the start, creating secure, flexible websites configured to business workflows and goals. We start simply and refuse to make things complex when they don’t need to be, exploring options for your company from many angles, because we elevate your website to become a partner in your success. </p>
			<p class="">Here's another text paragraph. How does the spacing look? Does it look right on mobile? can we make improvements for middle-width devices? Big screens, small screens all about the thread memes.</p>
			<h2 >Is this heading long enough? (h2)</h2>
			<FigureImage :imagePath="imagePath" captionText="Sometimes painting by Caroline C. Blaker Latex on Canvas, 2011. Also, Figure component display with sample image." altText="Text figure image sample inclusion "></FigureImage>

			<p>Too many businesses rely on limited blog and web brochure platforms that are often risky, waste money and limit growth over time. They can be impersonal and stiff and work against customer-facing needs. We believe that although the web is an automated, template-laden landscape, understanding the way people interact, and communicate with companies is our most valuable asset.</p>
			<h3>Tertiary heading (h3)</h3>
			<blockquote cite="https://www.aquarianwebdesign.com/blog/2023/wordpress-keeps-getting-hacked">
				<p>Most people like WordPress, but if your website outgrown it or it can no longer support your website, you're often told you're not a good enough developer. That's incorrect. You just need something stronger.</p>
				<footer>—Caroline C Blaker, <cite>Aquarian Web Studio</cite></footer>
			</blockquote>
			<p>Aquarian Web Studio, enables clients to publish anything they want, whenever they want, as they desire to do so by giving small to medium sized organizations the ultimate flexibility and scaling web development options to fit growing needs. This is the UI kit developed along project needs throughout. We have implemented hundreds of additional features and changes seamlessly into clients’ websites since 2010.</p>
			<h4 class="">Reminder heading or punchline (h4)</h4>
			<p>Aquarian Web Studio offers a combined 150+ years (!!) of web problem solving for clients and is led by Caroline Blaker, a nationally renowned “tech lead” who guides efficient, focused contractors with her fifteen years of web creation. Caroline has twelve years’ experience programming in Wordpress, and has utilized ExpressionEngine for the benefit of her clients since version 1.6.3!</p>
			<h5 class="">More info heading (h5)</h5>


			<TextPanelFooter></TextPanelFooter>
		</div>
	</div>


</template>
<script>
import imagePath from '../assets/img/sometimes_800.jpg'
import TextPanelFooter from './TextPanelFooter.vue'
import FigureImage from './FigureImage.vue'

export default{

    components:{
        TextPanelFooter,
		FigureImage
    },
    data(){
        return {
            imagePath: imagePath
        }
    }
}
</script>
<style scoped>
p.short{max-width:39px; min-width:35px;}
p.compliant{max-width:50px; min-width:40px;}
p.optimal{width: 65ch; max-width:90px; min-width:51px;}
p.toobig{ min-width:91px;}
</style>
