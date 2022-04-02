<template>
  <h1>下面是两个插槽</h1>
  <div>
    <a-button @click="showSlotA">点击展示插槽A</a-button>
  </div>
  <div>
    <slot v-if="showA" name="A"></slot>
  </div>
  <div>
    <a-button @click="showSlotB">点击展示插槽B</a-button>
  </div>
  <div>
    <slot v-if="showB" name="B"></slot>
  </div>
</template>

<script setup name="Son">
import { ref } from 'vue'
const showA = ref(false)
const showB = ref(false)
const showSlotA = () => {
  showA.value = true
}
const showSlotB = () => {
  showB.value = true
}
</script>

<style lang="scss" scoped></style>
