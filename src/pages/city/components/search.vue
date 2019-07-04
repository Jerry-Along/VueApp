<template>
	
	<div>
		<div class="search">
			<input  v-model="searchContent" class="search-input" type="text" placeholder="请输入城市名/拼音" />
		</div>
		<div class="search-content" ref="search" v-show="hasData" >
			<ul>
				<li class="search-content-li border-bottom"
					v-for="item in citySearchList"
					:key="item.id"
					@click="handleCityClick(item.name)">{{item.name}}</li>
				<li class="search-content-li border-bottom search-content-li-last"  v-show="searchContent">没有更多数据了</li>
			</ul>
		</div>
	</div>
	
	
	
</template>

<script>
import BScroll from 'better-scroll'
export default{
	name:"citySearch",
	props:{
		cities:""
	},
	data(){
		return {
			searchContent:"",
			citySearchList:[]
		}
	},
	methods:{
		handleCityClick(cityName){
			console.log(cityName);
		}
	},
	mounted(){
		// 需要配置 BScroll 的参数
		// let wrapper = document.querySelector('.search-content')
		this.scroll = new BScroll(this.$refs.search, {click:true})
	},
	computed: {
		hasData() {
			return this.citySearchList.length !=0
		}
	},
	watch:{
		searchContent(){
			const searchList=[]
			if (!this.searchContent) {
				this.citySearchList = []
				return
			}
			for(let codeCity in this.cities){
				this.cities[codeCity].forEach((item,index) =>{
					if(item.spell.indexOf(this.searchContent) != -1 || item.name.indexOf(this.searchContent) != -1 ){
						searchList.push(item)
					}
				})
			}
			this.citySearchList = searchList
		}
	}
}
</script>

<style lang="stylus" scoped>
	@import '~styles/values.styl'
	.search
		background:$bgColor
		line-height:1.8rem
		height:1.8rem
		padding:.2rem 0
		.search-input
			border-sizing:border-box
			width:96%
			height:1.4rem
			line-height:1.4rem
			border-radius:.3rem
			color:#666
			text-align:center
			padding:0 .2rem
	.search-content
		overflow:hidden
		position:absolute
		z-index:1
		left:0
		top:4rem
		right:0
		bottom:0
		background:#eee
		.search-content-li
			height:1.4rem
			line-height:1.4rem
			font-size:.8rem
			text-align:left
			text-indent:.4rem
		.border-bottom
			&:before
				border: .8px solid #ccf
		.search-content-li-last
			text-align:center
</style>
