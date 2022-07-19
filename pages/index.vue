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
        <v-card>
          <v-card-title :class="['text-h6', `bg-${event.color}`]">
            {{ event.text }}
          </v-card-title>
          <v-card-text class="white text--primary">
            <p>
              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
              scaevola imperdiet nec ut, sed euismod convenire principes at. Est
              et nobis iisque percipit, an vim zril disputando voluptatibus, vix
              an salutandi sententiae.
            </p>
            <v-btn :color="event.color" variant="outlined"> Button </v-btn>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>

    <v-card-actions class="pa-5">
      <v-text-field
        v-model="input"
        hide-details
        label="Add an event"
        variant="solo"
        @keydown.enter="addEvent"
      >
      </v-text-field>
      <v-btn variant="text" @click="addEvent" class="ml-1"> Add </v-btn>
    </v-card-actions>
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
        color: "green-lighten-1",
      },
    ],
  }),
  methods: {
    addEvent() {
      const time = new Date();
      this.events.push({
        id: this.nonce++,
        text: this.input,
        time,
        textTime: time.toDateString(),
        color: "red-lighten-2",
      });

      this.input = null;
    },
  },
};
</script>
