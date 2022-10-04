<template>
  <template v-if="page.ready">
    <Article :title="page.title">
      <div v-html="page.html" />

      <p class="footnote">Last modified: {{ page.date }}</p>

      <p class="footnote">
        <a
          target="_blank"
          href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
          style="color: inherit"
          >CC BY-NC-SA 4.0</a
        >
        2022-PRESENT © Hydration. View
        <a target="_blank" :href="props.file" style="color: inherit">
          source
        </a>
      </p>
    </Article>
  </template>
  <template v-else>
    <p class="loading">Loading</p>
  </template>
</template>

<style scoped>
.footnote {
  @apply text-size-0.5rem opacity-50 select-none mb-0.25rem;
}
.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0;
  padding: 0;
  transform: translate(-50%, -50%);
  font-size: 0.85rem;
  color: white;
  @apply opacity-10;
}
</style>

<script setup lang="ts">
import Article from '../components/Article.vue'
import { onMounted, reactive } from 'vue'
import { useProgress } from '@marcoschulte/vue3-progress'

const props = defineProps({
  file: {
    type: String,
    required: true,
  },
})

const page = reactive({
  title: 'No title',
  html: '',
  ready: false,
  date: 'unknown',
})

const progress = useProgress()

onMounted(async () => {
  if (!page.ready) {
    const { useMarkdown } = await import('../composables/markdown')
    const { finish } = progress.start()
    const resp = await fetch(props.file)
    const source = await resp.text()
    finish()

    const [md, matter] = useMarkdown(source)
    if (matter.data?.title != null) {
      page.title = matter.data.title
    }

    if (matter.data?.date != null) {
      page.date = new Date(matter.data.date).toUTCString()
    }

    page.html = md
    page.ready = true
  }
})
</script>
