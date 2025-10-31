import { defineStore } from "pinia";
interface iCurrencies {
  name: string;
  symbol: string;
}
export const currencyStore = defineStore("currencyStore", {
  state: () => {
    return {
      selectedCurrency: { name: "EUR", symbol: "€" } as iCurrencies,
      currencies: [
        {
          name: "EUR",
          symbol: "€",
        },
        { name: "USD", symbol: "$" },
      ] as iCurrencies[],
    };
  },
  getters: {
    getCurrencies: (state) => state.currencies,
    getSelectedCurrency: (state) => state.selectedCurrency,
  },
  actions: {
    setSelectedCurrency(value: iCurrencies) {
      this.selectedCurrency = value;
    },
  },
});
