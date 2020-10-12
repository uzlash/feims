<template>
  <v-app class="custom-background">
    <v-container>
      <v-row>
        <v-col
          cols="3"
          xs="12"
          md="3"
          sm="12"
          v-for="equipment in equipments"
          :key="equipment.name"
        >
          <v-card class="mx-auto" max-width="344">
            <v-img :src="equipment.image" height="200px"></v-img>
            <v-card-title class="font-weight-light text-h6">
              {{ equipment.name }}
            </v-card-title>

            <v-card-subtitle>
              {{ equipment.sub }}
              <span class="red">{{ equipment.sp1 }}</span>
              <span class="green">{{ equipment.sp }}</span>
            </v-card-subtitle>
            <v-card-subtitle>
              {{ equipment.sub2 }}
              <span class="green">{{ equipment.sp2 }}</span>
            </v-card-subtitle>
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
    equipments: [
      {
        name: "Air condition",
        sub: "condition ",

        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRe-8JezQN9WeGtUBjL6OEc2rS7NZkGgx_43w&usqp=CAU",
        sp: "good",
      },
      {
        name: "Window",
        sub: "condition ",
        sub2: "cost of repair",
        image:
          "https://www.aandd.com.au/qld/images/virtuemart/product/Sliding%20Window%201200%20x%201510.jpg",
        sp1: "bad",
        sp2: "N 7,000",
      },
      {
        name: "Door",
        sub: "condition ",
        sub2: "cost of repair",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYNHgIh9GxtULqOtFL_xPxCCeOi6q8EdpZvw&usqp=CAU",
        sp1: "bad",
        sp2: "N 10,000",
      },
      {
        name: "Generator",
        sub: "condition ",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9Q0MFWlFAY4DsZagpXKOu4WLZwJHwpgSwYA&usqp=CAU",
        sp: "good",
      },
      {
        name: "Extention",
        sub: "condition ",
        sub2: "cost of repair",
        image:
          "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/I/R/155037_1562773997.jpg",
        sp1: "bad",
        sp2: "N 1,000",
      },
      {
        name: "fridge",
        sub: "condition ",

        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpUmF5JLhfad4qNVhm9Ak7N18l1YHFLO6VgQ&usqp=CAU",
        sp: "good",
      },
      {
        name: "Fan",
        sub: "condition ",

        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0nJgRFPFNV4yKd--ySaHTuDak6rOZfd3W7Q&usqp=CAU",
        sp: "good",
      },
      {
        name: "shower head",
        sub: "condition ",

        image:
          "https://assets.kogan.com/images/new-aim/NAI-SHOWER-A3-SQ-8-SI/1-a4d537c19e-shower-a3-sq-8-si-99.jpg?auto=webp&canvas=1200%2C630&fit=bounds&height=630&quality=75&width=1200",

        sp: "good",
      },
      {
        name: "Table",
        sub: "condition ",
        sub2: "cost of repair",
        image:
          "https://cdn.shopify.com/s/files/1/0118/7372/products/armadillo-coffeedining-table-spaceman-2_1024x1024.jpg?v=1530966096",
        sp1: "good",
        sp2: "N 5,000",
      },
      {
        name: "Desktop",
        sub: "condition ",
        sub2: "cost of repair",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZcnhxvZx8zHksgN89sQNxVFz_PSfITrDmlw&usqp=CAU",
        sp1: "good",
        sp2: "N 5,000",
      },
      {
        name: "Car",
        sub: "condition ",

        image:
          "https://du66ttpehq3tn.cloudfront.net/t_smart_auto_crop/https://d1sdeqoxcfgxl0.cloudfront.net/images/original/80fe55fd59cf46b41fbf050c76ab5122a9c75504000f4fd1df94b676.jpg",

        sp: "good",
      },
      {
        name: "Fan",
        sub: "condition ",

        image:
          "data:image/jpeg;base64,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",

        sp: "good",
      },
    ],
  }),
};
</script>

<style scoped>
.custom-background {
  /* background-image: url('../assets/builder.jpg');
  background-size: cover;
  background-attachment: fixed; */
}
</style>
