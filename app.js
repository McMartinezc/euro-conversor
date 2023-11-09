import {
  createApp,
  ref,
  computed,
} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  setup() {
    const amount = ref("");
    const dolar = 1.07;
    const yens = 161.47;

    const convertToDollars = computed(() => {
      return amount.value * dolar; // TODO: Apartado 1. Modifica este return para realizar la conversión de euros a dolares

    });

    const convertToYens = computed(()=>{
      return amount.value * yens;
    })

    return {
      amount,
      convertToDollars,
      convertToYens
    };
  },
}).mount("#app");
