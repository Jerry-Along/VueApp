<template>
	<div class="icons">
		<swiper :options="swiperOption">
			<swiper-slide v-for="(page, index) in pages" :key="index">
				<div class="icon" v-for="item of page" :key="item.id">
					<div class="icon-img">
						<img  class="icon-img-content" :src="item.iconUrl" />
					</div>
					<p class="icon-text">{{item.name}}</p>
				</div>
			</swiper-slide>
		</swiper>
	</div>
</template>

<script>
export default{
	name:"homeIcons",
	data(){
		return {
			iconList:[
				{
					id:"0001",
					name:"门票1",
					iconUrl:"http://cs.vmovier.com/Uploads/Series/2017-06-22/594b9facf35be.jpg"
				},{
					id:"0002",
					name:"门票2",
					iconUrl:"http://cs.vmovier.com/Uploads/Series/2017-06-22/594b9f143f5f3.jpg"
				},{
					id:"0003",
					name:"门票3",
					iconUrl:"http://cs.vmovier.com/Uploads/Series/2017-06-22/594b9ecdb788a.jpg"
				},{
					id:"0004",
					name:"门票4",
					iconUrl:"https://cs.vmovier.com/Uploads/Series/2018-08-31/5b88a551bad04.png"
				},{
					id:"0005",
					name:"门票5",
					iconUrl:"https://cs.vmovier.com/Uploads/Series/2018-11-15/5becc5ff55398.jpg"
				},{
					id:"0006",
					name:"门票6",
					iconUrl:"http://cs.vmovier.com/Uploads/Series/2017-06-22/594b9f27d09e8.jpg"
				},{
					id:"0007",
					name:"门票7",
					iconUrl:"http://cs.vmovier.com/Uploads/Series/2017-06-22/594b9f649bc25.jpg"
				},{
					id:"0008",
					name:"门票8",
					iconUrl:"http://cs.vmovier.com/Uploads/Series/2017-06-22/594b9fc863701.jpg"
				},{
					id:"0009",
					name:"门票9",
					iconUrl:"http://cs.vmovier.com/Uploads/Series/2017-06-22/594b9f41dd4bd.jpg"
				}],
				swiperOption: {
					loop: false
				},
		}
	},
	computed:{
		pages(){
			const pages = []
			this.iconList.forEach((item,index) => {
				const page = Math.floor(index/8)
				if(!pages[page]){
					pages[page] = []
				}
				pages[page].push(item)
			})
			return pages
		}
	}
}
</script>

<style lang="stylus" scoped>
	.icons >>> .swiper-container
		width:100%
		height:0
		padding-bottom:50%
		.icon
			overflow:hidden
			position:relative
			float:left
			width:25%
			height:0
			padding-bottom:25%
			.icon-img
				position:absolute
				box-sizing:border-box
				padding:0.1rem
				.icon-img-content
					width:80%
			.icon-text
				left:0
				bottom:0
				right:0
				position:absolute
				font-size:17px
				overflow:hidden
				text-overflow:ellipsis
				white-space:nowrap
				
				
</style>
