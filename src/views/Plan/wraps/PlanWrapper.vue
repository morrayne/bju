<script setup lang="ts"></script>

<template>
  <div class="wrapper">
    <slot></slot>
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
