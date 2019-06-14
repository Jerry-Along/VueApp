<template>
	<div class="header"> 
		<div class="header-left">
			<span class="iconfont">&#xe678;</span>
		</div>
		<div class="header-search">
			<span class="iconfont">&#xe614;</span>
			搜索景点/门票</div>
		<div class="header-right">
			城市
			<span class="iconfont">&#xe6aa;</span>
		</div>
	 </div>
</template>

<script>
export default{
	name:'homeHeader'
}
</script>

<style lang="stylus" scoped>
	// @import './../../assets/styles/values.styl'
	@import '~wenze/values.styl'
	.header
		display:flex
		line-height:2.2rem
		background:$bgColor
		color:#fff
		.header-left 
			width:4rem
			float:left
		.header-search
			height:2.0rem
			margin-top:0.2rem
			margin-bottom:0.2rem
			line-height:1.8rem
			flex:1
			background: #fff
			border-radius:.3rem
			
			color:#ccc
			
		.header-right
			width:4rem
			float:right
			
</style>
