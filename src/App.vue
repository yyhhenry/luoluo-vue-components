<script setup lang="ts">
import { ElConfigProvider } from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import MainView from './views/MainView.vue';
</script>

<template>
  <ElConfigProvider :locale="zhCn">
    <MainView/>
  </ElConfigProvider>
</template>
