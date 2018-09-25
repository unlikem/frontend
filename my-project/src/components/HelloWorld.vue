<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ message_0 }}</p>
    <div v-html="message_1"></div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '欢迎来到菜鸟教程！',
      message_0: '欢迎！',
      message_1: '<h1>菜鸟教程</h1>'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
