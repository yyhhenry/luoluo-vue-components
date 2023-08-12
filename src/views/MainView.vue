<script setup lang="ts">
import FlexCard from '@/components/FlexCard.vue';
import HeaderText from '@/components/HeaderText.vue';
import PageLayout from '@/components/PageLayout.vue';
import SwitchDark from '@/components/SwitchDark.vue';
import websiteName from '@/utils/website-name';
import { useTitle } from '@vueuse/core';
import { ElMenu, ElMenuItem, ElSubMenu } from 'element-plus';
useTitle(websiteName);
</script>

<template>
  <PageLayout>
    <template #header>
      <HeaderText>Main Title</HeaderText>
    </template>
    <template #header-extra><SwitchDark /></template>
    <template #aside>
      <ElMenu :mode="'vertical'">
        <ElMenuItem index="a">Nav A</ElMenuItem>
        <ElSubMenu index="b">
          <template #title>Nav B</template>
          <ElMenuItem index="b1">Nav B1</ElMenuItem>
          <ElMenuItem index="b2">Nav B2</ElMenuItem>
        </ElSubMenu>
      </ElMenu>
    </template>
    <FlexCard>1</FlexCard>
    <FlexCard>2</FlexCard>
    <FlexCard>3</FlexCard>
  </PageLayout>
</template>
