<script setup lang="ts">
// props
const props = defineProps<{
  pageIndex: number;
}>();

// emits
const emit = defineEmits<{
  (e: "pageIndexChange", isForward: boolean): void;
}>();

// going back
function goBack() {
  emit("pageIndexChange", false);
}

// going forward
function goForward() {
  emit("pageIndexChange", true);
}
</script>

<template>
  <div :class="props.pageIndex === 0 ? 'solo' : 'duo'">
    <button class="back" @click="goBack()"></button>
    <button class="forward" @click="goForward()"></button>
  </div>
</template>

<style scoped lang="scss">
.solo,
.duo {
  width: calc(100% - 1.5rem);
  position: fixed;
  bottom: 0.75rem;
  left: 0.75rem;
  display: flex;
  justify-content: end;
  gap: 0.75rem;
  overflow: hidden;

  .forward,
  .back {
    min-width: calc(50% - 0.5rem);
    padding: 0.5rem 0.85rem;
    border-radius: 0.5rem;
    transition: 0.25s;
  }

  .back {
    color: var(--text-a);
    background: var(--back-b);
    position: relative;
    z-index: 1;

    &::after {
      content: var(--back);
    }
  }

  // .back:hover,
  // .back:focus,
  // .back:active {
  //   background: var(--back-a);
  // }

  .forward {
    color: var(--back-a);
    background: var(--text-a);
    position: relative;
    z-index: 2;

    &::after {
      content: var(--forward);
    }
  }

  // .forward:hover,
  // .forward:focus,
  // .forward:active {
  //   background: var(--text-a);
  // }
}

.duo {
  .forward,
  .back {
    width: 50%;
  }
}

.solo {
  overflow: hidden;

  .forward {
    min-width: 100%;
  }
}
</style>
