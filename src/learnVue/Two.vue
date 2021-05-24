<template>
  <button v-on:click="changeState('new state')">
    change parent
  </button>
</template>

<script>
export default {
  name: "Two",
  props: ["changeState"],
};
</script>
