<script setup lang="ts">
import PageLayout from '@/components/PageLayout.vue';
import websiteName from '@/utils/website-name';
import { useTitle } from '@vueuse/core';
useTitle(websiteName);
</script>

<template>
  <PageLayout>
    <template #header> </template>
    <template #aside></template>
  </PageLayout>
</template>
