<template>
  <div class="nav" draggable="false">
    <router-link to="/">Blog</router-link>
    <router-link to="/">Projects</router-link>
    <router-link to="/">Links</router-link>
    <router-link to="/">About</router-link>
  </div>
</template>

<style scoped>
.nav {
  @apply z-50 m-0 px-0 py-2 w-full flex absolute left-0 top-0 flex-row
    justify-center align-middle items-center text-center
    select-none text-1rem opacity-0 hover:opacity-100 transition-opacity;
}
.nav > a {
  text-decoration: none;

  @apply text-white opacity-75 transition-opacity rounded-sm p-5
    inline-block hover:opacity-100;
}
</style>
