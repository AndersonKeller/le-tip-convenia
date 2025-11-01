<script setup lang="ts">
import { utilController } from "../controllers/util.controller";
import { currencyStore } from "../stores/currency.store";
const selected = currencyStore().getSelectedCurrency;
</script>
<template>
  <section>
    <div class="info">
      <p>Conta</p>
      <h3>
        <strong>{{ selected.symbol }}</strong>
        {{
          utilController.asMoney(currencyStore().getBaseValue, selected.name)
        }}
      </h3>
    </div>
    <div class="info">
      <p>Gorjeta</p>
      <h3>
        <strong>{{ selected.symbol }}</strong>
        {{
          utilController.asMoney(
            currencyStore().calculateGorjeta,
            selected.name
          )
        }}
      </h3>
    </div>
    <div class="info">
      <p>Total</p>
      <h3>
        <strong>{{ selected.symbol }}</strong>
        {{
          utilController.asMoney(currencyStore().getTotalValue, selected.name)
        }}
      </h3>
    </div>
    <div class="info">
      <p>por Pessoa</p>
      <h3>
        <strong>{{ selected.symbol }}</strong>
        {{
          utilController.asMoney(
            currencyStore().calculateValorPessoa,
            selected.name
          )
        }}
      </h3>
    </div>
    <div class="info">
      <p>em R$</p>
      <h3>
        <strong>R$</strong>
        {{ utilController.asMoney(currencyStore().convertToReal, "BRL") }}
      </h3>
    </div>
  </section>
</template>
<style scoped>
section {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>
