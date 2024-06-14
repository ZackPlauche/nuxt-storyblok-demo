<template>
  <Hero
    v-editable="blok"
    :class="heroClasses"
    :headline="blok.headline"
    :subheadline="blok.subheadline"
    :cta="{
      text: blok.cta,
      link: blok.cta_link?.url || blok.cta_link?.story?.url
    }"
    :background-image="{
      filename: blok.background_image.filename || '/tech.jpg',
      altText: blok.background_image.alt
    }"
    />
</template>


<script setup>
const props = defineProps({ blok: Object })

const heroClasses = computed(() => {
  return props.blok.textColor === 'black' ? 'text-black' : 'text-white'
})

</script>