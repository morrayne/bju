<script setup>
import login_screen from "@/components/onboarding/login_screen.vue";
import register_screen from "@/components/onboarding/register_screen.vue";
import plan_screen from "@/components/onboarding/plan_screen.vue";
import mode_screen from "@/components/onboarding/mode_screen.vue";
//
import end_screen from "@/components/onboarding/end_screen.vue";
</script>

<template>
  <div class="onboarding">
    <login_screen />
    <register_screen />
    <plan_screen />
    <mode_screen />
    <!--  -->
    <end_screen />
  </div>
</template>

<style scoped lang="scss">
.onboarding {
  height: 100%;
}
</style>
