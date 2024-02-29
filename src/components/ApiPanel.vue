<template>
    <div class='lg:flex mb-4 ml-auto mr-auto lg:mr-0 lg:ml-0 w-3/4 lg:w-full '>
	    <div class="w-full lg:w-1/6  font-body flex flex-wrap text-gray-700 " v-if="panelTitle">
			<h2 class="lg:ml-12 text-2xl font-display text-orange-700 font-bold" >{{panelTitle}} </h2>
		</div>
		<div class="w-full lg:w-5/6  font-body mb-12">
			<div class="flex flex-col md:flex-row mb-8">
				<div class="w-full flex flex-col md:flex-row flex-grab md:flex-wrap ml-auto mr-auto justify-around">
                    <div class="w-3/4 md:w-1/2 lg:w-1/3 my-2 mr-auto ml-auto lg:m-0">
                    <GithubUserCard username="PetroglyphCode"></GithubUserCard>
                    </div>
                    <div class="w-3/4 md:w-1/2 lg:w-1/3 my-2 mr-auto ml-auto lg:m-0">
                    <GithubRepoCard username="PetroglyphCode" reponame="petroglyph-UI"></GithubRepoCard>
                    </div>
				</div>
				
			</div>
		</div>
	</div>
</template>
<script>


import GithubUserCard from './GithubUserCard.vue'
import GithubRepoCard from './GithubRepoCard.vue'

export default {
    props:{
        panelTitle:{
            type:String
        }
    },
    components: {
        GithubUserCard,
        GithubRepoCard
    },
   
    data (){
        return{
            cards:''
        }
    }
}
</script>
<style scoped>

</style>