<template>
    <a :href="user.html_url" :title="`${user.name}'s Github Profile`" class='border-0'>
    <div class="card border-gray-200 border flex flex-col" :class="cardClass">
        <div class="flex flex-row items-center justify-center py-3">
		<img  :src="user.avatar_url" :alt="`${ user.login }'s Github Avatar`" class="shadow border border-gray-200">
        </div>
        <div class="px-6 py-4 flex flex-col flex-wrap">
            <h5 class="text-large text-gray-500">On Github</h5>
			<h4 class="heading-xs my-3 text-blue-900">{{user.name}}</h4>
            <div class="meta text-small">
            <span class="date">Joined in {{user.created_at}}</span>
            </div>
			<p class="inline-block max-w-s ">{{ user.bio }}</p>
		</div>
		<footer class="px-6 py-2 flex flex-row flex-wrap">
                
            <span class="mr-2">
                <i class="users icon font-medium"></i>
                {{user.followers}} Friend{{user.followers > 1 ? 's' : ''}}
            </span>
            <span class="mr-2">
                <i class="repos icon font-medium"></i>
                {{user.public_repos}} Repo{{user.public_repos > 1 ? 's' : ''}}
            </span>
          
        </footer>
	</div>
    </a>
</template>
<script >
const endpoint = 'https://api.github.com/users'
import axios from 'axios'

export default {
    props:{
        username:{
            type:String,
            required:true
        },
        cardClass:{ 
            type:String
        }
    },
    async created (){
        console.log(this.username)
        const request= endpoint+'/'+this.username;

        const response =  axios.get(request).then((response) => {
        console.log(response)
        this.user = response.data
        const date = new Date(this.user.created_at)
        this.user.created_at= date.toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})
      })
        
        
    },
    data(){
        return{
            user:{}
        }
    }
}


</script>
<style>
i{
    width:1em;
    display:inline-block;
    color:#444;
    padding:8px;
    background-repeat:no-repeat;

}
i.team {
    background-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path fill-rule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clip-rule="evenodd" /><path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" /></svg>');
  
}
i.users {
    background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" /></svg>');
}
i.repos {
   background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M11.644 1.59a.75.75 0 0 1 .712 0l9.75 5.25a.75.75 0 0 1 0 1.32l-9.75 5.25a.75.75 0 0 1-.712 0l-9.75-5.25a.75.75 0 0 1 0-1.32l9.75-5.25Z" /><path d="m3.265 10.602 7.668 4.129a2.25 2.25 0 0 0 2.134 0l7.668-4.13 1.37.739a.75.75 0 0 1 0 1.32l-9.75 5.25a.75.75 0 0 1-.71 0l-9.75-5.25a.75.75 0 0 1 0-1.32l1.37-.738Z" /><path d="m10.933 19.231-7.668-4.13-1.37.739a.75.75 0 0 0 0 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 0 0 0-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 0 1-2.134-.001Z" /></svg>');
}
</style>
<style scoped lang="postcss">
a .card {
    @apply font-normal text-gray-800
}
</style>