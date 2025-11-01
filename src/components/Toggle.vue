<script setup lang="ts">
import { ref } from "vue";
import { currencyStore } from "../stores/currency.store";

const options = {
  USD: { name: "USD", symbol: "$" },
  EUR: { name: "EUR", symbol: "€" },
};
const selectedCurrency = ref(currencyStore().getSelectedCurrency);
const updateCurrency = () => {
  if (selectedCurrency.value?.name === options.EUR.name) {
    selectedCurrency.value = options.USD;
  } else {
    selectedCurrency.value = options.EUR;
  }
  currencyStore().setSelectedCurrency(selectedCurrency.value!);
};
</script>
<template>
  <div class="toggle">
    <span
      :class="[
        selectedCurrency?.name === options.EUR.name ? 'currency_active' : '',
      ]"
      >{{ options.EUR.name }}</span
    >
    <div class="toggle_switch">
      <input class="toggle_input" id="toggle" type="checkbox" />
      <label
        @click="updateCurrency"
        id="currency"
        class="toggle_label"
        for="toggle"
      ></label>
    </div>
    <span
      :class="[
        selectedCurrency?.name === options.USD.name ? 'currency_active' : '',
      ]"
      >{{ options.USD.name }}</span
    >
  </div>
</template>
<style scoped>
.toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  gap: 12px;
}
.currency_active {
  color: var(--color-primary);
  text-decoration: underline;
}
.toggle_switch {
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
}
.toggle_switch .toggle_input {
  display: none;
}

.toggle_switch .toggle_label {
  position: absolute;
  top: 0;
  left: 0;
  width: 48px;
  height: 24px;
  background-color: var(--color-primary);
  cursor: pointer;
  transition: background-color 0.3s;
}

.toggle_switch .toggle_label::before {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  top: 2px;
  left: 2px;
  background-color: var(--color-gray-300);
  border-radius: 4px;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.63);
  transition: transform 0.35s ease-in-out;
}

.toggle_switch .toggle_input:checked + .toggle_label::before {
  transform: translateX(24px);
}
</style>
