<template>
  <v-app class="grey lighten-4">
    <v-container>
      <v-row>
        <v-col cols="3" xs="12" md="3" sm="12" v-for="site in sites" :key="site.name">
          <v-card class="mx-auto" max-width="344">
            <v-img :src="site.image" height="200px"></v-img>
            <v-card-title class="font-weight-light text-h6"> {{ site.name }} </v-card-title>
            <!-- <v-card-title :class="this.$vuetify.breakpoint.sm ? 'text-h1' : 'text-h6'"> {{ site.name }} </v-card-title> -->
            <v-card-subtitle>
              {{ site.location }}
            </v-card-subtitle>
            <v-card-actions>
              <v-btn color="light-blue" text> more </v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  components: {},
  data: () => ({
    sites: [
      {
        name: "Abuja Millenium Tower",
        location: "Abuja, Nigeria",
        image:
          "https://i1.wp.com/sapientvendors.com.ng/wp-content/uploads/2015/03/Millennium-Tower-abuja.jpg",
      },
      {
        name: "Eko Atlantic",
        location: "Lagos, Nigeria",
        image:
          "https://pix10.agoda.net/hotelImages/4846640/-1/3c2e806ade3148cc56af0859b103f51c.jpg?s=1200x800",
      },
      {
        name: "River Niger",
        location: "Niger, Nigeria",
        image:
          "https://constructionreviewonline.com/wp-content/uploads/2014/08/River-Niger.jpg",
      },
      {
        name: "Lagos Light Rail",
        location: "Lagos, Nigeria",
        image:
          "https://guardian.ng/wp-content/uploads/2015/05/lagos-light-rail-640x360.jpg",
      },
      {
        name: "Abuja Trade Center",
        location: "Abuja, Nigeria",
        image:
          "https://guardian.ng/wp-content/uploads/2016/05/Abuja-world-trade-centre.jpg",
      },
      {
        name: "Lekki Free Trade Zone",
        location: "Abuja, Nigeria",
        image:
          "https://guardian.ng/wp-content/uploads/2018/05/Lekki-Free-Trade-Zone.jpg",
      },
      {
        name: "Ado Bayero Mall",
        location: "Kano, Nigeria",
        image:
          "https://koaconsultants.com/wp-content/uploads/2018/03/Front_AdoBayeromall2.jpg",
      },
      {
        name: "Abuja Gateway Airport",
        location: "Abuja, Nigeria",
        image: "https://inhabitat.com/files/2010/03/solarloom-lead01.jpg",
      },
    ],
  }),
};
</script>
