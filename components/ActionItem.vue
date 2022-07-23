<template>
  <v-timeline-item
    :hide-dot="dotProps.hideDot"
    :dot-color="dotProps.dotColor"
    :size="dotProps.size"
  >
    <template v-slot:opposite>
      <span>{{ time }}</span>
    </template>

    <div v-if="content">{{ content }}</div>
    <actions-menu v-else />
  </v-timeline-item>
</template>

<script>
export default {
  name: "ActionItem",
  props: {
    time: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },

    dotProps: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
