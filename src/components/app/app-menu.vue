<template>
  <div class="menu">
    <div class="menu-title">
      <img src="../../assets/logo.png" /><span>Vue Demo</span>
    </div>
    <ul class="menu-list">
      <c-menu-item v-for="item in listData" :key="item.index" :model="item"></c-menu-item>
    </ul>
  </div>
</template>
<script>
export default {
  name: "app-menu",
  data() {
    return {
      listData: [
        {title:'Hello0', path: '/hello'},
        {
          title:'Components',
          children:[
            {title: 'DomDrag', path: '/components/drag'},
            {title: 'VueDrag', path: '/components/vuedrag'},
          ]
        },
        {
          title:'Excel',
          children:[
            {title: '导出Excel', path: '/excel/export'},
            {title: '导出选择Excel', path: '/excel/exportSelected'},
          ]
        },
        {title:'Test3'}
      ],
    };
  },
  components:{
    "c-menu-item": require('../common/c-menu-item'),
  }
}
</script>
<style lang="less" scoped>
@import '../../public/style/color.less';
@import '../../public/style/layout.less';
@logo-size:40px;

.menu{
  position: fixed;
  display: flex;
  flex-direction: column;
  width: @app-menu-width;
  top: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  border-right: 1px solid currentColor;
  transition: all .3s ease-out;
  box-sizing: inherit;
}
.menu-title{
  display: flex;
  justify-content: center;
  align-items: center;
  height: @app-header-height;
  img{
    width: @logo-size;
    height: @logo-size;
  }
}
.menu-list{
  transition: all .3s ease-out;
  position: absolute;
  top: @app-header-height;
  bottom: 0;
  left: 0px;
  right: -17px;
  overflow-y: scroll;
}

//换肤
[data-theme = 'default']{
  .menu{
    border-right-color: @default-subordinate;
  }
}
</style>