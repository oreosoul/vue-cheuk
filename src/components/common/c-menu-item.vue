<template>
<li class="item">
  <span class="item-title" :class="{'active':isShowChildren}" @click="toggle">{{model.title}}</span>
  <ul v-show="isShowChildren" v-if="model.children">
    <c-menu-item v-for="item in model.children" :key="item.index" :model="item"></c-menu-item>
  </ul>
</li>
</template>
<script>
export default {
  name: "c-menu-item",
  data () {
    return {
      isShowChildren:false,
    };
  },
  props:{
    model:{}
  },
  methods:{
    toggle(){
     if(this.isFloder)this.isShowChildren = this.isShowChildren?false:true
    }
  },
  computed:{
    isFloder(){
      return (this.model.children&&this.model.children.length>0)?true:false
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../public/style/color.less';

ul{
  padding-left: 10px;
}
.item{
  list-style: none;
  text-align: left;
  padding-top: 10px;
  text-indent: 20px;
  cursor: pointer;
}
//换肤
[data-theme = 'default']{
  .item-title{
    &:hover,&.active{
      color:@default-primary;
      font-weight: bold;
    }
  }
}
</style>