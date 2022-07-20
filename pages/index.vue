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

          <v-menu offset-y transition="scale-transition">
            <template v-slot:activator="{ props }"
              ><v-text-field
                v-bind="props"
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
              </v-text-field></template
            >
            <v-list>
              <v-list-item
                v-for="(event, i) in defaultEvents"
                :key="i"
                @click="addEvent(event)"
              >
                <v-chip :color="event.color" label
                  ><v-icon start icon="mdi-label"></v-icon>{{ event.title }}
                </v-chip>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-timeline-item>

        <v-slide-x-transition group>
          <v-timeline-item
            v-for="event in timeline"
            :key="event.id"
            class="mb-4"
            :dot-color="event.color"
            size="small"
          >
            <template v-slot:opposite>
              <div>{{ event.textTime }}</div>
            </template>
            <div>{{ event.title }}</div>
          </v-timeline-item>
        </v-slide-x-transition>

        <v-timeline-item class="mb-6" hide-dot>
          <template v-slot:opposite>
            <span>YESTERDAY</span>
          </template>
        </v-timeline-item>
      </v-timeline>
    </v-card>

    <v-card class="mt-5 d-flex justify-end">
      <v-btn
        class="flex-shrink-1 ma-2"
        flat
        color="error"
        @click="resetInLocalStorage"
        >Reset</v-btn
      >
    </v-card>

    <v-snackbar v-model="showNoTitleSnackBar" color="red-darken-2">
      Event title is empty
      <template v-slot:actions>
        <v-btn
          color="white"
          variant="text"
          @click="showNoTitleSnackBar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  computed: {
    timeline() {
      return this.events?.slice().reverse();
    },
  },
  data: () => ({
    input: null,
    currentDate: new Date(),
    currentDateString: new Date().toDateString(),
    events: [],
    showNoTitleSnackBar: false,
    defaultEvents: [
      {
        id: null,
        title: "Giặt đồ",
        detail: null,
        time: null,
        textTime: null,
        color: "#1565C0",
      },
      {
        id: null,
        title: "Phơi đồ",
        detail: null,
        time: null,
        textTime: null,
        color: "#FF6D00",
      },
      {
        id: null,
        title: "Xếp đồ",
        detail: null,
        time: null,
        textTime: null,
        color: "#3E2723",
      },
      {
        id: null,
        title: "Thay drap",
        detail: null,
        time: null,
        textTime: null,
        color: "#64DD17",
      },
    ],
  }),
  mounted() {
    this.fetchFromLocalStorage();
  },
  methods: {
    addEvent(event) {
      const date = new Date();
      const time = date.toTimeString();
      const shortTime = time.substring(0, 5);
      const newEvent = {
        id: this.nonce++,
        title: event.title ? event.title : this.input,
        detail: "",
        time,
        textTime: shortTime,
        color: event ? event.color : "#BBDEFB",
      };
      console.log(newEvent);
      if (newEvent.title) {
        this.events.push(newEvent);
      } else {
        this.showNoTitleSnackBar = true;
      }
      this.input = null;
      this.saveToLocalStorage();
    },
    fetchFromLocalStorage() {
      this.events =
        JSON.parse(localStorage.getItem("houseworkTrackEvents")) || [];
    },
    saveToLocalStorage() {
      localStorage.setItem("houseworkTrackEvents", JSON.stringify(this.events));
    },
    resetInLocalStorage() {
      localStorage.removeItem("houseworkTrackEvents");
      this.events = [];
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
