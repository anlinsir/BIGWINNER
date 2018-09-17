<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
 *{
    margin: 0;
    padding: 0;
  }
  html,body{
    width: 100%;
    height: 100%;
    font-family:MicrosoftYaHei;
  }
  .rb{
    border: 1px solid red;
  }
  ul li {
    list-style: none;
  }
  a{
      text-decoration: none;
  }
  .lh{
    display: inline-block;
  }
  .bb{
    box-sizing: border-box;
  }
  .flex{
    display: flex;
  }
  .flexA{
    display: flex;
    justify-content: space-around;
  }
  .flexB{
    display: flex;
    justify-content: space-between;
  }
  .wr{
    flex-wrap: wrap;
  }
  .Left{
    float: left;
  }
  .Right{
    float: right;
  }
  .cu{
    cursor: pointer;
  }
  .backRe{
    background-repeat: no-repeat;
  }


  /* 字号 */
  .fz12{
    font-size: 12px;
  }
  .fz14{
    font-size: 14px;
  }
  .fz16{
    font-size: 16px;
  }
  .fz18{
    font-size: 18px;
  }
  .fz20{
    font-size: 20px;
  }
  .fz22{
    font-size: 22px;
  }
  .fz24{
    font-size: 24px;
  }
  .fz26{
    font-size: 26px;
  }
  .fz28{
    font-size: 28px;
  }
  .fz30{
    font-size: 30px;
  }
  .fz32{
    font-size: 32px;
  }
  .fz34{
    font-size: 34px;
  }
  /* 字号 */


  /* 字体 */
  .fb{
    font-weight: bold;
  }
  .white{
    color: white;
    
  }
  .center{
    text-align: center;
  }
  /* 字体 */
  

  /* 定位 */
  .fixed{
    position: fixed;
  }
  .abso{
    position: absolute;
  }
  .rela{
    position: relative;
  }
  .mid{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
  /* 定位 */

  .noWrap{
    white-space: nowrap;
    word-break: break-all;
  }



  .Warper{
    width: 100%;
    min-height: 30px;

  }
 .warp{
        width: 900px;
        min-height: 30px;
        margin: auto;
      }

  


  body, button, textarea{
   -webkit-appearance : none; 
   appearance : none;
   border: none;
   background: none;
   outline: none;
  }
  input{
    border: none;
     outline: none;
  }
  button{
    cursor: pointer;
  }

  .iconimg{
    background-image: url('/static/img/cion.png');
    background-repeat: no-repeat;
    background-position: 0 0;
  }
  .close{
    
     background-image: url('/static/img/CLOSE.png');
    background-repeat: no-repeat;
    background-position: 0 0;
  }





  @keyframes bounceOutLeft {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }
}

.bounceOutLeft {
  -webkit-animation-name: bounceOutLeft;
  animation-name: bounceOutLeft;
}


@keyframes bounceInLeft {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(-3000px, 0, 0);
    transform: translate3d(-3000px, 0, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  75% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  90% {
    -webkit-transform: translate3d(0px, 0, 0);
    transform: translate3d(0px, 0, 0);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.bounceInLeft {
  -webkit-animation-name: bounceInLeft;
  animation-name: bounceInLeft;
}



@keyframes bounceInRight {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    -webkit-transform: translate3d(3000px, 0, 0);
    transform: translate3d(3000px, 0, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(-25px, 0, 0);
    transform: translate3d(-25px, 0, 0);
  }

  75% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }

  90% {
    -webkit-transform: translate3d(-5px, 0, 0);
    transform: translate3d(-5px, 0, 0);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.bounceInRight {
  -webkit-animation-name: bounceInRight;
  animation-name: bounceInRight;
}
@keyframes bounceOutRight {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(-20px, 0, 0);
    transform: translate3d(-20px, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }
}

.bounceOutRight {
  -webkit-animation-name: bounceOutRight;
  animation-name: bounceOutRight;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.fadeIn {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

.fadeOut {
  -webkit-animation-name: fadeOut;
  animation-name: fadeOut;
}

</style>
