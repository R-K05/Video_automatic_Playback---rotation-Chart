<template>
	<view>
		<view style="padding: 20px;height: 300px;border-radius: 14px;">
			<view class="u-demo-block"
				style="border-radius: 14px;margin-top: 20px;background-image: linear-gradient(to bottom, #e4c6ce, #f8eff1);padding-bottom: 18px;padding-top: 20px;">
				<view class="u-demo-block__title" style="margin-bottom: 20px;margin-left: 10px;">专属好剧</view>
				<kswiper :list="list4" previousMargin="30" nextMargin="30" circular radius="5" 
					bgColor="rgba(0,0,0,0)" pauseVideo autoplay auto show-fullscreen-btn="false" 
					@click="handleSwiperClick($event)" @change="changee" :class="this.gk ? h : w"></kswiper>
				<view style="display:flex;justify-content:center;margin-top: 10px;">
					<view style="background-color:#fed6e0;padding: 7px 32px;border-radius:18px;" @click="guankan">
						观看全集
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	
	import kswiper from '../../uni_modules/ning-scrollhorizontally/components/ning-scrollhorizontally/ning-scrollhorizontally.vue'
	export default {
		components:{
			kswiper
		},
		data() {
			return {
				gk: "",
				currentIndex: 0, // 当前页面索引

				list4: [
					{
						// 换成自己的视频,可自动播放
						url: 'https://gd-hbimg.huaban.com/516f5ae2f7c9e87fca1f4d0eed6ee7ba0e691b0389d0e-8CZA0X_fw1200webp',
						// 显示的标题
						title: '',
						// 切换时封面
						poster: ''
					}, {
						url: 'https://gd-hbimg.huaban.com/b5789c7002163df4d2b06f6d9f602c0c30cfbbdf531f9-XIcGzo_fw1200webp',
						// 显示的标题
						title: '',
						// 切换时封面
						poster: ''
					}, {
						url: 'https://gd-hbimg.huaban.com/ff8eb6f8c3e86b46091726793c310ef2002b4b2e238ae-i65Hin_fw1200webp',
						// 显示的标题
						title: '',
						// 切换时封面
						poster: ''
					}, {
						url: 'https://gd-hbimg.huaban.com/516f5ae2f7c9e87fca1f4d0eed6ee7ba0e691b0389d0e-8CZA0X_fw1200webp',
						// 显示的标题
						title: '',
						// 切换时封面
						poster: ''
					}, {
						url: 'https://gd-hbimg.huaban.com/b5789c7002163df4d2b06f6d9f602c0c30cfbbdf531f9-XIcGzo_fw1200webp',
						// 显示的标题
						title: '',
						// 切换时封面
						poster: ''
					}, {
						url: 'https://gd-hbimg.huaban.com/ff8eb6f8c3e86b46091726793c310ef2002b4b2e238ae-i65Hin_fw1200webp',
						// 显示的标题
						title: '',
						// 切换时封面
						poster: ''
					},
				],
			}
		},		

		methods: {
			// 轮播图切换
			changee(e) {
				this.gk = e.current
			},
			// 观看全集按钮
			guankan() {
				this.handleSwiperClick(this.gk)
			},
			// 点击视频按钮
			async handleSwiperClick(id) {
				// 可跳转视频播放详情
			},
			
		}
	}
</script>

<style>
	.h {
		height: 150px !important;

	}

	.scroll-container {
		width: 87%;
		overflow: hidden;
		display: flex;
		justify-content: center;
		background-color: cadetblue;
		margin: 20px 20px 20px 20px;
	}

	.scroll-view {
		width: 100%;
	}

	.scroll-content {
		display: flex;
		justify-content: center;
	}

	.item {
		flex: 0 0 auto;
		/* width: 200px; */
		/* 根据实际需求设置每个项的宽度 */
		margin-right: 10px;
		/* 根据实际需求设置项之间的间距 */
	}

	.left,
	.right {
		flex: 0 0 61%;
		margin: 5rpx 20rpx 5rpx 5rpx;
		padding: 27rpx 20rpx 0rpx 28rpx;
		box-sizing: border-box;
		height: 375px;
		border-radius: 8px;

	}

	.left {
		background-color: #f6edef;
	}

	.right {
		background-color: #edfcff;
	}

	.list {
		display: flex;
	}

	.list-item {
		width: 100%;
		margin-top: 15rpx;
		/* height: 100px; */
		/* 其他样式 */
	}


	.containerr {
		display: flex;
		width: 100%;
		overflow-x: scroll;
		margin-left: 10rpx;
		margin-top: 21px
	}



	.y-l {
		left: -10rpx;
		width: 20rpx;
		height: 20rpx;
		border-radius: 10rpx;
		background: #F5F6FA;
		position: absolute;
		z-index: 2;
		top: 284rpx;
	}

	.y-r {
		right: -10rpx;
		width: 20rpx;
		height: 20rpx;
		border-radius: 10rpx;
		background: #F5F6FA;
		position: absolute;
		z-index: 2;
		top: 284rpx;
	}

	.cl {
		color: #000000;
		font-size: 28rpx;
		margin-top: 1px;
		text-align: center;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	page {
		background-color: #f8f8f9;
	}

	.cnxh-pic {
		width: 100%;
		height: 280rpx;
		background: #F2F2F2;
		border-radius: 16rpx;
	}

	.pb10 {
		padding-bottom: 20rpx;
		background: #FFFFFF;
		box-shadow: 0rpx 8rpx 40rpx 0rpx rgba(0, 0, 0, 0.04);
		width: 30%;
		position: relative;
		border-radius: 20rpx;
		border-bottom: 2rpx dashed #FEC675;
	}

	.mt16 {
		display: flex;
		margin-top: 19rpx;
		justify-content: space-between;
		margin-left: 5px;
		margin-right: 5px;
		margin-bottom: 15px;
	}

	.ml15 {
		margin-left: 30rpx;
		color: #2E2F33;
		font-weight: 600;
		font-size: 32rpx;
	}

	.ft14 {
		color: #AEB2C1;
		font-size: 28rpx;
		margin-top: 12px;
		margin-right: 5px;
	}

	.positionStyle {
		position: fixed;
		bottom: 50rpx;
		width: 100%
	}

	.transition {
		background-color: aqua;
		width: 200rpx;
		height: 400rpx;
	}

	.video-bd-pic {
		width: 100%;
		height: 280rpx;
		border-radius: 10rpx 10rpx 0 0;
	}

	.video-cnxh-pic {
		width: 100%;
		height: 280rpx;
		border-radius: 10rpx 10rpx 0 0;
	}

	.textdowe {
		overflow: hidden;
		-webkit-line-clamp: 2;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
	}

	.video-bd-item {
		margin: 10rpx;
		/* box-shadow: 0 4rpx 8rpx 0 rgba(121, 121, 121, 0.2);     */
		border-radius: 0 0 10rpx 10rpx;
		width: 210rpx;
	}

	.video-cnxh-item {
		margin: 10rpx;
		border-radius: 0 0 10rpx 10rpx;
		background-color: #fff;
		width: 30%;
	}

	.fixed_pic1 {
		position: fixed;
		bottom: 120rpx;
		right: 10rpx;
		width: 180rpx;
		height: 180rpx;
	}

	.fixed_pic2 {
		position: fixed;
		bottom: 20rpx;
		right: 50rpx;
		width: 100rpx;
		height: 100rpx;
		border-radius: 20rpx;
	}

	.tagcss-bd {
		font-size: 20rpx;
		color: #fff;
		padding: 1rpx 10rpx;
		border-radius: 10rpx;
		margin: 0 10rpx;
		position: absolute;
		left: 5rpx;
		bottom: 15rpx;
	}

	/* 精选 */
	.swiper {
		margin: 30rpx 20rpx 60rpx 20rpx;
	}

	.continue-border {
		border: 3rpx solid #7d5f40;
		width: 165rpx;
		height: 237rpx;
		border-radius: 15rpx;
		background-color: aqua;
		background-color: #f2c351;
		padding: 10rpx;
		border-radius: 20rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.continue-pic {
		border-radius: 11rpx;
		width: 165rpx;
		height: 237rpx;
		z-index: 999;
	}

	.continue-text {
		position: absolute;
		color: #000000;
		background-color: #fddd94;
		font-size: 24rpx;
		width: 125rpx;
		text-align: center;
		left: 30rpx;
		top: 200rpx;
		z-index: 999;
		border: 2rpx solid #fff8ce;
		border-radius: 8rpx;
	}

	.continue-bg1 {
		background-color: #d7893e;
		padding: 0 0 10rpx 0;
		width: 185rpx;
		border-radius: 20rpx;
		border: 2rpx solid #7d5f40;
	}

	/* 网友投稿 */
	.Contribute_box {
		margin-top: 20rpx;
		display: flex;
		justify-content: space-evenly;
	}

	.ph_bgview {
		/* display: flex; */
		/* justify-content: space-between;
		align-items: center; */
		margin: 10rpx 20rpx 0rpx 20rpx;
		border-radius: 10rpx 10rpx 10rpx 10rpx;
		/* background-color: #2E2456; */
	}

	.Contribute_image {
		width: 340rpx;
		height: 200rpx;
		border-radius: 10rpx;
	}

	.text_box {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin: 10rpx 0;
	}

	.Contribute_author1 {
		font-size: 30rpx;
		width: 340rpx;
		display: -webkit-box;
		overflow: hidden;
		white-space: normal !important;
		text-overflow: ellipsis;
		word-wrap: break-word;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}

	.Contribute_author2 {
		font-size: 26rpx;
		width: 160rpx;
		display: -webkit-box;
		overflow: hidden;
		white-space: normal !important;
		text-overflow: ellipsis;
		word-wrap: break-word;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}

	.gzh {
		position: fixed;
		bottom: 60rpx;
		background-color: #EFA029;
		color: #ffffff;
		width: 700rpx;
		font-size: 32rpx;
		margin-left: 15rpx;
		/* text-align: center; */
		border-radius: 60rpx;
		padding: 14rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>