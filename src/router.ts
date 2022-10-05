import { createRouter, createWebHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'

const AsyncIndex = defineAsyncComponent({
  loader: async () => await import('./pages/IndexPage.vue'),
  loadingComponent: async () => await import('./components/Loading.vue'),
})

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: AsyncIndex,
    },
  ],
})
