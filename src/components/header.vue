<template>
 <div class="Header Warper">
 	<div class="walleWarp white" v-show='walletDis'>
 		<div class="mid bb" :style="{left:midLeft}">
 			<ul class="flexB white bb myWalle">
 				<li>
 					<span class="fz14">我的资产(Bitcoin)</span><br>
 					<span class="fz26 fb">
 						<span>0.56248000</span>
 						<span class="fz14">BTC</span>
 					</span>
 				</li>	
 				<li class="choose flexB">
 					<span class="lh cu" v-for="(item , index) in [ { img:'-54px -173px' ,  name: '充值' } , { img:'-54px -173px' ,  name: '提现' } , { img:' -54px -173px' ,  name: '划转' } ,  ] ">
 						<span class="iconimg lh" style="width:38px;height:38px;    transform: translateX(-6px);" :style="{backgroundPosition:item.img}"></span><br>
 						<span class="fz12">{{item.name}}</span>
 					</span>

 				</li>
 			</ul>

 			<div  class="bb transactionRecord">
 				<p v-show="walleType == 'list' " class="titler fz16">
 					<span class="Left">账户交易记录</span>
 					<span class="Right lh">全部记录</span>
 				</p>

 				<p v-show="walleType == 'recharge'" class="fz16 white">充值</p>
 				<p v-show="walleType == 'withdraw'" class="fz16 white">提现</p>
 				<p v-show="walleType == 'transfer'" class="fz16 white">划转</p>



 				<ul class="transactionRecordList" v-show="walleType == 'list' ">
 					<li class="bb" v-for="(ii,id) in 6">
 						<span class="white lh" style="margin-right:10px;">充值</span>
 						<span style="color:rgba(219,33,175,1);">0.00050000 BTC</span>
 						<span class="Right" style="color:rgba(255,255,255,0.2);">今天 04:23:09</span>
 					</li>
 				</ul>
 				<!-- list -->
 				<div class="rechargeShow" v-show="walleType == 'recharge'">
 					<div class="address bb flexB fz14 white">
 						<span style="opacity:0.2;">您的BTC存款地址</span>
 						<span>34iEByWNHm75187esZybUcXQ8KWZ5qSDTX </span>
 					</div>
 					<div class="reCode center">
 						<span class="lh">
 							<img src="/static/img/e.png" alt="" style="width:100%;height:100%;">
 						</span><br>
 						<button class="white fz16">复制地址</button>
 					</div>
 				</div>
 				<!--recharge  -->

 				<div class="withdraw" v-show="walleType == 'withdraw'">
 					<div class="address bb flexB fz14 white">
 						<span style="opacity:0.2;">您的BTC存款地址</span>
 						<span>34iEByWNHm75187esZybUcXQ8KWZ5qSDTX </span>
 					</div>
 					<div class="address bb flexB fz14 white">
 						<span >
 							<input style="background:none;height:40px;color:rgba(255,255,255,0.2)" class="bb fz14" placeholder="55" type="" name="">
 						</span>
 						<span>0.20 BTC </span>
 					</div>
 					<div class="address bb flexB fz14 white">
 						<span >
 							<input style="background:none;height:40px;color:rgba(255,255,255,0.2)" class="bb fz14" placeholder="55" type="" name="">
 						</span>

 						<span>896521 </span>
 					</div>

						<div class="reCode center">
 						<button class="white fz16" style="margin-bottom:16px;">提 现</button><br>
 						<span class="white fz14" style="color:rgba(103,99,110,1);">提现过程中将产生0.0030BTC手续费</span>
 					</div>
 					

 				</div>

 				<!--withdraw  -->

 				<div class="transfer" v-show="walleType == 'transfer'">
 					<div class="address bb flexB fz14 white">
 						<span style="opacity:0.2;">您的BTC存款地址</span>
 						<span>34iEByWNHm75187esZybUcXQ8KWZ5qSDTX </span>
 					</div>

 					<div class="address bb flexB fz14 white">
 						<span >
 							<input style="background:none;height:40px;color:rgba(255,255,255,0.2)" class="bb fz14" placeholder="55" type="" name="">
 						</span>
 						<span>0.20 BTC </span>
 					</div>
 					

						<div class="reCode center">
 						<button class="white fz16" style="margin-bottom:16px;">提 现</button><br>
 						<span class="white fz14" style="color:rgba(103,99,110,1);">提现过程中将产生0.0030BTC手续费</span>
 					</div>
 					

 				</div>
 				<!-- transfer -->
 				<!-- <el-pagination
 				style="background: transparent;"
				  :page-size="20"
				  :pager-count="11"
				  layout="prev, pager, next"
				  :total="1000">
				</el-pagination> -->
 			</div>

 		</div>
 	</div>
 	<el-dialog :visible.sync="walletDis" width="0" :show-close='false' :custom-class="'walleWarp'"></el-dialog>
 	<!-- 钱包 -->

 	<div class="hydrant white" v-show='hydrantDis'>
 		<div v-show='false' class="mid center"  :style="{left:midLeft}">
 			<p class="tipsTitle center">提示
 				<span @click='hydrantDis = false' class="close abso cu lh" style="right:23px;top:5px;width:13px;height:13px;background-size:100%;"></span></p>
 			<div class="address bb flexB fz14 white">
				<span >
					<input style="background:none;height:40px;color:rgba(255,255,255,0.2)" class="bb fz14" placeholder="55" type="" name="">
				</span>
				<span>0.20 BTC </span>
			</div>
 			<button class="fz16 white">领 取</button><br>
 			<span class="fz14 " style="color:rgba(103,99,110,1);">（水龙头滥用将禁止使用）</span>
 		</div>


 		<div class="mid center">
 			<p class="tipsTitle center">水龙头
 				<span @click='hydrantDis = false' class="close abso cu lh" style="right:23px;top:5px;width:13px;height:13px;background-size:100%;"></span></p>
 			<p class="white fz16" style="margin:60px 0 10px 0;">账户为0才能使用水龙头！</p>
 			<button class="fz16 white">领 取</button><br>
 			<span class="fz14 " style="color:rgba(103,99,110,1);">（水龙头滥用将禁止使用）</span>
 		</div>
 	</div>
 	<el-dialog :visible.sync="hydrantDis" width="0" :show-close='false' :custom-class="'walleWarp'"></el-dialog>
 	<!-- 水龙头显示2 -->


 	<div class="systemMsg white" v-show='systemMsg'>
 		<div class="mid"  :style="{left:midLeft}">
 			<p class="tipsTitle center">系统消息
 				<span @click='hydrantDis = false' class="close abso cu lh" style="right:23px;top:5px;width:13px;height:13px;background-size:100%;"></span></p>

 			<ul class="systemList bb">
 				<li class="bb fz14" v-for="(item,index) in 7">
 					<span class="lh pointer"></span>
 					<span class="Left ">BIGWINNER手机版已上线，欢迎使用!</span>
 					<span class="Right" style="opacity:0.2;">今天 04:23:09</span>
 					<span class="delate lh iconimg"></span>
 				</li>
 			</ul>

 		</div>
 	</div>
 	<el-dialog :visible.sync="systemMsg" width="0" :show-close='false' :custom-class="'walleWarp'"></el-dialog>
	<!-- 系统消息2 -->
	
	<div class="statisticser white" v-show='statisticserShow'>
		<div class="mid"  :style="{left:midLeft}">
			<p class="tipsTitle center">统计
 				<span @click='hydrantDis = false' class="close abso cu lh" style="right:23px;top:5px;width:13px;height:13px;background-size:100%;"></span></p>

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


 			<ul class="flexB bb touzhicouunt">
 				<li class="li1 bb">
 					<p>
 						<span class="Left">总投注</span>
 						<span class="Right">450 次</span>
 					</p><br>
 					<p>
 						<span class="Left">总赢</span>
 						<span class="Right"><span style="color:rgba(62,247,123,1);">450</span> 次</span>
 					</p><br>
 					<p>
 						<span class="Left">总输</span>
 						<span class="Right"><span style="color:rgba(255,83,83,1);">320</span> 次</span>
 					</p>
 				</li>
 				<li class="li2 bb" style="height:121px;">
 					<p>
 						<span class="Left">几率</span>
 						<span class="Right">60%</span>
 					</p><br>
 					<p>
 						<span class="Left">加入时间</span>
 						<span class="Right">2018-09-13</span>
 					</p>
 					

 				</li>

 			</ul>

		</div>
	</div>
 	<el-dialog :visible.sync="statisticserShow" width="0" :show-close='false' :custom-class="'walleWarp'"></el-dialog>
 	<!-- 统计 -->

 	<div class="justice white" v-show='justice'>
		<div v-show='false' class="mid"  :style="{left:midLeft}">
			<p class="tipsTitle center">公平性
 				<span @click='hydrantDis = false' class="close abso cu lh" style="right:23px;top:5px;width:13px;height:13px;background-size:100%;"></span></p>

 			<p class="justtice fz14 bb">BIGWINNER使用了十分简便的投注认证系统。在投注之前服务器种子会被散列和展示出来，用户可以选择任何一个种子。服务器种子在浏览器中显示时会以颜色进行标注，这样一来您就能方便地分辨出看到的种子是否是一样的了。更多信息…</p>

 			<p class="center">
 				<button class="white bb fz16" style="margin-bottom:25px;">更换种子</button>
 			</p>

 			<ul class="sends bb flexB">
 				<li class="bb">
 					<p style="color:rgba(219,33,175,1);margin-bottom:23px;" class="fz14">以往种子配对</p>

 					<p class="white fz14" style="margin-bottom:26px;">
 						<span class="lh" style="opacity:0.4;margin-bottom:6px;">用户种子：</span><br>
 						<span >不可用</span>
 					</p>

 					<p class="white fz14" style="margin-bottom:26px;">
 						<span class="lh" style="opacity:0.4;margin-bottom:6px;">服务器种子：</span><br>
 						<span >不可用</span>
 					</p>
 					<p class="white fz14" style="margin-bottom:26px;">
 						<span class="lh" style="opacity:0.4;margin-bottom:6px;">服务器种子sha-256散列：</span><br>
 						<span >不可用</span>
 					</p>


 				</li>
 				<li class="bb">
 					<p style="color:rgba(219,33,175,1);margin-bottom:23px;" class="fz14">当前种子对</p>

 					<p class="white fz14" style="margin-bottom:20px;">
 						<span class="lh" style="opacity:0.4;margin-bottom:6px;">用户种子：</span><br>
 						<span >28372caf133ce0af</span>
 					</p>

 					<p class="white fz14" style="margin-bottom:20px;">
 						<span class="lh" style="opacity:0.4;margin-bottom:6px;">服务器种子sha-256散列：</span><br>
 						<span >dd0023024629dc29344c3cbac28b8b16f42c6ce2ae73213b1fa8183ef868ac19</span>
 					</p>
 					<p class="white fz14" style="margin-bottom:20px;">
 						<span class="lh" style="opacity:0.4;margin-bottom:6px;">由配对进行的押注：</span><br>
 						<span >556</span>
 					</p>
 				</li>

 			</ul>


 			<div class="inputBox bb">
   				<p class="tips white fz14" style="margin-bottom:10px;">
   					<span class="fz16">查询押注</span>
   					<span class="fz14" style="margin-left:10px;opacity:0.2;">您可以通过查询押注来确认以往投掷的公正性。</span>
   				</p>

   				<input type="text" class="bb" placeholder="请输入1开头的比特币地址" />
   				<div  class="fz14 startGame center cu white abso">
   					查询
   				</div>
   			</div>	
		</div>
		<!-- 显示种子 -->
		<div class="mid changSend"  :style="{left:midLeft}">
			<p class="tipsTitle center">更换种子
				<span  class=" abso cu lh" style="left:23px;top:2px;width:13px;height:13px;background-size:100%;">
					<img src="/static/img/right_arrow.png" >
				</span>
				<span @click='hydrantDis = false' class="close abso cu lh" style="right:23px;top:5px;width:13px;height:13px;background-size:100%;"></span>
			</p>


			<div class="nowSend center bb  divsend">
				<p>当前服务器种子散列</p>
				<input class="center" type="text" disabled value='66e73ece44bb7d69662c05253c80727c325f02d9ccd05809fd0723e37b13c50'>
			</div>

			<div class="nowSend center bb  divsend">
				<p>下一个服务器种子散列</p>
				<input class="center" type="text" disabled value='09f23a86b19786441eec6e1591c7ab2f6c571793e918c02a29641623f527407'>
			</div>

			<div class="nowSend center bb  divsend">
				<p>新用户种子</p>
				<input class="center" type="text" disabled value='864530105978451'>
			</div>

			<div class="nowSend center bb  divsend">
				<button class="white fz16">确认更换</button>
			</div>



		</div>
		<!-- 更换种子 -->
	</div>
 	<el-dialog :visible.sync="justice" width="0" :show-close='false' :custom-class="'walleWarp'"></el-dialog>
	<!-- 公平性 -->
	<div class="userSet white" v-show='userSet'>
		
		<div class="mid bb"  :style="{left:midLeft}">
			<div class="titleNav flexA  rela">
				<span @click='userSetNav = index' class="lh cu" v-for="(nav , index) in ['账号设置','谷歌二次验证']">{{nav}}</span>
				<span @click='hydrantDis = false' class="close abso cu lh" style="right:23px;top:25px;width:13px;height:13px;background-size:100%;"></span>
			</div>

			<div class="navss" v-show='userSetNav == 0' >
				<div class="address bb flexB fz14 white">
					<span >
						<input style="background:none;height:40px;color:rgba(255,255,255,0.2)" class="bb fz14" placeholder="用户ID" type="" name="">
					</span>
					<span>214896</span>
				</div>

				<div class="address bb flexB fz14 white">
					<span >
						<input style="background:none;height:40px;color:rgba(255,255,255,0.2)" class="bb fz14" placeholder="比特币地址" type="" name="">
					</span>
					<span>16WtFDfiwn79ZAq61E9ZkF1XQti4iyzBmc</span>
				</div>

				<div class="address bb flexB fz14 white">
					<span >
						<input style="background:none;height:40px;color:rgba(255,255,255,0.2)" class="bb fz14" placeholder="邮箱" type="" name="">
					</span>
					<span>请输入邮箱地址……</span>
				</div>

				<div class="center">
					<button class="white fz16">保存设置</button>
				</div>
			</div>

			<div class="navss" v-show='userSetNav == 1' >
				<p class="fz14 center">
					<span class="white lh" style="margin-bottom:10px;">扫描或将该密码输入/复制到您的认证器应用中： </span>
					<span style="color:rgba(219, 33, 175, 1);">EFDTGQ2VFE4HSTJZLV2FCNCHGAWCU6KSOERTCKDY</span>
				</p>
				<div class="center imgsss">
					<img src="/static/img/e.png" >
				</div>




				<div class="address bb flexB fz14 white">

					<span >
						<input style="background:none;height:40px;color:rgba(255,255,255,0.2)" class="bb fz14" placeholder="二次验证码" type="" name="">
					</span>
					<span>请输入二次验证码……</span>
				</div>

				

				<div class="center">
					<button class="white fz16">启用</button>
				</div>
			</div>

		</div>
	</div>
 	<el-dialog :visible.sync="userSet" width="0" :show-close='false' :custom-class="'walleWarp'"></el-dialog>
 	<!-- 设置 -->
	<div class="touzibefore white" v-show='touzibefore'>
		
		<div class="mid bb"  :style="{left:midLeft}">
				<p class="tipsTitle center">投资
 				<span class="close abso cu lh" style="right:23px;top:5px;width:13px;height:13px;background-size:100%;"></span></p>

 				<p class="white dz16 center" style="margin:20px 0;margin-top:77px;">投资后才可查看投资详情！ 查看投资说明</p>

				<div class="center">
					<button class="white fz16">立即投资</button>
				</div>
			</div>

	</div>
 	<el-dialog :visible.sync="touzibefore" width="0" :show-close='false' :custom-class="'walleWarp'"></el-dialog>
 	




	<div class="header  warp">
		<div class=" cu  lh cionremaining white center">
			<span class="lh iconimg"></span>
			<span class="fz14 fb">0.25460880 BTC</span>
		</div>

		<div class="lh logo">
			<a class="lh iconimg" href='javascript:void(0)' title='BIGWINNER·DICE'></a>
		</div>

		<nav class="lh">
			<ul class="flexB">
				<li @click="rightNav(index)" class="fz14 cu" v-for="(nav , index) in ['公平性','投资','分红']">{{nav}}</li>
			</ul>
		</nav>

		<div  class="muse rela Right lh">
			<span @click="miseShow = !miseShow" class="lh cu iconimg"></span>
			<div :style="{height:miseShow ? '350px' : '0'}" class="museMOre abso center">
				<div class="username white " >
					<span @click='userSet = true' class="lh" style="    transform: translateY(1px) translateX(-12px);">
						<img src="/static/img/userSet.png" >
					</span>
					<span class="fz14 fb">ID:26U98T0</span>
					<span class="lh " style="transform: translateY(2px) translateX(12px)">
						<img src="/static/img/logOut.png" >
						
					</span>
				</div>
				<ul class="otherList white fz14 bb">
					<li @click="useSome(index)" :class="museAvtive == index  ? 'museAvtive' : '' "  class="cu" v-for="(muse , index ) in ['钱包','水龙头','系统消息','统计','邀请好友']">{{muse}}</li>
				</ul>
			</div>
		</div>

	</div>
</div>
</template>

<script>
export default {
  data () {
    return {
      	museAvtive:0,//菜单移动
      	miseShow:false,//菜单显示
      	fullscreen:'',//全屏显示
      	 walletDis: false,
      	 walleType:'list',//钱包显示内容
      	 hydrantDis:false,//水龙头显示2
      	 systemMsg:false,//系统消息显示 
      	 statisticserShow:false,//统计显示
      	 justice:false,//公平性显示
      	 userSet:false,//用户设置先关
      	 userSetNav:0,//用户设置nav，
      	 touzibefore:false,//判断是否投资,
      	 midLeft:'34vw',//mid位置
    }
  },
  methods:{
  	rightNav(index){//
  		if(index == 0){
  			this.justice = true
  		}else if(index == 1){

  		}

  	},
  	useSome(index){//做xxx
  		this.museAvtive = index	
  		if(index == 0){
  			this.walletDis = true
  		}else if(index == 1){
  			this.hydrantDis = true
  		}else if(index == 2 ){
  			this.systemMsg = true
  		}else if(index == 3 ){
  			this.statisticserShow = true
  		}
  	}
  },
  mounted(){
	  	this.fullscreen = document.documentElement.clientHeight
		window.onresize = () => this.fullscreen = document.documentElement.clientHeight
		if(this.$route.name == 'Index'){
			this.midLeft = '18vw'
		}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


.walleWarp,.hydrant,.systemMsg,.statisticser,.justice,.userSet,.touzibefore{
		position: fixed;
		z-index: 3000;
		button{
			width:275px;
			height:50px;
			background:linear-gradient(90deg,rgba(244,0,241,1),rgba(196,63,113,1));
			margin-top: 30px;
			border-radius:5px;
		}
	>.mid,.changSend{
		left:34vw;
		top:50vw ;
		width:610px;
		height:658px;
		background:rgba(42, 33, 60, 1);
		border-radius:5px;
		padding: 25px 22px 0 22px;
		box-shadow:0px 0px 101px rgba(29,20,35,0.64);
		>.myWalle{
			width:567px;
			padding-top: 22px;
			height:96px;
			background:linear-gradient(90deg,rgba(244,0,241,1),rgba(196,63,113,1));
			padding-left: 26px;
			margin-bottom: 45px;
			border-radius:5px;
			padding-right: 24px;
			box-shadow:6px 0px 35px rgba(223,28,185,0.39);
			>li.choose{
				width: calc(38px + 150px);
			}
		}
		>.transactionRecord{
			>p{
				height: 30px;
				margin-bottom: 27px;
				>span.lh{
					width:90px;
					height:32px;
					background:rgba(36,28,52,1);
					border-radius:5px;
					font-size: 14px;
					line-height: 32px;
					text-align: center;
				}
			}
			>.transactionRecordList{
				>li{
					width:567px;
					height:50px;
					font-size: 14px;
					line-height: 50px;
					background:rgba(45, 36, 64, 1);
					padding: 0 23px 0 17px;
					margin-bottom: 15px;
					border-radius:5px;
					box-shadow:6px 0px 24px rgba(39,31,56,0.06);
				}
				>:nth-last-child(1){
				}
			}
			>.rechargeShow,.withdraw,.transfer{
				>p{
					height: 30px;
					margin-bottom: 27px;
				}
				>.address{
					width:567px;
					line-height: 50px;
					height:50px;
					background:rgba(37,28,52,1);
					margin-bottom: 26px;
					padding: 0 22px;
					border-radius:5px;
				}
				>.reCode{
					>.lh{
						width: 130px;
						height: 130px;
					}
					button{
						width:275px;
						height:50px;
						background:linear-gradient(90deg,rgba(244,0,241,1),rgba(196,63,113,1));
						margin-top: 30px;
						border-radius:5px;
					}
				}
			}
		}
	}

}
.hydrant,.systemMsg,.statisticser,.justice,.userSet,.touzibefore{
	>.mid,.changSend{
		width:610px;
		height:279px;
		padding: 0;
		button{
			margin-bottom: 10px;
		}
		>.tipsTitle{
			margin-top: 21px;
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
	}
}
.systemMsg{
	>.mid{
		width:610px;
		height:584px;
		>.tipsTitle{
			margin-bottom: 25px;
		}
		>.systemList{
			padding: 0 22px;
			>li{
				width:567px;
				padding: 0 47px 0 27px;
				line-height: 50px;
				height:50px;
				background:rgba(45, 36, 64, 1);
				margin-bottom: 13px;
				border-radius:5px;
				box-shadow:6px 0px 24px rgba(39,31,56,0.06);
				position: relative;
				>.pointer{
					width: 4px;
					height: 4px;
					border-radius: 50%;
					position: absolute;
					background:rgba(233,14,213,1);
					top:23px;
					left: 11px;
				}
				>.delate{
					width: 14px;
					height: 16px;
					position: absolute;
					right: 17px;
					top:16px;
					    background-position: -340px -184px;
					 transition:all .5s;

				}
			}
		}
	}
}
.statisticser{
	>.mid{
		width:610px;
		height:438px;
		>.xiazhuUndyinli{
			width: 100%;
			padding: 0 23px 0 22px;
			height: 90px;
			margin-bottom: 38px;
			>li{
				width:268px;
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
		>.touzhicouunt{
			padding: 0 23px 0 22px;

			>li{
				padding: 28px 24px 0;
				width:269px;
				height:171px;
				font-size: 14px;
				background:rgba(37,28,52,1);
				border-radius:5px;
				box-shadow:6px 0px 24px rgba(39,31,56,0.06);
				>p{
					float: left;
					width: 100%;
					margin-bottom: 30px;
				}
			}
		}
	}
}
.justice{
	>.mid{
		top:100vh;
		width:610px;
		height:690px;
		.justtice{
			padding-left: 16px;
			padding-right: 33px;
			color:rgba(255,255,255,0.4);
			line-height:30px;
		}
		>.sends{
			width: 100%;
			padding-left: 21px;
			margin-bottom: 30px;
			padding-right: 23px;
			>li{
				width:272px;
				padding-top: 19px;
				padding-left: 19px;
				height:280px;
				background:rgba(255, 255, 255, 0.06);
				border-radius:5px;
				padding-right: 20px;
				box-shadow:6px 0px 24px rgba(39,31,56,0.06);
				>p{
					word-break:break-all;
				}
			}
		}
		>.inputBox{
			height:50px;
			position: relative;
			padding: 0 22px;
			z-index: 1;
			border-radius:5px;
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
				width:70px;
				height:30px;
				background:linear-gradient(90deg,rgba(244,0,241,1),rgba(196,63,113,1));
				border-radius:5px;
			    right: 43px;
				top: 42px;
				line-height: 30px;
			}
			>.tips{
				color: rgba(223, 221, 225, 1);
				margin-top: 0px;
			}
		}
	}
	>.changSend{
		width:610px;
		height:513px;
		>.divsend{
			padding: 0 22px;
			margin-bottom: 30px;
			>input{
				color: #fff;
				width:567px;
				height:50px;
				background:rgba(37,28,52,1);
				border-radius:5px;
			}
			>p{
				color:rgba(255,255,255,0.5);
				margin-bottom: 17px;
				font-size: 14px;
			}
			button{
				width:275px;
				height:50px;
				background:linear-gradient(90deg,rgba(244,0,241,1),rgba(196,63,113,1));
				margin-top: 0px;
				border-radius:5px;
			}
		}
	}
}
.userSet{
	>.mid{
		height:516px;
		padding: 26px 22px ; 
		button{

		}
		>.titleNav{
			color:rgba(255,255,255,0.5);
			padding:  0 100px;
			margin-bottom: 90px;
		}
		>.navss{
			>p.fz14{
				margin-top: -23px;

				margin-bottom: 23px;
			}
			>div.center{
				button{
					margin: 0;
				}
			}
			>div.imgsss{
				margin-bottom: 26px;
				>img{
					width: 130px;
					height: 130px;
				}
			}
			>.address{
				margin: 0;
				margin-bottom:30px;
				
			}	
		}
		
	}
}
















.Header{
	width: 	100%;
	background:linear-gradient(148deg,rgba(15,23,45,1),rgba(48,43,99,1));
	height: 76px;
	box-shadow:0px 0px 46px rgba(48,48,48,0.21);
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
			>.museMOre{
				width:176px;
				left: -170px;
				z-index: 10;
				overflow: hidden;
				transition:all 1s;
				height:350px;
				background:rgba(37,24,57,1);
				border-radius:5px;
				box-shadow:0px 0px 59px rgba(0,0,0,0.13);
				>.username{
					height: 78px;
					border-bottom: 1px solid rgba(40,27,62,1);
					line-height: 78px;
				}
				>.otherList{
					height: 256px;
					padding-top: 28px;
					line-height: normal;
					border-top: 1px solid rgba(29,19,45,1);
					>.museAvtive{
						color:rgba(220,26,185,1);
					}
					>li{
						margin-bottom: 28px;
						transition:all .5s;
						

						&:hover{
							color:rgba(220,26,185,1);
						}
					}
				}
			}
		}
	}
}
</style>
