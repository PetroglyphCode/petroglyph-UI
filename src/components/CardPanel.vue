<template>
    <div class='lg:flex mb-4 ml-auto mr-auto lg:mr-0 lg:ml-0 w-3/4 lg:w-full '>
	    <div class="w-full lg:w-1/6  font-body flex flex-wrap text-gray-700 ">
			<h2 class="lg:ml-12 text-2xl font-display text-orange-700 font-bold" >Cards</h2>
		</div>
		<div class="w-full lg:w-5/6  font-body mb-12">
			<div class="flex flex-col md:flex-row mb-8">
				<div class="flex flex-col md:flex-row flex-grab md:flex-wrap ml-auto mr-auto ">
				<ImageCard 
                    v-for="card in cards" 
                    :key="card.cardTitle" 
                    :cardTitle="card.cardTitle"
                    :cardUrl="card.cardLink"
                    :cardText="card.cardText"
                    :cardImagePath ="card.cardImage"
                    :altText="card.altText"
                    :cardHashs="card.cardHashs"
                    :cardClass="card.cardClass"
             >
                </ImageCard>
				</div>
				
			</div>
		</div>
	</div>
</template>
<script>
const cardData = [
    {
        cardTitle:'Image Card',
        cardClass:'',
        cardImage:ImagePath,
        cardText :'A card that says something about this image, or that together with this image, begs for a click.',
        cardAltText:'Sample Image - Sometimes painting by Caroline C Blaker',
        cardLink:'',
        cardHashs:[
            {
                text:'Web Design',
                href:'https://www.aquarianwebdesign.com/web-design-process'
            },{
                text:'Web Development',
                href:'https://www.aquarianwebdesign.com/web-design-process'
            },{
                text:'UI Kit',
                href:'https://www.aquarianwebdesign.com/web-design-process'
            }
            
        ]

    },{
        cardTitle:'Dark Image Card',
        cardClass:'dark',
        cardImage:ImagePath,
        cardText :'Need some contrast? Customize this bad-boy with your gray, or dark main color and',
        cardAltText:'Sample Image - Sometimes painting by Caroline C Blaker',
        cardLink:'https://www.aquarianwebdesign.com', //This is a test and should not engage because of the hash sub links. Make the component do this
        cardHashs:[
            {
                text:'Feature Card',
                href:'https://www.aquarianwebdesign.com/web-design-process'
            },{
                text:'Color Variation',
                href:'https://www.aquarianwebdesign.com/web-design-process'
            },{
                text:'Custom Website Design',
                href:'https://www.aquarianwebdesign.com/web-design-process'
            }
            
        ]

    },{
        cardTitle:'Carte Sans Image',
        cardClass:'',
        cardText :'Sometimes you just need to appropriately label some legible text and link to another place. Then again, sometimes there is just more to the story',
        cardAltText:'',
        cardLink:'https://www.aquarianwebdesign.com', //This is a test and should not engage because of the hash sub links. Make the component do this
        cardHashs:[
            {
                text:'Text Card',
                href:'https://www.aquarianwebdesign.com/web-design-process',
                class:'CTA'
            },{
                text:'',
                href:'https://www.aquarianwebdesign.com/web-design-process'
            },{
                text:'Custom Website Design',
                href:'https://www.aquarianwebdesign.com/web-design-process'
            }
            
        ]

    }
    ,{
        cardTitle:'Whole thing\'s a link',
        cardClass:'dark',
        cardText :'This entire card is a link. Sometimes you just need to link the entire card to one place and use the hash-tag feature anyway. Then again, does',
        cardAltText:'',
        cardLink:'https://www.aquarianwebdesign.com', //This is a test and should not engage because of the hash sub links. Make the component do this
        cardHashs:[
            {
                text:'Go Now',
                class:'CTA'
            }
            
        ]

    }
]


import ImagePath from '../assets/img/sometimes_800.jpg'
import ImageCard from './ImageCard.vue'
export default {
    components: {
        ImageCard
    },
    // computed: {
    //     console.log(cards);
    // },
    data (){
        return{
            cards:cardData
        }
    }
}
</script>
<style scoped>

</style>