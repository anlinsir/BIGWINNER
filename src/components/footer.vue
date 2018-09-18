<template>
  <div class="Footer rela Warper">

  		<div class="abso" style="width:100%;height:1px;background:linear-gradient(180deg,rgba(49,36,70,1),rgba(36,29,54,1));top:43%;"></div>
   		<div class="footer bb warp">
   				<ul	class='statisticalData flexB'>
   					<li v-for="(i,id) in 2" class="white ">
   						<span class="fz14 lh" style="margin-bottom:14px;">累计奖池</span><br>
   						<span class="fz20 fb">
   							<span class="iconimg lh" style="width:29px;height:24px;background-position: -336px -74px;    vertical-align: middle;"></span>
   							<span>320.86974130 BTC</span>
   						</span>
   					</li>

   					<li class="white ">
   						<span class="fz14 lh" style="margin-bottom:14px;">24小时内最大赢家</span><br>
   						<span class="fz20 fb">
   							<span class="lh" style="margin-right:45px;">7.86BTC</span>
   							<span class="">
   								<span class="lh iconimg" style="width:26px;height:26px;border-radius:50%;background-position: -420px -72px; vertical-align: middle;margin-right:5px;"></span>
   								<span style="color:rgba(219,33,175,1);">rowan</span>
   							</span>
   						</span>
   					</li>
   				</ul>



   				<ul class="webinfo bb flexA">
   					<li class="asweb">
   						<p class="title">关于网站</p>
   						<p>认证</p>
   						<p>常见问题</p>
   						<p>ENGLISH</p>
   					</li>

   					<li class="asweb">
   						<p class="title">友情链接</p>
   						<p>BIGWINNER</p>
   						<p>子奇科技</p>
   						<p>大赢家</p>
   					</li>
   					<li class="asweb">
   						<p class="title">关于网站</p>
   						<p>TELEGRAM</p>
   						<p>facebook</p>
   						<p>TWITTER</p>
   					</li>

   					<li class="asweb" style="text-align:left;">
   						<p class="title">更多服务</p>
   						<p>服务邮箱：service@bigwinner.com</p>
   						<p>业务邮箱：info@bigwinner.com</p>
   					</li>



   				</ul>

   				<p class="center fz14" style="margin-top:10px;color:rgba(65,51,85,1);">©2018 bigwinner All Rights Teserved</p>
   		</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.Footer{
		height:371px;
		background:linear-gradient(0deg,rgba(35,26,55,1),rgba(52,25,88,1),rgba(41,27,63,1));
		>.footer{
			height:371px;
			padding-top: 40px;
			>.statisticalData{
				margin-bottom: 37px;
				>li{
					width:275px;
					height:90px;
					background:rgba(33, 16, 56, 1);
					border-radius:5px;
					box-shadow:17px 0px 49px rgba(14,21,39,0.26);
    				box-sizing: border-box;
    				padding-left: calc(6px + 19px);
					position: relative;
					padding-top: 10px;
					&::after{
						content: '';
						position: absolute;
						left: 0;
						top:0;
						width:6px;
						height:90px;
						background:linear-gradient(180deg,rgba(244,0,241,1),rgba(196,63,113,1));

					}
				}
			}
			>.webinfo{
				>li{
					color:rgba(97,74,115,1);
					font-size:14px;
					margin-top: 20px;
					text-align: center;
					>.title{
						color:rgba(128,92,145,1);
						
						margin-bottom: 21px;
					}
					>p:not(.title){
						text-decoration: underline;
						margin-bottom: 16px;
						cursor: pointer;
					}
				}
				>.asweb{

				}
			}

		}
	}
</style>
