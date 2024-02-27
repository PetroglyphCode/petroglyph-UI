<template>
    <div class='flex mb-4 ' :id="elementId">
		<div class="w-3/4 ml-auto mr-auto  h-12 font-body">
		   <hr :class="tailwindColor" class="h-1">
		</div>
	</div>
</template>
<script>
export default{
    props:{
        elementId: {
            type:String
        },
        tailwindColor: {
            type:String
        }
    }
}
</script>
<style scoped>

</style>