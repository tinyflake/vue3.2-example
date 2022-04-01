<template>
  <div style="margin: 0 auto;">
    <h2 class="head">
      <router-link to="/Dynamic-components">动态组件</router-link>
    </h2>
    <router-view />
  </div>
</template>

<script setup name="App"></script>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.head {
  display: flex;
  justify-content: center;
}
</style>
