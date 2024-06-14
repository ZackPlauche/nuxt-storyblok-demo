<template>
  <div class="px-5">
    <div class="mx-auto max-w-screen-2xl" :class="innerClass"><slot></slot></div>
  </div>
</template>

<script setup>

defineProps({
  innerClass: {
    type: String,
    default: 'container'
  }
})


</script>