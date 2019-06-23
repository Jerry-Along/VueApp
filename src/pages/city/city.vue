<template>
	<div>
	<!-- 城市列表的头部 -->	
	<city-header></city-header>
	<city-search></city-search>
	<city-list></city-list>
	</div>
</template>

<script>
import cityHeader from './components/header'
import citySearch from './components/search'
import cityList from './components/list'
export default{
	name:'city',
	components:{
		cityHeader,citySearch,cityList
	},
	data(){
		return {
			
		}
	}
}
</script>

<style>
</style>
