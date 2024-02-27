<template>
    <figure>
    <img :src='imagePath' :alt='altText' :title='captionText'>
    <figcaption v-if="captionText">{{captionText}}</figcaption>
    </figure>
</template>
<script>
export default {
    props: {
        imagePath: {
            type:String        
        },
        altText :{
            type: String
        },
        captionText:{
            type:String
        },
        figureId:{
            type:String
        },
        figureClass:{
            type:String
        }
    }
}
</script>
<style lang="postcss">
figcaption {
	@apply text-sm italic text-gray-700 p-2;
}
</style>