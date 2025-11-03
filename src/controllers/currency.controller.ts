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
      //MOCK DE CONVERSÃO PARA QUANDO A API NÃO RESPONDE, COM CORS
      const mock: any = {
        USDBRL: {
          code: "USD",
          bid: "5.7282",
        },
        EURBRL: {
          code: "EUR",
          bid: "6.8195",
        },
      };
      return local ? JSON.parse(local) : mock;
    }
  },
};
