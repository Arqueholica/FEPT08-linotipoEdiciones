<template>
  <div class="grid grid-cols-3">
    <div class=" col-start-1">
      <h1 class="text-8xl text-red-600 font-bold underline">
        Hello world! {{ title }} 🥸🍟🍔🛸
      </h1>
    </div>
    <div class="col-start-2 p-10 font-bold text-serif"><router-view /></div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      title: "LET'S EAT THE WORLD",
    };
  },
};
</script>
