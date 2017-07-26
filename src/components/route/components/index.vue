<template>
<div>
  <c-h1>{{title}}</c-h1>
  <router-view></router-view>
</div>
</template>
<script>
export default {
  name: "components-index",
  data () {
    return {
    };
  },
  computed: {
    title (){
      return this.$route.path.split('/')[1]
    },
  },
  components: {
    "c-h1":require('../../common/c-h1')
  }
}
</script>
<style lang="less" scoped>
</style>