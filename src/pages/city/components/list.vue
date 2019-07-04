<template>
	<div class="list" ref="listRef">
		<div>
			<div class="area">
				<p class="area-title" @click="scrollToPage">热门城市</p>
				<ul class="area-hotcity-items">
					<li class="area-item" 
					v-for="item in hotCities" 
					:key="item.id"
					@click="handleCityClick(item.name)">{{item.name}}</li>
				</ul>
			</div>
			<div class="area">
				<p class="area-title">按照字母排序</p>
				<ul class="area-code-items">
					<li class="area-code-item" 
						v-for="(item,index) of cities" 
						:key="index"
						@click="scrollToPage">{{index}}</li>
				</ul>
			</div>
			
			<!-- 字母的城市 -->
			<div class="area" 
				v-for="(item,index) in cities" 
				:key="index" 
				:ref= "index">
				<p class="area-title">{{index}}</p>
				<ul class="area-city-items">
					<li class="area-city-item" 
						v-for="innerItem in item" 
						:key="innerItem.id"
						@click="handleCityClick(innerItem.name)"
					>{{innerItem.name}}</li>
				</ul>
			</div>
			
		</div>
	</div>
</template>

<script>
import BScroll from 'better-scroll'
export default{
	name:"cityList",
	props:{
		hotCities:Array,
		cities:Object
	},
	mounted(){
		// 需要配置 BScroll 的参数
		// let wrapper = document.querySelector('.list')
		let wrapper = this.$refs.listRef
		this.scroll = new BScroll(wrapper,{click:true,tap:true})
		
	},
	methods: {
		scrollToPage(event){
			let code = event.target.innerText;
			console.log(code);
			console.log(this.$refs[code][0]);
			let ele = this.$refs[code][0]
			this.scroll.scrollToElement(ele)
		},
		handleCityClick(cityName){
			console.log(cityName);
		}
	}
}
</script>

<style lang="stylus" scoped>
	@import '~styles/values.styl'
	.list
		position:absolute
		overflow:hidden
		top:4.4rem
		left:0
		right:0
		bottom:0
		.area
			font-size:.8rem
			.area-title
				height:2rem
				line-height:2rem
				width:100%
				text-align:left
				text-indent:.5rem
				background:#f5f5f5
				font-size:.7rem
			.area-hotcity-items
				&:before
					content:''
					width: 33.33%;
					left: 33.33%;
					position:absolute
					height: 100%
					border-left: .02rem solid #ddd
					border-right: .02rem solid #ddd
				&:after
					content:''
					position:absolute
					height: 100%;
					border:0
					width: 1%
					left: 75%
				overflow: hidden
				position:relative
				.area-item
					position:relative
					width:33.33%
					height: 2rem
					line-height: 2rem
					float:left
					font-size: .75rem
					border-bottom: .074rem solid #ddd
			.area-code-items
				overflow: hidden
				width:100%
				margin:.8rem auto
				.area-code-item
					width:16.66%
					height:  2rem
					line-height:  2rem
					float:left
					font-size: .75rem
				
			.area-city-items
				&:before
					content:''
					width: 25%
					left: 25%
					position:absolute
					height: 100%
					border-left: .02rem solid #ddd
					border-right: .02rem solid #ddd
				&:after
					content:''
					position:absolute
					height: 100%;
					left:75%
					width:1%
					border-left: .02rem solid #ddd
					border-right: 0
				overflow: hidden
				position:relative
				.area-city-item
					position:relative
					textTabCss()
					width:25%
					height:  2rem
					line-height:  2rem
					float:left
					font-size: .75rem
					border-bottom: .074rem solid #ddd

			
</style>
