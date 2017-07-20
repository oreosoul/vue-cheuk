<template>
  <div class="menu">
    <div class="menu-title">
      <img src="../../assets/logo.png" /><span>Vue Admin</span>
    </div>
    <ul class="menu-list">
      <li class="list-item" v-for="item in listData" :key="item.title">{{item.title}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "app-menu",
  data() {
    return {
      listData: [
        {title:'Hello'},
        {
          title:'Test1',
          listData:[
            {
              title:'Components'
            }
          ]
        },
        {title:'Test2'},
        {title:'Test3'}
      ],
    };
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
  .list-item{
    text-align: left;
    padding: 10px 0;
    padding-left: 20px;
    height: 40px;
    cursor: pointer;
  }
}

//换肤
&[data-theme = 'default']{
  .menu{
    border-right-color: @default-subordinate;
  }
  .menu-list{
    .list-item{
      &:hover{
        color:@default-primary;
        font-weight: bold;
        text-shadow: 2px 2px 1px #ccc;
      }
    }
  }
}
</style>