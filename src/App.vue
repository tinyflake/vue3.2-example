<template>
  <div style="margin: 0 auto;">
    <h2 class="head">
      <router-link to="/Dynamic-components">动态组件</router-link>
      <router-link to="/jsx">jsx-demo</router-link>
      <router-link to="/slot">slot插槽</router-link>
    </h2>
  </div>
  <router-view />
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
  justify-content: space-evenly;
}
</style>
