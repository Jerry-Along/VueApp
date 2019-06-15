<template>
	<div class="splash-position">
		<router-link to="./home"><img src="./../assets/logo1.jpg" /></router-link>
		<h2>{{msg}}</h2> <br />
		
	</div>
</template>

<script>
export default {
	name:"splashPage",
	data(){
		return{
			msg:'Welcome to my vueApp'
		}
	}
}	
</script>
<style>
	.splash-position{
		margin: 6.25rem 1.25rem;
	}
</style>
