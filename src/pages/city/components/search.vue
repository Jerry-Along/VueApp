<template>
	<div class="search">
		<input class="search-input" type="text" placeholder="请输入城市名/拼音" />
	</div>
</template>

<script>
export default{
	name:"citySearch"
}
</script>

<style lang="stylus" scoped>
	@import '~wenze/values.styl'
	.search
		background:$bgColor
		line-height:1.8rem
		height:1.8rem
		padding:.2rem .4rem
		.search-input
			border-sizing:border-box
			width:100%
			height:1.4rem
			line-height:1.4rem
			border-radius:.3rem
			color:#666
			text-align:center
			padding:0 .2rem
</style>
