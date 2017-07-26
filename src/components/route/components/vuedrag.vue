<template>
<div>
  <h2>{{$route.name}}</h2>
  <div class="drag-container">
    <div class="drag-box">
      <h3>首发阵容</h3>
      <draggable v-model="myArray" :options="dragOptions" 
        :move="move" 
        @start="start"
        @update="update"
        @end="end"
      >
        <transition-group tag="ul">
          <li v-for="element in myArray" :key="element.id" class="item">
              {{element.name}}
          </li>
        </transition-group>
      </draggable>
    </div>
    <div class="drag-box">
      <h3>候补名单</h3>
      <draggable v-model="substitution" :options="dragOptions"
        :move="move" 
        @start="start"
        @update="update"
        @end="end"
      >
        <transition-group tag="ul">
          <li v-for="element in substitution" :key="element.id" class="item">
              {{element.name}}
          </li>
        </transition-group>
      </draggable>
    </div>
  </div>
  
</div>
</template>
<script>

import draggable from 'vuedraggable'
export default {
  name: "vue-drag",
  data () {
    return {
      dragData:null,
      myArray:[
        {id:0,name:'Abby'},
        {id:1,name:'Bran'},
        {id:2,name:'Cheuk'},
        {id:3,name:'Duke'},
        {id:4,name:'Eric'},
      ],
      substitution:[
        {id:5,name:'Cam'},
        {id:5,name:'Kent'},
      ],
    };
  },
  methods: {
    addPeople (){
      this.myArray.push({id:7,name:'Hamel'})
    },
    move (obj){
      console.log('move:',obj)
      console.log('move')
    },
    update (obj){
      console.log('update:',obj)
      // this.dragData = ev.target
      console.log('update')      
    },
    start (obj){
      console.log('start:',obj)
      // this.dragData = ev.target
      console.log('start')    
    },
    end (obj){
      console.log('end:',obj)
      // this.dragData = ev.target
      console.log('end')         
    },
  },
  computed:{
    dragOptions () {
      return  {
        animation: 0,
        group: 'team',
        draggable:'.item',
      }
    },
  },
  components: {
    draggable,
  }
}
</script>
<style lang="less" scoped>
@import '../../../public/style/color.less';
@border-length: 50px;
h2{
  margin-bottom: 10px;
}
h3{
  margin-bottom: 10px;
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
  div{
    min-height: calc(~"100% - 35px");
    height: calc(~"100% - 35px");
  }
  ul{
    width: 100%;
    height: 100%;
    overflow: hidden;
    overflow-y: auto;
    li{
      border:1px solid #ddd;
      padding: 10px 30px;
      margin-bottom: 10px;
      cursor: pointer;
    }
  }
}
</style>