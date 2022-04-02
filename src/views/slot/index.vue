<template>
  <Base>
    <template #Left>
      <Son>
        <template #A> <TemplateA /></template>
        <template #B><TemplateB /> </template>
      </Son>
    </template>
    <template #Right>
      右侧
    </template>
  </Base>
</template>

<script setup name="Slot">
import Base from '@/components/Base.vue'
import Son from './components/Son.vue'
import TemplateA from './components/templateA.vue'
import TemplateB from './components/templateB.vue'
</script>

<style lang="scss" scoped></style>
