<script setup lang="ts">
// vue
import { ref, provide, watch } from "vue";
import type { Ref } from "vue";

// imports
import Wrapper from "./wraps/PlanWrapper.vue";
import NameGender from "./page/NameGenderAge.vue";
import AgeHeightWeight from "./page/HeightWeightBF.vue";
import Activity from "./page/Activity.vue";

// types
export interface PlanUserData {
  name?: string;
  age?: number;
  gender: string;
  height?: number;
  activity: number;
  weight?: number;
}
export interface PlanSimpleSwitcherPropsType {
  topText: string;
  options: string[];
}
export interface PlanNameGenderType {
  name?: string;
  gender: string;
  age?: number;
}
export interface PlanAgeHeightWeightType {
  height?: number;
  weight?: number;
}
export interface PlanSimpleInputPropsType {
  topText: string;
  placeholder: string;
}

// vars
const userData = ref<PlanUserData>({
  name: undefined,
  age: undefined,
  gender: "male",
  height: undefined,
  activity: 1.2,
});

// provide userData и функция обновления userData
provide<Ref<PlanUserData>>('userData', userData);
provide('updateUserData', updateUserData);
function updateUserData(updates: Partial<PlanUserData>) {
  Object.assign(userData.value, updates);
}

// страницы формы
const pageIndex = ref<number>(0);
function handlePageChange(isForward: boolean) {
  if (isForward) {
    pageIndex.value++;
  } else if (!isForward && pageIndex.value !== 0) {
    pageIndex.value--;
  }
}

// проверка заполнения формы
watch(userData, (newValue) => {
  console.log(newValue)
}, {deep: true});
</script>

<template>
  <Wrapper :pageIndex="pageIndex" @page-index-change="handlePageChange">
    <NameGender :style="{transform: `translateX(${pageIndex * -100}%)`}" />
    <AgeHeightWeight :style="{transform: `translateX(${pageIndex * -100}%)`}" />
    <Activity :style="{transform: `translateX(${pageIndex * -100}%)`}" />
  </Wrapper>
</template>

<style scoped lang="scss"></style>
