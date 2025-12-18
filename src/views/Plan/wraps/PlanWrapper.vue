<script setup lang="ts">
import PlanControls from './PlanControls.vue';

// props
const props = defineProps<{
  pageIndex: number
}>()

// emits
const emit = defineEmits<{
  (e: "pageIndexChange", isForward: boolean): void;
}>();

function handlePageChange(isForward: boolean) {
  emit('pageIndexChange', isForward);
}
</script>

<template>
  <div class="wrapper">
    <slot></slot>
    <PlanControls :pageIndex="pageIndex" @page-index-change="handlePageChange" />
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  max-width: 2160px;
  max-height: 1080px;
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;
}
</style>
