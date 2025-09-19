<template>
  <div class="min-h-screen flex flex-col bg-base-200 text-base-content">
        <Navbar />
    <main class="flex-1 w-full max-w-7xl mx-auto p-4 md:p-8">
       <router-view></router-view>
    </main>

  </div>
</template>

<script setup>

import Navbar from './components/Navigation.vue';

</script>

<style>
</style>