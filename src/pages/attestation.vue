<template>
	<div class="attestation Warper">
		<Header />
		<div class="Content Warper">
			<div class="content flexB  warp">
				<ul class="left">
					<li @click="NavActive = index" :class="NavActive == index ? 'active' : '' " v-for="(nav , index) in ['认证','常见问题']">{{nav}}</li>
				</ul>



				<div class="right bb" v-show='NavActive == 0'>
					<p class="top">认证</p>
					<div class="pro">
						<p class="title">公平性</p>
						<p class="content">BIGWINNER提供顶最优质的认证系统，可以让我们的用户确认每一次掷骰的公正性，并确保过程不受人为操纵。我们的随机数是通过两个种子生成的，一个是服务器种子，另一个是您的用户种子。服务器种子是在您确认自己的用户种子之前生成的，这确保了生成的服务器种子不会偏向我们。它们一起，再加上一个随机一次性数字（种子对下注次数），可以生成在0-99.99范围内的可证实随机的骰子数。</p>
					</div>

					<div class="pro">
						<p class="title">种子</p>
						<p class="content">通过可证实公平按钮，用户可以更改和验证使用的种子。您可点击页面上方可验证公平按钮旁边的 "随机"按钮实现这一功能。在您选择自己的种子之前，页面会显示服务器所有SHA256散列，其中所有数字都可以与您选择的种子配对使用。更改用户种子时也会显示之前的服务器种子，您可以通过这一过程看到该服务器种子的确是您之前选择。-99.99范围内的可证实随机的骰子数。</p>
					</div>



					<div class="pro">
						<p class="title">骰子数</p>
						<p class="content">BIGWINNER使用多步过程生成一个在0-99.99之间的骰子数。用户种子、服务器种子和一个随机一次性数值会通过 hmac-sha512(server_seed, client_seed-nonce) 结合，生成一个十六位字符串。随机一次性数值是您使用当前种子对的下注次数。该字符串的前五位会被用来生成一个0-1,048,575之间的骰子数。如果这个数字大于999,999，那么系统将跳过这一组字符，重复这一步骤，直到生成的数值小于1,000,000。假如发生没有任何五位满足条件的小概率事件，那么将取99.99作为骰子数。生成的满足条件的数字会除以10^2，生成一个0-99.99之间的数字。</p>
					</div>


					<div class="pro">
						<p class="title">如何验证</p>
						<pre class="fz14" style="word-break:break-all;">
							//the seed pair itself
var clientSeed = "your client seed"; //dont forget to exclude the dash and the nonce!
var serverSeed = "your server seed";

//bet made with seed pair (excluding current bet)
var nonce      = 0;

//crypto lib for hmac function
var crypto = require('crypto');

var roll = function(key, text) {

    //create HMAC using server seed as key and client seed as message
    var hash = crypto.createHmac('sha512', key).update(text).digest('hex');

    var index = 0;

    var lucky = parseInt(hash.substring(index * 5, index * 5 + 5), 16);

    //keep grabbing characters from the hash while greater than
    while (lucky >= Math.pow(10, 6)) {
        index++;

						</pre>		
					</div>


				</div>


				<div class="right bb" v-show='NavActive == 1'>
					<p class="top">常见问题 FAQ</p>
					<div class="pro">
						<p class="title">什么是BIGWINNER?</p>
						<p class="content">
							<span class="lh" style="margin-bottom:20px;"> BIGWINNER是世界上无可争议的最受欢迎和值得信赖的比特币游戏！在过去的5年中，我们为超过一百万的用户提供了一种可靠，快速，简单的方式来玩他们的硬币。</span><br>
							<span>游戏很简单，你进入一个赌注，选择支付或赢得机会，并打骰子掷骰子。点击滚动后，会产生一个公平的掷骰子滚动，如果该数字落在您的绿色赢区域内，您将赢得该赌注。准备好了吗？没有最低限度的赌注，尝试从水龙头中索取一些免费的硬币，以便一气呵成！</span>
						</p>
					</div>


					<div class="pro">
						<p class="title">什么是房子边缘？</p>
						<p class="content">
							<span class="lh" style="margin-bottom:20px;">  再Bdice上滚动的房屋边缘只有1％（RTP 99％）。</span><br>
							<span>这个行业的低端优势为用户提供了一个合理的赚钱机会，而不像真正的金钱赌场，它的边缘高达15％或更高。由于信用卡和电线费用以及欺诈费用，“真钱”赌场根本无法承受这么低的优惠。我们能够将这些积蓄传递给我们的玩家，并提供最明智的赌博方式。</span>
						</p>
					</div>

					<div class="pro">
						<p class="title">什么是BIGWINNER?</p>
						<p class="content">
							<span class="lh" style="margin-bottom:20px;"> BIGWINNER是世界上无可争议的最受欢迎和值得信赖的比特币游戏！在过去的5年中，我们为超过一百万的用户提供了一种可靠，快速，简单的方式来玩他们的硬币。</span><br>
							<span>游戏很简单，你进入一个赌注，选择支付或赢得机会，并打骰子掷骰子。点击滚动后，会产生一个公平的掷骰子滚动，如果该数字落在您的绿色赢区域内，您将赢得该赌注。准备好了吗？没有最低限度的赌注，尝试从水龙头中索取一些免费的硬币，以便一气呵成！</span>
						</p>
					</div>


					<div class="pro">
						<p class="title">什么是房子边缘？</p>
						<p class="content">
							<span class="lh" style="margin-bottom:20px;">  再Bdice上滚动的房屋边缘只有1％（RTP 99％）。</span><br>
							<span>这个行业的低端优势为用户提供了一个合理的赚钱机会，而不像真正的金钱赌场，它的边缘高达15％或更高。由于信用卡和电线费用以及欺诈费用，“真钱”赌场根本无法承受这么低的优惠。我们能够将这些积蓄传递给我们的玩家，并提供最明智的赌博方式。</span>
						</p>
					</div>

				</div>

			</div>
		</div>



		<div class="center warp">
			<button class="white fz16">返回游戏</button>
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
			})
		},
		components:{
			Footer,
			Header
		}
	}
</script>


<style scoped lang="scss">
	button{
	width:275px;
	height:50px;
	background:linear-gradient(90deg,rgba(244,0,241,1),rgba(196,63,113,1));
	border-radius:5px;
	margin-bottom: 45px;
	}
	.Content{
		min-height: 1000px;
		margin-bottom: 45px;
		>.content{
			box-shadow:3px 5px 59px 0px rgba(136,136,136,0.14);
			min-height: 1000px;
			margin-top: 42px;
			>.left{
				width:228px;
				background:rgba(246,246,246,0.5);
				
				>li{
					width: 100%;
					height: 74px;
					line-height: 74px;
					text-align: center;
					color:rgba(77,77,77,1);
				}
				>.active{
					background-color: #fff;
					position: relative;
					&::after{
						content: '';
						position: absolute;
						z-index: 5;
						width:3px;
						height:75px;
						background:linear-gradient(180deg,rgba(244,0,241,1),rgba(196,63,113,1));
						border-radius:5px;
						left:0;
						top:0;
					}
				}
			}
			>.right{
				width: 668px;
				padding-left: 37px;
				padding-right: 47px;
				padding-top: 28px;
					>.top{
						color:rgba(55,55,55,1);
						font-size:20px;
						margin-bottom: 42px;

					}
				.pro{
					margin-bottom: 46px;
					
					>.title{
						font-weight:bold;
						margin-bottom: 18px;
						color:rgba(219,33,175,1);
						font-size:16px;
					}
					>.content{
						font-size:14px;
						color:rgba(51,51,51,1);
						line-height:30px;
					} 
				}
			}
		}
			
	}
</style>