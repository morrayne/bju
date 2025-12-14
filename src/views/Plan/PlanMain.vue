<script setup lang="ts">
// vue
import { ref } from "vue";

// imports
import Wrapper from "./wraps/PlanWrapper.vue";
import NameGenderAge from "./page/NameGenderAge.vue";
import Activity from "./page/Activity.vue";

// vars
const pageIndex = ref<number>(0);
function handlePageChange(isForward: boolean) {
  if (isForward) {
    pageIndex.value++;
  } else if (!isForward && pageIndex.value !== 0) {
    pageIndex.value--
  }
  console.log(pageIndex.value);
}
</script>

<template>
  <Wrapper>
    <NameGenderAge :pageIndex="pageIndex" @page-index-change="handlePageChange" />
    <Activity :pageIndex="pageIndex" @page-index-change="handlePageChange" />
  </Wrapper>
</template>

<style scoped lang="scss"></style>
