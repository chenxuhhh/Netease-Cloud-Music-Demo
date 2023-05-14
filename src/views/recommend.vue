<template>
  <div class="recommend_page">
    <!-- 轮播图 -->
    <div class="photo">
      <div class="main_page">
        <div class="left1">
          <img src="./../assets/imgs/109951168108998119.jpg" alt="">
        </div>
        <div class="right1">
          
        </div>
        <div class="prev">&lt;</div>
        <div class="next">&gt;</div>
      </div>
    </div>
    <!-- 推荐内容 -->
    <div class="recommend">
      <!-- 左边 -->
      <div class="left">
        <div class="head">
          <span class="licon"></span>
          <div class="hot_recommend">
            <a href="">热门推荐</a>
            <a href="">华语</a>
            <a href="">流行</a>
            <a href="">摇滚</a>
            <a href="">民谣</a>
            <a href="">电子</a>
          </div>
          <div class="more">
            <div class="ricon"></div>
            <a href="">更多</a>
          </div>
        </div>
        <div class="body">
          <recommendList></recommendList>
          <recommendList></recommendList>
          <recommendList></recommendList>
          <recommendList></recommendList>
          <recommendList></recommendList>
          <recommendList></recommendList>
          <recommendList></recommendList>
          <recommendList></recommendList>
        </div>
        <div class="head2">
          <div class="disc">
            <span class="licon"></span>
            <a href="">新碟上架</a>
          </div>
          <div class="more">
            <div class="ricon"></div>
            <a href="">更多</a>
          </div>
        </div>
        <div class="body1">
          <newDIsc></newDIsc>
          <newDIsc></newDIsc>
          <newDIsc></newDIsc>
          <newDIsc></newDIsc>
          <newDIsc></newDIsc>
        </div>
        <div class="head3">
          <div class="rank">
            <span class="licon"></span>
            <a href="">榜单</a>
          </div>
          <div class="more">
            <div class="ricon"></div>
            <a href="">更多</a>
          </div>
        </div>

        <div class="body2">
          <rank></rank>
          <rank></rank>
          <rank></rank>
        </div>
      </div>
      <!-- 右边 -->
      <div class="right">2333333</div>
    </div>
  </div>
</template>

<script>
import recommendList from "@/views/recommendList.vue";
import newDIsc from "@/views/newDisc.vue";
import rank from "@/views/rank.vue";
import { bannerList } from '@/api/banner'
export default {
  created() {
    this.getBannerList()
  },
  components: {
    recommendList,
    newDIsc,
    rank,
  },
  methods: {
    getBannerList() {
      bannerList().then((res) => {
        console.log(res);
      }).catch((err) => {
        console.error(err);
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.recommend_page {
  background-color: rgb(245, 245, 245);

  .photo {
    width: 100%;
    height: 285px;
    background-color: aqua;
    display: flex;
    // position: relative;
    justify-content: center;
    .main_page{
      height: 100%;
      width: 980px;
      background-color: pink;
      // position: absolute;
      display: flex;
      background-image: url("http://p1.music.126.net/1EyZ5DT8xQEqbO-qacU3Vg==/109951168111656872.jpg?imageView&blur=40x20");
      .left1{
        height: 100%;
        width:730px;
        background-color: coral;
      }
      .right1{
        height: 100%;
        width: 254px;
        background-color: darkkhaki;
        flex: 1;
        background-image: url(./../assets/imgs/download.png);
      }
    }
  }

  .recommend {
    width: 980px;
    height: 1425px;
    background-color:white;
    margin: auto;
    display: flex;
    .left {
      box-sizing: border-box;
      height: 230px;
      width: 730px;
      background-color: white;
      padding: 20px;
      align-items: stretch;
      position: relative;
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;

      .body {
        background-color: white;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 20px;
      }

      .head {
        height: 33px;
        width: 689px;
        padding: 0 10px 0 34px;
        border-bottom: 2px solid #c10d0c;
        display: flex;
        justify-content: space-between;

        .licon {
          display: inline-block;
          width: 35px;
          height: 35px;
          position: absolute;
          top: 15px;
          left: 15px;
          background-image: url(./../assets/imgs/index.png);
          background-position: 188px 314px;
        }

        .hot_recommend {
          a:nth-child(1) {
            font-size: 20px;
          }

          a:nth-child(n + 2) {
            border-right: 1px solid #c10d0c;
            padding: 0 15px;
          }
        }

        .more {
          .ricon {
            position: absolute;
            display: inline-block;
            width: 12px;
            height: 12px;
            top: 25px;
            right: 12px;
            background-image: url(./../assets/imgs/index.png);
            background-position: 0px 225px;
          }
        }
      }
    }

    .right {
      box-sizing: border-box;
      height: 100%;
      flex: 1;
      background-color: pink;
      padding: 20px;
      align-items: stretch;
    }
  }
}

.head2 {
  margin-top: 60px;
  height: 33px;
  width: 689px;
  display: flex;
  justify-content: space-between;
  padding: 0 10px 0 34px;
  border-bottom: 2px solid #c10d0c;
  position: relative;

  .disc {
    font-size: 20px;

    .licon {
      display: inline-block;
      width: 35px;
      height: 35px;
      position: absolute;
      top: -5px;
      left: 0px;
      background-image: url(./../assets/imgs/index.png);
      background-position: 188px 314px;
    }
  }

  .more {
    .ricon {
      position: absolute;
      display: inline-block;
      width: 12px;
      height: 12px;
      top: 7px;
      right: -10px;
      background-image: url(./../assets/imgs/index.png);
      background-position: 0px 225px;
    }
  }
}

.body1 {
  width: 690px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.head3 {
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  width: 689px;
  height: 33px;
  padding: 0 10px 0 34px;
  border-bottom: 2px solid #c10d0c;
  position: relative;

  .rank {
    font-size: 20px;

    .licon {
      display: inline-block;
      width: 35px;
      height: 35px;
      position: absolute;
      top: -5px;
      left: 0px;
      background-image: url(./../assets/imgs/index.png);
      background-position: 188px 314px;
    }
  }

  .more {
    .ricon {
      position: absolute;
      display: inline-block;
      width: 12px;
      height: 12px;
      top: 6px;
      right: -12px;
      background-image: url(./../assets/imgs/index.png);
      background-position: 0px 225px;
    }
  }
}

.body2 {
  display: flex;
  justify-content: space-between;
}
</style>