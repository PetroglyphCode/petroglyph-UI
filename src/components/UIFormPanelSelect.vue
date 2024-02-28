<template>
    <select @change="evalChoice($event)" :id="elementId" :class="elementClass">
		<option  disabled selected>{{ placeholderText ?? 'Please choose:'}}</option>
        <option v-for="option in elementOptions" :value="option.optionValue">{{ option.optionText }}</option>
	</select>
</template>
<script>
export default{
    emits: [
        'selectionFromSelect'
        ],
    props: {
        placeholderText: {
            type:String
        },
        elementOptions :{
            type:Array,
            required:true
           
        },
        elementId: {
            type:String,
        },
        elementClass: {
            type:String
        }
    },
    data(){
        return {
            selectedValue:''
        }
    },
    methods:{
        evalChoice (e){
            console.log(e.target.value)
            this.$emit('selectionFromSelect', e.target.value)
        }
    }

}

</script>
<style scoped>
</style>