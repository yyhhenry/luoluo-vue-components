<script setup lang="ts">
import { ElText } from 'element-plus';
defineProps<{
  fontSize?: string;
  enableSelect?: boolean;
}>();
</script>
<template>
  <ElText
    tag="h1"
    :style="{
      fontSize: fontSize ?? 'var(--el-font-size-extra-large)',
      userSelect: enableSelect ? undefined : 'none',
    }"
  >
    <slot></slot>
  </ElText>
</template>
