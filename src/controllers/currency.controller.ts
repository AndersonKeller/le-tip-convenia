import { serviceController } from "./service.controller";

const ENDPOINTS = {
  LAST: "/last",
};

export const currencyController = {
  convertToReal: async (base_currency: string[]) => {
    const response = await serviceController.get(
      `${ENDPOINTS.LAST}/${base_currency
        .map((base) => `${base.toUpperCase()}-BRL`)
        .join(",")}`
    );
    if (response) {
      //SETADO NO LOCAL STORAGE, QUANDO A API ESTOURAR RATE LIMIT, RETORNA O VALOR LOCAL
      localStorage.setItem("converter", JSON.stringify(response));
      return response;
    } else {
      const local = localStorage.getItem("converter");
      return local ? JSON.parse(local) : local;
    }
  },
};
