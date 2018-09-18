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


   				<div class="statistics bb" v-show="navAvtice == 1">
   					<div class="alltime white">
   						<p class="center" style="margin-top:12px;">
   							<span class="fz14">实时统计</span>
   							<span class="iconimg lh"></span>
   						</p>


   						<canvas>dsdsdsd</canvas>
   					</div>

   					<ul class="totalpourUndwinNumber  bb flexB">
   						
   						<li v-for="(item , index) in [{type:'下注',num:'0.00860000'} , {type:'盈利',num:'0.01200000',color:'rgba(62,247,123,1)'} , ]" class="ceter white fz14"> 
   							<span style="color:rgba(125,103,157,1);margin-bottom:10px;" class=" lh">{{item.type}}</span><br>
   							<span :style="{color:item.color ? item.color : ''}" class="fb">{{item.num}}</span>
   						</li>
   					</ul>

   					<ul class="winLoseTimer bb center fz14 flexA white">
   						<li v-for="(item , index) in [{type:'赢',num:'25',color:'rgba(62,247,123,1)'} , {type:'输',num:'18',color:'rgba(255, 83, 83, 1)'} ,{type:'共投注',num:'43'}  ]" class="ceter white fz14"> 
   							<span style="margin-bottom:10px;" class=" lh">{{item.type}}</span><br>
   							<span :style="{color:item.color ? item.color : ''}" class="fb">{{item.num}}</span>
   						</li>
   					</ul>

   					<div class="oldto bb">
   						<p class="center white rela" >
   							<span class="fz14">过去的投注</span>
   							<span @click='diaplayone = false ; diaplayoneInyzInfo = false'  v-show='diaplayone' class="close cu abso lh" style="width:12px;height:12px;background-size:100%;top:6px;right:0;"></span>
   						</p>


   						<ul @click='diaplayone = true' v-show='!diaplayone' class="displayAll white flex wr">
   							<li class="cu" v-for="(old , index) in 20" style="color:rgb(255, 83, 83)">5</li>
   						</ul>
   						<!-- 展示所有 -->




   						<ul v-show='diaplayone' class="diaplayone">
   							<li v-for="(i,id) in 7" class="flexB fz14">
   								<span>投注号</span>
   								<span>#326589794321</span>
   							</li>

   							<li class="center">
   								<button @click='diaplayoneInyzInfo = true' class="white fz12">查看验证信息</button>
   							</li>

   							<li v-show='diaplayoneInyzInfo' class="abso fz14">
   								<p>
   									<span>服务器种子(散列)：</span><br>
   									<span>dd0023024629dc29344c3cbac28b8b16f42c6ce2ae73213b1fa8183ef868ac19</span>
   								</p>

   								<p>
   									<span>用户种子(NONCED)：</span><br>
   									<span>28372caf133ce0af - 9</span>
   								</p>
   								<p class="center">
   									<button @click='diaplayoneInyzInfo = false' class="white fz12">收起验证信息</button>
   								</p>
   							</li>
   							<!-- 显示验证信息 -->
   						</ul>
   						<!-- 展示一个详细的 -->
   					</div>
   				</div>
   				<!-- nav2 -->


   			</div>
   		</div>
   		<!-- left -->

   		<div class="  rightPart Warper">
   			
			<Header />

			<div class="Throw Warper" :style="{height: throwChoose ? '764px' : ''}">
				<div class="throw rela warp ">
					<div class="mid  rela" v-show='gameSet == false'>
						
						<ul class="throwTrigger flexB rela">
							<li :style="{left: throwChoose == 0 ? '0' : '270px'  }" class="throwChoose abso center">{{throwChoose == 0 ? '手动投注' : '自动投注'}}</li>
							<li @click="throwChoose =  index"  class="cu center fz16" v-for="(triggerItem , index) in ['手动投注','自动投注']">{{triggerItem}}</li>	
						</ul>
						<!-- 投注切换 -->
						<div class="rela throwNumber white">
							<p>投注金额</p>
							<input class="bb fz16 white" type="text"  value='0.02000000'	/>
							<div class="flexA abso spans">
								<span v-show="throwChoose == 1 ? (index == 0 || index == 1)  : true" class="lh cu fz12 center" v-for="(span , index) in ['1/2','2倍','最大']">{{span}}</span>
							</div>
							<span style="top:50px;left:110px;" class="fz18 bb abso white">BTC</span>

						</div>
						<!-- 点击改变数额 -->

						<div class="throwthreshold flexB white">
							<div class="winRate">
								<span class="lh fz">胜率</span><br>
								<input class="bb" type="text" value='32.51%'>
							</div>
							<!-- 胜率 -->

							<div class="range">
								dsd
							</div>
							<!-- range -->

							<div class="multiplying">
								<span class="lh fz">倍率</span><br>
								<input class="bb" type="text" value='2.5x'>
							</div>
							<!-- 倍率 -->
						</div>

						<div v-show='throwChoose == 0' class="throwTips rela fz18 white center">
							<span>投掷 小于32.51 可获得 0.02000000BTC</span>
							<span class="abso lh cu iconimg" style="background-position: -108px -73px;width:48px;background-color:rgba(41,31,57,1);height:33px;right:31px;top:11px;"></span>
						</div>

						<div v-show='throwChoose == 1' class="throwTips flex rela fz18 white center">
							<div class="tips bb fz16 rela">
								<span>投掷 小于32.51</span>
								<span class="abso lh cu iconimg" style="background-position: -108px -73px;width:48px;background-color:rgba(41,31,57,1);height:33px;right:31px;top:11px;"></span>
								
							</div>

							<div class="timer bb ">
								<span>投掷 5 次</span>
								<span class="abso lh flexB cu white fz3 lh0" style="width:112px;height:33px;background:rgba(41,31,57,1);border-radius:5px;right:31px;top:11px;">
									<span class="sub lh">-
									</span>
									<span class="add lh">+</span>
								</span>
							</div>
						</div>
						<!-- tips -->

						<div v-show='throwChoose == 1' class="throwTips flex rela fz18 white center">
							<div class="tips bb fz16 rela">
								<span>赢 增加：10%</span>
								<span class="abso lh cu iconimg" style="background-position: -168px -73px;width:48px;height:33px;right:11px;top:11px;"></span>
								
							</div>

							<div class="timer bb ">
								<span>输 增加：0%</span>
								<span class="abso lh cu iconimg" style="background-position: -168px -73px;width:48px;height:33px;right:11px;top:11px;"></span>
								<span v-show='!winloseShow' @click="winloseShow = true"  class="lh cu abso iconimg" style="width:58px;height:54px;background-color:rgba(33, 16, 56, 1);border-radius:5px;right: 0;top:0;right: calc(-18px + -58px);background-position: -233px -62px;"></span>
							</div>
						</div>
						<!-- 输赢增加 -->


						<div v-show='throwChoose == 1  && winloseShow' class="throwTips flex rela fz18 white center">
							<div class="tips bb fz16 rela">
								<span>止盈 1.00000000</span>
								<span class="abso lh cu iconimg" style="background-position: -1254px -74px;width:48px;height:33px;right:11px;top:11px;"></span>
								
							</div>

							<div class="timer bb ">
								<span>止损 1.00000000</span>
								<span class="abso lh cu iconimg" style="background-position:-1254px -74px;width:48px;height:33px;right:11px;top:11px;"></span>
								<span @click="winloseShow = false" class="lh cu abso iconimg" style="width:58px;height:54px;background-color:rgba(33, 16, 56, 1);border-radius:5px;right: 0;top:0;right: calc(-18px + -58px);background-position:-1114px -63px;"></span>
							</div>
						</div>
						<!--止盈止损 -->

						<button @click.self.prevent="start" class="fz18 rela white throwStart">
							<span>投 掷</span>
							<span @click='gameSet = true' class="lh abso iconimg" style=""></span>
						</button>

					</div>
					<!-- 游戏 -->

					<div class="mid  rela set" v-show='gameSet == true'>
						<div class="title center white fz16">游戏设置</div>

						<div class="switch fz16 bb white flexB">
							<span>音效</span>
							<span @click='dhengyinswi = !dhengyinswi'  class="lh cu rela" style="margin-top:20px;transition: all .5s;width:50px;height:22px;background:rgba(219, 33, 175, 1);border-radius:15px;" :style="{backgroundColor:dhengyinswi ? 'rgba(219, 33, 175, 1)' : 'rgba(255, 255, 255, 1)'}">
								<span  class="lh bb abso" style="transition: all .5s;width:18px;height:18px;background:rgba(255,255,255,1);border-radius:50%;top:2px;right:2px;" :style="{border:dhengyinswi ? '' : '1px solid #bbb',right: dhengyinswi ? '2px' : '29px'}"></span>
							</span>
						</div>
						<div class="switch fz16 bb white flexB s2">
							<span>热键</span>
							<span @click='hotswi = !hotswi'  class="lh cu rela" style="margin-top:20px;transition: all .5s;width:50px;height:22px;background:rgba(219, 33, 175, 1);border-radius:15px;" :style="{backgroundColor:hotswi ? 'rgba(219, 33, 175, 1)' : 'rgba(255, 255, 255, 1)'}">
								<span  class="lh bb abso" style="transition: all .5s;width:18px;height:18px;background:rgba(255,255,255,1);border-radius:50%;top:2px;right:2px;" :style="{border:hotswi ? '' : '1px solid #bbb',right: hotswi ? '2px' : '29px'}"></span>
							</span>
						</div>
						<!-- 开关 -->

						<ul class="hotTips flexB wr bb">
							<li>
								<span class="left center">空格</span>
								<span class="right">掷骰子</span>
							</li>
							<li>
								<span class="left center">H</span>
								<span class="right">押大(>)</span>
							</li>
							<li>
								<span class="left center">L</span>
								<span class="right">押小(<)</span>
							</li>
							
							<li>
								<span class="left center">A</span>
								<span class="right">划分金额</span>
							</li>
							<li>
								<span class="left center">S</span>
								<span class="right">多个数目</span>
							</li>
							<li>
								<span class="left center">D</span>
								<span class="right">最小数目</span>
							</li>
						</ul>

						<p style="padding:0 26px;color:rgba(79,68,106,1);line-height:24px;"  class="bb fz14 rela">
							<span>你可以使用以上快捷键方式来玩游戏。为防止误按，在弹出窗口打开时快捷键功能会关闭。</span>
							<span @click='gameSet = false' class="lh abso cu iconimg" style="width:58px;height:54px;background-color:rgba(37,28,52,1);border-radius:5px;right:calc(-18px + -58px);top:18px;background-position:-1114px -63px;"></span>
						</p>


					</div>
					<!-- 游戏设置 -->

				</div>
			</div>

			<!-- 投掷区域 -->

			<div class="datalist Warper">
				<div class="Warper" style="border-bottom:1px solid rgba(220,220,220,1);height:60px;">
					<div class="titles rela warp center flexB" style="height:60px;width:450px;color:rgba(150,150,150,1);line-height:60px;">
						<span @click='titleNavs = id' :class="titleNavs == id ? 'titleNav hover'+id : 'hover' + id " class="fz16 cu lh" style="width:33.33%;" v-for="(titleNav,id) in ['我的投注','所有投注','大额投注玩家']">{{titleNav}}</span>
						<span :style="{left :  titleNavs == 0 ? '30px' : titleNavs == 1 ? '181px' : '334px'}" class="lh abso line" style="width:88px;height:2px;background:linear-gradient(90deg,rgba(244,0,241,1),rgba(196,63,113,1));left: 30px;bottom:-1px;"></span>
					</div>
				</div> 

				<ul class="throwrecord warp">
					<li class="center title flexB fz14">
						<span v-for="(titles , index) in ['押注ID','时间','押注','倍率','游戏','掷骰','盈利']">{{titles}}</span>
					</li>

					<li class="center  flexB fz14" v-for="(item , index) in [
						{ id:'2354186' , time:'18:29' , dazhu:'0.00000400 ETH' , b:'1.20x' ,  gam : '高于 50.49' , t:'高于 50.49' , y: '0.00000400 BTC'} ,
						{ id:'2354186' , time:'18:29' , dazhu:'0.00000400 ETH' , b:'1.20x' ,  gam : '高于 50.49' , t:'高于 50.49' , y: '0.00000400 BTC'} ,
						{ id:'2354186' , time:'18:29' , dazhu:'0.00000400 ETH' , b:'1.20x' ,  gam : '高于 50.49' , t:'高于 50.49' , y: '0.00000400 BTC'} ,
						{ id:'2354186' , time:'18:29' , dazhu:'0.00000400 ETH' , b:'1.20x' ,  gam : '高于 50.49' , t:'高于 50.49' , y: '0.00000400 BTC'} ,
						{ id:'2354186' , time:'18:29' , dazhu:'0.00000400 ETH' , b:'1.20x' ,  gam : '高于 50.49' , t:'高于 50.49' , y: '0.00000400 BTC'} ,
						{ id:'2354186' , time:'18:29' , dazhu:'0.00000400 ETH' , b:'1.20x' ,  gam : '高于 50.49' , t:'高于 50.49' , y: '0.00000400 BTC'} ,
						{ id:'2354186' , time:'18:29' , dazhu:'0.00000400 ETH' , b:'1.20x' ,  gam : '高于 50.49' , t:'高于 50.49' , y: '0.00000400 BTC'} ,
						{ id:'2354186' , time:'18:29' , dazhu:'0.00000400 ETH' , b:'1.20x' ,  gam : '高于 50.49' , t:'高于 50.49' , y: '0.00000400 BTC'} ,

						
						]">
							<span>{{item.id}}</span>
							<span>{{item.time}}</span>
							<span>{{item.dazhu}}</span>
							<span>{{item.b}}</span>
							<span>{{item.gam}}</span>
							<span>{{item.t}}</span>
							<span>{{item.y}}</span>

						</li>


				</ul>
				
			</div>
				<!-- 透支记录列表 -->


			<Footer />
   		</div>

  </div>
</template>

<script>
	import Footer from '../components/footer'
	import Header from '../components/header'

export default {
	components:{
			Footer,
			Header
	},
  data () {
    return {
    	navAvtice:1,
    	rankNav:0,
    	throwChoose:0,
    	winloseShow:false,//止盈止损显示
    	diaplayone:true,//过去投注详情
    	diaplayoneInyzInfo:false,//过去投注详情验证信息
    	gameSet:true,//游戏设置
    	hotswi:true,//热键开关
    	dhengyinswi:false,//声音开关
    	titleNavs:0,//投注数据列表Nav
    }
  },
  methods:{
  	start(){//手动透支开始
  		console.log('byu')
  	},	
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
				background-color: rgba(37, 24, 57, 1);

			>.warp{
				width: 335px;
				background-color: rgba(37, 24, 57, 1);
				min-height:1568px;
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
				>.statistics{
					padding:  0 12px 0 15px;
					>.alltime{
						width:308px;
						height:225px;
						border-radius:5px;
						background-color: #211533;
					}
					>.totalpourUndwinNumber{
						height: 83px;
						padding-left: 10px;
						padding-right: 10px;
						padding-top: 18px;
						>li{
							width: 50%;
							text-align: center;
						}
					}
					>.winLoseTimer{
						margin-bottom: 20px;
						padding-top: 21px;
						margin-top: 16px;
						height:90px;
						border-radius:5px;	
						background-color: #211533;
						color:rgba(125,103,157,1);
					}
					>.oldto{
						width:308px;
						height:361px;
						border-radius:5px;
						background-color: #211533;
						padding:  20px 14px 0 18px;
						>p.center{
							margin-bottom: 33px;
						}

						>.displayAll{
							height: 244px;
							overflow: auto;
							
							>li{
								width: 44px;
								height: 44px;
								text-align: center;
								line-height: 44px;
								border-radius: 50%;
								background:rgba(41,26,64,1);
								margin-left: 22px;
								margin-bottom: 22px;
							}
							>:nth-child(4n){
								margin-left: 22px;
							}
						}
						.displayAll::-webkit-scrollbar {
						    display: none;
						}
						>.diaplayone{
							position: relative;
							>li{
								margin-bottom: 15px;
								color:rgba(125,103,157,1);
								    word-break: break-all;
							}
							>li.center{
								>button{
									width:180px;
									height:34px;
									background:rgba(50, 40, 75, 1);
									border-radius:5px;
								}
							}
							>li.abso{
								width: 100%;
								height: 100%;
								top:0;
								left:0;
								color:rgba(125,103,157,1);
								background-color: #211533;
								>p.center{
									>button{
										width:180px;
										height:34px;
										background:rgba(50, 40, 75, 1);
										border-radius:5px;
									}
								}
								>p{
									margin-bottom: 35px;
										line-height:24px;

									>span{
										display: inline-block;
										line-height:24px;
									}
								}

							}
						}

					}
				}

			}

		}
		>.rightPart{
			width: 100%;
			height: 500px;
			
			>.Throw{
				background-blend-mode: darken,lighten;
				height: 600px;
				background:url('/static/img/block.png'),linear-gradient(to right,#241d36,#312446,#241d36);
				transition:all .2s;
				>.throw{
					height: 600px;
					>.mid{
						width: 540px;
						height: 500px;
						>.throwTrigger{
							width: 100%;
							height: 54px;
							background:rgba(37,28,52,1);
							margin-bottom: 33px;
							border-radius:5px;	
							>li{
								transition:all .1s;
								width: 50%;
								height: 54px;

								position: relative;
								z-index: 2;
								color:rgba(144,106,162,1);
								line-height: 54px;
							}
							>.throwChoose{
								height: 54px;
								background:linear-gradient(90deg,rgba(244,0,241,1),rgba(196,63,113,1));
								border-radius:5px;
								color:#fff;
								line-height: 54px;
								left:0;
								z-index:3;
								position: absolute;
							}
						}
						>.throwNumber{
							margin-bottom: 29px;
							>p{
								margin-bottom: 14px;
							}
							>.spans{
								width:165px;
								height:33px;
								background:rgba(41,31,57,1);
								right: 16px;
								border-radius:5px;
								top:46px;
								>span{
									vertical-align: middle;
									height: 17px;
									width: 33.3%;
									margin-top: 8px;
									border-right: 1px solid rgba(19,20,35,0.26);
								}
							}
							>input{
								width:540px;
								height:54px;
								background:rgba(37,28,52,1);
								border-radius:5px;
								padding-left: 18px;
							}
						}
						>.throwthreshold{
							margin-bottom: 37px;
							span.lh{
								margin-bottom: 16px;
							}
							input[type=text]{
								width:118px;
								height:54px;
								background:rgba(37,28,52,1);
								border-radius:5px;
								color:#fff;
								transition:all 1s;
								font-size: 16px;
								text-align: center;
								&:focus{
									border:1px solid rgba(225, 11, 241, 1);
								}
							}
						}
						>.throwTips{
							width:540px;
							height:54px;
							background:rgba(37,28,52,1);
							line-height: 54px;
							border-radius:5px;
							margin-bottom: 37px;
							>div{
								width: 50%;
								text-align: left;
								box-sizing:border-box;
								padding-left: 18px;
							}
							>div.timer{
								>span.abso{
									>span.sub{
										position: relative;
										&::after{
											content: '';
											width: 1px;
											position: absolute;
											background:rgba(19,20,35,1);
											opacity:0.26;
											right: 0;
											top:8px;
											height: 17px;
										}
									}
									>span{
										width: 50%;
										line-height: 33px;
										font-size: 24px;
										text-align: center;
										
									}
								}
							}
							>div.tips{
								position: relative;
							 &::after{
							 	content:'';
							 	position: absolute;
							 	right: 0;
							 	width: 1px;
							 	height: 26px;
							 	top:14px;
							 	background:rgba(49,37,68,1);


							 }
							}

						}
						>.throwStart{
							width:540px;
							height:54px;
							background:linear-gradient(90deg,rgba(244,0,241,1),rgba(196,63,113,1));
							border-radius:5px;
							>span.lh{
								width:58px;
								height:54px;
								background-color:rgba(33, 16, 56, 1);
								border-radius:5px;
								right: 0;
								top:0;
								right: calc(-18px + -58px);
								    background-position: -1181px -66px;
							}
						}
					}
					>.set{
						width:540px;
						height:488px;
						background:rgba(37,28,52,1);
						border-radius:5px;
						>.title{
							width:540px;
							height:63px;
							background:linear-gradient(90deg,rgba(244,0,241,1),rgba(196,63,113,1));
							line-height: 63px;
							border-radius:5px;
						}
						>.switch{
							width: 100%;
							height: 60px;
							padding-left: 29px;
							padding-right: 23px;
							line-height: 60px;
							border-bottom: 1px solid rgba(44,34,62,1);
						}
						>.s2{
							margin-bottom: 35px;
						}
						>.hotTips{
							padding: 0 24px;
							margin-bottom: 8px;

							>li{
								width:238px;
								height:44px;
								background:rgba(50,40,75,1);
								border-radius:10px;
								box-sizing: border-box;
								margin-bottom: 19px;
								color: #fff;
							    display: flex;
							    font-size: 14px;
								justify-content: space-between;
								padding-left: 8px;
								padding-right: 18px;
								line-height: 44px;
								>.left{
									width:41px;
									line-height: 30px;
									height:30px;
									background:rgba(45,35,68,1);
									margin-top: 7px;
									border-radius:5px;
								}
							}
						}
					}

				}

			}
			>.datalist{
				.line{
					transition:all 1s;
				}
				// .hover0{


				// }
				// .hover2:hover + .line{
				// 	left:334px !important;
				// }
				// .hover2{

				// }
				.titleNav{
					font-weight:bold;
					color:rgba(40,43,49,1);
				}
				>.throwrecord{
					>li{
						height: 50px;
						line-height: 50px;
						color:rgba(150,150,150,1);
						>span{
							display: inline-block;
							width: 14.28%;
							font-size: 14px;
							text-align: center;
							font-weight: bold;
						}
					}
					>li.title{
						height: 60px;
						line-height: 60px;
						>span{
							width: 14.28%;
							font-weight: normal;


						}
						
					}
				}	
			}
		}

	}
	
</style>
	