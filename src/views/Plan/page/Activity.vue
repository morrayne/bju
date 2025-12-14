<script setup lang="ts">
// imports
import PlanHolder from "../wraps/PlanHolder.vue";

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
  <PlanHolder :pageIndex="pageIndex" @page-index-change="handlePageChange">
    main
  </PlanHolder>
</template>