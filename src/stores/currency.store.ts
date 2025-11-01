import { defineStore } from "pinia";
interface iCurrencies {
  name: string;
  symbol: string;
}
interface iConversion {
  code: String;
  bid: String;
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
      conversions: [] as iConversion[],
      baseValue: 0,
      gorjeta: 10,
      totalValue: 0,
      pessoas: 2,
    };
  },
  getters: {
    getCurrencies: (state) => state.currencies,
    getSelectedCurrency: (state) => state.selectedCurrency,
    getConversions: (state) => state.conversions,
    getBaseValue: (state) => state.baseValue,
    getGorjeta: (state) => state.gorjeta,
    getPessoas: (state) => state.pessoas,
    calculateGorjeta(): number {
      return (this.getBaseValue * this.getGorjeta) / 100;
    },
    calculateValorPessoa(): number {
      return Number((this.getTotalValue / this.getPessoas).toFixed(2));
    },
    getTotalValue(): number {
      this.totalValue =
        this.getBaseValue + (this.getBaseValue * this.getGorjeta) / 100;
      return this.totalValue;
    },
    convertToReal(): number {
      const findBid = this.conversions.find(
        (item) => item.code === this.selectedCurrency.name
      );
      const realValue = this.getTotalValue * Number(findBid?.bid);

      return realValue;
    },
  },
  actions: {
    setSelectedCurrency(value: iCurrencies) {
      this.selectedCurrency = value;
    },
    setConversions(value: iConversion) {
      this.conversions.push(value);
    },
    setBaseValue(value: number) {
      this.baseValue = value;
    },
    setTotalValue(value: number) {
      this.totalValue = value;
    },
    setGorjeta(value: number) {
      this.gorjeta = value;
    },
    setPessoas(value: number) {
      this.pessoas = value;
    },
  },
});
