<template>
  <StoryblokComponent v-if="pending === false && story" :blok="story.content" />
</template>

<script setup>
const { $preview } = useNuxtApp()
const { slug } = useRoute().params
const url = slug && slug.length > 0 ? slug.join('/') : 'home'


// API options
const version = $preview ? 'draft' : 'published'
const { locale } = useI18n()
const resolveRelations = ['popular-articles.articles']


// Full Static with refresh approach
const { data: story, pending } = await useAsyncData(
  `${locale.value}-${url}`,
  async () => {
    const { data } = await useStoryblokApi().get(`cdn/stories/${url.replace(/\/$/, '')}`, {
      version,
      language: locale.value,
      resolve_relations: resolveRelations,
    })
    return data?.story
  }
)


onMounted(() => {
  if ($preview && story.value && story.value.id) {
    useStoryblokBridge(
      story.value.id,
      (evStory) => story.value = evStory,
      {
        resolveRelations,
      }
    )
  }
})
</script>