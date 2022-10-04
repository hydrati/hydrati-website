<template>
  <div class="nav" draggable="false">
    <router-link class="" to="/">Blog</router-link>
    <router-link to="/">Projects</router-link>
    <router-link to="/">Links</router-link>
    <router-link to="/">About</router-link>
  </div>
</template>

<style scoped>
.nav {
  @apply z-50 m-0 p-0 w-full flex relative left-0 top-0 flex-row
    justify-center align-middle items-center text-center
    select-none text-1rem;
}
.nav > a {
  text-decoration: none;

  @apply text-white opacity-75 transition-opacity rounded-sm p-5
    inline-block hover:opacity-100;
}
</style>
