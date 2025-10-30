<script setup lang="ts">
import Header from "./components/Header.vue";
import Toggle from "./components/Toggle.vue";
import ValueInput from "./components/ValueInput.vue";
</script>

<template>
  <Header />
  <main>
    <Toggle />
    <ValueInput />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 24px 0;
}
</style>
