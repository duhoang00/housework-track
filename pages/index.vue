<template>
  <div style="text-align: -webkit-center">
    <v-card tonal class="pa-6" style="max-width: 800px">
      <v-timeline density="compact" side="end">
        <v-timeline-item
          fill-dot
          class="white--text mb-12"
          dot-color="orange"
          size="large"
        >
          <v-text-field
            v-model="input"
            hide-details
            label="Add an event..."
            density="compact"
            @keydown.enter="addEvent"
          >
            <template v-slot:append>
              <v-btn class="mx-0" variant="text" @click="addEvent">
                Post
              </v-btn>
            </template>
          </v-text-field>
        </v-timeline-item>

        <v-slide-x-transition group>
          <v-timeline-item
            v-for="event in timeline"
            :key="event.id"
            class="mb-4"
            dot-color="pink"
            size="small"
          >
            <div class="d-flex justify-space-between flex-grow-1">
              <div>{{ event.text }}</div>
              <div class="flex-shrink-0">{{ event.time }}</div>
            </div>
          </v-timeline-item>
        </v-slide-x-transition>

        <v-timeline-item class="mb-6" hide-dot>
          <span>TODAY</span>
        </v-timeline-item>

        <v-timeline-item class="mb-4" dot-color="grey" size="small">
          <div class="d-flex justify-space-between flex-grow-1">
            <div>This order was archived.</div>
            <div class="flex-shrink-0">15:26 EDT</div>
          </div>
        </v-timeline-item>

        <v-timeline-item class="mb-4" dot-color="primary" size="small">
          <div class="d-flex justify-space-between flex-grow-1">
            <div>
              <v-chip
                class="white--text ml-0"
                color="purple"
                label
                size="small"
              >
                APP
              </v-chip>
              Digital Downloads fulfilled 1 item.
            </div>
            <div class="flex-shrink-0">15:25 EDT</div>
          </div>
        </v-timeline-item>

        <v-timeline-item class="mb-4" dot-color="grey" size="small">
          <div class="d-flex justify-space-between flex-grow-1">
            <div>
              Order confirmation email was sent to John Leider
              (john@vuetifyjs.com).
            </div>
            <div class="flex-shrink-0">15:25 EDT</div>
          </div>
        </v-timeline-item>

        <v-timeline-item class="mb-4" hide-dot>
          <v-btn variant="outlined"> Resend Email </v-btn>
        </v-timeline-item>

        <v-timeline-item class="mb-4" dot-color="grey" size="small">
          <div class="d-flex justify-space-between flex-grow-1">
            <div>
              A $15.00 USD payment was processed on PayPal Express Checkout
            </div>
            <div class="flex-shrink-0">15:25 EDT</div>
          </div>
        </v-timeline-item>

        <v-timeline-item dot-color="grey" size="small">
          <div class="d-flex justify-space-between flex-grow-1">
            <div>
              John Leider placed this order on Online Store (checkout
              #1937432132572).
            </div>
            <div class="flex-shrink-0">15:25 EDT</div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-card>
  </div>
</template>

<script>
export default {
  computed: {
    timeline() {
      return this.events.slice().reverse();
    },
  },
  data: () => ({
    input: null,
    events: [
      {
        id: "1",
        title: "Giat do",
        detail: "",
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
        title: this.input,
        detail: "",
        time,
        textTime: time.toDateString(),
        color: "red-lighten-2",
      });

      this.input = null;
    },
  },
};
</script>
