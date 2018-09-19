<template>
	<div class="invitation Warper">
		<div class="walleWarp white" v-show='addINter'>
			<div class="mid">
				<p class="tipsTitle center">增加投资
 				<span @click='addINter = false' class="close abso cu lh" style="right:23px;top:5px;width:13px;height:13px;background-size:100%;"></span></p>
 				<div class="address bb flexB fz14 white">
					<span >
						<input style="background:none;height:40px;color:rgba(255,255,255,0.2)" class="bb fz14" placeholder="金额 (最小0.01)" type="" name="">
					</span>
					<span>0.20 BTC</span>
				</div>

				<div class="center bb">
					<button class="white fz16">确认投资</button>
				</div>
			</div>

		</div>
		<el-dialog :visible.sync="addINter" width="0" :show-close='false' :custom-class="'walleWarp'"></el-dialog>

		<!-- 增加投资 -->

		<div class="walleWarp white" v-show='subINter'>
			<div class="mid">
				<p class="tipsTitle center">撤出投资
 				<span @click='addINter = false' class="close abso cu lh" style="right:23px;top:5px;width:13px;height:13px;background-size:100%;"></span></p>
 				<div class="address bb flexB fz14 white">
					<span >
						<input style="background:none;height:40px;color:rgba(255,255,255,0.2)" class="bb fz14" placeholder="金额 (最小0.01)" type="" name="">
					</span>
					<span>0.20 BTC</span>
				</div>

				<div class="center bb">
					<button class="white fz16">确认撤出</button>
				</div>
			</div>

		</div>
		<el-dialog :visible.sync="subINter" width="0" :show-close='false' :custom-class="'walleWarp'"></el-dialog>

		<Header />
			<div class="invitner Warper">
				<div class="invit warp">
					<div class="intoBox bb">
						<p class="fz24 white fb" style="margin-bottom:56px;">投资BIGWINNER, 轻松获BTC!</p>
						
						<p>
							<span class="lh  inputBox">
								<span class="Left">已投资</span>
								<span class="Right fb">0.00025000 BTC</span>
							</span>	
							<span @click='addINter = true' class="lh  cu center fz14 white"  style="width:82px;height:40px;background:linear-gradient(90deg,rgba(244,0,241,1),rgba(196,63,113,1));border-radius:5px;line-height:40px;    margin: 0 16px;transform: translateY(-26px);">增加投资</span>
							<span @click='subINter = true'  class="lh cu  center fz14 white" style="width:82px;height:40px;border:1px solid rgba(244,0,241,1);border-radius:5px;line-height:40px;transform: translateY(-26px);color:rgba(219,33,175,1);">撤出投资</span>

						</p>

						<p>
							<span class="lh  inputBox">
								<span class="Left">预计收益</span>
								<span class="Right fb">0.00025000 BTC</span>
							</span>
						</p>

						<p>
							<span class="fz14 white" >已收益</span> &nbsp;&nbsp;
							<span class="fz24 fb lh " style="color:rgba(219,33,175,1);">0.000480000 BTC</span>
						</p>

					
					</div>
					<p style="color:rgba(94,78,122,1);margin-top:13px;" class="under center">查看投资说明</p>
				</div>
			</div>


			<div class="investmentData Warper">
				<div class="investmentdata warp">
					
					<ul class="totalCoinUndape flexB">
						<li class="rela" v-for="(ii,id) in 2">
							<p class="fz14 white" >平台总币数(Bitcoin)</p>
							<p class="fz22 fb" style="color:rgba(219,33,175,1);margin-top:10px;">251.38540000 BTC</p>
							<span class="lh iconimg abso"></span>
						</li>
					</ul>


					<ul class="alldata wr fz14 bb flexB">
						<li class="center" v-for="(i,id) in 6">
							<span class="txt">所有玩家总投注</span><br>
							<span><span :class="(id == 0 || id == 3) ? 'info' : (id == 1 || id == 4) ? 'win' : 'lose' ">64841121</span> 次</span>
						</li>
					</ul>

					<div class="inestmentCancas white">
						cans
					</div>


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
				addINter:false,//增加投资显示
				subINter:false,//撤出投资显示
			})
		},
		components:{
			Footer,
			Header
		}
	}
</script>


<style lang="scss" scoped>
.walleWarp{
	position: fixed;
	z-index: 3000;
	>.mid{
		left: 32vw;
		top:50vw ;
		width:610px;
		height:300px;
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
			height: 461px;
			background-blend-mode: darken,lighten;
			background:url('/static/img/block.png'),linear-gradient(to right,#241d36,#312446,#241d36);
			.invit{
				height: 461px;
				overflow: hidden;
				transition:all .2s;
				>.intoBox{
					width:900px;
					height:358px;
					padding-left: 70px;
					margin-top:48px;
					background-color:rgba(37,28,52,1);
					border-radius:5px;
					padding-top: 80px;
					background-image: url('/static/img/intermentBg.png') ;
					background-repeat: no-repeat;
					background-position: 658px -13px;
					>p{
						>span{
							display: inline-block;
						}
						>.inputBox{
							width:258px;
							height:40px;
							line-height: 7px;
							font-size: 14px;
							color: #fff;
							padding: 15px;
							box-sizing:border-box;
							margin-bottom: 11px;
							background:rgba(50,40,75,1);
							border-radius:5px;

							
						}
					}
					
				}
			}

		}
		
		
	}


	.investmentData{
		min-height: 750px;
		>.investmentdata{
			min-height: 750px;
			>.totalCoinUndape{
				margin-top: 24px;
				margin-bottom: 30px;
				>li{
					width:410px;
					height:90px;
					background-color:rgba(44, 31, 66, 1);
					padding-left: 25px;
					padding-top: 21px;
					border-radius:5px;
					>span.abso{
						width: 56px;
						height: 56px;
						right: 0;
						top:0;
						background-position: -384px -161px;
					}
				}
			}
			>.alldata{
				width:900px;
				height:214px;
				border-radius:5px;
				padding: 41px 130px 0;
				margin-bottom: 30px;
				box-shadow:6px 0px 32px rgba(187,187,187,0.39);
				>li{
					width: 33.33%;
					>.txt{
						display: inline-block;
						margin-bottom: 14px;
						color:rgba(102,102,102,1);
					}
					.info{
						color:rgba(42,46,77,1);
					}
					.win{
						color:rgba(6,222,42,1);
					}
					.lose{
						color:rgba(255,100,100,1);
					}
				}
			}
			>.inestmentCancas{
				width:900px;
				height:214px;
				background:rgba(44, 31, 66, 1);
				border-radius:5px;
				box-shadow:6px 0px 32px rgba(187,187,187,0.39);
				margin-bottom: 41px;
			}

		}
		

	}
</style>