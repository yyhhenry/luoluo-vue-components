<script setup lang="ts">
import CenterLayout from './CenterLayout.vue';
</script>
<template>
  <CenterLayout>
    <div class="flex-box">
      <slot></slot>
    </div>
  </CenterLayout>
</template>
<style scoped>
.flex-box {
  margin: 10px;
  width: min(100%, max(800px, 60%));
}
</style>
