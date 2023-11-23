<script setup lang="ts">
import {
  ElContainer,
  ElAside,
  ElHeader,
  ElDrawer,
  ElButton,
  ElMain,
  ElSpace,
} from 'element-plus';
import { useWindowSize } from '@vueuse/core';
import { computed, ref } from 'vue';
import LRMenu from './LRMenu.vue';
import { MoreFilled } from '@element-plus/icons-vue';
defineProps<{
  asideWidth?: string;
}>();
const slots = defineSlots<{
  default: (_: unknown) => unknown;
  header: (_: unknown) => unknown;
  'header-extra'?: (_: unknown) => unknown;
  aside?: (_: unknown) => unknown;
}>();
const windowSize = useWindowSize();
const xs = computed(() => windowSize.width.value < 768);
const showAside = ref(true);
</script>
<template>
  <ElContainer :style="{ height: '100vh' }">
    <ElHeader class="header">
      <LRMenu>
        <ElSpace>
          <ElButton
            text
            :icon="MoreFilled"
            v-if="xs && slots.aside"
            @click="showAside = true"
          ></ElButton>
          <slot name="header"></slot>
        </ElSpace>
        <template #end v-if="slots['header-extra']">
          <slot name="header-extra"></slot>
        </template>
      </LRMenu>
    </ElHeader>
    <ElMain :style="{ padding: '0px' }">
      <ElContainer :style="{ height: '100%' }">
        <ElAside :width="asideWidth" class="aside" v-if="slots.aside && !xs">
          <slot name="aside"></slot>
        </ElAside>
        <ElDrawer
          :with-header="false"
          :size="'60%'"
          append-to-body
          :direction="'ltr'"
          v-model="showAside"
          v-else-if="slots.aside"
        >
          <slot name="aside"></slot>
        </ElDrawer>
        <ElMain :style="{ padding: '0px' }">
          <slot></slot>
        </ElMain>
      </ElContainer>
    </ElMain>
  </ElContainer>
</template>
<style scoped>
.header {
  background-color: var(--el-bg-color-page);
  border-bottom: 2px solid var(--el-border-color);
}
.aside {
  z-index: 20;
  background-color: var(--el-bg-color-page);
  border-right: 1px solid var(--el-border-color);
}
</style>
