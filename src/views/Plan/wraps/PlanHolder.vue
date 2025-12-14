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
  <div class="holder">
    <slot></slot>
    <div :class="props.pageIndex === 0 ? 'solo' : 'duo'">
      <button class="back" @click="goBack()">back</button>
      <button class="forward" @click="goForward()">forward</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.holder {
  min-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.75rem;
  position: relative;

  .solo,
  .duo {
    width: calc(100% - 1.5rem);
    position: absolute;
    bottom: 0.75rem;
    left: 0.75rem;
    display: flex;
    justify-content: end;
    gap: 0.75rem;
    overflow: hidden;

    .forward,
    .back {
      min-width: 50%;
      padding: 0.5rem 0.85rem;
      border-radius: 0.5rem;
      transition: 0.5s;
    }

    .back {
      color: var(--text-a);
      background: var(--back-b);
      position: relative;
      z-index: 1;
    }

    .back:hover,
    .back:focus,
    .back:active {
      background: var(--back-a);
    }

    .forward {
      color: var(--back-a);
      background: var(--text-b);
      position: relative;
      z-index: 2;
    }

    .forward:hover,
    .forward:focus,
    .forward:active {
      background: var(--text-a);
    }
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
}
</style>
