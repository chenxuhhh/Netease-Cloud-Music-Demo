 <template>
  <div id="app">
    <div class="nav">
      <div class="content">
        <div class="left">
          <span class="logo"></span>
          <nav>
            <router-link tag="span" to="/discovermusic/recommend">发现音乐</router-link>
            <router-link tag="span" to="#">我的音乐</router-link>
            <router-link tag="span" to="##">商城</router-link>
            <router-link tag="span" to="###">音乐人</router-link>
            <router-link tag="span" to="####">下载客户端</router-link>
        </nav>
        </div>
        <div class="right">
          <input type="text" placeholder="音乐/视频/电台/用户">
          <button>创作者中心</button>
          <span class="login">登录</span>
        </div>
      </div>
    </div>
    
    <router-view></router-view>
    ghg
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#app nav{
  background-color: #363636;
  color: white;
  display: inline-block;
}
*{
  margin: 0;
  padding: 0;
}
.logo{
  display: inline-block;
  width: 160px;
  height: 69px;
  background-image: url('@/assets/imgs/topbar.png');
}
.nav{
  background-color: #363636;
}
.nav .content{
  width: 1100px;
  margin: auto;
  display: flex;
  justify-content: space-between;
}
.left{
  display: flex;
  // align-items: center;
}
.right{
  display: flex;
  align-items: center;
}
.login{
  color: white;
}
.nav span{
  display: inline-block;
  height: 69px;
  line-height: 69px;
  padding: 0 15px;
  font-size: 14px;
}
.nav span:hover{
  background-color: #000;
  cursor: pointer;
}
#app{
  nav{
    .router-link-active{
      background-color: #000;
    }
  }
}
</style>
