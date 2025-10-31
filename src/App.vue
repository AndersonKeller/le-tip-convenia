<script setup lang="ts">
import { ref } from "vue";
import Header from "./components/Header.vue";
import InputRange from "./components/InputRange.vue";
import Toggle from "./components/Toggle.vue";
import ValueInput from "./components/ValueInput.vue";

const gorjeta = ref(10);
const pessoas = ref(2);
const updateGorjeta = (value: number) => {
  gorjeta.value = value;
  console.log("update gorjeta", gorjeta.value);
};
const updatePessoa = (value: number) => {
  pessoas.value = value;
  console.log("update gorjeta", pessoas.value);
};
</script>

<template>
  <Header />
  <main>
    <Toggle />
    <ValueInput />
    <InputRange
      symbol="%"
      :min="10"
      :max="20"
      @update="updateGorjeta"
      label="Gorjeta"
      :model-value="gorjeta"
    />
    <InputRange
      @update="updatePessoa"
      :min="2"
      :max="16"
      label="Pessoas"
      :model-value="pessoas"
    />
    <button></button>
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
