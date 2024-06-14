<template>
  <!-- Hero Section -->
  <section class="relative overflow-hidden [clip-path:inset(0)]" :class="heroClasses">
    <Container
      class="flex w-full items-center py-20 h-screen relative bg-gradient-to-t from-white/20 to-transparent"
      inner-class="text-center">

      <!-- Content -->
      <h1 class="text-7xl font-bold text-center">{{ headline }}</h1>
      <p class="text-4xl font-light text-center mt-2">{{ subheadline }}</p>
      <NuxtLink v-if="cta" class="btn px-7 py-3 text-2xl mt-10" :to="cta.link">{{ cta.text }}</NuxtLink>

      <!-- Background Image -->
      <img v-if="backgroundImage" class="fixed block top-0 left-0 w-full h-full object-center object-cover -z-10" :src="backgroundImage.filename" :alt="backgroundImage.alt">

    </Container>
  </section>
</template>


<script setup lang=ts>

interface BackgroundImage {
  filename: string
  alt: string
}

interface Cta {
  text: string
  link: string
}

const props = defineProps<{
  backgroundImage: BackgroundImage,
  headline: string,
  subheadline: string,
  cta?: Cta,
  textColor?: string
}>()

const heroClasses = computed(() => {
  return props.textColor === 'black' ? 'text-black' : 'text-white'
})

</script>