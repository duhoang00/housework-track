<template>
  <div style="text-align: -webkit-center">
    <v-card tonal class="pa-6">
      <v-timeline side="end">
        <v-timeline-item
          fill-dot
          class="white--text mb-12"
          dot-color="orange"
          size="large"
        >
          <template v-slot:opposite>
            <span>TODAY</span>
          </template>
          <v-text-field
            v-model="input"
            hide-details
            label="Add an event..."
            density="compact"
            variant="outlined"
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
              <div>{{ event.title }}</div>
              <div class="flex-shrink-0">{{ event.textTime }}</div>
            </div>
          </v-timeline-item>
        </v-slide-x-transition>

        <v-timeline-item class="mb-6" hide-dot>
          <span>YESTERDAY</span>
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
    currentDate: new Date(),
    currentDateString: new Date().toDateString(),
    events: [],
  }),
  methods: {
    addEvent() {
      const date = new Date();
      const time = date.toTimeString();
      const shortTime = time.substring(0, 5);
      this.events.push({
        id: this.nonce++,
        title: this.input,
        detail: "",
        time,
        textTime: shortTime,
        color: "red-lighten-2",
      });

      this.input = null;
    },
  },
};
</script>
<style lang="scss" scoped>
::v-deep(.v-input__append) {
  padding: 0;
  margin: 0;
}
</style>
