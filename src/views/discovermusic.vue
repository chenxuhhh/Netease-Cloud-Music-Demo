<template>
  <div class="discover_page">
    <div class="discover">
      <div class="content">
        <router-link tag="span" to="/discovermusic/recommend">推荐</router-link>
        <router-link tag="span" to="/discovermusic/playList">歌单</router-link>
        <router-link tag="span" to="2#">排行榜</router-link>
        <router-link tag="span" to="3#">主播电台</router-link>
        <router-link tag="span" to="4#">歌手</router-link>
        <router-link tag="span" to="5#">新碟上架</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.discover{
  height: 35px;
  background-color: #C20C0C;
}
.content{
  display: flex;
  margin-left: -381px;
  justify-content: center;
  align-items: center;
}
span{
  //display: inline-block;
  //height: 35px;
  //line-height: 35px;
  //margin: 0 15px;
  color: white;
  font-size: 12px;
  padding: 0 10px;
  margin-top: 10px;
}
span:hover{
  background-color: #9B0909;
  border-radius: 100px;
  cursor: pointer;
}
.discover_page{
  .discover{
    .content{
      .router-link-active{
        background-color: #9B0909;
        border-radius: 100px;
      }
    }
  }
}
</style>