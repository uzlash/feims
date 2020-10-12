<template>
  <v-app class="grey lighten-4">
    <v-container>
      <h2>Please Select site/section/department from the list below</h2>
      <!-- <v-row>
        <v-col cols="3" xs="12" md="3" sm="12" v-for="site in sites" :key="site.name">
          <v-card class="mx-auto" max-width="344">
            <v-img :src="site.image" height="200px"></v-img>
            <v-card-title class="font-weight-light text-h6"> {{ site.name }} </v-card-title>
            <v-card-subtitle>
              {{ site.location }}
            </v-card-subtitle>
            <v-card-actions>
              <v-btn color="light-blue" text> more </v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row> -->
      <!-- <v-row>
        <v-col cols="5">
          <v-treeview
          :active.sync="active"
          :items="items"
          :load-children="fetchUsers"
          :open.sync="open"
          activatable
          color="warning"
          open-on-click
          transition
        >
          <template v-slot:prepend="{ item }">
            <v-icon v-if="!item.children">
              mdi-account
            </v-icon>
          </template>
        </v-treeview>
        </v-col>
        <v-divider vertical></v-divider>
        <v-col cols="7">
          <v-scroll-y-transition mode="out-in">
          <div
            v-if="!selected"
            class="title grey--text text--lighten-1 font-weight-light"
            style="align-self: center;"
          >
            Select a Site
          </div>
          <v-card
            v-else
            :key="selected.id"
            class="pt-6 mx-auto"
            flat
            max-width="400"
          >
          <v-card-text>
            <h3 class="headline mb-2">
                {{ selected.name }}
              </h3>
              <div class="blue--text mb-2">
                {{ selected.email }}
              </div>
              <div class="blue--text subheading font-weight-bold">
                {{ selected.username }}
              </div>
          </v-card-text>
        </v-col>
      </v-row> -->
      <v-row>
        <v-col cols="6">
          <v-treeview
            v-model="tree"
            :open="open"
            :items="items"
            activatable
            item-key="name"
            open-on-click
          >
            <template>
              <v-icon>
                <!-- {{ open ? "mdi-folder-open" : "mdi-folder" }} -->
                mdi-office-building
              </v-icon>
            </template>
          </v-treeview>
        </v-col>
        <v-col cols="6">
          
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
        name: "Department of Mechanical Engineering",
        location: "Kasu 1, Kaduna",
        image:
          "https://i1.wp.com/sapientvendors.com.ng/wp-content/uploads/2015/03/Millennium-Tower-abuja.jpg",
      },
      {
        name: "Department of Computer Engineering",
        location: "Lagos, Nigeria",
        image:
          "https://pix10.agoda.net/hotelImages/4846640/-1/3c2e806ade3148cc56af0859b103f51c.jpg?s=1200x800",
      },
      {
        name: "Department of Electrical Engineering",
        location: "Niger, Nigeria",
        image:
          "https://constructionreviewonline.com/wp-content/uploads/2014/08/River-Niger.jpg",
      },
      {
        name: "Department of Civil Engineering",
        location: "Lagos, Nigeria",
        image:
          "https://guardian.ng/wp-content/uploads/2015/05/lagos-light-rail-640x360.jpg",
      },
    ],
    open: ["public"],
    files: {
      html: "mdi-language-html5",
      js: "mdi-nodejs",
      json: "mdi-code-json",
      md: "mdi-language-markdown",
      pdf: "mdi-file-pdf",
      png: "mdi-file-image",
      txt: "mdi-file-document-outline",
      xls: "mdi-file-excel",
    },
    tree: [],
    items: [
      {
        name: "Kasu 1",
        children: [
          {
            name: "Faculty Of Sciences",
            children: [
              {
                name: "Department of Computer Science",
              },
              {
                name: "Department of Mathematical Sciences",
              },
              {
                name: "Department of Biological Sciences",
              },
            ],
          },
          {
            name: "Faculty of Engineering",
            children: [
              {
                name: "Department of Mechanical Engineering",
              },
              {
                name: "Department of Electrical Engineering",
              },
              {
                name: "Department of Computer Engineering",
              },
            ],
          },
        ],
      },
      {
        name: "Kasu 2",
        children: [
          {
            name: "Faculty Of Sciences",
            children: [
              {
                name: "Department of Computer Science",
              },
              {
                name: "Department of Mathematical Sciences",
              },
              {
                name: "Department of Biological Sciences",
              },
            ],
          },
          {
            name: "Faculty of Engineering",
            children: [
              {
                name: "Department of Mechanical Engineering",
              },
              {
                name: "Department of Electrical Engineering",
              },
              {
                name: "Department of Computer Engineering",
              },
            ],
          },
        ],
      },
    ],
  }),
};
</script>
