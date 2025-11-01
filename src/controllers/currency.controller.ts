import { serviceController } from "./service.controller";
import { storageController } from "./storage.controller";

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
      storageController.setLocal("converter", response);
      return response;
    } else {
      const local = storageController.getLocal("converter");
      return local ? JSON.parse(local) : local;
    }
  },
};
