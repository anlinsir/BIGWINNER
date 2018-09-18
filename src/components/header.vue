<template>
 <div class="Header Warper">
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
							<li class="fz14 cu" v-for="(nav , index) in ['公平性','投资','分红']">{{nav}}</li>
						</ul>
					</nav>

					<div  class="muse rela Right lh">
						<span @click="miseShow = !miseShow" class="lh cu iconimg"></span>
						<div :style="{height:miseShow ? '350px' : '0'}" class="museMOre abso center">
							<div class="username white ">
								<span class="lh"></span>
								<span class="fz14 fb">ID:26U98T0</span>
								<span class="lh "></span>
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
    }
  },
  methods:{
  	useSome(index){//做xxx
  		this.museAvtive = index	
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
