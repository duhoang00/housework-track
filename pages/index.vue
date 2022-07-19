<template>
  <v-card tonal>
    <v-timeline align="start">
      <v-timeline-item v-for="(event, i) in events" :key="i" size="small">
        <template v-slot:opposite>
          <div
            class="pt-1 headline font-weight-bold"
            v-text="event.textTime"
          ></div>
        </template>
        <div>
          <h2 class="mt-n1 headline font-weight-light mb-4">
            {{ event.text }}
          </h2>
        </div>
      </v-timeline-item>
      <v-timeline-item
        fill-dot
        class="white--text mb-12"
        dot-color="orange"
        size="large"
      >
        <v-text-field
          v-model="input"
          hide-details
          label="Leave a comment..."
          density="compact"
          @keydown.enter="comment"
        >
          <template v-slot:append>
            <v-btn class="mx-0" variant="text" @click="comment"> Post </v-btn>
          </template>
        </v-text-field>
      </v-timeline-item>
    </v-timeline>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    input: null,
    events: [
      {
        id: "1",
        text: "Giat do",
        time: new Date(),
        textTime: new Date().toDateString(),
      },
    ],
  }),
  methods: {
    comment() {
      const time = new Date();
      this.events.push({
        id: this.nonce++,
        text: this.input,
        time,
        textTime: "Monday",
      });

      this.input = null;
    },
  },
};
</script>
