<template>
    <div class="card border-gray-200 border flex flex-col" :class="cardClass">
        
        <div class="px-6 py-4 flex flex-col flex-wrap">
            <h5 class="text-large text-gray-500"> Github Repository</h5>
			<h4 class="heading-xs my-3 text-blue-900"><a :href='repo.html_url'>{{ repo.name}}</a></h4>
            <div class="meta text-small">
            <span class="date">Born on {{repo.created_at}}</span>
            </div>
			<p class="inline-block max-w-s ">{{ repo.description }}</p>
                <h5 class="font-semibold">Author</h5>
                <a :href="repo.ownerUrl" class="color-gray-800 border-0 text-blue-900">
                <div class="flex flex-row shadow border border-gray-100 justify-start align-middle p-4">
                    <img :src="repo.ownerAvatar" :alt="repo.ownerlogin" class="flex w-8 h-8 border mr-3 border-gray-200"> 
                    <h3 class="flex inline-block align-middle font-semibold p-1">{{ repo.ownerlogin }}</h3>
                </div>
                </a>
		</div>
		<footer class="px-6 py-2 flex flex-row flex-wrap">
                
            <span class="mr-2">
                <i class="user icon font-medium"></i>
                {{repo.watchers_count}} Watching
            </span>
            <span class="mr-2">
                <i class="user icon font-medium"></i>
                {{repo.open_issues}} Open Issue{{repo.open_issues > 1 ? 's' : ''}}
            </span>
            <span v-for="hashtag in repo.topics" class="hashtag bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2" >
                
                <i class></i>{{ hashtag}}
            </span>
        </footer>
	</div>
</template>
<script >
const endpoint = 'https://api.github.com/repos'
import axios from 'axios'

export default {
    props:{
        reponame:{
            type:String,
            required:true
        },
        username:{
            type:String,
            required:true
        },
        cardClass:{ 
            type:String
        }
    },
    async created (){
        //console.log(this.reponame)
        const request= endpoint+'/'+this.username+'/'+this.reponame;

        const response =  axios.get(request).then((response) => {
       // console.log(response)
        this.repo = response.data
        const created = new Date(this.repo.created_at)
        this.repo.created_at= created.toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})
        const updated = new Date(this.repo.created_at)
        this.repo.updated_at= updated.toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})
        this.repo.ownerlogin= this.repo.owner.login
        this.repo.ownerAvatar= this.repo.owner.avatar_url
        this.repo.ownerUrl = this.repo.owner.html_url
      })
        
        
    },
    data(){
        return{
            repo:{}
        }
    }
}


</script>
<style scoped>
.card footer span {
    padding: 4px 6px 4px 10px;
    margin:2px 6px 2px 2px;
}
.card footer span.hashtag i{
    color: #777;

    background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path fill-rule="evenodd" d="M11.097 1.515a.75.75 0 0 1 .589.882L10.666 7.5h4.47l1.079-5.397a.75.75 0 1 1 1.47.294L16.665 7.5h3.585a.75.75 0 0 1 0 1.5h-3.885l-1.2 6h3.585a.75.75 0 0 1 0 1.5h-3.885l-1.08 5.397a.75.75 0 1 1-1.47-.294l1.02-5.103h-4.47l-1.08 5.397a.75.75 0 1 1-1.47-.294l1.02-5.103H3.75a.75.75 0 0 1 0-1.5h3.885l1.2-6H5.25a.75.75 0 0 1 0-1.5h3.885l1.08-5.397a.75.75 0 0 1 .882-.588ZM10.365 9l-1.2 6h4.47l1.2-6h-4.47Z" clip-rule="evenodd" /></svg>');
    background-repeat: no-repeat;
}
i.user {
    background-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path fill-rule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clip-rule="evenodd" /><path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" /></svg>');
    background-repeat:no-repeat;
    width:1em;
    display:inline-block;
}
</style>
