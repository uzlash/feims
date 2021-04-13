<template>
  <v-app class="grey lighten-4">
    <v-container>
      <span class="text-h5 font-weight-light">Equipments</span>
      <v-tabs grow color="light-blue">
        <v-tab>High Value Equipments</v-tab>
        <v-tab>Low Value Equipments</v-tab>
        <v-tab-item class="grey lighten-4">
          <v-row>
            <v-col cols="3" v-for="(building, index) in buildings" :key="index">
              <v-card>
                <v-img :src="building.image" height="150px"></v-img>
                <v-divider class="mt-1"></v-divider>
                <v-card-title v-text="building.name" class="body-1"></v-card-title>
                <v-card-subtitle
                  class="pb-1"
                  v-text="building.desc"
                ></v-card-subtitle>
                <v-card-subtitle
                  :class="
                    building.condition === 'Good Condition'
                      ? 'green--text py-1'
                      : 'red--text py-1'
                  "
                  v-text="building.condition"
                ></v-card-subtitle>
                <v-card-subtitle
                  class="py-1 green--text"
                  v-text="'N ' + building.cost"
                ></v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
        </v-tab-item>
        <v-tab-item class="grey lighten-4">
          <v-row>
            <v-col cols="3" v-for="(building, index) in buildings" :key="index">
              <v-card>
                <v-img :src="building.image" height="150px"></v-img>
                <v-divider class="mt-1"></v-divider>
                <v-card-title v-text="building.name" class="body-1"></v-card-title>
                <v-card-subtitle
                  class="pb-1"
                  v-text="building.desc"
                ></v-card-subtitle>
                <v-card-subtitle
                  :class="
                    building.condition === 'Good Condition'
                      ? 'green--text py-1'
                      : 'red--text py-1'
                  "
                  v-text="building.condition"
                ></v-card-subtitle>
                <v-card-subtitle
                  class="py-1 green--text"
                  v-text="'N ' + building.cost"
                ></v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
        </v-tab-item>
      </v-tabs>
    </v-container>
  </v-app>
</template>

<script>
export default {
  components: {},
  data: () => ({ buildings: [
      {
        name: "LG LED TV 2",
        desc: "Black, 16 inch",
        condition: "Good Condition",
        cost: "0",
        image:
          "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/R/X/120767_1530267609.jpg",
      },
      {
        name: "HP 640 1",
        desc: "14 inch, core i7, 4gb ram",
        condition: "Obsolete",
        cost: "50,000",
        image: "https://images.techhive.com/images/article/2016/02/nexdock-large-100645123-large.jpg",
      },
      {
        name: "Audi S8 5",
        desc: "4000hp, 4 exhausts",
        condition: "Abandoned",
        cost: "500,000",
        image:
          "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/large-2479-s-classsaloon.jpg?itok=QTxMln2k",
      },
      {
        name: "Panasonic Air condition 1",
        desc: "1.5hp, nitrogen coolant",
        condition: "Repairable",
        cost: "32,000",
        image:
          "https://olist-uc.feednews.com/upload/20191002/5d94a2432c848.jpg",
      },
      {
        name: "Hyundai P67s 1",
        desc: "30,000hp, quad exhaust, blue",
        condition: "Repairable",
        cost: "170,000",
        image:
          "https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option2-764A4983-640x354.jpg",
      }
    ],
  })
};
</script>

<style>
</style>
