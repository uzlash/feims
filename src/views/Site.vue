<template>
  <v-app class="grey lighten-4">
    <v-container>
      <span class="text-h5 font-weight-light">Buildings</span>
      <v-row>
        <v-col cols="3" v-for="(building, index) in buildings" :key="index">
          <v-card>
            <v-img :src="building.image" height="200px"></v-img>
            <v-card-title v-text="building.code"></v-card-title>
            <v-card-subtitle
              class="pb-1"
              v-text="building.name"
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
            <v-card-actions>
              <v-btn color="light-blue" class="text-capitalize" outlined>
                More Details
              </v-btn>
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
    buildings: [
      {
        name: "Large Lecture Hall 1",
        code: "LLH1",
        condition: "Good Condition",
        cost: "0",
        image:
          "https://i.pinimg.com/originals/2a/3a/bd/2a3abd8d48b87a3b0f79244d55f1b846.jpg",
      },
      {
        name: "Large Lecture Hall 2",
        code: "LLH2",
        condition: "Obsolete",
        cost: "300,000",
        image: "https://miro.medium.com/max/7680/1*y-D2swPsSS7x32C946UScg.jpeg",
      },
      {
        name: "Large Lecture Hall 3",
        code: "LLH3",
        condition: "Abandoned",
        cost: "100,000,000",
        image:
          "https://i.pinimg.com/originals/fe/b3/26/feb326e253239065b3c96e6080e3b3c7.jpg",
      },
      {
        name: "Practical Lab 1",
        code: "PL1",
        condition: "Repairable",
        cost: "50,000",
        image:
          "https://media.istockphoto.com/photos/empty-science-lab-teaching-resource-picture-id1044228678?k=6&m=1044228678&s=612x612&w=0&h=NAFscW3TXlNcAxq6TUdXH3VY06idp-X1WNtGzxJnYQc=",
      },
      {
        name: "Practical Lab 2",
        code: "PL2",
        condition: "Repairable",
        cost: "70,000",
        image:
          "https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/images/sc-LabMove-H.jpg?itok=ZrHXpwoh",
      },
      {
        name: "Small Lecture Theatre 1",
        code: "SML1",
        condition: "Abandoned",
        cost: "5,000,000",
        image:
          "https://www.evertaut.co.uk/wp-content/uploads/2019/06/Lecture-chairs-in-small-lecture-theatre.jpg",
      },
      {
        name: "Department Auditorium",
        code: "DA",
        condition: "Good Condition",
        cost: "0",
        image:
          "https://archello.s3.eu-central-1.amazonaws.com/images/2020/04/20/01-VGIK-UPA.1587376767.9312.jpg",
      },
      {
        name: "Workshop 1",
        code: "W1",
        condition: "Abandoned",
        cost: "2,500,000",
        image:
          "https://www.solent.ac.uk/image-library/facilities/marine-engineering-workshops-6.jpg",
      },
    ],
  }),
  computed: {},
  methods: {},
};
</script>
