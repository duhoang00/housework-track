<template>
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
          <v-btn class="mx-0" variant="text" @click="addEvent"> Post </v-btn>
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
</template>

<script>
export default {
  name: "ActionsMenu",
  data: () => ({
    input: "",
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
      if (newEvent.title) {
        this.events.push(newEvent);
      } else {
        this.showSnackBar = true;
        this.snackBarContent = "Event title is empty";
      }
      this.input = null;
      this.saveToLocalStorage();
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
