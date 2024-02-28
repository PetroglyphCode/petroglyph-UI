<template>
   <button :class="classes" v-on:click="returnClick(click)" :disabled="disabled">{{text}}</button>
</template>

<script>
export default{
    props: {
     
        text:{
            type:String,
            require:true
        },
        classes:{
            type:String
        }

    
    },
    computed:{
         //if styles contain 'btn-disabled', disable the button
        disabled(){
            return this.classes.includes('btn-disabled');
        }
    },
    // data(){
    //     return {
           
    //     }
    // },
    methods:{
        //If I want to send the click back out to the containing component, is this it: 
        returnClick(e){
            return e;
        }
    }
}
</script>
<style>
button {
    white-space: nowrap;
}
</style>