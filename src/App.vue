<template>
  <div id="app" :data-theme="theme">
    <app-menu></app-menu>
    <div class="app-contact">
      <div class="app-header"></div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import store from "./vuex/store"
import { mapGetters,mapActions } from 'vuex'
export default {
  name: 'app',
  data (){
    return {
    }
  },
  components: {
    "app-menu":require('./components/app/app-menu'),
  },
  computed: {
    ...mapGetters({
      theme: 'getTheme',
      users: 'getUsers',
    }),
  },
  methods: {
    ...mapActions([
      'changeTheme',
      'addUser',
    ]),
  },
  store,
}
</script>

<style lang="less">
@import './public/style/color.less';
@import './public/style/layout.less';
*{
  padding: 0;
  margin: 0;
  font-family: '微软雅黑', Arial, Helvetica, sans-serif;
  box-sizing: border-box;
  transition: all .3s ease-out;
}
#app {
  display: flex;
  text-align: center;
  position: relative;
  height: 100%;
  width: 100%;
  //设置皮肤样式
  &[data-theme = 'default']{
    color: @default-text;
    background-color: @default-background;
    border-color: @default-subordinate;
  }
}
.app-contact{
  flex-grow:1;
  margin-left: @app-menu-width;
}
.app-header{
  height: @app-header-height;
}
</style>
