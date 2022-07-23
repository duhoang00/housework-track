<template>
  <v-snackbar v-model="showSnackBar" color="red-darken-2">
    {{ snackBarContent }}
    <template v-slot:actions>
      <v-btn color="white" variant="text" @click="showSnackBar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: "ActionResultSnackBar",
  props: {
    showSnackBar: {
      type: Boolean,
      deafult: false,
    },
    snackBarContent: {
      type: String,
      default: "",
    },
  },
};
</script>
