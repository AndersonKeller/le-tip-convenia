<script setup lang="ts"></script>
<template>
  <div class="content">
    <label for="value">Valor</label>
    <input type="text" id="value" />
  </div>
</template>
<style scoped>
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
}
.content input {
  height: 45px;
  background-color: transparent;
  outline: none;
  border: 2px solid var(--color-gray-900);
  max-width: 120px;
}
</style>
