<script setup lang="ts">
// types
import type { PlanSimpleInputPropsType } from "../PlanMain.vue";

// props
const props = defineProps<{
  data: PlanSimpleInputPropsType;
  modelValue?: number;
}>();

// emits
const emit = defineEmits<{
  (e: "update:modelValue", value: number): void;
}>();

function handleInput(e: Event) {
  const value = (e.target as HTMLInputElement).value;
  const numValue = Number(value);
  if (!isNaN(numValue)) {
    emit("update:modelValue", numValue);
  } else {
    emit("update:modelValue", 0);
  }
}
</script>

<template>
  <div class="simple-input">
    <div class="top-text" :style="{ '--css-var-name': `var(--${props.data.topText})` }"></div>
    <input type="number" :placeholder="props.data.placeholder" :value="modelValue" @input="handleInput" />
  </div>
</template>

<style scoped lang="scss">
.simple-input {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  .top-text {
    font-size: 0.8rem;

    &::before {
      content: var(--css-var-name);
    }
  }

  input[type="number"] {
    color: var(--text-a);
    padding: 0.5rem 1rem;
    background: var(--back-c);
    border: solid 0.0625rem var(--back-d);
    outline: none;
    border-radius: 0.5rem;
    font-size: 0.8rem;
  }

  input[type="number"]:hover,
  input[type="number"]:focus,
  input[type="number"]:active {
    border: solid 0.0625rem var(--text-a);
  }

  ::placeholder {
    color: var(--text-c);
  }
}
</style>
