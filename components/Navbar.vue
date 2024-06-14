<template>
  <Container class="bg-white w-full" inner-class="py-5 flex justify-between">
    <!-- Navbar Logo -->
    <NuxtLink class="text-3xl uppercase font-medium hover:text-primary-500 transition-colors" to="/">My Logo</NuxtLink>

    <!-- Navbar Links -->
    <nav class="flex gap-5 items-center">
      <template v-for="blok in headerMenu" :key="blok._uid">
        <NuxtLink :to="localePath(`/${blok.link.story.url}`)">{{ blok.link.story.name }}</NuxtLink>
      </template>
      <div class="flex items-center divide-x">
        <!-- <NuxtLink :to="{ name: 'contact' }">Contact</NuxtLink> -->
        <template v-for="lang in availableLocales" :key="lang">
          <NuxtLink :to="switchLocalePath(lang)" class="uppercase px-1">
            {{ lang }}
          </NuxtLink>
        </template>
      </div>
      <NuxtLink class="btn" to="/">Get Started</NuxtLink>
    </nav>
  </Container>
</template>

<script setup>
const storyblokApi = useStoryblokApi()

const { data } = await storyblokApi.get('cdn/stories/config', {
  version: 'draft',
  resolve_links: 'url',
})

const localePath = useLocalePath()
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})

const headerMenu = ref(null)
headerMenu.value = data.story.content.header_menu



</script>


<style scoped>
nav a:not(.btn) {
  @apply hover:text-primary-500 transition-colors;

}

nav a.router-link-active:not(.btn) {
  @apply text-primary-500;
}
</style>