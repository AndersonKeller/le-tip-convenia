<script setup lang="ts">
import { ref, watch } from "vue";
import { currencyStore } from "../stores/currency.store";

const moneyValue = ref(currencyStore().getBaseValue);

watch(
  () => moneyValue.value,
  () => {
    currencyStore().setBaseValue(moneyValue.value);
  }
);
</script>
<template>
  <div class="content">
    <label for="value">Valor</label>
    <div class="content__input">
      <span class="content__symbol">{{
        currencyStore().getSelectedCurrency.symbol
      }}</span>
      <input
        v-model="moneyValue"
        type="number"
        min="0.00"
        oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
        max="10000.00"
        :maxlength="8"
        inputmode="numeric"
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
  min-width: 24px;
  font-size: 2rem;
  font-style: italic;
  font-weight: 300;
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
  font-size: 1.5rem;
}
.content__input input::-webkit-outer-spin-button,
.content__input input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
