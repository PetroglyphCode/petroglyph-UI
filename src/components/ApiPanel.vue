<template>
    <div class='lg:flex mb-4 ml-auto mr-auto lg:mr-0 lg:ml-0 w-3/4 lg:w-full '>
	    <div class="w-full lg:w-1/6  font-body flex flex-wrap text-gray-700 " v-if="panelTitle">
			<h2 class="lg:ml-12 text-2xl font-display text-orange-700 font-bold" >{{panelTitle}} </h2>
		</div>
		<div class="w-full lg:w-5/6  font-body mb-12">
			<div class="flex flex-col md:flex-row mb-8">
				<div class="flex flex-col md:flex-row md:flex-wrap ">
                  
                    <GithubUserCard username="PetroglyphCode"></GithubUserCard>
                    
                  
                    <GithubRepoCard username="PetroglyphCode" reponame="petroglyph-UI"></GithubRepoCard>
                    
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