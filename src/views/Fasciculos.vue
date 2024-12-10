<template>
  <div class="p-10 bg-purple-300">
    <div>
      <router-link to="/" class="text-sm text-black  hover:underline">Volver</router-link>
    </div>
    <div>
      Somos los fascículos
    </div>
  </div>
</template>
<script>
import useCounterStore from "../stores/counter";

export default {
  name: "Fascículos",
  computed: {
    counter() {
      return useCounterStore();
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
