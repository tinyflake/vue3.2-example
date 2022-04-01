<template>
  <div>
    <h1>动态组件</h1>
    <div>
      <el-radio-group v-model="tabFlag" @change="tabFlagChange" size="small">
        <el-radio-button label="componentA"> componentA</el-radio-button>
        <el-radio-button label="componentB"> componentB</el-radio-button>
      </el-radio-group>
    </div>
    <div style="height: 100px; width: 100%;">
      <!-- <keep-alive> -->
      <component :is="component"></component>
      <!-- </keep-alive> -->
    </div>
  </div>
</template>
<script setup name="Demo">
import LoadingComponent from './components/LoadingComponent.vue'
import * as components from '@element-plus/icons-vue'
import { ref, defineAsyncComponent, toRaw, shallowRef } from 'vue'
const tabFlag = ref('componentA')
const component = shallowRef(import(`./components/${toRaw(tabFlag.value)}.vue`))
const show = ref(true)
//动态切换组件和懒加载
const tabFlagChange = () => {
  component.value = defineAsyncComponent({
    loader: () => import(`./components/${toRaw(tabFlag.value)}.vue`),
    loadingComponent: LoadingComponent, //loading
    // errorComponent: ErrorComponent,
    delay: 0,
    timeout: 1000000, //超时时间
  })
}
</script>
<style lang="scss" scoped></style>
