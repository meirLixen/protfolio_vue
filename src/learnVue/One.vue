<template>
  <div>{{ state }}</div>
  <Two :changeState="changeState" />
</template>

<script>
import Two from "./Two";
export default {
  name: "One",
  data() {
    return {
      state: "state",
    };
  },

  methods: {
    changeState() {
      this.state = "new state";
    },
  },

  components: {
    Two,
  },
};
</script>
