<script setup lang="ts">
// types
import type { PlanSimpleInputPropsType } from "../../../trash/PlanMain.vue";

// props
const props = defineProps<{
  data: PlanSimpleInputPropsType;
  modelValue?: string;
}>();

// emits
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

function handleInput(e: Event) {
  const value = (e.target as HTMLInputElement).value;
  emit('update:modelValue', value);
}
</script>

<template>
  <div class="simple-input">
    <div class="top-text" :style="{'--css-var-name': `var(--${props.data.topText})`}"></div>
    <input type="text" :placeholder="props.data.placeholder" :value="modelValue" @input="handleInput" />
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

  input[type="text"] {
    color: var(--text-a);
    padding: 0.5rem 1rem;
    background: var(--back-c);
    border: solid 0.0625rem var(--back-d);
    outline: none;
    border-radius: 0.5rem;
    font-size: 0.8rem;
  }

  input[type="text"]:hover,
  input[type="text"]:focus,
  input[type="text"]:active {
    border: solid 0.0625rem var(--text-a);
  }
  
  ::placeholder {
    color: var(--text-c);
  }
}
</style>
