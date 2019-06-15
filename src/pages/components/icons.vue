<template>
	<div class="icons">
		<div class="icon" v-for="ico in iconList" :key="ico.id">
			<div class="icon-imgs">
				<img class="icon-img" :src="ico.iconUrl"/>
			</div>
			<span class="icon-text">{{ico.name}}</span>
		</div>
	</div>
</template>

<script>
export default{
	name:"homeIcons",
	data(){
		return {
			iconList:[{
				id:"0001",
				name:"频道1名称",
				iconUrl:"http://cs.vmovier.com/Uploads/Series/2017-06-22/594b9facf35be.jpg"
			},{
				id:"0002",
				name:"频道2名称",
				iconUrl:"http://cs.vmovier.com/Uploads/Series/2017-06-22/594b9f143f5f3.jpg"
			},{
				id:"0003",
				name:"频道3名称",
				iconUrl:"http://cs.vmovier.com/Uploads/Series/2017-06-22/594b9ecdb788a.jpg"
			},{
				id:"0004",
				name:"频道4名称",
				iconUrl:"https://cs.vmovier.com/Uploads/Series/2018-08-31/5b88a551bad04.png"
			},{
				id:"0005",
				name:"频道5名称",
				iconUrl:"https://cs.vmovier.com/Uploads/Series/2018-11-15/5becc5ff55398.jpg"
			},{
				id:"0006",
				name:"频道6名称",
				iconUrl:"http://cs.vmovier.com/Uploads/Series/2017-06-22/594b9f27d09e8.jpg"
			},{
				id:"0007",
				name:"频道7名称",
				iconUrl:"http://cs.vmovier.com/Uploads/Series/2017-06-22/594b9f649bc25.jpg"
			},{
				id:"0008",
				name:"频道8名称",
				iconUrl:"http://cs.vmovier.com/Uploads/Series/2017-06-22/594b9fc863701.jpg"
			}]
		}
	}
}
</script>

<style lang="stylus" scoped>
	.icons
		overflow:hidden
		width:100%
		height:0
		padding-bottom:50%
		.icon
			overflow: hidden
			float:left
			width:25% 
			height:0
			padding-bottom:25%
			.icon-imgs
				top:0
				right:0
				bottom:.4rem
				left:0
				box-sizing:border-box
				padding:.1rem
				.icon-img
					display:block
					margin:0 auto
					width:100%
			.icon-text
				right:0
				bottom:0
				left:0
				top:-3rem
				height:1rem
				line-height:1rem
				background:#f00
				
			
			
</style>
