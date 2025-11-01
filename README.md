# OBJETIVO

    Calculadora de gorjeta onde você insere o total da conta, o quanto quer dar de gorjeta e quantas pessoas vão dividir a conta. O total da conta pode ser em USD(Dólar) ou EUR(Euro). Deve ser exibido a conversão para BRL(R$),

# Tecnologias usadas

    Vue 3 + TypeScript + Vite

# Bibliotecas

    Pinia - para gerenciamento de estados e compartilhar reativadade
    Axios - para requisiçoes
    Iconify - para icones

Para busca de informações das cotações, foi usada a Api da [AWESOME](https://docs.awesomeapi.com.br/api-de-moedas)
Para conseguir usa-la, deve-se configurar a chave de api conforme exemplo do arquivo .env_exemple

## Para executar o projeto

    requisitos:
        Node.js version 20.19+ ou 22.12+

    - clone o repositório
    - instale as dependências
        npm install
        ou
        yarn add

    - rode o comando para dev
        npm run dev
        acessa o endereço local
        por padrão o Vite roda na porta 5173
            http://localhost:5173/
        ou verifique no console o endereço que ele está rodando

    - ou para build
        npm run build

Live preview aqui - [LE / TIP](https://le-tip-convenia.vercel.app/)
