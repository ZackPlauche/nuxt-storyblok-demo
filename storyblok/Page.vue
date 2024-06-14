<template>
  <div v-editable="blok">
    <Header v-if="blok.show_header" />
    <StoryblokComponent v-for="blok in blok.body" :key="blok._uid" :blok="blok" />
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>