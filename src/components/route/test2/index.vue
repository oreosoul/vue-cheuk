<template>
<div>
  <c-h1>Test2</c-h1>
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
  components: {
    "c-h1":require('../../common/c-h1')
  }
}
</script>
<style lang="less" scoped>
</style>