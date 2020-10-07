<template>
  <div class="facility">
    <v-app class="grey lighten-4">
      <v-container>
        <h1
          class="text-h5 font-weight-light text-uppercase grey--text text--darken-2"
        >
          Facility
        </h1>
        <v-row>
          <v-col cols="12">
            <v-card>
              <v-row dense no-gutters>
                <v-col cols="8">
                  <v-card-title class="text-h2"> Zenith Bank </v-card-title>
                  <span></span>
                  <v-card-text>
                    Head Office: No 15 sule lamido road gwarimpa, abuja.
                  </v-card-text>
                </v-col>
                <v-col cols="4">
                  <v-card-title class="text-h6 font-weight-light px-2">
                    2020 Budget Allocation
                  </v-card-title>
                  <v-card-title class="text-h5 font-weight-light pa-2"
                    >Total Availaible Funds: 
                    <span class="green--text"> N1Bn</span></v-card-title
                  >
                  <v-card-title class="text-h5 font-weight-light pa-2"
                    >Total Cost of Repairs: 
                    <span class="red--text"> N280M</span></v-card-title
                  >
                </v-col>
              </v-row>
              <v-divider class="mx-4"></v-divider>
              <v-card-actions>
                <v-btn color="light-blue darken-2" text>
                  More Details
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-card> 1 </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card> 2 </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card> 3 </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>
