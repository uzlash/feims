<template>
  <div class="building">
    <v-app class="grey lighten-4">
      <v-container>
        <h2 class="text-h6 font-weight-light">Building - LLH1</h2>
        <v-card tile outlined>
          <v-row>
            <v-col cols="7" class="pl-6">
              <!-- <v-row justify="center"> -->
              <!-- <v-avatar size="200"> -->
              <v-img
                height="300px"
                src="https://i.pinimg.com/originals/2a/3a/bd/2a3abd8d48b87a3b0f79244d55f1b846.jpg"
              ></v-img>
              <h2 class="mt-4 font-weight-light">Name: Large Lecture Hall 1</h2>
              <v-divider></v-divider>
              <div class="d-flex flex-column py-4">
                <!-- <span> Code: LLH1 </span> -->
                <span class="body-1 font-weight-regular">
                  Condition: Obsolete
                </span>
                <span class="body-1 font-weight-regular"
                  >Faculty/Section: Faculty of Sciences</span
                >
                <span class="body-1 font-weight-regular"
                  >Department: Mathematical Sciences</span
                >
                <span class="body-1 font-weight-regular"
                  >Longitude: 135.1</span
                >
                <span class="body-1 font-weight-regular"
                  >Latitude: 14.212</span
                >
              </div>
              <!-- </v-avatar> -->
              <!-- </v-row> -->
            </v-col>
            <v-divider vertical></v-divider>
            <v-col cols="4">
              <h1 class="font-weight-light">Summary</h1>
              <v-divider></v-divider>
              <div class="d-flex flex-column py-6">
                <span class="body-1 font-weight-regular">
                  Total Cost of Repairs:
                  <span class="light-blue--text text--darken-2"
                    >N1,500,000</span
                  >
                </span>
                <span class="body-1 font-weight-regular">
                  Core Building Repairs:
                  <span class="light-blue--text text--darken-2">N700,000</span>
                </span>
                <span class="body-1 font-weight-regular">
                  Total Equipments Availaible:
                  <span class="light-blue--text text--darken-2">4580</span>
                </span>
                <span class="body-1 font-weight-regular">
                  Total High Value Equipments:
                  <span class="light-blue--text text--darken-2">1080</span>
                </span>
                <span class="body-1 font-weight-regular">
                  Total Low Value Equipments:
                  <span class="light-blue--text text--darken-2">3580</span>
                </span>
                <span class="body-1 font-weight-regular">
                  High Value Equipments Good Condition:
                  <span class="light-blue--text text--darken-2">1200</span>
                </span>
                <span class="body-1 font-weight-regular">
                  Low Value Equipments Good Condition:
                  <span class="light-blue--text text--darken-2">2220</span>
                </span>
                <span class="body-1 font-weight-regular">
                  High Value Equipments Repairable:
                  <span class="light-blue--text text--darken-2">3580</span>
                </span>
                <span class="body-1 font-weight-regular">
                  Low Value Equipments Repairable:
                  <span class="light-blue--text text--darken-2">580</span>
                </span>
                <span class="body-1 font-weight-regular">
                  High Value Equipments Obsolete:
                  <span class="light-blue--text text--darken-2">3580</span>
                </span>
                <span class="body-1 font-weight-regular">
                  Low Value Equipments Obsolete:
                  <span class="light-blue--text text--darken-2">580</span>
                </span>
                <span class="body-1 font-weight-regular">
                  High Value Equipments Abandoned:
                  <span class="light-blue--text text--darken-2">3580</span>
                </span>
                <span class="body-1 font-weight-regular">
                  Low Value Equipments Abandoned:
                  <span class="light-blue--text text--darken-2">3580</span>
                </span>
              </div>
              <v-divider></v-divider>
              <v-btn @click="goToEquipment()" block dark color="light-blue" class="mt-4"
                >View Breakdown</v-btn
              >
            </v-col>
          </v-row>
        </v-card>
      </v-container>
    </v-app>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {
    goToEquipment() {
      this.$router.push('llh1/equipment')
    }
  }
};
</script>
