<template>
  <div class="Register Warper">

  	<div v-show='inlogin' style="width: 100%;background-color: rgba(0,0,0,0.4);position: fixed;z-index: 20;" class="fullscreen" :style="{height:fullHeight + 'px'}">
  		<div class="mid white center">
  			<p class="tipsTitle">
  				<span>提示</span>
  				<span @click='inlogin = false' class="close abso cu lh" style="right:23px;top:5px;width:13px;height:13px;background-size:100%;"></span>

  			</p>
  			<p>为了您的账户安全，请设置邮箱和谷歌二次验证</p>
  			<button class="white fz16" >立即设置</button>
  		</div>
  	</div>

   	<div  class="HeaderInRegister bb Warper">
   		<header id="header" class=" flexB" >
   			<div class="logo ">
   				<a class="lh iconimg" href="jacascript:void(0)" title="BIGWINNER·DICE"></a>
   			</div>

   			<nav class="Nav">
				<ul class="flexB">
					<li class="fz14" v-for="(navItem , index) in ['认证','常见问题','简体中文']">{{navItem}}</li>
				</ul>
   			</nav>
   		</header>
   	</div>
   	<!-- /header -->

   	<section class="registerBody bb  Warper">
   		<section class="mid white bb register center">
   			<p class="fz28">欢迎来到BIGWINNER·DICE</p>
   			<p class="fz18 fb">采用比特币付费的公平骰子游戏</p>
   			<div class="inputBox">
   				<input type="text" class="bb" placeholder="请输入1开头的比特币地址" v-model="btcaddress" />
   				<div @click="startGame" class="fz14 startGame cu white abso">
   					开始游戏
   				</div>
   				<p class="tips fz14">继续使用该网站，我保证我已年满18岁，并了阅读 条款声明。</p>
   			</div>	

   			<div class="dayData bb flexB">
   				<div class="wins bb white" v-for="(hours , index) in [{title:'近24小时获胜',num:'80.86974130 BTC'},{title:'近24小时投注',num:'80.86974130 BTC'}]">
   					<p>{{hours.title}}</p>
   					<p>
   						<span class="lh iconimg" style="width:29px;height:24px;"></span>
   						<span class="fz20 fb">{{hours.num}}</span>
   					</p>
   				</div>
   				<!-- <div class="tou bb white">
   					<p></p>
   					<p>
   						<span class="lh iconimg" style="width:29px;height:24px;"></span>
   						<span class="fz20 fb">80.86974130 BTC</span>
   					</p>
   				</div> -->
   			</div>

   		</section>
   	</section>

   	<footer>
   		©2018 bigwinner All Rights Teserved
   	</footer>

  </div>
</template>

<script>
export default {
  data () {
    return {
    	fullHeight:'',
    	inlogin:false,//在登陆中..
    	btcaddress:'',//btc地址
    }
  },
  methods:{
  	startGame(){//开始游戏
  		if(!this.btcaddress){
  			alert('先填写地址开始游戏')
  			return
  		}
  		this.to('')

  	}
  },	
  mounted(){
  	this.fullHeight = document.documentElement.clientHeight
	window.onresize = () => this.fullHeight = document.documentElement.clientHeight
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.fullscreen{
		>.mid{
			width:610px;
			height:279px;
			background:rgba(42, 33, 60, 1);
			border-radius:5px;
			box-shadow:0px 0px 101px rgba(29,20,35,0.64);
			>.tipsTitle{
				margin-top: 21px;
				position: relative;
				margin-bottom: 76px;
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
			>button{
				margin-top: 56px;
				width:275px;
				height:50px;
				background:linear-gradient(90deg,rgba(244,0,241,1),rgba(196,63,113,1));
				border-radius:5px;
			}
		}
	}
	.Register{
		width: 100%;
		height: 100%;
		.HeaderInRegister{
			position: relative;
			z-index: 5;
			height:76px;
			// background:linear-gradient(148deg,rgba(15,23,45,1),rgba(48,43,99,1));
			background-color: #32284B;
			box-shadow:0px 0px 46px rgba(48,48,48,0.21);
			>#header{
				width:750px;
				height: 76px;
				margin: auto; 

				>.logo{
					width: 212px;
					height: 76px;
					>a{
						width: 212px;
						height: 76px;
					    background-position: -865px -52px;
					}
				}
				>nav{
					height: 76px;
					>ul{
						height: 76px;
						width: 222px;
						>li{
							height: 76px;
							line-height: 76px;
							color: rgba(144, 106, 162, 1);
						}
					}
				}
			}	
		}
		.registerBody{
			position: fixed;
			top:0;
			width: 100%;
			height: 100%;
			z-index: 2;
			background:linear-gradient(90deg,rgba(36,29,54,1),rgba(49,36,70,1),rgba(36,29,54,1));
			>.register{
				padding-top: 90px;
				width: 570px;
				height: 555px;
				>.fz28{
					margin-bottom: 10px;
				}
				>.fz18{
					margin-bottom: 76px;
				}
				>.inputBox{
					width:560px;
					height:54px;
					position: relative;
					z-index: 1;
					border-radius:5px;
					background:linear-gradient(90deg,rgba(244, 0, 241, 1),rgba(197, 62, 114, 1));	
					margin-bottom: 68px;
					>input[type=text]{
						width:558px;
						height:52px;
						background:rgba(37,28,52,1);
					    transform: translateY(1px);
					    border-radius:5px;
					    padding-left: 27px;
					    color:rgba(255,255,255, 1);
						&::placeholder{
							color:rgba(93, 88, 103, 1);
						}
					}
					>.startGame{
						width:98px;
						height:38px;
						background:linear-gradient(90deg,rgba(244,0,241,1),rgba(196,63,113,1));
						border-radius:5px;
						right: 12px;
						top:8px;
						line-height: 38px;
					}
					>.tips{
						color: rgba(223, 221, 225, 1);
						margin-top: 20px;
					}
				}
				>.dayData{
					width: 100%;
					height: 90px;
					margin-top: 150px;
					text-align: left;
					>.wins,.tou{
						width:263px;
						height:90px;
						background:rgba(65, 49, 93, 0.4);
						border-radius:5px;
						box-shadow:17px 0px 49px rgba(14,21,39,0.26);
						padding-left: 17px;
						padding-top: 18px;
						>p{
							margin-bottom: 10px;

						}
						span.lh{
							vertical-align:middle;
							background-position: -336px -74px;
						}
					}
				}
				

			}
		}
		footer{
			position: fixed;
			bottom: 12px;
			left: 50%;
			transform: translateX(-50%);
			color: rgba(76, 63, 96, 1);
			z-index: 10;
		}
	}
</style>
