<template>
  <TopNav />
  <router-view />
</template>

<script setup>
import TopNav from './components/TopNav.vue'
</script>

<style>
body {
  font-family: 'Lato', sans-serif;
  background-color: #f7f9fc;
}
</style>