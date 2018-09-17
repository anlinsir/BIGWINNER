<template>
  <div class="Index  Warper flexB">
   		<div class="  leftPart Warper">
   			<div class="warp ">
   				<ul class="flexB topChoose white bb">
   					<li @click="changeNav(index)" :class="navAvtice == index ? 'navactive' : '' " class="rela" v-for="(leftNav , index) in 2">
   						<span :class="index == 1 ? 'span2' : '' " class="mid cu lh iconimg"></span>
   					</li>
   				</ul>
   				<!-- left nav -->

   				<div class="rank" v-show="navAvtice == 0">
   					<ul class="top flexB">
   						<li @click="changeRankNav(index)" :class="rankNav == index ? 'white' : ''" class="center cu fz12" v-for="(rankItem , index) in ['最大下注额排行','最大盈利排行']">{{rankItem}}</li>
   					</ul>



   					 <transition
					    name="custom-classes-transition"
					    mode="out-in"
					    enter-active-class="animated bounceInLeft"
					    leave-active-class="animated bounceOutLeft"
					  >
	   					<ul v-show="rankNav == 0" class="rankList white ">
	   						<li v-for="(ii,index ) in 30" class="bb">
	   							<span v-if='index <= 2' class="lh" style="width:29px;height:29px;">d</span>
	   							<span class="lh fz12 center" v-if='index > 2' style="width:20px;height:20px;background:rgba(56,44,75,1);color:rgba(226,23,194,1);   line-height: 20px;border-radius:50%;margin-right:14px;">{{index + 1}}</span>
	   							<span>LucasBat</span>
	   							<span class="Right" style="color:rgba(65,68,103,1);margin-right:20px;">10.00256890 BTC</span>
	   						</li>
	   					</ul>
   					</transition>
   						<!-- 0000000000000000000000 -->
   						<transition
					    name=""
					    mode="out-in"
					    enter-active-class="animated bounceInLeft"
					    leave-active-class="animated bounceOutLeft"
					  >
   					<ul v-show="rankNav == 1" class="rankList white ">
   						<li v-for="(ii,index ) in 10" class="bb">
   							<span v-if='index <= 2' class="lh" style="width:29px;height:29px;">d</span>
   							<span class="lh fz12 center" v-if='index > 2' style="width:20px;height:20px;background:rgba(56,44,75,1);color:rgba(226,23,194,1);   line-height: 20px;border-radius:50%;margin-right:14px;">{{index + 1}}</span>
   							<span>LucasBat</span>
   							<span class="Right" style="color:rgba(65,68,103,1);margin-right:20px;">10.00256890 BTC</span>
   						</li>
   					</ul>
   				</transition>
   					<!-- 1111111111111111 -->

   				</div>
   				<!-- nav1 -->


   				<div class="statistics" v-show="navAvtice == 0">
   				</div>
   				<!-- nav2 -->


   			</div>
   		</div>
   		<!-- left -->

   		<div class="  rightPart Warper">
   			
			<div class="Header Warper">
				<div class="header rb warp">
					<div class=" cu  lh cionremaining white center">
						<span class="lh iconimg"></span>
						<span class="fz14 fb">0.25460880 BTC</span>
					</div>

					<div class="lh logo">
						<a class="lh iconimg" href='javascript:void(0)' title='BIGWINNER·DICE'></a>
					</div>

					<nav class="lh">
						<ul class="flexB">
							<li class="fz14 cu" v-for="(nav , index) in ['公平性','投资','分红']">{{nav}}</li>
						</ul>
					</nav>

					<div class="muse Right lh">
						<span class="lh cu iconimg"></span>
					</div>

				</div>
			</div>

			<div class="Throw Warper">
				<div class="throw rela warp rb">
					<div class="mid rb"></div>

				</div>
			</div>



   		</div>

  </div>
</template>

<script>
export default {
  data () {
    return {
    	navAvtice:0,
    	rankNav:0,
    }
  },
  methods:{
  	changeNav(index){//改变一级Nav
  		this.navAvtice = index
  	},
  	changeRankNav(index){//改变ranknav
  		this.rankNav = index
  	}

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

	.Index{
		width: 100%;
		height: 100%;
		.leftPart{
			width: 335px;
			min-height:1000px;
			>.warp{
				width: 335px;
				background-color: rgba(37, 24, 57, 1);
				min-height:1000px;
				>.topChoose{
					width: 100%;
					height: 86px;
					>.navactive{
						>.span2{
							background-position: -643px -75px !important;
						}
						>span{
							background-position: -576px -76px !important;
						}
					}
					>li{
						width: 50%;
						
						>.span2{
							background-position: -713px -75px;
							&:hover{
								background-position: -643px -75px;
							}

						}
						>span{
							background-position: -506px -76px;
							width: 23px;
							height: 23px;
							transition:all .5s;
							&:hover{
								background-position: -576px -76px;
							}
						}

					}
				}
				>.rank{
					>.top{
						margin-bottom: 20px;
						width:308px;
						margin: auto;
						height:44px;
						background:rgba(29,14,50,1);
						border-radius:5px;
						>.white{
							color: #fff;
						}
						>li{
							width: 50%;
							transition:all .51s;
							line-height: 44px;
							color:rgba(125,103,157,0.4);

						}
					}
					>.rankList{
						width: 100%;
						overflow: auto;
						height: 800px;
						>li{
							width: 100%;
							height: 75px;
							line-height: 75px;
							padding-left: 20px;
							border-bottom:1px solid rgba(29,18,47,1);
							font-size: 14px;
							color:rgba(134,138,172,1);
						}
					}
					.rankList::-webkit-scrollbar {
					    display: none;
					}
				}

			}

		}
		>.rightPart{
			width: 100%;
			height: 500px;
			>.Header{
				width: 	100%;
				background:linear-gradient(148deg,rgba(15,23,45,1),rgba(48,43,99,1));
				box-shadow:0px 0px 46px rgba(48,48,48,0.21);
				height: 76px;
				>.header{
					height: 76px;
					>.cionremaining{
						width:210px;
						vertical-align: top;
						height:40px;
						background:#2F2243;
						border-radius:5px;
						line-height: 40px;
						margin-top: 17px;
						margin-right: 143px;
						>.lh{
							width:22px;
							height:22px;

							margin-right: 5px;
							vertical-align: middle;
						    background-position: -783px -78px;
						}
					}
					>.logo{
						height: 76px;
						margin-right: 100px;
						>a{
							width: 212px;
							height: 76px;
							
							background-position: -866px -52px;
						}
					}
					>nav{
						width: 160px;
						height: 76px;
						vertical-align: top;
						>ul{
							width: 160px;
							height: 76px;
							>li{
								height: 76px;
								color:rgba(144,106,162,1);
								line-height: 76px;
							}
						}
					}
					>.muse{
						height: 76px;
						line-height: 76px;

						>span{
							width: 20px;
							vertical-align: middle;
							height: 20px;
							background-position: -54px -84px;
						}
					}
				}
			}
			>.Throw{
				background-blend-mode: darken,lighten;
				height: 600px;
				background:url('/static/img/block.png'),linear-gradient(to right,#241d36,#312446,#241d36);
				>.throw{
					height: 600px;
					>.mid{
						width: 540px;
						height: 500px;
					}

				}

			}
		}

	}
	
</style>
