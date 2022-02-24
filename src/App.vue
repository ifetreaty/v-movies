<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Header from './components/Header.vue';
</script>

<template>
  <div class="flex flex-col text-black">
    <Header></Header>
    <RouterView />
  </div>
</template>

<style>
@import '@/assets/base.css';
</style>
