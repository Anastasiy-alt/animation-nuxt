<script setup>
const type = ref(useRoute().query.type)
</script>

<template>
  <MainVariantOne v-if="type === 'one'" />
  <MainVariantTwo v-if="type === 'two'" />
</template>

<style>

</style>