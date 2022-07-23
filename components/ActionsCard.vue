<template>
  <v-card class="mt-5 d-flex justify-end">
    <v-btn
      class="flex-shrink-1 ma-2"
      flat
      color="error"
      @click="resetInLocalStorage"
      >Reset</v-btn
    >
  </v-card>
</template>

<script>
export default {
  name: "ActionsCard",
  methods: {
    resetInLocalStorage() {
      localStorage.removeItem("houseworkTrackEvents");
      this.events = [];
    },
  },
};
</script>
