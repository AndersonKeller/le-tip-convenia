<script setup lang="ts">
import { utilController } from "../controllers/util.controller";
import { currencyStore } from "../stores/currency.store";
</script>
<template>
  <section>
    <div class="info">
      <p>Conta</p>
      <h3>
        <strong>{{ currencyStore().getSelectedCurrency.symbol }}</strong>
        {{
          utilController.asMoney(
            currencyStore().getBaseValue,
            currencyStore().getSelectedCurrency.name
          )
        }}
      </h3>
    </div>
    <div class="info">
      <p>Gorjeta</p>
      <h3>
        <strong>{{ currencyStore().getSelectedCurrency.symbol }}</strong>
        {{
          utilController.asMoney(
            currencyStore().calculateGorjeta,
            currencyStore().getSelectedCurrency.name
          )
        }}
      </h3>
    </div>
    <div class="info">
      <p>Total</p>
      <h3>
        <strong>{{ currencyStore().getSelectedCurrency.symbol }}</strong>
        {{
          utilController.asMoney(
            currencyStore().getTotalValue,
            currencyStore().getSelectedCurrency.name
          )
        }}
      </h3>
    </div>
    <div class="info">
      <p>por Pessoa</p>
      <h3>
        <strong>{{ currencyStore().getSelectedCurrency.symbol }}</strong>
        {{
          utilController.asMoney(
            currencyStore().calculateValorPessoa,
            currencyStore().getSelectedCurrency.name
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
section .info h3,
section .info strong {
  font-size: 2rem;
  font-style: italic;
  font-weight: 300;
}
</style>
