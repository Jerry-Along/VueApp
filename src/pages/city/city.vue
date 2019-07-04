<template>
	<div>
	<!-- 城市列表的头部 -->	
	<city-header></city-header>
	<city-search
		:cities="cities"></city-search>
	<city-list 
		:hotCities="hotCities"
		:cities="cities"
		></city-list>
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
			hotCities:[],
			cities:{}
		}
	},
	mounted(){
		this.getData()
	},
	methods:{
		getData(){
			this.axios.get("/api/city.json").then((response) => {
				const cityData = response.data
				this.hotCities = cityData.data.hotCities
				this.cities = cityData.data.cities
				
			}).catch((response) =>{
				
			})
		}
	},
	
	
}
</script>

<style>
</style>
