<template>
<h1><slot></slot></h1>
</template>
<script>
export default {
  name: "h1",
  data () {
    return {
    };
  }
}
</script>
<style lang="less" scoped>
h1{
    margin-bottom: 20px;
}
</style>