<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
  export default {
    components: {
      AppHeader,
      AppFooter,
    },
  };
</script>
<template>
    <div id="app" >
    <AppHeader />
    <div class="container mt-3">
      <router-view />
      <AppFooter />
    </div>

  </div>
</template>

<style>
  .page {
    max-width: 400px;
    margin: auto;
  }
</style>
