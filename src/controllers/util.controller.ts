export const utilController = {
  asMoney: (value: number, currency: string) => {
    const locale = currency === "BRL" ? "pt-BR" : "en-US";
    const formatter = new Intl.NumberFormat(locale, {
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    const formatedValue = formatter.format(value);
    return formatedValue;
  },
};
