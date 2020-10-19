<template>
  <div class="facility">
    <v-app class="grey lighten-4">
      <v-container>
        <h1
          class="text-h5 font-weight-light text-uppercase grey--text text--darken-2"
        >
          Dashboard
        </h1>
        <v-row>
          <v-col cols="12">
            <v-card tile outlined>
              <v-row dense no-gutters>
                <v-col cols="8">
                  <v-card-title class="text-h2"> Keiko Corp </v-card-title>
                  <span></span>
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
                <v-btn color="light-blue darken-2" text> More Details </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="3" v-for="item in Statistics" :key="item.title">
            <v-card class="pa-4 d-flex flex-column align-center" tile outlined>
              <v-btn class="mx-2" fab small depressed dark color="light-blue">
                <v-icon dark>{{ item.icon }}</v-icon>
              </v-btn>
              <div class="text-h6 font-weight-light">{{ item.number }}</div>
              <div class="body-1">{{ item.title }}</div>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-card height="400" class="custom__card--scrollable" tile outlined>
              <v-card-title class="font-weight-light"
                >Top Priority Repairs</v-card-title
              >
              <v-divider class="mx-4"></v-divider>
              <v-card-text
                class="pa-2"
                v-for="repair in Repairs"
                :key="repair.image"
              >
                <v-row>
                  <v-col cols="2">
                    <v-avatar size="40">
                      <v-img :src="repair.image"></v-img>
                    </v-avatar>
                  </v-col>
                  <v-col cols="5">
                    <div>{{ repair.name }}</div>
                    <span
                      >Condition:
                      <span class="red--text">{{
                        repair.condition
                      }}</span></span
                    >
                  </v-col>
                  <v-col cols="5">
                    <div>Cost of Repair</div>
                    <span class="green--text">N {{ repair.cost }}</span>
                  </v-col>
                </v-row>
                <v-divider class="mx-4"></v-divider>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="6">
            <v-card height="400" class="custom__card--scrollable" tile outlined>
              <v-card-title class="font-weight-light"
                >Updates History</v-card-title
              >
              <v-divider class="mx-4"></v-divider>
              <v-card-text
                class="pa-2"
                v-for="repair in Repairs"
                :key="repair.image"
              >
                <v-row>
                  <v-col cols="2">
                    <v-avatar size="40">
                      <v-img :src="repair.image"></v-img>
                    </v-avatar>
                  </v-col>
                  <v-col cols="5">
                    <div>{{ repair.name }}</div>
                    <span
                      >Condition:
                      <span class="red--text">{{
                        repair.condition
                      }}</span></span
                    >
                  </v-col>
                  <v-col cols="5">
                    <div>Cost of Repair</div>
                    <span class="green--text">N {{ repair.cost }}</span>
                  </v-col>
                </v-row>
                <v-divider class="mx-4"></v-divider>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-card tile outlined>
              <v-card-title class="font-weight-light"
                >Repairs Summary</v-card-title
              >
              <v-divider class="mx-4"></v-divider>
              <GChart
                type="ColumnChart"
                :data="columnChartData"
                :options="columnChartOptions"
              />
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card></v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </div>
</template>

<script>
export default {
  components: {},
  data: () => ({
    Statistics: [
      {
        icon: "mdi-office-building",
        number: "1",
        title: "Site",
        route: "",
        color: "",
      },
      {
        icon: "mdi-warehouse",
        number: "1200",
        title: "Buildings",
        route: "",
        color: "",
      },
      {
        icon: "mdi-warehouse",
        number: "1756",
        title: "High Value Equipments",
        route: "",
        color: "",
      },
      {
        icon: "mdi-warehouse",
        number: "5220",
        title: "Low Value Equipments",
        route: "",
        color: "",
      },
      {
        icon: "mdi-warehouse",
        number: "13",
        title: "Obsolete",
        route: "",
        color: "",
      },
      {
        icon: "mdi-warehouse",
        number: "25",
        title: "Abandonded",
        route: "",
        color: "",
      },
      {
        icon: "mdi-warehouse",
        number: "55",
        title: "Repairable",
        route: "",
        color: "",
      },
      {
        icon: "mdi-warehouse",
        number: "255",
        title: "Good Condition",
        route: "",
        color: "",
      },
    ],
    Repairs: [
      {
        name: "Keiko building 19",
        image:
          "https://www.newsrealty.com.ng/wp-content/uploads/2018/11/newsrealtyk87-8.jpg",
        condition: "Bad",
        cost: "7,500,000",
      },
      {
        name: "Keiko building 33",
        image:
          "https://lh3.googleusercontent.com/proxy/_uyZOAkv7iambkDXjWla_EVzzBssChbyJSETK7lgzfTeeNC5hatMDb9fYAzzOCcm3pSeKs_savNwRoK4nvGuh1xUhvqjHAwG8Yo",
        condition: "Bad",
        cost: "2,200,000",
      },
      {
        name: "Keiko building 41",
        image:
          "https://images.nigeriapropertycentre.com/properties/images/75583/221167_75583-madina-towers-an-ultra-modern-office-building-in-the-heart-of-the-city--for-sale--lagos-island-lagos-nigeria.jpg",
        condition: "Bad",
        cost: "1,760,000",
      },
      {
        name: "Keiko Equipment Car 2310",
        image:
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ford-mustang-boss-429-1970-by-simon-clay-news-photo-1598884238.jpg?crop=1.00xw:0.757xh;0,0.243xh&resize=1200:*",
        condition: "Bad",
        cost: "930,000",
      },
    ],
    columnChartData: [
      ["Year", "Repairs", { role: "style" }],
      ["2014", 100000000, "#03A9F4"],
      ["2015", 550000000, "#03A9F4"],
      ["2016", 200000000, "#03A9F4"],
      ["2017", 350000000, "#03A9F4"],
      ["2018", 200000000, "#03A9F4"],
      ["2019", 350000000, "#03A9F4"],
    ],
    columnChartOptions: {
      title: "Money spent on repairs",
      subtitle: "Repairs 2014-2019",
      height: 334,
      bar: { groupWidth: "20%", color: "red" },
      legend: "none",
    },
  }),
};
</script>

<style lang="scss">
.custom__card--scrollable {
  overflow-x: hidden;
  overflow-y: auto;
}
</style>