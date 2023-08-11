<script setup lang="ts">
import { ElCard } from 'element-plus';
import FlexBox from './FlexBox.vue';
defineProps<{
  tight?: boolean;
}>();
const slots = defineSlots<{
  default: (_: {}) => unknown;
  header?: (_: {}) => unknown;
}>();
</script>
<template>
  <FlexBox>
    <ElCard :body-style="tight ? { padding: '6px' } : undefined">
      <slot></slot>
      <template #header v-if="slots.header">
        <slot name="header"></slot>
      </template>
    </ElCard>
  </FlexBox>
</template>
