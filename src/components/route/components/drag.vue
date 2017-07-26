<template>
<div>
  <h2>{{$route.name}}</h2>
  <div class="drag-container">
    <div class="drag-box">
      <ul id="documentList" @drop="drop($event)" @dragover="allowDrop($event)">
        <li draggable="true" @dragstart="dragStart($event)">新建文件夹0</li>
        <li draggable="true" @dragstart="dragStart($event)">新建文件夹1</li>
        <li draggable="true" @dragstart="dragStart($event)">新建文件夹2</li>
        <li draggable="true" @dragstart="dragStart($event)">新建文件夹4</li>
      </ul>
    </div>
    <div class="drag-box">
      <ul id="recycleList" @drop="drop($event)" @dragover="allowDrop($event)">
        <li draggable="true" @dragstart="dragStart($event)">新建文件夹3</li>
      </ul>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: "components-drag",
  data () {
    return {
      dragDom:null,
    };
  },
  methods: {
    dragStart (ev){
      this.dragDom = ev.target
    },
    drop (ev){
      if(ev.target.tagName==='UL'){
        ev.target.appendChild(this.dragDom)
      }
      if(ev.target.parentNode.tagName==='UL'){
        ev.target.parentNode.appendChild(this.dragDom)
      }
    },
    allowDrop (ev){
      ev.preventDefault()
    },
  },
}
</script>
<style lang="less" scoped>
@import '../../../public/style/color.less';
@border-length: 50px;
h2{
  margin-bottom: 10px
}
.drag-container{
  display: flex;
  justify-content: space-between;
}
.drag-box{
  flex-basis: 49%;
  padding: 10px;
  border: 1px solid #ddd;
  height: 400px;
  overflow: hidden;
  overflow-y: auto;
  ul{
    width: 100%;
    height: calc(~"100% - 35px");
    li{
      border:1px solid #ddd;
      padding: 10px 30px;
      margin-bottom: 10px;
      cursor: pointer;
    }
  }
}
</style>