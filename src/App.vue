<script setup lang="ts">
import { onMounted, ref } from "vue";
import Header from "./components/Header.vue";
import InputRange from "./components/InputRange.vue";
import Toggle from "./components/Toggle.vue";
import ValueInput from "./components/ValueInput.vue";
import Iconify from "./components/Iconify.vue";

import { currencyStore } from "./stores/currency.store";
import DisplayValues from "./components/DisplayValues.vue";
import { currencyController } from "./controllers/currency.controller";

const step = ref(1);
const updateGorjeta = (value: number) => {
  // gorjeta.value = value;
  currencyStore().setGorjeta(value);
};
const updatePessoa = (value: number) => {
  // pessoas.value = value;
  currencyStore().setPessoas(value);
};
const changeStep = () => {
  if (step.value === 1) {
    step.value = 2;
  } else {
    step.value = 1;
  }
};

onMounted(async () => {
  if (!currencyStore().getConversions.length) {
    const valor = await currencyController.convertToReal(["EUR", "USD"]);
    for (const key in valor) {
      currencyStore().setConversions({
        code: valor[key].code,
        bid: valor[key].bid,
      });
    }
  }
  console.log(currencyStore().getConversions, "conversion store?");
});
</script>

<template>
  <Header />
  <main>
    <template v-if="step === 1">
      <Toggle />
      <ValueInput />
      <InputRange
        symbol="%"
        :min="10"
        :max="20"
        @update="updateGorjeta"
        label="Gorjeta"
        :model-value="currencyStore().getGorjeta"
      />
      <InputRange
        @update="updatePessoa"
        :min="2"
        :max="16"
        label="Pessoas"
        :model-value="currencyStore().getPessoas"
      />
    </template>
    <template v-if="step === 2">
      <DisplayValues />
    </template>
    <button @click="changeStep" class="step">
      <Iconify
        :icon="
          step === 1 ? 'iconamoon:arrow-right-2' : 'iconamoon:arrow-left-2'
        "
      />
    </button>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 24px 0;
}
.step {
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  padding: 0;
  position: absolute;
  right: 2rem;
  bottom: 2rem;
}

@media (min-width: 600px) {
  .step {
    display: none;
  }
}
</style>
