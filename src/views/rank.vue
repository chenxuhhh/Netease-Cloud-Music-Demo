<template>
  <div class="rank_list">
    <div class="top">
      <span class="topList">飙升榜</span>
      <div class="img1"></div>
      <div class="img2"></div>
      <div class="img3"></div>
    </div>
    <div class="body">
      <dd>
        <ul>
          <li><span>1</span>十二月的奇迹</li>
          <li><span>2</span>诗情电影院</li>
          <li><span>3</span>来年后少年</li>
          <li><span>4</span>Shy Boy (0^^0)</li>
          <li><span>5</span>我看了56次日落</li>
          <li><span>6</span>첫 눈</li>
          <li><span>7</span>高高的兴安岭</li>
          <li><span>8</span>Go Again(feat ELYSA)</li>
          <li><span>9</span>12월의 기적 (Miracles In December)</li>
          <li><span>10</span>你听你听</li>
          <li><span>查看全部></span></li>
        </ul>
      </dd>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.rank_list{
    width: 230px;
    height: 472px;
    margin-top: 20px;
    .top{
        width: 100%;
        height: 120px;
        background-color: #F4F4F4;
        position: relative;
        .topList{
          position: absolute;
          top: 20px;
          left: 135px;
        }
        .img1{
          display: inline-block;
          width: 100px;
          height: 100px;
          background-image: url(./../assets/imgs/109951166952713766.jpg);
          position: absolute;
          top: 10px;
          left: 20px;
        }
        .img2{
          display: inline-block;
          width: 26px;
          height: 26px;
          background-image: url(./../assets/imgs/index.png);
          position: absolute;
          top: 45px;
          left: 135px;
          background-position: 148px 261px;
        }
        .img3{
          display: inline-block;
          width: 26px;
          height: 26px;
          background-image: url(./../assets/imgs/index.png);
          position: absolute;
          top: 45px;
          left: 175px;
          background-position: 115px 261px;
        }
    }
    .body{
        width: 100%;
        height: 352px;
        dd ul li{
          list-style-type: none;
          padding:10px 0  10px 0;
              font-size: 10px;
          &:nth-child(2n+1){
            background-color: yellow;
          }
          &:nth-child(2n){
            background-color: RED;
          }
        }
        dd ul li span{
          margin-right: 20px;
        }
    }
}
</style>
