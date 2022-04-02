<template>
  <div class="base">
    <div><slot name="Left"></slot></div>
    <div><slot name="Right"></slot></div>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.base {
  display: flex;
  > div {
    width: 50%;
    box-sizing: border-box;
  }
}
</style>
