<script setup lang="ts">
import { ref, watch } from "vue";
import { currencyStore } from "../stores/currency.store";
const selected = ref(currencyStore().getSelectedCurrency);
const moneyValue = ref(currencyStore().getBaseValue);
const emit = defineEmits(["update"]);
watch(
  () => currencyStore().getSelectedCurrency,
  () => {
    console.log("watch", currencyStore().getSelectedCurrency);
    selected.value = currencyStore().getSelectedCurrency;
  }
);
watch(
  () => moneyValue.value,
  () => {
    console.log(moneyValue.value, "aki?");
    currencyStore().setBaseValue(moneyValue.value);
  }
);
</script>
<template>
  <div class="content">
    <label for="value">Valor</label>
    <div class="content__input">
      <span class="content__symbol">{{ selected.symbol }}</span>
      <input
        v-model.number="moneyValue"
        type="number"
        min="0.00"
        max="10000.00"
        step="0.01"
        id="value"
      />
    </div>
  </div>
</template>
<style scoped>
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
}
.content__input {
  display: flex;
  gap: 12px;
  align-items: center;
  width: 100%;
}
.content__symbol {
  min-width: 14px;
}
.content__input input {
  height: 45px;
  background-color: transparent;
  outline: none;
  border: 2px solid var(--color-gray-900);
  max-width: 228px;
  width: 100%;
  color: var(--color-gray-900);
  text-align: right;
  padding-right: 8px;
  font-family: var(--font-family);
}
</style>
