<script setup lang="ts">

</script>

<template>
  <div class="holder">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.holder {
  min-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.75rem;
  position: relative;
  transition: 0.25s;
}
</style>
