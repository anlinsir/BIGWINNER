<template>
	<div class="invitation Warper">
		<div class="walleWarp white" v-show='nowINter'>
			<div class="mid">
				<p class="tipsTitle center">立即邀请
 				<span @click='hydrantDis = false' class="close abso cu lh" style="right:23px;top:5px;width:13px;height:13px;background-size:100%;"></span></p>
 				<div class="address bb flexB fz14 white">
					<span >
						<input style="background:none;height:40px;color:rgba(255,255,255,0.2)" class="bb fz14" placeholder="邀请链接" type="" name="">
					</span>
					<span>www.biggwinner.com/546546876531354653</span>
				</div>

				<div class="center bb">
					<img src="/static/img/e.png" alt=""><br>
					<button class="white fz16">复制链接</button>
				</div>
			</div>

		</div>
		<el-dialog :visible.sync="nowINter" width="0" :show-close='false' :custom-class="'walleWarp'"></el-dialog>




		<Header />
			<div class="invitner Warper">
				<div class="invit bb warp">
					<!-- <div class="intoBox bb">
						<p class="fz24 white fb" style="margin-bottom:29px;">邀请好友加入BIGWINNER!</p>
						<p class="fz14" style="color:rgba(94,78,122,1);width:375px;height:40px;margin-bottom:30px;">BIGWINNER欢迎您邀请好友加入，您和好友都将获得丰厚的奖励！   <span @click='nowINter =true' class="under cu" style="color:rgba(150, 114, 181, 1);">立即邀请</span></p>
						<p>
							<span class="lh white bb" style="">
								<span class="Left">已邀请好友</span>
								<span class="Right fb">55+</span>
							</span>
							<span class="lh white bb" style="">
								<span class="Left">已获得</span>
								<span class="Right fb">0.00042000 BTC</span>
							</span>
						</p>
					</div> -->
					<p class="fz16 center fb white" style="margin-bottom:20px;">平台总收益</p>
					<p style="color:rgba(219,33,175,1);margin-bottom:35px;" class="fb center  fz22">756.24850000 BTC</p>
					<ul class="bb flexB xiazhuUndyinli">
		 				<li class="white bb fz14">
		 					<span class="lh">总下注(Bitcoin)</span><br>
		 					<span class="fb">
		 						<span class="fz22">0.06854200</span>
		 						<span>BTC</span> 
		 					</span>

		 					<span class="lh iconimg abso"></span>
		 				</li>
		 				
		 				<li class="white bb fz14">
		 					<span class="lh">总获利(Bitcoin)</span><br>
		 					<span class="fb">
		 						<span class="fz22">0.06854200</span>
		 						<span>BTC</span> 
		 					</span>
		 					<span class="lh iconimg abso"></span>

		 				</li>

		 			</ul>

					<p style="margin-top:13px;" class=" white center">距下一次分红还有  3天8小时36分</p>
				</div>
			</div>


			<div class="invitnerList Warper">
				<div class="invitlist warp">
					<p class="chooseListNav bb center" style="color:rgba(0,0,0,1);">
						<span  class="fb  cu fz14 " v-for="(ii,id) in ['分红记录']">{{ii}}</span>
					</p>

					<ul class="fz14">
						<li class="flexB center title">
							<span v-for="(i,d) in ['获得BTC','时间']">{{i}}</span>
						</li>
						<li class="flexB fz14 center " v-for="(ii,id) in 15">
							<span>user003</span>
							<span> 2018-09-13  20:27</span>
						</li>
					</ul>
					<!-- <div class="page">
						fenye
					</div> -->

					<div class="center">
						<button class="white fz16">返回游戏</button>
					</div>

				</div>
			</div>

		<Footer />
	</div>
</template>

<script>
	import Footer from '../components/footer'
	import Header from '../components/header'
	export default{
		data(){
			return({
				NavActive:0,//active
				nowINter:false,//立即邀请显示
			})
		},
		components:{
			Footer,
			Header
		}
	}
</script>


<style lang="scss" scoped>
.xiazhuUndyinli{
	width: 100%;
	padding: 0 23px 0 22px;
	height: 90px;
	margin-bottom: 38px;
	>li{
		width:382px;
		height:90px;
		background:linear-gradient(90deg,rgba(244,0,241,1),rgba(196,63,113,1));
		border-radius:5px;
		box-shadow:6px 0px 35px rgba(223,28,185,0.39);
		padding-left: 25px;
		position: relative;
		padding-top: 21px;
		span.lh{
			margin-bottom: 5px;
		}
		>.abso{
			width: 56px;
			height: 56px;
			right: 0;
			top:0;
			background-position: -384px -161px;
		}
	}
	}
.walleWarp{
	position: fixed;
	z-index: 3000;
	>.mid{
		left: 32vw;
		top:50vw ;
		width:610px;
		height:417px;
		background:rgba(42, 33, 60, 1);
		border-radius:5px;
		padding: 25px 22px 0 22px;
		box-shadow:0px 0px 101px rgba(29,20,35,0.64);
		>.tipsTitle{
	      position: relative;
	      margin-bottom: 38px;
	      &::after{
	        content: '';
	        bottom:-12px;
	        left: 50%;
	        position: absolute;
	        width:68px;
	        transform: translateX(-50%);
	        height:2px;
	        background:linear-gradient(90deg,rgba(244,0,241,1),rgba(196,63,113,1));
	      }
    	}
    	.address{
			margin-left: 22px;
			width:567px;
			line-height: 50px;
			height:50px;
			background:rgba(37,28,52,1);
			padding: 0 22px;
			border-radius:5px;
		}
		>div.center{
			padding: 0 22px;
			margin-top: 27px;
			>img{
				width: 130px;
				height: 130px;
			}
		}
	}
}


button{
	width:275px;
	height:50px;
	margin-bottom: 45px;
	background:linear-gradient(90deg,rgba(244,0,241,1),rgba(196,63,113,1));
	margin-top: 30px;
	border-radius:5px;
}
	.invitation{
		.invitner{
			height: 357px;
			background-blend-mode: darken,lighten;
			background:url('/static/img/block.png'),linear-gradient(to right,#241d36,#312446,#241d36);
			.invit{
				height: 461px;
				overflow: hidden;
				padding-top: 58px;
				transition:all .2s;
				>.intoBox{
					width:900px;
					height:358px;
					padding-left: 70px;
					margin-top:48px;
					background-color:rgba(37,28,52,1);
					border-radius:5px;
					padding-top: 94px;
					background-image: url('/static/img/otherbg.png') ;
					background-repeat: no-repeat;
					background-position: 570px 15px;
					>p{
						:nth-child(1){
							margin-right: 20px;
						}
						>span:not(.under){
							width:258px;
							height:40px;
							font-size: 14px;
							border:1px solid rgba(244,0,241,1);
							line-height: 40px;
							padding: 0 14px;
							border-radius:5px;
						}
					}
				}
			}

		}
		.invitnerList{
			min-height: 830px;
			>.invitlist{
				min-height: 830px;
				>.chooseListNav{
					border-bottom: 1px solid rgba(238,238,238,1);
					height: 47px;
					line-height: 47px;
					padding: 0 250px;
				}
				>ul{
					margin-bottom: 100px;
					>:nth-child(2n){
						background:rgba(239,241,244,1);
					}
					>li{
						height: 50px;
						line-height: 50px;
						color:rgba(40,43,49,1);
						>span{
							width: 33.33%;
						}
					}
					>li.title{
						color:rgba(153,153,153,1);
					}
				}

					
			}
		}
		
	}
</style>