import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";

import {required} from '@vuelidate/validators'

export const useFormStore = defineStore({
  id: "formStore",
  state: () => ({
  }),
  actions: {
    fungsi(e){
      
    }
  },
  getters: {
    oddOrEven: (state) => {
      if (state.count % 2 == 0) return "even"
      return "odd"
    }
  }
});
