<template>
<div>
  <h2>{{$route.name}}</h2>
  <div class="drag-container">
    <div class="drag-box">
      <h3>首发阵容</h3>
      <draggable v-model="myArray" :options="dragOptions" 
        :move="move"
      >
        <transition-group tag="ul">
          <li v-for="(element, index) in myArray" :key="element.id" class="item">
              <span>{{element.name}}</span>
              <span>
                <i @click="editItem(element)" class="icon el-icon-edit"></i>
                <i @click="deleteItem(myArray, index)" class="icon el-icon-delete"></i>
              </span>
          </li>
        </transition-group>
      </draggable>
    </div>
    <div class="drag-box">
      <h3>候补名单</h3>
      <draggable v-model="substitution" :options="dragOptions"
        :move="move"
      >
        <transition-group tag="ul">
          <li v-for="(element, index) in substitution" :key="element.id" class="item">
              <span>{{element.name}}</span>
              <span>
                <i @click="editItem(element)" class="icon el-icon-edit"></i>
                <i @click="deleteItem(substitution, index)" class="icon el-icon-delete"></i>
              </span>
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
        {id:6,name:'Kent'},
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
    editItem (el){
      let name  = prompt('请输入姓名：')
      el.name = name
      console.log(el)
    },
    deleteItem (arr, index){
      console.log(arr,index)
      arr.splice(index, 1)
    }
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
.icon{
  margin-left: 10px;
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
      display: flex;
      justify-content: space-between;
      border:1px solid #ddd;
      padding: 10px 30px;
      margin-bottom: 10px;
      cursor: move;
      &:hover{
        background-color: darken(#fff,10%);
      }
      span{
        cursor: pointer;
      }
    }
  }
}
</style>