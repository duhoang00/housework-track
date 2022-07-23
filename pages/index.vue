<template>
  <div style="text-align: -webkit-center">
    <v-card tonal class="pa-6">
      <v-timeline side="end">
        <action-item
          class="white--text mb-12"
          time="TODAY"
          :dotProps="{
            hideDot: false,
            dotColor: 'orange',
            size: 'large',
          }"
        />

        <v-slide-x-transition group>
          <div v-for="event in timeline" :key="event.id">
            <action-item
              class="mb-4"
              :time="event.textTime"
              :content="event.title"
              :dotProps="{
                hideDot: false,
                dotColor: event.color,
                size: 'small',
              }"
            />
          </div>
        </v-slide-x-transition>

        <action-item
          class="mb-6"
          time="YESTERDAY"
          content="being lazy"
          :dotProps="{
            hideDot: false,
            dotColor: 'grey',
            size: 'small',
          }"
        />
      </v-timeline>
    </v-card>

    <actions-card />

    <action-result-snack-bar
      :showSnackBar="showSnackBar"
      :snackBarContent="snackBarContent"
    />
  </div>
</template>

<script>
export default {
  components: {
    ActionsCard: () => import("#components/ActionsCard"),
    ActionResultSnackBar: () => import("#components/ActionResultSnackBar"),
    ActionsMenu: () => import("#components/ActionsMenu"),
    ActionItem: () => import("#components/ActionItem"),
  },
  computed: {
    timeline() {
      return this.events?.slice().reverse();
    },
  },
  data: () => ({
    events: [],
    showSnackBar: false,
    snackBarContent: "",
  }),
  mounted() {
    this.fetchFromLocalStorage();
  },
  methods: {
    fetchFromLocalStorage() {
      this.events =
        JSON.parse(localStorage.getItem("houseworkTrackEvents")) || [];
    },
    saveToLocalStorage() {
      localStorage.setItem("houseworkTrackEvents", JSON.stringify(this.events));
    },
  },
};
</script>
