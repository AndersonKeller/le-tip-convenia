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
import { watch } from "vue";

const step = ref(1);
const responsive = ref(window.innerWidth < 601);
const updateGorjeta = (value: number) => {
  currencyStore().setGorjeta(value);
};
const updatePessoa = (value: number) => {
  currencyStore().setPessoas(value);
};
const changeStep = () => {
  if (step.value === 1) {
    step.value = 2;
  } else {
    step.value = 1;
  }
};
watch(
  () => responsive.value,
  () => {
    if (!responsive.value) {
      step.value = 1;
    }
  }
);
onMounted(async () => {
  window.addEventListener("resize", () => {
    responsive.value = window.innerWidth < 601;
  });
  if (!currencyStore().getConversions.length) {
    const valor = await currencyController.convertToReal(["EUR", "USD"]);
    for (const key in valor) {
      currencyStore().setConversions({
        code: valor[key].code,
        bid: valor[key].bid,
      });
    }
  }
});
</script>

<template>
  <Header />
  <main :class="[!responsive ? 'desktop' : '']">
    <section v-show="step === 1">
      <Toggle v-show="step === 1" />
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
    </section>
    <template v-if="step === 2 || !responsive">
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
  padding: 24px 0;
  justify-content: center;
}
section {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.desktop {
  flex-direction: row;
  justify-content: space-between;
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
