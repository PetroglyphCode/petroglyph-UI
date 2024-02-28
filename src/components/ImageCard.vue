<template>
<template v-if="cardUrl">
    <a :href="cardUrl" class="border-0">
        <div class="card" :class="cardClass">
            <img class="" :src="cardImagePath" :alt="altText">
            <div class="px-6 py-4">
                <h4 class="" v-if="cardTitle">{{cardTitle}}</h4>
                <p class=" " v-if="cardText">{{ cardText }}</p>
            </div>
            <footer class="px-6 py-2 flex flex-row flex-wrap">
                <span v-for="hashtag in cardHashs"  class=" bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2" :class="hashtag.class">
                    
                <i ></i>{{ hashtag.text }}
                </span>
            </footer>
        </div>
    </a>
</template>
<template v-else>
	<div class="card" :class="cardClass">
		<img class="" :src="cardImagePath" :alt="altText">
		<div class="px-6 py-4">
			<h4 class="" v-if="cardTitle">{{cardTitle}}</h4>
			<p class=" " v-if="cardText">{{ cardText }}</p>
		</div>
		<footer class="px-6 py-2 flex flex-row flex-wrap">
			<a v-for="hashtag in cardHashs" :href="hashtag.href" class=" bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2" :class="hashtag.class">
                
               <i ></i>{{ hashtag.text }}
            </a>
        </footer>
	</div>

</template>
</template>
<script>
export default {
    props:{
        cardUrl: {
            type:String
        },
        cardTitle:{
            type:String
        },
        cardText:{
            type:String
        },
        cardImagePath: {
            type:String
        },
        altText: {
            type:String
        },
        cardHashs:{
            type:Array
        },
        cardLink :{
            type:String
        },
        cardClass: {
            type:String
        }
    
    }
}
</script>
<style scoped>
.card footer a, .card footer span {
    display:flex;
}
.card footer a i, .card footer span i{
    color: #777;
    padding: 4px 6px 4px 10px;
    margin:2px 6px 2px 2px;
    background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path fill-rule="evenodd" d="M11.097 1.515a.75.75 0 0 1 .589.882L10.666 7.5h4.47l1.079-5.397a.75.75 0 1 1 1.47.294L16.665 7.5h3.585a.75.75 0 0 1 0 1.5h-3.885l-1.2 6h3.585a.75.75 0 0 1 0 1.5h-3.885l-1.08 5.397a.75.75 0 1 1-1.47-.294l1.02-5.103h-4.47l-1.08 5.397a.75.75 0 1 1-1.47-.294l1.02-5.103H3.75a.75.75 0 0 1 0-1.5h3.885l1.2-6H5.25a.75.75 0 0 1 0-1.5h3.885l1.08-5.397a.75.75 0 0 1 .882-.588ZM10.365 9l-1.2 6h4.47l1.2-6h-4.47Z" clip-rule="evenodd" /></svg>');
    background-repeat: no-repeat;
}
.card footer a.CTA, .card footer span.CTA {
    align-self:flex-end
}
.card footer a.CTA i, .card footer span.CTA i {
    /* background-color:#fff;
    border-radius:8px; */
    background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" /></svg>');

}
</style>
<style scoped lang="postcss">
.card {
	@apply max-w-sm rounded overflow-hidden shadow-lg m-4;
}
.card img {
	@apply w-full;
}
.card h3 {
	@apply text-orange-600 font-display text-2xl font-bold;
}
.card h4 {
    @apply text-orange-500 font-display text-xl font-semibold;
}
.card p{
	@apply text-gray-700 ;
}
.card.dark{
	@apply text-white bg-gray-800;
}
.card.dark h3, .card.dark h4{
    @apply text-orange-400
}
.card.dark p{
	@apply text-white;
}
.card footer a, .card footer span {
    @apply border-0 m-1
}
.card.dark h3 .card.dark h4 {
	@apply text-orange-500;
}
</style>